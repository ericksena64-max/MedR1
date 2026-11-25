# Cronograma Dinâmico até a Data da Prova Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir a Grade Semanal do MedR1 para um cronograma dinâmico orientado às datas reais de cada prova escolhida pelo aluno, com periodização automática em 4 fases (Base, Aprofundamento, Reta Final e Semana da Prova), transição automática entre múltiplas bancas, cálculo honesto de viabilidade do Núcleo Pareto 80/20 e navegação pela linha do tempo até o dia da prova.

**Architecture:** Dois novos módulos puros (`src/lib/examCalendar.ts` e `src/lib/examRoadmap.ts`) encapsulam a lógica de calendário, contagem regressiva, pesos dinâmicos por urgência, periodização em 4 fases e orçamento de cobertura Pareto sem inflar `weeklySchedule.ts`. O `weeklySchedule.ts` consome esses módulos para gerar cada semana (`weekOffset`) com rotação real de tópicos, adaptação por fase e agendamento automático de simulados. Na UI, o `RoutineConfigModal.tsx` ganha edição de datas por prova + preview de viabilidade, e o `WeeklyStudyScheduleCard.tsx` exibe a contagem regressiva, a fase ativa e uma linha do tempo clicável semana a semana até a prova.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Proposta arquitetural aprovada em conversa (5 camadas: `examDates`, periodização 4 fases, peso por urgência multi-prova, fila de semanas sem repetição e recalibração sem bola de neve) sobre o sistema existente em `src/lib/weeklySchedule.ts`.

## Global Constraints

- **Estética Apple HIG / Baixa Carga Cognitiva Médica:** Fundo global `bg-[#F5F5F7]`, cartões `bg-white border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] rounded-2xl`, ação primária `bg-[#007AFF] text-white hover:bg-[#0066D6] rounded-lg`, alertas críticos em `bg-[#FF3B30]/10 text-[#D70015]`, textos em `text-[#1D1D1F]` e `text-[#86868B]`, Segmented Controls em `bg-[#E5E5EA]/70 p-1 rounded-lg`.
- **Tipografia & Ícones:** Todos os números (dias restantes, semanas, horas, cotas de questões, % de cobertura) DEVEM usar `tabular-nums`. Ícones de `lucide-react` com `strokeWidth={1.5}`.
- **Compatibilidade retroativa total:** Configurações já salvas em `medr1_weekly_schedule_v1` sem `examDates` ou `simuladoWeekday` devem continuar funcionando sem erro e sem quebrar os 20 testes existentes de `src/lib/weeklySchedule.test.ts`.
- **Datas em fuso horário local:** Todo parsing de `YYYY-MM-DD` deve usar `new Date(y, m - 1, d)` (nunca `new Date('YYYY-MM-DD')` em UTC) para evitar deslocamento de 1 dia no fuso de Brasília (UTC-3).
- **Zero novas dependências externas:** Usar apenas bibliotecas já presentes no `package.json`.

## Review Focus

1. **Prova cuja data já passou (múltiplas provas):** Quando a 1ª prova do calendário já passou (ex.: ontem), ela deve receber peso `0` e sair automaticamente da contagem regressiva ativa, transferindo 100% do foco para a próxima prova futura (coberto na Task 1).
2. **Todas as provas no passado ou sem data configurada:** Não pode gerar semanas negativas, divisão por zero ou `NaN`; deve cair graciosamente para `phaseId: 'sem_data'` e manter o modo contínuo normal (coberto na Task 1 e Task 2).
3. **Semana da Prova (`≤ 7 dias`) e véspera:** Deve reduzir a carga (*taper* de 40%), desativar simulado pesado e marcar o dia anterior à prova como revisão leve / descanso (coberto na Task 3).
4. **Tempo insuficiente até a prova (ex.: 2 semanas com 1h/dia):** O relatório de viabilidade deve sinalizar `status: 'critico'` com recomendação honesta de horas/dia ou foco estrito no Núcleo Pareto, sem prometer 100% de cobertura (coberto na Task 2).
5. **Navegação para semanas futuras (`weekOffset > 0`):** Avançar de Semana 0 para Semana 1, 2, 3 não pode repetir a lista idêntica de tópicos nem quebrar quando `weekOffset` ultrapassa a data da prova (coberto na Task 3).

