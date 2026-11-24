# Bank-Driven Pareto Incidence & Weekly Schedule Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Alimentar o cálculo de incidência por banca e assunto da Grade Semanal **exclusivamente a partir das questões reais existentes no banco de questões** (`questions: MedicalQuestion[]`), usando fallback para a matriz estática apenas quando o banco ou a banca selecionada ainda não possuir questões suficientes, e garantindo que nenhum assunto se repita em dias ativos consecutivos.

**Architecture:** Adicionamos em `src/lib/examWeights.ts` um indexador puro `buildBankIncidenceByBoard(questions, board)` que filtra questões da banca (com aliases como `UFRGS`/`HCPA` e `USP-SP`/`USP`), calcula a frequência real por assunto e grande área, identifica o núcleo Pareto 80% real e retorna `usedFallback: false` quando há dados suficientes (ou `usedFallback: true` quando a banca/banco está vazio). Em `src/lib/weeklySchedule.ts`, `buildWeeklySchedule` aceita `questions?: MedicalQuestion[]`, cruza a incidência derivada do banco para 1 ou múltiplas provas ordenadas com as lacunas do aluno e adiciona a trava de **não repetir assunto em dias ativos consecutivos**. Por fim, `HomeUnifiedView.tsx` passa `questions` para `WeeklyStudyScheduleCard.tsx`, mantendo o modal `"Configurar Rotina"` recolhido por padrão e a Home limpa.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Vitest.

**Spec:** Requisitos do usuário para incidência alimentada exclusivamente pelo banco de questões + regras existentes de `weeklySchedule.ts` (`2,2` vs `3,0 min/q`, `-30s/flashcard`, fuso local, multi-prova `UEPA | ENARE | UFRGS | USP-SP | SUS-SP`).

## Global Constraints

- Usar exclusivamente contagens reais de `questions` sempre que a banca selecionada tiver questões suficientes no banco (`>= MIN_BANK_QUESTIONS_FOR_BOARD`, padrão `3`), recorrendo à matriz estática `TARGET_EXAM_PARETO_MATRIX` **somente** quando a banca ou o banco inteiro não tiver questões suficientes.
- Preservar 100% da matemática de orçamento líquido (`2,2 min/q` vs `3,0 min/q`, desconto de `30s/flashcard`), fuso horário local e os 54 testes Vitest existentes.
- Não repetir a mesma grande área no mesmo dia ativo e **não repetir o mesmo assunto em dias ativos consecutivos** sempre que houver assuntos alternativos no pool.
- Manter o modal `"Configurar Rotina"` recolhido por padrão e a Home sem rolagem excessiva.
- Verificação final obrigatória: `npm test`, `npm run lint` e `npm run build` com exit code 0.

## Review Focus

- **Banca presente no banco vs. banca sem questões no banco**: quando o usuário escolhe `UEPA + UFRGS` e o banco tem 700 questões da `UEPA` mas 0 da `UFRGS`, a `UEPA` deve usar incidência 100% do banco (`source: 'bank'`) enquanto a `UFRGS` cai graciosamente no fallback (`incidenceSource: 'mixed'`), sem zerar nem quebrar a fusão.
- **Banco completamente vazio (`questions = []`)**: deve acionar fallback seguro (`incidenceSource: 'fallback'`) e ainda montar a grade semanal sem exceção.
- **Assunto dominante em dias consecutivos**: mesmo que um assunto tenha o maior score da semana, se foi alocado na Segunda (dia ativo), não pode reaparecer na Terça (próximo dia ativo) quando existem outros temas no pool — inclusive pulando um dia de descanso intermediário (ex.: Sexta ativo → Sábado descanso → Domingo ativo).
- **Aliases de instituição/banca**: questões cadastradas com `instituicao: 'HCPA'` ou `'HCPA-UFRGS'` devem contabilizar para `UFRGS`, e `'FMUSP'`/`'USP'` para `USP-SP`.
- **Retrocompatibilidade de testes existentes**: chamadas antigas de `buildWeeklySchedule` que não passam `questions` devem continuar usando fallback determinístico sem quebrar nenhum dos 15 testes atuais de `weeklySchedule.test.ts`.

---

### Task 1: Cálculo Puro de Incidência Direto do Banco (`src/lib/examWeights.ts`)

