import React, { useEffect, useRef, useState } from 'react';
import {
  Menu,
  Sun,
  Moon,
  Monitor,
  Clock,
  Check,
  ChevronDown,
  Maximize2,
  Minimize2,
  BookOpen,
  Stethoscope,
  Flame,
  SlidersHorizontal,
  Filter,
  Search,
  Trophy,
} from 'lucide-react';
import type {
  ActiveTab,
  DailyGoalProgress,
  StudyMode,
  ThemeMode,
  ThemeScheduleConfig,
} from '../../types/medical';
import type { GamificationCoreState } from '../../lib/gamificationEngine';
import {
  clampDailyGoalTarget,
  resolveTopBarContext,
  type PrimaryNavId,
} from '../../lib/navigationState';
import { cn } from '../../lib/utils';

interface TopBarProps {
  activeTab: ActiveTab;
  mode?: StudyMode;
  simuladoActive?: boolean;
  onSelectHome?: () => void;
  onSelectTab?: (tab: ActiveTab) => void;
  onSelectSimulados?: () => void;
  dueFlashcardsCount?: number;
  errorNotebookCount?: number;
  activeFilterCount?: number;
  dailyGoal?: DailyGoalProgress;
  onUpdateDailyGoalTarget?: (target: number) => void;
  onOpenRoutineConfig?: () => void;
  onOpenCommandPalette?: () => void;
  darkMode: boolean;
  themeMode: ThemeMode;
  onChangeThemeMode: (mode: ThemeMode) => void;
  themeSchedule: ThemeScheduleConfig;
  onChangeThemeSchedule: (schedule: ThemeScheduleConfig) => void;
  readingComfort: boolean;
  onToggleReadingComfort: () => void;
  focusMode: boolean;
  onToggleFocusMode: () => void;
  onOpenMobileMenu: () => void;
  gamificationCore?: GamificationCoreState;
  onOpenGamificationHub?: () => void;
}

const PRIMARY_NAV_ITEMS: ReadonlyArray<{ id: PrimaryNavId; label: string }> = [
  { id: 'inicio', label: 'Início' },
  { id: 'questoes', label: 'Questões' },
  { id: 'simulados', label: 'Simulados' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'caderno_erros', label: 'Erros' },
];

const DAILY_GOAL_PRESETS = [10, 20, 30, 50];

const HOURS_24 = Array.from({ length: 24 }, (_, h) => h);

function formatHour(hour: number): string {
  return `${String(hour).padStart(2, '0')}:00`;
}