---

## File Structure

- **Create:** `src/lib/examCalendar.ts` — Datas por prova (`ExamDateMap`), parsing local seguro, contagem regressiva, classificação das 4 fases de periodização e pesos dinâmicos por urgência.
- **Create:** `src/lib/examCalendar.test.ts` — Testes unitários de calendário, fases, provas passadas e pesos por urgência.
- **Create:** `src/lib/examRoadmap.ts` — Orçamento de cobertura Pareto até a prova (`computeParetoFeasibility`) e gerador da linha do tempo de semanas (`buildExamWeeksRoadmap`).
- **Create:** `src/lib/examRoadmap.test.ts` — Testes unitários de viabilidade e linha do tempo até o Dia D.
- **Modify:** `src/lib/weeklySchedule.ts` — Estender `WeeklyScheduleConfig` e `WeeklyScheduleResult`, integrar periodização por fase, rotação por `weekOffset`, taper da semana da prova e bloco de Simulado.
- **Modify:** `src/lib/weeklySchedule.test.ts` — Adicionar testes de periodização, rotação multi-semana e compatibilidade com configs antigas.
- **Modify:** `src/components/analytics/RoutineConfigModal.tsx` — Seletor de data por prova alvo, dia de simulado e painel de viabilidade Pareto em tempo real.
- **Modify:** `src/components/analytics/WeeklyStudyScheduleCard.tsx` — Badge de contagem regressiva + fase ativa na faixa superior e linha do tempo clicável "Mapa até a Prova".

---

### Task 1: Calendário de Provas, Periodização (4 Fases) e Pesos por Urgência

**Files:**
- Create: `src/lib/examCalendar.ts`
- Test: `src/lib/examCalendar.test.ts`

**Interfaces:**
- Consumes: `TargetExamBoard` from `./examWeights`.
- Produces:
  - `export type ExamDateMap = Partial<Record<TargetExamBoard, string>>` (formato `YYYY-MM-DD`)
  - `export type StudyPhaseId = 'base' | 'aprofundamento' | 'reta_final' | 'semana_prova' | 'sem_data'`
  - `export interface StudyPhaseMeta { id: StudyPhaseId; label: string; shortLabel: string; description: string; simuladoCadence: 'quinzenal' | 'semanal' | 'nenhum'; loadMultiplier: number }`
  - `export interface ExamCountdownEntry { exam: TargetExamBoard; dateIso: string; daysRemaining: number; weeksRemaining: number; isPast: boolean; isToday: boolean; phase: StudyPhaseMeta }`
  - `export interface ExamCalendarSummary { entries: ExamCountdownEntry[]; nextExam: ExamCountdownEntry | null; activePhase: StudyPhaseMeta; activeExams: TargetExamBoard[] }`
  - `export function parseIsoDateLocal(isoDate: string): Date | null`
  - `export function classifyStudyPhase(daysRemaining: number | null): StudyPhaseMeta`
  - `export function computeExamCalendarSummary(targetExams: TargetExamBoard[], examDates: ExamDateMap | undefined, referenceDate?: Date): ExamCalendarSummary`
  - `export function computeUrgencyAdjustedExamWeights(targetExams: TargetExamBoard[], examDates: ExamDateMap | undefined, referenceDate?: Date): Record<TargetExamBoard, number>`

