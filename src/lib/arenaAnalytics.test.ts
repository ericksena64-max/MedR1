import { describe, expect, it } from 'vitest';
import type {
  MedicalQuestion,
  QuestionFilters,
  UserAnswerRecord,
} from '../types/medical';
import { OFFICIAL_EXAM_CATALOG } from '../data/examCatalog';
import { matchesExamCatalogFilters } from './questionBankStore';
import { matchesNonTaxonomyFilters } from './taxonomyAnalytics';
import {
  ARENA_BOARD_GROUPS,
  computeArenaBankSummary,
  computeArenaBoardMetrics,
  computeArenaPercentileThermometer,
  computeArenaPrioritySubtemas,
} from './arenaAnalytics';

const BASE_FILTERS: QuestionFilters = {
  search: '',
  examSearch: '',
  grandeAreaId: '',
  tema: '',
  temas: [],
  subtema: '',
  banca: '',
  instituicao: '',
  instituicoes: [],
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
    subtema: 'Insuficiência Cardíaca',
    temaSlug: 'cm-cardio',
    subtemaSlug: 'cm-cardio-insuficiencia-cardiaca',
    tags: ['icfer'],
    taxonomyVersion: 'medr1_taxonomy_v1',
    banca: 'UEPA',
    instituicao: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2026,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado: 'Questão clínica de exemplo.',
    alternativas: [
      { letter: 'A', text: 'Alt A', explanation: 'Exp A', communityPct: 60 },
      { letter: 'B', text: 'Alt B', explanation: 'Exp B', communityPct: 20 },
      { letter: 'C', text: 'Alt C', explanation: 'Exp C', communityPct: 10 },
      { letter: 'D', text: 'Alt D', explanation: 'Exp D', communityPct: 10 },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 100,
    taxaAcertoGlobal: 65,
    comentarioGeral: 'Comentário.',
    perolaClinica: 'Pérola.',
    referencias: ['Diretriz'],
    ...overrides,
  };
}

const ARENA_SAMPLE: MedicalQuestion[] = [
  makeQuestion({
    id: 'q-uepa-1',
    instituicao: 'UEPA',
    banca: 'UEPA',
    ano: 2026,
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Insuficiência Cardíaca',
  }),
  makeQuestion({
    id: 'q-uepa-2',
    instituicao: 'UEPA',
    banca: 'UEPA',
    ano: 2025,
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Trauma e ATLS',
    subtema: 'Trauma Torácico',
  }),
  makeQuestion({
    id: 'q-uepa-3',
    instituicao: 'UEPA',
    banca: 'UEPA',
    ano: 2024,
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Imunizações',
    subtema: 'Calendário Nacional de Vacinação - PNI',
  }),
  makeQuestion({
    id: 'q-enare-1',
    instituicao: 'ENARE',
    banca: 'ENARE',
    ano: 2024,
    estado: 'BR',
    regiao: 'Nacional',
    grandeAreaId: 'medicina_preventiva',
    grandeArea: 'Medicina Preventiva',
    tema: 'SUS, Políticas Públicas e Gestão em Saúde',
    subtema: 'Atenção Primária à Saúde e ESF',
  }),
  makeQuestion({
    id: 'q-enamed-1',
    instituicao: 'ENAMED',
    banca: 'ENAMED',
    ano: 2025,
    estado: 'BR',
    regiao: 'Nacional',
    grandeAreaId: 'ginecologia_obstetricia',
    grandeArea: 'Ginecologia e Obstetrícia',
    tema: 'Pré-Natal e Fisiologia Obstétrica',
    subtema: 'Assistência Pré-Natal de Baixo Risco',
  }),
  makeQuestion({
    id: 'q-uspsp-1',
    instituicao: 'USP-SP',
    banca: 'USP-SP',
    ano: 2023,
    estado: 'SP',
    regiao: 'Sudeste',
  }),
  makeQuestion({
    id: 'q-usprp-1',
    instituicao: 'USP-RP',
    banca: 'USP-RP',
    ano: 2023,
    estado: 'SP',
    regiao: 'Sudeste',
  }),
  makeQuestion({
    id: 'q-unifesp-1',
    instituicao: 'UNIFESP',
    banca: 'UNIFESP',
    ano: 2023,
    estado: 'SP',
    regiao: 'Sudeste',
  }),
  makeQuestion({
    id: 'q-sussp-1',
    instituicao: 'SUS-SP',
    banca: 'SUS-SP',
    ano: 2023,
    estado: 'SP',
    regiao: 'Sudeste',
  }),
];

