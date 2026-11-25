#!/usr/bin/env python3
"""
Estágio 2 do MedR1 Batch Pipeline:
Enriquecimento taxonômico e comentários clínicos via Gemini Batch API.
Dependência: pip install google-genai
"""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
import sys
import time
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from google import genai
from google.genai import types

SYSTEM_INSTRUCTION = """Você é um médico preceptor especialista em provas de Residência Médica do Brasil (ENARE, USP, UNIFESP, SUS-SP, UEPA).

Sua tarefa é classificar e comentar questões de residência para o banco MedR1 seguindo estritamente estas regras:

1. Classifique `grandeAreaId`, `tema`, `subtema` e `tags` usando EXCLUSIVAMENTE a taxonomia canônica fornecida no contexto.
2. NÃO reescreva o enunciado nem as alternativas.
3. Escreva `comentarioGeral` direto (máx. 3 frases) com o raciocínio clínico central.
4. Em `explicacoesPorAlternativa`, explique objetivamente por que cada letra está correta ou incorreta (1 a 2 frases por letra).
5. REGRA ANTI-ALUCINAÇÃO:
* Se o `gabaritoOficial` fornecido divergir da diretriz médica vigente ou parecer incorreto, NÃO invente justificativa para defendê-lo. Marque `concordaComGabarito: false`, `precisaRevisaoHumana: true` e explique brevemente em `motivoDivergencia`.
* Se a questão estiver anulada, tiver imagem ambígua ou gerar baixa confiança, marque `precisaRevisaoHumana: true`.
* Em `referencias`, cite apenas diretrizes reais e verificáveis (ex: Ministério da Saúde, SBC, FEBRASGO, SBP, ATLS, SBPT).
"""

TERMINAL_STATES = {
    "JOB_STATE_SUCCEEDED",
    "JOB_STATE_FAILED",
    "JOB_STATE_CANCELLED",
    "JOB_STATE_EXPIRED",
}


def route_tier(question: dict) -> str:
    if (
        question.get("hasImage")
        or question.get("images")
        or question.get("anulada")
        or not question.get("gabaritoOficial")
        or len(question.get("alternativas", {})) < 4
    ):
        return "pro"
    return "flash"


def encode_image_part(image_path: Path) -> Optional[dict]:
    if not image_path.exists():
        print(f"[AVISO] Imagem não encontrada: {image_path}", file=sys.stderr)
        return None
    mime_type, _ = mimetypes.guess_type(str(image_path))
    mime_type = mime_type or "image/png"
    b64_data = base64.b64encode(image_path.read_bytes()).decode("ascii")
    return {"inline_data": {"mime_type": mime_type, "data": b64_data}}


def try_create_cache(
    client: genai.Client,
    model_name: str,
    taxonomy_text: str,
    tier: str,
    ttl: str,
) -> Optional[str]:
    try:
        cache = client.caches.create(
            model=model_name,
            config=types.CreateCachedContentConfig(
                display_name=f"medr1-taxonomy-{tier}",
                system_instruction=SYSTEM_INSTRUCTION,
                contents=[f"TAXONOMIA OFICIAL DO MEDR1:\n{taxonomy_text}"],
                ttl=ttl,
            ),
        )
        print(f"[CACHE] Criado para {model_name}: {cache.name} (TTL={ttl})")
        return cache.name
    except Exception as exc:
        print(f"[CACHE] Fallback para prompt inline em {model_name} (motivo: {exc})", file=sys.stderr)
        return None


def build_batch_request_line(
    question: dict,
    response_schema: dict,
    cache_name: Optional[str],
    taxonomy_text: str,
) -> dict:
    num = question["numeroOriginal"]
    payload_question = {
        "numeroOriginal": num,
        "enunciado": question.get("enunciado", ""),
        "alternativas": question.get("alternativas", {}),
        "gabaritoOficial": question.get("gabaritoOficial"),
        "anulada": question.get("anulada", False),
    }

    parts: List[dict] = []
    if not cache_name:
        parts.append({"text": f"TAXONOMIA OFICIAL DO MEDR1:\n{taxonomy_text}\n---"})

    parts.append(
        {
            "text": (
                "Classifique e comente a questão abaixo seguindo o schema JSON:\n"
                + json.dumps(payload_question, ensure_ascii=False)
            )
        }
    )

    for img_str in question.get("images", []):
        img_part = encode_image_part(Path(img_str))
        if img_part:
            parts.append(img_part)

    request_body: dict = {
        "contents": [{"role": "user", "parts": parts}],
        "generation_config": {
            "temperature": 0.1,
            "response_mime_type": "application/json",
            "response_schema": response_schema,
        },
    }

    if cache_name:
        request_body["cached_content"] = cache_name
    else:
        request_body["system_instruction"] = {"parts": [{"text": SYSTEM_INSTRUCTION}]}

    return {"key": f"q-{num:04d}", "request": request_body}