- [ ] **Step 1: Write the failing test in `src/lib/examCalendar.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import {
  classifyStudyPhase,
  computeExamCalendarSummary,
  computeUrgencyAdjustedExamWeights,
  parseIsoDateLocal,
} from './examCalendar';

describe('examCalendar', () => {
  it('classifica corretamente as 4 fases de periodização e sem_data', () => {
    expect(classifyStudyPhase(null).id).toBe('sem_data');
    expect(classifyStudyPhase(100).id).toBe('base'); // > 12 semanas (84 dias)
    expect(classifyStudyPhase(56).id).toBe('aprofundamento'); // 29..84 dias
    expect(classifyStudyPhase(21).id).toBe('reta_final'); // 8..28 dias
    expect(classifyStudyPhase(5).id).toBe('semana_prova'); // 0..7 dias
    expect(classifyStudyPhase(5).loadMultiplier).toBe(0.6);
  });

  it('remove automaticamente prova já passada e foca 100% na próxima prova futura', () => {
    const ref = parseIsoDateLocal('2026-10-20')!;
    const summary = computeExamCalendarSummary(
      ['ENARE', 'UEPA'],
      { ENARE: '2026-10-18', UEPA: '2026-11-15' },
      ref
    );

    expect(summary.nextExam?.exam).toBe('UEPA');
    expect(summary.nextExam?.daysRemaining).toBe(26);
    expect(summary.activePhase.id).toBe('reta_final');
    expect(summary.activeExams).toEqual(['UEPA']);

    const weights = computeUrgencyAdjustedExamWeights(
      ['ENARE', 'UEPA'],
      { ENARE: '2026-10-18', UEPA: '2026-11-15' },
      ref
    );
    expect(weights.ENARE).toBe(0);
    expect(weights.UEPA).toBeCloseTo(1, 5);
  });

  it('eleva o peso de uma prova secundária quando ela entra nas últimas 4 semanas', () => {
    const ref = parseIsoDateLocal('2026-10-01')!;
    // UEPA é 1ª prioridade (em 60 dias), ENARE é 2ª prioridade (em 14 dias -> reta final!)
    const weights = computeUrgencyAdjustedExamWeights(
      ['UEPA', 'ENARE'],
      { UEPA: '2026-11-30', ENARE: '2026-10-15' },
      ref
    );
    // Sem urgência, ENARE teria 33.3%; com bônus de reta final (<=28d), deve superar 45%
    expect(weights.ENARE).toBeGreaterThan(0.45);
    expect(weights.UEPA + weights.ENARE).toBeCloseTo(1, 5);
  });

  it('faz fallback seguro para sem_data quando todas as provas já passaram ou não há datas', () => {
    const ref = parseIsoDateLocal('2026-12-01')!;
    const summary = computeExamCalendarSummary(
      ['UEPA'],
      { UEPA: '2026-11-15' },
      ref
    );
    expect(summary.nextExam).toBeNull();
    expect(summary.activePhase.id).toBe('sem_data');
    expect(summary.activeExams).toEqual(['UEPA']);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/examCalendar.test.ts`
Expected: FAIL with module `./examCalendar` not found.

- [ ] **Step 3: Implement `src/lib/examCalendar.ts`**

Implement:
- `parseIsoDateLocal(isoDate)`: valida `YYYY-MM-DD`, retorna `new Date(y, m - 1, d)` (00:00 local) ou `null`.
- `classifyStudyPhase(daysRemaining)`:
  - `null` ou `< 0`: `sem_data` (`loadMultiplier: 1`, `simuladoCadence: 'quinzenal'`)
  - `0..7`: `semana_prova` (`loadMultiplier: 0.6`, `simuladoCadence: 'nenhum'`)
  - `8..28`: `reta_final` (`loadMultiplier: 1`, `simuladoCadence: 'semanal'`)
  - `29..84`: `aprofundamento` (`loadMultiplier: 1`, `simuladoCadence: 'semanal'`)
  - `> 84`: `base` (`loadMultiplier: 1`, `simuladoCadence: 'quinzenal'`)
