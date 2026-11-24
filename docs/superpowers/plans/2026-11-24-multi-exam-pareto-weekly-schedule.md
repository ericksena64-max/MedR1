# Multi-Exam Pareto Weekly Schedule Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Evoluir o motor de cronograma semanal do MedR1 para suportar seleção única ou múltipla de provas alvo ordenadas por prioridade (`UEPA`, `ENARE`, `UFRGS`, `USP-SP`, `SUS-SP`), calculando Pareto individual ou mesclado com bônus de interseção, lacunas suavizadas do aluno, distribuição sem repetição da mesma grande área no mesmo dia e sincronia instantânea com a Grade Semanal e o Resumo de Aprovação.

**Architecture:** Expandimos `src/lib/examWeights.ts` com uma matriz de incidência histórica e núcleo Pareto 80/20 para as 5 bancas alvo (`UEPA`, `ENARE`, `UFRGS`, `USP-SP`, `SUS-SP`) sem quebrar o `ExamBoard` já usado no FSRS. Em `src/lib/weeklySchedule.ts`, implementamos a fusão de Pareto com pesos decrescentes normalizados `w_b`, bônus de interseção, suavização de Laplace no aproveitamento, restrição de não repetir `grandeAreaId` no mesmo dia e `reasonTag` por bloco. Na UI, atualizamos `RoutineConfigModal.tsx` (chips numerados `1, 2, 3...` reordenáveis), `WeeklyStudyScheduleCard.tsx` (cabeçalho multi-prova + tag explicativa curta) e `HomeUnifiedView.tsx` (prova nº 1 como corte de referência).

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Especificação técnica fornecida pelo usuário para fusão de Pareto multi-prova no MedR1 + diretrizes Apple HIG (`#007AFF`, `tabular-nums`, baixa carga cognitiva).

## Global Constraints

- Preservar 100% de retrocompatibilidade com `localStorage` legado (`targetExam` único em `medr1_weekly_schedule_v1`) e com `ExamBoard` (`UEPA | ENARE | GERAL`) usado em `srs.ts` e `ExamWeightsModal.tsx`.
- Sempre manter pelo menos 1 prova alvo selecionada (`targetExams.length >= 1`).
- Preservar o orçamento líquido diário (`2,2 min/q` ou `3,0 min/q` descontando `30s` por flashcard) e o fuso horário local.
- Preservar todos os 50 testes Vitest existentes e adicionar testes dedicados ao motor multi-prova.
- Verificação final obrigatória: `npm test`, `npm run lint` e `npm run build` com exit code 0.

## Review Focus

- **Migração de configuração legada**: um usuário com `{ "targetExam": "USP-SP" }` salvo em `localStorage` (sem `targetExams`) deve carregar `targetExams: ['USP-SP']` sem erro nem reset para `UEPA`.
- **Remoção da última prova no modal**: tentar remover a única prova restante deve ser bloqueado (sempre restar `>= 1` prova alvo).
- **Não repetição de Grande Área no mesmo dia**: em um dia com 2 ou 3 blocos, todos os blocos devem pertencer a `grandeAreaId` distintos sempre que o pool tiver áreas diferentes suficientes.
- **Bônus de interseção em 3 bancas (`UEPA + ENARE + UFRGS`)**: temas presentes no núcleo Pareto 80/20 de 2 ou 3 das bancas escolhidas devem superar temas de apenas 1 banca quando o aproveitamento do aluno é equivalente.
- **Sincronia da prova nº 1 com `HomeUnifiedView`**: ao reordenar `UFRGS` para a posição `1` no modal `"Configurar Rotina"`, tanto a Grade Semanal quanto o Resumo de Aprovação devem refletir imediatamente `UFRGS` como referência.

---

### Task 1: Matriz de Incidência por Banca e Núcleo Pareto 80/20 (`src/lib/examWeights.ts`)

**Files:**
- Modify: `src/lib/examWeights.ts` (acrescentar tipos, matriz das 5 provas alvo, presets de corte e helpers puros sem alterar `ExamBoard` existente)

