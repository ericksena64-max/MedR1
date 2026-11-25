import { GRANDES_AREAS } from '../data/taxonomy';
import type {
  AlternativeLetter,
  GrandeAreaId,
  MedicalQuestion,
  UserAnswerRecord,
} from '../types/medical';
import { calculateParetoByExam } from './paretoCalculator';

export const DIAGNOSTIC_QUESTIONS_PER_AREA = 10;
export const DIAGNOSTIC_TOTAL_QUESTIONS = DIAGNOSTIC_QUESTIONS_PER_AREA * 5;
export const MAX_DIAGNOSTIC_BOARDS = 5;
export const PARETO_HIGH_QUOTA_PER_AREA = 7;
export const STORAGE_KEY_DIAGNOSTIC_STATE = 'medr1_diagnostic_exam_v1';

export const DIAGNOSTIC_BOARD_OPTIONS = [
  'UEPA',
  'ENARE',
  'USP-SP',
  'SUS-SP',
  'UNIFESP',
  'GERAL',
] as const;

export type DiagnosticBoardOption = (typeof DIAGNOSTIC_BOARD_OPTIONS)[number];

export interface DiagnosticExamState {
  status: 'not_started' | 'in_progress' | 'completed';
  selectedBoard: DiagnosticBoardOption;
  selectedBoards?: DiagnosticBoardOption[];
  questionIds: string[];
  startedAt?: string;
  completedAt?: string;
  scorePct?: number;
}

export interface BoardQuotaSlot {
  board: DiagnosticBoardOption;
  perArea: number;
  totalTarget: number;
}

export interface DiagnosticSelectionResult {
  questions: MedicalQuestion[];
  questionIds: string[];
  selectedBoards: DiagnosticBoardOption[];
  quotas: BoardQuotaSlot[];
  boardBreakdown: Record<string, number>;
  matchedBoardCount: number;
  fallbackCount: number;
  paretoCoreCount: number;
  areaCounts: Record<GrandeAreaId, number>;
}

export interface DiagnosticFinishCheck {
  canFinish: boolean;
  answeredCount: number;
  remainingCount: number;
  firstUnansweredIndex: number;
}

export interface DiagnosticEvaluationResult {
  validCorrect: number;
  validTotal: number;
  scorePct: number;
  areaBreakdown: Record<GrandeAreaId, { answered: number; correct: number }>;
}

export const DEFAULT_DIAGNOSTIC_STATE: DiagnosticExamState = {
  status: 'not_started',
  selectedBoard: 'UEPA',
  selectedBoards: ['UEPA'],
  questionIds: [],
};

const VALID_BOARD_SET = new Set<string>(DIAGNOSTIC_BOARD_OPTIONS);

