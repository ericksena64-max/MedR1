import type {
  GrandeAreaId,
  MedicalQuestion,
  UserAnswerRecord,
} from '../types/medical';
import { OFFICIAL_EXAM_CATALOG } from '../data/examCatalog';
import { computeTaxonomyBreakdown } from './taxonomyAnalytics';

export interface WeeklyOfficialSimuladoConfig {
  examId: string;
  instituicao: string;
  ano: number;
  title: string;
  questionCount: number;
  estimatedCutoffPct: number;
  participantsCount: number;
}

export const WEEKLY_OFFICIAL_SIMULADO: WeeklyOfficialSimuladoConfig = {
  examId: 'uepa-2026',
  instituicao: 'UEPA',
  ano: 2026,
  title: 'UEPA 2026 — Prova Completa',
  questionCount: 100,
  estimatedCutoffPct: 68.5,
  participantsCount: 1284,
};

export interface ArenaBoardGroupConfig {
  id: 'uepa' | 'enare_enamed' | 'usp' | 'unifesp_sus_sp';
  label: string;
  subtitle: string;
  institutions: string[];
  catalogFallbackTotal: number;
  badge: string;
  communityAvgPct: number;
}

export const ARENA_BOARD_GROUPS: ArenaBoardGroupConfig[] = [
  {
    id: 'uepa',
    label: 'UEPA',
    subtitle: '2022–2026 • 5 edições',
    institutions: ['UEPA'],
    catalogFallbackTotal: 500,
    badge: 'Foco Principal',
    communityAvgPct: 65.4,
  },
  {
    id: 'enare_enamed',
    label: 'ENARE / ENAMED',
    subtitle: '2024–2025 • Nacional',
    institutions: ['ENARE', 'ENAMED'],
    catalogFallbackTotal: 187,
    badge: 'Alta Convergência',
    communityAvgPct: 68.1,
  },
  {
    id: 'usp',
    label: 'USP-SP / USP-RP',
    subtitle: '2023 • Alta Complexidade',
    institutions: ['USP-SP', 'USP-RP'],
    catalogFallbackTotal: 220,
    badge: 'Casos Clínicos',
    communityAvgPct: 61.9,
  },
  {
    id: 'unifesp_sus_sp',
    label: 'UNIFESP / SUS-SP',
    subtitle: '2023 • São Paulo',
    institutions: ['UNIFESP', 'SUS-SP'],
    catalogFallbackTotal: 200,
    badge: 'Direto ao Ponto',
    communityAvgPct: 64.5,
  },
];

export interface ArenaBoardMetric {
  id: string;
  label: string;
  subtitle: string;
  institutions: string[];
  badge: string;
  isPrimary: boolean;
  editionCount: number;
  years: number[];
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  userAccuracyPct: number | null;
  communityAvgPct: number;
  deltaVsCommunity: number | null;
}

export interface ArenaBankSummary {
  totalQuestions: number;
  totalInstitutions: number;
  totalEditions: number;
  totalBoards: number;
  primaryBoardsCount: number;
  dynamicBoardsCount: number;
}

export interface ArenaPrioritySubtema {
  subtema: string;
  subtemaSlug: string;
  tema: string;
  grandeAreaId: GrandeAreaId;
  grandeAreaName: string;
  bankCount: number;
  answered: number;
  correct: number;
  accuracyPct: number | null;
  isAlert: boolean;
  source: 'user_weakness' | 'uepa_incidence';
}

export interface DistributionBenchmark {
  meanPct: number;
  stdDevPct: number;
}

export interface ArenaCommunityBenchmarks {
  overall: DistributionBenchmark;
  uepa: DistributionBenchmark;
  specialties: Record<string, DistributionBenchmark>;
}

export const ARENA_SPECIALTY_DISTRIBUTIONS: Record<string, DistributionBenchmark> = {
  Psiquiatria: { meanPct: 68.0, stdDevPct: 10.5 },
  'Clínica Médica': { meanPct: 69.2, stdDevPct: 10.0 },
  'Cirurgia Geral': { meanPct: 67.5, stdDevPct: 10.5 },
  Pediatria: { meanPct: 68.4, stdDevPct: 10.2 },
  'Ginecologia e Obstetrícia': { meanPct: 67.8, stdDevPct: 10.4 },
  Dermatologia: { meanPct: 73.5, stdDevPct: 9.2 },
  Anestesiologia: { meanPct: 70.1, stdDevPct: 9.8 },
  Neurologia: { meanPct: 70.8, stdDevPct: 9.8 },
  Ortopedia: { meanPct: 65.5, stdDevPct: 11.0 },
};

