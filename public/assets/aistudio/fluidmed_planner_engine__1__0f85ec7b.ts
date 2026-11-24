/**
 * FluidMed SuperPlanner Engine — Módulo TypeScript/JavaScript + Schema SQL
 * Para integração direta em plataformas Web / Node.js de Banco de Questões.
 */

export type RevisionStage =
  | 'NAO_INICIADO'
  | 'AGUARDANDO_1A_REVISAO'
  | 'FAZER_AGORA_1A_REVISAO'
  | 'ATRASADO_1A_REVISAO'
  | 'AGUARDANDO_2A_REVISAO'
  | 'FAZER_AGORA_2A_REVISAO'
  | 'ATRASADO_2A_REVISAO'
  | 'NAO_NECESSARIA_3A_REVISAO'
  | 'AGUARDANDO_3A_REVISAO'
  | 'FAZER_AGORA_3A_REVISAO'
  | 'ATRASADO_3A_REVISAO'
  | 'CONCLUIDO_OK';

export type AlertColor = 'WHITE' | 'YELLOW' | 'RED';

export interface PlannerConfig {
  gapTheoryToRev1Days: number;     // Padrão: 2 dias
  gapBetweenRevsDays: number;      // Padrão ajustado: 15 dias
  doNowWindowDays: number;         // Padrão: 1 dia
  targetAccuracyPct: number;       // Padrão: 80 (%)
  studyStartDate: string;          // YYYY-MM-DD
  timeMachineDays: number;         // Padrão: 0
  maxQuestionsPerSession?: number; // Teto opcional por bateria (ex: 60)
}

export interface TopicStudyRecord {
  topicId: number;
  name: string;
  baselineQuestions: number;
  examWeight: number;
  theoryDate?: string | null; // YYYY-MM-DD
  rev1Date?: string | null;   // YYYY-MM-DD
  rev1Total: number;
  rev1Correct: number;
  rev2Date?: string | null;   // YYYY-MM-DD
  rev2Total: number;
  rev2Correct: number;
  rev3Date?: string | null;   // YYYY-MM-DD
  rev3Total: number;
  rev3Correct: number;
}

export interface TopicEvaluation {
  topicId: number;
  name: string;
  stage: RevisionStage;
  statusLabel: string;
  alertColor: AlertColor;
  nextScheduledDate: string | null;
  suggestedQuestions: number | null;
  questionsInDebt: number;
  accRev1: number | null;
  accRev2: number | null;
  accRev3: number | null;
  globalAccuracy: number | null;
}

export function getIntensityMultiplier(targetAccuracyPct: number): number {
  if (targetAccuracyPct >= 90) return 0.70;
  if (targetAccuracyPct >= 80) return 0.55;
  if (targetAccuracyPct >= 70) return 0.45;
  if (targetAccuracyPct >= 60) return 0.30;
  return 0.15;
}

