# `src/components/layout` — Shell de Navegação e Design System Clínico

## Overview
Camada estrutural do shell do MedR1. Define a barra superior compacta, o menu lateral/drawer responsivo, a barra de navegação inferior mobile, a paleta de comandos (`⌘K` / `Ctrl+K`) e os cartões auxiliares de resumo/meta/estimativa, consolidando o design system clínico em modo claro e escuro.

## Interface
- **Topbar Compacta (`TopBar.tsx`)**: `TopBar` — barra superior fixa de `48px` (`h-12`) com os 5 módulos principais, gatilho da paleta de comandos, popover de meta diária (`clampDailyGoalTarget`), alternador de tema (`Claro` / `Escuro` / `Sistema` / `Horário`), conforto de leitura, modo foco, atalho para Central de Jornada e gatilho para configuração de rotina.
- **Sidebar / Drawer Mobile (`Sidebar.tsx`)**: `Sidebar` — drawer lateral modal para navegação mobile e acesso aos módulos secundários (`Desempenho`, `Ranking Ao Vivo`, `Importar Provas IA`) além dos 5 módulos principais (`Início`, `Banco de Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`) e filtros opcionais.
- **Navegação Inferior Mobile (`MobileBottomNav.tsx`)**: `MobileBottomNav`, `MobileBottomNavProps` — barra fixa inferior (`lg:hidden`) com atalhos para `Início`, `Questões`, `Flashcards`, `Erros` e abertura do drawer (`Mais`).
- **Paleta de Comandos (`CommandPaletteModal.tsx`)**: `CommandPaletteModal`, `CommandPaletteModalProps` — modal de busca rápida (`role="dialog"`, `aria-modal="true"`) construído sobre `buildCommandPaletteItems` e `filterCommandPaletteItems` com navegação por teclado (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`).
- **Cartões Auxiliares de Layout**:
  - `DailyGoalCard.tsx`: `DailyGoalCard` — acompanhamento compacto (anel SVG em modo compacto) e editor inline da meta diária (`1` a `300` questões).
  - `QuestionBankSummaryCard.tsx`: `QuestionBankSummaryCard` — resumo quantitativo do banco carregado somando entradas ainda não carregadas do catálogo oficial (`getUnloadedOfficialCatalogEntries`), cobertura e breakdown por Grande Área.
  - `SidebarEstimateRadarCard.tsx`: `SidebarEstimateRadarCard` — indicador resumido e gráfico radar SVG das 5 grandes áreas com cálculo da estimativa de aprovação (`calcularEstimativaResidencia`) e gargalo prioritário.

## Invariants
- **Tokens visuais do Design System**: Superfícies globais padronizadas em `#F8FAFC` (claro) e `#0B0F17` (escuro), cartões limpos com borda sutil de `1px` (`rounded-xl`/`rounded-2xl`), destaque primário `#007AFF`/`#1A56DB` e `tabular-nums` em todos os contadores, percentuais e streaks.
- **Hierarquia de 5 módulos**: A navegação primária permanece enxuta e centrada nos 5 fluxos principais (`Início`, `Questões`, `Simulados`, `Flashcards`, `Caderno de Erros`), com `Início` como aba inicial ao abrir o aplicativo.
- **Topbar de baixa altura (`48px`)**: `TopBar` mantém altura compacta (`h-12`) para maximizar a área útil acima da dobra na Home, na resolução de questões e na revisão de flashcards.
- **Coordenação modal global**: `CommandPaletteModal` e `Sidebar` (quando `mobileOpen`) sinalizam `document.body.dataset.medr1ModalOpen = 'true'` para suprimir atalhos globais de estudo por baixo.

## Side Effects
- **Listeners globais e DOM**:
  - `TopBar`: registra/remove `mousedown` em `document` e `keydown` (`Escape`) em `window` enquanto os popovers de meta ou tema estão abertos.
  - `Sidebar`: define/remove `document.body.dataset.medr1ModalOpen` e registra/remove `keydown` (`Escape`) em `window` enquanto `mobileOpen` é verdadeiro.
  - `CommandPaletteModal`: define/remove `document.body.dataset.medr1ModalOpen`, agenda foco via `window.requestAnimationFrame` (`cancelAnimationFrame` no cleanup) e registra/remove `keydown` em `window`.
  - `SidebarEstimateRadarCard`: escuta `ESTIMATOR_UPDATED_EVENT` e `storage` em `window` para ressincronizar configurações do estimador persistidas em `localStorage`.

## Verification
- Run: `npm test`
- Validação de tipos e build do shell: `npm run lint` e `npm run build`.
