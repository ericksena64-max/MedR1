#!/usr/bin/env python3
"""
Auditor somente leitura de integridade de dados do MedR1.
Verifica taxonomia v1 (262 subtemas), calibração bayesiana sem placeholders,
proteção de anuladas, ordem oficial contígua das alternativas (A-E),
paridade entre camadas (JSONL / TS / checkpoints / examCatalog.ts) e
sinais de fronteira clínica em Clínica Médica.
"""

from __future__ import annotations

import argparse
import glob
import json
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Any, Dict, List, Tuple

AREA_SLUG_TO_ID = {
    "cm": "clinica_medica",
    "cg": "cirurgia_geral",
    "go": "ginecologia_obstetricia",
    "ped": "pediatria",
    "mp": "medicina_preventiva",
}

FORBIDDEN_PLACEHOLDERS = {62.0, 64.0}
CALIBRATED_PRIORS = {76.5, 58.4, 36.8}


def strip_accents(value: str) -> str:
    return "".join(
        ch for ch in unicodedata.normalize("NFD", value or "")
        if unicodedata.category(ch) != "Mn"
    ).lower()


# High-precision clinical boundary triggers inside Clínica Médica
PED_BOUNDARY_RE = re.compile(
    r"\b(lactent\w*|pre-?escolar\w*|recem-?nascid\w*|neonato\w*|neonatal|pediatr\w*)\b"
)
OBS_BOUNDARY_RE = re.compile(
    r"\b(gestant\w*|gravida\w*|puerper\w*|idade gestacional|semanas de gesta\w*)\b"
)
SURG_BOUNDARY_RE = re.compile(
    r"\b(transfusao macica|protocolo de transfusao|choque hemorragico|laparotomi\w*)\b"
)


def load_taxonomy(tax_path: Path) -> Tuple[Dict[str, dict], int, int]:
    data = json.loads(tax_path.read_text(encoding="utf-8"))
    by_slug: Dict[str, dict] = {}
    tema_count = 0
    for ga in data.get("grandeAreas", []):
        ga_id = AREA_SLUG_TO_ID[ga["slug"]]
        for t in ga.get("temas", []):
            tema_count += 1
            for s in t.get("subtemas", []):
                by_slug[s["slug"]] = {
                    "grandeAreaId": ga_id,
                    "grandeArea": ga["label"],
                    "temaSlug": t["slug"],
                    "tema": t["label"],
                    "subtemaSlug": s["slug"],
                    "subtema": s["label"],
                }
    return by_slug, len(data.get("grandeAreas", [])), tema_count


def parse_ts_json_array(ts_path: Path) -> List[dict]:
    txt = ts_path.read_text(encoding="utf-8")
    arr_start = txt.index("= [") + 2
    arr_end = txt.rindex("]") + 1
    return json.loads(txt[arr_start:arr_end])


def parse_curated_questions_ts(path: Path) -> List[dict]:
    txt = path.read_text(encoding="utf-8")
    blocks = re.split(r"(?=\n  \{\n    id:)", txt)[1:]
    out: List[dict] = []
    for block in blocks:
        qid = re.search(r"id:\s*'([^']+)'", block).group(1)
        ga_id = re.search(r"grandeAreaId:\s*'([^']+)'", block).group(1)
        ann = re.search(r"anulada:\s*(true|false)", block).group(1) == "true"
        gab = re.search(r"gabaritoOficial:\s*'([A-E])'", block).group(1)
        tax_glob = float(re.search(r"taxaAcertoGlobal:\s*([0-9]+(?:\.[0-9]+)?)", block).group(1))
        base_m = re.search(r"taxaAcertoBase:\s*([0-9]+(?:\.[0-9]+)?)", block)
        tax_base = float(base_m.group(1)) if base_m else None
        letters = re.findall(r"letter:\s*'([A-E])'", block)
        sub_slug_m = re.search(r"subtemaSlug:\s*'([^']+)'", block)
        en_m = re.search(r"enunciado:\s*(['\"`])([\s\S]*?)\1,", block)
        out.append(
            {
                "id": qid,
                "grandeAreaId": ga_id,
                "anulada": ann,
                "gabaritoOficial": gab,
                "taxaAcertoGlobal": tax_glob,
                "taxaAcertoBase": tax_base,
                "letters": letters,
                "subtemaSlug": sub_slug_m.group(1) if sub_slug_m else None,
                "enunciado": en_m.group(2) if en_m else "",
            }
        )
    return out


