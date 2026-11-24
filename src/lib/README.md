# `src/lib` — Motores de Cálculo e Estado Puro

## Overview
Camada de lógica pura, estatística e utilitários de domínio do MedR1. Concentra os motores matemáticos de estimativa de aprovação na residência, calibração psicométrica, projeção de nota de corte, inteligência executiva da Home, grade semanal calibrada, agendamento espaçado FSRS-6, análise de Pareto/pesos de banca, cache do banco de questões e helpers ergonômicos de flashcards.

## Interface
- **Estimador Estratificado (`residenciaEstimator.ts`)**: `calcularEstimativaResidencia`, `identificarGargaloPrioritario`, `normalCDF`, `readPersistedEstimatorConfig`, `ESTIMATOR_STORAGE_KEY`, `ESTIMATOR_UPDATED_EVENT` e tipos (`AreaMedica`, `DesempenhoArea`, `ConfiguracaoProva`, `DetalheAreaEstimativa`, `ResultadoEstimativa`, `SimulacaoGargalo`).
- **Aprovação Psicométrica (`psychometricApproval.ts`)**: `computePsychometricApproval`, `computeCutoffSeriesStats`, `normalCdf`, `normalPdf`, `studentTCritical95`, `DEFAULT_CALIBRATION_PAIRS` e modelos de estágio 1 (`Stage1Model`: `'binomial_wilson' | 'binomial_wald' | 'tct_sem'`).
- **Bússola de Corte (`cutoffProjection.ts`)**: `computeCutoffProjection` e tipos (`SimuladoChartPoint`, `PaceMethod`, `DiagnosticRegime`, `CutoffProjectionResult`).
- **Inteligência da Home (`homeIntelligence.ts`)**: `buildHomeIntelligenceSummary`, `readPersistedEstimatorConfig` e tipos (`HomeAreaInput`, `HomeAreaTableRow`, `HomeBottleneck`, `HomeIntelligenceInput`, `HomeIntelligenceSummary`).
- **Grade Semanal Calibrada (`weeklySchedule.ts`)**: `buildWeeklySchedule`, `calculateDailyQuestionQuota`, `loadWeeklyScheduleConfig`, `DEFAULT_WEEKLY_SCHEDULE_CONFIG`, `WEEKLY_SCHEDULE_STORAGE_KEY`, `TARGET_EXAM_PRESETS` (`'UEPA' | 'ENARE' | 'SUS-SP' | 'USP-SP'`), `PACE_MINUTES_PER_QUESTION` (`prova`: `2.2`, `estudo`: `3.0`), `FLASHCARD_DURATION_MINUTES` (`0.5`), `WEEKDAY_LABELS` e tipos (`WeeklyScheduleConfig`, `WeeklyTopicInput`, `WeeklyTopicBlock`, `WeeklyDayPlan`, `WeeklyScheduleResult`).
- **FSRS-6 / Repetição Espaçada (`srs.ts`)**: `computeNextFsrsState`, `computeAllFsrsOutcomes`, `getFsrsRatingPreviews`, `calculateDynamicRetention`, `resolveCardRetention`, `isCardDueToday`, `getCardCurrentRetrievabilityPct`, `estimateDaysToTargetRetention`, `migrateCardToFsrs`, `buildFlashcardFromQuestion` e constantes (`FSRS_ENGINE_NAME = 'FSRS-6'`, `DEFAULT_TARGET_RETENTION = 0.9`).
- **Pareto e Pesos de Banca (`paretoCalculator.ts`, `examWeights.ts`)**: `calculateParetoByExam`, `classifyParetoTier`, `buildBoardParetoProfile`, `getExamTopicWeight`, `getBoardDelta`, `getEffectiveBoardTopics`, `recalculateBoardWeightsFromPareto` e funções de persistência de pesos customizados.
- **Atalhos e Tipografia de Flashcards (`flashcardShortcuts.ts`)**: `resolveFlashcardShortcut`, `isEditableElement`, `getAdaptiveFlashcardTypography`.
- **Banco de Questões e Utilitários (`questionBankStore.ts`, `utils.ts`)**: `getAllBankQuestions`, `parseStructuredImportFile`, `convertRawToMedR1Question`, `exportQuestionsAsJsonl`, `downloadImportTemplate`, `cn`, `computeDifficulty`, `computeWeightedScore`, `computePerformanceStatus`, `formatTimer`, `formatDelta`.

## Invariants
- **Estimativa estratificada (Cochran)**: `calcularEstimativaResidencia` combina as 5 grandes áreas com seus pesos reais da prova (presets UEPA, ENARE, SUS-SP, USP-SP), calcula variância estratificada e IC 95% e estima a probabilidade de aprovação via `normalCDF`.
- **Cálculo da grade semanal**: `calculateDailyQuestionQuota` sempre desconta o tempo de flashcards (`FLASHCARD_DURATION_MINUTES = 0.5` min, ou seja, 30s por card) do tempo diário configurado antes de dividir pelo ritmo escolhido (`2.2 min/q` em modo `prova` ou `3.0 min/q` em modo `estudo`), nunca retornando cota negativa.
- **Datas em fuso horário local**: `weeklySchedule.ts` e `srs.ts` evitam deslocamento UTC (`YYYY-MM-DD` calculado localmente) para alinhar "Ontem", "Hoje", "Amanhã" e cartões vencidos ao dia civil do usuário.
- **Distribuição individualizada por prova alvo**: `buildWeeklySchedule` aloca de 1 a 3 blocos de assunto por dia ativo com base em `targetExam` (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`), prioridades de reforço do aluno e cota líquida diária, deixando dias inativos como descanso.
- **Tipografia segura de flashcards**: `getAdaptiveFlashcardTypography` retorna faixas limitadas de fonte e entrelinha em função do comprimento de frente/resposta para impedir overflow e rolagem no card.
- **Imutabilidade e validação defensiva**: `loadWeeklyScheduleConfig` e `readPersistedEstimatorConfig` sanitizam JSON ausente ou corrompido com fallback seguro para defaults.

## Side Effects
- A maioria das funções de cálculo (`residenciaEstimator.ts`, `psychometricApproval.ts`, `cutoffProjection.ts`, `homeIntelligence.ts`, `weeklySchedule.ts`, `flashcardShortcuts.ts`, `paretoCalculator.ts`, `srs.ts`) é pura e sem efeitos colaterais.
- **Leitura/escrita em `localStorage`**: `examWeights.ts` lê e grava pesos customizados por banca; `residenciaEstimator.ts` e `homeIntelligence.ts` leem `ESTIMATOR_STORAGE_KEY` (`medr1_residencia_estimator_v1`).
- **Cache em memória e download no browser**: `questionBankStore.ts` mantém caches em módulo (`importedQuestionsCache`, `officialCatalogCache`) e `downloadImportTemplate` dispara download de arquivo no navegador.

## Verification
- Run: `npm test`
- Cobertura unitária dedicada nesta pasta: `weeklySchedule.test.ts`, `flashcardShortcuts.test.ts` e `homeIntelligence.test.ts`.
