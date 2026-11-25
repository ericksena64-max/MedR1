#!/usr/bin/env python3
"""
Estágio 3 do MedR1 Batch Pipeline:
Merge determinístico (Estágio 1 + Estágio 2), auditoria anti-alucinação,
deduplicação e geração do audit_report.md.
"""

from __future__ import annotations

import argparse
import difflib
import json
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple

INCORRETA_START_RE = re.compile(r"^\s*(?:alternativa\s+)?(?:incorret[ao]|errad[ao]|fals[ao])\b", re.IGNORECASE)
CORRETA_START_RE = re.compile(r"^\s*(?:alternativa\s+)?(?:corret[ao]|gabarito|verdadeir[ao])\b", re.IGNORECASE)
KEY_NUM_RE = re.compile(r"q-0*(\d+)")


def normalize_str(text: str) -> str:
    nfkd = unicodedata.normalize("NFKD", text or "")
    ascii_text = "".join(ch for ch in nfkd if not unicodedata.combining(ch))
    return re.sub(r"\s+", " ", ascii_text).strip().lower()


class TaxonomyValidator:
    def __init__(self, taxonomy_path: Optional[Path]) -> None:
        self.enabled = False
        self.grandes_areas: Set[str] = set()
        self.temas_por_area: Dict[str, Set[str]] = {}
        self.subtemas_por_tema: Dict[str, Set[str]] = {}
        self.tags_canonicas: Set[str] = set()

        if not taxonomy_path or not taxonomy_path.exists():
            return

        data = json.loads(taxonomy_path.read_text(encoding="utf-8"))
        self.enabled = True

        ga_map = data.get("grandesAreas", {})
        if isinstance(ga_map, dict):
            for ga_id, ga_body in ga_map.items():
                self.grandes_areas.add(ga_id)
                temas_obj = ga_body.get("temas", {}) if isinstance(ga_body, dict) else {}
                self.temas_por_area[ga_id] = set(temas_obj.keys()) if isinstance(temas_obj, dict) else set()
                if isinstance(temas_obj, dict):
                    for tema, subtemas in temas_obj.items():
                        self.subtemas_por_tema[tema] = set(subtemas) if isinstance(subtemas, list) else set()

        for tag in data.get("tags", []):
            self.tags_canonicas.add(tag)

    def validate(self, enriched: dict) -> List[str]:
        if not self.enabled:
            return []

        issues: List[str] = []
        raw_ga = enriched.get("grandeAreaId")
        ga = raw_ga.replace("-", "_") if isinstance(raw_ga, str) else raw_ga
        if isinstance(ga, str):
            enriched["grandeAreaId"] = ga
        tema = enriched.get("tema")
        subtema = enriched.get("subtema")
        tags = enriched.get("tags") or []

        if self.grandes_areas and ga not in self.grandes_areas:
            issues.append(f"TAXONOMIA_GRANDE_AREA_INVALIDA({ga})")
            return issues

        valid_temas = self.temas_por_area.get(ga, set())
        if valid_temas and tema not in valid_temas:
            issues.append(f"TAXONOMIA_TEMA_NAO_CANONICO({tema})")
        else:
            valid_subtemas = self.subtemas_por_tema.get(tema, set())
            if valid_subtemas and subtema not in valid_subtemas:
                issues.append(f"TAXONOMIA_SUBTEMA_NAO_CANONICO({subtema})")

        if self.tags_canonicas:
            invalid_tags = [t for t in tags if t not in self.tags_canonicas]
            if invalid_tags:
                issues.append(f"TAXONOMIA_TAGS_FORA_PADRAO({','.join(invalid_tags)})")

        return issues


def load_enriched_map(enriched_path: Path) -> Dict[int, dict]:
    by_num: Dict[int, dict] = {}
    with enriched_path.open("r", encoding="utf-8") as fh:
        for line_no, raw in enumerate(fh, start=1):
            raw = raw.strip()
            if not raw:
                continue
            item = json.loads(raw)
            num = item.get("numeroOriginal")
            if num is None:
                key = item.get("key") or item.get("_meta", {}).get("key", "")
                m = KEY_NUM_RE.search(str(key))
                if m:
                    num = int(m.group(1))
            if num is None:
                print(f"[AVISO] Linha {line_no} em {enriched_path} sem numeroOriginal.", file=sys.stderr)
                continue
            by_num[int(num)] = item
    return by_num


