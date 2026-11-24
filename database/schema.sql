-- =============================================================================
-- MedR1 — Esquema PostgreSQL / Supabase para Banco de Questões de Residência Médica
-- Otimizado para consultas hierárquicas, cruzamento por alternativa, cálculo de
-- mediana da comunidade via percentile_cont(0.5) e Ranking Ao Vivo (Realtime/Presence).
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- -----------------------------------------------------------------------------
-- 1. ENUMERADORES DE DOMÍNIO MÉDICO
-- -----------------------------------------------------------------------------
CREATE TYPE exam_type AS ENUM ('ACESSO_DIRETO', 'R_MAIS', 'REVALIDA');
CREATE TYPE difficulty_level AS ENUM ('FACIL', 'MEDIO', 'DIFICIL');
CREATE TYPE alternative_letter AS ENUM ('A', 'B', 'C', 'D', 'E');
CREATE TYPE session_mode AS ENUM ('ESTUDO', 'SIMULADO');

-- -----------------------------------------------------------------------------
-- 2. TAXONOMIA MÉDICA HIERÁRQUICA (3 NÍVEIS)
--    Grande Área (5 pilares) -> Especialidade / Tema -> Subtema / Foco
-- -----------------------------------------------------------------------------
CREATE TABLE medical_areas (
  id          SMALLSERIAL PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL UNIQUE, -- Clínica Médica, Cirurgia Geral, GO, Pediatria, Preventiva
  short_name  TEXT NOT NULL,
  sort_order  SMALLINT NOT NULL DEFAULT 0
);

CREATE TABLE medical_topics (
  id          SERIAL PRIMARY KEY,
  area_id     SMALLINT NOT NULL REFERENCES medical_areas(id) ON DELETE RESTRICT,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,        -- Cardiologia, Trauma, Pré-Natal, Neonatologia, Epidemiologia...
  UNIQUE (area_id, name)
);

CREATE TABLE medical_subtopics (
  id          SERIAL PRIMARY KEY,
  topic_id    INTEGER NOT NULL REFERENCES medical_topics(id) ON DELETE RESTRICT,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,        -- SCA com Supra de ST, ATLS, DMG...
  UNIQUE (topic_id, name)
);

CREATE INDEX idx_topics_area ON medical_topics(area_id);
CREATE INDEX idx_subtopics_topic ON medical_subtopics(topic_id);

-- -----------------------------------------------------------------------------
-- 3. BANCAS E INSTITUIÇÕES BRASILEIRAS
-- -----------------------------------------------------------------------------
CREATE TABLE institutions (
  id          SERIAL PRIMARY KEY,
  acronym     TEXT NOT NULL UNIQUE, -- USP-SP, UNICAMP, UNIFESP, ENARE, SUS-SP, AMRIGS, PSU-MG, UEPA, INEP
  full_name   TEXT NOT NULL,
  banca       TEXT NOT NULL,        -- FUVEST, VUNESP, FGV, FUNDATEC, AREMG, INEP, PRÓPRIA
  state_uf    CHAR(2) NOT NULL,     -- SP, MG, RS, PA, BR (Nacional)
  region      TEXT NOT NULL         -- Sudeste, Sul, Norte, Nordeste, Centro-Oeste, Nacional
);

CREATE INDEX idx_institutions_region_state ON institutions(region, state_uf);
CREATE INDEX idx_institutions_banca ON institutions(banca);

