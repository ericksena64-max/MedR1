import type { MedicalQuestion } from '../types/medical';

export const BAYESIAN_PRIOR_WEIGHT_DEFAULT = 25;

export const CLINICAL_DIFFICULTY_PRIORS = {
  Fácil: 76.5,
  Médio: 58.4,
  Difícil: 36.8,
} as const;

export interface BayesianAccuracyInput {
  baseAccuracy: number;
  realAttempts: number;
  realHits: number;
  priorWeight?: number;
  anulada?: boolean;
}

/**
 * Computes posterior accuracy (%) using Classical Test Theory Bayesian Smoothing:
 * ((baseAccuracy * priorWeight) + (realHits * 100)) / (priorWeight + realAttempts)
 * rounded to 1 decimal place. Annulled questions always return 0.
 */
export function computeBayesianAccuracy({
  baseAccuracy,
  realAttempts,
  realHits,
  priorWeight = BAYESIAN_PRIOR_WEIGHT_DEFAULT,
  anulada = false,
}: BayesianAccuracyInput): number {
  if (anulada) return 0;

  const safeBase =
    Number.isFinite(baseAccuracy) && baseAccuracy >= 0 && baseAccuracy <= 100
      ? baseAccuracy
      : CLINICAL_DIFFICULTY_PRIORS.Médio;

  const safePriorWeight =
    Number.isFinite(priorWeight) && priorWeight > 0
      ? priorWeight
      : BAYESIAN_PRIOR_WEIGHT_DEFAULT;

  const safeAttempts =
    Number.isFinite(realAttempts) && realAttempts > 0
      ? Math.floor(realAttempts)
      : 0;

  const safeHits =
    Number.isFinite(realHits) && realHits > 0
      ? Math.min(safeAttempts, Math.floor(realHits))
      : 0;

  if (safeAttempts === 0) {
    return Math.round(safeBase * 10) / 10;
  }

  const posteriorPct =
    (safeBase * safePriorWeight + safeHits * 100) /
    (safePriorWeight + safeAttempts);

  return Math.round(posteriorPct * 10) / 10;
}

export interface QuestionGlobalStatsRecord {
  taxaAcertoBase: number;
  tentativasGlobais: number;
  acertosGlobais: number;
  taxaAcertoGlobal: number;
}

export interface FirstAttemptTrackerState {
  statsByQuestionId: Record<string, QuestionGlobalStatsRecord>;
  countedFirstAttempts: Record<string, true>; // key: `${studentId}::${questionId}`
}

export const EMPTY_FIRST_ATTEMPT_TRACKER: FirstAttemptTrackerState = {
  statsByQuestionId: {},
  countedFirstAttempts: {},
};

export function makeFirstAttemptKey(studentId: string, questionId: string): string {
  return `${studentId}::${questionId}`;
}

export interface RegisterFirstAttemptParams {
  studentId: string;
  question: Pick<
    MedicalQuestion,
    | 'id'
    | 'taxaAcertoGlobal'
    | 'taxaAcertoBase'
    | 'tentativasGlobais'
    | 'acertosGlobais'
    | 'anulada'
  >;
  isCorrect: boolean;
  alreadyAnsweredByStudent?: boolean;
  priorWeight?: number;
}

/**
 * Registers only a student's first attempt for a question into the global
 * Bayesian calibration tracker. Subsequent attempts and annulled questions do
 * not alter global difficulty counters.
 */
export function registerFirstAttemptInTracker(
  prev: FirstAttemptTrackerState,
  {
    studentId,
    question,
    isCorrect,
    alreadyAnsweredByStudent = false,
    priorWeight = BAYESIAN_PRIOR_WEIGHT_DEFAULT,
  }: RegisterFirstAttemptParams
): FirstAttemptTrackerState {
  if (question.anulada) {
    const existing = prev.statsByQuestionId[question.id];
    if (
      existing &&
      existing.taxaAcertoGlobal === 0 &&
      existing.taxaAcertoBase === 0
    ) {
      return prev;
    }
    return {
      statsByQuestionId: {
        ...prev.statsByQuestionId,
        [question.id]: {
          taxaAcertoBase: 0,
          tentativasGlobais: existing?.tentativasGlobais ?? question.tentativasGlobais ?? 0,
          acertosGlobais: existing?.acertosGlobais ?? question.acertosGlobais ?? 0,
          taxaAcertoGlobal: 0,
        },
      },
      countedFirstAttempts: prev.countedFirstAttempts,
    };
  }

  const key = makeFirstAttemptKey(studentId, question.id);
  if (prev.countedFirstAttempts[key]) {
    return prev;
  }

  if (alreadyAnsweredByStudent) {
    return {
      statsByQuestionId: prev.statsByQuestionId,
      countedFirstAttempts: {
        ...prev.countedFirstAttempts,
        [key]: true,
      },
    };
  }

  const existing = prev.statsByQuestionId[question.id];
  const taxaAcertoBase =
    existing?.taxaAcertoBase ?? question.taxaAcertoBase ?? question.taxaAcertoGlobal;
  const tentativasGlobais =
    (existing?.tentativasGlobais ?? question.tentativasGlobais ?? 0) + 1;
  const acertosGlobais =
    (existing?.acertosGlobais ?? question.acertosGlobais ?? 0) + (isCorrect ? 1 : 0);
  const taxaAcertoGlobal = computeBayesianAccuracy({
    baseAccuracy: taxaAcertoBase,
    realAttempts: tentativasGlobais,
    realHits: acertosGlobais,
    priorWeight,
    anulada: question.anulada,
  });

  return {
    statsByQuestionId: {
      ...prev.statsByQuestionId,
      [question.id]: {
        taxaAcertoBase,
        tentativasGlobais,
        acertosGlobais,
        taxaAcertoGlobal,
      },
    },
    countedFirstAttempts: {
      ...prev.countedFirstAttempts,
      [key]: true,
    },
  };
}

export function registerBatchFirstAttemptsInTracker(
  prev: FirstAttemptTrackerState,
  items: RegisterFirstAttemptParams[]
): FirstAttemptTrackerState {
  let next = prev;
  for (const item of items) {
    next = registerFirstAttemptInTracker(next, item);
  }
  return next;
}

export function applyGlobalStatsToQuestion(
  question: MedicalQuestion,
  stats?: QuestionGlobalStatsRecord
): MedicalQuestion {
  const baseAttempts = question.tentativasGlobais ?? 0;
  const baseHits = question.acertosGlobais ?? 0;
  const taxaAcertoBase =
    stats?.taxaAcertoBase ??
    question.taxaAcertoBase ??
    (question.anulada ? 0 : question.taxaAcertoGlobal);

  if (question.anulada) {
    return {
      ...question,
      taxaAcertoBase: 0,
      tentativasGlobais: stats?.tentativasGlobais ?? baseAttempts,
      acertosGlobais: stats?.acertosGlobais ?? baseHits,
      taxaAcertoGlobal: 0,
    };
  }

  if (stats) {
    const addedAttempts = Math.max(0, stats.tentativasGlobais - baseAttempts);
    return {
      ...question,
      taxaAcertoBase: stats.taxaAcertoBase,
      tentativasGlobais: stats.tentativasGlobais,
      acertosGlobais: stats.acertosGlobais,
      taxaAcertoGlobal: stats.taxaAcertoGlobal,
      totalRespostasComunidade:
        (question.totalRespostasComunidade ?? 0) + addedAttempts,
    };
  }

  return {
    ...question,
    taxaAcertoBase,
    tentativasGlobais: baseAttempts,
    acertosGlobais: baseHits,
  };
}
