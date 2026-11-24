# Home de Inteligência de Desempenho — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transformar a visão de Inteligência de Desempenho na Tela Inicial (Home) padrão do MedR1, exibindo acima da dobra 3 KPIs executivos, o Gargalo Prioritário acionável e um corpo compacto em 2 colunas (5 Grandes Áreas + Trajetória de Simulados), enquanto calibração avançada e detalhes do modelo psicométrico ficam sob demanda em painel/modal colapsável.

**Architecture:** Uma camada pura (`src/lib/homeIntelligence.ts`) agrega sem duplicar fórmulas os resultados de `residenciaEstimator.ts`, `cutoffProjection.ts` e `psychometricApproval.ts`. Um componente focado (`HomeExecutiveOverview.tsx`) renderiza a Home acima da dobra, e `PerformanceDashboard.tsx` encapsula os painéis de calibração e análises secundárias em progressive disclosure, enquanto `App.tsx` e `Sidebar.tsx` promovem `desempenho` como rota inicial padrão.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Recharts, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Requisitos fornecidos pelo usuário em 2026-11-23 (Home de Inteligência de Desempenho acima da dobra, 100% de preservação dos cálculos estatísticos/psicométricos, progressive disclosure e preservação dos 15 testes do Vitest).

## Global Constraints

- Rota/aba inicial padrão ao abrir o app deve ser `'desempenho'` em `src/App.tsx`.
- Preservar 100% das fórmulas existentes em `src/lib/residenciaEstimator.ts` (Cochran, IC 95%), `src/lib/cutoffProjection.ts` (Bússola/Trajetória) e `src/lib/psychometricApproval.ts` (Wilson/Wald/TCT, Etapas 1/2/3, curva `D = Y - C`) — zero reimplementação paralela.
- Estética clínica consistente: `tabular-nums` em todos os números, `strokeWidth={1.5}` em ícones Lucide, superfícies limpas sem bordas redundantes, ação primária `#007AFF`, alertas críticos `#FF3B30/10` + `#D70015`.
- Preservar todos os 15 testes existentes no Vitest (`src/hooks/useMedR1Store.test.ts` e `server.test.ts`) + `npm run lint` e `npm run build` verdes.

## Review Focus

- **Banco zerado (0 respostas em uma ou mais áreas):** `buildHomeIntelligenceSummary` não pode produzir `NaN`/`Infinity` e deve indicar claramente quando a estimativa ainda tem baixa amostra, mantendo o botão de prática funcional.
- **Zero simulados na escala selecionada (ex.: `tri_outra` sem simulados TRI):** O bloco de Trajetória/Bússola deve exibir estado vazio claro com CTA para registrar simulado sem misturar escalas diferentes.
- **Sincronização de calibração em tempo real:** Alterar presets (UEPA/ENARE/SUS-SP/USP-SP), média de corte, desvio-padrão ou suavização de Laplace dentro do modal `"Calibrar parâmetros & detalhes do modelo"` deve atualizar imediatamente os 3 KPIs do Hero Executivo (via `ESTIMATOR_UPDATED_EVENT` / estado compartilhado).
- **Modal de calibração e teclado (`Escape`):** Fechar com `Escape` e sinalizar `document.body.dataset.medr1ModalOpen` enquanto aberto.
- **Responsividade (mobile vs desktop):** Corpo em 2 colunas no desktop (`lg:grid-cols-12`), empilhamento limpo no mobile sem overflow horizontal na tabela das 5 Grandes Áreas.

---

### Task 1: Promover Inteligência de Desempenho para Aba Inicial Padrão

**Files:**
- Modify: `src/App.tsx:32-45`
- Modify: `src/components/layout/Sidebar.tsx:93-135`
- Test: `npm test && npm run lint`

**Interfaces:**
- Produces: `activeTab` inicializado como `'desempenho'` em `src/App.tsx`; item `desempenho` em 1º lugar na navegação da `Sidebar`.

- [ ] **Step 1: Atualizar aba inicial em `src/App.tsx`**
  Alterar `useState<ActiveTab>('questoes')` para `useState<ActiveTab>('desempenho')` em `src/App.tsx`.