export const DEFAULT_ARENA_COMMUNITY_BENCHMARKS: ArenaCommunityBenchmarks = {
  overall: { meanPct: 64.8, stdDevPct: 11.5 },
  uepa: { meanPct: 65.4, stdDevPct: 11.2 },
  specialties: ARENA_SPECIALTY_DISTRIBUTIONS,
};

export interface ArenaPercentileBar {
  id: 'geral' | 'especialidade' | 'uepa';
  label: string;
  pillText: string;
  percentile: number | null;
  topPct: number | null;
  sampleCount: number;
  sampleAccuracyPct: number | null;
  barTone: 'blue' | 'emerald' | 'amber';
}

export interface ArenaPercentileSummary {
  targetSpecialty: string;
  globalAnswered: number;
  globalCorrect: number;
  globalAccuracyPct: number | null;
  uepaAnswered: number;
  uepaCorrect: number;
  uepaAccuracyPct: number | null;
  bars: ArenaPercentileBar[];
}

/** Abramowitz & Stegun 7.1.26 erf approximation (max error < 1.5e-7). */
function erfApprox(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const absX = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * absX);
  const y =
    1 -
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) *
      t +
      0.254829592) *
      t *
      Math.exp(-absX * absX));
  return sign * y;
}

function normalCdf(z: number): number {
  return 0.5 * (1 + erfApprox(z / Math.SQRT2));
}

function estimatePercentileFromDistribution(
  accuracyPct: number,
  dist: DistributionBenchmark
): { percentile: number; topPct: number } {
  const std = Math.max(1, dist.stdDevPct);
  const z = (accuracyPct - dist.meanPct) / std;
  const percentile = Math.max(1, Math.min(99, Math.round(normalCdf(z) * 100)));
  const topPct = Math.max(1, Math.min(99, 100 - percentile));
  return { percentile, topPct };
}

export function resolveArenaTargetSpecialty(rawSpecialty?: string): string {
  const trimmed = (rawSpecialty ?? '').trim();
  if (!trimmed) return 'Psiquiatria';
  const match = Object.keys(ARENA_SPECIALTY_DISTRIBUTIONS).find(
    (k) => k.toLowerCase() === trimmed.toLowerCase()
  );
  return match ?? 'Psiquiatria';
}

export function formatBoardEditionSubtitle(
  years: number[],
  suffix?: string
): string {
  const cleanYears = Array.from(
    new Set(years.filter((y) => Number.isFinite(y) && y > 0))
  ).sort((a, b) => a - b);

  if (cleanYears.length === 0) {
    return suffix ?? 'Edições oficiais';
  }
  const yearLabel =
    cleanYears.length === 1
      ? `${cleanYears[0]} • 1 edição`
      : `${cleanYears[0]}–${cleanYears[cleanYears.length - 1]} • ${cleanYears.length} edições`;

  return suffix ? `${yearLabel} • ${suffix}` : yearLabel;
}

const PRIMARY_BOARD_SUFFIX: Record<ArenaBoardGroupConfig['id'], string | undefined> = {
  uepa: undefined,
  enare_enamed: 'Nacional',
  usp: 'Alta Complexidade',
  unifesp_sus_sp: 'São Paulo',
};

