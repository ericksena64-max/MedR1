# Medcel-Inspired Home Layout Adaptation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adaptar os principais elementos visuais e ergonômicos da Home da Medcel (faixa de rota de aprovação, seletor largo de semana, grade de 7 colunas com scroll interno e borda de destaque em `Hoje`, e explorador horizontal de cadeiras médicas) para o **MedR1**, mantendo o design system clínico (`#007AFF`, `#F8FAFC` / `#0B0F17`, `rounded-xl`, `tabular-nums`) e 100% dos cálculos e testes existentes.

**Architecture:** Evoluímos a camada pura em `src/lib` com formatação longa da semana (`weekRangeFullLabel`, `dayDateCompact`) e um catálogo derivado diretamente do banco de questões real (`src/lib/medicalSpecialties.ts`). Na camada de UI (`src/components/analytics`), refinamos `WeeklyStudyScheduleCard.tsx` com a faixa de foco, barra larga de navegação semanal e grade com scroll interno, criamos `SpecialtyExplorerCard.tsx` e integramos tudo em `HomeUnifiedView.tsx` mantendo o modal `"Configurar Rotina"` e as calibrações psicométricas recolhidos por padrão.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Lucide React (`strokeWidth={1.5}`), Vitest.

**Spec:** Inspeção visual direta de `https://areaaluno.medcel.com.br/home` combinada com as diretrizes do design system do MedR1 (`src/components/analytics/README.md`, `src/components/layout/README.md`).

## Global Constraints

- Preservar o design system clínico do MedR1: destaque primário `#007AFF` (sem magenta/rosa), superfícies `#F8FAFC` (claro) / `#0B0F17` (escuro), cartões `rounded-xl` com borda `1px`, `tabular-nums` em todos os números e datas, ícones `lucide-react` com `strokeWidth={1.5}`.
- Preservar 100% da matemática de `weeklySchedule.ts` (`2,2 min/q` vs `3,0 min/q`, desconto de `30s` por flashcard, fuso local) e todos os 38 testes Vitest existentes.
- Manter o modal `"Configurar Rotina"` e o modal de calibração psicométrica recolhidos por padrão.
- Não alterar fluxos de `QuestionCard`, `SimuladoBar`, `BatchFinishModal` ou `FlashcardsView`.
- Verificação final obrigatória: `npm test`, `npm run lint` e `npm run build` com exit code 0.

## Review Focus

- **Semana que cruza virada de mês ou ano** (ex.: `29 de Novembro - 5 de Dezembro de 2026` ou `27 de Dezembro de 2026 - 2 de Janeiro de 2027`): `weekRangeFullLabel` deve formatar meses e anos corretamente em português sem truncar nem gerar datas inválidas.
- **Semana fora da atual (`weekOffset !== 0`)**: o seletor largo de semana deve oferecer retorno rápido para `"Hoje"` sem quebrar o alinhamento central da faixa de datas.
- **Dia de descanso (`isActive === false`) dentro da grade com scroll interno**: deve exibir estado vazio limpo e alinhado verticalmente sem colapsar a largura da coluna.
- **Filtro de cadeira médica sem questões carregadas ou com banco vazio**: `buildSpecialtyExplorerItems` deve retornar lista vazia de forma segura e `SpecialtyExplorerCard` deve omitir ou renderizar fallback discreto sem lançar exceção.
- **Clique em especialidade no explorador**: deve acionar `onPracticeTopic` com o `tema` exato e `grandeAreaId` correspondente para abrir questões reais no Banco de Questões.

---

### Task 1: Formatação Longa da Semana e Catálogo Puro de Cadeiras Médicas

**Files:**
- Modify: `src/lib/weeklySchedule.ts:40-66` e função de montagem de `weekLabel` / dias em `buildWeeklySchedule`
- Create: `src/lib/medicalSpecialties.ts`
- Test: `src/lib/weeklySchedule.test.ts`
- Create Test: `src/lib/medicalSpecialties.test.ts`

