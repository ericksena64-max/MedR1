#!/usr/bin/env python3
"""
CLI auxiliar da skill `importador-provas-medr1`.
Valida, gera estatísticas Pareto e converte arquivos Markdown (`data/provas/*.md`)
para JSONL compatível com `parseStructuredImportFile` do MedR1.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Any

CANONICAL_AREAS: dict[str, tuple[str, str]] = {
    "clinica medica": ("Clínica Médica", "clinica_medica"),
    "cirurgia geral": ("Cirurgia Geral", "cirurgia_geral"),
    "ginecologia e obstetricia": (
        "Ginecologia e Obstetrícia",
        "ginecologia_obstetricia",
    ),
    "pediatria": ("Pediatria", "pediatria"),
    "medicina preventiva": ("Medicina Preventiva", "medicina_preventiva"),
}

VALID_LETTERS = ("A", "B", "C", "D", "E")


def normalize_text(value: str) -> str:
    nfd = unicodedata.normalize("NFD", value)
    stripped = "".join(ch for ch in nfd if unicodedata.category(ch) != "Mn")
    return re.sub(r"\s+", " ", stripped).strip().lower()


def parse_markdown_exam(text: str) -> list[dict[str, Any]]:
    pattern = re.compile(r"^##\s+Quest[aã]o\s+(\d+)\s*$", re.MULTILINE)
    matches = list(pattern.finditer(text))
    questions: list[dict[str, Any]] = []

    for idx, match in enumerate(matches):
        num = int(match.group(1))
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        block = text[start:end].strip()

        def extract_meta(field: str) -> str:
            m = re.search(
                rf"^-\s+\*\*{re.escape(field)}:\*\*\s*(.+)$",
                block,
                re.MULTILINE,
            )
            return m.group(1).strip() if m else ""

        enunciado_m = re.search(
            r"\*\*Enunciado:\*\*\s*\n(.*?)(?=\n\*\*Alternativas:\*\*|\Z)",
            block,
            re.DOTALL,
        )
        enunciado = enunciado_m.group(1).strip() if enunciado_m else ""

        alt_section_m = re.search(
            r"\*\*Alternativas:\*\*\s*\n(.*?)(?=\n\*\*Coment[aá]rio:\*\*|\Z)",
            block,
            re.DOTALL,
        )
        alt_section = alt_section_m.group(1).strip() if alt_section_m else ""
        alternativas: list[dict[str, str]] = []
        for line in alt_section.splitlines():
            am = re.match(r"^-\s+([A-E])\)\s*(.+)$", line.strip())
            if am:
                alternativas.append({"letter": am.group(1), "text": am.group(2).strip()})

        coment_m = re.search(
            r"\*\*Coment[aá]rio:\*\*\s*\n(.*?)(?=\n---|\Z)",
            block,
            re.DOTALL,
        )
        comentario = coment_m.group(1).strip() if coment_m else ""

        review_flags = re.findall(r"\[REVISAR[^\]]*\]", block, re.IGNORECASE)

        raw_tags = extract_meta("Tags")
        tags = [t.strip() for t in raw_tags.split(",") if t.strip()]

        ano_raw = extract_meta("Ano")
        ano = int(ano_raw) if ano_raw.isdigit() else None

        questions.append(
            {
                "numeroOriginal": num,
                "banca": extract_meta("Banca"),
                "ano": ano,
                "grandeArea": extract_meta("Grande Área"),
                "tema": extract_meta("Tema"),
                "subtema": extract_meta("Subtema"),
                "tags": tags,
                "gabarito": extract_meta("Gabarito").upper(),
                "enunciado": enunciado,
                "alternativas": alternativas,
                "comentario": comentario,
                "reviewFlags": review_flags,
            }
        )

    return questions


def cmd_validate(args: argparse.Namespace) -> int:
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: input file not found: {input_path}", file=sys.stderr)
        return 1

    questions = parse_markdown_exam(input_path.read_text(encoding="utf-8"))
    errors: list[dict[str, Any]] = []
    warnings: list[dict[str, Any]] = []
    annulled_nums: list[int] = []
    seen_nums: set[int] = set()
    seen_stems: dict[str, int] = {}

    for q in questions:
        num = q["numeroOriginal"]
        if num in seen_nums:
            errors.append({"questao": num, "error": "Número de questão duplicado"})
        seen_nums.add(num)

        norm_area = normalize_text(q["grandeArea"])
        if norm_area not in CANONICAL_AREAS:
            errors.append(
                {
                    "questao": num,
                    "error": f"Grande Área inválida: '{q['grandeArea']}'",
                }
            )

        is_annulled = q["gabarito"] == "ANULADA"
        if is_annulled:
            annulled_nums.append(num)
        elif q["gabarito"] not in VALID_LETTERS:
            errors.append(
                {"questao": num, "error": f"Gabarito inválido: '{q['gabarito']}'"}
            )

        for field in ("banca", "tema", "subtema", "enunciado", "comentario"):
            if not q[field]:
                errors.append({"questao": num, "error": f"Campo obrigatório vazio: {field}"})

        if not q["ano"]:
            errors.append({"questao": num, "error": "Ano ausente ou inválido"})

        letters = [a["letter"] for a in q["alternativas"]]
        if tuple(letters) not in (VALID_LETTERS, ("A", "B", "C", "D")):
            errors.append(
                {
                    "questao": num,
                    "error": f"Alternativas incompletas ou fora de ordem: {letters}",
                }
            )

        norm_stem = normalize_text(q["enunciado"])
        if norm_stem:
            if norm_stem in seen_stems:
                errors.append(
                    {
                        "questao": num,
                        "error": f"Enunciado duplicado com a Questão {seen_stems[norm_stem]}",
                    }
                )
            else:
                seen_stems[norm_stem] = num

        if q["reviewFlags"]:
            warnings.append({"questao": num, "flags": q["reviewFlags"]})

    report = {
        "input": str(input_path),
        "total_questions": len(questions),
        "valid_questions": len(questions) - len(annulled_nums),
        "annulled_count": len(annulled_nums),
        "annulled_questions": annulled_nums,
        "valid": len(errors) == 0 and len(questions) > 0,
        "error_count": len(errors),
        "warning_count": len(warnings),
        "errors": errors,
        "warnings": warnings,
    }

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )

    status = "VALID" if report["valid"] else "INVALID"
    print(
        f"[{status}] {len(questions)} questions audited "
        f"({len(annulled_nums)} annulled, {len(errors)} errors, {len(warnings)} review flags). Report: {output_path}"
    )
    return 0 if report["valid"] else 1


def cmd_stats(args: argparse.Namespace) -> int:
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: input file not found: {input_path}", file=sys.stderr)
        return 1

    questions = parse_markdown_exam(input_path.read_text(encoding="utf-8"))
    by_area = Counter(q["grandeArea"] for q in questions)
    by_tema = Counter(f"{q['grandeArea']} :: {q['tema']}" for q in questions)
    by_subtema = Counter(f"{q['tema']} :: {q['subtema']}" for q in questions)

    stats = {
        "input": str(input_path),
        "total_questions": len(questions),
        "by_grande_area": dict(by_area.most_common()),
        "top_temas": dict(by_tema.most_common(25)),
        "top_subtemas": dict(by_subtema.most_common(30)),
    }

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        json.dumps(stats, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    print(f"Success! Stats for {len(questions)} questions written to: {output_path}")
    return 0


def cmd_convert_jsonl(args: argparse.Namespace) -> int:
    input_path = Path(args.input)
    if not input_path.exists():
        print(f"Error: input file not found: {input_path}", file=sys.stderr)
        return 1

    questions = parse_markdown_exam(input_path.read_text(encoding="utf-8"))
    lines: list[str] = []

    for q in questions:
        norm_area = normalize_text(q["grandeArea"])
        is_annulled = q["gabarito"] == "ANULADA"
        if norm_area not in CANONICAL_AREAS or (
            not is_annulled and q["gabarito"] not in VALID_LETTERS
        ):
            print(
                f"Error: Questão {q['numeroOriginal']} failed validation. Run `validate` first.",
                file=sys.stderr,
            )
            return 1

        canonical_area, area_id = CANONICAL_AREAS[norm_area]
        record = {
            "numeroOriginal": q["numeroOriginal"],
            "instituicao": q["banca"],
            "banca": q["banca"],
            "ano": q["ano"],
            "tipoProva": "Acesso Direto",
            "grandeAreaId": area_id,
            "grandeArea": canonical_area,
            "tema": q["tema"],
            "subtema": q["subtema"],
            "tags": q["tags"],
            "enunciado": q["enunciado"],
            "alternativas": q["alternativas"],
            "gabaritoOficial": "A" if is_annulled else q["gabarito"],
            "anulada": is_annulled,
            "comentarioGeral": q["comentario"],
            "needsAiEnrichment": False,
        }
        lines.append(json.dumps(record, ensure_ascii=False))

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Success! {len(lines)} MedR1 JSONL records written to: {output_path}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(
        description="MedR1 Residency Exam Markdown Validator & JSONL Converter"
    )
    sub = parser.add_subparsers(dest="command", required=True)

    for name, fn, help_text in [
        ("validate", cmd_validate, "Audit Markdown exam file for MedR1 compliance"),
        ("stats", cmd_stats, "Generate Grande Área / Tema / Subtema Pareto counts"),
        (
            "convert-jsonl",
            cmd_convert_jsonl,
            "Export validated Markdown exam to MedR1 RawStructuredQuestion JSONL",
        ),
    ]:
        p = sub.add_parser(name, help=help_text)
        p.add_argument("--input", required=True, help="Path to Markdown exam file")
        p.add_argument("--output", required=True, help="Path to output report/JSONL file")
        p.set_defaults(func=fn)

    args = parser.parse_args()
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
