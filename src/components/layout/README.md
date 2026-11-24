# `src/components/layout` — Shell de Navegação e Design System Clínico

## Overview
Camada estrutural do shell do MedR1. Define a barra superior compacta, a barra lateral enxuta com os 5 módulos principais e os cartões auxiliares de resumo/meta, consolidando o design system clínico em modo claro e escuro.

## Interface
- **Topbar Compacta (`TopBar.tsx`)**: `TopBar` — barra superior fixa de `48px` (`h-12`) com contexto da página ativa, indicador de streak/meta diária, alternador de tema (`Claro` / `Escuro` / `Sistema`) e gatilho rápido para configuração de rotina.
- **Sidebar Enxuta (`Sidebar.tsx`)**: `Sidebar` — navegação lateral principal estruturada nos 5 módulos centrais (`Início`, `Banco de Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`), mantendo estado ativo claro e suporte responsivo/colapsável.
- **Cartões Auxiliares de Layout**:
  - `DailyGoalCard.tsx`: `DailyGoalCard` (acompanhamento compacto da meta diária de questões).
  - `QuestionBankSummaryCard.tsx`: `QuestionBankSummaryCard` (resumo quantitativo do banco carregado).
  - `SidebarEstimateRadarCard.tsx`: `SidebarEstimateRadarCard` (indicador resumido da estimativa de aprovação na barra lateral).

## Invariants
- **Tokens visuais do Design System**: Superfícies globais padronizadas em `#F8FAFC` (claro) e `#0B0F17` (escuro), cartões limpos com borda sutil de `1px` (`rounded-xl`), destaque primário `#007AFF` e `tabular-nums` em todos os contadores, percentuais e streaks.
- **Hierarquia de 5 módulos**: A navegação primária em `Sidebar` permanece enxuta e centrada nos 5 fluxos principais (`Início`, `Banco de Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`), com `Início` como página inicial ao abrir o aplicativo.
- **Topbar de baixa altura (`48px`)**: `TopBar` mantém altura compacta (`h-12`) para maximizar a área útil acima da dobra na Home, na resolução de questões e na revisão de flashcards.

## Side Effects
- **Tema e eventos de sincronização**: `TopBar` dispara a troca de tema via callback/store (refletindo a classe de tema no documento); `SidebarEstimateRadarCard` escuta atualizações do estimador (`ESTIMATOR_UPDATED_EVENT` / `storage`) quando montado.

## Verification
- Run: `npm test`
- Validação de tipos e build do shell: `npm run lint` e `npm run build`.
