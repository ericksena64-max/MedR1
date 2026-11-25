# `src/components/gamification` — Jornada, Missões e Conquistas

## Overview
Camada visual de gamificação clínica do MedR1. Apresenta o resumo compacto de XP, nível, ofensiva e missões diárias na Home (`HomeGamificationStrip`), a central completa em modal com missões, maestria por grande área e conquistas (`GamificationHubModal`), e notificações transitórias de conquista desbloqueada (`AchievementToast`).

## Interface
- **Faixa da Home (`HomeGamificationStrip.tsx`)**: `HomeGamificationStrip` — exibe rank, nível, barra de progresso de XP, dias de ofensiva, escudos de plantão, CTA para abrir a central de jornada e até 3 cartões de missões diárias (`scope === 'diaria'`) acionáveis.
- **Central de Jornada (`GamificationHubModal.tsx`)**: `GamificationHubModal` — modal comSegmented Control de 3 abas (`missoes`, `habilidades`, `conquistas`), resumo de XP/ofensiva/escudos/combo, missões diárias e semanais executáveis, maestria por Grande Área e grade de conquistas.
- **Toast de Conquista (`AchievementToast.tsx`)**: `AchievementToast` — banner flutuante (`role="status"`, `aria-live="polite"`) exibido quando `achievement` está presente e `suppressed` é falso, com ações para abrir a central ou dispensar.

## Invariants
- **Supressão contextual de notificações**: `AchievementToast` não renderiza e não agenda timer de auto-dispensa quando `achievement === null` ou `suppressed === true` (ex.: durante modo simulado/foco).
- **Bloqueio de atalhos globais**: `GamificationHubModal` sinaliza `document.body.dataset.medr1ModalOpen = 'true'` enquanto aberto e fecha com `Escape` ou clique no backdrop, limpando o atributo no encerramento.
- **Execução limpa de missões**: Ao clicar em uma missão dentro de `GamificationHubModal`, o modal é fechado (`onClose()`) antes de disparar `onExecuteMission(mission)`.
- **Tipografia tabular**: Todos os valores numéricos de XP, nível, ofensiva, escudos, combo e progresso usam `tabular-nums`.

## Side Effects
- **Timers**: `AchievementToast` agenda `window.setTimeout` de `4500ms` para chamar `onDismiss` automaticamente e limpa via `window.clearTimeout` no cleanup.
- **DOM e listeners**: `GamificationHubModal` escreve/remove `document.body.dataset.medr1ModalOpen` e registra/remove listener `keydown` em `window` via `useEffect`.

## Verification
- Run: `npm test`
