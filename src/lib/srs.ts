import {
  FSRSVersion,
  Rating,
  State,
  dateChrono,
  defineScheduler,
  type Grade,
} from 'ts-fsrs';
import {
  schedulerDesiredRetentionMiddleware,
  schedulerFuzzingMiddleware,
  schedulerLearningStepsMiddleware,
  schedulerMaximumIntervalMiddleware,
  schedulerMonotonicIntervalMiddleware,
  schedulerScheduledDaysMiddleware,
  schedulerStatsMiddleware,
  type StepUnit,
} from 'ts-fsrs/middlewares';
import {
  FSRS6Model,
  FSRS6_DEFAULT_WEIGHTS,
  forgettingCurve as fsrs6ForgettingCurve,
} from 'ts-fsrs/models/fsrs-6';
import type {
  ExamBoard,
  Flashcard,
  FsrsState,
  MedicalQuestion,
  RetentionMode,
  SrsRating,
  TargetRetention,
} from '../types/medical';
import {
  getExamTopicWeight,
  normalizeMedicalText,
  type IncidenceTier,
} from './examWeights';

const MINUTE_MS = 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_INTERVAL_DAYS = 3650;

export const FSRS_ENGINE_NAME = 'FSRS-6';
export const TS_FSRS_ENGINE_VERSION = FSRSVersion;
export const DEFAULT_TARGET_RETENTION: TargetRetention = 0.9;
export const BASE_DYNAMIC_RETENTION = 0.89;
export const MIN_DYNAMIC_RETENTION = 0.85;
export const MAX_DYNAMIC_RETENTION = 0.95;

const LEARNING_STEPS: readonly StepUnit[] = ['1m', '10m'];
const RELEARNING_STEPS: readonly StepUnit[] = ['10m'];

/**
 * Official ts-fsrs v6 synchronous scheduler definition using the 21-parameter FSRS-6 model:
 * - Trainable power-law forgetting curve decay (w[20])
 * - Short-term same-day memory stability (w[17..19])
 * - Deterministic cardId-seeded fuzzing (prevents review avalanches)
 * - Multi-step intra-day learning/relearning steps (['1m', '10m'] / ['10m'])
 * - Strict monotonic interval ordering (Again < Hard <= Good < Easy)
 */
const medR1Fsrs6SchedulerDef = defineScheduler({
  model: FSRS6Model,
  chrono: dateChrono,
})
  .use(schedulerDesiredRetentionMiddleware)
  .use(schedulerFuzzingMiddleware)
  .use(schedulerStatsMiddleware)
  .use(schedulerScheduledDaysMiddleware)
  .use(schedulerLearningStepsMiddleware)
  .use(schedulerMaximumIntervalMiddleware)
  .use(schedulerMonotonicIntervalMiddleware);

type MedR1Fsrs6Scheduler = ReturnType<typeof medR1Fsrs6SchedulerDef.create>;
type MedR1Fsrs6CardInput = Parameters<MedR1Fsrs6Scheduler['preview']>[0]['card'];

const schedulerCache = new Map<string, MedR1Fsrs6Scheduler>();

function clampRetention(r: number): number {
  return Number(Math.min(0.99, Math.max(0.7, r)).toFixed(2));
}

function getFsrs6Scheduler(
  desiredRetention: TargetRetention = DEFAULT_TARGET_RETENTION,
  enableFuzz: boolean = true
): MedR1Fsrs6Scheduler {
  const safeRetention = clampRetention(desiredRetention);
  const key = `${safeRetention.toFixed(2)}:${enableFuzz ? '1' : '0'}`;
  const cached = schedulerCache.get(key);
  if (cached) return cached;

  const instance = medR1Fsrs6SchedulerDef.create({
    config: {
      weights: FSRS6_DEFAULT_WEIGHTS,
      enableShortTerm: true,
      numRelearningSteps: RELEARNING_STEPS.length,
      fractionalDays: false,
      desiredRetention: safeRetention,
      enableFuzz,
      maximumInterval: MAX_INTERVAL_DAYS,
      learningSteps: LEARNING_STEPS,
      relearningSteps: RELEARNING_STEPS,
      graduatingInterval: 1,
    },
  });

  schedulerCache.set(key, instance);
  return instance;
}

