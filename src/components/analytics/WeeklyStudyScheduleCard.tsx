import React, { useEffect, useMemo, useState } from 'react';
import {
  Target,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ArrowRight,
  Layers,
  BarChart3,
  CalendarDays,
  Timer,
} from 'lucide-react';
import type { Flashcard, GrandeAreaId, MedicalQuestion } from '../../types/medical';
import type { HomeBottleneck } from '../../lib/homeIntelligence';
import {
  buildWeeklySchedule,
  loadWeeklyScheduleConfig,
  PACE_MINUTES_PER_QUESTION,
  WEEKLY_SCHEDULE_STORAGE_KEY,
  WEEKLY_SCHEDULE_UPDATED_EVENT,
  type TopicBlockStatus,
  type WeeklyScheduleConfig,
  type WeeklyTopicInput,
} from '../../lib/weeklySchedule';
import { buildExamWeeksRoadmap } from '../../lib/examRoadmap';
import { RoutineConfigModal } from './RoutineConfigModal';
import { cn } from '../../lib/utils';

const STATUS_META: Record<
  TopicBlockStatus,
  { label: string; dotClass: string; textClass: string }
> = {
  nao_iniciado: {
    label: 'Não iniciado',
    dotClass: 'bg-slate-300 dark:bg-slate-600',
    textClass: 'text-slate-500 dark:text-slate-400',
  },
  em_progresso: {
    label: 'Em progresso',
    dotClass: 'bg-[#007AFF] dark:bg-sky-400',
    textClass: 'text-[#007AFF] dark:text-sky-400',
  },
  finalizado: {
    label: 'Finalizado',
    dotClass: 'bg-emerald-500',
    textClass: 'text-emerald-700 dark:text-emerald-400',
  },
};

