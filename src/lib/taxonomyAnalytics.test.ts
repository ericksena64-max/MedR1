import { describe, it, expect } from 'vitest';
import type {
  MedicalQuestion,
  QuestionFilters,
  UserAnswerRecord,
} from '../types/medical';
import {
  buildCascadingTaxonomyOptions,
  buildExamScopeOptions,
  computeTaxonomyBreakdown,
  filterQuestionsByExamScope,
  matchesTaxonomySearch,
} from './taxonomyAnalytics';
import { TAXONOMY_ENTRIES, resolveSubtema } from './taxonomyClassifier';

const BASE_FILTERS: QuestionFilters = {
  search: '',
  examSearch: '',
  grandeAreaId: '',
  tema: '',
  temas: [],
  subtema: '',
  banca: '',
  instituicao: '',
  regiao: '',
  ano: '',
  dificuldade: '',
  status: 'todas',
  comImagens: false,
  excluirAnuladasDesatualizadas: true,
};

function makeQuestion(
  overrides: Partial<MedicalQuestion> & { id: string }
): MedicalQuestion {
  return {
    code: overrides.id.toUpperCase(),
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Insuficiencia Cardiaca',
    temaSlug: 'cm-cardio',
    subtemaSlug: 'cm-cardio-insuficiencia-cardiaca',
    tags: ['icfer', 'tratamento'],
    taxonomyVersion: 'medr1_taxonomy_v1',
    banca: 'UEPA',
    instituicao: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2026,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado: 'Enunciado clínico de exemplo.',
    alternativas: [
      { letter: 'A', text: 'Alt A', explanation: 'Exp A', communityPct: 60 },
      { letter: 'B', text: 'Alt B', explanation: 'Exp B', communityPct: 20 },
      { letter: 'C', text: 'Alt C', explanation: 'Exp C', communityPct: 10 },
      { letter: 'D', text: 'Alt D', explanation: 'Exp D', communityPct: 10 },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 100,
    taxaAcertoGlobal: 60,
    comentarioGeral: 'Comentário geral.',
    perolaClinica: 'Pérola clínica.',
    referencias: ['Diretriz 2025'],
    ...overrides,
  };
}

const SAMPLE_BANK: MedicalQuestion[] = [
  makeQuestion({
    id: 'q1',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Insuficiencia Cardiaca',
    temaSlug: 'cm-cardio',
    subtemaSlug: 'cm-cardio-insuficiencia-cardiaca',
    tags: ['icfer', 'sacubitril-valsartana'],
    instituicao: 'UEPA',
    banca: 'UEPA',
    ano: 2026,
  }),
  makeQuestion({
    id: 'q2',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Hipertensao Arterial Sistemica',
    temaSlug: 'cm-cardio',
    subtemaSlug: 'cm-cardio-hipertensao-arterial-sistemica',
    tags: ['has', 'emergencia-hipertensiva'],
    instituicao: 'UEPA',
    banca: 'UEPA',
    ano: 2025,
  }),
  makeQuestion({
    id: 'q3',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Endocrinologia',
    subtema: 'Diabetes Mellitus Tipo 2',
    temaSlug: 'cm-endocrino',
    subtemaSlug: 'cm-endocrino-diabetes-mellitus-tipo-2',
    tags: ['dm2', 'isglt2'],
    instituicao: 'ENARE',
    banca: 'ENARE',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2024,
  }),
  makeQuestion({
    id: 'q4',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Trauma',
    subtema: 'ATLS e Atendimento Inicial ao Politraumatizado',
    temaSlug: 'cg-trauma',
    subtemaSlug: 'cg-trauma-atls-e-atendimento-inicial-ao-politraumatizado',
    tags: ['atls-trauma', 'pneumotorax-hipertensivo'],
    instituicao: 'ENAMED',
    banca: 'ENAMED',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2025,
  }),
  makeQuestion({
    id: 'q5',
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Imunizacoes',
    subtema: 'Calendario Vacinal da Crianca',
    temaSlug: 'ped-imunizacoes',
    subtemaSlug: 'ped-imunizacoes-calendario-vacinal-da-crianca',
    tags: ['pni', 'vacinacao'],
    instituicao: 'USP-SP',
    banca: 'USP-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2023,
    anulada: true,
  }),
];

describe('medr1_taxonomy_v1 integrity', () => {
  it('loads all 5 grandes areas, 44 temas, and 260 subtemas from canonical v1 JSON', () => {
    const areas = new Set(TAXONOMY_ENTRIES.map((e) => e.grandeAreaId));
    const temas = new Set(TAXONOMY_ENTRIES.map((e) => e.temaSlug));
    const subtemas = new Set(TAXONOMY_ENTRIES.map((e) => e.subtemaSlug));

    expect(areas.size).toBe(5);
    expect(temas.size).toBe(44);
    expect(subtemas.size).toBe(260);
    expect(TAXONOMY_ENTRIES.length).toBe(260);
  });

  it('resolves both unaccented and accented PT-BR taxonomy labels cleanly', () => {
    const icPlain = resolveSubtema('Insuficiencia Cardiaca');
    const icAccented = resolveSubtema('Insuficiência Cardíaca');
    expect(icPlain?.subtemaSlug).toBe('cm-cardio-insuficiencia-cardiaca');
    expect(icAccented?.subtemaSlug).toBe('cm-cardio-insuficiencia-cardiaca');
    expect(icPlain?.subtema).toBe('Insuficiência Cardíaca');

    const aps = resolveSubtema('Atencao Primaria a Saude e ESF');
    expect(aps?.subtemaSlug).toBe('mp-sus-atencao-primaria-a-saude-e-esf');
    expect(aps?.subtema).toBe('Atenção Primária à Saúde e ESF');

    const pre = resolveSubtema('Pre-Eclampsia, Eclampsia e Sindrome HELLP');
    expect(pre?.subtemaSlug).toBe('go-shg-pre-eclampsia-eclampsia-e-sindrome-hellp');
    expect(pre?.subtema).toBe('Pré-Eclâmpsia, Eclâmpsia e Síndrome HELLP');
  });
});

describe('matchesTaxonomySearch', () => {
  it('matches hyphenated tags, space-separated tags, #tag syntax, and slugs', () => {
    const traumaQ = SAMPLE_BANK[3];
    expect(matchesTaxonomySearch(traumaQ, 'atls-trauma')).toBe(true);
    expect(matchesTaxonomySearch(traumaQ, '#atls-trauma')).toBe(true);
    expect(matchesTaxonomySearch(traumaQ, 'pneumotorax hipertensivo')).toBe(true);
    expect(matchesTaxonomySearch(traumaQ, 'cg-trauma')).toBe(true);
    expect(matchesTaxonomySearch(traumaQ, 'pneumotórax')).toBe(true);
    expect(matchesTaxonomySearch(traumaQ, 'sacubitril')).toBe(false);
  });

  it('matches Portuguese queries with diacritics against ASCII v1 taxonomy labels', () => {
    const icQ = SAMPLE_BANK[0];
    expect(matchesTaxonomySearch(icQ, 'Insuficiência Cardíaca')).toBe(true);
    expect(matchesTaxonomySearch(icQ, '#icfer')).toBe(true);
  });
});

describe('buildCascadingTaxonomyOptions', () => {
  it('calculates Grande Área, Tema and Subtema counts dynamically and excludes empty buckets', () => {
    const root = buildCascadingTaxonomyOptions(SAMPLE_BANK, BASE_FILTERS);
    expect(root.baseCount).toBe(4); // q5 is anulada and excluded by BASE_FILTERS
    expect(
      root.grandeAreaOptions.find((o) => o.value === 'clinica_medica')?.label
    ).toBe('Clínica Médica (3)');
    expect(
      root.grandeAreaOptions.find((o) => o.value === 'cirurgia_geral')?.label
    ).toBe('Cirurgia Geral (1)');
    expect(
      root.grandeAreaOptions.find((o) => o.value === 'pediatria')?.count
    ).toBe(0);

    // Filter down to Clínica Médica -> only Cardiologia (2) and Endocrinologia (1)
    const cmOnly = buildCascadingTaxonomyOptions(SAMPLE_BANK, {
      ...BASE_FILTERS,
      grandeAreaId: 'clinica_medica',
    });
    expect(cmOnly.temaOptions.map((t) => t.label)).toEqual([
      'Cardiologia (2)',
      'Endocrinologia (1)',
    ]);
    expect(cmOnly.subtemaOptions.length).toBe(3);

    // Filter down to Clínica Médica + Cardiologia -> only 2 subtemas
    const cardioOnly = buildCascadingTaxonomyOptions(SAMPLE_BANK, {
      ...BASE_FILTERS,
      grandeAreaId: 'clinica_medica',
      tema: 'Cardiologia',
    });
    expect(cardioOnly.subtemaOptions.map((s) => s.label)).toEqual([
      'Hipertensao Arterial Sistemica (1)',
      'Insuficiencia Cardiaca (1)',
    ]);
  });

  it('respects non-taxonomy filters like instituicao and student status', () => {
    const answers: Record<string, UserAnswerRecord> = {
      q1: {
        questionId: 'q1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: '2026-11-26T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 30,
      },
    };
    const res = buildCascadingTaxonomyOptions(
      SAMPLE_BANK,
      {
        ...BASE_FILTERS,
        instituicao: 'UEPA',
        status: 'erradas',
      },
      { answers, bookmarks: [] }
    );
    expect(res.baseCount).toBe(1);
    expect(res.temaOptions.map((t) => t.label)).toEqual(['Cardiologia (1)']);
    expect(res.subtemaOptions.map((s) => s.label)).toEqual([
      'Insuficiencia Cardiaca (1)',
    ]);
    expect(res.topTags[0]).toEqual({ tag: 'icfer', count: 1 });
  });
});

describe('Exam scopes and computeTaxonomyBreakdown', () => {
  it('builds UEPA, ENARE/ENAMED and individual exam scopes accurately', () => {
    const scopes = buildExamScopeOptions(SAMPLE_BANK, false);
    expect(scopes.map((s) => s.value)).toEqual([
      'all',
      'group:UEPA',
      'group:ENARE_ENAMED',
      'exam:UEPA::2026',
      'exam:ENAMED::2025',
      'exam:UEPA::2025',
      'exam:ENARE::2024',
      'exam:USP-SP::2023',
    ]);
    expect(scopes.find((s) => s.value === 'group:UEPA')?.label).toBe(
      'UEPA 2025–2026 (2)'
    );
    expect(filterQuestionsByExamScope(SAMPLE_BANK, 'group:ENARE_ENAMED').length).toBe(
      2
    );
  });

  it('computes distribution, drill-down rankings and weak subtemas sorted by lowest accuracy', () => {
    const answers: Record<string, UserAnswerRecord> = {
      q1: {
        questionId: 'q1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: '2026-11-26T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 40,
      },
      q2: {
        questionId: 'q2',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-26T10:05:00Z',
        mode: 'estudo',
        timeSpentSec: 25,
      },
      q4: {
        questionId: 'q4',
        selectedLetter: 'C',
        isCorrect: false,
        answeredAt: '2026-11-26T10:10:00Z',
        mode: 'estudo',
        timeSpentSec: 35,
      },
    };

    const full = computeTaxonomyBreakdown(SAMPLE_BANK, answers, {
      examScope: 'all',
    });
    expect(full.totalQuestions).toBe(5);
    expect(full.totalAnswered).toBe(3);
    expect(full.totalCorrect).toBe(1);
    expect(full.areas.find((a) => a.id === 'clinica_medica')?.count).toBe(3);
    expect(full.areas.find((a) => a.id === 'clinica_medica')?.pct).toBeCloseTo(
      60,
      1
    );
    expect(full.temas[0].tema).toBe('Cardiologia');
    expect(full.temas[0].count).toBe(2);

    // Weak subtemas should surface the 0% ones first and mark them as weak spots
    expect(full.weakSubtemas.length).toBe(3);
    expect(full.weakSubtemas[0].accuracyPct).toBe(0);
    expect(full.weakSubtemas[0].isWeakSpot).toBe(true);
    expect(full.weakSubtemas[2].subtema).toBe('Hipertensao Arterial Sistemica');
    expect(full.weakSubtemas[2].accuracyPct).toBe(100);
    expect(full.weakSubtemas[2].isWeakSpot).toBe(false);

    // Drill-down by UEPA + Cardiologia
    const uepaCardio = computeTaxonomyBreakdown(SAMPLE_BANK, answers, {
      examScope: 'group:UEPA',
      grandeAreaId: 'clinica_medica',
      tema: 'Cardiologia',
    });
    expect(uepaCardio.totalQuestions).toBe(2);
    expect(uepaCardio.subtemas.length).toBe(2);
    expect(uepaCardio.weakSubtemas[0].subtema).toBe('Insuficiencia Cardiaca');
  });
});
