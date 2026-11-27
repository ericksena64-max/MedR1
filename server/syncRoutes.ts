import type { Express, Request, RequestHandler, Response } from 'express';
import type { DatabaseHealthStatus } from './db.ts';
import {
  bootstrapSyncState,
  isValidUuid,
  pullSyncDelta,
  pushSyncEvents,
  type SyncServiceDeps,
} from './syncService.ts';
import {
  getLiveRankingSnapshot,
  normalizeRankingPeriod,
  type RankingServiceDeps,
} from './rankingService.ts';
import { resolveAuthorizedStudentId } from './auth.ts';
import type { SyncBootstrapRequest, SyncOutboxEvent } from '../src/types/sync.ts';

export interface RegisterCoreRoutesOptions {
  modelId: string;
  requireOptionalApiToken: RequestHandler;
  requireSyncSession: RequestHandler;
  resolveDbHealth: () => Promise<DatabaseHealthStatus>;
  syncDeps: SyncServiceDeps;
  rankingDeps: RankingServiceDeps;
}

/**
 * Registers health, Local-First sync (`/api/sync/*`), and live ranking (`/api/ranking/live`)
 * routes outside the monolithic `server.ts`.
 */
export function registerCoreRoutes(
  app: Express,
  options: RegisterCoreRoutesOptions
): void {
  const {
    modelId,
    requireOptionalApiToken,
    requireSyncSession,
    resolveDbHealth,
    syncDeps,
    rankingDeps,
  } = options;

  app.get('/api/health', async (_req: Request, res: Response) => {
    const database = await resolveDbHealth();
    res.json({ ok: true, model: modelId, database });
  });

  app.post(
    '/api/sync/push',
    requireOptionalApiToken,
    requireSyncSession,
    async (req: Request, res: Response) => {
      try {
        const body = req.body as Record<string, unknown>;
        const studentId = resolveAuthorizedStudentId(req, res);
        const events = Array.isArray(body.events) ? (body.events as SyncOutboxEvent[]) : null;

        if (!isValidUuid(studentId) || !events) {
          res.status(400).json({ error: 'studentId (UUID) e events (array) são obrigatórios.' });
          return;
        }

        const result = await pushSyncEvents(studentId, events, syncDeps);
        if (result === null) {
          res.status(503).json({
            mode: 'local-fallback',
            error: 'DATABASE_URL not configured',
          });
          return;
        }

        res.json(result);
      } catch (err) {
        console.error('[MedR1 Sync Push Error]', err);
        res.status(500).json({ error: 'Falha ao persistir lote de sincronização.' });
      }
    }
  );

  app.get(
    '/api/sync/pull',
    requireOptionalApiToken,
    requireSyncSession,
    async (req: Request, res: Response) => {
      try {
        const studentId = resolveAuthorizedStudentId(req, res);
        const since =
          typeof req.query.since === 'string' && req.query.since.trim()
            ? req.query.since.trim()
            : '1970-01-01T00:00:00.000Z';

        if (!isValidUuid(studentId)) {
          res.status(400).json({ error: 'studentId (UUID) é obrigatório.' });
          return;
        }

        const result = await pullSyncDelta(studentId, since, syncDeps);
        if (result === null) {
          res.status(503).json({
            mode: 'local-fallback',
            error: 'DATABASE_URL not configured',
          });
          return;
        }

        res.json(result);
      } catch (err) {
        console.error('[MedR1 Sync Pull Error]', err);
        res.status(500).json({ error: 'Falha ao consultar delta de sincronização.' });
      }
    }
  );

  app.post(
    '/api/sync/bootstrap',
    requireOptionalApiToken,
    requireSyncSession,
    async (req: Request, res: Response) => {
      try {
        const body = req.body as Partial<SyncBootstrapRequest>;
        const studentId = resolveAuthorizedStudentId(req, res);

        if (!isValidUuid(studentId)) {
          res.status(400).json({ error: 'studentId (UUID) é obrigatório.' });
          return;
        }

        const normalized: SyncBootstrapRequest = {
          studentId,
          profile: body.profile ?? null,
          attempts: Array.isArray(body.attempts) ? body.attempts : [],
          reviewStates: Array.isArray(body.reviewStates) ? body.reviewStates : [],
          reviewLogs: Array.isArray(body.reviewLogs) ? body.reviewLogs : [],
          bookmarks: Array.isArray(body.bookmarks) ? body.bookmarks : [],
          mockExams: Array.isArray(body.mockExams) ? body.mockExams : [],
        };

        const result = await bootstrapSyncState(normalized, syncDeps);
        if (result === null) {
          res.status(503).json({
            mode: 'local-fallback',
            error: 'DATABASE_URL not configured',
          });
          return;
        }

        res.json(result);
      } catch (err) {
        console.error('[MedR1 Sync Bootstrap Error]', err);
        res.status(500).json({ error: 'Falha ao executar bootstrap de sincronização.' });
      }
    }
  );

  app.get('/api/ranking/live', async (req: Request, res: Response) => {
    try {
      const limit = Number(req.query.limit || 50);
      const period = normalizeRankingPeriod(req.query.period);
      const snapshot = await getLiveRankingSnapshot(
        { limit: Number.isFinite(limit) ? limit : 50, period },
        rankingDeps
      );
      res.json(snapshot);
    } catch (err) {
      console.error('[MedR1 Ranking Error]', err);
      res.status(500).json({ error: 'Falha ao carregar ranking ao vivo.' });
    }
  });
}
