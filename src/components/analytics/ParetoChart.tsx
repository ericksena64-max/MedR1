import React, { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Cell,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  Layers,
  Target,
} from 'lucide-react';
import type { ExamBoard, GrandeAreaId } from '../../types/medical';
import {
  BOARD_INCIDENCE_MATRIX,
  EXAM_BOARD_LABELS,
  getEffectiveBoardTopics,
  normalizeMedicalText,
} from '../../lib/examWeights';
import {
  PARETO_HIGH_CUTOFF_PCT,
  PARETO_MIN_QUESTIONS,
  buildBoardParetoProfile,
  calculateExamPareto,
} from '../../lib/paretoCalculator';
import type { PerformanceRow } from './PerformanceDashboard';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ParetoChartProps {
  initialBoard: ExamBoard;
  topicRows: PerformanceRow[];
  areaRows: PerformanceRow[];
  darkMode: boolean;
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
  bankVersion?: number;
}

interface ParetoChartPoint {
  id: string;
  topic: string;
  shortName: string;
  incidencePct: number;
  cumulativePct: number;
  questionCount: number;
  isEstimated: boolean;
  isParetoCore: boolean;
  studentAccuracyPct: number | null;
  communityMedianPct: number | null;
  isBottleneck: boolean;
  roiScore: number;
  matchedTema?: string;
  grandeAreaId?: GrandeAreaId;
}

const BOARD_OPTIONS: Array<{ value: ExamBoard; label: string }> = [
  { value: 'UEPA', label: 'UEPA' },
  { value: 'ENARE', label: 'ENARE' },
  { value: 'GERAL', label: 'Geral' },
];

const BOTTLENECK_THRESHOLD_PCT = 70;

function abbreviateTopicLabel(label: string): string {
  const shortMap: Record<string, string> = {
    'Trauma e Abdome Agudo': 'Trauma/Abdome',
    'Pré-Natal e Alto Risco': 'Pré-Natal',
    'Pré-Natal e Síndromes Hipertensivas': 'Pré-Natal/SHG',
    'Síndromes Hipertensivas': 'Síndr. Hipert.',
    'Atenção Primária e SUS': 'APS / SUS',
    'Epidemiologia e Bioestatística': 'Epidemiologia',
    'Epidemiologia e SUS': 'Epidem./SUS',
    'Assistência ao Parto': 'Assist. Parto',
    'Anticoncepção e SUA': 'Anticonc./SUA',
    'Puericultura e Vacinas': 'Pueric./Vac.',
    'Neonatologia e Imunizações': 'Neo/Imuniz.',
    'Doenças Endêmicas': 'Endêmicas',
    'Gastroenterologia': 'Gastroentero',
    'Subespecialidades Cirúrgicas': 'Subesp. Cir.',
    'Oftalmologia / Otorrino': 'Oftalmo/ORL',
    'Oftalmologia e Otorrino': 'Oftalmo/ORL',
    'Reumatologia Rara': 'Reumato Rara',
    'Oncologia Pediátrica': 'Oncopediatria',
    'Doenças Metabólicas Raras': 'Metab. Raras',
    'Genética e Doenças Raras': 'Genét./Raras',
    'Neurologia e Psiquiatria': 'Neuro/Psiq',
    'Hematologia, Ortopedia e Urologia': 'Hemato/Orto',
    'Obstetrícia / Pré-Natal': 'Pré-Natal',
    'Obstetrícia / Urgências': 'Urg. Obstét.',
    'Puericultura / Imunizações': 'Pueric./Imun.',
    'Políticas de Saúde / SUS': 'Políticas SUS',
    'Vigilância em Saúde': 'Vigilância',
  };
  if (shortMap[label]) return shortMap[label];
  return label.length > 13 ? `${label.slice(0, 12)}…` : label;
}

/**
 * Matches a Pareto board topic (and its keywords) against the student's
 * live topicRows to compute an accurate student accuracy & filter target.
 */
