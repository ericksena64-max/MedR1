import type { AddressInfo } from 'node:net';
import type { Server } from 'node:http';
import type { PoolClient } from 'pg';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { createApp } from '../server.ts';
import { hashPassword, verifyPassword } from './auth.ts';
import type { AuthServiceDeps, AuthStudentRow } from './authRoutes.ts';

const TEST_JWT_SECRET = 'medr1-super-secret-jwt-key-for-auth-tests-2026';

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

function createInMemoryAuthDeps(): { deps: AuthServiceDeps; rows: Map<string, AuthStudentRow> } {
  const rows = new Map<string, AuthStudentRow>();
  let seq = 1;

  const deps: AuthServiceDeps = {
    isDbConfigured: () => true,
    findStudentByEmail: async (email) => {
      const normalized = email.trim().toLowerCase();
      for (const row of rows.values()) {
        if (row.email.toLowerCase() === normalized) return row;
      }
      return null;
    },
    findStudentById: async (id) => {
      const row = rows.get(id);
      return row && row.is_active ? row : null;
    },
    createStudent: async (input) => {
      const id = `00000000-0000-4000-8000-${String(seq++).padStart(12, '0')}`;
      const row: AuthStudentRow = {
        id,
        full_name: input.fullName,
        email: input.email,
        password_hash: input.passwordHash,
        pseudonym: null,
        use_pseudonym: false,
        target_specialty: input.targetSpecialty,
        target_institution: input.targetInstitution,
        avatar_initials: input.avatarInitials,
        daily_goal_target: 20,
        is_active: true,
      };
      rows.set(id, row);
      return row;
    },
  };

  return { deps, rows };
}

describe('Autenticação MedR1 — /api/auth/register, /api/auth/login, /api/auth/me', () => {
  const closers: Array<() => Promise<void>> = [];

  afterEach(async () => {
    while (closers.length > 0) {
      const close = closers.pop();
      if (close) await close();
    }
    vi.restoreAllMocks();
  });

  it('gera hash scrypt único com salt aleatório e valida senha corretamente', async () => {
    const h1 = await hashPassword('medicina2026');
    const h2 = await hashPassword('medicina2026');

    expect(h1).not.toBe(h2);
    expect(h1.startsWith('scrypt$')).toBe(true);
    expect(await verifyPassword('medicina2026', h1)).toBe(true);
    expect(await verifyPassword('senha-errada', h1)).toBe(false);
    expect(await verifyPassword('medicina2026', 'invalid-hash')).toBe(false);
  });

  it('cadastra novo aluno, autentica via login, valida /api/auth/me e libera /api/sync/push', async () => {
    const { deps } = createInMemoryAuthDeps();
    const mockClient = {
      query: vi.fn(async () => ({ rows: [], rowCount: 0 })),
    } as unknown as PoolClient;

    const srv = await startTestServer({
      jwtSecret: TEST_JWT_SECRET,
      isProduction: true,
      authDepsOverride: deps,
      syncDepsOverride: {
        withTransaction: async (cb) => cb(mockClient),
      },
    });
    closers.push(srv.close);

    // 1. Register
    const regRes = await fetch(`${srv.baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Marina Silva',
        email: 'Marina@MedR1.com',
        password: 'Password123',
        targetSpecialty: 'Clínica Médica',
      }),
    });
    expect(regRes.status).toBe(201);
    const regData = (await regRes.json()) as {
      token: string;
      student: { id: string; fullName: string; email: string; avatarInitials: string };
    };
    expect(regData.token).toBeTruthy();
    expect(regData.student.fullName).toBe('Marina Silva');
    expect(regData.student.email).toBe('marina@medr1.com');
    expect(regData.student.avatarInitials).toBe('MS');

    // 2. Duplicate email -> 409
    const dupRes = await fetch(`${srv.baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Outra Marina',
        email: 'marina@medr1.com',
        password: 'Password123',
      }),
    });
    expect(dupRes.status).toBe(409);

    // 3. Login wrong password -> 401
    const badLogin = await fetch(`${srv.baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: 'marina@medr1.com',
        password: 'WrongPassword',
      }),
    });
    expect(badLogin.status).toBe(401);

    // 4. Login valid -> 200 + token
    const loginRes = await fetch(`${srv.baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: 'marina@medr1.com',
        password: 'Password123',
      }),
    });
    expect(loginRes.status).toBe(200);
    const loginData = (await loginRes.json()) as { token: string; student: { id: string } };
    expect(loginData.student.id).toBe(regData.student.id);

    // 5. GET /api/auth/me with Bearer token
    const meRes = await fetch(`${srv.baseUrl}/api/auth/me`, {
      headers: { authorization: `Bearer ${loginData.token}` },
    });
    expect(meRes.status).toBe(200);
    const meData = (await meRes.json()) as { student: { email: string } };
    expect(meData.student.email).toBe('marina@medr1.com');

    // 6. Token works seamlessly with protected /api/sync/push
    const syncRes = await fetch(`${srv.baseUrl}/api/sync/push`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${loginData.token}`,
      },
      body: JSON.stringify({ studentId: loginData.student.id, events: [] }),
    });
    expect(syncRes.status).toBe(200);
  });

  it('retorna 503 em local-fallback quando DATABASE_URL não está configurado ou falta JWT secret em produção', async () => {
    const srvNoDb = await startTestServer({
      jwtSecret: TEST_JWT_SECRET,
      authDepsOverride: { isDbConfigured: () => false },
    });
    closers.push(srvNoDb.close);

    const noDbRes = await fetch(`${srvNoDb.baseUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: 'a@b.com', password: 'Password123' }),
    });
    expect(noDbRes.status).toBe(503);

    const { deps } = createInMemoryAuthDeps();
    const srvNoSecret = await startTestServer({
      jwtSecret: '',
      isProduction: true,
      authDepsOverride: deps,
    });
    closers.push(srvNoSecret.close);

    const noSecretRes = await fetch(`${srvNoSecret.baseUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Aluno Teste',
        email: 'teste@medr1.com',
        password: 'Password123',
      }),
    });
    expect(noSecretRes.status).toBe(503);
  });
});
