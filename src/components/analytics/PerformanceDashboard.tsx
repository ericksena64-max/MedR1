import React, { useEffect, useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line,
} from 'recharts';
import {
  ArrowUpDown,
  TrendingUp,
  TrendingDown,
  Minus,
  BarChart2,
  Radar as RadarIcon,
  ChevronDown,
  ChevronUp,
  X,
} from 'lucide-react';
import type {
  CutoffTargetConfig,
  ExamBoard,
  Flashcard,
  GrandeAreaId,
  MedicalQuestion,
  PerformanceStatus,
  SimuladoRecord,
  TemporalPoint,
  UserAnswerRecord,
} from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import { ParetoChart } from './ParetoChart';
import { KnowledgeGapHeatmap } from './KnowledgeGapHeatmap';
import { DailyKnowledgeGapCard } from './DailyKnowledgeGapCard';
import { WeakTopicsEvolutionChart } from './WeakTopicsEvolutionChart';
import { GapRadarCard } from './GapRadarCard';
import { CutoffProjectionCard } from './CutoffProjectionCard';
import { ApprovalProbabilityCard } from './ApprovalProbabilityCard';
import { StratifiedApprovalCard } from './StratifiedApprovalCard';
import type { CalibrationModalTab } from './HomeExecutiveOverview';
import {
  buildHomeIntelligenceSummary,
  readPersistedEstimatorConfig,
} from '../../lib/homeIntelligence';
import {
  ESTIMATOR_STORAGE_KEY,
  ESTIMATOR_UPDATED_EVENT,
  type ConfiguracaoProva,
} from '../../lib/residenciaEstimator';
import { cn, formatDelta } from '../../lib/utils';

export interface PerformanceRow {
  id: string;
  grandeAreaId: GrandeAreaId;
  label: string;
  shortLabel: string;
  parentArea: string;
  answered: number;
  correct: number;
  studentPct: number;
  communityMedianPct: number;
  communityP75Pct: number;
  delta: number;
  status: PerformanceStatus;
}

