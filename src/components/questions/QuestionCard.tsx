import React, { useMemo, useState, useEffect } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Strikethrough,
  Flag,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  FileText,
  Users,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Layers,
  Check,
  X,
  Lightbulb,
  HelpCircle,
  Map as MapIcon,
  Target,
  SlidersHorizontal,
  Sparkles,
  Loader2,
} from 'lucide-react';
import type {
  AlternativeLetter,
  MedicalQuestion,
  StudyMode,
  UserAnswerRecord,
} from '../../types/medical';
import { computeDifficulty, cn } from '../../lib/utils';
import { ClinicalImageViewer } from './ClinicalImageViewer';
import {
  StudentVsMedianBar,
  type BenchmarkSlice,
} from './StudentVsMedianBar';
import { Button } from '../ui/Button';
import { ClinicalMarkdown } from '../ui/ClinicalMarkdown';

export interface SessionQuestionSummary {
  id: string;
  institutionLabel: string;
  tema: string;
  status: 'correct' | 'wrong' | 'draft' | 'unanswered';
  isFlagged: boolean;
}

interface QuestionCardProps {
  question: MedicalQuestion;
  index: number;
  total: number;
  mode: StudyMode;
  existingAnswer?: UserAnswerRecord;
  simuladoDraft?: AlternativeLetter;
  simuladoFinished: boolean;
  isBookmarked: boolean;
  isFlagged: boolean;
  onToggleBookmark: () => void;
  onToggleFlag: () => void;
  onSubmitStudyAnswer: (letter: AlternativeLetter) => void;
  onSelectSimuladoDraft: (letter: AlternativeLetter) => void;
  onPrev: () => void;
  onNext: () => void;
  sessionQuestions?: SessionQuestionSummary[];
  onSelectQuestionIndex?: (idx: number) => void;
  filtersOpen?: boolean;
  onToggleFilters?: () => void;
  onFinishSession?: () => void;
  benchmarks?: {
    topic: BenchmarkSlice;
    area: BenchmarkSlice;
    overall: BenchmarkSlice;
  };
  hasFlashcard?: boolean;
  onCreateFlashcard?: () => void;
  onOpenFlashcards?: () => void;
  readingComfort?: boolean;
  seamless?: boolean;
  onGenerateAiCommentary?: (question: MedicalQuestion) => Promise<MedicalQuestion>;
}

type CommentaryTab = 'alternativas' | 'referencias';

