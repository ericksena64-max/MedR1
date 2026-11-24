# Unificação do Design System & Layout Clínico — MedR1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Unificar o design system e o layout do MedR1 em torno de tokens clínicos consistentes (`#F8FAFC` / `#0B0F17`, bordas sutis de 1px, `rounded-xl`, `#007AFF`, `tabular-nums`, `max-w-[760px]` para leitura), com TopBar de 48px, Sidebar limpa com os 5 módulos principais e Home acima da dobra combinando Grade Semanal Dinâmica + Resumo Executivo de Aprovação + 5 Grandes Áreas.

**Architecture:** Os tokens de cor/superfície ficam centralizados em `src/index.css`. O shell (`TopBar.tsx` + `Sidebar.tsx` + `App.tsx`) padroniza a navegação em 5 módulos primários + acesso rápido à configuração de rotina. A Home (`inicio`) passa a renderizar o layout unificado em 2 blocos (Grade Semanal no topo + 2 colunas abaixo: Resumo Executivo à esquerda e 5 Grandes Áreas à direita), reutilizando 100% de `weeklySchedule.ts`, `homeIntelligence.ts` e o modal psicométrico sob demanda, enquanto `QuestionCard.tsx`, `SimuladoBar.tsx` e `FlashcardsView.tsx` recebem alinhamento fino de tokens sem alterar regras ou atalhos.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Recharts, Vitest.

**Spec:** Requisitos do usuário em 2026-11-23 (tokens `#F8FAFC`/`#0B0F17`, `rounded-xl`, `max-w-[760px]`, `#007AFF`, TopBar 48px, Sidebar com 5 módulos principais, Home em 2 blocos com drawer/modal "Configurar Rotina" recolhido por padrão, consistência em QuestionCard/SimuladoBar/Flashcards e 34 testes Vitest intactos).

## Global Constraints

- Preservar 100% dos cálculos estatísticos (`residenciaEstimator.ts`, `cutoffProjection.ts`, `psychometricApproval.ts`, `weeklySchedule.ts`), rotas, atalhos de teclado e os 34 testes do Vitest.
- Superfícies globais: `#F8FAFC` (light) e `#0B0F17` (dark); cards `rounded-xl` com borda sutil de 1px; destaque primário `#007AFF`; `tabular-nums` em todos os números/percentuais/contadores.
- Largura de leitura de questões: `max-w-[760px]` em `App.tsx` / `QuestionCard.tsx`.
- TopBar compacta com altura `48px` (`h-12`).
- Manter botão `"Confirmar"` inline na lateral esquerda da alternativa selecionada (`QuestionCard.tsx`), `"Finalizar"` sempre acessível (`SimuladoBar.tsx` / `App.tsx`) e layout Anki puro só Frente + Resposta (`FlashcardsView.tsx`).

## Review Focus

- **Rotas secundárias preservadas:** Reorganizar a Sidebar para destacar os 5 módulos principais (`Início`, `Banco de Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`) não pode remover acesso a `Desempenho`, `Ranking Ao Vivo` ou `Importar Provas IA`.
- **Sincronia entre TopBar "Rotina" e Grade Semanal:** Abrir o drawer/modal `"Configurar Rotina"` pelo botão da TopBar ou pelo botão do card deve controlar o mesmo estado de configuração e atualizar a grade em tempo real.
- **Bloqueio de atalhos em modais:** O modal/drawer `"Configurar Rotina"` deve sinalizar `document.body.dataset.medr1ModalOpen = 'true'` e fechar com `Escape`.
- **Zero regressão de contraste no dark mode (`#0B0F17`):** Cards em `#131926` com borda `border-white/[0.08]` e texto legível em ambos os temas.
- **Testes e build verdes:** Todos os 34 testes existentes no Vitest + `npm run lint` + `npm run build` sem erros.

---

### Task 1: Padronizar Tokens Visuais em `src/index.css` e Contêiner de Leitura em `src/App.tsx`

**Files:**
- Modify: `src/index.css:1-40`
- Modify: `src/App.tsx` (canvas global `#F8FAFC` / `dark:bg-[#0B0F17]` e coluna de leitura `max-w-[760px]`)

**Interfaces:**
- Produces: Variáveis CSS `--med-canvas`, `--med-surface`, `--med-surface-subtle`, `--med-border`, `--med-accent` aplicadas globalmente.

- [ ] **Step 1: Definir tokens clínicos light/dark em `src/index.css`**
  Adicionar `:root` e `.dark` com `#F8FAFC` / `#0B0F17`, superfícies `#FFFFFF` / `#131926`, bordas `1px` sutis e `#007AFF`.
- [ ] **Step 2: Atualizar canvas e largura de leitura (`max-w-[760px]`) em `src/App.tsx`**
  Trocar `#EDF2FA`/`#13161B` pelo token unificado `#F8FAFC`/`#0B0F17` e ajustar o wrapper da coluna de questões para `max-w-[760px]`.
- [ ] **Step 3: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 2: Shell de Navegação Enxuto (`TopBar.tsx` 48px + `Sidebar.tsx` 5 Módulos Principais)

