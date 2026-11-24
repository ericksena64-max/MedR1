# `src/components/flashcards` — Revisão FSRS-6 no Estilo Anki

## Overview
Módulo de revisão espaçada do MedR1 baseado em FSRS-6 (`src/lib/srs.ts`), focado em revisão direta de alta cadência sem rolagem vertical e sem poluição de metadados durante o estudo ativo.

## Interface
- **Tela de Revisão (`FlashcardsView.tsx`)**: `FlashcardsView` — gerencia a fila diária de cards vencidos, exibição minimalista Frente + Resposta, controles de avaliação FSRS (1–4) com previsão de intervalo e atalhos de teclado.
- **Modal de Pesos de Banca (`ExamWeightsModal.tsx`)**: `ExamWeightsModal` — permite consultar, ajustar e recalcular por Pareto os pesos de incidência de temas por banca (`UEPA`, `ENARE`), influenciando a retenção dinâmica do FSRS.

## Invariants
- **Card puro (somente Frente e Resposta)**: Durante a sessão de revisão em `FlashcardsView`, o card exibe apenas o texto da Frente e, após revelar, o texto da Resposta com os botões `1–4` logo abaixo — sem exibir origem/banca, tema/área/subtema, rótulo `"FRENTE"` ou link para a questão original dentro do card.
- **Zero rolagem na sessão**: Métricas superiores, filtros e barras auxiliares permanecem recolhidos ou compactados durante a revisão para que Frente + Resposta + botões `1–4` caibam integralmente na viewport sem exigir scroll nem movimento de cursor.
- **Tipografia auto-adaptativa**: `FlashcardsView` delega o cálculo de tamanho de fonte e entrelinha a `getAdaptiveFlashcardTypography` (`src/lib/flashcardShortcuts.ts`) com base no comprimento do texto, preservando legibilidade sem estourar o card.
- **Atalhos de teclado determinísticos**: Resolvidos por `resolveFlashcardShortcut` (`Space`/`Enter` para revelar a resposta; `1`, `2`, `3`, `4` para avaliar `Errei`, `Difícil`, `Bom`, `Fácil`), ignorando eventos originados em campos editáveis (`isEditableElement`).
- **Fuso horário local**: A elegibilidade de cards vencidos hoje respeita a data local do dispositivo.

## Side Effects
- **Listeners globais de teclado**: `FlashcardsView` registra e limpa listener de `keydown` para atalhos de revelação e avaliação FSRS.
- **Persistência indireta**: Avaliações FSRS são gravadas via callback no store principal (`useMedR1Store`); alterações em `ExamWeightsModal` persistem pesos customizados em `localStorage` por meio de `src/lib/examWeights.ts`.

## Verification
- Run: `npm test`
- Cobertura unitária dos atalhos e da tipografia adaptativa: `src/lib/flashcardShortcuts.test.ts` (6 testes).
