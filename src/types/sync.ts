export interface StudentProfileSyncPayload {
  id: string;
  email?: string | null;
  fullName?: string | null;
  targetSpecialty?: string | null;
  targetInstitutions?: string[];
  dailyGoal?: number;
  clientUpdatedAt: string;
}

export interface QuestionAttemptSyncPayload {
  id: string; // Client-generated UUID for idempotency
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timeSpentMs: number;
  mockExamId?: string | null;
  answeredAt: string;
  clientUpdatedAt: string;
}

export interface FsrsReviewStateSyncPayload {
  questionId?: string | null;
  cardId?: string;
  cardPayload?: {
    grandeAreaId: string;
    grandeArea: string;
    tema: string;
    front: string;
    backPearl: string;
    source: string;
  };
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  reps: number;
  lapses: number;
  state: number; // 0: New, 1: Learning, 2: Review, 3: Relearning
  due: string;
  lastReview?: string | null;
  clientUpdatedAt: string;
}

export interface FsrsReviewLogSyncPayload {
  id: string;
  questionId?: string | null;
  cardId?: string;
  rating: number; // 1: Again, 2: Hard, 3: Good, 4: Easy
  state: number;
  due: string;
  stability: number;
  difficulty: number;
  elapsedDays: number;
  lastElapsedDays: number;
  scheduledDays: number;
  reviewTimeMs?: number | null;
  reviewedAt: string;
}

export interface BookmarkSyncPayload {
  questionId: string;
  note?: string | null;
  isDeleted: boolean;
  clientUpdatedAt: string;
}

export interface MockExamSyncPayload {
  id: string;
  title: string;
  institution?: string | null;
  totalQuestions: number;
  correctCount: number;
  scorePercentage: number;
  durationMs: number;
  status: 'in_progress' | 'completed';
  startedAt: string;
  completedAt?: string | null;
  clientUpdatedAt: string;
}

export type SyncOutboxEvent =
  | { eventId: string; type: 'PROFILE_UPSERT'; payload: StudentProfileSyncPayload }
  | { eventId: string; type: 'ATTEMPT_CREATE'; payload: QuestionAttemptSyncPayload }
  | { eventId: string; type: 'FSRS_STATE_UPSERT'; payload: FsrsReviewStateSyncPayload }
  | { eventId: string; type: 'FSRS_LOG_CREATE'; payload: FsrsReviewLogSyncPayload }
  | { eventId: string; type: 'BOOKMARK_UPSERT'; payload: BookmarkSyncPayload }
  | { eventId: string; type: 'MOCK_EXAM_UPSERT'; payload: MockExamSyncPayload };

export interface SyncPushRequest {
  studentId: string;
  events: SyncOutboxEvent[];
}

export interface SyncPushResponse {
  mode: 'postgres' | 'local-fallback';
  acknowledgedEventIds: string[];
  serverTimestamp: string;
}

export interface SyncPullResponse {
  mode: 'postgres' | 'local-fallback';
  serverTimestamp: string;
  profile: StudentProfileSyncPayload | null;
  attempts: QuestionAttemptSyncPayload[];
  reviewStates: FsrsReviewStateSyncPayload[];
  bookmarks: BookmarkSyncPayload[];
  mockExams: MockExamSyncPayload[];
}

export interface SyncBootstrapRequest {
  studentId: string;
  profile?: StudentProfileSyncPayload | null;
  attempts: QuestionAttemptSyncPayload[];
  reviewStates: FsrsReviewStateSyncPayload[];
  reviewLogs?: FsrsReviewLogSyncPayload[];
  bookmarks: BookmarkSyncPayload[];
  mockExams: MockExamSyncPayload[];
}
