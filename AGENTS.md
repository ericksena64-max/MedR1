# GEMINI.md — Normas de Arquitetura e Integridade de Dados do MedR1

Este documento define as invariantes obrigatórias para qualquer alteração, extração, classificação ou importação de questões no **MedR1**. Todas as regras abaixo devem ser respeitadas sem exceções.

---

## 1. Estado Atual do Banco (1.174 Questões)
- **Provas Oficiais (`src/data/*Questions.ts` + `data/provas/*.jsonl`):** **1.156 questões** em 12 provas:
  - **UEPA 2022–2026:** 500 questões (`100` por edição)
  - **USP-SP 2023:** 120 questões
  - **USP-RP 2023:** 100 questões
  - **UNIFESP 2023:** 100 questões
  - **SUS-SP 2023:** 100 questões
  - **ENARE 2024:** 97 questões
  - **ENAMED 2025:** 90 questões
  - **IEPPA 2026:** 49 questões válidas (Q05 anulada na fonte oficial)
- **Questões Curadas (`src/data/questions.ts`):** **18 questões**.
- **Anuladas:** **39 questões anuladas** no total (`38` oficiais + `1` em `src/data/questions.ts`), sempre marcadas com `anulada: true`, `taxaAcertoBase: 0`, `taxaAcertoGlobal: 0` e dificuldade `'Anulada'`.
- **Distribuição Atual por Grande Área (1.174):**
  - Clínica Médica: **313** (`308` oficiais + `5` curadas)
  - Pediatria: **243** (`240` oficiais + `3` curadas)
  - Ginecologia e Obstetrícia: **234** (`231` oficiais + `3` curadas)
  - Cirurgia Geral: **217** (`213` oficiais + `4` curadas)
  - Medicina Preventiva: **167** (`164` oficiais + `3` curadas)

---

## 2. Taxonomia Canônica v1 (`medr1_taxonomy_v1`)
- **Fonte única de verdade:** `src/data/taxonomy/medr1_taxonomy_v1.json` (**5 Grandes Áreas**, **44 Temas** e **262 Subtemas canônicos**).
- Toda questão oficial deve conter exatamente os campos canônicos:
  - `grandeAreaId` (`clinica_medica` | `cirurgia_geral` | `ginecologia_obstetricia` | `pediatria` | `medicina_preventiva`)
  - `grandeArea`, `tema`, `subtema` (rótulos PT-BR acentuados idênticos aos do JSON)
  - `temaSlug`, `subtemaSlug` (slugs canônicos existentes em `medr1_taxonomy_v1.json`)
  - `tags` (`lowercase-kebab-case`, sem acentos)
  - `taxonomyVersion: "medr1_taxonomy_v1"`
- **Proibição absoluta:** nunca inventar `subtemaSlug` fora da lista fechada de 262 subtemas nem alterar `id` ou slugs já existentes.

---

## 3. Hierarquia de Precedência Clínica (`CLINICAL_PRECEDENCE_RULES`)
Definida em `src/lib/taxonomyClassifier.ts` e reforçada nos prompts de `server.ts`:
1. **Pediatria > Clínica Médica:** Paciente pediátrico (RN, lactente, pré-escolar, escolar, adolescente / idade `< 18 anos`) com abordagem diagnóstica ou terapêutica pediátrica — incluindo DM1 e cetoacidose diabética na infância (`ped-puericultura-endocrinologia-pediatrica-e-diabetes-na-infancia`), asma infantil, febre reumática infantil, nefropatias e infecções pediátricas — deve ir para **Pediatria**.
2. **Cirurgia Geral > Clínica Médica:** Transfusão de hemocomponentes, protocolo de transfusão maciça, reposição volêmica no choque hemorrágico/trauma (`cg-periop-hemoterapia-transfusao-macica-e-reposicao-volemica`), avaliação pré-operatória, manejo perioperatório de anticoagulantes e complicações pós-operatórias devem ir para **Cirurgia Geral**.
3. **Ginecologia e Obstetrícia > Clínica Médica:** Gestantes ou puérperas com intercorrências clínicas, metabólicas, infecciosas ou trombóticas devem ir para **Ginecologia e Obstetrícia**.
4. **Sinal de Bloco da Prova:** Em provas organizadas por blocos clássicos (Clínica, Cirurgia, Pediatria, GO, Preventiva), use a posição/numeração da questão na prova como critério auxiliar de desempate.

