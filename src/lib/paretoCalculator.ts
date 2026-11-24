import type { ExamBoard, MedicalQuestion } from '../types/medical';
import { getAllBankQuestions } from './questionBankStore';
import type { BoardIncidenceRule, IncidenceTier } from './examWeights';

export const PARETO_MIN_QUESTIONS = 10;
export const PARETO_HIGH_CUTOFF_PCT = 80;
export const PARETO_MEDIUM_CUTOFF_PCT = 95;

export const PARETO_TIER_DELTA: Record<IncidenceTier, number> = {
  alta: 0.03,
  media: 0.0,
  baixa: -0.03,
};

export interface ParetoTopicStat {
  topic: string;
  normalizedTopic: string;
  count: number;
  individualPct: number;
  cumulativePct: number;
  tier: IncidenceTier;
  delta: number;
  isParetoCore: boolean; // Within the first 80% cumulative (Núcleo Pareto)
  isLongTail: boolean; // Above 95% cumulative
  source: 'bank_pareto' | 'matrix_fallback';
}

export interface ExamParetoAnalysis {
  boardOrInstitution: string;
  totalQuestions: number;
  minQuestionsThreshold: number;
  hasEnoughData: boolean;
  usedFallback: boolean;
  items: ParetoTopicStat[];
  /** Index of the last item belonging to the 80% Pareto Core (-1 if none). */
  paretoCutIndex: number;
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[/\-_,.;:()]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Classifies a topic according to the 80/20 Pareto rule:
 * - Núcleo Pareto (first 80% cumulative): Alta Incidência (+0.03)
 * - Intermediate band (80% to 95% cumulative): Média Incidência (0.00)
 * - Long tail (above 95% cumulative): Baixa Incidência (-0.03)
 */
export function classifyParetoTier(
  prevCumulativePct: number,
  cumulativePct: number
): IncidenceTier {
  if (prevCumulativePct < PARETO_HIGH_CUTOFF_PCT) {
    return 'alta';
  }
  if (cumulativePct <= PARETO_MEDIUM_CUTOFF_PCT) {
    return 'media';
  }
  return 'baixa';
}

/**
 * Filters questions belonging to a specific institution/board (e.g. UEPA, ENARE, USP-SP)
 * or returns all questions when boardOrInstitution is 'GERAL'.
 */
export function filterQuestionsByBoardOrInstitution(
  boardOrInstitution: string,
  questions: MedicalQuestion[] = getAllBankQuestions()
): MedicalQuestion[] {
  const normTarget = normalizeText(boardOrInstitution);
  if (!normTarget || normTarget === 'geral') {
    return questions;
  }

  return questions.filter((q) => {
    const normInst = normalizeText(q.instituicao);
    const normBanca = normalizeText(q.banca);
    return (
      normInst === normTarget ||
      normBanca === normTarget ||
      normInst.includes(normTarget) ||
      normBanca.includes(normTarget)
    );
  });
}

/**
 * Computes the dynamic Pareto (80/20) frequency breakdown for an institution or board
 * directly from registered questions in the question bank.
 *
 * When fewer than `minQuestionsThreshold` (default 10) questions exist for that exam,
 * `usedFallback` is set to `true` so callers can safely retain the default board matrix
 * while still inspecting the raw bank counts.
 */
export function calculateParetoByExam(
  boardOrInstitution: ExamBoard | string,
  questions: MedicalQuestion[] = getAllBankQuestions(),
  minQuestionsThreshold: number = PARETO_MIN_QUESTIONS
): ExamParetoAnalysis {
  const matchedQuestions = filterQuestionsByBoardOrInstitution(
    boardOrInstitution,
    questions
  );
  const totalQuestions = matchedQuestions.length;
  const hasEnoughData = totalQuestions >= minQuestionsThreshold;

  // Count frequency per topic
  const counts = new Map<string, { label: string; count: number }>();
  for (const q of matchedQuestions) {
    const norm = normalizeText(q.tema);
    const existing = counts.get(norm);
    if (existing) {
      existing.count += 1;
    } else {
      counts.set(norm, { label: q.tema, count: 1 });
    }
  }

  // Sort descending by frequency, then alphabetically (pt-BR)
  const sortedEntries = Array.from(counts.entries()).sort((a, b) => {
    if (b[1].count !== a[1].count) return b[1].count - a[1].count;
    return a[1].label.localeCompare(b[1].label, 'pt-BR');
  });

  let runningCount = 0;
  let paretoCutIndex = -1;

  const items: ParetoTopicStat[] = sortedEntries.map(([norm, entry], idx) => {
    const prevCumulativePct =
      totalQuestions > 0 ? (runningCount / totalQuestions) * 100 : 0;
    runningCount += entry.count;
    const rawIndividualPct =
      totalQuestions > 0 ? (entry.count / totalQuestions) * 100 : 0;
    const rawCumulativePct =
      totalQuestions > 0
        ? idx === sortedEntries.length - 1
          ? 100
          : (runningCount / totalQuestions) * 100
        : 0;

    const individualPct = Number(rawIndividualPct.toFixed(1));
    const cumulativePct = Number(Math.min(100, rawCumulativePct).toFixed(1));
    const tier = classifyParetoTier(prevCumulativePct, cumulativePct);
    const isParetoCore = tier === 'alta';
    if (isParetoCore) {
      paretoCutIndex = idx;
    }

    return {
      topic: entry.label,
      normalizedTopic: norm,
      count: entry.count,
      individualPct,
      cumulativePct,
      tier,
      delta: PARETO_TIER_DELTA[tier],
      isParetoCore,
      isLongTail: tier === 'baixa',
      source: hasEnoughData ? 'bank_pareto' : 'matrix_fallback',
    };
  });

  return {
    boardOrInstitution,
    totalQuestions,
    minQuestionsThreshold,
    hasEnoughData,
    usedFallback: !hasEnoughData,
    items,
    paretoCutIndex,
  };
}

/**
 * Alias for `calculateParetoByExam` to compute the dynamic 80/20 Pareto
 * distribution for any target board or institution.
 */
export const calculateExamPareto = calculateParetoByExam;

/**
 * Matches a matrix topic (and its keywords) to a live Pareto item from the question bank.
 */
export function matchBankParetoItem(
  topicName: string,
  keywords: string[],
  analysis: ExamParetoAnalysis
): ParetoTopicStat | null {
  const normTopic = normalizeText(topicName);
  const normKeywords = keywords.map(normalizeText).filter(Boolean);

  // Exact match
  for (const item of analysis.items) {
    if (
      item.normalizedTopic === normTopic ||
      normKeywords.includes(item.normalizedTopic)
    ) {
      return item;
    }
  }

  // Partial / token match
  for (const item of analysis.items) {
    if (
      (normTopic.length >= 4 && item.normalizedTopic.includes(normTopic)) ||
      (item.normalizedTopic.length >= 4 && normTopic.includes(item.normalizedTopic)) ||
      normKeywords.some(
        (kw) =>
          (kw.length >= 4 && item.normalizedTopic.includes(kw)) ||
          (item.normalizedTopic.length >= 4 && kw.includes(item.normalizedTopic))
      )
    ) {
      return item;
    }
  }

  return null;
}

/**
 * Builds a complete Pareto display curve for a board's full topic list:
 * - When the bank has >= 10 questions for the board, maps real question frequencies directly
 *   (aggregating all matching bank questions into each rule) and computes live individual & cumulative %.
 * - When the bank has < 10 questions (fallback mode), uses proportional Blueprint weights
 *   (Alta = 5, Média = 2, Baixa = 0.7) so the student still visualizes an accurate Pareto 80/20 curve
 *   and 80% cutoff line alongside real bank question counts.
 */
export function buildBoardParetoProfile(
  board: ExamBoard,
  topics: Array<{
    id: string;
    topic: string;
    tier: IncidenceTier;
    keywords: string[];
  }>,
  defaultRules: BoardIncidenceRule[],
  questions: MedicalQuestion[] = getAllBankQuestions()
): {
  analysis: ExamParetoAnalysis;
  byTopicId: Record<
    string,
    {
      count: number;
      individualPct: number;
      cumulativePct: number;
      paretoTier: IncidenceTier;
      isParetoCore: boolean;
      isEstimated: boolean;
    }
  >;
  orderedTopicIds: string[];
  paretoCutTopicId: string | null;
} {
  const analysis = calculateParetoByExam(board, questions);
  const matchedQuestions = filterQuestionsByBoardOrInstitution(board, questions);

  // Helper to count real bank questions that map to each topic row (without double counting)
  const assignedCounts = new Map<string, number>();
  for (const t of topics) assignedCounts.set(t.id, 0);

  for (const q of matchedQuestions) {
    const normTema = normalizeText(q.tema);
    const normSubtema = normalizeText(q.subtema);
    const combined = `${normSubtema} ${normTema}`;

    // Match most specific topic first (exact -> keyword -> partial)
    let winnerId: string | null = null;
    for (const t of topics) {
      const nt = normalizeText(t.topic);
      if (nt === normTema || t.keywords.some((kw) => normalizeText(kw) === normTema)) {
        winnerId = t.id;
        break;
      }
    }
    if (!winnerId) {
      for (const t of topics) {
        const nt = normalizeText(t.topic);
        if (
          combined.includes(nt) ||
          t.keywords.some((kw) => {
            const nkw = normalizeText(kw);
            return nkw.length >= 4 && combined.includes(nkw);
          })
        ) {
          winnerId = t.id;
          break;
        }
      }
    }
    if (winnerId) {
      assignedCounts.set(winnerId, (assignedCounts.get(winnerId) ?? 0) + 1);
    }
  }

  const TIER_SYNTHETIC_WEIGHT: Record<IncidenceTier, number> = {
    alta: 6.5,
    media: 2.2,
    baixa: 0.75,
  };

  const defaultTierMap = new Map(
    defaultRules.map((r) => [normalizeText(r.topic), r.tier])
  );

  // Score each topic either by real bank question count (>= 10 questions) or blueprint fallback weights
  const scored = topics.map((t) => {
    const realCount = assignedCounts.get(t.id) ?? 0;
    const baseTier = defaultTierMap.get(normalizeText(t.topic)) ?? t.tier;
    const weight = analysis.hasEnoughData
      ? realCount
      : TIER_SYNTHETIC_WEIGHT[t.tier] + realCount * 0.25;
    return {
      id: t.id,
      topic: t.topic,
      tier: t.tier,
      baseTier,
      realCount,
      weight,
    };
  });

  // Sort descending by weight -> realCount -> tier priority -> alphabetical
  const tierRank: Record<IncidenceTier, number> = { alta: 0, media: 1, baixa: 2 };
  scored.sort((a, b) => {
    if (b.weight !== a.weight) return b.weight - a.weight;
    if (b.realCount !== a.realCount) return b.realCount - a.realCount;
    if (tierRank[a.tier] !== tierRank[b.tier]) return tierRank[a.tier] - tierRank[b.tier];
    return a.topic.localeCompare(b.topic, 'pt-BR');
  });

  const totalWeight = scored.reduce((sum, item) => sum + item.weight, 0);
  let runningWeight = 0;
  let paretoCutTopicId: string | null = null;

  const byTopicId: Record<
    string,
    {
      count: number;
      individualPct: number;
      cumulativePct: number;
      paretoTier: IncidenceTier;
      isParetoCore: boolean;
      isEstimated: boolean;
    }
  > = {};

  scored.forEach((item, idx) => {
    const prevCumPct = totalWeight > 0 ? (runningWeight / totalWeight) * 100 : 0;
    runningWeight += item.weight;
    const rawIndPct = totalWeight > 0 ? (item.weight / totalWeight) * 100 : 0;
    const rawCumPct =
      totalWeight > 0
        ? idx === scored.length - 1
          ? 100
          : (runningWeight / totalWeight) * 100
        : 0;

    const individualPct = Number(rawIndPct.toFixed(1));
    const cumulativePct = Number(Math.min(100, rawCumPct).toFixed(1));

    let paretoTier: IncidenceTier;
    if (analysis.hasEnoughData) {
      paretoTier =
        item.realCount === 0
          ? 'baixa'
          : classifyParetoTier(prevCumPct, cumulativePct);
    } else {
      // Fallback (< 10 questions): respect matrix default tier
      paretoTier = item.baseTier;
    }

    const isParetoCore = analysis.hasEnoughData
      ? prevCumPct < PARETO_HIGH_CUTOFF_PCT && item.realCount > 0
      : prevCumPct < PARETO_HIGH_CUTOFF_PCT && item.tier === 'alta';

    if (isParetoCore) {
      paretoCutTopicId = item.id;
    }

    byTopicId[item.id] = {
      count: item.realCount,
      individualPct,
      cumulativePct,
      paretoTier,
      isParetoCore,
      isEstimated: !analysis.hasEnoughData,
    };
  });

  return {
    analysis,
    byTopicId,
    orderedTopicIds: scored.map((s) => s.id),
    paretoCutTopicId,
  };
}
