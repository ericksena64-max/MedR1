import type { PoolClient, QueryResult, QueryResultRow } from 'pg';
import { isDatabaseConfigured, queryDb, withDbTransaction } from './db.ts';
import type {
  BookmarkSyncPayload,
  FsrsReviewLogSyncPayload,
  FsrsReviewStateSyncPayload,
  MockExamSyncPayload,
  QuestionAttemptSyncPayload,
  StudentProfileSyncPayload,
  SyncBootstrapRequest,
  SyncOutboxEvent,
  SyncPullResponse,
  SyncPushResponse,
} from '../src/types/sync.ts';

export type DbQueryClient = Pick<PoolClient, 'query'>;

export interface SyncServiceDeps {
  withTransaction?: <T>(callback: (client: PoolClient) => Promise<T>) => Promise<T | null>;
  query?: <T extends QueryResultRow = QueryResultRow>(
    text: string,
    params?: unknown[]
  ) => Promise<QueryResult<T>>;
  isConfigured?: () => boolean;
}

const FSRS_STATE_LABELS = ['New', 'Learning', 'Review', 'Relearning'] as const;

export function fsrsStateNumberToLabel(state: number): (typeof FSRS_STATE_LABELS)[number] {
  return FSRS_STATE_LABELS[state] ?? 'New';
}

export function fsrsStateLabelToNumber(label: string): number {
  const idx = FSRS_STATE_LABELS.indexOf(label as (typeof FSRS_STATE_LABELS)[number]);
  return idx >= 0 ? idx : 0;
}

export function isValidUuid(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      value.trim()
    )
  );
}

function normalizeIsoTimestamp(value: unknown, fallback: string): string {
  if (typeof value !== 'string' || !value.trim()) {
    return fallback;
  }
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? new Date(parsed).toISOString() : fallback;
}

async function ensureStudentExists(client: DbQueryClient, studentId: string): Promise<void> {
  await client.query(
    `INSERT INTO students (id, full_name, email)
     VALUES ($1, $2, $3)
     ON CONFLICT (id) DO NOTHING`,
    [studentId, 'Estudante MedR1', `${studentId}@local.medr1`]
  );
}

async function upsertProfile(
  client: DbQueryClient,
  studentId: string,
  payload: StudentProfileSyncPayload
): Promise<void> {
  const fullName = payload.fullName?.trim() || 'Estudante MedR1';
  const email = payload.email?.trim() || `${studentId}@local.medr1`;
  const targetBoards = Array.isArray(payload.targetInstitutions)
    ? payload.targetInstitutions
    : [];
  const targetInstitution = targetBoards[0] ?? null;
  const dailyGoal = Math.min(300, Math.max(1, Math.round(payload.dailyGoal ?? 20)));
  const clientUpdatedAt = normalizeIsoTimestamp(
    payload.clientUpdatedAt,
    new Date().toISOString()
  );

  await client.query(
    `INSERT INTO students (
       id, full_name, email, target_specialty, target_institution,
       target_boards, daily_goal_target, client_updated_at
     )
     VALUES ($1, $2, $3, $4, $5, $6::jsonb, $7, $8)
     ON CONFLICT (id) DO UPDATE SET
       full_name = COALESCE(NULLIF(EXCLUDED.full_name, ''), students.full_name),
       email = COALESCE(NULLIF(EXCLUDED.email, ''), students.email),
       target_specialty = EXCLUDED.target_specialty,
       target_institution = EXCLUDED.target_institution,
       target_boards = EXCLUDED.target_boards,
       daily_goal_target = EXCLUDED.daily_goal_target,
       client_updated_at = EXCLUDED.client_updated_at
     WHERE EXCLUDED.client_updated_at >= students.client_updated_at`,
    [
      studentId,
      fullName,
      email,
      payload.targetSpecialty ?? null,
      targetInstitution,
      JSON.stringify(targetBoards),
      dailyGoal,
      clientUpdatedAt,
    ]
  );
}

