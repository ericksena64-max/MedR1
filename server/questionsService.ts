import type { QueryResult, QueryResultRow } from 'pg';
import { getDbPool } from './db.ts';
import type {
  AlternativeLetter,
  ClinicalImage,
  ExamType,
  GrandeAreaId,
  LabRow,
  MedicalQuestion,
  QuestionAlternative,
} from '../src/types/medical.ts';

export interface QuestionsQueryParams {
  search?: string;
  grandeAreaId?: string;
  tema?: string;
  banca?: string;
  instituicao?: string;
  regiao?: string;
  ano?: number;
  comImagens?: boolean;
  excluirAnuladasDesatualizadas?: boolean;
  cursor?: string;
  limit?: number;
}

export interface PaginatedQuestionsResult {
  mode: 'postgres';
  items: MedicalQuestion[];
  nextCursor: string | null;
  hasMore: boolean;
  limit: number;
}

export interface QuestionsServiceDeps {
  query?: <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ) => Promise<QueryResult<T>>;
}

interface QuestionCursor {
  examYear: number;
  id: string;
}

interface QuestionDbRow extends QueryResultRow {
  id: string;
  external_code: string | null;
  exam_board: string;
  institution: string | null;
  state_uf: string | null;
  region: string | null;
  exam_year: number | null;
  exam_type: string;
  grande_area_id: string;
  specialty: string;
  topic: string | null;
  subtopic: string | null;
  statement: string;
  options: unknown;
  correct_option: string;
  explanation: string | null;
  clinical_pearl: string | null;
  reference_source: string | null;
  clinical_image: unknown;
  lab_table: unknown;
  is_annulled: boolean;
  is_outdated: boolean;
  taxa_acerto_base?: number | string | null;
  tentativas_unicas?: number | string | null;
  acertos_primeira_tentativa?: number | string | null;
  taxa_acerto_global?: number | string | null;
  analise_banca?: unknown;
  mapa_distratores?: unknown;
}

export interface FirstAttemptStatsInput {
  questionId: string;
  studentId: string;
  isCorrect: boolean;
  priorWeight?: number;
}

export interface FirstAttemptStatsResult {
  questionId: string;
  wasFirstAttempt: boolean;
  taxaAcertoBase: number;
  tentativasGlobais: number;
  acertosGlobais: number;
  taxaAcertoGlobal: number;
  difficultyLevel: string;
}

interface FirstAttemptRpcRow extends QueryResultRow {
  question_id: string;
  was_first_attempt: boolean;
  taxa_acerto_base: number | string;
  tentativas_unicas: number | string;
  acertos_primeira_tentativa: number | string;
  taxa_acerto_global: number | string;
  difficulty_level: string;
}

export function encodeQuestionCursor(cursor: QuestionCursor): string {
  return Buffer.from(JSON.stringify(cursor), 'utf8').toString('base64url');
}

export function decodeQuestionCursor(raw?: string): QuestionCursor | null {
  if (!raw || typeof raw !== 'string') return null;
  try {
    const parsed = JSON.parse(
      Buffer.from(raw, 'base64url').toString('utf8')
    ) as Partial<QuestionCursor>;
    if (
      typeof parsed.examYear === 'number' &&
      Number.isInteger(parsed.examYear) &&
      typeof parsed.id === 'string' &&
      parsed.id.trim().length > 0
    ) {
      return { examYear: parsed.examYear, id: parsed.id.trim() };
    }
    return null;
  } catch {
    return null;
  }
}

