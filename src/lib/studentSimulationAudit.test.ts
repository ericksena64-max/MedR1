import { describe, expect, it } from 'vitest';
import { UEPA_2022_QUESTIONS } from '../data/uepa2022Questions';
import { UEPA_2023_QUESTIONS } from '../data/uepa2023Questions';
import { UEPA_2024_QUESTIONS } from '../data/uepa2024Questions';
import { UEPA_2025_QUESTIONS } from '../data/uepa2025Questions';
import { UEPA_2026_QUESTIONS } from '../data/uepa2026Questions';
import { GRANDES_AREAS } from '../data/taxonomy';
import type {
  GrandeAreaId,
  LiveRankingUser,
  MedicalQuestion,
  SimuladoRecord,
  UserAnswerRecord,
} from '../types/medical';
import {
  calcularEstimativaResidencia,
  identificarGargaloPrioritario,
  type AreaMedica,
  type ConfiguracaoProva,
  type DesempenhoArea,
} from './residenciaEstimator';
import {
  buildBoardParetoProfile,
  calculateParetoByExam,
} from './paretoCalculator';
import {
  BOARD_INCIDENCE_MATRIX,
  getEffectiveBoardTopics,
} from './examWeights';
import { computePsychometricApproval } from './psychometricApproval';
import { computeCutoffProjection } from './cutoffProjection';
import { buildHomeIntelligenceSummary } from './homeIntelligence';
import { buildPeriodRanking, countUserAnswersByPeriod } from './rankingPeriods';

const ALL_UEPA_QUESTIONS: MedicalQuestion[] = [
  ...UEPA_2026_QUESTIONS,
  ...UEPA_2025_QUESTIONS,
  ...UEPA_2024_QUESTIONS,
  ...UEPA_2023_QUESTIONS,
  ...UEPA_2022_QUESTIONS,
];

const UEPA_CONFIG: ConfiguracaoProva = {
  totalQuestoesProva: 100,
  notaCorteMedia: 78.0,
  notaCorteDesvioPadrao: 2.0,
  minimoQuestoesPorArea: 10,
  usarSuavizacaoLaplace: false,
};

/** Deterministic LCG PRNG so simulation results are 100% reproducible. */
function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

interface SimulatedStudentSpec {
  id: string;
  name: string;
  seed: number;
  questionsPerArea: Record<GrandeAreaId, number>;
  accuracyByArea: Record<GrandeAreaId, number>;
}

interface SimulatedStudentResult {
  spec: SimulatedStudentSpec;
  answers: Record<string, UserAnswerRecord>;
  desempenho: DesempenhoArea[];
  totalAnswered: number;
  totalCorrect: number;
  rawAccuracyPct: number;
  estRaw: ReturnType<typeof calcularEstimativaResidencia>;
  estLaplace: ReturnType<typeof calcularEstimativaResidencia>;
  gargalo: ReturnType<typeof identificarGargaloPrioritario>;
  psychometricWilson: ReturnType<typeof computePsychometricApproval>;
  paretoCoreAccuracyPct: number;
  paretoCoreAnswered: number;
}