**Interfaces:**
- Consumes: `GrandeAreaId` de `src/types/medical.ts`; `normalizeMedicalText` já existente em `src/lib/examWeights.ts`.
- Produces:
  - `export type TargetExamBoard = 'UEPA' | 'ENARE' | 'UFRGS' | 'USP-SP' | 'SUS-SP'`
  - `export const TARGET_EXAM_BOARDS: ReadonlyArray<TargetExamBoard>`
  - `export interface TargetExamTopicWeight { topic: string; grandeAreaId: GrandeAreaId; shortArea: string; weight: number; inPareto80: boolean; keywords: string[] }`
  - `export interface TargetExamCutoffPreset { board: TargetExamBoard; institution: string; defaultCutoff: number; totalQuestions: number }`
  - `export const TARGET_EXAM_CUTOFF_PRESETS: Record<TargetExamBoard, TargetExamCutoffPreset>`
  - `export const TARGET_EXAM_PARETO_MATRIX: Record<TargetExamBoard, TargetExamTopicWeight[]>`
  - `export function resolveTopicExamIncidence(topicLabel: string, grandeAreaId: GrandeAreaId, board: TargetExamBoard): { incidence: number; inPareto80: boolean; matchedTopic: string | null }`
  - `export function getExpandedTopicCatalog(boards: TargetExamBoard[]): Array<{ grandeAreaId: GrandeAreaId; label: string; shortArea: string }>`

- [ ] **Step 1: Estruturar `TARGET_EXAM_PARETO_MATRIX` e `TARGET_EXAM_CUTOFF_PRESETS` em `src/lib/examWeights.ts`**

Definir pesos históricos (`0.20` a `1.00`) e flag `inPareto80` para assuntos reais das 5 grandes áreas em cada uma das 5 bancas:
- **UEPA**: forte em Doenças Endêmicas/Infectologia, Obstetrícia de Alto Risco, Epidemiologia e SUS, Imunizações/Puericultura, Trauma/ATLS.
- **ENARE**: forte em Atenção Primária e SUS, Pré-Natal e Parto, Cardiologia, Neonatologia, Abdome Agudo, Endocrinologia.
- **UFRGS**: forte em Cardiologia, Pneumologia/Terapia Intensiva, Pediatria/Neonatologia, Ginecologia Endócrina/Obstetrícia, Epidemiologia Clínica e Medicina Baseada em Evidências, Cirurgia do Aparelho Digestivo.
- **USP-SP**: forte em Cardiologia, Nefrologia, Pneumologia/UTI, Cirurgia do Aparelho Digestivo, Neurologia, Ginecologia Endócrina, Neonatologia.
- **SUS-SP**: forte em Trauma/ATLS, Abdome Agudo, Urgências Obstétricas, Cardiologia, Emergências Pediátricas, Infectologia.

- [ ] **Step 2: Implementar `resolveTopicExamIncidence` e `getExpandedTopicCatalog` em `src/lib/examWeights.ts`**

`resolveTopicExamIncidence` faz correspondência normalizada (`normalizeMedicalText`) contra `topic` e `keywords` da banca escolhida, retornando `{ incidence, inPareto80, matchedTopic }` (com fallback conservador `{ incidence: 0.35, inPareto80: false, matchedTopic: null }` para temas fora da matriz). `getExpandedTopicCatalog` retorna a união deduplicada dos assuntos reais das bancas selecionadas para uso quando o aluno ainda não tem histórico de questões respondidas.

---

### Task 2: Motor de Fusão de Pareto Multi-Prova (`src/lib/weeklySchedule.ts` + `src/lib/weeklySchedule.test.ts`)

**Files:**
- Modify: `src/lib/weeklySchedule.ts`
- Modify Test: `src/lib/weeklySchedule.test.ts`

