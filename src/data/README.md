# src/data

## Overview
Static datasets, seed fixtures, medical taxonomy constants, and the lazy-loadable official exam catalog for MedR1. Provides curated baseline questions, complete UEPA 2022–2026 exam banks, baseline performance analytics, initial FSRS flashcards, and simulated live ranking peers.

## Interface
- `src/data/questions.ts`: `MEDICAL_QUESTIONS: MedicalQuestion[]` — curated baseline questions with clinical images, lab tables, and option-level explanations.
- `src/data/examCatalog.ts`: `ExamCatalogEntry` interface and `OFFICIAL_EXAM_CATALOG: ExamCatalogEntry[]` — lightweight exam manifest (`uepa-2022` through `uepa-2026`) with code-split `loader` functions and `// [MEDR1_AUTO_CATALOG_START]` / `// [MEDR1_AUTO_CATALOG_END]` automation markers.
- `src/data/uepa2022Questions.ts` .. `src/data/uepa2026Questions.ts`: `UEPA_2022_QUESTIONS`, `UEPA_2023_QUESTIONS`, `UEPA_2024_QUESTIONS`, `UEPA_2025_QUESTIONS`, `UEPA_2026_QUESTIONS` (`MedicalQuestion[]`, 100 questions each).
- `src/data/taxonomy.ts`: `GrandeAreaMeta` interface, `GRANDES_AREAS: GrandeAreaMeta[]`, `REGIOES_BRASIL: string[]`, and `MEDICAL_CODENAMES: string[]`.
- `src/data/analyticsSeed.ts`: `HISTORICAL_AREA_PERFORMANCE: HistoricalAreaPerformance[]`, `HISTORICAL_TOPIC_PERFORMANCE: HistoricalTopicPerformance[]`, `TEMPORAL_EVOLUTION_WEEKLY: TemporalPoint[]`, `TEMPORAL_EVOLUTION_MONTHLY: TemporalPoint[]`.
- `src/data/flashcardsSeed.ts`: `INITIAL_FLASHCARDS: Flashcard[]` — 5 initial FSRS flashcards across `New`, `Review`, and `Relearning` states.
- `src/data/rankingSeed.ts`: `DEFAULT_USER_PROFILE: UserProfile` and `INITIAL_LIVE_PEERS: LiveRankingUser[]` (12 simulated ranking peers).
- Subdirectories: None.

## Invariants
- All question entries in `questions.ts` and `uepa2022..2026Questions.ts` conform to `MedicalQuestion` (`../types/medical`) with unique `id` and `code` identifiers.
- `OFFICIAL_EXAM_CATALOG` metadata (`idPrefix`, `questionCount`, `activeCount`, `areaCounts`) must stay synchronized with each referenced `UEPA_*_QUESTIONS` array, and the `// [MEDR1_AUTO_CATALOG_START]` / `// [MEDR1_AUTO_CATALOG_END]` markers must be preserved for automated catalog scripts.
- `GRANDES_AREAS` covers all 5 `GrandeAreaId` values with display names and hex colors.
- `INITIAL_FLASHCARDS` computes `createdAt`, `dueAt`, and `lastReviewedAt` relative to module-load `Date.now()` so seed cards remain active relative to the current date.

## Side Effects
- Pure static module exports with no network calls, disk I/O, or persistent storage writes (`flashcardsSeed.ts` calls `Date.now()` once at module evaluation).
- `examCatalog.ts` triggers Vite dynamic `import()` chunk loads when an entry's `loader()` is called.

## Verification
- Run: `npm test`
