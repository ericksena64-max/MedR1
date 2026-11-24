# Auditoria Técnica Multilentes — MedR1

* **Data:** 2026-11-23
* **Lentes EGM:** `egm-codebase-details`, `egm-design`, `egm-zoom-out`, `egm-implementation-readiness`
* **Verificação TypeScript (`npm run lint` / `tsc --noEmit`):** 0 erros (com `strict` atualmente desativado em `tsconfig.json`)
* **Resumo por severidade:** 8 🔴 Críticos · 8 🟡 Importantes · 4 🟢 Melhorias

---

## 🔴 Crítico / Blocker (Bugs, Segurança, Quebras e Perda de Dados)

### 1. Endpoints de IA expostos sem proteção, limite de payload global de 28 MB e modelo hardcoded
* **Onde:** `server.ts:11`, `server.ts:450`, `server.ts:461`, `server.ts:627`, `server.ts:736`
* **Problema:**
  1. `MODEL_ID` está fixo como `'gemini-4-hydrogen'` (`server.ts:11`) em vez de vir de variável de ambiente; qualquer ambiente sem esse alias quebra todas as rotas de IA.
  2. Não há autenticação nem rate limiting nas rotas `/api/import/extract-exam`, `/api/import/enrich-batch` e `/api/questions/comment`. Qualquer cliente pode disparar chamadas em loop e esgotar a cota/faturamento da `GEMINI_API_KEY`.
  3. `app.use(express.json({ limit: '28mb' }))` (`server.ts:450`) está aplicado globalmente em todas as rotas (inclusive `/api/health` e `/api/analytics/*`), facilitando exaustão de memória (DoS).
* **Correção:** Ler o modelo via `process.env.GEMINI_MODEL || 'gemini-2.5-flash'`; reduzir o `express.json` global para `'1mb'` e aplicar `'28mb'` apenas em `/api/import/extract-exam`; adicionar rate limiting por IP (`express-rate-limit`) e autenticação/token nas rotas de IA.

### 2. Prompt injection direto, `JSON.parse` sem guarda e vazamento de erro interno
* **Onde:** `server.ts:442-445`, `server.ts:526-575`, `server.ts:597`, `server.ts:675-686`, `server.ts:706`, `server.ts:825-845`, `server.ts:863`
* **Problema:**
  1. Campos do usuário (`instituicao`, `banca`, `examText`, `answerKeyText`, `enunciado`) são concatenados direto no prompt de instruções sem `systemInstruction` separada. Um texto ou PDF malicioso pode sobrescrever regras de extração/gabarito.
  2. `JSON.parse(rawText)` (`server.ts:597, 706, 863`) não trata JSON truncado por limite de tokens e cai no `catch` genérico.
  3. `classifyErrorResponse` (`server.ts:444`) devolve `msg.slice(0, 220)` direto ao cliente em erros 500, expondo mensagens internas do SDK/rede.
* **Correção:** Mover as regras fixas para `config.systemInstruction` e isolar o conteúdo do usuário; encapsular `JSON.parse` para retornar HTTP 502 com mensagem clara quando o JSON vier truncado; logar o erro completo no servidor (`console.error`) e devolver apenas mensagem genérica ao cliente em falhas 500.

### 3. Script de produção `npm start` quebrado
* **Onde:** `package.json:8-11`
* **Problema:** `"start": "node server.ts"` tenta executar TypeScript diretamente com Node puro, enquanto `"build"` roda apenas `vite build` (não compila `server.ts`, apesar de `"clean"` referenciar `server.js`).
* **Correção:** Alterar `"start"` para `"NODE_ENV=production tsx server.ts"` ou adicionar build do servidor com `esbuild` (`server.ts` -> `dist/server.mjs`) no script `build` e rodar `node dist/server.mjs`.