const STATE_TO_TS_FSRS: Record<FsrsState, State> = {
  New: State.New,
  Learning: State.Learning,
  Review: State.Review,
  Relearning: State.Relearning,
};

const TS_FSRS_TO_STATE: Record<State, FsrsState> = {
  [State.New]: 'New',
  [State.Learning]: 'Learning',
  [State.Review]: 'Review',
  [State.Relearning]: 'Relearning',
};

const RATING_TO_GRADE: Record<SrsRating, Grade> = {
  1: Rating.Again,
  2: Rating.Hard,
  3: Rating.Good,
  4: Rating.Easy,
};

function toTsFsrsScheduleStatus(state: FsrsState): 'new' | 'learning' | 'review' {
  if (state === 'New') return 'new';
  if (state === 'Review') return 'review';
  return 'learning';
}

function toTsFsrsCard(card: Flashcard, now: Date): MedR1Fsrs6CardInput {
  const isNew = card.state === 'New' || card.stability <= 0;
  const parsedDue = new Date(card.dueAt);
  const safeDue = Number.isNaN(parsedDue.getTime()) ? now : parsedDue;

  if (isNew) {
    return {
      cardId: card.id,
      state: State.New,
      scheduleStatus: 'new',
      stability: 0,
      difficulty: 0,
      dueAt: safeDue,
      lastReviewAt: null,
      reps: Math.max(0, Math.floor(card.reps || 0)),
      lapses: Math.max(0, Math.floor(card.lapses || 0)),
      scheduledDays: 0,
      learningStep: 0,
    };
  }

  const parsedLastReview = card.lastReviewedAt
    ? new Date(card.lastReviewedAt)
    : new Date(now.getTime() - Math.max(0, card.elapsed_days || 0) * DAY_MS);
  const safeLastReview = Number.isNaN(parsedLastReview.getTime())
    ? now
    : parsedLastReview;

  return {
    cardId: card.id,
    state: STATE_TO_TS_FSRS[card.state],
    scheduleStatus: toTsFsrsScheduleStatus(card.state),
    stability: Math.max(0.01, card.stability),
    difficulty: Math.min(10, Math.max(1, card.difficulty || 5)),
    dueAt: safeDue,
    lastReviewAt: safeLastReview,
    reps: Math.max(1, Math.floor(card.reps || 1)),
    lapses: Math.max(0, Math.floor(card.lapses || 0)),
    scheduledDays: Math.max(0, Math.floor(card.scheduled_days || 0)),
    learningStep: Math.max(0, Math.floor(card.learning_steps ?? 0)),
  };
}

export interface DynamicRetentionResult {
  mode: RetentionMode;
  retention: number; // Strictly clamped in [0.85, 0.95]
  retentionPct: number; // Integer 85..95
  baseRetention: number;
  deltaBanca: number;
  deltaIndividual: number;
  board: ExamBoard;
  boardTier: IncidenceTier;
  boardReason: string;
  individualStatus: 'ponto_atencao' | 'neutro' | 'dominio' | 'sem_dados';
  individualReason: string | null;
  summaryLabel: string;
  userAccuracyPct: number | null;
  communityMedianPct: number | null;
  wasClamped: boolean;
}

export interface FsrsScheduleOutcome {
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: FsrsState;
  dueAt: string;
  previewLabel: string;
  longPreviewLabel: string;
}

export interface FsrsScheduleOptions {
  enableFuzz?: boolean;
}

const FSRS6_DEFAULT_DECAY = FSRS6_DEFAULT_WEIGHTS[20];

/**
 * Official FSRS-6 power-law forgetting curve powered by ts-fsrs:
 * R(t, S) = (1 + factor * t / S)^(-w20)
 */
export function computeRetrievability(elapsedDays: number, stability: number): number {
  if (stability <= 0) return 0;
  if (elapsedDays <= 0) return 1;
  return fsrs6ForgettingCurve(elapsedDays, stability, FSRS6_DEFAULT_DECAY);
}