function resolveStudentTopicMetrics(
  topicName: string,
  keywords: string[],
  topicRows: PerformanceRow[]
): {
  studentAccuracyPct: number | null;
  communityMedianPct: number | null;
  matchedTema?: string;
  grandeAreaId?: GrandeAreaId;
} {
  const normTopic = normalizeMedicalText(topicName);
  const normKeywords = keywords.map(normalizeMedicalText).filter(Boolean);

  // Exact normalized match first
  const exact = topicRows.find((row) => normalizeMedicalText(row.label) === normTopic);
  if (exact) {
    return {
      studentAccuracyPct: exact.studentPct,
      communityMedianPct: exact.communityMedianPct,
      matchedTema: exact.label,
      grandeAreaId: exact.grandeAreaId,
    };
  }

  // Partial / keyword matches (aggregates when a combined topic spans 2 rows, e.g. Trauma + Abdome Agudo)
  const matchedRows = topicRows.filter((row) => {
    const normRow = normalizeMedicalText(row.label);
    if (
      (normRow.length >= 4 && normTopic.includes(normRow)) ||
      (normTopic.length >= 4 && normRow.includes(normTopic))
    ) {
      return true;
    }
    return normKeywords.some(
      (kw) =>
        kw === normRow ||
        (kw.length >= 4 && normRow.includes(kw)) ||
        (normRow.length >= 4 && kw.includes(normRow))
    );
  });

  if (matchedRows.length === 0) {
    return { studentAccuracyPct: null, communityMedianPct: null };
  }

  const totalAnswered = matchedRows.reduce((sum, r) => sum + r.answered, 0);
  const totalCorrect = matchedRows.reduce((sum, r) => sum + r.correct, 0);
  const weightedMedian =
    totalAnswered > 0
      ? matchedRows.reduce((sum, r) => sum + r.communityMedianPct * r.answered, 0) /
        totalAnswered
      : matchedRows[0].communityMedianPct;

  // Prefer the lowest-accuracy matched row as the primary remediation filter target
  const priorityRow = [...matchedRows].sort((a, b) => a.studentPct - b.studentPct)[0];

  return {
    studentAccuracyPct:
      totalAnswered > 0
        ? Number(((totalCorrect / totalAnswered) * 100).toFixed(1))
        : priorityRow.studentPct,
    communityMedianPct: Number(weightedMedian.toFixed(1)),
    matchedTema: priorityRow.label,
    grandeAreaId: priorityRow.grandeAreaId,
  };
}

interface CustomTooltipPayloadItem {
  payload?: ParetoChartPoint;
}

function ParetoTooltip({
  active,
  payload,
  board,
}: {
  active?: boolean;
  payload?: CustomTooltipPayloadItem[];
  board: ExamBoard;
}) {
  if (!active || !payload || payload.length === 0 || !payload[0].payload) {
    return null;
  }

  const item = payload[0].payload;
  const boardName = EXAM_BOARD_LABELS[board];

  return (
    <div className="w-64 rounded-xl border border-slate-200 bg-white p-3.5 text-xs shadow-lg dark:border-slate-700 dark:bg-slate-900 space-y-2">
      <div className="space-y-0.5 border-b border-slate-100 pb-2 dark:border-slate-800">
        <p className="font-display font-bold text-slate-900 dark:text-white leading-snug">
          {item.topic}
        </p>
        <p
          className={cn(
            'text-[11px] font-semibold',
            item.isBottleneck
              ? 'text-red-600 dark:text-red-400'
              : item.isParetoCore
              ? 'text-sky-700 dark:text-sky-400'
              : 'text-slate-500 dark:text-slate-400'
          )}
        >
          {item.isBottleneck
            ? 'Gargalo de Alta Incidência (≤80% · acerto <70%)'
            : item.isParetoCore
            ? 'Núcleo Pareto (primeiros 80% da prova)'
            : item.cumulativePct > 95
            ? 'Cauda Longa (>95% acumulado)'
            : 'Faixa Intermediária (80%–95%)'}
        </p>
      </div>

      <dl className="space-y-1.5 tabular-nums">
        <div className="flex items-center justify-between gap-2">
          <dt className="text-slate-500 dark:text-slate-400">
            Incidência ({boardName})
          </dt>
          <dd className="font-mono font-semibold text-slate-900 dark:text-slate-100">
            {item.incidencePct.toFixed(1).replace('.', ',')}%
            {item.questionCount > 0 ? ` (${item.questionCount}q)` : ''}
          </dd>
        </div>

        <div className="flex items-center justify-between gap-2">
          <dt className="text-slate-500 dark:text-slate-400">Acumulado Pareto</dt>
          <dd className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">
            {item.cumulativePct.toFixed(1).replace('.', ',')}%
          </dd>
        </div>

        <div className="flex items-center justify-between gap-2">
          <dt className="text-slate-500 dark:text-slate-400">
            Acerto Individual
          </dt>
          <dd
            className={cn(
              'font-mono font-bold',
              item.studentAccuracyPct === null
                ? 'text-slate-400'
                : item.studentAccuracyPct < BOTTLENECK_THRESHOLD_PCT
                ? 'text-red-600 dark:text-red-400'
                : 'text-emerald-600 dark:text-emerald-400'
            )}
          >
            {item.studentAccuracyPct !== null
              ? `${item.studentAccuracyPct.toFixed(1).replace('.', ',')}%`
              : 'Sem dados'}
          </dd>
        </div>
      </dl>

      {item.isEstimated && (
        <p className="border-t border-slate-100 pt-1.5 text-[10px] text-slate-400 dark:border-slate-800 dark:text-slate-500">
          Curva estimada pela matriz padrão ({boardName} &lt; {PARETO_MIN_QUESTIONS} questões no banco).
        </p>
      )}
    </div>
  );
}

