import React, { useEffect, useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import {
  Activity,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Plus,
  Trash2,
} from 'lucide-react';
import type {
  CutoffTargetConfig,
  GrandeAreaId,
  MedicalQuestion,
  UserAnswerRecord,
} from '../../types/medical';
import type { PerformanceRow } from './PerformanceDashboard';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  calcularEstimativaResidencia,
  identificarGargaloPrioritario,
  ESTIMATOR_STORAGE_KEY,
  ESTIMATOR_UPDATED_EVENT,
  type AreaMedica,
  type DesempenhoArea,
} from '../../lib/residenciaEstimator';
import { cn } from '../../lib/utils';

interface StratifiedApprovalCardProps {
  areaRows: PerformanceRow[];
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  cutoffTarget: CutoffTargetConfig;
  darkMode: boolean;
  onPracticeArea: (areaId: GrandeAreaId) => void;
}

interface WeeklyApprovalPoint {
  semana: string;
  label: string;
  total_questoes_janela: number;
  status: 'valido' | 'dados_insuficientes';
  nota_estimada: number | null;
  ic_dominio_inf: number | null;
  ic_dominio_sup: number | null;
  ip_prova_inf: number | null;
  ip_prova_sup: number | null;
  probabilidade_aprovacao: number | null;
}

type WeeklyChartMetric = 'probabilidade' | 'nota_faixa';

