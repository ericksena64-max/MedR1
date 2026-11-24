import React, { useEffect, useMemo, useState } from 'react';
import {
  X,
  Search,
  Plus,
  RotateCcw,
  Trash2,
  SlidersHorizontal,
  BarChart3,
  Check,
} from 'lucide-react';
import type { ExamBoard } from '../../types/medical';
import {
  BOARD_INCIDENCE_MATRIX,
  EXAM_BOARD_LABELS,
  addCustomExamTopic,
  getBoardCustomizationCount,
  getEffectiveBoardTopics,
  normalizeMedicalText,
  recalculateBoardWeightsFromPareto,
  removeCustomExamTopic,
  resetBoardWeights,
  setExamTopicTier,
  type EffectiveBoardTopic,
  type IncidenceTier,
} from '../../lib/examWeights';
import {
  PARETO_HIGH_CUTOFF_PCT,
  PARETO_MIN_QUESTIONS,
  buildBoardParetoProfile,
} from '../../lib/paretoCalculator';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface ExamWeightsModalProps {
  open: boolean;
  initialBoard: ExamBoard;
  onClose: () => void;
  onWeightsChange: () => void;
}

type TierFilter = 'todos' | IncidenceTier;

const BOARD_TABS: Array<{ value: ExamBoard; label: string; subtitle: string }> = [
  { value: 'UEPA', label: 'UEPA', subtitle: 'Foco Amazônia / Endêmicas & Atenção Primária' },
  { value: 'ENARE', label: 'ENARE', subtitle: 'Foco Nacional / Grandes Áreas & Diretrizes MS' },
  { value: 'GERAL', label: 'Geral', subtitle: 'Perfil equilibrado para múltiplas bancas' },
];

const TIER_SEGMENT_OPTIONS: Array<{
  tier: IncidenceTier;
  shortLabel: string;
  deltaLabel: string;
  baseLabel: string;
  activeClass: string;
}> = [
  {
    tier: 'alta',
    shortLabel: 'Alta',
    deltaLabel: '+3%',
    baseLabel: 'base 92%',
    activeClass:
      'bg-emerald-600 text-white shadow-sm dark:bg-emerald-500 dark:text-slate-950',
  },
  {
    tier: 'media',
    shortLabel: 'Média',
    deltaLabel: '0%',
    baseLabel: 'base 89%',
    activeClass:
      'bg-slate-800 text-white shadow-sm dark:bg-slate-200 dark:text-slate-950',
  },
  {
    tier: 'baixa',
    shortLabel: 'Baixa',
    deltaLabel: '-3%',
    baseLabel: 'base 86%',
    activeClass:
      'bg-amber-600 text-white shadow-sm dark:bg-amber-500 dark:text-slate-950',
  },
];

const TIER_ORDER: Record<IncidenceTier, number> = {
  alta: 0,
  media: 1,
  baixa: 2,
};

