import type { ExamType, GrandeAreaId, MedicalQuestion } from '../types/medical';

export interface ExamCatalogEntry {
  id: string;
  label: string;
  idPrefix: string;
  instituicao: string;
  banca: string;
  estado: string;
  regiao: string;
  ano: number;
  tipoProva: ExamType;
  questionCount: number;
  activeCount: number;
  areaCounts: Record<GrandeAreaId, number>;
  loader: () => Promise<MedicalQuestion[]>;
}

/**
 * Lightweight manifest of official curated exams in MedR1.
 * Each exam file is dynamically imported on demand (Vite code-splitting),
 * keeping the initial app bundle small even as the bank scales past 1,000+ questions.
 */
export const OFFICIAL_EXAM_CATALOG: ExamCatalogEntry[] = [
  {
    id: 'uepa-2026',
    label: 'UEPA 2026',
    idPrefix: 'q-uepa-2026-',
    instituicao: 'UEPA',
    banca: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2026,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 91,
    areaCounts: {
      clinica_medica: 22,
      cirurgia_geral: 21,
      ginecologia_obstetricia: 21,
      pediatria: 20,
      medicina_preventiva: 16,
    },
    loader: () =>
      import('./uepa2026Questions').then((m) => m.UEPA_2026_QUESTIONS),
  },
  {
    id: 'uepa-2025',
    label: 'UEPA 2025',
    idPrefix: 'q-uepa-2025-',
    instituicao: 'UEPA',
    banca: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 97,
    areaCounts: {
      clinica_medica: 23,
      cirurgia_geral: 24,
      ginecologia_obstetricia: 20,
      pediatria: 21,
      medicina_preventiva: 12,
    },
    loader: () =>
      import('./uepa2025Questions').then((m) => m.UEPA_2025_QUESTIONS),
  },
  {
    id: 'uepa-2024',
    label: 'UEPA 2024',
    idPrefix: 'q-uepa-2024-',
    instituicao: 'UEPA',
    banca: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 98,
    areaCounts: {
      clinica_medica: 19,
      cirurgia_geral: 20,
      ginecologia_obstetricia: 19,
      pediatria: 23,
      medicina_preventiva: 19,
    },
    loader: () =>
      import('./uepa2024Questions').then((m) => m.UEPA_2024_QUESTIONS),
  },
  {
    id: 'uepa-2023',
    label: 'UEPA 2023',
    idPrefix: 'q-uepa-2023-',
    instituicao: 'UEPA',
    banca: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 95,
    areaCounts: {
      clinica_medica: 25,
      cirurgia_geral: 20,
      ginecologia_obstetricia: 20,
      pediatria: 20,
      medicina_preventiva: 15,
    },
    loader: () =>
      import('./uepa2023Questions').then((m) => m.UEPA_2023_QUESTIONS),
  },
];