**Files:**
- Modify: `src/lib/examWeights.ts`

**Interfaces:**
- Consumes: `GrandeAreaId`, `MedicalQuestion` de `src/types/medical.ts`; `normalizeMedicalText`, `TARGET_EXAM_PARETO_MATRIX`, `resolveTopicExamIncidence` de `src/lib/examWeights.ts`.
- Produces:
  - `export const MIN_BANK_QUESTIONS_FOR_BOARD = 3`
  - `export interface BankBoardIncidenceProfile { board: TargetExamBoard; totalQuestions: number; usedFallback: boolean; topicIncidence: Map<string, { label: string; grandeAreaId: GrandeAreaId; count: number; incidence: number; inPareto80: boolean }>; areaShare: Map<GrandeAreaId, number> }`
  - `export function buildBankIncidenceByBoard(questions: MedicalQuestion[], board: TargetExamBoard, minQuestions?: number): BankBoardIncidenceProfile`
  - `export function resolveTopicIncidenceFromBank(topicLabel: string, grandeAreaId: GrandeAreaId, profile: BankBoardIncidenceProfile): { incidence: number; inPareto80: boolean; usedFallback: boolean }`

- [ ] **Step 1: Implementar `buildBankIncidenceByBoard` em `src/lib/examWeights.ts`**

- Filtrar `questions` da banca usando aliases normalizados (`UEPA`: `['uepa']`, `ENARE`: `['enare', 'ebserh', 'fgv enare']`, `UFRGS`: `['ufrgs', 'hcpa']`, `USP-SP`: `['usp sp', 'usp-sp', 'fmusp', 'usp']`, `SUS-SP`: `['sus sp', 'sus-sp', 'quadrix sus']`).
- Se `matched.length < minQuestions`: retornar `{ board, totalQuestions: matched.length, usedFallback: true, topicIncidence: new Map(), areaShare: new Map() }`.
- Caso contrário (`usedFallback: false`): contar questões por `normalizeMedicalText(q.tema)` e por `q.grandeAreaId`, ordenar temas por contagem decrescente, calcular `incidence = count / maxCount` (em `0..1`) e marcar `inPareto80 = true` até atingir 80% cumulativo das questões daquela banca (garantindo ao menos o top 1 tema no Pareto).

- [ ] **Step 2: Implementar `resolveTopicIncidenceFromBank` em `src/lib/examWeights.ts`**

- Se `profile.usedFallback` for `true`, delegar para `resolveTopicExamIncidence(topicLabel, grandeAreaId, profile.board)` retornando `usedFallback: true`.
- Se `profile.usedFallback` for `false`, buscar o tema no `profile.topicIncidence` (match exato ou substring normalizada); se não houver questão desse tema específico na banca, usar um piso proporcional à participação da grande área no banco (`(areaShare.get(grandeAreaId) ?? 0) * 0.4`, mínimo `0.05`) com `inPareto80: false` e `usedFallback: false`.

---

### Task 2: Integração no Motor da Grade Semanal + Trava de Dias Consecutivos + Testes TDD (`src/lib/weeklySchedule.ts` e `src/lib/weeklySchedule.test.ts`)

**Files:**
- Modify: `src/lib/weeklySchedule.ts`
- Modify Test: `src/lib/weeklySchedule.test.ts`

**Interfaces:**
- Consumes: `MedicalQuestion` de `src/types/medical.ts`; `buildBankIncidenceByBoard`, `resolveTopicIncidenceFromBank` de `src/lib/examWeights.ts`.
- Produces:
  - `buildWeeklySchedule` aceita parâmetro opcional `questions?: MedicalQuestion[]`.
  - `WeeklyScheduleResult` adiciona `incidenceSource: 'bank' | 'mixed' | 'fallback'` e `bankQuestionsMatched: number`.

- [ ] **Step 1: Escrever testes que falham em `src/lib/weeklySchedule.test.ts` (RED)**

