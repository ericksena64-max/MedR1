# Grade Semanal com Assuntos Personalizados por Prova Alvo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir a Grade Semanal de 7 colunas da Home do MedR1 para exibir rótulos relativos (`Ontem`, `Hoje`, `Amanhã`, `Em X dias`), bloco de Flashcards e barras/cartões individualizados de assuntos distribuídos conforme a prova alvo (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`), lacunas de desempenho do aluno e horas configuradas por dia, com status discreto (`Não iniciado`, `Em progresso`, `Finalizado`) e clique direto para treinar cada tema.

**Architecture:** O motor puro `src/lib/weeklySchedule.ts` passa a receber `topicRows` (desempenho por tema) e `targetExam` (`UEPA | ENARE | SUS-SP | USP-SP`) para pontuar e distribuir blocos compactos de assuntos nos dias ativos da semana sem duplicar em dias consecutivos nem preencher dias de descanso. `WeeklyStudyScheduleCard.tsx` renderiza o bloco de Flashcards + as barras de assuntos clicáveis em cada coluna e inclui o seletor de prova alvo no modal `"Configurar Rotina"`, enquanto `HomeUnifiedView.tsx` e `App.tsx` conectam o clique de cada tema ao filtro de tópico do Banco de Questões (`handleFilterQuestionsFromPareto`).

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Requisitos do usuário em 2026-11-23 (grade semanal 7 colunas com `< / >` e rótulos relativos `Ontem/Hoje/Amanhã/Em X dias`, barras/cartões de assuntos individualizados por prova alvo e desempenho, bloco de Flashcards por dia, status `Não iniciado / Em progresso / Finalizado`, clique para iniciar treino do tema, layout limpo sem rolagem excessiva e testes Vitest).

## Global Constraints