export function TopBar({
  activeTab,
  mode = 'estudo',
  simuladoActive = false,
  onSelectHome,
  onSelectTab,
  onSelectSimulados,
  dueFlashcardsCount = 0,
  errorNotebookCount = 0,
  activeFilterCount = 0,
  dailyGoal,
  onUpdateDailyGoalTarget,
  onOpenRoutineConfig,
  onOpenCommandPalette,
  darkMode,
  themeMode,
  onChangeThemeMode,
  themeSchedule,
  onChangeThemeSchedule,
  readingComfort,
  onToggleReadingComfort,
  focusMode,
  onToggleFocusMode,
  onOpenMobileMenu,
  gamificationCore,
  onOpenGamificationHub,
}: TopBarProps) {
  const crumb = resolveTopBarContext(activeTab, mode, simuladoActive);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [goalMenuOpen, setGoalMenuOpen] = useState(false);
  const [customGoalInput, setCustomGoalInput] = useState(
    String(dailyGoal?.target ?? 20)
  );
  const [nowLabel, setNowLabel] = useState(() =>
    new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const goalMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dailyGoal) {
      setCustomGoalInput(String(dailyGoal.target));
    }
  }, [dailyGoal?.target]);

  useEffect(() => {
    if (!goalMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (goalMenuRef.current && !goalMenuRef.current.contains(e.target as Node)) {
        setGoalMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGoalMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goalMenuOpen]);

  useEffect(() => {
    if (!themeMenuOpen) return;
    setNowLabel(
      new Date().toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setThemeMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setThemeMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [themeMenuOpen]);

  const themeOptions: Array<{
    mode: ThemeMode;
    label: string;
    description: string;
    shortLabel: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    {
      mode: 'light',
      label: 'Claro',
      shortLabel: 'Claro',
      description: 'Fundo claro fixo para ambientes bem iluminados',
      icon: Sun,
    },
    {
      mode: 'dark',
      label: 'Escuro',
      shortLabel: 'Escuro',
      description: 'Reduz brilho em estudos noturnos prolongados',
      icon: Moon,
    },
    {
      mode: 'system',
      label: 'Preferência do navegador',
      shortLabel: 'Sistema',
      description: 'Acompanha automaticamente o tema do dispositivo',
      icon: Monitor,
    },
    {
      mode: 'schedule',
      label: 'Automático por horário',
      shortLabel: 'Horário',
      description: `Claro ${formatHour(themeSchedule.lightStartHour)}–${formatHour(
        themeSchedule.darkStartHour
      )} · Escuro ${formatHour(themeSchedule.darkStartHour)}–${formatHour(
        themeSchedule.lightStartHour
      )}`,
      icon: Clock,
    },
  ];

  const activeThemeMeta =
    themeOptions.find((opt) => opt.mode === themeMode) ?? themeOptions[0];
  const isAutoMode = themeMode === 'system' || themeMode === 'schedule';
  const nextSwitchHour = darkMode
    ? themeSchedule.lightStartHour
    : themeSchedule.darkStartHour;
  const nextSwitchLabel = darkMode ? 'Claro' : 'Escuro';

  return (
    <header className="sticky top-0 z-30 flex h-12 shrink-0 items-center justify-between gap-2 border-b border-slate-200/80 bg-[#F8FAFC]/95 px-3 sm:px-5 backdrop-blur-md transition-colors duration-200 dark:border-white/[0.08] dark:bg-[#0B0F17]/95">
      {/* Left: Unified Drawer button (desktop + mobile) + Brand + Primary Desktop Nav / Context */}
      <div className="flex items-center gap-2 min-w-0">
        {!focusMode && (
          <button
            type="button"
            onClick={onOpenMobileMenu}
            aria-label="Abrir menu de navegação"
            title="Menu completo e filtros"
            className="rounded-lg p-1.5 text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/[0.08] cursor-pointer transition-colors"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
        )}

        <button
          type="button"
          onClick={onSelectHome}
          className="flex items-center gap-2 rounded-lg pr-1 py-0.5 text-left transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] cursor-pointer shrink-0"
          title="Voltar ao Início"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#007AFF] text-white">
            <Stethoscope size={15} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <span className="font-display text-sm sm:text-[15px] font-semibold tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            MedR1
          </span>
        </button>

        {/* Desktop Direct Primary Navigation (5 Core Modules) */}
        {!focusMode && onSelectTab && (
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-1 ml-2 pl-2 border-l border-slate-200/80 dark:border-white/[0.08]"
          >
            {PRIMARY_NAV_ITEMS.map((item) => {
              const isActive = crumb.activePrimaryId === item.id;
              const badge =
                item.id === 'flashcards' && dueFlashcardsCount > 0
                  ? dueFlashcardsCount
                  : item.id === 'caderno_erros' && errorNotebookCount > 0
                  ? errorNotebookCount
                  : null;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (item.id === 'simulados') {
                      onSelectSimulados?.();
                    } else {
                      onSelectTab(item.id);
                    }
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                    isActive
                      ? 'bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300'
                      : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-slate-100'
                  )}
                >
                  <span>{item.label}</span>
                  {badge !== null && (
                    <span
                      className={cn(
                        'font-mono text-[10px] tabular-nums rounded-full px-1.5 py-0.2',
                        isActive
                          ? 'bg-[#007AFF]/15 text-[#007AFF] dark:bg-sky-400/20 dark:text-sky-200'
                          : 'bg-slate-200/70 text-slate-600 dark:bg-white/10 dark:text-slate-300'
                      )}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* Contextual Breadcrumb (Mobile/Tablet, Focus Mode, or Secondary Tabs like Desempenho/Ranking/Importar) */}
        <div
          className={cn(
            'flex items-center gap-2 text-xs sm:text-sm min-w-0',
            !focusMode && onSelectTab && crumb.activePrimaryId !== null && 'lg:hidden'
          )}
        >
          <span
            className="text-slate-300 dark:text-slate-700 select-none"
            aria-hidden="true"
          >
            /
          </span>
          <h1 className="font-display text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
            {crumb.section}
          </h1>
          <span
            className="hidden md:inline text-slate-300 dark:text-slate-700"
            aria-hidden="true"
          >
            ·
          </span>
          <span className="hidden md:inline text-xs text-slate-500 dark:text-slate-400 truncate">
            {crumb.detail}
          </span>
        </div>
      </div>

      {/* Right: Quick Search (Cmd+K) + Gamification Pill + Filters + Editable Goal Pill + Routine + Focus + Theme */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {gamificationCore && onOpenGamificationHub && !focusMode && (
          <button
            type="button"
            onClick={onOpenGamificationHub}
            title={`Jornada R1: ${gamificationCore.rankLabel} (Nível ${gamificationCore.level}) · ${gamificationCore.totalXp} XP`}
            aria-label={`Abrir jornada de gamificação: Nível ${gamificationCore.level}, ${gamificationCore.totalXp} XP`}
            className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-lg border border-black/5 bg-white px-2.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-100 dark:hover:bg-[#182030] transition-colors cursor-pointer whitespace-nowrap tabular-nums"
          >
            <Trophy size={14} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400" />
            <span>Nv. {gamificationCore.level}</span>
            <span className="text-[#86868B] dark:text-slate-400">·</span>
            <span className="text-[#86868B] dark:text-slate-300">
              {gamificationCore.totalXp.toLocaleString('pt-BR')} XP
            </span>
          </button>
        )}

        {onOpenCommandPalette && !focusMode && (
          <button
            type="button"
            onClick={onOpenCommandPalette}
            title="Busca rápida (⌘K ou Ctrl+K)"
            aria-label="Abrir busca rápida"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2 sm:px-2.5 text-xs text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-400 dark:hover:bg-[#182030] dark:hover:text-slate-100 transition-colors cursor-pointer whitespace-nowrap"
          >
            <Search size={13} strokeWidth={1.5} />
            <span className="hidden xl:inline text-[11px]">Buscar...</span>
            <kbd className="hidden sm:inline rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px] text-slate-500 dark:bg-white/[0.08] dark:text-slate-400">
              ⌘K
            </kbd>
          </button>
        )}

        {activeTab === 'questoes' && !focusMode && (
          <button
            type="button"
            onClick={onOpenMobileMenu}
            title="Abrir filtros do banco de questões"
            className={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
              activeFilterCount > 0
                ? 'border-[#007AFF]/40 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/40 dark:bg-sky-500/15 dark:text-sky-300'
                : 'border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-200 dark:hover:bg-[#182030]'
            )}
          >
            <Filter size={13} strokeWidth={1.5} />
            <span className="hidden sm:inline">Filtros</span>
            {activeFilterCount > 0 && (
              <span className="rounded-full bg-[#007AFF] px-1.5 font-mono text-[10px] font-semibold tabular-nums text-white">
                {activeFilterCount}
              </span>
            )}
          </button>
        )}

        {dailyGoal && (
          <div className="relative" ref={goalMenuRef}>
            <button
              type="button"
              onClick={() => setGoalMenuOpen((o) => !o)}
              aria-haspopup="dialog"
              aria-expanded={goalMenuOpen}
              title="Clique para ajustar sua meta diária de questões"
              className={cn(
                'hidden sm:inline-flex h-8 items-center gap-2 rounded-lg border px-2.5 font-mono text-[11px] tabular-nums transition-colors cursor-pointer',
                goalMenuOpen
                  ? 'border-[#007AFF]/45 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/50 dark:bg-sky-500/15 dark:text-sky-200'
                  : 'border-slate-200/80 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-300 dark:hover:bg-[#182030]'
              )}
            >
              <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Flame size={13} strokeWidth={1.5} />
                <span>{dailyGoal.streakDays}d</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
                ·
              </span>
              <span>
                {dailyGoal.answeredToday}/{dailyGoal.target}q
              </span>
            </button>

            {goalMenuOpen && onUpdateDailyGoalTarget && (
              <div
                role="dialog"
                aria-label="Editar meta diária de questões"
                className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200/85 bg-white p-3.5 shadow-xl dark:border-white/[0.1] dark:bg-[#1E222B] z-40 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">
                    Meta Diária de Questões
                  </span>
                  <span className="font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
                    {dailyGoal.pct}% hoje
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0B0F17]">
                  {DAILY_GOAL_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        onUpdateDailyGoalTarget(preset);
                        setCustomGoalInput(String(preset));
                        setGoalMenuOpen(false);
                      }}
                      className={cn(
                        'rounded-md py-1 font-mono text-xs font-medium tabular-nums transition-colors cursor-pointer',
                        dailyGoal.target === preset
                          ? 'bg-white text-[#007AFF] shadow-xs dark:bg-[#182030] dark:text-sky-300'
                          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                      )}
                    >
                      {preset}q
                    </button>
                  ))}
                </div>

                <form
                  className="flex items-center gap-1.5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const clamped = clampDailyGoalTarget(Number(customGoalInput));
                    onUpdateDailyGoalTarget(clamped);
                    setCustomGoalInput(String(clamped));
                    setGoalMenuOpen(false);
                  }}
                >
                  <input
                    type="number"
                    min={5}
                    max={300}
                    value={customGoalInput}
                    onChange={(e) => setCustomGoalInput(e.target.value)}
                    aria-label="Meta personalizada de questões"
                    className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-xs tabular-nums text-slate-900 focus:border-[#007AFF] focus:outline-none dark:border-white/10 dark:bg-[#0B0F17] dark:text-white"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-[#007AFF] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#0066D6] transition-colors cursor-pointer shrink-0"
                  >
                    Salvar
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {onOpenRoutineConfig && (
          <button
            type="button"
            onClick={onOpenRoutineConfig}
            title="Configurar rotina semanal de estudos"
            className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-200 dark:hover:bg-[#182030] transition-colors cursor-pointer whitespace-nowrap"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} className="text-slate-500 dark:text-slate-400" />
            <span className="hidden md:inline">Rotina</span>
          </button>
        )}

        {activeTab === 'questoes' && (
          <button
            type="button"
            onClick={onToggleFocusMode}
            title={
              focusMode
                ? 'Sair do Modo Foco e exibir painéis laterais'
                : 'Ocultar painel lateral para simular ambiente de prova'
            }
            className={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]',
              focusMode
                ? 'border-[#007AFF] bg-[#007AFF] text-white hover:bg-[#0066D6]'
                : 'border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-200 dark:hover:bg-[#182030]'
            )}
          >
            {focusMode ? (
              <>
                <Minimize2 size={14} strokeWidth={1.5} />
                <span>Sair do Foco</span>
              </>
            ) : (
              <>
                <Maximize2 size={14} strokeWidth={1.5} />
                <span className="hidden sm:inline">Modo Foco</span>
              </>
            )}
          </button>
        )}

        {/* Smart Light/Dark/Auto Theme & Long-Reading Menu */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setThemeMenuOpen((o) => !o)}
            aria-haspopup="menu"
            aria-expanded={themeMenuOpen}
            aria-label={`Modo de exibição: ${activeThemeMeta.label}`}
            title={`Aparência: ${activeThemeMeta.label} (${
              darkMode ? 'Escuro ativo' : 'Claro ativo'
            })${readingComfort ? ' · Leitura confortável ativa' : ''}`}
            className={cn(
              'inline-flex h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]',
              themeMenuOpen
                ? 'border-[#007AFF]/45 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/60 dark:bg-sky-500/15 dark:text-sky-200'
                : 'border-slate-200/80 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/[0.08] dark:bg-[#131926] dark:text-slate-200 dark:hover:bg-[#182030]'
            )}
          >
            {themeMode === 'schedule' ? (
              <Clock
                className={cn(
                  'h-4 w-4',
                  darkMode ? 'text-amber-400' : 'text-[#1A56DB]'
                )}
              />
            ) : themeMode === 'system' ? (
              <Monitor
                className={cn(
                  'h-4 w-4',
                  darkMode ? 'text-sky-400' : 'text-slate-600'
                )}
              />
            ) : darkMode ? (
              <Moon className="h-4 w-4 text-sky-400" />
            ) : (
              <Sun className="h-4 w-4 text-amber-500" />
            )}
            <span className="hidden sm:inline whitespace-nowrap">
              {isAutoMode
                ? `Auto · ${activeThemeMeta.shortLabel}`
                : activeThemeMeta.shortLabel}
            </span>
            {readingComfort && (
              <BookOpen
                className="h-3.5 w-3.5 text-[#1A56DB] dark:text-sky-400"
                aria-label="Modo leitura confortável ativo"
              />
            )}
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>

          {themeMenuOpen && (
            <div
              role="menu"
              aria-label="Opções de modo claro, escuro e leitura"
              className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200/85 bg-white p-1.5 shadow-xl dark:border-white/[0.1] dark:bg-[#1E222B] z-40"
            >
              <div className="px-2.5 py-2 border-b border-slate-100 dark:border-white/[0.07] flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Modo de Exibição
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                  {darkMode ? (
                    <>
                      <Moon className="h-3 w-3 text-sky-400" />
                      Escuro ativo
                    </>
                  ) : (
                    <>
                      <Sun className="h-3 w-3 text-amber-500" />
                      Claro ativo
                    </>
                  )}
                </span>
              </div>

              <div className="py-1 space-y-0.5">
                {themeOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = themeMode === opt.mode;
                  return (
                    <button
                      key={opt.mode}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isSelected}
                      onClick={() => {
                        onChangeThemeMode(opt.mode);
                        if (opt.mode !== 'schedule') {
                          setThemeMenuOpen(false);
                        }
                      }}
                      className={cn(
                        'flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors cursor-pointer',
                        isSelected
                          ? 'bg-sky-50 text-sky-900 dark:bg-sky-950/50 dark:text-sky-100'
                          : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/70'
                      )}
                    >
                      <Icon
                        className={cn(
                          'h-4 w-4 mt-0.5 shrink-0',
                          isSelected
                            ? 'text-sky-600 dark:text-sky-400'
                            : 'text-slate-400 dark:text-slate-500'
                        )}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-semibold">
                            {opt.label}
                          </span>
                          {isSelected && (
                            <Check className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] leading-snug text-slate-500 dark:text-slate-400 mt-0.5">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Customizable System Clock Window when Schedule mode is active */}
              {themeMode === 'schedule' && (
                <div className="mx-1.5 mb-1.5 rounded-lg border border-slate-200/80 bg-slate-50/80 p-2.5 space-y-2 dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="grid grid-cols-2 gap-2">
                    <label className="space-y-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Claro às
                      </span>
                      <select
                        value={themeSchedule.lightStartHour}
                        onChange={(e) =>
                          onChangeThemeSchedule({
                            ...themeSchedule,
                            lightStartHour: Number(e.target.value),
                          })
                        }
                        className="w-full rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-xs text-slate-800 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      >
                        {HOURS_24.map((h) => (
                          <option key={h} value={h}>
                            {formatHour(h)}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="space-y-1">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Escuro às
                      </span>
                      <select
                        value={themeSchedule.darkStartHour}
                        onChange={(e) =>
                          onChangeThemeSchedule({
                            ...themeSchedule,
                            darkStartHour: Number(e.target.value),
                          })
                        }
                        className="w-full rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-xs text-slate-800 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                      >
                        {HOURS_24.map((h) => (
                          <option key={h} value={h}>
                            {formatHour(h)}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <p className="font-mono text-[10px] tabular-nums text-slate-500 dark:text-slate-400">
                    Relógio {nowLabel} · Próxima troca às{' '}
                    {formatHour(nextSwitchHour)} ({nextSwitchLabel})
                  </p>
                </div>
              )}

              {/* Long-Question Reading Comfort Ergonomics Switch */}
              <div className="border-t border-slate-100 pt-1.5 px-1 pb-1 dark:border-slate-800">
                <button
                  type="button"
                  role="switch"
                  aria-checked={readingComfort}
                  onClick={onToggleReadingComfort}
                  className="flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70 cursor-pointer"
                >
                  <div className="flex items-start gap-2.5 min-w-0">
                    <BookOpen
                      className={cn(
                        'h-4 w-4 mt-0.5 shrink-0',
                        readingComfort
                          ? 'text-sky-600 dark:text-sky-400'
                          : 'text-slate-400 dark:text-slate-500'
                      )}
                    />
                    <div className="min-w-0">
                      <span className="block text-xs font-semibold text-slate-800 dark:text-slate-100">
                        Leitura de questões longas
                      </span>
                      <span className="block text-[11px] leading-snug text-slate-500 dark:text-slate-400">
                        Fonte ampliada, entrelinha larga e contraste suave
                      </span>
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors',
                      readingComfort
                        ? 'bg-sky-600 dark:bg-sky-500'
                        : 'bg-slate-200 dark:bg-slate-700'
                    )}
                  >
                    <span
                      className={cn(
                        'inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow-xs transition-transform',
                        readingComfort ? 'translate-x-4.5' : 'translate-x-1'
                      )}
                    />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
