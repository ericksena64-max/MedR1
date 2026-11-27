export interface AuthStudentProfile {
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

export interface AuthSession {
  token: string;
  student: AuthStudentProfile;
}

export interface RegisterStudentInput {
  fullName: string;
  email: string;
  password: string;
  targetSpecialty?: string;
  targetInstitution?: string;
}

export interface LoginStudentInput {
  email: string;
  password: string;
}

export class AuthApiError extends Error {
  readonly status: number;
  readonly mode?: string;

  constructor(message: string, status: number, mode?: string) {
    super(message);
    this.name = 'AuthApiError';
    this.status = status;
    this.mode = mode;
  }
}

const STORAGE_KEY_AUTH_SESSION = 'medr1_auth_session_v1';

export function getStoredAuthSession(): AuthSession | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return null;
    const raw = window.localStorage.getItem(STORAGE_KEY_AUTH_SESSION);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AuthSession>;
    if (
      typeof parsed.token === 'string' &&
      parsed.token.trim().length > 0 &&
      parsed.student &&
      typeof parsed.student.id === 'string' &&
      typeof parsed.student.email === 'string'
    ) {
      return parsed as AuthSession;
    }
    return null;
  } catch {
    return null;
  }
}

export function getStoredAuthToken(): string | null {
  return getStoredAuthSession()?.token ?? null;
}

export function saveAuthSession(session: AuthSession): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_AUTH_SESSION, JSON.stringify(session));
    }
  } catch {
    // Ignore storage quota / privacy mode errors
  }
}

export function clearAuthSession(): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEY_AUTH_SESSION);
    }
  } catch {
    // Ignore
  }
}

async function parseJsonSafe(res: Response): Promise<Record<string, unknown>> {
  try {
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function registerStudent(
  input: RegisterStudentInput,
  fetchImpl: typeof fetch = globalThis.fetch.bind(globalThis)
): Promise<AuthSession> {
  const res = await fetchImpl('/api/auth/register', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw new AuthApiError(
      typeof data.error === 'string' ? data.error : 'Não foi possível criar a conta.',
      res.status,
      typeof data.mode === 'string' ? data.mode : undefined
    );
  }
  const session = data as unknown as AuthSession;
  saveAuthSession(session);
  return session;
}

export async function loginStudent(
  input: LoginStudentInput,
  fetchImpl: typeof fetch = globalThis.fetch.bind(globalThis)
): Promise<AuthSession> {
  const res = await fetchImpl('/api/auth/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(input),
  });
  const data = await parseJsonSafe(res);
  if (!res.ok) {
    throw new AuthApiError(
      typeof data.error === 'string' ? data.error : 'E-mail ou senha inválidos.',
      res.status,
      typeof data.mode === 'string' ? data.mode : undefined
    );
  }
  const session = data as unknown as AuthSession;
  saveAuthSession(session);
  return session;
}

export async function fetchCurrentStudent(
  token: string,
  fetchImpl: typeof fetch = globalThis.fetch.bind(globalThis)
): Promise<AuthStudentProfile | null> {
  const res = await fetchImpl('/api/auth/me', {
    headers: { authorization: `Bearer ${token}` },
  });
  if (res.status === 401) {
    clearAuthSession();
    return null;
  }
  if (!res.ok) {
    return null;
  }
  const data = await parseJsonSafe(res);
  if (data.student && typeof data.student === 'object') {
    const student = data.student as AuthStudentProfile;
    saveAuthSession({ token, student });
    return student;
  }
  return null;
}
