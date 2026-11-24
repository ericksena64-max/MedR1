# Redesign do Fluxo de Resolução de Questões e Simulado (MedR1)

* **Author:** Erick Sena
* **Date:** 2026-11-23

## Overview

Este documento define a proposta de redesign da tela de Resolução de Questões e Simulado do MedR1 (`src/App.tsx`, `src/components/questions/QuestionCard.tsx`, `SimuladoBar.tsx` e `FilterPanel.tsx`). O público-alvo são estudantes de medicina em preparação para residência médica que resolvem baterias de 30 a 50 casos clínicos por sessão.

O objetivo é eliminar o excesso de cliques e rolagem no ciclo pós-resposta (**responder → ler comentário → classificar erro/chute → salvar no Caderno de Erros ou gerar Flashcard → avançar**), reduzir a fadiga visual separando a leitura clínica das métricas secundárias da comunidade, e garantir operação completa por teclado no desktop (`A–E`, `Shift + A–E`, `R`, `Enter`, `1–4`) e ergonomia na zona do polegar no mobile — mantendo visíveis apenas os indicadores essenciais de sessão (`14/50`, cronômetro ocultável e atalhos rápidos de revisão).

## Analysis

A revisão multi-lentes e o refinamento técnico definiram quatro decisões estruturais para resolver as contradições do fluxo atual:

1. **Atalho híbrido para riscar alternativas sem depender do mouse:**
   - **`Shift + A–E` (ação direta instantânea):** Risca ou desrisca imediatamente a alternativa correspondente sem alterar o modo atual da tela.
   - **`R` (Modo Riscar / Toggle) + `A–E`:** Pressionar `R` ativa um indicador visual discreto de *"Modo Riscar ativo"* (badge no rodapé / ajuste sutil de foco). Enquanto ativo, `A–E` risca/desrisca a alternativa em vez de selecioná-la; pressionar `R` novamente ou `Esc` retorna ao modo de seleção padrão.
   - **Mouse / Touch:** Clique direito (`onContextMenu`) ou ícone lateral na alternativa executa a mesma ação de descarte.

2. **Avanço com `Enter` segmentado por modo e estado (sem pular comentários nem entregar simulado por acidente):**
   - **Modo Estudo / Treino:**
     - *1º `Enter` (com alternativa selecionada):* Confirma a resposta, revela o gabarito e rola suavemente até o início do comentário/gabarito.
     - *2º `Enter` (já respondida):* Avança para a próxima questão.
   - **Modo Simulado Ativo:**
     - *`Enter`:* Salva a alternativa marcada e avança para a próxima questão não respondida (ou sequencial).
     - *Trava na última questão:* Na última questão do bloco, `Enter` nunca dispara a finalização do simulado; apenas abre o modal de revisão/confirmação (exigindo clique explícito ou `Ctrl/Cmd + Enter`).

3. **Classificação pós-resposta adaptativa (Erro + "Acertei no chute"):**
   - Chips de 1 clique (`Falta de base`, `Distração`, `Pegadinha`, `Chute`) mapeáveis às teclas `1–4` após responder, com envio opcional direto ao Caderno de Erros/Flashcard sem bloquear o 2º `Enter`.
   - **Quando erra:** Os chips aparecem em destaque logo abaixo do gabarito.
   - **Quando acerta:** Os chips secundários ficam recolhidos/discretos, mantendo visível em 1 clique o chip **"Acertei no chute"** para enviar a questão ao Caderno de Erros/Revisão mesmo com acerto.
   - **Compatibilidade de dados:** Adicionar campo opcional `errorReason?: 'falta_de_base' | 'distracao' | 'pegadinha' | 'chute'` em `UserAnswerRecord` (`src/types/medical.ts`), mantendo compatibilidade com dados salvos em `medr1_answers_v1` no `localStorage`.

