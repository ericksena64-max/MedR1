# Grade Semanal Dinâmica de Estudos (Home) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar na Home de Inteligência de Desempenho do MedR1 uma grade semanal dinâmica de 7 dias (Dom a Sáb) calibrada com o tempo real por questão (`2,2 min/q` Ritmo de Prova vs `3,0 min/q` Estudo + Comentário) e desconto automático dos flashcards do dia (`~30s`/card), com configuração de dias ativos, horas/dia (`1h–8h`) e atalhos diretos para o Gargalo Prioritário e Flashcards.

**Architecture:** Um motor puro (`src/lib/weeklySchedule.ts`) concentra toda a aritmética de ritmo, desconto de flashcards e montagem dos 7 dias com navegação por semana (`weekOffset`). Um componente enxuto (`src/components/analytics/WeeklyStudyScheduleCard.tsx`) exibe as 7 colunas compactas + painel de configuração colapsável persistido em `localStorage`, integrado diretamente na Home (`PerformanceDashboard.tsx` / `HomeExecutiveOverview.tsx`).

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Requisitos do usuário em 2026-11-23 (grade semanal 7 dias, ritmos `2,2 min/q` e `3,0 min/q`, desconto de `30s`/flashcard, slider `1h–8h`, dias ativos Dom–Sáb, navegação `< / >`, CTAs para Banco de Questões no gargalo e Flashcards, layout limpo com pouca rolagem e testes Vitest).

## Global Constraints

- Base Ritmo de Prova: `2.2` min/questão (`100` questões em `220` min úteis).
- Base Estudo + Comentário: `3.0` min/questão (`20` questões/hora; `4h = 80` questões).
- Desconto de flashcards: `0.5` min (`30s`) por flashcard vencido/agendado no dia antes de calcular a meta líquida de questões.
- Slider de carga horária: `1h` a `8h` por dia ativo.
- Estética clínica consistente: `tabular-nums`, `strokeWidth={1.5}`, `bg-white` + `border-black/5`, `#007AFF` para ação primária, zero poluição visual.
- Preservar todos os 28 testes existentes do Vitest + adicionar testes unitários da grade semanal + `npm run lint` e `npm run build` verdes.

## Review Focus

- **Saturação por flashcards:** Quando `flashcardsCount * 0.5 >= hours * 60`, `netQuestionMinutes` e `estimatedQuestions` devem ser `0` (nunca negativos).
- **Flashcards atrasados (vencidos antes de hoje):** Devem ser contabilizados no dia de hoje (não perdidos em dias passados) ao visualizar a semana atual.
- **Todos os dias desmarcados:** Não quebrar somatórios semanais (exibir `0h · 0q` e mensagem discreta de descanso).
- **Fuso horário local:** Agrupamento de `dueAt` por data local (`YYYY-MM-DD`) consistente com `getLocalDateKey` (sem virar o dia às 21h UTC-3).
- **Configuração corrompida no `localStorage`:** `loadWeeklyScheduleConfig` deve fazer fallback seguro (Seg–Sáb, `3h/dia`, `'estudo'`).

---

### Task 1: Criar Motor Puro `src/lib/weeklySchedule.ts` + Testes Unitários

**Files:**
- Create: `src/lib/weeklySchedule.ts`
- Test: `src/lib/weeklySchedule.test.ts`

**Interfaces:**
- Consumes: `Flashcard` (`src/types/medical.ts`).
- Produces:
  - `export type StudyPaceMode = 'prova' | 'estudo'`
  - `export type WeekdayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6`
  - `export interface WeeklyScheduleConfig { activeDays: WeekdayIndex[]; hoursPerDay: number; paceMode: StudyPaceMode }`
  - `export interface WeeklyDayPlan`
  - `export interface WeeklyScheduleResult`
  - `export const WEEKLY_SCHEDULE_STORAGE_KEY = 'medr1_weekly_schedule_v1'`
  - `export function loadWeeklyScheduleConfig(rawJson: string | null): WeeklyScheduleConfig`
  - `export function calculateDailyQuestionQuota(hours: number, flashcardsCount: number, paceMode: StudyPaceMode)`
  - `export function buildWeeklySchedule(params: { config: WeeklyScheduleConfig; flashcards: Flashcard[]; weekOffset: number; referenceDate?: Date }): WeeklyScheduleResult`

