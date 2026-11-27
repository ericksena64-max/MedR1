import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ChevronRight,
  Layers,
  Play,
  RotateCcw,
  Search,
} from 'lucide-react';
import type {
  GrandeAreaId,
  MedicalQuestion,
  StudentFilterStatus,
  UserAnswerRecord,
} from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  buildExamScopeOptions,
  computeTaxonomyBreakdown,
} from '../../lib/taxonomyAnalytics';
import { normalizeTaxonomyText } from '../../lib/taxonomyClassifier';
import { Select } from '../ui/Select';
import { cn } from '../../lib/utils';

export interface PracticeTaxonomyPayload {
  topicLabel: string;
  matchedTema?: string;
  matchedSubtema?: string;
  grandeAreaId?: GrandeAreaId;
  instituicao?: string;
  ano?: string;
  status?: StudentFilterStatus;
}

interface TaxonomyAnalyticsCardProps {
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  onPracticeTaxonomy: (payload: PracticeTaxonomyPayload) => void;
}

export function TaxonomyAnalyticsCard({
  questions,
  answers,
  onPracticeTaxonomy,
}: TaxonomyAnalyticsCardProps) {
  const [examScope, setExamScope] = useState<string>('all');
  const [selectedAreaId, setSelectedAreaId] = useState<GrandeAreaId | ''>('');
  const [selectedTema, setSelectedTema] = useState<string>('');
  const [excludeAnnulled, setExcludeAnnulled] = useState<boolean>(false);
  const [subtemaSearch, setSubtemaSearch] = useState<string>('');
  const [showAllTemas, setShowAllTemas] = useState<boolean>(false);
  const [showAllSubtemas, setShowAllSubtemas] = useState<boolean>(false);

  const examScopeOptions = useMemo(
    () => buildExamScopeOptions(questions, excludeAnnulled),
    [questions, excludeAnnulled]
  );

  const activeExamMeta = useMemo(
    () => examScopeOptions.find((opt) => opt.value === examScope),
    [examScopeOptions, examScope]
  );

  const breakdown = useMemo(
    () =>
      computeTaxonomyBreakdown(questions, answers, {
        examScope,
        grandeAreaId: selectedAreaId,
        tema: selectedTema,
        excludeAnnulled,
      }),
    [questions, answers, examScope, selectedAreaId, selectedTema, excludeAnnulled]
  );

  const selectedAreaMeta = useMemo(
    () => GRANDES_AREAS.find((a) => a.id === selectedAreaId),
    [selectedAreaId]
  );

  const filteredSubtemas = useMemo(() => {
    const q = normalizeTaxonomyText(subtemaSearch);
    if (!q) return breakdown.subtemas;
    return breakdown.subtemas.filter(
      (s) =>
        normalizeTaxonomyText(s.subtema).includes(q) ||
        normalizeTaxonomyText(s.tema).includes(q) ||
        normalizeTaxonomyText(s.grandeAreaName).includes(q)
    );
  }, [breakdown.subtemas, subtemaSearch]);

  const visibleTemas = showAllTemas
    ? breakdown.temas
    : breakdown.temas.slice(0, 15);
  const visibleSubtemas = showAllSubtemas
    ? filteredSubtemas
    : filteredSubtemas.slice(0, 20);

  const topWeakSubtemas = useMemo(() => {
    if (breakdown.weakSubtemas.length === 0) return [];
    const flagged = breakdown.weakSubtemas.filter((s) => s.isWeakSpot);
    return (flagged.length > 0 ? flagged : breakdown.weakSubtemas).slice(0, 5);
  }, [breakdown.weakSubtemas]);

  const scopeFilterPatch = {
    instituicao: activeExamMeta?.instituicao,
    ano: activeExamMeta?.ano,
  };

  const handleSelectArea = (areaId: GrandeAreaId) => {
    if (selectedAreaId === areaId) {
      setSelectedAreaId('');
      setSelectedTema('');
    } else {
      setSelectedAreaId(areaId);
      setSelectedTema('');
    }
    setShowAllTemas(false);
    setShowAllSubtemas(false);
  };

  const handleSelectTema = (tema: string, areaId: GrandeAreaId) => {
    if (selectedTema === tema) {
      setSelectedTema('');
    } else {
      setSelectedAreaId(areaId);
      setSelectedTema(tema);
    }
    setShowAllSubtemas(false);
  };

  const handleResetDrillDown = () => {
    setSelectedAreaId('');
    setSelectedTema('');
    setSubtemaSearch('');
    setShowAllTemas(false);
    setShowAllSubtemas(false);
  };

  return (
    <div className="space-y-4">
      {/* Main Header + Banca/Prova Selector Card */}
      <section
        aria-label="Estatísticas por Taxonomia v1"
        className="rounded-2xl border border-black/5 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-5"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <Layers
                size={18}
                strokeWidth={1.5}
                className="text-[#86868B] dark:text-slate-400 shrink-0"
              />
              <h2 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
                Estatísticas da Taxonomia Canônica v1
              </h2>
            </div>
            <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
              {breakdown.totalQuestions.toLocaleString('pt-BR')} questões no recorte ·{' '}
              {breakdown.temas.length} temas · {breakdown.subtemas.length} subtemas
              {breakdown.overallAccuracyPct !== null && (
                <>
                  {' '}
                  · Seu acerto:{' '}
                  <span className="font-medium text-[#1D1D1F] dark:text-slate-200">
                    {breakdown.overallAccuracyPct.toFixed(1)}% ({breakdown.totalCorrect}/
                    {breakdown.totalAnswered})
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="min-w-[230px]">
              <Select
                id="taxonomy-exam-scope"
                aria-label="Filtrar estatísticas por Banca ou Prova"
                value={examScope}
                options={examScopeOptions.map((o) => ({
                  value: o.value,
                  label: o.label,
                }))}
                onChange={(val) => {
                  setExamScope(val || 'all');
                  setShowAllTemas(false);
                  setShowAllSubtemas(false);
                }}
              />
            </div>

            <div
              className="inline-flex items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-[#0B0F17]"
              role="group"
              aria-label="Incluir ou excluir questões anuladas"
            >
              <button
                type="button"
                onClick={() => setExcludeAnnulled(false)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  !excludeAnnulled
                    ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#182030] dark:text-white'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Banco Completo
              </button>
              <button
                type="button"
                onClick={() => setExcludeAnnulled(true)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                  excludeAnnulled
                    ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#182030] dark:text-white'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                Apenas Válidas
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Drill-Down Breadcrumb */}
        <nav
          aria-label="Navegação hierárquica da taxonomia"
          className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-black/5 bg-[#F5F5F7]/70 px-3.5 py-2 dark:border-white/[0.06] dark:bg-[#0B0F17]/60"
        >
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <button
              type="button"
              onClick={handleResetDrillDown}
              className={cn(
                'rounded-md px-2 py-1 font-medium transition-colors cursor-pointer tabular-nums',
                !selectedAreaId
                  ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#182030] dark:text-white'
                  : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              Todas as Áreas ({breakdown.totalQuestions})
            </button>

            {selectedAreaMeta && (
              <>
                <ChevronRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#86868B]"
                />
                <button
                  type="button"
                  onClick={() => setSelectedTema('')}
                  className={cn(
                    'rounded-md px-2 py-1 font-medium transition-colors cursor-pointer',
                    !selectedTema
                      ? 'bg-white text-[#007AFF] shadow-xs dark:bg-[#182030] dark:text-sky-300'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {selectedAreaMeta.name}
                </button>
              </>
            )}

            {selectedTema && (
              <>
                <ChevronRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-[#86868B]"
                />
                <span className="rounded-md bg-white px-2 py-1 font-medium text-[#007AFF] shadow-xs dark:bg-[#182030] dark:text-sky-300">
                  {selectedTema}
                </span>
              </>
            )}
          </div>

          {(selectedAreaId || selectedTema || subtemaSearch) && (
            <button
              type="button"
              onClick={handleResetDrillDown}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200 cursor-pointer transition-colors"
            >
              <RotateCcw size={14} strokeWidth={1.5} />
              <span>Limpar recorte</span>
            </button>
          )}
        </nav>

        {/* 5 Grandes Áreas Distribution Cards */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
            Distribuição por Grande Área
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {breakdown.areas.map((area) => {
              const isSelected = selectedAreaId === area.id;
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => handleSelectArea(area.id)}
                  aria-pressed={isSelected}
                  className={cn(
                    'group text-left rounded-xl border p-3.5 transition cursor-pointer',
                    isSelected
                      ? 'border-[#007AFF] bg-[#007AFF]/[0.04] ring-2 ring-[#007AFF]/15 dark:border-sky-400 dark:bg-sky-500/10'
                      : 'border-black/5 bg-white hover:border-black/15 dark:border-white/[0.08] dark:bg-[#161C2C] dark:hover:border-white/20'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold text-[#1D1D1F] dark:text-slate-100 leading-snug">
                      {area.name}
                    </span>
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#1D1D1F] dark:text-white shrink-0">
                      {area.pct.toFixed(1)}%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-[#F5F5F7] dark:bg-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, area.pct)}%`,
                        backgroundColor: area.color,
                      }}
                    />
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-[#86868B] dark:text-slate-400 tabular-nums">
                    <span>
                      {area.count} {area.count === 1 ? 'questão' : 'questões'}
                    </span>
                    <span>{area.subtemaCount} subtemas</span>
                  </div>

                  {area.accuracyPct !== null && (
                    <div
                      className={cn(
                        'mt-2 inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium tabular-nums',
                        area.accuracyPct < 60
                          ? 'bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/15 dark:text-red-300'
                          : 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                      )}
                    >
                      Acerto: {area.accuracyPct.toFixed(0)}% ({area.correct}/{area.answered})
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weak Subtemas Alert Strip (only shown when user has answered questions in scope) */}
      {topWeakSubtemas.length > 0 && (
        <section
          aria-label="Subtemas com menor taxa de acerto para revisão"
          className="rounded-2xl border border-black/5 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-3.5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/15 dark:text-red-300">
                <AlertTriangle size={16} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
                  Subtemas Prioritários para Revisão
                </h3>
                <p className="text-xs text-[#86868B] dark:text-slate-400">
                  Menor taxa de acerto registrada no recorte atual
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2.5">
            {topWeakSubtemas.map((sub) => {
              const acc = sub.accuracyPct ?? 0;
              const isAlert = sub.isWeakSpot;
              return (
                <div
                  key={`${sub.grandeAreaId}-${sub.tema}-${sub.subtema}`}
                  className={cn(
                    'flex flex-col justify-between gap-2.5 rounded-xl border p-3.5',
                    isAlert
                      ? 'border-[#FF3B30]/20 bg-[#FF3B30]/[0.04] dark:border-red-500/25 dark:bg-red-500/[0.06]'
                      : 'border-black/5 bg-[#F5F5F7]/60 dark:border-white/[0.08] dark:bg-[#161C2C]'
                  )}
                >
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-semibold text-[#1D1D1F] dark:text-slate-100 leading-snug line-clamp-2">
                        {sub.subtema}
                      </span>
                      <span
                        className={cn(
                          'shrink-0 rounded-md px-1.5 py-0.5 font-mono text-[11px] font-semibold tabular-nums',
                          isAlert
                            ? 'bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/20 dark:text-red-300'
                            : 'bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300'
                        )}
                      >
                        {acc.toFixed(0)}%
                      </span>
                    </div>
                    <p className="text-[11px] text-[#86868B] dark:text-slate-400 truncate">
                      {sub.tema} · {sub.grandeAreaShortName}
                    </p>
                    <p className="font-mono text-[11px] text-[#86868B] dark:text-slate-400 tabular-nums">
                      {sub.correct}/{sub.answered} acertos · {sub.count} no banco
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      onPracticeTaxonomy({
                        topicLabel: sub.subtema,
                        matchedTema: sub.tema,
                        matchedSubtema: sub.subtema,
                        grandeAreaId: sub.grandeAreaId,
                        ...scopeFilterPatch,
                        status: 'todas',
                      })
                    }
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#007AFF] px-2.5 py-1.5 text-xs font-medium text-white hover:bg-[#0066D6] shadow-sm transition cursor-pointer"
                  >
                    <Play size={14} strokeWidth={1.5} />
                    <span>Revisar</span>
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Temas & Subtemas Drill-Down Columns */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        {/* Left: Temas Ranking */}
        <section
          aria-label="Ranking de temas mais cobrados"
          className="xl:col-span-5 rounded-2xl border border-black/5 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-4"
        >
          <div className="flex items-center justify-between gap-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
                Temas Mais Cobrados
              </h3>
              <p className="mt-0.5 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                Clique em um tema para filtrar os subtemas ({breakdown.temas.length})
              </p>
            </div>
          </div>

          {visibleTemas.length === 0 ? (
            <p className="py-8 text-center text-xs text-[#86868B] dark:text-slate-400">
              Nenhum tema encontrado para o filtro selecionado.
            </p>
          ) : (
            <div className="space-y-1.5">
              {visibleTemas.map((row, idx) => {
                const isSelected = selectedTema === row.tema;
                return (
                  <button
                    key={`${row.grandeAreaId}-${row.tema}`}
                    type="button"
                    onClick={() => handleSelectTema(row.tema, row.grandeAreaId)}
                    className={cn(
                      'w-full text-left rounded-xl border px-3 py-2.5 transition cursor-pointer',
                      isSelected
                        ? 'border-[#007AFF] bg-[#007AFF]/[0.06] dark:border-sky-400 dark:bg-sky-500/15'
                        : 'border-black/5 bg-[#F5F5F7]/40 hover:bg-[#F5F5F7] dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:bg-white/[0.05]'
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-[11px] font-semibold text-[#86868B] tabular-nums w-5 shrink-0">
                          #{idx + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-[#1D1D1F] dark:text-slate-100 truncate">
                            {row.tema}
                          </p>
                          <p className="text-[11px] text-[#86868B] dark:text-slate-400 tabular-nums">
                            {row.grandeAreaShortName} · {row.subtemaCount} subtemas
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {row.accuracyPct !== null && (
                          <span
                            className={cn(
                              'rounded-md px-1.5 py-0.5 font-mono text-[11px] font-medium tabular-nums',
                              row.accuracyPct < 60
                                ? 'bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/20 dark:text-red-300'
                                : 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                            )}
                          >
                            {row.accuracyPct.toFixed(0)}%
                          </span>
                        )}
                        <span className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-white tabular-nums">
                          {row.count}
                        </span>
                        <span className="font-mono text-[11px] text-[#86868B] tabular-nums w-11 text-right">
                          {row.pct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {breakdown.temas.length > 15 && (
            <button
              type="button"
              onClick={() => setShowAllTemas((v) => !v)}
              className="w-full rounded-lg border border-black/5 py-1.5 text-xs font-medium text-[#007AFF] hover:bg-[#F5F5F7] dark:border-white/10 dark:text-sky-300 dark:hover:bg-white/[0.04] transition-colors cursor-pointer tabular-nums"
            >
              {showAllTemas
                ? 'Mostrar top 15 temas'
                : `Ver todos os ${breakdown.temas.length} temas`}
            </button>
          )}
        </section>

        {/* Right: Subtemas Ranking + Practice Action */}
        <section
          aria-label="Ranking de subtemas mais cobrados"
          className="xl:col-span-7 rounded-2xl border border-black/5 bg-white p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
                Subtemas Mais Cobrados
              </h3>
              <p className="mt-0.5 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                {filteredSubtemas.length} subtemas
                {selectedTema ? ` em ${selectedTema}` : selectedAreaMeta ? ` em ${selectedAreaMeta.shortName}` : ''}
              </p>
            </div>

            <div className="relative w-full sm:w-56">
              <Search
                size={15}
                strokeWidth={1.5}
                className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#86868B]"
              />
              <input
                type="search"
                value={subtemaSearch}
                onChange={(e) => setSubtemaSearch(e.target.value)}
                placeholder="Filtrar subtema..."
                aria-label="Filtrar ranking de subtemas"
                className="h-8 w-full rounded-lg border border-[#D1D1D6] bg-white pl-8 pr-2.5 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-[#007AFF] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-100"
              />
            </div>
          </div>

          {visibleSubtemas.length === 0 ? (
            <p className="py-8 text-center text-xs text-[#86868B] dark:text-slate-400">
              Nenhum subtema corresponde ao recorte atual.
            </p>
          ) : (
            <div className="divide-y divide-black/5 dark:divide-white/[0.06]">
              {visibleSubtemas.map((row, idx) => {
                const maxCount = filteredSubtemas[0]?.count || 1;
                const barWidth = Math.max(4, (row.count / maxCount) * 100);
                return (
                  <div
                    key={`${row.grandeAreaId}-${row.tema}-${row.subtema}`}
                    className={cn(
                      'flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 py-2.5 first:pt-1 last:pb-1',
                      row.isWeakSpot &&
                        'rounded-lg bg-[#FF3B30]/[0.04] px-2.5 my-0.5 dark:bg-red-500/[0.06]'
                    )}
                  >
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-semibold text-[#86868B] tabular-nums w-5 shrink-0">
                          #{idx + 1}
                        </span>
                        <span className="text-xs font-semibold text-[#1D1D1F] dark:text-slate-100 truncate">
                          {row.subtema}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pl-7">
                        <span className="text-[11px] text-[#86868B] dark:text-slate-400 truncate">
                          {row.tema} · {row.grandeAreaShortName}
                        </span>
                      </div>

                      <div className="pl-7 pt-0.5">
                        <div className="h-1 w-full max-w-[220px] overflow-hidden rounded-full bg-[#F5F5F7] dark:bg-slate-800">
                          <div
                            className={cn(
                              'h-full rounded-full',
                              row.isWeakSpot
                                ? 'bg-[#D70015] dark:bg-red-400'
                                : 'bg-[#007AFF] dark:bg-sky-400'
                            )}
                            style={{ width: `${barWidth}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0 pl-7 sm:pl-0">
                      {row.accuracyPct !== null && (
                        <span
                          title={`${row.correct} acertos em ${row.answered} respondidas`}
                          className={cn(
                            'rounded-md px-2 py-0.5 font-mono text-[11px] font-medium tabular-nums',
                            row.isWeakSpot
                              ? 'bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/20 dark:text-red-300'
                              : 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                          )}
                        >
                          {row.accuracyPct.toFixed(0)}% ({row.correct}/{row.answered})
                        </span>
                      )}

                      <div className="text-right tabular-nums w-16">
                        <span className="font-mono text-xs font-semibold text-[#1D1D1F] dark:text-white">
                          {row.count}
                        </span>{' '}
                        <span className="font-mono text-[11px] text-[#86868B]">
                          ({row.pct.toFixed(1)}%)
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onPracticeTaxonomy({
                            topicLabel: row.subtema,
                            matchedTema: row.tema,
                            matchedSubtema: row.subtema,
                            grandeAreaId: row.grandeAreaId,
                            ...scopeFilterPatch,
                          })
                        }
                        className="inline-flex items-center gap-1 rounded-lg bg-[#007AFF] px-2.5 py-1.5 text-xs font-medium text-white hover:bg-[#0066D6] shadow-sm transition cursor-pointer whitespace-nowrap"
                      >
                        <Play size={13} strokeWidth={1.5} />
                        <span>Praticar</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {filteredSubtemas.length > 20 && (
            <button
              type="button"
              onClick={() => setShowAllSubtemas((v) => !v)}
              className="w-full rounded-lg border border-black/5 py-1.5 text-xs font-medium text-[#007AFF] hover:bg-[#F5F5F7] dark:border-white/10 dark:text-sky-300 dark:hover:bg-white/[0.04] transition-colors cursor-pointer tabular-nums"
            >
              {showAllSubtemas
                ? 'Mostrar top 20 subtemas'
                : `Ver todos os ${filteredSubtemas.length} subtemas`}
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