- Preservar integralmente os ritmos `2,2 min/q` (Ritmo de Prova) e `3,0 min/q` (Estudo + Comentário) e o desconto de `~30s` (`0,5 min`) por flashcard antes de repartir as questões líquidas do dia entre os blocos de assunto.
- Manter o modal `"Configurar Rotina"` recolhido por padrão, com seletor de Prova Alvo (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`), dias ativos (`Dom`–`Sáb`), slider `1h–8h` e ritmo (`2,2` vs `3,0 min/q`).
- Estética clínica unificada (`#F8FAFC`/`#0B0F17`, `rounded-xl`, borda 1px, `#007AFF`, `tabular-nums`, `strokeWidth={1.5}`).
- Preservar todos os 34 testes existentes do Vitest + adicionar testes unitários cobrindo distribuição por assunto, prova alvo, rótulos relativos e status.

## Review Focus

- **Dia ativo com 0 questões líquidas (saturado por flashcards):** Não gerar blocos de assunto com `0q`; exibir apenas o bloco de Flashcards com aviso silencioso de que o tempo do dia está dedicado à revisão.
- **Poucos temas disponíveis ou aluno sem histórico (`topicRows` vazio):** Usar catálogo padrão de alta incidência da prova alvo selecionada (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`) para nunca deixar dias ativos vazios.
- **Conservação da meta diária:** A soma de `estimatedQuestions` de todos os blocos de assunto de um dia ativo deve igualar exatamente a meta líquida diária de questões daquele dia.
- **Clique no assunto:** Deve abrir o Banco de Questões já filtrado naquele tema específico (com fallback para a Grande Área se o banco filtrado não tiver questões exatas do tema, via `handleFilterQuestionsFromPareto`).
- **Compactação vertical:** Limitar a 1–3 barras compactas por coluna (conforme horas/dia) para que os 7 dias caibam limpos acima da dobra sem rolagem excessiva.

---

### Task 1: Evoluir Motor `src/lib/weeklySchedule.ts` (Assuntos por Prova Alvo, Rótulos Relativos e Status) + Testes

**Files:**
- Modify: `src/lib/weeklySchedule.ts`
- Modify: `src/lib/weeklySchedule.test.ts`

**Interfaces:**
- Consumes: `Flashcard`, `GrandeAreaId` (`src/types/medical.ts`).
- Produces:
  - `export type TargetExamPreset = 'UEPA' | 'ENARE' | 'SUS-SP' | 'USP-SP'`
  - `export type TopicBlockStatus = 'nao_iniciado' | 'em_progresso' | 'finalizado'`
  - `export interface WeeklyTopicInput { grandeAreaId: GrandeAreaId; label: string; shortArea: string; studentPct: number; answered: number }`
  - `export interface WeeklyTopicBlock { id: string; topic: string; grandeAreaId: GrandeAreaId; shortArea: string; estimatedQuestions: number; estimatedMinutes: number; answeredToday: number; status: TopicBlockStatus }`
  - `WeeklyDayPlan` estendido com `relativeLabel: string` e `topicBlocks: WeeklyTopicBlock[]`
  - `WeeklyScheduleConfig` estendido com `targetExam: TargetExamPreset`

- [ ] **Step 1: Adicionar testes unitários em `src/lib/weeklySchedule.test.ts` (RED)**
  Cobrir:
  1. Rótulos relativos exatos (`Ontem`, `Hoje`, `Amanhã`, `Em 2 dias`, `Há 2 dias`);
  2. Distribuição de blocos de assunto apenas em dias ativos (dias inativos têm `topicBlocks: []`), com soma das questões dos blocos igual à meta líquida do dia;
  3. Priorização sensível à prova alvo (`UEPA` vs `USP-SP`) e ao menor aproveitamento do aluno;
  4. Cálculo de status (`nao_iniciado`, `em_progresso`, `finalizado`) a partir de `answeredTodayByTopic`.
- [ ] **Step 2: Rodar teste e confirmar falha inicial (RED)**
  Run: `npx vitest run src/lib/weeklySchedule.test.ts`
  Expected: FAIL (propriedades/tipos ainda não implementados).
- [ ] **Step 3: Implementar distribuição de assuntos e rótulos relativos em `src/lib/weeklySchedule.ts`**
  Manter retrocompatibilidade com chamadas existentes de `buildWeeklySchedule` (`topicRows` e `answeredTodayByTopic` opcionais).
- [ ] **Step 4: Rodar testes e confirmar aprovação (GREEN)**
  Run: `npx vitest run src/lib/weeklySchedule.test.ts`
  Expected: PASS (todos os testes de `weeklySchedule.test.ts` passando).

---

### Task 2: Atualizar `WeeklyStudyScheduleCard.tsx` com Rótulos Relativos, Barras de Assuntos e Prova Alvo no Modal

**Files:**
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx`

**Interfaces:**
- Consumes: `WeeklyDayPlan.relativeLabel`, `WeeklyDayPlan.topicBlocks`, `TargetExamPreset` (`src/lib/weeklySchedule.ts`).
- Produces: Colunas de 7 dias com cabeçalho `Dia + Data + Rótulo Relativo`, bloco compacto de Flashcards, barras de assuntos clicáveis com nome + área/`Xq` em `tabular-nums` + status discreto, e seletor de Prova Alvo (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`) dentro do modal `"Configurar Rotina"`.

- [ ] **Step 1: Adicionar props opcionais `topicRows`, `answeredTodayByTopic` e `onPracticeTopic` em `WeeklyStudyScheduleCard.tsx`**
- [ ] **Step 2: Renderizar rótulo relativo, bloco de Flashcards e barras compactas de assuntos por coluna**
  Cada barra de assunto exibe nome truncado limpo, área curta + `Xq` em `tabular-nums` e ponto/badge discreto de status (`Não iniciado`, `Em progresso`, `Finalizado`), disparando `onPracticeTopic` ao clicar.
- [ ] **Step 3: Adicionar seletor de Prova Alvo (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`) no modal `"Configurar Rotina"`**
  Recalcula os assuntos distribuídos nos 7 dias em tempo real ao trocar a prova alvo.
- [ ] **Step 4: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 3: Conectar `topicRows`, `answeredTodayByTopic` e `onPracticeTopic` na Home (`HomeUnifiedView.tsx`, `PerformanceDashboard.tsx`, `App.tsx`)

**Files:**
- Modify: `src/components/analytics/HomeUnifiedView.tsx`
- Modify: `src/components/analytics/PerformanceDashboard.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `store.analytics.topicRows`, `store.answers`, `store.allQuestions`, `handleFilterQuestionsFromPareto`.
- Produces: Clique em qualquer barra de assunto na Home navega direto para o Banco de Questões filtrado naquele tema, e respostas concluídas no dia atualizam o status (`Em progresso` / `Finalizado`) na grade.

- [ ] **Step 1: Calcular `answeredTodayByTopic` (usando data local) e repassar `topicRows` + `onPracticeTopic` de `App.tsx` → `HomeUnifiedView.tsx` → `WeeklyStudyScheduleCard.tsx`**
- [ ] **Step 2: Repassar também em `PerformanceDashboard.tsx` para consistência entre abas**
- [ ] **Step 3: Verificar tipagem**
  Run: `npm run lint`
  Expected: 0 erros.

---

### Task 4: Validação Completa (`npm test`, `npm run lint`, `npm run build`)

**Files:**
- Verify: todos os 6 arquivos de teste + TypeScript + build de produção.

- [ ] **Step 1: Rodar suíte Vitest completa**
  Run: `npm test`
  Expected: 6 arquivos, 100% dos testes passando.
- [ ] **Step 2: Rodar typecheck e build de produção**
  Run: `npm run lint && npm run build`
  Expected: Exit code `0`, `dist/` e `server.mjs` gerados sem erros.
