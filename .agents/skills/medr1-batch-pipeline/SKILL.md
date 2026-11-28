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

## Regras Inegociáveis (Anti-Alucinação, Integridade e Economia de Tokens)
1. **NUNCA leia o PDF da prova no chat.** Toda leitura de PDF, recorte de imagem e cruzamento de gabarito deve ser feita exclusivamente via `scripts/extract_pdf.py`.
2. **NUNCA reescreva enunciados ou alternativas com LLM.** O LLM recebe a questão pronta e retorna apenas metadados e comentários; o merge final é determinístico pelo `numeroOriginal`.
3. **NUNCA reordene ou embaralhe alternativas.** Preserve rigorosamente a ordem oficial (`A, B, C, D[, E]`) idêntica ao caderno original da prova. O embaralhamento de treino ocorre apenas na UI (`shuffleAlternatives`).
4. **Proibição de placeholders (`62.0` / `64.0`) e proteção de anuladas.** Toda questão válida deve receber prior clínico calibrado (`76.5`, `58.4` ou `36.8` em `taxaAcertoBase` e `taxaAcertoGlobal`); questões anuladas devem ter `taxaAcertoBase: 0` e `taxaAcertoGlobal: 0`.
5. **Exija sempre `--caderno` e `--banca`** antes de cruzar o gabarito definitivo (evita troca silenciosa entre Tipo 1/2/3/4).
6. **Roteamento obrigatório:**
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
  --taxonomy "src/data/taxonomy/medr1_taxonomy_v1.json" \
  --schema ".agents/skills/medr1-batch-pipeline/references/response_schema.json" \
  --out "tmp/<exam_id>/enriched.jsonl"
```

Use `--dry-run` para simular sem chamar a API ou `--no-wait` / `--collect` para lotes assíncronos.

### Estágio 3 — Merge e Auditoria Automática
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py \
  --extracted "tmp/<exam_id>/extracted.json" \
  --enriched "tmp/<exam_id>/enriched.jsonl" \
  --taxonomy "src/data/taxonomy/medr1_taxonomy_v1.json" \
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

---

## Quality Gate Obrigatório (Checklist Pré-Entrega)

Nenhuma importação ou alteração em lote pode ser considerada concluída antes de cumprir todos os itens abaixo:

1. **Ordem Oficial e Gabarito:** alternativas em sequência contígua oficial `A–D` / `A–E` (ou prefixo contíguo `>= 2` se `anulada: true`) e `gabaritoOficial` coerente com as alternativas e comentários.
2. **Hierarquia de Precedência Clínica:**
   - `Pediatria > Clínica Médica` (`< 18 anos`: RN, lactente, pré-escolar, escolar, adolescente — incluindo DM1/CAD infantil);
   - `Cirurgia Geral > Clínica Médica` (hemotransfusão, transfusão maciça, choque hemorrágico/trauma, perioperatório e complicações pós-operatórias);
   - `Ginecologia e Obstetrícia > Clínica Médica` (gestantes e puérperas);
   - Sinal de bloco da prova como critério auxiliar de desempate;
   - Todos os `subtemaSlug` existentes em `src/data/taxonomy/medr1_taxonomy_v1.json` (262 subtemas).
3. **Calibração Bayesiana de Dificuldade:**
   - `taxaAcertoBase` e `taxaAcertoGlobal` inicializados com prior clínico calibrado (`76.5` Fácil, `58.4` Médio, `36.8` Difícil);
   - **Zero placeholders `62.0` ou `64.0`** nas questões válidas;
   - Questões anuladas (`anulada: true`) com `taxaAcertoBase: 0` e `taxaAcertoGlobal: 0`.
4. **Paridade entre Camadas:** sincronia 100% de IDs, gabarito, taxonomia e dificuldade entre `data/provas/*.jsonl`, `data/classification/classification_v1.json`, `data/classification/difficulty_v1.json`, `src/data/*Questions.ts` e `src/data/examCatalog.ts`.
5. **Execução Obrigatória da Suíte de Verificação (todos devem sair com código `0`):**
```bash
python3 .agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py --audit-jsonl data/provas --dry-run
npx tsx scripts/classify_bank.ts audit
npx tsc --noEmit
npm test
```
