-- ============================================================================
-- db/migrations/001_unified_schema.sql — MedR1 Unified Schema (Source of Truth)
-- Consolidates db/schema.sql + database/schema.prisma for PostgreSQL 13+
-- (Supabase, Neon, RDS, or self-hosted) with Local-First Sync support.
--
-- Key design decisions:
--   1. Deterministic TEXT primary keys on `questions` (e.g. "q-uepa-2026-01")
--      aligned with the static catalog and client-side IDs.
--   2. Client-generated UUIDs on `question_attempts`, `mock_exams`, and
--      `fsrs_review_logs` for idempotent batch sync (`ON CONFLICT DO NOTHING`).
--   3. `client_updated_at` and `server_updated_at` on all mutable student
--      progress tables for Last-Write-Wins conflict resolution and delta pulls.
--   4. Incremental O(1) `question_stats` trigger, FSRS-6 state + logs,
--      `normal_cdf(z)`, and P50/P75 Materialized Views.
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. ALUNOS / PERFIS (Students & Profiles)
-- ============================================================================
CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT,
    pseudonym VARCHAR(60) UNIQUE,
    use_pseudonym BOOLEAN NOT NULL DEFAULT FALSE,
    target_specialty VARCHAR(100),
    target_institution VARCHAR(100),
    target_boards JSONB NOT NULL DEFAULT '[]'::JSONB,
    avatar_initials VARCHAR(3) NOT NULL DEFAULT 'MR',
    daily_goal_target SMALLINT NOT NULL DEFAULT 20 CHECK (daily_goal_target BETWEEN 1 AND 300),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 2. QUESTÕES (Deterministic TEXT IDs matching MedicalQuestion.id)
-- ============================================================================
CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,                            -- Ex.: "q-uepa-2026-01"
    external_code VARCHAR(80) UNIQUE,               -- Ex.: "UEPA-2026-001"
    exam_board VARCHAR(80) NOT NULL,                -- Banca: "UEPA", "ENARE", "VUNESP", "FUVEST"
    institution VARCHAR(120),                       -- Instituição: "UEPA", "USP-SP", "UNIFESP"
    state_uf CHAR(2),
    region VARCHAR(40),
    exam_year SMALLINT CHECK (exam_year >= 1990 AND exam_year <= 2100),
    exam_type VARCHAR(30) NOT NULL DEFAULT 'Acesso Direto'
        CHECK (exam_type IN ('Acesso Direto', 'R+', 'Revalida')),
    grande_area_id VARCHAR(40) NOT NULL
        CHECK (grande_area_id IN (
            'clinica_medica',
            'cirurgia_geral',
            'ginecologia_obstetricia',
            'pediatria',
            'medicina_preventiva'
        )),
    specialty VARCHAR(100) NOT NULL,                -- Nome legível da Grande Área
    topic VARCHAR(150),                             -- Tema canônico
    subtopic VARCHAR(150),                          -- Subtema específico
    statement TEXT NOT NULL,                        -- Enunciado da questão
    options JSONB NOT NULL,                         -- [{"letter":"A","text":"...","explanation":"..."}]
    correct_option VARCHAR(10) NOT NULL CHECK (correct_option IN ('A', 'B', 'C', 'D', 'E')),
    explanation TEXT,                               -- Comentário geral (Markdown + KaTeX)
    clinical_pearl TEXT,                            -- Pérola clínica para flashcards
    reference_source TEXT,                          -- Bibliografia / diretriz oficial
    clinical_image JSONB,                           -- {"url":"...","modality":"ECG","caption":"..."}
    lab_table JSONB,                                -- [{"exame":"K+","resultado":"6.4","referencia":"3.5-5.0","alterado":"alto"}]
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
    is_annulled BOOLEAN NOT NULL DEFAULT FALSE,
    is_outdated BOOLEAN NOT NULL DEFAULT FALSE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    search_vector TSVECTOR GENERATED ALWAYS AS (
        to_tsvector(
            'portuguese',
            COALESCE(external_code, '') || ' ' ||
            COALESCE(exam_board, '') || ' ' ||
            COALESCE(institution, '') || ' ' ||
            COALESCE(specialty, '') || ' ' ||
            COALESCE(topic, '') || ' ' ||
            COALESCE(subtopic, '') || ' ' ||
            COALESCE(statement, '')
        )
    ) STORED,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 3. SIMULADOS (Mock Exams)
