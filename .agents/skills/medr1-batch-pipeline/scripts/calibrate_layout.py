#!/usr/bin/env python3
"""
Utilitário visual do MedR1 Batch Pipeline:
Desenha margens (header/footer), divisão de colunas, blocos de texto e imagens
detectadas sobre uma página do PDF para calibrar references/perfis_bancas.json.

Dependência: pip install pymupdf
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Optional

import fitz  # PyMuPDF

DEFAULT_PROFILE = {
    "cols": 2,
    "header_margin_ratio": 0.06,
    "footer_margin_ratio": 0.06,
}

COLOR_HEADER_FOOTER = (0.85, 0.12, 0.12)
COLOR_MID_COL = (0.55, 0.10, 0.75)
COLOR_COL_0 = (0.10, 0.40, 0.85)
COLOR_COL_1 = (0.08, 0.60, 0.25)
COLOR_IGNORED = (0.55, 0.55, 0.55)
COLOR_IMAGE = (0.95, 0.50, 0.05)


def load_profile(banca: str, profiles_path: Optional[Path]) -> dict:
    banca_key = banca.upper()
    if profiles_path and profiles_path.exists():
        data = json.loads(profiles_path.read_text(encoding="utf-8"))
        if banca_key in data:
            return {**DEFAULT_PROFILE, **data[banca_key]}
    print(f"[AVISO] Banca '{banca_key}' não encontrada em {profiles_path}. Usando padrão.", file=sys.stderr)
    return dict(DEFAULT_PROFILE)


def draw_calibration_overlay(
    pdf_path: Path,
    page_number: int,
    header_ratio: float,
    footer_ratio: float,
    num_cols: int,
    show_blocks: bool,
    min_image_area: float,
    dpi: int,
    out_path: Path,
) -> None:
    doc = fitz.open(str(pdf_path))
    if page_number < 1 or page_number > len(doc):
        doc.close()
        sys.exit(f"Erro: página {page_number} fora do intervalo (PDF tem {len(doc)} páginas).")

    page = doc[page_number - 1]
    rect = page.rect
    w, h = rect.width, rect.height

    min_y = h * header_ratio
    max_y = h * (1.0 - footer_ratio)
    mid_x = w / 2.0

    kept_col0 = 0
    kept_col1 = 0
    ignored_blocks = 0

    if show_blocks:
        for b in page.get_text("blocks"):
            x0, y0, x1, y1, text, _, block_type = b
            if block_type != 0 or not text.strip():
                continue
            bbox = fitz.Rect(x0, y0, x1, y1)
            if y1 < min_y or y0 > max_y:
                ignored_blocks += 1
                page.draw_rect(bbox, color=COLOR_IGNORED, width=0.8, dashes="[2 2] 0")
                continue

            if num_cols == 2:
                block_center = (x0 + x1) / 2.0
                col = 0 if block_center < mid_x else 1
            else:
                col = 0

            if col == 0:
                kept_col0 += 1
                color = COLOR_COL_0
            else:
                kept_col1 += 1
                color = COLOR_COL_1

            page.draw_rect(bbox, color=color, width=0.9)

    detected_images = 0
    for info in page.get_image_info(xrefs=True):
        bbox = fitz.Rect(info["bbox"])
        if bbox.y1 < min_y or bbox.y0 > max_y:
            continue
        if bbox.get_area() < min_image_area:
            continue
        detected_images += 1
        page.draw_rect(bbox, color=COLOR_IMAGE, width=1.6)
        page.insert_text(
            fitz.Point(bbox.x0 + 2, max(min_y + 10, bbox.y0 + 10)),
            f"IMG #{detected_images} ({int(bbox.get_area())}px2)",
            fontsize=7.5,
            color=COLOR_IMAGE,
        )

    page.draw_line(fitz.Point(0, min_y), fitz.Point(w, min_y), color=COLOR_HEADER_FOOTER, width=1.6, dashes="[5 3] 0")
    page.insert_text(
        fitz.Point(8, max(10, min_y - 4)),
        f"header_margin_ratio = {header_ratio:.3f} (y={min_y:.1f})",
        fontsize=8.5,
        color=COLOR_HEADER_FOOTER,
    )

    page.draw_line(fitz.Point(0, max_y), fitz.Point(w, max_y), color=COLOR_HEADER_FOOTER, width=1.6, dashes="[5 3] 0")
    page.insert_text(
        fitz.Point(8, min(h - 4, max_y + 11)),
        f"footer_margin_ratio = {footer_ratio:.3f} (y={max_y:.1f})",
        fontsize=8.5,
        color=COLOR_HEADER_FOOTER,
    )

    if num_cols == 2:
        page.draw_line(fitz.Point(mid_x, min_y), fitz.Point(mid_x, max_y), color=COLOR_MID_COL, width=1.4, dashes="[4 4] 0")
        page.insert_text(
            fitz.Point(mid_x + 4, min_y + 12),
            f"cols=2 (x={mid_x:.1f})",
            fontsize=8.5,
            color=COLOR_MID_COL,
        )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pix = page.get_pixmap(dpi=dpi)
    pix.save(str(out_path))
    doc.close()

    print("=== CALIBRAÇÃO VISUAL GERADA ===")
    print(f"PDF / Página       : {pdf_path.name} (pág. {page_number})")
    print(f"Header / Footer    : {header_ratio:.3f} / {footer_ratio:.3f}")
    print(f"Colunas            : {num_cols}")
    if show_blocks:
        print(f"Blocos capturados  : col 0 = {kept_col0} | col 1 = {kept_col1} | ignorados = {ignored_blocks}")
    print(f"Imagens detectadas : {detected_images} (área >= {int(min_image_area)}px2)")
    print(f"PNG salvo em       : {out_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Calibração visual de margens e colunas de PDF")
    parser.add_argument("--prova", required=True, type=Path, help="Caminho do PDF da prova")
    parser.add_argument("--banca", default="GENERICO", help="Banca em perfis_bancas.json")
    parser.add_argument("--profiles", type=Path, default=None, help="Caminho de references/perfis_bancas.json")
    parser.add_argument("--page", type=int, default=1, help="Página a inspecionar (1-indexed)")
    parser.add_argument("--header", type=float, default=None, help="Sobrescreve header_margin_ratio")
    parser.add_argument("--footer", type=float, default=None, help="Sobrescreve footer_margin_ratio")
    parser.add_argument("--cols", type=int, choices=[1, 2], default=None, help="Sobrescreve cols (1 ou 2)")
    parser.add_argument("--no-blocks", action="store_true", help="Oculta caixas dos blocos de texto")
    parser.add_argument("--min-image-area", type=float, default=4500.0, help="Área mínima de imagem clínica")
    parser.add_argument("--dpi", type=int, default=150, help="Resolução do PNG de saída")
    parser.add_argument("--out", type=Path, default=None, help="Caminho do PNG de saída")
    args = parser.parse_args()

    if not args.prova.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.prova}")

    profile = load_profile(args.banca, args.profiles)
    header_ratio = args.header if args.header is not None else float(profile["header_margin_ratio"])
    footer_ratio = args.footer if args.footer is not None else float(profile["footer_margin_ratio"])
    num_cols = args.cols if args.cols is not None else int(profile["cols"])
    out_path = args.out or Path(f"tmp/calibrate_{args.banca.lower()}_p{args.page}.png")

    draw_calibration_overlay(
        pdf_path=args.prova,
        page_number=args.page,
        header_ratio=header_ratio,
        footer_ratio=footer_ratio,
        num_cols=num_cols,
        show_blocks=not args.no_blocks,
        min_image_area=args.min_image_area,
        dpi=args.dpi,
        out_path=out_path,
    )


if __name__ == "__main__":
    main()
