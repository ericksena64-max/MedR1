-- ============================================================================
-- db/migrations/004_bayesian_difficulty_calibration.sql
-- Calibração dinâmica e contínua da taxa de dificuldade via Suavização Bayesiana
-- (Teoria Clássica dos Testes):
--   posterior = ((taxa_acerto_base * prior_weight) + (acertos_primeira_tentativa * 100))
--               / (prior_weight + tentativas_unicas)
-- Apenas a 1ª tentativa única por (question_id, student_id) altera os contadores.
-- ============================================================================

ALTER TABLE questions
    ADD COLUMN IF NOT EXISTS taxa_acerto_base NUMERIC(5, 2) NOT NULL DEFAULT 58.40
        CHECK (taxa_acerto_base >= 0 AND taxa_acerto_base <= 100),
    ADD COLUMN IF NOT EXISTS tentativas_unicas BIGINT NOT NULL DEFAULT 0
        CHECK (tentativas_unicas >= 0),
    ADD COLUMN IF NOT EXISTS acertos_primeira_tentativa BIGINT NOT NULL DEFAULT 0
        CHECK (acertos_primeira_tentativa >= 0),
    ADD COLUMN IF NOT EXISTS taxa_acerto_global NUMERIC(5, 2) NOT NULL DEFAULT 58.40
        CHECK (taxa_acerto_global >= 0 AND taxa_acerto_global <= 100),
    ADD COLUMN IF NOT EXISTS prior_weight INTEGER NOT NULL DEFAULT 25
        CHECK (prior_weight >= 1);

DO $$
DECLARE
    v_conname TEXT;
BEGIN
    FOR v_conname IN
        SELECT conname
        FROM pg_constraint
        WHERE conrelid = 'questions'::regclass
          AND contype = 'c'
          AND pg_get_constraintdef(oid) LIKE '%difficulty_level%'
    LOOP
        EXECUTE format('ALTER TABLE questions DROP CONSTRAINT %I', v_conname);
    END LOOP;

    ALTER TABLE questions
        ADD CONSTRAINT questions_difficulty_level_check
        CHECK (difficulty_level IN ('easy', 'medium', 'hard', 'annulled'));
END $$;

UPDATE questions
SET
    taxa_acerto_base = 0.00,
    taxa_acerto_global = 0.00,
    difficulty_level = 'annulled'
WHERE is_annulled = TRUE;

UPDATE questions
SET
    taxa_acerto_base = CASE
        WHEN difficulty_level = 'easy' THEN 76.50
        WHEN difficulty_level = 'hard' THEN 36.80
        ELSE 58.40
    END,
    taxa_acerto_global = CASE
        WHEN difficulty_level = 'easy' THEN 76.50
        WHEN difficulty_level = 'hard' THEN 36.80
        ELSE 58.40
    END
WHERE is_annulled = FALSE
  AND tentativas_unicas = 0
  AND taxa_acerto_base = 58.40
  AND difficulty_level IN ('easy', 'hard');

CREATE TABLE IF NOT EXISTS question_student_first_attempts (
    question_id TEXT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    is_correct BOOLEAN NOT NULL,
    answered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    PRIMARY KEY (question_id, student_id)
);

CREATE OR REPLACE FUNCTION compute_bayesian_accuracy_pct(
    p_base_accuracy NUMERIC,
    p_real_attempts BIGINT,
    p_real_hits BIGINT,
    p_prior_weight INTEGER DEFAULT 25,
    p_is_annulled BOOLEAN DEFAULT FALSE
)
RETURNS NUMERIC(5, 2)
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
    v_base NUMERIC;
    v_weight INTEGER;
    v_attempts BIGINT;
    v_hits BIGINT;
BEGIN
    IF COALESCE(p_is_annulled, FALSE) THEN
        RETURN 0.00;
    END IF;

    v_base := LEAST(100.0, GREATEST(0.0, COALESCE(p_base_accuracy, 58.40)));
    v_weight := GREATEST(1, COALESCE(p_prior_weight, 25));
    v_attempts := GREATEST(0, COALESCE(p_real_attempts, 0));
    v_hits := LEAST(v_attempts, GREATEST(0, COALESCE(p_real_hits, 0)));

    IF v_attempts = 0 THEN
        RETURN ROUND(v_base, 1);
    END IF;

    RETURN ROUND(((v_base * v_weight) + (v_hits * 100.0)) / (v_weight + v_attempts), 1);
END;
$$;