Adicionar 4 testes cobrindo:
1. **Cálculo direto pelo banco (banca única)**: passar `questions` onde `UEPA` tem maioria absoluta de `Nefrologia` (tema que NÃO é top 1 na matriz estática da UEPA) e verificar que `incidenceSource === 'bank'`, `bankQuestionsMatched > 0` e `Nefrologia` lidera o cronograma da `UEPA`.
2. **Múltiplas provas alimentadas pelo banco (`UEPA + UFRGS`)**: passar questões reais para `UEPA` e `UFRGS` (incluindo alias `HCPA`) com um tema forte nas duas bancas e verificar que a fusão prioriza o tema comum a partir das contagens do banco (`incidenceSource === 'bank'`).
3. **Sem repetição de assunto em dias ativos consecutivos**: configurar 4 dias ativos consecutivos com pool limitado (ex.: 4 temas) e confirmar que nenhum tema aparece em dois dias ativos consecutivos (`day[d]` e `day[d+1]`).
4. **Fallback seguro de banco vazio ou banca sem questões**: com `questions: []`, verificar `incidenceSource === 'fallback'` e blocos válidos; com questões só da `UEPA` em `UEPA + UFRGS`, verificar `incidenceSource === 'mixed'`.

- [ ] **Step 2: Rodar `npx vitest run src/lib/weeklySchedule.test.ts` para confirmar falha (RED)**

Expected: FAIL (novos campos `incidenceSource`/`bankQuestionsMatched` e suporte a `questions` ainda ausentes).

- [ ] **Step 3: Implementar `questions` bank-driven + trava anti-repetição consecutiva em `src/lib/weeklySchedule.ts`**

- Construir `bankProfiles = targetExams.map((exam) => buildBankIncidenceByBoard(questions ?? [], exam))`.
- Calcular `incidenceSource`: `'bank'` se todos `usedFallback === false`, `'fallback'` se todos `usedFallback === true`, `'mixed'` caso misto; e `bankQuestionsMatched` = soma de questões distintas correspondentes às bancas.
- Quando `topicRows.length === 0` e há `questions` reais nas bancas escolhidas, popular `candidatePool` diretamente dos temas reais dessas questões (com `studentPct: 65, answered: 0`), recorrendo a `getExpandedTopicCatalog(targetExams)` apenas no fallback.
- Na alocação diária: manter `prevActiveDayTopicKeys: Set<string>` e priorizar candidatos cujo `normalizeTopicKey(cand.topic.label)` **não** esteja em `prevActiveDayTopicKeys` (além de manter `!usedAreasToday.has(cand.topic.grandeAreaId)`), atualizando `prevActiveDayTopicKeys` ao final de cada dia ativo.

- [ ] **Step 4: Rodar `npx vitest run src/lib/weeklySchedule.test.ts` para confirmar aprovação (GREEN)**

Expected: PASS (15 existentes + 4 novos = 19/19 testes passando).

---

### Task 3: Conexão com `HomeUnifiedView.tsx` & `WeeklyStudyScheduleCard.tsx` + Validação Completa

**Files:**
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx`
- Modify: `src/components/analytics/HomeUnifiedView.tsx`

**Interfaces:**
- Consumes: `questions?: MedicalQuestion[]` em `WeeklyStudyScheduleCardProps`.
- Produces: Grade semanal alimentada ao vivo pelas questões carregadas no MedR1 (incluindo provas importadas pelo aluno).

- [ ] **Step 1: Passar `questions` de `HomeUnifiedView.tsx` para `WeeklyStudyScheduleCard.tsx` e exibir origem discreta**

- Em `WeeklyStudyScheduleCard.tsx`: aceitar `questions?: MedicalQuestion[]` e repassar para `buildWeeklySchedule({ ..., questions })`. No subtítulo compacto da grade, indicar discretamente a fonte (`Base real · ${schedule.bankQuestionsMatched}q` quando `incidenceSource === 'bank'`, `Base real + padrão` quando `'mixed'`, ou `Base padrão` quando `'fallback'`), mantendo `"Configurar Rotina"` recolhido por padrão e zero rolagem extra.
- Em `HomeUnifiedView.tsx`: passar `questions={questions}` para `<WeeklyStudyScheduleCard ... />`.

- [ ] **Step 2: Rodar suíte completa de validação**

Run:
```bash
npm test && npm run lint && npm run build
```
Expected:
- `npm test`: todos os testes Vitest passando (54 existentes + 4 novos = 58/58).
- `npm run lint`: 0 erros TypeScript.
- `npm run build`: build Vite (`dist/`) + servidor (`server.mjs`) concluídos com exit code 0.
