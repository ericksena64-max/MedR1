# `src/components/notebook` — Caderno de Erros e Favoritas

## Overview
Módulo de revisão pós-erro do MedR1. Reúne questões erradas e favoritadas em uma lista virtualizada com busca textual, filtro por segmento (`Todos`, `Erradas`, `Favoritadas`), conversão unitária ou em lote para flashcards SRS e chave de automação para geração automática de cards ao errar questões.

## Interface
- **Visualização do Caderno (`ErrorNotebookView.tsx`)**: `ErrorNotebookView` — recebe `questions`, `answers`, `bookmarks`, `flashcardQuestionIds`, `autoCreateFlashcardsOnError` e callbacks de geração de flashcards (`onGenerateFlashcards`, `onCreateSingleFlashcard`, `onToggleAutoCreate`), favoritos (`onToggleBookmark`) e navegação (`onOpenQuestion`, `onLaunchErrorReview`, `onGoToFlashcards`).

## Invariants
- **Sem duplicação de flashcards**: A ação em lote (`Gerar Flashcards`) filtra estritamente questões cujo `id` não esteja em `flashcardQuestionIds`, e cada item individual exibe `"No baralho SRS"` quando já possui flashcard associado.
- **Lista virtualizada**: Quando há resultados filtrados, os itens são renderizados via `VirtualList` (`getItemKey={(q) => q.id}`), preservando performance em cadernos grandes.
- **Filtros combináveis**: O filtro segmentado (`todos` | `erradas` | `favoritadas`) e a busca textual (`instituicao`, `ano`, `grandeArea`, `tema`, `enunciado`) operam de forma conjuntiva e case-insensitive sobre `questions`.

## Side Effects
- **Timer de feedback transitório**: `handleBulkGenerate` agenda `window.setTimeout` de `4000ms` para limpar `generatedFeedback` após criação em lote com contagem maior que zero.
- **Mutações delegadas**: Criação de flashcards, alternância da flag automática, remoção de favoritos e disparo de sessão de revisão ocorrem exclusivamente via callbacks recebidos por props.

## Verification
- Run: `npm test`
