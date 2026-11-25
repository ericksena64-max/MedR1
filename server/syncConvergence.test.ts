import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import type { PoolClient, QueryResult, QueryResultRow } from 'pg';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createApp } from '../server.ts';
import type { SyncServiceDeps } from './syncService.ts';
import type { RankingServiceDeps } from './rankingService.ts';
import { HybridPostgresSyncAdapter } from '../src/lib/storageAdapter.ts';
import { clearOutbox, listOutboxEvents } from '../src/lib/syncOutbox.ts';
import type { SyncOutboxEvent } from '../src/types/sync.ts';

const STUDENT_ID = '11111111-1111-4111-8111-111111111111';

interface InMemoryAttemptRow {
  id: string;
  student_id: string;
  question_id: string;
  selected_option: string;
  is_correct: boolean;
  time_spent_ms: number;
  mock_exam_id: string | null;
  answered_at: string;
  client_updated_at: string;
}

interface InMemoryReviewStateRow {
  id: string;
  student_id: string;
  question_id: string;
  state: string;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  reps: number;
  lapses: number;
  due_at: string;
  last_reviewed_at: string | null;
  client_updated_at: string;
}

/**
 * Simula a semântica real do PostgreSQL (`ON CONFLICT DO NOTHING` + LWW por `client_updated_at`)
 * para validar convergência ponta a ponta entre `HybridPostgresSyncAdapter` e `server.ts`.
 */
function createStatefulPostgresMock() {
  const attempts = new Map<string, InMemoryAttemptRow>();
  const reviewStates = new Map<string, InMemoryReviewStateRow>();

  const client = {
    query: vi.fn(async (sql: string, params: unknown[] = []) => {
      if (sql.includes('INSERT INTO question_attempts')) {
        const id = String(params[0]);
        if (!attempts.has(id)) {
          attempts.set(id, {
            id,
            student_id: String(params[1]),
            question_id: String(params[2]),
            mock_exam_id: (params[3] as string | null) ?? null,
            selected_option: String(params[4]),
            is_correct: Boolean(params[5]),
            time_spent_ms: Number(params[6] ?? 0),
            answered_at: String(params[8]),
            client_updated_at: String(params[9]),
          });
        }
        return { rows: [], rowCount: 1 };
      }

      if (sql.includes('INSERT INTO review_states') && sql.includes('ON CONFLICT (student_id, question_id) DO UPDATE')) {
        const studentId = String(params[0]);
        const questionId = String(params[1]);
        const key = `${studentId}:${questionId}`;
        const incomingUpdatedAt = Date.parse(String(params[11]));
        const existing = reviewStates.get(key);

        if (!existing || incomingUpdatedAt >= Date.parse(existing.client_updated_at)) {
          reviewStates.set(key, {
            id: existing?.id ?? `rs-${questionId}`,
            student_id: studentId,
            question_id: questionId,
            state: String(params[2]),
            stability: Number(params[3]),
            difficulty: Number(params[4]),
            elapsed_days: Number(params[5]),
            scheduled_days: Number(params[6]),
            reps: Number(params[7]),
            lapses: Number(params[8]),
            due_at: String(params[9]),
            last_reviewed_at: (params[10] as string | null) ?? null,
            client_updated_at: String(params[11]),
          });
        }
        return { rows: [], rowCount: 1 };
      }

      return { rows: [], rowCount: 1 };
    }),
  } as unknown as PoolClient;

  const query = vi.fn(async <T extends QueryResultRow>(sql: string) => {
    if (sql.includes('FROM question_attempts')) {
      return {
        rows: Array.from(attempts.values()),
        rowCount: attempts.size,
      } as unknown as QueryResult<T>;
    }
    if (sql.includes('FROM review_states')) {
      return {
        rows: Array.from(reviewStates.values()),
        rowCount: reviewStates.size,
      } as unknown as QueryResult<T>;
    }
    return { rows: [], rowCount: 0 } as unknown as QueryResult<T>;
  });

  const syncDeps: SyncServiceDeps = {
    isConfigured: () => true,
    withTransaction: async (cb) => cb(client),
    query: query as unknown as SyncServiceDeps['query'],
  };

  return { attempts, reviewStates, syncDeps };
}

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

