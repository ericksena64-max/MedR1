import { GRANDES_AREAS } from '../data/taxonomy';
import type {
  DailyGoalProgress,
  GrandeAreaId,
  MedicalQuestion,
  SimuladoRecord,
  UserAnswerRecord,
} from '../types/medical';

export type MedicalRankId =
  | 'interno_1'
  | 'interno_2'
  | 'r1'
  | 'r2'
  | 'r3'
  | 'preceptor'
  | 'staff';

export type AreaMasteryTier =
  | 'iniciante'
  | 'praticante'
  | 'residente'
  | 'especialista'
  | 'referencia';

export interface AreaMasteryStat {
  grandeAreaId: GrandeAreaId;
  label: string;
  shortLabel: string;
  answered: number;
  correct: number;
  accuracyPct: number;
  tier: AreaMasteryTier;
  tierLabel: string;
  progressToNextPct: number;
  nextRequirementLabel: string;
}

export interface GamificationXpBreakdown {
  questionsXp: number;
  accuracyBonusXp: number;
  simuladoBonusXp: number;
  fsrsReviewsXp: number;
  dailyGoalDaysXp: number;
}

export interface GamificationCoreState {
  totalXp: number;
  level: number;
  rankId: MedicalRankId;
  rankLabel: string;
  currentLevelXp: number;
  nextLevelXp: number;
  xpToNextLevel: number;
  xpProgressPct: number;
  streakDays: number;
  streakShields: number;
  maxStreakShields: number;
  currentCorrectCombo: number;
  breakdown: GamificationXpBreakdown;
  areaMastery: AreaMasteryStat[];
}

export interface GamificationCoreInput {
  answers: Record<string, UserAnswerRecord>;
  questions: MedicalQuestion[];
  fsrsReviewCount: number;
  completedGoalDaysCount: number;
  simulados: SimuladoRecord[];
  dailyGoal: DailyGoalProgress;
}

const XP_PER_QUESTION = 10;
const XP_CORRECT_BONUS = 10;
const XP_SIMULADO_BONUS = 5;
const XP_PER_FSRS_REVIEW = 5;
const XP_PER_GOAL_DAY = 50;
const LEVEL_XP_BASE = 150;
const MAX_STREAK_SHIELDS = 2;

function resolveMedicalRank(level: number): { rankId: MedicalRankId; rankLabel: string } {
  if (level >= 20) return { rankId: 'staff', rankLabel: 'Staff' };
  if (level >= 15) return { rankId: 'preceptor', rankLabel: 'Preceptor' };
  if (level >= 11) return { rankId: 'r3', rankLabel: 'Residente R3' };
  if (level >= 8) return { rankId: 'r2', rankLabel: 'Residente R2' };
  if (level >= 5) return { rankId: 'r1', rankLabel: 'Residente R1' };
  if (level >= 3) return { rankId: 'interno_2', rankLabel: 'Interno II' };
  return { rankId: 'interno_1', rankLabel: 'Interno I' };
}

function resolveAreaMastery(
  answered: number,
  accuracyPct: number
): {
  tier: AreaMasteryTier;
  tierLabel: string;
  progressToNextPct: number;
  nextRequirementLabel: string;
} {
  if (answered >= 60 && accuracyPct >= 82) {
    return {
      tier: 'referencia',
      tierLabel: 'Referência',
      progressToNextPct: 100,
      nextRequirementLabel: 'Nível máximo atingido',
    };
  }
  if (answered >= 35 && accuracyPct >= 75) {
    const volRatio = Math.min(1, answered / 60);
    const accRatio = Math.min(1, accuracyPct / 82);
    return {
      tier: 'especialista',
      tierLabel: 'Especialista',
      progressToNextPct: Math.round(((volRatio + accRatio) / 2) * 100),
      nextRequirementLabel: '60q com ≥ 82% para Referência',
    };
  }
  if (answered >= 20 && accuracyPct >= 65) {
    const volRatio = Math.min(1, answered / 35);
    const accRatio = Math.min(1, accuracyPct / 75);
    return {
      tier: 'residente',
      tierLabel: 'Residente',
      progressToNextPct: Math.round(((volRatio + accRatio) / 2) * 100),
      nextRequirementLabel: '35q com ≥ 75% para Especialista',
    };
  }
  if (answered >= 5) {
    const volRatio = Math.min(1, answered / 20);
    const accRatio = Math.min(1, accuracyPct / 65);
    return {
      tier: 'praticante',
      tierLabel: 'Praticante',
      progressToNextPct: Math.round(((volRatio + accRatio) / 2) * 100),
      nextRequirementLabel: '20q com ≥ 65% para Residente',
    };
  }
  return {
    tier: 'iniciante',
    tierLabel: 'Iniciante',
    progressToNextPct: Math.round(Math.min(1, answered / 5) * 100),
    nextRequirementLabel: '5q respondidas para Praticante',
  };
}

