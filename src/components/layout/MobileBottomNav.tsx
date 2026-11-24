import React from 'react';
import {
  BookmarkCheck,
  BookOpenCheck,
  CalendarDays,
  Layers,
  Menu,
} from 'lucide-react';
import type { ActiveTab, StudyMode } from '../../types/medical';
import { cn } from '../../lib/utils';

export interface MobileBottomNavProps {
  activeTab: ActiveTab;
  mode: StudyMode;
  dueFlashcardsCount: number;
  errorNotebookCount: number;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenDrawer: () => void;
}

export function MobileBottomNav({
  activeTab,
  mode,
  dueFlashcardsCount,
  errorNotebookCount,
  onSelectTab,
  onOpenDrawer,
}: MobileBottomNavProps): React.ReactElement {
  const items: Array<{
    id: 'inicio' | 'questoes' | 'flashcards' | 'caderno_erros' | 'mais';
    label: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    badge?: number;
    active: boolean;
    onClick: () => void;
  }> = [
    {
      id: 'inicio',
      label: 'Início',
      icon: CalendarDays,
      active: activeTab === 'inicio',
      onClick: () => onSelectTab('inicio'),
    },
    {
      id: 'questoes',
      label: 'Questões',
      icon: BookOpenCheck,
      active: activeTab === 'questoes' && mode === 'estudo',
      onClick: () => onSelectTab('questoes'),
    },
    {
      id: 'flashcards',
      label: 'Flashcards',
      icon: Layers,
      badge: dueFlashcardsCount > 0 ? dueFlashcardsCount : undefined,
      active: activeTab === 'flashcards',
      onClick: () => onSelectTab('flashcards'),
    },
    {
      id: 'caderno_erros',
      label: 'Erros',
      icon: BookmarkCheck,
      badge: errorNotebookCount > 0 ? errorNotebookCount : undefined,
      active: activeTab === 'caderno_erros',
      onClick: () => onSelectTab('caderno_erros'),
    },
    {
      id: 'mais',
      label: 'Mais',
      icon: Menu,
      active:
        (activeTab === 'questoes' && mode === 'simulado') ||
        activeTab === 'desempenho' ||
        activeTab === 'ranking' ||
        activeTab === 'importar',
      onClick: onOpenDrawer,
    },
  ];

  return (
    <nav
      aria-label="Navegação rápida mobile"
      className="fixed inset-x-0 bottom-0 z-30 flex h-14 items-center justify-around border-t border-slate-200/80 bg-[#F8FAFC]/95 px-2 backdrop-blur-md lg:hidden dark:border-white/[0.08] dark:bg-[#0B0F17]/95"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            onClick={item.onClick}
            aria-current={item.active ? 'page' : undefined}
            className={cn(
              'relative flex flex-1 flex-col items-center justify-center gap-0.5 py-1 text-[10px] font-medium transition-colors cursor-pointer',
              item.active
                ? 'text-[#007AFF] dark:text-sky-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            )}
          >
            <span className="relative">
              <Icon size={18} strokeWidth={1.5} />
              {item.badge !== undefined && (
                <span className="absolute -right-2.5 -top-1.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#007AFF] px-1 font-mono text-[9px] font-semibold tabular-nums text-white">
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </span>
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