-- -----------------------------------------------------------------------------
-- 4. QUESTÕES, ALTERNATIVAS, IMAGENS CLÍNICAS E COMENTÁRIOS DIDÁTICOS
-- -----------------------------------------------------------------------------
CREATE TABLE questions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code                TEXT NOT NULL UNIQUE, -- Ex: Q-USP25-001
  area_id             SMALLINT NOT NULL REFERENCES medical_areas(id),
  topic_id            INTEGER NOT NULL REFERENCES medical_topics(id),
  subtopic_id         INTEGER NOT NULL REFERENCES medical_subtopics(id),
  institution_id      INTEGER NOT NULL REFERENCES institutions(id),
  exam_year           SMALLINT NOT NULL CHECK (exam_year BETWEEN 2010 AND 2030),
  exam_type           exam_type NOT NULL DEFAULT 'ACESSO_DIRETO',
  stem                TEXT NOT NULL,        -- Enunciado clínico completo
  lab_table_json      JSONB,                -- Tabelas laboratoriais estruturadas
  clinical_image_url  TEXT,                 -- ECG, RX, TC, RM, Dermatoscopia
  clinical_image_meta JSONB,                -- { caption, modality, aspectRatio }
  official_answer     alternative_letter NOT NULL,
  is_annulled         BOOLEAN NOT NULL DEFAULT FALSE,
  is_outdated         BOOLEAN NOT NULL DEFAULT FALSE,
  has_image           BOOLEAN GENERATED ALWAYS AS (clinical_image_url IS NOT NULL) STORED,

  -- Estatísticas agregadas (atualizadas via trigger incremental / batch)
  total_attempts      INTEGER NOT NULL DEFAULT 0,
  correct_attempts    INTEGER NOT NULL DEFAULT 0,
  global_accuracy_pct NUMERIC(5,2) GENERATED ALWAYS AS (
    CASE WHEN total_attempts > 0
      THEN ROUND((correct_attempts::NUMERIC / total_attempts::NUMERIC) * 100, 2)
      ELSE 0
    END
  ) STORED,
  difficulty          difficulty_level GENERATED ALWAYS AS (
    CASE
      WHEN total_attempts < 20 THEN 'MEDIO'::difficulty_level
      WHEN (correct_attempts::NUMERIC / NULLIF(total_attempts, 0)) > 0.70 THEN 'FACIL'::difficulty_level
      WHEN (correct_attempts::NUMERIC / NULLIF(total_attempts, 0)) >= 0.40 THEN 'MEDIO'::difficulty_level
      ELSE 'DIFICIL'::difficulty_level
    END
  ) STORED,

  -- Comentário didático estruturado
  general_commentary  TEXT NOT NULL,
  clinical_pearl      TEXT NOT NULL,        -- Pérola Clínica / Ponto-Chave
  references_json     JSONB NOT NULL DEFAULT '[]'::JSONB, -- Harrison, Sabiston, Williams, SBP...

  -- Vetor de busca textual em português (enunciado + comentário)
  search_vector       TSVECTOR GENERATED ALWAYS AS (
    setweight(to_tsvector('portuguese', coalesce(stem, '')), 'A') ||
    setweight(to_tsvector('portuguese', coalesce(general_commentary, '')), 'B') ||
    setweight(to_tsvector('portuguese', coalesce(clinical_pearl, '')), 'B')
  ) STORED,

  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE question_alternatives (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id     UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  letter          alternative_letter NOT NULL,
  content         TEXT NOT NULL,
  explanation     TEXT NOT NULL,            -- Justificativa específica alternativa por alternativa
  selection_count INTEGER NOT NULL DEFAULT 0,
  UNIQUE (question_id, letter)
);

-- Índices compostos otimizados para o Motor de Filtros combináveis em tempo real
CREATE INDEX idx_questions_taxonomy ON questions(area_id, topic_id, subtopic_id);
CREATE INDEX idx_questions_exam_meta ON questions(institution_id, exam_year DESC, exam_type);
CREATE INDEX idx_questions_flags ON questions(is_annulled, is_outdated, has_image, difficulty);
CREATE INDEX idx_questions_search_gin ON questions USING GIN (search_vector);
CREATE INDEX idx_alternatives_question ON question_alternatives(question_id, letter);

