# Simulado Diagnóstico Obrigatório (50 Questões) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Require every new student to complete a 50-question diagnostic simulado (10 questions from each of the 5 Grandes Áreas, tailored to their chosen exam board) before unlocking any analytics/projection charts, and base all initial calculations strictly on that 50-question diagnostic sample.

**Architecture:** Pure diagnostic question selection, completion gating, and scoring live in `src/lib/diagnosticExam.ts`, persisted state and lifecycle actions live in `src/hooks/useMedR1Store.ts`, an Apple HIG gate card (`src/components/analytics/DiagnosticGateCard.tsx`) blocks charts in `HomeUnifiedView.tsx` and `PerformanceDashboard.tsx` until all 50 questions are completed, and `src/App.tsx` locks the simulado queue to those 50 questions and enforces 50/50 completion before unlocking.

**Tech Stack:** React 19, TypeScript (`strict: true`), Tailwind CSS v4 (Apple HIG), Lucide React, Vitest 5.

## Global Constraints
- Exactly **50 questions**: **10 questions from each of the 5 Grandes Áreas** (`clinica_medica`, `cirurgia_geral`, `ginecologia_obstetricia`, `pediatria`, `medicina_preventiva`).
- Board-tailored selection (`UEPA`, `ENARE`, `USP-SP`, `SUS-SP`, `UNIFESP`, `GERAL`), falling back to active questions of the same Grande Área when a board has `< 10` questions in that area.
- **Hard chart gate:** Without finishing all 50 diagnostic questions, the student cannot access charts in `HomeUnifiedView` or `PerformanceDashboard`.
- **Real diagnostic sample:** Completing the diagnostic records all 50 answers, records the initial `SimuladoRecord`, and disables `includeDemoBaseline` (`false`) so all calculations run on the real diagnostic sample.

## Review Focus
1. Selecting a board without 50 local questions yet (e.g. `ENARE`, `USP-SP`) still yields 50 valid questions (10 per Grande Área) with transparent `fallbackCount`.
2. Attempting to finish the diagnostic with `< 50` answered questions (e.g., 49/50) blocks completion, keeps charts locked, and jumps to the first unanswered question.
3. Returning students with `>= 10` answered questions in every Grande Área remain unlocked (`hasCompletedDiagnostic === true`).
4. Annulled (`anulada`) and outdated (`desatualizada`) questions are excluded whenever active questions exist.
5. `resetProgress()` resets `diagnosticState` back to `not_started`.

---

### Task 1: Pure Diagnostic Exam Engine (`src/lib/diagnosticExam.ts` + `src/lib/diagnosticExam.test.ts`)
- [x] Create `src/lib/diagnosticExam.ts` and `src/lib/diagnosticExam.test.ts`.
- [x] Verify `npx vitest run src/lib/diagnosticExam.test.ts`.

### Task 2: Store Persistence & Actions (`src/hooks/useMedR1Store.ts`)
- [x] Persist `diagnosticState` under `STORAGE_KEY_DIAGNOSTIC_STATE`.
- [x] Expose `diagnosticState`, `diagnosticUnlocked`, `startDiagnosticExam`, `completeDiagnosticExam`.
- [x] Reset `diagnosticState` inside `resetProgress()`.

### Task 3: Apple HIG Diagnostic Gate UI (`src/components/analytics/DiagnosticGateCard.tsx`)
- [x] Create `DiagnosticGateCard` with board selector, 5-area 10q breakdown, progress display, and primary `#007AFF` CTA.

### Task 4: Wire Diagnostic Mode & Chart Gate (`src/App.tsx`, `HomeUnifiedView.tsx`, `PerformanceDashboard.tsx`)
- [x] Lock `questoes` simulado queue to the 50 diagnostic questions while active.
- [x] Block finishing `< 50/50` in `finishSimulado` and jump to first unanswered question.
- [x] Gate charts in `HomeUnifiedView` and `PerformanceDashboard` when `!diagnosticUnlocked`.

### Task 5: Verification
- [x] Run `npx tsc --noEmit && npm test -- --run && npm run build`.
