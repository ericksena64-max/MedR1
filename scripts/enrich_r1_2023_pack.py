#!/usr/bin/env python3
"""
Resumable parallel Gemini enrichment for the 2023 Top-4 SP Residency Exam Pack.
Processes 20-question batches with strict JSON output anchored to the official answer key,
reusing MedR1's canonical Grande Área / Tema / Subtema taxonomy.
"""

import argparse
import concurrent.futures
import json
import os
import re
import sys
import time
from pathlib import Path
from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
TMP_DIR = ROOT / "tmp" / "r1-2023"
TAXONOMY_PATH = TMP_DIR / "canonical_taxonomy.json"

EXAM_IDS = ["usp-rp-2023", "usp-sp-2023", "sus-sp-2023", "unifesp-2023"]

GRANDE_AREA_LABELS = {
    "clinica_medica": "Clínica Médica",
    "cirurgia_geral": "Cirurgia Geral",
    "ginecologia_obstetricia": "Ginecologia e Obstetrícia",
    "pediatria": "Pediatria",
    "medicina_preventiva": "Medicina Preventiva",
}

SYSTEM_PROMPT_TEMPLATE = """Você é um médico preceptor sênior especialista em provas de Residência Médica (R1 - Acesso Direto no Brasil: USP-RP, USP-SP, SUS-SP, UNIFESP, ENARE, UEPA).

Sua tarefa é classificar e comentar questões de residência médica em JSON estrito, SEMPRE ancorado no gabarito oficial fornecido.

REGRAS CRÍTICAS:
1. NUNCA altere ou questione o `gabaritoOficial`. Se `anulada` for true, explique brevemente que a questão foi anulada pela banca e comente os conceitos médicos envolvidos em cada alternativa.
2. Classifique `grandeAreaId` ESTRITAMENTE como um dos 5 valores:
   - "clinica_medica"
   - "cirurgia_geral"
   - "ginecologia_obstetricia"
   - "pediatria"
   - "medicina_preventiva"
3. REUTILIZE `tema` e `subtema` da taxonomia canônica do MedR1 abaixo sempre que houver correspondência equivalente (para não fragmentar o Pareto):
{taxonomy_json}
4. Para cada alternativa presente na questão (`alternativas`), escreva em `alternativeExplanations` uma justificativa objetiva e didática:
   - Para o gabarito oficial: comece com "Correta:" e explique o porquê citando a diretriz/referência aplicável (Ministério da Saúde, PCDT/SUS, FEBRASGO, SBP, SBC, SBD, ATLS, Sabiston, Nelson, Harrison, DSM-5, etc.).
   - Para cada alternativa incorreta: comece com "Incorreta:" e explique brevemente o erro conceitual ou contraindicação.
5. `comentarioGeral`: resumo clínico estruturado (2-4 frases) justificando a conduta/diagnóstico correto com a diretriz.
6. `perolaClinica`: 1 frase de altíssimo rendimento para revisão rápida (máx. 220 caracteres).
7. `tags`: 3 a 5 tags curtas em minúsculas separadas por hífen (ex: ["pre-eclampsia", "sulfato-de-magnesio", "obstetricia"]).
8. `referencias`: lista com 1 a 2 diretrizes/referências clínicas reais relevantes (ex: "FEBRASGO — Manual de Pré-Eclâmpsia", "ATLS 10ª Edição").
9. Se `hasImage` for true, preencha `imageModality` (ex: "Radiografia", "ECG", "Tomografia", "Ultrassonografia", "Fotografia Clínica", "Gráfico/Tabela") e `imageCaption` (legenda curta). Se `hasImage` for false, retorne strings vazias `""`.
10. Retorne APENAS um array JSON válido onde cada item corresponde exatamente a uma questão de entrada pelo `numeroOriginal`. Não omita nenhuma questão.
"""


def load_api_key() -> str:
    key = os.environ.get("GEMINI_API_KEY")
    if key:
        return key.strip()
    env_file = ROOT / ".env"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line.startswith("GEMINI_API_KEY="):
                val = line.split("=", 1)[1].strip().strip('"').strip("'")
                if val:
                    return val
    raise RuntimeError("GEMINI_API_KEY not found in environment or .env")


def build_taxonomy_summary() -> str:
    if not TAXONOMY_PATH.exists():
        return "{}"
    tax = json.loads(TAXONOMY_PATH.read_text(encoding="utf-8"))
    # Compact representation: grandeAreaId -> list of "Tema (subtema1, subtema2...)"
    compact = {}
    for ga, temas in tax.items():
        compact[ga] = {t: subs[:8] for t, subs in temas.items()}
    return json.dumps(compact, ensure_ascii=False)


def response_schema() -> dict:
    return {
        "type": "ARRAY",
        "items": {
            "type": "OBJECT",
            "properties": {
                "numeroOriginal": {"type": "INTEGER"},
                "grandeAreaId": {
                    "type": "STRING",
                    "enum": list(GRANDE_AREA_LABELS.keys()),
                },
                "tema": {"type": "STRING"},
                "subtema": {"type": "STRING"},
                "tags": {"type": "ARRAY", "items": {"type": "STRING"}},
                "alternativeExplanations": {
                    "type": "OBJECT",
                    "properties": {
                        "A": {"type": "STRING"},
                        "B": {"type": "STRING"},
                        "C": {"type": "STRING"},
                        "D": {"type": "STRING"},
                        "E": {"type": "STRING"},
                    },
                },
                "comentarioGeral": {"type": "STRING"},
                "perolaClinica": {"type": "STRING"},
                "referencias": {"type": "ARRAY", "items": {"type": "STRING"}},
                "imageModality": {"type": "STRING"},
                "imageCaption": {"type": "STRING"},
                "revisar": {"type": "STRING"},
            },
            "required": [
                "numeroOriginal",
                "grandeAreaId",
                "tema",
                "subtema",
                "tags",
                "alternativeExplanations",
                "comentarioGeral",
                "perolaClinica",
                "referencias",
            ],
        },
    }


