import React, { useState } from 'react';
import {
  Shield,
  ShieldOff,
  Shuffle,
  ArrowUpRight,
  Check,
  Edit3,
} from 'lucide-react';
import type { UserProfile } from '../../types/medical';
import { cn } from '../../lib/utils';

export interface RankedEntry {
  id: string;
  rank: number;
  displayName: string;
  realName: string;
  pseudonym: string;
  usePseudonym: boolean;
  targetInstitution: string;
  avatarInitials: string;
  questionsToday: number;
  correctToday: number;
  accuracyPct: number;
  weightedScore: number;
  streak: number;
  currentArea: string;
  isOnline: boolean;
  isCurrentUser?: boolean;
  lastActiveSecondsAgo: number;
}

interface LiveRankingWidgetProps {
  top10: RankedEntry[];
  currentUser: RankedEntry;
  onlineTotal: number;
  profile: UserProfile;
  onUpdateProfile: (patch: Partial<UserProfile>) => void;
  onGeneratePseudonym: () => void;
  onOpenFullRanking: () => void;
}

export function LiveRankingWidget({
  top10,
  currentUser,
  onlineTotal,
  profile,
  onUpdateProfile,
  onGeneratePseudonym,
  onOpenFullRanking,
}: LiveRankingWidgetProps) {
  const [editingNick, setEditingNick] = useState(false);
  const [draftNick, setDraftNick] = useState(profile.pseudonym);

  const isUserInTop10 = currentUser.rank <= 10;

  const saveNick = () => {
    const clean = draftNick.trim().replace(/\s+/g, '_').slice(0, 22);
    if (clean.length >= 3) {
      onUpdateProfile({ pseudonym: clean, usePseudonym: true });
    }
    setEditingNick(false);
  };

  return (
    <aside
      aria-label="Ranking ao vivo de estudantes online"
      className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3.5 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <h2 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Ranking Ao Vivo
            </h2>
          </div>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 tabular-nums">
            {onlineTotal} médicos estudando agora
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenFullRanking}
          className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 cursor-pointer whitespace-nowrap"
        >
          <span>Expandir</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Quick Privacy / Pseudonym Control Bar */}
      <div className="border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/50 space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() =>
              onUpdateProfile({ usePseudonym: !profile.usePseudonym })
            }
            className={cn(
              'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
              profile.usePseudonym
                ? 'border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300'
                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
            )}
          >
            {profile.usePseudonym ? (
              <>
                <Shield className="h-3.5 w-3.5" />
                <span>Pseudônimo ativo</span>
              </>
            ) : (
              <>
                <ShieldOff className="h-3.5 w-3.5" />
                <span>Usar Pseudônimo</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => {
                setDraftNick(profile.pseudonym);
                setEditingNick((e) => !e);
              }}
              title="Editar apelido personalizado"
              aria-label="Editar apelido personalizado"
              className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer"
            >
              <Edit3 className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={onGeneratePseudonym}
              title="Gerar codinome médico aleatório"
              aria-label="Gerar codinome médico aleatório"
              className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 cursor-pointer"
            >
              <Shuffle className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {editingNick ? (
          <div className="flex items-center gap-1.5">
            <input
              type="text"
              value={draftNick}
              onChange={(e) => setDraftNick(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && saveNick()}
              placeholder="Ex: FutureR1_Cardio"
              maxLength={22}
              className="h-8 flex-1 min-w-0 rounded-md border border-slate-300 bg-white px-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="button"
              onClick={saveNick}
              className="inline-flex h-8 items-center justify-center rounded-md bg-sky-600 px-2.5 text-white hover:bg-sky-700 cursor-pointer"
              aria-label="Salvar pseudônimo"
            >
              <Check className="h-3.5 w-3.5" />
            </button>
          </div>
        ) : (
          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
            Exibido como:{' '}
            <strong className="text-slate-800 dark:text-slate-200">
              {profile.usePseudonym ? profile.pseudonym : profile.realName}
            </strong>
          </p>
        )}
      </div>

      {/* Top 10 List */}
      <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
        {top10.map((entry) => (
          <div
            key={entry.id}
            className={cn(
              'flex items-center justify-between gap-2.5 px-4 py-2.5 text-xs transition-colors',
              entry.isCurrentUser
                ? 'bg-sky-50/80 dark:bg-sky-950/40'
                : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'
            )}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={cn(
                  'w-5 text-center font-mono font-bold tabular-nums shrink-0',
                  entry.rank === 1 && 'text-amber-600 dark:text-amber-400',
                  entry.rank === 2 && 'text-slate-500 dark:text-slate-300',
                  entry.rank === 3 && 'text-amber-800 dark:text-amber-500',
                  entry.rank > 3 && 'text-slate-400 dark:text-slate-500'
                )}
              >
                {entry.rank}
              </span>

              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900 dark:text-slate-100">
                  {entry.displayName}
                  {entry.isCurrentUser && (
                    <span className="ml-1 font-normal text-sky-600 dark:text-sky-400">
                      (você)
                    </span>
                  )}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 tabular-nums truncate">
                  {entry.questionsToday}q · {entry.accuracyPct.toFixed(0)}% acerto
                </p>
              </div>
            </div>

            <span className="font-mono text-xs font-bold tabular-nums text-slate-900 dark:text-slate-100 shrink-0">
              {entry.weightedScore}
              <span className="ml-0.5 text-[10px] font-normal text-slate-400">pts</span>
            </span>
          </div>
        ))}
      </div>

      {/* Pinned Current User Row when outside Top 10 */}
      {!isUserInTop10 && (
        <div className="border-t-2 border-dashed border-slate-200 bg-sky-50/80 px-4 py-3 dark:border-slate-700 dark:bg-sky-950/40">
          <div className="flex items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-6 text-center font-mono font-bold tabular-nums text-sky-700 dark:text-sky-300 shrink-0">
                #{currentUser.rank}
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900 dark:text-white">
                  {currentUser.displayName}{' '}
                  <span className="font-normal text-sky-600 dark:text-sky-400">
                    (você)
                  </span>
                </p>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 tabular-nums">
                  {currentUser.questionsToday}q · {currentUser.accuracyPct.toFixed(0)}% acerto
                </p>
              </div>
            </div>

            <span className="font-mono text-xs font-bold tabular-nums text-sky-800 dark:text-sky-300 shrink-0">
              {currentUser.weightedScore}
              <span className="ml-0.5 text-[10px] font-normal">pts</span>
            </span>
          </div>
        </div>
      )}
    </aside>
  );
}
