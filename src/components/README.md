# `src/components`

## Overview
Camada de apresentação React do MedR1, organizada por domínio funcional: inteligência acadêmica e Home unificada, resolução de questões e simulados, revisão espaçada FSRS-6, caderno de erros, importador de provas com IA, gamificação, ranking ao vivo, shell de navegação e primitivos de UI.

## Subdirectories & Boundaries
- **Analytics**: [./analytics/README.md](./analytics/README.md) — Home unificada, grade semanal dinâmica, explorador de cadeiras médicas, resumo executivo, dashboard de desempenho e modelos estatísticos/psicométricos de aprovação.
- **Flashcards**: [./flashcards/README.md](./flashcards/README.md) — Revisão espaçada FSRS-6 no estilo Anki, atalhos determinísticos de teclado e modal de pesos de incidência por banca.
- **Gamification**: [./gamification/README.md](./gamification/README.md) — Faixa de jornada e missões diárias na Home, modal central de missões/habilidades/conquistas e toast de conquista desbloqueada.
- **Importer**: [./importer/README.md](./importer/README.md) — Extração de provas via PDF/texto + IA, importação em lote JSON/JSONL/CSV, fila de revisão pré-importação e gestão de lotes salvos.
- **Layout**: [./layout/README.md](./layout/README.md) — Shell de navegação (TopBar, Sidebar mobile, MobileBottomNav, CommandPaletteModal) e cartões auxiliares de meta diária, resumo do banco e radar lateral.
- **Notebook**: [./notebook/README.md](./notebook/README.md) — Caderno de Erros e favoritas com filtros, busca textual, listagem virtualizada e geração unitária/em lote de flashcards SRS.
- **Questions**: [./questions/README.md](./questions/README.md) — Card ergonômico de questão, visualizador PACS de imagens clínicas, barra de simulado, modal de finalização de lote, painel de filtros e benchmark contra mediana.
- **Ranking**: [./ranking/README.md](./ranking/README.md) — Widget lateral e página completa do Ranking Ao Vivo (diário, semanal, mensal) com controle de privacidade por pseudônimo.
- **UI**: [./ui/README.md](./ui/README.md) — Primitivos base reutilizáveis (`Button`, `Select`, `Switch`, `ClinicalMarkdown`, `VirtualList`).
