import React, { useState } from 'react';
import {
  ShieldCheck,
  Shuffle,
  Check,
  Flame,
  Users,
  Info,
} from 'lucide-react';
import type { RankingPeriod, UserProfile } from '../../types/medical';
import type { PeriodRankedEntry } from '../../lib/rankingPeriods';
import type { RankedEntry } from './LiveRankingWidget';
import { Switch } from '../ui/Switch';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

type PeriodBucket = {
  all: PeriodRankedEntry[];
  currentUser: PeriodRankedEntry | null;
};

interface LiveRankingPageProps {
  allEntries: RankedEntry[];
  currentUser: RankedEntry;
  byPeriod?: Record<RankingPeriod, PeriodBucket>;
  onlineTotal: number;
  profile: UserProfile;
  onUpdateProfile: (patch: Partial<UserProfile>) => void;
  onGeneratePseudonym: () => void;
  rankingPulseOn?: boolean;
  onToggleRankingPulse?: (next?: boolean) => void;
}

const PERIOD_OPTIONS: Array<{ id: RankingPeriod; label: string; subtitle: string; colLabel: string }> = [
  {
    id: 'daily',
    label: 'Diário Ao Vivo',
    subtitle: 'Mais questões respondidas hoje em ordem decrescente (mín. 1 questão, certa ou errada)',
    colLabel: 'Questões Hoje',
  },
  {
    id: 'weekly',
    label: 'Semanal',
    subtitle: 'Número de questões na semana e taxa de acertos (mín. 1 questão, certa ou errada)',
    colLabel: 'Questões (7d)',
  },
  {
    id: 'monthly',
    label: 'Mensal',
    subtitle: 'Todas as questões feitas no mês em ordem decrescente, independentemente da taxa de acerto',
    colLabel: 'Questões no Mês',
  },
];