/**
 * Inverse FSRS-6 forgetting curve powered by ts-fsrs:
 * exact interval (in days) where predicted retrievability drops to `targetRetention`.
 */
export function computeRawIntervalDays(
  stability: number,
  targetRetention: TargetRetention
): number {
  if (stability <= 0) return 0;
  const scheduler = getFsrs6Scheduler(targetRetention, false);
  const raw = scheduler.model.nextInterval(
    { stability: Math.max(0.01, stability), difficulty: 5 },
    clampRetention(targetRetention)
  );
  return Math.min(MAX_INTERVAL_DAYS, Math.max(0, raw));
}

export function formatFsrsInterval(days: number, intraDayMinutes?: number): string {
  if (intraDayMinutes !== undefined && intraDayMinutes < 60) {
    const mins = Math.max(1, Math.round(intraDayMinutes));
    return `${mins}m`;
  }
  if (days < 1 / 24) {
    const mins = Math.max(1, Math.round(days * 24 * 60));
    return `${mins}m`;
  }
  if (days < 1) {
    const hrs = Math.max(1, Math.round(days * 24));
    return `${hrs}h`;
  }
  const roundedDays = Math.round(days);
  if (roundedDays < 30) return `${roundedDays}d`;
  if (roundedDays < 365) {
    const months = Number((roundedDays / 30).toFixed(1));
    return months % 1 === 0 ? `${Math.round(months)}m` : `${months}m`;
  }
  const years = Number((roundedDays / 365).toFixed(1));
  return `${years}a`;
}

export function formatFsrsIntervalLong(days: number, intraDayMinutes?: number): string {
  if (intraDayMinutes !== undefined && intraDayMinutes < 60) {
    const mins = Math.max(1, Math.round(intraDayMinutes));
    return `${mins} min`;
  }
  if (days < 1 / 24) {
    const mins = Math.max(1, Math.round(days * 24 * 60));
    return `${mins} min`;
  }
  if (days < 1) {
    const hrs = Math.max(1, Math.round(days * 24));
    return hrs === 1 ? '1 hora' : `${hrs} horas`;
  }
  const roundedDays = Math.round(days);
  if (roundedDays < 30) {
    return roundedDays === 1 ? '1 dia' : `${roundedDays} dias`;
  }
  if (roundedDays < 365) {
    const months = Number((roundedDays / 30).toFixed(1));
    if (months === 1) return '1 mês';
    const formatted =
      months % 1 === 0 ? String(Math.round(months)) : months.toFixed(1).replace('.', ',');
    return `${formatted} meses`;
  }
  const years = Number((roundedDays / 365).toFixed(1));
  if (years === 1) return '1 ano';
  const formatted =
    years % 1 === 0 ? String(Math.round(years)) : years.toFixed(1).replace('.', ',');
  return `${formatted} anos`;
}

function computeElapsedDays(card: Flashcard, now: Date): number {
  if (card.state === 'New' || !card.lastReviewedAt) return 0;
  const diffMs = Math.max(0, now.getTime() - new Date(card.lastReviewedAt).getTime());
  return Number((diffMs / DAY_MS).toFixed(2));
}

function mapPreviewCardToOutcome(
  nextCard: {
    stability: number;
    difficulty: number;
    scheduledDays: number;
    learningStep: number;
    reps: number;
    lapses: number;
    state: State;
    dueAt: Date;
  },
  elapsedDays: number,
  now: Date
): FsrsScheduleOutcome {
  const scheduledDays = Math.max(0, Math.round(nextCard.scheduledDays));
  const diffMs = Math.max(MINUTE_MS, nextCard.dueAt.getTime() - now.getTime());
  const intraDayMinutes = scheduledDays === 0 ? diffMs / MINUTE_MS : undefined;
  const effectiveDays = scheduledDays > 0 ? scheduledDays : diffMs / DAY_MS;

  return {
    stability: Number(Math.max(0.01, nextCard.stability).toFixed(2)),
    difficulty: Number(Math.min(10, Math.max(1, nextCard.difficulty)).toFixed(2)),
    elapsed_days: elapsedDays,
    scheduled_days: scheduledDays,
    learning_steps: Math.max(0, Math.floor(nextCard.learningStep ?? 0)),
    reps: nextCard.reps,
    lapses: nextCard.lapses,
    state: TS_FSRS_TO_STATE[nextCard.state],
    dueAt: nextCard.dueAt.toISOString(),
    previewLabel: formatFsrsInterval(effectiveDays, intraDayMinutes),
    longPreviewLabel: formatFsrsIntervalLong(effectiveDays, intraDayMinutes),
  };
}

