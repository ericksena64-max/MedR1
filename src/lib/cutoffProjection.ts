import type { CutoffTargetConfig, SimuladoRecord } from '../types/medical';

export interface SimuladoChartPoint {
  id: string;
  label: string;
  date: string;
  weekIndex: number;
  accuracyPct: number;
  estimatedScore: number;
  cohortAvgPct?: number;
  trendScore?: number;
  isProjection?: boolean;
}

export type PaceMethod = 'insufficient' | 'interval' | 'linear_regression';

export type DiagnosticRegime =
  | 'insufficient_data'
  | 'target_reached'
  | 'large_gap_low_pace'
  | 'small_gap_stagnant'
  | 'healthy_progress';

export interface CutoffProjectionResult {
  orderedSimulados: SimuladoRecord[];
  simuladoCount: number;
  spanWeeks: number;
  // 1. Measured
  latestSimulado: SimuladoRecord | null;
  currentScore: number | null;
  currentAccuracyPct: number | null;
  difficultyAdjustedNote: string | null;
  // 2. Distance to Cutoff
  historicalCutoff: number;
  operationalTarget: number; // M = historicalCutoff + safetyMargin
  safetyMargin: number;
  distanceToOperational: number | null; // Delta = M - N_atual
  distanceToHistorical: number | null;
  inSafetyBand: boolean;
  targetReached: boolean;
  // 3. Weekly Pace & Planning Window
  paceMethod: PaceMethod;
  weeklyPace: number | null; // r (points per week)
  rawWeeksEstimate: number | null; // Delta / r
  weekBandLow: number | null;
  weekBandHigh: number | null;
  diminishingReturnsWarning: boolean;
  // 4. Decision Guidance
  regime: DiagnosticRegime;
  diagnosisTitle: string;
  diagnosisSummary: string;
  recommendedActions: string[];
  // 5. Chart Series
  chartPoints: SimuladoChartPoint[];
}

function parseLocalDateMs(isoDate: string): number {
  const parts = isoDate.split('-').map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
    const parsed = Date.parse(isoDate);
    return Number.isNaN(parsed) ? Date.now() : parsed;
  }
  const [y, m, d] = parts;
  return new Date(y, m - 1, d).getTime();
}

