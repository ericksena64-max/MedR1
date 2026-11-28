import type {
  GrandeAreaId,
  MedicalQuestion,
  QuestionFilters,
  StudentFilterStatus,
  UserAnswerRecord,
} from '../types/medical';
import { GRANDES_AREAS } from '../data/taxonomy';
import { TAXONOMY_ENTRIES, normalizeTaxonomyText } from './taxonomyClassifier';
import { computeDifficulty } from './utils';

export interface CascadingOption {
  value: string;
  rawLabel: string;
  label: string;
  count: number;
}

export interface TemaOption extends CascadingOption {
  grandeAreaId: GrandeAreaId;
  temaSlug?: string;
}

export interface SubtemaOption extends CascadingOption {
  grandeAreaId: GrandeAreaId;
  tema: string;
  subtemaSlug?: string;
}

export interface TagCount {
  tag: string;
  count: number;
}

export interface CascadingTaxonomyOptionsResult {
  baseCount: number;
  grandeAreaOptions: CascadingOption[];
  temaOptions: TemaOption[];
  subtemaOptions: SubtemaOption[];
  topTags: TagCount[];
}

export interface ExamScopeOption {
  value: string;
  label: string;
  count: number;
  instituicao?: string;
  ano?: string;
}

export interface TaxonomyAreaStat {
  id: GrandeAreaId;
  name: string;
  shortName: string;
  color: string;
  count: number;
  pct: number;
  answered: number;
  correct: number;
  accuracyPct: number | null;
  temaCount: number;
  subtemaCount: number;
}

export interface TaxonomyTemaStat {
  tema: string;
  temaSlug: string;
  grandeAreaId: GrandeAreaId;
  grandeAreaName: string;
  grandeAreaShortName: string;
  count: number;
  pct: number;
  answered: number;
  correct: number;
  accuracyPct: number | null;
  subtemaCount: number;
}

export interface TaxonomySubtemaStat {
  subtema: string;
  subtemaSlug: string;
  tema: string;
  temaSlug: string;
  grandeAreaId: GrandeAreaId;
  grandeAreaName: string;
  grandeAreaShortName: string;
  count: number;
  pct: number;
  answered: number;
  correct: number;
  wrongCount: number;
  accuracyPct: number | null;
  isWeakSpot: boolean;
}

export interface TaxonomyBreakdownResult {
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  overallAccuracyPct: number | null;
  areas: TaxonomyAreaStat[];
  temas: TaxonomyTemaStat[];
  subtemas: TaxonomySubtemaStat[];
  weakSubtemas: TaxonomySubtemaStat[];
}

const CANONICAL_TEMA_SLUG = new Map<string, string>();
const CANONICAL_SUBTEMA_SLUG = new Map<string, string>();
for (const entry of TAXONOMY_ENTRIES) {
  CANONICAL_TEMA_SLUG.set(
    `${entry.grandeAreaId}::${normalizeTaxonomyText(entry.tema)}`,
    entry.temaSlug
  );
  CANONICAL_SUBTEMA_SLUG.set(
    `${entry.grandeAreaId}::${normalizeTaxonomyText(entry.tema)}::${normalizeTaxonomyText(entry.subtema)}`,
    entry.subtemaSlug
  );
}

const GRANDE_AREA_META = new Map(GRANDES_AREAS.map((a) => [a.id, a]));

