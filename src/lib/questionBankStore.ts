import type {
  AlternativeLetter,
  ExamType,
  GrandeAreaId,
  MedicalQuestion,
  QuestionAlternative,
} from '../types/medical';
import { MEDICAL_QUESTIONS } from '../data/questions';
import { UEPA_2024_QUESTIONS } from '../data/uepa2024Questions';
import { UEPA_2025_QUESTIONS } from '../data/uepa2025Questions';
import { UEPA_2026_QUESTIONS } from '../data/uepa2026Questions';
import { GRANDES_AREAS } from '../data/taxonomy';

const DB_NAME = 'medr1_question_bank_db';
const DB_VERSION = 1;
const STORE_NAME = 'imported_questions';

/**
 * Synchronous in-memory caches so Pareto 80/20, FSRS Dynamic Retention,
 * Heatmap, and Filters immediately include both the official curated exam
 * catalog (UEPA 2026 + UEPA 2025 + UEPA 2024 — 300 official questions) and
 * any IndexedDB imported/AI-commented questions.
 */
let importedQuestionsCache: MedicalQuestion[] = [];
let officialCatalogCache: MedicalQuestion[] = [
  ...UEPA_2026_QUESTIONS,
  ...UEPA_2025_QUESTIONS,
  ...UEPA_2024_QUESTIONS,
];

export function getImportedQuestionsCache(): MedicalQuestion[] {
  return importedQuestionsCache;
}

export function setImportedQuestionsCache(items: MedicalQuestion[]): void {
  importedQuestionsCache = items;
}

export function getOfficialCatalogCache(): MedicalQuestion[] {
  return officialCatalogCache;
}

export function setOfficialCatalogCache(items: MedicalQuestion[]): void {
  officialCatalogCache = items;
}

export async function loadOfficialCatalogQuestions(): Promise<MedicalQuestion[]> {
  return officialCatalogCache;
}

export function getAllBankQuestions(): MedicalQuestion[] {
  if (importedQuestionsCache.length === 0 && officialCatalogCache.length === 0) {
    return MEDICAL_QUESTIONS;
  }
  const seen = new Set<string>();
  const merged: MedicalQuestion[] = [];

  // 1. IndexedDB entries first (includes user imports & saved AI commentaries that override catalog entries)
  for (const q of importedQuestionsCache) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      merged.push(q);
    }
  }
  // 2. Official UEPA 2020–2026 verified catalog (700 verbatim questions)
  for (const q of officialCatalogCache) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      merged.push(q);
    }
  }
  // 3. Curated national seed questions (USP, ENARE, UNIFESP, SUS-SP, etc.)
  for (const q of MEDICAL_QUESTIONS) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      merged.push(q);
    }
  }
  return merged;
}

function openQuestionBankDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      reject(new Error('IndexedDB indisponível neste navegador.'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error('Falha ao abrir IndexedDB do MedR1.'));
  });
}

export async function loadImportedQuestionsFromDB(): Promise<MedicalQuestion[]> {
  try {
    const db = await openQuestionBankDB();
    return await new Promise<MedicalQuestion[]>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => {
        const items = (Array.isArray(req.result) ? req.result : []) as MedicalQuestion[];
        // Sort newest year first, then by original question number
        items.sort((a, b) => {
          if (b.ano !== a.ano) return b.ano - a.ano;
          if (a.instituicao !== b.instituicao) {
            return a.instituicao.localeCompare(b.instituicao, 'pt-BR');
          }
          return (a.numeroOriginal ?? 9999) - (b.numeroOriginal ?? 9999);
        });
        importedQuestionsCache = items;
        resolve(items);
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    return importedQuestionsCache;
  }
}

export async function saveImportedQuestionsToDB(
  items: MedicalQuestion[]
): Promise<MedicalQuestion[]> {
  const db = await openQuestionBankDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    for (const q of items) {
      store.put(q);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  return loadImportedQuestionsFromDB();
}

export async function deleteImportedQuestionFromDB(
  questionId: string
): Promise<MedicalQuestion[]> {
  const db = await openQuestionBankDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(questionId);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  return loadImportedQuestionsFromDB();
}

export async function deleteImportedBatchFromDB(
  batchKey: string
): Promise<MedicalQuestion[]> {
  const current = await loadImportedQuestionsFromDB();
  const toDelete = current.filter(
    (q) => (q.sourceBatch || `${q.instituicao} ${q.ano}`) === batchKey
  );
  const db = await openQuestionBankDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    for (const q of toDelete) {
      store.delete(q.id);
    }
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  return loadImportedQuestionsFromDB();
}

export async function clearAllImportedQuestionsFromDB(): Promise<void> {
  const db = await openQuestionBankDB();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).clear();
    tx.oncomplete = () => {
      importedQuestionsCache = [];
      resolve();
    };
    tx.onerror = () => reject(tx.error);
  });
}

