#!/usr/bin/env python3
"""
Deterministic extractor for the 2023 Top-4 SP Residency Exam Pack
from ~/Downloads/r1med/BANCO DE QUESTÕES R1.pdf:
  - USP-RP 2023  (pp 2667-2711, 100q)
  - USP-SP 2023  (pp 2963-3039, 120q)
  - SUS-SP 2023  (pp 1626-1664, 100q)
  - UNIFESP 2023 (pp 2282-2307, 100q)

Extracts:
  - Verbatim stems & alternatives (stripping watermarks only)
  - Coordinate-aligned official answer keys (supports horizontal & vertical table layouts)
  - Clinical images saved directly to public/assets/exams/<exam-id>/ via fitz.Pixmap
"""

import glob
import json
import os
import re
import sys
from collections import Counter
from pathlib import Path
import fitz

ROOT = Path(__file__).resolve().parent.parent
OUT_TMP = ROOT / "tmp" / "r1-2023"
PUBLIC_ASSETS = ROOT / "public" / "assets" / "exams"

EXAMS = [
    {
        "id": "usp-rp-2023",
        "label": "USP-RP 2023",
        "codePrefix": "Q-USPRP23",
        "instituicao": "USP-RP",
        "banca": "USP-RP",
        "estado": "SP",
        "regiao": "Sudeste",
        "ano": 2023,
        "tipoProva": "Acesso Direto",
        "startPage": 2667,
        "endPage": 2711,
        "expectedCount": 100,
        "expectedAlts": 4,
    },
    {
        "id": "usp-sp-2023",
        "label": "USP-SP 2023",
        "codePrefix": "Q-USPSP23",
        "instituicao": "USP-SP",
        "banca": "USP-SP",
        "estado": "SP",
        "regiao": "Sudeste",
        "ano": 2023,
        "tipoProva": "Acesso Direto",
        "startPage": 2963,
        "endPage": 3039,
        "expectedCount": 120,
        "expectedAlts": 4,
    },
    {
        "id": "sus-sp-2023",
        "label": "SUS-SP 2023",
        "codePrefix": "Q-SUSSP23",
        "instituicao": "SUS-SP",
        "banca": "SUS-SP",
        "estado": "SP",
        "regiao": "Sudeste",
        "ano": 2023,
        "tipoProva": "Acesso Direto",
        "startPage": 1626,
        "endPage": 1664,
        "expectedCount": 100,
        "expectedAlts": 5,
    },
    {
        "id": "unifesp-2023",
        "label": "UNIFESP 2023",
        "codePrefix": "Q-UNIFESP23",
        "instituicao": "UNIFESP",
        "banca": "UNIFESP",
        "estado": "SP",
        "regiao": "Sudeste",
        "ano": 2023,
        "tipoProva": "Acesso Direto",
        "startPage": 2282,
        "endPage": 2307,
        "expectedCount": 100,
        "expectedAlts": 4,
    },
]

WATERMARK_PATTERNS = [
    re.compile(r"Medicina\s+livre,\s+venda\s+proibida\.?.*?@livremedicina", re.I),
    re.compile(r"Twitter\s*@livremedicina", re.I),
    re.compile(r"@casalmedresumos", re.I),
    re.compile(r"^\s*www\.[a-z0-9.-]+\.[a-z]{2,}\s*$", re.I),
    re.compile(r"^\s*Página\s+\d+\s*(?:de\s+\d+)?\s*$", re.I),
]


def clean_line(line: str) -> str:
    s = line.strip()
    if not s:
        return ""
    for pat in WATERMARK_PATTERNS:
        s = pat.sub("", s).strip()
    return s


