export type GrandeAreaId =
  | 'clinica_medica'
  | 'cirurgia_geral'
  | 'ginecologia_obstetricia'
  | 'pediatria'
  | 'medicina_preventiva';

export type AlternativeLetter = 'A' | 'B' | 'C' | 'D' | 'E';

export type ExamType = 'Acesso Direto' | 'R+' | 'Revalida';

export type DifficultyLevel = 'Fácil' | 'Médio' | 'Difícil' | 'Anulada';

export type StudyMode = 'estudo' | 'simulado';

export type ThemeMode = 'light' | 'dark' | 'system' | 'schedule';

export interface ThemeScheduleConfig {
  darkStartHour: number;  // 0-23 (default 18 -> 18:00)
  lightStartHour: number; // 0-23 (default 6  -> 06:00)
}

export interface DailyGoalProgress {
  target: number;
  answeredToday: number;
  correctToday: number;
  pct: number;
  remaining: number;
  completed: boolean;
  streakDays: number;
  todayKey: string;
}

export type StudentFilterStatus =
  | 'todas'
  | 'nao_resolvidas'
  | 'erradas'
  | 'acertadas'
  | 'favoritadas'
  | 'caderno_erros';

export type ActiveTab =
  | 'inicio'
  | 'questoes'
  | 'desempenho'
  | 'ranking'
  | 'caderno_erros'
  | 'flashcards'
  | 'importar';

export type PerformanceStatus =
  | 'Acima da Mediana'
  | 'Na Mediana'
  | 'Ponto de Atenção';

export interface LabRow {
  exame: string;
  resultado: string;
  referencia: string;
  alterado?: 'alto' | 'baixo' | 'normal';
}

export interface ClinicalImage {
  url: string;
  modality: string;
  caption: string;
  aspectRatio: '16:9' | '4:3' | '1:1';
}

export interface QuestionAlternative {
  letter: AlternativeLetter;
  text: string;
  explanation: string;
  communityPct: number; // Percentage of platform students who selected this alternative
}

export interface MedicalQuestion {
  id: string;
  code: string;
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  subtema: string;
  /** Taxonomia canônica medr1_taxonomy_v1 (slugs estáveis). */
  temaSlug?: string;
  subtemaSlug?: string;
  tags?: string[];
  taxonomyVersion?: string;
  needsTaxonomyReview?: boolean;
  banca: string;
  instituicao: string;
  estado: string;
  regiao: string;
  ano: number;
  tipoProva: ExamType;
  anulada: boolean;
  desatualizada: boolean;
  enunciado: string;
  labTable?: LabRow[];
  clinicalImage?: ClinicalImage;
  alternativas: QuestionAlternative[];
  gabaritoOficial: AlternativeLetter;
  totalRespostasComunidade: number;
  taxaAcertoGlobal: number; // 0-100
  taxaAcertoBase?: number; // Prior clínico calibrado original (0-100)
  tentativasGlobais?: number; // Total de 1ªs tentativas únicas computadas
  acertosGlobais?: number; // Total de acertos na 1ª tentativa
  analiseBanca?: {
    conceitoCentral: string;
    raciocinioChave: string;
    armadilhaBanca?: string;
  };
  mapaDistratores?: Record<string, string>;
  comentarioGeral: string;
  perolaClinica: string;
  referencias: string[];
  sourceBatch?: string;
  importedAt?: string;
  numeroOriginal?: number;
  needsAiCommentary?: boolean;
  sourcePdfUrl?: string;
  sourcePdfPage?: number;
  hasPdfFigure?: boolean;
}

export interface UserAnswerRecord {
  questionId: string;
  selectedLetter: AlternativeLetter;
  isCorrect: boolean;
  answeredAt: string;
  mode: StudyMode;
  timeSpentSec: number;
}

export interface QuestionFilters {
  search: string;
  examSearch: string;
  grandeAreaId: string;
  tema: string;
  temas?: string[];
  subtema: string;
  banca: string;
  instituicao: string;
  instituicoes?: string[];
  regiao: string;
  ano: string;
  dificuldade: string;
  status: StudentFilterStatus;
  comImagens: boolean;
  excluirAnuladasDesatualizadas: boolean;
}

