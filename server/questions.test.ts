import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import type { QueryResult, QueryResultRow } from 'pg';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp } from '../server.ts';
import { decodeQuestionCursor, type QuestionsServiceDeps } from './questionsService.ts';

async function startTestServer(options?: Parameters<typeof createApp>[0]) {
  const app = createApp(options);
  const server = await new Promise<Server>((resolve) => {
    const srv = app.listen(0, '127.0.0.1', () => resolve(srv));
  });
  const port = (server.address() as AddressInfo).port;
  return {
    baseUrl: `http://127.0.0.1:${port}`,
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      }),
  };
}

function makeDbRow(id: string, examYear = 2025) {
  return {
    id,
    external_code: id.toUpperCase(),
    exam_board: 'UEPA',
    institution: 'UEPA',
    state_uf: 'PA',
    region: 'Norte',
    exam_year: examYear,
    exam_type: 'Acesso Direto',
    grande_area_id: 'clinica_medica',
    specialty: 'Clínica Médica',
    topic: 'Cardiologia',
    subtopic: 'IAM com supra de ST',
    statement: 'Paciente com dor torácica típica.',
    options: [
      { letter: 'A', text: 'Angioplastia', explanation: 'Correta.', communityPct: 72 },
      { letter: 'B', text: 'Alta', explanation: 'Incorreta.', communityPct: 28 },
    ],
    correct_option: 'A',
    explanation: 'Reperfusão imediata.',
    clinical_pearl: 'Tempo porta-balão < 90 min.',
    reference_source: 'SBC 2024; Diretriz IAM',
    clinical_image: {
      url: '/assets/exams/usp-sp-2023/q001.png',
      modality: 'ECG',
      caption: 'Supra de ST',
      aspectRatio: '16:9',
    },
    lab_table: null,
    is_annulled: false,
    is_outdated: false,
  };
}

describe('P2 Escala — /api/questions (Paginação por cursor + FTS PostgreSQL)', () => {
  const closers: Array<() => Promise<void>> = [];

  afterEach(async () => {
    while (closers.length > 0) {
      const close = closers.pop();
      if (close) await close();
    }
    vi.restoreAllMocks();
  });

  it('retorna 503 local-fallback quando DATABASE_URL não está configurada', async () => {
    const prevDbUrl = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;
    try {
      const srv = await startTestServer();
      closers.push(srv.close);

      const listRes = await fetch(`${srv.baseUrl}/api/questions?grandeAreaId=clinica_medica`);
      expect(listRes.status).toBe(503);
      expect(await listRes.json()).toMatchObject({ mode: 'local-fallback' });

      const detailRes = await fetch(`${srv.baseUrl}/api/questions/q-uepa-2026-01`);
      expect(detailRes.status).toBe(503);
      expect(await detailRes.json()).toMatchObject({ mode: 'local-fallback' });
    } finally {
      if (prevDbUrl !== undefined) process.env.DATABASE_URL = prevDbUrl;
    }
  });

  it('executa filtros parametrizados + FTS português e retorna nextCursor quando há mais páginas', async () => {
    const calls: Array<{ sql: string; params: unknown[] }> = [];
    const mockQuery = vi.fn(async <T extends QueryResultRow = QueryResultRow>(
      sql: string,
      params: unknown[] = []
    ): Promise<QueryResult<T>> => {
      calls.push({ sql, params });
      return {
        rows: [
          makeDbRow('q-uepa-2026-01', 2026),
          makeDbRow('q-uepa-2026-02', 2026),
          makeDbRow('q-uepa-2025-01', 2025),
        ] as unknown as T[],
        rowCount: 3,
        command: 'SELECT',
        oid: 0,
        fields: [],
      };
    });

    const srv = await startTestServer({
      questionsDepsOverride: {
        query: mockQuery as unknown as QuestionsServiceDeps['query'],
      },
    });
    closers.push(srv.close);

    const res = await fetch(
      `${srv.baseUrl}/api/questions?q=infarto&grandeAreaId=clinica_medica&comImagens=true&limit=2`
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      mode: string;
      items: Array<{ id: string; referencias: string[] }>;
      hasMore: boolean;
      nextCursor: string | null;
      limit: number;
    };

    expect(body.mode).toBe('postgres');
    expect(body.items).toHaveLength(2);
    expect(body.items[0].id).toBe('q-uepa-2026-01');
    expect(body.items[0].referencias).toEqual(['SBC 2024', 'Diretriz IAM']);
    expect(body.hasMore).toBe(true);
    expect(body.nextCursor).not.toBeNull();
    expect(decodeQuestionCursor(body.nextCursor!)).toEqual({
      examYear: 2026,
      id: 'q-uepa-2026-02',
    });

    expect(calls[0].sql).toContain("plainto_tsquery('portuguese'");
    expect(calls[0].sql).toContain('clinical_image IS NOT NULL');
    expect(calls[0].params).toContain('infarto');
    expect(calls[0].params).toContain('clinica_medica');
  });

  it('retorna 200 com questão mapeada ou 404 em GET /api/questions/:id', async () => {
    const mockQuery = vi.fn(async <T extends QueryResultRow = QueryResultRow>(
      _sql: string,
      params: unknown[] = []
    ): Promise<QueryResult<T>> => {
      const id = String(params[0] || '');
      const rows = id === 'q-uepa-2026-01' ? [makeDbRow(id, 2026)] : [];
      return {
        rows: rows as unknown as T[],
        rowCount: rows.length,
        command: 'SELECT',
        oid: 0,
        fields: [],
      };
    });

    const srv = await startTestServer({
      questionsDepsOverride: {
        query: mockQuery as unknown as QuestionsServiceDeps['query'],
      },
    });
    closers.push(srv.close);

    const okRes = await fetch(`${srv.baseUrl}/api/questions/q-uepa-2026-01`);
    expect(okRes.status).toBe(200);
    expect((await okRes.json()) as { item: { id: string } }).toMatchObject({
      mode: 'postgres',
      item: { id: 'q-uepa-2026-01' },
    });

    const missingRes = await fetch(`${srv.baseUrl}/api/questions/q-inexistente`);
    expect(missingRes.status).toBe(404);
  });
});
