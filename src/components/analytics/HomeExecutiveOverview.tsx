import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import {
  ArrowRight,
  SlidersHorizontal,
  BookOpenCheck,
  BookmarkCheck,
  Timer,
  Compass,
  AlertTriangle,
} from 'lucide-react';
import type { CutoffTargetConfig, GrandeAreaId } from '../../types/medical';
import type { HomeIntelligenceSummary } from '../../lib/homeIntelligence';
import { cn } from '../../lib/utils';

export type CalibrationModalTab = 'estimador' | 'bussola' | 'psicometrico';

interface HomeExecutiveOverviewProps {
  summary: HomeIntelligenceSummary;
  cutoffTarget: CutoffTargetConfig;
  darkMode: boolean;
  onPracticeArea: (areaId: GrandeAreaId) => void;
  onGoToQuestionBank: () => void;
  onStartQuickSimulado?: () => void;
  onGoToErrorNotebook: () => void;
  onOpenCalibrationModal: (initialTab?: CalibrationModalTab) => void;
}

export function HomeExecutiveOverview({
  summary,
  cutoffTarget,
  darkMode,
  onPracticeArea,
  onGoToQuestionBank,
  onStartQuickSimulado,
  onGoToErrorNotebook,
  onOpenCalibrationModal,
}: HomeExecutiveOverviewProps) {
  const isAboveCutoff = summary.distanceToCutoff >= 0;
  const formattedDelta = `${summary.distanceToCutoff >= 0 ? '+' : ''}${summary.distanceToCutoff.toFixed(1)} pts`;

  const approvalTone =
    summary.approvalProbabilityPct >= 70
      ? 'text-emerald-700 dark:text-emerald-400'
      : summary.approvalProbabilityPct >= 45
      ? 'text-amber-700 dark:text-amber-400'
      : 'text-[#D70015] dark:text-red-400';

  const gridColor = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.07)';
  const axisColor = darkMode ? '#94A3B8' : '#86868B';

  return (
    <div className="space-y-4">
      {/* Compact Executive Header + Quick Navigation */}
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
            Inteligência de Desempenho
          </h1>
          <p className="mt-0.5 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
            {cutoffTarget.institution} · {cutoffTarget.specialty} · Corte{' '}
            {summary.cutoffScore.toFixed(1)}% ({summary.totalExamQuestions}q)
            {summary.usarSuavizacaoLaplace && ' · Laplace ativo'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onGoToQuestionBank}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-[#1B1F27] dark:text-slate-200 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <BookOpenCheck size={15} strokeWidth={1.5} className="text-[#86868B]" />
            <span>Questões</span>
          </button>

          {onStartQuickSimulado && (
            <button
              type="button"
              onClick={onStartQuickSimulado}
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-[#1B1F27] dark:text-slate-200 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
            >
              <Timer size={15} strokeWidth={1.5} className="text-[#86868B]" />
              <span>Simulado</span>
            </button>
          )}

          <button
            type="button"
            onClick={onGoToErrorNotebook}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-[#1B1F27] dark:text-slate-200 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
          >
            <BookmarkCheck size={15} strokeWidth={1.5} className="text-[#86868B]" />
            <span>Caderno</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenCalibrationModal('estimador')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#007AFF]/25 bg-[#007AFF]/10 px-3 py-1.5 text-xs font-medium text-[#007AFF] hover:bg-[#007AFF]/15 dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-300 dark:hover:bg-sky-500/25 transition-colors cursor-pointer"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
            <span>Calibrar parâmetros & detalhes do modelo</span>
          </button>
        </div>
      </header>

      {/* Above-the-Fold Executive Hero: 3 Clean KPIs + Priority Bottleneck Action Card */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* KPI 1: Nota Projetada + IC 95% */}
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none flex flex-col justify-between">
          <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
            Nota Projetada (Cochran)
          </p>
          <p className="mt-2 font-mono text-3xl font-semibold tracking-tight tabular-nums text-[#1D1D1F] dark:text-white">
            {summary.projectedScore.toFixed(1)}%
          </p>
          <p className="mt-2 font-mono text-xs tabular-nums text-[#86868B] dark:text-slate-400">
            IC 95%: {summary.ci95[0].toFixed(1)}% – {summary.ci95[1].toFixed(1)}%
          </p>
        </div>

        {/* KPI 2: Probabilidade de Aprovação */}
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none flex flex-col justify-between">
          <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
            Probabilidade de Aprovação
          </p>
          <p className={cn('mt-2 font-mono text-3xl font-semibold tracking-tight tabular-nums', approvalTone)}>
            {summary.approvalProbabilityPct.toFixed(1)}%
          </p>
          <p className="mt-2 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
            {summary.hasSufficientData
              ? `Corte ${summary.cutoffScore.toFixed(1)}% ± ${summary.cutoffSd.toFixed(1)}`
              : 'Amostra inicial em consolidação'}
          </p>
        </div>

        {/* KPI 3: Distância até a Meta / Corte */}
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none flex flex-col justify-between">
          <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
            Distância até o Corte
          </p>
          <p
            className={cn(
              'mt-2 font-mono text-3xl font-semibold tracking-tight tabular-nums',
              isAboveCutoff
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-[#D70015] dark:text-red-400'
            )}
          >
            {formattedDelta}
          </p>
          <p className="mt-2 font-mono text-xs tabular-nums text-[#86868B] dark:text-slate-400">
            Meta c/ margem: {summary.operationalTarget.toFixed(1)}%
          </p>
        </div>

        {/* Card 4: Gargalo Prioritário (Immediate Action) */}
        <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none flex flex-col justify-between gap-3">
          <div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
                Gargalo Prioritário
              </p>
              <span className="inline-flex items-center gap-1 rounded-md bg-[#FF3B30]/10 px-2 py-0.5 text-[11px] font-medium text-[#D70015] dark:text-red-400">
                <AlertTriangle size={12} strokeWidth={1.5} />
                <span>Prioridade</span>
              </span>
            </div>
            <p className="mt-1.5 text-base font-semibold text-[#1D1D1F] dark:text-white truncate">
              {summary.bottleneck?.label ?? 'Sem dados'}
            </p>
            <p className="mt-0.5 font-mono text-xs tabular-nums text-[#86868B] dark:text-slate-400">
              {summary.bottleneck
                ? `${summary.bottleneck.accuracyPct.toFixed(1)}% atual${
                    summary.bottleneck.potentialApprovalGainPp > 0
                      ? ` · +${summary.bottleneck.potentialApprovalGainPp.toFixed(1)} pp em +10%`
                      : ''
                  }`
                : 'Resolva questões para calibrar'}
            </p>
          </div>

          {summary.bottleneck && (
            <button
              type="button"
              onClick={() => onPracticeArea(summary.bottleneck!.grandeAreaId)}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#007AFF] px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition-colors cursor-pointer"
            >
              <span>Treinar {summary.bottleneck.shortLabel}</span>
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </section>

      {/* Compact 2-Column Main Body: 5 Grandes Áreas Table + Simulado Trajectory / Bússola */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: 5 Grandes Áreas Compact Table */}
        <div className="lg:col-span-7 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/5 dark:border-white/[0.07]">
            <div>
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                As 5 Grandes Áreas
              </h2>
              <p className="text-xs text-[#86868B] dark:text-slate-400">
                Estimador estratificado com peso de prova e IC 95% por área
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCalibrationModal('psicometrico')}
              className="text-xs font-medium text-[#007AFF] hover:underline dark:text-sky-400 cursor-pointer whitespace-nowrap"
            >
              Modelo psicométrico
            </button>
          </div>

          <div className="mt-2 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-black/5 text-[#86868B] dark:border-white/[0.07] dark:text-slate-400">
                  <th className="py-2.5 pr-3 font-medium">Grande Área</th>
                  <th className="py-2.5 px-2 font-medium text-right">Peso</th>
                  <th className="py-2.5 px-2 font-medium text-right">Aproveitamento</th>
                  <th className="py-2.5 px-2 font-medium text-right hidden sm:table-cell">IC 95%</th>
                  <th className="py-2.5 pl-2 font-medium text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/[0.06]">
                {summary.areaTableRows.map((row) => {
                  const isBottleneck =
                    summary.bottleneck?.grandeAreaId === row.grandeAreaId;
                  return (
                    <tr
                      key={row.grandeAreaId}
                      className="hover:bg-[#F5F5F7]/60 dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-2.5 pr-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-medium text-[#1D1D1F] dark:text-slate-100 truncate">
                            {row.label}
                          </span>
                          {isBottleneck && (
                            <span className="shrink-0 rounded bg-[#FF3B30]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#D70015] dark:text-red-400">
                              Gargalo
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono tabular-nums text-[#86868B] dark:text-slate-400">
                        {row.weightPct}%
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono tabular-nums">
                        <span
                          className={cn(
                            'font-semibold',
                            row.accuracyPct >= summary.cutoffScore
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : row.accuracyPct >= summary.cutoffScore - 8
                              ? 'text-[#1D1D1F] dark:text-slate-200'
                              : 'text-[#D70015] dark:text-red-400'
                          )}
                        >
                          {row.accuracyPct.toFixed(1)}%
                        </span>
                        <span className="ml-1.5 text-[11px] text-[#86868B] dark:text-slate-500">
                          ({row.answered})
                        </span>
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono tabular-nums text-[#86868B] dark:text-slate-400 hidden sm:table-cell">
                        {row.ci95[0].toFixed(0)}–{row.ci95[1].toFixed(0)}%
                      </td>
                      <td className="py-2.5 pl-2 text-right">
                        <button
                          type="button"
                          onClick={() => onPracticeArea(row.grandeAreaId)}
                          className="inline-flex items-center gap-1 rounded-lg border border-black/10 bg-white px-2.5 py-1 text-xs font-medium text-[#1D1D1F] hover:border-[#007AFF]/40 hover:text-[#007AFF] dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-300 transition-colors cursor-pointer"
                        >
                          <span>Praticar</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Compact Simulado Trajectory / Bússola */}
        <div className="lg:col-span-5 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#1B1F27] dark:shadow-none flex flex-col justify-between">
          <div className="flex items-start justify-between gap-2 pb-3 border-b border-black/5 dark:border-white/[0.07]">
            <div>
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                Trajetória dos Simulados
              </h2>
              <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                {summary.cutoffProjection.simuladoCount > 0
                  ? `${summary.cutoffProjection.simuladoCount} simulados · Ritmo ${
                      summary.cutoffProjection.weeklyPace !== null
                        ? `${summary.cutoffProjection.weeklyPace >= 0 ? '+' : ''}${summary.cutoffProjection.weeklyPace.toFixed(1)} pts/sem`
                        : 'em calibração'
                    }`
                  : 'Nenhum simulado registrado nesta escala'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenCalibrationModal('bussola')}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#007AFF] hover:underline dark:text-sky-400 cursor-pointer whitespace-nowrap"
            >
              <Compass size={14} strokeWidth={1.5} />
              <span>Abrir Bússola</span>
            </button>
          </div>

          {summary.trajectoryPoints.length > 0 ? (
            <div className="mt-3 h-[210px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={summary.trajectoryPoints}
                  margin={{ top: 8, right: 12, left: -18, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis
                    dataKey="label"
                    tick={{ fontSize: 11, fill: axisColor }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={['auto', 'auto']}
                    tick={{ fontSize: 11, fill: axisColor }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: darkMode ? '#161A22' : '#FFFFFF',
                      borderColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                      borderRadius: '10px',
                      fontSize: '12px',
                    }}
                  />
                  <ReferenceLine
                    y={summary.cutoffScore}
                    stroke="#D70015"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <Line
                    type="monotone"
                    dataKey="estimatedScore"
                    name="Nota"
                    stroke="#007AFF"
                    strokeWidth={2}
                    dot={{ r: 3.5, fill: '#007AFF' }}
                    activeDot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="trendScore"
                    name="Tendência"
                    stroke="#86868B"
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="my-auto py-10 text-center space-y-2.5">
              <p className="text-xs text-[#86868B] dark:text-slate-400">
                Registre seu primeiro simulado na escala {cutoffTarget.scaleType === 'bruta_100' ? '0–100%' : 'TRI'} para acompanhar o ritmo semanal até o corte.
              </p>
              <button
                type="button"
                onClick={() => onOpenCalibrationModal('bussola')}
                className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <span>Registrar simulado</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
