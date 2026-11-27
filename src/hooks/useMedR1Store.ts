import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import type {
  AlternativeLetter,
  CutoffTargetConfig,
  DailyGoalProgress,
  ExamBoard,
  Flashcard,
  FsrsReviewLogEntry,
  GrandeAreaId,
  LiveRankingUser,
  MedicalQuestion,
  QuestionFilters,
  RetentionMode,
  SimuladoRecord,
  SrsRating,
  StudyMode,
  ThemeMode,
  ThemeScheduleConfig,
  UserAnswerRecord,
  UserProfile,
} from '../types/medical';
import { MEDICAL_QUESTIONS } from '../data/questions';
import { INITIAL_FLASHCARDS } from '../data/flashcardsSeed';
import {
  HISTORICAL_AREA_PERFORMANCE,
  HISTORICAL_TOPIC_PERFORMANCE,
  TEMPORAL_EVOLUTION_MONTHLY,
  TEMPORAL_EVOLUTION_WEEKLY,
} from '../data/analyticsSeed';
import { DEFAULT_USER_PROFILE, INITIAL_LIVE_PEERS } from '../data/rankingSeed';
import { GRANDES_AREAS, MEDICAL_CODENAMES } from '../data/taxonomy';
import {
  computeDifficulty,
  computePerformanceStatus,
  computeWeightedScore,
} from '../lib/utils';
import {
  buildFlashcardFromQuestion,
  computeNextFsrsState,
  isCardDueToday,
  migrateCardToFsrs,
  resolveCardRetention,
} from '../lib/srs';
import {
  computeGamificationCore,
  type GamificationCoreState,
} from '../lib/gamificationEngine';
import {
  computeGamificationAchievements,
  computeGamificationMissions,
  type GamificationAchievement,
  type GamificationMission,
} from '../lib/gamificationChallenges';
import type { StorageAdapter } from '../lib/storageAdapter';
import {
  buildPeriodRanking,
  countUserAnswersByPeriod,
} from '../lib/rankingPeriods';
import {
  DEFAULT_DIAGNOSTIC_STATE,
  STORAGE_KEY_DIAGNOSTIC_STATE,
  evaluateDiagnosticCompletion,
  hasCompletedDiagnostic,
  normalizeDiagnosticBoards,
  selectDiagnosticQuestions,
  type DiagnosticBoardOption,
  type DiagnosticExamState,
} from '../lib/diagnosticExam';
import { generateClientUuid } from '../lib/syncOutbox';
import { useSyncEngine } from './useSyncEngine';
import type {
  SyncBootstrapRequest,
  SyncOutboxEvent,
  SyncPullResponse,
} from '../types/sync';
import { aggregateWeightedAreaPerformance } from '../lib/recencyAnalytics';
import {
  matchesTaxonomyLabel,
  matchesTaxonomySearch,
} from '../lib/taxonomyAnalytics';
import {
  areAllOfficialExamsLoaded,
  clearAllImportedQuestionsFromDB,
  deleteImportedBatchFromDB,
  deleteImportedQuestionFromDB,
  getAllBankQuestions,
  getLoadedOfficialExamIds,
  getMatchingOfficialExamIds,
  getOfficialCatalogCache,
  getOfficialExamIdsForQuestionIds,
  loadImportedQuestionsFromDB,
  loadOfficialCatalogQuestions,
  loadOfficialExams,
  saveImportedQuestionsToDB,
  setImportedQuestionsCache,
  setOfficialCatalogCache,
} from '../lib/questionBankStore';

const STORAGE_KEY_ANSWERS = 'medr1_answers_v1';
const STORAGE_KEY_BOOKMARKS = 'medr1_bookmarks_v1';
const STORAGE_KEY_PROFILE = 'medr1_profile_v1';
const STORAGE_KEY_THEME = 'medr1_theme_v1';
const STORAGE_KEY_THEME_MODE = 'medr1_theme_mode_v2';
const STORAGE_KEY_THEME_SCHEDULE = 'medr1_theme_schedule_v1';
const STORAGE_KEY_READING_COMFORT = 'medr1_reading_comfort_v1';
const STORAGE_KEY_FLASHCARDS = 'medr1_flashcards_v1';
const STORAGE_KEY_AUTO_SRS = 'medr1_auto_srs_v1';
const STORAGE_KEY_REVIEWS_TODAY = 'medr1_reviews_today_v1';
const STORAGE_KEY_FSRS_RETENTION_MODE = 'medr1_fsrs_retention_mode_v2';
const STORAGE_KEY_FSRS_BOARD = 'medr1_fsrs_target_board_v1';
const STORAGE_KEY_FSRS_FUZZ = 'medr1_fsrs_fuzz_v1';
const STORAGE_KEY_FSRS_REVLOGS = 'medr1_fsrs_revlogs_v1';
const STORAGE_KEY_DAILY_GOAL_TARGET = 'medr1_daily_goal_target_v1';
const STORAGE_KEY_DAILY_GOAL_HISTORY = 'medr1_daily_goal_history_v1';
const STORAGE_KEY_SIMULADO_HISTORY = 'medr1_simulado_history_v1';
const STORAGE_KEY_CUTOFF_TARGET = 'medr1_cutoff_target_v1';
const STORAGE_KEY_DEMO_BASELINE = 'medr1_include_demo_baseline_v1';
const STORAGE_KEY_SEEN_ACHIEVEMENTS = 'medr1_gamification_seen_badges_v1';

export interface GamificationSummary {
  core: GamificationCoreState;
  missions: GamificationMission[];
  achievements: GamificationAchievement[];
  unlockedCount: number;
  totalAchievements: number;
}

export function diffNewlyUnlockedAchievements(
  achievements: GamificationAchievement[],
  seenIds: string[]
): GamificationAchievement[] {
  const seenSet = new Set(seenIds);
  return achievements.filter((badge) => badge.unlocked && !seenSet.has(badge.id));
}

const DEFAULT_DAILY_GOAL_TARGET = 20;

function shiftLocalDateKey(daysDelta: number): string {
  const dt = new Date();
  dt.setDate(dt.getDate() + daysDelta);
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, '0');
  const day = String(dt.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function buildInitialSimuladoSeed(): SimuladoRecord[] {
  return [
    {
      id: 'sim-seed-01',
      title: 'Simulado Diagnóstico #01',
      date: shiftLocalDateKey(-42),
      validCorrect: 64,
      validTotal: 100,
      accuracyPct: 64.0,
      scaleType: 'bruta_100',
      estimatedScore: 64.0,
      cohortAvgPct: 59.5,
      cohortPercentile: 62,
      source: 'manual',
    },
    {
      id: 'sim-seed-02',
      title: 'Simulado ENARE Base #02',
      date: shiftLocalDateKey(-28),
      validCorrect: 68,
      validTotal: 100,
      accuracyPct: 68.0,
      scaleType: 'bruta_100',
      estimatedScore: 68.0,
      cohortAvgPct: 61.0,
      cohortPercentile: 68,
      source: 'manual',
    },
    {
      id: 'sim-seed-03',
      title: 'Simulado USP-SP (Prova Difícil) #03',
      date: shiftLocalDateKey(-21),
      validCorrect: 67,
      validTotal: 100,
      accuracyPct: 67.0,
      scaleType: 'bruta_100',
      estimatedScore: 67.0,
      cohortAvgPct: 57.5,
      cohortPercentile: 74,
      source: 'manual',
    },
    {
      id: 'sim-seed-04',
      title: 'Simulado Geral R1 #04',
      date: shiftLocalDateKey(-10),
      validCorrect: 70,
      validTotal: 100,
      accuracyPct: 70.0,
      scaleType: 'bruta_100',
      estimatedScore: 70.0,
      cohortAvgPct: 62.0,
      cohortPercentile: 76,
      source: 'manual',
    },
    {
      id: 'sim-seed-05',
      title: 'Simulado Geral R1 #05',
      date: shiftLocalDateKey(-2),
      validCorrect: 72,
      validTotal: 100,
      accuracyPct: 72.0,
      scaleType: 'bruta_100',
      estimatedScore: 72.0,
      cohortAvgPct: 62.8,
      cohortPercentile: 79,
      source: 'manual',
    },
  ];
}

const DEFAULT_CUTOFF_TARGET: CutoffTargetConfig = {
  institution: DEFAULT_USER_PROFILE.targetInstitution,
  specialty: DEFAULT_USER_PROFILE.targetSpecialty,
  modality: 'Acesso Direto',
  historicalCutoff: 76,
  safetyMargin: 4,
  scaleType: 'bruta_100',
};

export function getLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getPreviousLocalDateKey(dateKey: string): string {
  const [y, m, d] = dateKey.split('-').map(Number);
  const dt = new Date(y, (m || 1) - 1, d || 1);
  dt.setDate(dt.getDate() - 1);
  return getLocalDateKey(dt);
}

export const DEFAULT_FILTERS: QuestionFilters = {
  search: '',
  examSearch: '',
  grandeAreaId: '',
  tema: '',
  temas: [],
  subtema: '',
  banca: '',
  instituicao: '',
  instituicoes: [],
  regiao: '',
  ano: '',
  dificuldade: '',
  status: 'todas',
  comImagens: false,
  excluirAnuladasDesatualizadas: true,
};

export function safeReadStorage<T>(
  key: string,
  fallback: T,
  validator?: (value: unknown) => value is T
): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);

    if (validator) {
      return validator(parsed) ? parsed : fallback;
    }

    if (Array.isArray(fallback)) {
      return Array.isArray(parsed) ? (parsed as T) : fallback;
    }
    if (fallback !== null && typeof fallback === 'object') {
      return parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)
        ? (parsed as T)
        : fallback;
    }
    if (typeof fallback === 'boolean') {
      return typeof parsed === 'boolean' ? (parsed as T) : fallback;
    }
    if (typeof fallback === 'number') {
      return typeof parsed === 'number' && Number.isFinite(parsed) ? (parsed as T) : fallback;
    }
    if (typeof fallback === 'string') {
      return typeof parsed === 'string' ? (parsed as T) : fallback;
    }

    return parsed as T;
  } catch {
    return fallback;
  }
}

