import { describe, expect, it } from 'vitest';
import { buildPeriodRanking, countUserAnswersByPeriod } from './rankingPeriods';
import type { LiveRankingUser, UserAnswerRecord } from '../types/medical';

function makeUser(overrides: Partial<LiveRankingUser>): LiveRankingUser {
  return {
    id: 'u-1',
    realName: 'Estudante 1',
    pseudonym: 'Estudante_1',
    usePseudonym: false,
    targetInstitution: 'UEPA',
    avatarInitials: 'E1',
    questionsToday: 0,
    correctToday: 0,
    questionsWeek: 0,
    correctWeek: 0,
    questionsMonth: 0,
    correctMonth: 0,
    streak: 0,
    currentArea: 'Clínica Médica',
    isOnline: true,
    lastActiveSecondsAgo: 5,
    ...overrides,
  };
}

describe('rankingPeriods — Diário, Semanal e Mensal', () => {
  it('exclui alunos com 0 questões e inclui quem respondeu >= 1 questão mesmo errando todas', () => {
    const users: LiveRankingUser[] = [
      makeUser({ id: 'zero', realName: 'Sem Questões', questionsToday: 0, questionsWeek: 0, questionsMonth: 0 }),
      makeUser({ id: 'one-wrong', realName: 'Uma Errada', questionsToday: 1, correctToday: 0, questionsWeek: 1, correctWeek: 0, questionsMonth: 1, correctMonth: 0 }),
    ];

    for (const period of ['daily', 'weekly', 'monthly'] as const) {
      const ranked = buildPeriodRanking(users, period);
      expect(ranked.map((r) => r.id)).toEqual(['one-wrong']);
      expect(ranked[0].accuracyPct).toBe(0);
    }
  });

  it('ordena o ranking mensal por total de questões em ordem decrescente, independentemente da taxa de acerto', () => {
    const users: LiveRankingUser[] = [
      makeUser({ id: 'high-acc-low-vol', questionsMonth: 40, correctMonth: 40 }), // 100%
      makeUser({ id: 'low-acc-high-vol', questionsMonth: 120, correctMonth: 12 }), // 10%
      makeUser({ id: 'mid-vol', questionsMonth: 85, correctMonth: 50 }),
    ];

    const monthly = buildPeriodRanking(users, 'monthly');
    expect(monthly.map((r) => r.id)).toEqual([
      'low-acc-high-vol',
      'mid-vol',
      'high-acc-low-vol',
    ]);
    expect(monthly[0].questionsInPeriod).toBe(120);
  });

  it('ordena o ranking semanal por número de questões e taxa de acertos (desempate por acurácia)', () => {
    const users: LiveRankingUser[] = [
      makeUser({ id: 'same-vol-lower-acc', questionsWeek: 50, correctWeek: 30 }), // 60%
      makeUser({ id: 'same-vol-higher-acc', questionsWeek: 50, correctWeek: 45 }), // 90%
      makeUser({ id: 'top-vol', questionsWeek: 70, correctWeek: 49 }),
    ];

    const weekly = buildPeriodRanking(users, 'weekly');
    expect(weekly.map((r) => r.id)).toEqual([
      'top-vol',
      'same-vol-higher-acc',
      'same-vol-lower-acc',
    ]);
  });

  it('ordena o ranking diário ao vivo por questões feitas hoje em ordem decrescente', () => {
    const users: LiveRankingUser[] = [
      makeUser({ id: 'd-10', questionsToday: 10, correctToday: 10 }),
      makeUser({ id: 'd-35', questionsToday: 35, correctToday: 20 }),
      makeUser({ id: 'd-22', questionsToday: 22, correctToday: 18 }),
    ];

    const daily = buildPeriodRanking(users, 'daily');
    expect(daily.map((r) => r.id)).toEqual(['d-35', 'd-22', 'd-10']);
  });

  it('countUserAnswersByPeriod contabiliza respostas por dia, semana e mês corrente', () => {
    const now = new Date('2026-11-25T13:00:00-03:00');
    const answers: Record<string, UserAnswerRecord> = {
      q1: { questionId: 'q1', selectedLetter: 'A', isCorrect: false, answeredAt: '2026-11-25T10:00:00-03:00', mode: 'estudo', timeSpentSec: 20 },
      q2: { questionId: 'q2', selectedLetter: 'B', isCorrect: true, answeredAt: '2026-11-22T10:00:00-03:00', mode: 'estudo', timeSpentSec: 20 },
      q3: { questionId: 'q3', selectedLetter: 'C', isCorrect: true, answeredAt: '2026-11-03T10:00:00-03:00', mode: 'estudo', timeSpentSec: 20 },
      q4: { questionId: 'q4', selectedLetter: 'D', isCorrect: true, answeredAt: '2026-10-20T10:00:00-03:00', mode: 'estudo', timeSpentSec: 20 },
    };

    const counts = countUserAnswersByPeriod(answers, now);
    expect(counts).toEqual({
      today: 1,
      correctToday: 0,
      week: 2,
      correctWeek: 1,
      month: 3,
      correctMonth: 2,
    });
  });
});
