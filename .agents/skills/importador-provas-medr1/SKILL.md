---
name: importador-provas-medr1
description: >-
  Extracts medical residency exam questions in safe batches, classifies grande
  area, tema, subtema, and pattern tags, writes brief comments per option with
  clinical guidelines, audits consistency, and integrates validated questions
  into the MedR1 question bank. Use when the user asks to extract, classify,
  comment, review, or import residency exam questions into MedR1.
---

# Importador de Provas MedR1

## Overview
Extracts medical residency exam questions in manageable batches, standardizes taxonomy, writes concise option-by-option rationales with guidelines, audits data integrity, and integrates questions into the MedR1 question bank.

## Dependencies
- **`uv`**: Ensures `uv run` is available to execute `scripts/medr1_exam_cli.py` cleanly without polluting system Python.
- **`verification-before-completion`**: Governs the final validation gate (`npm test`, `npm run lint`, `npm run build`) before claiming integration is complete.

## When to Use
- The user wants to extract questions from a residency exam text, PDF, image, or batch into MedR1 (`data/provas/<banca>-<ano>.md`).
- The user asks to classify questions by `Grande Área`, `Tema`, `Subtema`, and pattern `Tags` (such as `tabela-2x2`, `aps`, `pre-eclampsia`, `atls`) for Pareto and weekly schedule calculations.
- The user wants brief comments for each alternative plus the corresponding clinical guideline and consistency review before or during database integration.

## Quick Start
```bash
# 1. Validate a staged Markdown exam file (taxonomy, answer keys, duplicates, [REVISAR] flags)
uv run .agents/skills/importador-provas-medr1/scripts/medr1_exam_cli.py validate \
  --input data/provas/uepa-2025.md \
  --output /tmp/uepa-2025-validation.json

# 2. Inspect Pareto distribution by Grande Área / Tema / Subtema
uv run .agents/skills/importador-provas-medr1/scripts/medr1_exam_cli.py stats \
  --input data/provas/uepa-2025.md \
  --output /tmp/uepa-2025-stats.json

# 3. Export validated questions to MedR1-compatible JSONL for import
uv run .agents/skills/importador-provas-medr1/scripts/medr1_exam_cli.py convert-jsonl \
  --input data/provas/uepa-2025.md \
  --output data/provas/uepa-2025.jsonl
```

## Workflow Steps

### 1. Process in Batches
- Handle **15 to 25 questions per pass** and skip annulled questions (`ANULADA` in the official answer key) unless the user explicitly requests otherwise.
- Keep **full question stems (`Enunciado`) and option texts (`Alternativas`) verbatim** without paraphrasing or summarizing.
- Save staged batches to `data/provas/<banca>-<ano>.md` following the exact template in `references/taxonomy_and_format.md`.
- If a question depends on a missing clinical image, has ambiguous OCR, or shows a conflict with the answer key, mark it explicitly with `[REVISAR: motivo]` and continue the rest of the batch without stalling.

### 2. Standardize Taxonomy
- Map every question strictly to one of the **5 Grandes Áreas**:
  - `Clínica Médica` (`clinica_medica`)
  - `Cirurgia Geral` (`cirurgia_geral`)
  - `Ginecologia e Obstetrícia` (`ginecologia_obstetricia`)
  - `Pediatria` (`pediatria`)
  - `Medicina Preventiva` (`medicina_preventiva`)
- Assign a clear `Tema`, a normalized `Subtema` (reusing existing MedR1 subtemas in `src/lib/examWeights.ts` and `data/provas/*.md` so equivalent topics do not fragment Pareto counts), and lowercase hyphenated `Tags` for cross-exam pattern matching.

### 3. Comment Every Option and Cite Guideline
- Write a concise explanation for the official answer key AND a brief rationale for why each remaining alternative (`A–E`) is incorrect.
- Always cite the supporting Brazilian or international guideline/reference (e.g., Ministério da Saúde, PCDT/SUS, PNAB, PNI, FEBRASGO, SBP, SBC, SBD, ATLS, Sabiston, DSM-5).

### 4. Audit Before Integration
- Run `validate` and `stats` via `scripts/medr1_exam_cli.py` to confirm:
  - Every question has a valid answer key (`A–E`) matching its rationale.
  - All 5 alternatives (`A)` to `E)`) are present and non-empty.
  - Every `Grande Área` matches one of the 5 canonical labels.
  - Zero duplicate question numbers or duplicate stems.
  - Any `[REVISAR]` items are surfaced clearly to the user.

### 5. Integrate and Validate
- Export the audited Markdown to MedR1 JSONL (`convert-jsonl`) or integrate into the MedR1 question bank / import pipeline (`src/lib/questionBankStore.ts`).
- Run the full project verification gate and confirm exit code 0:
  ```bash
  npm test && npm run lint && npm run build
  ```

## Utility Scripts

### `scripts/medr1_exam_cli.py`
Stdlib-only Python 3 CLI (invoked via `uv run`):
- `validate --input <md> --output <json>`: Audits schema, canonical 5 Grandes Áreas, answer keys (`A–E`), all 5 options, duplicates, and `[REVISAR]` markers. Exits with code `1` on structural errors.
- `stats --input <md> --output <json>`: Computes counts by Grande Área, Tema, and Subtema to preview the exam's Pareto profile.
- `convert-jsonl --input <md> --output <jsonl>`: Converts validated Markdown into MedR1 `RawStructuredQuestion`-compatible JSONL ready for `parseStructuredImportFile`.

## Gotchas & Common Mistakes
- **Never dump an entire 100-question exam in a single unreviewed pass:** long outputs risk truncated options, invented answer keys, or broken schemas. Always split into batches of 15–25 questions.
- **Reuse existing `Tema`, `Subtema`, and `Tags`:** inventing near-duplicate names (e.g., `"Pré-eclâmpsia"` vs `"Doença Hipertensiva da Gestação"`) fragments MedR1's bank-driven Pareto incidence and weekly schedule rotation.
- **Never guess missing answer keys:** if the exam file or official answer key is missing or ambiguous, stop and ask for the missing input rather than guessing.