describe('ARENA_BOARD_GROUPS & computeArenaBoardMetrics', () => {
  it('groups all 11 official exams summing to 1,107 fallback questions across 4 comparative cards', () => {
    const sumFallback = ARENA_BOARD_GROUPS.reduce(
      (acc, g) => acc + g.catalogFallbackTotal,
      0
    );
    expect(ARENA_BOARD_GROUPS.length).toBe(4);
    expect(sumFallback).toBe(1107);
  });

  it('computes real-time accuracy and delta per board and returns null when unanswered', () => {
    const answers: Record<string, UserAnswerRecord> = {
      'q-uepa-1': {
        questionId: 'q-uepa-1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 30,
      },
      'q-uepa-2': {
        questionId: 'q-uepa-2',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T10:01:00Z',
        mode: 'estudo',
        timeSpentSec: 25,
      },
      'q-enare-1': {
        questionId: 'q-enare-1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: '2026-11-27T10:02:00Z',
        mode: 'estudo',
        timeSpentSec: 40,
      },
    };

    const metrics = computeArenaBoardMetrics(ARENA_SAMPLE, answers);
    const uepa = metrics.find((m) => m.id === 'uepa')!;
    const enare = metrics.find((m) => m.id === 'enare_enamed')!;
    const usp = metrics.find((m) => m.id === 'usp')!;

    expect(uepa.totalQuestions).toBe(3);
    expect(uepa.answeredCount).toBe(2);
    expect(uepa.userAccuracyPct).toBeCloseTo(100, 1);
    expect(uepa.deltaVsCommunity).toBeCloseTo(100 - 65.4, 1);

    expect(enare.totalQuestions).toBe(2);
    expect(enare.answeredCount).toBe(1);
    expect(enare.userAccuracyPct).toBeCloseTo(0, 1);
    expect(enare.deltaVsCommunity).toBeCloseTo(-68.1, 1);

    expect(usp.answeredCount).toBe(0);
    expect(usp.userAccuracyPct).toBeNull();
    expect(usp.deltaVsCommunity).toBeNull();
  });

  it('auto-detects new boards outside the 4 primary groups and scales editions dynamically', () => {
    const expandedBank: MedicalQuestion[] = [
      ...ARENA_SAMPLE,
      makeQuestion({
        id: 'q-uepa-2027-1',
        instituicao: 'UEPA',
        banca: 'UEPA',
        ano: 2027,
      }),
      makeQuestion({
        id: 'q-psumg-2025-1',
        instituicao: 'PSU-MG',
        banca: 'AREMG',
        estado: 'MG',
        regiao: 'Sudeste',
        ano: 2025,
        taxaAcertoGlobal: 72,
      }),
      makeQuestion({
        id: 'q-psumg-2024-1',
        instituicao: 'PSU-MG',
        banca: 'AREMG',
        estado: 'MG',
        regiao: 'Sudeste',
        ano: 2024,
        taxaAcertoGlobal: 68,
      }),
      makeQuestion({
        id: 'q-unicamp-2025-1',
        instituicao: 'UNICAMP',
        banca: 'COMVEST',
        estado: 'SP',
        regiao: 'Sudeste',
        ano: 2025,
        taxaAcertoGlobal: 59,
      }),
    ];

    const answers: Record<string, UserAnswerRecord> = {
      'q-psumg-2025-1': {
        questionId: 'q-psumg-2025-1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T12:00:00Z',
        mode: 'estudo',
        timeSpentSec: 30,
      },
    };

    const metrics = computeArenaBoardMetrics(expandedBank, answers);
    const uepa = metrics.find((m) => m.id === 'uepa')!;
    expect(uepa.isPrimary).toBe(true);
    expect(uepa.years).toEqual([2024, 2025, 2026, 2027]);
    expect(uepa.subtitle).toBe('2024–2027 • 4 edições');

    const psuMg = metrics.find((m) => m.label === 'PSU-MG')!;
    const unicamp = metrics.find((m) => m.label === 'UNICAMP')!;
    expect(psuMg).toBeDefined();
    expect(psuMg.isPrimary).toBe(false);
    expect(psuMg.badge).toBe('Nova Banca');
    expect(psuMg.totalQuestions).toBe(2);
    expect(psuMg.subtitle).toBe('2024–2025 • 2 edições • MG');
    expect(psuMg.communityAvgPct).toBeCloseTo(70.0, 1);
    expect(psuMg.userAccuracyPct).toBeCloseTo(100.0, 1);
    expect(psuMg.deltaVsCommunity).toBeCloseTo(30.0, 1);

    expect(unicamp).toBeDefined();
    expect(unicamp.isPrimary).toBe(false);
    expect(unicamp.totalQuestions).toBe(1);
    expect(unicamp.subtitle).toBe('2025 • 1 edição • SP');

    const summary = computeArenaBankSummary(expandedBank, metrics);
    expect(summary.totalQuestions).toBe(expandedBank.length);
    expect(summary.totalInstitutions).toBe(9);
    expect(summary.primaryBoardsCount).toBe(4);
    expect(summary.dynamicBoardsCount).toBe(2);
    expect(summary.totalBoards).toBe(6);
  });
});

