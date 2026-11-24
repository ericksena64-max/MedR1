import { describe, expect, it } from 'vitest';
import {
  buildWeeklySchedule,
  calculateDailyQuestionQuota,
  computeExamPriorityWeights,
  loadWeeklyScheduleConfig,
  type WeeklyScheduleConfig,
  type WeeklyTopicInput,
} from './weeklySchedule';
import type { Flashcard, GrandeAreaId, MedicalQuestion } from '../types/medical';

function makeBankQuestion(
  id: string,
  instituicao: string,
  grandeAreaId: GrandeAreaId,
  tema: string,
  subtema?: string
): MedicalQuestion {
  return {
    id,
    instituicao,
    banca: instituicao,
    grandeAreaId,
    tema,
    subtema: subtema ?? '',
  } as MedicalQuestion;
}

function makeFlashcard(id: string, dueAt: string): Flashcard {
  return {
    id,
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    front: 'Pergunta',
    backPearl: 'Resposta',
    createdAt: '2026-11-01T12:00:00.000Z',
    source: 'perola',
    dueAt,
    stability: 1,
    difficulty: 5,
    elapsed_days: 0,
    scheduled_days: 1,
    learning_steps: 0,
    reps: 1,
    lapses: 0,
    state: 'Review',
  };
}

describe('weeklySchedule — motor da grade semanal calibrada', () => {
  it('calcula 80 questões em 4h sem flashcards no ritmo Estudo + Comentário (3,0 min/q)', () => {
    const quota = calculateDailyQuestionQuota(4, 0, 'estudo');
    expect(quota.flashcardMinutes).toBe(0);
    expect(quota.netQuestionMinutes).toBe(240);
    expect(quota.estimatedQuestions).toBe(80);
  });

  it('calcula 100 questões em 220 min úteis e 109 em 4h no Ritmo de Prova (2,2 min/q)', () => {
    const examQuota = calculateDailyQuestionQuota(220 / 60, 0, 'prova');
    expect(examQuota.estimatedQuestions).toBe(100);

    const fourHourQuota = calculateDailyQuestionQuota(4, 0, 'prova');
    expect(fourHourQuota.estimatedQuestions).toBe(109);
  });

  it('desconta 30s por flashcard antes de calcular a meta líquida de questões', () => {
    // 2h = 120 min; 20 flashcards = 10 min -> 110 min úteis
    const estudo = calculateDailyQuestionQuota(2, 20, 'estudo');
    expect(estudo.flashcardMinutes).toBe(10);
    expect(estudo.netQuestionMinutes).toBe(110);
    expect(estudo.estimatedQuestions).toBe(36); // floor(110 / 3.0)

    const prova = calculateDailyQuestionQuota(2, 20, 'prova');
    expect(prova.netQuestionMinutes).toBe(110);
    expect(prova.estimatedQuestions).toBe(50); // floor(110 / 2.2)
  });

  it('não produz valores negativos quando flashcards consomem todo o tempo do dia', () => {
    const saturated = calculateDailyQuestionQuota(1, 200, 'estudo');
    expect(saturated.netQuestionMinutes).toBe(0);
    expect(saturated.estimatedQuestions).toBe(0);
  });

  it('zera carga horária e questões em dias inativos (descanso) e soma apenas dias ativos', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0); // Segunda 23/11/2026
    const config: WeeklyScheduleConfig = {
      activeDays: [1, 3, 5], // Seg, Qua, Sex
      hoursPerDay: 4,
      paceMode: 'estudo',
    };

    const cards = [
      makeFlashcard('c1', new Date(2026, 10, 23, 8, 0, 0).toISOString()), // hoje (seg)
      makeFlashcard('c2', new Date(2026, 10, 20, 8, 0, 0).toISOString()), // atrasado -> entra hoje
      makeFlashcard('c3', new Date(2026, 10, 25, 14, 0, 0).toISOString()), // quarta
    ];

    const result = buildWeeklySchedule({
      config,
      flashcards: cards,
      weekOffset: 0,
      referenceDate: refDate,
    });

    expect(result.days).toHaveLength(7);
    expect(result.days[0].isActive).toBe(false); // Dom
    expect(result.days[0].hours).toBe(0);
    expect(result.days[0].estimatedQuestions).toBe(0);

    expect(result.days[1].isToday).toBe(true); // Seg
    expect(result.days[1].flashcardsCount).toBe(2); // 1 hoje + 1 atrasado
    expect(result.days[3].flashcardsCount).toBe(1); // Qua
    expect(result.totalWeeklyHours).toBe(12);
  });

  it('navega entre semanas (-1, 0, +1) e faz fallback seguro em loadWeeklyScheduleConfig', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const fallback = loadWeeklyScheduleConfig('{json-invalido');
    expect(fallback.hoursPerDay).toBe(3);
    expect(fallback.paceMode).toBe('estudo');
    expect(fallback.activeDays).toEqual([1, 2, 3, 4, 5, 6]);

    const prevWeek = buildWeeklySchedule({
      config: fallback,
      flashcards: [],
      weekOffset: -1,
      referenceDate: refDate,
    });
    const nextWeek = buildWeeklySchedule({
      config: fallback,
      flashcards: [],
      weekOffset: 1,
      referenceDate: refDate,
    });

    expect(prevWeek.days).toHaveLength(7);
    expect(nextWeek.days).toHaveLength(7);
    expect(prevWeek.days[0].dateKey).not.toBe(nextWeek.days[0].dateKey);
  });

  it('gera rótulos relativos corretos (Ontem, Hoje, Amanhã, Em X dias)', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0); // Segunda 23/11/2026 (Dom = 22 = Ontem)
    const config = loadWeeklyScheduleConfig(null);
    const result = buildWeeklySchedule({
      config,
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
    });

    expect(result.days[0].relativeLabel).toBe('Ontem');
    expect(result.days[1].relativeLabel).toBe('Hoje');
    expect(result.days[2].relativeLabel).toBe('Amanhã');
    expect(result.days[3].relativeLabel).toBe('Em 2 dias');
  });

  it('distribui 1–3 blocos de assunto apenas em dias ativos, somando exatamente a meta diária', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const config: WeeklyScheduleConfig = {
      activeDays: [1, 2, 4],
      hoursPerDay: 3,
      paceMode: 'estudo',
      targetExam: 'UEPA',
    };
    const topicRows: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Doenças Endêmicas', shortArea: 'Clínica', studentPct: 54, answered: 20 },
      { grandeAreaId: 'ginecologia_obstetricia', label: 'Obstetrícia de Alto Risco', shortArea: 'GO', studentPct: 60, answered: 18 },
      { grandeAreaId: 'cirurgia_geral', label: 'Trauma e ATLS', shortArea: 'Cirurgia', studentPct: 68, answered: 15 },
      { grandeAreaId: 'pediatria', label: 'Neonatologia', shortArea: 'Pediatria', studentPct: 72, answered: 14 },
      { grandeAreaId: 'medicina_preventiva', label: 'Epidemiologia e SUS', shortArea: 'Preventiva', studentPct: 75, answered: 12 },
    ];

    const result = buildWeeklySchedule({
      config,
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows,
    });

    // Descanso: 0 blocos
    expect(result.days[0].topicBlocks).toEqual([]);
    expect(result.days[3].topicBlocks).toEqual([]);

    // Dias ativos: 1 a 3 blocos cuja soma de questões = estimatedQuestions do dia
    for (const idx of [1, 2, 4]) {
      const day = result.days[idx];
      expect(day.topicBlocks.length).toBeGreaterThanOrEqual(1);
      expect(day.topicBlocks.length).toBeLessThanOrEqual(3);
      const sumQ = day.topicBlocks.reduce((acc, b) => acc + b.estimatedQuestions, 0);
      expect(sumQ).toBe(day.estimatedQuestions);
    }
  });

  it('altera a priorização de assuntos conforme a prova alvo (UEPA vs USP-SP)', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const balancedTopics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Doenças Endêmicas', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'clinica_medica', label: 'Cardiologia', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'clinica_medica', label: 'Nefrologia', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'medicina_preventiva', label: 'Epidemiologia', shortArea: 'Preventiva', studentPct: 65, answered: 20 },
    ];

    const uepa = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExam: 'UEPA' },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: balancedTopics,
    });
    const usp = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExam: 'USP-SP' },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: balancedTopics,
    });

    expect(uepa.days[1].topicBlocks[0].topic).toBe('Doenças Endêmicas');
    expect(usp.days[1].topicBlocks[0].topic).toBe('Cardiologia');
  });

  it('deriva status nao_iniciado, em_progresso e finalizado com base nas respostas do dia', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Cardiologia', shortArea: 'Clínica', studentPct: 50, answered: 10 },
      { grandeAreaId: 'cirurgia_geral', label: 'Trauma', shortArea: 'Cirurgia', studentPct: 55, answered: 10 },
    ];

    const result = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 3, paceMode: 'estudo', targetExam: 'USP-SP' },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
      answeredTodayByTopic: {
        Cardiologia: 50, // >= meta do bloco -> finalizado
        Trauma: 5, // > 0 e < meta -> em_progresso
      },
    });

    const todayBlocks = result.days[1].topicBlocks;
    const cardio = todayBlocks.find((b) => b.topic === 'Cardiologia');
    const trauma = todayBlocks.find((b) => b.topic === 'Trauma');
    expect(cardio?.status).toBe('finalizado');
    expect(trauma?.status).toBe('em_progresso');
  });

  it('formata weekRangeFullLabel em português (inclusive virada de ano) e dayDateCompact como DD/MM', () => {
    const config = loadWeeklyScheduleConfig(null);
    const sameYear = buildWeeklySchedule({
      config,
      flashcards: [],
      weekOffset: 0,
      referenceDate: new Date(2026, 10, 23, 12, 0, 0), // Seg, 23/11/2026
    });
    expect(sameYear.weekRangeFullLabel).toBe('22 de Novembro - 28 de Novembro de 2026');
    expect(sameYear.days[1].dayDateCompact).toBe('23/11');

    const crossYear = buildWeeklySchedule({
      config,
      flashcards: [],
      weekOffset: 0,
      referenceDate: new Date(2026, 11, 30, 12, 0, 0), // Qua, 30/12/2026
    });
    expect(crossYear.weekRangeFullLabel).toBe('27 de Dezembro de 2026 - 2 de Janeiro de 2027');
    expect(crossYear.days[0].dayDateCompact).toBe('27/12');
    expect(crossYear.days[6].dayDateCompact).toBe('02/01');
  });

  it('diferencia banca única (UEPA vs UFRGS) e gera reasonTag explicativa', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Doenças Endêmicas', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'clinica_medica', label: 'Cardiologia', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'medicina_preventiva', label: 'Epidemiologia Clínica e MBE', shortArea: 'Preventiva', studentPct: 65, answered: 20 },
    ];

    const uepa = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UEPA'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
    });
    const ufrgs = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UFRGS'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
    });

    expect(uepa.targetExamsLabel).toBe('UEPA');
    expect(uepa.days[1].topicBlocks[0].topic).toBe('Doenças Endêmicas');
    expect(uepa.days[1].topicBlocks[0].reasonTag).toContain('UEPA');

    expect(ufrgs.targetExamsLabel).toBe('UFRGS');
    expect(ufrgs.days[1].topicBlocks[0].topic).toBe('Cardiologia');
    expect(ufrgs.days[1].topicBlocks[0].reasonTag).toContain('UFRGS');
  });

  it('mescla 3 bancas (UEPA + ENARE + UFRGS) com pesos decrescentes normalizados e bônus de interseção no Pareto', () => {
    const weights = computeExamPriorityWeights(['UEPA', 'ENARE', 'UFRGS']);
    const sum = weights.UEPA + weights.ENARE + weights.UFRGS;
    expect(sum).toBeCloseTo(1, 5);
    expect(weights.UEPA).toBeGreaterThan(weights.ENARE);
    expect(weights.ENARE).toBeGreaterThan(weights.UFRGS);

    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const topics: WeeklyTopicInput[] = [
      // Cai no Pareto de UEPA + ENARE + UFRGS -> interseção tripla!
      { grandeAreaId: 'ginecologia_obstetricia', label: 'Obstetrícia de Alto Risco', shortArea: 'GO', studentPct: 65, answered: 20 },
      // Cai apenas no Pareto da UEPA
      { grandeAreaId: 'clinica_medica', label: 'Doenças Endêmicas', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      // Cai apenas no Pareto da UFRGS
      { grandeAreaId: 'clinica_medica', label: 'Pneumologia e Terapia Intensiva', shortArea: 'Clínica', studentPct: 65, answered: 20 },
    ];

    const merged = buildWeeklySchedule({
      config: {
        activeDays: [1],
        hoursPerDay: 2,
        paceMode: 'estudo',
        targetExams: ['UEPA', 'ENARE', 'UFRGS'],
      },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
    });

    expect(merged.targetExams).toEqual(['UEPA', 'ENARE', 'UFRGS']);
    expect(merged.targetExamsLabel).toBe('UEPA + ENARE + UFRGS');
    expect(merged.days[1].topicBlocks[0].topic).toBe('Obstetrícia de Alto Risco');
    expect(merged.days[1].topicBlocks[0].reasonTag).toContain('+');
  });

  it('não repete a mesma grande área no mesmo dia ativo quando há áreas distintas disponíveis', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Cardiologia', shortArea: 'Clínica', studentPct: 45, answered: 25 },
      { grandeAreaId: 'clinica_medica', label: 'Nefrologia', shortArea: 'Clínica', studentPct: 48, answered: 25 },
      { grandeAreaId: 'clinica_medica', label: 'Pneumologia e Terapia Intensiva', shortArea: 'Clínica', studentPct: 50, answered: 25 },
      { grandeAreaId: 'cirurgia_geral', label: 'Trauma e ATLS', shortArea: 'Cirurgia', studentPct: 55, answered: 20 },
      { grandeAreaId: 'ginecologia_obstetricia', label: 'Obstetrícia de Alto Risco', shortArea: 'GO', studentPct: 58, answered: 20 },
      { grandeAreaId: 'pediatria', label: 'Neonatologia', shortArea: 'Pediatria', studentPct: 60, answered: 20 },
    ];

    const result = buildWeeklySchedule({
      config: {
        activeDays: [1, 2],
        hoursPerDay: 6, // 3 blocos por dia
        paceMode: 'estudo',
        targetExams: ['USP-SP', 'UFRGS'],
      },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
    });

    for (const idx of [1, 2]) {
      const areas = result.days[idx].topicBlocks.map((b) => b.grandeAreaId);
      expect(areas).toHaveLength(3);
      expect(new Set(areas).size).toBe(3);
    }
  });

  it('mantém retrocompatibilidade em loadWeeklyScheduleConfig para targetExam legado e valida targetExams', () => {
    const legacy = loadWeeklyScheduleConfig(
      JSON.stringify({ activeDays: [1, 2], hoursPerDay: 4, paceMode: 'prova', targetExam: 'USP-SP' })
    );
    expect(legacy.targetExams).toEqual(['USP-SP']);
    expect(legacy.targetExam).toBe('USP-SP');

    const multi = loadWeeklyScheduleConfig(
      JSON.stringify({
        activeDays: [1, 3, 5],
        hoursPerDay: 3,
        paceMode: 'estudo',
        targetExams: ['UFRGS', 'ENARE', 'UFRGS', 'INVALIDA'],
      })
    );
    expect(multi.targetExams).toEqual(['UFRGS', 'ENARE']);
    expect(multi.targetExam).toBe('UFRGS');
  });

  it('calcula incidência diretamente das questões reais do banco para a banca selecionada', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    // Na matriz estática da UEPA, Doenças Endêmicas é #1; no banco simulado, Nefrologia domina!
    const bank: MedicalQuestion[] = [
      makeBankQuestion('q1', 'UEPA', 'clinica_medica', 'Nefrologia'),
      makeBankQuestion('q2', 'UEPA', 'clinica_medica', 'Nefrologia'),
      makeBankQuestion('q3', 'UEPA', 'clinica_medica', 'Nefrologia'),
      makeBankQuestion('q4', 'UEPA', 'clinica_medica', 'Nefrologia'),
      makeBankQuestion('q5', 'UEPA', 'clinica_medica', 'Doenças Endêmicas'),
    ];
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Doenças Endêmicas', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'clinica_medica', label: 'Nefrologia', shortArea: 'Clínica', studentPct: 65, answered: 20 },
    ];

    const result = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UEPA'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
      questions: bank,
    });

    expect(result.incidenceSource).toBe('bank');
    expect(result.bankQuestionsMatched).toBe(5);
    expect(result.days[1].topicBlocks[0].topic).toBe('Nefrologia');
  });

  it('mescla múltiplas provas alvo (UEPA + UFRGS/HCPA) usando exclusivamente contagens do banco', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const bank: MedicalQuestion[] = [
      // UEPA: Hematologia domina
      makeBankQuestion('u1', 'UEPA', 'clinica_medica', 'Hematologia'),
      makeBankQuestion('u2', 'UEPA', 'clinica_medica', 'Hematologia'),
      makeBankQuestion('u3', 'UEPA', 'cirurgia_geral', 'Trauma'),
      // HCPA (alias de UFRGS): Hematologia também domina
      makeBankQuestion('r1', 'HCPA', 'clinica_medica', 'Hematologia'),
      makeBankQuestion('r2', 'HCPA', 'clinica_medica', 'Hematologia'),
      makeBankQuestion('r3', 'UFRGS', 'pediatria', 'Neonatologia'),
    ];
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Hematologia', shortArea: 'Clínica', studentPct: 65, answered: 20 },
      { grandeAreaId: 'cirurgia_geral', label: 'Trauma', shortArea: 'Cirurgia', studentPct: 65, answered: 20 },
      { grandeAreaId: 'pediatria', label: 'Neonatologia', shortArea: 'Pediatria', studentPct: 65, answered: 20 },
    ];

    const result = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UEPA', 'UFRGS'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
      questions: bank,
    });

    expect(result.incidenceSource).toBe('bank');
    expect(result.bankQuestionsMatched).toBe(6);
    expect(result.days[1].topicBlocks[0].topic).toBe('Hematologia');
    expect(result.days[1].topicBlocks[0].reasonTag).toContain('UEPA + UFRGS');
  });

  it('evita repetir o mesmo assunto em dias ativos consecutivos', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Cardiologia', shortArea: 'Clínica', studentPct: 50, answered: 20 },
      { grandeAreaId: 'cirurgia_geral', label: 'Trauma e ATLS', shortArea: 'Cirurgia', studentPct: 55, answered: 20 },
      { grandeAreaId: 'pediatria', label: 'Neonatologia', shortArea: 'Pediatria', studentPct: 60, answered: 20 },
    ];

    const result = buildWeeklySchedule({
      config: {
        activeDays: [1, 2, 3, 4], // Seg, Ter, Qua, Qui
        hoursPerDay: 2, // 1 bloco por dia -> pool de 3 temas deve rotacionar sem repetir em dias consecutivos
        paceMode: 'estudo',
        targetExams: ['UEPA'],
      },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
    });

    const activeDays = [1, 2, 3, 4].map((idx) => result.days[idx]);
    for (let i = 1; i < activeDays.length; i++) {
      const prevTopics = new Set(activeDays[i - 1].topicBlocks.map((b) => b.topic));
      for (const block of activeDays[i].topicBlocks) {
        expect(prevTopics.has(block.topic)).toBe(false);
      }
    }
  });

  it('usa fallback seguro quando o banco está vazio e modo mixed quando apenas parte das bancas tem questões', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const emptyBankResult = buildWeeklySchedule({
      config: { activeDays: [1, 2], hoursPerDay: 3, paceMode: 'estudo', targetExams: ['UEPA'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      questions: [],
    });
    expect(emptyBankResult.incidenceSource).toBe('fallback');
    expect(emptyBankResult.bankQuestionsMatched).toBe(0);
    expect(emptyBankResult.days[1].topicBlocks.length).toBeGreaterThan(0);

    const partialBank: MedicalQuestion[] = [
      makeBankQuestion('p1', 'UEPA', 'clinica_medica', 'Infectologia'),
      makeBankQuestion('p2', 'UEPA', 'clinica_medica', 'Infectologia'),
      makeBankQuestion('p3', 'UEPA', 'cirurgia_geral', 'Trauma'),
    ];
    const mixedResult = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UEPA', 'UFRGS'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      questions: partialBank,
    });
    expect(mixedResult.incidenceSource).toBe('mixed');
    expect(mixedResult.bankQuestionsMatched).toBe(3);
  });

  it('preenche subtema real a partir das questões do banco em cada bloco', () => {
    const refDate = new Date(2026, 10, 23, 10, 0, 0);
    const bank: MedicalQuestion[] = [
      makeBankQuestion('s1', 'UEPA', 'clinica_medica', 'Infectologia', 'Dengue: Classificação de Risco'),
      makeBankQuestion('s2', 'UEPA', 'clinica_medica', 'Infectologia', 'Dengue: Classificação de Risco'),
      makeBankQuestion('s3', 'UEPA', 'clinica_medica', 'Infectologia', 'Malária por P. vivax'),
    ];
    const topics: WeeklyTopicInput[] = [
      { grandeAreaId: 'clinica_medica', label: 'Infectologia', shortArea: 'Clínica', studentPct: 60, answered: 10 },
    ];

    const result = buildWeeklySchedule({
      config: { activeDays: [1], hoursPerDay: 2, paceMode: 'estudo', targetExams: ['UEPA'] },
      flashcards: [],
      weekOffset: 0,
      referenceDate: refDate,
      topicRows: topics,
      questions: bank,
    });

    expect(result.days[1].topicBlocks[0].topic).toBe('Infectologia');
    expect(result.days[1].topicBlocks[0].subtema).toBe('Dengue: Classificação de Risco');
  });
});
