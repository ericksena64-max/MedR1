import crypto from 'node:crypto';
import type { NextFunction, Request, Response } from 'express';
import { isValidUuid } from './syncService.ts';

export interface SessionTokenPayload {
  sub: string; // Authenticated studentId (UUID)
  iat: number; // Issued-at (epoch seconds)
  exp: number; // Expiration (epoch seconds)
}

export interface SyncAuthMiddlewareOptions {
  jwtSecret?: string;
  isProduction?: boolean;
}

const DEFAULT_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7; // 7 days

function base64UrlEncode(input: Buffer | string): string {
  const buf = typeof input === 'string' ? Buffer.from(input, 'utf8') : input;
  return buf
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(segment: string): Buffer | null {
  if (!/^[A-Za-z0-9_-]+$/.test(segment)) return null;
  const padded = segment + '='.repeat((4 - (segment.length % 4)) % 4);
  const base64 = padded.replace(/-/g, '+').replace(/_/g, '/');
  try {
    return Buffer.from(base64, 'base64');
  } catch {
    return null;
  }
}

/**
 * Constant-time string comparison to prevent timing side-channel leaks on tokens/signatures.
 */
export function safeCompareSecret(a: string, b: string): boolean {
  const bufA = Buffer.from(a, 'utf8');
  const bufB = Buffer.from(b, 'utf8');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

const SCRYPT_KEYLEN = 64;
const SCRYPT_SALT_BYTES = 16;

function scryptAsync(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, SCRYPT_KEYLEN, (err, derivedKey) => {
      if (err) reject(err);
      else resolve(derivedKey);
    });
  });
}

/**
 * Hashes a plaintext password with a random 16-byte salt using Node's built-in scrypt.
 * Format: `scrypt$<saltHex>$<derivedKeyHex>`
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(SCRYPT_SALT_BYTES);
  const derived = await scryptAsync(password, salt);
  return `scrypt$${salt.toString('hex')}$${derived.toString('hex')}`;
}

/**
 * Verifies a plaintext password against a stored `scrypt$<saltHex>$<derivedKeyHex>` hash
 * using constant-time comparison.
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  if (!password || !storedHash) return false;
  const parts = storedHash.split('$');
  if (parts.length !== 3 || parts[0] !== 'scrypt') return false;

  const [, saltHex, expectedHex] = parts;
  if (!saltHex || !expectedHex) return false;

  try {
    const salt = Buffer.from(saltHex, 'hex');
    const expected = Buffer.from(expectedHex, 'hex');
    if (salt.length === 0 || expected.length !== SCRYPT_KEYLEN) return false;
    const derived = await scryptAsync(password, salt);
    if (derived.length !== expected.length) return false;
    return crypto.timingSafeEqual(derived, expected);
  } catch {
    return false;
  }
}

/**
 * Signs an HS256 JWT bound to a specific student UUID (`sub`).
 */
export function signSessionToken(
  studentId: string,
  secret: string,
  ttlSeconds: number = DEFAULT_TOKEN_TTL_SECONDS,
  nowSec: number = Math.floor(Date.now() / 1000)
): string {
  if (!isValidUuid(studentId)) {
    throw new Error('studentId inválido para emissão de token de sessão.');
  }
  if (!secret || secret.length < 16) {
    throw new Error('MEDR1_JWT_SECRET deve ter ao menos 16 caracteres.');
  }

  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload: SessionTokenPayload = {
    sub: studentId,
    iat: nowSec,
    exp: nowSec + Math.max(60, Math.floor(ttlSeconds)),
  };
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signingInput = `${header}.${encodedPayload}`;
  const signature = crypto
    .createHmac('sha256', secret)
    .update(signingInput)
    .digest();

  return `${signingInput}.${base64UrlEncode(signature)}`;
}

/**
 * Verifies an HS256 JWT signature, expiration, and UUID `sub` claim.
 */