/**
 * Computes all 4 FSRS-6 scheduling outcomes simultaneously via official `ts-fsrs`
 * with guaranteed monotonicity (Again < Hard <= Good < Easy) and optional fuzzing.
 */
export function computeAllFsrsOutcomes(
  card: Flashcard,
  targetRetention: TargetRetention = DEFAULT_TARGET_RETENTION,
  now: Date = new Date(),
  options: FsrsScheduleOptions = {}
): Record<SrsRating, FsrsScheduleOutcome> {
  const enableFuzz = options.enableFuzz ?? true;
  const scheduler = getFsrs6Scheduler(targetRetention, enableFuzz);
  const fsrsCard = toTsFsrsCard(card, now);
  const elapsedDays = computeElapsedDays(card, now);

  const previewItems = Array.from(scheduler.preview({ card: fsrsCard, now }));
  const byGrade = new Map<Grade, (typeof previewItems)[number]['card']>();
  for (const item of previewItems) {
    byGrade.set(item.grade, item.card);
  }

  return {
    1: mapPreviewCardToOutcome(byGrade.get(RATING_TO_GRADE[1])!, elapsedDays, now),
    2: mapPreviewCardToOutcome(byGrade.get(RATING_TO_GRADE[2])!, elapsedDays, now),
    3: mapPreviewCardToOutcome(byGrade.get(RATING_TO_GRADE[3])!, elapsedDays, now),
    4: mapPreviewCardToOutcome(byGrade.get(RATING_TO_GRADE[4])!, elapsedDays, now),
  };
}

export function computeNextFsrsState(
  card: Flashcard,
  rating: SrsRating,
  targetRetention: TargetRetention = DEFAULT_TARGET_RETENTION,
  now: Date = new Date(),
  options: FsrsScheduleOptions = {}
): FsrsScheduleOutcome {
  return computeAllFsrsOutcomes(card, targetRetention, now, options)[rating];
}

export function getFsrsRatingPreviews(
  card: Flashcard,
  targetRetention: TargetRetention = DEFAULT_TARGET_RETENTION,
  options: FsrsScheduleOptions = {}
): Record<SrsRating, string> {
  const outcomes = computeAllFsrsOutcomes(card, targetRetention, new Date(), options);
  return {
    1: outcomes[1].previewLabel,
    2: outcomes[2].previewLabel,
    3: outcomes[3].previewLabel,
    4: outcomes[4].previewLabel,
  };
}

function lookupTopicMetric(
  map: Record<string, number>,
  card: Flashcard
): number | null {
  if (typeof map[card.tema] === 'number') return map[card.tema];

  const normTema = normalizeMedicalText(card.tema);
  const normSubtema = normalizeMedicalText(card.subtema ?? '');
  const normArea = normalizeMedicalText(card.grandeArea);

  const entries = Object.entries(map);

  // Normalized exact match on tema
  for (const [key, val] of entries) {
    if (typeof val !== 'number') continue;
    if (normalizeMedicalText(key) === normTema) return val;
  }

  // Partial topic / subtema match
  for (const [key, val] of entries) {
    if (typeof val !== 'number') continue;
    const normKey = normalizeMedicalText(key);
    if (
      (normKey.length >= 4 && normTema.includes(normKey)) ||
      (normTema.length >= 4 && normKey.includes(normTema)) ||
      (normSubtema && normKey.length >= 4 && normSubtema.includes(normKey))
    ) {
      return val;
    }
  }

  // Fallback to Grande Área metric if available in the map
  for (const [key, val] of entries) {
    if (typeof val !== 'number') continue;
    if (normalizeMedicalText(key) === normArea) return val;
  }

  return null;
}