async function insertAttemptIdempotent(
  client: DbQueryClient,
  studentId: string,
  payload: QuestionAttemptSyncPayload
): Promise<void> {
  const nowIso = new Date().toISOString();
  const answeredAt = normalizeIsoTimestamp(payload.answeredAt, nowIso);
  const clientUpdatedAt = normalizeIsoTimestamp(payload.clientUpdatedAt, answeredAt);
  const timeSpentMs = Math.max(0, Math.round(payload.timeSpentMs ?? 0));
  const mode = payload.mockExamId ? 'simulado' : 'estudo';

  await client.query(
    `INSERT INTO question_attempts (
       id, student_id, question_id, mock_exam_id, selected_option,
       is_correct, time_spent_ms, mode, answered_at, client_updated_at
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     ON CONFLICT (id) DO NOTHING`,
    [
      payload.id,
      studentId,
      payload.questionId,
      payload.mockExamId ?? null,
      payload.selectedOption,
      Boolean(payload.isCorrect),
      timeSpentMs,
      mode,
      answeredAt,
      clientUpdatedAt,
    ]
  );
}

async function upsertFsrsState(
  client: DbQueryClient,
  studentId: string,
  payload: FsrsReviewStateSyncPayload
): Promise<void> {
  const nowIso = new Date().toISOString();
  const dueAt = normalizeIsoTimestamp(payload.due, nowIso);
  const lastReviewedAt = payload.lastReview
    ? normalizeIsoTimestamp(payload.lastReview, nowIso)
    : null;
  const clientUpdatedAt = normalizeIsoTimestamp(payload.clientUpdatedAt, nowIso);

  await client.query(
    `INSERT INTO review_states (
       student_id, question_id, state, stability, difficulty,
       elapsed_days, scheduled_days, reps, lapses, due_at,
       last_reviewed_at, client_updated_at
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
     ON CONFLICT (student_id, question_id) DO UPDATE SET
       state = EXCLUDED.state,
       stability = EXCLUDED.stability,
       difficulty = EXCLUDED.difficulty,
       elapsed_days = EXCLUDED.elapsed_days,
       scheduled_days = EXCLUDED.scheduled_days,
       reps = EXCLUDED.reps,
       lapses = EXCLUDED.lapses,
       due_at = EXCLUDED.due_at,
       last_reviewed_at = EXCLUDED.last_reviewed_at,
       client_updated_at = EXCLUDED.client_updated_at
     WHERE EXCLUDED.client_updated_at >= review_states.client_updated_at`,
    [
      studentId,
      payload.questionId,
      fsrsStateNumberToLabel(payload.state),
      payload.stability,
      payload.difficulty,
      payload.elapsedDays,
      payload.scheduledDays,
      Math.max(0, Math.round(payload.reps)),
      Math.max(0, Math.round(payload.lapses)),
      dueAt,
      lastReviewedAt,
      clientUpdatedAt,
    ]
  );
}

async function insertFsrsLogIdempotent(
  client: DbQueryClient,
  studentId: string,
  payload: FsrsReviewLogSyncPayload
): Promise<void> {
  const reviewedAt = normalizeIsoTimestamp(payload.reviewedAt, new Date().toISOString());

  await client.query(
    `INSERT INTO review_states (student_id, question_id)
     VALUES ($1, $2)
     ON CONFLICT (student_id, question_id) DO NOTHING`,
    [studentId, payload.questionId]
  );

  await client.query(
    `INSERT INTO fsrs_review_logs (
       id, review_state_id, student_id, question_id, rating, state,
       stability, difficulty, elapsed_days, scheduled_days,
       reviewed_at, client_updated_at
     )
     SELECT
       $1, rs.id, $2, $3, $4, $5,
       $6, $7, $8, $9,
       $10, $10
     FROM review_states rs
     WHERE rs.student_id = $2 AND rs.question_id = $3
     ON CONFLICT (id) DO NOTHING`,
    [
      payload.id,
      studentId,
      payload.questionId,
      Math.min(4, Math.max(1, Math.round(payload.rating))),
      fsrsStateNumberToLabel(payload.state),
      payload.stability,
      payload.difficulty,
      payload.elapsedDays,
      payload.scheduledDays,
      reviewedAt,
    ]
  );
}

