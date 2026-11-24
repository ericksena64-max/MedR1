import type { ExamBoard, GrandeAreaId, MedicalQuestion } from '../types/medical';
import {
  buildBoardParetoProfile,
  calculateParetoByExam,
  matchBankParetoItem,
} from './paretoCalculator';

export type IncidenceTier = 'alta' | 'media' | 'baixa';

export interface BoardIncidenceRule {
  topic: string;
  tier: IncidenceTier;
  delta: number;
  keywords: string[];
}

export interface BoardWeightResolution {
  board: ExamBoard;
  tier: IncidenceTier;
  delta: number;
  matchedTopic: string | null;
  reason: string;
}

export interface CustomExamTopic {
  id: string;
  topic: string;
  tier: IncidenceTier;
}

export interface CustomBoardWeights {
  overrides: Record<string, IncidenceTier>;
  customTopics: CustomExamTopic[];
}

export type StoredCustomExamWeights = Record<ExamBoard, CustomBoardWeights>;

export interface EffectiveBoardTopic {
  id: string;
  topic: string;
  tier: IncidenceTier;
  defaultTier?: IncidenceTier;
  delta: number;
  keywords: string[];
  isCustom: boolean;
  isEdited: boolean;
}

export const STORAGE_KEY_CUSTOM_EXAM_WEIGHTS = 'medr1_custom_exam_weights';

export const TIER_DELTA: Record<IncidenceTier, number> = {
  alta: 0.03,
  media: 0.0,
  baixa: -0.03,
};

export const EXAM_BOARD_LABELS: Record<ExamBoard, string> = {
  UEPA: 'UEPA',
  ENARE: 'ENARE',
  GERAL: 'Geral',
};

/**
 * Normalizes Brazilian Portuguese medical strings for resilient partial matching
 * (strips diacritics, lowercases, replaces separators with single spaces).
 */
export function normalizeMedicalText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[/\-_,.;:()]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Default incidence matrices calibrated to Brazilian medical residency exam blueprints.
 * Priority within each board checks specific "baixa" subspecialties first when matching
 * partial strings so niche topics (e.g., "Oncologia Pediátrica", "Reumatologia Rara")
 * do not get misclassified under broad parent areas.
 */