export function writeStorageSafely(key: string, value: unknown): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.warn(`[MedR1] Falha ao salvar "${key}" no localStorage:`, err);
    return false;
  }
}

export function matchesStudentStatusFilter(
  status: QuestionFilters['status'],
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

export function createSingleSubmissionGuard() {
  let submitted = false;
  return {
    tryAcquire(): boolean {
      if (submitted) return false;
      submitted = true;
      return true;
    },
    reset(): void {
      submitted = false;
    },
    isSubmitted(): boolean {
      return submitted;
    },
  };
}

const DEFAULT_THEME_SCHEDULE: ThemeScheduleConfig = {
  darkStartHour: 18,
  lightStartHour: 6,
};

function isNightScheduleHour(
  schedule: ThemeScheduleConfig = DEFAULT_THEME_SCHEDULE,
  date: Date = new Date()
): boolean {
  const hour = date.getHours();
  const { darkStartHour, lightStartHour } = schedule;
  if (darkStartHour === lightStartHour) return false;
  if (darkStartHour > lightStartHour) {
    // Overnight window (e.g. 18:00 -> 06:00)
    return hour >= darkStartHour || hour < lightStartHour;
  }
  // Same-day window (e.g. 00:00 -> 06:00)
  return hour >= darkStartHour && hour < lightStartHour;
}

function getBrowserPrefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

const FSRS_STATE_TO_NUM: Record<string, number> = {
  New: 0,
  Learning: 1,
  Review: 2,
  Relearning: 3,
};

export function useMedR1Store(options?: {
  liveRankingEnabled?: boolean;
  storageAdapter?: StorageAdapter;
  studentId?: string;
}) {
  const syncEngine = useSyncEngine({
    adapter: options?.storageAdapter,
    studentId: options?.studentId,
  });
  const liveRankingEnabled = options?.liveRankingEnabled ?? false;
  const [storageQuotaExceeded, setStorageQuotaExceeded] = useState(false);

  const safeWriteStorage = useCallback((key: string, value: unknown) => {
    const ok = writeStorageSafely(key, value);
    if (!ok) {
      setStorageQuotaExceeded(true);
    }
  }, []);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    try {
      const savedMode = window.localStorage.getItem(STORAGE_KEY_THEME_MODE);
      if (
        savedMode === 'light' ||
        savedMode === 'dark' ||
        savedMode === 'system' ||
        savedMode === 'schedule'
      ) {
        return savedMode;
      }
      const legacy = window.localStorage.getItem(STORAGE_KEY_THEME);
      if (legacy === 'dark') return 'dark';
      if (legacy === 'light') return 'light';
      return 'system';
    } catch {
      return 'system';
    }
  });

  const [themeSchedule, setThemeSchedule] = useState<ThemeScheduleConfig>(() => {
    const saved = safeReadStorage<Partial<ThemeScheduleConfig>>(
      STORAGE_KEY_THEME_SCHEDULE,
      DEFAULT_THEME_SCHEDULE
    );
    const darkStartHour =
      typeof saved.darkStartHour === 'number' &&
      saved.darkStartHour >= 0 &&
      saved.darkStartHour <= 23
        ? Math.floor(saved.darkStartHour)
        : DEFAULT_THEME_SCHEDULE.darkStartHour;
    const lightStartHour =
      typeof saved.lightStartHour === 'number' &&
      saved.lightStartHour >= 0 &&
      saved.lightStartHour <= 23
        ? Math.floor(saved.lightStartHour)
        : DEFAULT_THEME_SCHEDULE.lightStartHour;
    return { darkStartHour, lightStartHour };
  });

  const [readingComfort, setReadingComfort] = useState<boolean>(() =>
    safeReadStorage<boolean>(STORAGE_KEY_READING_COMFORT, false)
  );

  const [systemPrefersDark, setSystemPrefersDark] = useState<boolean>(() =>
    getBrowserPrefersDark()
  );
  const [schedulePrefersDark, setSchedulePrefersDark] = useState<boolean>(() =>
    isNightScheduleHour(themeSchedule)
  );

  // Listen live to browser/OS prefers-color-scheme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches);
    };
    setSystemPrefersDark(mq.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  // Re-evaluate system clock immediately when schedule changes and every 30s while active
  useEffect(() => {
    setSchedulePrefersDark(isNightScheduleHour(themeSchedule));
    if (themeMode !== 'schedule') return;
    const interval = window.setInterval(() => {
      setSchedulePrefersDark(isNightScheduleHour(themeSchedule));
    }, 30_000);
    return () => window.clearInterval(interval);
  }, [themeMode, themeSchedule]);

  const darkMode = useMemo(() => {
    if (themeMode === 'dark') return true;
    if (themeMode === 'light') return false;
    if (themeMode === 'schedule') return schedulePrefersDark;
    return systemPrefersDark;
  }, [themeMode, schedulePrefersDark, systemPrefersDark]);

  const setDarkMode = useCallback((next: boolean | ((prev: boolean) => boolean)) => {
    const resolved = typeof next === 'function' ? next(darkMode) : next;
    setThemeMode(resolved ? 'dark' : 'light');
  }, [darkMode]);

  const [answers, setAnswers] = useState<Record<string, UserAnswerRecord>>(() =>
    safeReadStorage(STORAGE_KEY_ANSWERS, {})
  );

  const [bookmarks, setBookmarks] = useState<string[]>(() =>
    safeReadStorage(STORAGE_KEY_BOOKMARKS, ['q-usp-2025-cardio-01', 'q-enare-2025-epi-07'])
  );

  const [profile, setProfile] = useState<UserProfile>(() =>
    safeReadStorage(STORAGE_KEY_PROFILE, DEFAULT_USER_PROFILE)
  );

  const [flashcards, setFlashcards] = useState<Flashcard[]>(() => {
    const raw = safeReadStorage<Array<Record<string, unknown>>>(
      STORAGE_KEY_FLASHCARDS,
      INITIAL_FLASHCARDS as unknown as Array<Record<string, unknown>>
    );
    return raw.map(migrateCardToFsrs);
  });

  const [retentionMode, setRetentionMode] = useState<RetentionMode>(() => {
    const saved = safeReadStorage<unknown>(
      STORAGE_KEY_FSRS_RETENTION_MODE,
      'dinamica'
    );
    if (
      saved === 'dinamica' ||
      saved === 0.85 ||
      saved === 0.9 ||
      saved === 0.95
    ) {
      return saved;
    }
    return 'dinamica';
  });

  const [targetBoard, setTargetBoard] = useState<ExamBoard>(() => {
    const saved = safeReadStorage<unknown>(STORAGE_KEY_FSRS_BOARD, 'UEPA');
    if (saved === 'UEPA' || saved === 'ENARE' || saved === 'GERAL') {
      return saved;
    }
    return 'UEPA';
  });

  const [fsrsEnableFuzz, setFsrsEnableFuzz] = useState<boolean>(() =>
    safeReadStorage<boolean>(STORAGE_KEY_FSRS_FUZZ, true)
  );

  const [fsrsReviewLogs, setFsrsReviewLogs] = useState<FsrsReviewLogEntry[]>(() =>
    safeReadStorage<FsrsReviewLogEntry[]>(STORAGE_KEY_FSRS_REVLOGS, [])
  );

  const [lastFlashcardUndo, setLastFlashcardUndo] = useState<{
    previousCard: Flashcard;
    rating: SrsRating;
    reviewDate: string;
  } | null>(null);

  const [autoCreateFlashcardsOnError, setAutoCreateFlashcardsOnError] =
    useState<boolean>(() => safeReadStorage(STORAGE_KEY_AUTO_SRS, false));

  const [reviewsTodayStats, setReviewsTodayStats] = useState<{
    date: string;
    total: number;
    passed: number;
  }>(() => {
    const today = getLocalDateKey();
    const saved = safeReadStorage(STORAGE_KEY_REVIEWS_TODAY, {
      date: today,
      total: 0,
      passed: 0,
    });
    return saved.date === today ? saved : { date: today, total: 0, passed: 0 };
  });

  const [dailyGoalTarget, setDailyGoalTargetState] = useState<number>(() => {
    const saved = safeReadStorage<number>(
      STORAGE_KEY_DAILY_GOAL_TARGET,
      DEFAULT_DAILY_GOAL_TARGET
    );
    if (typeof saved === 'number' && Number.isFinite(saved)) {
      return Math.max(1, Math.min(300, Math.round(saved)));
    }
    return DEFAULT_DAILY_GOAL_TARGET;
  });

  const [todayDateKey, setTodayDateKey] = useState<string>(() =>
    getLocalDateKey()
  );

  // Store dates on which the daily goal was completed (YYYY-MM-DD -> true)
  const [goalCompletedDays, setGoalCompletedDays] = useState<
    Record<string, boolean>
  >(() => safeReadStorage<Record<string, boolean>>(STORAGE_KEY_DAILY_GOAL_HISTORY, {}));

  const setDailyGoalTarget = useCallback((nextTarget: number) => {
    const clamped = Math.max(1, Math.min(300, Math.round(nextTarget)));
    setDailyGoalTargetState(clamped);
  }, []);

  const [includeDemoBaseline, setIncludeDemoBaseline] = useState<boolean>(() =>
    safeReadStorage<boolean>(STORAGE_KEY_DEMO_BASELINE, false)
  );

  const [diagnosticState, setDiagnosticState] = useState<DiagnosticExamState>(() =>
    safeReadStorage<DiagnosticExamState>(
      STORAGE_KEY_DIAGNOSTIC_STATE,
      DEFAULT_DIAGNOSTIC_STATE
    )
  );

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_DIAGNOSTIC_STATE, diagnosticState);
  }, [diagnosticState, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_DEMO_BASELINE, includeDemoBaseline);
  }, [includeDemoBaseline, safeWriteStorage]);

  const [simuladoHistory, setSimuladoHistory] = useState<SimuladoRecord[]>(() =>
    safeReadStorage<SimuladoRecord[]>(STORAGE_KEY_SIMULADO_HISTORY, [])
  );

  const [cutoffTarget, setCutoffTarget] = useState<CutoffTargetConfig>(() =>
    safeReadStorage<CutoffTargetConfig>(
      STORAGE_KEY_CUTOFF_TARGET,
      DEFAULT_CUTOFF_TARGET
    )
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY_SIMULADO_HISTORY,
        JSON.stringify(simuladoHistory)
      );
    } catch {
      // ignore storage quota errors
    }
  }, [simuladoHistory]);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY_CUTOFF_TARGET,
        JSON.stringify(cutoffTarget)
      );
    } catch {
      // ignore storage quota errors
    }
  }, [cutoffTarget]);

  const addSimuladoRecord = useCallback(
    (entry: Omit<SimuladoRecord, 'id' | 'accuracyPct'>) => {
      const safeTotal = Math.max(1, Math.round(entry.validTotal));
      const safeCorrect = Math.max(0, Math.min(safeTotal, Math.round(entry.validCorrect)));
      const accuracyPct = Number(((safeCorrect / safeTotal) * 100).toFixed(1));
      const estimatedScore =
        entry.scaleType === 'bruta_100'
          ? accuracyPct
          : Number(entry.estimatedScore.toFixed(1));
      const newRecord: SimuladoRecord = {
        ...entry,
        id: `sim-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        validCorrect: safeCorrect,
        validTotal: safeTotal,
        accuracyPct,
        estimatedScore,
      };
      setSimuladoHistory((prev) => [...prev, newRecord]);
      const nowIso = new Date().toISOString();
      void syncEngine.enqueueEvents([
        {
          eventId: generateClientUuid(),
          type: 'MOCK_EXAM_UPSERT',
          payload: {
            id: generateClientUuid(),
            title: newRecord.title,
            institution: null,
            totalQuestions: newRecord.validTotal,
            correctCount: newRecord.validCorrect,
            scorePercentage: newRecord.accuracyPct,
            durationMs: 0,
            status: 'completed',
            startedAt: newRecord.date || nowIso,
            completedAt: nowIso,
            clientUpdatedAt: nowIso,
          },
        },
      ]);
    },
    [syncEngine]
  );

  const deleteSimuladoRecord = useCallback((id: string) => {
    setSimuladoHistory((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateCutoffTarget = useCallback(
    (patch: Partial<CutoffTargetConfig>) => {
      setCutoffTarget((prev) => ({ ...prev, ...patch }));
    },
    []
  );

  const restoreExampleSimulados = useCallback(() => {
    setSimuladoHistory(buildInitialSimuladoSeed());
  }, []);

  // Automatically roll over local day key if app stays open past midnight
  useEffect(() => {
    const timer = window.setInterval(() => {
      const currentKey = getLocalDateKey();
      setTodayDateKey((prev) => (prev === currentKey ? prev : currentKey));
    }, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  const [livePeers, setLivePeers] = useState<LiveRankingUser[]>(INITIAL_LIVE_PEERS);

  // High-capacity IndexedDB imported/AI-commented questions + lazy-loaded official exam catalog
  const [importedQuestions, setImportedQuestions] = useState<MedicalQuestion[]>([]);
  const [officialCatalogQuestions, setOfficialCatalogQuestions] = useState<MedicalQuestion[]>(
    () => getOfficialCatalogCache()
  );
  const [loadedOfficialExamIds, setLoadedOfficialExamIds] = useState<string[]>(
    () => getLoadedOfficialExamIds()
  );
  const [catalogLoadingCount, setCatalogLoadingCount] = useState(0);
  const [bankVersion, setBankVersion] = useState(0);

  const syncOfficialCatalogState = useCallback((loadedCatalog: MedicalQuestion[]) => {
    setOfficialCatalogCache(loadedCatalog);
    setOfficialCatalogQuestions([...loadedCatalog]);
    setLoadedOfficialExamIds(getLoadedOfficialExamIds());
    setBankVersion((v) => v + 1);
  }, []);

  const ensureOfficialExamsLoaded = useCallback(
    async (examIds: string[]) => {
      const pending = examIds.filter((id) => !getLoadedOfficialExamIds().includes(id));
      if (pending.length === 0) return;
      setCatalogLoadingCount((c) => c + 1);
      try {
        const loadedCatalog = await loadOfficialExams(pending);
        syncOfficialCatalogState(loadedCatalog);
      } finally {
        setCatalogLoadingCount((c) => Math.max(0, c - 1));
      }
    },
    [syncOfficialCatalogState]
  );

  const ensureExamsLoadedForFilters = useCallback(
    async (activeFilters: Partial<QuestionFilters>) => {
      const matchingIds = getMatchingOfficialExamIds(activeFilters);
      await ensureOfficialExamsLoaded(matchingIds);
    },
    [ensureOfficialExamsLoaded]
  );

  const ensureAllOfficialExamsLoaded = useCallback(async () => {
    if (areAllOfficialExamsLoaded()) return;
    setCatalogLoadingCount((c) => c + 1);
    try {
      const loadedCatalog = await loadOfficialCatalogQuestions();
      syncOfficialCatalogState(loadedCatalog);
    } finally {
      setCatalogLoadingCount((c) => Math.max(0, c - 1));
    }
  }, [syncOfficialCatalogState]);

  const ensureExamLoadedForQuestionId = useCallback(
    async (questionId: string) => {
      const ids = getOfficialExamIdsForQuestionIds([questionId]);
      await ensureOfficialExamsLoaded(ids);
    },
    [ensureOfficialExamsLoaded]
  );

  useEffect(() => {
    let active = true;
    const referencedIds = getOfficialExamIdsForQuestionIds([
      ...Object.keys(answers),
      ...bookmarks,
    ]);

    loadImportedQuestionsFromDB().then((loadedImported) => {
      if (!active) return;
      setImportedQuestionsCache(loadedImported);
      setImportedQuestions(loadedImported);
      setBankVersion((v) => v + 1);
    });

    // Hydrate only official exam chunks already referenced by saved answers/bookmarks
    if (referencedIds.length > 0) {
      ensureOfficialExamsLoaded(referencedIds);
    }

    return () => {
      active = false;
    };
    // Run once on mount to hydrate IndexedDB + any previously answered/bookmarked exams
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allQuestions = useMemo(() => {
    if (importedQuestions.length === 0 && officialCatalogQuestions.length === 0) {
      return MEDICAL_QUESTIONS;
    }
    const seen = new Set<string>();
    const merged: MedicalQuestion[] = [];
    for (const q of importedQuestions) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }
    for (const q of officialCatalogQuestions) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }
    for (const q of MEDICAL_QUESTIONS) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        merged.push(q);
      }
    }
    return merged;
  }, [importedQuestions, officialCatalogQuestions]);

  const importQuestions = useCallback(async (newQuestions: MedicalQuestion[]) => {
    if (newQuestions.length === 0) return 0;
    const updated = await saveImportedQuestionsToDB(newQuestions);
    setImportedQuestionsCache(updated);
    setImportedQuestions(updated);
    setBankVersion((v) => v + 1);
    return newQuestions.length;
  }, []);

  const generateAiCommentaryForQuestion = useCallback(
    async (question: MedicalQuestion): Promise<MedicalQuestion> => {
      const res = await fetch('/api/questions/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        grandeAreaId?: GrandeAreaId;
        grandeArea?: string;
        tema?: string;
        subtema?: string;
        comentarioGeral?: string;
        alternativas?: MedicalQuestion['alternativas'];
        taxaAcertoGlobal?: number;
        referencias?: string[];
        labTable?: MedicalQuestion['labTable'];
        error?: string;
      };
      if (!res.ok) {
        throw new Error(data.error || `Falha ao gerar comentário (HTTP ${res.status}).`);
      }

      const enriched: MedicalQuestion = {
        ...question,
        grandeAreaId: data.grandeAreaId ?? question.grandeAreaId,
        grandeArea: data.grandeArea ?? question.grandeArea,
        tema: data.tema ?? question.tema,
        subtema: data.subtema ?? question.subtema,
        comentarioGeral: data.comentarioGeral || question.comentarioGeral,
        alternativas:
          Array.isArray(data.alternativas) && data.alternativas.length === question.alternativas.length
            ? question.alternativas.map((orig, idx) => ({
                ...orig,
                explanation: data.alternativas![idx]?.explanation || orig.explanation,
                communityPct: data.alternativas![idx]?.communityPct ?? orig.communityPct,
              }))
            : question.alternativas,
        taxaAcertoGlobal: data.taxaAcertoGlobal ?? question.taxaAcertoGlobal,
        referencias:
          Array.isArray(data.referencias) && data.referencias.length > 0
            ? data.referencias
            : question.referencias,
        ...(data.labTable && data.labTable.length > 0 ? { labTable: data.labTable } : {}),
        needsAiCommentary: false,
        importedAt: new Date().toISOString(),
      };

      const updated = await saveImportedQuestionsToDB([enriched]);
      setImportedQuestionsCache(updated);
      setImportedQuestions(updated);
      setBankVersion((v) => v + 1);
      return enriched;
    },
    []
  );

  const deleteImportedQuestion = useCallback(async (questionId: string) => {
    const updated = await deleteImportedQuestionFromDB(questionId);
    setImportedQuestionsCache(updated);
    setImportedQuestions(updated);
    setBankVersion((v) => v + 1);
  }, []);

  const deleteImportedBatch = useCallback(async (batchKey: string) => {
    const updated = await deleteImportedBatchFromDB(batchKey);
    setImportedQuestionsCache(updated);
    setImportedQuestions(updated);
    setBankVersion((v) => v + 1);
  }, []);

  const clearImportedQuestions = useCallback(async () => {
    await clearAllImportedQuestionsFromDB();
    setImportedQuestionsCache([]);
    setImportedQuestions([]);
    setBankVersion((v) => v + 1);
  }, []);

  // Sync dark mode class on <html> and persist theme preferences
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      window.localStorage.setItem(STORAGE_KEY_THEME_MODE, themeMode);
      window.localStorage.setItem(STORAGE_KEY_THEME, darkMode ? 'dark' : 'light');
      window.localStorage.setItem(
        STORAGE_KEY_THEME_SCHEDULE,
        JSON.stringify(themeSchedule)
      );
      window.localStorage.setItem(
        STORAGE_KEY_READING_COMFORT,
        JSON.stringify(readingComfort)
      );
    } catch {
      // ignore storage quota errors
    }
  }, [darkMode, themeMode, themeSchedule, readingComfort]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_ANSWERS, answers);
  }, [answers, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_BOOKMARKS, bookmarks);
  }, [bookmarks, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_PROFILE, profile);
  }, [profile, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_FLASHCARDS, flashcards);
  }, [flashcards, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_AUTO_SRS, autoCreateFlashcardsOnError);
  }, [autoCreateFlashcardsOnError, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_REVIEWS_TODAY, reviewsTodayStats);
  }, [reviewsTodayStats, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_FSRS_RETENTION_MODE, retentionMode);
  }, [retentionMode, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_FSRS_BOARD, targetBoard);
  }, [targetBoard, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_FSRS_FUZZ, fsrsEnableFuzz);
  }, [fsrsEnableFuzz, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_FSRS_REVLOGS, fsrsReviewLogs.slice(-5000));
  }, [fsrsReviewLogs, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_DAILY_GOAL_TARGET, dailyGoalTarget);
  }, [dailyGoalTarget, safeWriteStorage]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_DAILY_GOAL_HISTORY, goalCompletedDays);
  }, [goalCompletedDays, safeWriteStorage]);

  // Simulate realistic live presence updates only when Ranking view is active
  useEffect(() => {
    if (!liveRankingEnabled) return;

    const interval = window.setInterval(() => {
      setLivePeers((prev) =>
        prev.map((peer, idx) => {
          const tickActive = Math.random() < 0.22;
          if (!tickActive) {
            return {
              ...peer,
              lastActiveSecondsAgo: Math.min(peer.lastActiveSecondsAgo + 12, 95),
            };
          }
          const answeredCorrectly = Math.random() < (idx < 4 ? 0.8 : 0.72);
          return {
            ...peer,
            questionsToday: peer.questionsToday + 1,
            correctToday: peer.correctToday + (answeredCorrectly ? 1 : 0),
            streak: answeredCorrectly ? peer.streak + 1 : 0,
            lastActiveSecondsAgo: 2,
          };
        })
      );
    }, 15000);

    return () => window.clearInterval(interval);
  }, [liveRankingEnabled]);

  const flashcardsRef = useRef<Flashcard[]>(flashcards);
  flashcardsRef.current = flashcards;

  const createFlashcardFromQuestion = useCallback(
    (question: MedicalQuestion, source: 'perola' | 'caderno_erros' = 'perola'): boolean => {
      const current = flashcardsRef.current;
      if (current.some((fc) => fc.questionId === question.id)) {
        return false;
      }
      const nextCard = buildFlashcardFromQuestion(question, source);
      const nextList = [nextCard, ...current];
      flashcardsRef.current = nextList;
      setFlashcards(nextList);
      return true;
    },
    []
  );

  const recordAnswer = useCallback(
    (
      question: MedicalQuestion,
      selectedLetter: AlternativeLetter,
      mode: StudyMode,
      timeSpentSec = 45
    ) => {
      const isCorrect = selectedLetter === question.gabaritoOficial;
      const record: UserAnswerRecord = {
        questionId: question.id,
        selectedLetter,
        isCorrect,
        answeredAt: new Date().toISOString(),
        mode,
        timeSpentSec,
      };
      setAnswers((prev) => ({
        ...prev,
        [question.id]: record,
      }));
      void syncEngine.enqueueEvents([
        {
          eventId: generateClientUuid(),
          type: 'ATTEMPT_CREATE',
          payload: {
            id: generateClientUuid(),
            questionId: question.id,
            selectedOption: selectedLetter,
            isCorrect,
            timeSpentMs: Math.max(0, Math.round(timeSpentSec * 1000)),
            answeredAt: record.answeredAt,
            clientUpdatedAt: record.answeredAt,
          },
        },
      ]);
      if (!isCorrect && autoCreateFlashcardsOnError) {
        createFlashcardFromQuestion(question, 'caderno_erros');
      }
    },
    [autoCreateFlashcardsOnError, createFlashcardFromQuestion, syncEngine]
  );

  const recordBatchAnswers = useCallback(
    (
      items: Array<{
        question: MedicalQuestion;
        selectedLetter: AlternativeLetter;
        timeSpentSec: number;
      }>
    ) => {
      const answeredAt = new Date().toISOString();
      const batchEvents: SyncOutboxEvent[] = [];
      setAnswers((prev) => {
        const next = { ...prev };
        for (const item of items) {
          const isCorrect = item.selectedLetter === item.question.gabaritoOficial;
          next[item.question.id] = {
            questionId: item.question.id,
            selectedLetter: item.selectedLetter,
            isCorrect,
            answeredAt,
            mode: 'simulado',
            timeSpentSec: item.timeSpentSec,
          };
          batchEvents.push({
            eventId: generateClientUuid(),
            type: 'ATTEMPT_CREATE',
            payload: {
              id: generateClientUuid(),
              questionId: item.question.id,
              selectedOption: item.selectedLetter,
              isCorrect,
              timeSpentMs: Math.max(0, Math.round(item.timeSpentSec * 1000)),
              answeredAt,
              clientUpdatedAt: answeredAt,
            },
          });
        }
        return next;
      });
      if (batchEvents.length > 0) {
        void syncEngine.enqueueEvents(batchEvents);
      }
      if (autoCreateFlashcardsOnError) {
        const missedQuestions = items
          .filter((item) => item.selectedLetter !== item.question.gabaritoOficial)
          .map((item) => item.question);
        if (missedQuestions.length > 0) {
          setFlashcards((prev) => {
            const existingIds = new Set(prev.map((fc) => fc.questionId));
            const additions = missedQuestions
              .filter((q) => !existingIds.has(q.id))
              .map((q) => buildFlashcardFromQuestion(q, 'caderno_erros'));
            return additions.length > 0 ? [...additions, ...prev] : prev;
          });
        }
      }
    },
    [autoCreateFlashcardsOnError]
  );

  const generateFlashcardsFromErrors = useCallback(
    (questions: MedicalQuestion[]): number => {
      const current = flashcardsRef.current;
      const existingIds = new Set(current.map((fc) => fc.questionId));
      const additions = questions
        .filter((q) => !existingIds.has(q.id))
        .map((q) => buildFlashcardFromQuestion(q, 'caderno_erros'));
      if (additions.length > 0) {
        const nextList = [...additions, ...current];
        flashcardsRef.current = nextList;
        setFlashcards(nextList);
      }
      return additions.length;
    },
    []
  );

  // Performance analytics: 100% real user answers by default, or optionally blended with demo baseline
  const analytics = useMemo(() => {
    const answerList = Object.values(answers);
    const questionMap = new Map(allQuestions.map((q) => [q.id, q]));

    const areaRows = HISTORICAL_AREA_PERFORMANCE.map((area) => {
      let extraAnswered = 0;
      let extraCorrect = 0;
      for (const ans of answerList) {
        const q = questionMap.get(ans.questionId);
        if (q && q.grandeAreaId === area.grandeAreaId) {
          extraAnswered += 1;
          if (ans.isCorrect) extraCorrect += 1;
        }
      }
      const baseAnswered = includeDemoBaseline ? area.baseAnswered : 0;
      const baseCorrect = includeDemoBaseline ? area.baseCorrect : 0;
      const totalAnswered = baseAnswered + extraAnswered;
      const totalCorrect = baseCorrect + extraCorrect;
      const studentPct =
        totalAnswered > 0 ? Number(((totalCorrect / totalAnswered) * 100).toFixed(1)) : 0;
      const delta =
        totalAnswered > 0 ? Number((studentPct - area.communityMedianPct).toFixed(1)) : 0;
      return {
        id: area.grandeAreaId,
        grandeAreaId: area.grandeAreaId,
        label: area.grandeArea,
        shortLabel: area.shortName,
        parentArea: area.grandeArea,
        answered: totalAnswered,
        correct: totalCorrect,
        studentPct,
        communityMedianPct: area.communityMedianPct,
        communityP75Pct: area.communityP75Pct,
        delta,
        status: computePerformanceStatus(delta),
      };
    });

    const knownTopics = new Set(HISTORICAL_TOPIC_PERFORMANCE.map((t) => t.tema));

    const topicRows = HISTORICAL_TOPIC_PERFORMANCE.map((topic) => {
      let extraAnswered = 0;
      let extraCorrect = 0;
      for (const ans of answerList) {
        const q = questionMap.get(ans.questionId);
        if (q && q.tema === topic.tema) {
          extraAnswered += 1;
          if (ans.isCorrect) extraCorrect += 1;
        }
      }
      const baseAnswered = includeDemoBaseline ? topic.baseAnswered : 0;
      const baseCorrect = includeDemoBaseline ? topic.baseCorrect : 0;
      const totalAnswered = baseAnswered + extraAnswered;
      const totalCorrect = baseCorrect + extraCorrect;
      const studentPct =
        totalAnswered > 0 ? Number(((totalCorrect / totalAnswered) * 100).toFixed(1)) : 0;
      const delta =
        totalAnswered > 0 ? Number((studentPct - topic.communityMedianPct).toFixed(1)) : 0;
      return {
        id: `${topic.grandeAreaId}-${topic.tema}`,
        grandeAreaId: topic.grandeAreaId,
        label: topic.tema,
        shortLabel: topic.tema,
        parentArea: topic.grandeArea,
        answered: totalAnswered,
        correct: totalCorrect,
        studentPct,
        communityMedianPct: topic.communityMedianPct,
        communityP75Pct: topic.communityP75Pct,
        delta,
        status: computePerformanceStatus(delta),
      };
    }).filter((row) => includeDemoBaseline || row.answered > 0);

    // Include newly imported topics whenever the student answers at least 1 question on them
    const dynamicTopics = new Map<
      string,
      { grandeAreaId: GrandeAreaId; grandeArea: string; tema: string; answered: number; correct: number }
    >();
    for (const ans of answerList) {
      const q = questionMap.get(ans.questionId);
      if (!q || knownTopics.has(q.tema)) continue;
      const existing = dynamicTopics.get(q.tema);
      if (existing) {
        existing.answered += 1;
        if (ans.isCorrect) existing.correct += 1;
      } else {
        dynamicTopics.set(q.tema, {
          grandeAreaId: q.grandeAreaId,
          grandeArea: q.grandeArea,
          tema: q.tema,
          answered: 1,
          correct: ans.isCorrect ? 1 : 0,
        });
      }
    }

    for (const dt of dynamicTopics.values()) {
      const parentAreaRow = areaRows.find((a) => a.grandeAreaId === dt.grandeAreaId);
      const communityMedianPct = parentAreaRow?.communityMedianPct ?? 65.0;
      const communityP75Pct = parentAreaRow?.communityP75Pct ?? 77.0;
      const studentPct =
        dt.answered > 0 ? Number(((dt.correct / dt.answered) * 100).toFixed(1)) : 0;
      const delta = Number((studentPct - communityMedianPct).toFixed(1));
      topicRows.push({
        id: `${dt.grandeAreaId}-${dt.tema}`,
        grandeAreaId: dt.grandeAreaId,
        label: dt.tema,
        shortLabel: dt.tema,
        parentArea: dt.grandeArea,
        answered: dt.answered,
        correct: dt.correct,
        studentPct,
        communityMedianPct,
        communityP75Pct,
        delta,
        status: computePerformanceStatus(delta),
      });
    }

    const totalAnswered = areaRows.reduce((acc, r) => acc + r.answered, 0);
    const totalCorrect = areaRows.reduce((acc, r) => acc + r.correct, 0);
    const overallStudentPct =
      totalAnswered > 0 ? Number(((totalCorrect / totalAnswered) * 100).toFixed(1)) : 0;
    const overallMedianPct = 65.8;
    const overallP75Pct = 77.2;
    const overallDelta =
      totalAnswered > 0 ? Number((overallStudentPct - overallMedianPct).toFixed(1)) : 0;

    let weeklyEvolution = TEMPORAL_EVOLUTION_WEEKLY;
    let monthlyEvolution = TEMPORAL_EVOLUTION_MONTHLY;

    if (includeDemoBaseline) {
      weeklyEvolution = TEMPORAL_EVOLUTION_WEEKLY.map((pt, i, arr) =>
        i === arr.length - 1
          ? { ...pt, alunoPct: overallStudentPct, questoes: 34 + answerList.length }
          : pt
      );
      monthlyEvolution = TEMPORAL_EVOLUTION_MONTHLY.map((pt, i, arr) =>
        i === arr.length - 1
          ? { ...pt, alunoPct: overallStudentPct, questoes: totalAnswered }
          : pt
      );
    } else {
      // Build real period-by-period evolution strictly from timestamped answers
      const weekBuckets = new Map<string, { label: string; sortKey: number; answered: number; correct: number }>();
      const monthBuckets = new Map<string, { label: string; sortKey: number; answered: number; correct: number }>();
      const monthNames = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

      for (const ans of answerList) {
        if (!ans.answeredAt) continue;
        const dt = new Date(ans.answeredAt);
        if (Number.isNaN(dt.getTime())) continue;

        // Start of local week (Monday)
        const dayOfWeek = (dt.getDay() + 6) % 7;
        const monday = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - dayOfWeek);
        const wKey = getLocalDateKey(monday);
        const wLabel = `${String(monday.getDate()).padStart(2, '0')}/${String(monday.getMonth() + 1).padStart(2, '0')}`;
        const wb = weekBuckets.get(wKey) ?? {
          label: wLabel,
          sortKey: monday.getTime(),
          answered: 0,
          correct: 0,
        };
        wb.answered += 1;
        if (ans.isCorrect) wb.correct += 1;
        weekBuckets.set(wKey, wb);

        // Local month bucket
        const mKey = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}`;
        const mb = monthBuckets.get(mKey) ?? {
          label: `${monthNames[dt.getMonth()]}/${String(dt.getFullYear()).slice(-2)}`,
          sortKey: new Date(dt.getFullYear(), dt.getMonth(), 1).getTime(),
          answered: 0,
          correct: 0,
        };
        mb.answered += 1;
        if (ans.isCorrect) mb.correct += 1;
        monthBuckets.set(mKey, mb);
      }

      weeklyEvolution = Array.from(weekBuckets.values())
        .sort((a, b) => a.sortKey - b.sortKey)
        .slice(-8)
        .map((b) => ({
          period: b.label,
          alunoPct: Number(((b.correct / b.answered) * 100).toFixed(1)),
          medianaPct: overallMedianPct,
          p75Pct: overallP75Pct,
          questoes: b.answered,
        }));

      monthlyEvolution = Array.from(monthBuckets.values())
        .sort((a, b) => a.sortKey - b.sortKey)
        .slice(-6)
        .map((b) => ({
          period: b.label,
          alunoPct: Number(((b.correct / b.answered) * 100).toFixed(1)),
          medianaPct: overallMedianPct,
          p75Pct: overallP75Pct,
          questoes: b.answered,
        }));
    }

    const questionById = new Map(allQuestions.map((q) => [q.id, q]));
    const weightedByArea = aggregateWeightedAreaPerformance(
      Object.values(answers),
      questionById
    );
    const recentWeightedAreaRows = areaRows.map((row) => {
      const w = weightedByArea.get(row.grandeAreaId);
      if (!w || w.effectiveTotal <= 0) {
        return row;
      }
      const studentPct = Number(w.weightedAccuracyPct.toFixed(1));
      const delta = Number((studentPct - row.communityMedianPct).toFixed(1));
      return {
        ...row,
        answered: Math.round(w.effectiveTotal),
        correct: Math.round(w.effectiveCorrect),
        studentPct,
        delta,
        status: computePerformanceStatus(delta),
      };
    });

    return {
      totalAnswered,
      totalCorrect,
      overallStudentPct,
      overallMedianPct,
      overallP75Pct,
      overallDelta,
      overallStatus: computePerformanceStatus(overallDelta),
      areaRows,
      recentWeightedAreaRows,
      topicRows,
      weeklyEvolution,
      monthlyEvolution,
    };
  }, [answers, allQuestions, includeDemoBaseline]);

  // Topic & area accuracy/median lookup maps for Dynamic FSRS Retention calibration
  const { userAccuracyByTopic, communityMedianByTopic } = useMemo(() => {
    const userMap: Record<string, number> = {};
    const medianMap: Record<string, number> = {};

    for (const row of analytics.topicRows) {
      userMap[row.label] = row.studentPct;
      medianMap[row.label] = row.communityMedianPct;
    }
    for (const row of analytics.areaRows) {
      if (!(row.label in userMap)) {
        userMap[row.label] = row.studentPct;
        medianMap[row.label] = row.communityMedianPct;
      }
    }

    return { userAccuracyByTopic: userMap, communityMedianByTopic: medianMap };
  }, [analytics.topicRows, analytics.areaRows]);

  const reviewFlashcard = useCallback(
    (cardId: string, rating: SrsRating) => {
      const targetCard = flashcards.find((c) => c.id === cardId);
      if (!targetCard) return;

      const now = new Date();
      const nowIso = now.toISOString();
      const today = getLocalDateKey(now);

      const calibrated = resolveCardRetention(
        targetCard,
        retentionMode,
        targetBoard,
        userAccuracyByTopic,
        communityMedianByTopic
      );
      const outcome = computeNextFsrsState(
        targetCard,
        rating,
        calibrated.retention,
        now,
        { enableFuzz: fsrsEnableFuzz }
      );

      const updatedCard: Flashcard = {
        ...targetCard,
        stability: outcome.stability,
        difficulty: outcome.difficulty,
        elapsed_days: outcome.elapsed_days,
        scheduled_days: outcome.scheduled_days,
        learning_steps: outcome.learning_steps,
        reps: outcome.reps,
        lapses: outcome.lapses,
        state: outcome.state,
        dueAt: outcome.dueAt,
        lastReviewedAt: nowIso,
      };

      const logEntry: FsrsReviewLogEntry = {
        cardId: targetCard.id,
        rating,
        state: outcome.state,
        stability: outcome.stability,
        difficulty: outcome.difficulty,
        elapsed_days: outcome.elapsed_days,
        scheduled_days: outcome.scheduled_days,
        desiredRetention: calibrated.retention,
        reviewedAt: nowIso,
      };

      setFlashcards((prev) =>
        prev.map((card) => (card.id === cardId ? updatedCard : card))
      );

      setLastFlashcardUndo({
        previousCard: targetCard,
        rating,
        reviewDate: today,
      });

      setFsrsReviewLogs((prev) => [...prev.slice(-4999), logEntry]);

      const stateNum = FSRS_STATE_TO_NUM[outcome.state] ?? 0;
      if (targetCard.questionId) {
        void syncEngine.enqueueEvents([
          {
            eventId: generateClientUuid(),
            type: 'FSRS_STATE_UPSERT',
            payload: {
              questionId: targetCard.questionId,
              stability: outcome.stability,
              difficulty: outcome.difficulty,
              elapsedDays: outcome.elapsed_days,
              scheduledDays: outcome.scheduled_days,
              reps: outcome.reps,
              lapses: outcome.lapses,
              state: stateNum,
              due: outcome.dueAt,
              lastReview: nowIso,
              clientUpdatedAt: nowIso,
            },
          },
          {
            eventId: generateClientUuid(),
            type: 'FSRS_LOG_CREATE',
            payload: {
              id: generateClientUuid(),
              questionId: targetCard.questionId,
              rating,
              state: stateNum,
              due: outcome.dueAt,
              stability: outcome.stability,
              difficulty: outcome.difficulty,
              elapsedDays: outcome.elapsed_days,
              lastElapsedDays: targetCard.elapsed_days ?? 0,
              scheduledDays: outcome.scheduled_days,
              reviewedAt: nowIso,
            },
          },
        ]);
      }

      setReviewsTodayStats((prev) => {
        const base =
          prev.date === today ? prev : { date: today, total: 0, passed: 0 };
        return {
          date: today,
          total: base.total + 1,
          passed: base.passed + (rating >= 2 ? 1 : 0),
        };
      });
    },
    [
      flashcards,
      retentionMode,
      targetBoard,
      userAccuracyByTopic,
      communityMedianByTopic,
      fsrsEnableFuzz,
    ]
  );

  const undoLastFlashcardReview = useCallback(() => {
    if (!lastFlashcardUndo) return;
    const { previousCard, rating, reviewDate } = lastFlashcardUndo;
    setFlashcards((prev) =>
      prev.map((card) => (card.id === previousCard.id ? previousCard : card))
    );
    setFsrsReviewLogs((prev) =>
      prev.length > 0 ? prev.slice(0, prev.length - 1) : prev
    );
    setReviewsTodayStats((prev) => {
      if (prev.date !== reviewDate) return prev;
      return {
        date: prev.date,
        total: Math.max(0, prev.total - 1),
        passed: Math.max(0, prev.passed - (rating >= 2 ? 1 : 0)),
      };
    });
    setLastFlashcardUndo(null);
  }, [lastFlashcardUndo]);

  const createCustomFlashcard = useCallback(
    (payload: {
      grandeAreaId: GrandeAreaId;
      tema: string;
      front: string;
      backPearl: string;
    }) => {
      const areaMeta = GRANDES_AREAS.find((a) => a.id === payload.grandeAreaId);
      const nowIso = new Date().toISOString();
      const newCard: Flashcard = {
        id: `fc-manual-${Date.now()}`,
        grandeAreaId: payload.grandeAreaId,
        grandeArea: areaMeta?.name ?? 'Clínica Médica',
        tema: payload.tema.trim() || 'Revisão Geral',
        front: payload.front.trim(),
        backPearl: payload.backPearl.trim(),
        source: 'manual',
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
      setFlashcards((prev) => [newCard, ...prev]);
    },
    []
  );

  const deleteFlashcard = useCallback((cardId: string) => {
    setFlashcards((prev) => prev.filter((fc) => fc.id !== cardId));
  }, []);

  const toggleBookmark = useCallback(
    (questionId: string) => {
      let nextDeleted = false;
      setBookmarks((prev) => {
        const exists = prev.includes(questionId);
        nextDeleted = exists;
        return exists
          ? prev.filter((id) => id !== questionId)
          : [...prev, questionId];
      });
      void syncEngine.enqueueEvents([
        {
          eventId: generateClientUuid(),
          type: 'BOOKMARK_UPSERT',
          payload: {
            questionId,
            isDeleted: nextDeleted,
            clientUpdatedAt: new Date().toISOString(),
          },
        },
      ]);
    },
    [syncEngine]
  );

  const updateProfile = useCallback(
    (patch: Partial<UserProfile>) => {
      setProfile((prev) => {
        const next = { ...prev, ...patch };
        void syncEngine.enqueueEvents([
          {
            eventId: generateClientUuid(),
            type: 'PROFILE_UPSERT',
            payload: {
              id: syncEngine.studentId,
              fullName: next.realName,
              targetSpecialty: next.targetSpecialty,
              targetInstitutions: next.targetInstitution
                ? [next.targetInstitution]
                : [],
              dailyGoal: dailyGoalTarget,
              clientUpdatedAt: new Date().toISOString(),
            },
          },
        ]);
        return next;
      });
    },
    [dailyGoalTarget, syncEngine]
  );

  const generateRandomPseudonym = useCallback(() => {
    const candidates = MEDICAL_CODENAMES.filter((c) => c !== profile.pseudonym);
    const chosen =
      candidates[Math.floor(Math.random() * candidates.length)] || 'FutureR1_Med';
    setProfile((prev) => ({
      ...prev,
      pseudonym: chosen,
      usePseudonym: true,
    }));
  }, [profile.pseudonym]);

  const filterQuestions = useCallback(
    (filters: QuestionFilters): MedicalQuestion[] => {
      const q = filters.search.trim().toLowerCase();
      const examTokens = filters.examSearch
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(/[\s/-]+/)
        .filter(Boolean);

      return allQuestions.filter((item) => {
        if (filters.excluirAnuladasDesatualizadas && (item.anulada || item.desatualizada)) {
          return false;
        }
        if (filters.comImagens && !item.clinicalImage) {
          return false;
        }
        if (examTokens.length > 0) {
          const examHaystack = [
            item.instituicao,
            item.instituicao.replace(/-/g, ' '),
            String(item.ano),
            item.banca,
            item.tipoProva,
            item.estado,
            item.code,
          ]
            .join(' ')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');

          const matchesAllTokens = examTokens.every((token) =>
            examHaystack.includes(token)
          );
          if (!matchesAllTokens) return false;
        }
        if (filters.grandeAreaId && item.grandeAreaId !== filters.grandeAreaId) {
          return false;
        }
        if (filters.temas && filters.temas.length > 0) {
          const normalize = (v: string) =>
            v
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .trim();
          const itemTemaNorm = normalize(item.tema);
          const itemSubtemaNorm = normalize(item.subtema);
          const matchesAnyTopic = filters.temas.some((t) => {
            const tNorm = normalize(t);
            return (
              tNorm === itemTemaNorm ||
              itemTemaNorm.includes(tNorm) ||
              tNorm.includes(itemTemaNorm) ||
              itemSubtemaNorm.includes(tNorm)
            );
          });
          if (!matchesAnyTopic) return false;
        } else if (filters.tema && !matchesTaxonomyLabel(item.tema, filters.tema)) {
          return false;
        }
        if (filters.subtema && !matchesTaxonomyLabel(item.subtema, filters.subtema)) {
          return false;
        }
        if (filters.banca && item.banca !== filters.banca) {
          return false;
        }
        if (filters.instituicoes && filters.instituicoes.length > 0) {
          if (!filters.instituicoes.includes(item.instituicao)) return false;
        } else if (filters.instituicao && item.instituicao !== filters.instituicao) {
          return false;
        }
        if (filters.regiao && item.regiao !== filters.regiao) {
          return false;
        }
        if (filters.ano && String(item.ano) !== filters.ano) {
          return false;
        }
        if (filters.dificuldade) {
          const diff = computeDifficulty(item.taxaAcertoGlobal);
          if (diff !== filters.dificuldade) return false;
        }

        const ans = answers[item.id];
        const isBookmarked = bookmarks.includes(item.id);
        if (!matchesStudentStatusFilter(filters.status, isBookmarked, ans)) {
          return false;
        }

        if (q && !matchesTaxonomySearch(item, filters.search)) {
          return false;
        }

        return true;
      });
    },
    [allQuestions, answers, bookmarks]
  );

  // Analytics block hoisted above reviewFlashcard for live dynamic FSRS calibration

  // Rankings Diário ao Vivo, Semanal e Mensal (apenas quem respondeu >= 1 questão no período)
  const liveRanking = useMemo(() => {
    const sessionAnswers = Object.values(answers).sort(
      (a, b) => new Date(b.answeredAt).getTime() - new Date(a.answeredAt).getTime()
    );
    const periodCounts = countUserAnswersByPeriod(answers);

    let streak = 0;
    if (sessionAnswers.length > 0) {
      let currentRun = 0;
      for (const item of sessionAnswers) {
        if (item.isCorrect) currentRun += 1;
        else break;
      }
      streak = currentRun;
    }

    const currentUserEntry: LiveRankingUser = {
      id: profile.id,
      realName: profile.realName,
      pseudonym: profile.pseudonym,
      usePseudonym: profile.usePseudonym,
      targetInstitution: profile.targetInstitution,
      avatarInitials: profile.avatarInitials,
      questionsToday: periodCounts.today,
      correctToday: periodCounts.correctToday,
      questionsWeek: periodCounts.week,
      correctWeek: periodCounts.correctWeek,
      questionsMonth: periodCounts.month,
      correctMonth: periodCounts.correctMonth,
      streak,
      currentArea: profile.targetSpecialty,
      isOnline: true,
      isCurrentUser: true,
      lastActiveSecondsAgo: 1,
    };

    const allParticipants = [...livePeers, currentUserEntry];
    const dailyRanked = buildPeriodRanking(allParticipants, 'daily');
    const weeklyRanked = buildPeriodRanking(allParticipants, 'weekly');
    const monthlyRanked = buildPeriodRanking(allParticipants, 'monthly');

    const fallbackCurrentUser = {
      ...currentUserEntry,
      rank: dailyRanked.length + 1,
      displayName: currentUserEntry.usePseudonym
        ? currentUserEntry.pseudonym
        : currentUserEntry.realName,
      questionsInPeriod: periodCounts.today,
      correctInPeriod: periodCounts.correctToday,
      accuracyPct: 0,
      weightedScore: 0,
    };

    const currentUserDaily =
      dailyRanked.find((r) => r.isCurrentUser) ?? fallbackCurrentUser;

    return {
      all: dailyRanked,
      top10: dailyRanked.slice(0, 10),
      currentUser: currentUserDaily,
      onlineTotal: 142 + dailyRanked.length,
      byPeriod: {
        daily: {
          all: dailyRanked,
          currentUser: dailyRanked.find((r) => r.isCurrentUser) ?? null,
        },
        weekly: {
          all: weeklyRanked,
          currentUser: weeklyRanked.find((r) => r.isCurrentUser) ?? null,
        },
        monthly: {
          all: monthlyRanked,
          currentUser: monthlyRanked.find((r) => r.isCurrentUser) ?? null,
        },
      },
    };
  }, [answers, livePeers, profile]);

  const errorNotebookQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const ans = answers[q.id];
      const missed = ans && !ans.isCorrect;
      const saved = bookmarks.includes(q.id);
      return missed || saved;
    });
  }, [allQuestions, answers, bookmarks]);

  const flashcardQuestionIds = useMemo(
    () =>
      new Set(
        flashcards
          .map((fc) => fc.questionId)
          .filter((id): id is string => Boolean(id))
      ),
    [flashcards]
  );

  const dueFlashcardsCount = useMemo(
    () => flashcards.filter((fc) => isCardDueToday(fc)).length,
    [flashcards]
  );

  // Daily question goal progress (real questions answered on the current local calendar day)
  const todayQuestionCounts = useMemo(() => {
    let answered = 0;
    let correct = 0;
    for (const ans of Object.values(answers)) {
      if (!ans.answeredAt) continue;
      const ansDate = new Date(ans.answeredAt);
      if (Number.isNaN(ansDate.getTime())) continue;
      if (getLocalDateKey(ansDate) === todayDateKey) {
        answered += 1;
        if (ans.isCorrect) correct += 1;
      }
    }
    return { answered, correct };
  }, [answers, todayDateKey]);

  const isGoalCompletedToday = todayQuestionCounts.answered >= dailyGoalTarget;

  useEffect(() => {
    setGoalCompletedDays((prev) => {
      const currentFlag = Boolean(prev[todayDateKey]);
      if (currentFlag === isGoalCompletedToday) return prev;
      const next = { ...prev };
      if (isGoalCompletedToday) {
        next[todayDateKey] = true;
      } else {
        delete next[todayDateKey];
      }
      return next;
    });
  }, [isGoalCompletedToday, todayDateKey]);

  const dailyGoal: DailyGoalProgress = useMemo(() => {
    const answeredToday = todayQuestionCounts.answered;
    const correctToday = todayQuestionCounts.correct;
    const completed = answeredToday >= dailyGoalTarget;
    const pct =
      dailyGoalTarget > 0
        ? Math.min(100, Math.round((answeredToday / dailyGoalTarget) * 100))
        : 0;
    const remaining = Math.max(0, dailyGoalTarget - answeredToday);

    // Count consecutive days with goal achieved ending today (or yesterday if today is still in progress)
    let streakDays = 0;
    let cursor = completed
      ? todayDateKey
      : getPreviousLocalDateKey(todayDateKey);
    while (
      (cursor === todayDateKey && completed) ||
      Boolean(goalCompletedDays[cursor])
    ) {
      streakDays += 1;
      cursor = getPreviousLocalDateKey(cursor);
      if (streakDays > 3650) break;
    }

    return {
      target: dailyGoalTarget,
      answeredToday,
      correctToday,
      pct,
      remaining,
      completed,
      streakDays,
      todayKey: todayDateKey,
    };
  }, [todayQuestionCounts, dailyGoalTarget, todayDateKey, goalCompletedDays]);

  const [seenAchievementIds, setSeenAchievementIds] = useState<string[]>(() =>
    safeReadStorage<string[]>(STORAGE_KEY_SEEN_ACHIEVEMENTS, [])
  );
  const [pendingAchievementQueue, setPendingAchievementQueue] = useState<
    GamificationAchievement[]
  >([]);

  useEffect(() => {
    safeWriteStorage(STORAGE_KEY_SEEN_ACHIEVEMENTS, seenAchievementIds);
  }, [seenAchievementIds, safeWriteStorage]);

  const gamification: GamificationSummary = useMemo(() => {
    const completedGoalDaysCount = Object.values(goalCompletedDays).filter(Boolean).length;
    const core = computeGamificationCore({
      answers,
      questions: allQuestions,
      fsrsReviewCount: fsrsReviewLogs.length,
      completedGoalDaysCount,
      simulados: simuladoHistory,
      dailyGoal,
    });

    // Identify weakest area by real mastery (prefer areas with answers, fallback to lowest answered)
    const sortedAreas = [...core.areaMastery].sort((a, b) => {
      if (a.answered > 0 && b.answered > 0) {
        if (a.accuracyPct !== b.accuracyPct) return a.accuracyPct - b.accuracyPct;
        return a.answered - b.answered;
      }
      if (a.answered === 0 && b.answered === 0) return 0;
      return a.answered === 0 ? -1 : 1;
    });
    const weakestAreaId = sortedAreas[0]?.grandeAreaId ?? 'clinica_medica';

    // Compute weekly real activity window (last 7 local calendar days)
    const now = new Date();
    const weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).getTime();
    const questionById = new Map(allQuestions.map((q) => [q.id, q]));

    let answeredThisWeekCount = 0;
    let weakAreaAnsweredToday = 0;
    let totalCorrect = 0;
    const answerList = Object.values(answers);

    for (const ans of answerList) {
      if (ans.isCorrect) totalCorrect += 1;
      if (!ans.answeredAt) continue;
      const dt = new Date(ans.answeredAt);
      if (Number.isNaN(dt.getTime())) continue;
      if (dt.getTime() >= weekStart) {
        answeredThisWeekCount += 1;
      }
      if (getLocalDateKey(dt) === todayDateKey) {
        const q = questionById.get(ans.questionId);
        if (q && q.grandeAreaId === weakestAreaId) {
          weakAreaAnsweredToday += 1;
        }
      }
    }

    const simuladosThisWeekCount = simuladoHistory.filter((s) => {
      const parsed = Date.parse(s.date);
      return Number.isFinite(parsed) && parsed >= weekStart;
    }).length;

    const reviewsTodayCount =
      reviewsTodayStats.date === todayDateKey ? reviewsTodayStats.total : 0;

    const missions = computeGamificationMissions({
      core,
      dailyGoal,
      reviewsTodayCount,
      dueFlashcardsCount,
      answeredThisWeekCount,
      simuladosThisWeekCount,
      weakAreaAnsweredToday,
      weakestAreaId,
    });

    const achievements = computeGamificationAchievements({
      core,
      totalAnswered: answerList.length,
      totalCorrect,
      fsrsReviewCount: fsrsReviewLogs.length,
      simuladoCount: simuladoHistory.length,
      errorNotebookReviewedCount: 0,
    });

    const unlockedCount = achievements.filter((b) => b.unlocked).length;

    return {
      core,
      missions,
      achievements,
      unlockedCount,
      totalAchievements: achievements.length,
    };
  }, [
    answers,
    allQuestions,
    fsrsReviewLogs.length,
    goalCompletedDays,
    simuladoHistory,
    dailyGoal,
    todayDateKey,
    reviewsTodayStats,
    dueFlashcardsCount,
  ]);

  useEffect(() => {
    const newlyUnlocked = diffNewlyUnlockedAchievements(
      gamification.achievements,
      seenAchievementIds
    );
    if (newlyUnlocked.length === 0) return;

    setSeenAchievementIds((prev) => {
      const merged = new Set(prev);
      for (const b of newlyUnlocked) merged.add(b.id);
      return Array.from(merged);
    });
    setPendingAchievementQueue((prev) => [...prev, ...newlyUnlocked]);
  }, [gamification.achievements, seenAchievementIds]);

  const dismissPendingAchievement = useCallback(() => {
    setPendingAchievementQueue((prev) => prev.slice(1));
  }, []);

  const diagnosticUnlocked = useMemo(
    () => hasCompletedDiagnostic(diagnosticState, answers, allQuestions),
    [diagnosticState, answers, allQuestions]
  );

  const startDiagnosticExam = useCallback(
    async (
      boardOrBoards: DiagnosticBoardOption | DiagnosticBoardOption[]
    ): Promise<MedicalQuestion[]> => {
      await ensureAllOfficialExamsLoaded();
      const pool = getAllBankQuestions();
      const boards = normalizeDiagnosticBoards(boardOrBoards);
      const primaryBoard = boards[0];
      const selection = selectDiagnosticQuestions(pool, boards);

      setDiagnosticState({
        status: 'in_progress',
        selectedBoard: primaryBoard,
        selectedBoards: boards,
        questionIds: selection.questionIds,
        startedAt: new Date().toISOString(),
      });

      const mappedBoard: ExamBoard =
        primaryBoard === 'UEPA' || primaryBoard === 'ENARE'
          ? primaryBoard
          : 'GERAL';
      setTargetBoard(mappedBoard);
      if (primaryBoard !== 'GERAL') {
        setProfile((prev) => ({ ...prev, targetInstitution: primaryBoard }));
      }

      return selection.questions;
    },
    [ensureAllOfficialExamsLoaded]
  );

  const completeDiagnosticExam = useCallback(
    (
      diagnosticQuestions: MedicalQuestion[],
      drafts: Record<string, AlternativeLetter>,
      timesSec: Record<string, number>
    ) => {
      const batch = diagnosticQuestions
        .filter((q) => Boolean(drafts[q.id]))
        .map((q) => ({
          question: q,
          selectedLetter: drafts[q.id],
          timeSpentSec: Math.max(3, Math.min(900, timesSec[q.id] ?? 60)),
        }));

      if (batch.length > 0) {
        recordBatchAnswers(batch);
      }

      const evaluation = evaluateDiagnosticCompletion(diagnosticQuestions, drafts);
      const now = new Date();
      const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
        2,
        '0'
      )}-${String(now.getDate()).padStart(2, '0')}`;

      addSimuladoRecord({
        title: `Simulado Diagnóstico Inicial — ${diagnosticState.selectedBoard} (${evaluation.validTotal}q)`,
        date: todayIso,
        validCorrect: evaluation.validCorrect,
        validTotal: Math.max(1, evaluation.validTotal),
        scaleType: 'bruta_100',
        estimatedScore: evaluation.scorePct,
        source: 'app_simulado',
      });

      setIncludeDemoBaseline(false);
      setDiagnosticState((prev) => ({
        ...prev,
        status: 'completed',
        questionIds: diagnosticQuestions.map((q) => q.id),
        completedAt: now.toISOString(),
        scorePct: evaluation.scorePct,
      }));
    },
    [addSimuladoRecord, diagnosticState.selectedBoard, recordBatchAnswers]
  );

  const resetProgress = useCallback(() => {
    setAnswers({});
    setDiagnosticState(DEFAULT_DIAGNOSTIC_STATE);
  }, []);

  const applyRemoteSyncSnapshot = useCallback((snapshot: SyncPullResponse) => {
    if (snapshot.profile) {
      const remoteProfile = snapshot.profile;
      setProfile((prev) => ({
        ...prev,
        realName: remoteProfile.fullName?.trim() || prev.realName,
        targetSpecialty: remoteProfile.targetSpecialty?.trim() || prev.targetSpecialty,
        targetInstitution:
          remoteProfile.targetInstitutions?.[0]?.trim() || prev.targetInstitution,
      }));
      if (typeof remoteProfile.dailyGoal === 'number' && remoteProfile.dailyGoal >= 1) {
        setDailyGoalTargetState(Math.min(300, Math.max(1, Math.round(remoteProfile.dailyGoal))));
      }
    }

    if (Array.isArray(snapshot.attempts) && snapshot.attempts.length > 0) {
      setAnswers((prev) => {
        const next = { ...prev };
        for (const attempt of snapshot.attempts) {
          const letter = String(attempt.selectedOption || '').toUpperCase();
          if (
            letter !== 'A' &&
            letter !== 'B' &&
            letter !== 'C' &&
            letter !== 'D' &&
            letter !== 'E'
          ) {
            continue;
          }
          const existing = next[attempt.questionId];
          const incomingTime = Date.parse(attempt.answeredAt || '') || 0;
          const existingTime = existing ? Date.parse(existing.answeredAt || '') || 0 : -1;
          if (!existing || incomingTime >= existingTime) {
            next[attempt.questionId] = {
              questionId: attempt.questionId,
              selectedLetter: letter as AlternativeLetter,
              isCorrect: Boolean(attempt.isCorrect),
              answeredAt: attempt.answeredAt || new Date().toISOString(),
              mode: attempt.mockExamId ? 'simulado' : 'estudo',
              timeSpentSec: Math.max(0, Math.round((attempt.timeSpentMs || 0) / 1000)),
            };
          }
        }
        return next;
      });
    }

    if (Array.isArray(snapshot.bookmarks) && snapshot.bookmarks.length > 0) {
      setBookmarks((prev) => {
        const set = new Set(prev);
        for (const bm of snapshot.bookmarks) {
          if (bm.isDeleted) {
            set.delete(bm.questionId);
          } else {
            set.add(bm.questionId);
          }
        }
        return Array.from(set);
      });
    }
  }, []);

  const syncWithCloud = useCallback(
    async (studentOverride?: {
      id: string;
      fullName?: string;
      email?: string;
      targetSpecialty?: string | null;
      targetInstitution?: string | null;
      dailyGoal?: number;
      avatarInitials?: string;
    }): Promise<SyncPullResponse | null> => {
      const targetStudentId = studentOverride?.id || syncEngine.studentId;
      if (studentOverride) {
        setProfile((prev) => ({
          ...prev,
          realName: studentOverride.fullName?.trim() || prev.realName,
          avatarInitials: studentOverride.avatarInitials || prev.avatarInitials,
          targetSpecialty: studentOverride.targetSpecialty?.trim() || prev.targetSpecialty,
          targetInstitution: studentOverride.targetInstitution?.trim() || prev.targetInstitution,
        }));
        if (typeof studentOverride.dailyGoal === 'number' && studentOverride.dailyGoal >= 1) {
          setDailyGoalTargetState(
            Math.min(300, Math.max(1, Math.round(studentOverride.dailyGoal)))
          );
        }
      }

      const nowIso = new Date().toISOString();
      const payload: SyncBootstrapRequest = {
        studentId: targetStudentId,
        profile: {
          id: targetStudentId,
          email: studentOverride?.email ?? null,
          fullName: studentOverride?.fullName ?? profile.realName,
          targetSpecialty: studentOverride?.targetSpecialty ?? profile.targetSpecialty,
          targetInstitutions:
            studentOverride?.targetInstitution || profile.targetInstitution
              ? [studentOverride?.targetInstitution || profile.targetInstitution]
              : [],
          dailyGoal: studentOverride?.dailyGoal ?? dailyGoalTarget,
          clientUpdatedAt: nowIso,
        },
        attempts: Object.values(answers).map((ans) => ({
          id: generateClientUuid(),
          questionId: ans.questionId,
          selectedOption: ans.selectedLetter,
          isCorrect: ans.isCorrect,
          timeSpentMs: Math.round((ans.timeSpentSec || 0) * 1000),
          answeredAt: ans.answeredAt || nowIso,
          clientUpdatedAt: ans.answeredAt || nowIso,
        })),
        reviewStates: flashcards.map((fc) => ({
          cardId: fc.id,
          questionId: fc.questionId ?? null,
          cardPayload: {
            grandeAreaId: fc.grandeAreaId,
            grandeArea: fc.grandeArea,
            tema: fc.tema,
            front: fc.front,
            backPearl: fc.backPearl,
            source: fc.source,
          },
          stability: fc.stability,
          difficulty: fc.difficulty,
          elapsedDays: fc.elapsed_days,
          scheduledDays: fc.scheduled_days,
          reps: fc.reps,
          lapses: fc.lapses,
          state: FSRS_STATE_TO_NUM[fc.state] ?? 0,
          due: fc.dueAt,
          lastReview: fc.lastReviewedAt ?? null,
          clientUpdatedAt: fc.lastReviewedAt ?? nowIso,
        })),
        bookmarks: bookmarks.map((qId) => ({
          questionId: qId,
          isDeleted: false,
          clientUpdatedAt: nowIso,
        })),
        mockExams: [],
      };

      await syncEngine.flushNow();
      const snapshot = await syncEngine.bootstrapSync(payload);
      if (snapshot && snapshot.mode === 'postgres') {
        applyRemoteSyncSnapshot(snapshot);
      }
      return snapshot;
    },
    [
      answers,
      applyRemoteSyncSnapshot,
      bookmarks,
      dailyGoalTarget,
      flashcards,
      profile.realName,
      profile.targetInstitution,
      profile.targetSpecialty,
      syncEngine,
    ]
  );

  return {
    darkMode,
    setDarkMode,
    themeMode,
    setThemeMode,
    themeSchedule,
    setThemeSchedule,
    readingComfort,
    setReadingComfort,
    dailyGoal,
    setDailyGoalTarget,
    answers,
    bookmarks,
    profile,
    flashcards,
    flashcardQuestionIds,
    dueFlashcardsCount,
    reviewsTodayStats,
    retentionMode,
    setRetentionMode,
    targetBoard,
    setTargetBoard,
    fsrsEnableFuzz,
    setFsrsEnableFuzz,
    fsrsReviewLogCount: fsrsReviewLogs.length,
    canUndoFlashcardReview: lastFlashcardUndo !== null,
    undoLastFlashcardReview,
    userAccuracyByTopic,
    communityMedianByTopic,
    autoCreateFlashcardsOnError,
    setAutoCreateFlashcardsOnError,
    recordAnswer,
    recordBatchAnswers,
    toggleBookmark,
    updateProfile,
    generateRandomPseudonym,
    createFlashcardFromQuestion,
    generateFlashcardsFromErrors,
    reviewFlashcard,
    createCustomFlashcard,
    deleteFlashcard,
    filterQuestions,
    analytics,
    includeDemoBaseline,
    setIncludeDemoBaseline,
    gamification,
    pendingAchievement: pendingAchievementQueue[0] ?? null,
    dismissPendingAchievement,
    liveRanking,
    errorNotebookQuestions,
    resetProgress,
    allQuestions,
    importedQuestions,
    officialCatalogQuestions,
    loadedOfficialExamIds,
    allOfficialExamsLoaded: areAllOfficialExamsLoaded(),
    catalogLoading: catalogLoadingCount > 0,
    ensureExamsLoadedForFilters,
    ensureAllOfficialExamsLoaded,
    ensureExamLoadedForQuestionId,
    bankVersion,
    importQuestions,
    generateAiCommentaryForQuestion,
    deleteImportedQuestion,
    deleteImportedBatch,
    clearImportedQuestions,
    simuladoHistory,
    cutoffTarget,
    addSimuladoRecord,
    deleteSimuladoRecord,
    updateCutoffTarget,
    restoreExampleSimulados,
    storageQuotaExceeded,
    dismissStorageQuotaWarning: () => setStorageQuotaExceeded(false),
    syncStatus: syncEngine.syncStatus,
    pendingSyncCount: syncEngine.pendingCount,
    lastSyncedAt: syncEngine.lastSyncedAt,
    flushSyncNow: syncEngine.flushNow,
    syncWithCloud,
    diagnosticState,
    diagnosticUnlocked,
    startDiagnosticExam,
    completeDiagnosticExam,
  };
}
