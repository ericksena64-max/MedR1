import { describe, expect, it } from 'vitest';
import {
  applyTargetExamPresetToEstimatorConfig,
  buildHomeIntelligenceSummary,
  readPersistedEstimatorConfig,
  type HomeAreaInput,
} from './homeIntelligence';
import type { CutoffTargetConfig, SimuladoRecord } from '../types/medical';

const TARGET: CutoffTargetConfig = {
  institution: 'UEPA',
  specialty: 'Clínica Médica',
  modality: 'Acesso Direto',
  historicalCutoff: 76,
  safetyMargin: 4,
  scaleType: 'bruta_100',
};

const SAMPLE_AREAS: HomeAreaInput[] = [
  { grandeAreaId: 'clinica_medica', label: 'Clínica Médica', shortLabel: 'Clínica', answered: 40, correct: 34 },
  { grandeAreaId: 'cirurgia_geral', label: 'Cirurgia Geral', shortLabel: 'Cirurgia', answered: 35, correct: 28 },
  { grandeAreaId: 'ginecologia_obstetricia', label: 'Ginecologia e Obstetrícia', shortLabel: 'GO', answered: 30, correct: 18 },
  { grandeAreaId: 'pediatria', label: 'Pediatria', shortLabel: 'Pediatria', answered: 32, correct: 25 },
  { grandeAreaId: 'medicina_preventiva', label: 'Medicina Preventiva e Social', shortLabel: 'Preventiva', answered: 28, correct: 23 },
];

const SAMPLE_SIMULADOS: SimuladoRecord[] = [
  {
    id: 's1',
    title: 'Simulado 1',
    date: '2026-10-01',
    validCorrect: 70,
    validTotal: 100,
    accuracyPct: 70,
    scaleType: 'bruta_100',
    estimatedScore: 70,
    source: 'app_simulado',
  },
  {
    id: 's2',
    title: 'Simulado 2',
    date: '2026-10-20',
    validCorrect: 76,
    validTotal: 100,
    accuracyPct: 76,
    scaleType: 'bruta_100',
    estimatedScore: 76,
    source: 'app_simulado',
  },
];

describe('homeIntelligence — derivação pura dos KPIs da Home', () => {
  it('calcula os 3 KPIs executivos, IC 95% e gargalo prioritário usando os motores reais', () => {
    const summary = buildHomeIntelligenceSummary({
      areaRows: SAMPLE_AREAS,
      simulados: SAMPLE_SIMULADOS,
      cutoffTarget: TARGET,
      estimatorConfig: {
        totalQuestoesProva: 100,
        notaCorteMedia: 76,
        notaCorteDesvioPadrao: 2.0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: false,
      },
    });

    expect(summary.hasSufficientData).toBe(true);
    expect(summary.projectedScore).toBeGreaterThan(70);
    expect(summary.ci95[0]).toBeLessThanOrEqual(summary.projectedScore);
    expect(summary.ci95[1]).toBeGreaterThanOrEqual(summary.projectedScore);
    expect(summary.approvalProbabilityPct).toBeGreaterThanOrEqual(0);
    expect(summary.approvalProbabilityPct).toBeLessThanOrEqual(100);
    expect(summary.cutoffScore).toBe(76);
    expect(summary.bottleneck?.grandeAreaId).toBe('ginecologia_obstetricia');
    expect(summary.areaTableRows).toHaveLength(5);
    expect(summary.trajectoryPoints.length).toBeGreaterThanOrEqual(2);
  });

  it('responde imediatamente a mudanças de corte histórico e suavização de Laplace', () => {
    const base = buildHomeIntelligenceSummary({
      areaRows: SAMPLE_AREAS,
      simulados: SAMPLE_SIMULADOS,
      cutoffTarget: TARGET,
      estimatorConfig: {
        totalQuestoesProva: 100,
        notaCorteMedia: 74,
        notaCorteDesvioPadrao: 2.0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: false,
      },
    });

    const harderCutoff = buildHomeIntelligenceSummary({
      areaRows: SAMPLE_AREAS,
      simulados: SAMPLE_SIMULADOS,
      cutoffTarget: TARGET,
      estimatorConfig: {
        totalQuestoesProva: 100,
        notaCorteMedia: 84,
        notaCorteDesvioPadrao: 2.0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: true,
      },
    });

    expect(harderCutoff.cutoffScore).toBe(84);
    expect(harderCutoff.approvalProbabilityPct).toBeLessThan(base.approvalProbabilityPct);
    expect(harderCutoff.distanceToCutoff).toBeLessThan(base.distanceToCutoff);
  });

  it('lida com 0 respostas sem NaN e marca baixa amostra', () => {
    const emptyAreas: HomeAreaInput[] = SAMPLE_AREAS.map((a) => ({
      ...a,
      answered: 0,
      correct: 0,
    }));

    const summary = buildHomeIntelligenceSummary({
      areaRows: emptyAreas,
      simulados: [],
      cutoffTarget: TARGET,
      estimatorConfig: {
        totalQuestoesProva: 100,
        notaCorteMedia: 76,
        notaCorteDesvioPadrao: 2.0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: false,
      },
    });

    expect(summary.hasSufficientData).toBe(false);
    expect(Number.isFinite(summary.projectedScore)).toBe(true);
    expect(Number.isFinite(summary.approvalProbabilityPct)).toBe(true);
    expect(summary.trajectoryPoints).toEqual([]);
    expect(summary.bottleneck).not.toBeNull();
  });

  it('readPersistedEstimatorConfig faz fallback seguro quando JSON está ausente ou corrompido', () => {
    const cfg = readPersistedEstimatorConfig('{broken', 78);
    expect(cfg.notaCorteMedia).toBe(78);
    expect(cfg.totalQuestoesProva).toBe(100);
    expect(cfg.usarSuavizacaoLaplace).toBe(false);
  });

  it('applyTargetExamPresetToEstimatorConfig aplica notaCorteMedia e totalQuestoesProva corretamente ao trocar banca', () => {
    const baseCfg = readPersistedEstimatorConfig(null, 76);
    const uepaCfg = applyTargetExamPresetToEstimatorConfig(baseCfg, {
      defaultCutoff: 72,
      totalQuestions: 100,
    });
    const uspCfg = applyTargetExamPresetToEstimatorConfig(baseCfg, {
      defaultCutoff: 84,
      totalQuestions: 120,
    });

    expect(uepaCfg.notaCorteMedia).toBe(72);
    expect(uepaCfg.totalQuestoesProva).toBe(100);
    expect(uspCfg.notaCorteMedia).toBe(84);
    expect(uspCfg.totalQuestoesProva).toBe(120);

    const uepaSummary = buildHomeIntelligenceSummary({
      areaRows: SAMPLE_AREAS,
      simulados: SAMPLE_SIMULADOS,
      cutoffTarget: TARGET,
      estimatorConfig: uepaCfg,
    });
    const uspSummary = buildHomeIntelligenceSummary({
      areaRows: SAMPLE_AREAS,
      simulados: SAMPLE_SIMULADOS,
      cutoffTarget: TARGET,
      estimatorConfig: uspCfg,
    });

    expect(uepaSummary.cutoffScore).toBe(72);
    expect(uepaSummary.totalExamQuestions).toBe(100);
    expect(uspSummary.cutoffScore).toBe(84);
    expect(uspSummary.totalExamQuestions).toBe(120);
    expect(uspSummary.approvalProbabilityPct).toBeLessThan(uepaSummary.approvalProbabilityPct);
  });
});