function simulateStudent(spec: SimulatedStudentSpec): SimulatedStudentResult {
  const rng = createSeededRng(spec.seed);
  const byArea = new Map<GrandeAreaId, MedicalQuestion[]>();
  for (const area of GRANDES_AREAS) {
    byArea.set(
      area.id,
      ALL_UEPA_QUESTIONS.filter((q) => q.grandeAreaId === area.id && !q.anulada)
    );
  }

  const answers: Record<string, UserAnswerRecord> = {};
  const now = new Date('2026-11-25T15:00:00-03:00');
  let seq = 0;

  for (const area of GRANDES_AREAS) {
    const pool = byArea.get(area.id) ?? [];
    const targetCount = Math.min(spec.questionsPerArea[area.id], pool.length);
    const targetAcc = spec.accuracyByArea[area.id];
    const targetCorrectCount = Math.round(targetCount * targetAcc);

    for (let i = 0; i < targetCount; i += 1) {
      const q = pool[i];
      const isCorrect = i < targetCorrectCount;
      const wrongAlt =
        q.alternativas.find((a) => a.letter !== q.gabaritoOficial)?.letter ?? 'A';
      const answeredDate = new Date(now.getTime() - seq * 60_000);
      seq += 1;
      answers[q.id] = {
        questionId: q.id,
        selectedLetter: isCorrect ? q.gabaritoOficial : wrongAlt,
        isCorrect,
        answeredAt: answeredDate.toISOString(),
        mode: 'estudo',
        timeSpentSec: Math.round(35 + rng() * 55),
      };
    }
  }

  const desempenho: DesempenhoArea[] = GRANDES_AREAS.map((area) => {
    const areaQs = ALL_UEPA_QUESTIONS.filter((q) => q.grandeAreaId === area.id);
    let total = 0;
    let acertos = 0;
    for (const q of areaQs) {
      const ans = answers[q.id];
      if (ans) {
        total += 1;
        if (ans.isCorrect) acertos += 1;
      }
    }
    return {
      area: area.id as AreaMedica,
      acertos,
      total,
      peso: 0.2,
    };
  });

  const totalAnswered = desempenho.reduce((s, d) => s + d.total, 0);
  const totalCorrect = desempenho.reduce((s, d) => s + d.acertos, 0);
  const rawAccuracyPct =
    totalAnswered > 0 ? Number(((totalCorrect / totalAnswered) * 100).toFixed(2)) : 0;

  const estRaw = calcularEstimativaResidencia(desempenho, UEPA_CONFIG);
  const estLaplace = calcularEstimativaResidencia(desempenho, {
    ...UEPA_CONFIG,
    usarSuavizacaoLaplace: true,
  });
  const gargalo = identificarGargaloPrioritario(desempenho, UEPA_CONFIG, estRaw, 5);

  const psychometricWilson = computePsychometricApproval({
    stage1Model: 'binomial_wilson',
    correctCount: totalCorrect,
    totalCount: totalAnswered,
    observedScore: rawAccuracyPct,
    cohortStdDev: 10,
    reliabilityRxx: 0.85,
    enableOlsCalibration: false,
    calibrationPairs: [],
    cutoffMean: UEPA_CONFIG.notaCorteMedia,
    cutoffStdDev: UEPA_CONFIG.notaCorteDesvioPadrao ?? 2.0,
  });

  // Cross student answers with real UEPA 80/20 Pareto Core topics
  const pareto = calculateParetoByExam('UEPA', ALL_UEPA_QUESTIONS);
  const coreTopicNorms = new Set(
    pareto.items.filter((i) => i.isParetoCore).map((i) => i.normalizedTopic)
  );
  let paretoCoreAnswered = 0;
  let paretoCoreCorrect = 0;
  for (const q of ALL_UEPA_QUESTIONS) {
    const ans = answers[q.id];
    if (!ans) continue;
    const norm = q.tema
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[/\-_,.;:()]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (coreTopicNorms.has(norm)) {
      paretoCoreAnswered += 1;
      if (ans.isCorrect) paretoCoreCorrect += 1;
    }
  }
  const paretoCoreAccuracyPct =
    paretoCoreAnswered > 0
      ? Number(((paretoCoreCorrect / paretoCoreAnswered) * 100).toFixed(1))
      : 0;

  return {
    spec,
    answers,
    desempenho,
    totalAnswered,
    totalCorrect,
    rawAccuracyPct,
    estRaw,
    estLaplace,
    gargalo,
    psychometricWilson,
    paretoCoreAccuracyPct,
    paretoCoreAnswered,
  };
}

