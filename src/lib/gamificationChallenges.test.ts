import { describe, expect, it } from 'vitest';
import {
  computeGamificationAchievements,
  computeGamificationMissions,
} from './gamificationChallenges';
import { computeGamificationCore } from './gamificationEngine';
import type { DailyGoalProgress, MedicalQuestion, UserAnswerRecord } from '../types/medical';

const GOAL_HALF: DailyGoalProgress = {
  target: 20,
  answeredToday: 10,
  correctToday: 8,
  pct: 50,
  remaining: 10,
  completed: false,
  streakDays: 3,
  todayKey: '2026-11-25',
};

describe('gamificationChallenges', () => {
  it('gera 3 missões diárias e 2 semanais válidas mesmo com histórico zerado', () => {
    const emptyGoal: DailyGoalProgress = {
      ...GOAL_HALF,
      answeredToday: 0,
      correctToday: 0,
      pct: 0,
      remaining: 20,
      streakDays: 0,
    };
    const core = computeGamificationCore({
      answers: {},
      questions: [],
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: emptyGoal,
    });

    const missions = computeGamificationMissions({
      core,
      dailyGoal: emptyGoal,
      reviewsTodayCount: 0,
      dueFlashcardsCount: 12,
      answeredThisWeekCount: 0,
      simuladosThisWeekCount: 0,
      weakAreaAnsweredToday: 0,
      weakestAreaId: 'ginecologia_obstetricia',
    });

    expect(missions.filter((m) => m.scope === 'diaria')).toHaveLength(3);
    expect(missions.filter((m) => m.scope === 'semanal')).toHaveLength(2);
    expect(missions.every((m) => Number.isFinite(m.pct) && m.pct >= 0 && m.pct <= 100)).toBe(true);
  });

  it('desbloqueia conquistas reais (ex: Primeiro Plantão e Guardião da Memória) ao atingir os marcos', () => {
    const q1 = { id: 'q1', grandeAreaId: 'cirurgia_geral' } as MedicalQuestion;
    const answers: Record<string, UserAnswerRecord> = {
      q1: {
        questionId: 'q1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-25T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 30,
      },
    };
    const core = computeGamificationCore({
      answers,
      questions: [q1],
      fsrsReviewCount: 55,
      completedGoalDaysCount: 7,
      simulados: [],
      dailyGoal: { ...GOAL_HALF, streakDays: 7 },
    });

    const badges = computeGamificationAchievements({
      core,
      totalAnswered: 1,
      totalCorrect: 1,
      fsrsReviewCount: 55,
      simuladoCount: 0,
      errorNotebookReviewedCount: 0,
    });

    expect(badges).toHaveLength(12);
    expect(badges.find((b) => b.id === 'primeiro_plantao')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'guardiao_memoria')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'maratonista_7d')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'centuriao_100')?.unlocked).toBe(false);
  });
});
