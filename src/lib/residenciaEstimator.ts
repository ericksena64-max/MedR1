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

export function calcularEstimativaResidencia(
  desempenho: DesempenhoArea[],
  config: ConfiguracaoProva
): ResultadoEstimativa {
  const Z_95 = 1.96;
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

    // Evita divisão por zero ou SE=0 em cold start quando Laplace está ativado
    let p = 0;
    let varBinomial = 0;
    if (usarLaplace) {
      const nEff = totalValido + 2;
      p = (acertosValidos + 1) / nEff;
      varBinomial = (p * (1 - p)) / nEff;
    } else {
      p = totalValido > 0 ? acertosValidos / totalValido : 0;
      varBinomial = totalValido > 0 ? (p * (1 - p)) / totalValido : 0;
    }

    const seArea = 100 * Math.sqrt(varBinomial);

    notaEstimada += peso * (p * 100);
    varDominio += peso * peso * (seArea * seArea);

    // Variância amostral da prova oficial para essa área
    const questoesAreaNaProva = peso * Math.max(1, config.totalQuestoesProva);
    const varAmostralProvaArea =
      questoesAreaNaProva > 0
        ? (10000 * p * (1 - p)) / questoesAreaNaProva
        : 0;
    varProva += peso * peso * varAmostralProvaArea;

    return {
      area: item.area,
      acertos: acertosValidos,
      total: totalValido,
      peso,
      percentual: Number((p * 100).toFixed(2)),
      se: Number(seArea.toFixed(2)),
      ic95: [
        Number(Math.max(0, p * 100 - Z_95 * seArea).toFixed(2)),
        Number(Math.min(100, p * 100 + Z_95 * seArea).toFixed(2)),
      ] as [number, number],
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
 * e simula quanto a nota geral e a probabilidade de aprovação sobem ao elevar aquela área em +ganhoPct.
 */
export function identificarGargaloPrioritario(
  desempenho: DesempenhoArea[],
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

  // Recalcula o estimador completo elevando a taxa da área gargalo em +ganhoEfetivo
  const desempenhoSimulado: DesempenhoArea[] = desempenho.map((item) => {
    if (item.area !== gargalo.area) return item;
    const baseTotal = Math.max(item.total, config.minimoQuestoesPorArea ?? 10);
    const novosAcertos = Math.min(
      baseTotal,
      Math.round((percentualSimulado / 100) * baseTotal)
    );
    return {
      ...item,
      acertos: novosAcertos,
      total: baseTotal,
    };
  });

  const simRes = calcularEstimativaResidencia(desempenhoSimulado, config);
  const ganhoNotaGeral = Number((gargalo.peso * ganhoEfetivo).toFixed(2));
  const novaNotaEstimada = Number(
    Math.min(100, resultadoBase.notaEstimada + ganhoNotaGeral).toFixed(2)
  );

  return {
    area: gargalo.area,
    percentualAtual: gargalo.percentual,
    percentualSimulado,
    ganhoAplicadoPct: Number(ganhoEfetivo.toFixed(1)),
    peso: gargalo.peso,
    ganhoNotaGeral,
    novaNotaEstimada,
    novaProbabilidadeAprovacao: simRes.probabilidadeAprovacao,
    ganhoProbabilidadePp: Number(
      (simRes.probabilidadeAprovacao - resultadoBase.probabilidadeAprovacao).toFixed(
        1
      )
    ),
  };
}

export const ESTIMATOR_STORAGE_KEY = 'medr1_residencia_estimator_v1';
export const ESTIMATOR_UPDATED_EVENT = 'medr1-estimator-config-updated';

export function readPersistedEstimatorConfig(
  fallbackCutoffMean: number = 78
): ConfiguracaoProva {
  try {
    const raw = window.localStorage.getItem(ESTIMATOR_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as {
        captureMode?: 'direto' | 'edicoes';
        notaCorteMedia?: number;
        notaCorteDesvioPadrao?: number;
        totalQuestoesProva?: number;
        minimoQuestoesPorArea?: number;
        usarLaplace?: boolean;
        annualCutoffs?: Array<{ score: number }>;
      };

      let notaCorteMedia =
        typeof parsed.notaCorteMedia === 'number' &&
        Number.isFinite(parsed.notaCorteMedia)
          ? parsed.notaCorteMedia
          : fallbackCutoffMean;
      let notaCorteDesvioPadrao =
        typeof parsed.notaCorteDesvioPadrao === 'number' &&
        Number.isFinite(parsed.notaCorteDesvioPadrao)
          ? parsed.notaCorteDesvioPadrao
          : 2.0;

      if (
        parsed.captureMode === 'edicoes' &&
        Array.isArray(parsed.annualCutoffs) &&
        parsed.annualCutoffs.length > 0
      ) {
        const scores = parsed.annualCutoffs
          .map((e) => e.score)
          .filter((s) => typeof s === 'number' && Number.isFinite(s));
        if (scores.length > 0) {
          const mean = scores.reduce((a, b) => a + b, 0) / scores.length;
          notaCorteMedia = Number(mean.toFixed(2));
          if (scores.length > 1) {
            const variance =
              scores.reduce((a, s) => a + (s - mean) ** 2, 0) /
              (scores.length - 1);
            notaCorteDesvioPadrao = Number(Math.sqrt(variance).toFixed(2));
          } else {
            notaCorteDesvioPadrao = 0;
          }
        }
      }

      return {
        totalQuestoesProva:
          typeof parsed.totalQuestoesProva === 'number' &&
          Number.isFinite(parsed.totalQuestoesProva)
            ? parsed.totalQuestoesProva
            : 100,
        notaCorteMedia,
        notaCorteDesvioPadrao,
        minimoQuestoesPorArea:
          typeof parsed.minimoQuestoesPorArea === 'number' &&
          Number.isFinite(parsed.minimoQuestoesPorArea)
            ? parsed.minimoQuestoesPorArea
            : 10,
        usarSuavizacaoLaplace: Boolean(parsed.usarLaplace),
      };
    }
  } catch {
    // ignore storage read errors
  }
  return {
    totalQuestoesProva: 100,
    notaCorteMedia: fallbackCutoffMean,
    notaCorteDesvioPadrao: 2.0,
    minimoQuestoesPorArea: 10,
    usarSuavizacaoLaplace: false,
  };
}

