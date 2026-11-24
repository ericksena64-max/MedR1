import React, { useMemo, useState } from 'react';
import {
  Search,
  FileSearch,
  SlidersHorizontal,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Play,
} from 'lucide-react';
import type {
  MedicalQuestion,
  QuestionFilters,
  StudentFilterStatus,
  StudyMode,
} from '../../types/medical';
import {
  getAllBankQuestions,
  getOfficialExamCatalog,
} from '../../lib/questionBankStore';
import { GRANDES_AREAS, REGIOES_BRASIL } from '../../data/taxonomy';
import { Select } from '../ui/Select';
import { Switch } from '../ui/Switch';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

interface FilterPanelProps {
  filters: QuestionFilters;
  onChange: (next: QuestionFilters) => void;
  onReset: () => void;
  resultCount: number;
  mode: StudyMode;
  onChangeMode: (mode: StudyMode) => void;
  onStartSimulado: () => void;
  simuladoActive: boolean;
  variant?: 'sidebar' | 'top';
  questions?: MedicalQuestion[];
}

const STATUS_OPTIONS: Array<{ id: StudentFilterStatus; label: string }> = [
  { id: 'todas', label: 'Todas' },
  { id: 'nao_resolvidas', label: 'Não resolvidas' },
  { id: 'erradas', label: 'Erradas' },
  { id: 'acertadas', label: 'Acertadas' },
  { id: 'favoritadas', label: 'Favoritadas' },
  { id: 'caderno_erros', label: 'Caderno de Erros' },
];

export function countActiveQuestionFilters(filters: QuestionFilters): number {
  let count = 0;
  if (filters.search.trim()) count++;
  if (filters.examSearch.trim()) count++;
  if (filters.grandeAreaId) count++;
  if (filters.temas && filters.temas.length > 0) count += filters.temas.length;
  else if (filters.tema) count++;
  if (filters.subtema) count++;
  if (filters.banca) count++;
  if (filters.instituicao) count++;
  if (filters.regiao) count++;
  if (filters.ano) count++;
  if (filters.dificuldade) count++;
  if (filters.status !== 'todas') count++;
  if (filters.comImagens) count++;
  if (!filters.excluirAnuladasDesatualizadas) count++;
  return count;
}

