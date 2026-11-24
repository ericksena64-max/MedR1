# Mapa de Calor de Lacunas de Conhecimento (Incidência × Volume)

Visualização interativa em matriz 2D na aba **Desempenho** do MedR1 que cruza a frequência de cobrança dos temas nas bancas (**UEPA**, **ENARE** e **Geral**) com o volume de questões respondidas e o domínio real do aluno, destacando imediatamente lacunas críticas de alta incidência com ações diretas de estudo.

## Decisões Confirmadas pelo Usuário

> [!IMPORTANT]
> As três decisões centrais de produto e UX abaixo foram confirmadas na etapa de alinhamento e orientam toda a arquitetura desta entrega.

- **Formato Visual:** Matriz 2D de **Incidência na Banca (linhas)** × **Volume de Questões Respondidas (colunas)**.
- **Critério de Lacuna Crítica:** Temas de **Alta Incidência** que apresentem **baixo volume de questões respondidas** ou **taxa de acerto individual abaixo de 70%**.
- **Interação ao Clicar na Célula:** Abertura de um **painel de resumo do tema** integrado à visualização, exibindo diagnóstico detalhado e botões diretos para filtrar **Questões** ou **Flashcards** daquele tema.

---

## 1. Visão Geral e Conceito Central

- **O que entrega:** Um **Mapa de Calor 2D** posicionado na aba **Desempenho**, complementando o Gráfico de Pareto (80/20) e a Tabela Analítica. Enquanto o Pareto mostra o ranking acumulado por tema, o Mapa de Calor organiza todos os temas da banca selecionada em uma grade de **3 faixas de incidência** (Alta, Média e Baixa) × **4 faixas de volume respondido** (Sem treino / Baixo / Intermediário / Consolidado), revelando instantaneamente onde o esforço do aluno está desalinhado com o peso real da prova.
- **Público-alvo:** Candidatos à residência médica brasileira que precisam priorizar o tempo escasso de estudo nos temas que mais caem na banca-alvo e que ainda representam risco de perda de pontos.
- **Valor Principal:** Transforma o diagnóstico de desempenho em plano de ação imediato — em um único olhar, o aluno enxerga os "pontos cegos" (temas de alta incidência com poucas questões feitas ou acerto < 70%) e salta em um clique para resolver questões ou revisar flashcards focados.

---

## 2. Experiência do Usuário e Design Visual

### Fluxo Principal do Usuário

1. **Leitura Imediata (Zero-Latency):** Ao abrir a aba **Desempenho**, o usuário vê o cabeçalho do Mapa de Calor com o seletor rápido de banca (**UEPA**, **ENARE**, **Geral**), filtro opcional por **Grande Área** e um contador resumido de quantas **lacunas críticas** existem na banca ativa.
2. **Exploração da Matriz 2D:**
   - **Eixo Vertical (Linhas — Incidência na Banca):** `Alta Incidência (+3% FSRS · Núcleo 80%)`, `Média Incidência` e `Baixa Incidência`.
   - **Eixo Horizontal (Colunas — Volume Respondido pelo Aluno):** `0–14 questões (Baixo/Sem treino)`, `15–29 questões (Em construção)`, `30–49 questões (Intermediário)` e `50+ questões (Alto volume)`.
   - **Células de Calor:** Cada interseção exibe a intensidade térmica de acordo com a gravidade de lacuna (células no quadrante crítico recebem destaque visual mais intenso com sinalização textual/ícone — nunca apenas cor) e lista blocos clicáveis dos temas contidos naquele cruzamento, com nome do tema, volume (`Nq`) e acerto (`XX%`) em algarismos tabulares.
3. **Inspeção de Lacunas ao Clicar (Painel de Resumo do Tema):**
   - Ao clicar em qualquer tema (ou selecionar uma célula), um **painel de resumo lateral/contextual** exibe:
     - Nome do tema, Grande Área e classificação na banca selecionada (Incidência % + faixa Pareto).
     - Diagnóstico claro do status: **Lacuna Crítica** (indicando exatamente se o motivo é *baixo volume*, *acerto < 70%* ou *ambos*), **Em Atenção**, **Dominado** ou **Baixa Prioridade**.
     - Comparativo rápido: **Questões feitas**, **Seu Acerto (%)**, **Mediana da Comunidade (P50)** e **Delta (p.p.)**.
     - Dois botões de ação direta: **Estudar Questões do Tema** e **Revisar Flashcards do Tema** (reaproveitando a navegação inteligente já conectada no aplicativo).

