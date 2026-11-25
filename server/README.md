# server

## Overview
Server-side PostgreSQL access, local-first bidirectional synchronization, and live/weekly/monthly leaderboard query services for MedR1. All modules gracefully degrade to `null` or `local-fallback` responses when `DATABASE_URL` is absent.

## Interface
- `db.ts`:
  - Types: `DatabaseHealthMode` (`'local-fallback' | 'postgres' | 'postgres-degraded'`), `DatabaseHealthStatus`
  - Functions: `getDatabaseUrl()`, `isDatabaseConfigured()`, `getDbPool()`, `queryDb(text, params)`, `withDbTransaction(callback)`, `checkDatabaseHealth()`, `closeDbPool()`
- `syncService.ts`:
  - Types: `DbQueryClient`, `SyncServiceDeps`
  - Functions: `fsrsStateNumberToLabel(state)`, `fsrsStateLabelToNumber(label)`, `isValidUuid(value)`, `applySyncEvent(client, studentId, event)`, `pushSyncEvents(studentId, events, deps)`, `pullSyncDelta(studentId, sinceIso, deps)`, `bootstrapSyncState(request, deps)`
- `rankingService.ts`:
  - Types: `RankingServiceDeps`, `LiveRankingResponse`
  - Functions: `normalizeRankingPeriod(raw)`, `getLiveRankingSnapshot(limitOrOptions, deps)`
- `analyticsRoutes.ts`:
  - Functions: `registerAnalyticsRoutes(app, validGrandeAreaIds)` (registers `POST /api/analytics/gap-radar` and `POST /api/analytics/weekly-approval-series`)

## Invariants
- When `DATABASE_URL` is empty/unset, `getDbPool()` and `withDbTransaction()` return `null`, `checkDatabaseHealth()` returns `{ configured: false, ok: false, mode: 'local-fallback', latencyMs: null }`, `pushSyncEvents()` / `pullSyncDelta()` / `bootstrapSyncState()` return `null`, and `getLiveRankingSnapshot()` returns `{ mode: 'local-fallback', peers: [] }`; `queryDb()` throws explicitly.
- `getDbPool()` caches a single `Pool` per `DATABASE_URL` string (`max` from `PG_POOL_MAX` defaulting to `10`, `idleTimeoutMillis: 30_000`, `connectionTimeoutMillis: 3_000`) and enables `{ ssl: { rejectUnauthorized: false } }` when `sslmode=require`, `supabase.co`, `neon.tech`, or `NODE_ENV === 'production'` (unless `sslmode=disable`).
- `pushSyncEvents` ensures the `students` row exists (`ensureStudentExists`) before applying outbox events sequentially inside one transaction (`BEGIN` / `COMMIT` / `ROLLBACK`).
- Sync writes are idempotent and conflict-safe: `ATTEMPT_CREATE` and `FSRS_LOG_CREATE` use `ON CONFLICT (id) DO NOTHING`; `PROFILE_UPSERT`, `FSRS_STATE_UPSERT`, `BOOKMARK_UPSERT`, and `MOCK_EXAM_UPSERT` enforce Last-Write-Wins via `WHERE EXCLUDED.client_updated_at >= <table>.client_updated_at`; `FSRS_LOG_CREATE` ensures a parent `review_states` row exists before inserting into `fsrs_review_logs`.
- `pullSyncDelta` queries delta changes across `students`, `question_attempts`, `review_states`, `student_bookmarks`, and `mock_exams` filtered by `server_updated_at > $2` (defaulting invalid `sinceIso` to `'1970-01-01T00:00:00.000Z'`).
- `getLiveRankingSnapshot` clamps `limit` to `[1, 200]` (default `50`), defaults invalid periods via `normalizeRankingPeriod` to `'daily'`, and queries `mv_weekly_user_stats`.

## Side Effects
- Opens and pools TCP/TLS connections to PostgreSQL via `pg.Pool` and executes `SELECT`/`INSERT`/`UPDATE` queries and transactions against `students`, `questions`-referenced attempts, `review_states`, `fsrs_review_logs`, `student_bookmarks`, `mock_exams`, and `mv_weekly_user_stats`.
- Logs idle pool errors to `console.error` (`[medr1/db]`).
- Reads `process.env.DATABASE_URL`, `process.env.PG_POOL_MAX`, and `process.env.NODE_ENV`.

## Verification
- Run: `npm test`
