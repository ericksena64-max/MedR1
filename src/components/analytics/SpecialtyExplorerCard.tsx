import React, { useMemo, useRef, useState } from 'react';
import {
  Activity,
  Baby,
  Brain,
  ChevronLeft,
  ChevronRight,
  Heart,
  Microscope,
  Pill,
  Scissors,
  Shield,
  Stethoscope,
  Wind,
} from 'lucide-react';
import type { GrandeAreaId, MedicalQuestion } from '../../types/medical';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  buildSpecialtyExplorerItems,
  type SpecialtyIconKey,
} from '../../lib/medicalSpecialties';
import { cn } from '../../lib/utils';

export interface SpecialtyExplorerCardProps {
  questions: MedicalQuestion[];
  onPracticeTopic: (payload: {
    topicLabel: string;
    matchedTema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
}

function renderSpecialtyIcon(iconKey: SpecialtyIconKey) {
  const props = { size: 18, strokeWidth: 1.5 };
  switch (iconKey) {
    case 'heart':
      return <Heart {...props} />;
    case 'brain':
      return <Brain {...props} />;
    case 'lungs':
      return <Wind {...props} />;
    case 'scalpel':
      return <Scissors {...props} />;
    case 'baby':
      return <Baby {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'activity':
      return <Activity {...props} />;
    case 'pill':
      return <Pill {...props} />;
    case 'microscope':
      return <Microscope {...props} />;
    default:
      return <Stethoscope {...props} />;
  }
}

export function SpecialtyExplorerCard({
  questions,
  onPracticeTopic,
}: SpecialtyExplorerCardProps): React.ReactElement | null {
  const [activeArea, setActiveArea] = useState<GrandeAreaId | 'todos'>('todos');
  const railRef = useRef<HTMLDivElement | null>(null);

  const allItemsCount = useMemo(
    () => buildSpecialtyExplorerItems(questions, 'todos').length,
    [questions]
  );

  const items = useMemo(
    () => buildSpecialtyExplorerItems(questions, activeArea),
    [questions, activeArea]
  );

  if (allItemsCount === 0) {
    return null;
  }

  const scrollRail = (delta: number) => {
    railRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section
      aria-label="Navegue pelas Cadeiras Médicas"
      className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5 dark:border-white/[0.08] dark:bg-[#131926] space-y-3.5"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
            Navegue pelas Cadeiras Médicas
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Acesse questões diretas por especialidade ou filtre por grande área
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollRail(-280)}
            aria-label="Especialidades anteriores"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-500 hover:border-[#007AFF]/40 hover:text-[#007AFF] dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-400 dark:hover:border-sky-400/40 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <ChevronLeft size={15} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => scrollRail(280)}
            aria-label="Próximas especialidades"
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200/80 bg-white text-slate-500 hover:border-[#007AFF]/40 hover:text-[#007AFF] dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-400 dark:hover:border-sky-400/40 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <ChevronRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Category Filter Pills (Todos + 5 Grandes Áreas) */}
      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={() => setActiveArea('todos')}
          aria-pressed={activeArea === 'todos'}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer',
            activeArea === 'todos'
              ? 'bg-[#007AFF] text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 dark:bg-[#0B0F17] dark:text-slate-300 dark:hover:bg-white/10'
          )}
        >
          Todos
        </button>
        {GRANDES_AREAS.map((area) => {
          const active = activeArea === area.id;
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => setActiveArea(area.id)}
              aria-pressed={active}
              className={cn(
                'rounded-full px-3 py-1 text-xs font-medium transition-colors cursor-pointer',
                active
                  ? 'bg-[#007AFF] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 dark:bg-[#0B0F17] dark:text-slate-300 dark:hover:bg-white/10'
              )}
            >
              {area.name}
            </button>
          );
        })}
      </div>

      {/* Horizontal Specialty Carousel */}
      {items.length > 0 ? (
        <div
          ref={railRef}
          className="flex gap-3 overflow-x-auto pb-1 scroll-smooth"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                onPracticeTopic({
                  topicLabel: item.label,
                  matchedTema: item.label,
                  grandeAreaId: item.grandeAreaId,
                })
              }
              title={`Praticar ${item.label} (${item.questionCount} questões)`}
              className="group flex w-24 shrink-0 flex-col items-center gap-1.5 rounded-xl border border-transparent px-2 py-2 text-center hover:border-[#007AFF]/25 hover:bg-slate-50/80 dark:hover:border-sky-400/25 dark:hover:bg-white/[0.03] transition-colors cursor-pointer"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-700 group-hover:border-[#007AFF]/45 group-hover:bg-[#007AFF]/10 group-hover:text-[#007AFF] dark:border-white/10 dark:bg-[#1B2333] dark:text-slate-200 dark:group-hover:border-sky-400/50 dark:group-hover:bg-[#007AFF]/20 dark:group-hover:text-sky-300 transition-colors">
                {renderSpecialtyIcon(item.iconKey)}
              </span>
              <span className="text-[11px] font-medium leading-tight text-slate-800 group-hover:text-[#007AFF] dark:text-slate-200 dark:group-hover:text-sky-300 line-clamp-2">
                {item.label}
              </span>
              <span className="font-mono text-[10px] tabular-nums text-slate-400 dark:text-slate-500">
                {item.questionCount}q
              </span>
            </button>
          ))}
        </div>
      ) : (
        <p className="py-3 text-center text-xs text-slate-400 dark:text-slate-500">
          Nenhuma especialidade disponível para esta grande área no momento.
        </p>
      )}
    </section>
  );
}