**Interfaces:**
- Consumes: `MedicalQuestion`, `GrandeAreaId` de `src/types/medical.ts`; `GRANDES_AREAS` de `src/data/taxonomy.ts`.
- Produces:
  - Em `src/lib/weeklySchedule.ts`: novos campos `dayDateCompact: string` (formato `DD/MM`, ex.: `"23/11"`) em `WeeklyDayPlan` e `weekRangeFullLabel: string` (ex.: `"22 de Novembro - 28 de Novembro de 2026"`) em `WeeklyScheduleResult`.
  - Em `src/lib/medicalSpecialties.ts`:
    - `export type SpecialtyIconKey = 'heart' | 'brain' | 'lungs' | 'stethoscope' | 'scalpel' | 'baby' | 'shield' | 'activity' | 'pill' | 'microscope'`
    - `export interface SpecialtyExplorerItem { id: string; label: string; grandeAreaId: GrandeAreaId; questionCount: number; iconKey: SpecialtyIconKey }`
    - `export function buildSpecialtyExplorerItems(questions: MedicalQuestion[], areaFilter?: GrandeAreaId | 'todos'): SpecialtyExplorerItem[]`

- [ ] **Step 1: Write failing tests for `weekRangeFullLabel` / `dayDateCompact` and `buildSpecialtyExplorerItems`**

Adicionar em `src/lib/weeklySchedule.test.ts`:
```ts
it('formats weekRangeFullLabel in Portuguese including month and year boundaries and dayDateCompact as DD/MM', () => {
  const result = buildWeeklySchedule({
    config: DEFAULT_WEEKLY_SCHEDULE_CONFIG,
    flashcards: [],
    referenceDate: new Date(2026, 10, 23, 12, 0, 0), // Seg, 23/11/2026
  });
  expect(result.weekRangeFullLabel).toBe('22 de Novembro - 28 de Novembro de 2026');
  expect(result.days[1].dayDateCompact).toBe('23/11');

  const crossYear = buildWeeklySchedule({
    config: DEFAULT_WEEKLY_SCHEDULE_CONFIG,
    flashcards: [],
    referenceDate: new Date(2026, 11, 30, 12, 0, 0), // Qua, 30/12/2026
  });
  expect(crossYear.weekRangeFullLabel).toBe('27 de Dezembro de 2026 - 2 de Janeiro de 2027');
});
```

Criar `src/lib/medicalSpecialties.test.ts`:
```ts
import { describe, expect, it } from 'vitest';
import { buildSpecialtyExplorerItems } from './medicalSpecialties';
import type { MedicalQuestion } from '../types/medical';

const mockQuestion = (id: string, grandeAreaId: MedicalQuestion['grandeAreaId'], tema: string): MedicalQuestion =>
  ({ id, grandeAreaId, tema } as MedicalQuestion);

describe('buildSpecialtyExplorerItems', () => {
  it('groups real questions by tema, sorts by count desc, and filters by grandeAreaId', () => {
    const questions = [
      mockQuestion('1', 'clinica_medica', 'Cardiologia'),
      mockQuestion('2', 'clinica_medica', 'Cardiologia'),
      mockQuestion('3', 'cirurgia_geral', 'Trauma'),
      mockQuestion('4', 'pediatria', 'Neonatologia'),
    ];
    const all = buildSpecialtyExplorerItems(questions, 'todos');
    expect(all.map((i) => [i.label, i.questionCount])).toEqual([
      ['Cardiologia', 2],
      ['Neonatologia', 1],
      ['Trauma', 1],
    ]);
    const onlyClinica = buildSpecialtyExplorerItems(questions, 'clinica_medica');
    expect(onlyClinica).toHaveLength(1);
    expect(onlyClinica[0].label).toBe('Cardiologia');
  });

  it('returns an empty list safely when no questions match', () => {
    expect(buildSpecialtyExplorerItems([], 'todos')).toEqual([]);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run src/lib/weeklySchedule.test.ts src/lib/medicalSpecialties.test.ts`
Expected: FAIL (missing `weekRangeFullLabel` / `dayDateCompact` and missing module `./medicalSpecialties`).

- [ ] **Step 3: Implement `weekRangeFullLabel` and `dayDateCompact` in `src/lib/weeklySchedule.ts`**

Adicionar array constante `MONTH_FULL_NAMES` (`Janeiro` a `Dezembro`), popular `dayDateCompact` (`${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}`) em cada `WeeklyDayPlan`, e gerar `weekRangeFullLabel` incluindo o ano no primeiro termo apenas quando o domingo e o sábado da semana pertencem a anos diferentes.

