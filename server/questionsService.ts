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
    anulada: Boolean(row.is_annulled),
    desatualizada: Boolean(row.is_outdated),
    enunciado: row.statement,
    labTable: Array.isArray(row.lab_table) ? (row.lab_table as LabRow[]) : undefined,
    clinicalImage:
      row.clinical_image && typeof row.clinical_image === 'object'
        ? (row.clinical_image as ClinicalImage)
        : undefined,
    alternativas,
    gabaritoOficial: (String(row.correct_option || 'A').toUpperCase() as AlternativeLetter),
    totalRespostasComunidade: 0,
    taxaAcertoGlobal: 60,
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
      reference_source, clinical_image, lab_table, is_annulled, is_outdated
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
        reference_source, clinical_image, lab_table, is_annulled, is_outdated
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
