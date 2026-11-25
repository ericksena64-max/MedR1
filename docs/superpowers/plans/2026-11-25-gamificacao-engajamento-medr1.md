# Gamificação & Engajamento Clínico MedR1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar um sistema completo de gamificação para engajamento do estudante de residência médica no MedR1, estruturado nos 6 pilares da referência visual (Aprendizado, Conquista, Objetivo, Habilidade, Desafio e Recompensa), 100% derivado de métricas reais de estudo e aderente à estética minimalista Apple HIG.

**Architecture:** Dois módulos puros e testáveis em `src/lib/` (`gamificationEngine.ts` e `gamificationChallenges.ts`) calculam XP, níveis médicos, maestria por Grande Área, ofensiva com escudo de plantão, missões dinâmicas e conquistas diretamente a partir dos registros reais do `useMedR1Store` (`answers`, `fsrsReviewLogs`, `simuladoHistory`, `dailyGoal`, `areaRows`). A UI expõe uma pílula discreta na `TopBar`, um card acionável de missões na `HomeUnifiedView`, um toast sutil de conquista desbloqueada e um modal central (`GamificationHubModal`) com Segmented Control de 3 abas para inspecionar desafios, habilidades e conquistas sem poluir a carga cognitiva durante a resolução de questões.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Referência visual fornecida pelo usuário (`gamificacao_ref.png` — 6 pilares: Aprendizado, Conquista, Objetivo, Habilidade, Desafio, Recompensa) combinada às diretrizes Apple HIG do MedR1.

## Global Constraints

- **Estética Apple HIG / Baixa Carga Cognitiva Médica:** Fundo global `bg-[#F5F5F7]`, cartões `bg-white border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-2xl`, botão primário `bg-[#007AFF] text-white hover:bg-[#0066D6] rounded-lg`, textos `text-[#1D1D1F]` e `text-[#86868B]`, Segmented Controls em `bg-[#E5E5EA]/70 p-1 rounded-lg` (4 opções ou menos).
- **Tipografia & Ícones:** Todos os números (XP, nível, ofensiva, porcentagens, progresso de missões) DEVEM usar `tabular-nums`. Ícones exclusivamente de `lucide-react` com `strokeWidth={1.5}` (`size={16}` em botões, `size={18}` em navegação).
- **Sem poluição durante provas/estudo:** Nenhum toast ou animação bloqueante aparece durante um simulado ativo (`simuladoActive === true`); notificações de conquista ficam enfileiradas ou silenciadas até sair do simulado.
- **100% Dados Reais (Zero contaminação por seed):** XP, maestria, missões e conquistas são calculados exclusivamente sobre respostas, revisões FSRS e simulados reais do usuário (nunca a partir de `analyticsSeed.ts`).
- **Zero novas dependências externas:** Implementar usando apenas pacotes já instalados no `package.json`.

## Review Focus

1. **Conta zerada (0 respostas, 0 flashcards revisados, 0 simulados):** Deve retornar `totalXp = 0`, `level = 1` (`Interno I`), `xpProgressPct = 0`, 5 áreas em nível `Iniciante`, 0 conquistas desbloqueadas e 3 missões diárias válidas sem `NaN` nem divisão por zero (coberto na Task 1 e Task 2).
2. **Grinding sem qualidade (muitas questões erradas na mesma área):** O sistema de maestria por área não pode promover o aluno para `Especialista`/`Referência` apenas por volume — exige acurácia mínima combinada ao volume (coberto na Task 1).
3. **Re-resposta da mesma questão ou revisão repetida:** Como `answers` é indexado por `questionId`, alterar ou re-renderizar o store não pode duplicar XP nem disparar o mesmo toast de conquista duas vezes após reload (coberto na Task 1 e Task 3).
4. **Quebra de ofensiva por 1 dia de plantão (Streak Freeze):** O cálculo de escudos disponíveis deve respeitar teto máximo (`max 2`) e nunca ficar negativo mesmo com histórico vazio ou datas fora de ordem (coberto na Task 1).
5. **Silenciamento durante Simulado ativo:** Conquistas desbloqueadas durante um simulado cronometrado não podem exibir toast distrativo enquanto `simuladoActive` for `true` (coberto na Task 4).

---

## File Structure