-- ============================================================================
CREATE TABLE IF NOT EXISTS mock_exams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    title VARCHAR(180) NOT NULL,
    duration_seconds INTEGER NOT NULL CHECK (duration_seconds >= 0),
    elapsed_seconds INTEGER NOT NULL DEFAULT 0 CHECK (elapsed_seconds >= 0),
    total_questions INTEGER NOT NULL CHECK (total_questions >= 0),
    correct_count INTEGER NOT NULL DEFAULT 0 CHECK (correct_count >= 0),
    status VARCHAR(20) NOT NULL DEFAULT 'in_progress'
        CHECK (status IN ('in_progress', 'completed', 'abandoned')),
    completed_at TIMESTAMPTZ,
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 4. RESPOSTAS / TENTATIVAS DO ALUNO (Idempotent via client-generated UUID)
-- ============================================================================
CREATE TABLE IF NOT EXISTS question_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    mock_exam_id UUID REFERENCES mock_exams(id) ON DELETE SET NULL,
    selected_option VARCHAR(10) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_spent_ms INTEGER CHECK (time_spent_ms >= 0),
    attempt_number INTEGER NOT NULL DEFAULT 1 CHECK (attempt_number >= 1),
    mode VARCHAR(30) NOT NULL DEFAULT 'estudo'
        CHECK (mode IN ('estudo', 'simulado', 'practice', 'review')),
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 5. FAVORITAS / CADERNO DE ERROS (Soft delete para delta sync)
-- ============================================================================
CREATE TABLE IF NOT EXISTS student_bookmarks (
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    note TEXT,
    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (student_id, question_id)
);

-- ============================================================================
-- 6. ESTADO DE REVISÃO ESPAÇADA (FSRS-6 / ts-fsrs) + LOG DE REVISÕES
-- ============================================================================
CREATE TABLE IF NOT EXISTS review_states (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    state VARCHAR(20) NOT NULL DEFAULT 'New'
        CHECK (state IN ('New', 'Learning', 'Review', 'Relearning')),
    stability DOUBLE PRECISION NOT NULL DEFAULT 0,
    difficulty DOUBLE PRECISION NOT NULL DEFAULT 0,
    elapsed_days DOUBLE PRECISION NOT NULL DEFAULT 0,
    scheduled_days DOUBLE PRECISION NOT NULL DEFAULT 0,
    learning_steps SMALLINT NOT NULL DEFAULT 0 CHECK (learning_steps >= 0),
    reps INTEGER NOT NULL DEFAULT 0 CHECK (reps >= 0),
    lapses INTEGER NOT NULL DEFAULT 0 CHECK (lapses >= 0),
    last_rating SMALLINT CHECK (last_rating BETWEEN 1 AND 4), -- 1=Again, 2=Hard, 3=Good, 4=Easy
    due_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_reviewed_at TIMESTAMPTZ,
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_review_states_student_question UNIQUE (student_id, question_id)
);

CREATE TABLE IF NOT EXISTS fsrs_review_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    review_state_id UUID NOT NULL REFERENCES review_states(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 4),
    state VARCHAR(20) NOT NULL CHECK (state IN ('New', 'Learning', 'Review', 'Relearning')),
    stability DOUBLE PRECISION NOT NULL,
    difficulty DOUBLE PRECISION NOT NULL,
    elapsed_days DOUBLE PRECISION NOT NULL,
    scheduled_days DOUBLE PRECISION NOT NULL,
    desired_retention DOUBLE PRECISION NOT NULL DEFAULT 0.90,
    reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 7. PRESENÇA E RANKING AO VIVO (Live Study Presence)