interface PerformanceDashboardProps {
  studentId: string;
  analytics: {
    totalAnswered: number;
    totalCorrect: number;
    overallStudentPct: number;
    overallMedianPct: number;
    overallP75Pct: number;
    overallDelta: number;
    overallStatus: PerformanceStatus;
    areaRows: PerformanceRow[];
    topicRows: PerformanceRow[];
    weeklyEvolution: TemporalPoint[];
    monthlyEvolution: TemporalPoint[];
  };
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  flashcards: Flashcard[];
  darkMode: boolean;
  targetBoard: ExamBoard;
  onFilterQuestionsByTopic: (payload: {
    topicLabel: string;
    matchedTema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
  onFilterFlashcardsByTopic: (payload: {
    topicLabel: string;
    matchedTema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
  onLaunchGapRadarSimulado: (
    topics: Array<{ topic: string; grandeAreaId: GrandeAreaId }>
  ) => void;
  onCreateFlashcardFromQuestion: (question: MedicalQuestion) => void;
  onOpenQuestion: (questionId: string) => void;
  onGoToFlashcards: () => void;
  onGoToErrorNotebook: () => void;
  onGoToQuestionBank: () => void;
  onStartQuickSimulado?: () => void;
  onPracticeArea: (areaId: GrandeAreaId) => void;
  simuladoHistory: SimuladoRecord[];
  cutoffTarget: CutoffTargetConfig;
  onAddSimulado: (entry: Omit<SimuladoRecord, 'id' | 'accuracyPct'>) => void;
  onDeleteSimulado: (id: string) => void;
  onUpdateCutoffTarget: (patch: Partial<CutoffTargetConfig>) => void;
  onRestoreExampleSimulados: () => void;
  bankVersion?: number;
}

type Granularity = 'geral' | 'areas' | 'temas';
type ChartVisual = 'bar' | 'radar';
type TimeWindow = 'semanal' | 'mensal';
type SortKey = 'label' | 'answered' | 'studentPct' | 'communityMedianPct' | 'delta';

export function PerformanceDashboard({
  studentId,
  analytics,
  questions,
  answers,
  flashcards,
  darkMode,
  targetBoard,
  onFilterQuestionsByTopic,
  onFilterFlashcardsByTopic,
  onLaunchGapRadarSimulado,
  onCreateFlashcardFromQuestion,
  onOpenQuestion,
  onGoToFlashcards,
  onGoToErrorNotebook,
  onGoToQuestionBank,
  onStartQuickSimulado,
  onPracticeArea,
  simuladoHistory,
  cutoffTarget,
  onAddSimulado,
  onDeleteSimulado,
  onUpdateCutoffTarget,
  onRestoreExampleSimulados,
  bankVersion = 0,
}: PerformanceDashboardProps) {
  const [granularity, setGranularity] = useState<Granularity>('areas');
  const [selectedAreaFilter, setSelectedAreaFilter] = useState<string>('all');
  const [chartVisual, setChartVisual] = useState<ChartVisual>('bar');
  const [timeWindow, setTimeWindow] = useState<TimeWindow>('semanal');
  const [tableScope, setTableScope] = useState<'areas' | 'temas' | 'atencao'>('areas');
  const [sortKey, setSortKey] = useState<SortKey>('delta');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [calibrationOpen, setCalibrationOpen] = useState(false);
  const [calibrationTab, setCalibrationTab] = useState<CalibrationModalTab>('estimador');
  const [activeSection, setActiveSection] = useState<
    'visao_geral' | 'pareto' | 'mapa_calor' | 'radar'
  >('visao_geral');

  const defaultCutoff =
    cutoffTarget.scaleType === 'bruta_100' ? cutoffTarget.historicalCutoff : 78;

  const [estimatorConfig, setEstimatorConfig] = useState<ConfiguracaoProva>(() => {
    try {
      return readPersistedEstimatorConfig(
        window.localStorage.getItem(ESTIMATOR_STORAGE_KEY),
        defaultCutoff
      );
    } catch {
      return readPersistedEstimatorConfig(null, defaultCutoff);
    }
  });

  // Sync estimator config immediately whenever presets, cutoff or Laplace change in modal
  useEffect(() => {
    const syncEstimator = () => {
      try {
        setEstimatorConfig(
          readPersistedEstimatorConfig(
            window.localStorage.getItem(ESTIMATOR_STORAGE_KEY),
            defaultCutoff
          )
        );
      } catch {
        setEstimatorConfig(readPersistedEstimatorConfig(null, defaultCutoff));
      }
    };

    syncEstimator();
    window.addEventListener(ESTIMATOR_UPDATED_EVENT, syncEstimator);
    window.addEventListener('storage', syncEstimator);
    return () => {
      window.removeEventListener(ESTIMATOR_UPDATED_EVENT, syncEstimator);
      window.removeEventListener('storage', syncEstimator);
    };
  }, [defaultCutoff]);

  // Close calibration modal with Escape & signal modal state to global shortcuts
  useEffect(() => {
    if (!calibrationOpen) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setCalibrationOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [calibrationOpen]);

  const homeSummary = useMemo(
    () =>
      buildHomeIntelligenceSummary({
        areaRows: analytics.areaRows,
        simulados: simuladoHistory,
        cutoffTarget,
        estimatorConfig,
      }),
    [analytics.areaRows, simuladoHistory, cutoffTarget, estimatorConfig]
  );

  const handleOpenCalibrationModal = (tab: CalibrationModalTab = 'estimador') => {
    setCalibrationTab(tab);
    setCalibrationOpen(true);
  };

  const chartData = useMemo(() => {
    if (granularity === 'geral') {
      return [
        {
          name: 'Visão Geral',
          Aluno: analytics.overallStudentPct,
          Mediana: analytics.overallMedianPct,
          Top25: analytics.overallP75Pct,
        },
        ...analytics.areaRows.map((r) => ({
          name: r.shortLabel,
          Aluno: r.studentPct,
          Mediana: r.communityMedianPct,
          Top25: r.communityP75Pct,
        })),
      ];
    }

    if (granularity === 'areas') {
      return analytics.areaRows.map((r) => ({
        name: r.shortLabel,
        Aluno: r.studentPct,
        Mediana: r.communityMedianPct,
        Top25: r.communityP75Pct,
      }));
    }

    const filteredTopics =
      selectedAreaFilter === 'all'
        ? analytics.topicRows.slice(0, 8)
        : analytics.topicRows.filter((t) => t.grandeAreaId === selectedAreaFilter);

    return filteredTopics.map((t) => ({
      name: t.label.length > 16 ? `${t.label.slice(0, 15)}…` : t.label,
      Aluno: t.studentPct,
      Mediana: t.communityMedianPct,
      Top25: t.communityP75Pct,
    }));
  }, [analytics, granularity, selectedAreaFilter]);

  const sortedTableRows = useMemo(() => {
    const base =
      tableScope === 'areas'
        ? analytics.areaRows
        : tableScope === 'atencao'
        ? [...analytics.areaRows, ...analytics.topicRows].filter(
            (r) => r.status === 'Ponto de Atenção'
          )
        : analytics.topicRows;

    return [...base].sort((a, b) => {
      const mul = sortDir === 'asc' ? 1 : -1;
      if (sortKey === 'label') return a.label.localeCompare(b.label) * mul;
      return (a[sortKey] - b[sortKey]) * mul;
    });
  }, [analytics, tableScope, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir(key === 'label' ? 'asc' : 'desc');
    }
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

  const evolutionData =
    timeWindow === 'semanal'
      ? analytics.weeklyEvolution
      : analytics.monthlyEvolution;

  const p75Gap = Number((analytics.overallStudentPct - analytics.overallP75Pct).toFixed(1));

  return (
    <div className="space-y-4">
      {/* Clean Performance Header + Segmented Control (no Home duplication) */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 sm:px-5 dark:border-white/[0.08] dark:bg-[#131926]">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Inteligência de Desempenho
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {cutoffTarget.institution} · Nota projetada {homeSummary.projectedScore.toFixed(1)}% · Aprovação {homeSummary.approvalProbabilityPct.toFixed(1)}%
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-[#0B0F17]">
            {(
              [
                { id: 'visao_geral', label: 'Visão Geral' },
                { id: 'pareto', label: 'Pareto 80/20' },
                { id: 'mapa_calor', label: 'Mapa de Calor' },
                { id: 'radar', label: 'Radar de Lacunas' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveSection(tab.id)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  activeSection === tab.id
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-[#182030] dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleOpenCalibrationModal('estimador')}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-[#182030] dark:text-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
          >
            <span>Calibrar Modelos</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
          {/* Secondary 4-column Community Benchmark Strip */}
          {activeSection === 'visao_geral' && (
          <section
            aria-label="Resumo de desempenho comparado à comunidade"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Aproveitamento do Aluno
              </p>
              <p className="mt-2 font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
                {analytics.overallStudentPct.toFixed(1)}%
              </p>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                {analytics.totalCorrect} acertos em {analytics.totalAnswered} questões
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Mediana da Comunidade (P50)
              </p>
              <p className="mt-2 font-mono text-3xl font-bold tabular-nums text-slate-700 dark:text-slate-200">
                {analytics.overallMedianPct.toFixed(1)}%
              </p>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                Base nacional · Residência Médica
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Diferença vs. Mediana (Delta)
              </p>
              <p
                className={cn(
                  'mt-2 font-mono text-3xl font-bold tabular-nums',
                  analytics.overallDelta >= 3
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : analytics.overallDelta <= -3
                    ? 'text-red-600 dark:text-red-400'
                    : 'text-amber-600 dark:text-amber-400'
                )}
              >
                {formatDelta(analytics.overallDelta)}
              </p>
              <p className="mt-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                Status: {analytics.overallStatus}
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Top Performers (Percentil 75)
              </p>
              <p className="mt-2 font-mono text-3xl font-bold tabular-nums text-sky-600 dark:text-sky-400">
                {analytics.overallP75Pct.toFixed(1)}%
              </p>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                Distância atual para o P75: {formatDelta(p75Gap)}
              </p>
            </div>
          </section>
          )}

          {/* Radar de Lacunas — Top 3 maior volume x menor acurácia (mv_student_performance_percentiles) */}
          {activeSection === 'radar' && (
            <>
              <GapRadarCard
                studentId={studentId}
                topicRows={analytics.topicRows}
                questions={questions}
                answers={answers}
                darkMode={darkMode}
                onLaunchGapRadarSimulado={onLaunchGapRadarSimulado}
                onFilterQuestionsByTopic={onFilterQuestionsByTopic}
              />

              {/* Daily Knowledge Gap Summary + 3 Priority Flashcards */}
              <DailyKnowledgeGapCard
                questions={questions}
                answers={answers}
                flashcards={flashcards}
                topicRows={analytics.topicRows}
                onFilterFlashcardsByTopic={onFilterFlashcardsByTopic}
                onCreateFlashcardFromQuestion={onCreateFlashcardFromQuestion}
                onOpenQuestion={onOpenQuestion}
                onGoToFlashcards={onGoToFlashcards}
              />
            </>
          )}

      {/* 30-Day Interactive Line Chart for Weakest Topics + Primary Charts */}
      {activeSection === 'visao_geral' && (
        <>
          <WeakTopicsEvolutionChart
            topicRows={analytics.topicRows}
            questions={questions}
            answers={answers}
            darkMode={darkMode}
            onFilterQuestionsByTopic={onFilterQuestionsByTopic}
            onFilterFlashcardsByTopic={onFilterFlashcardsByTopic}
          />

          {/* Charts Row: Primary Median Comparison + Temporal Evolution */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Main Comparison Chart (7 cols) */}
        <section className="xl:col-span-7 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Aluno vs. Mediana da Comunidade e P75
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Comparativo percentual de acertos por recorte curricular
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
                {(
                  [
                    { id: 'geral', label: 'Geral' },
                    { id: 'areas', label: '5 Áreas' },
                    { id: 'temas', label: 'Temas' },
                  ] as const
                ).map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGranularity(g.id)}
                    className={cn(
                      'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                      granularity === g.id
                        ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    )}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => setChartVisual('bar')}
                  aria-label="Visualização em barras agrupadas"
                  className={cn(
                    'rounded-md p-1.5 transition-colors cursor-pointer',
                    chartVisual === 'bar'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                  )}
                >
                  <BarChart2 className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setChartVisual('radar')}
                  aria-label="Visualização em gráfico radar"
                  className={cn(
                    'rounded-md p-1.5 transition-colors cursor-pointer',
                    chartVisual === 'radar'
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                  )}
                >
                  <RadarIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Sub-filter when inspecting topics */}
          {granularity === 'temas' && (
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedAreaFilter('all')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors',
                  selectedAreaFilter === 'all'
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                )}
              >
                Principais temas
              </button>
              {GRANDES_AREAS.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => setSelectedAreaFilter(area.id)}
                  className={cn(
                    'rounded-md px-2.5 py-1 text-xs font-medium cursor-pointer transition-colors whitespace-nowrap',
                    selectedAreaFilter === area.id
                      ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                  )}
                >
                  {area.shortName}
                </button>
              ))}
            </div>
          )}

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartVisual === 'bar' ? (
                <BarChart
                  data={chartData}
                  margin={{ top: 10, right: 12, left: -12, bottom: 8 }}
                  barGap={4}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                    axisLine={{ stroke: gridColor }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    unit="%"
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(val) => [
                      typeof val === 'number' ? `${val.toFixed(1)}%` : `${val ?? ''}%`,
                    ]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                  <Bar
                    dataKey="Aluno"
                    name="Você (%)"
                    fill="#0284C7"
                    radius={[5, 5, 0, 0]}
                    maxBarSize={26}
                  />
                  <Bar
                    dataKey="Mediana"
                    name="Mediana (P50)"
                    fill={darkMode ? '#64748B' : '#94A3B8'}
                    radius={[5, 5, 0, 0]}
                    maxBarSize={26}
                  />
                  <Bar
                    dataKey="Top25"
                    name="Top Performers (P75)"
                    fill="#10B981"
                    radius={[5, 5, 0, 0]}
                    maxBarSize={26}
                  />
                </BarChart>
              ) : (
                <RadarChart cx="50%" cy="50%" outerRadius="74%" data={chartData}>
                  <PolarGrid stroke={gridColor} />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    tick={{ fill: axisTickColor, fontSize: 10 }}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(val) => [
                      typeof val === 'number' ? `${val.toFixed(1)}%` : `${val ?? ''}%`,
                    ]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Radar
                    name="Você (%)"
                    dataKey="Aluno"
                    stroke="#0284C7"
                    fill="#0284C7"
                    fillOpacity={0.28}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Mediana (P50)"
                    dataKey="Mediana"
                    stroke="#94A3B8"
                    fill="#94A3B8"
                    fillOpacity={0.14}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Top Performers (P75)"
                    dataKey="Top25"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.08}
                    strokeWidth={1.5}
                    strokeDasharray="4 3"
                  />
                </RadarChart>
              )}
            </ResponsiveContainer>
          </div>
        </section>

        {/* Temporal Evolution Line Chart (5 cols) */}
        <section className="xl:col-span-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Evolução Temporal
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Curva de aprendizado frente à linha de base da mediana
              </p>
            </div>

            <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
              {(
                [
                  { id: 'semanal', label: 'Semanal' },
                  { id: 'mensal', label: 'Mensal' },
                ] as const
              ).map((w) => (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setTimeWindow(w.id)}
                  className={cn(
                    'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                    timeWindow === w.id
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={evolutionData}
                margin={{ top: 10, right: 12, left: -12, bottom: 8 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
                <XAxis
                  dataKey="period"
                  tick={{ fill: axisTickColor, fontSize: 11 }}
                  axisLine={{ stroke: gridColor }}
                  tickLine={false}
                />
                <YAxis
                  domain={[40, 95]}
                  unit="%"
                  tick={{ fill: axisTickColor, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(val) => [
                    typeof val === 'number' ? `${val.toFixed(1)}%` : `${val ?? ''}%`,
                  ]}
                />
                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />
                <Line
                  type="monotone"
                  dataKey="alunoPct"
                  name="Sua Evolução"
                  stroke="#0284C7"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: '#0284C7' }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="medianaPct"
                  name="Mediana (P50)"
                  stroke={darkMode ? '#94A3B8' : '#64748B'}
                  strokeWidth={2}
                  strokeDasharray="5 4"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="p75Pct"
                  name="Top 25% (P75)"
                  stroke="#10B981"
                  strokeWidth={1.5}
                  strokeDasharray="3 3"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
        </>
      )}

      {/* Combined Pareto (80/20) Chart + Top 3 ROI Topics */}
      {activeSection === 'pareto' && (
        <ParetoChart
          initialBoard={targetBoard}
          topicRows={analytics.topicRows}
          areaRows={analytics.areaRows}
          darkMode={darkMode}
          onFilterQuestionsByTopic={onFilterQuestionsByTopic}
          onFilterFlashcardsByTopic={onFilterFlashcardsByTopic}
          bankVersion={bankVersion}
        />
      )}

      {/* 2D Knowledge Gap Heatmap (Incidence x Answered Volume) */}
      {activeSection === 'mapa_calor' && (
        <KnowledgeGapHeatmap
          initialBoard={targetBoard}
          topicRows={analytics.topicRows}
          onFilterQuestionsByTopic={onFilterQuestionsByTopic}
          onFilterFlashcardsByTopic={onFilterFlashcardsByTopic}
          bankVersion={bankVersion}
        />
      )}

      {/* Sortable Detailed Analytical Table */}
      {activeSection === 'visao_geral' && (
      <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
          <div>
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Tabela Analítica Detalhada
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ordene por Delta para priorizar seus pontos de atenção antes da prova
            </p>
          </div>

          <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 self-start">
            {(
              [
                { id: 'areas', label: 'Grandes Áreas' },
                { id: 'temas', label: 'Todos os Temas' },
                { id: 'atencao', label: 'Pontos de Atenção' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setTableScope(tab.id)}
                className={cn(
                  'rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  tableScope === tab.id
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
              <tr>
                <th className="px-5 py-3">
                  <button
                    type="button"
                    onClick={() => handleSort('label')}
                    className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>Grande Área / Tema</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleSort('answered')}
                    className="inline-flex items-center justify-end gap-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>Questões Feitas</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleSort('studentPct')}
                    className="inline-flex items-center justify-end gap-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>Acertos do Aluno</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleSort('communityMedianPct')}
                    className="inline-flex items-center justify-end gap-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>Mediana (P50)</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => handleSort('delta')}
                    className="inline-flex items-center justify-end gap-1 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <span>Diferença (Delta)</span>
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-5 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {sortedTableRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400"
                  >
                    Nenhum ponto de atenção encontrado. Excelente consistência acima da mediana!
                  </td>
                </tr>
              ) : (
                sortedTableRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <td className="px-5 py-3">
                      <p className="font-medium text-slate-900 dark:text-slate-100">
                        {row.label}
                      </p>
                      {row.parentArea !== row.label && (
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {row.parentArea}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300">
                      {row.answered}
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-semibold tabular-nums text-slate-900 dark:text-white">
                      {row.studentPct.toFixed(1)}%
                    </td>
                    <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-600 dark:text-slate-400">
                      {row.communityMedianPct.toFixed(1)}%
                    </td>
                    <td
                      className={cn(
                        'px-4 py-3 text-right font-mono font-semibold tabular-nums',
                        row.delta >= 3 && 'text-emerald-700 dark:text-emerald-400',
                        row.delta <= -3 && 'text-red-700 dark:text-red-400',
                        row.delta > -3 &&
                          row.delta < 3 &&
                          'text-amber-700 dark:text-amber-400'
                      )}
                    >
                      {formatDelta(row.delta)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span
                        className={cn(
                          'inline-flex items-center justify-end gap-1.5 text-xs font-semibold whitespace-nowrap',
                          row.status === 'Acima da Mediana' &&
                            'text-emerald-700 dark:text-emerald-400',
                          row.status === 'Na Mediana' &&
                            'text-amber-700 dark:text-amber-400',
                          row.status === 'Ponto de Atenção' &&
                            'text-red-700 dark:text-red-400'
                        )}
                      >
                        {row.status === 'Acima da Mediana' && (
                          <TrendingUp className="h-3.5 w-3.5" />
                        )}
                        {row.status === 'Na Mediana' && <Minus className="h-3.5 w-3.5" />}
                        {row.status === 'Ponto de Atenção' && (
                          <TrendingDown className="h-3.5 w-3.5" />
                        )}
                        <span>{row.status}</span>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      )}
      </div>

      {/* Calibration & Psychometric Model Modal (On-Demand Progressive Disclosure) */}
      {calibrationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 sm:p-6 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Calibrar parâmetros e detalhes do modelo"
          onClick={(e) => {
            if (e.target === e.currentTarget) setCalibrationOpen(false);
          }}
        >
          <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#F5F5F7] shadow-2xl dark:border-white/10 dark:bg-[#13161B]">
            {/* Modal Header + Segmented Control */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-white px-5 py-4 dark:border-white/[0.08] dark:bg-[#1B1F27]">
              <div>
                <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                  Calibrar parâmetros & detalhes do modelo
                </h2>
                <p className="text-xs text-[#86868B] dark:text-slate-400">
                  Alterações de presets, corte histórico ou Laplace atualizam a Home em tempo real
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-slate-800">
                  {(
                    [
                      { id: 'estimador', label: 'Parâmetros & Presets' },
                      { id: 'bussola', label: 'Bússola & Simulados' },
                      { id: 'psicometrico', label: 'Modelo Psicométrico' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setCalibrationTab(tab.id)}
                      className={cn(
                        'rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                        calibrationTab === tab.id
                          ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                          : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setCalibrationOpen(false)}
                  aria-label="Fechar modal de calibração"
                  className="rounded-lg p-2 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {calibrationTab === 'estimador' && (
                <StratifiedApprovalCard
                  areaRows={analytics.areaRows}
                  questions={questions}
                  answers={answers}
                  cutoffTarget={cutoffTarget}
                  darkMode={darkMode}
                  onPracticeArea={(areaId) => {
                    setCalibrationOpen(false);
                    onPracticeArea(areaId);
                  }}
                />
              )}

              {calibrationTab === 'bussola' && (
                <CutoffProjectionCard
                  simulados={simuladoHistory}
                  target={cutoffTarget}
                  darkMode={darkMode}
                  onAddSimulado={onAddSimulado}
                  onDeleteSimulado={onDeleteSimulado}
                  onUpdateTarget={onUpdateCutoffTarget}
                  onRestoreExample={onRestoreExampleSimulados}
                  onOpenErrorNotebook={() => {
                    setCalibrationOpen(false);
                    onGoToErrorNotebook();
                  }}
                  onOpenFlashcards={() => {
                    setCalibrationOpen(false);
                    onGoToFlashcards();
                  }}
                  onOpenQuestionBank={() => {
                    setCalibrationOpen(false);
                    onGoToQuestionBank();
                  }}
                />
              )}

              {calibrationTab === 'psicometrico' && (
                <ApprovalProbabilityCard
                  studentCorrect={analytics.totalCorrect}
                  studentAnswered={analytics.totalAnswered}
                  simuladoHistory={simuladoHistory}
                  cutoffTarget={cutoffTarget}
                  darkMode={darkMode}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
