import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Award,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Filter,
  Loader2,
  Play,
  Trophy,
  Users,
} from 'lucide-react';
import type {
  GrandeAreaId,
  MedicalQuestion,
  StudentFilterStatus,
  UserAnswerRecord,
} from '../../types/medical';
import {
  ARENA_SPECIALTY_DISTRIBUTIONS,
  WEEKLY_OFFICIAL_SIMULADO,
  computeArenaBankSummary,
  computeArenaBoardMetrics,
  computeArenaPercentileThermometer,
  computeArenaPrioritySubtemas,
  resolveArenaTargetSpecialty,
} from '../../lib/arenaAnalytics';
import { cn } from '../../lib/utils';

interface ArenaHomeViewProps {
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  defaultTargetSpecialty?: string;
  onStartOfficialWeeklySimulado: () => void | Promise<void>;
  onFilterBoard: (institutions: string[]) => void;
  onPracticeSubtema: (payload: {
    topicLabel: string;
    matchedTema?: string;
    matchedSubtema?: string;
    grandeAreaId?: GrandeAreaId;
    status?: StudentFilterStatus;
  }) => void;
  onGoToQuestionBank: () => void;
  onGoToSimulados: () => void;
  onGoToPerformance: () => void;
}

const SPECIALTY_OPTIONS = Object.keys(ARENA_SPECIALTY_DISTRIBUTIONS);