def parse_gabarito_page(page: fitz.Page, expected_count: int) -> dict[int, str]:
    words = page.get_text("words")
    nums = []
    ans = []
    for x0, y0, x1, y1, w, *_ in words:
        w_clean = w.strip().rstrip(").:-")
        cx = (x0 + x1) / 2.0
        cy = (y0 + y1) / 2.0
        if re.fullmatch(r"\d{1,3}", w_clean):
            n = int(w_clean)
            if 1 <= n <= expected_count:
                nums.append((n, x0, x1, cx, cy))
        elif re.fullmatch(r"[A-E]|!|ANULADA?|X|\*", w_clean, re.I):
            val = (
                "ANULADA"
                if w_clean in ("!", "X", "*") or w_clean.upper().startswith("ANUL")
                else w_clean.upper()
            )
            ans.append((val, x0, x1, cx, cy))

    # Try horizontal pairing (answer to the right on same row)
    horiz: dict[int, str] = {}
    for n, nx0, nx1, ncx, ncy in nums:
        cands = [
            (ax0 - nx1, val)
            for val, ax0, ax1, acx, acy in ans
            if abs(acy - ncy) < 8.0 and ax0 >= nx0 and (ax0 - nx1) < 50.0
        ]
        if cands:
            cands.sort(key=lambda t: t[0])
            horiz[n] = cands[0][1]

    # Try vertical pairing (answer directly below in same column)
    vert: dict[int, str] = {}
    for n, nx0, nx1, ncx, ncy in nums:
        cands = [
            (acy - ncy, val)
            for val, ax0, ax1, acx, acy in ans
            if abs(acx - ncx) < 12.0 and acy > ncy and (acy - ncy) < 35.0
        ]
        if cands:
            cands.sort(key=lambda t: t[0])
            vert[n] = cands[0][1]

    return horiz if len(horiz) >= len(vert) else vert