### 4. Risco de crash na inicialização e perda silenciosa de dados no `localStorage`
* **Onde:** `src/hooks/useMedR1Store.ts:195-203`, `src/hooks/useMedR1Store.ts:328-334`, `src/hooks/useMedR1Store.ts:430-450`, `src/hooks/useMedR1Store.ts:660-778`
* **Problema:**
  1. `safeReadStorage` faz apenas `JSON.parse(raw) as T` sem validar estrutura. Se `medr1_flashcards_v1` estiver corrompido como `null` ou `{}` no navegador, `raw.map(migrateCardToFsrs)` (`useMedR1Store.ts:333`) quebra o app inteiro na abertura.
  2. São 14 `useEffect` gravando no `localStorage` com `catch {}` silencioso. Como `answers`, `flashcards` e `fsrsReviewLogs` (até 5.000 itens na linha 751) crescem continuamente, estourar a cota de ~5 MB faz o aluno perder progresso sem nenhum alerta.
* **Correção:** Validar tipo/array em `safeReadStorage` (ex.: `Array.isArray`); migrar `answers` e `fsrsReviewLogs` para IndexedDB (reaproveitando a estrutura já existente em `src/lib/questionBankStore.ts`); exibir alerta ao usuário em caso de `QuotaExceededError`.

### 5. Retorno síncrono incorreto em `createFlashcardFromQuestion` e `generateFlashcardsFromErrors`
* **Onde:** `src/hooks/useMedR1Store.ts:807-820`, `src/hooks/useMedR1Store.ts:889-903`, `src/components/notebook/ErrorNotebookView.tsx:51-57`
* **Problema:** As duas funções alteram uma variável local (`created` / `addedCount`) dentro do callback de `setFlashcards((prev) => ...)` e retornam essa variável imediatamente fora dele. No React 19 (batching automático), o updater pode rodar depois do `return`, devolvendo `0`/`false` e impedindo a exibição do aviso "X flashcards criados" em `ErrorNotebookView.tsx:53`.
* **Correção:** Calcular os novos flashcards antes de chamar `setFlashcards` (lendo do estado atual ou de um `ref` sincronizado) e retornar `additions.length` de forma síncrona e previsível.

### 6. Tempo por questão hardcoded + timer do Simulado instável e sujeito a submissão duplicada
* **Onde:** `src/App.tsx:103-178`, `src/App.tsx:632`, `src/components/analytics/GapRadarCard.tsx:198`
* **Problema:**
  1. `timeSpentSec` está fixo em `52` no Modo Estudo (`App.tsx:632`) e `95` no Simulado (`App.tsx:112`). Isso distorce diretamente os percentis P50/P75 exibidos no Radar de Lacunas.
  2. O `useEffect` do cronômetro (`App.tsx:160-178`) tem `simuladoSecondsLeft` nas dependências, destruindo e recriando `setInterval` a cada 1 segundo.
  3. `finishSimulado` (`App.tsx:103`) não checa `if (simuladoFinished) return;`; um clique duplo ou corrida entre clique e fim do tempo grava o simulado duas vezes no histórico.
* **Correção:** Medir o tempo real com `useRef(Date.now())` resetado ao mudar de questão; remover `simuladoSecondsLeft` das dependências do `setInterval` (usando um efeito separado para finalizar quando zerar); adicionar guarda `if (simuladoFinished) return;` no início de `finishSimulado`.

### 7. Filtro "Favoritadas" exibe questões erradas não favoritadas
* **Onde:** `src/hooks/useMedR1Store.ts:1324`, `src/App.tsx:304`, `src/components/questions/FilterPanel.tsx:42`
* **Problema:** A condição `filters.status === 'favoritadas' && !isBookmarked && !(ans && !ans.isCorrect)` mistura questões erradas dentro do filtro "Favoritadas" porque o mesmo status foi reutilizado pelo botão "Revisar lista" do Caderno de Erros.
* **Correção:** Criar um status separado `'caderno_erros'` (erradas OU favoritadas) e restringir `'favoritadas'` apenas a `isBookmarked`.

