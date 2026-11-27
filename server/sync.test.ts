import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import type { PoolClient, QueryResult, QueryResultRow } from 'pg';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp } from '../server.ts';
import type { SyncServiceDeps } from './syncService.ts';
import type { SyncOutboxEvent } from '../src/types/sync.ts';

const VALID_STUDENT_ID = '11111111-1111-4111-8111-111111111111';
const VALID_ATTEMPT_ID = '22222222-2222-4222-8222-222222222222';
const VALID_EXAM_ID = '33333333-3333-4333-8333-333333333333';

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

describe('Fase 2 — /api/sync/* (push, pull, bootstrap)', () => {
  const closers: Array<() => Promise<void>> = [];

  afterEach(async () => {
    while (closers.length > 0) {
      const close = closers.pop();
      if (close) await close();
    }
    vi.restoreAllMocks();
  });

  it('retorna 503 local-fallback em push, pull e bootstrap quando DATABASE_URL não está configurada', async () => {
    const prevDbUrl = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;
    try {
      const srv = await startTestServer();
      closers.push(srv.close);

      const pushRes = await fetch(`${srv.baseUrl}/api/sync/push`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ studentId: VALID_STUDENT_ID, events: [] }),
      });
      expect(pushRes.status).toBe(503);
      expect(await pushRes.json()).toMatchObject({ mode: 'local-fallback' });

      const pullRes = await fetch(
        `${srv.baseUrl}/api/sync/pull?studentId=${VALID_STUDENT_ID}`
      );
      expect(pullRes.status).toBe(503);
      expect(await pullRes.json()).toMatchObject({ mode: 'local-fallback' });

      const bootRes = await fetch(`${srv.baseUrl}/api/sync/bootstrap`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          studentId: VALID_STUDENT_ID,
          attempts: [],
          reviewStates: [],
          bookmarks: [],
          mockExams: [],
        }),
      });
      expect(bootRes.status).toBe(503);
      expect(await bootRes.json()).toMatchObject({ mode: 'local-fallback' });
    } finally {
      if (prevDbUrl !== undefined) process.env.DATABASE_URL = prevDbUrl;
    }
  });

  it('retorna 400 quando studentId não é um UUID válido', async () => {
    const srv = await startTestServer();
    closers.push(srv.close);

    const res = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ studentId: 'not-a-uuid', events: [] }),
    });
    expect(res.status).toBe(400);
  });

  it('executa push em lote com idempotência e cláusulas LWW, confirmando acknowledgedEventIds', async () => {
    const executedQueries: Array<{ sql: string; params: unknown[] }> = [];
    const mockClient = {
      query: vi.fn(async (sql: string, params: unknown[] = []) => {
        executedQueries.push({ sql, params });
        return { rows: [], rowCount: 1 };
      }),
    } as unknown as PoolClient;

    const srv = await startTestServer({
      syncDepsOverride: {
        withTransaction: async (cb) => cb(mockClient),
      },
    });
    closers.push(srv.close);

    const events: SyncOutboxEvent[] = [
      {
        eventId: 'evt-attempt-1',
        type: 'ATTEMPT_CREATE',
        payload: {
          id: VALID_ATTEMPT_ID,
          questionId: 'q-uepa-2026-01',
          selectedOption: 'A',
          isCorrect: true,
          timeSpentMs: 42000,
          answeredAt: '2026-11-25T12:00:00.000Z',
          clientUpdatedAt: '2026-11-25T12:00:00.000Z',
        },
      },
      {
        eventId: 'evt-fsrs-1',
        type: 'FSRS_STATE_UPSERT',
        payload: {
          questionId: 'q-uepa-2026-01',
          stability: 4.5,
          difficulty: 5.1,
          elapsedDays: 0,
          scheduledDays: 4,
          reps: 1,
          lapses: 0,
          state: 2,
          due: '2026-11-29T12:00:00.000Z',
          lastReview: '2026-11-25T12:00:00.000Z',
          clientUpdatedAt: '2026-11-25T12:00:01.000Z',
        },
      },
      {
        eventId: 'evt-bookmark-1',
        type: 'BOOKMARK_UPSERT',
        payload: {
          questionId: 'q-uepa-2026-01',
          note: 'Revisar critério diagnóstico',
          isDeleted: false,
          clientUpdatedAt: '2026-11-25T12:00:02.000Z',
        },
      },
      {
        eventId: 'evt-exam-1',
        type: 'MOCK_EXAM_UPSERT',
        payload: {
          id: VALID_EXAM_ID,
          title: 'Simulado UEPA 2026',
          totalQuestions: 20,
          correctCount: 16,
          scorePercentage: 80,
          durationMs: 1800000,
          status: 'completed',
          startedAt: '2026-11-25T11:30:00.000Z',
          completedAt: '2026-11-25T12:00:00.000Z',
          clientUpdatedAt: '2026-11-25T12:00:03.000Z',
        },
      },
    ];

    const res = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ studentId: VALID_STUDENT_ID, events }),
    });

    expect(res.status).toBe(200);
    const json = (await res.json()) as {
      mode: string;
      acknowledgedEventIds: string[];
      serverTimestamp: string;
    };
    expect(json.mode).toBe('postgres');
    expect(json.acknowledgedEventIds).toEqual([
      'evt-attempt-1',
      'evt-fsrs-1',
      'evt-bookmark-1',
      'evt-exam-1',
    ]);

    const sqlAll = executedQueries.map((q) => q.sql).join('\n');
    expect(sqlAll).toContain('INSERT INTO students');
    expect(sqlAll).toContain('ON CONFLICT (id) DO NOTHING');
    expect(sqlAll).toContain('WHERE EXCLUDED.client_updated_at >= review_states.client_updated_at');
    expect(sqlAll).toContain(
      'WHERE EXCLUDED.client_updated_at >= student_bookmarks.client_updated_at'
    );
    expect(sqlAll).toContain('WHERE EXCLUDED.client_updated_at >= mock_exams.client_updated_at');
  });

  it('retorna 500 e não confirma nenhum eventId quando ocorre falha no meio da transação', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const mockClient = {
      query: vi
        .fn()
        .mockResolvedValueOnce({ rows: [], rowCount: 1 }) // ensureStudentExists
        .mockResolvedValueOnce({ rows: [], rowCount: 1 }) // evento 1 OK
        .mockRejectedValueOnce(new Error('DB write failure')), // evento 2 falha
    } as unknown as PoolClient;

    let rolledBack = false;
    const srv = await startTestServer({
      syncDepsOverride: {
        withTransaction: async (cb) => {
          try {
            return await cb(mockClient);
          } catch (err) {
            rolledBack = true;
            throw err;
          }
        },
      },
    });
    closers.push(srv.close);

    const res = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        studentId: VALID_STUDENT_ID,
        events: [
          {
            eventId: 'evt-1',
            type: 'ATTEMPT_CREATE',
            payload: {
              id: VALID_ATTEMPT_ID,
              questionId: 'q-uepa-2026-01',
              selectedOption: 'B',
              isCorrect: false,
              timeSpentMs: 12000,
              answeredAt: '2026-11-25T12:00:00.000Z',
              clientUpdatedAt: '2026-11-25T12:00:00.000Z',
            },
          },
          {
            eventId: 'evt-2',
            type: 'BOOKMARK_UPSERT',
            payload: {
              questionId: 'q-uepa-2026-01',
              isDeleted: false,
              clientUpdatedAt: '2026-11-25T12:00:01.000Z',
            },
          },
        ],
      }),
    });

    expect(res.status).toBe(500);
    expect(rolledBack).toBe(true);
    expect(errorSpy).toHaveBeenCalledOnce();
  });

  it('retorna delta filtrado por since em GET /api/sync/pull', async () => {
    const queryCalls: Array<{ sql: string; params: unknown[] }> = [];
    const mockQuery = vi.fn(async <T extends QueryResultRow>(sql: string, params: unknown[] = []) => {
      queryCalls.push({ sql, params });
      if (sql.includes('FROM students')) {
        return { rows: [], rowCount: 0 } as unknown as QueryResult<T>;
      }
      if (sql.includes('FROM question_attempts')) {
        return {
          rows: [
            {
              id: VALID_ATTEMPT_ID,
              question_id: 'q-uepa-2026-01',
              selected_option: 'A',
              is_correct: true,
              time_spent_ms: 25000,
              mock_exam_id: null,
              answered_at: '2026-11-25T12:10:00.000Z',
              client_updated_at: '2026-11-25T12:10:00.000Z',
            },
          ],
          rowCount: 1,
        } as unknown as QueryResult<T>;
      }
      return { rows: [], rowCount: 0 } as unknown as QueryResult<T>;
    });

    const srv = await startTestServer({
      syncDepsOverride: {
        isConfigured: () => true,
        query: mockQuery as unknown as SyncServiceDeps['query'],
      },
    });
    closers.push(srv.close);

    const since = '2026-11-25T12:00:00.000Z';
    const res = await fetch(
      `${srv.baseUrl}/api/sync/pull?studentId=${VALID_STUDENT_ID}&since=${encodeURIComponent(since)}`
    );

    expect(res.status).toBe(200);
    const json = (await res.json()) as {
      mode: string;
      attempts: Array<{ id: string; questionId: string; isCorrect: boolean }>;
    };
    expect(json.mode).toBe('postgres');
    expect(json.attempts).toHaveLength(1);
    expect(json.attempts[0]).toMatchObject({
      id: VALID_ATTEMPT_ID,
      questionId: 'q-uepa-2026-01',
      isCorrect: true,
    });
    expect(queryCalls.every((c) => c.params[1] === since)).toBe(true);
  });

  it('executa bootstrap transacional e devolve estado consolidado em POST /api/sync/bootstrap', async () => {
    const mockClient = {
      query: vi.fn(async () => ({ rows: [], rowCount: 1 })),
    } as unknown as PoolClient;
    const mockQuery = vi.fn(async <T extends QueryResultRow>() => {
      return { rows: [], rowCount: 0 } as unknown as QueryResult<T>;
    });

    const srv = await startTestServer({
      syncDepsOverride: {
        isConfigured: () => true,
        withTransaction: async (cb) => cb(mockClient),
        query: mockQuery as unknown as SyncServiceDeps['query'],
      },
    });
    closers.push(srv.close);

    const res = await fetch(`${srv.baseUrl}/api/sync/bootstrap`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        studentId: VALID_STUDENT_ID,
        attempts: [
          {
            id: VALID_ATTEMPT_ID,
            questionId: 'q-uepa-2026-01',
            selectedOption: 'C',
            isCorrect: true,
            timeSpentMs: 18000,
            answeredAt: '2026-11-25T12:00:00.000Z',
            clientUpdatedAt: '2026-11-25T12:00:00.000Z',
          },
        ],
        reviewStates: [],
        bookmarks: [],
        mockExams: [],
      }),
    });

    expect(res.status).toBe(200);
    const json = (await res.json()) as { mode: string; attempts: unknown[] };
    expect(json.mode).toBe('postgres');
    expect(Array.isArray(json.attempts)).toBe(true);
  });

  it('sincroniza flashcards standalone/Anki sem questionId usando card_id em POST /api/sync/push', async () => {
    const executedQueries: Array<{ sql: string; params: unknown[] }> = [];
    const mockClient = {
      query: vi.fn(async (sql: string, params: unknown[] = []) => {
        executedQueries.push({ sql, params });
        return { rows: [], rowCount: 1 };
      }),
    } as unknown as PoolClient;

    const srv = await startTestServer({
      syncDepsOverride: {
        isConfigured: () => true,
        withTransaction: async (cb) => cb(mockClient),
      },
    });
    closers.push(srv.close);

    const res = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        studentId: VALID_STUDENT_ID,
        events: [
          {
            eventId: 'evt-anki-state-1',
            type: 'FSRS_STATE_UPSERT',
            payload: {
              questionId: null,
              cardId: 'fc-anki-001',
              cardPayload: {
                grandeAreaId: 'cirurgia_geral',
                grandeArea: 'Cirurgia Geral',
                tema: 'Cirurgia / Pré e Pós-Operatório',
                front: 'Qual o melhor momento para equipe cirúrgica confirmar a reserva de sangue?',
                backPearl: 'Antes da indução anestésica.',
                source: 'manual',
              },
              stability: 3.1,
              difficulty: 5.0,
              elapsedDays: 0,
              scheduledDays: 3,
              reps: 1,
              lapses: 0,
              state: 2,
              due: '2026-11-29T12:00:00.000Z',
              lastReview: '2026-11-26T12:00:00.000Z',
              clientUpdatedAt: '2026-11-26T12:00:00.000Z',
            },
          },
          {
            eventId: 'evt-anki-log-1',
            type: 'FSRS_LOG_CREATE',
            payload: {
              id: '33333333-3333-4333-8333-333333333333',
              questionId: null,
              cardId: 'fc-anki-001',
              rating: 3,
              state: 2,
              due: '2026-11-29T12:00:00.000Z',
              stability: 3.1,
              difficulty: 5.0,
              elapsedDays: 0,
              lastElapsedDays: 0,
              scheduledDays: 3,
              reviewedAt: '2026-11-26T12:00:00.000Z',
            },
          },
        ],
      }),
    });

    expect(res.status).toBe(200);
    const json = (await res.json()) as { acknowledgedEventIds: string[] };
    expect(json.acknowledgedEventIds).toEqual(['evt-anki-state-1', 'evt-anki-log-1']);
    expect(
      executedQueries.some((q) => q.sql.includes('ON CONFLICT (student_id, card_id)'))
    ).toBe(true);
    expect(
      executedQueries.some((q) => q.sql.includes('WHERE rs.student_id = $2 AND rs.card_id = $3'))
    ).toBe(true);
  });
});