- **Create:** `src/lib/gamificationEngine.ts` — Tipos de gamificação, curva de XP/níveis médicos, cálculo de maestria nas 5 Grandes Áreas e cálculo de escudos de ofensiva.
- **Create:** `src/lib/gamificationEngine.test.ts` — Testes unitários do motor de XP, níveis, maestria e escudos.
- **Create:** `src/lib/gamificationChallenges.ts` — Gerador determinístico de missões diárias/semanais (integradas às lacunas reais e FSRS) e avaliador das 12 conquistas clínicas.
- **Create:** `src/lib/gamificationChallenges.test.ts` — Testes unitários das missões e conquistas.
- **Create:** `src/components/gamification/AchievementToast.tsx` — Toast minimalista estilo macOS para novas conquistas/subidas de nível.
- **Create:** `src/components/gamification/HomeGamificationStrip.tsx` — Card compacto de Jornada & Missões Diárias na Home.
- **Create:** `src/components/gamification/GamificationHubModal.tsx` — Central de Gamificação com 3 abas (Missões & Desafios, Habilidades, Conquistas).
- **Modify:** `src/hooks/useMedR1Store.ts` — Derivar `gamification` (memoizado), gerenciar `seenAchievementIds` persistido e fila `pendingAchievements` + `dismissPendingAchievement`.
- **Modify:** `src/components/layout/TopBar.tsx` — Pílula discreta de Nível/XP + Ofensiva clicável para abrir o Hub.
- **Modify:** `src/components/analytics/HomeUnifiedView.tsx` — Renderizar `HomeGamificationStrip` com CTAs acionáveis para missões.
- **Modify:** `src/App.tsx` — Conectar `GamificationHubModal`, `AchievementToast` (respeitando `simuladoActive`) e handlers de navegação das missões.

---

### Task 1: Motor de Gamificação (XP, Níveis, Maestria por Área e Escudos)

**Files:**
- Create: `src/lib/gamificationEngine.ts`
- Test: `src/lib/gamificationEngine.test.ts`

**Interfaces:**
- Consumes: `GrandeAreaId`, `UserAnswerRecord`, `FsrsReviewLogEntry`, `SimuladoRecord`, `DailyGoalProgress`, `MedicalQuestion` from `../types/medical`; `GRANDES_AREAS` from `../data/taxonomy`.
- Produces:
  - `export type MedicalRankId = 'interno_1' | 'interno_2' | 'r1' | 'r2' | 'r3' | 'preceptor' | 'staff'`
  - `export type AreaMasteryTier = 'iniciante' | 'praticante' | 'residente' | 'especialista' | 'referencia'`
  - `export interface AreaMasteryStat { grandeAreaId: GrandeAreaId; label: string; shortLabel: string; answered: number; correct: number; accuracyPct: number; tier: AreaMasteryTier; tierLabel: string; progressToNextPct: number; nextRequirementLabel: string }`
  - `export interface GamificationXpBreakdown { questionsXp: number; accuracyBonusXp: number; simuladoBonusXp: number; fsrsReviewsXp: number; dailyGoalDaysXp: number }`
  - `export interface GamificationCoreState { totalXp: number; level: number; rankId: MedicalRankId; rankLabel: string; currentLevelXp: number; nextLevelXp: number; xpToNextLevel: number; xpProgressPct: number; streakDays: number; streakShields: number; maxStreakShields: number; currentCorrectCombo: number; breakdown: GamificationXpBreakdown; areaMastery: AreaMasteryStat[] }`
  - `export function computeGamificationCore(input: GamificationCoreInput): GamificationCoreState`