### Identidade Visual e Sistema de Design

- **Direção Estética:** Painel analítico clínico de alta precisão, coerente com o sistema visual atual do MedR1 — superfícies planas de elevação única com bordas hairline (`1px`), espaçamento limpo e zero caixas/pílulas estáticas em metadados.
- **Paleta e Escala Térmica (Light & Dark Mode completos):**
  - **Superfícies:** `#FFFFFF` / `#F8FAFC` no modo claro; `#0F172A` / `#1E293B` no modo escuro, com contraste WCAG AA garantido em todas as células.
  - **Escala Semântica do Mapa de Calor (sempre acompanhada de rótulo explícito):**
    - **Lacuna Crítica (Alta Incidência + baixo volume ou acerto < 70%):** Tons de vermelho clínico (`red-50/red-200/red-700` no claro; `red-950/red-800/red-300` no escuro) com ícone de alerta discreto.
    - **Zona de Atenção (Média Incidência com déficit ou Alta Incidência em transição):** Tons de âmbar (`amber-50/amber-200/amber-800`).
    - **Domínio Consolidado (Alta/Média Incidência com volume adequado e acerto ≥ 70%):** Tons de esmeralda/azul clínico (`emerald-50/emerald-700` ou `sky-50/sky-700`).
    - **Baixa Prioridade / Cauda Longa:** Neutros em `slate` para reduzir ruído cognitivo e direcionar o olhar para a linha superior (Alta Incidência).
- **Tipografia e Rigor Numérico:** Mantém a hierarquia display + corpo do MedR1, aplicando estritamente `font-mono tabular-nums` em todos os volumes (`q`), percentuais de incidência (`%`), acertos e contadores de célula.
- **Micro-interações e Acessibilidade:**
  - Transições suaves (`≤ 150ms`) no hover e seleção de temas; estado selecionado com contorno `ring-2 ring-sky-500` acessível via teclado (`<button>` nativo com `aria-pressed`).
  - Estado vazio limpo quando um filtro de Grande Área não possui temas em determinada faixa, mantendo a matriz estruturalmente íntegra e legível.

---

## 3. Principais Decisões de Produto e Trade-Offs

- **Decisão 1: Classificação Dinâmica de Volume em 4 Faixas Fixas**
  - *Abordagem Escolhida:* Agrupar o volume respondido pelo aluno em 4 faixas clinicamente interpretáveis (`0–14q`, `15–29q`, `30–49q`, `50+q`), considerando "baixo volume" como `< 20 questões` (ou `< 15q` para a primeira coluna + sinalização explícita de volume insuficiente até 20q).
  - *Por quê:* Faixas fixas permitem leitura imediata e estável da esquerda (pouco treino) para a direita (alto volume), sem que um tema mude de coluna de forma confusa quando outro tema sobe.
  - *Alternativas Consideradas:* Percentis relativos ao histórico do próprio aluno — descartado porque um aluno iniciante com poucas questões no total teria temas de 3 questões parecendo "alto volume".

- **Decisão 2: Painel de Resumo Integrado em Split-View (sem Modal Bloqueante)**
  - *Abordagem Escolhida:* Exibir o painel de detalhes do tema clicado ao lado da matriz em telas desktop (`xl`) e logo abaixo em telas menores, pré-selecionando automaticamente a **lacuna crítica mais severa** da banca ativa para evitar área vazia.
  - *Por quê:* Permite comparar rapidamente vários temas em sequência com 1 clique cada, mantendo a matriz inteira visível enquanto o aluno decide se abre Questões ou Flashcards.
  - *Alternativas Consideradas:* Modal pop-up — descartado por interromper a comparação entre células adjacentes da matriz.

- **Decisão 3: Reaproveitamento da Matriz de Incidência e Pareto Existentes**
  - *Abordagem Escolhida:* Consumir a mesma fonte de verdade que alimenta o FSRS Dinâmico e o Gráfico de Pareto (incluindo personalizações salvas pelo usuário na matriz da banca e o desempenho real atualizado a cada questão respondida).
  - *Por quê:* Garante 100% de consistência numérica entre o Mapa de Calor, o Pareto 80/20 e a calibração FSRS dos Flashcards.

