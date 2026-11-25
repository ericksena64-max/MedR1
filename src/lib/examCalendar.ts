import { TARGET_EXAM_BOARDS, type TargetExamBoard } from './examWeights';

export type ExamDateMap = Partial<Record<TargetExamBoard, string>>;

export type StudyPhaseId =
  | 'base'
  | 'aprofundamento'
  | 'reta_final'
  | 'semana_prova'
  | 'sem_data';

export interface StudyPhaseMeta {
  id: StudyPhaseId;
  label: string;
  shortLabel: string;
  description: string;
  simuladoCadence: 'quinzenal' | 'semanal' | 'nenhum';
  loadMultiplier: number;
}

export interface ExamCountdownEntry {
  exam: TargetExamBoard;
  dateIso: string;
  daysRemaining: number;
  weeksRemaining: number;
  isPast: boolean;
  isToday: boolean;
  phase: StudyPhaseMeta;
}

export interface ExamCalendarSummary {
  entries: ExamCountdownEntry[];
  nextExam: ExamCountdownEntry | null;
  activePhase: StudyPhaseMeta;
  activeExams: TargetExamBoard[];
}

const MS_PER_DAY = 86_400_000;

const PHASE_CATALOG: Record<StudyPhaseId, StudyPhaseMeta> = {
  base: {
    id: 'base',
    label: 'Fase 1 · Base & Cobertura',
    shortLabel: 'Base',
    description: 'Foco em cobertura ampla do Núcleo Pareto 80/20 e construção de base sólida.',
    simuladoCadence: 'quinzenal',
    loadMultiplier: 1.0,
  },
  aprofundamento: {
    id: 'aprofundamento',
    label: 'Fase 2 · Lacunas & Aprofundamento',
    shortLabel: 'Aprofundamento',
    description: 'Prioridade máxima em lacunas reais (alto Pareto × menor acurácia) + simulado semanal.',
    simuladoCadence: 'semanal',
    loadMultiplier: 1.0,
  },
  reta_final: {
    id: 'reta_final',
    label: 'Fase 3 · Reta Final (Sprint)',
    shortLabel: 'Reta Final',
    description: 'Provas na íntegra da banca, revisão cirúrgica do Caderno de Erros e FSRS.',
    simuladoCadence: 'semanal',
    loadMultiplier: 1.0,
  },
  semana_prova: {
    id: 'semana_prova',
    label: 'Fase 4 · Semana da Prova (Taper)',
    shortLabel: 'Semana da Prova',
    description: 'Redução de carga (-40%), revisão leve de pérolas/FSRS e descanso na véspera.',
    simuladoCadence: 'nenhum',
    loadMultiplier: 0.6,
  },
  sem_data: {
    id: 'sem_data',
    label: 'Ritmo Contínuo',
    shortLabel: 'Contínuo',
    description: 'Defina a data da sua prova na rotina para ativar a periodização automática até o Dia D.',
    simuladoCadence: 'quinzenal',
    loadMultiplier: 1.0,
  },
};

/**
 * Parses a YYYY-MM-DD string into a local midnight Date without UTC shift.
 */
export function parseIsoDateLocal(isoDate: string): Date | null {
  if (typeof isoDate !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate.trim());
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  const dt = new Date(y, m - 1, d);
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) {
    return null;
  }
  dt.setHours(0, 0, 0, 0);
  return dt;
}

export function normalizeLocalMidnight(date: Date): Date {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setHours(0, 0, 0, 0);
  return d;
}

export function classifyStudyPhase(daysRemaining: number | null): StudyPhaseMeta {
  if (daysRemaining === null || !Number.isFinite(daysRemaining) || daysRemaining < 0) {
    return PHASE_CATALOG.sem_data;
  }
  if (daysRemaining <= 7) {
    return PHASE_CATALOG.semana_prova;
  }
  if (daysRemaining <= 28) {
    return PHASE_CATALOG.reta_final;
  }
  if (daysRemaining <= 84) {
    return PHASE_CATALOG.aprofundamento;
  }
  return PHASE_CATALOG.base;
}

export function computeExamCalendarSummary(
  targetExams: TargetExamBoard[],
  examDates: ExamDateMap | undefined,
  referenceDate: Date = new Date()
): ExamCalendarSummary {
  const ref = normalizeLocalMidnight(referenceDate);
  const safeTargets =
    targetExams.length > 0 ? targetExams : (['UEPA'] as TargetExamBoard[]);
  const entries: ExamCountdownEntry[] = [];

  for (const exam of safeTargets) {
    const rawIso = examDates?.[exam];
    if (!rawIso) continue;
    const parsed = parseIsoDateLocal(rawIso);
    if (!parsed) continue;
    const diffDays = Math.round((parsed.getTime() - ref.getTime()) / MS_PER_DAY);
    const isPast = diffDays < 0;
    const isToday = diffDays === 0;
    const weeksRemaining = isPast ? 0 : Math.max(0, Math.ceil(diffDays / 7));
    entries.push({
      exam,
      dateIso: rawIso.trim(),
      daysRemaining: diffDays,
      weeksRemaining,
      isPast,
      isToday,
      phase: classifyStudyPhase(isPast ? null : diffDays),
    });
  }

  const upcoming = entries
    .filter((e) => !e.isPast)
    .sort((a, b) => a.daysRemaining - b.daysRemaining);

  const nextExam = upcoming[0] ?? null;
  const activePhase = nextExam ? nextExam.phase : PHASE_CATALOG.sem_data;

  // Exclude exams whose date has already passed when at least one non-past exam remains
  const pastSet = new Set(entries.filter((e) => e.isPast).map((e) => e.exam));
  const nonPastTargets = safeTargets.filter((ex) => !pastSet.has(ex));
  const activeExams = nonPastTargets.length > 0 ? nonPastTargets : safeTargets;

  return {
    entries,
    nextExam,
    activePhase,
    activeExams,
  };
}

export function computeUrgencyAdjustedExamWeights(
  targetExams: TargetExamBoard[],
  examDates: ExamDateMap | undefined,
  referenceDate: Date = new Date()
): Record<TargetExamBoard, number> {
  const safeTargets =
    targetExams.length > 0 ? targetExams : (['UEPA'] as TargetExamBoard[]);
  const summary = computeExamCalendarSummary(safeTargets, examDates, referenceDate);
  const entryByExam = new Map(summary.entries.map((e) => [e.exam, e]));
  const activeSet = new Set(summary.activeExams);

  const raw: Array<{ exam: TargetExamBoard; weight: number }> = safeTargets.map(
    (exam, idx) => {
      if (!activeSet.has(exam)) {
        return { exam, weight: 0 };
      }
      const harmonicBase = 1 / (idx + 1);
      const entry = entryByExam.get(exam);
      let urgencyMultiplier = 1.0;
      if (entry && !entry.isPast) {
        if (entry.daysRemaining <= 28) {
          urgencyMultiplier = 2.2;
        } else if (entry.daysRemaining <= 56) {
          urgencyMultiplier = 1.4;
        }
      }
      return { exam, weight: harmonicBase * urgencyMultiplier };
    }
  );

  const total = raw.reduce((sum, item) => sum + item.weight, 0);
  const result = {} as Record<TargetExamBoard, number>;
  for (const board of TARGET_EXAM_BOARDS) {
    result[board] = 0;
  }

  if (total <= 0) {
    result[safeTargets[0]] = 1;
    return result;
  }

  for (const item of raw) {
    result[item.exam] = item.weight / total;
  }

  return result;
}
