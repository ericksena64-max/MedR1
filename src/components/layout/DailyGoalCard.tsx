import React, { useEffect, useState } from 'react';
import {
  Target,
  CheckCircle2,
  Pencil,
  Check,
  X,
  Flame,
  Minus,
  Plus,
} from 'lucide-react';
import type { DailyGoalProgress } from '../../types/medical';
import { cn } from '../../lib/utils';

interface DailyGoalCardProps {
  goal: DailyGoalProgress;
  onUpdateTarget: (nextTarget: number) => void;
  isCompact: boolean;
  onRequestExpand?: () => void;
  initialEditing?: boolean;
  onEditingConsumed?: () => void;
}

const GOAL_PRESETS = [10, 20, 30, 50, 100];
const MIN_GOAL = 1;
const MAX_GOAL = 300;

export function DailyGoalCard({
  goal,
  onUpdateTarget,
  isCompact,
  onRequestExpand,
  initialEditing = false,
  onEditingConsumed,
}: DailyGoalCardProps) {
  const [editing, setEditing] = useState(false);
  const [draftValue, setDraftValue] = useState(String(goal.target));

  useEffect(() => {
    setDraftValue(String(goal.target));
  }, [goal.target]);

  useEffect(() => {
    if (initialEditing && !isCompact) {
      setEditing(true);
      setDraftValue(String(goal.target));
      onEditingConsumed?.();
    }
  }, [initialEditing, isCompact, goal.target, onEditingConsumed]);

  const parsedDraft = Number.parseInt(draftValue, 10);
  const isDraftValid =
    !Number.isNaN(parsedDraft) &&
    parsedDraft >= MIN_GOAL &&
    parsedDraft <= MAX_GOAL;

  const commitTarget = (value: number) => {
    const clamped = Math.max(MIN_GOAL, Math.min(MAX_GOAL, Math.round(value)));
    onUpdateTarget(clamped);
    setDraftValue(String(clamped));
    setEditing(false);
  };

  const handleStep = (delta: number) => {
    const base = Number.isNaN(parsedDraft) ? goal.target : parsedDraft;
    const next = Math.max(MIN_GOAL, Math.min(MAX_GOAL, base + delta));
    setDraftValue(String(next));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isDraftValid) return;
    commitTarget(parsedDraft);
  };

  const accuracyToday =
    goal.answeredToday > 0
      ? Math.round((goal.correctToday / goal.answeredToday) * 100)
      : null;

  const extraQuestions = Math.max(0, goal.answeredToday - goal.target);

  // Compact sidebar mode: crisp SVG progress ring
  if (isCompact) {
    const size = 38;
    const strokeWidth = 3.2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - Math.min(100, goal.pct) / 100);

    return (
      <div className="border-t border-slate-100 dark:border-white/[0.06] p-2.5 flex justify-center">
        <button
          type="button"
          onClick={() => onRequestExpand?.()}
          title={`Meta diária: ${goal.answeredToday}/${goal.target} questões (${goal.pct}%)${
            goal.completed ? ' — Meta batida!' : ''
          } · Clique para ajustar`}
          aria-label={`Meta diária: ${goal.answeredToday} de ${goal.target} questões (${goal.pct}%). Expandir para ajustar meta.`}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl hover:bg-[#F3F6FC] dark:hover:bg-white/[0.06] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
        >
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="-rotate-90"
            aria-hidden="true"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              className="stroke-slate-200 dark:stroke-slate-800"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className={cn(
                'transition-all duration-500 ease-out',
                goal.completed
                  ? 'stroke-emerald-500 dark:stroke-emerald-400'
                  : 'stroke-sky-600 dark:stroke-sky-400'
              )}
            />
          </svg>
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold tabular-nums',
              goal.completed
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-slate-700 dark:text-slate-200'
            )}
          >
            {goal.completed ? (
              <Check className="h-3.5 w-3.5 stroke-[2.5]" />
            ) : (
              goal.answeredToday
            )}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="border-t border-slate-100 dark:border-white/[0.06] px-3 py-3">
      <div
        className={cn(
          'rounded-2xl border p-3 transition-colors',
          goal.completed
            ? 'border-emerald-200/80 bg-emerald-50/60 dark:border-emerald-500/25 dark:bg-emerald-500/10'
            : 'border-slate-200/65 bg-[#F6F8FC] dark:border-white/[0.06] dark:bg-white/[0.035]'
        )}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            {goal.completed ? (
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Target className="h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 truncate">
              Meta Diária
            </span>
            {goal.streakDays > 0 && (
              <span
                title={`${goal.streakDays} ${
                  goal.streakDays === 1 ? 'dia seguido' : 'dias seguidos'
                } batendo a meta`}
                className="inline-flex items-center gap-0.5 font-mono text-[10px] font-semibold text-amber-600 dark:text-amber-400 tabular-nums"
              >
                <Flame className="h-3 w-3" />
                {goal.streakDays}d
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              if (editing) {
                setEditing(false);
                setDraftValue(String(goal.target));
              } else {
                setDraftValue(String(goal.target));
                setEditing(true);
              }
            }}
            aria-expanded={editing}
            aria-label={editing ? 'Cancelar edição da meta' : 'Definir meta diária'}
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            {editing ? (
              <>
                <X className="h-3 w-3" />
                <span>Fechar</span>
              </>
            ) : (
              <>
                <Pencil className="h-3 w-3" />
                <span>Meta</span>
              </>
            )}
          </button>
        </div>

        {/* Main Progress Readout */}
        <div className="mt-2 flex items-baseline justify-between gap-2">
          <div className="flex items-baseline gap-1 font-mono tabular-nums">
            <span
              className={cn(
                'text-lg font-bold leading-none',
                goal.completed
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : 'text-slate-900 dark:text-white'
              )}
            >
              {goal.answeredToday}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              / {goal.target} questões
            </span>
          </div>

          <span
            className={cn(
              'font-mono text-xs font-semibold tabular-nums',
              goal.completed
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-sky-700 dark:text-sky-400'
            )}
          >
            {goal.pct}%
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200/75 dark:bg-white/[0.08]"
          role="progressbar"
          aria-label="Progresso da meta diária de questões"
          aria-valuenow={goal.answeredToday}
          aria-valuemin={0}
          aria-valuemax={goal.target}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-500 ease-out',
              goal.completed
                ? 'bg-emerald-500 dark:bg-emerald-400'
                : 'bg-[#1A56DB] dark:bg-sky-400'
            )}
            style={{ width: `${Math.min(100, goal.pct)}%` }}
          />
        </div>

        {/* Status Subtitle */}
        <div className="mt-1.5 flex items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          {goal.completed ? (
            <span className="font-medium text-emerald-700 dark:text-emerald-400 truncate">
              {extraQuestions > 0
                ? `Meta batida (+${extraQuestions} extras)`
                : 'Meta diária concluída!'}
            </span>
          ) : (
            <span className="truncate tabular-nums">
              {goal.remaining === 1
                ? 'Falta 1 questão hoje'
                : `Faltam ${goal.remaining} questões hoje`}
            </span>
          )}

          {accuracyToday !== null && (
            <span className="font-mono text-[10px] font-medium tabular-nums text-slate-500 dark:text-slate-400 shrink-0">
              {accuracyToday}% acerto
            </span>
          )}
        </div>

        {/* Inline Target Editor */}
        {editing && (
          <form
            onSubmit={handleSubmit}
            className="mt-3 pt-2.5 border-t border-slate-200/80 dark:border-slate-800 space-y-2.5"
          >
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1.5">
                Alvo diário (questões/dia)
              </span>
              <div className="grid grid-cols-5 gap-1">
                {GOAL_PRESETS.map((preset) => {
                  const active = parsedDraft === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => commitTarget(preset)}
                      className={cn(
                        'rounded-md border py-1 font-mono text-[11px] font-semibold tabular-nums transition-colors cursor-pointer',
                        active
                          ? 'border-sky-500 bg-sky-50 text-sky-700 dark:border-sky-400 dark:bg-sky-950/60 dark:text-sky-300'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                      )}
                    >
                      {preset}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex flex-1 items-center rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleStep(-5)}
                  aria-label="Diminuir meta em 5 questões"
                  className="px-2 py-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <input
                  type="number"
                  min={MIN_GOAL}
                  max={MAX_GOAL}
                  value={draftValue}
                  onChange={(e) => setDraftValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setEditing(false);
                      setDraftValue(String(goal.target));
                    }
                  }}
                  aria-label="Número alvo de questões por dia"
                  className="w-full bg-transparent py-1 text-center font-mono text-xs font-semibold tabular-nums text-slate-900 focus:outline-none dark:text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  type="button"
                  onClick={() => handleStep(5)}
                  aria-label="Aumentar meta em 5 questões"
                  className="px-2 py-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <button
                type="submit"
                disabled={!isDraftValid}
                className="inline-flex h-8 items-center justify-center gap-1 rounded-lg bg-sky-600 px-2.5 text-xs font-semibold text-white hover:bg-sky-700 disabled:opacity-45 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer shrink-0"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Salvar</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