- `computeUrgencyAdjustedExamWeights`: parte do peso harmônico `1/(idx+1)`, zera provas com `isPast === true` (desde que exista ao menos uma prova futura), e multiplica por fator de urgência (`2.2` se `daysRemaining <= 28`, `1.4` se `daysRemaining <= 56`, `1.0` caso contrário), normalizando a soma para `1`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/examCalendar.test.ts`
Expected: PASS (4/4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/examCalendar.ts src/lib/examCalendar.test.ts
git commit -m "feat(schedule): add examCalendar with countdown, 4-phase periodization and urgency weights"
```

---

### Task 2: Orçamento de Cobertura Pareto e Linha do Tempo até o Dia D

**Files:**
- Create: `src/lib/examRoadmap.ts`
- Test: `src/lib/examRoadmap.test.ts`

**Interfaces:**
- Consumes: `ExamDateMap`, `StudyPhaseMeta`, `computeExamCalendarSummary`, `classifyStudyPhase`, `parseIsoDateLocal` from `./examCalendar`; `TargetExamBoard` from `./examWeights`.
- Produces:
  - `export type FeasibilityStatus = 'confortavel' | 'apertado' | 'critico' | 'sem_data'`
  - `export interface ParetoFeasibilityReport { status: FeasibilityStatus; weeksUntilExam: number | null; totalCapacityQuestions: number; paretoCoreTargetQuestions: number; coveragePct: number; recommendedHoursPerDay: number | null; summaryMessage: string }`
  - `export interface ExamRoadmapWeekItem { weekOffset: number; weekNumber: number; label: string; startDateIso: string; phase: StudyPhaseMeta; hasSimulado: boolean; examEvents: TargetExamBoard[]; isCurrentWeek: boolean }`
  - `export function computeParetoFeasibility(input: ParetoFeasibilityInput): ParetoFeasibilityReport`
  - `export function buildExamWeeksRoadmap(input: ExamWeeksRoadmapInput): ExamRoadmapWeekItem[]`

- [ ] **Step 1: Write the failing test in `src/lib/examRoadmap.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import { buildExamWeeksRoadmap, computeParetoFeasibility } from './examRoadmap';
import { parseIsoDateLocal } from './examCalendar';

describe('examRoadmap', () => {
  it('sinaliza status critico e recomenda horas/dia quando a capacidade não cobre o Núcleo Pareto', () => {
    const report = computeParetoFeasibility({
      weeksUntilExam: 2,
      activeDaysPerWeek: 5,
      hoursPerDay: 1,
      estimatedQuestionsPerActiveDay: 15,
      paretoCoreTopicsCount: 20, // 20 * 25q = 500q target; capacity = 2 * 5 * 15 = 150q -> 30%
    });

    expect(report.status).toBe('critico');
    expect(report.coveragePct).toBe(30);
    expect(report.recommendedHoursPerDay).toBeGreaterThan(1);
    expect(report.recommendedHoursPerDay).toBeLessThanOrEqual(8);
  });

  it('sinaliza status confortavel quando há margem para cobrir 100% do Núcleo Pareto', () => {
    const report = computeParetoFeasibility({
      weeksUntilExam: 16,
      activeDaysPerWeek: 6,
      hoursPerDay: 3,
      estimatedQuestionsPerActiveDay: 50,
      paretoCoreTopicsCount: 20, // capacity = 4800q vs 500q target
    });

    expect(report.status).toBe('confortavel');
    expect(report.coveragePct).toBe(100);
    expect(report.recommendedHoursPerDay).toBeNull();
  });

  it('gera linha do tempo semanal até a data da prova marcando fase, simulado e semana do exame', () => {
    const ref = parseIsoDateLocal('2026-10-01')!;
    const weeks = buildExamWeeksRoadmap({
      targetExams: ['UEPA'],
      examDates: { UEPA: '2026-11-15' },
      referenceDate: ref,
      maxWeeks: 24,
    });

    expect(weeks.length).toBeGreaterThanOrEqual(6);
    expect(weeks[0].weekOffset).toBe(0);
    expect(weeks[0].isCurrentWeek).toBe(true);
    const examWeek = weeks.find((w) => w.examEvents.includes('UEPA'));
    expect(examWeek).toBeDefined();
    expect(examWeek!.phase.id).toBe('semana_prova');
    expect(examWeek!.hasSimulado).toBe(false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/examRoadmap.test.ts`