- [ ] **Step 1: Write the failing test in `src/lib/gamificationEngine.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { computeGamificationCore } from './gamificationEngine';
import type { DailyGoalProgress, MedicalQuestion, UserAnswerRecord } from '../types/medical';

const EMPTY_GOAL: DailyGoalProgress = {
  target: 20,
  answeredToday: 0,
  correctToday: 0,
  pct: 0,
  remaining: 20,
  completed: false,
  streakDays: 0,
  todayKey: '2026-11-25',
};

describe('gamificationEngine', () => {
  it('retorna estado limpo sem NaN para conta zerada (0 respostas, 0 revisões)', () => {
    const state = computeGamificationCore({
      answers: {},
      questions: [],
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: EMPTY_GOAL,
    });

    expect(state.totalXp).toBe(0);
    expect(state.level).toBe(1);
    expect(state.rankId).toBe('interno_1');
    expect(state.xpProgressPct).toBe(0);
    expect(state.streakShields).toBe(0);
    expect(state.areaMastery).toHaveLength(5);
    expect(state.areaMastery.every((a) => a.tier === 'iniciante')).toBe(true);
  });

  it('calcula XP, combo de acertos e escudos de ofensiva (teto 2) corretamente', () => {
    const q1 = { id: 'q1', grandeAreaId: 'clinica_medica' } as MedicalQuestion;
    const q2 = { id: 'q2', grandeAreaId: 'clinica_medica' } as MedicalQuestion;
    const answers: Record<string, UserAnswerRecord> = {
      q1: { questionId: 'q1', selectedLetter: 'A', isCorrect: true, answeredAt: '2026-11-25T10:00:00Z', mode: 'estudo', timeSpentSec: 40 },
      q2: { questionId: 'q2', selectedLetter: 'B', isCorrect: true, answeredAt: '2026-11-25T10:02:00Z', mode: 'simulado', timeSpentSec: 35 },
    };

    const state = computeGamificationCore({
      answers,
      questions: [q1, q2],
      fsrsReviewCount: 4,
      completedGoalDaysCount: 15,
      simulados: [],
      dailyGoal: { ...EMPTY_GOAL, streakDays: 15 },
    });

    // 2 questions * 10 + 2 correct * 10 + 1 simulado * 5 + 4 fsrs * 5 + 15 goalDays * 50 = 20+20+5+20+750 = 815
    expect(state.totalXp).toBe(815);
    expect(state.currentCorrectCombo).toBe(2);
    expect(state.streakShields).toBe(2); // floor(15/7) = 2, capped at 2
    expect(state.level).toBeGreaterThan(1);
  });

  it('impede promoção de maestria por área apenas por volume sem acurácia mínima', () => {
    const questions = Array.from({ length: 40 }, (_, i) => ({
      id: `q-cm-${i}`,
      grandeAreaId: 'clinica_medica',
    })) as MedicalQuestion[];
    const answers: Record<string, UserAnswerRecord> = {};
    questions.forEach((q, i) => {
      answers[q.id] = {
        questionId: q.id,
        selectedLetter: 'A',
        isCorrect: i < 16, // 40% accuracy on 40 questions
        answeredAt: `2026-11-25T10:${String(i).padStart(2, '0')}:00Z`,
        mode: 'estudo',
        timeSpentSec: 45,
      };
    });

    const state = computeGamificationCore({
      answers,
      questions,
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: EMPTY_GOAL,
    });

    const cm = state.areaMastery.find((a) => a.grandeAreaId === 'clinica_medica')!;
    expect(cm.accuracyPct).toBe(40);
    expect(cm.tier).toBe('praticante'); // Blocked from residente/especialista due to <60% accuracy
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/gamificationEngine.test.ts`
Expected: FAIL with module `./gamificationEngine` not found.

- [ ] **Step 3: Implement `src/lib/gamificationEngine.ts`**

Implement `computeGamificationCore(input: GamificationCoreInput): GamificationCoreState` with:
- XP weights: `10` XP/questão respondida, `+10` XP/acerto, `+5` XP extra/questão em modo `'simulado'`, `+5` XP/revisão FSRS, `+50` XP/dia com meta diária concluída.
- Curva de nível: `level = floor(sqrt(totalXp / 150)) + 1` (Nível 1: `0–149`, Nível 2: `150–599`, Nível 3: `600–1349`, etc.), mapeando para patentes médicas (`1–2: Interno I`, `3–4: Interno II`, `5–7: R1`, `8–10: R2`, `11–14: R3`, `15–19: Preceptor`, `20+: Staff`).
- Maestria por área (`GRANDES_AREAS`):
  - `referencia`: `answered >= 60 && accuracyPct >= 82`
  - `especialista`: `answered >= 35 && accuracyPct >= 75`
  - `residente`: `answered >= 20 && accuracyPct >= 65`
  - `praticante`: `answered >= 5`
  - `iniciante`: `< 5`