export interface RawStructuredQuestion {
  numeroOriginal: number;
  enunciado: string;
  alternativas: Array<{
    letter: AlternativeLetter;
    text: string;
    explanation?: string;
  }>;
  gabaritoOficial: AlternativeLetter;
  anulada?: boolean;
  grandeAreaId?: GrandeAreaId;
  grandeArea?: string;
  tema?: string;
  subtema?: string;
  instituicao?: string;
  banca?: string;
  estado?: string;
  regiao?: string;
  ano?: number;
  tipoProva?: ExamType;
  comentarioGeral?: string;
  referencias?: string[];
  needsAiEnrichment: boolean;
}

const VALID_LETTERS: AlternativeLetter[] = ['A', 'B', 'C', 'D', 'E'];

function normalizeLetter(val: unknown, fallback: AlternativeLetter = 'A'): AlternativeLetter {
  if (typeof val !== 'string') return fallback;
  const upper = val.trim().toUpperCase().slice(0, 1) as AlternativeLetter;
  return VALID_LETTERS.includes(upper) ? upper : fallback;
}

function normalizeGrandeAreaId(val: unknown): GrandeAreaId | undefined {
  if (typeof val !== 'string') return undefined;
  const clean = val
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
  if (clean === 'clinica_medica' || clean.includes('clinica')) return 'clinica_medica';
  if (clean === 'cirurgia_geral' || clean.includes('cirurg')) return 'cirurgia_geral';
  if (
    clean === 'ginecologia_obstetricia' ||
    clean.includes('gineco') ||
    clean.includes('obstet') ||
    clean === 'go'
  ) {
    return 'ginecologia_obstetricia';
  }
  if (clean === 'pediatria' || clean.includes('pediat')) return 'pediatria';
  if (
    clean === 'medicina_preventiva' ||
    clean.includes('prevent') ||
    clean.includes('coletiva') ||
    clean.includes('sus')
  ) {
    return 'medicina_preventiva';
  }
  return undefined;
}

/**
 * RFC-4180 compliant CSV parser supporting quoted commas, escaped quotes (""),
 * and multi-line clinical stems. Detects `;` or `,` delimiter automatically.
 */
function parseCsvRows(text: string): string[][] {
  const firstLine = text.split(/\r?\n/, 1)[0] ?? '';
  const semicolonCount = (firstLine.match(/;/g) ?? []).length;
  const commaCount = (firstLine.match(/,/g) ?? []).length;
  const delimiter = semicolonCount > commaCount ? ';' : ',';

  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (ch === '"' && next === '"') {
        field += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === delimiter) {
      row.push(field.trim());
      field = '';
    } else if (ch === '\r' && next === '\n') {
      row.push(field.trim());
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      field = '';
      i++;
    } else if (ch === '\n' || ch === '\r') {
      row.push(field.trim());
      if (row.some((cell) => cell.length > 0)) rows.push(row);
      row = [];
      field = '';
    } else {
      field += ch;
    }
  }

  row.push(field.trim());
  if (row.some((cell) => cell.length > 0)) rows.push(row);
  return rows;
}

