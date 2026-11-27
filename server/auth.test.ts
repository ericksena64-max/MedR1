import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import type { PoolClient } from 'pg';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp } from '../server.ts';
import { signSessionToken, verifySessionToken } from './auth.ts';

const STUDENT_A = '11111111-1111-4111-8111-111111111111';
const STUDENT_B = '22222222-2222-4222-8222-222222222222';
const TEST_JWT_SECRET = 'medr1-super-secret-jwt-key-for-tests-2026';

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

describe('P0 Segurança — JWT HS256 e proteção anti-IDOR em /api/sync/*', () => {
  const closers: Array<() => Promise<void>> = [];

  afterEach(async () => {
    while (closers.length > 0) {
      const close = closers.pop();
      if (close) await close();
    }
    vi.restoreAllMocks();
  });

  it('assina e valida JWT HS256, rejeitando assinatura adulterada ou token expirado', () => {
    const now = 1_700_000_000;
    const token = signSessionToken(STUDENT_A, TEST_JWT_SECRET, 3600, now);

    const verified = verifySessionToken(token, TEST_JWT_SECRET, now + 100);
    expect(verified?.studentId).toBe(STUDENT_A);

    // Expired
    expect(verifySessionToken(token, TEST_JWT_SECRET, now + 3601)).toBeNull();

    // Wrong secret / tampered
    expect(verifySessionToken(token, 'wrong-secret-key-123456', now + 100)).toBeNull();
    expect(verifySessionToken(`${token}x`, TEST_JWT_SECRET, now + 100)).toBeNull();
  });

  it('rejeita /api/sync/* com 401 quando jwtSecret está configurado e não há Bearer token', async () => {
    const srv = await startTestServer({ jwtSecret: TEST_JWT_SECRET });
    closers.push(srv.close);

    const pushRes = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ studentId: STUDENT_A, events: [] }),
    });
    expect(pushRes.status).toBe(401);

    const pullRes = await fetch(`${srv.baseUrl}/api/sync/pull?studentId=${STUDENT_A}`);
    expect(pullRes.status).toBe(401);
  });

  it('bloqueia tentativa de IDOR com 403 quando studentId do payload difere do JWT', async () => {
    const tokenA = signSessionToken(STUDENT_A, TEST_JWT_SECRET);
    const srv = await startTestServer({ jwtSecret: TEST_JWT_SECRET });
    closers.push(srv.close);

    const pushIdor = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenA}`,
      },
      body: JSON.stringify({ studentId: STUDENT_B, events: [] }),
    });
    expect(pushIdor.status).toBe(403);

    const pullIdor = await fetch(`${srv.baseUrl}/api/sync/pull?studentId=${STUDENT_B}`, {
      headers: { authorization: `Bearer ${tokenA}` },
    });
    expect(pullIdor.status).toBe(403);

    const bootIdor = await fetch(`${srv.baseUrl}/api/sync/bootstrap`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenA}`,
      },
      body: JSON.stringify({ studentId: STUDENT_B, attempts: [] }),
    });
    expect(bootIdor.status).toBe(403);
  });

  it('deriva studentId exclusivamente do JWT mesmo quando omitido no payload/query', async () => {
    const tokenA = signSessionToken(STUDENT_A, TEST_JWT_SECRET);
    const mockClient = {
      query: vi.fn(async () => ({ rows: [], rowCount: 0 })),
    } as unknown as PoolClient;

    const srv = await startTestServer({
      jwtSecret: TEST_JWT_SECRET,
      syncDepsOverride: {
        withTransaction: async (cb) => cb(mockClient),
      },
    });
    closers.push(srv.close);

    const pushRes = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenA}`,
      },
      body: JSON.stringify({ events: [] }),
    });
    expect(pushRes.status).toBe(200);
    const body = (await pushRes.json()) as { mode: string; acknowledgedEventIds: string[] };
    expect(body.mode).toBe('postgres');
    expect(body.acknowledgedEventIds).toEqual([]);
  });

  it('falha fechado (503) em produção quando MEDR1_JWT_SECRET não está configurada', async () => {
    const srv = await startTestServer({ jwtSecret: '', isProduction: true });
    closers.push(srv.close);

    const res = await fetch(`${srv.baseUrl}/api/sync/pull?studentId=${STUDENT_A}`);
    expect(res.status).toBe(503);
  });
});