def write_jsonl(path: Path, rows: List[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        for row in rows:
            fh.write(json.dumps(row, ensure_ascii=False) + "\n")


def submit_batch_job(client: genai.Client, jsonl_path: Path, model_name: str, display_name: str) -> str:
    uploaded = client.files.upload(
        file=str(jsonl_path),
        config=types.UploadFileConfig(display_name=jsonl_path.name, mime_type="jsonl"),
    )
    job = client.batches.create(
        model=model_name,
        src=uploaded.name,
        config={"display_name": display_name},
    )
    print(f"[BATCH] Job submetido ({model_name}): {job.name}")
    return job.name


def extract_json_from_batch_line(raw_line: str, tier: str, model_name: str) -> dict:
    entry = json.loads(raw_line)
    key = entry.get("key", "unknown")

    if "error" in entry:
        return {"key": key, "_meta": {"tier": tier, "model": model_name, "status": "error"}, "error": entry["error"]}

    try:
        candidates = entry["response"]["candidates"]
        text = candidates[0]["content"]["parts"][0]["text"]
        parsed = json.loads(text)
        parsed["_meta"] = {"tier": tier, "model": model_name, "status": "ok", "key": key}
        return parsed
    except Exception as exc:
        return {
            "key": key,
            "_meta": {"tier": tier, "model": model_name, "status": "parse_error"},
            "error": str(exc),
            "raw": entry,
        }


def collect_jobs(
    client: genai.Client,
    jobs_meta: Dict[str, dict],
    out_path: Path,
    poll_interval: int,
) -> Tuple[int, int]:
    pending = dict(jobs_meta)
    completed: Dict[str, object] = {}

    while pending:
        for tier, info in list(pending.items()):
            job = client.batches.get(name=info["job_name"])
            state = job.state.name if hasattr(job.state, "name") else str(job.state)
            print(f"[POLL] {tier.upper()} ({info['job_name']}): {state}")
            if state in TERMINAL_STATES:
                completed[tier] = job
                del pending[tier]
        if pending:
            time.sleep(poll_interval)

    consolidated: List[dict] = []
    errors = 0

    for tier, job in completed.items():
        model_name = jobs_meta[tier]["model"]
        state = job.state.name if hasattr(job.state, "name") else str(job.state)
        if state != "JOB_STATE_SUCCEEDED":
            print(f"[ERRO] Job {tier} finalizou com estado {state}", file=sys.stderr)
            errors += jobs_meta[tier]["count"]
            continue

        dest = getattr(job, "dest", None)
        file_name = getattr(dest, "file_name", None) if dest else None
        if not file_name:
            print(f"[ERRO] Job {tier} sem arquivo de saída.", file=sys.stderr)
            continue

        raw_bytes = client.files.download(file=file_name)
        content = raw_bytes.decode("utf-8") if isinstance(raw_bytes, bytes) else str(raw_bytes)
        for line in content.splitlines():
            if not line.strip():
                continue
            item = extract_json_from_batch_line(line, tier, model_name)
            if item.get("_meta", {}).get("status") != "ok":
                errors += 1
            consolidated.append(item)

    consolidated.sort(key=lambda x: x.get("numeroOriginal", 999999))
    write_jsonl(out_path, consolidated)
    return len(consolidated) - errors, errors


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Enriquecimento via Gemini Batch API")
    parser.add_argument("--input", type=Path, help="Caminho do extracted.json")
    parser.add_argument("--taxonomy", type=Path, help="Caminho do references/taxonomia_medr1.json")
    parser.add_argument("--schema", type=Path, help="Caminho do references/response_schema.json")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do enriched.jsonl")
    parser.add_argument("--flash-model", default="gemini-2.5-flash", help="Modelo para texto puro")
    parser.add_argument("--pro-model", default="gemini-2.5-pro", help="Modelo para imagens/anuladas")
    parser.add_argument("--cache-ttl", default="3600s", help="TTL do Context Cache")
    parser.add_argument("--poll-interval", type=int, default=30, help="Intervalo de polling (s)")
    parser.add_argument("--dry-run", action="store_true", help="Gera JSONLs sem chamar a API")
    parser.add_argument("--no-wait", action="store_true", help="Submete jobs e encerra sem aguardar")
    parser.add_argument("--collect", type=Path, default=None, help="Retoma coleta via batch_jobs.json")
    args = parser.parse_args()

    if not args.dry_run and not os.environ.get("GEMINI_API_KEY"):
        sys.exit("Erro: defina a variável de ambiente GEMINI_API_KEY antes de executar.")

    if args.collect:
        if not args.collect.exists():
            sys.exit(f"Erro: arquivo de jobs não encontrado: {args.collect}")
        client = genai.Client()
        jobs_meta = json.loads(args.collect.read_text(encoding="utf-8"))
        ok_count, err_count = collect_jobs(client, jobs_meta, args.out, args.poll_interval)
        print("\n=== CHECKPOINT ESTÁGIO 2 (COLETA BATCH) ===")
        print(f"Questões enriquecidas : {ok_count}")
        print(f"Erros                 : {err_count}")
        print(f"Arquivo gerado        : {args.out}")
        return

    if not (args.input and args.taxonomy and args.schema):
        sys.exit("Erro: informe --input, --taxonomy e --schema (ou use --collect).")

    extracted = json.loads(args.input.read_text(encoding="utf-8"))
    taxonomy_text = args.taxonomy.read_text(encoding="utf-8")
    response_schema = json.loads(args.schema.read_text(encoding="utf-8"))
    questions = extracted.get("questoes", [])

    if not questions:
        sys.exit("Erro: nenhuma questão encontrada em --input.")

    flash_qs = [q for q in questions if route_tier(q) == "flash"]
    pro_qs = [q for q in questions if route_tier(q) == "pro"]

    work_dir = args.out.parent
    flash_jsonl = work_dir / "flash_batch.jsonl"
    pro_jsonl = work_dir / "pro_batch.jsonl"
    jobs_file = work_dir / "batch_jobs.json"

    client = None if args.dry_run else genai.Client()

    flash_cache = (
        try_create_cache(client, args.flash_model, taxonomy_text, "flash", args.cache_ttl)
        if (client and flash_qs)
        else None
    )
    pro_cache = (
        try_create_cache(client, args.pro_model, taxonomy_text, "pro", args.cache_ttl)
        if (client and pro_qs)
        else None
    )

    if flash_qs:
        write_jsonl(
            flash_jsonl,
            [build_batch_request_line(q, response_schema, flash_cache, taxonomy_text) for q in flash_qs],
        )

    if pro_qs:
        write_jsonl(
            pro_jsonl,
            [build_batch_request_line(q, response_schema, pro_cache, taxonomy_text) for q in pro_qs],
        )

    print("=== RESUMO DE ROTEAMENTO (ESTÁGIO 2) ===")
    print(f"Total de questões : {len(questions)}")
    print(f"Lote Flash        : {len(flash_qs)} ({args.flash_model}) -> {flash_jsonl if flash_qs else '-'}")
    print(f"Lote Pro          : {len(pro_qs)} ({args.pro_model}) -> {pro_jsonl if pro_qs else '-'}")

    if args.dry_run:
        print("\n[DRY-RUN] JSONLs gerados localmente. Nenhuma chamada foi feita à API.")
        return

    jobs_meta: Dict[str, dict] = {}
    exam_label = extracted.get("meta", {}).get("prova", "medr1-exam")

    if flash_qs:
        job_name = submit_batch_job(client, flash_jsonl, args.flash_model, f"{exam_label}-flash")
        jobs_meta["flash"] = {"job_name": job_name, "model": args.flash_model, "count": len(flash_qs)}

    if pro_qs:
        job_name = submit_batch_job(client, pro_jsonl, args.pro_model, f"{exam_label}-pro")
        jobs_meta["pro"] = {"job_name": job_name, "model": args.pro_model, "count": len(pro_qs)}

    jobs_file.write_text(json.dumps(jobs_meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[INFO] IDs dos jobs salvos em: {jobs_file}")

    if args.no_wait:
        print(
            "\n[ASSÍNCRONO] Jobs em processamento. Para coletar depois, execute:\n"
            f"python3 {Path(__file__).name} --collect {jobs_file} --out {args.out}"
        )
        return

    ok_count, err_count = collect_jobs(client, jobs_meta, args.out, args.poll_interval)
    print("\n=== CHECKPOINT ESTÁGIO 2 (ENRIQUECIMENTO BATCH) ===")
    print(f"Questões enriquecidas : {ok_count}")
    print(f"Erros                 : {err_count}")
    print(f"Arquivo gerado        : {args.out}")


if __name__ == "__main__":
    main()
