# db/migrations

## Overview
Ordered PostgreSQL DDL migrations that serve as the source of truth for the MedR1 relational schema, local-first delta synchronization metadata, incremental question statistics, FSRS-6 spaced repetition state, and live/weekly/monthly leaderboard materialized views (PostgreSQL 13+).

## Interface
- `001_unified_schema.sql`:
  - Extension: `pgcrypto`
  - Tables: `students`, `questions`, `mock_exams`, `question_attempts`, `student_bookmarks`, `review_states`, `fsrs_review_logs`, `live_study_presence`, `question_stats`
  - Materialized Views: `mv_student_performance_percentiles` (unique index `uq_mv_student_perf_pct_key`), `mv_community_topic_benchmarks` (unique index `uq_mv_community_topic_bench_key`)
  - Functions: `refresh_question_stats(p_question_id TEXT)`, `trg_fn_sync_question_stats()`, `set_updated_at()`, `set_server_updated_at()`, `normal_cdf(z DOUBLE PRECISION)`
  - Triggers: `trg_question_attempts_sync_stats`, `trg_questions_updated_at`, `trg_students_server_updated_at`, `trg_mock_exams_server_updated_at`, `trg_question_attempts_server_updated_at`, `trg_student_bookmarks_server_updated_at`, `trg_review_states_server_updated_at`, `trg_live_presence_server_updated_at`
- `002_weekly_user_stats_ranking.sql`:
  - Materialized View: `mv_weekly_user_stats`
  - Indexes: `uq_mv_weekly_user_stats_student` (unique on `student_id`), `idx_mv_weekly_user_stats_daily`, `idx_mv_weekly_user_stats_weekly`, `idx_mv_weekly_user_stats_monthly`

## Invariants
- Migrations are numbered and ordered (`001_unified_schema.sql` must run before `002_weekly_user_stats_ranking.sql`, which depends on `students`, `question_attempts`, and `live_study_presence`).
- `questions.id` is a deterministic `TEXT` primary key aligned with client-side catalog IDs; `questions.grande_area_id` is constrained to `'clinica_medica'`, `'cirurgia_geral'`, `'ginecologia_obstetricia'`, `'pediatria'`, or `'medicina_preventiva'`.
- Client-generated `UUID` primary keys on `question_attempts`, `mock_exams`, and `fsrs_review_logs` plus `(student_id, question_id)` uniqueness on `student_bookmarks` and `review_states` must remain compatible with idempotent `ON CONFLICT` sync upserts.
- Mutable student tables (`students`, `mock_exams`, `question_attempts`, `student_bookmarks`, `review_states`, `live_study_presence`) carry both `client_updated_at` and `server_updated_at`, with `BEFORE UPDATE` triggers forcing `server_updated_at = NOW()`.
- `mv_community_topic_benchmarks` filters out student-topic pairs with `< 3` attempts (`HAVING COUNT(*) >= 3`), and `mv_weekly_user_stats` includes only active students (`students.is_active = TRUE`) with `> 0` questions in the daily, 7-day, or monthly (`America/Sao_Paulo`) window.
- `mv_student_performance_percentiles`, `mv_community_topic_benchmarks`, and `mv_weekly_user_stats` each maintain a unique index so `REFRESH MATERIALIZED VIEW CONCURRENTLY` can run without blocking reads.

## Side Effects
- Executes DDL against PostgreSQL (`CREATE EXTENSION`, `CREATE TABLE`, `CREATE INDEX`, `CREATE MATERIALIZED VIEW`, `CREATE OR REPLACE FUNCTION`, `DROP`/`CREATE TRIGGER`).
- `002_weekly_user_stats_ranking.sql` drops and recreates `mv_weekly_user_stats` (`DROP MATERIALIZED VIEW IF EXISTS mv_weekly_user_stats`), populating it immediately at migration time.
- `trg_question_attempts_sync_stats` mutates `question_stats` on every `INSERT`, `UPDATE`, or `DELETE` to `question_attempts`.

## Verification
- Run: `psql "$DATABASE_URL" -v ON_ERROR_STOP=1 -f db/migrations/001_unified_schema.sql -f db/migrations/002_weekly_user_stats_ranking.sql`
