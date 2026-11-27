import { GRANDES_AREAS } from '../data/taxonomy';
import type { CutoffTargetConfig, GrandeAreaId, SimuladoRecord } from '../types/medical';
import {
  calcularEstimativaResidencia,
  identificarGargaloPrioritario,
  parseEstimatorConfigJson,
  type AreaMedica,
  type ConfiguracaoProva,
  type DesempenhoArea,
} from './residenciaEstimator';
import {
  computeCutoffProjection,
  type CutoffProjectionResult,
  type SimuladoChartPoint,
} from './cutoffProjection';

export interface HomeAreaInput {
  grandeAreaId: GrandeAreaId;
  label: string;
  shortLabel: string;
  answered: number;
  correct: number;
}

export interface HomeAreaTableRow {
  grandeAreaId: GrandeAreaId;
  label: string;
  shortLabel: string;
  weightPct: number;
  answered: number;
  correct: number;
  accuracyPct: number;
  ci95: [number, number];
  belowMinSample: boolean;
}

export interface HomeBottleneck {
  grandeAreaId: GrandeAreaId;
  label: string;
  shortLabel: string;
  accuracyPct: number;
  answered: number;
  potentialScoreGain: number;
  potentialApprovalGainPp: number;
}

export interface HomeIntelligenceInput {
  areaRows: HomeAreaInput[];
  simulados: SimuladoRecord[];
  cutoffTarget: CutoffTargetConfig;
  estimatorConfig: ConfiguracaoProva;
}

export interface HomeIntelligenceSummary {
  hasSufficientData: boolean;
  projectedScore: number;
  ci95: [number, number];
  predictionInterval95: [number, number];
  approvalProbabilityPct: number;
  cutoffScore: number;
  cutoffSd: number;
  operationalTarget: number;
  distanceToCutoff: number;
  distanceToOperational: number;
  totalExamQuestions: number;
  usarSuavizacaoLaplace: boolean;
  bottleneck: HomeBottleneck | null;
  areaTableRows: HomeAreaTableRow[];
  trajectoryPoints: SimuladoChartPoint[];
  cutoffProjection: CutoffProjectionResult;
}

export function readPersistedEstimatorConfig(
  rawJson: string | null,
  fallbackCutoff: number
): ConfiguracaoProva {
  return parseEstimatorConfigJson(rawJson, fallbackCutoff);
}

export function applyTargetExamPresetToEstimatorConfig(
  baseConfig: ConfiguracaoProva,
  preset: { defaultCutoff: number; totalQuestions: number }
): ConfiguracaoProva {
  return {
    ...baseConfig,
    notaCorteMedia: preset.defaultCutoff,
    totalQuestoesProva: preset.totalQuestions,
  };
}

export function buildHomeIntelligenceSummary({
  areaRows,
  simulados,
  cutoffTarget,
  estimatorConfig,
}: HomeIntelligenceInput): HomeIntelligenceSummary {
  const areaById = new Map(areaRows.map((r) => [r.grandeAreaId, r]));

  const desempenho: DesempenhoArea[] = GRANDES_AREAS.map((area) => {
    const row = areaById.get(area.id);
    return {
      area: area.id as AreaMedica,
      acertos: row?.correct ?? 0,
      total: row?.answered ?? 0,
      peso: 0.2,
    };
  });

  const estimativa = calcularEstimativaResidencia(desempenho, estimatorConfig);
  const gargalo = identificarGargaloPrioritario(desempenho, estimatorConfig, estimativa, 10);
  const cutoffProjection = computeCutoffProjection(simulados, cutoffTarget);

  const areaTableRows: HomeAreaTableRow[] = estimativa.detalhePorArea.map((detalhe) => {
    const meta = GRANDES_AREAS.find((a) => a.id === detalhe.area);
    const inputRow = areaById.get(detalhe.area);
    return {
      grandeAreaId: detalhe.area,
      label: inputRow?.label ?? meta?.name ?? detalhe.area,
      shortLabel: inputRow?.shortLabel ?? meta?.shortName ?? detalhe.area,
      weightPct: Math.round(detalhe.peso * 100),
      answered: detalhe.total,
      correct: detalhe.acertos,
      accuracyPct: detalhe.percentual,
      ci95: detalhe.ic95,
      belowMinSample: detalhe.abaixoDoMinimo,
    };
  });

  let bottleneck: HomeBottleneck | null = null;
  if (gargalo) {
    const row = areaTableRows.find((r) => r.grandeAreaId === gargalo.area);
    bottleneck = {
      grandeAreaId: gargalo.area,
      label: row?.label ?? gargalo.area,
      shortLabel: row?.shortLabel ?? gargalo.area,
      accuracyPct: gargalo.percentualAtual,
      answered: row?.answered ?? 0,
      potentialScoreGain: gargalo.ganhoNotaGeral,
      potentialApprovalGainPp: gargalo.ganhoProbabilidadePp,
    };
  } else if (areaTableRows.length > 0) {
    const lowest = [...areaTableRows].sort((a, b) => a.accuracyPct - b.accuracyPct)[0];
    bottleneck = {
      grandeAreaId: lowest.grandeAreaId,
      label: lowest.label,
      shortLabel: lowest.shortLabel,
      accuracyPct: lowest.accuracyPct,
      answered: lowest.answered,
      potentialScoreGain: 0,
      potentialApprovalGainPp: 0,
    };
  }

  const cutoffScore = Number(estimatorConfig.notaCorteMedia.toFixed(1));
  const operationalTarget = Number(
    Math.min(100, cutoffScore + Math.max(0, cutoffTarget.safetyMargin)).toFixed(1)
  );
  const distanceToCutoff = Number((estimativa.notaEstimada - cutoffScore).toFixed(1));
  const distanceToOperational = Number((estimativa.notaEstimada - operationalTarget).toFixed(1));

  return {
    hasSufficientData: estimativa.status === 'valido',
    projectedScore: estimativa.notaEstimada,
    ci95: estimativa.icDominio95,
    predictionInterval95: estimativa.ipDiaProva95,
    approvalProbabilityPct: estimativa.probabilidadeAprovacao,
    cutoffScore,
    cutoffSd: estimatorConfig.notaCorteDesvioPadrao ?? 0,
    operationalTarget,
    distanceToCutoff,
    distanceToOperational,
    totalExamQuestions: estimatorConfig.totalQuestoesProva,
    usarSuavizacaoLaplace: Boolean(estimatorConfig.usarSuavizacaoLaplace),
    bottleneck,
    areaTableRows,
    trajectoryPoints: cutoffProjection.chartPoints,
    cutoffProjection,
  };
}
