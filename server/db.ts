import {
  Pool,
  type PoolClient,
  type PoolConfig,
  type QueryResult,
  type QueryResultRow,
} from 'pg';

export type DatabaseHealthMode = 'local-fallback' | 'postgres' | 'postgres-degraded';

export interface DatabaseHealthStatus {
  configured: boolean;
  ok: boolean;
  mode: DatabaseHealthMode;
  latencyMs: number | null;
  message?: string;
}

let poolInstance: Pool | null = null;
let poolConnectionString: string | null = null;

export function getDatabaseUrl(): string {
  return (process.env.DATABASE_URL || '').trim();
}

export function isDatabaseConfigured(): boolean {
  return getDatabaseUrl().length > 0;
}

function buildPoolConfig(connectionString: string): PoolConfig {
  const lower = connectionString.toLowerCase();
  const forceDisableSsl = lower.includes('sslmode=disable');
  const requireSsl =
    !forceDisableSsl &&
    (lower.includes('sslmode=require') ||
      lower.includes('supabase.co') ||
      lower.includes('neon.tech') ||
      process.env.NODE_ENV === 'production');

  return {
    connectionString,
    max: Number(process.env.PG_POOL_MAX || 10),
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 3_000,
    ...(requireSsl ? { ssl: { rejectUnauthorized: false } } : {}),
  };
}

/**
 * Returns a lazy singleton PostgreSQL Pool when `DATABASE_URL` is configured,
 * or `null` when running in local-fallback mode.
 */
export function getDbPool(): Pool | null {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    return null;
  }

  if (poolInstance && poolConnectionString === connectionString) {
    return poolInstance;
  }

  const nextPool = new Pool(buildPoolConfig(connectionString));
  nextPool.on('error', (err) => {
    console.error('[medr1/db] Unexpected idle PostgreSQL client error:', err.message);
  });

  poolInstance = nextPool;
  poolConnectionString = connectionString;
  return poolInstance;
}

/**
 * Executes a parameterized query against PostgreSQL.
 * Throws if `DATABASE_URL` is not configured.
 */
export async function queryDb<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = []
): Promise<QueryResult<T>> {
  const pool = getDbPool();
  if (!pool) {
    throw new Error('DATABASE_URL is not configured (running in local-fallback mode).');
  }
  return pool.query<T>(text, params);
}

/**
 * Executes a callback inside a PostgreSQL transaction (`BEGIN` -> `COMMIT` / `ROLLBACK`).
 * Returns `null` when `DATABASE_URL` is not configured (local-fallback mode).
 */
export async function withDbTransaction<T>(
  callback: (client: PoolClient) => Promise<T>
): Promise<T | null> {
  const pool = getDbPool();
  if (!pool) {
    return null;
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const result = await callback(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

/**
 * Safe database healthcheck that never throws.
 * Reports `local-fallback` when `DATABASE_URL` is absent.
 */
export async function checkDatabaseHealth(): Promise<DatabaseHealthStatus> {
  const pool = getDbPool();
  if (!pool) {
    return {
      configured: false,
      ok: false,
      mode: 'local-fallback',
      latencyMs: null,
      message: 'DATABASE_URL not configured; using client-side local-fallback mode.',
    };
  }

  const startedAt = Date.now();
  try {
    await pool.query('SELECT 1 AS ok');
    return {
      configured: true,
      ok: true,
      mode: 'postgres',
      latencyMs: Date.now() - startedAt,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown database error';
    return {
      configured: true,
      ok: false,
      mode: 'postgres-degraded',
      latencyMs: Date.now() - startedAt,
      message,
    };
  }
}

export async function closeDbPool(): Promise<void> {
  if (poolInstance) {
    const toClose = poolInstance;
    poolInstance = null;
    poolConnectionString = null;
    await toClose.end();
  }
}
