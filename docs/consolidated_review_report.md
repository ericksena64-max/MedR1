# Relatório Consolidado de Revisão — Fase 1 Multiagente do MedR1

## 1. Cabeçalho e Escopo

- **Documento auditado:** `docs/phase1_multiagent_design.md` (179 linhas; `FeatureRange: L1–120`, `DetailedRange: L121–179`)
- **Referências de base:** `GEMINI.md`, `db/migrations/005_edugpt_multiagent_tutor.sql`
- **Arquivos verificados diretamente no código:**
  - `src/types/medical.ts`
  - `server/questionsService.ts`
  - `server.ts`
  - `scripts/seed_questions_postgres.ts`
  - `src/components/questions/QuestionCard.tsx`
  - `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py`, `merge_and_audit.py`, `export_medr1.py`
  - `.agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py`
  - `data/classification/examiner_v1.json`
  - `server/questions.test.ts`
  - Scripts temporários fora do repositório: `scratch/valid_questions_digest.json`, `scratch/generate_examiner_v1_workflow.py`, `scratch/apply_examiner_v1.py`

### Status de Execução dos Revisores

| Etapa / Revisor | Modo de Execução | Status | Achados Brutos |
| --- | --- | --- | --- |
| Stage 6 (`egm-comprehension`) | Contexto isolado (`1d41b313-caf5-4d9f-bfb4-4eda4333995d`) | `completed` | 2 🔴 / 4 🟡 / 6 🟢 |
| Stage 5 (`egm-zoom-out`, `egm-inventive-catalyst`) | Enxame paralelo | `not run` (`RESOURCE_EXHAUSTED 429`) | — |
| Stage 7 (`egm-design`, `egm-structural`, `egm-style`) | Enxame paralelo | `not run` (`RESOURCE_EXHAUSTED 429`) | — |
| Stage 8 (`egm-zoom-out` intermediário) | Não disparado após `429` | `not run` | — |
| Stage 9 (`egm-implementation-readiness`, `egm-codebase-details`, `egm-style`) | Enxame paralelo | `not run` (`RESOURCE_EXHAUSTED 429`) | — |
| Auditoria Direta (Stages 5, 7, 8 e 9) | Passagem única no contexto principal (substituta a pedido explícito do usuário; não constitui revisão Goldfish em contexto isolado) | `completed` | 5 🔴 / 5 🟡 / 4 🟢 |

---

## 2. Veredito Executivo

O design descreve uma entrega que funciona nos arquivos estáticos locais (`src/data/*Questions.ts`, `src/data/questions.ts` e `QuestionCard.tsx`) e passa nos cinco comandos de verificação já existentes, mas **não cumpre integralmente** três compromissos centrais declarados nos Objetivos e no `GEMINI.md`:

1. **Caminho PostgreSQL incompleto e frágil:** `scripts/seed_questions_postgres.ts` não grava `analise_banca` nem `mapa_distratores`, enquanto `server/questionsService.ts` já inclui ambas as colunas nos `SELECT`s — qualquer subida de código antes da execução manual da migration `005` quebra as consultas de listagem e detalhe.
2. **Objetivo 5 ("provas importadas no futuro já chegam com os dois campos preenchidos") quebrado em dois fluxos:** `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py` não solicita os novos campos na etapa de enriquecimento em lote, e `/api/import/extract-exam` em `server.ts` não os pede no prompt de extração.
3. **Invariante de integridade e paridade do `GEMINI.md` §6 não coberta:** `audit_integrity.py`, `merge_and_audit.py --audit-jsonl` e `parseMapaDistratores` em `server/questionsService.ts` não verificam presença, igualdade entre camadas nem ausência do gabarito oficial dentro de `mapaDistratores`. Além disso, o digest enviado aos agentes truncou boa parte dos enunciados e explicações antes da geração sem qualquer amostragem de revisão clínica.

**Contagem consolidada (deduplicada):** **5 🔴 Blockers**, **6 🟡 Majors**, **6 🟢 Nits** (17 itens acionáveis).

---

## 3. Achados Priorizados

### 🔴 Blockers

