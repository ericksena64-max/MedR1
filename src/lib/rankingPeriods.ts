import type { LiveRankingUser, RankingPeriod, UserAnswerRecord } from '../types/medical';
import { computeWeightedScore } from './utils';

export interface PeriodRankedEntry {
  id: string;
  rank: number;
  displayName: string;
  realName: string;
  pseudonym: string;
  usePseudonym: boolean;
  targetInstitution: string;
  avatarInitials: string;
  questionsToday: number;
  correctToday: number;
  questionsInPeriod: number;
  correctInPeriod: number;
  accuracyPct: number;
  weightedScore: number;
  streak: number;
  currentArea: string;
  isOnline: boolean;
  isCurrentUser?: boolean;
  lastActiveSecondsAgo: number;
}

export interface UserPeriodCounts {
  today: number;
  correctToday: number;
  week: number;
  correctWeek: number;
  month: number;
  correctMonth: number;
}

function getLocalDateStr(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Counts a student's answered questions (right or wrong) across daily, 7-day weekly,
 * and current calendar month windows.
 */
export function countUserAnswersByPeriod(
  answers: Record<string, UserAnswerRecord>,
  now: Date = new Date()
): UserPeriodCounts {
  const todayStr = getLocalDateStr(now);
  const weekStartMs = now.getTime() - 7 * 24 * 60 * 60 * 1000;
  const monthStartMs = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  let today = 0;
  let correctToday = 0;
  let week = 0;
  let correctWeek = 0;
  let month = 0;
  let correctMonth = 0;

  for (const ans of Object.values(answers)) {
    const answeredDate = new Date(ans.answeredAt);
    const ts = answeredDate.getTime();
    if (!Number.isFinite(ts)) continue;

    if (getLocalDateStr(answeredDate) === todayStr) {
      today += 1;
      if (ans.isCorrect) correctToday += 1;
    }
    if (ts >= weekStartMs) {
      week += 1;
      if (ans.isCorrect) correctWeek += 1;
    }
    if (ts >= monthStartMs) {
      month += 1;
      if (ans.isCorrect) correctMonth += 1;
    }
  }

  return { today, correctToday, week, correctWeek, month, correctMonth };
}

function resolvePeriodMetrics(
  user: LiveRankingUser,
  period: RankingPeriod
): { questions: number; correct: number } {
  if (period === 'daily') {
    return {
      questions: Math.max(0, user.questionsToday),
      correct: Math.max(0, user.correctToday),
    };
  }
  if (period === 'weekly') {
    const questions =
      user.questionsWeek !== undefined
        ? user.questionsWeek
        : user.questionsToday > 0
          ? user.questionsToday * 5
          : 0;
    const correct =
      user.correctWeek !== undefined
        ? user.correctWeek
        : user.questionsToday > 0
          ? user.correctToday * 5
          : 0;
    return { questions: Math.max(0, questions), correct: Math.max(0, correct) };
  }
  // monthly
  const questions =
    user.questionsMonth !== undefined
      ? user.questionsMonth
      : user.questionsToday > 0
        ? user.questionsToday * 18
        : 0;
  const correct =
    user.correctMonth !== undefined
      ? user.correctMonth
      : user.questionsToday > 0
        ? user.correctToday * 18
        : 0;
  return { questions: Math.max(0, questions), correct: Math.max(0, correct) };
}

/**
 * Builds a ranked leaderboard for the requested period (`daily`, `weekly`, `monthly`):
 * - Excludes any user with 0 questions in that period (must have answered >= 1 question, right or wrong).
 * - `daily`: descending by questionsToday (tie-break: correctToday, streak).
 * - `weekly`: descending by questionsWeek, then accuracyPct (tie-break: correctWeek).
 * - `monthly`: descending strictly by questionsMonth, regardless of accuracy.
 */
export function buildPeriodRanking(
  users: LiveRankingUser[],
  period: RankingPeriod
): PeriodRankedEntry[] {
  const eligible = users
    .map((u) => {
      const { questions, correct } = resolvePeriodMetrics(u, period);
      const accuracyPct =
        questions > 0 ? Number(((correct / questions) * 100).toFixed(1)) : 0;
      const weightedScore = computeWeightedScore(questions, correct, u.streak);
      return {
        ...u,
        questionsInPeriod: questions,
        correctInPeriod: correct,
        displayName: u.usePseudonym ? u.pseudonym : u.realName,
        accuracyPct,
        weightedScore,
      };
    })
    .filter((u) => u.questionsInPeriod >= 1);

  eligible.sort((a, b) => {
    if (period === 'monthly') {
      // Mensal: todas as questões feitas, independentemente da taxa de acerto
      return b.questionsInPeriod - a.questionsInPeriod;
    }
    if (period === 'weekly') {
      // Semanal: número de questões e taxa de acertos
      if (b.questionsInPeriod !== a.questionsInPeriod) {
        return b.questionsInPeriod - a.questionsInPeriod;
      }
      if (b.accuracyPct !== a.accuracyPct) {
        return b.accuracyPct - a.accuracyPct;
      }
      return b.correctInPeriod - a.correctInPeriod;
    }
    // Diário ao vivo: mais questões feitas em ordem decrescente
    if (b.questionsInPeriod !== a.questionsInPeriod) {
      return b.questionsInPeriod - a.questionsInPeriod;
    }
    if (b.correctInPeriod !== a.correctInPeriod) {
      return b.correctInPeriod - a.correctInPeriod;
    }
    return b.streak - a.streak;
  });

  return eligible.map((entry, idx) => ({
    ...entry,
    rank: idx + 1,
  }));
}