function toFiniteNumber(value: unknown, fallback: number): number {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

function parseAnaliseBanca(raw: unknown): MedicalQuestion['analiseBanca'] {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const obj = raw as Record<string, unknown>;
  const conceitoCentral =
    typeof obj.conceitoCentral === 'string' ? obj.conceitoCentral.trim() : '';
  const raciocinioChave =
    typeof obj.raciocinioChave === 'string' ? obj.raciocinioChave.trim() : '';
  if (!conceitoCentral || !raciocinioChave) return undefined;
  const armadilhaBanca =
    typeof obj.armadilhaBanca === 'string' ? obj.armadilhaBanca.trim() : '';
  return {
    conceitoCentral,
    raciocinioChave,
    ...(armadilhaBanca ? { armadilhaBanca } : {}),
  };
}

function parseMapaDistratores(raw: unknown): Record<string, string> | undefined {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const result: Record<string, string> = {};
  for (const [key, val] of Object.entries(raw as Record<string, unknown>)) {
    const letter = key.trim().toUpperCase();
    if (/^[A-E]$/.test(letter) && typeof val === 'string' && val.trim().length > 0) {
      result[letter] = val.trim();
    }
  }
  return Object.keys(result).length > 0 ? result : undefined;
}

function mapDbRowToMedicalQuestion(row: QuestionDbRow): MedicalQuestion {
  const rawOptions = Array.isArray(row.options) ? row.options : [];
  const alternativas: QuestionAlternative[] = rawOptions.map((opt) => {
    const item = opt as Record<string, unknown>;
    return {
      letter: (String(item.letter || 'A').toUpperCase() as AlternativeLetter),
      text: String(item.text || ''),
      explanation: String(item.explanation || ''),
      communityPct:
        typeof item.communityPct === 'number' && Number.isFinite(item.communityPct)
          ? item.communityPct
          : 0,
    };
  });

  const referencias = row.reference_source
    ? row.reference_source
        .split(/\n|;/)
        .map((r) => r.trim())
        .filter(Boolean)
    : [];

  const isAnnulled = Boolean(row.is_annulled);
  const defaultAccuracy = isAnnulled ? 0 : 58.4;
  const taxaAcertoBase = isAnnulled
    ? 0
    : toFiniteNumber(row.taxa_acerto_base, defaultAccuracy);
  const tentativasGlobais = Math.max(
    0,
    Math.trunc(toFiniteNumber(row.tentativas_unicas, 0))
  );
  const acertosGlobais = Math.max(
    0,
    Math.min(
      tentativasGlobais,
      Math.trunc(toFiniteNumber(row.acertos_primeira_tentativa, 0))
    )
  );
  const taxaAcertoGlobal = isAnnulled
    ? 0
    : toFiniteNumber(row.taxa_acerto_global, taxaAcertoBase);

  const analiseBanca = isAnnulled ? undefined : parseAnaliseBanca(row.analise_banca);
  const mapaDistratores = isAnnulled ? undefined : parseMapaDistratores(row.mapa_distratores);

  return {
    id: row.id,
    code: row.external_code || row.id,
    grandeAreaId: row.grande_area_id as GrandeAreaId,
    grandeArea: row.specialty,
    tema: row.topic || 'Geral',
    subtema: row.subtopic || 'Geral',
    banca: row.exam_board,
    instituicao: row.institution || row.exam_board,
    estado: (row.state_uf || 'BR').trim(),
    regiao: row.region || 'Nacional',
    ano: row.exam_year ?? new Date().getFullYear(),
    tipoProva: (row.exam_type as ExamType) || 'Acesso Direto',
    anulada: isAnnulled,
    desatualizada: Boolean(row.is_outdated),
    enunciado: row.statement,
    labTable: Array.isArray(row.lab_table) ? (row.lab_table as LabRow[]) : undefined,
    clinicalImage:
      row.clinical_image && typeof row.clinical_image === 'object'
        ? (row.clinical_image as ClinicalImage)
        : undefined,
    alternativas,
    gabaritoOficial: (String(row.correct_option || 'A').toUpperCase() as AlternativeLetter),
    totalRespostasComunidade: tentativasGlobais,
    taxaAcertoGlobal,
    taxaAcertoBase,
    tentativasGlobais,
    acertosGlobais,
    ...(analiseBanca ? { analiseBanca } : {}),
    ...(mapaDistratores ? { mapaDistratores } : {}),
    comentarioGeral: row.explanation || '',
    perolaClinica: row.clinical_pearl || '',
    referencias,
  };
}

function resolveQueryFn(deps: QuestionsServiceDeps) {
  if (deps.query) return deps.query;
  const pool = getDbPool();
  if (!pool) return null;
  return <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ) => pool.query<T>(text, params);
}

/**
 * Queries the PostgreSQL `questions` catalog with cursor-based pagination
 * (`exam_year DESC, id ASC`) and Portuguese Full-Text Search (`search_vector`).
 * Returns `null` when PostgreSQL is not configured (local-fallback mode).
 */
export async function queryPaginatedQuestions(
  params: QuestionsQueryParams,
  deps: QuestionsServiceDeps = {}
): Promise<PaginatedQuestionsResult | null> {
  const queryFn = resolveQueryFn(deps);
  if (!queryFn) return null;

  const limit = Math.max(1, Math.min(100, Math.floor(params.limit ?? 25)));
  const conditions: string[] = ['is_active = TRUE'];
  const values: unknown[] = [];

  if (params.grandeAreaId) {
    values.push(params.grandeAreaId);
    conditions.push(`grande_area_id = $${values.length}`);
  }
  if (params.tema) {
    values.push(params.tema);
    conditions.push(`topic = $${values.length}`);
  }
  if (params.banca) {
    values.push(params.banca);
    conditions.push(`exam_board = $${values.length}`);
  }
  if (params.instituicao) {
    values.push(params.instituicao);
    conditions.push(`institution = $${values.length}`);
  }
  if (params.regiao) {
    values.push(params.regiao);
    conditions.push(`region = $${values.length}`);
  }
  if (typeof params.ano === 'number' && Number.isInteger(params.ano)) {
    values.push(params.ano);
    conditions.push(`exam_year = $${values.length}`);
  }
  if (params.comImagens) {
    conditions.push('clinical_image IS NOT NULL');
  }
  if (params.excluirAnuladasDesatualizadas) {
    conditions.push('is_annulled = FALSE AND is_outdated = FALSE');
  }
  if (params.search && params.search.trim().length > 0) {
    values.push(params.search.trim().slice(0, 160));
    conditions.push(`search_vector @@ plainto_tsquery('portuguese', $${values.length})`);
  }

  const decodedCursor = decodeQuestionCursor(params.cursor);
  if (decodedCursor) {
    values.push(decodedCursor.examYear, decodedCursor.id);
    const yearIdx = values.length - 1;
    const idIdx = values.length;
    conditions.push(
      `(COALESCE(exam_year, 0) < $${yearIdx} OR (COALESCE(exam_year, 0) = $${yearIdx} AND id > $${idIdx}))`
    );
  }

  values.push(limit + 1);
  const limitIdx = values.length;

  const sql = `
    SELECT
      id, external_code, exam_board, institution, state_uf, region,
      exam_year, exam_type, grande_area_id, specialty, topic, subtopic,
      statement, options, correct_option, explanation, clinical_pearl,
      reference_source, clinical_image, lab_table, is_annulled, is_outdated,
      taxa_acerto_base, tentativas_unicas, acertos_primeira_tentativa, taxa_acerto_global,
      analise_banca, mapa_distratores
    FROM questions
    WHERE ${conditions.join(' AND ')}
    ORDER BY COALESCE(exam_year, 0) DESC, id ASC
    LIMIT $${limitIdx}
  `;

  const result = await queryFn<QuestionDbRow>(sql, values);
  const rows = result.rows ?? [];
  const hasMore = rows.length > limit;
  const pageRows = hasMore ? rows.slice(0, limit) : rows;
  const lastRow = pageRows[pageRows.length - 1];

  return {
    mode: 'postgres',
    items: pageRows.map(mapDbRowToMedicalQuestion),
    nextCursor:
      hasMore && lastRow
        ? encodeQuestionCursor({
            examYear: lastRow.exam_year ?? 0,
            id: lastRow.id,
          })
        : null,
    hasMore,
    limit,
  };
}