/**
 * Dynamic, individualized FSRS retention calibration:
 * R_alvo = clamp(0.89 + deltaBanca + deltaIndividual, 0.85, 0.95)
 *
 * - deltaBanca: board incidence weight (+0.03 alta, 0.00 média, -0.03 baixa)
 * - deltaIndividual:
 *     +0.02 if user accuracy < community median (Ponto de Atenção)
 *     -0.01 if user accuracy > community median + 10 percentage points (Domínio)
 *      0.00 otherwise
 */
export function calculateDynamicRetention(
  card: Flashcard,
  selectedBoard: ExamBoard,
  userAccuracyByTopic: Record<string, number>,
  communityMedianByTopic: Record<string, number>
): DynamicRetentionResult {
  const boardWeight = getExamTopicWeight(
    selectedBoard,
    card.tema,
    card.subtema,
    card.front
  );

  const rawUserAcc = lookupTopicMetric(userAccuracyByTopic, card);
  const rawMedian = lookupTopicMetric(communityMedianByTopic, card);

  // Normalize to 0–100 percentage scale if caller passes 0–1 ratios
  const userAccuracyPct =
    rawUserAcc !== null
      ? Number((rawUserAcc <= 1 && rawUserAcc >= 0 ? rawUserAcc * 100 : rawUserAcc).toFixed(1))
      : null;
  const communityMedianPct =
    rawMedian !== null
      ? Number((rawMedian <= 1 && rawMedian >= 0 ? rawMedian * 100 : rawMedian).toFixed(1))
      : null;

  let deltaIndividual = 0;
  let individualStatus: DynamicRetentionResult['individualStatus'] = 'sem_dados';
  let individualReason: string | null = null;

  if (userAccuracyPct !== null && communityMedianPct !== null) {
    const diff = userAccuracyPct - communityMedianPct;
    if (diff < 0) {
      deltaIndividual = 0.02;
      individualStatus = 'ponto_atencao';
      individualReason = 'Ponto de atenção';
    } else if (diff > 10) {
      deltaIndividual = -0.01;
      individualStatus = 'dominio';
      individualReason = 'Domínio (+10% da mediana)';
    } else {
      deltaIndividual = 0;
      individualStatus = 'neutro';
      individualReason = null;
    }
  }

  const unclamped = Number(
    (BASE_DYNAMIC_RETENTION + boardWeight.delta + deltaIndividual).toFixed(2)
  );
  const clamped = Math.min(
    MAX_DYNAMIC_RETENTION,
    Math.max(MIN_DYNAMIC_RETENTION, unclamped)
  );
  const retention = Number(clamped.toFixed(2));
  const retentionPct = Math.round(retention * 100);

  const reasons = [boardWeight.reason];
  if (individualReason) {
    reasons.push(individualReason);
  }

  return {
    mode: 'dinamica',
    retention,
    retentionPct,
    baseRetention: BASE_DYNAMIC_RETENTION,
    deltaBanca: boardWeight.delta,
    deltaIndividual,
    board: selectedBoard,
    boardTier: boardWeight.tier,
    boardReason: boardWeight.reason,
    individualStatus,
    individualReason,
    summaryLabel: `Retenção ${retentionPct}% · ${reasons.join(' + ')}`,
    userAccuracyPct,
    communityMedianPct,
    wasClamped: unclamped !== retention,
  };
}

/**
 * Resolves the effective retention target for a card depending on whether the user
 * chose Dynamic Calibration or a fixed retention preset (85%, 90%, 95%).
 */
