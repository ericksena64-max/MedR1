-- ============================================================================
-- db/migrations/003_flashcard_sync_support.sql
-- Permite sincronizar o progresso FSRS-6 de TODOS os flashcards no PostgreSQL:
--   - Flashcards ligados a questões (`question_id`)
--   - Flashcards do baralho base/Anki e cards manuais (`card_id`, sem `question_id`)
-- ============================================================================

ALTER TABLE review_states
    ALTER COLUMN question_id DROP NOT NULL,
    ADD COLUMN IF NOT EXISTS card_id TEXT,
    ADD COLUMN IF NOT EXISTS card_payload JSONB;

ALTER TABLE fsrs_review_logs
    ALTER COLUMN question_id DROP NOT NULL,
    ADD COLUMN IF NOT EXISTS card_id TEXT;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_constraint
        WHERE conname = 'uq_review_states_student_card'
    ) THEN
        ALTER TABLE review_states
            ADD CONSTRAINT uq_review_states_student_card UNIQUE (student_id, card_id);
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_review_states_student_card
    ON review_states (student_id, card_id)
    WHERE card_id IS NOT NULL;
