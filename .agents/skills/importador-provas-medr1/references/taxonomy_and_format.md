# MedR1 Exam Extraction Format & Taxonomy Reference

## 1. Required Markdown Format (`data/provas/<banca>-<ano>.md`)

```markdown
## Questão 01
- **Banca:** UEPA
- **Ano:** 2025
- **Grande Área:** Ginecologia e Obstetrícia
- **Tema:** Obstetrícia
- **Subtema:** Doença Hipertensiva Específica da Gestação
- **Tags:** pre-eclampsia, sulfato-de-magnesio
- **Gabarito:** B

**Enunciado:**
[Texto completo fiel à prova, sem resumir nem parafrasear]

**Alternativas:**
- A) ...
- B) ...
- C) ...
- D) ...
- E) ...

**Comentário:**
[Explicação objetiva de por que a alternativa do gabarito está correta citando a diretriz/referência]
- **A) Incorreta:** ...
- **C) Incorreta:** ...
- **D) Incorreta:** ...
- **E) Incorreta:** ...

---
```

## 2. Canonical 5 Grandes Áreas (Strict Mapping)

| Grande Área (Markdown) | `grandeAreaId` (MedR1 Store) |
|---|---|
| `Clínica Médica` | `clinica_medica` |
| `Cirurgia Geral` | `cirurgia_geral` |
| `Ginecologia e Obstetrícia` | `ginecologia_obstetricia` |
| `Pediatria` | `pediatria` |
| `Medicina Preventiva` | `medicina_preventiva` |

## 3. Tagging & `[REVISAR]` Rules
- **Tags:** lowercase, ASCII (no accents), hyphen-separated, comma-delimited (e.g., `tabela-2x2, aps, pnab, pre-eclampsia, atls`).
- **Annulled questions:** omit from the Markdown file and note the skipped question numbers in a top blockquote (`> **Nota:** Questão 03 omitida por constar como ANULADA no gabarito oficial.`).
- **Ambiguous / image-dependent items:** add `[REVISAR: motivo]` in the comment or header so `medr1_exam_cli.py validate` surfaces them in `review_flags` without blocking the rest of the batch.