- Escudos de ofensiva: `Math.min(2, Math.floor(Math.max(0, dailyGoal.streakDays) / 7))`.
- Combo de acertos atual: contar acertos consecutivos a partir da resposta mais recente ordenada por `answeredAt` desc.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/gamificationEngine.test.ts`
Expected: PASS (3/3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/gamificationEngine.ts src/lib/gamificationEngine.test.ts
git commit -m "feat(gamification): add core XP, medical rank, area mastery and shield engine"
```

---

### Task 2: Motor de Missões Dinâmicas (Objetivo + Desafio) e Conquistas Clínicas

**Files:**
- Create: `src/lib/gamificationChallenges.ts`
- Test: `src/lib/gamificationChallenges.test.ts`

**Interfaces:**
- Consumes: `GamificationCoreState`, `AreaMasteryStat` from `./gamificationEngine`; `DailyGoalProgress`, `GrandeAreaId`, `SimuladoRecord`, `UserAnswerRecord`, `MedicalQuestion` from `../types/medical`.
- Produces:
  - `export type MissionActionType = 'open_questions' | 'open_weak_area' | 'open_flashcards' | 'start_simulado' | 'open_error_notebook'`
  - `export interface GamificationMission { id: string; scope: 'diaria' | 'semanal'; pillar: 'objetivo' | 'desafio' | 'aprendizado'; title: string; description: string; current: number; target: number; pct: number; completed: boolean; rewardXp: number; actionType: MissionActionType; targetAreaId?: GrandeAreaId }`
  - `export interface GamificationAchievement { id: string; title: string; description: string; pillar: 'aprendizado' | 'conquista' | 'habilidade' | 'desafio' | 'recompensa'; iconName: 'brain' | 'rocket' | 'trophy' | 'flame' | 'target' | 'shield' | 'award' | 'stethoscope'; unlocked: boolean; progressLabel: string; progressPct: number }`
  - `export function computeGamificationMissions(input: GamificationMissionsInput): GamificationMission[]`
  - `export function computeGamificationAchievements(input: GamificationAchievementsInput): GamificationAchievement[]`

- [ ] **Step 1: Write the failing test in `src/lib/gamificationChallenges.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import {
  computeGamificationAchievements,
  computeGamificationMissions,
} from './gamificationChallenges';
import { computeGamificationCore } from './gamificationEngine';
import type { DailyGoalProgress, MedicalQuestion, UserAnswerRecord } from '../types/medical';

const GOAL_HALF: DailyGoalProgress = {
  target: 20,
  answeredToday: 10,
  correctToday: 8,
  pct: 50,
  remaining: 10,
  completed: false,
  streakDays: 3,
  todayKey: '2026-11-25',
};

describe('gamificationChallenges', () => {
  it('gera 3 missões diárias e 2 semanais válidas mesmo com histórico zerado', () => {
    const core = computeGamificationCore({
      answers: {},
      questions: [],
      fsrsReviewCount: 0,
      completedGoalDaysCount: 0,
      simulados: [],
      dailyGoal: { ...GOAL_HALF, answeredToday: 0, correctToday: 0, pct: 0, remaining: 20, streakDays: 0 },
    });

    const missions = computeGamificationMissions({
      core,
      dailyGoal: { ...GOAL_HALF, answeredToday: 0, correctToday: 0, pct: 0, remaining: 20, streakDays: 0 },
      reviewsTodayCount: 0,
      dueFlashcardsCount: 12,
      answeredThisWeekCount: 0,
      simuladosThisWeekCount: 0,
      weakAreaAnsweredToday: 0,
      weakestAreaId: 'ginecologia_obstetricia',
    });

    expect(missions.filter((m) => m.scope === 'diaria')).toHaveLength(3);
    expect(missions.filter((m) => m.scope === 'semanal')).toHaveLength(2);
    expect(missions.every((m) => Number.isFinite(m.pct) && m.pct >= 0 && m.pct <= 100)).toBe(true);
  });

  it('desbloqueia conquistas reais (ex: Primeiro Plantão e Guardião da Memória) ao atingir os marcos', () => {
    const q1 = { id: 'q1', grandeAreaId: 'cirurgia_geral' } as MedicalQuestion;
    const answers: Record<string, UserAnswerRecord> = {
      q1: { questionId: 'q1', selectedLetter: 'A', isCorrect: true, answeredAt: '2026-11-25T10:00:00Z', mode: 'estudo', timeSpentSec: 30 },
    };
    const core = computeGamificationCore({
      answers,
      questions: [q1],
      fsrsReviewCount: 55,
      completedGoalDaysCount: 7,
      simulados: [],
      dailyGoal: { ...GOAL_HALF, streakDays: 7 },
    });

    const badges = computeGamificationAchievements({
      core,
      totalAnswered: 1,
      totalCorrect: 1,
      fsrsReviewCount: 55,
      simuladoCount: 0,
      errorNotebookReviewedCount: 0,
    });

    expect(badges).toHaveLength(12);
    expect(badges.find((b) => b.id === 'primeiro_plantao')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'guardiao_memoria')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'maratonista_7d')?.unlocked).toBe(true);
    expect(badges.find((b) => b.id === 'centuriao_100')?.unlocked).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/gamificationChallenges.test.ts`