- [ ] **Step 4: Implement `buildSpecialtyExplorerItems` in `src/lib/medicalSpecialties.ts`**

Agrupar `questions` por `(grandeAreaId, tema.trim())` ignorando temas vazios, atribuir `iconKey` determinístico por palavras-chave médicas (ex.: cardio → `'heart'`, neuro → `'brain'`, pneumo → `'lungs'`, cirurgia/trauma → `'scalpel'`, pedia/neo → `'baby'`, prevent/sus/epidemio → `'shield'`, infecto/hemato → `'microscope'`, fallback `'stethoscope'`), ordenar por `questionCount` decrescente e `label` alfabético (`localeCompare('pt-BR')`).

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run src/lib/weeklySchedule.test.ts src/lib/medicalSpecialties.test.ts`
Expected: PASS.

---

### Task 2: Faixa de Rota, Seletor Largo de Semana e Grade de 7 Colunas com Scroll Interno

**Files:**
- Modify: `src/components/analytics/WeeklyStudyScheduleCard.tsx:167-573`

**Interfaces:**
- Consumes: `schedule.weekRangeFullLabel`, `day.dayDateCompact`, `day.relativeLabel`, `schedule.targetExam` de `src/lib/weeklySchedule.ts`.
- Produces: Mesmo contrato de props `WeeklyStudyScheduleCardProps` (100% retrocompatível com `HomeUnifiedView.tsx`).

- [ ] **Step 1: Adicionar Faixa de Rota de Aprovação no topo do card**

No topo interno do `<section>` em `WeeklyStudyScheduleCard.tsx`, renderizar uma faixa horizontal enxuta em estética clínica `#007AFF` (`bg-[#007AFF]/10 dark:bg-[#007AFF]/15 border-b border-[#007AFF]/15`) exibindo:
- Ícone `Target` (`size={14} strokeWidth={1.5}`) + `ROTA DE APROVAÇÃO` + separador + `Focando em:` + pill com `schedule.targetExam` (`UEPA`, `ENARE`, `SUS-SP`, `USP-SP`) e resumo semanal compacto (`${schedule.totalWeeklyHours}h · ${schedule.totalWeeklyQuestions}q · ${schedule.totalWeeklyFlashcards} cards`).
- Botão discreto à direita `"Editar rota"` que abre o modal `"Configurar Rotina"` (`setConfigOpen(true)`).

- [ ] **Step 2: Atualizar cabeçalho e barra larga de navegação semanal**

- Cabeçalho: esquerda com título `"Seu foco de estudos"` + subtítulo curto com o ritmo ativo (`2,2 min/q` ou `3,0 min/q`); direita com botão secundário `"Configurar Rotina"` e CTA primário `#007AFF` (`Iniciar bloco · <gargalo>` ou `Ir para Questões`).
- Barra larga de semana (`rounded-xl bg-slate-100/90 dark:bg-[#1B2333] px-2.5 py-2`): botão circular `<` (`aria-label="Semana anterior"`), intervalo centralizado `schedule.weekRangeFullLabel` em `font-medium tabular-nums` (com pill clicável `"Voltar para Hoje"` apenas quando `weekOffset !== 0`), e botão circular `>` (`aria-label="Próxima semana"`).

- [ ] **Step 3: Aplicar borda destacada em `Hoje`, cabeçalho relativo (`Seg, 23/11`) e scroll interno na grade**

- Envolver o grid `lg:grid-cols-7` em um container com altura controlada (`max-h-[340px] overflow-y-auto pr-1`) para evitar rolagem excessiva na Home.
- No cabeçalho de cada coluna: rótulo relativo (`Ontem`, `Hoje`, `Amanhã`, `Em 2 dias`...) acima de `{day.shortLabel}, {day.dayDateCompact}` em `font-semibold tabular-nums`.
- Na coluna onde `day.isToday === true`: aplicar borda de destaque contornando a coluna inteira (`border-[#007AFF]/70 ring-1 ring-[#007AFF]/20 dark:border-sky-400/70 dark:ring-sky-400/20`).
- Em dias inativos (`!day.isActive`): exibir estado vazio centralizado limpo (`"Dia de descanso"` + `"Nenhuma atividade programada"`).
- Manter o card de **Flashcards** fixo no topo de cada dia ativo e os 1–3 cartões clicáveis de assunto logo abaixo com `tabular-nums` e pílula de status (`Não iniciado`, `Em progresso`, `Finalizado`).

