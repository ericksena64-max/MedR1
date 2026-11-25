import { describe, expect, it } from 'vitest';
import { computeGamificationCore } from './gamificationEngine';
import type { DailyGoalProgress, MedicalQuestion, UserAnswerRecord } from '../types/medical';

const EMPTY_GOAL: DailyGoalProgress = {
  target: 20,
  answeredToday: 0,
  correctToday: 0,
  pct: 0,
  remaining: 20,
  completed: false,
  streakDays: 0,
  todayKey: '2026-11-25',
};

describe('gamificationEngine', () => {
  it('retorna estado limpo sem NaN para conta zerada (0 respostas, 0 revisões)', () => {
    const state = computeGamificationCore({
      answers: {},
      questions: [],
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: EMPTY_GOAL,
    });

    expect(state.totalXp).toBe(0);
    expect(state.level).toBe(1);
    expect(state.rankId).toBe('interno_1');
    expect(state.xpProgressPct).toBe(0);
    expect(state.streakShields).toBe(0);
    expect(state.areaMastery).toHaveLength(5);
    expect(state.areaMastery.every((a) => a.tier === 'iniciante')).toBe(true);
  });

  it('calcula XP, combo de acertos e escudos de ofensiva (teto 2) corretamente', () => {
    const q1 = { id: 'q1', grandeAreaId: 'clinica_medica' } as MedicalQuestion;
    const q2 = { id: 'q2', grandeAreaId: 'clinica_medica' } as MedicalQuestion;
    const answers: Record<string, UserAnswerRecord> = {
      q1: {
        questionId: 'q1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-25T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 40,
      },
      q2: {
        questionId: 'q2',
        selectedLetter: 'B',
        isCorrect: true,
        answeredAt: '2026-11-25T10:02:00Z',
        mode: 'simulado',
        timeSpentSec: 35,
      },
    };

    const state = computeGamificationCore({
      answers,
      questions: [q1, q2],
      fsrsReviewCount: 4,
      completedGoalDaysCount: 15,
      simulados: [],
      dailyGoal: { ...EMPTY_GOAL, streakDays: 15 },
    });

    // 2*10 + 2*10 + 1*5 + 4*5 + 15*50 = 815
    expect(state.totalXp).toBe(815);
    expect(state.currentCorrectCombo).toBe(2);
    expect(state.streakShields).toBe(2);
    expect(state.level).toBeGreaterThan(1);
  });

  it('impede promoção de maestria por área apenas por volume sem acurácia mínima', () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `q-cm-${i}`,
      grandeAreaId: 'clinica_medica',
    })) as MedicalQuestion[];
    const answers: Record<string, UserAnswerRecord> = {};
    questions.forEach((q, i) => {
      answers[q.id] = {
        questionId: q.id,
        selectedLetter: 'A',
        isCorrect: i < 16, // 40% accuracy on 40 questions
        answeredAt: `2026-11-25T10:${String(i).padStart(2, '0')}:00Z`,
        mode: 'estudo',
        timeSpentSec: 45,
      };
    });

    const state = computeGamificationCore({
      answers,
      questions,
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: EMPTY_GOAL,
    });

    const cm = state.areaMastery.find((a) => a.grandeAreaId === 'clinica_medica')!;
    expect(cm.accuracyPct).toBe(40);
    expect(cm.tier).toBe('praticante');
  });
});
