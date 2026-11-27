import { describe, expect, it } from 'vitest';
import {
  aggregateWeightedAreaPerformance,
  computeAnswerRecencyWeight,
  isSyntheticCalibrationDataset,
} from './recencyAnalytics';
import { DEFAULT_CALIBRATION_PAIRS } from './psychometricApproval';
import type { MedicalQuestion, UserAnswerRecord } from '../types/medical';

function makeQuestion(id: string, grandeAreaId: MedicalQuestion['grandeAreaId']): MedicalQuestion {
  return {
    id,
    code: id,
    banca: 'UEPA',
    instituicao: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    grandeAreaId,
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'IAM',
    enunciado: 'Teste',
    alternativas: [],
    gabaritoOficial: 'A',
    comentarioGeral: '',
    perolaClinica: '',
    referencias: [],
    totalRespostasComunidade: 100,
    taxaAcertoGlobal: 65,
    anulada: false,
    desatualizada: false,
  };
}

describe('P1 Estatística — recencyAnalytics (janela 90d, peso simulado/estudo e selos sintéticos)', () => {
  const NOW = Date.parse('2026-11-26T12:00:00.000Z');
  const DAY_MS = 24 * 60 * 60 * 1000;

  it('descarta respostas fora da janela de 90 dias e aplica decaimento exponencial', () => {
    const todayW = computeAnswerRecencyWeight(new Date(NOW).toISOString(), {
      windowDays: 90,
      halfLifeDays: 45,
      nowMs: NOW,
    });
    const halfLifeW = computeAnswerRecencyWeight(new Date(NOW - 45 * DAY_MS).toISOString(), {
      windowDays: 90,
      halfLifeDays: 45,
      nowMs: NOW,
    });
    const staleW = computeAnswerRecencyWeight(new Date(NOW - 120 * DAY_MS).toISOString(), {
      windowDays: 90,
      halfLifeDays: 45,
      nowMs: NOW,
    });

    expect(todayW).toBeCloseTo(1.0, 2);
    expect(halfLifeW).toBeCloseTo(0.5, 2);
    expect(staleW).toBe(0);
  });

  it('pondera respostas de simulado (1.5x) acima de modo estudo (1.0x) e prioriza recência', () => {
    const q1 = makeQuestion('q1', 'clinica_medica');
    const q2 = makeQuestion('q2', 'clinica_medica');
    const q3 = makeQuestion('q3', 'clinica_medica');
    const qMap = new Map<string, MedicalQuestion>([
      ['q1', q1],
      ['q2', q2],
      ['q3', q3],
    ]);

    const answers: UserAnswerRecord[] = [
      // Stale (120d ago, wrong) -> excluded from 90d window
      {
        questionId: 'q1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: new Date(NOW - 120 * DAY_MS).toISOString(),
        timeSpentSec: 60,
        mode: 'estudo',
      },
      // Recent estudo (today, wrong) -> weight 1.0
      {
        questionId: 'q2',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: new Date(NOW).toISOString(),
        timeSpentSec: 45,
        mode: 'estudo',
      },
      // Recent simulado (today, correct) -> weight 1.5
      {
        questionId: 'q3',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: new Date(NOW).toISOString(),
        timeSpentSec: 50,
        mode: 'simulado',
      },
    ];

    const stats = aggregateWeightedAreaPerformance(answers, qMap, {
      windowDays: 90,
      weightByMode: true,
      nowMs: NOW,
    });
    const cm = stats.get('clinica_medica');
    expect(cm).toBeDefined();
    // Only q2 and q3 remain inside 90d window
    expect(cm!.rawAnswered).toBe(2);
    expect(cm!.simuladoAnswered).toBe(1);
    expect(cm!.estudoAnswered).toBe(1);
    // Weighted accuracy = 1.5 / (1.5 + 1.0) = 60.0% (instead of unweighted 50.0%)
    expect(cm!.weightedAccuracyPct).toBe(60);
    // Preserves effective sample size = rawAnswered (no artificial CI shrinkage)
    expect(cm!.effectiveTotal).toBe(2);
  });

  it('identifica corretamente quando a calibração MQO ainda usa a base sintética ilustrativa', () => {
    expect(isSyntheticCalibrationDataset(DEFAULT_CALIBRATION_PAIRS)).toBe(true);
    expect(
      isSyntheticCalibrationDataset([
        ...DEFAULT_CALIBRATION_PAIRS.slice(0, 5),
        { id: 'real-1', label: 'Meu simulado', simuladoScore: 80, officialScore: 81 },
      ])
    ).toBe(false);
  });
});