export function ArenaHomeView({
  questions,
  answers,
  defaultTargetSpecialty,
  onStartOfficialWeeklySimulado,
  onFilterBoard,
  onPracticeSubtema,
  onGoToQuestionBank,
  onGoToSimulados,
  onGoToPerformance,
}: ArenaHomeViewProps) {
  const [launchingWeekly, setLaunchingWeekly] = useState(false);
  const [boardFilter, setBoardFilter] = useState<'todas' | 'principais' | 'novas'>('todas');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(() =>
    resolveArenaTargetSpecialty(defaultTargetSpecialty)
  );

  const boardMetrics = useMemo(
    () => computeArenaBoardMetrics(questions, answers),
    [questions, answers]
  );

  const bankSummary = useMemo(
    () => computeArenaBankSummary(questions, boardMetrics),
    [questions, boardMetrics]
  );

  const visibleBoards = useMemo(() => {
    if (boardFilter === 'principais') return boardMetrics.filter((b) => b.isPrimary);
    if (boardFilter === 'novas') return boardMetrics.filter((b) => !b.isPrimary);
    return boardMetrics;
  }, [boardMetrics, boardFilter]);

  const prioritySubtemas = useMemo(
    () => computeArenaPrioritySubtemas(questions, answers, 3),
    [questions, answers]
  );

  const percentileSummary = useMemo(
    () =>
      computeArenaPercentileThermometer(questions, answers, {
        targetSpecialty: selectedSpecialty,
      }),
    [questions, answers, selectedSpecialty]
  );

  const handleLaunchWeekly = async () => {
    if (launchingWeekly) return;
    setLaunchingWeekly(true);
    try {
      await onStartOfficialWeeklySimulado();
    } finally {
      setLaunchingWeekly(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Compact Header Strip with 1-click navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white px-5 py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926]">
        <div className="min-w-0">
          <h1 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
            Arena de Bancas &amp; Percentil Real
          </h1>
          <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
            {bankSummary.totalQuestions > 0
              ? `${bankSummary.totalQuestions.toLocaleString('pt-BR')} questões oficiais • ${bankSummary.totalInstitutions} bancas/instituições (${bankSummary.totalEditions} provas) na Taxonomia v1`
              : 'Carregando banco oficial de questões...'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onGoToQuestionBank}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#E5E5EA] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.1] transition cursor-pointer whitespace-nowrap"
          >
            <BookOpen size={16} strokeWidth={1.5} className="text-[#86868B]" />
            <span>Banco de Questões</span>
          </button>
          <button
            type="button"
            onClick={onGoToSimulados}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#E5E5EA] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.1] transition cursor-pointer whitespace-nowrap"
          >
            <ClipboardCheck size={16} strokeWidth={1.5} className="text-[#86868B]" />
            <span>Simulados</span>
          </button>
          <button
            type="button"
            onClick={onGoToPerformance}
            className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#E5E5EA] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/[0.1] transition cursor-pointer whitespace-nowrap"
          >
            <BarChart3 size={16} strokeWidth={1.5} className="text-[#86868B]" />
            <span>Desempenho</span>
          </button>
        </div>
      </div>

      {/* SEÇÃO 1 — Banner Superior: Simulado Oficial da Semana */}
      <section
        aria-label="Simulado Oficial da Semana"
        className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926]"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2.5 min-w-0">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#007AFF]/20 bg-[#007AFF]/10 px-3 py-1 text-xs font-semibold text-[#007AFF] dark:border-sky-400/25 dark:bg-sky-500/15 dark:text-sky-300">
              <Trophy size={14} strokeWidth={1.5} />
              <span>Simulado Oficial da Semana</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
              {WEEKLY_OFFICIAL_SIMULADO.title} ({WEEKLY_OFFICIAL_SIMULADO.questionCount} questões)
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
              <span className="inline-flex items-center gap-1.5">
                <Users size={15} strokeWidth={1.5} className="text-[#86868B]" />
                <span>
                  {WEEKLY_OFFICIAL_SIMULADO.participantsCount.toLocaleString('pt-BR')}{' '}
                  participantes
                </span>
              </span>
              <span aria-hidden="true">•</span>
              <span>
                Nota de corte média estimada:{' '}
                <strong className="font-semibold text-[#1D1D1F] dark:text-slate-200">
                  {WEEKLY_OFFICIAL_SIMULADO.estimatedCutoffPct.toFixed(1).replace('.', ',')}%
                </strong>
              </span>
              <span aria-hidden="true">•</span>
              <span>Tempo oficial: 5h (3 min/questão)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
            <div className="rounded-xl border border-black/5 bg-[#F5F5F7] px-4 py-3 text-left sm:text-right dark:border-white/[0.08] dark:bg-[#0B0F17]">
              <p className="text-xs font-medium text-[#86868B] dark:text-slate-400">
                Corte Estimado
              </p>
              <p className="mt-0.5 font-mono text-2xl font-bold tabular-nums text-[#1D1D1F] dark:text-white">
                {WEEKLY_OFFICIAL_SIMULADO.estimatedCutoffPct.toFixed(1).replace('.', ',')}%
              </p>
            </div>

            <button
              type="button"
              disabled={launchingWeekly}
              onClick={handleLaunchWeekly}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#007AFF] px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#0066D6] disabled:opacity-60 transition cursor-pointer whitespace-nowrap"
            >
              {launchingWeekly ? (
                <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
              ) : (
                <Play size={16} strokeWidth={1.5} />
              )}
              <span>Disputar Ranking da Prova</span>
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — Grade Dinâmica de Cards Comparativos por Banca */}
      <section aria-label="Desempenho Comparativo por Banca" className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] dark:text-slate-400">
              Desempenho Comparativo por Banca
            </h2>
            <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
              Sua acurácia em tempo real vs. média da comunidade MedR1
            </p>
          </div>

          <div
            className="inline-flex items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-[#0B0F17]"
            role="group"
            aria-label="Filtrar grupos de bancas"
          >
            {(
              [
                {
                  id: 'todas',
                  label: `Todas as Bancas (${boardMetrics.length})`,
                },
                {
                  id: 'principais',
                  label: `Principais (${bankSummary.primaryBoardsCount})`,
                },
                {
                  id: 'novas',
                  label: `Novas Bancas (${bankSummary.dynamicBoardsCount})`,
                },
              ] as const
            ).map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setBoardFilter(pill.id)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap tabular-nums',
                  boardFilter === pill.id
                    ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#182030] dark:text-white'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                )}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {visibleBoards.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-black/10 bg-white/70 p-6 text-center dark:border-white/10 dark:bg-[#131926]/70 space-y-1.5">
            <p className="text-sm font-medium text-[#1D1D1F] dark:text-slate-200">
              Nenhuma nova banca além das 4 principais carregada ainda
            </p>
            <p className="text-xs text-[#86868B] dark:text-slate-400 max-w-xl mx-auto">
              Ao incorporar novas provas (ex.: PSU-MG, UNICAMP, SES-PE, AMRIGS ou SURCE) via pipeline ou importador, cards adicionais aparecem aqui automaticamente com contagem de questões e acurácia.
            </p>
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleBoards.map((card) => {
            const hasUserAnswers = card.userAccuracyPct !== null;
            const userWidth = hasUserAnswers
              ? Math.max(2, Math.min(100, card.userAccuracyPct!))
              : 0;
            const communityWidth = Math.max(
              2,
              Math.min(100, card.communityAvgPct)
            );
            const deltaPositive =
              card.deltaVsCommunity !== null && card.deltaVsCommunity >= 0;

            return (
              <article
                key={card.id}
                className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium',
                        card.isPrimary
                          ? 'border-black/5 bg-[#F5F5F7] text-[#1D1D1F] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200'
                          : 'border-[#007AFF]/20 bg-[#007AFF]/10 text-[#007AFF] dark:border-sky-400/25 dark:bg-sky-500/15 dark:text-sky-300'
                      )}
                    >
                      {card.badge}
                    </span>
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#86868B] dark:text-slate-400">
                      {card.totalQuestions}q
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
                      {card.label}
                    </h3>
                    <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                {/* Two comparative horizontal bars */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[#1D1D1F] dark:text-slate-200">
                        Sua Acurácia
                      </span>
                      <span className="font-mono font-semibold tabular-nums text-[#1D1D1F] dark:text-white">
                        {hasUserAnswers
                          ? `${card.userAccuracyPct!.toFixed(1)}%`
                          : '—'}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F5F7] dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all duration-300"
                        style={{ width: `${userWidth}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#86868B] dark:text-slate-400">
                        Média MedR1
                      </span>
                      <span className="font-mono font-medium tabular-nums text-[#86868B] dark:text-slate-300">
                        {card.communityAvgPct.toFixed(1)}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#F5F5F7] dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-slate-400 dark:bg-slate-500 transition-all duration-300"
                        style={{ width: `${communityWidth}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Footer: Differential + Filter CTA */}
                <div className="flex items-center justify-between gap-2 border-t border-black/5 pt-3 dark:border-white/[0.06]">
                  <div className="min-w-0">
                    {card.deltaVsCommunity !== null ? (
                      <p
                        className={cn(
                          'font-mono text-xs font-semibold tabular-nums truncate',
                          deltaPositive
                            ? 'text-emerald-600 dark:text-emerald-400'
                            : 'text-[#D70015] dark:text-red-400'
                        )}
                      >
                        {deltaPositive ? '+' : ''}
                        {card.deltaVsCommunity.toFixed(1)}% vs média
                      </p>
                    ) : (
                      <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                        0 respondidas
                      </p>
                    )}
                    {hasUserAnswers && (
                      <p className="text-[11px] text-[#86868B] dark:text-slate-400 tabular-nums">
                        {card.correctCount}/{card.answeredCount} acertos
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onFilterBoard(card.institutions)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 bg-[#F5F5F7] px-3 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#007AFF] hover:border-[#007AFF] hover:text-white dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-[#007AFF] dark:hover:text-white transition cursor-pointer shrink-0"
                  >
                    <Filter size={14} strokeWidth={1.5} />
                    <span>Filtrar Banca</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        )}
      </section>

      {/* SEÇÃO 3 — Base em 2 Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Coluna Esquerda — Top 3 Subtemas Prioritários para Revisão */}
        <section
          aria-label="Top 3 Subtemas Prioritários para Revisão"
          className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertTriangle
                size={18}
                strokeWidth={1.5}
                className="text-[#D70015] dark:text-red-400 shrink-0"
              />
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                Top 3 Subtemas Prioritários para Revisão
              </h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-[#FF3B30]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[#D70015] dark:bg-red-500/15 dark:text-red-300 tabular-nums">
              Alerta &lt; 60%
            </span>
          </div>

          <div className="space-y-3">
            {prioritySubtemas.map((item) => (
              <div
                key={`${item.grandeAreaId}-${item.subtema}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-black/5 bg-[#F5F5F7]/70 p-4 dark:border-white/[0.06] dark:bg-[#0B0F17]/70"
              >
                <div className="min-w-0 space-y-1">
                  <p className="text-[11px] font-medium text-[#86868B] dark:text-slate-400 truncate">
                    {item.grandeAreaName} • {item.tema}
                  </p>
                  <p className="text-sm font-semibold text-[#1D1D1F] dark:text-white truncate">
                    {item.subtema}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs tabular-nums">
                    {item.accuracyPct !== null ? (
                      <span
                        className={cn(
                          'inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[11px] font-semibold',
                          item.isAlert
                            ? 'bg-[#FF3B30]/10 text-[#D70015] dark:bg-red-500/20 dark:text-red-300'
                            : 'bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                        )}
                      >
                        {item.accuracyPct.toFixed(1)}% de acerto ({item.correct}/
                        {item.answered})
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-md bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300">
                        Alta incidência UEPA
                      </span>
                    )}
                    <span className="text-[#86868B] dark:text-slate-400">
                      {item.bankCount} questões no banco
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onPracticeSubtema({
                      topicLabel: item.subtema,
                      matchedTema: item.tema,
                      matchedSubtema: item.subtema,
                      grandeAreaId: item.grandeAreaId,
                      status: 'todas',
                    })
                  }
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#007AFF] px-3.5 py-2 text-xs font-medium text-white hover:bg-[#0066D6] shadow-sm transition cursor-pointer shrink-0"
                >
                  <Play size={14} strokeWidth={1.5} />
                  <span>Praticar</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Coluna Direita — Termômetro de Percentil Real */}
        <section
          aria-label="Termômetro de Percentil Real"
          className="flex flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-5"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Award
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#007AFF] dark:text-sky-400 shrink-0"
                />
                <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                  Termômetro de Percentil Real
                </h2>
              </div>

              <label className="inline-flex items-center gap-1.5 text-xs text-[#86868B] dark:text-slate-400">
                <span>Alvo:</span>
                <select
                  aria-label="Especialidade alvo no termômetro de percentil"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="rounded-lg border border-[#D1D1D6] bg-white px-2.5 py-1 text-xs font-medium text-[#1D1D1F] focus:border-[#007AFF] focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-100"
                >
                  {SPECIALTY_OPTIONS.map((spec) => (
                    <option key={spec} value={spec}>
                      {spec}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="space-y-4 pt-1">
              {percentileSummary.bars.map((bar) => {
                const barWidth =
                  bar.percentile !== null
                    ? Math.max(4, Math.min(100, bar.percentile))
                    : 0;

                const barColorClass =
                  bar.barTone === 'blue'
                    ? 'bg-blue-600'
                    : bar.barTone === 'emerald'
                    ? 'bg-emerald-600'
                    : 'bg-amber-500';

                const pillClass =
                  bar.percentile === null
                    ? 'bg-[#F5F5F7] text-[#86868B] dark:bg-white/[0.06] dark:text-slate-400'
                    : bar.barTone === 'blue'
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
                    : bar.barTone === 'emerald'
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
                    : 'bg-amber-50 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300';

                return (
                  <div key={bar.id} className="space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-medium text-[#1D1D1F] dark:text-slate-200">
                        {bar.label}
                      </span>
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tabular-nums',
                          pillClass
                        )}
                      >
                        {bar.pillText}
                      </span>
                    </div>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#F5F5F7] dark:bg-slate-800">
                      <div
                        className={cn(
                          'h-full rounded-full transition-all duration-300',
                          barColorClass
                        )}
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-[#86868B] dark:text-slate-400 tabular-nums">
                      <span>
                        {bar.sampleCount > 0
                          ? `Base: ${bar.sampleCount} questões (${bar.sampleAccuracyPct!.toFixed(1).replace('.', ',')}%)`
                          : 'Responda questões para calcular seu percentil'}
                      </span>
                      {bar.percentile !== null && (
                        <span className="font-mono">P{bar.percentile}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-black/5 bg-[#F5F5F7] px-4 py-3 flex flex-wrap items-center justify-between gap-2 dark:border-white/[0.06] dark:bg-[#0B0F17]">
            <span className="text-xs font-medium text-[#86868B] dark:text-slate-400 tabular-nums">
              Acurácia global consolidada ({percentileSummary.globalAnswered}q):
            </span>
            <span className="font-mono text-base font-bold tabular-nums text-[#1D1D1F] dark:text-white">
              {percentileSummary.globalAccuracyPct !== null
                ? `${percentileSummary.globalAccuracyPct.toFixed(1).replace('.', ',')}%`
                : '—'}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
