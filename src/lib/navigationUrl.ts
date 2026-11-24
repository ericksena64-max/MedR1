import type { ActiveTab, GrandeAreaId, StudyMode } from '../types/medical';

const VALID_AREAS = new Set<GrandeAreaId>([
  'clinica_medica',
  'cirurgia_geral',
  'ginecologia_obstetricia',
  'pediatria',
  'medicina_preventiva',
]);

export interface ParsedNavigationUrl {
  tab: ActiveTab;
  mode: StudyMode;
  area?: GrandeAreaId;
  tema?: string;
}

export function buildNavigationUrl({
  tab,
  mode,
  area,
  tema,
}: {
  tab: ActiveTab;
  mode: StudyMode;
  area?: GrandeAreaId;
  tema?: string;
}): string {
  let pathname = '/';
  if (tab === 'questoes') {
    pathname = mode === 'simulado' ? '/simulados' : '/questoes';
  } else if (tab === 'flashcards') {
    pathname = '/flashcards';
  } else if (tab === 'caderno_erros') {
    pathname = '/caderno-erros';
  } else if (tab === 'desempenho') {
    pathname = '/desempenho';
  } else if (tab === 'ranking') {
    pathname = '/ranking';
  } else if (tab === 'importar') {
    pathname = '/importar';
  }

  if (tab === 'questoes' && mode === 'estudo') {
    const params = new URLSearchParams();
    if (area && VALID_AREAS.has(area)) params.set('area', area);
    if (tema && tema.trim()) params.set('tema', tema.trim());
    const qs = params.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  }

  return pathname;
}

export function parseNavigationUrl(
  pathname: string,
  search: string
): ParsedNavigationUrl {
  const cleanPath = (pathname || '/').replace(/\/+$/, '') || '/';
  let tab: ActiveTab = 'inicio';
  let mode: StudyMode = 'estudo';

  switch (cleanPath) {
    case '/questoes':
      tab = 'questoes';
      mode = 'estudo';
      break;
    case '/simulados':
      tab = 'questoes';
      mode = 'simulado';
      break;
    case '/flashcards':
      tab = 'flashcards';
      break;
    case '/caderno-erros':
      tab = 'caderno_erros';
      break;
    case '/desempenho':
      tab = 'desempenho';
      break;
    case '/ranking':
      tab = 'ranking';
      break;
    case '/importar':
      tab = 'importar';
      break;
    default:
      tab = 'inicio';
      mode = 'estudo';
      break;
  }

  const result: ParsedNavigationUrl = { tab, mode };

  if (tab === 'questoes' && search) {
    const params = new URLSearchParams(search);
    const rawArea = params.get('area');
    if (rawArea && VALID_AREAS.has(rawArea as GrandeAreaId)) {
      result.area = rawArea as GrandeAreaId;
    }
    const rawTema = params.get('tema')?.trim();
    if (rawTema) {
      result.tema = rawTema;
    }
  }

  return result;
}