async function upsertBookmark(
  client: DbQueryClient,
  studentId: string,
  payload: BookmarkSyncPayload
): Promise<void> {
  const clientUpdatedAt = normalizeIsoTimestamp(
    payload.clientUpdatedAt,
    new Date().toISOString()
  );

  await client.query(
    `INSERT INTO student_bookmarks (
       student_id, question_id, note, is_deleted, client_updated_at
     )
     VALUES ($1, $2, $3, $4, $5)
     ON CONFLICT (student_id, question_id) DO UPDATE SET
       note = EXCLUDED.note,
       is_deleted = EXCLUDED.is_deleted,
       client_updated_at = EXCLUDED.client_updated_at
     WHERE EXCLUDED.client_updated_at >= student_bookmarks.client_updated_at`,
    [studentId, payload.questionId, payload.note ?? null, Boolean(payload.isDeleted), clientUpdatedAt]
  );
}

async function upsertMockExam(
  client: DbQueryClient,
  studentId: string,
  payload: MockExamSyncPayload
): Promise<void> {
  const nowIso = new Date().toISOString();
  const startedAt = normalizeIsoTimestamp(payload.startedAt, nowIso);
  const completedAt = payload.completedAt
    ? normalizeIsoTimestamp(payload.completedAt, nowIso)
    : null;
  const clientUpdatedAt = normalizeIsoTimestamp(payload.clientUpdatedAt, nowIso);
  const durationSeconds = Math.max(0, Math.round((payload.durationMs ?? 0) / 1000));

  await client.query(
    `INSERT INTO mock_exams (
       id, student_id, title, duration_seconds, elapsed_seconds,
       total_questions, correct_count, status, completed_at,
       client_updated_at, created_at
     )
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     ON CONFLICT (id) DO UPDATE SET
       title = EXCLUDED.title,
       duration_seconds = EXCLUDED.duration_seconds,
       elapsed_seconds = EXCLUDED.elapsed_seconds,
       total_questions = EXCLUDED.total_questions,
       correct_count = EXCLUDED.correct_count,
       status = EXCLUDED.status,
       completed_at = EXCLUDED.completed_at,
       client_updated_at = EXCLUDED.client_updated_at
     WHERE EXCLUDED.client_updated_at >= mock_exams.client_updated_at`,
    [
      payload.id,
      studentId,
      payload.title,
      durationSeconds,
      durationSeconds,
      Math.max(0, Math.round(payload.totalQuestions)),
      Math.max(0, Math.round(payload.correctCount)),
      payload.status,
      completedAt,
      clientUpdatedAt,
      startedAt,
    ]
  );
}

export async function applySyncEvent(
  client: DbQueryClient,
  studentId: string,
  event: SyncOutboxEvent
): Promise<void> {
  switch (event.type) {
    case 'PROFILE_UPSERT':
      await upsertProfile(client, studentId, event.payload);
      return;
    case 'ATTEMPT_CREATE':
      await insertAttemptIdempotent(client, studentId, event.payload);
      return;
    case 'FSRS_STATE_UPSERT':
      await upsertFsrsState(client, studentId, event.payload);
      return;
    case 'FSRS_LOG_CREATE':
      await insertFsrsLogIdempotent(client, studentId, event.payload);
      return;
    case 'BOOKMARK_UPSERT':
      await upsertBookmark(client, studentId, event.payload);
      return;
    case 'MOCK_EXAM_UPSERT':
      await upsertMockExam(client, studentId, event.payload);
      return;
  }
}

