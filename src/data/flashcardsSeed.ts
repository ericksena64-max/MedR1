import type { Flashcard } from '../types/medical';
import {
  IMPORTED_ANKI_DECK_VERSION,
  buildImportedAnkiFlashcards,
} from './importedAnkiFlashcards';

export { IMPORTED_ANKI_DECK_VERSION, buildImportedAnkiFlashcards };

const now = Date.now();
const DAY_MS = 24 * 60 * 60 * 1000;

const BASE_SEED_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-q-usp-2025-cardio-01',
    questionId: 'q-usp-2025-cardio-01',
    questionCode: 'Q-USP25-0142',
    institutionLabel: 'USP-SP 2025',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Síndrome Coronariana Aguda com Supra de ST',
    front:
      'No IAMCSST em unidade sem hemodinâmica, qual é o tempo limite de transferência que define entre angioplastia primária e fibrinólise imediata, e qual inibidor P2Y12 deve ser associado ao trombolítico?',
    backPearl:
      'Regra de ouro no IAMCSST sem hemodinâmica: transferência > 120 min = Fibrinólise imediata (porta-agulha ≤ 30 min) + AAS + Clopidogrel (300 mg se ≤ 75 anos; sem ataque se > 75 anos) + Enoxaparina + CATE em 2–24h.',
    backAnswerSummary:
      'Evite prasugrel e ticagrelor na trombólise imediata pelo maior risco hemorrágico.',
    source: 'perola',
    createdAt: new Date(now - 2 * DAY_MS).toISOString(),
    dueAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(), // Due today (New)
    stability: 0,
    difficulty: 0,
    elapsed_days: 0,
    scheduled_days: 0,
    reps: 0,
    lapses: 0,
    state: 'New',
  },
  {
    id: 'fc-q-unicamp-2025-trauma-02',
    questionId: 'q-unicamp-2025-trauma-02',
    questionCode: 'Q-UNI25-0089',
    institutionLabel: 'UNICAMP 2025',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Trauma',
    subtema: 'Atendimento Inicial ao Politraumatizado (ATLS)',
    front:
      'Politraumatizado adulto com choque obstrutivo, turgência jugular, hipertimpanismo e MV abolido à direita: qual é o sítio anatômico preferencial para punção de alívio segundo a 10ª edição do ATLS?',
    backPearl:
      'ATLS 10ª edição: Punção de alívio em ADULTOS → 4º ou 5º EIC, anterior à linha axilar média (em crianças mantém-se 2º EIC na linha hemiclavicular). Depois, dreno de tórax em selo d’água (28–32 Fr).',
    backAnswerSummary:
      'Diagnóstico estritamente clínico — nunca aguardar radiografia de tórax antes da descompressão.',
    source: 'caderno_erros',
    createdAt: new Date(now - 4 * DAY_MS).toISOString(),
    dueAt: new Date(now - 60 * 60 * 1000).toISOString(), // Due today (Review — 3d elapsed)
    lastReviewedAt: new Date(now - 3 * DAY_MS).toISOString(),
    stability: 3.71,
    difficulty: 5.16,
    elapsed_days: 3,
    scheduled_days: 3,
    reps: 1,
    lapses: 0,
    state: 'Review',
  },
  {
    id: 'fc-q-enare-2025-epi-07',
    questionId: 'q-enare-2025-epi-07',
    questionCode: 'Q-ENR25-0673',
    institutionLabel: 'ENARE 2025',
    grandeAreaId: 'medicina_preventiva',
    grandeArea: 'Medicina Preventiva e Social',
    tema: 'Epidemiologia',
    subtema: 'Testes Diagnósticos e Valores Preditivos',
    front:
      'Ao aplicar um teste diagnóstico (S 90%, E 90%) em uma população de baixíssima prevalência (1%), o que acontece com o VPP, o VPN, a Sensibilidade e a Razão de Verossimilhança Positiva (LR+)?',
    backPearl:
      'Prevalência CAI → VPP CAI e VPN SOBE. Sensibilidade, Especificidade e Razão de Verossimilhança (LR+/LR-) NÃO mudam com a prevalência!',
    backAnswerSummary:
      'Com prevalência de 1% e S/E de 90%, o VPP despenca para ~8,3% (mais de 90% de falsos-positivos).',
    source: 'caderno_erros',
    createdAt: new Date(now - 5 * DAY_MS).toISOString(),
    dueAt: new Date(now - 20 * 60 * 1000).toISOString(), // Due today (Relearning after lapse)
    lastReviewedAt: new Date(now - 2 * DAY_MS).toISOString(),
    stability: 1.45,
    difficulty: 7.42,
    elapsed_days: 2,
    scheduled_days: 0,
    reps: 2,
    lapses: 1,
    state: 'Relearning',
  },
  {
    id: 'fc-q-usp-2025-go-05',
    questionId: 'q-usp-2025-go-05',
    questionCode: 'Q-USP25-0418',
    institutionLabel: 'USP-SP 2025',
    grandeAreaId: 'ginecologia_obstetricia',
    grandeArea: 'Ginecologia e Obstetrícia',
    tema: 'Obstetrícia / Pré-Natal',
    subtema: 'Diabetes Mellitus Gestacional (DMG)',
    front:
      'Quais são os 3 pontos de corte diagnósticos do TOTG-75g (24–28 semanas) para Diabetes Mellitus Gestacional pela FEBRASGO/OPAS, e quantos valores alterados bastam para fechar o diagnóstico?',
    backPearl:
      'TOTG-75g (24–28 sem): basta 1 valor ≥ 92 (jejum) | ≥ 180 (1h) | ≥ 153 (2h) = DMG! Alvos no tratamento: jejum < 95, 1h pós-prandial < 140, 2h pós-prandial < 120 mg/dL.',
    backAnswerSummary:
      'Primeira linha terapêutica: dieta + atividade física + automonitorização glicêmica capilar.',
    source: 'perola',
    createdAt: new Date(now - 6 * DAY_MS).toISOString(),
    dueAt: new Date(now + 3 * DAY_MS).toISOString(), // Scheduled in 3d
    lastReviewedAt: new Date(now - 1 * DAY_MS).toISOString(),
    stability: 4.12,
    difficulty: 4.88,
    elapsed_days: 1,
    scheduled_days: 4,
    reps: 1,
    lapses: 0,
    state: 'Review',
  },
  {
    id: 'fc-q-unifesp-2025-neo-06',
    questionId: 'q-unifesp-2025-neo-06',
    questionCode: 'Q-UNF25-0512',
    institutionLabel: 'UNIFESP 2025',
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Reanimação Neonatal (Diretriz SBP 2022)',
    front:
      'Na Reanimação Neonatal (SBP 2022), com qual FiO₂ deve-se iniciar a VPP no RN ≥ 34 semanas versus < 34 semanas, e onde posicionar o oxímetro de pulso?',
    backPearl:
      'SBP 2022 — VPP inicial: RN ≥ 34 sem → FiO₂ 21% | RN < 34 sem → FiO₂ 30%. Oxímetro SEMPRE pré-ductal (membro superior direito) + monitor cardíaco de 3 eletrodos.',
    backAnswerSummary:
      'Frequência da VPP: 40 a 60 movimentos/min dentro do Minuto de Ouro.',
    source: 'perola',
    createdAt: new Date(now - 9 * DAY_MS).toISOString(),
    dueAt: new Date(now + 11 * DAY_MS).toISOString(), // Scheduled in 11d
    lastReviewedAt: new Date(now - 2 * DAY_MS).toISOString(),
    stability: 13.82,
    difficulty: 3.93,
    elapsed_days: 2,
    scheduled_days: 13,
    reps: 2,
    lapses: 0,
    state: 'Review',
  },
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  ...BASE_SEED_FLASHCARDS,
  ...buildImportedAnkiFlashcards(now),
];
