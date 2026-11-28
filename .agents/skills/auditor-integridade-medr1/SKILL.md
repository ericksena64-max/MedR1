---
name: auditor-integridade-medr1
description: >
  Auditoria somente leitura de integridade de dados e invariantes arquiteturais do MedR1.
  Verifica ausência de placeholders (62.0/64.0), proteção de questões anuladas, conformidade
  com a Taxonomia Canônica v1 (262 subtemas), sequência oficial das alternativas (A-E),
  paridade entre JSONL/TS/checkpoints/examCatalog e sinais de fronteira clínica. Use após
  qualquer importação de prova, edição do banco de questões ou antes de deploys.
---

# Auditor de Integridade do Banco MedR1

Skill de diagnóstico **somente leitura** para garantir que nenhuma alteração no banco de questões viole as normas de [GEMINI.md](../../../GEMINI.md).

## Quando Usar
- Imediatamente após importar ou enriquecer uma nova prova (`*Questions.ts` / `data/provas/*.jsonl`).
- Após edições na taxonomia (`medr1_taxonomy_v1.json`), classificação (`classification_v1.json`) ou dificuldade (`difficulty_v1.json`).
- Como etapa obrigatória do Quality Gate antes de commits ou deploy.

## Execução Rápida
```bash
# Auditoria padrão (exit code 1 se houver qualquer FAIL)
python3 .agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py

# Modo detalhado com listagem de avisos de fronteira
python3 .agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py --verbose

# Modo estrito (falha também se houver qualquer sinal de fronteira em Clínica Médica)
python3 .agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py --strict-boundaries
```

## O que é Verificado e Reprova a Entrega (`FAIL`)
1. **Proibição de Placeholders:** rejeita qualquer questão em `data/provas/*.jsonl`, `src/data/*Questions.ts` ou `src/data/questions.ts` com `taxaAcertoBase` ou `taxaAcertoGlobal` igual a `62.0` ou `64.0`.
2. **Proteção de Questões Anuladas:** toda questão com `anulada: true` deve ter `taxaAcertoGlobal === 0` (e `taxaAcertoBase === 0` quando presente); toda questão válida (`anulada: false`) deve ter `taxaAcertoGlobal > 0`.
3. **Taxonomia Canônica v1 (`262` subtemas):** valida que `src/data/taxonomy/medr1_taxonomy_v1.json` mantém 5 Grandes Áreas, 44 Temas e 262 Subtemas, e que todas as questões oficiais possuem `subtemaSlug` válido e consistente com `grandeAreaId`, `temaSlug`, `tema`, `subtema` e `taxonomyVersion: "medr1_taxonomy_v1"`.
4. **Ordem Oficial das Alternativas (`A–E`) e Gabarito:** garante sequência contígua `A–D` ou `A–E` (ou prefixo contíguo `>= 2` a partir de `A` quando `anulada: true`) e confirma que `gabaritoOficial` pertence às letras presentes nas questões válidas.
5. **Paridade 100% entre Camadas:** confirma igualdade exata de IDs, enunciados/alternativas, gabarito, taxonomia e dificuldade entre `data/provas/*.jsonl`, `src/data/*Questions.ts`, `data/classification/classification_v1.json`, `data/classification/difficulty_v1.json` e os contadores (`questionCount`, `activeCount`, `areaCounts`) de `src/data/examCatalog.ts`.

## Alertas Informativos (`WARN`) — Fronteiras Clínicas
O auditor também varre questões de `Clínica Médica` buscando termos de alta precisão de **Pediatria**, **Obstetrícia** e **Cirurgia/Hemoterapia**. Caso algum item dispare `[WARN]`:
1. Inspecione manualmente o enunciado completo (idade real `< 18 anos` vs adulto, gestação/puerpério ativo, foco em hemoterapia/trauma/perioperatório).
2. Se for violação real da Hierarquia de Precedência Clínica, corrija o `subtemaSlug` em `classification_v1.json`, execute `npx tsx scripts/classify_bank.ts apply` e sincronize o `.jsonl` correspondente — nunca altere enunciados, alternativas ou gabaritos oficiais.