def extract_exam(doc: fitz.Document, cfg: dict) -> dict:
    exam_id = cfg["id"]
    start_idx = cfg["startPage"] - 1
    end_idx = cfg["endPage"] - 1  # gabarito page
    expected_count = cfg["expectedCount"]

    # 1. Parse gabarito on the final page
    gabarito = parse_gabarito_page(doc[end_idx], expected_count)

    # 2. Identify repeated decorative image xrefs (headers/footers/logos appearing > 3 pages)
    xref_pages: Counter[int] = Counter()
    for pno in range(start_idx, end_idx):
        seen_on_page = set()
        for img in doc[pno].get_images(full=True):
            xref = img[0]
            if xref not in seen_on_page:
                xref_pages[xref] += 1
                seen_on_page.add(xref)
    repeated_xrefs = {x for x, cnt in xref_pages.items() if cnt > 3}

    # 3. Extract text lines with (page_num, y0) coordinates so we can anchor images to questions
    #    We iterate question pages (start_idx .. end_idx - 1)
    q_header_re = re.compile(r"^(\d{1,3})\s*\)\s*(.*)$")
    alt_re = re.compile(r"^([A-E])\s*\)\s*(.*)$")

    # Collect ordered stream of lines with metadata
    line_stream = []  # list of (pno_1based, y0, text)
    for pno in range(start_idx, end_idx):
        page = doc[pno]
        blocks = page.get_text("dict")["blocks"]
        page_lines = []
        for b in blocks:
            if b.get("type") != 0:
                continue
            for ln in b.get("lines", []):
                y0 = ln["bbox"][1]
                x0 = ln["bbox"][0]
                text = "".join(sp.get("text", "") for sp in ln.get("spans", []))
                cleaned = clean_line(text)
                if cleaned:
                    page_lines.append((y0, x0, cleaned))
        page_lines.sort(key=lambda t: (round(t[0], 1), t[1]))
        for y0, x0, cleaned in page_lines:
            line_stream.append((pno + 1, y0, cleaned))

    # 4. Segment into questions sequentially (only accept question numbers matching expected progression)
    questions_raw = []
    cur_q = None
    expected_next = 1

    # Track (pno, y0) of every question start for image anchoring
    q_anchors: dict[int, list[tuple[float, int]]] = {}  # page_1based -> [(y0, qnum)]

    for pno_1, y0, line in line_stream:
        m_q = q_header_re.match(line)
        if m_q:
            qnum = int(m_q.group(1))
            rest = m_q.group(2).strip()
            # Guard against numbered lists inside stems (e.g., "1) Febre...") by checking progression:
            # Accept if qnum == expected_next or (expected_next <= qnum <= expected_next + 3 and qnum <= expected_count)
            # AND (if cur_q exists, cur_q must already have at least 2 alternatives OR qnum == expected_next and rest is non-trivial)
            is_new_q = False
            if cur_q is None and qnum == 1:
                is_new_q = True
            elif cur_q is not None and 1 <= qnum <= expected_count:
                if qnum == expected_next:
                    # Only guard against tiny numbered lists (2..5) on the same page with 0 alts and short text
                    if len(cur_q["alt_lines"]) >= 2 or qnum > 5 or pno_1 > cur_q["sourcePdfPage"]:
                        is_new_q = True
                    elif len(cur_q["alt_lines"]) == 0 and len(rest) >= 20:
                        is_new_q = True
                elif expected_next < qnum <= expected_next + 2 and len(cur_q["alt_lines"]) >= 2:
                    is_new_q = True

            if is_new_q:
                if cur_q is not None:
                    questions_raw.append(cur_q)
                cur_q = {
                    "numeroOriginal": qnum,
                    "sourcePdfPage": pno_1,
                    "endPdfPage": pno_1,
                    "stem_lines": [rest] if rest else [],
                    "alt_lines": {},  # letter -> list[str]
                    "current_alt": None,
                }
                expected_next = qnum + 1
                q_anchors.setdefault(pno_1, []).append((y0, qnum))
                continue

        if cur_q is None:
            continue

        cur_q["endPdfPage"] = pno_1
        m_a = alt_re.match(line)
        if m_a:
            letter = m_a.group(1)
            alt_text = m_a.group(2).strip()
            # Only start alternative if letter is A or follows a previously seen alternative
            # (prevents false positives like "E) ..." inside a stem before A)
            if letter == "A" or (cur_q["current_alt"] is not None and letter in "BCDE"):
                cur_q["current_alt"] = letter
                cur_q["alt_lines"].setdefault(letter, [])
                if alt_text:
                    cur_q["alt_lines"][letter].append(alt_text)
                continue

        if cur_q["current_alt"] is not None:
            cur_q["alt_lines"][cur_q["current_alt"]].append(line)
        else:
            cur_q["stem_lines"].append(line)

    if cur_q is not None:
        questions_raw.append(cur_q)

    # Build lookup by numeroOriginal
    q_by_num = {q["numeroOriginal"]: q for q in questions_raw}

    # 5. Extract clinical images and attach to their owning question
    img_dir = PUBLIC_ASSETS / exam_id
    img_dir.mkdir(parents=True, exist_ok=True)
    # Remove any stale files from previous runs
    for old_f in img_dir.glob("*.png"):
        old_f.unlink()

    last_active_q = 1
    q_images: dict[int, list[dict]] = {}
    saved_img_count = 0

    for pno in range(start_idx, end_idx):
        pno_1 = pno + 1
        page = doc[pno]
        anchors = sorted(q_anchors.get(pno_1, []), key=lambda t: t[0])

        page_imgs = []
        seen_xrefs = set()
        for img_info in page.get_images(full=True):
            xref = img_info[0]
            if xref in repeated_xrefs or xref in seen_xrefs:
                continue
            seen_xrefs.add(xref)
            w, h = img_info[2], img_info[3]
            if w < 100 or h < 80:
                continue
            rects = page.get_image_rects(xref)
            if not rects:
                continue
            # Use first rect's y0 for question anchoring
            r = rects[0]
            # Skip tiny rendered boxes or full-page background watermarks
            if r.width < 60 or r.height < 45:
                continue
            if r.width > page.rect.width * 0.96 and r.height > page.rect.height * 0.92:
                continue
            page_imgs.append((r.y0, xref, w, h))

        page_imgs.sort(key=lambda t: t[0])

        for img_y0, xref, w, h in page_imgs:
            # Determine owning question: last anchor on this page with anchor_y0 <= img_y0 + 15
            owner = last_active_q
            for ay0, qnum in anchors:
                if ay0 <= img_y0 + 15.0:
                    owner = qnum
                else:
                    break
            q_images.setdefault(owner, []).append({"xref": xref, "w": w, "h": h, "page": pno_1})

        if anchors:
            last_active_q = anchors[-1][1]

    # Save primary image (or stitched/first image) per question
    for qnum, imgs in sorted(q_images.items()):
        # Pick the largest/first clinical image; if multiple, save qNNN.png and qNNN_2.png
        saved_paths = []
        for idx, info in enumerate(imgs):
            try:
                pix = fitz.Pixmap(doc, info["xref"])
                if pix.colorspace is None or pix.colorspace.n not in (1, 3) or pix.alpha:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                fname = f"q{qnum:03d}.png" if idx == 0 else f"q{qnum:03d}_{idx+1}.png"
                out_path = img_dir / fname
                pix.save(str(out_path))
                aspect = "16:9" if (pix.width / max(pix.height, 1)) > 1.45 else ("1:1" if abs(pix.width - pix.height) / max(pix.width, pix.height, 1) < 0.2 else "4:3")
                saved_paths.append({
                    "url": f"/assets/exams/{exam_id}/{fname}",
                    "width": pix.width,
                    "height": pix.height,
                    "aspectRatio": aspect,
                })
                saved_img_count += 1
            except Exception as exc:
                print(f"  [WARN] {exam_id} Q{qnum} img xref={info['xref']} failed: {exc}", file=sys.stderr)
        if qnum in q_by_num and saved_paths:
            q_by_num[qnum]["images"] = saved_paths

    # 6. Assemble normalized extracted records
    extracted = []
    warnings = []
    for q in questions_raw:
        qnum = q["numeroOriginal"]
        gab = gabarito.get(qnum)
        anulada = gab == "ANULADA"
        enunciado = " ".join(q["stem_lines"]).strip()
        enunciado = re.sub(r"\s{2,}", " ", enunciado)

        alts = []
        for letter in ["A", "B", "C", "D", "E"]:
            if letter in q["alt_lines"]:
                txt = " ".join(q["alt_lines"][letter]).strip()
                txt = re.sub(r"\s{2,}", " ", txt)
                alts.append({"letter": letter, "text": txt})

        # Handle image-only alternatives (e.g., USP-SP ECG/ultrasound/radiograph options A-D)
        if len(alts) < cfg["expectedAlts"] and q.get("images"):
            existing_letters = {a["letter"] for a in alts}
            for letter in ["A", "B", "C", "D", "E"][: cfg["expectedAlts"]]:
                if letter not in existing_letters:
                    alts.append({"letter": letter, "text": f"Alternativa {letter} (consultar imagem clínica)"})
            alts.sort(key=lambda a: a["letter"])

        if len(alts) < cfg["expectedAlts"]:
            warnings.append(f"Q{qnum}: only {len(alts)}/{cfg['expectedAlts']} alts")
        if not gab:
            warnings.append(f"Q{qnum}: missing gabarito")
        elif not anulada and gab not in [a["letter"] for a in alts]:
            warnings.append(f"Q{qnum}: gabarito {gab} not in alts {[a['letter'] for a in alts]}")
        if len(enunciado) < 20:
            warnings.append(f"Q{qnum}: short stem ({len(enunciado)} chars)")

        extracted.append({
            "numeroOriginal": qnum,
            "sourcePdfPage": q["sourcePdfPage"],
            "enunciado": enunciado,
            "alternativas": alts,
            "gabaritoOficial": "A" if anulada else (gab or "A"),
            "anulada": anulada,
            "images": q.get("images", []),
        })

    out_dir = OUT_TMP / exam_id
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / "extracted.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(
            {
                "meta": cfg,
                "gabaritoCount": len(gabarito),
                "questionCount": len(extracted),
                "activeCount": sum(1 for x in extracted if not x["anulada"]),
                "annulledCount": sum(1 for x in extracted if x["anulada"]),
                "imageQuestionsCount": sum(1 for x in extracted if x["images"]),
                "savedImagesCount": saved_img_count,
                "warnings": warnings,
                "questions": extracted,
            },
            f,
            ensure_ascii=False,
            indent=2,
        )

    return {
        "id": exam_id,
        "questions": len(extracted),
        "expected": expected_count,
        "active": sum(1 for x in extracted if not x["anulada"]),
        "annulled": sum(1 for x in extracted if x["anulada"]),
        "gabarito": len(gabarito),
        "img_questions": sum(1 for x in extracted if x["images"]),
        "saved_imgs": saved_img_count,
        "warnings": warnings,
    }


def main():
    pdfs = glob.glob(os.path.expanduser("~/Downloads/r1med/*.pdf"))
    if not pdfs:
        print("ERROR: No PDF found in ~/Downloads/r1med/", file=sys.stderr)
        sys.exit(1)
    doc = fitz.open(pdfs[0])
    print(f"Opened {os.path.basename(pdfs[0])} ({len(doc)} pages)")

    for cfg in EXAMS:
        summary = extract_exam(doc, cfg)
        print(
            f"  {summary['id']:13s} | Qs={summary['questions']:3d}/{summary['expected']:3d} "
            f"(active={summary['active']:3d}, annulled={summary['annulled']:2d}) "
            f"| gab={summary['gabarito']:3d} | imgQs={summary['img_questions']:2d} ({summary['saved_imgs']:2d} pngs) "
            f"| warnings={len(summary['warnings'])}"
        )
        if summary["warnings"]:
            print("    Warnings:", summary["warnings"][:12])


if __name__ == "__main__":
    main()
