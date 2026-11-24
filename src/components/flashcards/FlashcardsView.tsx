import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import {
  RotateCw,
  ArrowUpRight,
  Plus,
  Trash2,
  CheckCircle2,
  Layers,
  Clock,
  CalendarClock,
  SlidersHorizontal,
  Settings,
  BookOpen,
  Target,
  X,
  Undo2,
  Shuffle,
  AlertTriangle,
} from 'lucide-react';
import type {
  ExamBoard,
  Flashcard,
  FsrsState,
  GrandeAreaId,
  RetentionMode,
  SrsRating,
} from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  EXAM_BOARD_LABELS,
  getBoardCustomizationCount,
  normalizeMedicalText,
} from '../../lib/examWeights';
import {
  FSRS_ENGINE_NAME,
  computeAllFsrsOutcomes,
  estimateDaysToTargetRetention,
  formatFsrsInterval,
  getCardCurrentRetrievabilityPct,
  isCardDueToday,
  resolveCardRetention,
  type FsrsScheduleOutcome,
} from '../../lib/srs';
import { ExamWeightsModal } from './ExamWeightsModal';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { ClinicalMarkdown } from '../ui/ClinicalMarkdown';
import { VirtualList } from '../ui/VirtualList';
import { cn } from '../../lib/utils';
import {
  getAdaptiveFlashcardTypography,
  isEditableElement,
  resolveFlashcardShortcut,
} from '../../lib/flashcardShortcuts';

interface FlashcardsViewProps {
  flashcards: Flashcard[];
  reviewsTodayStats: { date: string; total: number; passed: number };
  retentionMode: RetentionMode;
  onChangeRetentionMode: (mode: RetentionMode) => void;
  targetBoard: ExamBoard;
  onChangeTargetBoard: (board: ExamBoard) => void;
  userAccuracyByTopic: Record<string, number>;
  communityMedianByTopic: Record<string, number>;
  onReviewCard: (cardId: string, rating: SrsRating) => void;
  onCreateCustomCard: (payload: {
    grandeAreaId: GrandeAreaId;
    tema: string;
    front: string;
    backPearl: string;
  }) => void;
  onDeleteCard: (cardId: string) => void;
  onOpenOriginalQuestion: (questionId: string) => void;
  onGoToQuestions: () => void;
  enableFuzz?: boolean;
  onToggleEnableFuzz?: () => void;
  canUndoReview?: boolean;
  onUndoReview?: () => void;
  reviewLogCount?: number;
  externalFilter?: {
    grandeAreaId?: GrandeAreaId;
    tema?: string;
    token: number;
  } | null;
  onConsumeExternalFilter?: () => void;
}

type DeckViewMode = 'revisao' | 'baralho';

const BOARD_OPTIONS: Array<{ value: ExamBoard; label: string }> = [
  { value: 'UEPA', label: 'UEPA' },
  { value: 'ENARE', label: 'ENARE' },
  { value: 'GERAL', label: 'Geral' },
];

const RETENTION_OPTIONS: Array<{ value: RetentionMode; label: string }> = [
  { value: 'dinamica', label: 'Dinâmica' },
  { value: 0.85, label: '85%' },
  { value: 0.9, label: '90%' },
  { value: 0.95, label: '95%' },
];

function formatDeltaPct(delta: number): string {
  const pct = Math.round(delta * 100);
  if (pct > 0) return `+${pct}%`;
  if (pct < 0) return `${pct}%`;
  return '0%';
}

const FSRS_STATE_LABEL: Record<FsrsState, string> = {
  New: 'Novo',
  Learning: 'Aprendendo',
  Review: 'Revisão',
  Relearning: 'Reaprendendo',
};

const RATING_CONFIG: Array<{
  rating: SrsRating;
  keyHint: string;
  label: string;
  dotClass: string;
  textClass: string;
  subTextClass: string;
  buttonClass: string;
}> = [
  {
    rating: 1,
    keyHint: '1',
    label: 'Errei',
    dotClass: 'bg-red-500',
    textClass: 'text-red-700 dark:text-red-400',
    subTextClass: 'text-red-600/85 dark:text-red-300/85',
    buttonClass:
      'border-red-200 bg-red-50/70 hover:bg-red-100/80 dark:border-red-900/60 dark:bg-red-950/30 dark:hover:bg-red-950/60 focus-visible:ring-red-500',
  },
  {
    rating: 2,
    keyHint: '2',
    label: 'Difícil',
    dotClass: 'bg-amber-500',
    textClass: 'text-amber-800 dark:text-amber-400',
    subTextClass: 'text-amber-700/85 dark:text-amber-300/85',
    buttonClass:
      'border-amber-200 bg-amber-50/70 hover:bg-amber-100/80 dark:border-amber-900/60 dark:bg-amber-950/30 dark:hover:bg-amber-950/60 focus-visible:ring-amber-500',
  },
  {
    rating: 3,
    keyHint: '3',
    label: 'Bom',
    dotClass: 'bg-sky-500',
    textClass: 'text-sky-800 dark:text-sky-300',
    subTextClass: 'text-sky-700/85 dark:text-sky-300/85',
    buttonClass:
      'border-sky-200 bg-sky-50/70 hover:bg-sky-100/80 dark:border-sky-900/60 dark:bg-sky-950/30 dark:hover:bg-sky-950/60 focus-visible:ring-sky-500',
  },
  {
    rating: 4,
    keyHint: '4',
    label: 'Fácil',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-800 dark:text-emerald-400',
    subTextClass: 'text-emerald-700/85 dark:text-emerald-300/85',
    buttonClass:
      'border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100/80 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/60 focus-visible:ring-emerald-500',
  },
];