CREATE OR REPLACE FUNCTION register_first_attempt_stats(
    p_question_id TEXT,
    p_student_id UUID,
    p_is_correct BOOLEAN,
    p_prior_weight INTEGER DEFAULT 25
)
RETURNS TABLE (
    question_id TEXT,
    was_first_attempt BOOLEAN,
    taxa_acerto_base NUMERIC(5, 2),
    tentativas_unicas BIGINT,
    acertos_primeira_tentativa BIGINT,
    taxa_acerto_global NUMERIC(5, 2),
    difficulty_level VARCHAR(20)
)
LANGUAGE plpgsql
AS $$
DECLARE
    v_q RECORD;
    v_inserted_id TEXT;
    v_weight INTEGER;
BEGIN
    SELECT
        q.id,
        q.is_annulled,
        q.taxa_acerto_base,
        q.tentativas_unicas,
        q.acertos_primeira_tentativa,
        q.taxa_acerto_global,
        q.prior_weight,
        q.difficulty_level
    INTO v_q
    FROM questions q
    WHERE q.id = p_question_id
    FOR UPDATE;

    IF NOT FOUND THEN
        RETURN;
    END IF;

    IF v_q.is_annulled THEN
        RETURN QUERY SELECT
            v_q.id,
            FALSE,
            0.00::NUMERIC(5, 2),
            v_q.tentativas_unicas,
            v_q.acertos_primeira_tentativa,
            0.00::NUMERIC(5, 2),
            'annulled'::VARCHAR(20);
        RETURN;
    END IF;

    INSERT INTO question_student_first_attempts (
        question_id,
        student_id,
        is_correct,
        answered_at
    )
    VALUES (
        p_question_id,
        p_student_id,
        COALESCE(p_is_correct, FALSE),
        NOW()
    )
    ON CONFLICT (question_id, student_id) DO NOTHING
    RETURNING question_student_first_attempts.question_id INTO v_inserted_id;

    IF v_inserted_id IS NULL THEN
        RETURN QUERY SELECT
            v_q.id,
            FALSE,
            v_q.taxa_acerto_base,
            v_q.tentativas_unicas,
            v_q.acertos_primeira_tentativa,
            v_q.taxa_acerto_global,
            v_q.difficulty_level;
        RETURN;
    END IF;

    v_weight := GREATEST(1, COALESCE(NULLIF(p_prior_weight, 0), v_q.prior_weight, 25));

    RETURN QUERY
    UPDATE questions q
    SET
        tentativas_unicas = q.tentativas_unicas + 1,
        acertos_primeira_tentativa = q.acertos_primeira_tentativa
            + CASE WHEN COALESCE(p_is_correct, FALSE) THEN 1 ELSE 0 END,
        taxa_acerto_global = compute_bayesian_accuracy_pct(
            q.taxa_acerto_base,
            q.tentativas_unicas + 1,
            q.acertos_primeira_tentativa + CASE WHEN COALESCE(p_is_correct, FALSE) THEN 1 ELSE 0 END,
            v_weight,
            q.is_annulled
        ),
        difficulty_level = CASE
            WHEN compute_bayesian_accuracy_pct(
                q.taxa_acerto_base,
                q.tentativas_unicas + 1,
                q.acertos_primeira_tentativa + CASE WHEN COALESCE(p_is_correct, FALSE) THEN 1 ELSE 0 END,
                v_weight,
                q.is_annulled
            ) > 70 THEN 'easy'
            WHEN compute_bayesian_accuracy_pct(
                q.taxa_acerto_base,
                q.tentativas_unicas + 1,
                q.acertos_primeira_tentativa + CASE WHEN COALESCE(p_is_correct, FALSE) THEN 1 ELSE 0 END,
                v_weight,
                q.is_annulled
            ) >= 40 THEN 'medium'
            ELSE 'hard'
        END,
        updated_at = NOW()
    WHERE q.id = p_question_id
    RETURNING
        q.id,
        TRUE,
        q.taxa_acerto_base,
        q.tentativas_unicas,
        q.acertos_primeira_tentativa,
        q.taxa_acerto_global,
        q.difficulty_level;
END;
$$;

CREATE OR REPLACE FUNCTION trg_fn_sync_bayesian_difficulty()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM register_first_attempt_stats(
        NEW.question_id,
        NEW.student_id,
        NEW.is_correct
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_question_attempts_bayesian_difficulty ON question_attempts;
CREATE TRIGGER trg_question_attempts_bayesian_difficulty
    AFTER INSERT ON question_attempts
    FOR EACH ROW EXECUTE FUNCTION trg_fn_sync_bayesian_difficulty();
