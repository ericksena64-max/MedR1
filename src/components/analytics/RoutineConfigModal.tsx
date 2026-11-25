import React, { useEffect, useMemo, useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import type { Flashcard } from '../../types/medical';
import {
  buildWeeklySchedule,
  loadWeeklyScheduleConfig,
  normalizeTargetExams,
  TARGET_EXAM_PRESETS,
  WEEKDAY_LABELS,
  WEEKLY_SCHEDULE_STORAGE_KEY,
  WEEKLY_SCHEDULE_UPDATED_EVENT,
  type StudyPaceMode,
  type TargetExamPreset,
  type WeekdayIndex,
  type WeeklyScheduleConfig,
} from '../../lib/weeklySchedule';
import { cn } from '../../lib/utils';

export interface RoutineConfigModalProps {
  open: boolean;
  onClose: () => void;
  flashcards: Flashcard[];
}

export function RoutineConfigModal({
  open,
  onClose,
  flashcards,
}: RoutineConfigModalProps): React.ReactElement | null {
  const [config, setConfig] = useState<WeeklyScheduleConfig>(() => {
    try {
      return loadWeeklyScheduleConfig(
        window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
      );
    } catch {
      return loadWeeklyScheduleConfig(null);
    }
  });

  useEffect(() => {
    if (!open) return;
    try {
      setConfig(
        loadWeeklyScheduleConfig(
          window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
        )
      );
    } catch {
      setConfig(loadWeeklyScheduleConfig(null));
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  const updateAndPersist = (
    updater: (prev: WeeklyScheduleConfig) => WeeklyScheduleConfig
  ) => {
    setConfig((prev) => {
      const next = updater(prev);
      try {
        window.localStorage.setItem(
          WEEKLY_SCHEDULE_STORAGE_KEY,
          JSON.stringify(next)
        );
        window.dispatchEvent(new Event(WEEKLY_SCHEDULE_UPDATED_EVENT));
      } catch {
        // ignore storage quota errors
      }
      return next;
    });
  };

  const toggleDay = (dayIndex: WeekdayIndex) => {
    updateAndPersist((prev) => {
      const exists = prev.activeDays.includes(dayIndex);
      const nextDays = exists
        ? prev.activeDays.filter((d) => d !== dayIndex)
        : [...prev.activeDays, dayIndex].sort((a, b) => a - b);
      return { ...prev, activeDays: nextDays };
    });
  };

  const setHours = (hours: number) => {
    const clamped = Math.max(1, Math.min(8, Math.round(hours)));
    updateAndPersist((prev) => ({ ...prev, hoursPerDay: clamped }));
  };

  const setPaceMode = (paceMode: StudyPaceMode) => {
    updateAndPersist((prev) => ({ ...prev, paceMode }));
  };

  const selectedExams = useMemo(() => normalizeTargetExams(config), [config]);
  const availableExams = useMemo(
    () => TARGET_EXAM_PRESETS.filter((exam) => !selectedExams.includes(exam)),
    [selectedExams]
  );

  const applyTargetExams = (nextExams: TargetExamPreset[]) => {
    const safeNext = nextExams.length > 0 ? nextExams : (['UEPA'] as TargetExamPreset[]);
    updateAndPersist((prev) => ({
      ...prev,
      targetExams: safeNext,
      targetExam: safeNext[0],
    }));
  };

  const addTargetExam = (exam: TargetExamPreset) => {
    if (selectedExams.includes(exam)) return;
    applyTargetExams([...selectedExams, exam]);
  };

  const removeTargetExam = (exam: TargetExamPreset) => {
    if (selectedExams.length <= 1) return;
    applyTargetExams(selectedExams.filter((item) => item !== exam));
  };

  const moveTargetExam = (index: number, direction: -1 | 1) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= selectedExams.length) return;
    const next = [...selectedExams];
    const [moved] = next.splice(index, 1);
    next.splice(targetIdx, 0, moved);
    applyTargetExams(next);
  };

  const setExamDate = (exam: TargetExamPreset, dateIso: string) => {
    updateAndPersist((prev) => {
      const nextDates = { ...(prev.examDates ?? {}) };
      if (dateIso.trim()) {
        nextDates[exam] = dateIso.trim();
      } else {
        delete nextDates[exam];
      }
      return { ...prev, examDates: nextDates };
    });
  };

  const setSimuladoWeekday = (day: WeekdayIndex | null) => {
    updateAndPersist((prev) => ({ ...prev, simuladoWeekday: day }));
  };

  const preview = useMemo(
    () =>
      buildWeeklySchedule({
        config,
        flashcards,
        weekOffset: 0,
      }),
    [config, flashcards]
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Configurar Rotina Semanal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-black/5 bg-white p-5 shadow-2xl dark:border-white/[0.08] dark:bg-[#131926] space-y-5">
        <div className="flex items-start justify-between gap-3 border-b border-slate-200/70 pb-3 dark:border-white/[0.08]">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Configurar Rotina & Prova Alvo
            </h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Assuntos e estimativas dos 7 dias atualizam instantaneamente
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar configuração de rotina"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {/* Multi-Exam Priority Selector (1, 2, 3...) */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Provas alvo por prioridade (fusão automática de Pareto)
            </p>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              1ª define corte de referência
            </span>
          </div>

          {/* Active Ordered Chips */}
          <div className="flex flex-wrap gap-1.5">
            {selectedExams.map((exam, idx) => (
              <div
                key={exam}
                className={cn(
                  'inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-medium',
                  idx === 0
                    ? 'border-[#007AFF]/45 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/45 dark:bg-sky-500/15 dark:text-sky-200'
                    : 'border-slate-200 bg-slate-50 text-slate-800 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200'
                )}
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#007AFF] font-mono text-[10px] font-bold tabular-nums text-white">
                  {idx + 1}
                </span>
                <span>{exam}</span>
                {selectedExams.length > 1 && (
                  <span className="ml-0.5 inline-flex items-center gap-0.5 border-l border-current/15 pl-1">
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => moveTargetExam(idx, -1)}
                      aria-label={`Aumentar prioridade de ${exam}`}
                      title="Subir prioridade"
                      className="rounded p-0.5 hover:bg-black/5 disabled:opacity-30 dark:hover:bg-white/10 cursor-pointer disabled:cursor-default"
                    >
                      <ChevronLeft size={12} strokeWidth={1.75} />
                    </button>
                    <button
                      type="button"
                      disabled={idx === selectedExams.length - 1}
                      onClick={() => moveTargetExam(idx, 1)}
                      aria-label={`Reduzir prioridade de ${exam}`}
                      title="Descer prioridade"
                      className="rounded p-0.5 hover:bg-black/5 disabled:opacity-30 dark:hover:bg-white/10 cursor-pointer disabled:cursor-default"
                    >
                      <ChevronRight size={12} strokeWidth={1.75} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeTargetExam(exam)}
                      aria-label={`Remover ${exam}`}
                      title="Remover prova"
                      className="rounded p-0.5 hover:bg-red-500/15 hover:text-red-600 dark:hover:text-red-400 cursor-pointer"
                    >
                      <X size={12} strokeWidth={1.75} />
                    </button>
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Exam Date Pickers (per selected exam) */}
          <div className="space-y-1.5 pt-1">
            <p className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#86868B] dark:text-slate-400">
              <CalendarDays size={13} strokeWidth={1.5} />
              <span>Data de cada prova (ativa periodização automática até o Dia D)</span>
            </p>
            <div className="space-y-1.5">
              {selectedExams.map((exam) => {
                const entry = preview.calendarSummary.entries.find((e) => e.exam === exam);
                return (
                  <div
                    key={`date-${exam}`}
                    className="flex items-center justify-between gap-2 rounded-lg border border-black/5 bg-[#F5F5F7]/70 px-2.5 py-1.5 dark:border-white/[0.07] dark:bg-[#0B0F17]/70"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white">
                        {exam}
                      </span>
                      {entry && (
                        <span
                          className={cn(
                            'text-[10px] font-medium tabular-nums truncate',
                            entry.isPast
                              ? 'text-[#86868B] line-through'
                              : 'text-[#007AFF] dark:text-sky-400'
                          )}
                        >
                          {entry.isPast
                            ? 'Já realizada'
                            : entry.isToday
                            ? 'Hoje!'
                            : `em ${entry.daysRemaining}d`}
                        </span>
                      )}
                    </div>
                    <input
                      type="date"
                      value={config.examDates?.[exam] ?? ''}
                      onChange={(e) => setExamDate(exam, e.target.value)}
                      aria-label={`Data da prova ${exam}`}
                      className="rounded-lg border border-[#D1D1D6] bg-white px-2 py-1 text-xs tabular-nums text-[#1D1D1F] focus:outline-none focus:border-[#007AFF] focus:ring-3 focus:ring-[#007AFF]/20 dark:border-white/15 dark:bg-[#182030] dark:text-white transition"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Available Exams to Add */}
          {availableExams.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-slate-400 dark:text-slate-500">
                Adicionar:
              </span>
              {availableExams.map((exam) => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => addTargetExam(exam)}
                  className="inline-flex items-center gap-1 rounded-lg border border-dashed border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-[#007AFF]/50 hover:text-[#007AFF] dark:border-white/15 dark:bg-[#0B0F17] dark:text-slate-300 dark:hover:border-sky-400/50 dark:hover:text-sky-300 transition-colors cursor-pointer"
                >
                  <Plus size={12} strokeWidth={1.75} />
                  <span>{exam}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Active Weekdays Selector */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Dias ativos na semana
          </p>
          <div className="flex flex-wrap gap-1.5">
            {WEEKDAY_LABELS.map((day) => {
              const active = config.activeDays.includes(day.index);
              return (
                <button
                  key={day.index}
                  type="button"
                  onClick={() => toggleDay(day.index)}
                  aria-pressed={active}
                  className={cn(
                    'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer',
                    active
                      ? 'border-[#007AFF] bg-[#007AFF] text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {day.short}
                </button>
              );
            })}
          </div>
        </div>

        {/* Hours per Day Slider (1h - 8h) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <label
              htmlFor="global-weekly-hours-slider"
              className="font-medium text-slate-600 dark:text-slate-300"
            >
              Carga horária por dia ativo
            </label>
            <span className="font-mono font-semibold tabular-nums text-slate-900 dark:text-white">
              {config.hoursPerDay}h/dia
            </span>
          </div>
          <input
            id="global-weekly-hours-slider"
            type="range"
            min={1}
            max={8}
            step={1}
            value={config.hoursPerDay}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full accent-[#007AFF] cursor-pointer"
          />
          <div className="flex justify-between font-mono text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
            <span>1h</span>
            <span>4h</span>
            <span>8h</span>
          </div>
        </div>

        {/* Pace Mode Segmented Control (2.2 vs 3.0 min/q) */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Ritmo calibrado (desconta ~30s por flashcard do dia)
          </p>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0B0F17]">
            <button
              type="button"
              onClick={() => setPaceMode('estudo')}
              aria-pressed={config.paceMode === 'estudo'}
              className={cn(
                'rounded-md px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer tabular-nums',
                config.paceMode === 'estudo'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-[#182030] dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              Estudo + Comentário (3,0 min/q)
            </button>
            <button
              type="button"
              onClick={() => setPaceMode('prova')}
              aria-pressed={config.paceMode === 'prova'}
              className={cn(
                'rounded-md px-2.5 py-2 text-xs font-medium transition-colors cursor-pointer tabular-nums',
                config.paceMode === 'prova'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-[#182030] dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              )}
            >
              Ritmo de Prova (2,2 min/q)
            </button>
          </div>
        </div>

        {/* Simulado Day Selector */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Dia preferido para Simulado / Prova na Íntegra
          </p>
          <div className="flex flex-wrap gap-1.5">
            {WEEKDAY_LABELS.map((day) => {
              const selected = config.simuladoWeekday === day.index;
              return (
                <button
                  key={`sim-${day.index}`}
                  type="button"
                  onClick={() => setSimuladoWeekday(day.index)}
                  aria-pressed={selected}
                  className={cn(
                    'rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                    selected
                      ? 'border-[#007AFF] bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400 dark:bg-sky-500/15 dark:text-sky-300'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-400'
                  )}
                >
                  {day.short}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setSimuladoWeekday(null)}
              aria-pressed={config.simuladoWeekday === null}
              className={cn(
                'rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer',
                config.simuladoWeekday === null
                  ? 'border-[#007AFF] bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400 dark:bg-sky-500/15 dark:text-sky-300'
                  : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-400'
              )}
            >
              Nenhum
            </button>
          </div>
        </div>

        {/* Pareto Feasibility Preview until Exam Date */}
        {preview.feasibility.status !== 'sem_data' && (
          <div
            className={cn(
              'rounded-xl border p-3 text-xs space-y-1.5',
              preview.feasibility.status === 'critico'
                ? 'border-[#FF3B30]/20 bg-[#FF3B30]/10 text-[#D70015] dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300'
                : preview.feasibility.status === 'apertado'
                ? 'border-amber-200 bg-amber-50/80 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-300'
                : 'border-emerald-200 bg-emerald-50/70 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300'
            )}
          >
            <div className="flex items-center justify-between gap-2 font-semibold tabular-nums">
              <span>{preview.calendarSummary.activePhase.label}</span>
              <span>Cobertura Pareto: {preview.feasibility.coveragePct}%</span>
            </div>
            <p className="text-[11px] opacity-90 leading-snug">
              {preview.feasibility.summaryMessage}
            </p>
            {preview.feasibility.recommendedHoursPerDay &&
              preview.feasibility.recommendedHoursPerDay > config.hoursPerDay && (
                <button
                  type="button"
                  onClick={() => setHours(preview.feasibility.recommendedHoursPerDay!)}
                  className="mt-1 inline-flex items-center rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#1D1D1F] shadow-xs hover:bg-white transition cursor-pointer tabular-nums"
                >
                  Ajustar para {preview.feasibility.recommendedHoursPerDay}h/dia
                </button>
              )}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 border-t border-slate-200/70 pt-3 dark:border-white/[0.08]">
          <span className="font-mono text-xs tabular-nums text-slate-500 dark:text-slate-400 truncate">
            {preview.targetExamsLabel} · {preview.totalWeeklyHours}h · {preview.totalWeeklyQuestions}q/sem
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-[#007AFF] px-4 py-1.5 text-xs font-medium text-white hover:bg-[#0066D6] transition-colors cursor-pointer"
          >
            Concluir
          </button>
        </div>
      </div>
    </div>
  );
}