describe('Fase 4 — Convergência Offline -> Reconexão -> Push Duplicado e Ranking', () => {
  const closers: Array<() => Promise<void>> = [];

  beforeEach(async () => {
    await clearOutbox();
  });

  afterEach(async () => {
    await clearOutbox();
    while (closers.length > 0) {
      const close = closers.pop();
      if (close) await close();
    }
    vi.restoreAllMocks();
  });

  it('converge 15 respostas + revisões FSRS após offline, reconexão e push duplicado sem duplicar nem regredir due', async () => {
    const { attempts, reviewStates, syncDeps } = createStatefulPostgresMock();
    const srv = await startTestServer({ syncDepsOverride: syncDeps });
    closers.push(srv.close);

    // 1. Offline: enfileira 15 tentativas + revisão FSRS mais recente + revisão FSRS atrasada
    const events: SyncOutboxEvent[] = [];
    for (let i = 1; i <= 15; i += 1) {
      const uuidSuffix = String(i).padStart(12, '0');
      events.push({
        eventId: `evt-attempt-${i}`,
        type: 'ATTEMPT_CREATE',
        payload: {
          id: `aaaaaaaa-aaaa-4aaa-8aaa-${uuidSuffix}`,
          questionId: `q-uepa-2026-${String(i).padStart(2, '0')}`,
          selectedOption: i % 2 === 0 ? 'A' : 'B',
          isCorrect: i % 2 === 0,
          timeSpentMs: 20_000 + i * 500,
          answeredAt: `2026-11-25T13:00:${String(i).padStart(2, '0')}.000Z`,
          clientUpdatedAt: `2026-11-25T13:00:${String(i).padStart(2, '0')}.000Z`,
        },
      });
    }

    // Revisão FSRS mais recente (due = 2026-12-05)
    events.push({
      eventId: 'evt-fsrs-newer',
      type: 'FSRS_STATE_UPSERT',
      payload: {
        questionId: 'q-uepa-2026-01',
        stability: 10.4,
        difficulty: 4.2,
        elapsedDays: 3,
        scheduledDays: 10,
        reps: 3,
        lapses: 0,
        state: 2,
        due: '2026-12-05T13:00:00.000Z',
        lastReview: '2026-11-25T13:05:00.000Z',
        clientUpdatedAt: '2026-11-25T13:05:00.000Z',
      },
    });

    // Pacote atrasado com timestamp mais antigo (due = 2026-11-26) não pode regredir o estado
    events.push({
      eventId: 'evt-fsrs-stale',
      type: 'FSRS_STATE_UPSERT',
      payload: {
        questionId: 'q-uepa-2026-01',
        stability: 1.2,
        difficulty: 6.0,
        elapsedDays: 0,
        scheduledDays: 1,
        reps: 1,
        lapses: 0,
        state: 1,
        due: '2026-11-26T13:00:00.000Z',
        lastReview: '2026-11-25T12:50:00.000Z',
        clientUpdatedAt: '2026-11-25T12:50:00.000Z',
      },
    });

    const adapter = new HybridPostgresSyncAdapter({ baseUrl: srv.baseUrl });
    await adapter.enqueue(events);
    expect(await adapter.getPendingCount()).toBe(17);

    // 2. Reconexão: primeiro flush envia tudo e limpa a outbox
    const firstFlush = await adapter.flush(STUDENT_ID);
    expect(firstFlush.status).toBe('synced');
    expect(await adapter.getPendingCount()).toBe(0);
    expect(attempts.size).toBe(15);

    // 3. Push duplicado manual (simulando retry de rede após timeout)
    const dupRes = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ studentId: STUDENT_ID, events }),
    });
    expect(dupRes.status).toBe(200);

    // 4. Convergência verificada: 15 tentativas únicas e FSRS preservou o due mais recente
    expect(attempts.size).toBe(15);
    const fsrsRow = reviewStates.get(`${STUDENT_ID}:q-uepa-2026-01`);
    expect(fsrsRow).toBeDefined();
    expect(fsrsRow?.due_at).toBe('2026-12-05T13:00:00.000Z');
    expect(fsrsRow?.reps).toBe(3);

    const pullRes = await adapter.pull(STUDENT_ID, '1970-01-01T00:00:00.000Z');
    expect(pullRes?.attempts).toHaveLength(15);
    expect(pullRes?.reviewStates[0].due).toBe('2026-12-05T13:00:00.000Z');
    expect(await listOutboxEvents()).toHaveLength(0);
  });

  it('GET /api/ranking/live retorna local-fallback sem banco e peers reais quando PostgreSQL está ativo', async () => {
    const prevDbUrl = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;

    try {
      const srvFallback = await startTestServer();
      closers.push(srvFallback.close);

      const fallbackRes = await fetch(`${srvFallback.baseUrl}/api/ranking/live`);
      expect(fallbackRes.status).toBe(200);
      expect(await fallbackRes.json()).toMatchObject({
        mode: 'local-fallback',
        peers: [],
      });

      const rankingDeps: RankingServiceDeps = {
        isConfigured: () => true,
        query: vi.fn(async <T extends QueryResultRow>() => {
          return {
            rows: [
              {
                student_id: STUDENT_ID,
                real_name: 'Dra. Ana Paula',
                pseudonym: 'AnaR1_PA',
                use_pseudonym: false,
                target_institution: 'UEPA',
                avatar_initials: 'AP',
                questions_today: 42,
                correct_today: 37,
                streak: 8,
                current_area: 'Clínica Médica',
                is_online: true,
                last_active_seconds_ago: 12,
              },
            ],
            rowCount: 1,
          } as unknown as QueryResult<T>;
        }) as unknown as RankingServiceDeps['query'],
      };

      const srvPostgres = await startTestServer({ rankingDepsOverride: rankingDeps });
      closers.push(srvPostgres.close);

      const pgRes = await fetch(`${srvPostgres.baseUrl}/api/ranking/live?limit=10`);
      expect(pgRes.status).toBe(200);
      const pgJson = (await pgRes.json()) as {
        mode: string;
        peers: Array<{ id: string; questionsToday: number; targetInstitution: string }>;
      };
      expect(pgJson.mode).toBe('postgres');
      expect(pgJson.peers).toHaveLength(1);
      expect(pgJson.peers[0]).toMatchObject({
        id: STUDENT_ID,
        questionsToday: 42,
        targetInstitution: 'UEPA',
      });

      const monthlyRes = await fetch(`${srvPostgres.baseUrl}/api/ranking/live?period=monthly&limit=10`);
      expect(monthlyRes.status).toBe(200);
      const monthlyJson = (await monthlyRes.json()) as { period: string };
      expect(monthlyJson.period).toBe('monthly');

      const weeklyRes = await fetch(`${srvPostgres.baseUrl}/api/ranking/live?period=weekly&limit=10`);
      expect(weeklyRes.status).toBe(200);
      const weeklyJson = (await weeklyRes.json()) as { period: string };
      expect(weeklyJson.period).toBe('weekly');
    } finally {
      if (prevDbUrl !== undefined) process.env.DATABASE_URL = prevDbUrl;
    }
  });
});
