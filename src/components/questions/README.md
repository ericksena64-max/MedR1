# `src/components/questions` — Fluxo Ergonômico de Resolução e Simulados

## Overview
Componentes responsáveis pela resolução de questões, visualização de exames clínicos, filtragem do banco e controle de lotes/simulados. Projetado para reduzir deslocamento de cursor, manter leitura confortável em coluna estreita e prevenir submissões acidentais ou duplicadas.

## Interface
- **Card de Questão (`QuestionCard.tsx`)**: `QuestionCard`, `SessionQuestionSummary` — renderiza enunciado, exames anexos (`ClinicalImageViewer`), alternativas (A–E) com ferramenta de riscar, justificativa/comentário pós-resposta em `ClinicalMarkdown`, geração sob demanda de comentário IA, criação/abertura de flashcard, comparativo (`StudentVsMedianBar`) e ações de estudo/navegação.
- **Visualizador PACS / Lightbox (`ClinicalImageViewer.tsx`)**: `ClinicalImageViewer` — exibe imagens clínicas (radiografias, ECG, tomografias) com modal em tela cheia, zoom (`react-zoom-pan-pinch`, presets `1x–5x`), alto contraste, inversão de cores e fechamento isolado.
- **Barra de Simulado / Lote (`SimuladoBar.tsx`)**: `SimuladoBar` — cronômetro (com opção de ocultar), pausa/retomada, mapa de questões, progresso do lote e botão `"Finalizar"` sempre acessível.
- **Modal de Finalização de Lote (`BatchFinishModal.tsx`)**: `BatchFinishModal`, `buildBatchFinishSummary`, `BatchFinishSummary` — resumo condicional antes de encerrar um simulado/lote, alertando quando há questões não respondidas.
- **Filtros e Benchmark (`FilterPanel.tsx`, `StudentVsMedianBar.tsx`)**:
  - `FilterPanel`, `countActiveQuestionFilters`: painel de filtros em cascata (Grande Área, Tema, Subtema, Banca, Instituição, Região, Ano, Dificuldade, Status, Imagens) integrado ao catálogo completo (`getAllBankQuestions`, `getOfficialExamCatalog`).
  - `StudentVsMedianBar`, `BenchmarkSlice`: barra comparativa da taxa de acerto do estudante frente à mediana da comunidade (Tema, Grande Área, Geral).

## Invariants
- **Botão `"Confirmar"` inline à esquerda**: Em `QuestionCard`, ao selecionar uma alternativa (antes da confirmação), o botão `"Confirmar"` aparece ancorado na lateral esquerda da própria alternativa selecionada, eliminando a necessidade de rolar até o rodapé do card.
- **Largura de leitura ergonômica**: O conteúdo textual da questão respeita o teto `max-w-[760px]` com `tabular-nums` em contadores, índices e estatísticas.
- **Atalhos de teclado sem vazamento**: `QuestionCard` aceita `A–E` para selecionar alternativas, `Enter` para confirmar e `ArrowLeft`/`ArrowRight` para navegar (ignorando elementos editáveis e modais abertos via `document.body.dataset.medr1ModalOpen` ou `[role="dialog"][aria-modal="true"]`); quando o lightbox de `ClinicalImageViewer` está aberto, ele captura eventos de teclado em fase de captura (`capture: true`, `Escape` para fechar, `0`/`+`/`-`/setas para zoom/pan), impedindo que atalhos vazem para `QuestionCard`.
- **Botão `"Finalizar"` sempre acessível com guarda condicional**: `SimuladoBar` mantém `"Finalizar"` clicável a qualquer momento e delega ao `BatchFinishModal` a exibição do aviso condicional quando `unansweredCount > 0` (além da guarda anti-duplo envio controlada no container da sessão).

## Side Effects
- **Listeners globais e DOM**:
  - `QuestionCard`: registra e remove listener `keydown` em `window` via `useEffect`.
  - `ClinicalImageViewer`: salva e restaura `document.body.style.overflow = 'hidden'`, define/remove `document.body.dataset.medr1ModalOpen = 'true'` e registra/remove `keydown` em `window` com `{ capture: true }`.
  - `BatchFinishModal`: define/remove `document.body.dataset.medr1ModalOpen = 'true'` e registra/remove listener `keydown` (`Escape`) em `window`.
- **Mutação de estado da sessão via callbacks**: Respostas, favoritos, anotações/flags, geração de flashcards, comentários IA e finalização de lote são propagados por callbacks ao store principal (`useMedR1Store` / `App.tsx`).

## Verification
- Run: `npm test`
- Cobertura unitária dedicada nesta pasta: `BatchFinishModal.test.ts` (3 testes cobrindo resumo de lote e aviso condicional para questões pendentes).