const STUDENT_ARCHETYPES: SimulatedStudentSpec[] = [
  {
    id: 'alto-desempenho',
    name: 'Aluno Alto Desempenho (~90%, 350q)',
    seed: 101,
    questionsPerArea: {
      clinica_medica: 75,
      cirurgia_geral: 75,
      ginecologia_obstetricia: 70,
      pediatria: 70,
      medicina_preventiva: 60,
    },
    accuracyByArea: {
      clinica_medica: 0.92,
      cirurgia_geral: 0.89,
      ginecologia_obstetricia: 0.9,
      pediatria: 0.88,
      medicina_preventiva: 0.91,
    },
  },
  {
    id: 'mediano',
    name: 'Aluno Mediano (~66%, 250q)',
    seed: 202,
    questionsPerArea: {
      clinica_medica: 50,
      cirurgia_geral: 50,
      ginecologia_obstetricia: 50,
      pediatria: 50,
      medicina_preventiva: 50,
    },
    accuracyByArea: {
      clinica_medica: 0.68,
      cirurgia_geral: 0.64,
      ginecologia_obstetricia: 0.66,
      pediatria: 0.68,
      medicina_preventiva: 0.64,
    },
  },
  {
    id: 'poucas-questoes',
    name: 'Aluno Poucas Questões (12q desiguais)',
    seed: 303,
    questionsPerArea: {
      clinica_medica: 6,
      cirurgia_geral: 3,
      ginecologia_obstetricia: 2,
      pediatria: 1,
      medicina_preventiva: 0,
    },
    accuracyByArea: {
      clinica_medica: 0.83,
      cirurgia_geral: 0.67,
      ginecologia_obstetricia: 0.5,
      pediatria: 1.0,
      medicina_preventiva: 0,
    },
  },
  {
    id: 'cold-start-perfeito',
    name: 'Aluno Cold-Start 5/5 (100% em 5q)',
    seed: 404,
    questionsPerArea: {
      clinica_medica: 5,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    },
    accuracyByArea: {
      clinica_medica: 1.0,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    },
  },
  {
    id: 'gargalo-severo',
    name: 'Aluno Desbalanceado (90% em 4 áreas, 36% Preventiva)',
    seed: 505,
    questionsPerArea: {
      clinica_medica: 50,
      cirurgia_geral: 50,
      ginecologia_obstetricia: 50,
      pediatria: 50,
      medicina_preventiva: 50,
    },
    accuracyByArea: {
      clinica_medica: 0.9,
      cirurgia_geral: 0.9,
      ginecologia_obstetricia: 0.9,
      pediatria: 0.9,
      medicina_preventiva: 0.36,
    },
  },
  {
    id: 'erra-tudo',
    name: 'Aluno 0% (50q erradas)',
    seed: 606,
    questionsPerArea: {
      clinica_medica: 10,
      cirurgia_geral: 10,
      ginecologia_obstetricia: 10,
      pediatria: 10,
      medicina_preventiva: 10,
    },
    accuracyByArea: {
      clinica_medica: 0,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    },
  },
  {
    id: 'zero-questoes',
    name: 'Aluno Sem Questões (0q)',
    seed: 707,
    questionsPerArea: {
      clinica_medica: 0,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    },
    accuracyByArea: {
      clinica_medica: 0,
      cirurgia_geral: 0,
      ginecologia_obstetricia: 0,
      pediatria: 0,
      medicina_preventiva: 0,
    },
  },
];