---

## 4. Arquitetura Técnica e Estratégia de Dados *(Referência Técnica)*

### Diagrama de Arquitetura e Fluxo de Dados

```text
┌──────────────────────────────────────────────────────────────────────┐
│                      Estado Global do MedR1                          │
│  • Desempenho real por tema (volume, acertos, mediana P50, delta)    │
│  • Banca-alvo ativa (UEPA / ENARE / Geral) + Pesos personalizados    │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│              Motor de Cruzamento do Mapa de Calor                    │
│  • Lê incidência efetiva e perfil Pareto por banca selecionada       │
│  • Vincula cada tema da banca ao volume e acerto reais do aluno      │
│  • Classifica: Linha (Alta/Média/Baixa) × Coluna (Faixa de Volume)   │
│  • Calcula severidade: Lacuna Crítica | Atenção | Dominado | Neutra  │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│            Aba Desempenho → Seção Mapa de Calor 2D                   │
│  ┌────────────────────────────────────┐  ┌────────────────────────┐  │
│  │ Controles: Banca | Grande Área     │  │ Painel Resumo do Tema  │  │
│  │ ────────────────────────────────── │  │ • Diagnóstico da Lacuna│  │
│  │ Matriz 3×4 (Incidência × Volume)   │  │ • Incidência · Volume  │  │
│  │  • Células com intensidade térmica │──▶ • Acerto vs. Mediana   │  │
│  │  • Chips interativos por tema      │  │ • [Filtrar Questões]   │  │
│  │  • Legenda semântica + contadores  │  │ • [Revisar Flashcards] │  │
│  └────────────────────────────────────┘  └───────────┬────────────┘  │
└──────────────────────────────────────────────────────┼───────────────┘
                                                       │
                    ┌──────────────────────────────────┴──────────────┐
                    ▼                                                 ▼
      ┌───────────────────────────┐                     ┌──────────────────────────┐
      │     Banco de Questões     │                     │     Flashcards (FSRS)    │
      │  (Filtrado no tema/área)  │                     │  (Filtrado no tema/área) │
      └───────────────────────────┘                     └──────────────────────────┘
```

### Modelo de Dados e Regras de Classificação

- **Célula da Matriz (`HeatmapCell`):** Representa o par `(faixaIncidencia, faixaVolume)`, contendo a lista ordenada de temas, contagem de lacunas críticas e nível de intensidade térmica da célula.
- **Item de Tema (`HeatmapTopicItem`):** Agrega identificador, rótulo do tema, Grande Área correspondente, incidência na banca (`%` e tier `alta | media | baixa`), volume respondido (`answered`), acerto individual (`studentPct`), mediana da comunidade (`communityMedianPct`), flag booleana `isCriticalGap` e motivos explícitos da lacuna (`baixo_volume`, `acerto_baixo`).
- **Regra de Lacuna Crítica:**
  - `tier === 'alta'` **E** (`answered < 20` **OU** `studentPct === null` **OU** `studentPct < 70`).
  - Temas sem nenhuma questão respondida pelo aluno (`answered === 0`) entram na primeira coluna (`0–14q`) e são sinalizados explicitamente como **Sem questões feitas** dentro da faixa crítica quando possuem alta incidência.

### Mapeamento de Estados e Interações

- **Troca de Banca (`UEPA` / `ENARE` / `Geral`):** Recalcula instantaneamente a matriz 3×4, atualiza o contador de lacunas críticas e seleciona automaticamente o tema mais crítico da nova banca no painel de resumo.
- **Filtro por Grande Área:** Permite focar o Mapa de Calor em todas as áreas ou em uma das 5 Grandes Áreas (Clínica Médica, Cirurgia, GO, Pediatria, Preventiva), mantendo as 4 colunas de volume intactas para preservar a leitura comparativa.
- **Seleção de Tema / Célula:** Clicar em um tema atualiza o estado de seleção (`selectedTopicId`), destaca o botão correspondente na matriz e preenche o painel de resumo à direita com o diagnóstico e os botões ativos de ação.
- **Ações Diretas (`Questões` e `Flashcards`):** Acionam os handlers já existentes de navegação filtrada do aplicativo, levando o aluno diretamente às questões ou flashcards do tema selecionado (com fallback inteligente para a Grande Área caso o recorte exato ainda não possua itens cadastrados).
