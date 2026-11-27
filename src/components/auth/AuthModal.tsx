import React, { useEffect, useState } from 'react';
import {
  X,
  LogIn,
  UserPlus,
  Cloud,
  CloudOff,
  RefreshCw,
  LogOut,
  CheckCircle2,
  AlertCircle,
  Mail,
  Lock,
  User,
  Stethoscope,
} from 'lucide-react';
import {
  AuthApiError,
  type AuthStudentProfile,
  type LoginStudentInput,
  type RegisterStudentInput,
} from '../../lib/authClient';
import type { SyncStatus } from '../../hooks/useSyncEngine';
import { cn } from '../../lib/utils';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  student: AuthStudentProfile | null;
  syncStatus: SyncStatus;
  pendingSyncCount: number;
  lastSyncedAt: string | null;
  onLogin: (input: LoginStudentInput) => Promise<void>;
  onRegister: (input: RegisterStudentInput) => Promise<void>;
  onLogout: () => void;
  onSyncNow: () => Promise<void>;
}

type AuthTab = 'login' | 'register';

function formatSyncTime(iso: string | null): string {
  if (!iso) return 'Ainda não sincronizado';
  try {
    const date = new Date(iso);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  } catch {
    return 'Sincronizado';
  }
}

export function AuthModal({
  open,
  onClose,
  student,
  syncStatus,
  pendingSyncCount,
  lastSyncedAt,
  onLogin,
  onRegister,
  onLogout,
  onSyncNow,
}: AuthModalProps) {
  const [tab, setTab] = useState<AuthTab>('login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetSpecialty, setTargetSpecialty] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [syncingManual, setSyncingManual] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setErrorMessage(null);
    document.body.dataset.medr1ModalOpen = 'true';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmitting(true);
    try {
      if (tab === 'login') {
        await onLogin({ email: email.trim(), password });
      } else {
        await onRegister({
          fullName: fullName.trim(),
          email: email.trim(),
          password,
          targetSpecialty: targetSpecialty.trim() || undefined,
        });
      }
      setPassword('');
      onClose();
    } catch (err) {
      if (err instanceof AuthApiError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Não foi possível conectar ao servidor. Tente novamente.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleManualSync = async () => {
    setSyncingManual(true);
    try {
      await onSyncNow();
    } finally {
      setSyncingManual(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={student ? 'Conta e sincronização' : 'Entrar ou criar conta'}
    >
      <div
        className="fixed inset-0 bg-black/35 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-black/5 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-[#131926]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-white">
              {student ? 'Sua conta MedR1' : 'Sincronize seu histórico'}
            </h2>
            <p className="text-xs text-[#86868B] mt-0.5">
              {student
                ? 'Seu progresso fica salvo na nuvem e acompanha você em qualquer dispositivo.'
                : 'Entre ou crie uma conta para salvar questões, simulados e flashcards na nuvem.'}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela de conta"
            className="rounded-lg p-1.5 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition cursor-pointer"
          >
            <X size={16} strokeWidth={1.5} />
          </button>
        </div>

        {student ? (
          /* Authenticated Account & Sync View */
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 rounded-xl border border-black/5 bg-[#F5F5F7] p-3.5 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#007AFF] text-sm font-semibold text-white">
                {student.avatarInitials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-[#1D1D1F] dark:text-white">
                  {student.fullName}
                </p>
                <p className="truncate text-xs text-[#86868B]">{student.email}</p>
                {student.targetSpecialty && (
                  <p className="truncate text-[11px] text-[#86868B] mt-0.5">
                    Alvo: {student.targetSpecialty}
                  </p>
                )}
              </div>
            </div>

            {/* Sync Status Card */}
            <div className="rounded-xl border border-black/5 bg-white p-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/10 dark:bg-white/[0.02] space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B]">
                  Status da nuvem
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-medium',
                    syncStatus === 'idle' &&
                      'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
                    syncStatus === 'syncing' &&
                      'bg-[#007AFF]/10 text-[#007AFF] dark:text-sky-300',
                    (syncStatus === 'offline' || syncStatus === 'local-fallback') &&
                      'bg-amber-500/10 text-amber-700 dark:text-amber-300'
                  )}
                >
                  {syncStatus === 'idle' && (
                    <>
                      <CheckCircle2 size={12} strokeWidth={1.75} />
                      Sincronizado
                    </>
                  )}
                  {syncStatus === 'syncing' && (
                    <>
                      <RefreshCw size={12} strokeWidth={1.75} className="animate-spin" />
                      Sincronizando
                    </>
                  )}
                  {syncStatus === 'offline' && (
                    <>
                      <CloudOff size={12} strokeWidth={1.75} />
                      Offline
                    </>
                  )}
                  {syncStatus === 'local-fallback' && (
                    <>
                      <Cloud size={12} strokeWidth={1.75} />
                      Somente local
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#86868B]">
                <span>Última sincronização</span>
                <span className="font-mono tabular-nums text-[#1D1D1F] dark:text-slate-200">
                  {formatSyncTime(lastSyncedAt)}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#86868B]">
                <span>Eventos na fila local</span>
                <span className="font-mono tabular-nums text-[#1D1D1F] dark:text-slate-200">
                  {pendingSyncCount}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={handleManualSync}
                disabled={syncingManual || syncStatus === 'syncing'}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#007AFF] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0066D6] disabled:opacity-60 transition cursor-pointer"
              >
                <RefreshCw
                  size={16}
                  strokeWidth={1.5}
                  className={cn(syncingManual && 'animate-spin')}
                />
                Sincronizar agora
              </button>

              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-black/10 px-3.5 py-2.5 text-sm font-medium text-[#1D1D1F] hover:bg-black/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10 transition cursor-pointer"
              >
                <LogOut size={16} strokeWidth={1.5} className="text-[#86868B]" />
                Sair
              </button>
            </div>
          </div>
        ) : (
          /* Login / Register Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Apple HIG Segmented Control */}
            <div
              role="tablist"
              aria-label="Modo de autenticação"
              className="grid grid-cols-2 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-white/[0.08]"
            >
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'login'}
                onClick={() => {
                  setTab('login');
                  setErrorMessage(null);
                }}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition cursor-pointer',
                  tab === 'login'
                    ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#1E293B] dark:text-white'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
                )}
              >
                <LogIn size={14} strokeWidth={1.5} />
                Entrar
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'register'}
                onClick={() => {
                  setTab('register');
                  setErrorMessage(null);
                }}
                className={cn(
                  'inline-flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition cursor-pointer',
                  tab === 'register'
                    ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-[#1E293B] dark:text-white'
                    : 'text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-white'
                )}
              >
                <UserPlus size={14} strokeWidth={1.5} />
                Criar conta
              </button>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl bg-[#FF3B30]/10 px-3.5 py-2.5 text-xs font-medium text-[#D70015] dark:text-rose-300"
              >
                <AlertCircle size={16} strokeWidth={1.5} className="shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {tab === 'register' && (
              <div>
                <label
                  htmlFor="medr1-auth-fullname"
                  className="block text-xs font-medium text-[#86868B] mb-1"
                >
                  Nome completo
                </label>
                <div className="relative">
                  <User
                    size={16}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#86868B]"
                  />
                  <input
                    id="medr1-auth-fullname"
                    type="text"
                    required
                    minLength={2}
                    maxLength={150}
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex.: Dra. Marina Silva"
                    className="w-full rounded-lg border border-[#D1D1D6] bg-white py-2 pl-9 pr-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/70 focus:border-[#007AFF] focus:outline-none focus:ring-3 focus:ring-[#007AFF]/20 transition dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="medr1-auth-email"
                className="block text-xs font-medium text-[#86868B] mb-1"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#86868B]"
                />
                <input
                  id="medr1-auth-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  className="w-full rounded-lg border border-[#D1D1D6] bg-white py-2 pl-9 pr-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/70 focus:border-[#007AFF] focus:outline-none focus:ring-3 focus:ring-[#007AFF]/20 transition dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="medr1-auth-password"
                className="block text-xs font-medium text-[#86868B] mb-1"
              >
                Senha
              </label>
              <div className="relative">
                <Lock
                  size={16}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#86868B]"
                />
                <input
                  id="medr1-auth-password"
                  type="password"
                  required
                  minLength={6}
                  maxLength={128}
                  autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo 6 caracteres"
                  className="w-full rounded-lg border border-[#D1D1D6] bg-white py-2 pl-9 pr-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/70 focus:border-[#007AFF] focus:outline-none focus:ring-3 focus:ring-[#007AFF]/20 transition dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                />
              </div>
            </div>

            {tab === 'register' && (
              <div>
                <label
                  htmlFor="medr1-auth-specialty"
                  className="block text-xs font-medium text-[#86868B] mb-1"
                >
                  Especialidade desejada (opcional)
                </label>
                <div className="relative">
                  <Stethoscope
                    size={16}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#86868B]"
                  />
                  <input
                    id="medr1-auth-specialty"
                    type="text"
                    maxLength={100}
                    value={targetSpecialty}
                    onChange={(e) => setTargetSpecialty(e.target.value)}
                    placeholder="Ex.: Clínica Médica, Cirurgia Geral..."
                    className="w-full rounded-lg border border-[#D1D1D6] bg-white py-2 pl-9 pr-3 text-sm text-[#1D1D1F] placeholder:text-[#86868B]/70 focus:border-[#007AFF] focus:outline-none focus:ring-3 focus:ring-[#007AFF]/20 transition dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#007AFF] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0066D6] disabled:opacity-60 transition cursor-pointer"
            >
              {submitting ? (
                <>
                  <RefreshCw size={16} strokeWidth={1.5} className="animate-spin" />
                  {tab === 'login' ? 'Entrando...' : 'Criando conta...'}
                </>
              ) : tab === 'login' ? (
                <>
                  <LogIn size={16} strokeWidth={1.5} />
                  Entrar
                </>
              ) : (
                <>
                  <UserPlus size={16} strokeWidth={1.5} />
                  Criar conta e sincronizar
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