export interface UserProfile {
  id: string;
  realName: string;
  pseudonym: string;
  usePseudonym: boolean;
  targetSpecialty: string;
  targetInstitution: string;
  avatarInitials: string;
}

export type RankingPeriod = 'daily' | 'weekly' | 'monthly';

export interface LiveRankingUser {
  id: string;
  realName: string;
  pseudonym: string;
  usePseudonym: boolean;
  targetInstitution: string;
  avatarInitials: string;
  questionsToday: number;
  correctToday: number;
  questionsWeek?: number;
  correctWeek?: number;
  questionsMonth?: number;
  correctMonth?: number;
  streak: number;
  currentArea: string;
  isOnline: boolean;
  isCurrentUser?: boolean;
  lastActiveSecondsAgo: number;
}

export interface HistoricalAreaPerformance {
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  shortName: string;
  baseAnswered: number;
  baseCorrect: number;
  communityMedianPct: number;
  communityP75Pct: number;
}

export interface HistoricalTopicPerformance {
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  baseAnswered: number;
  baseCorrect: number;
  communityMedianPct: number;
  communityP75Pct: number;
}

export interface TemporalPoint {
  period: string;
  alunoPct: number;
  medianaPct: number;
  p75Pct: number;
  questoes: number;
}

export interface GapRadarTopicRow {
  specialty: string;
  grandeAreaId: GrandeAreaId;
  topic: string;
  totalAttempts: number;
  correctAttempts: number;
  errorCount: number;
  accuracyPct: number;
  communityMedianPct: number;
  deltaVsMedian: number;
  p50TimeSeconds: number;
  p75TimeSeconds: number;
  gapImpactScore: number;
  lastAttemptAt: string;
}

export type SrsRating = 1 | 2 | 3 | 4;

export type FsrsState = 'New' | 'Learning' | 'Review' | 'Relearning';

export type FixedTargetRetention = 0.85 | 0.9 | 0.95;

export type RetentionMode = 'dinamica' | FixedTargetRetention;

export type TargetRetention = number;

export type ExamBoard = 'UEPA' | 'ENARE' | 'GERAL';

export type FlashcardSource = 'perola' | 'caderno_erros' | 'manual';

export interface Flashcard {
  id: string;
  questionId?: string;
  questionCode?: string;
  institutionLabel?: string;
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  subtema?: string;
  front: string;
  backPearl: string;
  backAnswerSummary?: string;
  source: FlashcardSource;
  createdAt: string;
  dueAt: string;
  lastReviewedAt?: string;
  // FSRS (Free Spaced Repetition Scheduler — powered by ts-fsrs FSRS-6) core state parameters
  stability: number;      // S: interval in days at which Retrievability = 90%
  difficulty: number;     // D: item complexity on [1, 10]
  elapsed_days: number;   // Days elapsed since last review
  scheduled_days: number; // Scheduled interval in days for next review
  learning_steps?: number; // Current intra-day (re)learning step index managed by ts-fsrs
  reps: number;           // Total successful review count
  lapses: number;         // Number of times forgotten (Again / Errei)
  state: FsrsState;       // New | Learning | Review | Relearning
}

export interface FsrsReviewLogEntry {
  cardId: string;
  rating: SrsRating;
  state: FsrsState;
  stability: number;
  difficulty: number;
  elapsed_days: number;
  scheduled_days: number;
  desiredRetention: number;
  reviewedAt: string;
}

export type SimuladoScaleType = 'bruta_100' | 'tri_outra';

export interface SimuladoRecord {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  validCorrect: number;
  validTotal: number;
  accuracyPct: number; // P = (validCorrect / validTotal) * 100
  scaleType: SimuladoScaleType;
  estimatedScore: number; // N_est (equals P when scaleType === 'bruta_100')
  cohortAvgPct?: number; // Optional class/board average (%)
  cohortPercentile?: number; // Optional class/board percentile (1-99)
  source: 'manual' | 'app_simulado';
}

export interface CutoffTargetConfig {
  institution: string;
  specialty: string;
  modality: ExamType;
  historicalCutoff: number; // Base historical cutoff score
  safetyMargin: number; // Recommended 3 to 5 points margin
  scaleType: SimuladoScaleType;
}



