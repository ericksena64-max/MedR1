import 'dotenv/config';
import { OFFICIAL_EXAM_CATALOG } from '../src/data/examCatalog.ts';
import { MEDICAL_QUESTIONS } from '../src/data/questions.ts';
import { closeDbPool, getDbPool } from '../server/db.ts';
import type { MedicalQuestion } from '../src/types/medical.ts';

const BATCH_SIZE = 100;

function mapDifficulty(
  taxaAcertoGlobal: number,
  isAnnulled = false
): 'easy' | 'medium' | 'hard' | 'annulled' {
  if (isAnnulled) return 'annulled';
  if (taxaAcertoGlobal > 70) return 'easy';
  if (taxaAcertoGlobal >= 40) return 'medium';
  return 'hard';
}

async function collectAllCatalogQuestions(): Promise<MedicalQuestion[]> {
  const seen = new Set<string>();
  const collected: MedicalQuestion[] = [];

  for (const entry of OFFICIAL_EXAM_CATALOG) {
    const items = await entry.loader();
    for (const q of items) {
      if (!seen.has(q.id)) {
        seen.add(q.id);
        collected.push(q);
      }
    }
  }

  for (const q of MEDICAL_QUESTIONS) {
    if (!seen.has(q.id)) {
      seen.add(q.id);
      collected.push(q);
    }
  }

  return collected;
}

const UPSERT_SQL = `
  INSERT INTO questions (
    id, external_code, exam_board, institution, state_uf, region,
    exam_year, exam_type, grande_area_id, specialty, topic, subtopic,
    statement, options, correct_option, explanation, clinical_pearl,
    reference_source, clinical_image, lab_table, difficulty_level,
    is_annulled, is_outdated, taxa_acerto_base, taxa_acerto_global, is_active
  )
  VALUES (
    $1, $2, $3, $4, $5, $6,
    $7, $8, $9, $10, $11, $12,
    $13, $14::JSONB, $15, $16, $17,
    $18, $19::JSONB, $20::JSONB, $21,
    $22, $23, $24, $25, TRUE
  )
  ON CONFLICT (id) DO UPDATE SET
    external_code = EXCLUDED.external_code,
    exam_board = EXCLUDED.exam_board,
    institution = EXCLUDED.institution,
    state_uf = EXCLUDED.state_uf,
    region = EXCLUDED.region,
    exam_year = EXCLUDED.exam_year,
    exam_type = EXCLUDED.exam_type,
    grande_area_id = EXCLUDED.grande_area_id,
    specialty = EXCLUDED.specialty,
    topic = EXCLUDED.topic,
    subtopic = EXCLUDED.subtopic,
    statement = EXCLUDED.statement,
    options = EXCLUDED.options,
    correct_option = EXCLUDED.correct_option,
    explanation = EXCLUDED.explanation,
    clinical_pearl = EXCLUDED.clinical_pearl,
    reference_source = EXCLUDED.reference_source,
    clinical_image = EXCLUDED.clinical_image,
    lab_table = EXCLUDED.lab_table,
    is_annulled = EXCLUDED.is_annulled,
    is_outdated = EXCLUDED.is_outdated,
    taxa_acerto_base = CASE
      WHEN EXCLUDED.is_annulled THEN 0.00
      ELSE EXCLUDED.taxa_acerto_base
    END,
    taxa_acerto_global = CASE
      WHEN EXCLUDED.is_annulled THEN 0.00
      WHEN questions.tentativas_unicas > 0 THEN ROUND(
        ((EXCLUDED.taxa_acerto_base * GREATEST(1, questions.prior_weight))
          + (questions.acertos_primeira_tentativa * 100.0))
        / (GREATEST(1, questions.prior_weight) + questions.tentativas_unicas),
        1
      )
      ELSE EXCLUDED.taxa_acerto_base
    END,
    difficulty_level = CASE
      WHEN EXCLUDED.is_annulled THEN 'annulled'
      WHEN questions.tentativas_unicas > 0 THEN CASE
        WHEN ROUND(
          ((EXCLUDED.taxa_acerto_base * GREATEST(1, questions.prior_weight))
            + (questions.acertos_primeira_tentativa * 100.0))
          / (GREATEST(1, questions.prior_weight) + questions.tentativas_unicas),
          1
        ) > 70 THEN 'easy'
        WHEN ROUND(
          ((EXCLUDED.taxa_acerto_base * GREATEST(1, questions.prior_weight))
            + (questions.acertos_primeira_tentativa * 100.0))
          / (GREATEST(1, questions.prior_weight) + questions.tentativas_unicas),
          1
        ) >= 40 THEN 'medium'
        ELSE 'hard'
      END
      ELSE EXCLUDED.difficulty_level
    END,
    updated_at = NOW();
`;

