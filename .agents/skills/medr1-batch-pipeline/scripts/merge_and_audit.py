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
KEBAB_TAG_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")

DEFAULT_TAXONOMY_V1_PATH = (
    Path(__file__).resolve().parents[4] / "src" / "data" / "taxonomy" / "medr1_taxonomy_v1.json"
)
AREA_SLUG_TO_ID: Dict[str, str] = {
    "cm": "clinica_medica",
    "cg": "cirurgia_geral",
    "go": "ginecologia_obstetricia",
    "ped": "pediatria",
    "mp": "medicina_preventiva",
}
GRANDE_AREA_LABELS: Dict[str, str] = {
    "clinica_medica": "Clínica Médica",
    "cirurgia_geral": "Cirurgia Geral",
    "ginecologia_obstetricia": "Ginecologia e Obstetrícia",
    "pediatria": "Pediatria",
    "medicina_preventiva": "Medicina Preventiva",
}


def normalize_str(text: str) -> str:
    nfkd = unicodedata.normalize("NFKD", text or "")
    ascii_text = "".join(ch for ch in nfkd if not unicodedata.combining(ch))
    return re.sub(r"\s+", " ", ascii_text).strip().lower()


class TaxonomyValidator:
    def __init__(self, taxonomy_path: Optional[Path]) -> None:
        self.enabled = False
        self.is_v1 = False
        self.taxonomy_version = "legacy"
        self.tag_format: Optional[str] = None
        self.grandes_areas: Set[str] = set()
        self.temas_por_area: Dict[str, Set[str]] = {}
        self.temas_norm_por_area: Dict[str, Dict[str, str]] = {}
        self.subtemas_por_tema: Dict[str, Set[str]] = {}
        self.subtemas_norm_por_tema: Dict[str, Dict[str, str]] = {}
        self.by_subtema_slug: Dict[str, dict] = {}
        self.by_subtema_norm: Dict[str, dict] = {}
        self.by_alias_norm: Dict[str, dict] = {}
        self.tags_canonicas: Set[str] = set()

        if not taxonomy_path or not taxonomy_path.exists():
            return

        data = json.loads(taxonomy_path.read_text(encoding="utf-8"))
        self.enabled = True

        ga_node = data.get("grandeAreas") or data.get("grandesAreas")
        if isinstance(ga_node, list):
            self.is_v1 = True
            self.taxonomy_version = str(data.get("schema") or "medr1_taxonomy_v1")
            rules = data.get("rules") or {}
            self.tag_format = rules.get("tagFormat")

            for area in ga_node:
                if not isinstance(area, dict):
                    continue
                area_slug = str(area.get("slug") or "").strip()
                ga_id = AREA_SLUG_TO_ID.get(area_slug)
                if not ga_id:
                    continue
                self.grandes_areas.add(ga_id)
                self.temas_por_area.setdefault(ga_id, set())
                self.temas_norm_por_area.setdefault(ga_id, {})

                for tema_obj in area.get("temas") or []:
                    if not isinstance(tema_obj, dict):
                        continue
                    tema_label = str(tema_obj.get("label") or "").strip()
                    tema_slug = str(tema_obj.get("slug") or "").strip()
                    self.temas_por_area[ga_id].add(tema_label)
                    self.temas_norm_por_area[ga_id][normalize_str(tema_label)] = tema_label
                    self.subtemas_por_tema.setdefault(tema_label, set())
                    self.subtemas_norm_por_tema.setdefault(tema_label, {})

                    for sub_obj in tema_obj.get("subtemas") or []:
                        if not isinstance(sub_obj, dict):
                            continue
                        sub_slug = str(sub_obj.get("slug") or "").strip()
                        sub_label = str(sub_obj.get("label") or "").strip()
                        entry = {
                            "grandeAreaId": ga_id,
                            "grandeArea": GRANDE_AREA_LABELS.get(ga_id, area.get("label", ga_id)),
                            "areaSlug": area_slug,
                            "temaSlug": tema_slug,
                            "tema": tema_label,
                            "subtemaSlug": sub_slug,
                            "subtema": sub_label,
                        }
                        self.subtemas_por_tema[tema_label].add(sub_label)
                        self.subtemas_norm_por_tema[tema_label][normalize_str(sub_label)] = sub_label
                        if sub_slug:
                            self.by_subtema_slug[sub_slug] = entry
                        sub_norm = normalize_str(sub_label)
                        if sub_norm and sub_norm not in self.by_subtema_norm:
                            self.by_subtema_norm[sub_norm] = entry
                        for alias in sub_obj.get("aliases") or []:
                            alias_norm = normalize_str(str(alias))
                            if alias_norm and alias_norm not in self.by_alias_norm:
                                self.by_alias_norm[alias_norm] = entry
            return

        # Legacy dict schema fallback (references/taxonomia_medr1.json)
        if isinstance(ga_node, dict):
            self.taxonomy_version = "legacy"
            for ga_id, ga_body in ga_node.items():
                self.grandes_areas.add(ga_id)
                temas_obj = ga_body.get("temas", {}) if isinstance(ga_body, dict) else {}
                self.temas_por_area[ga_id] = set(temas_obj.keys()) if isinstance(temas_obj, dict) else set()
                if isinstance(temas_obj, dict):
                    for tema, subtemas in temas_obj.items():
                        self.subtemas_por_tema[tema] = set(subtemas) if isinstance(subtemas, list) else set()

        for tag in data.get("tags", []):
            self.tags_canonicas.add(tag)

    def _validate_v1(self, enriched: dict) -> List[str]:
        issues: List[str] = []
        raw_ga = enriched.get("grandeAreaId")
        ga = raw_ga.replace("-", "_") if isinstance(raw_ga, str) else raw_ga
        if isinstance(ga, str):
            enriched["grandeAreaId"] = ga

        tema = enriched.get("tema")
        tema_slug = enriched.get("temaSlug")
        subtema = enriched.get("subtema")
        subtema_slug = enriched.get("subtemaSlug")
        tags = enriched.get("tags") or []

        entry: Optional[dict] = None
        if isinstance(subtema_slug, str) and subtema_slug.strip():
            entry = self.by_subtema_slug.get(subtema_slug.strip())
            if entry is None:
                issues.append(f"TAXONOMIA_SUBTEMA_SLUG_INVALIDO({subtema_slug})")
        elif isinstance(subtema, str) and subtema.strip():
            entry = self.by_subtema_norm.get(normalize_str(subtema))

        if entry is not None:
            if isinstance(ga, str) and ga and ga != entry["grandeAreaId"]:
                issues.append(f"TAXONOMIA_GRANDE_AREA_DIVERGENTE({ga}!={entry['grandeAreaId']})")
            if isinstance(tema_slug, str) and tema_slug.strip() and tema_slug.strip() != entry["temaSlug"]:
                issues.append(f"TAXONOMIA_TEMA_SLUG_DIVERGENTE({tema_slug}!={entry['temaSlug']})")
            if isinstance(tema, str) and tema.strip() and normalize_str(tema) != normalize_str(entry["tema"]):
                issues.append(f"TAXONOMIA_TEMA_DIVERGENTE({tema}!={entry['tema']})")
            if isinstance(subtema, str) and subtema.strip() and normalize_str(subtema) != normalize_str(entry["subtema"]):
                issues.append(f"TAXONOMIA_SUBTEMA_DIVERGENTE({subtema}!={entry['subtema']})")

            # Backfill canonical v1 fields only when no structural mismatch was flagged,
            # or always ensure missing canonical fields are populated cleanly
            if not issues:
                enriched["grandeAreaId"] = entry["grandeAreaId"]
                enriched["grandeArea"] = entry["grandeArea"]
                enriched["tema"] = entry["tema"]
                enriched["temaSlug"] = entry["temaSlug"]
                enriched["subtema"] = entry["subtema"]
                enriched["subtemaSlug"] = entry["subtemaSlug"]
                enriched["taxonomyVersion"] = self.taxonomy_version
            else:
                enriched.setdefault("grandeArea", GRANDE_AREA_LABELS.get(ga, entry["grandeArea"]))
                enriched.setdefault("taxonomyVersion", self.taxonomy_version)
        else:
            if not isinstance(ga, str) or ga not in self.grandes_areas:
                issues.append(f"TAXONOMIA_GRANDE_AREA_INVALIDA({ga})")
            else:
                valid_temas_norm = self.temas_norm_por_area.get(ga, {})
                canon_tema = valid_temas_norm.get(normalize_str(str(tema or "")))
                if not canon_tema:
                    issues.append(f"TAXONOMIA_TEMA_NAO_CANONICO({tema})")
                else:
                    valid_subs_norm = self.subtemas_norm_por_tema.get(canon_tema, {})
                    if normalize_str(str(subtema or "")) not in valid_subs_norm:
                        issues.append(f"TAXONOMIA_SUBTEMA_NAO_CANONICO({subtema})")

        if self.tag_format == "lowercase-kebab-case" and isinstance(tags, list):
            invalid_tags = [
                str(t)
                for t in tags
                if not isinstance(t, str)
                or not (2 <= len(t) <= 40)
                or not KEBAB_TAG_RE.match(t)
            ]
            if invalid_tags:
                issues.append(f"TAXONOMIA_TAGS_FORA_PADRAO({','.join(invalid_tags)})")

        return issues

    def validate(self, enriched: dict) -> List[str]:
        if not self.enabled:
            return []

        if self.is_v1:
            return self._validate_v1(enriched)

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