def process_batch(
    client: genai.Client,
    system_prompt: str,
    exam_id: str,
    exam_label: str,
    batch_idx: int,
    batch_qs: list[dict],
    out_path: Path,
    model_name: str,
) -> tuple[int, int]:
    if out_path.exists():
        existing = json.loads(out_path.read_text(encoding="utf-8"))
        if len(existing) == len(batch_qs):
            return batch_idx, len(existing)

    payload = []
    for q in batch_qs:
        payload.append(
            {
                "numeroOriginal": q["numeroOriginal"],
                "banca": exam_label,
                "anulada": q["anulada"],
                "gabaritoOficial": "ANULADA" if q["anulada"] else q["gabaritoOficial"],
                "hasImage": bool(q.get("images")),
                "enunciado": q["enunciado"],
                "alternativas": {a["letter"]: a["text"] for a in q["alternativas"]},
            }
        )

    user_prompt = (
        f"Prova: {exam_label} (Acesso Direto). "
        f"Processe TODAS as {len(payload)} questões abaixo e retorne o array JSON correspondente:\n\n"
        + json.dumps(payload, ensure_ascii=False)
    )

    last_err = None
    for attempt in range(1, 5):
        try:
            resp = client.models.generate_content(
                model=model_name,
                contents=user_prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_prompt,
                    response_mime_type="application/json",
                    response_schema=response_schema(),
                    temperature=0.2,
                ),
            )
            parsed = json.loads(resp.text)
            if not isinstance(parsed, list):
                raise ValueError("Response is not a JSON list")
            expected_nums = {q["numeroOriginal"] for q in batch_qs}
            got_nums = {int(item["numeroOriginal"]) for item in parsed if "numeroOriginal" in item}
            missing = expected_nums - got_nums
            if missing:
                raise ValueError(f"Missing questions in batch response: {sorted(missing)}")

            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(json.dumps(parsed, ensure_ascii=False, indent=2), encoding="utf-8")
            return batch_idx, len(parsed)
        except Exception as exc:
            last_err = exc
            wait_s = min(30, 3 * attempt)
            print(f"  [RETRY {attempt}/4] {exam_id} batch {batch_idx}: {type(exc).__name__}: {str(exc)[:140]} (sleep {wait_s}s)", flush=True)
            time.sleep(wait_s)

    raise RuntimeError(f"Failed {exam_id} batch {batch_idx} after 4 attempts: {last_err}")


def enrich_exam(client: genai.Client, system_prompt: str, exam_id: str, batch_size: int, workers: int, model_name: str):
    extracted_path = TMP_DIR / exam_id / "extracted.json"
    data = json.loads(extracted_path.read_text(encoding="utf-8"))
    qs = data["questions"]
    exam_label = data["meta"]["label"]
    batches_dir = TMP_DIR / exam_id / "enriched_batches"
    batches_dir.mkdir(parents=True, exist_ok=True)

    batches = [qs[i : i + batch_size] for i in range(0, len(qs), batch_size)]
    t0 = time.time()
    print(f"Starting {exam_id}: {len(qs)} questions in {len(batches)} batches (model={model_name}, workers={workers})", flush=True)

    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as ex:
        futs = [
            ex.submit(
                process_batch,
                client,
                system_prompt,
                exam_id,
                exam_label,
                idx,
                b,
                batches_dir / f"batch_{idx:02d}.json",
                model_name,
            )
            for idx, b in enumerate(batches)
        ]
        done_qs = 0
        for fut in concurrent.futures.as_completed(futs):
            bidx, cnt = fut.result()
            done_qs += cnt
            print(f"  [OK] {exam_id} batch {bidx:02d} ({cnt}q) -> total {done_qs}/{len(qs)} ({time.time()-t0:.1f}s)", flush=True)

    # Combine all batches into enriched.json keyed by numeroOriginal
    merged_map = {}
    for idx in range(len(batches)):
        items = json.loads((batches_dir / f"batch_{idx:02d}.json").read_text(encoding="utf-8"))
        for item in items:
            merged_map[int(item["numeroOriginal"])] = item

    out_merged = TMP_DIR / exam_id / "enriched.json"
    out_merged.write_text(json.dumps(merged_map, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Completed {exam_id}: {len(merged_map)}/{len(qs)} enriched in {time.time()-t0:.1f}s -> {out_merged.name}", flush=True)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--exams", nargs="+", default=EXAM_IDS)
    parser.add_argument("--batch-size", type=int, default=20)
    parser.add_argument("--workers", type=int, default=4)
    parser.add_argument("--model", default="gemini-2.5-flash")
    args = parser.parse_args()

    api_key = load_api_key()
    client = genai.Client(
        api_key=api_key,
        http_options=types.HttpOptions(timeout=180_000),
    )
    system_prompt = SYSTEM_PROMPT_TEMPLATE.format(taxonomy_json=build_taxonomy_summary())

    for exam_id in args.exams:
        enrich_exam(client, system_prompt, exam_id, args.batch_size, args.workers, args.model)


if __name__ == "__main__":
    main()