function formatWeekShortBR(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}`;
}

type WindowMode = 'acumulado' | 'ultimos_90d' | 'ultimas_200';
type CutoffCaptureMode = 'direto' | 'edicoes';

interface AnnualCutoffEntry {
  id: string;
  year: number;
  score: number;
}

interface PersistedEstimatorSettings {
  captureMode: CutoffCaptureMode;
  notaCorteMedia: number;
  notaCorteDesvioPadrao: number;
  totalQuestoesProva: number;
  minimoQuestoesPorArea: number;
  usarLaplace: boolean;
  annualCutoffs: AnnualCutoffEntry[];
}

const STORAGE_KEY_ESTIMATOR = 'medr1_residencia_estimator_v1';
const EXAM_SIZE_PRESETS = [50, 80, 100, 120];
const AREA_META_MAP = new Map(GRANDES_AREAS.map((a) => [a.id, a]));

const BOARD_CUTOFF_PRESETS = [
  { label: 'UEPA', mean: 74.0, sd: 2.0, questions: 100 },
  { label: 'ENARE', mean: 78.0, sd: 2.2, questions: 100 },
  { label: 'SUS-SP', mean: 76.5, sd: 2.0, questions: 100 },
  { label: 'USP-SP', mean: 82.0, sd: 2.5, questions: 120 },
];

const DEFAULT_ANNUAL_CUTOFFS: AnnualCutoffEntry[] = [
  { id: 'c-2022', year: 2022, score: 74.0 },
  { id: 'c-2023', year: 2023, score: 75.5 },
  { id: 'c-2024', year: 2024, score: 77.0 },
  { id: 'c-2025', year: 2025, score: 78.5 },
];

function computeAnnualStats(entries: AnnualCutoffEntry[]): {
  mean: number;
  sd: number;
} {
  if (entries.length === 0) return { mean: 76.0, sd: 0 };
  const mean = entries.reduce((acc, item) => acc + item.score, 0) / entries.length;
  if (entries.length === 1) {
    return { mean: Number(mean.toFixed(2)), sd: 0 };
  }
  const variance =
    entries.reduce((acc, item) => acc + (item.score - mean) ** 2, 0) /
    (entries.length - 1);
  return {
    mean: Number(mean.toFixed(2)),
    sd: Number(Math.sqrt(variance).toFixed(2)),
  };
}

function loadSavedSettings(defaultCutoff: number): PersistedEstimatorSettings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_ESTIMATOR);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<PersistedEstimatorSettings>;
      return {
        captureMode: parsed.captureMode === 'edicoes' ? 'edicoes' : 'direto',
        notaCorteMedia:
          typeof parsed.notaCorteMedia === 'number' && Number.isFinite(parsed.notaCorteMedia)
            ? parsed.notaCorteMedia
            : defaultCutoff,
        notaCorteDesvioPadrao:
          typeof parsed.notaCorteDesvioPadrao === 'number' &&
          Number.isFinite(parsed.notaCorteDesvioPadrao)
            ? parsed.notaCorteDesvioPadrao
            : 2.0,
        totalQuestoesProva:
          typeof parsed.totalQuestoesProva === 'number' &&
          Number.isFinite(parsed.totalQuestoesProva)
            ? parsed.totalQuestoesProva
            : 100,
        minimoQuestoesPorArea:
          typeof parsed.minimoQuestoesPorArea === 'number' &&
          Number.isFinite(parsed.minimoQuestoesPorArea)
            ? parsed.minimoQuestoesPorArea
            : 10,
        usarLaplace: Boolean(parsed.usarLaplace),
        annualCutoffs:
          Array.isArray(parsed.annualCutoffs) && parsed.annualCutoffs.length > 0
            ? parsed.annualCutoffs
            : DEFAULT_ANNUAL_CUTOFFS,
      };
    }
  } catch {
    // ignore storage errors
  }
  return {
    captureMode: 'direto',
    notaCorteMedia: defaultCutoff,
    notaCorteDesvioPadrao: 2.0,
    totalQuestoesProva: 100,
    minimoQuestoesPorArea: 10,
    usarLaplace: false,
    annualCutoffs: DEFAULT_ANNUAL_CUTOFFS,
  };
}

export function StratifiedApprovalCard({
  areaRows,
  questions,
  answers,
  cutoffTarget,
  darkMode,
  onPracticeArea,
}: StratifiedApprovalCardProps) {
  const defaultCutoff =
    cutoffTarget.scaleType === 'bruta_100' ? cutoffTarget.historicalCutoff : 78;

  const [windowMode, setWindowMode] = useState<WindowMode>('acumulado');
  const [weeklyMetric, setWeeklyMetric] = useState<WeeklyChartMetric>('probabilidade');
  const [weeklySeries, setWeeklySeries] = useState<WeeklyApprovalPoint[]>([]);
  const [settings, setSettings] = useState<PersistedEstimatorSettings>(() =>
    loadSavedSettings(defaultCutoff)
  );
  const [newEditionYear, setNewEditionYear] = useState('2026');
  const [newEditionScore, setNewEditionScore] = useState('79.0');

  useEffect(() => {
    try {
      window.localStorage.setItem(
        ESTIMATOR_STORAGE_KEY,
        JSON.stringify(settings)
      );
      window.dispatchEvent(new Event(ESTIMATOR_UPDATED_EVENT));
    } catch {
      // ignore storage quota errors
    }
  }, [settings]);

  const annualStats = useMemo(
    () => computeAnnualStats(settings.annualCutoffs),
    [settings.annualCutoffs]
  );

  const effectiveCutoffMean =
    settings.captureMode === 'edicoes'
      ? annualStats.mean
      : settings.notaCorteMedia;
  const effectiveCutoffSd =
    settings.captureMode === 'edicoes'
      ? annualStats.sd
      : settings.notaCorteDesvioPadrao;

  // Build questionId -> grandeAreaId lookup for sliding-window event aggregation
  const questionAreaById = useMemo(() => {
    const map = new Map<string, GrandeAreaId>();
    for (const q of questions) {
      map.set(q.id, q.grandeAreaId);
    }
    return map;
  }, [questions]);

  // Aggregate (k_i, n_i) across all 5 Grandes Áreas in O(1)/O(N_recent)
  const desempenhoAreas: DesempenhoArea[] = useMemo(() => {
    if (windowMode === 'acumulado') {
      return GRANDES_AREAS.map((area) => {
        const row = areaRows.find((r) => r.grandeAreaId === area.id);
        return {
          area: area.id as AreaMedica,
          acertos: row?.correct ?? 0,
          total: row?.answered ?? 0,
          peso: 0.2,
        };
      });
    }

    const nowMs = Date.now();
    const ninetyDaysMs = 90 * 24 * 60 * 60 * 1000;
    const eventsByArea: Record<GrandeAreaId, UserAnswerRecord[]> = {
      clinica_medica: [],
      cirurgia_geral: [],
      ginecologia_obstetricia: [],
      pediatria: [],
      medicina_preventiva: [],
    };

    for (const ans of Object.values(answers)) {
      const areaId = questionAreaById.get(ans.questionId);
      if (!areaId) continue;
      if (windowMode === 'ultimos_90d') {
        const ts = Date.parse(ans.answeredAt);
        if (!Number.isNaN(ts) && nowMs - ts > ninetyDaysMs) continue;
      }
      eventsByArea[areaId].push(ans);
    }

    return GRANDES_AREAS.map((area) => {
      const list = eventsByArea[area.id];
      list.sort((a, b) => Date.parse(b.answeredAt) - Date.parse(a.answeredAt));
      const sliced = windowMode === 'ultimas_200' ? list.slice(0, 200) : list;
      const acertos = sliced.filter((a) => a.isCorrect).length;
      return {
        area: area.id as AreaMedica,
        acertos,
        total: sliced.length,
        peso: 0.2,
      };
    });
  }, [windowMode, areaRows, answers, questionAreaById]);

  const configProva = useMemo(
    () => ({
      totalQuestoesProva: settings.totalQuestoesProva,
      notaCorteMedia: effectiveCutoffMean,
      notaCorteDesvioPadrao: effectiveCutoffSd,
      minimoQuestoesPorArea: settings.minimoQuestoesPorArea,
      usarSuavizacaoLaplace: settings.usarLaplace,
    }),
    [
      settings.totalQuestoesProva,
      effectiveCutoffMean,
      effectiveCutoffSd,
      settings.minimoQuestoesPorArea,
      settings.usarLaplace,
    ]
  );

  const resultado = useMemo(
    () => calcularEstimativaResidencia(desempenhoAreas, configProva),
    [desempenhoAreas, configProva]
  );

  const gargalo = useMemo(
    () => identificarGargaloPrioritario(desempenhoAreas, configProva, resultado, 5),
    [desempenhoAreas, configProva, resultado]
  );

  const gargaloMeta = gargalo ? AREA_META_MAP.get(gargalo.area) : null;
  const totalSampledQuestions = desempenhoAreas.reduce(
    (acc, a) => acc + a.total,
    0
  );

  // Fetch 12-week rolling 90-day approval probability series from Express route (/api/analytics/weekly-approval-series)
  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const attemptsPayload = Object.values(answers)
      .map((ans) => {
        const area = questionAreaById.get(ans.questionId);
        if (!area) return null;
        return {
          area,
          isCorrect: ans.isCorrect,
          answeredAt: ans.answeredAt,
        };
      })
      .filter(
        (
          item
        ): item is { area: GrandeAreaId; isCorrect: boolean; answeredAt: string } =>
          item !== null
      );

    const areaBaseline = GRANDES_AREAS.map((area) => {
      const row = areaRows.find((r) => r.grandeAreaId === area.id);
      return {
        area: area.id,
        acertos: row?.correct ?? 0,
        total: row?.answered ?? 0,
      };
    });

    fetch('/api/analytics/weekly-approval-series', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        notaCorteMedia: effectiveCutoffMean,
        notaCorteDp: effectiveCutoffSd,
        totalQuestoesProva: settings.totalQuestoesProva,
        minQuestoesArea: settings.minimoQuestoesPorArea,
        usarLaplace: settings.usarLaplace,
        areaBaseline,
        attempts: attemptsPayload,
      }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active || !data || !Array.isArray(data.series)) return;
        const mapped: WeeklyApprovalPoint[] = data.series.map(
          (row: Omit<WeeklyApprovalPoint, 'label'>) => ({
            ...row,
            label: formatWeekShortBR(row.semana),
          })
        );
        setWeeklySeries(mapped);
      })
      .catch(() => {
        // Silent fallback if dev server is restarting
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [
    answers,
    areaRows,
    questionAreaById,
    effectiveCutoffMean,
    effectiveCutoffSd,
    settings.totalQuestoesProva,
    settings.minimoQuestoesPorArea,
    settings.usarLaplace,
  ]);

  const axisTickColor = darkMode ? '#94A3B8' : '#64748B';
  const gridColor = darkMode ? '#1E293B' : '#E2E8F0';
  const tooltipStyle = {
    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
    borderColor: darkMode ? '#334155' : '#E2E8F0',
    borderRadius: '10px',
    color: darkMode ? '#F8FAFC' : '#0F172A',
    fontSize: '12px',
  };

  const handleApplyBoardPreset = (preset: (typeof BOARD_CUTOFF_PRESETS)[number]) => {
    setSettings((prev) => ({
      ...prev,
      captureMode: 'direto',
      notaCorteMedia: preset.mean,
      notaCorteDesvioPadrao: preset.sd,
      totalQuestoesProva: preset.questions,
    }));
  };

  const handleAddAnnualCutoff = (e: React.FormEvent) => {
    e.preventDefault();
    const yr = Number.parseInt(newEditionYear, 10);
    const sc = Number.parseFloat(newEditionScore.replace(',', '.'));
    if (
      Number.isNaN(yr) ||
      yr < 1995 ||
      yr > 2100 ||
      Number.isNaN(sc) ||
      sc <= 0 ||
      sc > 100
    ) {
      return;
    }
    setSettings((prev) => ({
      ...prev,
      annualCutoffs: [
        ...prev.annualCutoffs,
        { id: `c-${Date.now()}`, year: yr, score: Number(sc.toFixed(1)) },
      ].sort((a, b) => a.year - b.year),
    }));
    setNewEditionYear(String(yr + 1));
    setNewEditionScore(sc.toFixed(1));
  };

  const handleDeleteAnnualCutoff = (id: string) => {
    setSettings((prev) => ({
      ...prev,
      annualCutoffs: prev.annualCutoffs.filter((item) => item.id !== id),
    }));
  };

  const probStatus =
    resultado.probabilidadeAprovacao >= 70
      ? {
          label: 'Chances favoráveis',
          textClass: 'text-emerald-700 dark:text-emerald-400',
          barClass: 'bg-emerald-500 dark:bg-emerald-400',
        }
      : resultado.probabilidadeAprovacao >= 40
      ? {
          label: 'Zona de disputa',
          textClass: 'text-amber-700 dark:text-amber-400',
          barClass: 'bg-amber-500 dark:bg-amber-400',
        }
      : {
          label: 'Abaixo do corte',
          textClass: 'text-red-700 dark:text-red-400',
          barClass: 'bg-red-500 dark:bg-red-400',
        };

  const cutoffBandLeft = Math.max(0, effectiveCutoffMean - effectiveCutoffSd);
  const cutoffBandWidth = Math.min(
    100 - cutoffBandLeft,
    Math.max(0.5, effectiveCutoffSd * 2)
  );

  return (
    <section
      aria-label="Estimador estratificado de aprovação com notas de corte históricas e volume alvo"
      className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-[#1A56DB] dark:text-sky-400 shrink-0" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Estimador de Aprovação e IC 95% (5 Grandes Áreas)
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span>Estimador Estratificado (Cochran)</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span className="font-mono tabular-nums">
              {totalSampledQuestions} questões avaliadas
            </span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span className="font-mono tabular-nums">
              Alvo {settings.totalQuestoesProva}q · Corte {effectiveCutoffMean.toFixed(1)}% ± {effectiveCutoffSd.toFixed(1)}
            </span>
          </p>
        </div>

        {/* Moving Window Switcher */}
        <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 self-start shrink-0">
          {(
            [
              { id: 'acumulado', label: 'Acumulado' },
              { id: 'ultimos_90d', label: '90 dias' },
              { id: 'ultimas_200', label: 'Últimas 200q' },
            ] as const
          ).map((w) => (
            <button
              key={w.id}
              type="button"
              onClick={() => setWindowMode(w.id)}
              className={cn(
                'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                windowMode === w.id
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* Always-Visible Parameter Capture Bar: Historical Cutoffs (Mean & SD or Annual Series) + Target Question Volume */}
      <div className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-4 sm:px-6 dark:border-slate-800 dark:bg-slate-950/60 space-y-3.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-900 dark:text-white">
              Notas de Corte Históricas e Volume da Prova Alvo
            </span>
            <div className="inline-flex rounded-lg bg-slate-200/75 p-0.5 dark:bg-slate-800">
              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({ ...prev, captureMode: 'direto' }))
                }
                className={cn(
                  'rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap',
                  settings.captureMode === 'direto'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Média e Desvio (μ / σ)
              </button>
              <button
                type="button"
                onClick={() =>
                  setSettings((prev) => ({ ...prev, captureMode: 'edicoes' }))
                }
                className={cn(
                  'rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap',
                  settings.captureMode === 'edicoes'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Série de Edições ({settings.annualCutoffs.length})
              </button>
            </div>
          </div>

          {/* Quick Brazilian Residency Board Presets */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Referências rápidas:
            </span>
            {BOARD_CUTOFF_PRESETS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => handleApplyBoardPreset(preset)}
                className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:border-[#1A56DB]/40 hover:text-[#1A56DB] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          {settings.captureMode === 'direto' ? (
            <>
              <label className="md:col-span-3 block space-y-1">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Média do corte histórico (%)
                </span>
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  max="100"
                  value={settings.notaCorteMedia}
                  onChange={(e) => {
                    const val = Number.parseFloat(e.target.value);
                    if (Number.isFinite(val)) {
                      setSettings((prev) => ({
                        ...prev,
                        notaCorteMedia: Math.max(1, Math.min(100, val)),
                      }));
                    }
                  }}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>

              <label className="md:col-span-3 block space-y-1">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Desvio-padrão do corte (σ_C)
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="20"
                  value={settings.notaCorteDesvioPadrao}
                  onChange={(e) => {
                    const val = Number.parseFloat(e.target.value);
                    if (Number.isFinite(val)) {
                      setSettings((prev) => ({
                        ...prev,
                        notaCorteDesvioPadrao: Math.max(0, Math.min(20, val)),
                      }));
                    }
                  }}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>
            </>
          ) : (
            <div className="md:col-span-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Cortes das edições anteriores
                </span>
                <span className="font-mono text-xs tabular-nums text-slate-700 dark:text-slate-200">
                  μ_C = <strong>{annualStats.mean.toFixed(1)}%</strong> · σ_C ={' '}
                  <strong>{annualStats.sd.toFixed(2)} pp</strong>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {settings.annualCutoffs.map((entry) => (
                  <span
                    key={entry.id}
                    className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-xs tabular-nums text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <span className="text-slate-400">{entry.year}:</span>
                    <strong>{entry.score.toFixed(1)}%</strong>
                    {settings.annualCutoffs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleDeleteAnnualCutoff(entry.id)}
                        aria-label={`Remover corte de ${entry.year}`}
                        className="text-slate-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              <form
                onSubmit={handleAddAnnualCutoff}
                className="flex items-center gap-1.5 pt-0.5"
              >
                <input
                  type="number"
                  min="1995"
                  max="2100"
                  value={newEditionYear}
                  onChange={(e) => setNewEditionYear(e.target.value)}
                  placeholder="Ano"
                  aria-label="Ano da edição"
                  className="w-24 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  max="100"
                  value={newEditionScore}
                  onChange={(e) => setNewEditionScore(e.target.value)}
                  placeholder="Corte (%)"
                  aria-label="Nota de corte da edição"
                  className="w-28 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-lg bg-[#1A56DB] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 cursor-pointer whitespace-nowrap"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Adicionar ano</span>
                </button>
              </form>
            </div>
          )}

          {/* Target Question Volume (totalQuestoesProva) */}
          <div className="md:col-span-4 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Volume de questões alvo
              </span>
              <div className="inline-flex gap-1">
                {EXAM_SIZE_PRESETS.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() =>
                      setSettings((prev) => ({
                        ...prev,
                        totalQuestoesProva: size,
                      }))
                    }
                    className={cn(
                      'rounded px-1.5 py-0.5 font-mono text-[10px] font-semibold tabular-nums cursor-pointer transition-colors',
                      settings.totalQuestoesProva === size
                        ? 'bg-[#1A56DB] text-white dark:bg-sky-500 dark:text-slate-950'
                        : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-300'
                    )}
                  >
                    {size}q
                  </button>
                ))}
              </div>
            </div>
            <input
              type="number"
              min="10"
              max="300"
              value={settings.totalQuestoesProva}
              onChange={(e) => {
                const val = Number.parseInt(e.target.value, 10);
                if (Number.isFinite(val)) {
                  setSettings((prev) => ({
                    ...prev,
                    totalQuestoesProva: Math.max(10, Math.min(300, val)),
                  }));
                }
              }}
              aria-label="Volume total de questões da prova alvo"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />
          </div>

          {/* Min per Area + Laplace Toggle */}
          <div className="md:col-span-2 flex flex-col justify-end gap-2">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Mínimo / área
              </span>
              <input
                type="number"
                min="1"
                max="100"
                value={settings.minimoQuestoesPorArea}
                onChange={(e) => {
                  const val = Number.parseInt(e.target.value, 10);
                  if (Number.isFinite(val)) {
                    setSettings((prev) => ({
                      ...prev,
                      minimoQuestoesPorArea: Math.max(1, Math.min(100, val)),
                    }));
                  }
                }}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>
          </div>
        </div>

        <label className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.usarLaplace}
            onChange={(e) =>
              setSettings((prev) => ({
                ...prev,
                usarLaplace: e.target.checked,
              }))
            }
            className="h-3.5 w-3.5 rounded border-slate-300 text-[#1A56DB] focus:ring-[#1A56DB] cursor-pointer"
          />
          <span>
            Aplicar suavização de Laplace — (k + 1) / (n + 2) — para estabilidade em amostras iniciais
          </span>
        </label>
      </div>

      {/* Cold Start Notice when some area has fewer than minQ questions */}
      {resultado.status === 'dados_insuficientes' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/80 bg-amber-50/70 px-5 py-3 sm:px-6 text-xs text-amber-900 dark:border-amber-500/20 dark:bg-amber-950/30 dark:text-amber-200">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
            <span>
              <strong>Amostra parcial nesta janela:</strong> ao menos uma das 5 áreas está abaixo de{' '}
              <span className="font-mono font-semibold tabular-nums">
                {settings.minimoQuestoesPorArea} questões
              </span>
              . Resolva mais questões nessa janela ou ative a suavização de Laplace para calibrar o cálculo completo.
            </span>
          </div>
          {!settings.usarLaplace && (
            <button
              type="button"
              onClick={() =>
                setSettings((prev) => ({ ...prev, usarLaplace: true }))
              }
              className="rounded-md border border-amber-300 bg-white px-2.5 py-1 text-xs font-semibold text-amber-900 hover:bg-amber-100/70 dark:border-amber-500/40 dark:bg-slate-900 dark:text-amber-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              Ativar Laplace
            </button>
          )}
        </div>
      )}

      {/* 3 Student-Friendly Primary Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800">
        {/* Indicator 1: Nota Projetada + IC 95% (Domínio) + IP 95% (Dia da Prova) */}
        <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Nota Projetada e IC 95% do Candidato
            </p>
            <div className="mt-2 flex items-baseline gap-2 flex-wrap">
              <span className="font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
                {resultado.notaEstimada.toFixed(1)}%
              </span>
              <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                SE domínio ±{resultado.seDominio.toFixed(2)} pp
              </span>
            </div>
            <div className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
              <p>
                IC 95% do domínio:{' '}
                <strong className="font-mono tabular-nums text-slate-900 dark:text-white">
                  {resultado.icDominio95[0].toFixed(1)}% a{' '}
                  {resultado.icDominio95[1].toFixed(1)}%
                </strong>
              </p>
              <p>
                Faixa no dia da prova ({settings.totalQuestoesProva}q · IP 95%):{' '}
                <strong className="font-mono tabular-nums text-[#1A56DB] dark:text-sky-400">
                  {resultado.ipDiaProva95[0].toFixed(1)}% a{' '}
                  {resultado.ipDiaProva95[1].toFixed(1)}%
                </strong>
              </p>
            </div>
          </div>

          {/* Visual Range Bar showing IC95, IP95, and Historical Cutoff Band (mu_C +/- sigma_C) */}
          <div className="space-y-1.5 pt-1">
            <div className="relative h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800">
              {/* Historical cutoff uncertainty band (mu_C +/- sigma_C) */}
              {effectiveCutoffSd > 0 && (
                <div
                  title={`Faixa do corte histórico: ${Math.max(
                    0,
                    effectiveCutoffMean - effectiveCutoffSd
                  ).toFixed(1)}% a ${Math.min(
                    100,
                    effectiveCutoffMean + effectiveCutoffSd
                  ).toFixed(1)}%`}
                  className="absolute top-0 h-full bg-emerald-500/20 dark:bg-emerald-400/20"
                  style={{
                    left: `${cutoffBandLeft}%`,
                    width: `${cutoffBandWidth}%`,
                  }}
                />
              )}
              {/* Exam-day prediction interval (95% IP) */}
              <div
                className="absolute top-0.5 h-2 rounded-full bg-[#1A56DB]/25 dark:bg-sky-400/25"
                style={{
                  left: `${resultado.ipDiaProva95[0]}%`,
                  width: `${Math.max(
                    2,
                    resultado.ipDiaProva95[1] - resultado.ipDiaProva95[0]
                  )}%`,
                }}
              />
              {/* True mastery interval (95% IC) */}
              <div
                className="absolute top-0.5 h-2 rounded-full bg-[#1A56DB] dark:bg-sky-400"
                style={{
                  left: `${resultado.icDominio95[0]}%`,
                  width: `${Math.max(
                    2,
                    resultado.icDominio95[1] - resultado.icDominio95[0]
                  )}%`,
                }}
              />
              {/* Cutoff mean marker */}
              <div
                title={`Corte médio: ${effectiveCutoffMean.toFixed(1)}%`}
                className="absolute -top-0.5 h-4 w-0.5 bg-emerald-600 dark:bg-emerald-400"
                style={{
                  left: `${Math.min(99, Math.max(1, effectiveCutoffMean))}%`,
                }}
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
              <span>SE prova ±{resultado.sePredicao.toFixed(2)} pp</span>
              <span className="text-emerald-700 dark:text-emerald-400">
                Corte {effectiveCutoffMean.toFixed(1)}%
                {effectiveCutoffSd > 0 && ` ± ${effectiveCutoffSd.toFixed(1)}`}
              </span>
            </div>
          </div>
        </div>

        {/* Indicator 2: Termômetro de Aprovação */}
        <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3">
          <div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Probabilidade de Aprovação
            </p>
            <div className="mt-2 flex items-baseline gap-2.5 flex-wrap">
              <span
                className={cn(
                  'font-mono text-3xl font-bold tabular-nums',
                  probStatus.textClass
                )}
              >
                {resultado.probabilidadeAprovacao.toFixed(1)}%
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1 text-xs font-semibold',
                  probStatus.textClass
                )}
              >
                {resultado.probabilidadeAprovacao >= 70 ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : (
                  <AlertTriangle className="h-3.5 w-3.5" />
                )}
                <span>{probStatus.label}</span>
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-300">
              Chance estimada de superar o corte histórico de{' '}
              <strong className="font-mono tabular-nums text-slate-900 dark:text-white">
                {effectiveCutoffMean.toFixed(1)}%
              </strong>
              {effectiveCutoffSd > 0 ? (
                <span className="text-slate-500 dark:text-slate-400">
                  {' '}
                  (σ = {effectiveCutoffSd.toFixed(1)} pp)
                </span>
              ) : (
                <span className="text-slate-500 dark:text-slate-400">
                  {' '}
                  (corte fixo)
                </span>
              )}{' '}
              em uma prova de{' '}
              <strong className="font-mono tabular-nums text-slate-900 dark:text-white">
                {settings.totalQuestoesProva} questões
              </strong>
              .
            </p>
          </div>

          {/* Thermometer Progress Gauge */}
          <div className="space-y-1.5 pt-1">
            <div
              className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
              role="progressbar"
              aria-label="Probabilidade estimada de aprovação"
              aria-valuenow={resultado.probabilidadeAprovacao}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className={cn(
                  'h-full rounded-full transition-all duration-500 ease-out',
                  probStatus.barClass
                )}
                style={{
                  width: `${Math.min(100, Math.max(2, resultado.probabilidadeAprovacao))}%`,
                }}
              />
            </div>
            <div className="flex items-center justify-between font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
              <span>0%</span>
              <span>50% (no corte)</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Indicator 3: Gargalo Prioritário (+5% Impact Simulation) */}
        <div className="p-5 sm:p-6 flex flex-col justify-between space-y-3">
          {gargalo && gargaloMeta ? (
            <>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Gargalo Prioritário · Maior retorno
                </p>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white truncate">
                    {gargaloMeta.name}
                  </h3>
                  <span className="font-mono text-sm font-bold tabular-nums text-red-600 dark:text-red-400 shrink-0">
                    {gargalo.percentualAtual.toFixed(1)}%
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  Elevar {gargaloMeta.shortName} em{' '}
                  <strong className="font-mono tabular-nums text-slate-900 dark:text-white">
                    +{gargalo.ganhoAplicadoPct.toFixed(0)}%
                  </strong>{' '}
                  soma{' '}
                  <strong className="font-mono tabular-nums text-emerald-700 dark:text-emerald-400">
                    +{gargalo.ganhoNotaGeral.toFixed(2)} pts
                  </strong>{' '}
                  na nota geral (para{' '}
                  <span className="font-mono tabular-nums">
                    {gargalo.novaNotaEstimada.toFixed(1)}%
                  </span>
                  ) e leva sua chance para{' '}
                  <strong className="font-mono tabular-nums text-[#1A56DB] dark:text-sky-400">
                    {gargalo.novaProbabilidadeAprovacao.toFixed(1)}%
                  </strong>
                  {gargalo.ganhoProbabilidadePp > 0 && (
                    <span className="font-mono tabular-nums text-emerald-700 dark:text-emerald-400">
                      {' '}
                      (+{gargalo.ganhoProbabilidadePp.toFixed(1)} pp)
                    </span>
                  )}
                  .
                </p>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => onPracticeArea(gargalo.area)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#1A56DB] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Treinar {gargaloMeta.name} agora</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Responda questões nas 5 grandes áreas para identificar seu gargalo prioritário.
            </p>
          )}
        </div>
      </div>

      {/* 12-Week Rolling 90-Day Approval Probability & Score Trajectory (normal_cdf SQL contract) */}
      {weeklySeries.length > 0 && (
        <div className="border-b border-slate-200 px-5 py-5 sm:px-6 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Evolução Semanal (12 semanas · janela móvel de 90 dias)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {weeklyMetric === 'probabilidade'
                  ? 'Trajetória da probabilidade de aprovação P(Y ≥ C) recalculada semanalmente via Φ(z).'
                  : 'Trajetória da nota projetada acompanhada pelos limites superior e inferior da faixa do dia da prova (IP 95%).'}
              </p>
            </div>

            <div className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 self-start shrink-0">
              <button
                type="button"
                onClick={() => setWeeklyMetric('probabilidade')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  weeklyMetric === 'probabilidade'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Chance de Aprovação (%)
              </button>
              <button
                type="button"
                onClick={() => setWeeklyMetric('nota_faixa')}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  weeklyMetric === 'nota_faixa'
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Nota + IP 95%
              </button>
            </div>
          </div>

          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {weeklyMetric === 'probabilidade' ? (
                <ComposedChart
                  data={weeklySeries}
                  margin={{ top: 10, right: 16, left: -14, bottom: 4 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={gridColor}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="label"
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
                    labelFormatter={(lbl) => `Semana de ${lbl}`}
                    formatter={(val) => [
                      typeof val === 'number' ? `${val.toFixed(1)}%` : '—',
                      'Probabilidade de Aprovação',
                    ]}
                  />
                  <ReferenceLine
                    y={50}
                    stroke={darkMode ? '#64748B' : '#94A3B8'}
                    strokeDasharray="4 4"
                    label={{
                      value: '50% (no corte)',
                      position: 'insideTopRight',
                      fill: axisTickColor,
                      fontSize: 10,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="probabilidade_aprovacao"
                    stroke="#059669"
                    strokeWidth={2.25}
                    fill="#10B981"
                    fillOpacity={darkMode ? 0.2 : 0.14}
                    dot={{ r: 3.5, fill: '#059669' }}
                    activeDot={{ r: 5.5 }}
                    connectNulls
                  />
                </ComposedChart>
              ) : (
                <ComposedChart
                  data={weeklySeries}
                  margin={{ top: 10, right: 16, left: -14, bottom: 4 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke={gridColor}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="label"
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                    axisLine={{ stroke: gridColor }}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[40, 100]}
                    unit="%"
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    labelFormatter={(lbl) => `Semana de ${lbl}`}
                    formatter={(val, name) => {
                      const labelMap: Record<string, string> = {
                        nota_estimada: 'Nota Projetada',
                        ip_prova_sup: 'IP 95% Superior',
                        ip_prova_inf: 'IP 95% Inferior',
                      };
                      return [
                        typeof val === 'number' ? `${val.toFixed(1)}%` : '—',
                        labelMap[String(name)] ?? String(name),
                      ];
                    }}
                  />
                  <ReferenceLine
                    y={effectiveCutoffMean}
                    stroke="#059669"
                    strokeWidth={1.5}
                    strokeDasharray="5 4"
                    label={{
                      value: `Corte (${effectiveCutoffMean.toFixed(1)}%)`,
                      position: 'insideTopRight',
                      fill: darkMode ? '#34D399' : '#047857',
                      fontSize: 10,
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ip_prova_sup"
                    stroke={darkMode ? '#38BDF8' : '#93C5FD'}
                    strokeWidth={1.25}
                    strokeDasharray="3 3"
                    dot={false}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="ip_prova_inf"
                    stroke={darkMode ? '#38BDF8' : '#93C5FD'}
                    strokeWidth={1.25}
                    strokeDasharray="3 3"
                    dot={false}
                    connectNulls
                  />
                  <Line
                    type="monotone"
                    dataKey="nota_estimada"
                    stroke="#1A56DB"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: '#1A56DB' }}
                    activeDot={{ r: 5.5 }}
                    connectNulls
                  />
                </ComposedChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Compact Stratified Table for all 5 Grandes Áreas */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
            <tr>
              <th className="px-5 py-2.5 font-semibold">Grande Área</th>
              <th className="px-4 py-2.5 text-right font-semibold">Peso</th>
              <th className="px-4 py-2.5 text-right font-semibold">
                Acertos (k / n)
              </th>
              <th className="px-4 py-2.5 text-right font-semibold">
                Aproveitamento
              </th>
              <th className="px-4 py-2.5 text-right font-semibold">
                IC 95% da Área
              </th>
              <th className="px-5 py-2.5 text-right font-semibold">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {resultado.detalhePorArea.map((row) => {
              const meta = AREA_META_MAP.get(row.area);
              const isBottleneck = gargalo?.area === row.area;
              return (
                <tr
                  key={row.area}
                  className={cn(
                    'hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors',
                    isBottleneck && 'bg-red-50/35 dark:bg-red-950/15'
                  )}
                >
                  <td className="px-5 py-2.5 font-medium text-slate-900 dark:text-slate-100">
                    <span>{meta?.name ?? row.area}</span>
                    {isBottleneck && (
                      <span className="ml-2 text-[11px] font-semibold text-red-700 dark:text-red-400">
                        · Gargalo prioritário
                      </span>
                    )}
                    {row.abaixoDoMinimo && (
                      <span className="ml-2 font-mono text-[11px] text-amber-700 dark:text-amber-400">
                        · {row.total}/{settings.minimoQuestoesPorArea} mín.
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    {Math.round(row.peso * 100)}%
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300">
                    {row.acertos}/{row.total}
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono font-semibold tabular-nums text-slate-900 dark:text-white">
                    {row.percentual.toFixed(1)}%
                  </td>
                  <td className="px-4 py-2.5 text-right font-mono tabular-nums text-slate-500 dark:text-slate-400">
                    [{row.ic95[0].toFixed(1)}%; {row.ic95[1].toFixed(1)}%]
                  </td>
                  <td className="px-5 py-2.5 text-right">
                    <button
                      type="button"
                      onClick={() => onPracticeArea(row.area)}
                      className="text-xs font-medium text-[#1A56DB] hover:underline dark:text-sky-400 cursor-pointer whitespace-nowrap"
                    >
                      Praticar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
