import type { Flashcard, GrandeAreaId, MedicalQuestion } from '../types/medical';
import {
  TARGET_EXAM_BOARDS,
  buildBankIncidenceByBoard,
  getExpandedTopicCatalog,
  resolveTopicIncidenceFromBank,
  type BankBoardIncidenceProfile,
  type TargetExamBoard,
} from './examWeights';
import { GRANDES_AREAS } from '../data/taxonomy';
import {
  computeExamCalendarSummary,
  computeUrgencyAdjustedExamWeights,
  parseIsoDateLocal,
  type ExamCalendarSummary,
  type ExamDateMap,
  type StudyPhaseMeta,
} from './examCalendar';
import {
  computeParetoFeasibility,
  type ParetoFeasibilityReport,
} from './examRoadmap';

export type StudyPaceMode = 'prova' | 'estudo';
export type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type TargetExamPreset = TargetExamBoard;
export type TopicBlockStatus = 'nao_iniciado' | 'em_progresso' | 'finalizado';

export type TopicBlockKind = 'estudo' | 'simulado' | 'revisao_leve';

export interface WeeklyScheduleConfig {
  activeDays: WeekdayIndex[];
  hoursPerDay: number; // 1 to 8
  paceMode: StudyPaceMode;
  targetExam?: TargetExamPreset;
  targetExams?: TargetExamPreset[];
  examDates?: ExamDateMap;
  simuladoWeekday?: WeekdayIndex | null;
}

export interface DailyQuestionQuota {
  flashcardMinutes: number;
  netQuestionMinutes: number;
  estimatedQuestions: number;
}

export interface WeeklyTopicInput {
  grandeAreaId: GrandeAreaId;
  label: string;
  shortArea: string;
  studentPct: number;
  answered: number;
}

export interface WeeklyTopicBlock {
  id: string;
  topic: string;
  subtema?: string;
  grandeAreaId: GrandeAreaId;
  shortArea: string;
  estimatedQuestions: number;
  estimatedMinutes: number;
  answeredToday: number;
  status: TopicBlockStatus;
  reasonTag: string;
  blockKind?: TopicBlockKind;
}

export interface WeeklyDayPlan {
  dateKey: string;
  weekday: WeekdayIndex;
  shortLabel: string;
  relativeLabel: string;
  dayNumber: number;
  dayDateCompact: string;
  monthShort: string;
  isToday: boolean;
  isActive: boolean;
  hours: number;
  flashcardsCount: number;
  flashcardMinutes: number;
  netQuestionMinutes: number;
  estimatedQuestions: number;
  topicBlocks: WeeklyTopicBlock[];
  isExamDay?: boolean;
  examDayLabels?: TargetExamPreset[];
  isExamEve?: boolean;
}

export type IncidenceSource = 'bank' | 'mixed' | 'fallback';

export interface WeeklyScheduleResult {
  weekLabel: string;
  weekRangeFullLabel: string;
  targetExam: TargetExamPreset;
  targetExams: TargetExamPreset[];
  targetExamsLabel: string;
  incidenceSource: IncidenceSource;
  bankQuestionsMatched: number;
  days: WeeklyDayPlan[];
  totalWeeklyHours: number;
  totalWeeklyQuestions: number;
  totalWeeklyFlashcards: number;
  todayPlan: WeeklyDayPlan | null;
  calendarSummary: ExamCalendarSummary;
  weekPhase: StudyPhaseMeta;
  feasibility: ParetoFeasibilityReport;
}

export const WEEKLY_SCHEDULE_STORAGE_KEY = 'medr1_weekly_schedule_v1';
export const WEEKLY_SCHEDULE_UPDATED_EVENT = 'medr1-weekly-schedule-updated';

export const TARGET_EXAM_PRESETS: ReadonlyArray<TargetExamPreset> =
  TARGET_EXAM_BOARDS;

export const PACE_MINUTES_PER_QUESTION: Record<StudyPaceMode, number> = {
  prova: 2.2, // 100q em 220 min úteis (descontando 20 min de gabarito)
  estudo: 3.0, // 20q/h com leitura de comentário (4h = 80q)
};

export const FLASHCARD_DURATION_MINUTES = 0.5; // 30s por flashcard

