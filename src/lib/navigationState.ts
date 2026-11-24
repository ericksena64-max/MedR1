import type { ActiveTab, StudyMode } from '../types/medical';

export type PrimaryNavId =
  | 'inicio'
  | 'questoes'
  | 'simulados'
  | 'flashcards'
  | 'caderno_erros';

export interface TopBarContext {
  section: string;
  detail: string;
  activePrimaryId: PrimaryNavId | null;
}

export function resolveTopBarContext(
  activeTab: ActiveTab,
  mode: StudyMode,
  simuladoActive: boolean
): TopBarContext {
  if (activeTab === 'questoes' && mode === 'simulado') {
    return {
      section: 'Simulados',
      detail: simuladoActive
        ? 'Em andamento · Cronômetro ativo'
        : 'Treino cronometrado de residência',
      activePrimaryId: 'simulados',
    };
  }

  switch (activeTab) {
    case 'inicio':
      return {
        section: 'Início',
        detail: 'Grade Semanal de Estudos',
        activePrimaryId: 'inicio',
      };
    case 'questoes':
      return {
        section: 'Banco de Questões',
        detail: 'Residência Médica Brasil',
        activePrimaryId: 'questoes',
      };
    case 'flashcards':
      return {
        section: 'Flashcards (FSRS)',
        detail: 'Curva de Esquecimento & Repetição Espaçada',
        activePrimaryId: 'flashcards',
      };
    case 'caderno_erros':
      return {
        section: 'Caderno de Erros',
        detail: 'Revisão Espaçada e Favoritas',
        activePrimaryId: 'caderno_erros',
      };
    case 'desempenho':
      return {
        section: 'Inteligência de Desempenho',
        detail: 'Aluno vs. Mediana da Comunidade',
        activePrimaryId: null,
      };
    case 'ranking':
      return {
        section: 'Ranking Ao Vivo',
        detail: 'Top 10+ Online & Privacidade',
        activePrimaryId: null,
      };
    case 'importar':
      return {
        section: 'Importador IA de Provas',
        detail: 'Extração PDF/Lote · Classificação & Comentários MedR1',
        activePrimaryId: null,
      };
  }
}

export function shouldConfirmLeaveSimulado({
  activeTab,
  mode,
  simuladoActive,
  simuladoFinished,
  nextTab,
  nextMode,
}: {
  activeTab: ActiveTab;
  mode: StudyMode;
  simuladoActive: boolean;
  simuladoFinished: boolean;
  nextTab: ActiveTab;
  nextMode?: StudyMode;
}): boolean {
  const isInLiveSimulado =
    activeTab === 'questoes' && mode === 'simulado' && simuladoActive && !simuladoFinished;
  if (!isInLiveSimulado) return false;

  if (nextTab !== 'questoes') return true;
  if (nextMode && nextMode !== 'simulado') return true;
  return false;
}

export function clampDailyGoalTarget(value: number): number {
  if (!Number.isFinite(value)) return 20;
  return Math.max(5, Math.min(300, Math.round(value)));
}
