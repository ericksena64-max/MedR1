-- ============================================================================
-- db/migrations/002_weekly_user_stats_ranking.sql
-- Materialized View para os Rankings Diário ao Vivo, Semanal e Mensal
-- Regra: apenas alunos ativos que responderam >= 1 questão no período aparecem.
-- ============================================================================

DROP MATERIALIZED VIEW IF EXISTS mv_weekly_user_stats;

CREATE MATERIALIZED VIEW mv_weekly_user_stats AS
WITH bounds AS (
    SELECT
        (NOW() AT TIME ZONE 'America/Sao_Paulo')::DATE AS today_br,
        NOW() - INTERVAL '7 days' AS week_start,
        (DATE_TRUNC('month', NOW() AT TIME ZONE 'America/Sao_Paulo') AT TIME ZONE 'America/Sao_Paulo') AS month_start
),
period_attempts AS (
    SELECT
        qa.student_id,
        COUNT(*) FILTER (
            WHERE (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE = (SELECT today_br FROM bounds)
        )::INTEGER AS questions_today_calc,
        COUNT(*) FILTER (
            WHERE (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE = (SELECT today_br FROM bounds)
              AND qa.is_correct
        )::INTEGER AS correct_today_calc,
        COUNT(*) FILTER (WHERE qa.answered_at >= (SELECT week_start FROM bounds))::INTEGER AS questions_week,
        COUNT(*) FILTER (WHERE qa.answered_at >= (SELECT week_start FROM bounds) AND qa.is_correct)::INTEGER AS correct_week,
        COUNT(*)::INTEGER AS questions_month,
        COUNT(*) FILTER (WHERE qa.is_correct)::INTEGER AS correct_month,
        MAX(qa.answered_at) AS last_attempt_at
    FROM question_attempts qa
    WHERE qa.answered_at >= LEAST((SELECT week_start FROM bounds), (SELECT month_start FROM bounds))
    GROUP BY qa.student_id
)
SELECT
    s.id AS student_id,
    s.full_name AS real_name,
    COALESCE(s.pseudonym, 'FutureR1_' || SUBSTRING(s.id::TEXT, 1, 4)) AS pseudonym,
    s.use_pseudonym,
    COALESCE(s.target_institution, 'Geral') AS target_institution,
    s.avatar_initials,
    COALESCE(lsp.questions_today, pa.questions_today_calc, 0) AS questions_today,
    COALESCE(lsp.correct_today, pa.correct_today_calc, 0) AS correct_today,
    COALESCE(pa.questions_week, 0) AS questions_week,
    COALESCE(pa.correct_week, 0) AS correct_week,
    CASE
        WHEN COALESCE(pa.questions_week, 0) > 0
        THEN ROUND((pa.correct_week::NUMERIC / pa.questions_week) * 100, 1)
        ELSE 0.0
    END AS accuracy_week,
    COALESCE(pa.questions_month, 0) AS questions_month,
    COALESCE(pa.correct_month, 0) AS correct_month,
    COALESCE(lsp.current_streak, 0) AS streak,
    COALESCE(lsp.current_area, s.target_specialty, 'Clínica Médica') AS current_area,
    COALESCE(lsp.is_online, FALSE) AS is_online,
    COALESCE(
        EXTRACT(EPOCH FROM (NOW() - COALESCE(lsp.last_heartbeat_at, pa.last_attempt_at, s.server_updated_at)))::INTEGER,
        9999
    ) AS last_active_seconds_ago
FROM students s
LEFT JOIN period_attempts pa ON pa.student_id = s.id
LEFT JOIN live_study_presence lsp ON lsp.student_id = s.id
WHERE s.is_active = TRUE
  AND (
      COALESCE(lsp.questions_today, pa.questions_today_calc, 0) > 0
      OR COALESCE(pa.questions_week, 0) > 0
      OR COALESCE(pa.questions_month, 0) > 0
  );

CREATE UNIQUE INDEX IF NOT EXISTS uq_mv_weekly_user_stats_student
    ON mv_weekly_user_stats (student_id);

CREATE INDEX IF NOT EXISTS idx_mv_weekly_user_stats_daily
    ON mv_weekly_user_stats (questions_today DESC, correct_today DESC);

CREATE INDEX IF NOT EXISTS idx_mv_weekly_user_stats_weekly
    ON mv_weekly_user_stats (questions_week DESC, accuracy_week DESC, correct_week DESC);

CREATE INDEX IF NOT EXISTS idx_mv_weekly_user_stats_monthly
    ON mv_weekly_user_stats (questions_month DESC);
