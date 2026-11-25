#!/usr/bin/env python3
"""
Estágio 1 do MedR1 Batch Pipeline:
Extração 100% determinística de PDFs de provas de residência médica (0 tokens de LLM).
Dependência: pip install pymupdf
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import fitz  # PyMuPDF

DEFAULT_PROFILES = {
    "GENERICO": {
        "cols": 2,
        "header_margin_ratio": 0.06,
        "footer_margin_ratio": 0.06,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})\s*[\.\-\)\:]?(?:\s+|$)",
        "alt_regex": r"^\(?([A-E])\)?[\.\)\-\:]\s+(.+)$",
    },
    "ENARE": {
        "cols": 2,
        "header_margin_ratio": 0.075,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})(?:\s*$|\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\(])",
        "alt_regex": r"^\(?([A-E])\)?[\)\.]\s+(.+)$",
    },
    "USP": {
        "cols": 1,
        "header_margin_ratio": 0.065,
        "footer_margin_ratio": 0.06,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})[\.\-\)]?(?:\s+|$)",
        "alt_regex": r"^\(?([A-D])\)?[\)\.]\s+(.+)$",
    },
    "SUS-SP": {
        "cols": 2,
        "header_margin_ratio": 0.065,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})\.\s+",
        "alt_regex": r"^\(([A-E])\)\s+(.+)$",
    },
    "UEPA": {
        "cols": 2,
        "header_margin_ratio": 0.08,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})[\.\-\)]\s*",
        "alt_regex": r"^([a-eA-E])[\)\.]\s+(.+)$",
    },
}


@dataclass
class TextBlock:
    page_num: int
    col: int
    x0: float
    y0: float
    x1: float
    y1: float
    text: str


@dataclass
class QuestionSpan:
    page_num: int
    col: int
    y0: float
    y1: float


@dataclass
class ExtractedQuestion:
    numeroOriginal: int
    enunciado: str = ""
    alternativas: Dict[str, str] = field(default_factory=dict)
    gabaritoOficial: Optional[str] = None
    anulada: bool = False
    hasImage: bool = False
    images: List[str] = field(default_factory=list)
    hashConteudo: str = ""
    spans: List[QuestionSpan] = field(default_factory=list)

    def to_public_dict(self) -> dict:
        data = asdict(self)
        data.pop("spans", None)
        return data


def load_profile(banca: str, profiles_path: Optional[Path]) -> dict:
    banca_key = banca.upper()
    if profiles_path and profiles_path.exists():
        custom = json.loads(profiles_path.read_text(encoding="utf-8"))
        if banca_key in custom:
            return {**DEFAULT_PROFILES["GENERICO"], **custom[banca_key]}
    return DEFAULT_PROFILES.get(banca_key, DEFAULT_PROFILES["GENERICO"])


def extract_sorted_blocks(doc: fitz.Document, profile: dict) -> List[TextBlock]:
    num_cols = profile["cols"]
    header_ratio = profile["header_margin_ratio"]
    footer_ratio = profile["footer_margin_ratio"]
    all_blocks: List[TextBlock] = []

    for page_idx, page in enumerate(doc):
        rect = page.rect
        min_y = rect.height * header_ratio
        max_y = rect.height * (1.0 - footer_ratio)
        mid_x = rect.width / 2.0

        raw_blocks = page.get_text("blocks")
        page_blocks: List[TextBlock] = []

        for b in raw_blocks:
            x0, y0, x1, y1, text, _, block_type = b
            if block_type != 0:
                continue
            cleaned = text.strip()
            if not cleaned:
                continue
            if y1 < min_y or y0 > max_y:
                continue

            if num_cols == 2:
                block_center = (x0 + x1) / 2.0
                col = 0 if block_center < mid_x else 1
            else:
                col = 0

            page_blocks.append(TextBlock(page_idx, col, x0, y0, x1, y1, cleaned))

        page_blocks.sort(key=lambda blk: (blk.col, round(blk.y0, 1), round(blk.x0, 1)))
        all_blocks.extend(page_blocks)

    return all_blocks


def parse_questions_state_machine(blocks: List[TextBlock], profile: dict) -> List[ExtractedQuestion]:
    q_re = re.compile(profile["question_regex"], re.IGNORECASE)
    alt_re = re.compile(profile["alt_regex"])

    questions: List[ExtractedQuestion] = []
    current: Optional[ExtractedQuestion] = None
    state = "IDLE"
    current_alt: Optional[str] = None

    def register_span(q: ExtractedQuestion, blk: TextBlock) -> None:
        if q.spans and q.spans[-1].page_num == blk.page_num and q.spans[-1].col == blk.col:
            q.spans[-1].y1 = max(q.spans[-1].y1, blk.y1)
        else:
            q.spans.append(QuestionSpan(blk.page_num, blk.col, blk.y0, blk.y1))

    for blk in blocks:
        lines = [ln.strip() for ln in blk.text.splitlines() if ln.strip()]
        for line in lines:
            q_match = q_re.match(line)
            if q_match:
                num = int(q_match.group(1))
                if 1 <= num <= 250 and (current is None or num != current.numeroOriginal):
                    if current is not None:
                        questions.append(current)
                    remainder = line[q_match.end():].strip()
                    current = ExtractedQuestion(numeroOriginal=num, enunciado=remainder)
                    register_span(current, blk)
                    state = "ENUNCIADO"
                    current_alt = None
                    continue

            if current is None:
                continue

            register_span(current, blk)

            alt_match = alt_re.match(line)
            if alt_match:
                letter = alt_match.group(1).upper()
                alt_text = alt_match.group(2).strip()
                if letter == "A" or (current_alt is not None and letter in "BCDE"):
                    state = "ALT"
                    current_alt = letter
                    current.alternativas[letter] = alt_text
                    continue

            if state == "ENUNCIADO":
                current.enunciado = f"{current.enunciado} {line}".strip()
            elif state == "ALT" and current_alt:
                current.alternativas[current_alt] = f"{current.alternativas[current_alt]} {line}".strip()

    if current is not None:
        questions.append(current)

    for q in questions:
        q.enunciado = re.sub(r"\s+", " ", q.enunciado).strip()
        for k in list(q.alternativas.keys()):
            q.alternativas[k] = re.sub(r"\s+", " ", q.alternativas[k]).strip()
        raw_sig = q.enunciado + "|" + "|".join(f"{k}:{v}" for k, v in sorted(q.alternativas.items()))
        q.hashConteudo = hashlib.sha256(raw_sig.encode("utf-8")).hexdigest()[:16]

    return questions


def extract_clinical_images(
    doc: fitz.Document,
    questions: List[ExtractedQuestion],
    img_dir: Path,
    profile: dict,
    min_area_px: float = 4500.0,
) -> int:
    img_dir.mkdir(parents=True, exist_ok=True)
    num_cols = profile["cols"]
    header_ratio = profile["header_margin_ratio"]
    footer_ratio = profile["footer_margin_ratio"]
    total_saved = 0

    spans_by_page: Dict[int, List[Tuple[ExtractedQuestion, QuestionSpan]]] = {}
    for q in questions:
        for sp in q.spans:
            spans_by_page.setdefault(sp.page_num, []).append((q, sp))

    for page_idx, page in enumerate(doc):
        if page_idx not in spans_by_page:
            continue

        rect = page.rect
        min_y = rect.height * header_ratio
        max_y = rect.height * (1.0 - footer_ratio)
        mid_x = rect.width / 2.0

        candidates: List[fitz.Rect] = []
        for info in page.get_image_info(xrefs=True):
            bbox = fitz.Rect(info["bbox"])
            if bbox.y1 < min_y or bbox.y0 > max_y:
                continue
            if bbox.get_area() < min_area_px:
                continue
            candidates.append(bbox)

        for idx, bbox in enumerate(candidates):
            img_center_x = (bbox.x0 + bbox.x1) / 2.0
            img_col = 0 if (num_cols == 1 or img_center_x < mid_x) else 1

            matched_q: Optional[ExtractedQuestion] = None
            best_dist = float("inf")

            for q, sp in spans_by_page[page_idx]:
                if sp.col != img_col:
                    continue
                if sp.y0 - 20 <= bbox.y0 <= sp.y1 + 20:
                    matched_q = q
                    break
                if sp.y1 <= bbox.y0 and (bbox.y0 - sp.y1) < best_dist:
                    best_dist = bbox.y0 - sp.y1
                    matched_q = q

            if matched_q is None:
                continue

            clip_rect = fitz.Rect(
                max(rect.x0, bbox.x0 - 6),
                max(rect.y0, bbox.y0 - 6),
                min(rect.x1, bbox.x1 + 6),
                min(rect.y1, bbox.y1 + 6),
            )
            pix = page.get_pixmap(clip=clip_rect, dpi=200)
            filename = f"q{matched_q.numeroOriginal:03d}_p{page_idx + 1}_{idx + 1}.png"
            out_file = img_dir / filename
            pix.save(str(out_file))

            matched_q.hasImage = True
            matched_q.images.append(str(out_file))
            total_saved += 1

    return total_saved


def parse_gabarito(gabarito_path: Path, caderno: str) -> Dict[int, Tuple[Optional[str], bool]]:
    doc = fitz.open(str(gabarito_path))
    full_text = "\n".join(page.get_text("text") for page in doc)
    doc.close()

    caderno_pattern = re.compile(rf"(?:CADERNO|TIPO|PROVA)\s*{re.escape(caderno)}\b", re.IGNORECASE)
    match = caderno_pattern.search(full_text)
    target_text = full_text[match.start():] if match else full_text

    pair_re = re.compile(
        r"\b0*(\d{1,3})\s*[\-\:\.\)\s]+\s*([A-E]|ANUL(?:ADA)?|NULA|\*|X)\b",
        re.IGNORECASE,
    )

    answers: Dict[int, Tuple[Optional[str], bool]] = {}
    for m in pair_re.finditer(target_text):
        num = int(m.group(1))
        val = m.group(2).upper()
        if not (1 <= num <= 250) or num in answers:
            continue
        if val in ("*", "X") or val.startswith("ANUL") or val == "NULA":
            answers[num] = (None, True)
        else:
            answers[num] = (val, False)

    return answers


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Extração determinística de prova PDF")
    parser.add_argument("--prova", required=True, type=Path, help="Caminho do PDF da prova")
    parser.add_argument("--gabarito", required=True, type=Path, help="Caminho do PDF do gabarito")
    parser.add_argument("--banca", default="GENERICO", help="Banca (ENARE, USP, UNIFESP, SUS-SP, PSU-MG, UEPA)")
    parser.add_argument("--caderno", required=True, help="Identificador do caderno/tipo (ex: A, B, 1, 2)")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do JSON de saída")
    parser.add_argument("--profiles", type=Path, default=None, help="JSON opcional de perfis por banca")
    parser.add_argument("--img-dir", type=Path, default=None, help="Diretório para salvar imagens recortadas")
    args = parser.parse_args()

    if not args.prova.exists():
        sys.exit(f"Erro: arquivo da prova não encontrado: {args.prova}")
    if not args.gabarito.exists():
        sys.exit(f"Erro: arquivo do gabarito não encontrado: {args.gabarito}")

    profile = load_profile(args.banca, args.profiles)
    img_dir = args.img_dir or (args.out.parent / "images")

    doc = fitz.open(str(args.prova))
    blocks = extract_sorted_blocks(doc, profile)
    questions = parse_questions_state_machine(blocks, profile)
    total_images = extract_clinical_images(doc, questions, img_dir, profile)
    doc.close()

    gabarito = parse_gabarito(args.gabarito, args.caderno)

    sem_gabarito = []
    anuladas = []
    poucas_alts = []

    for q in questions:
        if q.numeroOriginal in gabarito:
            letra, is_anulada = gabarito[q.numeroOriginal]
            q.gabaritoOficial = letra
            q.anulada = is_anulada
            if is_anulada:
                anuladas.append(q.numeroOriginal)
        else:
            sem_gabarito.append(q.numeroOriginal)

        if len(q.alternativas) < 4:
            poucas_alts.append(q.numeroOriginal)

    payload = {
        "meta": {
            "prova": args.prova.name,
            "gabarito": args.gabarito.name,
            "banca": args.banca.upper(),
            "caderno": args.caderno,
            "totalQuestoes": len(questions),
            "totalImagensRecortadas": total_images,
        },
        "questoes": [q.to_public_dict() for q in questions],
    }

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    print("=== CHECKPOINT ESTÁGIO 1 (EXTRAÇÃO DETERMINÍSTICA) ===")
    print(f"Banca / Caderno      : {args.banca.upper()} / {args.caderno}")
    print(f"Questões extraídas   : {len(questions)}")
    print(f"Imagens recortadas   : {total_images} (em {img_dir})")
    print(f"Questões anuladas    : {len(anuladas)} {anuladas if anuladas else ''}")
    print(f"Sem gabarito         : {len(sem_gabarito)} {sem_gabarito if sem_gabarito else ''}")
    print(f"Com menos de 4 alts  : {len(poucas_alts)} {poucas_alts if poucas_alts else ''}")
    print(f"Arquivo gerado       : {args.out}")

    if sem_gabarito or poucas_alts:
        print("\n[ATENÇÃO] Revise o perfil em references/perfis_bancas.json antes de rodar o Estágio 2.")


if __name__ == "__main__":
    main()
