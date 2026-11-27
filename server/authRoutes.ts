import type { Express, NextFunction, Request, Response } from 'express';
import { isDatabaseConfigured, queryDb } from './db.ts';
import { hashPassword, signSessionToken, verifyPassword, verifySessionToken } from './auth.ts';

export interface AuthStudentRow {
  id: string;
  full_name: string;
  email: string;
  password_hash: string | null;
  pseudonym: string | null;
  use_pseudonym: boolean;
  target_specialty: string | null;
  target_institution: string | null;
  avatar_initials: string | null;
  daily_goal_target: number;
  is_active: boolean;
}

export interface PublicStudentProfile {
  id: string;
  fullName: string;
  email: string;
  pseudonym: string | null;
  usePseudonym: boolean;
  targetSpecialty: string | null;
  targetInstitution: string | null;
  avatarInitials: string;
  dailyGoal: number;
}

export interface AuthServiceDeps {
  isDbConfigured?: () => boolean;
  findStudentByEmail?: (email: string) => Promise<AuthStudentRow | null>;
  findStudentById?: (id: string) => Promise<AuthStudentRow | null>;
  createStudent?: (input: {
    fullName: string;
    email: string;
    passwordHash: string;
    avatarInitials: string;
    targetSpecialty: string | null;
    targetInstitution: string | null;
  }) => Promise<AuthStudentRow>;
}

export interface RegisterAuthRoutesOptions {
  jwtSecret?: string;
  isProduction?: boolean;
  rateLimitMax?: number;
  authDeps?: AuthServiceDeps;
}

const DEV_FALLBACK_JWT_SECRET = 'medr1-local-dev-jwt-secret-change-in-production';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days
const AUTH_RATE_LIMIT_WINDOW_MS = 60_000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function computeAvatarInitials(fullName: string): string {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return 'MR';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function toPublicStudent(row: AuthStudentRow): PublicStudentProfile {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    pseudonym: row.pseudonym,
    usePseudonym: Boolean(row.use_pseudonym),
    targetSpecialty: row.target_specialty,
    targetInstitution: row.target_institution,
    avatarInitials: (row.avatar_initials || computeAvatarInitials(row.full_name)).slice(0, 3),
    dailyGoal: Number(row.daily_goal_target) || 20,
  };
}

function extractBearerToken(req: Request): string {
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  const sessionHeader = req.headers['x-session-token'];
  if (typeof sessionHeader === 'string') {
    return sessionHeader.trim();
  }
  return '';
}

function createAuthRateLimiter(maxRequests: number) {
  const buckets = new Map<string, { count: number; resetAt: number }>();

  return (req: Request, res: Response, next: NextFunction) => {
    const now = Date.now();
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';
    const existing = buckets.get(clientIp);

    if (!existing || now >= existing.resetAt) {
      buckets.set(clientIp, { count: 1, resetAt: now + AUTH_RATE_LIMIT_WINDOW_MS });
      next();
      return;
    }

    if (existing.count >= maxRequests) {
      const retryAfterSec = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));
      res.setHeader('Retry-After', String(retryAfterSec));
      res.status(429).json({
        error: `Muitas tentativas de acesso. Aguarde ${retryAfterSec}s e tente novamente.`,
      });
      return;
    }

    existing.count += 1;
    next();
  };
}

const defaultAuthDeps: Required<AuthServiceDeps> = {
  isDbConfigured: isDatabaseConfigured,
  async findStudentByEmail(email: string): Promise<AuthStudentRow | null> {
    const res = await queryDb<AuthStudentRow>(
      `SELECT id, full_name, email, password_hash, pseudonym, use_pseudonym,
              target_specialty, target_institution, avatar_initials, daily_goal_target, is_active
       FROM students
       WHERE LOWER(email) = LOWER($1)
       LIMIT 1`,
      [email]
    );
    return res.rows[0] ?? null;
  },
  async findStudentById(id: string): Promise<AuthStudentRow | null> {
    const res = await queryDb<AuthStudentRow>(
      `SELECT id, full_name, email, password_hash, pseudonym, use_pseudonym,
              target_specialty, target_institution, avatar_initials, daily_goal_target, is_active
       FROM students
       WHERE id = $1 AND is_active = TRUE
       LIMIT 1`,
      [id]
    );
    return res.rows[0] ?? null;
  },
  async createStudent(input): Promise<AuthStudentRow> {
    const res = await queryDb<AuthStudentRow>(
      `INSERT INTO students (
         full_name,
         email,
         password_hash,
         avatar_initials,
         target_specialty,
         target_institution
       )
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, full_name, email, password_hash, pseudonym, use_pseudonym,
                 target_specialty, target_institution, avatar_initials, daily_goal_target, is_active`,
      [
        input.fullName,
        input.email,
        input.passwordHash,
        input.avatarInitials,
        input.targetSpecialty,
        input.targetInstitution,
      ]
    );
    return res.rows[0];
  },
};