describe('computeArenaPrioritySubtemas', () => {
  it('prioritizes lowest-accuracy user subtemas and backfills with high-incidence UEPA subtemas', () => {
    const answers: Record<string, UserAnswerRecord> = {
      'q-uepa-1': {
        questionId: 'q-uepa-1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: '2026-11-27T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 30,
      },
    };

    const top3 = computeArenaPrioritySubtemas(ARENA_SAMPLE, answers, 3);
    expect(top3.length).toBe(3);
    expect(top3[0].subtema).toBe('Insuficiência Cardíaca');
    expect(top3[0].accuracyPct).toBe(0);
    expect(top3[0].isAlert).toBe(true);
    expect(top3[0].source).toBe('user_weakness');

    // Remaining 2 slots should come from UEPA high-incidence fallback
    expect(top3[1].source).toBe('uepa_incidence');
    expect(top3[1].accuracyPct).toBeNull();
    expect(top3[2].source).toBe('uepa_incidence');
  });
});

describe('computeArenaPercentileThermometer', () => {
  it('returns empty state when 0 questions are answered and monotonic Top X% with answers', () => {
    const empty = computeArenaPercentileThermometer(ARENA_SAMPLE, {}, {
      targetSpecialty: 'Psiquiatria',
    });
    expect(empty.globalAnswered).toBe(0);
    expect(empty.globalAccuracyPct).toBeNull();
    expect(empty.bars.every((b) => b.percentile === null)).toBe(true);

    const highAnswers: Record<string, UserAnswerRecord> = {
      'q-uepa-1': {
        questionId: 'q-uepa-1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 20,
      },
      'q-enare-1': {
        questionId: 'q-enare-1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T10:01:00Z',
        mode: 'estudo',
        timeSpentSec: 20,
      },
    };

    const res = computeArenaPercentileThermometer(ARENA_SAMPLE, highAnswers, {
      targetSpecialty: 'Psiquiatria',
    });
    expect(res.globalAnswered).toBe(2);
    expect(res.globalAccuracyPct).toBeCloseTo(100, 1);
    expect(res.uepaAnswered).toBe(1);
    expect(res.bars[0].pillText).toMatch(/^Top \d+% Geral$/);
    expect(res.bars[1].pillText).toMatch(/^Top \d+% em Psiquiatria$/);
    expect(res.bars[2].pillText).toMatch(/^Top \d+% na UEPA$/);
    expect(res.bars[0].topPct!).toBeLessThan(10);

    // Custom Supabase-injected distribution lowers percentile when mean is higher
    const harder = computeArenaPercentileThermometer(ARENA_SAMPLE, {
      'q-uepa-1': {
        questionId: 'q-uepa-1',
        selectedLetter: 'A',
        isCorrect: true,
        answeredAt: '2026-11-27T10:00:00Z',
        mode: 'estudo',
        timeSpentSec: 20,
      },
      'q-enare-1': {
        questionId: 'q-enare-1',
        selectedLetter: 'B',
        isCorrect: false,
        answeredAt: '2026-11-27T10:01:00Z',
        mode: 'estudo',
        timeSpentSec: 20,
      },
    }, {
      communityBenchmarks: {
        overall: { meanPct: 80, stdDevPct: 10 },
        uepa: { meanPct: 60, stdDevPct: 10 },
        specialties: { Psiquiatria: { meanPct: 75, stdDevPct: 10 } },
      },
    });
    expect(harder.bars[0].percentile!).toBeLessThan(20);
    expect(harder.bars[2].percentile!).toBeGreaterThan(80);
  });
});

describe('multi-institution filter support', () => {
  it('filters questions and exam catalog entries by instituicoes array', () => {
    const enareEnamed = ARENA_SAMPLE.filter((q) =>
      matchesNonTaxonomyFilters(q, {
        ...BASE_FILTERS,
        instituicoes: ['ENARE', 'ENAMED'],
      })
    );
    expect(enareEnamed.map((q) => q.instituicao)).toEqual(['ENARE', 'ENAMED']);

    const uspCatalog = OFFICIAL_EXAM_CATALOG.filter((entry) =>
      matchesExamCatalogFilters(entry, {
        instituicoes: ['USP-SP', 'USP-RP'],
      })
    );
    expect(uspCatalog.map((e) => e.instituicao).sort()).toEqual([
      'USP-RP',
      'USP-SP',
    ]);
  });
});