export function FilterPanel({
  filters,
  onChange,
  onReset,
  resultCount,
  mode,
  onChangeMode,
  onStartSimulado,
  simuladoActive,
  variant = 'sidebar',
  questions,
}: FilterPanelProps) {
  const [expanded, setExpanded] = useState(true);
  const bankQuestions = questions ?? getAllBankQuestions();

  // Cascading hierarchy options derived dynamically from the full question bank
  const temaOptions = useMemo(() => {
    const subset = filters.grandeAreaId
      ? bankQuestions.filter((q) => q.grandeAreaId === filters.grandeAreaId)
      : bankQuestions;
    const unique = Array.from(new Set(subset.map((q) => q.tema))).sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    );
    return unique.map((t) => ({ value: t, label: t }));
  }, [bankQuestions, filters.grandeAreaId]);

  const subtemaOptions = useMemo(() => {
    const subset = bankQuestions.filter((q) => {
      if (filters.grandeAreaId && q.grandeAreaId !== filters.grandeAreaId) return false;
      if (filters.tema && q.tema !== filters.tema) return false;
      return true;
    });
    const unique = Array.from(new Set(subset.map((q) => q.subtema))).sort((a, b) =>
      a.localeCompare(b, 'pt-BR')
    );
    return unique.map((s) => ({ value: s, label: s }));
  }, [bankQuestions, filters.grandeAreaId, filters.tema]);

  const catalogEntries = getOfficialExamCatalog();

  const bancaOptions = useMemo(() => {
    const values = new Set(bankQuestions.map((q) => q.banca));
    for (const entry of catalogEntries) values.add(entry.banca);
    return Array.from(values)
      .sort((a, b) => a.localeCompare(b, 'pt-BR'))
      .map((v) => ({ value: v, label: v }));
  }, [bankQuestions, catalogEntries]);

  const instituicaoOptions = useMemo(() => {
    const values = new Set(bankQuestions.map((q) => q.instituicao));
    for (const entry of catalogEntries) values.add(entry.instituicao);
    return Array.from(values)
      .sort((a, b) => a.localeCompare(b, 'pt-BR'))
      .map((v) => ({ value: v, label: v }));
  }, [bankQuestions, catalogEntries]);

  const anoOptions = useMemo(() => {
    const values = new Set(bankQuestions.map((q) => q.ano));
    for (const entry of catalogEntries) values.add(entry.ano);
    return Array.from(values)
      .sort((a, b) => b - a)
      .map((v) => ({ value: String(v), label: String(v) }));
  }, [bankQuestions, catalogEntries]);

  const examSuggestions = useMemo(() => {
    const values = new Set(bankQuestions.map((q) => `${q.instituicao} ${q.ano}`));
    for (const entry of catalogEntries) {
      values.add(`${entry.instituicao} ${entry.ano}`);
    }
    return Array.from(values).sort((a, b) => {
      const yearA = Number(a.split(' ').pop() ?? 0);
      const yearB = Number(b.split(' ').pop() ?? 0);
      if (yearB !== yearA) return yearB - yearA;
      return a.localeCompare(b);
    });
  }, [bankQuestions, catalogEntries]);

  const activeFilterCount = useMemo(
    () => countActiveQuestionFilters(filters),
    [filters]
  );

  if (variant === 'sidebar') {
    return (
      <section
        aria-label="Filtros e modo de estudo das questões"
        className="border-t border-slate-200 dark:border-slate-800 pt-4 mt-4 space-y-3"
      >
        {/* Sidebar Section Header */}
        <div className="flex items-center justify-between gap-2 px-1">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-sky-700 dark:text-slate-100 dark:hover:text-sky-300 transition-colors cursor-pointer min-w-0"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 shrink-0 text-sky-600 dark:text-sky-400" />
            <span className="truncate">Filtros de Estudo</span>
            {activeFilterCount > 0 && (
              <span className="font-mono text-[11px] font-bold text-sky-600 dark:text-sky-400 tabular-nums">
                ({activeFilterCount})
              </span>
            )}
            {expanded ? (
              <ChevronUp className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            )}
          </button>

          <span className="font-mono text-[11px] font-semibold tabular-nums text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {resultCount} {resultCount === 1 ? 'questão' : 'questões'}
          </span>
        </div>

        {/* Mode Segmented Control (Estudo / Simulado) */}
        <div className="grid grid-cols-2 rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800">
          <button
            type="button"
            disabled={simuladoActive}
            onClick={() => onChangeMode('estudo')}
            className={cn(
              'rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50',
              mode === 'estudo'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-950 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Estudo
          </button>
          <button
            type="button"
            disabled={simuladoActive}
            onClick={() => onChangeMode('simulado')}
            className={cn(
              'rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50',
              mode === 'simulado'
                ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-950 dark:text-white'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            )}
          >
            Simulado
          </button>
        </div>

        {mode === 'simulado' && !simuladoActive && (
          <Button
            variant="primary"
            size="sm"
            onClick={onStartSimulado}
            disabled={resultCount === 0}
            className="w-full justify-center"
          >
            <Play className="h-3.5 w-3.5" />
            <span>Iniciar Simulado ({resultCount})</span>
          </Button>
        )}

        {expanded && (
          <div className="space-y-3 pt-1">
            {/* Keyword Search */}
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={filters.search}
                disabled={simuladoActive}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
                aria-label="Buscar por palavra-chave no enunciado ou comentário"
                placeholder="Palavra-chave (ATLS, supra...)"
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-8 pr-3 text-xs text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:bg-slate-950"
              />
            </div>

            {/* Specific Exam Name Search */}
            <div className="relative">
              <FileSearch
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                list="medr1-exam-suggestions"
                value={filters.examSearch}
                disabled={simuladoActive}
                onChange={(e) =>
                  onChange({ ...filters, examSearch: e.target.value })
                }
                aria-label="Buscar pelo nome específico da prova"
                placeholder="Prova (UEPA 2025, ENARE 2025...)"
                className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-8 pr-3 text-xs text-slate-900 placeholder:text-slate-400 transition-colors focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-sky-400 dark:focus:bg-slate-950"
              />
              <datalist id="medr1-exam-suggestions">
                {examSuggestions.map((examName) => (
                  <option key={examName} value={examName} />
                ))}
              </datalist>
            </div>

            {/* Cascading Medical Taxonomy */}
            <div className="space-y-2.5">
              <Select
                id="filter-area"
                label="Grande Área"
                placeholder="Todas as 5 áreas"
                disabled={simuladoActive}
                value={filters.grandeAreaId}
                options={GRANDES_AREAS.map((a) => ({ value: a.id, label: a.name }))}
                onChange={(val) =>
                  onChange({
                    ...filters,
                    grandeAreaId: val,
                    tema: '',
                    subtema: '',
                  })
                }
              />
              <Select
                id="filter-tema"
                label="Especialidade / Tema"
                placeholder="Todos os temas"
                disabled={simuladoActive}
                value={filters.tema}
                options={temaOptions}
                onChange={(val) =>
                  onChange({
                    ...filters,
                    tema: val,
                    subtema: '',
                  })
                }
              />
              <Select
                id="filter-subtema"
                label="Subtema / Foco"
                placeholder="Todos os subtemas"
                disabled={simuladoActive}
                value={filters.subtema}
                options={subtemaOptions}
                onChange={(val) => onChange({ ...filters, subtema: val })}
              />
            </div>

            {/* Exam Metadata Selects */}
            <div className="grid grid-cols-2 gap-2">
              <Select
                id="filter-instituicao"
                label="Instituição"
                placeholder="Todas"
                disabled={simuladoActive}
                value={filters.instituicao}
                options={instituicaoOptions}
                onChange={(val) => onChange({ ...filters, instituicao: val })}
              />
              <Select
                id="filter-banca"
                label="Banca"
                placeholder="Todas"
                disabled={simuladoActive}
                value={filters.banca}
                options={bancaOptions}
                onChange={(val) => onChange({ ...filters, banca: val })}
              />
              <Select
                id="filter-ano"
                label="Ano"
                placeholder="Todos"
                disabled={simuladoActive}
                value={filters.ano}
                options={anoOptions}
                onChange={(val) => onChange({ ...filters, ano: val })}
              />
              <Select
                id="filter-dificuldade"
                label="Dificuldade"
                placeholder="Todas"
                disabled={simuladoActive}
                value={filters.dificuldade}
                options={[
                  { value: 'Fácil', label: 'Fácil (> 70%)' },
                  { value: 'Médio', label: 'Médio (40–70%)' },
                  { value: 'Difícil', label: 'Difícil (< 40%)' },
                ]}
                onChange={(val) => onChange({ ...filters, dificuldade: val })}
              />
            </div>

            <Select
              id="filter-regiao"
              label="Região"
              placeholder="Todo o Brasil"
              disabled={simuladoActive}
              value={filters.regiao}
              options={REGIOES_BRASIL.map((r) => ({ value: r, label: r }))}
              onChange={(val) => onChange({ ...filters, regiao: val })}
            />

            {/* Student Status Buttons */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                Status do Aluno
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STATUS_OPTIONS.map((opt) => {
                  const active = filters.status === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      disabled={simuladoActive}
                      onClick={() => onChange({ ...filters, status: opt.id })}
                      className={cn(
                        'rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50',
                        active
                          ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Boolean Toggles */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <Switch
                id="toggle-imagens"
                checked={filters.comImagens}
                onCheckedChange={(checked) =>
                  !simuladoActive && onChange({ ...filters, comImagens: checked })
                }
                label="Com imagens"
              />
              <Switch
                id="toggle-anuladas"
                checked={filters.excluirAnuladasDesatualizadas}
                onCheckedChange={(checked) =>
                  !simuladoActive &&
                  onChange({ ...filters, excluirAnuladasDesatualizadas: checked })
                }
                label="Excluir anuladas"
              />
            </div>

            {activeFilterCount > 0 && !simuladoActive && (
              <button
                type="button"
                onClick={onReset}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Limpar filtros ({activeFilterCount})</span>
              </button>
            )}
          </div>
        )}
      </section>
    );
  }

  const [topPanelOpen, setTopPanelOpen] = useState(false);

  const activeChips: Array<{ key: string; label: string; onRemove: () => void }> = [];
  if (filters.grandeAreaId) {
    const areaName =
      GRANDES_AREAS.find((a) => a.id === filters.grandeAreaId)?.shortName ??
      filters.grandeAreaId;
    activeChips.push({
      key: 'area',
      label: areaName,
      onRemove: () =>
        onChange({ ...filters, grandeAreaId: '', tema: '', subtema: '' }),
    });
  }
  if (filters.tema) {
    activeChips.push({
      key: 'tema',
      label: filters.tema,
      onRemove: () => onChange({ ...filters, tema: '', subtema: '' }),
    });
  }
  if (filters.subtema) {
    activeChips.push({
      key: 'subtema',
      label: filters.subtema,
      onRemove: () => onChange({ ...filters, subtema: '' }),
    });
  }
  if (filters.instituicao) {
    activeChips.push({
      key: 'instituicao',
      label: filters.instituicao,
      onRemove: () => onChange({ ...filters, instituicao: '' }),
    });
  }
  if (filters.banca) {
    activeChips.push({
      key: 'banca',
      label: `Banca: ${filters.banca}`,
      onRemove: () => onChange({ ...filters, banca: '' }),
    });
  }
  if (filters.ano) {
    activeChips.push({
      key: 'ano',
      label: String(filters.ano),
      onRemove: () => onChange({ ...filters, ano: '' }),
    });
  }
  if (filters.status !== 'todas') {
    const statusLabels: Record<string, string> = {
      nao_resolvidas: 'Não resolvidas',
      erradas: 'Erradas',
      acertadas: 'Acertadas',
      favoritadas: 'Favoritadas',
      caderno_erros: 'Caderno de Erros',
    };
    activeChips.push({
      key: 'status',
      label: statusLabels[filters.status] ?? filters.status,
      onRemove: () => onChange({ ...filters, status: 'todas' }),
    });
  }
  if (filters.search.trim()) {
    activeChips.push({
      key: 'search',
      label: `"${filters.search.trim()}"`,
      onRemove: () => onChange({ ...filters, search: '' }),
    });
  }

  return (
    <section
      aria-label="Barra rápida de filtros de questões"
      className="rounded-xl border border-slate-200/80 bg-white dark:border-white/[0.08] dark:bg-[#131926] overflow-hidden"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5 min-w-0">
          <button
            type="button"
            disabled={simuladoActive}
            onClick={() => setTopPanelOpen((v) => !v)}
            aria-expanded={topPanelOpen}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer disabled:opacity-50',
              topPanelOpen || activeFilterCount > 0
                ? 'border-[#007AFF]/40 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300'
                : 'border-slate-200/80 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200 dark:hover:bg-white/[0.06]'
            )}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Filtros</span>
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-[#007AFF] px-1.5 font-mono text-[10px] font-semibold tabular-nums text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          {activeChips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              disabled={simuladoActive}
              onClick={chip.onRemove}
              title={`Remover filtro ${chip.label}`}
              className="inline-flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:border-red-300 hover:bg-red-50/70 hover:text-red-700 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200 dark:hover:border-red-500/40 dark:hover:text-red-300 transition-colors cursor-pointer disabled:opacity-50"
            >
              <span className="max-w-[140px] truncate">{chip.label}</span>
              <span aria-hidden="true">×</span>
            </button>
          ))}

          {activeFilterCount > 0 && !simuladoActive && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1 px-1.5 py-1 text-[11px] font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 cursor-pointer"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Limpar</span>
            </button>
          )}
        </div>

        <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400 shrink-0">
          {resultCount} {resultCount === 1 ? 'questão' : 'questões'}
        </span>
      </div>

      {topPanelOpen && !simuladoActive && (
        <div className="border-t border-slate-200/70 bg-slate-50/50 p-3.5 dark:border-white/[0.07] dark:bg-[#0B0F17]/50 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={filters.search}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
                placeholder="Buscar por tema, prova, texto..."
                className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#007AFF] focus:outline-none dark:border-white/10 dark:bg-[#131926] dark:text-slate-100"
              />
            </div>

            <Select
              aria-label="Grande Área"
              value={filters.grandeAreaId}
              placeholder="Todas as Grandes Áreas"
              options={GRANDES_AREAS.map((a) => ({ value: a.id, label: a.name }))}
              onChange={(val) =>
                onChange({
                  ...filters,
                  grandeAreaId: val,
                  tema: '',
                  subtema: '',
                })
              }
            />

            <Select
              aria-label="Tema"
              value={filters.tema}
              placeholder="Todos os Temas"
              options={temaOptions}
              onChange={(val) => onChange({ ...filters, tema: val, subtema: '' })}
            />

            <Select
              aria-label="Instituição"
              value={filters.instituicao}
              placeholder="Todas as Instituições"
              options={instituicaoOptions}
              onChange={(val) => onChange({ ...filters, instituicao: val })}
            />

            <Select
              aria-label="Banca"
              value={filters.banca}
              placeholder="Todas as Bancas"
              options={bancaOptions}
              onChange={(val) => onChange({ ...filters, banca: val })}
            />

            <Select
              aria-label="Ano"
              value={filters.ano}
              placeholder="Todos os Anos"
              options={anoOptions}
              onChange={(val) => onChange({ ...filters, ano: val })}
            />

            <Select
              aria-label="Status do aluno"
              value={filters.status}
              placeholder="Todas as questões"
              options={[
                { value: 'todas', label: 'Todas as questões' },
                { value: 'nao_resolvidas', label: 'Não resolvidas' },
                { value: 'erradas', label: 'Erradas' },
                { value: 'acertadas', label: 'Acertadas' },
                { value: 'favoritadas', label: 'Favoritadas' },
                { value: 'caderno_erros', label: 'Caderno de Erros' },
              ]}
              onChange={(val) =>
                onChange({
                  ...filters,
                  status: (val || 'todas') as QuestionFilters['status'],
                })
              }
            />

            <div className="flex items-center justify-end gap-2">
              {mode === 'simulado' && (
                <button
                  type="button"
                  onClick={() => {
                    setTopPanelOpen(false);
                    onStartSimulado();
                  }}
                  disabled={resultCount === 0}
                  className="rounded-lg bg-[#007AFF] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0066D6] disabled:opacity-50 transition-colors cursor-pointer"
                >
                  Iniciar Simulado
                </button>
              )}
              <button
                type="button"
                onClick={() => setTopPanelOpen(false)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-[#131926] dark:text-slate-200 transition-colors cursor-pointer"
              >
                Recolher
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