- [ ] **Step 1: Escrever testes unitários falhando em `src/lib/weeklySchedule.test.ts`**
  Cobrir:
  1. `4h` sem flashcards em `'estudo'` (`3.0 min/q`) → `80` questões;
  2. `4h` sem flashcards em `'prova'` (`2.2 min/q`) → `109` questões (e `220/60 h` → `100` questões);
  3. Desconto de `30s`/flashcard (`2h`, `20` cards → `10 min` descontados → `110 min` úteis → `36` questões em `'estudo'` e `50` em `'prova'`);
  4. Saturação de flashcards (`estimatedQuestions === 0`, nunca negativo);
  5. Dias inativos (`isActive: false` → `hours: 0`, `estimatedQuestions: 0`);
  6. Navegação de semana (`weekOffset: -1, 0, +1`) com exatamente 7 dias (Dom a Sáb) e fallback seguro em `loadWeeklyScheduleConfig`.
- [ ] **Step 2: Rodar teste e confirmar falha inicial (RED)**
  Run: `npx vitest run src/lib/weeklySchedule.test.ts`
  Expected: FAIL (`Cannot find module './weeklySchedule'`).
- [ ] **Step 3: Implementar `src/lib/weeklySchedule.ts`**
  Implementar cálculo exato com data local e desconto de `0.5 min` por flashcard.
- [ ] **Step 4: Rodar testes e confirmar aprovação (GREEN)**
  Run: `npx vitest run src/lib/weeklySchedule.test.ts`
  Expected: PASS (6/6 testes passando).

---

### Task 2: Construir `WeeklyStudyScheduleCard.tsx` (Grade 7 Dias + Painel de Configuração)

**Files:**
- Create: `src/components/analytics/WeeklyStudyScheduleCard.tsx`

**Interfaces:**
- Consumes: `buildWeeklySchedule`, `loadWeeklyScheduleConfig`, `WEEKLY_SCHEDULE_STORAGE_KEY` (`src/lib/weeklySchedule.ts`), `HomeBottleneck` (`src/lib/homeIntelligence.ts`).
- Produces: `export function WeeklyStudyScheduleCard(props: WeeklyStudyScheduleCardProps)` com callbacks `onPracticeArea` e `onGoToFlashcards`.

- [ ] **Step 1: Cabeçalho compacto + navegação de semana (`<` / `Hoje` / `>`) + toggle `"Configurar"`**
  Exibir resumo semanal (`Xh · Yq · Z cards`) em `tabular-nums` e alternar abertura do painel de configuração sem sair da Home.
- [ ] **Step 2: Painel de configuração inline (colapsável)**
  - Botões de toggle dos 7 dias (`Dom` a `Sáb`);
  - Slider de horas/dia (`1h` a `8h`, passo `0.5h` ou `1h` — usar `1` a `8` passo `1` conforme spec);
  - Segmented Control (`bg-[#E5E5EA]/70 p-1 rounded-lg`) para alternar entre `Ritmo de Prova (2,2 min/q)` e `Estudo + Comentário (3,0 min/q)`.
  - Recálculo instantâneo + persistência segura em `localStorage`.
- [ ] **Step 3: Grade semanal de 7 colunas compactas + CTAs do dia**
  - 7 cards (`grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2`): dia ativo mostra carga horária, estimativa de questões e flashcards; dia inativo mostra `"Descanso"`; dia atual recebe destaque discreto `#007AFF`.
  - Rodapé compacto com botão primário `"Treinar <Gargalo>"` (chama `onPracticeArea`) e botão secundário `"Flashcards (X)"` (chama `onGoToFlashcards`).
- [ ] **Step 4: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 3: Integrar `WeeklyStudyScheduleCard` na Home (`PerformanceDashboard.tsx`)

**Files:**
- Modify: `src/components/analytics/PerformanceDashboard.tsx`

**Interfaces:**
- Consumes: `WeeklyStudyScheduleCard`, `homeSummary.bottleneck`, `flashcards`, `onPracticeArea`, `onGoToFlashcards`.
- Produces: Home unificada com Hero Executivo + Grade Semanal Dinâmica + Corpo de 2 Colunas (5 Grandes Áreas + Trajetória) mantendo pouca rolagem vertical.

- [ ] **Step 1: Renderizar `<WeeklyStudyScheduleCard />` na Home em `PerformanceDashboard.tsx`**
  Inserir logo abaixo do `HomeExecutiveOverview` (acima do toggle `"Explorar análises detalhadas"`), passando `flashcards`, `bottleneck={homeSummary.bottleneck}`, `onPracticeArea` e `onGoToFlashcards`.
- [ ] **Step 2: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 4: Validação Final (`npm test`, `npm run lint`, `npm run build`)

**Files:**
- Verify: todos os 6 arquivos de teste + build client/server.

- [ ] **Step 1: Rodar suíte completa de testes**
  Run: `npm test`
  Expected: 6 arquivos, 34/34 testes passando.
- [ ] **Step 2: Rodar typecheck e build de produção**
  Run: `npm run lint && npm run build`
  Expected: Exit code `0`, `dist/` e `server.mjs` gerados sem erros.
