# scripts

## Overview
Offline CLI ingestion and data-extraction scripts for MedR1. Currently contains `scripts/extract_uepa_pdfs.ts`, a deterministic PDF parser and rule-based medical topic classifier that extracts UEPA residency exam questions and official answer keys (2020–2026) into a unified JSON bank.

## Interface
- `scripts/extract_uepa_pdfs.ts`: Standalone executable Node/TSX CLI script (invokes `run()` directly; exports no library symbols).
  - Configured inputs: `UEPA_EXAMS` array mapping years `2020`–`2026` to exam and gabarito PDFs under `public/assets/aistudio/`.
  - Internal pipeline stages: `extractGabarito` (official key & annulled status parsing), `extractOrderedLinesFromProva` (2-column/full-width band layout segmentation and bullet-font detection via `pdfjs-dist`), `parseProvaLines` (sequential question 1–100 reconstruction, shared preamble attachment, alternatives A–E parsing, and `hasImageReference` flagging), and `classifyQuestion` (keyword/regex scoring across `TOPIC_RULES` with official UEPA section priors).
- Subdirectories: None.

## Invariants
- Extraction is 100% deterministic and offline (no LLM API calls); extracted questions emit empty `comentarioGeral`/`perolaClinica`/`explanation` strings with `needsAiCommentary: true` and `sourcePdfUrl`/`sourcePdfPage` provenance.
- Output objects conform to `MedicalQuestion` (`../src/types/medical`), sorted descending by `ano` and ascending by `numeroOriginal` (`1`–`100`).
- Question starts (`1.`–`100.`) are matched sequentially using hanging-indent X-coordinate margins, preserving line breaks on lists and joining soft-hyphenated Portuguese words cleanly.
- `defaultGrandeAreaByOrder` follows UEPA's standard block layout (1–20 Preventiva, 21–40 Clínica Médica, 41–60 Cirurgia Geral, 61–80 GO, 81–100 Pediatria), relaxing priors in the 2021 Q45–Q60 mixed block.

## Side Effects
- Synchronously reads exam and gabarito PDFs from `public/assets/aistudio/` via `node:fs`.
- Creates `public/data/` if absent and overwrites `public/data/uepa_2020_2026.json` on disk.
- Prints per-year extraction diagnostics, anomaly counts, and topic summaries to `stdout`/`stderr`, exiting with code `1` on unhandled errors.

## Verification
- Run: `npm test`