export function ExamWeightsModal({
  open,
  initialBoard,
  onClose,
  onWeightsChange,
}: ExamWeightsModalProps) {
  const [activeBoard, setActiveBoard] = useState<ExamBoard>(initialBoard);
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<TierFilter>('todos');
  const [newTopicName, setNewTopicName] = useState('');
  const [newTopicTier, setNewTopicTier] = useState<IncidenceTier>('alta');
  const [localTick, setLocalTick] = useState(0);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Sync active tab when modal opens
  useEffect(() => {
    if (open) {
      setActiveBoard(initialBoard);
      setSearchQuery('');
      setTierFilter('todos');
      setFeedbackMsg(null);
      setLocalTick((t) => t + 1);
    }
  }, [open, initialBoard]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const rawBoardTopics = useMemo<EffectiveBoardTopic[]>(() => {
    if (!open) return [];
    return getEffectiveBoardTopics(activeBoard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, activeBoard, localTick]);

  const paretoProfile = useMemo(() => {
    if (!open) return null;
    return buildBoardParetoProfile(
      activeBoard,
      rawBoardTopics,
      BOARD_INCIDENCE_MATRIX[activeBoard] ?? BOARD_INCIDENCE_MATRIX.GERAL
    );
  }, [open, activeBoard, rawBoardTopics]);

  const boardTopics = useMemo<EffectiveBoardTopic[]>(() => {
    if (!open) return [];
    if (!paretoProfile) return rawBoardTopics;
    const orderIndex = new Map(
      paretoProfile.orderedTopicIds.map((id, idx) => [id, idx])
    );
    return [...rawBoardTopics].sort((a, b) => {
      const idxA = orderIndex.get(a.id) ?? Number.MAX_SAFE_INTEGER;
      const idxB = orderIndex.get(b.id) ?? Number.MAX_SAFE_INTEGER;
      if (idxA !== idxB) return idxA - idxB;
      if (TIER_ORDER[a.tier] !== TIER_ORDER[b.tier]) {
        return TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
      }
      return a.topic.localeCompare(b.topic, 'pt-BR');
    });
  }, [open, rawBoardTopics, paretoProfile]);

  const boardCustomCounts = useMemo<Record<ExamBoard, number>>(() => {
    if (!open) return { UEPA: 0, ENARE: 0, GERAL: 0 };
    return {
      UEPA: getBoardCustomizationCount('UEPA'),
      ENARE: getBoardCustomizationCount('ENARE'),
      GERAL: getBoardCustomizationCount('GERAL'),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, localTick]);

  const tierCounts = useMemo(() => {
    const counts = { todos: boardTopics.length, alta: 0, media: 0, baixa: 0 };
    for (const item of boardTopics) {
      counts[item.tier] += 1;
    }
    return counts;
  }, [boardTopics]);

  const visibleTopics = useMemo(() => {
    const q = normalizeMedicalText(searchQuery);
    return boardTopics.filter((item) => {
      if (tierFilter !== 'todos' && item.tier !== tierFilter) return false;
      if (!q) return true;
      const haystack = normalizeMedicalText(
        `${item.topic} ${item.keywords.join(' ')}`
      );
      return haystack.includes(q);
    });
  }, [boardTopics, searchQuery, tierFilter]);

  if (!open) return null;

  const activeBoardMeta =
    BOARD_TABS.find((b) => b.value === activeBoard) ?? BOARD_TABS[0];

  const notifyUpdate = (msg?: string) => {
    setLocalTick((t) => t + 1);
    onWeightsChange();
    if (msg) {
      setFeedbackMsg(msg);
      window.setTimeout(() => {
        setFeedbackMsg((cur) => (cur === msg ? null : cur));
      }, 2400);
    }
  };

  const handleToggleTier = (item: EffectiveBoardTopic, nextTier: IncidenceTier) => {
    if (item.tier === nextTier) return;
    setExamTopicTier(activeBoard, item.id, nextTier, item.isCustom);
    notifyUpdate();
  };

  const handleAddTopic = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = newTopicName.trim();
    if (!cleaned) return;
    addCustomExamTopic(activeBoard, cleaned, newTopicTier);
    setNewTopicName('');
    notifyUpdate(`"${cleaned}" salvo na matriz ${EXAM_BOARD_LABELS[activeBoard]}.`);
  };

  const handleRemoveCustom = (item: EffectiveBoardTopic) => {
    removeCustomExamTopic(activeBoard, item.id);
    notifyUpdate(`"${item.topic}" removido.`);
  };

  const handleResetBoard = () => {
    resetBoardWeights(activeBoard);
    notifyUpdate(`Padrão da banca ${EXAM_BOARD_LABELS[activeBoard]} restaurado.`);
  };

  const handleRecalculatePareto = () => {
    const result = recalculateBoardWeightsFromPareto(activeBoard);
    const boardLabel = EXAM_BOARD_LABELS[activeBoard];
    if (result.usedFallback) {
      notifyUpdate(
        `${boardLabel}: ${result.totalQuestions}/${PARETO_MIN_QUESTIONS} questões no banco — mantida a matriz padrão (fallback).`
      );
    } else {
      notifyUpdate(
        `Pareto 80/20 recalculado com ${result.totalQuestions} questões do banco (${boardLabel}).`
      );
    }
  };

  const activeCustomCount = boardCustomCounts[activeBoard];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-[2px] p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exam-weights-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Modal Header */}
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-sky-600 dark:text-sky-400" />
              <h2
                id="exam-weights-modal-title"
                className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white"
              >
                Matriz de Incidência por Banca
              </h2>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ajuste o peso de cada tema na calibração dinâmica do FSRS (base 89% ± 3%, com trava 85%–95%).
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        {/* Board Tabs + Add Topic Form + Search/Filter Controls */}
        <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-4 sm:px-6 dark:border-slate-800 dark:bg-slate-950/40 space-y-3.5">
          {/* Board Switcher Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div
              role="tablist"
              aria-label="Selecionar banca para edição"
              className="inline-flex rounded-lg bg-slate-200/70 p-1 dark:bg-slate-800"
            >
              {BOARD_TABS.map((tab) => {
                const isSelected = activeBoard === tab.value;
                const customCount = boardCustomCounts[tab.value];
                return (
                  <button
                    key={tab.value}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setActiveBoard(tab.value);
                      setFeedbackMsg(null);
                    }}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                      isSelected
                        ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    )}
                  >
                    <span>{tab.label}</span>
                    {customCount > 0 && (
                      <span className="font-mono text-[10px] font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                        ({customCount})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {activeBoardMeta.subtitle}
            </span>
          </div>

          {/* Dynamic Pareto 80/20 Status Strip + Recalculate Action */}
          {paretoProfile && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start sm:items-center gap-2 text-xs min-w-0">
                <BarChart3
                  className={cn(
                    'h-4 w-4 shrink-0 mt-0.5 sm:mt-0',
                    paretoProfile.analysis.hasEnoughData
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-sky-600 dark:text-sky-400'
                  )}
                />
                <div className="min-w-0">
                  {paretoProfile.analysis.hasEnoughData ? (
                    <p className="text-slate-700 dark:text-slate-200">
                      <strong className="font-semibold text-emerald-700 dark:text-emerald-400">
                        Pareto 80/20 ativo
                      </strong>{' '}
                      <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                        · {paretoProfile.analysis.totalQuestions} questões no banco (Núcleo ≤80% = +3%, 80–95% = 0%, &gt;95% = -3%)
                      </span>
                    </p>
                  ) : (
                    <p className="text-slate-700 dark:text-slate-200">
                      <strong className="font-semibold text-sky-700 dark:text-sky-400">
                        Fallback na matriz padrão
                      </strong>{' '}
                      <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                        · {paretoProfile.analysis.totalQuestions}/{PARETO_MIN_QUESTIONS} questões de{' '}
                        {EXAM_BOARD_LABELS[activeBoard]} no banco (curva Pareto estimada)
                      </span>
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRecalculatePareto}
                className="shrink-0"
              >
                <BarChart3 className="h-3.5 w-3.5" />
                <span>Recalcular pelo Pareto do Banco</span>
              </Button>
            </div>
          )}

          {/* Compact 'Adicionar Tema' Form */}
          <form
            onSubmit={handleAddTopic}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-xl border border-slate-200 bg-white p-2.5 dark:border-slate-800 dark:bg-slate-900"
          >
            <input
              type="text"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
              placeholder="Adicionar novo tema ou subtema (ex.: Malária Grave, Hemorragia Pós-Parto)..."
              aria-label="Nome do novo tema ou subtema"
              className="h-9 flex-1 rounded-lg border border-slate-200 bg-slate-50/70 px-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
            <div className="flex items-center gap-2">
              <select
                value={newTopicTier}
                onChange={(e) => setNewTopicTier(e.target.value as IncidenceTier)}
                aria-label="Incidência do novo tema"
                className="h-9 rounded-lg border border-slate-200 bg-white px-2.5 text-xs font-medium text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <option value="alta">Alta (+3% · base 92%)</option>
                <option value="media">Média (0% · base 89%)</option>
                <option value="baixa">Baixa (-3% · base 86%)</option>
              </select>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={!newTopicName.trim()}
                className="h-9 shrink-0"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Adicionar Tema</span>
              </Button>
            </div>
          </form>

          {/* Search & Weight Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center gap-2.5">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar tema ou palavra-chave (ex.: Dengue, Trauma, Parto)..."
                aria-label="Buscar tema na matriz de incidência"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-8 pr-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <div
              role="group"
              aria-label="Filtrar temas por peso"
              className="flex flex-wrap items-center gap-1"
            >
              {(
                [
                  { value: 'todos', label: 'Todos', count: tierCounts.todos },
                  { value: 'alta', label: 'Alta +3%', count: tierCounts.alta },
                  { value: 'media', label: 'Média 0%', count: tierCounts.media },
                  { value: 'baixa', label: 'Baixa -3%', count: tierCounts.baixa },
                ] as Array<{ value: TierFilter; label: string; count: number }>
              ).map((flt) => {
                const active = tierFilter === flt.value;
                return (
                  <button
                    key={flt.value}
                    type="button"
                    onClick={() => setTierFilter(flt.value)}
                    aria-pressed={active}
                    className={cn(
                      'rounded-lg px-2.5 py-1.5 text-[11px] font-semibold tabular-nums transition-colors cursor-pointer whitespace-nowrap',
                      active
                        ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                    )}
                  >
                    {flt.label} ({flt.count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scrollable Topic List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-200 dark:divide-slate-800">
          {visibleTopics.length === 0 ? (
            <div className="px-6 py-12 text-center space-y-1.5">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Nenhum tema encontrado para esse filtro.
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Você pode cadastrá-lo diretamente no campo &ldquo;Adicionar Tema&rdquo; acima.
              </p>
            </div>
          ) : (
            visibleTopics.map((item, idx) => {
              const previewKeywords = !item.isCustom
                ? item.keywords
                    .filter((kw) => kw !== normalizeMedicalText(item.topic))
                    .slice(0, 4)
                : [];
              const paretoStat = paretoProfile?.byTopicId[item.id];
              const isParetoCutHere =
                paretoProfile?.paretoCutTopicId === item.id &&
                idx < visibleTopics.length - 1;

              return (
                <React.Fragment key={item.id}>
                  <div
                    className={cn(
                      'flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 sm:px-6 transition-colors',
                      item.isEdited
                        ? 'bg-sky-50/50 dark:bg-sky-950/20'
                        : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/30'
                    )}
                  >
                    {/* Topic Info + Pareto % & Cumulative % */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        {item.isEdited && (
                          <span
                            className="h-2 w-2 rounded-full bg-sky-500 shrink-0"
                            aria-hidden="true"
                          />
                        )}
                        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {item.topic}
                        </span>

                        {paretoStat && (
                          <span
                            title={
                              paretoStat.isEstimated
                                ? 'Percentual estimado pela matriz padrão (< 10 questões no banco)'
                                : `Frequência real no banco: ${paretoStat.count} questão(ões)`
                            }
                            className={cn(
                              'font-mono text-[11px] tabular-nums',
                              paretoStat.isParetoCore
                                ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                                : paretoStat.cumulativePct > 95
                                ? 'text-amber-700 dark:text-amber-400'
                                : 'text-slate-500 dark:text-slate-400'
                            )}
                          >
                            {paretoStat.isEstimated ? 'Est. ' : ''}
                            {paretoStat.individualPct.toFixed(1).replace('.', ',')}% · Acum.{' '}
                            {paretoStat.cumulativePct.toFixed(1).replace('.', ',')}%
                            {paretoStat.count > 0 ? ` (${paretoStat.count}q)` : ''}
                          </span>
                        )}

                        {item.isCustom ? (
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
                            · Personalizado
                          </span>
                        ) : item.isEdited ? (
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
                            · Editado
                          </span>
                        ) : null}

                        {/* Revert single edited default topic */}
                        {!item.isCustom && item.isEdited && item.defaultTier && (
                          <button
                            type="button"
                            onClick={() => handleToggleTier(item, item.defaultTier!)}
                            title="Voltar ao peso padrão deste tema"
                            className="inline-flex items-center gap-0.5 text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
                          >
                            <RotateCcw className="h-3 w-3" />
                            <span>Padrão</span>
                          </button>
                        )}

                        {/* Delete user-created custom topic */}
                        {item.isCustom && (
                          <button
                            type="button"
                            onClick={() => handleRemoveCustom(item)}
                            title="Remover tema personalizado"
                            aria-label={`Remover ${item.topic}`}
                            className="inline-flex items-center gap-0.5 text-[11px] font-medium text-slate-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
                          >
                            <Trash2 className="h-3 w-3" />
                            <span>Remover</span>
                          </button>
                        )}
                      </div>

                      {/* Micro Pareto cumulative progress bar + keyword hint */}
                      <div className="flex flex-wrap items-center gap-3">
                        {paretoStat && (
                          <div
                            className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800"
                            aria-hidden="true"
                          >
                            <div
                              className={cn(
                                'h-full rounded-full transition-all',
                                paretoStat.isParetoCore
                                  ? 'bg-emerald-500'
                                  : paretoStat.cumulativePct > 95
                                  ? 'bg-amber-500'
                                  : 'bg-slate-400 dark:bg-slate-500'
                              )}
                              style={{ width: `${Math.min(100, paretoStat.cumulativePct)}%` }}
                            />
                          </div>
                        )}
                        {previewKeywords.length > 0 && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-md">
                            Inclui: {previewKeywords.join(', ')}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* 1-Click 3-Tier Segmented Control */}
                    <div
                      role="group"
                      aria-label={`Peso de incidência para ${item.topic}`}
                      className="inline-flex shrink-0 rounded-lg border border-slate-200 bg-slate-100/80 p-0.5 dark:border-slate-700 dark:bg-slate-950/70 self-start sm:self-center"
                    >
                      {TIER_SEGMENT_OPTIONS.map((opt) => {
                        const active = item.tier === opt.tier;
                        return (
                          <button
                            key={opt.tier}
                            type="button"
                            onClick={() => handleToggleTier(item, opt.tier)}
                            aria-pressed={active}
                            className={cn(
                              'flex flex-col items-center justify-center rounded-md px-2.5 py-1 text-center transition-colors cursor-pointer whitespace-nowrap',
                              active
                                ? opt.activeClass
                                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                            )}
                          >
                            <span className="text-[11px] font-bold leading-tight">
                              {opt.shortLabel} ({opt.deltaLabel})
                            </span>
                            <span
                              className={cn(
                                'font-mono text-[9px] tabular-nums leading-tight',
                                active
                                  ? 'opacity-90'
                                  : 'text-slate-400 dark:text-slate-500'
                              )}
                            >
                              {opt.baseLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Visual 80% Pareto Cutoff Divider Line */}
                  {isParetoCutHere && (
                    <div
                      role="separator"
                      aria-label={`Corte Pareto ${PARETO_HIGH_CUTOFF_PCT}%`}
                      className="flex items-center gap-3 bg-emerald-50/60 px-5 py-2 sm:px-6 dark:bg-emerald-950/25"
                    >
                      <div className="h-px flex-1 border-t border-dashed border-emerald-400 dark:border-emerald-700" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 whitespace-nowrap tabular-nums">
                        Corte Pareto · {PARETO_HIGH_CUTOFF_PCT}% (Núcleo de Alta Incidência acima)
                      </span>
                      <div className="h-px flex-1 border-t border-dashed border-emerald-400 dark:border-emerald-700" />
                    </div>
                  )}
                </React.Fragment>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <footer className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 bg-slate-50/70 px-5 py-3.5 sm:px-6 dark:border-slate-800 dark:bg-slate-950/50">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={activeCustomCount === 0}
              onClick={handleResetBoard}
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Restaurar Padrão da Banca ({EXAM_BOARD_LABELS[activeBoard]})</span>
            </Button>

            {feedbackMsg && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                <Check className="h-3.5 w-3.5" />
                <span>{feedbackMsg}</span>
              </span>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
              {boardTopics.length} temas
              {activeCustomCount > 0 ? ` · ${activeCustomCount} ajustado(s)` : ''}
            </span>
            <Button type="button" variant="primary" size="sm" onClick={onClose}>
              Concluir e Recalcular
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
}
