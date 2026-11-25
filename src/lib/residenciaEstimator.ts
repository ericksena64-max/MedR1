export type AreaMedica =
  | 'clinica_medica'
  | 'cirurgia_geral'
  | 'ginecologia_obstetricia'
  | 'pediatria'
  | 'medicina_preventiva';

export interface DesempenhoArea {
  area: AreaMedica;
  acertos: number;
  total: number;
  peso?: number; // Padrão: 0.20 (20% cada área)
}

export interface ConfiguracaoProva {
  totalQuestoesProva: number; // Ex: 100
  notaCorteMedia: number; // Ex: 80.0
  notaCorteDesvioPadrao?: number; // Ex: 2.0 (0 se corte fixo)
  minimoQuestoesPorArea?: number; // Ex: 10 (evita distorção inicial)
  usarSuavizacaoLaplace?: boolean; // Opcional para cold start: (k + 1) / (n + 2)
}

export interface DetalheAreaEstimativa {
  area: AreaMedica;
  acertos: number;
  total: number;
  peso: number;
  percentual: number;
  se: number;
  ic95: [number, number];
  abaixoDoMinimo: boolean;
}

export interface ResultadoEstimativa {
  status: 'valido' | 'dados_insuficientes';
  notaEstimada: number;
  icDominio95: [number, number];
  ipDiaProva95: [number, number];
  seDominio: number;
  sePredicao: number;
  probabilidadeAprovacao: number; // 0 a 100 (%)
  detalhePorArea: DetalheAreaEstimativa[];
}

export interface SimulacaoGargalo {
  area: AreaMedica;
  percentualAtual: number;
  percentualSimulado: number;
  ganhoAplicadoPct: number;
  peso: number;
  ganhoNotaGeral: number;
  novaNotaEstimada: number;
  novaProbabilidadeAprovacao: number;
  ganhoProbabilidadePp: number;
}