Expected: FAIL with module `./examRoadmap` not found.

- [ ] **Step 3: Implement `src/lib/examRoadmap.ts`**

Implement:
- `QUESTIONS_PER_PARETO_TOPIC = 25` (base de cobertura sólida por tema do Núcleo Pareto 80%).
- `computeParetoFeasibility`:
  - `weeksUntilExam === null || weeksUntilExam <= 0`: retorna `status: 'sem_data'`.
  - `coveragePct = Math.min(100, Math.round((totalCapacityQuestions / paretoCoreTargetQuestions) * 100))`.
  - `>= 90` → `'confortavel'`; `>= 65` → `'apertado'`; `< 65` → `'critico'`.
  - Se não confortável, calcula `recommendedHoursPerDay = Math.min(8, Math.ceil(hoursPerDay * (paretoCoreTargetQuestions / Math.max(1, totalCapacityQuestions))))`.
- `buildExamWeeksRoadmap`: itera `weekOffset = 0..totalWeeks` (teto `maxWeeks = 24`) a partir do domingo da semana de `referenceDate`, associa `examEvents` cuja data cai dentro dos 7 dias da semana, classifica a fase pela distância do início da semana à próxima prova, e define `hasSimulado` (`false` em `semana_prova`, `true` toda semana em `aprofundamento`/`reta_final`, semanas pares em `base`).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/examRoadmap.test.ts`
Expected: PASS (3/3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/lib/examRoadmap.ts src/lib/examRoadmap.test.ts
git commit -m "feat(schedule): add Pareto feasibility budget and exam weeks roadmap generator"
```

---

### Task 3: Integrar Periodização, Rotação Multi-Semana e Simulados no `weeklySchedule.ts`

**Files:**
- Modify: `src/lib/weeklySchedule.ts`
- Modify: `src/lib/weeklySchedule.test.ts`

**Interfaces:**
- Consumes: `ExamDateMap`, `StudyPhaseMeta`, `ExamCalendarSummary`, `computeExamCalendarSummary`, `computeUrgencyAdjustedExamWeights`, `parseIsoDateLocal` from `./examCalendar`; `ParetoFeasibilityReport`, `computeParetoFeasibility` from `./examRoadmap`.
- Produces (additions to existing types in `src/lib/weeklySchedule.ts`):
  - On `WeeklyScheduleConfig`: `examDates?: ExamDateMap`, `simuladoWeekday?: WeekdayIndex | null`
  - On `WeeklyTopicBlock`: `blockKind?: 'estudo' | 'simulado' | 'revisao_leve'`
  - On `WeeklyDayPlan`: `isExamDay?: boolean`, `examDayLabels?: TargetExamPreset[]`, `isExamEve?: boolean`
  - On `WeeklyScheduleResult`: `calendarSummary: ExamCalendarSummary`, `weekPhase: StudyPhaseMeta`, `feasibility: ParetoFeasibilityReport`

- [ ] **Step 1: Write the failing tests in `src/lib/weeklySchedule.test.ts`**

Add a `describe('periodização dinâmica até a data da prova', ...)` block testing:
1. `weekOffset = 0` e `weekOffset = 1` geram sequências de tópicos distintas (rotação real de semanas, sem repetir o mesmo conjunto idêntico).
2. Na `semana_prova` (ex.: 4 dias antes da prova), a cota estimada de questões aplica o *taper* (`loadMultiplier = 0.6`), não insere bloco de simulado e marca `isExamDay` no dia exato da prova e `isExamEve` na véspera.
3. Na fase `aprofundamento`, o dia configurado em `simuladoWeekday` inclui um bloco `blockKind: 'simulado'`.
4. `loadWeeklyScheduleConfig` preserva `examDates` válidos, descarta strings inválidas e mantém compatibilidade com JSON antigo sem `examDates`.

