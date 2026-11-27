/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { AlertTriangle, ArrowLeft, Loader2, RotateCcw, SearchX, X } from 'lucide-react';
import type {
  ActiveTab,
  AlternativeLetter,
  GrandeAreaId,
  MedicalQuestion,
  QuestionFilters,
  StudyMode,
} from './types/medical';
import {
  canFinishDiagnostic,
  type DiagnosticBoardOption,
} from './lib/diagnosticExam';
import {
  DEFAULT_FILTERS,
  createSingleSubmissionGuard,
  useMedR1Store,
} from './hooks/useMedR1Store';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { useAuthSession } from './hooks/useAuthSession';
import { AuthModal } from './components/auth/AuthModal';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import type { CommandPaletteAction } from './lib/commandPalette';
import {
  FilterPanel,
  countActiveQuestionFilters,
} from './components/questions/FilterPanel';
import { SimuladoBar } from './components/questions/SimuladoBar';
import {
  BatchFinishModal,
  buildBatchFinishSummary,
  type BatchFinishSummary,
} from './components/questions/BatchFinishModal';
import { ArenaHomeView } from './components/analytics/ArenaHomeView';
import { RoutineConfigModal } from './components/analytics/RoutineConfigModal';
import { AchievementToast } from './components/gamification/AchievementToast';
import { GamificationHubModal } from './components/gamification/GamificationHubModal';
import type { GamificationMission } from './lib/gamificationChallenges';
import { Button } from './components/ui/Button';
import { shouldConfirmLeaveSimulado } from './lib/navigationState';
import { buildNavigationUrl, parseNavigationUrl } from './lib/navigationUrl';
import { cn } from './lib/utils';

// Lazy-loaded heavy views & modals so the initial bundle stays fast
const QuestionCard = lazy(() =>
  import('./components/questions/QuestionCard').then((m) => ({
    default: m.QuestionCard,
  }))
);
const PerformanceDashboard = lazy(() =>
  import('./components/analytics/PerformanceDashboard').then((m) => ({
    default: m.PerformanceDashboard,
  }))
);
const LiveRankingPage = lazy(() =>
  import('./components/ranking/LiveRankingPage').then((m) => ({
    default: m.LiveRankingPage,
  }))
);
const ErrorNotebookView = lazy(() =>
  import('./components/notebook/ErrorNotebookView').then((m) => ({
    default: m.ErrorNotebookView,
  }))
);
const FlashcardsView = lazy(() =>
  import('./components/flashcards/FlashcardsView').then((m) => ({
    default: m.FlashcardsView,
  }))
);
const QuestionImporterView = lazy(() =>
  import('./components/importer/QuestionImporterView').then((m) => ({
    default: m.QuestionImporterView,
  }))
);
const CommandPaletteModal = lazy(() =>
  import('./components/layout/CommandPaletteModal').then((m) => ({
    default: m.CommandPaletteModal,
  }))
);

