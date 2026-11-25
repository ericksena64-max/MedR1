import type { QueryResult, QueryResultRow } from 'pg';
import { isDatabaseConfigured, queryDb } from './db.ts';
import type { LiveRankingUser, RankingPeriod } from '../src/types/medical.ts';

export interface RankingServiceDeps {
  isConfigured?: () => boolean;
  query?: <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ) => Promise<QueryResult<T>>;
}

export interface LiveRankingResponse {
  mode: 'postgres' | 'local-fallback';
  period: RankingPeriod;
  peers: LiveRankingUser[];
  generatedAt: string;
}

interface WeeklyUserStatRow {
  student_id: string;
  real_name: string;
  pseudonym: string;
  use_pseudonym: boolean;
  target_institution: string;
  avatar_initials: string;
  questions_today: number;
  correct_today: number;
  questions_week?: number;
  correct_week?: number;
  questions_month?: number;
  correct_month?: number;
  streak: number;
  current_area: string;
  is_online: boolean;
  last_active_seconds_ago: number;
}

export function normalizeRankingPeriod(raw: unknown): RankingPeriod {
  if (raw === 'weekly' || raw === 'monthly' || raw === 'daily') {
    return raw;
  }
  return 'daily';
}

export async function getLiveRankingSnapshot(
  limitOrOptions: number | { limit?: number; period?: RankingPeriod } = 50,
  deps: RankingServiceDeps = {}
): Promise<LiveRankingResponse> {
  const limit =
    typeof limitOrOptions === 'number' ? limitOrOptions : limitOrOptions.limit ?? 50;
  const period: RankingPeriod =
    typeof limitOrOptions === 'number'
      ? 'daily'
      : normalizeRankingPeriod(limitOrOptions.period);

  const isConfigured = deps.isConfigured ?? isDatabaseConfigured;
  if (!isConfigured()) {
    return {
      mode: 'local-fallback',
      period,
      peers: [],
      generatedAt: new Date().toISOString(),
    };
  }

  const runQuery = deps.query ?? queryDb;
  const safeLimit = Math.min(200, Math.max(1, Math.round(limit)));

  const whereAndOrder =
    period === 'monthly'
      ? 'WHERE questions_month > 0 ORDER BY questions_month DESC'
      : period === 'weekly'
        ? 'WHERE questions_week > 0 ORDER BY questions_week DESC, accuracy_week DESC, correct_week DESC'
        : 'WHERE questions_today > 0 ORDER BY questions_today DESC, correct_today DESC';

  const res = await runQuery<WeeklyUserStatRow>(
    `SELECT
       student_id, real_name, pseudonym, use_pseudonym,
       target_institution, avatar_initials,
       questions_today, correct_today,
       questions_week, correct_week,
       questions_month, correct_month,
       streak, current_area, is_online, last_active_seconds_ago
     FROM mv_weekly_user_stats
     ${whereAndOrder}
     LIMIT $1`,
    [safeLimit]
  );

  const peers: LiveRankingUser[] = res.rows.map((row) => ({
    id: row.student_id,
    realName: row.real_name,
    pseudonym: row.pseudonym,
    usePseudonym: Boolean(row.use_pseudonym),
    targetInstitution: row.target_institution || 'Geral',
    avatarInitials: row.avatar_initials || 'MR',
    questionsToday: Number(row.questions_today ?? 0),
    correctToday: Number(row.correct_today ?? 0),
    questionsWeek: Number(row.questions_week ?? 0),
    correctWeek: Number(row.correct_week ?? 0),
    questionsMonth: Number(row.questions_month ?? 0),
    correctMonth: Number(row.correct_month ?? 0),
    streak: Number(row.streak ?? 0),
    currentArea: row.current_area || 'Clínica Médica',
    isOnline: Boolean(row.is_online),
    lastActiveSecondsAgo: Math.max(0, Number(row.last_active_seconds_ago ?? 0)),
  }));

  return {
    mode: 'postgres',
    period,
    peers,
    generatedAt: new Date().toISOString(),
  };
}