function formatOutcomeDate(outcome: FsrsScheduleOutcome): string {
  if (outcome.scheduled_days === 0) return 'Hoje';
  return new Date(outcome.dueAt).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
  });
}

export function FlashcardsView({
  flashcards,
  reviewsTodayStats,
  retentionMode,
  onChangeRetentionMode,
  targetBoard,
  onChangeTargetBoard,
  userAccuracyByTopic,
  communityMedianByTopic,
  onReviewCard,
  onCreateCustomCard,
  onDeleteCard,
  onOpenOriginalQuestion,
  onGoToQuestions,
  enableFuzz = true,
  onToggleEnableFuzz,
  canUndoReview = false,
  onUndoReview,
  reviewLogCount = 0,
  externalFilter,
  onConsumeExternalFilter,
}: FlashcardsViewProps) {
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedTema, setSelectedTema] = useState<string>('');
  const [viewMode, setViewMode] = useState<DeckViewMode>('revisao');
  const [practiceAhead, setPracticeAhead] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [hoveredRating, setHoveredRating] = useState<SrsRating | null>(null);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [weightsModalOpen, setWeightsModalOpen] = useState(false);
  const [weightsVersion, setWeightsVersion] = useState(0);
  const [showDeckControls, setShowDeckControls] = useState(false);
  const [pressedRating, setPressedRating] = useState<SrsRating | null>(null);
  const rateTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rateTimerRef.current !== null) {
        window.clearTimeout(rateTimerRef.current);
      }
    };
  }, []);

  // Apply external topic/area filter when navigated from Pareto ROI actions
  useEffect(() => {
    if (!externalFilter) return;

    const normTarget = externalFilter.tema
      ? normalizeMedicalText(externalFilter.tema)
      : '';

    const exactTemaCard = normTarget
      ? flashcards.find((fc) => {
          const normFc = normalizeMedicalText(fc.tema);
          return (
            normFc === normTarget ||
            (normTarget.length >= 4 && normFc.includes(normTarget)) ||
            (normFc.length >= 4 && normTarget.includes(normFc))
          );
        })
      : undefined;

    let nextArea = 'all';
    let nextTema = '';

    if (exactTemaCard) {
      nextArea = exactTemaCard.grandeAreaId;
      nextTema = exactTemaCard.tema;
    } else if (
      externalFilter.grandeAreaId &&
      flashcards.some((fc) => fc.grandeAreaId === externalFilter.grandeAreaId)
    ) {
      nextArea = externalFilter.grandeAreaId;
      nextTema = '';
    }

    const matchingCards = flashcards.filter((fc) => {
      if (nextArea !== 'all' && fc.grandeAreaId !== nextArea) return false;
      if (nextTema && fc.tema !== nextTema) return false;
      return true;
    });
    const hasDue = matchingCards.some((fc) => isCardDueToday(fc));

    setSelectedArea(nextArea);
    setSelectedTema(nextTema);
    setSessionIndex(0);
    setFlipped(false);
    setPracticeAhead(false);
    setViewMode(hasDue ? 'revisao' : 'baralho');
    onConsumeExternalFilter?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalFilter?.token]);

  // Manual flashcard form state
  const [newArea, setNewArea] = useState<GrandeAreaId>('clinica_medica');
  const [newTema, setNewTema] = useState('');
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');

  // Available specialties (temas) inside current area filter
  const availableTemas = useMemo(() => {
    const subset =
      selectedArea === 'all'
        ? flashcards
        : flashcards.filter((fc) => fc.grandeAreaId === selectedArea);
    return Array.from(new Set(subset.map((fc) => fc.tema))).sort();
  }, [flashcards, selectedArea]);

  // Cards matching selected Grande Área + Especialidade/Tema
  const filteredCards = useMemo(() => {
    return flashcards.filter((fc) => {
      if (selectedArea !== 'all' && fc.grandeAreaId !== selectedArea) return false;
      if (selectedTema && fc.tema !== selectedTema) return false;
      return true;
    });
  }, [flashcards, selectedArea, selectedTema]);

  // Cards due today sorted oldest-due first (newly failed cards rotate to end of queue)
  const dueQueue = useMemo(() => {
    const list = practiceAhead
      ? [...filteredCards]
      : filteredCards.filter((fc) => isCardDueToday(fc));
    return list.sort(
      (a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime()
    );
  }, [filteredCards, practiceAhead]);

  const totalDueFiltered = useMemo(
    () => filteredCards.filter((fc) => isCardDueToday(fc)).length,
    [filteredCards]
  );

  // Reset flip & clamp index when queue changes
  useEffect(() => {
    setFlipped(false);
    setHoveredRating(null);
    if (sessionIndex >= dueQueue.length) {
      setSessionIndex(0);
    }
  }, [dueQueue.length, selectedArea, selectedTema, practiceAhead, sessionIndex]);

  const activeCard = dueQueue[sessionIndex] ?? dueQueue[0];

  const handleRate = useCallback(
    (rating: SrsRating) => {
      if (!activeCard) return;
      onReviewCard(activeCard.id, rating);
      setFlipped(false);
      setHoveredRating(null);
      // If practicing ahead (not just due-only), advance pointer to next card
      if (practiceAhead) {
        setSessionIndex((prev) =>
          dueQueue.length > 1 ? (prev + 1) % dueQueue.length : 0
        );
      } else if (rating === 1 && dueQueue.length > 1) {
        // Card stays due today; dueAt updated to now so sort moves it after older cards
        setSessionIndex(0);
      }
    },
    [activeCard, onReviewCard, practiceAhead, dueQueue.length]
  );

  const triggerRateWithFeedback = useCallback(
    (rating: SrsRating) => {
      if (!activeCard || pressedRating !== null) return;
      setPressedRating(rating);
      if (rateTimerRef.current !== null) {
        window.clearTimeout(rateTimerRef.current);
      }
      rateTimerRef.current = window.setTimeout(() => {
        rateTimerRef.current = null;
        setPressedRating(null);
        handleRate(rating);
      }, 130);
    },
    [activeCard, pressedRating, handleRate]
  );

  // Anki-style keyboard shortcuts: Space/Enter to reveal, 1-4 to rate, Z to undo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isModalOpen =
        showCreateForm ||
        weightsModalOpen ||
        document.body.dataset.medr1ModalOpen === 'true' ||
        Boolean(document.querySelector('[role="dialog"][aria-modal="true"]'));

      const action = resolveFlashcardShortcut({
        key: e.key,
        code: e.code,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        flipped,
        hasActiveCard: Boolean(activeCard),
        isReviewMode: viewMode === 'revisao',
        isInputFocused: isEditableElement(e.target),
        isModalOpen,
        canUndo: Boolean(canUndoReview && onUndoReview),
      });

      if (action.type === 'noop') return;

      e.preventDefault();
      if (action.type === 'undo' && onUndoReview) {
        onUndoReview();
        setFlipped(false);
      } else if (action.type === 'reveal') {
        setFlipped(true);
      } else if (action.type === 'rate') {
        triggerRateWithFeedback(action.rating);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    viewMode,
    activeCard,
    flipped,
    triggerRateWithFeedback,
    showCreateForm,
    weightsModalOpen,
    canUndoReview,
    onUndoReview,
  ]);

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFront.trim() || !newBack.trim()) return;
    onCreateCustomCard({
      grandeAreaId: newArea,
      tema: newTema.trim() || 'Revisão Geral',
      front: newFront,
      backPearl: newBack,
    });
    setNewTema('');
    setNewFront('');
    setNewBack('');
    setShowCreateForm(false);
  };

  const retentionPct =
    reviewsTodayStats.total > 0
      ? Math.round((reviewsTodayStats.passed / reviewsTodayStats.total) * 100)
      : null;

  const activeBoardCustomCount = useMemo(
    () => getBoardCustomizationCount(targetBoard),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [targetBoard, weightsVersion]
  );

  const activeCalibration = useMemo(
    () =>
      activeCard
        ? resolveCardRetention(
            activeCard,
            retentionMode,
            targetBoard,
            userAccuracyByTopic,
            communityMedianByTopic
          )
        : null,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      activeCard,
      retentionMode,
      targetBoard,
      userAccuracyByTopic,
      communityMedianByTopic,
      weightsVersion,
    ]
  );

  const fsrsOutcomes = useMemo(
    () =>
      activeCard && activeCalibration
        ? computeAllFsrsOutcomes(activeCard, activeCalibration.retention, new Date(), {
            enableFuzz,
          })
        : null,
    [activeCard, activeCalibration, enableFuzz]
  );

  const activeRetrievabilityPct = activeCard
    ? getCardCurrentRetrievabilityPct(activeCard)
    : null;

  const hoveredOutcome =
    hoveredRating && fsrsOutcomes ? fsrsOutcomes[hoveredRating] : null;
  const hoveredConfig = hoveredRating
    ? RATING_CONFIG.find((c) => c.rating === hoveredRating) ?? null
    : null;

  const highIncidenceProjection = useMemo(
    () =>
      estimateDaysToTargetRetention(
        flashcards,
        targetBoard,
        userAccuracyByTopic,
        reviewsTodayStats,
        95
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      flashcards,
      targetBoard,
      userAccuracyByTopic,
      reviewsTodayStats,
      weightsVersion,
    ]
  );

  const projectionProgressPct = Math.min(
    100,
    Math.max(
      0,
      Math.round(
        (highIncidenceProjection.currentRetentionPct /
          highIncidenceProjection.targetRetentionPct) *
          100
      )
    )
  );

  const showExpandedHeader = viewMode === 'baralho' || showDeckControls || showCreateForm;

  const cardTypography = useMemo(() => {
    if (!activeCard) {
      return getAdaptiveFlashcardTypography('', '', false);
    }
    const backCombined = [activeCard.backPearl, activeCard.backAnswerSummary ?? '']
      .filter(Boolean)
      .join(' ');
    return getAdaptiveFlashcardTypography(activeCard.front, backCombined, flipped);
  }, [activeCard, flipped]);

  return (
    <div className="space-y-3">
      {/* Ultra-Compact Top Strip (keeps Front + Answer + 1-4 buttons above the fold with zero scroll) */}
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-2">
        <div className="inline-flex rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setViewMode('revisao')}
            className={cn(
              'rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
              viewMode === 'revisao'
                ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Revisão ({totalDueFiltered})
          </button>
          <button
            type="button"
            onClick={() => setViewMode('baralho')}
            className={cn(
              'rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
              viewMode === 'baralho'
                ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Baralho ({filteredCards.length})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs text-[#86868B] dark:text-slate-400">
          {(selectedArea !== 'all' || selectedTema !== '') && (
            <button
              type="button"
              onClick={() => {
                setSelectedArea('all');
                setSelectedTema('');
                setSessionIndex(0);
                setFlipped(false);
              }}
              title="Limpar filtro ativo do baralho"
              className="inline-flex items-center gap-1 rounded-full border border-[#007AFF]/30 bg-[#007AFF]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#007AFF] hover:bg-[#007AFF]/15 dark:border-sky-400/30 dark:bg-sky-500/15 dark:text-sky-300 transition-colors cursor-pointer"
            >
              <span className="max-w-[140px] truncate">
                {selectedTema ||
                  GRANDES_AREAS.find((a) => a.id === selectedArea)?.shortName ||
                  selectedArea}
              </span>
              <span aria-hidden="true">×</span>
            </button>
          )}

          {viewMode === 'revisao' && activeCard && (
            <span className="font-mono tabular-nums">
              {practiceAhead
                ? `${sessionIndex + 1}/${dueQueue.length}`
                : `Restam ${dueQueue.length}`}
            </span>
          )}

          {viewMode === 'revisao' && canUndoReview && onUndoReview && (
            <button
              type="button"
              onClick={() => {
                onUndoReview();
                setFlipped(false);
              }}
              title="Desfazer última avaliação (Z)"
              className="inline-flex items-center gap-1 rounded-lg border border-black/10 bg-white px-2 py-1 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Undo2 size={13} strokeWidth={1.5} />
              <span>Desfazer</span>
            </button>
          )}

          {viewMode === 'revisao' && (
            <button
              type="button"
              onClick={() => setShowDeckControls((v) => !v)}
              aria-expanded={showDeckControls}
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} className="text-[#86868B]" />
              <span>{showDeckControls ? 'Ocultar opções' : 'Filtros & FSRS'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Expandable Deck Stats, FSRS Retention & Filter Toolbar */}
      {showExpandedHeader && (
        <div className="space-y-4">
      {/* Compact High-Incidence 95% Retention Forecast Card */}
      <section
        aria-label="Estimativa de dias até atingir 95% de retenção em temas de alta incidência"
        className={cn(
          'rounded-xl border px-4 py-3.5 sm:px-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4',
          highIncidenceProjection.reachedTarget
            ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/60 dark:bg-emerald-950/20'
            : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
        )}
      >
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <div
            className={cn(
              'mt-0.5 sm:mt-0 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
              highIncidenceProjection.reachedTarget
                ? 'border-emerald-200 bg-emerald-100/70 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400'
                : 'border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-900/60 dark:bg-sky-950/40 dark:text-sky-400'
            )}
          >
            <Target className="h-4 w-4" />
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                Dias até atingir 95% de retenção
              </p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                · Alta incidência ({EXAM_BOARD_LABELS[targetBoard]})
              </span>
            </div>

            {highIncidenceProjection.estimatedDays === null ? (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Adicione flashcards de temas de alta incidência para projetar o prazo.
              </p>
            ) : (
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                <span>
                  Acerto atual:{' '}
                  <strong className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                    {highIncidenceProjection.accuracyPct.toFixed(1).replace('.', ',')}%
                  </strong>
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  Cadência:{' '}
                  <strong className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                    {Number.isInteger(highIncidenceProjection.dailyCadence)
                      ? highIncidenceProjection.dailyCadence
                      : highIncidenceProjection.dailyCadence.toFixed(1).replace('.', ',')}{' '}
                    cards/dia
                  </strong>
                  {highIncidenceProjection.isCadenceEstimated && (
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">
                      {' '}
                      (base)
                    </span>
                  )}
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  <strong className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                    {highIncidenceProjection.consolidatedCount}/
                    {highIncidenceProjection.highIncidenceCount}
                  </strong>{' '}
                  consolidados
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Progress toward 95% + Estimated Days Readout */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between lg:justify-end gap-4 shrink-0">
          {highIncidenceProjection.estimatedDays !== null && (
            <div className="w-36 sm:w-44 space-y-1">
              <div className="flex items-center justify-between font-mono text-[11px] tabular-nums">
                <span className="text-slate-500 dark:text-slate-400">
                  Atual{' '}
                  <strong className="text-slate-800 dark:text-slate-200">
                    {highIncidenceProjection.currentRetentionPct.toFixed(0)}%
                  </strong>
                </span>
                <span className="font-semibold text-sky-700 dark:text-sky-400">
                  Meta 95%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-300',
                    highIncidenceProjection.reachedTarget
                      ? 'bg-emerald-500'
                      : 'bg-sky-500'
                  )}
                  style={{ width: `${projectionProgressPct}%` }}
                />
              </div>
            </div>
          )}

          <div className="text-right">
            <p
              className={cn(
                'font-mono text-xl sm:text-2xl font-bold tabular-nums leading-none',
                highIncidenceProjection.reachedTarget
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : highIncidenceProjection.estimatedDays === null
                  ? 'text-slate-400 dark:text-slate-500'
                  : 'text-sky-600 dark:text-sky-400'
              )}
            >
              {highIncidenceProjection.estimatedDays === null
                ? '—'
                : highIncidenceProjection.reachedTarget
                ? 'Meta atingida'
                : highIncidenceProjection.estimatedDays === 1
                ? '~1 dia'
                : `~${highIncidenceProjection.estimatedDays} dias`}
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              {highIncidenceProjection.reachedTarget
                ? 'Retenção ≥95% consolidada'
                : 'Projeção FSRS no ritmo atual'}
            </p>
          </div>
        </div>
      </section>

      {/* Top 4-column KPI summary */}
      <section
        aria-label="Resumo de flashcards e repetição espaçada"
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Vencidos para Hoje
          </p>
          <p className="mt-1.5 font-mono text-2xl sm:text-3xl font-bold tabular-nums text-sky-600 dark:text-sky-400">
            {totalDueFiltered}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Fila ativa de revisão
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Revisados Hoje
          </p>
          <p className="mt-1.5 font-mono text-2xl sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
            {reviewsTodayStats.total}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Sessão atual salva
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Total no Baralho
          </p>
          <p className="mt-1.5 font-mono text-2xl sm:text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
            {filteredCards.length}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {flashcards.length} no total geral
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Retenção Hoje
          </p>
          <p className="mt-1.5 font-mono text-2xl sm:text-3xl font-bold tabular-nums text-emerald-600 dark:text-emerald-400">
            {retentionPct !== null ? `${retentionPct}%` : '—'}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Difícil, Bom ou Fácil
          </p>
        </div>
      </section>

      {/* Filter, Retention Target & View Mode Toolbar */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3">
          {/* Mode segmented tabs + discrete FSRS Desired Retention selector */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-lg bg-slate-100 p-1 dark:bg-slate-800">
              <button
                type="button"
                onClick={() => setViewMode('revisao')}
                className={cn(
                  'rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                  viewMode === 'revisao'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Sessão de Revisão ({totalDueFiltered})
              </button>
              <button
                type="button"
                onClick={() => setViewMode('baralho')}
                className={cn(
                  'rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                  viewMode === 'baralho'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Todos os Cards ({filteredCards.length})
              </button>
            </div>

            {/* Banca-Alvo Selector (UEPA, ENARE, Geral) + Calibrar Matriz Modal Trigger */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                Banca-Alvo:
              </span>
              <div
                role="group"
                aria-label="Selecionar banca-alvo para calibração FSRS"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 dark:border-slate-700 dark:bg-slate-950/60"
              >
                {BOARD_OPTIONS.map((opt) => {
                  const active = targetBoard === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => onChangeTargetBoard(opt.value)}
                      aria-pressed={active}
                      className={cn(
                        'rounded-md px-2.5 py-1 text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap',
                        active
                          ? retentionMode === 'dinamica'
                            ? 'bg-white text-sky-700 shadow-sm dark:bg-slate-800 dark:text-sky-300'
                            : 'bg-white text-slate-800 shadow-sm dark:bg-slate-800 dark:text-slate-200'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setWeightsModalOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 hover:border-sky-300 hover:bg-sky-50/70 hover:text-sky-800 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-sky-700 dark:hover:bg-sky-950/40 dark:hover:text-sky-300 transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                title="Configurar matriz de incidência por banca (UEPA, ENARE, Geral)"
              >
                <Settings className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
                <span>Calibrar Matriz</span>
                {activeBoardCustomCount > 0 && (
                  <span className="font-mono text-[10px] font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                    ({activeBoardCustomCount})
                  </span>
                )}
              </button>
            </div>

            {/* FSRS Target Retention Control (Dynamic + Fixed 85/90/95%) */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                Retenção FSRS:
              </span>
              <div
                role="group"
                aria-label="Modo de retenção desejada do algoritmo FSRS"
                className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5 dark:border-slate-700 dark:bg-slate-950/60"
              >
                {RETENTION_OPTIONS.map((opt) => {
                  const active = retentionMode === opt.value;
                  const isDynamicOpt = opt.value === 'dinamica';
                  return (
                    <button
                      key={String(opt.value)}
                      type="button"
                      onClick={() => onChangeRetentionMode(opt.value)}
                      aria-pressed={active}
                      className={cn(
                        'inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold tabular-nums transition-colors cursor-pointer whitespace-nowrap',
                        !isDynamicOpt && 'font-mono',
                        active
                          ? 'bg-white text-sky-700 shadow-sm dark:bg-slate-800 dark:text-sky-300'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      )}
                    >
                      {isDynamicOpt && <SlidersHorizontal className="h-3 w-3" />}
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>

              {onToggleEnableFuzz && (
                <button
                  type="button"
                  onClick={onToggleEnableFuzz}
                  aria-pressed={enableFuzz}
                  title={
                    enableFuzz
                      ? `Fuzz ${FSRS_ENGINE_NAME} ativo: distribui levemente intervalos longos para evitar acúmulo no mesmo dia`
                      : `Fuzz ${FSRS_ENGINE_NAME} desativado: usa intervalos determinísticos exatos`
                  }
                  className={cn(
                    'inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    enableFuzz
                      ? 'border-sky-200 bg-sky-50/70 text-sky-700 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-300'
                      : 'border-slate-200 bg-white text-slate-500 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400'
                  )}
                >
                  <Shuffle className="h-3 w-3" />
                  <span>Fuzz {enableFuzz ? 'ON' : 'OFF'}</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Select
              id="fc-filter-tema"
              placeholder="Todas as especialidades"
              value={selectedTema}
              options={availableTemas.map((t) => ({ value: t, label: t }))}
              onChange={(val) => {
                setSelectedTema(val);
                setSessionIndex(0);
              }}
              className="w-52"
            />
            <Button
              variant={showCreateForm ? 'secondary' : 'primary'}
              size="md"
              onClick={() => setShowCreateForm((s) => !s)}
            >
              {showCreateForm ? (
                <>
                  <X className="h-4 w-4" />
                  <span>Fechar</span>
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  <span>Novo Flashcard</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Grande Área filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <button
            type="button"
            onClick={() => {
              setSelectedArea('all');
              setSelectedTema('');
              setSessionIndex(0);
            }}
            className={cn(
              'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
              selectedArea === 'all'
                ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            )}
          >
            Todas as Áreas
          </button>
          {GRANDES_AREAS.map((area) => {
            const dueInArea = flashcards.filter(
              (fc) => fc.grandeAreaId === area.id && isCardDueToday(fc)
            ).length;
            const active = selectedArea === area.id;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => {
                  setSelectedArea(area.id);
                  setSelectedTema('');
                  setSessionIndex(0);
                }}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap tabular-nums',
                  active
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                )}
              >
                {area.shortName}
                {dueInArea > 0 ? ` (${dueInArea})` : ''}
              </button>
            );
          })}
        </div>

        {/* Collapsible Custom Flashcard Creator */}
        {showCreateForm && (
          <form
            onSubmit={handleCreateSubmit}
            className="border-t border-slate-200 pt-4 dark:border-slate-800 space-y-3"
          >
            <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Criar Flashcard Manual
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                id="new-fc-area"
                label="Grande Área"
                value={newArea}
                options={GRANDES_AREAS.map((a) => ({ value: a.id, label: a.name }))}
                onChange={(val) => setNewArea(val as GrandeAreaId)}
              />
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="new-fc-tema"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Especialidade / Tema
                </label>
                <input
                  id="new-fc-tema"
                  type="text"
                  value={newTema}
                  onChange={(e) => setNewTema(e.target.value)}
                  placeholder="Ex.: Cardiologia, Trauma, Neonatologia"
                  className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="new-fc-front"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Frente (Pergunta objetiva ou mini-caso clínico)
                </label>
                <textarea
                  id="new-fc-front"
                  rows={3}
                  required
                  value={newFront}
                  onChange={(e) => setNewFront(e.target.value)}
                  placeholder="Ex.: Qual a conduta imediata na hipercalemia grave com alargamento de QRS?"
                  className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="new-fc-back"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Verso (Resposta direta / Conduta)
                </label>
                <textarea
                  id="new-fc-back"
                  rows={3}
                  required
                  value={newBack}
                  onChange={(e) => setNewBack(e.target.value)}
                  placeholder="Ex.: **Gluconato de cálcio 10%** (10 mL IV em 2–5 min) ou fórmulas como $VPP = \frac{VP}{VP + FP}$."
                  className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Suporta Markdown (<code className="font-mono">**negrito**</code>, listas, tabelas) e fórmulas LaTeX (<code className="font-mono">$...$</code> ou <code className="font-mono">$$...$$</code>).
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowCreateForm(false)}
              >
                Cancelar
              </Button>
              <Button type="submit" variant="primary" size="sm">
                Salvar no baralho
              </Button>
            </div>
          </form>
        )}
      </section>
        </div>
      )}

      {/* VIEW 1: ACTIVE ANKI-STYLE SRS REVIEW STAGE (Front + Answer only, zero scroll) */}
      {viewMode === 'revisao' && (
        <div className="mx-auto w-full max-w-3xl">
          {activeCard ? (
            <article className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white dark:border-white/[0.08] dark:bg-[#131926] min-h-[340px] max-h-[calc(100vh-145px)] overflow-hidden">
              {/* Pure Card Content: Front + Answer directly below when revealed */}
              <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7 flex flex-col justify-center space-y-5">
                <ClinicalMarkdown
                  content={activeCard.front}
                  className={cn(
                    'max-w-[68ch] font-medium text-[#1D1D1F] dark:text-slate-100',
                    cardTypography.frontClass
                  )}
                />

                {flipped && (
                  <div className="border-t border-black/8 pt-4 dark:border-white/[0.08] space-y-2.5">
                    <ClinicalMarkdown
                      content={activeCard.backPearl}
                      className={cn(
                        'max-w-[68ch] font-medium text-[#1D1D1F] dark:text-white',
                        cardTypography.backClass
                      )}
                    />

                    {activeCard.backAnswerSummary && (
                      <ClinicalMarkdown
                        content={activeCard.backAnswerSummary}
                        compact
                        className={cn(
                          'max-w-[68ch] text-[#86868B] dark:text-slate-300',
                          cardTypography.summaryClass
                        )}
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Pinned Anki Bottom Control Bar (Zero-scroll keyboard & click ergonomics) */}
              <div className="shrink-0 border-t border-black/5 bg-[#F5F5F7]/75 px-5 py-3.5 sm:px-6 dark:border-white/[0.07] dark:bg-[#151820]">
                {!flipped ? (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-[#86868B] dark:text-slate-400">
                      <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-[11px] text-[#1D1D1F] dark:border-white/15 dark:bg-slate-800 dark:text-slate-200">
                        Espaço
                      </kbd>
                      <span>ou</span>
                      <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-[11px] text-[#1D1D1F] dark:border-white/15 dark:bg-slate-800 dark:text-slate-200">
                        Enter
                      </kbd>
                      <span>para mostrar</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setFlipped(true)}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#007AFF] px-5 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition-colors cursor-pointer"
                    >
                      <RotateCw size={15} strokeWidth={1.5} />
                      <span>Mostrar resposta</span>
                    </button>
                  </div>
                ) : (
                  fsrsOutcomes && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {RATING_CONFIG.map((cfg) => {
                          const outcome = fsrsOutcomes[cfg.rating];
                          const isPressed = pressedRating === cfg.rating;

                          return (
                            <button
                              key={cfg.rating}
                              type="button"
                              onClick={() => triggerRateWithFeedback(cfg.rating)}
                              className={cn(
                                'w-full flex flex-col items-center justify-center gap-0.5 rounded-xl border px-3 py-2 text-center transition-[transform,background-color,border-color,box-shadow] duration-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2',
                                cfg.buttonClass,
                                isPressed &&
                                  'scale-[0.97] ring-2 ring-[#007AFF] brightness-95'
                              )}
                            >
                              <span
                                className={cn(
                                  'inline-flex items-center gap-1.5 text-xs font-semibold',
                                  cfg.textClass
                                )}
                              >
                                <kbd className="rounded border border-current/25 px-1 font-mono text-[10px] leading-tight">
                                  {cfg.keyHint}
                                </kbd>
                                <span>{cfg.label}</span>
                              </span>
                              <span
                                className={cn(
                                  'font-mono text-[11px] tabular-nums',
                                  cfg.subTextClass
                                )}
                              >
                                {outcome.longPreviewLabel}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#86868B] dark:text-slate-400">
                        <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#1D1D1F] dark:border-white/15 dark:bg-slate-800 dark:text-slate-200">
                          1
                        </kbd>
                        <span>–</span>
                        <kbd className="rounded border border-black/15 bg-white px-1.5 py-0.5 font-mono text-[10px] text-[#1D1D1F] dark:border-white/15 dark:bg-slate-800 dark:text-slate-200">
                          4
                        </kbd>
                        <span>para avaliar</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </article>
          ) : (
            <section className="rounded-xl border border-slate-200 bg-white p-10 sm:p-12 text-center dark:border-slate-800 dark:bg-slate-900 space-y-4">
              <CheckCircle2 className="mx-auto h-9 w-9 text-emerald-600 dark:text-emerald-400" />
              <div className="space-y-1.5">
                <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {filteredCards.length === 0
                    ? 'Nenhum flashcard neste filtro ainda'
                    : 'Revisão de hoje concluída!'}
                </h2>
                <p className="mx-auto max-w-md text-sm text-slate-500 dark:text-slate-400">
                  {filteredCards.length === 0
                    ? 'Responda questões e clique em "Criar Flashcard" ou adicione um card manual acima.'
                    : `Você revisou todos os flashcards vencidos para hoje nesta seleção. Seus próximos intervalos já estão agendados pelo motor ${FSRS_ENGINE_NAME}${
                        reviewLogCount > 0
                          ? ` (${reviewLogCount} revisões registradas no histórico)`
                          : ''
                      }.`}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {canUndoReview && onUndoReview && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      onUndoReview();
                      setFlipped(false);
                    }}
                  >
                    <Undo2 className="h-4 w-4" />
                    <span>Desfazer última revisão</span>
                  </Button>
                )}
                {filteredCards.length > 0 && !practiceAhead && (
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => {
                      setPracticeAhead(true);
                      setSessionIndex(0);
                    }}
                  >
                    <Layers className="h-4 w-4" />
                    <span>Revisar adiantado ({filteredCards.length})</span>
                  </Button>
                )}
                <Button variant="primary" size="md" onClick={onGoToQuestions}>
                  <BookOpen className="h-4 w-4" />
                  <span>Ir para o Banco de Questões</span>
                </Button>
              </div>
            </section>
          )}
        </div>
      )}

      {/* VIEW 2: FULL DECK MANAGEMENT TABLE */}
      {viewMode === 'baralho' && (
        <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
          {filteredCards.length === 0 ? (
            <div className="p-12 text-center text-sm text-slate-500 dark:text-slate-400">
              Nenhum flashcard encontrado para o filtro selecionado.
            </div>
          ) : (
            <VirtualList
              items={filteredCards}
              getItemKey={(fc) => fc.id}
              estimateSize={128}
              ariaLabel="Todos os flashcards do baralho"
              renderItem={(fc) => {
                const due = isCardDueToday(fc);
                const nextDate = new Date(fc.dueAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                });
                const cardCalibration = resolveCardRetention(
                  fc,
                  retentionMode,
                  targetBoard,
                  userAccuracyByTopic,
                  communityMedianByTopic
                );

                return (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                    <div className="min-w-0 flex-1 space-y-1.5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-sky-700 dark:text-sky-400">
                          {fc.grandeArea}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {fc.tema}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span
                          title={cardCalibration.summaryLabel}
                          className={cn(
                            'font-mono font-semibold tabular-nums',
                            cardCalibration.mode === 'dinamica' &&
                              cardCalibration.individualStatus === 'ponto_atencao'
                              ? 'text-amber-700 dark:text-amber-400'
                              : 'text-sky-700 dark:text-sky-400'
                          )}
                        >
                          {cardCalibration.summaryLabel}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span
                          className={cn(
                            'inline-flex items-center gap-1 font-semibold tabular-nums',
                            due
                              ? 'text-amber-700 dark:text-amber-400'
                              : 'text-emerald-700 dark:text-emerald-400'
                          )}
                        >
                          <Clock className="h-3 w-3" />
                          <span>
                            {due
                              ? 'Vencido hoje'
                              : `Próxima revisão: ${nextDate} (${formatFsrsInterval(fc.scheduled_days)})`}
                          </span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">
                          {FSRS_STATE_LABEL[fc.state]} · S {fc.stability.toFixed(1)}d · D{' '}
                          {fc.difficulty.toFixed(1)} · Reps {fc.reps}
                          {fc.lapses > 0 ? ` · Lapses ${fc.lapses}` : ''}
                        </span>
                        {fc.lapses >= 6 && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="inline-flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400">
                              <AlertTriangle className="h-3 w-3" />
                              <span>Card difícil</span>
                            </span>
                          </>
                        )}
                      </div>

                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 max-w-[75ch]">
                        <ClinicalMarkdown
                          content={fc.front}
                          inline
                          className="text-slate-900 dark:text-slate-100"
                        />
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 max-w-[75ch]">
                        <span className="font-medium text-slate-500 dark:text-slate-400">
                          Resposta:{' '}
                        </span>
                        <ClinicalMarkdown
                          content={fc.backPearl}
                          inline
                          className="text-slate-600 dark:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {fc.questionId && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onOpenOriginalQuestion(fc.questionId!)}
                        >
                          <span>Questão</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Excluir flashcard"
                        title="Excluir flashcard"
                        onClick={() => onDeleteCard(fc.id)}
                        className="text-slate-400 hover:text-red-600 dark:hover:text-red-400"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              }}
            />
          )}
        </section>
      )}

      {/* Interactive Exam Incidence Matrix Modal */}
      <ExamWeightsModal
        open={weightsModalOpen}
        initialBoard={targetBoard}
        onClose={() => {
          setWeightsModalOpen(false);
          setWeightsVersion((v) => v + 1);
        }}
        onWeightsChange={() => setWeightsVersion((v) => v + 1)}
      />
    </div>
  );
}