Expected: FAIL with module `./gamificationChallenges` not found.

- [ ] **Step 3: Implement `src/lib/gamificationChallenges.ts`**

Implement `computeGamificationMissions` (3 diárias: bater meta diária, revisar flashcards vencidos até 10, fazer 5 questões da área de menor acurácia; 2 semanais: resolver 60 questões na semana, completar 1 simulado na semana) e `computeGamificationAchievements` com exatamente 12 insígnias clínicas reais:
1. `primeiro_plantao` (≥ 1 questão respondida)
2. `ritmo_25` (≥ 25 questões respondidas)
3. `centuriao_100` (≥ 100 questões respondidas)
4. `maratona_500` (≥ 500 questões respondidas)
5. `sequencia_5` (combo atual ≥ 5 acertos seguidos)
6. `maratonista_7d` (ofensiva ≥ 7 dias)
7. `escudo_ativo` (≥ 1 escudo de plantão acumulado)
8. `guardiao_memoria` (≥ 50 revisões FSRS)
9. `simulado_estreia` (≥ 1 simulado registrado)
10. `simuladista_5` (≥ 5 simulados registrados)
11. `maestria_area` (≥ 1 Grande Área no nível `especialista` ou `referencia`)
12. `clinico_completo` (todas as 5 Grandes Áreas ao menos no nível `praticante`)

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/gamificationChallenges.test.ts`
Expected: PASS (2/2 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/gamificationChallenges.ts src/lib/gamificationChallenges.test.ts
git commit -m "feat(gamification): add dynamic missions and 12 clinical achievements"
```

---

### Task 3: Integração no Store (`useMedR1Store.ts`) com Persistência de Conquistas Vistas

**Files:**
- Modify: `src/hooks/useMedR1Store.ts`
- Modify: `src/hooks/useMedR1Store.test.ts`

**Interfaces:**
- Consumes: `computeGamificationCore` from `../lib/gamificationEngine`; `computeGamificationMissions`, `computeGamificationAchievements` from `../lib/gamificationChallenges`.
- Produces (on `useMedR1Store()` return object):
  - `gamification: { core: GamificationCoreState; missions: GamificationMission[]; achievements: GamificationAchievement[]; unlockedCount: number; totalAchievements: number }`
  - `pendingAchievement: GamificationAchievement | null`
  - `dismissPendingAchievement: () => void`
  - Exported pure helper `export function diffNewlyUnlockedAchievements(achievements: GamificationAchievement[], seenIds: string[]): GamificationAchievement[]`

- [ ] **Step 1: Write the failing test in `src/hooks/useMedR1Store.test.ts`**

Add a `describe('diffNewlyUnlockedAchievements — deduplicação de toasts de conquista', ...)` block asserting that:
- Unlocked badges not in `seenIds` are returned.
- Unlocked badges already in `seenIds` are NOT returned again (prevents duplicate toast on page reload).
- Locked badges are never returned.

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/hooks/useMedR1Store.test.ts`
Expected: FAIL with `diffNewlyUnlockedAchievements` not exported.

- [ ] **Step 3: Implement integration in `src/hooks/useMedR1Store.ts`**

Add:
- `STORAGE_KEY_SEEN_ACHIEVEMENTS = 'medr1_gamification_seen_badges_v1'`.
- Exported pure helper `diffNewlyUnlockedAchievements`.
- Memoized `gamification` object computed strictly from real `answers`, `allQuestions`, `fsrsReviewLogs`, `goalCompletedDays`, `simuladoHistory`, `dailyGoal`, `reviewsTodayStats`, `dueFlashcardsCount`.
- Effect that detects newly unlocked badges not in `seenAchievementIds`, queues them in `pendingAchievements`, and marks them seen in `localStorage` once dismissed (or immediately on queue so reload never replays them).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/hooks/useMedR1Store.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useMedR1Store.ts src/hooks/useMedR1Store.test.ts
git commit -m "feat(gamification): integrate gamification state and achievement deduplication into store"
```