export function ParetoChart({
  initialBoard,
  topicRows,
  darkMode,
  onFilterQuestionsByTopic,
  onFilterFlashcardsByTopic,
  bankVersion = 0,
}: ParetoChartProps) {
  const [selectedBoard, setSelectedBoard] = useState<ExamBoard>(initialBoard);

  const { chartSeries, topRoiTopics, bankAnalysis, bottleneckCount, maxIncidenceY } =
    useMemo(() => {
      const analysis = calculateExamPareto(selectedBoard);
      const effectiveTopics = getEffectiveBoardTopics(selectedBoard);
      const defaultRules =
        BOARD_INCIDENCE_MATRIX[selectedBoard] ?? BOARD_INCIDENCE_MATRIX.GERAL;

      const profile = buildBoardParetoProfile(
        selectedBoard,
        effectiveTopics,
        defaultRules
      );

      const topicById = new Map(effectiveTopics.map((t) => [t.id, t]));

      // Build ordered chart series (cap at top 12 for crystal-clear x-axis readability,
      // while preserving true cumulative percentages up to 100%)
      const fullSeries: ParetoChartPoint[] = profile.orderedTopicIds
        .map((id): ParetoChartPoint | null => {
          const topicMeta = topicById.get(id);
          const stat = profile.byTopicId[id];
          if (!topicMeta || !stat) return null;

          const studentMetrics = resolveStudentTopicMetrics(
            topicMeta.topic,
            topicMeta.keywords,
            topicRows
          );

          const isBottleneck =
            stat.isParetoCore &&
            studentMetrics.studentAccuracyPct !== null &&
            studentMetrics.studentAccuracyPct < BOTTLENECK_THRESHOLD_PCT;

          // Expected point-gain ROI: high board incidence × room to improve
          const effectiveAcc = studentMetrics.studentAccuracyPct ?? 72;
          const roiScore = Number(
            (
              stat.individualPct *
              Math.max(5, 100 - effectiveAcc) *
              (stat.isParetoCore ? 1.25 : 0.7)
            ).toFixed(1)
          );

          return {
            id: topicMeta.id,
            topic: topicMeta.topic,
            shortName: abbreviateTopicLabel(topicMeta.topic),
            incidencePct: stat.individualPct,
            cumulativePct: stat.cumulativePct,
            questionCount: stat.count,
            isEstimated: stat.isEstimated,
            isParetoCore: stat.isParetoCore,
            studentAccuracyPct: studentMetrics.studentAccuracyPct,
            communityMedianPct: studentMetrics.communityMedianPct,
            isBottleneck,
            roiScore,
            matchedTema: studentMetrics.matchedTema,
            grandeAreaId: studentMetrics.grandeAreaId,
          };
        })
        .filter((item): item is ParetoChartPoint => item !== null && item.incidencePct > 0);

      // Show up to 12 topics on the chart so labels never collide
      const displaySeries = fullSeries.slice(0, 12);

      // Top 3 highest ROI topics: prioritize Pareto Core bottlenecks (< 70%) with student data
      const roiCandidates = fullSeries.filter(
        (item) => item.studentAccuracyPct !== null
      );
      const topRoi = [...roiCandidates]
        .sort((a, b) => {
          if (a.isBottleneck !== b.isBottleneck) return a.isBottleneck ? -1 : 1;
          return b.roiScore - a.roiScore;
        })
        .slice(0, 3);

      const maxInd = displaySeries.reduce(
        (max, d) => Math.max(max, d.incidencePct),
        10
      );
      const maxIncidenceY = Math.min(100, Math.ceil((maxInd + 4) / 5) * 5);

      return {
        chartSeries: displaySeries,
        topRoiTopics: topRoi,
        bankAnalysis: analysis,
        bottleneckCount: fullSeries.filter((d) => d.isBottleneck).length,
        maxIncidenceY,
      };
    }, [selectedBoard, topicRows, bankVersion]);

  const axisTickColor = darkMode ? '#94A3B8' : '#64748B';
  const gridColor = darkMode ? '#1E293B' : '#E2E8F0';

  const getBarFill = (point: ParetoChartPoint) => {
    if (point.isBottleneck) {
      return darkMode ? '#F87171' : '#DC2626';
    }
    if (point.isParetoCore) {
      return darkMode ? '#38BDF8' : '#0284C7';
    }
    return darkMode ? '#475569' : '#CBD5E1';
  };

  return (
    <section
      aria-label="Gráfico Combinado de Pareto 80/20 por Banca"
      className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-5"
    >
      {/* Header + Quick Board Selector */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <BarChart3 className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Gráfico Combinado de Pareto (80/20) · Retorno por Tema
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Barras mostram a incidência (%) na banca{' '}
            <strong className="font-semibold text-slate-700 dark:text-slate-200">
              {EXAM_BOARD_LABELS[selectedBoard]}
            </strong>
            ; a curva verde acompanha o acumulado até o{' '}
            <strong className="font-semibold text-amber-700 dark:text-amber-400">
              Corte Pareto 80%
            </strong>
            .{' '}
            {bankAnalysis.hasEnoughData ? (
              <span className="font-mono tabular-nums text-emerald-700 dark:text-emerald-400">
                ({bankAnalysis.totalQuestions} questões no banco)
              </span>
            ) : (
              <span className="font-mono tabular-nums text-slate-500 dark:text-slate-400">
                (matriz padrão · {bankAnalysis.totalQuestions}/{PARETO_MIN_QUESTIONS}q no banco)
              </span>
            )}
          </p>
        </div>

        {/* Quick Board Selector (UEPA, ENARE, Geral) */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">Banca:</span>
          <div
            role="group"
            aria-label="Selecionar prova ou banca no gráfico de Pareto"
            className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800"
          >
            {BOARD_OPTIONS.map((opt) => {
              const active = selectedBoard === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSelectedBoard(opt.value)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-md px-3 py-1 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    active
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Semantic Color Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-y border-slate-100 py-2.5 text-xs dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-red-600 dark:bg-red-400" />
            <span>Gargalo de Alta Incidência (≤80% · acerto &lt;70%)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-sky-600 dark:bg-sky-400" />
            <span>Núcleo Pareto (≤80% · acerto ≥70%)</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-slate-300 dark:bg-slate-600" />
            <span>Fora do Corte 80%</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-emerald-500" />
            <span>Acumulado (%)</span>
          </span>
        </div>

        {bottleneckCount > 0 && (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold tabular-nums text-red-600 dark:text-red-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>
              {bottleneckCount} gargalo{bottleneckCount > 1 ? 's' : ''} no Núcleo 80%
            </span>
          </span>
        )}
      </div>

      {/* Recharts Combined Pareto Chart */}
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartSeries}
            margin={{ top: 18, right: 16, left: -10, bottom: 26 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={gridColor}
              vertical={false}
            />
            <XAxis
              dataKey="shortName"
              interval={0}
              angle={-22}
              textAnchor="end"
              height={54}
              tick={{ fill: axisTickColor, fontSize: 11 }}
              axisLine={{ stroke: gridColor }}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              domain={[0, maxIncidenceY]}
              unit="%"
              tick={{ fill: axisTickColor, fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              unit="%"
              tick={{ fill: '#10B981', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              content={<ParetoTooltip board={selectedBoard} />}
              cursor={{
                fill: darkMode ? 'rgba(148,163,184,0.08)' : 'rgba(15,23,42,0.04)',
              }}
            />

            {/* 80% Pareto Reference Cutoff Line */}
            <ReferenceLine
              yAxisId="right"
              y={PARETO_HIGH_CUTOFF_PCT}
              stroke="#F59E0B"
              strokeDasharray="6 4"
              strokeWidth={1.75}
              label={{
                value: 'Corte Pareto 80%',
                position: 'insideTopRight',
                fill: darkMode ? '#FBBF24' : '#B45309',
                fontSize: 11,
                fontWeight: 700,
              }}
            />

            <Bar
              yAxisId="left"
              dataKey="incidencePct"
              name="Incidência (%)"
              radius={[5, 5, 0, 0]}
              maxBarSize={36}
            >
              {chartSeries.map((entry) => (
                <Cell key={entry.id} fill={getBarFill(entry)} />
              ))}
            </Bar>

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cumulativePct"
              name="Acumulado Pareto (%)"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={{ r: 3.5, fill: '#10B981', strokeWidth: 0 }}
              activeDot={{ r: 5.5, fill: '#10B981', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Top 3 Temas de Maior ROI Summary Strip */}
      {topRoiTopics.length > 0 && (
        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-red-600 dark:text-red-400" />
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                Top 3 Temas de Maior ROI ({EXAM_BOARD_LABELS[selectedBoard]})
              </h3>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Alta incidência na banca + menor taxa de acerto individual
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {topRoiTopics.map((item, idx) => (
              <article
                key={item.id}
                className={cn(
                  'rounded-xl border p-4 flex flex-col justify-between gap-3 transition-colors',
                  item.isBottleneck
                    ? 'border-red-200/90 bg-red-50/40 dark:border-red-900/60 dark:bg-red-950/20'
                    : 'border-slate-200 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950/40'
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-mono text-[11px] font-bold text-slate-400 dark:text-slate-500">
                        #{idx + 1} PRIORIDADE
                      </span>
                      <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-snug">
                        {item.topic}
                      </h4>
                    </div>
                    {item.isBottleneck && (
                      <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-wide text-red-600 dark:text-red-400">
                        Gargalo
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/70 dark:border-slate-800 text-[11px] tabular-nums">
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Incidência</p>
                      <p className="font-mono font-bold text-slate-900 dark:text-slate-100">
                        {item.incidencePct.toFixed(1).replace('.', ',')}%
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Seu Acerto</p>
                      <p
                        className={cn(
                          'font-mono font-bold',
                          item.studentAccuracyPct !== null &&
                            item.studentAccuracyPct < BOTTLENECK_THRESHOLD_PCT
                            ? 'text-red-600 dark:text-red-400'
                            : 'text-emerald-600 dark:text-emerald-400'
                        )}
                      >
                        {item.studentAccuracyPct !== null
                          ? `${item.studentAccuracyPct.toFixed(1).replace('.', ',')}%`
                          : '—'}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Acumulado</p>
                      <p className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                        {item.cumulativePct.toFixed(0)}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      onFilterQuestionsByTopic({
                        topicLabel: item.topic,
                        matchedTema: item.matchedTema,
                        grandeAreaId: item.grandeAreaId,
                      })
                    }
                    className="flex-1 h-8 text-xs"
                  >
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Questões</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      onFilterFlashcardsByTopic({
                        topicLabel: item.topic,
                        matchedTema: item.matchedTema,
                        grandeAreaId: item.grandeAreaId,
                      })
                    }
                    className="flex-1 h-8 text-xs"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    <span>Flashcards</span>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
