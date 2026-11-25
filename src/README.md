# src

## Overview
Frontend React 19 + TypeScript application source for MedR1, organizing UI components, state hooks, domain logic, static/lazy exam data, and shared TypeScript contracts.

## Local Entry Points
- `src/main.tsx`: Mounts `<App />` into `#root` with `React.StrictMode` and global styles (`src/index.css`).
- `src/App.tsx`: Root application shell coordinating navigation (`ActiveTab`), URL sync (`parseNavigationUrl`/`buildNavigationUrl`), active simulado guard (`shouldConfirmLeaveSimulado`), command palette (`Cmd/Ctrl+K`), and lazy-loaded feature views.

## Subdirectories & Boundaries
- `components`: [./components/README.md](./components/README.md) - Feature UI modules (analytics, flashcards, gamification, importer, layout, notebook, questions, ranking, ui).
- `data`: [./data/README.md](./data/README.md) - Static curated questions, lazy-loaded UEPA 2022–2026 catalog (`OFFICIAL_EXAM_CATALOG`), taxonomy, and seed data.
- `hooks`: [./hooks/README.md](./hooks/README.md) - Central reactive store (`useMedR1Store`) and outbox synchronization hook (`useSyncEngine`).
- `lib`: [./lib/README.md](./lib/README.md) - Pure domain engines (FSRS-6, Pareto, schedule, roadmap, estimators, ranking periods, outbox/storage adapters, IndexedDB question store).
- `types`: [./types/README.md](./types/README.md) - Pure TypeScript domain (`medical.ts`) and sync (`sync.ts`) contracts.
