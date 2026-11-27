import React, { useEffect, useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import {
  Sigma,
  ChevronDown,
  Plus,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import type { CutoffTargetConfig, SimuladoRecord } from '../../types/medical';
import {
  computeCutoffSeriesStats,
  computePsychometricApproval,
  DEFAULT_CALIBRATION_PAIRS,
  type CalibrationPair,
  type Stage1Model,
} from '../../lib/psychometricApproval';
import { isSyntheticCalibrationDataset } from '../../lib/recencyAnalytics';
import { cn } from '../../lib/utils';

interface ApprovalProbabilityCardProps {
  studentCorrect: number;
  studentAnswered: number;
  simuladoHistory: SimuladoRecord[];
  cutoffTarget: CutoffTargetConfig;
  darkMode: boolean;
}

type DataSourceMode = 'medr1_bank' | 'medr1_simulados' | 'manual';
type CutoffInputMode = 'mean_sd' | 'history_list' | 'fixed';
type ChartViewMode = 'margin' | 'overlap';

export function ApprovalProbabilityCard({
  studentCorrect,
  studentAnswered,
  simuladoHistory,
  cutoffTarget,
  darkMode,
}: ApprovalProbabilityCardProps) {
  const [sourceMode, setSourceMode] = useState<DataSourceMode>('medr1_bank');
  const [stage1Model, setStage1Model] = useState<Stage1Model>('binomial_wilson');
  const [chartView, setChartView] = useState<ChartViewMode>('margin');

  // Manual Binomial inputs (initialized with classic worked benchmark n=200, k=156)
  const [manualK, setManualK] = useState('156');
  const [manualN, setManualN] = useState('200');

  // TCT (Lord & Novick) inputs
  const [tctObserved, setTctObserved] = useState('78.0');
  const [tctCohortSd, setTctCohortSd] = useState('9.5');
  const [tctReliability, setTctReliability] = useState('0.88');

  // Stage 2: Optional OLS Calibration
  const [enableOls, setEnableOls] = useState(false);
  const [showOlsEditor, setShowOlsEditor] = useState(false);
  const [calibrationPairs, setCalibrationPairs] = useState<CalibrationPair[]>(
    DEFAULT_CALIBRATION_PAIRS
  );
  const [newSimScore, setNewSimScore] = useState('');
  const [newOfficialScore, setNewOfficialScore] = useState('');

  // Stage 3: Cutoff distribution C ~ N(mu_C, sigma_C^2)
  const [cutoffMode, setCutoffMode] = useState<CutoffInputMode>('mean_sd');
  const [cutoffMeanInput, setCutoffMeanInput] = useState(() =>
    String(
      cutoffTarget.scaleType === 'bruta_100'
        ? cutoffTarget.historicalCutoff
        : 75
    )
  );
  const [cutoffSdInput, setCutoffSdInput] = useState('2.0');
  const [cutoffHistoryText, setCutoffHistoryText] = useState(
    '73.0, 74.5, 75.0, 77.5, 75.0'
  );
  const [showTriNote, setShowTriNote] = useState(false);

  // Keep default cutoff mean synced when user updates historicalCutoff in Bússola
  useEffect(() => {
    if (cutoffTarget.scaleType === 'bruta_100') {
      setCutoffMeanInput(String(cutoffTarget.historicalCutoff));
    }
  }, [cutoffTarget.historicalCutoff, cutoffTarget.scaleType]);

  // Aggregate recent simulados (up to last 3 bruta_100 simulados)
  const recentSimuladoTotals = useMemo(() => {
    const bruta = simuladoHistory.filter((s) => s.scaleType === 'bruta_100');
    const recent = [...bruta]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-3);
    const k = recent.reduce((acc, s) => acc + s.validCorrect, 0);
    const n = recent.reduce((acc, s) => acc + s.validTotal, 0);
    return { k, n, count: recent.length };
  }, [simuladoHistory]);

  const activeCounts = useMemo(() => {
    if (sourceMode === 'medr1_bank') {
      return { k: studentCorrect, n: studentAnswered };
    }
    if (sourceMode === 'medr1_simulados' && recentSimuladoTotals.n > 0) {
      return { k: recentSimuladoTotals.k, n: recentSimuladoTotals.n };
    }
    const parsedK = Number.parseInt(manualK, 10);
    const parsedN = Number.parseInt(manualN, 10);
    return {
      k: Number.isNaN(parsedK) ? 0 : parsedK,
      n: Number.isNaN(parsedN) ? 0 : parsedN,
    };
  }, [
    sourceMode,
    studentCorrect,
    studentAnswered,
    recentSimuladoTotals,
    manualK,
    manualN,
  ]);

  const parsedCutoffHistory = useMemo(() => {
    const nums = cutoffHistoryText
      .split(/[;,\s]+/)
      .map((s) => Number.parseFloat(s.replace(',', '.')))
      .filter((v) => Number.isFinite(v));
    return computeCutoffSeriesStats(nums);
  }, [cutoffHistoryText]);

  const resolvedCutoff = useMemo(() => {
    if (cutoffMode === 'history_list') {
      return {
        mean: parsedCutoffHistory.mean,
        stdDev: parsedCutoffHistory.stdDev,
      };
    }
    const mean = Number.parseFloat(cutoffMeanInput.replace(',', '.'));
    if (cutoffMode === 'fixed') {
      return {
        mean: Number.isFinite(mean) ? mean : 75,
        stdDev: 0,
      };
    }
    const sd = Number.parseFloat(cutoffSdInput.replace(',', '.'));
    return {
      mean: Number.isFinite(mean) ? mean : 75,
      stdDev: Number.isFinite(sd) && sd >= 0 ? sd : 0,
    };
  }, [cutoffMode, cutoffMeanInput, cutoffSdInput, parsedCutoffHistory]);

  const result = useMemo(
    () =>
      computePsychometricApproval({
        stage1Model,
        correctCount: activeCounts.k,
        totalCount: activeCounts.n,
        observedScore: Number.parseFloat(tctObserved.replace(',', '.')) || 0,
        cohortStdDev: Number.parseFloat(tctCohortSd.replace(',', '.')) || 0,
        reliabilityRxx:
          Number.parseFloat(tctReliability.replace(',', '.')) || 0.85,
        enableOlsCalibration: enableOls,
        calibrationPairs,
        cutoffMean: resolvedCutoff.mean,
        cutoffStdDev: resolvedCutoff.stdDev,
      }),
    [
      stage1Model,
      activeCounts,
      tctObserved,
      tctCohortSd,
      tctReliability,
      enableOls,
      calibrationPairs,
      resolvedCutoff,
    ]
  );

  const handleLoadWorkedExample = () => {
    setSourceMode('manual');
    setStage1Model('binomial_wald');
    setManualK('156');
    setManualN('200');
    setEnableOls(false);
    setCutoffMode('mean_sd');
    setCutoffMeanInput('75.0');
    setCutoffSdInput('2.0');
  };

  const handleAddCalibrationPair = (e: React.FormEvent) => {
    e.preventDefault();
    const x = Number.parseFloat(newSimScore.replace(',', '.'));
    const y = Number.parseFloat(newOfficialScore.replace(',', '.'));
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    setCalibrationPairs((prev) => [
      ...prev,
      {
        id: `cal-${Date.now()}`,
        label: `Registro #${prev.length + 1}`,
        simuladoScore: Math.max(0, Math.min(100, x)),
        officialScore: Math.max(0, Math.min(100, y)),
      },
    ]);
    setNewSimScore('');
    setNewOfficialScore('');
  };

  const axisTickColor = darkMode ? '#94A3B8' : '#64748B';
  const gridColor = darkMode ? '#1E293B' : '#E2E8F0';
  const tooltipStyle = {
    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
    borderColor: darkMode ? '#334155' : '#E2E8F0',
    borderRadius: '10px',
    color: darkMode ? '#F8FAFC' : '#0F172A',
    fontSize: '12px',
  };

  return (
    <section
      aria-label="Probabilidade de aprovação pelo modelo psicométrico em 3 etapas"
      className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Sigma className="h-4 w-4 text-[#1A56DB] dark:text-sky-400 shrink-0" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Probabilidade de Aprovação (Modelo Psicométrico)
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span>Etapa 1: Binomial / TCT</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span>Etapa 2: Calibração MQO opcional</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span>Etapa 3: Normal Combinada P(Y ≥ C)</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
            {(
              [
                { id: 'medr1_bank', label: 'Banco MedR1' },
                { id: 'medr1_simulados', label: 'Simulados' },
                { id: 'manual', label: 'Manual' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSourceMode(opt.id)}
                disabled={
                  opt.id === 'medr1_simulados' && recentSimuladoTotals.n === 0
                }
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed',
                  sourceMode === opt.id
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={handleLoadWorkedExample}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Exemplo (n=200, k=156)
          </button>
        </div>
      </div>

      {/* Top 3-Stage Output Readout */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800">
        {/* Stage 1/2: Score & 95% Interval */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Nota estimada (Ŷ) e {result.finalIntervalLabel}
          </p>
          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span className="font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
              {result.valid ? result.finalMeanY.toFixed(1) : '—'}
            </span>
            {result.valid && (
              <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                ± σ = {result.finalSigmaY.toFixed(2)} pts
              </span>
            )}
          </div>
          {result.valid && (
            <p className="mt-1.5 font-mono text-xs tabular-nums text-slate-600 dark:text-slate-300">
              [{result.finalInterval95[0].toFixed(2)};{' '}
              {result.finalInterval95[1].toFixed(2)}]
              {stage1Model !== 'tct_sem' && !result.ols?.valid && (
                <span className="font-sans text-slate-400 dark:text-slate-500">
                  {' '}
                  · {activeCounts.k}/{activeCounts.n} questões
                </span>
              )}
            </p>
          )}
        </div>

        {/* Stage 3a: Combined Margin D = Y - C */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Margem combinada (D = Y − C)
          </p>
          <div className="mt-2 flex items-baseline gap-2 flex-wrap">
            <span
              className={cn(
                'font-mono text-3xl font-bold tabular-nums',
                result.marginMean >= 0
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-600 dark:text-red-400'
              )}
            >
              {result.valid
                ? `${result.marginMean >= 0 ? '+' : ''}${result.marginMean.toFixed(
                    2
                  )}`
                : '—'}
            </span>
            {result.valid && (
              <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                σ_D = {result.marginSigma.toFixed(2)} pts
              </span>
            )}
          </div>
          {result.valid && (
            <p className="mt-1.5 font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
              Corte μ_C = {result.cutoffMean.toFixed(1)} (σ_C ={' '}
              {result.cutoffStdDev.toFixed(2)}) · Z ={' '}
              <strong className="text-slate-700 dark:text-slate-200">
                {result.zScore >= 0 ? '+' : ''}
                {result.zScore.toFixed(3)}
              </strong>
            </p>
          )}
        </div>

        {/* Stage 3b: Probability Phi(Z) */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Probabilidade de superar o corte · P(Y ≥ C) = Φ(Z)
          </p>
          <div className="mt-2 flex items-baseline gap-2.5 flex-wrap">
            <span
              className={cn(
                'font-mono text-3xl font-bold tabular-nums',
                result.approvalProbabilityPct >= 75
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : result.approvalProbabilityPct >= 45
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-red-600 dark:text-red-400'
              )}
            >
              {result.valid ? `${result.approvalProbabilityPct.toFixed(1)}%` : '—'}
            </span>
            {result.valid && (
              <span
                className={cn(
                  'inline-flex items-center gap-1 text-xs font-semibold',
                  result.approvalProbabilityPct >= 75
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : result.approvalProbabilityPct >= 45
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-red-700 dark:text-red-400'
                )}
              >
                {result.approvalProbabilityPct >= 75 ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : (
                  <AlertTriangle className="h-3.5 w-3.5" />
                )}
                <span>{result.statusLabel}</span>
              </span>
            )}
          </div>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
            {result.ols?.valid
              ? `Calibrado por MQO (m = ${result.ols.sampleSize}, R² = ${result.ols.rSquared.toFixed(2)})`
              : 'Inferência direta da Etapa 1 + Normal do corte'}
          </p>
        </div>
      </div>

      {/* Main Split: Parameter Controls (5 cols) + Distribution Visualization (7 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-slate-200 dark:divide-slate-800">
        {/* Left: 3-Stage Parameter Controls */}
        <div className="xl:col-span-5 p-5 sm:p-6 space-y-5">
          {/* STAGE 1 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
                Etapa 1 · Estimativa e Erro Padrão do Aluno
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
              {(
                [
                  { id: 'binomial_wilson', label: 'Wilson' },
                  { id: 'binomial_wald', label: 'Wald' },
                  { id: 'tct_sem', label: 'TCT (SEM)' },
                ] as const
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setStage1Model(m.id)}
                  className={cn(
                    'rounded-md py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                    stage1Model === m.id
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {stage1Model === 'tct_sem' ? (
              <div className="grid grid-cols-3 gap-2.5">
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Nota (X)
                  </span>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="100"
                    value={tctObserved}
                    onChange={(e) => setTctObserved(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    DP Turma (σ_X)
                  </span>
                  <input
                    type="number"
                    step="0.5"
                    min="0.1"
                    max="40"
                    value={tctCohortSd}
                    onChange={(e) => setTctCohortSd(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Alfa / KR-20 (r_xx)
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    min="0.05"
                    max="0.99"
                    value={tctReliability}
                    onChange={(e) => setTctReliability(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
              </div>
            ) : sourceMode === 'manual' ? (
              <div className="grid grid-cols-2 gap-2.5">
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Acertos (k)
                  </span>
                  <input
                    type="number"
                    min="0"
                    max={Number(manualN) || 10000}
                    value={manualK}
                    onChange={(e) => setManualK(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Questões recentes (n)
                  </span>
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={manualN}
                    onChange={(e) => setManualN(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
              </div>
            ) : (
              <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs dark:border-slate-800 dark:bg-slate-950/60">
                <span className="text-slate-600 dark:text-slate-400">
                  {sourceMode === 'medr1_bank'
                    ? 'Amostra acumulada no Banco MedR1'
                    : `Últimos ${recentSimuladoTotals.count} simulados registrados`}
                </span>
                <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-white">
                  k = {activeCounts.k} / n = {activeCounts.n}
                </span>
              </div>
            )}

            {/* Side-by-side comparison of Wilson vs Wald when in Binomial mode */}
            {result.valid && result.wilsonCi && result.waldCi && (
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                <span>
                  Wilson: [{result.wilsonCi[0].toFixed(2)};{' '}
                  {result.wilsonCi[1].toFixed(2)}]
                </span>
                <span>
                  Wald: [{result.waldCi[0].toFixed(2)};{' '}
                  {result.waldCi[1].toFixed(2)}]
                </span>
              </div>
            )}
          </div>

          {/* STAGE 2: Optional OLS Calibration */}
          <div className="border-t border-slate-200 pt-4 dark:border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableOls}
                  onChange={(e) => {
                    setEnableOls(e.target.checked);
                    if (e.target.checked) setShowOlsEditor(true);
                  }}
                  className="h-3.5 w-3.5 rounded border-slate-300 text-[#1A56DB] focus:ring-[#1A56DB] cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  Etapa 2 · Calibração Histórica (MQO)
                </span>
                {isSyntheticCalibrationDataset(calibrationPairs) && (
                  <span
                    title="Os 6 pares iniciais são dados ilustrativos de exemplo. Substitua por pares reais para calibração verdadeira."
                    className="rounded-md bg-amber-500/12 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-300"
                  >
                    Base ilustrativa
                  </span>
                )}
              </label>

              {enableOls && (
                <button
                  type="button"
                  onClick={() => setShowOlsEditor((v) => !v)}
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1A56DB] dark:text-sky-400 cursor-pointer"
                >
                  <span>
                    {showOlsEditor
                      ? 'Ocultar base'
                      : `Editar pares (m=${calibrationPairs.length})`}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-3 w-3 transition-transform',
                      showOlsEditor && 'rotate-180'
                    )}
                  />
                </button>
              )}
            </div>

            {!enableOls ? (
              <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                Desativada — usando Ŷ e σ_Y diretamente da Etapa 1 (recomendado quando não há base pareada de simulado vs. prova oficial).
              </p>
            ) : (
              <div className="space-y-2.5">
                {result.ols?.valid ? (
                  <p className="font-mono text-[11px] tabular-nums text-slate-600 dark:text-slate-300">
                    Ŷ₀ = {result.ols.beta0.toFixed(2)} +{' '}
                    {result.ols.beta1.toFixed(3)}·X₀ · s_e ={' '}
                    {result.ols.residualSe.toFixed(2)} · t ={' '}
                    {result.ols.tCritical95.toFixed(2)}
                  </p>
                ) : (
                  <p className="text-[11px] text-amber-600 dark:text-amber-400">
                    Adicione ao menos 3 pares (X simulado, Y prova oficial) com variação em X para ajustar o modelo MQO.
                  </p>
                )}

                {showOlsEditor && (
                  <div className="space-y-2 rounded-lg border border-slate-200 bg-[#F8FAFC] p-2.5 dark:border-slate-800 dark:bg-slate-950/60">
                    <div className="max-h-36 overflow-y-auto divide-y divide-slate-200/70 dark:divide-slate-800">
                      {calibrationPairs.map((pair) => (
                        <div
                          key={pair.id}
                          className="flex items-center justify-between py-1 text-[11px] font-mono tabular-nums"
                        >
                          <span className="font-sans text-slate-600 dark:text-slate-400 truncate pr-2">
                            {pair.label}
                          </span>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-slate-700 dark:text-slate-300">
                              X={pair.simuladoScore.toFixed(1)} → Y=
                              {pair.officialScore.toFixed(1)}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setCalibrationPairs((prev) =>
                                  prev.filter((item) => item.id !== pair.id)
                                )
                              }
                              aria-label={`Remover ${pair.label}`}
                              className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <form
                      onSubmit={handleAddCalibrationPair}
                      className="flex items-center gap-1.5 pt-1"
                    >
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        max="100"
                        placeholder="X sim."
                        value={newSimScore}
                        onChange={(e) => setNewSimScore(e.target.value)}
                        className="w-full rounded border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] tabular-nums dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                      />
                      <input
                        type="number"
                        step="0.5"
                        min="0"
                        max="100"
                        placeholder="Y oficial"
                        value={newOfficialScore}
                        onChange={(e) => setNewOfficialScore(e.target.value)}
                        className="w-full rounded border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] tabular-nums dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                      />
                      <button
                        type="submit"
                        aria-label="Adicionar par histórico"
                        className="inline-flex items-center justify-center rounded bg-[#1A56DB] p-1.5 text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 cursor-pointer shrink-0"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* STAGE 3: Cutoff C ~ N(mu_C, sigma_C^2) */}
          <div className="border-t border-slate-200 pt-4 dark:border-slate-800 space-y-3">
            <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
              Etapa 3 · Distribuição da Nota de Corte (C)
            </h3>

            <div className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
              {(
                [
                  { id: 'mean_sd', label: 'μ_C e σ_C' },
                  { id: 'history_list', label: 'Série anual' },
                  { id: 'fixed', label: 'Fixo (σ=0)' },
                ] as const
              ).map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setCutoffMode(mode.id)}
                  className={cn(
                    'rounded-md py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                    cutoffMode === mode.id
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {mode.label}
                </button>
              ))}
            </div>

            {cutoffMode === 'history_list' ? (
              <div className="space-y-1.5">
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Cortes das últimas edições (separados por vírgula)
                  </span>
                  <input
                    type="text"
                    value={cutoffHistoryText}
                    onChange={(e) => setCutoffHistoryText(e.target.value)}
                    placeholder="Ex.: 73.0, 74.5, 75.0, 77.5, 75.0"
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <p className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                  {parsedCutoffHistory.count} edições → μ_C ={' '}
                  {parsedCutoffHistory.mean.toFixed(2)} · σ_C ={' '}
                  {parsedCutoffHistory.stdDev.toFixed(2)}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2.5">
                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Média do corte (μ_C)
                  </span>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    max="100"
                    value={cutoffMeanInput}
                    onChange={(e) => setCutoffMeanInput(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
                    Desvio-padrão (σ_C)
                  </span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="25"
                    disabled={cutoffMode === 'fixed'}
                    value={cutoffMode === 'fixed' ? '0' : cutoffSdInput}
                    onChange={(e) => setCutoffSdInput(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:disabled:bg-slate-900"
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Right: Gaussian Distribution Visualization */}
        <div className="xl:col-span-7 p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                {chartView === 'margin'
                  ? 'Distribuição da Margem de Aprovação (D = Y − C)'
                  : 'Curvas Normais: Nota do Aluno (Y) vs. Corte Histórico (C)'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {chartView === 'margin'
                  ? 'A área em verde (D ≥ 0) equivale exatamente à probabilidade P(Y ≥ C) = Φ(Z).'
                  : 'Sobreposição entre a incerteza da sua nota estimada e a variação histórica do corte.'}
              </p>
            </div>

            <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 self-start shrink-0">
              <button
                type="button"
                onClick={() => setChartView('margin')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  chartView === 'margin'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Margem D = Y − C
              </button>
              <button
                type="button"
                onClick={() => setChartView('overlap')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  chartView === 'overlap'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Curvas Y vs. C
              </button>
            </div>
          </div>

          {!result.valid ? (
            <div className="flex h-[270px] items-center justify-center rounded-lg border border-dashed border-slate-200 p-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              {result.validationMessage}
            </div>
          ) : (
            <div className="h-[270px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {chartView === 'margin' ? (
                  <AreaChart
                    data={result.marginCurve}
                    margin={{ top: 14, right: 16, left: -18, bottom: 4 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={gridColor}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="x"
                      type="number"
                      domain={['dataMin', 'dataMax']}
                      tickFormatter={(v: number) =>
                        `${v > 0 ? '+' : ''}${v.toFixed(0)}`
                      }
                      tick={{ fill: axisTickColor, fontSize: 11 }}
                      axisLine={{ stroke: gridColor }}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      labelFormatter={(v) =>
                        `Margem D = ${Number(v) >= 0 ? '+' : ''}${Number(
                          v
                        ).toFixed(1)} pts`
                      }
                      formatter={(val, name) => [
                        typeof val === 'number' ? val.toFixed(2) : String(val),
                        name === 'marginPositiveDensity'
                          ? 'Acima do corte (D ≥ 0)'
                          : 'Abaixo do corte (D < 0)',
                      ]}
                    />
                    <ReferenceLine
                      x={0}
                      stroke={darkMode ? '#E2E8F0' : '#0F172A'}
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                      label={{
                        value: 'Corte (D = 0)',
                        position: 'insideTopRight',
                        fill: axisTickColor,
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="marginNegativeDensity"
                      stroke="#EF4444"
                      strokeWidth={1.75}
                      fill="#EF4444"
                      fillOpacity={darkMode ? 0.2 : 0.14}
                      isAnimationActive={false}
                    />
                    <Area
                      type="monotone"
                      dataKey="marginPositiveDensity"
                      stroke="#10B981"
                      strokeWidth={2}
                      fill="#10B981"
                      fillOpacity={darkMode ? 0.28 : 0.22}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                ) : (
                  <AreaChart
                    data={result.overlapCurve}
                    margin={{ top: 14, right: 16, left: -18, bottom: 4 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke={gridColor}
                      vertical={false}
                    />
                    <XAxis
                      dataKey="x"
                      type="number"
                      domain={['dataMin', 'dataMax']}
                      tickFormatter={(v: number) => `${v.toFixed(0)}`}
                      tick={{ fill: axisTickColor, fontSize: 11 }}
                      axisLine={{ stroke: gridColor }}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      labelFormatter={(v) => `Nota: ${Number(v).toFixed(1)}`}
                      formatter={(val, name) => [
                        typeof val === 'number' ? val.toFixed(2) : String(val),
                        name === 'studentDensity'
                          ? 'Aluno (Y)'
                          : 'Corte histórico (C)',
                      ]}
                    />
                    <ReferenceLine
                      x={result.cutoffMean}
                      stroke="#D97706"
                      strokeWidth={1.5}
                      strokeDasharray="4 3"
                      label={{
                        value: `μ_C (${result.cutoffMean.toFixed(1)})`,
                        position: 'insideTopLeft',
                        fill: '#D97706',
                        fontSize: 11,
                      }}
                    />
                    <ReferenceLine
                      x={result.finalMeanY}
                      stroke="#1A56DB"
                      strokeWidth={1.5}
                      label={{
                        value: `Ŷ (${result.finalMeanY.toFixed(1)})`,
                        position: 'insideTopRight',
                        fill: darkMode ? '#38BDF8' : '#1A56DB',
                        fontSize: 11,
                      }}
                    />
                    {result.cutoffStdDev > 0.05 && (
                      <Area
                        type="monotone"
                        dataKey="cutoffDensity"
                        stroke="#D97706"
                        strokeWidth={1.75}
                        fill="#D97706"
                        fillOpacity={darkMode ? 0.18 : 0.14}
                        isAnimationActive={false}
                      />
                    )}
                    <Area
                      type="monotone"
                      dataKey="studentDensity"
                      stroke="#1A56DB"
                      strokeWidth={2}
                      fill="#1A56DB"
                      fillOpacity={darkMode ? 0.25 : 0.18}
                      isAnimationActive={false}
                    />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>
          )}

          {/* Methodological Note (TRI 3PL Limitation) */}
          <div className="border-t border-slate-200 pt-3 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setShowTriNote((v) => !v)}
              aria-expanded={showTriNote}
              className="flex w-full items-center justify-between gap-2 text-left text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <Info className="h-3.5 w-3.5 shrink-0" />
                <span>
                  Nota metodológica: pontuação clássica vs. TRI (Modelo 3PL)
                </span>
              </span>
              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform shrink-0',
                  showTriNote && 'rotate-180'
                )}
              />
            </button>
            {showTriNote && (
              <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Este modelo assume pontuação clássica (nota bruta, todas as questões com igual peso). Em provas corrigidas por Teoria de Resposta ao Item (TRI — Modelo Logístico 3PL de Birnbaum, 1968), a proficiência (θ) e seu erro padrão dependem dos parâmetros de discriminação (aᵢ), dificuldade (bᵢ) e acerto ao acaso (cᵢ) de cada item. Como esses parâmetros não são divulgados previamente pelas bancas, o encadeamento Binomial/TCT + Normal combinada é a aproximação estatística mais rigorosa para uso externo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