export function computeArenaBoardMetrics(
  questions: MedicalQuestion[],
  answers: Record<string, UserAnswerRecord>
): ArenaBoardMetric[] {
  const primaryMetrics: ArenaBoardMetric[] = ARENA_BOARD_GROUPS.map((group) => {
    const instSet = new Set(group.institutions);
    const matchingQuestions = questions.filter((q) => instSet.has(q.instituicao));
    const catalogMatches = OFFICIAL_EXAM_CATALOG.filter((e) =>
      instSet.has(e.instituicao)
    );

    const years =
      matchingQuestions.length > 0
        ? Array.from(new Set(matchingQuestions.map((q) => q.ano))).sort(
            (a, b) => a - b
          )
        : Array.from(new Set(catalogMatches.map((e) => e.ano))).sort(
            (a, b) => a - b
          );

    const totalQuestions =
      matchingQuestions.length > 0
        ? matchingQuestions.length
        : catalogMatches.length > 0
        ? catalogMatches.reduce((acc, e) => acc + e.questionCount, 0)
        : group.catalogFallbackTotal;

    const subtitle = formatBoardEditionSubtitle(
      years,
      PRIMARY_BOARD_SUFFIX[group.id]
    );

    let answeredCount = 0;
    let correctCount = 0;
    for (const q of matchingQuestions) {
      const ans = answers[q.id];
      if (!ans) continue;
      answeredCount += 1;
      if (ans.isCorrect) correctCount += 1;
    }

    const userAccuracyPct =
      answeredCount > 0 ? (correctCount / answeredCount) * 100 : null;
    const deltaVsCommunity =
      userAccuracyPct !== null ? userAccuracyPct - group.communityAvgPct : null;

    return {
      id: group.id,
      label: group.label,
      subtitle,
      institutions: group.institutions,
      badge: group.badge,
      isPrimary: true,
      editionCount: years.length,
      years,
      totalQuestions,
      answeredCount,
      correctCount,
      userAccuracyPct,
      communityAvgPct: group.communityAvgPct,
      deltaVsCommunity,
    };
  });

  // Auto-detect any additional institutions/boards outside the 4 primary groups
  const primaryInstSet = new Set(
    ARENA_BOARD_GROUPS.flatMap((g) => g.institutions)
  );

  const dynamicBuckets = new Map<
    string,
    {
      questions: MedicalQuestion[];
      catalogTotal: number;
      years: Set<number>;
      regionOrEstado: string;
    }
  >();

  for (const q of questions) {
    const inst = (q.instituicao || '').trim();
    if (!inst || primaryInstSet.has(inst)) continue;
    let bucket = dynamicBuckets.get(inst);
    if (!bucket) {
      bucket = {
        questions: [],
        catalogTotal: 0,
        years: new Set<number>(),
        regionOrEstado: q.estado && q.estado !== 'BR' ? q.estado : q.regiao || '',
      };
      dynamicBuckets.set(inst, bucket);
    }
    bucket.questions.push(q);
    if (Number.isFinite(q.ano) && q.ano > 0) bucket.years.add(q.ano);
  }

  for (const entry of OFFICIAL_EXAM_CATALOG) {
    const inst = (entry.instituicao || '').trim();
    if (!inst || primaryInstSet.has(inst)) continue;
    let bucket = dynamicBuckets.get(inst);
    if (!bucket) {
      bucket = {
        questions: [],
        catalogTotal: 0,
        years: new Set<number>(),
        regionOrEstado:
          entry.estado && entry.estado !== 'BR'
            ? entry.estado
            : entry.regiao || '',
      };
      dynamicBuckets.set(inst, bucket);
    }
    bucket.catalogTotal += entry.questionCount;
    if (Number.isFinite(entry.ano) && entry.ano > 0) bucket.years.add(entry.ano);
  }

  const dynamicMetrics: ArenaBoardMetric[] = Array.from(dynamicBuckets.entries())
    .map(([inst, bucket]) => {
      const years = Array.from(bucket.years).sort((a, b) => a - b);
      const totalQuestions =
        bucket.questions.length > 0 ? bucket.questions.length : bucket.catalogTotal;

      const rated = bucket.questions.filter(
        (q) => !q.anulada && q.taxaAcertoGlobal > 0
      );
      const communityAvgPct =
        rated.length > 0
          ? Number(
              (
                rated.reduce((acc, q) => acc + q.taxaAcertoGlobal, 0) /
                rated.length
              ).toFixed(1)
            )
          : 64.0;

      let answeredCount = 0;
      let correctCount = 0;
      for (const q of bucket.questions) {
        const ans = answers[q.id];
        if (!ans) continue;
        answeredCount += 1;
        if (ans.isCorrect) correctCount += 1;
      }

      const userAccuracyPct =
        answeredCount > 0 ? (correctCount / answeredCount) * 100 : null;
      const deltaVsCommunity =
        userAccuracyPct !== null ? userAccuracyPct - communityAvgPct : null;

      const slug = inst
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      return {
        id: `dynamic:${slug}`,
        label: inst,
        subtitle: formatBoardEditionSubtitle(
          years,
          bucket.regionOrEstado || undefined
        ),
        institutions: [inst],
        badge: 'Nova Banca',
        isPrimary: false,
        editionCount: years.length,
        years,
        totalQuestions,
        answeredCount,
        correctCount,
        userAccuracyPct,
        communityAvgPct,
        deltaVsCommunity,
      };
    })
    .sort((a, b) =>
      b.totalQuestions !== a.totalQuestions
        ? b.totalQuestions - a.totalQuestions
        : a.label.localeCompare(b.label, 'pt-BR')
    );

  return [...primaryMetrics, ...dynamicMetrics];
}