---

## 4. Calibração Bayesiana de Dificuldade (`difficultyCalibration.ts`)
- **Proibição absoluta de placeholders:** nenhuma questão válida pode permanecer com `taxaAcertoBase` ou `taxaAcertoGlobal` igual a **`62.0`** ou **`64.0`**.
- **Priors clínicos iniciais obrigatórios (`CLINICAL_DIFFICULTY_PRIORS`, `priorWeight = 25`):**
  - **Fácil (`76.5`, limiar `> 70`):** conceito direto, quadro clássico sem pegadinhas, conduta de primeira linha inequívoca ou rastreamento básico.
  - **Médio (`58.4`, limiar `40–70`):** vinheta em 2 etapas (diagnóstico + conduta ou interpretação de exame), diagnóstico diferencial habitual ou complicação comum.
  - **Difícil (`36.8`, limiar `< 40`):** múltiplas etapas, exceção a diretriz/contraindicação, estadiamento detalhado, comorbidade limitante ou detalhe fino fisiopatológico/legal.
- **Atualização em tempo real (Teoria Clássica dos Testes):**
  - Fórmula: `((baseAccuracy * priorWeight) + (realHits * 100)) / (priorWeight + realAttempts)` (arredondado para 1 casa decimal), implementada em `src/lib/difficultyCalibration.ts` e na RPC SQL `register_first_attempt_stats` (`db/migrations/004_bayesian_difficulty_calibration.sql`).
  - Apenas a **1ª tentativa** única por `(studentId, questionId)` atualiza os contadores globais; revisões subsequentes alteram apenas o histórico do aluno.
- **Proteção de Anuladas:** questões com `anulada: true` devem ter obrigatoriamente `taxaAcertoBase: 0`, `taxaAcertoGlobal: 0` e `computeDifficulty(..., true) === 'Anulada'` (nunca `'Difícil'`).

---

## 5. Ordem Oficial das Alternativas (`A–E`) e Embaralhamento Apenas Visual
- **Integridade no banco:** nos arquivos `.ts`, `.jsonl`, `extracted.json` e `.md`, `alternativas` deve preservar rigorosamente a ordem oficial (`A, B, C, D` ou `A, B, C, D, E`) do caderno da banca (`validate_alternative_order` em `merge_and_audit.py`). Questões anuladas aceitam prefixo contíguo (`>= 2` opções a partir de `A`) se vier assim do caderno bruto. Quando `anulada: false`, `gabaritoOficial` deve existir entre as letras presentes.
- **Blindagem na importação:** os prompts de `server.ts` (`/api/import/extract-exam`, `/api/import/enrich-batch`) e `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py`, bem como `export_medr1.py` e `medr1_exam_cli.py`, proíbem reordenar ou trocar letras das alternativas.
- **Embaralhamento opcional na UI (`src/lib/alternativeShuffle.ts`):** ocorre exclusivamente na camada visual do `QuestionCard.tsx` (preferência `shuffleAlternatives`, **desligada por padrão**), mantendo `officialLetter` preservado para correção, persistência e comentários.

---

## 6. Paridade 100% Entre Camadas e Quality Gate
Qualquer alteração em lote ou importação de nova prova deve manter 100% de paridade de `id`, enunciado, alternativas, gabarito, taxonomia (`grandeAreaId`, `tema`, `subtema`, `temaSlug`, `subtemaSlug`) e dificuldade (`taxaAcertoBase`, `taxaAcertoGlobal`) entre:
- `data/provas/*.jsonl`
- `data/classification/classification_v1.json`
- `data/classification/difficulty_v1.json`
- `src/data/*Questions.ts`
- `src/data/examCatalog.ts` (`questionCount`, `activeCount`, `areaCounts`)

### Comandos Obrigatórios Antes de Concluir Qualquer Entrega
```bash
python3 .agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py --audit-jsonl data/provas --dry-run
npx tsx scripts/classify_bank.ts audit
npx tsc --noEmit
npm test
```
