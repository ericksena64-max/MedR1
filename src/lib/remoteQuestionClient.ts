import type { MedicalQuestion, QuestionFilters } from '../types/medical';

export interface RemoteQuestionsPage {
  mode: 'postgres';
  items: MedicalQuestion[];
  nextCursor: string | null;
  hasMore: boolean;
  limit: number;
}

export interface RemoteQuestionClientOptions {
  baseUrl?: string;
  fetchImpl?: typeof fetch;
}

/**
 * Fetches a cursor-paginated slice of the official question bank from PostgreSQL (`/api/questions`).
 * Returns `null` when offline or when the backend reports `503 local-fallback`,
 * allowing the UI to fall back seamlessly to the local lazy-chunk bank.
 */
export async function fetchRemoteQuestionsPage(
  filters: Partial<QuestionFilters>,
  pagination: { cursor?: string | null; limit?: number } = {},
  options: RemoteQuestionClientOptions = {}
): Promise<RemoteQuestionsPage | null> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return null;
  }

  const baseUrl = options.baseUrl ?? '';
  const fetchFn = options.fetchImpl ?? globalThis.fetch.bind(globalThis);
  const params = new URLSearchParams();

  if (filters.search?.trim()) params.set('q', filters.search.trim());
  if (filters.grandeAreaId) params.set('grandeAreaId', filters.grandeAreaId);
  if (filters.tema) params.set('tema', filters.tema);
  if (filters.banca) params.set('banca', filters.banca);
  if (filters.instituicao) params.set('instituicao', filters.instituicao);
  if (filters.regiao) params.set('regiao', filters.regiao);
  if (filters.ano) params.set('ano', String(filters.ano));
  if (filters.comImagens) params.set('comImagens', 'true');
  if (filters.excluirAnuladasDesatualizadas) {
    params.set('excluirAnuladasDesatualizadas', 'true');
  }
  if (pagination.cursor) params.set('cursor', pagination.cursor);
  if (pagination.limit) params.set('limit', String(pagination.limit));

  try {
    const query = params.toString();
    const res = await fetchFn(`${baseUrl}/api/questions${query ? `?${query}` : ''}`);
    if (res.status === 503 || !res.ok) {
      return null;
    }
    return (await res.json()) as RemoteQuestionsPage;
  } catch {
    return null;
  }
}

/**
 * Fetches a single question by deterministic ID from `/api/questions/:id`.
 * Returns `null` in local-fallback/offline mode or when not found.
 */
export async function fetchRemoteQuestionById(
  questionId: string,
  options: RemoteQuestionClientOptions = {}
): Promise<MedicalQuestion | null> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    return null;
  }

  const baseUrl = options.baseUrl ?? '';
  const fetchFn = options.fetchImpl ?? globalThis.fetch.bind(globalThis);

  try {
    const res = await fetchFn(
      `${baseUrl}/api/questions/${encodeURIComponent(questionId)}`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { item?: MedicalQuestion };
    return data.item ?? null;
  } catch {
    return null;
  }
}
