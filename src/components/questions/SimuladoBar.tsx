import React, { useState } from 'react';
import {
  Clock,
  Eye,
  EyeOff,
  Pause,
  Play,
  Flag,
  CheckCircle2,
  Send,
  RotateCcw,
  Radar,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { AlternativeLetter, MedicalQuestion } from '../../types/medical';
import { formatTimer, cn } from '../../lib/utils';
import { Button } from '../ui/Button';

interface SimuladoBarProps {
  questions: MedicalQuestion[];
  currentIndex: number;
  onSelectIndex: (idx: number) => void;
  draftAnswers: Record<string, AlternativeLetter>;
  flaggedIds: string[];
  secondsLeft: number;
  paused: boolean;
  onTogglePause: () => void;
  finished: boolean;
  onFinish: () => void;
  onRestart: () => void;
  customTitle?: string | null;
  customTopics?: string[];
}

export function SimuladoBar({
  questions,
  currentIndex,
  onSelectIndex,
  draftAnswers,
  flaggedIds,
  secondsLeft,
  paused,
  onTogglePause,
  finished,
  onFinish,
  onRestart,
  customTitle,
  customTopics = [],
}: SimuladoBarProps) {
  const [hideTimer, setHideTimer] = useState(false);
  const [showMap, setShowMap] = useState(() => questions.length <= 15);

  const answeredCount = questions.filter((q) => Boolean(draftAnswers[q.id])).length;
  const correctCount = finished
    ? questions.filter((q) => draftAnswers[q.id] === q.gabaritoOficial).length
    : 0;
  const accuracyPct =
    finished && questions.length > 0
      ? Number(((correctCount / questions.length) * 100).toFixed(1))
      : 0;

  const isLowTime = !finished && secondsLeft <= 180;

  return (
    <div className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-4 dark:border-white/[0.08] dark:bg-[#131926] space-y-4">
      {customTitle && (
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pb-3 border-b border-black/5 dark:border-white/[0.07] text-xs">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#007AFF] dark:text-sky-400">
            <Radar size={15} strokeWidth={1.5} />
            <span>Simulado · {customTitle}</span>
          </span>
          {customTopics.length > 0 && (
            <>
              <span className="text-[#86868B]" aria-hidden="true">
                —
              </span>
              <span className="text-[#86868B] dark:text-slate-300">
                {customTopics.join(' · ')}
              </span>
            </>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {/* Countdown timer with discreet hide/show toggle */}
          <div className="inline-flex items-center gap-2">
            <div
              className={cn(
                'flex items-center gap-1.5 font-mono text-sm font-medium tabular-nums',
                isLowTime
                  ? 'text-[#D70015] dark:text-red-400'
                  : 'text-[#1D1D1F] dark:text-white'
              )}
            >
              <Clock size={16} strokeWidth={1.5} className="text-[#86868B]" />
              <span>
                {finished
                  ? 'Prova encerrada'
                  : hideTimer
                  ? '••:••'
                  : formatTimer(secondsLeft)}
              </span>
            </div>
            {!finished && (
              <button
                type="button"
                onClick={() => setHideTimer((h) => !h)}
                aria-label={hideTimer ? 'Mostrar cronômetro' : 'Ocultar cronômetro'}
                title={hideTimer ? 'Mostrar cronômetro' : 'Ocultar cronômetro'}
                className="rounded-lg p-1.5 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
              >
                {hideTimer ? (
                  <Eye size={15} strokeWidth={1.5} />
                ) : (
                  <EyeOff size={15} strokeWidth={1.5} />
                )}
              </button>
            )}
          </div>

          {!finished && (
            <button
              type="button"
              onClick={onTogglePause}
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {paused ? (
                <>
                  <Play size={14} strokeWidth={1.5} />
                  <span>Retomar</span>
                </>
              ) : (
                <>
                  <Pause size={14} strokeWidth={1.5} />
                  <span>Pausar</span>
                </>
              )}
            </button>
          )}

          <span className="font-mono text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
            {answeredCount}/{questions.length} respondidas
            {flaggedIds.length > 0 && (
              <>
                {' · '}
                <span className="text-amber-700 dark:text-amber-400">
                  {flaggedIds.length} marcadas
                </span>
              </>
            )}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowMap((m) => !m)}
            aria-expanded={showMap}
            className="inline-flex items-center gap-1 rounded-lg border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Mapa</span>
            {showMap ? (
              <ChevronUp size={14} strokeWidth={1.5} />
            ) : (
              <ChevronDown size={14} strokeWidth={1.5} />
            )}
          </button>

          {!finished ? (
            <Button variant="primary" size="sm" onClick={onFinish}>
              <Send size={14} strokeWidth={1.5} />
              <span>Finalizar</span>
            </Button>
          ) : (
            <Button variant="outline" size="sm" onClick={onRestart}>
              <RotateCcw size={14} strokeWidth={1.5} />
              <span>Novo simulado</span>
            </Button>
          )}
        </div>
      </div>

      {/* Post-Exam Summary Strip when finished */}
      {finished && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-black/5 pt-3 dark:border-slate-800">
          <div>
            <p className="text-xs text-[#86868B] dark:text-slate-400">Aproveitamento</p>
            <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-[#1D1D1F] dark:text-white">
              {accuracyPct}%
            </p>
          </div>
          <div>
            <p className="text-xs text-[#86868B] dark:text-slate-400">Acertos</p>
            <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-emerald-700 dark:text-emerald-400">
              {correctCount}/{questions.length}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#86868B] dark:text-slate-400">Em branco / Erradas</p>
            <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-[#D70015] dark:text-red-400">
              {questions.length - correctCount}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#86868B] dark:text-slate-400">Revisão liberada</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-[#007AFF] dark:text-sky-400">
              <CheckCircle2 size={15} strokeWidth={1.5} />
              <span>Comentários ativos</span>
            </p>
          </div>
        </div>
      )}

      {/* Collapsible Question Navigator Grid */}
      {(showMap || finished) && (
        <div className="flex flex-wrap items-center gap-1.5 border-t border-black/5 pt-3 dark:border-slate-800">
        {questions.map((q, idx) => {
          const draft = draftAnswers[q.id];
          const flagged = flaggedIds.includes(q.id);
          const isCurrent = idx === currentIndex;
          const isCorrect = finished && draft === q.gabaritoOficial;
          const isWrong = finished && draft && draft !== q.gabaritoOficial;

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectIndex(idx)}
              className={cn(
                'relative flex h-8 w-9 items-center justify-center rounded-md border font-mono text-xs font-medium tabular-nums transition-colors cursor-pointer',
                isCurrent && 'ring-2 ring-sky-500 ring-offset-1 dark:ring-offset-slate-900',
                finished
                  ? isCorrect
                    ? 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : isWrong
                    ? 'border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/60 dark:text-red-300'
                    : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400'
                  : draft
                  ? 'border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-700 dark:bg-sky-950/60 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              )}
              title={`Questão ${idx + 1}${flagged ? ' (Marcada para revisão)' : ''}`}
            >
              {idx + 1}
              {flagged && (
                <Flag
                  className="absolute -right-1 -top-1 h-3 w-3 fill-amber-500 text-amber-500"
                  aria-label="Dúvida marcada"
                />
              )}
            </button>
          );
        })}
        </div>
      )}
    </div>
  );
}