interface WeeklyStudyScheduleCardProps {
  flashcards: Flashcard[];
  questions?: MedicalQuestion[];
  bottleneck: HomeBottleneck | null;
  topicRows?: WeeklyTopicInput[];
  answeredTodayByTopic?: Record<string, number>;
  onPracticeArea: (areaId: GrandeAreaId) => void;
  onPracticeTopic?: (payload: {
    topicLabel: string;
    matchedTema?: string;
    matchedSubtema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
  onGoToQuestionBank: () => void;
  onGoToFlashcards: () => void;
  onGoToPerformance?: () => void;
  standalone?: boolean;
  routineModalOpen?: boolean;
  onRoutineModalOpenChange?: (open: boolean) => void;
}

export function WeeklyStudyScheduleCard({
  flashcards,
  questions = [],
  bottleneck,
  topicRows = [],
  answeredTodayByTopic = {},
  onPracticeArea,
  onPracticeTopic,
  onGoToQuestionBank,
  onGoToFlashcards,
  onGoToPerformance,
  standalone = false,
  routineModalOpen,
  onRoutineModalOpenChange,
}: WeeklyStudyScheduleCardProps) {
  const [config, setConfig] = useState<WeeklyScheduleConfig>(() => {
    try {
      return loadWeeklyScheduleConfig(
        window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
      );
    } catch {
      return loadWeeklyScheduleConfig(null);
    }
  });
  const [weekOffset, setWeekOffset] = useState(0);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [internalConfigOpen, setInternalConfigOpen] = useState(false);

  const isExternallyControlled = typeof routineModalOpen === 'boolean';
  const configOpen = isExternallyControlled ? routineModalOpen : internalConfigOpen;
  const setConfigOpen = (next: boolean) => {
    setInternalConfigOpen(next);
    onRoutineModalOpenChange?.(next);
  };

  useEffect(() => {
    const syncConfig = () => {
      try {
        setConfig(
          loadWeeklyScheduleConfig(
            window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
          )
        );
      } catch {
        setConfig(loadWeeklyScheduleConfig(null));
      }
    };
    window.addEventListener(WEEKLY_SCHEDULE_UPDATED_EVENT, syncConfig);
    window.addEventListener('storage', syncConfig);
    return () => {
      window.removeEventListener(WEEKLY_SCHEDULE_UPDATED_EVENT, syncConfig);
      window.removeEventListener('storage', syncConfig);
    };
  }, []);

  const schedule = useMemo(
    () =>
      buildWeeklySchedule({
        config,
        flashcards,
        weekOffset,
        topicRows,
        answeredTodayByTopic,
        questions,
      }),
    [config, flashcards, weekOffset, topicRows, answeredTodayByTopic, questions]
  );

  const roadmapWeeks = useMemo(
    () =>
      buildExamWeeksRoadmap({
        targetExams: schedule.targetExams,
        examDates: config.examDates,
        maxWeeks: 24,
      }),
    [schedule.targetExams, config.examDates]
  );

  const todayCardsCount = schedule.todayPlan?.flashcardsCount ?? 0;
  const nextExam = schedule.calendarSummary.nextExam;

  return (
    <section
      aria-label="Grade semanal dinâmica de estudos"
      className="overflow-hidden rounded-xl border border-slate-200/80 bg-white dark:border-white/[0.08] dark:bg-[#131926]"
    >
      {/* Faixa de Foco: Modo Rota de Aprovação */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#007AFF]/15 bg-[#007AFF]/[0.07] px-4 py-2 sm:px-5 dark:border-sky-400/15 dark:bg-[#007AFF]/[0.14]">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 min-w-0 text-xs">
          <span className="inline-flex items-center gap-1.5 font-semibold tracking-wide text-[#007AFF] dark:text-sky-300 uppercase text-[11px]">
            <Target size={14} strokeWidth={1.5} className="shrink-0" />
            <span>Rota de Aprovação</span>
          </span>
          <span className="text-slate-300 dark:text-white/20" aria-hidden="true">|</span>
          <span className="text-slate-600 dark:text-slate-300">Focando em:</span>
          <div className="inline-flex flex-wrap items-center gap-1">
            {schedule.targetExams.map((exam, idx) => (
              <span
                key={exam}
                className={cn(
                  'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold',
                  idx === 0
                    ? 'bg-[#007AFF] text-white'
                    : 'bg-white/90 text-[#007AFF] border border-[#007AFF]/25 dark:bg-[#0B0F17]/70 dark:text-sky-300 dark:border-sky-400/25'
                )}
              >
                {schedule.targetExams.length > 1 && (
                  <span className="font-mono text-[9px] opacity-85">{idx + 1}.</span>
                )}
                <span>{exam}</span>
              </span>
            ))}
          </div>
          <span className="hidden md:inline font-mono text-[11px] tabular-nums text-slate-600 dark:text-slate-300">
            · {schedule.totalWeeklyHours}h · {schedule.totalWeeklyQuestions}q · {schedule.totalWeeklyFlashcards} cards
          </span>
          {nextExam && (
            <span className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-[#1D1D1F] border border-black/5 tabular-nums dark:bg-[#0B0F17]/80 dark:text-slate-100 dark:border-white/10">
              <CalendarDays size={12} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400" />
              <span>
                {nextExam.exam} em {nextExam.daysRemaining}d · {schedule.weekPhase.shortLabel}
              </span>
            </span>
          )}
          {schedule.feasibility.status === 'critico' && (
            <button
              type="button"
              onClick={() => setConfigOpen(true)}
              className="inline-flex items-center rounded-md bg-[#FF3B30]/10 px-2 py-0.5 text-[11px] font-semibold text-[#D70015] hover:bg-[#FF3B30]/15 transition cursor-pointer tabular-nums"
            >
              Cobertura {schedule.feasibility.coveragePct}%
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowRoadmap((v) => !v)}
            aria-expanded={showRoadmap}
            className={cn(
              'inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors cursor-pointer',
              showRoadmap
                ? 'border-[#007AFF] bg-[#007AFF] text-white'
                : 'border-[#007AFF]/25 bg-white/80 text-[#007AFF] hover:bg-white dark:border-sky-400/25 dark:bg-[#0B0F17]/60 dark:text-sky-300 dark:hover:bg-[#0B0F17]'
            )}
          >
            <CalendarDays size={12} strokeWidth={1.5} />
            <span>Mapa até a Prova</span>
          </button>

          <button
            type="button"
            onClick={() => setConfigOpen(true)}
            aria-expanded={configOpen}
            className="inline-flex items-center gap-1 rounded-md border border-[#007AFF]/25 bg-white/80 px-2.5 py-1 text-[11px] font-medium text-[#007AFF] hover:bg-white dark:border-sky-400/25 dark:bg-[#0B0F17]/60 dark:text-sky-300 dark:hover:bg-[#0B0F17] transition-colors cursor-pointer"
          >
            <SlidersHorizontal size={12} strokeWidth={1.5} />
            <span>Editar rota</span>
          </button>
        </div>
      </div>

      {/* Collapsible Interactive Timeline: Mapa de Semanas até a Prova */}
      {showRoadmap && (
        <div className="border-b border-black/5 bg-[#F5F5F7]/70 px-4 py-3 sm:px-5 dark:border-white/[0.06] dark:bg-[#0F141F] space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-[#1D1D1F] dark:text-white">
              Linha do Tempo · {schedule.weekPhase.label}
            </span>
            <span className="text-[11px] text-[#86868B] dark:text-slate-400">
              {nextExam
                ? `Clique em qualquer semana para inspecionar a rota até ${nextExam.exam}`
                : 'Defina a data da prova em "Editar rota" para ativar a contagem regressiva'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {roadmapWeeks.map((item) => {
              const isSelected = item.weekOffset === weekOffset;
              const hasExam = item.examEvents.length > 0;
              return (
                <button
                  key={item.weekOffset}
                  type="button"
                  onClick={() => setWeekOffset(item.weekOffset)}
                  className={cn(
                    'flex shrink-0 flex-col items-start rounded-xl border px-3 py-2 text-left transition cursor-pointer tabular-nums min-w-[98px]',
                    isSelected
                      ? 'border-[#007AFF] bg-[#007AFF] text-white shadow-xs'
                      : hasExam
                      ? 'border-[#FF3B30]/35 bg-[#FF3B30]/10 text-[#D70015] dark:border-red-400/35 dark:bg-red-500/15 dark:text-red-300'
                      : 'border-black/5 bg-white text-[#1D1D1F] hover:border-[#007AFF]/40 dark:border-white/10 dark:bg-[#161E2E] dark:text-slate-200'
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-1 text-[10px] font-semibold">
                    <span>Sem {item.weekNumber}</span>
                    <span className={cn(isSelected ? 'text-white/85' : 'text-[#86868B] dark:text-slate-400')}>
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'mt-0.5 text-[10px] font-medium truncate max-w-full',
                      isSelected ? 'text-white/95' : 'text-[#86868B] dark:text-slate-400'
                    )}
                  >
                    {hasExam
                      ? `Dia D · ${item.examEvents.join(', ')}`
                      : item.phase.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="p-4 sm:p-5 space-y-4">
        {/* Cabeçalho Hero: Título + Ações Primárias */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Grade Semanal · {schedule.targetExamsLabel}
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
              Pareto {schedule.targetExams.length > 1 ? 'mesclado' : 'individual'} ·{' '}
              {schedule.incidenceSource === 'bank'
                ? `Base real (${schedule.bankQuestionsMatched}q)`
                : schedule.incidenceSource === 'mixed'
                ? `Base real (${schedule.bankQuestionsMatched}q) + padrão`
                : 'Base padrão'}{' '}
              · {PACE_MINUTES_PER_QUESTION[config.paceMode].toFixed(1).replace('.', ',')} min/q
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setConfigOpen(true)}
              aria-expanded={configOpen}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/[0.1] dark:bg-[#182030] dark:text-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              <span>Configurar Rotina</span>
            </button>

            <button
              type="button"
              onClick={() =>
                bottleneck
                  ? onPracticeArea(bottleneck.grandeAreaId)
                  : onGoToQuestionBank()
              }
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#007AFF] px-3.5 py-1.5 text-xs font-medium text-white shadow-xs hover:bg-[#0066D6] transition-colors cursor-pointer"
            >
              <span>
                {bottleneck
                  ? `Iniciar bloco · ${bottleneck.shortLabel}`
                  : 'Ir para Questões'}
              </span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Barra Larga de Navegação Semanal (< 22 de Novembro - 28 de Novembro de 2026 >) */}
        <div className="flex items-center justify-between gap-2 rounded-xl border border-slate-200/80 bg-slate-100/80 px-2.5 py-2 dark:border-white/[0.07] dark:bg-[#1B2333]">
          <button
            type="button"
            onClick={() => setWeekOffset((w) => w - 1)}
            aria-label="Semana anterior"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-600 hover:border-[#007AFF]/50 hover:text-[#007AFF] dark:border-white/15 dark:bg-[#131926] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2 text-center min-w-0">
            <span className="text-xs sm:text-sm font-semibold tabular-nums text-slate-900 dark:text-white">
              {schedule.weekRangeFullLabel}
            </span>
            {weekOffset !== 0 && (
              <button
                type="button"
                onClick={() => setWeekOffset(0)}
                className="rounded-md border border-[#007AFF]/30 bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF] hover:bg-[#007AFF]/15 dark:border-sky-400/30 dark:bg-sky-400/15 dark:text-sky-300 transition-colors cursor-pointer"
              >
                Voltar para Hoje
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setWeekOffset((w) => w + 1)}
            aria-label="Próxima semana"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-600 hover:border-[#007AFF]/50 hover:text-[#007AFF] dark:border-white/15 dark:bg-[#131926] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>

      {/* Fallback local modal when not controlled globally by App.tsx */}
      {!isExternallyControlled && (
        <RoutineConfigModal
          open={configOpen}
          onClose={() => setConfigOpen(false)}
          flashcards={flashcards}
        />
      )}

      {/* 7-Column Weekly Schedule Grid (Dom to Sáb) com scroll interno controlado */}
      <div className="max-h-[340px] overflow-y-auto pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
          {schedule.days.map((day) => (
            <div
              key={day.dateKey}
              className={cn(
                'rounded-xl border p-2.5 transition-colors flex flex-col gap-2 min-w-0',
                day.isActive
                  ? day.isToday
                    ? 'border-[#007AFF]/70 ring-1 ring-[#007AFF]/20 bg-[#007AFF]/[0.03] dark:border-sky-400/70 dark:ring-sky-400/20 dark:bg-sky-500/[0.07]'
                    : 'border-slate-200/80 bg-slate-50/60 dark:border-white/[0.08] dark:bg-[#0B0F17]/60'
                  : day.isToday
                  ? 'border-[#007AFF]/50 border-dashed bg-slate-50/30 dark:border-sky-400/50 dark:bg-transparent'
                  : 'border-dashed border-slate-200/80 bg-slate-50/25 dark:border-white/[0.06] dark:bg-transparent'
              )}
            >
              {/* Column Header: Relative Label above Seg, 23/11 */}
              <div className="flex items-start justify-between gap-1 border-b border-slate-200/60 pb-2 dark:border-white/[0.06]">
                <div className="min-w-0">
                  <p
                    className={cn(
                      'text-[10px] leading-tight truncate',
                      day.isToday
                        ? 'font-semibold text-[#007AFF] dark:text-sky-400'
                        : 'text-slate-400 dark:text-slate-500'
                    )}
                  >
                    {day.relativeLabel}
                  </p>
                  <p
                    className={cn(
                      'mt-0.5 text-xs font-semibold leading-tight tabular-nums',
                      day.isToday
                        ? 'text-[#007AFF] dark:text-sky-300'
                        : day.isActive
                        ? 'text-slate-900 dark:text-slate-100'
                        : 'text-slate-400 dark:text-slate-500'
                    )}
                  >
                    {day.shortLabel}, {day.dayDateCompact}
                  </p>
                </div>
                {day.isActive && (
                  <span className="font-mono text-[10px] tabular-nums text-slate-500 dark:text-slate-400 shrink-0">
                    {day.hours}h
                  </span>
                )}
              </div>

              {day.isExamDay ? (
                <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-[#007AFF]/30 bg-[#007AFF]/10 py-6 text-center px-2">
                  <span className="text-xs font-semibold text-[#007AFF] dark:text-sky-300">
                    Dia da Prova
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-[#1D1D1F] dark:text-white">
                    {day.examDayLabels?.join(' · ')}
                  </span>
                  <span className="mt-1 text-[10px] text-[#86868B] dark:text-slate-400">
                    Confie no seu preparo!
                  </span>
                </div>
              ) : day.isExamEve ? (
                <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-dashed border-emerald-300/70 bg-emerald-50/40 py-6 text-center px-2 dark:border-emerald-500/30 dark:bg-emerald-500/10">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    Véspera da Prova
                  </span>
                  <span className="mt-1 text-[10px] text-[#86868B] dark:text-slate-400">
                    Revisão leve de pérolas & descanso
                  </span>
                </div>
              ) : day.isActive ? (
                <div className="flex flex-1 flex-col gap-1.5">
                  {/* Compact Flashcards Block */}
                  <button
                    type="button"
                    onClick={onGoToFlashcards}
                    title="Abrir sessão rápida de Flashcards"
                    className="flex w-full items-center justify-between gap-1 rounded-lg border border-slate-200/75 bg-white px-2.5 py-2 text-left hover:border-[#007AFF]/45 dark:border-white/[0.08] dark:bg-[#161E2E] dark:hover:border-sky-400/45 transition-colors cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-800 dark:text-slate-100 truncate">
                      <Layers size={13} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400 shrink-0" />
                      <span>Flashcards</span>
                    </span>
                    <span className="font-mono text-[11px] font-semibold tabular-nums text-slate-900 dark:text-white shrink-0">
                      {day.flashcardsCount}
                    </span>
                  </button>

                  {/* Individualized Topic Bars (1 to 3 per active day) */}
                  {day.topicBlocks.length > 0 ? (
                    day.topicBlocks.map((block) => {
                      const statusMeta = STATUS_META[block.status];
                      const isSimuladoBlock = block.blockKind === 'simulado';
                      return (
                        <button
                          key={block.id}
                          type="button"
                          onClick={() => {
                            if (isSimuladoBlock) {
                              onGoToQuestionBank();
                            } else if (onPracticeTopic) {
                              onPracticeTopic({
                                topicLabel: block.subtema ?? block.topic,
                                matchedTema: block.topic,
                                matchedSubtema: block.subtema,
                                grandeAreaId: block.grandeAreaId,
                              });
                            } else {
                              onPracticeArea(block.grandeAreaId);
                            }
                          }}
                          title={`Treinar ${block.subtema ? `${block.topic} · ${block.subtema}` : block.topic} (${block.estimatedQuestions} questões · ~${block.estimatedMinutes} min)`}
                          className={cn(
                            'group w-full rounded-lg border px-2.5 py-2 text-left transition-colors cursor-pointer space-y-1',
                            isSimuladoBlock
                              ? 'border-[#007AFF]/35 bg-[#007AFF]/[0.06] hover:bg-[#007AFF]/10 dark:border-sky-400/35 dark:bg-sky-500/10'
                              : 'border-slate-200/75 bg-white hover:border-[#007AFF]/45 hover:bg-[#007AFF]/[0.03] dark:border-white/[0.08] dark:bg-[#161E2E] dark:hover:border-sky-400/45'
                          )}
                        >
                          <div className="flex items-center justify-between gap-1 text-[10px]">
                            <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 truncate">
                              {isSimuladoBlock && (
                                <Timer size={11} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400 shrink-0" />
                              )}
                              <span className="truncate">
                                {isSimuladoBlock
                                  ? 'Simulado'
                                  : block.subtema
                                  ? block.topic
                                  : block.shortArea}
                              </span>
                            </span>
                            <span className="font-mono font-semibold tabular-nums text-slate-700 dark:text-slate-200 shrink-0">
                              {block.estimatedQuestions}q
                            </span>
                          </div>
                          <p className="text-[11px] font-semibold leading-snug text-slate-900 group-hover:text-[#007AFF] dark:text-slate-100 dark:group-hover:text-sky-300 line-clamp-2">
                            {isSimuladoBlock ? block.topic : block.subtema ?? block.topic}
                          </p>
                          {block.reasonTag && (
                            <span className="inline-block max-w-full truncate rounded bg-[#007AFF]/[0.08] px-1.5 py-0.5 text-[9px] font-medium text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300">
                              {block.reasonTag}
                            </span>
                          )}
                          <div className="flex items-center gap-1 pt-0.5 text-[10px]">
                            <span
                              className={cn('h-1.5 w-1.5 rounded-full shrink-0', statusMeta.dotClass)}
                            />
                            <span className={cn('truncate', statusMeta.textClass)}>
                              {statusMeta.label}
                            </span>
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    <p className="rounded-lg border border-dashed border-slate-200/70 px-2 py-2 text-[10px] text-slate-400 dark:border-white/[0.06] dark:text-slate-500">
                      Tempo dedicado a flashcards
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center py-6 text-center px-1">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    Dia de descanso
                  </span>
                  <span className="mt-0.5 text-[10px] text-slate-400/80 dark:text-slate-500/80">
                    Nenhuma atividade programada
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Direct Action Footer: Resumo de Hoje + Flashcards */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-200/70 dark:border-white/[0.07]">
        <p className="text-xs text-slate-500 dark:text-slate-400 tabular-nums">
          {schedule.todayPlan?.isActive
            ? `Meta de hoje (${schedule.targetExamsLabel}): ${schedule.todayPlan.estimatedQuestions} questões e ${todayCardsCount} flashcards em ${schedule.todayPlan.hours}h`
            : 'Hoje está configurado como dia de descanso'}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {standalone && onGoToPerformance && (
            <button
              type="button"
              onClick={onGoToPerformance}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <BarChart3 size={14} strokeWidth={1.5} className="text-slate-500 dark:text-slate-400" />
              <span>Ver Desempenho</span>
            </button>
          )}

          <button
            type="button"
            onClick={onGoToFlashcards}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer tabular-nums"
          >
            <Layers size={14} strokeWidth={1.5} className="text-slate-500 dark:text-slate-400" />
            <span>Flashcards ({todayCardsCount})</span>
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
