import React, { useEffect, useState } from 'react';
import {
  X,
  Trophy,
  Flame,
  Shield,
  Brain,
  Rocket,
  Target,
  Award,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  Zap,
} from 'lucide-react';
import type { GamificationCoreState } from '../../lib/gamificationEngine';
import type {
  GamificationAchievement,
  GamificationMission,
} from '../../lib/gamificationChallenges';
import { cn } from '../../lib/utils';

interface GamificationHubModalProps {
  open: boolean;
  onClose: () => void;
  core: GamificationCoreState;
  missions: GamificationMission[];
  achievements: GamificationAchievement[];
  onExecuteMission: (mission: GamificationMission) => void;
}

type HubTab = 'missoes' | 'habilidades' | 'conquistas';

const ACHIEVEMENT_ICONS: Record<
  GamificationAchievement['iconName'],
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  brain: Brain,
  rocket: Rocket,
  trophy: Trophy,
  flame: Flame,
  target: Target,
  shield: Shield,
  award: Award,
  stethoscope: Stethoscope,
};

export function GamificationHubModal({
  open,
  onClose,
  core,
  missions,
  achievements,
  onExecuteMission,
}: GamificationHubModalProps) {
  const [activeTab, setActiveTab] = useState<HubTab>('missoes');

  useEffect(() => {
    if (!open) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const dailyMissions = missions.filter((m) => m.scope === 'diaria');
  const weeklyMissions = missions.filter((m) => m.scope === 'semanal');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-3 sm:p-6 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Central de Gamificação e Jornada MedR1"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#F5F5F7] shadow-2xl dark:border-white/10 dark:bg-[#13161B]">
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/5 bg-white px-5 py-4 dark:border-white/[0.08] dark:bg-[#1B1F27]">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-400">
              <Trophy size={18} strokeWidth={1.5} />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                Jornada R1 · {core.rankLabel} (Nível {core.level})
              </h2>
              <p className="text-xs text-[#86868B] tabular-nums dark:text-slate-400">
                {core.totalXp.toLocaleString('pt-BR')} XP · Faltam {core.xpToNextLevel} XP para o Nível {core.level + 1}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Segmented Control (3 tabs, Apple HIG) */}
            <div className="inline-flex items-center gap-1 rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-slate-800">
              {(
                [
                  { id: 'missoes', label: 'Missões' },
                  { id: 'habilidades', label: 'Habilidades' },
                  { id: 'conquistas', label: `Conquistas (${unlockedCount}/${achievements.length})` },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'rounded-md px-3 py-1.5 text-xs font-medium transition cursor-pointer whitespace-nowrap tabular-nums',
                    activeTab === tab.id
                      ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-950 dark:text-white'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar central de jornada"
              className="rounded-lg p-2 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition cursor-pointer"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Summary Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-black/5 bg-white/70 px-5 py-3.5 dark:border-white/[0.06] dark:bg-[#161A22]">
          <div className="rounded-xl border border-black/5 bg-white p-3 dark:border-white/[0.07] dark:bg-[#1B1F27]">
            <p className="text-[11px] font-medium text-[#86868B] dark:text-slate-400">XP & Nível</p>
            <p className="mt-1 text-base font-semibold text-[#1D1D1F] tabular-nums dark:text-white">
              {core.totalXp.toLocaleString('pt-BR')} XP
            </p>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/10">
              <div
                className="h-full rounded-full bg-[#007AFF] dark:bg-sky-400"
                style={{ width: `${core.xpProgressPct}%` }}
              />
            </div>
          </div>

          <div className="rounded-xl border border-black/5 bg-white p-3 dark:border-white/[0.07] dark:bg-[#1B1F27]">
            <p className="text-[11px] font-medium text-[#86868B] dark:text-slate-400">Ofensiva</p>
            <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#1D1D1F] tabular-nums dark:text-white">
              <Flame size={16} strokeWidth={1.5} className="text-amber-500" />
              <span>{core.streakDays} dias</span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#86868B] dark:text-slate-400">
              Meta diária seguida
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-white p-3 dark:border-white/[0.07] dark:bg-[#1B1F27]">
            <p className="text-[11px] font-medium text-[#86868B] dark:text-slate-400">Escudos de Plantão</p>
            <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#1D1D1F] tabular-nums dark:text-white">
              <Shield size={16} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400" />
              <span>
                {core.streakShields} / {core.maxStreakShields}
              </span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#86868B] dark:text-slate-400">
              +1 escudo a cada 7 dias
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-white p-3 dark:border-white/[0.07] dark:bg-[#1B1F27]">
            <p className="text-[11px] font-medium text-[#86868B] dark:text-slate-400">Combo de Acertos</p>
            <p className="mt-1 flex items-center gap-1.5 text-base font-semibold text-[#1D1D1F] tabular-nums dark:text-white">
              <Zap size={16} strokeWidth={1.5} className="text-[#007AFF] dark:text-sky-400" />
              <span>{core.currentCorrectCombo} seguidos</span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#86868B] dark:text-slate-400">
              Sequência atual ativa
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {activeTab === 'missoes' && (
            <>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-3 dark:text-slate-400">
                  Missões Diárias · Objetivo & Aprendizado
                </h3>
                <div className="space-y-2.5">
                  {dailyMissions.map((m) => (
                    <div
                      key={m.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.07] dark:bg-[#1B1F27]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {m.completed && (
                            <CheckCircle2
                              size={16}
                              strokeWidth={1.5}
                              className="text-emerald-600 dark:text-emerald-400 shrink-0"
                            />
                          )}
                          <p className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                            {m.title}
                          </p>
                          <span className="rounded-md bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF] tabular-nums dark:bg-sky-500/15 dark:text-sky-300">
                            +{m.rewardXp} XP
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#86868B] dark:text-slate-400">
                          {m.description}
                        </p>
                        <div className="mt-2.5 flex items-center gap-2.5 max-w-sm">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/10">
                            <div
                              className={cn(
                                'h-full rounded-full transition-all',
                                m.completed ? 'bg-emerald-500' : 'bg-[#007AFF]'
                              )}
                              style={{ width: `${m.pct}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-[#1D1D1F] tabular-nums dark:text-slate-300">
                            {m.current}/{m.target}
                          </span>
                        </div>
                      </div>

                      {!m.completed && (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onExecuteMission(m);
                          }}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#007AFF] px-3.5 py-2 text-xs font-medium text-white hover:bg-[#0066D6] transition cursor-pointer shrink-0"
                        >
                          <span>Iniciar</span>
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868B] mb-3 dark:text-slate-400">
                  Desafios Semanais
                </h3>
                <div className="space-y-2.5">
                  {weeklyMissions.map((m) => (
                    <div
                      key={m.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.07] dark:bg-[#1B1F27]"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          {m.completed && (
                            <CheckCircle2
                              size={16}
                              strokeWidth={1.5}
                              className="text-emerald-600 dark:text-emerald-400 shrink-0"
                            />
                          )}
                          <p className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                            {m.title}
                          </p>
                          <span className="rounded-md bg-[#007AFF]/10 px-2 py-0.5 text-[11px] font-medium text-[#007AFF] tabular-nums dark:bg-sky-500/15 dark:text-sky-300">
                            +{m.rewardXp} XP
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-[#86868B] dark:text-slate-400">
                          {m.description}
                        </p>
                        <div className="mt-2.5 flex items-center gap-2.5 max-w-sm">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/10">
                            <div
                              className={cn(
                                'h-full rounded-full transition-all',
                                m.completed ? 'bg-emerald-500' : 'bg-[#007AFF]'
                              )}
                              style={{ width: `${m.pct}%` }}
                            />
                          </div>
                          <span className="text-xs font-medium text-[#1D1D1F] tabular-nums dark:text-slate-300">
                            {m.current}/{m.target}
                          </span>
                        </div>
                      </div>

                      {!m.completed && (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onExecuteMission(m);
                          }}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-black/10 bg-white px-3.5 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition cursor-pointer shrink-0"
                        >
                          <span>Ir agora</span>
                          <ArrowRight size={14} strokeWidth={1.5} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'habilidades' && (
            <div className="space-y-3">
              <p className="text-xs text-[#86868B] dark:text-slate-400">
                A maestria por Grande Área combina volume real de questões e taxa de acerto — garantindo progressão por domínio clínico verdadeiro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {core.areaMastery.map((area) => (
                  <div
                    key={area.grandeAreaId}
                    className="rounded-xl border border-black/5 bg-white p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-white/[0.07] dark:bg-[#1B1F27]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-[#1D1D1F] dark:text-white">
                          {area.label}
                        </p>
                        <p className="mt-0.5 text-xs text-[#86868B] tabular-nums dark:text-slate-400">
                          {area.answered} questões · {area.accuracyPct.toFixed(1)}% de acerto
                        </p>
                      </div>
                      <span className="rounded-lg bg-[#007AFF]/10 px-2.5 py-1 text-xs font-semibold text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300">
                        {area.tierLabel}
                      </span>
                    </div>

                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#007AFF] dark:bg-sky-400 transition-all"
                        style={{ width: `${area.progressToNextPct}%` }}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-[#86868B] tabular-nums dark:text-slate-400">
                      Próximo marco: {area.nextRequirementLabel}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'conquistas' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {achievements.map((badge) => {
                const Icon = ACHIEVEMENT_ICONS[badge.iconName];
                return (
                  <div
                    key={badge.id}
                    className={cn(
                      'rounded-xl border p-4 transition',
                      badge.unlocked
                        ? 'border-[#007AFF]/20 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:border-sky-400/25 dark:bg-[#1B1F27]'
                        : 'border-black/5 bg-white/60 opacity-75 dark:border-white/[0.06] dark:bg-[#181C24]'
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className={cn(
                          'flex h-9 w-9 items-center justify-center rounded-xl',
                          badge.unlocked
                            ? 'bg-[#007AFF]/10 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-400'
                            : 'bg-[#F5F5F7] text-[#86868B] dark:bg-white/[0.06] dark:text-slate-500'
                        )}
                      >
                        <Icon size={18} strokeWidth={1.5} />
                      </span>
                      <span
                        className={cn(
                          'text-[11px] font-medium tabular-nums',
                          badge.unlocked
                            ? 'text-[#007AFF] dark:text-sky-400'
                            : 'text-[#86868B] dark:text-slate-400'
                        )}
                      >
                        {badge.unlocked ? 'Desbloqueada' : badge.progressLabel}
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-[#1D1D1F] dark:text-white">
                      {badge.title}
                    </p>
                    <p className="mt-1 text-xs text-[#86868B] dark:text-slate-400 leading-snug">
                      {badge.description}
                    </p>

                    {!badge.unlocked && (
                      <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[#E5E5EA] dark:bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#86868B]/60 dark:bg-slate-500"
                          style={{ width: `${badge.progressPct}%` }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