export function QuestionCard({
  question,
  index,
  total,
  mode,
  existingAnswer,
  simuladoDraft,
  simuladoFinished,
  isBookmarked,
  isFlagged,
  onToggleBookmark,
  onToggleFlag,
  onSubmitStudyAnswer,
  onSelectSimuladoDraft,
  onPrev,
  onNext,
  sessionQuestions = [],
  onSelectQuestionIndex,
  filtersOpen,
  onToggleFilters,
  onFinishSession,
  benchmarks,
  hasFlashcard = false,
  onCreateFlashcard,
  onOpenFlashcards,
  readingComfort = false,
  seamless = false,
  onGenerateAiCommentary,
}: QuestionCardProps) {
  const [selectedPending, setSelectedPending] = useState<AlternativeLetter | null>(null);
  const [eliminated, setEliminated] = useState<AlternativeLetter[]>([]);
  const [strikeToolActive, setStrikeToolActive] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [expandedComments, setExpandedComments] = useState<AlternativeLetter[]>([]);
  const [commentTab, setCommentTab] = useState<CommentaryTab>('alternativas');
  const [showCommunityStats, setShowCommunityStats] = useState(false);
  const [isGeneratingComment, setIsGeneratingComment] = useState(false);
  const [commentError, setCommentError] = useState<string | null>(null);

  // Reset local interactive state when navigating to a new question
  useEffect(() => {
    setSelectedPending(null);
    setEliminated([]);
    setStrikeToolActive(false);
    setShowHint(false);
    setShowHelp(false);
    setShowMap(false);
    setExpandedComments([]);
    setCommentTab('alternativas');
    setShowCommunityStats(false);
    setIsGeneratingComment(false);
    setCommentError(null);
  }, [question.id]);

  const isRevealed =
    (mode === 'estudo' && Boolean(existingAnswer)) ||
    (mode === 'simulado' && simuladoFinished);

  const activeChoice: AlternativeLetter | null =
    mode === 'simulado'
      ? simuladoDraft ?? null
      : existingAnswer?.selectedLetter ?? selectedPending;

  const difficulty = computeDifficulty(question.taxaAcertoGlobal);

  const sessionCorrectCount = useMemo(
    () => sessionQuestions.filter((q) => q.status === 'correct').length,
    [sessionQuestions]
  );

  // Identify Principal Distrator (highest community % among WRONG options)
  const principalDistractor = useMemo(() => {
    const wrongOptions = question.alternativas.filter(
      (a) => a.letter !== question.gabaritoOficial
    );
    return wrongOptions.reduce(
      (best, cur) => (cur.communityPct > best.communityPct ? cur : best),
      wrongOptions[0]
    );
  }, [question]);

  const toggleEliminate = (letter: AlternativeLetter, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isRevealed) return;
    setEliminated((prev) =>
      prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
    );
    if (selectedPending === letter) {
      setSelectedPending(null);
    }
  };

  const handleOptionClick = (letter: AlternativeLetter) => {
    if (isRevealed) return;
    if (strikeToolActive) {
      toggleEliminate(letter);
      return;
    }
    if (eliminated.includes(letter)) return;
    if (mode === 'simulado') {
      onSelectSimuladoDraft(letter);
    } else {
      setSelectedPending(letter);
    }
  };

  const handleToggleInlineComment = (
    letter: AlternativeLetter,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    setExpandedComments((prev) =>
      prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
    );
  };

  const handleConfirmStudy = () => {
    if (!selectedPending || mode !== 'estudo' || isRevealed) return;
    onSubmitStudyAnswer(selectedPending);
  };

  // Keyboard shortcuts for fast medical residency solving (A-E, Enter, Left/Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (
        document.body.dataset.medr1ModalOpen === 'true' ||
        document.querySelector('[role="dialog"][aria-modal="true"]')
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault();
        onPrev();
        return;
      }
      if (e.key === 'ArrowRight' && index < total - 1) {
        e.preventDefault();
        onNext();
        return;
      }

      if (!isRevealed) {
        const upper = e.key.toUpperCase() as AlternativeLetter;
        const validLetters = question.alternativas.map((a) => a.letter);
        if (validLetters.includes(upper) && !eliminated.includes(upper)) {
          e.preventDefault();
          if (mode === 'simulado') {
            onSelectSimuladoDraft(upper);
          } else {
            setSelectedPending(upper);
          }
          return;
        }
        if (e.key === 'Enter' && mode === 'estudo' && selectedPending) {
          e.preventDefault();
          onSubmitStudyAnswer(selectedPending);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    index,
    total,
    onPrev,
    onNext,
    isRevealed,
    question.alternativas,
    eliminated,
    mode,
    onSelectSimuladoDraft,
    selectedPending,
    onSubmitStudyAnswer,
  ]);

  const isUserCorrect =
    isRevealed && activeChoice === question.gabaritoOficial;

  const difficultyLabel =
    difficulty === 'Difícil'
      ? 'Dificuldade: Difícil'
      : difficulty === 'Médio'
      ? 'Dificuldade: Moderada'
      : 'Dificuldade: Fácil';

  const handleGenerateAiComment = async () => {
    if (!onGenerateAiCommentary || isGeneratingComment) return;
    setIsGeneratingComment(true);
    setCommentError(null);
    try {
      await onGenerateAiCommentary(question);
    } catch (err) {
      setCommentError(
        err instanceof Error
          ? err.message
          : 'Não foi possível gerar o comentário agora.'
      );
    } finally {
      setIsGeneratingComment(false);
    }
  };

  return (
    <article
      className={cn(
        'relative transition-colors duration-200',
        seamless
          ? 'bg-transparent'
          : cn(
              'rounded-2xl border shadow-xs',
              readingComfort
                ? 'border-stone-200/90 bg-[#FCFBF8] dark:border-white/[0.08] dark:bg-[#161A22]'
                : 'border-slate-200/90 bg-white dark:border-white/[0.08] dark:bg-[#1B1F27]'
            )
      )}
    >
      {/* Top Session Bar + Segmented Progress Track */}
      <div
        className={cn(
          'space-y-4 border-b border-slate-100 dark:border-white/[0.07]',
          seamless ? 'pt-1 pb-4' : 'px-5 pt-5 pb-4 sm:px-8 sm:pt-6'
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Left: Back/Filters Toggle + Quiet Question Counter */}
          <div className="flex items-center gap-3 min-w-0">
            {onToggleFilters && (
              <button
                type="button"
                onClick={onToggleFilters}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                {filtersOpen ? (
                  <>
                    <ArrowLeft size={16} strokeWidth={1.5} />
                    <span>Ocultar filtros</span>
                  </>
                ) : (
                  <>
                    <SlidersHorizontal size={16} strokeWidth={1.5} />
                    <span>Filtros</span>
                  </>
                )}
              </button>
            )}

            <h2 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-white tabular-nums whitespace-nowrap">
              Questão {index + 1}
              <span className="ml-1 font-mono text-sm font-normal text-slate-400 dark:text-slate-500">
                / {total}
              </span>
            </h2>
          </div>

          {/* Right: Session Hits Counter + Finalizar + Bookmark */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {sessionQuestions.length > 0 && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-mono text-slate-500 dark:text-slate-400 tabular-nums whitespace-nowrap">
                <Target size={16} strokeWidth={1.5} className="text-slate-400" />
                <span>
                  {sessionCorrectCount}{' '}
                  {sessionCorrectCount === 1 ? 'acerto' : 'acertos'}
                </span>
              </span>
            )}

            {mode === 'simulado' && !simuladoFinished && (
              <button
                type="button"
                onClick={onToggleFlag}
                aria-pressed={isFlagged}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  isFlagged
                    ? 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
                )}
              >
                <Flag
                  size={16}
                  strokeWidth={1.5}
                  className={cn(
                    isFlagged && 'fill-amber-500 text-amber-500'
                  )}
                />
                <span>{isFlagged ? 'Marcada' : 'Dúvida'}</span>
              </button>
            )}

            {onFinishSession && (
              <button
                type="button"
                onClick={onFinishSession}
                className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50/80 px-3 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-100/80 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/70 transition-colors cursor-pointer whitespace-nowrap"
              >
                <Check size={16} strokeWidth={1.5} />
                <span>Finalizar</span>
              </button>
            )}

            <button
              type="button"
              onClick={onToggleBookmark}
              aria-pressed={isBookmarked}
              title={isBookmarked ? 'Remover do Caderno de Erros' : 'Salvar no Caderno de Erros'}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                isBookmarked
                  ? 'border-[#007AFF]/30 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              )}
            >
              <Bookmark
                size={16}
                strokeWidth={1.5}
                className={cn(
                  isBookmarked && 'fill-[#007AFF] text-[#007AFF] dark:fill-sky-400 dark:text-sky-400'
                )}
              />
              <span className="hidden sm:inline">
                {isBookmarked ? 'Salva' : 'Salvar'}
              </span>
            </button>
          </div>
        </div>

        {/* Segmented Progress Bar (clickable per question) */}
        {sessionQuestions.length > 0 && (
          <div
            className="flex items-center gap-1"
            role="tablist"
            aria-label="Progresso das questões na sessão"
          >
            {sessionQuestions.map((sq, idx) => {
              const isCurrent = idx === index;
              return (
                <button
                  key={sq.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => onSelectQuestionIndex?.(idx)}
                  title={`Questão ${idx + 1} · ${sq.institutionLabel} · ${sq.tema}`}
                  className={cn(
                    'h-1.5 flex-1 rounded-full transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]',
                    sq.status === 'correct' && 'bg-emerald-500 dark:bg-emerald-500',
                    sq.status === 'wrong' && 'bg-red-500 dark:bg-red-500',
                    sq.status === 'draft' && 'bg-[#007AFF] dark:bg-sky-500',
                    sq.status === 'unanswered' &&
                      (isCurrent
                        ? 'bg-[#007AFF] dark:bg-sky-400'
                        : 'bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700'),
                    isCurrent &&
                      'ring-2 ring-[#007AFF]/35 ring-offset-1 dark:ring-offset-slate-900'
                  )}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Topic Metadata + 3 Circular Study Tool Buttons */}
      <div
        className={cn(
          'pt-5 flex flex-wrap items-center justify-between gap-3',
          !seamless && 'px-5 sm:px-8'
        )}
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
          <div className="inline-flex flex-wrap items-center gap-1.5" aria-label="Taxonomia v1 da questão">
            <span className="inline-flex items-center rounded-md border border-black/5 bg-[#F5F5F7] px-2 py-0.5 text-[11px] font-medium text-[#1D1D1F] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
              {question.grandeArea}
            </span>
            <span className="inline-flex items-center rounded-md border border-black/5 bg-[#F5F5F7] px-2 py-0.5 text-[11px] font-medium text-[#1D1D1F] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
              {question.tema}
            </span>
            {(mode !== 'simulado' || isRevealed) && question.subtema && (
              <span className="inline-flex items-center rounded-md border border-[#007AFF]/15 bg-[#007AFF]/[0.08] px-2 py-0.5 text-[11px] font-medium text-[#007AFF] dark:border-sky-400/20 dark:bg-sky-500/15 dark:text-sky-300">
                {question.subtema}
              </span>
            )}
          </div>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
            ·
          </span>
          <span
            className={cn(
              'font-medium',
              difficulty === 'Fácil' && 'text-emerald-700 dark:text-emerald-400',
              difficulty === 'Médio' && 'text-amber-700 dark:text-amber-400',
              difficulty === 'Difícil' && 'text-slate-600 dark:text-slate-300'
            )}
          >
            {difficultyLabel}
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
            ·
          </span>
          <span className="font-mono text-slate-500 dark:text-slate-400 tabular-nums">
            {question.instituicao} {question.ano} · {question.banca}
          </span>
        </div>

        {/* 3 Circular Study Tool Buttons (Riscar, Dica, Atalhos) */}
        <div className="flex items-center gap-2 shrink-0">
          {!isRevealed && (
            <button
              type="button"
              onClick={() => setStrikeToolActive((s) => !s)}
              aria-pressed={strikeToolActive}
              title={
                strikeToolActive
                  ? 'Desativar modo riscar alternativas'
                  : 'Ativar modo riscar alternativas (clique nas opções para eliminar)'
              }
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-full border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
                strikeToolActive
                  ? 'border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400 dark:bg-sky-950/60 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
              )}
            >
              <Strikethrough className="h-4 w-4" />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              setShowHint((h) => !h);
              setShowHelp(false);
            }}
            aria-pressed={showHint}
            title="Ver foco clínico da questão (sem spoiler)"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
              showHint
                ? 'border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-600 dark:bg-amber-950/50 dark:text-amber-300'
                : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            )}
          >
            <Lightbulb className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              setShowHelp((h) => !h);
              setShowHint(false);
            }}
            aria-pressed={showHelp}
            title="Atalhos de teclado e ajuda"
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
              showHelp
                ? 'border-sky-400 bg-sky-50 text-sky-700 dark:border-sky-600 dark:bg-sky-950/50 dark:text-sky-300'
                : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            )}
          >
            <HelpCircle className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Optional Hint / Keyboard Help Inline Drawer */}
      {showHint && (
        <div
          className={cn(
            'mt-3.5 rounded-2xl border border-amber-200/80 bg-amber-50/60 px-4 py-3 text-xs text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200 flex items-start justify-between gap-3',
            !seamless && 'mx-5 sm:mx-8'
          )}
        >
          <div className="space-y-0.5">
            <p className="font-semibold">Foco Clínico (sem revelar o gabarito)</p>
            <p className="text-amber-900/90 dark:text-amber-200/90">
              {question.grandeArea} / {question.tema} /{' '}
              <strong>{question.subtema}</strong> · {question.tipoProva} · Taxa
              média da comunidade:{' '}
              <span className="font-mono font-semibold tabular-nums">
                {question.taxaAcertoGlobal.toFixed(1)}%
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowHint(false)}
            aria-label="Fechar dica"
            className="text-amber-700 hover:text-amber-900 dark:text-amber-400 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {showHelp && (
        <div
          className={cn(
            'mt-3.5 rounded-2xl border border-slate-200/80 bg-[#F6F8FC] px-4 py-3 text-xs text-slate-600 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-slate-300 flex items-start justify-between gap-3',
            !seamless && 'mx-5 sm:mx-8'
          )}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="font-semibold text-slate-900 dark:text-white">
              Atalhos rápidos:
            </span>
            <span>
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-white/[0.12] dark:bg-[#232833]">
                A–E
              </kbd>{' '}
              selecionar alternativa
            </span>
            <span>
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-white/[0.12] dark:bg-[#232833]">
                Enter
              </kbd>{' '}
              responder
            </span>
            <span>
              <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-white/[0.12] dark:bg-[#232833]">
                ← / →
              </kbd>{' '}
              navegar questões
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowHelp(false)}
            aria-label="Fechar ajuda"
            className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Strike Mode Active Notice */}
      {strikeToolActive && !isRevealed && (
        <div
          className={cn(
            'mt-3.5 rounded-2xl border border-[#1A56DB]/25 bg-[#E8F0FE]/75 px-4 py-2.5 text-xs text-[#1A56DB] dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-200 flex items-center justify-between gap-2',
            !seamless && 'mx-5 sm:mx-8'
          )}
        >
          <span>
            Modo riscar ativo: clique nas alternativas que deseja eliminar antes de responder.
          </span>
          <button
            type="button"
            onClick={() => setStrikeToolActive(false)}
            className="font-semibold hover:underline cursor-pointer whitespace-nowrap"
          >
            Concluir
          </button>
        </div>
      )}

      {/* Notice banner if Annulled or Outdated */}
      {(question.anulada || question.desatualizada) && (
        <div
          className={cn(
            'mt-4 flex items-start gap-2.5 rounded-2xl border border-amber-200/80 bg-amber-50/70 px-4 py-3 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200',
            !seamless && 'mx-5 sm:mx-8'
          )}
        >
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          <p>
            <strong>
              {question.anulada
                ? 'Questão anulada pela banca oficial.'
                : 'Questão marcada como desatualizada.'}
            </strong>{' '}
            Ative o filtro &ldquo;Excluir anuladas/desatualizadas&rdquo; para removê-la da sua lista de treino.
          </p>
        </div>
      )}

      {/* Question Stem & Alternatives */}
      <div className={cn('py-6', !seamless && 'px-5 sm:px-8')}>
        <div
          className={cn(
            'space-y-5',
            readingComfort ? 'max-w-[68ch]' : 'max-w-[75ch]'
          )}
        >
          <p
            className={cn(
              'whitespace-pre-line text-slate-800 dark:text-slate-100',
              readingComfort
                ? 'text-[17px] sm:text-[18px] leading-[1.85] tracking-[0.005em] dark:text-slate-200'
                : 'text-[15.5px] sm:text-[16.5px] leading-[1.74]'
            )}
          >
            {question.enunciado}
          </p>

          {/* Optional Clinical Image with Zoom Lightbox */}
          {question.clinicalImage && (
            <ClinicalImageViewer image={question.clinicalImage} />
          )}

          {/* Optional Structured Lab Table */}
          {question.labTable && question.labTable.length > 0 && (
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold">Exame Laboratorial</th>
                    <th className="px-4 py-2.5 font-semibold text-right">Resultado</th>
                    <th className="px-4 py-2.5 font-semibold text-right">Referência</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {question.labTable.map((row, rowIdx) => (
                    <tr
                      key={`${row.exame}-${rowIdx}`}
                      className="bg-white dark:bg-slate-900 hover:bg-slate-50/70 dark:hover:bg-slate-800/40"
                    >
                      <td className="px-4 py-2.5 font-medium text-slate-800 dark:text-slate-200">
                        {row.exame}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono tabular-nums">
                        <span
                          className={cn(
                            'inline-flex items-center justify-end gap-1 font-semibold',
                            row.alterado === 'alto' && 'text-red-700 dark:text-red-400',
                            row.alterado === 'baixo' && 'text-sky-700 dark:text-sky-400',
                            (!row.alterado || row.alterado === 'normal') &&
                              'text-slate-900 dark:text-slate-100'
                          )}
                        >
                          {row.alterado === 'alto' && (
                            <ArrowUp className="h-3.5 w-3.5" aria-label="Elevado" />
                          )}
                          {row.alterado === 'baixo' && (
                            <ArrowDown className="h-3.5 w-3.5" aria-label="Reduzido" />
                          )}
                          {row.resultado}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                        {row.referencia}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Alternatives List (Clean Cards + Inline Expandable "Ver comentário") */}
        <div
          className="mt-7 space-y-3"
          role="radiogroup"
          aria-label="Alternativas da questão"
        >
          {question.alternativas.map((alt) => {
            const isEliminated = eliminated.includes(alt.letter);
            const isSelected = activeChoice === alt.letter;
            const isOfficial = alt.letter === question.gabaritoOficial;
            const isWrongChosen = isRevealed && isSelected && !isOfficial;
            const isPrincipalDistractor =
              isRevealed &&
              !isOfficial &&
              principalDistractor?.letter === alt.letter;
            const isCommentExpanded = expandedComments.includes(alt.letter);

            const showInlineConfirm =
              mode === 'estudo' && isSelected && !isRevealed && !isEliminated;

            return (
              <div
                key={alt.letter}
                data-option-card="true"
                onClick={() => handleOptionClick(alt.letter)}
                role="button"
                aria-pressed={isSelected}
                tabIndex={isRevealed ? -1 : 0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.key === 'Enter' && showInlineConfirm) {
                      handleConfirmStudy();
                    } else {
                      handleOptionClick(alt.letter);
                    }
                    return;
                  }
                  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    e.stopPropagation();
                    const group = e.currentTarget.parentElement;
                    if (!group) return;
                    const options = Array.from(
                      group.querySelectorAll<HTMLElement>('[data-option-card="true"]')
                    );
                    const currentIdx = options.indexOf(e.currentTarget);
                    if (currentIdx === -1 || options.length === 0) return;
                    const delta = e.key === 'ArrowDown' ? 1 : -1;
                    const nextIdx = (currentIdx + delta + options.length) % options.length;
                    options[nextIdx]?.focus();
                  }
                }}
                className={cn(
                  'group relative rounded-xl border px-4 py-3.5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]',
                  !isRevealed && !isEliminated && 'cursor-pointer',
                  !isRevealed &&
                    isEliminated &&
                    'opacity-50 border-slate-200/60 bg-slate-50 dark:border-white/[0.05] dark:bg-white/[0.02]',
                  !isRevealed &&
                    isSelected &&
                    'border-[#007AFF]/50 bg-[#E8F0FE]/75 dark:border-sky-400/70 dark:bg-sky-500/15',
                  !isRevealed &&
                    !isSelected &&
                    !isEliminated &&
                    'border-slate-200/75 bg-[#F6F8FC]/85 hover:border-slate-300/85 hover:bg-[#EDF2FA]/75 dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.06]',
                  isRevealed &&
                    isOfficial &&
                    'border-emerald-300/85 bg-emerald-50/70 dark:border-emerald-500/35 dark:bg-emerald-500/12',
                  isRevealed &&
                    isWrongChosen &&
                    'border-red-300/85 bg-red-50/70 dark:border-red-500/35 dark:bg-red-500/12',
                  isRevealed &&
                    !isOfficial &&
                    !isWrongChosen &&
                    'border-slate-200/70 bg-[#F6F8FC]/65 dark:border-white/[0.06] dark:bg-white/[0.02]'
                )}
              >
                <div
                  className={cn(
                    showInlineConfirm
                      ? 'flex flex-col sm:flex-row sm:items-start gap-2.5 sm:gap-3'
                      : 'flex items-start gap-3'
                  )}
                >
                  {/* Left Rail: Inline Confirm Button (when selected pre-answer) + Letter Badge */}
                  <div className="flex items-center gap-2 shrink-0">
                    {showInlineConfirm && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleConfirmStudy();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();
                            handleConfirmStudy();
                          }
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#007AFF] px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-1 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <span>Confirmar</span>
                        <kbd className="hidden sm:inline-flex items-center rounded border border-white/25 bg-white/15 px-1 py-0.5 font-mono text-[10px] font-medium leading-none">
                          Enter
                        </kbd>
                      </button>
                    )}

                    {/* Circular Letter Badge (transforms into ✓ or ✕ upon reveal) */}
                    <span
                      className={cn(
                        'mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold transition-colors',
                        !isRevealed &&
                          isSelected &&
                          'border-[#007AFF] bg-[#007AFF] text-white dark:border-sky-400 dark:bg-sky-400 dark:text-slate-950',
                        !isRevealed &&
                          !isSelected &&
                          'border-slate-200/90 bg-white text-slate-600 dark:border-white/[0.12] dark:bg-[#232833] dark:text-slate-300',
                        isRevealed &&
                          isOfficial &&
                          'border-emerald-600 bg-emerald-600 text-white dark:border-emerald-500 dark:bg-emerald-500 dark:text-slate-950',
                        isRevealed &&
                          isWrongChosen &&
                          'border-red-600 bg-red-600 text-white dark:border-red-500 dark:bg-red-500 dark:text-white',
                        isRevealed &&
                          !isOfficial &&
                          !isWrongChosen &&
                          'border-slate-200/80 bg-white text-slate-500 dark:border-white/[0.1] dark:bg-[#232833] dark:text-slate-400'
                      )}
                    >
                      {isRevealed && isOfficial ? (
                        <Check size={14} strokeWidth={2} aria-label={`Correta (${alt.letter})`} />
                      ) : isRevealed && isWrongChosen ? (
                        <X size={14} strokeWidth={2} aria-label={`Incorreta (${alt.letter})`} />
                      ) : (
                        alt.letter
                      )}
                    </span>
                  </div>

                  {/* Alternative Text + Inline Expandable Commentary */}
                  <div className="min-w-0 flex-1 space-y-2.5">
                    <p
                      className={cn(
                        'text-slate-800 dark:text-slate-100',
                        readingComfort
                          ? 'max-w-[68ch] text-[15.5px] sm:text-[16px] leading-[1.7] dark:text-slate-200'
                          : 'max-w-[75ch] text-sm sm:text-[15px] leading-relaxed',
                        isEliminated &&
                          !isRevealed &&
                          'line-through text-slate-400 dark:text-slate-500'
                      )}
                    >
                      {alt.text}
                    </p>

                    {/* Post-answer inline controls: "Ver comentário" + Community % */}
                    {isRevealed && (
                      <div className="space-y-2.5 pt-0.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex flex-wrap items-center gap-3">
                            <button
                              type="button"
                              onClick={(e) => handleToggleInlineComment(alt.letter, e)}
                              aria-expanded={isCommentExpanded}
                              className="inline-flex items-center gap-1 font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
                            >
                              {isCommentExpanded ? (
                                <ChevronUp className="h-3.5 w-3.5" />
                              ) : (
                                <ChevronDown className="h-3.5 w-3.5" />
                              )}
                              <span>
                                {isCommentExpanded
                                  ? 'Ocultar comentário'
                                  : 'Ver comentário'}
                              </span>
                            </button>

                            {isOfficial && (
                              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400">
                                <CheckCircle2 className="h-3.5 w-3.5" />
                                <span>Gabarito oficial</span>
                              </span>
                            )}
                            {isWrongChosen && (
                              <span className="inline-flex items-center gap-1 font-semibold text-red-700 dark:text-red-400">
                                <XCircle className="h-3.5 w-3.5" />
                                <span>Sua escolha</span>
                              </span>
                            )}
                            {isPrincipalDistractor && (
                              <span className="inline-flex items-center gap-1 font-medium text-amber-700 dark:text-amber-400">
                                <AlertTriangle className="h-3.5 w-3.5" />
                                <span>Principal distrator</span>
                              </span>
                            )}
                          </div>

                          <span className="font-mono font-semibold tabular-nums text-slate-600 dark:text-slate-300">
                            {alt.communityPct.toFixed(1)}%
                          </span>
                        </div>

                        {/* Subtle Community Share Bar */}
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800">
                          <div
                            className={cn(
                              'h-full rounded-full transition-all duration-300',
                              isOfficial && 'bg-emerald-600 dark:bg-emerald-500',
                              isWrongChosen && 'bg-red-500 dark:bg-red-500',
                              !isOfficial &&
                                !isWrongChosen &&
                                isPrincipalDistractor &&
                                'bg-amber-500 dark:bg-amber-400',
                              !isOfficial &&
                                !isWrongChosen &&
                                !isPrincipalDistractor &&
                                'bg-slate-400 dark:bg-slate-600'
                            )}
                            style={{ width: `${Math.max(alt.communityPct, 1.5)}%` }}
                          />
                        </div>

                        {/* Inline Expanded Explanation */}
                        {isCommentExpanded && (
                          <div className="rounded-lg border border-slate-200/80 bg-white/90 px-3.5 py-2.5 dark:border-slate-700/80 dark:bg-slate-900/90">
                            <ClinicalMarkdown
                              content={alt.explanation}
                              compact={!readingComfort}
                              readingComfort={readingComfort}
                              className="text-slate-700 dark:text-slate-200"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Eliminate / Strikethrough affordance */}
                  {!isRevealed && (
                    <button
                      type="button"
                      onClick={(e) => toggleEliminate(alt.letter, e)}
                      title={
                        isEliminated
                          ? 'Restaurar alternativa'
                          : 'Riscar / eliminar alternativa'
                      }
                      aria-label={
                        isEliminated
                          ? `Restaurar alternativa ${alt.letter}`
                          : `Riscar alternativa ${alt.letter}`
                      }
                      className={cn(
                        'shrink-0 rounded-lg p-1.5 transition-colors cursor-pointer',
                        isEliminated
                          ? 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100'
                          : 'text-slate-400 opacity-70 hover:bg-slate-100 hover:text-slate-700 hover:opacity-100 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                      )}
                    >
                      <Strikethrough className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Bar: Mapa Popover + Responder + Prev/Next */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Compact Mapa Trigger Button */}
            {sessionQuestions.length > 1 && (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowMap((m) => !m)}
                  aria-expanded={showMap}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    showMap
                      ? 'border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400 dark:bg-sky-950/50 dark:text-sky-300'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-800'
                  )}
                >
                  <MapIcon className="h-3.5 w-3.5" />
                  <span>Mapa</span>
                </button>

                {/* Question Session Map Popover */}
                {showMap && (
                  <div className="absolute bottom-full left-0 z-30 mb-2 w-72 sm:w-80 rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-slate-900 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-xs font-bold text-slate-900 dark:text-white">
                        Mapa da Sessão ({total} questões)
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowMap(false)}
                        aria-label="Fechar mapa"
                        className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-6 gap-1.5">
                      {sessionQuestions.map((sq, idx) => {
                        const isCurrent = idx === index;
                        return (
                          <button
                            key={sq.id}
                            type="button"
                            onClick={() => {
                              onSelectQuestionIndex?.(idx);
                              setShowMap(false);
                            }}
                            title={`Q${idx + 1} · ${sq.institutionLabel} · ${sq.tema}`}
                            className={cn(
                              'relative flex h-9 items-center justify-center rounded-lg border font-mono text-xs font-semibold tabular-nums transition-colors cursor-pointer',
                              isCurrent &&
                                'ring-2 ring-sky-500 ring-offset-1 dark:ring-offset-slate-900',
                              sq.status === 'correct' &&
                                'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300',
                              sq.status === 'wrong' &&
                                'border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/60 dark:text-red-300',
                              sq.status === 'draft' &&
                                'border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-300',
                              sq.status === 'unanswered' &&
                                'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400'
                            )}
                          >
                            {idx + 1}
                            {sq.isFlagged && (
                              <span
                                aria-hidden="true"
                                className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-amber-500"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-slate-100 pt-2 text-[10px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Certa
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        Errada
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                        Pendente
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {isRevealed && (
              <div className="flex items-center gap-2 text-sm font-semibold">
                {isUserCorrect ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Você acertou — Gabarito {question.gabaritoOficial}</span>
                  </span>
                ) : activeChoice ? (
                  <span className="inline-flex items-center gap-1.5 text-red-700 dark:text-red-400">
                    <XCircle className="h-4 w-4" />
                    <span>
                      Você marcou {activeChoice} · Gabarito oficial:{' '}
                      {question.gabaritoOficial}
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                    <span>
                      Em branco · Gabarito oficial: {question.gabaritoOficial}
                    </span>
                  </span>
                )}
              </div>
            )}

            {mode === 'simulado' && !simuladoFinished && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {simuladoDraft
                  ? `Alternativa ${simuladoDraft} registrada para entrega`
                  : 'Selecione uma alternativa ou risque distratores'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onPrev}
              disabled={index <= 0}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onNext}
              disabled={index >= total - 1}
            >
              <span>Próxima</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Didactic Commentary & Progressive Community Metrics (Revealed Post-Answer) */}
      {isRevealed && (
        <div
          className={cn(
            'space-y-5',
            seamless
              ? 'mt-4 rounded-xl border border-black/5 bg-[#F5F5F7]/85 px-5 py-6 sm:px-6 dark:border-white/[0.07] dark:bg-[#151820]'
              : 'border-t border-black/5 bg-[#F5F5F7]/85 px-5 py-6 sm:px-8 dark:border-white/[0.07] dark:bg-[#151820] rounded-b-2xl'
          )}
        >
          {/* Didactic Commentary Navigation + Criar Flashcard CTA (Primary Reading Focus) */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 w-fit dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => setCommentTab('alternativas')}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                    commentTab === 'alternativas'
                      ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  <BookOpen size={15} strokeWidth={1.5} />
                  <span>Comentário</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCommentTab('referencias')}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                    commentTab === 'referencias'
                      ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  <FileText size={15} strokeWidth={1.5} />
                  <span>Referências ({question.referencias.length})</span>
                </button>
              </div>

              {onCreateFlashcard &&
                (hasFlashcard ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onOpenFlashcards}
                    className="border-emerald-300 bg-emerald-50/70 text-emerald-700 hover:bg-emerald-100/70 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/70"
                  >
                    <Check size={15} strokeWidth={1.5} />
                    <span>Salvo nos Flashcards</span>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onCreateFlashcard}
                    className="border-[#007AFF]/30 bg-white text-[#007AFF] hover:bg-[#007AFF]/5 dark:border-sky-800 dark:bg-slate-900 dark:text-sky-300 dark:hover:bg-sky-950/40"
                  >
                    <Layers size={15} strokeWidth={1.5} />
                    <span>Criar Flashcard</span>
                  </Button>
                ))}
            </div>

            {commentTab === 'alternativas' && (
              <div
                className={cn(
                  'space-y-5',
                  readingComfort ? 'max-w-[68ch]' : 'max-w-[75ch]'
                )}
              >
                {(question.needsAiCommentary || !question.comentarioGeral) &&
                  onGenerateAiCommentary && (
                    <div className="rounded-xl border border-black/5 bg-white p-4 dark:border-white/[0.08] dark:bg-slate-900/70 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <p className="text-xs font-medium text-[#1D1D1F] dark:text-slate-100">
                            Comentário clínico sob demanda
                          </p>
                          <p className="text-xs text-[#86868B] dark:text-slate-400">
                            Análise didática alinhada ao gabarito oficial desta questão.
                          </p>
                        </div>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={handleGenerateAiComment}
                          disabled={isGeneratingComment}
                        >
                          {isGeneratingComment ? (
                            <>
                              <Loader2 size={15} strokeWidth={1.5} className="animate-spin" />
                              <span>Gerando comentário</span>
                            </>
                          ) : (
                            <>
                              <BookOpen size={15} strokeWidth={1.5} />
                              <span>Gerar comentário</span>
                            </>
                          )}
                        </Button>
                      </div>
                      {commentError && (
                        <p className="text-xs font-medium text-[#D70015] dark:text-red-400">
                          {commentError}
                        </p>
                      )}
                    </div>
                  )}

                {question.comentarioGeral && (
                  <ClinicalMarkdown
                    content={question.comentarioGeral}
                    readingComfort={readingComfort}
                  />
                )}

                <div className="divide-y divide-black/5 border-t border-black/5 dark:divide-white/[0.07] dark:border-white/[0.07]">
                  {question.alternativas.map((alt) => {
                    const correct = alt.letter === question.gabaritoOficial;
                    return (
                      <div key={alt.letter} className="py-4 space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <span className="font-mono text-[#1D1D1F] dark:text-white">
                            Alternativa {alt.letter}
                          </span>
                          <span aria-hidden="true" className="text-[#86868B]">
                            ·
                          </span>
                          <span
                            className={
                              correct
                                ? 'text-emerald-700 dark:text-emerald-400'
                                : 'text-[#D70015] dark:text-red-400'
                            }
                          >
                            {correct ? 'Correta' : 'Incorreta'}
                          </span>
                          <span aria-hidden="true" className="text-[#86868B]">
                            ·
                          </span>
                          <span className="font-mono tabular-nums text-[#86868B] dark:text-slate-400">
                            {alt.communityPct.toFixed(1)}%
                          </span>
                        </div>
                        <ClinicalMarkdown
                          content={alt.explanation}
                          compact={!readingComfort}
                          readingComfort={readingComfort}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {commentTab === 'referencias' && (
              <div className="max-w-[75ch] space-y-2.5">
                <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
                  Bibliografia e diretrizes oficiais
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[#1D1D1F] dark:text-slate-300">
                  {question.referencias.map((ref, refIdx) => (
                    <li key={`${ref}-${refIdx}`}>{ref}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {question.tags && question.tags.length > 0 && (
            <div
              className="flex flex-wrap items-center gap-1.5 pt-1"
              aria-label="Tags clínicas da questão"
            >
              <span className="text-[11px] font-medium text-[#86868B] dark:text-slate-400 mr-0.5">
                Tags:
              </span>
              {question.tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md border border-black/5 bg-[#F5F5F7] px-2 py-0.5 font-mono text-[11px] text-[#86868B] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Progressive Disclosure: Community Metrics & Benchmark (Quiet by default) */}
          <div className="border-t border-black/5 pt-4 dark:border-white/[0.07]">
            <button
              type="button"
              onClick={() => setShowCommunityStats((prev) => !prev)}
              aria-expanded={showCommunityStats}
              className="flex w-full flex-wrap items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-xs text-[#86868B] hover:bg-black/[0.03] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:bg-white/[0.04] dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-mono tabular-nums">
                <span className="text-emerald-700 dark:text-emerald-400">
                  {question.taxaAcertoGlobal.toFixed(1)}% acertaram
                </span>
                <span aria-hidden="true">·</span>
                <span>
                  Distrator {principalDistractor?.letter ?? '—'} (
                  {principalDistractor?.communityPct.toFixed(1) ?? '0.0'}%)
                </span>
                <span aria-hidden="true">·</span>
                <span>{difficulty}</span>
                <span aria-hidden="true">·</span>
                <span>
                  {question.totalRespostasComunidade.toLocaleString('pt-BR')} respostas
                </span>
              </span>
              <span className="font-sans font-medium text-[#007AFF] dark:text-sky-400 whitespace-nowrap">
                {showCommunityStats ? 'Ocultar estatísticas' : 'Ver estatísticas'}
              </span>
            </button>

            {showCommunityStats && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl border border-black/5 bg-white p-4 dark:border-white/[0.07] dark:bg-slate-900/60">
                  <div>
                    <p className="text-xs text-[#86868B] dark:text-slate-400">
                      Taxa global de acertos
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
                      {question.taxaAcertoGlobal.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#86868B] dark:text-slate-400">
                      Principal distrator
                    </p>
                    <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-amber-700 dark:text-amber-400">
                      Alt. {principalDistractor?.letter}{' '}
                      <span className="text-xs font-normal">
                        ({principalDistractor?.communityPct.toFixed(1)}%)
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#86868B] dark:text-slate-400">
                      Dificuldade dinâmica
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#1D1D1F] dark:text-slate-100">
                      {difficulty}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#86868B] dark:text-slate-400">
                      Respostas na plataforma
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-sm font-medium tabular-nums text-[#1D1D1F] dark:text-slate-200">
                      <Users size={15} strokeWidth={1.5} className="text-[#86868B]" />
                      {question.totalRespostasComunidade.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>

                {mode === 'estudo' && benchmarks && (
                  <StudentVsMedianBar
                    topicBenchmark={benchmarks.topic}
                    areaBenchmark={benchmarks.area}
                    overallBenchmark={benchmarks.overall}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
