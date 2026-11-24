# Navigation Phase 1 — Medcel-Style Shell & Bug Fixes Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir o shell de navegação do MedR1 para o padrão **TopBar direta + Drawer deslizante** (liberando 100% da largura da tela para a Home e Questões), migrar a edição de meta diária para a TopBar, desacoplar o modal de Rotina, eliminar duplicações em `Desempenho` e corrigir todos os bugs críticos de transição/atalhos da Fase 1.

**Architecture:** Criamos helpers puros testáveis em `src/lib/navigationState.ts` para contexto de TopBar, guarda de saída de simulado ativo e validação de meta diária. Em seguida, refatoramos `TopBar.tsx` e `Sidebar.tsx` (agora um Drawer unificado com `role="dialog"` e bloqueio de atalhos), extraímos `RoutineConfigModal.tsx` para abrir sobre qualquer tela, corrigimos transições/filtros zumbi em `App.tsx` e `FlashcardsView.tsx`, e removemos a duplicação de Home em `PerformanceDashboard.tsx`.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Auditoria `/boost` de navegação do MedR1 + estética clínica Apple HIG (`#007AFF`, `#F8FAFC`/`#0B0F17`, `bg-[#EBEBF0]/80 backdrop-blur-xl` no drawer claro, `tabular-nums`, `rounded-xl`).

## Global Constraints

- Preservar 100% dos cálculos estatísticos, atalhos de teclado em `QuestionCard` (`A–E`, `Enter`) e `FlashcardsView` (`Space`/`Enter`, `1–4`), botão `"Confirmar"` à esquerda da alternativa selecionada, botão `"Finalizar"` sempre acessível e os 41 testes Vitest existentes.
- Não perder nenhuma funcionalidade ao remover a sidebar fixa: edição de meta diária vai para popover na `TopBar`, e `FilterPanel` continua acessível em 1 clique pelo botão `"Filtros"` na `TopBar` (quando em `Questões`) que abre o Drawer.
- Todos os modais e drawers devem definir `role="dialog"`, `aria-modal="true"`, fechar com `Escape` e setar `document.body.dataset.medr1ModalOpen = 'true'` enquanto abertos.
- Verificação final obrigatória: `npm test`, `npm run lint` e `npm run build` com exit code 0.

## Review Focus

- **Atalhos de teclado com Drawer aberto**: pressionar `A–E`, `Enter`, `Space` ou `1–4` com o Drawer aberto em `Questões` ou `Flashcards` NÃO pode responder questões/cards por baixo.
- **Botão `"Rotina"` em qualquer aba**: clicar em `"Rotina"` na `TopBar` estando em `Questões` ou `Flashcards` abre o modal por cima sem trocar `activeTab` para `'inicio'`, e alterar horas/dias/banca sincroniza imediatamente a `WeeklyStudyScheduleCard` via evento `WEEKLY_SCHEDULE_UPDATED_EVENT`.
- **Saída de Simulado ativo**: clicar em outra aba na `TopBar` ou no Drawer com `simuladoActive && !simuladoFinished` exige confirmação antes de abandonar o simulado; cancelar mantém o aluno na prova.
- **Filtro externo em `FlashcardsView`**: navegar do Pareto para `Flashcards`, sair da aba e voltar depois NÃO pode reaplicar o filtro antigo; enquanto um filtro estiver ativo, um chip removível aparece visível na barra superior mesmo no modo Revisão.
- **Edição de meta diária na `TopBar`**: clicar no pill `streak · answered/target` abre o popover, permite escolher presets (`10`, `20`, `30`, `50`) ou valor customizado (5–300) e persiste via `onUpdateDailyGoalTarget`.

---

### Task 1: Helpers Puros de Estado de Navegação (`src/lib/navigationState.ts`)

**Files:**
- Create: `src/lib/navigationState.ts`
- Create Test: `src/lib/navigationState.test.ts`

**Interfaces:**
- Consumes: `ActiveTab`, `StudyMode` de `src/types/medical.ts`.
- Produces:
  - `export type PrimaryNavId = 'inicio' | 'questoes' | 'simulados' | 'flashcards' | 'caderno_erros'`
  - `export interface TopBarContext { section: string; detail: string; activePrimaryId: PrimaryNavId | null }`
  - `export function resolveTopBarContext(activeTab: ActiveTab, mode: StudyMode, simuladoActive: boolean): TopBarContext`
  - `export function shouldConfirmLeaveSimulado(input: { activeTab: ActiveTab; mode: StudyMode; simuladoActive: boolean; simuladoFinished: boolean; nextTab: ActiveTab; nextMode?: StudyMode }): boolean`
  - `export function clampDailyGoalTarget(value: number): number`