**Files:**
- Modify: `src/components/layout/TopBar.tsx`
- Modify: `src/components/layout/Sidebar.tsx`
- Modify: `src/App.tsx` (passar `onOpenRoutineConfig` para `TopBar` e `onSelectSimulados` para `Sidebar`)

**Interfaces:**
- Consumes: `dailyGoal`, `themeMode`, `onChangeThemeMode`.
- Produces: TopBar `h-12` (48px) com contexto da página, streak/meta diária (`tabular-nums`), seletor `Claro/Escuro/Sistema` e botão rápido `Rotina`; Sidebar com 5 módulos principais (`Início`, `Banco de Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`) + seção secundária discreta (`Desempenho`, `Ranking`, `Importar`).

- [ ] **Step 1: Compactar `TopBar.tsx` para altura fixa de 48px (`h-12`)**
  Exibir contexto da página, badge discreto de streak/meta diária (`tabular-nums`), alternador de tema (`Claro/Escuro/Sistema`) e botão rápido `Rotina`.
- [ ] **Step 2: Organizar `Sidebar.tsx` com os 5 módulos principais**
  Agrupar `Início`, `Banco de Questões`, `Simulados`, `Flashcards` e `Caderno de Erros` como navegação principal, mantendo `Desempenho`, `Ranking` e `Importar Provas` abaixo de um divisor discreto.
- [ ] **Step 3: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 3: Home Unificada Acima da Dobra (`WeeklyStudyScheduleCard.tsx` + `HomeUnifiedView.tsx` + `App.tsx`)

**Files:**
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx` (suportar modal/drawer `"Configurar Rotina"` controlado externamente via `routineModalOpen` / `onRoutineModalOpenChange`, recolhido por padrão)
- Create: `src/components/analytics/HomeUnifiedView.tsx`
- Modify: `src/App.tsx` (renderizar `HomeUnifiedView` na aba `'inicio'`)

**Interfaces:**
- Consumes: `WeeklyStudyScheduleCard`, `buildHomeIntelligenceSummary`, `readPersistedEstimatorConfig`, `ESTIMATOR_STORAGE_KEY`, `ESTIMATOR_UPDATED_EVENT`.
- Produces: Home em 2 blocos acima da dobra:
  - **Bloco Superior:** Grade Semanal Dinâmica (`Dom`–`Sáb`) com `< Hoje >`, destaque no dia atual e modal `"Configurar Rotina"` (recolhido por padrão).
  - **Bloco Inferior (2 colunas `lg:grid-cols-12`):** Esquerda (`lg:col-span-5`) = Resumo Executivo de Aprovação (3 KPIs + CTA do Gargalo Prioritário); Direita (`lg:col-span-7`) = Tabela compacta das 5 Grandes Áreas (peso, aproveitamento, IC 95%, `Praticar`) + acesso ao modal psicométrico avançado.

- [ ] **Step 1: Converter painel "Configurar" de `WeeklyStudyScheduleCard.tsx` em drawer/modal limpo `"Configurar Rotina"`**
  Recolhido por padrão, fechável por `Esc`/backdrop, sincronizado em tempo real com a grade e acionável também pela TopBar.
- [ ] **Step 2: Criar `HomeUnifiedView.tsx` combinando Grade Semanal + 2 Colunas Executivas**
  Reutilizar 100% de `buildHomeIntelligenceSummary` (com sincronia via `ESTIMATOR_UPDATED_EVENT`) e abrir `Desempenho` / modal psicométrico sob demanda.
- [ ] **Step 3: Conectar `HomeUnifiedView` à aba `'inicio'` em `src/App.tsx`**
- [ ] **Step 4: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 4: Alinhamento de Tokens nas Telas de Estudo (`QuestionCard.tsx`, `SimuladoBar.tsx`, `FlashcardsView.tsx`)

**Files:**
- Modify: `src/components/questions/QuestionCard.tsx`
- Modify: `src/components/questions/SimuladoBar.tsx`
- Modify: `src/components/flashcards/FlashcardsView.tsx`

**Interfaces:**
- Preserves: botão `"Confirmar"` na lateral esquerda da alternativa selecionada, `"Finalizar"` sempre acessível, atalhos de teclado (`A–E`, `Enter`, `Espaço`, `1–4`, `Z`), tipografia adaptativa e todos os testes existentes.

- [ ] **Step 1: Harmonizar superfícies (`rounded-xl`, `border-slate-200/80 dark:border-white/[0.08]`, `dark:bg-[#131926]`, `#007AFF`) nos 3 componentes**
  Sem alterar lógica de negócio, atalhos ou estrutura funcional.
- [ ] **Step 2: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 5: Validação Final Completa (`npm test`, `npm run lint`, `npm run build`)

**Files:**
- Verify: todos os 6 arquivos de teste (34 testes) + TypeScript + build de produção.

- [ ] **Step 1: Rodar suíte Vitest completa**
  Run: `npm test`
  Expected: 6 arquivos, 34/34 testes passando.
- [ ] **Step 2: Rodar typecheck e build de produção**
  Run: `npm run lint && npm run build`
  Expected: Exit code `0`, `dist/` e `server.mjs` gerados sem erros.
