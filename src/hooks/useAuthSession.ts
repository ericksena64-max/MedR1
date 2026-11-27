import { useCallback, useEffect, useState } from 'react';
import {
  clearAuthSession,
  fetchCurrentStudent,
  getStoredAuthSession,
  loginStudent,
  registerStudent,
  type AuthSession,
  type LoginStudentInput,
  type RegisterStudentInput,
} from '../lib/authClient';
import { setLastPullTimestamp } from '../lib/syncOutbox';

export function useAuthSession() {
  const [session, setSession] = useState<AuthSession | null>(() => getStoredAuthSession());
  const [isValidating, setIsValidating] = useState<boolean>(() => Boolean(getStoredAuthSession()));

  useEffect(() => {
    const existing = getStoredAuthSession();
    if (!existing) {
      setIsValidating(false);
      return;
    }

    let cancelled = false;
    void fetchCurrentStudent(existing.token)
      .then((student) => {
        if (cancelled) return;
        if (student) {
          setSession({ token: existing.token, student });
        } else {
          // Only clear session if token was actually invalidated (clearAuthSession ran)
          if (!getStoredAuthSession()) {
            setSession(null);
          }
        }
      })
      .catch(() => {
        // Offline or server unavailable — keep cached local session
      })
      .finally(() => {
        if (!cancelled) setIsValidating(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (input: LoginStudentInput): Promise<AuthSession> => {
    const next = await loginStudent(input);
    setSession(next);
    return next;
  }, []);

  const register = useCallback(async (input: RegisterStudentInput): Promise<AuthSession> => {
    const next = await registerStudent(input);
    setSession(next);
    return next;
  }, []);

  const logout = useCallback(() => {
    clearAuthSession();
    setLastPullTimestamp('1970-01-01T00:00:00.000Z');
    setSession(null);
  }, []);

  return {
    session,
    student: session?.student ?? null,
    isAuthenticated: Boolean(session?.token),
    isValidating,
    login,
    register,
    logout,
  };
}