function normalizeToken(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function normalizeDiagnosticBoards(
  input: DiagnosticBoardOption | DiagnosticBoardOption[] | string | undefined
): DiagnosticBoardOption[] {
  const rawList = Array.isArray(input) ? input : input ? [input] : [];
  const unique: DiagnosticBoardOption[] = [];

  for (const item of rawList) {
    if (VALID_BOARD_SET.has(item) && !unique.includes(item as DiagnosticBoardOption)) {
      unique.push(item as DiagnosticBoardOption);
    }
    if (unique.length >= MAX_DIAGNOSTIC_BOARDS) break;
  }

  return unique.length > 0 ? unique : ['UEPA'];
}

/**
 * Computes identical per-area board quotas summing to 10 questions/area (50 total),
 * giving higher weight to the primary board (index 0) while guaranteeing every
 * Grande Área receives the exact same board mix to avoid cross-area confounding.
 */
export function computePerAreaBoardQuotas(
  boardsInput: DiagnosticBoardOption | DiagnosticBoardOption[] | string
): BoardQuotaSlot[] {
  const boards = normalizeDiagnosticBoards(boardsInput);
  const distributionByCount: Record<number, number[]> = {
    1: [10],
    2: [6, 4],
    3: [4, 3, 3],
    4: [4, 2, 2, 2],
    5: [4, 2, 2, 1, 1],
  };

  const weights = distributionByCount[boards.length] ?? [10];
  return boards.map((board, idx) => {
    const perArea = weights[idx] ?? 0;
    return {
      board,
      perArea,
      totalTarget: perArea * GRANDES_AREAS.length,
    };
  });
}

function questionMatchesBoard(q: MedicalQuestion, board: string): boolean {
  const norm = normalizeToken(board);
  if (!norm || norm === 'geral') return true;
  const inst = normalizeToken(q.instituicao);
  const banca = normalizeToken(q.banca);
  return (
    inst === norm ||
    banca === norm ||
    inst.includes(norm) ||
    banca.includes(norm)
  );
}

/**
 * Selects exactly 50 diagnostic questions (10 per Grande Área) using dual
 * stratification (`Grande Área × Banca`) across 1 to 5 selected boards,
 * prioritizing Pareto 80/20 high-incidence topics within each bucket.
 */
export function selectDiagnosticQuestions(
  allQuestions: MedicalQuestion[],
  boardOrBoards: DiagnosticBoardOption | DiagnosticBoardOption[] | string
): DiagnosticSelectionResult {
  const selectedBoards = normalizeDiagnosticBoards(boardOrBoards);
  const quotas = computePerAreaBoardQuotas(selectedBoards);

  // Build Pareto 80% core topic sets per selected board (and global fallback)
  const globalPareto = calculateParetoByExam('GERAL', allQuestions, 10);
  const globalCoreTopics = new Set(
    globalPareto.items.filter((i) => i.isParetoCore).map((i) => i.normalizedTopic)
  );

  const coreTopicsByBoard = new Map<string, Set<string>>();
  for (const board of selectedBoards) {
    const analysis = calculateParetoByExam(board, allQuestions, 10);
    const core = new Set(
      analysis.items.filter((i) => i.isParetoCore).map((i) => i.normalizedTopic)
    );
    coreTopicsByBoard.set(board, core.size > 0 ? core : globalCoreTopics);
  }

  const isParetoCoreQuestion = (q: MedicalQuestion, board?: string): boolean => {
    const normTema = normalizeToken(q.tema);
    const boardSet = board ? coreTopicsByBoard.get(board) : undefined;
    if (boardSet && boardSet.has(normTema)) return true;
    return globalCoreTopics.has(normTema);
  };

  const selected: MedicalQuestion[] = [];
  const usedIds = new Set<string>();
  const boardBreakdown: Record<string, number> = {};
  for (const b of selectedBoards) boardBreakdown[b] = 0;

  let matchedBoardCount = 0;
  let fallbackCount = 0;
  let paretoCoreCount = 0;

  const areaCounts: Record<GrandeAreaId, number> = {
    clinica_medica: 0,
    cirurgia_geral: 0,
    ginecologia_obstetricia: 0,
    pediatria: 0,
    medicina_preventiva: 0,
  };

  for (const area of GRANDES_AREAS) {
    const areaActive = allQuestions
      .filter(
        (q) =>
          q.grandeAreaId === area.id &&
          !q.anulada &&
          !q.desatualizada &&
          !usedIds.has(q.id)
      )
      .sort((a, b) => {
        if (b.ano !== a.ano) return b.ano - a.ano;
        return a.id.localeCompare(b.id);
      });

    let pickedInArea = 0;
    let paretoPickedInArea = 0;

    const pickFromPool = (
      pool: MedicalQuestion[],
      limit: number,
      boardLabel: string | null
    ): number => {
      if (limit <= 0 || pool.length === 0) return 0;

      // Prioritize Pareto core questions up to PARETO_HIGH_QUOTA_PER_AREA
      const paretoFirst = pool.filter((q) =>
        isParetoCoreQuestion(q, boardLabel ?? undefined)
      );
      const nonPareto = pool.filter(
        (q) => !isParetoCoreQuestion(q, boardLabel ?? undefined)
      );

      let picked = 0;
      const tryTake = (q: MedicalQuestion, isCore: boolean) => {
        if (picked >= limit || pickedInArea >= DIAGNOSTIC_QUESTIONS_PER_AREA) return;
        if (usedIds.has(q.id)) return;
        selected.push(q);
        usedIds.add(q.id);
        picked += 1;
        pickedInArea += 1;
        if (isCore) {
          paretoPickedInArea += 1;
          paretoCoreCount += 1;
        }
        if (boardLabel) {
          boardBreakdown[boardLabel] = (boardBreakdown[boardLabel] ?? 0) + 1;
          matchedBoardCount += 1;
        } else {
          fallbackCount += 1;
        }
      };

      for (const q of paretoFirst) {
        if (paretoPickedInArea >= PARETO_HIGH_QUOTA_PER_AREA) break;
        tryTake(q, true);
      }
      for (const q of nonPareto) {
        tryTake(q, false);
      }
      // If still short, take any remaining Pareto core questions
      for (const q of paretoFirst) {
        tryTake(q, true);
      }

      return picked;
    };

    // Pass 1: Strict stratified quotas per chosen board in this Grande Área
    for (const slot of quotas) {
      if (pickedInArea >= DIAGNOSTIC_QUESTIONS_PER_AREA) break;
      const matching = areaActive.filter(
        (q) => !usedIds.has(q.id) && questionMatchesBoard(q, slot.board)
      );
      pickFromPool(matching, slot.perArea, slot.board);
    }

    // Pass 2: If any board lacked questions in this area, borrow from other selected boards first
    if (pickedInArea < DIAGNOSTIC_QUESTIONS_PER_AREA) {
      for (const slot of quotas) {
        if (pickedInArea >= DIAGNOSTIC_QUESTIONS_PER_AREA) break;
        const remaining = DIAGNOSTIC_QUESTIONS_PER_AREA - pickedInArea;
        const matching = areaActive.filter(
          (q) => !usedIds.has(q.id) && questionMatchesBoard(q, slot.board)
        );
        pickFromPool(matching, remaining, slot.board);
      }
    }

    // Pass 3: Fallback to any active question in the same Grande Área
    if (pickedInArea < DIAGNOSTIC_QUESTIONS_PER_AREA) {
      const remaining = DIAGNOSTIC_QUESTIONS_PER_AREA - pickedInArea;
      const otherActive = areaActive.filter((q) => !usedIds.has(q.id));
      pickFromPool(otherActive, remaining, null);
    }

    // Pass 4: Last-resort fallback including annulled/outdated if bank is tiny
    if (pickedInArea < DIAGNOSTIC_QUESTIONS_PER_AREA) {
      const remaining = DIAGNOSTIC_QUESTIONS_PER_AREA - pickedInArea;
      const anyInArea = allQuestions.filter(
        (q) => q.grandeAreaId === area.id && !usedIds.has(q.id)
      );
      pickFromPool(anyInArea, remaining, null);
    }

    areaCounts[area.id] = pickedInArea;
  }

  return {
    questions: selected,
    questionIds: selected.map((q) => q.id),
    selectedBoards,
    quotas,
    boardBreakdown,
    matchedBoardCount,
    fallbackCount,
    paretoCoreCount,
    areaCounts,
  };
}

/**
 * Enforces that all 50 diagnostic questions have a selected alternative before finishing.
 */
export function canFinishDiagnostic(
  questionIds: string[],
  drafts: Record<string, AlternativeLetter>
): DiagnosticFinishCheck {
  let answeredCount = 0;
  let firstUnansweredIndex = -1;

  for (let i = 0; i < questionIds.length; i += 1) {
    const id = questionIds[i];
    if (drafts[id]) {
      answeredCount += 1;
    } else if (firstUnansweredIndex === -1) {
      firstUnansweredIndex = i;
    }
  }

  const remainingCount = Math.max(0, questionIds.length - answeredCount);
  const canFinish =
    questionIds.length >= DIAGNOSTIC_TOTAL_QUESTIONS && remainingCount === 0;

  return {
    canFinish,
    answeredCount,
    remainingCount,
    firstUnansweredIndex,
  };
}

/**
 * Determines whether analytics/projection charts are unlocked for the student.
 */
export function hasCompletedDiagnostic(
  state: DiagnosticExamState | null | undefined,
  answers: Record<string, UserAnswerRecord>,
  allQuestions: MedicalQuestion[]
): boolean {
  if (state?.status === 'completed') {
    return true;
  }

  const answeredCountByArea: Record<GrandeAreaId, number> = {
    clinica_medica: 0,
    cirurgia_geral: 0,
    ginecologia_obstetricia: 0,
    pediatria: 0,
    medicina_preventiva: 0,
  };

  for (const q of allQuestions) {
    if (answers[q.id]) {
      answeredCountByArea[q.grandeAreaId] += 1;
    }
  }

  return GRANDES_AREAS.every(
    (area) => answeredCountByArea[area.id] >= DIAGNOSTIC_QUESTIONS_PER_AREA
  );
}

/**
 * Evaluates a completed diagnostic simulado into valid accuracy and per-area breakdown.
 */
export function evaluateDiagnosticCompletion(
  questions: MedicalQuestion[],
  drafts: Record<string, AlternativeLetter>
): DiagnosticEvaluationResult {
  const areaBreakdown: Record<GrandeAreaId, { answered: number; correct: number }> = {
    clinica_medica: { answered: 0, correct: 0 },
    cirurgia_geral: { answered: 0, correct: 0 },
    ginecologia_obstetricia: { answered: 0, correct: 0 },
    pediatria: { answered: 0, correct: 0 },
    medicina_preventiva: { answered: 0, correct: 0 },
  };

  let validTotal = 0;
  let validCorrect = 0;

  for (const q of questions) {
    const selected = drafts[q.id];
    if (!selected) continue;
    const isCorrect = selected === q.gabaritoOficial;
    areaBreakdown[q.grandeAreaId].answered += 1;
    if (isCorrect) areaBreakdown[q.grandeAreaId].correct += 1;

    if (!q.anulada && !q.desatualizada) {
      validTotal += 1;
      if (isCorrect) validCorrect += 1;
    }
  }

  const scorePct =
    validTotal > 0 ? Number(((validCorrect / validTotal) * 100).toFixed(1)) : 0;

  return {
    validCorrect,
    validTotal,
    scorePct,
    areaBreakdown,
  };
}