export const BOARD_INCIDENCE_MATRIX: Record<ExamBoard, BoardIncidenceRule[]> = {
  UEPA: [
    // Baixa incidência (-0.03) — checked first for high-specificity subspecialties
    {
      topic: 'Reumatologia Rara',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'reumatologia rara',
        'esclerose sistemica',
        'dermatomiosite',
        'polimiosite',
        'sjogren',
        'vasculite rara',
        'doenca mista do tecido conjuntivo',
        'policondrite',
      ],
    },
    {
      topic: 'Subespecialidades Cirúrgicas',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'subespecialidades cirurgicas',
        'cirurgia plastica',
        'cirurgia cardiaca',
        'cirurgia toracica eletiva',
        'neurocirurgia eletiva',
        'cirurgia de cabeca e pescoco',
        'microcirurgia',
      ],
    },
    {
      topic: 'Genética',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'genetica',
        'genetica medica',
        'cromossomopatia',
        'doenca genetica',
        'erro inato',
      ],
    },
    {
      topic: 'Oftalmologia / Otorrino',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'oftalmologia',
        'oftalmo',
        'otorrino',
        'otorrinolaringologia',
        'orl',
        'glaucoma',
        'catarata',
      ],
    },

    // Alta incidência (+0.03)
    {
      topic: 'Infectologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'infectologia',
        'infectopediatria',
        'infeccao',
        'sepse',
        'hiv',
        'aids',
        'meningite',
        'endocardite',
        'sifilis',
        'hepatite viral',
      ],
    },
    {
      topic: 'Doenças Endêmicas',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'doencas endemicas',
        'endemicas',
        'malaria',
        'dengue',
        'chagas',
        'hanseniase',
        'tuberculose',
        'leishmaniose',
        'arbovirose',
        'febre amarela',
        'leptospirose',
        'esquistossomose',
        'vigilancia em saude',
      ],
    },
    {
      topic: 'Neonatologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'neonatologia',
        'reanimacao neonatal',
        'ictericia neonatal',
        'sepse neonatal',
        'recem nascido',
      ],
    },
    {
      topic: 'Imunizações',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'imunizacoes',
        'imunizacao',
        'vacinas',
        'vacinacao',
        'pni',
        'calendario vacinal',
        'puericultura imunizacoes',
      ],
    },
    {
      topic: 'Pré-Natal e Alto Risco',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'pre natal',
        'prenatal',
        'alto risco',
        'obstetricia pre natal',
        'diabetes mellitus gestacional',
        'diabetes gestacional',
        'dmg',
        'infeccoes congenitas',
        'isoimunizacao',
      ],
    },
    {
      topic: 'Síndromes Hipertensivas',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'sindromes hipertensivas',
        'pre eclampsia',
        'eclampsia',
        'hellp',
        'dheg',
        'hipertensao gestacional',
        'obstetricia urgencias',
      ],
    },
    {
      topic: 'Atenção Primária e SUS',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'atencao primaria',
        'aps',
        'sus',
        'politicas de saude',
        'saude da familia',
        'esf',
        'saude coletiva',
        'medicina preventiva',
      ],
    },
    {
      topic: 'Epidemiologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'epidemiologia',
        'bioestatistica',
        'testes diagnosticos',
        'valores preditivos',
        'estudos epidemiologicos',
        'indicadores de saude',
      ],
    },
    {
      topic: 'Trauma e Abdome Agudo',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'trauma',
        'politraumatizado',
        'atls',
        'abdome agudo',
        'pneumotorax',
        'apendicite',
        'obstrucao intestinal',
        'colecistite',
        'pancreatite aguda',
      ],
    },
    {
      topic: 'Cardiologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'cardiologia',
        'sindrome coronariana',
        'iam',
        'iamcsst',
        'insuficiencia cardiaca',
        'hipertensao arterial',
        'arritmia',
        'fibrilacao atrial',
      ],
    },
    {
      topic: 'Endocrinologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'endocrinologia',
        'diabetes mellitus',
        'cetoacidose',
        'tireoide',
        'hipotireoidismo',
        'hipertireoidismo',
        'adrenal',
      ],
    },

    // Média incidência (0.00)
    {
      topic: 'Pneumologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['pneumologia', 'asma', 'dpoc', 'pneumonia', 'derrame pleural', 'tep'],
    },
    {
      topic: 'Nefrologia',
      tier: 'media',
      delta: 0.0,
      keywords: [
        'nefrologia',
        'injuria renal',
        'doenca renal cronica',
        'glomerulopatia',
        'disturbios hidroeletroliticos',
        'hipercalemia',
      ],
    },
    {
      topic: 'Hematologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['hematologia', 'anemia', 'leucemia', 'linfoma', 'coagulopatia'],
    },
    {
      topic: 'Psiquiatria',
      tier: 'media',
      delta: 0.0,
      keywords: ['psiquiatria', 'depressao', 'esquizofrenia', 'transtorno bipolar', 'ansiedade'],
    },
    {
      topic: 'Gastroenterologia',
      tier: 'media',
      delta: 0.0,
      keywords: [
        'gastroenterologia',
        'cirrose',
        'hemorragia digestiva',
        'drge',
        'ulcera peptica',
        'doenca inflamatoria intestinal',
      ],
    },
  ],

  ENARE: [
    // Baixa incidência (-0.03) — checked first for high-specificity subspecialties
    {
      topic: 'Oncologia Pediátrica',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'oncologia pediatrica',
        'oncopediatria',
        'neuroblastoma',
        'tumor de wilms',
        'retinoblastoma',
      ],
    },
    {
      topic: 'Doenças Metabólicas Raras',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'doencas metabolicas raras',
        'erros inatos do metabolismo',
        'erro inato',
        'mucopolissacaridose',
        'doenca metabolica rara',
      ],
    },
    {
      topic: 'Oftalmologia e Otorrino',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'oftalmologia',
        'oftalmo',
        'otorrino',
        'otorrinolaringologia',
        'orl',
        'glaucoma',
        'catarata',
      ],
    },
    {
      topic: 'Cirurgia Plástica',
      tier: 'baixa',
      delta: -0.03,
      keywords: ['cirurgia plastica', 'enxerto cutaneo', 'retalho cirurgico'],
    },

    // Alta incidência (+0.03)
    {
      topic: 'Cardiologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'cardiologia',
        'sindrome coronariana',
        'iam',
        'iamcsst',
        'insuficiencia cardiaca',
        'hipertensao arterial',
        'arritmia',
      ],
    },
    {
      topic: 'Pneumologia',
      tier: 'alta',
      delta: 0.03,
      keywords: ['pneumologia', 'asma', 'dpoc', 'pneumonia', 'derrame pleural', 'tep'],
    },
    {
      topic: 'Endocrinologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'endocrinologia',
        'diabetes mellitus',
        'cetoacidose',
        'tireoide',
        'hipotireoidismo',
        'hipertireoidismo',
      ],
    },
    {
      topic: 'Infectologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'infectologia',
        'infectopediatria',
        'sepse',
        'tuberculose',
        'hiv',
        'dengue',
        'meningite',
        'sifilis',
        'endocardite',
      ],
    },
    {
      topic: 'Trauma e Abdome Agudo',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'trauma',
        'politraumatizado',
        'atls',
        'abdome agudo',
        'pneumotorax',
        'apendicite',
        'obstrucao intestinal',
        'colecistite',
      ],
    },
    {
      topic: 'Assistência ao Parto',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'assistencia ao parto',
        'trabalho de parto',
        'partograma',
        'distocia',
        'hemorragia pos parto',
        'obstetricia urgencias',
        'parto',
      ],
    },
    {
      topic: 'Síndromes Hipertensivas',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'sindromes hipertensivas',
        'pre eclampsia',
        'eclampsia',
        'hellp',
        'dheg',
        'hipertensao gestacional',
      ],
    },
    {
      topic: 'Anticoncepção e SUA',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'anticoncepcao',
        'contracepcao',
        'sua',
        'sangramento uterino anormal',
        'ginecologia',
        'mioma',
        'endometriose',
        'diu',
      ],
    },
    {
      topic: 'Neonatologia',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'neonatologia',
        'reanimacao neonatal',
        'ictericia neonatal',
        'sepse neonatal',
        'recem nascido',
      ],
    },
    {
      topic: 'Puericultura e Vacinas',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'puericultura',
        'vacinas',
        'imunizacoes',
        'imunizacao',
        'pni',
        'aleitamento materno',
        'crescimento e desenvolvimento',
      ],
    },
    {
      topic: 'Epidemiologia e Bioestatística',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'epidemiologia',
        'bioestatistica',
        'testes diagnosticos',
        'valores preditivos',
        'estudos epidemiologicos',
        'vigilancia em saude',
      ],
    },
    {
      topic: 'Atenção Primária e SUS',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'atencao primaria',
        'aps',
        'sus',
        'politicas de saude',
        'saude da familia',
        'esf',
        'medicina preventiva',
      ],
    },

    // Média incidência (0.00)
    {
      topic: 'Neurologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['neurologia', 'avc', 'epilepsia', 'cefaleia', 'parkinson', 'neuropatia'],
    },
    {
      topic: 'Nefrologia',
      tier: 'media',
      delta: 0.0,
      keywords: [
        'nefrologia',
        'injuria renal',
        'doenca renal cronica',
        'glomerulopatia',
        'disturbios hidroeletroliticos',
      ],
    },
    {
      topic: 'Psiquiatria',
      tier: 'media',
      delta: 0.0,
      keywords: ['psiquiatria', 'depressao', 'esquizofrenia', 'transtorno bipolar', 'ansiedade'],
    },
    {
      topic: 'Gastroenterologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['gastroenterologia', 'cirrose', 'hemorragia digestiva', 'drge', 'ulcera peptica'],
    },
    {
      topic: 'Ortopedia',
      tier: 'media',
      delta: 0.0,
      keywords: ['ortopedia', 'fratura', 'luxacao', 'osteomielite'],
    },
    {
      topic: 'Urologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['urologia', 'litiase urinaria', 'hpb', 'prostata', 'nefrolitiase'],
    },
  ],

  GERAL: [
    // Baixa incidência (-0.03)
    {
      topic: 'Oftalmologia / Otorrino',
      tier: 'baixa',
      delta: -0.03,
      keywords: ['oftalmologia', 'oftalmo', 'otorrino', 'otorrinolaringologia', 'orl'],
    },
    {
      topic: 'Genética e Doenças Raras',
      tier: 'baixa',
      delta: -0.03,
      keywords: [
        'genetica',
        'doencas metabolicas raras',
        'reumatologia rara',
        'oncologia pediatrica',
        'erro inato',
      ],
    },
    {
      topic: 'Subespecialidades Cirúrgicas',
      tier: 'baixa',
      delta: -0.03,
      keywords: ['cirurgia plastica', 'subespecialidades cirurgicas', 'cirurgia cardiaca'],
    },

    // Alta incidência (+0.03)
    {
      topic: 'Cardiologia',
      tier: 'alta',
      delta: 0.03,
      keywords: ['cardiologia', 'sindrome coronariana', 'iam', 'iamcsst', 'insuficiencia cardiaca'],
    },
    {
      topic: 'Infectologia',
      tier: 'alta',
      delta: 0.03,
      keywords: ['infectologia', 'infectopediatria', 'sepse', 'tuberculose', 'hiv', 'dengue'],
    },
    {
      topic: 'Endocrinologia',
      tier: 'alta',
      delta: 0.03,
      keywords: ['endocrinologia', 'diabetes mellitus', 'cetoacidose', 'tireoide'],
    },
    {
      topic: 'Trauma e Abdome Agudo',
      tier: 'alta',
      delta: 0.03,
      keywords: ['trauma', 'politraumatizado', 'atls', 'abdome agudo', 'pneumotorax', 'apendicite'],
    },
    {
      topic: 'Pré-Natal e Síndromes Hipertensivas',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'pre natal',
        'obstetricia pre natal',
        'sindromes hipertensivas',
        'pre eclampsia',
        'assistencia ao parto',
        'obstetricia urgencias',
      ],
    },
    {
      topic: 'Neonatologia e Imunizações',
      tier: 'alta',
      delta: 0.03,
      keywords: ['neonatologia', 'imunizacoes', 'vacinas', 'puericultura', 'reanimacao neonatal'],
    },
    {
      topic: 'Epidemiologia e SUS',
      tier: 'alta',
      delta: 0.03,
      keywords: [
        'epidemiologia',
        'bioestatistica',
        'atencao primaria',
        'politicas de saude',
        'sus',
        'vigilancia em saude',
      ],
    },

    // Média incidência (0.00)
    {
      topic: 'Pneumologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['pneumologia', 'asma', 'dpoc', 'pneumonia', 'tep'],
    },
    {
      topic: 'Nefrologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['nefrologia', 'injuria renal', 'doenca renal cronica', 'glomerulopatia'],
    },
    {
      topic: 'Gastroenterologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['gastroenterologia', 'cirrose', 'hemorragia digestiva', 'drge'],
    },
    {
      topic: 'Neurologia e Psiquiatria',
      tier: 'media',
      delta: 0.0,
      keywords: ['neurologia', 'avc', 'psiquiatria', 'depressao'],
    },
    {
      topic: 'Ginecologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['ginecologia', 'anticoncepcao', 'sua', 'mioma', 'endometriose'],
    },
    {
      topic: 'Hematologia, Ortopedia e Urologia',
      tier: 'media',
      delta: 0.0,
      keywords: ['hematologia', 'anemia', 'ortopedia', 'fratura', 'urologia', 'litiase'],
    },
  ],
};

