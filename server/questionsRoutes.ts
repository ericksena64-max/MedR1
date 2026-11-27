import type { Express, Request, Response } from 'express';
import {
  getQuestionById,
  queryPaginatedQuestions,
  type QuestionsQueryParams,
  type QuestionsServiceDeps,
} from './questionsService.ts';

function readQueryString(value: unknown, maxLen = 120): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim().slice(0, maxLen);
  return trimmed.length > 0 ? trimmed : undefined;
}

export function registerQuestionsRoutes(
  app: Express,
  deps: QuestionsServiceDeps = {}
): void {
  app.get('/api/questions', async (req: Request, res: Response) => {
    try {
      const rawAno = readQueryString(req.query.ano, 8);
      const parsedAno = rawAno ? Number.parseInt(rawAno, 10) : undefined;
      const rawLimit = readQueryString(req.query.limit, 6);
      const parsedLimit = rawLimit ? Number.parseInt(rawLimit, 10) : undefined;

      const params: QuestionsQueryParams = {
        search: readQueryString(req.query.q ?? req.query.search, 160),
        grandeAreaId: readQueryString(req.query.grandeAreaId, 40),
        tema: readQueryString(req.query.tema, 120),
        banca: readQueryString(req.query.banca, 80),
        instituicao: readQueryString(req.query.instituicao, 120),
        regiao: readQueryString(req.query.regiao, 40),
        ano: Number.isInteger(parsedAno) ? parsedAno : undefined,
        comImagens: req.query.comImagens === 'true' || req.query.comImagens === '1',
        excluirAnuladasDesatualizadas:
          req.query.excluirAnuladasDesatualizadas === 'true' ||
          req.query.excluirAnuladasDesatualizadas === '1',
        cursor: readQueryString(req.query.cursor, 256),
        limit: Number.isInteger(parsedLimit) ? parsedLimit : 25,
      };

      const result = await queryPaginatedQuestions(params, deps);
      if (result === null) {
        res.status(503).json({
          mode: 'local-fallback',
          error: 'DATABASE_URL not configured',
        });
        return;
      }

      res.json(result);
    } catch (err) {
      console.error('[MedR1 Questions List Error]', err);
      res.status(500).json({ error: 'Falha ao consultar catálogo de questões.' });
    }
  });

  app.get('/api/questions/:id', async (req: Request, res: Response) => {
    try {
      const result = await getQuestionById(String(req.params.id || ''), deps);
      if (result === null) {
        res.status(503).json({
          mode: 'local-fallback',
          error: 'DATABASE_URL not configured',
        });
        return;
      }

      if (!result.found || !result.item) {
        res.status(404).json({ error: 'Questão não encontrada.' });
        return;
      }

      res.json({ mode: 'postgres', item: result.item });
    } catch (err) {
      console.error('[MedR1 Question Detail Error]', err);
      res.status(500).json({ error: 'Falha ao carregar detalhes da questão.' });
    }
  });
}