### 8. Catálogo oficial UEPA 2020–2026 (700q) é um stub vazio
* **Onde:** `src/lib/questionBankStore.ts:39-41`, `src/hooks/useMedR1Store.ts:500-516`
* **Problema:** `loadOfficialCatalogQuestions()` apenas devolve `officialCatalogCache` (sempre `[]`), nunca carregando nenhum dado externo/estático, contradizendo os comentários e o fluxo de merge.
* **Correção:** Conectar o carregamento real do JSON/asset do catálogo ou remover o estado/cache morto `officialCatalogQuestions`.

---

## 🟡 Importante / Major (Arquitetura, Performance, UX e Lógica)

### 9. Re-renderizações em cascata na raiz (`App.tsx`) a cada 15 segundos
* **Onde:** `src/hooks/useMedR1Store.ts:781-805`, `src/App.tsx:33`, `src/App.tsx:84-87`
* **Problema:** O `setInterval` de 15s que simula o Ranking Ao Vivo vive dentro do hook raiz `useMedR1Store()`, forçando re-render de toda a aplicação a cada 15s mesmo fora da aba de Ranking. Além disso, `App.tsx:86` usa `[store, filters]` como dependência do `useMemo` de `filteredQuestions`, refiltrando todo o banco a cada tick porque o objeto `store` muda de referência.
* **Correção:** Isolar o estado/intervalo do Ranking Ao Vivo em um hook/contexto próprio (ou pausar quando a aba não está visível) e trocar a dependência em `App.tsx:86` para `[store.filterQuestions, filters]`.

### 10. Arquivos monolíticos dificultam manutenção e evolução
* **Onde:** `src/hooks/useMedR1Store.ts` (1.585 linhas), `src/components/flashcards/FlashcardsView.tsx` (1.647 linhas), `src/components/importer/QuestionImporterView.tsx` (1.542 linhas), `server.ts` (1.449 linhas), `src/components/questions/QuestionCard.tsx` (1.339 linhas), `src/components/analytics/StratifiedApprovalCard.tsx` (1.306 linhas), `src/lib/examWeights.ts` (1.222 linhas), `src/components/analytics/CutoffProjectionCard.tsx` (1.160 linhas).
* **Correção:** Quebrar `server.ts` em `routes/` e `services/gemini.ts`; fatiar `useMedR1Store` em hooks por domínio (`useTheme`, `useQuestionBank`, `useFlashcards`, `useSimuladoHistory`); extrair subcomponentes dos maiores painéis.

### 11. Conflito de fuso horário (UTC vs Local) zera "Revisados Hoje" às 21h no Brasil
* **Onde:** `src/hooks/useMedR1Store.ts:164-169` vs `src/hooks/useMedR1Store.ts:382`, `src/hooks/useMedR1Store.ts:1081`
* **Problema:** `dailyGoal` usa data local (`getLocalDateKey`), mas `reviewsTodayStats` usa `new Date().toISOString().slice(0, 10)` (UTC). Em UTC-3, após as 21h o dia vira antecipadamente nos Flashcards.
* **Correção:** Usar `getLocalDateKey()` em `reviewsTodayStats` e `reviewFlashcard`.

### 12. Duplicação de lógica matemática/analítica e chamadas HTTP redundantes
* **Onde:**
  * `normalCDF` duplicada em 3 lugares: `src/lib/residenciaEstimator.ts:58-70`, `src/lib/psychometricApproval.ts:84-103` e `server.ts:1179-1191`.
  * `GapRadarCard.tsx:65-97, 221-286` calcula o radar inteiro no cliente e depois envia os mesmos números para `POST /api/analytics/gap-radar` (`server.ts:965-1099`), que refaz a mesma conta em memória sem banco de dados (`GAP_RADAR_MV_SQL` e `WEEKLY_APPROVAL_SERIES_SQL` são strings não executadas).
  * `resolveStudentTopicMetrics` e mapas de abreviação duplicados entre `src/components/analytics/ParetoChart.tsx:81-184` e `src/components/analytics/KnowledgeGapHeatmap.tsx:160-272`.
