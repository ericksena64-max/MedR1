import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Clock,
  Grid2x2,
  Layers,
  Minus,
} from 'lucide-react';
import type { ExamBoard, GrandeAreaId } from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  BOARD_INCIDENCE_MATRIX,
  EXAM_BOARD_LABELS,
  getEffectiveBoardTopics,
  normalizeMedicalText,
  type IncidenceTier,
} from '../../lib/examWeights';
import { buildBoardParetoProfile } from '../../lib/paretoCalculator';
import type { PerformanceRow } from './PerformanceDashboard';
import { Button } from '../ui/Button';
import { cn, formatDelta } from '../../lib/utils';

interface KnowledgeGapHeatmapProps {
  initialBoard: ExamBoard;
  topicRows: PerformanceRow[];
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

type VolumeBandId = 'sem_treino' | 'baixo' | 'medio' | 'alto';
type GapStatus = 'critica' | 'atencao' | 'dominado' | 'baixa_prioridade';

interface HeatmapTopicItem {
  id: string;
  topic: string;
  shortLabel: string;
  tier: IncidenceTier;
  incidencePct: number;
  cumulativePct: number;
  isParetoCore: boolean;
  answered: number;
  correct: number;
  studentPct: number | null;
  communityMedianPct: number | null;
  delta: number | null;
  volumeBand: VolumeBandId;
  status: GapStatus;
  isCriticalGap: boolean;
  gapReasons: string[];
  severityScore: number;
  grandeAreaId: GrandeAreaId;
  grandeAreaName: string;
  matchedTema?: string;
}

const BOARD_OPTIONS: Array<{ value: ExamBoard; label: string }> = [
  { value: 'UEPA', label: 'UEPA' },
  { value: 'ENARE', label: 'ENARE' },
  { value: 'GERAL', label: 'Geral' },
];

const INCIDENCE_ROWS: Array<{
  tier: IncidenceTier;
  title: string;
  subtitle: string;
}> = [
  {
    tier: 'alta',
    title: 'Alta Incidência',
    subtitle: 'Núcleo 80% · +3% FSRS',
  },
  {
    tier: 'media',
    title: 'Média Incidência',
    subtitle: 'Faixa 80–95% · 0% FSRS',
  },
  {
    tier: 'baixa',
    title: 'Baixa Incidência',
    subtitle: 'Cauda longa · −3% FSRS',
  },
];

const VOLUME_COLUMNS: Array<{
  id: VolumeBandId;
  title: string;
  subtitle: string;
}> = [
  { id: 'sem_treino', title: '0 questões', subtitle: 'Sem treino' },
  { id: 'baixo', title: '1–9 questões', subtitle: 'Baixo volume' },
  { id: 'medio', title: '10–14 questões', subtitle: 'Em construção' },
  { id: 'alto', title: '15+ questões', subtitle: 'Volume sólido' },
];

const LOW_VOLUME_THRESHOLD = 10;
const MASTERY_ACCURACY_THRESHOLD = 70;

function getVolumeBand(answered: number): VolumeBandId {
  if (answered <= 0) return 'sem_treino';
  if (answered < LOW_VOLUME_THRESHOLD) return 'baixo';
  if (answered < 15) return 'medio';
  return 'alto';
}

function inferGrandeArea(
  topicName: string,
  keywords: string[]
): { grandeAreaId: GrandeAreaId; grandeAreaName: string } {
  const haystack = normalizeMedicalText(`${topicName} ${keywords.join(' ')}`);

  if (
    /(obstetric|ginecolog|pre natal|parto|hipertensiv|eclampsia|anticoncep|sua|sangramento uterino|vulvovaginit|mama|colo uterino)/.test(
      haystack
    )
  ) {
    return {
      grandeAreaId: 'ginecologia_obstetricia',
      grandeAreaName: 'Ginecologia e Obstetrícia',
    };
  }
  if (
    /(neonat|pediatr|puericult|imunizac|vacin|aleitamento|reanimacao neonatal|oncologia pediatrica|doencas metabolicas)/.test(
      haystack
    )
  ) {
    return { grandeAreaId: 'pediatria', grandeAreaName: 'Pediatria' };
  }
  if (
    /(epidemiolog|sus|atencao primaria|saude coletiva|vigilancia|bioestat|politicas de saude)/.test(
      haystack
    )
  ) {
    return {
      grandeAreaId: 'medicina_preventiva',
      grandeAreaName: 'Medicina Preventiva e Social',
    };
  }
  if (
    /(trauma|abdome agudo|cirurg|ortoped|urolog|oftalmo|otorrino|plastica|hernia|atls)/.test(
      haystack
    )
  ) {
    return { grandeAreaId: 'cirurgia_geral', grandeAreaName: 'Cirurgia Geral' };
  }

  return { grandeAreaId: 'clinica_medica', grandeAreaName: 'Clínica Médica' };
}

function getShortTopicName(label: string): string {
  const map: Record<string, string> = {
    'Trauma e Abdome Agudo': 'Trauma / Abdome',
    'Pré-Natal e Alto Risco': 'Pré-Natal',
    'Pré-Natal e Síndromes Hipertensivas': 'Pré-Natal / SHG',
    'Síndromes Hipertensivas': 'Síndr. Hipert.',
    'Atenção Primária e SUS': 'APS / SUS',
    'Epidemiologia e Bioestatística': 'Epidemiologia',
    'Epidemiologia e SUS': 'Epidem. / SUS',
    'Assistência ao Parto': 'Assist. Parto',
    'Anticoncepção e SUA': 'Anticonc. / SUA',
    'Puericultura e Vacinas': 'Pueric. / Vacinas',
    'Neonatologia e Imunizações': 'Neo / Imuniz.',
    'Subespecialidades Cirúrgicas': 'Subesp. Cirúrg.',
    'Oftalmologia / Otorrino': 'Oftalmo / ORL',
    'Oftalmologia e Otorrino': 'Oftalmo / ORL',
    'Doenças Metabólicas Raras': 'Metab. Raras',
    'Oncologia Pediátrica': 'Oncopediatria',
    'Genética e Doenças Raras': 'Genética / Raras',
    'Neurologia e Psiquiatria': 'Neuro / Psiq',
    'Hematologia, Ortopedia e Urologia': 'Hemato / Orto',
  };
  return map[label] ?? label;
}

function resolveStudentMetrics(
  topicName: string,
  keywords: string[],
  topicRows: PerformanceRow[]
): {
  answered: number;
  correct: number;
  studentPct: number | null;
  communityMedianPct: number | null;
  delta: number | null;
  matchedTema?: string;
  grandeAreaId?: GrandeAreaId;
  grandeAreaName?: string;
} {
  const normTopic = normalizeMedicalText(topicName);
  const normKeywords = keywords.map(normalizeMedicalText).filter(Boolean);

  const exact = topicRows.find((r) => normalizeMedicalText(r.label) === normTopic);
  if (exact) {
    return {
      answered: exact.answered,
      correct: exact.correct,
      studentPct: exact.studentPct,
      communityMedianPct: exact.communityMedianPct,
      delta: exact.delta,
      matchedTema: exact.label,
      grandeAreaId: exact.grandeAreaId,
      grandeAreaName: exact.parentArea,
    };
  }

  const matched = topicRows.filter((row) => {
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

  if (matched.length === 0) {
    return {
      answered: 0,
      correct: 0,
      studentPct: null,
      communityMedianPct: null,
      delta: null,
    };
  }

  const answered = matched.reduce((sum, r) => sum + r.answered, 0);
  const correct = matched.reduce((sum, r) => sum + r.correct, 0);
  const studentPct =
    answered > 0 ? Number(((correct / answered) * 100).toFixed(1)) : null;
  const communityMedianPct =
    answered > 0
      ? Number(
          (
            matched.reduce((sum, r) => sum + r.communityMedianPct * r.answered, 0) /
            answered
          ).toFixed(1)
        )
      : matched[0].communityMedianPct;
  const delta =
    studentPct !== null
      ? Number((studentPct - communityMedianPct).toFixed(1))
      : null;

  const priorityRow = [...matched].sort((a, b) => a.studentPct - b.studentPct)[0];

  return {
    answered,
    correct,
    studentPct,
    communityMedianPct,
    delta,
    matchedTema: priorityRow.label,
    grandeAreaId: priorityRow.grandeAreaId,
    grandeAreaName: priorityRow.parentArea,
  };
}

function getCellSurfaceClass(
  tier: IncidenceTier,
  volumeBand: VolumeBandId,
  hasCritical: boolean,
  hasItems: boolean
): string {
  if (!hasItems) {
    return 'bg-slate-50/40 dark:bg-slate-950/30';
  }
  if (tier === 'alta') {
    if (volumeBand === 'sem_treino') {
      return 'bg-red-50/75 dark:bg-red-950/30';
    }
    if (volumeBand === 'baixo' || hasCritical) {
      return 'bg-red-50/45 dark:bg-red-950/20';
    }
    if (volumeBand === 'medio') {
      return 'bg-amber-50/40 dark:bg-amber-950/15';
    }
    return 'bg-emerald-50/45 dark:bg-emerald-950/15';
  }
  if (tier === 'media') {
    if (volumeBand === 'sem_treino' || volumeBand === 'baixo') {
      return 'bg-amber-50/35 dark:bg-amber-950/15';
    }
    return 'bg-sky-50/35 dark:bg-sky-950/15';
  }
  return 'bg-slate-50/60 dark:bg-slate-900/50';
}

function getTileClasses(status: GapStatus, isSelected: boolean): string {
  const base =
    'w-full rounded-lg border px-2.5 py-2 text-left transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500';
  const selectedRing = isSelected
    ? 'ring-2 ring-sky-500 ring-offset-1 dark:ring-offset-slate-900'
    : '';

  if (status === 'critica') {
    return cn(
      base,
      'border-red-200 bg-white hover:border-red-300 hover:bg-red-50/70 dark:border-red-900/70 dark:bg-slate-900 dark:hover:border-red-700 dark:hover:bg-red-950/40',
      selectedRing
    );
  }
  if (status === 'atencao') {
    return cn(
      base,
      'border-amber-200 bg-white hover:border-amber-300 hover:bg-amber-50/70 dark:border-amber-900/70 dark:bg-slate-900 dark:hover:border-amber-700 dark:hover:bg-amber-950/30',
      selectedRing
    );
  }
  if (status === 'dominado') {
    return cn(
      base,
      'border-emerald-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/70 dark:border-emerald-900/70 dark:bg-slate-900 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30',
      selectedRing
    );
  }
  return cn(
    base,
    'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800/60',
    selectedRing
  );
}

export function KnowledgeGapHeatmap({
  initialBoard,
  topicRows,
  onFilterQuestionsByTopic,
  onFilterFlashcardsByTopic,
  bankVersion = 0,
}: KnowledgeGapHeatmapProps) {
  const [selectedBoard, setSelectedBoard] = useState<ExamBoard>(initialBoard);
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const allItems = useMemo<HeatmapTopicItem[]>(() => {
    const effectiveTopics = getEffectiveBoardTopics(selectedBoard);
    const defaultRules =
      BOARD_INCIDENCE_MATRIX[selectedBoard] ?? BOARD_INCIDENCE_MATRIX.GERAL;
    const profile = buildBoardParetoProfile(
      selectedBoard,
      effectiveTopics,
      defaultRules
    );
    const topicById = new Map(effectiveTopics.map((t) => [t.id, t]));

    return profile.orderedTopicIds
      .map((id): HeatmapTopicItem | null => {
        const meta = topicById.get(id);
        const stat = profile.byTopicId[id];
        if (!meta || !stat) return null;

        const metrics = resolveStudentMetrics(meta.topic, meta.keywords, topicRows);
        const inferred = inferGrandeArea(meta.topic, meta.keywords);
        const grandeAreaId = metrics.grandeAreaId ?? inferred.grandeAreaId;
        const grandeAreaName = metrics.grandeAreaName ?? inferred.grandeAreaName;
        const volumeBand = getVolumeBand(metrics.answered);

        const isLowVolume = metrics.answered < LOW_VOLUME_THRESHOLD;
        const isLowAccuracy =
          metrics.studentPct === null ||
          metrics.studentPct < MASTERY_ACCURACY_THRESHOLD;

        const gapReasons: string[] = [];
        if (metrics.answered === 0) {
          gapReasons.push('Sem questões respondidas');
        } else if (isLowVolume) {
          gapReasons.push(`Baixo volume (${metrics.answered}q < ${LOW_VOLUME_THRESHOLD}q)`);
        }
        if (metrics.studentPct !== null && metrics.studentPct < MASTERY_ACCURACY_THRESHOLD) {
          gapReasons.push(
            `Acerto abaixo de ${MASTERY_ACCURACY_THRESHOLD}% (${metrics.studentPct.toFixed(1).replace('.', ',')}%)`
          );
        }

        const isCriticalGap = meta.tier === 'alta' && (isLowVolume || isLowAccuracy);

        let status: GapStatus;
        if (isCriticalGap) {
          status = 'critica';
        } else if (meta.tier === 'baixa') {
          status = 'baixa_prioridade';
        } else if (isLowVolume || isLowAccuracy) {
          status = 'atencao';
        } else {
          status = 'dominado';
        }

        // Severity ranking so the most urgent knowledge gap is auto-selected
        const accDeficit =
          metrics.studentPct === null
            ? 35
            : Math.max(0, MASTERY_ACCURACY_THRESHOLD - metrics.studentPct);
        const volDeficit = Math.max(0, LOW_VOLUME_THRESHOLD - metrics.answered) * 2.5;
        const tierMultiplier =
          meta.tier === 'alta' ? 3 : meta.tier === 'media' ? 1.4 : 0.4;
        const severityScore = Number(
          ((stat.individualPct + accDeficit + volDeficit) * tierMultiplier).toFixed(1)
        );

        return {
          id: meta.id,
          topic: meta.topic,
          shortLabel: getShortTopicName(meta.topic),
          tier: meta.tier,
          incidencePct: stat.individualPct,
          cumulativePct: stat.cumulativePct,
          isParetoCore: stat.isParetoCore,
          answered: metrics.answered,
          correct: metrics.correct,
          studentPct: metrics.studentPct,
          communityMedianPct: metrics.communityMedianPct,
          delta: metrics.delta,
          volumeBand,
          status,
          isCriticalGap,
          gapReasons,
          severityScore,
          grandeAreaId,
          grandeAreaName,
          matchedTema: metrics.matchedTema,
        };
      })
      .filter((item): item is HeatmapTopicItem => item !== null);
  }, [selectedBoard, topicRows, bankVersion]);

  const filteredItems = useMemo(() => {
    if (selectedArea === 'all') return allItems;
    return allItems.filter((item) => item.grandeAreaId === selectedArea);
  }, [allItems, selectedArea]);

  // Keep a valid, highest-priority topic selected whenever board or area changes
  useEffect(() => {
    if (filteredItems.length === 0) {
      setSelectedTopicId(null);
      return;
    }
    const stillVisible = filteredItems.some((item) => item.id === selectedTopicId);
    if (!stillVisible) {
      const mostUrgent = [...filteredItems].sort((a, b) => {
        if (a.isCriticalGap !== b.isCriticalGap) return a.isCriticalGap ? -1 : 1;
        return b.severityScore - a.severityScore;
      })[0];
      setSelectedTopicId(mostUrgent?.id ?? null);
    }
  }, [filteredItems, selectedTopicId]);

  const selectedTopic = useMemo(
    () => filteredItems.find((item) => item.id === selectedTopicId) ?? filteredItems[0] ?? null,
    [filteredItems, selectedTopicId]
  );

  const matrix = useMemo(() => {
    const map: Record<IncidenceTier, Record<VolumeBandId, HeatmapTopicItem[]>> = {
      alta: { sem_treino: [], baixo: [], medio: [], alto: [] },
      media: { sem_treino: [], baixo: [], medio: [], alto: [] },
      baixa: { sem_treino: [], baixo: [], medio: [], alto: [] },
    };

    for (const item of filteredItems) {
      map[item.tier][item.volumeBand].push(item);
    }

    // Sort items inside each cell by highest urgency / incidence first
    for (const tier of ['alta', 'media', 'baixa'] as const) {
      for (const band of ['sem_treino', 'baixo', 'medio', 'alto'] as const) {
        map[tier][band].sort((a, b) => b.severityScore - a.severityScore);
      }
    }

    return map;
  }, [filteredItems]);

  const criticalGapCount = useMemo(
    () => filteredItems.filter((i) => i.isCriticalGap).length,
    [filteredItems]
  );
  const masteredHighCount = useMemo(
    () =>
      filteredItems.filter((i) => i.tier === 'alta' && i.status === 'dominado').length,
    [filteredItems]
  );
  const totalHighCount = useMemo(
    () => filteredItems.filter((i) => i.tier === 'alta').length,
    [filteredItems]
  );

  return (
    <section
      aria-label="Mapa de Calor de Lacunas de Conhecimento"
      className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-5"
    >
      {/* Header + Quick Board Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Grid2x2 className="h-4 w-4 text-sky-600 dark:text-sky-400" />
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Mapa de Calor · Lacunas de Conhecimento (Incidência × Volume)
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Cruza a frequência dos temas na banca{' '}
            <strong className="font-semibold text-slate-700 dark:text-slate-200">
              {EXAM_BOARD_LABELS[selectedBoard]}
            </strong>{' '}
            com o volume respondido por você. Clique em qualquer tema para ver o diagnóstico e iniciar a revisão.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400">Banca:</span>
          <div
            role="group"
            aria-label="Selecionar banca no Mapa de Calor"
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

      {/* Grande Área Filter Bar + Live Critical Gap Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-y border-slate-100 py-3 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setSelectedArea('all')}
            aria-pressed={selectedArea === 'all'}
            className={cn(
              'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
              selectedArea === 'all'
                ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            )}
          >
            Todas as áreas
          </button>
          {GRANDES_AREAS.map((area) => {
            const active = selectedArea === area.id;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => setSelectedArea(area.id)}
                aria-pressed={active}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  active
                    ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                )}
              >
                {area.shortName}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tabular-nums">
          <span className="inline-flex items-center gap-1.5 font-semibold text-red-600 dark:text-red-400">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
            <span className="font-mono">{criticalGapCount}</span>
            <span>
              lacuna{criticalGapCount === 1 ? '' : 's'} crítica
              {criticalGapCount === 1 ? '' : 's'}
            </span>
          </span>
          <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">
            ·
          </span>
          <span className="text-slate-500 dark:text-slate-400">
            Alta incidência dominada:{' '}
            <strong className="font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              {masteredHighCount}/{totalHighCount}
            </strong>
          </span>
        </div>
      </div>

      {/* Semantic Legend (unboxed, paired with clear criteria) */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
          <span>Lacuna Crítica (Alta inc. · &lt;{LOW_VOLUME_THRESHOLD}q ou acerto &lt;{MASTERY_ACCURACY_THRESHOLD}%)</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
          <span>Em Atenção</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Dominado (≥{LOW_VOLUME_THRESHOLD}q e ≥{MASTERY_ACCURACY_THRESHOLD}%)</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Minus className="h-3.5 w-3.5 text-slate-400" />
          <span>Baixa Prioridade</span>
        </span>
      </div>

      {/* Main Split-View: 2D Matrix (left 8 cols) + Topic Summary Panel (right 4 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 items-start">
        {/* 2D Matrix Grid */}
        <div className="xl:col-span-8 overflow-x-auto">
          <div className="min-w-[660px] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            {/* Matrix Column Header */}
            <div className="grid grid-cols-[146px_repeat(4,minmax(0,1fr))] border-b border-slate-200 bg-slate-50/90 dark:border-slate-800 dark:bg-slate-950/70">
              <div className="px-3.5 py-3 text-[11px] font-semibold text-slate-500 dark:text-slate-400 flex flex-col justify-center">
                <span>Incidência ↓</span>
                <span>Volume →</span>
              </div>
              {VOLUME_COLUMNS.map((col) => (
                <div
                  key={col.id}
                  className="border-l border-slate-200 px-3 py-3 dark:border-slate-800"
                >
                  <p className="font-mono text-xs font-bold tabular-nums text-slate-900 dark:text-slate-100">
                    {col.title}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {col.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Matrix Rows (Alta / Média / Baixa Incidência) */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {INCIDENCE_ROWS.map((row) => (
                <div
                  key={row.tier}
                  className="grid grid-cols-[146px_repeat(4,minmax(0,1fr))]"
                >
                  {/* Row Axis Label */}
                  <div className="px-3.5 py-3.5 bg-slate-50/60 dark:bg-slate-950/40 flex flex-col justify-start gap-0.5">
                    <p
                      className={cn(
                        'text-xs font-bold',
                        row.tier === 'alta'
                          ? 'text-slate-900 dark:text-white'
                          : row.tier === 'media'
                          ? 'text-slate-700 dark:text-slate-200'
                          : 'text-slate-500 dark:text-slate-400'
                      )}
                    >
                      {row.title}
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tabular-nums">
                      {row.subtitle}
                    </p>
                  </div>

                  {/* 4 Volume Cells */}
                  {VOLUME_COLUMNS.map((col) => {
                    const cellItems = matrix[row.tier][col.id];
                    const hasCritical = cellItems.some((i) => i.isCriticalGap);
                    return (
                      <div
                        key={col.id}
                        className={cn(
                          'border-l border-slate-200 p-2.5 dark:border-slate-800 min-h-[104px] flex flex-col gap-1.5 transition-colors',
                          getCellSurfaceClass(
                            row.tier,
                            col.id,
                            hasCritical,
                            cellItems.length > 0
                          )
                        )}
                      >
                        {cellItems.length === 0 ? (
                          <div className="flex-1 flex items-center justify-center text-xs font-mono text-slate-300 dark:text-slate-700 select-none">
                            —
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center justify-between px-0.5 text-[10px] font-mono tabular-nums text-slate-400 dark:text-slate-500">
                              <span>
                                {cellItems.length}{' '}
                                {cellItems.length === 1 ? 'tema' : 'temas'}
                              </span>
                              {hasCritical && (
                                <span className="font-sans font-semibold text-red-600 dark:text-red-400">
                                  Crítico
                                </span>
                              )}
                            </div>

                            <div className="space-y-1.5">
                              {cellItems.map((item) => {
                                const isSelected = selectedTopic?.id === item.id;
                                return (
                                  <button
                                    key={item.id}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setSelectedTopicId(item.id)}
                                    className={getTileClasses(
                                      item.status,
                                      isSelected
                                    )}
                                  >
                                    <div className="flex items-start justify-between gap-1.5">
                                      <span className="text-[11px] font-semibold leading-snug text-slate-900 dark:text-slate-100 line-clamp-2">
                                        {item.shortLabel}
                                      </span>
                                      {item.status === 'critica' && (
                                        <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
                                      )}
                                      {item.status === 'atencao' && (
                                        <Clock className="h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                                      )}
                                      {item.status === 'dominado' && (
                                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                                      )}
                                    </div>
                                    <div className="mt-1 flex items-center justify-between font-mono text-[10px] tabular-nums text-slate-500 dark:text-slate-400">
                                      <span>{item.answered}q</span>
                                      <span
                                        className={cn(
                                          'font-semibold',
                                          item.studentPct === null
                                            ? 'text-slate-400 dark:text-slate-500'
                                            : item.studentPct <
                                              MASTERY_ACCURACY_THRESHOLD
                                            ? 'text-red-600 dark:text-red-400'
                                            : 'text-emerald-600 dark:text-emerald-400'
                                        )}
                                      >
                                        {item.studentPct !== null
                                          ? `${item.studentPct.toFixed(0)}%`
                                          : 'Sem dados'}
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary & Remediation Panel */}
        <aside
          aria-label="Resumo do tema selecionado no Mapa de Calor"
          className="xl:col-span-4 rounded-xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-950/60 space-y-4"
        >
          {selectedTopic ? (
            <>
              {/* Topic Identification */}
              <div className="space-y-1.5 border-b border-slate-200 pb-3.5 dark:border-slate-800">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-sky-700 dark:text-sky-400">
                    {selectedTopic.grandeAreaName}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">
                    {EXAM_BOARD_LABELS[selectedBoard]} ·{' '}
                    {selectedTopic.incidencePct.toFixed(1).replace('.', ',')}%
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {selectedTopic.topic}
                </h3>

                {/* Explicit Diagnostic Status */}
                <div
                  className={cn(
                    'pt-1 flex items-start gap-2 text-xs leading-relaxed',
                    selectedTopic.status === 'critica' &&
                      'text-red-700 dark:text-red-400',
                    selectedTopic.status === 'atencao' &&
                      'text-amber-800 dark:text-amber-300',
                    selectedTopic.status === 'dominado' &&
                      'text-emerald-700 dark:text-emerald-400',
                    selectedTopic.status === 'baixa_prioridade' &&
                      'text-slate-600 dark:text-slate-400'
                  )}
                >
                  {selectedTopic.status === 'critica' && (
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  )}
                  {selectedTopic.status === 'atencao' && (
                    <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                  )}
                  {selectedTopic.status === 'dominado' && (
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                  )}
                  {selectedTopic.status === 'baixa_prioridade' && (
                    <Minus className="h-4 w-4 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold">
                      {selectedTopic.status === 'critica'
                        ? 'Lacuna Crítica de Conhecimento'
                        : selectedTopic.status === 'atencao'
                        ? 'Tema em Atenção'
                        : selectedTopic.status === 'dominado'
                        ? 'Domínio Consolidado'
                        : 'Baixa Prioridade na Banca'}
                    </p>
                    <p className="mt-0.5 text-slate-600 dark:text-slate-400">
                      {selectedTopic.gapReasons.length > 0
                        ? selectedTopic.gapReasons.join(' · ')
                        : `Volume sólido (${selectedTopic.answered}q) com aproveitamento acima de ${MASTERY_ACCURACY_THRESHOLD}%.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2x2 Tabular Metrics Grid */}
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs tabular-nums">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Incidência ({EXAM_BOARD_LABELS[selectedBoard]})
                  </dt>
                  <dd className="mt-0.5 font-mono text-base font-bold text-slate-900 dark:text-white">
                    {selectedTopic.incidencePct.toFixed(1).replace('.', ',')}%
                  </dd>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {selectedTopic.isParetoCore
                      ? `Núcleo 80% (${selectedTopic.cumulativePct.toFixed(0)}% acum.)`
                      : `Acumulado ${selectedTopic.cumulativePct.toFixed(0)}%`}
                  </p>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Volume Respondido
                  </dt>
                  <dd className="mt-0.5 font-mono text-base font-bold text-slate-900 dark:text-white">
                    {selectedTopic.answered} questões
                  </dd>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Meta mínima: {LOW_VOLUME_THRESHOLD}q
                  </p>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Seu Aproveitamento
                  </dt>
                  <dd
                    className={cn(
                      'mt-0.5 font-mono text-base font-bold',
                      selectedTopic.studentPct === null
                        ? 'text-slate-400 dark:text-slate-500'
                        : selectedTopic.studentPct < MASTERY_ACCURACY_THRESHOLD
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    )}
                  >
                    {selectedTopic.studentPct !== null
                      ? `${selectedTopic.studentPct.toFixed(1).replace('.', ',')}%`
                      : 'Sem treino'}
                  </dd>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {selectedTopic.answered > 0
                      ? `${selectedTopic.correct}/${selectedTopic.answered} acertos`
                      : 'Nenhuma questão feita'}
                  </p>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Mediana (P50)
                  </dt>
                  <dd className="mt-0.5 font-mono text-base font-bold text-slate-700 dark:text-slate-200">
                    {selectedTopic.communityMedianPct !== null
                      ? `${selectedTopic.communityMedianPct.toFixed(1).replace('.', ',')}%`
                      : '—'}
                  </dd>
                  <p
                    className={cn(
                      'font-mono text-[11px] font-semibold',
                      selectedTopic.delta === null
                        ? 'text-slate-400 dark:text-slate-500'
                        : selectedTopic.delta >= 0
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-red-600 dark:text-red-400'
                    )}
                  >
                    {selectedTopic.delta !== null
                      ? `Delta ${formatDelta(selectedTopic.delta)}`
                      : 'Sem comparativo'}
                  </p>
                </div>
              </dl>

              {/* Accuracy vs. 70% Mastery Benchmark Bar */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-[11px] tabular-nums">
                  <span className="text-slate-500 dark:text-slate-400">
                    Domínio vs. piso de {MASTERY_ACCURACY_THRESHOLD}%
                  </span>
                  <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">
                    {selectedTopic.studentPct !== null
                      ? `${selectedTopic.studentPct.toFixed(0)}% / ${MASTERY_ACCURACY_THRESHOLD}%`
                      : `0% / ${MASTERY_ACCURACY_THRESHOLD}%`}
                  </span>
                </div>
                <div className="relative h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all duration-300',
                      selectedTopic.studentPct === null
                        ? 'bg-slate-300 dark:bg-slate-700'
                        : selectedTopic.studentPct < MASTERY_ACCURACY_THRESHOLD
                        ? 'bg-red-500'
                        : 'bg-emerald-500'
                    )}
                    style={{
                      width: `${Math.min(100, Math.max(0, selectedTopic.studentPct ?? 0))}%`,
                    }}
                  />
                  <span
                    aria-hidden="true"
                    title={`Corte de domínio (${MASTERY_ACCURACY_THRESHOLD}%)`}
                    className="absolute top-0 bottom-0 w-0.5 bg-slate-900/70 dark:bg-white/80"
                    style={{ left: `${MASTERY_ACCURACY_THRESHOLD}%` }}
                  />
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  onClick={() =>
                    onFilterQuestionsByTopic({
                      topicLabel: selectedTopic.topic,
                      matchedTema: selectedTopic.matchedTema,
                      grandeAreaId: selectedTopic.grandeAreaId,
                    })
                  }
                  className="w-full justify-center"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Estudar Questões do Tema</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() =>
                    onFilterFlashcardsByTopic({
                      topicLabel: selectedTopic.topic,
                      matchedTema: selectedTopic.matchedTema,
                      grandeAreaId: selectedTopic.grandeAreaId,
                    })
                  }
                  className="w-full justify-center"
                >
                  <Layers className="h-4 w-4" />
                  <span>Revisar Flashcards do Tema</span>
                </Button>
              </div>
            </>
          ) : (
            <div className="py-10 text-center space-y-2">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Nenhum tema encontrado neste filtro
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Selecione &ldquo;Todas as áreas&rdquo; ou alterne a banca para visualizar o mapa de calor completo.
              </p>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}
