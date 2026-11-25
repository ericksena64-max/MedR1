import React, { useEffect } from 'react';
import { Trophy, X, ArrowRight } from 'lucide-react';
import type { GamificationAchievement } from '../../lib/gamificationChallenges';

interface AchievementToastProps {
  achievement: GamificationAchievement | null;
  suppressed?: boolean;
  onDismiss: () => void;
  onOpenHub: () => void;
}

export function AchievementToast({
  achievement,
  suppressed = false,
  onDismiss,
  onOpenHub,
}: AchievementToastProps) {
  useEffect(() => {
    if (!achievement || suppressed) return;
    const timer = window.setTimeout(() => {
      onDismiss();
    }, 4500);
    return () => window.clearTimeout(timer);
  }, [achievement, suppressed, onDismiss]);

  if (!achievement || suppressed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 w-full max-w-sm rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#1C1C1E]"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-400">
          <Trophy size={18} strokeWidth={1.5} aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#007AFF] dark:text-sky-400">
            Conquista desbloqueada
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#1D1D1F] dark:text-white truncate">
            {achievement.title}
          </p>
          <p className="mt-0.5 text-xs text-[#86868B] dark:text-slate-400 leading-snug">
            {achievement.description}
          </p>

          <button
            type="button"
            onClick={() => {
              onDismiss();
              onOpenHub();
            }}
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#007AFF] hover:text-[#0066D6] dark:text-sky-400 cursor-pointer"
          >
            <span>Ver jornada</span>
            <ArrowRight size={13} strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dispensar notificação de conquista"
          className="rounded-lg p-1 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition cursor-pointer"
        >
          <X size={15} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