export function resolveCardRetention(
  card: Flashcard,
  retentionMode: RetentionMode,
  selectedBoard: ExamBoard,
  userAccuracyByTopic: Record<string, number>,
  communityMedianByTopic: Record<string, number>
): DynamicRetentionResult {
  const dynamic = calculateDynamicRetention(
    card,
    selectedBoard,
    userAccuracyByTopic,
    communityMedianByTopic
  );

  if (retentionMode === 'dinamica') {
    return dynamic;
  }

  const fixedPct = Math.round(retentionMode * 100);
  return {
    ...dynamic,
    mode: retentionMode,
    retention: retentionMode,
    retentionPct: fixedPct,
    summaryLabel: `Retenção fixa ${fixedPct}% · Modo manual`,
    wasClamped: false,
  };
}

export function isCardDueToday(card: Flashcard, now: Date = new Date()): boolean {
  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);
  return new Date(card.dueAt).getTime() <= endOfToday.getTime();
}

export function getCardCurrentRetrievabilityPct(
  card: Flashcard,
  now: Date = new Date()
): number | null {
  if (card.state === 'New' || card.stability <= 0) return null;
  const elapsed = computeElapsedDays(card, now);
  return Math.round(computeRetrievability(elapsed, card.stability) * 100);
}

export interface HighIncidenceRetentionProjection {
  targetRetentionPct: number;
  estimatedDays: number | null;
  reachedTarget: boolean;
  highIncidenceCount: number;
  consolidatedCount: number;
  currentRetentionPct: number;
  accuracyPct: number;
  dailyCadence: number;
  isCadenceEstimated: boolean;
  board: ExamBoard;
}

/**
 * Estimates how many calendar days are required to reach `targetRetentionPct` (default 95%)
 * across high-incidence topics for the selected exam board, combining:
 * - Current FSRS-6 stability/retrievability of high-incidence flashcards
 * - Individual accuracy rate across high-incidence topics (questions + today's SRS pass rate)
 * - Observed daily review cadence (reviews/day)
 */