export function registerAuthRoutes(
  app: Express,
  options: RegisterAuthRoutesOptions = {}
): void {
  const isProduction = options.isProduction ?? process.env.NODE_ENV === 'production';
  const configuredSecret = (options.jwtSecret ?? '').trim();
  const deps: Required<AuthServiceDeps> = {
    ...defaultAuthDeps,
    ...options.authDeps,
  };
  const authRateLimiter = createAuthRateLimiter(options.rateLimitMax ?? 20);

  const resolveJwtSecret = (): string | null => {
    if (configuredSecret.length >= 16) return configuredSecret;
    if (isProduction) return null;
    return DEV_FALLBACK_JWT_SECRET;
  };

  app.post('/api/auth/register', authRateLimiter, async (req: Request, res: Response) => {
    try {
      if (!deps.isDbConfigured()) {
        res.status(503).json({
          mode: 'local-fallback',
          error: 'Cadastro em nuvem indisponível: banco de dados (DATABASE_URL) não configurado.',
        });
        return;
      }

      const secret = resolveJwtSecret();
      if (!secret) {
        res.status(503).json({
          error: 'Autenticação indisponível: MEDR1_JWT_SECRET não configurada no servidor.',
        });
        return;
      }

      const body = (req.body ?? {}) as Record<string, unknown>;
      const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
      const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
      const password = typeof body.password === 'string' ? body.password : '';
      const targetSpecialty =
        typeof body.targetSpecialty === 'string' && body.targetSpecialty.trim()
          ? body.targetSpecialty.trim().slice(0, 100)
          : null;
      const targetInstitution =
        typeof body.targetInstitution === 'string' && body.targetInstitution.trim()
          ? body.targetInstitution.trim().slice(0, 100)
          : null;

      if (fullName.length < 2 || fullName.length > 150) {
        res.status(400).json({ error: 'Informe seu nome completo (mínimo 2 caracteres).' });
        return;
      }
      if (!EMAIL_REGEX.test(email) || email.length > 255) {
        res.status(400).json({ error: 'Informe um endereço de e-mail válido.' });
        return;
      }
      if (password.length < 6 || password.length > 128) {
        res.status(400).json({ error: 'A senha deve ter entre 6 e 128 caracteres.' });
        return;
      }

      const existing = await deps.findStudentByEmail(email);
      if (existing) {
        res.status(409).json({
          error: 'Já existe uma conta cadastrada com este e-mail. Tente fazer login.',
        });
        return;
      }

      const passwordHash = await hashPassword(password);
      const avatarInitials = computeAvatarInitials(fullName);
      const created = await deps.createStudent({
        fullName,
        email,
        passwordHash,
        avatarInitials,
        targetSpecialty,
        targetInstitution,
      });

      const token = signSessionToken(created.id, secret, SESSION_TTL_SECONDS);
      res.status(201).json({
        token,
        student: toPublicStudent(created),
      });
    } catch (err: unknown) {
      const pgCode =
        typeof err === 'object' && err !== null && 'code' in err
          ? String((err as { code?: unknown }).code)
          : '';
      if (pgCode === '23505') {
        res.status(409).json({
          error: 'Já existe uma conta cadastrada com este e-mail. Tente fazer login.',
        });
        return;
      }
      console.error('[MedR1 Auth Register Error]', err);
      res.status(500).json({ error: 'Erro interno ao criar conta. Tente novamente.' });
    }
  });

  app.post('/api/auth/login', authRateLimiter, async (req: Request, res: Response) => {
    try {
      if (!deps.isDbConfigured()) {
        res.status(503).json({
          mode: 'local-fallback',
          error: 'Login em nuvem indisponível: banco de dados (DATABASE_URL) não configurado.',
        });
        return;
      }

      const secret = resolveJwtSecret();
      if (!secret) {
        res.status(503).json({
          error: 'Autenticação indisponível: MEDR1_JWT_SECRET não configurada no servidor.',
        });
        return;
      }

      const body = (req.body ?? {}) as Record<string, unknown>;
      const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
      const password = typeof body.password === 'string' ? body.password : '';

      if (!EMAIL_REGEX.test(email) || !password) {
        res.status(400).json({ error: 'Informe e-mail e senha válidos.' });
        return;
      }

      const student = await deps.findStudentByEmail(email);
      if (!student || !student.is_active || !student.password_hash) {
        res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        return;
      }

      const validPassword = await verifyPassword(password, student.password_hash);
      if (!validPassword) {
        res.status(401).json({ error: 'E-mail ou senha inválidos.' });
        return;
      }

      const token = signSessionToken(student.id, secret, SESSION_TTL_SECONDS);
      res.json({
        token,
        student: toPublicStudent(student),
      });
    } catch (err) {
      console.error('[MedR1 Auth Login Error]', err);
      res.status(500).json({ error: 'Erro interno ao autenticar. Tente novamente.' });
    }
  });

  app.get('/api/auth/me', async (req: Request, res: Response) => {
    try {
      if (!deps.isDbConfigured()) {
        res.status(503).json({
          mode: 'local-fallback',
          error: 'Banco de dados não configurado no servidor.',
        });
        return;
      }

      const secret = resolveJwtSecret();
      if (!secret) {
        res.status(503).json({
          error: 'Autenticação indisponível: MEDR1_JWT_SECRET não configurada no servidor.',
        });
        return;
      }

      const token = extractBearerToken(req);
      const verified = verifySessionToken(token, secret);
      if (!verified) {
        res.status(401).json({ error: 'Sessão ausente, inválida ou expirada.' });
        return;
      }

      const student = await deps.findStudentById(verified.studentId);
      if (!student) {
        res.status(401).json({ error: 'Conta não encontrada ou inativa.' });
        return;
      }

      res.json({ student: toPublicStudent(student) });
    } catch (err) {
      console.error('[MedR1 Auth Me Error]', err);
      res.status(500).json({ error: 'Erro ao validar sessão.' });
    }
  });
}