---

### Task 4: Pílula de Nível/XP na TopBar e Toast Discreto de Conquista

**Files:**
- Create: `src/components/gamification/AchievementToast.tsx`
- Modify: `src/components/layout/TopBar.tsx:33-110`

**Interfaces:**
- Consumes: `GamificationCoreState` from `../../lib/gamificationEngine`; `GamificationAchievement` from `../../lib/gamificationChallenges`.
- Produces:
  - `export function AchievementToast({ achievement, suppressed, onDismiss, onOpenHub }: AchievementToastProps)`
  - Optional props on `TopBar`: `gamificationCore?: GamificationCoreState`, `onOpenGamificationHub?: () => void`.

- [ ] **Step 1: Create `src/components/gamification/AchievementToast.tsx`**

Implement a subtle macOS-style floating banner (`fixed bottom-5 right-5 z-50 max-w-sm rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#1C1C1E]`):
- When `suppressed` is `true` (e.g., `simuladoActive === true`) or `!achievement`, return `null` immediately without rendering or distracting the student.
- Auto-dismiss after `4500ms` via `useEffect` timer (paused while suppressed).
- Uses `Trophy` (`lucide-react`, `size={18}`, `strokeWidth={1.5}`), title, description, and a subtle "Ver jornada" button calling `onOpenHub`.

- [ ] **Step 2: Add compact Level/XP pill to `src/components/layout/TopBar.tsx`**

In the right utility bar (next to Daily Goal / Theme controls), when `gamificationCore` is provided:
- Render a clean pill button (`rounded-lg border border-black/5 bg-white px-2.5 py-1.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition`) showing:
  - `Trophy` icon (`size={16}`, `strokeWidth={1.5}`, `text-[#007AFF]`)
  - `Nv. {level}` + `{totalXp} XP` with `tabular-nums`
  - Optional `Flame` + `{streakDays}d` when `streakDays > 0`
- Clicking calls `onOpenGamificationHub?.()`.

- [ ] **Step 3: Run typecheck to verify compilation**

Run: `npm run lint`
Expected: PASS (0 TypeScript errors).

- [ ] **Step 4: Commit**

```bash
git add src/components/gamification/AchievementToast.tsx src/components/layout/TopBar.tsx
git commit -m "feat(gamification): add TopBar level/XP pill and simulado-safe AchievementToast"
```

---

### Task 5: Card "Jornada & Missões Diárias" na Home

**Files:**
- Create: `src/components/gamification/HomeGamificationStrip.tsx`
- Modify: `src/components/analytics/HomeUnifiedView.tsx:40-95`

**Interfaces:**
- Consumes: `GamificationCoreState` from `../../lib/gamificationEngine`; `GamificationMission` from `../../lib/gamificationChallenges`.
- Produces:
  - `export function HomeGamificationStrip({ core, missions, unlockedCount, totalAchievements, onExecuteMission, onOpenHub }: HomeGamificationStripProps)`

- [ ] **Step 1: Create `src/components/gamification/HomeGamificationStrip.tsx`**

Implement a calm, Apple HIG card (`bg-white border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-2xl p-5 dark:bg-[#131926] dark:border-white/[0.08]`):
- **Header row:** Rank label (`Interno I`..`Staff`), `Nível {core.level}`, XP bar (`{core.currentLevelXp} / {core.nextLevelXp} XP` with `tabular-nums`, bar fill `bg-[#007AFF]`), streak + shields badge, and button `"Ver jornada ({unlockedCount}/{totalAchievements})"` calling `onOpenHub`.
- **Daily Missions grid (3 columns on desktop, stacked on mobile):** renders the 3 `scope === 'diaria'` missions, each showing title, `current/target` (`tabular-nums`), slim progress bar, `+rewardXp XP`, and clicking triggers `onExecuteMission(mission)` (or shows `CheckCircle2` when `completed`).

