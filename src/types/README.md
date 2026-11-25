# src/types

## Overview
Domain and synchronization TypeScript type contracts for MedR1 (`src/types/medical.ts` and `src/types/sync.ts`). Defines core medical residency question structures, student answers, filtering criteria, performance/gap-radar analytics, FSRS-6 flashcard scheduling types, simulado and cutoff target configurations, and client-server synchronization payloads.

## Interface
- `src/types/medical.ts`:
  - Study & UI types: `GrandeAreaId`, `AlternativeLetter`, `ExamType`, `DifficultyLevel`, `StudyMode`, `ThemeMode`, `ThemeScheduleConfig`, `DailyGoalProgress`, `StudentFilterStatus`, `ActiveTab`, `PerformanceStatus`
  - Question & exam types: `LabRow`, `ClinicalImage`, `QuestionAlternative`, `MedicalQuestion`, `UserAnswerRecord`, `QuestionFilters`
  - Profile & ranking types: `UserProfile`, `RankingPeriod`, `LiveRankingUser`
  - Analytics types: `HistoricalAreaPerformance`, `HistoricalTopicPerformance`, `TemporalPoint`, `GapRadarTopicRow`
  - FSRS & SRS types: `SrsRating`, `FsrsState`, `FixedTargetRetention`, `RetentionMode`, `TargetRetention`, `ExamBoard`, `FlashcardSource`, `Flashcard`, `FsrsReviewLogEntry`
  - Simulado & cutoff types: `SimuladoScaleType`, `SimuladoRecord`, `CutoffTargetConfig`
- `src/types/sync.ts`:
  - Entity sync payloads: `StudentProfileSyncPayload`, `QuestionAttemptSyncPayload`, `FsrsReviewStateSyncPayload`, `FsrsReviewLogSyncPayload`, `BookmarkSyncPayload`, `MockExamSyncPayload`
  - Outbox & API contracts: `SyncOutboxEvent` (union of `PROFILE_UPSERT`, `ATTEMPT_CREATE`, `FSRS_STATE_UPSERT`, `FSRS_LOG_CREATE`, `BOOKMARK_UPSERT`, `MOCK_EXAM_UPSERT`), `SyncPushRequest`, `SyncPushResponse`, `SyncPullResponse`, `SyncBootstrapRequest`
- Subdirectories: None.

## Invariants
- Pure type-only modules (`type` and `interface` exports only) with zero runtime code or imports.
- `GrandeAreaId` is restricted to the 5 residency areas (`clinica_medica`, `cirurgia_geral`, `ginecologia_obstetricia`, `pediatria`, `medicina_preventiva`), and `AlternativeLetter` to `'A' | 'B' | 'C' | 'D' | 'E'`.
- `FsrsReviewStateSyncPayload.state` encodes FSRS states numerically (`0`: New, `1`: Learning, `2`: Review, `3`: Relearning), matching `FSRS_STATE_TO_NUM` in `../hooks/useMedR1Store.ts`.
- `QuestionAttemptSyncPayload.id` and `SyncOutboxEvent.eventId` carry client-generated UUIDs for idempotent server ingestion, and sync payloads include ISO-8601 `clientUpdatedAt` timestamps.
- `SyncPushResponse` and `SyncPullResponse` restrict `mode` to `'postgres' | 'local-fallback'`.

## Side Effects
- None (compile-time TypeScript declarations only; no state mutations, network calls, or disk access).

## Verification
- Run: `npm test`