export function LiveRankingPage({
  allEntries,
  currentUser,
  byPeriod,
  onlineTotal,
  profile,
  onUpdateProfile,
  onGeneratePseudonym,
  rankingPulseOn = true,
  onToggleRankingPulse,
}: LiveRankingPageProps) {
  const [period, setPeriod] = useState<RankingPeriod>('daily');
  const [realNameInput, setRealNameInput] = useState(profile.realName);
  const [pseudonymInput, setPseudonymInput] = useState(profile.pseudonym);
  const [targetInstInput, setTargetInstInput] = useState(profile.targetInstitution);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveIdentity = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanReal = realNameInput.trim() || profile.realName;
    const cleanPseudo =
      pseudonymInput.trim().replace(/\s+/g, '_').slice(0, 24) || profile.pseudonym;
    const parts = cleanReal.replace(/^Dra?\.\s*/i, '').split(' ').filter(Boolean);
    const initials =
      parts.length >= 2
        ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
        : cleanReal.slice(0, 2).toUpperCase();

    onUpdateProfile({
      realName: cleanReal,
      pseudonym: cleanPseudo,
      targetInstitution: targetInstInput.trim() || profile.targetInstitution,
      avatarInitials: initials,
    });
    setPseudonymInput(cleanPseudo);
    setSavedNotice(true);
    window.setTimeout(() => setSavedNotice(false), 2200);
  };

  const handleRandomCode = () => {
    onGeneratePseudonym();
  };

  // Sync input when random generator updates profile.pseudonym
  React.useEffect(() => {
    setPseudonymInput(profile.pseudonym);
  }, [profile.pseudonym]);

  const activePeriodMeta =
    PERIOD_OPTIONS.find((opt) => opt.id === period) ?? PERIOD_OPTIONS[0];

  const activeEntries: Array<PeriodRankedEntry | (RankedEntry & { questionsInPeriod?: number })> =
    byPeriod ? byPeriod[period].all : allEntries;
  const currentUserInPeriod = byPeriod ? byPeriod[period].currentUser : currentUser;

  const top10 = activeEntries.slice(0, 10);
  const rest = activeEntries.slice(10);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
      {/* Left 8 cols: Full Live Leaderboard */}
      <section className="xl:col-span-8 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                {rankingPulseOn && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={cn(
                    'relative inline-flex h-2.5 w-2.5 rounded-full transition-colors',
                    rankingPulseOn
                      ? 'bg-emerald-500'
                      : 'bg-slate-400 dark:bg-slate-600'
                  )}
                />
              </span>
              <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Ranking — {activePeriodMeta.label}
              </h2>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {activePeriodMeta.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div
              role="tablist"
              aria-label="Período do ranking"
              className="inline-flex rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-slate-800"
            >
              {PERIOD_OPTIONS.map((opt) => {
                const selected = period === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setPeriod(opt.id)}
                    className={cn(
                      'rounded-md px-2.5 py-1 text-xs font-medium transition-all',
                      selected
                        ? 'bg-white text-[#1D1D1F] shadow-sm dark:bg-slate-700 dark:text-white'
                        : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 tabular-nums">
              <Users className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span>{onlineTotal} estudantes ativos</span>
            </div>

            {onToggleRankingPulse && (
              <div
                role="group"
                aria-label="Indicador piscante do Ranking Ao Vivo"
                className="inline-flex rounded-md bg-slate-100 p-0.5 dark:bg-slate-800"
              >
                <button
                  type="button"
                  onClick={() => onToggleRankingPulse(true)}
                  aria-pressed={rankingPulseOn}
                  className={cn(
                    'rounded px-2 py-0.5 font-mono text-[10px] font-bold transition-colors cursor-pointer',
                    rankingPulseOn
                      ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                  )}
                >
                  ON
                </button>
                <button
                  type="button"
                  onClick={() => onToggleRankingPulse(false)}
                  aria-pressed={!rankingPulseOn}
                  className={cn(
                    'rounded px-2 py-0.5 font-mono text-[10px] font-bold transition-colors cursor-pointer',
                    !rankingPulseOn
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
                  )}
                >
                  OFF
                </button>
              </div>
            )}
          </div>
        </div>

        {currentUserInPeriod === null && (
          <div className="border-b border-amber-200/80 bg-amber-50/70 px-5 py-3 text-xs text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-200">
            Você ainda não respondeu nenhuma questão neste período. Responda pelo menos{' '}
            <strong>1 questão</strong> (certa ou errada) para aparecer no ranking.
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
              <tr>
                <th className="px-5 py-3 w-14">#</th>
                <th className="px-4 py-3">Estudante</th>
                <th className="px-4 py-3 hidden sm:table-cell">Foco / Alvo</th>
                <th className="px-4 py-3 text-right">{activePeriodMeta.colLabel}</th>
                {period !== 'monthly' && (
                  <th className="px-4 py-3 text-right">Acerto (%)</th>
                )}
                <th className="px-5 py-3 text-right">
                  {period === 'monthly' ? 'Volume' : 'Pontuação'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {top10.map((entry) => (
                <tr
                  key={entry.id}
                  className={cn(
                    'transition-colors',
                    entry.isCurrentUser
                      ? 'bg-sky-50/80 dark:bg-sky-950/40'
                      : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'
                  )}
                >
                  <td className="px-5 py-3 font-mono font-bold tabular-nums text-slate-600 dark:text-slate-300">
                    {entry.rank}º
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold',
                          entry.isCurrentUser
                            ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
                            : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                        )}
                      >
                        {entry.usePseudonym
                          ? entry.pseudonym.slice(0, 2).toUpperCase()
                          : entry.avatarInitials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                          {entry.displayName}
                          {entry.isCurrentUser && (
                            <span className="ml-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">
                              (você)
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {entry.usePseudonym ? 'Modo Pseudônimo' : 'Nome Real'} · Online agora
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    <p className="text-xs font-medium text-slate-800 dark:text-slate-200">
                      {entry.targetInstitution}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {entry.currentArea}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300">
                    {entry.questionsInPeriod ?? entry.questionsToday}
                  </td>
                  {period !== 'monthly' && (
                    <td className="px-4 py-3 text-right font-mono tabular-nums font-medium text-emerald-700 dark:text-emerald-400">
                      {entry.accuracyPct.toFixed(1)}%
                    </td>
                  )}
                  <td className="px-5 py-3 text-right">
                    <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-white">
                      {period === 'monthly'
                        ? entry.questionsInPeriod ?? entry.questionsToday
                        : entry.weightedScore}
                    </span>
                    <span className="ml-1 text-xs text-slate-400">
                      {period === 'monthly' ? 'q' : 'pts'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Remaining online peers beyond Top 10 (with dashed separator and highlighted user row) */}
        {rest.length > 0 && (
          <div className="border-t-2 border-dashed border-slate-200 dark:border-slate-700">
            <div className="px-5 py-2 bg-slate-50/80 text-xs font-medium text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">
              Posições seguintes (11º+) — Sua posição aparece sempre destacada
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {rest.map((entry) => (
                    <tr
                      key={entry.id}
                      className={cn(
                        'transition-colors',
                        entry.isCurrentUser
                          ? 'bg-sky-50/90 dark:bg-sky-950/45'
                          : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'
                      )}
                    >
                      <td className="px-5 py-3 w-14 font-mono font-bold tabular-nums text-sky-700 dark:text-sky-300">
                        {entry.rank}º
                      </td>
                      <td className="px-4 py-3">
                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                          {entry.displayName}
                          {entry.isCurrentUser && (
                            <span className="ml-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">
                              (você)
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {entry.targetInstitution} · {entry.currentArea}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-right font-mono tabular-nums text-slate-700 dark:text-slate-300">
                        {entry.questionsInPeriod ?? entry.questionsToday}q
                      </td>
                      {period !== 'monthly' && (
                        <td className="px-4 py-3 text-right font-mono tabular-nums text-emerald-700 dark:text-emerald-400">
                          {entry.accuracyPct.toFixed(1)}%
                        </td>
                      )}
                      <td className="px-5 py-3 text-right font-mono font-bold tabular-nums text-slate-900 dark:text-white">
                        {period === 'monthly'
                          ? entry.questionsInPeriod ?? entry.questionsToday
                          : entry.weightedScore}{' '}
                        <span className="text-xs font-normal text-slate-400">
                          {period === 'monthly' ? 'q' : 'pts'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* Right 4 cols: Privacy, Pseudonym & Score Formula Panel */}
      <div className="xl:col-span-4 space-y-5">
        <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
                Privacidade e Identidade
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Controle como outros residentes veem você no ranking
              </p>
            </div>
            <ShieldCheck className="h-5 w-5 text-sky-600 dark:text-sky-400 shrink-0" />
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-3.5 dark:border-slate-800 dark:bg-slate-950/60 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Modo Pseudônimo / Anônimo
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Oculta seu nome real no ranking ao vivo
              </p>
            </div>
            <Switch
              id="ranking-page-pseudonym"
              checked={profile.usePseudonym}
              onCheckedChange={(checked) =>
                onUpdateProfile({ usePseudonym: checked })
              }
            />
          </div>

          <form onSubmit={handleSaveIdentity} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="input-realname"
                className="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Nome Real
              </label>
              <input
                id="input-realname"
                type="text"
                value={realNameInput}
                onChange={(e) => setRealNameInput(e.target.value)}
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="input-pseudonym"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Pseudônimo / Codinome
                </label>
                <button
                  type="button"
                  onClick={handleRandomCode}
                  className="inline-flex items-center gap-1 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 cursor-pointer"
                >
                  <Shuffle className="h-3 w-3" />
                  <span>Gerar aleatório</span>
                </button>
              </div>
              <input
                id="input-pseudonym"
                type="text"
                value={pseudonymInput}
                maxLength={24}
                onChange={(e) => setPseudonymInput(e.target.value)}
                placeholder="Ex: FutureR1_Cardio"
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 font-mono text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="input-inst"
                className="text-xs font-medium text-slate-600 dark:text-slate-400"
              >
                Instituição-Alvo Principal
              </label>
              <input
                id="input-inst"
                type="text"
                value={targetInstInput}
                onChange={(e) => setTargetInstInput(e.target.value)}
                placeholder="Ex: USP-SP, ENARE, UNICAMP"
                className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              {savedNotice ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Identidade atualizada</span>
                </>
              ) : (
                <span>Salvar preferências</span>
              )}
            </Button>
          </form>
        </section>

        {/* Current user live session status & scoring rule */}
        <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">
              Sua Sessão Hoje
            </h4>
            <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-amber-600 dark:text-amber-400 tabular-nums">
              <Flame className="h-3.5 w-3.5" />
              <span>Sequência: {currentUser.streak}</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1 text-center">
            <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-950">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Posição</p>
              <p className="font-mono text-lg font-bold tabular-nums text-sky-600 dark:text-sky-400">
                {currentUser.rank}º
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-950">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Feitas</p>
              <p className="font-mono text-lg font-bold tabular-nums text-slate-900 dark:text-white">
                {currentUser.questionsToday}
              </p>
            </div>
            <div className="rounded-lg bg-slate-50 p-2.5 dark:bg-slate-950">
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Pontos</p>
              <p className="font-mono text-lg font-bold tabular-nums text-slate-900 dark:text-white">
                {currentUser.weightedScore}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <Info className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />
            <p>
              Fórmula ponderada anti-chute: cada questão vale 10 pts ponderados pelo seu percentual de acerto do dia (fator 0,4 a 1,0) + bônus progressivo de sequência sem erros.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