4. **Leitura clínica isolada e fatiamento de `QuestionCard.tsx` (1.339 linhas):**
   - Quebrar o monólito atual em 4 camadas desacopladas em `src/components/questions/`:
     1. **`QuestionHeader.tsx`:** Apenas metadados da questão (banca, ano, especialidade, favoritar/reportar), removendo a barra de progresso duplicada e delegando o progresso global ao `App.tsx` (treino) ou `SimuladoBar.tsx` (simulado).
     2. **`QuestionStem.tsx`:** Enunciado clínico, imagens/exames (`ClinicalImageViewer`) e controles tipográficos (`readingComfort`), isolado de re-renders das alternativas.
     3. **`AlternativeList.tsx`:** Opções `A–E`, lógica de descarte (`strikethroughIds`), estados pós-resposta e listener de teclado escopado (ignorando inputs/modais).
     4. **`QuestionFeedbackDrawer.tsx`:** Renderizado sob demanda após a confirmação no modo treino — agrupa gabarito oficial, comentário do professor/IA, resumo discreto da comunidade com expansão sob demanda e os chips de classificação rápida de erro/chute.
   - **Mobile (`< lg`):** Barra inferior fixa na zona do polegar com `Riscar`, `Confirmar / Próxima`, `Caderno` e `Flashcard`. No `SimuladoBar.tsx`, recolher a grade de 50 questões em um popover expansível sob demanda.

## Goals vs. Non-Goals

* **In-Scope Goals:**
  * Eliminar rolagem e cliques extras no loop pós-resposta (estudo e revisão pós-simulado).
  * Separar leitura clínica de métricas secundárias (estatísticas e outros distratores colapsáveis).
  * Implementar atalhos completos de teclado no desktop (`A–E`, `Shift + A–E`, `R`, `Esc`, `Enter` em 2 tempos no estudo / avanço seguro no simulado, `1–4`, `S`, `F`) com guarda de foco em inputs/modais.
  * Implementar barra inferior fixa na zona do polegar para telas mobile.
  * Unificar indicador de progresso (`14/50`), cronômetro discreto ocultável e mapa expansível sob demanda (inclusive no `SimuladoBar`).
  * Fatiar `QuestionCard.tsx` em `QuestionHeader`, `QuestionStem`, `AlternativeList` e `QuestionFeedbackDrawer`.
  * Adicionar classificação opcional de erro/chute (`falta_de_base`, `distracao`, `pegadinha`, `chute`) em `UserAnswerRecord` e exibi-la no `ErrorNotebookView`.

* **Out-of-Scope Non-Goals:**
  * Alterar o algoritmo FSRS (`src/lib/srs.ts`) ou a interface interna da aba `FlashcardsView`.
  * Modificar o `QuestionImporterView`, o cálculo de ranking (`LiveRankingPage`) ou os gráficos de `PerformanceDashboard`.
  * Criar backend ou sincronização remota para o banco/respostas (manter `localStorage`).
  * Alterar os critérios de filtragem do `FilterPanel` (apenas melhorar seu recolhimento durante a sessão ativa).

## Alternatives Weighed

* **Modal obrigatório de classificação de erro após cada erro:** Rejeitado pelo autor por bloquear o avanço rápido com `Enter` e aumentar o tempo morto entre questões.
* **Usar apenas `R` como toggle ou apenas `Shift + A–E` para riscar:** Rejeitado em favor do padrão híbrido (`Shift + A–E` direto + `R` toggle), atendendo tanto usuários avançados de teclado quanto quem prefere alternar modo.
* **Avançar direto no 1º `Enter` após responder:** Rejeitado para evitar que o aluno pule o comentário por reflexo; adotado `Enter` em 2 tempos (confirma + rola para o comentário → avança).
* **Ocultar classificação de erro em caso de acerto:** Rejeitado em favor de manter **"Acertei no chute"** visível em 1 clique mesmo quando o aluno acerta.
* **Manter a grade completa de questões sempre visível no topo do `SimuladoBar`:** Rejeitado por consumir espaço vertical nobre acima do enunciado.

## Key Decisions & Staging for Next Steps

1. **Padrão híbrido de descarte:** `Shift + A–E` risca/desrisca imediatamente; `R` alterna o Modo Riscar (`A–E` risca enquanto ativo; `R`/`Esc` sai).
2. **`Enter` em 2 tempos no Estudo e trava no Simulado:** No Estudo, 1º `Enter` confirma e rola para o comentário; 2º `Enter` avança. No Simulado, `Enter` salva e avança, mas na última questão abre apenas o modal de confirmação (finalização só por clique ou `Ctrl/Cmd + Enter`).
3. **Classificação adaptativa de erro/chute:** Chips `Falta de base`, `Distração`, `Pegadinha`, `Chute` (`1–4`) em destaque no erro; no acerto, apenas **"Acertei no chute"** visível em 1 clique.
4. **Arquitetura em 4 componentes:** `QuestionHeader.tsx`, `QuestionStem.tsx`, `AlternativeList.tsx` e `QuestionFeedbackDrawer.tsx` dentro de `src/components/questions/`.
