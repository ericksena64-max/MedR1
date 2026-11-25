# EGM Drift Report — 2026-11-25

## README.md
- Pre-existing AI Studio quickstart link `[.env.local](.env.local)` points to a gitignored local file not present in the repository (whereas `.env.example` and `.env` exist).
- All architectural boundaries, `/api/*` routes (`server.ts`), and verification commands match the codebase.

## src/README.md
No drift detected.

## server/README.md
No drift detected (all 22 exports across `db.ts`, `syncService.ts`, and `rankingService.ts` match source).

## db/README.md
No drift detected.

## db/migrations/README.md
No drift detected.

## scripts/README.md
No drift detected.

## public/README.md
No drift detected.

## public/assets/README.md
No drift detected.

## public/assets/aistudio/README.md
No drift detected.

## src/hooks/README.md
No drift detected (all 12 exports across `useMedR1Store.ts` and `useSyncEngine.ts` match source).

## src/types/README.md
No drift detected (all 47 exports across `medical.ts` and `sync.ts` match source).

## src/data/README.md
No drift detected.

## src/lib/README.md
No drift detected (all 238 exports across all 22 non-test modules match source).

## src/components/README.md
No drift detected.

## src/components/analytics/README.md
No drift detected (all 19 exports match source).

## src/components/flashcards/README.md
No drift detected (all 2 exports match source).

## src/components/gamification/README.md
No drift detected (all 3 exports match source).

## src/components/importer/README.md
No drift detected (all 1 export matches source).

## src/components/layout/README.md
No drift detected (all 9 exports match source).

## src/components/notebook/README.md
No drift detected (all 1 export matches source).

## src/components/questions/README.md
No drift detected (all 11 exports match source).

## src/components/ranking/README.md
No drift detected (all 3 exports match source).

## src/components/ui/README.md
No drift detected (all 7 exports match source).
