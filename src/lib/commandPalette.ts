import { GRANDES_AREAS } from '../data/taxonomy';
import type { ActiveTab, GrandeAreaId, MedicalQuestion } from '../types/medical';
import { buildSpecialtyExplorerItems } from './medicalSpecialties';

export type CommandPaletteGroup =
  | 'Navegação'
  | 'Grandes Áreas'
  | 'Especialidades'
  | 'Ações';

export type CommandPaletteAction =
  | { type: 'tab'; tab: ActiveTab }
  | { type: 'simulados' }
  | { type: 'area'; areaId: GrandeAreaId }
  | { type: 'topic'; topicLabel: string; grandeAreaId: GrandeAreaId }
  | { type: 'open_routine' }
  | { type: 'toggle_focus' }
  | { type: 'toggle_theme' };

export interface CommandPaletteItem {
  id: string;
  group: CommandPaletteGroup;
  label: string;
  subtitle: string;
  keywords: string;
  action: CommandPaletteAction;
}

function normalizeQuery(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function buildCommandPaletteItems(
  questions: MedicalQuestion[]
): CommandPaletteItem[] {
  const navItems: CommandPaletteItem[] = [
    {
      id: 'nav-inicio',
      group: 'Navegação',
      label: 'Início',
      subtitle: 'Grade semanal de estudos e resumo de aprovação',
      keywords: 'home inicio cronograma semana grade',
      action: { type: 'tab', tab: 'inicio' },
    },
    {
      id: 'nav-questoes',
      group: 'Navegação',
      label: 'Banco de Questões',
      subtitle: 'Resolver questões com filtros e comentários',
      keywords: 'questoes banco treino prova estudo',
      action: { type: 'tab', tab: 'questoes' },
    },
    {
      id: 'nav-simulados',
      group: 'Navegação',
      label: 'Simulados',
      subtitle: 'Modo cronometrado de residência médica',
      keywords: 'simulado cronometro prova tempo',
      action: { type: 'simulados' },
    },
    {
      id: 'nav-flashcards',
      group: 'Navegação',
      label: 'Flashcards',
      subtitle: 'Revisão espaçada FSRS-6 estilo Anki',
      keywords: 'flashcards srs fsrs anki revisao cartoes',
      action: { type: 'tab', tab: 'flashcards' },
    },
    {
      id: 'nav-erros',
      group: 'Navegação',
      label: 'Caderno de Erros',
      subtitle: 'Questões erradas e favoritadas para revisão',
      keywords: 'erros caderno favoritadas revisao',
      action: { type: 'tab', tab: 'caderno_erros' },
    },
    {
      id: 'nav-desempenho',
      group: 'Navegação',
      label: 'Desempenho',
      subtitle: 'Pareto 80/20, Mapa de Calor e Radar de Lacunas',
      keywords: 'desempenho analytics pareto heatmap radar estatisticas',
      action: { type: 'tab', tab: 'desempenho' },
    },
    {
      id: 'nav-ranking',
      group: 'Navegação',
      label: 'Ranking Ao Vivo',
      subtitle: 'Comparativo comunitário e perfil do aluno',
      keywords: 'ranking perfil comunidade ao vivo',
      action: { type: 'tab', tab: 'ranking' },
    },
    {
      id: 'nav-importar',
      group: 'Navegação',
      label: 'Importar Provas IA',
      subtitle: 'Extrair PDF/JSON/CSV para o banco',
      keywords: 'importar pdf csv json ia prova',
      action: { type: 'tab', tab: 'importar' },
    },
  ];

  const actionItems: CommandPaletteItem[] = [
    {
      id: 'action-routine',
      group: 'Ações',
      label: 'Configurar Rotina',
      subtitle: 'Prova alvo, dias ativos, horas/dia e ritmo',
      keywords: 'rotina configurar prova alvo uepa enare sus usp horas',
      action: { type: 'open_routine' },
    },
    {
      id: 'action-focus',
      group: 'Ações',
      label: 'Alternar Modo Foco',
      subtitle: 'Oculta controles laterais durante resolução',
      keywords: 'foco modo tela cheia concentracao',
      action: { type: 'toggle_focus' },
    },
    {
      id: 'action-theme',
      group: 'Ações',
      label: 'Alternar Tema Claro / Escuro',
      subtitle: 'Troca rápida de aparência da interface',
      keywords: 'tema claro escuro dark light aparencia',
      action: { type: 'toggle_theme' },
    },
  ];

  const areaItems: CommandPaletteItem[] = GRANDES_AREAS.map((area) => ({
    id: `area-${area.id}`,
    group: 'Grandes Áreas',
    label: area.name,
    subtitle: `Treinar questões de ${area.shortName}`,
    keywords: `${area.name} ${area.shortName} area`,
    action: { type: 'area', areaId: area.id },
  }));

  const specialtyItems: CommandPaletteItem[] = buildSpecialtyExplorerItems(
    questions,
    'todos'
  )
    .slice(0, 25)
    .map((spec) => ({
      id: `spec-${spec.id}`,
      group: 'Especialidades',
      label: spec.label,
      subtitle: `${spec.questionCount} ${spec.questionCount === 1 ? 'questão' : 'questões'}`,
      keywords: `${spec.label} tema especialidade cadeira`,
      action: {
        type: 'topic',
        topicLabel: spec.label,
        grandeAreaId: spec.grandeAreaId,
      },
    }));

  return [...navItems, ...actionItems, ...areaItems, ...specialtyItems];
}

export function filterCommandPaletteItems(
  items: CommandPaletteItem[],
  query: string
): CommandPaletteItem[] {
  const norm = normalizeQuery(query);
  if (!norm) {
    return items.slice(0, 12);
  }

  const scored: Array<{ item: CommandPaletteItem; score: number }> = [];
  for (const item of items) {
    const normLabel = normalizeQuery(item.label);
    const normSub = normalizeQuery(item.subtitle);
    const normKeys = normalizeQuery(item.keywords);

    if (normLabel.startsWith(norm)) {
      scored.push({ item, score: 3 });
    } else if (normLabel.includes(norm)) {
      scored.push({ item, score: 2 });
    } else if (normKeys.includes(norm) || normSub.includes(norm)) {
      scored.push({ item, score: 1 });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map((entry) => entry.item);
}