- [ ] **Step 2: Run test to verify new tests fail**

Run: `npx vitest run src/lib/weeklySchedule.test.ts`
Expected: FAIL on the new periodization tests while existing 20 tests remain green.

- [ ] **Step 3: Implement periodization, urgency weights, multi-week rotation and simulado slot in `src/lib/weeklySchedule.ts`**

- Estender `WeeklyScheduleConfig`, `WeeklyTopicBlock`, `WeeklyDayPlan` e `WeeklyScheduleResult`.
- Em `loadWeeklyScheduleConfig`: validar cada entrada de `examDates` com `parseIsoDateLocal` e validar `simuladoWeekday` (`0..6` ou `null`, padrão `6`).
- Em `buildWeeklySchedule`:
  - Calcular `calendarSummary` usando `referenceDate` e `weekCalendarSummary` usando o domingo da semana exibida (`sunday`) para determinar `weekPhase`.
  - Usar `computeUrgencyAdjustedExamWeights(targetExams, config.examDates, sunday)` no lugar de `computeExamPriorityWeights` quando houver datas futuras configuradas.
  - Ajustar `scoreTopicForExams` pela fase (`base` prioriza incidência + temas com `answered === 0`; `aprofundamento` dobra peso da lacuna `(1 - acc)`; `reta_final` foca em Pareto Core + temas `< 70%`).
  - Aplicar `weekPhase.loadMultiplier` nas horas líquidas de questões na `semana_prova` e zerar questões na véspera (`isExamEve`) e no dia da prova (`isExamDay`).
  - Inicializar `weekCursor = Math.abs(weekOffset * blocksPerActiveDay * Math.max(1, config.activeDays.length)) % rankedCandidates.length` para que cada semana avance organicamente na fila de tópicos.
  - Quando `simuladoWeekday` está ativo e a semana tem simulado pela cadência da fase (`aprofundamento`/`reta_final` ou `base` com `weekOffset % 2 === 0`), adicionar bloco `blockKind: 'simulado'` no dia escolhido.
  - Calcular e retornar `feasibility = computeParetoFeasibility(...)`.

- [ ] **Step 4: Run test to verify all tests pass**

Run: `npx vitest run src/lib/weeklySchedule.test.ts`
Expected: PASS (todos os 20 testes anteriores + 4 novos = 24/24).

- [ ] **Step 5: Commit**

```bash
git add src/lib/weeklySchedule.ts src/lib/weeklySchedule.test.ts
git commit -m "feat(schedule): integrate 4-phase periodization, multi-week rotation and simulado slot"
```

---

### Task 4: Editor de Datas por Prova & Viabilidade em Tempo Real (`RoutineConfigModal.tsx`)

**Files:**
- Modify: `src/components/analytics/RoutineConfigModal.tsx`

**Interfaces:**
- Consumes: `WeeklyScheduleConfig`, `buildWeeklySchedule`, `WEEKDAY_LABELS` from `../../lib/weeklySchedule`; `ExamDateMap` from `../../lib/examCalendar`.
- Produces: Persists `examDates` and `simuladoWeekday` into `WEEKLY_SCHEDULE_STORAGE_KEY` and dispatches `WEEKLY_SCHEDULE_UPDATED_EVENT`.

- [ ] **Step 1: Add per-exam date input and simulado weekday selector in `src/components/analytics/RoutineConfigModal.tsx`**

