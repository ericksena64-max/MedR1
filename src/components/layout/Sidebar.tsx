import React, { useEffect } from 'react';
import {
  CalendarDays,
  BookOpenCheck,
  BarChart3,
  Trophy,
  BookmarkCheck,
  Layers,
  X,
  Stethoscope,
  ShieldCheck,
  UploadCloud,
  Timer,
} from 'lucide-react';
import type { ActiveTab, UserProfile } from '../../types/medical';
import { cn } from '../../lib/utils';

interface SidebarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onSelectSimulados?: () => void;
  isSimuladoActive?: boolean;
  profile: UserProfile;
  errorNotebookCount: number;
  dueFlashcardsCount: number;
  onlineTotal: number;
  currentUserRank: number;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  sidebarFilters?: React.ReactNode;
  importedQuestionsCount?: number;
}

export function Sidebar({
  activeTab,
  onSelectTab,
  onSelectSimulados,
  isSimuladoActive = false,
  profile,
  errorNotebookCount,
  dueFlashcardsCount,
  onlineTotal,
  currentUserRank,
  mobileOpen,
  onCloseMobile,
  sidebarFilters,
  importedQuestionsCount = 0,
}: SidebarProps) {
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onCloseMobile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen, onCloseMobile]);

  if (!mobileOpen) {
    return null;
  }

  const navItems: Array<{
    id: ActiveTab | 'simulados';
    label: string;
    icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
    meta?: string;
    highlightMeta?: boolean;
    secondary?: boolean;
  }> = [
    {
      id: 'inicio',
      label: 'Início',
      icon: CalendarDays,
    },
    {
      id: 'questoes',
      label: 'Banco de Questões',
      icon: BookOpenCheck,
    },
    {
      id: 'simulados',
      label: 'Simulados',
      icon: Timer,
    },
    {
      id: 'flashcards',
      label: 'Flashcards',
      icon: Layers,
      meta: dueFlashcardsCount > 0 ? `${dueFlashcardsCount} hoje` : '0',
      highlightMeta: dueFlashcardsCount > 0,
    },
    {
      id: 'caderno_erros',
      label: 'Caderno de Erros',
      icon: BookmarkCheck,
      meta: String(errorNotebookCount),
    },
    {
      id: 'desempenho',
      label: 'Desempenho',
      icon: BarChart3,
      secondary: true,
    },
    {
      id: 'ranking',
      label: 'Ranking Ao Vivo',
      icon: Trophy,
      meta: `#${currentUserRank}`,
      secondary: true,
    },
    {
      id: 'importar',
      label: 'Importar Provas IA',
      icon: UploadCloud,
      meta: importedQuestionsCount > 0 ? `+${importedQuestionsCount}` : 'PDF/CSV',
      highlightMeta: importedQuestionsCount > 0,
      secondary: true,
    },
  ];

  const displayName = profile.usePseudonym ? profile.pseudonym : profile.realName;

  return (
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-[2px]"
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      <aside className="relative z-10 flex h-full w-80 max-w-[85vw] flex-col border-r border-black/5 bg-[#EBEBF0]/90 backdrop-blur-xl shadow-2xl dark:border-white/[0.08] dark:bg-[#131926]/95">
        {/* Drawer Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-black/5 px-4 dark:border-white/[0.07]">
          <button
            type="button"
            onClick={() => {
              onSelectTab('inicio');
              onCloseMobile();
            }}
            className="flex items-center gap-2 text-left transition-opacity hover:opacity-90 cursor-pointer"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#007AFF] text-white">
              <Stethoscope size={15} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
              MedR1
            </span>
          </button>

          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Fechar menu de navegação"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-black/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation Links + Contextual Question Filters */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive =
              item.id === 'simulados'
                ? activeTab === 'questoes' && isSimuladoActive
                : item.id === 'questoes'
                ? activeTab === 'questoes' && !isSimuladoActive
                : activeTab === item.id;
            const showSecondaryDivider =
              item.secondary && (idx === 0 || !navItems[idx - 1].secondary);

            return (
              <React.Fragment key={item.id}>
                {showSecondaryDivider && (
                  <div className="my-2 border-t border-black/5 dark:border-white/[0.07]" />
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (item.id === 'simulados') {
                      onSelectSimulados?.();
                    } else {
                      onSelectTab(item.id);
                    }
                    onCloseMobile();
                  }}
                  className={cn(
                    'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]',
                    isActive
                      ? 'bg-[#007AFF]/12 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300'
                      : 'text-slate-700 hover:bg-black/[0.04] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.05] dark:hover:text-white'
                  )}
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <Icon
                      strokeWidth={1.5}
                      className={cn(
                        'h-4 w-4 shrink-0',
                        isActive
                          ? 'text-[#007AFF] dark:text-sky-400'
                          : 'text-slate-500 dark:text-slate-400'
                      )}
                    />
                    <span className="truncate whitespace-nowrap">{item.label}</span>
                  </span>

                  {item.meta && (
                    <span
                      className={cn(
                        'font-mono text-xs tabular-nums whitespace-nowrap',
                        item.highlightMeta
                          ? 'font-semibold text-[#007AFF] dark:text-sky-400'
                          : 'text-slate-500 dark:text-slate-400'
                      )}
                    >
                      {item.meta}
                    </span>
                  )}
                </button>
              </React.Fragment>
            );
          })}

          {sidebarFilters && (
            <div className="pt-3 mt-3 border-t border-black/5 dark:border-white/[0.07]">
              {sidebarFilters}
            </div>
          )}
        </nav>

        {/* Bottom Student Profile Summary */}
        <div className="border-t border-black/5 p-3 dark:border-white/[0.07]">
          <button
            type="button"
            onClick={() => {
              onSelectTab('ranking');
              onCloseMobile();
            }}
            className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.05] cursor-pointer"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#007AFF]/15 text-xs font-bold text-[#007AFF] dark:bg-sky-500/20 dark:text-sky-300">
              {profile.usePseudonym
                ? profile.pseudonym.slice(0, 2).toUpperCase()
                : profile.avatarInitials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {displayName}
                </p>
                {profile.usePseudonym && (
                  <ShieldCheck
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#007AFF] dark:text-sky-400"
                    aria-label="Modo Pseudônimo ativo"
                  />
                )}
              </div>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400 tabular-nums">
                Alvo: {profile.targetInstitution} · {onlineTotal} online
              </p>
            </div>
          </button>
        </div>
      </aside>
    </div>
  );
}
