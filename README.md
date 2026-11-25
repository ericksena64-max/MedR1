<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.
https://ai.studio/apps/74e42f84-04ad-4718-bf3b-ea42d1d8cf3b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

# MedR1 Blueprint

## System Overview
MedR1 is a Local-First medical residency exam preparation platform built with React 19, Vite 8, Tailwind CSS v4, TypeScript, and an Express (`server.ts`) backend with optional PostgreSQL synchronization and Gemini AI exam extraction/commentary endpoints.

## Local Interface & Invariants
- `server.ts`: Exports `createApp(options?)`, `safeParseAiJson`, `classifyErrorResponse`. Serves `/api/health`, `/api/sync/push`, `/api/sync/pull`, `/api/sync/bootstrap`, `/api/ranking/live`, `/api/import/extract-exam`, `/api/import/enrich-batch`, `/api/questions/comment`, `/api/analytics/gap-radar`, `/api/analytics/weekly-approval-series`, and Vite/static SPA fallback.
- `vite.config.ts`: Configures React, Tailwind CSS v4, manual vendor code-splitting, and copies `src/assets` into `dist/src/assets` on build.
- **Invariant**: AI endpoints enforce rate limiting (`AI_RATE_LIMIT_MAX_REQUESTS`), optional `MEDR1_API_TOKEN` auth, and prompt-injection isolation via `systemInstruction`.
- **Invariant**: Sync endpoints (`POST /api/sync/push`, `GET /api/sync/pull`, `POST /api/sync/bootstrap`) return HTTP `503` with `mode: 'local-fallback'` when `DATABASE_URL` is absent; `/api/ranking/live` returns HTTP `200` with `mode: 'local-fallback'` and empty `peers`.

## Subdirectories & System Boundaries
- `src`: [./src/README.md](./src/README.md) - React 19 frontend (UI components, `useMedR1Store`, `useSyncEngine`, FSRS/Pareto/ranking domain logic, lazy exam catalog, and TypeScript contracts).
- `server`: [./server/README.md](./server/README.md) - PostgreSQL pool/transaction wrapper (`db.ts`), idempotent LWW delta sync service (`syncService.ts`), and live/weekly/monthly ranking service (`rankingService.ts`).
- `db`: [./db/README.md](./db/README.md) - PostgreSQL 13+ schemas and ordered migrations (`./db/migrations/README.md`).
- `scripts`: [./scripts/README.md](./scripts/README.md) - Offline deterministic PDF extraction CLI (`extract_uepa_pdfs.ts`).
- `public`: [./public/README.md](./public/README.md) - Static public assets and AI Studio reference exports.

## Global Invariants
- **Local-First Primary State**: UI reads and writes synchronously to memory/`localStorage`/`IndexedDB` (`medr1_sync_db`, `medr1_question_bank_db`) and asynchronously converges with PostgreSQL via `sync_outbox` when `DATABASE_URL` is configured.
- **Deterministic Question IDs**: Static and database question primary keys use deterministic `TEXT` IDs (e.g. `q-uepa-2026-01`), while client-generated UUIDs ensure idempotent `ON CONFLICT (id) DO NOTHING` sync for attempts and review logs.
- **Timezone Safety**: Daily goal rollovers, FSRS due-today checks, weekly schedules, and daily/weekly/monthly rankings use local midnight / `America/Sao_Paulo` boundaries to avoid UTC day-shift bugs.
- **Ranking Eligibility**: Daily, weekly, and monthly leaderboards strictly exclude users with `0` answered questions in the period; monthly ranking orders purely by total questions answered regardless of accuracy.

## Global Side Effects
- Browser `localStorage` (`medr1_*` keys) and `IndexedDB` (`medr1_question_bank_db`, `medr1_sync_db`).
- Optional PostgreSQL TCP/TLS connections via `pg.Pool` (`DATABASE_URL`).
- Gemini API (`@google/genai`) calls from `server.ts` when `GEMINI_API_KEY` is configured.

## System Verification
- Run: `npm test` (and `npm run lint`, `npm run build`)