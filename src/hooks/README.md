# src/hooks

## Overview
React state management and client-to-Postgres synchronization hooks for MedR1 (`src/hooks/useMedR1Store.ts` and `src/hooks/useSyncEngine.ts`). `useMedR1Store` serves as the central application store coordinating theme/reading comfort, daily study goals, lazy-loaded official exam and IndexedDB question banks, answer recording, bookmarks, FSRS-6 flashcard scheduling and undo, longitudinal analytics, gamification, live peer ranking, simulado history, and cutoff targets, backed by `useSyncEngine` for debounced outbox synchronization.

## Interface
- `src/hooks/useMedR1Store.ts`:
  - `useMedR1Store(options?: { liveRankingEnabled?: boolean; storageAdapter?: StorageAdapter })` — returns theme state/setters (`darkMode`, `setDarkMode`, `themeMode`, `setThemeMode`, `themeSchedule`, `setThemeSchedule`, `readingComfort`, `setReadingComfort`), goal state (`dailyGoal`, `setDailyGoalTarget`), user data & actions (`answers`, `bookmarks`, `profile`, `recordAnswer`, `recordBatchAnswers`, `toggleBookmark`, `updateProfile`, `generateRandomPseudonym`, `resetProgress`), FSRS flashcards (`flashcards`, `flashcardQuestionIds`, `dueFlashcardsCount`, `reviewsTodayStats`, `retentionMode`, `setRetentionMode`, `targetBoard`, `setTargetBoard`, `fsrsEnableFuzz`, `setFsrsEnableFuzz`, `fsrsReviewLogCount`, `canUndoFlashcardReview`, `undoLastFlashcardReview`, `autoCreateFlashcardsOnError`, `setAutoCreateFlashcardsOnError`, `createFlashcardFromQuestion`, `generateFlashcardsFromErrors`, `reviewFlashcard`, `createCustomFlashcard`, `deleteFlashcard`), question bank & loaders (`allQuestions`, `importedQuestions`, `officialCatalogQuestions`, `loadedOfficialExamIds`, `allOfficialExamsLoaded`, `catalogLoading`, `bankVersion`, `filterQuestions`, `ensureExamsLoadedForFilters`, `ensureAllOfficialExamsLoaded`, `ensureExamLoadedForQuestionId`, `importQuestions`, `generateAiCommentaryForQuestion`, `deleteImportedQuestion`, `deleteImportedBatch`, `clearImportedQuestions`), analytics/ranking/gamification (`analytics`, `includeDemoBaseline`, `setIncludeDemoBaseline`, `gamification`, `pendingAchievement`, `dismissPendingAchievement`, `liveRanking`, `errorNotebookQuestions`, `userAccuracyByTopic`, `communityMedianByTopic`), simulados & cutoff (`simuladoHistory`, `cutoffTarget`, `addSimuladoRecord`, `deleteSimuladoRecord`, `updateCutoffTarget`, `restoreExampleSimulados`), and storage/sync controls (`storageQuotaExceeded`, `dismissStorageQuotaWarning`, `syncStatus`, `pendingSyncCount`, `lastSyncedAt`, `flushSyncNow`).
  - Exported helpers & constants: `GamificationSummary`, `diffNewlyUnlockedAchievements`, `getLocalDateKey`, `DEFAULT_FILTERS`, `safeReadStorage`, `writeStorageSafely`, `matchesStudentStatusFilter`, `createSingleSubmissionGuard`.
- `src/hooks/useSyncEngine.ts`:
  - `useSyncEngine(options?: UseSyncEngineOptions)` — returns `{ studentId, syncStatus, pendingCount, lastSyncedAt, enqueueEvents, flushNow, refreshPendingCount }`.
  - Exported types: `SyncStatus` (`'idle' | 'syncing' | 'offline' | 'local-fallback'`), `UseSyncEngineOptions`.
- Subdirectories: None.

## Invariants
- `safeReadStorage` validates parsed JSON values against the fallback type (or custom type guard) and falls back safely without throwing on missing or malformed `localStorage` data.
- `dailyGoalTarget` is clamped to integers in `[1, 300]`; `themeSchedule` hours are clamped to integers in `[0, 23]`.
- Persisted `fsrsReviewLogs` are capped to the most recent 5,000 entries (`slice(-5000)`).
- `allQuestions` deduplicates questions by `id` in strict precedence order: `importedQuestions` → `officialCatalogQuestions` → `MEDICAL_QUESTIONS`.
- `recordAnswer` and `recordBatchAnswers` evaluate correctness against `question.gabaritoOficial` and enqueue `ATTEMPT_CREATE` outbox events; `createFlashcardFromQuestion` prevents duplicate cards for the same `questionId`.
- `useSyncEngine` serializes flushes via `isFlushingRef`, skips remote flushes when `enabled === false` or `adapter.mode === 'local'`, and debounces `enqueueEvents` flushes (`debounceMs` defaults to `2500`).

## Side Effects
- Reads and writes `window.localStorage` across `medr1_*` keys (setting `storageQuotaExceeded` on write failure).
- Mutates `document.documentElement.classList` (`dark` class) when theme state changes.
- Reads and mutates IndexedDB imported question storage via `src/lib/questionBankStore` and dynamically imports official exam chunks.
- Sends `POST /api/questions/comment` requests in `generateAiCommentaryForQuestion`, and flushes outbox sync events through the configured `StorageAdapter` (`HybridPostgresSyncAdapter` by default).
- Registers `matchMedia('(prefers-color-scheme: dark)')`, `online`, and `visibilitychange` listeners plus periodic intervals (30s theme schedule check, 60s midnight rollover, 15s live ranking simulation when `liveRankingEnabled` is true) and debounce timers.

## Verification
- Run: `npm test`