function createEmptyBoardWeights(): CustomBoardWeights {
  return { overrides: {}, customTopics: [] };
}

function createEmptyStoredWeights(): StoredCustomExamWeights {
  return {
    UEPA: createEmptyBoardWeights(),
    ENARE: createEmptyBoardWeights(),
    GERAL: createEmptyBoardWeights(),
  };
}

function isValidTier(value: unknown): value is IncidenceTier {
  return value === 'alta' || value === 'media' || value === 'baixa';
}

function sanitizeBoardEntry(raw: unknown): CustomBoardWeights {
  if (!raw || typeof raw !== 'object') return createEmptyBoardWeights();
  const obj = raw as Record<string, unknown>;

  const overrides: Record<string, IncidenceTier> = {};
  if (obj.overrides && typeof obj.overrides === 'object') {
    for (const [key, val] of Object.entries(obj.overrides as Record<string, unknown>)) {
      if (isValidTier(val)) {
        overrides[key] = val;
      }
    }
  }

  const customTopics: CustomExamTopic[] = [];
  if (Array.isArray(obj.customTopics)) {
    for (const item of obj.customTopics) {
      if (
        item &&
        typeof item === 'object' &&
        typeof (item as Record<string, unknown>).topic === 'string' &&
        isValidTier((item as Record<string, unknown>).tier)
      ) {
        const rec = item as Record<string, unknown>;
        const trimmed = (rec.topic as string).trim();
        if (trimmed) {
          customTopics.push({
            id:
              typeof rec.id === 'string' && rec.id
                ? rec.id
                : `custom-${normalizeMedicalText(trimmed)}`,
            topic: trimmed,
            tier: rec.tier as IncidenceTier,
          });
        }
      }
    }
  }

  return { overrides, customTopics };
}

/**
 * Reads user-customized exam incidence weights from localStorage.
 */
export function loadCustomExamWeights(): StoredCustomExamWeights {
  if (typeof window === 'undefined') return createEmptyStoredWeights();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY_CUSTOM_EXAM_WEIGHTS);
    if (!raw) return createEmptyStoredWeights();
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return {
      UEPA: sanitizeBoardEntry(parsed.UEPA),
      ENARE: sanitizeBoardEntry(parsed.ENARE),
      GERAL: sanitizeBoardEntry(parsed.GERAL),
    };
  } catch {
    return createEmptyStoredWeights();
  }
}

/**
 * Persists custom exam incidence weights into localStorage.
 */
export function saveCustomExamWeights(weights: StoredCustomExamWeights): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY_CUSTOM_EXAM_WEIGHTS,
      JSON.stringify(weights)
    );
  } catch {
    // ignore storage quota errors
  }
}

/**
 * Updates the incidence tier of a default or custom topic for a specific board.
 * If a default topic is switched back to its original tier, its override entry is cleared.
 */
export function setExamTopicTier(
  board: ExamBoard,
  topicIdOrName: string,
  tier: IncidenceTier,
  isCustom = false
): StoredCustomExamWeights {
  const stored = loadCustomExamWeights();
  const boardState = stored[board];

  if (isCustom) {
    boardState.customTopics = boardState.customTopics.map((item) =>
      item.id === topicIdOrName || item.topic === topicIdOrName
        ? { ...item, tier }
        : item
    );
  } else {
    const defaultRule = BOARD_INCIDENCE_MATRIX[board].find(
      (r) => r.topic === topicIdOrName
    );
    if (defaultRule && defaultRule.tier === tier) {
      delete boardState.overrides[topicIdOrName];
    } else {
      boardState.overrides[topicIdOrName] = tier;
    }
  }

  saveCustomExamWeights(stored);
  return stored;
}

