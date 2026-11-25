# `src/components/ui` — Primitivos de UI e Renderização Clínica

## Overview
Biblioteca base de componentes de interface reutilizáveis do MedR1. Fornece botões, seletores, interruptores acessíveis, renderizador seguro de Markdown/LaTeX clínico e lista virtualizada de altura dinâmica usada pelos demais módulos.

## Interface
- **Botão (`Button.tsx`)**: `Button`, `ButtonProps` — componente com `forwardRef`, variantes (`primary`, `secondary`, `outline`, `ghost`, `danger`) e tamanhos (`sm`, `md`, `lg`, `icon`), padronizando `type="button"` por padrão.
- **Markdown Clínico (`ClinicalMarkdown.tsx`)**: `ClinicalMarkdown` — renderiza Markdown com `react-markdown`, `remark-gfm`, `remark-math` e `rehype-katex`, com modos `compact`, `readingComfort` e `inline` (para prévias de uma linha sem blocos).
- **Select (`Select.tsx`)**: `Select`, `SelectOption` — `<select>` estilizado com label opcional, placeholder e ícone chevron.
- **Switch (`Switch.tsx`)**: `Switch` — controle booleano acessível (`role="switch"`, `aria-checked`) com label associada.
- **Lista Virtualizada (`VirtualList.tsx`)**: `VirtualList` — wrapper genérico sobre `@tanstack/react-virtual` (`useVirtualizer`) com medição automática de linhas variáveis (`measureElement`), `role="list"` / `role="listitem"` e `overscan` configurável.

## Invariants
- **Prevenção de XSS em `ClinicalMarkdown`**: HTML bruto é intencionalmente desabilitado (`rehype-raw` não é incluído nos plugins); links externos renderizam sempre com `target="_blank"` e `rel="noopener noreferrer"`.
- **Chaves estáveis em `VirtualList`**: `getItemKey` garante identidade determinística por item para medição dinâmica de altura sem perda de estado visual durante o scroll.
- **Tipografia tabular**: Células de tabela, blocos de código inline e previews numéricos em `ClinicalMarkdown` preservam `tabular-nums`.

## Side Effects
- **Medição de DOM (`VirtualList`)**: `@tanstack/react-virtual` observa elementos via `ResizeObserver` por meio de `virtualizer.measureElement` e lê métricas de scroll do container referenciado por `scrollContainerRef`.

## Verification
- Run: `npm test`