// Aproximação de Abramowitz & Stegun (7.1.26) para a CDF da Normal Padrão Φ(z)
export function normalCDF(z: number): number {
  if (!Number.isFinite(z)) return z > 0 ? 1 : 0;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const prob =
    d *
    t *
    (0.31938153 +
      t *
        (-0.356563782 +
          t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z > 0 ? 1 - prob : prob;
}

function computeWilsonCi95(acertos: number, total: number): [number, number] {
  if (total <= 0) return [0, 0];
  const z = 1.959963984540054;
  const z2 = z * z;
  const p = acertos / total;
  const denom = 1 + z2 / total;
  const center = p + z2 / (2 * total);
  const rad = z * Math.sqrt((p * (1 - p)) / total + z2 / (4 * total * total));
  const low = Math.max(0, (100 * (center - rad)) / denom);
  const high = Math.min(100, (100 * (center + rad)) / denom);
  return [Number(low.toFixed(2)), Number(high.toFixed(2))];
}

export function calcularEstimativaResidencia(
  desempenho: DesempenhoArea[],
  config: ConfiguracaoProva
): ResultadoEstimativa {
  const Z_95 = 1.959963984540054;
  const minQ = config.minimoQuestoesPorArea ?? 10;
  const sigmaCorte = Math.max(0, config.notaCorteDesvioPadrao ?? 0);
  const usarLaplace = Boolean(config.usarSuavizacaoLaplace);

  // Verifica se todas as 5 áreas atingiram o mínimo estatístico
  const dadosInsuficientes =
    desempenho.length < 5 || desempenho.some((a) => a.total < minQ);

  let notaEstimada = 0;
  let varDominio = 0;
  let varProva = 0;

  const detalhePorArea: DetalheAreaEstimativa[] = desempenho.map((item) => {
    const peso = item.peso ?? (desempenho.length > 0 ? 1 / desempenho.length : 0.2);
    const totalValido = Math.max(0, item.total);
    const acertosValidos = Math.max(0, Math.min(totalValido, item.acertos));

    // Evita divisão por zero ou colapso de SE=0 nos extremos (0% ou 100%)
    let p = 0;
    let varBinomial = 0;
    let ic95: [number, number] = [0, 0];

    if (usarLaplace) {
      const nEff = totalValido + 2;
      p = (acertosValidos + 1) / nEff;
      varBinomial = (p * (1 - p)) / nEff;
      ic95 = computeWilsonCi95(acertosValidos + 1, nEff);
    } else if (totalValido > 0) {
      p = acertosValidos / totalValido;
      ic95 = computeWilsonCi95(acertosValidos, totalValido);
      if (acertosValidos === 0 || acertosValidos === totalValido) {
        // Agresti-Coull variance avoids false zero-uncertainty at 0% or 100%
        const z2 = Z_95 * Z_95;
        const nAdj = totalValido + z2;
        const pAdj = (acertosValidos + z2 / 2) / nAdj;
        varBinomial = (pAdj * (1 - pAdj)) / nAdj;
      } else {
        varBinomial = (p * (1 - p)) / totalValido;
      }
    }

    const seArea = 100 * Math.sqrt(varBinomial);

    notaEstimada += peso * (p * 100);
    varDominio += peso * peso * (seArea * seArea);

    // Variância amostral da prova oficial para essa área (usando p regularizado nos extremos)
    const questoesAreaNaProva = peso * Math.max(1, config.totalQuestoesProva);
    const pVarProva =
      totalValido > 0 && (p === 0 || p === 1)
        ? (acertosValidos + 1) / (totalValido + 2)
        : p;
    const varAmostralProvaArea =
      questoesAreaNaProva > 0
        ? (10000 * pVarProva * (1 - pVarProva)) / questoesAreaNaProva
        : 0;
    varProva += peso * peso * varAmostralProvaArea;

    return {
      area: item.area,
      acertos: acertosValidos,
      total: totalValido,
      peso,
      percentual: Number((p * 100).toFixed(2)),
      se: Number(seArea.toFixed(2)),
      ic95,
      abaixoDoMinimo: totalValido < minQ,
    };
  });

  const seDominio = Math.sqrt(varDominio);
  const sePredicao = Math.sqrt(varDominio + varProva);
  const sigmaCombinado = Math.sqrt(
    sePredicao * sePredicao + sigmaCorte * sigmaCorte
  );

  let zScore = 0;
  let probAprovacao = 50;
  if (sigmaCombinado > 1e-6) {
    zScore = (notaEstimada - config.notaCorteMedia) / sigmaCombinado;
    probAprovacao = normalCDF(zScore) * 100;
  } else {
    probAprovacao = notaEstimada >= config.notaCorteMedia ? 100 : 0;
  }

  return {
    status: dadosInsuficientes ? 'dados_insuficientes' : 'valido',
    notaEstimada: Number(notaEstimada.toFixed(2)),
    seDominio: Number(seDominio.toFixed(2)),
    sePredicao: Number(sePredicao.toFixed(2)),
    icDominio95: [
      Number(Math.max(0, notaEstimada - Z_95 * seDominio).toFixed(2)),
      Number(Math.min(100, notaEstimada + Z_95 * seDominio).toFixed(2)),
    ],
    ipDiaProva95: [
      Number(Math.max(0, notaEstimada - Z_95 * sePredicao).toFixed(2)),
      Number(Math.min(100, notaEstimada + Z_95 * sePredicao).toFixed(2)),
    ],
    probabilidadeAprovacao: Number(probAprovacao.toFixed(1)),
    detalhePorArea,
  };
}

/**
 * Identifica o gargalo prioritário (menor percentual com maior margem de ganho)
 * e simula analiticamente quanto a nota geral e a probabilidade de aprovação sobem
 * ao elevar aquela área em +ganhoPct (sem distorção de arredondamento nem dupla suavização).
 */
export function identificarGargaloPrioritario(
  _desempenho: DesempenhoArea[],
  config: ConfiguracaoProva,
  resultadoBase: ResultadoEstimativa,
  ganhoPct: number = 5
): SimulacaoGargalo | null {
  if (resultadoBase.detalhePorArea.length === 0) return null;

  // Prioriza a área com menor percentual (em caso de empate, maior peso)
  const gargalo = [...resultadoBase.detalhePorArea].sort((a, b) => {
    if (a.percentual !== b.percentual) return a.percentual - b.percentual;
    return b.peso - a.peso;
  })[0];

  const ganhoEfetivo = Math.max(0, Math.min(ganhoPct, 100 - gargalo.percentual));
  const percentualSimulado = Number(
    Math.min(100, gargalo.percentual + ganhoEfetivo).toFixed(2)
  );

  if (ganhoEfetivo <= 0) {
    return {
      area: gargalo.area,
      percentualAtual: gargalo.percentual,
      percentualSimulado: gargalo.percentual,
      ganhoAplicadoPct: 0,
      peso: gargalo.peso,
      ganhoNotaGeral: 0,
      novaNotaEstimada: resultadoBase.notaEstimada,
      novaProbabilidadeAprovacao: resultadoBase.probabilidadeAprovacao,
      ganhoProbabilidadePp: 0,
    };
  }

  // Recalcula analiticamente nota, variância de domínio e variância da prova com o novo p da área gargalo
  const Z_95 = 1.959963984540054;
  const sigmaCorte = Math.max(0, config.notaCorteDesvioPadrao ?? 0);
  const totalQProva = Math.max(1, config.totalQuestoesProva);
  const minQ = config.minimoQuestoesPorArea ?? 10;
  const usarLaplace = Boolean(config.usarSuavizacaoLaplace);

  let novaNota = 0;
  let novaVarDominio = 0;
  let novaVarProva = 0;

  for (const area of resultadoBase.detalhePorArea) {
    const isBottleneck = area.area === gargalo.area;
    const pPct = isBottleneck ? percentualSimulado : area.percentual;
    const p = Math.max(0, Math.min(1, pPct / 100));

    let varBin = (area.se / 100) ** 2;
    let pVarProva = p;

    if (isBottleneck) {
      const nBase = area.total > 0 ? area.total : minQ;
      if (usarLaplace) {
        const nEff = nBase + 2;
        varBin = (p * (1 - p)) / nEff;
      } else if (p === 0 || p === 1) {
        const z2 = Z_95 * Z_95;
        const nAdj = nBase + z2;
        const pAdj = (p * nBase + z2 / 2) / nAdj;
        varBin = (pAdj * (1 - pAdj)) / nAdj;
        pVarProva = (p * nBase + 1) / (nBase + 2);
      } else {
        varBin = (p * (1 - p)) / nBase;
      }
    } else if (area.total > 0 && (p === 0 || p === 1)) {
      pVarProva = (area.acertos + 1) / (area.total + 2);
    } else if (area.total === 0 && !usarLaplace) {
      pVarProva = 0;
    }

    const seArea = 100 * Math.sqrt(varBin);

    novaNota += area.peso * pPct;
    novaVarDominio += area.peso * area.peso * seArea * seArea;

    const qArea = area.peso * totalQProva;
    const varProvaArea = qArea > 0 ? (10000 * pVarProva * (1 - pVarProva)) / qArea : 0;
    novaVarProva += area.peso * area.peso * varProvaArea;
  }

  const novoSigma = Math.sqrt(novaVarDominio + novaVarProva + sigmaCorte * sigmaCorte);
  const novaProb =
    novoSigma > 1e-6
      ? Number((normalCDF((novaNota - config.notaCorteMedia) / novoSigma) * 100).toFixed(1))
      : novaNota >= config.notaCorteMedia
      ? 100
      : 0;

  const ganhoNotaGeral = Number((gargalo.peso * ganhoEfetivo).toFixed(2));
  const novaNotaEstimada = Number(Math.min(100, novaNota).toFixed(2));

  return {
    area: gargalo.area,
    percentualAtual: gargalo.percentual,
    percentualSimulado,
    ganhoAplicadoPct: Number(ganhoEfetivo.toFixed(1)),
    peso: gargalo.peso,
    ganhoNotaGeral,
    novaNotaEstimada,
    novaProbabilidadeAprovacao: novaProb,
    ganhoProbabilidadePp: Number(
      (novaProb - resultadoBase.probabilidadeAprovacao).toFixed(1)
    ),
  };
}

export const ESTIMATOR_STORAGE_KEY = 'medr1_residencia_estimator_v1';
export const ESTIMATOR_UPDATED_EVENT = 'medr1-estimator-config-updated';

interface StoredEstimatorShape {
  captureMode?: 'direto' | 'edicoes';
  notaCorteMedia?: number;
  notaCorteDesvioPadrao?: number;
  totalQuestoesProva?: number;
  minimoQuestoesPorArea?: number;
  usarLaplace?: boolean;
  annualCutoffs?: Array<{ year?: number; score?: number }>;
}

/**
 * Single source of truth for parsing persisted estimator configuration JSON.
 */
export function parseEstimatorConfigJson(
  rawJson: string | null,
  fallbackCutoffMean: number = 78
): ConfiguracaoProva {
  const fallback: ConfiguracaoProva = {
    totalQuestoesProva: 100,
    notaCorteMedia: fallbackCutoffMean,
    notaCorteDesvioPadrao: 2.0,
    minimoQuestoesPorArea: 10,
    usarSuavizacaoLaplace: false,
  };

  if (!rawJson) return fallback;

  try {
    const parsed = JSON.parse(rawJson) as StoredEstimatorShape;
    if (!parsed || typeof parsed !== 'object') return fallback;

    let notaCorteMedia =
      typeof parsed.notaCorteMedia === 'number' &&
      Number.isFinite(parsed.notaCorteMedia)
        ? parsed.notaCorteMedia
        : fallbackCutoffMean;
    let notaCorteDesvioPadrao =
      typeof parsed.notaCorteDesvioPadrao === 'number' &&
      Number.isFinite(parsed.notaCorteDesvioPadrao)
        ? Math.max(0, parsed.notaCorteDesvioPadrao)
        : 2.0;

    if (
      parsed.captureMode === 'edicoes' &&
      Array.isArray(parsed.annualCutoffs) &&
      parsed.annualCutoffs.length > 0
    ) {
      const scores = parsed.annualCutoffs
        .map((e) => Number(e?.score))
        .filter((s) => Number.isFinite(s) && s >= 0 && s <= 100);
      if (scores.length > 0) {
        const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
        notaCorteMedia = Number(mean.toFixed(1));
        if (scores.length > 1) {
          const variance =
            scores.reduce((a, s) => a + (s - mean) ** 2, 0) / (scores.length - 1);
          notaCorteDesvioPadrao = Number(Math.sqrt(variance).toFixed(2));
        } else {
          // Single edition: keep conservative 2.0 pp SD to avoid false zero-variance certainty
          notaCorteDesvioPadrao = 2.0;
        }
      }
    }

    return {
      totalQuestoesProva:
        typeof parsed.totalQuestoesProva === 'number' &&
        Number.isFinite(parsed.totalQuestoesProva) &&
        parsed.totalQuestoesProva > 0
          ? Math.round(parsed.totalQuestoesProva)
          : 100,
      notaCorteMedia,
      notaCorteDesvioPadrao,
      minimoQuestoesPorArea:
        typeof parsed.minimoQuestoesPorArea === 'number' &&
        Number.isFinite(parsed.minimoQuestoesPorArea)
          ? Math.max(1, Math.round(parsed.minimoQuestoesPorArea))
          : 10,
      usarSuavizacaoLaplace: Boolean(parsed.usarLaplace),
    };
  } catch {
    return fallback;
  }
}

export function readPersistedEstimatorConfig(
  fallbackCutoffMean: number = 78
): ConfiguracaoProva {
  try {
    return parseEstimatorConfigJson(
      window.localStorage.getItem(ESTIMATOR_STORAGE_KEY),
      fallbackCutoffMean
    );
  } catch {
    return parseEstimatorConfigJson(null, fallbackCutoffMean);
  }
}