export function computeGamificationCore(
  input: GamificationCoreInput
): GamificationCoreState {
  const answerList = Object.values(input.answers);
  const questionById = new Map(input.questions.map((q) => [q.id, q]));

  let correctCount = 0;
  let simuladoAnswerCount = 0;

  const areaCounts = new Map<GrandeAreaId, { answered: number; correct: number }>();
  for (const area of GRANDES_AREAS) {
    areaCounts.set(area.id, { answered: 0, correct: 0 });
  }

  for (const ans of answerList) {
    if (ans.isCorrect) correctCount += 1;
    if (ans.mode === 'simulado') simuladoAnswerCount += 1;
    const q = questionById.get(ans.questionId);
    if (q) {
      const bucket = areaCounts.get(q.grandeAreaId);
      if (bucket) {
        bucket.answered += 1;
        if (ans.isCorrect) bucket.correct += 1;
      }
    }
  }

  // Consecutive correct combo from most recent answers
  const sortedRecent = [...answerList].sort(
    (a, b) => new Date(b.answeredAt).getTime() - new Date(a.answeredAt).getTime()
  );
  let currentCorrectCombo = 0;
  for (const rec of sortedRecent) {
    if (rec.isCorrect) currentCorrectCombo += 1;
    else break;
  }

  const questionsXp = answerList.length * XP_PER_QUESTION;
  const accuracyBonusXp = correctCount * XP_CORRECT_BONUS;
  const simuladoBonusXp = simuladoAnswerCount * XP_SIMULADO_BONUS;
  const fsrsReviewsXp = Math.max(0, Math.floor(input.fsrsReviewCount)) * XP_PER_FSRS_REVIEW;
  const dailyGoalDaysXp =
    Math.max(0, Math.floor(input.completedGoalDaysCount)) * XP_PER_GOAL_DAY;

  const totalXp =
    questionsXp +
    accuracyBonusXp +
    simuladoBonusXp +
    fsrsReviewsXp +
    dailyGoalDaysXp;

  // Quadratic level curve: level L starts at 150 * (L - 1)^2
  const level = Math.floor(Math.sqrt(totalXp / LEVEL_XP_BASE)) + 1;
  const levelFloorXp = LEVEL_XP_BASE * (level - 1) * (level - 1);
  const nextLevelFloorXp = LEVEL_XP_BASE * level * level;
  const levelSpan = Math.max(1, nextLevelFloorXp - levelFloorXp);
  const currentLevelXp = totalXp - levelFloorXp;
  const nextLevelXp = levelSpan;
  const xpToNextLevel = Math.max(0, nextLevelFloorXp - totalXp);
  const xpProgressPct = Math.min(
    100,
    Math.max(0, Math.round((currentLevelXp / levelSpan) * 100))
  );

  const { rankId, rankLabel } = resolveMedicalRank(level);
  const streakDays = Math.max(0, Math.floor(input.dailyGoal.streakDays));
  const streakShields = Math.min(MAX_STREAK_SHIELDS, Math.floor(streakDays / 7));

  const areaMastery: AreaMasteryStat[] = GRANDES_AREAS.map((area) => {
    const stat = areaCounts.get(area.id) ?? { answered: 0, correct: 0 };
    const accuracyPct =
      stat.answered > 0
        ? Number(((stat.correct / stat.answered) * 100).toFixed(1))
        : 0;
    const mastery = resolveAreaMastery(stat.answered, accuracyPct);
    return {
      grandeAreaId: area.id,
      label: area.name,
      shortLabel: area.shortName,
      answered: stat.answered,
      correct: stat.correct,
      accuracyPct,
      ...mastery,
    };
  });

  return {
    totalXp,
    level,
    rankId,
    rankLabel,
    currentLevelXp,
    nextLevelXp,
    xpToNextLevel,
    xpProgressPct,
    streakDays,
    streakShields,
    maxStreakShields: MAX_STREAK_SHIELDS,
    currentCorrectCombo,
    breakdown: {
      questionsXp,
      accuracyBonusXp,
      simuladoBonusXp,
      fsrsReviewsXp,
      dailyGoalDaysXp,
    },
    areaMastery,
  };
}