def load_existing_hashes(path: Optional[Path]) -> Dict[str, str]:
    if not path or not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        return {str(k): str(v) for k, v in data.items()}
    if isinstance(data, list):
        return {str(h): "banco_existente" for h in data}
    return {}


def check_gabarito_consistency(
    gabarito: Optional[str],
    anulada: bool,
    alternativas: Dict[str, str],
    explicacoes: Dict[str, str],
) -> List[str]:
    issues: List[str] = []
    if anulada:
        return issues
    if not gabarito:
        issues.append("SEM_GABARITO_OFICIAL")
        return issues
    if gabarito not in alternativas:
        issues.append(f"GABARITO_FORA_DAS_ALTERNATIVAS({gabarito})")

    missing_exp = [k for k in alternativas.keys() if not (explicacoes.get(k) or "").strip()]
    if missing_exp:
        issues.append(f"EXPLICACAO_AUSENTE({','.join(sorted(missing_exp))})")

    gab_exp = (explicacoes.get(gabarito) or "").strip()
    if gab_exp and INCORRETA_START_RE.match(gab_exp):
        issues.append(f"CONTRADICAO_COMENTARIO_GABARITO({gabarito})")

    for letter, exp_text in explicacoes.items():
        if letter == gabarito or not exp_text:
            continue
        if CORRETA_START_RE.match(exp_text.strip()):
            issues.append(f"CONTRADICAO_ALTERNATIVA_MARCADA_CORRETA({letter})")

    return issues


def find_near_duplicate(norm_enunciado: str, seen_texts: List[Tuple[int, str]], threshold: float) -> Optional[int]:
    if len(norm_enunciado) < 60:
        return None
    for other_num, other_text in seen_texts:
        len_ratio = min(len(norm_enunciado), len(other_text)) / max(len(norm_enunciado), len(other_text))
        if len_ratio < threshold:
            continue
        sim = difflib.SequenceMatcher(None, norm_enunciado, other_text).ratio()
        if sim >= threshold:
            return other_num
    return None