* **Correção:** Centralizar `normalCDF` e o mapeamento de métricas de tópicos em `src/lib/`; remover chamadas HTTP redundantes enquanto não houver banco Postgres conectado.

### 13. Dois schemas SQL conflitantes no repositório
* **Onde:** `db/schema.sql` (757 linhas) vs `database/schema.sql` (299 linhas)
* **Problema:** Ambos definem tabelas incompatíveis para o mesmo domínio (`students`/`question_attempts`/`review_states` vs `user_profiles`/`user_answers`/`live_study_presence`), gerando ambiguidade sobre qual é a fonte de verdade.
* **Correção:** Manter apenas `db/schema.sql` (alinhado ao FSRS-6 e às queries referenciadas em `server.ts`) e remover `database/schema.sql`.

### 14. Bugs de acessibilidade, teclado e edição numérica na UI
* **Onde:**
  * `src/components/questions/QuestionCard.tsx:247-250, 755-763`: Pressionar `Enter` com foco numa alternativa dispara tanto `onKeyDown` do radio (seleciona) quanto o listener global em `window` (submete a resposta), podendo confirmar a resposta acidentalmente. Além disso, o `radiogroup` não trata setas `ArrowUp`/`ArrowDown`.
  * `src/components/questions/ClinicalImageViewer.tsx:77-126`: Com o lightbox de imagem aberto, as teclas `A–E` e `Enter` não são bloqueadas e vazam para o `QuestionCard` por baixo.
  * `src/components/layout/Sidebar.tsx:577-588`: Drawer mobile não fecha com `Escape`.
  * `src/components/analytics/StratifiedApprovalCard.tsx:588-595, 611-618, 728-735`: `onChange` ignora valores vazios (`NaN`), impedindo o usuário de apagar o último dígito para digitar um número novo.
* **Correção:** Usar `e.stopPropagation()` no `onKeyDown` das alternativas e bloquear atalhos do `QuestionCard` quando o lightbox estiver aberto; adicionar handler de `Escape` no drawer mobile; usar estado de texto temporário nos inputs numéricos do `StratifiedApprovalCard`.

### 15. `strict: true` desativado no TypeScript e dependências ociosas
* **Onde:** `tsconfig.json:1-28`, `package.json:43, 45`, `src/lib/srs.ts:361-364`, `src/hooks/useMedR1Store.ts:1417`
* **Problema:** Sem `"strict": true`, o compilador não pega `null`/`undefined` implícitos, escondendo riscos em asserções `!` (`byGrade.get(...)!`, `ranked.find(...)!`). Além disso, `pdfjs-dist` e `autoprefixer` constam em `devDependencies` sem uso no projeto (Tailwind v4 via `@tailwindcss/vite` dispensa `autoprefixer`).
* **Correção:** Ativar `"strict": true` no `tsconfig.json`, remover `pdfjs-dist` e `autoprefixer`, e substituir non-null assertions `!` por checagens explícitas.

### 16. Fallback silencioso mistura escalas diferentes na projeção de nota de corte
* **Onde:** `src/lib/cutoffProjection.ts:85-86`
* **Problema:** `const pool = matchingScale.length > 0 ? matchingScale : simulados;` faz com que, ao trocar a meta para escala TRI (`tri_outra`, até 1000 pts) sem simulados TRI cadastrados, o cálculo use simulados em escala 0–100% contra um corte de 700+ pts, gerando diagnósticos distorcidos.
* **Correção:** Usar apenas `matchingScale` e exibir estado vazio instruindo a cadastrar um simulado na escala escolhida.

---

## 🟢 Melhoria / Nit (Limpeza, YAGNI e Manutenibilidade)

