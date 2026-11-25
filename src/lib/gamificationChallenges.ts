import { GRANDES_AREAS } from '../data/taxonomy';
import type { DailyGoalProgress, GrandeAreaId } from '../types/medical';
import type { GamificationCoreState } from './gamificationEngine';

export type MissionActionType =
  | 'open_questions'
  | 'open_weak_area'
  | 'open_flashcards'
  | 'start_simulado'
  | 'open_error_notebook';

export interface GamificationMission {
  id: string;
  scope: 'diaria' | 'semanal';
  pillar: 'objetivo' | 'desafio' | 'aprendizado';
  title: string;
  description: string;
  current: number;
  target: number;
  pct: number;
  completed: boolean;
  rewardXp: number;
  actionType: MissionActionType;
  targetAreaId?: GrandeAreaId;
}

export interface GamificationAchievement {
  id: string;
  title: string;
  description: string;
  pillar: 'aprendizado' | 'conquista' | 'habilidade' | 'desafio' | 'recompensa';
  iconName:
    | 'brain'
    | 'rocket'
    | 'trophy'
    | 'flame'
    | 'target'
    | 'shield'
    | 'award'
    | 'stethoscope';
  unlocked: boolean;
  progressLabel: string;
  progressPct: number;
}

export interface GamificationMissionsInput {
  core: GamificationCoreState;
  dailyGoal: DailyGoalProgress;
  reviewsTodayCount: number;
  dueFlashcardsCount: number;
  answeredThisWeekCount: number;
  simuladosThisWeekCount: number;
  weakAreaAnsweredToday: number;
  weakestAreaId: GrandeAreaId;
}

export interface GamificationAchievementsInput {
  core: GamificationCoreState;
  totalAnswered: number;
  totalCorrect: number;
  fsrsReviewCount: number;
  simuladoCount: number;
  errorNotebookReviewedCount: number;
}

function clampPct(current: number, target: number): number {
  if (target <= 0) return 100;
  return Math.min(100, Math.max(0, Math.round((current / target) * 100)));
}

export function computeGamificationMissions(
  input: GamificationMissionsInput
): GamificationMission[] {
  const weakestAreaMeta =
    GRANDES_AREAS.find((a) => a.id === input.weakestAreaId) ?? GRANDES_AREAS[0];

  const dailyTarget = Math.max(1, input.dailyGoal.target);
  const dailyCurrent = Math.max(0, input.dailyGoal.answeredToday);

  const fsrsDailyTarget = Math.max(5, Math.min(10, input.dueFlashcardsCount + input.reviewsTodayCount || 5));
  const fsrsDailyCurrent = Math.max(0, input.reviewsTodayCount);

  const weakAreaTarget = 5;
  const weakAreaCurrent = Math.max(0, input.weakAreaAnsweredToday);

  const weeklyQuestionsTarget = 60;
  const weeklyQuestionsCurrent = Math.max(0, input.answeredThisWeekCount);

  const weeklySimuladoTarget = 1;
  const weeklySimuladoCurrent = Math.max(0, input.simuladosThisWeekCount);

  return [
    {
      id: 'daily_goal',
      scope: 'diaria',
      pillar: 'objetivo',
      title: 'Bater a Meta Diária',
      description: `Resolva ${dailyTarget} questões hoje para manter sua ofensiva ativa.`,
      current: Math.min(dailyTarget, dailyCurrent),
      target: dailyTarget,
      pct: clampPct(dailyCurrent, dailyTarget),
      completed: dailyCurrent >= dailyTarget,
      rewardXp: 50,
      actionType: 'open_questions',
    },
    {
      id: 'daily_fsrs',
      scope: 'diaria',
      pillar: 'aprendizado',
      title: 'Consolidar Memória (FSRS)',
      description: `Revise ${fsrsDailyTarget} flashcards espaçados hoje.`,
      current: Math.min(fsrsDailyTarget, fsrsDailyCurrent),
      target: fsrsDailyTarget,
      pct: clampPct(fsrsDailyCurrent, fsrsDailyTarget),
      completed: fsrsDailyCurrent >= fsrsDailyTarget,
      rewardXp: 35,
      actionType: 'open_flashcards',
    },
    {
      id: 'daily_weak_area',
      scope: 'diaria',
      pillar: 'desafio',
      title: `Atacar Gargalo · ${weakestAreaMeta.shortName}`,
      description: `Resolva ${weakAreaTarget} questões de ${weakestAreaMeta.name} hoje.`,
      current: Math.min(weakAreaTarget, weakAreaCurrent),
      target: weakAreaTarget,
      pct: clampPct(weakAreaCurrent, weakAreaTarget),
      completed: weakAreaCurrent >= weakAreaTarget,
      rewardXp: 40,
      actionType: 'open_weak_area',
      targetAreaId: weakestAreaMeta.id,
    },
    {
      id: 'weekly_volume',
      scope: 'semanal',
      pillar: 'objetivo',
      title: 'Ritmo Semanal R1',
      description: `Complete ${weeklyQuestionsTarget} questões ao longo desta semana.`,
      current: Math.min(weeklyQuestionsTarget, weeklyQuestionsCurrent),
      target: weeklyQuestionsTarget,
      pct: clampPct(weeklyQuestionsCurrent, weeklyQuestionsTarget),
      completed: weeklyQuestionsCurrent >= weeklyQuestionsTarget,
      rewardXp: 120,
      actionType: 'open_questions',
    },
    {
      id: 'weekly_simulado',
      scope: 'semanal',
      pillar: 'desafio',
      title: 'Simulado Cronometrado',
      description: 'Finalize pelo menos 1 simulado nesta semana para calibrar sua nota.',
      current: Math.min(weeklySimuladoTarget, weeklySimuladoCurrent),
      target: weeklySimuladoTarget,
      pct: clampPct(weeklySimuladoCurrent, weeklySimuladoTarget),
      completed: weeklySimuladoCurrent >= weeklySimuladoTarget,
      rewardXp: 100,
      actionType: 'start_simulado',
    },
  ];
}