-- ============================================================================
CREATE TABLE IF NOT EXISTS live_study_presence (
    student_id UUID PRIMARY KEY REFERENCES students(id) ON DELETE CASCADE,
    is_online BOOLEAN NOT NULL DEFAULT TRUE,
    last_heartbeat_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    questions_today INTEGER NOT NULL DEFAULT 0 CHECK (questions_today >= 0),
    correct_today INTEGER NOT NULL DEFAULT 0 CHECK (correct_today >= 0),
    current_streak INTEGER NOT NULL DEFAULT 0 CHECK (current_streak >= 0),
    current_area VARCHAR(100),
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 8. ESTATÍSTICAS CONSOLIDADAS POR QUESTÃO (Atualização incremental O(1))
-- ============================================================================
CREATE TABLE IF NOT EXISTS question_stats (
    question_id TEXT PRIMARY KEY REFERENCES questions(id) ON DELETE CASCADE,
    total_attempts BIGINT NOT NULL DEFAULT 0 CHECK (total_attempts >= 0),
    correct_attempts BIGINT NOT NULL DEFAULT 0 CHECK (correct_attempts >= 0),
    accuracy_pct NUMERIC(5, 2) NOT NULL DEFAULT 0.00,
    total_time_ms BIGINT NOT NULL DEFAULT 0 CHECK (total_time_ms >= 0),
    timed_attempts BIGINT NOT NULL DEFAULT 0 CHECK (timed_attempts >= 0),
    avg_time_ms INTEGER CHECK (avg_time_ms >= 0),
    option_counts JSONB NOT NULL DEFAULT '{}'::JSONB,
    last_answered_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION refresh_question_stats(p_question_id TEXT)
RETURNS VOID AS $$
DECLARE
    v_option_counts JSONB;
BEGIN
    SELECT COALESCE(jsonb_object_agg(selected_option, cnt), '{}'::JSONB)
      INTO v_option_counts
    FROM (
        SELECT selected_option, COUNT(*)::BIGINT AS cnt
        FROM question_attempts
        WHERE question_id = p_question_id
        GROUP BY selected_option
    ) sub;

    INSERT INTO question_stats (
        question_id,
        total_attempts,
        correct_attempts,
        accuracy_pct,
        total_time_ms,
        timed_attempts,
        avg_time_ms,
        option_counts,
        last_answered_at,
        updated_at
    )
    SELECT
        p_question_id,
        COUNT(*)::BIGINT,
        COUNT(*) FILTER (WHERE is_correct)::BIGINT,
        COALESCE(
            ROUND(
                (COUNT(*) FILTER (WHERE is_correct)::NUMERIC / NULLIF(COUNT(*), 0)) * 100,
                2
            ),
            0.00
        ),
        COALESCE(SUM(time_spent_ms), 0)::BIGINT,
        COUNT(time_spent_ms)::BIGINT,
        ROUND(AVG(time_spent_ms))::INTEGER,
        v_option_counts,
        MAX(answered_at),
        NOW()
    FROM question_attempts
    WHERE question_id = p_question_id
    ON CONFLICT (question_id) DO UPDATE SET
        total_attempts   = EXCLUDED.total_attempts,
        correct_attempts = EXCLUDED.correct_attempts,
        accuracy_pct     = EXCLUDED.accuracy_pct,
        total_time_ms    = EXCLUDED.total_time_ms,
        timed_attempts   = EXCLUDED.timed_attempts,
        avg_time_ms      = EXCLUDED.avg_time_ms,
        option_counts    = EXCLUDED.option_counts,
        last_answered_at = EXCLUDED.last_answered_at,
        updated_at       = NOW();
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION trg_fn_sync_question_stats()
RETURNS TRIGGER AS $$
DECLARE
    v_opt_key TEXT;
BEGIN
    IF TG_OP = 'INSERT' THEN
        v_opt_key := NEW.selected_option;

        INSERT INTO question_stats (
            question_id,
            total_attempts,
            correct_attempts,
            accuracy_pct,
            total_time_ms,
            timed_attempts,
            avg_time_ms,
            option_counts,
            last_answered_at,
            updated_at
        )
        VALUES (
            NEW.question_id,
            1,
            CASE WHEN NEW.is_correct THEN 1 ELSE 0 END,
            CASE WHEN NEW.is_correct THEN 100.00 ELSE 0.00 END,
            COALESCE(NEW.time_spent_ms, 0),
            CASE WHEN NEW.time_spent_ms IS NOT NULL THEN 1 ELSE 0 END,
            NEW.time_spent_ms,
            jsonb_build_object(v_opt_key, 1),
            NEW.answered_at,
            NOW()
        )
        ON CONFLICT (question_id) DO UPDATE SET
            total_attempts   = question_stats.total_attempts + 1,
            correct_attempts = question_stats.correct_attempts + CASE WHEN NEW.is_correct THEN 1 ELSE 0 END,
            accuracy_pct     = ROUND(
                (
                    (question_stats.correct_attempts + CASE WHEN NEW.is_correct THEN 1 ELSE 0 END)::NUMERIC
                    / (question_stats.total_attempts + 1)
                ) * 100,
                2
            ),
            total_time_ms    = question_stats.total_time_ms + COALESCE(NEW.time_spent_ms, 0),
            timed_attempts   = question_stats.timed_attempts + CASE WHEN NEW.time_spent_ms IS NOT NULL THEN 1 ELSE 0 END,
            avg_time_ms      = CASE
                WHEN (question_stats.timed_attempts + CASE WHEN NEW.time_spent_ms IS NOT NULL THEN 1 ELSE 0 END) > 0
                THEN ROUND(
                    (question_stats.total_time_ms + COALESCE(NEW.time_spent_ms, 0))::NUMERIC
                    / (question_stats.timed_attempts + CASE WHEN NEW.time_spent_ms IS NOT NULL THEN 1 ELSE 0 END)
                )::INTEGER
                ELSE NULL
            END,
            option_counts    = jsonb_set(
                question_stats.option_counts,
                ARRAY[v_opt_key],
                to_jsonb(COALESCE((question_stats.option_counts ->> v_opt_key)::BIGINT, 0) + 1),
                TRUE
            ),
            last_answered_at = GREATEST(COALESCE(question_stats.last_answered_at, NEW.answered_at), NEW.answered_at),
            updated_at       = NOW();

        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        PERFORM refresh_question_stats(OLD.question_id);
        RETURN OLD;
    ELSE
        PERFORM refresh_question_stats(NEW.question_id);
        IF NEW.question_id IS DISTINCT FROM OLD.question_id THEN
            PERFORM refresh_question_stats(OLD.question_id);
        END IF;
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_question_attempts_sync_stats ON question_attempts;
CREATE TRIGGER trg_question_attempts_sync_stats
    AFTER INSERT OR UPDATE OR DELETE ON question_attempts
    FOR EACH ROW EXECUTE FUNCTION trg_fn_sync_question_stats();

-- ============================================================================
-- 9. MATERIALIZED VIEWS DE PERCENTIS P50 E P75
-- ============================================================================
CREATE MATERIALIZED VIEW IF NOT EXISTS mv_student_performance_percentiles AS
SELECT
    qa.student_id,
    q.specialty,
    COALESCE(q.topic, 'Sem tema definido') AS topic,
    COUNT(*) AS total_attempts,
    COUNT(*) FILTER (WHERE qa.is_correct) AS correct_attempts,
    ROUND(
        (COUNT(*) FILTER (WHERE qa.is_correct)::NUMERIC / NULLIF(COUNT(*), 0)) * 100,
        2
    ) AS accuracy_pct,
    ROUND(
        (PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY qa.time_spent_ms) FILTER (WHERE qa.time_spent_ms IS NOT NULL))::NUMERIC / 1000.0,
        2
    ) AS p50_time_seconds,
    ROUND(
        (PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY qa.time_spent_ms) FILTER (WHERE qa.time_spent_ms IS NOT NULL))::NUMERIC / 1000.0,
        2
    ) AS p75_time_seconds,
    MAX(qa.answered_at) AS last_attempt_at