- [ ] **Step 1: Write failing tests in `src/lib/navigationState.test.ts`**

```ts
import { describe, expect, it } from 'vitest';
import {
  clampDailyGoalTarget,
  resolveTopBarContext,
  shouldConfirmLeaveSimulado,
} from './navigationState';

describe('navigationState', () => {
  it('distingue Simulados de Banco de Questões no contexto da TopBar', () => {
    expect(resolveTopBarContext('questoes', 'estudo', false)).toMatchObject({
      section: 'Banco de Questões',
      activePrimaryId: 'questoes',
    });
    expect(resolveTopBarContext('questoes', 'simulado', false)).toMatchObject({
      section: 'Simulados',
      activePrimaryId: 'simulados',
    });
    expect(resolveTopBarContext('questoes', 'simulado', true).detail).toContain('Em andamento');
    expect(resolveTopBarContext('desempenho', 'estudo', false).activePrimaryId).toBeNull();
  });

  it('exige confirmação apenas ao sair de um simulado ativo e não finalizado', () => {
    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: false,
        nextTab: 'inicio',
      })
    ).toBe(true);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: false,
        nextTab: 'questoes',
        nextMode: 'estudo',
      })
    ).toBe(true);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: true,
        nextTab: 'inicio',
      })
    ).toBe(false);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'estudo',
        simuladoActive: false,
        simuladoFinished: false,
        nextTab: 'flashcards',
      })
    ).toBe(false);
  });

  it('limita a meta diária entre 5 e 300 questões válidas', () => {
    expect(clampDailyGoalTarget(2)).toBe(5);
    expect(clampDailyGoalTarget(45.7)).toBe(46);
    expect(clampDailyGoalTarget(999)).toBe(300);
    expect(clampDailyGoalTarget(Number.NaN)).toBe(20);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/lib/navigationState.test.ts`
Expected: FAIL with "Cannot find module './navigationState'".

- [ ] **Step 3: Implement `src/lib/navigationState.ts`**

Implementar `resolveTopBarContext`, `shouldConfirmLeaveSimulado` e `clampDailyGoalTarget` cobrindo todas as abas de `ActiveTab`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/lib/navigationState.test.ts`
Expected: PASS (3/3 tests).

---

### Task 2: TopBar Estilo Medcel + Popover de Meta Diária + Drawer Seguro (`TopBar.tsx` e `Sidebar.tsx`)

**Files:**
- Modify: `src/components/layout/TopBar.tsx`
- Modify: `src/components/layout/Sidebar.tsx`

**Interfaces:**
- Consumes: `resolveTopBarContext`, `clampDailyGoalTarget`, `PrimaryNavId` de `src/lib/navigationState.ts`.
- Produces:
  - `TopBar` aceita props adicionais opcionais: `mode?: StudyMode`, `simuladoActive?: boolean`, `onSelectTab?: (tab: ActiveTab) => void`, `onSelectSimulados?: () => void`, `dueFlashcardsCount?: number`, `errorNotebookCount?: number`, `activeFilterCount?: number`, `onUpdateDailyGoalTarget?: (target: number) => void`.
  - `Sidebar` renderiza exclusivamente como **Drawer deslizante unificado** (desktop + mobile) controlado por `mobileOpen` / `onCloseMobile`, com `role="dialog"`, `aria-modal="true"`, fechamento via `Escape` e `document.body.dataset.medr1ModalOpen = 'true'`.

- [ ] **Step 1: Atualizar `TopBar.tsx`**

- Remover `lg:hidden` do botão hambúrguer `<Menu />` (`aria-label="Abrir menu de navegação"`), deixando-o sempre acessível no desktop e mobile (exceto em Modo Foco).
- Exibir os **5 módulos principais** em linha no desktop (`hidden lg:flex`): `Início`, `Questões`, `Simulados`, `Flashcards` (badge com `dueFlashcardsCount` quando > 0), `Erros` (badge com `errorNotebookCount` quando > 0), usando `resolveTopBarContext` para estado ativo `#007AFF`.
- Em telas `< lg` (ou quando `activePrimaryId === null`), manter o breadcrumb contextual (`crumb.section`).
- Transformar o pill `streak · answered/target` em botão clicável que abre um popover compacto de **Meta Diária** (presets `10`, `20`, `30`, `50` + input numérico `tabular-nums` com `clampDailyGoalTarget`).
- Quando `activeTab === 'questoes'` e `!focusMode`, exibir botão compacto `"Filtros"` (com badge de `activeFilterCount` quando > 0) que chama `onOpenMobileMenu` para abrir o Drawer direto nos filtros.