**Interfaces:**
- Consumes: `TargetExamBoard`, `TARGET_EXAM_BOARDS`, `resolveTopicExamIncidence`, `getExpandedTopicCatalog` de `src/lib/examWeights.ts`.
- Produces:
  - `export type TargetExamPreset = TargetExamBoard`
  - `WeeklyScheduleConfig`: adiciona `targetExams?: TargetExamPreset[]` (mantendo `targetExam?: TargetExamPreset` por retrocompatibilidade).
  - `WeeklyTopicBlock`: adiciona `reasonTag: string` (ex.: `'Pareto UEPA'`, `'UEPA + ENARE'`, `'UFRGS · Gap 52%'`).
  - `WeeklyScheduleResult`: adiciona `targetExams: TargetExamPreset[]` e `targetExamsLabel: string` (ex.: `'UEPA + ENARE + UFRGS'`), mantendo `targetExam: TargetExamPreset` (= `targetExams[0]`).
  - `export function computeExamPriorityWeights(exams: TargetExamPreset[]): Record<TargetExamPreset, number>`
  - `export function normalizeTargetExams(config: Pick<WeeklyScheduleConfig, 'targetExams' | 'targetExam'>): TargetExamPreset[]`

- [ ] **Step 1: Escrever testes que falham em `src/lib/weeklySchedule.test.ts` (RED)**

Adicionar 4 casos de teste cobrindo:
1. Banca única (`UEPA` vs `UFRGS`): temas distintos lideram o cronograma conforme a matriz histórica da banca e geram `reasonTag` apropriada (`Pareto UEPA` / `Pareto UFRGS` ou `... · Gap XX%`).
2. Mesclagem de 3 bancas (`UEPA + ENARE + UFRGS`): `targetExamsLabel === 'UEPA + ENARE + UFRGS'`, pesos `w_b` decrescentes somando `1`, e temas presentes no Pareto de múltiplas bancas recebem bônus de interseção e superam temas restritos a 1 banca (com `reasonTag` contendo `+`, ex.: `UEPA + ENARE`).
3. Não repetição da mesma `grandeAreaId` no mesmo dia ativo quando há áreas distintas no pool, respeitando rigorosamente horas/dias, ritmo (`2.2` vs `3.0`) e desconto de `30s/flashcard`.
4. Retrocompatibilidade de `loadWeeklyScheduleConfig` com JSON legado contendo apenas `targetExam` (sem `targetExams`) e sanitização de array vazio.

- [ ] **Step 2: Rodar `npx vitest run src/lib/weeklySchedule.test.ts` para confirmar falha (RED)**

Expected: FAIL (novos símbolos/campos ainda não implementados).

- [ ] **Step 3: Implementar fusão de Pareto e distribuição sem repetição de área em `src/lib/weeklySchedule.ts`**

- `computeExamPriorityWeights(exams)`: para `k = 0..n-1`, peso bruto `1 / (k + 1)`, normalizado pela soma (`∑ w_b = 1`).
- `aproveitamentoSuavizado`: com `alpha = 6` e `prior = 0.65`, `((studentPct / 100) * answered + alpha * prior) / (answered + alpha)`.
- `incidenciaComposta`: `∑ (w_b * incidence_b) + (paretoHits.length >= 2 ? 0.15 * (paretoHits.length - 1) : 0)`.
- `scoreSemanal = incidenciaComposta * (1 - aproveitamentoSuavizado)`.
- `reasonTag`:
  - Se `paretoHits.length >= 2`: `${paretoHits.slice(0, 2).join(' + ')}` (ex.: `UEPA + ENARE`).
  - Senão se `answered >= 5 && studentPct < 65`: `${primaryHitOrFirstExam} · Gap ${Math.round(studentPct)}%`.
  - Senão se `paretoHits.length === 1`: `Pareto ${paretoHits[0]}`.
  - Senão: `${exams[0]} · Reforço`.
- Distribuição diária: ao escolher `countForDay` (1–3) blocos para um dia ativo, percorrer `rankedTopics` selecionando primeiro candidatos cuja `grandeAreaId` ainda não foi usada naquele dia (`usedAreasToday`), garantindo diversidade clínica no dia e mantendo rotação ao longo da semana.

- [ ] **Step 4: Rodar `npx vitest run src/lib/weeklySchedule.test.ts` para confirmar aprovação (GREEN)**

Expected: PASS (todos os testes antigos + 4 novos passando).

---

### Task 3: Seletor Multi-Prova Ordenado na Rotina + Cabeçalho e Tags na Grade (`RoutineConfigModal.tsx` e `WeeklyStudyScheduleCard.tsx`)