- [ ] **Step 2: Reordenar navegação primária em `src/components/layout/Sidebar.tsx`**
  Posicionar `desempenho` (rótulo `"Início · Desempenho"` ou `"Desempenho"`) como primeiro item de `navItems`, mantendo `questoes`, `caderno_erros`, `flashcards`, `ranking` e `importar` acessíveis em 1 clique.
- [ ] **Step 3: Verificar testes e tipos**
  Run: `npm test && npm run lint`
  Expected: 15/15 testes passando, 0 erros de TypeScript.

---

### Task 2: Criar Camada Pura `homeIntelligence.ts` (Reuso 100% dos Motores Existentes)

**Files:**
- Create: `src/lib/homeIntelligence.ts`
- Test: `src/lib/homeIntelligence.test.ts`

**Interfaces:**
- Consumes: `calcularEstimativaResidencia`, `identificarGargaloPrioritario` (`src/lib/residenciaEstimator.ts`), `computeCutoffProjection` (`src/lib/cutoffProjection.ts`), `computePsychometricApproval` (`src/lib/psychometricApproval.ts`).
- Produces:
  - `export interface HomeIntelligenceSummary` (contendo `projectedScore`, `ci95: [number, number]`, `approvalProbabilityPct`, `distanceToCutoff`, `cutoffScore`, `cutoffLabel`, `bottleneck: { grandeAreaId: GrandeAreaId; label: string; accuracyPct: number; answered: number } | null`, `areaTableRows`, `trajectoryPoints`, `hasSufficientData`).
  - `export function buildHomeIntelligenceSummary(params: HomeIntelligenceInput): HomeIntelligenceSummary`.

- [ ] **Step 1: Escrever testes unitários falhando em `src/lib/homeIntelligence.test.ts`**
  Cobrir:
  1. Cálculo consistente com os motores reais (`projectedScore`, `ci95`, `approvalProbabilityPct`, `distanceToCutoff`) para 5 áreas preenchidas;
  2. Identificação correta do `bottleneck` (menor aproveitamento entre as 5 áreas);
  3. Edge case de 0 respostas (sem `NaN`, `hasSufficientData: false`);
  4. Edge case de 0 simulados cadastrados (trajetória vazia sem quebrar projeção).
- [ ] **Step 2: Rodar o teste e confirmar falha inicial (RED)**
  Run: `npx vitest run src/lib/homeIntelligence.test.ts`
  Expected: FAIL (`Cannot find module './homeIntelligence'`).
- [ ] **Step 3: Implementar `buildHomeIntelligenceSummary` em `src/lib/homeIntelligence.ts`**
  Orquestrar exclusivamente `calcularEstimativaResidencia`, `identificarGargaloPrioritario`, `computeCutoffProjection` e `computePsychometricApproval` sem duplicar fórmulas.
- [ ] **Step 4: Rodar os testes e confirmar aprovação (GREEN)**
  Run: `npx vitest run src/lib/homeIntelligence.test.ts`
  Expected: PASS (4/4 testes passando).

---

### Task 3: Construir `HomeExecutiveOverview.tsx` (Hero Executivo + 2 Colunas Acima da Dobra)

**Files:**
- Create: `src/components/analytics/HomeExecutiveOverview.tsx`

**Interfaces:**
- Consumes: `HomeIntelligenceSummary` (`src/lib/homeIntelligence.ts`).
- Produces: `export function HomeExecutiveOverview(props: HomeExecutiveOverviewProps)` com callbacks `onPracticeArea`, `onGoToQuestionBank`, `onStartQuickSimulado`, `onGoToErrorNotebook`, `onOpenCalibrationModal`.

- [ ] **Step 1: Criar cabeçalho enxuto com ações rápidas**
  Título `"Inteligência de Desempenho"`, subtítulo com instituição/especialidade alvo, atalhos discretos (`Banco de Questões`, `Simulado`, `Caderno de Erros`) e botão `"Calibrar parâmetros & detalhes do modelo"`.