describe('Auditoria Automatizada de Cálculos — Pareto Real + Simulação Multi-Perfis', () => {
  it('calcula o Pareto real das 500 questões UEPA 2022–2026 sem NaN e com cobertura consistente', () => {
    expect(ALL_UEPA_QUESTIONS.length).toBe(500);

    const pareto = calculateParetoByExam('UEPA', ALL_UEPA_QUESTIONS);
    expect(pareto.hasEnoughData).toBe(true);
    expect(pareto.usedFallback).toBe(false);
    expect(pareto.totalQuestions).toBe(500);

    const totalCounted = pareto.items.reduce((sum, item) => sum + item.count, 0);
    expect(totalCounted).toBe(500);

    for (let i = 0; i < pareto.items.length; i += 1) {
      const item = pareto.items[i];
      expect(Number.isFinite(item.individualPct)).toBe(true);
      expect(Number.isFinite(item.cumulativePct)).toBe(true);
      if (i > 0) {
        expect(item.cumulativePct).toBeGreaterThanOrEqual(pareto.items[i - 1].cumulativePct);
        expect(item.count).toBeLessThanOrEqual(pareto.items[i - 1].count);
      }
    }
    expect(pareto.items[pareto.items.length - 1].cumulativePct).toBe(100);

    const effectiveTopics = getEffectiveBoardTopics('UEPA');
    const profile = buildBoardParetoProfile(
      'UEPA',
      effectiveTopics,
      BOARD_INCIDENCE_MATRIX.UEPA,
      ALL_UEPA_QUESTIONS
    );
    const mappedCount = Object.values(profile.byTopicId).reduce(
      (s, t) => s + t.count,
      0
    );

    const coreItems = pareto.items.filter((i) => i.isParetoCore);
    console.info(
      `[PARETO REAL UEPA 2022-2026] total=${pareto.totalQuestions}q | temas=${pareto.items.length} | nucleo80%=${coreItems.length} temas | mapeados_matriz=${mappedCount}/500 (${((mappedCount / 500) * 100).toFixed(1)}%)`
    );
    console.info(
      '[TOP 10 TEMAS UEPA]',
      pareto.items
        .slice(0, 10)
        .map((i) => `${i.topic}: ${i.count}q (${i.individualPct}%, acum ${i.cumulativePct}%)`)
        .join(' | ')
    );

    expect(coreItems.length).toBeGreaterThan(0);
    expect(mappedCount).toBeGreaterThan(0);
  });

  it('simula todos os perfis de alunos e valida invariantes numéricas, monotonicidade e chances de aprovação', () => {
    const results = STUDENT_ARCHETYPES.map(simulateStudent);

    for (const r of results) {
      console.info(
        `[SIMULACAO] ${r.spec.name} => Q=${r.totalAnswered}, Acerto=${r.rawAccuracyPct}%, ` +
          `NotaEst(raw)=${r.estRaw.notaEstimada} (status=${r.estRaw.status}, P_aprov=${r.estRaw.probabilidadeAprovacao}%, SE_dom=${r.estRaw.seDominio}), ` +
          `NotaEst(Laplace)=${r.estLaplace.notaEstimada} (P_aprov=${r.estLaplace.probabilidadeAprovacao}%), ` +
          `Psicometrico(Wilson)=${r.psychometricWilson.valid ? `${r.psychometricWilson.approvalProbabilityPct}% (${r.psychometricWilson.statusLabel})` : 'inválido'}, ` +
          `ParetoCore80=${r.paretoCoreAccuracyPct}% (${r.paretoCoreAnswered}q), ` +
          `Gargalo=${r.gargalo ? `${r.gargalo.area} (+${r.gargalo.ganhoProbabilidadePp}pp)` : 'null'}`
      );

      expect(Number.isFinite(r.estRaw.notaEstimada)).toBe(true);
      expect(Number.isFinite(r.estRaw.probabilidadeAprovacao)).toBe(true);
      expect(r.estRaw.notaEstimada).toBeGreaterThanOrEqual(0);
      expect(r.estRaw.notaEstimada).toBeLessThanOrEqual(100);
      expect(r.estRaw.probabilidadeAprovacao).toBeGreaterThanOrEqual(0);
      expect(r.estRaw.probabilidadeAprovacao).toBeLessThanOrEqual(100);
      expect(r.estRaw.icDominio95[0]).toBeLessThanOrEqual(r.estRaw.icDominio95[1]);
      expect(r.estRaw.ipDiaProva95[0]).toBeLessThanOrEqual(r.estRaw.ipDiaProva95[1]);
    }

    const byId = new Map(results.map((r) => [r.spec.id, r]));
    const alto = byId.get('alto-desempenho')!;
    const mediano = byId.get('mediano')!;
    const poucas = byId.get('poucas-questoes')!;
    const cold5 = byId.get('cold-start-perfeito')!;
    const gargaloSev = byId.get('gargalo-severo')!;
    const erraTudo = byId.get('erra-tudo')!;
    const zeroQ = byId.get('zero-questoes')!;

    // 1. Monotonicity across valid profiles
    expect(alto.estRaw.status).toBe('valido');
    expect(mediano.estRaw.status).toBe('valido');
    expect(alto.estRaw.probabilidadeAprovacao).toBeGreaterThan(85);
    expect(mediano.estRaw.probabilidadeAprovacao).toBeLessThan(15);
    expect(alto.estRaw.probabilidadeAprovacao).toBeGreaterThan(
      mediano.estRaw.probabilidadeAprovacao
    );
    expect(mediano.estRaw.probabilidadeAprovacao).toBeGreaterThanOrEqual(
      erraTudo.estRaw.probabilidadeAprovacao
    );

    // 2. Small sample / cold start MUST be flagged as dados_insuficientes
    expect(poucas.estRaw.status).toBe('dados_insuficientes');
    expect(cold5.estRaw.status).toBe('dados_insuficientes');
    expect(zeroQ.estRaw.status).toBe('dados_insuficientes');

    // 3. Bottleneck detector must identify medicina_preventiva on the imbalanced student
    expect(gargaloSev.gargalo?.area).toBe('medicina_preventiva');
    expect(gargaloSev.gargalo!.ganhoProbabilidadePp).toBeGreaterThan(0);

    // 4. Bug A regression guard: Cold-start 5/5 and 1/1 Wilson should NOT claim "Alta probabilidade" (>= 75%)
    expect(cold5.psychometricWilson.approvalProbabilityPct).toBeLessThan(75);
    const cold1 = computePsychometricApproval({
      stage1Model: 'binomial_wilson',
      correctCount: 1,
      totalCount: 1,
      observedScore: 100,
      cohortStdDev: 10,
      reliabilityRxx: 0.85,
      enableOlsCalibration: false,
      calibrationPairs: [],
      cutoffMean: 78,
      cutoffStdDev: 2,
    });
    expect(cold1.approvalProbabilityPct).toBeLessThan(30);

    // 5. Bug B regression guard: Zero-gain bottleneck simulation (ganhoPct = 0) MUST produce 0.0 pp gain
    const zeroGainPoucas = identificarGargaloPrioritario(
      poucas.desempenho,
      UEPA_CONFIG,
      poucas.estRaw,
      0
    );
    expect(zeroGainPoucas?.ganhoProbabilidadePp).toBe(0);

    const smallN100Area: DesempenhoArea[] = [
      { area: 'clinica_medica', acertos: 10, total: 10, peso: 0.2 },
      { area: 'cirurgia_geral', acertos: 4, total: 5, peso: 0.2 },
      { area: 'ginecologia_obstetricia', acertos: 4, total: 5, peso: 0.2 },
      { area: 'pediatria', acertos: 4, total: 5, peso: 0.2 },
      { area: 'medicina_preventiva', acertos: 3, total: 5, peso: 0.2 },
    ];
    const estSmallN100 = calcularEstimativaResidencia(smallN100Area, UEPA_CONFIG);
    const zeroGainSmallN100 = identificarGargaloPrioritario(
      smallN100Area,
      UEPA_CONFIG,
      estSmallN100,
      0
    );
    expect(zeroGainSmallN100?.ganhoProbabilidadePp).toBe(0);

    // 6. Bug C regression guard: Cutoff projection must NOT mix bruta_100 simulados with tri_outra target
    const brutaSimulados: SimuladoRecord[] = [
      {
        id: 'sim-1',
        title: 'Simulado 1',
        date: '2026-10-01',
        validCorrect: 75,
        validTotal: 100,
        accuracyPct: 75,
        estimatedScore: 75,
        scaleType: 'bruta_100',
        source: 'manual',
      },
      {
        id: 'sim-2',
        title: 'Simulado 2',
        date: '2026-10-15',
        validCorrect: 80,
        validTotal: 100,
        accuracyPct: 80,
        estimatedScore: 80,
        scaleType: 'bruta_100',
        source: 'manual',
      },
    ];
    const triProjection = computeCutoffProjection(brutaSimulados, {
      institution: 'ENARE',
      specialty: 'Clínica Médica',
      modality: 'Acesso Direto',
      scaleType: 'tri_outra',
      historicalCutoff: 780,
      safetyMargin: 20,
    });
    expect(triProjection.simuladoCount).toBe(0);
    expect(triProjection.currentScore).toBeNull();
    expect(triProjection.regime).toBe('insufficient_data');

    // 7. Ranking eligibility across all simulated students: zero-questoes excluded, erra-tudo included
    const rankingUsers: LiveRankingUser[] = results.map((r) => {
      const c = countUserAnswersByPeriod(
        r.answers,
        new Date('2026-11-25T15:30:00-03:00')
      );
      return {
        id: r.spec.id,
        realName: r.spec.name,
        pseudonym: r.spec.id,
        usePseudonym: false,
        targetInstitution: 'UEPA',
        avatarInitials: 'ST',
        questionsToday: c.today,
        correctToday: c.correctToday,
        questionsWeek: c.week,
        correctWeek: c.correctWeek,
        questionsMonth: c.month,
        correctMonth: c.correctMonth,
        streak: 0,
        currentArea: 'Clínica Médica',
        isOnline: true,
        lastActiveSecondsAgo: 5,
      };
    });

    const monthly = buildPeriodRanking(rankingUsers, 'monthly');
    expect(monthly.some((u) => u.id === 'zero-questoes')).toBe(false);
    expect(monthly.some((u) => u.id === 'erra-tudo')).toBe(true);
    expect(monthly[0].id).toBe('alto-desempenho');

    // 8. Home intelligence summary check on high student
    const homeAlto = buildHomeIntelligenceSummary({
      areaRows: alto.desempenho.map((d) => ({
        grandeAreaId: d.area,
        label: d.area,
        shortLabel: d.area,
        answered: d.total,
        correct: d.acertos,
      })),
      simulados: brutaSimulados,
      cutoffTarget: {
        institution: 'UEPA',
        specialty: 'Clínica Médica',
        modality: 'Acesso Direto',
        scaleType: 'bruta_100',
        historicalCutoff: 78,
        safetyMargin: 3,
      },
      estimatorConfig: UEPA_CONFIG,
    });
    expect(homeAlto.hasSufficientData).toBe(true);
    expect(homeAlto.approvalProbabilityPct).toBe(alto.estRaw.probabilidadeAprovacao);
  });
});
