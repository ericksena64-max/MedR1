import React, { useMemo, useState } from 'react';
import { Database, ChevronDown } from 'lucide-react';
import type { GrandeAreaId, MedicalQuestion } from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import { getUnloadedOfficialCatalogEntries } from '../../lib/questionBankStore';
import { cn } from '../../lib/utils';

interface QuestionBankSummaryCardProps {
  questions: MedicalQuestion[];
  answeredIds: Record<string, unknown>;
  filteredCount: number;
  activeFilterCount: number;
  importedQuestionsCount: number;
  isCompact: boolean;
  onSelectGrandeArea: (areaId: GrandeAreaId) => void;
  onOpenBank: () => void;
  onRequestExpand?: () => void;
}

function formatCompactCount(count: number): string {
  if (count >= 10000) {
    return `${Math.round(count / 1000)}k`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace('.', ',')}k`;
  }
  return String(count);
}

export function QuestionBankSummaryCard({
  questions,
  answeredIds,
  filteredCount,
  activeFilterCount,
  importedQuestionsCount,
  isCompact,
  onSelectGrandeArea,
  onOpenBank,
  onRequestExpand,
}: QuestionBankSummaryCardProps) {
  const [expandedAreas, setExpandedAreas] = useState(false);

  const stats = useMemo(() => {
    const unloadedEntries = getUnloadedOfficialCatalogEntries();
    let total = questions.length;
    let answered = 0;
    let activeCount = 0;
    const boards = new Set<string>();
    const areaCounts: Record<GrandeAreaId, number> = {
      clinica_medica: 0,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    };

    for (const q of questions) {
      if (answeredIds[q.id]) answered += 1;
      if (!q.anulada && !q.desatualizada) activeCount += 1;
      if (q.instituicao) boards.add(q.instituicao);
      if (q.grandeAreaId in areaCounts) {
        areaCounts[q.grandeAreaId] += 1;
      }
    }

    // Include unloaded lazy exam chunks from the lightweight catalog manifest
    for (const entry of unloadedEntries) {
      total += entry.questionCount;
      activeCount += entry.activeCount;
      boards.add(entry.instituicao);
      for (const areaId of Object.keys(entry.areaCounts) as GrandeAreaId[]) {
        areaCounts[areaId] += entry.areaCounts[areaId];
      }
    }

    const unanswered = Math.max(0, total - answered);
    const coveragePct = total > 0 ? Math.round((answered / total) * 100) : 0;

    return {
      total,
      activeCount,
      answered,
      unanswered,
      coveragePct,
      boardsCount: boards.size,
      areaCounts,
    };
  }, [questions, answeredIds]);

  // Compact sidebar mode: crisp database tile with live total count
  if (isCompact) {
    return (
      <div className="mb-2 flex justify-center">
        <button
          type="button"
          onClick={() => onRequestExpand?.()}
          title={`Banco disponível: ${stats.total.toLocaleString('pt-BR')} questões (${stats.unanswered.toLocaleString('pt-BR')} inéditas · ${stats.boardsCount} bancas)`}
          aria-label={`Banco disponível com ${stats.total} questões. Expandir barra lateral para detalhes.`}
          className="flex flex-col items-center justify-center gap-0.5 w-11 py-1.5 rounded-xl border border-slate-200/75 bg-[#F6F8FC] text-slate-700 hover:bg-[#E8F0FE] hover:text-[#1A56DB] hover:border-[#1A56DB]/25 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-slate-200 dark:hover:bg-sky-500/15 dark:hover:text-sky-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
        >
          <Database className="h-3.5 w-3.5 text-[#1A56DB] dark:text-sky-400" />
          <span className="font-mono text-[10px] font-bold leading-none tabular-nums">
            {formatCompactCount(stats.total)}
          </span>
        </button>
      </div>
    );
  }

  return (
    <section
      aria-label="Resumo do banco de questões disponíveis"
      className="mb-2.5 rounded-2xl border border-slate-200/65 bg-[#F6F8FC] p-3 dark:border-white/[0.06] dark:bg-white/[0.035]"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onOpenBank}
          className="flex items-center gap-1.5 min-w-0 text-left hover:opacity-80 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded"
        >
          <Database className="h-3.5 w-3.5 shrink-0 text-[#1A56DB] dark:text-sky-400" />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 truncate">
            Banco Disponível
          </span>
        </button>

        <button
          type="button"
          onClick={() => setExpandedAreas((prev) => !prev)}
          aria-expanded={expandedAreas}
          aria-label={
            expandedAreas
              ? 'Ocultar distribuição por grande área'
              : 'Ver distribuição de questões por grande área'
          }
          className="inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-100 transition-colors cursor-pointer shrink-0"
        >
          <span>Áreas</span>
          <ChevronDown
            className={cn(
              'h-3 w-3 transition-transform duration-150',
              expandedAreas && 'rotate-180'
            )}
          />
        </button>
      </div>

      {/* Main Count Readout */}
      <div className="mt-2 flex items-baseline justify-between gap-2">
        <button
          type="button"
          onClick={onOpenBank}
          className="flex items-baseline gap-1.5 font-mono tabular-nums text-left hover:opacity-85 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded"
        >
          <span className="text-xl font-bold leading-none text-slate-900 dark:text-white">
            {stats.total.toLocaleString('pt-BR')}
          </span>
          <span className="font-sans text-xs text-slate-500 dark:text-slate-400">
            {stats.total === 1 ? 'questão' : 'questões'}
          </span>
        </button>

        {activeFilterCount > 0 ? (
          <span className="font-mono text-[11px] font-semibold tabular-nums text-[#1A56DB] dark:text-sky-400 shrink-0">
            {filteredCount.toLocaleString('pt-BR')} filtradas
          </span>
        ) : (
          <span className="font-mono text-[11px] font-medium tabular-nums text-slate-500 dark:text-slate-400 shrink-0">
            {stats.boardsCount}{' '}
            {stats.boardsCount === 1 ? 'banca' : 'bancas'}
          </span>
        )}
      </div>

      {/* Bank Coverage Bar */}
      <div
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/75 dark:bg-white/[0.08]"
        role="progressbar"
        aria-label="Percentual de questões resolvidas no banco"
        aria-valuenow={stats.answered}
        aria-valuemin={0}
        aria-valuemax={Math.max(1, stats.total)}
      >
        <div
          className="h-full rounded-full bg-[#1A56DB] dark:bg-sky-400 transition-all duration-500 ease-out"
          style={{ width: `${Math.min(100, stats.coveragePct)}%` }}
        />
      </div>

      {/* Sub-metrics Row */}
      <div className="mt-1.5 flex items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
        <span className="truncate tabular-nums">
          <strong className="font-semibold text-slate-700 dark:text-slate-200">
            {stats.unanswered.toLocaleString('pt-BR')}
          </strong>{' '}
          inéditas · {stats.answered.toLocaleString('pt-BR')} feitas
        </span>

        {importedQuestionsCount > 0 ? (
          <span className="font-mono text-[10px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-400 shrink-0">
            +{importedQuestionsCount.toLocaleString('pt-BR')} imp.
          </span>
        ) : (
          <span className="font-mono text-[10px] font-medium tabular-nums shrink-0">
            {stats.coveragePct}%
          </span>
        )}
      </div>

      {/* Expandable Breakdown by Grande Área */}
      {expandedAreas && (
        <div className="mt-2.5 pt-2 border-t border-slate-200/75 dark:border-white/[0.07] space-y-0.5">
          {GRANDES_AREAS.map((area) => {
            const count = stats.areaCounts[area.id] ?? 0;
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => onSelectGrandeArea(area.id)}
                className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1 text-left text-xs text-slate-600 hover:bg-white hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: area.color }}
                    aria-hidden="true"
                  />
                  <span className="truncate">{area.name}</span>
                </span>
                <span className="font-mono text-[11px] font-semibold tabular-nums text-slate-500 dark:text-slate-400 shrink-0">
                  {count.toLocaleString('pt-BR')}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
