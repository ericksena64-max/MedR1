# `src/components/analytics` — Home Unificada, Grade Semanal e Painéis Analíticos

## Overview
Camada visual de inteligência acadêmica e página inicial do MedR1. Entrega a experiência da Home unificada acima da dobra — combinando a grade semanal dinâmica de 7 colunas (`WeeklyStudyScheduleCard`), o explorador de cadeiras médicas (`SpecialtyExplorerCard`) e o resumo executivo de aprovação (`HomeExecutiveOverview`) — além dos painéis analíticos aprofundados (`PerformanceDashboard`), calibrações psicométricas sob demanda e radar de lacunas.

## Interface
- **Home Unificada (`HomeUnifiedView.tsx`)**: `HomeUnifiedView` — ponto de entrada da aba `Início`, compondo `HomeGamificationStrip` (opcional), `WeeklyStudyScheduleCard`, `SpecialtyExplorerCard`, `HomeExecutiveOverview` e o modal de calibração sob demanda (`estimador`, `bussola`, `psicometrico`).
- **Grade Semanal Dinâmica e Rotina (`WeeklyStudyScheduleCard.tsx`, `RoutineConfigModal.tsx`)**:
  - `WeeklyStudyScheduleCard`: grade de 7 colunas (Dom a Sáb) com navegação entre semanas (`<`, `Hoje`, `>`), rótulos relativos, roadmap de semanas até a prova, bloco de flashcards e 1 a 3 cartões de assuntos por prova alvo com status (`Não iniciado`, `Em progresso`, `Finalizado`) e clique direto para iniciar o treino.
  - `RoutineConfigModal`, `RoutineConfigModalProps`: modal `"Configurar Rotina"` (múltiplas provas alvo ordenadas por prioridade, datas de prova, dias ativos, horas/dia de 1h a 8h, ritmo `2,2 min/q` vs `3,0 min/q` e dia de simulado).
- **Explorador de Cadeiras (`SpecialtyExplorerCard.tsx`)**: `SpecialtyExplorerCard`, `SpecialtyExplorerCardProps` — carrossel horizontal filtrável por Grande Área para acesso direto às especialidades médicas presentes no banco.
- **Resumo Executivo (`HomeExecutiveOverview.tsx`)**: `HomeExecutiveOverview`, `CalibrationModalTab` (`'estimador' | 'bussola' | 'psicometrico'`) — apresenta os 3 KPIs centrais de aprovação, o CTA do gargalo prioritário, tabela compacta das 5 grandes áreas e disparo do modal de calibração.
- **Dashboard e Calibrações Sob Demanda**:
  - `PerformanceDashboard.tsx`: `PerformanceDashboard`, `PerformanceRow` — visão consolidada de desempenho por área/tema, gráficos comparativos, evolução temporal e alternância entre seções (`visao_geral`, `pareto`, `mapa_calor`, `radar`) e modais analíticos.
  - `StratifiedApprovalCard.tsx`: `StratifiedApprovalCard` — estimador estratificado de Cochran com presets de banca, suavização de Laplace, série semanal (`/api/analytics/weekly-approval-series`) e persistência compartilhada.
  - `CutoffProjectionCard.tsx`: `CutoffProjectionCard` — bússola de projeção até a nota de corte com margens configuráveis e histórico de simulados.
  - `ApprovalProbabilityCard.tsx`: `ApprovalProbabilityCard` — calibração psicométrica (Binomial Wilson/Wald, TCT Lord & Novick, calibração OLS opcional e distribuição da nota de corte).
- **Componentes de Diagnóstico Complementares**:
  - `DailyKnowledgeGapCard.tsx`: `DailyKnowledgeGapCard` — sugestões diárias de flashcards ou geração de cards a partir de erros recentes.
  - `GapRadarCard.tsx`: `GapRadarCard`, `computeGapImpactScore` — top 5 tópicos críticos ranqueados por impacto de lacuna (com consulta opcional a `/api/analytics/gap-radar` e fallback local) e disparo de simulado direcionado.
  - `KnowledgeGapHeatmap.tsx`: `KnowledgeGapHeatmap` — mapa de calor de lacunas cruzando incidência da banca e acurácia individual.
  - `ParetoChart.tsx`: `ParetoChart` — curva Pareto 80/20 por banca e lista de tópicos de maior ROI.
  - `WeakTopicsEvolutionChart.tsx`: `WeakTopicsEvolutionChart` — evolução em 14/30 dias dos tópicos mais frágeis frente à mediana da comunidade.

## Invariants
- **Acima da dobra e sem rolagem excessiva**: `HomeUnifiedView` mantém `RoutineConfigModal` e os painéis avançados de calibração (`StratifiedApprovalCard`, `CutoffProjectionCard`, `ApprovalProbabilityCard`) recolhidos por padrão.
- **Sincronia imediata**: Alterar `targetExams`, datas, dias ativos, horas/dia ou ritmo em `RoutineConfigModal` atualiza instantaneamente a grade semanal via `WEEKLY_SCHEDULE_UPDATED_EVENT` e `storage`; alterações no estimador propagam via `ESTIMATOR_UPDATED_EVENT` e `storage`.
- **Bloqueio de atalhos globais durante modais**: Modais em `HomeUnifiedView`, `PerformanceDashboard` e `RoutineConfigModal` definem `document.body.dataset.medr1ModalOpen = 'true'` enquanto abertos e fecham com `Escape`.
- **Direcionamento direto da Home**: Clicar em um bloco de assunto ou de flashcards na grade semanal navega diretamente para o filtro/sessão correspondente de questões ou revisão FSRS.
- **Estética clínica e tipografia numérica**: Superfícies em `rounded-xl` com borda sutil de 1px, destaque primário `#007AFF` e `tabular-nums` em todas as métricas, estimativas de questões, contagens de flashcards e percentuais.

## Side Effects
- **Persistência em `localStorage`**: `WeeklyStudyScheduleCard`, `RoutineConfigModal` e `HomeUnifiedView` leem e/ou gravam `WEEKLY_SCHEDULE_STORAGE_KEY` (`medr1_weekly_schedule_v1`) e disparam `WEEKLY_SCHEDULE_UPDATED_EVENT`; `HomeUnifiedView`, `PerformanceDashboard` e `StratifiedApprovalCard` leem/sincronizam `ESTIMATOR_STORAGE_KEY` (`medr1_residencia_estimator_v1`) e disparam `ESTIMATOR_UPDATED_EVENT`.
- **Chamadas de rede (`fetch`)**: `GapRadarCard` faz `POST /api/analytics/gap-radar` (com `AbortController` e fallback local); `StratifiedApprovalCard` faz `POST /api/analytics/weekly-approval-series` (com `AbortController` e fallback silencioso).
- **Listeners globais e DOM**: Registro e limpeza (`useEffect`) de listeners para `keydown` (`Escape`), `storage`, `WEEKLY_SCHEDULE_UPDATED_EVENT` e `ESTIMATOR_UPDATED_EVENT`, além da flag `document.body.dataset.medr1ModalOpen` e `scrollBy` no carrossel de `SpecialtyExplorerCard`.

## Verification
- Run: `npm test`
- A lógica subjacente consumida por esta pasta é verificada por `src/lib/weeklySchedule.test.ts` e `src/lib/homeIntelligence.test.ts` (e a checagem de tipos por `npm run lint`).