#### B1 — Persistência PostgreSQL ausente e risco de quebra em deploy (`seed_questions_postgres.ts` + `questionsService.ts`)
- **Referência no design:** L52, L58–67, L87–95, L107, L131–135
- **Evidência no código:**
  - `scripts/seed_questions_postgres.ts` (`UPSERT_SQL`, linhas 43–114) lista 26 colunas em `INSERT INTO questions (...)`, omitindo `analise_banca` e `mapa_distratores`.
  - `server/questionsService.ts` (`queryPaginatedQuestions` linha ~327 e `getQuestionById` linha ~377) seleciona `analise_banca, mapa_distratores` diretamente de `questions`, sem tolerância à ausência das colunas.
  - O diagrama §5 (L56–68) não mostra o PostgreSQL nem explica qual fonte alimenta o `QuestionCard.tsx` em produção.
- **Impacto:** Alunos servidos pelo backend PostgreSQL receberão sempre `undefined` nos dois campos mesmo após rodar o seed. Se o servidor subir antes de `db/migrations/005_edugpt_multiagent_tutor.sql` ser aplicada no banco, todas as requisições de catálogo e detalhe falham com erro SQL de coluna inexistente.

#### B2 — Objetivo 5 quebrado nos fluxos de importação em lote (`batch_gemini.py` e `/api/import/extract-exam`)
- **Referência no design:** L23, L108–109, L136–142
- **Evidência no código:**
  - `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py` (usado pelo fluxo principal `medr1-batch-pipeline`) não contém nenhuma referência a `analiseBanca` ou `mapaDistratores`. Como o Stage 2 não gera esses campos, a propagação adicionada em `merge_and_audit.py` e `export_medr1.py` recebe `None`/`{}` em toda prova processada pelo pipeline CLI.
  - Em `server.ts`, a regra 7 adicionada na linha 945 cobre apenas `/api/import/enrich-batch` (linha 883). A rota `/api/import/extract-exam` (linha 706) compartilha `IMPORT_RESPONSE_SCHEMA` / `QUESTION_ITEM_SCHEMA` (onde os campos são opcionais), mas não instrui o modelo a preenchê-los.
- **Impacto:** Novas provas importadas pelo pipeline padrão em lote ou por extração direta continuarão chegando sem `analiseBanca` e sem `mapaDistratores`, contrariando o Objetivo 5 (L23).

#### B3 — Contradição operacional não explicada entre "sem API do Gemini" e `run_workflow` / `research` / `flash`
- **Referência no design:** L15 vs. L59, L73, L147–148
- **Evidência no documento e no fluxo:** A L15 proíbe o uso da API externa do Gemini (`@google/genai`), mas a L73 e a L148 descrevem geração via `run_workflow` com agentes `research` no modelo `flash`. O documento não define o que executa `run_workflow`, qual provedor atende `flash`, qual é o consumo de cota/créditos e como reproduzir o processo fora do ambiente de agente.
- **Impacto:** Um engenheiro fora desta sessão não consegue auditar conformidade com a restrição de API, estimar custo nem reexecutar a geração de forma independente (a falha `RESOURCE_EXHAUSTED 429` ocorrida nesta mesma conversa confirma que a orquestração consome cota limitada do ambiente).

#### B4 — Invariante de `mapaDistratores` e paridade do `GEMINI.md` §6 não aplicadas nas fronteiras de leitura, UI e auditoria
- **Referência no design:** L48, L103, L107, L165, L167–179 vs. `GEMINI.md` §6
- **Evidência no código:**
  - `server/questionsService.ts` (`parseMapaDistratores`): filtra apenas chaves no padrão `^[A-E]$` e texto não vazio; não exclui `row.correct_option` nem valida contra as letras existentes em `row.options` (divergindo da regra absoluta de L48 e do filtro feito em `server.ts` e `export_medr1.py`).
  - `src/components/questions/QuestionCard.tsx`: o rótulo do botão (`Ver mapa de distratores (${Object.keys(question.mapaDistratores).length})`, linha ~1342) conta todas as chaves de `mapaDistratores`, enquanto a lista expandida (linhas ~1388–1392) filtra `alt.letter !== question.gabaritoOficial`. Qualquer chave inválida ou igual ao gabarito gera divergência entre `N` e os itens exibidos.
  - `.agents/skills/auditor-integridade-medr1/scripts/audit_integrity.py` e os 5 comandos da Etapa 5 (L171–177) não checam existência dos novos campos nas 1.135 questões válidas, ausência em questões anuladas, ausência do gabarito no mapa, nem paridade entre `src/data/*Questions.ts`, `data/provas/*.jsonl` e `data/classification/examiner_v1.json` (exigida para todas as camadas em `GEMINI.md` §6).
