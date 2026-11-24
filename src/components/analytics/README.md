# `src/components/analytics` — Home Unificada, Grade Semanal e Painéis Analíticos

## Overview
Camada visual de inteligência acadêmica e página inicial do MedR1. Entrega a experiência da Home unificada acima da dobra — combinando a grade semanal dinâmica de 7 colunas com o resumo executivo de aprovação — e mantém as calibrações psicométricas e gráficos de aprofundamento acessíveis sob demanda sem poluição visual.

## Interface
- **Home Unificada (`HomeUnifiedView.tsx`)**: `HomeUnifiedView` — ponto de entrada da aba `Início`, compondo `WeeklyStudyScheduleCard` no topo, `HomeExecutiveOverview` logo abaixo e um modal de calibração sob demanda (`estimador`, `bussola`, `psicometrico`).
- **Grade Semanal Dinâmica (`WeeklyStudyScheduleCard.tsx`)**: `WeeklyStudyScheduleCard` — grade de 7 colunas (Dom a Sáb) com navegação entre semanas (`<`, `Hoje`, `>`), rótulos relativos (`Ontem`, `Hoje`, `Amanhã`, `Em X dias`), bloco de flashcards e 1 a 3 barras/cartões de assuntos individualizados por prova alvo com status (`Não iniciado`, `Em progresso`, `Finalizado`) e clique direto para iniciar o treino; inclui o modal `"Configurar Rotina"` (prova alvo, dias ativos, horas/dia de 1h a 8h e ritmo `2,2 min/q` vs `3,0 min/q`).
- **Resumo Executivo (`HomeExecutiveOverview.tsx`)**: `HomeExecutiveOverview` e `CalibrationModalTab` — apresenta os 3 KPIs centrais de aprovação, o CTA do gargalo prioritário e a tabela compacta das 5 grandes áreas médicas.
- **Dashboard e Calibrações Sob Demanda**:
  - `PerformanceDashboard.tsx`: `PerformanceDashboard`, `PerformanceRow` (visão consolidada de desempenho por área/subtema e disparo dos modais analíticos).
  - `StratifiedApprovalCard.tsx`: `StratifiedApprovalCard` (estimador estratificado de Cochran com presets de banca e persistência compartilhada).
  - `CutoffProjectionCard.tsx`: `CutoffProjectionCard` (bússola de projeção até a nota de corte com margens configuráveis).
  - `ApprovalProbabilityCard.tsx`: `ApprovalProbabilityCard` (calibração psicométrica Wilson/Wald/TCT).
- **Componentes de Diagnóstico Complementares**: `DailyKnowledgeGapCard.tsx`, `GapRadarCard.tsx`, `KnowledgeGapHeatmap.tsx`, `ParetoChart.tsx`, `WeakTopicsEvolutionChart.tsx`.

## Invariants
- **Acima da dobra e sem rolagem excessiva**: `HomeUnifiedView` mantém o modal `"Configurar Rotina"` (em `WeeklyStudyScheduleCard`) e os painéis avançados de calibração (`StratifiedApprovalCard`, `CutoffProjectionCard`, `ApprovalProbabilityCard`) recolhidos por padrão.
- **Sincronia imediata**: Alterar `targetExam`, dias ativos, horas/dia ou ritmo em `"Configurar Rotina"` atualiza instantaneamente a grade semanal e os assuntos sugeridos; alterações no estimador propagam via `ESTIMATOR_UPDATED_EVENT` e evento `storage`.
- **Direcionamento direto da Home**: Clicar em um bloco de assunto ou de flashcards na grade semanal navega diretamente para o filtro/sessão correspondente de questões ou revisão FSRS.
- **Estética clínica e tipografia numérica**: Superfícies em `rounded-xl` com borda sutil de 1px, destaque primário `#007AFF` e `tabular-nums` em todas as métricas, estimativas de questões, contagens de flashcards e percentuais.

## Side Effects
- **Persistência em `localStorage`**: `WeeklyStudyScheduleCard` lê e grava `WEEKLY_SCHEDULE_STORAGE_KEY` (`medr1_weekly_schedule_v1`); `HomeUnifiedView`, `PerformanceDashboard` e `StratifiedApprovalCard` leem/sincronizam `ESTIMATOR_STORAGE_KEY` (`medr1_residencia_estimator_v1`).
- **Listeners globais de janela**: Registro e limpeza (`useEffect`) de listeners para `keydown` (fechamento de modais com `Escape`), `storage` e `ESTIMATOR_UPDATED_EVENT`.

## Verification
- Run: `npm test`
- A lógica subjacente consumida por esta pasta é verificada por `src/lib/weeklySchedule.test.ts` e `src/lib/homeIntelligence.test.ts` (e a checagem de tipos por `npm run lint`).
