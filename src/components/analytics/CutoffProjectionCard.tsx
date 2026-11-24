import React, { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceArea,
  Legend,
} from 'recharts';
import {
  Plus,
  SlidersHorizontal,
  Trash2,
  X,
  ArrowRight,
  RotateCcw,
  Check,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Compass,
} from 'lucide-react';
import type {
  CutoffTargetConfig,
  ExamType,
  SimuladoRecord,
  SimuladoScaleType,
} from '../../types/medical';
import { computeCutoffProjection } from '../../lib/cutoffProjection';
import { cn } from '../../lib/utils';

interface CutoffProjectionCardProps {
  simulados: SimuladoRecord[];
  target: CutoffTargetConfig;
  darkMode: boolean;
  onAddSimulado: (entry: Omit<SimuladoRecord, 'id' | 'accuracyPct'>) => void;
  onDeleteSimulado: (id: string) => void;
  onUpdateTarget: (patch: Partial<CutoffTargetConfig>) => void;
  onRestoreExample: () => void;
  onOpenErrorNotebook: () => void;
  onOpenFlashcards: () => void;
  onOpenQuestionBank: () => void;
}

const MODALITIES: ExamType[] = ['Acesso Direto', 'R+', 'Revalida'];
const MARGIN_PRESETS = [3, 4, 5];