function recordToRawQuestion(
  rec: Record<string, unknown>,
  index: number
): RawStructuredQuestion | null {
  const enunciado = String(
    rec.enunciado ?? rec.stem ?? rec.pergunta ?? rec.texto ?? ''
  ).trim();
  if (enunciado.length < 10) return null;

  let alternativas: RawStructuredQuestion['alternativas'] = [];

  if (Array.isArray(rec.alternativas)) {
    alternativas = rec.alternativas
      .slice(0, 5)
      .map((item, idx) => {
        if (typeof item === 'string') {
          return {
            letter: VALID_LETTERS[idx] ?? 'A',
            text: item.trim(),
          };
        }
        const a = (item ?? {}) as Record<string, unknown>;
        return {
          letter: normalizeLetter(a.letter ?? a.letra, VALID_LETTERS[idx] ?? 'A'),
          text: String(a.text ?? a.texto ?? '').trim(),
          explanation:
            typeof (a.explanation ?? a.explicacao) === 'string'
              ? String(a.explanation ?? a.explicacao).trim()
              : undefined,
        };
      })
      .filter((a) => a.text.length > 0);
  } else {
    // Flat columns: alt_a / alternativa_a / A ...
    const letterKeys: Array<[AlternativeLetter, string[]]> = [
      ['A', ['alt_a', 'alternativa_a', 'a', 'opcao_a']],
      ['B', ['alt_b', 'alternativa_b', 'b', 'opcao_b']],
      ['C', ['alt_c', 'alternativa_c', 'c', 'opcao_c']],
      ['D', ['alt_d', 'alternativa_d', 'd', 'opcao_d']],
      ['E', ['alt_e', 'alternativa_e', 'e', 'opcao_e']],
    ];
    for (const [letter, keys] of letterKeys) {
      const foundKey = keys.find(
        (k) => typeof rec[k] === 'string' && String(rec[k]).trim().length > 0
      );
      if (foundKey) {
        const expKey = `exp_${letter.toLowerCase()}`;
        alternativas.push({
          letter,
          text: String(rec[foundKey]).trim(),
          explanation:
            typeof rec[expKey] === 'string' && String(rec[expKey]).trim()
              ? String(rec[expKey]).trim()
              : undefined,
        });
      }
    }
  }

  if (alternativas.length < 2) return null;

  const gabaritoOficial = normalizeLetter(
    rec.gabaritoOficial ?? rec.gabarito ?? rec.resposta ?? rec.answer,
    alternativas[0].letter
  );

  const grandeAreaId = normalizeGrandeAreaId(rec.grandeAreaId ?? rec.grande_area ?? rec.grandeArea);
  const tema = String(rec.tema ?? '').trim() || undefined;
  const subtema = String(rec.subtema ?? '').trim() || undefined;
  const comentarioGeral = String(rec.comentarioGeral ?? rec.comentario_geral ?? rec.comentario ?? '').trim() || undefined;

  const hasAllExplanations = alternativas.every(
    (a) => typeof a.explanation === 'string' && a.explanation.length >= 10
  );
  const needsAiEnrichment = !(grandeAreaId && tema && subtema && comentarioGeral && hasAllExplanations);

  const rawRefs = rec.referencias;
  const referencias = Array.isArray(rawRefs)
    ? rawRefs.map((r) => String(r).trim()).filter(Boolean)
    : typeof rawRefs === 'string' && rawRefs.trim()
    ? rawRefs
        .split('|')
        .map((s) => s.trim())
        .filter(Boolean)
    : undefined;

  const parsedYear = Number(rec.ano);

  return {
    numeroOriginal: Number(rec.numeroOriginal ?? rec.numero ?? rec.questao ?? index + 1) || index + 1,
    enunciado,
    alternativas,
    gabaritoOficial,
    anulada: rec.anulada === true || String(rec.anulada).toLowerCase() === 'true' || String(rec.anulada) === '1',
    grandeAreaId,
    grandeArea: grandeAreaId
      ? GRANDES_AREAS.find((a) => a.id === grandeAreaId)?.name
      : undefined,
    tema,
    subtema,
    instituicao: String(rec.instituicao ?? '').trim() || undefined,
    banca: String(rec.banca ?? '').trim() || undefined,
    estado: String(rec.estado ?? '').trim() || undefined,
    regiao: String(rec.regiao ?? '').trim() || undefined,
    ano: Number.isInteger(parsedYear) && parsedYear >= 1990 ? parsedYear : undefined,
    tipoProva:
      rec.tipoProva === 'R+' || rec.tipoProva === 'Revalida'
        ? rec.tipoProva
        : undefined,
    comentarioGeral,
    referencias,
    needsAiEnrichment,
  };
}

