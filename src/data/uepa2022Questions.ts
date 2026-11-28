import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa UEPA 2022 — Acesso Direto (100 questões: 96 válidas + 4 anuladas comentadas).
 * Gerado a partir de data/provas/uepa-2022.md / data/provas/uepa-2022.jsonl.
 */
export const UEPA_2022_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-uepa-2022-001",
    "code": "Q-UEPA22-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": [
      "vpp",
      "vpn",
      "especificidade",
      "prevalencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Considere que um teste rápido para COVID-19, está sendo utilizado em um estado onde sua prevalência é 25%. O que se espera dos Valores Preditivos Positivo (VPP), Valores Preditivos Negativo (VPN) e da Especificidade (E) deste teste se, o mesmo for aplicado em outro estado, onde a prevalência da infecção é 50%:",
    "alternativas": [
      {
        "letter": "A",
        "text": "diminuirá, aumentará, aumentará.",
        "explanation": "Incorreta: O aumento da prevalência eleva o VPP, reduz o VPN e mantém a especificidade inalterada.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "diminuirá, aumentará, será mantida.",
        "explanation": "Incorreta: Inverte o efeito da prevalência sobre VPP e VPN (que aumentam e diminuem, respectivamente).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aumentará, aumentará, diminuirá.",
        "explanation": "Incorreta: O VPN diminui (não aumenta) com maior prevalência e a especificidade permanece constante.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "aumentará, diminuirá, será mantida.",
        "explanation": "A alternativa **D** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Medronho**), a **sensibilidade** e a **especificidade** são propriedades intrínsecas do teste diagnóstico e **não variam com a prevalência** da doença na população (logo, a especificidade será mantida). Já os **valores preditivos** dependem diretamente da prevalência: quando a prevalência aumenta (de 25% para 50%), o **VPP aumenta** (maior probabilidade de um resultado positivo ser verdadeiro) e o **VPN diminui** (maior probabilidade de falsos negativos entre os resultados negativos).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "diminuirá, diminuirá, será mantido.",
        "explanation": "Incorreta: O VPP aumenta (não diminui) quando a prevalência sobe de 25% para 50%.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Medronho**), a **sensibilidade** e a **especificidade** são propriedades intrínsecas do teste diagnóstico e **não variam com a prevalência** da doença na população (logo, a especificidade será mantida). Já os **valores preditivos** dependem diretamente da prevalência: quando a prevalência aumenta (de 25% para 50%), o **VPP aumenta** (maior probabilidade de um resultado positivo ser verdadeiro) e o **VPN diminui** (maior probabilidade de falsos negativos entre os resultados negativos).\n- **A) Incorreta:** O aumento da prevalência eleva o VPP, reduz o VPN e mantém a especificidade inalterada.\n- **B) Incorreta:** Inverte o efeito da prevalência sobre VPP e VPN (que aumentam e diminuem, respectivamente).\n- **C) Incorreta:** O VPN diminui (não aumenta) com maior prevalência e a especificidade permanece constante.\n- **E) Incorreta:** O VPP aumenta (não diminui) quando a prevalência sobe de 25% para 50%.",
    "perolaClinica": "A alternativa **D** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Medronho**), a **sensibilidade** e a **especificidade** são propriedades intrínsecas do teste diagnóstico e **não variam com a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Efeito do aumento da prevalência sobre VPP, VPN e especificidade de um teste diagnóstico.",
      "raciocinioChave": "Sensibilidade e especificidade são propriedades intrínsecas do teste diagnóstico e permanecem inalteradas diante de variações da prevalência. Quando a prevalência dobra (de 25% para 50%), a probabilidade pós-teste positivo (VPP) aumenta e a probabilidade pós-teste negativo (VPN) diminui.",
      "armadilhaBanca": "Inverter a relação inversa entre prevalência e VPN ou supor que a especificidade varie com a mudança populacional."
    },
    "mapaDistratores": {
      "A": "O aumento da prevalência eleva o VPP (não diminui), reduz o VPN (não aumenta) e não altera a especificidade.",
      "B": "Inverte corretamente a direção dos valores preditivos, pois maior prevalência resulta em maior VPP e menor VPN.",
      "C": "Erroneamente prevê aumento do VPN e redução da especificidade, ignorando que a especificidade é invariante à prevalência.",
      "E": "Embora mantenha a especificidade constante, afirma erroneamente que o VPP diminuiria com o aumento da prevalência."
    }
  },
  {
    "id": "q-uepa-2022-002",
    "code": "Q-UEPA22-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "História, Princípios e Leis Orgânicas do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-historia-principios-e-leis-organicas-do-sus",
    "tags": [
      "principios-do-sus",
      "equidade",
      "protocolo-de-manchester",
      "triagem-de-risco"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 45 anos, hipertenso e diabético há dez anos, comparece na Unidade de Pronto Atendimento, com quadro de acidente vascular cerebral, sendo classificado como vermelho pelo Protocolo Manchester. O princípio doutrinário do SUS que está sendo observado pelo Protocolo de Manchester é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Universalidade",
        "explanation": "Incorreta: Universalidade garante o acesso à saúde como direito de todos os cidadãos, sem discriminação, mas não define a priorização por gravidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Equidade",
        "explanation": "A alternativa **B** está correta. De acordo com a **Política Nacional de Humanização (PNH — Acolhimento com Classificação de Risco, Ministério da Saúde)** e os princípios doutrinários do SUS, o **Protocolo de Manchester** prioriza o atendimento segundo a **gravidade clínica e vulnerabilidade** (emergência = vermelho), e não por ordem de chegada. Tratar desigualmente os desiguais para oferecer mais a quem mais precisa materializa o princípio doutrinário da **Equidade**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Igualdade",
        "explanation": "Incorreta: Igualdade da assistência (Lei nº 8.080/1990) veda preconceitos ou privilégios, enquanto a priorização por necessidade clínica é expressa pela equidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Integralidade",
        "explanation": "Incorreta: Integralidade refere-se ao cuidado contínuo e articulado em ações de promoção, prevenção, tratamento e reabilitação.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Hierarquização",
        "explanation": "Incorreta: Hierarquização é um princípio organizativo (não doutrinário) relativo aos níveis de complexidade da rede.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com a **Política Nacional de Humanização (PNH — Acolhimento com Classificação de Risco, Ministério da Saúde)** e os princípios doutrinários do SUS, o **Protocolo de Manchester** prioriza o atendimento segundo a **gravidade clínica e vulnerabilidade** (emergência = vermelho), e não por ordem de chegada. Tratar desigualmente os desiguais para oferecer mais a quem mais precisa materializa o princípio doutrinário da **Equidade**.\n- **A) Incorreta:** Universalidade garante o acesso à saúde como direito de todos os cidadãos, sem discriminação, mas não define a priorização por gravidade.\n- **C) Incorreta:** Igualdade da assistência (Lei nº 8.080/1990) veda preconceitos ou privilégios, enquanto a priorização por necessidade clínica é expressa pela equidade.\n- **D) Incorreta:** Integralidade refere-se ao cuidado contínuo e articulado em ações de promoção, prevenção, tratamento e reabilitação.\n- **E) Incorreta:** Hierarquização é um princípio organizativo (não doutrinário) relativo aos níveis de complexidade da rede.",
    "perolaClinica": "A alternativa **B** está correta. De acordo com a **Política Nacional de Humanização (PNH — Acolhimento com Classificação de Risco, Ministério da Saúde)** e os princípios doutrinários do SUS, o **Protocolo de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Relação entre classificação de risco pelo Protocolo de Manchester e o princípio da equidade no SUS.",
      "raciocinioChave": "Ao classificar o paciente com AVC como vermelho (emergência máxima), o Protocolo de Manchester prioriza o atendimento imediato de acordo com a gravidade clínica e não pela ordem de chegada. Tratar desigualmente os desiguais para atender com maior rapidez quem corre maior risco materializa o princípio doutrinário da equidade.",
      "armadilhaBanca": "Confundir igualdade formal ou universalidade de acesso com equidade clínica na triagem por gravidade."
    },
    "mapaDistratores": {
      "A": "Universalidade assegura o direito de acesso de todos ao sistema de saúde, mas não estabelece critério de priorização assistencial por gravidade.",
      "C": "Igualdade garante assistência sem privilégios ou preconceitos, enquanto o atendimento prioritário baseado na gravidade clínica define a equidade.",
      "D": "Integralidade refere-se à articulação contínua de ações preventivas, curativas e reabilitadoras, não à triagem de risco na urgência.",
      "E": "Hierarquização é um princípio organizativo que estrutura a rede por níveis de complexidade tecnológica, não um princípio doutrinário de priorização clínica."
    }
  },
  {
    "id": "q-uepa-2022-003",
    "code": "Q-UEPA22-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "niveis-de-prevencao",
      "prevencao-terciaria",
      "reabilitacao",
      "leavell-and-clark"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 64 anos sofreu queda com fratura em cabeça de fêmur, sendo internada em hospital de referência, submetida a cirurgia com colocação de placa estabilizadora, e instituído analgesia pós-operatória e fisioterapia com estímulo respiratório, o nível de prevenção e a indicação da fisioterapia pós operatória no caso descrito é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Primária",
        "explanation": "Incorreta: Prevenção primária atua no período pré-patogênico para evitar o surgimento da doença ou do agravo (ex.: prevenção de quedas, tratamento de osteoporose antes da fratura).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Secundária",
        "explanation": "Incorreta: Prevenção secundária envolve diagnóstico precoce e tratamento imediato para limitar a progressão do dano.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Terciária",
        "explanation": "A alternativa **C** está correta. No modelo de **História Natural da Doença de Leavell & Clark**, a **prevenção terciária** compreende ações voltadas à **reabilitação**, recuperação funcional e prevenção de complicações ou incapacidades após um agravo já estabelecido e tratado — exatamente o papel da **fisioterapia pós-operatória** (motora e respiratória) após correção cirúrgica de fratura de fêmur.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Quaternária",
        "explanation": "Incorreta: Prevenção quaternária visa identificar indivíduos em risco de hipermedicalização e evitar intervenções desnecessárias ou iatrogenia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Quaternária institucional",
        "explanation": "Incorreta: Não corresponde ao conceito clássico de reabilitação pós-operatória.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. No modelo de **História Natural da Doença de Leavell & Clark**, a **prevenção terciária** compreende ações voltadas à **reabilitação**, recuperação funcional e prevenção de complicações ou incapacidades após um agravo já estabelecido e tratado — exatamente o papel da **fisioterapia pós-operatória** (motora e respiratória) após correção cirúrgica de fratura de fêmur.\n- **A) Incorreta:** Prevenção primária atua no período pré-patogênico para evitar o surgimento da doença ou do agravo (ex.: prevenção de quedas, tratamento de osteoporose antes da fratura).\n- **B) Incorreta:** Prevenção secundária envolve diagnóstico precoce e tratamento imediato para limitar a progressão do dano.\n- **D) Incorreta:** Prevenção quaternária visa identificar indivíduos em risco de hipermedicalização e evitar intervenções desnecessárias ou iatrogenia.\n- **E) Incorreta:** Não corresponde ao conceito clássico de reabilitação pós-operatória.",
    "perolaClinica": "A alternativa **C** está correta. No modelo de **História Natural da Doença de Leavell & Clark**, a **prevenção terciária** compreende ações voltadas à **reabilitação**, recuperação funcional e prevenção de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Níveis de prevenção de Leavell e Clark aplicados à fisioterapia reabilitadora pós-fratura de fêmur.",
      "raciocinioChave": "Após a ocorrência da fratura e sua correção cirúrgica, a instituição de fisioterapia motora e respiratória objetiva recuperar a funcionalidade e prevenir complicações ou incapacidades permanentes. No modelo da História Natural da Doença de Leavell e Clark, ações de reabilitação após o agravo estabelecido caracterizam a prevenção terciária.",
      "armadilhaBanca": "Confundir prevenção terciária (reabilitação pós-cirúrgica) com prevenção secundária (tratamento da fratura) ou quaternária."
    },
    "mapaDistratores": {
      "A": "Prevenção primária ocorre no período pré-patogênico para evitar a fratura (como prevenção de quedas e controle da osteoporose).",
      "B": "Prevenção secundária atua no período patogênico precoce por meio de diagnóstico imediato e tratamento cirúrgico da lesão, não na reabilitação tardia.",
      "D": "Prevenção quaternária visa proteger o paciente contra hipermedicalização e intervenções desnecessárias ou iatrogênicas.",
      "E": "'Quaternária institucional' não constitui categoria reconhecida nos níveis de prevenção da história natural da doença para reabilitação pós-operatória."
    }
  },
  {
    "id": "q-uepa-2022-004",
    "code": "Q-UEPA22-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Vieses, Confundimento e Bioestatística",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-vieses-confundimento-e-bioestatistica",
    "tags": [
      "forest-plot",
      "metanalise",
      "intervalo-de-confianca",
      "significancia-estatistica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Observe a imagem abaixo para responder a Questão 4.\n[Imagem: Gráfico forest plot com Risco Relativo (IC 95%) e %Peso: Estudo 1 = 0,62 (0,39–0,98), peso 10,9%; Estudo 2 = 0,71 (0,57–0,88), peso 49,5%; Estudo 3 = 0,26 (0,06–1,11), peso 2,2%; Estudo 4 = 0,70 (0,52–0,93), peso 24,5%; Estudo 5 = 0,37 (0,05–2,91), peso 0,8%; Estudo 6 = 0,82 (0,55–1,21), peso 12,1%; Combinação (diamante) = 0,70 (0,60–0,81).]\n\nAo participar de um congresso internacional, você assiste um palestrante expor os resultados de sua metanálise sobre uma droga para o tratamento específico. Ao analisar o gráfico forest plot, acima, é correto interpretar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o resultado final da metanálise não foi estatisticamente significativo.",
        "explanation": "Incorreta: A medida combinada (diamante) apresenta RR 0,70 (IC 95%: 0,60–0,81), não cruzando o valor nulo 1,0, sendo estatisticamente significativa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o estudo com maior impacto no resultado final da metanálise foi o 5.",
        "explanation": "Incorreta: O estudo 5 teve o menor peso (0,8%) e o intervalo mais amplo; o de maior impacto foi o Estudo 2 (peso 49,5%).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o estudo 2 foi o mais questionável dos estudos usados.",
        "explanation": "Incorreta: O Estudo 2 é o mais preciso (menor intervalo de confiança e maior peso: 49,5%).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "apenas os estudos 1, 2 e 4 foram significativos estatisticamente.",
        "explanation": "[REVISAR: questão contém imagem (gráfico forest plot) no caderno original] A alternativa **D** está correta. Em um gráfico **forest plot** de medida de razão (**Risco Relativo**), o valor nulo é **1,0**: um estudo é estatisticamente significativo (p < 0,05) quando seu **intervalo de confiança de 95% (IC 95%) não cruza a linha vertical do 1** (**Fletcher & Fletcher / Cochrane Handbook**). Observando os valores: Estudo 1 (0,39–0,98), Estudo 2 (0,57–0,88) e Estudo 4 (0,52–0,93) ficam inteiramente abaixo de 1, sendo estatisticamente significativos; já os Estudos 3 (0,06–1,11), 5 (0,05–2,91) e 6 (0,55–1,21) cruzam o valor 1.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "o estudo 3, 5 e 6 foram estatisticamente significativos.",
        "explanation": "Incorreta: Os Estudos 3, 5 e 6 tiveram intervalos de confiança que cruzam o valor nulo (1,0), portanto não foram estatisticamente significativos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "[REVISAR: questão contém imagem (gráfico forest plot) no caderno original] A alternativa **D** está correta. Em um gráfico **forest plot** de medida de razão (**Risco Relativo**), o valor nulo é **1,0**: um estudo é estatisticamente significativo (p < 0,05) quando seu **intervalo de confiança de 95% (IC 95%) não cruza a linha vertical do 1** (**Fletcher & Fletcher / Cochrane Handbook**). Observando os valores: Estudo 1 (0,39–0,98), Estudo 2 (0,57–0,88) e Estudo 4 (0,52–0,93) ficam inteiramente abaixo de 1, sendo estatisticamente significativos; já os Estudos 3 (0,06–1,11), 5 (0,05–2,91) e 6 (0,55–1,21) cruzam o valor 1.\n- **A) Incorreta:** A medida combinada (diamante) apresenta RR 0,70 (IC 95%: 0,60–0,81), não cruzando o valor nulo 1,0, sendo estatisticamente significativa.\n- **B) Incorreta:** O estudo 5 teve o menor peso (0,8%) e o intervalo mais amplo; o de maior impacto foi o Estudo 2 (peso 49,5%).\n- **C) Incorreta:** O Estudo 2 é o mais preciso (menor intervalo de confiança e maior peso: 49,5%).\n- **E) Incorreta:** Os Estudos 3, 5 e 6 tiveram intervalos de confiança que cruzam o valor nulo (1,0), portanto não foram estatisticamente significativos.",
    "perolaClinica": "[REVISAR: questão contém imagem (gráfico forest plot) no caderno original] A alternativa **D** está correta. Em um gráfico **forest plot** de medida de razão (**Risco Relativo**), o valor nulo é **1,0**: um estudo é…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Interpretação de significância estatística e peso dos estudos em gráfico forest plot de Risco Relativo.",
      "raciocinioChave": "Em medidas de razão (RR), o valor nulo é 1,0, logo um estudo tem significância estatística quando seu IC 95% não cruza 1,0. Apenas os Estudos 1 (0,39–0,98), 2 (0,57–0,88) e 4 (0,52–0,93) preenchem esse critério.",
      "armadilhaBanca": "Confundir o valor nulo de medidas de razão (RR = 1,0) com zero (0) ou achar que o estudo de menor RR pontual tem maior peso na metanálise."
    },
    "mapaDistratores": {
      "A": "A medida sumária combinada (diamante) apresenta RR 0,70 com IC 95% de 0,60 a 0,81, que não cruza o valor nulo 1,0 e portanto é estatisticamente significativa.",
      "B": "O estudo 5 teve o menor impacto (peso de apenas 0,8% e IC muito amplo), ao passo que o estudo de maior peso foi o Estudo 2 (49,5%).",
      "C": "O estudo 2 é justamente o mais preciso e influente da metanálise, exibindo o intervalo de confiança mais estreito e o maior peso estatístico (49,5%).",
      "E": "Os estudos 3 (0,06–1,11), 5 (0,05–2,91) e 6 (0,55–1,21) possuem intervalos de confiança que cruzam o valor nulo 1,0, não atingindo significância estatística."
    }
  },
  {
    "id": "q-uepa-2022-005",
    "code": "Q-UEPA22-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Indicadores de Saúde e Transição Epidemiológica",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-indicadores-de-saude-e-transicao-epidemiologica",
    "tags": [
      "mortalidade-materna",
      "indicadores-de-saude",
      "morte-materna",
      "nascidos-vivos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o Texto abaixo para responder à Questão 5\n\n“... Razão, Taxa ou Coeficiente de mortalidade materna é o indicador utilizado para conhecer o nível de morte materna (...) calculado pela relação do n.º de mortes ´maternas´ ou de ´mulheres durante a gestação ou até 42 dias após o término da gestação´, independentemente da duração ou da localização da gravidez. É causada por qualquer fator relacionado ou agravado pela gravidez ou por medidas tomadas em relação a ela” (Laurenti, 2000).\n\nA equação que representa o indicador no Texto acima é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "“Número de óbitos femininos, por 10 mil nascidos, na população residente em determinado espaço geográfico, no ano considerado” (OPAS, 2002).",
        "explanation": "Incorreta: Usa base de 10 mil (em vez de 100 mil), não especifica causas maternas e omite \"nascidos vivos\".",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "“Número de óbitos de gestantes, por 100 mil nascidos, vivos ou mortos, na população residente em determinado espaço geográfico, no ano considerado” (OPAS, 2002).",
        "explanation": "Incorreta: O denominador utiliza apenas **nascidos vivos** (não inclui natimortos), e o numerador engloba óbitos por causas maternas (incluindo até 42 dias pós-parto), não apenas gestantes.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "“Número de óbitos de gestantes por diversas causas, por 100 mil nascidos, na população residente em determinado espaço geográfico, no ano considerado” (OPAS, 2002).",
        "explanation": "Incorreta: Excluem-se óbitos por causas acidentais ou incidentais (não \"diversas causas\") e o denominador deve ser nascidos vivos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "“Número de óbitos femininos por causas maternas, por 10 mil nascidos vivos, na população residente em determinado espaço geográfico, no ano considerado” (OPAS, 2002).",
        "explanation": "Incorreta: A constante multiplicadora padrão da RMM é **100 mil nascidos vivos**, não 10 mil.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "“Número de óbitos femininos por causas maternas, por 100 mil nascidos vivos, na população residente em determinado espaço geográfico, no ano considerado” (OPAS, 2002).",
        "explanation": "A alternativa **E** está correta. Conforme a **RIPSA / OPAS (Indicadores Básicos para a Saúde no Brasil)** e o **Ministério da Saúde**, a **Razão de Mortalidade Materna (RMM)** é definida exatamente como o **número de óbitos femininos por causas maternas (diretas e indiretas), por 100.000 nascidos vivos**, na população residente em determinado espaço geográfico, no ano considerado.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Conforme a **RIPSA / OPAS (Indicadores Básicos para a Saúde no Brasil)** e o **Ministério da Saúde**, a **Razão de Mortalidade Materna (RMM)** é definida exatamente como o **número de óbitos femininos por causas maternas (diretas e indiretas), por 100.000 nascidos vivos**, na população residente em determinado espaço geográfico, no ano considerado.\n- **A) Incorreta:** Usa base de 10 mil (em vez de 100 mil), não especifica causas maternas e omite \"nascidos vivos\".\n- **B) Incorreta:** O denominador utiliza apenas **nascidos vivos** (não inclui natimortos), e o numerador engloba óbitos por causas maternas (incluindo até 42 dias pós-parto), não apenas gestantes.\n- **C) Incorreta:** Excluem-se óbitos por causas acidentais ou incidentais (não \"diversas causas\") e o denominador deve ser nascidos vivos.\n- **D) Incorreta:** A constante multiplicadora padrão da RMM é **100 mil nascidos vivos**, não 10 mil.",
    "perolaClinica": "A alternativa **E** está correta. Conforme a **RIPSA / OPAS (Indicadores Básicos para a Saúde no Brasil)** e o **Ministério da Saúde**, a **Razão de Mortalidade Materna (RMM)** é definida exatamente como o **número de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Definição e fórmula padrão da Razão de Mortalidade Materna (RMM) segundo a OPAS e o Ministério da Saúde.",
      "raciocinioChave": "A RMM mede o risco obstétrico pela relação entre óbitos femininos por causas maternas (diretas e indiretas, na gestação ou até 42 dias pós-parto) e o total de nascidos vivos. A constante padronizada pela OPAS/RIPSA para expressar esse indicador é por 100 mil nascidos vivos.",
      "armadilhaBanca": "Trocar a constante multiplicadora padrão (100 mil por 10 mil) ou incluir natimortos no denominador e causas externas/acidentais no numerador."
    },
    "mapaDistratores": {
      "A": "Utiliza fator multiplicador de 10 mil em vez de 100 mil, além de não restringir o numerador às causas maternas e omitir a especificação de nascidos vivos.",
      "B": "O denominador da RMM considera exclusivamente nascidos vivos (excluindo natimortos), e o numerador abrange causas maternas até 42 dias após o término da gestação.",
      "C": "Mortes por causas acidentais ou incidentais não integram a mortalidade materna, e o denominador deve especificar apenas nascidos vivos.",
      "D": "Embora traga numerador e denominador corretos, utiliza base de 10 mil nascidos vivos em lugar da constante oficial de 100 mil nascidos vivos."
    }
  },
  {
    "id": "q-uepa-2022-006",
    "code": "Q-UEPA22-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": [
      "estudo-de-coorte",
      "estudo-prospectivo",
      "incidencia",
      "delineamento-de-estudo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o Texto para responder à Questão 6\n\n“...Introdução: Embora os efeitos positivos da atividade física na saúde global sejam bem documentados, a prática esportiva está associada a um risco maior de lesões; especialmente no futebol profissional, o risco é substancial.\nObjetivo: O objetivo primário deste estudo foi investigar a incidência de lesões em atletas do sexo masculino que competem em campeonatos regionais de futebol. O objetivo secundário foi determinar a prevalência de lesões.\nMétodos: Neste estudo prospectivo, a incidência e a prevalência de lesões foram avaliadas e jogadores acompanhados usando uma versão adaptada do questionário de estudo da Liga dos Campeões da UEFA.\nResultados: Este estudo incluiu 310 atletas do sexo masculino de 10 equipes, com idade 26,53 +ou- 4,75 anos, estatura 180,93 +ou- 6,49 cm e peso 79,32 +ou- 8,29 kg, durante 4 meses de acompanhamento. Foram registradas 92 lesões, o que representa uma prevalência de 29,68%. A parte do corpo que teve lesões mais frequentes foram os membros inferiores (86,9%). Os principais tipos de lesão foram ruptura/distensão muscular (37,0%), entorse/ligamento (19,6%) e outras lesões (14,1%). As lesões foram causadas principalmente durante corrida/sprint (33,7%), chute (12,0%) e salto/aterrissagem (6,5%). A incidência de lesões foi de 15,88 +ou- 8,57, 2,04 +ou- 1,09 e 3,65 +ou- 1,50 lesões/1.000 horas de exposição durante jogos, treinamento e jogos/treinamento, respectivamente. O tempo de afastamento na temporada variou de 1 a 50 dias e a gravidade das lesões foi a seguinte: leve (25%), menor (22,8%), moderada (43,5%) e grave (8,7%).\nConclusão: O presente estudo sugere que existe maior incidência de lesões durante os jogos em comparação com os treinos entre jogadores do sexo masculino em campeonatos regionais de futebol. Os membros inferiores são a região mais acometida, com maior prevalência de ruptura/distensão na região da coxa durante a corrida/sprint...” (DRUMMOND, Felix Albuquerque et al. INCIDÊNCIA DE LESÕES EM JOGADORES DE FUTEBOL–MAPPINGFOOT. Revista Brasileira de Medicina do Esporte, v. 27, p. 189-194, 2021.)\n\nO tipo do estudo acima é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Caso-controle.",
        "explanation": "Incorreta: Caso-controle parte do desfecho (doentes vs. não doentes) e investiga retrospectivamente exposições prévias, não medindo incidência diretamente.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Ensaio clínico.",
        "explanation": "Incorreta: Ensaio clínico é um estudo experimental/intervencionista em que o pesquisador aloca uma intervenção.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Ecológico.",
        "explanation": "Incorreta: Estudo ecológico utiliza dados agregados populacionais, não o seguimento individual de atletas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Coorte.",
        "explanation": "A alternativa **D** está correta. Trata-se de um **estudo de coorte prospectivo** (**Medronho / Gordis**): um grupo definido de indivíduos (310 atletas) é **acompanhado longitudinalmente ao longo do tempo** (4 meses), sem intervenção do pesquisador (observacional), permitindo medir diretamente a **incidência** (taxa de incidência por 1.000 horas de exposição) de desfechos (lesões).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Epidemiológico retrospectivo.",
        "explanation": "Incorreta: O texto explicita nos métodos que se trata de um \"estudo prospectivo\".",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Trata-se de um **estudo de coorte prospectivo** (**Medronho / Gordis**): um grupo definido de indivíduos (310 atletas) é **acompanhado longitudinalmente ao longo do tempo** (4 meses), sem intervenção do pesquisador (observacional), permitindo medir diretamente a **incidência** (taxa de incidência por 1.000 horas de exposição) de desfechos (lesões).\n- **A) Incorreta:** Caso-controle parte do desfecho (doentes vs. não doentes) e investiga retrospectivamente exposições prévias, não medindo incidência diretamente.\n- **B) Incorreta:** Ensaio clínico é um estudo experimental/intervencionista em que o pesquisador aloca uma intervenção.\n- **C) Incorreta:** Estudo ecológico utiliza dados agregados populacionais, não o seguimento individual de atletas.\n- **E) Incorreta:** O texto explicita nos métodos que se trata de um \"estudo prospectivo\".",
    "perolaClinica": "A alternativa **D** está correta. Trata-se de um **estudo de coorte prospectivo** (**Medronho / Gordis**): um grupo definido de indivíduos (310 atletas) é **acompanhado longitudinalmente ao longo do tempo** (4 meses),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Identificação do estudo de coorte prospectivo a partir do seguimento longitudinal observacional e cálculo de incidência.",
      "raciocinioChave": "O estudo acompanhou prospectivamente uma população definida de 310 atletas ao longo do tempo para medir a incidência de lesões sem intervenção dos pesquisadores. O seguimento longitudinal de grupo livre de desfecho inicial para quantificar novos casos caracteriza o estudo de coorte.",
      "armadilhaBanca": "A menção secundária à determinação de prevalência pode induzir o candidato a marcar estudo transversal ou confundir desenho prospectivo com ensaio clínico."
    },
    "mapaDistratores": {
      "A": "O desenho caso-controle parte do desfecho já ocorrido para investigar retrospectivamente exposições prévias, não sendo capaz de medir incidência diretamente.",
      "B": "No ensaio clínico há alocação ativa de uma intervenção pelo investigador, o que não ocorre nessa investigação puramente observacional.",
      "C": "O estudo ecológico analisa dados agregados de populações ou áreas geográficas, e não o acompanhamento individual longitudinal de atletas.",
      "E": "O próprio método descreve explicitamente que a coleta e o seguimento dos atletas ocorreram de forma prospectiva, e não retrospectiva."
    }
  },
  {
    "id": "q-uepa-2022-007",
    "code": "Q-UEPA22-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Declaração de Óbito",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-declaracao-de-obito",
    "tags": [
      "declaracao-de-obito",
      "causa-basica-de-morte",
      "preenchimento-de-do",
      "atestado-de-obito"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 74 anos, diabético e com insuficiência renal crônica (ESTAGIO 3), veio trazido ao pronto socorro com quadro de confusão mental e agitação psicomotora súbita, sem febre, e sem evacuar há quatro dias, com queixa de dor abdominal e sangue nas fezes. Familiar relata história pregressa de doença diverticular, diagnosticado em colonoscopia de rotina. Paciente foi internado e iniciou antibioticoterapia e volume controlado para a IRC, porém evoluiu com parada cardiorrespiratória, foi submetida a reanimação sem sucesso. Neste caso, a declaração de óbito, no tópico “condições e causas do óbito” deve constar:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Parte I: a. Choque Sepseptico; b.Sepse; c.Diverticulite; d.Doença diverticular; Parte II: Diabetes e IRC",
        "explanation": "A alternativa **A** está correta. Conforme o **Manual de Instruções para o Preenchimento da Declaração de Óbito (Ministério da Saúde / CFM)**, a **Parte I** descreve a cadeia causal direta do óbito, de cima para baixo (da causa imediata na linha *a* até a **causa básica** na última linha preenchida): *a.* Choque séptico -> devido a *b.* Sepse -> devido a *c.* Diverticulite -> devido a *d.* **Doença diverticular** (causa básica). Na **Parte II**, registram-se as condições contribuintes que não fazem parte da cadeia causal direta: **Diabetes mellitus e Insuficiência Renal Crônica (IRC)**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Parte I: a. Choque Sepseptico; b.Sepse; c.Diverticulite; d. IRC Parte II: Diabetes",
        "explanation": "Incorreta: A IRC não é causa da diverticulite e pertence à Parte II (condição contribuinte), não à linha *d* da Parte I.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Parte I: a. Disfunção múltiplas de orgãos; b.Sepse; c.Diverticulite; d.Doença diverticular Parte II: Diabetes e IRC",
        "explanation": "Incorreta: Embora mantenha a doença diverticular na linha *d*, o enunciado descreve quadro de sepse/choque séptico e evita-se usar \"disfunção de múltiplos órgãos\" como termo terminal genérico quando há causa imediata mais específica (choque séptico).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Parte I: a. Disfunção múltiplas de orgãos b. Sepse grave; c.Sepse; d.Diverticulite; Parte II: Diabetes e IRC",
        "explanation": "Incorreta: Omite a causa básica (doença diverticular) e utiliza o termo obsoleto \"sepse grave\" (abandonado pelo Sepsis-3).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Parte I: a. Disfunção múltiplas de orgãos b. Choque Sepseptico; c.Sepse; d.Diverticulite; Parte II: Diabetes e IRC",
        "explanation": "Incorreta: Omite a doença diverticular como causa básica na linha *d* e insere disfunção de múltiplos órgãos na linha *a*.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Conforme o **Manual de Instruções para o Preenchimento da Declaração de Óbito (Ministério da Saúde / CFM)**, a **Parte I** descreve a cadeia causal direta do óbito, de cima para baixo (da causa imediata na linha *a* até a **causa básica** na última linha preenchida): *a.* Choque séptico -> devido a *b.* Sepse -> devido a *c.* Diverticulite -> devido a *d.* **Doença diverticular** (causa básica). Na **Parte II**, registram-se as condições contribuintes que não fazem parte da cadeia causal direta: **Diabetes mellitus e Insuficiência Renal Crônica (IRC)**.\n- **B) Incorreta:** A IRC não é causa da diverticulite e pertence à Parte II (condição contribuinte), não à linha *d* da Parte I.\n- **C) Incorreta:** Embora mantenha a doença diverticular na linha *d*, o enunciado descreve quadro de sepse/choque séptico e evita-se usar \"disfunção de múltiplos órgãos\" como termo terminal genérico quando há causa imediata mais específica (choque séptico).\n- **D) Incorreta:** Omite a causa básica (doença diverticular) e utiliza o termo obsoleto \"sepse grave\" (abandonado pelo Sepsis-3).\n- **E) Incorreta:** Omite a doença diverticular como causa básica na linha *d* e insere disfunção de múltiplos órgãos na linha *a*.",
    "perolaClinica": "A alternativa **A** está correta. Conforme o **Manual de Instruções para o Preenchimento da Declaração de Óbito (Ministério da Saúde / CFM)**, a **Parte I** descreve a cadeia causal direta do óbito, de cima para baixo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Preenchimento sequencial da cadeia causal na Parte I e das condições contribuintes na Parte II da Declaração de Óbito.",
      "raciocinioChave": "Na Parte I da DO, registra-se a sequência lógica de cima para baixo, da causa imediata (choque séptico na linha a) até a causa básica que iniciou a cadeia (doença diverticular na linha d, passando por sepse e diverticulite). Comorbidades que contribuíram para o óbito sem integrar a cadeia direta (diabetes e IRC) vão para a Parte II.",
      "armadilhaBanca": "Inverter a ordem da cadeia causal na Parte I, colocar comorbidade (IRC) como causa básica na linha d ou truncar a causa básica na diverticulite."
    },
    "mapaDistratores": {
      "B": "A insuficiência renal crônica não é causa de diverticulite e deve figurar na Parte II como condição contribuinte, mantendo a doença diverticular na linha d.",
      "C": "O termo genérico disfunção de múltiplos órgãos deve ser evitado na linha a quando há causa imediata bem definida no quadro clínico, como o choque séptico.",
      "D": "Omite a doença diverticular como causa básica na última linha da Parte I e emprega a terminologia obsoleta \"sepse grave\", além de usar termo terminal genérico na linha a.",
      "E": "Deixa de registrar a doença diverticular como causa básica originária na linha d e coloca disfunção de múltiplos órgãos como causa imediata na linha a."
    }
  },
  {
    "id": "q-uepa-2022-008",
    "code": "Q-UEPA22-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "rastreamento-populacional",
      "cancer-colorretal",
      "sangue-oculto-nas-fezes",
      "saude-do-idoso"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, de 71 anos, hipertensa e com catarata em ambos os olhos, comparece a Unidade Básica de Saúde para consulta de rotina acompanhada da filha, que questiona a você, quais exames de rotina (rastreio), a sua mãe deverá fazer diferente dela, que tem 47 anos. Nesse sentido, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deverá ser solicitado somente para a mãe o sangue oculto nas fezes, para rastreio de câncer de colón.",
        "explanation": "Incorreta (causa de anulação): Defensável pelo MS (50–75 anos), mas conflita com a USPSTF 2021 (início aos 45 anos) e com a coexistência da alternativa C.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "deverá ser solicitado mamografia para filha e mãe, sendo realizado este anualmente.",
        "explanation": "Incorreta: Pelo MS/INCA, a mamografia de rastreamento é bienal dos 50 aos 69 anos (nem a filha de 47 nem a mãe de 71 estão nessa faixa).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "deverá ser solicitado somente para filha colpocitologia oncótica, sendo repetido com intervalo de três anos se for sem alterações citológicas.",
        "explanation": "Incorreta (causa de anulação): A faixa etária do MS (25–64 anos) contempla apenas a filha, mas o intervalo trienal exige **dois exames anuais consecutivos normais**, além do conflito com a alternativa A.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "deverá ser solicitado para a filha e para mãe glicemia em jejum, para rastreio de DM.",
        "explanation": "Incorreta: A questão pergunta exames que a mãe fará *diferente* da filha; além disso, o rastreio de DM2 na APS tem indicação em hipertensos (mãe) e em adultos com sobrepeso/fatores de risco (não especificado na filha).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "deverá ser solicitado para mãe e filha rastreio de tireoidopatias, com intervalo de cinco anos.",
        "explanation": "Incorreta: Não há recomendação de rastreamento populacional de tireoidopatias em adultos assintomáticos pelo Ministério da Saúde ou USPSTF.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** A questão gerou duplicidade de gabarito e divergência entre diretrizes (**Ministério da Saúde / INCA vs. USPSTF 2021**): pelo **Ministério da Saúde (Caderno de Atenção Básica nº 29 — Rastreamento)**, tanto o rastreamento de **câncer colorretal** com pesquisa de sangue oculto nas fezes (50 a 75 anos — aplicável à mãe de 71 anos e não à filha de 47 anos, tornando **A** defensável) quanto a **colpocitologia oncótica** (25 a 64 anos — aplicável apenas à filha de 47 anos, tornando **C** defensável, apesar de omitir os dois exames anuais iniciais normais) diferem entre mãe e filha. Além disso, a USPSTF (2021) reduziu o início do rastreio colorretal para 45 anos. Diante da ambiguidade entre A e C, a banca anulou a questão.\n- **A) Incorreta (causa de anulação):** Defensável pelo MS (50–75 anos), mas conflita com a USPSTF 2021 (início aos 45 anos) e com a coexistência da alternativa C.\n- **B) Incorreta:** Pelo MS/INCA, a mamografia de rastreamento é bienal dos 50 aos 69 anos (nem a filha de 47 nem a mãe de 71 estão nessa faixa).\n- **C) Incorreta (causa de anulação):** A faixa etária do MS (25–64 anos) contempla apenas a filha, mas o intervalo trienal exige **dois exames anuais consecutivos normais**, além do conflito com a alternativa A.\n- **D) Incorreta:** A questão pergunta exames que a mãe fará *diferente* da filha; além disso, o rastreio de DM2 na APS tem indicação em hipertensos (mãe) e em adultos com sobrepeso/fatores de risco (não especificado na filha).\n- **E) Incorreta:** Não há recomendação de rastreamento populacional de tireoidopatias em adultos assintomáticos pelo Ministério da Saúde ou USPSTF.",
    "perolaClinica": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** A questão gerou duplicidade de gabarito e divergência entre diretrizes (**Ministério da Saúde / INCA…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2022-009",
    "code": "Q-UEPA22-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Assistência Pré-Natal de Baixo Risco",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-assistencia-pre-natal-de-baixo-risco",
    "tags": [
      "assistencia-pre-natal",
      "exames-de-rotina",
      "primeiro-trimestre",
      "ministerio-da-saude"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 24 anos, gestante com 9 semanas, comparece a Unidade Básica de Saúde para iniciar o pré-natal de baixo risco, relata um pouco de enjoo matinal, negam demais queixas. Os exames necessários na primeira consulta do pré natal de baixo risco, preconizado pelo Ministério da Saúde são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tipagem Sanguínea, Hb/Ht, VDRL, Glicemia em jejum, urina rotina e urocultura, Anti-HIV 1 e 2, HBsAg, Toxoplasmose IgM e IgG, Sorologia para Rubéola, Sorologia Citomegalovírus, colpocitologia oncótica caso não tenha realizado no ano anterior.",
        "explanation": "Incorreta: Inclui sorologias para rubéola e citomegalovírus, que não são recomendadas rotineiramente no pré-natal de baixo risco pelo MS.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Tipagem Sanguínea, Hb/Ht, VDRL, Glicemia em jejum e hemoglobina glicada, ultrassonografia morfológica, urina rotina e urocultura, Anti-HIV 1 e 2, HBsAg, Toxoplasmose IgM e IgG, Sorologia para Rubéola, Sorologia Citomegalovírus, c colpocitologia oncótica caso não tenha realizado no ano anterior.",
        "explanation": "Incorreta: Inclui HbA1c, USG morfológica (que é do 2º trimestre e não rotina obrigatória na 1ª consulta), rubéola e CMV.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Tipagem Sanguínea, Hb/Ht, VDRL, Glicemia em jejum, ultrassonografia morfológica, urina rotina e urocultura, Anti-HIV 1 e 2, HBsAg, Toxoplasmose IgM e IgG, Sorologia para Rubéola, Sorologia Citomegalovírus, colpocitologia oncótica caso não tenha realizado no ano anterior.",
        "explanation": "Incorreta: Inclui USG morfológica, rubéola e citomegalovírus.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Tipagem Sanguínea, Hb/Ht, VDRL, Glicemia em jejum, ultrassonografia morfológica, urina rotina e urocultura, Anti-HIV 1 e 2, HBsAg, Toxoplasmose IgM e IgG, Sorologia para Rubéola, Sorologia Citomegalovírus.",
        "explanation": "Incorreta: Inclui USG morfológica, rubéola e citomegalovírus.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Tipagem Sanguínea, Hb/Ht, VDRL, Glicemia em jejum, urina rotina e urocultura, Anti-HIV 1 e 2, HBsAg, Toxoplasmose IgM e IgG, colpocitologia oncótica caso não tenha realizado no ano anterior.",
        "explanation": "A alternativa **E** está correta. Segundo o **Caderno de Atenção Básica nº 32 — Atenção ao Pré-Natal de Baixo Risco (Ministério da Saúde)**, a rotina laboratorial da primeira consulta inclui: tipagem sanguínea/fator Rh, hemograma (Hb/Ht), glicemia de jejum, VDRL/teste rápido sífilis, anti-HIV, HBsAg, sorologia para toxoplasmose (IgM/IgG), exame de urina (EAS) e urocultura, além de colpocitologia oncótica se indicada. **Não** fazem parte da rotina de baixo risco sorologias para rubéola ou citomegalovírus, hemoglobina glicada nem ultrassonografia morfológica na 1ª consulta.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Segundo o **Caderno de Atenção Básica nº 32 — Atenção ao Pré-Natal de Baixo Risco (Ministério da Saúde)**, a rotina laboratorial da primeira consulta inclui: tipagem sanguínea/fator Rh, hemograma (Hb/Ht), glicemia de jejum, VDRL/teste rápido sífilis, anti-HIV, HBsAg, sorologia para toxoplasmose (IgM/IgG), exame de urina (EAS) e urocultura, além de colpocitologia oncótica se indicada. **Não** fazem parte da rotina de baixo risco sorologias para rubéola ou citomegalovírus, hemoglobina glicada nem ultrassonografia morfológica na 1ª consulta.\n- **A) Incorreta:** Inclui sorologias para rubéola e citomegalovírus, que não são recomendadas rotineiramente no pré-natal de baixo risco pelo MS.\n- **B) Incorreta:** Inclui HbA1c, USG morfológica (que é do 2º trimestre e não rotina obrigatória na 1ª consulta), rubéola e CMV.\n- **C) Incorreta:** Inclui USG morfológica, rubéola e citomegalovírus.\n- **D) Incorreta:** Inclui USG morfológica, rubéola e citomegalovírus.",
    "perolaClinica": "A alternativa **E** está correta. Segundo o **Caderno de Atenção Básica nº 32 — Atenção ao Pré-Natal de Baixo Risco (Ministério da Saúde)**, a rotina laboratorial da primeira consulta inclui: tipagem sanguínea/fator…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Rotina laboratorial preconizada pelo Ministério da Saúde na primeira consulta do pré-natal de baixo risco.",
      "raciocinioChave": "O Caderno de Atenção Básica nº 32 estabelece na primeira consulta de baixo risco: tipagem sanguínea/Rh, Hb/Ht, glicemia de jejum, VDRL, anti-HIV, HBsAg, toxoplasmose (IgM/IgG), EAS, urocultura e colpocitologia oncótica se em atraso. Não há recomendação de rastreio universal para rubéola, CMV ou solicitação de USG morfológica na rotina inicial do 1º trimestre.",
      "armadilhaBanca": "Incluir sorologias não recomendadas na rotina de baixo risco (rubéola e CMV) ou solicitar precocemente USG morfológica e HbA1c na primeira consulta."
    },
    "mapaDistratores": {
      "A": "Inclui sorologias para rubéola e citomegalovírus, que não integram o rastreamento rotineiro preconizado pelo Ministério da Saúde no pré-natal de baixo risco.",
      "B": "Adiciona hemoglobina glicada, ultrassonografia morfológica (exame do 2º trimestre) e sorologias para rubéola e citomegalovírus fora da rotina básica inicial.",
      "C": "Inclui ultrassonografia morfológica e sorologias para rubéola e citomegalovírus, exames não preconizados na rotina laboratorial da primeira consulta.",
      "D": "Insere ultrassonografia morfológica e sorologias de rubéola e citomegalovírus, além de omitir a verificação do rastreamento citopatológico do colo uterino."
    }
  },
  {
    "id": "q-uepa-2022-010",
    "code": "Q-UEPA22-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Ética Médica, Bioética e Medicina Legal",
    "subtema": "Código de Ética Médica e Sigilo Profissional",
    "temaSlug": "mp-etica",
    "subtemaSlug": "mp-etica-codigo-de-etica-medica-e-sigilo-profissional",
    "tags": [
      "sigilo-medico",
      "quebra-de-sigilo",
      "ideacao-suicida",
      "atendimento-ao-adolescente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, de 14 anos, veio a consulta na Unidade básica de saúde, acompanhado da mãe, que relata que filho anda choroso e isolado. Ao conversar isoladamente com o paciente, ele apresenta pensamentos suicidas, mas não queria que sua mãe soubesse, pois ela é muito ansiosa. A conduta mais segura, neste caso, deve ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "internar o paciente para evitar evento catastrófico, com autorização dos pais, já que este é menor de idade.",
        "explanation": "Incorreta: Ideação suicida requer avaliação de gravidade e plano de segurança junto à família e rede de saúde mental, não internação compulsória automática sem estratificação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "conversar com o paciente que deverá compartilhar a informação com os pais e responsáveis, já que, este é menor de idade.",
        "explanation": "Incorreta: O motivo da quebra de sigilo não é o simples fato de ser menor de idade (pois menores têm direito ao sigilo pelo Art. 74 do CEM), mas sim o **risco à vida**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "conversar com o paciente que deverá compartilhar a informação com os pais e responsáveis, já que, há o risco à vida.",
        "explanation": "A alternativa **C** está correta. Pelo **Código de Ética Médica (Art. 74)** e diretrizes da **SBP / Ministério da Saúde (Saúde do Adolescente)**, o adolescente capaz de avaliar seu problema tem direito ao sigilo médico; entretanto, a **quebra do sigilo é obrigatória** quando a não revelação puder acarretar **dano ao paciente ou a terceiros**, como no **risco de suicídio (risco à vida)**. O médico deve sempre comunicar previamente ao adolescente que precisará compartilhar a informação com os pais/responsáveis para garantir sua segurança.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "preservar a vontade do paciente, então será mantida a condição em sigilo.",
        "explanation": "Incorreta: O sigilo não pode ser mantido diante de risco iminente de autoextermínio.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "preservar o sigilo profissional, com base no Código de Ética Médica, então não poderá conversar com os responsáveis do paciente.",
        "explanation": "Incorreta: O próprio Código de Ética Médica (Art. 74) excetua o sigilo quando houver risco de dano ao menor.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Pelo **Código de Ética Médica (Art. 74)** e diretrizes da **SBP / Ministério da Saúde (Saúde do Adolescente)**, o adolescente capaz de avaliar seu problema tem direito ao sigilo médico; entretanto, a **quebra do sigilo é obrigatória** quando a não revelação puder acarretar **dano ao paciente ou a terceiros**, como no **risco de suicídio (risco à vida)**. O médico deve sempre comunicar previamente ao adolescente que precisará compartilhar a informação com os pais/responsáveis para garantir sua segurança.\n- **A) Incorreta:** Ideação suicida requer avaliação de gravidade e plano de segurança junto à família e rede de saúde mental, não internação compulsória automática sem estratificação.\n- **B) Incorreta:** O motivo da quebra de sigilo não é o simples fato de ser menor de idade (pois menores têm direito ao sigilo pelo Art. 74 do CEM), mas sim o **risco à vida**.\n- **D) Incorreta:** O sigilo não pode ser mantido diante de risco iminente de autoextermínio.\n- **E) Incorreta:** O próprio Código de Ética Médica (Art. 74) excetua o sigilo quando houver risco de dano ao menor.",
    "perolaClinica": "A alternativa **C** está correta. Pelo **Código de Ética Médica (Art. 74)** e diretrizes da **SBP / Ministério da Saúde (Saúde do Adolescente)**, o adolescente capaz de avaliar seu problema tem direito ao sigilo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Limites éticos do sigilo médico no atendimento ao adolescente diante de ideação suicida.",
      "raciocinioChave": "Pelo Art. 74 do Código de Ética Médica, o adolescente capaz tem direito ao sigilo, salvo quando a não revelação puder causar dano ao paciente ou a terceiros. A presença de ideação suicida configura risco à vida, tornando obrigatória a quebra de sigilo após comunicação prévia ao jovem.",
      "armadilhaBanca": "Justificar a quebra de sigilo simplesmente por o paciente ser menor de idade, ou manter o sigilo absoluto ignorando o risco iminente à vida."
    },
    "mapaDistratores": {
      "A": "Ideação suicida demanda avaliação de risco e construção de rede de proteção familiar e de saúde mental, não internação imediata sem estratificação clínica da gravidade.",
      "B": "A quebra de sigilo não se fundamenta apenas na menoridade — pois o adolescente tem direito ao sigilo médico —, mas especificamente no risco à vida envolvido.",
      "D": "Não é eticamente permitido manter sigilo absoluto quando há risco de autoextermínio, prevalecendo o dever de proteção à vida.",
      "E": "O próprio Art. 74 do Código de Ética Médica prevê expressamente a quebra do sigilo profissional quando houver risco de dano ao paciente menor de idade."
    }
  },
  {
    "id": "q-uepa-2022-011",
    "code": "Q-UEPA22-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": [
      "cuidados-paliativos",
      "principios-dos-cuidados-paliativos",
      "distanasia",
      "qualidade-de-vida"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Cuidado paliativo é a definição prática do cuidado integral a saúde, sendo assim, são preceitos que NÃO são do cuidado paliativo:",
    "alternativas": [
      {
        "letter": "A",
        "text": "promover o alívio da dor e demais sintomas angustiantes e não buscar antecipar nem adiar a morte.",
        "explanation": "Incorreta (é preceito verdadeiro): Alívio da dor/sintomas e não antecipar nem adiar a morte (ortotanásia) são pilares da OMS.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "afirmar a vida e reconhecer a morte como um processo natural e oferecer um sistema de suporte à família que permita que ela cuide do paciente até o final.",
        "explanation": "Incorreta (é preceito verdadeiro): Afirmar a vida, encarar a morte como processo natural e apoiar a família durante a doença e o luto integram a definição da OMS.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "integrar os aspectos psicológicos e espirituais como parte dos cuidados ao paciente.",
        "explanation": "Incorreta (é preceito verdadeiro): A abordagem biopsicossocial e espiritual é princípio central dos cuidados paliativos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "não realizar condutas invasivas, mesmo quando estas são necessárias para prolongar a vida do paciente de forma confortável.",
        "explanation": "A alternativa **D** está correta (pois a questão pede o que **NÃO** é preceito do cuidado paliativo). Segundo os **Princípios dos Cuidados Paliativos da OMS** e a **Academia Nacional de Cuidados Paliativos (ANCP)**, cuidados paliativos não equivalem a abstenção absoluta de procedimentos invasivos: **condutas invasivas proporcionais** (como drenagem de derrame pleural, gastrostomia em casos selecionados, passagem de cateter ou analgesia intervencionista) **podem e devem ser realizadas** quando promovem conforto, alívio de sintomas e qualidade de vida.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "oferecer um sistema de suporte para ajudar o paciente a viver tão ativamente quanto possível até a morte.",
        "explanation": "Incorreta (é preceito verdadeiro): Ajudar o paciente a viver tão ativamente quanto possível até a morte consta literalmente nos princípios da OMS.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta (pois a questão pede o que **NÃO** é preceito do cuidado paliativo). Segundo os **Princípios dos Cuidados Paliativos da OMS** e a **Academia Nacional de Cuidados Paliativos (ANCP)**, cuidados paliativos não equivalem a abstenção absoluta de procedimentos invasivos: **condutas invasivas proporcionais** (como drenagem de derrame pleural, gastrostomia em casos selecionados, passagem de cateter ou analgesia intervencionista) **podem e devem ser realizadas** quando promovem conforto, alívio de sintomas e qualidade de vida.\n- **A) Incorreta (é preceito verdadeiro):** Alívio da dor/sintomas e não antecipar nem adiar a morte (ortotanásia) são pilares da OMS.\n- **B) Incorreta (é preceito verdadeiro):** Afirmar a vida, encarar a morte como processo natural e apoiar a família durante a doença e o luto integram a definição da OMS.\n- **C) Incorreta (é preceito verdadeiro):** A abordagem biopsicossocial e espiritual é princípio central dos cuidados paliativos.\n- **E) Incorreta (é preceito verdadeiro):** Ajudar o paciente a viver tão ativamente quanto possível até a morte consta literalmente nos princípios da OMS.",
    "perolaClinica": "A alternativa **D** está correta (pois a questão pede o que **NÃO** é preceito do cuidado paliativo). Segundo os **Princípios dos Cuidados Paliativos da OMS** e a **Academia Nacional de Cuidados Paliativos (ANCP)**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Princípios dos cuidados paliativos segundo a OMS e proporcionalidade de intervenções invasivas.",
      "raciocinioChave": "Como a questão solicita o preceito que NÃO pertence aos cuidados paliativos, busca-se a afirmação falsa sobre a prática paliativista. Procedimentos invasivos proporcionais (como drenagens, cateteres ou gastrostomia) são perfeitamente indicados quando trazem conforto, controle de sintomas e qualidade de vida.",
      "armadilhaBanca": "Acreditar no mito de que cuidados paliativos proíbem qualquer procedimento invasivo, mesmo quando proporcionais para aliviar sofrimento."
    },
    "mapaDistratores": {
      "A": "Promover alívio da dor e sintomas sem antecipar nem adiar a morte (ortotanásia) é um dos pilares clássicos da definição da OMS.",
      "B": "Afirmar a vida, reconhecer a morte como processo natural e dar suporte à família durante o adoecimento e o luto são princípios fundamentais dos cuidados paliativos.",
      "C": "A integração dos cuidados físicos aos aspectos psicológicos e espirituais compõe a abordagem multidimensional exigida nos cuidados paliativos.",
      "E": "Oferecer suporte para que o paciente viva o mais ativamente possível até o fim da vida é princípio literal estabelecido pela OMS."
    }
  },
  {
    "id": "q-uepa-2022-012",
    "code": "Q-UEPA22-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "redes-de-atencao-a-saude",
      "esf",
      "upa",
      "caps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A estruturação da cobertura da atenção básica, assim como a organização da rede de urgência e emergência e saúde mental, devem ser prioridade das secretarias municipais de saúde. Assim, usando como exemplo a cidade de Bagre no estado do Pará, com 31.325 habitantes, assinale a alternativa que indica quantas Equipes Saúde da Família - ESF seriam necessárias, assim como, quantas Unidades de Pronto Atendimento- UPA e Centro de Atendimento Psicossocial- CAPS são necessários e quais as repercussões negativas de uma baixa cobertura de um destes três sistemas de atenção à saúde.",
    "alternativas": [
      {
        "letter": "A",
        "text": "ESF seriam 8, com o baixo número poderia ocorrer descontrole de doenças crônicas e de controle de doenças infectocontagiosas como Hanseníase.",
        "explanation": "Incorreta: Pela **PNAB (2017)**, cada eSF cobre de **2.000 a 3.500 pessoas**; para 31.325 habitantes seriam necessárias no mínimo **9 a 16 eSF** (31.325 / 3.500 ≈ 8,95, ou seja, 9 equipes — não 8).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "CAPS seriam 2, sendo que sua ausência, haveria possível marginalização dos pacientes com este perfil, assim não ocorrendo educação em saúde mental e suporte as famílias.",
        "explanation": "Incorreta: Pela **RAPS (Portaria nº 3.088/2011)**, municípios acima de 15.000 habitantes têm indicação de **1 CAPS I** (não 2 CAPS).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "UPA seria 1, sendo que sua ausência, repercute em maior numero de eventos letais agudos com desfecho de óbitos, aumentando como um todo a incidência de óbitos por doenças agudas tratáveis desta população.",
        "explanation": "Incorreta: Com 31.325 habitantes (< 50.000), o município não preenche critério populacional isolado para implantação de UPA 24h.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "ESF seriam 7, sendo que sua ausência, haveria possível ausência de assistência a saúde, principalmente relacionado a rastreios, o que poderia aumentar os custos com doenças preveníeis em nível de prevenção secundaria.",
        "explanation": "Incorreta: 7 eSF cobririam no máximo 24.500 habitantes pela PNAB 2017 (máximo de 3.500 por equipe), deixando parte da população descoberta.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Não teria número necessário para abertura de uma unidade de pronto atendimento, assim, seria importante articular com consorcio bipartite (municípios e estado), para abertura de hospital regional ou uma UPA tipo III, de grande porte, para atender toda a população de um conjunto de pequenos municípios da região.",
        "explanation": "A alternativa **E** está correta. Pelas normas do **Ministério da Saúde (Portaria GM/MS nº 10/2017 — Rede de Atenção às Urgências / UPA 24h)**, a implantação isolada de uma **UPA 24h** exige população mínima de **50.000 habitantes** (Porte I: 50 a 100 mil hab.). Como Bagre (PA) possui 31.325 habitantes, o município **não atinge o porte populacional mínimo** para uma UPA própria, devendo articular-se regionalmente (consórcio/pactuação com municípios vizinhos e Estado) para cobertura por hospital regional ou UPA de maior porte.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. Pelas normas do **Ministério da Saúde (Portaria GM/MS nº 10/2017 — Rede de Atenção às Urgências / UPA 24h)**, a implantação isolada de uma **UPA 24h** exige população mínima de **50.000 habitantes** (Porte I: 50 a 100 mil hab.). Como Bagre (PA) possui 31.325 habitantes, o município **não atinge o porte populacional mínimo** para uma UPA própria, devendo articular-se regionalmente (consórcio/pactuação com municípios vizinhos e Estado) para cobertura por hospital regional ou UPA de maior porte.\n- **A) Incorreta:** Pela **PNAB (2017)**, cada eSF cobre de **2.000 a 3.500 pessoas**; para 31.325 habitantes seriam necessárias no mínimo **9 a 16 eSF** (31.325 / 3.500 ≈ 8,95, ou seja, 9 equipes — não 8).\n- **B) Incorreta:** Pela **RAPS (Portaria nº 3.088/2011)**, municípios acima de 15.000 habitantes têm indicação de **1 CAPS I** (não 2 CAPS).\n- **C) Incorreta:** Com 31.325 habitantes (< 50.000), o município não preenche critério populacional isolado para implantação de UPA 24h.\n- **D) Incorreta:** 7 eSF cobririam no máximo 24.500 habitantes pela PNAB 2017 (máximo de 3.500 por equipe), deixando parte da população descoberta.",
    "perolaClinica": "A alternativa **E** está correta. Pelas normas do **Ministério da Saúde (Portaria GM/MS nº 10/2017 — Rede de Atenção às Urgências / UPA 24h)**, a implantação isolada de uma **UPA 24h** exige população mínima de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Parâmetros populacionais de cobertura da Rede de Atenção à Saúde para eSF, CAPS e UPA 24h.",
      "raciocinioChave": "Pela Portaria GM/MS nº 10/2017, a implantação isolada de uma UPA 24h requer população mínima de 50.000 habitantes (Porte I). Com 31.325 habitantes, o município não atinge esse critério, devendo articular consórcios regionais ou pactuação bipartite para suporte de urgência.",
      "armadilhaBanca": "Errar o cálculo mínimo de eSF pela PNAB (2.000–3.500 hab./equipe), o parâmetro de 1 CAPS I (> 15 mil hab.) ou assumir que 31 mil habitantes comportam UPA 24h própria."
    },
    "mapaDistratores": {
      "A": "Pela PNAB 2017 (2.000 a 3.500 pessoas por equipe), 31.325 habitantes demandam no mínimo 9 eSF (31.325 / 3.500 ≈ 8,95), e não apenas 8 equipes.",
      "B": "Pela Portaria nº 3.088/2011 (RAPS), municípios entre 15.000 e 70.000 habitantes têm indicação de 1 CAPS I, e não de 2 unidades.",
      "C": "Com 31.325 habitantes (abaixo do piso de 50.000 habitantes), o município não preenche o requisito populacional isolado para implantação de UPA 24h.",
      "D": "Sete eSF cobririam no máximo 24.500 pessoas dentro do teto de 3.500 habitantes por equipe da PNAB, deixando parte relevante da população descoberta."
    }
  },
  {
    "id": "q-uepa-2022-013",
    "code": "Q-UEPA22-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "hipertensao-arterial",
      "manejo-nao-farmacologico",
      "restricao-de-sodio",
      "mudanca-de-estilo-de-vida"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, 48 anos, sobrepeso, com dislipidemia, hipertensão primaria e diabetes, vem a consulta de rotina na unidade básica de saúde, com MRPA (Monitorização residencial de pressão arterial), com pressão média acima do traçado. Como meta no plano terapêutico, este paciente já faz uso de dois anti-hipertensivos, antes de instituir mudanças farmacológicas deve-se rever:",
    "alternativas": [
      {
        "letter": "A",
        "text": "diário alimentar do paciente, focando em alimentos ricos em fibras e baixo teor de sódio 2 gramas de sódio/diário (5 gramas de cloreto de sódio/diário), além da redução de açucares refinados.",
        "explanation": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**, antes de escalonar a terapia farmacológica deve-se revisar adesão e medidas não farmacológicas, destacando-se a **restrição de sódio para 2 g/dia (equivalente a 5 g de sal/cloreto de sódio por dia)**, dieta rica em fibras (padrão DASH) e redução de açúcares refinados (especialmente relevante em paciente com DM2, dislipidemia e sobrepeso).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "atividades físicas: focadas em atividades anaeróbicas, de 30 – 40 minutos, no mínimo três vezes por semana e atividades físicas de impacto, duas vezes por semana sem ou com supervisão profissional.",
        "explanation": "Incorreta: A recomendação primária é de exercícios **aeróbicos** (150 min/semana, 3–5x/semana) associados a treinamento resistido, e não foco exclusivo em anaeróbicos e atividades de impacto.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "não haverá grandes impactos na instituição de atividades física ou mudanças alimentares, então deverá instituir um terceiro anti-hipertensivo.",
        "explanation": "Incorreta: Mudanças no estilo de vida têm impacto comprovado e expressivo na redução da PA, da glicemia e do risco cardiovascular.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "para melhor adesão do paciente ao tratamento, deverá explicar as complicações a longo prazo das doenças que ele apresenta, e que estas podem ser controladas com a instituição de medicamentos e que isto é o suficiente para prevenir eventos catastróficos.",
        "explanation": "Incorreta: Apenas a terapia medicamentosa isolada sem mudanças de estilo de vida e abordagem centrada na pessoa não é considerada suficiente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a adesão a farmacologia atual, deverá ser revista, pedindo ao paciente explicar como está fazendo as medicações, sendo importante o entendimento do paciente em seguir as orientações sem opinar com as condutas farmacológicas instituídas.",
        "explanation": "Incorreta: Embora revisar adesão seja essencial, a abordagem centrada na pessoa (MCCP) exige **decisão compartilhada**, e não impedir o paciente de opinar sobre seu plano terapêutico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**, antes de escalonar a terapia farmacológica deve-se revisar adesão e medidas não farmacológicas, destacando-se a **restrição de sódio para 2 g/dia (equivalente a 5 g de sal/cloreto de sódio por dia)**, dieta rica em fibras (padrão DASH) e redução de açúcares refinados (especialmente relevante em paciente com DM2, dislipidemia e sobrepeso).\n- **B) Incorreta:** A recomendação primária é de exercícios **aeróbicos** (150 min/semana, 3–5x/semana) associados a treinamento resistido, e não foco exclusivo em anaeróbicos e atividades de impacto.\n- **C) Incorreta:** Mudanças no estilo de vida têm impacto comprovado e expressivo na redução da PA, da glicemia e do risco cardiovascular.\n- **D) Incorreta:** Apenas a terapia medicamentosa isolada sem mudanças de estilo de vida e abordagem centrada na pessoa não é considerada suficiente.\n- **E) Incorreta:** Embora revisar adesão seja essencial, a abordagem centrada na pessoa (MCCP) exige **decisão compartilhada**, e não impedir o paciente de opinar sobre seu plano terapêutico.",
    "perolaClinica": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**, antes de escalonar a terapia farmacológica deve-se revisar adesão e medidas não farmacológicas,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Medidas não farmacológicas prioritárias na hipertensão não controlada antes do escalonamento medicamentoso.",
      "raciocinioChave": "Antes de adicionar um terceiro anti-hipertensivo, as diretrizes da SBC e SBD recomendam revisar a adesão e reforçar mudanças no estilo de vida. A restrição de sódio a 2 g/dia (5 g de cloreto de sódio), aliada à dieta rica em fibras e redução de açúcares refinados, tem impacto direto na PA e no perfil metabólico.",
      "armadilhaBanca": "Indicar escalonamento medicamentoso imediato sem otimizar estilo de vida ou exigir obediência passiva do paciente sem decisão compartilhada."
    },
    "mapaDistratores": {
      "B": "A prescrição de exercício físico cardiovascular e metabólico prioriza atividades aeróbicas (150 min/semana) combinadas a treinamento resistido, e não foco exclusivo em anaeróbicos e impacto.",
      "C": "Intervenções nutricionais e atividade física produzem reduções clinicamente relevantes da pressão arterial e da glicemia, devendo preceder ou acompanhar ajustes farmacológicos.",
      "D": "Apenas explicar riscos e confiar exclusivamente nos fármacos, sem abordar hábitos de vida e plano compartilhado, é insuficiente para o controle cardiometabólico.",
      "E": "Embora revisar a adesão seja essencial, o método clínico centrado na pessoa exige decisão compartilhada, e não impedir que o paciente participe e opine sobre seu tratamento."
    }
  },
  {
    "id": "q-uepa-2022-014",
    "code": "Q-UEPA22-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": [
      "testes-diagnosticos",
      "sensibilidade",
      "falso-negativo",
      "investigacao-de-surtos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Como responsável sanitário de uma instituição, você foi acionado para dar um parecer de como deve ser o teste para detectar um surto de uma doença transmissível pelo contato físico apenas. Neste caso, a conduta é que qualquer suspeita este paciente deverá ser afastado para investigação, portanto o perfil deste teste diagnostico deve ter:",
    "alternativas": [
      {
        "letter": "A",
        "text": "alta sensibilidade, já que, dão poucos resultados falso positivos.",
        "explanation": "Incorreta: Alta sensibilidade reduz falso-negativos, não falso-positivos (quem reduz falso-positivos é a alta especificidade).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "alta especificidade, já que, rastreios devem buscar menos resultados falso positivos.",
        "explanation": "Incorreta: Rastreios iniciais priorizam sensibilidade (para não perder casos verdadeiros), deixando testes de alta especificidade para a etapa confirmatória.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "alta sensibilidade, já que, rastreios devem buscar menos resultados falso positivos.",
        "explanation": "Incorreta: Rastreios buscam minimizar falso-negativos, não falso-positivos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "alta especificidade, já que, dão poucos resultados falso negativo.",
        "explanation": "Incorreta: Alta especificidade reduz falso-positivos, não falso-negativos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "alta sensibilidade, já que, dão poucos resultados falso negativo.",
        "explanation": "A alternativa **E** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Gordis**), na triagem inicial de um **surto de doença transmissível** em que o objetivo é não deixar escapar nenhum caso infectado (evitando propagação), deve-se escolher um teste de **alta sensibilidade**, pois testes muito sensíveis apresentam **poucos resultados falso-negativos** (elevado VPN).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Gordis**), na triagem inicial de um **surto de doença transmissível** em que o objetivo é não deixar escapar nenhum caso infectado (evitando propagação), deve-se escolher um teste de **alta sensibilidade**, pois testes muito sensíveis apresentam **poucos resultados falso-negativos** (elevado VPN).\n- **A) Incorreta:** Alta sensibilidade reduz falso-negativos, não falso-positivos (quem reduz falso-positivos é a alta especificidade).\n- **B) Incorreta:** Rastreios iniciais priorizam sensibilidade (para não perder casos verdadeiros), deixando testes de alta especificidade para a etapa confirmatória.\n- **C) Incorreta:** Rastreios buscam minimizar falso-negativos, não falso-positivos.\n- **D) Incorreta:** Alta especificidade reduz falso-positivos, não falso-negativos.",
    "perolaClinica": "A alternativa **E** está correta. Segundo a epidemiologia clínica (**Fletcher & Fletcher / Gordis**), na triagem inicial de um **surto de doença transmissível** em que o objetivo é não deixar escapar nenhum caso…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escolha de teste diagnóstico de alta sensibilidade para triagem de casos em investigação de surto.",
      "raciocinioChave": "Quando o objetivo sanitário é detectar qualquer suspeito e evitar a transmissão de um agravo, não se pode perder casos verdadeiros na triagem. Testes de alta sensibilidade minimizam resultados falso-negativos, maximizando a detecção precoce dos infectados.",
      "armadilhaBanca": "Trocar o conceito de sensibilidade e especificidade quanto à redução de falso-negativos versus falso-positivos em testes de triagem."
    },
    "mapaDistratores": {
      "A": "Alta sensibilidade reduz resultados falso-negativos, enquanto a redução de falso-positivos é propriedade da alta especificidade.",
      "B": "Na triagem inicial de um surto prioriza-se a sensibilidade para evitar falso-negativos; a alta especificidade é buscada na etapa confirmatória.",
      "C": "Rastreios iniciais têm como finalidade principal minimizar resultados falso-negativos (não deixar doentes sem diagnóstico), e não reduzir falso-positivos.",
      "D": "Alta especificidade serve para reduzir falso-positivos e confirmar o diagnóstico, não para evitar resultados falso-negativos."
    }
  },
  {
    "id": "q-uepa-2022-015",
    "code": "Q-UEPA22-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Indicadores de Saúde e Transição Epidemiológica",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-indicadores-de-saude-e-transicao-epidemiologica",
    "tags": [
      "indicadores-de-saude",
      "curva-de-nelson-de-moraes",
      "mortalidade-proporcional",
      "transicao-epidemiologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Observe o Gráfico abaixo para responder à questão 15.\n[Imagem: Dois gráficos de Curva de Nelson de Moraes (% óbitos por faixa etária: <1a, 1-4a, 5-19a, 20-49a, 50+). Gráfico A (perfil em \"U\" / Tipo III): <1a ~29%, 1-4a ~15%, 5-19a ~4%, 20-49a ~16%, 50+ ~41%. Gráfico B (perfil em \"L\" / Tipo I): <1a ~56%, 1-4a ~12%, 5-19a ~7%, 20-49a ~10%, 50+ ~16%.]\n\nEm um espaço de 10 anos as curvas de Nelson Moraes passaram do perfil A para perfil B, isso pode ser explicado por:",
    "alternativas": [
      {
        "letter": "A",
        "text": "provavelmente esta população teve melhoria na qualidade dos serviços de saúde prestados, assim tendo melhor controle das doenças letais previsíveis.",
        "explanation": "Incorreta: A passagem do Tipo III para o Tipo I representa piora drástica, não melhoria.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "provavelmente ocorreu alteração, de forma negativa, na qualidade dos serviços de saúde prestados a esta população, tendo maior número de óbitos em pessoas em fase produtiva.",
        "explanation": "Incorreta (causa de anulação): Houve piora dos serviços, mas o aumento proporcional ocorreu em menores de 1 ano (<1a), não na faixa produtiva (20–49 anos).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "provavelmente esta população teve alteração na qualidade do pré natal e assistência neonatal, assim tendo melhor controle dos óbitos nesta faixa etária.",
        "explanation": "Incorreta: Os óbitos em <1 ano aumentaram acentuadamente (piora, e não melhor controle).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "importante visualizar que houve melhoria nas mortes entre pessoas idosas, significando que a qualidade do atendimento a esta população melhorou.",
        "explanation": "Incorreta: Menor proporção de óbitos em 50+ na curva de Nelson de Moraes reflete piora (as pessoas morrem antes de envelhecer), não melhoria.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "as curvas não demostram mudanças significativas na letalidade de 20-49 anos, o que demonstra não haver impacto na mão de obra ativa desta população.",
        "explanation": "Incorreta: A curva mede mortalidade proporcional (não letalidade) e houve mudança evidente no perfil populacional.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022 e contém imagem (Curvas de Nelson de Moraes)] **Questão ANULADA oficialmente pela banca UEPA 2022.** Pela classificação das **Curvas de Nelson de Moraes** (**Rouquayrol / Medronho**), a transição do perfil **A** (Tipo III — curva em \"U\", nível de saúde regular) para o perfil **B** (Tipo I — curva em \"L\", nível de saúde **muito baixo**, com explosão da proporção de óbitos em menores de 1 ano de ~29% para ~56% e queda da proporção em maiores de 50 anos) indica **piora acentuada** das condições de saúde, especialmente da mortalidade infantil. Contudo, nenhuma alternativa descreve corretamente essa transição: a alternativa **B** acerta ao apontar piora da qualidade dos serviços, mas erra ao afirmar que houve maior proporção de óbitos em fase produtiva (20–49 anos cai de ~16% para ~10%), o que fundamentou a anulação.\n- **A) Incorreta:** A passagem do Tipo III para o Tipo I representa piora drástica, não melhoria.\n- **B) Incorreta (causa de anulação):** Houve piora dos serviços, mas o aumento proporcional ocorreu em menores de 1 ano (<1a), não na faixa produtiva (20–49 anos).\n- **C) Incorreta:** Os óbitos em <1 ano aumentaram acentuadamente (piora, e não melhor controle).\n- **D) Incorreta:** Menor proporção de óbitos em 50+ na curva de Nelson de Moraes reflete piora (as pessoas morrem antes de envelhecer), não melhoria.\n- **E) Incorreta:** A curva mede mortalidade proporcional (não letalidade) e houve mudança evidente no perfil populacional.",
    "perolaClinica": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022 e contém imagem (Curvas de Nelson de Moraes)] **Questão ANULADA oficialmente pela banca UEPA 2022.** Pela classificação das **Curvas de Nelson de Moraes**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2022-016",
    "code": "Q-UEPA22-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Sistemas de Informação em Saúde",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-sistemas-de-informacao-em-saude",
    "tags": [
      "sistemas-de-informacao-em-saude",
      "sim",
      "declaracao-de-obito",
      "mortalidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sistemas de informação em saúde são a base para os gestores tomarem decisões mais eficientes, efetivas e eficazes. Assim, a origem dos dados que alimentam a base de dados e decisões gerenciais podem ser tomadas usando os dados:",
    "alternativas": [
      {
        "letter": "A",
        "text": "SINASC (Sistema de Informações de Nascidos Vivos): alimentado pelas certidões de nascimento; auxilia o gestor em investimentos quanto a organização e disposição dos serviços de vacinação.",
        "explanation": "Incorreta: O SINASC é alimentado pela **Declaração de Nascido Vivo (DNV)**, não pela certidão de nascimento (documento cartorial).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Sistema de Mortalidade Materna: alimentado pelas declarações de óbito; é limitado para ser usado como base para estratégias no planejamento familiar.",
        "explanation": "Incorreta: Os óbitos maternos são registrados no SIM (e investigados pelos comitês de mortalidade materna) e são fundamentais — não limitados — para orientar políticas de saúde reprodutiva e planejamento familiar.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "SINAN (Sistema de Notificação de Agravos de Notificação): alimentado pelas fichas de notificação compulsória; a limitação deste banco de dados é relacionada a intervenção em saúde de agravos sociais, como violência doméstica.",
        "explanation": "Incorreta: A violência doméstica/interpessoal e autoprovocada é agravo de notificação compulsória no SINAN justamente para subsidiar intervenções em saúde pública.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "SIM (Sistema de Informação sobre Mortalidade): alimentado pelas declarações de óbitos; pode utilizar esta base de dados para delimitar o nível de qualidade da saúde em uma região.",
        "explanation": "A alternativa **D** está correta. De acordo com o **Ministério da Saúde (DATASUS)**, o **SIM (Sistema de Informações sobre Mortalidade)** tem como documento-base a **Declaração de Óbito (DO)** e fornece indicadores essenciais (como mortalidade infantil, materna, proporcional por causas e Swaroop-Uemura) amplamente utilizados para avaliar as condições e a qualidade da saúde de uma região.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "SIH (Sistema de Informação Hospitalar): alimentado pelos setores de regulação hospitalar; poderá auxiliar quanto a organização do atendimento ambulatorial dos hospitais.",
        "explanation": "Incorreta: O SIH-SUS é alimentado pela **Autorização de Internação Hospitalar (AIH)** e reflete internações hospitalares (não atendimento ambulatorial, que é registrado no SIA-SUS).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. De acordo com o **Ministério da Saúde (DATASUS)**, o **SIM (Sistema de Informações sobre Mortalidade)** tem como documento-base a **Declaração de Óbito (DO)** e fornece indicadores essenciais (como mortalidade infantil, materna, proporcional por causas e Swaroop-Uemura) amplamente utilizados para avaliar as condições e a qualidade da saúde de uma região.\n- **A) Incorreta:** O SINASC é alimentado pela **Declaração de Nascido Vivo (DNV)**, não pela certidão de nascimento (documento cartorial).\n- **B) Incorreta:** Os óbitos maternos são registrados no SIM (e investigados pelos comitês de mortalidade materna) e são fundamentais — não limitados — para orientar políticas de saúde reprodutiva e planejamento familiar.\n- **C) Incorreta:** A violência doméstica/interpessoal e autoprovocada é agravo de notificação compulsória no SINAN justamente para subsidiar intervenções em saúde pública.\n- **E) Incorreta:** O SIH-SUS é alimentado pela **Autorização de Internação Hospitalar (AIH)** e reflete internações hospitalares (não atendimento ambulatorial, que é registrado no SIA-SUS).",
    "perolaClinica": "A alternativa **D** está correta. De acordo com o **Ministério da Saúde (DATASUS)**, o **SIM (Sistema de Informações sobre Mortalidade)** tem como documento-base a **Declaração de Óbito (DO)** e fornece indicadores…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Fontes alimentadoras e utilidade gerencial dos Sistemas de Informação em Saúde do SUS (SIM, SINASC, SINAN e SIH).",
      "raciocinioChave": "O Sistema de Informações sobre Mortalidade (SIM) é alimentado pelas Declarações de Óbito (DO) e gera indicadores vitais essenciais como mortalidade infantil, materna e proporcional por causas. Esses indicadores permitem ao gestor avaliar as condições sanitárias e a qualidade da atenção à saúde regional.",
      "armadilhaBanca": "Confundir Declaração de Nascido Vivo (DNV) com certidão de nascimento no SINASC ou SIH (AIH/internação) com atendimento ambulatorial (SIA)."
    },
    "mapaDistratores": {
      "A": "O SINASC é alimentado pela Declaração de Nascido Vivo (DNV) emitida nos serviços de saúde, e não pela certidão de nascimento cartorial.",
      "B": "Os óbitos maternos são captados pelo SIM e investigados pelos comitês específicos, sendo altamente estratégicos para nortear políticas de planejamento familiar e assistência obstétrica.",
      "C": "A violência doméstica e interpessoal é agravo de notificação compulsória no SINAN justamente para subsidiar políticas de vigilância e intervenção em saúde pública.",
      "E": "O SIH-SUS é alimentado pela Autorização de Internação Hospitalar (AIH) e monitora internações hospitalares, enquanto a produção ambulatorial é registrada no SIA-SUS."
    }
  },
  {
    "id": "q-uepa-2022-017",
    "code": "Q-UEPA22-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": [
      "tuberculose",
      "abandono-de-tratamento",
      "teste-de-sensibilidade",
      "retratamento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A tuberculose continua sendo infecção comum no Brasil, sobre o abandono do tratamento, o caso abaixo que está caracterizado como abandono e a conduta correta a:",
    "alternativas": [
      {
        "letter": "A",
        "text": "paciente não fez uso de suas medicações por vinte e dois dias, deverá ser classificado como abandono do tratamento, solicitando a culta e teste de sensibilidade, porém não é necessário reiniciar o tratamento.",
        "explanation": "Incorreta: 22 dias (< 30 dias) não configura abandono de tratamento.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "paciente não fez uso das medicações por quarenta e cinco dias, deverá ser classificado como abandono, solicitando a culta e teste de sensibilidade, mas não é necessário reiniciar o tratamento, mantendo o esquema do momento interrompido.",
        "explanation": "Incorreta: Com 45 dias (≥ 30 dias), há abandono e é obrigatório **reiniciar o tratamento do início**, não apenas retomar do ponto interrompido.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "paciente não fez as medicações por trinta e dois dias, não deverá ser classificado como abandono, e não é necessário solicitar a culta e teste de sensibilidade, porém o tratamento deverá ser reiniciado.",
        "explanation": "Incorreta: 32 dias (≥ 30 dias) já configura abandono e exige solicitação de cultura e teste de sensibilidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "paciente não fez as medicações por vinte e quatro dias, não sendo classificado como abandono, porém deverá ser solicitado a culta e teste de sensibilidade, e não reiniciar o tratamento do início.",
        "explanation": "Incorreta: 24 dias (< 30 dias) não é abandono e não exige cultura/TS por critério de abandono; apenas completa-se as doses faltantes.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "paciente não fez as medicações por quarenta e três dias, sendo classificado como abandono, solicitando a culta e teste de sensibilidade, e deverá reiniciar o tratamento do início.",
        "explanation": "A alternativa **E** está correta. Segundo o **Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde, 2019)**, caracteriza-se **abandono de tratamento** quando o paciente deixa de tomar a medicação por **30 dias consecutivos ou mais** após a data prevista para retorno. Nesses casos (reingresso após abandono, como 43 dias sem medicação), deve-se **solicitar cultura com identificação e teste de sensibilidade (TS)** (além do TRM-TB/baciloscopia) e **reiniciar o esquema básico (RIPE) desde o início** (enquanto se aguarda o resultado do TS).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Segundo o **Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde, 2019)**, caracteriza-se **abandono de tratamento** quando o paciente deixa de tomar a medicação por **30 dias consecutivos ou mais** após a data prevista para retorno. Nesses casos (reingresso após abandono, como 43 dias sem medicação), deve-se **solicitar cultura com identificação e teste de sensibilidade (TS)** (além do TRM-TB/baciloscopia) e **reiniciar o esquema básico (RIPE) desde o início** (enquanto se aguarda o resultado do TS).\n- **A) Incorreta:** 22 dias (< 30 dias) não configura abandono de tratamento.\n- **B) Incorreta:** Com 45 dias (≥ 30 dias), há abandono e é obrigatório **reiniciar o tratamento do início**, não apenas retomar do ponto interrompido.\n- **C) Incorreta:** 32 dias (≥ 30 dias) já configura abandono e exige solicitação de cultura e teste de sensibilidade.\n- **D) Incorreta:** 24 dias (< 30 dias) não é abandono e não exige cultura/TS por critério de abandono; apenas completa-se as doses faltantes.",
    "perolaClinica": "A alternativa **E** está correta. Segundo o **Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde, 2019)**, caracteriza-se **abandono de tratamento** quando o paciente deixa de tomar a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critério temporal de abandono do tratamento da tuberculose (≥ 30 dias) e conduta no reingresso.",
      "raciocinioChave": "Pelo Manual do Ministério da Saúde, considera-se abandono de tratamento a interrupção por 30 dias consecutivos ou mais após a data prevista de retorno (como no caso de 43 dias). No reingresso por abandono, é obrigatório solicitar cultura com identificação e teste de sensibilidade, além de reiniciar o esquema básico desde o início.",
      "armadilhaBanca": "Errar o ponto de corte de 30 dias consecutivos para abandono ou achar que basta retomar as doses restantes após abandono confirmado."
    },
    "mapaDistratores": {
      "A": "Interrupção de 22 dias é inferior ao limite de 30 dias consecutivos, portanto não caracteriza abandono de tratamento.",
      "B": "Com 45 dias de interrupção há abandono configurado, o que obriga o reinício completo do esquema terapêutico desde o início, e não a mera continuidade do ponto em que parou.",
      "C": "O afastamento por 32 dias já atinge o critério de ≥ 30 dias para abandono, tornando obrigatória a solicitação de cultura e teste de sensibilidade.",
      "D": "Vinte e quatro dias sem medicação não configuram abandono, devendo-se apenas investigar o motivo da falta e completar as doses restantes sem exigir protocolo de reingresso por abandono."
    }
  },
  {
    "id": "q-uepa-2022-018",
    "code": "Q-UEPA22-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Diabetes Mellitus - Diagnóstico e Tratamento",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-diabetes-mellitus-diagnostico-e-tratamento",
    "tags": [
      "diabetes-mellitus",
      "hipoglicemiantes-orais",
      "tratamento-farmacologico",
      "atencao-primaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com DM2 vem a UBS para reavaliação, fazendo uso de Metformina e Glibenclamida, doses máximas em uso destas medicações há sete anos, faz dieta recomendada, porém apresenta polidipsia e nocturia há vinte dias, nega adesão a atividade física regular. A conduta que deverá ser tomada, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "se a HbA1c > 8, assim deverá iniciar insulinoterapia.",
        "explanation": "Incorreta: Pelas diretrizes da SBD, HbA1c > 8% isoladamente em terapia dupla não impõe insulinização obrigatória imediata (pode-se usar terapia tripla oral ou GLP-1; insulina é preferencial se sintomas catabólicos intensos ou HbA1c > 9–10%).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "orientar que é normal a nocturia e polidipsia e persistir na dieta e medicações.",
        "explanation": "Incorreta: Polidipsia e noctúria são sintomas clássicos de hiperglicemia descompensada e jamais devem ser considerados normais.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "incluir um terceiro hipoglicemiante oral, independente de exames laboratoriais.",
        "explanation": "Incorreta: A conduta exige revisar adesão, hábitos de vida e solicitar exames laboratoriais (glicemia/HbA1c/função renal), não prescrever independentemente de exames.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "se a HbA1c > 7,0 deverá iniciar insulinoterapia, independente de sintomas.",
        "explanation": "Incorreta: HbA1c > 7,0% sem sintomas graves não indica início obrigatório de insulina como primeira etapa após terapia dupla.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "rever uso adequado das medicações, porém já instituir um terceiro hipoglicemiante oral.",
        "explanation": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. No manejo do **Diabetes Mellitus tipo 2 na APS** (**Diretriz SBD / Ministério da Saúde — Caderno de Atenção Básica nº 36**), diante de paciente em terapia dupla oral (metformina + sulfonilureia em doses máximas) evoluindo com sintomas de descompensação glicêmica (polidipsia e noctúria), é fundamental **revisar a adesão e a forma correta de uso das medicações** e intensificar o tratamento (na visão da banca, associando um **terceiro agente oral** enquanto se avaliam exames complementares e resposta clínica; cabe notar que, se houver sintomas catabólicos francos ou HbA1c ≥ 9–10%, a insulinoterapia basal também é opção clássica).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. No manejo do **Diabetes Mellitus tipo 2 na APS** (**Diretriz SBD / Ministério da Saúde — Caderno de Atenção Básica nº 36**), diante de paciente em terapia dupla oral (metformina + sulfonilureia em doses máximas) evoluindo com sintomas de descompensação glicêmica (polidipsia e noctúria), é fundamental **revisar a adesão e a forma correta de uso das medicações** e intensificar o tratamento (na visão da banca, associando um **terceiro agente oral** enquanto se avaliam exames complementares e resposta clínica; cabe notar que, se houver sintomas catabólicos francos ou HbA1c ≥ 9–10%, a insulinoterapia basal também é opção clássica).\n- **A) Incorreta:** Pelas diretrizes da SBD, HbA1c > 8% isoladamente em terapia dupla não impõe insulinização obrigatória imediata (pode-se usar terapia tripla oral ou GLP-1; insulina é preferencial se sintomas catabólicos intensos ou HbA1c > 9–10%).\n- **B) Incorreta:** Polidipsia e noctúria são sintomas clássicos de hiperglicemia descompensada e jamais devem ser considerados normais.\n- **C) Incorreta:** A conduta exige revisar adesão, hábitos de vida e solicitar exames laboratoriais (glicemia/HbA1c/função renal), não prescrever independentemente de exames.\n- **D) Incorreta:** HbA1c > 7,0% sem sintomas graves não indica início obrigatório de insulina como primeira etapa após terapia dupla.",
    "perolaClinica": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. No manejo do **Diabetes Mellitus tipo 2 na APS** (**Diretriz SBD / Ministério da Saúde — Caderno de Atenção Básica nº 36**), diante…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escalonamento terapêutico no DM2 sintomático em uso de terapia dupla oral máxima na Atenção Primária.",
      "raciocinioChave": "Diante de sintomas hiperglicêmicos (polidipsia e noctúria) em paciente usando dose máxima de metformina e glibenclamida, deve-se checar a adesão correta às medicações e intensificar o tratamento. Na lógica do gabarito oficial da banca, associa-se um terceiro antidiabético oral após revisão do uso adequado dos fármacos.",
      "armadilhaBanca": "Indicar insulinização automática com HbA1c > 7% ou > 8% antes de checar adesão e considerar o terceiro antidiabético oral na APS."
    },
    "mapaDistratores": {
      "A": "Valores de HbA1c > 8% em terapia dupla não impõem insulinização obrigatória imediata se houver opção de terapia tripla oral ou agonista de GLP-1 antes de falência insulínica franca.",
      "B": "Polidipsia e noctúria são sintomas clássicos de descompensação hiperglicêmica e exigem ajuste terapêutico, nunca conduta expectante.",
      "C": "Embora o acréscimo de terceiro agente possa ser indicado, a conduta clínica adequada exige revisar adesão, hábitos de vida e avaliação laboratorial, não prescrever às cegas.",
      "D": "HbA1c > 7,0% sem sintomas catabólicos graves ou falência clínica não obriga o início imediato de insulina como única opção após dois fármacos orais."
    }
  },
  {
    "id": "q-uepa-2022-019",
    "code": "Q-UEPA22-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "papanicolaou",
      "rastreamento",
      "cancer-de-colo-uterino",
      "saude-da-adolescente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 17 anos comparece a Unidade básica para consulta de rotina, relata estar com parceiro sexual fixo, tendo tido duas relações desprotegidas, nega uso de anticoncepcionais hormonais, e gostaria de fazer o preventivo. Neste caso, deve-se proceder:",
    "alternativas": [
      {
        "letter": "A",
        "text": "não realizar o atendimento já que a paciente é menor de idade.",
        "explanation": "Incorreta: O adolescente tem direito legal e ético (ECA e Art. 74 do CEM) ao atendimento em saúde reprodutiva sem necessidade de presença dos pais.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "orientar o uso de preservativos, indicar a vacinação de HPV caso não tenha feito e iniciar o rastreio de ISTs, além da coleta da colpocitologia oncótica.",
        "explanation": "Incorreta: Não está indicada a coleta de colpocitologia oncótica aos 17 anos (e a vacina HPV no PNI de rotina em 2022 era até 14 anos, salvo grupos especiais).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "orientar a paciente praticar a privação sexual, já que, é muito jovem para iniciar sua vida sexual.",
        "explanation": "Incorreta: Conduta paternalista e contrária às diretrizes de saúde sexual e reprodutiva do MS.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "iniciar colpocitologia oncótica, assim como rastreio para as ISTs, além de orientar o uso de preservativos e uso oral de anticoncepcional.",
        "explanation": "Incorreta: Contraindica-se iniciar rastreamento citológico do colo uterino antes dos 25 anos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "orientar a paciente o uso de preservativos, fazer o rastreio de ISTs e explicar que ainda não tem idade para iniciar o rastreio da colpocitologia oncótica.",
        "explanation": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)** e pelo **PCDT de ISTs**, adolescentes têm direito ao atendimento autônomo e sigiloso na UBS (mesmo sem acompanhante), devendo receber orientação sobre **uso de preservativos**, planejamento reprodutivo e **rastreamento de ISTs** (após relações desprotegidas). Contudo, a **colpocitologia oncótica (preventivo) só deve ser iniciada aos 25 anos** em mulheres que já iniciaram atividade sexual, não sendo indicada aos 17 anos pelo risco de sobrediagnóstico e sobretratamento de lesões de regressão espontânea.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)** e pelo **PCDT de ISTs**, adolescentes têm direito ao atendimento autônomo e sigiloso na UBS (mesmo sem acompanhante), devendo receber orientação sobre **uso de preservativos**, planejamento reprodutivo e **rastreamento de ISTs** (após relações desprotegidas). Contudo, a **colpocitologia oncótica (preventivo) só deve ser iniciada aos 25 anos** em mulheres que já iniciaram atividade sexual, não sendo indicada aos 17 anos pelo risco de sobrediagnóstico e sobretratamento de lesões de regressão espontânea.\n- **A) Incorreta:** O adolescente tem direito legal e ético (ECA e Art. 74 do CEM) ao atendimento em saúde reprodutiva sem necessidade de presença dos pais.\n- **B) Incorreta:** Não está indicada a coleta de colpocitologia oncótica aos 17 anos (e a vacina HPV no PNI de rotina em 2022 era até 14 anos, salvo grupos especiais).\n- **C) Incorreta:** Conduta paternalista e contrária às diretrizes de saúde sexual e reprodutiva do MS.\n- **D) Incorreta:** Contraindica-se iniciar rastreamento citológico do colo uterino antes dos 25 anos.",
    "perolaClinica": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)** e pelo **PCDT de ISTs**, adolescentes têm direito ao atendimento autônomo e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Idade de início do rastreamento do câncer do colo do útero e abordagem de saúde sexual na adolescência.",
      "raciocinioChave": "Adolescentes têm direito ao atendimento autônomo e sigiloso para orientação contraceptiva, estímulo ao uso de preservativos e rastreamento de ISTs após relações desprotegidas. Entretanto, segundo as diretrizes do INCA/MS, a colpocitologia oncótica só deve ser iniciada aos 25 anos em mulheres com vida sexual ativa.",
      "armadilhaBanca": "Coletar colpocitologia oncótica aos 17 anos pelo início da atividade sexual ou exigir presença dos pais para atender adolescente na UBS."
    },
    "mapaDistratores": {
      "A": "Adolescentes têm direito ético e legal ao atendimento em saúde sexual e reprodutiva de forma sigilosa e autônoma, independentemente da presença dos responsáveis.",
      "B": "A coleta de colpocitologia oncótica está contraindicada antes dos 25 anos pelo risco de sobrediagnóstico e sobretratamento de lesões regressivas por HPV.",
      "C": "Recomendar abstinência como única conduta fere os princípios de acolhimento, autonomia e redução de danos das diretrizes de saúde do adolescente.",
      "D": "Embora o rastreio de ISTs e a anticoncepção sejam pertinentes, é incorreto iniciar a coleta do exame citopatológico aos 17 anos."
    }
  },
  {
    "id": "q-uepa-2022-020",
    "code": "Q-UEPA22-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "imunizacao",
      "calendario-vacinal",
      "pni",
      "vacinas-em-atraso"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A mãe trouxe filho de oito meses, para atualizar o calendário vacinal, que ficou desatualizado por conta da pandemia COVID-19, relata que a última vacina foi a meningocócica aos três meses. Neste caso, a melhor decisão a ser tomada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a criança deverá realizar pentavalente, VIP, pneumocócica e meningocócica segunda dose.",
        "explanation": "A alternativa **A** está correta. Segundo o **Programa Nacional de Imunizações (PNI — Ministério da Saúde)**, se a última vacina recebida foi a 1ª dose da meningocócica C aos 3 meses, a criança de **8 meses** está em atraso com as segundas doses dos 4 meses (**Pentavalente**, **VIP** e **Pneumocócica 10-valente**) e dos 5 meses (**Meningocócica C**). A vacina **VORH (rotavírus)** **NÃO deve ser administrada** aos 8 meses, pois a idade máxima para a 2ª dose é **7 meses e 29 dias** (pelo risco aumentado de intussuscepção intestinal). Além disso, no esquema primário (2, 4 e 6 meses) utiliza-se **VIP** (inativada), e não VOP.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "a criança deverá realizar rotavírus, pentavalente, VIP, pneumocócica e meningocócica segunda dose.",
        "explanation": "Incorreta: Inclui vacina de rotavírus, contraindicada após 7 meses e 29 dias.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a criança deverá realizar rotavírus, pentavalente, VOP, pneumocócica e meningocócica segunda dose.",
        "explanation": "Incorreta: Inclui rotavírus (fora da faixa etária) e VOP (que era usada apenas nos reforços de 15 meses e 4 anos, não na 2ª dose).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a criança deverá realizar rotavírus, VIP, pneumocócica e meningocócica segunda dose.",
        "explanation": "Incorreta: Inclui rotavírus e omite a 2ª dose da pentavalente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a criança deverá realizar pentavalente, VOP, pneumocócica e meningocócica segunda dose.",
        "explanation": "Incorreta: Indica VOP em vez de VIP para a 2ª dose do esquema primário contra poliomielite.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Segundo o **Programa Nacional de Imunizações (PNI — Ministério da Saúde)**, se a última vacina recebida foi a 1ª dose da meningocócica C aos 3 meses, a criança de **8 meses** está em atraso com as segundas doses dos 4 meses (**Pentavalente**, **VIP** e **Pneumocócica 10-valente**) e dos 5 meses (**Meningocócica C**). A vacina **VORH (rotavírus)** **NÃO deve ser administrada** aos 8 meses, pois a idade máxima para a 2ª dose é **7 meses e 29 dias** (pelo risco aumentado de intussuscepção intestinal). Além disso, no esquema primário (2, 4 e 6 meses) utiliza-se **VIP** (inativada), e não VOP.\n- **B) Incorreta:** Inclui vacina de rotavírus, contraindicada após 7 meses e 29 dias.\n- **C) Incorreta:** Inclui rotavírus (fora da faixa etária) e VOP (que era usada apenas nos reforços de 15 meses e 4 anos, não na 2ª dose).\n- **D) Incorreta:** Inclui rotavírus e omite a 2ª dose da pentavalente.\n- **E) Incorreta:** Indica VOP em vez de VIP para a 2ª dose do esquema primário contra poliomielite.",
    "perolaClinica": "A alternativa **A** está correta. Segundo o **Programa Nacional de Imunizações (PNI — Ministério da Saúde)**, se a última vacina recebida foi a 1ª dose da meningocócica C aos 3 meses, a criança de **8 meses** está em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Atualização de esquema vacinal em atraso aos 8 meses segundo o PNI e limite etário da vacina rotavírus.",
      "raciocinioChave": "Com a última vacina registrada aos 3 meses (1ª dose meningocócica C), o lactente de 8 meses está em atraso com as segundas doses dos 4 meses (pentavalente, VIP e pneumocócica 10-valente) e dos 5 meses (meningocócica C). A vacina rotavírus não deve ser aplicada aos 8 meses por já ter ultrapassado a idade máxima permitida pelo PNI (7 meses e 29 dias).",
      "armadilhaBanca": "Administrar vacina rotavírus fora da idade limite (após 7 meses e 29 dias) ou indicar VOP em vez de VIP na segunda dose do esquema primário."
    },
    "mapaDistratores": {
      "B": "A vacina oral de rotavírus humano (VORH) é contraindicada após 7 meses e 29 dias devido ao risco aumentado de invaginação intestinal.",
      "C": "Além de incluir rotavírus fora da faixa etária permitida, indica VOP em vez de VIP para a segunda dose do esquema básico contra poliomielite.",
      "D": "Administra rotavírus após a idade limite e omite a segunda dose pendente da vacina pentavalente.",
      "E": "Substitui erroneamente a VIP pela VOP na segunda dose do esquema primário contra poliomielite."
    }
  },
  {
    "id": "q-uepa-2022-021",
    "code": "Q-UEPA22-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Hemoterapia e Reações Transfusionais",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-hemoterapia-e-reacoes-transfusionais",
    "tags": [
      "hemoterapia",
      "concentrado-de-hemacias",
      "transfusao-sanguinea",
      "hemoglobina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Sobre a indicação de transfusão de hemocomponentes, é INCORRETO afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "em geral, a transfusão de uma unidade de concentrado de hemácias aumenta a dosagem de hemoglobina em 1 mg/dL, caso não haja sangramento ativo.",
        "explanation": "Incorreta (causa de anulação): O incremento esperado por 1 unidade de concentrado de hemácias em adulto é de aproximadamente **1 g/dL** de hemoglobina (e não 1 mg/dL).",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "não havendo contraindicações, e na inexistência de sangramento ativo, a transfusão de plaquetas está indicada, profilaticamente, em valores < 60.000/L, segundo o Ministério da Saúde.",
        "explanation": "Incorreta (gabarito pretendido / causa de anulação): Pelo Ministério da Saúde, o gatilho profilático padrão de plaquetas sem sangramento ativo é **< 10.000/mm³** (e não < 60.000/L).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "em trombocitopenias induzidas por heparina, as transfusões de plaquetas aumentam consideravelmente o risco de trombose.",
        "explanation": "Correta: Na trombocitopenia induzida por heparina (TIH), a transfusão de plaquetas é contraindicada rotineiramente por elevar o risco de trombose arterial/venosa.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "em neurocirurgias e cirurgias oftalmológicas, é recomendado que a contagem de plaquetas esteja em torno de 100.000/L, imediatamente antes do procedimento.",
        "explanation": "Incorreta na unidade (causa de anulação): O alvo pré-operatório em neurocirurgias e cirurgias oftalmológicas é **100.000/mm³** (não 100.000/L).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "hospitais que atendam pacientes vítimas de trauma devem ter protocolo de transfusão maciça vigente.",
        "explanation": "Correta: O ATLS e as diretrizes brasileiras recomendam protocolos institucionais de transfusão maciça em centros que atendem trauma.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** A questão pedia a alternativa **INCORRETA**, mas apresentou erros graves de unidade e de conceito em mais de uma alternativa segundo o **Guia para Uso de Hemocomponentes (Ministério da Saúde)**: em **B** (gabarito pretendido), a transfusão profilática de plaquetas na ausência de sangramento ativo é indicada com plaquetas **< 10.000/mm³** (ou < 20.000/mm³ se febre/infecção), e não < 60.000; além disso, **A** traz unidade incorreta (**1 mg/dL** em vez de **1 g/dL**) e **B** e **D** trazem unidade incorreta (**/L** em vez de **/mm³** ou **/µL**), gerando múltiplas incorreções e motivando a anulação.\n- **A) Incorreta (causa de anulação):** O incremento esperado por 1 unidade de concentrado de hemácias em adulto é de aproximadamente **1 g/dL** de hemoglobina (e não 1 mg/dL).\n- **B) Incorreta (gabarito pretendido / causa de anulação):** Pelo Ministério da Saúde, o gatilho profilático padrão de plaquetas sem sangramento ativo é **< 10.000/mm³** (e não < 60.000/L).\n- **C) Correta:** Na trombocitopenia induzida por heparina (TIH), a transfusão de plaquetas é contraindicada rotineiramente por elevar o risco de trombose arterial/venosa.\n- **D) Incorreta na unidade (causa de anulação):** O alvo pré-operatório em neurocirurgias e cirurgias oftalmológicas é **100.000/mm³** (não 100.000/L).\n- **E) Correta:** O ATLS e as diretrizes brasileiras recomendam protocolos institucionais de transfusão maciça em centros que atendem trauma.",
    "perolaClinica": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** A questão pedia a alternativa **INCORRETA**, mas apresentou erros graves de unidade e de conceito em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2022-022",
    "code": "Q-UEPA22-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "emergencia-hipertensiva",
      "encefalopatia-hipertensiva",
      "fundo-de-olho",
      "lesao-de-orgao-alvo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, masculino, 58 anos, trazido pelo SAMU com história de cefaleia, confusão mental e crise convulsiva há cerca de 1 hora em seu domicílio. No momento, com cefaleia persistente, apresentando os seguintes sinais vitais: PAS 215 mmHg, PAD 120 mmHg, FC 93 bpm, FR 18 irpm, Glicemia Capilar 83 mg/dL, Sat. O2 97% em ar ambiente. No exame físico, sem déficits neurológicos focais, consciente e orientado, Escala de Coma de Glasgow = 15, pupilas isofotorreagentes. Ausculta respiratória: murmúrios vesiculares presentes, sem ruídos adventícios. Ausculta cardíaca: Bulhas cardíacas normofonéticas, ritmo cardíaco regular. A abordagem mais adequada, no departamento de emergência, deste caso deve incluir:",
    "alternativas": [
      {
        "letter": "A",
        "text": "exame de fundo de olho.",
        "explanation": "A alternativa **A** está correta. O paciente apresenta quadro clássico de **emergência hipertensiva** com provável **encefalopatia hipertensiva** (PA 215×120 mmHg, cefaleia, confusão mental e crise convulsiva, sem déficit focal). Conforme as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)**, a avaliação inicial na emergência deve obrigatoriamente incluir o **exame de fundo de olho (fundoscopia)** para pesquisar lesão de órgão-alvo aguda (retinopatia hipertensiva graus III/IV — hemorragias, exsudatos e papiledema), além de neuroimagem e controle pressórico parenteral cuidadoso (ex.: nitroprussiato de sódio).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "monitorização multiparâmetros, oxigenoterapia suplementar com intubação traqueal.",
        "explanation": "Incorreta: O paciente encontra-se em Glasgow 15, eupneico (FR 18 irpm) e com SpO2 97% em ar ambiente, não havendo qualquer indicação de intubação orotraqueal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "infusão de noradrenalina e furosemida endovenosa.",
        "explanation": "Incorreta: Noradrenalina é vasopressor (contraindicado na hipertensão grave) e furosemida não é o anti-hipertensivo de escolha na encefalopatia hipertensiva sem hipervolemia.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "glicose a 50% 40 mL.",
        "explanation": "Incorreta: A glicemia capilar está normal (83 mg/dL), sem indicação de glicose hipertônica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "fenitoína 30-45 mg/kg endovenoso.",
        "explanation": "Incorreta: A dose de ataque da fenitoína no estado de mal epiléptico é **15–20 mg/kg** (não 30–45 mg/kg, que seria tóxica), e o paciente já está pós-crise em Glasgow 15.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O paciente apresenta quadro clássico de **emergência hipertensiva** com provável **encefalopatia hipertensiva** (PA 215×120 mmHg, cefaleia, confusão mental e crise convulsiva, sem déficit focal). Conforme as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)**, a avaliação inicial na emergência deve obrigatoriamente incluir o **exame de fundo de olho (fundoscopia)** para pesquisar lesão de órgão-alvo aguda (retinopatia hipertensiva graus III/IV — hemorragias, exsudatos e papiledema), além de neuroimagem e controle pressórico parenteral cuidadoso (ex.: nitroprussiato de sódio).\n- **B) Incorreta:** O paciente encontra-se em Glasgow 15, eupneico (FR 18 irpm) e com SpO2 97% em ar ambiente, não havendo qualquer indicação de intubação orotraqueal.\n- **C) Incorreta:** Noradrenalina é vasopressor (contraindicado na hipertensão grave) e furosemida não é o anti-hipertensivo de escolha na encefalopatia hipertensiva sem hipervolemia.\n- **D) Incorreta:** A glicemia capilar está normal (83 mg/dL), sem indicação de glicose hipertônica.\n- **E) Incorreta:** A dose de ataque da fenitoína no estado de mal epiléptico é **15–20 mg/kg** (não 30–45 mg/kg, que seria tóxica), e o paciente já está pós-crise em Glasgow 15.",
    "perolaClinica": "A alternativa **A** está correta. O paciente apresenta quadro clássico de **emergência hipertensiva** com provável **encefalopatia hipertensiva** (PA 215×120 mmHg, cefaleia, confusão mental e crise convulsiva, sem…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Avaliação obrigatória de lesão de órgão-alvo (fundoscopia) na suspeita de encefalopatia hipertensiva.",
      "raciocinioChave": "O quadro de PA 215×120 mmHg associada a cefaleia, confusão mental e convulsão sem déficit focal sugere encefalopatia hipertensiva (emergência hipertensiva). A avaliação inicial na emergência deve incluir o exame de fundo de olho para pesquisar papiledema, hemorragias ou exsudatos retinianos que confirmam lesão aguda de órgão-alvo.",
      "armadilhaBanca": "Indicar intubação em paciente em Glasgow 15 e SpO2 normal, administrar vasopressor ou usar dose tóxica de fenitoína após crise já resolvida."
    },
    "mapaDistratores": {
      "B": "O paciente está em Glasgow 15, eupneico e com SpO2 de 97% em ar ambiente, não havendo indicação clínica de oxigenoterapia invasiva ou intubação traqueal.",
      "C": "Noradrenalina é um vasopressor formalmente contraindicado na crise hipertensiva, e furosemida não é anti-hipertensivo de escolha na encefalopatia hipertensiva sem hipervolemia.",
      "D": "A glicemia capilar é de 83 mg/dL (normoglicemia), descartando indicação de glicose hipertônica endovenosa.",
      "E": "A dose de ataque padrão da fenitoína é 15 a 20 mg/kg (30–45 mg/kg é tóxica), e o paciente já se encontra alerta em período pós-ictal sem estado de mal epiléptico."
    }
  },
  {
    "id": "q-uepa-2022-023",
    "code": "Q-UEPA22-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Asma na Infância e Fibrose Cística",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica",
    "tags": [
      "asma",
      "crise-asmatica",
      "peak-flow",
      "emergencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, feminino, 14 anos, dá entrada acompanhada de genitora no departamento de emergência com história de dispnéia e tosse seca há 2 dias. Relata piora de mal estar respiratório nas últimas horas, com dificuldade para deambular e falar. Nega febre. Ao exame físico, evidenciou-se: ruim estado geral, acianótica, afebril, PAS 114 mmHg, PAD 68 mmHg, FC 102 bpm, FR 24 irpm, Glicemia Capilar 97 mg/dL, Sat. O2 93% em ar ambiente. Consciente e orientada, Glasgow = 15. Ausculta respiratória: murmúrios vesiculares diminuídos globalmente, com sibilos expiratórios esparsos, sem tiragem intercostal. Pele e anexos sem alterações. Relata histórico de asma sem acompanhamento. Nega uso de medicamentos de uso contínuo. Considerando o quadro clínico acima, a abordagem clínica mais adequada:",
    "alternativas": [
      {
        "letter": "A",
        "text": "epinefrina intramuscular é recomendada, mesmo na ausência de anafilaxia.",
        "explanation": "Incorreta: A epinefrina IM **não** é recomendada de rotina na exacerbação asmática na ausência de anafilaxia ou angioedema.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "é uma paciente em crise asmática grave e a infusão de sulfato de magnésio deve ser instituída na urgência.",
        "explanation": "Incorreta: A paciente apresenta crise leve a moderada (FC 102, FR 24, SpO2 93%, Glasgow 15, sem tiragem); o sulfato de magnésio EV não é terapia inicial de rotina e fica reservado para crises graves/refratárias à terapia inicial.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aminofilina na dose de 240 mg endovenoso é uma opção, caso a saturação de oxigênio permaneça menor que 94% em uso de catéter nasal de oxigênio.",
        "explanation": "Incorreta: A aminofilina EV não é mais recomendada pela GINA na exacerbação aguda de asma devido ao estreito índice terapêutico e baixa eficácia adicional.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "mesmo na ausência de evidências de infecção, é indicada antibioticoterapia com ceftriaxona 2g endovenoso de imediato.",
        "explanation": "Incorreta: Antibióticos não são indicados de rotina na crise asmática sem evidência de infecção bacteriana (ex.: pneumonia confirmada).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "aferição do pico de fluxo (peak flow) pode ser utilizada na reavaliação a cada hora.",
        "explanation": "A alternativa **E** está correta. Segundo as diretrizes da **GINA (Global Initiative for Asthma)** e da **SBPT**, o manejo inicial da exacerbação asmática envolve SABA inalatório, corticoide sistêmico precoce e oxigenoterapia para manter SpO2 93–95% (94–98% em crianças), com **reavaliação clínica e objetiva da função pulmonar (pico de fluxo expiratório — *peak flow* / PFE) após 1 hora e periodicamente** para guiar resposta ao tratamento e decisão de alta ou internação.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Segundo as diretrizes da **GINA (Global Initiative for Asthma)** e da **SBPT**, o manejo inicial da exacerbação asmática envolve SABA inalatório, corticoide sistêmico precoce e oxigenoterapia para manter SpO2 93–95% (94–98% em crianças), com **reavaliação clínica e objetiva da função pulmonar (pico de fluxo expiratório — *peak flow* / PFE) após 1 hora e periodicamente** para guiar resposta ao tratamento e decisão de alta ou internação.\n- **A) Incorreta:** A epinefrina IM **não** é recomendada de rotina na exacerbação asmática na ausência de anafilaxia ou angioedema.\n- **B) Incorreta:** A paciente apresenta crise leve a moderada (FC 102, FR 24, SpO2 93%, Glasgow 15, sem tiragem); o sulfato de magnésio EV não é terapia inicial de rotina e fica reservado para crises graves/refratárias à terapia inicial.\n- **C) Incorreta:** A aminofilina EV não é mais recomendada pela GINA na exacerbação aguda de asma devido ao estreito índice terapêutico e baixa eficácia adicional.\n- **D) Incorreta:** Antibióticos não são indicados de rotina na crise asmática sem evidência de infecção bacteriana (ex.: pneumonia confirmada).",
    "perolaClinica": "A alternativa **E** está correta. Segundo as diretrizes da **GINA (Global Initiative for Asthma)** e da **SBPT**, o manejo inicial da exacerbação asmática envolve SABA inalatório, corticoide sistêmico precoce e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Monitorização objetiva seriada com pico de fluxo expiratório (peak flow) na crise asmática aguda.",
      "raciocinioChave": "Na exacerbação aguda de asma leve a moderada (sem tiragem, SpO2 93%, Glasgow 15), o manejo baseia-se em broncodilatador SABA, corticoide sistêmico e oxigênio se necessário. Conforme a GINA, a aferição seriada do pico de fluxo expiratório (a cada hora) é recomendada para avaliar objetivamente a resposta ao tratamento e definir alta ou internação.",
      "armadilhaBanca": "Indicar epinefrina IM, aminofilina EV, antibiótico empírico sem infecção ou magnésio de rotina em crise asmática leve a moderada."
    },
    "mapaDistratores": {
      "A": "A epinefrina intramuscular não é indicada de rotina na crise asmática isolada, restringindo-se a quadros associados a anafilaxia ou angioedema grave.",
      "B": "Os sinais vitais e a ausência de tiragem configuram crise leve a moderada, não havendo indicação inicial de sulfato de magnésio EV (reservado a crises graves ou refratárias).",
      "C": "A aminofilina endovenosa foi proscrita da rotina pela GINA devido ao estreito índice terapêutico, alta toxicidade e ausência de benefício adicional sobre SABA e corticoide.",
      "D": "Antibioticoterapia empírica não deve ser prescrita na exacerbação asmática na ausência de evidência clínica ou radiológica de infecção bacteriana."
    }
  },
  {
    "id": "q-uepa-2022-024",
    "code": "Q-UEPA22-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Pneumonia Adquirida na Comunidade e Hospitalar",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-pneumonia-adquirida-na-comunidade-e-hospitalar",
    "tags": [
      "pneumonia-adquirida-na-comunidade",
      "radiografia-de-torax",
      "diagnostico-de-imagem"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Na abordagem da pneumonia bacteriana no departamento de emergência pode ser recomendado:",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar radiografia de tórax para os doentes que não tenham contra-indicações à radiação.",
        "explanation": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade (SBPT)** e **IDSA/ATS**, a **radiografia de tórax** (PA e perfil) é o exame de imagem padrão no departamento de emergência para confirmar o diagnóstico (infiltrado pulmonar novo), avaliar extensão/complicações (derrame pleural, cavitação) e excluir diagnósticos diferenciais, respeitando-se contraindicações relativas à radiação.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "utilizar o escore CURB-65 para predizer o risco de o paciente necessitar de suporte ventilação mecânica.",
        "explanation": "Incorreta: O escore **CURB-65** estima **mortalidade em 30 dias** e orienta o local de tratamento (ambulatorial, enfermaria ou UTI), mas **não** prediz especificamente necessidade de ventilação mecânica (para isso há escores como SMART-COP ou critérios menores/maiores da IDSA/ATS).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "prescrever antibioticoterapia para pneumonias não complicadas por pelo menos 10 dias.",
        "explanation": "Incorreta: A duração recomendada para PAC não complicada é de **5 a 7 dias** (desde que haja estabilidade clínica), e não \"pelo menos 10 dias\".",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "em razão da alta prevalência de infecção por M. tuberculosis no Brasil, a prescrição de quinolona respiratória deve ser primeira opção.",
        "explanation": "Incorreta: Justamente pela alta prevalência de tuberculose no Brasil, **evita-se** quinolona respiratória como 1ª escolha empírica indiscriminada, pois pode mascarar o quadro e induzir resistência de *M. tuberculosis*.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "prescrever corticoide endovenoso em pacientes com pneumonia grave, mesmo na ausência de choque refratário.",
        "explanation": "Incorreta: Pelas diretrizes IDSA/ATS 2019 e SBPT vigentes à época da prova (2022), corticoides sistêmicos não eram recomendados de rotina na PAC, restringindo-se a pacientes com **choque séptico refratário**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade (SBPT)** e **IDSA/ATS**, a **radiografia de tórax** (PA e perfil) é o exame de imagem padrão no departamento de emergência para confirmar o diagnóstico (infiltrado pulmonar novo), avaliar extensão/complicações (derrame pleural, cavitação) e excluir diagnósticos diferenciais, respeitando-se contraindicações relativas à radiação.\n- **B) Incorreta:** O escore **CURB-65** estima **mortalidade em 30 dias** e orienta o local de tratamento (ambulatorial, enfermaria ou UTI), mas **não** prediz especificamente necessidade de ventilação mecânica (para isso há escores como SMART-COP ou critérios menores/maiores da IDSA/ATS).\n- **C) Incorreta:** A duração recomendada para PAC não complicada é de **5 a 7 dias** (desde que haja estabilidade clínica), e não \"pelo menos 10 dias\".\n- **D) Incorreta:** Justamente pela alta prevalência de tuberculose no Brasil, **evita-se** quinolona respiratória como 1ª escolha empírica indiscriminada, pois pode mascarar o quadro e induzir resistência de *M. tuberculosis*.\n- **E) Incorreta:** Pelas diretrizes IDSA/ATS 2019 e SBPT vigentes à época da prova (2022), corticoides sistêmicos não eram recomendados de rotina na PAC, restringindo-se a pacientes com **choque séptico refratário**.",
    "perolaClinica": "A alternativa **A** está correta. Conforme as **Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade (SBPT)** e **IDSA/ATS**, a **radiografia de tórax** (PA e perfil) é o exame de imagem padrão no departamento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta diagnóstica e terapêutica baseada em evidências na pneumonia adquirida na comunidade no pronto-socorro.",
      "raciocinioChave": "Pelas diretrizes da SBPT e IDSA/ATS, a radiografia de tórax é o exame padrão na emergência para confirmar o infiltrado pulmonar, avaliar complicações e afastar diagnósticos diferenciais. Sua realização é recomendada a todos os pacientes suspeitos, respeitando eventuais contraindicações à radiação.",
      "armadilhaBanca": "Confundir a finalidade do CURB-65 (mortalidade/local de manejo vs. ventilação mecânica) ou indicar quinolona respiratória como 1ª escolha empírica no Brasil."
    },
    "mapaDistratores": {
      "B": "O escore CURB-65 prediz mortalidade em 30 dias para orientar o local de tratamento (ambulatorial, enfermaria ou UTI), e não especificamente a necessidade de ventilação mecânica.",
      "C": "A duração recomendada de antibioticoterapia para pneumonia adquirida na comunidade não complicada é de 5 a 7 dias após estabilidade clínica, e não pelo menos 10 dias.",
      "D": "Justamente pela elevada endemicidade da tuberculose no Brasil, evita-se o uso indiscriminado de quinolonas respiratórias como primeira escolha para não mascarar TB e gerar resistência.",
      "E": "Na época das diretrizes vigentes à prova (IDSA/ATS 2019 e SBPT), corticoides sistêmicos não eram recomendados de rotina na PAC grave sem choque séptico refratário."
    }
  },
  {
    "id": "q-uepa-2022-025",
    "code": "Q-UEPA22-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hemorragia Digestiva Alta",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hemorragia-digestiva-alta",
    "tags": [
      "hemorragia-digestiva-alta",
      "endoscopia-digestiva-alta",
      "varizes-esofagicas",
      "cirrose-hepatica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, masculino, 48 anos, pessoa em situação de rua, é trazido para atendimento pelo SAMU após ser encontrado desacordado por populares próximo ao Bar do Parque. Imediatamente após a entrada na unidade de graves, o paciente vomita restos alimentares misturados com laivos de sangue. Ao exame físico: paciente emagrecido, desidratado, ictérico, acianótico, mucosas hipocoradas. Consciente e desorientado em tempo e espaço, Glasgow = 13. Ausculta respiratória: murmúrios vesiculares presentes, bilateralmente, com estertor crepitante em base direita. Ausculta cardíaca: bulhas normofonéticas, ritmo regular. Abdome: semigloboso, flácido, indolor à palpação, piparote positivo. Extremidades: sem edema. Sinais vitais: PAS 97 mmHg, PAD 55 mmHg, PAM 69, FC 101 bpm, FR 20 irpm, Glicemia Capilar 74 mg/dL, Sat. O2 94% em ar ambiente, temperatura axilar 37,3°C. Considerando-se o quadro acima e a melhor abordagem inicial do paciente no departamento de emergência, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve ser prescrita furosemida 20 mg endovenosa após a expansão volêmica em paciente ascítico com choque séptico.",
        "explanation": "Incorreta: Diuréticos de alça (furosemida) são contraindicados na fase aguda de choque séptico/hipovolêmico, podendo agravar hipoperfusão e lesão renal aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o paciente está em choque hipovolêmico, e deve receber noradrenalina endovenosa antes da ressuscitação volêmica com coloide.",
        "explanation": "Incorreta: A ressuscitação volêmica inicial (com cristaloides balanceados ou SF 0,9%, e não coloides como primeira linha) precede o uso de vasopressores no choque hipovolêmico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "história de doença hepática ou cardíaca indicam a realização de endoscopia digestiva alta, preferencialmente nas primeiras 12h.",
        "explanation": "A alternativa **C** está correta. O paciente apresenta estigmas de **hepatopatia crônica/cirrose descompensada** (icterícia, ascite com piparote positivo, encefalopatia/desorientação) associada a hematêmese. Conforme o **Consenso de Baveno VI/VII** e diretrizes de **Hemorragia Digestiva Alta (HDA)**, em pacientes com suspeita de HDA varicosa/doença hepática (ou alto risco, como doença cardíaca grave), após estabilização hemodinâmica, droga vasoativa esplâncnica e antibioticoprofilaxia, a **endoscopia digestiva alta (EDA)** deve ser realizada precocemente, **preferencialmente nas primeiras 12 horas**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "a presença de ascite contraindica a ressuscitação hemodinâmica com a infusão de cristaloide.",
        "explanation": "Incorreta: A presença de ascite não contraindica a ressuscitação volêmica criteriosa com cristaloides em paciente hipotenso/desidratado.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a hipoglicemia indica intoxicação por metanol, devendo-se prescrever o uso de carvão ativado ou lavagem gástrica.",
        "explanation": "Incorreta: A glicemia capilar é 74 mg/dL (não é hipoglicemia), e carvão ativado/lavagem gástrica não têm indicação em intoxicação por álcoois tóxicos (além do risco de broncoaspiração em Glasgow 13).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. O paciente apresenta estigmas de **hepatopatia crônica/cirrose descompensada** (icterícia, ascite com piparote positivo, encefalopatia/desorientação) associada a hematêmese. Conforme o **Consenso de Baveno VI/VII** e diretrizes de **Hemorragia Digestiva Alta (HDA)**, em pacientes com suspeita de HDA varicosa/doença hepática (ou alto risco, como doença cardíaca grave), após estabilização hemodinâmica, droga vasoativa esplâncnica e antibioticoprofilaxia, a **endoscopia digestiva alta (EDA)** deve ser realizada precocemente, **preferencialmente nas primeiras 12 horas**.\n- **A) Incorreta:** Diuréticos de alça (furosemida) são contraindicados na fase aguda de choque séptico/hipovolêmico, podendo agravar hipoperfusão e lesão renal aguda.\n- **B) Incorreta:** A ressuscitação volêmica inicial (com cristaloides balanceados ou SF 0,9%, e não coloides como primeira linha) precede o uso de vasopressores no choque hipovolêmico.\n- **D) Incorreta:** A presença de ascite não contraindica a ressuscitação volêmica criteriosa com cristaloides em paciente hipotenso/desidratado.\n- **E) Incorreta:** A glicemia capilar é 74 mg/dL (não é hipoglicemia), e carvão ativado/lavagem gástrica não têm indicação em intoxicação por álcoois tóxicos (além do risco de broncoaspiração em Glasgow 13).",
    "perolaClinica": "A alternativa **C** está correta. O paciente apresenta estigmas de **hepatopatia crônica/cirrose descompensada** (icterícia, ascite com piparote positivo, encefalopatia/desorientação) associada a hematêmese. Conforme o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação de endoscopia digestiva alta precoce (≤ 12 horas) na hemorragia digestiva alta em hepatopata.",
      "raciocinioChave": "O paciente apresenta estigmas de cirrose descompensada (icterícia, ascite e encefalopatia) associados a hematêmese, configurando forte suspeita de hemorragia digestiva alta varicosa. Segundo o Consenso de Baveno, após estabilização inicial e início de droga vasoativa/antibioticoprofilaxia, a EDA deve ser realizada preferencialmente nas primeiras 12 horas.",
      "armadilhaBanca": "Contraindicar cristaloide por causa da ascite, usar diurético na fase aguda da instabilidade ou iniciar vasopressor antes da reposição volêmica."
    },
    "mapaDistratores": {
      "A": "Diuréticos de alça (furosemida) são contraindicados na vigência de choque ou hipovolemia aguda por agravarem a hipoperfusão tecidual e a injúria renal.",
      "B": "No choque hipovolêmico hemorrágico, a reposição volêmica inicial com cristaloides (e hemoderivados se necessário) precede o uso de noradrenalina, e não se priorizam coloides.",
      "D": "A presença de ascite não contraindica a ressuscitação volêmica criteriosa com cristaloides em paciente hipotenso e hipoperfundido.",
      "E": "A glicemia capilar de 74 mg/dL é normal (não há hipoglicemia) e carvão ativado não adsorve álcoois tóxicos nem é seguro em paciente com rebaixamento de consciência sem via aérea protegida."
    }
  },
  {
    "id": "q-uepa-2022-026",
    "code": "Q-UEPA22-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": [
      "via-aerea-dificil",
      "intubacao-traqueal",
      "mallampati",
      "iot"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "São preditores de via aérea difícil para intubação traqueal, EXCETO:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Obesidade.",
        "explanation": "Incorreta (é preditor): Obesidade (IMC elevado e circunferência cervical aumentada) associa-se a dificuldade tanto de ventilação sob máscara quanto de laringoscopia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Abertura da boca < 3 dedos.",
        "explanation": "Incorreta (é preditor): Abertura bucal < 3 dedos (regra 3-3-2 do LEMON) dificulta a introdução da lâmina do laringoscópio.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Mallampati III.",
        "explanation": "Incorreta (é preditor): Classificação de Mallampati III ou IV prediz pior visualização glótica à laringoscopia direta.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Intubação traqueal prévia",
        "explanation": "A alternativa **D** está correta (pois a questão pede a **exceção**). Segundo as diretrizes da **ASA (American Society of Anesthesiologists)** e o mnemônico **LEMON** de avaliação de via aérea na emergência, o preditor de risco é **história prévia de via aérea difícil / intubação difícil**, e **não** o simples histórico de **intubação traqueal prévia** sem intercorrências.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Restrição à mobilidade cervical.",
        "explanation": "Incorreta (é preditor): Restrição da mobilidade cervical (ex.: colar cervical, espondilite anquilosante) impede o alinhamento dos eixos oral, faríngeo e laríngeo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta (pois a questão pede a **exceção**). Segundo as diretrizes da **ASA (American Society of Anesthesiologists)** e o mnemônico **LEMON** de avaliação de via aérea na emergência, o preditor de risco é **história prévia de via aérea difícil / intubação difícil**, e **não** o simples histórico de **intubação traqueal prévia** sem intercorrências.\n- **A) Incorreta (é preditor):** Obesidade (IMC elevado e circunferência cervical aumentada) associa-se a dificuldade tanto de ventilação sob máscara quanto de laringoscopia.\n- **B) Incorreta (é preditor):** Abertura bucal < 3 dedos (regra 3-3-2 do LEMON) dificulta a introdução da lâmina do laringoscópio.\n- **C) Incorreta (é preditor):** Classificação de Mallampati III ou IV prediz pior visualização glótica à laringoscopia direta.\n- **E) Incorreta (é preditor):** Restrição da mobilidade cervical (ex.: colar cervical, espondilite anquilosante) impede o alinhamento dos eixos oral, faríngeo e laríngeo.",
    "perolaClinica": "A alternativa **D** está correta (pois a questão pede a **exceção**). Segundo as diretrizes da **ASA (American Society of Anesthesiologists)** e o mnemônico **LEMON** de avaliação de via aérea na emergência, o preditor…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento dos preditores anatômicos e clínicos de via aérea difícil na intubação orotraqueal.",
      "raciocinioChave": "A questão pede a exceção entre os preditores de via aérea difícil (critérios LEMON / ASA). Obesidade, abertura bucal menor que 3 dedos, Mallampati III e restrição cervical são preditores clássicos de laringoscopia difícil, ao passo que ter sido intubado previamente sem relato de dificuldade não prediz via aérea difícil.",
      "armadilhaBanca": "Confundir \"intubação traqueal prévia\" sem intercorrências com o verdadeiro preditor de risco, que é o histórico prévio de via aérea difícil."
    },
    "mapaDistratores": {
      "A": "A obesidade aumenta a circunferência cervical e o tecido redundante faríngeo, sendo preditor clássico de dificuldade tanto na ventilação sob máscara quanto na intubação.",
      "B": "Abertura bucal inferior a 3 dedos (regra 3-3-2 do mnemônico LEMON) limita o espaço intraoral e dificulta a inserção da lâmina do laringoscópio.",
      "C": "Escore de Mallampati III (ou IV) indica desproporção língua-faringe e associa-se a pior exposição glótica à laringoscopia direta.",
      "E": "A restrição da mobilidade cervical impede a extensão atlanto-occipital necessária para alinhar os eixos oral, faríngeo e laríngeo durante a laringoscopia."
    }
  },
  {
    "id": "q-uepa-2022-027",
    "code": "Q-UEPA22-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": [
      "sequencia-rapida-de-intubacao",
      "sri",
      "iot",
      "pre-intubacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A sequência rápida de intubação (SRI) consiste na utilização de sedativo e bloqueador neuromuscular (BNM) em paciente pré-oxigenado. Sobre essa técnica, e os passos necessários para seu sucesso, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a pré-oxigenação antecede a preparação das medicações a serem utilizadas no procedimento, para que se garanta o fornecimento máximo de oxigênio ao paciente.",
        "explanation": "Incorreta: A **Preparação** (equipamentos, monitorização e medicações) é o 1º P e antecede (ou ocorre em paralelo antes de finalizar) a **Pré-oxigenação** (2º P).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a fase de pré-intubação (ou otimização) deve corrigir condições que aumentem o risco para o paciente, podendo-se indicar infusão de drogas vasoativas.",
        "explanation": "A alternativa **B** está correta. Nos **7 Ps da Sequência Rápida de Intubação (Walls / Manual de Via Aérea na Emergência)**, a fase de **pré-tratamento / pré-intubação (otimização fisiológica)** visa corrigir distúrbios que aumentam o risco de colapso peri-intubação — como hipoxemia, hipotensão e acidose — podendo incluir ressuscitação volêmica e **início precoce de drogas vasoativas** (*push-dose* ou infusão contínua) antes da indução.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "no último passo, pós-intubação, a medida de CO2 expirado deve ser realizada somente após conexão do paciente ao ventilador pulmonar.",
        "explanation": "Incorreta: A capnografia de onda (ETCO2) é o padrão-ouro para **confirmar o posicionamento do tubo traqueal imediatamente após a intubação** (passo de confirmação), antes mesmo de conectar ao ventilador mecânico definitivo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "na indicação do uso de fentanil para pacientes em SRI, sua infusão deve ser rápida, para diminuir o risco de síndrome do tórax rígido.",
        "explanation": "Incorreta: A infusão **rápida** de fentanil em altas doses **aumenta** (e não diminui) o risco de **síndrome do tórax rígido**; por isso deve ser infundido lentamente (em 30–60 segundos).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "antes de iniciar a SRI deve-se proceder à infusão contínua de BNM de meia vida curta para garantir o sucesso do procedimento.",
        "explanation": "Incorreta: Na SRI o bloqueador neuromuscular é administrado em **bolus** imediatamente após o agente indutor (nunca em infusão contínua antes da sedação).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Nos **7 Ps da Sequência Rápida de Intubação (Walls / Manual de Via Aérea na Emergência)**, a fase de **pré-tratamento / pré-intubação (otimização fisiológica)** visa corrigir distúrbios que aumentam o risco de colapso peri-intubação — como hipoxemia, hipotensão e acidose — podendo incluir ressuscitação volêmica e **início precoce de drogas vasoativas** (*push-dose* ou infusão contínua) antes da indução.\n- **A) Incorreta:** A **Preparação** (equipamentos, monitorização e medicações) é o 1º P e antecede (ou ocorre em paralelo antes de finalizar) a **Pré-oxigenação** (2º P).\n- **C) Incorreta:** A capnografia de onda (ETCO2) é o padrão-ouro para **confirmar o posicionamento do tubo traqueal imediatamente após a intubação** (passo de confirmação), antes mesmo de conectar ao ventilador mecânico definitivo.\n- **D) Incorreta:** A infusão **rápida** de fentanil em altas doses **aumenta** (e não diminui) o risco de **síndrome do tórax rígido**; por isso deve ser infundido lentamente (em 30–60 segundos).\n- **E) Incorreta:** Na SRI o bloqueador neuromuscular é administrado em **bolus** imediatamente após o agente indutor (nunca em infusão contínua antes da sedação).",
    "perolaClinica": "A alternativa **B** está correta. Nos **7 Ps da Sequência Rápida de Intubação (Walls / Manual de Via Aérea na Emergência)**, a fase de **pré-tratamento / pré-intubação (otimização fisiológica)** visa corrigir…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Etapas da Sequência Rápida de Intubação (7 Ps) com foco na otimização hemodinâmica pré-indução.",
      "raciocinioChave": "Nos 7 Ps da Sequência Rápida de Intubação, a fase de otimização/pré-tratamento visa estabilizar o paciente antes da indução para evitar parada ou colapso peri-intubação. Isso inclui corrigir hipoxemia e hipotensão, podendo requerer expansão volêmica e início de drogas vasoativas antes da administração dos sedativos.",
      "armadilhaBanca": "Inverter a ordem entre preparação e pré-oxigenação ou acreditar que infusão rápida de fentanil reduz o risco de tórax rígido."
    },
    "mapaDistratores": {
      "A": "Na sequência dos 7 Ps, a Preparação (materiais, monitorização e fármacos) precede a Pré-oxigenação, e não o contrário.",
      "C": "A capnografia de onda (ETCO2) deve ser utilizada imediatamente após a passagem do tubo para confirmar o posicionamento intratraqueal antes da fixação e ventilação definitiva.",
      "D": "A infusão rápida de altas doses de fentanil é justamente o fator que desencadeia a síndrome do tórax rígido, devendo o opioide ser administrado lentamente.",
      "E": "Na SRI o bloqueador neuromuscular é administrado em bolus rápido logo após o agente indutor, nunca em infusão contínua antes da sedação."
    }
  },
  {
    "id": "q-uepa-2022-028",
    "code": "Q-UEPA22-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": [
      "insuficiencia-respiratoria",
      "posicao-prona",
      "ventilacao-mecanica",
      "sdra"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A insuficiência respiratória aguda é a principal indicação de ventilação mecânica na urgência. Com base nessa afirmação, a alternativa correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "mesmo em quadros de insuficiência respiratória em que a intubação traqueal estiver indicada, é recomendado iniciar ventilação não invasiva para evitar intubação.",
        "explanation": "Incorreta: Quando há indicação formal de intubação orotraqueal (ex.: rebaixamento de consciência, instabilidade hemodinâmica, falência respiratória iminente), atrasar a intubação com tentativa de VNI aumenta a mortalidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a gasometria arterial é pouco útil na diferenciação entre insuficiência respiratória aguda tipo 1 e tipo 2.",
        "explanation": "Incorreta: A gasometria arterial é o exame fundamental para diferenciar insuficiência respiratória **tipo 1 (hipoxêmica: PaO2 < 60 mmHg)** da **tipo 2 (hipercápnica: PaCO2 > 45–50 mmHg com acidemia)**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "pacientes em insuficiência respiratória aguda grave podem ser pronados por mais de 12h ao dia quando não houver contraindicação.",
        "explanation": "A alternativa **C** está correta. Conforme as **Diretrizes Brasileiras de Ventilação Mecânica (AMIB/SBPT)** e o estudo **PROSEVA**, pacientes com insuficiência respiratória hipoxêmica grave (**SDRA moderada-grave com PaO2/FiO2 < 150 mmHg**) beneficiam-se de **posição prona precoce por 16 horas/dia (> 12 horas/dia)** na ausência de contraindicações, com redução comprovada de mortalidade.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "em pacientes que necessitem de ventilação mecânica invasiva, valores da relação PaO2/FiO2 entre 150 e 250 mmHg são considerados normais.",
        "explanation": "Incorreta: Valores normais da relação PaO2/FiO2 são **> 300–400 mmHg**; valores entre 150 e 250 mmHg indicam hipoxemia moderada a leve (SDRA leve/moderada).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "ao exame físico, frequência cardíaca acima de 130 bpm é o sinal mais frequentemente encontrado em pacientes com insuficiência respiratória aguda.",
        "explanation": "Incorreta: O sinal clínico mais precoce e frequente de insuficiência respiratória aguda é a **taquipneia** (aumento da frequência respiratória), não FC > 130 bpm.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Conforme as **Diretrizes Brasileiras de Ventilação Mecânica (AMIB/SBPT)** e o estudo **PROSEVA**, pacientes com insuficiência respiratória hipoxêmica grave (**SDRA moderada-grave com PaO2/FiO2 < 150 mmHg**) beneficiam-se de **posição prona precoce por 16 horas/dia (> 12 horas/dia)** na ausência de contraindicações, com redução comprovada de mortalidade.\n- **A) Incorreta:** Quando há indicação formal de intubação orotraqueal (ex.: rebaixamento de consciência, instabilidade hemodinâmica, falência respiratória iminente), atrasar a intubação com tentativa de VNI aumenta a mortalidade.\n- **B) Incorreta:** A gasometria arterial é o exame fundamental para diferenciar insuficiência respiratória **tipo 1 (hipoxêmica: PaO2 < 60 mmHg)** da **tipo 2 (hipercápnica: PaCO2 > 45–50 mmHg com acidemia)**.\n- **D) Incorreta:** Valores normais da relação PaO2/FiO2 são **> 300–400 mmHg**; valores entre 150 e 250 mmHg indicam hipoxemia moderada a leve (SDRA leve/moderada).\n- **E) Incorreta:** O sinal clínico mais precoce e frequente de insuficiência respiratória aguda é a **taquipneia** (aumento da frequência respiratória), não FC > 130 bpm.",
    "perolaClinica": "A alternativa **C** está correta. Conforme as **Diretrizes Brasileiras de Ventilação Mecânica (AMIB/SBPT)** e o estudo **PROSEVA**, pacientes com insuficiência respiratória hipoxêmica grave (**SDRA moderada-grave com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação de posição prona por mais de 12 horas/dia na insuficiência respiratória hipoxêmica grave (SDRA).",
      "raciocinioChave": "Conforme o estudo PROSEVA e as Diretrizes Brasileiras de Ventilação Mecânica, pacientes com SDRA grave (PaO2/FiO2 < 150 mmHg) sob ventilação invasiva apresentam redução de mortalidade com posição prona. As sessões devem durar pelo menos 12 a 16 horas diárias na ausência de contraindicações absolutas.",
      "armadilhaBanca": "Tentar VNI quando a intubação já é formalmente indicada ou interpretar PaO2/FiO2 entre 150 e 250 mmHg como faixa de normalidade."
    },
    "mapaDistratores": {
      "A": "Quando há indicação clara de intubação orotraqueal imediata, postergá-la com uma tentativa de ventilação não invasiva eleva a mortalidade.",
      "B": "A gasometria arterial é o exame essencial para distinguir insuficiência respiratória tipo 1 (hipoxêmica) da tipo 2 (hipercápnica com elevação de PaCO2).",
      "D": "A relação PaO2/FiO2 normal supera 300 a 400 mmHg; valores entre 150 e 250 mmHg já traduzem comprometimento moderado a leve da oxigenação (SDRA).",
      "E": "O achado clínico mais precoce e frequente na insuficiência respiratória aguda é a taquipneia com esforço respiratório, e não taquicardia acima de 130 bpm."
    }
  },
  {
    "id": "q-uepa-2022-029",
    "code": "Q-UEPA22-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Acidentes por Animais Peçonhentos",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-acidentes-por-animais-peconhentos",
    "tags": [
      "acidente-botropico",
      "jararaca",
      "tempo-de-coagulacao",
      "soro-antibotropico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "No atendimento a pacientes vítimas de acidente botrópico (jararaca), é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "abscesso não é uma complicação neste tipo de acidente, estando mais associado ao acidente crotálico.",
        "explanation": "Incorreta: Abscesso, celulite e necrose local são complicações clássicas do acidente **botrópico** (pela intensa ação proteolítica/inflamatória local), sendo raras no acidente crotálico.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "é indicado solicitar o tempo de coagulação na admissão e após 24h de observação do doente. Se o Tempo de Coagulacão permanecer alterado, está indicada dose adicional de soro antibotrópico.",
        "explanation": "A alternativa **B** está correta. De acordo com o **Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos (Ministério da Saúde)**, no **acidente botrópico** o **Tempo de Coagulação (TC)** deve ser dosado na admissão e repetido **após 24 horas** da soroterapia: se o sangue permanecer incoagulável ou o TC alterado após 24h, está indicada **dose adicional de 2 ampolas de soro antibotrópico (SAB)**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "devido à ação proteolítica do veneno botrópico, está indicado o uso de torniquetes, a fim de evitar a necrose tecidual.",
        "explanation": "Incorreta: Torniquetes são **terminantemente contraindicados** nos acidentes ofídicos, pois agravam a isquemia e a necrose tecidual local.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "o tratamento consiste na administração de soro antibotrópico (SAB) endovenoso em 8 - 10 ampolas para quadros leves, e 10 - 12 ampolas para quadros graves.",
        "explanation": "Incorreta: A posologia do SAB pelo Ministério da Saúde é: **leve = 2 a 4 ampolas**, **moderado = 4 a 8 ampolas** e **grave = 12 ampolas**.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "se estabelecido o diagnóstico de síndrome compartimental, a fasciotomia deve ser evitada para não disseminar o veneno botrópico, mesmo que as condições de hemostasia do paciente permitam.",
        "explanation": "Incorreta: Na síndrome compartimental confirmada, a **fasciotomia está indicada** (após correção dos distúrbios de coagulação com soroterapia) para preservar a viabilidade do membro.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com o **Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos (Ministério da Saúde)**, no **acidente botrópico** o **Tempo de Coagulação (TC)** deve ser dosado na admissão e repetido **após 24 horas** da soroterapia: se o sangue permanecer incoagulável ou o TC alterado após 24h, está indicada **dose adicional de 2 ampolas de soro antibotrópico (SAB)**.\n- **A) Incorreta:** Abscesso, celulite e necrose local são complicações clássicas do acidente **botrópico** (pela intensa ação proteolítica/inflamatória local), sendo raras no acidente crotálico.\n- **C) Incorreta:** Torniquetes são **terminantemente contraindicados** nos acidentes ofídicos, pois agravam a isquemia e a necrose tecidual local.\n- **D) Incorreta:** A posologia do SAB pelo Ministério da Saúde é: **leve = 2 a 4 ampolas**, **moderado = 4 a 8 ampolas** e **grave = 12 ampolas**.\n- **E) Incorreta:** Na síndrome compartimental confirmada, a **fasciotomia está indicada** (após correção dos distúrbios de coagulação com soroterapia) para preservar a viabilidade do membro.",
    "perolaClinica": "A alternativa **B** está correta. De acordo com o **Manual de Diagnóstico e Tratamento de Acidentes por Animais Peçonhentos (Ministério da Saúde)**, no **acidente botrópico** o **Tempo de Coagulação (TC)** deve ser…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Monitorização do Tempo de Coagulação (TC) em 24 horas para indicação de dose adicional de soro antibotrópico.",
      "raciocinioChave": "No acidente botrópico, o veneno provoca consumo de fibrinogênio e alargamento do Tempo de Coagulação (TC), que deve ser avaliado na admissão e reavaliado 24 horas após a soroterapia. Se o TC permanecer alterado ou o sangue incoagulável após 24 horas, indica-se dose adicional de soro antibotrópico (2 ampolas).",
      "armadilhaBanca": "Trocar as complicações locais do acidente botrópico pelas do crotálico ou errar o número de ampolas de soro antibotrópico por gravidade."
    },
    "mapaDistratores": {
      "A": "Abscesso, celulite e necrose são complicações locais típicas do acidente botrópico pela ação proteolítica do veneno, e não do crotálico.",
      "C": "O uso de torniquetes é formalmente contraindicado em acidentes ofídicos por concentrar o veneno e agravar a isquemia e a necrose tecidual.",
      "D": "A posologia correta do soro antibotrópico pelo Ministério da Saúde é de 2 a 4 ampolas nos casos leves, 4 a 8 nos moderados e 12 nos graves.",
      "E": "Na síndrome compartimental instalada, a fasciotomia está indicada após correção da coagulopatia com soroterapia para evitar perda isquêmica do membro."
    }
  },
  {
    "id": "q-uepa-2022-030",
    "code": "Q-UEPA22-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Cefaleias Primárias e Secundárias",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-cefaleias-primarias-e-secundarias",
    "tags": [
      "cefaleia-tensional",
      "cefaleias-primarias",
      "diagnostico-clinico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "As cefaleias, historicamente, são apresentadas em diversas obras artísticas, como observado na imagem abaixo: [Imagem ilustrativa: gravura histórica \"The Head ache\"].\n\nDentre os tipos de cefaleia, a cefaleia tipo tensão (CTT), também chamada de cefaleia tensional, é um dos mais encontrados na população em geral. Sobre esta condição, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "atividade física habitual não costuma agravar a CTT.",
        "explanation": "A alternativa **A** está correta. Segundo a **Classificação Internacional das Cefaleias (ICHD-3)**, a **cefaleia do tipo tensão (CTT)** caracteriza-se por dor **bilateral**, em **pressão ou aperto** (não pulsátil), de intensidade **leve a moderada**, e que **não é agravada por atividade física rotineira** (como caminhar ou subir escadas) — característica que ajuda a diferenciá-la da migrânea (enxaqueca).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "o dolorimento à palpação manual pericraniano não é frequentemente encontrado.",
        "explanation": "Incorreta: A sensibilidade/dolorimento muscular pericraniano à palpação manual é um achado **frequente** na CTT (inclusive subdivide a classificação em associada ou não à sensibilidade pericraniana).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "anti-inflamatórios não esteroidais (AINEs) estão proscritos na CTT.",
        "explanation": "Incorreta: Analgésicos simples (paracetamol, dipirona) e **AINEs** (ibuprofeno, naproxeno) são justamente a **primeira linha** para tratamento agudo das crises de CTT.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a CTT crônica pode ser definida com episódios que ocorrem < 07 dias/mês.",
        "explanation": "Incorreta: A CTT **crônica** é definida pela ocorrência de episódios em **≥ 15 dias por mês** durante mais de 3 meses.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a CTT geralmente é mais frequentemente caracterizada por dor unilateral.",
        "explanation": "Incorreta: A dor da CTT é tipicamente **bilateral** (em faixa/capacete), ao passo que dor unilateral pulsátil sugere migrânea.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Segundo a **Classificação Internacional das Cefaleias (ICHD-3)**, a **cefaleia do tipo tensão (CTT)** caracteriza-se por dor **bilateral**, em **pressão ou aperto** (não pulsátil), de intensidade **leve a moderada**, e que **não é agravada por atividade física rotineira** (como caminhar ou subir escadas) — característica que ajuda a diferenciá-la da migrânea (enxaqueca).\n- **B) Incorreta:** A sensibilidade/dolorimento muscular pericraniano à palpação manual é um achado **frequente** na CTT (inclusive subdivide a classificação em associada ou não à sensibilidade pericraniana).\n- **C) Incorreta:** Analgésicos simples (paracetamol, dipirona) e **AINEs** (ibuprofeno, naproxeno) são justamente a **primeira linha** para tratamento agudo das crises de CTT.\n- **D) Incorreta:** A CTT **crônica** é definida pela ocorrência de episódios em **≥ 15 dias por mês** durante mais de 3 meses.\n- **E) Incorreta:** A dor da CTT é tipicamente **bilateral** (em faixa/capacete), ao passo que dor unilateral pulsátil sugere migrânea.",
    "perolaClinica": "A alternativa **A** está correta. Segundo a **Classificação Internacional das Cefaleias (ICHD-3)**, a **cefaleia do tipo tensão (CTT)** caracteriza-se por dor **bilateral**, em **pressão ou aperto** (não pulsátil), de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Características diagnósticas da cefaleia tipo tensão (ICHD-3) e ausência de piora com atividade física habitual.",
      "raciocinioChave": "Pela Classificação Internacional das Cefaleias (ICHD-3), a cefaleia do tipo tensão manifesta-se como dor bilateral em aperto/pressão, leve a moderada, sem náuseas importantes. Diferentemente da migrânea, a CTT caracteristicamente não se agrava com atividades físicas rotineiras como caminhar ou subir escadas.",
      "armadilhaBanca": "Confundir critérios clínicos da cefaleia tensional com os da migrânea (piora com esforço físico e unilateralidade) ou errar o corte de cronicidade (≥ 15 dias/mês)."
    },
    "mapaDistratores": {
      "B": "A sensibilidade dolorosa à palpação da musculatura pericraniana é um achado frequente na cefaleia tipo tensão, integrando inclusive sua subclassificação.",
      "C": "Analgésicos simples e anti-inflamatórios não esteroidais (AINEs) representam a terapia abortiva de primeira linha nas crises de cefaleia tensional.",
      "D": "A forma crônica da cefaleia do tipo tensão é definida pela presença de episódios em 15 ou mais dias por mês por período superior a 3 meses.",
      "E": "A dor típica da cefaleia tensional é bilateral (em faixa ou capacete), enquanto a dor unilateral pulsátil é característica da migrânea."
    }
  },
  {
    "id": "q-uepa-2022-031",
    "code": "Q-UEPA22-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Malária e Doenças Endêmicas",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-malaria-e-doencas-endemicas",
    "tags": [
      "leishmaniose-visceral",
      "calazar",
      "antimoniato-de-meglumina",
      "pancitopenia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 32 anos, procedente de Santarém (PA), apresenta há 2 meses quadro de intensa astenia, associada a perda ponderal (5% do peso basal), febre intermitente e aumento do volume abdominal. Ao exame físico, nota-se hepatoesplenomegalia, leve palidez cutâneo-mucosa e edema de membros inferiores +/4+. Exames bioquímicos demonstram pancitopenia, velocidade de hemossedimentação 80mm/h (VR: até 15) e albumina 2,9 g/dL (VR: 3,5 e 5,5). Realizado mielograma que acusou formas de Leishmania spp. intra e extracelulares. O tratamento de escolha para o paciente em questão é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sulfadizina + Pirimetamina + Ácido folínico.",
        "explanation": "Incorreta: Esquema de escolha para **toxoplasmose** (ex.: neurotoxoplasmose).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Antimoniato-N-metil glucamina.",
        "explanation": "A alternativa **B** está correta. O paciente apresenta quadro clássico de **leishmaniose visceral (calazar)** confirmado por mielograma (febre prolongada, hepatoesplenomegalia, pancitopenia, hipoalbuminemia), sem critérios de gravidade ou contraindicação ao antimonial (idade entre 1 e 50 anos, sem icterícia, sangramentos, insuficiência renal/cardíaca ou coinfecção HIV). Segundo o **Manual de Vigilância e Controle da Leishmaniose Visceral (Ministério da Saúde)**, a droga de primeira escolha para casos não graves sem contraindicações é o **antimonial pentavalente (antimoniato de N-metil glucamina — Glucantime®)**, ficando a anfotericina B lipossomal reservada para gestantes, < 1 ano, > 50 anos, imunodeprimidos e casos graves.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Cloroquina + primaquina.",
        "explanation": "Incorreta: Esquema de escolha para **malária por *Plasmodium vivax***.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Benznidazol.",
        "explanation": "Incorreta: Tratamento de escolha para **doença de Chagas** (*Trypanosoma cruzi*).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Praziquantel.",
        "explanation": "Incorreta: Fármaco de escolha para **esquistossomose** (*Schistosoma mansoni*) e teníase/cisticercose.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. O paciente apresenta quadro clássico de **leishmaniose visceral (calazar)** confirmado por mielograma (febre prolongada, hepatoesplenomegalia, pancitopenia, hipoalbuminemia), sem critérios de gravidade ou contraindicação ao antimonial (idade entre 1 e 50 anos, sem icterícia, sangramentos, insuficiência renal/cardíaca ou coinfecção HIV). Segundo o **Manual de Vigilância e Controle da Leishmaniose Visceral (Ministério da Saúde)**, a droga de primeira escolha para casos não graves sem contraindicações é o **antimonial pentavalente (antimoniato de N-metil glucamina — Glucantime®)**, ficando a anfotericina B lipossomal reservada para gestantes, < 1 ano, > 50 anos, imunodeprimidos e casos graves.\n- **A) Incorreta:** Esquema de escolha para **toxoplasmose** (ex.: neurotoxoplasmose).\n- **C) Incorreta:** Esquema de escolha para **malária por *Plasmodium vivax***.\n- **D) Incorreta:** Tratamento de escolha para **doença de Chagas** (*Trypanosoma cruzi*).\n- **E) Incorreta:** Fármaco de escolha para **esquistossomose** (*Schistosoma mansoni*) e teníase/cisticercose.",
    "perolaClinica": "A alternativa **B** está correta. O paciente apresenta quadro clássico de **leishmaniose visceral (calazar)** confirmado por mielograma (febre prolongada, hepatoesplenomegalia, pancitopenia, hipoalbuminemia), sem…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Tratamento de primeira escolha da leishmaniose visceral sem critérios de gravidade no Brasil.",
      "raciocinioChave": "O paciente apresenta febre prolongada, hepatoesplenomegalia, pancitopenia, hipoalbuminemia e mielograma com formas de Leishmania spp., fechando diagnóstico de leishmaniose visceral. Sem critérios de gravidade ou contraindicações (gestação, idade < 1 ou > 50 anos, insuficiência renal/cardíaca, HIV), o tratamento de escolha no SUS é o antimoniato de N-metilglucamina.",
      "armadilhaBanca": "Trocar o antiparasitário específico da leishmaniose visceral pelo de malária, toxoplasmose, doença de Chagas ou esquistossomose."
    },
    "mapaDistratores": {
      "A": "Sulfadiazina associada a pirimetamina e ácido folínico é o esquema terapêutico padrão para toxoplasmose (como na neurotoxoplasmose).",
      "C": "Cloroquina combinada com primaquina constitui o tratamento clássico da malária causada por Plasmodium vivax.",
      "D": "O benznidazol é o fármaco tripanocida indicado para o tratamento etiológico da doença de Chagas aguda ou crônica recente.",
      "E": "O praziquantel é o anti-helmíntico de escolha para esquistossomose mansônica e teníase/cisticercose, sem ação contra Leishmania."
    }
  },
  {
    "id": "q-uepa-2022-032",
    "code": "Q-UEPA22-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Distúrbios do Potássio",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-disturbios-do-potassio",
    "tags": [
      "hipercalemia",
      "gluconato-de-calcio",
      "eletrocardiograma",
      "lra"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lúcia, 45 anos, residente na Ilha do Marajó (PA), é trazida para internação hospitalar devido a sintomas urêmicos iniciados há dois dias após acidente ofídico crotálico, ocorrido durante atividade laboral. Na chegada, além de náuseas persistentes, notou-se redução do volume urinário. Os exames bioquímicos admissionais mostraram: ureia 126 mg/dL (VR: 10-45), creatinina 4,4 mg/dL (VR: 0,50-1,20), potássio 7,3 mmol/L (VR: 3,5-5,5) e sódio 134 mg/dL (VR: 135-145 mmol/L). O eletrocardiograma realizado apresentou: achatamento da onda P, o aumento do segmento PR e onda T apiculada (em tenda). A partir desses achados, a medida prioritária para estabilizar a membrana miocárdica, de forma a prevenir arritmias é a:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sulfato de Magnésio.",
        "explanation": "Incorreta: Sulfato de magnésio é indicado na *torsades de pointes* e eclâmpsia, não estabiliza a membrana na hipercalemia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Bicarbonato de sódio.",
        "explanation": "Incorreta: Bicarbonato de sódio promove apenas redistribuição intracelular discreta em pacientes com acidose metabólica, sem ação estabilizadora imediata de membrana.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Gluconato de cálcio.",
        "explanation": "A alternativa **C** está correta. A paciente evoluiu com **lesão renal aguda** pós-acidente crotálico (rabdomiólise/nefrotoxicidade) e **hipercalemia grave (K+ 7,3 mmol/L) com alterações eletrocardiográficas** (onda T apiculada, alargamento de PR, achatamento de P). Segundo as diretrizes da **AHA / KDIGO**, a **primeira medida prioritária** na hipercalemia com repercussão no ECG é administrar **gluconato de cálcio a 10% EV** para **estabilizar o potencial de membrana miocárdica** (ação em 1–3 minutos), prevenindo fibrilação ventricular e assistolia, seguida de medidas de redistribuição intracelular (solução polarizante, beta-2 inalatório) e eliminação de potássio (hemodiálise/diuréticos/resinas).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Cloridrato de propafenona.",
        "explanation": "Incorreta: Propafenona é antiarrítmico classe IC, contraindicado no manejo de hipercalemia grave.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Propranolol.",
        "explanation": "Incorreta: Betabloqueadores (propranolol) inibem a bomba Na+/K+-ATPase e podem **agravar** a hipercalemia.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. A paciente evoluiu com **lesão renal aguda** pós-acidente crotálico (rabdomiólise/nefrotoxicidade) e **hipercalemia grave (K+ 7,3 mmol/L) com alterações eletrocardiográficas** (onda T apiculada, alargamento de PR, achatamento de P). Segundo as diretrizes da **AHA / KDIGO**, a **primeira medida prioritária** na hipercalemia com repercussão no ECG é administrar **gluconato de cálcio a 10% EV** para **estabilizar o potencial de membrana miocárdica** (ação em 1–3 minutos), prevenindo fibrilação ventricular e assistolia, seguida de medidas de redistribuição intracelular (solução polarizante, beta-2 inalatório) e eliminação de potássio (hemodiálise/diuréticos/resinas).\n- **A) Incorreta:** Sulfato de magnésio é indicado na *torsades de pointes* e eclâmpsia, não estabiliza a membrana na hipercalemia.\n- **B) Incorreta:** Bicarbonato de sódio promove apenas redistribuição intracelular discreta em pacientes com acidose metabólica, sem ação estabilizadora imediata de membrana.\n- **D) Incorreta:** Propafenona é antiarrítmico classe IC, contraindicado no manejo de hipercalemia grave.\n- **E) Incorreta:** Betabloqueadores (propranolol) inibem a bomba Na+/K+-ATPase e podem **agravar** a hipercalemia.",
    "perolaClinica": "A alternativa **C** está correta. A paciente evoluiu com **lesão renal aguda** pós-acidente crotálico (rabdomiólise/nefrotoxicidade) e **hipercalemia grave (K+ 7,3 mmol/L) com alterações eletrocardiográficas** (onda T…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Prioridade terapêutica de estabilização da membrana miocárdica na hipercalemia grave com alterações no ECG.",
      "raciocinioChave": "A paciente evoluiu com injúria renal aguda pós-acidente crotálico e hipercalemia grave (K+ 7,3 mmol/L) já acompanhada de alterações eletrocardiográficas (achatamento de P, alargamento de PR e onda T apiculada). A primeira medida emergencial para prevenir arritmias fatais é administrar gluconato de cálcio a 10% EV, que antagoniza o efeito do potássio e estabiliza o potencial de membrana miocárdica.",
      "armadilhaBanca": "Escolher medidas de redistribuição celular (bicarbonato) ou fármacos contraindicados (betabloqueador) em vez da estabilização imediata da membrana cardíaca."
    },
    "mapaDistratores": {
      "A": "O sulfato de magnésio é indicado em arritmias como torsades de pointes e na eclâmpsia, não promovendo estabilização imediata de membrana na hipercalemia.",
      "B": "O bicarbonato de sódio promove apenas desvio intracelular discreto de potássio quando há acidose metabólica associada, sem efeito protetor elétrico imediato no miocárdio.",
      "D": "A propafenona é um antiarrítmico de classe IC que bloqueia canais de sódio e pode precipitar bloqueios ou arritmias graves no contexto de hipercalemia.",
      "E": "O propranolol bloqueia receptores beta-2 e inibe a bomba Na+/K+-ATPase, podendo agravar ainda mais a hipercalemia sérica."
    }
  },
  {
    "id": "q-uepa-2022-033",
    "code": "Q-UEPA22-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Doenças da Adrenal",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-doencas-da-adrenal",
    "tags": [
      "doenca-de-addison",
      "insuficiencia-adrenal",
      "mineralocorticoide",
      "autoimunidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o texto abaixo para responder a questão 33\n\n“Aos 43 anos, John Kennedy foi o homem mais jovem eleito para a presidência dos Estados Unidos. Ao que tudo indicava, ele era a imagem da saúde e da vitalidade. Mas, na verdade, ele tinha o mais complexo histórico de saúde de qualquer pessoa a ocupar a Casa Branca. Dentre os seus diagnósticos figuravam: doença de Addison autoimune, tireoidite de Hashimoto e doença celíaca”. (Fonte: Mandel LR. Endocrine and autoimmune aspects of the health history of John F. Kennedy. Ann Intern Med. 2009 Sep 1;151(5):350-4.)\n\nDe acordo com o Texto acima, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o tratamento para doença de Addison deve ser feito com doses baixas e diárias de glicocorticoide. Caso o paciente apresente febre ou alguma outra situação de estresse clínico, este deve ser orientado a suspender a tomada da medicação neste dia.",
        "explanation": "Incorreta: Em situações de estresse clínico (febre, infecção, cirurgia), a dose de glicocorticoide deve ser **dobrada ou triplicada** (jamais suspensa), sob risco de crise adrenal fatal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a tireoidite linfocítica de Hashimoto é diagnosticada quando o paciente apresenta níveis de TSH persistentemente aumentados, associados a anti-TPO positivo. Os títulos deste anticorpo devem ser continuamente dosados para monitorizar a resposta ao tratamento.",
        "explanation": "Incorreta: Os títulos de **anti-TPO não devem ser dosados seriadamente** para monitorar resposta ao tratamento; o seguimento é feito com **TSH** (e T4 livre).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "na suspeita de doença celíaca, títulos baixos de anticorpos transglutaminase tecidual são suficientes para firmar o diagnóstico, por ser o exame padrão-ouro para o diagnóstico. Casos suspeitos com anticorpos negativos, podem ser submetidos à biópsia gástrica.",
        "explanation": "Incorreta: O padrão-ouro diagnóstico da doença celíaca em adultos é a **biópsia duodenal** (e não biópsia gástrica), e títulos baixos de anti-transglutaminase isoladamente não firmam diagnóstico sem confirmação histológica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "na doença de Addison, a deficiência de mineralocorticóide pode resultar em hipovolemia, hipotensão postural, desidratação e distúrbios hidroeletrolíticos, como hiponatremia e hipercalemia. Como manifestação clínica, o paciente pode apresentar avidez por sal.",
        "explanation": "A alternativa **D** está correta. Conforme a **Endocrine Society / SBEM**, na **insuficiência adrenal primária (doença de Addison)** há comprometimento tanto do cortisol quanto da **aldosterona (deficiência mineralocorticoide)**, levando à perda renal de sódio e água e retenção de potássio — manifestando-se por **hipovolemia, hipotensão ortostática, desidratação, hiponatremia, hipercalemia e avidez por sal** (*salt craving*).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "a união dessas três doenças caracterizam a síndrome poliglandular autoimune tipo 1. O diagnóstico de qualquer doença autoimune, aumenta o risco do desenvolvimento de outras ao longo da vida, e terapias imunossupressivas podem ser instituídas preventivamente após o primeiro diagnóstico.",
        "explanation": "Incorreta: A associação de doença de Addison + tireoidite autoimune (e/ou DM1, doença celíaca) caracteriza a **Síndrome Poliglandular Autoimune tipo 2 (síndrome de Schmidt)** (a tipo 1 é definida por candidíase mucocutânea, hipoparatireoidismo e Addison); além disso, não se faz imunossupressão preventiva.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Conforme a **Endocrine Society / SBEM**, na **insuficiência adrenal primária (doença de Addison)** há comprometimento tanto do cortisol quanto da **aldosterona (deficiência mineralocorticoide)**, levando à perda renal de sódio e água e retenção de potássio — manifestando-se por **hipovolemia, hipotensão ortostática, desidratação, hiponatremia, hipercalemia e avidez por sal** (*salt craving*).\n- **A) Incorreta:** Em situações de estresse clínico (febre, infecção, cirurgia), a dose de glicocorticoide deve ser **dobrada ou triplicada** (jamais suspensa), sob risco de crise adrenal fatal.\n- **B) Incorreta:** Os títulos de **anti-TPO não devem ser dosados seriadamente** para monitorar resposta ao tratamento; o seguimento é feito com **TSH** (e T4 livre).\n- **C) Incorreta:** O padrão-ouro diagnóstico da doença celíaca em adultos é a **biópsia duodenal** (e não biópsia gástrica), e títulos baixos de anti-transglutaminase isoladamente não firmam diagnóstico sem confirmação histológica.\n- **E) Incorreta:** A associação de doença de Addison + tireoidite autoimune (e/ou DM1, doença celíaca) caracteriza a **Síndrome Poliglandular Autoimune tipo 2 (síndrome de Schmidt)** (a tipo 1 é definida por candidíase mucocutânea, hipoparatireoidismo e Addison); além disso, não se faz imunossupressão preventiva.",
    "perolaClinica": "A alternativa **D** está correta. Conforme a **Endocrine Society / SBEM**, na **insuficiência adrenal primária (doença de Addison)** há comprometimento tanto do cortisol quanto da **aldosterona (deficiência…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Fisiopatologia da deficiência mineralocorticoide na doença de Addison (hipovolemia, hiponatremia, hipercalemia e avidez por sal).",
      "raciocinioChave": "Na insuficiência adrenal primária (doença de Addison), a destruição do córtex adrenal reduz a produção de cortisol e de aldosterona. A falta de aldosterona impede a reabsorção renal de sódio e a excreção de potássio, desencadeando desidratação, hipotensão ortostática, hiponatremia, hipercalemia e avidez por sal.",
      "armadilhaBanca": "Confundir Síndrome Poliglandular Autoimune tipo 1 com tipo 2, sugerir suspensão do corticoide no estresse ou dosar anti-TPO seriadamente no Hashimoto."
    },
    "mapaDistratores": {
      "A": "Durante febre, infecção ou estresse clínico, a dose do glicocorticoide na doença de Addison deve ser dobrada ou triplicada — jamais suspensa — para evitar crise adrenal aguda.",
      "B": "O acompanhamento da tireoidite de Hashimoto com hipotireoidismo baseia-se na dosagem de TSH (e T4 livre), não havendo utilidade clínica em monitorar títulos seriados de anti-TPO.",
      "C": "O padrão-ouro diagnóstico da doença celíaca em adultos envolve sorologia positiva confirmada por biópsia do duodeno (não biópsia gástrica), e títulos baixos isolados não dispensam confirmação.",
      "E": "A associação de Addison, tireoidite autoimune e doença celíaca compõe a Síndrome Poliglandular Autoimune tipo 2 (e não tipo 1), além de não existir indicação de imunossupressão preventiva."
    }
  },
  {
    "id": "q-uepa-2022-034",
    "code": "Q-UEPA22-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "anlodipino",
      "hidroclorotiazida",
      "metformina",
      "efeitos-adversos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Avalie os casos clínicos, abaixo, para responder à Questão 34\n\nCaso 1: Mulher, 48 anos, hipertensa grau 1, em uso monoterapia anti-hipertensiva, evoluiu com edema de membros inferiores bilateral.\nCaso 2: Homem, 38 anos, apresentou hiperuricemia e crise de gota após introdução de uma medicação para controle pressórico.\nCaso 3: Mulher, 45 anos, obesa e diabética, em uso do mesmo medicamento há 12 anos, apresenta-se com hipovitaminose B12.\n\nOs medicamentos que apresentam, respectivamente, maior probabilidade de estar implicados na gênese dos efeitos colaterais destacados acima, são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "anlodipino – hidroclorotiazida - metformina",
        "explanation": "A alternativa **A** está correta. De acordo com as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**: 1. **Anlodipino** (bloqueador de canais de cálcio diidropiridínico) causa vasodilatação arteriolar pré-capilar seletiva, produzindo **edema maleolar/de membros inferiores bilateral** dose-dependente. 2. **Hidroclorotiazida** (diurético tiazídico) reduz a excreção renal de ácido úrico, precipitando **hiperuricemia e crises de gota**. 3. **Metformina** em uso prolongado interfere na absorção ileal dependente de cálcio do complexo fator intrínseco-cobalamina, causando **deficiência de vitamina B12**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "lisinopril – furosemida – glibenclamida",
        "explanation": "Incorreta: IECA (lisinopril) não causa edema de MMII tipicamente (causa tosse seca/angioedema) e glibenclamida não causa hipovitaminose B12.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "metildopa – nifedipino – orlistate",
        "explanation": "Incorreta: Metildopa não tem como efeito clássico edema de MMII, nifedipino não causa hiperuricemia e orlistate reduz absorção de vitaminas lipossolúveis (A, D, E, K), não B12.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "losartana – losartana – pioglitazona",
        "explanation": "Incorreta: A losartana tem efeito **uricosúrico** (reduz ácido úrico, sendo inclusive preferível em hipertensos com gota).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "clortalidana - atenolol – exenatida",
        "explanation": "Incorreta: Clortalidana é diurético (não causa edema) e atenolol/exenatida não correspondem aos efeitos dos casos 2 e 3.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. De acordo com as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**:\n1. **Anlodipino** (bloqueador de canais de cálcio diidropiridínico) causa vasodilatação arteriolar pré-capilar seletiva, produzindo **edema maleolar/de membros inferiores bilateral** dose-dependente.\n2. **Hidroclorotiazida** (diurético tiazídico) reduz a excreção renal de ácido úrico, precipitando **hiperuricemia e crises de gota**.\n3. **Metformina** em uso prolongado interfere na absorção ileal dependente de cálcio do complexo fator intrínseco-cobalamina, causando **deficiência de vitamina B12**.\n- **B) Incorreta:** IECA (lisinopril) não causa edema de MMII tipicamente (causa tosse seca/angioedema) e glibenclamida não causa hipovitaminose B12.\n- **C) Incorreta:** Metildopa não tem como efeito clássico edema de MMII, nifedipino não causa hiperuricemia e orlistate reduz absorção de vitaminas lipossolúveis (A, D, E, K), não B12.\n- **D) Incorreta:** A losartana tem efeito **uricosúrico** (reduz ácido úrico, sendo inclusive preferível em hipertensos com gota).\n- **E) Incorreta:** Clortalidana é diurético (não causa edema) e atenolol/exenatida não correspondem aos efeitos dos casos 2 e 3.",
    "perolaClinica": "A alternativa **A** está correta. De acordo com as **Diretrizes Brasileiras de Hipertensão Arterial (SBC 2020)** e a **SBD**: 1. **Anlodipino** (bloqueador de canais de cálcio diidropiridínico) causa vasodilatação…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Efeitos adversos clássicos de anti-hipertensivos e antidiabéticos: anlodipino, hidroclorotiazida e metformina.",
      "raciocinioChave": "O anlodipino (bloqueador de canal de cálcio diidropiridínico) causa vasodilatação arteriolar pré-capilar seletiva, gerando edema bilateral de membros inferiores. A hidroclorotiazida compete pela excreção tubular de ácido úrico (causando hiperuricemia e gota), e o uso prolongado de metformina reduz a absorção ileal de vitamina B12.",
      "armadilhaBanca": "Atribuir edema maleolar a IECA/diuréticos, confundir tiazídico com losartana na gota ou atribuir deficiência de B12 à glibenclamida ou orlistate."
    },
    "mapaDistratores": {
      "B": "O lisinopril (IECA) tem como efeitos típicos tosse seca e angioedema (não edema maleolar), e a glibenclamida causa hipoglicemia e ganho ponderal, não deficiência de B12.",
      "C": "Metildopa não produz classicamente edema maleolar, nifedipino não precipita gota e orlistate prejudica a absorção de vitaminas lipossolúveis (A, D, E e K), não da B12.",
      "D": "A losartana possui efeito uricosúrico que reduz o ácido úrico sérico (sendo benéfica na gota), além de não causar edema de membros inferiores como os BCCs.",
      "E": "Clortalidana é diurético tiazídico-símile (não causa edema periférico), e nem atenolol nem exenatida explicam respectivamente hiperuricemia e hipovitaminose B12 crônica."
    }
  },
  {
    "id": "q-uepa-2022-035",
    "code": "Q-UEPA22-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Hemolíticas e Doença Falciforme",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-anemias-hemoliticas-e-doenca-falciforme",
    "tags": [
      "anemia-hemolitica",
      "hemolise-intravascular",
      "haptoglobina",
      "laboratorio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em um paciente com anemia hemolítica intravascular, espera-se usualmente a redução do marcador:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Bilirrubina indireta.",
        "explanation": "Incorreta: A bilirrubina indireta **aumenta** pelo excesso de catabolismo do grupamento heme.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Reticulócitos.",
        "explanation": "Incorreta: Os reticulócitos **aumentam** (reticulocitose) como resposta medular compensatória à anemia hemolítica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Haptoglobina",
        "explanation": "A alternativa **C** está correta. Na **anemia hemolítica intravascular** (**Harrison / Hoffbrand**), a hemoglobina livre liberada no plasma liga-se rapidamente à **haptoglobina** sérica, formando complexos depurados pelo sistema reticuloendotelial — o que provoca **queda acentuada (redução ou níveis indetectáveis) da haptoglobina**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Desidrogenase lática.",
        "explanation": "Incorreta: A desidrogenase lática (DHL/LDH) **aumenta** significativamente pela lise das hemácias.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Hemoglobinúria.",
        "explanation": "Incorreta: A hemoglobinúria **surge/aumenta** quando a hemoglobina livre excede a capacidade de ligação da haptoglobina e é filtrada pelos rins.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Na **anemia hemolítica intravascular** (**Harrison / Hoffbrand**), a hemoglobina livre liberada no plasma liga-se rapidamente à **haptoglobina** sérica, formando complexos depurados pelo sistema reticuloendotelial — o que provoca **queda acentuada (redução ou níveis indetectáveis) da haptoglobina**.\n- **A) Incorreta:** A bilirrubina indireta **aumenta** pelo excesso de catabolismo do grupamento heme.\n- **B) Incorreta:** Os reticulócitos **aumentam** (reticulocitose) como resposta medular compensatória à anemia hemolítica.\n- **D) Incorreta:** A desidrogenase lática (DHL/LDH) **aumenta** significativamente pela lise das hemácias.\n- **E) Incorreta:** A hemoglobinúria **surge/aumenta** quando a hemoglobina livre excede a capacidade de ligação da haptoglobina e é filtrada pelos rins.",
    "perolaClinica": "A alternativa **C** está correta. Na **anemia hemolítica intravascular** (**Harrison / Hoffbrand**), a hemoglobina livre liberada no plasma liga-se rapidamente à **haptoglobina** sérica, formando complexos depurados…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Comportamento laboratorial da haptoglobina sérica na anemia hemolítica intravascular.",
      "raciocinioChave": "Na hemólise intravascular, a hemoglobina livre liberada na circulação liga-se rapidamente à haptoglobina plasmática, e o complexo formado é depurado pelos macrófagos. Esse consumo acelerado provoca redução acentuada ou níveis indetectáveis de haptoglobina sérica, enquanto bilirrubina indireta, LDH, reticulócitos e hemoglobinúria se elevam.",
      "armadilhaBanca": "Confundir o único marcador que cai na hemólise intravascular (haptoglobina) com os marcadores que se elevam (BI, LDH, reticulócitos e hemoglobinúria)."
    },
    "mapaDistratores": {
      "A": "A bilirrubina indireta aumenta na anemia hemolítica devido à maior degradação do grupamento heme liberado pelas hemácias destruídas.",
      "B": "Os reticulócitos elevam-se como resposta medular compensatória à destruição eritrocitária acelerada.",
      "D": "A desidrogenase lática (DHL/LDH) aumenta de forma expressiva pela liberação dessa enzima intracelular durante a lise das hemácias.",
      "E": "A hemoglobinúria surge ou aumenta na hemólise intravascular quando a hemoglobina livre excede a capacidade de saturação da haptoglobina e é filtrada pelos glomérulos."
    }
  },
  {
    "id": "q-uepa-2022-036",
    "code": "Q-UEPA22-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Infecção do Trato Urinário no Adulto",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-infeccao-do-trato-urinario-no-adulto",
    "tags": [
      "cistite-nao-complicada",
      "itu",
      "fosfomicina",
      "nitrofurantoina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Segundo as Recomendações Consensuais para infecções do trato urinário emanadas em conjunto pelas Sociedades de Infectologia (SBI), Ginecologia e Obstetrícia (FEBRASGO), Urologia (SBU) e Patologia Clínica (SBPC/ML), em 2020, são regimes antimicrobianos de primeira linha para o tratamento de cistite não complicada em mulheres não-grávidas:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Fosfomicina trometamol e Nitrofurantoina.",
        "explanation": "A alternativa **A** está correta. De acordo com o **Consenso Brasileiro de ITU (SBI / FEBRASGO / SBU / SBPC-ML, 2020)** e a **IDSA**, os antimicrobianos de **primeira linha** para **cistite aguda não complicada** em mulheres não gestantes são **fosfomicina trometamol** (3 g, dose única) e **nitrofurantoína** (100 mg VO 6/6h por 5 dias), devido às baixas taxas de resistência de *E. coli* e mínimo dano colateral à microbiota.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Ampicilina e Sulfametoxazol+Trimetoprima.",
        "explanation": "Incorreta: Ampicilina e SMX-TMP apresentam elevadas taxas de resistência de *E. coli* comunitária no Brasil (> 20–30%), não sendo primeira linha empírica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Ceftriaxona e Metronidazol.",
        "explanation": "Incorreta: Ceftriaxona é parenteral (reservada a pielonefrite/ITU complicada) e metronidazol não tem ação contra uropatógenos aeróbios Gram-negativos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Cefalexina e levofloxacino.",
        "explanation": "Incorreta: Cefalexina é opção alternativa (menor eficácia) e fluoroquinolonas (levofloxacino) são poupadas na cistite não complicada pelo risco de efeitos adversos e resistência.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Ciprofloxacino e clindamicina.",
        "explanation": "Incorreta: Ciprofloxacino não é primeira linha na cistite simples e clindamicina não tem atividade contra enterobactérias Gram-negativas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. De acordo com o **Consenso Brasileiro de ITU (SBI / FEBRASGO / SBU / SBPC-ML, 2020)** e a **IDSA**, os antimicrobianos de **primeira linha** para **cistite aguda não complicada** em mulheres não gestantes são **fosfomicina trometamol** (3 g, dose única) e **nitrofurantoína** (100 mg VO 6/6h por 5 dias), devido às baixas taxas de resistência de *E. coli* e mínimo dano colateral à microbiota.\n- **B) Incorreta:** Ampicilina e SMX-TMP apresentam elevadas taxas de resistência de *E. coli* comunitária no Brasil (> 20–30%), não sendo primeira linha empírica.\n- **C) Incorreta:** Ceftriaxona é parenteral (reservada a pielonefrite/ITU complicada) e metronidazol não tem ação contra uropatógenos aeróbios Gram-negativos.\n- **D) Incorreta:** Cefalexina é opção alternativa (menor eficácia) e fluoroquinolonas (levofloxacino) são poupadas na cistite não complicada pelo risco de efeitos adversos e resistência.\n- **E) Incorreta:** Ciprofloxacino não é primeira linha na cistite simples e clindamicina não tem atividade contra enterobactérias Gram-negativas.",
    "perolaClinica": "A alternativa **A** está correta. De acordo com o **Consenso Brasileiro de ITU (SBI / FEBRASGO / SBU / SBPC-ML, 2020)** e a **IDSA**, os antimicrobianos de **primeira linha** para **cistite aguda não complicada** em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Antimicrobianos de primeira linha para cistite aguda não complicada em mulheres não gestantes no Brasil.",
      "raciocinioChave": "Pelo Consenso Brasileiro de ITU (SBI/FEBRASGO/SBU/SBPC-ML) e diretrizes da IDSA, a primeira linha para cistite não complicada em mulheres não grávidas compreende fosfomicina trometamol (dose única) e nitrofurantoína (por 5 dias). Ambos apresentam baixa resistência de E. coli comunitária e baixo impacto na microbiota intestinal e vaginal.",
      "armadilhaBanca": "Indicar fluoroquinolonas (ciprofloxacino/levofloxacino) ou sulfametoxazol-trimetoprima como 1ª linha na cistite não complicada."
    },
    "mapaDistratores": {
      "B": "Ampicilina e sulfametoxazol-trimetoprima apresentam taxas elevadas de resistência bacteriana na comunidade no Brasil (> 20–30%), inviabilizando o uso empírico de primeira linha.",
      "C": "Ceftriaxona é antimicrobiano parenteral reservado para pielonefrite/ITU complicada, e metronidazol não possui atividade contra enterobactérias aeróbias uropatogênicas.",
      "D": "Cefalexina é agente alternativo de menor eficácia relativa, e levofloxacino (fluoroquinolona) deve ser poupado na cistite simples pelos efeitos adversos e risco de resistência.",
      "E": "Ciprofloxacino é reservado a casos complicados ou pielonefrite pelo alto potencial de dano colateral, e clindamicina não atua contra bacilos Gram-negativos entéricos."
    }
  },
  {
    "id": "q-uepa-2022-037",
    "code": "Q-UEPA22-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Antimicrobianos e Infecções Relacionadas à Assistência",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-antimicrobianos-e-infeccoes-relacionadas-a-assistencia",
    "tags": [
      "clostridioides-difficile",
      "colite-pseudomembranosa",
      "toxinas-a-e-b",
      "diarreia-nosocomial"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Após avaliação de um paciente internado por pé diabético infectado - com uso por tempo prolongado de ceftriaxona e clindamicina - que evoluiu com quadro de febre e mais de 10 episódios/dia de diarreia aquosa, levantou-se a hipótese de colite pseudomembranosa. O exame que tem maior importância para confirmação deste diagnóstico é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Parasitológico de Fezes (MIF).",
        "explanation": "Incorreta: O EPF (MIF) pesquisa parasitas intestinais (protozoários e helmintos), não detectando *C. difficile*.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Pesquisa das toxinas A e B.",
        "explanation": "A alternativa **B** está correta. Na suspeita de **infecção por *Clostridioides difficile* / colite pseudomembranosa** (classicamento associada ao uso de clindamicina, cefalosporinas e quinolonas), o diagnóstico laboratorial confirmatório baseia-se na **pesquisa das toxinas A e B de *C. difficile* nas fezes** (geralmente em algoritmo em duas etapas com GDH ou NAAT/PCR + EIA para toxinas A/B, conforme diretrizes **IDSA/SHEA**).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Cápsula endoscópica.",
        "explanation": "Incorreta: Cápsula endoscópica avalia intestino delgado e não tem papel no diagnóstico de colite por *C. difficile*.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Calprotectina fecal.",
        "explanation": "Incorreta: Calprotectina fecal é marcador inespecífico de inflamação intestinal (usado em DII), não confirma etiologia por *C. difficile*.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Reação de Widal.",
        "explanation": "Incorreta: Reação de Widal é sorologia histórica para febre tifoide (*Salmonella Typhi*).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Na suspeita de **infecção por *Clostridioides difficile* / colite pseudomembranosa** (classicamento associada ao uso de clindamicina, cefalosporinas e quinolonas), o diagnóstico laboratorial confirmatório baseia-se na **pesquisa das toxinas A e B de *C. difficile* nas fezes** (geralmente em algoritmo em duas etapas com GDH ou NAAT/PCR + EIA para toxinas A/B, conforme diretrizes **IDSA/SHEA**).\n- **A) Incorreta:** O EPF (MIF) pesquisa parasitas intestinais (protozoários e helmintos), não detectando *C. difficile*.\n- **C) Incorreta:** Cápsula endoscópica avalia intestino delgado e não tem papel no diagnóstico de colite por *C. difficile*.\n- **D) Incorreta:** Calprotectina fecal é marcador inespecífico de inflamação intestinal (usado em DII), não confirma etiologia por *C. difficile*.\n- **E) Incorreta:** Reação de Widal é sorologia histórica para febre tifoide (*Salmonella Typhi*).",
    "perolaClinica": "A alternativa **B** está correta. Na suspeita de **infecção por *Clostridioides difficile* / colite pseudomembranosa** (classicamento associada ao uso de clindamicina, cefalosporinas e quinolonas), o diagnóstico…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Confirmação diagnóstica da colite pseudomembranosa por Clostridioides difficile após antibioticoterapia.",
      "raciocinioChave": "Diarreia aquosa profusa e febre após uso prolongado de clindamicina e ceftriaxona levantam forte suspeita de infecção por Clostridioides difficile. A confirmação etiológica exige a pesquisa das toxinas A e B nas fezes.",
      "armadilhaBanca": "Confundir marcadores inflamatórios intestinais inespecíficos, como a calprotectina fecal, com testes específicos para toxinas de C. difficile."
    },
    "mapaDistratores": {
      "A": "O exame parasitológico de fezes (MIF) identifica protozoários e helmintos, não detectando Clostridioides difficile nem suas toxinas.",
      "C": "A cápsula endoscópica avalia o intestino delgado e não tem papel diagnóstico na colite pseudomembranosa.",
      "D": "A calprotectina fecal é um marcador inflamatório intestinal inespecífico e não confirma etiologia por C. difficile.",
      "E": "A reação de Widal é um teste sorológico histórico direcionado à febre tifoide (Salmonella Typhi), sem relação com C. difficile."
    }
  },
  {
    "id": "q-uepa-2022-038",
    "code": "Q-UEPA22-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Diabetes Mellitus - Diagnóstico e Tratamento",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-diabetes-mellitus-diagnostico-e-tratamento",
    "tags": [
      "diabetes-mellitus-tipo-2",
      "isglt2",
      "empagliflozina",
      "doenca-renal-do-diabetes",
      "tratamento-farmacologico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 48 anos, diabético tipo 2 há 5 anos, em uso de metformina XR 2g/dia, obeso (IMC 33 kg/m²) e com doença renal do diabético (TFG: 48 mL/min/1,73 m² – CKD-EPI), vem à consulta com seguintes exames: glicemia 160 mg/dL, hemoglobina glicada: 8,4% e peptidio C 2,8 (VR: 1,1 até 4,4 ng/ml). A terapia antidiabética que deve ser prioritariamente introduzida para este paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Saxagliptina",
        "explanation": "Incorreta: Saxagliptina (inibidor de DPP-4) é neutra em peso e não oferece benefício nefroprotetor ou cardiovascular (além de aumentar risco de hospitalização por IC).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Empagliflozina",
        "explanation": "A alternativa **B** está correta. Segundo as **Diretrizes da SBD / ADA / KDIGO**, em pacientes com **DM2 e doença renal do diabetes (TFG ≥ 20–30 mL/min/1,73 m²)**, os **inibidores de SGLT2** (como **empagliflozina**, dapagliflozina ou canagliflozina) são terapia **prioritária** associada à metformina, pois promovem **nefroproteção comprovada** (redução de progressão de DRC e albuminúria), benefício cardiovascular e **perda ponderal** (adicionalmente favorável pela obesidade — IMC 33 kg/m²).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Pioglitazona",
        "explanation": "Incorreta: Pioglitazona (glitazona) causa ganho de peso e retenção hídrica, sem benefício nefroprotetor prioritário.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Insulina degludeca",
        "explanation": "Incorreta: Com peptídeo C preservado (2,8 ng/mL), HbA1c 8,4% e sem sintomas catabólicos, não há indicação prioritária de insulinoterapia, que ainda promove ganho de peso.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "gliclazida",
        "explanation": "Incorreta: Gliclazida (sulfonilureia) causa ganho ponderal, risco de hipoglicemia (especialmente na DRC) e não confere proteção renal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Segundo as **Diretrizes da SBD / ADA / KDIGO**, em pacientes com **DM2 e doença renal do diabetes (TFG ≥ 20–30 mL/min/1,73 m²)**, os **inibidores de SGLT2** (como **empagliflozina**, dapagliflozina ou canagliflozina) são terapia **prioritária** associada à metformina, pois promovem **nefroproteção comprovada** (redução de progressão de DRC e albuminúria), benefício cardiovascular e **perda ponderal** (adicionalmente favorável pela obesidade — IMC 33 kg/m²).\n- **A) Incorreta:** Saxagliptina (inibidor de DPP-4) é neutra em peso e não oferece benefício nefroprotetor ou cardiovascular (além de aumentar risco de hospitalização por IC).\n- **C) Incorreta:** Pioglitazona (glitazona) causa ganho de peso e retenção hídrica, sem benefício nefroprotetor prioritário.\n- **D) Incorreta:** Com peptídeo C preservado (2,8 ng/mL), HbA1c 8,4% e sem sintomas catabólicos, não há indicação prioritária de insulinoterapia, que ainda promove ganho de peso.\n- **E) Incorreta:** Gliclazida (sulfonilureia) causa ganho ponderal, risco de hipoglicemia (especialmente na DRC) e não confere proteção renal.",
    "perolaClinica": "A alternativa **B** está correta. Segundo as **Diretrizes da SBD / ADA / KDIGO**, em pacientes com **DM2 e doença renal do diabetes (TFG ≥ 20–30 mL/min/1,73 m²)**, os **inibidores de SGLT2** (como **empagliflozina**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escolha prioritária de inibidor de SGLT2 em DM2 com doença renal do diabetes e obesidade.",
      "raciocinioChave": "Em paciente com DM2 mal controlada (HbA1c 8,4%), obesidade e doença renal do diabetes (TFG 48 mL/min/1,73 m²), deve-se associar um inibidor de SGLT2 como a empagliflozina à metformina. Essa classe reduz a progressão da nefropatia, eventos cardiovasculares e favorece perda ponderal.",
      "armadilhaBanca": "Indicar insulina precocemente com peptídeo C preservado ou escolher hipoglicemiantes sem benefício nefroprotetor na presença de DRC."
    },
    "mapaDistratores": {
      "A": "A saxagliptina (inibidor de DPP-4) não oferece proteção renal ou cardiovascular comprovada e ainda aumenta o risco de hospitalização por insuficiência cardíaca.",
      "C": "A pioglitazona promove retenção hídrica e ganho ponderal, não sendo prioridade frente ao benefício nefroprotetor dos iSGLT2.",
      "D": "Com peptídeo C preservado e ausência de sintomas catabólicos, não há indicação prioritária de insulina, que também favorece ganho de peso.",
      "E": "A gliclazida é uma sulfonilureia associada a ganho ponderal e maior risco de hipoglicemia na DRC, sem efeito nefroprotetor."
    }
  },
  {
    "id": "q-uepa-2022-039",
    "code": "Q-UEPA22-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Infecções de Pele e Partes Moles",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-infeccoes-de-pele-e-partes-moles",
    "tags": [
      "herpes-zoster",
      "neuralgia-pos-herpetica",
      "gabapentina",
      "vacinacao",
      "dor-neuropatica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mariângela, 60 anos, apresentou quadro de herpes zoster em região torácica há 2 semanas e desde então vem apresentando quadro de intensa dor em “queimação” e “choques” na região acometida (neuralgia pós-herpética). A alternativa que apresenta o tratamento que pode ser prescrito para manejo crônico da dor neuropática e quando, preferencialmente, você encaminharia esta paciente para vacinação contra herpes-zoster é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amitriptilina; vacinar imediatamente.",
        "explanation": "Incorreta: Embora a amitriptilina seja eficaz na dor neuropática, não se recomenda vacinar imediatamente durante/logo após o quadro agudo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Codeína; vacinar imediatamente.",
        "explanation": "Incorreta: Opioides fracos (codeína) não são primeira linha para dor neuropática crônica, e a vacinação não é imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Dexametasona; um ano após o quadro agudo.",
        "explanation": "Incorreta: Corticoides sistêmicos (dexametasona) não são indicados para manejo crônico da neuralgia pós-herpética.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Gabapentina; um ano após o quadro agudo.",
        "explanation": "A alternativa **D** está correta. O tratamento farmacológico de primeira linha para **dor neuropática / neuralgia pós-herpética** inclui gabapentinoides (**gabapentina** ou pregabalina), antidepressivos tricíclicos (amitriptilina/nortriptilina) ou duais (duloxetina). Quanto à **vacinação contra herpes-zóster** em quem teve episódio recente, segundo a recomendação clássica da **SBIm** vigente na época da prova (referente à vacina atenuada Zostavax®, e frequentemente adotada como intervalo de conveniência após episódio agudo), deve-se aguardar preferencialmente **1 ano após o quadro agudo** (ou no mínimo 6 meses na vacina recombinante atual) antes de vacinar, pois a infecção recente induz reforço imune transitório.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Duloxetina; não existe mais indicação de vacinação contra herpes-zoster.",
        "explanation": "Incorreta: História prévia de herpes-zóster **não** contraindica nem dispensa a vacinação (pois há risco de recorrência).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. O tratamento farmacológico de primeira linha para **dor neuropática / neuralgia pós-herpética** inclui gabapentinoides (**gabapentina** ou pregabalina), antidepressivos tricíclicos (amitriptilina/nortriptilina) ou duais (duloxetina). Quanto à **vacinação contra herpes-zóster** em quem teve episódio recente, segundo a recomendação clássica da **SBIm** vigente na época da prova (referente à vacina atenuada Zostavax®, e frequentemente adotada como intervalo de conveniência após episódio agudo), deve-se aguardar preferencialmente **1 ano após o quadro agudo** (ou no mínimo 6 meses na vacina recombinante atual) antes de vacinar, pois a infecção recente induz reforço imune transitório.\n- **A) Incorreta:** Embora a amitriptilina seja eficaz na dor neuropática, não se recomenda vacinar imediatamente durante/logo após o quadro agudo.\n- **B) Incorreta:** Opioides fracos (codeína) não são primeira linha para dor neuropática crônica, e a vacinação não é imediata.\n- **C) Incorreta:** Corticoides sistêmicos (dexametasona) não são indicados para manejo crônico da neuralgia pós-herpética.\n- **E) Incorreta:** História prévia de herpes-zóster **não** contraindica nem dispensa a vacinação (pois há risco de recorrência).",
    "perolaClinica": "A alternativa **D** está correta. O tratamento farmacológico de primeira linha para **dor neuropática / neuralgia pós-herpética** inclui gabapentinoides (**gabapentina** ou pregabalina), antidepressivos tricíclicos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo de primeira linha da neuralgia pós-herpética e intervalo clássico para vacinação pós-zóster.",
      "raciocinioChave": "A dor neuropática crônica pós-herpética tem nos gabapentinoides (como a gabapentina) terapia de primeira linha. Pela recomendação clássica da SBIm aplicada à época da prova para prevenção após episódio agudo, orientava-se aguardar um ano para vacinar.",
      "armadilhaBanca": "Escolher fármaco adequado (como amitriptilina) associado a momento vacinal incorreto ou acreditar que o episódio prévio dispensa a vacinação."
    },
    "mapaDistratores": {
      "A": "Embora a amitriptilina seja primeira linha para dor neuropática, considera-se inadequada a vacinação imediata após o quadro agudo pela regra clássica de aguardar 1 ano.",
      "B": "A codeína é um opioide fraco que não constitui primeira linha na dor neuropática crônica, além de propor vacinação imediata.",
      "C": "Corticoides sistêmicos como a dexametasona não são indicados para o manejo crônico da neuralgia pós-herpética.",
      "E": "Episódio prévio de herpes-zóster não confere imunidade definitiva nem contraindica a vacinação contra recorrências."
    }
  },
  {
    "id": "q-uepa-2022-040",
    "code": "Q-UEPA22-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Doença Hepática Esteatótica e Alcoólica",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-doenca-hepatica-esteatotica-e-alcoolica",
    "tags": [
      "esteatose-hepatica",
      "mash",
      "masld",
      "sindrome-metabolica",
      "esteato-hepatite"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Na avaliação de um paciente obeso com esteatose hepática grau III associada a um aumento de transaminases, o médico assistente aventou a possibilidade de se tratar da esteato-hepatite Metabólica (EHM – ou “MASH”, em inglês). Sobre este caso, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Exames de imagem, como ultrassom e ressonância magnética abdominais são capazes de avaliar a extensão (grau) da infiltração gordurosa hepática e distinguir esteatose de esteato-hepatite.",
        "explanation": "Incorreta: Exames de imagem (USG, TC, RM) detectam e quantificam a esteatose, mas **não conseguem distinguir esteatose simples de esteato-hepatite (MASH)** (balonização/inflamação lobular só é confirmada histologicamente).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Biopsia hepática é uma exame mandatório para confirmar diagnóstico em todos os casos e para o screening de carcinoma hepatocelular, complicação mais precoce desta condição clínica.",
        "explanation": "Incorreta: A biópsia hepática **não** é mandatória em todos os casos (reserva-se a casos selecionados/dúvida diagnóstica), nem é exame de rastreamento de carcinoma hepatocelular (feito com USG semestral em cirróticos).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A metformina é recomendada como tratamento específico padrão-ouro para MASH, pois diversos estudos têm demonstrado sua eficácia na melhora histológica do grau de fibrose.",
        "explanation": "Incorreta: A metformina **não** melhora a histologia hepática ou a fibrose na MASH; a base do tratamento é perda ponderal (7–10%), podendo-se considerar pioglitazona, agonistas de GLP-1 ou vitamina E em casos selecionados.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "No manejo deste paciente, é prudente investigar também outras condições clínicas, como hepatites virais e doença hepática alcoólica, bem como marcadores e critérios da síndrome metabólica.",
        "explanation": "A alternativa **D** está correta. De acordo com as diretrizes da **SBH (Sociedade Brasileira de Hepatologia)** e **AASLD**, diante de esteatose hepática com elevação de transaminases (suspeita de **MASH**), é obrigatório **investigar e excluir outras causas de hepatopatia crônica** — como **hepatites virais (B e C)** e **consumo abusivo de álcool** (além de hepatopatias autoimunes/metabólicas) — e avaliar todos os componentes da **síndrome metabólica** (DM2, dislipidemia, HAS, circunferência abdominal) e o grau de fibrose (ex.: FIB-4, elastografia).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Trata-se de uma condição clínica muito prevalente, mas não se tem observado sua associação com cirrose hepática. Componentes antioxidantes, como a silimarina, são o tratamento de escolha.",
        "explanation": "Incorreta: A MASH é atualmente uma das principais causas mundiais de **cirrose hepática** e transplante hepático, e a silimarina não é tratamento de escolha.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. De acordo com as diretrizes da **SBH (Sociedade Brasileira de Hepatologia)** e **AASLD**, diante de esteatose hepática com elevação de transaminases (suspeita de **MASH**), é obrigatório **investigar e excluir outras causas de hepatopatia crônica** — como **hepatites virais (B e C)** e **consumo abusivo de álcool** (além de hepatopatias autoimunes/metabólicas) — e avaliar todos os componentes da **síndrome metabólica** (DM2, dislipidemia, HAS, circunferência abdominal) e o grau de fibrose (ex.: FIB-4, elastografia).\n- **A) Incorreta:** Exames de imagem (USG, TC, RM) detectam e quantificam a esteatose, mas **não conseguem distinguir esteatose simples de esteato-hepatite (MASH)** (balonização/inflamação lobular só é confirmada histologicamente).\n- **B) Incorreta:** A biópsia hepática **não** é mandatória em todos os casos (reserva-se a casos selecionados/dúvida diagnóstica), nem é exame de rastreamento de carcinoma hepatocelular (feito com USG semestral em cirróticos).\n- **C) Incorreta:** A metformina **não** melhora a histologia hepática ou a fibrose na MASH; a base do tratamento é perda ponderal (7–10%), podendo-se considerar pioglitazona, agonistas de GLP-1 ou vitamina E em casos selecionados.\n- **E) Incorreta:** A MASH é atualmente uma das principais causas mundiais de **cirrose hepática** e transplante hepático, e a silimarina não é tratamento de escolha.",
    "perolaClinica": "A alternativa **D** está correta. De acordo com as diretrizes da **SBH (Sociedade Brasileira de Hepatologia)** e **AASLD**, diante de esteatose hepática com elevação de transaminases (suspeita de **MASH**), é…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Investigação etiológica diferencial e avaliação metabólica na suspeita de esteato-hepatite metabólica (MASH).",
      "raciocinioChave": "Diante de esteatose hepática associada à elevação de transaminases (suspeita de MASH), é mandatório excluir outras causas de hepatopatia crônica, como hepatites virais e etilismo, além de rastrear componentes da síndrome metabólica. O diagnóstico da MASH exige contexto clínico-metabólico e exclusão de diagnósticos alternativos.",
      "armadilhaBanca": "Atribuir aos exames de imagem a capacidade de diferenciar esteatose simples de esteato-hepatite ou exigir biópsia em todos os casos."
    },
    "mapaDistratores": {
      "A": "Ultrassom e ressonância magnética quantificam a esteatose, mas não distinguem esteatose simples de esteato-hepatite (balonização e inflamação), cuja confirmação é histológica.",
      "B": "A biópsia hepática não é obrigatória em todos os casos nem funciona como método de rastreamento para carcinoma hepatocelular.",
      "C": "A metformina não promove melhora histológica da fibrose ou da inflamação na MASH.",
      "E": "A MASH é uma das principais causas de cirrose hepática na atualidade, e a silimarina não é tratamento de escolha."
    }
  },
  {
    "id": "q-uepa-2022-041",
    "code": "Q-UEPA22-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Aneurisma e Dissecação de Aorta",
    "temaSlug": "cg-vascular",
    "subtemaSlug": "cg-vascular-aneurisma-e-dissecacao-de-aorta",
    "tags": [
      "aneurisma-de-aorta-abdominal",
      "aaa-roto",
      "massa-pulsatil",
      "ultrassom-point-of-care",
      "emergencia-vascular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 67 anos de idade, hipertenso e tabagista de longa data, dá entrada no setor de emergência sudoréico, frequência cardíaca de 120 bpm, pressão arterial 80x40 mmHg, dor abdominal difusa com massa pulsátil no mesogastro. O diagnóstico e conduta, neste caso, são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Dissecção de aorta tipo A de Stanford. Iniciar betaloqueador, solicitar raio x de tórax para confirmar alargamento do mediastino.",
        "explanation": "Incorreta: Dissecção de aorta tipo A cursa com dor torácica lancinante irradiada para dorso, não massa abdominal pulsátil.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Isquemia mesentérica. Analgesia com morfina e anticoagulação com heparina.",
        "explanation": "Incorreta: Isquemia mesentérica apresenta dor desproporcional ao exame físico, sem massa abdominal pulsátil.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Aneurisma de aorta abdominal roto. Ultrassom à beira do leito e avaliação urgente do cirurgião.",
        "explanation": "A alternativa **C** está correta. A tríade clássica de **dor abdominal aguda + massa pulsátil abdominal + choque/hipotensão (PA 80×40 mmHg, FC 120 bpm)** em homem idoso hipertenso e tabagista define **aneurisma de aorta abdominal (AAA) roto**. Conforme o **Sabiston** e as diretrizes da **SVS (Society for Vascular Surgery)**, em paciente **hemodinamicamente instável**, **não se deve atrasar a cirurgia levando o paciente à tomografia**; realiza-se apenas **ultrassom à beira do leito (FAST/USG abdominal)** para confirmar o aneurisma/hemoperitônio e aciona-se **avaliação cirúrgica imediata (centro cirúrgico)**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Aneurisma de aorta abdominal roto. Tomografia computadorizada sem contraste e avaliação urgente do cirurgião.",
        "explanation": "Incorreta: A instabilidade hemodinâmica (PA 80×40 mmHg) contraindica transportar o paciente para tomografia computadorizada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Aneurisma de aorta abdominal roto. Tomografia computadorizada com contraste endovenoso e avaliação urgente do cirurgião.",
        "explanation": "Incorreta: Angiotomografia é reservada apenas a pacientes **hemodinamicamente estáveis** (para planejamento endovascular/EVAR).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A tríade clássica de **dor abdominal aguda + massa pulsátil abdominal + choque/hipotensão (PA 80×40 mmHg, FC 120 bpm)** em homem idoso hipertenso e tabagista define **aneurisma de aorta abdominal (AAA) roto**. Conforme o **Sabiston** e as diretrizes da **SVS (Society for Vascular Surgery)**, em paciente **hemodinamicamente instável**, **não se deve atrasar a cirurgia levando o paciente à tomografia**; realiza-se apenas **ultrassom à beira do leito (FAST/USG abdominal)** para confirmar o aneurisma/hemoperitônio e aciona-se **avaliação cirúrgica imediata (centro cirúrgico)**.\n- **A) Incorreta:** Dissecção de aorta tipo A cursa com dor torácica lancinante irradiada para dorso, não massa abdominal pulsátil.\n- **B) Incorreta:** Isquemia mesentérica apresenta dor desproporcional ao exame físico, sem massa abdominal pulsátil.\n- **D) Incorreta:** A instabilidade hemodinâmica (PA 80×40 mmHg) contraindica transportar o paciente para tomografia computadorizada.\n- **E) Incorreta:** Angiotomografia é reservada apenas a pacientes **hemodinamicamente estáveis** (para planejamento endovascular/EVAR).",
    "perolaClinica": "A alternativa **C** está correta. A tríade clássica de **dor abdominal aguda + massa pulsátil abdominal + choque/hipotensão (PA 80×40 mmHg, FC 120 bpm)** em homem idoso hipertenso e tabagista define **aneurisma de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico e conduta imediata no aneurisma de aorta abdominal roto com instabilidade hemodinâmica.",
      "raciocinioChave": "A tríade de dor abdominal aguda, massa pulsátil no mesogastro e choque em homem idoso tabagista e hipertenso fecha o diagnóstico clínico de aneurisma de aorta abdominal roto. Na instabilidade hemodinâmica, realiza-se ultrassom à beira do leito sem atrasar a avaliação cirúrgica imediata.",
      "armadilhaBanca": "Indicar tomografia computadorizada (com ou sem contraste) em paciente instável, retardando fatalmente a abordagem cirúrgica."
    },
    "mapaDistratores": {
      "A": "A dissecção de aorta tipo A manifesta-se com dor torácica lancinante irradiada para o dorso, não explicando massa pulsátil mesogástrica.",
      "B": "A isquemia mesentérica cursa com dor abdominal desproporcional ao exame físico, sem massa abdominal pulsátil.",
      "D": "A instabilidade hemodinâmica contraindica o transporte do paciente para tomografia computadorizada.",
      "E": "A angiotomografia com contraste é reservada apenas a pacientes hemodinamicamente estáveis para planejamento cirúrgico."
    }
  },
  {
    "id": "q-uepa-2022-042",
    "code": "Q-UEPA22-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Perfurativo",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-abdome-agudo-perfurativo",
    "tags": [
      "abdome-agudo-perfurativo",
      "ulcera-peptica-perfurada",
      "sinal-de-jobert",
      "pneumoperitonio",
      "aine"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 72 anos de idade chega ao hospital com quadro de dor abdominal de início agudo há cerca de 8 horas. É ex-tabagista e usuária contumaz de dipirona, diclofenaco e captopril. Ao exame apresenta descompressão brusca dolorosa em hipocôndrios direito e esquerdo e no epigastro, além de sinal de Jobert positivo. A hipótese diagnóstica, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colecistite aguda",
        "explanation": "Incorreta: Colecistite aguda cursa com sinal de Murphy positivo e não provoca pneumoperitônio (sinal de Jobert).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Úlcera gástrica perfurada",
        "explanation": "A alternativa **B** está correta. Paciente idosa, ex-tabagista e usuária crônica de **AINE (diclofenaco)** com dor abdominal súbita, sinais de irritação peritoneal em andar superior e **sinal de Jobert positivo** (timpanismo à percussão sobre a área hepática em substituição à macicez habitual, indicando **pneumoperitônio**) caracteriza classicamente **abdome agudo perfurativo por úlcera péptica (gástrica/duodenal) perfurada** (**Sabiston / Townsend**).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Apendicite aguda",
        "explanation": "Incorreta: Apendicite aguda localiza-se classicamente em fossa ilíaca direita (sinal de Blumberg) e raramente produz pneumoperitônio volumoso precoce.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Diverticulite",
        "explanation": "Incorreta: Diverticulite acomete tipicamente fossa ilíaca esquerda; embora possa perfurar, o histórico de AINE + peritonite em andar superior favorece fortemente úlcera péptica perfurada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Isquemia mesentérica",
        "explanation": "Incorreta: Isquemia mesentérica apresenta dor intensa desproporcional ao exame abdominal inicial, sem sinal de Jobert.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Paciente idosa, ex-tabagista e usuária crônica de **AINE (diclofenaco)** com dor abdominal súbita, sinais de irritação peritoneal em andar superior e **sinal de Jobert positivo** (timpanismo à percussão sobre a área hepática em substituição à macicez habitual, indicando **pneumoperitônio**) caracteriza classicamente **abdome agudo perfurativo por úlcera péptica (gástrica/duodenal) perfurada** (**Sabiston / Townsend**).\n- **A) Incorreta:** Colecistite aguda cursa com sinal de Murphy positivo e não provoca pneumoperitônio (sinal de Jobert).\n- **C) Incorreta:** Apendicite aguda localiza-se classicamente em fossa ilíaca direita (sinal de Blumberg) e raramente produz pneumoperitônio volumoso precoce.\n- **D) Incorreta:** Diverticulite acomete tipicamente fossa ilíaca esquerda; embora possa perfurar, o histórico de AINE + peritonite em andar superior favorece fortemente úlcera péptica perfurada.\n- **E) Incorreta:** Isquemia mesentérica apresenta dor intensa desproporcional ao exame abdominal inicial, sem sinal de Jobert.",
    "perolaClinica": "A alternativa **B** está correta. Paciente idosa, ex-tabagista e usuária crônica de **AINE (diclofenaco)** com dor abdominal súbita, sinais de irritação peritoneal em andar superior e **sinal de Jobert positivo**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento do abdome agudo perfurativo (sinal de Jobert) por úlcera péptica em usuária de AINE.",
      "raciocinioChave": "O uso crônico de diclofenaco (AINE), somado a dor súbita, peritonite em andar superior e sinal de Jobert positivo (timpanismo sobre a loja hepática por pneumoperitônio), caracteriza perfuração de víscera oca. A principal etiologia nesse contexto é a úlcera péptica perfurada.",
      "armadilhaBanca": "Deixar de valorizar o sinal de Jobert como indicador semiológico clássico de pneumoperitônio e confundir com causas inflamatórias sem ar livre precoce."
    },
    "mapaDistratores": {
      "A": "A colecistite aguda manifesta-se com sinal de Murphy em hipocôndrio direito e não produz pneumoperitônio (sinal de Jobert).",
      "C": "A apendicite aguda localiza-se tipicamente em fossa ilíaca direita e raramente gera pneumoperitônio volumoso capaz de positivar o sinal de Jobert.",
      "D": "A diverticulite acomete tipicamente a fossa ilíaca esquerda e não tem o uso de AINEs como fator etiológico clássico para peritonite alta precoce.",
      "E": "A isquemia mesentérica provoca dor intensa inicialmente desproporcional ao exame abdominal, sem sinal de Jobert."
    }
  },
  {
    "id": "q-uepa-2022-043",
    "code": "Q-UEPA22-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": [
      "trauma-toracico",
      "pneumotorax-hipertensivo",
      "toracocentese-de-alivio",
      "atls",
      "ferimento-por-arma-branca"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 22 anos de idade foi vítima de ferimento por arma branca no 4º espaço intercostal direito na linha paraesternal, chega com as vias aéreas pérvias, murmúrio vesicular abolido à direita, timpanismo na parede anterior do hemitórax direito, turgência de veias jugulares, bulhas cardíacas normofonéticas e pressão arterial 90x60 mmHg. A hipótese diagnóstica e conduta imediata corretas, neste caso, são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pneumotórax simples. Drenagem torácica sob selo d’água.",
        "explanation": "Incorreta: Há choque obstrutivo (hipotensão e turgência jugular), o que caracteriza pneumotórax **hipertensivo**, não simples.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Pneumotórax hipertensivo. Drenagem torácica sob selo d’água.",
        "explanation": "Incorreta: A drenagem em selo d'água é o tratamento definitivo, mas a **conduta imediata** para salvar a vida é a toracocentese de alívio (descompressão imediata).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Pneumotórax aberto. Curativo de 3 pontas.",
        "explanation": "Incorreta: Não há descrição de ferida aspirativa (\"sopro torácico\") > 2/3 do diâmetro traqueal que caracterize pneumotórax aberto.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Pneumotórax aberto. Drenagem torácica sob selo d’água.",
        "explanation": "Incorreta: Trata-se de pneumotórax hipertensivo, cuja conduta imediata é a punção descompressiva.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Pneumotórax hipertensivo. Toracocentese de alívio.",
        "explanation": "A alternativa **E** está correta. O quadro clínico de **murmúrio vesicular abolido + hipertimpanismo à direita + turgência jugular + hipotensão (choque obstrutivo)** com bulhas normofonéticas (afastando tamponamento cardíaco) é diagnóstico clínico de **pneumotórax hipertensivo**. Segundo o **ATLS (10ª edição)**, a **conduta imediata** é a **descompressão torácica de emergência (toracocentese de alívio com agulha calibrosa no 4º/5º EIC anterior à linha axilar média em adultos, ou 2º EIC na LHC)**, seguida posteriormente pela drenagem torácica definitiva em selo d'água.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. O quadro clínico de **murmúrio vesicular abolido + hipertimpanismo à direita + turgência jugular + hipotensão (choque obstrutivo)** com bulhas normofonéticas (afastando tamponamento cardíaco) é diagnóstico clínico de **pneumotórax hipertensivo**. Segundo o **ATLS (10ª edição)**, a **conduta imediata** é a **descompressão torácica de emergência (toracocentese de alívio com agulha calibrosa no 4º/5º EIC anterior à linha axilar média em adultos, ou 2º EIC na LHC)**, seguida posteriormente pela drenagem torácica definitiva em selo d'água.\n- **A) Incorreta:** Há choque obstrutivo (hipotensão e turgência jugular), o que caracteriza pneumotórax **hipertensivo**, não simples.\n- **B) Incorreta:** A drenagem em selo d'água é o tratamento definitivo, mas a **conduta imediata** para salvar a vida é a toracocentese de alívio (descompressão imediata).\n- **C) Incorreta:** Não há descrição de ferida aspirativa (\"sopro torácico\") > 2/3 do diâmetro traqueal que caracterize pneumotórax aberto.\n- **D) Incorreta:** Trata-se de pneumotórax hipertensivo, cuja conduta imediata é a punção descompressiva.",
    "perolaClinica": "A alternativa **E** está correta. O quadro clínico de **murmúrio vesicular abolido + hipertimpanismo à direita + turgência jugular + hipotensão (choque obstrutivo)** com bulhas normofonéticas (afastando tamponamento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de pneumotórax hipertensivo e descompressão torácica imediata.",
      "raciocinioChave": "Murmúrio vesicular abolido e hipertimpanismo à direita associados a turgência jugular e hipotensão (com bulhas normofonéticas) definem choque obstrutivo por pneumotórax hipertensivo. A conduta salvadora imediata é a toracocentese de alívio, antes mesmo da drenagem definitiva.",
      "armadilhaBanca": "Confundir a conduta imediata de emergência (toracocentese de alívio) com o tratamento definitivo (drenagem em selo d'água)."
    },
    "mapaDistratores": {
      "A": "A presença de hipotensão e turgência jugular indica choque obstrutivo, descartando pneumotórax simples.",
      "B": "A drenagem torácica sob selo d'água é o tratamento definitivo, mas não substitui a toracocentese de alívio como medida imediata.",
      "C": "Não há descrição de ferida aspirativa extensa (maior que dois terços do diâmetro traqueal) que caracterize pneumotórax aberto.",
      "D": "Além de não se tratar de pneumotórax aberto, a conduta imediata no quadro hipertensivo é a descompressão por punção ou toracostomia digital."
    }
  },
  {
    "id": "q-uepa-2022-044",
    "code": "Q-UEPA22-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "AVC Isquêmico e AIT",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-avc-isquemico-e-ait",
    "tags": [
      "avc-isquemico",
      "estenose-carotidea",
      "arteria-inominada",
      "fonte-emboligenica",
      "neurologia-vascular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 80 anos apresentando quadro súbito de hemiparesia esquerda. É tabagista e diabético. A provável fonte emboligênica, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "placa aterosclerótica promovendo uma estenose na artéria inominada.",
        "explanation": "A alternativa **A** está correta. Uma **hemiparesia esquerda** súbita indica lesão isquêmica no **hemisfério cerebral direito** (vias motoras piramidais cruzam na decussação das pirâmides). O hemisfério direito é irrigado pela artéria carótida interna direita, ramo da artéria carótida comum direita, que por sua vez nasce do **tronco braquiocefálico (artéria inominada)**. Logo, entre as opções, apenas uma placa na **artéria inominada** pode embolizar para o território cerebral direito (**Sabiston / Anatomia de Moore**).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "placa aterosclerótica promovendo uma estenose na artéria carótida externa direita.",
        "explanation": "Incorreta: A artéria carótida **externa** direita irriga face e pescoço, não o parênquima encefálico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "placa aterosclerótica promovendo uma estenose na artéria carótida interna esquerda.",
        "explanation": "Incorreta: Estenose na artéria carótida interna **esquerda** causaria déficit motor à **direita** (hemiparesia direita).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "placa aterosclerótica promovendo uma estenose na artéria carótida externa esquerda.",
        "explanation": "Incorreta: A artéria carótida externa esquerda irriga estruturas extracranianas à esquerda.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "placa aterosclerótica promovendo uma estenose na artéria cerebral média esquerda.",
        "explanation": "Incorreta: Estenose na artéria cerebral média **esquerda** causaria hemiparesia **direita** (e afasia se hemisfério dominante).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Uma **hemiparesia esquerda** súbita indica lesão isquêmica no **hemisfério cerebral direito** (vias motoras piramidais cruzam na decussação das pirâmides). O hemisfério direito é irrigado pela artéria carótida interna direita, ramo da artéria carótida comum direita, que por sua vez nasce do **tronco braquiocefálico (artéria inominada)**. Logo, entre as opções, apenas uma placa na **artéria inominada** pode embolizar para o território cerebral direito (**Sabiston / Anatomia de Moore**).\n- **B) Incorreta:** A artéria carótida **externa** direita irriga face e pescoço, não o parênquima encefálico.\n- **C) Incorreta:** Estenose na artéria carótida interna **esquerda** causaria déficit motor à **direita** (hemiparesia direita).\n- **D) Incorreta:** A artéria carótida externa esquerda irriga estruturas extracranianas à esquerda.\n- **E) Incorreta:** Estenose na artéria cerebral média **esquerda** causaria hemiparesia **direita** (e afasia se hemisfério dominante).",
    "perolaClinica": "A alternativa **A** está correta. Uma **hemiparesia esquerda** súbita indica lesão isquêmica no **hemisfério cerebral direito** (vias motoras piramidais cruzam na decussação das pirâmides). O hemisfério direito é…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Correlação neuroanatômica entre déficit motor contralateral e território arterial carotídeo direito.",
      "raciocinioChave": "A hemiparesia esquerda súbita decorre de isquemia no hemisfério cerebral direito devido ao cruzamento das vias piramidais na decussação das pirâmides. Como o tronco braquiocefálico (artéria inominada) origina a artéria carótida comum direita, uma placa estenótica nesse vaso pode embolizar para o hemisfério direito.",
      "armadilhaBanca": "Trocar a lateralidade do déficit motor ou confundir a artéria carótida externa (circulação facial/extracraniana) com a circulação encefálica."
    },
    "mapaDistratores": {
      "B": "A artéria carótida externa direita irriga estruturas da face e do pescoço, não suprindo o parênquima cerebral.",
      "C": "A estenose na artéria carótida interna esquerda comprometeria o hemisfério esquerdo, causando hemiparesia à direita.",
      "D": "A artéria carótida externa esquerda irriga apenas territórios extracranianos à esquerda.",
      "E": "A oclusão da artéria cerebral média esquerda provocaria hemiparesia à direita, e não à esquerda."
    }
  },
  {
    "id": "q-uepa-2022-045",
    "code": "Q-UEPA22-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Coledocolitíase e Colangite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-coledocolitiase-e-colangite-aguda",
    "tags": [
      "colangite-aguda",
      "triade-de-charcot",
      "coledocolitiase",
      "antibioticoterapia",
      "descompressao-biliar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 56 anos apresentava dor em cólica no hipocôndrio direito há 5 dias no interior do Estado, hoje chegou à capital apresentando-se ictérica, temperatura axilar de 39º e com dor à palpação do hipocôndrio direito. O quadro descrito e as condutas iniciais para o mesmo são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colecistite aguda. Colecistectomia.",
        "explanation": "Incorreta: Icterícia associada a febre alta e dor em HCD define colangite aguda, e não colecistite aguda simples.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Colangite (tríade de Reynolds). Hidratação, correção de distúrbios hidroeletrolíticos e antibioticoterapia.",
        "explanation": "Incorreta: **Pêntade de Reynolds** (não tríade) acrescenta **hipotensão** e **rebaixamento do nível de consciência** à tríade de Charcot, ausentes no caso.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Colecistite aguda. Hidratação, correção de distúrbios hidroeletrolíticos e antibioticoterapia.",
        "explanation": "Incorreta: O diagnóstico sindrômico é colangite aguda, não colecistite aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Colangite. Colecistectomia.",
        "explanation": "Incorreta: Na colangite aguda, a prioridade é estabilização clínica + antibioticoterapia + drenagem da via biliar (CPRE), não colecistectomia imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Colangite (tríade de Charcot). Hidratação, correção de distúrbios hidroeletrolíticos e antibioticoterapia.",
        "explanation": "A alternativa **E** está correta. A presença de **dor em hipocôndrio direito + febre (39 °C) + icterícia** constitui a clássica **Tríade de Charcot**, sugestiva de **colangite aguda** (infecção bacteriana ascendente de via biliar obstruída). Conforme as **Diretrizes de Tóquio (Tokyo Guidelines 2018)** e o **Sabiston**, a conduta inicial consiste em **hidratação venosa, correção de distúrbios hidroeletrolíticos, antibioticoterapia empírica de amplo espectro** (cobrindo Gram-negativos entéricos e anaeróbios) e posterior **descompressão/drenagem biliar** (preferencialmente por CPRE).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. A presença de **dor em hipocôndrio direito + febre (39 °C) + icterícia** constitui a clássica **Tríade de Charcot**, sugestiva de **colangite aguda** (infecção bacteriana ascendente de via biliar obstruída). Conforme as **Diretrizes de Tóquio (Tokyo Guidelines 2018)** e o **Sabiston**, a conduta inicial consiste em **hidratação venosa, correção de distúrbios hidroeletrolíticos, antibioticoterapia empírica de amplo espectro** (cobrindo Gram-negativos entéricos e anaeróbios) e posterior **descompressão/drenagem biliar** (preferencialmente por CPRE).\n- **A) Incorreta:** Icterícia associada a febre alta e dor em HCD define colangite aguda, e não colecistite aguda simples.\n- **B) Incorreta:** **Pêntade de Reynolds** (não tríade) acrescenta **hipotensão** e **rebaixamento do nível de consciência** à tríade de Charcot, ausentes no caso.\n- **C) Incorreta:** O diagnóstico sindrômico é colangite aguda, não colecistite aguda.\n- **D) Incorreta:** Na colangite aguda, a prioridade é estabilização clínica + antibioticoterapia + drenagem da via biliar (CPRE), não colecistectomia imediata.",
    "perolaClinica": "A alternativa **E** está correta. A presença de **dor em hipocôndrio direito + febre (39 °C) + icterícia** constitui a clássica **Tríade de Charcot**, sugestiva de **colangite aguda** (infecção bacteriana ascendente de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento da tríade de Charcot na colangite aguda e estabilização clínica inicial.",
      "raciocinioChave": "Dor em hipocôndrio direito, febre alta (39 °C) e icterícia compõem a tríade de Charcot, definindo colangite aguda. O manejo inicial prioritário envolve hidratação venosa, correção hidroeletrolítica e antibioticoterapia antes da descompressão biliar.",
      "armadilhaBanca": "Confundir a tríade de Charcot com a pêntade de Reynolds (que exige hipotensão e alteração do sensório) ou indicar colecistectomia imediata."
    },
    "mapaDistratores": {
      "A": "Icterícia febril com dor em hipocôndrio direito caracteriza colangite aguda, e não colecistite aguda não complicada.",
      "B": "A pêntade de Reynolds acrescenta hipotensão e rebaixamento do sensório à tríade de Charcot, achados ausentes no caso.",
      "C": "Embora o suporte inicial citado esteja correto, o diagnóstico sindrômico é colangite aguda, não colecistite aguda.",
      "D": "A colecistectomia imediata não é a conduta inicial na colangite aguda, devendo-se priorizar estabilização clínica, antibióticos e drenagem biliar."
    }
  },
  {
    "id": "q-uepa-2022-046",
    "code": "Q-UEPA22-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": [
      "trauma-abdominal",
      "hematoma-retroperitoneal",
      "zona-2",
      "manobra-de-mattox",
      "laparotomia-exploradora"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "No intraoperatório de uma laparotomia exploradora em um paciente vítima de ferimento por arma branca na parede anterior do abdome o cirurgião se depara com um hematoma retroperitonial em zona 2 esquerda. A melhor conduta, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "explorar o hematoma pela manobra de Cattell apenas caso seja pulsátil.",
        "explanation": "Incorreta: A manobra de Cattell-Braasch expõe o lado **direito**, e no trauma penetrante a exploração não se restringe apenas a hematomas pulsáteis.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "explorar o hematoma pela manobra de Mattox.",
        "explanation": "A alternativa **B** está correta. Segundo os princípios de cirurgia do trauma (**Sabiston / ATLS / Mattox Trauma**), em **trauma penetrante** (ferimento por arma branca), hematomas retroperitoneais em **Zona 1 e Zona 2** são em regra **explorados** (no trauma contuso, Zona 2 só é explorada se expansiva, pulsátil ou rompida). Para expor o retroperitônio à **esquerda** (aorta suprarrenal/infrarrenal, rim e vasos renais esquerdos — Zona 2 esquerda), realiza-se a **manobra de Mattox** (rotação visceral medial da esquerda para a direita, liberando cólon descendente, baço, cauda/corpo do pâncreas e rim esquerdo).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "explorar o hematoma pela manobra de Cattell.",
        "explanation": "Incorreta: A manobra de **Cattell-Braasch** faz rotação visceral medial da **direita para a esquerda** (expondo veia cava inferior e Zona 2 **direita**).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "explorar o hematoma pela manobra de Mattox apenas caso seja pulsátil.",
        "explanation": "Incorreta: A conduta seletiva (\"apenas se pulsátil/expansivo\") aplica-se ao **trauma abdominal contuso** em Zona 2; no trauma **penetrante** indica-se exploração.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "explorar o hematoma pela manobra de Kocher.",
        "explanation": "Incorreta: A manobra de **Kocher** mobiliza o arco duodenal e cabeça do pâncreas à direita (exposição da VCI infra-hepática e duodeno posterior).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Segundo os princípios de cirurgia do trauma (**Sabiston / ATLS / Mattox Trauma**), em **trauma penetrante** (ferimento por arma branca), hematomas retroperitoneais em **Zona 1 e Zona 2** são em regra **explorados** (no trauma contuso, Zona 2 só é explorada se expansiva, pulsátil ou rompida). Para expor o retroperitônio à **esquerda** (aorta suprarrenal/infrarrenal, rim e vasos renais esquerdos — Zona 2 esquerda), realiza-se a **manobra de Mattox** (rotação visceral medial da esquerda para a direita, liberando cólon descendente, baço, cauda/corpo do pâncreas e rim esquerdo).\n- **A) Incorreta:** A manobra de Cattell-Braasch expõe o lado **direito**, e no trauma penetrante a exploração não se restringe apenas a hematomas pulsáteis.\n- **C) Incorreta:** A manobra de **Cattell-Braasch** faz rotação visceral medial da **direita para a esquerda** (expondo veia cava inferior e Zona 2 **direita**).\n- **D) Incorreta:** A conduta seletiva (\"apenas se pulsátil/expansivo\") aplica-se ao **trauma abdominal contuso** em Zona 2; no trauma **penetrante** indica-se exploração.\n- **E) Incorreta:** A manobra de **Kocher** mobiliza o arco duodenal e cabeça do pâncreas à direita (exposição da VCI infra-hepática e duodeno posterior).",
    "perolaClinica": "A alternativa **B** está correta. Segundo os princípios de cirurgia do trauma (**Sabiston / ATLS / Mattox Trauma**), em **trauma penetrante** (ferimento por arma branca), hematomas retroperitoneais em **Zona 1 e Zona…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Exploração obrigatória de hematoma retroperitoneal em zona 2 no trauma penetrante via manobra de Mattox.",
      "raciocinioChave": "No trauma abdominal penetrante, hematomas retroperitoneais em zona 2 devem ser rotineiramente explorados, independentemente de serem pulsáteis. Como a lesão situa-se à esquerda, utiliza-se a manobra de Mattox (rotação visceral medial da esquerda para a direita).",
      "armadilhaBanca": "Aplicar a regra conservadora do trauma contuso (explorar zona 2 só se pulsátil/expansivo) ou confundir a manobra de Mattox (esquerda) com Cattell-Braasch (direita)."
    },
    "mapaDistratores": {
      "A": "A manobra de Cattell-Braasch expõe o retroperitônio direito, e no trauma penetrante a exploração em zona 2 não se restringe a hematomas pulsáteis.",
      "C": "A manobra de Cattell-Braasch mobiliza as vísceras da direita para a esquerda para acesso à zona 2 direita e veia cava inferior.",
      "D": "Explorar apenas se pulsátil aplica-se ao trauma contuso em zona 2; no trauma penetrante indica-se exploração sistemática.",
      "E": "A manobra de Kocher mobiliza o arco duodenal e a cabeça do pâncreas à direita, não expondo a zona 2 esquerda."
    }
  },
  {
    "id": "q-uepa-2022-047",
    "code": "Q-UEPA22-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Colelitíase e Colecistite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-colelitiase-e-colecistite-aguda",
    "tags": [
      "colecistectomia",
      "incisao-de-kocher",
      "arteria-cistica",
      "ducto-cistico",
      "triangulo-de-calot"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 47 anos está sendo submetida a uma colecistectomia convencional. A incisão realizada, a artéria e a estrutura da árvore biliar ligados durante esta cirurgia, são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "incisão de Pfannenstiel, artéria cística, ducto colédoco.",
        "explanation": "Incorreta: Pfannenstiel é incisão suprapúbica transversa (gineco-obstétrica) e ligar o ducto colédoco configura lesão grave de via biliar principal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "incisão de McBurney, artéria cística, ducto cístico.",
        "explanation": "Incorreta: McBurney é incisão oblíqua em fossa ilíaca direita para apendicectomia.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "incisão de Kocher, artéria hepática direita, ducto cístico.",
        "explanation": "Incorreta: A artéria hepática direita deve ser preservada (ligá-la causa isquemia hepática/biliar).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "incisão de Rocky Davis, artéria cística, ducto cístico.",
        "explanation": "Incorreta: Rockey-Davis é incisão transversa em fossa ilíaca direita para apendicectomia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "incisão de Kocher, artéria cística, ducto cístico.",
        "explanation": "A alternativa **E** está correta. Na **colecistectomia convencional (aberta)** (**Sabiston / Goffi**), o acesso clássico é a **incisão subcostal direita de Kocher**, e as duas estruturas identificadas no **triângulo hepatocístico (de Calot)** que devem ser cuidadosamente isoladas e ligadas/seccionadas são a **artéria cística** e o **ducto cístico**.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Na **colecistectomia convencional (aberta)** (**Sabiston / Goffi**), o acesso clássico é a **incisão subcostal direita de Kocher**, e as duas estruturas identificadas no **triângulo hepatocístico (de Calot)** que devem ser cuidadosamente isoladas e ligadas/seccionadas são a **artéria cística** e o **ducto cístico**.\n- **A) Incorreta:** Pfannenstiel é incisão suprapúbica transversa (gineco-obstétrica) e ligar o ducto colédoco configura lesão grave de via biliar principal.\n- **B) Incorreta:** McBurney é incisão oblíqua em fossa ilíaca direita para apendicectomia.\n- **C) Incorreta:** A artéria hepática direita deve ser preservada (ligá-la causa isquemia hepática/biliar).\n- **D) Incorreta:** Rockey-Davis é incisão transversa em fossa ilíaca direita para apendicectomia.",
    "perolaClinica": "A alternativa **E** está correta. Na **colecistectomia convencional (aberta)** (**Sabiston / Goffi**), o acesso clássico é a **incisão subcostal direita de Kocher**, e as duas estruturas identificadas no **triângulo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Anatomia cirúrgica da colecistectomia aberta: incisão de Kocher e estruturas do trígono de Calot.",
      "raciocinioChave": "Na colecistectomia convencional utiliza-se a incisão subcostal direita de Kocher para acesso ao hipocôndrio direito. No triângulo hepatocístico, as estruturas que devem ser isoladas e ligadas para retirada da vesícula são a artéria cística e o ducto cístico.",
      "armadilhaBanca": "Confundir epônimos de incisões abdominais (McBurney/Rockey-Davis/Pfannenstiel) ou confundir artéria cística e ducto cístico com estruturas principais (artéria hepática direita/colédoco)."
    },
    "mapaDistratores": {
      "A": "A incisão de Pfannenstiel é suprapúbica para cirurgias pélvicas, e a ligadura do colédoco causa lesão grave da via biliar principal.",
      "B": "A incisão de McBurney é utilizada em fossa ilíaca direita para apendicectomia.",
      "C": "A artéria hepática direita deve ser preservada, pois sua ligadura provoca isquemia hepática e biliar.",
      "D": "A incisão de Rockey-Davis é transversa em fossa ilíaca direita para abordagem do apêndice cecal."
    }
  },
  {
    "id": "q-uepa-2022-048",
    "code": "Q-UEPA22-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Neoplasias Periampulares e de Pâncreas",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-neoplasias-periampulares-e-de-pancreas",
    "tags": [
      "courvoisier-terrier",
      "cancer-de-pancreas",
      "neoplasia-periampular",
      "ictericia-colestatica",
      "sindrome-consumptiva"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um senhor de 70 anos está internado com uma síndrome consumptiva; apresenta icterícia e uma massa visível, palpável e indolor na topografia do ponto cístico. O sinal semiológico encontrado e um diagnóstico compatível seriam:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sinal de Courvoisier-Terrier; neoplasia de cabeça de pâncreas.",
        "explanation": "A alternativa **A** está correta. A **vesícula biliar distendida, palpável e indolor** em um paciente com **icterícia obstrutiva progressiva** e síndrome consumptiva define o **Sinal de Courvoisier-Terrier**, classicamente associado a **neoplasias periampulares** — tendo como principal representante o **adenocarcinoma de cabeça de pâncreas** (que obstrui lentamente o colédoco distal sem fibrose crônica prévia da parede vesicular, diferentemente da litíase) (**Sabiston / Porto Semiologia**).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Sinal de Courvoisier-Terrier; neoplasia de calda de pâncreas.",
        "explanation": "Incorreta: Tumores de **cauda** de pâncreas não comprimem a via biliar principal, cursando habitualmente sem icterícia obstrutiva.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Sinal de Faget; neoplasia de cabeça de pâncreas.",
        "explanation": "Incorreta: Sinal de Faget é a dissociação pulso-temperatura (bradicardia relativa na febre), vista em febre amarela e febre tifoide.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Sinal de Faget; neoplasia de calda de pâncreas.",
        "explanation": "Incorreta: Tanto o sinal semiológico (Faget) quanto a localização (cauda) estão incorretos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Sinal de Courvoisier-Terrier; neoplasia de vesícula biliar.",
        "explanation": "Incorreta: Na neoplasia de vesícula biliar, a massa palpável em HCD geralmente decorre do próprio tumor endurecido/infiltrativo (frequentemente associado à colelitíase crônica), e não da distensão passiva indolor típica de Courvoisier-Terrier por obstrução distal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. A **vesícula biliar distendida, palpável e indolor** em um paciente com **icterícia obstrutiva progressiva** e síndrome consumptiva define o **Sinal de Courvoisier-Terrier**, classicamente associado a **neoplasias periampulares** — tendo como principal representante o **adenocarcinoma de cabeça de pâncreas** (que obstrui lentamente o colédoco distal sem fibrose crônica prévia da parede vesicular, diferentemente da litíase) (**Sabiston / Porto Semiologia**).\n- **B) Incorreta:** Tumores de **cauda** de pâncreas não comprimem a via biliar principal, cursando habitualmente sem icterícia obstrutiva.\n- **C) Incorreta:** Sinal de Faget é a dissociação pulso-temperatura (bradicardia relativa na febre), vista em febre amarela e febre tifoide.\n- **D) Incorreta:** Tanto o sinal semiológico (Faget) quanto a localização (cauda) estão incorretos.\n- **E) Incorreta:** Na neoplasia de vesícula biliar, a massa palpável em HCD geralmente decorre do próprio tumor endurecido/infiltrativo (frequentemente associado à colelitíase crônica), e não da distensão passiva indolor típica de Courvoisier-Terrier por obstrução distal.",
    "perolaClinica": "A alternativa **A** está correta. A **vesícula biliar distendida, palpável e indolor** em um paciente com **icterícia obstrutiva progressiva** e síndrome consumptiva define o **Sinal de Courvoisier-Terrier**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Associação do sinal de Courvoisier-Terrier à obstrução biliar maligna por neoplasia de cabeça de pâncreas.",
      "raciocinioChave": "Icterícia obstrutiva associada a síndrome consumptiva e vesícula biliar palpável e indolor caracteriza o sinal de Courvoisier-Terrier. Esse achado aponta fortemente para obstrução lenta da via biliar distal por neoplasia periampular, sobretudo adenocarcinoma de cabeça de pâncreas.",
      "armadilhaBanca": "Confundir o sinal de Courvoisier-Terrier com o sinal de Faget ou associar icterícia obstrutiva a tumores de cauda pancreática."
    },
    "mapaDistratores": {
      "B": "Neoplasias de cauda de pâncreas não comprimem a via biliar principal e geralmente não cursam com icterícia obstrutiva.",
      "C": "O sinal de Faget representa dissociação pulso-temperatura em doenças infecciosas febris como febre amarela e febre tifoide.",
      "D": "Tanto o sinal semiológico (Faget) quanto a topografia tumoral (cauda do pâncreas) estão incorretos para o quadro.",
      "E": "Na neoplasia de vesícula biliar, a massa palpável decorre de infiltração tumoral endurecida frequentemente associada a cálculos, e não de distensão passiva indolor por obstrução distal."
    }
  },
  {
    "id": "q-uepa-2022-049",
    "code": "Q-UEPA22-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnia Inguinal e Femoral",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernia-inguinal-e-femoral",
    "tags": [
      "hernia-inguinal",
      "tecnica-de-bassini",
      "tendao-conjunto",
      "ligamento-inguinal",
      "hernioplastia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante uma hernioplastia inguinal pela técnica de Bassini é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o ligamento de Cooper é aproximado ao tendão conjunto.",
        "explanation": "Incorreta: A aproximação do tendão conjunto ao **ligamento pectíneo (de Cooper)** define a **técnica de McVay** (útil também para hérnias femorais).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o ligamento de Bassini é aproximado ao tendão conjunto.",
        "explanation": "Incorreta: Não existe estrutura anatômica chamada \"ligamento de Bassini\".",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o ligamento inguinal é aproximado ao tendão conjunto.",
        "explanation": "A alternativa **C** está correta. Segundo o **Sabiston** e as diretrizes da **HerniaSurge**, a **técnica de Bassini** é um reparo tecidual (com tensão, sem tela) da parede posterior do canal inguinal que consiste na **sutura do tendão conjunto** (arco aponeurótico do transverso e oblíquo interno) ao **ligamento inguinal (de Poupart)**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "utiliza-se uma tela inabsorvível para reforçar o soalho da região inguinal.",
        "explanation": "Incorreta: O uso de tela inabsorvível (polipropileno) livre de tensão caracteriza a **técnica de Lichtenstein** (padrão-ouro aberto atual), não Bassini.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "utiliza-se uma tela absorvível para reforçar o soalho da região inguinal.",
        "explanation": "Incorreta: Bassini é uma herniorrafia tecidual sem utilização de telas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Segundo o **Sabiston** e as diretrizes da **HerniaSurge**, a **técnica de Bassini** é um reparo tecidual (com tensão, sem tela) da parede posterior do canal inguinal que consiste na **sutura do tendão conjunto** (arco aponeurótico do transverso e oblíquo interno) ao **ligamento inguinal (de Poupart)**.\n- **A) Incorreta:** A aproximação do tendão conjunto ao **ligamento pectíneo (de Cooper)** define a **técnica de McVay** (útil também para hérnias femorais).\n- **B) Incorreta:** Não existe estrutura anatômica chamada \"ligamento de Bassini\".\n- **D) Incorreta:** O uso de tela inabsorvível (polipropileno) livre de tensão caracteriza a **técnica de Lichtenstein** (padrão-ouro aberto atual), não Bassini.\n- **E) Incorreta:** Bassini é uma herniorrafia tecidual sem utilização de telas.",
    "perolaClinica": "A alternativa **C** está correta. Segundo o **Sabiston** e as diretrizes da **HerniaSurge**, a **técnica de Bassini** é um reparo tecidual (com tensão, sem tela) da parede posterior do canal inguinal que consiste na…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reparo anatômico clássico da herniorrafia inguinal pela técnica tecidual de Bassini.",
      "raciocinioChave": "A técnica de Bassini é uma herniorrafia sem tela que reconstrói o assoalho do canal inguinal aproximando o tendão conjunto ao ligamento inguinal (de Poupart). Diferencia-se de outros reparos teciduais e das técnicas com tela por essas estruturas anatômicas específicas.",
      "armadilhaBanca": "Confundir a técnica de Bassini (ligamento inguinal) com a de McVay (ligamento de Cooper) ou Lichtenstein (uso de tela inabsorvível)."
    },
    "mapaDistratores": {
      "A": "A aproximação do tendão conjunto ao ligamento de Cooper caracteriza a técnica de McVay, indicada também para hérnias femorais.",
      "B": "Não existe estrutura anatômica denominada ligamento de Bassini.",
      "D": "O reforço livre de tensão com tela inabsorvível define a técnica de Lichtenstein, e não a de Bassini.",
      "E": "A técnica de Bassini é um reparo exclusivamente tecidual, sem uso de prótese ou tela absorvível."
    }
  },
  {
    "id": "q-uepa-2022-050",
    "code": "Q-UEPA22-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "tvp",
      "filtro-de-veia-cava",
      "avch",
      "contraindicacao-anticoagulacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 68 anos está internado na UTI no 2º pós-operatório de uma embolização de um aneurisma cerebral roto que resultou em AVC hemorrágico. Passou a apresentar edema e empastamento de coxa e panturrilha direitas. Um ultrassom Doppler confirmou o diagnóstico de trombose da veia femoral comum direita. A melhor conduta neste caso seria:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Heparina não fracionada.",
        "explanation": "Incorreta: Heparina não fracionada em dose terapêutica é contraindicada no AVC hemorrágico recente pelo risco catastrófico de ressangramento intracraniano.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Heparina de baixo peso molecular.",
        "explanation": "Incorreta: Heparina de baixo peso molecular também é formalmente contraindicada no contexto de hemorragia intracraniana aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Filtro de veia ilíaca.",
        "explanation": "Incorreta: Filtros mecânicos de prevenção de TEP são implantados na **veia cava inferior** (infrarrenal), não na veia ilíaca.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Filtro de veia femoral.",
        "explanation": "Incorreta: Não se implanta filtro na veia femoral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Filtro de veia cava inferior.",
        "explanation": "A alternativa **E** está correta. O paciente apresenta **TVP proximal aguda** (veia femoral comum — alto risco de embolia pulmonar) associada a uma **contraindicação absoluta à anticoagulação plena** (AVC hemorrágico recente / 2º PO de aneurisma cerebral roto). Conforme as diretrizes da **CHEST / SBC / SBACV**, essa é a indicação clássica e formal para implante de **filtro de veia cava inferior (VCI)** (preferencialmente removível), visando prevenir tromboembolismo pulmonar maciço.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. O paciente apresenta **TVP proximal aguda** (veia femoral comum — alto risco de embolia pulmonar) associada a uma **contraindicação absoluta à anticoagulação plena** (AVC hemorrágico recente / 2º PO de aneurisma cerebral roto). Conforme as diretrizes da **CHEST / SBC / SBACV**, essa é a indicação clássica e formal para implante de **filtro de veia cava inferior (VCI)** (preferencialmente removível), visando prevenir tromboembolismo pulmonar maciço.\n- **A) Incorreta:** Heparina não fracionada em dose terapêutica é contraindicada no AVC hemorrágico recente pelo risco catastrófico de ressangramento intracraniano.\n- **B) Incorreta:** Heparina de baixo peso molecular também é formalmente contraindicada no contexto de hemorragia intracraniana aguda.\n- **C) Incorreta:** Filtros mecânicos de prevenção de TEP são implantados na **veia cava inferior** (infrarrenal), não na veia ilíaca.\n- **D) Incorreta:** Não se implanta filtro na veia femoral.",
    "perolaClinica": "A alternativa **E** está correta. O paciente apresenta **TVP proximal aguda** (veia femoral comum — alto risco de embolia pulmonar) associada a uma **contraindicação absoluta à anticoagulação plena** (AVC hemorrágico…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação de filtro de veia cava inferior na TVP proximal com contraindicação absoluta à anticoagulação.",
      "raciocinioChave": "Paciente com TVP proximal (veia femoral comum) apresenta elevado risco de embolia pulmonar, mas tem contraindicação absoluta à anticoagulação plena devido a AVC hemorrágico recente pós-aneurisma roto. Nessa situação, indica-se o implante de filtro de veia cava inferior.",
      "armadilhaBanca": "Prescrever anticoagulação plena em paciente com hemorragia intracraniana recente ou errar o sítio anatômico do filtro vascular."
    },
    "mapaDistratores": {
      "A": "A heparina não fracionada em dose terapêutica é formalmente contraindicada no AVC hemorrágico recente pelo alto risco de ressangramento fatal.",
      "B": "A heparina de baixo peso molecular também é contraindicada na vigência de hemorragia intracraniana aguda.",
      "C": "Filtros para prevenção de embolia pulmonar são implantados na veia cava inferior infrarrenal, não na veia ilíaca.",
      "D": "Não se implanta filtro mecânico na veia femoral para profilaxia de tromboembolismo pulmonar."
    }
  },
  {
    "id": "q-uepa-2022-051",
    "code": "Q-UEPA22-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnia Inguinal e Femoral",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernia-inguinal-e-femoral",
    "tags": [
      "classificacao-de-nyhus",
      "hernia-inguinal-direta",
      "vasos-epigastricos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 55 anos, foi submetido a sua primeira cirurgia, uma herniorrafia inguinal à direita, no intra-operatório foi identificado que o saco herniário fazia protrusão medialmente aos vasos epigástricos inferiores. A classificação de Nyhus dessa hérnia é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tipo I",
        "explanation": "Incorreta: Nyhus Tipo I é hérnia inguinal **indireta** (lateral aos vasos epigástricos) com anel inguinal interno normal (típica de crianças/adultos jovens).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Tipo II",
        "explanation": "Incorreta: Nyhus Tipo II é hérnia inguinal **indireta** com anel inguinal interno dilatado, mas parede posterior preservada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Tipo III A",
        "explanation": "A alternativa **C** está correta. A protrusão do saco herniário **medialmente aos vasos epigástricos inferiores** (no triângulo de Hesselbach) define uma **hérnia inguinal direta**. Como se trata da **primeira cirurgia** (não recidivada), na **Classificação de Nyhus** (**Sabiston**) corresponde exatamente ao **Tipo IIIA** (defeito da parede posterior — hérnia inguinal direta).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Tipo IV A",
        "explanation": "Incorreta: Nyhus Tipo IVA é hérnia inguinal direta **recidivada** (o paciente nunca foi operado antes).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Tipo IV B",
        "explanation": "Incorreta: Nyhus Tipo IVB é hérnia inguinal indireta **recidivada**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. A protrusão do saco herniário **medialmente aos vasos epigástricos inferiores** (no triângulo de Hesselbach) define uma **hérnia inguinal direta**. Como se trata da **primeira cirurgia** (não recidivada), na **Classificação de Nyhus** (**Sabiston**) corresponde exatamente ao **Tipo IIIA** (defeito da parede posterior — hérnia inguinal direta).\n- **A) Incorreta:** Nyhus Tipo I é hérnia inguinal **indireta** (lateral aos vasos epigástricos) com anel inguinal interno normal (típica de crianças/adultos jovens).\n- **B) Incorreta:** Nyhus Tipo II é hérnia inguinal **indireta** com anel inguinal interno dilatado, mas parede posterior preservada.\n- **D) Incorreta:** Nyhus Tipo IVA é hérnia inguinal direta **recidivada** (o paciente nunca foi operado antes).\n- **E) Incorreta:** Nyhus Tipo IVB é hérnia inguinal indireta **recidivada**.",
    "perolaClinica": "A alternativa **C** está correta. A protrusão do saco herniário **medialmente aos vasos epigástricos inferiores** (no triângulo de Hesselbach) define uma **hérnia inguinal direta**. Como se trata da **primeira…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Classificação de Nyhus das hérnias inguinais segundo relação com vasos epigástricos e recidiva.",
      "raciocinioChave": "Saco herniário que faz protrusão medialmente aos vasos epigástricos inferiores corresponde a hérnia inguinal direta (defeito da parede posterior no triângulo de Hesselbach). Como se trata de hérnia primária (primeira cirurgia), classifica-se como Nyhus Tipo III A.",
      "armadilhaBanca": "Confundir hérnia direta (medial aos vasos epigástricos, III A) com indireta (lateral, I/II) ou atribuir classificação de recidivada (IV)."
    },
    "mapaDistratores": {
      "A": "Nyhus Tipo I corresponde à hérnia inguinal indireta (lateral aos vasos epigástricos) com anel inguinal interno normal.",
      "B": "Nyhus Tipo II refere-se à hérnia inguinal indireta com anel inguinal interno alargado e parede posterior íntegra.",
      "D": "Nyhus Tipo IV A designa hérnia inguinal direta recidivada, não aplicável à primeira cirurgia.",
      "E": "Nyhus Tipo IV B corresponde à hérnia inguinal indireta recidivada."
    }
  },
  {
    "id": "q-uepa-2022-052",
    "code": "Q-UEPA22-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Queimaduras e Lesão Inalatória",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-queimaduras-e-lesao-inalatoria",
    "tags": [
      "queimaduras",
      "debito-urinario",
      "ressuscitacao-volemica",
      "grande-queimado"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 33 anos, vítima de queimaduras de segundo grau acometendo 45% da área de superfície corporal, o principal parâmetro para avaliar se está bem hidratada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "monitorização da pressão arterial média invasiva.",
        "explanation": "Incorreta: A PA/PAM pode permanecer mantida por vasoconstrição compensatória mesmo em hipoperfusão tecidual importante, não sendo o parâmetro guia primário.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dosagem da creatinina sérica.",
        "explanation": "Incorreta: A creatinina sérica eleva-se tardiamente (após 24–48h de lesão renal), não servindo para ajuste horário da reposição volêmica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "monitorização pressão venosa central.",
        "explanation": "Incorreta: A PVC tem baixa correlação com a responsividade a fluidos e não é parâmetro primário no grande queimado.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "monitorização débito urinário.",
        "explanation": "A alternativa **D** está correta. Segundo o **ATLS (10ª edição)** e a **Sociedade Brasileira de Queimaduras**, o **principal parâmetro clínico** para guiar e ajustar a ressuscitação volêmica no paciente grande queimado é a **monitorização horária do débito urinário** (meta em adultos: **0,5 mL/kg/h**; em crianças < 30 kg: 1 mL/kg/h; em queimaduras elétricas com rabdomiólise: 1–1,5 mL/kg/h).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "avaliação clínica da hidratação das mucosas.",
        "explanation": "Incorreta: A avaliação subjetiva das mucosas é imprecisa, especialmente em pacientes com edema generalizado ou lesão inalatória.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Segundo o **ATLS (10ª edição)** e a **Sociedade Brasileira de Queimaduras**, o **principal parâmetro clínico** para guiar e ajustar a ressuscitação volêmica no paciente grande queimado é a **monitorização horária do débito urinário** (meta em adultos: **0,5 mL/kg/h**; em crianças < 30 kg: 1 mL/kg/h; em queimaduras elétricas com rabdomiólise: 1–1,5 mL/kg/h).\n- **A) Incorreta:** A PA/PAM pode permanecer mantida por vasoconstrição compensatória mesmo em hipoperfusão tecidual importante, não sendo o parâmetro guia primário.\n- **B) Incorreta:** A creatinina sérica eleva-se tardiamente (após 24–48h de lesão renal), não servindo para ajuste horário da reposição volêmica.\n- **C) Incorreta:** A PVC tem baixa correlação com a responsividade a fluidos e não é parâmetro primário no grande queimado.\n- **E) Incorreta:** A avaliação subjetiva das mucosas é imprecisa, especialmente em pacientes com edema generalizado ou lesão inalatória.",
    "perolaClinica": "A alternativa **D** está correta. Segundo o **ATLS (10ª edição)** e a **Sociedade Brasileira de Queimaduras**, o **principal parâmetro clínico** para guiar e ajustar a ressuscitação volêmica no paciente grande queimado…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Parâmetro clínico primário para guiar a ressuscitação volêmica no paciente grande queimado.",
      "raciocinioChave": "Na ressuscitação volêmica do grande queimado, a adequação da perfusão tecidual é guiada principalmente pela monitorização horária do débito urinário. Esse parâmetro permite titular a infusão de cristaloides em tempo real (meta de 0,5 mL/kg/h no adulto).",
      "armadilhaBanca": "Basear o ajuste volêmico na pressão arterial ou na creatinina sérica, que sofrem alterações tardias ou mascaradas pela resposta adrenérgica."
    },
    "mapaDistratores": {
      "A": "A pressão arterial média pode manter-se compensada por vasoconstrição periférica mesmo diante de hipoperfusão tecidual grave.",
      "B": "A creatinina sérica eleva-se tardiamente após lesão renal instalada, não servindo para ajuste horário de volume.",
      "C": "A pressão venosa central tem baixa acurácia para guiar reposição volêmica dinâmica no grande queimado.",
      "E": "A avaliação clínica das mucosas é subjetiva e pouco confiável em pacientes com edema maciço pós-queimadura."
    }
  },
  {
    "id": "q-uepa-2022-053",
    "code": "Q-UEPA22-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Ortopedia e Traumatologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-ortopedia-e-traumatologia-basica",
    "tags": [
      "embolia-gordurosa",
      "fratura-de-femur",
      "pos-operatorio",
      "ortopedia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 43 anos, pedreiro, teve queda de escada, deu entrada na urgência, eupneico, saturação de oxigênio em ar ambiente 97%, falando, PA 120 x 80 mmHg, FC 88 bpm, Glasgow 15, sem sinal de TCE, sem achados de trauma torácico e sem trauma abdominal, sendo identificado exclusivamente fratura fechada de fêmur direito, foi submetido a cirurgia pela equipe da ortopedia. No segundo dia de pós-operatório evoluiu com dispneia súbita e rebaixamento do nível de consciência, sendo necessário intubação oro-traqueal. O diagnóstico mais provável, nesse caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "edema pulmonar e cerebral.",
        "explanation": "Incorreta: Trata-se de manifestações inespecíficas, não o diagnóstico etiológico primário após fratura de fêmur.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "embolia gordurosa.",
        "explanation": "A alternativa **B** está correta. O desenvolvimento de **insuficiência respiratória aguda (dispneia súbita) + alteração neurológica (rebaixamento do nível de consciência)** entre **24 e 72 horas** (2º dia pós-operatório) após **fratura de osso longo (fêmur)** e manipulação cirúrgica ortopédica compõe a apresentação clássica da **síndrome da embolia gordurosa** (critérios maiores de **Gurd & Wilson**: insuficiência respiratória, comprometimento do SNC e petéquias cutâneo-mucosas) (**Sabiston / Campbell's Operative Orthopaedics**).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "tromboembolismo pulmonar.",
        "explanation": "Incorreta: Embora o TEP seja diagnóstico diferencial importante no pós-operatório ortopédico, a combinação precoce (48h) de insuficiência respiratória + rebaixamento neurológico central sem relato de choque refratário após fratura de fêmur aponta classicamente para embolia gordurosa.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "lesão axonal difusa.",
        "explanation": "Incorreta: O paciente chegou em Glasgow 15 e sem sinais de TCE, excluindo lesão axonal difusa.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "choque séptico por pneumonia.",
        "explanation": "Incorreta: Não há sinais infecciosos (febre, secreção purulenta, hipotensão séptica) descritos no quadro.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O desenvolvimento de **insuficiência respiratória aguda (dispneia súbita) + alteração neurológica (rebaixamento do nível de consciência)** entre **24 e 72 horas** (2º dia pós-operatório) após **fratura de osso longo (fêmur)** e manipulação cirúrgica ortopédica compõe a apresentação clássica da **síndrome da embolia gordurosa** (critérios maiores de **Gurd & Wilson**: insuficiência respiratória, comprometimento do SNC e petéquias cutâneo-mucosas) (**Sabiston / Campbell's Operative Orthopaedics**).\n- **A) Incorreta:** Trata-se de manifestações inespecíficas, não o diagnóstico etiológico primário após fratura de fêmur.\n- **C) Incorreta:** Embora o TEP seja diagnóstico diferencial importante no pós-operatório ortopédico, a combinação precoce (48h) de insuficiência respiratória + rebaixamento neurológico central sem relato de choque refratário após fratura de fêmur aponta classicamente para embolia gordurosa.\n- **D) Incorreta:** O paciente chegou em Glasgow 15 e sem sinais de TCE, excluindo lesão axonal difusa.\n- **E) Incorreta:** Não há sinais infecciosos (febre, secreção purulenta, hipotensão séptica) descritos no quadro.",
    "perolaClinica": "A alternativa **B** está correta. O desenvolvimento de **insuficiência respiratória aguda (dispneia súbita) + alteração neurológica (rebaixamento do nível de consciência)** entre **24 e 72 horas** (2º dia…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Síndrome da embolia gordurosa após fratura fechada de osso longo e abordagem cirúrgica.",
      "raciocinioChave": "Paciente sem TCE prévio (Glasgow 15 na admissão) que desenvolve dispneia súbita e rebaixamento do nível de consciência no 2º dia pós-operatório de fratura de fêmur apresenta o quadro clássico da síndrome da embolia gordurosa. A tríade típica surge entre 24 e 72 horas após trauma de ossos longos.",
      "armadilhaBanca": "Atribuir o rebaixamento neurológico a lesão axonal difusa (descartada pelo Glasgow 15 inicial) ou limitar a hipótese apenas ao TEP isolado."
    },
    "mapaDistratores": {
      "A": "Edema pulmonar e cerebral descrevem achados sindrômicos inespecíficos, e não a etiologia primária pós-fratura de fêmur.",
      "C": "O tromboembolismo pulmonar não explica tipicamente a instalação precoce (48h) combinada de insuficiência respiratória e alteração neurológica central na ausência de choque refratário.",
      "D": "A lesão axonal difusa cursa com alteração imediata do sensório desde o trauma, incompatível com Glasgow 15 na admissão.",
      "E": "Não há sinais infecciosos ou hemodinâmicos de sepse pulmonar que justifiquem choque séptico."
    }
  },
  {
    "id": "q-uepa-2022-054",
    "code": "Q-UEPA22-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "enoxaparina",
      "protamina",
      "antidoto",
      "sangramento-pos-operatorio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 36 anos, em pós-operatório imediato de cirurgia bariátrica, recebe dose 3x maior que o preconizado de enoxaparina, e evolui com sangramento profuso pela ferida operatória, mas ainda mantêm estabilidade hemodinâmica. A droga de escolha que pode ser usada como antidoto é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Vitamina K",
        "explanation": "Incorreta: Vitamina K é utilizada para reversão de antagonistas da vitamina K (**varfarina**), não de heparinas.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Protamina",
        "explanation": "A alternativa **B** está correta. Conforme as diretrizes da **CHEST / SBC**, o antídoto específico para reversão de sangramento grave associado à **heparina não fracionada** (reversão completa) e às **heparinas de baixo peso molecular como a enoxaparina** (reversão parcial de ~60–75% da atividade anti-Xa) é o **sulfato de protamina** (1 mg de protamina para cada 1 mg de enoxaparina administrada nas últimas 8 horas).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Criopreceptado",
        "explanation": "Incorreta: Crioprecipitado repõe fibrinogênio, fator VIII, XIII e vWF; não neutraliza heparina/enoxaparina.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Concentrado de plaquetas",
        "explanation": "Incorreta: Concentrado de plaquetas é indicado em plaquetopenia grave ou disfunção plaquetária, não para superdosagem de HBPM.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Plasma fresco congelado",
        "explanation": "Incorreta: Plasma fresco congelado não reverte o efeito anticoagulante da enoxaparina.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Conforme as diretrizes da **CHEST / SBC**, o antídoto específico para reversão de sangramento grave associado à **heparina não fracionada** (reversão completa) e às **heparinas de baixo peso molecular como a enoxaparina** (reversão parcial de ~60–75% da atividade anti-Xa) é o **sulfato de protamina** (1 mg de protamina para cada 1 mg de enoxaparina administrada nas últimas 8 horas).\n- **A) Incorreta:** Vitamina K é utilizada para reversão de antagonistas da vitamina K (**varfarina**), não de heparinas.\n- **C) Incorreta:** Crioprecipitado repõe fibrinogênio, fator VIII, XIII e vWF; não neutraliza heparina/enoxaparina.\n- **D) Incorreta:** Concentrado de plaquetas é indicado em plaquetopenia grave ou disfunção plaquetária, não para superdosagem de HBPM.\n- **E) Incorreta:** Plasma fresco congelado não reverte o efeito anticoagulante da enoxaparina.",
    "perolaClinica": "A alternativa **B** está correta. Conforme as diretrizes da **CHEST / SBC**, o antídoto específico para reversão de sangramento grave associado à **heparina não fracionada** (reversão completa) e às **heparinas de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reversão farmacológica da anticoagulação por heparina de baixo peso molecular com protamina.",
      "raciocinioChave": "Diante de sangramento cirúrgico profuso secundário a superdosagem de enoxaparina (heparina de baixo peso molecular), o antídoto específico indicado é o sulfato de protamina. Embora sua reversão sobre o fator anti-Xa seja parcial (~60–75%), é a droga de escolha disponível para neutralizar HBPM.",
      "armadilhaBanca": "Indicar vitamina K ou plasma fresco congelado (eficazes na reversão da varfarina) para sangramento induzido por enoxaparina."
    },
    "mapaDistratores": {
      "A": "A vitamina K reverte antagonistas da vitamina K como a varfarina, não tendo ação sobre heparinas.",
      "C": "O crioprecipitado repõe fibrinogênio e fatores VIII/XIII/vWF, sem efeito neutralizante sobre a enoxaparina.",
      "D": "O concentrado de plaquetas trata plaquetopenias ou disfunção plaquetária, não corrigindo overdose de HBPM.",
      "E": "O plasma fresco congelado não neutraliza o efeito anti-Xa da enoxaparina."
    }
  },
  {
    "id": "q-uepa-2022-055",
    "code": "Q-UEPA22-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": [
      "brown-sequard",
      "hemissecacao-medular",
      "trauma-raquimedular",
      "semiologia-neurologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 26 anos vítima de acidente automobilístico, era motoqueiro e evolui com hemisecção da medula a direita ao nível da vértebra T8. Sobre esse assunto, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o Paciente evoluirá com a síndrome do segundo neurônio motor.",
        "explanation": "Incorreta: Abaixo do nível da lesão ocorre síndrome do **primeiro neurônio motor** (hiperreflexia, espasticidade, sinal de Babinski); lesão do 2º neurônio restringe-se apenas ao miótomo exato do nível lesado.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o segmento medular lesionado será T12.",
        "explanation": "Incorreta: Pela correspondência vértebro-medular na região torácica média/baixa (T7–T10), soma-se aproximadamente 2–3 níveis ao processo espinhoso (vértebra T8 corresponde aproximadamente ao segmento medular **T10–T11**, não T12).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a perda de função motora abaixo do segmento medular lesionado será à esquerda.",
        "explanation": "Incorreta: A perda motora abaixo do nível da lesão é **ipsilateral (à direita)**.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a perda da sensibilidade térmica abaixo do segmento medular lesionado será à esquerda.",
        "explanation": "A alternativa **D** está correta. Na **Síndrome de Brown-Séquard (hemissecção medular à direita)** (**ATLS / Neuroanatomia de Machado**): - **Ipsilateralmente (à direita)** abaixo da lesão: perda **motora** (trato corticoespinhal lateral — síndrome do 1º neurônio motor) e perda da **propriocepção, sensibilidade vibratória e estereognosia/tato epicrítico** (funículo posterior / fascículos grácil e cuneiforme). - **Contralateralmente (à esquerda)** abaixo da lesão (1–2 níveis abaixo): perda da **sensibilidade térmica e dolorosa** (trato espinotalâmico lateral, cujas fibras cruzam na comissura branca anterior logo após entrar na medula).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "a perda da estereognosia abaixo do segmento medular lesionado será à esquerda.",
        "explanation": "Incorreta: A estereognosia/propriocepção trafega pelo funículo posterior (não cruzado na medula), logo a perda é **ipsilateral (à direita)**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Na **Síndrome de Brown-Séquard (hemissecção medular à direita)** (**ATLS / Neuroanatomia de Machado**):\n- **Ipsilateralmente (à direita)** abaixo da lesão: perda **motora** (trato corticoespinhal lateral — síndrome do 1º neurônio motor) e perda da **propriocepção, sensibilidade vibratória e estereognosia/tato epicrítico** (funículo posterior / fascículos grácil e cuneiforme).\n- **Contralateralmente (à esquerda)** abaixo da lesão (1–2 níveis abaixo): perda da **sensibilidade térmica e dolorosa** (trato espinotalâmico lateral, cujas fibras cruzam na comissura branca anterior logo após entrar na medula).\n- **A) Incorreta:** Abaixo do nível da lesão ocorre síndrome do **primeiro neurônio motor** (hiperreflexia, espasticidade, sinal de Babinski); lesão do 2º neurônio restringe-se apenas ao miótomo exato do nível lesado.\n- **B) Incorreta:** Pela correspondência vértebro-medular na região torácica média/baixa (T7–T10), soma-se aproximadamente 2–3 níveis ao processo espinhoso (vértebra T8 corresponde aproximadamente ao segmento medular **T10–T11**, não T12).\n- **C) Incorreta:** A perda motora abaixo do nível da lesão é **ipsilateral (à direita)**.\n- **E) Incorreta:** A estereognosia/propriocepção trafega pelo funículo posterior (não cruzado na medula), logo a perda é **ipsilateral (à direita)**.",
    "perolaClinica": "A alternativa **D** está correta. Na **Síndrome de Brown-Séquard (hemissecção medular à direita)** (**ATLS / Neuroanatomia de Machado**): - **Ipsilateralmente (à direita)** abaixo da lesão: perda **motora** (trato…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Déficits motores e sensitivos da síndrome de hemissecção medular (Brown-Séquard).",
      "raciocinioChave": "Na hemissecção medular direita (síndrome de Brown-Séquard), ocorre perda motora e proprioceptiva ipsilateral (à direita) abaixo da lesão devido ao trajeto não cruzado na medula dessas vias. Já a sensibilidade térmica e dolorosa cruza logo após entrar na medula pelo trato espinotalâmico lateral, resultando em perda contralateral (à esquerda).",
      "armadilhaBanca": "Inverter a lateralidade dos tratos cruzados (espinotalâmico) versus não cruzados (corticoespinhal e funículo posterior) ou errar a correspondência vértebro-medular."
    },
    "mapaDistratores": {
      "A": "Abaixo do nível da lesão instala-se síndrome do primeiro neurônio motor (espasticidade e hiperreflexia), ficando a do segundo neurônio restrita ao nível exato da lesão.",
      "B": "Na região torácica média (vértebra T8), o segmento medular correspondente situa-se aproximadamente em T10–T11, e não em T12.",
      "C": "A perda motora abaixo da lesão é ipsilateral à hemissecção (à direita), pois o trato corticoespinhal já cruzou nas pirâmides bulbares.",
      "E": "A estereognosia trafega pelo funículo posterior sem cruzar na medula, causando déficit ipsilateral (à direita)."
    }
  },
  {
    "id": "q-uepa-2022-056",
    "code": "Q-UEPA22-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hemorragia Digestiva Alta",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hemorragia-digestiva-alta",
    "tags": [
      "hda",
      "ulcera-duodenal",
      "arteria-gastroduodenal",
      "anatomia-cirurgica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 55 anos, foi admitido no pronto socorro com hematêmese volumosa, encontrava-se hemodinamicamente estável e foi submetido a endoscopia digestiva alta, sendo localizada úlcera sangrante na parede posterior da segunda porção do duodeno, foi tentado injeção de hemostáticos sem sucesso, permanecendo o sangramento, sendo indicado arteriografia com embolização. A artéria responsável pela região que sangra é a:",
    "alternativas": [
      {
        "letter": "A",
        "text": "artéria duodenopancreática superior posterior",
        "explanation": "Incorreta: A artéria pancreatoduodenal superior posterior é ramo terminal da própria artéria gastroduodenal; o tronco classicamente implicado na erosão maciça por úlcera duodenal posterior é a artéria gastroduodenal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "artéria gastroduodenal",
        "explanation": "A alternativa **B** está correta. Segundo o **Sabiston**, úlceras pépticas localizadas na **parede posterior do bulbo/porção proximal do duodeno** que evoluem com **hemorragia digestiva alta volumosa** classicamente erodem a **artéria gastroduodenal** (ramo da artéria hepática comum que cursa imediatamente posterior ao duodeno), sendo este o vaso-alvo principal na arteriografia com embolização (ou sutura hemostática em 3 pontos se abordagem cirúrgica).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "artéria gástrica esquerda",
        "explanation": "Incorreta: A artéria gástrica esquerda irriga a pequena curvatura gástrica (associada a úlceras gástricas de pequena curvatura).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "artéria gastroepiplóica direita",
        "explanation": "Incorreta: A artéria gastroepiploica direita irriga a grande curvatura gástrica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "artéria gástrica curta",
        "explanation": "Incorreta: As artérias gástricas curtas irrigam o fundo gástrico (ramos da artéria esplênica).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Segundo o **Sabiston**, úlceras pépticas localizadas na **parede posterior do bulbo/porção proximal do duodeno** que evoluem com **hemorragia digestiva alta volumosa** classicamente erodem a **artéria gastroduodenal** (ramo da artéria hepática comum que cursa imediatamente posterior ao duodeno), sendo este o vaso-alvo principal na arteriografia com embolização (ou sutura hemostática em 3 pontos se abordagem cirúrgica).\n- **A) Incorreta:** A artéria pancreatoduodenal superior posterior é ramo terminal da própria artéria gastroduodenal; o tronco classicamente implicado na erosão maciça por úlcera duodenal posterior é a artéria gastroduodenal.\n- **C) Incorreta:** A artéria gástrica esquerda irriga a pequena curvatura gástrica (associada a úlceras gástricas de pequena curvatura).\n- **D) Incorreta:** A artéria gastroepiploica direita irriga a grande curvatura gástrica.\n- **E) Incorreta:** As artérias gástricas curtas irrigam o fundo gástrico (ramos da artéria esplênica).",
    "perolaClinica": "A alternativa **B** está correta. Segundo o **Sabiston**, úlceras pépticas localizadas na **parede posterior do bulbo/porção proximal do duodeno** que evoluem com **hemorragia digestiva alta volumosa** classicamente…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Vaso arterial acometido na hemorragia digestiva alta por úlcera duodenal posterior.",
      "raciocinioChave": "Úlceras pépticas localizadas na parede posterior do duodeno proximal frequentemente erodem a artéria gastroduodenal, que cursa imediatamente atrás desse segmento. Por ser ramo calibroso da artéria hepática comum, provoca sangramento vultoso refratário ao tratamento endoscópico, requerendo embolização.",
      "armadilhaBanca": "Confundir o tronco principal implicado na erosão maciça (artéria gastroduodenal) com ramos menores ou artérias gástricas."
    },
    "mapaDistratores": {
      "A": "A artéria pancreatoduodenal superior posterior é ramo terminal menor; o vaso clássico responsável por hemorragia duodenal posterior maciça é o tronco da artéria gastroduodenal.",
      "C": "A artéria gástrica esquerda irriga a pequena curvatura gástrica, associando-se a úlceras gástricas.",
      "D": "A artéria gastroepiploica direita supre a grande curvatura do estômago, não a parede posterior do duodeno.",
      "E": "As artérias gástricas curtas originam-se da artéria esplênica e irrigam o fundo gástrico."
    }
  },
  {
    "id": "q-uepa-2022-057",
    "code": "Q-UEPA22-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Trauma Urológico e Litíase Cirúrgica",
    "temaSlug": "cg-uro",
    "subtemaSlug": "cg-uro-trauma-urologico-e-litiase-cirurgica",
    "tags": [
      "pielonefrite-obstrutiva",
      "calculo-ureteral",
      "cateter-duplo-j",
      "sepse-urinaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 48 anos, da entrada no pronto socorro com dor lombar a direita tipo cólica que irradia para flanco direito e grandes lábios, com início há 5 dias, associado com episódios de hematúria, apresenta péssimo estado geral, estando hipocorada, sudoreica, febril com temperatura axilar de 39,50. PA 110 x 75 mmhg e FC 110 bbp e Leucocitose de 29 mil. TC evidenciou cálculo de 8 mm em ureter proximal direito. Além da instituição de antibioticoterapia, hidratação e analgesia, outra conduta que deve ser realizada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "drenagem da via urinaria com cateter duplo J sem a retirada do cálculo ureteral.",
        "explanation": "A alternativa **A** está correta. O quadro de **cálculo ureteral obstrutivo (8 mm) associado a febre alta (39,5 °C), taquicardia, queda do estado geral e leucocitose importante (29.000/mm³)** configura **pielonefrite obstrutiva / sepse de foco urinário** — uma **emergência urológica**. Segundo as diretrizes da **SBU / AUA / EAU**, além de antibioticoterapia venosa e ressuscitação volêmica, impõe-se **desobstrução urgente da via urinária** por meio de **cateter duplo J** (ou nefrostomia percutânea), **adiando a manipulação/retirada definitiva do cálculo** até resolução completa do quadro infeccioso (para evitar urossepse fulminante por aumento da pressão intrarrenal).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "realização da terapia expulsiva medicamentosa com tansulosina.",
        "explanation": "Incorreta: Terapia médica expulsiva (tansulosina) é indicada apenas em cálculos ureterais distais **sem infecção** ou complicações.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "realização de litotripsia extracorpórea.",
        "explanation": "Incorreta: Litotripsia extracorpórea (LECO) é **contraindicada** na vigência de infecção urinária ativa/sepse.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "realização de ureterolitotripsia endoscópica e colocação de duplo j.",
        "explanation": "Incorreta: A ureterolitotripsia com fragmentação do cálculo na fase aguda séptica aumenta o risco de bacteremia maciça e choque séptico, sendo contraindicada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "observação clínica por 72horas para aguardar melhora clínica e submetê-la a procedimento cirúrgico.",
        "explanation": "Incorreta: Aguardar 72 horas sem desobstruir o trato urinário infectado eleva drasticamente a mortalidade por choque séptico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O quadro de **cálculo ureteral obstrutivo (8 mm) associado a febre alta (39,5 °C), taquicardia, queda do estado geral e leucocitose importante (29.000/mm³)** configura **pielonefrite obstrutiva / sepse de foco urinário** — uma **emergência urológica**. Segundo as diretrizes da **SBU / AUA / EAU**, além de antibioticoterapia venosa e ressuscitação volêmica, impõe-se **desobstrução urgente da via urinária** por meio de **cateter duplo J** (ou nefrostomia percutânea), **adiando a manipulação/retirada definitiva do cálculo** até resolução completa do quadro infeccioso (para evitar urossepse fulminante por aumento da pressão intrarrenal).\n- **B) Incorreta:** Terapia médica expulsiva (tansulosina) é indicada apenas em cálculos ureterais distais **sem infecção** ou complicações.\n- **C) Incorreta:** Litotripsia extracorpórea (LECO) é **contraindicada** na vigência de infecção urinária ativa/sepse.\n- **D) Incorreta:** A ureterolitotripsia com fragmentação do cálculo na fase aguda séptica aumenta o risco de bacteremia maciça e choque séptico, sendo contraindicada.\n- **E) Incorreta:** Aguardar 72 horas sem desobstruir o trato urinário infectado eleva drasticamente a mortalidade por choque séptico.",
    "perolaClinica": "A alternativa **A** está correta. O quadro de **cálculo ureteral obstrutivo (8 mm) associado a febre alta (39,5 °C), taquicardia, queda do estado geral e leucocitose importante (29.000/mm³)** configura **pielonefrite…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Desobstrução urinária de urgência na pielonefrite obstrutiva por cálculo ureteral.",
      "raciocinioChave": "Cálculo ureteral obstrutivo associado a febre alta, taquicardia e leucocitose acentuada define pielonefrite obstrutiva com alto risco de choque séptico. Além de antibiótico e hidratação, é mandatória a drenagem urgente da via urinária (cateter duplo J ou nefrostomia) sem manipulação definitiva do cálculo na fase séptica.",
      "armadilhaBanca": "Tentar litotripsia ou ureterolitotripsia definitiva na vigência de infecção ativa, precipitando sepse grave por aumento da pressão piélica."
    },
    "mapaDistratores": {
      "B": "A terapia médica expulsiva com tansulosina é reservada apenas a cálculos distais não complicados e sem infecção.",
      "C": "A litotripsia extracorpórea é formalmente contraindicada na vigência de infecção urinária ativa ou sepse.",
      "D": "A ureterolitotripsia com fragmentação do cálculo durante quadro séptico eleva o risco de bacteremia maciça e choque séptico.",
      "E": "Aguardar 72 horas sem drenar uma via urinária obstruída e infectada aumenta drasticamente a mortalidade por sepse."
    }
  },
  {
    "id": "q-uepa-2022-058",
    "code": "Q-UEPA22-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Colorretal e Pólipos",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-colorretal-e-polipos",
    "tags": [
      "cancer-de-reto",
      "neoadjuvancia",
      "estadiamento",
      "quimiorradioterapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 57 anos, com alteração do habito intestinal e com hematoquezia, foi submetida a colonoscopia e ressonância de pelve que identificaram adenocarcinoma bem diferenciado de reto a 1 cm da linha pectínea, T3N1. A melhor conduta, nesse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "amputação abdominoperineal.",
        "explanation": "Incorreta: Operar diretamente sem neoadjuvância em tumor T3N1 aumenta significativamente o risco de recidiva local.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "quimioterapia e radioterapia (esquema de Nigro).",
        "explanation": "Incorreta: O **esquema de Nigro** (quimiorradioterapia exclusiva) é o tratamento padrão do **carcinoma espinocelular (CEC) de canal anal**, não do adenocarcinoma de reto.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "quimioterapia neoadjuvante seguido de retosigmoidectomia.",
        "explanation": "Incorreta: A neoadjuvância padrão para reto baixo T3N1 inclui **radioterapia associada à quimioterapia** (não quimioterapia isolada), e a definição cirúrgica depende do reestadiamento.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "quimioterapia e radioterapia neoadjuvante e reestadiamento após para decidir qual a cirurgia a ser realizada.",
        "explanation": "A alternativa **D** está correta. Conforme as diretrizes da **NCCN / SBCP / Sabiston**, no **adenocarcinoma de reto médio/baixo localmente avançado (T3/T4 e/ou N+, como T3N1)**, o tratamento padrão-ouro inicia-se com **quimiorradioterapia neoadjuvante** (para promover *downstaging*, reduzir recidiva local e aumentar a chance de preservação esfincteriana ou até resposta clínica completa), seguido de **reestadiamento** (RM de pelve, toque retal e retossigmoidoscopia) após 8–12 semanas para definir a conduta definitiva (cirurgia com excisão total do mesorreto ou protocolo *Watch & Wait* em casos selecionados de resposta clínica completa).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "amputação abdominoperineal seguido de quimioterapia e radioterapia adjuvante.",
        "explanation": "Incorreta: A quimiorradioterapia neoadjuvante é superior à adjuvante em controle local e toxicidade no câncer de reto localmente avançado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Conforme as diretrizes da **NCCN / SBCP / Sabiston**, no **adenocarcinoma de reto médio/baixo localmente avançado (T3/T4 e/ou N+, como T3N1)**, o tratamento padrão-ouro inicia-se com **quimiorradioterapia neoadjuvante** (para promover *downstaging*, reduzir recidiva local e aumentar a chance de preservação esfincteriana ou até resposta clínica completa), seguido de **reestadiamento** (RM de pelve, toque retal e retossigmoidoscopia) após 8–12 semanas para definir a conduta definitiva (cirurgia com excisão total do mesorreto ou protocolo *Watch & Wait* em casos selecionados de resposta clínica completa).\n- **A) Incorreta:** Operar diretamente sem neoadjuvância em tumor T3N1 aumenta significativamente o risco de recidiva local.\n- **B) Incorreta:** O **esquema de Nigro** (quimiorradioterapia exclusiva) é o tratamento padrão do **carcinoma espinocelular (CEC) de canal anal**, não do adenocarcinoma de reto.\n- **C) Incorreta:** A neoadjuvância padrão para reto baixo T3N1 inclui **radioterapia associada à quimioterapia** (não quimioterapia isolada), e a definição cirúrgica depende do reestadiamento.\n- **E) Incorreta:** A quimiorradioterapia neoadjuvante é superior à adjuvante em controle local e toxicidade no câncer de reto localmente avançado.",
    "perolaClinica": "A alternativa **D** está correta. Conforme as diretrizes da **NCCN / SBCP / Sabiston**, no **adenocarcinoma de reto médio/baixo localmente avançado (T3/T4 e/ou N+, como T3N1)**, o tratamento padrão-ouro inicia-se com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Terapia neoadjuvante padrão no adenocarcinoma de reto baixo localmente avançado (T3N1).",
      "raciocinioChave": "O adenocarcinoma de reto baixo em estádio T3N1 é localmente avançado, tendo como conduta padrão inicial a quimiorradioterapia neoadjuvante. Após o término, realiza-se reestadiamento para definir a técnica cirúrgica adequada (ou preservação esfincteriana conforme resposta).",
      "armadilhaBanca": "Indicar cirurgia radical imediata (amputação abdominoperineal) sem neoadjuvância prévia ou confundir com o esquema de Nigro do canal anal."
    },
    "mapaDistratores": {
      "A": "Realizar amputação abdominoperineal direta em tumor T3N1 sem neoadjuvância eleva as taxas de recidiva local e impede potencial preservação esfincteriana.",
      "B": "O esquema de Nigro (quimiorradioterapia exclusiva) é o tratamento padrão do carcinoma espinocelular de canal anal, não do adenocarcinoma de reto.",
      "C": "A neoadjuvância padrão no câncer de reto baixo exige associação de radioterapia à quimioterapia, não quimioterapia isolada.",
      "E": "A quimiorradioterapia neoadjuvante é superior à adjuvante no controle local e redução de toxicidade do câncer de reto localmente avançado."
    }
  },
  {
    "id": "q-uepa-2022-059",
    "code": "Q-UEPA22-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": [
      "gist",
      "imatinibe",
      "terapia-alvo",
      "gastrectomia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 51 anos, foi submetida a gastrectomia parcial com ressecção completa de GIST de 6 cm, com índice mitótico de 14/50 campo de alta potência, presença de mutação c-Kit positiva e sem metástase no estadiamento. A conduta, nesse caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar quimioterapia adjuvante.",
        "explanation": "Incorreta: GIST é classicamente **quimiorresistente** à quimioterapia citotóxica convencional.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar quimioterapia e radioterapia adjuvante.",
        "explanation": "Incorreta: GIST não responde bem à quimioterapia convencional nem à radioterapia adjuvante.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "totalizar gastrectomia.",
        "explanation": "Incorreta: A ressecção cirúrgica com margens livres (R0) em cunha/gastrectomia parcial é suficiente — não há indicação de totalizar gastrectomia nem de linfadenectomia sistemática no GIST.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "só acompanhamento clínico com exames de estadiamento a cada 6 meses.",
        "explanation": "Incorreta: Apenas observação clínica é reservada a GIST de risco muito baixo ou baixo; este caso é de **alto risco** (14 mitoses/50 CGA e 6 cm).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar terapia alvo adjuvante com inibidor da tirosina quinase.",
        "explanation": "A alternativa **E** está correta. Trata-se de um **GIST gástrico de alto risco de recorrência** pelos critérios de Miettinen/Fletcher (**tamanho > 5 cm [6 cm] e índice mitótico elevado > 5/50 CGA [14/50]**) com mutação **c-KIT (CD117) positiva**. Conforme as diretrizes da **NCCN / ESMO**, após ressecção R0, está formalmente indicada **terapia-alvo adjuvante com inibidor da tirosina quinase (mesilato de imatinibe)** por **3 anos**, que reduz drasticamente a recidiva e melhora a sobrevida.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. Trata-se de um **GIST gástrico de alto risco de recorrência** pelos critérios de Miettinen/Fletcher (**tamanho > 5 cm [6 cm] e índice mitótico elevado > 5/50 CGA [14/50]**) com mutação **c-KIT (CD117) positiva**. Conforme as diretrizes da **NCCN / ESMO**, após ressecção R0, está formalmente indicada **terapia-alvo adjuvante com inibidor da tirosina quinase (mesilato de imatinibe)** por **3 anos**, que reduz drasticamente a recidiva e melhora a sobrevida.\n- **A) Incorreta:** GIST é classicamente **quimiorresistente** à quimioterapia citotóxica convencional.\n- **B) Incorreta:** GIST não responde bem à quimioterapia convencional nem à radioterapia adjuvante.\n- **C) Incorreta:** A ressecção cirúrgica com margens livres (R0) em cunha/gastrectomia parcial é suficiente — não há indicação de totalizar gastrectomia nem de linfadenectomia sistemática no GIST.\n- **D) Incorreta:** Apenas observação clínica é reservada a GIST de risco muito baixo ou baixo; este caso é de **alto risco** (14 mitoses/50 CGA e 6 cm).",
    "perolaClinica": "A alternativa **E** está correta. Trata-se de um **GIST gástrico de alto risco de recorrência** pelos critérios de Miettinen/Fletcher (**tamanho > 5 cm [6 cm] e índice mitótico elevado > 5/50 CGA [14/50]**) com mutação…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação de terapia-alvo adjuvante com inibidor de tirosina quinase no GIST de alto risco.",
      "raciocinioChave": "Tumor estromal gastrointestinal (GIST) gástrico de 6 cm com alto índice mitótico (14/50 CGA) e mutação c-KIT positiva classifica-se como de alto risco de recorrência após ressecção R0. Está formalmente indicada adjuvância com inibidor da tirosina quinase (mesilato de imatinibe).",
      "armadilhaBanca": "Indicar quimioterapia citotóxica ou radioterapia convencionais em tumor quimiorresistente, ou optar por observação em lesão de alto risco."
    },
    "mapaDistratores": {
      "A": "O GIST é classicamente resistente à quimioterapia citotóxica convencional.",
      "B": "Nem quimioterapia citotóxica nem radioterapia adjuvante possuem eficácia no controle do GIST.",
      "C": "Após ressecção completa com margens livres (R0), não há indicação de totalizar a gastrectomia no GIST.",
      "D": "O seguimento clínico exclusivo aplica-se a GISTs de risco baixo ou muito baixo, não sendo adequado para lesões de 6 cm com 14 mitoses/50 CGA."
    }
  },
  {
    "id": "q-uepa-2022-060",
    "code": "Q-UEPA22-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Aneurisma e Dissecação de Aorta",
    "temaSlug": "cg-vascular",
    "subtemaSlug": "cg-vascular-aneurisma-e-dissecacao-de-aorta",
    "tags": [
      "aneurisma-de-aorta-abdominal",
      "aaa",
      "criterios-de-intervencao",
      "cirurgia-vascular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 63 anos, hipertensa, diabética e com insuficiência renal crônica, identifica-se em exame de rotina aneurisma fusiforme de aorta infrarrenal de 4,5 cm de diâmetro, assintomático. A melhor conduta, neste caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "colocação de prótese de aorta abdominal por via laparotômica.",
        "explanation": "Incorreta: Com 4,5 cm assintomático, o risco cirúrgico supera o risco anual de rotura, não havendo indicação de cirurgia aberta.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "colocação de endoprótese de aorta por via endovascular.",
        "explanation": "Incorreta: Tampouco há indicação de reparo endovascular (EVAR) para AAA assintomático de 4,5 cm.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "intervir apenas quando o aneurisma tiver mais de 6,5 cm de diâmetro.",
        "explanation": "Incorreta: Esperar > 6,5 cm expõe o paciente a risco elevado e inaceitável de rotura.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "intervir apenas quando o aneurisma tiver mais de 6,0 cm de diâmetro.",
        "explanation": "Incorreta: O limiar clássico de intervenção é **5,5 cm** (e não 6,0 cm).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "intervir apenas quando o aneurisma tiver mais de 5,5 cm de diâmetro.",
        "explanation": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Segundo o **Sabiston** e as diretrizes clássicas de **Aneurisma de Aorta Abdominal (AAA) assintomático**, aneurismas infrarrenais com diâmetro **< 5,0–5,5 cm** (como 4,5 cm) devem ser conduzidos com **vigilância ultrassonográfica periódica** e controle rigoroso de fatores de risco (cessação do tabagismo, controle pressórico), indicando-se reparo eletivo quando o diâmetro ultrapassa o limiar clássico de **5,5 cm** (ou crescimento rápido > 0,5 cm em 6 meses / > 1 cm ao ano, ou sintomas; nota: diretrizes mais recentes da SVS/ESVS passaram a considerar **≥ 5,0 cm** em mulheres, mas o valor clássico de 5,5 cm é o adotado pela banca entre as opções apresentadas).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Segundo o **Sabiston** e as diretrizes clássicas de **Aneurisma de Aorta Abdominal (AAA) assintomático**, aneurismas infrarrenais com diâmetro **< 5,0–5,5 cm** (como 4,5 cm) devem ser conduzidos com **vigilância ultrassonográfica periódica** e controle rigoroso de fatores de risco (cessação do tabagismo, controle pressórico), indicando-se reparo eletivo quando o diâmetro ultrapassa o limiar clássico de **5,5 cm** (ou crescimento rápido > 0,5 cm em 6 meses / > 1 cm ao ano, ou sintomas; nota: diretrizes mais recentes da SVS/ESVS passaram a considerar **≥ 5,0 cm** em mulheres, mas o valor clássico de 5,5 cm é o adotado pela banca entre as opções apresentadas).\n- **A) Incorreta:** Com 4,5 cm assintomático, o risco cirúrgico supera o risco anual de rotura, não havendo indicação de cirurgia aberta.\n- **B) Incorreta:** Tampouco há indicação de reparo endovascular (EVAR) para AAA assintomático de 4,5 cm.\n- **C) Incorreta:** Esperar > 6,5 cm expõe o paciente a risco elevado e inaceitável de rotura.\n- **D) Incorreta:** O limiar clássico de intervenção é **5,5 cm** (e não 6,0 cm).",
    "perolaClinica": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Segundo o **Sabiston** e as diretrizes clássicas de **Aneurisma de Aorta Abdominal (AAA) assintomático**, aneurismas infrarrenais…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Limiar clássico de diâmetro para indicação cirúrgica no aneurisma de aorta abdominal assintomático.",
      "raciocinioChave": "Em aneurismas fusiformes de aorta abdominal infrarrenal assintomáticos com 4,5 cm de diâmetro, o risco operatório supera o risco anual de rotura, indicando-se vigilância periódica. Pelos critérios clássicos adotados pela banca, o limiar de intervenção é acima de 5,5 cm.",
      "armadilhaBanca": "Indicar correção aberta ou endovascular precoce abaixo do ponto de corte ou errar o limiar clássico de 5,5 cm."
    },
    "mapaDistratores": {
      "A": "Aneurismas assintomáticos de 4,5 cm têm baixo risco de rotura anual e não justificam o risco de cirurgia aberta.",
      "B": "O reparo endovascular (EVAR) também não é indicado rotineiramente para AAA assintomático com 4,5 cm.",
      "C": "Aguardar mais de 6,5 cm expõe a paciente a risco elevado e inaceitável de rotura aneurismática.",
      "D": "O ponto de corte clássico preconizado nas diretrizes cobradas pela banca é de 5,5 cm, e não 6,0 cm."
    }
  },
  {
    "id": "q-uepa-2022-061",
    "code": "Q-UEPA22-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Vulvovaginites e Corrimentos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-vulvovaginites-e-corrimentos-genitais",
    "tags": [
      "abscesso-de-bartholin",
      "gestacao",
      "hiv",
      "infeccao-genital"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente GI P0, 28 semanas de gestação, soropositiva para o vírus da imunodeficiência humana (HIV), chegou ao pronto atendimento da maternidade apresentando um abscesso de glândula de Bartholin. Ao exame obstétrico foi observada altura uterina de 28cm, batimentos cardiofetais em 144 bpm, colo uterino impérvio, sem perda de líquido e dinâmica uterina ausente. Diante do caso a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ablação com nitrato de prata.",
        "explanation": "Incorreta: Ablação com nitrato de prata é técnica ambulatorial para cisto/abscesso não complicado em pacientes hígidas, inadequada para gestante HIV+ com abscesso.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "fistulização.",
        "explanation": "Incorreta: Fistulização isolada (cateter de Word) sem internação e antibioticoterapia de largo espectro é insuficiente em gestante imunossuprimida.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "tratamento ambulatorial com antibióticos de largo espectro.",
        "explanation": "Incorreta: Gestante HIV+ com abscesso vulvar tem indicação de **internação hospitalar** e abordagem cirúrgica + antibioticoterapia venosa, não tratamento apenas ambulatorial.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "conduta expectante.",
        "explanation": "Incorreta: Conduta expectante em abscesso de Bartholin na gestação expõe mãe e feto a risco de sepse e prematuridade.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "internação imediata, remoção completa da glândula e antibióticos de largo espectro.",
        "explanation": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Em gestante **soropositiva para HIV** com **abscesso de glândula de Bartholin**, há alto risco de disseminação infecciosa, celulite perineal, sepse e desencadeamento de trabalho de parto pré-termo, o que exige **internação hospitalar imediata, drenagem/abordagem cirúrgica e antibioticoterapia parenteral de largo espectro** (referência: **FEBRASGO / Williams Gynecology**; nota clínica: na prática cirúrgica habitual, prefere-se drenagem/marsupialização na fase aguda em vez de bartholinectomia completa pelo risco de sangramento, mas entre as opções disponíveis apenas **E** contempla internação imediata e antibioticoterapia de largo espectro).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Em gestante **soropositiva para HIV** com **abscesso de glândula de Bartholin**, há alto risco de disseminação infecciosa, celulite perineal, sepse e desencadeamento de trabalho de parto pré-termo, o que exige **internação hospitalar imediata, drenagem/abordagem cirúrgica e antibioticoterapia parenteral de largo espectro** (referência: **FEBRASGO / Williams Gynecology**; nota clínica: na prática cirúrgica habitual, prefere-se drenagem/marsupialização na fase aguda em vez de bartholinectomia completa pelo risco de sangramento, mas entre as opções disponíveis apenas **E** contempla internação imediata e antibioticoterapia de largo espectro).\n- **A) Incorreta:** Ablação com nitrato de prata é técnica ambulatorial para cisto/abscesso não complicado em pacientes hígidas, inadequada para gestante HIV+ com abscesso.\n- **B) Incorreta:** Fistulização isolada (cateter de Word) sem internação e antibioticoterapia de largo espectro é insuficiente em gestante imunossuprimida.\n- **C) Incorreta:** Gestante HIV+ com abscesso vulvar tem indicação de **internação hospitalar** e abordagem cirúrgica + antibioticoterapia venosa, não tratamento apenas ambulatorial.\n- **D) Incorreta:** Conduta expectante em abscesso de Bartholin na gestação expõe mãe e feto a risco de sepse e prematuridade.",
    "perolaClinica": "A alternativa **E** está correta conforme o gabarito oficial definitivo da UEPA 2022. Em gestante **soropositiva para HIV** com **abscesso de glândula de Bartholin**, há alto risco de disseminação infecciosa, celulite…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta hospitalar intensiva em gestante HIV positiva com abscesso de glândula de Bartholin.",
      "raciocinioChave": "Gestante soropositiva para HIV com abscesso de glândula de Bartholin apresenta maior vulnerabilidade à disseminação infecciosa perineal, sepse e trabalho de parto prematuro. Segundo o gabarito da banca, impõe-se internação imediata com antibioticoterapia de largo espectro e abordagem cirúrgica.",
      "armadilhaBanca": "Tratar ambulatorialmente ou com procedimentos minimamente invasivos simples uma gestante imunossuprimida com abscesso instalado."
    },
    "mapaDistratores": {
      "A": "A ablação com nitrato de prata é procedimento ambulatorial inadequado para gestante HIV+ com abscesso agudo.",
      "B": "A fistulização isolada sem internação e antibioticoterapia parenteral é insuficiente diante do risco infeccioso na gestante imunossuprimida.",
      "C": "O tratamento apenas ambulatorial expõe a gestante imunossuprimida a risco de celulite necrosante, sepse e prematuridade.",
      "D": "A conduta expectante diante de abscesso estabelecido agrava a infecção e coloca em risco a saúde materno-fetal."
    }
  },
  {
    "id": "q-uepa-2022-062",
    "code": "Q-UEPA22-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Hemorragia Pós-Parto",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-hemorragia-pos-parto",
    "tags": [
      "hemorragia-pos-parto",
      "atonia-uterina",
      "fatores-de-risco",
      "parto-taquitocico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente G6 P5 A0, 41 semanas de gestação, 28 anos de idade, com história prévia de 05 partos vaginais, diagnóstico obstétrico patológico atual de diabetes gestacional (feto no percentil 56 e líquido amniótico normal), evoluiu para parto via vaginal após indução com misoprostol em menos de 03 horas de trabalho de parto. Após a dequitação apresentou hemorragia profusa, com atonia uterina e puérpera com instabilidade hemodinâmica. Os fatores de risco associados a hemorragia no referido caso são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "multiparidade, diabetes gestacional, pós-datismo e parto induzido.",
        "explanation": "Incorreta: A gestação é de **41 semanas** (termo tardio — **pós-datismo/pós-termo é ≥ 42 semanas**), e o diabetes gestacional no caso não gerou macrossomia (feto no percentil 56) nem polidrâmnio (LA normal).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "nuliparidade e parto taquitócico.",
        "explanation": "Incorreta: A paciente é **multípara** (G6 P5), não nulípara.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "parto induzido e idade materna.",
        "explanation": "Incorreta: A idade materna é 28 anos (não constitui fator de risco).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "parto induzido, multiparidade e parto taquitócico.",
        "explanation": "A alternativa **D** está correta. Conforme o **Manual de Hemorragia Pós-Parto (OPAS / FEBRASGO / Ministério da Saúde)**, os fatores de risco clássicos para **atonia uterina** (\"Tônus\" dos 4 Ts) presentes neste caso são: **parto induzido** (uso de misoprostol/ocitocina), **multiparidade** (G6 P5 — grande multípara) e **parto taquitócico** (trabalho de parto precipitado com duração < 3 horas).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "diabetes gestacional e idade materna.",
        "explanation": "Incorreta: Nem a idade (28 anos) nem o DMG bem controlado (sem macrossomia/polidrâmnio) explicam a atonia uterina.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Conforme o **Manual de Hemorragia Pós-Parto (OPAS / FEBRASGO / Ministério da Saúde)**, os fatores de risco clássicos para **atonia uterina** (\"Tônus\" dos 4 Ts) presentes neste caso são: **parto induzido** (uso de misoprostol/ocitocina), **multiparidade** (G6 P5 — grande multípara) e **parto taquitócico** (trabalho de parto precipitado com duração < 3 horas).\n- **A) Incorreta:** A gestação é de **41 semanas** (termo tardio — **pós-datismo/pós-termo é ≥ 42 semanas**), e o diabetes gestacional no caso não gerou macrossomia (feto no percentil 56) nem polidrâmnio (LA normal).\n- **B) Incorreta:** A paciente é **multípara** (G6 P5), não nulípara.\n- **C) Incorreta:** A idade materna é 28 anos (não constitui fator de risco).\n- **E) Incorreta:** Nem a idade (28 anos) nem o DMG bem controlado (sem macrossomia/polidrâmnio) explicam a atonia uterina.",
    "perolaClinica": "A alternativa **D** está correta. Conforme o **Manual de Hemorragia Pós-Parto (OPAS / FEBRASGO / Ministério da Saúde)**, os fatores de risco clássicos para **atonia uterina** (\"Tônus\" dos 4 Ts) presentes neste caso…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Identificação rigorosa dos fatores de risco presentes para atonia e hemorragia pós-parto.",
      "raciocinioChave": "A hemorragia pós-parto por atonia uterina neste caso decorre diretamente da grande multiparidade (G6 P5), do trabalho de parto induzido com misoprostol e da evolução taquitócica (< 3 horas). Cada um desses fatores compromete a contratilidade miometrial eficaz após a dequitação.",
      "armadilhaBanca": "Incluir pós-datismo em gestação de 41 semanas (termo tardio) ou atribuir risco ao DMG sem macrossomia (p56) nem polidrâmnio."
    },
    "mapaDistratores": {
      "A": "Com 41 semanas trata-se de termo tardio (pós-datismo é ≥ 42 semanas), e o DMG no caso não cursou com macrossomia nem polidrâmnio.",
      "B": "A paciente é grande multípara (G6 P5), o que contradiz a afirmação de nuliparidade.",
      "C": "A idade materna de 28 anos não representa fator de risco para hemorragia pós-parto.",
      "E": "Nem a idade de 28 anos nem o diabetes gestacional controlado (sem macrossomia ou polidrâmnio) justificam a atonia uterina."
    }
  },
  {
    "id": "q-uepa-2022-063",
    "code": "Q-UEPA22-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Doenças da Hipófise",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-doencas-da-hipofise",
    "tags": [
      "prolactinoma",
      "macroadenoma-hipofisario",
      "agonista-dopaminergico",
      "galactorreia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "SCV, 32 anos de idade, nuligesta, sem desejo reprodutivo, queixa ausência de menstruação nos últimos 13 meses, e refere que antes tinha ciclos menstruais. Ao exame físico apresenta galactorreia, e os níveis de prolactina estão 09 vezes acima do valor de referência. Trouxe a consulta ainda um exame de beta-hCG sérico negativo e uma ressonância magnética que evidencia o diagnóstico de tumor hipofisário de 1,3cm. Quanto ao tratamento desta paciente, a melhor opção é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "trata-se de um macroadenoma hipofisário, que deve ser tratado cirurgicamente assim que diagnosticado, pelo risco de compressão do quiasma óptico",
        "explanation": "Incorreta: Embora seja um macroadenoma (≥ 1 cm), o prolactinoma é o único tumor hipofisário cujo tratamento inicial é **medicamentoso** (agonista dopaminérgico); cirurgia fica reservada para resistência/intolerância medicamentosa ou apoplexia/compressão visual refratária.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o tratamento inicial a ser empregado é um fármaco agonista dopaminérgico, para reduzir a produção de prolactina e o tamanho tumoral.",
        "explanation": "A alternativa **B** está correta. Trata-se de um **macroprolactinoma** (tumor hipofisário ≥ 1,0 cm — no caso 1,3 cm — associado a amenorreia, galactorreia e prolactina 9× acima do normal). Conforme as diretrizes da **FEBRASGO / Endocrine Society**, o **tratamento de primeira escolha** tanto para micro quanto para **macroprolactinomas** é **clínico**, com **agonistas dopaminérgicos** (preferencialmente **cabergolina**, ou bromocriptina), que normalizam a prolactina, restauram a função gonadal e promovem **redução expressiva do volume tumoral**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "trata-se de um microadenoma hipofisário, então, por ser um tumor benigno, pode-se utilizar apenas anticoncepcional para normalizar o ciclo menstrual e impedir a gestação.",
        "explanation": "Incorreta: Lesões ≥ 1 cm (1,3 cm) são **macroadenomas**, não microadenomas, e exigem tratamento específico com agonista dopaminérgico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "o tratamento inicial deve ser feito repondo estrogênios, pelo risco de osteoporose",
        "explanation": "Incorreta: Estrogênios não reduzem o prolactinoma e podem até estimular o crescimento lactotrófico sem controle prévio da prolactina.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "deve-se prescrever inicialmente um fármaco antagonista dopaminérgico para reduzir a produção de prolactina e o tamanho tumoral.",
        "explanation": "Incorreta: **Antagonistas** dopaminérgicos (como metoclopramida, risperidona) **aumentam** a secreção de prolactina; o tratamento utiliza **agonistas** dopaminérgicos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Trata-se de um **macroprolactinoma** (tumor hipofisário ≥ 1,0 cm — no caso 1,3 cm — associado a amenorreia, galactorreia e prolactina 9× acima do normal). Conforme as diretrizes da **FEBRASGO / Endocrine Society**, o **tratamento de primeira escolha** tanto para micro quanto para **macroprolactinomas** é **clínico**, com **agonistas dopaminérgicos** (preferencialmente **cabergolina**, ou bromocriptina), que normalizam a prolactina, restauram a função gonadal e promovem **redução expressiva do volume tumoral**.\n- **A) Incorreta:** Embora seja um macroadenoma (≥ 1 cm), o prolactinoma é o único tumor hipofisário cujo tratamento inicial é **medicamentoso** (agonista dopaminérgico); cirurgia fica reservada para resistência/intolerância medicamentosa ou apoplexia/compressão visual refratária.\n- **C) Incorreta:** Lesões ≥ 1 cm (1,3 cm) são **macroadenomas**, não microadenomas, e exigem tratamento específico com agonista dopaminérgico.\n- **D) Incorreta:** Estrogênios não reduzem o prolactinoma e podem até estimular o crescimento lactotrófico sem controle prévio da prolactina.\n- **E) Incorreta:** **Antagonistas** dopaminérgicos (como metoclopramida, risperidona) **aumentam** a secreção de prolactina; o tratamento utiliza **agonistas** dopaminérgicos.",
    "perolaClinica": "A alternativa **B** está correta. Trata-se de um **macroprolactinoma** (tumor hipofisário ≥ 1,0 cm — no caso 1,3 cm — associado a amenorreia, galactorreia e prolactina 9× acima do normal). Conforme as diretrizes da…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Tratamento clínico de primeira escolha no macroprolactinoma com agonista dopaminérgico.",
      "raciocinioChave": "Amenorreia secundária, galactorreia, prolactina muito elevada (9x VR) e lesão hipofisária de 1,3 cm definem um macroprolactinoma. Diferentemente dos demais macroadenomas, o tratamento inicial de escolha é medicamentoso com agonista dopaminérgico para reduzir prolactina e volume tumoral.",
      "armadilhaBanca": "Indicar cirurgia imediata por ser macroadenoma (> 1 cm) ou confundir agonista com antagonista dopaminérgico."
    },
    "mapaDistratores": {
      "A": "Prolactinomas, mesmo macroadenomas, respondem primariamente a agonistas dopaminérgicos, reservando-se a cirurgia para casos refratários ou com complicação visual aguda.",
      "C": "Tumores hipofisários com diâmetro ≥ 1,0 cm (1,3 cm) são macroadenomas, não microadenomas, e requerem tratamento específico.",
      "D": "A reposição estrogênica não reduz o prolactinoma e pode estimular o crescimento de células lactotróficas.",
      "E": "Antagonistas dopaminérgicos elevam ainda mais a prolactina; o tratamento correto utiliza agonistas dopaminérgicos."
    }
  },
  {
    "id": "q-uepa-2022-064",
    "code": "Q-UEPA22-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Pré-Eclâmpsia, Eclâmpsia e Síndrome HELLP",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-pre-eclampsia-eclampsia-e-sindrome-hellp",
    "tags": [
      "eclampsia",
      "sulfato-de-magnesio",
      "intoxicacao",
      "gluconato-de-calcio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante 41 anos de idade, G2 P0 A1, deu entrada no pronto atendimento obstétrico com níveis elevados de pressão arterial e apresentando quadro convulsivo. Foi prescrito hidralazina e sulfato de magnésio no esquema de Zuspan (dose de ataque e manutenção). Após 07 horas de evolução foi observada diminuição significativa dos reflexos patelares, frequência respiratória de 12 irpm, diurese de 10 mL/hora e dosagem sérica de magnésio de 13 mEq/L. Para o referido caso a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "suspender o sulfato de magnésio e associar difenil-hidantoína.",
        "explanation": "Incorreta: É indispensável administrar o antídoto (**gluconato de cálcio a 10%**) diante de depressão respiratória e magnesemia de 13 mEq/L; fenitoína não reverte intoxicação por magnésio.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "trocar o esquema com sulfato de magnésio para o esquema Pritchard.",
        "explanation": "Incorreta: Manter ou trocar o esquema para Pritchard (IM) agravaria a toxicidade com risco de parada cardiorrespiratória.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "suspender o sulfato de magnésio e fazer o gluconato de cálcio a 10%.",
        "explanation": "A alternativa **C** está correta. A paciente apresenta sinais inequívocos de **intoxicação grave por sulfato de magnésio** (faixa terapêutica: 4–7 mEq/L): **oligúria** (< 25–30 mL/h; diurese de 10 mL/h), **hiporreflexia/abolição de reflexos patelares**, **depressão respiratória** (FR = 12 irpm; alerta se < 16 irpm) e **magnesemia tóxica de 13 mEq/L** (risco iminente de parada respiratória e cardíaca). Segundo o **Ministério da Saúde (Manual de Gestação de Alto Risco) e FEBRASGO**, a conduta imediata é **suspender a infusão de sulfato de magnésio** e administrar o antídoto específico: **gluconato de cálcio a 10% (1 g = 10 mL EV lento em 3 minutos)**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "manter o sulfato de magnésio e fazer o gluconato de cálcio a 10%.",
        "explanation": "Incorreta: O sulfato de magnésio deve ser **imediatamente suspenso**, jamais mantido.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "manter o sulfato de magnésio e associar difenil-hidantoína.",
        "explanation": "Incorreta: Manter o sulfato de magnésio em intoxicação franca é conduta potencialmente fatal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A paciente apresenta sinais inequívocos de **intoxicação grave por sulfato de magnésio** (faixa terapêutica: 4–7 mEq/L): **oligúria** (< 25–30 mL/h; diurese de 10 mL/h), **hiporreflexia/abolição de reflexos patelares**, **depressão respiratória** (FR = 12 irpm; alerta se < 16 irpm) e **magnesemia tóxica de 13 mEq/L** (risco iminente de parada respiratória e cardíaca). Segundo o **Ministério da Saúde (Manual de Gestação de Alto Risco) e FEBRASGO**, a conduta imediata é **suspender a infusão de sulfato de magnésio** e administrar o antídoto específico: **gluconato de cálcio a 10% (1 g = 10 mL EV lento em 3 minutos)**.\n- **A) Incorreta:** É indispensável administrar o antídoto (**gluconato de cálcio a 10%**) diante de depressão respiratória e magnesemia de 13 mEq/L; fenitoína não reverte intoxicação por magnésio.\n- **B) Incorreta:** Manter ou trocar o esquema para Pritchard (IM) agravaria a toxicidade com risco de parada cardiorrespiratória.\n- **D) Incorreta:** O sulfato de magnésio deve ser **imediatamente suspenso**, jamais mantido.\n- **E) Incorreta:** Manter o sulfato de magnésio em intoxicação franca é conduta potencialmente fatal.",
    "perolaClinica": "A alternativa **C** está correta. A paciente apresenta sinais inequívocos de **intoxicação grave por sulfato de magnésio** (faixa terapêutica: 4–7 mEq/L): **oligúria** (< 25–30 mL/h; diurese de 10 mL/h),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento e reversão imediata da intoxicação grave por sulfato de magnésio na eclâmpsia.",
      "raciocinioChave": "Oligúria (10 mL/h), hiporreflexia patelar, bradipneia (12 irpm) e magnesemia de 13 mEq/L configuram intoxicação grave por sulfato de magnésio. Impõe-se suspensão imediata da infusão e administração intravenosa do antídoto específico, o gluconato de cálcio a 10%.",
      "armadilhaBanca": "Apenas suspender o sulfato sem administrar o antídoto diante de depressão respiratória, ou trocar para outro esquema de magnésio."
    },
    "mapaDistratores": {
      "A": "Com depressão respiratória e magnesemia tóxica de 13 mEq/L, é obrigatório administrar gluconato de cálcio a 10%; a fenitoína não reverte a toxicidade do magnésio.",
      "B": "Trocar para o esquema de Pritchard manteria o aporte de magnésio, agravando o risco de parada cardiorrespiratória.",
      "D": "O sulfato de magnésio deve ser imediatamente suspenso diante de sinais francos de intoxicação, jamais mantido.",
      "E": "Manter o sulfato de magnésio na vigência de depressão respiratória e hipermagnesemia tóxica é conduta potencialmente fatal."
    }
  },
  {
    "id": "q-uepa-2022-065",
    "code": "Q-UEPA22-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Rotura Uterina",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-rotura-uterina",
    "tags": [
      "rotura-uterina",
      "subida-da-apresentacao",
      "dor-escapular",
      "emergencia-obstetrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 40 anos, parda, hipertensa, G7 P6 (partos vaginais), após 2 horas em período expulsivo, a paciente se queixou de dor na escápula e evoluiu com hipotensão, desaceleração dos batimentos cardíacos fetais e ao toque vaginal foi observada subida da apresentação, que antes estava no plano zero de DeLee. Diante do exposto, a principal hipótese diagnóstica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "parto de evolução habitual.",
        "explanation": "Incorreta: Trata-se de emergência obstétrica gravíssima, incompatível com evolução fisiológica.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "rotura uterina.",
        "explanation": "A alternativa **B** está correta. Grande multípara (G7 P6) em período expulsivo prolongado (2 horas) que evolui com **dor referida em escápula/ombro** (sinal de irritação diafragmática por hemoperitônio — sinal de Kehr/Laffont), **choque hipovolêmico (hipotensão)**, **bradicardia/desaceleração fetal aguda** e **subida da apresentação fetal ao toque vaginal** (sinal de Clark/recessão da apresentação) apresenta o quadro clássico de **rotura uterina consumada** (**FEBRASGO / Rezende Obstetrícia**), exigindo laparotomia de emergência imediata.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "rotura de vasa prévia.",
        "explanation": "Incorreta: Rotura de vasa prévia ocorre classicamente após amniorexe com sangramento fetal agudo e sofrimento fetal, sem hipotensão materna rápida, dor escapular ou subida da apresentação.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "placenta prévia.",
        "explanation": "Incorreta: Placenta prévia cursa com sangramento vaginal indolor, vermelho vivo, sem hipertonia nem subida da apresentação no período expulsivo.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "descolamento prematuro de placenta.",
        "explanation": "Incorreta: O DPP cursa com hipertonia uterina (\"útero lenhoso\") e dor abdominal intensa, mas **não** provoca subida da apresentação fetal nem hemoperitônio com dor escapular.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Grande multípara (G7 P6) em período expulsivo prolongado (2 horas) que evolui com **dor referida em escápula/ombro** (sinal de irritação diafragmática por hemoperitônio — sinal de Kehr/Laffont), **choque hipovolêmico (hipotensão)**, **bradicardia/desaceleração fetal aguda** e **subida da apresentação fetal ao toque vaginal** (sinal de Clark/recessão da apresentação) apresenta o quadro clássico de **rotura uterina consumada** (**FEBRASGO / Rezende Obstetrícia**), exigindo laparotomia de emergência imediata.\n- **A) Incorreta:** Trata-se de emergência obstétrica gravíssima, incompatível com evolução fisiológica.\n- **C) Incorreta:** Rotura de vasa prévia ocorre classicamente após amniorexe com sangramento fetal agudo e sofrimento fetal, sem hipotensão materna rápida, dor escapular ou subida da apresentação.\n- **D) Incorreta:** Placenta prévia cursa com sangramento vaginal indolor, vermelho vivo, sem hipertonia nem subida da apresentação no período expulsivo.\n- **E) Incorreta:** O DPP cursa com hipertonia uterina (\"útero lenhoso\") e dor abdominal intensa, mas **não** provoca subida da apresentação fetal nem hemoperitônio com dor escapular.",
    "perolaClinica": "A alternativa **B** está correta. Grande multípara (G7 P6) em período expulsivo prolongado (2 horas) que evolui com **dor referida em escápula/ombro** (sinal de irritação diafragmática por hemoperitônio — sinal de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de rotura uterina intraparto pela subida da apresentação e dor escapular.",
      "raciocinioChave": "Grande multípara em período expulsivo prolongado que apresenta dor referida na escápula (irritação frênica por hemoperitônio), choque hipovolêmico, bradicardia fetal e subida da apresentação ao toque apresenta o quadro clássico de rotura uterina.",
      "armadilhaBanca": "Confundir a rotura uterina com o descolamento prematuro de placenta (que não causa subida da apresentação nem hemoperitônio com dor escapular)."
    },
    "mapaDistratores": {
      "A": "Choque materno, desaceleração fetal e subida da apresentação caracterizam emergência obstétrica grave, incompatível com parto fisiológico.",
      "C": "A rotura de vasa prévia manifesta-se com sangramento fetal após amniorexe e sofrimento fetal, sem dor escapular ou subida da apresentação.",
      "D": "A placenta prévia cursa com sangramento vaginal vermelho-vivo indolor antes do parto, sem subida da apresentação no expulsivo.",
      "E": "O descolamento prematuro de placenta causa hipertonia uterina e dor abdominal intensa, mas não provoca subida da apresentação fetal nem dor escapular por hemoperitônio."
    }
  },
  {
    "id": "q-uepa-2022-066",
    "code": "Q-UEPA22-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Rotura Prematura de Membranas Ovulares",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-rotura-prematura-de-membranas-ovulares",
    "tags": [
      "rpmo",
      "pre-termo-tardio",
      "inducao-do-parto",
      "cardiotocografia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 32 anos de idade, GI P0 AI, no decorrer de 35 semanas e 5 dias de gestação, foi admitida no pronto atendimento com queixa de perda de líquido via vaginal em grande quantidade, há uma hora e meia. Apresenta-se em bom estado geral, pressão arterial de 110/70mmHg, afebril, altura uterina de 33cm, feto em apresentação cefálica e dorso à direita, dinâmica uterina ausente, exame especular evidencia líquido amniótico saindo pelo orifício externo do colo uterino. Toque vaginal: colo impérvio, grosso e posterior. A cardiotocografia está abaixo.\n[Imagem: Traçado de cardiotocografia mostrando FCF basal ~130–140 bpm, variabilidade moderada (6–25 bpm), presença de acelerações transitórias, ausência de desacelerações e ausência de contrações uterinas — Categoria I.]\n\nDiante do caso apresentado, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "internação, antibioticoterapia profilática e corticoterapia.",
        "explanation": "Incorreta: Conduta expectante com corticoterapia e antibioticoterapia de latência aplica-se classicamente à RPMO entre **24 e 34 semanas**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "cesariana imediata.",
        "explanation": "Incorreta: Não há indicação obstétrica de cesariana imediata com feto cefálico e CTG Categoria I.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "solicitar ultrassonografia obstétrica para estudo da vitalidade, pois a cardiotocografia é categoria II.",
        "explanation": "Incorreta: A cardiotocografia apresentada é **Categoria I** (normal/tranquilizadora), não Categoria II.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "corticoide (duas doses de 12 mg de betametasona ) com posterior indução do trabalho de parto.",
        "explanation": "Incorreta: A corticoterapia antenatal de rotina na RPMO tem indicação consolidada até **34 semanas** (33 semanas e 6 dias).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "preparo do colo com misoprostol e posterior indução, diante da cardiotocografia categoria I.",
        "explanation": "[REVISAR: questão contém imagem (traçado de cardiotocografia) no caderno original] A alternativa **E** está correta. Trata-se de **rotura prematura de membranas ovulares (RPMO)** com **35 semanas e 5 dias** (≥ 34 semanas), paciente estável, afebril, sem sinais de corioamnionite, feto cefálico e **cardiotocografia Categoria I** (FCF basal normal, variabilidade moderada, acelerações presentes e sem desacelerações). Segundo as diretrizes clássicas da **FEBRASGO / ACOG / Ministério da Saúde** (vigentes na época da prova), em RPMO com **IG ≥ 34 semanas** indica-se a **resolução da gestação**; com vitalidade fetal preservada (CTG Categoria I) e colo desfavorável (Bishop baixo — impérvio, grosso e posterior), a conduta de escolha é o **preparo cervical com misoprostol e indução do trabalho de parto** (sem necessidade de corticoide ou antibiótico de latência após 34 semanas, salvo profilaxia para GBS conforme rastreamento/fatores de risco).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "[REVISAR: questão contém imagem (traçado de cardiotocografia) no caderno original] A alternativa **E** está correta. Trata-se de **rotura prematura de membranas ovulares (RPMO)** com **35 semanas e 5 dias** (≥ 34 semanas), paciente estável, afebril, sem sinais de corioamnionite, feto cefálico e **cardiotocografia Categoria I** (FCF basal normal, variabilidade moderada, acelerações presentes e sem desacelerações). Segundo as diretrizes clássicas da **FEBRASGO / ACOG / Ministério da Saúde** (vigentes na época da prova), em RPMO com **IG ≥ 34 semanas** indica-se a **resolução da gestação**; com vitalidade fetal preservada (CTG Categoria I) e colo desfavorável (Bishop baixo — impérvio, grosso e posterior), a conduta de escolha é o **preparo cervical com misoprostol e indução do trabalho de parto** (sem necessidade de corticoide ou antibiótico de latência após 34 semanas, salvo profilaxia para GBS conforme rastreamento/fatores de risco).\n- **A) Incorreta:** Conduta expectante com corticoterapia e antibioticoterapia de latência aplica-se classicamente à RPMO entre **24 e 34 semanas**.\n- **B) Incorreta:** Não há indicação obstétrica de cesariana imediata com feto cefálico e CTG Categoria I.\n- **C) Incorreta:** A cardiotocografia apresentada é **Categoria I** (normal/tranquilizadora), não Categoria II.\n- **D) Incorreta:** A corticoterapia antenatal de rotina na RPMO tem indicação consolidada até **34 semanas** (33 semanas e 6 dias).",
    "perolaClinica": "[REVISAR: questão contém imagem (traçado de cardiotocografia) no caderno original] A alternativa **E** está correta. Trata-se de **rotura prematura de membranas ovulares (RPMO)** com **35 semanas e 5 dias** (≥ 34…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta na rotura prematura de membranas ovulares (RPMO) após 34 semanas com vitalidade preservada.",
      "raciocinioChave": "Na RPMO com idade gestacional de 35 semanas e 5 dias (≥ 34 semanas), ausência de infecção, feto cefálico e cardiotocografia Categoria I, não se recomenda conduta expectante prolongada. Deve-se proceder ao preparo cervical com misoprostol (colo desfavorável) seguido de indução do parto.",
      "armadilhaBanca": "Aplicar o protocolo expectante com corticoide e antibiótico de latência (indicado entre 24 e 34 semanas) a uma gestação com ≥ 34 semanas."
    },
    "mapaDistratores": {
      "A": "A conduta expectante com corticoterapia e antibioticoterapia de latência aplica-se à RPMO pré-termo entre 24 e 34 semanas.",
      "B": "Com feto cefálico, estabilidade materna e cardiotocografia tranquilizadora, não há indicação de cesariana imediata.",
      "C": "O traçado descrito apresenta linha de base normal, variabilidade moderada, acelerações e ausência de desacelerações, correspondendo à Categoria I.",
      "D": "A corticoterapia antenatal de rotina na RPMO tem indicação consolidada até 33 semanas e 6 dias (< 34 semanas)."
    }
  },
  {
    "id": "q-uepa-2022-067",
    "code": "Q-UEPA22-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Endométrio",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-endometrio",
    "tags": [
      "sangramento-pos-menopausa",
      "atrofia-endometrial",
      "histeroscopia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 58 anos, G1 P0 A1, refere menopausa aos 48 anos de idade, peso: 60 kg, altura:1,62m. Nega ter realizado terapia hormonal na pós menopausa. Chega ao consultório por queixa de sangramento vaginal em pequena quantidade, ocorrido há uma semana. Ao exame ginecológico é observada mínima quantidade de sangramento ao exame especular. Foi então indicada histeroscopia para avaliação. Diante do exposto, a causa mais provável desse sangramento é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "mioma submucoso.",
        "explanation": "Incorreta: Miomas tendem a regredir após a menopausa e são causa rara de sangramento pós-menopausa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "atrofia endometrial.",
        "explanation": "A alternativa **B** está correta. Segundo a **FEBRASGO** e o **Berek & Novak**, embora todo sangramento pós-menopausa deva ser investigado para descartar neoplasia maligna (carcinoma endometrial responde por ~10% dos casos), a **causa mais frequente (cerca de 60–75% dos casos)** de sangramento uterino na pós-menopausa em mulheres sem terapia hormonal — especialmente eutróficas (IMC 22,8 kg/m²) — é a **atrofia endometrial** (por hipoestrogenismo prolongado).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "hiperplasia de endométrio.",
        "explanation": "Incorreta: Hiperplasia endometrial é menos frequente que atrofia, estando mais associada a obesidade ou exposição estrogênica sem oposição.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "carcinoma endometrial.",
        "explanation": "Incorreta: Carcinoma de endométrio é a causa mais grave a ser excluída (~10%), porém não é a mais provável/frequente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "pólipo endometrial.",
        "explanation": "Incorreta: Pólipo endometrial é a segunda causa benigna mais comum (~10%), atrás da atrofia endometrial.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Segundo a **FEBRASGO** e o **Berek & Novak**, embora todo sangramento pós-menopausa deva ser investigado para descartar neoplasia maligna (carcinoma endometrial responde por ~10% dos casos), a **causa mais frequente (cerca de 60–75% dos casos)** de sangramento uterino na pós-menopausa em mulheres sem terapia hormonal — especialmente eutróficas (IMC 22,8 kg/m²) — é a **atrofia endometrial** (por hipoestrogenismo prolongado).\n- **A) Incorreta:** Miomas tendem a regredir após a menopausa e são causa rara de sangramento pós-menopausa.\n- **C) Incorreta:** Hiperplasia endometrial é menos frequente que atrofia, estando mais associada a obesidade ou exposição estrogênica sem oposição.\n- **D) Incorreta:** Carcinoma de endométrio é a causa mais grave a ser excluída (~10%), porém não é a mais provável/frequente.\n- **E) Incorreta:** Pólipo endometrial é a segunda causa benigna mais comum (~10%), atrás da atrofia endometrial.",
    "perolaClinica": "A alternativa **B** está correta. Segundo a **FEBRASGO** e o **Berek & Novak**, embora todo sangramento pós-menopausa deva ser investigado para descartar neoplasia maligna (carcinoma endometrial responde por ~10% dos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Etiologia mais frequente do sangramento uterino pós-menopausa em mulher eutrófica sem terapia hormonal.",
      "raciocinioChave": "Embora todo sangramento pós-menopausa exija investigação endometrial para afastar malignidade, a causa mais comum (60–75% dos casos) em mulheres sem reposição hormonal e sem fatores de risco metabólicos é a atrofia endometrial por hipoestrogenismo.",
      "armadilhaBanca": "Confundir a causa mais grave que deve ser excluída pela histeroscopia (carcinoma endometrial) com a causa epidemiologicamente mais provável."
    },
    "mapaDistratores": {
      "A": "Miomas submucosos tendem a regredir após a menopausa pelo hipoestrogenismo, sendo causa incomum de sangramento nessa fase.",
      "C": "A hiperplasia endometrial é menos frequente que a atrofia e associa-se principalmente à obesidade ou ao estrogênio sem oposição.",
      "D": "O carcinoma de endométrio responde por cerca de 10% dos casos, sendo a principal hipótese a excluir, mas não a mais provável.",
      "E": "O pólipo endometrial representa a segunda causa benigna mais comum (~10%), ficando atrás da atrofia endometrial."
    }
  },
  {
    "id": "q-uepa-2022-068",
    "code": "Q-UEPA22-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": [
      "sindrome-da-bexiga-dolorosa",
      "cistite-intersticial",
      "dor-pelvica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 35 anos, nuligesta, apresentando há 8 meses dor suprapúbica associada a enchimento vesical, acompanhada de dispareunia, disúria, urgência miccional, aumento da frequência miccional, tenesmo e noctúria. Nega outros sintomas. Sem achados no exame físico geral, no exame abdominal, no toque vaginal e no exame especular. Exame de sedimento urinário está normal. O diagnóstico mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome do intestino irritável.",
        "explanation": "Incorreta: A síndrome do intestino irritável caracteriza-se por dor abdominal relacionada à defecação e alteração do hábito intestinal (critérios de Roma IV), não ao enchimento vesical.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Síndrome da bexiga dolorosa.",
        "explanation": "A alternativa **B** está correta. Conforme os critérios da **ICS (International Continence Society)** e da **FEBRASGO**, a **Síndrome da Bexiga Dolorosa / Cistite Intersticial** é definida por **dor pélvica/suprapúbica crônica (> 6 meses) relacionada ao enchimento vesical** (frequentemente aliviada após a micção), acompanhada de **sintomas urinários irritativos** (polaciúria, urgência miccional, noctúria, disúria) e dispareunia, **na ausência de infecção urinária** (sedimento urinário/urocultura normais) ou outras patologias identificáveis.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Doença inflamatória pélvica.",
        "explanation": "Incorreta: DIP cursa com dor à mobilização do colo uterino/anexial, corrimento mucopurulento e sinais inflamatórios/infecciosos, ausentes no exame ginecológico normal.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Neuralgia e síndrome miofascial.",
        "explanation": "Incorreta: Neuralgia/síndrome miofascial não explica a relação típica com enchimento vesical e sintomas urinários baixos predominantes (urgência, noctúria, disúria).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Fibromialgia.",
        "explanation": "Incorreta: Fibromialgia cursa com dor musculoesquelética difusa crônica e fadiga, não quadro localizado de dor suprapúbica ao enchimento vesical.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Conforme os critérios da **ICS (International Continence Society)** e da **FEBRASGO**, a **Síndrome da Bexiga Dolorosa / Cistite Intersticial** é definida por **dor pélvica/suprapúbica crônica (> 6 meses) relacionada ao enchimento vesical** (frequentemente aliviada após a micção), acompanhada de **sintomas urinários irritativos** (polaciúria, urgência miccional, noctúria, disúria) e dispareunia, **na ausência de infecção urinária** (sedimento urinário/urocultura normais) ou outras patologias identificáveis.\n- **A) Incorreta:** A síndrome do intestino irritável caracteriza-se por dor abdominal relacionada à defecação e alteração do hábito intestinal (critérios de Roma IV), não ao enchimento vesical.\n- **C) Incorreta:** DIP cursa com dor à mobilização do colo uterino/anexial, corrimento mucopurulento e sinais inflamatórios/infecciosos, ausentes no exame ginecológico normal.\n- **D) Incorreta:** Neuralgia/síndrome miofascial não explica a relação típica com enchimento vesical e sintomas urinários baixos predominantes (urgência, noctúria, disúria).\n- **E) Incorreta:** Fibromialgia cursa com dor musculoesquelética difusa crônica e fadiga, não quadro localizado de dor suprapúbica ao enchimento vesical.",
    "perolaClinica": "A alternativa **B** está correta. Conforme os critérios da **ICS (International Continence Society)** e da **FEBRASGO**, a **Síndrome da Bexiga Dolorosa / Cistite Intersticial** é definida por **dor pélvica/suprapúbica…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico da síndrome da bexiga dolorosa (cistite intersticial) em dor pélvica crônica.",
      "raciocinioChave": "Dor suprapúbica crônica (> 6 meses) associada ao enchimento vesical, acompanhada de urgência, polaciúria, noctúria e dispareunia, com exame físico e urinário normais, preenche os critérios da síndrome da bexiga dolorosa.",
      "armadilhaBanca": "Atribuir dor pélvica crônica com sintomas urinários baixos e sedimento normal a doenças ginecológicas ou reumatológicas inespecíficas."
    },
    "mapaDistratores": {
      "A": "A síndrome do intestino irritável cursa com dor abdominal ligada à defecação e alteração do hábito intestinal, não ao enchimento vesical.",
      "C": "A doença inflamatória pélvica apresenta sinais inflamatórios e dor à mobilização do colo ou anexos, ausentes neste exame físico normal.",
      "D": "Neuralgias e síndrome miofascial não justificam a relação característica da dor com o enchimento vesical nem os sintomas irritativos urinários.",
      "E": "A fibromialgia manifesta-se com dor musculoesquelética difusa crônica e fadiga, sem relação primária com enchimento vesical."
    }
  },
  {
    "id": "q-uepa-2022-069",
    "code": "Q-UEPA22-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "amenorreia-primaria",
      "menarca",
      "criterios-diagnosticos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A inexistência da menarca, isto é, a ausência da primeira menstruação espontânea, caracteriza a amenorreia primária, que deve ser investigada quando a menarca NÃO ocorrer até:",
    "alternativas": [
      {
        "letter": "A",
        "text": "os 11 anos de idade e sendo observada completa ausência de caracteres sexuais secundários.",
        "explanation": "Incorreta: Na ausência de caracteres sexuais secundários, o marco para investigação é **13 anos** (não 11 anos).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "os 15 anos de idade em meninas com caracteres sexuais secundários presentes.",
        "explanation": "A alternativa **B** está correta. De acordo com a **FEBRASGO** e a **ASRM/ACOG**, define-se **amenorreia primária** (com indicação formal de investigação) quando não ocorre menarca até: 1. **15 anos de idade** (ou 16 anos em textos mais antigos) na **presença de caracteres sexuais secundários** (ou **3 anos após a telarca**); OU 2. **13 anos de idade** (ou 14 anos em referências clássicas) na **ausência completa de caracteres sexuais secundários** (telarca).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "5 anos após o início do desenvolvimento das mamas, se isto se deu antes dos 10 anos de idade.",
        "explanation": "Incorreta: O intervalo máximo esperado entre telarca e menarca é de **3 anos** (não 5 anos).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "os 13 anos de idade em meninas com caracteres sexuais secundários presentes.",
        "explanation": "Incorreta: Aos 13 anos só se investiga se houver **ausência** de caracteres sexuais secundários; com caracteres presentes, aguarda-se até 15 anos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "os 10 anos de idade e sendo observada completa ausência de caracteres sexuais secundários.",
        "explanation": "Incorreta: Aos 10 anos sem caracteres sexuais secundários ainda está dentro da faixa fisiológica normal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com a **FEBRASGO** e a **ASRM/ACOG**, define-se **amenorreia primária** (com indicação formal de investigação) quando não ocorre menarca até:\n1. **15 anos de idade** (ou 16 anos em textos mais antigos) na **presença de caracteres sexuais secundários** (ou **3 anos após a telarca**); OU\n2. **13 anos de idade** (ou 14 anos em referências clássicas) na **ausência completa de caracteres sexuais secundários** (telarca).\n- **A) Incorreta:** Na ausência de caracteres sexuais secundários, o marco para investigação é **13 anos** (não 11 anos).\n- **C) Incorreta:** O intervalo máximo esperado entre telarca e menarca é de **3 anos** (não 5 anos).\n- **D) Incorreta:** Aos 13 anos só se investiga se houver **ausência** de caracteres sexuais secundários; com caracteres presentes, aguarda-se até 15 anos.\n- **E) Incorreta:** Aos 10 anos sem caracteres sexuais secundários ainda está dentro da faixa fisiológica normal.",
    "perolaClinica": "A alternativa **B** está correta. De acordo com a **FEBRASGO** e a **ASRM/ACOG**, define-se **amenorreia primária** (com indicação formal de investigação) quando não ocorre menarca até: 1. **15 anos de idade** (ou 16…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critérios etários e puberais que definem a indicação de investigação da amenorreia primária.",
      "raciocinioChave": "Investiga-se amenorreia primária quando não ocorre menarca até os 15 anos na presença de caracteres sexuais secundários, ou até os 13 anos na ausência completa deles (ou após 3 anos da telarca).",
      "armadilhaBanca": "Trocar os marcos etários de investigação da amenorreia primária conforme a presença (15 anos) ou ausência (13 anos) de caracteres sexuais secundários."
    },
    "mapaDistratores": {
      "A": "Na ausência completa de caracteres sexuais secundários, o limite etário para iniciar investigação é 13 anos, e não 11 anos.",
      "C": "O intervalo esperado entre o início do desenvolvimento mamário (telarca) e a menarca é de até 3 anos, não 5 anos.",
      "D": "Aos 13 anos só se indica investigação se houver ausência de caracteres sexuais secundários; quando presentes, aguarda-se até 15 anos.",
      "E": "A ausência de menarca e de caracteres sexuais secundários aos 10 anos ainda se encontra dentro da variabilidade fisiológica da puberdade."
    }
  },
  {
    "id": "q-uepa-2022-070",
    "code": "Q-UEPA22-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Climatério e Terapia Hormonal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-climaterio-e-terapia-hormonal",
    "tags": [
      "climaterio",
      "terapia-hormonal",
      "contraindicacoes",
      "lupus-eritematoso-sistemico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 49 anos queixando-se de fogachos e sudorese noturna, todos os dias, há 3 meses. Nega outras queixas. Há cerca de 1 ano os ciclos menstruais duram de 40 a 45 dias. Relata os seguintes diagnósticos prévios em tratamento: hipertensão arterial sistêmica, hipotireoidismo e lúpus eritematoso sistêmico, todos devidamente controlados. Mamografia, colpocitologia oncótica e ultrassonografia transvaginal estão normais. Sobre a terapia de reposição hormonal para esta paciente é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "está contra-indicada devido apresentar hipertensão arterial sistêmica.",
        "explanation": "Incorreta: Hipertensão arterial sistêmica **controlada** não contraindica THM (preferindo-se a via transdérmica).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "está contra-indicada devido apresentar hipotireoidismo.",
        "explanation": "Incorreta: Hipotireoidismo controlado não é contraindicação à THM (apenas pode exigir ajuste da dose de levotiroxina se estrogênio oral).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "está contra-indicada devido apresentar lúpus eritematoso sistêmico.",
        "explanation": "A alternativa **C** está correta conforme o gabarito oficial definitivo da UEPA 2022. De acordo com o **Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC / FEBRASGO)**, o **Lúpus Eritematoso Sistêmico (LES)** — especialmente com atividade da doença ou risco trombótico/presença de anticorpos antifosfolípides — figura entre as **contraindicações clássicas à terapia hormonal (estrogênica)** pelo risco aumentado de eventos tromboembólicos e reativação/exacerbação da doença.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "não está indicada, devendo-se optar por terapia não farmacológica.",
        "explanation": "Incorreta: Sintomas vasomotores diários (fogachos e sudorese noturna) têm indicação clínica de tratamento (inclusive farmacológico não hormonal, como ISRS/IRSN/gabapentina, quando a THM é contraindicada).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "não está indicada, devendo-se optar por reposição de cálcio e vitamina D.",
        "explanation": "Incorreta: Cálcio e vitamina D não tratam fogachos/sintomas vasomotores do climatério.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta conforme o gabarito oficial definitivo da UEPA 2022. De acordo com o **Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC / FEBRASGO)**, o **Lúpus Eritematoso Sistêmico (LES)** — especialmente com atividade da doença ou risco trombótico/presença de anticorpos antifosfolípides — figura entre as **contraindicações clássicas à terapia hormonal (estrogênica)** pelo risco aumentado de eventos tromboembólicos e reativação/exacerbação da doença.\n- **A) Incorreta:** Hipertensão arterial sistêmica **controlada** não contraindica THM (preferindo-se a via transdérmica).\n- **B) Incorreta:** Hipotireoidismo controlado não é contraindicação à THM (apenas pode exigir ajuste da dose de levotiroxina se estrogênio oral).\n- **D) Incorreta:** Sintomas vasomotores diários (fogachos e sudorese noturna) têm indicação clínica de tratamento (inclusive farmacológico não hormonal, como ISRS/IRSN/gabapentina, quando a THM é contraindicada).\n- **E) Incorreta:** Cálcio e vitamina D não tratam fogachos/sintomas vasomotores do climatério.",
    "perolaClinica": "A alternativa **C** está correta conforme o gabarito oficial definitivo da UEPA 2022. De acordo com o **Consenso Brasileiro de Terapêutica Hormonal da Menopausa (SOBRAC / FEBRASGO)**, o **Lúpus Eritematoso Sistêmico…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Contraindicações à terapia hormonal da menopausa frente a comorbidades clínicas associadas.",
      "raciocinioChave": "A paciente apresenta sintomas vasomotores diários no climatério, porém o lúpus eritematoso sistêmico (LES) contraindica a terapia hormonal estrogênica pelo risco aumentado de tromboembolismo e reativação da doença. Já HAS e hipotireoidismo controlados não impedem o tratamento.",
      "armadilhaBanca": "Considerar comorbidades crônicas controladas (HAS ou hipotireoidismo) como contraindicações absolutas à terapia hormonal em vez do LES."
    },
    "mapaDistratores": {
      "A": "A hipertensão arterial sistêmica controlada não contraindica a terapia hormonal, preferindo-se apenas a via transdérmica.",
      "B": "O hipotireoidismo compensado não contraindica a terapia hormonal, podendo apenas demandar monitorização da dose de levotiroxina com estrogênio oral.",
      "D": "Fogachos e sudorese noturna diários têm indicação formal de tratamento, inclusive farmacológico não hormonal quando a terapia hormonal é contraindicada.",
      "E": "A suplementação de cálcio e vitamina D atua na saúde óssea e não promove controle dos sintomas vasomotores do climatério."
    }
  },
  {
    "id": "q-uepa-2022-071",
    "code": "Q-UEPA22-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "asc-h",
      "colpocitologia",
      "colposcopia",
      "rastreamento-colo-uterino"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 35 anos, assintomática, comparece ao consultório de ginecologia trazendo uma colpocitologia oncológica com o seguinte resultado: Células escamosas atípicas, não podendo excluir lesão intraepitelial de alto grau (ASC-H). Segundo orientações do Ministério da saúde o seguimento deve ser realizado da seguinte forma:",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitação imediata de colposcopia.",
        "explanation": "A alternativa **A** está correta. Segundo as **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)**, diante de resultado citopatológico de **ASC-H** (células escamosas atípicas, não se podendo excluir lesão intraepitelial de alto grau), **em qualquer faixa etária**, a conduta obrigatória é o **encaminhamento imediato para colposcopia** (devido ao alto risco de NIC II/III subjacente).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "indicação imediata de conização.",
        "explanation": "Incorreta: A conização/EZT só é indicada após avaliação colposcópica (e geralmente confirmação histológica ou critérios de \"ver e tratar\" em HSIL, não diretamente sem colposcopia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "repetir colpocitologia oncológica do colo em 1 ano.",
        "explanation": "Incorreta: Repetição em 1 ano aplica-se a **ASC-US** em mulheres entre 25 e 29 anos (ou LSIL em ≥ 25 anos em 6 meses).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "repetir colpocitologia oncológica do colo em 6 meses.",
        "explanation": "Incorreta: Repetição em 6 meses aplica-se a **ASC-US** em mulheres ≥ 30 anos ou **LSIL** em mulheres ≥ 25 anos — nunca para ASC-H.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "repetir colpocitologia oncológica do colo em 3 meses.",
        "explanation": "Incorreta: Não existe recomendação de repetir citologia em 3 meses para ASC-H.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Segundo as **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)**, diante de resultado citopatológico de **ASC-H** (células escamosas atípicas, não se podendo excluir lesão intraepitelial de alto grau), **em qualquer faixa etária**, a conduta obrigatória é o **encaminhamento imediato para colposcopia** (devido ao alto risco de NIC II/III subjacente).\n- **B) Incorreta:** A conização/EZT só é indicada após avaliação colposcópica (e geralmente confirmação histológica ou critérios de \"ver e tratar\" em HSIL, não diretamente sem colposcopia).\n- **C) Incorreta:** Repetição em 1 ano aplica-se a **ASC-US** em mulheres entre 25 e 29 anos (ou LSIL em ≥ 25 anos em 6 meses).\n- **D) Incorreta:** Repetição em 6 meses aplica-se a **ASC-US** em mulheres ≥ 30 anos ou **LSIL** em mulheres ≥ 25 anos — nunca para ASC-H.\n- **E) Incorreta:** Não existe recomendação de repetir citologia em 3 meses para ASC-H.",
    "perolaClinica": "A alternativa **A** está correta. Segundo as **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA / Ministério da Saúde)**, diante de resultado citopatológico de **ASC-H** (células escamosas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta preconizada pelo Ministério da Saúde diante de citologia cervical com resultado ASC-H.",
      "raciocinioChave": "Como o achado de ASC-H não permite excluir lesão intraepitelial de alto grau (NIC II/III), as diretrizes brasileiras determinam encaminhamento imediato para colposcopia em qualquer faixa etária.",
      "armadilhaBanca": "Aplicar a conduta expectante com repetição citológica (própria de ASC-US e LSIL) para um laudo de ASC-H."
    },
    "mapaDistratores": {
      "B": "A conização não deve ser indicada diretamente pela citologia de ASC-H sem avaliação colposcópica prévia e confirmação correspondente.",
      "C": "A repetição citológica em 1 ano é utilizada para ASC-US em mulheres entre 25 e 29 anos, não para ASC-H.",
      "D": "A repetição em 6 meses aplica-se a ASC-US em mulheres com 30 anos ou mais ou a LSIL a partir dos 25 anos, sendo inadequada para ASC-H.",
      "E": "Não há previsão nas diretrizes do Ministério da Saúde para repetir colpocitologia oncótica em 3 meses diante de ASC-H."
    }
  },
  {
    "id": "q-uepa-2022-072",
    "code": "Q-UEPA22-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Abortamento e Incompetência Istmocervical",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-abortamento-e-incompetencia-istmocervical",
    "tags": [
      "abortamento-incompleto",
      "amiu",
      "esvaziamento-uterino"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 22 anos comparece ao serviço de urgência e emergência obstétrica referindo intenso sangramento vaginal. Relata que já havia realizado a primeira consulta de pré-natal e que estava com 2 meses de atraso menstrual. Nega febre. Exame físico: pressão arterial igual a 110/70 mmHg, temperatura axilar de 360 Celsius, sangramento uterino vermelho vivo de intensidade moderada sem odor, colo pérvio para 1 cm, útero intra-pélvico de pequeno volume, eliminando material amorfo entremeado ao sangue pelo colo uterino. Exame de fração Beta da gonadotrofina coriônica humana positivo. Leucograma normal. Ultrassonografia transvaginal mostra ecos amorfos intra-uterinos e ausência de feto ou embrião. O diagnóstico e a respectiva conduta, neste caso, são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "abortamento completo e conduta conservadora com orientação e retorno ao domicílio.",
        "explanation": "Incorreta: No abortamento completo o colo encontra-se fechado, o sangramento já cessou e a cavidade uterina está vazia (eco endometrial < 15 mm).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "abortamento retido e esvaziamento uterino com curetagem uterina.",
        "explanation": "Incorreta: No abortamento retido o colo está **fechado** e há embrião sem BCF ou saco gestacional íntegro retido na cavidade.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aborto infectado, antibioticoterapia e esvaziamento uterino.",
        "explanation": "Incorreta: Não há sinais de infecção (afebril, secreção sem odor, leucograma normal, ausência de dor à mobilização).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "abortamento retido e esvaziamento uterino com aspiração manual intra-uterina.",
        "explanation": "Incorreta: O diagnóstico é abortamento **incompleto** (colo pérvio + restos ovulares), não retido.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "abortamento incompleto e esvaziamento uterino com aspiração manual intra-uterina.",
        "explanation": "A alternativa **E** está correta. Gestante de ~8 semanas com **sangramento moderado, colo uterino pérvio (1 cm), eliminação de restos ovulares e USG transvaginal evidenciando ecos amorfos (restos ovulares) intrauterinos sem embrião** caracteriza **abortamento incompleto** (não infectado: afebril, sem odor fétido, leucograma normal). Conforme o **Ministério da Saúde (Atenção Humanizada ao Abortamento) e OMS/FEBRASGO**, para útero ≤ 12 semanas, o método de escolha para esvaziamento uterino é a **aspiração manual intrauterina (AMIU)**, por apresentar menor taxa de complicações (perfuração, sinéquias/Asherman) e menor sangramento que a curetagem convencional.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Gestante de ~8 semanas com **sangramento moderado, colo uterino pérvio (1 cm), eliminação de restos ovulares e USG transvaginal evidenciando ecos amorfos (restos ovulares) intrauterinos sem embrião** caracteriza **abortamento incompleto** (não infectado: afebril, sem odor fétido, leucograma normal). Conforme o **Ministério da Saúde (Atenção Humanizada ao Abortamento) e OMS/FEBRASGO**, para útero ≤ 12 semanas, o método de escolha para esvaziamento uterino é a **aspiração manual intrauterina (AMIU)**, por apresentar menor taxa de complicações (perfuração, sinéquias/Asherman) e menor sangramento que a curetagem convencional.\n- **A) Incorreta:** No abortamento completo o colo encontra-se fechado, o sangramento já cessou e a cavidade uterina está vazia (eco endometrial < 15 mm).\n- **B) Incorreta:** No abortamento retido o colo está **fechado** e há embrião sem BCF ou saco gestacional íntegro retido na cavidade.\n- **C) Incorreta:** Não há sinais de infecção (afebril, secreção sem odor, leucograma normal, ausência de dor à mobilização).\n- **D) Incorreta:** O diagnóstico é abortamento **incompleto** (colo pérvio + restos ovulares), não retido.",
    "perolaClinica": "A alternativa **E** está correta. Gestante de ~8 semanas com **sangramento moderado, colo uterino pérvio (1 cm), eliminação de restos ovulares e USG transvaginal evidenciando ecos amorfos (restos ovulares)…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial das formas de abortamento e escolha do método de esvaziamento no 1º trimestre.",
      "raciocinioChave": "Gestante de ~8 semanas sem sinais infecciosos, com sangramento, colo pérvio (1 cm), eliminação de material amorfo e ecos amorfos intrauterinos sem embrião apresenta abortamento incompleto; até 12 semanas, o método preferencial de esvaziamento é a AMIU.",
      "armadilhaBanca": "Confundir abortamento incompleto (colo pérvio e restos ovulares) com retido (colo fechado) ou escolher curetagem em vez de AMIU no 1º trimestre."
    },
    "mapaDistratores": {
      "A": "No abortamento completo o colo encontra-se fechado, o sangramento já regrediu e a cavidade uterina está vazia à ultrassonografia.",
      "B": "O abortamento retido cursa com colo fechado e embrião sem batimentos ou saco gestacional íntegro retido, além de a curetagem não ser preferencial à AMIU.",
      "C": "Não há critérios de aborto infectado, pois a paciente está afebril, sem odor fétido e com leucograma normal.",
      "D": "Embora indique AMIU, erra o diagnóstico ao classificar o quadro como retido, quando colo pérvio e restos ovulares definem abortamento incompleto."
    }
  },
  {
    "id": "q-uepa-2022-073",
    "code": "Q-UEPA22-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Pré-Eclâmpsia, Eclâmpsia e Síndrome HELLP",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-pre-eclampsia-eclampsia-e-sindrome-hellp",
    "tags": [
      "pcr-na-gestante",
      "assistolia",
      "acls",
      "epinefrina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta com 37 anos de idade e com 34 semanas de gestação busca atendimento no serviço de urgência e emergência devido cefaleia, escotomas e epigastralgia. A pressão arterial de admissão é de 190/120 mmHg. Durante a consulta a paciente evolui com convulsões tônico-clônicas seguidas de parada cardiorrespiratória. O monitor mostra assistolia. Durante os procedimentos de reanimação cardiopulmonar, a conduta mais adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administrar 1 mg de epinefrina o mais rápido possível.",
        "explanation": "A alternativa **A** está correta. Segundo as diretrizes da **AHA (ACLS — Cardiac Arrest in Pregnancy)**, a **assistolia** é um ritmo **não chocável**, no qual se deve iniciar imediatamente RCP de alta qualidade (com deslocamento uterino manual para a esquerda em IG ≥ 20 semanas) e **administrar 1 mg de epinefrina EV/IO o mais rápido possível** (repetindo a cada 3–5 minutos), utilizando as mesmas doses medicamentosas de pacientes não gestantes.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "realizar desfibrilação com desfibrilador bifásico a 200 jaules.",
        "explanation": "Incorreta: Assistolia é um ritmo **não chocável**; não se realiza desfibrilação em assistolia.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a cesária deve ser realizada se não houver reversão do quadro após 10 minutos de reanimação.",
        "explanation": "Incorreta: A **histerotomia ressuscitativa (cesárea perimortem)** em gestação ≥ 20 semanas deve ser iniciada aos **4 minutos** de PCR sem retorno da circulação espontânea, com extração fetal em até **5 minutos** (não 10 minutos).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "as compressões devem ter frequência de 60 a 100 compressões por minuto.",
        "explanation": "Incorreta: A frequência recomendada de compressões torácicas no ACLS é de **100 a 120 compressões/minuto** (não 60–100/min).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "deve-se evitar o uso de desfibrilador mesmo em caso de ritmo chocável.",
        "explanation": "Incorreta: Em ritmos chocáveis (FV/TV sem pulso), a desfibrilação **deve ser realizada normalmente** na gestante com a mesma carga de energia (apenas removendo monitores fetais).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Segundo as diretrizes da **AHA (ACLS — Cardiac Arrest in Pregnancy)**, a **assistolia** é um ritmo **não chocável**, no qual se deve iniciar imediatamente RCP de alta qualidade (com deslocamento uterino manual para a esquerda em IG ≥ 20 semanas) e **administrar 1 mg de epinefrina EV/IO o mais rápido possível** (repetindo a cada 3–5 minutos), utilizando as mesmas doses medicamentosas de pacientes não gestantes.\n- **B) Incorreta:** Assistolia é um ritmo **não chocável**; não se realiza desfibrilação em assistolia.\n- **C) Incorreta:** A **histerotomia ressuscitativa (cesárea perimortem)** em gestação ≥ 20 semanas deve ser iniciada aos **4 minutos** de PCR sem retorno da circulação espontânea, com extração fetal em até **5 minutos** (não 10 minutos).\n- **D) Incorreta:** A frequência recomendada de compressões torácicas no ACLS é de **100 a 120 compressões/minuto** (não 60–100/min).\n- **E) Incorreta:** Em ritmos chocáveis (FV/TV sem pulso), a desfibrilação **deve ser realizada normalmente** na gestante com a mesma carga de energia (apenas removendo monitores fetais).",
    "perolaClinica": "A alternativa **A** está correta. Segundo as diretrizes da **AHA (ACLS — Cardiac Arrest in Pregnancy)**, a **assistolia** é um ritmo **não chocável**, no qual se deve iniciar imediatamente RCP de alta qualidade (com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta na parada cardiorrespiratória em gestante em ritmo não chocável (assistolia) segundo o ACLS.",
      "raciocinioChave": "A assistolia é um ritmo não chocável no qual, além de RCP de alta qualidade com deslocamento uterino à esquerda, administra-se 1 mg de epinefrina EV/IO o mais rápido possível, repetindo a cada 3–5 minutos.",
      "armadilhaBanca": "Indicar desfibrilação em ritmo de assistolia ou retardar a cesárea perimortem para 10 minutos na PCR em gestante."
    },
    "mapaDistratores": {
      "B": "A assistolia é um ritmo não chocável e jamais deve receber desfibrilação elétrica.",
      "C": "A cesárea perimortem em gestação ≥ 20 semanas deve ser iniciada após 4 minutos de PCR sem retorno da circulação espontânea, não 10 minutos.",
      "D": "A frequência recomendada de compressões torácicas no ACLS é de 100 a 120 compressões por minuto, e não 60 a 100 por minuto.",
      "E": "Quando o ritmo da PCR em gestante é chocável (FV ou TV sem pulso), a desfibrilação deve ser realizada normalmente com a mesma energia padrão."
    }
  },
  {
    "id": "q-uepa-2022-074",
    "code": "Q-UEPA22-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Descolamento Prematuro de Placenta",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-descolamento-prematuro-de-placenta",
    "tags": [
      "dpp",
      "iminencia-de-eclampsia",
      "hipertonia-uterina",
      "sangramento-obstetrico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta com 21 anos de idade, 33 semanas de gestação, com hipertensão arterial desde a 260 semana de gravidez, em uso de metildopa 2 gramas ao dia, comparece a urgência e emergência obstétrica referindo cefaléia, epigastralgia, visão turva, sangramento vaginal e dor em baixo ventre. Nega outras queixas. Nega outros episódios de sangramento na gravidez. Exame físico: pressão arterial= 160/ 110 mmHg; dinâmica uterina presente; tônus uterino aumentado, pequeno sangramento via canal cervical, colo impérvio. Com base no caso acima descrito as impressões diagnósticas são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "hipertensão arterial crônica e placenta de inserção baixa.",
        "explanation": "Incorreta: A hipertensão iniciou após a 20ª semana (26ª semana), caracterizando doença hipertensiva da gestação/pré-eclâmpsia, não HAS crônica; e placenta prévia cursa com sangramento indolor e útero com tônus normal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "pré-eclâmpsia e placenta de inserção baixa.",
        "explanation": "Incorreta: Placenta prévia não causa dor abdominal nem hipertonia uterina.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "pré-eclâmpsia e rotura uterina.",
        "explanation": "Incorreta: Rotura uterina ocorre tipicamente em cicatriz uterina/trabalho de parto obstruído com parada das contrações e hipotonia/subida da apresentação, não hipertonia em primigesta com colo impérvio.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "iminência de eclâmpsia e descolamento prematuro de placenta.",
        "explanation": "A alternativa **D** está correta. A gestante desenvolveu hipertensão após 20 semanas (26ª semana) e agora apresenta **PA 160×110 mmHg** associada à tríade clássica de sintomas premonitórios (**cefaleia, epigastralgia e distúrbios visuais/visão turva**), caracterizando **iminência de eclâmpsia (pré-eclâmpsia com sinais de gravidade)**. Concomitantemente, apresenta **dor abdominal, sangramento vaginal e hipertonia uterina** (\"tônus uterino aumentado\"), quadro típico de **descolamento prematuro de placenta (DPP)** — complicação diretamente associada à hipertensão grave na gestação (**FEBRASGO / Ministério da Saúde**).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "iminência de eclâmpsia e rotura uterina.",
        "explanation": "Incorreta: Hipertonia uterina + dor + sangramento em primigesta hipertensa com colo impérvio aponta para DPP, não rotura uterina.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. A gestante desenvolveu hipertensão após 20 semanas (26ª semana) e agora apresenta **PA 160×110 mmHg** associada à tríade clássica de sintomas premonitórios (**cefaleia, epigastralgia e distúrbios visuais/visão turva**), caracterizando **iminência de eclâmpsia (pré-eclâmpsia com sinais de gravidade)**. Concomitantemente, apresenta **dor abdominal, sangramento vaginal e hipertonia uterina** (\"tônus uterino aumentado\"), quadro típico de **descolamento prematuro de placenta (DPP)** — complicação diretamente associada à hipertensão grave na gestação (**FEBRASGO / Ministério da Saúde**).\n- **A) Incorreta:** A hipertensão iniciou após a 20ª semana (26ª semana), caracterizando doença hipertensiva da gestação/pré-eclâmpsia, não HAS crônica; e placenta prévia cursa com sangramento indolor e útero com tônus normal.\n- **B) Incorreta:** Placenta prévia não causa dor abdominal nem hipertonia uterina.\n- **C) Incorreta:** Rotura uterina ocorre tipicamente em cicatriz uterina/trabalho de parto obstruído com parada das contrações e hipotonia/subida da apresentação, não hipertonia em primigesta com colo impérvio.\n- **E) Incorreta:** Hipertonia uterina + dor + sangramento em primigesta hipertensa com colo impérvio aponta para DPP, não rotura uterina.",
    "perolaClinica": "A alternativa **D** está correta. A gestante desenvolveu hipertensão após 20 semanas (26ª semana) e agora apresenta **PA 160×110 mmHg** associada à tríade clássica de sintomas premonitórios (**cefaleia, epigastralgia e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento simultâneo de iminência de eclâmpsia e descolamento prematuro de placenta.",
      "raciocinioChave": "Hipertensão surgida após 20 semanas com PA 160/110 mmHg e sintomas premonitórios (cefaleia, epigastralgia e visão turva) define iminência de eclâmpsia; a associação com dor em baixo ventre, sangramento e hipertonia uterina caracteriza descolamento prematuro de placenta.",
      "armadilhaBanca": "Atribuir sangramento no 3º trimestre com dor e hipertonia uterina à placenta prévia ou rotura uterina em primigesta com colo impérvio."
    },
    "mapaDistratores": {
      "A": "A hipertensão iniciou na 26ª semana (não é crônica) e a placenta prévia cursa com sangramento indolor e tônus uterino normal.",
      "B": "Além de subestimar os sintomas premonitórios de eclâmpsia, a placenta de inserção baixa não provoca dor abdominal nem hipertonia uterina.",
      "C": "A rotura uterina típica associa-se a cicatriz uterina ou parto obstruído, com parada das contrações e hipotonia, não hipertonia em primigesta com colo impérvio.",
      "E": "A associação de hipertonia uterina, dor abdominal e sangramento discreto com colo impérvio em paciente hipertensa aponta para DPP, não rotura uterina."
    }
  },
  {
    "id": "q-uepa-2022-075",
    "code": "Q-UEPA22-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "amenorreia-primaria",
      "disgenesia-gonadal",
      "fsh-elevado",
      "hipogonadismo-hipergonadotrofico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Feminino, 18 anos, vem à consulta trazida pela mãe, com o relato de nunca ter menstruado. Traz exames laboratoriais e apresenta níveis elevados de FSH (Hormônio Folículo Estimulante). Esqueceu o exame de ultrassonografia pélvica em casa. Ao exame físico: Peso 50Kg; Altura: 1,58m; IMC: 20. Genitália externa feminina, hímen íntegro. Estadiamento de Tanner M (Mamas)1 e P (Pelos) 1. Diante do exposto, o diagnóstico desta adolescente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amenorreia hipotalâmica.",
        "explanation": "Incorreta: Amenorreia hipotalâmica cursa com **hipogonadismo hipogonadotrófico** (FSH e LH **baixos**).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Agenesia dos ductos de Mulller.",
        "explanation": "Incorreta: Agenesia mülleriana (Síndrome de Rokitansky) tem ovários normais, portanto **caracteres sexuais secundários presentes (M4-5 P4-5)** e **FSH normal**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Disgenesia Gonadal.",
        "explanation": "A alternativa **C** está correta. Paciente de 18 anos com **amenorreia primária**, **ausência de caracteres sexuais secundários (Tanner M1 P1 — infantilismo sexual / hipoestrogenismo)** e **FSH elevado** apresenta **hipogonadismo hipergonadotrófico** (falência gonadal primária), cuja principal etiologia é a **disgenesia gonadal** (como Síndrome de Turner 45,X ou disgenesia gonadal pura 46,XX / 46,XY — Síndrome de Swyer, compatível com estatura normal de 1,58 m) (**FEBRASGO / Speroff**).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Deficiência de 5-alfa-redutase.",
        "explanation": "Incorreta: Deficiência de 5-alfa-redutase (46,XY) cursa com ambiguidade genital ao nascimento e virilização acentuada na puberdade, não Tanner M1 P1 com FSH elevado.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Síndrome da Insensibilidade Androgênica.",
        "explanation": "Incorreta: Síndrome da insensibilidade androgênica completa (Morris, 46,XY) apresenta **desenvolvimento mamário normal (M4-5)** (por aromatização periférica da testosterona), pelos pubianos escassos/ausentes (P1-2) e FSH normal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Paciente de 18 anos com **amenorreia primária**, **ausência de caracteres sexuais secundários (Tanner M1 P1 — infantilismo sexual / hipoestrogenismo)** e **FSH elevado** apresenta **hipogonadismo hipergonadotrófico** (falência gonadal primária), cuja principal etiologia é a **disgenesia gonadal** (como Síndrome de Turner 45,X ou disgenesia gonadal pura 46,XX / 46,XY — Síndrome de Swyer, compatível com estatura normal de 1,58 m) (**FEBRASGO / Speroff**).\n- **A) Incorreta:** Amenorreia hipotalâmica cursa com **hipogonadismo hipogonadotrófico** (FSH e LH **baixos**).\n- **B) Incorreta:** Agenesia mülleriana (Síndrome de Rokitansky) tem ovários normais, portanto **caracteres sexuais secundários presentes (M4-5 P4-5)** e **FSH normal**.\n- **D) Incorreta:** Deficiência de 5-alfa-redutase (46,XY) cursa com ambiguidade genital ao nascimento e virilização acentuada na puberdade, não Tanner M1 P1 com FSH elevado.\n- **E) Incorreta:** Síndrome da insensibilidade androgênica completa (Morris, 46,XY) apresenta **desenvolvimento mamário normal (M4-5)** (por aromatização periférica da testosterona), pelos pubianos escassos/ausentes (P1-2) e FSH normal.",
    "perolaClinica": "A alternativa **C** está correta. Paciente de 18 anos com **amenorreia primária**, **ausência de caracteres sexuais secundários (Tanner M1 P1 — infantilismo sexual / hipoestrogenismo)** e **FSH elevado** apresenta…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Investigação de amenorreia primária sem caracteres sexuais secundários e com FSH elevado.",
      "raciocinioChave": "Amenorreia primária associada a infantilismo sexual (Tanner M1 P1) e FSH elevado caracteriza hipogonadismo hipergonadotrófico por falência gonadal primária, cuja principal etiologia é a disgenesia gonadal.",
      "armadilhaBanca": "Confundir disgenesia gonadal (FSH alto + M1P1) com causas eugonadotróficas de amenorreia primária que têm desenvolvimento mamário normal."
    },
    "mapaDistratores": {
      "A": "A amenorreia hipotalâmica produz hipogonadismo hipogonadotrófico, cursando caracteristicamente com níveis baixos de FSH e LH.",
      "B": "Na agenesia mülleriana (síndrome de Rokitansky), os ovários são funcionantes, logo há desenvolvimento mamário normal (M4–5) e FSH normal.",
      "D": "A deficiência de 5-alfa-redutase (46,XY) manifesta-se com ambiguidade genital ao nascimento e virilização na puberdade, não com infantilismo M1P1 e FSH elevado.",
      "E": "Na insensibilidade androgênica completa (46,XY), ocorre desenvolvimento mamário normal por aromatização periférica e pelos escassos, com FSH normal ou pouco alterado."
    }
  },
  {
    "id": "q-uepa-2022-076",
    "code": "Q-UEPA22-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": [
      "pop-q",
      "prolapso-genital",
      "uroginecologia",
      "ics"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Feminino, 73 anos, apresenta incontinência urinária e sensação de peso na vagina há 4 anos. Ao exame físico da genitália utilizando a classificação de POP-Q: ponto Aa= +3; ponto Ba= +5; ponto C= -8; ponto D= -9; ponto Ap= +2; ponto Bp= +2; CVT=10cm. Obedecendo aos critérios da Sociedade Internacional de Continência (ICS), o diagnóstico completo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "prolapso de parede vaginal anterior Estadio II e prolapso uterino de 3º grau.",
        "explanation": "Incorreta: Não há prolapso uterino (C = -8, D = -9) e o estádio é III (não II, pois +5 > +1).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "prolapso de paredes vaginais anterior e posterior, Estádio III.",
        "explanation": "A alternativa **B** está correta. Pela **Classificação POP-Q da ICS (FEBRASGO)**: - **Parede anterior:** Aa = +3 e **Ba = +5** (prolapso anterior acentuado, ultrapassando +1 cm). - **Parede posterior:** Ap = +2 e **Bp = +2** (prolapso posterior, ultrapassando +1 cm). - **Compartimento apical (útero/colo):** C = -8 e D = -9 (CVT = 10 cm) -> ambos muito acima do hímen (≤ -(CVT - 2) = -8 cm), logo **não há prolapso uterino nem alongamento hipertrófico do colo** (diferença C–D de apenas 1 cm). - **Estadiamento global (pelo ponto mais prolapsado, Ba = +5):** ultrapassa +1 cm, mas é menor que +(CVT - 2) = +8 cm (+1 < +5 < +8), definindo **Estádio III**. Portanto: **prolapso de paredes vaginais anterior e posterior, Estádio III**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "prolapso uterino de 3ºgrau, isolado.",
        "explanation": "Incorreta: Os pontos C (-8) e D (-9) descartam prolapso uterino.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "alongamento hipertrófico de colo (sem prolapso uterino) e prolapso de parede anterior Estádio II.",
        "explanation": "Incorreta: Não há alongamento hipertrófico do colo (C = -8 e D = -9 são normais) e o prolapso anterior é Estádio III (+5), havendo também prolapso posterior (+2).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "prolapso uterino de 2º grau com alongamento hipertrófico de colo e prolapsos de parede vaginal anterior e de parede posterior, Estádio III.",
        "explanation": "Incorreta: Não há prolapso uterino nem alongamento hipertrófico do colo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Pela **Classificação POP-Q da ICS (FEBRASGO)**:\n- **Parede anterior:** Aa = +3 e **Ba = +5** (prolapso anterior acentuado, ultrapassando +1 cm).\n- **Parede posterior:** Ap = +2 e **Bp = +2** (prolapso posterior, ultrapassando +1 cm).\n- **Compartimento apical (útero/colo):** C = -8 e D = -9 (CVT = 10 cm) -> ambos muito acima do hímen (≤ -(CVT - 2) = -8 cm), logo **não há prolapso uterino nem alongamento hipertrófico do colo** (diferença C–D de apenas 1 cm).\n- **Estadiamento global (pelo ponto mais prolapsado, Ba = +5):** ultrapassa +1 cm, mas é menor que +(CVT - 2) = +8 cm (+1 < +5 < +8), definindo **Estádio III**.\nPortanto: **prolapso de paredes vaginais anterior e posterior, Estádio III**.\n- **A) Incorreta:** Não há prolapso uterino (C = -8, D = -9) e o estádio é III (não II, pois +5 > +1).\n- **C) Incorreta:** Os pontos C (-8) e D (-9) descartam prolapso uterino.\n- **D) Incorreta:** Não há alongamento hipertrófico do colo (C = -8 e D = -9 são normais) e o prolapso anterior é Estádio III (+5), havendo também prolapso posterior (+2).\n- **E) Incorreta:** Não há prolapso uterino nem alongamento hipertrófico do colo.",
    "perolaClinica": "A alternativa **B** está correta. Pela **Classificação POP-Q da ICS (FEBRASGO)**: - **Parede anterior:** Aa = +3 e **Ba = +5** (prolapso anterior acentuado, ultrapassando +1 cm). - **Parede posterior:** Ap = +2 e **Bp…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Estadiamento de prolapsos de órgãos pélvicos pela classificação POP-Q da ICS.",
      "raciocinioChave": "Os pontos Aa (+3), Ba (+5), Ap (+2) e Bp (+2) mostram prolapso das paredes vaginais anterior e posterior ultrapassando +1 cm (Estádio III, pois o ponto mais prolapsado é +5 < CVT − 2 = 8 cm), enquanto C (−8) e D (−9) em CVT de 10 cm descartam prolapso apical/uterino.",
      "armadilhaBanca": "Interpretar valores negativos profundos de C e D como prolapso apical ou classificar Ba = +5 como Estádio II no POP-Q."
    },
    "mapaDistratores": {
      "A": "Não há prolapso uterino (C = −8 e D = −9) e o prolapso anterior com Ba = +5 corresponde ao Estádio III, não ao II.",
      "C": "Os pontos C (−8) e D (−9) próximos ao comprimento vaginal total (10 cm) afastam prolapso uterino.",
      "D": "Não existe alongamento hipertrófico do colo (C e D normais e próximos entre si), o estádio anterior é III (+5) e há prolapso posterior associado (+2).",
      "E": "Os valores normais de C (−8) e D (−9) excluem tanto prolapso uterino quanto alongamento hipertrófico de colo."
    }
  },
  {
    "id": "q-uepa-2022-077",
    "code": "Q-UEPA22-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": [
      "assoalho-pelvico",
      "musculo-elevador-do-anus",
      "anatomia-pelvica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A estabilidade da pelve feminina é dada pela ação do aparelho de sustentação, integrando o assoalho pélvico. Reconhecer as estruturas que o compõe é fundamental para orientação e tratamento direcionados, especialmente, nos casos de incontinência urinária e prolapsos genitais. A principal estrutura responsável pela sustentação do assoalho pélvico é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ligamentos redondos",
        "explanation": "Incorreta: Os ligamentos redondos apenas auxiliam na orientação (anteversão) uterina, sem papel relevante na sustentação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "ligamentos uterosacros",
        "explanation": "Incorreta: Os ligamentos uterossacros (junto aos cardinais) compõem o **aparelho de suspensão** (Nível I de DeLancey), não o de sustentação muscular.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "fáscia endopélvica",
        "explanation": "Incorreta: A fáscia endopélvica integra o sistema de suspensão/fixação conjuntiva (ligamentos e fáscias pubocervical/retovaginal), subordinado à integridade muscular do elevador do ânus.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "músculo elevador do ânus",
        "explanation": "A alternativa **D** está correta. Na anatomia funcional da pelve feminina (**DeLancey / FEBRASGO**), o **aparelho de sustentação** (diafragma pélvico) tem como estrutura principal o **músculo elevador do ânus** (composto pelos feixes puborretal, pubococcígeo e iliococcígeo), responsável pelo suporte ativo contínuo das vísceras pélvicas e fechamento do hiato urogenital.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "músculo transverso profundo do períneo",
        "explanation": "Incorreta: O músculo transverso profundo do períneo faz parte do diafragma urogenital (suporte mais distal/perineal), tendo papel secundário em relação ao elevador do ânus.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Na anatomia funcional da pelve feminina (**DeLancey / FEBRASGO**), o **aparelho de sustentação** (diafragma pélvico) tem como estrutura principal o **músculo elevador do ânus** (composto pelos feixes puborretal, pubococcígeo e iliococcígeo), responsável pelo suporte ativo contínuo das vísceras pélvicas e fechamento do hiato urogenital.\n- **A) Incorreta:** Os ligamentos redondos apenas auxiliam na orientação (anteversão) uterina, sem papel relevante na sustentação.\n- **B) Incorreta:** Os ligamentos uterossacros (junto aos cardinais) compõem o **aparelho de suspensão** (Nível I de DeLancey), não o de sustentação muscular.\n- **C) Incorreta:** A fáscia endopélvica integra o sistema de suspensão/fixação conjuntiva (ligamentos e fáscias pubocervical/retovaginal), subordinado à integridade muscular do elevador do ânus.\n- **E) Incorreta:** O músculo transverso profundo do períneo faz parte do diafragma urogenital (suporte mais distal/perineal), tendo papel secundário em relação ao elevador do ânus.",
    "perolaClinica": "A alternativa **D** está correta. Na anatomia funcional da pelve feminina (**DeLancey / FEBRASGO**), o **aparelho de sustentação** (diafragma pélvico) tem como estrutura principal o **músculo elevador do ânus**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Anatomia funcional do assoalho pélvico: principal estrutura do aparelho de sustentação.",
      "raciocinioChave": "Na divisão funcional da pelve feminina, o aparelho de sustentação (diafragma pélvico) é representado fundamentalmente pelo músculo elevador do ânus, que mantém o tônus basal e fecha o hiato urogenital.",
      "armadilhaBanca": "Confundir os elementos do aparelho de suspensão (ligamentos uterossacros e fáscia) com a principal estrutura muscular de sustentação pélvica."
    },
    "mapaDistratores": {
      "A": "Os ligamentos redondos atuam apenas na orientação (anteversão) uterina, sem função significativa de sustentação pélvica.",
      "B": "Os ligamentos uterossacros integram o aparelho de suspensão (nível I de DeLancey), e não o aparelho muscular de sustentação.",
      "C": "A fáscia endopélvica compõe o sistema conjuntivo de suspensão/fixação, cujo suporte depende da integridade muscular do elevador do ânus.",
      "E": "O músculo transverso profundo do períneo pertence ao diafragma urogenital distal, exercendo papel secundário frente ao elevador do ânus."
    }
  },
  {
    "id": "q-uepa-2022-078",
    "code": "Q-UEPA22-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Ovário e Massas Anexiais",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-ovario-e-massas-anexiais",
    "tags": [
      "cisto-dermoide",
      "teratoma-maduro",
      "massa-anexial",
      "ultrassonografia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Feminino, 29 anos, comparece em consulta ginecológica de rotina, assintomática. Nuligesta, refere ciclos menstruais mensais e está em uso de contraceptivo oral combinado. Nega queixas intestinais. Ao exame físico, palpa-se massa de 7-8 cm em região anexial esquerda, fibroelástica, móvel e indolor. A ultrassonografia transvaginal evidencia formação sólido-cística de medidas 6,2 x 5,6 cm, em topografia de anexo esquerdo, contendo áreas hiperecogênicas produtoras de sombra acústica (calcificações), áreas hipoecoicas com debris e algumas septações. Apresenta Dopplerfluxometria sem alterações. Diante do exposto, o diagnóstico do caso apresentado é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "cistoadenoma mucinoso de ovário.",
        "explanation": "Incorreta: Cistoadenoma mucinoso costuma ser grande, multilocular, de paredes finas e conteúdo de ecogenicidade variável, sem calcificações típicas com sombra acústica.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "cistoadenocarcinoma seroso ovariano.",
        "explanation": "Incorreta: Cistoadenocarcinoma seroso cursa com papilas vascularizadas ao Doppler, ascite e predomina em mulheres mais velhas/pós-menopausa.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "endometrioma.",
        "explanation": "Incorreta: Endometrioma apresenta aspecto cístico homogêneo em **\"vidro fosco\"** (ecos difusos de baixa intensidade), sem calcificações com sombra acústica, e costuma cursar com dismenorreia/dispareunia.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "cisto tecaluteínico.",
        "explanation": "Incorreta: Cistos tecaluteínicos são bilaterais e multiloculares, associados a altos níveis de beta-hCG (doença trofoblástica gestacional, hiperestimulação ovariana).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "cisto dermoide.",
        "explanation": "A alternativa **E** está correta. Mulher jovem (29 anos), assintomática, com massa anexial móvel, indolor, **sólido-cística** contendo **áreas hiperecogênicas com sombra acústica posterior (calcificações/dentes/ossos — nódulo de Rokitansky)**, debris/conteúdo sebáceo e Doppler normal apresenta o aspecto ultrassonográfico clássico (critério B dos **IOTA Simple Rules**) do **teratoma cístico maduro (cisto dermoide)** — o tumor germinativo benigno mais comum do ovário em mulheres em idade fértil (**FEBRASGO / Berek & Novak**).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Mulher jovem (29 anos), assintomática, com massa anexial móvel, indolor, **sólido-cística** contendo **áreas hiperecogênicas com sombra acústica posterior (calcificações/dentes/ossos — nódulo de Rokitansky)**, debris/conteúdo sebáceo e Doppler normal apresenta o aspecto ultrassonográfico clássico (critério B dos **IOTA Simple Rules**) do **teratoma cístico maduro (cisto dermoide)** — o tumor germinativo benigno mais comum do ovário em mulheres em idade fértil (**FEBRASGO / Berek & Novak**).\n- **A) Incorreta:** Cistoadenoma mucinoso costuma ser grande, multilocular, de paredes finas e conteúdo de ecogenicidade variável, sem calcificações típicas com sombra acústica.\n- **B) Incorreta:** Cistoadenocarcinoma seroso cursa com papilas vascularizadas ao Doppler, ascite e predomina em mulheres mais velhas/pós-menopausa.\n- **C) Incorreta:** Endometrioma apresenta aspecto cístico homogêneo em **\"vidro fosco\"** (ecos difusos de baixa intensidade), sem calcificações com sombra acústica, e costuma cursar com dismenorreia/dispareunia.\n- **D) Incorreta:** Cistos tecaluteínicos são bilaterais e multiloculares, associados a altos níveis de beta-hCG (doença trofoblástica gestacional, hiperestimulação ovariana).",
    "perolaClinica": "A alternativa **E** está correta. Mulher jovem (29 anos), assintomática, com massa anexial móvel, indolor, **sólido-cística** contendo **áreas hiperecogênicas com sombra acústica posterior (calcificações/dentes/ossos —…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico ultrassonográfico do teratoma cístico maduro (cisto dermoide) de ovário.",
      "raciocinioChave": "Massa anexial móvel e assintomática em mulher jovem, sólido-cística à ultrassonografia, com áreas hiperecogênicas produtoras de sombra acústica posterior (calcificações/nódulo de Rokitansky) e Doppler normal, é típica de cisto dermoide.",
      "armadilhaBanca": "Suspeitar de neoplasia maligna pelo aspecto sólido-cístico ou confundir calcificações com sombra acústica com o padrão em vidro fosco do endometrioma."
    },
    "mapaDistratores": {
      "A": "O cistoadenoma mucinoso costuma ser volumoso, multilocular e de paredes finas, sem calcificações típicas geradoras de sombra acústica.",
      "B": "O cistoadenocarcinoma seroso ocorre mais na pós-menopausa e exibe projeções papilares vascularizadas ao Doppler e ascite.",
      "C": "O endometrioma apresenta conteúdo cístico homogêneo em vidro fosco, sem calcificações com sombra acústica, e associa-se a dismenorreia ou dispareunia.",
      "D": "Cistos tecaluteínicos são tipicamente bilaterais, multiloculares e secundários a níveis elevados de beta-hCG, como na doença trofoblástica gestacional."
    }
  },
  {
    "id": "q-uepa-2022-079",
    "code": "Q-UEPA22-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "hpv",
      "oncoproteinas-e6-e7",
      "carcinogenese-cervical"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A infecção persistente de subtipos oncogênicos do Papilomavirus Humano (HPV) é a grande responsável pelo Câncer de Colo de Útero. Conhecer o genoma viral, o ciclo de vida do HPV, as regiões reguladoras e as oncoproteínas são fundamentais para entender porque umas pessoas desenvolvem o câncer e outras, não. Baseado no exposto, assinale a alternativa que contem as duas oncoproteínas presentes na molécula do HPV responsáveis pela processo de carcinogênese do colo uterino.",
    "alternativas": [
      {
        "letter": "A",
        "text": "E1 e E2",
        "explanation": "Incorreta: E1 e E2 regulam a replicação viral e a transcrição gênica (E2 inclusive *reprime* a expressão de E6 e E7).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "L1 e L2",
        "explanation": "Incorreta: L1 e L2 são proteínas estruturais tardias (*Late*) do **capsídeo viral** (L1 é o antígeno usado nas vacinas contra HPV).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "E2 e E4",
        "explanation": "Incorreta: E2 é reguladora/repressora e E4 participa da maturação/liberação viral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "L1 e E1",
        "explanation": "Incorreta: L1 é proteína do capsídeo e E1 é helicase de replicação viral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "E6 e E7",
        "explanation": "A alternativa **E** está correta. Na carcinogênese cervical induzida por **HPV de alto risco** (especialmente tipos 16 e 18) (**FEBRASGO / Robbins Patologia**), a integração do DNA viral ao genoma hospedeiro rompe o gene repressor E2, resultando na superexpressão das **duas oncoproteínas virais principais**: - **E6:** promove a degradação da proteína supressora tumoral **p53** (inibindo apoptose e reparo do DNA). - **E7:** liga-se e inativa a proteína do retinoblastoma (**pRb**), liberando E2F e promovendo proliferação celular descontrolada.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Na carcinogênese cervical induzida por **HPV de alto risco** (especialmente tipos 16 e 18) (**FEBRASGO / Robbins Patologia**), a integração do DNA viral ao genoma hospedeiro rompe o gene repressor E2, resultando na superexpressão das **duas oncoproteínas virais principais**:\n- **E6:** promove a degradação da proteína supressora tumoral **p53** (inibindo apoptose e reparo do DNA).\n- **E7:** liga-se e inativa a proteína do retinoblastoma (**pRb**), liberando E2F e promovendo proliferação celular descontrolada.\n- **A) Incorreta:** E1 e E2 regulam a replicação viral e a transcrição gênica (E2 inclusive *reprime* a expressão de E6 e E7).\n- **B) Incorreta:** L1 e L2 são proteínas estruturais tardias (*Late*) do **capsídeo viral** (L1 é o antígeno usado nas vacinas contra HPV).\n- **C) Incorreta:** E2 é reguladora/repressora e E4 participa da maturação/liberação viral.\n- **D) Incorreta:** L1 é proteína do capsídeo e E1 é helicase de replicação viral.",
    "perolaClinica": "A alternativa **E** está correta. Na carcinogênese cervical induzida por **HPV de alto risco** (especialmente tipos 16 e 18) (**FEBRASGO / Robbins Patologia**), a integração do DNA viral ao genoma hospedeiro rompe o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Oncoproteínas do HPV envolvidas na carcinogênese do câncer do colo uterino.",
      "raciocinioChave": "A integração do HPV de alto risco rompe o gene repressor E2 e leva à superexpressão das oncoproteínas E6 e E7, que degradam p53 e inativam pRb, respectivamente, promovendo imortalização e transformação celular.",
      "armadilhaBanca": "Trocar as oncoproteínas E6 e E7 (carcinogênese) pelas proteínas estruturais do capsídeo (L1/L2) ou reguladoras (E1/E2)."
    },
    "mapaDistratores": {
      "A": "E1 e E2 atuam na replicação viral e regulação transcricional, sendo que E2 inclusive reprime a expressão das oncoproteínas E6 e E7.",
      "B": "L1 e L2 são proteínas estruturais tardias do capsídeo viral (sendo L1 utilizada nas vacinas contra o HPV), sem ação oncogênica direta.",
      "C": "E2 é reguladora/repressora da transcrição e E4 participa da maturação e liberação viral, não sendo as oncoproteínas transformantes.",
      "D": "L1 compõe o capsídeo viral e E1 funciona como helicase de replicação do DNA viral, não inativando supressores tumorais."
    }
  },
  {
    "id": "q-uepa-2022-080",
    "code": "Q-UEPA22-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "insuficiencia-ovariana-prematura",
      "fsh",
      "febrasgo",
      "amenorreia-secundaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Feminino, 32 anos, nuligesta, foi diagnosticada há 6 meses com Insuficiência Ovariana Prematura (IOP). Ela é caracterizada pela perda da função ovariana antes dos 40 anos e pode impactar, negativamente, no planejamento familiar do casal. Reconhecer o quadro clínico e realizar o diagnóstico precocemente permitem intervenção e tratamento precoces. Segundo as recomendações atuais da Febrasgo (Federação Brasileira de Ginecologia e Obstetrícia 2020.2), o diagnóstico de IOP pode ser firmado através de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "2 dosagens de FSH > 25mUI/ml, com intervalo entre as coletas de pelo menos 4 semanas.",
        "explanation": "A alternativa **A** está correta. Conforme as recomendações da **FEBRASGO (Protocolo de Insuficiência Ovariana Prematura, 2020)** e da **ESHRE**, o diagnóstico de **Insuficiência Ovariana Prematura (IOP)** em mulheres com **menos de 40 anos** baseia-se em oligo/amenorreia por ≥ 4 meses associada a **duas dosagens de FSH > 25 mUI/mL**, obtidas com **intervalo mínimo de 4 semanas entre as coletas**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "3 Coletas seriadas de FSH, com intervalos de 0, 3 e 7 dias. A presença de 2 valores de FSH>25mUI/ml confirmam o diagnóstico.",
        "explanation": "Incorreta: Não se utiliza protocolo de 3 coletas em 0, 3 e 7 dias; o intervalo mínimo preconizado entre as 2 dosagens é de **4 semanas**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "2 dosagens de FSH < 25mUI/ml, com intervalo entre as coletas de pelo menos 4 semanas.",
        "explanation": "Incorreta: Na IOP (hipogonadismo hipergonadotrófico), o FSH encontra-se **elevado (> 25 mUI/mL)**, não reduzido.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "3 Coletas seriadas de FSH, com intervalos de 0, 3 e 7 dias. A presença de 2 valores de FSH<15mUI/ml confirmam o diagnóstico.",
        "explanation": "Incorreta: FSH < 15 mUI/mL não indica falência ovariana, e o protocolo de coletas está incorreto.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "3 Coletas seriadas de FSH<15mUI/ml, com intervalos de 0, 3 e 7 dias, confirmam o diagnóstico.",
        "explanation": "Incorreta: Valores baixos de FSH (< 15 mUI/mL) descartam IOP hipergonadotrófica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Conforme as recomendações da **FEBRASGO (Protocolo de Insuficiência Ovariana Prematura, 2020)** e da **ESHRE**, o diagnóstico de **Insuficiência Ovariana Prematura (IOP)** em mulheres com **menos de 40 anos** baseia-se em oligo/amenorreia por ≥ 4 meses associada a **duas dosagens de FSH > 25 mUI/mL**, obtidas com **intervalo mínimo de 4 semanas entre as coletas**.\n- **B) Incorreta:** Não se utiliza protocolo de 3 coletas em 0, 3 e 7 dias; o intervalo mínimo preconizado entre as 2 dosagens é de **4 semanas**.\n- **C) Incorreta:** Na IOP (hipogonadismo hipergonadotrófico), o FSH encontra-se **elevado (> 25 mUI/mL)**, não reduzido.\n- **D) Incorreta:** FSH < 15 mUI/mL não indica falência ovariana, e o protocolo de coletas está incorreto.\n- **E) Incorreta:** Valores baixos de FSH (< 15 mUI/mL) descartam IOP hipergonadotrófica.",
    "perolaClinica": "A alternativa **A** está correta. Conforme as recomendações da **FEBRASGO (Protocolo de Insuficiência Ovariana Prematura, 2020)** e da **ESHRE**, o diagnóstico de **Insuficiência Ovariana Prematura (IOP)** em mulheres…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critérios diagnósticos laboratoriais da insuficiência ovariana prematura (IOP) segundo a FEBRASGO.",
      "raciocinioChave": "Em mulheres abaixo de 40 anos com oligo/amenorreia há pelo menos 4 meses, o diagnóstico de IOP é firmado por duas dosagens de FSH > 25 mUI/mL coletadas com intervalo mínimo de 4 semanas.",
      "armadilhaBanca": "Confundir o ponto de corte do FSH (> 25 mUI/mL), o intervalo mínimo entre coletas (4 semanas) ou inventar protocolo de 3 coletas em 7 dias."
    },
    "mapaDistratores": {
      "B": "Não se utilizam três coletas seriadas em 0, 3 e 7 dias; são necessárias duas dosagens separadas por pelo menos 4 semanas.",
      "C": "Na insuficiência ovariana prematura há hipogonadismo hipergonadotrófico, portanto o FSH está elevado (> 25 mUI/mL), não reduzido.",
      "D": "Valores de FSH abaixo de 15 mUI/mL não configuram falência ovariana e o esquema de coletas em 0, 3 e 7 dias é incorreto.",
      "E": "Dosagens seriadas de FSH < 15 mUI/mL afastam IOP hipergonadotrófica e utilizam periodicidade inadequada."
    }
  },
  {
    "id": "q-uepa-2022-081",
    "code": "Q-UEPA22-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Parasitoses Intestinais",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-parasitoses-intestinais",
    "tags": [
      "giardiase",
      "giardia-lamblia",
      "secnidazol",
      "diarreia-gordurosa"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Jose Pedro, 2 anos de idade, é levado ao posto de saúde de seu bairro por sua mãe devido quadro de diarreia de grande volume, com aspecto gorduroso e restos alimentares, associada a distensão abdominal e flatulência há 5 dias. Mãe nega sangue ou muco nas fezes. Diante desse quadro, assinale abaixo o agente parasitário que poderia estar causando tais sintomas no paciente, e seu respectivo tratamento são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ascaris lumbricoides/ Albendazol dose única",
        "explanation": "Incorreta: *Ascaris lumbricoides* raramente causa diarreia esteatorreica disabsortiva típica (mais associada a dor abdominal, eliminação de vermes ou obstrução intestinal).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Entamoeba histolytica/ Albendazol por 5 dias",
        "explanation": "Incorreta: *Entamoeba histolytica* causa classicamente **disenteria** (fezes com muco e sangue), e seu tratamento é com metronidazol/secnidazol (não albendazol).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Giardia lamblia/ Secnidazol",
        "explanation": "A alternativa **C** está correta. O quadro de **diarreia volumosa, esteatorreica (aspecto gorduroso), com restos alimentares, distensão abdominal e flatulência**, sem sangue ou muco, é a apresentação clássica de **giardíase (*Giardia lamblia*)** (por atrofia vilositária e má absorção duodenal). Segundo a **SBP** e o **Ministério da Saúde**, o tratamento de escolha faz-se com nitroimidazólicos — **metronidazol** (5–7 dias), **tinidazol** (dose única) ou **secnidazol** (dose única) — ou nitazoxanida (3 dias) ou albendazol por **5 dias**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Giardia lamblia/ Albendazol por 3 dias",
        "explanation": "Incorreta: O esquema de albendazol para *Giardia lamblia* exige **5 dias** (400 mg/dia em ≥ 2 anos), não 3 dias.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Trichuris trichiura/ Albendazol por 3-7 dias",
        "explanation": "Incorreta: *Trichuris trichiura* causa disenteria crônica e prolapso retal em infestações maciças, não diarreia gordurosa aguda.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. O quadro de **diarreia volumosa, esteatorreica (aspecto gorduroso), com restos alimentares, distensão abdominal e flatulência**, sem sangue ou muco, é a apresentação clássica de **giardíase (*Giardia lamblia*)** (por atrofia vilositária e má absorção duodenal). Segundo a **SBP** e o **Ministério da Saúde**, o tratamento de escolha faz-se com nitroimidazólicos — **metronidazol** (5–7 dias), **tinidazol** (dose única) ou **secnidazol** (dose única) — ou nitazoxanida (3 dias) ou albendazol por **5 dias**.\n- **A) Incorreta:** *Ascaris lumbricoides* raramente causa diarreia esteatorreica disabsortiva típica (mais associada a dor abdominal, eliminação de vermes ou obstrução intestinal).\n- **B) Incorreta:** *Entamoeba histolytica* causa classicamente **disenteria** (fezes com muco e sangue), e seu tratamento é com metronidazol/secnidazol (não albendazol).\n- **D) Incorreta:** O esquema de albendazol para *Giardia lamblia* exige **5 dias** (400 mg/dia em ≥ 2 anos), não 3 dias.\n- **E) Incorreta:** *Trichuris trichiura* causa disenteria crônica e prolapso retal em infestações maciças, não diarreia gordurosa aguda.",
    "perolaClinica": "A alternativa **C** está correta. O quadro de **diarreia volumosa, esteatorreica (aspecto gorduroso), com restos alimentares, distensão abdominal e flatulência**, sem sangue ou muco, é a apresentação clássica de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico etiológico e esquema terapêutico adequado da giardíase na infância.",
      "raciocinioChave": "Diarreia volumosa, gordurosa (esteatorreica), com restos alimentares, distensão abdominal e flatulência, sem sangue ou muco, caracteriza giardíase (Giardia lamblia), cujo tratamento pode ser feito com secnidazol em dose única.",
      "armadilhaBanca": "Saber que Giardia lamblia é o agente da diarreia esteatorreica, mas errar a duração do esquema alternativo com albendazol (3 dias em vez de 5 dias)."
    },
    "mapaDistratores": {
      "A": "Ascaris lumbricoides não produz tipicamente síndrome disabsortiva com diarreia esteatorreica e restos alimentares.",
      "B": "Entamoeba histolytica causa disenteria com muco e sangue e é tratada com derivados nitroimidazólicos, não com albendazol.",
      "D": "Embora o agente esteja correto, o tratamento da giardíase com albendazol exige 5 dias de administração, e não apenas 3 dias.",
      "E": "Trichuris trichiura associa-se a disenteria crônica e prolapso retal em infecções maciças, não a diarreia gordurosa aguda."
    }
  },
  {
    "id": "q-uepa-2022-082",
    "code": "Q-UEPA22-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "ITU e Malformações Urinárias em Pediatria",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-itu-e-malformacoes-urinarias-em-pediatria",
    "tags": [
      "itu-pediatrica",
      "puncao-suprapubica",
      "urocultura",
      "lactente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 6 meses de idade é levado ao pronto atendimento por apresentar febre moderada e diminuição do apetite há 3 dias, sem outras queixas. O exame físico é normal e o pediatra solicitou exames laboratoriais, dentre eles um exame de análise de urina e uma urocultura. Nesse contexto, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "caso a análise de urina demonstre nitrito positivo, o diagnóstico de infecção do trato urinário estará definido.",
        "explanation": "Incorreta: O exame de urina tipo I (EAS) apenas sugere o diagnóstico e orienta tratamento empírico inicial; a confirmação definitiva exige **urocultura**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a coleta da urina deve ser realizada com saco coletor, o qual deve ser trocado a cada 20 minutos para manter sua alta especificidade.",
        "explanation": "Incorreta: O **saco coletor** possui **alta taxa de falso-positivos (baixa especificidade)** por contaminação perineal; serve apenas para *excluir* ITU quando negativo, nunca para confirmar.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a sondagem vesical é um método invasivo que não deve ser realizado de rotina pelo alto risco de ascensão do agente bacteriano.",
        "explanation": "Incorreta: A **sondagem vesical de alívio** é justamente o método invasivo mais utilizado na prática pediátrica para coleta confiável de urocultura em lactentes.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a urocultura, quando coletada por punção suprapúbica, confirma o diagnóstico de infecção do trato urinário se houver crescimento de qualquer patógeno.",
        "explanation": "A alternativa **D** está correta. Conforme as diretrizes da **SBP (Departamento Científico de Nefrologia)** e **AAP**, em lactentes sem controle esfincteriano a **urocultura** é o padrão-ouro para confirmar ITU, devendo ser obtida por **cateterismo vesical** (≥ 50.000 UFC/mL) ou **punção suprapúbica (PSP)** — na qual o **crescimento de qualquer número de colônias de uropatógenos Gram-negativos** (ou > 1.000 UFC/mL de Gram-positivos) **confirma o diagnóstico de ITU**, por ser método estéril sem contaminação periuretral.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "caso a análise de urina demonstre nitrito positivo e leucocitúria, o diagnóstico de infecção do trato urinário estará definido.",
        "explanation": "Incorreta: Nitrito positivo + leucocitúria no EAS tornam o diagnóstico altamente provável (justificando início de antibiótico), mas a **definição diagnóstica** requer **urocultura positiva**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Conforme as diretrizes da **SBP (Departamento Científico de Nefrologia)** e **AAP**, em lactentes sem controle esfincteriano a **urocultura** é o padrão-ouro para confirmar ITU, devendo ser obtida por **cateterismo vesical** (≥ 50.000 UFC/mL) ou **punção suprapúbica (PSP)** — na qual o **crescimento de qualquer número de colônias de uropatógenos Gram-negativos** (ou > 1.000 UFC/mL de Gram-positivos) **confirma o diagnóstico de ITU**, por ser método estéril sem contaminação periuretral.\n- **A) Incorreta:** O exame de urina tipo I (EAS) apenas sugere o diagnóstico e orienta tratamento empírico inicial; a confirmação definitiva exige **urocultura**.\n- **B) Incorreta:** O **saco coletor** possui **alta taxa de falso-positivos (baixa especificidade)** por contaminação perineal; serve apenas para *excluir* ITU quando negativo, nunca para confirmar.\n- **C) Incorreta:** A **sondagem vesical de alívio** é justamente o método invasivo mais utilizado na prática pediátrica para coleta confiável de urocultura em lactentes.\n- **E) Incorreta:** Nitrito positivo + leucocitúria no EAS tornam o diagnóstico altamente provável (justificando início de antibiótico), mas a **definição diagnóstica** requer **urocultura positiva**.",
    "perolaClinica": "A alternativa **D** está correta. Conforme as diretrizes da **SBP (Departamento Científico de Nefrologia)** e **AAP**, em lactentes sem controle esfincteriano a **urocultura** é o padrão-ouro para confirmar ITU,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Método de coleta e critério de confirmação diagnóstica da infecção urinária em lactentes.",
      "raciocinioChave": "Em lactentes sem controle esfincteriano, a confirmação de ITU requer urocultura obtida por método estéril (cateterismo vesical ou punção suprapúbica), sendo que na punção suprapúbica o crescimento de qualquer patógeno gram-negativo confirma o diagnóstico.",
      "armadilhaBanca": "Confundir triagem sugestiva no EAS (nitrito e leucocitúria) ou coleta por saco coletor com confirmação diagnóstica definitiva de ITU em lactentes."
    },
    "mapaDistratores": {
      "A": "O nitrito positivo no exame de urina tipo I sugere ITU, mas não substitui a urocultura para definição diagnóstica.",
      "B": "O saco coletor apresenta elevada taxa de falso-positivos por contaminação perineal, servindo apenas para afastar ITU quando negativo.",
      "C": "A sondagem vesical de alívio é método seguro e amplamente recomendado na pediatria para obtenção de urocultura confiável em lactentes.",
      "E": "A presença conjunta de nitrito positivo e leucocitúria no EAS indica alta probabilidade e autoriza terapia empírica, mas exige urocultura para confirmação."
    }
  },
  {
    "id": "q-uepa-2022-083",
    "code": "Q-UEPA22-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Obesidade Infantil e Desnutrição Grave",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-obesidade-infantil-e-desnutricao-grave",
    "tags": [
      "desnutricao-grave",
      "hipoglicemia",
      "fase-de-estabilizacao",
      "oms"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 5 anos de idade, pesando 8 kg e com estatura de 100 cm (ambos com Z escore <-3), foi admitida em um hospital pediátrico para tratamento da desnutrição grave de causa primária. Ao exame físico, criança emagrecida, com edema em pés, hipoativa, com cabelos finos e quebradiços, eupneica e hipotérmica. Nesse contexto, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve ser iniciada dieta hiperproteica e hipercalórica devido quadro de desnutrição grave desde a fase de estabilização.",
        "explanation": "Incorreta: Na fase de estabilização inicia-se dieta **hipocalórica/normoproteica cautelosa** (fórmula F-75: 80–100 kcal/kg/dia) para evitar **síndrome de realimentação**; dieta hipercalórica/hiperproteica (F-100) só entra na fase de reabilitação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "caso a glicemia capilar esteja abaixo de 54 mg/dL o paciente deve receber tratamento para hipoglicemia.",
        "explanation": "A alternativa **B** está correta. De acordo com os **10 Passos para o Manejo da Desnutrição Grave (OMS / Ministério da Saúde / SBP)**, o 1º passo na fase de estabilização é tratar e prevenir a **hipoglicemia**, definida na criança gravemente desnutrida como **glicemia < 54 mg/dL (< 3 mmol/L)** (devendo receber imediatamente 50 mL de solução glicosada a 10% VO/SNG se consciente, ou 5 mL/kg de glicose a 10% EV se letárgica/inconsciente/convulsionando).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "devem ser solicitados exames para triagem infecciosa e, caso seja confirmada infecção, iniciar antibioticoterapia.",
        "explanation": "Incorreta: Toda criança com desnutrição grave internada deve receber **antibioticoterapia empírica de rotina** desde a admissão (pois sinais de infecção podem estar ausentes), sem aguardar confirmação laboratorial.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a suplementação de vitaminas, sais minerais e ferro fazem parte do tratamento desde a fase de estabilização.",
        "explanation": "Incorreta: O **ferro é contraindicado na fase de estabilização** (favorece crescimento bacteriano e estresse oxidativo), sendo iniciado apenas na **fase de reabilitação** (após retorno do apetite e ganho de peso).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "em caso de diarreia com desidratação grave, o paciente deve receber expansão volêmica com 20 ml/kg de solução glicofisiológica.",
        "explanation": "Incorreta: Na desnutrição grave, evita-se expansão venosa rotineira (risco de sobrecarga hídrica e IC), preferindo-se **ReSoMal** via oral/SNG; fluidos EV (15 mL/kg em 1 hora) reservam-se estritamente ao **choque hipovolêmico/séptico**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com os **10 Passos para o Manejo da Desnutrição Grave (OMS / Ministério da Saúde / SBP)**, o 1º passo na fase de estabilização é tratar e prevenir a **hipoglicemia**, definida na criança gravemente desnutrida como **glicemia < 54 mg/dL (< 3 mmol/L)** (devendo receber imediatamente 50 mL de solução glicosada a 10% VO/SNG se consciente, ou 5 mL/kg de glicose a 10% EV se letárgica/inconsciente/convulsionando).\n- **A) Incorreta:** Na fase de estabilização inicia-se dieta **hipocalórica/normoproteica cautelosa** (fórmula F-75: 80–100 kcal/kg/dia) para evitar **síndrome de realimentação**; dieta hipercalórica/hiperproteica (F-100) só entra na fase de reabilitação.\n- **C) Incorreta:** Toda criança com desnutrição grave internada deve receber **antibioticoterapia empírica de rotina** desde a admissão (pois sinais de infecção podem estar ausentes), sem aguardar confirmação laboratorial.\n- **D) Incorreta:** O **ferro é contraindicado na fase de estabilização** (favorece crescimento bacteriano e estresse oxidativo), sendo iniciado apenas na **fase de reabilitação** (após retorno do apetite e ganho de peso).\n- **E) Incorreta:** Na desnutrição grave, evita-se expansão venosa rotineira (risco de sobrecarga hídrica e IC), preferindo-se **ReSoMal** via oral/SNG; fluidos EV (15 mL/kg em 1 hora) reservam-se estritamente ao **choque hipovolêmico/séptico**.",
    "perolaClinica": "A alternativa **B** está correta. De acordo com os **10 Passos para o Manejo da Desnutrição Grave (OMS / Ministério da Saúde / SBP)**, o 1º passo na fase de estabilização é tratar e prevenir a **hipoglicemia**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo inicial na fase de estabilização da desnutrição grave infantil segundo os 10 passos da OMS.",
      "raciocinioChave": "Na desnutrição grave, o primeiro passo imediato da estabilização é identificar e tratar a hipoglicemia, definida nessa população pelo limiar específico de glicemia capilar abaixo de 54 mg/dL.",
      "armadilhaBanca": "Iniciar dieta hipercalórica/hiperproteica, ferro ou expansão volêmica venosa rotineira já na fase de estabilização do desnutrido grave."
    },
    "mapaDistratores": {
      "A": "Na fase de estabilização usa-se fórmula hipocalórica/normoproteica cautelosa (F-75) para prevenir síndrome de realimentação; dieta hipercalórica (F-100) entra apenas na reabilitação.",
      "C": "Toda criança com desnutrição grave internada deve receber antibioticoterapia empírica de rotina na admissão, independentemente de confirmação laboratorial.",
      "D": "A suplementação de ferro é contraindicada na fase de estabilização por favorecer infecção e estresse oxidativo, sendo iniciada somente na reabilitação.",
      "E": "Evita-se expansão venosa rotineira na desnutrição grave pelo risco de insuficiência cardíaca, reservando fluidos EV apenas ao choque e preferindo ReSoMal oral/SNG."
    }
  },
  {
    "id": "q-uepa-2022-084",
    "code": "Q-UEPA22-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Diarreia Aguda e Desidratação",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-diarreia-aguda-e-desidratacao",
    "tags": [
      "desidratacao-grave",
      "plano-c",
      "reidratacao-venosa",
      "diarreia-aguda"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 3 anos de idade, previamente hígido, é atendido na UPA com queixa de diarreia aquosa, de grande volume, com várias evacuações ao dia há 2 dias. Hoje a mãe notou a criança mais hipoativa e com a diurese diminuída. Na avaliação clínica foram observados olhos fundos, mucosas ressecadas, choro sem lágrima e pulsos muito fracos. Mãe informa que o peso na semana anterior era de 12 kg. Com base no caso exposto, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve ser iniciado plano C de reidratação, com 240 ml de solução fisiológica 0,9% via endovenosa em 30 minutos.",
        "explanation": "A alternativa **A** está correta conforme o gabarito oficial definitivo da UEPA 2022. Criança de 3 anos (12 kg) com diarreia aguda apresentando **hipoatividade, olhos fundos, mucosas ressecadas, ausência de lágrimas e pulsos muito fracos** classifica-se como **desidratação grave (Plano C)**. Segundo o **Manual de Manejo do Paciente com Diarreia do Ministério da Saúde (versão vigente até 2022)** para crianças menores de 5 anos em Plano C (fase rápida): administra-se **SF 0,9% 20 mL/kg em 30 minutos** — para 12 kg: **20 × 12 = 240 mL de SF 0,9% EV em 30 minutos**, repetindo-se até melhora dos sinais de choque/desidratação (nota: a atualização do MS de 2023 passou a adotar o esquema da OMS de 30 mL/kg em 30 min + 70 mL/kg em 2h30 para 1–5 anos, mas à época da prova em janeiro de 2022 o protocolo oficial do MS era 20 mL/kg em 30 min).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Há sinais de desidratação, devendo ser iniciado tratamento com soro de reidratação oral por gavagem, 1200 ml em 4-6 horas.",
        "explanation": "Incorreta: Sinais de desidratação grave (pulsos muito fracos, hipoatividade) exigem **Plano C (via endovenosa)**, não Plano B (SRO por gavagem).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Após reestabelecimento da volemia do paciente, pode ser reiniciada a dieta via oral e seguir o plano A para prevenir nova desidratação.",
        "explanation": "Incorreta: Após estabilização inicial da fase rápida, avalia-se transição para TRO (Plano B) ou manutenção/reposição antes da alta em Plano A.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Deve ser iniciada a expansão volêmica com 360 ml de solução fisiológica a 0,9% em 30 minutos seguida de 840 ml ringer lactato em 2 horas e meia.",
        "explanation": "Incorreta: Embora 30 mL/kg (360 mL) + 70 mL/kg (840 mL) corresponda ao esquema da OMS para 1–5 anos, o protocolo oficial do MS vigente em janeiro de 2022 (e adotado pela banca) preconizava SF 0,9% 20 mL/kg em 30 min (e não misturar SF 0,9% com RL na mesma fase sem indicação).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A solução de manutenção deve ser instalada após o desaparecimento dos sinais de desidratação, com 1.100 ml de Soro glicosado a 10% e 22 ml de KCl a 10%.",
        "explanation": "Incorreta: Na fase de manutenção/reposição (regra de Holliday-Segar para 12 kg = 1.100 mL), utiliza-se soro glicosado a **5%** (com NaCl 20% + KCl 10% na proporção 4:1 ou isotônica), e não SG 10% isolado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta conforme o gabarito oficial definitivo da UEPA 2022. Criança de 3 anos (12 kg) com diarreia aguda apresentando **hipoatividade, olhos fundos, mucosas ressecadas, ausência de lágrimas e pulsos muito fracos** classifica-se como **desidratação grave (Plano C)**. Segundo o **Manual de Manejo do Paciente com Diarreia do Ministério da Saúde (versão vigente até 2022)** para crianças menores de 5 anos em Plano C (fase rápida): administra-se **SF 0,9% 20 mL/kg em 30 minutos** — para 12 kg: **20 × 12 = 240 mL de SF 0,9% EV em 30 minutos**, repetindo-se até melhora dos sinais de choque/desidratação (nota: a atualização do MS de 2023 passou a adotar o esquema da OMS de 30 mL/kg em 30 min + 70 mL/kg em 2h30 para 1–5 anos, mas à época da prova em janeiro de 2022 o protocolo oficial do MS era 20 mL/kg em 30 min).\n- **B) Incorreta:** Sinais de desidratação grave (pulsos muito fracos, hipoatividade) exigem **Plano C (via endovenosa)**, não Plano B (SRO por gavagem).\n- **C) Incorreta:** Após estabilização inicial da fase rápida, avalia-se transição para TRO (Plano B) ou manutenção/reposição antes da alta em Plano A.\n- **D) Incorreta:** Embora 30 mL/kg (360 mL) + 70 mL/kg (840 mL) corresponda ao esquema da OMS para 1–5 anos, o protocolo oficial do MS vigente em janeiro de 2022 (e adotado pela banca) preconizava SF 0,9% 20 mL/kg em 30 min (e não misturar SF 0,9% com RL na mesma fase sem indicação).\n- **E) Incorreta:** Na fase de manutenção/reposição (regra de Holliday-Segar para 12 kg = 1.100 mL), utiliza-se soro glicosado a **5%** (com NaCl 20% + KCl 10% na proporção 4:1 ou isotônica), e não SG 10% isolado.",
    "perolaClinica": "A alternativa **A** está correta conforme o gabarito oficial definitivo da UEPA 2022. Criança de 3 anos (12 kg) com diarreia aguda apresentando **hipoatividade, olhos fundos, mucosas ressecadas, ausência de lágrimas e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Classificação da desidratação grave e fase rápida do Plano C em menores de 5 anos.",
      "raciocinioChave": "Criança de 3 anos (12 kg) com hipoatividade, olhos fundos, ausência de lágrimas e pulsos muito fracos apresenta desidratação grave (Plano C), indicando expansão endovenosa imediata na fase rápida com SF 0,9% 20 mL/kg (240 mL) em 30 minutos pelo protocolo vigente do Ministério da Saúde à época.",
      "armadilhaBanca": "Optar pelo Plano B em criança com sinais claros de choque/desidratação grave ou confundir volumes entre o protocolo do MS vigente e o da OMS."
    },
    "mapaDistratores": {
      "B": "A presença de hipoatividade e pulsos muito fracos configura desidratação grave, exigindo Plano C endovenoso e contraindicando o Plano B por gavagem.",
      "C": "Após a fase rápida venosa, a criança ainda necessita de reavaliação e fase de manutenção/reposição ou transição supervisionada antes de passar ao Plano A.",
      "D": "A combinação sequencial de 30 mL/kg de SF 0,9% com 70 mL/kg de Ringer Lactato diverge do protocolo do Ministério da Saúde adotado pela banca (20 mL/kg de SF 0,9% em 30 min repetíveis).",
      "E": "Na fase de manutenção por Holliday-Segar utiliza-se soro glicosado a 5% associado a eletrólitos adequados, e não soro glicosado a 10% isolado com KCl."
    }
  },
  {
    "id": "q-uepa-2022-085",
    "code": "Q-UEPA22-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Alimentação Complementar e Carências Nutricionais",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-alimentacao-complementar-e-carencias-nutricionais",
    "tags": [
      "profilaxia-de-ferro",
      "anemia-ferropriva",
      "lactente",
      "sbp"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém nascido a termo, com peso de 3.500 g ao nascimento, nasceu de parto cesáreo devido trabalho de parto prolongado, com APGAR 7/9 e clampeamento imediato de cordão, em aleitamento materno exclusivo, é atendido em sua primeira consulta com o médico do posto de saúde, que deve tomar a seguinte conduta:",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar profilaxia da anemia ferropriva aos 180 dias de vida com 1 mg/kg/dia de ferro elementar até os dois anos de idade.",
        "explanation": "Incorreta: O início aos 180 dias (6 meses) na SBP 2021 aplica-se apenas a RN a termo ≥ 2.500 g **sem fatores de risco** (o clampeamento imediato do cordão é fator de risco clássico).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "orientar manter aleitamento materno exclusivo até o sexto mês de vida, não havendo assim a necessidade de suplementação de ferro ou vitaminas.",
        "explanation": "Incorreta: Mesmo em aleitamento materno exclusivo, há indicação de profilaxia com vitamina D (desde a 1ª semana) e ferro profilático.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "iniciar profilaxia da anemia ferropriva aos 90 dias de vida com 1 mg/kg/dia de ferro elementar até os dois anos de idade.",
        "explanation": "A alternativa **C** está correta. De acordo com o **Consenso sobre Anemia Ferropriva da Sociedade Brasileira de Pediatria (SBP, 2018 e atualização 2021)**, para recém-nascidos a termo com peso adequado para a idade gestacional (≥ 2.500 g) que apresentem **fatores de risco para deficiência de ferro** — como o **clampeamento imediato do cordão umbilical** (e parto cesáreo) — deve-se iniciar a **suplementação profilática aos 90 dias (3 meses) de vida**, na dose de **1 mg/kg/dia de ferro elementar**, mantendo-se até os **24 meses (2 anos) de idade** (na diretriz SBP 2018, a recomendação já era universal aos 3 meses; na atualização de 2021, passou a ser aos 6 meses se sem fatores de risco e **mantida aos 3 meses se houver fator de risco**, como clampeamento precoce).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "iniciar profilaxia da anemia ferropriva aos 90 dias de vida com 3 mg/kg/dia de ferro elementar até os dois anos de idade.",
        "explanation": "Incorreta: A dose de 3 mg/kg/dia é usada para prematuros/RN com peso de nascimento entre **1.000 e 1.500 g** (ou tratamento de anemia instalada, 3–5 mg/kg/dia), não profilaxia de RN a termo de 3.500 g.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "iniciar profilaxia da anemia ferropriva aos 180 dias de vida com 4 mg/kg/dia de ferro elementar até os dois anos de idade.",
        "explanation": "Incorreta: A dose de 4 mg/kg/dia aplica-se a prematuros extremos (< 1.000 g) aos 30 dias de vida, não a RN a termo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o **Consenso sobre Anemia Ferropriva da Sociedade Brasileira de Pediatria (SBP, 2018 e atualização 2021)**, para recém-nascidos a termo com peso adequado para a idade gestacional (≥ 2.500 g) que apresentem **fatores de risco para deficiência de ferro** — como o **clampeamento imediato do cordão umbilical** (e parto cesáreo) — deve-se iniciar a **suplementação profilática aos 90 dias (3 meses) de vida**, na dose de **1 mg/kg/dia de ferro elementar**, mantendo-se até os **24 meses (2 anos) de idade** (na diretriz SBP 2018, a recomendação já era universal aos 3 meses; na atualização de 2021, passou a ser aos 6 meses se sem fatores de risco e **mantida aos 3 meses se houver fator de risco**, como clampeamento precoce).\n- **A) Incorreta:** O início aos 180 dias (6 meses) na SBP 2021 aplica-se apenas a RN a termo ≥ 2.500 g **sem fatores de risco** (o clampeamento imediato do cordão é fator de risco clássico).\n- **B) Incorreta:** Mesmo em aleitamento materno exclusivo, há indicação de profilaxia com vitamina D (desde a 1ª semana) e ferro profilático.\n- **D) Incorreta:** A dose de 3 mg/kg/dia é usada para prematuros/RN com peso de nascimento entre **1.000 e 1.500 g** (ou tratamento de anemia instalada, 3–5 mg/kg/dia), não profilaxia de RN a termo de 3.500 g.\n- **E) Incorreta:** A dose de 4 mg/kg/dia aplica-se a prematuros extremos (< 1.000 g) aos 30 dias de vida, não a RN a termo.",
    "perolaClinica": "A alternativa **C** está correta. De acordo com o **Consenso sobre Anemia Ferropriva da Sociedade Brasileira de Pediatria (SBP, 2018 e atualização 2021)**, para recém-nascidos a termo com peso adequado para a idade…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação e início da profilaxia com ferro em recém-nascido a termo com fator de risco.",
      "raciocinioChave": "Embora o RN seja a termo e com peso adequado (3.500 g), o clampeamento imediato do cordão umbilical (e parto cesáreo) constitui fator de risco para ferropenia, indicando profilaxia segundo a SBP aos 90 dias de vida na dose de 1 mg/kg/dia de ferro elementar até os 2 anos.",
      "armadilhaBanca": "Ignorar o clampeamento imediato do cordão umbilical como fator de risco para deficiência de ferro em RN a termo ≥ 2.500 g."
    },
    "mapaDistratores": {
      "A": "O início aos 180 dias aplica-se somente a lactentes a termo ≥ 2.500 g em aleitamento materno exclusivo sem fatores de risco, o que não ocorre com clampeamento imediato do cordão.",
      "B": "O aleitamento materno exclusivo não dispensa a suplementação profilática de vitamina D desde a 1ª semana nem a profilaxia com ferro na idade recomendada.",
      "D": "A dose de 3 mg/kg/dia é indicada para recém-nascidos com peso de nascimento entre 1.000 e 1.500 g ou tratamento de anemia instalada, não para RN a termo de 3.500 g.",
      "E": "A dose de 4 mg/kg/dia destina-se a prematuros extremos (< 1.000 g) a partir de 30 dias de vida."
    }
  },
  {
    "id": "q-uepa-2022-086",
    "code": "Q-UEPA22-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "pni",
      "tetra-viral",
      "imunossuprimidos",
      "calendario-vacinal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "As vacinas compreendem um dos grandes avanços da medicina, sendo responsável pela erradicação e prevenção de doenças infectocontagiosas em todo o mundo. O Programa Nacional de Imunizações (PNI) do Brasil contempla não só crianças e adolescentes, como também adultos e idosos, sendo considerado um dos melhores do mundo. Em relação as vacinas, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "uma criança de 2 meses de idade deve ter recebido a BCG, uma dose da vacina Hepatite B e uma dose da vacina meningocócica C.",
        "explanation": "Incorreta: A 1ª dose da **meningocócica C** é aplicada aos **3 meses** de idade (não aos 2 meses).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a vacina Influenza deve ser administrada em crianças entre 6 meses e 5 anos e 11 meses de idade, exceto as portadoras de imunodeficiência.",
        "explanation": "Incorreta: A vacina **Influenza** é inativada (vírus fragmentado/inativado) e está **fortemente indicada** — não contraindicada — para pacientes com imunodeficiência.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aos 6 meses de idade a criança deve receber a primeira dose da vacina febre amarela e aos 4 anos, a dose de reforço.",
        "explanation": "Incorreta: A 1ª dose da vacina **febre amarela** no PNI é aplicada aos **9 meses** de idade (com reforço aos 4 anos), e não aos 6 meses.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a tetra viral é administrada aos 15 meses de idade, estando contraindicada para pacientes imunossuprimidos.",
        "explanation": "A alternativa **D** está correta. Segundo o **Calendário Nacional de Vacinação (PNI / Ministério da Saúde)**, a vacina **tetra viral** (sarampo, caxumba, rubéola e varicela) é administrada em dose única aos **15 meses de idade** (para crianças já vacinadas com 1 dose da tríplice viral aos 12 meses). Por ser composta exclusivamente por **vírus vivos atenuados**, é formalmente **contraindicada em pacientes gravemente imunossuprimidos**.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "a vacina BCG deve ser aplicada em recém nascidos o mais precocemente possível, desde que tenham peso acima de 1.500 g.",
        "explanation": "Incorreta: O peso mínimo para aplicação da vacina **BCG** ao nascimento é **≥ 2.000 g** (não 1.500 g).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Segundo o **Calendário Nacional de Vacinação (PNI / Ministério da Saúde)**, a vacina **tetra viral** (sarampo, caxumba, rubéola e varicela) é administrada em dose única aos **15 meses de idade** (para crianças já vacinadas com 1 dose da tríplice viral aos 12 meses). Por ser composta exclusivamente por **vírus vivos atenuados**, é formalmente **contraindicada em pacientes gravemente imunossuprimidos**.\n- **A) Incorreta:** A 1ª dose da **meningocócica C** é aplicada aos **3 meses** de idade (não aos 2 meses).\n- **B) Incorreta:** A vacina **Influenza** é inativada (vírus fragmentado/inativado) e está **fortemente indicada** — não contraindicada — para pacientes com imunodeficiência.\n- **C) Incorreta:** A 1ª dose da vacina **febre amarela** no PNI é aplicada aos **9 meses** de idade (com reforço aos 4 anos), e não aos 6 meses.\n- **E) Incorreta:** O peso mínimo para aplicação da vacina **BCG** ao nascimento é **≥ 2.000 g** (não 1.500 g).",
    "perolaClinica": "A alternativa **D** está correta. Segundo o **Calendário Nacional de Vacinação (PNI / Ministério da Saúde)**, a vacina **tetra viral** (sarampo, caxumba, rubéola e varicela) é administrada em dose única aos **15 meses…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicações, idades e contraindicações das vacinas do Calendário Nacional do PNI.",
      "raciocinioChave": "A vacina tetra viral (sarampo, caxumba, rubéola e varicela) é aplicada em dose única aos 15 meses de idade no PNI e, por conter vírus vivos atenuados, é formalmente contraindicada em pacientes gravemente imunossuprimidos.",
      "armadilhaBanca": "Confundir idades do calendário vacinal (meningocócica C aos 3 meses, febre amarela aos 9 meses) ou contraindicar vacina inativada em imunossuprimidos."
    },
    "mapaDistratores": {
      "A": "A primeira dose da vacina meningocócica C é administrada aos 3 meses de idade, não estando prevista até os 2 meses.",
      "B": "A vacina Influenza é composta por vírus inativado/fragmentado e é fortemente recomendada, e não contraindicada, para indivíduos com imunodeficiência.",
      "C": "No calendário do PNI, a primeira dose da vacina febre amarela é aplicada aos 9 meses de idade (com reforço aos 4 anos), e não aos 6 meses.",
      "E": "O peso mínimo preconizado para aplicação da vacina BCG ao nascimento é igual ou superior a 2.000 g, e não 1.500 g."
    }
  },
  {
    "id": "q-uepa-2022-087",
    "code": "Q-UEPA22-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Diarreia Crônica, APLV e Doença Celíaca",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-diarreia-cronica-aplv-e-doenca-celiaca",
    "tags": [
      "doenca-celiaca",
      "anti-transglutaminase",
      "biopsia-duodenal",
      "diarreia-cronica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Dona Ana, mãe de dois filhos, levou seu primogênito de 3 anos de idade em consulta médica queixando-se de que ele não ganha peso, apresenta diarreias frequentes e abdômen sempre distendido. Fez uma pesquisa rápida do Google e achou que os sintomas do filho são compatíveis com doença celíaca, e ela quer saber se seu filho pode ter essa doença. O médico lhe explicou, corretamente, que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a doença celíaca é secundária a uma reação alérgica ao trigo e os sintomas de seu filho são compatíveis.",
        "explanation": "Incorreta: Doença celíaca é uma **enteropatia autoimune** desencadeada pelo glúten em indivíduos geneticamente predispostos (HLA-DQ2/DQ8), distinta da alergia ao trigo (hipersensibilidade mediada por IgE/não-IgE).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o anticorpo transglutaminase IgA é o exame de triagem da doença e a confirmação é feita com biópsia de duodeno.",
        "explanation": "A alternativa **B** está correta. Conforme as diretrizes da **ESPGHAN / SBP**, na suspeita clínica de **doença celíaca** (diarreia crônica, distensão abdominal e baixo ganho ponderal), o exame de **triagem sorológica inicial de escolha** é a dosagem do **anticorpo antitransglutaminase tecidual IgA (anti-tTG IgA)** acompanhada da dosagem de **IgA sérica total** (para excluir deficiência seletiva de IgA), com **confirmação diagnóstica por biópsia de duodeno** (atrofia vilositária, hiperplasia de criptas e linfocitose intraepitelial — classificação de Marsh), sempre com o paciente em dieta contendo glúten.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "deve ser excluído o glúten da dieta, imediatamente, pois a clínica é soberana e muito sugestiva da doença.",
        "explanation": "Incorreta: **Nunca** se deve excluir o glúten da dieta antes de concluir a investigação sorológica e histológica, pois a retirada precoce gera resultados falso-negativos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "trata-se de doença autoimune, onde há dificuldade em digerir a lactose, causando sintomas semelhantes ao que seu filho apresenta.",
        "explanation": "Incorreta: O gatilho da doença celíaca é o **glúten** (gliadina), não a lactose (intolerância à lactose pode ocorrer apenas secundariamente à lesão vilositária).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "o principal diagnóstico diferencial da doença é ascaridíase, devendo esta ser inicialmente descartada antes de prosseguir com a investigação.",
        "explanation": "Incorreta: Não há indicação de descartar ascaridíase antes de investigar doença celíaca em quadro clássico de síndrome disabsortiva.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Conforme as diretrizes da **ESPGHAN / SBP**, na suspeita clínica de **doença celíaca** (diarreia crônica, distensão abdominal e baixo ganho ponderal), o exame de **triagem sorológica inicial de escolha** é a dosagem do **anticorpo antitransglutaminase tecidual IgA (anti-tTG IgA)** acompanhada da dosagem de **IgA sérica total** (para excluir deficiência seletiva de IgA), com **confirmação diagnóstica por biópsia de duodeno** (atrofia vilositária, hiperplasia de criptas e linfocitose intraepitelial — classificação de Marsh), sempre com o paciente em dieta contendo glúten.\n- **A) Incorreta:** Doença celíaca é uma **enteropatia autoimune** desencadeada pelo glúten em indivíduos geneticamente predispostos (HLA-DQ2/DQ8), distinta da alergia ao trigo (hipersensibilidade mediada por IgE/não-IgE).\n- **C) Incorreta:** **Nunca** se deve excluir o glúten da dieta antes de concluir a investigação sorológica e histológica, pois a retirada precoce gera resultados falso-negativos.\n- **D) Incorreta:** O gatilho da doença celíaca é o **glúten** (gliadina), não a lactose (intolerância à lactose pode ocorrer apenas secundariamente à lesão vilositária).\n- **E) Incorreta:** Não há indicação de descartar ascaridíase antes de investigar doença celíaca em quadro clássico de síndrome disabsortiva.",
    "perolaClinica": "A alternativa **B** está correta. Conforme as diretrizes da **ESPGHAN / SBP**, na suspeita clínica de **doença celíaca** (diarreia crônica, distensão abdominal e baixo ganho ponderal), o exame de **triagem sorológica…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Estratégia diagnóstica padrão na suspeita clínica de doença celíaca na infância.",
      "raciocinioChave": "Diante de diarreia crônica, distensão abdominal e déficit ponderal sugestivos de doença celíaca, realiza-se triagem sorológica com anticorpo antitransglutaminase tecidual IgA (associado à IgA total) mantendo glúten na dieta, seguida de confirmação por biópsia duodenal.",
      "armadilhaBanca": "Retirar o glúten da dieta antes da confirmação diagnóstica ou confundir doença celíaca com alergia alimentar ou intolerância à lactose."
    },
    "mapaDistratores": {
      "A": "A doença celíaca é uma enteropatia autoimune desencadeada pelo glúten em indivíduos com HLA-DQ2/DQ8, distinta da alergia ao trigo mediada por hipersensibilidade.",
      "C": "O glúten não deve ser excluído antes da conclusão sorológica e histológica, pois sua retirada precoce provoca resultados falso-negativos.",
      "D": "O desencadeante da doença celíaca é o glúten (frações gliadina), enquanto a intolerância à lactose pode surgir apenas secundariamente à atrofia vilositária.",
      "E": "A ascaridíase não é pré-requisito diagnóstico a ser descartado antes de solicitar a triagem sorológica em síndrome disabsortiva típica."
    }
  },
  {
    "id": "q-uepa-2022-088",
    "code": "Q-UEPA22-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Síndrome Nefrítica e Nefrótica Pediátrica",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-sindrome-nefritica-e-nefrotica-pediatrica",
    "tags": [
      "sindrome-nefrotica",
      "lesao-minima",
      "corticoterapia",
      "proteinuria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pré-escolar de 6 anos de idade apresenta quadro de edema generalizado há 5 dias. Mãe relata urina em volume normal, clara e espumosa. Realizou os seguintes exames: dosagem de albumina sérica= 1,5 g/dL (valor de referência 3,5-5,5), colesterol total= 350 mg/dL (valor de referência 170-199), C4= 22 mg/dL (valor de referencia 16-38), C4=110 g/dL (Valor de referencia 90-180), análise de urina= proteínas +++, ausência de hemácias, ausência de hemoglobina, proteinúria de 24 horas= 2.600 mg/24 horas. Nesse contexto, as opções terapêuticas abaixo podem ser adotadas, EXCETO:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Restrição hídrica",
        "explanation": "A alternativa **A** está correta (pois a questão pede a **exceção**). O pré-escolar apresenta quadro clássico de **síndrome nefrótica idiopática (doença por lesão mínima)**: edema generalizado, urina espumosa em volume normal, proteinúria nefrótica (2.600 mg/24h), hipoalbuminemia grave (1,5 g/dL), hipercolesterolemia (350 mg/dL), complemento normal e ausência de hematúria. Segundo a **SBP / KDIGO**, na síndrome nefrótica com diurese preservada **não se indica restrição hídrica rigorosa de rotina**, pois esses pacientes apresentam **hipovolemia intravascular efetiva** (por redução da pressão oncótica) e a restrição hídrica agrava o risco de **lesão renal aguda pré-renal e eventos tromboembólicos** (reservando-se apenas a casos de hiponatremia dilucional grave ou oligúria/congestão).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Corticoterapia",
        "explanation": "Incorreta (pode ser adotada): A **corticoterapia** (prednisolona/prednisona 60 mg/m²/dia ou 2 mg/kg/dia) é o tratamento de 1ª linha na síndrome nefrótica pediátrica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Reposição de albumina",
        "explanation": "Incorreta (pode ser adotada): A reposição de albumina humana 20% EV (associada a furosemida) pode ser utilizada em casos de anasarca refratária, desconforto respiratório ou hipovolemia sintomática.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Dieta hipossódica",
        "explanation": "Incorreta (pode ser adotada): A dieta hipossódica (restrição de sódio) é medida fundamental para controle do edema.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Imunossupressores",
        "explanation": "Incorreta (pode ser adotada): Imunossupressores poupadores de corticoide (ciclofosfamida, micofenolato, tacrolimo, ciclosporina) são indicados em casos corticorresistentes, corticodependentes ou recidivantes frequentes.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta (pois a questão pede a **exceção**). O pré-escolar apresenta quadro clássico de **síndrome nefrótica idiopática (doença por lesão mínima)**: edema generalizado, urina espumosa em volume normal, proteinúria nefrótica (2.600 mg/24h), hipoalbuminemia grave (1,5 g/dL), hipercolesterolemia (350 mg/dL), complemento normal e ausência de hematúria. Segundo a **SBP / KDIGO**, na síndrome nefrótica com diurese preservada **não se indica restrição hídrica rigorosa de rotina**, pois esses pacientes apresentam **hipovolemia intravascular efetiva** (por redução da pressão oncótica) e a restrição hídrica agrava o risco de **lesão renal aguda pré-renal e eventos tromboembólicos** (reservando-se apenas a casos de hiponatremia dilucional grave ou oligúria/congestão).\n- **B) Incorreta (pode ser adotada):** A **corticoterapia** (prednisolona/prednisona 60 mg/m²/dia ou 2 mg/kg/dia) é o tratamento de 1ª linha na síndrome nefrótica pediátrica.\n- **C) Incorreta (pode ser adotada):** A reposição de albumina humana 20% EV (associada a furosemida) pode ser utilizada em casos de anasarca refratária, desconforto respiratório ou hipovolemia sintomática.\n- **D) Incorreta (pode ser adotada):** A dieta hipossódica (restrição de sódio) é medida fundamental para controle do edema.\n- **E) Incorreta (pode ser adotada):** Imunossupressores poupadores de corticoide (ciclofosfamida, micofenolato, tacrolimo, ciclosporina) são indicados em casos corticorresistentes, corticodependentes ou recidivantes frequentes.",
    "perolaClinica": "A alternativa **A** está correta (pois a questão pede a **exceção**). O pré-escolar apresenta quadro clássico de **síndrome nefrótica idiopática (doença por lesão mínima)**: edema generalizado, urina espumosa em volume…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo terapêutico da síndrome nefrótica pediátrica e contraindicação à restrição hídrica de rotina.",
      "raciocinioChave": "A criança apresenta síndrome nefrótica clássica (edema, proteinúria nefrótica, hipoalbuminemia, hipercolesterolemia, complemento normal e ausência de hematúria), cujo manejo inclui corticoide, dieta hipossódica e, se necessário, albumina ou imunossupressores, não se indicando restrição hídrica quando a diurese está preservada pelo risco de hemoconcentração e trombose.",
      "armadilhaBanca": "Indicar restrição hídrica automática em paciente com edema nefrótico que mantém diurese preservada."
    },
    "mapaDistratores": {
      "B": "A corticoterapia oral é o tratamento de primeira linha da síndrome nefrótica idiopática na infância.",
      "C": "A infusão de albumina humana 20% associada a diurético é opção em casos de anasarca grave, desconforto respiratório ou hipovolemia sintomática.",
      "D": "A dieta hipossódica faz parte do controle não farmacológico do edema na síndrome nefrótica.",
      "E": "Imunossupressores poupadores de corticoide são empregados nos quadros corticodependentes, corticorresistentes ou recidivantes frequentes."
    }
  },
  {
    "id": "q-uepa-2022-089",
    "code": "Q-UEPA22-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Icterícia Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-ictericia-neonatal",
    "tags": [
      "ictericia-neonatal-precoce",
      "incompatibilidade-abo",
      "hemolise",
      "bilirrubina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido de 39 semanas de idade gestacional, nascido de parto cesáreo, APGAR 9/9, tipo sanguíneo A-, pesando 3.200 g, filho de mãe secundigesta, apresentou icterícia com 20 horas de vida. Mãe realizou pré-natal completo com sorologias todas negativas, sem infecção durante a gestação, tipo sanguíneo O+. Nesse caso a conduta correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "observar a progressão da icterícia após as 24 horas de vida do bebê e iniciar investigação caso haja elevação dos níveis de bilirrubinas.",
        "explanation": "Incorreta: Icterícia com < 24 horas de vida **nunca** deve ser apenas observada; exige investigação laboratorial imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "suspender o aleitamento materno por se tratar, possivelmente, de icterícia do leite materno.",
        "explanation": "Incorreta: Icterícia do leite materno é tardia (após a 1ª semana de vida) e raramente exige suspensão do aleitamento.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "prescrever fórmula láctea por se tratar de icterícia do aleitamento materno, visto que não há fatores de risco para icterícia patológica.",
        "explanation": "Incorreta: Há claro fator de risco para icterícia patológica hemolítica (mãe O / RN A + início < 24h), não se tratando de icterícia do aleitamento materno.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar dosagem de bilirrubinas totais e frações e investigar hemólise devido a possibilidade de incompatibilidade ABO.",
        "explanation": "A alternativa **D** está correta. Toda **icterícia iniciada nas primeiras 24 horas de vida** (neste caso, com 20 horas) é **sempre patológica** até prova em contrário (**SBP — Departamento Científico de Neonatologia / AAP**). Como a **mãe é tipo O+** e o **RN é tipo A-**, existe **incompatibilidade ABO** (e não Rh, pois a mãe é Rh positivo), sendo imperativo **dosar bilirrubinas totais e frações (BTF)** e **investigar doença hemolítica** (hemograma, reticulócitos, teste de Coombs direto/eluição e esfregaço periférico) para definir prontamente a indicação de fototerapia conforme o nomograma de Bhutani/SBP.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "indicar fototerapia imediatamente, além de coletar exames para avaliar a necessidade de exsanguineotransfusão devido incompatibilidade Rh.",
        "explanation": "Incorreta: Não há incompatibilidade Rh (mãe é **O positivo** e RN é **A negativo**; incompatibilidade Rh ocorre quando a mãe é Rh negativo e o RN é Rh positivo).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Toda **icterícia iniciada nas primeiras 24 horas de vida** (neste caso, com 20 horas) é **sempre patológica** até prova em contrário (**SBP — Departamento Científico de Neonatologia / AAP**). Como a **mãe é tipo O+** e o **RN é tipo A-**, existe **incompatibilidade ABO** (e não Rh, pois a mãe é Rh positivo), sendo imperativo **dosar bilirrubinas totais e frações (BTF)** e **investigar doença hemolítica** (hemograma, reticulócitos, teste de Coombs direto/eluição e esfregaço periférico) para definir prontamente a indicação de fototerapia conforme o nomograma de Bhutani/SBP.\n- **A) Incorreta:** Icterícia com < 24 horas de vida **nunca** deve ser apenas observada; exige investigação laboratorial imediata.\n- **B) Incorreta:** Icterícia do leite materno é tardia (após a 1ª semana de vida) e raramente exige suspensão do aleitamento.\n- **C) Incorreta:** Há claro fator de risco para icterícia patológica hemolítica (mãe O / RN A + início < 24h), não se tratando de icterícia do aleitamento materno.\n- **E) Incorreta:** Não há incompatibilidade Rh (mãe é **O positivo** e RN é **A negativo**; incompatibilidade Rh ocorre quando a mãe é Rh negativo e o RN é Rh positivo).",
    "perolaClinica": "A alternativa **D** está correta. Toda **icterícia iniciada nas primeiras 24 horas de vida** (neste caso, com 20 horas) é **sempre patológica** até prova em contrário (**SBP — Departamento Científico de Neonatologia /…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Investigação imediata de icterícia neonatal precoce (< 24 horas) por incompatibilidade ABO.",
      "raciocinioChave": "Toda icterícia surgida nas primeiras 24 horas de vida é patológica; como a mãe é O+ e o recém-nascido é A−, existe incompatibilidade ABO (não Rh), impondo dosagem imediata de bilirrubinas totais e frações e pesquisa de hemólise.",
      "armadilhaBanca": "Confundir incompatibilidade ABO com Rh (mãe é O+ e RN é A-) ou interpretar icterícia precoce (< 24h) como fisiológica/do aleitamento."
    },
    "mapaDistratores": {
      "A": "Icterícia iniciada antes de 24 horas de vida jamais deve ser apenas observada, exigindo investigação laboratorial imediata.",
      "B": "A icterícia do leite materno surge tardiamente após a primeira semana de vida e não justifica suspensão do aleitamento materno.",
      "C": "Não se trata de icterícia do aleitamento materno, pois há início precoce (< 24h) e fator de risco hemolítico evidente por incompatibilidade ABO.",
      "E": "Não há incompatibilidade Rh porque a mãe é Rh positivo (O+) e o recém-nascido é Rh negativo (A−)."
    }
  },
  {
    "id": "q-uepa-2022-090",
    "code": "Q-UEPA22-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Avaliação do Crescimento e Baixa Estatura",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-avaliacao-do-crescimento-e-baixa-estatura",
    "tags": [
      "dor-de-crescimento",
      "dor-recorrente-em-membros",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Escolar de 8 anos de idade apresenta dor em membros inferiores, recorrente, difusa, preferencialmente a noite há 12 meses. Mãe relata piora com o frio e melhora com aquecimento, massagem e analgésicos comuns. Exame físico sem alterações. Em relação ao caso exposto, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "é compatível com dor recorrente benigna em membros (dor de crescimento), devendo ser orientado manter massagem, aquecimento e exercícios físicos regulares.",
        "explanation": "A alternativa **A** está correta. O quadro clínico — criança entre 3 e 12 anos (8 anos) com dor **bilateral, difusa/não articular** em membros inferiores, **recorrente**, de predomínio **vespertino/noturno**, que melhora com **massagem, calor local e analgésicos simples**, sem sintomas constitucionais e com **exame físico completamente normal** — é o retrato clássico da **dor recorrente benigna em membros (\"dor de crescimento\")** (**SBP — Departamento de Reumatologia**). O diagnóstico é **eminentemente clínico** (sem necessidade de exames complementares na ausência de sinais de alerta), e a conduta baseia-se em tranquilizar a família, **massagens, aquecimento local, alongamentos/exercícios físicos regulares** e analgésicos comuns se necessário.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "existe sinal de alerta para doença orgânica, devendo ser solicitados exames complementares para afastar tumor ósseo e leucemia linfoblástica aguda.",
        "explanation": "Incorreta: Não há nenhum sinal de alerta (dor unilateral persistente, dor articular/artrite, claudicação, febre, perda ponderal, palidez, adenomegalias ou alteração no exame físico).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "é compatível com dor recorrente benigna em membros (dor de crescimento), que será confirmada caso exames complementares (FAN, fator reumatoide, hemograma e VHS) estejam normais.",
        "explanation": "Incorreta: Na ausência de sinais de alerta, **não** são necessários exames laboratoriais (FAN, FR, hemograma, VHS) para confirmar o diagnóstico clínico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "deve ser investigado febre reumática com ASLO, hemograma, provas inflamatórias e ecocardiograma, já que o Brasil é um país de alto risco para esta doença.",
        "explanation": "Incorreta: Febre reumática cursa com poliartrite migratória de grandes articulações (sinais flogísticos articulares), não dor difusa não articular crônica há 12 meses com exame físico normal.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "o fato de a dor ser bilateral torna pouco provável o diagnóstico de dor de crescimento, devendo ser investigadas causas inflamatórias e neoplásicas, além de fibromialgia juvenil.",
        "explanation": "Incorreta: Pelo contrário, a dor ser **bilateral** (ou alternante) é uma característica **típica** da dor de crescimento (dor estritamente unilateral fixa é que seria sinal de alerta).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. O quadro clínico — criança entre 3 e 12 anos (8 anos) com dor **bilateral, difusa/não articular** em membros inferiores, **recorrente**, de predomínio **vespertino/noturno**, que melhora com **massagem, calor local e analgésicos simples**, sem sintomas constitucionais e com **exame físico completamente normal** — é o retrato clássico da **dor recorrente benigna em membros (\"dor de crescimento\")** (**SBP — Departamento de Reumatologia**). O diagnóstico é **eminentemente clínico** (sem necessidade de exames complementares na ausência de sinais de alerta), e a conduta baseia-se em tranquilizar a família, **massagens, aquecimento local, alongamentos/exercícios físicos regulares** e analgésicos comuns se necessário.\n- **B) Incorreta:** Não há nenhum sinal de alerta (dor unilateral persistente, dor articular/artrite, claudicação, febre, perda ponderal, palidez, adenomegalias ou alteração no exame físico).\n- **C) Incorreta:** Na ausência de sinais de alerta, **não** são necessários exames laboratoriais (FAN, FR, hemograma, VHS) para confirmar o diagnóstico clínico.\n- **D) Incorreta:** Febre reumática cursa com poliartrite migratória de grandes articulações (sinais flogísticos articulares), não dor difusa não articular crônica há 12 meses com exame físico normal.\n- **E) Incorreta:** Pelo contrário, a dor ser **bilateral** (ou alternante) é uma característica **típica** da dor de crescimento (dor estritamente unilateral fixa é que seria sinal de alerta).",
    "perolaClinica": "A alternativa **A** está correta. O quadro clínico — criança entre 3 e 12 anos (8 anos) com dor **bilateral, difusa/não articular** em membros inferiores, **recorrente**, de predomínio **vespertino/noturno**, que…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico estritamente clínico e conduta na dor recorrente benigna em membros (dor de crescimento).",
      "raciocinioChave": "Escolar com dor bilateral, difusa e não articular em membros inferiores há 12 meses, de predomínio noturno, aliviada por calor local, massagem e analgésicos comuns, com exame físico normal e sem sinais de alerta, fecha o diagnóstico clínico de dor de crescimento, dispensando exames e sendo manejada com medidas de conforto e exercícios.",
      "armadilhaBanca": "Solicitar painel reumatológico/oncológico sem sinais de alerta ou achar que dor bilateral reduz a probabilidade de dor de crescimento."
    },
    "mapaDistratores": {
      "B": "Não há sinais de alerta (febre, claudicação, dor unilateral fixa, artrite, emagrecimento ou alteração ao exame físico) que justifiquem investigação de tumor ósseo ou leucemia.",
      "C": "O diagnóstico de dor de crescimento é clínico e não exige exames laboratoriais (FAN, FR, hemograma ou VHS) quando não existem sinais de alerta.",
      "D": "A febre reumática cursa com poliartrite migratória inflamatória de grandes articulações, incompatível com dor não articular crônica e exame físico normal.",
      "E": "A bilateralidade (ou alternância) é característica clássica da dor de crescimento, enquanto dor estritamente unilateral e persistente seria sinal de alerta."
    }
  },
  {
    "id": "q-uepa-2022-091",
    "code": "Q-UEPA22-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Obesidade Infantil e Desnutrição Grave",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-obesidade-infantil-e-desnutricao-grave",
    "tags": [
      "transtornos-alimentares",
      "adolescencia",
      "imagem-corporal",
      "saude-mental"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "As questões relacionadas a alimentação , são queixas frequentes nos ambulatórios de pediatria e quando são os adolescentes que apresentam tal comportamento, em virtude das informações recebidas, muitas vezes distorcidas do mundo tecnológico, tal fato é ainda mais preocupante. Ante o exposto, analise as afirmativas abaixo e assinale a alternativa correta.\nI. Segundo a Organização Mundial de Saúde (OMS), os transtornos alimentares (TAs) são considerados “um conjunto de transtornos psiquiátricos de origem genética, hereditária, psicológica e/ou social”, caracterizados por perturbação persistente na alimentação.\nII. A pandemia promoveu isolamento social e um maior contato com o mundo digital , de forma que o adolescente passa a entender o mundo “virtual” como uma das únicas referências na relação com o corpo e perde a experiência “real” com as pessoas, favorecendo assim, o aparecimento dos TAs.\nIII. A distorção perceptual é a incapacidade de reconhecer a dimensão corporal e seus segmentos de forma precisa, associada à distorção atitudinal que é a intensa insatisfação e preocupação com o corpo, gerando atitudes e comportamentos negativos e destrutivos. Desta forma, a construção neuropsíquica do mapa corporal depende das aferências do sistema somatossensorial em parte, inviabilizada pela nova realidade de isolamento social dos jovens.\nIV. O comportamento alimentar na adolescência sofre influência da mídia e, também dos amigos e é relacionado ao estilo de vida, priorizando a rapidez e praticidade em obter alimentos de fácil acesso e consumo. Nesse contexto, as escolhas alimentares saudáveis se tornam cada vez mais difíceis,sendo a depressão, o transtorno psiquiátrico mais comum em adolescentes e adultas que apresentam o conjunto de TA, responsável por taxas elevadas de suicídio (25%).\nV. Encorajar as refeições em família, pois é o ambiente primordial para o enfrentamento dos TAs, além de esclarecer sobre a construção da imagem corporal positiva no ambiente familiar, estando atento à percepção corporal que os adolescentes relatam de si mesmo, são pontos importantes no combate aos TAs.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
        "explanation": "Incorreta: Omite as afirmativas II e IV, que também estão corretas.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Incorreta: Omite as afirmativas I, III e V, igualmente corretas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, III e IV",
        "explanation": "Incorreta: Omite as afirmativas II e V.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "II, III e V",
        "explanation": "Incorreta: Omite as afirmativas I e IV.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) reproduzem integralmente as recomendações e conceitos do **Documento Científico da Sociedade Brasileira de Pediatria (SBP — Departamento Científico de Adolescência: \"Transtornos Alimentares na Adolescência\" / impacto da pandemia de COVID-19)**: definição multifatorial da OMS (I), agravamento pelo isolamento social e hiperexposição às redes sociais/mundo virtual (II), componentes perceptual e atitudinal da distorção da imagem corporal (III), influência da mídia/pares e alta comorbidade com depressão e risco de suicídio (IV), e o papel protetor das refeições em família e da construção positiva da imagem corporal (V).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) reproduzem integralmente as recomendações e conceitos do **Documento Científico da Sociedade Brasileira de Pediatria (SBP — Departamento Científico de Adolescência: \"Transtornos Alimentares na Adolescência\" / impacto da pandemia de COVID-19)**: definição multifatorial da OMS (I), agravamento pelo isolamento social e hiperexposição às redes sociais/mundo virtual (II), componentes perceptual e atitudinal da distorção da imagem corporal (III), influência da mídia/pares e alta comorbidade com depressão e risco de suicídio (IV), e o papel protetor das refeições em família e da construção positiva da imagem corporal (V).\n- **A) Incorreta:** Omite as afirmativas II e IV, que também estão corretas.\n- **B) Incorreta:** Omite as afirmativas I, III e V, igualmente corretas.\n- **C) Incorreta:** Omite as afirmativas II e V.\n- **D) Incorreta:** Omite as afirmativas I e IV.",
    "perolaClinica": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) reproduzem integralmente as recomendações e conceitos do **Documento Científico da Sociedade Brasileira de Pediatria (SBP —…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Aspectos epidemiológicos e fatores digitais associados aos transtornos alimentares na adolescência segundo a SBP.",
      "raciocinioChave": "As cinco afirmativas (I a V) estão corretas por reproduzirem integralmente a definição multifatorial da OMS e as considerações da SBP sobre o impacto do isolamento social e das mídias digitais nos transtornos alimentares em adolescentes.",
      "armadilhaBanca": "Desconfiar de assertiva completa quando todas as afirmativas reproduzem literalmente o documento científico da SBP."
    },
    "mapaDistratores": {
      "A": "Exclui incorretamente as afirmativas II e IV, que também estão corretas conforme o documento da SBP.",
      "B": "Exclui incorretamente as afirmativas I, III e V, igualmente verdadeiras.",
      "C": "Omite as afirmativas II e V, ambas verdadeiras.",
      "D": "Omite as afirmativas I e IV, também corretas segundo a referência da SBP."
    }
  },
  {
    "id": "q-uepa-2022-092",
    "code": "Q-UEPA22-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Aleitamento Materno e Fórmulas Infantis",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-aleitamento-materno-e-formulas-infantis",
    "tags": [
      "gravidez-na-adolescencia",
      "aleitamento-materno",
      "hebiatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "De acordo com relatório publicado em 2018 pela Organização Pan-Americana da Saúde/Organização Mundial da Saúde (OPAS/OMS), Fundo das Nações Unidas para a Infância (UNICEF) e Fundo de População das Nações Unidas (UNFPA), a taxa mundial de gravidez adolescente é estimada em 46 nascimentos para cada mil adolescentes e jovens mulheres entre 15 e 19 anos. No Brasil, um em cada cinco bebês nasce de uma mãe com idade entre 10 e 19 anos, podendo chegar a 65 nascidos filhos por mil mulheres dessa faixa etária (18%). Ante o exposto, analise as afirmativas abaixo.\nI. Á exposição aos estímulos presentes no meio no qual se desenvolvem - acrescido da diminuição da idade da menarca , acaba promovendo um incentivo para o início da atividade sexual em idades mais precoces sem, no entanto, prepará-los para o exercício saudável e consciente, evitando ISTs (infecções sexualmente transmissíveis) e à gravidez precoce com a correta anticoncepção.\nII. A gestante adolescente deve receber atenção especial nos períodos pré-natal, natal e puerperal, no sentido de superar as dificuldades com o apoio do parceiro, da família e da equipe de saúde. Os profissionais de saúde desempenham papel importante ao reconhecer os momentos críticos em que suas intervenções são necessárias para assegurar a saúde de ambos e da nova composição e arranjos familiares.\nIII. Pode-se dizer que as mães adolescentes amamentam com a mesma frequência e pelo mesmo tempo quando em comparação com mães adultas, bem como não parece haver relação com niveis de escolaridade e gestações previas.\nIV. Não há diferença no leite materno produzido por mães adultas e mães adolescentes.\nV. A idade materna, exposição previa a experiência de aleitamento materno, rede de apoio e grau de escolaridade são fatores sócio-demográficos culturais que interferem no aleitamento materno da mãe adolescente.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
        "explanation": "Incorreta: Inclui a afirmativa III (falsa) e omite a II (verdadeira).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Incorreta: Inclui a afirmativa IV (falsa segundo a referência da SBP) e omite I e V.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, II e V",
        "explanation": "A alternativa **C** está correta (**I, II e V**). Conforme o **Documento Científico da SBP (\"Prevenção da Gravidez na Adolescência\" / \"Aleitamento Materno na Adolescência\")** e o relatório **OPAS/OMS/UNICEF**: - **I (Correta):** A antecipação da menarca e os estímulos ambientais favorecem a iniciação sexual precoce sem o devido preparo para prevenção de ISTs e gestação não planejada. - **II (Correta):** O acompanhamento multidisciplinar no pré-natal, parto e puerpério, integrando parceiro e família, é essencial para o binômio mãe-bebê adolescente. - **III (Incorreta):** Estudos mostram que mães adolescentes têm **menores taxas de início e menor duração do aleitamento materno** em comparação com mães adultas, havendo forte relação com escolaridade e paridade. - **IV (Incorreta):** Segundo a literatura citada pela SBP, há diferenças descritas na composição/volume (ex.: teor calórico/lipídico ou densidade nutricional dependendo do estado nutricional da adolescente em crescimento), embora o leite materno continue sendo o melhor alimento. - **V (Correta):** Idade materna, experiência prévia, rede de apoio familiar/profissional e escolaridade são determinantes sociodemográficos e culturais que influenciam diretamente o sucesso da amamentação na adolescência.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "III e IV",
        "explanation": "Incorreta: Reúne apenas as duas afirmativas incorretas (III e IV).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Incorreta: III e IV são consideradas incorretas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta (**I, II e V**). Conforme o **Documento Científico da SBP (\"Prevenção da Gravidez na Adolescência\" / \"Aleitamento Materno na Adolescência\")** e o relatório **OPAS/OMS/UNICEF**:\n- **I (Correta):** A antecipação da menarca e os estímulos ambientais favorecem a iniciação sexual precoce sem o devido preparo para prevenção de ISTs e gestação não planejada.\n- **II (Correta):** O acompanhamento multidisciplinar no pré-natal, parto e puerpério, integrando parceiro e família, é essencial para o binômio mãe-bebê adolescente.\n- **III (Incorreta):** Estudos mostram que mães adolescentes têm **menores taxas de início e menor duração do aleitamento materno** em comparação com mães adultas, havendo forte relação com escolaridade e paridade.\n- **IV (Incorreta):** Segundo a literatura citada pela SBP, há diferenças descritas na composição/volume (ex.: teor calórico/lipídico ou densidade nutricional dependendo do estado nutricional da adolescente em crescimento), embora o leite materno continue sendo o melhor alimento.\n- **V (Correta):** Idade materna, experiência prévia, rede de apoio familiar/profissional e escolaridade são determinantes sociodemográficos e culturais que influenciam diretamente o sucesso da amamentação na adolescência.\n- **A) Incorreta:** Inclui a afirmativa III (falsa) e omite a II (verdadeira).\n- **B) Incorreta:** Inclui a afirmativa IV (falsa segundo a referência da SBP) e omite I e V.\n- **D) Incorreta:** Reúne apenas as duas afirmativas incorretas (III e IV).\n- **E) Incorreta:** III e IV são consideradas incorretas.",
    "perolaClinica": "A alternativa **C** está correta (**I, II e V**). Conforme o **Documento Científico da SBP (\"Prevenção da Gravidez na Adolescência\" / \"Aleitamento Materno na Adolescência\")** e o relatório **OPAS/OMS/UNICEF**: - **I…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Determinantes, prevenção e abordagem multidisciplinar da gravidez na adolescência (SBP / OPAS).",
      "raciocinioChave": "De acordo com as diretrizes da SBP e o relatório OPAS/OMS/UNICEF sobre gravidez na adolescência, apenas as afirmativas I, II e V são corretas quanto à iniciação sexual precoce frente a estímulos ambientais/menarca e à necessidade de cuidado multidisciplinar, enquanto III e IV contêm incorreções.",
      "armadilhaBanca": "Assumir que todas as assertivas em questões de múltipla escolha da SBP sobre gravidez na adolescência são verdadeiras, incluindo III e IV."
    },
    "mapaDistratores": {
      "A": "Inclui a afirmativa III (incorreta) e deixa de fora a afirmativa II (verdadeira).",
      "B": "Inclui a afirmativa IV (incorreta) e omite as afirmativas I e V (verdadeiras).",
      "D": "Seleciona exclusivamente as duas afirmativas falsas (III e IV).",
      "E": "Considera erroneamente as afirmativas III e IV como corretas."
    }
  },
  {
    "id": "q-uepa-2022-093",
    "code": "Q-UEPA22-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Ética Médica, Bioética e Medicina Legal",
    "subtema": "Código de Ética Médica e Sigilo Profissional",
    "temaSlug": "mp-etica",
    "subtemaSlug": "mp-etica-codigo-de-etica-medica-e-sigilo-profissional",
    "tags": [
      "sigilo-medico",
      "adolescente",
      "etica-medica",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Analise as afirmativas abaixo e a seguir, assinale a alternativa correta.\nI. Sorologia positiva de HIV em adolescentes, deve-se quebrar sigilo profissional e comunicar aos familiares e à parceria sexual.\nII. Experimentação de psicoativos (sem sinais de dependência), autoriza o médico a manutenção do sigilo profissional.\nIII. Uso escalonado (cada vez maior) de álcool e outras drogas, mesmo que haja sinais de dependência química, não autoriza o médico a quebra de sigilo profissional.\nIV. As novas formas de comunicação na era da informática, autorizam o medico a prescrever tratamento ou outros procedimentos sem exame direto do paciente, mesmo quando não haja urgência ou emergência.\nV. Gravidez ou abortamento devem ser comunicados a família, mesmo que haja necessidade de quebra de sigilo médico.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
        "explanation": "Incorreta: Inclui III (falsa).",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Incorreta: Inclui IV (falsa).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "I, II e IV",
        "explanation": "Incorreta: Inclui IV (falsa).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "I, II e V",
        "explanation": "Incorreta (gabarito pretendido / causa de anulação): Assumia I e V como integralmente verdadeiras, contrariando nuances das diretrizes da SBP/CEM sobre sigilo na gravidez e soropositividade ao HIV em adolescentes capazes.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Incorreta: Inclui III e IV (falsas).",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** Pela legislação ética (**Código de Ética Médica — Art. 74**) e pelas recomendações da **SBP (Departamento Científico de Adolescência — Consulta do Adolescente)**:\n- **II é verdadeira:** A simples experimentação de substâncias psicoativas, sem dependência ou risco iminente, permite manter o sigilo enquanto se constrói vínculo e plano terapêutico.\n- **III é falsa:** Sinais de **dependência química** constituem risco grave à saúde/vida do adolescente e **autorizam a quebra de sigilo** (com comunicação prévia ao jovem).\n- **IV é falsa:** O Art. 37 do CEM veda prescrever tratamento ou outros procedimentos sem exame direto do paciente, salvo em casos de urgência/emergência e telemedicina devidamente regulamentada.\n- **I e V geraram controvérsia (motivo da anulação):** No **HIV** (I), busca-se primeiro a revelação voluntária pelo adolescente e o sigilo frente à família pode ser mantido se o jovem tiver discernimento e aderir ao tratamento (quebrando-se para a parceria sexual apenas se houver recusa com risco de transmissão); na **gravidez** (V), pela SBP a gestação em adolescente capaz **não** obriga quebra automática de sigilo (estimula-se o envolvimento familiar, ao passo que o abortamento inseguro/risco de vida justifica quebra). Assim, não havia alternativa estritamente correta.\n- **A) Incorreta:** Inclui III (falsa).\n- **B) Incorreta:** Inclui IV (falsa).\n- **C) Incorreta:** Inclui IV (falsa).\n- **D) Incorreta (gabarito pretendido / causa de anulação):** Assumia I e V como integralmente verdadeiras, contrariando nuances das diretrizes da SBP/CEM sobre sigilo na gravidez e soropositividade ao HIV em adolescentes capazes.\n- **E) Incorreta:** Inclui III e IV (falsas).",
    "perolaClinica": "[REVISAR: questão anulada oficialmente pela banca UEPA 2022] **Questão ANULADA oficialmente pela banca UEPA 2022.** Pela legislação ética (**Código de Ética Médica — Art. 74**) e pelas recomendações da **SBP…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2022-094",
    "code": "Q-UEPA22-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "anafilaxia",
      "alergia-alimentar",
      "emergencia-pediatrica",
      "broncoespasmo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Analise o quadro clínico abaixo para responder às questões 94 e 95.\n\nLactente com 2 anos de idade, com relato de vômito e dor abdominal intensa, seguido de broncoespasmo 2 horas após ingesta de brigadeiro. Relato de broncoespasmo prévio durante infecção de vias aéreas superiores há 90 dias.\nTrazido a urgência pediátrica para atendimento, sendo evidenciado ao exame físico:\nHipoatividade, palidez cutaneomucosa, hidratado limítrofe, dispneico, pálido\nOF: hiperemia de lábios\nAp: sibilos difusos Fr: 58 ipm Tiragem intercostal e subcostal So2: 90% em ar ambiente\nAc: bcnf rcr 2t, ss FC: 180 bpm Pulsos amplos PCP: 1 seg Pa: 60x40 mmhg\nAbd: flácido, difusamente dolor a palpação, sem visceromegalia\nSN: hipoativo, ECG14\nSem edemas\nSem lesões de pele\n\nCom base no quadro clínico acima, o provável diagnostico é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "asma brônquica",
        "explanation": "Incorreta: Crise de asma isolada não explica vômitos intensos, dor abdominal, hiperemia labial e choque distributivo (PA 60×40 mmHg) 2 horas após ingestão de alimento.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "choque séptico",
        "explanation": "Incorreta: Não há febre ou foco infeccioso; há relação temporal clara com ingestão de brigadeiro.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "bronquiolite",
        "explanation": "Incorreta: Bronquiolite é infecção viral de vias aéreas inferiores em menores de 2 anos com pródromo gripal, não cursa com choque distributivo pós-prandial agudo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "anafilaxia",
        "explanation": "A alternativa **D** está correta. Pelos critérios diagnósticos da **WAO / ASBAI / SBP**, trata-se de **anafilaxia** (mesmo na ausência de urticária cutânea, que está ausente em até 10–20% dos casos): após exposição a provável alérgeno alimentar (**brigadeiro** — proteína do leite de vaca), o paciente desenvolveu rapidamente (em 2 horas) comprometimento simultâneo de **múltiplos sistemas**: **gastrointestinal** (vômitos e dor abdominal intensa), **respiratório** (broncoespasmo, sibilos difusos, tiragem, SpO2 90%), **mucoso** (hiperemia de lábios) e **cardiovascular/choque distributivo quente** (hipotensão PA 60×40 mmHg em criança de 2 anos — limite inferior de PAS = 70 + 2×idade = 74 mmHg, taquicardia FC 180 bpm, pulsos amplos, TEC 1 seg e hipoatividade).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "choque hipovolêmico",
        "explanation": "Incorreta: No choque hipovolêmico os pulsos seriam finos e o tempo de enchimento capilar prolongado (> 3 s), ao contrário dos pulsos amplos e TEC de 1 seg típicos do choque distributivo/anafilático.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Pelos critérios diagnósticos da **WAO / ASBAI / SBP**, trata-se de **anafilaxia** (mesmo na ausência de urticária cutânea, que está ausente em até 10–20% dos casos): após exposição a provável alérgeno alimentar (**brigadeiro** — proteína do leite de vaca), o paciente desenvolveu rapidamente (em 2 horas) comprometimento simultâneo de **múltiplos sistemas**: **gastrointestinal** (vômitos e dor abdominal intensa), **respiratório** (broncoespasmo, sibilos difusos, tiragem, SpO2 90%), **mucoso** (hiperemia de lábios) e **cardiovascular/choque distributivo quente** (hipotensão PA 60×40 mmHg em criança de 2 anos — limite inferior de PAS = 70 + 2×idade = 74 mmHg, taquicardia FC 180 bpm, pulsos amplos, TEC 1 seg e hipoatividade).\n- **A) Incorreta:** Crise de asma isolada não explica vômitos intensos, dor abdominal, hiperemia labial e choque distributivo (PA 60×40 mmHg) 2 horas após ingestão de alimento.\n- **B) Incorreta:** Não há febre ou foco infeccioso; há relação temporal clara com ingestão de brigadeiro.\n- **C) Incorreta:** Bronquiolite é infecção viral de vias aéreas inferiores em menores de 2 anos com pródromo gripal, não cursa com choque distributivo pós-prandial agudo.\n- **E) Incorreta:** No choque hipovolêmico os pulsos seriam finos e o tempo de enchimento capilar prolongado (> 3 s), ao contrário dos pulsos amplos e TEC de 1 seg típicos do choque distributivo/anafilático.",
    "perolaClinica": "A alternativa **D** está correta. Pelos critérios diagnósticos da **WAO / ASBAI / SBP**, trata-se de **anafilaxia** (mesmo na ausência de urticária cutânea, que está ausente em até 10–20% dos casos): após exposição a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de anafilaxia na emergência pediátrica mesmo sem lesões cutâneas.",
      "raciocinioChave": "Após exposição a provável alérgeno alimentar (brigadeiro), o lactente desenvolveu comprometimento agudo simultâneo respiratório (sibilos, tiragem, SpO2 90%), gastrointestinal (vômitos e dor abdominal), mucoso (hiperemia labial) e hemodinâmico (PA 60×40 mmHg, pulsos amplos), preenchendo critérios de anafilaxia mesmo sem urticária.",
      "armadilhaBanca": "Descartar anafilaxia pela ausência de lesões cutâneas/urticária e confundir o quadro com crise asmática isolada ou choque hipovolêmico."
    },
    "mapaDistratores": {
      "A": "Uma crise de asma isolada não justifica vômitos intensos, dor abdominal, hiperemia labial e choque distributivo logo após ingestão alimentar.",
      "B": "Não há febre ou foco infeccioso sugestivo de sepse, havendo claro nexo temporal com a ingestão de brigadeiro.",
      "C": "A bronquiolite tem evolução viral subaguda após pródromo gripal e não provoca choque distributivo agudo pós-prandial.",
      "E": "O choque hipovolêmico cursa com pulsos finos e enchimento capilar lentificado, oposto aos pulsos amplos e TEC de 1 segundo do choque anafilático."
    }
  },
  {
    "id": "q-uepa-2022-095",
    "code": "Q-UEPA22-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "anafilaxia",
      "adrenalina-im",
      "tratamento-imediato",
      "emergencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Analise o quadro clínico abaixo para responder às questões 94 e 95.\n\nLactente com 2 anos de idade, com relato de vômito e dor abdominal intensa, seguido de broncoespasmo 2 horas após ingesta de brigadeiro. Relato de broncoespasmo prévio durante infecção de vias aéreas superiores há 90 dias.\nTrazido a urgência pediátrica para atendimento, sendo evidenciado ao exame físico:\nHipoatividade, palidez cutaneomucosa, hidratado limítrofe, dispneico, pálido\nOF: hiperemia de lábios\nAp: sibilos difusos Fr: 58 ipm Tiragem intercostal e subcostal So2: 90% em ar ambiente\nAc: bcnf rcr 2t, ss FC: 180 bpm Pulsos amplos PCP: 1 seg Pa: 60x40 mmhg\nAbd: flácido, difusamente dolor a palpação, sem visceromegalia\nSN: hipoativo, ECG14\nSem edemas\nSem lesões de pele\n\nApós suplementação de oxigênio e acesso venoso periférico para expansão volêmica do paciente descrito no quadro clinico acima, a prioridade de tratamento medicamentoso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Adrenalina IM",
        "explanation": "A alternativa **A** está correta. Segundo as diretrizes da **WAO / ASBAI / SBP / PALS**, a **adrenalina (epinefrina) por via intramuscular** (solução 1:1.000 = 1 mg/mL, na dose de **0,01 mg/kg**, máximo 0,3 mg em crianças, aplicada no músculo **vasto lateral da coxa**) é a **medicação de primeira linha absoluta e prioritária** na anafilaxia, revertendo simultaneamente a vasodilatação/hipotensão, o broncoespasmo e o edema de vias aéreas, além de inibir a degranulação de mastócitos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Salbutamol inalatório",
        "explanation": "Incorreta: Salbutamol inalatório é terapia adjuvante (segunda linha) se houver broncoespasmo persistente após a adrenalina IM.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Hidrocortisona EV",
        "explanation": "Incorreta: Corticoides (hidrocortisona/metilprednisolona) têm início de ação tardio (horas) e são adjuvantes, jamais substituindo ou precedendo a adrenalina IM.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Ampicilina EV",
        "explanation": "Incorreta: Não há indicação de antibiótico (ampicilina) no tratamento agudo da anafilaxia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Noradrenalina Ev",
        "explanation": "Incorreta: Vasopressores contínuos EV (como noradrenalina ou adrenalina EV em bomba) só são considerados se houver choque anafilático **refratário** a doses repetidas de adrenalina IM e expansão volêmica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Segundo as diretrizes da **WAO / ASBAI / SBP / PALS**, a **adrenalina (epinefrina) por via intramuscular** (solução 1:1.000 = 1 mg/mL, na dose de **0,01 mg/kg**, máximo 0,3 mg em crianças, aplicada no músculo **vasto lateral da coxa**) é a **medicação de primeira linha absoluta e prioritária** na anafilaxia, revertendo simultaneamente a vasodilatação/hipotensão, o broncoespasmo e o edema de vias aéreas, além de inibir a degranulação de mastócitos.\n- **B) Incorreta:** Salbutamol inalatório é terapia adjuvante (segunda linha) se houver broncoespasmo persistente após a adrenalina IM.\n- **C) Incorreta:** Corticoides (hidrocortisona/metilprednisolona) têm início de ação tardio (horas) e são adjuvantes, jamais substituindo ou precedendo a adrenalina IM.\n- **D) Incorreta:** Não há indicação de antibiótico (ampicilina) no tratamento agudo da anafilaxia.\n- **E) Incorreta:** Vasopressores contínuos EV (como noradrenalina ou adrenalina EV em bomba) só são considerados se houver choque anafilático **refratário** a doses repetidas de adrenalina IM e expansão volêmica.",
    "perolaClinica": "A alternativa **A** está correta. Segundo as diretrizes da **WAO / ASBAI / SBP / PALS**, a **adrenalina (epinefrina) por via intramuscular** (solução 1:1.000 = 1 mg/mL, na dose de **0,01 mg/kg**, máximo 0,3 mg em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Medicação de primeira linha absoluta no tratamento imediato da anafilaxia pediátrica.",
      "raciocinioChave": "Na anafilaxia com comprometimento respiratório e hipotensão, a adrenalina intramuscular (0,01 mg/kg da solução 1:1.000 no vasto lateral da coxa) é a droga prioritária imediata por reverter vasodilatação, broncoespasmo e edema de vias aéreas.",
      "armadilhaBanca": "Priorizar broncodilatador inalatório ou corticoide venoso antes da adrenalina intramuscular diante de broncoespasmo e choque anafilático."
    },
    "mapaDistratores": {
      "B": "O salbutamol inalatório é apenas terapia adjuvante de segunda linha caso o broncoespasmo persista após a adrenalina IM.",
      "C": "A hidrocortisona tem início de ação tardio e papel adjuvante, jamais substituindo ou retardando a adrenalina IM.",
      "D": "Não há indicação de antibioticoterapia com ampicilina no manejo agudo da anafilaxia.",
      "E": "A noradrenalina em infusão contínua reserva-se apenas ao choque anafilático refratário a múltiplas doses de adrenalina IM e expansão volêmica."
    }
  },
  {
    "id": "q-uepa-2022-096",
    "code": "Q-UEPA22-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Cardiopatias Congênitas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-cardiopatias-congenitas",
    "tags": [
      "dor-toracica-pediatrica",
      "costocondrite",
      "cardiologia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A dor torácica é uma causa frequente de encaminhamento de crianças e adolescentes para o cardiologista pediátrico, embora raramente esteja relacionada a problemas cardíacos nessa faixa etária, gera extrema preocupação dos pais, levando o pediatra muitas vezes a encaminhar o paciente ao especialista. Ante o exposto, analise as afirmativas abaixo.\nI. A dor idiopática apresenta geralmente uma evolução crônica. Os pacientes com costocondrite manifestam dor relacionada à atividade física prévia ou infecção respiratória. Pode ser de leve a moderada intensidade, geralmente unilateral, que piora com a movimentação e a respiração.\nII. A dor musculoesquelética ocorre geralmente por contusão na musculatura do dorso, peitoral e ombro após exercício ou trauma e está relacionada com a prática de esportes, lutas ou acidentes.\nIII. A dor psicogênica é mais comum em adolescentes e frequentemente desencadeada por uma situação de estresse, como morte ou separação na família, fracasso escolar ou abuso sexual.\nIV. A dor do tipo anginosa ocorre em aperto, desencadeada por exercício, emoção, frio, excesso alimentar, localizada no precórdio ou na área subesternal com irradiação para o pescoço, mandíbula, braços, dorso ou abdome.\nV. Dor anginosa com exame cardiológico anormal (exame físico, Rx de tórax ou ECG); História familiar de miocardiopatia hipertrófica, síndrome do QT longo ou outra doença cardíaca hereditária. Além de família muito ansiosa em paciente com dor crônica e recorrente, são indicações de encaminhamento ao cardiologista pediátrico.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I",
        "explanation": "Incorreta: Exclui II, III, IV e V, que são verdadeiras.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "V",
        "explanation": "Incorreta: Exclui I, II, III e IV.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "II e IV",
        "explanation": "Incorreta: Exclui I, III e V.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I, III e V",
        "explanation": "Incorreta: Exclui II e IV.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) estão em plena consonância com o **Documento Científico da Sociedade Brasileira de Pediatria (SBP — Departamento Científico de Cardiologia: \"Dor Torácica na Infância e Adolescência\")**: - **I (Correta):** Causas idiopáticas e costocondrite estão entre as etiologias mais frequentes (costocondrite reproduzível à palpação, geralmente unilateral, agravada por movimentação/respiração). - **II (Correta):** Dor musculoesquelética traumática/pós-exercício é a causa orgânica benigna mais prevalente na faixa pediátrica. - **III (Correta):** Dor psicogênica predomina em adolescentes e associa-se a estressores emocionais/familiares/escolares. - **IV (Correta):** Descreve corretamente a semiologia clássica da dor anginosa típica (isquêmica). - **V (Correta):** Resume os principais sinais de alerta e indicações formais de encaminhamento ao cardiologista pediátrico (dor anginosa, exame/ECG/Rx alterados, história familiar de morte súbita/miocardiopatia hipertrófica/QT longo e ansiedade familiar refratária).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) estão em plena consonância com o **Documento Científico da Sociedade Brasileira de Pediatria (SBP — Departamento Científico de Cardiologia: \"Dor Torácica na Infância e Adolescência\")**:\n- **I (Correta):** Causas idiopáticas e costocondrite estão entre as etiologias mais frequentes (costocondrite reproduzível à palpação, geralmente unilateral, agravada por movimentação/respiração).\n- **II (Correta):** Dor musculoesquelética traumática/pós-exercício é a causa orgânica benigna mais prevalente na faixa pediátrica.\n- **III (Correta):** Dor psicogênica predomina em adolescentes e associa-se a estressores emocionais/familiares/escolares.\n- **IV (Correta):** Descreve corretamente a semiologia clássica da dor anginosa típica (isquêmica).\n- **V (Correta):** Resume os principais sinais de alerta e indicações formais de encaminhamento ao cardiologista pediátrico (dor anginosa, exame/ECG/Rx alterados, história familiar de morte súbita/miocardiopatia hipertrófica/QT longo e ansiedade familiar refratária).\n- **A) Incorreta:** Exclui II, III, IV e V, que são verdadeiras.\n- **B) Incorreta:** Exclui I, II, III e IV.\n- **C) Incorreta:** Exclui I, III e V.\n- **D) Incorreta:** Exclui II e IV.",
    "perolaClinica": "A alternativa **E** está correta. Todas as cinco afirmativas (**I, II, III, IV e V**) estão em plena consonância com o **Documento Científico da Sociedade Brasileira de Pediatria (SBP — Departamento Científico de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Etiologias não cardíacas e abordagem da dor torácica na infância e adolescência (SBP).",
      "raciocinioChave": "Todas as cinco afirmativas (I a V) estão corretas e refletem o consenso da SBP sobre dor torácica pediátrica, destacando que as causas são majoritariamente benignas (idiopática, costocondrite e musculoesquelética) e raramente cardiogênicas.",
      "armadilhaBanca": "Excluir alguma das afirmativas sobre dor torácica pediátrica que reproduzem fielmente o documento científico da SBP."
    },
    "mapaDistratores": {
      "A": "Omite incorretamente as afirmativas II, III, IV e V, que também são verdadeiras.",
      "B": "Omite incorretamente as afirmativas I, II, III e IV, igualmente corretas.",
      "C": "Deixa de incluir as afirmativas I, III e V, que estão corretas.",
      "D": "Exclui incorretamente as afirmativas II e IV, ambas verdadeiras."
    }
  },
  {
    "id": "q-uepa-2022-097",
    "code": "Q-UEPA22-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Cardiopatias Congênitas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-cardiopatias-congenitas",
    "tags": [
      "transposicao-das-grandes-arterias",
      "tga",
      "prostaglandina-e1",
      "cardiopatia-congenita-cianotica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém nascido com 18 horas de vida, nascido de parto normal, sem intercorrências, Apgar:8/10, apresentando cianose central, sem melhora com suplementação de oxigenioterapia. Ao exame físico:\nHipoativo, cianótico, taquipneico, hidratado, anictérico.\nAp: mv +, sra FR: 70 ipm, sem desconforto respiratório SO2: 68%\nAC: BCNF RCR 2t, sem sopros FC: 180 bpm PA: 65x40mmhg PCP:4 seg\nAbd: flácido, fígado 2 cm rcd\nSN: hipoativo, fontanela normotensa\nSem edemas. Sem diferença de amplitude de pulsos em membros superiores e inferiores.\nRx tórax: aumento do índice cardiotorácico com aumento da vascularização pulmonar. A silhueta cardíaca apresenta uma forma oval. Aguarda ecocardiograma. Dx:90 mg/dl\nPré natal sem intercorrências. Sem rotura prematura de membranas. Líquido amnioico claro e com grumos. IG: 38 sem e 4 dias. Peso nascimento: 2,8 kg. Diante o exposto, o quadro clinico provável, bem como a medida clinica mais adequada devem ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "coarctaçao da aorta / cirurgia de urgência",
        "explanation": "Incorreta: Coarctação de aorta cursa com **diferença de pulsos e PA entre MMSS e MMII**, não cianose central isolada com coração em ovo e hiperfluxo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "transposiçao das grandes artérias / Prostaglandina E1",
        "explanation": "A alternativa **B** está correta. Recém-nascido a termo nas primeiras 24h de vida com **cianose central intensa (SpO2 68%) refratária ao oxigênio (teste da hiperóxia negativo)**, taquipneia sem desconforto respiratório (\"taquipneia confortável\"), **ausência de sopros**, pulsos simétricos e **radiografia de tórax com cardiomegalia, hiperfluxo pulmonar e silhueta cardíaca ovalada (\"coração em ovo deitado\" / pedículo estreito)** caracteriza classicamente a **Transposição das Grandes Artérias (TGA)** (**SBP / Nelson Pediatria**). Por ser uma **cardiopatia canal-dependente**, a conduta clínica imediata salvadora de vida é iniciar infusão contínua de **Prostaglandina E1 (alprostadil)** para manter o canal arterial pérvio até realização de ecocardiograma e atriosseptostomia por balão (Rashkind) / cirurgia de Jatene.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "CIA / atrioseptoplastia",
        "explanation": "Incorreta: Comunicação interatrial (CIA) é cardiopatia **acianótica** e costuma ser assintomática no período neonatal.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "sepse precoce / ampicilina + gentamicina",
        "explanation": "Incorreta: Não há fatores de risco maternos/obstétricos para sepse precoce, e o padrão radiográfico (\"coração em ovo\" + hiperfluxo) e a cianose refratária a O2 sem desconforto apontam para TGA.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "bronquiolite / B2 inalatório",
        "explanation": "Incorreta: Bronquiolite não ocorre com 18 horas de vida nem causa SpO2 68% sem sibilos/desconforto e com coração ovalado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Recém-nascido a termo nas primeiras 24h de vida com **cianose central intensa (SpO2 68%) refratária ao oxigênio (teste da hiperóxia negativo)**, taquipneia sem desconforto respiratório (\"taquipneia confortável\"), **ausência de sopros**, pulsos simétricos e **radiografia de tórax com cardiomegalia, hiperfluxo pulmonar e silhueta cardíaca ovalada (\"coração em ovo deitado\" / pedículo estreito)** caracteriza classicamente a **Transposição das Grandes Artérias (TGA)** (**SBP / Nelson Pediatria**). Por ser uma **cardiopatia canal-dependente**, a conduta clínica imediata salvadora de vida é iniciar infusão contínua de **Prostaglandina E1 (alprostadil)** para manter o canal arterial pérvio até realização de ecocardiograma e atriosseptostomia por balão (Rashkind) / cirurgia de Jatene.\n- **A) Incorreta:** Coarctação de aorta cursa com **diferença de pulsos e PA entre MMSS e MMII**, não cianose central isolada com coração em ovo e hiperfluxo.\n- **C) Incorreta:** Comunicação interatrial (CIA) é cardiopatia **acianótica** e costuma ser assintomática no período neonatal.\n- **D) Incorreta:** Não há fatores de risco maternos/obstétricos para sepse precoce, e o padrão radiográfico (\"coração em ovo\" + hiperfluxo) e a cianose refratária a O2 sem desconforto apontam para TGA.\n- **E) Incorreta:** Bronquiolite não ocorre com 18 horas de vida nem causa SpO2 68% sem sibilos/desconforto e com coração ovalado.",
    "perolaClinica": "A alternativa **B** está correta. Recém-nascido a termo nas primeiras 24h de vida com **cianose central intensa (SpO2 68%) refratária ao oxigênio (teste da hiperóxia negativo)**, taquipneia sem desconforto respiratório…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico e conduta imediata na transposição das grandes artérias (TGA) neonatal.",
      "raciocinioChave": "Recém-nascido com 18h de vida apresentando cianose central grave (SpO2 68%) refratária ao oxigênio, taquipneia sem desconforto respiratório, ausência de sopros, pulsos simétricos e radiografia com coração em forma de ovo e hiperfluxo pulmonar tem quadro clássico de TGA, necessitando de prostaglandina E1 para manter o canal arterial pérvio.",
      "armadilhaBanca": "Confundir transposição das grandes artérias com sepse precoce ou coarctação de aorta em RN cianótico com pulsos simétricos e coração em ovo."
    },
    "mapaDistratores": {
      "A": "A coarctação de aorta manifesta-se com redução ou assimetria de pulsos e PA entre membros superiores e inferiores, ausente neste caso.",
      "C": "A comunicação interatrial (CIA) é uma cardiopatia acianótica e habitualmente assintomática nas primeiras horas de vida.",
      "D": "Não há fatores de risco obstétricos para sepse precoce, e a cianose refratária a O2 sem desconforto com coração ovalado aponta para TGA.",
      "E": "A bronquiolite não se apresenta com 18 horas de vida nem explica hipoxemia grave sem sibilos e silhueta cardíaca em ovo."
    }
  },
  {
    "id": "q-uepa-2022-098",
    "code": "Q-UEPA22-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Parasitoses Intestinais",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-parasitoses-intestinais",
    "tags": [
      "ascaris-lumbricoides",
      "obstrucao-intestinal",
      "miolo-de-pao",
      "parasitose"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino de 8 anos de idade, evoluindo com distensão e dor abdominal há 5 dias. Refere vômitos escurecidos há 48 h. Sem eliminação de fezes ou flatos há 48 h. Mãe relata piora do estado geral há 24 h.\nAo exame : letárgico, hipocorado, desnutrido, hidratado limítrofe, taquipenia leve, sem sinais de desconforto respiratório, anictérico\nOf: ndn\nAp: mv +, sra FR:30 ipm, sem desconforto SO2:98%\nAc: BCNF rcr 2t, ss Fc: 140 bpm pcp: 2 seg PA: 90 x60 mmhg\nAbd: globoso, dolor a palpação profunda, hipertimpanico; difícil palpar viscromegalia\nSn: letárgico; sem sinais de irritação meníngea\nRx abdômen: imagem sugestiva de miolo de pão.\nDiante do exposto, o diagnóstico e conduta mais apropriada são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "apendicite / apendicectomia",
        "explanation": "Incorreta: Apendicite aguda não produz imagem radiográfica clássica em \"miolo de pão\" com obstrução alta/média franca de 5 dias em criança desnutrida.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "doença do refluxo/ medidas antirefluxo",
        "explanation": "Incorreta: DRGE não causa parada de eliminação de flatos/fezes, distensão hipertimpânica ou vômitos fecaloides.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "colecistite/ colecistectomia",
        "explanation": "Incorreta: Colecistite é rara em escolares e não cursa com imagem de miolo de pão nem obstrução intestinal mecânica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "obstrução intestinal por áscaris/ descompressão gástrica por 48 h/ hidratação venosa/ óleo mineral",
        "explanation": "A alternativa **D** está correta. Escolar desnutrido com quadro clássico de **abdome agudo obstrutivo** (dor e distensão abdominal, parada de eliminação de gases e fezes, vômitos escurecidos/fecaloides) associado à imagem radiográfica típica em **\"miolo de pão\"** (enovelado de vermes com gás interposto) confirma **obstrução intestinal por *Ascaris lumbricoides* (\"bolo de áscaris\")**. Segundo a **SBP / Ministério da Saúde**, na ausência de sinais de peritonite, necrose ou perfuração, a conduta inicial é **clínica conservadora**: **jejum, descompressão gástrica por sonda nasogástrica (por 24–48h), hidratação venosa com correção hidroeletrolítica, antiespasmódicos e óleo mineral via SNG** (para lubrificar e facilitar a eliminação do bolo de vermes — associando-se piperazina quando disponível; **evita-se albendazol/mebendazol na fase aguda obstrutiva** para não causar morte e compactação do bolo).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "gastroenterite/ sais de reidratação oral",
        "explanation": "Incorreta: Há obstrução intestinal (parada de gases e fezes), contraindicando via oral/SRO.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Escolar desnutrido com quadro clássico de **abdome agudo obstrutivo** (dor e distensão abdominal, parada de eliminação de gases e fezes, vômitos escurecidos/fecaloides) associado à imagem radiográfica típica em **\"miolo de pão\"** (enovelado de vermes com gás interposto) confirma **obstrução intestinal por *Ascaris lumbricoides* (\"bolo de áscaris\")**. Segundo a **SBP / Ministério da Saúde**, na ausência de sinais de peritonite, necrose ou perfuração, a conduta inicial é **clínica conservadora**: **jejum, descompressão gástrica por sonda nasogástrica (por 24–48h), hidratação venosa com correção hidroeletrolítica, antiespasmódicos e óleo mineral via SNG** (para lubrificar e facilitar a eliminação do bolo de vermes — associando-se piperazina quando disponível; **evita-se albendazol/mebendazol na fase aguda obstrutiva** para não causar morte e compactação do bolo).\n- **A) Incorreta:** Apendicite aguda não produz imagem radiográfica clássica em \"miolo de pão\" com obstrução alta/média franca de 5 dias em criança desnutrida.\n- **B) Incorreta:** DRGE não causa parada de eliminação de flatos/fezes, distensão hipertimpânica ou vômitos fecaloides.\n- **C) Incorreta:** Colecistite é rara em escolares e não cursa com imagem de miolo de pão nem obstrução intestinal mecânica.\n- **E) Incorreta:** Há obstrução intestinal (parada de gases e fezes), contraindicando via oral/SRO.",
    "perolaClinica": "A alternativa **D** está correta. Escolar desnutrido com quadro clássico de **abdome agudo obstrutivo** (dor e distensão abdominal, parada de eliminação de gases e fezes, vômitos escurecidos/fecaloides) associado à…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico radiológico e manejo conservador inicial da obstrução intestinal por bolo de Ascaris lumbricoides em escolares.",
      "raciocinioChave": "Escolar desnutrido com abdome agudo obstrutivo (parada de gases/fezes, vômitos fecaloides) e imagem radiográfica em \"miolo de pão\" confirma obstrução por áscaris. Sem sinais de peritonite ou estrangulamento, o manejo inicial é conservador com descompressão gástrica, hidratação venosa e óleo mineral.",
      "armadilhaBanca": "Indicar cirurgia de urgência ou hidratação oral diante de obstrução mecânica por áscaris sem sinais de perfuração ou isquemia."
    },
    "mapaDistratores": {
      "A": "A apendicite aguda cursa com dor em fossa ilíaca direita e irritação peritoneal, não produzindo imagem em miolo de pão nem obstrução mecânica franca de 5 dias.",
      "B": "A doença do refluxo gastroesofágico não provoca parada de eliminação de flatos e fezes, distensão hipertimpânica ou vômitos escurecidos/fecaloides.",
      "C": "A colecistite aguda é rara em escolares e manifesta-se com dor em hipocôndrio direito e febre, sem imagem de miolo de pão ou obstrução intestinal.",
      "E": "Na vigência de obstrução intestinal estabelecida e vômitos persistentes, a via oral com sais de reidratação oral é formalmente contraindicada."
    }
  },
  {
    "id": "q-uepa-2022-099",
    "code": "Q-UEPA22-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": [
      "covid-19",
      "prevencao-em-pediatria",
      "imunossuprimidos",
      "medidas-de-controle"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto as medidas de proteção e de controle da disseminação do coronavírus na população pediátrica, recomenda-se:\nI. Lavagem regular das mãos com água e sabão ou uso de álcool gel a 70%.\nII. Evitar ambientes com aglomerações (ex. transportes públicos, supermercados, shoppings) Além de manter o distanciamento social de 1 a 2 metros em locais públicos e viagens devem ser canceladas ou adiadas sempre que possível.\nIII. Suspender as vacina contra Influenza e Pneumococcus, porque podem produzir sintomas que podem confundir com a COVID-19.\nIV. Uso de máscaras a partir de 1 ano de idade.\nV. Deve-se manter o tratamento imunossupressor dos pacientes que fazem uso dos mesmos para tratamento de doenças crônicas. Não existem informações suficientes sobre o efeito do uso destas medicações em uma possível infecção pelo novo coronavírus, a suspensão da medicação pode acarretar reativação da doença de base, com necessidade de internação hospitalar, que poderia aumentar ainda mais o risco de infecção.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
        "explanation": "Incorreta: Inclui III (falsa).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Incorreta: Inclui IV (falsa).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, II e V",
        "explanation": "A alternativa **C** está correta (**I, II e V**). De acordo com as notas técnicas e documentos científicos da **Sociedade Brasileira de Pediatria (SBP)** e da **OMS/CDC** sobre COVID-19 em pediatria: - **I (Correta):** Higiene frequente das mãos com água e sabão ou álcool em gel a 70% é medida central de prevenção. - **II (Correta):** Evitar aglomerações, manter distanciamento físico e adiar viagens não essenciais durante períodos epidêmicos reduzem a transmissão. - **III (Incorreta):** As vacinas contra **Influenza e Pneumococo NÃO devem ser suspensas**; pelo contrário, sua manutenção é fortemente recomendada para prevenir coinfecções respiratórias e hospitalizações. - **IV (Incorreta):** O uso de máscaras é **contraindicado em crianças menores de 2 anos** pelo risco de sufocação/asfixia (recomendado pela SBP/AAP a partir dos **2 anos de idade**, e pela OMS a partir dos 5–6 anos). - **V (Correta):** Recomenda-se **manter** imunossupressores em pacientes com doenças crônicas (reumatológicas, DII, transplantados), pois a suspensão arbitrária desencadeia reativação da doença de base e maior risco de internação.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "II e V",
        "explanation": "Incorreta: Omite a afirmativa I, que está correta.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Incorreta: Inclui III e IV (falsas).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta (**I, II e V**). De acordo com as notas técnicas e documentos científicos da **Sociedade Brasileira de Pediatria (SBP)** e da **OMS/CDC** sobre COVID-19 em pediatria:\n- **I (Correta):** Higiene frequente das mãos com água e sabão ou álcool em gel a 70% é medida central de prevenção.\n- **II (Correta):** Evitar aglomerações, manter distanciamento físico e adiar viagens não essenciais durante períodos epidêmicos reduzem a transmissão.\n- **III (Incorreta):** As vacinas contra **Influenza e Pneumococo NÃO devem ser suspensas**; pelo contrário, sua manutenção é fortemente recomendada para prevenir coinfecções respiratórias e hospitalizações.\n- **IV (Incorreta):** O uso de máscaras é **contraindicado em crianças menores de 2 anos** pelo risco de sufocação/asfixia (recomendado pela SBP/AAP a partir dos **2 anos de idade**, e pela OMS a partir dos 5–6 anos).\n- **V (Correta):** Recomenda-se **manter** imunossupressores em pacientes com doenças crônicas (reumatológicas, DII, transplantados), pois a suspensão arbitrária desencadeia reativação da doença de base e maior risco de internação.\n- **A) Incorreta:** Inclui III (falsa).\n- **B) Incorreta:** Inclui IV (falsa).\n- **D) Incorreta:** Omite a afirmativa I, que está correta.\n- **E) Incorreta:** Inclui III e IV (falsas).",
    "perolaClinica": "A alternativa **C** está correta (**I, II e V**). De acordo com as notas técnicas e documentos científicos da **Sociedade Brasileira de Pediatria (SBP)** e da **OMS/CDC** sobre COVID-19 em pediatria: - **I (Correta):**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Medidas não farmacológicas, vacinação de rotina e manutenção de imunossupressão para controle da COVID-19 em pediatria.",
      "raciocinioChave": "Segundo recomendações pediátricas (SBP/OMS), devem-se manter higiene das mãos (I), distanciamento social/evitar aglomerações (II) e terapias imunossupressoras crônicas (V). As vacinas contra Influenza e Pneumococo devem ser mantidas, e máscaras não são recomendadas para menores de 2 anos.",
      "armadilhaBanca": "Confundir a idade mínima segura para uso de máscaras em crianças (>= 2 anos) ou achar que imunossupressores e vacinas de rotina devem ser suspensos."
    },
    "mapaDistratores": {
      "A": "Inclui a afirmativa III, que é falsa pois a vacinação contra Influenza e Pneumococo deve ser mantida para evitar coinfecções e confundidores clínicos.",
      "B": "Inclui a afirmativa IV, que é incorreta porque o uso de máscaras é contraindicado em crianças menores de 2 anos pelo risco de sufocamento.",
      "D": "Omite a afirmativa I, pois a higienização frequente das mãos com água e sabão ou álcool em gel a 70% é medida fundamental de controle.",
      "E": "Considera verdadeiras as afirmativas III e IV, ignorando que vacinas de rotina devem ser mantidas e máscaras não se indicam com 1 ano de idade."
    }
  },
  {
    "id": "q-uepa-2022-100",
    "code": "Q-UEPA22-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "choque-hipovolemico",
      "choque-descompensado",
      "pals",
      "lactente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2022,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o caso clínico abaixo para responder à questão 100\n\nLactente com 11 meses de idade, evoluindo há 24 horas com diarreia profusa, 8 vezes ao dia, liquida, com odor fétido, sem sangue, acompanhada de vômitos (5 vezes ao dia). Sem febre. Não consegue comer há 12 h, com piora importante do estado geral. Previamente hígido. Aleitamento materno exclusivo até 6º mês de idade.\nAo exame: letárgico, pálido, taquineico, olhos encovados\nOf: saliva espessa\nAP: MV +, sra FR: 60 ipm sem tiragem SO2: 90%\nAc: BCNF RCR 2T, sem sopros FC: 180 bpm Pulsos periféricos finos\nPCP:5 segundos PA: 60x40 mmhg\nAbd: globoso, distendido, flácido, RHA aumentados\nSN:letárgico.\n\nO diagnostico provável no caso acima é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "choque hipovolêmico compensado.",
        "explanation": "Incorreta: No choque compensado a pressão arterial sistólica mantém-se normal (≥ 70 mmHg para 11 meses); como a PAS é 60 mmHg, o choque já é **hipotensivo (descompensado)**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "choque hipovolêmico hipotensivo.",
        "explanation": "A alternativa **B** está correta. Lactente de **11 meses** com perdas gastrintestinais intensas (diarreia profusa + vômitos) evoluindo com sinais francos de hipoperfusão tecidual (**letargia, palidez, pulsos periféricos finos, tempo de enchimento capilar [PCP] de 5 segundos, taquicardia FC 180 bpm**) e **hipotensão arterial** — segundo o **PALS (AHA)**, para lactentes de **1 a 12 meses**, define-se hipotensão quando a **PAS < 70 mmHg** (neste caso, **PA = 60×40 mmHg**). A presença de hipotensão caracteriza **choque hipovolêmico hipotensivo (descompensado)**, exigindo ressuscitação volêmica imediata com cristaloide isotônico (20 mL/kg em bolus).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "choque séptico obstrutivo compensado.",
        "explanation": "Incorreta: Não há sinais de choque obstrutivo (pneumotórax hipertensivo, tamponamento) nem compensação pressórica; o quadro afebril com diarreia e vômitos intensos é tipicamente hipovolêmico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Gastroenterite sem choque.",
        "explanation": "Incorreta: Há múltiplos sinais inequívocos de choque descompensado (letargia, TEC 5 s, pulsos finos, FC 180 bpm, PAS 60 mmHg).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "alergia alimentar.",
        "explanation": "Incorreta: Não há manifestações alérgicas (urticária, angioedema, broncoespasmo) nem relação com alérgeno alimentar.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Lactente de **11 meses** com perdas gastrintestinais intensas (diarreia profusa + vômitos) evoluindo com sinais francos de hipoperfusão tecidual (**letargia, palidez, pulsos periféricos finos, tempo de enchimento capilar [PCP] de 5 segundos, taquicardia FC 180 bpm**) e **hipotensão arterial** — segundo o **PALS (AHA)**, para lactentes de **1 a 12 meses**, define-se hipotensão quando a **PAS < 70 mmHg** (neste caso, **PA = 60×40 mmHg**). A presença de hipotensão caracteriza **choque hipovolêmico hipotensivo (descompensado)**, exigindo ressuscitação volêmica imediata com cristaloide isotônico (20 mL/kg em bolus).\n- **A) Incorreta:** No choque compensado a pressão arterial sistólica mantém-se normal (≥ 70 mmHg para 11 meses); como a PAS é 60 mmHg, o choque já é **hipotensivo (descompensado)**.\n- **C) Incorreta:** Não há sinais de choque obstrutivo (pneumotórax hipertensivo, tamponamento) nem compensação pressórica; o quadro afebril com diarreia e vômitos intensos é tipicamente hipovolêmico.\n- **D) Incorreta:** Há múltiplos sinais inequívocos de choque descompensado (letargia, TEC 5 s, pulsos finos, FC 180 bpm, PAS 60 mmHg).\n- **E) Incorreta:** Não há manifestações alérgicas (urticária, angioedema, broncoespasmo) nem relação com alérgeno alimentar.",
    "perolaClinica": "A alternativa **B** está correta. Lactente de **11 meses** com perdas gastrintestinais intensas (diarreia profusa + vômitos) evoluindo com sinais francos de hipoperfusão tecidual (**letargia, palidez, pulsos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2022 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Classificação hemodinâmica do choque hipovolêmico pediátrico pelo limiar pressórico do PALS.",
      "raciocinioChave": "Lactente de 11 meses com perdas gastrointestinais intensas evolui com sinais graves de hipoperfusão (letargia, pulsos finos, TEC 5 s, FC 180 bpm) e PAS de 60 mmHg. Pelo PALS, PAS < 70 mmHg em lactentes de 1 a 12 meses caracteriza choque hipovolêmico hipotensivo (descompensado).",
      "armadilhaBanca": "Classificar o choque como compensado sem aplicar o ponto de corte de hipotensão sistólica do PALS para lactentes (PAS < 70 mmHg)."
    },
    "mapaDistratores": {
      "A": "No choque compensado a pressão arterial mantém-se normal; para um lactente de 11 meses, PAS de 60 mmHg (< 70 mmHg) define choque hipotensivo.",
      "C": "O quadro afebril por diarreia e vômitos não sugere choque obstrutivo (como tamponamento ou pneumotórax) e já apresenta hipotensão descompensada.",
      "D": "Letargia, enchimento capilar de 5 segundos, pulsos finos, taquicardia de 180 bpm e PAS de 60 mmHg são sinais inequívocos de choque estabelecido.",
      "E": "Ausência de urticária, angioedema, broncoespasmo ou exposição a alérgeno específico afasta alergia alimentar como causa primária da instabilidade."
    }
  }
];
