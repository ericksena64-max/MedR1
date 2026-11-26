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
  {
    id: 'uepa-2022',
    label: 'UEPA 2022',
    idPrefix: 'q-uepa-2022-',
    instituicao: 'UEPA',
    banca: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2022,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 96,
    areaCounts: {
      clinica_medica: 20,
      cirurgia_geral: 20,
      ginecologia_obstetricia: 20,
      pediatria: 20,
      medicina_preventiva: 20,
    },
    loader: () =>
      import('./uepa2022Questions').then((m) => m.UEPA_2022_QUESTIONS),
  },
  // [MEDR1_AUTO_CATALOG_START]
  {
    id: 'usp-rp-2023',
    label: 'USP-RP 2023',
    idPrefix: 'q-usp-rp-2023-',
    instituicao: 'USP-RP',
    banca: 'USP-RP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 99,
    areaCounts: {
      clinica_medica: 28,
      cirurgia_geral: 20,
      ginecologia_obstetricia: 20,
      pediatria: 22,
      medicina_preventiva: 10,
    },
    loader: () =>
      import('./uspRp2023Questions').then((m) => m.USP_RP_2023_QUESTIONS),
  },
  {
    id: 'usp-sp-2023',
    label: 'USP-SP 2023',
    idPrefix: 'q-usp-sp-2023-',
    instituicao: 'USP-SP',
    banca: 'USP-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    questionCount: 120,
    activeCount: 120,
    areaCounts: {
      clinica_medica: 23,
      cirurgia_geral: 24,
      ginecologia_obstetricia: 24,
      pediatria: 24,
      medicina_preventiva: 25,
    },
    loader: () =>
      import('./uspSp2023Questions').then((m) => m.USP_SP_2023_QUESTIONS),
  },
  {
    id: 'sus-sp-2023',
    label: 'SUS-SP 2023',
    idPrefix: 'q-sus-sp-2023-',
    instituicao: 'SUS-SP',
    banca: 'SUS-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 91,
    areaCounts: {
      clinica_medica: 22,
      cirurgia_geral: 17,
      ginecologia_obstetricia: 21,
      pediatria: 20,
      medicina_preventiva: 20,
    },
    loader: () =>
      import('./susSp2023Questions').then((m) => m.SUS_SP_2023_QUESTIONS),
  },
  {
    id: 'unifesp-2023',
    label: 'UNIFESP 2023',
    idPrefix: 'q-unifesp-2023-',
    instituicao: 'UNIFESP',
    banca: 'UNIFESP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    questionCount: 100,
    activeCount: 95,
    areaCounts: {
      clinica_medica: 23,
      cirurgia_geral: 18,
      ginecologia_obstetricia: 18,
      pediatria: 25,
      medicina_preventiva: 16,
    },
    loader: () =>
      import('./unifesp2023Questions').then((m) => m.UNIFESP_2023_QUESTIONS),
  },
  // [MEDR1_AUTO_CATALOG_END]
];