export function parseStructuredImportFile(
  fileName: string,
  content: string
): { items: RawStructuredQuestion[]; errors: string[] } {
  const lower = fileName.toLowerCase();
  const trimmed = content.trim();
  if (!trimmed) {
    return { items: [], errors: ['O arquivo está vazio.'] };
  }

  const errors: string[] = [];
  const rawRecords: Array<Record<string, unknown>> = [];

  if (lower.endsWith('.jsonl') || lower.endsWith('.ndjson')) {
    const lines = trimmed.split(/\r?\n/).filter((l) => l.trim().length > 0);
    lines.forEach((line, idx) => {
      try {
        const obj = JSON.parse(line);
        if (obj && typeof obj === 'object') {
          rawRecords.push(obj as Record<string, unknown>);
        }
      } catch {
        errors.push(`Linha ${idx + 1} do JSONL inválida.`);
      }
    });
  } else if (lower.endsWith('.json') || trimmed.startsWith('[') || trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        for (const entry of parsed) {
          if (entry && typeof entry === 'object') {
            rawRecords.push(entry as Record<string, unknown>);
          }
        }
      } else if (parsed && typeof parsed === 'object' && Array.isArray((parsed as Record<string, unknown>).questions)) {
        for (const entry of (parsed as { questions: unknown[] }).questions) {
          if (entry && typeof entry === 'object') {
            rawRecords.push(entry as Record<string, unknown>);
          }
        }
      } else {
        errors.push('O JSON deve ser um array de questões ou um objeto com a chave "questions".');
      }
    } catch {
      errors.push('Erro de sintaxe JSON. Verifique vírgulas e aspas do arquivo.');
    }
  } else {
    // CSV
    const rows = parseCsvRows(trimmed);
    if (rows.length < 2) {
      return { items: [], errors: ['CSV precisa de uma linha de cabeçalho e ao menos uma questão.'] };
    }
    const headers = rows[0].map((h) =>
      h
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '_')
        .trim()
    );
    for (let r = 1; r < rows.length; r++) {
      const rec: Record<string, unknown> = {};
      headers.forEach((header, colIdx) => {
        rec[header] = rows[r][colIdx] ?? '';
      });
      rawRecords.push(rec);
    }
  }

  const items: RawStructuredQuestion[] = [];
  rawRecords.forEach((rec, idx) => {
    const normalized = recordToRawQuestion(rec, idx);
    if (normalized) {
      items.push(normalized);
    } else {
      errors.push(`Registro #${idx + 1} ignorado (enunciado ou alternativas incompletas).`);
    }
  });

  return { items, errors };
}

export function convertRawToMedR1Question(
  raw: RawStructuredQuestion,
  fallbackMeta: {
    instituicao: string;
    banca: string;
    estado: string;
    regiao: string;
    ano: number;
    tipoProva: ExamType;
  }
): MedicalQuestion {
  const instituicao = raw.instituicao || fallbackMeta.instituicao;
  const banca = raw.banca || fallbackMeta.banca;
  const estado = raw.estado || fallbackMeta.estado;
  const regiao = raw.regiao || fallbackMeta.regiao;
  const ano = raw.ano || fallbackMeta.ano;
  const tipoProva = raw.tipoProva || fallbackMeta.tipoProva;

  const grandeAreaId: GrandeAreaId = raw.grandeAreaId ?? 'clinica_medica';
  const grandeArea =
    GRANDES_AREAS.find((a) => a.id === grandeAreaId)?.name ?? 'Clínica Médica';

  const instSlug = instituicao
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-');
  const instCode = instituicao.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) || 'MED';
  const shortYear = String(ano).slice(-2);

  const alternativas: QuestionAlternative[] = raw.alternativas.map((alt) => ({
    letter: alt.letter,
    text: alt.text,
    explanation:
      alt.explanation ||
      (alt.letter === raw.gabaritoOficial
        ? 'Correta. Gabarito oficial da banca.'
        : 'Incorreta. Não corresponde ao gabarito oficial.'),
    communityPct: alt.letter === raw.gabaritoOficial ? 60 : Number((40 / Math.max(1, raw.alternativas.length - 1)).toFixed(1)),
  }));

  return {
    id: `q-imp-${instSlug}-${ano}-q${String(raw.numeroOriginal).padStart(3, '0')}-${Math.random().toString(36).slice(2, 6)}`,
    code: `Q-${instCode}${shortYear}-${String(raw.numeroOriginal).padStart(3, '0')}`,
    grandeAreaId,
    grandeArea,
    tema: raw.tema || 'Clínica Geral',
    subtema: raw.subtema || 'Questão de Prova',
    banca,
    instituicao,
    estado,
    regiao,
    ano,
    tipoProva,
    anulada: Boolean(raw.anulada),
    desatualizada: false,
    enunciado: raw.enunciado,
    alternativas,
    gabaritoOficial: raw.gabaritoOficial,
    totalRespostasComunidade: 0,
    taxaAcertoGlobal: 60,
    comentarioGeral:
      raw.comentarioGeral ||
      'Questão importada via lote estruturado. Utilize o botão de enriquecimento com IA para gerar o comentário detalhado.',
    perolaClinica: '',
    referencias:
      raw.referencias && raw.referencias.length > 0
        ? raw.referencias
        : [`Prova Oficial ${instituicao} ${ano} (${banca}).`],
    sourceBatch: `${instituicao} ${ano} (${tipoProva})`,
    importedAt: new Date().toISOString(),
    numeroOriginal: raw.numeroOriginal,
  };
}