def parse_exam_catalog(path: Path) -> Dict[str, dict]:
    txt = path.read_text(encoding="utf-8")
    pattern = re.compile(
        r"idPrefix:\s*'([^']+)'[\s\S]*?"
        r"questionCount:\s*(\d+)[\s\S]*?"
        r"activeCount:\s*(\d+)[\s\S]*?"
        r"areaCounts:\s*\{([^}]+)\}",
        re.M,
    )
    entries: Dict[str, dict] = {}
    for m in pattern.finditer(txt):
        prefix = m.group(1)
        q_count = int(m.group(2))
        a_count = int(m.group(3))
        areas: Dict[str, int] = {}
        for am in re.finditer(r"([a-z_]+)\s*:\s*(\d+)", m.group(4)):
            areas[am.group(1)] = int(am.group(2))
        entries[prefix] = {
            "questionCount": q_count,
            "activeCount": a_count,
            "areaCounts": areas,
        }
    return entries


def validate_alt_sequence(letters: List[str], anulada: bool) -> bool:
    expected = ["A", "B", "C", "D", "E"][: len(letters)]
    min_len = 2 if anulada else 4
    return min_len <= len(letters) <= 5 and letters == expected


def diff_bucket(taxa: float, anulada: bool) -> str:
    if anulada:
        return "Anulada"
    if taxa > 70:
        return "Fácil"
    if taxa >= 40:
        return "Médio"
    return "Difícil"