def validate_alternative_order(alternativas: object, anulada: bool = False) -> List[str]:
    """Garante ordem oficial contígua (A, B, C, D[, E]) sem lacunas ou inversões."""
    letters: List[str] = []
    if isinstance(alternativas, list):
        for item in alternativas:
            if isinstance(item, dict):
                letters.append(str(item.get("letter") or "").strip().upper())
    elif isinstance(alternativas, dict):
        letters = [str(k).strip().upper() for k in alternativas.keys()]
    else:
        return ["ORDEM_ALTERNATIVAS_INVALIDA(formato)"]

    expected = ["A", "B", "C", "D", "E"][: len(letters)]
    min_len = 2 if anulada else 4
    if len(letters) < min_len or len(letters) > 5 or letters != expected:
        return [f"ORDEM_ALTERNATIVAS_INVALIDA({','.join(letters)})"]
    return []


def check_gabarito_consistency(
    gabarito: Optional[str],
    anulada: bool,
    alternativas: Dict[str, str],
    explicacoes: Dict[str, str],
) -> List[str]:
    issues: List[str] = []
    issues.extend(validate_alternative_order(alternativas, anulada=anulada))
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
            slug_info = f" (`{q['subtemaSlug']}`)" if q.get("subtemaSlug") else ""
            tax_ver = f", taxonomia: `{q['taxonomyVersion']}`" if q.get("taxonomyVersion") else ""
            lines.append(
                f"- **Classificação:** `{q.get('grandeAreaId') or '-'}` > "
                f"`{q.get('tema') or '-'}` > `{q.get('subtema') or '-'}`{slug_info} "
                f"*(modelo: `{q.get('modeloUtilizado') or '-'}`{tax_ver})*"
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


def run_audit_jsonl(target_path: Path, taxonomy_validator: TaxonomyValidator) -> int:
    if not target_path.exists():
        sys.exit(f"Erro: caminho não encontrado para --audit-jsonl: {target_path}")

    files = sorted(target_path.glob("*.jsonl")) if target_path.is_dir() else [target_path]
    if not files:
        sys.exit(f"Erro: nenhum arquivo .jsonl encontrado em {target_path}")

    total = 0
    valid_tax = 0
    review_items: List[str] = []
    errors: List[Tuple[str, List[str]]] = []
    seen_ids: Set[str] = set()

    for jf in files:
        for line_no, raw in enumerate(jf.read_text(encoding="utf-8").splitlines(), start=1):
            if not raw.strip():
                continue
            rec = json.loads(raw)
            total += 1
            qid = str(rec.get("id") or f"{jf.stem}#L{line_no}")
            if qid in seen_ids:
                errors.append((qid, ["ID_DUPLICADO"]))
            seen_ids.add(qid)

            rec_copy = dict(rec)
            tax_issues = taxonomy_validator.validate(rec_copy)
            alt_issues = validate_alternative_order(
                rec.get("alternativas"),
                anulada=bool(rec.get("anulada")),
            )
            q_errors = list(tax_issues) + list(alt_issues)
            if not rec.get("anulada"):
                gab = str(rec.get("gabaritoOficial") or "").strip().upper()
                alts = rec.get("alternativas") or []
                alt_letters = (
                    {str(a.get("letter") or "").strip().upper() for a in alts if isinstance(a, dict)}
                    if isinstance(alts, list)
                    else {str(k).strip().upper() for k in alts.keys()} if isinstance(alts, dict) else set()
                )
                if not gab or gab not in alt_letters:
                    q_errors.append(f"GABARITO_FORA_DAS_ALTERNATIVAS({gab})")

            if q_errors:
                errors.append((qid, q_errors))
            else:
                valid_tax += 1

            if rec.get("needsTaxonomyReview") is True:
                review_items.append(f"{qid} ({rec.get('subtemaSlug') or rec.get('subtema')})")

    print("=== AUDITORIA JSONL (TAXONOMIA CANÔNICA) ===")
    print(f"Arquivos auditados   : {len(files)}")
    print(f"Taxonomia            : {taxonomy_validator.taxonomy_version} ({len(taxonomy_validator.by_subtema_slug)} subtemas)")
    print(f"Total de questões    : {total}")
    print(f"Taxonomia válida     : {valid_tax}/{total}")
    print(f"needsTaxonomyReview  : {len(review_items)}")
    if review_items:
        for item in review_items[:20]:
            print(f"  - [REVISAR] {item}")
    print(f"Erros de taxonomia   : {len(errors)}")
    if errors:
        for qid, errs in errors[:20]:
            print(f"  - [ERRO] {qid}: {', '.join(errs)}", file=sys.stderr)
        return 1
    return 0


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Merge determinístico e auditoria de questões")
    parser.add_argument("--extracted", type=Path, default=None, help="Caminho do extracted.json")
    parser.add_argument("--enriched", type=Path, default=None, help="Caminho do enriched.jsonl")
    parser.add_argument("--out", type=Path, default=None, help="Caminho do validated.json")
    parser.add_argument("--report", type=Path, default=None, help="Caminho do audit_report.md")
    parser.add_argument(
        "--audit-jsonl",
        type=Path,
        default=None,
        help="Audita arquivo .jsonl ou diretório (ex: data/provas) diretamente contra a taxonomia v1",
    )
    parser.add_argument(
        "--taxonomy",
        type=Path,
        default=DEFAULT_TAXONOMY_V1_PATH,
        help="Caminho de src/data/taxonomy/medr1_taxonomy_v1.json",
    )
    parser.add_argument("--existing-hashes", type=Path, default=None, help="JSON com hashes já no banco")
    parser.add_argument("--sim-threshold", type=float, default=0.92, help="Limiar de similaridade")
    parser.add_argument("--dry-run", action="store_true", help="Executa merge/auditoria sem gravar arquivos de saída")
    args = parser.parse_args()

    taxonomy_validator = TaxonomyValidator(args.taxonomy)

    if args.audit_jsonl is not None:
        raise SystemExit(run_audit_jsonl(args.audit_jsonl, taxonomy_validator))

    if not args.extracted or not args.enriched:
        sys.exit("Erro: informe --extracted e --enriched (ou use --audit-jsonl).")
    if not args.dry_run and (not args.out or not args.report):
        sys.exit("Erro: --out e --report são obrigatórios quando --dry-run não está ativo.")
    if not args.extracted.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.extracted}")
    if not args.enriched.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.enriched}")

    extracted_payload = json.loads(args.extracted.read_text(encoding="utf-8"))
    extracted_qs: List[dict] = extracted_payload.get("questoes") or extracted_payload.get("questions") or []
    enriched_map = load_enriched_map(args.enriched)
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
                "grandeArea": None,
                "tema": None,
                "temaSlug": None,
                "subtema": None,
                "subtemaSlug": None,
                "tags": [],
                "taxonomyVersion": taxonomy_validator.taxonomy_version if taxonomy_validator.enabled else None,
                "needsTaxonomyReview": False,
                "concordaComGabarito": None,
                "motivoDivergencia": enr.get("error") if enr else "Ausente no enriched.jsonl",
                "comentarioGeral": "",
                "explicacoesPorAlternativa": {},
                "analiseBanca": None,
                "mapaDistratores": {},
                "referencias": [],
                "modeloUtilizado": enr.get("_meta", {}).get("model") if enr else None,
            }
        else:
            if enr.get("concordaComGabarito") is False:
                flags.append("DIVERGENCIA_GABARITO")
                stats["divergenciasGabarito"] += 1
            if enr.get("precisaRevisaoHumana") is True:
                flags.append("SINALIZADA_PELO_LLM")
            if enr.get("needsTaxonomyReview") is True:
                flags.append("REVISAO_TAXONOMIA")

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

            ga_id = enr.get("grandeAreaId")
            merged = {
                "numeroOriginal": num,
                "enunciado": raw_q["enunciado"],
                "alternativas": raw_q["alternativas"],
                "gabaritoOficial": raw_q.get("gabaritoOficial"),
                "anulada": bool(raw_q.get("anulada")),
                "hasImage": bool(raw_q.get("hasImage")),
                "images": raw_q.get("images", []),
                "hashConteudo": raw_q.get("hashConteudo", ""),
                "grandeAreaId": ga_id,
                "grandeArea": enr.get("grandeArea") or GRANDE_AREA_LABELS.get(str(ga_id or "")),
                "tema": enr.get("tema"),
                "temaSlug": enr.get("temaSlug"),
                "subtema": enr.get("subtema"),
                "subtemaSlug": enr.get("subtemaSlug"),
                "tags": enr.get("tags", []),
                "taxonomyVersion": enr.get("taxonomyVersion")
                or (taxonomy_validator.taxonomy_version if taxonomy_validator.enabled else None),
                "needsTaxonomyReview": bool(enr.get("needsTaxonomyReview")),
                "concordaComGabarito": enr.get("concordaComGabarito"),
                "motivoDivergencia": enr.get("motivoDivergencia"),
                "comentarioGeral": enr.get("comentarioGeral", ""),
                "explicacoesPorAlternativa": enr.get("explicacoesPorAlternativa", {}),
                "analiseBanca": enr.get("analiseBanca"),
                "mapaDistratores": enr.get("mapaDistratores") or {},
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

    if not args.dry_run:
        assert args.out is not None and args.report is not None
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(json.dumps(output_payload, ensure_ascii=False, indent=2), encoding="utf-8")
        generate_audit_report(output_payload["meta"], audit_summary, flagged_qs, args.report)

    mode_label = " [DRY-RUN]" if args.dry_run else ""
    print(f"=== CHECKPOINT ESTÁGIO 3 (MERGE E AUDITORIA){mode_label} ===")
    print(f"Taxonomia            : {taxonomy_validator.taxonomy_version}")
    print(f"Total de questões    : {total}")
    print(f"Aprovadas direto     : {aprovadas} ({audit_summary['pctAprovadas']}%)")
    print(f"Sinalizadas [REVISAR]: {revisar} ({audit_summary['pctRevisar']}%)")
    print(f"Divergências gabarito: {stats['divergenciasGabarito']}")
    print(f"Erros de taxonomia   : {stats['errosTaxonomia']}")
    print(f"Duplicatas           : {stats['duplicatas']}")
    print(f"Falhas de API        : {stats['falhasApi']}")
    if not args.dry_run:
        print(f"JSON validado        : {args.out}")
        print(f"Relatório de revisão : {args.report}")


if __name__ == "__main__":
    main()
