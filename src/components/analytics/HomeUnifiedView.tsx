import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, AlertTriangle, SlidersHorizontal, X } from 'lucide-react';
import type {
  CutoffTargetConfig,
  Flashcard,
  GrandeAreaId,
  MedicalQuestion,
  SimuladoRecord,
  UserAnswerRecord,
} from '../../types/medical';
import type { PerformanceRow } from './PerformanceDashboard';
import { WeeklyStudyScheduleCard } from './WeeklyStudyScheduleCard';
import { SpecialtyExplorerCard } from './SpecialtyExplorerCard';
import { StratifiedApprovalCard } from './StratifiedApprovalCard';
import { CutoffProjectionCard } from './CutoffProjectionCard';
import { ApprovalProbabilityCard } from './ApprovalProbabilityCard';
import {
  applyTargetExamPresetToEstimatorConfig,
  buildHomeIntelligenceSummary,
  readPersistedEstimatorConfig,
} from '../../lib/homeIntelligence';
import {
  ESTIMATOR_STORAGE_KEY,
  ESTIMATOR_UPDATED_EVENT,
  type ConfiguracaoProva,
} from '../../lib/residenciaEstimator';
import {
  WEEKLY_SCHEDULE_STORAGE_KEY,
  WEEKLY_SCHEDULE_UPDATED_EVENT,
  loadWeeklyScheduleConfig,
  normalizeTargetExams,
  type TargetExamPreset,
} from '../../lib/weeklySchedule';
import { TARGET_EXAM_CUTOFF_PRESETS } from '../../lib/examWeights';
import { getLocalDateKey } from '../../hooks/useMedR1Store';
import { GRANDES_AREAS } from '../../data/taxonomy';
import { HomeGamificationStrip } from '../gamification/HomeGamificationStrip';
import { DiagnosticGateCard } from './DiagnosticGateCard';
import type {
  DiagnosticBoardOption,
  DiagnosticExamState,
} from '../../lib/diagnosticExam';
import type { GamificationSummary } from '../../hooks/useMedR1Store';
import type { GamificationMission } from '../../lib/gamificationChallenges';
import { cn } from '../../lib/utils';

type CalibrationTab = 'estimador' | 'bussola' | 'psicometrico';