export function estimateDaysToTargetRetention(
  flashcards: Flashcard[],
  selectedBoard: ExamBoard,
  userAccuracyByTopic: Record<string, number>,
  reviewsTodayStats: { date: string; total: number; passed: number },
  targetRetentionPct: number = 95,
  now: Date = new Date()
): HighIncidenceRetentionProjection {
  const highIncidenceCards = flashcards.filter(
    (fc) =>
      getExamTopicWeight(selectedBoard, fc.tema, fc.subtema, fc.front).tier === 'alta'
  );

  if (highIncidenceCards.length === 0) {
    return {
      targetRetentionPct,
      estimatedDays: null,
      reachedTarget: false,
      highIncidenceCount: 0,
      consolidatedCount: 0,
      currentRetentionPct: 0,
      accuracyPct: 0,
      dailyCadence: reviewsTodayStats.total > 0 ? reviewsTodayStats.total : 6,
      isCadenceEstimated: reviewsTodayStats.total === 0,
      board: selectedBoard,
    };
  }

  // 1. Resolve individual accuracy rate across high-incidence topics
  const topicAccuracies: number[] = [];
  for (const fc of highIncidenceCards) {
    const rawAcc = lookupTopicMetric(userAccuracyByTopic, fc);
    if (rawAcc !== null) {
      const normalized = rawAcc <= 1 && rawAcc >= 0 ? rawAcc * 100 : rawAcc;
      topicAccuracies.push(normalized);
    }
  }

  const avgQuestionAcc =
    topicAccuracies.length > 0
      ? topicAccuracies.reduce((sum, v) => sum + v, 0) / topicAccuracies.length
      : null;

  const todayPassPct =
    reviewsTodayStats.total > 0
      ? (reviewsTodayStats.passed / reviewsTodayStats.total) * 100
      : null;

  let accuracyPct: number;
  if (avgQuestionAcc !== null && todayPassPct !== null) {
    accuracyPct = avgQuestionAcc * 0.65 + todayPassPct * 0.35;
  } else if (avgQuestionAcc !== null) {
    accuracyPct = avgQuestionAcc;
  } else if (todayPassPct !== null) {
    accuracyPct = todayPassPct;
  } else {
    accuracyPct = 72;
  }
  accuracyPct = Number(Math.min(100, Math.max(30, accuracyPct)).toFixed(1));

  // 2. Infer daily review cadence (cards/day) from today's session & recent 7d activity
  const sevenDaysAgoMs = now.getTime() - 7 * DAY_MS;
  const recentReviewedCount = flashcards.filter(
    (fc) => fc.lastReviewedAt && new Date(fc.lastReviewedAt).getTime() >= sevenDaysAgoMs
  ).length;

  let dailyCadence: number;
  let isCadenceEstimated: boolean;
  if (reviewsTodayStats.total > 0) {
    const recentBaseline = Math.max(4, recentReviewedCount / 2);
    dailyCadence = Math.max(
      reviewsTodayStats.total,
      Number((reviewsTodayStats.total * 0.7 + recentBaseline * 0.3).toFixed(1))
    );
    isCadenceEstimated = false;
  } else if (recentReviewedCount > 0) {
    dailyCadence = Math.max(4, Number((recentReviewedCount / 2).toFixed(1)));
    isCadenceEstimated = true;
  } else {
    dailyCadence = 6;
    isCadenceEstimated = true;
  }

  // 3. Evaluate current retention & remaining FSRS-6 consolidation passes per high-incidence card
  let retentionSum = 0;
  let consolidatedCount = 0;
  let basePassesNeeded = 0;

  for (const fc of highIncidenceCards) {
    const elapsed = computeElapsedDays(fc, now);
    const hasFsrsHistory = fc.state !== 'New' && fc.stability > 0;
    const rawTopicAcc = lookupTopicMetric(userAccuracyByTopic, fc);
    const normalizedTopicAcc =
      rawTopicAcc !== null
        ? rawTopicAcc <= 1 && rawTopicAcc >= 0
          ? rawTopicAcc * 100
          : rawTopicAcc
        : accuracyPct;

    const cardRetPct = hasFsrsHistory
      ? Math.min(99, computeRetrievability(elapsed, fc.stability) * 100)
      : Math.min(84, Math.max(45, normalizedTopicAcc * 0.88));

    retentionSum += cardRetPct;

    // A card is consolidated at the 95% target when in Review with strong stability (>= 12d)
    const isConsolidated =
      fc.state === 'Review' && fc.stability >= 12 && cardRetPct >= targetRetentionPct - 2;

    if (isConsolidated) {
      consolidatedCount += 1;
    } else if (fc.state === 'Review' && fc.stability >= 6) {
      basePassesNeeded += 1.2;
    } else if (fc.state === 'Review') {
      basePassesNeeded += 2.0;
    } else if (fc.state === 'Learning' || fc.state === 'Relearning') {
      basePassesNeeded += 2.5;
    } else {
      // New card requires full initial FSRS consolidation sequence
      basePassesNeeded += 3.0;
    }
  }

  const currentRetentionPct = Number(
    (retentionSum / highIncidenceCards.length).toFixed(1)
  );
  const retentionGap = Math.max(0, targetRetentionPct - currentRetentionPct);

  if (consolidatedCount === highIncidenceCards.length && retentionGap <= 0.5) {
    return {
      targetRetentionPct,
      estimatedDays: 0,
      reachedTarget: true,
      highIncidenceCount: highIncidenceCards.length,
      consolidatedCount,
      currentRetentionPct: Math.min(99, currentRetentionPct),
      accuracyPct,
      dailyCadence,
      isCadenceEstimated,
      board: selectedBoard,
    };
  }

  // Lower accuracy implies higher lapse rate -> more spaced review passes needed
  const accRatio = Math.min(0.98, Math.max(0.4, accuracyPct / 100));
  const lapseFrictionMultiplier = 1 + Math.max(0, 0.95 - accRatio) * 1.65;
  const totalPassesNeeded = basePassesNeeded * lapseFrictionMultiplier;

  // Portion of daily review budget dedicated to high-incidence cards
  const highIncidenceShare = highIncidenceCards.length / Math.max(1, flashcards.length);
  const effectiveHighIncidenceCadence = Math.max(
    1,
    dailyCadence * Math.min(1, highIncidenceShare + 0.25)
  );

  const cadenceDays = totalPassesNeeded / effectiveHighIncidenceCadence;
  // Minimum FSRS spacing calendar floor required for long-term stability consolidation
  const spacingFloorDays = retentionGap > 0 ? Math.ceil(retentionGap * 0.35) : 1;

  const estimatedDays = Math.min(
    180,
    Math.max(1, Math.round(cadenceDays + spacingFloorDays))
  );

  return {
    targetRetentionPct,
    estimatedDays,
    reachedTarget: false,
    highIncidenceCount: highIncidenceCards.length,
    consolidatedCount,
    currentRetentionPct,
    accuracyPct,
    dailyCadence,
    isCadenceEstimated,
    board: selectedBoard,
  };
}