FROM question_attempts qa
JOIN questions q
    ON q.id = qa.question_id
WHERE q.is_active = TRUE
GROUP BY
    qa.student_id,
    q.specialty,
    COALESCE(q.topic, 'Sem tema definido');

CREATE UNIQUE INDEX IF NOT EXISTS uq_mv_student_perf_pct_key
    ON mv_student_performance_percentiles (student_id, specialty, topic);

CREATE MATERIALIZED VIEW IF NOT EXISTS mv_community_topic_benchmarks AS
WITH per_student_topic AS (
    SELECT
        qa.student_id,
        q.specialty,
        COALESCE(q.topic, 'Sem tema definido') AS topic,
        COUNT(*) AS attempts,
        (COUNT(*) FILTER (WHERE qa.is_correct)::DOUBLE PRECISION / NULLIF(COUNT(*), 0)) * 100.0 AS student_accuracy_pct
    FROM question_attempts qa
    JOIN questions q
        ON q.id = qa.question_id
    WHERE q.is_active = TRUE
    GROUP BY
        qa.student_id,
        q.specialty,
        COALESCE(q.topic, 'Sem tema definido')
    HAVING COUNT(*) >= 3
)
SELECT
    specialty,
    topic,
    COUNT(*)::BIGINT AS students_sampled,
    ROUND(
        (PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY student_accuracy_pct))::NUMERIC,
        2
    ) AS community_median_p50_pct,
    ROUND(
        (PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY student_accuracy_pct))::NUMERIC,
        2
    ) AS community_p75_pct
