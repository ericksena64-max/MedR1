import { describe, expect, it } from 'vitest';
import { UEPA_2022_QUESTIONS } from '../data/uepa2022Questions';
import { UEPA_2023_QUESTIONS } from '../data/uepa2023Questions';
import { UEPA_2024_QUESTIONS } from '../data/uepa2024Questions';
import { UEPA_2025_QUESTIONS } from '../data/uepa2025Questions';
import { UEPA_2026_QUESTIONS } from '../data/uepa2026Questions';
import { GRANDES_AREAS } from '../data/taxonomy';
import type { AlternativeLetter, MedicalQuestion, UserAnswerRecord } from '../types/medical';
import {
  DIAGNOSTIC_QUESTIONS_PER_AREA,
  DIAGNOSTIC_TOTAL_QUESTIONS,
  canFinishDiagnostic,
  computePerAreaBoardQuotas,
  evaluateDiagnosticCompletion,
  hasCompletedDiagnostic,
  selectDiagnosticQuestions,
  type DiagnosticBoardOption,
} from './diagnosticExam';

const ALL_UEPA: MedicalQuestion[] = [
  ...UEPA_2026_QUESTIONS,
  ...UEPA_2025_QUESTIONS,
  ...UEPA_2024_QUESTIONS,
  ...UEPA_2023_QUESTIONS,
  ...UEPA_2022_QUESTIONS,
];

function buildSyntheticMultiBoardBank(boards: DiagnosticBoardOption[]): MedicalQuestion[] {
  const sample = ALL_UEPA.filter((q) => !q.anulada && !q.desatualizada);
  const out: MedicalQuestion[] = [];

  for (const board of boards) {
    for (const area of GRANDES_AREAS) {
      const areaPool = sample.filter((q) => q.grandeAreaId === area.id).slice(0, 12);
      areaPool.forEach((base, idx) => {
        out.push({
          ...base,
          id: `syn-${board}-${area.id}-${idx}`,
          code: `${board}-2026-${idx + 1}`,
          banca: board,
          instituicao: board,
        });
      });
    }
  }
  return out;
}

