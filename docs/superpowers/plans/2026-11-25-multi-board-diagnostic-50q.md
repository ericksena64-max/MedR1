# Simulado Diagnóstico Multi-Bancas (Até 5 Bancas · 50 Questões) Implementation Plan

> **For agentic workers:** Implement each task in order using TDD (`vitest run`), strict TypeScript (`tsc --noEmit`), and a final production build (`npm run build`).

**Goal:** Upgrade the mandatory 50-question diagnostic exam so students can select **1 to 5 target boards** (1 primary + up to 4 secondary) without introducing cross-area difficulty confounding, using strict `Grande Área × Banca` stratification, Pareto high-incidence prioritization, and transparent fallback preview.

**Architecture:** Extend `src/lib/diagnosticExam.ts` with `computePerAreaBoardQuotas` (weighted per-area quotas summing to 10 for 1–5 boards) and Pareto-prioritized stratified selection in `selectDiagnosticQuestions`. Update `useMedR1Store.ts`, `DiagnosticGateCard.tsx`, `HomeUnifiedView.tsx`, `PerformanceDashboard.tsx`, and `App.tsx` to support multi-board selection (max 5) with live coverage/fallback transparency.

**Tech Stack:** React 19, TypeScript (`strict: true`), Tailwind CSS v4 (Apple HIG), Lucide React, Vitest 5.

## Global Constraints
- Maximum **5 boards** (`MAX_DIAGNOSTIC_BOARDS = 5`), minimum **1 board** (`selectedBoards[0]` = primary board).
- Fixed **50 questions total** (**10 per Grande Área**) to protect onboarding completion while keeping global area SE around ±5–7 pp.
- Every Grande Área receives the **exact same board quota mix** (`[10]`, `[6,4]`, `[4,3,3]`, `[4,2,2,2]`, `[4,2,2,1,1]`) so board difficulty never confounds area-vs-area bottleneck detection.
- Prioritize Pareto high-incidence topics (`PARETO_HIGH_QUOTA_PER_AREA = 7` out of 10 per area) before medium/other active topics.
- Transparently track `boardBreakdown`, `matchedBoardCount`, `fallbackCount`, and `paretoCoreCount`.

## Review Focus
1. Selecting more than 5 boards must clamp safely to 5 unique boards; empty selection defaults to `['UEPA']`.
2. With 5 populated boards, every Grande Área receives `[4, 2, 2, 1, 1]` questions (`20, 10, 10, 5, 5` total) with `fallbackCount === 0`.
3. With 1 populated board (UEPA) and 4 unpopulated boards (ENARE, USP-SP, SUS-SP, UNIFESP), selection still yields 50 non-annulled questions (10 per Grande Área) and reports exact `boardBreakdown` and `fallbackCount`.
4. Pareto high-incidence topics are selected ahead of low-incidence topics when available.
5. Backward compatibility with existing persisted `DiagnosticExamState` (which only had `selectedBoard`) is preserved cleanly.
