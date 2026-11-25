# `src/components/ranking` — Ranking Ao Vivo e Privacidade de Identidade

## Overview
Componentes de classificação social do MedR1. Disponibilizam o widget compacto lateral (`LiveRankingWidget`) com o Top 10 e fixação do usuário atual, além da página completa (`LiveRankingPage`) com alternância de período (`Diário Ao Vivo`, `Semanal`, `Mensal`), controle do indicador pulsante ao vivo e painel de identidade/pseudônimo.

## Interface
- **Página Completa (`LiveRankingPage.tsx`)**: `LiveRankingPage` — tabela completa (Top 10 + posições 11º+), seleção de período (`daily`, `weekly`, `monthly`), indicador opcional de pulso ao vivo (`rankingPulseOn`, `onToggleRankingPulse`), formulário de nome real/pseudônimo/instituição-alvo e resumo da sessão atual com explicação da fórmula ponderada anti-chute.
- **Widget Compacto (`LiveRankingWidget.tsx`)**: `LiveRankingWidget`, `RankedEntry` — cartão lateral com Top 10, alternância rápida e edição inline de pseudônimo, gerador aleatório de codinome e linha fixa do usuário quando `currentUser.rank > 10`.

## Invariants
- **Elegibilidade mínima por período**: Em `LiveRankingPage`, quando `currentUserInPeriod === null` no período ativo, é exibido o aviso explícito de que é necessário responder pelo menos 1 questão no período para ingressar no ranking.
- **Visibilidade contínua do usuário**: Tanto `LiveRankingWidget` (via bloco fixo quando `rank > 10`) quanto `LiveRankingPage` destacam a linha do estudante atual (`entry.isCurrentUser`).
- **Sanitização de pseudônimo**: `LiveRankingWidget` só salva pseudônimos editados inline após normalizar espaços para `_` (máx. 22 chars) e exigir comprimento `>= 3`; `LiveRankingPage` normaliza espaços para `_` (máx. 24 chars) e recalcula `avatarInitials` ao salvar o formulário.
- **Alinhamento numérico**: Rankings, contagens de questões, acurácia e pontuações usam `tabular-nums`.

## Side Effects
- **Timer de confirmação**: `LiveRankingPage` agenda `window.setTimeout` de `2200ms` após salvar identidade para limpar `savedNotice`.
- **Mutações delegadas**: Atualizações de perfil (`onUpdateProfile`), geração de pseudônimo (`onGeneratePseudonym`) e alternância do pulso (`onToggleRankingPulse`) são propagadas via callbacks ao estado da aplicação.

## Verification
- Run: `npm test`