- **Impacto:** Corrupções silenciosas ou desvios futuros de paridade em `analiseBanca` e `mapaDistratores` passam pelo Quality Gate sem erro.

#### B5 — Truncamento severo do digest de entrada sem amostragem de revisão médica
- **Referência no design:** L72, L113–115
- **Evidência medida nos artefatos:** Em `scratch/valid_questions_digest.json` (1.135 questões), o corte por tamanho atingiu:
  - `enunciado` em 750 caracteres: **207 questões (18,2%)** truncadas;
  - `comentarioGeral` em 450 caracteres: **734 questões (64,7%)** truncadas;
  - `alternativas[].text` em 260 caracteres: **36 questões** com ao menos uma alternativa truncada;
  - `alternativas[].explanation` em 280 caracteres: **870 questões (76,7%)** com ao menos uma explicação truncada.
- **Impacto:** Os agentes geraram `analiseBanca` e `mapaDistratores` com dados clínicos e justificativas cortados na maioria das questões, sem nenhuma etapa de amostragem por médico e sem comparação de consistência contra `alternativas[].explanation`. Uma explicação de distrator incorreta aparece em alerta vermelho imediatamente após o erro do aluno.

---

### 🟡 Majors

#### M1 — DDL especulativo da Fase 2 acoplado na migration `005` (`question_attempts` + `study_plans`)
- **Referência no design:** L25–31, L119, L126–130 vs. `db/migrations/005_edugpt_multiagent_tutor.sql` (linhas 13–55)
- **Achado:** A migration `005` adiciona `error_category` com `CHECK` rígido de 6 valores fixos (`lacuna_conceitual`, `leitura_desatenta`, `distrator_classico`, `confusao_conduta_vs_diagnostico`, `detalhe_epidemiologico_ou_criterio`, `outro`), `error_diagnosis`, `tutor_feedback`, índice parcial e a tabela `study_plans`, embora nada no código leia ou escreva essas estruturas na Fase 1. Alterar esse `CHECK` quando a Fase 2 for desenhada exigirá outra migration de `DROP CONSTRAINT` + `ADD CONSTRAINT`.

#### M2 — Scripts de geração e aplicação não versionados no repositório
- **Referência no design:** L118, L146–147, L155
- **Achado:** O script de exportação do digest (`npx tsx -e` inline), `generate_examiner_v1_workflow.py` e `apply_examiner_v1.py` residem apenas no diretório `scratch/` da sessão do agente, fora de `scripts/` e fora do controle de versão. Um mantenedor que clone o repositório não encontra esses caminhos e não consegue regenerar `examiner_v1.json` nem reaplicá-lo.

#### M3 — Afirmação de checagem de integridade por snapshot em `questions.ts` não corresponde ao código de `apply_examiner_v1.py`
- **Referência no design:** L95 vs. L158
- **Achado:** A seção §5.2 (L95) afirma que, *para cada arquivo*, o script tira e compara um retrato antes/depois dos campos protegidos. Na prática, `apply_examiner_v1.py` executa `snapshot_core` em `*Questions.ts` e `*.jsonl`, mas em `src/data/questions.ts` (`apply_to_curated_questions_ts`) apenas divide blocos por regex e insere texto antes de `    comentarioGeral:`, sem extrair nem comparar retratos dos campos protegidos antes e depois da gravação.

#### M4 — Crescimento real de payload não medido no documento e triplicação de dados no repositório
- **Referência no design:** L56–68, L116
- **Evidência medida:** `data/classification/examiner_v1.json` ocupa **1.496,4 KB** (~1,46 MB para 1.135 questões); os 12 módulos `src/data/*Questions.ts` somam agora **6.489,0 KB** e `src/data/questions.ts` soma **94,9 KB**, além da cópia nos 12 `data/provas/*.jsonl`. O mesmo conteúdo de análise e distratores existe em três camadas distintas do repositório, sem regra de qual é a fonte canônica caso haja edição pontual.

#### M5 — Decomposição aritmética do banco incompleta no documento
- **Referência no design:** L5, L58, L83, L91–93, L146, L159 vs. `GEMINI.md` §1
- **Achado:** O documento cita `1.174` questões no escopo (L5) e depois `1.135` válidas (`1.118` oficiais + `17` curadas), mas não explicita as **39 questões anuladas** (`38` oficiais + `1` curada) definidas em `GEMINI.md` §1. Um leitor novo não consegue reconciliar os números nos critérios de saída.