async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const questions = await collectAllCatalogQuestions();

  const byArea = new Map<string, number>();
  let withImages = 0;
  for (const q of questions) {
    byArea.set(q.grandeAreaId, (byArea.get(q.grandeAreaId) ?? 0) + 1);
    if (q.clinicalImage?.url) withImages += 1;
  }

  console.log(
    `[MedR1 Seed] Catálogo consolidado: ${questions.length} questões únicas (${withImages} com imagem clínica).`
  );
  for (const [area, count] of byArea.entries()) {
    console.log(`  - ${area}: ${count}`);
  }

  if (dryRun) {
    console.log('[MedR1 Seed] --dry-run concluído com sucesso (nenhuma gravação efetuada).');
    return;
  }

  const pool = getDbPool();
  if (!pool) {
    console.error(
      '[MedR1 Seed] Erro: DATABASE_URL não configurada. Configure o .env ou use --dry-run.'
    );
    process.exitCode = 1;
    return;
  }

  const client = await pool.connect();
  let upserted = 0;
  try {
    for (let i = 0; i < questions.length; i += BATCH_SIZE) {
      const batch = questions.slice(i, i + BATCH_SIZE);
      await client.query('BEGIN');
      for (const q of batch) {
        const uf = (q.estado || 'BR').trim().slice(0, 2).toUpperCase().padEnd(2, ' ');
        const isAnnulled = Boolean(q.anulada);
        const baseAccuracy = isAnnulled
          ? 0
          : Number((q.taxaAcertoBase ?? q.taxaAcertoGlobal ?? 58.4).toFixed(2));
        const params = [
          q.id,
          q.code ? q.code.slice(0, 80) : null,
          q.banca.slice(0, 80),
          q.instituicao.slice(0, 120),
          uf,
          q.regiao.slice(0, 40),
          q.ano,
          q.tipoProva,
          q.grandeAreaId,
          q.grandeArea.slice(0, 100),
          q.tema ? q.tema.slice(0, 150) : null,
          q.subtema ? q.subtema.slice(0, 150) : null,
          q.enunciado,
          JSON.stringify(q.alternativas),
          q.gabaritoOficial,
          q.comentarioGeral || null,
          q.perolaClinica || null,
          q.referencias.length > 0 ? q.referencias.join('; ') : null,
          q.clinicalImage ? JSON.stringify(q.clinicalImage) : null,
          q.labTable ? JSON.stringify(q.labTable) : null,
          mapDifficulty(baseAccuracy, isAnnulled),
          isAnnulled,
          Boolean(q.desatualizada),
          baseAccuracy,
          baseAccuracy,
        ];
        await client.query(UPSERT_SQL, params);
        upserted += 1;
      }
      await client.query('COMMIT');
      console.log(`[MedR1 Seed] Lote concluído: ${upserted}/${questions.length}`);
    }
    console.log(`[MedR1 Seed] Concluído com sucesso: ${upserted} questões sincronizadas no Postgres.`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('[MedR1 Seed] Falha durante transação:', err);
    process.exitCode = 1;
  } finally {
    client.release();
    await closeDbPool();
  }
}

void main();
