import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Info,
  Loader2,
  Lock,
  Stethoscope,
} from 'lucide-react';
import { GRANDES_AREAS } from '../../data/taxonomy';
import type { MedicalQuestion } from '../../types/medical';
import {
  DIAGNOSTIC_BOARD_OPTIONS,
  DIAGNOSTIC_QUESTIONS_PER_AREA,
  DIAGNOSTIC_TOTAL_QUESTIONS,
  MAX_DIAGNOSTIC_BOARDS,
  computePerAreaBoardQuotas,
  normalizeDiagnosticBoards,
  selectDiagnosticQuestions,
  type DiagnosticBoardOption,
  type DiagnosticExamState,
} from '../../lib/diagnosticExam';
import { cn } from '../../lib/utils';

export interface DiagnosticGateCardProps {
  diagnosticState: DiagnosticExamState;
  questions?: MedicalQuestion[];
  answeredDraftCount?: number;
  loading?: boolean;
  onStartDiagnostic: (boards: DiagnosticBoardOption[]) => void;
  context?: 'home' | 'desempenho';
}

export function DiagnosticGateCard({
  diagnosticState,
  questions = [],
  answeredDraftCount = 0,
  loading = false,
  onStartDiagnostic,
  context = 'home',
}: DiagnosticGateCardProps) {
  const [selectedBoards, setSelectedBoards] = useState<DiagnosticBoardOption[]>(() =>
    normalizeDiagnosticBoards(
      diagnosticState.selectedBoards?.length
        ? diagnosticState.selectedBoards
        : diagnosticState.selectedBoard
    )
  );

  const toggleBoard = (board: DiagnosticBoardOption) => {
    setSelectedBoards((prev) => {
      if (prev.includes(board)) {
        if (prev.length === 1) return prev; // Keep at least 1 board
        return prev.filter((b) => b !== board);
      }
      if (prev.length >= MAX_DIAGNOSTIC_BOARDS) {
        return prev;
      }
      return [...prev, board];
    });
  };

  const quotas = useMemo(
    () => computePerAreaBoardQuotas(selectedBoards),
    [selectedBoards]
  );

  const previewSelection = useMemo(() => {
    if (questions.length === 0) return null;
    return selectDiagnosticQuestions(questions, selectedBoards);
  }, [questions, selectedBoards]);

  const isInProgress = diagnosticState.status === 'in_progress';
  const clampedAnswered = Math.min(
    DIAGNOSTIC_TOTAL_QUESTIONS,
    Math.max(0, answeredDraftCount)
  );
  const primaryBoard = selectedBoards[0];

  return (
    <section
      aria-label="Simulado Diagnóstico Obrigatório de 50 questões"
      className="rounded-2xl border border-black/5 bg-white p-6 sm:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-slate-900 space-y-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#007AFF]/10 px-3 py-1 text-xs font-semibold text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300">
            <Lock size={14} strokeWidth={1.5} />
            <span>
              {context === 'desempenho'
                ? 'Gráficos bloqueados até concluir o diagnóstico'
                : 'Passo 1 obrigatório · Calibração inicial'}
            </span>
          </div>

          <h2 className="font-display text-lg sm:text-xl font-bold text-[#1D1D1F] dark:text-white tracking-tight">
            Simulado Diagnóstico Inicial (50 questões)
          </h2>

          <p className="text-sm leading-relaxed text-[#86868B] dark:text-slate-400">
            Escolha até{' '}
            <strong className="font-semibold text-[#1D1D1F] dark:text-slate-200 tabular-nums">
              {MAX_DIAGNOSTIC_BOARDS} bancas
            </strong>{' '}
            (a primeira será sua <strong className="font-semibold text-[#1D1D1F] dark:text-slate-200">banca principal</strong>).
            Montaremos exatamente{' '}
            <strong className="font-semibold text-[#1D1D1F] dark:text-slate-200 tabular-nums">
              {DIAGNOSTIC_TOTAL_QUESTIONS} questões
            </strong>{' '}
            (<span className="tabular-nums">{DIAGNOSTIC_QUESTIONS_PER_AREA}</span> por Grande Área)
            com a mesma proporção de bancas em todas as áreas e prioridade para o Núcleo Pareto 80%.
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F5F5F7] text-[#007AFF] dark:bg-white/[0.06] dark:text-sky-400">
          <Stethoscope size={22} strokeWidth={1.5} />
        </div>
      </div>

      {/* Multi-Board Selector (1 to 5 boards) */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
            Bancas alvo ({selectedBoards.length}/{MAX_DIAGNOSTIC_BOARDS})
          </p>
          <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
            {quotas
              .map((q) => `${q.board} ${q.perArea}q/área`)
              .join(' · ')}
          </p>
        </div>

        <div
          role="group"
          aria-label="Seleção de até 5 bancas para o Simulado Diagnóstico"
          className="flex flex-wrap gap-2"
        >
          {DIAGNOSTIC_BOARD_OPTIONS.map((board) => {
            const idx = selectedBoards.indexOf(board);
            const active = idx >= 0;
            const isPrimary = idx === 0;
            const disabled = !active && selectedBoards.length >= MAX_DIAGNOSTIC_BOARDS;

            return (
              <button
                key={board}
                type="button"
                aria-pressed={active}
                disabled={disabled}
                onClick={() => toggleBoard(board)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all border',
                  active
                    ? 'border-[#007AFF] bg-[#007AFF] text-white shadow-sm'
                    : 'border-[#D1D1D6] bg-white text-[#1D1D1F] hover:border-[#007AFF]/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200',
                  disabled && 'opacity-45 cursor-not-allowed'
                )}
              >
                <span>{board === 'GERAL' ? 'Geral' : board}</span>
                {isPrimary && (
                  <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                    Principal
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {previewSelection && previewSelection.fallbackCount > 0 && (
          <div className="flex items-start gap-2 rounded-xl bg-[#F5F5F7] px-3.5 py-2.5 text-xs text-[#86868B] dark:bg-white/[0.04] dark:text-slate-400">
            <Info size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#007AFF]" />
            <span className="tabular-nums">
              Acervo local atual: <strong className="text-[#1D1D1F] dark:text-slate-200">{previewSelection.matchedBoardCount}q</strong> das bancas selecionadas e{' '}
              <strong className="text-[#1D1D1F] dark:text-slate-200">{previewSelection.fallbackCount}q</strong> completadas automaticamente com questões equivalentes da mesma Grande Área.
            </span>
          </div>
        )}
      </div>

      {/* 5 Grandes Áreas Checklist */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {GRANDES_AREAS.map((area) => (
          <div
            key={area.id}
            className="rounded-xl border border-black/5 bg-[#F5F5F7] px-3 py-2.5 dark:border-white/[0.06] dark:bg-white/[0.03]"
          >
            <p className="text-xs font-medium text-[#1D1D1F] dark:text-slate-200 truncate">
              {area.shortName}
            </p>
            <p className="mt-0.5 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
              {DIAGNOSTIC_QUESTIONS_PER_AREA} questões
            </p>
          </div>
        ))}
      </div>

      {/* Footer CTA & Progress */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-black/5 dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
          <CheckCircle2 size={16} strokeWidth={1.5} className="text-[#86868B]" />
          {isInProgress && clampedAnswered > 0 ? (
            <span>
              Em andamento:{' '}
              <strong className="text-[#1D1D1F] dark:text-white">
                {clampedAnswered}/{DIAGNOSTIC_TOTAL_QUESTIONS}
              </strong>{' '}
              respondidas
            </span>
          ) : (
            <span>
              Obrigatório:{' '}
              <strong className="text-[#1D1D1F] dark:text-white">50/50</strong> questões finalizadas para liberar gráficos
            </span>
          )}
        </div>

        <button
          type="button"
          disabled={loading}
          onClick={() => onStartDiagnostic(selectedBoards)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#007AFF] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0066D6] disabled:opacity-60"
        >
          {loading ? (
            <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
          ) : (
            <ArrowRight size={16} strokeWidth={1.5} />
          )}
          <span>
            {isInProgress && clampedAnswered > 0
              ? `Retomar Diagnóstico (${clampedAnswered}/50)`
              : selectedBoards.length === 1
                ? `Iniciar Diagnóstico · ${primaryBoard} (50q)`
                : `Iniciar Diagnóstico · ${selectedBoards.length} bancas (50q)`}
          </span>
        </button>
      </div>
    </section>
  );
}