FROM per_student_topic
GROUP BY specialty, topic;

CREATE UNIQUE INDEX IF NOT EXISTS uq_mv_community_topic_bench_key
    ON mv_community_topic_benchmarks (specialty, topic);

-- ============================================================================
-- 10. ÍNDICES DE PERFORMANCE E SINCRONIZAÇÃO DELTA
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_questions_filters
    ON questions (exam_board, exam_year, specialty, topic)
    WHERE is_active = TRUE;

CREATE INDEX IF NOT EXISTS idx_questions_options_gin
    ON questions USING GIN (options);

CREATE INDEX IF NOT EXISTS idx_questions_search_gin
    ON questions USING GIN (search_vector);

CREATE INDEX IF NOT EXISTS idx_mock_exams_student_sync
    ON mock_exams (student_id, server_updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_attempts_student_answered_at
    ON question_attempts (student_id, answered_at DESC);

CREATE INDEX IF NOT EXISTS idx_attempts_student_sync
    ON question_attempts (student_id, server_updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_attempts_question_id
    ON question_attempts (question_id);

CREATE INDEX IF NOT EXISTS idx_attempts_student_question
    ON question_attempts (student_id, question_id);

CREATE INDEX IF NOT EXISTS idx_bookmarks_student_sync
    ON student_bookmarks (student_id, server_updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_review_states_due_queue
    ON review_states (student_id, due_at ASC);

CREATE INDEX IF NOT EXISTS idx_review_states_student_sync
    ON review_states (student_id, server_updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_fsrs_logs_student_reviewed
    ON fsrs_review_logs (student_id, reviewed_at DESC);

CREATE INDEX IF NOT EXISTS idx_fsrs_logs_student_sync
    ON fsrs_review_logs (student_id, server_updated_at DESC);

CREATE INDEX IF NOT EXISTS idx_question_stats_accuracy
    ON question_stats (accuracy_pct ASC, total_attempts DESC);

-- ============================================================================
-- 11. TRIGGERS DE `updated_at` / `server_updated_at`
-- ============================================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION set_server_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.server_updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_questions_updated_at ON questions;
CREATE TRIGGER trg_questions_updated_at
    BEFORE UPDATE ON questions
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_students_server_updated_at ON students;
CREATE TRIGGER trg_students_server_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

DROP TRIGGER IF EXISTS trg_mock_exams_server_updated_at ON mock_exams;
CREATE TRIGGER trg_mock_exams_server_updated_at
    BEFORE UPDATE ON mock_exams
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

DROP TRIGGER IF EXISTS trg_question_attempts_server_updated_at ON question_attempts;
CREATE TRIGGER trg_question_attempts_server_updated_at
    BEFORE UPDATE ON question_attempts
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

DROP TRIGGER IF EXISTS trg_student_bookmarks_server_updated_at ON student_bookmarks;
CREATE TRIGGER trg_student_bookmarks_server_updated_at
    BEFORE UPDATE ON student_bookmarks
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

DROP TRIGGER IF EXISTS trg_review_states_server_updated_at ON review_states;
CREATE TRIGGER trg_review_states_server_updated_at
    BEFORE UPDATE ON review_states
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

DROP TRIGGER IF EXISTS trg_live_presence_server_updated_at ON live_study_presence;
CREATE TRIGGER trg_live_presence_server_updated_at
    BEFORE UPDATE ON live_study_presence
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();

-- ============================================================================
-- 12. FUNÇÃO NORMAL PADRÃO ACUMULADA — normal_cdf(z) (Abramowitz & Stegun)
-- ============================================================================
CREATE OR REPLACE FUNCTION normal_cdf(z DOUBLE PRECISION)
RETURNS DOUBLE PRECISION
LANGUAGE sql
IMMUTABLE
STRICT
AS $$
    WITH calc AS (
        SELECT
            1.0 / (1.0 + 0.2316419 * ABS(z)) AS t,
            0.3989422804014327 * EXP(-(z * z) / 2.0) AS d
    ),
    prob AS (
        SELECT
            d * t * (
                0.31938153
                + t * (
                    -0.356563782
                    + t * (
                        1.781477937
                        + t * (-1.821255978 + t * 1.330274429)
                    )
                )
            ) AS p
        FROM calc
    )
    SELECT CASE WHEN z > 0 THEN 1.0 - p ELSE p END FROM prob;
$$;