def generate_audit_report(meta: dict, summary: dict, flagged_questions: List[dict], report_path: Path) -> None:
    lines: List[str] = [
        f"# Relatório de Auditoria MedR1 — {meta.get('banca', 'PROVA')} ({meta.get('prova', '')})",
        "",
        "## Resumo Executivo",
        "",
        "| Métrica | Valor |",
        "| :--- | :--- |",
        f"| Total de questões | **{summary['total']}** |",
        f"| Aprovadas automaticamente | **{summary['aprovadas']}** ({summary['pctAprovadas']}%) |",
        f"| Sinalizadas `[REVISAR]` | **{summary['revisar']}** ({summary['pctRevisar']}%) |",
        f"| Divergências de gabarito | {summary['divergenciasGabarito']} |",
        f"| Questões com imagem | {summary['comImagem']} |",
        f"| Questões anuladas | {summary['anuladas']} |",
        f"| Erros de taxonomia | {summary['errosTaxonomia']} |",
        f"| Duplicatas detectadas | {summary['duplicatas']} |",
        f"| Falhas de enriquecimento (API) | {summary['falhasApi']} |",
        "",
    ]

    if summary["contagemFlags"]:
        lines.append("## Distribuição de Flags")
        lines.append("")
        for flag, count in summary["contagemFlags"].items():
            lines.append(f"- `{flag}`: {count}")
        lines.append("")

    lines.append(f"## Fila de Revisão Humana (`[REVISAR]` — {len(flagged_questions)} questões)")
    lines.append("")

    if not flagged_questions:
        lines.append("Nenhuma questão sinalizada. Lote pronto para exportação no Estágio 4.")
    else:
        for q in flagged_questions:
            num = q["numeroOriginal"]
            flags_str = " ".join(f"`[{f}]`" for f in q["flagsRevisao"])
            gab = "ANULADA" if q["anulada"] else (q["gabaritoOficial"] or "SEM GABARITO")
            snippet = (q["enunciado"][:180] + "...") if len(q["enunciado"]) > 180 else q["enunciado"]

            lines.append(f"### [REVISAR] Questão {num:03d} — Gabarito: `{gab}`")
            lines.append(f"- **Flags:** {flags_str}")
            lines.append(
                f"- **Classificação:** `{q.get('grandeAreaId') or '-'}` > "
                f"`{q.get('tema') or '-'}` > `{q.get('subtema') or '-'}` "
                f"*(modelo: `{q.get('modeloUtilizado') or '-'}`)*"
            )
            if q.get("concordaComGabarito") is False:
                lines.append(f"- **Divergência reportada pelo LLM:** {q.get('motivoDivergencia') or 'Não detalhada'}")
            if q.get("duplicadaDe"):
                lines.append(f"- **Duplicata de:** `{q['duplicadaDe']}`")
            if q.get("images"):
                lines.append(f"- **Imagens:** {', '.join(q['images'])}")
            lines.append(f"- **Trecho:** {snippet}")
            lines.append("")

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Merge determinístico e auditoria de questões")
    parser.add_argument("--extracted", required=True, type=Path, help="Caminho do extracted.json")
    parser.add_argument("--enriched", required=True, type=Path, help="Caminho do enriched.jsonl")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do validated.json")
    parser.add_argument("--report", required=True, type=Path, help="Caminho do audit_report.md")
    parser.add_argument("--taxonomy", type=Path, default=None, help="Caminho de references/taxonomia_medr1.json")
    parser.add_argument("--existing-hashes", type=Path, default=None, help="JSON com hashes já no banco")
    parser.add_argument("--sim-threshold", type=float, default=0.92, help="Limiar de similaridade")
    args = parser.parse_args()

    if not args.extracted.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.extracted}")
    if not args.enriched.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.enriched}")

    extracted_payload = json.loads(args.extracted.read_text(encoding="utf-8"))
    extracted_qs: List[dict] = extracted_payload.get("questoes", [])
    enriched_map = load_enriched_map(args.enriched)
    taxonomy_validator = TaxonomyValidator(args.taxonomy)
    existing_hashes = load_existing_hashes(args.existing_hashes)

    seen_hashes_local: Dict[str, int] = {}
    seen_texts_local: List[Tuple[int, str]] = []

    validated_qs: List[dict] = []
    flagged_qs: List[dict] = []
    flag_counter: Counter = Counter()

    stats = {
        "divergenciasGabarito": 0,
        "comImagem": 0,
        "anuladas": 0,
        "errosTaxonomia": 0,
        "duplicatas": 0,
        "falhasApi": 0,
    }

    for raw_q in extracted_qs:
        num = int(raw_q["numeroOriginal"])
        enr = enriched_map.get(num)
        flags: List[str] = []
        duplicada_de: Optional[str] = None

        if raw_q.get("hasImage") or raw_q.get("images"):
            flags.append("IMAGEM_CLINICA")
            stats["comImagem"] += 1
        if raw_q.get("anulada"):
            flags.append("QUESTAO_ANULADA")
            stats["anuladas"] += 1
        if len(raw_q.get("alternativas", {})) < 4:
            flags.append("MENOS_DE_4_ALTERNATIVAS")

        h = raw_q.get("hashConteudo", "")
        if h and h in existing_hashes:
            duplicada_de = existing_hashes[h]
            flags.append("DUPLICATA_BANCO_EXISTENTE")
            stats["duplicatas"] += 1
        elif h and h in seen_hashes_local:
            duplicada_de = f"Q{seen_hashes_local[h]:03d} (mesma prova)"
            flags.append("DUPLICATA_MESMA_PROVA")
            stats["duplicatas"] += 1
        else:
            norm_enunc = normalize_str(raw_q.get("enunciado", ""))
            near_num = find_near_duplicate(norm_enunc, seen_texts_local, args.sim_threshold)
            if near_num is not None:
                duplicada_de = f"Q{near_num:03d} (similaridade >= {int(args.sim_threshold * 100)}%)"
                flags.append("DUPLICATA_APROXIMADA")
                stats["duplicatas"] += 1
            if h:
                seen_hashes_local[h] = num
            seen_texts_local.append((num, norm_enunc))

        if enr is None or enr.get("_meta", {}).get("status") != "ok":
            flags.append("FALHA_ENRIQUECIMENTO_API")
            stats["falhasApi"] += 1
            merged = {
                **raw_q,
                "grandeAreaId": None,
                "tema": None,
                "subtema": None,
                "tags": [],
                "concordaComGabarito": None,
                "motivoDivergencia": enr.get("error") if enr else "Ausente no enriched.jsonl",
                "comentarioGeral": "",
                "explicacoesPorAlternativa": {},
                "referencias": [],
                "modeloUtilizado": enr.get("_meta", {}).get("model") if enr else None,
            }
        else:
            if enr.get("concordaComGabarito") is False:
                flags.append("DIVERGENCIA_GABARITO")
                stats["divergenciasGabarito"] += 1
            if enr.get("precisaRevisaoHumana") is True:
                flags.append("SINALIZADA_PELO_LLM")

            tax_issues = taxonomy_validator.validate(enr)
            if tax_issues:
                flags.extend(tax_issues)
                stats["errosTaxonomia"] += 1

            gab_issues = check_gabarito_consistency(
                raw_q.get("gabaritoOficial"),
                bool(raw_q.get("anulada")),
                raw_q.get("alternativas", {}),
                enr.get("explicacoesPorAlternativa") or {},
            )
            flags.extend(gab_issues)

            if not enr.get("referencias"):
                flags.append("SEM_REFERENCIAS")

            merged = {
                "numeroOriginal": num,
                "enunciado": raw_q["enunciado"],
                "alternativas": raw_q["alternativas"],
                "gabaritoOficial": raw_q.get("gabaritoOficial"),
                "anulada": bool(raw_q.get("anulada")),
                "hasImage": bool(raw_q.get("hasImage")),
                "images": raw_q.get("images", []),
                "hashConteudo": raw_q.get("hashConteudo", ""),
                "grandeAreaId": enr.get("grandeAreaId"),
                "tema": enr.get("tema"),
                "subtema": enr.get("subtema"),
                "tags": enr.get("tags", []),
                "concordaComGabarito": enr.get("concordaComGabarito"),
                "motivoDivergencia": enr.get("motivoDivergencia"),
                "comentarioGeral": enr.get("comentarioGeral", ""),
                "explicacoesPorAlternativa": enr.get("explicacoesPorAlternativa", {}),
                "referencias": enr.get("referencias", []),
                "modeloUtilizado": enr.get("_meta", {}).get("model"),
            }

        unique_flags = list(dict.fromkeys(flags))
        for f in unique_flags:
            flag_counter[f.split("(")[0]] += 1

        status = "REVISAR" if unique_flags else "APROVADA"
        merged["statusAuditoria"] = status
        merged["flagsRevisao"] = unique_flags
        merged["duplicadaDe"] = duplicada_de

        validated_qs.append(merged)
        if status == "REVISAR":
            flagged_qs.append(merged)

    total = len(validated_qs)
    revisar = len(flagged_qs)
    aprovadas = total - revisar

    audit_summary = {
        "total": total,
        "aprovadas": aprovadas,
        "revisar": revisar,
        "pctAprovadas": round((aprovadas / total) * 100, 1) if total else 0.0,
        "pctRevisar": round((revisar / total) * 100, 1) if total else 0.0,
        **stats,
        "contagemFlags": dict(flag_counter.most_common()),
    }

    output_payload = {
        "meta": extracted_payload.get("meta", {}),
        "auditSummary": audit_summary,
        "questoes": validated_qs,
    }

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(output_payload, ensure_ascii=False, indent=2), encoding="utf-8")
    generate_audit_report(output_payload["meta"], audit_summary, flagged_qs, args.report)

    print("=== CHECKPOINT ESTÁGIO 3 (MERGE E AUDITORIA) ===")
    print(f"Total de questões    : {total}")
    print(f"Aprovadas direto     : {aprovadas} ({audit_summary['pctAprovadas']}%)")
    print(f"Sinalizadas [REVISAR]: {revisar} ({audit_summary['pctRevisar']}%)")
    print(f"Divergências gabarito: {stats['divergenciasGabarito']}")
    print(f"Erros de taxonomia   : {stats['errosTaxonomia']}")
    print(f"Duplicatas           : {stats['duplicatas']}")
    print(f"Falhas de API        : {stats['falhasApi']}")
    print(f"JSON validado        : {args.out}")
    print(f"Relatório de revisão : {args.report}")


if __name__ == "__main__":
    main()