function stripDiacriticsLower(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

export function matchesStatusFilter(
  status: StudentFilterStatus,
  isBookmarked: boolean,
  ans?: UserAnswerRecord
): boolean {
  if (status === 'nao_resolvidas' && ans) return false;
  if (status === 'erradas' && (!ans || ans.isCorrect)) return false;
  if (status === 'acertadas' && (!ans || !ans.isCorrect)) return false;
  if (status === 'favoritadas' && !isBookmarked) return false;
  if (status === 'caderno_erros' && !isBookmarked && !(ans && !ans.isCorrect)) {
    return false;
  }
  return true;
}

export function matchesTaxonomyLabel(a: string, b: string): boolean {
  if (!b) return true;
  if (a === b) return true;
  return normalizeTaxonomyText(a) === normalizeTaxonomyText(b);
}

export function matchesTaxonomySearch(
  question: MedicalQuestion,
  searchRaw: string
): boolean {
  const trimmed = searchRaw.trim();
  if (!trimmed) return true;

  const tokens = stripDiacriticsLower(trimmed)
    .split(/\s+/)
    .map((t) => t.replace(/^#+/, '').trim())
    .filter(Boolean);

  if (tokens.length === 0) return true;

  const tags = question.tags ?? [];
  const tagsExpanded = tags.map((t) => t.replace(/-/g, ' '));

  const rawHaystack = stripDiacriticsLower(
    [
      question.code,
      question.enunciado,
      question.comentarioGeral,
      question.perolaClinica,
      question.grandeArea,
      question.tema,
      question.subtema,
      question.temaSlug ?? '',
      question.subtemaSlug ?? '',
      question.instituicao,
      question.banca,
      ...tags,
      ...tagsExpanded,
    ].join(' ')
  );

  return tokens.every((token) => rawHaystack.includes(token));
}

export function matchesNonTaxonomyFilters(
  question: MedicalQuestion,
  filters: QuestionFilters,
  ctx?: { answers?: Record<string, UserAnswerRecord>; bookmarks?: string[] }
): boolean {
  if (filters.excluirAnuladasDesatualizadas && (question.anulada || question.desatualizada)) {
    return false;
  }
  if (filters.comImagens && !question.clinicalImage) {
    return false;
  }

  const examTokens = stripDiacriticsLower(filters.examSearch.trim())
    .split(/[\s/-]+/)
    .filter(Boolean);

  if (examTokens.length > 0) {
    const examHaystack = stripDiacriticsLower(
      [
        question.instituicao,
        question.instituicao.replace(/-/g, ' '),
        String(question.ano),
        question.banca,
        question.tipoProva,
        question.estado,
        question.code,
      ].join(' ')
    );
    if (!examTokens.every((token) => examHaystack.includes(token))) {
      return false;
    }
  }

  if (filters.banca && question.banca !== filters.banca) {
    return false;
  }
  if (filters.instituicoes && filters.instituicoes.length > 0) {
    if (!filters.instituicoes.includes(question.instituicao)) return false;
  } else if (filters.instituicao && question.instituicao !== filters.instituicao) {
    return false;
  }
  if (filters.regiao && question.regiao !== filters.regiao) {
    return false;
  }
  if (filters.ano && String(question.ano) !== filters.ano) {
    return false;
  }
  if (filters.dificuldade) {
    if (
      computeDifficulty(question.taxaAcertoGlobal, question.anulada) !==
      filters.dificuldade
    ) {
      return false;
    }
  }

  if (ctx?.answers) {
    const ans = ctx.answers[question.id];
    const isBookmarked = ctx.bookmarks ? ctx.bookmarks.includes(question.id) : false;
    if (!matchesStatusFilter(filters.status, isBookmarked, ans)) {
      return false;
    }
  }

  if (filters.search.trim() && !matchesTaxonomySearch(question, filters.search)) {
    return false;
  }

  return true;
}

export function buildCascadingTaxonomyOptions(
  questions: MedicalQuestion[],
  filters: QuestionFilters,
  ctx?: { answers?: Record<string, UserAnswerRecord>; bookmarks?: string[] }
): CascadingTaxonomyOptionsResult {
  const baseSlice = questions.filter((q) =>
    matchesNonTaxonomyFilters(q, filters, ctx)
  );

  // 1. Grande Área counts across baseSlice
  const areaCounts = new Map<GrandeAreaId, number>();
  for (const area of GRANDES_AREAS) {
    areaCounts.set(area.id, 0);
  }
  for (const q of baseSlice) {
    areaCounts.set(q.grandeAreaId, (areaCounts.get(q.grandeAreaId) ?? 0) + 1);
  }

  const grandeAreaOptions: CascadingOption[] = GRANDES_AREAS.map((area) => {
    const count = areaCounts.get(area.id) ?? 0;
    return {
      value: area.id,
      rawLabel: area.name,
      count,
      label: `${area.name} (${count})`,
    };
  });

  // 2. Temas dynamically filtered by selected Grande Área
  const areaFiltered = filters.grandeAreaId
    ? baseSlice.filter((q) => q.grandeAreaId === filters.grandeAreaId)
    : baseSlice;

  const temaAgg = new Map<
    string,
    { tema: string; grandeAreaId: GrandeAreaId; temaSlug?: string; count: number }
  >();
  for (const q of areaFiltered) {
    const existing = temaAgg.get(q.tema);
    if (existing) {
      existing.count += 1;
      if (!existing.temaSlug && q.temaSlug) existing.temaSlug = q.temaSlug;
    } else {
      const canonicalSlug =
        q.temaSlug ??
        CANONICAL_TEMA_SLUG.get(
          `${q.grandeAreaId}::${normalizeTaxonomyText(q.tema)}`
        );
      temaAgg.set(q.tema, {
        tema: q.tema,
        grandeAreaId: q.grandeAreaId,
        temaSlug: canonicalSlug,
        count: 1,
      });
    }
  }

  const temaOptions: TemaOption[] = Array.from(temaAgg.values())
    .filter((item) => item.count > 0)
    .sort((a, b) => a.tema.localeCompare(b.tema, 'pt-BR'))
    .map((item) => ({
      value: item.tema,
      rawLabel: item.tema,
      count: item.count,
      label: `${item.tema} (${item.count})`,
      grandeAreaId: item.grandeAreaId,
      temaSlug: item.temaSlug,
    }));

  // 3. Subtemas dynamically filtered by Grande Área + Tema
  const temaFiltered = filters.tema
    ? areaFiltered.filter((q) => matchesTaxonomyLabel(q.tema, filters.tema))
    : areaFiltered;

  const subtemaAgg = new Map<
    string,
    {
      subtema: string;
      tema: string;
      grandeAreaId: GrandeAreaId;
      subtemaSlug?: string;
      count: number;
    }
  >();

  for (const q of temaFiltered) {
    const existing = subtemaAgg.get(q.subtema);
    if (existing) {
      existing.count += 1;
      if (!existing.subtemaSlug && q.subtemaSlug) existing.subtemaSlug = q.subtemaSlug;
    } else {
      const canonicalSlug =
        q.subtemaSlug ??
        CANONICAL_SUBTEMA_SLUG.get(
          `${q.grandeAreaId}::${normalizeTaxonomyText(q.tema)}::${normalizeTaxonomyText(q.subtema)}`
        );
      subtemaAgg.set(q.subtema, {
        subtema: q.subtema,
        tema: q.tema,
        grandeAreaId: q.grandeAreaId,
        subtemaSlug: canonicalSlug,
        count: 1,
      });
    }
  }

  const subtemaOptions: SubtemaOption[] = Array.from(subtemaAgg.values())
    .filter((item) => item.count > 0)
    .sort((a, b) => a.subtema.localeCompare(b.subtema, 'pt-BR'))
    .map((item) => ({
      value: item.subtema,
      rawLabel: item.subtema,
      count: item.count,
      label: `${item.subtema} (${item.count})`,
      tema: item.tema,
      grandeAreaId: item.grandeAreaId,
      subtemaSlug: item.subtemaSlug,
    }));

  // 4. Top tags within current taxonomy + non-taxonomy slice
  const subtemaFiltered = filters.subtema
    ? temaFiltered.filter((q) => matchesTaxonomyLabel(q.subtema, filters.subtema))
    : temaFiltered;

  const tagCounts = new Map<string, number>();
  for (const q of subtemaFiltered) {
    if (!q.tags) continue;
    for (const tag of q.tags) {
      const clean = tag.trim().toLowerCase();
      if (!clean) continue;
      tagCounts.set(clean, (tagCounts.get(clean) ?? 0) + 1);
    }
  }

  const topTags: TagCount[] = Array.from(tagCounts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => (b.count !== a.count ? b.count - a.count : a.tag.localeCompare(b.tag)))
    .slice(0, 10);

  return {
    baseCount: baseSlice.length,
    grandeAreaOptions,
    temaOptions,
    subtemaOptions,
    topTags,
  };
}

export function buildExamScopeOptions(
  questions: MedicalQuestion[],
  excludeAnnulled = false
): ExamScopeOption[] {
  const pool = excludeAnnulled
    ? questions.filter((q) => !q.anulada && !q.desatualizada)
    : questions;

  const options: ExamScopeOption[] = [
    {
      value: 'all',
      label: `Todas as Provas (${pool.length})`,
      count: pool.length,
    },
  ];

  // UEPA group (2022-2026, etc.)
  const uepaQuestions = pool.filter((q) => q.instituicao === 'UEPA');
  if (uepaQuestions.length > 0) {
    const years = Array.from(new Set(uepaQuestions.map((q) => q.ano))).sort(
      (a, b) => a - b
    );
    if (years.length >= 2) {
      options.push({
        value: 'group:UEPA',
        label: `UEPA ${years[0]}–${years[years.length - 1]} (${uepaQuestions.length})`,
        count: uepaQuestions.length,
        instituicao: 'UEPA',
      });
    }
  }

  // ENARE / ENAMED group
  const enareEnamed = pool.filter(
    (q) => q.instituicao === 'ENARE' || q.instituicao === 'ENAMED'
  );
  if (enareEnamed.length > 0) {
    options.push({
      value: 'group:ENARE_ENAMED',
      label: `ENARE / ENAMED (${enareEnamed.length})`,
      count: enareEnamed.length,
    });
  }

  // Individual exams sorted by ano desc, instituicao asc
  const examBuckets = new Map<
    string,
    { instituicao: string; ano: number; count: number }
  >();
  for (const q of pool) {
    const key = `${q.instituicao}::${q.ano}`;
    const existing = examBuckets.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      examBuckets.set(key, { instituicao: q.instituicao, ano: q.ano, count: 1 });
    }
  }

  const individual = Array.from(examBuckets.entries())
    .sort(([, a], [, b]) => {
      if (b.ano !== a.ano) return b.ano - a.ano;
      return a.instituicao.localeCompare(b.instituicao, 'pt-BR');
    })
    .map(([key, info]) => ({
      value: `exam:${key}`,
      label: `${info.instituicao} ${info.ano} (${info.count})`,
      count: info.count,
      instituicao: info.instituicao,
      ano: String(info.ano),
    }));

  return [...options, ...individual];
}

export function filterQuestionsByExamScope(
  questions: MedicalQuestion[],
  scope: string,
  excludeAnnulled = false
): MedicalQuestion[] {
  const pool = excludeAnnulled
    ? questions.filter((q) => !q.anulada && !q.desatualizada)
    : questions;

  if (!scope || scope === 'all') return pool;
  if (scope === 'group:UEPA') {
    return pool.filter((q) => q.instituicao === 'UEPA');
  }
  if (scope === 'group:ENARE_ENAMED') {
    return pool.filter(
      (q) => q.instituicao === 'ENARE' || q.instituicao === 'ENAMED'
    );
  }
  if (scope.startsWith('exam:')) {
    const [instituicao, anoStr] = scope.slice('exam:'.length).split('::');
    return pool.filter(
      (q) => q.instituicao === instituicao && String(q.ano) === anoStr
    );
  }
  return pool;
}

export function computeTaxonomyBreakdown(
  questions: MedicalQuestion[],
  answers: Record<string, UserAnswerRecord>,
  options: {
    examScope?: string;
    grandeAreaId?: GrandeAreaId | '';
    tema?: string;
    excludeAnnulled?: boolean;
  } = {}
): TaxonomyBreakdownResult {
  const {
    examScope = 'all',
    grandeAreaId = '',
    tema = '',
    excludeAnnulled = false,
  } = options;

  const scopedQuestions = filterQuestionsByExamScope(
    questions,
    examScope,
    excludeAnnulled
  );

  const totalQuestions = scopedQuestions.length;
  let totalAnswered = 0;
  let totalCorrect = 0;

  // Area level aggregation (always across entire examScope so user sees full 5-area split)
  const areaAgg = new Map<
    GrandeAreaId,
    {
      count: number;
      answered: number;
      correct: number;
      temas: Set<string>;
      subtemas: Set<string>;
    }
  >();
  for (const area of GRANDES_AREAS) {
    areaAgg.set(area.id, {
      count: 0,
      answered: 0,
      correct: 0,
      temas: new Set<string>(),
      subtemas: new Set<string>(),
    });
  }

  for (const q of scopedQuestions) {
    const ans = answers[q.id];
    if (ans) {
      totalAnswered += 1;
      if (ans.isCorrect) totalCorrect += 1;
    }

    const bucket = areaAgg.get(q.grandeAreaId);
    if (bucket) {
      bucket.count += 1;
      bucket.temas.add(q.tema);
      bucket.subtemas.add(q.subtema);
      if (ans) {
        bucket.answered += 1;
        if (ans.isCorrect) bucket.correct += 1;
      }
    }
  }

  const areas: TaxonomyAreaStat[] = GRANDES_AREAS.map((area) => {
    const bucket = areaAgg.get(area.id)!;
    return {
      id: area.id,
      name: area.name,
      shortName: area.shortName,
      color: area.color,
      count: bucket.count,
      pct: totalQuestions > 0 ? (bucket.count / totalQuestions) * 100 : 0,
      answered: bucket.answered,
      correct: bucket.correct,
      accuracyPct:
        bucket.answered > 0 ? (bucket.correct / bucket.answered) * 100 : null,
      temaCount: bucket.temas.size,
      subtemaCount: bucket.subtemas.size,
    };
  });

  // Tema level aggregation (filtered by grandeAreaId if selected)
  const areaScoped = grandeAreaId
    ? scopedQuestions.filter((q) => q.grandeAreaId === grandeAreaId)
    : scopedQuestions;
  const areaTotalForTemas = areaScoped.length;

  const temaAgg = new Map<
    string,
    {
      tema: string;
      temaSlug: string;
      grandeAreaId: GrandeAreaId;
      count: number;
      answered: number;
      correct: number;
      subtemas: Set<string>;
    }
  >();

  for (const q of areaScoped) {
    const key = `${q.grandeAreaId}::${q.tema}`;
    let bucket = temaAgg.get(key);
    if (!bucket) {
      bucket = {
        tema: q.tema,
        temaSlug:
          q.temaSlug ??
          CANONICAL_TEMA_SLUG.get(
            `${q.grandeAreaId}::${normalizeTaxonomyText(q.tema)}`
          ) ??
          '',
        grandeAreaId: q.grandeAreaId,
        count: 0,
        answered: 0,
        correct: 0,
        subtemas: new Set<string>(),
      };
      temaAgg.set(key, bucket);
    }
    bucket.count += 1;
    bucket.subtemas.add(q.subtema);
    const ans = answers[q.id];
    if (ans) {
      bucket.answered += 1;
      if (ans.isCorrect) bucket.correct += 1;
    }
  }

  const temas: TaxonomyTemaStat[] = Array.from(temaAgg.values())
    .map((b) => {
      const areaMeta = GRANDE_AREA_META.get(b.grandeAreaId);
      return {
        tema: b.tema,
        temaSlug: b.temaSlug,
        grandeAreaId: b.grandeAreaId,
        grandeAreaName: areaMeta?.name ?? b.grandeAreaId,
        grandeAreaShortName: areaMeta?.shortName ?? b.grandeAreaId,
        count: b.count,
        pct: areaTotalForTemas > 0 ? (b.count / areaTotalForTemas) * 100 : 0,
        answered: b.answered,
        correct: b.correct,
        accuracyPct: b.answered > 0 ? (b.correct / b.answered) * 100 : null,
        subtemaCount: b.subtemas.size,
      };
    })
    .sort((a, b) =>
      b.count !== a.count ? b.count - a.count : a.tema.localeCompare(b.tema, 'pt-BR')
    );

  // Subtema level aggregation (filtered by grandeAreaId + tema if selected)
  const temaScoped = tema
    ? areaScoped.filter((q) => matchesTaxonomyLabel(q.tema, tema))
    : areaScoped;
  const subtemaTotal = temaScoped.length;

  const subtemaAgg = new Map<
    string,
    {
      subtema: string;
      subtemaSlug: string;
      tema: string;
      temaSlug: string;
      grandeAreaId: GrandeAreaId;
      count: number;
      answered: number;
      correct: number;
    }
  >();

  for (const q of temaScoped) {
    const key = `${q.grandeAreaId}::${q.tema}::${q.subtema}`;
    let bucket = subtemaAgg.get(key);
    if (!bucket) {
      bucket = {
        subtema: q.subtema,
        subtemaSlug:
          q.subtemaSlug ??
          CANONICAL_SUBTEMA_SLUG.get(
            `${q.grandeAreaId}::${normalizeTaxonomyText(q.tema)}::${normalizeTaxonomyText(q.subtema)}`
          ) ??
          '',
        tema: q.tema,
        temaSlug:
          q.temaSlug ??
          CANONICAL_TEMA_SLUG.get(
            `${q.grandeAreaId}::${normalizeTaxonomyText(q.tema)}`
          ) ??
          '',
        grandeAreaId: q.grandeAreaId,
        count: 0,
        answered: 0,
        correct: 0,
      };
      subtemaAgg.set(key, bucket);
    }
    bucket.count += 1;
    const ans = answers[q.id];
    if (ans) {
      bucket.answered += 1;
      if (ans.isCorrect) bucket.correct += 1;
    }
  }

  const subtemas: TaxonomySubtemaStat[] = Array.from(subtemaAgg.values())
    .map((b) => {
      const areaMeta = GRANDE_AREA_META.get(b.grandeAreaId);
      const accuracyPct =
        b.answered > 0 ? (b.correct / b.answered) * 100 : null;
      const wrongCount = b.answered - b.correct;
      return {
        subtema: b.subtema,
        subtemaSlug: b.subtemaSlug,
        tema: b.tema,
        temaSlug: b.temaSlug,
        grandeAreaId: b.grandeAreaId,
        grandeAreaName: areaMeta?.name ?? b.grandeAreaId,
        grandeAreaShortName: areaMeta?.shortName ?? b.grandeAreaId,
        count: b.count,
        pct: subtemaTotal > 0 ? (b.count / subtemaTotal) * 100 : 0,
        answered: b.answered,
        correct: b.correct,
        wrongCount,
        accuracyPct,
        isWeakSpot: b.answered > 0 && accuracyPct !== null && accuracyPct < 60,
      };
    })
    .sort((a, b) =>
      b.count !== a.count
        ? b.count - a.count
        : a.subtema.localeCompare(b.subtema, 'pt-BR')
    );

  const weakSubtemas = subtemas
    .filter((s) => s.answered > 0)
    .sort((a, b) => {
      const accA = a.accuracyPct ?? 100;
      const accB = b.accuracyPct ?? 100;
      if (accA !== accB) return accA - accB;
      if (b.wrongCount !== a.wrongCount) return b.wrongCount - a.wrongCount;
      return b.count - a.count;
    });

  return {
    totalQuestions,
    totalAnswered,
    totalCorrect,
    overallAccuracyPct:
      totalAnswered > 0 ? (totalCorrect / totalAnswered) * 100 : null,
    areas,
    temas,
    subtemas,
    weakSubtemas,
  };
}