export function computeArenaBankSummary(
  questions: MedicalQuestion[],
  boardMetrics?: ArenaBoardMetric[]
): ArenaBankSummary {
  const metrics = boardMetrics ?? computeArenaBoardMetrics(questions, {});
  const primaryBoardsCount = metrics.filter((b) => b.isPrimary).length;
  const dynamicBoardsCount = metrics.filter((b) => !b.isPrimary).length;

  if (questions.length > 0) {
    const institutions = new Set(
      questions.map((q) => q.instituicao.trim()).filter(Boolean)
    );
    const editions = new Set(
      questions
        .filter((q) => q.instituicao.trim() && q.ano > 0)
        .map((q) => `${q.instituicao.trim()}::${q.ano}`)
    );
    return {
      totalQuestions: questions.length,
      totalInstitutions: institutions.size,
      totalEditions: editions.size,
      totalBoards: metrics.length,
      primaryBoardsCount,
      dynamicBoardsCount,
    };
  }

  const catalogInstitutions = new Set(
    OFFICIAL_EXAM_CATALOG.map((e) => e.instituicao)
  );
  return {
    totalQuestions: OFFICIAL_EXAM_CATALOG.reduce(
      (acc, e) => acc + e.questionCount,
      0
    ),
    totalInstitutions: catalogInstitutions.size,
    totalEditions: OFFICIAL_EXAM_CATALOG.length,
    totalBoards: metrics.length,
    primaryBoardsCount,
    dynamicBoardsCount,
  };
}

export function computeArenaPrioritySubtemas(
  questions: MedicalQuestion[],
  answers: Record<string, UserAnswerRecord>,
  limit = 3
): ArenaPrioritySubtema[] {
  const allBreakdown = computeTaxonomyBreakdown(questions, answers, {
    examScope: 'all',
  });
  const bankCountByKey = new Map<string, number>();
  for (const row of allBreakdown.subtemas) {
    bankCountByKey.set(`${row.grandeAreaId}::${row.subtema}`, row.count);
  }

  const picked: ArenaPrioritySubtema[] = [];
  const seenKeys = new Set<string>();

  for (const weak of allBreakdown.weakSubtemas) {
    if (picked.length >= limit) break;
    const key = `${weak.grandeAreaId}::${weak.subtema}`;
    seenKeys.add(key);
    const acc = weak.accuracyPct ?? 0;
    picked.push({
      subtema: weak.subtema,
      subtemaSlug: weak.subtemaSlug,
      tema: weak.tema,
      grandeAreaId: weak.grandeAreaId,
      grandeAreaName: weak.grandeAreaName,
      bankCount: weak.count,
      answered: weak.answered,
      correct: weak.correct,
      accuracyPct: acc,
      isAlert: acc < 60,
      source: 'user_weakness',
    });
  }

  if (picked.length < limit) {
    const uepaBreakdown = computeTaxonomyBreakdown(questions, answers, {
      examScope: 'group:UEPA',
    });
    const fallbackPool =
      uepaBreakdown.subtemas.length > 0
        ? uepaBreakdown.subtemas
        : allBreakdown.subtemas;

    for (const row of fallbackPool) {
      if (picked.length >= limit) break;
      const key = `${row.grandeAreaId}::${row.subtema}`;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      picked.push({
        subtema: row.subtema,
        subtemaSlug: row.subtemaSlug,
        tema: row.tema,
        grandeAreaId: row.grandeAreaId,
        grandeAreaName: row.grandeAreaName,
        bankCount: bankCountByKey.get(key) ?? row.count,
        answered: 0,
        correct: 0,
        accuracyPct: null,
        isAlert: false,
        source: 'uepa_incidence',
      });
    }
  }

  return picked;
}