- [ ] **Step 2: Converter `Sidebar.tsx` em Drawer Deslizante Enxuto e Seguro**

- Remover `<aside className="hidden lg:block ...">` (sem sidebar fixa no desktop) e remover os blocos redundantes (`QuestionBankSummaryCard`, `SidebarEstimateRadarCard`, `DailyGoalCard`, e o bloco `ON/OFF` de Ranking).
- No Drawer (`mobileOpen`): adicionar `useEffect` que seta `document.body.dataset.medr1ModalOpen = 'true'` e fecha no `Escape`; aplicar `role="dialog"`, `aria-modal="true"`, `aria-label="Menu de navegação"`, e superfície translúcida Apple HIG (`bg-[#EBEBF0]/90 backdrop-blur-xl dark:bg-[#131926]/95`).
- Corrigir o clique no logo MedR1 dentro do Drawer para navegar para `'inicio'` (`onSelectTab('inicio')`).
- Manter os 5 módulos principais + separador + 3 módulos secundários (`Desempenho`, `Ranking Ao Vivo`, `Importar Provas IA`) + `sidebarFilters` (quando em `questoes`) + cartão de perfil no rodapé.

- [ ] **Step 3: Verificar compilação de tipos**

Run: `npm run lint`
Expected: Exit code 0 (ou apenas avisos temporários resolvidos na Task 4 se alguma prop nova ainda não estiver conectada em `App.tsx`).

---

### Task 3: Extrair `RoutineConfigModal.tsx` com Sincronia Global

**Files:**
- Modify: `src/lib/weeklySchedule.ts` (exportar constante `WEEKLY_SCHEDULE_UPDATED_EVENT = 'medr1-weekly-schedule-updated'`)
- Create: `src/components/analytics/RoutineConfigModal.tsx`
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx`

**Interfaces:**
- Consumes: `WEEKLY_SCHEDULE_STORAGE_KEY`, `WEEKLY_SCHEDULE_UPDATED_EVENT`, `loadWeeklyScheduleConfig`, `buildWeeklySchedule`, `TARGET_EXAM_PRESETS`, `WEEKDAY_LABELS` de `src/lib/weeklySchedule.ts`.
- Produces:
  ```ts
  export interface RoutineConfigModalProps {
    open: boolean;
    onClose: () => void;
    flashcards: Flashcard[];
  }
  export function RoutineConfigModal(props: RoutineConfigModalProps): React.ReactElement | null
  ```

- [ ] **Step 1: Exportar `WEEKLY_SCHEDULE_UPDATED_EVENT` em `src/lib/weeklySchedule.ts`**

Adicionar `export const WEEKLY_SCHEDULE_UPDATED_EVENT = 'medr1-weekly-schedule-updated';` logo abaixo de `WEEKLY_SCHEDULE_STORAGE_KEY`.

- [ ] **Step 2: Criar `src/components/analytics/RoutineConfigModal.tsx`**

Extrair o modal `"Configurar Rotina & Prova Alvo"` (prova alvo `UEPA | ENARE | SUS-SP | USP-SP`, dias ativos, slider `1h–8h`, ritmo `3,0 min/q` vs `2,2 min/q`, resumo ao vivo e fechamento por `Escape`/backdrop com `document.body.dataset.medr1ModalOpen = 'true'`). Ao salvar em `localStorage`, disparar `window.dispatchEvent(new Event(WEEKLY_SCHEDULE_UPDATED_EVENT))`.

- [ ] **Step 3: Sincronizar `WeeklyStudyScheduleCard.tsx` via `WEEKLY_SCHEDULE_UPDATED_EVENT`**

Remover o JSX duplicado do modal de dentro de `WeeklyStudyScheduleCard.tsx`, escutar `WEEKLY_SCHEDULE_UPDATED_EVENT` e `storage` para recarregar `config` instantaneamente, e manter o botão `"Editar rota"` / `"Configurar Rotina"` chamando `onRoutineModalOpenChange?.(true)` (com fallback local usando `RoutineConfigModal` quando `onRoutineModalOpenChange` não for passado).

---

### Task 4: Transições Seguras em `App.tsx` e Correção de Filtro Zumbi em `FlashcardsView.tsx`

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/flashcards/FlashcardsView.tsx`

