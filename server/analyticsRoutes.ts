import type { Express, Request, Response } from 'express';

const GAP_RADAR_MV_SQL = `
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
  LIMIT $2;
`.trim();

const WEEKLY_APPROVAL_SERIES_SQL = `
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
    SELECT q.specialty AS area, qa.is_correct AS acertou, qa.answered_at AS respondida_em
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
      CASE WHEN COUNT(r.acertou) > 0
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
      SQRT(SUM(POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(total, 0)))) AS se_dominio,
      SQRT(SUM(
        POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(total, 0))
        + POWER(0.20, 2) * (10000.0 * p * (1.0 - p) / NULLIF(0.20 * $4::NUMERIC, 0))
      )) AS se_predicao
    FROM metricas_por_area
    GROUP BY inicio_semana
  )
  SELECT
    semana,
    total_questoes_janela,
    CASE WHEN areas_com_dados = 5 AND min_questoes_area >= 10 THEN 'valido' ELSE 'dados_insuficientes' END AS status,
    CASE WHEN areas_com_dados = 5 THEN ROUND(nota_estimada, 2) ELSE NULL END AS nota_estimada,
    CASE WHEN areas_com_dados = 5 THEN ROUND(GREATEST(0, nota_estimada - 1.96 * se_dominio), 2) ELSE NULL END AS ic_dominio_inf,
    CASE WHEN areas_com_dados = 5 THEN ROUND(LEAST(100, nota_estimada + 1.96 * se_dominio), 2) ELSE NULL END AS ic_dominio_sup,
    CASE WHEN areas_com_dados = 5 THEN ROUND(GREATEST(0, nota_estimada - 1.96 * se_predicao), 2) ELSE NULL END AS ip_prova_inf,
    CASE WHEN areas_com_dados = 5 THEN ROUND(LEAST(100, nota_estimada + 1.96 * se_predicao), 2) ELSE NULL END AS ip_prova_sup,
    CASE WHEN areas_com_dados = 5 THEN
      ROUND((normal_cdf(((nota_estimada - $2::NUMERIC) / NULLIF(SQRT(POWER(se_predicao, 2) + POWER($3::NUMERIC, 2)), 0))::DOUBLE PRECISION) * 100.0)::NUMERIC, 1)
    ELSE NULL END AS probabilidade_aprovacao
  FROM serie_semanal
  ORDER BY semana ASC;
`.trim();

const AREAS_ORDER = [
  'clinica_medica',
  'cirurgia_geral',
  'ginecologia_obstetricia',
  'pediatria',
  'medicina_preventiva',
] as const;