export function computeArenaPercentileThermometer(
  questions: MedicalQuestion[],
  answers: Record<string, UserAnswerRecord>,
  options: {
    targetSpecialty?: string;
    communityBenchmarks?: ArenaCommunityBenchmarks;
  } = {}
): ArenaPercentileSummary {
  const benchmarks = options.communityBenchmarks ?? DEFAULT_ARENA_COMMUNITY_BENCHMARKS;
  const targetSpecialty = resolveArenaTargetSpecialty(options.targetSpecialty);
  const specialtyDist =
    benchmarks.specialties[targetSpecialty] ??
    ARENA_SPECIALTY_DISTRIBUTIONS.Psiquiatria;

  const questionById = new Map(questions.map((q) => [q.id, q]));

  let globalAnswered = 0;
  let globalCorrect = 0;
  let uepaAnswered = 0;
  let uepaCorrect = 0;

  for (const ans of Object.values(answers)) {
    globalAnswered += 1;
    if (ans.isCorrect) globalCorrect += 1;

    const q = questionById.get(ans.questionId);
    if (q?.instituicao === 'UEPA') {
      uepaAnswered += 1;
      if (ans.isCorrect) uepaCorrect += 1;
    }
  }

  const globalAccuracyPct =
    globalAnswered > 0 ? (globalCorrect / globalAnswered) * 100 : null;
  const uepaAccuracyPct =
    uepaAnswered > 0 ? (uepaCorrect / uepaAnswered) * 100 : null;

  const geralStats =
    globalAccuracyPct !== null
      ? estimatePercentileFromDistribution(globalAccuracyPct, benchmarks.overall)
      : null;
  const specialtyStats =
    globalAccuracyPct !== null
      ? estimatePercentileFromDistribution(globalAccuracyPct, specialtyDist)
      : null;
  const uepaStats =
    uepaAccuracyPct !== null
      ? estimatePercentileFromDistribution(uepaAccuracyPct, benchmarks.uepa)
      : null;

  const bars: ArenaPercentileBar[] = [
    {
      id: 'geral',
      label: 'Percentil Geral MedR1',
      pillText: geralStats ? `Top ${geralStats.topPct}% Geral` : 'Sem respostas',
      percentile: geralStats?.percentile ?? null,
      topPct: geralStats?.topPct ?? null,
      sampleCount: globalAnswered,
      sampleAccuracyPct: globalAccuracyPct,
      barTone: 'blue',
    },
    {
      id: 'especialidade',
      label: `Especialidade Alvo (${targetSpecialty})`,
      pillText: specialtyStats
        ? `Top ${specialtyStats.topPct}% em ${targetSpecialty}`
        : `Sem respostas em ${targetSpecialty}`,
      percentile: specialtyStats?.percentile ?? null,
      topPct: specialtyStats?.topPct ?? null,
      sampleCount: globalAnswered,
      sampleAccuracyPct: globalAccuracyPct,
      barTone: 'emerald',
    },
    {
      id: 'uepa',
      label: 'Recorte Banca UEPA (2022–2026)',
      pillText: uepaStats ? `Top ${uepaStats.topPct}% na UEPA` : 'Sem respostas na UEPA',
      percentile: uepaStats?.percentile ?? null,
      topPct: uepaStats?.topPct ?? null,
      sampleCount: uepaAnswered,
      sampleAccuracyPct: uepaAccuracyPct,
      barTone: 'amber',
    },
  ];

  return {
    targetSpecialty,
    globalAnswered,
    globalCorrect,
    globalAccuracyPct,
    uepaAnswered,
    uepaCorrect,
    uepaAccuracyPct,
    bars,
  };
}