describe('diagnosticExam — Simulado Diagnóstico Multi-Bancas (50q = 10 × 5 Grandes Áreas)', () => {
  it('calcula cotas por área somando exatamente 10 (50 total) para 1 a 5 bancas e limita acima de 5', () => {
    const cases: DiagnosticBoardOption[][] = [
      ['UEPA'],
      ['UEPA', 'ENARE'],
      ['UEPA', 'ENARE', 'USP-SP'],
      ['UEPA', 'ENARE', 'USP-SP', 'SUS-SP'],
      ['UEPA', 'ENARE', 'USP-SP', 'SUS-SP', 'UNIFESP'],
      ['UEPA', 'ENARE', 'USP-SP', 'SUS-SP', 'UNIFESP', 'GERAL'],
    ];

    for (const boards of cases) {
      const quotas = computePerAreaBoardQuotas(boards);
      expect(quotas.length).toBeLessThanOrEqual(5);
      expect(quotas.reduce((s, q) => s + q.perArea, 0)).toBe(10);
      expect(quotas.reduce((s, q) => s + q.totalTarget, 0)).toBe(50);
      if (quotas.length > 1) {
        expect(quotas[0].perArea).toBeGreaterThanOrEqual(quotas[1].perArea);
      }
    }
  });

  it('estratifica exatamente Grande Área × Banca (4,2,2,1,1 por área) quando as 5 bancas têm acervo', () => {
    const fiveBoards: DiagnosticBoardOption[] = [
      'UEPA',
      'ENARE',
      'USP-SP',
      'SUS-SP',
      'UNIFESP',
    ];
    const bank = buildSyntheticMultiBoardBank(fiveBoards);
    const res = selectDiagnosticQuestions(bank, fiveBoards);

    expect(res.questions).toHaveLength(50);
    expect(res.fallbackCount).toBe(0);
    expect(res.matchedBoardCount).toBe(50);
    expect(res.paretoCoreCount).toBeGreaterThan(0);

    // Total across 5 areas: 20, 10, 10, 5, 5
    expect(res.boardBreakdown['UEPA']).toBe(20);
    expect(res.boardBreakdown['ENARE']).toBe(10);
    expect(res.boardBreakdown['USP-SP']).toBe(10);
    expect(res.boardBreakdown['SUS-SP']).toBe(5);
    expect(res.boardBreakdown['UNIFESP']).toBe(5);

    // Every single Grande Área has the exact same board mix (zero confounding!)
    for (const area of GRANDES_AREAS) {
      const areaQs = res.questions.filter((q) => q.grandeAreaId === area.id);
      expect(areaQs).toHaveLength(10);
      expect(areaQs.filter((q) => q.banca === 'UEPA')).toHaveLength(4);
      expect(areaQs.filter((q) => q.banca === 'ENARE')).toHaveLength(2);
      expect(areaQs.filter((q) => q.banca === 'USP-SP')).toHaveLength(2);
      expect(areaQs.filter((q) => q.banca === 'SUS-SP')).toHaveLength(1);
      expect(areaQs.filter((q) => q.banca === 'UNIFESP')).toHaveLength(1);
    }
  });

  it('seleciona exatamente 50 questões ativas da UEPA (10 por Grande Área) priorizando Núcleo Pareto', () => {
    const res = selectDiagnosticQuestions(ALL_UEPA, 'UEPA');

    expect(res.questions).toHaveLength(DIAGNOSTIC_TOTAL_QUESTIONS);
    expect(res.matchedBoardCount).toBe(50);
    expect(res.fallbackCount).toBe(0);
    expect(res.paretoCoreCount).toBeGreaterThanOrEqual(25);

    for (const area of GRANDES_AREAS) {
      expect(res.areaCounts[area.id]).toBe(DIAGNOSTIC_QUESTIONS_PER_AREA);
    }
    expect(res.questions.every((q) => !q.anulada && !q.desatualizada)).toBe(true);
    expect(new Set(res.questionIds).size).toBe(50);
  });

  it('mantém 50 questões (10 por Grande Área) via fallback quando bancas secundárias não têm acervo ainda', () => {
    const res = selectDiagnosticQuestions(ALL_UEPA, ['ENARE', 'USP-SP']);

    expect(res.questions).toHaveLength(50);
    expect(res.matchedBoardCount).toBe(0);
    expect(res.fallbackCount).toBe(50);
    for (const area of GRANDES_AREAS) {
      expect(res.areaCounts[area.id]).toBe(10);
    }
  });

  it('bloqueia finalização com 49/50 respondidas e libera apenas com 50/50', () => {
    const res = selectDiagnosticQuestions(ALL_UEPA, 'UEPA');
    const drafts49: Record<string, AlternativeLetter> = {};
    for (let i = 0; i < 49; i += 1) {
      drafts49[res.questionIds[i]] = 'A';
    }

    const check49 = canFinishDiagnostic(res.questionIds, drafts49);
    expect(check49.canFinish).toBe(false);
    expect(check49.remainingCount).toBe(1);
    expect(check49.firstUnansweredIndex).toBe(49);

    const check50 = canFinishDiagnostic(res.questionIds, {
      ...drafts49,
      [res.questionIds[49]]: 'B',
    });
    expect(check50.canFinish).toBe(true);
    expect(check50.remainingCount).toBe(0);
  });

  it('bloqueia gráficos para aluno novo e libera após conclusão ou 10q nas 5 áreas', () => {
    expect(hasCompletedDiagnostic(null, {}, ALL_UEPA)).toBe(false);

    const selection = selectDiagnosticQuestions(ALL_UEPA, 'UEPA');
    const balancedAnswers: Record<string, UserAnswerRecord> = {};
    for (const q of selection.questions) {
      balancedAnswers[q.id] = {
        questionId: q.id,
        selectedLetter: q.gabaritoOficial,
        isCorrect: true,
        answeredAt: '2026-11-25T12:00:00.000Z',
        mode: 'simulado',
        timeSpentSec: 45,
      };
    }
    expect(hasCompletedDiagnostic(null, balancedAnswers, ALL_UEPA)).toBe(true);
  });

  it('calcula scorePct e breakdown por área corretamente ao avaliar as 50 questões', () => {
    const selection = selectDiagnosticQuestions(ALL_UEPA, 'UEPA');
    const drafts: Record<string, AlternativeLetter> = {};

    selection.questions.forEach((q, idx) => {
      const wrong = q.alternativas.find((a) => a.letter !== q.gabaritoOficial)?.letter ?? 'A';
      drafts[q.id] = idx % 10 < 7 ? q.gabaritoOficial : wrong;
    });

    const evalRes = evaluateDiagnosticCompletion(selection.questions, drafts);
    expect(evalRes.validTotal).toBe(50);
    expect(evalRes.validCorrect).toBe(35);
    expect(evalRes.scorePct).toBe(70);
    for (const area of GRANDES_AREAS) {
      expect(evalRes.areaBreakdown[area.id]).toEqual({ answered: 10, correct: 7 });
    }
  });
});