function formatShortDateBR(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}`;
}

export function computeCutoffProjection(
  simulados: SimuladoRecord[],
  target: CutoffTargetConfig
): CutoffProjectionResult {
  const scaleCap = target.scaleType === 'bruta_100' ? 100 : 1000;
  const historicalCutoff = Number(target.historicalCutoff.toFixed(1));
  const safetyMargin = Math.max(0, Number(target.safetyMargin.toFixed(1)));
  const operationalTarget = Number(
    Math.min(scaleCap, historicalCutoff + safetyMargin).toFixed(1)
  );

  // Filter simulados matching the selected scale or fallback to all if none match
  const matchingScale = simulados.filter((s) => s.scaleType === target.scaleType);
  const pool = matchingScale.length > 0 ? matchingScale : simulados;

  const ordered = [...pool].sort(
    (a, b) => parseLocalDateMs(a.date) - parseLocalDateMs(b.date)
  );

  const count = ordered.length;
  if (count === 0) {
    return {
      orderedSimulados: [],
      simuladoCount: 0,
      spanWeeks: 0,
      latestSimulado: null,
      currentScore: null,
      currentAccuracyPct: null,
      difficultyAdjustedNote: null,
      historicalCutoff,
      operationalTarget,
      safetyMargin,
      distanceToOperational: null,
      distanceToHistorical: null,
      inSafetyBand: false,
      targetReached: false,
      paceMethod: 'insufficient',
      weeklyPace: null,
      rawWeeksEstimate: null,
      weekBandLow: null,
      weekBandHigh: null,
      diminishingReturnsWarning: false,
      regime: 'insufficient_data',
      diagnosisTitle: 'Registre seus simulados para calibrar o ritmo',
      diagnosisSummary:
        'Adicione ao menos 3 a 4 simulados datados para separar ruído de prova difícil da sua evolução semanal real.',
      recommendedActions: [
        'Registre a data, acertos válidos e total de questões válidas de cada simulado.',
        'Inclua a média ou percentil da turma quando disponível para calibrar dificuldade.',
      ],
      chartPoints: [],
    };
  }

  const t0 = parseLocalDateMs(ordered[0].date);
  const pointsWithWeeks = ordered.map((sim) => {
    const weeks = Math.max(
      0,
      (parseLocalDateMs(sim.date) - t0) / (1000 * 60 * 60 * 24 * 7)
    );
    const score =
      target.scaleType === 'bruta_100' ? sim.accuracyPct : sim.estimatedScore;
    return { sim, weeks, score };
  });

  const latest = pointsWithWeeks[count - 1];
  const currentScore = Number(latest.score.toFixed(1));
  const currentAccuracyPct = Number(latest.sim.accuracyPct.toFixed(1));
  const spanWeeks = Number(latest.weeks.toFixed(1));

  const distanceToOperational = Number(
    (operationalTarget - currentScore).toFixed(1)
  );
  const distanceToHistorical = Number(
    (historicalCutoff - currentScore).toFixed(1)
  );
  const targetReached = distanceToOperational <= 0;
  const inSafetyBand = !targetReached && distanceToHistorical <= 0;

  // Detect if the most recent exam had lower raw score but better relative standing vs. cohort
  let difficultyAdjustedNote: string | null = null;
  if (count >= 2) {
    const prev = pointsWithWeeks[count - 2];
    if (
      typeof latest.sim.cohortAvgPct === 'number' &&
      typeof prev.sim.cohortAvgPct === 'number'
    ) {
      const latestRel = latest.sim.accuracyPct - latest.sim.cohortAvgPct;
      const prevRel = prev.sim.accuracyPct - prev.sim.cohortAvgPct;
      const relGain = Number((latestRel - prevRel).toFixed(1));
      if (latest.score < prev.score && relGain > 0.5) {
        difficultyAdjustedNote = `A nota bruta oscilou para baixo, mas sua vantagem sobre a turma subiu +${relGain.toFixed(1)} pp — sinal de prova mais difícil, não de regressão.`;
      } else if (latestRel >= 5) {
        difficultyAdjustedNote = `Último simulado ${latestRel.toFixed(1)} pp acima da média da turma (${latest.sim.cohortAvgPct.toFixed(1)}%).`;
      }
    }
  }

  // Weekly pace calculation (r)
  let paceMethod: PaceMethod = 'insufficient';
  let weeklyPace: number | null = null;
  let regSlope: number | null = null;
  let regIntercept: number | null = null;

  // Use recent window (up to last 8 simulados) for pace calculation
  const recentWindow = pointsWithWeeks.slice(-8);
  const windowSpan =
    recentWindow[recentWindow.length - 1].weeks - recentWindow[0].weeks;

  if (recentWindow.length >= 5 && windowSpan >= 0.5) {
    // Ordinary Least Squares (OLS) simple linear regression over recentWindow
    paceMethod = 'linear_regression';
    const n = recentWindow.length;
    const meanX = recentWindow.reduce((acc, p) => acc + p.weeks, 0) / n;
    const meanY = recentWindow.reduce((acc, p) => acc + p.score, 0) / n;

    let num = 0;
    let den = 0;
    for (const p of recentWindow) {
      const dx = p.weeks - meanX;
      num += dx * (p.score - meanY);
      den += dx * dx;
    }

    if (den > 0.001) {
      regSlope = num / den;
      regIntercept = meanY - regSlope * meanX;
      weeklyPace = Number(regSlope.toFixed(2));
    }
  } else if (recentWindow.length >= 2 && windowSpan >= 0.5) {
    // Direct interval pace: (N_recente - N_anterior) / weeks
    paceMethod = 'interval';
    const first = recentWindow[0];
    const last = recentWindow[recentWindow.length - 1];
    const slope = (last.score - first.score) / windowSpan;
    regSlope = slope;
    regIntercept = first.score - slope * first.weeks;
    weeklyPace = Number(slope.toFixed(2));
  }

  // Diminishing returns flag when approaching high accuracy plateau (75%+)
  const diminishingReturnsWarning =
    target.scaleType === 'bruta_100' &&
    (currentScore >= 75 || operationalTarget >= 80);

  // Estimate weeks as a planning band (never false precision)
  let rawWeeksEstimate: number | null = null;
  let weekBandLow: number | null = null;
  let weekBandHigh: number | null = null;

  if (!targetReached && weeklyPace !== null && weeklyPace > 0.05 && distanceToOperational > 0) {
    rawWeeksEstimate = Number((distanceToOperational / weeklyPace).toFixed(1));
    const lowRaw = Math.max(1, Math.round(rawWeeksEstimate * 0.875));
    // Apply wider upper margin for diminishing returns near high plateaus or small samples
    let upperMultiplier = 1.5;
    if (diminishingReturnsWarning && currentScore >= 75) {
      upperMultiplier = 1.65;
    } else if (count < 4) {
      upperMultiplier = 1.6;
    }
    const highRaw = Math.max(
      lowRaw + 1,
      Math.round(rawWeeksEstimate * upperMultiplier)
    );
    weekBandLow = lowRaw;
    weekBandHigh = highRaw;
  }

  // Strategic decision diagnosis based on (Delta, r)
  let regime: DiagnosticRegime;
  let diagnosisTitle: string;
  let diagnosisSummary: string;
  let recommendedActions: string[];

  if (count < 2 || weeklyPace === null) {
    regime = 'insufficient_data';
    diagnosisTitle = 'Amostra ainda pequena para estimar ritmo semanal';
    diagnosisSummary =
      'Você já tem o marco inicial medido. Registre pelo menos 3 a 4 simulados em semanas diferentes para que o ritmo semanal suavize variações de dificuldade.';
    recommendedActions = [
      'Mantenha periodicidade fixa (quinzenal ou semanal) para os próximos simulados.',
      'Enquanto acumula amostra, use o Radar de Lacunas para atacar os temas de maior erro.',
    ];
  } else if (targetReached) {
    regime = 'target_reached';
    diagnosisTitle = 'Você já está na faixa operacional com margem de segurança';
    diagnosisSummary =
      'Seu desempenho medido igualou ou superou a meta operacional. O foco agora muda de ganho bruto para blindagem de piso em provas difíceis.';
    recommendedActions = [
      'Sustente revisões espaçadas (FSRS) para evitar perda de retenção até a data da prova.',
      'Simule condições reais de tempo e fadiga para estabilizar o piso acima do corte histórico.',
    ];
  } else if (distanceToOperational >= 7 && weeklyPace < 0.8) {
    regime = 'large_gap_low_pace';
    diagnosisTitle = 'Distância relevante com ritmo ainda baixo';
    diagnosisSummary =
      'Quando Δ é grande e a inclinação semanal está abaixo de +0,8 pp/semana, repetir o mesmo formato de estudo costuma desperdiçar semanas.';
    recommendedActions = [
      'Priorize diagnóstico das maiores lacunas no Radar de Lacunas e nos temas de maior peso (Pareto 80/20).',
      'Eleve a cadência semanal de questões resolvidas com correção ativa antes do próximo simulado.',
      'Reavalie se a base teórica dos 3 temas de pior acurácia precisa de revisão dirigida.',
    ];
  } else if (distanceToOperational < 7 && weeklyPace < 0.6) {
    regime = 'small_gap_stagnant';
    diagnosisTitle = 'Distância curta, mas o ritmo estagnou no platô';
    diagnosisSummary =
      'Perto da nota de corte (retornos decrescentes), ganhar cada ponto percentual exige precisão cirúrgica — não apenas mais volume genérico.';
    recommendedActions = [
      'Audite o Caderno de Erros separando desconhecimento real de distração e erro de leitura de enunciado.',
      'Faça revisão sistemática dos erros recorrentes e ataque subtemas específicos de menor incidência da sua banca.',
      'Compare seu desempenho com a média da turma para confirmar se a estagnação é real ou efeito de prova mais difícil.',
    ];
  } else {
    regime = 'healthy_progress';
    diagnosisTitle = 'Ritmo consistente em direção à meta operacional';
    diagnosisSummary =
      'Sua evolução semanal está positiva e consistente. Use a janela de semanas apenas como bússola de planejamento e recalibre após cada novo simulado.';
    recommendedActions = [
      'Mantenha o ciclo atual de questões + revisão de erros e recalibre o ritmo a cada novo simulado.',
      diminishingReturnsWarning
        ? 'Atenção aos retornos decrescentes acima de 75%: a partir daqui, o Caderno de Erros rende mais que estudo passivo.'
        : 'Continue priorizando os temas de maior incidência da banca alvo para acelerar o ganho de base.',
    ];
  }

  // Build chart points (measured history + optional cautious linear reference point)
  const chartPoints: SimuladoChartPoint[] = pointsWithWeeks.map(
    ({ sim, weeks, score }, idx) => {
      const trendVal =
        regSlope !== null && regIntercept !== null
          ? Number(
              Math.max(0, Math.min(scaleCap, regIntercept + regSlope * weeks)).toFixed(1)
            )
          : undefined;
      return {
        id: sim.id,
        label: `S${idx + 1} · ${formatShortDateBR(sim.date)}`,
        date: sim.date,
        weekIndex: Number(weeks.toFixed(1)),
        accuracyPct: Number(sim.accuracyPct.toFixed(1)),
        estimatedScore: Number(score.toFixed(1)),
        cohortAvgPct: sim.cohortAvgPct,
        trendScore: trendVal,
      };
    }
  );

  return {
    orderedSimulados: ordered,
    simuladoCount: count,
    spanWeeks,
    latestSimulado: latest.sim,
    currentScore,
    currentAccuracyPct,
    difficultyAdjustedNote,
    historicalCutoff,
    operationalTarget,
    safetyMargin,
    distanceToOperational,
    distanceToHistorical,
    inSafetyBand,
    targetReached,
    paceMethod,
    weeklyPace,
    rawWeeksEstimate,
    weekBandLow,
    weekBandHigh,
    diminishingReturnsWarning,
    regime,
    diagnosisTitle,
    diagnosisSummary,
    recommendedActions,
    chartPoints,
  };
}