export async function pushSyncEvents(
  studentId: string,
  events: SyncOutboxEvent[],
  deps: SyncServiceDeps = {}
): Promise<SyncPushResponse | null> {
  const runTransaction = deps.withTransaction ?? withDbTransaction;
  const acknowledgedEventIds = await runTransaction(async (client) => {
    await ensureStudentExists(client, studentId);
    const acked: string[] = [];
    for (const event of events) {
      await applySyncEvent(client, studentId, event);
      acked.push(event.eventId);
    }
    return acked;
  });

  if (acknowledgedEventIds === null) {
    return null;
  }

  return {
    mode: 'postgres',
    acknowledgedEventIds,
    serverTimestamp: new Date().toISOString(),
  };
}

export async function pullSyncDelta(
  studentId: string,
  sinceIso: string,
  deps: SyncServiceDeps = {}
): Promise<SyncPullResponse | null> {
  const isConfigured = deps.isConfigured ?? isDatabaseConfigured;
  if (!isConfigured()) {
    return null;
  }

  const runQuery = deps.query ?? queryDb;
  const since = normalizeIsoTimestamp(sinceIso, '1970-01-01T00:00:00.000Z');

  const [profileRes, attemptsRes, reviewStatesRes, bookmarksRes, mockExamsRes] =
    await Promise.all([
      runQuery<{
        id: string;
        email: string | null;
        full_name: string | null;
        target_specialty: string | null;
        target_boards: string[] | null;
        daily_goal_target: number | null;
        client_updated_at: Date | string;
      }>(
        `SELECT id, email, full_name, target_specialty, target_boards,
                daily_goal_target, client_updated_at
         FROM students
         WHERE id = $1 AND server_updated_at > $2`,
        [studentId, since]
      ),
      runQuery<{
        id: string;
        question_id: string;
        selected_option: string;
        is_correct: boolean;
        time_spent_ms: number | null;
        mock_exam_id: string | null;
        answered_at: Date | string;
        client_updated_at: Date | string;
      }>(
        `SELECT id, question_id, selected_option, is_correct, time_spent_ms,
                mock_exam_id, answered_at, client_updated_at
         FROM question_attempts
         WHERE student_id = $1 AND server_updated_at > $2
         ORDER BY answered_at ASC`,
        [studentId, since]
      ),
      runQuery<{
        question_id: string;
        stability: number;
        difficulty: number;
        elapsed_days: number;
        scheduled_days: number;
        reps: number;
        lapses: number;
        state: string;
        due_at: Date | string;
        last_reviewed_at: Date | string | null;
        client_updated_at: Date | string;
      }>(
        `SELECT question_id, stability, difficulty, elapsed_days, scheduled_days,
                reps, lapses, state, due_at, last_reviewed_at, client_updated_at
         FROM review_states
         WHERE student_id = $1 AND server_updated_at > $2`,
        [studentId, since]
      ),
      runQuery<{
        question_id: string;
        note: string | null;
        is_deleted: boolean;
        client_updated_at: Date | string;
      }>(
        `SELECT question_id, note, is_deleted, client_updated_at
         FROM student_bookmarks
         WHERE student_id = $1 AND server_updated_at > $2`,
        [studentId, since]
      ),
      runQuery<{
        id: string;
        title: string;
        total_questions: number;
        correct_count: number;
        duration_seconds: number;
        status: string;
        created_at: Date | string;
        completed_at: Date | string | null;
        client_updated_at: Date | string;
      }>(
        `SELECT id, title, total_questions, correct_count, duration_seconds,
                status, created_at, completed_at, client_updated_at
         FROM mock_exams
         WHERE student_id = $1 AND server_updated_at > $2
         ORDER BY created_at ASC`,
        [studentId, since]
      ),
    ]);

  const profileRow = profileRes.rows[0] ?? null;

  return {
    mode: 'postgres',
    serverTimestamp: new Date().toISOString(),
    profile: profileRow
      ? {
          id: profileRow.id,
          email: profileRow.email,
          fullName: profileRow.full_name,
          targetSpecialty: profileRow.target_specialty,
          targetInstitutions: Array.isArray(profileRow.target_boards)
            ? profileRow.target_boards
            : [],
          dailyGoal: profileRow.daily_goal_target ?? 20,
          clientUpdatedAt: new Date(profileRow.client_updated_at).toISOString(),
        }
      : null,
    attempts: attemptsRes.rows.map((row) => ({
      id: row.id,
      questionId: row.question_id,
      selectedOption: row.selected_option,
      isCorrect: row.is_correct,
      timeSpentMs: row.time_spent_ms ?? 0,
      mockExamId: row.mock_exam_id,
      answeredAt: new Date(row.answered_at).toISOString(),
      clientUpdatedAt: new Date(row.client_updated_at).toISOString(),
    })),
    reviewStates: reviewStatesRes.rows.map((row) => ({
      questionId: row.question_id,
      stability: row.stability,
      difficulty: row.difficulty,
      elapsedDays: row.elapsed_days,
      scheduledDays: row.scheduled_days,
      reps: row.reps,
      lapses: row.lapses,
      state: fsrsStateLabelToNumber(row.state),
      due: new Date(row.due_at).toISOString(),
      lastReview: row.last_reviewed_at
        ? new Date(row.last_reviewed_at).toISOString()
        : null,
      clientUpdatedAt: new Date(row.client_updated_at).toISOString(),
    })),
    bookmarks: bookmarksRes.rows.map((row) => ({
      questionId: row.question_id,
      note: row.note,
      isDeleted: row.is_deleted,
      clientUpdatedAt: new Date(row.client_updated_at).toISOString(),
    })),
    mockExams: mockExamsRes.rows.map((row) => ({
      id: row.id,
      title: row.title,
      totalQuestions: row.total_questions,
      correctCount: row.correct_count,
      scorePercentage:
        row.total_questions > 0
          ? Number(((row.correct_count / row.total_questions) * 100).toFixed(2))
          : 0,
      durationMs: row.duration_seconds * 1000,
      status: row.status === 'completed' ? 'completed' : 'in_progress',
      startedAt: new Date(row.created_at).toISOString(),
      completedAt: row.completed_at ? new Date(row.completed_at).toISOString() : null,
      clientUpdatedAt: new Date(row.client_updated_at).toISOString(),
    })),
  };
}