interface HomeUnifiedViewProps {
  areaRows: PerformanceRow[];
  topicRows: PerformanceRow[];
  totalAnswered: number;
  totalCorrect: number;
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  flashcards: Flashcard[];
  simuladoHistory: SimuladoRecord[];
  cutoffTarget: CutoffTargetConfig;
  darkMode: boolean;
  routineModalOpen: boolean;
  onRoutineModalOpenChange: (open: boolean) => void;
  onPracticeArea: (areaId: GrandeAreaId) => void;
  onPracticeTopic: (payload: {
    topicLabel: string;
    matchedTema?: string;
    matchedSubtema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
  onGoToQuestionBank: () => void;
  onGoToFlashcards: () => void;
  onGoToErrorNotebook: () => void;
  onGoToPerformance: () => void;
  onAddSimulado: (entry: Omit<SimuladoRecord, 'id' | 'accuracyPct'>) => void;
  onDeleteSimulado: (id: string) => void;
  onUpdateCutoffTarget: (patch: Partial<CutoffTargetConfig>) => void;
  onRestoreExampleSimulados: () => void;
  gamification?: GamificationSummary;
  onExecuteMission?: (mission: GamificationMission) => void;
  onOpenGamificationHub?: () => void;
  diagnosticUnlocked?: boolean;
  diagnosticState?: DiagnosticExamState;
  diagnosticAnsweredCount?: number;
  diagnosticLoading?: boolean;
  onStartDiagnostic?: (boards: DiagnosticBoardOption[]) => void;
}

export function HomeUnifiedView({
  areaRows,
  topicRows,
  totalAnswered,
  totalCorrect,
  questions,
  answers,
  flashcards,
  simuladoHistory,
  cutoffTarget,
  darkMode,
  routineModalOpen,
  onRoutineModalOpenChange,
  onPracticeArea,
  onPracticeTopic,
  onGoToQuestionBank,
  onGoToFlashcards,
  onGoToErrorNotebook,
  onGoToPerformance,
  onAddSimulado,
  onDeleteSimulado,
  onUpdateCutoffTarget,
  onRestoreExampleSimulados,
  gamification,
  onExecuteMission,
  onOpenGamificationHub,
  diagnosticUnlocked = true,
  diagnosticState,
  diagnosticAnsweredCount = 0,
  diagnosticLoading = false,
  onStartDiagnostic,
}: HomeUnifiedViewProps) {
  const [primaryTargetExam, setPrimaryTargetExam] = useState<TargetExamPreset>(() => {
    try {
      const cfg = loadWeeklyScheduleConfig(
        window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
      );
      return normalizeTargetExams(cfg)[0];
    } catch {
      return 'UEPA';
    }
  });

  useEffect(() => {
    const syncPrimaryExam = () => {
      try {
        const cfg = loadWeeklyScheduleConfig(
          window.localStorage.getItem(WEEKLY_SCHEDULE_STORAGE_KEY)
        );
        setPrimaryTargetExam(normalizeTargetExams(cfg)[0]);
      } catch {
        setPrimaryTargetExam('UEPA');
      }
    };
    window.addEventListener(WEEKLY_SCHEDULE_UPDATED_EVENT, syncPrimaryExam);
    window.addEventListener('storage', syncPrimaryExam);
    return () => {
      window.removeEventListener(WEEKLY_SCHEDULE_UPDATED_EVENT, syncPrimaryExam);
      window.removeEventListener('storage', syncPrimaryExam);
    };
  }, []);

  const primaryExamPreset = TARGET_EXAM_CUTOFF_PRESETS[primaryTargetExam];

  const defaultCutoff = primaryExamPreset.defaultCutoff;

  const [estimatorConfig, setEstimatorConfig] = useState<ConfiguracaoProva>(() => {
    try {
      return readPersistedEstimatorConfig(
        window.localStorage.getItem(ESTIMATOR_STORAGE_KEY),
        defaultCutoff
      );
    } catch {
      return readPersistedEstimatorConfig(null, defaultCutoff);
    }
  });
  const [calibrationOpen, setCalibrationOpen] = useState(false);
  const [calibrationTab, setCalibrationTab] = useState<CalibrationTab>('estimador');

  useEffect(() => {
    const sync = () => {
      try {
        setEstimatorConfig(
          readPersistedEstimatorConfig(
            window.localStorage.getItem(ESTIMATOR_STORAGE_KEY),
            defaultCutoff
          )
        );
      } catch {
        setEstimatorConfig(readPersistedEstimatorConfig(null, defaultCutoff));
      }
    };
    sync();
    window.addEventListener(ESTIMATOR_UPDATED_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(ESTIMATOR_UPDATED_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, [defaultCutoff]);

  useEffect(() => {
    if (!calibrationOpen) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setCalibrationOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [calibrationOpen]);

  const scheduleTopicInputs = useMemo(() => {
    const shortAreaMap = new Map(GRANDES_AREAS.map((a) => [a.id, a.shortName]));
    return topicRows.map((row) => ({
      grandeAreaId: row.grandeAreaId,
      label: row.label,
      shortArea: shortAreaMap.get(row.grandeAreaId) ?? row.parentArea,
      studentPct: row.studentPct,
      answered: row.answered,
    }));
  }, [topicRows]);

  const answeredTodayByTopic = useMemo(() => {
    const todayKey = getLocalDateKey();
    const qMap = new Map(questions.map((q) => [q.id, q]));
    const counts: Record<string, number> = {};
    for (const ans of Object.values(answers)) {
      const answeredDate = new Date(ans.answeredAt);
      if (Number.isNaN(answeredDate.getTime())) continue;
      if (getLocalDateKey(answeredDate) !== todayKey) continue;
      const q = qMap.get(ans.questionId);
      if (!q?.tema) continue;
      counts[q.tema] = (counts[q.tema] ?? 0) + 1;
    }
    return counts;
  }, [answers, questions]);

  const effectiveCutoffTarget = useMemo<CutoffTargetConfig>(
    () => ({
      ...cutoffTarget,
      institution: primaryExamPreset.institution,
      historicalCutoff: primaryExamPreset.defaultCutoff,
    }),
    [cutoffTarget, primaryExamPreset]
  );

  const effectiveEstimatorConfig = useMemo<ConfiguracaoProva>(
    () =>
      applyTargetExamPresetToEstimatorConfig(estimatorConfig, primaryExamPreset),
    [estimatorConfig, primaryExamPreset]
  );

  const summary = useMemo(
    () =>
      buildHomeIntelligenceSummary({
        areaRows,
        simulados: simuladoHistory,
        cutoffTarget: effectiveCutoffTarget,
        estimatorConfig: effectiveEstimatorConfig,
      }),
    [areaRows, simuladoHistory, effectiveCutoffTarget, effectiveEstimatorConfig]
  );

  const isAboveCutoff = summary.distanceToCutoff >= 0;
  const formattedDelta = `${isAboveCutoff ? '+' : ''}${summary.distanceToCutoff.toFixed(1)} pts`;
  const approvalTone =
    summary.approvalProbabilityPct >= 70
      ? 'text-emerald-700 dark:text-emerald-400'
      : summary.approvalProbabilityPct >= 45
      ? 'text-amber-700 dark:text-amber-400'
      : 'text-[#D70015] dark:text-red-400';

  return (
    <div className="space-y-4">
      {/* BLOCO JORNADA & MISSÕES: Gamificação clínica diária */}
      {gamification && onExecuteMission && onOpenGamificationHub && (
        <HomeGamificationStrip
          core={gamification.core}
          missions={gamification.missions}
          unlockedCount={gamification.unlockedCount}
          totalAchievements={gamification.totalAchievements}
          onExecuteMission={onExecuteMission}
          onOpenHub={onOpenGamificationHub}
        />
      )}

      {/* BLOCO SUPERIOR: Grade Semanal Dinâmica (Dom a Sáb) */}
      <WeeklyStudyScheduleCard
        flashcards={flashcards}
        questions={questions}
        bottleneck={summary.bottleneck}
        topicRows={scheduleTopicInputs}
        answeredTodayByTopic={answeredTodayByTopic}
        routineModalOpen={routineModalOpen}
        onRoutineModalOpenChange={onRoutineModalOpenChange}
        onPracticeArea={onPracticeArea}
        onPracticeTopic={onPracticeTopic}
        onGoToQuestionBank={onGoToQuestionBank}
        onGoToFlashcards={onGoToFlashcards}
        onGoToPerformance={onGoToPerformance}
      />

      {/* BLOCO INFERIOR: Gate Diagnóstico (50q) ou Resumo Executivo + 5 Grandes Áreas */}
      {!diagnosticUnlocked && diagnosticState && onStartDiagnostic ? (
        <DiagnosticGateCard
          diagnosticState={diagnosticState}
          questions={questions}
          answeredDraftCount={diagnosticAnsweredCount}
          loading={diagnosticLoading}
          onStartDiagnostic={onStartDiagnostic}
          context="home"
        />
      ) : (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Esquerda: Resumo Executivo de Aprovação (3 KPIs + CTA Gargalo Prioritário) */}
        <div className="lg:col-span-5 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] dark:shadow-none flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between gap-2 border-b border-black/5 pb-3 dark:border-white/[0.07]">
            <div>
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                Prontidão para a Prova
              </h2>
              <p className="text-xs text-[#86868B] dark:text-slate-400 tabular-nums">
                {effectiveCutoffTarget.institution} · Corte {summary.cutoffScore.toFixed(1)}% ({summary.totalExamQuestions}q) · Janela 90d
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setCalibrationTab('estimador');
                setCalibrationOpen(true);
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-black/5 bg-[#F5F5F7] px-2.5 py-1 text-[11px] font-medium text-[#1D1D1F] hover:bg-[#EBEBF0] dark:border-white/[0.08] dark:bg-[#182030] dark:text-slate-200 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              <span>Calibrar</span>
            </button>
          </div>

          {/* 3 Compact Executive KPIs */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-black/5 bg-[#F5F5F7]/70 p-3 dark:border-white/[0.07] dark:bg-[#0B0F17]/70">
              <p className="text-[11px] text-[#86868B] dark:text-slate-400">Nota Projetada</p>
              <p className="mt-1 font-mono text-xl font-semibold tabular-nums text-[#1D1D1F] dark:text-white">
                {summary.projectedScore.toFixed(1)}%
              </p>
              <p className="mt-0.5 font-mono text-[10px] tabular-nums text-[#86868B] dark:text-slate-400">
                Faixa {summary.predictionInterval95[0].toFixed(0)}–{summary.predictionInterval95[1].toFixed(0)}%
              </p>
            </div>

            <div className="rounded-xl border border-black/5 bg-[#F5F5F7]/70 p-3 dark:border-white/[0.07] dark:bg-[#0B0F17]/70">
              <p className="text-[11px] text-[#86868B] dark:text-slate-400">Chance de Corte</p>
              <p className={cn('mt-1 font-mono text-xl font-semibold tabular-nums', approvalTone)}>
                {summary.approvalProbabilityPct.toFixed(1)}%
              </p>
              <p className="mt-0.5 font-mono text-[10px] tabular-nums text-[#86868B] dark:text-slate-400">
                Simulados 1,5×
              </p>
            </div>

            <div className="rounded-xl border border-black/5 bg-[#F5F5F7]/70 p-3 dark:border-white/[0.07] dark:bg-[#0B0F17]/70">
              <p className="text-[11px] text-[#86868B] dark:text-slate-400">vs. Corte</p>
              <p
                className={cn(
                  'mt-1 font-mono text-xl font-semibold tabular-nums',
                  isAboveCutoff
                    ? 'text-emerald-700 dark:text-emerald-400'
                    : 'text-[#D70015] dark:text-red-400'
                )}
              >
                {formattedDelta}
              </p>
              <p className="mt-0.5 font-mono text-[10px] tabular-nums text-[#86868B] dark:text-slate-400">
                Meta {summary.operationalTarget.toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Priority Bottleneck CTA */}
          {summary.bottleneck && (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-black/5 bg-[#F5F5F7]/70 px-3.5 py-3 dark:border-white/[0.07] dark:bg-[#0B0F17]/70">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#D70015] dark:text-red-400">
                  <AlertTriangle size={13} strokeWidth={1.5} />
                  <span>Gargalo Prioritário</span>
                </div>
                <p className="mt-0.5 text-sm font-semibold text-[#1D1D1F] dark:text-white truncate">
                  {summary.bottleneck.label}{' '}
                  <span className="font-mono text-xs font-normal tabular-nums text-[#86868B] dark:text-slate-400">
                    ({summary.bottleneck.accuracyPct.toFixed(1)}%)
                  </span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => onPracticeArea(summary.bottleneck!.grandeAreaId)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#007AFF] px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition-colors cursor-pointer"
              >
                <span>Treinar {summary.bottleneck.shortLabel}</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          )}
        </div>

        {/* Direita: Tabela Compacta das 5 Grandes Áreas */}
        <div className="lg:col-span-7 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] dark:shadow-none">
          <div className="flex items-center justify-between gap-2 border-b border-black/5 pb-3 dark:border-white/[0.07]">
            <div>
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                As 5 Grandes Áreas
              </h2>
              <p className="text-xs text-[#86868B] dark:text-slate-400">
                Desempenho recente por área (90d · simulados com maior peso) e prática direta
              </p>
            </div>
            <button
              type="button"
              onClick={onGoToPerformance}
              className="text-xs font-medium text-[#007AFF] hover:underline dark:text-sky-400 cursor-pointer whitespace-nowrap"
            >
              Análise completa
            </button>
          </div>

          <div className="mt-2 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200/70 text-slate-500 dark:border-white/[0.07] dark:text-slate-400">
                  <th className="py-2 pr-3 font-medium">Grande Área</th>
                  <th className="py-2 px-2 font-medium text-right">Peso</th>
                  <th className="py-2 px-2 font-medium text-right">Aproveitamento</th>
                  <th className="py-2 px-2 font-medium text-right hidden sm:table-cell">IC 95%</th>
                  <th className="py-2 pl-2 font-medium text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 dark:divide-white/[0.06]">
                {summary.areaTableRows.map((row) => {
                  const isBottleneck = summary.bottleneck?.grandeAreaId === row.grandeAreaId;
                  return (
                    <tr
                      key={row.grandeAreaId}
                      className="hover:bg-slate-50/80 dark:hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-2 pr-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-medium text-slate-900 dark:text-slate-100 truncate">
                            {row.label}
                          </span>
                          {isBottleneck && (
                            <span className="shrink-0 rounded bg-[#FF3B30]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#D70015] dark:text-red-400">
                              Gargalo
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2 px-2 text-right font-mono tabular-nums text-slate-500 dark:text-slate-400">
                        {row.weightPct}%
                      </td>
                      <td className="py-2 px-2 text-right font-mono tabular-nums">
                        <span
                          className={cn(
                            'font-semibold',
                            row.accuracyPct >= summary.cutoffScore
                              ? 'text-emerald-700 dark:text-emerald-400'
                              : row.accuracyPct >= summary.cutoffScore - 8
                              ? 'text-slate-900 dark:text-slate-200'
                              : 'text-[#D70015] dark:text-red-400'
                          )}
                        >
                          {row.accuracyPct.toFixed(1)}%
                        </span>
                        <span className="ml-1 text-[11px] text-slate-400">
                          ({row.answered})
                        </span>
                      </td>
                      <td className="py-2 px-2 text-right font-mono tabular-nums text-slate-500 dark:text-slate-400 hidden sm:table-cell">
                        {row.ci95[0].toFixed(0)}–{row.ci95[1].toFixed(0)}%
                      </td>
                      <td className="py-2 pl-2 text-right">
                        <button
                          type="button"
                          onClick={() => onPracticeArea(row.grandeAreaId)}
                          className="inline-flex items-center rounded-lg border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-[#007AFF]/40 hover:text-[#007AFF] dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-200 dark:hover:border-sky-500/40 dark:hover:text-sky-300 transition-colors cursor-pointer"
                        >
                          Praticar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      )}

      {/* BLOCO EXPLORADOR: Navegue pelas Cadeiras Médicas */}
      <SpecialtyExplorerCard
        questions={questions}
        onPracticeTopic={onPracticeTopic}
      />

      {/* Modal On-Demand: Calibração Psicométrica Avançada */}
      {calibrationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 sm:p-6 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Calibrar parâmetros e detalhes do modelo"
          onClick={(e) => {
            if (e.target === e.currentTarget) setCalibrationOpen(false);
          }}
        >
          <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-[#F8FAFC] shadow-2xl dark:border-white/10 dark:bg-[#0B0F17]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-white px-5 py-3.5 dark:border-white/[0.08] dark:bg-[#131926]">
              <div>
                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  Calibrar parâmetros & detalhes do modelo
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Presets, corte histórico e Laplace atualizam a Home em tempo real
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1 dark:bg-[#0B0F17]">
                  {(
                    [
                      { id: 'estimador', label: 'Parâmetros & Presets' },
                      { id: 'bussola', label: 'Bússola & Simulados' },
                      { id: 'psicometrico', label: 'Modelo Psicométrico' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setCalibrationTab(tab.id)}
                      className={cn(
                        'rounded-md px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap',
                        calibrationTab === tab.id
                          ? 'bg-white text-slate-900 shadow-xs dark:bg-[#182030] dark:text-white'
                          : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setCalibrationOpen(false)}
                  aria-label="Fechar modal de calibração"
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {calibrationTab === 'estimador' && (
                <StratifiedApprovalCard
                  areaRows={areaRows}
                  questions={questions}
                  answers={answers}
                  cutoffTarget={cutoffTarget}
                  darkMode={darkMode}
                  onPracticeArea={(areaId) => {
                    setCalibrationOpen(false);
                    onPracticeArea(areaId);
                  }}
                />
              )}
              {calibrationTab === 'bussola' && (
                <CutoffProjectionCard
                  simulados={simuladoHistory}
                  target={cutoffTarget}
                  darkMode={darkMode}
                  onAddSimulado={onAddSimulado}
                  onDeleteSimulado={onDeleteSimulado}
                  onUpdateTarget={onUpdateCutoffTarget}
                  onRestoreExample={onRestoreExampleSimulados}
                  onOpenErrorNotebook={() => {
                    setCalibrationOpen(false);
                    onGoToErrorNotebook();
                  }}
                  onOpenFlashcards={() => {
                    setCalibrationOpen(false);
                    onGoToFlashcards();
                  }}
                  onOpenQuestionBank={() => {
                    setCalibrationOpen(false);
                    onGoToQuestionBank();
                  }}
                />
              )}
              {calibrationTab === 'psicometrico' && (
                <ApprovalProbabilityCard
                  studentCorrect={totalCorrect}
                  studentAnswered={totalAnswered}
                  simuladoHistory={simuladoHistory}
                  cutoffTarget={cutoffTarget}
                  darkMode={darkMode}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