#### M6 — Ausência de cobertura de testes automatizados para os novos comportamentos e `GEMINI.md` desatualizado
- **Referência no design:** L123–179 vs. `server/questions.test.ts` e `GEMINI.md` §6
- **Achado:** `server/questions.test.ts` (`makeDbRow`, linhas 23–60) não envia `analise_banca` nem `mapa_distratores`, logo o parsing de `questionsService.ts` e o tratamento de erro em `formatAiQuestionsToMedR1` não são exercitados pelos 164 testes do `npm test`. Também não há teste garantindo a correspondência por `officialLetter` no `QuestionCard.tsx` quando `shuffleAlternatives` está ativo. Além disso, `GEMINI.md` §6 ainda não lista `data/classification/examiner_v1.json` nem os novos campos na tabela de paridade obrigatória.

---

### 🟢 Nits

- **N1 — Termos "Fase 1 / Fase 2" e "EduGPT" sem definição no texto (L1, L6, L25–31, L119):** `EduGPT` aparece apenas no nome do arquivo de migration, e "Fase 2" é citada no Risco 7 sem mapear quais itens da Seção 3 pertencem a ela.
- **N2 — Referência frágil "novo item 7" na instrução de `/api/import/enrich-batch` (L140):** O plano acopla a mudança à numeração interna do prompt atual em `server.ts`.
- **N3 — Descompasso entre os comentários do modelo ("1 frase") e os limites do validador (L39–41, L74–78):** Na prática, em `examiner_v1.json`, `conceitoCentral` varia de 57 a 134 caracteres e `raciocinioChave` de 160 a 445 caracteres; o validador exige apenas mínimos (`>= 6` e `>= 12`), não valida tamanho mínimo de `armadilhaBanca` (embora todas as 1.135 entradas tenham gerado uma), e mistura limpeza de texto ("Incorreta.") com regras de descarte.
- **N4 — Termos e atalhos de interface sem referência explícita (L99, L102–103, L165):** Falta ponteiro para o arquivo de regras Apple HIG (`.gemini/config/plugins/apple-hig-ui/rules/AGENTS.md`), explicação prévia das abas de `QuestionCard` e definição de `N` no botão `"Ver mapa de distratores (N)"`.
- **N5 — Cabeçalho de divisão em inglês (`## Detailed Implementation Plan`, L121):** Único título em inglês dentro de um documento escrito integralmente em português (mantido apenas por convenção de parser de etapas).
- **N6 — Sobreposição de exibição entre `analiseBanca` e `comentarioGeral` na mesma aba (L10–13, L38–42, L102):** O problema na L12 critica a falta de síntese fora do `comentarioGeral`, mas a interface insere o cartão "Análise da Banca" imediatamente acima do próprio `comentarioGeral` na aba `commentTab === 'alternativas'`, repetindo o raciocínio clínico na mesma tela.

---

## 4. Análise de Simplificação e Contra-Argumentos

1. **Triplicação vs. fonte única para dados pré-processados:** Armazenar `analiseBanca` e `mapaDistratores` apenas em `data/classification/examiner_v1.json` (ou em mapas por prova carregados sob demanda no momento da resposta) evitaria inflar 25 arquivos de questões em `+1,46 MB` distribuídos e eliminaria risco de dessincronização entre `.ts`, `.jsonl` e JSON de classificação. **Contra-argumento:** embutir nos arquivos da prova permite que cada prova chegue autossuficiente no bundle e no seed SQL sem uma junção extra em runtime; se essa opção for mantida, `GEMINI.md` §6 e `audit_integrity.py` precisam passar a auditar `examiner_v1.json` como camada obrigatória.
2. **Contorno à restrição "sem API do Gemini":** Proibir `@google/genai` mantendo geração massiva por agentes `flash` em lote não removeu o acoplamento a modelo nem o custo computacional — apenas deslocou o consumo para a cota de execução do agente no IDE/CLI (evidenciado pelo erro `429` nesta sessão) e deixou o pipeline dependente de scripts temporários fora do repositório.
3. **Separação das migrations:** A criação de `study_plans` e das colunas em `question_attempts` deveria ficar em uma migration dedicada à Fase 2 (`006_...`), deixando a `005` restrita a `analise_banca` e `mapa_distratores` em `questions`. Isso evita manter um `CHECK` restritivo em produção antes de existir código consumidor.

---

## 5. Matriz de Rastreabilidade