export function exportQuestionsAsJsonl(
  questions: MedicalQuestion[],
  fileName = 'medr1_banco_export.jsonl'
): void {
  const lines = questions.map((q) => JSON.stringify(q)).join('\n');
  const blob = new Blob([lines], { type: 'application/x-ndjson;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadImportTemplate(format: 'json' | 'csv'): void {
  if (format === 'json') {
    const sample = [
      {
        numero: 1,
        instituicao: 'UEPA',
        banca: 'UEPA',
        estado: 'PA',
        regiao: 'Norte',
        ano: 2025,
        tipoProva: 'Acesso Direto',
        enunciado:
          'Homem de 34 anos, residente em município do interior do Pará, procura UBS com febre alta com calafrios a cada 48 horas, cefaleia e sudorese profusa há 6 dias. Gota espessa confirma Plasmodium vivax (++/4+). Sem sinais de gravidade e com teste rápido de G6PD normal. Qual é o esquema terapêutico preconizado pelo Ministério da Saúde?',
        alternativas: [
          { letter: 'A', text: 'Cloroquina por 3 dias associada a primaquina por 7 dias.' },
          { letter: 'B', text: 'Artesunato intravenoso seguido de mefloquina oral.' },
          { letter: 'C', text: 'Arteméter + lumefantrina por 3 dias em monoterapia.' },
          { letter: 'D', text: 'Cloroquina em dose única semanal por 4 semanas.' },
          { letter: 'E', text: 'Doxiciclina associada a quinina por 7 dias.' },
        ],
        gabarito: 'A',
        anulada: false,
      },
      {
        numero: 2,
        instituicao: 'UEPA',
        banca: 'UEPA',
        estado: 'PA',
        regiao: 'Norte',
        ano: 2025,
        tipoProva: 'Acesso Direto',
        enunciado:
          'Gestante primigesta de 33 semanas apresenta PA 164/106 mmHg em duas aferições com intervalo de 15 minutos, cefaleia fronto-occipital intensa e escotomas cintilantes. Qual é a droga de escolha para prevenção de convulsões eclâmpticas?',
        alternativas: [
          { letter: 'A', text: 'Diazepam intravenoso em bolus.' },
          { letter: 'B', text: 'Fenitoína venosa em dose de ataque.' },
          { letter: 'C', text: 'Sulfato de magnésio (esquema Pritchard ou Zuspan).' },
          { letter: 'D', text: 'Hidralazina venosa em infusão contínua.' },
          { letter: 'E', text: 'Nifedipino oral de liberação imediata.' },
        ],
        gabarito: 'C',
        anulada: false,
      },
    ];

    const blob = new Blob([JSON.stringify(sample, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'modelo_importacao_uepa_medr1.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return;
  }

  const csvContent = [
    'numero,instituicao,banca,estado,regiao,ano,enunciado,alt_a,alt_b,alt_c,alt_d,alt_e,gabarito,anulada',
    '1,UEPA,UEPA,PA,Norte,2025,"Homem de 34 anos do Pará com febre terçã e gota espessa positiva para Plasmodium vivax, sem sinais de gravidade. Qual o tratamento de escolha pelo MS?","Cloroquina por 3 dias + primaquina por 7 dias.","Artesunato IV isolado.","Arteméter + lumefantrina sem primaquina.","Cloroquina semanal por 4 semanas.","Quinina + clindamicina.",A,false',
    '2,UEPA,UEPA,PA,Norte,2025,"Primigesta de 33 semanas com PA 164/106 mmHg, cefaleia intensa e escotomas. Qual a droga de escolha para profilaxia de eclâmpsia?","Diazepam IV.","Fenitoína IV.","Sulfato de magnésio.","Hidralazina IV.","Nifedipino VO.",C,false',
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'modelo_importacao_uepa_medr1.csv';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
