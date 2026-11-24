import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { PerformanceStatus } from '../../types/medical';
import { cn, formatDelta } from '../../lib/utils';

export interface BenchmarkSlice {
  label: string;
  studentPct: number;
  communityMedianPct: number;
  delta: number;
  status: PerformanceStatus;
  answered: number;
}

interface StudentVsMedianBarProps {
  topicBenchmark: BenchmarkSlice;
  areaBenchmark: BenchmarkSlice;
  overallBenchmark: BenchmarkSlice;
}

type Scope = 'tema' | 'area' | 'geral';

export function StudentVsMedianBar({
  topicBenchmark,
  areaBenchmark,
  overallBenchmark,
}: StudentVsMedianBarProps) {
  const [scope, setScope] = useState<Scope>('tema');

  const current =
    scope === 'tema'
      ? topicBenchmark
      : scope === 'area'
      ? areaBenchmark
      : overallBenchmark;

  const clampedStudent = Math.min(100, Math.max(0, current.studentPct));
  const clampedMedian = Math.min(100, Math.max(0, current.communityMedianPct));

  const isAbove = current.status === 'Acima da Mediana';
  const isBelow = current.status === 'Ponto de Atenção';

  return (
    <div
      aria-label="Comparativo imediato da taxa de acerto do aluno versus mediana da comunidade"
      className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-900 space-y-3.5"
    >
      {/* Header row with scope switch */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="min-w-0">
          <h3 className="font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
            Você vs. Mediana da Comunidade
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate tabular-nums">
            {current.label} · {current.answered} questões contabilizadas
          </p>
        </div>

        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 shrink-0">
          {(
            [
              { id: 'tema', label: 'Tema' },
              { id: 'area', label: 'Grande Área' },
              { id: 'geral', label: 'Geral' },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setScope(item.id)}
              className={cn(
                'rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap',
                scope === item.id
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Simple unified progress bar with Community Median marker */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-3 text-xs">
          <span className="font-medium text-slate-700 dark:text-slate-300">
            Sua taxa de acerto:{' '}
            <strong className="font-mono text-sm font-bold tabular-nums text-slate-900 dark:text-white">
              {current.studentPct.toFixed(1)}%
            </strong>
          </span>

          <span
            className={cn(
              'inline-flex items-center gap-1 font-semibold tabular-nums whitespace-nowrap',
              isAbove && 'text-emerald-700 dark:text-emerald-400',
              isBelow && 'text-red-700 dark:text-red-400',
              !isAbove && !isBelow && 'text-amber-700 dark:text-amber-400'
            )}
          >
            {isAbove && <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />}
            {isBelow && <TrendingDown className="h-3.5 w-3.5" aria-hidden="true" />}
            {!isAbove && !isBelow && <Minus className="h-3.5 w-3.5" aria-hidden="true" />}
            <span className="font-mono">{formatDelta(current.delta)}</span>
            <span aria-hidden="true">·</span>
            <span>{current.status}</span>
          </span>
        </div>

        {/* Progress track + Median P50 benchmark pin */}
        <div className="relative pt-1 pb-1">
          <div
            role="progressbar"
            aria-valuenow={Math.round(clampedStudent)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Sua taxa de acerto em ${current.label}: ${current.studentPct.toFixed(1)}%, mediana da comunidade: ${current.communityMedianPct.toFixed(1)}%`}
            className="relative h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
          >
            <div
              className={cn(
                'h-full rounded-full transition-all duration-300',
                isAbove && 'bg-emerald-600 dark:bg-emerald-500',
                isBelow && 'bg-red-500 dark:bg-red-500',
                !isAbove && !isBelow && 'bg-sky-600 dark:bg-sky-400'
              )}
              style={{ width: `${Math.max(clampedStudent, 2)}%` }}
            />
          </div>

          {/* Community Median vertical indicator line */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 w-0.5 bg-slate-900 dark:bg-white"
            style={{ left: `${clampedMedian}%` }}
            title={`Mediana da Comunidade (P50): ${current.communityMedianPct.toFixed(1)}%`}
          />
        </div>

        {/* Scale legend row */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span
                className={cn(
                  'inline-block h-2 w-2 rounded-full',
                  isAbove && 'bg-emerald-600 dark:bg-emerald-500',
                  isBelow && 'bg-red-500',
                  !isAbove && !isBelow && 'bg-sky-600 dark:bg-sky-400'
                )}
              />
              <span>Você ({current.studentPct.toFixed(1)}%)</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-0.5 bg-slate-900 dark:bg-white" />
              <span>
                Mediana P50 ({current.communityMedianPct.toFixed(1)}%)
              </span>
            </span>
          </div>
          <span className="font-mono">0% — 100%</span>
        </div>
      </div>
    </div>
  );
}
