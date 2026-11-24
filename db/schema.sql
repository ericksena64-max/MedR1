-- ============================================================================
-- db/schema.sql — MedR1 (Banco de Questões para Residência Médica)
-- Compatível com PostgreSQL 13+ (Supabase, Neon, RDS ou self-hosted)
--
-- Inclui:
--   1. Tabelas base (students, questions, question_attempts, review_states,
--      fsrs_review_logs, student_bookmarks)
--   2. Estatísticas incrementais O(1) por questão + % por alternativa (question_stats)
--   3. Materialized Views de Percentis P50/P75 (tempo do aluno E mediana da comunidade)
--   4. Índices compostos, parciais, GIN (JSONB) e busca textual em português
--   5. Triggers de updated_at e sincronização incremental de estatísticas
--   6. Consultas analíticas prontas (Evolução 30 dias geral e por temas mais errados,
--      Pareto 80/20 por banca e Fila FSRS vencida)
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- 1. ALUNOS / PERFIS
-- Nota: Em Supabase Auth, vincule `id` a `auth.users(id)`.
-- ============================================================================
CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT,
    pseudonym VARCHAR(60),
    use_pseudonym BOOLEAN NOT NULL DEFAULT FALSE,
    target_specialty VARCHAR(100),
    target_institution VARCHAR(100),
    daily_goal_target SMALLINT NOT NULL DEFAULT 20 CHECK (daily_goal_target BETWEEN 1 AND 300),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 2. QUESTÕES
-- ============================================================================
CREATE TABLE IF NOT EXISTS questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_code VARCHAR(80) UNIQUE,              -- Ex.: "ENARE-2026-042" ou "UEPA-2025-018"
    exam_board VARCHAR(80) NOT NULL,               -- Banca aplicadora: "ENARE", "UEPA", "VUNESP", "FUVEST"
    institution VARCHAR(120),                      -- Instituição: "USP-SP", "UNIFESP", "UEPA"
    exam_year SMALLINT CHECK (exam_year >= 1990 AND exam_year <= 2100),
    exam_type VARCHAR(30) DEFAULT 'Acesso Direto', -- 'Acesso Direto', 'R+', 'Revalida'
    grande_area_id VARCHAR(40),                    -- 'clinica_medica', 'cirurgia_geral', etc.
    specialty VARCHAR(100) NOT NULL,               -- Grande Área / Especialidade
    topic VARCHAR(150),                            -- Tema (ex.: "Cardiologia", "Abdome Agudo")
    subtopic VARCHAR(150),                         -- Subtema específico
    statement TEXT NOT NULL,                       -- Enunciado da questão
    options JSONB NOT NULL,                        -- [{"key":"A","text":"...","explanation":"..."}]
    correct_option VARCHAR(10) NOT NULL,
    explanation TEXT,                              -- Comentário geral (Markdown + KaTeX)
    clinical_pearl TEXT,                           -- Pérola clínica para flashcards
    reference_source TEXT,                         -- Bibliografia / diretriz oficial
    clinical_image JSONB,                          -- {"url":"...","modality":"ECG","caption":"..."}
    lab_table JSONB,                               -- [{"exame":"K+","resultado":"6.4","referencia":"3.5-5.0","alterado":"alto"}]
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
-- 3. RESPOSTAS / TENTATIVAS DO ALUNO (Log imutável de resoluções)
-- ============================================================================
CREATE TABLE IF NOT EXISTS question_attempts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    selected_option VARCHAR(10) NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_spent_ms INTEGER CHECK (time_spent_ms >= 0),
    attempt_number INTEGER NOT NULL DEFAULT 1 CHECK (attempt_number >= 1),
    mode VARCHAR(30) NOT NULL DEFAULT 'practice',  -- 'practice', 'simulado', 'review'
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 4. FAVORITAS / CADERNO DE ERROS
-- ============================================================================
CREATE TABLE IF NOT EXISTS student_bookmarks (
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    note TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (student_id, question_id)
);

-- ============================================================================
-- 5. ESTADO DE REVISÃO ESPAÇADA (FSRS-6 / ts-fsrs) + LOG DE REVISÕES
-- ============================================================================
CREATE TABLE IF NOT EXISTS review_states (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
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
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_review_states_student_question UNIQUE (student_id, question_id)
);