export function verifySessionToken(
  token: string,
  secret: string,
  nowSec: number = Math.floor(Date.now() / 1000)
): { studentId: string; iat: number; exp: number } | null {
  if (!token || !secret) return null;

  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedPayload, encodedSignature] = parts;
  const headerBuf = base64UrlDecode(encodedHeader);
  const payloadBuf = base64UrlDecode(encodedPayload);
  if (!headerBuf || !payloadBuf) return null;

  try {
    const header = JSON.parse(headerBuf.toString('utf8')) as {
      alg?: unknown;
      typ?: unknown;
    };
    if (header.alg !== 'HS256') return null;
  } catch {
    return null;
  }

  const expectedSig = base64UrlEncode(
    crypto
      .createHmac('sha256', secret)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest()
  );

  if (!safeCompareSecret(encodedSignature, expectedSig)) {
    return null;
  }

  try {
    const payload = JSON.parse(payloadBuf.toString('utf8')) as Partial<SessionTokenPayload>;
    if (
      typeof payload.sub !== 'string' ||
      !isValidUuid(payload.sub) ||
      typeof payload.exp !== 'number' ||
      typeof payload.iat !== 'number'
    ) {
      return null;
    }
    if (payload.exp <= nowSec) {
      return null;
    }
    return {
      studentId: payload.sub,
      iat: payload.iat,
      exp: payload.exp,
    };
  } catch {
    return null;
  }
}

function extractBearerOrSessionToken(req: Request): string {
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

function extractRequestedStudentId(req: Request): string {
  if (req.body && typeof req.body === 'object' && typeof (req.body as Record<string, unknown>).studentId === 'string') {
    return ((req.body as Record<string, unknown>).studentId as string).trim();
  }
  if (typeof req.query.studentId === 'string' && req.query.studentId.trim()) {
    return req.query.studentId.trim();
  }
  const headerId = req.header('x-student-id');
  return typeof headerId === 'string' ? headerId.trim() : '';
}

/**
 * Protects `/api/sync/*` against IDOR by deriving `studentId` from a verified HS256 JWT.
 * - Whenever `jwtSecret` is configured OR `NODE_ENV === 'production'`, a valid JWT is mandatory.
 * - If `NODE_ENV === 'production'` and `jwtSecret` is missing, fails closed with 503.
 * - If the request also passes a `studentId` that does not match `jwt.sub`, rejects with 403.
 * - In local development without `MEDR1_JWT_SECRET`, preserves backward-compatible local mode.
 */
export function createSyncAuthMiddleware(options: SyncAuthMiddlewareOptions = {}) {
  const jwtSecret = (options.jwtSecret ?? '').trim();
  const isProduction = options.isProduction ?? process.env.NODE_ENV === 'production';

  return (req: Request, res: Response, next: NextFunction) => {
    if (!jwtSecret && !isProduction) {
      next();
      return;
    }

    if (!jwtSecret && isProduction) {
      res.status(503).json({
        error: 'Autenticação de sincronização indisponível: MEDR1_JWT_SECRET não configurada.',
      });
      return;
    }

    const token = extractBearerOrSessionToken(req);
    const verified = verifySessionToken(token, jwtSecret);
    if (!verified) {
      res.status(401).json({
        error: 'Sessão ausente, inválida ou expirada. Autentique-se para sincronizar.',
      });
      return;
    }

    const requestedStudentId = extractRequestedStudentId(req);
    if (requestedStudentId && requestedStudentId !== verified.studentId) {
      res.status(403).json({
        error: 'Acesso negado: studentId da requisição não corresponde à sessão autenticada.',
      });
      return;
    }

    res.locals.authenticatedStudentId = verified.studentId;
    next();
  };
}

/**
 * Resolves the authoritative studentId for `/api/sync/*` handlers.
 * Always prefers the JWT-derived `res.locals.authenticatedStudentId` over untrusted client input.
 */
export function resolveAuthorizedStudentId(req: Request, res: Response): string {
  const fromSession = res.locals?.authenticatedStudentId;
  if (typeof fromSession === 'string' && isValidUuid(fromSession)) {
    return fromSession;
  }
  return extractRequestedStudentId(req);
}