**Interfaces:**
- Consumes: `shouldConfirmLeaveSimulado` de `src/lib/navigationState.ts`; `RoutineConfigModal` de `src/components/analytics/RoutineConfigModal.tsx`.
- Produces: `FlashcardsView` aceita `onConsumeExternalFilter?: () => void`.

- [ ] **Step 1: Centralizar transições e guarda de simulado em `App.tsx`**

- Criar helper `navigateToTab(nextTab: ActiveTab, opts?: { mode?: StudyMode })`:
  - Verifica `shouldConfirmLeaveSimulado(...)` e pede `window.confirm('Há um simulado em andamento. Deseja sair e encerrar a tentativa atual?')` antes de prosseguir.
  - Sempre que for para `questoes` em modo `'estudo'` (ou sair do simulado), reseta `setMode('estudo')`, `setSimuladoActive(false)` e `setSimuladoFinished(false)`.
- Conectar `TopBar` com `mode`, `simuladoActive`, `onSelectTab`, `onSelectSimulados`, `dueFlashcardsCount`, `errorNotebookCount`, `activeFilterCount`, `onUpdateDailyGoalTarget={store.setDailyGoalTarget}`.
- Corrigir `onOpenRoutineConfig={() => setRoutineModalOpen(true)}` (SEM `setActiveTab('inicio')`) e renderizar `<RoutineConfigModal open={routineModalOpen} onClose={() => setRoutineModalOpen(false)} flashcards={store.flashcards} />` na raiz de `App.tsx`.
- Corrigir `BatchFinishModal` em `App.tsx:1050-1054` para `"Voltar ao Início"` ir para `'inicio'` (e não `'desempenho'`).
- Passar `onConsumeExternalFilter={() => setFlashcardExternalFilter(null)}` para `FlashcardsView`.

- [ ] **Step 2: Consumir filtro externo e exibir chip removível em `FlashcardsView.tsx`**

- No `useEffect` de `externalFilter` (`FlashcardsView.tsx:219-265`), chamar `onConsumeExternalFilter?.()` ao final da aplicação do filtro.
- Na barra superior do modo Revisão (mesmo quando `showDeckControls === false`), quando `selectedArea !== 'all' || selectedTema !== ''`, renderizar um chip compacto removível (`<Tema ou Área> ×`) que limpa ambos os filtros em 1 clique.

---

### Task 5: Limpeza de Duplicação em `PerformanceDashboard.tsx` & Verificação Final

**Files:**
- Modify: `src/components/analytics/PerformanceDashboard.tsx:326-410`

**Interfaces:**
- Consumes: `GRANDES_AREAS`, `ParetoChart`, `KnowledgeGapHeatmap`, `GapRadarCard`, `DailyKnowledgeGapCard`, `WeakTopicsEvolutionChart`.
- Produces: Aba `Desempenho` dedicada exclusivamente a análises profundas, sem duplicar a Home.

- [ ] **Step 1: Remover `HomeExecutiveOverview` e `WeeklyStudyScheduleCard` de `PerformanceDashboard.tsx`**

Substituir o bloco superior duplicado (`lines 328-375`) por um cabeçalho enxuto de `Inteligência de Desempenho` com:
- Segmented Control Apple HIG (`Visão Geral`, `Pareto 80/20`, `Mapa de Calor`, `Radar de Lacunas`) — já aberto por padrão (sem exigir clique em `showDeepAnalytics`).
- Botão `"Calibrar Modelos"` para abrir o modal psicométrico (`estimador` / `bussola` / `psicometrico`) quando desejado.

- [ ] **Step 2: Rodar verificação completa**

Run:
```bash
npm test && npm run lint && npm run build
```
Expected:
- `npm test`: todos os testes Vitest passando (41 existentes + 3 novos em `navigationState.test.ts` = 44 testes).
- `npm run lint`: 0 erros TypeScript.
- `npm run build`: `dist/` + `server.mjs` gerados com exit code 0.