- Na lista de provas alvo selecionadas (`selectedExams`), adicionar ao lado de cada prova um `<input type="date">` estilizado no padrão Apple HIG (`bg-white border border-[#D1D1D6] rounded-lg px-2 py-1 text-xs tabular-nums focus:border-[#007AFF] focus:ring-3 focus:ring-[#007AFF]/20`) ligado a `config.examDates?.[exam] ?? ''`.
- Adicionar seletor compacto para **Dia do Simulado** (Dom..Sáb + `Nenhum`), persistindo em `config.simuladoWeekday`.
- No bloco de preview inferior do modal, exibir o diagnóstico de `preview.feasibility`:
  - Semanas restantes + fase atual (`preview.calendarSummary.activePhase.label`)
  - Cobertura estimada do Núcleo Pareto (`preview.feasibility.coveragePct%`, `tabular-nums`)
  - Alerta translúcido Apple HIG (`bg-[#FF3B30]/10 text-[#D70015]`) quando `status === 'critico'` com botão rápido `"Ajustar para Xh/dia"` caso `recommendedHoursPerDay` esteja disponível.

- [ ] **Step 2: Run typecheck**

Run: `npm run lint`
Expected: PASS (0 TypeScript errors).

- [ ] **Step 3: Commit**

```bash
git add src/components/analytics/RoutineConfigModal.tsx
git commit -m "feat(schedule): add per-exam date picker, simulado weekday and Pareto feasibility preview"
```

---

### Task 5: Contagem Regressiva, Fase Ativa e Linha do Tempo até a Prova (`WeeklyStudyScheduleCard.tsx`)

**Files:**
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx`

**Interfaces:**
- Consumes: `schedule.calendarSummary`, `schedule.weekPhase`, `schedule.feasibility`, `day.isExamDay`, `day.isExamEve`, `block.blockKind` from `../../lib/weeklySchedule`; `buildExamWeeksRoadmap` from `../../lib/examRoadmap`.
- Produces: Interactive countdown badge + collapsible "Mapa até a Prova" horizontal week selector wired to `weekOffset`.

- [ ] **Step 1: Upgrade `src/components/analytics/WeeklyStudyScheduleCard.tsx`**

- **Faixa superior ("Rota de Aprovação"):** quando `schedule.calendarSummary.nextExam` existir, mostrar badge `tabular-nums`:
  - `{nextExam.exam} em {nextExam.daysRemaining}d · Fase {schedule.weekPhase.shortLabel}`
  - Se `schedule.feasibility.status === 'critico'`, mostrar chip discreto `Cobertura {coveragePct}%` clicável para abrir o `RoutineConfigModal`.
  - Botão toggle `"Mapa até a Prova"` (ícone `CalendarRange` ou `CalendarDays`, `strokeWidth={1.5}`).
- **Linha do Tempo Clicável ("Mapa até a Prova"):** quando aberto, renderiza `buildExamWeeksRoadmap(...)` como trilha horizontal rolável de pílulas (`Sem 1`, `Sem 2`, ..., `Dia D · UEPA`) coloridas sutilmente pela fase; clicar em qualquer semana chama `setWeekOffset(item.weekOffset)` e destaca a semana ativa em `#007AFF`.
- **Renderização dos dias e blocos:**
  - Se `day.isExamDay`: exibir selo de destaque `Dia da Prova · {examDayLabels.join(', ')}`.
  - Se `day.isExamEve`: exibir selo calmo `Véspera · Revisão leve & descanso`.
  - Se `block.blockKind === 'simulado'`: exibir tag `Simulado / Prova na Íntegra` e ao clicar acionar o fluxo de simulado (ou banco filtrado).

- [ ] **Step 2: Run typecheck**

Run: `npm run lint`
Expected: PASS (0 TypeScript errors).

- [ ] **Step 3: Commit**

```bash
git add src/components/analytics/WeeklyStudyScheduleCard.tsx
git commit -m "feat(schedule): add exam countdown banner, phase indicator and interactive weeks roadmap"
```

---

### Task 6: Verificação Final Integrada (Testes, Typecheck e Build)

**Files:**
- Verify: All modified and created files.

- [ ] **Step 1: Run full verification suite**

Run: `npm run lint && npm test && npm run build`
Expected: `tsc --noEmit` exits 0, all Vitest suites pass (0 failures), and production build (`vite build && esbuild`) succeeds cleanly.
