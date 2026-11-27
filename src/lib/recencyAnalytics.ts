import type {
  GrandeAreaId,
  MedicalQuestion,
  StudyMode,
  UserAnswerRecord,
} from '../types/medical';
import type { CalibrationPair } from './psychometricApproval';
import { DEFAULT_CALIBRATION_PAIRS } from './psychometricApproval';

export const DEFAULT_ANALYTICS_WINDOW_DAYS = 90;
export const DEFAULT_RECENCY_HALF_LIFE_DAYS = 45;

export const STUDY_MODE_WEIGHTS: Record<StudyMode, number> = {
  simulado: 1.5,
  estudo: 1.0,
};

export interface WeightedAreaStats {
  grandeAreaId: GrandeAreaId;
  rawAnswered: number;
  rawCorrect: number;
  simuladoAnswered: number;
  estudoAnswered: number;
  /** Effective weighted trials (capped to rawAnswered to avoid inflating statistical precision / shrinking CIs artificially). */
  effectiveTotal: number;
  /** Effective weighted successes proportional to weighted accuracy. */
  effectiveCorrect: number;
  weightedAccuracyPct: number;
  windowDays: number | null;
}

export interface RecencyWeightOptions {
  windowDays?: number | null;
  halfLifeDays?: number;
  weightByMode?: boolean;
  nowMs?: number;
}

/**
 * Computes exponential recency decay weight in [0.15, 1.0] for an answer timestamp.
 * Answers older than `windowDays` (when finite) return 0 so stale history does not drag down current readiness.
 */
export function computeAnswerRecencyWeight(
  answeredAtIso: string,
  options: {
    windowDays?: number | null;
    halfLifeDays?: number;
    nowMs?: number;
  } = {}
): number {
  const nowMs = options.nowMs ?? Date.now();
  const halfLifeDays = Math.max(1, options.halfLifeDays ?? DEFAULT_RECENCY_HALF_LIFE_DAYS);
  const parsedMs = Date.parse(answeredAtIso);
  if (!Number.isFinite(parsedMs)) {
    return 1.0;
  }

  const ageDays = Math.max(0, (nowMs - parsedMs) / (1000 * 60 * 60 * 24));
  if (
    typeof options.windowDays === 'number' &&
    Number.isFinite(options.windowDays) &&
    options.windowDays > 0 &&
    ageDays > options.windowDays
  ) {
    return 0;
  }

  const decay = Math.pow(0.5, ageDays / halfLifeDays);
  return Math.max(0.15, Math.min(1.0, decay));
}

/**
 * Aggregates per-area accuracy using:
 * 1. Rolling time window (default 90 days) with exponential recency decay (half-life 45d).
 * 2. Exam-mode weighting: `simulado` answers carry 1.5x weight vs. `estudo` (1.0x),
 *    reducing selection bias from focused post-reading practice blocks.
 * 3. Effective sample size normalization: preserves true sample count `n` for CI width
 *    so weighting never artificially shrinks confidence intervals.
 */
export function aggregateWeightedAreaPerformance(
  answers: Iterable<UserAnswerRecord>,
  questionMap: ReadonlyMap<string, MedicalQuestion>,
  options: RecencyWeightOptions = {}
): Map<GrandeAreaId, WeightedAreaStats> {
  const windowDays =
    options.windowDays === undefined ? DEFAULT_ANALYTICS_WINDOW_DAYS : options.windowDays;
  const halfLifeDays = options.halfLifeDays ?? DEFAULT_RECENCY_HALF_LIFE_DAYS;
  const weightByMode = options.weightByMode ?? true;
  const nowMs = options.nowMs ?? Date.now();

  const buckets = new Map<
    GrandeAreaId,
    {
      rawAnswered: number;
      rawCorrect: number;
      simuladoAnswered: number;
      estudoAnswered: number;
      weightSum: number;
      correctWeightSum: number;
    }
  >();

  for (const ans of answers) {
    const q = questionMap.get(ans.questionId);
    if (!q) continue;

    const recencyW = computeAnswerRecencyWeight(ans.answeredAt, {
      windowDays,
      halfLifeDays,
      nowMs,
    });
    if (recencyW <= 0) continue;

    const modeW = weightByMode ? (STUDY_MODE_WEIGHTS[ans.mode] ?? 1.0) : 1.0;
    const w = recencyW * modeW;

    let bucket = buckets.get(q.grandeAreaId);
    if (!bucket) {
      bucket = {
        rawAnswered: 0,
        rawCorrect: 0,
        simuladoAnswered: 0,
        estudoAnswered: 0,
        weightSum: 0,
        correctWeightSum: 0,
      };
      buckets.set(q.grandeAreaId, bucket);
    }

    bucket.rawAnswered += 1;
    if (ans.isCorrect) bucket.rawCorrect += 1;
    if (ans.mode === 'simulado') {
      bucket.simuladoAnswered += 1;
    } else {
      bucket.estudoAnswered += 1;
    }
    bucket.weightSum += w;
    if (ans.isCorrect) {
      bucket.correctWeightSum += w;
    }
  }

  const result = new Map<GrandeAreaId, WeightedAreaStats>();
  for (const [areaId, b] of buckets.entries()) {
    const weightedProp = b.weightSum > 0 ? b.correctWeightSum / b.weightSum : 0;
    const weightedAccuracyPct = Number((weightedProp * 100).toFixed(1));
    const effectiveTotal = b.rawAnswered;
    const effectiveCorrect = Math.round(weightedProp * effectiveTotal);

    result.set(areaId, {
      grandeAreaId: areaId,
      rawAnswered: b.rawAnswered,
      rawCorrect: b.rawCorrect,
      simuladoAnswered: b.simuladoAnswered,
      estudoAnswered: b.estudoAnswered,
      effectiveTotal,
      effectiveCorrect,
      weightedAccuracyPct,
      windowDays,
    });
  }

  return result;
}

/**
 * Returns true when the OLS calibration pairs still match the built-in synthetic
 * example dataset (`Ex-aluno A..F`), so the UI can clearly badge it as illustrative.
 */
export function isSyntheticCalibrationDataset(pairs: CalibrationPair[]): boolean {
  if (pairs.length !== DEFAULT_CALIBRATION_PAIRS.length) return false;
  return pairs.every((pair, idx) => {
    const seed = DEFAULT_CALIBRATION_PAIRS[idx];
    return (
      pair.id === seed.id &&
      pair.simuladoScore === seed.simuladoScore &&
      pair.officialScore === seed.officialScore
    );
  });
}