-- -----------------------------------------------------------------------------
-- 5. PERFIS DE ALUNOS (COM CONTROLE DE PRIVACIDADE / PSEUDÔNIMO)
-- -----------------------------------------------------------------------------
CREATE TABLE user_profiles (
  id                  UUID PRIMARY KEY,     -- Referencia auth.users(id) no Supabase
  real_name           TEXT NOT NULL,        -- Ex: Dr. João Silva
  pseudonym           TEXT NOT NULL UNIQUE, -- Ex: FutureR1_Cardio
  use_pseudonym       BOOLEAN NOT NULL DEFAULT FALSE,
  target_specialty    TEXT,                 -- Ex: Clínica Médica, Cirurgia Geral
  target_institution  TEXT,                 -- Ex: USP-SP, ENARE
  avatar_initials     VARCHAR(3) NOT NULL,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- -----------------------------------------------------------------------------
-- 6. RESPOSTAS DOS ALUNOS, SIMULADOS E CADERNO DE ERROS
-- -----------------------------------------------------------------------------
CREATE TABLE simulados (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  title             TEXT NOT NULL,
  duration_seconds  INTEGER NOT NULL,
  elapsed_seconds   INTEGER NOT NULL DEFAULT 0,
  total_questions   SMALLINT NOT NULL,
  correct_count     SMALLINT NOT NULL DEFAULT 0,
  completed_at      TIMESTAMPTZ,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_answers (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id           UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  question_id       UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  simulado_id       UUID REFERENCES simulados(id) ON DELETE SET NULL,
  selected_letter   alternative_letter NOT NULL,
  is_correct        BOOLEAN NOT NULL,
  mode              session_mode NOT NULL DEFAULT 'ESTUDO',
  time_spent_sec    INTEGER NOT NULL DEFAULT 0,
  answered_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE user_question_bookmarks (
  user_id           UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  question_id       UUID NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  personal_note     TEXT,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, question_id)
);

-- Índices críticos para status do aluno ("Não resolvidas", "Erradas", "Acertadas") e séries temporais
CREATE INDEX idx_user_answers_user_question ON user_answers(user_id, question_id, answered_at DESC);
CREATE INDEX idx_user_answers_user_time ON user_answers(user_id, answered_at DESC);
CREATE INDEX idx_user_answers_question_stats ON user_answers(question_id, selected_letter);
CREATE INDEX idx_user_answers_daily_ranking ON user_answers(answered_at DESC, user_id) INCLUDE (is_correct);

-- -----------------------------------------------------------------------------
-- 7. PRESENÇA E RANKING AO VIVO (PONTUAÇÃO PONDERADA ANTI-CHUTE)
--    Fórmula: score = ROUND(questions_today * 10 * (0.4 + 0.6 * (accuracy_pct / 100.0)) + streak_bonus)
-- -----------------------------------------------------------------------------
CREATE TABLE live_study_presence (
  user_id             UUID PRIMARY KEY REFERENCES user_profiles(id) ON DELETE CASCADE,
  is_online           BOOLEAN NOT NULL DEFAULT TRUE,
  last_heartbeat_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  questions_today     INTEGER NOT NULL DEFAULT 0,
  correct_today       INTEGER NOT NULL DEFAULT 0,
  current_streak      INTEGER NOT NULL DEFAULT 0,
  weighted_score      NUMERIC(10,2) GENERATED ALWAYS AS (
    CASE WHEN questions_today > 0
      THEN ROUND(
        questions_today * 10.0 * (0.4 + 0.6 * (correct_today::NUMERIC / questions_today::NUMERIC))
        + LEAST(current_streak * 2.5, 40.0),
        2
      )
      ELSE 0
    END
  ) STORED
);

CREATE INDEX idx_live_presence_leaderboard
  ON live_study_presence(is_online, weighted_score DESC, correct_today DESC)
  WHERE is_online = TRUE;

-- -----------------------------------------------------------------------------
-- 8. VIEWS ANALÍTICAS: MEDIANA DA COMUNIDADE (percentile_cont(0.5)) E P75
--    Recalculadas via REFRESH MATERIALIZED VIEW CONCURRENTLY (pg_cron a cada 15 min)
-- -----------------------------------------------------------------------------

-- A) Mediana e Percentil 75 por Grande Área
CREATE MATERIALIZED VIEW mv_community_benchmarks_by_area AS
WITH user_area_accuracy AS (
  SELECT
    ua.user_id,
    q.area_id,
    COUNT(*) AS attempts,
    (SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)::NUMERIC) * 100.0 AS accuracy_pct
  FROM user_answers ua
  JOIN questions q ON q.id = ua.question_id
  GROUP BY ua.user_id, q.area_id
  HAVING COUNT(*) >= 5 -- Filtro estatístico para evitar ruído de amostra mínima
)
SELECT
  ma.id AS area_id,
  ma.name AS area_name,
  COUNT(uaa.user_id) AS active_students,
  ROUND(
    percentile_cont(0.5) WITHIN GROUP (ORDER BY uaa.accuracy_pct)::NUMERIC, 1
  ) AS community_median_pct,
  ROUND(
    percentile_cont(0.75) WITHIN GROUP (ORDER BY uaa.accuracy_pct)::NUMERIC, 1
  ) AS community_p75_pct,
  ROUND(AVG(uaa.accuracy_pct)::NUMERIC, 1) AS community_mean_pct