def main() -> int:
    parser = argparse.ArgumentParser(description="Auditor de integridade do banco MedR1")
    parser.add_argument("--root", type=Path, default=Path.cwd(), help="Raiz do projeto MedR1")
    parser.add_argument("--verbose", action="store_true", help="Exibe detalhes de avisos")
    parser.add_argument(
        "--strict-boundaries",
        action="store_true",
        help="Trata alertas de fronteira clínica em Clínica Médica como erro bloqueante",
    )
    args = parser.parse_args()
    root = args.root.resolve()

    tax_path = root / "src" / "data" / "taxonomy" / "medr1_taxonomy_v1.json"
    cls_path = root / "data" / "classification" / "classification_v1.json"
    diff_path = root / "data" / "classification" / "difficulty_v1.json"
    catalog_path = root / "src" / "data" / "examCatalog.ts"
    curated_path = root / "src" / "data" / "questions.ts"

    failures: List[str] = []
    warnings: List[str] = []

    tax_by_slug, ga_count, tema_count = load_taxonomy(tax_path)
    if ga_count != 5 or tema_count != 44 or len(tax_by_slug) != 262:
        failures.append(
            f"TAXONOMIA_ESTRUTURA: esperado 5 áreas / 44 temas / 262 subtemas, "
            f"encontrado {ga_count} / {tema_count} / {len(tax_by_slug)}"
        )

    cls_map: Dict[str, dict] = json.loads(cls_path.read_text(encoding="utf-8"))
    diff_map: Dict[str, dict] = json.loads(diff_path.read_text(encoding="utf-8"))

    jsonl_files = sorted((root / "data" / "provas").glob("*.jsonl"))
    ts_files = sorted((root / "src" / "data").glob("*Questions.ts"))
    if len(jsonl_files) != len(ts_files):
        failures.append(
            f"QUANTIDADE_ARQUIVOS: {len(jsonl_files)} JSONL vs {len(ts_files)} *Questions.ts"
        )

    jsonl_by_id: Dict[str, dict] = {}
    for jf in jsonl_files:
        for line_no, line in enumerate(jf.read_text(encoding="utf-8").splitlines(), start=1):
            if not line.strip():
                continue
            q = json.loads(line)
            qid = q.get("id")
            if not qid or qid in jsonl_by_id:
                failures.append(f"JSONL_ID_INVALIDO_OU_DUPLICADO: {jf.name}#L{line_no} ({qid})")
                continue
            jsonl_by_id[qid] = q

    ts_by_id: Dict[str, dict] = {}
    for tf in ts_files:
        for q in parse_ts_json_array(tf):
            qid = q.get("id")
            if not qid or qid in ts_by_id:
                failures.append(f"TS_ID_INVALIDO_OU_DUPLICADO: {tf.name} ({qid})")
                continue
            ts_by_id[qid] = q

    # 1. ID parity across JSONL, TS, classification_v1, difficulty_v1
    j_ids, t_ids, c_ids, d_ids = (
        set(jsonl_by_id),
        set(ts_by_id),
        set(cls_map),
        set(diff_map),
    )
    if not (j_ids == t_ids == c_ids == d_ids):
        failures.append(
            f"PARIDADE_IDS_QUEBRADA: jsonl={len(j_ids)}, ts={len(t_ids)}, "
            f"cls={len(c_ids)}, diff={len(d_ids)}"
        )

    area_counts = Counter()
    diff_counts = Counter()
    boundary_hits: List[str] = []

    # 2. Audit all 1,156 official questions
    for qid in sorted(j_ids & t_ids):
        jq = jsonl_by_id[qid]
        tq = ts_by_id[qid]
        anulada = bool(tq.get("anulada"))

        # Placeholders
        for label, rec in (("JSONL", jq), ("TS", tq)):
            t_glob = rec.get("taxaAcertoGlobal")
            t_base = rec.get("taxaAcertoBase")
            if t_glob in FORBIDDEN_PLACEHOLDERS or t_base in FORBIDDEN_PLACEHOLDERS:
                failures.append(
                    f"PLACEHOLDER_PROIBIDO: {qid} [{label}] base={t_base}, global={t_glob}"
                )
            if t_base is None or t_glob is None:
                failures.append(f"CAMPO_TAXA_AUSENTE: {qid} [{label}]")

        # Annulled invariant
        t_glob = float(tq.get("taxaAcertoGlobal", -1))
        t_base = float(tq.get("taxaAcertoBase", -1))
        if anulada:
            if t_glob != 0.0 or t_base != 0.0:
                failures.append(
                    f"ANULADA_TAXA_NAO_ZERO: {qid} base={t_base}, global={t_glob}"
                )
        else:
            if t_glob <= 0.0 or t_base <= 0.0:
                failures.append(
                    f"VALIDA_TAXA_ZERO_OU_NEGATIVA: {qid} base={t_base}, global={t_glob}"
                )

        # Taxonomy v1 validation
        sslug = tq.get("subtemaSlug")
        tax_entry = tax_by_slug.get(sslug)
        if not tax_entry:
            failures.append(f"SUBTEMA_SLUG_INVALIDO: {qid} ({sslug})")
        else:
            for field in ("grandeAreaId", "grandeArea", "temaSlug", "tema", "subtema"):
                if tq.get(field) != tax_entry[field]:
                    failures.append(
                        f"TAXONOMIA_INCOERENTE_TS: {qid} {field}={tq.get(field)!r} != {tax_entry[field]!r}"
                    )
                if jq.get(field) != tax_entry[field]:
                    failures.append(
                        f"TAXONOMIA_INCOERENTE_JSONL: {qid} {field}={jq.get(field)!r} != {tax_entry[field]!r}"
                    )
        if tq.get("taxonomyVersion") != "medr1_taxonomy_v1" or jq.get("taxonomyVersion") != "medr1_taxonomy_v1":
            failures.append(f"TAXONOMY_VERSION_INVALIDA: {qid}")

        # Checkpoints parity
        if qid in cls_map:
            ce = cls_map[qid]
            if ce.get("subtemaSlug") != sslug or ce.get("grandeAreaId") != tq.get("grandeAreaId"):
                failures.append(f"PARIDADE_CLASSIFICATION_V1: {qid}")
        if qid in diff_map:
            de = diff_map[qid]
            if float(de.get("taxaAcertoGlobal", -1)) != t_glob or float(de.get("taxaAcertoBase", -1)) != t_base:
                failures.append(f"PARIDADE_DIFFICULTY_V1: {qid}")

        # Alternative order & gabarito
        t_letters = [str(a.get("letter", "")).upper() for a in tq.get("alternativas", [])]
        j_letters = [str(a.get("letter", "")).upper() for a in jq.get("alternativas", [])]
        if not validate_alt_sequence(t_letters, anulada) or t_letters != j_letters:
            failures.append(f"ORDEM_ALTERNATIVAS_INVALIDA: {qid} ts={t_letters} jsonl={j_letters}")
        else:
            t_texts = [str(a.get("text", "")).strip() for a in tq.get("alternativas", [])]
            j_texts = [str(a.get("text", "")).strip() for a in jq.get("alternativas", [])]
            if t_texts != j_texts:
                failures.append(f"TEXTO_ALTERNATIVAS_DIVERGENTE: {qid}")

        gab_t = str(tq.get("gabaritoOficial", "")).upper()
        gab_j = str(jq.get("gabaritoOficial", "")).upper()
        if gab_t != gab_j or bool(jq.get("anulada")) != anulada:
            failures.append(f"GABARITO_OU_ANULADA_DIVERGENTE: {qid}")
        if not anulada and gab_t not in t_letters:
            failures.append(f"GABARITO_FORA_DAS_ALTERNATIVAS: {qid} gab={gab_t} letters={t_letters}")

        # Stats & boundary check
        area_counts[tq["grandeAreaId"]] += 1
        diff_counts[diff_bucket(t_glob, anulada)] += 1
        if tq.get("grandeAreaId") == "clinica_medica":
            norm_en = strip_accents(tq.get("enunciado", ""))
            matched = []
            if PED_BOUNDARY_RE.search(norm_en):
                matched.append("PED")
            if OBS_BOUNDARY_RE.search(norm_en):
                matched.append("GO")
            if SURG_BOUNDARY_RE.search(norm_en):
                matched.append("CG")
            if matched:
                boundary_hits.append(f"{qid} [{','.join(matched)}] ({sslug})")

    # 3. Audit curated src/data/questions.ts (18 questions)
    curated = parse_curated_questions_ts(curated_path)
    for cq in curated:
        qid = cq["id"]
        anulada = cq["anulada"]
        t_glob = cq["taxaAcertoGlobal"]
        t_base = cq["taxaAcertoBase"]
        if t_glob in FORBIDDEN_PLACEHOLDERS or (t_base is not None and t_base in FORBIDDEN_PLACEHOLDERS):
            failures.append(f"PLACEHOLDER_PROIBIDO_CURATED: {qid} global={t_glob}")
        if anulada and t_glob != 0.0:
            failures.append(f"ANULADA_CURATED_TAXA_NAO_ZERO: {qid} global={t_glob}")
        if not anulada and t_glob <= 0.0:
            failures.append(f"VALIDA_CURATED_TAXA_ZERO: {qid} global={t_glob}")
        if cq["subtemaSlug"] and cq["subtemaSlug"] not in tax_by_slug:
            failures.append(f"SUBTEMA_SLUG_CURATED_INVALIDO: {qid}")
        if not validate_alt_sequence(cq["letters"], anulada):
            failures.append(f"ORDEM_ALTERNATIVAS_CURATED: {qid} letters={cq['letters']}")
        if not anulada and cq["gabaritoOficial"] not in cq["letters"]:
            failures.append(f"GABARITO_CURATED_INVALIDO: {qid}")
        area_counts[cq["grandeAreaId"]] += 1
        diff_counts[diff_bucket(t_glob, anulada)] += 1

    # 4. Audit src/data/examCatalog.ts manifest counts
    catalog_entries = parse_exam_catalog(catalog_path)
    for prefix, entry in catalog_entries.items():
        matching = [q for qid, q in ts_by_id.items() if qid.startswith(prefix)]
        if len(matching) != entry["questionCount"]:
            failures.append(
                f"CATALOG_QUESTION_COUNT: {prefix} manifesto={entry['questionCount']} real={len(matching)}"
            )
        active = sum(1 for q in matching if not q.get("anulada") and not q.get("desatualizada"))
        if active != entry["activeCount"]:
            failures.append(
                f"CATALOG_ACTIVE_COUNT: {prefix} manifesto={entry['activeCount']} real={active}"
            )
        real_areas = Counter(q["grandeAreaId"] for q in matching)
        for area_id, expected_n in entry["areaCounts"].items():
            if real_areas.get(area_id, 0) != expected_n:
                failures.append(
                    f"CATALOG_AREA_COUNT: {prefix} {area_id} manifesto={expected_n} real={real_areas.get(area_id, 0)}"
                )

    if boundary_hits:
        msg = f"FRONTEIRA_CLINICA_REVISAR ({len(boundary_hits)} sinais em clinica_medica): {', '.join(boundary_hits[:10])}"
        if args.strict_boundaries:
            failures.append(msg)
        else:
            warnings.append(msg)

    total_questions = len(ts_by_id) + len(curated)
    print("=== AUDITORIA DE INTEGRIDADE MEDR1 ===")
    print(f"Taxonomia canônica   : {ga_count} áreas | {tema_count} temas | {len(tax_by_slug)} subtemas")
    print(f"Questões auditadas   : {total_questions} ({len(ts_by_id)} oficiais + {len(curated)} curadas)")
    print(f"Grandes Áreas        : {dict(area_counts)}")
    print(f"Dificuldade          : {dict(diff_counts)}")
    print(f"Falhas bloqueantes   : {len(failures)}")
    print(f"Avisos informativos  : {len(warnings)}")

    if args.verbose and warnings:
        for w in warnings:
            print(f"  [WARN] {w}")
    elif warnings:
        print(f"  [WARN] {warnings[0]}")

    if failures:
        for f in failures[:30]:
            print(f"  [FAIL] {f}", file=sys.stderr)
        return 1

    print("[PASS] Todas as invariantes de integridade do MedR1 foram verificadas com 0 falhas.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
