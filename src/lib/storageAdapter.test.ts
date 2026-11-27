import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { HybridPostgresSyncAdapter, LocalOnlyAdapter } from './storageAdapter';
import { clearOutbox, listOutboxEvents } from './syncOutbox';
import type { SyncOutboxEvent } from '../types/sync';

const STUDENT_ID = '11111111-1111-4111-8111-111111111111';

function buildAttemptEvent(eventId: string, questionId = 'q-uepa-2026-01'): SyncOutboxEvent {
  return {
    eventId,
    type: 'ATTEMPT_CREATE',
    payload: {
      id: '22222222-2222-4222-8222-222222222222',
      questionId,
      selectedOption: 'A',
      isCorrect: true,
      timeSpentMs: 15000,
      answeredAt: '2026-11-25T13:00:00.000Z',
      clientUpdatedAt: '2026-11-25T13:00:00.000Z',
    },
  };
}

describe('Fase 3 — StorageAdapter e sync_outbox Local-First', () => {
  beforeEach(async () => {
    await clearOutbox();
  });

  afterEach(async () => {
    await clearOutbox();
    vi.restoreAllMocks();
  });

  it('LocalOnlyAdapter não dispara chamadas de rede e mantém pendingCount zerado', async () => {
    const adapter = new LocalOnlyAdapter();
    await adapter.enqueue([buildAttemptEvent('evt-local-1')]);

    expect(await adapter.getPendingCount()).toBe(0);
    expect(await adapter.flush(STUDENT_ID)).toEqual({ status: 'local-fallback' });
    expect(await adapter.pull(STUDENT_ID, '1970-01-01T00:00:00.000Z')).toBeNull();
  });

  it('HybridPostgresSyncAdapter preserva eventos na outbox em 503 local-fallback e erro de rede', async () => {
    const fetch503 = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ mode: 'local-fallback' }), { status: 503 })
    );
    const adapter = new HybridPostgresSyncAdapter({ fetchImpl: fetch503 });

    await adapter.enqueue([buildAttemptEvent('evt-1'), buildAttemptEvent('evt-2')]);
    expect(await adapter.getPendingCount()).toBe(2);

    const res503 = await adapter.flush(STUDENT_ID);
    expect(res503).toEqual({ status: 'local-fallback' });
    expect(await adapter.getPendingCount()).toBe(2);

    const fetchOffline = vi.fn().mockRejectedValue(new Error('Network down'));
    const offlineAdapter = new HybridPostgresSyncAdapter({ fetchImpl: fetchOffline });
    const resOffline = await offlineAdapter.flush(STUDENT_ID);
    expect(resOffline).toEqual({ status: 'offline' });
    expect((await listOutboxEvents()).map((e) => e.eventId)).toEqual(['evt-1', 'evt-2']);
  });

  it('HybridPostgresSyncAdapter remove da outbox apenas os eventIds confirmados em 200 OK', async () => {
    const fetchOk = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          mode: 'postgres',
          acknowledgedEventIds: ['evt-1'],
          serverTimestamp: '2026-11-25T13:05:00.000Z',
        }),
        { status: 200, headers: { 'content-type': 'application/json' } }
      )
    );
    const adapter = new HybridPostgresSyncAdapter({ fetchImpl: fetchOk });

    await adapter.enqueue([buildAttemptEvent('evt-1'), buildAttemptEvent('evt-2')]);
    const result = await adapter.flush(STUDENT_ID);

    expect(result).toEqual({
      status: 'synced',
      acknowledgedIds: ['evt-1'],
      serverTimestamp: '2026-11-25T13:05:00.000Z',
    });
    expect(await adapter.getPendingCount()).toBe(1);
    expect((await listOutboxEvents()).map((e) => e.eventId)).toEqual(['evt-2']);
  });

  it('HybridPostgresSyncAdapter envia Authorization Bearer quando getAuthToken é configurado', async () => {
    const fetchAuth = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          mode: 'postgres',
          acknowledgedEventIds: ['evt-auth-1'],
          serverTimestamp: '2026-11-25T13:10:00.000Z',
        }),
        { status: 200, headers: { 'content-type': 'application/json' } }
      )
    );
    const adapter = new HybridPostgresSyncAdapter({
      fetchImpl: fetchAuth,
      getAuthToken: () => 'jwt.mock.token',
    });

    await adapter.enqueue([buildAttemptEvent('evt-auth-1')]);
    const res = await adapter.flush(STUDENT_ID);
    expect(res.status).toBe('synced');

    const [, init] = fetchAuth.mock.calls[0] as [string, RequestInit];
    expect((init.headers as Record<string, string>).authorization).toBe(
      'Bearer jwt.mock.token'
    );
  });
});