CREATE TABLE IF NOT EXISTS fsrs_review_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    review_state_id UUID NOT NULL REFERENCES review_states(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 4),
    state VARCHAR(20) NOT NULL CHECK (state IN ('New', 'Learning', 'Review', 'Relearning')),
    stability DOUBLE PRECISION NOT NULL,
    difficulty DOUBLE PRECISION NOT NULL,
    elapsed_days DOUBLE PRECISION NOT NULL,
    scheduled_days DOUBLE PRECISION NOT NULL,
    desired_retention DOUBLE PRECISION NOT NULL DEFAULT 0.90,
    reviewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================================
-- 6. ESTATÍSTICAS CONSOLIDADAS POR QUESTÃO (Atualização incremental O(1))
-- Guarda taxa global, tempo médio e distribuição por alternativa (Principal Distrator)
-- sem fazer COUNT(*) sobre milhões de tentativas a cada resposta.
-- ============================================================================
CREATE TABLE IF NOT EXISTS question_stats (
    question_id UUID PRIMARY KEY REFERENCES questions(id) ON DELETE CASCADE,
    total_attempts BIGINT NOT NULL DEFAULT 0 CHECK (total_attempts >= 0),
    correct_attempts BIGINT NOT NULL DEFAULT 0 CHECK (correct_attempts >= 0),
    accuracy_pct NUMERIC(5, 2) NOT NULL DEFAULT 0.00,
    total_time_ms BIGINT NOT NULL DEFAULT 0 CHECK (total_time_ms >= 0),
    timed_attempts BIGINT NOT NULL DEFAULT 0 CHECK (timed_attempts >= 0),
    avg_time_ms INTEGER CHECK (avg_time_ms >= 0),
    option_counts JSONB NOT NULL DEFAULT '{}'::JSONB, -- Ex.: {"A": 12, "B": 184, "C": 41, "D": 29}
    last_answered_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Recalcula do zero apenas em UPDATE/DELETE raros (ou manutenção)
CREATE OR REPLACE FUNCTION refresh_question_stats(p_question_id UUID)
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

-- Trigger otimizada: INSERT faz incremento O(1); UPDATE/DELETE faz recálculo seguro
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
-- 7. MATERIALIZED VIEWS DE PERCENTIS P50 E P75
--   7A. Por aluno (tempo P50/P75 e acurácia individual por especialidade/tema)
--   7B. Benchmark da Comunidade (Mediana P50 e Top Performers P75 entre alunos)
-- ============================================================================

-- 7A. Desempenho e tempo (P50/P75) por aluno x especialidade x tema
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

-- 7B. Benchmark da Comunidade: Mediana (P50) e Top 25% (P75) de ACURÁCIA por tema
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
    HAVING COUNT(*) >= 3 -- Evita distorção por amostra mínima de 1–2 questões
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
-- 8. ÍNDICES PARA PERFORMANCE
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_attempts_student_answered_at
    ON question_attempts (student_id, answered_at DESC);

CREATE INDEX IF NOT EXISTS idx_attempts_question_id
    ON question_attempts (question_id);

CREATE INDEX IF NOT EXISTS idx_attempts_student_question
    ON question_attempts (student_id, question_id);

CREATE INDEX IF NOT EXISTS idx_questions_filters
    ON questions (exam_board, exam_year, specialty, topic)
    WHERE is_active = TRUE;

CREATE INDEX IF NOT EXISTS idx_questions_options_gin
    ON questions USING GIN (options);

CREATE INDEX IF NOT EXISTS idx_questions_search_gin
    ON questions USING GIN (search_vector);

CREATE INDEX IF NOT EXISTS idx_review_states_due_queue
    ON review_states (student_id, due_at ASC);

CREATE INDEX IF NOT EXISTS idx_fsrs_logs_student_reviewed
    ON fsrs_review_logs (student_id, reviewed_at DESC);

CREATE INDEX IF NOT EXISTS idx_question_stats_accuracy
    ON question_stats (accuracy_pct ASC, total_attempts DESC);

-- ============================================================================
-- 9. TRIGGERS DE `updated_at`
-- ============================================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_students_updated_at ON students;
CREATE TRIGGER trg_students_updated_at
    BEFORE UPDATE ON students
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_questions_updated_at ON questions;
CREATE TRIGGER trg_questions_updated_at
    BEFORE UPDATE ON questions
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

DROP TRIGGER IF EXISTS trg_review_states_updated_at ON review_states;
CREATE TRIGGER trg_review_states_updated_at
    BEFORE UPDATE ON review_states
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================================================
-- 9B. FUNÇÃO NORMAL PADRÃO ACUMULADA — normal_cdf(z) (Abramowitz & Stegun 7.1.26)
-- IMMUTABLE + STRICT permite otimização pelo planejador e uso em índices/MVs
-- sem necessidade de extensões externas.
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

-- ============================================================================
-- 10. CONSULTAS ANALÍTICAS PRONTAS (Comentadas para execução DDL limpa)
-- ============================================================================

-- 10A. EVOLUÇÃO GERAL NOS ÚLTIMOS 30 DIAS (Fuso America/Sao_Paulo)
-- Parâmetro: $1 = student_id (UUID)
/*
WITH bounds AS (
    SELECT (NOW() AT TIME ZONE 'America/Sao_Paulo')::DATE AS today_br
),
daily_series AS (
    SELECT generate_series(
        (SELECT today_br - 29 FROM bounds),
        (SELECT today_br FROM bounds),
        INTERVAL '1 day'
    )::DATE AS day_date
),
daily_attempts AS (
    SELECT
        (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE AS day_date,
        COUNT(*) AS attempts_count,
        COUNT(*) FILTER (WHERE qa.is_correct) AS correct_count,
        ROUND(
            (COUNT(*) FILTER (WHERE qa.is_correct)::NUMERIC / NULLIF(COUNT(*), 0)) * 100,
            2
        ) AS daily_accuracy_pct
    FROM question_attempts qa
    WHERE qa.student_id = $1
      AND (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE >= (SELECT today_br - 29 FROM bounds)
    GROUP BY (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE
)
SELECT
    ds.day_date,
    COALESCE(da.attempts_count, 0) AS attempts_count,
    COALESCE(da.correct_count, 0) AS correct_count,
    da.daily_accuracy_pct,
    SUM(COALESCE(da.attempts_count, 0)) OVER (ORDER BY ds.day_date) AS cumulative_attempts,
    ROUND(
        (
            SUM(COALESCE(da.correct_count, 0)) OVER (ORDER BY ds.day_date)::NUMERIC
            / NULLIF(SUM(COALESCE(da.attempts_count, 0)) OVER (ORDER BY ds.day_date), 0)
        ) * 100,
        2
    ) AS cumulative_accuracy_pct
FROM daily_series ds
LEFT JOIN daily_attempts da
    ON da.day_date = ds.day_date
ORDER BY ds.day_date ASC;
*/

-- 10B. EVOLUÇÃO 30 DIAS DOS TOP 5 TEMAS QUE O ALUNO MAIS ERRA
-- Alimenta o gráfico "Evolução nos Temas com Mais Erros" da aba Desempenho
-- Parâmetro: $1 = student_id (UUID)
/*
WITH weak_topics AS (
    SELECT
        COALESCE(q.topic, 'Sem tema definido') AS topic,
        COUNT(*) FILTER (WHERE NOT qa.is_correct) AS wrong_count,
        COUNT(*) AS total_count
    FROM question_attempts qa
    JOIN questions q ON q.id = qa.question_id
    WHERE qa.student_id = $1
      AND q.is_active = TRUE
    GROUP BY COALESCE(q.topic, 'Sem tema definido')
    HAVING COUNT(*) FILTER (WHERE NOT qa.is_correct) > 0
    ORDER BY wrong_count DESC, (COUNT(*) FILTER (WHERE qa.is_correct)::NUMERIC / COUNT(*)) ASC
    LIMIT 5
),
daily_topic AS (
    SELECT
        (qa.answered_at AT TIME ZONE 'America/Sao_Paulo')::DATE AS day_date,
        COALESCE(q.topic, 'Sem tema definido') AS topic,
        COUNT(*) AS attempts_count,
        COUNT(*) FILTER (WHERE qa.is_correct) AS correct_count
    FROM question_attempts qa
    JOIN questions q ON q.id = qa.question_id
    JOIN weak_topics wt ON wt.topic = COALESCE(q.topic, 'Sem tema definido')
    WHERE qa.student_id = $1
      AND qa.answered_at >= NOW() - INTERVAL '30 days'
    GROUP BY 1, 2
)
SELECT
    day_date,
    topic,
    attempts_count,
    correct_count,
    ROUND(
        (
            SUM(correct_count) OVER (PARTITION BY topic ORDER BY day_date)::NUMERIC
            / NULLIF(SUM(attempts_count) OVER (PARTITION BY topic ORDER BY day_date), 0)
        ) * 100,
        2
    ) AS rolling_accuracy_pct
FROM daily_topic
ORDER BY topic ASC, day_date ASC;
*/

-- 10C. PARETO 80/20 POR BANCA (Inclui corretamente o tema que cruza o limiar de 80%)
-- Parâmetro: $1 = exam_board (VARCHAR, ex.: 'ENARE' ou 'UEPA')
/*
WITH topic_counts AS (
    SELECT
        q.exam_board,
        q.specialty,
        COALESCE(q.topic, 'Sem tema definido') AS topic,
        COUNT(*)::BIGINT AS question_count
    FROM questions q
    WHERE q.is_active = TRUE
      AND q.exam_board = $1
    GROUP BY
        q.exam_board,
        q.specialty,
        COALESCE(q.topic, 'Sem tema definido')
),
ranked_topics AS (
    SELECT
        exam_board,
        specialty,
        topic,
        question_count,
        SUM(question_count) OVER (PARTITION BY exam_board) AS board_total_questions,
        SUM(question_count) OVER (
            PARTITION BY exam_board
            ORDER BY question_count DESC, specialty ASC, topic ASC
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
        ) AS cumulative_questions
    FROM topic_counts
)
SELECT
    exam_board,
    specialty,
    topic,
    question_count,
    ROUND((question_count::NUMERIC / NULLIF(board_total_questions, 0)) * 100, 2) AS share_pct,
    ROUND((cumulative_questions::NUMERIC / NULLIF(board_total_questions, 0)) * 100, 2) AS cumulative_share_pct,
    (
        ((cumulative_questions - question_count)::NUMERIC / NULLIF(board_total_questions, 0)) < 0.80
    ) AS is_pareto_80_core
FROM ranked_topics
ORDER BY
    question_count DESC,
    specialty ASC,
    topic ASC;
*/

-- 10D. FILA DE REVISÃO VENCIDA (FSRS) + CONTADOR 24H
-- Parâmetro: $1 = student_id (UUID)
/*
SELECT
    COUNT(*) FILTER (WHERE rs.due_at <= NOW()) AS due_now_count,
    COUNT(*) FILTER (WHERE rs.due_at > NOW() AND rs.due_at <= NOW() + INTERVAL '24 hours') AS due_next_24h_count
FROM review_states rs
JOIN questions q
    ON q.id = rs.question_id
WHERE rs.student_id = $1
  AND q.is_active = TRUE;
*/

-- 10E. RADAR DE LACUNAS (Top 3 temas com maior volume e menor acurácia)
-- Consulta diretamente a materialized view mv_student_performance_percentiles
-- Parâmetro: $1 = student_id (UUID)
/*
SELECT
    specialty,
    topic,
    total_attempts,
    correct_attempts,
    accuracy_pct,
    p50_time_seconds,
    p75_time_seconds,
    last_attempt_at,
    ROUND((total_attempts * ((100.0 - accuracy_pct) / 100.0))::NUMERIC, 2) AS gap_impact_score
FROM mv_student_performance_percentiles
WHERE student_id = $1
  AND total_attempts > 0
ORDER BY
    (total_attempts * ((100.0 - accuracy_pct) / 100.0)) DESC,
    accuracy_pct ASC,
    total_attempts DESC
LIMIT 3;
*/

-- 10F. SÉRIE SEMANAL DE PROBABILIDADE DE APROVAÇÃO (12 SEMANAS · JANELA MÓVEL 90 DIAS)
-- Utiliza o Estimador Estratificado (Cochran) nas 5 Grandes Áreas + normal_cdf(z) IMMUTABLE
-- Parâmetros:
--   $1 = student_id (UUID)
--   $2 = nota_corte_media (NUMERIC, ex.: 80.0)
--   $3 = nota_corte_dp (NUMERIC, ex.: 2.0 ou 0.0 para corte fixo)
--   $4 = total_questoes_prova (NUMERIC, ex.: 100.0 — 20% por Grande Área)
/*
WITH areas_base(area) AS (
    VALUES
        ('Clínica Médica'),
        ('Cirurgia Geral'),
        ('Ginecologia e Obstetrícia'),
        ('Pediatria'),
        ('Medicina Preventiva e Social')
),
semanas AS (
    SELECT
        gs::TIMESTAMPTZ AS inicio_semana,
        (gs + INTERVAL '7 days')::TIMESTAMPTZ AS fim_semana
    FROM generate_series(
        date_trunc('week', NOW()) - INTERVAL '12 weeks',
        date_trunc('week', NOW()),
        INTERVAL '1 week'
    ) AS gs
),
respostas_aluno AS (
    SELECT
        q.specialty AS area,
        qa.is_correct AS acertou,
        qa.answered_at AS respondida_em
    FROM question_attempts qa
    INNER JOIN questions q ON q.id = qa.question_id
    WHERE qa.student_id = $1
      AND q.is_active = TRUE
      AND qa.answered_at >= date_trunc('week', NOW()) - INTERVAL '12 weeks' - INTERVAL '90 days'
),
metricas_por_area AS (
    SELECT
        s.inicio_semana,
        a.area,
        COUNT(r.acertou)::INT AS total,
        CASE
            WHEN COUNT(r.acertou) > 0
            THEN (COUNT(r.acertou) FILTER (WHERE r.acertou = TRUE))::NUMERIC / COUNT(r.acertou)
            ELSE NULL
        END AS p
    FROM semanas s
    CROSS JOIN areas_base a
    LEFT JOIN respostas_aluno r
        ON r.area = a.area
       AND r.respondida_em >= s.fim_semana - INTERVAL '90 days'
       AND r.respondida_em < s.fim_semana
    GROUP BY s.inicio_semana, a.area
),
serie_semanal AS (
    SELECT
        inicio_semana::DATE AS semana,
        COUNT(*) FILTER (WHERE total > 0) AS areas_com_dados,
        MIN(total) AS min_questoes_area,
        SUM(total) AS total_questoes_janela,
        SUM(0.20 * p * 100.0) AS nota_estimada,
        SQRT(
            SUM(POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(total, 0)))
        ) AS se_dominio,
        SQRT(
            SUM(
                POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(total, 0))
                + POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(0.20 * $4::NUMERIC, 0))
            )
        ) AS se_predicao
    FROM metricas_por_area
    GROUP BY inicio_semana
)
SELECT
    semana,
    total_questoes_janela,
    CASE
        WHEN areas_com_dados = 5 AND min_questoes_area >= 10 THEN 'valido'
        ELSE 'dados_insuficientes'
    END AS status,
    CASE WHEN areas_com_dados = 5 THEN ROUND(nota_estimada, 2) ELSE NULL END AS nota_estimada,
    CASE WHEN areas_com_dados = 5 THEN ROUND(GREATEST(0, nota_estimada - 1.96 * se_dominio), 2) ELSE NULL END AS ic_dominio_inf,
    CASE WHEN areas_com_dados = 5 THEN ROUND(LEAST(100, nota_estimada + 1.96 * se_dominio), 2) ELSE NULL END AS ic_dominio_sup,
    CASE WHEN areas_com_dados = 5 THEN ROUND(GREATEST(0, nota_estimada - 1.96 * se_predicao), 2) ELSE NULL END AS ip_prova_inf,
    CASE WHEN areas_com_dados = 5 THEN ROUND(LEAST(100, nota_estimada + 1.96 * se_predicao), 2) ELSE NULL END AS ip_prova_sup,
    CASE
        WHEN areas_com_dados = 5 THEN
            ROUND(
                (
                    normal_cdf(
                        (
                            (nota_estimada - $2::NUMERIC)
                            / NULLIF(SQRT(POWER(se_predicao, 2) + POWER($3::NUMERIC, 2)), 0)
                        )::DOUBLE PRECISION
                    ) * 100.0
                )::NUMERIC,
                1
            )
        ELSE NULL
    END AS probabilidade_aprovacao
FROM serie_semanal
ORDER BY semana ASC;
*/

-- ============================================================================
-- MANUTENÇÃO PERIÓDICA (agendar via pg_cron / worker a cada 1h–6h)
-- ============================================================================
-- REFRESH MATERIALIZED VIEW CONCURRENTLY mv_student_performance_percentiles;
-- REFRESH MATERIALIZED VIEW CONCURRENTLY mv_community_topic_benchmarks;
