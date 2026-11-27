# Como Adicionar Novas Provas e Bancas ao MedR1

Este guia descreve o fluxo determinístico em **3 passos** para incorporar qualquer nova prova de Residência Médica (ex.: `psu-mg-2025`, `unicamp-2025`, `ses-pe-2025`, `amrigs-2025`, `surce-2025`, ou novas edições de bancas existentes como `uepa-2027`) utilizando a taxonomia canônica fechada **`src/data/taxonomy/medr1_taxonomy_v1.json`**.

> **Integração automática na interface:** assim que a prova é exportada e registrada em `src/data/examCatalog.ts` (ou adicionada em `src/data/*Questions.ts`), `computeArenaBoardMetrics` e `computeArenaBankSummary` detectam automaticamente a nova instituição/edição, criam o card correspondente na **Arena de Bancas** (visível em **Todas as Bancas** e **Novas Bancas**) e atualizam os filtros em cascata e estatísticas da Taxonomia v1 sem alterar código de UI.

---

## Pré-requisitos

- PDF da prova e PDF do gabarito oficial em uma pasta local (ex.: `provas/psu-mg-2025.pdf` e `provas/psu-mg-2025-gabarito.pdf`) **ou** um arquivo intermediário já extraído/enriquecido.
- Taxonomia canônica fechada: `src/data/taxonomy/medr1_taxonomy_v1.json` (5 Grandes Áreas, 44 Temas, 260 Subtemas).
- Exemplo de variáveis usadas nos comandos abaixo:
  - `EXAM_ID="psu-mg-2025"`
  - `INSTITUICAO="PSU-MG"`
  - `BANCA="AREMG"`
  - `ESTADO="MG"`
  - `REGIAO="Sudeste"`

---

## Passo 1 — Extrair a prova do PDF e validar na Taxonomia v1

Extraia enunciados, alternativas, imagens clínicas e gabarito de forma 100% determinística e gere o pacote auditado contra `medr1_taxonomy_v1.json`:

```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/extract_pdf.py \
  --prova "provas/psu-mg-2025.pdf" \
  --gabarito "provas/psu-mg-2025-gabarito.pdf" \
  --banca "PSU-MG" \
  --caderno "1" \
  --profiles ".agents/skills/medr1-batch-pipeline/references/perfis_bancas.json" \
  --out "tmp/psu-mg-2025/extracted.json" && \
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py \
  --extracted "tmp/psu-mg-2025/extracted.json" \
  --enriched "tmp/psu-mg-2025/enriched.jsonl" \
  --taxonomy "src/data/taxonomy/medr1_taxonomy_v1.json" \
  --out "tmp/psu-mg-2025/validated.json" \
  --report "tmp/psu-mg-2025/audit_report.md"
```

- Se quiser apenas simular a auditoria sem gravar arquivos, adicione `--dry-run` no `merge_and_audit.py`.
- Caso opte por classificar e gerar comentários via Batch API antes do merge, o script opcional está em `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py` (substituindo ou complementando `enriched.jsonl`). Alternativamente, é possível gerar `tmp/psu-mg-2025/enriched.jsonl` localmente usando os rótulos/aliases de `src/data/taxonomy/medr1_taxonomy_v1.json`.

---

## Passo 2 — Exportar o chunk TypeScript e registrar no catálogo automático

Execute o exportador oficial para criar o módulo da prova e registrá-la no `OFFICIAL_EXAM_CATALOG` em `src/data/examCatalog.ts` (entre os marcadores `// [MEDR1_AUTO_CATALOG_START]` e `// [MEDR1_AUTO_CATALOG_END]`):

```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/export_medr1.py \
  --input "tmp/psu-mg-2025/validated.json" \
  --target ts_chunk \
  --exam-id "psu-mg-2025" \
  --instituicao "PSU-MG" \
  --banca "AREMG" \
  --estado "MG" \
  --regiao "Sudeste" \
  --tipo-prova "Acesso Direto" \
  --update-hashes ".agents/skills/medr1-batch-pipeline/references/existing_hashes.json"
```

O comando gera:
1. O arquivo TypeScript da prova em `src/data/exams/psu-mg-2025.ts` (ou você pode manter também o espelho `.jsonl` em `data/provas/psu-mg-2025.jsonl` para auditoria em lote).
2. A entrada lazy-loaded correspondente em `src/data/examCatalog.ts` com contagem por Grande Área e loader dinâmico.

*(Opcional: se você já tiver um arquivo `data/provas/<exam_id>.jsonl` classificado com `subtemaSlug`, garanta que a prova também possua entrada em `src/data/examCatalog.ts` ou um módulo `*Questions.ts` em `src/data/` caso use `scripts/classify_bank.ts apply`.)*

---

## Passo 3 — Auditar paridade taxonômica, tipagem e testes

Rode a validação completa antes de abrir o aplicativo:

```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py \
  --audit-jsonl data/provas \
  --dry-run && \
npx tsx scripts/classify_bank.ts audit && \
npx tsc --noEmit && \
npm test
```

Resultados esperados:
- `merge_and_audit.py --audit-jsonl data/provas --dry-run`: `Erros de taxonomia: 0`.
- `npx tsx scripts/classify_bank.ts audit`: 0 questões sem classificação entre as provas registradas em `src/data/*Questions.ts` / checkpoint.
- `npx tsc --noEmit` e `npm test`: **0 erros** de TypeScript e todos os testes passando.

---

## O que atualiza automaticamente após esses 3 passos

1. **Arena de Bancas (`ArenaHomeView`):** exibe o total atualizado de questões e bancas no cabeçalho e cria um novo card automático em **Todas as Bancas** e **Novas Bancas** para cada nova `instituicao` (ou soma edições e questões se a prova pertencer a uma banca já existente, como `UEPA` ou `ENARE`).
2. **Filtros em Cascata (`FilterPanel`):** popula **Instituição**, **Banca**, **Ano** e as contagens dinâmicas `(N)` de **Grande Área → Tema → Subtema**.
3. **Painel de Taxonomia v1 (`TaxonomyAnalyticsCard`):** inclui a nova prova automaticamente no seletor **Banca / Prova** e nos rankings de incidência e acurácia do aluno.