- [ ] **Step 2: Wire `HomeGamificationStrip` into `src/components/analytics/HomeUnifiedView.tsx`**

Accept optional `gamification` + `onExecuteMission` + `onOpenGamificationHub` props in `HomeUnifiedView` and render `HomeGamificationStrip` cleanly above or right below the Weekly Study Schedule without duplicating KPIs.

- [ ] **Step 3: Run typecheck**

Run: `npm run lint`
Expected: PASS (0 TypeScript errors).

- [ ] **Step 4: Commit**

```bash
git add src/components/gamification/HomeGamificationStrip.tsx src/components/analytics/HomeUnifiedView.tsx
git commit -m "feat(gamification): add HomeGamificationStrip with actionable daily missions"
```

---

### Task 6: Central de Gamificação (`GamificationHubModal`) e Ligação Final no `App.tsx`

**Files:**
- Create: `src/components/gamification/GamificationHubModal.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `GamificationCoreState`, `GamificationMission`, `GamificationAchievement` from Tasks 1–2; `store.gamification`, `store.pendingAchievement`, `store.dismissPendingAchievement` from Task 3.
- Produces:
  - `export function GamificationHubModal({ open, onClose, core, missions, achievements, onExecuteMission }: GamificationHubModalProps)`

- [ ] **Step 1: Create `src/components/gamification/GamificationHubModal.tsx`**

Implement an accessible modal (`role="dialog"`, `aria-modal="true"`, Escape to close, sets `document.body.dataset.medr1ModalOpen = 'true'`):
- Top summary banner showing the 6 pillars clearly: Nível & Patente, XP Total + barra para próximo nível, Ofensiva + Escudos de Plantão, Combo de Acertos e Conquistas Desbloqueadas.
- Apple HIG **Segmented Control** (`bg-[#E5E5EA]/70 p-1 rounded-lg`) with 3 tabs:
  1. **Missões & Desafios:** lista as 3 missões diárias e as 2 semanais com botão de ação direto.
  2. **Habilidades (5 Áreas):** 5 cards (Clínica, Cirurgia, GO, Pediatria, Preventiva) mostrando patente da cadeira, questões feitas, acurácia (`tabular-nums`), barra de progresso e próximo requisito explícito (`nextRequirementLabel`).
  3. **Conquistas (12):** grid 2–3 colunas com insígnias desbloqueadas em destaque azul `#007AFF` e bloqueadas em estado discreto com progresso real (`progressLabel`).

- [ ] **Step 2: Wire `GamificationHubModal`, `AchievementToast`, `TopBar` and `HomeUnifiedView` in `src/App.tsx`**

- Add `const [gamificationHubOpen, setGamificationHubOpen] = useState(false);`.
- Implement `handleExecuteMission(mission: GamificationMission)` routing each `actionType`:
  - `'open_questions'` → `navigateToTab('questoes', { mode: 'estudo' })`
  - `'open_weak_area'` → `handleSelectGrandeAreaFromBank(mission.targetAreaId ?? 'clinica_medica')`
  - `'open_flashcards'` → `navigateToTab('flashcards')`
  - `'start_simulado'` → `navigateToTab('questoes', { mode: 'simulado' })`
  - `'open_error_notebook'` → `navigateToTab('caderno_erros')`
- Pass `gamificationCore={store.gamification.core}` and `onOpenGamificationHub={() => setGamificationHubOpen(true)}` to `TopBar`.
- Pass `gamification={store.gamification}`, `onExecuteMission={handleExecuteMission}`, `onOpenGamificationHub={() => setGamificationHubOpen(true)}` to `HomeUnifiedView`.
- Render `AchievementToast` with `suppressed={simuladoActive}` and `GamificationHubModal`.

- [ ] **Step 3: Run full verification (typecheck + all unit tests + production build)**

Run: `npm run lint && npm test && npm run build`
Expected: `tsc --noEmit` exits 0, all Vitest suites PASS, and `vite build` + `esbuild` succeed cleanly.

- [ ] **Step 4: Commit**

```bash
git add src/components/gamification/GamificationHubModal.tsx src/App.tsx
git commit -m "feat(gamification): add GamificationHubModal and wire end-to-end engagement loop"
```
