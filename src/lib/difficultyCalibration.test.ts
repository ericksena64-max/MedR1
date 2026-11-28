import { describe, expect, it } from 'vitest';
import {
  BAYESIAN_PRIOR_WEIGHT_DEFAULT,
  CLINICAL_DIFFICULTY_PRIORS,
  EMPTY_FIRST_ATTEMPT_TRACKER,
  applyGlobalStatsToQuestion,
  computeBayesianAccuracy,
  makeFirstAttemptKey,
  registerBatchFirstAttemptsInTracker,
  registerFirstAttemptInTracker,
} from './difficultyCalibration';
import { computeDifficulty } from './utils';
import type { MedicalQuestion } from '../types/medical';

function makeQuestion(overrides: Partial<MedicalQuestion> = {}): MedicalQuestion {
  return {
    id: 'q-test-bayes-01',
    code: 'TEST-01',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'IAM com supra de ST',
    banca: 'UEPA',
    instituicao: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2026,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado: 'Paciente com dor torácica típica.',
    alternativas: [
      { letter: 'A', text: 'A', explanation: '', communityPct: 0 },
      { letter: 'B', text: 'B', explanation: '', communityPct: 0 },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 10,
    taxaAcertoGlobal: CLINICAL_DIFFICULTY_PRIORS.Médio,
    comentarioGeral: '',
    perolaClinica: '',
    referencias: [],
    ...overrides,
  };
}

describe('difficultyCalibration — Suavização Bayesiana (TCT)', () => {
  it('mantém exatamente o prior clínico quando há 0 tentativas reais', () => {
    const easy = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Fácil,
      realAttempts: 0,
      realHits: 0,
    });
    const medium = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Médio,
      realAttempts: 0,
      realHits: 0,
    });
    const hard = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Difícil,
      realAttempts: 0,
      realHits: 0,
    });

    expect(easy).toBe(76.5);
    expect(computeDifficulty(easy)).toBe('Fácil');

    expect(medium).toBe(58.4);
    expect(computeDifficulty(medium)).toBe('Médio');

    expect(hard).toBe(36.8);
    expect(computeDifficulty(hard)).toBe('Difícil');
    expect(BAYESIAN_PRIOR_WEIGHT_DEFAULT).toBe(25);
  });

  it('resiste a ruído com poucas tentativas reais', () => {
    // 1 erro em questão Fácil (76.5%) não a transforma em Média nem Difícil
    const easyAfter1Error = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Fácil,
      realAttempts: 1,
      realHits: 0,
    });
    expect(easyAfter1Error).toBe(73.6);
    expect(computeDifficulty(easyAfter1Error)).toBe('Fácil');

    // 1 acerto em questão Fácil sobe discretamente
    const easyAfter1Hit = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Fácil,
      realAttempts: 1,
      realHits: 1,
    });
    expect(easyAfter1Hit).toBe(77.4);
    expect(computeDifficulty(easyAfter1Hit)).toBe('Fácil');

    // 1 acerto em questão Difícil (36.8%) permanece Difícil
    const hardAfter1Hit = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Difícil,
      realAttempts: 1,
      realHits: 1,
    });
    expect(hardAfter1Hit).toBe(39.2);
    expect(computeDifficulty(hardAfter1Hit)).toBe('Difícil');
  });

  it('converge empiricamente após 50+ tentativas reais', () => {
    // Questão Média (58.4%) com 50 tentativas e apenas 10 acertos (20%) -> migra para Difícil
    const mediumToHard = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Médio,
      realAttempts: 50,
      realHits: 10,
    });
    expect(mediumToHard).toBe(32.8);
    expect(computeDifficulty(mediumToHard)).toBe('Difícil');

    // Questão Média (58.4%) com 80 tentativas e 68 acertos (85%) -> migra para Fácil
    const mediumToEasy = computeBayesianAccuracy({
      baseAccuracy: CLINICAL_DIFFICULTY_PRIORS.Médio,
      realAttempts: 80,
      realHits: 68,
    });
    expect(mediumToEasy).toBe(78.7);
    expect(computeDifficulty(mediumToEasy)).toBe('Fácil');
  });

  it('computa apenas a 1ª tentativa do aluno e ignora 2ª tentativa / revisões', () => {
    const q = makeQuestion({
      id: 'q-uepa-2026-bayes',
      taxaAcertoGlobal: CLINICAL_DIFFICULTY_PRIORS.Fácil,
    });

    // 1ª tentativa do aluno A (erro)
    const afterStudentAFirst = registerFirstAttemptInTracker(
      EMPTY_FIRST_ATTEMPT_TRACKER,
      {
        studentId: 'student-a',
        question: q,
        isCorrect: false,
      }
    );

    const statsA1 = afterStudentAFirst.statsByQuestionId[q.id];
    expect(statsA1).toEqual({
      taxaAcertoBase: 76.5,
      tentativasGlobais: 1,
      acertosGlobais: 0,
      taxaAcertoGlobal: 73.6,
    });

    // 2ª tentativa do mesmo aluno A (agora acertando na revisão) -> ignorada no global
    const afterStudentASecond = registerFirstAttemptInTracker(
      afterStudentAFirst,
      {
        studentId: 'student-a',
        question: applyGlobalStatsToQuestion(q, statsA1),
        isCorrect: true,
      }
    );
    expect(afterStudentASecond).toBe(afterStudentAFirst);
    expect(afterStudentASecond.statsByQuestionId[q.id].tentativasGlobais).toBe(1);
    expect(afterStudentASecond.statsByQuestionId[q.id].acertosGlobais).toBe(0);

    // Aluno C já tinha respondido no histórico anterior (alreadyAnsweredByStudent: true) -> não infla contadores
    const afterPreAnsweredStudent = registerFirstAttemptInTracker(
      afterStudentASecond,
      {
        studentId: 'student-c',
        question: applyGlobalStatsToQuestion(q, statsA1),
        isCorrect: true,
        alreadyAnsweredByStudent: true,
      }
    );
    expect(
      afterPreAnsweredStudent.countedFirstAttempts[
        makeFirstAttemptKey('student-c', q.id)
      ]
    ).toBe(true);
    expect(afterPreAnsweredStudent.statsByQuestionId[q.id].tentativasGlobais).toBe(1);

    // 1ª tentativa de um novo aluno B (acerto) -> incrementa para 2 tentativas, 1 acerto
    const afterStudentB = registerFirstAttemptInTracker(
      afterPreAnsweredStudent,
      {
        studentId: 'student-b',
        question: applyGlobalStatsToQuestion(q, statsA1),
        isCorrect: true,
      }
    );
    const statsAfterB = afterStudentB.statsByQuestionId[q.id];
    expect(statsAfterB).toEqual({
      taxaAcertoBase: 76.5,
      tentativasGlobais: 2,
      acertosGlobais: 1,
      // ((76.5 * 25) + (1 * 100)) / (25 + 2) = 2012.5 / 27 = 74.537... -> 74.5
      taxaAcertoGlobal: 74.5,
    });

    const projected = applyGlobalStatsToQuestion(q, statsAfterB);
    expect(projected.taxaAcertoBase).toBe(76.5);
    expect(projected.tentativasGlobais).toBe(2);
    expect(projected.acertosGlobais).toBe(1);
    expect(projected.taxaAcertoGlobal).toBe(74.5);
    expect(projected.totalRespostasComunidade).toBe(12);
  });

  it('deduplica tentativas repetidas em lote via registerBatchFirstAttemptsInTracker', () => {
    const q1 = makeQuestion({ id: 'q-batch-1', taxaAcertoGlobal: 58.4 });
    const q2 = makeQuestion({ id: 'q-batch-2', taxaAcertoGlobal: 36.8 });

    const next = registerBatchFirstAttemptsInTracker(EMPTY_FIRST_ATTEMPT_TRACKER, [
      { studentId: 'student-1', question: q1, isCorrect: true },
      { studentId: 'student-1', question: q1, isCorrect: false },
      { studentId: 'student-1', question: q2, isCorrect: false },
    ]);

    expect(next.statsByQuestionId['q-batch-1'].tentativasGlobais).toBe(1);
    expect(next.statsByQuestionId['q-batch-1'].acertosGlobais).toBe(1);
    expect(next.statsByQuestionId['q-batch-2'].tentativasGlobais).toBe(1);
    expect(next.statsByQuestionId['q-batch-2'].acertosGlobais).toBe(0);
  });

  it('protege questões anuladas (taxa 0 e dificuldade Anulada)', () => {
    expect(
      computeBayesianAccuracy({
        baseAccuracy: 76.5,
        realAttempts: 100,
        realHits: 90,
        anulada: true,
      })
    ).toBe(0);

    expect(computeDifficulty(0, true)).toBe('Anulada');
    expect(computeDifficulty(82.0, true)).toBe('Anulada');

    const annulledQ = makeQuestion({
      id: 'q-anulada-01',
      anulada: true,
      taxaAcertoGlobal: 0,
    });

    const nextTracker = registerFirstAttemptInTracker(
      EMPTY_FIRST_ATTEMPT_TRACKER,
      {
        studentId: 'student-x',
        question: annulledQ,
        isCorrect: true,
      }
    );

    expect(nextTracker.statsByQuestionId[annulledQ.id]).toEqual({
      taxaAcertoBase: 0,
      tentativasGlobais: 0,
      acertosGlobais: 0,
      taxaAcertoGlobal: 0,
    });
    expect(
      nextTracker.countedFirstAttempts[makeFirstAttemptKey('student-x', annulledQ.id)]
    ).toBeUndefined();

    const projected = applyGlobalStatsToQuestion(
      annulledQ,
      nextTracker.statsByQuestionId[annulledQ.id]
    );
    expect(projected.taxaAcertoGlobal).toBe(0);
    expect(computeDifficulty(projected.taxaAcertoGlobal, projected.anulada)).toBe('Anulada');
  });
});
