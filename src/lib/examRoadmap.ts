import type { TargetExamBoard } from './examWeights';
import {
  computeExamCalendarSummary,
  normalizeLocalMidnight,
  parseIsoDateLocal,
  type ExamDateMap,
  type StudyPhaseMeta,
} from './examCalendar';

export type FeasibilityStatus = 'confortavel' | 'apertado' | 'critico' | 'sem_data';

export interface ParetoFeasibilityInput {
  weeksUntilExam: number | null;
  activeDaysPerWeek: number;
  hoursPerDay: number;
  estimatedQuestionsPerActiveDay: number;
  paretoCoreTopicsCount?: number;
}

export interface ParetoFeasibilityReport {
  status: FeasibilityStatus;
  weeksUntilExam: number | null;
  totalCapacityQuestions: number;
  paretoCoreTargetQuestions: number;
  coveragePct: number;
  recommendedHoursPerDay: number | null;
  summaryMessage: string;
}

export interface ExamRoadmapWeekItem {
  weekOffset: number;
  weekNumber: number;
  label: string;
  startDateIso: string;
  phase: StudyPhaseMeta;
  hasSimulado: boolean;
  examEvents: TargetExamBoard[];
  isCurrentWeek: boolean;
}

export interface ExamWeeksRoadmapInput {
  targetExams: TargetExamBoard[];
  examDates: ExamDateMap | undefined;
  referenceDate?: Date;
  maxWeeks?: number;
}

const QUESTIONS_PER_PARETO_TOPIC = 25;
const DEFAULT_PARETO_TOPICS = 20;
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

function toIsoLocal(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function computeParetoFeasibility(
  input: ParetoFeasibilityInput
): ParetoFeasibilityReport {
  const paretoTopics = Math.max(1, Math.round(input.paretoCoreTopicsCount ?? DEFAULT_PARETO_TOPICS));
  const paretoCoreTargetQuestions = paretoTopics * QUESTIONS_PER_PARETO_TOPIC;

  if (
    input.weeksUntilExam === null ||
    !Number.isFinite(input.weeksUntilExam) ||
    input.weeksUntilExam <= 0
  ) {
    return {
      status: 'sem_data',
      weeksUntilExam: null,
      totalCapacityQuestions: 0,
      paretoCoreTargetQuestions,
      coveragePct: 0,
      recommendedHoursPerDay: null,
      summaryMessage:
        'Informe a data da sua prova alvo para calcular a cobertura estimada do Núcleo Pareto 80/20.',
    };
  }

  const weeks = Math.max(1, Math.round(input.weeksUntilExam));
  const activeDays = Math.max(0, Math.round(input.activeDaysPerWeek));
  const qPerDay = Math.max(0, Math.round(input.estimatedQuestionsPerActiveDay));
  const totalCapacityQuestions = weeks * activeDays * qPerDay;
  const coveragePct = Math.min(
    100,
    Math.max(0, Math.round((totalCapacityQuestions / paretoCoreTargetQuestions) * 100))
  );

  if (coveragePct >= 90) {
    return {
      status: 'confortavel',
      weeksUntilExam: weeks,
      totalCapacityQuestions,
      paretoCoreTargetQuestions,
      coveragePct,
      recommendedHoursPerDay: null,
      summaryMessage: `Ritmo confortável: capacidade para ~${totalCapacityQuestions.toLocaleString('pt-BR')} questões até a prova (${coveragePct}% do Núcleo Pareto 80/20).`,
    };
  }

  const safeHours = Math.max(1, Math.min(8, Math.round(input.hoursPerDay)));
  const ratioNeeded = paretoCoreTargetQuestions / Math.max(1, totalCapacityQuestions);
  const recommendedHoursPerDay = Math.min(8, Math.max(safeHours + 1, Math.ceil(safeHours * ratioNeeded)));

  if (coveragePct >= 65) {
    return {
      status: 'apertado',
      weeksUntilExam: weeks,
      totalCapacityQuestions,
      paretoCoreTargetQuestions,
      coveragePct,
      recommendedHoursPerDay,
      summaryMessage: `Ritmo ajustado (${coveragePct}% do Núcleo Pareto). Para folga total, considere ${recommendedHoursPerDay}h/dia ou priorize estritamente os temas 80/20.`,
    };
  }

  return {
    status: 'critico',
    weeksUntilExam: weeks,
    totalCapacityQuestions,
    paretoCoreTargetQuestions,
    coveragePct,
    recommendedHoursPerDay,
    summaryMessage: `Tempo curto: com ${safeHours}h/dia você cobre ~${coveragePct}% do Núcleo Pareto até a prova. Recomenda-se ${recommendedHoursPerDay}h/dia ou foco absoluto nos temas mais incidentes.`,
  };
}

export function buildExamWeeksRoadmap(
  input: ExamWeeksRoadmapInput
): ExamRoadmapWeekItem[] {
  const ref = normalizeLocalMidnight(input.referenceDate ?? new Date());
  const maxWeeks = Math.max(1, Math.min(36, input.maxWeeks ?? 24));
  const summary = computeExamCalendarSummary(input.targetExams, input.examDates, ref);

  // Sunday of current week
  const baseSunday = new Date(ref);
  baseSunday.setDate(ref.getDate() - ref.getDay());

  // Determine the farthest upcoming exam date (or default 8 weeks if no dates set)
  const upcomingEntries = summary.entries.filter((e) => !e.isPast);
  let totalWeeks = 8;
  if (upcomingEntries.length > 0) {
    const maxDays = Math.max(...upcomingEntries.map((e) => e.daysRemaining));
    totalWeeks = Math.min(maxWeeks, Math.max(1, Math.ceil((maxDays + ref.getDay() + 1) / 7)));
  }

  const parsedExamDates: Array<{ exam: TargetExamBoard; time: number }> = [];
  for (const exam of input.targetExams) {
    const iso = input.examDates?.[exam];
    if (!iso) continue;
    const dt = parseIsoDateLocal(iso);
    if (dt) parsedExamDates.push({ exam, time: dt.getTime() });
  }

  const items: ExamRoadmapWeekItem[] = [];
  for (let offset = 0; offset < totalWeeks; offset += 1) {
    const sunday = new Date(baseSunday);
    sunday.setDate(baseSunday.getDate() + offset * 7);
    const saturday = new Date(sunday);
    saturday.setDate(sunday.getDate() + 6);

    const weekStartMs = sunday.getTime();
    const weekEndMs = saturday.getTime();

    const examEvents = parsedExamDates
      .filter((e) => e.time >= weekStartMs && e.time <= weekEndMs)
      .map((e) => e.exam);

    const weekRef = offset === 0 ? ref : sunday;
    const weekSummary = computeExamCalendarSummary(
      input.targetExams,
      input.examDates,
      weekRef
    );
    const phase = weekSummary.activePhase;

    const hasSimulado =
      examEvents.length === 0 &&
      phase.simuladoCadence !== 'nenhum' &&
      (phase.simuladoCadence === 'semanal' || offset % 2 === 0);

    const startDay = sunday.getDate();
    const startMonth = MONTH_SHORT_PT[sunday.getMonth()] ?? '';
    const label = `${String(startDay).padStart(2, '0')} ${startMonth}`;

    items.push({
      weekOffset: offset,
      weekNumber: offset + 1,
      label,
      startDateIso: toIsoLocal(sunday),
      phase,
      hasSimulado,
      examEvents,
      isCurrentWeek: offset === 0,
    });
  }

  return items;
}