export const WEEKDAY_LABELS: ReadonlyArray<{ index: WeekdayIndex; short: string }> = [
  { index: 0, short: 'Dom' },
  { index: 1, short: 'Seg' },
  { index: 2, short: 'Ter' },
  { index: 3, short: 'Qua' },
  { index: 4, short: 'Qui' },
  { index: 5, short: 'Sex' },
  { index: 6, short: 'Sáb' },
];

const MONTH_SHORT_PT = [
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

const MONTH_FULL_PT = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const LAPLACE_ALPHA = 6;
const LAPLACE_PRIOR = 0.65;
const PARETO_INTERSECTION_BONUS = 0.15;

export const DEFAULT_WEEKLY_SCHEDULE_CONFIG: WeeklyScheduleConfig = {
  activeDays: [1, 2, 3, 4, 5, 6], // Seg a Sáb
  hoursPerDay: 3,
  paceMode: 'estudo',
  targetExam: 'UEPA',
  targetExams: ['UEPA'],
  examDates: {},
  simuladoWeekday: 6,
};

function toLocalDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function formatRelativeDayLabel(diffDays: number): string {
  if (diffDays === 0) return 'Hoje';
  if (diffDays === -1) return 'Ontem';
  if (diffDays === 1) return 'Amanhã';
  if (diffDays > 1) return `Em ${diffDays} dias`;
  return `Há ${Math.abs(diffDays)} dias`;
}

function normalizeTopicKey(label: string): string {
  return label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function normalizeTargetExams(
  config: Pick<WeeklyScheduleConfig, 'targetExams' | 'targetExam'>
): TargetExamPreset[] {
  const validSet = new Set<string>(TARGET_EXAM_PRESETS);

  if (Array.isArray(config.targetExams) && config.targetExams.length > 0) {
    const deduped: TargetExamPreset[] = [];
    for (const exam of config.targetExams) {
      if (validSet.has(exam) && !deduped.includes(exam)) {
        deduped.push(exam);
      }
    }
    if (deduped.length > 0) return deduped;
  }

  if (config.targetExam && validSet.has(config.targetExam)) {
    return [config.targetExam];
  }

  return ['UEPA'];
}

export function computeExamPriorityWeights(
  exams: TargetExamPreset[]
): Record<TargetExamPreset, number> {
  const normalized = exams.length > 0 ? exams : (['UEPA'] as TargetExamPreset[]);
  const rawWeights = normalized.map((_, idx) => 1 / (idx + 1));
  const total = rawWeights.reduce((acc, w) => acc + w, 0);

  const result = {} as Record<TargetExamPreset, number>;
  for (const preset of TARGET_EXAM_PRESETS) {
    result[preset] = 0;
  }
  normalized.forEach((exam, idx) => {
    result[exam] = rawWeights[idx] / total;
  });
  return result;
}

interface ScoredTopicCandidate {
  topic: WeeklyTopicInput;
  score: number;
  reasonTag: string;
}

function scoreTopicForExams(
  topic: WeeklyTopicInput,
  exams: TargetExamPreset[],
  examWeights: Record<TargetExamPreset, number>,
  bankProfiles: Map<TargetExamPreset, BankBoardIncidenceProfile>,
  phaseId: StudyPhaseMeta['id'] = 'sem_data'
): ScoredTopicCandidate {
  let weightedIncidence = 0;
  const paretoHits: TargetExamPreset[] = [];

  for (const exam of exams) {
    const profile = bankProfiles.get(exam)!;
    const resolved = resolveTopicIncidenceFromBank(
      topic.label,
      topic.grandeAreaId,
      profile
    );
    weightedIncidence += (examWeights[exam] ?? 0) * resolved.incidence;
    if (resolved.inPareto80) {
      paretoHits.push(exam);
    }
  }

  const intersectionBonus =
    paretoHits.length >= 2 ? PARETO_INTERSECTION_BONUS * (paretoHits.length - 1) : 0;
  const compositeIncidence = weightedIncidence + intersectionBonus;

  // Laplace-smoothed accuracy to avoid overfitting small sample sizes
  const safeAnswered = Math.max(0, Number.isFinite(topic.answered) ? topic.answered : 0);
  const clampedPct = Math.max(0, Math.min(100, Number.isFinite(topic.studentPct) ? topic.studentPct : 65));
  const smoothedAccuracy =
    ((clampedPct / 100) * safeAnswered + LAPLACE_ALPHA * LAPLACE_PRIOR) /
    (safeAnswered + LAPLACE_ALPHA);

  let phaseMultiplier = 1.0;
  const errorDeficit = 1 - smoothedAccuracy;
  if (phaseId === 'base') {
    // Base phase rewards uncovered Pareto topics
    phaseMultiplier = safeAnswered === 0 ? 1.15 : 1.0;
  } else if (phaseId === 'aprofundamento') {
    // Deepening phase amplifies real accuracy gaps
    phaseMultiplier = 1 + errorDeficit * 0.6;
  } else if (phaseId === 'reta_final') {
    // Final sprint focuses strictly on Pareto core & weak topics (<70%)
    const isWeak = safeAnswered >= 3 && clampedPct < 70;
    phaseMultiplier = (paretoHits.length > 0 ? 1.3 : 0.65) * (isWeak ? 1.35 : 1.0);
  }

  const score = compositeIncidence * errorDeficit * phaseMultiplier;

  let reasonTag: string;
  if (paretoHits.length >= 2) {
    reasonTag = paretoHits.slice(0, 2).join(' + ');
  } else if (safeAnswered >= 5 && clampedPct < 65) {
    const refExam = paretoHits[0] ?? exams[0];
    reasonTag = `${refExam} · Gap ${Math.round(clampedPct)}%`;
  } else if (paretoHits.length === 1) {
    reasonTag = `Pareto ${paretoHits[0]}`;
  } else {
    reasonTag = `${exams[0]} · Reforço`;
  }

  return { topic, score, reasonTag };
}

export function loadWeeklyScheduleConfig(rawJson: string | null): WeeklyScheduleConfig {
  if (!rawJson) return { ...DEFAULT_WEEKLY_SCHEDULE_CONFIG };
  try {
    const parsed = JSON.parse(rawJson) as Partial<WeeklyScheduleConfig>;
    if (!parsed || typeof parsed !== 'object') {
      return { ...DEFAULT_WEEKLY_SCHEDULE_CONFIG };
    }

    const activeDays = Array.isArray(parsed.activeDays)
      ? Array.from(
          new Set(
            parsed.activeDays.filter(
              (d): d is WeekdayIndex =>
                typeof d === 'number' && Number.isInteger(d) && d >= 0 && d <= 6
            )
          )
        ).sort((a, b) => a - b)
      : [...DEFAULT_WEEKLY_SCHEDULE_CONFIG.activeDays];

    const rawHours = Number(parsed.hoursPerDay);
    const hoursPerDay = Number.isFinite(rawHours)
      ? Math.max(1, Math.min(8, Math.round(rawHours)))
      : DEFAULT_WEEKLY_SCHEDULE_CONFIG.hoursPerDay;

    const paceMode: StudyPaceMode =
      parsed.paceMode === 'prova' || parsed.paceMode === 'estudo'
        ? parsed.paceMode
        : DEFAULT_WEEKLY_SCHEDULE_CONFIG.paceMode;

    const targetExams = normalizeTargetExams({
      targetExams: parsed.targetExams,
      targetExam: parsed.targetExam,
    });

    const validExamSet = new Set<string>(TARGET_EXAM_PRESETS);
    const examDates: ExamDateMap = {};
    if (parsed.examDates && typeof parsed.examDates === 'object') {
      for (const [k, v] of Object.entries(parsed.examDates)) {
        if (validExamSet.has(k) && typeof v === 'string' && parseIsoDateLocal(v)) {
          examDates[k as TargetExamPreset] = v.trim();
        }
      }
    }

    let simuladoWeekday: WeekdayIndex | null = DEFAULT_WEEKLY_SCHEDULE_CONFIG.simuladoWeekday ?? 6;
    if (parsed.simuladoWeekday === null) {
      simuladoWeekday = null;
    } else if (
      typeof parsed.simuladoWeekday === 'number' &&
      Number.isInteger(parsed.simuladoWeekday) &&
      parsed.simuladoWeekday >= 0 &&
      parsed.simuladoWeekday <= 6
    ) {
      simuladoWeekday = parsed.simuladoWeekday as WeekdayIndex;
    }

    return {
      activeDays,
      hoursPerDay,
      paceMode,
      targetExam: targetExams[0],
      targetExams,
      examDates,
      simuladoWeekday,
    };
  } catch {
    return { ...DEFAULT_WEEKLY_SCHEDULE_CONFIG };
  }
}

export function calculateDailyQuestionQuota(
  hours: number,
  flashcardsCount: number,
  paceMode: StudyPaceMode
): DailyQuestionQuota {
  const safeHours = Math.max(0, Number.isFinite(hours) ? hours : 0);
  const safeCards = Math.max(0, Math.round(Number.isFinite(flashcardsCount) ? flashcardsCount : 0));
  const totalMinutes = safeHours * 60;
  const flashcardMinutes = Number((safeCards * FLASHCARD_DURATION_MINUTES).toFixed(1));
  const netQuestionMinutes = Number(Math.max(0, totalMinutes - flashcardMinutes).toFixed(1));
  const minutesPerQ = PACE_MINUTES_PER_QUESTION[paceMode];
  // Small epsilon avoids floating-point truncation on exact multiples like 220 / 2.2 = 100
  const estimatedQuestions =
    netQuestionMinutes > 0 ? Math.floor(netQuestionMinutes / minutesPerQ + 1e-9) : 0;

  return {
    flashcardMinutes,
    netQuestionMinutes,
    estimatedQuestions,
  };
}

export function buildWeeklySchedule({
  config,
  flashcards,
  weekOffset,
  referenceDate = new Date(),
  topicRows = [],
  answeredTodayByTopic = {},
  questions = [],
}: {
  config: WeeklyScheduleConfig;
  flashcards: Flashcard[];
  weekOffset: number;
  referenceDate?: Date;
  topicRows?: WeeklyTopicInput[];
  answeredTodayByTopic?: Record<string, number>;
  questions?: MedicalQuestion[];
}): WeeklyScheduleResult {
  const targetExams = normalizeTargetExams(config);
  const targetExam = targetExams[0];
  const targetExamsLabel = targetExams.join(' + ');
  const today = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate()
  );
  const todayKey = toLocalDateKey(today);

  // Sunday of the target week
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay() + weekOffset * 7);

  // Exam calendar, countdown, active phase for the displayed week, and urgency-adjusted weights
  const calendarSummary = computeExamCalendarSummary(targetExams, config.examDates, today);
  const weekRefDate = weekOffset === 0 ? today : sunday;
  const weekCalendarSummary = computeExamCalendarSummary(
    targetExams,
    config.examDates,
    weekRefDate
  );
  const weekPhase = weekCalendarSummary.activePhase;
  const hasUpcomingExamDates = calendarSummary.nextExam !== null;

  const examWeights = hasUpcomingExamDates
    ? computeUrgencyAdjustedExamWeights(targetExams, config.examDates, weekRefDate)
    : computeExamPriorityWeights(targetExams);

  // Index exam dates and their eves by YYYY-MM-DD for quick day tagging
  const examLabelsByDate = new Map<string, TargetExamPreset[]>();
  const examEveDateSet = new Set<string>();
  if (config.examDates) {
    for (const exam of targetExams) {
      const iso = config.examDates[exam];
      if (!iso) continue;
      const parsed = parseIsoDateLocal(iso);
      if (!parsed) continue;
      const key = toLocalDateKey(parsed);
      const list = examLabelsByDate.get(key) ?? [];
      list.push(exam);
      examLabelsByDate.set(key, list);

      const eve = new Date(parsed);
      eve.setDate(parsed.getDate() - 1);
      examEveDateSet.add(toLocalDateKey(eve));
    }
  }

  // Build bank-driven incidence profile for each target exam (fallback only if board lacks questions)
  const bankProfiles = new Map<TargetExamPreset, BankBoardIncidenceProfile>();
  let boardsUsingBank = 0;
  let bankQuestionsMatched = 0;
  for (const exam of targetExams) {
    const profile = buildBankIncidenceByBoard(questions, exam);
    bankProfiles.set(exam, profile);
    bankQuestionsMatched += profile.totalQuestions;
    if (!profile.usedFallback) {
      boardsUsingBank += 1;
    }
  }

  const incidenceSource: IncidenceSource =
    boardsUsingBank === targetExams.length
      ? 'bank'
      : boardsUsingBank === 0
      ? 'fallback'
      : 'mixed';

  // Count flashcards by local date key; overdue cards fold into today
  const flashcardsByDate = new Map<string, number>();
  for (const fc of flashcards) {
    const dueDate = new Date(fc.dueAt);
    if (Number.isNaN(dueDate.getTime())) continue;
    const dueKey = toLocalDateKey(dueDate);
    const bucketKey = dueKey <= todayKey ? todayKey : dueKey;
    flashcardsByDate.set(bucketKey, (flashcardsByDate.get(bucketKey) ?? 0) + 1);
  }

  // Candidate pool: student topicRows -> real bank topics for selected exams -> static fallback catalog
  const shortAreaMap = new Map(GRANDES_AREAS.map((a) => [a.id, a.shortName]));
  let candidatePool: WeeklyTopicInput[];
  if (topicRows.length > 0) {
    candidatePool = topicRows;
  } else {
    const bankTopics = new Map<string, WeeklyTopicInput>();
    for (const profile of bankProfiles.values()) {
      if (profile.usedFallback) continue;
      for (const [normKey, entry] of profile.topicIncidence.entries()) {
        if (!bankTopics.has(normKey)) {
          bankTopics.set(normKey, {
            grandeAreaId: entry.grandeAreaId,
            label: entry.label,
            shortArea: shortAreaMap.get(entry.grandeAreaId) ?? entry.grandeAreaId,
            studentPct: 65,
            answered: 0,
          });
        }
      }
    }
    candidatePool =
      bankTopics.size > 0
        ? Array.from(bankTopics.values())
        : getExpandedTopicCatalog(targetExams).map((item) => ({
            grandeAreaId: item.grandeAreaId,
            label: item.label,
            shortArea: item.shortArea,
            studentPct: 65,
            answered: 0,
          }));
  }

  const rankedCandidates = candidatePool
    .map((topic) =>
      scoreTopicForExams(topic, targetExams, examWeights, bankProfiles, weekPhase.id)
    )
    .sort((a, b) => b.score - a.score);

  // Normalize answeredTodayByTopic keys for resilient matching
  const answeredNormMap = new Map<string, number>();
  for (const [topicName, count] of Object.entries(answeredTodayByTopic)) {
    answeredNormMap.set(normalizeTopicKey(topicName), count);
  }

  // Index real subtemas per tema from the loaded question bank (ranked by frequency, prioritizing selected exams)
  const subtemasByTema = new Map<string, string[]>();
  if (Array.isArray(questions) && questions.length > 0) {
    const rawSubCounts = new Map<string, Map<string, { label: string; score: number }>>();
    const targetExamNorms = targetExams.map((e) => normalizeTopicKey(e));

    for (const q of questions) {
      if (!q?.tema || !q?.subtema) continue;
      const temaKey = normalizeTopicKey(q.tema);
      const subLabel = q.subtema.trim();
      const subKey = normalizeTopicKey(subLabel);
      if (!subLabel || subKey === temaKey) continue;

      let inner = rawSubCounts.get(temaKey);
      if (!inner) {
        inner = new Map();
        rawSubCounts.set(temaKey, inner);
      }

      const normInst = normalizeTopicKey(q.instituicao ?? '');
      const normBanca = normalizeTopicKey(q.banca ?? '');
      const matchesSelectedExam = targetExamNorms.some(
        (ex) => normInst.includes(ex) || normBanca.includes(ex)
      );
      const weight = matchesSelectedExam ? 3 : 1;

      const existing = inner.get(subKey);
      if (existing) {
        existing.score += weight;
      } else {
        inner.set(subKey, { label: subLabel, score: weight });
      }
    }

    for (const [temaKey, inner] of rawSubCounts.entries()) {
      const sortedSubs = Array.from(inner.values())
        .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label, 'pt-BR'))
        .map((entry) => entry.label);
      if (sortedSubs.length > 0) {
        subtemasByTema.set(temaKey, sortedSubs);
      }
    }
  }
  const subtemaCursorByTema = new Map<string, number>();

  const activeSet = new Set<WeekdayIndex>(config.activeDays);
  const blocksPerActiveDay =
    config.hoursPerDay >= 6 ? 3 : config.hoursPerDay >= 3 ? 2 : 1;

  const days: WeeklyDayPlan[] = [];
  const usedInWeekIndices = new Set<number>();
  let prevActiveDayTopicKeys = new Set<string>();
  const activeDayCount = Math.max(1, config.activeDays.length);
  let weekCursor =
    rankedCandidates.length > 0 && weekOffset !== 0
      ? Math.abs(weekOffset * blocksPerActiveDay * activeDayCount) %
        rankedCandidates.length
      : 0;

  const weekHasExamDay = Array.from({ length: 7 }).some((_, i) => {
    const dCheck = new Date(sunday);
    dCheck.setDate(sunday.getDate() + i);
    return examLabelsByDate.has(toLocalDateKey(dCheck));
  });

  const shouldScheduleSimuladoThisWeek =
    hasUpcomingExamDates &&
    !weekHasExamDay &&
    config.simuladoWeekday !== null &&
    config.simuladoWeekday !== undefined &&
    weekPhase.simuladoCadence !== 'nenhum' &&
    (weekPhase.simuladoCadence === 'semanal' || Math.abs(weekOffset) % 2 === 0);

  for (let i = 0; i < 7; i++) {
    const d = new Date(sunday);
    d.setDate(sunday.getDate() + i);
    const weekday = i as WeekdayIndex;
    const dateKey = toLocalDateKey(d);
    const diffDays = Math.round((d.getTime() - today.getTime()) / 86_400_000);
    const isToday = diffDays === 0;
    const examDayLabels = examLabelsByDate.get(dateKey);
    const isExamDay = Boolean(examDayLabels && examDayLabels.length > 0);
    const isExamEve = !isExamDay && examEveDateSet.has(dateKey);
    const isActive = activeSet.has(weekday);
    const flashcardsCount = flashcardsByDate.get(dateKey) ?? 0;

    // Taper in exam week (loadMultiplier = 0.6), rest on exam eve & exam day
    const effectiveHours =
      !isActive || isExamDay || isExamEve
        ? 0
        : Number((config.hoursPerDay * weekPhase.loadMultiplier).toFixed(2));
    const hours = isActive ? effectiveHours : 0;

    const quota =
      isActive && effectiveHours > 0
        ? calculateDailyQuestionQuota(effectiveHours, flashcardsCount, config.paceMode)
        : { flashcardMinutes: 0, netQuestionMinutes: 0, estimatedQuestions: 0 };

    const isSimuladoDay =
      shouldScheduleSimuladoThisWeek &&
      isActive &&
      !isExamDay &&
      !isExamEve &&
      weekday === config.simuladoWeekday;

    const topicBlocks: WeeklyTopicBlock[] = [];
    if (isSimuladoDay && quota.estimatedQuestions > 0) {
      const simuladoExamLabel =
        weekCalendarSummary.nextExam?.exam ?? targetExam;
      const simuladoQ = Math.min(100, Math.max(20, quota.estimatedQuestions));
      topicBlocks.push({
        id: `${dateKey}-simulado-${simuladoExamLabel}`,
        topic:
          weekPhase.id === 'reta_final'
            ? `Prova na Íntegra · ${simuladoExamLabel}`
            : `Simulado Cronometrado · ${simuladoExamLabel}`,
        subtema: 'Treino completo de tempo, resistência e calibração de corte',
        grandeAreaId: 'clinica_medica',
        shortArea: 'Simulado',
        estimatedQuestions: simuladoQ,
        estimatedMinutes: Math.round(simuladoQ * PACE_MINUTES_PER_QUESTION.prova),
        answeredToday: 0,
        status: 'nao_iniciado',
        reasonTag: weekPhase.shortLabel,
        blockKind: 'simulado',
      });
    } else if (isActive && quota.estimatedQuestions > 0 && rankedCandidates.length > 0) {
      const countForDay = Math.min(
        blocksPerActiveDay,
        rankedCandidates.length,
        Math.max(1, quota.estimatedQuestions)
      );
      const baseQ = Math.floor(quota.estimatedQuestions / countForDay);
      const remainderQ = quota.estimatedQuestions % countForDay;
      const minsPerQ = PACE_MINUTES_PER_QUESTION[config.paceMode];
      const usedAreasToday = new Set<GrandeAreaId>();
      const usedIndicesToday = new Set<number>();
      const currentDayTopicKeys = new Set<string>();

      for (let b = 0; b < countForDay; b++) {
        // Pick highest-priority candidate enforcing:
        // (1) distinct grandeAreaId today, (2) not repeated from previous active day, (3) unused in week.
        let pickedIdx = -1;

        // Pass 1: unused in week + not in prev active day + distinct grandeAreaId today
        for (let offset = 0; offset < rankedCandidates.length; offset++) {
          const idx = (weekCursor + offset) % rankedCandidates.length;
          const cand = rankedCandidates[idx];
          const candKey = normalizeTopicKey(cand.topic.label);
          if (
            !usedInWeekIndices.has(idx) &&
            !usedIndicesToday.has(idx) &&
            !prevActiveDayTopicKeys.has(candKey) &&
            !usedAreasToday.has(cand.topic.grandeAreaId)
          ) {
            pickedIdx = idx;
            break;
          }
        }

        // Pass 2: allow reused in week, still enforce not in prev active day + distinct grandeAreaId today
        if (pickedIdx === -1) {
          for (let offset = 0; offset < rankedCandidates.length; offset++) {
            const idx = (weekCursor + offset) % rankedCandidates.length;
            const cand = rankedCandidates[idx];
            const candKey = normalizeTopicKey(cand.topic.label);
            if (
              !usedIndicesToday.has(idx) &&
              !prevActiveDayTopicKeys.has(candKey) &&
              !usedAreasToday.has(cand.topic.grandeAreaId)
            ) {
              pickedIdx = idx;
              break;
            }
          }
        }

        // Pass 3: enforce distinct grandeAreaId today (if pool lacks enough distinct areas outside prev day)
        if (pickedIdx === -1) {
          for (let offset = 0; offset < rankedCandidates.length; offset++) {
            const idx = (weekCursor + offset) % rankedCandidates.length;
            const cand = rankedCandidates[idx];
            if (!usedIndicesToday.has(idx) && !usedAreasToday.has(cand.topic.grandeAreaId)) {
              pickedIdx = idx;
              break;
            }
          }
        }

        // Pass 4: enforce not in prev active day (even if grandeAreaId repeats on small pools)
        if (pickedIdx === -1) {
          for (let offset = 0; offset < rankedCandidates.length; offset++) {
            const idx = (weekCursor + offset) % rankedCandidates.length;
            const candKey = normalizeTopicKey(rankedCandidates[idx].topic.label);
            if (!usedIndicesToday.has(idx) && !prevActiveDayTopicKeys.has(candKey)) {
              pickedIdx = idx;
              break;
            }
          }
        }

        // Pass 5: fallback if pool is smaller than needed
        if (pickedIdx === -1) {
          for (let offset = 0; offset < rankedCandidates.length; offset++) {
            const idx = (weekCursor + offset) % rankedCandidates.length;
            if (!usedIndicesToday.has(idx)) {
              pickedIdx = idx;
              break;
            }
          }
        }

        if (pickedIdx === -1) {
          pickedIdx = weekCursor % rankedCandidates.length;
        }

        usedInWeekIndices.add(pickedIdx);
        usedIndicesToday.add(pickedIdx);
        const picked = rankedCandidates[pickedIdx];
        usedAreasToday.add(picked.topic.grandeAreaId);
        currentDayTopicKeys.add(normalizeTopicKey(picked.topic.label));
        weekCursor = (pickedIdx + 1) % rankedCandidates.length;

        const blockQuestions = baseQ + (b < remainderQ ? 1 : 0);
        const blockMinutes = Math.round(blockQuestions * minsPerQ);
        const answeredToday = isToday
          ? answeredNormMap.get(normalizeTopicKey(picked.topic.label)) ?? 0
          : 0;

        let status: TopicBlockStatus = 'nao_iniciado';
        if (isToday) {
          if (answeredToday >= blockQuestions && blockQuestions > 0) {
            status = 'finalizado';
          } else if (answeredToday > 0) {
            status = 'em_progresso';
          }
        }

        const pickedTemaKey = normalizeTopicKey(picked.topic.label);
        const availableSubtemas = subtemasByTema.get(pickedTemaKey);
        let pickedSubtema: string | undefined;
        if (availableSubtemas && availableSubtemas.length > 0) {
          const cursor = subtemaCursorByTema.get(pickedTemaKey) ?? 0;
          pickedSubtema = availableSubtemas[cursor % availableSubtemas.length];
          subtemaCursorByTema.set(pickedTemaKey, cursor + 1);
        }

        topicBlocks.push({
          id: `${dateKey}-${b}-${picked.topic.label}`,
          topic: picked.topic.label,
          subtema: pickedSubtema,
          grandeAreaId: picked.topic.grandeAreaId,
          shortArea: picked.topic.shortArea,
          estimatedQuestions: blockQuestions,
          estimatedMinutes: blockMinutes,
          answeredToday,
          status,
          reasonTag: picked.reasonTag,
          blockKind: weekPhase.id === 'semana_prova' ? 'revisao_leve' : 'estudo',
        });
      }

      prevActiveDayTopicKeys = currentDayTopicKeys;
    }

    days.push({
      dateKey,
      weekday,
      shortLabel: WEEKDAY_LABELS[i].short,
      relativeLabel: formatRelativeDayLabel(diffDays),
      dayNumber: d.getDate(),
      dayDateCompact: `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`,
      monthShort: MONTH_SHORT_PT[d.getMonth()] ?? '',
      isToday,
      isActive,
      hours,
      flashcardsCount,
      flashcardMinutes: quota.flashcardMinutes,
      netQuestionMinutes: quota.netQuestionMinutes,
      estimatedQuestions: quota.estimatedQuestions,
      topicBlocks,
      isExamDay,
      examDayLabels,
      isExamEve,
    });
  }

  const first = days[0];
  const last = days[6];
  const weekLabel =
    first.monthShort === last.monthShort
      ? `${first.dayNumber}–${last.dayNumber} ${first.monthShort}`
      : `${first.dayNumber} ${first.monthShort} – ${last.dayNumber} ${last.monthShort}`;

  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  const startMonthFull = MONTH_FULL_PT[sunday.getMonth()] ?? '';
  const endMonthFull = MONTH_FULL_PT[saturday.getMonth()] ?? '';
  const weekRangeFullLabel =
    sunday.getFullYear() === saturday.getFullYear()
      ? `${sunday.getDate()} de ${startMonthFull} - ${saturday.getDate()} de ${endMonthFull} de ${saturday.getFullYear()}`
      : `${sunday.getDate()} de ${startMonthFull} de ${sunday.getFullYear()} - ${saturday.getDate()} de ${endMonthFull} de ${saturday.getFullYear()}`;

  const totalWeeklyHours = Number(
    days.reduce((acc, day) => acc + day.hours, 0).toFixed(1)
  );
  const totalWeeklyQuestions = days.reduce((acc, day) => acc + day.estimatedQuestions, 0);
  const totalWeeklyFlashcards = days.reduce(
    (acc, day) => acc + (day.isActive ? day.flashcardsCount : 0),
    0
  );
  const todayPlan = days.find((d) => d.isToday) ?? null;

  const baseDailyQuota = calculateDailyQuestionQuota(
    config.hoursPerDay,
    0,
    config.paceMode
  ).estimatedQuestions;
  const feasibility = computeParetoFeasibility({
    weeksUntilExam: calendarSummary.nextExam?.weeksRemaining ?? null,
    activeDaysPerWeek: config.activeDays.length,
    hoursPerDay: config.hoursPerDay,
    estimatedQuestionsPerActiveDay: baseDailyQuota,
  });

  return {
    weekLabel,
    weekRangeFullLabel,
    targetExam,
    targetExams,
    targetExamsLabel,
    incidenceSource,
    bankQuestionsMatched,
    days,
    totalWeeklyHours,
    totalWeeklyQuestions,
    totalWeeklyFlashcards,
    todayPlan,
    calendarSummary,
    weekPhase,
    feasibility,
  };
}