FROM medical_areas ma
LEFT JOIN user_area_accuracy uaa ON uaa.area_id = ma.id
GROUP BY ma.id, ma.name;

CREATE UNIQUE INDEX idx_mv_bench_area ON mv_community_benchmarks_by_area(area_id);

-- B) Mediana e Percentil 75 por Especialidade / Tema
CREATE MATERIALIZED VIEW mv_community_benchmarks_by_topic AS
WITH user_topic_accuracy AS (
  SELECT
    ua.user_id,
    q.area_id,
    q.topic_id,
    (SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END)::NUMERIC / COUNT(*)::NUMERIC) * 100.0 AS accuracy_pct
  FROM user_answers ua
  JOIN questions q ON q.id = ua.question_id
  GROUP BY ua.user_id, q.area_id, q.topic_id
  HAVING COUNT(*) >= 3
)
SELECT
  mt.id AS topic_id,
  mt.area_id,
  mt.name AS topic_name,
  COUNT(uta.user_id) AS active_students,
  ROUND(
    percentile_cont(0.5) WITHIN GROUP (ORDER BY uta.accuracy_pct)::NUMERIC, 1
  ) AS community_median_pct,
  ROUND(
    percentile_cont(0.75) WITHIN GROUP (ORDER BY uta.accuracy_pct)::NUMERIC, 1
  ) AS community_p75_pct
FROM medical_topics mt
LEFT JOIN user_topic_accuracy uta ON uta.topic_id = mt.id
GROUP BY mt.id, mt.area_id, mt.name;

CREATE UNIQUE INDEX idx_mv_bench_topic ON mv_community_benchmarks_by_topic(topic_id);

-- C) Consulta SQL de exemplo: Comparativo Aluno vs. Mediana da Comunidade por Grande Área
-- SELECT
--   b.area_name,
--   COUNT(ua.id) AS questoes_feitas,
--   ROUND((SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(ua.id), 0)) * 100, 1) AS aluno_pct,
--   b.community_median_pct AS mediana_comunidade_pct,
--   b.community_p75_pct AS p75_comunidade_pct,
--   ROUND(
--     ((SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END)::NUMERIC / NULLIF(COUNT(ua.id), 0)) * 100) - b.community_median_pct,
--     1
--   ) AS delta_pct
-- FROM mv_community_benchmarks_by_area b
-- LEFT JOIN questions q ON q.area_id = b.area_id
-- LEFT JOIN user_answers ua ON ua.question_id = q.id AND ua.user_id = $1
-- GROUP BY b.area_id, b.area_name, b.community_median_pct, b.community_p75_pct
-- ORDER BY b.area_id;