/**
 * Safely migrates any legacy SM-2 or FSRS-4.5 flashcards stored in localStorage into ts-fsrs FSRS-6 state.
 */
export function migrateCardToFsrs(raw: Record<string, unknown>): Flashcard {
  const hasFsrs =
    typeof raw.stability === 'number' &&
    typeof raw.difficulty === 'number' &&
    typeof raw.state === 'string';

  if (hasFsrs) {
    const existing = raw as unknown as Flashcard;
    return {
      ...existing,
      learning_steps:
        typeof existing.learning_steps === 'number' ? existing.learning_steps : 0,
    };
  }

  const legacyReps = typeof raw.repetitions === 'number' ? raw.repetitions : 0;
  const legacyInterval = typeof raw.intervalDays === 'number' ? raw.intervalDays : 0;
  const legacyLapses = typeof raw.lapses === 'number' ? raw.lapses : 0;

  let state: FsrsState = 'New';
  if (legacyReps > 0) state = 'Review';
  else if (legacyLapses > 0) state = 'Learning';

  return {
    ...(raw as unknown as Omit<
      Flashcard,
      | 'stability'
      | 'difficulty'
      | 'elapsed_days'
      | 'scheduled_days'
      | 'learning_steps'
      | 'reps'
      | 'lapses'
      | 'state'
    >),
    stability: legacyInterval > 0 ? legacyInterval : 0,
    difficulty: legacyReps > 0 ? 5.16 : 0,
    elapsed_days: 0,
    scheduled_days: legacyInterval,
    learning_steps: 0,
    reps: legacyReps,
    lapses: legacyLapses,
    state,
  };
}

/**
 * Distills a full medical residency question into a crisp FSRS-6 Flashcard (state: 'New').
 */
export function buildFlashcardFromQuestion(
  question: MedicalQuestion,
  source: 'perola' | 'caderno_erros'
): Flashcard {
  const officialAlt = question.alternativas.find(
    (a) => a.letter === question.gabaritoOficial
  );

  const sentences = question.enunciado
    .split(/(?<=[.?!])\s+/)
    .filter(Boolean);
  const lastSentence = sentences[sentences.length - 1] ?? '';
  let frontPrompt: string;
  if (question.enunciado.length <= 260) {
    frontPrompt = question.enunciado;
  } else {
    const lead = sentences.slice(0, 2).join(' ');
    frontPrompt =
      lastSentence && !lead.includes(lastSentence)
        ? `${lead} ${lastSentence}`
        : `${question.enunciado.slice(0, 240).trim()}…`;
  }

  const nowIso = new Date().toISOString();

  return {
    id: `fc-${question.id}`,
    questionId: question.id,
    questionCode: question.code,
    institutionLabel: `${question.instituicao} ${question.ano}`,
    grandeAreaId: question.grandeAreaId,
    grandeArea: question.grandeArea,
    tema: question.tema,
    subtema: question.subtema,
    front: frontPrompt,
    backPearl: officialAlt?.explanation || question.comentarioGeral,
    backAnswerSummary: officialAlt
      ? `Conduta / Resposta (${officialAlt.letter}): ${officialAlt.text}`
      : undefined,
    source,
    createdAt: nowIso,
    dueAt: nowIso,
    stability: 0,
    difficulty: 0,
    elapsed_days: 0,
    scheduled_days: 0,
    learning_steps: 0,
    reps: 0,
    lapses: 0,
    state: 'New',
  };
}