export async function bootstrapSyncState(
  request: SyncBootstrapRequest,
  deps: SyncServiceDeps = {}
): Promise<SyncPullResponse | null> {
  const events: SyncOutboxEvent[] = [];

  if (request.profile) {
    events.push({
      eventId: `bootstrap-profile-${request.studentId}`,
      type: 'PROFILE_UPSERT',
      payload: request.profile,
    });
  }
  for (const exam of request.mockExams) {
    events.push({
      eventId: `bootstrap-exam-${exam.id}`,
      type: 'MOCK_EXAM_UPSERT',
      payload: exam,
    });
  }
  for (const attempt of request.attempts) {
    events.push({
      eventId: `bootstrap-attempt-${attempt.id}`,
      type: 'ATTEMPT_CREATE',
      payload: attempt,
    });
  }
  for (const rs of request.reviewStates) {
    events.push({
      eventId: `bootstrap-fsrs-${rs.questionId}`,
      type: 'FSRS_STATE_UPSERT',
      payload: rs,
    });
  }
  for (const log of request.reviewLogs ?? []) {
    events.push({
      eventId: `bootstrap-fsrs-log-${log.id}`,
      type: 'FSRS_LOG_CREATE',
      payload: log,
    });
  }
  for (const bm of request.bookmarks) {
    events.push({
      eventId: `bootstrap-bookmark-${bm.questionId}`,
      type: 'BOOKMARK_UPSERT',
      payload: bm,
    });
  }

  const pushResult = await pushSyncEvents(request.studentId, events, deps);
  if (pushResult === null) {
    return null;
  }

  return pullSyncDelta(request.studentId, '1970-01-01T00:00:00.000Z', deps);
}