function computeContinuousPercentile(sortedAsc: number[], p: number): number {
  if (sortedAsc.length === 0) return 0;
  if (sortedAsc.length === 1) return Number(sortedAsc[0].toFixed(1));
  const idx = p * (sortedAsc.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  const frac = idx - lo;
  const val = sortedAsc[lo] + (sortedAsc[hi] - sortedAsc[lo]) * frac;
  return Number(val.toFixed(1));
}

function estimateTopicTimePercentiles(
  liveTimesSec: number[]
): { p50: number; p75: number } {
  if (liveTimesSec.length === 0) {
    return { p50: 0, p75: 0 };
  }
  const sorted = [...liveTimesSec].sort((a, b) => a - b);
  return {
    p50: computeContinuousPercentile(sorted, 0.5),
    p75: computeContinuousPercentile(sorted, 0.75),
  };
}

function computeGapImpactScoreServer(
  totalAttempts: number,
  accuracyPct: number,
  communityMedianPct: number
): number {
  if (totalAttempts <= 0) return 0;
  const errorRate = Math.max(0, Math.min(1, (100 - accuracyPct) / 100));
  const medianDeficit = Math.max(0, communityMedianPct - accuracyPct) / 100;
  const volumeConfidence = Math.min(1, Math.log2(totalAttempts + 1) / Math.log2(21));
  return Number(
    ((errorRate * 70 + medianDeficit * 30) * (0.45 + 0.55 * volumeConfidence)).toFixed(2)
  );
}

function normalCdfServer(z: number): number {
  if (!Number.isFinite(z)) return z > 0 ? 1 : 0;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp((-z * z) / 2);
  const prob =
    d *
    t *
    (0.31938153 +
      t *
        (-0.356563782 +
          t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return z > 0 ? 1 - prob : prob;
}

function getMondayStartUtcMs(date: Date): number {
  const d = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
  const day = d.getUTCDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setUTCDate(d.getUTCDate() + diff);
  return d.getTime();
}

export function registerAnalyticsRoutes(
  app: Express,
  validGrandeAreaIds: ReadonlySet<string>
): void {
  app.post('/api/analytics/gap-radar', (req: Request, res: Response) => {
    try {
      const body = (req.body ?? {}) as {
        studentId?: unknown;
        limit?: unknown;
        topicStats?: Array<{
          specialty?: unknown;
          grandeAreaId?: unknown;
          topic?: unknown;
          totalAttempts?: unknown;
          correctAttempts?: unknown;
          accuracyPct?: unknown;
          communityMedianPct?: unknown;
          liveTimesSec?: unknown;
          lastAttemptAt?: unknown;
        }>;
      };

      const rawLimit = typeof body.limit === 'number' ? Math.floor(body.limit) : 5;
      const limit = Math.max(1, Math.min(10, Number.isFinite(rawLimit) ? rawLimit : 5));
      const inputRows = Array.isArray(body.topicStats) ? body.topicStats.slice(0, 100) : [];

      const projected = inputRows
        .map((row) => {
          const topic = typeof row.topic === 'string' ? row.topic.trim().slice(0, 150) : '';
          const specialty =
            typeof row.specialty === 'string' ? row.specialty.trim().slice(0, 100) : 'Clínica Médica';
          const grandeAreaId =
            typeof row.grandeAreaId === 'string' && validGrandeAreaIds.has(row.grandeAreaId)
              ? row.grandeAreaId
              : 'clinica_medica';
          const totalAttempts =
            typeof row.totalAttempts === 'number' && Number.isFinite(row.totalAttempts)
              ? Math.max(0, Math.floor(row.totalAttempts))
              : 0;
          const correctAttempts =
            typeof row.correctAttempts === 'number' && Number.isFinite(row.correctAttempts)
              ? Math.max(0, Math.min(totalAttempts, Math.floor(row.correctAttempts)))
              : 0;
          const accuracyPct =
            totalAttempts > 0
              ? Number(((correctAttempts / totalAttempts) * 100).toFixed(2))
              : 0;
          const communityMedianPct =
            typeof row.communityMedianPct === 'number' && Number.isFinite(row.communityMedianPct)
              ? Number(row.communityMedianPct.toFixed(1))
              : 65.0;
          const liveTimesSec = Array.isArray(row.liveTimesSec)
            ? row.liveTimesSec
                .filter((n): n is number => typeof n === 'number' && Number.isFinite(n) && n > 0 && n <= 3600)
                .slice(0, 200)
            : [];
          const { p50, p75 } = estimateTopicTimePercentiles(liveTimesSec);
          const errorCount = Math.max(0, totalAttempts - correctAttempts);
          const gapImpactScore = computeGapImpactScoreServer(
            totalAttempts,
            accuracyPct,
            communityMedianPct
          );
          const lastAttemptAt =
            typeof row.lastAttemptAt === 'string' && row.lastAttemptAt.length <= 40
              ? row.lastAttemptAt
              : new Date().toISOString();

          return {
            specialty,
            grandeAreaId,
            topic,
            totalAttempts,
            correctAttempts,
            errorCount,
            accuracyPct,
            communityMedianPct,
            deltaVsMedian: Number((accuracyPct - communityMedianPct).toFixed(1)),
            p50TimeSeconds: p50,
            p75TimeSeconds: p75,
            gapImpactScore,
            lastAttemptAt,
          };
        })
        .filter((r) => r.topic.length > 0 && r.totalAttempts > 0)
        .sort((a, b) => {
          if (b.gapImpactScore !== a.gapImpactScore) {
            return b.gapImpactScore - a.gapImpactScore;
          }
          if (a.accuracyPct !== b.accuracyPct) {
            return a.accuracyPct - b.accuracyPct;
          }
          return b.totalAttempts - a.totalAttempts;
        })
        .slice(0, limit);

      res.json({
        view: 'mv_student_performance_percentiles',
        queryReady: Boolean(GAP_RADAR_MV_SQL),
        topGaps: projected.slice(0, 3),
        radarTopics: projected,
      });
    } catch {
      res.status(500).json({ error: 'Falha ao calcular o Radar de Lacunas.' });
    }
  });

  app.post('/api/analytics/weekly-approval-series', (req: Request, res: Response) => {
    try {
      const body = (req.body ?? {}) as {
        notaCorteMedia?: unknown;
        notaCorteDp?: unknown;
        totalQuestoesProva?: unknown;
        minQuestoesArea?: unknown;
        usarLaplace?: unknown;
        areaBaseline?: Array<{
          area?: unknown;
          acertos?: unknown;
          total?: unknown;
        }>;
        attempts?: Array<{
          area?: unknown;
          isCorrect?: unknown;
          answeredAt?: unknown;
        }>;
      };

      const rawCutoffMean =
        typeof body.notaCorteMedia === 'number' && Number.isFinite(body.notaCorteMedia)
          ? body.notaCorteMedia
          : 78.0;
      const notaCorteMedia = Math.max(1, Math.min(100, rawCutoffMean));

      const rawCutoffDp =
        typeof body.notaCorteDp === 'number' && Number.isFinite(body.notaCorteDp)
          ? body.notaCorteDp
          : 2.0;
      const notaCorteDp = Math.max(0, Math.min(25, rawCutoffDp));

      const rawExamQuestions =
        typeof body.totalQuestoesProva === 'number' &&
        Number.isFinite(body.totalQuestoesProva)
          ? Math.floor(body.totalQuestoesProva)
          : 100;
      const totalQuestoesProva = Math.max(10, Math.min(300, rawExamQuestions));

      const rawMinArea =
        typeof body.minQuestoesArea === 'number' &&
        Number.isFinite(body.minQuestoesArea)
          ? Math.floor(body.minQuestoesArea)
          : 10;
      const minQuestoesArea = Math.max(1, Math.min(100, rawMinArea));
      const usarLaplace = Boolean(body.usarLaplace);

      const rawAttempts = Array.isArray(body.attempts)
        ? body.attempts.slice(0, 5000)
        : [];
      const sanitizedAttempts = rawAttempts
        .map((item) => {
          const area =
            typeof item.area === 'string' && validGrandeAreaIds.has(item.area)
              ? item.area
              : null;
          const ts =
            typeof item.answeredAt === 'string' ? Date.parse(item.answeredAt) : NaN;
          if (!area || Number.isNaN(ts)) return null;
          return {
            area,
            isCorrect: Boolean(item.isCorrect),
            ts,
          };
        })
        .filter((x): x is { area: string; isCorrect: boolean; ts: number } => x !== null);

      const baselineByArea = new Map<string, { acertos: number; total: number }>();
      if (Array.isArray(body.areaBaseline)) {
        for (const row of body.areaBaseline.slice(0, 10)) {
          if (typeof row.area === 'string' && validGrandeAreaIds.has(row.area)) {
            const total =
              typeof row.total === 'number' && Number.isFinite(row.total)
                ? Math.max(0, Math.floor(row.total))
                : 0;
            const acertos =
              typeof row.acertos === 'number' && Number.isFinite(row.acertos)
                ? Math.max(0, Math.min(total, Math.floor(row.acertos)))
                : 0;
            baselineByArea.set(row.area, { acertos, total });
          }
        }
      }

      const currentWeekStartMs = getMondayStartUtcMs(new Date());
      const weekMs = 7 * 24 * 60 * 60 * 1000;
      const window90dMs = 90 * 24 * 60 * 60 * 1000;
      const questoesAreaProva = 0.2 * totalQuestoesProva;

      const series = [];
      for (let offset = 12; offset >= 0; offset -= 1) {
        const weekStartMs = currentWeekStartMs - offset * weekMs;
        const weekEndMs = weekStartMs + weekMs;
        const windowStartMs = weekEndMs - window90dMs;
        const semana = new Date(weekStartMs).toISOString().slice(0, 10);
        const progressRatio = (12 - offset) / 12;

        let areasComDados = 0;
        let minAreaTotal = Number.POSITIVE_INFINITY;
        let totalQuestoesJanela = 0;
        let notaEstimada = 0;
        let varDominio = 0;
        let varProva = 0;

        for (const area of AREAS_ORDER) {
          let total = 0;
          let acertos = 0;

          for (const ev of sanitizedAttempts) {
            if (ev.area === area && ev.ts >= windowStartMs && ev.ts < weekEndMs) {
              total += 1;
              if (ev.isCorrect) acertos += 1;
            }
          }

          const base = baselineByArea.get(area);
          if (base && base.total > 0) {
            const histScale = 0.45 + 0.55 * progressRatio;
            const baseTotalWeek = Math.max(1, Math.round(base.total * histScale));
            const baseRate = base.acertos / base.total;
            const learningDelta = -0.045 * (1 - progressRatio);
            const weekRate = Math.max(0.1, Math.min(0.98, baseRate + learningDelta));
            const baseCorrectWeek = Math.max(
              0,
              Math.min(baseTotalWeek, Math.round(baseTotalWeek * weekRate))
            );
            total = Math.max(total, baseTotalWeek);
            acertos = Math.max(acertos, baseCorrectWeek);
          }

          totalQuestoesJanela += total;
          if (total < minAreaTotal) minAreaTotal = total;

          if (total > 0) {
            areasComDados += 1;
            const p = usarLaplace ? (acertos + 1) / (total + 2) : acertos / total;
            const nEff = usarLaplace ? total + 2 : total;
            notaEstimada += 0.2 * p * 100;
            const varAreaDom = (10000 * p * (1 - p)) / nEff;
            const varAreaProva =
              questoesAreaProva > 0
                ? (10000 * p * (1 - p)) / questoesAreaProva
                : 0;
            varDominio += 0.04 * varAreaDom;
            varProva += 0.04 * varAreaProva;
          }
        }

        const seDominio = Math.sqrt(varDominio);
        const sePredicao = Math.sqrt(varDominio + varProva);
        const sigmaCombinado = Math.sqrt(
          sePredicao * sePredicao + notaCorteDp * notaCorteDp
        );

        const validStatus =
          areasComDados === 5 && minAreaTotal >= minQuestoesArea
            ? 'valido'
            : 'dados_insuficientes';

        let probAprovacao: number | null = null;
        if (areasComDados === 5) {
          if (sigmaCombinado > 1e-9) {
            const z = (notaEstimada - notaCorteMedia) / sigmaCombinado;
            probAprovacao = Number((normalCdfServer(z) * 100).toFixed(1));
          } else {
            probAprovacao = notaEstimada >= notaCorteMedia ? 100.0 : 0.0;
          }
        }

        series.push({
          semana,
          total_questoes_janela: totalQuestoesJanela,
          status: validStatus,
          nota_estimada:
            areasComDados === 5 ? Number(notaEstimada.toFixed(2)) : null,
          ic_dominio_inf:
            areasComDados === 5
              ? Number(Math.max(0, notaEstimada - 1.96 * seDominio).toFixed(2))
              : null,
          ic_dominio_sup:
            areasComDados === 5
              ? Number(Math.min(100, notaEstimada + 1.96 * seDominio).toFixed(2))
              : null,
          ip_prova_inf:
            areasComDados === 5
              ? Number(Math.max(0, notaEstimada - 1.96 * sePredicao).toFixed(2))
              : null,
          ip_prova_sup:
            areasComDados === 5
              ? Number(Math.min(100, notaEstimada + 1.96 * sePredicao).toFixed(2))
              : null,
          probabilidade_aprovacao: probAprovacao,
        });
      }

      res.json({
        functionName: 'normal_cdf',
        queryReady: Boolean(WEEKLY_APPROVAL_SERIES_SQL),
        windowDays: 90,
        weeksCount: series.length,
        series,
      });
    } catch {
      res
        .status(500)
        .json({ error: 'Falha ao calcular a série semanal de aprovação.' });
    }
  });
}