| Origem (Achado Bruto) | Escopo no Doc | ID Consolidado | Ação Recomendada |
| --- | --- | --- | --- |
| `comprehension-1-1`, `direct-codebase-1`, `direct-readiness-1` | L52, L58–67, L87–95, L107, L131–135 | **B1** | Atualizar `scripts/seed_questions_postgres.ts` para fazer upsert de `analise_banca` e `mapa_distratores`, documentar a ordem migration→deploy e explicitar no diagrama se a produção lê módulos estáticos ou Postgres. |
| `direct-codebase-2`, `direct-design-1` | L23, L108–109, L136–142 | **B2** | Atualizar `.agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py` e o prompt de `/api/import/extract-exam` em `server.ts` para gerar `analiseBanca` e `mapaDistratores`. |
| `comprehension-1-2`, `direct-zoom-1` | L15, L59, L73, L147–148 | **B3** | Explicitar no documento o runtime/provedor de `run_workflow` (`research`/`flash`), limites de cota e comando reproduzível para futuras provas. |
| `comprehension-1-5`, `comprehension-1-12`, `direct-codebase-3` | L48, L103, L107, L165, L167–179 | **B4** | Filtrar `correct_option` e letras inválidas em `parseMapaDistratores` (`questionsService.ts`), alinhar contador `N` em `QuestionCard.tsx` ao conjunto filtrado, e estender `audit_integrity.py` para checar os novos campos e a paridade com `examiner_v1.json`. |
| `direct-design-2`, `comprehension-1-10` | L72, L113–115 | **B5** | Definir protocolo de auditoria médica por amostragem (sobretudo nas questões com `enunciado` ou `explanation` truncados) e checagem automatizada de não contradição com `alternativas[].explanation`. |
| `direct-zoom-2`, `direct-design-3` | L25–31, L119, L126–130 | **M1** | Extrair DDL de Fase 2 (`question_attempts` + `study_plans`) para migration própria quando a Fase 2 iniciar, ou documentar plano de alteração do `CHECK`. |
| `comprehension-1-3`, `direct-readiness-2` | L118, L146–147, L155 | **M2** | Promover o script de digest e `apply_examiner_v1.py` para `scripts/` (ou documentar caminho reproduzível sem dependência de `scratch/`). |
| `comprehension-1-4`, `direct-codebase-4` | L95, L158 | **M3** | Adicionar checagem de `snapshot_core` via `tsx`/parser AST para `src/data/questions.ts` ou corrigir a afirmação na seção §5.2. |
| `direct-zoom-3`, `direct-codebase-5` | L56–68, L116 | **M4** | Registrar os tamanhos medidos (`1.496,4 KB` em `examiner_v1.json`, `6.489,0 KB` em `*Questions.ts`) e definir a regra de fonte canônica caso haja correção manual em uma questão. |
| `comprehension-1-6` | L5, L58, L83, L91–93, L146, L159 | **M5** | Explicitar na seção de escopo e critérios de saída a conta `1.174 = 1.135 válidas + 39 anuladas (38 oficiais + 1 curada)`. |
| `direct-readiness-3`, `direct-codebase-6` | L123–179 | **M6** | Adicionar testes unitários em `server/questions.test.ts` (com `analise_banca`/`mapa_distratores` + vazamento de gabarito) e testes de `QuestionCard` / `formatAiQuestionsToMedR1`, além de incluir `examiner_v1.json` em `GEMINI.md` §6. |
| `comprehension-1-7` | L1, L6, L25–31, L119 | **N1** | Definir brevemente o mapa das fases (Fase 1, Fase 2, Fase 3) e o nome `EduGPT`. |
| `comprehension-1-8` | L140 | **N2** | Descrever a regra adicionada em `/api/import/enrich-batch` sem depender do número de item no prompt. |
| `comprehension-1-9` | L39–41, L74–78 | **N3** | Alinhar comentários de tamanho do modelo ao comportamento real do validador e separar sanitização de critério de rejeição. |
| `comprehension-1-11` | L99, L102–103, L165 | **N4** | Citar o caminho das regras Apple HIG e esclarecer o significado de `N` no botão do mapa de distratores. |
| `direct-structural-1` | L121 | **N5** | Registrar explicitamente se o cabeçalho em inglês é exigido por convenção do fluxo de revisão. |
| `direct-style-1` | L10–13, L38–42, L102 | **N6** | Avaliar se `analiseBanca` substitui parte do `comentarioGeral` em futuras questões ou se mantém resumo curto separado. |