/**
 * Adds a new custom topic/subtopic to a specific board's incidence matrix.
 * If a default or custom topic with the same normalized name already exists, updates its tier.
 */
export function addCustomExamTopic(
  board: ExamBoard,
  topicName: string,
  tier: IncidenceTier
): StoredCustomExamWeights {
  const cleaned = topicName.trim();
  if (!cleaned) return loadCustomExamWeights();

  const normNew = normalizeMedicalText(cleaned);
  const stored = loadCustomExamWeights();
  const boardState = stored[board];

  // Check if matches an existing default topic exactly
  const matchingDefault = BOARD_INCIDENCE_MATRIX[board].find(
    (r) => normalizeMedicalText(r.topic) === normNew
  );
  if (matchingDefault) {
    if (matchingDefault.tier === tier) {
      delete boardState.overrides[matchingDefault.topic];
    } else {
      boardState.overrides[matchingDefault.topic] = tier;
    }
    saveCustomExamWeights(stored);
    return stored;
  }

  // Check if matches an existing custom topic
  const existingCustomIdx = boardState.customTopics.findIndex(
    (c) => normalizeMedicalText(c.topic) === normNew
  );
  if (existingCustomIdx >= 0) {
    boardState.customTopics[existingCustomIdx] = {
      ...boardState.customTopics[existingCustomIdx],
      topic: cleaned,
      tier,
    };
  } else {
    boardState.customTopics = [
      {
        id: `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        topic: cleaned,
        tier,
      },
      ...boardState.customTopics,
    ];
  }

  saveCustomExamWeights(stored);
  return stored;
}

/**
 * Removes a user-created custom topic from a board.
 */
export function removeCustomExamTopic(
  board: ExamBoard,
  customTopicId: string
): StoredCustomExamWeights {
  const stored = loadCustomExamWeights();
  stored[board].customTopics = stored[board].customTopics.filter(
    (c) => c.id !== customTopicId
  );
  saveCustomExamWeights(stored);
  return stored;
}

/**
 * Restores a specific board to its original default incidence weights and clears custom topics.
 */
export function resetBoardWeights(board: ExamBoard): StoredCustomExamWeights {
  const stored = loadCustomExamWeights();
  stored[board] = createEmptyBoardWeights();
  saveCustomExamWeights(stored);
  return stored;
}

/**
 * Returns the full merged list of topics for a board (custom topics + default rules with overrides),
 * annotated with isCustom and isEdited flags for UI display.
 */
export function getEffectiveBoardTopics(board: ExamBoard): EffectiveBoardTopic[] {
  const stored = loadCustomExamWeights()[board];
  const defaults = BOARD_INCIDENCE_MATRIX[board] ?? BOARD_INCIDENCE_MATRIX.GERAL;

  const customList: EffectiveBoardTopic[] = stored.customTopics.map((ct) => ({
    id: ct.id,
    topic: ct.topic,
    tier: ct.tier,
    delta: TIER_DELTA[ct.tier],
    keywords: [normalizeMedicalText(ct.topic)],
    isCustom: true,
    isEdited: true,
  }));

  const defaultList: EffectiveBoardTopic[] = defaults.map((rule) => {
    const override = stored.overrides[rule.topic];
    const effectiveTier = override ?? rule.tier;
    return {
      id: rule.topic,
      topic: rule.topic,
      tier: effectiveTier,
      defaultTier: rule.tier,
      delta: TIER_DELTA[effectiveTier],
      keywords: rule.keywords,
      isCustom: false,
      isEdited: override !== undefined && override !== rule.tier,
    };
  });

  return [...customList, ...defaultList];
}

/**
 * Counts how many edits/additions the user has made for a given board.
 */
export function getBoardCustomizationCount(board: ExamBoard): number {
  const stored = loadCustomExamWeights()[board];
  const defaults = BOARD_INCIDENCE_MATRIX[board] ?? [];
  const editedDefaults = Object.entries(stored.overrides).filter(([topic, tier]) => {
    const def = defaults.find((d) => d.topic === topic);
    return def ? def.tier !== tier : true;
  }).length;
  return editedDefaults + stored.customTopics.length;
}

/**
 * Recalculates and persists a board's weights using the live 80/20 Pareto rule
 * from the registered question bank. When fewer than 10 questions exist for the
 * selected board, safely falls back to the board's default incidence matrix.
 */
export function recalculateBoardWeightsFromPareto(board: ExamBoard): {
  usedFallback: boolean;
  totalQuestions: number;
  updatedTopics: number;
} {
  const stored = loadCustomExamWeights();
  const defaults = BOARD_INCIDENCE_MATRIX[board] ?? BOARD_INCIDENCE_MATRIX.GERAL;
  const baseTopics = defaults.map((rule) => ({
    id: rule.topic,
    topic: rule.topic,
    tier: rule.tier,
    keywords: rule.keywords,
  }));

  const profile = buildBoardParetoProfile(board, baseTopics, defaults);

  if (!profile.analysis.hasEnoughData) {
    // Fallback: fewer than 10 questions in the bank -> keep default matrix weights
    stored[board].overrides = {};
    saveCustomExamWeights(stored);
    return {
      usedFallback: true,
      totalQuestions: profile.analysis.totalQuestions,
      updatedTopics: 0,
    };
  }

  const nextOverrides: Record<string, IncidenceTier> = {};
  let updatedTopics = 0;

  for (const rule of defaults) {
    const stat = profile.byTopicId[rule.topic];
    if (!stat) continue;
    if (stat.paretoTier !== rule.tier) {
      nextOverrides[rule.topic] = stat.paretoTier;
      updatedTopics += 1;
    }
  }

  stored[board].overrides = nextOverrides;
  saveCustomExamWeights(stored);

  return {
    usedFallback: false,
    totalQuestions: profile.analysis.totalQuestions,
    updatedTopics,
  };
}

function formatBoardReason(
  board: ExamBoard,
  tier: IncidenceTier,
  fromBankPareto = false
): string {
  const boardName = EXAM_BOARD_LABELS[board];
  if (fromBankPareto) {
    if (tier === 'alta') return `Núcleo Pareto 80% (${boardName})`;
    if (tier === 'baixa') return `Cauda Longa >95% (${boardName})`;
    return `Faixa Média Pareto (${boardName})`;
  }
  if (tier === 'alta') {
    return board === 'GERAL'
      ? 'Alta incidência nacional'
      : `Alta incidência ${boardName}`;
  }
  if (tier === 'baixa') {
    return board === 'GERAL'
      ? 'Baixa incidência nacional'
      : `Baixa incidência ${boardName}`;
  }
  return board === 'GERAL'
    ? 'Incidência padrão (Geral)'
    : `Incidência média ${boardName}`;
}

function matchesKeyword(haystack: string, normalizedKeyword: string): boolean {
  if (!haystack || !normalizedKeyword) return false;
  if (haystack.includes(normalizedKeyword)) return true;

  // Token-level partial fallback for multi-word clinical terms
  const kwTokens = normalizedKeyword.split(' ').filter((t) => t.length >= 4);
  if (kwTokens.length >= 2) {
    return kwTokens.every((token) => haystack.includes(token));
  }
  return false;
}

/**
 * Resolves the FSRS retention weight delta for a given board and topic/subtopic,
 * always reading live user customizations from localStorage, with resilient
 * partial-text fallback across subtema, tema, and optional clinical stem.
 */
export function getExamTopicWeight(
  board: ExamBoard,
  tema: string,
  subtema?: string,
  contextText?: string
): BoardWeightResolution {
  const effectiveTopics = getEffectiveBoardTopics(board);
  const paretoAnalysis = calculateParetoByExam(board);

  const normTema = normalizeMedicalText(tema);
  const normSubtema = normalizeMedicalText(subtema ?? '');
  const primaryText = [normSubtema, normTema].filter(Boolean).join(' ');
  const extendedText = [primaryText, normalizeMedicalText(contextText ?? '')]
    .filter(Boolean)
    .join(' ');

  const resolveMatchedRule = (rule: EffectiveBoardTopic): BoardWeightResolution => {
    // Manual user edits or custom topics always win
    if (rule.isCustom || rule.isEdited) {
      return {
        board,
        tier: rule.tier,
        delta: rule.delta,
        matchedTopic: rule.topic,
        reason: formatBoardReason(board, rule.tier, false),
      };
    }

    // When the question bank has >= 10 questions for the board, apply dynamic Pareto 80/20
    if (paretoAnalysis.hasEnoughData) {
      const paretoMatch = matchBankParetoItem(
        rule.topic,
        [...rule.keywords, tema, subtema ?? ''],
        paretoAnalysis
      );
      if (paretoMatch) {
        return {
          board,
          tier: paretoMatch.tier,
          delta: paretoMatch.delta,
          matchedTopic: rule.topic,
          reason: formatBoardReason(board, paretoMatch.tier, true),
        };
      }
    }

    return {
      board,
      tier: rule.tier,
      delta: rule.delta,
      matchedTopic: rule.topic,
      reason: formatBoardReason(board, rule.tier, false),
    };
  };

  // Pass 0: User-added custom topics always take highest priority (exact or partial match)
  const customTopics = effectiveTopics.filter((t) => t.isCustom);
  for (const rule of customTopics) {
    const normRuleTopic = normalizeMedicalText(rule.topic);
    if (
      normTema === normRuleTopic ||
      (normSubtema && normSubtema === normRuleTopic) ||
      matchesKeyword(primaryText, normRuleTopic) ||
      (contextText && normRuleTopic.length >= 4 && matchesKeyword(extendedText, normRuleTopic))
    ) {
      return resolveMatchedRule(rule);
    }
  }

  const defaultTopics = effectiveTopics.filter((t) => !t.isCustom);

  // Pass 1: Exact match against normalized rule topic name or exact keyword
  for (const rule of defaultTopics) {
    const normRuleTopic = normalizeMedicalText(rule.topic);
    if (
      normTema === normRuleTopic ||
      (normSubtema && normSubtema === normRuleTopic) ||
      rule.keywords.some((kw) => kw === normTema || (normSubtema && kw === normSubtema))
    ) {
      return resolveMatchedRule(rule);
    }
  }

  // Pass 2: Partial / token match against tema + subtema
  for (const rule of defaultTopics) {
    if (
      matchesKeyword(primaryText, normalizeMedicalText(rule.topic)) ||
      rule.keywords.some((kw) => matchesKeyword(primaryText, kw))
    ) {
      return resolveMatchedRule(rule);
    }
  }

  // Pass 3: Contextual fallback against front prompt text (e.g., manual flashcards)
  if (contextText) {
    for (const rule of defaultTopics) {
      if (rule.keywords.some((kw) => kw.length >= 5 && matchesKeyword(extendedText, kw))) {
        return resolveMatchedRule(rule);
      }
    }
  }

  // Pass 4: Direct bank Pareto fallback if the topic exists in the bank (>= 10 questions)
  if (paretoAnalysis.hasEnoughData) {
    const directPareto = matchBankParetoItem(tema, [subtema ?? ''], paretoAnalysis);
    if (directPareto) {
      return {
        board,
        tier: directPareto.tier,
        delta: directPareto.delta,
        matchedTopic: directPareto.topic,
        reason: formatBoardReason(board, directPareto.tier, true),
      };
    }
  }

  return {
    board,
    tier: 'media',
    delta: 0.0,
    matchedTopic: null,
    reason: formatBoardReason(board, 'media', false),
  };
}

/**
 * Convenience helper returning only the numeric delta (+0.03, 0.00, -0.03)
 * for a given board and topic/subtopic, always synced with localStorage customizations.
 */
export function getBoardDelta(
  board: ExamBoard,
  tema: string,
  subtema?: string,
  contextText?: string
): number {
  return getExamTopicWeight(board, tema, subtema, contextText).delta;
}

// ============================================================================
// Multi-Exam Target Pareto Incidence Matrix (Weekly Schedule & Home Sync)
// ============================================================================

export type TargetExamBoard = 'UEPA' | 'ENARE' | 'UFRGS' | 'USP-SP' | 'SUS-SP';

export const TARGET_EXAM_BOARDS: ReadonlyArray<TargetExamBoard> = [
  'UEPA',
  'ENARE',
  'UFRGS',
  'USP-SP',
  'SUS-SP',
];

export interface TargetExamTopicWeight {
  topic: string;
  grandeAreaId: GrandeAreaId;
  shortArea: string;
  weight: number; // 0..1 historical relative incidence
  inPareto80: boolean;
  keywords: string[];
}

export interface TargetExamCutoffPreset {
  board: TargetExamBoard;
  institution: string;
  defaultCutoff: number;
  totalQuestions: number;
}

export const TARGET_EXAM_CUTOFF_PRESETS: Record<
  TargetExamBoard,
  TargetExamCutoffPreset
> = {
  UEPA: {
    board: 'UEPA',
    institution: 'UEPA',
    defaultCutoff: 74,
    totalQuestions: 100,
  },
  ENARE: {
    board: 'ENARE',
    institution: 'ENARE',
    defaultCutoff: 78,
    totalQuestions: 100,
  },
  UFRGS: {
    board: 'UFRGS',
    institution: 'HCPA / UFRGS',
    defaultCutoff: 79,
    totalQuestions: 100,
  },
  'USP-SP': {
    board: 'USP-SP',
    institution: 'USP-SP',
    defaultCutoff: 80,
    totalQuestions: 120,
  },
  'SUS-SP': {
    board: 'SUS-SP',
    institution: 'SUS-SP',
    defaultCutoff: 76,
    totalQuestions: 100,
  },
};

export const TARGET_EXAM_PARETO_MATRIX: Record<
  TargetExamBoard,
  TargetExamTopicWeight[]
> = {
  UEPA: [
    {
      topic: 'Doenças Endêmicas',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.98,
      inPareto80: true,
      keywords: ['endemic', 'malar', 'arboviro', 'dengue', 'leishman', 'chagas', 'hanseniase', 'tubercul'],
    },
    {
      topic: 'Obstetrícia de Alto Risco',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.94,
      inPareto80: true,
      keywords: ['obstetr', 'pre natal', 'pre-natal', 'eclampsia', 'hipertensao gestacional', 'hemorragia'],
    },
    {
      topic: 'Epidemiologia e SUS',
      grandeAreaId: 'medicina_preventiva',
      shortArea: 'Preventiva',
      weight: 0.92,
      inPareto80: true,
      keywords: ['epidemio', 'sus', 'vigilancia', 'saude coletiva', 'atencao primaria', 'politicas de saude'],
    },
    {
      topic: 'Imunizações e Puericultura',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.89,
      inPareto80: true,
      keywords: ['imuniz', 'vacin', 'puericult', 'aleitamento', 'crescimento', 'pediat'],
    },
    {
      topic: 'Trauma e ATLS',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.86,
      inPareto80: true,
      keywords: ['trauma', 'atls', 'politrauma', 'choque hemorragico'],
    },
    {
      topic: 'Infectologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.84,
      inPareto80: true,
      keywords: ['infecto', 'hiv', 'sepse', 'meningite', 'antibiot'],
    },
    {
      topic: 'Abdome Agudo',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.72,
      inPareto80: false,
      keywords: ['abdome agudo', 'apendic', 'colecist', 'obstrucao intestinal'],
    },
    {
      topic: 'Cardiologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.68,
      inPareto80: false,
      keywords: ['cardio', 'icc', 'iam', 'sca', 'has', 'arritm'],
    },
    {
      topic: 'Ginecologia',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.66,
      inPareto80: false,
      keywords: ['gineco', 'ist', 'colo uterino', 'hpv', 'contracep'],
    },
  ],
  ENARE: [
    {
      topic: 'Epidemiologia e SUS',
      grandeAreaId: 'medicina_preventiva',
      shortArea: 'Preventiva',
      weight: 0.97,
      inPareto80: true,
      keywords: ['epidemio', 'sus', 'atencao primaria', 'politicas de saude', 'saude coletiva', 'vigilancia'],
    },
    {
      topic: 'Obstetrícia de Alto Risco',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.93,
      inPareto80: true,
      keywords: ['obstetr', 'pre natal', 'pre-natal', 'parto', 'eclampsia', 'puerperio'],
    },
    {
      topic: 'Cardiologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.90,
      inPareto80: true,
      keywords: ['cardio', 'iam', 'sca', 'icc', 'has', 'arritm'],
    },
    {
      topic: 'Imunizações e Puericultura',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.88,
      inPareto80: true,
      keywords: ['imuniz', 'vacin', 'puericult', 'neonat', 'aleitamento'],
    },
    {
      topic: 'Abdome Agudo',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.85,
      inPareto80: true,
      keywords: ['abdome agudo', 'apendic', 'colecist', 'pancreat', 'hernia'],
    },
    {
      topic: 'Endocrinologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.82,
      inPareto80: true,
      keywords: ['endocr', 'diabetes', 'tireoid', 'cetoacidose', 'adrenal'],
    },
    {
      topic: 'Trauma e ATLS',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.74,
      inPareto80: false,
      keywords: ['trauma', 'atls', 'queimadur'],
    },
    {
      topic: 'Infectologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.72,
      inPareto80: false,
      keywords: ['infecto', 'tubercul', 'hiv', 'dengue', 'sepse'],
    },
    {
      topic: 'Neonatologia',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.70,
      inPareto80: false,
      keywords: ['neonat', 'reanimacao neonatal', 'ictericia neonatal'],
    },
  ],
  UFRGS: [
    {
      topic: 'Cardiologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.96,
      inPareto80: true,
      keywords: ['cardio', 'icc', 'iam', 'sca', 'arritm', 'valvulop'],
    },
    {
      topic: 'Epidemiologia Clínica e MBE',
      grandeAreaId: 'medicina_preventiva',
      shortArea: 'Preventiva',
      weight: 0.94,
      inPareto80: true,
      keywords: ['epidemio', 'bioestat', 'mbe', 'ensaios', 'sus', 'rastreamento', 'estudos'],
    },
    {
      topic: 'Pneumologia e Terapia Intensiva',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.91,
      inPareto80: true,
      keywords: ['pneumo', 'uti', 'terapia intensiva', 'dpoc', 'asma', 'ventilacao', 'tep'],
    },
    {
      topic: 'Cirurgia do Aparelho Digestivo',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.88,
      inPareto80: true,
      keywords: ['digestiv', 'abdome agudo', 'esofago', 'gastr', 'vesicula', 'pancreat', 'colorret'],
    },
    {
      topic: 'Obstetrícia de Alto Risco',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.86,
      inPareto80: true,
      keywords: ['obstetr', 'pre natal', 'pre-natal', 'parto', 'diabetes gestacional', 'eclampsia'],
    },
    {
      topic: 'Neonatologia',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.84,
      inPareto80: true,
      keywords: ['neonat', 'pediat', 'bronquiolite', 'puericult', 'imuniz'],
    },
    {
      topic: 'Nefrologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.74,
      inPareto80: false,
      keywords: ['nefro', 'ira', 'drc', 'glomerulo', 'disturbio eletrolitico'],
    },
    {
      topic: 'Ginecologia Endócrina',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.70,
      inPareto80: false,
      keywords: ['gineco', 'sop', 'amenorreia', 'climaterio', 'endometriose'],
    },
  ],
  'USP-SP': [
    {
      topic: 'Cardiologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.97,
      inPareto80: true,
      keywords: ['cardio', 'iam', 'sca', 'icc', 'arritm', 'choque'],
    },
    {
      topic: 'Nefrologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.93,
      inPareto80: true,
      keywords: ['nefro', 'ira', 'drc', 'glomerulo', 'acido base', 'eletrolit'],
    },
    {
      topic: 'Cirurgia do Aparelho Digestivo',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.91,
      inPareto80: true,
      keywords: ['digestiv', 'abdome agudo', 'trauma', 'figado', 'pancreat', 'esofago'],
    },
    {
      topic: 'Pneumologia e Terapia Intensiva',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.89,
      inPareto80: true,
      keywords: ['pneumo', 'uti', 'terapia intensiva', 'sepse', 'ventilacao', 'tep'],
    },
    {
      topic: 'Ginecologia Endócrina',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.86,
      inPareto80: true,
      keywords: ['gineco', 'obstetr', 'amenorreia', 'sop', 'mama', 'oncologia gineco'],
    },
    {
      topic: 'Neonatologia',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.84,
      inPareto80: true,
      keywords: ['neonat', 'pediat', 'reanimacao', 'emergencias pediatricas'],
    },
    {
      topic: 'Epidemiologia Clínica e MBE',
      grandeAreaId: 'medicina_preventiva',
      shortArea: 'Preventiva',
      weight: 0.80,
      inPareto80: true,
      keywords: ['epidemio', 'sus', 'bioestat', 'etica', 'saude coletiva'],
    },
    {
      topic: 'Neurologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.74,
      inPareto80: false,
      keywords: ['neuro', 'avc', 'epilepsia', 'cefaleia', 'meningite'],
    },
  ],
  'SUS-SP': [
    {
      topic: 'Trauma e ATLS',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.97,
      inPareto80: true,
      keywords: ['trauma', 'atls', 'politrauma', 'torax', 'queimadur'],
    },
    {
      topic: 'Abdome Agudo',
      grandeAreaId: 'cirurgia_geral',
      shortArea: 'Cirurgia',
      weight: 0.94,
      inPareto80: true,
      keywords: ['abdome agudo', 'apendic', 'colecist', 'diverticul', 'obstrucao'],
    },
    {
      topic: 'Obstetrícia de Alto Risco',
      grandeAreaId: 'ginecologia_obstetricia',
      shortArea: 'GO',
      weight: 0.91,
      inPareto80: true,
      keywords: ['obstetr', 'urgencias obstetricas', 'eclampsia', 'hemorragia', 'pre natal'],
    },
    {
      topic: 'Cardiologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.88,
      inPareto80: true,
      keywords: ['cardio', 'iam', 'sca', 'arritm', 'icc', 'emergenc'],
    },
    {
      topic: 'Emergências Pediátricas',
      grandeAreaId: 'pediatria',
      shortArea: 'Pediatria',
      weight: 0.85,
      inPareto80: true,
      keywords: ['emergencias pediatricas', 'pediat', 'bronquiolite', 'desidratacao', 'neonat', 'imuniz'],
    },
    {
      topic: 'Epidemiologia e SUS',
      grandeAreaId: 'medicina_preventiva',
      shortArea: 'Preventiva',
      weight: 0.83,
      inPareto80: true,
      keywords: ['epidemio', 'sus', 'vigilancia', 'saude coletiva', 'etica'],
    },
    {
      topic: 'Infectologia',
      grandeAreaId: 'clinica_medica',
      shortArea: 'Clínica',
      weight: 0.75,
      inPareto80: false,
      keywords: ['infecto', 'sepse', 'pneumonia', 'hiv', 'dengue'],
    },
  ],
};

export function resolveTopicExamIncidence(
  topicLabel: string,
  grandeAreaId: GrandeAreaId,
  board: TargetExamBoard
): { incidence: number; inPareto80: boolean; matchedTopic: string | null } {
  const entries = TARGET_EXAM_PARETO_MATRIX[board] ?? [];
  const normLabel = normalizeMedicalText(topicLabel);

  // 1. Exact or substring match on topic name
  for (const entry of entries) {
    const normEntry = normalizeMedicalText(entry.topic);
    if (
      normLabel === normEntry ||
      (normEntry.length >= 4 && normLabel.includes(normEntry)) ||
      (normLabel.length >= 4 && normEntry.includes(normLabel))
    ) {
      return {
        incidence: entry.weight,
        inPareto80: entry.inPareto80,
        matchedTopic: entry.topic,
      };
    }
  }

  // 2. Keyword match (preferring same grandeAreaId when available)
  let bestMatch: TargetExamTopicWeight | null = null;
  for (const entry of entries) {
    const keywordHit = entry.keywords.some((kw) =>
      normLabel.includes(normalizeMedicalText(kw))
    );
    if (!keywordHit) continue;
    if (!bestMatch) {
      bestMatch = entry;
    } else if (
      entry.grandeAreaId === grandeAreaId &&
      bestMatch.grandeAreaId !== grandeAreaId
    ) {
      bestMatch = entry;
    } else if (
      entry.grandeAreaId === bestMatch.grandeAreaId &&
      entry.weight > bestMatch.weight
    ) {
      bestMatch = entry;
    }
  }

  if (bestMatch) {
    return {
      incidence: bestMatch.weight,
      inPareto80: bestMatch.inPareto80,
      matchedTopic: bestMatch.topic,
    };
  }

  return {
    incidence: 0.35,
    inPareto80: false,
    matchedTopic: null,
  };
}

export function getExpandedTopicCatalog(
  boards: TargetExamBoard[]
): Array<{ grandeAreaId: GrandeAreaId; label: string; shortArea: string }> {
  const selectedBoards = boards.length > 0 ? boards : (['UEPA'] as TargetExamBoard[]);
  const seen = new Set<string>();
  const catalog: Array<{
    grandeAreaId: GrandeAreaId;
    label: string;
    shortArea: string;
  }> = [];

  for (const board of selectedBoards) {
    const entries = TARGET_EXAM_PARETO_MATRIX[board] ?? [];
    for (const entry of entries) {
      const key = `${entry.grandeAreaId}::${normalizeMedicalText(entry.topic)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      catalog.push({
        grandeAreaId: entry.grandeAreaId,
        label: entry.topic,
        shortArea: entry.shortArea,
      });
    }
  }

  return catalog;
}

export const MIN_BANK_QUESTIONS_FOR_BOARD = 3;

const TARGET_BOARD_ALIASES: Record<TargetExamBoard, string[]> = {
  UEPA: ['uepa'],
  ENARE: ['enare', 'ebserh'],
  UFRGS: ['ufrgs', 'hcpa'],
  'USP-SP': ['usp sp', 'fmusp', 'usp'],
  'SUS-SP': ['sus sp', 'quadrix sus'],
};

export interface BankTopicIncidenceEntry {
  label: string;
  grandeAreaId: GrandeAreaId;
  count: number;
  incidence: number; // 0..1 normalized against top topic count for the board
  inPareto80: boolean;
}

export interface BankBoardIncidenceProfile {
  board: TargetExamBoard;
  totalQuestions: number;
  usedFallback: boolean;
  topicIncidence: Map<string, BankTopicIncidenceEntry>;
  areaShare: Map<GrandeAreaId, number>;
}

function questionMatchesTargetBoard(
  q: MedicalQuestion,
  board: TargetExamBoard
): boolean {
  const normInst = normalizeMedicalText(q.instituicao ?? '');
  const normBanca = normalizeMedicalText(q.banca ?? '');
  const aliases = TARGET_BOARD_ALIASES[board] ?? [normalizeMedicalText(board)];

  return aliases.some(
    (alias) =>
      normInst === alias ||
      normBanca === alias ||
      normInst.includes(alias) ||
      normBanca.includes(alias)
  );
}

/**
 * Computes real topic and area incidence for a target exam board exclusively
 * from the questions currently present in the question bank. Falls back only
 * when fewer than `minQuestions` exist for that board.
 */
export function buildBankIncidenceByBoard(
  questions: MedicalQuestion[],
  board: TargetExamBoard,
  minQuestions: number = MIN_BANK_QUESTIONS_FOR_BOARD
): BankBoardIncidenceProfile {
  const matched = Array.isArray(questions)
    ? questions.filter((q) => q && questionMatchesTargetBoard(q, board))
    : [];

  if (matched.length < minQuestions) {
    return {
      board,
      totalQuestions: matched.length,
      usedFallback: true,
      topicIncidence: new Map(),
      areaShare: new Map(),
    };
  }

  const rawTopicCounts = new Map<
    string,
    { label: string; grandeAreaId: GrandeAreaId; count: number }
  >();
  const rawAreaCounts = new Map<GrandeAreaId, number>();

  for (const q of matched) {
    const areaId = q.grandeAreaId;
    rawAreaCounts.set(areaId, (rawAreaCounts.get(areaId) ?? 0) + 1);

    const rawTema = typeof q.tema === 'string' ? q.tema.trim() : '';
    if (!rawTema) continue;
    const normTema = normalizeMedicalText(rawTema);
    const existing = rawTopicCounts.get(normTema);
    if (existing) {
      existing.count += 1;
    } else {
      rawTopicCounts.set(normTema, {
        label: rawTema,
        grandeAreaId: areaId,
        count: 1,
      });
    }
  }

  const sortedTopics = Array.from(rawTopicCounts.entries()).sort(
    (a, b) => b[1].count - a[1].count
  );
  const maxCount = sortedTopics[0]?.[1].count ?? 1;
  const totalWithTema =
    sortedTopics.reduce((acc, [, entry]) => acc + entry.count, 0) || matched.length;

  const topicIncidence = new Map<string, BankTopicIncidenceEntry>();
  let cumulative = 0;

  sortedTopics.forEach(([key, entry], idx) => {
    const prevShare = cumulative / totalWithTema;
    cumulative += entry.count;
    // Pareto 80/20: include top topics until crossing 80% cumulative volume (always at least top 1)
    const inPareto80 = idx === 0 || prevShare < 0.8;
    topicIncidence.set(key, {
      label: entry.label,
      grandeAreaId: entry.grandeAreaId,
      count: entry.count,
      incidence: Number((entry.count / maxCount).toFixed(4)),
      inPareto80,
    });
  });

  const areaShare = new Map<GrandeAreaId, number>();
  for (const [areaId, count] of rawAreaCounts.entries()) {
    areaShare.set(areaId, count / matched.length);
  }

  return {
    board,
    totalQuestions: matched.length,
    usedFallback: false,
    topicIncidence,
    areaShare,
  };
}

export function resolveTopicIncidenceFromBank(
  topicLabel: string,
  grandeAreaId: GrandeAreaId,
  profile: BankBoardIncidenceProfile
): { incidence: number; inPareto80: boolean; usedFallback: boolean } {
  if (profile.usedFallback) {
    const fallback = resolveTopicExamIncidence(
      topicLabel,
      grandeAreaId,
      profile.board
    );
    return {
      incidence: fallback.incidence,
      inPareto80: fallback.inPareto80,
      usedFallback: true,
    };
  }

  const normLabel = normalizeMedicalText(topicLabel);
  const direct = profile.topicIncidence.get(normLabel);
  if (direct) {
    return {
      incidence: direct.incidence,
      inPareto80: direct.inPareto80,
      usedFallback: false,
    };
  }

  // Resilient partial match against real bank topics for this board
  for (const [key, entry] of profile.topicIncidence.entries()) {
    if (
      (key.length >= 4 && normLabel.includes(key)) ||
      (normLabel.length >= 4 && key.includes(normLabel))
    ) {
      return {
        incidence: entry.incidence,
        inPareto80: entry.inPareto80,
        usedFallback: false,
      };
    }
  }

  // Topic has 0 questions for this board: assign low floor proportional to area presence
  const share = profile.areaShare.get(grandeAreaId) ?? 0;
  return {
    incidence: Math.max(0.05, Number((share * 0.4).toFixed(4))),
    inPareto80: false,
    usedFallback: false,
  };
}
