-- ============================================================================
-- db/migrations/005_edugpt_multiagent_tutor.sql
-- Fase 1 Multiagente (Offline/Pré-processado + Diagnóstico de Erro + Plano):
--   1. Colunas analise_banca e mapa_distratores em questions (latência zero).
--   2. Colunas de diagnóstico de erro e feedback do tutor em question_attempts.
--   3. Tabela study_plans para planos de estudo adaptativos por aluno.
-- ============================================================================

ALTER TABLE questions
    ADD COLUMN IF NOT EXISTS analise_banca JSONB,
    ADD COLUMN IF NOT EXISTS mapa_distratores JSONB;

ALTER TABLE question_attempts
    ADD COLUMN IF NOT EXISTS error_category VARCHAR(60)
        CHECK (
            error_category IS NULL OR error_category IN (
                'lacuna_conceitual',
                'leitura_desatenta',
                'distrator_classico',
                'confusao_conduta_vs_diagnostico',
                'detalhe_epidemiologico_ou_criterio',
                'outro'
            )
        ),
    ADD COLUMN IF NOT EXISTS error_diagnosis TEXT,
    ADD COLUMN IF NOT EXISTS tutor_feedback JSONB;

CREATE INDEX IF NOT EXISTS idx_question_attempts_student_error_cat
    ON question_attempts (student_id, error_category, answered_at DESC)
    WHERE is_correct = FALSE AND error_category IS NOT NULL;

CREATE TABLE IF NOT EXISTS study_plans (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
    title VARCHAR(180) NOT NULL,
    target_exam VARCHAR(120),
    weekly_hours NUMERIC(4, 1) NOT NULL DEFAULT 15.0 CHECK (weekly_hours > 0),
    focus_areas JSONB NOT NULL DEFAULT '[]'::JSONB,
    schedule_blocks JSONB NOT NULL DEFAULT '[]'::JSONB,
    status VARCHAR(20) NOT NULL DEFAULT 'active'
        CHECK (status IN ('active', 'paused', 'completed', 'archived')),
    generated_by VARCHAR(40) NOT NULL DEFAULT 'planner_v1',
    notes TEXT,
    client_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    server_updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_study_plans_student_status
    ON study_plans (student_id, status, server_updated_at DESC);

DROP TRIGGER IF EXISTS trg_study_plans_server_updated_at ON study_plans;
CREATE TRIGGER trg_study_plans_server_updated_at
    BEFORE UPDATE ON study_plans
    FOR EACH ROW EXECUTE FUNCTION set_server_updated_at();