function formatDateBR(isoDate: string): string {
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function getTodayIsoDate(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function CutoffProjectionCard({
  simulados,
  target,
  darkMode,
  onAddSimulado,
  onDeleteSimulado,
  onUpdateTarget,
  onRestoreExample,
  onOpenErrorNotebook,
  onOpenFlashcards,
  onOpenQuestionBank,
}: CutoffProjectionCardProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showTargetConfig, setShowTargetConfig] = useState(false);

  // Add Simulado Form State
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(getTodayIsoDate);
  const [validCorrect, setValidCorrect] = useState('74');
  const [validTotal, setValidTotal] = useState('100');
  const [scaleType, setScaleType] = useState<SimuladoScaleType>(target.scaleType);
  const [estimatedScoreInput, setEstimatedScoreInput] = useState('74');
  const [cohortAvgInput, setCohortAvgInput] = useState('');
  const [cohortPercentileInput, setCohortPercentileInput] = useState('');

  // Target Config Form State
  const [draftInstitution, setDraftInstitution] = useState(target.institution);
  const [draftSpecialty, setDraftSpecialty] = useState(target.specialty);
  const [draftModality, setDraftModality] = useState<ExamType>(target.modality);
  const [draftHistoricalCutoff, setDraftHistoricalCutoff] = useState(
    String(target.historicalCutoff)
  );
  const [draftSafetyMargin, setDraftSafetyMargin] = useState(
    String(target.safetyMargin)
  );
  const [draftScaleType, setDraftScaleType] = useState<SimuladoScaleType>(
    target.scaleType
  );

  const projection = useMemo(
    () => computeCutoffProjection(simulados, target),
    [simulados, target]
  );

  const unitSuffix = target.scaleType === 'bruta_100' ? '%' : ' pts';
  const unitDelta = target.scaleType === 'bruta_100' ? 'pp' : 'pts';

  const parsedCorrect = Number.parseInt(validCorrect, 10);
  const parsedTotal = Number.parseInt(validTotal, 10);
  const computedPreviewPct =
    !Number.isNaN(parsedCorrect) &&
    !Number.isNaN(parsedTotal) &&
    parsedTotal > 0
      ? Math.max(0, Math.min(100, (parsedCorrect / parsedTotal) * 100))
      : null;

  const isAddFormValid =
    date.trim().length > 0 &&
    !Number.isNaN(parsedTotal) &&
    parsedTotal >= 1 &&
    !Number.isNaN(parsedCorrect) &&
    parsedCorrect >= 0 &&
    parsedCorrect <= parsedTotal &&
    (scaleType === 'bruta_100' ||
      (!Number.isNaN(Number.parseFloat(estimatedScoreInput)) &&
        Number.parseFloat(estimatedScoreInput) >= 0));

  const handleOpenAddForm = () => {
    setScaleType(target.scaleType);
    setDate(getTodayIsoDate());
    setShowTargetConfig(false);
    setShowAddForm((prev) => !prev);
  };

  const handleOpenTargetConfig = () => {
    setDraftInstitution(target.institution);
    setDraftSpecialty(target.specialty);
    setDraftModality(target.modality);
    setDraftHistoricalCutoff(String(target.historicalCutoff));
    setDraftSafetyMargin(String(target.safetyMargin));
    setDraftScaleType(target.scaleType);
    setShowAddForm(false);
    setShowTargetConfig((prev) => !prev);
  };

  const handleSubmitSimulado = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAddFormValid) return;

    const cohortAvgParsed =
      cohortAvgInput.trim() !== ''
        ? Number.parseFloat(cohortAvgInput.replace(',', '.'))
        : undefined;
    const cohortPercentileParsed =
      cohortPercentileInput.trim() !== ''
        ? Number.parseInt(cohortPercentileInput, 10)
        : undefined;

    const resolvedTitle =
      title.trim() || `Simulado #${String(simulados.length + 1).padStart(2, '0')}`;

    const resolvedEstimated =
      scaleType === 'bruta_100'
        ? computedPreviewPct ?? 0
        : Number.parseFloat(estimatedScoreInput.replace(',', '.'));

    onAddSimulado({
      title: resolvedTitle,
      date,
      validCorrect: parsedCorrect,
      validTotal: parsedTotal,
      scaleType,
      estimatedScore: Number.isFinite(resolvedEstimated) ? resolvedEstimated : 0,
      cohortAvgPct:
        cohortAvgParsed !== undefined &&
        Number.isFinite(cohortAvgParsed) &&
        cohortAvgParsed >= 0 &&
        cohortAvgParsed <= 100
          ? Number(cohortAvgParsed.toFixed(1))
          : undefined,
      cohortPercentile:
        cohortPercentileParsed !== undefined &&
        Number.isFinite(cohortPercentileParsed) &&
        cohortPercentileParsed >= 1 &&
        cohortPercentileParsed <= 99
          ? cohortPercentileParsed
          : undefined,
      source: 'manual',
    });

    setTitle('');
    setCohortAvgInput('');
    setCohortPercentileInput('');
    setShowAddForm(false);
  };

  const handleSaveTarget = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCutoff = Number.parseFloat(draftHistoricalCutoff.replace(',', '.'));
    const parsedMargin = Number.parseFloat(draftSafetyMargin.replace(',', '.'));
    if (!Number.isFinite(parsedCutoff) || parsedCutoff <= 0) return;

    const maxScale = draftScaleType === 'bruta_100' ? 100 : 1000;
    const safeCutoff = Math.max(1, Math.min(maxScale, parsedCutoff));
    const safeMargin = Number.isFinite(parsedMargin)
      ? Math.max(0, Math.min(draftScaleType === 'bruta_100' ? 20 : 200, parsedMargin))
      : 0;

    onUpdateTarget({
      institution: draftInstitution.trim() || target.institution,
      specialty: draftSpecialty.trim() || target.specialty,
      modality: draftModality,
      historicalCutoff: Number(safeCutoff.toFixed(1)),
      safetyMargin: Number(safeMargin.toFixed(1)),
      scaleType: draftScaleType,
    });
    setShowTargetConfig(false);
  };

  const hasCohortSeries = projection.chartPoints.some(
    (p) => typeof p.cohortAvgPct === 'number'
  );

  // Dynamic Y-axis bounds keeping the target band and all points comfortably framed
  const yDomain = useMemo<[number, number]>(() => {
    if (target.scaleType === 'bruta_100') {
      const values = [
        projection.historicalCutoff,
        projection.operationalTarget,
        ...projection.chartPoints.map((p) => p.estimatedScore),
        ...projection.chartPoints
          .map((p) => p.cohortAvgPct)
          .filter((v): v is number => typeof v === 'number'),
      ];
      const minVal = values.length > 0 ? Math.min(...values) : 45;
      const maxVal = values.length > 0 ? Math.max(...values) : 90;
      return [
        Math.max(0, Math.floor((minVal - 8) / 5) * 5),
        Math.min(100, Math.ceil((maxVal + 6) / 5) * 5),
      ];
    }
    const values = [
      projection.historicalCutoff,
      projection.operationalTarget,
      ...projection.chartPoints.map((p) => p.estimatedScore),
    ];
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const pad = Math.max(10, (maxVal - minVal) * 0.15);
    return [Math.max(0, Math.floor(minVal - pad)), Math.ceil(maxVal + pad)];
  }, [projection, target.scaleType]);

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
      aria-label="Projeção de ritmo até a nota de corte"
      className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-[#1A56DB] dark:text-sky-400 shrink-0" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Bússola até a Nota de Corte
            </h2>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            <span>{target.institution}</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span>{target.specialty}</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span>{target.modality}</span>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            <span>
              {target.scaleType === 'bruta_100'
                ? 'Escala bruta (0–100%)'
                : 'Escala TRI / personalizada'}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleOpenTargetConfig}
            aria-expanded={showTargetConfig}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0',
              showTargetConfig
                ? 'border-slate-900 bg-slate-900 text-white dark:border-sky-400 dark:bg-sky-500 dark:text-slate-950'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800'
            )}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Configurar meta (M)</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAddForm}
            aria-expanded={showAddForm}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A56DB] px-3.5 py-2 text-xs font-semibold text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Registrar simulado</span>
          </button>
        </div>
      </div>

      {/* Inline Target Configuration Panel */}
      {showTargetConfig && (
        <form
          onSubmit={handleSaveTarget}
          className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-4 sm:px-6 dark:border-slate-800 dark:bg-slate-950/60 space-y-4"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Meta operacional (M) com margem de segurança
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Use a série histórica das últimas edições da sua banca e some 3 a 5 pontos de margem contra variações do corte.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowTargetConfig(false)}
              aria-label="Fechar configuração da meta"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Instituição / Banca
              </span>
              <input
                type="text"
                value={draftInstitution}
                onChange={(e) => setDraftInstitution(e.target.value)}
                placeholder="Ex.: ENARE, USP-SP, UEPA"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Especialidade
              </span>
              <input
                type="text"
                value={draftSpecialty}
                onChange={(e) => setDraftSpecialty(e.target.value)}
                placeholder="Ex.: Clínica Médica"
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Modalidade
              </span>
              <select
                value={draftModality}
                onChange={(e) => setDraftModality(e.target.value as ExamType)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                {MODALITIES.map((mod) => (
                  <option key={mod} value={mod}>
                    {mod}
                  </option>
                ))}
              </select>
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Escala da prova
              </span>
              <select
                value={draftScaleType}
                onChange={(e) =>
                  setDraftScaleType(e.target.value as SimuladoScaleType)
                }
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                <option value="bruta_100">Nota bruta simples (0–100%)</option>
                <option value="tri_outra">TRI ou escala própria</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Corte histórico base ({draftScaleType === 'bruta_100' ? '%' : 'pts'})
              </span>
              <input
                type="number"
                step="0.5"
                min="1"
                max={draftScaleType === 'bruta_100' ? '100' : '1000'}
                value={draftHistoricalCutoff}
                onChange={(e) => setDraftHistoricalCutoff(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Margem de segurança (+{draftScaleType === 'bruta_100' ? 'pp' : 'pts'})
                </span>
                {draftScaleType === 'bruta_100' && (
                  <div className="inline-flex items-center gap-1">
                    {MARGIN_PRESETS.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setDraftSafetyMargin(String(preset))}
                        className={cn(
                          'rounded px-1.5 py-0.5 font-mono text-[11px] font-medium tabular-nums cursor-pointer transition-colors',
                          Number(draftSafetyMargin) === preset
                            ? 'bg-[#1A56DB] text-white dark:bg-sky-500 dark:text-slate-950'
                            : 'bg-slate-200/80 text-slate-600 hover:bg-slate-300/70 dark:bg-slate-800 dark:text-slate-300'
                        )}
                      >
                        +{preset}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="number"
                step="0.5"
                min="0"
                max={draftScaleType === 'bruta_100' ? '20' : '200'}
                value={draftSafetyMargin}
                onChange={(e) => setDraftSafetyMargin(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowTargetConfig(false)}
                className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A56DB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 cursor-pointer"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Salvar meta</span>
              </button>
            </div>
          </div>
        </form>
      )}

      {/* Inline Add Simulado Form */}
      {showAddForm && (
        <form
          onSubmit={handleSubmitSimulado}
          className="border-b border-slate-200 bg-[#F8FAFC] px-5 py-4 sm:px-6 dark:border-slate-800 dark:bg-slate-950/60 space-y-4"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Registrar resultado de simulado
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Informe data, acertos válidos sobre total de questões válidas e, se tiver, a referência da turma para calibrar a dificuldade.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              aria-label="Fechar formulário de simulado"
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/70 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Data do simulado (t)
              </span>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1 lg:col-span-2">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Identificação do simulado
              </span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`Ex.: Simulado ${target.institution} #${String(
                  simulados.length + 1
                ).padStart(2, '0')}`}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Escala da nota
              </span>
              <select
                value={scaleType}
                onChange={(e) =>
                  setScaleType(e.target.value as SimuladoScaleType)
                }
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                <option value="bruta_100">Nota bruta (N = P)</option>
                <option value="tri_outra">TRI / Escala separada</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 items-end">
            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Acertos válidos
              </span>
              <input
                type="number"
                min="0"
                max={parsedTotal > 0 ? parsedTotal : 500}
                required
                value={validCorrect}
                onChange={(e) => setValidCorrect(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                Questões válidas
              </span>
              <input
                type="number"
                min="1"
                max="500"
                required
                value={validTotal}
                onChange={(e) => setValidTotal(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            {scaleType === 'tri_outra' ? (
              <label className="block space-y-1">
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Nota estimada (N_est)
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  required
                  value={estimatedScoreInput}
                  onChange={(e) => setEstimatedScoreInput(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </label>
            ) : (
              <div className="space-y-1">
                <span className="block text-xs font-medium text-slate-600 dark:text-slate-300">
                  Percentual (P = N_est)
                </span>
                <div className="rounded-lg border border-slate-200 bg-slate-100/80 px-3 py-2 font-mono text-sm font-semibold tabular-nums text-slate-900 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white">
                  {computedPreviewPct !== null
                    ? `${computedPreviewPct.toFixed(1)}%`
                    : '—'}
                </div>
              </div>
            )}

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Média turma % (opcional)
              </span>
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="Ex.: 62.5"
                value={cohortAvgInput}
                onChange={(e) => setCohortAvgInput(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>

            <label className="block space-y-1">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Percentil (opcional)
              </span>
              <input
                type="number"
                min="1"
                max="99"
                placeholder="Ex.: 78"
                value={cohortPercentileInput}
                onChange={(e) => setCohortPercentileInput(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-mono text-sm tabular-nums text-slate-900 focus:border-[#1A56DB] focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />
            </label>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={!isAddFormValid}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A56DB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1648B8] disabled:opacity-45 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400 cursor-pointer"
            >
              <Check className="h-3.5 w-3.5" />
              <span>Adicionar ao histórico</span>
            </button>
          </div>
        </form>
      )}

      {/* Empty State */}
      {projection.simuladoCount === 0 ? (
        <div className="px-6 py-12 text-center space-y-3">
          <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
            Nenhum simulado registrado ainda
          </p>
          <p className="mx-auto max-w-md text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Registre pelo menos 3 a 4 simulados com data e acertos válidos — ou conclua um Simulado aqui no MedR1 — para medir sua distância real até o corte e seu ritmo semanal.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={handleOpenAddForm}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A56DB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1648B8] dark:bg-sky-500 dark:text-slate-950 cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Registrar primeiro simulado</span>
            </button>
            <button
              type="button"
              onClick={onRestoreExample}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Carregar série de exemplo</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* 3-Pillar Readout: Measured | Real Distance (Delta) | Weekly Pace & Planning Band */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800">
            {/* Pillar 1: Measured */}
            <div className="p-5 sm:p-6">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                1. O que está medido (N atual)
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-bold tabular-nums text-slate-900 dark:text-white">
                  {projection.currentScore !== null
                    ? `${projection.currentScore.toFixed(1)}${unitSuffix}`
                    : '—'}
                </span>
                {projection.latestSimulado && (
                  <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400">
                    {projection.latestSimulado.validCorrect}/
                    {projection.latestSimulado.validTotal} válidas
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                {projection.latestSimulado ? (
                  <>
                    <span>{projection.latestSimulado.title}</span>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-mono tabular-nums">
                      {formatDateBR(projection.latestSimulado.date)}
                    </span>
                  </>
                ) : (
                  'Sem medições'
                )}
              </p>
              {projection.difficultyAdjustedNote && (
                <p className="mt-2 text-xs leading-relaxed text-[#1A56DB] dark:text-sky-400">
                  {projection.difficultyAdjustedNote}
                </p>
              )}
            </div>

            {/* Pillar 2: Distance to Operational Cutoff */}
            <div className="p-5 sm:p-6">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                2. Distância real até a meta (Δ = M − N)
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span
                  className={cn(
                    'font-mono text-3xl font-bold tabular-nums',
                    projection.targetReached
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : projection.inSafetyBand
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-slate-900 dark:text-white'
                  )}
                >
                  {projection.distanceToOperational === null
                    ? '—'
                    : projection.distanceToOperational <= 0
                    ? `${projection.distanceToOperational.toFixed(1)} ${unitDelta}`
                    : `+${projection.distanceToOperational.toFixed(1)} ${unitDelta}`}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {projection.targetReached
                    ? 'na faixa operacional'
                    : projection.inSafetyBand
                    ? 'acima do corte histórico'
                    : 'até a meta operacional'}
                </span>
              </div>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono tabular-nums">
                Corte base {projection.historicalCutoff.toFixed(1)}
                {unitSuffix} + margem {projection.safetyMargin.toFixed(1)} → M ={' '}
                <strong className="text-slate-700 dark:text-slate-200">
                  {projection.operationalTarget.toFixed(1)}
                  {unitSuffix}
                </strong>
              </p>
            </div>

            {/* Pillar 3: Weekly Pace & Planning Window */}
            <div className="p-5 sm:p-6">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                3. Ritmo semanal (r) e janela estimada
              </p>
              <div className="mt-2 flex items-baseline gap-2 flex-wrap">
                <span
                  className={cn(
                    'font-mono text-3xl font-bold tabular-nums',
                    projection.targetReached
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : projection.weekBandLow !== null
                      ? 'text-[#1A56DB] dark:text-sky-400'
                      : 'text-amber-600 dark:text-amber-400'
                  )}
                >
                  {projection.targetReached
                    ? 'Meta atingida'
                    : projection.weekBandLow !== null &&
                      projection.weekBandHigh !== null
                    ? `${projection.weekBandLow} a ${projection.weekBandHigh} sem`
                    : projection.paceMethod === 'insufficient'
                    ? 'Calibrando'
                    : 'Estagnado'}
                </span>
                {projection.weeklyPace !== null && (
                  <span className="font-mono text-xs font-semibold tabular-nums text-slate-600 dark:text-slate-300">
                    ({projection.weeklyPace >= 0 ? '+' : ''}
                    {projection.weeklyPace.toFixed(2)} {unitDelta}/sem)
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                {projection.paceMethod === 'linear_regression' && (
                  <>
                    Regressão linear ({projection.simuladoCount} simulados ·{' '}
                    {projection.spanWeeks.toFixed(1)} sem)
                  </>
                )}
                {projection.paceMethod === 'interval' && (
                  <>
                    Média por intervalo ({projection.simuladoCount} simulados ·
                    recomendado ≥ 4)
                  </>
                )}
                {projection.paceMethod === 'insufficient' && (
                  <>Registre ao menos 2 simulados em semanas distintas</>
                )}
                {projection.rawWeeksEstimate !== null && (
                  <>
                    <span className="mx-1.5" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-mono tabular-nums">
                      bruta {projection.rawWeeksEstimate.toFixed(1)} sem
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Trajectory Chart + Target Safety Band */}
          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Trajetória dos Simulados vs. Faixa de Corte ({projection.historicalCutoff.toFixed(0)}–{projection.operationalTarget.toFixed(0)}
                  {unitSuffix})
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  A faixa sombreada representa o corte histórico somado à margem de segurança; a linha tracejada suaviza oscilações de dificuldade.
                </p>
              </div>
              {projection.diminishingReturnsWarning && !projection.targetReached && (
                <span className="text-xs text-amber-700 dark:text-amber-400 shrink-0">
                  Retornos decrescentes acima de 75% considerados na faixa
                </span>
              )}
            </div>

            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={projection.chartPoints}
                  margin={{ top: 12, right: 16, left: -10, bottom: 6 }}
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
                    domain={yDomain}
                    unit={target.scaleType === 'bruta_100' ? '%' : ''}
                    tick={{ fill: axisTickColor, fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(val, name) => [
                      typeof val === 'number'
                        ? `${val.toFixed(1)}${unitSuffix}`
                        : `${val ?? ''}`,
                      name,
                    ]}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '8px' }} />

                  {/* Safety Margin Target Band [historicalCutoff, operationalTarget] */}
                  {projection.safetyMargin > 0 && (
                    <ReferenceArea
                      y1={projection.historicalCutoff}
                      y2={projection.operationalTarget}
                      fill={darkMode ? '#10B981' : '#059669'}
                      fillOpacity={darkMode ? 0.14 : 0.1}
                    />
                  )}

                  {/* Operational Target Line (M) */}
                  <ReferenceLine
                    y={projection.operationalTarget}
                    stroke="#059669"
                    strokeWidth={1.75}
                    strokeDasharray="6 4"
                    label={{
                      value: `Meta M (${projection.operationalTarget.toFixed(0)}${unitSuffix})`,
                      position: 'insideTopRight',
                      fill: darkMode ? '#34D399' : '#047857',
                      fontSize: 11,
                    }}
                  />

                  {/* Historical Cutoff Line */}
                  {projection.safetyMargin > 0 && (
                    <ReferenceLine
                      y={projection.historicalCutoff}
                      stroke={darkMode ? '#64748B' : '#94A3B8'}
                      strokeDasharray="3 3"
                      label={{
                        value: `Corte (${projection.historicalCutoff.toFixed(0)}${unitSuffix})`,
                        position: 'insideBottomRight',
                        fill: axisTickColor,
                        fontSize: 10,
                      }}
                    />
                  )}

                  {/* Measured Simulado Score (N_est) */}
                  <Line
                    type="monotone"
                    dataKey="estimatedScore"
                    name={`Sua nota (${target.scaleType === 'bruta_100' ? 'P = N' : 'N est.'})`}
                    stroke="#1A56DB"
                    strokeWidth={2.5}
                    dot={{ r: 4.5, fill: '#1A56DB', strokeWidth: 2, stroke: darkMode ? '#0F172A' : '#FFFFFF' }}
                    activeDot={{ r: 6 }}
                  />

                  {/* Linear Regression / Interval Trendline */}
                  {projection.simuladoCount >= 2 && (
                    <Line
                      type="linear"
                      dataKey="trendScore"
                      name="Tendência de ritmo (r)"
                      stroke={darkMode ? '#38BDF8' : '#0284C7'}
                      strokeWidth={1.75}
                      strokeDasharray="5 4"
                      dot={false}
                      activeDot={false}
                    />
                  )}

                  {/* Optional Cohort Average Reference */}
                  {hasCohortSeries && target.scaleType === 'bruta_100' && (
                    <Line
                      type="monotone"
                      dataKey="cohortAvgPct"
                      name="Média da turma"
                      stroke="#D97706"
                      strokeWidth={1.5}
                      strokeDasharray="2 3"
                      dot={{ r: 3, fill: '#D97706' }}
                      connectNulls
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Strategic Next-Step Decision Panel (Section 5 of user model) */}
            <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5 dark:border-slate-800 dark:bg-slate-950/60">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    {projection.regime === 'target_reached' ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    ) : projection.regime === 'healthy_progress' ? (
                      <TrendingUp className="h-4 w-4 text-[#1A56DB] dark:text-sky-400 shrink-0" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                    )}
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                      Próximo passo recomendado: {projection.diagnosisTitle}
                    </h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {projection.diagnosisSummary}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {projection.recommendedActions.map((action, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span
                          className="text-slate-400 dark:text-slate-500 select-none"
                          aria-hidden="true"
                        >
                          —
                        </span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap lg:flex-col items-stretch gap-2 shrink-0">
                  {projection.regime === 'small_gap_stagnant' ||
                  projection.regime === 'target_reached' ? (
                    <button
                      type="button"
                      onClick={onOpenErrorNotebook}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Auditar Caderno de Erros</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenQuestionBank}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <span>Treinar Banco de Questões</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={onOpenFlashcards}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-transparent px-3.5 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Revisar Flashcards (FSRS)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* High-Density Simulado Ledger Table */}
          <div className="border-t border-slate-200 dark:border-slate-800 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                <tr>
                  <th className="px-5 py-2.5 font-semibold">Data (t)</th>
                  <th className="px-4 py-2.5 font-semibold">Simulado</th>
                  <th className="px-4 py-2.5 text-right font-semibold">
                    Acertos válidos (P)
                  </th>
                  <th className="px-4 py-2.5 text-right font-semibold">
                    Nota Est. (N)
                  </th>
                  <th className="px-4 py-2.5 text-right font-semibold">
                    Δ vs. Meta
                  </th>
                  <th className="px-4 py-2.5 text-right font-semibold">
                    Turma / Percentil
                  </th>
                  <th className="px-5 py-2.5 text-right font-semibold">
                    Remover
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[...projection.orderedSimulados].reverse().map((sim) => {
                  const score =
                    target.scaleType === 'bruta_100'
                      ? sim.accuracyPct
                      : sim.estimatedScore;
                  const rowDelta = Number(
                    (projection.operationalTarget - score).toFixed(1)
                  );
                  return (
                    <tr
                      key={sim.id}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                    >
                      <td className="px-5 py-2.5 font-mono tabular-nums text-slate-600 dark:text-slate-400 whitespace-nowrap">
                        {formatDateBR(sim.date)}
                      </td>
                      <td className="px-4 py-2.5 font-medium text-slate-900 dark:text-slate-100">
                        <span>{sim.title}</span>
                        {sim.source === 'app_simulado' && (
                          <span className="ml-2 text-[11px] font-normal text-slate-400 dark:text-slate-500">
                            · MedR1
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300 whitespace-nowrap">
                        {sim.validCorrect}/{sim.validTotal}{' '}
                        <span className="text-slate-400 dark:text-slate-500">
                          ({sim.accuracyPct.toFixed(1)}%)
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono font-semibold tabular-nums text-slate-900 dark:text-white whitespace-nowrap">
                        {score.toFixed(1)}
                        {unitSuffix}
                      </td>
                      <td
                        className={cn(
                          'px-4 py-2.5 text-right font-mono font-semibold tabular-nums whitespace-nowrap',
                          rowDelta <= 0
                            ? 'text-emerald-700 dark:text-emerald-400'
                            : rowDelta <= projection.safetyMargin
                            ? 'text-amber-700 dark:text-amber-400'
                            : 'text-slate-600 dark:text-slate-400'
                        )}
                      >
                        {rowDelta <= 0
                          ? `${rowDelta.toFixed(1)} ${unitDelta}`
                          : `Falta ${rowDelta.toFixed(1)} ${unitDelta}`}
                      </td>
                      <td className="px-4 py-2.5 text-right font-mono tabular-nums text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        {sim.cohortAvgPct !== undefined ||
                        sim.cohortPercentile !== undefined ? (
                          <>
                            {sim.cohortAvgPct !== undefined &&
                              `Média ${sim.cohortAvgPct.toFixed(1)}%`}
                            {sim.cohortAvgPct !== undefined &&
                              sim.cohortPercentile !== undefined &&
                              ' · '}
                            {sim.cohortPercentile !== undefined &&
                              `P${sim.cohortPercentile}`}
                          </>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="px-5 py-2.5 text-right">
                        <button
                          type="button"
                          onClick={() => onDeleteSimulado(sim.id)}
                          aria-label={`Remover ${sim.title}`}
                          title="Remover registro"
                          className="inline-flex items-center justify-center rounded-md p-1 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/50 dark:hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}
