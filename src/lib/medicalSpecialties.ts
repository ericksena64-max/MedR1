import type { GrandeAreaId, MedicalQuestion } from '../types/medical';

export type SpecialtyIconKey =
  | 'heart'
  | 'brain'
  | 'lungs'
  | 'stethoscope'
  | 'scalpel'
  | 'baby'
  | 'shield'
  | 'activity'
  | 'pill'
  | 'microscope';

export interface SpecialtyExplorerItem {
  id: string;
  label: string;
  grandeAreaId: GrandeAreaId;
  questionCount: number;
  iconKey: SpecialtyIconKey;
}

function normalizeSpecialtyText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function resolveSpecialtyIconKey(
  label: string,
  grandeAreaId: GrandeAreaId
): SpecialtyIconKey {
  const norm = normalizeSpecialtyText(label);

  if (norm.includes('cardio') || norm.includes('arritm') || norm.includes('hipertens')) {
    return 'heart';
  }
  if (norm.includes('neuro') || norm.includes('psiquiat') || norm.includes('avc')) {
    return 'brain';
  }
  if (norm.includes('pneumo') || norm.includes('respirat') || norm.includes('asma') || norm.includes('dpoc')) {
    return 'lungs';
  }
  if (
    norm.includes('trauma') ||
    norm.includes('cirurg') ||
    norm.includes('abdom') ||
    norm.includes('atls') ||
    norm.includes('ortoped') ||
    norm.includes('urolog')
  ) {
    return 'scalpel';
  }
  if (
    norm.includes('neonat') ||
    norm.includes('pediat') ||
    norm.includes('puericult') ||
    norm.includes('obstet') ||
    norm.includes('gineco') ||
    norm.includes('gestac')
  ) {
    return 'baby';
  }
  if (
    norm.includes('epidemio') ||
    norm.includes('sus') ||
    norm.includes('prevent') ||
    norm.includes('etica') ||
    norm.includes('imuniz') ||
    norm.includes('vacin') ||
    norm.includes('saude')
  ) {
    return 'shield';
  }
  if (
    norm.includes('infecto') ||
    norm.includes('endem') ||
    norm.includes('hemato') ||
    norm.includes('onco') ||
    norm.includes('parasit')
  ) {
    return 'microscope';
  }
  if (norm.includes('endocr') || norm.includes('nefro') || norm.includes('reumato') || norm.includes('farmaco')) {
    return 'pill';
  }
  if (norm.includes('emergen') || norm.includes('intensiv') || norm.includes('choque') || norm.includes('uti')) {
    return 'activity';
  }

  switch (grandeAreaId) {
    case 'cirurgia_geral':
      return 'scalpel';
    case 'pediatria':
    case 'ginecologia_obstetricia':
      return 'baby';
    case 'medicina_preventiva':
      return 'shield';
    default:
      return 'stethoscope';
  }
}

export function buildSpecialtyExplorerItems(
  questions: MedicalQuestion[],
  areaFilter: GrandeAreaId | 'todos' = 'todos'
): SpecialtyExplorerItem[] {
  if (!Array.isArray(questions) || questions.length === 0) {
    return [];
  }

  const map = new Map<string, SpecialtyExplorerItem>();

  for (const q of questions) {
    if (!q || !q.grandeAreaId) continue;
    if (areaFilter !== 'todos' && q.grandeAreaId !== areaFilter) continue;
    const label = typeof q.tema === 'string' ? q.tema.trim() : '';
    if (!label) continue;

    const key = `${q.grandeAreaId}::${normalizeSpecialtyText(label)}`;
    const existing = map.get(key);
    if (existing) {
      existing.questionCount += 1;
    } else {
      map.set(key, {
        id: key,
        label,
        grandeAreaId: q.grandeAreaId,
        questionCount: 1,
        iconKey: resolveSpecialtyIconKey(label, q.grandeAreaId),
      });
    }
  }

  return Array.from(map.values()).sort((a, b) => {
    if (b.questionCount !== a.questionCount) {
      return b.questionCount - a.questionCount;
    }
    return a.label.localeCompare(b.label, 'pt-BR');
  });
}
