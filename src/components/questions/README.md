# `src/components/questions` — Fluxo Ergonômico de Resolução e Simulados

## Overview
Componentes responsáveis pela resolução de questões, visualização de exames clínicos, filtragem do banco e controle de lotes/simulados. Projetado para reduzir deslocamento de cursor, manter leitura confortável em coluna estreita e prevenir submissões acidentais ou duplicadas.

## Interface
- **Card de Questão (`QuestionCard.tsx`)**: `QuestionCard`, `SessionQuestionSummary` — renderiza enunciado, exames anexos, alternativas (A–E), justificativa/comentário pós-resposta, criação de flashcard e ações de estudo.
- **Visualizador PACS / Lightbox (`ClinicalImageViewer.tsx`)**: `ClinicalImageViewer` — exibe imagens clínicas (radiografias, ECG, tomografias) com modal em tela cheia, zoom e fechamento isolado.
- **Barra de Simulado / Lote (`SimuladoBar.tsx`)**: `SimuladoBar` — cronômetro, progresso do lote e botão `"Finalizar"` sempre acessível.
- **Modal de Finalização de Lote (`BatchFinishModal.tsx`)**: `BatchFinishModal`, `buildBatchFinishSummary`, `BatchFinishSummary` — resumo condicional antes de encerrar um simulado/lote, alertando quando há questões não respondidas.
- **Filtros e Benchmark (`FilterPanel.tsx`, `StudentVsMedianBar.tsx`)**: `FilterPanel`, `countActiveQuestionFilters`, `StudentVsMedianBar`, `BenchmarkSlice`.

## Invariants
- **Botão `"Confirmar"` inline à esquerda**: Em `QuestionCard`, ao selecionar uma alternativa (antes da confirmação), o botão `"Confirmar"` aparece ancorado na lateral esquerda da própria alternativa selecionada, eliminando a necessidade de rolar até o rodapé do card.
- **Largura de leitura ergonômica**: O conteúdo textual da questão respeita o teto `max-w-[760px]` com `tabular-nums` em contadores, índices e estatísticas.
- **Atalhos de teclado sem vazamento**: `QuestionCard` aceita `A–E` para selecionar alternativas e `Enter` para confirmar/avançar (ignorando elementos editáveis); quando o lightbox de `ClinicalImageViewer` está aberto, ele captura os eventos de teclado (`Escape` para fechar) impedindo que atalhos vazem para a questão por baixo.
- **Botão `"Finalizar"` sempre acessível com guarda condicional**: `SimuladoBar` mantém `"Finalizar"` clicável a qualquer momento e delega ao `BatchFinishModal` a exibição do aviso condicional quando `unansweredCount > 0` (além da guarda anti-duplo envio controlada no container da sessão).

## Side Effects
- **Listeners globais de teclado**: `QuestionCard` e `ClinicalImageViewer` registram e removem listeners de `keydown` via `useEffect` (e bloqueiam scroll/interação de fundo enquanto o lightbox está aberto).
- **Mutação de estado da sessão via callbacks**: Respostas, favoritos, anotações, geração de flashcards e finalização de lote são propagados por callbacks ao store principal (`useMedR1Store` / `App.tsx`).

## Verification
- Run: `npm test`
- Cobertura unitária dedicada nesta pasta: `BatchFinishModal.test.ts` (3 testes cobrindo resumo de lote e aviso condicional para questões pendentes).