**Files:**
- Modify: `src/components/analytics/RoutineConfigModal.tsx`
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx`

**Interfaces:**
- Consumes: `TARGET_EXAM_PRESETS`, `normalizeTargetExams`, `WeeklyTopicBlock.reasonTag`, `WeeklyScheduleResult.targetExamsLabel` de `src/lib/weeklySchedule.ts`.
- Produces: Mesmo contrato de props de `RoutineConfigModal` e `WeeklyStudyScheduleCard`.

- [ ] **Step 1: Atualizar `RoutineConfigModal.tsx` com chips numerados `1, 2, 3...` reordenáveis**

- Exibir a lista ordenada de provas ativas como chips numerados (`1 UEPA`, `2 ENARE`, `3 UFRGS`) com botões compactos para mover prioridade (`←` / `→`) e remover (`×`, desabilitado quando restar apenas 1 prova).
- Exibir as provas restantes disponíveis (`TARGET_EXAM_PRESETS` não selecionadas) como pills `+ UFRGS`, `+ USP-SP`, etc., para adicionar em 1 clique.
- Ao alterar a lista, salvar `{ ...prev, targetExams: nextList, targetExam: nextList[0] }` em `localStorage` e disparar `WEEKLY_SCHEDULE_UPDATED_EVENT`.
- Exibir no rodapé do modal o resumo ao vivo: `${preview.targetExamsLabel} · ${preview.totalWeeklyHours}h · ${preview.totalWeeklyQuestions}q/sem`.

- [ ] **Step 2: Atualizar `WeeklyStudyScheduleCard.tsx` com cabeçalho multi-prova e `reasonTag` nos blocos**

- Na faixa `ROTA DE APROVAÇÃO` e no título/subtítulo: exibir `schedule.targetExamsLabel` (ex.: `Grade Semanal · UEPA + ENARE + UFRGS`) e pills compactas das provas ativas.
- Em cada bloco de assunto dentro da grade de 7 colunas: exibir `block.reasonTag` como uma tag discreta e legível (`text-[9px]` / `rounded bg-[#007AFF]/8 text-[#007AFF] dark:bg-sky-500/15 dark:text-sky-300`), preservando a altura compacta do card e o scroll interno de `340px`.

---

### Task 4: Sincronia com `HomeUnifiedView.tsx` (Prova nº 1 como Corte de Referência) & Validação Final

**Files:**
- Modify: `src/components/analytics/HomeUnifiedView.tsx`

**Interfaces:**
- Consumes: `WEEKLY_SCHEDULE_STORAGE_KEY`, `WEEKLY_SCHEDULE_UPDATED_EVENT`, `loadWeeklyScheduleConfig`, `normalizeTargetExams` de `src/lib/weeklySchedule.ts`; `TARGET_EXAM_CUTOFF_PRESETS` de `src/lib/examWeights.ts`.
- Produces: Resumo de Aprovação sincronizado instantaneamente com a prova nº 1 da rotina.

- [ ] **Step 1: Sincronizar prova nº 1 com `HomeUnifiedView.tsx`**

- Ler `primaryTargetExam` a partir de `WEEKLY_SCHEDULE_STORAGE_KEY` e atualizar via listener de `WEEKLY_SCHEDULE_UPDATED_EVENT` e `storage`.
- Derivar `effectiveCutoffTarget` combinando `cutoffTarget` com `TARGET_EXAM_CUTOFF_PRESETS[primaryTargetExam]` (exibindo a instituição nº 1 e usando seu corte de referência no resumo executivo quando o aluno alterna/reordena a prova nº 1 na rotina).

- [ ] **Step 2: Rodar suíte completa de validação**

Run:
```bash
npm test && npm run lint && npm run build
```
Expected:
- `npm test`: todos os testes Vitest passando (50 existentes + novos testes multi-prova em `weeklySchedule.test.ts`).
- `npm run lint`: 0 erros TypeScript.
- `npm run build`: build Vite (`dist/`) + servidor (`server.mjs`) concluídos com exit code 0.