export function computeGamificationAchievements(
  input: GamificationAchievementsInput
): GamificationAchievement[] {
  const { core, totalAnswered, fsrsReviewCount, simuladoCount } = input;
  const specialistAreas = core.areaMastery.filter(
    (a) => a.tier === 'especialista' || a.tier === 'referencia'
  ).length;
  const practicingAreas = core.areaMastery.filter(
    (a) => a.tier !== 'iniciante'
  ).length;

  return [
    {
      id: 'primeiro_plantao',
      title: 'Primeiro Plantão',
      description: 'Responda sua primeira questão real no MedR1.',
      pillar: 'conquista',
      iconName: 'stethoscope',
      unlocked: totalAnswered >= 1,
      progressLabel: `${Math.min(1, totalAnswered)}/1 questão`,
      progressPct: clampPct(totalAnswered, 1),
    },
    {
      id: 'ritmo_25',
      title: 'Ritmo de Ambulatório',
      description: 'Acumule 25 questões respondidas.',
      pillar: 'aprendizado',
      iconName: 'target',
      unlocked: totalAnswered >= 25,
      progressLabel: `${Math.min(25, totalAnswered)}/25 questões`,
      progressPct: clampPct(totalAnswered, 25),
    },
    {
      id: 'centuriao_100',
      title: 'Centurião R1',
      description: 'Chegue a 100 questões reais resolvidas.',
      pillar: 'conquista',
      iconName: 'rocket',
      unlocked: totalAnswered >= 100,
      progressLabel: `${Math.min(100, totalAnswered)}/100 questões`,
      progressPct: clampPct(totalAnswered, 100),
    },
    {
      id: 'maratona_500',
      title: 'Maratona de Provas',
      description: 'Resolva 500 questões de residência médica.',
      pillar: 'conquista',
      iconName: 'trophy',
      unlocked: totalAnswered >= 500,
      progressLabel: `${Math.min(500, totalAnswered)}/500 questões`,
      progressPct: clampPct(totalAnswered, 500),
    },
    {
      id: 'sequencia_5',
      title: 'Precisão Cirúrgica',
      description: 'Alcance uma sequência de 5 acertos seguidos.',
      pillar: 'desafio',
      iconName: 'award',
      unlocked: core.currentCorrectCombo >= 5,
      progressLabel: `${Math.min(5, core.currentCorrectCombo)}/5 acertos`,
      progressPct: clampPct(core.currentCorrectCombo, 5),
    },
    {
      id: 'maratonista_7d',
      title: 'Constância de 7 Dias',
      description: 'Bata sua meta diária por 7 dias consecutivos.',
      pillar: 'recompensa',
      iconName: 'flame',
      unlocked: core.streakDays >= 7,
      progressLabel: `${Math.min(7, core.streakDays)}/7 dias`,
      progressPct: clampPct(core.streakDays, 7),
    },
    {
      id: 'escudo_ativo',
      title: 'Escudo de Plantão',
      description: 'Conquiste seu primeiro escudo de proteção de ofensiva.',
      pillar: 'recompensa',
      iconName: 'shield',
      unlocked: core.streakShields >= 1,
      progressLabel: `${Math.min(1, core.streakShields)}/1 escudo`,
      progressPct: clampPct(core.streakShields, 1),
    },
    {
      id: 'guardiao_memoria',
      title: 'Guardião da Memória',
      description: 'Complete 50 revisões espaçadas no sistema FSRS.',
      pillar: 'aprendizado',
      iconName: 'brain',
      unlocked: fsrsReviewCount >= 50,
      progressLabel: `${Math.min(50, fsrsReviewCount)}/50 revisões`,
      progressPct: clampPct(fsrsReviewCount, 50),
    },
    {
      id: 'simulado_estreia',
      title: 'Primeiro Simulado',
      description: 'Finalize ou registre seu primeiro simulado completo.',
      pillar: 'desafio',
      iconName: 'rocket',
      unlocked: simuladoCount >= 1,
      progressLabel: `${Math.min(1, simuladoCount)}/1 simulado`,
      progressPct: clampPct(simuladoCount, 1),
    },
    {
      id: 'simuladista_5',
      title: 'Calibração de Prova',
      description: 'Complete 5 simulados para estabilizar sua projeção de corte.',
      pillar: 'desafio',
      iconName: 'trophy',
      unlocked: simuladoCount >= 5,
      progressLabel: `${Math.min(5, simuladoCount)}/5 simulados`,
      progressPct: clampPct(simuladoCount, 5),
    },
    {
      id: 'maestria_area',
      title: 'Especialista de Cadeira',
      description: 'Alcance nível Especialista em qualquer Grande Área (≥35q e ≥75%).',
      pillar: 'habilidade',
      iconName: 'award',
      unlocked: specialistAreas >= 1,
      progressLabel: `${Math.min(1, specialistAreas)}/1 área`,
      progressPct: clampPct(specialistAreas, 1),
    },
    {
      id: 'clinico_completo',
      title: 'Clínico Completo',
      description: 'Atinja ao menos nível Praticante (≥5q) nas 5 Grandes Áreas.',
      pillar: 'habilidade',
      iconName: 'stethoscope',
      unlocked: practicingAreas >= 5,
      progressLabel: `${Math.min(5, practicingAreas)}/5 áreas`,
      progressPct: clampPct(practicingAreas, 5),
    },
  ];
}