/**
 * Fetches a single active question by deterministic ID (`q-uepa-2026-01`).
 * Returns `null` when PostgreSQL is not configured, or `{ found: false }` when missing.
 */
export async function getQuestionById(
  questionId: string,
  deps: QuestionsServiceDeps = {}
): Promise<{ found: boolean; item: MedicalQuestion | null } | null> {
  const queryFn = resolveQueryFn(deps);
  if (!queryFn) return null;

  const cleanId = questionId.trim().slice(0, 120);
  if (!cleanId) return { found: false, item: null };

  const result = await queryFn<QuestionDbRow>(
    `
      SELECT
        id, external_code, exam_board, institution, state_uf, region,
        exam_year, exam_type, grande_area_id, specialty, topic, subtopic,
        statement, options, correct_option, explanation, clinical_pearl,
        reference_source, clinical_image, lab_table, is_annulled, is_outdated,
        taxa_acerto_base, tentativas_unicas, acertos_primeira_tentativa, taxa_acerto_global,
        analise_banca, mapa_distratores
      FROM questions
      WHERE id = $1 AND is_active = TRUE
      LIMIT 1
    `,
    [cleanId]
  );

  const row = result.rows?.[0];
  if (!row) return { found: false, item: null };
  return { found: true, item: mapDbRowToMedicalQuestion(row) };
}

/**
 * Atomically registers a student's first attempt for a question in PostgreSQL via
 * the `register_first_attempt_stats` RPC function (Bayesian smoothing).
 * Returns `null` when PostgreSQL is not configured.
 */
export async function registerFirstAttemptStats(
  input: FirstAttemptStatsInput,
  deps: QuestionsServiceDeps = {}
): Promise<{ found: boolean; stats: FirstAttemptStatsResult | null } | null> {
  const queryFn = resolveQueryFn(deps);
  if (!queryFn) return null;

  const cleanId = input.questionId.trim().slice(0, 120);
  if (!cleanId) return { found: false, stats: null };

  const priorWeight =
    typeof input.priorWeight === 'number' &&
    Number.isInteger(input.priorWeight) &&
    input.priorWeight >= 1
      ? input.priorWeight
      : 25;

  const result = await queryFn<FirstAttemptRpcRow>(
    `
      SELECT
        question_id,
        was_first_attempt,
        taxa_acerto_base,
        tentativas_unicas,
        acertos_primeira_tentativa,
        taxa_acerto_global,
        difficulty_level
      FROM register_first_attempt_stats($1, $2::UUID, $3, $4)
    `,
    [cleanId, input.studentId.trim(), Boolean(input.isCorrect), priorWeight]
  );

  const row = result.rows?.[0];
  if (!row) return { found: false, stats: null };

  return {
    found: true,
    stats: {
      questionId: row.question_id,
      wasFirstAttempt: Boolean(row.was_first_attempt),
      taxaAcertoBase: toFiniteNumber(row.taxa_acerto_base, 58.4),
      tentativasGlobais: Math.max(0, Math.trunc(toFiniteNumber(row.tentativas_unicas, 0))),
      acertosGlobais: Math.max(
        0,
        Math.trunc(toFiniteNumber(row.acertos_primeira_tentativa, 0))
      ),
      taxaAcertoGlobal: toFiniteNumber(row.taxa_acerto_global, 58.4),
      difficultyLevel: String(row.difficulty_level || 'medium'),
    },
  };
}
