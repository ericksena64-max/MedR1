import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import type { MedicalQuestion } from '../../types/medical';
import {
  buildCommandPaletteItems,
  filterCommandPaletteItems,
  type CommandPaletteAction,
} from '../../lib/commandPalette';
import { cn } from '../../lib/utils';

export interface CommandPaletteModalProps {
  open: boolean;
  onClose: () => void;
  questions: MedicalQuestion[];
  onExecuteAction: (action: CommandPaletteAction) => void;
}

export function CommandPaletteModal({
  open,
  onClose,
  questions,
  onExecuteAction,
}: CommandPaletteModalProps): React.ReactElement | null {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const allItems = useMemo(
    () => buildCommandPaletteItems(questions),
    [questions]
  );

  const results = useMemo(
    () => filterCommandPaletteItems(allItems, query),
    [allItems, query]
  );

  useEffect(() => {
    if (!open) return;
    setQuery('');
    setSelectedIndex(0);
    document.body.dataset.medr1ModalOpen = 'true';
    const raf = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
    return () => {
      window.cancelAnimationFrame(raf);
      delete document.body.dataset.medr1ModalOpen;
    };
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((idx) =>
          results.length === 0 ? 0 : (idx + 1) % results.length
        );
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((idx) =>
          results.length === 0 ? 0 : (idx - 1 + results.length) % results.length
        );
        return;
      }
      if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        const chosen = results[selectedIndex];
        onClose();
        onExecuteAction(chosen.action);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, results, selectedIndex, onClose, onExecuteAction]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/55 px-4 pt-[12vh] backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Busca rápida de navegação"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl dark:border-white/[0.1] dark:bg-[#131926]">
        {/* Search Input Header */}
        <div className="flex items-center gap-2.5 border-b border-slate-200/70 px-4 py-3 dark:border-white/[0.08]">
          <Search size={16} strokeWidth={1.5} className="shrink-0 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ir para módulo, especialidade ou ação (ex.: Cardiologia, Rotina)..."
            aria-label="Buscar comandos e rotas"
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar busca rápida"
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X size={15} strokeWidth={1.5} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="py-8 text-center text-xs text-slate-400 dark:text-slate-500">
              Nenhum resultado encontrado para "{query}".
            </p>
          ) : (
            <ul role="listbox" className="space-y-0.5">
              {results.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <li key={item.id} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => {
                        onClose();
                        onExecuteAction(item.action);
                      }}
                      className={cn(
                        'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left transition-colors cursor-pointer',
                        isSelected
                          ? 'bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300'
                          : 'text-slate-800 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-white/[0.05]'
                      )}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate text-xs font-semibold">
                            {item.label}
                          </span>
                          <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/[0.07] dark:text-slate-400">
                            {item.group}
                          </span>
                        </div>
                        <p className="mt-0.5 truncate text-[11px] text-slate-500 dark:text-slate-400">
                          {item.subtitle}
                        </p>
                      </div>
                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className={cn(
                          'shrink-0',
                          isSelected ? 'opacity-100' : 'opacity-30'
                        )}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Keyboard Hints Footer */}
        <div className="flex items-center justify-between border-t border-slate-200/70 bg-slate-50/70 px-4 py-2 text-[10px] text-slate-500 dark:border-white/[0.07] dark:bg-[#0B0F17]/60 dark:text-slate-400">
          <span>↑↓ navegar · Enter abrir · Esc fechar</span>
          <span className="font-mono">⌘K / Ctrl+K</span>
        </div>
      </div>
    </div>
  );
}
