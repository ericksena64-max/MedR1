---
name: medr1-batch-pipeline
description: >
  Extrai provas de residência médica em PDF de forma 100% determinística,
  enriquece com classificação taxonômica e comentários via Gemini Batch API
  (com Context Caching e roteamento Flash/Pro), audita divergências e integra
  ao MedR1. Use sempre que o usuário pedir para ingerir, importar em lote,
  processar PDFs de provas ou atualizar o banco de questões do MedR1.
---

# MedR1 Batch Pipeline (Zero Alucinação + Custo Mínimo)

## Regras Inegociáveis (Anti-Alucinação e Economia de Tokens)
1. **NUNCA leia o PDF da prova no chat.** Toda leitura de PDF, recorte de imagem e cruzamento de gabarito deve ser feita exclusivamente via `scripts/extract_pdf.py`.
2. **NUNCA reescreva enunciados ou alternativas com LLM.** O LLM recebe a questão pronta e retorna apenas metadados e comentários; o merge final é determinístico pelo `numeroOriginal`.
3. **Exija sempre `--caderno` e `--banca`** antes de cruzar o gabarito definitivo (evita troca silenciosa entre Tipo 1/2/3/4).
4. **Roteamento obrigatório:**
   - Questões texto puro -> `gemini-2.5-flash` (Batch API).
   - Questões com imagem clínica, tabela complexa, anuladas ou sinalizadas com divergência -> `gemini-2.5-pro` (Batch API).

---

## Workflow em 4 Estágios

### Calibração Visual (Opcional — recomendado para bancas novas)
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/calibrate_layout.py \
  --prova "<caminho_prova.pdf>" \
  --banca "<ENARE|USP|UNIFESP|SUS-SP|PSU-MG|UEPA|GENERICO>" \
  --profiles ".agents/skills/medr1-batch-pipeline/references/perfis_bancas.json" \
  --page 2
```

### Estágio 1 — Extração Determinística (0 tokens)
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/extract_pdf.py \
  --prova "<caminho_prova.pdf>" \
  --gabarito "<caminho_gabarito.pdf>" \
  --banca "<ENARE|USP|UNIFESP|SUS-SP|PSU-MG|UEPA|GENERICO>" \
  --caderno "<A|B|1|2>" \
  --profiles ".agents/skills/medr1-batch-pipeline/references/perfis_bancas.json" \
  --out "tmp/<exam_id>/extracted.json"
```

**Checkpoint:** Verifique no stdout se o total de questões bate com a prova, quantas têm imagem e se alguma ficou sem gabarito. Se houver problema, calibre `references/perfis_bancas.json` antes de prosseguir.

### Estágio 2 — Enriquecimento via Gemini Batch API
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py \
  --input "tmp/<exam_id>/extracted.json" \
  --taxonomy ".agents/skills/medr1-batch-pipeline/references/taxonomia_medr1.json" \
  --schema ".agents/skills/medr1-batch-pipeline/references/response_schema.json" \
  --out "tmp/<exam_id>/enriched.jsonl"
```

Use `--dry-run` para simular sem chamar a API ou `--no-wait` / `--collect` para lotes assíncronos.

### Estágio 3 — Merge e Auditoria Automática
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py \
  --extracted "tmp/<exam_id>/extracted.json" \
  --enriched "tmp/<exam_id>/enriched.jsonl" \
  --taxonomy ".agents/skills/medr1-batch-pipeline/references/taxonomia_medr1.json" \
  --out "tmp/<exam_id>/validated.json" \
  --report "tmp/<exam_id>/audit_report.md"
```

**Checkpoint obrigatório:** Leia `tmp/<exam_id>/audit_report.md` e apresente ao usuário apenas a fila `[REVISAR]` para decisão.

### Estágio 4 — Integração ao MedR1
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/export_medr1.py \
  --input "tmp/<exam_id>/validated.json" \
  --target "<ts_chunk|supabase>" \
  --exam-id "<exam_id>" \
  --update-hashes ".agents/skills/medr1-batch-pipeline/references/existing_hashes.json"
```
