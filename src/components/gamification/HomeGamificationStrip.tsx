import React from 'react';
import {
  Trophy,
  Flame,
  Shield,
  CheckCircle2,
  ArrowRight,
  Target,
  Brain,
  Gamepad2,
} from 'lucide-react';
import type { GamificationCoreState } from '../../lib/gamificationEngine';
import type { GamificationMission } from '../../lib/gamificationChallenges';
import { cn } from '../../lib/utils';

interface HomeGamificationStripProps {
  core: GamificationCoreState;
  missions: GamificationMission[];
  unlockedCount: number;
  totalAchievements: number;
  onExecuteMission: (mission: GamificationMission) => void;
  onOpenHub: () => void;
}

export function HomeGamificationStrip({
  core,
  missions,
  unlockedCount,
  totalAchievements,
  onExecuteMission,
  onOpenHub,
}: HomeGamificationStripProps) {
  const dailyMissions = missions.filter((m) => m.scope === 'diaria');

  const getPillarIcon = (pillar: GamificationMission['pillar']) => {
    if (pillar === 'aprendizado') return Brain;
    if (pillar === 'desafio') return Gamepad2;
    return Target;
  };

  return (
    <section
      aria-label="Jornada e missões diárias de estudo"
      className="rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.08] dark:bg-[#131926] space-y-4"
    >
      {/* Top Row: Rank, Level XP Bar, Streak/Shields & Hub Trigger */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 pb-4 dark:border-white/[0.07]">
        <div className="flex items-center gap-3.5 min-w-0">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-400">
            <Trophy size={20} strokeWidth={1.5} aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                {core.rankLabel}
              </h2>
              <span className="rounded-md bg-[#F5F5F7] px-2 py-0.5 text-[11px] font-medium text-[#1D1D1F] tabular-nums dark:bg-white/[0.08] dark:text-slate-200">
                Nível {core.level}
              </span>
              <span className="text-xs text-[#86868B] tabular-nums dark:text-slate-400">
                {core.totalXp.toLocaleString('pt-BR')} XP total
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2.5 max-w-md">
              <div
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/[0.08]"
                role="progressbar"
                aria-label="Progresso para o próximo nível"
                aria-valuenow={core.xpProgressPct}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-[#007AFF] transition-all duration-500 dark:bg-sky-400"
                  style={{ width: `${core.xpProgressPct}%` }}
                />
              </div>
              <span className="text-[11px] text-[#86868B] tabular-nums whitespace-nowrap dark:text-slate-400">
                Faltam {core.xpToNextLevel} XP
              </span>
            </div>
          </div>
        </div>

        {/* Right: Streak, Shields & Open Hub CTA */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span
            title="Dias seguidos batendo a meta diária"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5F5F7] px-2.5 py-1.5 text-xs font-medium text-[#1D1D1F] tabular-nums dark:bg-white/[0.06] dark:text-slate-200"
          >
            <Flame size={15} strokeWidth={1.5} className="text-amber-500" />
            <span>{core.streakDays}d ofensiva</span>
          </span>

          <span
            title="Escudos de plantão: protegem sua ofensiva (1 escudo a cada 7 dias, máx. 2)"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F5F5F7] px-2.5 py-1.5 text-xs font-medium text-[#1D1D1F] tabular-nums dark:bg-white/[0.06] dark:text-slate-200"
          >
            <Shield size={15} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400" />
            <span>
              {core.streakShields}/{core.maxStreakShields}
            </span>
          </span>

          <button
            type="button"
            onClick={onOpenHub}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#007AFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition cursor-pointer tabular-nums"
          >
            <span>
              Ver Jornada ({unlockedCount}/{totalAchievements})
            </span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Bottom Row: 3 Actionable Daily Missions */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-2.5 dark:text-slate-400">
          Missões de Hoje
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {dailyMissions.map((mission) => {
            const Icon = getPillarIcon(mission.pillar);
            return (
              <button
                key={mission.id}
                type="button"
                onClick={() => onExecuteMission(mission)}
                className={cn(
                  'group flex flex-col justify-between rounded-xl border p-3.5 text-left transition cursor-pointer',
                  mission.completed
                    ? 'border-emerald-200/80 bg-emerald-50/40 dark:border-emerald-500/25 dark:bg-emerald-500/10'
                    : 'border-black/5 bg-[#F5F5F7]/70 hover:bg-[#F5F5F7] dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:bg-white/[0.06]'
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {mission.completed ? (
                      <CheckCircle2
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                    ) : (
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#86868B] group-hover:text-[#007AFF] transition-colors"
                      />
                    )}
                    <span className="text-xs font-semibold text-[#1D1D1F] dark:text-white truncate">
                      {mission.title}
                    </span>
                  </div>
                  <span className="shrink-0 rounded-md bg-white px-1.5 py-0.5 text-[10px] font-semibold text-[#007AFF] tabular-nums border border-black/5 dark:bg-white/10 dark:text-sky-300 dark:border-white/10">
                    +{mission.rewardXp} XP
                  </span>
                </div>

                <p className="mt-1.5 text-[11px] text-[#86868B] dark:text-slate-400 line-clamp-2">
                  {mission.description}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        mission.completed
                          ? 'bg-emerald-500 dark:bg-emerald-400'
                          : 'bg-[#007AFF] dark:bg-sky-400'
                      )}
                      style={{ width: `${mission.pct}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-medium text-[#1D1D1F] tabular-nums dark:text-slate-300">
                    {mission.current}/{mission.target}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