### 17. Código morto e props nunca utilizadas
* **Onde:**
  * `src/components/questions/QuestionCard.tsx:69-73, 321-339, 351-359, 383-392, 420-452, 955-1044`: Props `sessionQuestions`, `onSelectQuestionIndex`, `filtersOpen`, `onToggleFilters` e `onFinishSession` nunca são passadas por `App.tsx:616-702` (~150 linhas de UI inatingível, incluindo o popover "Mapa").
  * `src/components/questions/FilterPanel.tsx:426-435`: Variante `top` nunca usada.
  * `src/hooks/useMedR1Store.ts:1519-1521`: `resetProgress` nunca conectado à UI.
  * `src/components/analytics/ParetoChart.tsx:41`: Prop `areaRows` declarada e ignorada.
* **Correção:** Remover props/blocos mortos (ou conectar o popover "Mapa" no redesign do fluxo de questões).

### 18. Pequenos gargalos de renderização e `setTimeout` sem cleanup
* **Onde:** `src/components/ui/ClinicalMarkdown.tsx:36-184`, `src/components/notebook/ErrorNotebookView.tsx:55`, `src/components/ranking/LiveRankingPage.tsx:61`, `src/components/flashcards/ExamWeightsModal.tsx:199`, `src/components/importer/QuestionImporterView.tsx:129, 339`
* **Problema:** `ClinicalMarkdown` recria o objeto `components` a cada render; múltiplos `window.setTimeout` não são limpos no unmount; cancelar importação em lote (`cancelBatchRef`) espera o `fetch` atual terminar em vez de abortar com `AbortController`.
* **Correção:** Memoizar/extrair `components` em `ClinicalMarkdown`; limpar timeouts no unmount; passar `AbortController.signal` nos `fetch` do lote.

### 19. Ambiguidade visual de intervalos FSRS e `key` potencialmente duplicada em listas
* **Onde:** `src/lib/srs.ts:248, 252, 262`, `src/components/questions/QuestionCard.tsx:698, 1329`
* **Problema:** `formatFsrsInterval` usa `'m'` tanto para minutos (`10m`) quanto para meses (`2m`). Em `QuestionCard`, `key={row.exame}` e `key={ref}` podem colidir em exames repetidos ou referências duplicadas retornadas pela IA.
* **Correção:** Usar `'min'` para minutos e `'m'` (ou `'mes'`) para meses; usar chaves compostas com índice (`${row.exame}-${idx}` e `${ref}-${idx}`).

### 20. Ausência de `ErrorBoundary` e metadado genérico do pacote
* **Onde:** `src/main.tsx:1-6`, `package.json:2`
* **Problema:** Qualquer erro em runtime (ex.: fórmula KaTeX malformada ou gráfico Recharts) deixa a tela totalmente branca sem opção de recuperação; `package.json` ainda tem `"name": "react-example"`.
* **Correção:** Envolver `<App />` em um `ErrorBoundary` com botão de recarregar e atualizar o `name` para `"medr1"`.

---

## Ordem Recomendada de Ataque

1. **Segurança e produção:** Corrigir `server.ts` (rate limit, limite de payload por rota, `MODEL_ID` via env, `systemInstruction`, tratamento de erro/JSON) e o script `start` no `package.json`.
2. **Confiabilidade de dados e bugs reais:** Validar estrutura do `localStorage`, corrigir o retorno síncrono de criação de flashcards, medir tempo real por questão e estabilizar o timer do Simulado em `App.tsx`, corrigir fuso UTC nos flashcards e separar o filtro "Favoritadas".
3. **Performance, UI e limpeza:** Isolar o `setInterval` do Ranking para eliminar re-renders globais a cada 15s, corrigir vazamento de teclado no `ClinicalImageViewer`/`QuestionCard` (alinhado ao redesign do `concepts_brief.md`), remover código morto/schema duplicado e ativar `strict: true` no TypeScript.