function ViewLoadingFallback({ label = 'Carregando módulo...' }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex min-h-[280px] flex-col items-center justify-center gap-3 rounded-2xl border border-black/5 bg-white/80 p-10 text-center dark:border-white/[0.08] dark:bg-white/[0.03]"
    >
      <Loader2
        size={22}
        strokeWidth={1.5}
        className="animate-spin text-[#007AFF] dark:text-sky-400"
      />
      <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default function App() {
  const initialRoute = useMemo(() => {
    try {
      return parseNavigationUrl(window.location.pathname, window.location.search);
    } catch {
      return { tab: 'inicio' as ActiveTab, mode: 'estudo' as StudyMode };
    }
  }, []);

  const mainRef = useRef<HTMLElement | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>(initialRoute.tab);
  const [returnToNotebook, setReturnToNotebook] = useState(false);
  const [routineModalOpen, setRoutineModalOpen] = useState(false);
  const [gamificationHubOpen, setGamificationHubOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const auth = useAuthSession();
  const [rankingPulseOn, setRankingPulseOn] = useState<boolean>(() => {
    try {
      const saved = window.localStorage.getItem('medr1_ranking_pulse_v1');
      return saved === null ? true : saved === 'true';
    } catch {
      return true;
    }
  });

  const store = useMedR1Store({
    liveRankingEnabled: activeTab === 'ranking' && rankingPulseOn,
    studentId: auth.student?.id,
  });

  // Hydrate / converge cloud history once when an authenticated session is active
  const lastCloudSyncedStudentRef = useRef<string | null>(null);
  useEffect(() => {
    if (!auth.student?.id) {
      lastCloudSyncedStudentRef.current = null;
      return;
    }
    if (lastCloudSyncedStudentRef.current === auth.student.id) {
      return;
    }
    lastCloudSyncedStudentRef.current = auth.student.id;
    void store.syncWithCloud(auth.student);
  }, [auth.student, store.syncWithCloud]);

  const handleToggleRankingPulse = useCallback((next?: boolean) => {
    setRankingPulseOn((prev) => {
      const resolved = typeof next === 'boolean' ? next : !prev;
      try {
        window.localStorage.setItem('medr1_ranking_pulse_v1', String(resolved));
      } catch {
        // ignore storage quota errors
      }
      return resolved;
    });
  }, []);

  // Question bank & filter state
  const [filters, setFilters] = useState<QuestionFilters>(() => ({
    ...DEFAULT_FILTERS,
    grandeAreaId: initialRoute.area ?? '',
    tema: initialRoute.tema ?? '',
  }));
  const [mode, setMode] = useState<StudyMode>(initialRoute.mode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcardExternalFilter, setFlashcardExternalFilter] = useState<{
    grandeAreaId?: GrandeAreaId;
    tema?: string;
    token: number;
  } | null>(null);

  // Simulado (Exam Simulation) state
  const [simuladoActive, setSimuladoActive] = useState(false);
  const [simuladoFinished, setSimuladoFinished] = useState(false);
  const [simuladoPaused, setSimuladoPaused] = useState(false);
  const [includeAnsweredInSimulado, setIncludeAnsweredInSimulado] = useState(false);
  const [simuladoSecondsLeft, setSimuladoSecondsLeft] = useState(0);
  const [simuladoDrafts, setSimuladoDrafts] = useState<
    Record<string, AlternativeLetter>
  >({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [customSimuladoTitle, setCustomSimuladoTitle] = useState<string | null>(
    null
  );
  const [customSimuladoTopics, setCustomSimuladoTopics] = useState<string[]>([]);
  const [diagnosticQuestions, setDiagnosticQuestions] = useState<
    MedicalQuestion[] | null
  >(null);
  const [diagnosticIncompleteError, setDiagnosticIncompleteError] = useState<
    string | null
  >(null);
  const [diagnosticLoading, setDiagnosticLoading] = useState(false);

  const simuladoSubmitGuardRef = useRef(createSingleSubmissionGuard());
  const studyFinishGuardRef = useRef(createSingleSubmissionGuard());
  const [batchFinishSummary, setBatchFinishSummary] =
    useState<BatchFinishSummary | null>(null);
  const questionStartedAtRef = useRef<number>(Date.now());
  const simuladoQuestionTimesRef = useRef<Record<string, number>>({});
  const lastTrackedQuestionIdRef = useRef<string | null>(null);
  const pendingQuestionIdRef = useRef<string | null>(null);

  const filteredQuestions = useMemo(() => {
    if (diagnosticQuestions && mode === 'simulado') {
      return diagnosticQuestions;
    }
    const base = store.filterQuestions(filters);
    if (mode === 'simulado' && !includeAnsweredInSimulado) {
      return base.filter((q) => !store.answers[q.id]);
    }
    return base;
  }, [
    diagnosticQuestions,
    mode,
    store.filterQuestions,
    filters,
    includeAnsweredInSimulado,
    store.answers,
  ]);

  // On-demand lazy loading of official exam chunks based on active tab & filters
  useEffect(() => {
    if (activeTab === 'questoes') {
      void store.ensureExamsLoadedForFilters(filters);
    } else if (
      activeTab === 'inicio' ||
      activeTab === 'desempenho' ||
      activeTab === 'importar' ||
      activeTab === 'caderno_erros'
    ) {
      void store.ensureAllOfficialExamsLoaded();
    }
  }, [
    activeTab,
    filters.instituicao,
    filters.instituicoes,
    filters.banca,
    filters.regiao,
    filters.ano,
    filters.examSearch,
    store.ensureExamsLoadedForFilters,
    store.ensureAllOfficialExamsLoaded,
  ]);

  // Load full catalog when user opens Command Palette for global search
  useEffect(() => {
    if (commandPaletteOpen) {
      void store.ensureAllOfficialExamsLoaded();
    }
  }, [commandPaletteOpen, store.ensureAllOfficialExamsLoaded]);

  // Jump to a requested question ID once its lazy exam chunk finishes loading
  useEffect(() => {
    const pendingId = pendingQuestionIdRef.current;
    if (!pendingId) return;
    const idx = filteredQuestions.findIndex((q) => q.id === pendingId);
    if (idx >= 0) {
      setCurrentIndex(idx);
      pendingQuestionIdRef.current = null;
    }
  }, [filteredQuestions]);

  // Track real elapsed time per question (Study & Simulado)
  const currentQuestionId = filteredQuestions[currentIndex]?.id ?? null;
  useEffect(() => {
    const now = Date.now();
    const prevId = lastTrackedQuestionIdRef.current;
    if (prevId && prevId !== currentQuestionId && mode === 'simulado' && simuladoActive && !simuladoFinished && !simuladoPaused) {
      const elapsedSec = Math.max(1, Math.round((now - questionStartedAtRef.current) / 1000));
      simuladoQuestionTimesRef.current[prevId] =
        (simuladoQuestionTimesRef.current[prevId] ?? 0) + elapsedSec;
    }
    lastTrackedQuestionIdRef.current = currentQuestionId;
    questionStartedAtRef.current = now;
  }, [currentQuestionId, mode, simuladoActive, simuladoFinished, simuladoPaused]);

  // Clamp index when filters narrow the list
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length, currentIndex]);

  // Turn off focus mode automatically when navigating away from questions
  useEffect(() => {
    if (activeTab !== 'questoes' && focusMode) {
      setFocusMode(false);
    }
  }, [activeTab, focusMode]);

  const finishSimulado = useCallback(() => {
    if (simuladoFinished || !simuladoSubmitGuardRef.current.tryAcquire()) return;

    // Flush elapsed time for the currently visible question
    const activeId = lastTrackedQuestionIdRef.current;
    if (activeId) {
      const elapsedSec = Math.max(1, Math.round((Date.now() - questionStartedAtRef.current) / 1000));
      simuladoQuestionTimesRef.current[activeId] =
        (simuladoQuestionTimesRef.current[activeId] ?? 0) + elapsedSec;
    }

    // Hard gate for mandatory 50-question diagnostic simulado
    if (diagnosticQuestions) {
      const check = canFinishDiagnostic(
        diagnosticQuestions.map((q) => q.id),
        simuladoDrafts
      );
      if (!check.canFinish) {
        simuladoSubmitGuardRef.current.reset();
        setDiagnosticIncompleteError(
          `Responda todas as 50 questões do diagnóstico para liberar os gráficos. Faltam ${check.remainingCount} questão(ões).`
        );
        if (check.firstUnansweredIndex >= 0) {
          setCurrentIndex(check.firstUnansweredIndex);
        }
        return;
      }

      setSimuladoFinished(true);
      setSimuladoPaused(true);
      setDiagnosticIncompleteError(null);
      store.completeDiagnosticExam(
        diagnosticQuestions,
        simuladoDrafts,
        simuladoQuestionTimesRef.current
      );
      setDiagnosticQuestions(null);
      setBatchFinishSummary(
        buildBatchFinishSummary(
          diagnosticQuestions.length,
          diagnosticQuestions.length,
          'simulado'
        )
      );
      return;
    }

    setSimuladoFinished(true);
    setSimuladoPaused(true);

    const batch = filteredQuestions
      .filter((q) => Boolean(simuladoDrafts[q.id]))
      .map((q) => ({
        question: q,
        selectedLetter: simuladoDrafts[q.id],
        timeSpentSec: Math.max(
          3,
          Math.min(900, simuladoQuestionTimesRef.current[q.id] ?? 60)
        ),
      }));

    if (batch.length > 0) {
      store.recordBatchAnswers(batch);

      // Automatically record the completed in-app Simulado in the Cutoff Projection ledger
      const validPool = filteredQuestions.filter(
        (q) => !q.anulada && !q.desatualizada
      );
      const validTotal = validPool.length > 0 ? validPool.length : batch.length;
      const validCorrect = batch.filter(
        (item) =>
          !item.question.anulada &&
          !item.question.desatualizada &&
          item.selectedLetter === item.question.gabaritoOficial
      ).length;
      const cohortMean =
        validPool.length > 0
          ? Number(
              (
                validPool.reduce((acc, q) => acc + q.taxaAcertoGlobal, 0) /
                validPool.length
              ).toFixed(1)
            )
          : undefined;

      const now = new Date();
      const todayIso = `${now.getFullYear()}-${String(
        now.getMonth() + 1
      ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

      store.addSimuladoRecord({
        title: customSimuladoTitle
          ? `Simulado ${customSimuladoTitle}`
          : `Simulado MedR1 (${validTotal}q)`,
        date: todayIso,
        validCorrect,
        validTotal,
        scaleType: 'bruta_100',
        estimatedScore: Number(((validCorrect / validTotal) * 100).toFixed(1)),
        cohortAvgPct: cohortMean,
        source: 'app_simulado',
      });
    }

    setBatchFinishSummary(
      buildBatchFinishSummary(batch.length, filteredQuestions.length, 'simulado')
    );
  }, [
    diagnosticQuestions,
    filteredQuestions,
    simuladoDrafts,
    simuladoFinished,
    store,
    customSimuladoTitle,
  ]);

  const handleStartDiagnostic = useCallback(
    async (boards: DiagnosticBoardOption[]) => {
      if (diagnosticLoading) return;
      setDiagnosticLoading(true);
      try {
        const qs = await store.startDiagnosticExam(boards);
        if (qs.length === 0) return;
        const label =
          boards.length === 1
            ? boards[0]
            : `${boards[0]} +${boards.length - 1}`;
        simuladoSubmitGuardRef.current.reset();
        simuladoQuestionTimesRef.current = {};
        questionStartedAtRef.current = Date.now();
        setDiagnosticQuestions(qs);
        setDiagnosticIncompleteError(null);
        setMode('simulado');
        setSimuladoActive(true);
        setSimuladoFinished(false);
        setSimuladoPaused(false);
        setSimuladoDrafts({});
        setFlaggedIds([]);
        setCustomSimuladoTitle(`Diagnóstico Inicial · ${label}`);
        setCustomSimuladoTopics([]);
        setCurrentIndex(0);
        setSimuladoSecondsLeft(qs.length * 180);
        setActiveTab('questoes');
      } finally {
        setDiagnosticLoading(false);
      }
    },
    [diagnosticLoading, store]
  );

  const handleFinishStudyBatch = useCallback(() => {
    if (
      filteredQuestions.length === 0 ||
      !studyFinishGuardRef.current.tryAcquire()
    ) {
      return;
    }
    const answeredCount = filteredQuestions.filter((q) =>
      Boolean(store.answers[q.id])
    ).length;
    setBatchFinishSummary(
      buildBatchFinishSummary(answeredCount, filteredQuestions.length, 'estudo')
    );
  }, [filteredQuestions, store.answers]);

  useEffect(() => {
    studyFinishGuardRef.current.reset();
  }, [filters]);

  // Stable 1s countdown timer for active Simulado (never recreated every tick)
  useEffect(() => {
    if (!simuladoActive || simuladoFinished || simuladoPaused) return;

    const timer = window.setInterval(() => {
      setSimuladoSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [simuladoActive, simuladoFinished, simuladoPaused]);

  // Auto-finish Simulado when countdown reaches zero
  useEffect(() => {
    if (simuladoActive && !simuladoFinished && !simuladoPaused && simuladoSecondsLeft <= 0) {
      finishSimulado();
    }
  }, [simuladoActive, simuladoFinished, simuladoPaused, simuladoSecondsLeft, finishSimulado]);

  const handleStartSimulado = () => {
    if (filteredQuestions.length === 0) return;
    simuladoSubmitGuardRef.current.reset();
    simuladoQuestionTimesRef.current = {};
    questionStartedAtRef.current = Date.now();
    setMode('simulado');
    setSimuladoActive(true);
    setSimuladoFinished(false);
    setSimuladoPaused(false);
    setSimuladoDrafts({});
    setFlaggedIds([]);
    setCustomSimuladoTitle(null);
    setCustomSimuladoTopics([]);
    setCurrentIndex(0);
    // 3 minutes per question (standard Brazilian medical residency pacing)
    setSimuladoSecondsLeft(filteredQuestions.length * 180);
  };

  const handleLaunchGapRadarSimulado = (
    topics: Array<{ topic: string; grandeAreaId: GrandeAreaId }>
  ) => {
    if (topics.length === 0) return;
    const topicNames = topics.map((t) => t.topic);

    // Filter strictly to the 3 Gap Radar topics first, never repeating answered questions
    let nextFilters: QuestionFilters = {
      ...DEFAULT_FILTERS,
      temas: topicNames,
      status: 'nao_resolvidas',
      excluirAnuladasDesatualizadas: true,
    };
    let matched = store.filterQuestions(nextFilters);

    // Fallback to include annulled/outdated if strict active pool is empty (still unanswered only)
    if (matched.length === 0) {
      nextFilters = {
        ...DEFAULT_FILTERS,
        temas: topicNames,
        status: 'nao_resolvidas',
        excluirAnuladasDesatualizadas: false,
      };
      matched = store.filterQuestions(nextFilters);
    }

    // Final safety fallback to the primary weak topic's Grande Área (unanswered only)
    if (matched.length === 0 && topics[0]?.grandeAreaId) {
      nextFilters = {
        ...DEFAULT_FILTERS,
        grandeAreaId: topics[0].grandeAreaId,
        status: 'nao_resolvidas',
        excluirAnuladasDesatualizadas: false,
      };
      matched = store.filterQuestions(nextFilters);
    }

    if (matched.length === 0) return;

    simuladoSubmitGuardRef.current.reset();
    simuladoQuestionTimesRef.current = {};
    questionStartedAtRef.current = Date.now();
    setIncludeAnsweredInSimulado(false);
    setFilters(nextFilters);
    setMode('simulado');
    setSimuladoActive(true);
    setSimuladoFinished(false);
    setSimuladoPaused(false);
    setSimuladoDrafts({});
    setFlaggedIds([]);
    setCustomSimuladoTitle('Radar de Lacunas');
    setCustomSimuladoTopics(topicNames);
    setCurrentIndex(0);
    setSimuladoSecondsLeft(matched.length * 180);
    setActiveTab('questoes');
  };

  const handleModeChange = (nextMode: StudyMode) => {
    setMode(nextMode);
    if (nextMode === 'estudo') {
      setSimuladoActive(false);
      setSimuladoFinished(false);
      setSimuladoPaused(false);
      setSimuladoDrafts({});
      setFlaggedIds([]);
      setCustomSimuladoTitle(null);
      setCustomSimuladoTopics([]);
      setDiagnosticQuestions(null);
      setDiagnosticIncompleteError(null);
      setFilters((prev) =>
        prev.temas && prev.temas.length > 0 ? { ...prev, temas: [] } : prev
      );
    }
  };

  const handleRestartSimulado = () => {
    simuladoSubmitGuardRef.current.reset();
    simuladoQuestionTimesRef.current = {};
    questionStartedAtRef.current = Date.now();
    setSimuladoActive(false);
    setSimuladoFinished(false);
    setSimuladoPaused(false);
    setSimuladoDrafts({});
    setFlaggedIds([]);
    setCustomSimuladoTitle(null);
    setCustomSimuladoTopics([]);
    setDiagnosticQuestions(null);
    setDiagnosticIncompleteError(null);
    setFilters((prev) =>
      prev.temas && prev.temas.length > 0 ? { ...prev, temas: [] } : prev
    );
    setCurrentIndex(0);
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedIds((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const handleOpenQuestionFromNotebook = (questionId: string) => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);
    const nextFilters: QuestionFilters = {
      ...DEFAULT_FILTERS,
      excluirAnuladasDesatualizadas: false,
    };
    setFilters(nextFilters);
    const list = store.filterQuestions(nextFilters);
    const idx = list.findIndex((q) => q.id === questionId);
    if (idx >= 0) {
      pendingQuestionIdRef.current = null;
      setCurrentIndex(idx);
    } else {
      pendingQuestionIdRef.current = questionId;
      setCurrentIndex(0);
      void store.ensureExamLoadedForQuestionId(questionId);
    }
    setReturnToNotebook(activeTab === 'caderno_erros');
    setActiveTab('questoes');
  };

  const handleLaunchErrorReview = () => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);
    setFilters({
      ...DEFAULT_FILTERS,
      status: 'caderno_erros',
      excluirAnuladasDesatualizadas: false,
    });
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  const handleFilterQuestionsFromPareto = (payload: {
    topicLabel: string;
    matchedTema?: string;
    matchedSubtema?: string;
    grandeAreaId?: GrandeAreaId;
    instituicao?: string;
    ano?: string;
    status?: QuestionFilters['status'];
  }) => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);

    const scopePatch = {
      instituicao: payload.instituicao ?? '',
      ano: payload.ano ?? '',
    };
    const preferredStatus: QuestionFilters['status'] =
      payload.status ?? 'nao_resolvidas';

    const candidates: QuestionFilters[] = [];

    if (payload.matchedTema && payload.matchedSubtema) {
      candidates.push({
        ...DEFAULT_FILTERS,
        ...scopePatch,
        grandeAreaId: payload.grandeAreaId ?? '',
        tema: payload.matchedTema,
        subtema: payload.matchedSubtema,
        status: preferredStatus,
        excluirAnuladasDesatualizadas: false,
      });
      if (preferredStatus !== 'todas') {
        candidates.push({
          ...DEFAULT_FILTERS,
          ...scopePatch,
          grandeAreaId: payload.grandeAreaId ?? '',
          tema: payload.matchedTema,
          subtema: payload.matchedSubtema,
          status: 'todas',
          excluirAnuladasDesatualizadas: false,
        });
      }
    }

    if (payload.matchedTema) {
      candidates.push({
        ...DEFAULT_FILTERS,
        ...scopePatch,
        grandeAreaId: payload.grandeAreaId ?? '',
        tema: payload.matchedTema,
        status: preferredStatus,
        excluirAnuladasDesatualizadas: false,
      });
      candidates.push({
        ...DEFAULT_FILTERS,
        ...scopePatch,
        grandeAreaId: payload.grandeAreaId ?? '',
        search: payload.matchedTema,
        status: preferredStatus,
        excluirAnuladasDesatualizadas: false,
      });
    }

    candidates.push({
      ...DEFAULT_FILTERS,
      ...scopePatch,
      grandeAreaId: payload.grandeAreaId ?? '',
      search: payload.topicLabel,
      status: preferredStatus,
      excluirAnuladasDesatualizadas: false,
    });

    if (payload.grandeAreaId) {
      candidates.push({
        ...DEFAULT_FILTERS,
        ...scopePatch,
        grandeAreaId: payload.grandeAreaId,
        status: preferredStatus,
        excluirAnuladasDesatualizadas: false,
      });
    }

    const bestMatch =
      candidates.find((cand) => store.filterQuestions(cand).length > 0) ?? {
        ...DEFAULT_FILTERS,
        ...scopePatch,
        grandeAreaId: payload.grandeAreaId ?? '',
        tema: payload.matchedTema ?? '',
        subtema: payload.matchedSubtema ?? '',
        status: 'todas',
        excluirAnuladasDesatualizadas: false,
      };

    setFilters(bestMatch);
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  const handleFilterFlashcardsFromPareto = (payload: {
    topicLabel: string;
    matchedTema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => {
    setFlashcardExternalFilter({
      grandeAreaId: payload.grandeAreaId,
      tema: payload.matchedTema ?? payload.topicLabel,
      token: Date.now(),
    });
    setActiveTab('flashcards');
  };

  const handleOpenImportedExamInBank = (instituicao: string, ano: number) => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);
    setFilters({
      ...DEFAULT_FILTERS,
      instituicao,
      ano: String(ano),
      excluirAnuladasDesatualizadas: false,
    });
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  const handleSelectGrandeAreaFromBank = (grandeAreaId: GrandeAreaId) => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);
    setCustomSimuladoTitle(null);
    setCustomSimuladoTopics([]);
    setFilters({
      ...DEFAULT_FILTERS,
      grandeAreaId,
    });
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  const handleStartOfficialWeeklySimulado = async () => {
    await store.ensureExamsLoadedForFilters({ instituicao: 'UEPA', ano: '2026' });
    const nextFilters: QuestionFilters = {
      ...DEFAULT_FILTERS,
      instituicao: 'UEPA',
      instituicoes: [],
      ano: '2026',
      status: 'todas',
      excluirAnuladasDesatualizadas: false,
    };
    simuladoSubmitGuardRef.current.reset();
    simuladoQuestionTimesRef.current = {};
    questionStartedAtRef.current = Date.now();
    setDiagnosticQuestions(null);
    setDiagnosticIncompleteError(null);
    setIncludeAnsweredInSimulado(true);
    setFilters(nextFilters);
    setMode('simulado');
    setSimuladoActive(true);
    setSimuladoFinished(false);
    setSimuladoPaused(false);
    setSimuladoDrafts({});
    setFlaggedIds([]);
    setCustomSimuladoTitle('UEPA 2026 — Prova Completa');
    setCustomSimuladoTopics([]);
    setCurrentIndex(0);
    setSimuladoSecondsLeft(100 * 180);
    setActiveTab('questoes');
  };

  const handleFilterArenaBoard = (institutions: string[]) => {
    setMode('estudo');
    setSimuladoActive(false);
    setSimuladoFinished(false);
    setCustomSimuladoTitle(null);
    setCustomSimuladoTopics([]);
    setFilters({
      ...DEFAULT_FILTERS,
      instituicao: institutions.length === 1 ? institutions[0] : '',
      instituicoes: institutions.length > 1 ? institutions : [],
      status: 'todas',
      excluirAnuladasDesatualizadas: false,
    });
    setCurrentIndex(0);
    setActiveTab('questoes');
  };

  const activeQuestion = filteredQuestions[currentIndex];

  const navigateToTab = useCallback(
    (nextTab: ActiveTab, opts?: { mode?: StudyMode }) => {
      const nextMode = opts?.mode ?? (nextTab === 'questoes' ? 'estudo' : undefined);
      if (
        shouldConfirmLeaveSimulado({
          activeTab,
          mode,
          simuladoActive,
          simuladoFinished,
          nextTab,
          nextMode,
        })
      ) {
        const confirmed = window.confirm(
          'Há um simulado em andamento. Deseja sair e encerrar a tentativa atual?'
        );
        if (!confirmed) return;
      }

      if (nextTab === 'questoes') {
        const resolvedMode = opts?.mode ?? 'estudo';
        setMode(resolvedMode);
        setSimuladoActive(false);
        setSimuladoFinished(false);
      } else if (simuladoActive && !simuladoFinished) {
        setSimuladoActive(false);
      }

      if (nextTab !== 'questoes') {
        setReturnToNotebook(false);
      }

      setActiveTab(nextTab);
    },
    [activeTab, mode, simuladoActive, simuladoFinished]
  );

  // Sync activeTab / mode / primary question filters with browser URL (History API)
  useEffect(() => {
    try {
      const nextUrl = buildNavigationUrl({
        tab: activeTab,
        mode,
        area: (filters.grandeAreaId || undefined) as GrandeAreaId | undefined,
        tema: filters.tema || undefined,
      });
      const currentUrl = `${window.location.pathname}${window.location.search}`;
      if (currentUrl !== nextUrl) {
        window.history.pushState({ tab: activeTab, mode }, '', nextUrl);
      }
    } catch {
      // ignore history errors in sandboxed iframes
    }
  }, [activeTab, mode, filters.grandeAreaId, filters.tema]);

  // Support browser Back / Forward buttons via popstate
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseNavigationUrl(
        window.location.pathname,
        window.location.search
      );
      setActiveTab(parsed.tab);
      setMode(parsed.mode);
      if (parsed.tab !== 'questoes') {
        setReturnToNotebook(false);
      }
      if (parsed.tab === 'questoes' && (parsed.area || parsed.tema)) {
        setFilters((prev) => ({
          ...prev,
          grandeAreaId: parsed.area ?? '',
          tema: parsed.tema ?? '',
        }));
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Reset scroll position in both desktop <main> container and mobile window
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'auto' });
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab, currentIndex]);

  // Global Cmd+K / Ctrl+K shortcut for Command Palette
  useEffect(() => {
    const handleGlobalShortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((open) => !open);
      }
    };
    window.addEventListener('keydown', handleGlobalShortcut);
    return () => window.removeEventListener('keydown', handleGlobalShortcut);
  }, []);

  const handleCommandPaletteAction = useCallback(
    (action: CommandPaletteAction) => {
      switch (action.type) {
        case 'tab':
          navigateToTab(action.tab);
          break;
        case 'simulados':
          navigateToTab('questoes', { mode: 'simulado' });
          break;
        case 'area':
          handleSelectGrandeAreaFromBank(action.areaId);
          break;
        case 'topic':
          handleFilterQuestionsFromPareto({
            topicLabel: action.topicLabel,
            matchedTema: action.topicLabel,
            grandeAreaId: action.grandeAreaId,
          });
          break;
        case 'open_routine':
          setRoutineModalOpen(true);
          break;
        case 'toggle_focus':
          setFocusMode((f) => !f);
          break;
        case 'toggle_theme':
          store.setThemeMode(store.darkMode ? 'light' : 'dark');
          break;
      }
    },
    [
      navigateToTab,
      handleSelectGrandeAreaFromBank,
      handleFilterQuestionsFromPareto,
      store,
    ]
  );

  const handleExecuteMission = useCallback(
    (mission: GamificationMission) => {
      switch (mission.actionType) {
        case 'open_weak_area':
          handleSelectGrandeAreaFromBank(mission.targetAreaId ?? 'clinica_medica');
          break;
        case 'open_flashcards':
          navigateToTab('flashcards');
          break;
        case 'start_simulado':
          navigateToTab('questoes', { mode: 'simulado' });
          break;
        case 'open_error_notebook':
          navigateToTab('caderno_erros');
          break;
        case 'open_questions':
        default:
          navigateToTab('questoes', { mode: 'estudo' });
          break;
      }
    },
    [handleSelectGrandeAreaFromBank, navigateToTab]
  );

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col bg-[#F8FAFC] text-slate-900 transition-colors duration-200 dark:bg-[#0B0F17] dark:text-[#E8EDF5]">
      {/* Compact 48px Studio Top Bar (Medcel-style primary nav + drawer trigger) */}
      <TopBar
        activeTab={activeTab}
        mode={mode}
        simuladoActive={simuladoActive && !simuladoFinished}
        onSelectHome={() => navigateToTab('inicio')}
        onSelectTab={(tab) => navigateToTab(tab)}
        onSelectSimulados={() => navigateToTab('questoes', { mode: 'simulado' })}
        dueFlashcardsCount={store.dueFlashcardsCount}
        errorNotebookCount={store.errorNotebookQuestions.length}
        activeFilterCount={countActiveQuestionFilters(filters)}
        dailyGoal={store.dailyGoal}
        onUpdateDailyGoalTarget={store.setDailyGoalTarget}
        onOpenRoutineConfig={() => setRoutineModalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        darkMode={store.darkMode}
        themeMode={store.themeMode}
        onChangeThemeMode={store.setThemeMode}
        themeSchedule={store.themeSchedule}
        onChangeThemeSchedule={store.setThemeSchedule}
        readingComfort={store.readingComfort}
        onToggleReadingComfort={() => store.setReadingComfort((c) => !c)}
        focusMode={focusMode}
        onToggleFocusMode={() => setFocusMode((f) => !f)}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        gamificationCore={store.gamification.core}
        onOpenGamificationHub={() => setGamificationHubOpen(true)}
        authStudent={auth.student}
        syncStatus={store.syncStatus}
        onOpenAuthModal={() => setAuthModalOpen(true)}
      />

      {/* Full-Width Workspace + Unified Slide-Over Navigation Drawer */}
      <div
        className={cn(
          'flex-1 min-h-0 flex gap-3.5 px-3 sm:px-4',
          focusMode ? 'pb-3 sm:pb-4' : 'pb-16 lg:pb-4'
        )}
      >
        {!focusMode && (
          <Sidebar
            activeTab={activeTab}
            onSelectTab={(tab) => navigateToTab(tab)}
            onSelectSimulados={() => navigateToTab('questoes', { mode: 'simulado' })}
            isSimuladoActive={mode === 'simulado'}
            profile={store.profile}
            errorNotebookCount={store.errorNotebookQuestions.length}
            dueFlashcardsCount={store.dueFlashcardsCount}
            onlineTotal={store.liveRanking.onlineTotal}
            currentUserRank={store.liveRanking.currentUser.rank}
            mobileOpen={mobileMenuOpen}
            onCloseMobile={() => setMobileMenuOpen(false)}
            importedQuestionsCount={store.importedQuestions.length}
            sidebarFilters={
              activeTab === 'questoes' && !simuladoActive ? (
                <FilterPanel
                  variant="sidebar"
                  questions={store.allQuestions}
                  answers={store.answers}
                  bookmarks={store.bookmarks}
                  filters={filters}
                  onChange={(next) => {
                    setFilters(next);
                    setCurrentIndex(0);
                  }}
                  onReset={() => {
                    setFilters(DEFAULT_FILTERS);
                    setCurrentIndex(0);
                  }}
                  resultCount={filteredQuestions.length}
                  mode={mode}
                  onChangeMode={handleModeChange}
                  onStartSimulado={handleStartSimulado}
                  simuladoActive={simuladoActive}
                  includeAnsweredInSimulado={includeAnsweredInSimulado}
                  onToggleIncludeAnsweredInSimulado={setIncludeAnsweredInSimulado}
                />
              ) : undefined
            }
          />
        )}

        {/* Center Floating Workspace Canvas */}
        <main
          ref={mainRef}
          className={cn(
            'flex-1 min-w-0 lg:overflow-y-auto transition-colors duration-200',
            activeTab === 'questoes'
              ? cn(
                  'rounded-xl border shadow-[0_1px_2px_rgba(15,23,42,0.03)] dark:shadow-none',
                  store.readingComfort
                    ? 'border-stone-200/80 bg-[#FCFBF8] dark:border-white/[0.08] dark:bg-[#101520]'
                    : 'border-slate-200/80 bg-white dark:border-white/[0.08] dark:bg-[#131926]',
                  focusMode && 'mx-auto w-full max-w-[760px]'
                )
              : 'rounded-xl'
          )}
        >
          {store.storageQuotaExceeded && (
            <div
              role="alert"
              className="mx-4 mt-4 flex items-center justify-between gap-3 rounded-xl bg-[#FF3B30]/10 px-4 py-2.5 text-xs font-medium text-[#D70015] sm:mx-8"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle size={16} strokeWidth={1.5} className="shrink-0" />
                <span>
                  Armazenamento local do navegador cheio. Algumas alterações recentes podem não ser salvas — exporte ou limpe questões antigas.
                </span>
              </div>
              <button
                type="button"
                onClick={store.dismissStorageQuotaWarning}
                className="rounded-md p-1 hover:bg-[#FF3B30]/15 transition"
                aria-label="Dispensar aviso de armazenamento"
              >
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
          )}

          {/* TAB 1: BANCO DE QUESTÕES (Folha limpa com largura clínica max-w-[760px]) */}
          {activeTab === 'questoes' && (
            <div className="mx-auto w-full max-w-[760px] px-4 py-5 sm:px-6 sm:py-6">
              {/* Primary Question Column */}
              <div className="space-y-4 min-w-0">
                {/* Contextual Return to Error Notebook */}
                {returnToNotebook && (
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-[#007AFF]/20 bg-[#007AFF]/[0.06] px-3.5 py-2 dark:border-sky-400/20 dark:bg-sky-500/10">
                    <button
                      type="button"
                      onClick={() => {
                        setReturnToNotebook(false);
                        navigateToTab('caderno_erros');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#007AFF] hover:underline dark:text-sky-300 cursor-pointer"
                    >
                      <ArrowLeft size={14} strokeWidth={1.5} />
                      <span>Voltar ao Caderno de Erros</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setReturnToNotebook(false)}
                      aria-label="Dispensar barra de retorno"
                      className="rounded p-0.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                    >
                      <X size={13} strokeWidth={1.5} />
                    </button>
                  </div>
                )}

                {/* Decoupled Top Quick-Filter Bar (available in desktop, mobile, and Focus Mode) */}
                {!simuladoActive && (
                  <FilterPanel
                    variant="top"
                    filters={filters}
                    onChange={(next) => {
                      setFilters(next);
                      setCurrentIndex(0);
                    }}
                    onReset={() => {
                      setFilters(DEFAULT_FILTERS);
                      setCurrentIndex(0);
                    }}
                    resultCount={filteredQuestions.length}
                    mode={mode}
                    onChangeMode={(nextMode) => {
                      setMode(nextMode);
                      setSimuladoActive(false);
                      setSimuladoFinished(false);
                    }}
                    onStartSimulado={handleStartSimulado}
                    simuladoActive={simuladoActive}
                    includeAnsweredInSimulado={includeAnsweredInSimulado}
                    onToggleIncludeAnsweredInSimulado={setIncludeAnsweredInSimulado}
                    questions={store.allQuestions}
                    answers={store.answers}
                    bookmarks={store.bookmarks}
                  />
                )}

                {/* Simulado Countdown & Navigator Bar */}
                {mode === 'simulado' && simuladoActive && (
                  <SimuladoBar
                    questions={filteredQuestions}
                    currentIndex={currentIndex}
                    onSelectIndex={setCurrentIndex}
                    draftAnswers={simuladoDrafts}
                    flaggedIds={flaggedIds}
                    secondsLeft={simuladoSecondsLeft}
                    paused={simuladoPaused}
                    onTogglePause={() => setSimuladoPaused((p) => !p)}
                    finished={simuladoFinished}
                    onFinish={finishSimulado}
                    onRestart={handleRestartSimulado}
                    customTitle={customSimuladoTitle}
                    customTopics={customSimuladoTopics}
                  />
                )}

                {/* Active Question Solver or Empty State */}
                {activeQuestion ? (
                  mode === 'simulado' && !simuladoActive ? (
                    <section className="rounded-2xl border border-slate-200/75 bg-[#F6F8FC] p-8 sm:p-10 text-center dark:border-white/[0.08] dark:bg-white/[0.03] space-y-4">
                      <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                        Pronto para o Simulado na Íntegra?
                      </h2>
                      <p className="mx-auto max-w-lg text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        Você configurou{' '}
                        <strong className="text-slate-900 dark:text-white tabular-nums">
                          {filteredQuestions.length} questões
                        </strong>{' '}
                        com tempo estimado de{' '}
                        <strong className="font-mono text-slate-900 dark:text-white tabular-nums">
                          {filteredQuestions.length * 3} minutos
                        </strong>
                        . Comentários e estatísticas da comunidade permanecerão bloqueados até a entrega, com suporte a riscar alternativas e marcar dúvidas para revisão.
                      </p>
                      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleStartSimulado}
                        >
                          Iniciar Simulado agora
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => handleModeChange('estudo')}
                        >
                          Voltar ao Modo Estudo
                        </Button>
                      </div>
                    </section>
                  ) : (
                    <>
                      {/* Quiet session status & active filter bar for Study Mode */}
                      {mode === 'estudo' && (
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-3 text-xs text-[#86868B] dark:border-white/[0.06] dark:text-slate-400">
                          <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="font-medium text-[#1D1D1F] dark:text-slate-200">
                              {filters.status === 'todas'
                                ? 'Todas'
                                : filters.status === 'favoritadas'
                                ? 'Favoritadas'
                                : filters.status === 'caderno_erros'
                                ? 'Caderno de Erros'
                                : filters.status === 'nao_resolvidas'
                                ? 'Não resolvidas'
                                : filters.status === 'erradas'
                                ? 'Erradas'
                                : 'Acertadas'}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">
                              {currentIndex + 1}/{filteredQuestions.length}
                            </span>
                            {store.catalogLoading && (
                              <span
                                role="status"
                                aria-live="polite"
                                className="inline-flex items-center gap-1 rounded-full bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300"
                              >
                                <Loader2 size={11} strokeWidth={2} className="animate-spin" />
                                Carregando provas...
                              </span>
                            )}
                          </div>
                          <div className="inline-flex flex-wrap items-center gap-3 font-mono tabular-nums">
                            <span>
                              Hoje: {store.dailyGoal.answeredToday}/{store.dailyGoal.target}
                            </span>
                            <span>
                              Revisados hoje: {store.reviewsTodayStats.total}
                            </span>
                            <button
                              type="button"
                              onClick={handleFinishStudyBatch}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#007AFF] px-3 py-1.5 font-sans text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition-colors cursor-pointer"
                            >
                              <span>Finalizar</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Quick question stepper pills for Study Mode (windowed for large banks) */}
                      {mode === 'estudo' && filteredQuestions.length > 1 && (() => {
                        const total = filteredQuestions.length;
                        const maxVisible = 24;
                        let startIdx = 0;
                        let endIdx = total;
                        if (total > maxVisible) {
                          const half = Math.floor(maxVisible / 2);
                          startIdx = Math.max(0, Math.min(currentIndex - half, total - maxVisible));
                          endIdx = Math.min(total, startIdx + maxVisible);
                        }
                        const visibleSlice = filteredQuestions.slice(startIdx, endIdx);
                        return (
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                            {startIdx > 0 && (
                              <button
                                type="button"
                                onClick={() => setCurrentIndex(0)}
                                className="flex h-8 items-center justify-center rounded-full border border-transparent bg-[#F3F6FC] px-2.5 font-mono text-xs font-medium text-slate-500 hover:bg-[#E8F0FE] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] shrink-0 cursor-pointer"
                                title="Ir para questão 1"
                              >
                                1…
                              </button>
                            )}
                            {visibleSlice.map((q, offset) => {
                              const idx = startIdx + offset;
                              const ans = store.answers[q.id];
                              const isCurrent = idx === currentIndex;
                              return (
                                <button
                                  key={q.id}
                                  type="button"
                                  onClick={() => setCurrentIndex(idx)}
                                  className={cn(
                                    'flex h-8 min-w-[34px] items-center justify-center rounded-full border px-2 font-mono text-xs font-medium tabular-nums transition-colors cursor-pointer shrink-0',
                                    isCurrent &&
                                      'ring-2 ring-[#1A56DB]/50 ring-offset-1 dark:ring-sky-400/60 dark:ring-offset-[#1B1F27]',
                                    ans
                                      ? ans.isCorrect
                                        ? 'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-500/15 dark:text-emerald-300'
                                        : 'border-red-300/80 bg-red-50 text-red-700 dark:border-red-500/35 dark:bg-red-500/15 dark:text-red-300'
                                      : isCurrent
                                      ? 'border-[#1A56DB]/35 bg-[#E8F0FE] text-[#1A56DB] font-semibold dark:border-sky-400/40 dark:bg-sky-500/20 dark:text-sky-300'
                                      : 'border-transparent bg-[#F3F6FC] text-slate-600 hover:bg-[#E8F0FE]/70 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.09]'
                                  )}
                                  title={`${q.instituicao} ${q.ano} · ${q.tema}`}
                                >
                                  {idx + 1}
                                </button>
                              );
                            })}
                            {endIdx < total && (
                              <button
                                type="button"
                                onClick={() => setCurrentIndex(total - 1)}
                                className="flex h-8 items-center justify-center rounded-full border border-transparent bg-[#F3F6FC] px-2.5 font-mono text-xs font-medium text-slate-500 hover:bg-[#E8F0FE] dark:bg-white/[0.04] dark:text-slate-400 dark:hover:bg-white/[0.08] shrink-0 cursor-pointer"
                                title={`Ir para questão ${total}`}
                              >
                                …{total}
                              </button>
                            )}
                          </div>
                        );
                      })()}

                      {diagnosticIncompleteError && (
                        <div
                          role="alert"
                          className="mb-3 flex items-center justify-between gap-3 rounded-xl bg-[#FF3B30]/10 px-4 py-3 text-xs font-medium text-[#D70015] dark:bg-red-500/15 dark:text-red-300"
                        >
                          <div className="flex items-center gap-2">
                            <AlertTriangle size={16} strokeWidth={1.5} className="shrink-0" />
                            <span>{diagnosticIncompleteError}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setDiagnosticIncompleteError(null)}
                            className="rounded p-1 hover:bg-black/5 dark:hover:bg-white/10"
                            aria-label="Fechar aviso"
                          >
                            <X size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                      )}

                      <Suspense fallback={<ViewLoadingFallback label="Carregando questão..." />}>
                        <QuestionCard
                        seamless
                        question={activeQuestion}
                        index={currentIndex}
                        total={filteredQuestions.length}
                        mode={mode}
                        existingAnswer={store.answers[activeQuestion.id]}
                        simuladoDraft={simuladoDrafts[activeQuestion.id]}
                        simuladoFinished={simuladoFinished}
                        isBookmarked={store.bookmarks.includes(activeQuestion.id)}
                        isFlagged={flaggedIds.includes(activeQuestion.id)}
                        onToggleBookmark={() =>
                          store.toggleBookmark(activeQuestion.id)
                        }
                        onToggleFlag={() => handleToggleFlag(activeQuestion.id)}
                        onSubmitStudyAnswer={(letter) => {
                          const elapsedSec = Math.max(
                            3,
                            Math.min(
                              900,
                              Math.round((Date.now() - questionStartedAtRef.current) / 1000)
                            )
                          );
                          store.recordAnswer(activeQuestion, letter, 'estudo', elapsedSec);
                        }}
                        onSelectSimuladoDraft={(letter) => {
                          setDiagnosticIncompleteError(null);
                          setSimuladoDrafts((prev) => ({
                            ...prev,
                            [activeQuestion.id]: letter,
                          }));
                        }}
                        onPrev={() =>
                          setCurrentIndex((i) => Math.max(0, i - 1))
                        }
                        onNext={() =>
                          setCurrentIndex((i) =>
                            Math.min(filteredQuestions.length - 1, i + 1)
                          )
                        }
                        benchmarks={(() => {
                          const areaRow = store.analytics.areaRows.find(
                            (r) => r.grandeAreaId === activeQuestion.grandeAreaId
                          );
                          const topicRow =
                            store.analytics.topicRows.find(
                              (r) => r.label === activeQuestion.tema
                            ) ?? areaRow;
                          const overallSlice = {
                            label: 'Visão Geral',
                            studentPct: store.analytics.overallStudentPct,
                            communityMedianPct: store.analytics.overallMedianPct,
                            delta: store.analytics.overallDelta,
                            status: store.analytics.overallStatus,
                            answered: store.analytics.totalAnswered,
                          };
                          return {
                            topic: topicRow
                              ? {
                                  label: topicRow.label,
                                  studentPct: topicRow.studentPct,
                                  communityMedianPct: topicRow.communityMedianPct,
                                  delta: topicRow.delta,
                                  status: topicRow.status,
                                  answered: topicRow.answered,
                                }
                              : overallSlice,
                            area: areaRow
                              ? {
                                  label: areaRow.label,
                                  studentPct: areaRow.studentPct,
                                  communityMedianPct: areaRow.communityMedianPct,
                                  delta: areaRow.delta,
                                  status: areaRow.status,
                                  answered: areaRow.answered,
                                }
                              : overallSlice,
                            overall: overallSlice,
                          };
                        })()}
                        hasFlashcard={store.flashcardQuestionIds.has(
                          activeQuestion.id
                        )}
                        onCreateFlashcard={() =>
                          store.createFlashcardFromQuestion(
                            activeQuestion,
                            'perola'
                          )
                        }
                        onOpenFlashcards={() => setActiveTab('flashcards')}
                        readingComfort={store.readingComfort}
                        onGenerateAiCommentary={
                          store.generateAiCommentaryForQuestion
                        }
                      />
                      </Suspense>
                    </>
                  )
                ) : store.catalogLoading ? (
                  <ViewLoadingFallback label="Carregando prova selecionada..." />
                ) : (
                  <section className="rounded-2xl border border-slate-200/75 bg-[#F6F8FC] p-12 text-center dark:border-white/[0.08] dark:bg-white/[0.03] space-y-3">
                    <SearchX className="mx-auto h-8 w-8 text-slate-400" />
                    <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                      Nenhuma questão encontrada com esses filtros
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Tente ampliar a Grande Área, remover a busca textual ou redefinir o status do aluno para visualizar mais questões.
                    </p>
                    <div className="pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setFilters(DEFAULT_FILTERS);
                          setCurrentIndex(0);
                        }}
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Limpar todos os filtros</span>
                      </Button>
                    </div>
                  </section>
                )}
              </div>
            </div>
          )}

          {/* MULTI-CARD STUDIO VIEWS (Início, Desempenho, Ranking, Caderno de Erros, Flashcards, Importar) */}
          {activeTab !== 'questoes' && (
            <div className="mx-auto w-full max-w-[1380px] px-0.5 py-0.5 sm:px-1 pb-6">
              {/* TAB 0: INÍCIO — ARENA DE BANCAS & PERCENTIL REAL */}
              {activeTab === 'inicio' && (
                <ArenaHomeView
                  questions={store.allQuestions}
                  answers={store.answers}
                  defaultTargetSpecialty={store.profile.targetSpecialty}
                  onStartOfficialWeeklySimulado={handleStartOfficialWeeklySimulado}
                  onFilterBoard={handleFilterArenaBoard}
                  onPracticeSubtema={handleFilterQuestionsFromPareto}
                  onGoToQuestionBank={() =>
                    navigateToTab('questoes', { mode: 'estudo' })
                  }
                  onGoToSimulados={() =>
                    navigateToTab('questoes', { mode: 'simulado' })
                  }
                  onGoToPerformance={() => navigateToTab('desempenho')}
                />
              )}

              {/* TAB 2: DESEMPENHO & MEDIANA */}
              {activeTab === 'desempenho' && (
                <Suspense fallback={<ViewLoadingFallback label="Carregando painel de desempenho..." />}>
                  <PerformanceDashboard
                    studentId={store.profile.id}
                    analytics={store.analytics}
                    questions={store.allQuestions}
                    answers={store.answers}
                    flashcards={store.flashcards}
                    darkMode={store.darkMode}
                    targetBoard={store.targetBoard}
                    bankVersion={store.bankVersion}
                    includeDemoBaseline={store.includeDemoBaseline}
                    onToggleDemoBaseline={store.setIncludeDemoBaseline}
                    diagnosticUnlocked={store.diagnosticUnlocked}
                    diagnosticState={store.diagnosticState}
                    diagnosticAnsweredCount={
                      diagnosticQuestions ? Object.keys(simuladoDrafts).length : 0
                    }
                    diagnosticLoading={diagnosticLoading}
                    onStartDiagnostic={handleStartDiagnostic}
                    onFilterQuestionsByTopic={handleFilterQuestionsFromPareto}
                    onFilterFlashcardsByTopic={handleFilterFlashcardsFromPareto}
                    onLaunchGapRadarSimulado={handleLaunchGapRadarSimulado}
                    onCreateFlashcardFromQuestion={(q) =>
                      store.createFlashcardFromQuestion(q, 'caderno_erros')
                    }
                    onOpenQuestion={handleOpenQuestionFromNotebook}
                    onGoToFlashcards={() => navigateToTab('flashcards')}
                    onGoToErrorNotebook={() => navigateToTab('caderno_erros')}
                    onGoToQuestionBank={() => navigateToTab('questoes', { mode: 'estudo' })}
                    onStartQuickSimulado={() => navigateToTab('questoes', { mode: 'simulado' })}
                    onPracticeArea={handleSelectGrandeAreaFromBank}
                    simuladoHistory={store.simuladoHistory}
                    cutoffTarget={store.cutoffTarget}
                    onAddSimulado={store.addSimuladoRecord}
                    onDeleteSimulado={store.deleteSimuladoRecord}
                    onUpdateCutoffTarget={store.updateCutoffTarget}
                    onRestoreExampleSimulados={store.restoreExampleSimulados}
                  />
                </Suspense>
              )}

              {/* TAB 3: RANKING AO VIVO DEDICADO */}
              {activeTab === 'ranking' && (
                <Suspense fallback={<ViewLoadingFallback label="Carregando ranking ao vivo..." />}>
                  <LiveRankingPage
                    allEntries={store.liveRanking.all}
                    currentUser={store.liveRanking.currentUser}
                    byPeriod={store.liveRanking.byPeriod}
                    onlineTotal={store.liveRanking.onlineTotal}
                    profile={store.profile}
                    onUpdateProfile={store.updateProfile}
                    onGeneratePseudonym={store.generateRandomPseudonym}
                    rankingPulseOn={rankingPulseOn}
                    onToggleRankingPulse={handleToggleRankingPulse}
                  />
                </Suspense>
              )}

              {/* TAB 4: CADERNO DE ERROS */}
              {activeTab === 'caderno_erros' && (
                <Suspense fallback={<ViewLoadingFallback label="Carregando caderno de erros..." />}>
                  <ErrorNotebookView
                    questions={store.errorNotebookQuestions}
                    answers={store.answers}
                    bookmarks={store.bookmarks}
                    flashcardQuestionIds={store.flashcardQuestionIds}
                    autoCreateFlashcardsOnError={store.autoCreateFlashcardsOnError}
                    onToggleAutoCreate={store.setAutoCreateFlashcardsOnError}
                    onGenerateFlashcards={store.generateFlashcardsFromErrors}
                    onCreateSingleFlashcard={(q) =>
                      store.createFlashcardFromQuestion(q, 'caderno_erros')
                    }
                    onToggleBookmark={store.toggleBookmark}
                    onOpenQuestion={handleOpenQuestionFromNotebook}
                    onLaunchErrorReview={handleLaunchErrorReview}
                    onGoToFlashcards={() => setActiveTab('flashcards')}
                  />
                </Suspense>
              )}

              {/* TAB 5: FLASHCARDS (FSRS) */}
              {activeTab === 'flashcards' && (
                <Suspense fallback={<ViewLoadingFallback label="Carregando flashcards FSRS..." />}>
                  <FlashcardsView
                    flashcards={store.flashcards}
                    reviewsTodayStats={store.reviewsTodayStats}
                    retentionMode={store.retentionMode}
                    onChangeRetentionMode={store.setRetentionMode}
                    targetBoard={store.targetBoard}
                    onChangeTargetBoard={store.setTargetBoard}
                    userAccuracyByTopic={store.userAccuracyByTopic}
                    communityMedianByTopic={store.communityMedianByTopic}
                    onReviewCard={store.reviewFlashcard}
                    onCreateCustomCard={store.createCustomFlashcard}
                    onDeleteCard={store.deleteFlashcard}
                    onOpenOriginalQuestion={handleOpenQuestionFromNotebook}
                    onGoToQuestions={() => navigateToTab('questoes', { mode: 'estudo' })}
                    enableFuzz={store.fsrsEnableFuzz}
                    onToggleEnableFuzz={() => store.setFsrsEnableFuzz((f) => !f)}
                    canUndoReview={store.canUndoFlashcardReview}
                    onUndoReview={store.undoLastFlashcardReview}
                    reviewLogCount={store.fsrsReviewLogCount}
                    externalFilter={flashcardExternalFilter}
                    onConsumeExternalFilter={() => setFlashcardExternalFilter(null)}
                  />
                </Suspense>
              )}

              {/* TAB 6: IMPORTADOR IA DE PROVAS (UEPA 6 ANOS + ESCALA COMERCIAL) */}
              {activeTab === 'importar' && (
                <Suspense fallback={<ViewLoadingFallback label="Carregando importador de provas..." />}>
                  <QuestionImporterView
                    allQuestions={store.allQuestions}
                    importedQuestions={store.importedQuestions}
                    onSaveImportedQuestions={store.importQuestions}
                    onDeleteBatch={store.deleteImportedBatch}
                    onClearAllImported={store.clearImportedQuestions}
                    onOpenExamInBank={handleOpenImportedExamInBank}
                    onGoToPerformance={() => setActiveTab('desempenho')}
                  />
                </Suspense>
              )}
            </div>
          )}
        </main>
      </div>
      <BatchFinishModal
        summary={batchFinishSummary}
        onClose={() => {
          setBatchFinishSummary(null);
          studyFinishGuardRef.current.reset();
        }}
        onGoToHome={() => {
          setBatchFinishSummary(null);
          studyFinishGuardRef.current.reset();
          navigateToTab('inicio');
        }}
      />
      <RoutineConfigModal
        open={routineModalOpen}
        onClose={() => setRoutineModalOpen(false)}
        flashcards={store.flashcards}
        questions={store.allQuestions}
      />
      <GamificationHubModal
        open={gamificationHubOpen}
        onClose={() => setGamificationHubOpen(false)}
        core={store.gamification.core}
        missions={store.gamification.missions}
        achievements={store.gamification.achievements}
        onExecuteMission={handleExecuteMission}
      />
      <AuthModal
        open={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        student={auth.student}
        syncStatus={store.syncStatus}
        pendingSyncCount={store.pendingSyncCount}
        lastSyncedAt={store.lastSyncedAt}
        onLogin={async (input) => {
          const next = await auth.login(input);
          lastCloudSyncedStudentRef.current = next.student.id;
          await store.syncWithCloud(next.student);
        }}
        onRegister={async (input) => {
          const next = await auth.register(input);
          lastCloudSyncedStudentRef.current = next.student.id;
          await store.syncWithCloud(next.student);
        }}
        onLogout={auth.logout}
        onSyncNow={async () => {
          await store.syncWithCloud(auth.student ?? undefined);
        }}
      />
      <AchievementToast
        achievement={store.pendingAchievement}
        suppressed={simuladoActive && !simuladoFinished}
        onDismiss={store.dismissPendingAchievement}
        onOpenHub={() => setGamificationHubOpen(true)}
      />
      {commandPaletteOpen && (
        <Suspense fallback={null}>
          <CommandPaletteModal
            open={commandPaletteOpen}
            onClose={() => setCommandPaletteOpen(false)}
            questions={store.allQuestions}
            onExecuteAction={handleCommandPaletteAction}
          />
        </Suspense>
      )}
      {!focusMode && (
        <MobileBottomNav
          activeTab={activeTab}
          mode={mode}
          dueFlashcardsCount={store.dueFlashcardsCount}
          errorNotebookCount={store.errorNotebookQuestions.length}
          onSelectTab={(tab) => navigateToTab(tab)}
          onOpenDrawer={() => setMobileMenuOpen(true)}
        />
      )}
    </div>
  );
}