- [ ] **Step 2: Construir Hero Executivo (grid 4 colunas no desktop: 3 KPIs + 1 Gargalo Prioritário)**
  - KPI 1: **Nota Projetada** + faixa `IC 95%` em `tabular-nums`.
  - KPI 2: **Probabilidade de Aprovação** (`%` + badge discreto de status).
  - KPI 3: **Distância até a Meta / Corte** (`Δ` em pontos/percentual + nota alvo).
  - Card 4: **Gargalo Prioritário** destacando a Grande Área com menor aproveitamento e botão primário `#007AFF` `"Treinar <Área>"` chamando `onPracticeArea`.
- [ ] **Step 3: Construir Corpo Principal em 2 colunas (`lg:grid-cols-12`)**
  - Esquerda (`lg:col-span-7`): Tabela enxuta das **5 Grandes Áreas** (Área, Peso, Aproveitamento, IC 95% e botão compacto `"Praticar"`).
  - Direita (`lg:col-span-5`): **Trajetória dos Simulados / Bússola** compacta (gráfico Recharts compacto `h-[210px]` com linha de corte + estado vazio claro quando sem simulados + atalho para abrir o registro no modal).
- [ ] **Step 4: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 4: Progressive Disclosure em `PerformanceDashboard.tsx` (Modal de Calibração + Seção Expansível)

**Files:**
- Modify: `src/components/analytics/PerformanceDashboard.tsx`
- Modify: `src/App.tsx` (passar callback `onStartQuickSimulado` para `PerformanceDashboard`, se ainda não existir)

**Interfaces:**
- Consumes: `HomeExecutiveOverview`, `buildHomeIntelligenceSummary`, `StratifiedApprovalCard`, `CutoffProjectionCard`, `ApprovalProbabilityCard`.
- Produces: Home enxuta acima da dobra com modal `"Calibrar parâmetros & detalhes do modelo"` (fechável por `Esc`, com abas segmentadas: `Parâmetros & Presets`, `Bússola & Simulados`, `Modelo Psicométrico (Etapas 1–3)`) e bloco expansível `"Explorar análises detalhadas"` recolhido por padrão.

- [ ] **Step 1: Conectar `buildHomeIntelligenceSummary` + `ESTIMATOR_UPDATED_EVENT` em `PerformanceDashboard.tsx`**
  Ler as configurações persistidas em `ESTIMATOR_STORAGE_KEY` e escutar `ESTIMATOR_UPDATED_EVENT` para que qualquer ajuste feito no modal reflita imediatamente nos 3 KPIs do Hero Executivo.
- [ ] **Step 2: Substituir o empilhamento inicial pelo `HomeExecutiveOverview` + Modal de Calibração**
  Renderizar `StratifiedApprovalCard`, `CutoffProjectionCard` e `ApprovalProbabilityCard` dentro do modal/drawer com Segmented Control (3 abas), garantindo que todas as fórmulas, presets (`UEPA/ENARE/SUS-SP/USP-SP`), suavização de Laplace, Etapas 1/2/3 e curva `D = Y - C` fiquem 100% intactos e acessíveis em 1 clique.
- [ ] **Step 3: Recolher análises secundárias abaixo da dobra**
  Encapsular `GapRadarCard`, `DailyKnowledgeGapCard`, `WeakTopicsEvolutionChart`, `ParetoChart` e `KnowledgeGapHeatmap` em um toggle `"Explorar análises detalhadas (Radar, Pareto e Mapa de Calor)"` fechado por padrão.
- [ ] **Step 4: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 5: Validação Final Completa

**Files:**
- Verify: `src/hooks/useMedR1Store.test.ts`, `server.test.ts`, `src/lib/homeIntelligence.test.ts`

- [ ] **Step 1: Rodar toda a suíte Vitest**
  Run: `npm test`
  Expected: 100% dos testes passando (15 existentes + 4 novos = 19 testes).
- [ ] **Step 2: Rodar typecheck e build de produção**
  Run: `npm run lint && npm run build`
  Expected: Exit code `0`, `dist/` e `server.mjs` gerados sem erros.
