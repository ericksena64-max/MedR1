import { describe, expect, it } from 'vitest';
import {
  calcularEstimativaResidencia,
  identificarGargaloPrioritario,
  parseEstimatorConfigJson,
  type ConfiguracaoProva,
  type DesempenhoArea,
} from './residenciaEstimator';
import {
  computePsychometricApproval,
  DEFAULT_CALIBRATION_PAIRS,
} from './psychometricApproval';
import { computeCutoffProjection } from './cutoffProjection';
import { PARETO_MIN_QUESTIONS } from './paretoCalculator';
import { computeGapImpactScore } from '../components/analytics/GapRadarCard';
import type { CutoffTargetConfig, SimuladoRecord } from '../types/medical';

describe('Validação matemática dos cálculos da aba Desempenho', () => {
  describe('residenciaEstimator — Wilson CI, extremos e gargalo analítico', () => {
    it('não colapsa SE ou IC 95% para zero quando uma área tem 10/10 acertos (100%)', () => {
      const desempenho: DesempenhoArea[] = [
        { area: 'clinica_medica', acertos: 10, total: 10, peso: 0.2 },
        { area: 'cirurgia_geral', acertos: 8, total: 10, peso: 0.2 },
        { area: 'ginecologia_obstetricia', acertos: 7, total: 10, peso: 0.2 },
        { area: 'pediatria', acertos: 8, total: 10, peso: 0.2 },
        { area: 'medicina_preventiva', acertos: 7, total: 10, peso: 0.2 },
      ];
      const config: ConfiguracaoProva = {
        totalQuestoesProva: 100,
        notaCorteMedia: 80,
        notaCorteDesvioPadrao: 0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: false,
      };

      const res = calcularEstimativaResidencia(desempenho, config);
      const cm = res.detalhePorArea.find((a) => a.area === 'clinica_medica')!;
      expect(cm.se).toBeGreaterThan(0);
      expect(cm.ic95[0]).toBeLessThan(85);
      expect(cm.ic95[1]).toBe(100);
    });

    it('simula gargalo analiticamente de forma consistente mesmo com suavização de Laplace ativa', () => {
      const desempenho: DesempenhoArea[] = [
        { area: 'clinica_medica', acertos: 16, total: 20, peso: 0.2 },
        { area: 'cirurgia_geral', acertos: 15, total: 20, peso: 0.2 },
        { area: 'ginecologia_obstetricia', acertos: 10, total: 20, peso: 0.2 },
        { area: 'pediatria', acertos: 16, total: 20, peso: 0.2 },
        { area: 'medicina_preventiva', acertos: 15, total: 20, peso: 0.2 },
      ];
      const config: ConfiguracaoProva = {
        totalQuestoesProva: 100,
        notaCorteMedia: 76,
        notaCorteDesvioPadrao: 2.0,
        minimoQuestoesPorArea: 10,
        usarSuavizacaoLaplace: true,
      };

      const base = calcularEstimativaResidencia(desempenho, config);
      const sim = identificarGargaloPrioritario(desempenho, config, base, 10);
      expect(sim).not.toBeNull();
      expect(sim!.area).toBe('ginecologia_obstetricia');
      expect(sim!.ganhoNotaGeral).toBe(2);
      expect(sim!.novaNotaEstimada).toBeCloseTo(base.notaEstimada + 2, 1);
      expect(sim!.novaProbabilidadeAprovacao).toBeGreaterThan(base.probabilidadeAprovacao);
    });

    it('mantém desvio padrão conservador (2.0) quando há apenas 1 edição histórica salva', () => {
      const parsed = parseEstimatorConfigJson(
        JSON.stringify({
          captureMode: 'edicoes',
          annualCutoffs: [{ year: 2025, score: 79 }],
        }),
        76
      );
      expect(parsed.notaCorteMedia).toBe(79);
      expect(parsed.notaCorteDesvioPadrao).toBe(2.0);
    });
  });

  describe('psychometricApproval — Wilson SE e propagação de erro no MQO', () => {
    it('mantém stage1Se > 0 no modelo binomial_wilson mesmo com 10/10 acertos', () => {
      const res = computePsychometricApproval({
        stage1Model: 'binomial_wilson',
        correctCount: 10,
        totalCount: 10,
        observedScore: 100,
        cohortStdDev: 10,
        reliabilityRxx: 0.85,
        enableOlsCalibration: false,
        calibrationPairs: [],
        cutoffMean: 95,
        cutoffStdDev: 0,
      });

      expect(res.valid).toBe(true);
      expect(res.stage1Se).toBeGreaterThan(0);
      expect(res.approvalProbabilityPct).toBeLessThan(100);
    });

    it('propaga a incerteza do Estágio 1 + caudas t-Student ao ativar calibração MQO', () => {
      const res = computePsychometricApproval({
        stage1Model: 'binomial_wilson',
        correctCount: 75,
        totalCount: 100,
        observedScore: 75,
        cohortStdDev: 10,
        reliabilityRxx: 0.85,
        enableOlsCalibration: true,
        calibrationPairs: DEFAULT_CALIBRATION_PAIRS,
        cutoffMean: 74,
        cutoffStdDev: 2.0,
      });

      expect(res.valid).toBe(true);
      expect(res.ols?.valid).toBe(true);
      expect(res.finalSigmaY).toBeGreaterThan(res.ols!.predictionSe);
    });
  });

  describe('cutoffProjection — regressão a partir de 3 simulados e escala TRI 1000', () => {
    it('usa linear_regression com 3 simulados em vez de ignorar o ponto intermediário', () => {
      const sims: SimuladoRecord[] = [
        {
          id: 's1',
          title: 'S1',
          date: '2026-10-01',
          validCorrect: 65,
          validTotal: 100,
          accuracyPct: 65,
          scaleType: 'bruta_100',
          estimatedScore: 65,
          source: 'manual',
        },
        {
          id: 's2',
          title: 'S2',
          date: '2026-10-15',
          validCorrect: 70,
          validTotal: 100,
          accuracyPct: 70,
          scaleType: 'bruta_100',
          estimatedScore: 70,
          source: 'manual',
        },
        {
          id: 's3',
          title: 'S3',
          date: '2026-10-29',
          validCorrect: 74,
          validTotal: 100,
          accuracyPct: 74,
          scaleType: 'bruta_100',
          estimatedScore: 74,
          source: 'manual',
        },
      ];
      const target: CutoffTargetConfig = {
        institution: 'UEPA',
        specialty: 'Clínica Médica',
        modality: 'Acesso Direto',
        historicalCutoff: 78,
        safetyMargin: 3,
        scaleType: 'bruta_100',
      };

      const proj = computeCutoffProjection(sims, target);
      expect(proj.paceMethod).toBe('linear_regression');
      expect(proj.weeklyPace).toBeGreaterThan(2);
    });

    it('aplica limiares proporcionais corretamente na escala tri_1000', () => {
      const sims: SimuladoRecord[] = [
        {
          id: 't1',
          title: 'T1',
          date: '2026-10-01',
          validCorrect: 68,
          validTotal: 100,
          accuracyPct: 68,
          scaleType: 'tri_outra',
          estimatedScore: 680,
          source: 'manual',
        },
        {
          id: 't2',
          title: 'T2',
          date: '2026-10-15',
          validCorrect: 69,
          validTotal: 100,
          accuracyPct: 69,
          scaleType: 'tri_outra',
          estimatedScore: 688,
          source: 'manual',
        },
        {
          id: 't3',
          title: 'T3',
          date: '2026-10-29',
          validCorrect: 70,
          validTotal: 100,
          accuracyPct: 70,
          scaleType: 'tri_outra',
          estimatedScore: 696,
          source: 'manual',
        },
      ];
      const target: CutoffTargetConfig = {
        institution: 'ENARE',
        specialty: 'Clínica Médica',
        modality: 'Acesso Direto',
        historicalCutoff: 770,
        safetyMargin: 30,
        scaleType: 'tri_outra',
      };

      const proj = computeCutoffProjection(sims, target);
      // Distance is 104 pts (>= 70) and pace is +4 pts/week (< 8) -> large_gap_low_pace
      expect(proj.regime).toBe('large_gap_low_pace');
    });
  });

  describe('GapRadar & Pareto — severidade real vs. contagem bruta de erros', () => {
    it('rankeia tema fraco (30% em 10q = 7 erros) acima de tema dominado (80% em 40q = 8 erros)', () => {
      const masteredHighVolume = computeGapImpactScore(40, 80, 65);
      const genuinelyWeak = computeGapImpactScore(10, 30, 65);
      expect(genuinelyWeak).toBeGreaterThan(masteredHighVolume * 2);
    });

    it('exige ao menos 30 questões reais para ativar Pareto dinâmico da banca', () => {
      expect(PARETO_MIN_QUESTIONS).toBeGreaterThanOrEqual(30);
    });
  });
});
