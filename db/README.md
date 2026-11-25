# db

## Overview
PostgreSQL database schema definitions and migration scripts for MedR1, covering core student/question entities, FSRS-6 spaced repetition state, O(1) incremental question statistics, percentile materialized views, and analytical query templates.

## Interface
- `./migrations/README.md`: Source-of-truth ordered DDL migrations (`001_unified_schema.sql`, `002_weekly_user_stats_ranking.sql`) with Local-First Sync (`TEXT` question IDs, `mock_exams`, `live_study_presence`, `client_updated_at`/`server_updated_at`).
- `schema.sql` (baseline standalone schema predating `001_unified_schema.sql`, plus commented analytical queries 10A–10F):
  - Extension: `pgcrypto`
  - Tables: `students`, `questions`, `question_attempts`, `student_bookmarks`, `review_states`, `fsrs_review_logs`, `question_stats`
  - Materialized Views: `mv_student_performance_percentiles` (`uq_mv_student_perf_pct_key`), `mv_community_topic_benchmarks` (`uq_mv_community_topic_bench_key`)
  - Functions: `refresh_question_stats(p_question_id UUID)`, `trg_fn_sync_question_stats()`, `set_updated_at()`, `normal_cdf(z DOUBLE PRECISION)`
  - Triggers: `trg_question_attempts_sync_stats`, `trg_students_updated_at`, `trg_questions_updated_at`, `trg_review_states_updated_at`

## Invariants
- Production and sync-enabled deployments must use `./migrations/README.md` (`001_unified_schema.sql` + `002_weekly_user_stats_ranking.sql`) as the source of truth rather than `schema.sql`, because `schema.sql` types `questions.id` as `UUID` and omits `mock_exams`, `live_study_presence`, `server_updated_at`, and `student_bookmarks.is_deleted`.
- `trg_fn_sync_question_stats()` performs an incremental `O(1)` update to `question_stats` on `INSERT` into `question_attempts` and falls back to full recalculation via `refresh_question_stats(...)` on `UPDATE` or `DELETE`.
- `normal_cdf(z DOUBLE PRECISION)` must stay `IMMUTABLE` and `STRICT` (Abramowitz & Stegun approximation) so PostgreSQL query planners can evaluate it without external extensions.
- Materialized views require periodic `REFRESH MATERIALIZED VIEW CONCURRENTLY` (`mv_student_performance_percentiles`, `mv_community_topic_benchmarks`, `mv_weekly_user_stats`) to reflect new attempts; unique indexes must be preserved.

## Side Effects
- Applying `schema.sql` or migrations creates/alters PostgreSQL extensions, tables, GIN/B-tree indexes, functions, triggers, and materialized views, and mutates `question_stats` via row-level triggers on `question_attempts`.

## Verification
- Run: `psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/migrations/001_unified_schema.sql -f db/migrations/002_weekly_user_stats_ranking.sql`