- [ ] **Step 4: Verificar compilação de tipos**

Run: `npm run lint`
Expected: Exit code 0 (zero erros TypeScript).

---

### Task 3: Explorador Horizontal de Cadeiras Médicas (`SpecialtyExplorerCard`)

**Files:**
- Create: `src/components/analytics/SpecialtyExplorerCard.tsx`

**Interfaces:**
- Consumes: `buildSpecialtyExplorerItems`, `SpecialtyIconKey` de `src/lib/medicalSpecialties.ts`; `GRANDES_AREAS` de `src/data/taxonomy.ts`; `MedicalQuestion`, `GrandeAreaId` de `src/types/medical.ts`.
- Produces:
  ```ts
  export interface SpecialtyExplorerCardProps {
    questions: MedicalQuestion[];
    onPracticeTopic: (payload: {
      topicLabel: string;
      matchedTema?: string;
      grandeAreaId?: GrandeAreaId;
    }) => void;
  }
  export function SpecialtyExplorerCard(props: SpecialtyExplorerCardProps): React.ReactElement | null
  ```

- [ ] **Step 1: Implementar `SpecialtyExplorerCard.tsx`**

- Estado local `activeArea: GrandeAreaId | 'todos'` (padrão `'todos'`) e `ref` no container horizontal para scroll suave via botões `<` e `>` (`scrollBy({ left: ±280, behavior: 'smooth' })`).
- Cabeçalho: `"Navegue pelas Cadeiras Médicas"` + subtítulo `"Acesse questões diretas por especialidade ou filtre por grande área"`.
- Linha de pílulas de filtro: `"Todos"` + as 5 `GRANDES_AREAS` (pílula ativa em `bg-[#007AFF] text-white`, inativas em `bg-slate-100 text-slate-600 dark:bg-[#0B0F17] dark:text-slate-300`).
- Carrossel horizontal (`flex gap-3 overflow-x-auto pb-1`) exibindo cada `SpecialtyExplorerItem` como um botão compacto com círculo de ícone (`h-12 w-12 rounded-full`, Lucide `size={18} strokeWidth={1.5}`), nome da especialidade (`line-clamp-2 text-center text-xs font-medium`) e contador sutil (`${item.questionCount}q` em `tabular-nums`).
- Se `items.length === 0`, retornar `null` (nunca renderizar caixa quebrada).

- [ ] **Step 2: Verificar compilação de tipos**

Run: `npm run lint`
Expected: Exit code 0.

---

### Task 4: Integração na `HomeUnifiedView.tsx` e Verificação Completa

**Files:**
- Modify: `src/components/analytics/HomeUnifiedView.tsx:184-390`

**Interfaces:**
- Consumes: `SpecialtyExplorerCard` de `./SpecialtyExplorerCard`.
- Produces: Home unificada com 3 camadas equilibradas: (1) `WeeklyStudyScheduleCard` no topo, (2) linha de 2 colunas (`Resumo de Aprovação` + `As 5 Grandes Áreas`), (3) `SpecialtyExplorerCard` logo abaixo.

- [ ] **Step 1: Integrar `SpecialtyExplorerCard` em `HomeUnifiedView.tsx`**

Importar e renderizar `<SpecialtyExplorerCard questions={questions} onPracticeTopic={onPracticeTopic} />` logo abaixo da `<section className="grid grid-cols-1 lg:grid-cols-12 gap-4">` de resumo executivo, preservando o modal on-demand de calibração psicométrica recolhido por padrão.

- [ ] **Step 2: Rodar suíte completa de verificação**

Run:
```bash
npm test && npm run lint && npm run build
```
Expected:
- `npm test`: todos os testes Vitest passando (38 existentes + novos testes de `weeklySchedule.test.ts` e `medicalSpecialties.test.ts`).
- `npm run lint`: 0 erros TypeScript.
- `npm run build`: build Vite (`dist/`) + servidor (`server.mjs`) concluídos com exit code 0.