function diffDays(dateStrA: string, dateStrB: string): number {
  const a = new Date(dateStrA + 'T00:00:00Z');
  const b = new Date(dateStrB + 'T00:00:00Z');
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatBR(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

export function calculateSuggestedQuestions(
  record: TopicStudyRecord,
  config: PlannerConfig
): number | null {
  const totalQ = record.rev1Total + record.rev2Total + record.rev3Total;
  const totalC = record.rev1Correct + record.rev2Correct + record.rev3Correct;
  if (record.rev1Total <= 0 || totalQ <= 0 || totalC <= 0) {
    return null; // "Sem dados"
  }

  const globalAcc = (totalC * 100.0) / totalQ;
  const s17 = getIntensityMultiplier(config.targetAccuracyPct);
  const raw =
    (s17 - (1.0 - config.targetAccuracyPct / globalAcc) * 3.0) *
    record.rev1Total *
    0.7;

  let suggestion = Math.max(0, Math.round(raw * 10) / 10);
  if (config.maxQuestionsPerSession !== undefined) {
    suggestion = Math.min(suggestion, config.maxQuestionsPerSession);
  }
  return suggestion;
}

export function evaluateTopic(
  record: TopicStudyRecord,
  config: PlannerConfig,
  todayStr: string = new Date().toISOString().slice(0, 10)
): TopicEvaluation {
  const totalQ = record.rev1Total + record.rev2Total + record.rev3Total;
  const totalC = record.rev1Correct + record.rev2Correct + record.rev3Correct;
  const globalAccuracy = totalQ > 0 ? (totalC * 100.0) / totalQ : null;

  const accRev1 = record.rev1Total > 0 ? (record.rev1Correct * 100.0) / record.rev1Total : null;
  const accRev2 = record.rev2Total > 0 ? (record.rev2Correct * 100.0) / record.rev2Total : null;
  const accRev3 = record.rev3Total > 0 ? (record.rev3Correct * 100.0) / record.rev3Total : null;

  const suggestion = calculateSuggestedQuestions(record, config);
  const dias1 = config.gapTheoryToRev1Days - config.timeMachineDays;
  const dias2 = config.gapBetweenRevsDays - config.timeMachineDays;
  const amareloWindow = config.doNowWindowDays - 1;

  let stage: RevisionStage = 'NAO_INICIADO';
  let statusLabel = '';
  let alertColor: AlertColor = 'WHITE';
  let nextScheduledDate: string | null = null;
  let questionsInDebt = 0;

  if (record.rev1Date) {
    if (record.rev2Date) {
      if (record.rev3Total > 0) {
        stage = 'CONCLUIDO_OK';
        statusLabel = 'Ok!';
        alertColor = 'WHITE';
      } else {
        const total12 = record.rev1Total + record.rev2Total;
        const correct12 = record.rev1Correct + record.rev2Correct;
        if (total12 > 0) {
          const acc12 = (correct12 * 100.0) / total12;
          if (acc12 >= config.targetAccuracyPct) {
            stage = 'NAO_NECESSARIA_3A_REVISAO';
            statusLabel = 'Não necessária 3ª revisão!';
            alertColor = 'WHITE';
          } else {
            const diff = diffDays(record.rev2Date, todayStr);
            nextScheduledDate = addDays(record.rev2Date, config.gapBetweenRevsDays);
            if (diff < dias2) {
              stage = 'AGUARDANDO_3A_REVISAO';
              statusLabel = `A partir de ${formatBR(nextScheduledDate)}`;
              alertColor = 'WHITE';
            } else if (diff <= dias2 + amareloWindow) {
              stage = 'FAZER_AGORA_3A_REVISAO';
              statusLabel = 'Faça 3ª revisão agora!';
              alertColor = 'YELLOW';
              if (suggestion !== null) questionsInDebt = suggestion;
            } else {
              stage = 'ATRASADO_3A_REVISAO';
              statusLabel = 'Você está atrasado! (3ª revisão)';
              alertColor = 'RED';
              if (suggestion !== null) questionsInDebt = suggestion;
            }
          }
        }
      }
    } else {
      const diff = diffDays(record.rev1Date, todayStr);
      nextScheduledDate = addDays(record.rev1Date, config.gapBetweenRevsDays);
      if (diff < dias2) {
        stage = 'AGUARDANDO_2A_REVISAO';
        statusLabel = `A partir de ${formatBR(nextScheduledDate)}`;
        alertColor = 'WHITE';
      } else if (diff <= dias2 + amareloWindow) {
        stage = 'FAZER_AGORA_2A_REVISAO';
        statusLabel = 'Faça 2ª revisão agora!';
        alertColor = 'YELLOW';
        if (record.rev3Total === 0 && suggestion !== null) questionsInDebt = suggestion;
      } else {
        stage = 'ATRASADO_2A_REVISAO';
        statusLabel = 'Você está atrasado! (2ª revisão)';
        alertColor = 'RED';
        if (record.rev3Total === 0 && suggestion !== null) questionsInDebt = suggestion;
      }
    }
  } else if (record.theoryDate) {
    const diff = diffDays(record.theoryDate, todayStr);
    nextScheduledDate = addDays(record.theoryDate, config.gapTheoryToRev1Days);
    if (diff < dias1) {
      stage = 'AGUARDANDO_1A_REVISAO';
      statusLabel = `A partir de ${formatBR(nextScheduledDate)}`;
      alertColor = 'WHITE';
    } else if (diff <= dias1 + amareloWindow) {
      stage = 'FAZER_AGORA_1A_REVISAO';
      statusLabel = 'Faça 1ª revisão agora!';
      alertColor = 'YELLOW';
      if (record.rev3Total === 0 && suggestion !== null) questionsInDebt = suggestion;
    } else {
      stage = 'ATRASADO_1A_REVISAO';
      statusLabel = 'Você está atrasado! (1ª revisão)';
      alertColor = 'RED';
      if (record.rev3Total === 0 && suggestion !== null) questionsInDebt = suggestion;
    }
  }

  return {
    topicId: record.topicId,
    name: record.name,
    stage,
    statusLabel,
    alertColor,
    nextScheduledDate,
    suggestedQuestions: suggestion,
    questionsInDebt: Math.round(questionsInDebt * 10) / 10,
    accRev1,
    accRev2,
    accRev3,
    globalAccuracy,
  };
}

export function evaluateGlobalStats(
  records: TopicStudyRecord[],
  config: PlannerConfig,
  todayStr: string = new Date().toISOString().slice(0, 10)
) {
  const evaluations = records.map((r) => evaluateTopic(r, config, todayStr));

  const rev1Q = records.reduce((acc, r) => acc + r.rev1Total, 0);
  const rev2Q = records.reduce((acc, r) => acc + r.rev2Total, 0);
  const rev3Q = records.reduce((acc, r) => acc + r.rev3Total, 0);
  const totalQ = rev1Q + rev2Q + rev3Q;

  const rev1C = records.reduce((acc, r) => acc + r.rev1Correct, 0);
  const rev2C = records.reduce((acc, r) => acc + r.rev2Correct, 0);
  const rev3C = records.reduce((acc, r) => acc + r.rev3Correct, 0);
  const totalC = rev1C + rev2C + rev3C;

  const globalAcc = totalQ > 0 ? (totalC * 100.0) / totalQ : 0;
  const totalDebt = Math.round(evaluations.reduce((acc, e) => acc + e.questionsInDebt, 0));

  const effectiveToday = addDays(todayStr, config.timeMachineDays);
  const elapsedDays = Math.max(1, diffDays(config.studyStartDate, effectiveToday) + 1);
  const dailyAvg = Math.round((totalQ / elapsedDays) * 10) / 10;

  const a1 = totalDebt;
  const a2 = totalQ;
  const a3 = Math.max(0, 80.0 - globalAcc);
  const a4 = Math.max(0, 50.0 + (config.targetAccuracyPct - 70.0) * 3.5);
  const a5 = dailyAvg;
  const a6 = a2 > 0 ? (a1 * 10.0) / a2 : 0;

  const rawScore = (100.0 - a1 / 100.0 - a6 - a3 * 2.5 - (a4 - a5) / 2.0) / 10.0;
  const fluidmedScore = Math.min(10, Math.max(0, Math.round(rawScore * 100) / 100));

  return {
    totalQuestions: totalQ,
    totalCorrect: totalC,
    globalAccuracyPct: Math.round(globalAcc * 100) / 100,
    questionsInDebt: totalDebt,
    elapsedDays,
    dailyAverageQuestions: dailyAvg,
    targetDailyQuestions: Math.round(a4 * 10) / 10,
    fluidmedScore0To10: fluidmedScore,
  };
}

export const DEFAULT_TOPICS = [
  {
    "id": 1,
    "name": "ATENÇÃO PRIMÁRIA À SAÚDE E ESF",
    "baseline_questions": 100,
    "exam_weight": 278.8286
  },
  {
    "id": 2,
    "name": "CUIDADOS OPERATÓRIOS",
    "baseline_questions": 550,
    "exam_weight": 543.8952
  },
  {
    "id": 3,
    "name": "PRÉ-NATAL",
    "baseline_questions": 400,
    "exam_weight": 610.9098
  },
  {
    "id": 4,
    "name": "PARASITOSES INTESINAIS",
    "baseline_questions": 400,
    "exam_weight": 1098.7664
  },
  {
    "id": 5,
    "name": "DIABETES E SUAS COMPLICAÇÕES",
    "baseline_questions": 400,
    "exam_weight": 322.2994
  },
  {
    "id": 6,
    "name": "PARTO",
    "baseline_questions": 400,
    "exam_weight": 235.1267
  },
  {
    "id": 7,
    "name": "DESENVOLVIMENTO DO LACTENTE",
    "baseline_questions": 400,
    "exam_weight": 164.9284
  },
  {
    "id": 8,
    "name": "HEPATITES VIRAIS",
    "baseline_questions": 400,
    "exam_weight": 193.3797
  },
  {
    "id": 9,
    "name": "DERRAME PLEURAL E PNEUMOTÓRAX",
    "baseline_questions": 200,
    "exam_weight": 189.8233
  },
  {
    "id": 10,
    "name": "QUEIMADURAS",
    "baseline_questions": 200,
    "exam_weight": 294.8368
  },
  {
    "id": 11,
    "name": "SISTEMA ÚNICO DE SAÚDE",
    "baseline_questions": 200,
    "exam_weight": 243.818
  },
  {
    "id": 12,
    "name": "MÉTODO CLÍNICOS CENTRADO NA PESSOA",
    "baseline_questions": 200,
    "exam_weight": 260.5995
  },
  {
    "id": 13,
    "name": "MORTALIDADE",
    "baseline_questions": 200,
    "exam_weight": 234.7229
  },
  {
    "id": 14,
    "name": "DESENVOLVIMENTO DO ADOLESCENTE E PUBERDADE PRECOCE",
    "baseline_questions": 200,
    "exam_weight": 253.8011
  },
  {
    "id": 15,
    "name": "SÍNDROMES GASTROINTESTINAIS E DESIDRATAÇÃO NA INFÂNCIA",
    "baseline_questions": 200,
    "exam_weight": 139.0643
  },
  {
    "id": 16,
    "name": "HIV",
    "baseline_questions": 150,
    "exam_weight": 507.0099
  },
  {
    "id": 17,
    "name": "DOENÇAS CEREBROVASCULARES",
    "baseline_questions": 150,
    "exam_weight": 465.2675
  },
  {
    "id": 18,
    "name": "DISTÚRBIOS DA HEMOSTASIA",
    "baseline_questions": 150,
    "exam_weight": 143.5458
  },
  {
    "id": 19,
    "name": "EMERGÊNCIA EM PSIQUIATRIA",
    "baseline_questions": 150,
    "exam_weight": 252.1413
  },
  {
    "id": 20,
    "name": "HIPERTENSÃO ARTERIAL SISTÊMICA",
    "baseline_questions": 150,
    "exam_weight": 607.7274
  },
  {
    "id": 21,
    "name": "DIVERTICULITE AGUDA",
    "baseline_questions": 150,
    "exam_weight": 556.708
  },
  {
    "id": 22,
    "name": "EMERGÊNCIAS ONCOLÓGICAS",
    "baseline_questions": 150,
    "exam_weight": 619.3396
  },
  {
    "id": 23,
    "name": "IMUNIZAÇÕES",
    "baseline_questions": 150,
    "exam_weight": 488.241
  },
  {
    "id": 24,
    "name": "PNEUMONIA ADQUIRIDA NA COMUNIDADE",
    "baseline_questions": 150,
    "exam_weight": 185.67
  },
  {
    "id": 25,
    "name": "LÚPUS ERITEMATOSO SISTÊMICO",
    "baseline_questions": 100,
    "exam_weight": 479.4293
  },
  {
    "id": 26,
    "name": "FIBROMIALGIA",
    "baseline_questions": 100,
    "exam_weight": 89.7504
  },
  {
    "id": 27,
    "name": "IMUNIZAÇÕES E TERAPIA PÓS-EXPOSIÇÃO",
    "baseline_questions": 100,
    "exam_weight": 135.567
  },
  {
    "id": 28,
    "name": "DOENÇAS DA TIREOIDE",
    "baseline_questions": 100,
    "exam_weight": 93.5161
  },
  {
    "id": 29,
    "name": "NÓDULOS E CÂNCER DE TIREOIDE",
    "baseline_questions": 100,
    "exam_weight": 131.1736
  },
  {
    "id": 30,
    "name": "LOMBALGIA",
    "baseline_questions": 100,
    "exam_weight": 98.8509
  },
  {
    "id": 31,
    "name": "TRANSTORNOS DO HUMOR",
    "baseline_questions": 100,
    "exam_weight": 49.5824
  },
  {
    "id": 32,
    "name": "DOENÇAS GLOMERULARES",
    "baseline_questions": 100,
    "exam_weight": 216.8444
  },
  {
    "id": 33,
    "name": "DISTÚRBIOS HIDROELETROLÍTICOS",
    "baseline_questions": 100,
    "exam_weight": 213.0787
  },
  {
    "id": 34,
    "name": "NEOPLASIAS PULMONARES",
    "baseline_questions": 100,
    "exam_weight": 85.9846
  },
  {
    "id": 35,
    "name": "HEMOTERAPIA",
    "baseline_questions": 100,
    "exam_weight": 192.868
  },
  {
    "id": 36,
    "name": "DOENÇA DOS NERVOS PERIFÉRICOS E DA JUNÇÃO NEUROMUSCULAR",
    "baseline_questions": 100,
    "exam_weight": 86.4362
  },
  {
    "id": 37,
    "name": "INSTABILIDADE POSTURAL E QUEDA",
    "baseline_questions": 100,
    "exam_weight": 112.9725
  },
  {
    "id": 38,
    "name": "ARRITMIAS",
    "baseline_questions": 100,
    "exam_weight": 51.5279
  },
  {
    "id": 39,
    "name": "SUTURAS E FERIDAS",
    "baseline_questions": 100,
    "exam_weight": 48.0133
  },
  {
    "id": 40,
    "name": "ABDÔME AGUDO VASCULAR",
    "baseline_questions": 100,
    "exam_weight": 41.081
  },
  {
    "id": 41,
    "name": "HÉRNIAS",
    "baseline_questions": 100,
    "exam_weight": 29.8122
  },
  {
    "id": 42,
    "name": "OBSTRUÇÃO ARTERIAL CRÔNICA DE MMII",
    "baseline_questions": 100,
    "exam_weight": 66.2144
  },
  {
    "id": 43,
    "name": "LITÍASE BILIAR E SUAS COMPLICAÇÕES",
    "baseline_questions": 100,
    "exam_weight": 18.569
  },
  {
    "id": 44,
    "name": "CIRROSE HEPÁTICA E SUAS COMPLICAÇÕES",
    "baseline_questions": 100,
    "exam_weight": 82.1428
  },
  {
    "id": 45,
    "name": "CÂNCER DE CÓLON E RETO",
    "baseline_questions": 100,
    "exam_weight": 67.5182
  },
  {
    "id": 46,
    "name": "SÍNDROME DISPÉPTICA",
    "baseline_questions": 100,
    "exam_weight": 110.1482
  },
  {
    "id": 47,
    "name": "INFECÇÃO DO TRATO URINÁRIO",
    "baseline_questions": 100,
    "exam_weight": 91.947
  },
  {
    "id": 48,
    "name": "URGÊNCIAS UROLÓGICAS NÃO TRAUMÁTICAS",
    "baseline_questions": 100,
    "exam_weight": 38.0446
  },
  {
    "id": 49,
    "name": "TRAUMA VASCULAR",
    "baseline_questions": 100,
    "exam_weight": 65.5868
  },
  {
    "id": 50,
    "name": "DM E HAS NA GESTAÇÃO",
    "baseline_questions": 100,
    "exam_weight": 18.5149
  },
  {
    "id": 51,
    "name": "MASTOLOGIA",
    "baseline_questions": 100,
    "exam_weight": 78.6948
  },
  {
    "id": 52,
    "name": "IST'S",
    "baseline_questions": 100,
    "exam_weight": 49.0615
  },
  {
    "id": 53,
    "name": "ANTICONCEPÇÃO",
    "baseline_questions": 100,
    "exam_weight": 62.67
  },
  {
    "id": 54,
    "name": "ÉTICA EM GINECOLOGIA E OBSTETRÍCIA, ABORTAMENTO LEGAL E ABUSO SEXUAL",
    "baseline_questions": 100,
    "exam_weight": 215.7292
  },
  {
    "id": 55,
    "name": "VITALIDADE E SOFRIMENTO FETAL",
    "baseline_questions": 100,
    "exam_weight": 24.1636
  },
  {
    "id": 56,
    "name": "SÍFILIS NA GESTAÇÃO",
    "baseline_questions": 100,
    "exam_weight": 60.8796
  },
  {
    "id": 57,
    "name": "VIGILÂNCIA EM SAÚDE",
    "baseline_questions": 100,
    "exam_weight": 215.903
  },
  {
    "id": 58,
    "name": "ANÁLISE DE MÉTODOS DIAGNÓSTICOS",
    "baseline_questions": 100,
    "exam_weight": 80.6498
  },
  {
    "id": 59,
    "name": "GESTÃO DO SUS",
    "baseline_questions": 100,
    "exam_weight": 85.9846
  },
  {
    "id": 60,
    "name": "ABORDAGEM FAMILIAR",
    "baseline_questions": 100,
    "exam_weight": 49.2686
  },
  {
    "id": 61,
    "name": "DOENÇAS EXANTEMÁTICAS",
    "baseline_questions": 100,
    "exam_weight": 79.7084
  },
  {
    "id": 62,
    "name": "REANIMAÇÃO NEONATAL",
    "baseline_questions": 100,
    "exam_weight": 53.6619
  },
  {
    "id": 63,
    "name": "NEOPLASIAS PEDIÁTRICAS",
    "baseline_questions": 100,
    "exam_weight": 0.0
  },
  {
    "id": 64,
    "name": "DOENÇAS DO PERÍODO NEONATAL",
    "baseline_questions": 100,
    "exam_weight": 0.0
  },
  {
    "id": 65,
    "name": "CONVULSÃO NA CRIANÇA E CONVULSÃO FEBRIL",
    "baseline_questions": 100,
    "exam_weight": 0.0
  },
  {
    "id": 66,
    "name": "INFECÇÃO DO TRATO URINÁRIO",
    "baseline_questions": 100,
    "exam_weight": 0.0
  },
  {
    "id": 67,
    "name": "ICTERÍCIA NEONATAL",
    "baseline_questions": 100,
    "exam_weight": 0.0
  },
  {
    "id": 68,
    "name": "TUBERCULOSE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 69,
    "name": "ARTRITE IDIOPÁTICA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 70,
    "name": "DOENÇAS OBSTRUTIVAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 71,
    "name": "VALVOPATIAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 72,
    "name": "INTOXICAÇÕES EXÓGENAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 73,
    "name": "DOENÇAS DAS ADRENAIS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 74,
    "name": "DOENÇA ARTERIAL CORONARIANA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 75,
    "name": "ARBOVIROSES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 76,
    "name": "PNEUMONIAS ADQUIRIDAS NA COMUNIDADE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 77,
    "name": "TRANSTORNOS DE ANSIEDADE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 78,
    "name": "NEOPLASIAS HEMATOLÓGICAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 79,
    "name": "DISLIPIDEMIAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 80,
    "name": "TRANSTORNOS MENTAIS DECORRENTES DE SUBSTÂNCIAS PSICOATIVAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 81,
    "name": "SEMIOLOGIA NEUROLÓGICA E EXAMES COMPLEMENTARES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 82,
    "name": "DISTÚRBIOS DO EQUILÍBRIO ÁCIDO-BASE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 83,
    "name": "VIAS AÉREAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 84,
    "name": "ANEMIAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 85,
    "name": "MIELOMA MÚLTIPLO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 86,
    "name": "SÍNDROME NEFRÓTICA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 87,
    "name": "HANSENÍASE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 88,
    "name": "ATENDIMENTO INICIAL AO POLITRAUMATIZADO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 89,
    "name": "TUMORES ÓSSEOS E LESÕES PSEUDOTUMORAIS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 90,
    "name": "ABDÔME AGUDO OBSTRUTIVO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 91,
    "name": "DOENÇAS ORIFICIAIS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 92,
    "name": "TUMORES E ABSCESSOS HEPÁTICOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 93,
    "name": "HEMORRAGIA DIGESTIVA BAIXA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 94,
    "name": "HEMORRAGIA DIGESTIVA ALTA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 95,
    "name": "HIPERPLASIA PROSTÁTICA BENIGNA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 96,
    "name": "DIARREIAS AGUDAS E CRÔNICAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 97,
    "name": "AVALIAÇÃO DA FUNÇÃO HEPÁTICA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 98,
    "name": "OCLUSÃO ARTERIAL AGUDA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 99,
    "name": "COLECISTITE E COLANGITE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 100,
    "name": "APENDICITE AGUDA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 101,
    "name": "VIAS AÉREAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 102,
    "name": "TRAUMATISMO GENITOURINÁRIO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 103,
    "name": "TRAUMA ABDOMINAL",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 104,
    "name": "AVALIAÇÃO PRÉ-OPERATÓRIA",
    "baseline_questions": 30,
    "exam_weight": 0.0
  },
  {
    "id": 105,
    "name": "TUMORES MALIGNOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 106,
    "name": "TRAUMA TORÁCICO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 107,
    "name": "PROSTATITES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 108,
    "name": "ABORDAGEM CIRURGICA DA OBESIDADE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 109,
    "name": "TROMBOSE VENOSA PROFUNDA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 110,
    "name": "DOENÇA INFLAMATÓRIA INTESTINAL",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 111,
    "name": "FÓRCIPE E CESARIANA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 112,
    "name": "FISIOLOGIA DA GESTAÇÃO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 113,
    "name": "NEOPLASIAS DA VULVA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 114,
    "name": "SANGRAMENTOS NA GRAVIDEZ",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 115,
    "name": "ISOIMUNIZAÇÃO RH",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 116,
    "name": "PUERPÉRIO PATOLÓGICO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 117,
    "name": "CICLO MENSTRUAL",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 118,
    "name": "CÂNCER DE COLO UTERINO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 119,
    "name": "HPV E NEOPLASIA INTRAEPITELIAL CERVICAL",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 120,
    "name": "NEOPLASIAS DA VULVA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 121,
    "name": "ENDOMETRIOSE",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 122,
    "name": "CLIMATÉRIO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 123,
    "name": "SÍNDROME PRÉ-MENSTRUAL, DISMENORREIA E DOR PÉLVICA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 124,
    "name": "TOXOPLASMOSE E GESTAÇÃO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 125,
    "name": "AMENORREIA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 126,
    "name": "CONCEITOS BÁSICOS E DEFINIÇÕES EM EPIDEMIOLOGIA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 127,
    "name": "ESTUDOS EPIDEMIOLÓGICOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 128,
    "name": "BIOESTATISTICA APLICADA À ANÁLISE DE ESTUDOS EPIDEMIOLÓGICOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 129,
    "name": "PRINCÍPIOS ÉTICOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 130,
    "name": "PRINCÍPIOS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 131,
    "name": "REGISTRO CLÍNICO ORIENTADO POR PROBLEMAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 132,
    "name": "INCIDÊNCIA",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 133,
    "name": "ANEMIAS CARENCIAIS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 134,
    "name": "EXAME INICIAL DO RECÉM-NASCIDO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 135,
    "name": "ALEITAMENTO MATERNO E INTRODUÇÃO DOS ALIMENTOS COMPLEMENTARES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 136,
    "name": "TESTES DE TRIAGEM NEONATAL",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 137,
    "name": "RESILIÊNCIA E MAUS TRATOS CONTRA CRIANÇAS E ADOLESCENTES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 138,
    "name": "INFECÇÃO DAS VIAS AÉREAS SUPERIORES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 139,
    "name": "DESENVOLVIMENTO DO PRÉ-ESCOLAR, ESCOLAR E AUTISMO",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 140,
    "name": "OTITE E OBSTRUÇÃO AGUDA INFLAMATÓRIA FAS VIAS AÉREAS SUPERIORES",
    "baseline_questions": 50,
    "exam_weight": 0.0
  },
  {
    "id": 141,
    "name": "CARDIOPATIAS CONGÊNITAS",
    "baseline_questions": 50,
    "exam_weight": 0.0
  }
];