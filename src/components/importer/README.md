# `src/components/importer` — Importador e Classificador de Provas

## Overview
Workspace de ingestão de provas de residência médica do MedR1. Permite extrair questões de PDFs ou texto bruto com gabarito via IA (`/api/import/extract-exam`), importar e enriquecer lotes estruturados JSON/JSONL/CSV (`/api/import/enrich-batch`), revisar e editar taxonomia/comentários em fila pré-importação virtualizada e gerenciar ou exportar lotes já persistidos no banco local.

## Interface
- **Importador de Provas (`QuestionImporterView.tsx`)**: `QuestionImporterView` — recebe `allQuestions`, `importedQuestions`, callbacks de persistência/remoção (`onSaveImportedQuestions`, `onDeleteBatch`, `onClearAllImported`) e navegação (`onOpenExamInBank`, `onGoToPerformance`); organiza o fluxo em 3 sub-abas (`pdf_ia`, `lote_estruturado`, `gerenciar`).

## Invariants
- **Limite e validação de PDF**: `QuestionImporterView` exige PDF ou texto de enunciado antes de submeter e rejeita arquivos PDF de prova acima de `18 MB` (`18 * 1024 * 1024` bytes) antes de chamar a API.
- **Intervalo de questões controlado**: O seletor `De`/`Até` limita o intervalo a no máximo 30 questões por chamada (`Math.min(rangeFrom + 29, ...)`), garantindo processamento seguro por bloco.
- **Enriquecimento em micro-lotes cancelável**: O fluxo `lote_estruturado` envia lotes de `BATCH_SIZE = 5` questões para `/api/import/enrich-batch`, respeitando `cancelBatchRef` entre iterações e preservando na fila de revisão quaisquer lotes já concluídos caso ocorra erro intermediário.
- **Sincronia taxonômica na revisão**: Alterar `grandeAreaId` na fila pré-importação atualiza automaticamente o nome correspondente de `grandeArea` a partir de `GRANDES_AREAS`.
- **Lista virtualizada**: A fila pré-importação utiliza `VirtualList` para manter renderização fluida mesmo em lotes extensos.

## Side Effects
- **Leitura local de arquivos**: Usa `FileReader` (`readAsDataURL` e `readAsText`) para converter PDFs em Base64 e ler gabaritos/arquivos estruturados (`.json`, `.jsonl`, `.ndjson`, `.csv`).
- **Chamadas de rede (`fetch`)**: Faz requisições `POST` para `/api/import/extract-exam` e `/api/import/enrich-batch`.
- **Download e armazenamento indireto**: Dispara downloads de templates e exportações `.jsonl` via `questionBankStore` (`downloadImportTemplate`, `exportQuestionsAsJsonl`) e delega escrita/exclusão no IndexedDB aos callbacks recebidos por props.

## Verification
- Run: `npm test`
