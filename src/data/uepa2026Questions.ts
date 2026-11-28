import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa UEPA 2026 — Acesso Direto (100 questões: 91 válidas + 9 anuladas comentadas).
 * Gerado a partir de data/provas/uepa-2026.md / data/provas/uepa-2026.jsonl.
 */
export const UEPA_2026_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-uepa-2026-001",
    "code": "Q-UEPA26-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Otorrinolaringologia e Cabeça e Pescoço",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-otorrinolaringologia-e-cabeca-e-pescoco",
    "tags": [
      "rolha-de-cerume",
      "cerolitico",
      "otoscopia",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 75 anos, vem a UBS pois vem apresentando quadro de zumbido em ouvido esquerdo, redução da audição do mesmo ouvido, relata uso diário de hastes de algodão (cotonetes) para higiene. Após otoscopia observa rolha de cera, sem ver membrana timpânica. Neste caso o tratamento instituído deve ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar lavagem auricular guiada por otoscópio na APS.",
        "explanation": "Incorreta: A lavagem auricular imediata sem amolecimento prévio em rolha endurecida/impactada e sem garantia de integridade timpânica aumenta o risco de trauma e dor, além de a irrigação não ser realizada simultaneamente com otoscópio.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "indicar solução otológica cerolitica por cinco dias e reavaliar em sete dias.",
        "explanation": "A alternativa **B** está correta. Diante de rolha de cerume impactada sem visualização da membrana timpânica na Atenção Primária à Saúde (APS), o manejo inicial preconizado pelos Cadernos de Atenção Básica (Ministério da Saúde) e pela diretriz da AAO-HNS é o uso prévio de agente cerolítico/emoliente tópico (por 3 a 5 dias) para amolecimento do cerume e posterior reavaliação (com lavagem auricular apenas se não houver contraindicação como perfuração timpânica).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "encaminhar ao otorrino para avaliação e manejo adequado.",
        "explanation": "Incorreta: Rolha de cerume é condição de alta resolutividade na APS; encaminhamento ao otorrinolaringologista reserva-se a casos refratários, suspeita de perfuração timpânica, cirurgia otológica prévia ou otite externa/média complicada.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "orientar suspensão do uso de hastes de algodão e reavaliar após trinta dias.",
        "explanation": "Incorreta: Apenas suspender cotonetes sem tratamento cerolítico mantém o paciente sintomático com hipoacusia e zumbido por tempo desnecessário.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "orientações sobre a hipoacusia fisiológica do envelhecimento.",
        "explanation": "Incorreta: O paciente apresenta causa reversível e objetiva à otoscopia (rolha de cerume), não devendo ser atribuída à presbiacusia sem resolução da obstrução.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Diante de rolha de cerume impactada sem visualização da membrana timpânica na Atenção Primária à Saúde (APS), o manejo inicial preconizado pelos Cadernos de Atenção Básica (Ministério da Saúde) e pela diretriz da AAO-HNS é o uso prévio de agente cerolítico/emoliente tópico (por 3 a 5 dias) para amolecimento do cerume e posterior reavaliação (com lavagem auricular apenas se não houver contraindicação como perfuração timpânica).\n- **A) Incorreta:** A lavagem auricular imediata sem amolecimento prévio em rolha endurecida/impactada e sem garantia de integridade timpânica aumenta o risco de trauma e dor, além de a irrigação não ser realizada simultaneamente com otoscópio.\n- **C) Incorreta:** Rolha de cerume é condição de alta resolutividade na APS; encaminhamento ao otorrinolaringologista reserva-se a casos refratários, suspeita de perfuração timpânica, cirurgia otológica prévia ou otite externa/média complicada.\n- **D) Incorreta:** Apenas suspender cotonetes sem tratamento cerolítico mantém o paciente sintomático com hipoacusia e zumbido por tempo desnecessário.\n- **E) Incorreta:** O paciente apresenta causa reversível e objetiva à otoscopia (rolha de cerume), não devendo ser atribuída à presbiacusia sem resolução da obstrução.",
    "perolaClinica": "A alternativa **B** está correta. Diante de rolha de cerume impactada sem visualização da membrana timpânica na Atenção Primária à Saúde (APS), o manejo inicial preconizado pelos Cadernos de Atenção Básica (Ministério da Saúde) e pela diretriz da AAO-HNS é o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo inicial da rolha de cerume impactada na Atenção Primária à Saúde.",
      "raciocinioChave": "Diante de rolha de cerume obstruindo totalmente a visualização timpânica e associada a uso de hastes flexíveis, a conduta inicial recomendada na APS é o uso de solução otológica cerolítica por 5 dias para amolecimento, com reavaliação programada em 7 dias.",
      "armadilhaBanca": "Indicar lavagem auricular imediata na UBS antes de amolecer o cerume impactado ou encaminhar desnecessariamente um caso básico de APS ao otorrinolaringologista."
    },
    "mapaDistratores": {
      "A": "Realizar lavagem auricular imediata sem amolecimento prévio em rolha impactada e sem visualizar a integridade timpânica eleva o risco de dor e perfuração, além de não ser feita simultaneamente com otoscópio.",
      "C": "O manejo da rolha de cerume é atribuição resolutiva da APS; o encaminhamento ao otorrino reserva-se a casos refratários ou suspeita de perfuração/cirurgia prévia.",
      "D": "Apenas suspender o uso de cotonetes sem prescrever cerolítico prolonga desnecessariamente a hipoacusia e o zumbido do paciente.",
      "E": "Atribuir os sintomas à presbiacusia ignora uma causa mecânica reversível objetivamente identificada à otoscopia."
    }
  },
  {
    "id": "q-uepa-2026-002",
    "code": "Q-UEPA26-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "hipertensao-resistente",
      "espironolactona",
      "has",
      "mrpa"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em atendimento na UBS, você avalia homem de 59 anos, hipertenso há seis anos, sem lesão de órgão alvo e exames todos normais para investigar hipertensão secundária. Em uso de losartana 50 mg 2x dia, hidroclorotiazida 50 mg 1x pela manhã, anlodipino 10 mg pela manhã, sinvastatina 40 mg pela noite, trazendo MRPA com pressão média 155 por 95 mmHg. O manejo adequado para controle da pressão arterial, neste caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar espironolactona associada as drogas já instituídas.",
        "explanation": "A alternativa **A** está correta. O paciente preenche critérios de **hipertensão arterial resistente verdadeira** (PA não controlada na MRPA ≥ 130/80 mmHg apesar de 3 anti-hipertensivos de classes distintas em doses otimizadas — BRA + diurético tiazídico + bloqueador de canal de cálcio — com causa secundária excluída). Segundo a Diretriz Brasileira de Hipertensão Arterial (SBC) e o estudo PATHWAY-2, a **espironolactona** (antagonista do receptor mineralocorticoide) é o quarto fármaco de primeira escolha associado ao esquema tríplice.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "substituir anlodipino por um betabloqueador.",
        "explanation": "Incorreta: Betabloqueadores não são superiores à espironolactona na HAS resistente e não devem substituir o bloqueador de canal de cálcio sem indicação específica (como DAC ou IC).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "encaminhar ao cardiologista para avaliação e manejo.",
        "explanation": "Incorreta: Sem lesão de órgão-alvo e com investigação secundária normal, a introdução da 4ª droga (espironolactona) pode e deve ser iniciada na própria APS.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "substituir hidroclorotiazida por espironolactona e reavaliar em três meses.",
        "explanation": "Incorreta: A espironolactona deve ser adicionada ao esquema tríplice (mantendo o tiazídico), e não usada em substituição à hidroclorotiazida.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "iniciar AAS como medida de prevenção secundaria otimizando estatina.",
        "explanation": "Incorreta: O paciente não tem doença aterosclerótica estabelecida (não há indicação de AAS em prevenção secundária) e a conduta não trata a hipertensão resistente.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O paciente preenche critérios de **hipertensão arterial resistente verdadeira** (PA não controlada na MRPA ≥ 130/80 mmHg apesar de 3 anti-hipertensivos de classes distintas em doses otimizadas — BRA + diurético tiazídico + bloqueador de canal de cálcio — com causa secundária excluída). Segundo a Diretriz Brasileira de Hipertensão Arterial (SBC) e o estudo PATHWAY-2, a **espironolactona** (antagonista do receptor mineralocorticoide) é o quarto fármaco de primeira escolha associado ao esquema tríplice.\n- **B) Incorreta:** Betabloqueadores não são superiores à espironolactona na HAS resistente e não devem substituir o bloqueador de canal de cálcio sem indicação específica (como DAC ou IC).\n- **C) Incorreta:** Sem lesão de órgão-alvo e com investigação secundária normal, a introdução da 4ª droga (espironolactona) pode e deve ser iniciada na própria APS.\n- **D) Incorreta:** A espironolactona deve ser adicionada ao esquema tríplice (mantendo o tiazídico), e não usada em substituição à hidroclorotiazida.\n- **E) Incorreta:** O paciente não tem doença aterosclerótica estabelecida (não há indicação de AAS em prevenção secundária) e a conduta não trata a hipertensão resistente.",
    "perolaClinica": "A alternativa **A** está correta. O paciente preenche critérios de **hipertensão arterial resistente verdadeira** (PA não controlada na MRPA ≥ 130/80 mmHg apesar de 3 anti-hipertensivos de classes distintas em doses otimizadas — BRA + diurético tiazídico +…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Tratamento farmacológico da hipertensão arterial resistente verdadeira com espironolactona.",
      "raciocinioChave": "Paciente com HAS não controlada na MRPA (155x95 mmHg) em uso de três classes em doses plenas (BRA + tiazídico + BCC) e causas secundárias descartadas preenche critérios de hipertensão resistente, tendo a adição de espironolactona como 4ª droga de escolha.",
      "armadilhaBanca": "Substituir uma das três classes já em uso (tiazídico ou BCC) pela espironolactona ou encaminhar prematuramente ao especialista em vez de adicionar a 4ª droga na APS."
    },
    "mapaDistratores": {
      "B": "Substituir o bloqueador de canal de cálcio por betabloqueador é inferior à adição de espironolactona na HAS resistente, salvo indicação específica como DAC ou IC.",
      "C": "Na ausência de lesão de órgão-alvo e com investigação secundária normal, o início da 4ª droga deve ser conduzido diretamente na UBS sem postergar o controle pressórico.",
      "D": "A espironolactona deve ser adicionada ao esquema tríplice vigente, mantendo a hidroclorotiazida para efeito sinérgico na hipertensão resistente.",
      "E": "Não há doença cardiovascular aterosclerótica estabelecida que indique AAS em prevenção secundária, e a medida não trata a PA elevada."
    }
  },
  {
    "id": "q-uepa-2026-003",
    "code": "Q-UEPA26-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Demências e Delirium",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-demencias-e-delirium",
    "tags": [
      "demencia-por-corpos-de-lewy",
      "alucinacoes-visuais",
      "parkinsonismo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Idosa de 75 anos vem acompanhada dos filhos na UBS para consulta, paciente HAS e DM sem outras comorbidades, apresenta quadro de esquecimento, rigidez muscular, relatando que está vendo pessoas que não estão lá e sentindo aranhas nos braços iniciado gradualmente há seis meses. A conduta a ser instituída neste caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar lítio dose gradual.",
        "explanation": "Incorreta: Lítio não tem indicação em quadros demenciais com alucinações e apresenta alto risco de neurotoxicidade em idosos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "solicitar hemograma e VHS/PCR.",
        "explanation": "Incorreta: Embora exames gerais façam parte do rastreio de causas reversíveis de demência (TSH, B12, sorologias), hemograma e VHS/PCR isoladamente não conduzem a investigação específica nem substituem a referência neurológica diante de parkinsonismo com alucinações.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "iniciar haloperidol gotas VO.",
        "explanation": "Incorreta: Antipsicóticos típicos como o haloperidol são **contraindicados** na suspeita de Demência por Corpos de Lewy pelo risco grave de hipersensibilidade a neurolépticos (piora catastrófica do parkinsonismo, sedação excessiva e síndrome neuroléptica maligna).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar parecer da psicologia.",
        "explanation": "Incorreta: Não se trata de transtorno puramente psicológico, mas de provável doença neurodegenerativa.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "encaminhar ao neurologista.",
        "explanation": "A alternativa **E** está correta. A associação de declínio cognitivo progressivo, parkinsonismo (rigidez muscular) e alucinações visuais bem formadas/táteis de evolução subaguda/crônica (6 meses) é altamente sugestiva de **Demência por Corpos de Lewy (DCL)**, exigindo avaliação especializada pelo neurologista para confirmação diagnóstica, neuroimagem e manejo seguro (como inibidores da acetilcolinesterase), conforme recomendações da Academia Brasileira de Neurologia (ABN).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. A associação de declínio cognitivo progressivo, parkinsonismo (rigidez muscular) e alucinações visuais bem formadas/táteis de evolução subaguda/crônica (6 meses) é altamente sugestiva de **Demência por Corpos de Lewy (DCL)**, exigindo avaliação especializada pelo neurologista para confirmação diagnóstica, neuroimagem e manejo seguro (como inibidores da acetilcolinesterase), conforme recomendações da Academia Brasileira de Neurologia (ABN).\n- **A) Incorreta:** Lítio não tem indicação em quadros demenciais com alucinações e apresenta alto risco de neurotoxicidade em idosos.\n- **B) Incorreta:** Embora exames gerais façam parte do rastreio de causas reversíveis de demência (TSH, B12, sorologias), hemograma e VHS/PCR isoladamente não conduzem a investigação específica nem substituem a referência neurológica diante de parkinsonismo com alucinações.\n- **C) Incorreta:** Antipsicóticos típicos como o haloperidol são **contraindicados** na suspeita de Demência por Corpos de Lewy pelo risco grave de hipersensibilidade a neurolépticos (piora catastrófica do parkinsonismo, sedação excessiva e síndrome neuroléptica maligna).\n- **D) Incorreta:** Não se trata de transtorno puramente psicológico, mas de provável doença neurodegenerativa.",
    "perolaClinica": "A alternativa **E** está correta. A associação de declínio cognitivo progressivo, parkinsonismo (rigidez muscular) e alucinações visuais bem formadas/táteis de evolução subaguda/crônica (6 meses) é altamente sugestiva de **Demência por Corpos de Lewy (DCL)**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Suspeita de Demência por Corpos de Lewy e risco de iatrogenia por antipsicóticos típicos na APS.",
      "raciocinioChave": "Declínio cognitivo progressivo associado a rigidez muscular (parkinsonismo) e alucinações visuais/táteis bem formadas há 6 meses é altamente sugestivo de Demência por Corpos de Lewy, demandando encaminhamento ao neurologista para confirmação e manejo especializado.",
      "armadilhaBanca": "Prescrever haloperidol para controlar as alucinações visuais em paciente com provável Demência por Corpos de Lewy, desencadeando grave hipersensibilidade a neurolépticos."
    },
    "mapaDistratores": {
      "A": "O lítio não é indicado em quadros demenciais com alucinações e apresenta estreita janela terapêutica com alto risco de neurotoxicidade em idosos.",
      "B": "Hemograma e provas inflamatórias isolados são insuficientes para investigar causas reversíveis de demência (que exigiriam TSH, B12, sorologias) e não substituem a avaliação neurológica.",
      "C": "O haloperidol é fortemente contraindicado na suspeita de Demência por Corpos de Lewy pelo risco de hipersensibilidade grave a neurolépticos e piora catastrófica do parkinsonismo.",
      "D": "O quadro apresenta sinais orgânicos neurodegenerativos claros (parkinsonismo e demência), não devendo ser manejado apenas com encaminhamento psicológico."
    }
  },
  {
    "id": "q-uepa-2026-004",
    "code": "Q-UEPA26-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": [
      "acuracia",
      "testes-diagnosticos",
      "epidemiologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Ao participar de um treinamento sobre testes rápidos para Tuberculose em crianças, foi dito que o poder de acurácia de um teste era alto, quando:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a probabilidade de um teste dar um resultado negativo para pessoas que não possuem a doença ou condição em questão.",
        "explanation": "Incorreta: Define **especificidade** ($\\frac{VN}{VN + FP}$).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a capacidade do teste de identificar corretamente indivíduos que possuem a condição de interesse, ou seja, a probabilidade de um resultado positivo dado que a pessoa está doente.",
        "explanation": "Incorreta: Define **sensibilidade** ($\\frac{VP}{VP + FN}$).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a probabilidade ou condição de um item, pessoa ou sistema antes de uma intervenção, avaliação ou teste, servindo como linha de base para medir mudanças futuras.",
        "explanation": "Incorreta: Define a **probabilidade pré-teste** (ou linha de base/prevalência).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a proporção total de acertos, verdadeiros positivos e verdadeiros negativos, em relação a todos os indivíduos testados.",
        "explanation": "A alternativa **D** está correta. Em epidemiologia clínica (Fletcher / Gordis), a **acurácia** (ou eficácia global) de um teste diagnóstico é definida como a proporção de resultados corretos — soma dos verdadeiros positivos (VP) e verdadeiros negativos (VN) — dividida pelo total de indivíduos testados: $\\text{Acurácia} = \\frac{VP + VN}{VP + VN + FP + FN}$.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "a probabilidade de um resultado positivo ser verdadeiro, indicando a chance de um indivíduo realmente ter a doença ou condição.",
        "explanation": "Incorreta: Define o **valor preditivo positivo (VPP)** ($\\frac{VP}{VP + FP}$).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Em epidemiologia clínica (Fletcher / Gordis), a **acurácia** (ou eficácia global) de um teste diagnóstico é definida como a proporção de resultados corretos — soma dos verdadeiros positivos (VP) e verdadeiros negativos (VN) — dividida pelo total de indivíduos testados: $\\text{Acurácia} = \\frac{VP + VN}{VP + VN + FP + FN}$.\n- **A) Incorreta:** Define **especificidade** ($\\frac{VN}{VN + FP}$).\n- **B) Incorreta:** Define **sensibilidade** ($\\frac{VP}{VP + FN}$).\n- **C) Incorreta:** Define a **probabilidade pré-teste** (ou linha de base/prevalência).\n- **E) Incorreta:** Define o **valor preditivo positivo (VPP)** ($\\frac{VP}{VP + FP}$).",
    "perolaClinica": "A alternativa **D** está correta. Em epidemiologia clínica (Fletcher / Gordis), a **acurácia** (ou eficácia global) de um teste diagnóstico é definida como a proporção de resultados corretos — soma dos verdadeiros positivos (VP) e verdadeiros negativos (VN) —…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Definição epidemiológica de acurácia em testes diagnósticos (tabela 2x2).",
      "raciocinioChave": "A acurácia representa a proporção total de classificações corretas do teste — ou seja, a soma dos verdadeiros positivos e verdadeiros negativos dividida pelo total de indivíduos testados: (VP + VN) / N.",
      "armadilhaBanca": "Confundir a definição de acurácia global com especificidade, sensibilidade ou valor preditivo positivo de um teste diagnóstico."
    },
    "mapaDistratores": {
      "A": "Descreve a especificidade do teste, que mede a probabilidade de resultado negativo entre indivíduos verdadeiramente sem a doença.",
      "B": "Corresponde à sensibilidade do teste, definida pela proporção de resultados positivos entre os indivíduos doentes.",
      "C": "Refere-se à probabilidade pré-teste ou prevalência basal da condição antes da aplicação do exame diagnóstico.",
      "E": "Define o valor preditivo positivo (VPP), que expressa a probabilidade de doença real após um resultado positivo no teste."
    }
  },
  {
    "id": "q-uepa-2026-005",
    "code": "Q-UEPA26-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": [
      "vpp",
      "tabela-2x2",
      "sensibilidade",
      "especificidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você está utilizando USG para diagnostico de estenose de carótidas em 1.000 idosos com hipertensão arterial, como forma de prevenção de AVEi. Considerando que a sensibilidade e a especificidade da técnica do USG utilizado é de 90% e que a incidência de estenose de carótida nesta população é de 20%. O valor preditivo positivo desta técnica por USG para avaliar carótidas é de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "6,92%",
        "explanation": "Incorreta: Erro de casa decimal (10× menor que o valor real).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "69,2%",
        "explanation": "A alternativa **B** está correta. Montando a tabela 2×2 para $N = 1.000$ idosos com frequência da doença de 20%:",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "692,0%",
        "explanation": "Incorreta: Probabilidade/porcentagem nunca pode exceder 100%.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "0,6%",
        "explanation": "Incorreta: Valor incompatível com a razão $180/260$.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "0,06%",
        "explanation": "Incorreta: Valor incompatível com a razão $180/260$.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Montando a tabela 2×2 para $N = 1.000$ idosos com frequência da doença de 20%:\n- Doentes = $20\\% \\times 1.000 = 200$; Não doentes = $800$.\n- Com sensibilidade = 90%: Verdadeiros Positivos ($VP$) = $0{,}90 \\times 200 = 180$ (e $FN = 20$).\n- Com especificidade = 90%: Verdadeiros Negativos ($VN$) = $0{,}90 \\times 800 = 720$; logo, Falsos Positivos ($FP$) = $800 - 720 = 80$.\n- Aplicando a fórmula do Valor Preditivo Positivo (Fletcher / Gordis): $VPP = \\frac{VP}{VP + FP} = \\frac{180}{180 + 80} = \\frac{180}{260} \\approx 0{,}6923 = 69{,}2\\%$.\n- **A) Incorreta:** Erro de casa decimal (10× menor que o valor real).\n- **C) Incorreta:** Probabilidade/porcentagem nunca pode exceder 100%.\n- **D) Incorreta:** Valor incompatível com a razão $180/260$.\n- **E) Incorreta:** Valor incompatível com a razão $180/260$.",
    "perolaClinica": "A alternativa **B** está correta. Montando a tabela 2×2 para $N = 1.000$ idosos com frequência da doença de",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Cálculo do Valor Preditivo Positivo (VPP) a partir de sensibilidade, especificidade e prevalência.",
      "raciocinioChave": "Em N=1.000 com prevalência de 20% (200 doentes e 800 sadios), S=90% gera 180 VP e E=90% gera 720 VN (80 FP); logo, VPP = VP / (VP + FP) = 180 / (180 + 80) = 180 / 260 ≈ 69,2%.",
      "armadilhaBanca": "Erros de arredondamento ou deslocamento de vírgula decimal (6,92% ou 692,0%) ao calcular o Valor Preditivo Positivo pela tabela 2x2."
    },
    "mapaDistratores": {
      "A": "Resulta de erro de casa decimal ao não multiplicar o quociente 180/260 (0,692) por 100 para expressar em porcentagem.",
      "C": "Porcentagem de probabilidade clínica jamais pode ultrapassar 100%, indicando erro de multiplicação por 1.000 em vez de 100.",
      "D": "Valor numericamente incompatível com a razão de 180 verdadeiros positivos entre 260 testes positivos totais.",
      "E": "Valor numericamente incompatível que subestima em mil vezes a probabilidade real obtida na tabela 2x2."
    }
  },
  {
    "id": "q-uepa-2026-006",
    "code": "Q-UEPA26-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "pnab",
      "adscricao-de-usuarios",
      "duplo-vinculo",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Trabalhadores sazonais que residem em dois territórios solicitam vinculação a duas UBS para garantir acompanhamento. A conduta prevista pela PNAB, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "garantir vínculo único por usuário, sem possibilidade de cadastro em serviço adicional.",
        "explanation": "Incorreta: A territorialização na PNAB não pode funcionar como barreira de acesso.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "permitir vinculação a mais de uma UBS/EAB quando necessário, assegurando continuidade do cuidado e acesso ampliado.",
        "explanation": "A alternativa **B** está correta. A Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017) prevê a flexibilização da territorialização e adscrição quando necessário para garantir o acesso universal e a longitudinalidade do cuidado (como trabalhadores sazonais, população em situação de rua ou usuários que circulam entre dois territórios), permitindo a vinculação a mais de uma UBS/eAB.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "autorizar duplo vínculo apenas para gestantes em seguimento específico de pré-natal.",
        "explanation": "Incorreta: Não há restrição do duplo vínculo apenas a gestantes.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "autorizar duplo vínculo exclusivamente para pessoas em cuidados paliativos domiciliares.",
        "explanation": "Incorreta: Não há limitação exclusiva para cuidados paliativos domiciliares.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "condicionar duplo vínculo à determinação judicial, conforme pactuação municipal extraordinária.",
        "explanation": "Incorreta: A garantia de acesso e vínculo é diretriz administrativa e assistencial do SUS, não dependendo de determinação judicial.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. A Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017) prevê a flexibilização da territorialização e adscrição quando necessário para garantir o acesso universal e a longitudinalidade do cuidado (como trabalhadores sazonais, população em situação de rua ou usuários que circulam entre dois territórios), permitindo a vinculação a mais de uma UBS/eAB.\n- **A) Incorreta:** A territorialização na PNAB não pode funcionar como barreira de acesso.\n- **C) Incorreta:** Não há restrição do duplo vínculo apenas a gestantes.\n- **D) Incorreta:** Não há limitação exclusiva para cuidados paliativos domiciliares.\n- **E) Incorreta:** A garantia de acesso e vínculo é diretriz administrativa e assistencial do SUS, não dependendo de determinação judicial.",
    "perolaClinica": "A alternativa **B** está correta. A Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017) prevê a flexibilização da territorialização e adscrição quando necessário para garantir o acesso universal e a longitudinalidade do cuidado (como…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Flexibilização da adscrição territorial e duplo vínculo na Atenção Básica segundo a PNAB.",
      "raciocinioChave": "A PNAB (Portaria nº 2.436/2017) assegura que a territorialização não deve restringir o acesso universal, permitindo a vinculação de usuários itinerantes ou trabalhadores sazonais a mais de uma UBS/eAB para garantir longitudinalidade e continuidade do cuidado.",
      "armadilhaBanca": "Aplicar a regra de territorialização de forma rígida como barreira de acesso ou limitar o duplo vínculo apenas a grupos específicos (gestantes ou paliativos)."
    },
    "mapaDistratores": {
      "A": "A PNAB proíbe que a adscrição geográfica funcione como barreira burocrática de acesso para populações com mobilidade territorial.",
      "C": "O direito ao duplo vínculo em situações de circulação entre territórios não se restringe a gestantes em acompanhamento pré-natal.",
      "D": "A flexibilização da vinculação na APS aplica-se a qualquer usuário cuja dinâmica de vida exija acesso em dois territórios, não apenas a pacientes em cuidados paliativos.",
      "E": "A garantia de acesso e continuidade assistencial é diretriz administrativa do SUS prevista na própria PNAB, dispensando judicialização."
    }
  },
  {
    "id": "q-uepa-2026-007",
    "code": "Q-UEPA26-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "pnab",
      "equipes-por-ubs",
      "gestao-aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A gestão cogita instalar seis equipes em uma única UBS para ampliar cobertura. O parâmetro que orienta essa decisão segundo a PNAB, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "autorizar qualquer número de equipes se houver espaço físico.",
        "explanation": "Incorreta: A PNAB estabelece teto recomendado de equipes por UBS, não autorizando número ilimitado.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "recomendar no máximo duas equipes por UBS para evitar redundância.",
        "explanation": "Incorreta: O parâmetro recomendado é de até quatro equipes, não duas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "recomendar até quatro equipes por UBS para garantir potencial resolutivo.",
        "explanation": "A alternativa **C** está correta. De acordo com a Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017), recomenda-se que cada Unidade Básica de Saúde (UBS) abrigue **até quatro equipes** (eSF ou eAB), de modo a preservar o potencial resolutivo, a ambiência adequada e o vínculo com o território.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "obrigar apenas uma equipe por UBS para fortalecer vínculo.",
        "explanation": "Incorreta: Não há obrigatoriedade de apenas uma equipe por UBS.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "definir número de equipes exclusivamente por decisão política local, sem parâmetros técnicos.",
        "explanation": "Incorreta: O dimensionamento segue parâmetros técnicos previstos na PNAB e nas normas de infraestrutura do Ministério da Saúde.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com a Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017), recomenda-se que cada Unidade Básica de Saúde (UBS) abrigue **até quatro equipes** (eSF ou eAB), de modo a preservar o potencial resolutivo, a ambiência adequada e o vínculo com o território.\n- **A) Incorreta:** A PNAB estabelece teto recomendado de equipes por UBS, não autorizando número ilimitado.\n- **B) Incorreta:** O parâmetro recomendado é de até quatro equipes, não duas.\n- **D) Incorreta:** Não há obrigatoriedade de apenas uma equipe por UBS.\n- **E) Incorreta:** O dimensionamento segue parâmetros técnicos previstos na PNAB e nas normas de infraestrutura do Ministério da Saúde.",
    "perolaClinica": "A alternativa **C** está correta. De acordo com a Política Nacional de Atenção Básica (PNAB — Portaria GM/MS nº 2.436/2017), recomenda-se que cada Unidade Básica de Saúde (UBS) abrigue **até quatro equipes** (eSF ou eAB), de modo a preservar o potencial…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Parâmetro recomendado pela PNAB para o número máximo de equipes por UBS.",
      "raciocinioChave": "Segundo a PNAB (Portaria nº 2.436/2017), recomenda-se o limite de até quatro equipes (eSF ou eAB) por Unidade Básica de Saúde para preservar a ambiência, a resolutividade e a qualidade do vínculo territorial.",
      "armadilhaBanca": "Supor que a quantidade de equipes por UBS depende apenas de espaço físico ou decisão política local, ignorando o teto técnico recomendado pela PNAB."
    },
    "mapaDistratores": {
      "A": "A PNAB estabelece parâmetro máximo recomendado de equipes por unidade, não liberando número ilimitado conforme disponibilidade de espaço físico.",
      "B": "O teto recomendado pela normativa vigente para garantir potencial resolutivo é de até quatro equipes por UBS, e não apenas duas.",
      "D": "Não existe obrigatoriedade de manter apenas uma equipe por UBS; a recomendação admite até quatro equipes na mesma estrutura física.",
      "E": "O dimensionamento das equipes segue critérios técnicos da PNAB e de infraestrutura do Ministério da Saúde, e não apenas conveniência política local."
    }
  },
  {
    "id": "q-uepa-2026-008",
    "code": "Q-UEPA26-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "hierarquizacao",
      "regionalizacao",
      "referencia-e-contrarreferencia",
      "sus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Encaminhamentos diretos para alta complexidade causam filas desordenadas e ociosidade na APS. Neste caso, a diretriz contrariada, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Universalidade sem critérios clínicos.",
        "explanation": "Incorreta: Universalidade garante acesso a todos os cidadãos, mas não dispensa organização dos fluxos clínicos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Hierarquização e regionalização com referência e contrarreferência.",
        "explanation": "A alternativa **B** está correta. Pela Constituição Federal (art. 198) e pela Lei nº 8.080/1990 (art. 7º), a organização dos serviços em níveis crescentes de densidade tecnológica com fluxos regulados entre a Atenção Primária e os serviços especializados/hospitalares corresponde à diretriz organizativa de **regionalização e hierarquização**, operacionalizada pelos mecanismos de **referência e contrarreferência**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Equidade com priorização de vulneráveis.",
        "explanation": "Incorreta: Equidade trata da distribuição desigual de recursos conforme desigualdades de necessidade, não especificamente do fluxo entre níveis de complexidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Complementaridade privada contratualizada.",
        "explanation": "Incorreta: Refere-se à participação complementar da iniciativa privada quando há insuficiência da rede pública.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Participação social deliberativa.",
        "explanation": "Incorreta: Refere-se ao controle social (Conselhos e Conferências de Saúde).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Pela Constituição Federal (art. 198) e pela Lei nº 8.080/1990 (art. 7º), a organização dos serviços em níveis crescentes de densidade tecnológica com fluxos regulados entre a Atenção Primária e os serviços especializados/hospitalares corresponde à diretriz organizativa de **regionalização e hierarquização**, operacionalizada pelos mecanismos de **referência e contrarreferência**.\n- **A) Incorreta:** Universalidade garante acesso a todos os cidadãos, mas não dispensa organização dos fluxos clínicos.\n- **C) Incorreta:** Equidade trata da distribuição desigual de recursos conforme desigualdades de necessidade, não especificamente do fluxo entre níveis de complexidade.\n- **D) Incorreta:** Refere-se à participação complementar da iniciativa privada quando há insuficiência da rede pública.\n- **E) Incorreta:** Refere-se ao controle social (Conselhos e Conferências de Saúde).",
    "perolaClinica": "A alternativa **B** está correta. Pela Constituição Federal (art. 198) e pela Lei nº 8.080/1990 (art. 7º), a organização dos serviços em níveis crescentes de densidade tecnológica com fluxos regulados entre a Atenção Primária e os serviços…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diretrizes organizativas do SUS: regionalização, hierarquização e fluxo de referência e contrarreferência.",
      "raciocinioChave": "A ida direta à alta complexidade gera filas e ociosidade na APS por violar a organização dos serviços em níveis crescentes de densidade tecnológica. Pela CF/88 e Lei nº 8.080/1990, esse ordenamento corresponde à hierarquização e regionalização mediadas por referência e contrarreferência.",
      "armadilhaBanca": "Confundir diretrizes organizativas do fluxo assistencial (hierarquização/regionalização) com princípios doutrinários amplos como universalidade ou equidade."
    },
    "mapaDistratores": {
      "A": "A universalidade assegura acesso irrestrito de direito ao sistema, mas exige regulação de fluxos clínicos para organizar a rede.",
      "C": "A equidade busca reduzir desigualdades alocando recursos conforme a vulnerabilidade, não definindo a organização por níveis de complexidade.",
      "D": "A complementaridade privada trata apenas da contratação de serviços privados quando a rede pública própria é insuficiente.",
      "E": "A participação social deliberativa refere-se ao controle social exercido nos Conselhos e Conferências de Saúde."
    }
  },
  {
    "id": "q-uepa-2026-009",
    "code": "Q-UEPA26-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Esquizofrenia e Transtornos Psicóticos",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-esquizofrenia-e-transtornos-psicoticos",
    "tags": [
      "transtorno-delirante",
      "delirios-persecutorios",
      "psiquiatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 40 anos com delírios persecutórios há 2 meses, sem alucinações auditivas, sem prejuízo grave no funcionamento. Neste caso o provável diagnóstico, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transtorno delirante",
        "explanation": "A alternativa **A** está correta. Segundo o **DSM-5-TR**, o **transtorno delirante** caracteriza-se pela presença de um ou mais delírios com duração ≥ 1 mês, sem preencher o Critério A para esquizofrenia (ausência de alucinações proeminentes, discurso desorganizado ou sintomas negativos) e com funcionamento psicossocial global preservado fora do impacto direto do delírio.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Esquizofrenia",
        "explanation": "Incorreta: A esquizofrenia exige duração total ≥ 6 meses (com pelo menos 1 mês de sintomas da fase ativa incluindo ≥ 2 sintomas do Critério A) e queda acentuada do funcionamento.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Transtorno esquizoafetivo",
        "explanation": "Incorreta: O transtorno esquizoafetivo requer episódio de humor maior (depressivo ou maníaco) concomitante ao Critério A de esquizofrenia.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Transtorno psicótico breve",
        "explanation": "Incorreta: O transtorno psicótico breve dura de 1 dia até menos de 1 mês (aqui o quadro já dura 2 meses).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Transtorno bipolar com sintomas psicóticos",
        "explanation": "Incorreta: Não há relato de episódio maníaco ou depressivo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Segundo o **DSM-5-TR**, o **transtorno delirante** caracteriza-se pela presença de um ou mais delírios com duração ≥ 1 mês, sem preencher o Critério A para esquizofrenia (ausência de alucinações proeminentes, discurso desorganizado ou sintomas negativos) e com funcionamento psicossocial global preservado fora do impacto direto do delírio.\n- **B) Incorreta:** A esquizofrenia exige duração total ≥ 6 meses (com pelo menos 1 mês de sintomas da fase ativa incluindo ≥ 2 sintomas do Critério A) e queda acentuada do funcionamento.\n- **C) Incorreta:** O transtorno esquizoafetivo requer episódio de humor maior (depressivo ou maníaco) concomitante ao Critério A de esquizofrenia.\n- **D) Incorreta:** O transtorno psicótico breve dura de 1 dia até menos de 1 mês (aqui o quadro já dura 2 meses).\n- **E) Incorreta:** Não há relato de episódio maníaco ou depressivo.",
    "perolaClinica": "A alternativa **A** está correta. Segundo o **DSM-5-TR**, o **transtorno delirante** caracteriza-se pela presença de um ou mais delírios com duração ≥ 1 mês, sem preencher o Critério A para esquizofrenia (ausência de alucinações proeminentes, discurso…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critérios diagnósticos do transtorno delirante segundo o DSM-5-TR (duração e preservação funcional).",
      "raciocinioChave": "Delírios isolados há 2 meses (≥ 1 mês), sem alucinações proeminentes, sintomas de humor ou prejuízo funcional acentuado, preenchem os critérios de transtorno delirante. A ausência de outros sintomas do Critério A e a duração inferior a 6 meses descartam esquizofrenia.",
      "armadilhaBanca": "Confundir transtorno psicótico breve (< 1 mês), transtorno delirante (≥ 1 mês sem Critério A completo) e esquizofrenia (≥ 6 meses com queda funcional)."
    },
    "mapaDistratores": {
      "B": "A esquizofrenia exige duração total mínima de 6 meses, pelo menos dois sintomas do Critério A na fase ativa e declínio funcional acentuado.",
      "C": "O transtorno esquizoafetivo demanda episódio de humor maior concomitante ao Critério A de esquizofrenia.",
      "D": "O transtorno psicótico breve tem duração limitada entre 1 dia e menos de 1 mês, incompatível com evolução de 2 meses.",
      "E": "O transtorno bipolar com sintomas psicóticos exige ocorrência de episódio maníaco ou depressivo maior associado."
    }
  },
  {
    "id": "q-uepa-2026-010",
    "code": "Q-UEPA26-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "pnab",
      "carga-horaria",
      "composicao-de-equipes",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A equipe planeja quatro profissionais da mesma categoria, cada um com 12h semanais. De acordo com a PNAB, a alternativa correta, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aceitar sem limite de número profissionais por categoria.",
        "explanation": "Incorreta: Há limite expresso de até 3 profissionais por categoria.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "aceitar cargas mínimas de 5h semanais por profissional, desde que a soma alcance 40h.",
        "explanation": "Incorreta: A carga horária mínima individual prevista na PNAB é de 10h semanais, não 5h.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "respeitar máximo de 3 profissionais por categoria e mínimo de 10h semanais por profissional, mantendo 40h/equipe.",
        "explanation": "A alternativa **C** está correta. Na **PNAB 2017** (Portaria GM/MS nº 2.436/2017), para composição da Equipe de Atenção Básica (eAB), admite-se a soma de cargas horárias de diferentes profissionais da mesma categoria para atingir 40h semanais por categoria, desde que respeitados o **máximo de 3 profissionais por categoria** e a **carga horária mínima de 10 horas semanais por profissional** (portanto, 4 profissionais da mesma categoria viola o teto).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "permitir atuação sem vínculo, com plantões alternados cobrindo a equipe mínima.",
        "explanation": "Incorreta: A APS exige vínculo longitudinal com a população adscrita, sendo incompatível com plantões alternados sem vínculo.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "flexibilizar parâmetros mediante acordo interno da equipe, sem comunicação à gestão.",
        "explanation": "Incorreta: Os parâmetros são normativos e cadastrados no SCNES pela gestão, não podendo ser alterados informalmente pela equipe.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. Na **PNAB 2017** (Portaria GM/MS nº 2.436/2017), para composição da Equipe de Atenção Básica (eAB), admite-se a soma de cargas horárias de diferentes profissionais da mesma categoria para atingir 40h semanais por categoria, desde que respeitados o **máximo de 3 profissionais por categoria** e a **carga horária mínima de 10 horas semanais por profissional** (portanto, 4 profissionais da mesma categoria viola o teto).\n- **A) Incorreta:** Há limite expresso de até 3 profissionais por categoria.\n- **B) Incorreta:** A carga horária mínima individual prevista na PNAB é de 10h semanais, não 5h.\n- **D) Incorreta:** A APS exige vínculo longitudinal com a população adscrita, sendo incompatível com plantões alternados sem vínculo.\n- **E) Incorreta:** Os parâmetros são normativos e cadastrados no SCNES pela gestão, não podendo ser alterados informalmente pela equipe.",
    "perolaClinica": "A alternativa **C** está correta. Na **PNAB 2017** (Portaria GM/MS nº 2.436/2017), para composição da Equipe de Atenção Básica (eAB), admite-se a soma de cargas horárias de diferentes profissionais da mesma categoria para atingir 40h semanais por categoria,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Regras de composição e carga horária mínima/máxima por categoria na PNAB 2017.",
      "raciocinioChave": "Na PNAB 2017, permite-se somar cargas horárias para compor 40h semanais por categoria desde que haja no máximo 3 profissionais por categoria e mínimo de 10h semanais por profissional. Alocar 4 profissionais da mesma categoria com 12h viola o limite máximo permitido.",
      "armadilhaBanca": "Focar apenas na soma total das horas (4 × 12h = 48h ≥ 40h) ou no mínimo individual (12h ≥ 10h) e esquecer o teto de 3 profissionais por categoria."
    },
    "mapaDistratores": {
      "A": "A PNAB impõe expressamente o teto máximo de 3 profissionais por categoria na composição da equipe.",
      "B": "A carga horária individual mínima admitida pela PNAB é de 10 horas semanais, e não de 5 horas.",
      "D": "A Atenção Primária exige vínculo e longitudinalidade com a população adscrita, incompatíveis com regime de plantões alternados.",
      "E": "Os parâmetros de composição e carga horária são normativos e registrados no SCNES, não podendo ser alterados por acordo informal da equipe."
    }
  },
  {
    "id": "q-uepa-2026-011",
    "code": "Q-UEPA26-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Controle Social e Participação Popular",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-controle-social-e-participacao-popular",
    "tags": [
      "conselho-de-saude",
      "lei-8142",
      "controle-social"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em emergência sanitária, o gestor local remaneja recursos sem apreciação do Conselho de Saúde. O status jurídico desse colegiado, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Órgão consultivo sem poder de decisão orçamentária vinculante.",
        "explanation": "Incorreta: O Conselho de Saúde é deliberativo (e não meramente consultivo), com competência sobre o plano e o orçamento da saúde.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Instância independente sem interface com planejamento e finanças.",
        "explanation": "Incorreta: Possui interface direta com planejamento, orçamento e prestação de contas do fundo de saúde.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Colegiado restrito à esfera nacional e conferências quadrienais.",
        "explanation": "Incorreta: Existe nas três esferas de governo (municipal, estadual e federal); as Conferências de Saúde é que ocorrem a cada 4 anos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Comissão temporária acionada exclusivamente em crises epidêmicas.",
        "explanation": "Incorreta: Tem caráter permanente, não temporário.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Órgão permanente e deliberativo, com função de controle social.",
        "explanation": "A alternativa **E** está correta. Conforme a **Lei nº 8.142/1990** (art. 1º, § 2º), o Conselho de Saúde, em caráter **permanente e deliberativo**, é órgão colegiado composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários (paridade de 50% de usuários), atuando na formulação de estratégias e no controle da execução da política de saúde, **inclusive nos aspectos econômicos e financeiros**.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Conforme a **Lei nº 8.142/1990** (art. 1º, § 2º), o Conselho de Saúde, em caráter **permanente e deliberativo**, é órgão colegiado composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários (paridade de 50% de usuários), atuando na formulação de estratégias e no controle da execução da política de saúde, **inclusive nos aspectos econômicos e financeiros**.\n- **A) Incorreta:** O Conselho de Saúde é deliberativo (e não meramente consultivo), com competência sobre o plano e o orçamento da saúde.\n- **B) Incorreta:** Possui interface direta com planejamento, orçamento e prestação de contas do fundo de saúde.\n- **C) Incorreta:** Existe nas três esferas de governo (municipal, estadual e federal); as Conferências de Saúde é que ocorrem a cada 4 anos.\n- **D) Incorreta:** Tem caráter permanente, não temporário.",
    "perolaClinica": "A alternativa **E** está correta. Conforme a **Lei nº 8.142/1990** (art. 1º, § 2º), o Conselho de Saúde, em caráter **permanente e deliberativo**, é órgão colegiado composto por representantes do governo, prestadores de serviço, profissionais de saúde e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Natureza jurídica permanente e deliberativa do Conselho de Saúde pela Lei nº 8.142/1990.",
      "raciocinioChave": "Conforme a Lei nº 8.142/1990, o Conselho de Saúde é um órgão colegiado de caráter permanente e deliberativo presente nas três esferas de governo. Entre suas atribuições legais está o controle da execução da política de saúde, incluindo aspectos econômicos e financeiros.",
      "armadilhaBanca": "Confundir o Conselho de Saúde (permanente e deliberativo) com as Conferências de Saúde (quadrienais e propositivas) ou supor papel meramente consultivo."
    },
    "mapaDistratores": {
      "A": "O Conselho de Saúde possui poder deliberativo vinculante sobre políticas e execução orçamentária, não sendo apenas consultivo.",
      "B": "O colegiado atua diretamente na fiscalização e deliberação sobre o planejamento e os aspectos econômico-financeiros do fundo de saúde.",
      "C": "Os Conselhos de Saúde existem nas esferas municipal, estadual e federal; a periodicidade quadrienal aplica-se às Conferências de Saúde.",
      "D": "O Conselho de Saúde é uma instância permanente do SUS, e não uma comissão temporária criada apenas para crises."
    }
  },
  {
    "id": "q-uepa-2026-012",
    "code": "Q-UEPA26-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "ras",
      "coordenacao-do-cuidado",
      "regulacao",
      "contrarreferencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em um município, um usuário com condições crônicas circula entre UBS, ambulatório especializado e hospital sem integração de informações. Exames se repetem e não há retorno formal à equipe de origem. A gestão busca reorganizar o fluxo assistencial conforme o modelo das Redes de Atenção à Saúde. A conduta mais adequada para organizar esse cuidado, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "encaminhar o usuário diretamente para hospital de referência sem coordenação pela APS.",
        "explanation": "Incorreta: Fragmenta ainda mais o cuidado e sobrecarrega o nível terciário.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "manter o usuário vinculado à APS como coordenadora do cuidado, utilizando regulação para acesso aos demais serviços e garantindo contrarreferência.",
        "explanation": "A alternativa **B** está correta. Segundo a Portaria GM/MS nº 4.279/2010 (Diretrizes das Redes de Atenção à Saúde — RAS) e os atributos essenciais de Starfield, a **Atenção Primária à Saúde (APS)** é o centro de comunicação e **coordenadora do cuidado** na rede, articulando o acesso regulado aos pontos de atenção secundária e terciária e assegurando a continuidade informacional pela **contrarreferência**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "transferir o acompanhamento definitivo para o ambulatório especializado, encerrando o vínculo com a UBS.",
        "explanation": "Incorreta: Na RAS, o cuidado das condições crônicas é compartilhado; o vínculo com a UBS não é encerrado.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "atuar apenas nos episódios de agudização clínica que resultem em internação hospitalar.",
        "explanation": "Incorreta: Caracteriza modelo episódico/reativo hospitalocêntrico, contrário à gestão de condições crônicas na RAS.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "orientar a busca por serviços privados para acelerar o acesso a consultas e exames.",
        "explanation": "Incorreta: Contraria o princípio da universalidade e integralidade do SUS.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Segundo a Portaria GM/MS nº 4.279/2010 (Diretrizes das Redes de Atenção à Saúde — RAS) e os atributos essenciais de Starfield, a **Atenção Primária à Saúde (APS)** é o centro de comunicação e **coordenadora do cuidado** na rede, articulando o acesso regulado aos pontos de atenção secundária e terciária e assegurando a continuidade informacional pela **contrarreferência**.\n- **A) Incorreta:** Fragmenta ainda mais o cuidado e sobrecarrega o nível terciário.\n- **C) Incorreta:** Na RAS, o cuidado das condições crônicas é compartilhado; o vínculo com a UBS não é encerrado.\n- **D) Incorreta:** Caracteriza modelo episódico/reativo hospitalocêntrico, contrário à gestão de condições crônicas na RAS.\n- **E) Incorreta:** Contraria o princípio da universalidade e integralidade do SUS.",
    "perolaClinica": "A alternativa **B** está correta. Segundo a Portaria GM/MS nº 4.279/2010 (Diretrizes das Redes de Atenção à Saúde — RAS) e os atributos essenciais de Starfield, a **Atenção Primária à Saúde (APS)** é o centro de comunicação e **coordenadora do cuidado** na…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Coordenação do cuidado pela APS e integração via regulação e contrarreferência nas RAS.",
      "raciocinioChave": "Nas Redes de Atenção à Saúde, a APS atua como centro de comunicação e coordenadora do cuidado ao longo do tempo. Manter o vínculo na UBS com acesso regulado aos especialistas e garantia de contrarreferência evita fragmentação e repetição de exames.",
      "armadilhaBanca": "Acreditar que condições crônicas complexas devam ser transferidas definitivamente para a atenção especializada ou hospitalar, rompendo o vínculo com a APS."
    },
    "mapaDistratores": {
      "A": "O encaminhamento direto ao hospital sem coordenação da APS agrava a fragmentação do cuidado e sobrecarrega o nível terciário.",
      "C": "O manejo de condições crônicas nas RAS é compartilhado, devendo preservar o vínculo longitudinal do usuário com a UBS.",
      "D": "A atuação restrita às agudizações hospitalares reproduz o modelo episódico e reativo, inadequado ao seguimento de doenças crônicas.",
      "E": "Direcionar o usuário para a rede privada contraria os princípios da universalidade e da integralidade do SUS."
    }
  },
  {
    "id": "q-uepa-2026-013",
    "code": "Q-UEPA26-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Medidas de Frequência",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-medidas-de-frequencia",
    "tags": [
      "densidade-de-incidencia",
      "coorte",
      "medidas-de-frequencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma coorte de 800 indivíduos foi acompanhada por 2 anos; ocorreram 40 casos do desfecho. Parte dos indivíduos foi perdida ao longo do seguimento. A medida mais adequada quando há tempos de observação distintos, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Incidência acumulada",
        "explanation": "Incorreta: A incidência acumulada (risco) pressupõe uma coorte fechada em que todos os indivíduos são seguidos pelo mesmo período completo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Prevalência pontual",
        "explanation": "Incorreta: Prevalência pontual mede casos existentes (novos + antigos) em um único instante, típica de estudos transversais.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Densidade de incidência (taxa)",
        "explanation": "A alternativa **C** está correta. Em estudos de coorte dinâmica ou com perdas de seguimento — nos quais os participantes contribuem com diferentes tempos sob risco —, a medida de frequência apropriada é a **densidade de incidência (taxa de incidência)**, cujo denominador é a soma de **pessoas-tempo** em risco (ex.: pessoas-ano), segundo Gordis e Medronho.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Razão de prevalência",
        "explanation": "Incorreta: Razão de prevalência é medida de associação usada em estudos transversais.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Proporção de atacados",
        "explanation": "Incorreta: Taxa de ataque é uma incidência acumulada aplicada a surtos de curta duração.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Em estudos de coorte dinâmica ou com perdas de seguimento — nos quais os participantes contribuem com diferentes tempos sob risco —, a medida de frequência apropriada é a **densidade de incidência (taxa de incidência)**, cujo denominador é a soma de **pessoas-tempo** em risco (ex.: pessoas-ano), segundo Gordis e Medronho.\n- **A) Incorreta:** A incidência acumulada (risco) pressupõe uma coorte fechada em que todos os indivíduos são seguidos pelo mesmo período completo.\n- **B) Incorreta:** Prevalência pontual mede casos existentes (novos + antigos) em um único instante, típica de estudos transversais.\n- **D) Incorreta:** Razão de prevalência é medida de associação usada em estudos transversais.\n- **E) Incorreta:** Taxa de ataque é uma incidência acumulada aplicada a surtos de curta duração.",
    "perolaClinica": "A alternativa **C** está correta. Em estudos de coorte dinâmica ou com perdas de seguimento — nos quais os participantes contribuem com diferentes tempos sob risco —, a medida de frequência apropriada é a **densidade de incidência (taxa de incidência)**, cujo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escolha da densidade de incidência em coortes dinâmicas ou com perdas de seguimento.",
      "raciocinioChave": "Quando os participantes contribuem com tempos diferentes sob risco devido a perdas de seguimento ou entradas tardias, o denominador não pode ser fixo em indivíduos iniciais. Nesses cenários, calcula-se a densidade de incidência (taxa) usando pessoas-tempo em risco.",
      "armadilhaBanca": "Aplicar incidência acumulada a uma coorte aberta ou com perdas de seguimento, ignorando a heterogeneidade dos tempos de observação."
    },
    "mapaDistratores": {
      "A": "A incidência acumulada pressupõe coorte fechada com seguimento completo de todos os participantes pelo mesmo intervalo.",
      "B": "A prevalência pontual quantifica casos existentes em um momento específico, sendo própria de inquéritos transversais.",
      "D": "A razão de prevalência é uma medida de associação entre grupos em estudos transversais, não uma medida de frequência para tempos variáveis.",
      "E": "A proporção ou taxa de ataque corresponde a uma incidência acumulada restrita a surtos agudos de curta duração."
    }
  },
  {
    "id": "q-uepa-2026-014",
    "code": "Q-UEPA26-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Medidas de Associação e Impacto",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-medidas-de-associacao-e-impacto",
    "tags": [
      "odds-ratio",
      "epidemiologia",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Em investigação epidemiológica no município, avaliou-se situação relacionada a ocorrência de doenças e aspectos metodológicos. Sobre o cenário descrito, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Apresenta conceito de razão de chances.",
        "explanation": "Incorreta / Indeterminada: Sem cenário descrito no enunciado.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Corresponde à densidade de incidência.",
        "explanation": "Incorreta / Indeterminada: Sem cenário descrito no enunciado.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "Apresenta conceito de incidência.",
        "explanation": "Incorreta / Indeterminada: Sem cenário descrito no enunciado.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "Refere-se à letalidade.",
        "explanation": "Incorreta / Indeterminada: Sem cenário descrito no enunciado.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Apresenta conceito de prevalência.",
        "explanation": "Incorreta / Indeterminada: Sem cenário descrito no enunciado.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** O enunciado foi publicado sem o texto-base do cenário epidemiológico (\"avaliou-se situação relacionada a ocorrência de doenças e aspectos metodológicos\"), impossibilitando identificar qual medida epidemiológica (razão de chances, densidade de incidência, incidência, letalidade ou prevalência) corresponderia ao caso.\n- **A) Incorreta / Indeterminada:** Sem cenário descrito no enunciado.\n- **B) Incorreta / Indeterminada:** Sem cenário descrito no enunciado.\n- **C) Incorreta / Indeterminada:** Sem cenário descrito no enunciado.\n- **D) Incorreta / Indeterminada:** Sem cenário descrito no enunciado.\n- **E) Incorreta / Indeterminada:** Sem cenário descrito no enunciado.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** O enunciado foi publicado sem o texto-base do cenário epidemiológico (\"avaliou-se situação relacionada a ocorrência de doenças e aspectos metodológicos\"), impossibilitando identificar qual medida…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-015",
    "code": "Q-UEPA26-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "pnab",
      "agentes-comunitarios-de-saude",
      "teto-de-cobertura"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em uma área ribeirinha com difícil acesso e indicadores sociais desfavoráveis, a gestão municipal precisa reorganizar a cobertura dos Agentes Comunitários de Saúde (ACS). Qual estratégia está de acordo com a Política Nacional de Atenção Básica (PNAB)?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Fixar um ACS para cerca de 1.200 pessoas, compensando distâncias com telemonitoramento estruturado e agendamento remoto.",
        "explanation": "Incorreta: Ultrapassa o teto legal de 750 pessoas por ACS.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Adscrever apenas domicílios próximos à UBS, excluindo áreas remotas com baixa densidade e alto custo operacional.",
        "explanation": "Incorreta: Viola os princípios da universalidade e equidade ao excluir populações vulneráveis e remotas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Assegurar cobertura total do território com teto de 750 pessoas por ACS, ajustando quantitativos por critérios epidemiológicos e sociais.",
        "explanation": "A alternativa **C** está correta. Segundo a **PNAB (Portaria GM/MS nº 2.436/2017)**, o número máximo de pessoas por Agente Comunitário de Saúde (ACS) é de **750 pessoas**, devendo-se garantir cobertura de 100% da população em áreas de grande dispersão territorial, risco e vulnerabilidade social (como populações ribeirinhas), com ajuste dos quantitativos conforme critérios epidemiológicos, demográficos e socioeconômicos.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Substituir ACS por equipe itinerante de especialidades, centralizando ações clínicas de maior complexidade.",
        "explanation": "Incorreta: O ACS desempenha papel insubstituível de vínculo comunitário e vigilância territorial na Estratégia Saúde da Família.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Alternar mensalmente os ACS por sorteio, redistribuindo microáreas para equilibrar a carga de trabalho.",
        "explanation": "Incorreta: Alternar ACS mensalmente destrói a longitudinalidade e o vínculo com as famílias da microárea.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Segundo a **PNAB (Portaria GM/MS nº 2.436/2017)**, o número máximo de pessoas por Agente Comunitário de Saúde (ACS) é de **750 pessoas**, devendo-se garantir cobertura de 100% da população em áreas de grande dispersão territorial, risco e vulnerabilidade social (como populações ribeirinhas), com ajuste dos quantitativos conforme critérios epidemiológicos, demográficos e socioeconômicos.\n- **A) Incorreta:** Ultrapassa o teto legal de 750 pessoas por ACS.\n- **B) Incorreta:** Viola os princípios da universalidade e equidade ao excluir populações vulneráveis e remotas.\n- **D) Incorreta:** O ACS desempenha papel insubstituível de vínculo comunitário e vigilância territorial na Estratégia Saúde da Família.\n- **E) Incorreta:** Alternar ACS mensalmente destrói a longitudinalidade e o vínculo com as famílias da microárea.",
    "perolaClinica": "A alternativa **C** está correta. Segundo a **PNAB (Portaria GM/MS nº 2.436/2017)**, o número máximo de pessoas por Agente Comunitário de Saúde (ACS) é de **750 pessoas**, devendo-se garantir cobertura de 100% da população em áreas de grande dispersão…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Parâmetros de cobertura territorial e teto populacional por ACS segundo a PNAB.",
      "raciocinioChave": "A PNAB estabelece o máximo de 750 pessoas por Agente Comunitário de Saúde, exigindo cobertura de 100% em áreas de risco, dispersão territorial e vulnerabilidade social. Ajustar os quantitativos conforme critérios epidemiológicos e sociais assegura acesso integral em área ribeirinha.",
      "armadilhaBanca": "Tentar compensar o difícil acesso ampliando o número de pessoas por ACS acima de 750 ou restringindo a adscrição apenas às áreas próximas à UBS."
    },
    "mapaDistratores": {
      "A": "Atribuir 1.200 pessoas a um ACS viola o teto normativo máximo de 750 pessoas por agente definido na PNAB.",
      "B": "Excluir populações remotas e vulneráveis da adscrição fere frontalmente os princípios de universalidade e equidade do SUS.",
      "D": "Equipes itinerantes de especialidades não substituem o papel territorial, comunitário e longitudinal do ACS na ESF.",
      "E": "O rodízio mensal por sorteio rompe o vínculo comunitário e a longitudinalidade do cuidado na microárea."
    }
  },
  {
    "id": "q-uepa-2026-016",
    "code": "Q-UEPA26-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos de Ansiedade, TOC e TEPT",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-de-ansiedade-toc-e-tept",
    "tags": [
      "transtorno-do-panico",
      "ataques-de-panico",
      "ansiedade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 24 anos relata ataques súbitos de medo intenso, palpitações, sensação de morte iminente e esquiva de locais públicos. Ataques recorrentes há 3 meses. Qual diagnóstico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transtorno de pânico",
        "explanation": "A alternativa **A** está correta. Conforme o **DSM-5-TR**, o **transtorno de pânico** é definido por ataques de pânico recorrentes e inesperados (surtos abruptos de medo intenso atingindo pico em minutos, com sintomas autonômicos como palpitações e medo de morrer), seguidos por pelo menos 1 mês de preocupação persistente com novos ataques ou mudança desadaptativa de comportamento (como esquiva de locais públicos/agorafobia).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Transtorno de ansiedade generalizada",
        "explanation": "Incorreta: O TAG cursa com preocupação excessiva e difusa na maioria dos dias por ≥ 6 meses, não caracterizada primordialmente por ataques paroxísticos súbitos.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Transtorno obsessivo-compulsivo",
        "explanation": "Incorreta: O TOC caracteriza-se por obsessões intrusivas e compulsões repetitivas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Transtorno de ansiedade social",
        "explanation": "Incorreta: O transtorno de ansiedade social tem foco específico no medo de avaliação negativa em situações sociais.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Transtorno de estresse pós-traumático",
        "explanation": "Incorreta: O TEPT exige exposição prévia a evento traumático grave com revivência, hipervigilância e esquiva relacionada ao trauma.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Conforme o **DSM-5-TR**, o **transtorno de pânico** é definido por ataques de pânico recorrentes e inesperados (surtos abruptos de medo intenso atingindo pico em minutos, com sintomas autonômicos como palpitações e medo de morrer), seguidos por pelo menos 1 mês de preocupação persistente com novos ataques ou mudança desadaptativa de comportamento (como esquiva de locais públicos/agorafobia).\n- **B) Incorreta:** O TAG cursa com preocupação excessiva e difusa na maioria dos dias por ≥ 6 meses, não caracterizada primordialmente por ataques paroxísticos súbitos.\n- **C) Incorreta:** O TOC caracteriza-se por obsessões intrusivas e compulsões repetitivas.\n- **D) Incorreta:** O transtorno de ansiedade social tem foco específico no medo de avaliação negativa em situações sociais.\n- **E) Incorreta:** O TEPT exige exposição prévia a evento traumático grave com revivência, hipervigilância e esquiva relacionada ao trauma.",
    "perolaClinica": "A alternativa **A** está correta. Conforme o **DSM-5-TR**, o **transtorno de pânico** é definido por ataques de pânico recorrentes e inesperados (surtos abruptos de medo intenso atingindo pico em minutos, com sintomas autonômicos como palpitações e medo de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial do transtorno de pânico segundo critérios do DSM-5-TR.",
      "raciocinioChave": "Ataques abruptos e recorrentes de medo intenso com sintomas autonômicos (palpitações, medo de morrer) acompanhados de esquiva persistente há 3 meses caracterizam transtorno de pânico. A duração ≥ 1 mês de alteração comportamental associada confirma o quadro.",
      "armadilhaBanca": "Confundir crises paroxísticas de pânico com ansiedade generalizada (preocupação difusa contínua) ou focar apenas na esquiva de locais públicos."
    },
    "mapaDistratores": {
      "B": "O transtorno de ansiedade generalizada caracteriza-se por preocupação crônica, difusa e persistente por ao menos 6 meses, não por surtos súbitos.",
      "C": "O transtorno obsessivo-compulsivo define-se pela presença de pensamentos obsessivos intrusivos e atos compulsivos repetitivos.",
      "D": "O transtorno de ansiedade social restringe-se ao temor específico de exposição e julgamento negativo em interações sociais.",
      "E": "O transtorno de estresse pós-traumático pressupõe evento traumático prévio com sintomas de revivência e hiperexcitabilidade ligados ao trauma."
    }
  },
  {
    "id": "q-uepa-2026-017",
    "code": "Q-UEPA26-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "História, Princípios e Leis Orgânicas do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-historia-principios-e-leis-organicas-do-sus",
    "tags": [
      "lei-8080",
      "competencias-estaduais",
      "gestao-do-sus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante surto de dengue, a CIB discute responsabilidades. Segundo a Lei nº 8.080/1990, compete aos estados:",
    "alternativas": [
      {
        "letter": "A",
        "text": "executar atenção básica diretamente em todos os municípios.",
        "explanation": "Incorreta: A execução direta das ações e serviços de atenção básica compete prioritariamente aos municípios (art. 18).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "coordenar redes regionais e apoiar municípios nas ações de vigilância.",
        "explanation": "A alternativa **B** está correta. De acordo com o **art. 17 da Lei nº 8.080/1990**, compete à direção estadual do SUS promover a descentralização para os municípios, **acompanhar, controlar e avaliar as redes hierarquizadas/regionais** e **prestar apoio técnico e financeiro aos municípios**, coordenando em caráter complementar as ações de vigilância epidemiológica, sanitária e de saúde do trabalhador.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "formular políticas nacionais de saúde.",
        "explanation": "Incorreta: Formular políticas nacionais compete à direção nacional do SUS (União / Ministério da Saúde, art. 16).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "regular serviços privados em todo território nacional.",
        "explanation": "Incorreta: A regulação em âmbito nacional compete à União (e agências federais como ANS/Anvisa).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "definir percentuais constitucionais para financiamento.",
        "explanation": "Incorreta: Percentuais mínimos de financiamento decorrem da Constituição Federal e da Lei Complementar nº 141/2012 (competência legislativa federal).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com o **art. 17 da Lei nº 8.080/1990**, compete à direção estadual do SUS promover a descentralização para os municípios, **acompanhar, controlar e avaliar as redes hierarquizadas/regionais** e **prestar apoio técnico e financeiro aos municípios**, coordenando em caráter complementar as ações de vigilância epidemiológica, sanitária e de saúde do trabalhador.\n- **A) Incorreta:** A execução direta das ações e serviços de atenção básica compete prioritariamente aos municípios (art. 18).\n- **C) Incorreta:** Formular políticas nacionais compete à direção nacional do SUS (União / Ministério da Saúde, art. 16).\n- **D) Incorreta:** A regulação em âmbito nacional compete à União (e agências federais como ANS/Anvisa).\n- **E) Incorreta:** Percentuais mínimos de financiamento decorrem da Constituição Federal e da Lei Complementar nº 141/2012 (competência legislativa federal).",
    "perolaClinica": "A alternativa **B** está correta. De acordo com o **art. 17 da Lei nº 8.080/1990**, compete à direção estadual do SUS promover a descentralização para os municípios, **acompanhar, controlar e avaliar as redes hierarquizadas/regionais** e **prestar apoio…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Competências da direção estadual do SUS conforme o artigo 17 da Lei nº 8.080/1990.",
      "raciocinioChave": "Pelo art. 17 da Lei nº 8.080/1990, cabe aos estados coordenar e avaliar as redes hierarquizadas regionais, além de prestar apoio técnico e financeiro aos municípios. Também compete à esfera estadual coordenar de modo complementar as ações de vigilância.",
      "armadilhaBanca": "Misturar competências executivas diretas dos municípios (atenção básica) e normativas nacionais da União com o papel coordenador regional do estado."
    },
    "mapaDistratores": {
      "A": "A execução direta das ações de atenção básica é atribuição prioritária da direção municipal do SUS.",
      "C": "A formulação de políticas nacionais de saúde compete à direção nacional do SUS exercida pelo Ministério da Saúde.",
      "D": "A regulação nacional de serviços privados e planos de saúde é competência de âmbito federal.",
      "E": "A definição dos percentuais mínimos constitucionais de financiamento decorre da Constituição Federal e da LC 141/2012, em âmbito federal."
    }
  },
  {
    "id": "q-uepa-2026-018",
    "code": "Q-UEPA26-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Medidas de Associação e Impacto",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-medidas-de-associacao-e-impacto",
    "tags": [
      "odds-ratio",
      "caso-controle",
      "medidas-de-associacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em estudo caso-controle sobre câncer de pulmão, o odds ratio para tabagismo foi 4,0. Qual interpretação é adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Quatro vezes maior risco absoluto",
        "explanation": "Incorreta: Estudo caso-controle não mede incidência nem risco absoluto diretamente.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Quatro vezes mais chance de exposição",
        "explanation": "Incorreta: Embora a razão de chances de exposição entre casos vs. controles seja matematicamente igual à razão de chances do desfecho entre expostos vs. não expostos, a alternativa B está incompleta por omitir a comparação (\"entre casos em relação aos controles\"), sendo a E a interpretação clínica padrão cobrada pela banca.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Quatro vezes maior mortalidade",
        "explanation": "Incorreta: OR de incidência/diagnóstico não mede mortalidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Quatro vezes maior prevalência",
        "explanation": "Incorreta: OR não equivale a razão de prevalência.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Quatro vezes mais chance de desenvolver câncer entre expostos",
        "explanation": "A alternativa **E** está correta. Em estudos caso-controle de doenças relativamente raras (como o câncer de pulmão), o **Odds Ratio (OR = 4,0)** expressa a razão de chances entre casos e controles e estima adequadamente que indivíduos expostos ao tabagismo apresentam **quatro vezes mais chance** de desenvolver o desfecho (câncer de pulmão) em comparação aos não expostos (Gordis / Medronho).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Em estudos caso-controle de doenças relativamente raras (como o câncer de pulmão), o **Odds Ratio (OR = 4,0)** expressa a razão de chances entre casos e controles e estima adequadamente que indivíduos expostos ao tabagismo apresentam **quatro vezes mais chance** de desenvolver o desfecho (câncer de pulmão) em comparação aos não expostos (Gordis / Medronho).\n- **A) Incorreta:** Estudo caso-controle não mede incidência nem risco absoluto diretamente.\n- **B) Incorreta:** Embora a razão de chances de exposição entre casos vs. controles seja matematicamente igual à razão de chances do desfecho entre expostos vs. não expostos, a alternativa B está incompleta por omitir a comparação (\"entre casos em relação aos controles\"), sendo a E a interpretação clínica padrão cobrada pela banca.\n- **C) Incorreta:** OR de incidência/diagnóstico não mede mortalidade.\n- **D) Incorreta:** OR não equivale a razão de prevalência.",
    "perolaClinica": "A alternativa **E** está correta. Em estudos caso-controle de doenças relativamente raras (como o câncer de pulmão), o **Odds Ratio (OR = 4,0)** expressa a razão de chances entre casos e controles e estima adequadamente que indivíduos expostos ao tabagismo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Interpretação epidemiológica do Odds Ratio (OR) em estudos caso-controle.",
      "raciocinioChave": "Em estudos caso-controle de desfechos raros, o Odds Ratio (OR = 4,0) estima adequadamente a razão de chances do desfecho entre expostos e não expostos. Assim, indivíduos expostos ao tabagismo têm quatro vezes mais chance de desenvolver câncer de pulmão.",
      "armadilhaBanca": "Trocar 'chance' (odds) por 'risco absoluto', 'prevalência' ou 'mortalidade', ou escolher formulação incompleta sobre exposição sem grupo comparador."
    },
    "mapaDistratores": {
      "A": "O estudo caso-controle não mede incidência populacional, não permitindo calcular diretamente o risco absoluto.",
      "B": "A formulação está incompleta ao omitir a comparação entre casos e controles, diferentemente da interpretação direta da chance do desfecho entre expostos.",
      "C": "O Odds Ratio de ocorrência de doença estima chance de adoecimento, não representando medida de mortalidade.",
      "D": "O Odds Ratio é uma razão de chances que não equivale conceitualmente à razão de prevalências."
    }
  },
  {
    "id": "q-uepa-2026-019",
    "code": "Q-UEPA26-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "raps",
      "reforma-psiquiatrica",
      "desinstitucionalizacao",
      "caps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A Reforma Psiquiátrica brasileira propõe a desinstitucionalização como eixo central da política de saúde mental. Contudo, a efetivação desse modelo depende da superação de obstáculos estruturais, financeiros e culturais. Considerando todas as dimensões analisadas, a alternativa que descreve, de forma mais completa, os principais desafios que ainda comprometem a plena implementação da desinstitucionalização no Brasil é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a escassez de leitos em hospitais psiquiátricos e a falta de profissionais de saúde mental nas regiões Norte e Nordeste, sem mencionar a necessidade de adequação legislativa.",
        "explanation": "Incorreta: A Reforma Psiquiátrica propõe a redução progressiva de leitos em hospitais psiquiátricos (e não sua ampliação), substituindo-os por leitos em hospitais gerais e serviços comunitários.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a resistência dos movimentos de usuários e familiares ao modelo comunitário, associada à ausência de protocolos clínicos padronizados para o CAPS.",
        "explanation": "Incorreta: Os movimentos de usuários e familiares são historicamente protagonistas e defensores da luta antimanicomial e do modelo comunitário.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a insuficiência de recursos financeiros destinados aos serviços comunitários, a fragilidade da articulação entre CAPS e atenção básica (apoio matricial limitado), e a persistência de estigmas socioculturais que ainda favorecem a institucionalização.",
        "explanation": "A alternativa **C** está correta. A literatura sobre a **Reforma Psiquiátrica (Lei nº 10.216/2001)** e a **Rede de Atenção Psicossocial (RAPS)** aponta como principais entraves à consolidação da desinstitucionalização: o subfinanciamento dos dispositivos substitutivos comunitários (CAPS, SRT, centros de convivência), a fragilidade da integração entre CAPS e APS (apoio matricial insuficiente) e a persistência do estigma sociocultural que ainda alimenta a lógica manicomial/institucionalizante.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "a inexistência de políticas públicas voltadas à prevenção de transtornos mentais e a exclusão total da participação de organizações não-governamentais na rede de cuidados.",
        "explanation": "Incorreta: Existem políticas públicas na RAPS e participação intersetorial/comunitária prevista na rede.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a predominância de abordagens biomédicas nos CAPS, que impede a inserção de terapias ocupacionais e artísticas, sem considerar a necessidade de monitoramento epidemiológico.",
        "explanation": "Incorreta: Os CAPS adotam o Projeto Terapêutico Singular (PTS) multiprofissional, integrando oficinas terapêuticas, arte, cultura e reabilitação psicossocial.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A literatura sobre a **Reforma Psiquiátrica (Lei nº 10.216/2001)** e a **Rede de Atenção Psicossocial (RAPS)** aponta como principais entraves à consolidação da desinstitucionalização: o subfinanciamento dos dispositivos substitutivos comunitários (CAPS, SRT, centros de convivência), a fragilidade da integração entre CAPS e APS (apoio matricial insuficiente) e a persistência do estigma sociocultural que ainda alimenta a lógica manicomial/institucionalizante.\n- **A) Incorreta:** A Reforma Psiquiátrica propõe a redução progressiva de leitos em hospitais psiquiátricos (e não sua ampliação), substituindo-os por leitos em hospitais gerais e serviços comunitários.\n- **B) Incorreta:** Os movimentos de usuários e familiares são historicamente protagonistas e defensores da luta antimanicomial e do modelo comunitário.\n- **D) Incorreta:** Existem políticas públicas na RAPS e participação intersetorial/comunitária prevista na rede.\n- **E) Incorreta:** Os CAPS adotam o Projeto Terapêutico Singular (PTS) multiprofissional, integrando oficinas terapêuticas, arte, cultura e reabilitação psicossocial.",
    "perolaClinica": "A alternativa **C** está correta. A literatura sobre a **Reforma Psiquiátrica (Lei nº 10.216/2001)** e a **Rede de Atenção Psicossocial (RAPS)** aponta como principais entraves à consolidação da desinstitucionalização: o subfinanciamento dos dispositivos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Entraves estruturais, financeiros e assistenciais à desinstitucionalização na RAPS.",
      "raciocinioChave": "A consolidação da Reforma Psiquiátrica (Lei nº 10.216/2001) enfrenta subfinanciamento dos serviços comunitários substitutivos, fragilidade no apoio matricial entre CAPS e APS e estigma sociocultural. Esses três eixos explicam a dificuldade de plena desinstitucionalização.",
      "armadilhaBanca": "Apresentar como obstáculo a falta de leitos em hospitais psiquiátricos ou atribuir resistência aos movimentos de usuários, invertendo a lógica antimanicomial."
    },
    "mapaDistratores": {
      "A": "A Reforma Psiquiátrica preconiza a redução progressiva de leitos em hospitais psiquiátricos, e não a sua ampliação.",
      "B": "Os movimentos de usuários e familiares são historicamente aliados e protagonistas da luta antimanicomial e do cuidado comunitário.",
      "D": "A RAPS contempla políticas públicas de promoção e prevenção em saúde mental, além de incentivar a participação intersetorial e comunitária.",
      "E": "Os CAPS operam com Projetos Terapêuticos Singulares multiprofissionais que integram oficinas terapêuticas, arte e reabilitação psicossocial."
    }
  },
  {
    "id": "q-uepa-2026-020",
    "code": "Q-UEPA26-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "apoio-matricial",
      "saude-mental-na-aps",
      "caps",
      "esf"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Maria, 38 anos, residente em zona urbana periférica, tem histórico de transtorno depressivo recorrente há 10 anos. Nos últimos três meses, apresentou piora do humor, isolamento social e pensamentos de inutilidade. Ela já foi internada duas vezes em hospital psiquiátrico (2009 e 2016) por risco de suicídio. Atualmente, procura a Unidade Básica de Saúde (UBS) da sua comunidade, onde a equipe de saúde da família (enfermeiro, agente comunitário e médico de família) a recebe. Durante a consulta, o médico de família identifica risco moderado de suicídio, mas sente insegurança para iniciar farmacoterapia antidepressiva e para conduzir o plano de segurança. Ele registra o caso no prontuário eletrônico da UBS e solicita apoio matricial ao CAPS II da região. Dentro de 48 h, um psiquiatra do CAPS realiza teleconsulta, orienta a equipe quanto à escolha do antidepressivo, define critérios de monitoramento diário e indica que a enfermeira da UBS faça visitas domiciliares para aferir adesão e sinais de alerta. Além disso, o CAPS oferece treinamento presencial de 4 h para toda a equipe da UBS sobre manejo de crises suicidas. Uma semana depois, Maria inicia o tratamento na própria comunidade, com acompanhamento diário pela enfermeira, consultas mensais com o médico de família e supervisão semanal do psiquiatra do CAPS via telemedicina. Não houve necessidade de nova internação. A alternativa que sintetiza o papel do apoio matricial nesse cenário é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o apoio matricial consiste apenas em encaminhar o paciente da UBS ao CAPS para internação, deixando a equipe da atenção básica responsável apenas pelo registro administrativo do caso.",
        "explanation": "Incorreta: O apoio matricial rompe exatamente com a lógica burocrática de referência/encaminhamento sem corresponsabilização.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "através do apoio matricial, a equipe da atenção básica recebeu orientação clínica, capacitação pontual e suporte técnico contínuo do CAPS, permitindo que o tratamento fosse mantido no território, evitando nova internação.",
        "explanation": "A alternativa **B** está correta. Conforme o conceito clássico de **apoio matricial** (Campos & Domitti; Ministério da Saúde — Caderno de Atenção Básica de Saúde Mental), trata-se de um arranjo organizacional que combina **suporte assistencial** (discussão de casos, interconsulta/teleconsulta, co-manejo) e **suporte técnico-pedagógico** (educação permanente/capacitação), ampliando a resolutividade da equipe de referência (APS) e evitando encaminhamentos desnecessários ou internações evitáveis.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "o apoio matricial implica que o CAPS assuma integralmente o cuidado de Maria, substituindo a equipe da UBS por profissionais especializados, enquanto a equipe da atenção básica passa a exercer somente funções de vigilância sanitária.",
        "explanation": "Incorreta: O CAPS não substitui a equipe de referência da UBS; ambos compartilham o cuidado longitudinal no território.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a estratégia de apoio matricial limita-se à realização de um único treinamento presencial, sem necessidade de acompanhamento clínico posterior, pois a competência da equipe da UBS já seria suficiente após a capacitação.",
        "explanation": "Incorreta: Envolve retaguarda contínua e discussão periódica de casos, não um evento isolado de treinamento.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "o apoio matricial tem como objetivo principal a coleta de indicadores epidemiológicos sobre depressão na comunidade, não influenciando diretamente as decisões terapêuticas individuais.",
        "explanation": "Incorreta: Seu objetivo é clínico-assistencial e pedagógico sobre o cuidado individual e coletivo, influenciando diretamente o plano terapêutico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Conforme o conceito clássico de **apoio matricial** (Campos & Domitti; Ministério da Saúde — Caderno de Atenção Básica de Saúde Mental), trata-se de um arranjo organizacional que combina **suporte assistencial** (discussão de casos, interconsulta/teleconsulta, co-manejo) e **suporte técnico-pedagógico** (educação permanente/capacitação), ampliando a resolutividade da equipe de referência (APS) e evitando encaminhamentos desnecessários ou internações evitáveis.\n- **A) Incorreta:** O apoio matricial rompe exatamente com a lógica burocrática de referência/encaminhamento sem corresponsabilização.\n- **C) Incorreta:** O CAPS não substitui a equipe de referência da UBS; ambos compartilham o cuidado longitudinal no território.\n- **D) Incorreta:** Envolve retaguarda contínua e discussão periódica de casos, não um evento isolado de treinamento.\n- **E) Incorreta:** Seu objetivo é clínico-assistencial e pedagógico sobre o cuidado individual e coletivo, influenciando diretamente o plano terapêutico.",
    "perolaClinica": "A alternativa **B** está correta. Conforme o conceito clássico de **apoio matricial** (Campos & Domitti; Ministério da Saúde — Caderno de Atenção Básica de Saúde Mental), trata-se de um arranjo organizacional que combina **suporte assistencial** (discussão de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conceito e operacionalização do apoio matricial entre CAPS e Atenção Básica.",
      "raciocinioChave": "O apoio matricial integra retaguarda assistencial (discussão de casos e co-manejo) e suporte técnico-pedagógico à equipe de referência da UBS. Isso capacita o médico de família a conduzir o tratamento e o plano de segurança no território, evitando internação desnecessária.",
      "armadilhaBanca": "Reduzir o apoio matricial a um encaminhamento burocrático ao CAPS, a uma transferência definitiva de vínculo ou a um treinamento pontual isolado."
    },
    "mapaDistratores": {
      "A": "O apoio matricial supera a lógica de encaminhamento burocrático ao promover corresponsabilização clínica entre as equipes.",
      "C": "O CAPS oferece retaguarda especializada sem substituir a equipe de referência da UBS, que mantém o cuidado longitudinal.",
      "D": "O matriciamento exige acompanhamento contínuo e discussões periódicas de casos, não se restringindo a um treinamento único.",
      "E": "A finalidade central do apoio matricial é clínico-assistencial e pedagógica, impactando diretamente a condução terapêutica individual."
    }
  },
  {
    "id": "q-uepa-2026-021",
    "code": "Q-UEPA26-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Carenciais",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-anemias-carenciais",
    "tags": [
      "anemia-ferropriva",
      "coiloniquia",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Na investigação diagnóstica de um paciente internado com anemia, em qual das seguintes situações clínicas a anemia ferropriva é a causa mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "mulher de 64 anos com glossite, disfagia e unhas em colher (coiloniquia).",
        "explanation": "Correta (causa de anulação por duplicidade): Tríade clássica de deficiência grave de ferro (Síndrome de Plummer-Vinson + coiloníquia).",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "executivo de 50 anos com dispepsia crônica.",
        "explanation": "Incorreta: Dispepsia crônica isolada sem evidência de sangramento digestivo não define anemia ferropriva como causa mais provável frente às alternativas A e C.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "mulher multípara de 39 anos com sangramento vaginal irregular e fadiga progressiva.",
        "explanation": "Correta (causa de anulação por duplicidade): Sangramento vaginal irregular em mulher de 39 anos é a etiologia mais comum de anemia ferropriva nessa faixa etária.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "idosa de 72 anos com palidez, parestesia e dificuldade para marcha e equilíbrio.",
        "explanation": "Incorreta: Palidez associada a parestesias e ataxia de marcha sugere degeneração combinada subaguda da medula por **deficiência de vitamina B12** (anemia megaloblástica).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "dor no hipocôndrio esquerdo, anemia em um homem de 30 anos.",
        "explanation": "Incorreta: Dor em hipocôndrio esquerdo com anemia em adulto jovem sugere esplenomegalia / anemia hemolítica.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** A questão apresenta **duas alternativas classicamente corretas** para anemia ferropriva: a alternativa **A** descreve a tríade clássica da **Síndrome de Plummer-Vinson** (anemia ferropriva grave associada a glossite, disfagia por membrana esofágica e coiloníquia) e a alternativa **C** descreve a causa epidemiologicamente mais frequente de ferropenia em mulheres em idade fértil (**sangramento uterino anormal**).\n- **A) Correta (causa de anulação por duplicidade):** Tríade clássica de deficiência grave de ferro (Síndrome de Plummer-Vinson + coiloníquia).\n- **B) Incorreta:** Dispepsia crônica isolada sem evidência de sangramento digestivo não define anemia ferropriva como causa mais provável frente às alternativas A e C.\n- **C) Correta (causa de anulação por duplicidade):** Sangramento vaginal irregular em mulher de 39 anos é a etiologia mais comum de anemia ferropriva nessa faixa etária.\n- **D) Incorreta:** Palidez associada a parestesias e ataxia de marcha sugere degeneração combinada subaguda da medula por **deficiência de vitamina B12** (anemia megaloblástica).\n- **E) Incorreta:** Dor em hipocôndrio esquerdo com anemia em adulto jovem sugere esplenomegalia / anemia hemolítica.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** A questão apresenta **duas alternativas classicamente corretas** para anemia ferropriva: a alternativa **A** descreve a tríade clássica da **Síndrome de Plummer-Vinson** (anemia ferropriva grave associada…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-022",
    "code": "Q-UEPA26-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Carenciais",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-anemias-carenciais",
    "tags": [
      "anemia-ferropriva",
      "ferritina",
      "investigacao-etiologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você está avaliando um homem de 50 anos que apresenta dor abdominal e diarreia crônica. Refere também fadiga e dispneia aos esforços nos últimos dois meses. Ao exame físico, observa-se palidez cutaneomucosa ++/4+, sem icterícia, e fígado e baço não são palpáveis. O hemograma mostra anemia microcítica e hipocrômica com plaquetose. Assinale a alternativa que apresenta a conduta mais adequada para este caso.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar dosagem de ferro, ferritina, bilirrubinas e DHL, e iniciar sulfato ferroso junto às refeições.",
        "explanation": "Incorreta: O sulfato ferroso deve ser ingerido preferencialmente em jejum (ou com vitamina C) e não junto às refeições (que reduzem sua absorção), além de omitir a investigação etiológica obrigatória.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Solicitar dosagem de ácido fólico, vitamina B12, contagem de reticulócitos e prescrever sulfato ferroso endovenoso devido à diarreia, reavaliando em três meses.",
        "explanation": "Incorreta: Anemia ferropriva não se trata com \"sulfato ferroso endovenoso\" (ferro parenteral usa sacarato de hidróxido férrico ou carboximaltose) e o quadro não é macrocítico/megaloblástico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Iniciar imediatamente sulfato ferroso e solicitar eletroforese de hemoglobina para descartar traço talassêmico.",
        "explanation": "Incorreta: A prioridade em homem de 50 anos com sintomas gastrointestinais e plaquetose é confirmar ferropenia e investigar perda digestiva/má absorção, não apenas eletroforese para traço talassêmico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Solicitar dosagem de ferro sérico e ferritina e iniciar investigação imediata da causa da anemia.",
        "explanation": "A alternativa **D** está correta. Em homem de 50 anos com **anemia microcítica e hipocrômica associada a trombocitose reativa (plaquetose)**, dor abdominal e diarreia crônica, a hipótese principal é **anemia ferropriva**. Pela diretriz da Sociedade Brasileira de Hematologia (ABHH) e da British Society of Gastroenterology (BSG), deve-se confirmar a deficiência de ferro (ferritina e perfil de ferro) e **investigar imediatamente a etiologia** (trato gastrointestinal: doença celíaca, doença inflamatória intestinal e, obrigatoriamente aos 50 anos, neoplasia colorretal/endoscopia e colonoscopia).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Solicitar pesquisa de anticorpos anti-célula parietal.",
        "explanation": "Incorreta: Anticorpo anti-célula parietal investiga gastrite autoimune/anemia perniciosa (macrocítica por deficiência de B12).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Em homem de 50 anos com **anemia microcítica e hipocrômica associada a trombocitose reativa (plaquetose)**, dor abdominal e diarreia crônica, a hipótese principal é **anemia ferropriva**. Pela diretriz da Sociedade Brasileira de Hematologia (ABHH) e da British Society of Gastroenterology (BSG), deve-se confirmar a deficiência de ferro (ferritina e perfil de ferro) e **investigar imediatamente a etiologia** (trato gastrointestinal: doença celíaca, doença inflamatória intestinal e, obrigatoriamente aos 50 anos, neoplasia colorretal/endoscopia e colonoscopia).\n- **A) Incorreta:** O sulfato ferroso deve ser ingerido preferencialmente em jejum (ou com vitamina C) e não junto às refeições (que reduzem sua absorção), além de omitir a investigação etiológica obrigatória.\n- **B) Incorreta:** Anemia ferropriva não se trata com \"sulfato ferroso endovenoso\" (ferro parenteral usa sacarato de hidróxido férrico ou carboximaltose) e o quadro não é macrocítico/megaloblástico.\n- **C) Incorreta:** A prioridade em homem de 50 anos com sintomas gastrointestinais e plaquetose é confirmar ferropenia e investigar perda digestiva/má absorção, não apenas eletroforese para traço talassêmico.\n- **E) Incorreta:** Anticorpo anti-célula parietal investiga gastrite autoimune/anemia perniciosa (macrocítica por deficiência de B12).",
    "perolaClinica": "A alternativa **D** está correta. Em homem de 50 anos com **anemia microcítica e hipocrômica associada a trombocitose reativa (plaquetose)**, dor abdominal e diarreia crônica, a hipótese principal é **anemia ferropriva**. Pela diretriz da Sociedade Brasileira…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Investigação etiológica obrigatória na anemia ferropriva em homens com > 50 anos.",
      "raciocinioChave": "Homem de 50 anos com anemia microcítica, hipocrômica, plaquetose reativa e sintomas gastrointestinais sugere fortemente anemia ferropriva por perda digestiva ou má absorção. Deve-se confirmar a ferropenia (ferro e ferritina) e iniciar investigação imediata da causa.",
      "armadilhaBanca": "Tratar empiricamente com ferro sem investigar a etiologia em homem ≥ 50 anos ou prescrever sulfato ferroso junto às refeições/por via endovenosa."
    },
    "mapaDistratores": {
      "A": "O sulfato ferroso oral deve ser administrado longe das refeições para melhor absorção, além de faltar a investigação etiológica obrigatória.",
      "B": "Não existe formulação de sulfato ferroso endovenoso e o quadro microcítico com plaquetose não aponta para deficiência de B12 ou folato.",
      "C": "A prioridade em paciente de 50 anos com dor abdominal e diarreia crônica é confirmar ferropenia e investigar doença gastrointestinal, não traço talassêmico.",
      "E": "Anticorpos anti-célula parietal investigam gastrite autoimune e anemia perniciosa, tipicamente macrocítica."
    }
  },
  {
    "id": "q-uepa-2026-023",
    "code": "Q-UEPA26-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Distúrbios da Hemostasia Primária",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-disturbios-da-hemostasia-primaria",
    "tags": [
      "hemostasia-primaria",
      "tempo-de-sangramento",
      "petequias"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 22 anos apresenta sangramentos gengivais ao escovar os dentes, equimoses após pequenos traumas e menstruações prolongadas desde a adolescência. Ao exame, há petéquias e equimoses, sem hepatoesplenomegalia. O exame que avalia a hemostasia primária, cuja alteração explica o quadro clínico da paciente, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Fibrinogênio",
        "explanation": "Incorreta: Fibrinogênio avalia a etapa final da hemostasia secundária (formação de fibrina).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Tempo de Protrombina (TP)",
        "explanation": "Incorreta: O TP (e INR) avalia a via extrínseca e comum da coagulação (hemostasia secundária).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Tempo de Tromboplastina parcial (TTPa)",
        "explanation": "Incorreta: O TTPa avalia a via intrínseca e comum da coagulação (hemostasia secundária).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Tempo de Trombina",
        "explanation": "Incorreta: O Tempo de Trombina avalia a conversão de fibrinogênio em fibrina (hemostasia secundária).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Tempo de sangramento",
        "explanation": "A alternativa **E** está correta. Sangramentos mucocutâneos (gengivorragia, petéquias, equimoses superficiais e menorragia desde a adolescência) caracterizam distúrbio da **hemostasia primária** (plaquetas e fator de von Willebrand), tradicionalmente avaliada pela contagem plaquetária e pelo **tempo de sangramento** (além de agregometria/PFA-100), segundo Harrison e tratados de Hematologia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Sangramentos mucocutâneos (gengivorragia, petéquias, equimoses superficiais e menorragia desde a adolescência) caracterizam distúrbio da **hemostasia primária** (plaquetas e fator de von Willebrand), tradicionalmente avaliada pela contagem plaquetária e pelo **tempo de sangramento** (além de agregometria/PFA-100), segundo Harrison e tratados de Hematologia.\n- **A) Incorreta:** Fibrinogênio avalia a etapa final da hemostasia secundária (formação de fibrina).\n- **B) Incorreta:** O TP (e INR) avalia a via extrínseca e comum da coagulação (hemostasia secundária).\n- **C) Incorreta:** O TTPa avalia a via intrínseca e comum da coagulação (hemostasia secundária).\n- **D) Incorreta:** O Tempo de Trombina avalia a conversão de fibrinogênio em fibrina (hemostasia secundária).",
    "perolaClinica": "A alternativa **E** está correta. Sangramentos mucocutâneos (gengivorragia, petéquias, equimoses superficiais e menorragia desde a adolescência) caracterizam distúrbio da **hemostasia primária** (plaquetas e fator de von Willebrand), tradicionalmente avaliada…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Avaliação laboratorial da hemostasia primária em sangramentos mucocutâneos.",
      "raciocinioChave": "Gengivorragia, petéquias, equimoses superficiais e menorragia desde a adolescência traduzem distúrbio da hemostasia primária (plaquetas ou fator de von Willebrand). Entre as opções listadas, apenas o tempo de sangramento avalia essa etapa inicial da hemostasia.",
      "armadilhaBanca": "Confundir testes da cascata de coagulação (TP, TTPa, TT, fibrinogênio — hemostasia secundária) com exames da interação plaqueta-endotélio."
    },
    "mapaDistratores": {
      "A": "A dosagem de fibrinogênio avalia o substrato final da cascata de coagulação na hemostasia secundária.",
      "B": "O Tempo de Protrombina (TP) avalia as vias extrínseca e comum da hemostasia secundária.",
      "C": "O TTPa investiga as vias intrínseca e comum da coagulação plasmática (hemostasia secundária).",
      "D": "O Tempo de Trombina avalia a conversão de fibrinogênio em fibrina na etapa final da hemostasia secundária."
    }
  },
  {
    "id": "q-uepa-2026-024",
    "code": "Q-UEPA26-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Valvopatias",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-valvopatias",
    "tags": [
      "miocardiopatia-hipertrofica-obstrutiva",
      "manobra-de-valsalva",
      "semiologia-cardiovascular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 35 anos apresenta dispneia aos esforços e queixa-se de palpitações ocasionais. Ao exame, observa-se sopro sistólico em crescendo-decrescendo no foco mitral, irradiando para borda esternal esquerda. Durante a manobra de Valsalva (fase de esforço), o sopro aumenta claramente de intensidade. Qual das valvopatias abaixo é mais compatível com esta resposta ao Valsava?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Estenose aórtica.",
        "explanation": "Incorreta: O sopro da estenose aórtica **diminui** com a manobra de Valsalva pela redução do fluxo transvalvar.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Comunicação interatrial com hiperfluxo (sopro de ejeção).",
        "explanation": "Incorreta: Sopros de hiperfluxo em CIA diminuem com a redução do retorno venoso na manobra de Valsalva.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Miocardiopatia Hipertrófica Obstrutiva (MHO).",
        "explanation": "A alternativa **C** está correta. Na fase de esforço da **manobra de Valsalva**, há aumento da pressão intratorácica e **redução do retorno venoso (pré-carga)** e do volume diastólico final do ventrículo esquerdo. Isso reduz a intensidade da maioria dos sopros cardíacos, mas **aumenta** o sopro da **Miocardiopatia Hipertrófica Obstrutiva (MHO)** (e adianta o clique/sopro do prolapso de valva mitral), pois a menor cavidade ventricular aproxima o septo interventricular do folheto anterior mitral, agravando a obstrução dinâmica da via de saída do VE (Braunwald / Diretriz SBC).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Insuficiência mitral.",
        "explanation": "Incorreta: O sopro da insuficiência mitral (não associada a PVM) tende a diminuir com a queda da pré-carga.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Insuficiência tricúspide.",
        "explanation": "Incorreta: O sopro da insuficiência tricúspide diminui na Valsalva e aumenta à inspiração profunda (manobra de Rivero-Carvallo).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Na fase de esforço da **manobra de Valsalva**, há aumento da pressão intratorácica e **redução do retorno venoso (pré-carga)** e do volume diastólico final do ventrículo esquerdo. Isso reduz a intensidade da maioria dos sopros cardíacos, mas **aumenta** o sopro da **Miocardiopatia Hipertrófica Obstrutiva (MHO)** (e adianta o clique/sopro do prolapso de valva mitral), pois a menor cavidade ventricular aproxima o septo interventricular do folheto anterior mitral, agravando a obstrução dinâmica da via de saída do VE (Braunwald / Diretriz SBC).\n- **A) Incorreta:** O sopro da estenose aórtica **diminui** com a manobra de Valsalva pela redução do fluxo transvalvar.\n- **B) Incorreta:** Sopros de hiperfluxo em CIA diminuem com a redução do retorno venoso na manobra de Valsalva.\n- **D) Incorreta:** O sopro da insuficiência mitral (não associada a PVM) tende a diminuir com a queda da pré-carga.\n- **E) Incorreta:** O sopro da insuficiência tricúspide diminui na Valsalva e aumenta à inspiração profunda (manobra de Rivero-Carvallo).",
    "perolaClinica": "A alternativa **C** está correta. Na fase de esforço da **manobra de Valsalva**, há aumento da pressão intratorácica e **redução do retorno venoso (pré-carga)** e do volume diastólico final do ventrículo esquerdo. Isso reduz a intensidade da maioria dos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Resposta paradoxal do sopro da Miocardiopatia Hipertrófica Obstrutiva à manobra de Valsalva.",
      "raciocinioChave": "Na fase de esforço da manobra de Valsalva, a queda do retorno venoso reduz o volume diastólico final do ventrículo esquerdo. Na MHO, a cavidade menor aproxima o septo interventricular do folheto mitral anterior, agravando a obstrução da via de saída e intensificando o sopro.",
      "armadilhaBanca": "Confundir com estenose aórtica, cujo sopro também é sistólico em crescendo-decrescendo, mas diminui de intensidade durante a manobra de Valsalva."
    },
    "mapaDistratores": {
      "A": "Na estenose aórtica, a redução da pré-carga na manobra de Valsalva diminui o fluxo transvalvar e atenua o sopro.",
      "B": "O sopro de hiperfluxo pulmonar na comunicação interatrial diminui com a queda do retorno venoso durante a Valsalva.",
      "D": "O sopro da insuficiência mitral clássica tende a reduzir de intensidade com a diminuição da pré-carga.",
      "E": "O sopro da insuficiência tricúspide reduz na manobra de Valsalva e aumenta durante a inspiração profunda (manobra de Rivero-Carvallo)."
    }
  },
  {
    "id": "q-uepa-2026-025",
    "code": "Q-UEPA26-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Diabetes Mellitus - Diagnóstico e Tratamento",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-diabetes-mellitus-diagnostico-e-tratamento",
    "tags": [
      "dm2",
      "agonista-glp-1",
      "obesidade",
      "protecao-cardiovascular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 57 anos, com diabetes melito tipo 2 há 6 anos, hipertensão arterial bem controlada e obesidade grau I (IMC 31 kg/m²), comparece à consulta para reavaliação. Atualmente está usando metformina 850 mg 2 x dia, com boa tolerância. Nega hipoglicemias. Relata piora do controle glicêmico nos últimos 8 meses. Alimentação rica em carboidratos e vida sedentária. PA: 128/78 mmHg. História familiar: pai com IAM aos 52 anos. Exames: Hemoglobina glicada: 8,6%. Glicemia jejum: 186 mg/dL Taxa de filtração glomerular: 62 mL/min/1,73m². Microalbuminúria: 50mg/dia. Perfil lipídico: LDL 98mg/dL; HDL 41mg/dL; Triglicérides 186mg/dL. Ecocardiograma: sem alterações importantes. Paciente relata desejo de perder peso. A melhor opção terapêutica a ser acrescentada ao tratamento deste paciente, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sulfonilureia (como glimepirida) para maior redução da HbA1c.",
        "explanation": "Incorreta: Sulfonilureias promovem ganho de peso, aumentam o risco de hipoglicemia e não conferem proteção cardiovascular.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Inibidor de DPP-4 (como sitagliptina), pela boa tolerabilidade.",
        "explanation": "Incorreta: Inibidores da DPP-4 têm efeito neutro sobre o peso, menor potência redutora de HbA1c e não demonstraram proteção cardiovascular/renal superior.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Pioglicatona.",
        "explanation": "Incorreta: Pioglitazona causa ganho de peso e retenção hídrica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Insulina basal de ação prolongada.",
        "explanation": "Incorreta: Insulina basal promove ganho de peso e risco de hipoglicemia; em paciente assintomático com HbA1c 8,6%, prefere-se um agente injetável/oral com benefício ponderal e cardiovascular (GLP-1) antes da insulinização.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Agonista do GLP-1 (semaglutida ou tirzepatida), visando perda de peso e proteção cardiovascular.",
        "explanation": "A alternativa **E** está correta. O paciente tem DM2 descompensado (HbA1c 8,6%), obesidade grau I (IMC 31 kg/m²), microalbuminúria e alto risco cardiovascular (HAS + história familiar prematura de IAM + lesão renal inicial), além de desejo expresso de perda de peso. Pelas diretrizes da **SBD 2024/2025** e **ADA 2025**, os **agonistas do receptor de GLP-1** (como semaglutida ou o coagonista GIP/GLP-1 tirzepatida) são opções de primeira linha para intensificação após metformina por oferecerem elevada redução de HbA1c, perda ponderal expressiva, baixo risco de hipoglicemia e benefício cardiovascular/renal comprovado.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. O paciente tem DM2 descompensado (HbA1c 8,6%), obesidade grau I (IMC 31 kg/m²), microalbuminúria e alto risco cardiovascular (HAS + história familiar prematura de IAM + lesão renal inicial), além de desejo expresso de perda de peso. Pelas diretrizes da **SBD 2024/2025** e **ADA 2025**, os **agonistas do receptor de GLP-1** (como semaglutida ou o coagonista GIP/GLP-1 tirzepatida) são opções de primeira linha para intensificação após metformina por oferecerem elevada redução de HbA1c, perda ponderal expressiva, baixo risco de hipoglicemia e benefício cardiovascular/renal comprovado.\n- **A) Incorreta:** Sulfonilureias promovem ganho de peso, aumentam o risco de hipoglicemia e não conferem proteção cardiovascular.\n- **B) Incorreta:** Inibidores da DPP-4 têm efeito neutro sobre o peso, menor potência redutora de HbA1c e não demonstraram proteção cardiovascular/renal superior.\n- **C) Incorreta:** Pioglitazona causa ganho de peso e retenção hídrica.\n- **D) Incorreta:** Insulina basal promove ganho de peso e risco de hipoglicemia; em paciente assintomático com HbA1c 8,6%, prefere-se um agente injetável/oral com benefício ponderal e cardiovascular (GLP-1) antes da insulinização.",
    "perolaClinica": "A alternativa **E** está correta. O paciente tem DM2 descompensado (HbA1c 8,6%), obesidade grau I (IMC 31 kg/m²), microalbuminúria e alto risco cardiovascular (HAS + história familiar prematura de IAM + lesão renal inicial), além de desejo expresso de perda…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Intensificação terapêutica no DM2 com obesidade e alto risco cardiorrenal.",
      "raciocinioChave": "Paciente com DM2 descompensado em uso de metformina (HbA1c 8,6%), obesidade, microalbuminúria e alto risco cardiovascular beneficia-se de classe com perda ponderal e proteção cardiorrenal. Agonistas de GLP-1 (ou coagonistas GIP/GLP-1) atendem a ambos os objetivos antes da insulina.",
      "armadilhaBanca": "Optar por sulfonilureia, pioglitazona ou insulina basal pela potência glicêmica ou custo, ignorando o ganho de peso e a falta de proteção cardiovascular."
    },
    "mapaDistratores": {
      "A": "As sulfonilureias provocam ganho de peso e risco de hipoglicemia, sem oferecer proteção cardiovascular ou renal comprovada.",
      "B": "Os inibidores da DPP-4 têm efeito neutro sobre o peso, menor redução de HbA1c e ausência de benefício cardiovascular/renal superior.",
      "C": "A pioglitazona promove ganho ponderal e retenção hídrica, contrariando o desejo de emagrecimento do paciente.",
      "D": "A insulina basal causa ganho de peso e risco de hipoglicemia, devendo ser preterida por agonista de GLP-1 neste perfil clínico."
    }
  },
  {
    "id": "q-uepa-2026-026",
    "code": "Q-UEPA26-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Antimicrobianos e Infecções Relacionadas à Assistência",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-antimicrobianos-e-infeccoes-relacionadas-a-assistencia",
    "tags": [
      "beta-lactamicos",
      "infusao-prolongada",
      "farmacodinamica",
      "antibioticoterapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente com choque séptico está em tratamento com piperacilina-tazobactam 4g/0,5g, atualmente administrada em infusão intermitente (30 min a cada 6 horas). Considerando a necessidade de otimizar a eficácia antimicrobiana, a equipe propõe a administração em infusão prolongada ou contínua. Essa estratégia tem como principal fundamento farmacodinâmico:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aumentar o pico sérico (Cmax) em relação à CIM, melhorando a atividade bactericida.",
        "explanation": "Incorreta: A razão $C_{\\max}/\\text{CIM}$ rege antibióticos concentração-dependentes (como aminoglicosídeos), não beta-lactâmicos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "maximizar a fração do tempo em que a concentração plasmática do fármaco permanece acima da CIM (fT > CIM).",
        "explanation": "A alternativa **B** está correta. Os beta-lactâmicos (como piperacilina-tazobactam, cefepime e meropenem) são antimicrobianos **tempo-dependentes**, cujo índice PK/PD determinante de eficácia bactericida é o percentual do intervalo entre doses em que a concentração livre permanece acima da Concentração Inibitória Mínima ($fT > \\text{CIM}$). A infusão prolongada ou contínua (recomendada pela *Surviving Sepsis Campaign* 2021 e corroborada pelo estudo BLING III) maximiza o $fT > \\text{CIM}$.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "reduzir o volume de distribuição e, com isso, melhorar a biodisponibilidade tecidual.",
        "explanation": "Incorreta: A taxa de infusão não altera o volume de distribuição intrínseco do paciente em choque séptico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "aumentar o clearance do antibiótico, reduzindo o risco de efeitos adversos.",
        "explanation": "Incorreta: Aumentar o clearance reduziria a exposição ao antibiótico e prejudicaria a eficácia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "favorecer a concentração intracelular para atuação contra patógenos intracitoplasmáticos.",
        "explanation": "Incorreta: Beta-lactâmicos têm baixa penetração intracelular; a infusão prolongada visa manter níveis extracelulares/plasmáticos acima da CIM.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Os beta-lactâmicos (como piperacilina-tazobactam, cefepime e meropenem) são antimicrobianos **tempo-dependentes**, cujo índice PK/PD determinante de eficácia bactericida é o percentual do intervalo entre doses em que a concentração livre permanece acima da Concentração Inibitória Mínima ($fT > \\text{CIM}$). A infusão prolongada ou contínua (recomendada pela *Surviving Sepsis Campaign* 2021 e corroborada pelo estudo BLING III) maximiza o $fT > \\text{CIM}$.\n- **A) Incorreta:** A razão $C_{\\max}/\\text{CIM}$ rege antibióticos concentração-dependentes (como aminoglicosídeos), não beta-lactâmicos.\n- **C) Incorreta:** A taxa de infusão não altera o volume de distribuição intrínseco do paciente em choque séptico.\n- **D) Incorreta:** Aumentar o clearance reduziria a exposição ao antibiótico e prejudicaria a eficácia.\n- **E) Incorreta:** Beta-lactâmicos têm baixa penetração intracelular; a infusão prolongada visa manter níveis extracelulares/plasmáticos acima da CIM.",
    "perolaClinica": "A alternativa **B** está correta. Os beta-lactâmicos (como piperacilina-tazobactam, cefepime e meropenem) são antimicrobianos **tempo-dependentes**, cujo índice PK/PD determinante de eficácia bactericida é o percentual do intervalo entre doses em que a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Parâmetro PK/PD tempo-dependente (fT > CIM) dos beta-lactâmicos em infusão prolongada.",
      "raciocinioChave": "Beta-lactâmicos como piperacilina-tazobactam possuem atividade bactericida tempo-dependente, determinada pelo tempo em que a concentração livre excede a CIM (fT > CIM). A infusão prolongada ou contínua mantém níveis plasmáticos estáveis acima da CIM por maior fração do intervalo.",
      "armadilhaBanca": "Confundir o índice PK/PD dos beta-lactâmicos (fT > CIM) com o dos aminoglicosídeos (Cmax/CIM, concentração-dependentes)."
    },
    "mapaDistratores": {
      "A": "A razão Cmax/CIM orienta antimicrobianos concentração-dependentes (como aminoglicosídeos), enquanto a infusão prolongada até reduz o pico.",
      "C": "A velocidade de infusão não modifica o volume de distribuição intrínseco alterado pelo choque séptico.",
      "D": "Aumentar o clearance aceleraria a eliminação do fármaco e reduziria sua eficácia antimicrobiana.",
      "E": "Beta-lactâmicos apresentam baixa penetração intracelular, atuando sobretudo no compartimento extracelular."
    }
  },
  {
    "id": "q-uepa-2026-027",
    "code": "Q-UEPA26-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Antimicrobianos e Infecções Relacionadas à Assistência",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-antimicrobianos-e-infeccoes-relacionadas-a-assistencia",
    "tags": [
      "acinetobacter-baumannii",
      "bacterias-multirresistentes",
      "cefiderocol",
      "uti"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 72 anos, em pós-operatório de colectomia esquerda, internado há 28 dias em UTI em ventilação mecânica. Evolui com febre, hipotensão e secreção purulenta traqueal. A cultura de aspirado traqueal colhida há 48h revelou Acinetobacter Baumannii Carbapenem-resistente, produtor de OXA-23. Ele está em uso de colistina + meropenem há 5 dias, com piora clínica e aumento da creatinina. A equipe considera o uso de antibióticos de última geração. Em relação às opções disponíveis, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Taniborbactam associado a cefepime tem excelente ação contra OXA-23 e deve substituir colistina.",
        "explanation": "Incorreta: Cefepime-taniborbactam tem atividade sobre KPC, OXA-48 e NDM/VIM, mas **não possui atividade confiável contra OXA-23** nem contra *Acinetobacter* CRAB.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Cefiderocol pode ser considerado, pois mantém atividade contra Acinetobacter produtor de OXA-23, mesmo após falha de colistina.",
        "explanation": "A alternativa **B** está correta. O **cefiderocol** é uma cefalosporina siderófora com estabilidade frente às quatro classes de beta-lactamases de Ambler (A, B, C e D, incluindo oxacilinases como **OXA-23** de *Acinetobacter baumannii* resistente a carbapenêmicos — CRAB). Conforme a diretriz **IDSA 2024** para Gram-negativos resistentes, o cefiderocol é uma opção de resgate (preferencialmente em terapia combinada) em infecções por CRAB refratárias ou com toxicidade à polimixina/colistina (como nefrotoxicidade).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Taniborbactam é ativo contra todas as classes de carbapenemases, incluindo metalo-β-lactamases e oxacilinases.",
        "explanation": "Incorreta: Taniborbactam não inibe IMP (metalo-β-lactamase) nem as oxacilinases típicas de *Acinetobacter* (OXA-23/24/58).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Cefiderocol deve ser evitado em infecções pulmonares por Acinetobacter devido a falha demonstrada em poucos estudos clínicos.",
        "explanation": "Incorreta: Apesar do sinal de mortalidade no estudo CREDIBLE-CR ter levado a cautela, a IDSA não proíbe seu uso; reserva-o justamente para casos refratários ou intolerantes a outros agentes, preferencialmente em combinação.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A melhor abordagem é manter colistina associada a meropenem em dose estendida, pois nenhum antibiótico moderno cobre OXA-23 de forma segura.",
        "explanation": "Incorreta: O paciente já apresenta falha clínica após 5 dias e nefrotoxicidade (aumento de creatinina), exigindo mudança de estratégia; há opções modernas (como sulbactam-durlobactam e cefiderocol).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. O **cefiderocol** é uma cefalosporina siderófora com estabilidade frente às quatro classes de beta-lactamases de Ambler (A, B, C e D, incluindo oxacilinases como **OXA-23** de *Acinetobacter baumannii* resistente a carbapenêmicos — CRAB). Conforme a diretriz **IDSA 2024** para Gram-negativos resistentes, o cefiderocol é uma opção de resgate (preferencialmente em terapia combinada) em infecções por CRAB refratárias ou com toxicidade à polimixina/colistina (como nefrotoxicidade).\n- **A) Incorreta:** Cefepime-taniborbactam tem atividade sobre KPC, OXA-48 e NDM/VIM, mas **não possui atividade confiável contra OXA-23** nem contra *Acinetobacter* CRAB.\n- **C) Incorreta:** Taniborbactam não inibe IMP (metalo-β-lactamase) nem as oxacilinases típicas de *Acinetobacter* (OXA-23/24/58).\n- **D) Incorreta:** Apesar do sinal de mortalidade no estudo CREDIBLE-CR ter levado a cautela, a IDSA não proíbe seu uso; reserva-o justamente para casos refratários ou intolerantes a outros agentes, preferencialmente em combinação.\n- **E) Incorreta:** O paciente já apresenta falha clínica após 5 dias e nefrotoxicidade (aumento de creatinina), exigindo mudança de estratégia; há opções modernas (como sulbactam-durlobactam e cefiderocol).",
    "perolaClinica": "A alternativa **B** está correta. O **cefiderocol** é uma cefalosporina siderófora com estabilidade frente às quatro classes de beta-lactamases de Ambler (A, B, C e D, incluindo oxacilinases como **OXA-23** de *Acinetobacter baumannii* resistente a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Espectro do cefiderocol contra Acinetobacter baumannii produtor de OXA-23 refratário.",
      "raciocinioChave": "Diante de falha clínica e nefrotoxicidade com colistina + meropenem em pneumonia por Acinetobacter produtor de OXA-23, é necessária troca para agente estável frente a oxacilinases classe D. O cefiderocol é uma cefalosporina siderófora ativa contra OXA-23 e opção de resgate na IDSA.",
      "armadilhaBanca": "Atribuir cobertura anti-OXA-23 ao cefepime-taniborbactam ou manter o esquema nefrotóxico em falha clínica por receio de estudos isolados."
    },
    "mapaDistratores": {
      "A": "O taniborbactam inibe KPC, OXA-48 e NDM/VIM, mas não tem atividade confiável contra OXA-23 nem contra Acinetobacter CRAB.",
      "C": "O taniborbactam não cobre a metalo-beta-lactamase IMP nem as oxacilinases típicas de Acinetobacter (OXA-23/24/58).",
      "D": "Embora exija cautela em monoterapia pelo estudo CREDIBLE-CR, a IDSA admite o cefiderocol como resgate preferencialmente combinado.",
      "E": "Manter colistina com piora clínica e lesão renal aguda é inadequado diante da disponibilidade de agentes modernos ativos contra CRAB."
    }
  },
  {
    "id": "q-uepa-2026-028",
    "code": "Q-UEPA26-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Osteoporose e Doenças Osteometabólicas",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-osteoporose-e-doencas-osteometabolicas",
    "tags": [
      "osteoporose",
      "fratura-por-fragilidade",
      "bisfosfonato",
      "indicacao-tratamento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre o manejo farmacológico da osteoporose, analise os casos a seguir e assinale a alternativa em que há indicação correta de iniciar terapia específica para osteoporose.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Mulher, 55 anos, menopausa há 3 anos, T-score de –1,0 na coluna lombar, FRAX com risco de fratura maior de 8% e de fratura de quadril de 1,5%. O médico indica ácido zoledrônico anual como estratégia preventiva precoce.",
        "explanation": "Incorreta: T-score –1,0 é limítrofe/normal e o FRAX está abaixo dos limiares clássicos (≥ 20% fratura maior ou ≥ 3% quadril), não havendo indicação de ácido zoledrônico.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Homem, 60 anos, T-score de –2,0 em colo femoral, sem fraturas prévias, porém com deficiência de vitamina D (17 ng/mL) e hiperparatireoidismo secundário. O médico inicia alendronato imediatamente na mesma consulta.",
        "explanation": "Incorreta: Antes de iniciar bisfosfonato, é obrigatório corrigir a hipovitaminose D e o hiperparatireoidismo secundário (sob risco de hipocalcemia grave), além de o T-score –2,0 sem fratura/FRAX alto não indicar bisfosfonato imediato.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Mulher, 48 anos, artrite reumatoide em uso de prednisona 10 mg/dia há 5 anos, T-score de –2,3 no fêmur e sem fraturas prévias. O médico decide apenas suplementar cálcio e vitamina D e reavaliar densitometria em 1 ano.",
        "explanation": "Incorreta: Uso crônico de glicocorticoide (prednisona ≥ 7,5 mg/dia há 5 anos) com T-score –2,3 em mulher ≥ 40 anos já indica terapia farmacológica específica (osteoporose induzida por glicocorticoide — ACR/SBR), não apenas cálcio e vitamina D.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Mulher, 72 anos, T-score de –2,4 na coluna lombar e fratura vertebral por fragilidade documentada por radiografia. A equipe inicia terapia com bisfosfonato ou anabólico, além de correção de vitamina D e cálcio.",
        "explanation": "A alternativa **D** está correta. Pelas diretrizes da **SBEM / ABRASSO** e da **Endocrine Society**, a presença de **fratura por fragilidade (vertebral ou de quadril)** estabelece o diagnóstico clínico de **osteoporose grave** e indica tratamento farmacológico específico (bisfosfonato ou agente osteoanabólico, associado à reposição de cálcio e vitamina D), independentemente de o T-score ainda estar na faixa de osteopenia (–2,4).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Homem, 59 anos, DMO com T-score –2,1, fratura de quadril há 3 anos e doença renal crônica em estágio 5 em hemodiálise. É iniciado alendronato semanal, pois não há contraindicação em estágio avançado de doença renal.",
        "explanation": "Incorreta: Bisfosfonatos (como alendronato) são **contraindicados** em DRC estágio 4–5 (TFG < 30–35 mL/min/1,73m²), exigindo avaliação de distúrbio mineral e ósseo da DRC.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Pelas diretrizes da **SBEM / ABRASSO** e da **Endocrine Society**, a presença de **fratura por fragilidade (vertebral ou de quadril)** estabelece o diagnóstico clínico de **osteoporose grave** e indica tratamento farmacológico específico (bisfosfonato ou agente osteoanabólico, associado à reposição de cálcio e vitamina D), independentemente de o T-score ainda estar na faixa de osteopenia (–2,4).\n- **A) Incorreta:** T-score –1,0 é limítrofe/normal e o FRAX está abaixo dos limiares clássicos (≥ 20% fratura maior ou ≥ 3% quadril), não havendo indicação de ácido zoledrônico.\n- **B) Incorreta:** Antes de iniciar bisfosfonato, é obrigatório corrigir a hipovitaminose D e o hiperparatireoidismo secundário (sob risco de hipocalcemia grave), além de o T-score –2,0 sem fratura/FRAX alto não indicar bisfosfonato imediato.\n- **C) Incorreta:** Uso crônico de glicocorticoide (prednisona ≥ 7,5 mg/dia há 5 anos) com T-score –2,3 em mulher ≥ 40 anos já indica terapia farmacológica específica (osteoporose induzida por glicocorticoide — ACR/SBR), não apenas cálcio e vitamina D.\n- **E) Incorreta:** Bisfosfonatos (como alendronato) são **contraindicados** em DRC estágio 4–5 (TFG < 30–35 mL/min/1,73m²), exigindo avaliação de distúrbio mineral e ósseo da DRC.",
    "perolaClinica": "A alternativa **D** está correta. Pelas diretrizes da **SBEM / ABRASSO** e da **Endocrine Society**, a presença de **fratura por fragilidade (vertebral ou de quadril)** estabelece o diagnóstico clínico de **osteoporose grave** e indica tratamento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação de terapia antiosteoporótica por fratura de fragilidade e contraindicações.",
      "raciocinioChave": "Fratura vertebral ou de quadril por fragilidade estabelece diagnóstico clínico de osteoporose grave e indica tratamento farmacológico mesmo com T-score na faixa de osteopenia (–2,4). A reposição de cálcio e vitamina D deve acompanhar o bisfosfonato ou osteoanabólico.",
      "armadilhaBanca": "Aguardar T-score ≤ –2,5 na presença de fratura por fragilidade, usar bisfosfonato na DRC estágio 5 ou ignorar hipovitaminose D/uso crônico de corticoide."
    },
    "mapaDistratores": {
      "A": "T-score de –1,0 e FRAX abaixo dos limiares de intervenção (≥ 20% maior ou ≥ 3% quadril) não indicam ácido zoledrônico.",
      "B": "Hipovitaminose D e hiperparatireoidismo secundário precisam ser corrigidos antes do bisfosfonato pelo risco de hipocalcemia grave.",
      "C": "Em mulher ≥ 40 anos usando prednisona ≥ 7,5 mg/dia cronicamente com T-score –2,3, já há indicação de terapia farmacológica específica além de cálcio e vitamina D.",
      "E": "Bisfosfonatos são contraindicados na doença renal crônica estágios 4 e 5 (TFG < 30–35 mL/min/1,73m²)."
    }
  },
  {
    "id": "q-uepa-2026-029",
    "code": "Q-UEPA26-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Síndrome Nefrítica e Glomerulonefrites",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-sindrome-nefritica-e-glomerulonefrites",
    "tags": [
      "crioglobulinemia-mista",
      "hepatite-c",
      "gnrp",
      "glomerulopatia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 52 anos é internada com insuficiência renal aguda rapidamente progressiva, acompanhada de artralgias, púrpura palpável em membros inferiores e fadiga intensa há duas semanas. Relata também parestesia distal, episódios de fenômeno de Raynaud no inverno e uma história de hepatite C crônica tratada irregularmente. Ao exame físico, apresenta PA 160/100 mmHg sem sinais pulmonares relevantes. Abdome sem hepatoesplenomegalia. Presença de púrpuras não trombocitopênicas nas pernas. Exames laboratoriais: creatinina: 3,1mg/dL; C4: indetectável; C3: baixo; Fatores reumatoides e FAN: negativos; Anti-dsDNA: negativo; ANCA: negativo; PCR; elevada; Anti-HCV positivo. Exame de urina: hemácias dismórficas, proteinúria 2g/24h. A biópsia renal revela: Glomerulonefrite membranoproliferativa com hipercelularidade e depósitos subendoteliais. Imunofluorescência: IgM e C3 em padrão granular, além de depósitos de C1q, formando aspecto “em mosaico” (pseudoclobetas); presença de trombos intraluminais PAS-positivos compatíveis com crioclobs. O diagnóstico mais provável, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Glomerulonefrite lúpica classe IV.",
        "explanation": "Incorreta: FAN e anti-dsDNA negativos e ausência de padrão *full-house* clássico afastam nefrite lúpica classe IV.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Granulomatose com poliangiite.",
        "explanation": "Incorreta: Granulomatose com poliangiite é ANCA-positiva e cursa com glomerulonefrite pauci-imune (sem depósitos expressivos ou hipocomplementemia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Granulomatose eosinofílica com poliangiite.",
        "explanation": "Incorreta: GEPA apresenta asma, eosinofilia e glomerulonefrite pauci-imune, não GNMP com trombos PAS+.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Crioglobulinemia mista associada ao HCV.",
        "explanation": "A alternativa **D** está correta. A tríade clínica de Meltzer (púrpura palpável, artralgias e fadiga/fraqueza) associada a neuropatia periférica, fenômeno de Raynaud, **anti-HCV positivo**, consumo desproporcional de **C4 (indetectável)** e biópsia renal com **glomerulonefrite membranoproliferativa (GNMP)** exibindo **trombos hialinos intraluminais PAS-positivos (crioêmbolos/pseudotrombos)** e depósitos de IgM/C3 fecha o diagnóstico de **vasculite crioglobulinêmica mista associada ao HCV** (KDIGO 2021).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Glomerulonefrite pós-estreptocócica.",
        "explanation": "Incorreta: GNPE cursa com consumo isolado de C3 (C4 normal), depósitos subepiteliais em \"corcovas\" (*humps*) e história de infecção estreptocócica prévia.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. A tríade clínica de Meltzer (púrpura palpável, artralgias e fadiga/fraqueza) associada a neuropatia periférica, fenômeno de Raynaud, **anti-HCV positivo**, consumo desproporcional de **C4 (indetectável)** e biópsia renal com **glomerulonefrite membranoproliferativa (GNMP)** exibindo **trombos hialinos intraluminais PAS-positivos (crioêmbolos/pseudotrombos)** e depósitos de IgM/C3 fecha o diagnóstico de **vasculite crioglobulinêmica mista associada ao HCV** (KDIGO 2021).\n- **A) Incorreta:** FAN e anti-dsDNA negativos e ausência de padrão *full-house* clássico afastam nefrite lúpica classe IV.\n- **B) Incorreta:** Granulomatose com poliangiite é ANCA-positiva e cursa com glomerulonefrite pauci-imune (sem depósitos expressivos ou hipocomplementemia).\n- **C) Incorreta:** GEPA apresenta asma, eosinofilia e glomerulonefrite pauci-imune, não GNMP com trombos PAS+.\n- **E) Incorreta:** GNPE cursa com consumo isolado de C3 (C4 normal), depósitos subepiteliais em \"corcovas\" (*humps*) e história de infecção estreptocócica prévia.",
    "perolaClinica": "A alternativa **D** está correta. A tríade clínica de Meltzer (púrpura palpável, artralgias e fadiga/fraqueza) associada a neuropatia periférica, fenômeno de Raynaud, **anti-HCV positivo**, consumo desproporcional de **C4 (indetectável)** e biópsia renal com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Crioglobulinemia mista associada ao HCV (tríade de Meltzer, C4 indetectável e GNMP).",
      "raciocinioChave": "Púrpura palpável, artralgias e fadiga (tríade de Meltzer) com neuropatia, Raynaud, anti-HCV positivo e consumo acentuado de C4 fecham vasculite crioglobulinêmica mista. A biópsia com glomerulonefrite membranoproliferativa e trombos hialinos PAS-positivos confirma o diagnóstico.",
      "armadilhaBanca": "Confundir com nefrite lúpica (FAN/anti-dsDNA negativos), vasculites ANCA (pauci-imunes) ou GN pós-estreptocócica (consumo isolado de C3)."
    },
    "mapaDistratores": {
      "A": "A negatividade de FAN e anti-dsDNA, somada ao padrão da biópsia sem padrão full-house, afasta nefrite lúpica classe IV.",
      "B": "A granulomatose com poliangiite associa-se ao ANCA e cursa com glomerulonefrite pauci-imune e complemento normal.",
      "C": "A granulomatose eosinofílica com poliangiite cursa com asma, eosinofilia e lesão renal pauci-imune, sem trombos hialinos PAS-positivos.",
      "E": "A glomerulonefrite pós-estreptocócica tipicamente consome C3 de modo isolado (C4 normal) e apresenta depósitos em corcovas subepiteliais."
    }
  },
  {
    "id": "q-uepa-2026-030",
    "code": "Q-UEPA26-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Anestesiologia Básica e Anestésicos Locais",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-anestesiologia-basica-e-anestesicos-locais",
    "tags": [
      "hipertermia-maligna",
      "dantrolene",
      "sevoflurano",
      "succinilcolina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 34 anos, previamente saudável, é submetida a colecistectomia videolaparoscópica sob anestesia geral com sevoflurano e succinilcolina. Cerca de 30 minutos após o término do procedimento, ainda na sala de recuperação anestésica, desenvolve taquicardia (160 bpm), hipertensão inicial seguida de hipotensão (70/40 mmHg), rigidez generalizada e temperatura central de 40,5°C. O anestesista relata aumento progressivo e inexplicado da concentração máxima de CO₂ exalada ao final da expiração e corresponde (ETCO₂) intraoperatório. A gasometria arterial e exames mostram: pH- 7.10; PaCO₂- 75mmH; PaO₂- 103mmHg; HCO₃⁻- 13mEq/L; Lactato- 8,1 mmol/L; CPK- 9.500U/L e K⁺ 7,8 mEq/L. ECG demonstra QRS largo, ondas T apiculadas e extrassístoles ventriculares. A equipe se prepara para intubação de resgate e administração de gluconato de cálcio para estabilização de membrana. A próxima conduta prioritária que realmente muda a fisiopatologia do quadro, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Gluconato de cálcio endovenoso.",
        "explanation": "Incorreta: O gluconato de cálcio estabiliza a membrana miocárdica contra a hipercalemia (e já está sendo administrado pela equipe), mas não interrompe o estado hipermetabólico muscular.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Dantrolene endovenoso.",
        "explanation": "A alternativa **B** está correta. O quadro é clássico de **Hipertermia Maligna** desencadeada por agentes gatilhos (anestésico inalatório halogenado **sevoflurano** + bloqueador neuromuscular despolarizante **succinilcolina**): elevação inexplicada de $\\text{ETCO}_2$, rigidez muscular generalizada, hipertermia grave (40,5 °C), acidose mista, rabdomiólise (CPK 9.500 U/L) e hipercalemia ameaçadora. Segundo a Sociedade Brasileira de Anestesiologia (SBA) e a MHAUS, o único tratamento específico que interrompe a fisiopatologia (bloqueando o receptor de rianodina RYR1 e a liberação maciça de cálcio do retículo sarcoplasmático) é o **dantrolene sódico endovenoso** (dose inicial 2,5 mg/kg IV).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Bicarbonato de sódio em bolo endovenoso.",
        "explanation": "Incorreta: Bicarbonato de sódio é medida adjuvante para acidose/hipercalemia, sem atuar na causa fisiopatológica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Adrenalina em infusão contínua.",
        "explanation": "Incorreta: Adrenalina não trata o defeito do receptor de rianodina e pode agravar arritmias em meio hipermetabólico/acidótico.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Dipirona em infusão contínua.",
        "explanation": "Incorreta: Antitérmicos (como dipirona) são ineficazes na hipertermia maligna, pois a elevação térmica decorre de hipermetabolismo muscular periférico, não de alteração do ponto de ajuste hipotalâmico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O quadro é clássico de **Hipertermia Maligna** desencadeada por agentes gatilhos (anestésico inalatório halogenado **sevoflurano** + bloqueador neuromuscular despolarizante **succinilcolina**): elevação inexplicada de $\\text{ETCO}_2$, rigidez muscular generalizada, hipertermia grave (40,5 °C), acidose mista, rabdomiólise (CPK 9.500 U/L) e hipercalemia ameaçadora. Segundo a Sociedade Brasileira de Anestesiologia (SBA) e a MHAUS, o único tratamento específico que interrompe a fisiopatologia (bloqueando o receptor de rianodina RYR1 e a liberação maciça de cálcio do retículo sarcoplasmático) é o **dantrolene sódico endovenoso** (dose inicial 2,5 mg/kg IV).\n- **A) Incorreta:** O gluconato de cálcio estabiliza a membrana miocárdica contra a hipercalemia (e já está sendo administrado pela equipe), mas não interrompe o estado hipermetabólico muscular.\n- **C) Incorreta:** Bicarbonato de sódio é medida adjuvante para acidose/hipercalemia, sem atuar na causa fisiopatológica.\n- **D) Incorreta:** Adrenalina não trata o defeito do receptor de rianodina e pode agravar arritmias em meio hipermetabólico/acidótico.\n- **E) Incorreta:** Antitérmicos (como dipirona) são ineficazes na hipertermia maligna, pois a elevação térmica decorre de hipermetabolismo muscular periférico, não de alteração do ponto de ajuste hipotalâmico.",
    "perolaClinica": "A alternativa **B** está correta. O quadro é clássico de **Hipertermia Maligna** desencadeada por agentes gatilhos (anestésico inalatório halogenado **sevoflurano** + bloqueador neuromuscular despolarizante **succinilcolina**): elevação inexplicada de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Tratamento específico da hipertermia maligna desencadeada por halogenados e succinilcolina.",
      "raciocinioChave": "Elevação abrupta de ETCO2, rigidez generalizada, hipertermia grave, acidose mista, rabdomiólise e hipercalemia após sevoflurano e succinilcolina caracterizam hipertermia maligna. A terapia específica definitiva é o dantrolene endovenoso, que bloqueia a liberação de cálcio pelo receptor RyR1.",
      "armadilhaBanca": "Focar apenas nas medidas de suporte da hipercalemia/acidose (gluconato de cálcio, bicarbonato) ou tentar baixar a febre com antitérmicos."
    },
    "mapaDistratores": {
      "A": "O gluconato de cálcio estabiliza a membrana miocárdica frente à hipercalemia, mas não interrompe o hipermetabolismo muscular.",
      "C": "O bicarbonato de sódio corrige parcialmente a acidose e o potássio, sem atuar no mecanismo fisiopatológico da crise.",
      "D": "A adrenalina não bloqueia o receptor de rianodina e pode precipitar arritmias graves em meio acidótico e hipermetabólico.",
      "E": "Antitérmicos como dipirona são ineficazes porque a febre decorre de contratura e hipermetabolismo periférico, não de febre hipotalâmica."
    }
  },
  {
    "id": "q-uepa-2026-031",
    "code": "Q-UEPA26-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Doença Pulmonar Obstrutiva Crônica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-doenca-pulmonar-obstrutiva-cronica",
    "tags": [
      "dpoc",
      "gold",
      "terapia-tripla",
      "exacerbacoes"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 58 anos, pedreiro, com exposição a tabaco por 35 maços-ano e exposição ocupacional a poeiras, relata dispneia progressiva há 2 anos e duas exacerbações nos últimos 12 meses, sendo uma com necessidade de corticoide sistêmico. Ao exame físico, apresenta tórax em barril, murmúrio vesicular globalmente diminuído e expiração prolongada. A espirometria pós-broncodilatador mostrou: VEF₁/CVF = 0,62; VEF₁ = 48% do previsto; DLCO reduzido. Na avaliação de sintomas e risco, apresenta mMRC = 3 e duas exacerbações no último ano, sendo uma grave. O paciente relata que usa LAMA isolado, mas mantém sintomas importantes. A conduta mais adequada segundo as recomendações GOLD 2024–2025, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aumentar a dose do LAMA isolado.",
        "explanation": "Incorreta: Aumentar dose de LAMA acima da posologia padrão não melhora eficácia e eleva efeitos anticolinérgicos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "manter LAMA e iniciar corticoterapia inalatória isolada.",
        "explanation": "Incorreta: Não se recomenda associação LAMA + ICS sem LABA (nem ICS isolado) na DPOC.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "iniciar associação LABA + LAMA.",
        "explanation": "Incorreta: Embora LABA + LAMA seja terapia inicial padrão do Grupo E, o paciente já faz uso de LAMA e teve exacerbação grave com mMRC 3, justificando a terapia tripla indicada no gabarito oficial GOLD 2024–2025.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "iniciar LABA + LAMA + ICS (“terapia tripla”).",
        "explanation": "A alternativa **D** está correta. O paciente tem DPOC confirmada ($\\text{VEF}_1/\\text{CVF} < 0{,}70$ pós-BD), classificada como **GOLD 3** ($\\text{VEF}_1 = 48\\%$) e **Grupo E** (≥ 2 exacerbações moderadas ou ≥ 1 grave no último ano), sintomático ($\\text{mMRC} = 3$) e já em uso de monoterapia com LAMA com falha de controle. Segundo o **GOLD 2024–2025**, pacientes exacerbadores graves em falha terapêutica com monoterapia ou dupla broncodilatação têm indicação de escalonamento para **terapia tripla (LABA + LAMA + ICS)** (idealmente em inalador único), que reduz mortalidade e novas exacerbações graves.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "solicitar TC de alta resolução antes de alterar a terapêutica.",
        "explanation": "Incorreta: A TC de alta resolução não deve atrasar a otimização do tratamento inalatório de um paciente exacerbador grave.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. O paciente tem DPOC confirmada ($\\text{VEF}_1/\\text{CVF} < 0{,}70$ pós-BD), classificada como **GOLD 3** ($\\text{VEF}_1 = 48\\%$) e **Grupo E** (≥ 2 exacerbações moderadas ou ≥ 1 grave no último ano), sintomático ($\\text{mMRC} = 3$) e já em uso de monoterapia com LAMA com falha de controle. Segundo o **GOLD 2024–2025**, pacientes exacerbadores graves em falha terapêutica com monoterapia ou dupla broncodilatação têm indicação de escalonamento para **terapia tripla (LABA + LAMA + ICS)** (idealmente em inalador único), que reduz mortalidade e novas exacerbações graves.\n- **A) Incorreta:** Aumentar dose de LAMA acima da posologia padrão não melhora eficácia e eleva efeitos anticolinérgicos.\n- **B) Incorreta:** Não se recomenda associação LAMA + ICS sem LABA (nem ICS isolado) na DPOC.\n- **C) Incorreta:** Embora LABA + LAMA seja terapia inicial padrão do Grupo E, o paciente já faz uso de LAMA e teve exacerbação grave com mMRC 3, justificando a terapia tripla indicada no gabarito oficial GOLD 2024–2025.\n- **E) Incorreta:** A TC de alta resolução não deve atrasar a otimização do tratamento inalatório de um paciente exacerbador grave.",
    "perolaClinica": "A alternativa **D** está correta. O paciente tem DPOC confirmada ($\\text{VEF}_1/\\text{CVF} < 0{,}70$ pós-BD), classificada como **GOLD 3** ($\\text{VEF}_1 = 48\\%$) e **Grupo E** (≥ 2 exacerbações moderadas ou ≥ 1 grave no último ano), sintomático ($\\text{mMRC}…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escalonamento para terapia tripla (LABA + LAMA + ICS) na DPOC Grupo E segundo GOLD.",
      "raciocinioChave": "Paciente com DPOC GOLD 3, mMRC 3 e duas exacerbações no último ano (uma grave) enquadra-se no Grupo E e já falha à monoterapia com LAMA. Pelas diretrizes GOLD 2024–2025, exacerbadores graves não controlados devem escalonar para terapia tripla com LABA + LAMA + ICS.",
      "armadilhaBanca": "Limitar-se à dupla broncodilatação (LABA + LAMA) ou aumentar a dose do LAMA isolado em um paciente sintomático com exacerbação grave prévia."
    },
    "mapaDistratores": {
      "A": "Elevar a dose do LAMA além da posologia padrão não melhora a broncodilatação e aumenta eventos adversos anticolinérgicos.",
      "B": "Não se recomenda combinar LAMA com corticoide inalatório sem um LABA, nem utilizar ICS em monoterapia na DPOC.",
      "C": "Embora LABA + LAMA seja opção inicial no Grupo E, o quadro grave e sintomático em falha de LAMA justifica o escalonamento direto para terapia tripla.",
      "E": "Solicitar TC de alta resolução não deve atrasar a otimização do tratamento inalatório em paciente exacerbador grave."
    }
  },
  {
    "id": "q-uepa-2026-032",
    "code": "Q-UEPA26-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Distúrbios Ácido-Básicos",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-disturbios-acido-basicos",
    "tags": [
      "disturbio-misto",
      "acidose-metabolica",
      "acidose-respiratoria",
      "formula-de-winter"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 82 anos, previamente hígido, é admitido no pronto socorro com história de diarreia profusa há 5 dias, redução da ingesta hídrica e piora progressiva do estado mental. A família nega uso de diuréticos, vômitos ou doenças prévias. Ao exame: sonolento, hipoperfundido, respiração rápida e superficial, PA 90/58 mmHg, FC 112 bpm, FR 26 irpm, pulsos finos. Exame neurológico sem sinais focais. Exames na admissão: Gasometria arterial em ar ambiente: pH = 7,21; PaCO₂ = 38mmHg; PaO₂ = 85mmHg; HCO₃⁻ = 14 mEq/L; BE = –12; Lactato = 2,8 mmol/L; Na⁺ = 140 mEq/L; Cl⁻ = 107 mEq/L. A interpretação mais provável do distúrbio acidobásico, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "acidose metabólica pura, com compensação respiratória adequada segundo Winter.",
        "explanation": "Incorreta: A $\\text{PaCO}_2$ de 38 mmHg excede amplamente a faixa esperada pela fórmula de Winter (27–31 mmHg).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "distúrbio misto com acidose metabólica e alcalose metabólica.",
        "explanation": "Incorreta: O ânion gap é $140 - (107 + 14) = 19$ (acidose mista hiperclorêmica + lática leve), sem evidência de alcalose metabólica primária (e a $\\text{PaCO}_2$ elevada indica acidose respiratória).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "acidose metabólica com alcalose respiratória compensatória.",
        "explanation": "Incorreta: Não existe \"alcalose respiratória compensatória\" (compensação não é alcalose) e o paciente está retendo $\\text{CO}_2$, não hiperventilando além do esperado.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "distúrbio misto com acidose metabólica e alcalose respiratória.",
        "explanation": "Incorreta: Alcalose respiratória associada exigiria $\\text{PaCO}_2 < 27\\text{ mmHg}$.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "acidose metabólica com acidose respiratória associada.",
        "explanation": "A alternativa **E** está correta. Há acidemia grave ($\\text{pH} = 7{,}21$) com queda importante do bicarbonato ($\\text{HCO}_3^- = 14\\text{ mEq/L}$), caracterizando **acidose metabólica** (por perda digestiva de bicarbonato + hipoperfusão/lactato 2,8). Aplicando a **Fórmula de Winter** para avaliar a compensação respiratória esperada:",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Há acidemia grave ($\\text{pH} = 7{,}21$) com queda importante do bicarbonato ($\\text{HCO}_3^- = 14\\text{ mEq/L}$), caracterizando **acidose metabólica** (por perda digestiva de bicarbonato + hipoperfusão/lactato 2,8). Aplicando a **Fórmula de Winter** para avaliar a compensação respiratória esperada:\n$$\\text{PaCO}_2\\text{ esperada} = (1{,}5 \\times \\text{HCO}_3^-) + 8 \\pm 2 = (1{,}5 \\times 14) + 8 \\pm 2 = 29 \\pm 2\\text{ mmHg}\\ (27\\text{ a }31\\text{ mmHg})$$\nComo a $\\text{PaCO}_2$ medida é **38 mmHg** (significativamente acima de 31 mmHg, compatível com a sonolência e respiração superficial do idoso), há retenção relativa de $\\text{CO}_2$, configurando **distúrbio misto: acidose metabólica com acidose respiratória associada** (Harrison / Rose).\n- **A) Incorreta:** A $\\text{PaCO}_2$ de 38 mmHg excede amplamente a faixa esperada pela fórmula de Winter (27–31 mmHg).\n- **B) Incorreta:** O ânion gap é $140 - (107 + 14) = 19$ (acidose mista hiperclorêmica + lática leve), sem evidência de alcalose metabólica primária (e a $\\text{PaCO}_2$ elevada indica acidose respiratória).\n- **C) Incorreta:** Não existe \"alcalose respiratória compensatória\" (compensação não é alcalose) e o paciente está retendo $\\text{CO}_2$, não hiperventilando além do esperado.\n- **D) Incorreta:** Alcalose respiratória associada exigiria $\\text{PaCO}_2 < 27\\text{ mmHg}$.",
    "perolaClinica": "A alternativa **E** está correta. Há acidemia grave ($\\text{pH} = 7{,}21$) com queda importante do bicarbonato ($\\text{HCO}_3^- = 14\\text{ mEq/L}$), caracterizando **acidose metabólica** (por perda digestiva de bicarbonato + hipoperfusão/lactato 2,8).…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Uso da fórmula de Winter para identificar acidose respiratória associada à acidose metabólica.",
      "raciocinioChave": "Com pH 7,21 e HCO3- de 14 mEq/L, há acidose metabólica primária cuja PaCO2 compensatória esperada pela fórmula de Winter é 27 a 31 mmHg. Como a PaCO2 medida é 38 mmHg (acima do limite esperado), há retenção adicional de CO2 caracterizando acidose respiratória associada.",
      "armadilhaBanca": "Assumir que PaCO2 de 38 mmHg é normal ou que a taquipneia de 26 irpm indica compensação adequada ou alcalose respiratória."
    },
    "mapaDistratores": {
      "A": "A PaCO2 observada de 38 mmHg supera a faixa esperada pela fórmula de Winter (27–31 mmHg), afastando compensação pura.",
      "B": "Não há elevação primária de bicarbonato ou evidência de alcalose metabólica, mas sim retenção relativa de CO2 configurando acidose respiratória.",
      "C": "Respostas compensatórias fisiológicas não configuram alcalose secundária, e o paciente apresenta retenção relativa de CO2 em vez de hiperventilação excessiva.",
      "D": "Alcalose respiratória associada exigiria PaCO2 inferior a 27 mmHg, abaixo do limite inferior previsto por Winter."
    }
  },
  {
    "id": "q-uepa-2026-033",
    "code": "Q-UEPA26-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondiloartrites",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-espondiloartrites",
    "tags": [
      "espondilite-anquilosante",
      "lombalgia-inflamatoria",
      "espondiloartrites"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em qual das situações clínicas abaixo o diagnóstico de Espondilite Anquilosante (EA) deve ser mais fortemente considerado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Homem de 27 anos com dor lombar baixa intermitente há 8 anos, piora ao caminhar longas distâncias e melhora em repouso; exame físico sem limitação de mobilidade.",
        "explanation": "Incorreta: Dor que piora com esforço/caminhada e melhora ao repouso é padrão de **lombalgia mecânica**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Homem de 30 anos com dor lombar insidiosa há 6 anos, rigidez matinal por > 1h, acorda à noite por dor lombar e relata melhora importante com prática regular de atividade física; refere episódios recorrentes de dor glútea alternante.",
        "explanation": "A alternativa **B** está correta. Pelos critérios **ASAS** (e diretriz da Sociedade Brasileira de Reumatologia — SBR), a **lombalgia inflamatória** típica da **Espondilite Anquilosante (EA)** ocorre em adultos jovens (< 40–45 anos), tem início insidioso, duração crônica (> 3 meses), **rigidez matinal prolongada (> 30–60 min)**, **melhora com exercício físico** (e não com repouso), **dor noturna** que melhora ao levantar-se e **dor glútea alternante** (sacroileíte).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Homem de 45 anos com dor lombar contínua há 4 anos, irradiando para face posterior da coxa, piora ao sentar e melhora com repouso e analgésicos simples; teste de Lasègue positivo.",
        "explanation": "Incorreta: Dor irradiada para face posterior da coxa com sinal de Lasègue positivo e melhora no repouso caracteriza **lombociatalgia / radiculopatia** (hérnia discal).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Homem de 34 anos com dor lombar leve e recorrente há 10 anos, agora com episódio abrupto de dor intensa e incapacidade de movimentar o hálux direito após carregar peso.",
        "explanation": "Incorreta: Déficit motor agudo do hálux após esforço físico indica **radiculopatia compressiva de L5** (hérnia de disco aguda).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Mulher de 28 anos com dor lombar leve e recorrente há 2 anos, agora com episódio abrupto de dor intensa e incapacidade de movimentar o pé direito após carregar peso.",
        "explanation": "Incorreta: Pé caído / incapacidade súbita de movimentar o pé após carregar peso sugere compressão radicular aguda (L5/S1) ou lesão neural periférica, não EA.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Pelos critérios **ASAS** (e diretriz da Sociedade Brasileira de Reumatologia — SBR), a **lombalgia inflamatória** típica da **Espondilite Anquilosante (EA)** ocorre em adultos jovens (< 40–45 anos), tem início insidioso, duração crônica (> 3 meses), **rigidez matinal prolongada (> 30–60 min)**, **melhora com exercício físico** (e não com repouso), **dor noturna** que melhora ao levantar-se e **dor glútea alternante** (sacroileíte).\n- **A) Incorreta:** Dor que piora com esforço/caminhada e melhora ao repouso é padrão de **lombalgia mecânica**.\n- **C) Incorreta:** Dor irradiada para face posterior da coxa com sinal de Lasègue positivo e melhora no repouso caracteriza **lombociatalgia / radiculopatia** (hérnia discal).\n- **D) Incorreta:** Déficit motor agudo do hálux após esforço físico indica **radiculopatia compressiva de L5** (hérnia de disco aguda).\n- **E) Incorreta:** Pé caído / incapacidade súbita de movimentar o pé após carregar peso sugere compressão radicular aguda (L5/S1) ou lesão neural periférica, não EA.",
    "perolaClinica": "A alternativa **B** está correta. Pelos critérios **ASAS** (e diretriz da Sociedade Brasileira de Reumatologia — SBR), a **lombalgia inflamatória** típica da **Espondilite Anquilosante (EA)** ocorre em adultos jovens (< 40–45 anos), tem início insidioso,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critérios clínicos de lombalgia inflamatória na Espondilite Anquilosante (ASAS).",
      "raciocinioChave": "A espondilite anquilosante manifesta-se em adultos jovens com lombalgia crônica insidiosa (> 3 meses), rigidez matinal prolongada (> 1 hora), despertar noturno por dor, melhora com exercício e dor glútea alternante. Esses achados preenchem os critérios ASAS de lombalgia inflamatória.",
      "armadilhaBanca": "Confundir lombalgia inflamatória (melhora com movimento/exercício) com lombalgia mecânica ou radiculopatia aguda com déficit motor/Lasègue."
    },
    "mapaDistratores": {
      "A": "Dor lombar que piora ao caminhar e alivia com o repouso caracteriza padrão típico de lombalgia mecânica.",
      "C": "Irradiação para face posterior da coxa com Lasègue positivo e melhora no repouso indica radiculopatia ciática, geralmente por hérnia discal.",
      "D": "Déficit motor súbito do hálux após carregamento de peso aponta para compressão radicular aguda de L5.",
      "E": "Incapacidade abrupta de movimentar o pé após esforço físico sugere radiculopatia compressiva aguda ou lesão neural periférica."
    }
  },
  {
    "id": "q-uepa-2026-034",
    "code": "Q-UEPA26-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Geriatria e Oncologia Clínica",
    "subtema": "Síndromes Geriátricas e Avaliação Geriátrica Ampla",
    "temaSlug": "cm-geriatria",
    "subtemaSlug": "cm-geriatria-sindromes-geriatricas-e-avaliacao-geriatrica-ampla",
    "tags": [
      "sarcopenia",
      "fibras-musculares",
      "envelhecimento",
      "geriatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A sarcopenia e o envelhecimento muscular estão associados a alterações estruturais e funcionais das fibras musculares esqueléticas. Considerando os efeitos do envelhecimento sobre os diferentes tipos de fibras. A alternativa que descreve corretamente a mudança predominante observada na musculatura de idosos, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aumento proporcional de fibras do tipo I (oxidativas) com redução seletiva de fibras do tipo II (rápidas).",
        "explanation": "A alternativa **A** está correta. Na fisiopatologia da **sarcopenia** (Consenso Europeu EWGSOP2 e tratados de Geriatria — Freitas/Py), o envelhecimento cursa com perda de unidades motoras rápidas e **atrofia/redução seletiva preferencial das fibras musculares tipo II** (contração rápida, glicolíticas, responsáveis por potência e força explosiva), resultando em **aumento relativo/proporcional das fibras tipo I** (lentas, oxidativas).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "aumento predominante de fibras do tipo II, com redução da densidade de fibras tipo I.",
        "explanation": "Incorreta: Ocorre exatamente o oposto — redução preferencial das fibras tipo II.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "redução isolada do diâmetro das fibras do tipo I com preservação das fibras tipo II.",
        "explanation": "Incorreta: As fibras tipo II são as mais precocemente e intensamente atrofiadas, não preservadas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "aumento absoluto do número de fibras I e II devido à hiperplasia compensatória.",
        "explanation": "Incorreta: O envelhecimento cursa com perda progressiva (hipotrofia/hipoplasia) de fibras musculares, não hiperplasia compensatória.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "conversão predominante de fibras tipo I em fibras tipo II com perda de resistência muscular.",
        "explanation": "Incorreta: A reinervação colateral por motoneurônios lentos tende a converter unidades rápidas em lentas (tipo II → tipo I), e não o inverso.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Na fisiopatologia da **sarcopenia** (Consenso Europeu EWGSOP2 e tratados de Geriatria — Freitas/Py), o envelhecimento cursa com perda de unidades motoras rápidas e **atrofia/redução seletiva preferencial das fibras musculares tipo II** (contração rápida, glicolíticas, responsáveis por potência e força explosiva), resultando em **aumento relativo/proporcional das fibras tipo I** (lentas, oxidativas).\n- **B) Incorreta:** Ocorre exatamente o oposto — redução preferencial das fibras tipo II.\n- **C) Incorreta:** As fibras tipo II são as mais precocemente e intensamente atrofiadas, não preservadas.\n- **D) Incorreta:** O envelhecimento cursa com perda progressiva (hipotrofia/hipoplasia) de fibras musculares, não hiperplasia compensatória.\n- **E) Incorreta:** A reinervação colateral por motoneurônios lentos tende a converter unidades rápidas em lentas (tipo II → tipo I), e não o inverso.",
    "perolaClinica": "A alternativa **A** está correta. Na fisiopatologia da **sarcopenia** (Consenso Europeu EWGSOP2 e tratados de Geriatria — Freitas/Py), o envelhecimento cursa com perda de unidades motoras rápidas e **atrofia/redução seletiva preferencial das fibras musculares…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Alterações histológicas das fibras musculares na sarcopenia e no envelhecimento.",
      "raciocinioChave": "Com o envelhecimento e a sarcopenia, ocorre perda de motoneurônios rápidos e atrofia seletiva preferencial das fibras musculares tipo II (rápidas/glicolíticas). Consequentemente, observa-se preservação relativa e aumento proporcional das fibras tipo I (oxidativas).",
      "armadilhaBanca": "Inverter os tipos de fibra afetados ou supor hiperplasia compensatória em vez de perda e atrofia seletiva das fibras rápidas tipo II."
    },
    "mapaDistratores": {
      "B": "No envelhecimento muscular ocorre exatamente o inverso, com perda e atrofia preferencial das fibras tipo II.",
      "C": "As fibras tipo II são as mais precoce e intensamente atrofiadas na sarcopenia, não sendo poupadas.",
      "D": "O envelhecimento promove redução do número e do volume das fibras musculares, e não hiperplasia compensatória.",
      "E": "A reinervação colateral por motoneurônios lentos tende a converter fibras tipo II em tipo I, e não o oposto."
    }
  },
  {
    "id": "q-uepa-2026-035",
    "code": "Q-UEPA26-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Farmacodermias Graves",
    "temaSlug": "cm-dermato",
    "subtemaSlug": "cm-dermato-farmacodermias-graves",
    "tags": [
      "sindrome-dress",
      "carbamazepina",
      "hhv-6",
      "farmacodermias"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 42 anos, previamente hígido, iniciou carbamazepina há 6 semanas para neuralgia do trigêmeo. Apresenta quadro progressivo de febre alta, mal-estar, edema facial e exantema morbiliforme difuso com áreas de descamação. Ao exame, há linfadenomegalia generalizada, icterícia leve e acometimento de mucosa oral. Não há lesões alvo típicas. O descolamento epidérmico envolve < 5% da superfície corporal. Laboratório: Eosinófilos: 2.800/mm³; Transaminases: ALT 320 U/L / AST 220 U/L; Creatinina: normal; DHL: aumentada; VHS e PCR elevados; IgE: aumentada; Sorologias virais negativas, PCR para HHV-6 positivo. Biópsia de pele: dermatite interface com infiltrado linfocitário e eosinofílico. O diagnóstico mais provável, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome de Stevens-Johnson associado a reação exantemática simples.",
        "explanation": "Incorreta: SSJ caracteriza-se por necrose epidérmica de espessura total, lesões em alvo atípicas, acometimento mucoso exuberante e latência mais curta (1–3 semanas), sem eosinofilia marcante/reativação de HHV-6 típica de DRESS.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "NET (Necrólise Epidérmica Tóxica) precoce com envolvimento sistêmico.",
        "explanation": "Incorreta: NET exige descolamento epidérmico > 30% da superfície corporal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Síndrome DRESS induzida por carbamazepina com reativação viral.",
        "explanation": "A alternativa **C** está correta. O paciente preenche todos os critérios **RegiSCAR** para **Síndrome DRESS** (*Drug Reaction with Eosinophilia and Systemic Symptoms*): latência prolongada (2–8 semanas após droga clássica como **carbamazepina**), febre alta, **edema facial** proeminente, exantema morbiliforme difuso sem necrose epidérmica extensa, **linfadenomegalia generalizada**, **eosinofilia acentuada (2.800/mm³)**, **lesão hepática (ALT 320 / AST 220)** e **reativação de HHV-6** (herpesvírus humano tipo 6).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Eritema multiforme maior secundário a infecção herpética.",
        "explanation": "Incorreta: Eritema multiforme apresenta lesões em alvo típicas (três zonas concêntricas), geralmente acrais, sem eosinofilia grave nem hepatite/HHV-6.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Reação exantemática simples por hipersensibilidade tardia.",
        "explanation": "Incorreta: Reação exantemática simples não cursa com acometimento visceral (hepatite), linfadenomegalia generalizada e eosinofilia grave.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. O paciente preenche todos os critérios **RegiSCAR** para **Síndrome DRESS** (*Drug Reaction with Eosinophilia and Systemic Symptoms*): latência prolongada (2–8 semanas após droga clássica como **carbamazepina**), febre alta, **edema facial** proeminente, exantema morbiliforme difuso sem necrose epidérmica extensa, **linfadenomegalia generalizada**, **eosinofilia acentuada (2.800/mm³)**, **lesão hepática (ALT 320 / AST 220)** e **reativação de HHV-6** (herpesvírus humano tipo 6).\n- **A) Incorreta:** SSJ caracteriza-se por necrose epidérmica de espessura total, lesões em alvo atípicas, acometimento mucoso exuberante e latência mais curta (1–3 semanas), sem eosinofilia marcante/reativação de HHV-6 típica de DRESS.\n- **B) Incorreta:** NET exige descolamento epidérmico > 30% da superfície corporal.\n- **D) Incorreta:** Eritema multiforme apresenta lesões em alvo típicas (três zonas concêntricas), geralmente acrais, sem eosinofilia grave nem hepatite/HHV-6.\n- **E) Incorreta:** Reação exantemática simples não cursa com acometimento visceral (hepatite), linfadenomegalia generalizada e eosinofilia grave.",
    "perolaClinica": "A alternativa **C** está correta. O paciente preenche todos os critérios **RegiSCAR** para **Síndrome DRESS** (*Drug Reaction with Eosinophilia and Systemic Symptoms*): latência prolongada (2–8 semanas após droga clássica como **carbamazepina**), febre alta,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico da síndrome DRESS por anticonvulsivante aromático e reativação de HHV-6.",
      "raciocinioChave": "Latência de 6 semanas após carbamazepina, febre, edema facial, exantema morbiliforme sem necrose extensa, linfadenomegalia, eosinofilia importante, hepatite e PCR positivo para HHV-6 preenchem os critérios RegiSCAR de síndrome DRESS. O descolamento < 5% afasta NET.",
      "armadilhaBanca": "Confundir com Síndrome de Stevens-Johnson ou NET apesar do descolamento epidérmico mínimo, edema facial, eosinofilia acentuada e reativação de HHV-6."
    },
    "mapaDistratores": {
      "A": "A Síndrome de Stevens-Johnson apresenta lesões em alvo atípicas com necrose epidérmica e acometimento mucoso grave, sem eosinofilia intensa ou HHV-6 típicos de DRESS.",
      "B": "A necrólise epidérmica tóxica exige descolamento epidérmico superior a 30% da superfície corporal.",
      "D": "O eritema multiforme maior cursa com lesões em alvo clássicas de três zonas, sem eosinofilia marcante, hepatite ou reativação viral por HHV-6.",
      "E": "O exantema medicamentoso simples não provoca disfunção visceral hepática, linfadenomegalia difusa nem eosinofilia grave."
    }
  },
  {
    "id": "q-uepa-2026-036",
    "code": "Q-UEPA26-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Choque e Monitorização Hemodinâmica",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-choque-e-monitorizacao-hemodinamica",
    "tags": [
      "anafilaxia",
      "adrenalina-im",
      "edema-de-glote",
      "emergencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 56 anos, hipertenso em uso de enalapril há 4 anos, apresenta edema súbito de lábios e glote, estridor, dificuldade respiratória e sensação de “morte iminente” minutos após ingerir camarão durante uma confraternização. Ao chegar ao pronto-socorro, encontra-se ansioso, com fala incompreensível, sialorreia, PA- 90/50mmHg, FC- 128 bpm, SatO₂ 88% em ar ambiente, sem urticária visível. Não há história prévia de alergias. O médico plantonista questiona se o quadro pode ser angioedema bradicinérgico ou anafilaxia. A conduta inicial mais apropriada, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administrar adrenalina IM imediatamente na face anterolateral da coxa, mesmo na ausência de urticária.",
        "explanation": "A alternativa **A** está correta. O paciente apresenta quadro agudo após exposição a alérgeno provável (camarão) com **comprometimento respiratório grave (estridor, hipoxemia 88%) + hipotensão (90/50 mmHg) + angioedema de via aérea** — critérios diagnósticos formais de **anafilaxia** (WAO / ASBAI), que pode ocorrer **sem urticária em até 10–20% dos casos**. Na dúvida entre anafilaxia e angioedema bradicinérgico em paciente chocado/hipoxêmico, a prioridade absoluta de primeira linha é **adrenalina intramuscular (0,3–0,5 mg de solução 1:1000) na face anterolateral da coxa** imediatamente.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "iniciar adrenalina EV em infusão lenta após pré-tratamento com anti-histamínicos.",
        "explanation": "Incorreta: A via inicial de escolha é **IM**, nunca atrasada por anti-histamínicos; adrenalina EV reserva-se a choque refratário a múltiplas doses IM.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "administrar icatibanto ou concentrado de C1 esterase antes de considerar adrenalina.",
        "explanation": "Incorreta: Icatibanto/inibidor de C1 esterase não trata anafilaxia e nunca deve retardar a adrenalina diante de choque e exposição alimentar aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "administrar apenas anti-histamínico e corticoide, pois a ausência de urticária sugere angioedema bradicinérgico.",
        "explanation": "Incorreta: Anti-histamínicos e corticoides são medicações de segunda linha que não revertem broncoespasmo, edema de glote nem choque (e tampouco tratam angioedema bradicinérgico).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "indicar intubação orotraqueal imediata antes de qualquer outra medida terapêutica.",
        "explanation": "Incorreta: Embora o preparo para via aérea difícil seja essencial, a administração imediata de adrenalina IM não deve ser retardada, pois pode reverter rapidamente o edema laríngeo e o choque.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. O paciente apresenta quadro agudo após exposição a alérgeno provável (camarão) com **comprometimento respiratório grave (estridor, hipoxemia 88%) + hipotensão (90/50 mmHg) + angioedema de via aérea** — critérios diagnósticos formais de **anafilaxia** (WAO / ASBAI), que pode ocorrer **sem urticária em até 10–20% dos casos**. Na dúvida entre anafilaxia e angioedema bradicinérgico em paciente chocado/hipoxêmico, a prioridade absoluta de primeira linha é **adrenalina intramuscular (0,3–0,5 mg de solução 1:1000) na face anterolateral da coxa** imediatamente.\n- **B) Incorreta:** A via inicial de escolha é **IM**, nunca atrasada por anti-histamínicos; adrenalina EV reserva-se a choque refratário a múltiplas doses IM.\n- **C) Incorreta:** Icatibanto/inibidor de C1 esterase não trata anafilaxia e nunca deve retardar a adrenalina diante de choque e exposição alimentar aguda.\n- **D) Incorreta:** Anti-histamínicos e corticoides são medicações de segunda linha que não revertem broncoespasmo, edema de glote nem choque (e tampouco tratam angioedema bradicinérgico).\n- **E) Incorreta:** Embora o preparo para via aérea difícil seja essencial, a administração imediata de adrenalina IM não deve ser retardada, pois pode reverter rapidamente o edema laríngeo e o choque.",
    "perolaClinica": "A alternativa **A** está correta. O paciente apresenta quadro agudo após exposição a alérgeno provável (camarão) com **comprometimento respiratório grave (estridor, hipoxemia 88%) + hipotensão (90/50 mmHg) + angioedema de via aérea** — critérios diagnósticos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Adrenalina intramuscular imediata na anafilaxia mesmo sem urticária.",
      "raciocinioChave": "Exposição aguda a camarão seguida de estridor, hipoxemia (SatO2 88%), edema de glote e hipotensão preenche critérios formais de anafilaxia, que dispensa urticária em até 20% dos casos. A conduta salvadora imediata é adrenalina intramuscular na face anterolateral da coxa.",
      "armadilhaBanca": "Atrasar a adrenalina IM suspeitando de angioedema bradicinérgico por enalapril devido à ausência de urticária, ou tentar anti-histamínico/corticoide antes."
    },
    "mapaDistratores": {
      "B": "A via inicial padrão na anafilaxia é a intramuscular, nunca devendo ser atrasada por pré-medicação com anti-histamínicos.",
      "C": "Icatibanto ou concentrado de C1-esterase não tratam anafilaxia mediada por IgE e não devem retardar a adrenalina frente a choque e estridor.",
      "D": "Anti-histamínicos e corticoides são adjuvantes lentos que não revertem edema de glote, broncoespasmo ou choque.",
      "E": "Embora o manejo da via aérea seja crítico, a administração imediata de adrenalina IM deve ser feita sem demora para tentar reverter o edema laríngeo."
    }
  },
  {
    "id": "q-uepa-2026-037",
    "code": "Q-UEPA26-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Síndrome Coronariana Aguda sem Supra de ST",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-sindrome-coronariana-aguda-sem-supra-de-st",
    "tags": [
      "trombose-de-stent",
      "cyp2c19",
      "prasugrel",
      "ticagrelor"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 58 anos, com IAM prévio tratado com angioplastia há 3 meses, está em uso de AAS + clopidogrel + atorvastatina. Mantém estilo de vida adequado, sem sangramentos ou efeitos adversos. Contudo, retorna ao pronto-socorro com dor torácica e nova elevação de troponina. A cineangiografia revela trombose do stent, apesar da adesão medicamentosa. Foi solicitada avaliação farmacogenômica de rotina pós-evento, revelando: CYP2C19 2 / 2 Lof (loss-of-function, metabolizador pobre); SLCO1B1 c.521CC (alto risco de miopatia com estatinas). Genótipo normal para CES1, ABCB1 e CYP3A4. A conduta mais adequada para reduzir o risco de novo evento trombótico, considerando o perfil farmacogenético, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "substituir clopidogrel por prasugrel ou ticagrelor devido à ineficácia mediada por CYP2C19.",
        "explanation": "A alternativa **A** está correta. O **clopidogrel** é um pró-fármaco que depende de bioativação hepática pela enzima **CYP2C19**. Pacientes homozigotos para alelos de perda de função (`CYP2C19 *2/*2`, metabolizadores pobres) têm falha de inibição plaquetária e alto risco de **trombose de stent**. Pelas diretrizes **CPIC** e **SBC/ACC/AHA**, deve-se substituir o clopidogrel por um inibidor P2Y12 cuja ativação não depende do CYP2C19: **prasugrel** ou **ticagrelor**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "manter clopidogrel e aumentar a dose, para 150mg/fis.",
        "explanation": "Incorreta: Dobrar a dose de clopidogrel não supera adequadamente a perda completa de função em metabolizadores pobres (`*2/*2`).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "suspender a dupla antiagregação e introduzir anticoagulação plena com rivaroxabana.",
        "explanation": "Incorreta: Anticoagulação isolada com rivaroxabana não substitui a dupla antiagregação plaquetária (DAPT) na prevenção de trombose de stent coronariano.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "trocar atorvastatina por rosuvastatina devido ao genótipo SLCO1B1.",
        "explanation": "Incorreta: Embora o genótipo SLCO1B1 aumente risco de miopatia (especialmente com sinvastatina), o paciente tolera bem a atorvastatina sem efeitos adversos e essa troca não reduz o risco de nova trombose de stent.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "suspender estatina e manter apenas antiagregação até completar 12 meses pós-IAM.",
        "explanation": "Incorreta: Suspender estatina de alta potência após IAM e trombose de stent é contraindicado e aumenta mortalidade cardiovascular.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. O **clopidogrel** é um pró-fármaco que depende de bioativação hepática pela enzima **CYP2C19**. Pacientes homozigotos para alelos de perda de função (`CYP2C19 *2/*2`, metabolizadores pobres) têm falha de inibição plaquetária e alto risco de **trombose de stent**. Pelas diretrizes **CPIC** e **SBC/ACC/AHA**, deve-se substituir o clopidogrel por um inibidor P2Y12 cuja ativação não depende do CYP2C19: **prasugrel** ou **ticagrelor**.\n- **B) Incorreta:** Dobrar a dose de clopidogrel não supera adequadamente a perda completa de função em metabolizadores pobres (`*2/*2`).\n- **C) Incorreta:** Anticoagulação isolada com rivaroxabana não substitui a dupla antiagregação plaquetária (DAPT) na prevenção de trombose de stent coronariano.\n- **D) Incorreta:** Embora o genótipo SLCO1B1 aumente risco de miopatia (especialmente com sinvastatina), o paciente tolera bem a atorvastatina sem efeitos adversos e essa troca não reduz o risco de nova trombose de stent.\n- **E) Incorreta:** Suspender estatina de alta potência após IAM e trombose de stent é contraindicado e aumenta mortalidade cardiovascular.",
    "perolaClinica": "A alternativa **A** está correta. O **clopidogrel** é um pró-fármaco que depende de bioativação hepática pela enzima **CYP2C19**. Pacientes homozigotos para alelos de perda de função (`CYP2C19 *2/*2`, metabolizadores pobres) têm falha de inibição plaquetária…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Farmacogenômica do clopidogrel (CYP2C19 *2/*2) na trombose de stent coronariano.",
      "raciocinioChave": "O clopidogrel é um pró-fármaco que depende da enzima CYP2C19 para bioativação plaquetária; metabolizadores pobres (*2/*2) apresentam ineficácia terapêutica e alto risco de trombose de stent. Deve-se substituir por prasugrel ou ticagrelor, que não dependem dessa via.",
      "armadilhaBanca": "Tentar dobrar a dose de clopidogrel ou desviar a atenção para o genótipo SLCO1B1 das estatinas em paciente assintomático com atorvastatina."
    },
    "mapaDistratores": {
      "B": "Aumentar a dose de clopidogrel para 150 mg não supera de maneira eficaz a ausência de ativação em homozigotos perda de função (*2/*2).",
      "C": "A anticoagulação isolada com rivaroxabana não substitui a dupla antiagregação plaquetária na prevenção de trombose de stent.",
      "D": "Trocar atorvastatina bem tolerada por rosuvastatina não corrige a falha antiplaquetária nem reduz o risco imediato de nova trombose de stent.",
      "E": "Suspender a estatina após infarto e trombose de stent é contraindicado e eleva a mortalidade cardiovascular."
    }
  },
  {
    "id": "q-uepa-2026-038",
    "code": "Q-UEPA26-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Câncer de Mama",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-cancer-de-mama",
    "tags": [
      "brca1",
      "cancer-hereditario",
      "ressonancia-mamaria",
      "salpingooforectomia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 35 anos, sem comorbidades, procura aconselhamento genético após sua irmã de 38 anos receber diagnóstico de câncer de mama triplo-negativo. Sua mãe faleceu aos 44 anos por câncer de ovário seroso de alto grau. A paciente não possui filhos e ainda não realizou mamografia. O painel de NGS revelou uma variante patogênica em BRCA1. Exames físicos e laboratoriais são normais. Com base no risco genético e nas evidências disponíveis. A estratégia abaixo mais adequada neste momento, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "acompanhar anualmente apenas com mamografia a partir dos 40 anos.",
        "explanation": "Incorreta: Aguardar até os 40 anos apenas com mamografia atrasa gravemente o rastreamento em portadoras de BRCA1.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "recomendar Ressonância Mamária com contraste anual a partir de agora e considerar salpingooforectomia redutora a partir dos 35–40 anos.",
        "explanation": "A alternativa **B** está correta. Para portadoras de variante patogênica em **BRCA1**, as diretrizes **NCCN** e **FEBRASGO/SBM** recomendam rastreamento mamário de alto risco com **ressonância magnética mamária com contraste anual** (iniciada a partir dos 25 anos, associada à mamografia anual a partir dos 30 anos) e **salpingooforectomia bilateral redutora de risco (RRSO)** entre **35 e 40 anos** (após definição/conclusão do desejo reprodutivo), dada a ausência de rastreamento eficaz para câncer de ovário seroso de alto grau.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "iniciar quimioprevenção com tamoxifeno imediatamente, pois reduz câncer de mama associado a BRCA1.",
        "explanation": "Incorreta: Tumores associados a BRCA1 são predominantemente **triplo-negativos** (RE negativos), com evidência limitada para quimioprevenção isolada com tamoxifeno como estratégia principal.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar PET-CT anual como estratégia de rastreamento em portadoras de BRCA.",
        "explanation": "Incorreta: PET-CT não é método de rastreamento em portadoras assintomáticas de BRCA.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar mastectomia bilateral preventiva obrigatória antes dos 35 anos, independentemente de preferência da paciente.",
        "explanation": "Incorreta: A mastectomia redutora de risco é uma opção a ser discutida em decisão compartilhada, nunca obrigatória independentemente da preferência da paciente.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Para portadoras de variante patogênica em **BRCA1**, as diretrizes **NCCN** e **FEBRASGO/SBM** recomendam rastreamento mamário de alto risco com **ressonância magnética mamária com contraste anual** (iniciada a partir dos 25 anos, associada à mamografia anual a partir dos 30 anos) e **salpingooforectomia bilateral redutora de risco (RRSO)** entre **35 e 40 anos** (após definição/conclusão do desejo reprodutivo), dada a ausência de rastreamento eficaz para câncer de ovário seroso de alto grau.\n- **A) Incorreta:** Aguardar até os 40 anos apenas com mamografia atrasa gravemente o rastreamento em portadoras de BRCA1.\n- **C) Incorreta:** Tumores associados a BRCA1 são predominantemente **triplo-negativos** (RE negativos), com evidência limitada para quimioprevenção isolada com tamoxifeno como estratégia principal.\n- **D) Incorreta:** PET-CT não é método de rastreamento em portadoras assintomáticas de BRCA.\n- **E) Incorreta:** A mastectomia redutora de risco é uma opção a ser discutida em decisão compartilhada, nunca obrigatória independentemente da preferência da paciente.",
    "perolaClinica": "A alternativa **B** está correta. Para portadoras de variante patogênica em **BRCA1**, as diretrizes **NCCN** e **FEBRASGO/SBM** recomendam rastreamento mamário de alto risco com **ressonância magnética mamária com contraste anual** (iniciada a partir dos 25…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Rastreamento com RM mamária e cirurgia redutora de risco em portadora de BRCA1.",
      "raciocinioChave": "Portadoras de variante patogênica em BRCA1 devem iniciar rastreamento anual com ressonância magnética mamária com contraste já a partir dos 25 anos (e mamografia aos 30). Entre 35 e 40 anos recomenda-se discutir salpingooforectomia bilateral redutora de risco para prevenir câncer ovariano.",
      "armadilhaBanca": "Adiar o rastreamento para os 40 anos apenas com mamografia, indicar tamoxifeno como pilar em perfil triplo-negativo ou impor mastectomia obrigatória."
    },
    "mapaDistratores": {
      "A": "Aguardar os 40 anos e rastrear apenas com mamografia retarda gravemente a detecção precoce em portadoras de BRCA1.",
      "C": "Neoplasias ligadas ao BRCA1 costumam ser triplo-negativas (receptores hormonais negativos), limitando o papel do tamoxifeno como estratégia principal.",
      "D": "O PET-CT não é indicado como método de rastreamento de rotina em portadoras assintomáticas de BRCA.",
      "E": "A mastectomia redutora de risco é uma opção preventiva discutida de forma compartilhada, nunca uma imposição obrigatória."
    }
  },
  {
    "id": "q-uepa-2026-039",
    "code": "Q-UEPA26-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Doenças da Adrenal",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-doencas-da-adrenal",
    "tags": [
      "pseudohiperaldosteronismo",
      "alcacuz",
      "glicirrizina",
      "hipocalemia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você está atendendo no pronto-socorro em uma manhã de segunda-feira quando é chamada para avaliar uma paciente de 51 anos com fraqueza muscular e picos hipertensivos. Relata que nos últimos dias tem sentido “tremores”, cansaço intenso e cãibras nas pernas, piorando progressivamente. Refere dificuldade para controlar a pressão arterial nas últimas semanas, mesmo utilizando corretamente losartana 100 mg/dia. Também é diabética tipo 2, em uso regular de metformina 1 g/dia. A pressão arterial na admissão era 180 × 110 mmHg. Exames colhidos na triagem: potássio: 2,5 mEq/L; sódio: 143mEq/L; HCO₃: 32mEq/L; pH arterial: 7,49; creatinina: 0,8 mg/dL. Ao explorar hábitos, menciona que há 2 meses passou a consumir diariamente 15 balas dietéticas para controlar a vontade de comer doces. Quando questionada especificamente, informa que o rótulo menciona \"extrato de alcaçuz\". Ela também tomou naproxeno 250 mg 12/12h por 3 dias devido à lombalgia, não usa diuréticos. O diagnóstico ou mecanismo mais provável para explicar o quadro da paciente, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hipocalemia e hipertensão secundárias ao uso recente de AINE.",
        "explanation": "Incorreta: AINEs tendem a causar retenção hidrossalina e **hipercalemia** (não hipocalemia com alcalose metabólica grave).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Hipocalemia induzida pela losartana.",
        "explanation": "Incorreta: Losartana (BRA) reduz aldosterona e tende a causar **hipercalemia**, não hipocalemia.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Hiperaldosteronismo primário.",
        "explanation": "Incorreta: Embora o quadro clínico-laboratorial mimetize hiperaldosteronismo primário, a história explícita de ingestão diária de alcaçuz há 2 meses aponta diretamente para pseudohiperaldosteronismo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "efeito adverso metabólico da anlodipina.",
        "explanation": "Incorreta: A paciente nem sequer usa anlodipina (que tampouco causa hipocalemia/alcalose).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Pseudohiperaldosteronismo por ingestão crônica de alcaçuz (glicirrizina).",
        "explanation": "A alternativa **E** está correta. A tríade **hipertensão grave + hipocalemia (2,5 mEq/L) + alcalose metabólica (pH 7,49; HCO₃⁻ 32 mEq/L)** associada à ingestão diária crônica de **extrato de alcaçuz (ácido glicirrízico/glicirrizina)** caracteriza **pseudohiperaldosteronismo** (excesso aparente de mineralocorticoide adquirido). A glicirrizina inibe a enzima renal **11β-hidroxiesteroide desidrogenase tipo 2 (11β-HSD2)**, impedindo a conversão do cortisol em cortisona inativa e permitindo que o cortisol ative indevidamente os receptores mineralocorticoides (com renina e aldosterona suprimidas), segundo Harrison e Diretriz SBC de HAS.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta. A tríade **hipertensão grave + hipocalemia (2,5 mEq/L) + alcalose metabólica (pH 7,49; HCO₃⁻ 32 mEq/L)** associada à ingestão diária crônica de **extrato de alcaçuz (ácido glicirrízico/glicirrizina)** caracteriza **pseudohiperaldosteronismo** (excesso aparente de mineralocorticoide adquirido). A glicirrizina inibe a enzima renal **11β-hidroxiesteroide desidrogenase tipo 2 (11β-HSD2)**, impedindo a conversão do cortisol em cortisona inativa e permitindo que o cortisol ative indevidamente os receptores mineralocorticoides (com renina e aldosterona suprimidas), segundo Harrison e Diretriz SBC de HAS.\n- **A) Incorreta:** AINEs tendem a causar retenção hidrossalina e **hipercalemia** (não hipocalemia com alcalose metabólica grave).\n- **B) Incorreta:** Losartana (BRA) reduz aldosterona e tende a causar **hipercalemia**, não hipocalemia.\n- **C) Incorreta:** Embora o quadro clínico-laboratorial mimetize hiperaldosteronismo primário, a história explícita de ingestão diária de alcaçuz há 2 meses aponta diretamente para pseudohiperaldosteronismo.\n- **D) Incorreta:** A paciente nem sequer usa anlodipina (que tampouco causa hipocalemia/alcalose).",
    "perolaClinica": "A alternativa **E** está correta. A tríade **hipertensão grave + hipocalemia (2,5 mEq/L) + alcalose metabólica (pH 7,49; HCO₃⁻ 32 mEq/L)** associada à ingestão diária crônica de **extrato de alcaçuz (ácido glicirrízico/glicirrizina)** caracteriza…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Pseudohiperaldosteronismo induzido por alcaçuz (inibição da 11β-HSD2).",
      "raciocinioChave": "Hipertensão grave resistente, hipocalemia acentuada (2,5 mEq/L) e alcalose metabólica (pH 7,49; HCO3- 32 mEq/L) associadas ao consumo diário de balas de alcaçuz configuram pseudohiperaldosteronismo. A glicirrizina inibe a enzima renal 11β-HSD2, permitindo que o cortisol ative receptores mineralocorticoides.",
      "armadilhaBanca": "Diagnosticar hiperaldosteronismo primário ignorando o histórico alimentar de alcaçuz ou atribuir hipocalemia a BRA ou AINEs (que causam hipercalemia)."
    },
    "mapaDistratores": {
      "A": "Os anti-inflamatórios não esteroidais promovem retenção de potássio e hipercalemia, não hipocalemia com alcalose metabólica.",
      "B": "A losartana reduz a ação da angiotensina II e a secreção de aldosterona, predispondo à hipercalemia.",
      "C": "Embora simule clinicamente o hiperaldosteronismo primário, a exposição crônica diária ao alcaçuz explica o quadro como pseudohiperaldosteronismo.",
      "D": "A paciente não faz uso de anlodipina, e bloqueadores de canal de cálcio não causam hipocalemia e alcalose metabólica."
    }
  },
  {
    "id": "q-uepa-2026-040",
    "code": "Q-UEPA26-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Complicações Crônicas do Diabetes",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-complicacoes-cronicas-do-diabetes",
    "tags": [
      "quiroartropatia-diabetica",
      "sinal-da-prece",
      "complicacoes-cronicas-dm"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 58 anos, portador de diabetes mellitus tipo 2 há 18 anos, chega ao ambulatório relatando rigidez progressiva das mãos nos últimos 5 meses, dificultando abotoar camisas e manusear pequenos objetos. Refere uso irregular das medicações, HbA1c de 11% e história de neuropatia periférica sensitiva. No exame físico, ao ser solicitado que una as palmas das mãos em posição de prece, observa-se incapacidade de encostar completamente as superfícies das palmas e dos dedos, mantendo um espaço residual entre as mãos. Há pele espessada no dorso dos dedos. Reflexos presentes e sem déficit motor evidente. O diagnóstico mais provável, neste caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Esclerose lateral amiotrófica.",
        "explanation": "Incorreta: ELA cursa com fraqueza progressiva, atrofia muscular, fasciculações e sinais de 1º e 2º neurônios motores.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Síndrome de Dupuytren.",
        "explanation": "Incorreta: A contratura de Dupuytren apresenta nódulos e cordões fibrosos palpáveis na fáscia palmar (sobretudo 4º e 5º dedos), sem espessamento difuso da pele dorsal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Artropatia diabética da mão.",
        "explanation": "A alternativa **C** está correta. A **artropatia diabética da mão** (ou **quiroartropatia diabética / síndrome da mobilidade articular limitada**) decorre da glicação não enzimática excessiva do colágeno dérmico e periarticular em pacientes com diabetes de longa data mal controlado (HbA1c 11%). Manifesta-se por pele espessada e cerosa no dorso dos dedos, limitação indolor da extensão articular e **sinal da prece positivo** (incapacidade de apor completamente as superfícies palmares e dos dedos), segundo a SBD e Harrison.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Artrite reumatoide inicial.",
        "explanation": "Incorreta: Artrite reumatoide apresenta sinovite inflamatória simétrica dolorosa (edema, calor, rigidez matinal > 1h), sem espessamento cutâneo ceroso típico.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Neuropatia periférica diabética motora.",
        "explanation": "Incorreta: O exame mostra reflexos preservados e ausência de déficit motor evidente.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A **artropatia diabética da mão** (ou **quiroartropatia diabética / síndrome da mobilidade articular limitada**) decorre da glicação não enzimática excessiva do colágeno dérmico e periarticular em pacientes com diabetes de longa data mal controlado (HbA1c 11%). Manifesta-se por pele espessada e cerosa no dorso dos dedos, limitação indolor da extensão articular e **sinal da prece positivo** (incapacidade de apor completamente as superfícies palmares e dos dedos), segundo a SBD e Harrison.\n- **A) Incorreta:** ELA cursa com fraqueza progressiva, atrofia muscular, fasciculações e sinais de 1º e 2º neurônios motores.\n- **B) Incorreta:** A contratura de Dupuytren apresenta nódulos e cordões fibrosos palpáveis na fáscia palmar (sobretudo 4º e 5º dedos), sem espessamento difuso da pele dorsal.\n- **D) Incorreta:** Artrite reumatoide apresenta sinovite inflamatória simétrica dolorosa (edema, calor, rigidez matinal > 1h), sem espessamento cutâneo ceroso típico.\n- **E) Incorreta:** O exame mostra reflexos preservados e ausência de déficit motor evidente.",
    "perolaClinica": "A alternativa **C** está correta. A **artropatia diabética da mão** (ou **quiroartropatia diabética / síndrome da mobilidade articular limitada**) decorre da glicação não enzimática excessiva do colágeno dérmico e periarticular em pacientes com diabetes de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico da quiroartropatia diabética pelo sinal da prece positivo em diabetes mal controlado.",
      "raciocinioChave": "Diabetes de longa duração com HbA1c elevada (11%) promove glicação do colágeno periarticular e dérmico. A rigidez indolor das mãos com sinal da prece positivo, pele espessada no dorso dos dedos e força/reflexos preservados confirma artropatia diabética da mão.",
      "armadilhaBanca": "Confundir a quiroartropatia diabética com síndrome de Dupuytren, que forma nódulos e cordões palmares sem espessamento cutâneo dorsal difuso."
    },
    "mapaDistratores": {
      "A": "A esclerose lateral amiotrófica cursa com fraqueza progressiva, atrofia muscular, fasciculações e sinais de primeiro e segundo neurônios motores, ausentes no exame físico.",
      "B": "A contratura de Dupuytren manifesta-se com nódulos e cordões fibrosos palpáveis na fáscia palmar, sobretudo nos 4º e 5º dedos, sem espessamento difuso da pele dorsal.",
      "D": "A artrite reumatoide provoca sinovite inflamatória simétrica dolorosa com edema, calor e rigidez matinal prolongada, sem espessamento cutâneo ceroso dorsal.",
      "E": "A neuropatia motora diabética cursaria com déficit motor e redução ou abolição de reflexos, achados ausentes no exame neurológico do paciente."
    }
  },
  {
    "id": "q-uepa-2026-041",
    "code": "Q-UEPA26-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": [
      "drenagem-toracica",
      "trauma-toracico",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante atendimento a um paciente politraumatizado, foi identificado desconforto respiratório moderado, FR 30, sat O2 93% em ar ambiente. No exame físico, possuía expansão torácica assimétrica e murmúrio vesicular abolido em hemitórax esquerdo. Diante da necessidade de uma drenagem torácica, o melhor local para a inserção do dreno, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "no 2° espaço intercostal na linha hemiclavicular à esquerda.",
        "explanation": "Incorreta: O 2º EIC na linha hemiclavicular era o sítio clássico de descompressão por agulha em crianças (ou edições antigas do ATLS), não de drenagem tubular definitiva.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "no 5° espaço intercostal na linha hemiclavicular à esquerda.",
        "explanation": "Incorreta: A linha hemiclavicular no 5º EIC atravessa músculo peitoral/mama e coloca em risco estruturas cardíacas à esquerda.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "no 5° espaço intercostal na linha axilar média à direita .",
        "explanation": "Incorreta: Lado contralateral (hemitórax direito) ao acometido.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "no 5° espaço intercostal na linha axilar média à esquerda.",
        "explanation": "A alternativa **D** está correta. Conforme o **ATLS 10ª edição**, a drenagem torácica fechada em selo d'água (toracostomia com dreno) deve ser realizada no \"triângulo de segurança\", no **5º espaço intercostal** (altura do mamilo), **anterior ou na linha axilar média**, no **lado acometido** — neste caso, o **hemitórax esquerdo** (onde o murmúrio vesicular está abolido).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "no 3° espaço intercostal na linha axilar média à direita.",
        "explanation": "Incorreta: Espaço intercostal incorreto e lado contralateral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Conforme o **ATLS 10ª edição**, a drenagem torácica fechada em selo d'água (toracostomia com dreno) deve ser realizada no \"triângulo de segurança\", no **5º espaço intercostal** (altura do mamilo), **anterior ou na linha axilar média**, no **lado acometido** — neste caso, o **hemitórax esquerdo** (onde o murmúrio vesicular está abolido).\n- **A) Incorreta:** O 2º EIC na linha hemiclavicular era o sítio clássico de descompressão por agulha em crianças (ou edições antigas do ATLS), não de drenagem tubular definitiva.\n- **B) Incorreta:** A linha hemiclavicular no 5º EIC atravessa músculo peitoral/mama e coloca em risco estruturas cardíacas à esquerda.\n- **C) Incorreta:** Lado contralateral (hemitórax direito) ao acometido.\n- **E) Incorreta:** Espaço intercostal incorreto e lado contralateral.",
    "perolaClinica": "A alternativa **D** está correta. Conforme o **ATLS 10ª edição**, a drenagem torácica fechada em selo d'água (toracostomia com dreno) deve ser realizada no \"triângulo de segurança\", no **5º espaço intercostal** (altura do mamilo), **anterior ou na linha…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Localização anatômica padrão pelo ATLS para drenagem torácica fechada no trauma torácico.",
      "raciocinioChave": "Murmúrio vesicular abolido à esquerda com assimetria torácica e desconforto respiratório indica pneumotórax/hemotórax à esquerda com necessidade de drenagem. Pelo ATLS 10ª edição, o dreno deve ser inserido no triângulo de segurança, no 5º espaço intercostal na linha axilar média (ou anterior) do hemitórax acometido.",
      "armadilhaBanca": "Confundir o sítio de toracocentese de alívio ou edições antigas (2º EIC hemiclavicular) ou inverter o lado acometido na drenagem torácica."
    },
    "mapaDistratores": {
      "A": "O 2º espaço intercostal na linha hemiclavicular era sítio clássico de descompressão por agulha em crianças ou edições antigas do ATLS, não de drenagem tubular definitiva.",
      "B": "A inserção no 5º espaço intercostal na linha hemiclavicular esquerda atravessa musculatura peitoral/mama e oferece risco direto de lesão cardíaca.",
      "C": "O murmúrio vesicular está abolido à esquerda, tornando incorreta a drenagem no hemitórax direito contralateral.",
      "E": "Além de indicar o hemitórax direito contralateral, o 3º espaço intercostal foge ao triângulo de segurança preconizado pelo ATLS."
    }
  },
  {
    "id": "q-uepa-2026-042",
    "code": "Q-UEPA26-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Colelitíase e Colecistite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-colelitiase-e-colecistite-aguda",
    "tags": [
      "incisao-de-kocher",
      "colecistectomia",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "needsTaxonomyReview": true,
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente previamente hígido, 45 anos, comparece ao pronto socorro com queixa de dor difusa abdominal, vômitos, diarreia e mal estar iniciados há 1 dia. Durante o exame físico, percebe-se a presença de uma cicatriz abdominal devido uma cirurgia eletiva prévia de colecistectomia aberta. O nome e a localização desse tipo de incisão é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "incisão de Rockey-Davis, localizada transversalmente em fossa ilíaca direita.",
        "explanation": "Incorreta: Rockey-Davis é incisão transversa em FID usada para apendicectomia.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "incisão de Kocher, localizada obliquamente em região de hipocôndrio esquerdo.",
        "explanation": "Incorreta: Kocher localiza-se no hipocôndrio/subcostal **direito**, não esquerdo.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "incisão de Mcburney, localizada obliquamente em região de fossa ilíaca direita.",
        "explanation": "Incorreta: McBurney é incisão oblíqua em FID usada para apendicectomia.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "incisão mediana, localizada em epigástrio.",
        "explanation": "Parcialmente defensável (possível motivo de recurso): Embora a incisão mediana supraumbilical possa ser usada em cirurgias biliares, a incisão clássica específica da colecistectomia aberta é a de Kocher.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "incisão de Kocher, localizada obliquamente em região subcostal direita.",
        "explanation": "Clássica (gabarito esperado antes da anulação): Incisão subcostal oblíqua direita (Kocher), via clássica de acesso à vesícula biliar (Sabiston).",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Classicamente, a colecistectomia aberta utiliza a **incisão de Kocher** (subcostal oblíqua direita — alternativa **E**), porém a questão foi anulada após recursos, provavelmente porque a colecistectomia aberta também pode ser realizada por **incisão mediana supraumbilical** (alternativa **D**, gerando discussão de dupla possibilidade anatômica) ou por divergência no gabarito preliminar.\n- **A) Incorreta:** Rockey-Davis é incisão transversa em FID usada para apendicectomia.\n- **B) Incorreta:** Kocher localiza-se no hipocôndrio/subcostal **direito**, não esquerdo.\n- **C) Incorreta:** McBurney é incisão oblíqua em FID usada para apendicectomia.\n- **D) Parcialmente defensável (possível motivo de recurso):** Embora a incisão mediana supraumbilical possa ser usada em cirurgias biliares, a incisão clássica específica da colecistectomia aberta é a de Kocher.\n- **E) Clássica (gabarito esperado antes da anulação):** Incisão subcostal oblíqua direita (Kocher), via clássica de acesso à vesícula biliar (Sabiston).",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Classicamente, a colecistectomia aberta utiliza a **incisão de Kocher** (subcostal oblíqua direita — alternativa **E**), porém a questão foi anulada após recursos, provavelmente porque a colecistectomia…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-043",
    "code": "Q-UEPA26-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Cicatrização de Feridas e Cirurgia Plástica Básica",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-cicatrizacao-de-feridas-e-cirurgia-plastica-basica",
    "tags": [
      "lesao-por-pressao",
      "decubito-lateral",
      "regiao-trocanterica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A internação prolongada de pacientes graves em leitos de UTI pode aumentar o risco de lesões cutâneas relacionadas ao aumento da pressão nos tecidos de certas áreas do corpo a depender da posição do paciente. O local mais frequente para o surgimento dessas lesões, relacionando com a posição do paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "região sacral, quando paciente permanece mais tempo em decúbito lateral.",
        "explanation": "Incorreta: A região sacral é o sítio mais frequente em **decúbito dorsal (supino)**, não em decúbito lateral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "região trocantérica, quando paciente permanece em decúbito lateral.",
        "explanation": "A alternativa **B** está correta. Segundo as diretrizes da **NPIAP/EPUAP** e o Protocolo de Prevenção de Lesão por Pressão do Ministério da Saúde, as proeminências ósseas submetidas a maior pressão variam conforme o decúbito: em **decúbito lateral**, os locais mais acometidos são a **região trocantérica**, pavilhão auricular, acrômio, côndilos femorais e maléolos laterais.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "região occipital, quando paciente se encontra em posição prona.",
        "explanation": "Incorreta: A região occipital sofre pressão em **decúbito dorsal**, não em posição prona.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "região da face, quando paciente fica em decúbito dorsal.",
        "explanation": "Incorreta: A região da face/fronte/mento sofre pressão em **posição prona**, não em decúbito dorsal.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "região do ísquio, quando paciente permanece em posição prona.",
        "explanation": "Incorreta: A tuberosidade isquiática sofre maior pressão na **posição sentada**, não em posição prona.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Segundo as diretrizes da **NPIAP/EPUAP** e o Protocolo de Prevenção de Lesão por Pressão do Ministério da Saúde, as proeminências ósseas submetidas a maior pressão variam conforme o decúbito: em **decúbito lateral**, os locais mais acometidos são a **região trocantérica**, pavilhão auricular, acrômio, côndilos femorais e maléolos laterais.\n- **A) Incorreta:** A região sacral é o sítio mais frequente em **decúbito dorsal (supino)**, não em decúbito lateral.\n- **C) Incorreta:** A região occipital sofre pressão em **decúbito dorsal**, não em posição prona.\n- **D) Incorreta:** A região da face/fronte/mento sofre pressão em **posição prona**, não em decúbito dorsal.\n- **E) Incorreta:** A tuberosidade isquiática sofre maior pressão na **posição sentada**, não em posição prona.",
    "perolaClinica": "A alternativa **B** está correta. Segundo as diretrizes da **NPIAP/EPUAP** e o Protocolo de Prevenção de Lesão por Pressão do Ministério da Saúde, as proeminências ósseas submetidas a maior pressão variam conforme o decúbito: em **decúbito lateral**, os…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Correlação entre decúbito prolongado em UTI e sítio anatômico mais frequente de lesão por pressão.",
      "raciocinioChave": "As lesões por pressão ocorrem sobre proeminências ósseas submetidas a carga contínua conforme o posicionamento do paciente. No decúbito lateral prolongado, a região trocantérica é o ponto de apoio mais vulnerável.",
      "armadilhaBanca": "Inverter as proeminências ósseas de maior risco entre os decúbitos dorsal, lateral, ventral (prona) e posição sentada."
    },
    "mapaDistratores": {
      "A": "A região sacral é o local mais frequente de lesão por pressão no decúbito dorsal (supino), e não no decúbito lateral.",
      "C": "A região occipital sofre pressão predominante quando o paciente permanece em decúbito dorsal, não em posição prona.",
      "D": "A face (fronte, malar e mento) recebe sobrecarga mecânica na posição prona, e não em decúbito dorsal.",
      "E": "A tuberosidade isquiática é o principal ponto de pressão na posição sentada, não em decúbito ventral (posição prona)."
    }
  },
  {
    "id": "q-uepa-2026-044",
    "code": "Q-UEPA26-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Cicatrização de Feridas e Cirurgia Plástica Básica",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-cicatrizacao-de-feridas-e-cirurgia-plastica-basica",
    "tags": [
      "fases-da-cicatrizacao",
      "cicatrizacao",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Você atende um paciente que sofreu corte contuso em região da perna em uma barra de ferro acidentalmente. Após limpeza local, anestesia e sutura você o libera para casa com algumas orientações. Isso o faz lembrar no plantão sobre o processo de cicatrização de feridas, então discute com o outro colega plantonista sobre as etapas desse processo. Assim, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a fase proliferativa, que se inicia por volta do terceiro dia após a lesão, é caracterizada pela intensa atividade fagocitária dos macrófagos, que causam o desbridamento da ferida.",
        "explanation": "Incorreta: A atividade fagocitária e o desbridamento por neutrófilos e macrófagos predominam na **fase inflamatória** (na proliferativa predominam angiogênese, fibroplasia e epitelização).",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "a fase inflamatória é a fase inicial, dura cerca de 1 a 6 dias e é responsável pelo processo de hemostasia e quimiotaxia dos leucócitos.",
        "explanation": "Mais próxima do gabarito clássico (antes da anulação): Descreve hemostasia e quimiotaxia leucocitária na fase inicial/inflamatória (Sabiston).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "a fase de remodelação tem início por volta da segunda semana e apresenta intensa angiogênese e início da produção de colágeno tipo I.",
        "explanation": "Incorreta: A angiogênese intensa ocorre na **fase proliferativa**, não na remodelação.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "a fase de maturação caracteriza o final do processo da cicatrização, que pode durar cerca de um ano e é responsável pela substituição de colágeno tipo I em tipo III.",
        "explanation": "Incorreta: Na fase de maturação/remodelação ocorre substituição do **colágeno tipo III pelo colágeno tipo I** (e não o contrário).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "na fase de proliferação, as principais células presentes na ferida são os miofibroblastos que são responsáveis pelo processo de contração da ferida.",
        "explanation": "Parcialmente imprecisa: Na fase proliferativa, as células predominantes são **fibroblastos** e células endoteliais; miofibroblastos participam da contração da ferida, o que pode ter gerado recurso.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Embora a alternativa **B** seja a descrição clássica da fase inflamatória/hemostática inicial segundo o Sabiston (1 a 6 dias, hemostasia e quimiotaxia leucocitária), a questão foi anulada pela banca em fase de recursos — possivelmente por controvérsia bibliográfica sobre a duração exata da fase inflamatória (alguns autores separam hemostasia como fase distinta ou citam 1–4 dias) ou sobre o papel dos miofibroblastos na fase proliferativa (alternativa E).\n- **A) Incorreta:** A atividade fagocitária e o desbridamento por neutrófilos e macrófagos predominam na **fase inflamatória** (na proliferativa predominam angiogênese, fibroplasia e epitelização).\n- **B) Mais próxima do gabarito clássico (antes da anulação):** Descreve hemostasia e quimiotaxia leucocitária na fase inicial/inflamatória (Sabiston).\n- **C) Incorreta:** A angiogênese intensa ocorre na **fase proliferativa**, não na remodelação.\n- **D) Incorreta:** Na fase de maturação/remodelação ocorre substituição do **colágeno tipo III pelo colágeno tipo I** (e não o contrário).\n- **E) Parcialmente imprecisa:** Na fase proliferativa, as células predominantes são **fibroblastos** e células endoteliais; miofibroblastos participam da contração da ferida, o que pode ter gerado recurso.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Embora a alternativa **B** seja a descrição clássica da fase inflamatória/hemostática inicial segundo o Sabiston (1 a 6 dias, hemostasia e quimiotaxia leucocitária), a questão foi anulada pela banca em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-045",
    "code": "Q-UEPA26-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Colorretal e Pólipos",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-colorretal-e-polipos",
    "tags": [
      "arteria-retal-media",
      "anatomia-vascular",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "A artéria retal média tem origem na artéria:",
    "alternativas": [
      {
        "letter": "A",
        "text": "mesentérica superior",
        "explanation": "Incorreta: Irriga o intestino médio até os 2/3 proximais do cólon transverso.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "sigmoideana",
        "explanation": "Incorreta: As artérias sigmoideas são ramos da mesentérica inferior que irrigam o cólon sigmoide.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "sacral média",
        "explanation": "Incorreta: A artéria sacral média é ramo terminal posterior da aorta abdominal.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "mesentérica inferior",
        "explanation": "Incorreta: Origina a artéria retal **superior**, não a média.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "ilíaca interna",
        "explanation": "Clássica (gabarito esperado antes da anulação): A artéria ilíaca interna é a origem clássica da artéria retal média.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Na anatomia clássica (Moore / Netter / Sabiston), a artéria retal superior origina-se da mesentérica inferior, a **artéria retal média** origina-se classicamente da **artéria ilíaca interna** (alternativa **E**), e a artéria retal inferior origina-se da pudenda interna. A anulação oficial decorreu provavelmente de erro no gabarito preliminar ou de recursos apontando variações anatômicas frequentes da artéria retal média (que pode emergir da pudenda interna, vesical inferior ou glútea inferior, e estar ausente em parte da população).\n- **A) Incorreta:** Irriga o intestino médio até os 2/3 proximais do cólon transverso.\n- **B) Incorreta:** As artérias sigmoideas são ramos da mesentérica inferior que irrigam o cólon sigmoide.\n- **C) Incorreta:** A artéria sacral média é ramo terminal posterior da aorta abdominal.\n- **D) Incorreta:** Origina a artéria retal **superior**, não a média.\n- **E) Clássica (gabarito esperado antes da anulação):** A artéria ilíaca interna é a origem clássica da artéria retal média.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Na anatomia clássica (Moore / Netter / Sabiston), a artéria retal superior origina-se da mesentérica inferior, a **artéria retal média** origina-se classicamente da **artéria ilíaca interna** (alternativa…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-046",
    "code": "Q-UEPA26-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": [
      "via-aerea-definitiva",
      "atls",
      "intubacao-traqueal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O que define a via aérea definitiva?",
    "alternativas": [
      {
        "letter": "A",
        "text": "cateter nasal de oxigênio.",
        "explanation": "Incorreta: Cateter nasal é apenas suplementação de oxigênio, sem proteção de via aérea.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "ventilação com máscara laríngea.",
        "explanation": "Incorreta: Máscara laríngea é dispositivo supraglótico (via aérea temporária/de resgate), não definitiva.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "tubo posicionado na traqueia com cuff insuflado.",
        "explanation": "A alternativa **C** está correta. De acordo com o **ATLS 10ª edição**, **via aérea definitiva** é definida como um **tubo posicionado na traqueia com balonete (cuff) insuflado** abaixo das pregas vocais, conectado a uma fonte de oxigênio enriquecido e devidamente fixado (incluindo intubação orotraqueal, nasotraqueal ou via aérea cirúrgica — cricotireoidostomia/traqueostomia).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "ventilação com máscara de oxigênio em 15l.",
        "explanation": "Incorreta: Máscara com reservatório fornece oxigênio em alto fluxo, mas não garante patência nem protege contra aspiração.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "tubo posicionado na faringe com cuff insuflado.",
        "explanation": "Incorreta: Tubo na faringe não protege a traqueia (o tubo precisa estar na **traqueia**).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o **ATLS 10ª edição**, **via aérea definitiva** é definida como um **tubo posicionado na traqueia com balonete (cuff) insuflado** abaixo das pregas vocais, conectado a uma fonte de oxigênio enriquecido e devidamente fixado (incluindo intubação orotraqueal, nasotraqueal ou via aérea cirúrgica — cricotireoidostomia/traqueostomia).\n- **A) Incorreta:** Cateter nasal é apenas suplementação de oxigênio, sem proteção de via aérea.\n- **B) Incorreta:** Máscara laríngea é dispositivo supraglótico (via aérea temporária/de resgate), não definitiva.\n- **D) Incorreta:** Máscara com reservatório fornece oxigênio em alto fluxo, mas não garante patência nem protege contra aspiração.\n- **E) Incorreta:** Tubo na faringe não protege a traqueia (o tubo precisa estar na **traqueia**).",
    "perolaClinica": "A alternativa **C** está correta. De acordo com o **ATLS 10ª edição**, **via aérea definitiva** é definida como um **tubo posicionado na traqueia com balonete (cuff) insuflado** abaixo das pregas vocais, conectado a uma fonte de oxigênio enriquecido e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Definição técnica de via aérea definitiva segundo os critérios do ATLS.",
      "raciocinioChave": "O ATLS define via aérea definitiva como um tubo posicionado na traqueia com balonete (cuff) insuflado abaixo das pregas vocais, conectado a oxigênio enriquecido e devidamente fixado. Essa condição garante patência e proteção contra broncoaspiração.",
      "armadilhaBanca": "Confundir dispositivos supraglóticos (máscara laríngea) ou posicionamento faríngeo com via aérea definitiva."
    },
    "mapaDistratores": {
      "A": "O cateter nasal apenas suplementa oxigênio, sem assegurar patência da via aérea nem proteção traqueal contra aspiração.",
      "B": "A máscara laríngea é um dispositivo supraglótico de resgate/temporário, não configurando via aérea definitiva por não selar a traqueia abaixo das pregas vocais.",
      "D": "A máscara com reservatório oferece oxigênio em alto fluxo, mas não protege a via aérea nem permite ventilação mecânica invasiva segura.",
      "E": "Um tubo posicionado na faringe não protege a traqueia contra aspiração nem garante ventilação adequada, exigindo posicionamento intratraqueal."
    }
  },
  {
    "id": "q-uepa-2026-047",
    "code": "Q-UEPA26-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Trauma Urológico e Litíase Cirúrgica",
    "temaSlug": "cg-uro",
    "subtemaSlug": "cg-uro-trauma-urologico-e-litiase-cirurgica",
    "tags": [
      "trauma-de-uretra",
      "fratura-de-pelve",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente, FAM, 35 anos, foi levado ao HMS pela equipe do SAMU com relato de acidente de moto X carro. Após avaliação médica foi aventada a possibilidade de trauma de uretra. Sobre o trauma de uretra, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Em caso de trauma de uretra deve ser realizada sondagem vesical de demora por profissional experiente.",
        "explanation": "Incorreta: A sondagem vesical de demora é **contraindicada** na suspeita de trauma uretral antes da realização de uretrografia retrógrada.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "A fratura de bacia é associada à lesão de uretra membranosa.",
        "explanation": "Clássica (gabarito esperado antes da anulação): Fratura pélvica associa-se tipicamente à lesão de uretra membranosa (posterior).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "A fratura de bacia está relacionada a lesão de uretra peniana.",
        "explanation": "Incorreta: Lesão de uretra anterior (bulbar/peniana) associa-se a trauma a cavaleiro (*straddle injury*), não a fratura pélvica.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "O exame ideal para diagnóstico de trauma de uretra é a cintilografia renal.",
        "explanation": "Incorreta: O exame padrão-ouro para diagnóstico de lesão uretral é a **uretrografia retrógrada**.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "O diagnóstico de trauma de uretra é feito com radiografia de pelve.",
        "explanation": "Incorreta: A radiografia de pelve identifica a fratura óssea, mas não diagnostica diretamente a lesão uretral.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Segundo o **ATLS 10ª edição** e o **Sabiston**, a fratura de pelve (\"bacia\") associa-se classicamente à lesão de **uretra posterior (membranosa)** (alternativa **B**), sendo contraindicada a sondagem vesical às cegas antes da uretrografia retrógrada. A questão foi anulada pela banca em fase de recursos, possivelmente por imprecisão terminológica (\"fratura de bacia\" / erro de gabarito preliminar ou contestação sobre a menção à uretra membranosa sem especificar sexo masculino).\n- **A) Incorreta:** A sondagem vesical de demora é **contraindicada** na suspeita de trauma uretral antes da realização de uretrografia retrógrada.\n- **B) Clássica (gabarito esperado antes da anulação):** Fratura pélvica associa-se tipicamente à lesão de uretra membranosa (posterior).\n- **C) Incorreta:** Lesão de uretra anterior (bulbar/peniana) associa-se a trauma a cavaleiro (*straddle injury*), não a fratura pélvica.\n- **D) Incorreta:** O exame padrão-ouro para diagnóstico de lesão uretral é a **uretrografia retrógrada**.\n- **E) Incorreta:** A radiografia de pelve identifica a fratura óssea, mas não diagnostica diretamente a lesão uretral.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Segundo o **ATLS 10ª edição** e o **Sabiston**, a fratura de pelve (\"bacia\") associa-se classicamente à lesão de **uretra posterior (membranosa)** (alternativa **B**), sendo contraindicada a sondagem…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-048",
    "code": "Q-UEPA26-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": [
      "escala-de-coma-de-glasgow",
      "tce",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente vítima de acidente de trânsito moto X carreta apresentou traumatismo craniano. Na avaliação do ATLS na escala de coma de glasgow (ECG) estava apresentando abertura ocular ao comando de voz, emitindo sons inaudiveis, localiza a dor na resposta motora e pupilas isofotorreagentes. A pontuação da ECG deste paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "13",
        "explanation": "Incorreta: 13 não corresponde à soma dos parâmetros descritos.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "8",
        "explanation": "Incorreta: 8 não corresponde à soma dos parâmetros descritos.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "7",
        "explanation": "Incorreta: 7 não corresponde à soma dos parâmetros descritos.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "9",
        "explanation": "Ambígua (causa de anulação): Se \"sons inaudíveis\" for pontuado como 1 (ausente), resulta em 3 + 1 + 5 = 9.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "10",
        "explanation": "Ambígua (causa de anulação): Se \"sons inaudíveis\" foi erro de digitação para \"sons incompreensíveis\" (2), resulta em 3 + 2 + 5 = 10.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Na Escala de Coma de Glasgow (ATLS 10ª edição): abertura ocular ao comando de voz = **3**; resposta motora que localiza dor = **5**; reatividade pupilar bilateral (ECG-P) = subtrai **0**. Contudo, o enunciado usou o termo **\"sons inaudíveis\"** em vez do termo padronizado **\"sons incompreensíveis\"** (que vale **2**, totalizando **10** — alternativa E). Como \"sons inaudíveis\" pode ser interpretado como ausência de som audível/resposta verbal (**1**, totalizando **9** — alternativa D), a ambiguidade redacional justificou a anulação.\n- **A) Incorreta:** 13 não corresponde à soma dos parâmetros descritos.\n- **B) Incorreta:** 8 não corresponde à soma dos parâmetros descritos.\n- **C) Incorreta:** 7 não corresponde à soma dos parâmetros descritos.\n- **D) Ambígua (causa de anulação):** Se \"sons inaudíveis\" for pontuado como 1 (ausente), resulta em 3 + 1 + 5 = 9.\n- **E) Ambígua (causa de anulação):** Se \"sons inaudíveis\" foi erro de digitação para \"sons incompreensíveis\" (2), resulta em 3 + 2 + 5 = 10.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Na Escala de Coma de Glasgow (ATLS 10ª edição): abertura ocular ao comando de voz = **3**; resposta motora que localiza dor = **5**; reatividade pupilar bilateral (ECG-P) = subtrai **0**. Contudo, o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-049",
    "code": "Q-UEPA26-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": [
      "pneumotorax-hipertensivo",
      "descompressao-toracica",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Vítima de acidente moto X moto dá entrada no hospital municipal de Santarém apresentando ao exame físico hipertimpanismo em hemitórax direito e hipotensão. A conduta a ser tomada neste caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "intubação orotraqueal imediata.",
        "explanation": "Incorreta: A ventilação com pressão positiva antes da descompressão agrava rapidamente o pneumotórax hipertensivo e pode precipitar parada cardiorrespiratória.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "inserção de Jelco calibroso em 5º espaço intercostal ligeiramente anterior à linha axilar média do hemitórax direito e hipotensão direito.",
        "explanation": "A alternativa **B** está correta. Hipertimpanismo unilateral associado a hipotensão (choque obstrutivo) no trauma caracteriza **pneumotórax hipertensivo** — diagnóstico estritamente clínico que exige **descompressão torácica imediata por agulha/cateter calibroso** seguida de drenagem em selo d'água. Pela atualização do **ATLS 10ª edição**, o sítio preferencial em adultos passou a ser o **4º ou 5º espaço intercostal, ligeiramente anterior à linha axilar média** do hemitórax acometido (apesar do erro de digitação final \"e hipotensão direito\" no texto original da prova).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "toracotomia exploradora.",
        "explanation": "Incorreta: Não há indicação de toracotomia exploradora para pneumotórax hipertensivo simples.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "curativo em 3 pontos.",
        "explanation": "Incorreta: Curativo de 3 pontas é a medida inicial para **pneumotórax aberto** (ferida torácica aspirativa), não hipertensivo fechado.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "ventilação com máscara de oxigênio em 15l.",
        "explanation": "Incorreta: Oxigênio isolado não resolve o colapso hemodinâmico do choque obstrutivo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Hipertimpanismo unilateral associado a hipotensão (choque obstrutivo) no trauma caracteriza **pneumotórax hipertensivo** — diagnóstico estritamente clínico que exige **descompressão torácica imediata por agulha/cateter calibroso** seguida de drenagem em selo d'água. Pela atualização do **ATLS 10ª edição**, o sítio preferencial em adultos passou a ser o **4º ou 5º espaço intercostal, ligeiramente anterior à linha axilar média** do hemitórax acometido (apesar do erro de digitação final \"e hipotensão direito\" no texto original da prova).\n- **A) Incorreta:** A ventilação com pressão positiva antes da descompressão agrava rapidamente o pneumotórax hipertensivo e pode precipitar parada cardiorrespiratória.\n- **C) Incorreta:** Não há indicação de toracotomia exploradora para pneumotórax hipertensivo simples.\n- **D) Incorreta:** Curativo de 3 pontas é a medida inicial para **pneumotórax aberto** (ferida torácica aspirativa), não hipertensivo fechado.\n- **E) Incorreta:** Oxigênio isolado não resolve o colapso hemodinâmico do choque obstrutivo.",
    "perolaClinica": "A alternativa **B** está correta. Hipertimpanismo unilateral associado a hipotensão (choque obstrutivo) no trauma caracteriza **pneumotórax hipertensivo** — diagnóstico estritamente clínico que exige **descompressão torácica imediata por agulha/cateter…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta imediata de descompressão no pneumotórax hipertensivo adulto conforme atualização do ATLS.",
      "raciocinioChave": "Hipertimpanismo unilateral associado a hipotensão no trauma fecha o diagnóstico clínico de pneumotórax hipertensivo com choque obstrutivo. Pela 10ª edição do ATLS, a descompressão imediata em adultos é feita com cateter calibroso (Jelco) no 4º ou 5º espaço intercostal, ligeiramente anterior à linha axilar média do lado acometido.",
      "armadilhaBanca": "Indicar intubação orotraqueal imediata antes da descompressão ou confundir pneumotórax hipertensivo com pneumotórax aberto (curativo de 3 pontas)."
    },
    "mapaDistratores": {
      "A": "A intubação com ventilação por pressão positiva antes da descompressão agrava o aprisionamento aéreo pleural e pode precipitar parada cardiorrespiratória.",
      "C": "A toracotomia exploradora de emergência não é a conduta inicial no pneumotórax hipertensivo simples, que requer descompressão torácica imediata.",
      "D": "O curativo em três pontos é indicado para o pneumotórax aberto (ferida torácica aspirativa), e não para o pneumotórax hipertensivo fechado.",
      "E": "A oxigenoterapia suplementar isolada não desfaz o colapso hemodinâmico causado pelo choque obstrutivo do pneumotórax hipertensivo."
    }
  },
  {
    "id": "q-uepa-2026-050",
    "code": "Q-UEPA26-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": [
      "trauma-hepatico",
      "manobra-de-pringle",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente vítima de ferimento por arma branca em hipocôndrio direito é submetido a laparotomia exploradora e durante a cirurgia foi identificado sangramento hepático grave. O cirurgião tomou a decisão de realizar uma manobra para bloquear o fluxo sanguíneo hepático. A manobra realizada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Mattox",
        "explanation": "Incorreta: A manobra de Mattox mobiliza as vísceras à esquerda para exposição da aorta abdominal e vasos renais esquerdos.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Cattell",
        "explanation": "Incorreta: A manobra de Cattell-Braasch mobiliza o cólon direito e duodeno para exposição da veia cava inferior e aorta infrarrenal.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "C-kocher",
        "explanation": "Incorreta: A manobra de Kocher mobiliza o duodeno e a cabeça do pâncreas para exposição do retroperitônio/VCI.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "Pringle",
        "explanation": "Clássica (gabarito esperado antes da anulação): Pinçamento do hilo hepático (ligamento hepatoduodenal) para controle do influxo vascular ao fígado.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Whipple",
        "explanation": "Incorreta: Whipple refere-se à duodenopancreatectomia (ressecção cirúrgica), não a manobra hemostática de trauma hepático.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** A **manobra de Pringle** (alternativa **D**) consiste no pinçamento temporário do ligamento hepatoduodenal (artéria hepática própria e veia porta) para controle do sangramento hepático grave (ATLS / Sabiston). A anulação oficial pela banca ocorreu em fase de recursos — possivelmente por rigor técnico de que a manobra de Pringle bloqueia apenas o **influxo** sanguíneo hepático (aferente: artéria hepática e veia porta), não bloqueando o fluxo retrógrado das veias hepáticas/veia cava retro-hepática, ou por erro no gabarito preliminar.\n- **A) Incorreta:** A manobra de Mattox mobiliza as vísceras à esquerda para exposição da aorta abdominal e vasos renais esquerdos.\n- **B) Incorreta:** A manobra de Cattell-Braasch mobiliza o cólon direito e duodeno para exposição da veia cava inferior e aorta infrarrenal.\n- **C) Incorreta:** A manobra de Kocher mobiliza o duodeno e a cabeça do pâncreas para exposição do retroperitônio/VCI.\n- **D) Clássica (gabarito esperado antes da anulação):** Pinçamento do hilo hepático (ligamento hepatoduodenal) para controle do influxo vascular ao fígado.\n- **E) Incorreta:** Whipple refere-se à duodenopancreatectomia (ressecção cirúrgica), não a manobra hemostática de trauma hepático.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** A **manobra de Pringle** (alternativa **D**) consiste no pinçamento temporário do ligamento hepatoduodenal (artéria hepática própria e veia porta) para controle do sangramento hepático grave (ATLS /…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-051",
    "code": "Q-UEPA26-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": [
      "choque-hemorragico",
      "classificacao-atls",
      "classe-iii"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação ao choque.",
    "alternativas": [
      {
        "letter": "A",
        "text": "No choque classe I há uma perda sanguínea aproximada de 20%.",
        "explanation": "Incorreta: Classe I corresponde a perda **< 15%**, não 20%.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "No choque classe II há uma perda sanguínea aproximada de 20 a 35%.",
        "explanation": "Incorreta: Classe II corresponde a perda de **15% a 30%**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "No choque classe III há uma perda sanguínea aproximada de 30 a 40%.",
        "explanation": "A alternativa **C** está correta. Pela classificação clássica do **choque hemorrágico no ATLS (10ª edição)**:",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "No choque classe IV há uma perda sanguínea aproximada de 35 a 45%.",
        "explanation": "Incorreta: Classe IV corresponde a perda **> 40%**.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "No choque classe V há uma perda sanguínea aproximada acima de 45%.",
        "explanation": "Incorreta: Não existe choque hemorrágico \"classe V\" na classificação do ATLS (são apenas 4 classes).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Pela classificação clássica do **choque hemorrágico no ATLS (10ª edição)**:\n- **Classe I:** perda < 15% da volemia;\n- **Classe II:** perda de 15% a 30%;\n- **Classe III:** perda de **30% a 40%** (em que surge hipotensão arterial franca e queda do débito urinário);\n- **Classe IV:** perda > 40% (risco imediato de vida).\n- **A) Incorreta:** Classe I corresponde a perda **< 15%**, não 20%.\n- **B) Incorreta:** Classe II corresponde a perda de **15% a 30%**.\n- **D) Incorreta:** Classe IV corresponde a perda **> 40%**.\n- **E) Incorreta:** Não existe choque hemorrágico \"classe V\" na classificação do ATLS (são apenas 4 classes).",
    "perolaClinica": "A alternativa **C** está correta. Pela classificação clássica do **choque hemorrágico no ATLS (10ª",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Classificação percentual de perda volêmica do choque hemorrágico no ATLS.",
      "raciocinioChave": "O ATLS divide o choque hemorrágico em quatro classes conforme a porcentagem de volemia perdida: Classe I (< 15%), Classe II (15–30%), Classe III (30–40%) e Classe IV (> 40%). Assim, apenas a Classe III corresponde corretamente à perda aproximada de 30% a 40%.",
      "armadilhaBanca": "Trocar os intervalos percentuais de perda volêmica das classes I a IV ou aceitar a existência inexistente de uma \"classe V\"."
    },
    "mapaDistratores": {
      "A": "O choque hemorrágico Classe I corresponde a uma perda sanguínea inferior a 15% da volemia, e não de 20%.",
      "B": "O choque hemorrágico Classe II compreende perda volêmica entre 15% e 30%, e não de 20% a 35%.",
      "D": "O choque hemorrágico Classe IV caracteriza-se por perda sanguínea superior a 40% da volemia, e não de 35% a 45%.",
      "E": "A classificação do choque hemorrágico do ATLS contempla apenas quatro classes (I a IV), não existindo Classe V."
    }
  },
  {
    "id": "q-uepa-2026-052",
    "code": "Q-UEPA26-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Queimaduras e Lesão Inalatória",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-queimaduras-e-lesao-inalatoria",
    "tags": [
      "queimaduras",
      "regra-dos-nove",
      "superficie-corporal-queimada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente vítima de explosão chega ao pronto atendimento com queimaduras de segundo grau nas porções anterior e posterior do tronco e porção anterior dos membros inferiores bilateralmente. Assinale a alternativa que contém a correta porcentagem de superfície corporal queimada segundo a regra contida no ATLS.",
    "alternativas": [
      {
        "letter": "A",
        "text": "18%",
        "explanation": "Incorreta: Corresponderia apenas a uma face do tronco.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "27%",
        "explanation": "Incorreta: Subestima gravemente a área queimada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "36%",
        "explanation": "Incorreta: Contabiliza apenas o tronco (anterior + posterior = 36%), esquecendo os MMII.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "45%",
        "explanation": "Incorreta: Contabiliza apenas um membro inferior anterior (+9%), esquecendo o contralateral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "54%",
        "explanation": "A alternativa **E** está correta. Pela **Regra dos Nove de Wallace (ATLS 10ª edição)** para adultos (contabilizando queimaduras de 2º e 3º graus):",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Pela **Regra dos Nove de Wallace (ATLS 10ª edição)** para adultos (contabilizando queimaduras de 2º e 3º graus):\n- Tronco anterior = **18%**;\n- Tronco posterior = **18%**;\n- Face anterior do membro inferior direito = **9%** (cada MMII inteiro vale 18%);\n- Face anterior do membro inferior esquerdo = **9%**.\n- **Total de SCQ:** $18\\% + 18\\% + 9\\% + 9\\% = \\mathbf{54\\%}$.\n- **A) Incorreta:** Corresponderia apenas a uma face do tronco.\n- **B) Incorreta:** Subestima gravemente a área queimada.\n- **C) Incorreta:** Contabiliza apenas o tronco (anterior + posterior = 36%), esquecendo os MMII.\n- **D) Incorreta:** Contabiliza apenas um membro inferior anterior (+9%), esquecendo o contralateral.",
    "perolaClinica": "A alternativa **E** está correta. Pela **Regra dos Nove de Wallace (ATLS 10ª edição)** para adultos (contabilizando queimaduras de 2º e 3º",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Cálculo da superfície corporal queimada pela Regra dos Nove de Wallace no adulto.",
      "raciocinioChave": "Na Regra dos Nove do ATLS para adultos, cada face do tronco vale 18% (anterior 18% + posterior 18% = 36%) e cada membro inferior completo vale 18% (9% por face anterior). Somando tronco anterior e posterior (36%) com a face anterior dos dois MMII (9% + 9% = 18%), obtém-se 54%.",
      "armadilhaBanca": "Esquecer de somar ambas as faces do tronco (18% + 18%) ou contar apenas um membro inferior anterior (9% em vez de 9% + 9%)."
    },
    "mapaDistratores": {
      "A": "O valor de 18% corresponde a apenas uma das faces do tronco ou a apenas um membro inferior completo.",
      "B": "O percentual de 27% subestima a extensão real, pois somente o tronco inteiro já totaliza 36% da superfície corporal.",
      "C": "O total de 36% contabiliza apenas as porções anterior e posterior do tronco, omitindo as faces anteriores dos membros inferiores.",
      "D": "O valor de 45% soma o tronco completo (36%) com a face anterior de apenas um membro inferior (9%), desconsiderando a bilateralidade."
    }
  },
  {
    "id": "q-uepa-2026-053",
    "code": "Q-UEPA26-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": [
      "trauma-abdominal",
      "fast",
      "lavado-peritoneal",
      "tomografia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação ao trauma abdominal.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A ausência de hematúria exclui uma lesão no trato genitourinário.",
        "explanation": "Incorreta: Lesões graves do pedículo renal (avulsão/trombose arterial) ou ureterais podem cursar **sem hematúria**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A contraindicação absoluta ao ultrassom FAST é a distensão abdominal devido aos gases.",
        "explanation": "Incorreta: A distensão gasosa é uma **limitação técnica** do FAST, não uma contraindicação absoluta (a única \"contraindicação\" prática ao FAST é a indicação imediata de laparotomia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Uma das vantagens do lavado peritoneal é que ele pode ser repetido para comparações.",
        "explanation": "Incorreta: O lavado peritoneal diagnóstico (LPD) é invasivo e **não é repetível** de forma seriada comparativa — essa vantagem pertence ao ultrassom FAST.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A tomografia deve ser feita em pacientes com qualquer nível pressórico se há suspeita de lesão de víscera parenquimatosa.",
        "explanation": "Incorreta: A tomografia computadorizada de abdome exige **estabilidade hemodinâmica**; pacientes instáveis não devem ir ao tomógrafo.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Um exame de ultrassom FAST negativo não exclui a presença de lesões viscerais.",
        "explanation": "A alternativa **E** está correta. Segundo o **ATLS 10ª edição**, o ultrassom **FAST** detecta líquido livre intraperitoneal/pericárdico com boa especificidade, porém **um FAST negativo não exclui lesões viscerais parenquimatosas, lesões de vísceras ocas ou lesões retroperitoneais**, especialmente quando há pequeno volume de hemoperitônio ou sangramento ainda inicial.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Segundo o **ATLS 10ª edição**, o ultrassom **FAST** detecta líquido livre intraperitoneal/pericárdico com boa especificidade, porém **um FAST negativo não exclui lesões viscerais parenquimatosas, lesões de vísceras ocas ou lesões retroperitoneais**, especialmente quando há pequeno volume de hemoperitônio ou sangramento ainda inicial.\n- **A) Incorreta:** Lesões graves do pedículo renal (avulsão/trombose arterial) ou ureterais podem cursar **sem hematúria**.\n- **B) Incorreta:** A distensão gasosa é uma **limitação técnica** do FAST, não uma contraindicação absoluta (a única \"contraindicação\" prática ao FAST é a indicação imediata de laparotomia).\n- **C) Incorreta:** O lavado peritoneal diagnóstico (LPD) é invasivo e **não é repetível** de forma seriada comparativa — essa vantagem pertence ao ultrassom FAST.\n- **D) Incorreta:** A tomografia computadorizada de abdome exige **estabilidade hemodinâmica**; pacientes instáveis não devem ir ao tomógrafo.",
    "perolaClinica": "A alternativa **E** está correta. Segundo o **ATLS 10ª edição**, o ultrassom **FAST** detecta líquido livre intraperitoneal/pericárdico com boa especificidade, porém **um FAST negativo não exclui lesões viscerais parenquimatosas, lesões de vísceras ocas ou…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Limitações diagnósticas do FAST, LPD, TC e hematúria na avaliação do trauma abdominal pelo ATLS.",
      "raciocinioChave": "O ultrassom FAST identifica líquido livre peritoneal/pericárdico com boa especificidade à beira do leito, porém possui sensibilidade limitada para lesões sem hemoperitônio volumoso, lesões de vísceras ocas e trauma retroperitoneal. Logo, um FAST negativo nunca exclui lesão visceral abdominal.",
      "armadilhaBanca": "Superestimar o valor preditivo negativo do FAST ou indicar tomografia computadorizada sem exigir estabilidade hemodinâmica."
    },
    "mapaDistratores": {
      "A": "A ausência de hematúria não exclui lesão geniturinária, pois avulsões do pedículo renal e lesões ureterais completas podem cursar sem sangue na urina.",
      "B": "A distensão gasosa intestinal é apenas uma limitação técnica que prejudica a janela acústica do FAST, não constituindo contraindicação absoluta.",
      "C": "O lavado peritoneal diagnóstico é um procedimento invasivo pontual que não se presta a repetições seriadas comparativas, vantagem própria do FAST.",
      "D": "A tomografia computadorizada abdominal no trauma só deve ser realizada em pacientes hemodinamicamente estáveis, sendo contraindicada na instabilidade."
    }
  },
  {
    "id": "q-uepa-2026-054",
    "code": "Q-UEPA26-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Resposta Endócrino-Metabólica ao Trauma",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-resposta-endocrino-metabolica-ao-trauma",
    "tags": [
      "secrecoes-gastrointestinais",
      "eletrolitos",
      "fisiologia-cirurgica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação a composição das secreções orgânicas (em meq/L).",
    "alternativas": [
      {
        "letter": "A",
        "text": "A secreção gástrica contém mais sódio do que cloro.",
        "explanation": "Incorreta: A secreção gástrica é rica em $\\text{HCl}$ ($\\text{Cl}^- \\approx 130\\text{ mEq/L}$ vs. $\\text{Na}^+ \\approx 60\\text{ mEq/L}$), contendo mais cloro que sódio.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A secreção do intestino delgado contém mais sódio do que bicarbonato.",
        "explanation": "A alternativa **B** está correta. Conforme a tabela clássica de composição eletrolítica das secreções gastrointestinais do **Sabiston** (*Tratado de Cirurgia*):",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A secreção dos cólons contém mais bicarbonato do que cloro.",
        "explanation": "Incorreta: Nos cólons, há mais cloro ($\\approx 40\\text{ mEq/L}$) do que bicarbonato ($\\approx 30\\text{ mEq/L}$).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A secreção do pâncreas contém mais potássio do que bicarbonato.",
        "explanation": "Incorreta: A secreção pancreática é extremamente rica em bicarbonato ($\\approx 115\\text{ mEq/L}$) e pobre em potássio ($\\approx 5\\text{ mEq/L}$).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A secreção biliar contém mais potássio do que cloro.",
        "explanation": "Incorreta: A bile contém muito mais cloro ($\\approx 100\\text{ mEq/L}$) do que potássio ($\\approx 5\\text{ mEq/L}$).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Conforme a tabela clássica de composição eletrolítica das secreções gastrointestinais do **Sabiston** (*Tratado de Cirurgia*):\n- **Intestino delgado:** $\\text{Na}^+ \\approx 140\\text{ mEq/L}$, $\\text{K}^+ \\approx 5$, $\\text{Cl}^- \\approx 104$, $\\text{HCO}_3^- \\approx 30\\text{ mEq/L}$ — portanto, contém muito mais sódio do que bicarbonato.\n- **A) Incorreta:** A secreção gástrica é rica em $\\text{HCl}$ ($\\text{Cl}^- \\approx 130\\text{ mEq/L}$ vs. $\\text{Na}^+ \\approx 60\\text{ mEq/L}$), contendo mais cloro que sódio.\n- **C) Incorreta:** Nos cólons, há mais cloro ($\\approx 40\\text{ mEq/L}$) do que bicarbonato ($\\approx 30\\text{ mEq/L}$).\n- **D) Incorreta:** A secreção pancreática é extremamente rica em bicarbonato ($\\approx 115\\text{ mEq/L}$) e pobre em potássio ($\\approx 5\\text{ mEq/L}$).\n- **E) Incorreta:** A bile contém muito mais cloro ($\\approx 100\\text{ mEq/L}$) do que potássio ($\\approx 5\\text{ mEq/L}$).",
    "perolaClinica": "A alternativa **B** está correta. Conforme a tabela clássica de composição eletrolítica das secreções gastrointestinais do **Sabiston** (*Tratado de",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Composição eletrolítica comparativa das secreções gastrointestinais segundo o Sabiston.",
      "raciocinioChave": "A secreção do intestino delgado apresenta concentração de sódio próxima à plasmática (~140 mEq/L) e bicarbonato em torno de 30 mEq/L. Portanto, o conteúdo de sódio supera amplamente o de bicarbonato nesse segmento.",
      "armadilhaBanca": "Confundir os perfis eletrolíticos das secreções digestivas altas (rica em Cl- gástrico), pancreática (rica em HCO3-) e delgado (rico em Na+)."
    },
    "mapaDistratores": {
      "A": "A secreção gástrica é rica em ácido clorídrico, apresentando concentração de cloro (~130 mEq/L) superior à de sódio (~60 mEq/L).",
      "C": "Nos cólons ocorre absorção de sódio e cloro com secreção de potássio e bicarbonato, porém a concentração de cloro (~40 mEq/L) permanece maior que a de bicarbonato (~30 mEq/L).",
      "D": "O suco pancreático é altamente alcalino por conter elevada concentração de bicarbonato (~115 mEq/L) e baixa concentração de potássio (~5 mEq/L).",
      "E": "A secreção biliar contém concentração de cloro (~100 mEq/L) muito superior à de potássio (~5 mEq/L)."
    }
  },
  {
    "id": "q-uepa-2026-055",
    "code": "Q-UEPA26-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnia Inguinal e Femoral",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernia-inguinal-e-femoral",
    "tags": [
      "canal-inguinal",
      "anatomia-inguinal",
      "cordao-espermatico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação à anatomia da região inguinal.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O canal inguinal se estende da sínfise púbica à espinha ilíaca antero superior.",
        "explanation": "Incorreta: Quem se estende da espinha ilíaca anterossuperior ao tubérculo púbico é o **ligamento inguinal**; o canal inguinal estende-se do anel inguinal profundo ao anel inguinal superficial (~4 cm).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O anel inguinal interno é superficial e o anel inguinal externo é profundo.",
        "explanation": "Incorreta: É exatamente o inverso — o anel inguinal **interno é profundo** (na fáscia transversal) e o **externo é superficial** (na aponeurose do oblíquo externo).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O canal inguinal na mulher contém os vasos epigástricos.",
        "explanation": "Incorreta: Na mulher, o canal inguinal contém o **ligamento redondo do útero** e o nervo ilioinguinal (os vasos epigástricos inferiores situam-se medialmente ao anel profundo, fora do conteúdo do canal).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "O cordão espermático contém, entre outras estruturas, ramos do músculo cremaster e o ramo genital do nervo genitofemoral.",
        "explanation": "A alternativa **D** está correta. De acordo com o **Sabiston** e **Moore**, o **funículo (cordão) espermático** contém: ducto deferente, artérias testicular/cremastérica/deferencial, plexo pampiniforme, vasos linfáticos, fibras do **músculo cremaster** e o **ramo genital do nervo genitofemoral** (que inerva o cremaster).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "O cremaster é proveniente de fibras do músculo oblíquo externo.",
        "explanation": "Incorreta: O músculo cremaster origina-se de fibras do **músculo oblíquo interno** (e transverso), não do oblíquo externo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. De acordo com o **Sabiston** e **Moore**, o **funículo (cordão) espermático** contém: ducto deferente, artérias testicular/cremastérica/deferencial, plexo pampiniforme, vasos linfáticos, fibras do **músculo cremaster** e o **ramo genital do nervo genitofemoral** (que inerva o cremaster).\n- **A) Incorreta:** Quem se estende da espinha ilíaca anterossuperior ao tubérculo púbico é o **ligamento inguinal**; o canal inguinal estende-se do anel inguinal profundo ao anel inguinal superficial (~4 cm).\n- **B) Incorreta:** É exatamente o inverso — o anel inguinal **interno é profundo** (na fáscia transversal) e o **externo é superficial** (na aponeurose do oblíquo externo).\n- **C) Incorreta:** Na mulher, o canal inguinal contém o **ligamento redondo do útero** e o nervo ilioinguinal (os vasos epigástricos inferiores situam-se medialmente ao anel profundo, fora do conteúdo do canal).\n- **E) Incorreta:** O músculo cremaster origina-se de fibras do **músculo oblíquo interno** (e transverso), não do oblíquo externo.",
    "perolaClinica": "A alternativa **D** está correta. De acordo com o **Sabiston** e **Moore**, o **funículo (cordão) espermático** contém: ducto deferente, artérias testicular/cremastérica/deferencial, plexo pampiniforme, vasos linfáticos, fibras do **músculo cremaster** e o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Anatomia do canal inguinal e componentes do funículo espermático.",
      "raciocinioChave": "O cordão espermático atravessa o canal inguinal contendo o ducto deferente, vasos testiculares e cremastéricos, plexo pampiniforme, linfáticos, fibras do músculo cremaster e o ramo genital do nervo genitofemoral. Essa associação anatômica está integralmente correta.",
      "armadilhaBanca": "Trocar os conceitos de anel inguinal interno (profundo) e externo (superficial) ou confundir canal inguinal com ligamento inguinal."
    },
    "mapaDistratores": {
      "A": "Quem se estende da espinha ilíaca anterossuperior ao tubérculo púbico é o ligamento inguinal; o canal inguinal estende-se do anel inguinal profundo ao superficial.",
      "B": "A relação anatômica é oposta: o anel inguinal interno é profundo (na fáscia transversal) e o anel inguinal externo é superficial (na aponeurose do oblíquo externo).",
      "C": "Na mulher, o canal inguinal contém o ligamento redondo do útero e o nervo ilioinguinal; os vasos epigástricos inferiores situam-se medialmente ao anel profundo, fora do canal.",
      "E": "O músculo cremaster deriva de fibras do músculo oblíquo interno (e transverso do abdome), e não do músculo oblíquo externo."
    }
  },
  {
    "id": "q-uepa-2026-056",
    "code": "Q-UEPA26-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "infeccao-de-sitio-cirurgico",
      "classificacao-de-feridas",
      "questao-anulada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação à infecção cirúrgica.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Uma biópsia de mama é considerada uma cirurgia potencialmente contaminada.",
        "explanation": "Incorreta: Biópsia de mama (sem abertura de tratos colonizados nem infecção) é cirurgia **limpa**.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Toda herniorrafia com prótese é uma cirurgia potencialmente contaminada.",
        "explanation": "Incorreta: Herniorrafia eletiva (mesmo com tela/prótese) é cirurgia **limpa** (a colocação de prótese pode indicar antibioticoprofilaxia, mas não altera a classe para potencialmente contaminada).",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "A colecistectomia por vídeolaparoscopia é uma cirurgia limpa.",
        "explanation": "Incorreta: Colecistectomia videolaparoscópica eletiva envolve abertura controlada do trato biliar, sendo classificada como **potencialmente contaminada** (e não limpa).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "A hemorroidectomia é uma cirurgia suja.",
        "explanation": "Incorreta: Hemorroidectomia é classificada como **contaminada** (ou potencialmente contaminada em algumas classificações), não suja/infectada.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "O desbridamento de uma fasceíte necrotizante é considerada uma cirurgia contaminada.",
        "explanation": "Incorreta: Desbridamento de fasceíte necrotizante (tecido desvitalizado com infecção purulenta/necrótica estabelecida) é cirurgia **infectada (suja)**, não apenas contaminada.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 0.0,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Pela classificação do CDC / ANVISA / Sabiston quanto ao potencial de contaminação, **nenhuma das cinco alternativas está correta**, motivando a anulação integral da questão:\n- **A) Incorreta:** Biópsia de mama (sem abertura de tratos colonizados nem infecção) é cirurgia **limpa**.\n- **B) Incorreta:** Herniorrafia eletiva (mesmo com tela/prótese) é cirurgia **limpa** (a colocação de prótese pode indicar antibioticoprofilaxia, mas não altera a classe para potencialmente contaminada).\n- **C) Incorreta:** Colecistectomia videolaparoscópica eletiva envolve abertura controlada do trato biliar, sendo classificada como **potencialmente contaminada** (e não limpa).\n- **D) Incorreta:** Hemorroidectomia é classificada como **contaminada** (ou potencialmente contaminada em algumas classificações), não suja/infectada.\n- **E) Incorreta:** Desbridamento de fasceíte necrotizante (tecido desvitalizado com infecção purulenta/necrótica estabelecida) é cirurgia **infectada (suja)**, não apenas contaminada.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2026.** Pela classificação do CDC / ANVISA / Sabiston quanto ao potencial de contaminação, **nenhuma das cinco alternativas está correta**, motivando a anulação integral da",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2026-057",
    "code": "Q-UEPA26-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hepatocarcinoma e Nódulos Hepáticos",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hepatocarcinoma-e-nodulos-hepaticos",
    "tags": [
      "marcadores-tumorais",
      "alfafetoproteina",
      "cea",
      "ca-19-9"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre os marcadores tumorais é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o antígeno carcinoembrionário tem uma sensibilidade de cerca de 90% para a neoplasia de cólon.",
        "explanation": "Incorreta: O CEA tem baixa sensibilidade (~40–50% em estágios iniciais) para câncer colorretal, não ~90%.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o CA 15-3 está relacionado com casos de neoplasia precoce de mama.",
        "explanation": "Incorreta: O CA 15-3 tem utilidade no seguimento de **doença metastática/avançada** de mama, com baixíssima sensibilidade em tumores precoces.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o CA 19-9 tem alta sensibilidade e especificidade para a neoplasia de ovário.",
        "explanation": "Incorreta: O CA 19-9 associa-se principalmente a **adenocarcinoma de pâncreas e vias biliares** (o marcador clássico de ovário epitelial é o **CA-125**).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a alfafetoproteína tem uma sensibilidade de aproximadamente 98% para a neoplasia hepatocelular.",
        "explanation": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2026**. A **alfafetoproteína (AFP)** é o principal marcador tumoral associado ao **carcinoma hepatocelular (CHC)** (e tumores de células germinativas não seminomatosos), sendo a única alternativa em que o pareamento marcador–neoplasia está conceitualmente correto por exclusão (ressalva técnica importante para a prática clínica: pelas diretrizes AASLD/SBH, a sensibilidade real da AFP para CHC varia entre 40% e 65%, embora especificidade em níveis > 400 ng/mL aproxime-se de 95–98% — dado frequentemente trocado em bancas clássicas).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "o antígeno carcinoembrionário é utilizado para diagnóstico da neoplasia coloretal.",
        "explanation": "Incorreta: O CEA **não** é usado para rastreamento ou diagnóstico primário do câncer colorretal, mas sim para **prognóstico e seguimento pós-tratamento** (detecção de recidiva).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2026**. A **alfafetoproteína (AFP)** é o principal marcador tumoral associado ao **carcinoma hepatocelular (CHC)** (e tumores de células germinativas não seminomatosos), sendo a única alternativa em que o pareamento marcador–neoplasia está conceitualmente correto por exclusão (ressalva técnica importante para a prática clínica: pelas diretrizes AASLD/SBH, a sensibilidade real da AFP para CHC varia entre 40% e 65%, embora especificidade em níveis > 400 ng/mL aproxime-se de 95–98% — dado frequentemente trocado em bancas clássicas).\n- **A) Incorreta:** O CEA tem baixa sensibilidade (~40–50% em estágios iniciais) para câncer colorretal, não ~90%.\n- **B) Incorreta:** O CA 15-3 tem utilidade no seguimento de **doença metastática/avançada** de mama, com baixíssima sensibilidade em tumores precoces.\n- **C) Incorreta:** O CA 19-9 associa-se principalmente a **adenocarcinoma de pâncreas e vias biliares** (o marcador clássico de ovário epitelial é o **CA-125**).\n- **E) Incorreta:** O CEA **não** é usado para rastreamento ou diagnóstico primário do câncer colorretal, mas sim para **prognóstico e seguimento pós-tratamento** (detecção de recidiva).",
    "perolaClinica": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2026**. A **alfafetoproteína (AFP)** é o principal marcador tumoral associado ao **carcinoma hepatocelular (CHC)** (e tumores de células germinativas não seminomatosos), sendo a única alternativa…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Associação clínica entre marcadores tumorais séricos e neoplasias malignas específicas.",
      "raciocinioChave": "Dentre as associações listadas, a alfafetoproteína (AFP) é o marcador classicamente vinculado ao carcinoma hepatocelular (além de tumores germinativos não seminomatosos), enquanto as demais opções erram o sítio tumoral ou o papel clínico do marcador. Apesar do número exagerado de sensibilidade citado no enunciado, foi o gabarito oficial definitivo da banca.",
      "armadilhaBanca": "Atribuir alto valor diagnóstico ou rastreamento ao CEA e CA 15-3, embora a banca tenha superestimado a sensibilidade numérica da AFP na alternativa correta."
    },
    "mapaDistratores": {
      "A": "O antígeno carcinoembrionário (CEA) possui baixa sensibilidade no câncer colorretal (cerca de 40% a 50% nos estágios iniciais), muito abaixo de 90%.",
      "B": "O CA 15-3 apresenta baixa sensibilidade em neoplasias precoces de mama, sendo útil principalmente no seguimento de doença avançada ou metastática.",
      "C": "O CA 19-9 associa-se principalmente a neoplasias de pâncreas e vias biliares, enquanto o marcador clássico do câncer epitelial de ovário é o CA-125.",
      "E": "O CEA não tem sensibilidade nem especificidade para rastreamento ou diagnóstico primário do câncer colorretal, restringindo-se ao prognóstico e vigilância de recidiva."
    }
  },
  {
    "id": "q-uepa-2026-058",
    "code": "Q-UEPA26-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Doença Inflamatória Pélvica",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-doenca-inflamatoria-pelvica",
    "tags": [
      "sinal-de-chandelier",
      "semiologia-abdominal",
      "dip"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação aos sinais do exame físico abdominal e suas respectivas patologias sugeridas.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sinal de Chandelier – doença inflamatória pélvica.",
        "explanation": "A alternativa **A** está correta. O **sinal de Chandelier** (dor intensa à mobilização do colo uterino durante o toque vaginal bimanual, fazendo a paciente \"saltar em direção ao lustre\") é um sinal semiológico clássico de **Doença Inflamatória Pélvica (DIP)** (Sabiston / FEBRASGO).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Sinal de Aaron – pancreatite aguda.",
        "explanation": "Incorreta: O **sinal de Aaron** (dor epigástrica ou precordial referida à palpação do ponto de McBurney) sugere **apendicite aguda**, não pancreatite.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Sinal de Danforth – apendicite aguda.",
        "explanation": "Incorreta: O **sinal de Danforth** (dor no ombro à inspiração profunda por irritação diafragmática) sugere **hemoperitônio** (ex.: gravidez ectópica rota), não apendicite.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Sinal de Fothergill – hemoperitônio.",
        "explanation": "Incorreta: O **sinal de Fothergill** (massa abdominal que não cruza a linha média e permanece palpável à contração da parede abdominal) sugere **hematoma da bainha do músculo reto abdominal**, não hemoperitônio.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Sinal de ten Horn – psoíte.",
        "explanation": "Incorreta: O **sinal de Ten Horn** (dor em FID provocada pela tração suave do testículo direito) sugere **apendicite aguda**, não psoíte.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O **sinal de Chandelier** (dor intensa à mobilização do colo uterino durante o toque vaginal bimanual, fazendo a paciente \"saltar em direção ao lustre\") é um sinal semiológico clássico de **Doença Inflamatória Pélvica (DIP)** (Sabiston / FEBRASGO).\n- **B) Incorreta:** O **sinal de Aaron** (dor epigástrica ou precordial referida à palpação do ponto de McBurney) sugere **apendicite aguda**, não pancreatite.\n- **C) Incorreta:** O **sinal de Danforth** (dor no ombro à inspiração profunda por irritação diafragmática) sugere **hemoperitônio** (ex.: gravidez ectópica rota), não apendicite.\n- **D) Incorreta:** O **sinal de Fothergill** (massa abdominal que não cruza a linha média e permanece palpável à contração da parede abdominal) sugere **hematoma da bainha do músculo reto abdominal**, não hemoperitônio.\n- **E) Incorreta:** O **sinal de Ten Horn** (dor em FID provocada pela tração suave do testículo direito) sugere **apendicite aguda**, não psoíte.",
    "perolaClinica": "A alternativa **A** está correta. O **sinal de Chandelier** (dor intensa à mobilização do colo uterino durante o toque vaginal bimanual, fazendo a paciente \"saltar em direção ao lustre\") é um sinal semiológico clássico de **Doença Inflamatória Pélvica (DIP)**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Correlação entre sinais semiológicos clássicos do exame físico abdominal/pélvico e suas respectivas síndromes clínicas.",
      "raciocinioChave": "O sinal de Chandelier consiste em dor intensa à mobilização do colo uterino no toque vaginal bimanual, achado clássico da Doença Inflamatória Pélvica (DIP) por irritação peritoneal pélvica. Assim, apenas a alternativa A traz a correspondência semiológica correta.",
      "armadilhaBanca": "A banca mistura sinais epônimos clássicos de apendicite aguda, hemoperitônio e hematoma de reto abdominal para induzir erro de associação entre os achados e suas patologias."
    },
    "mapaDistratores": {
      "B": "O sinal de Aaron refere-se à dor epigástrica ou precordial desencadeada pela palpação do ponto de McBurney e sugere apendicite aguda, e não pancreatite aguda.",
      "C": "O sinal de Danforth é a dor referida no ombro à inspiração profunda por irritação diafragmática, sugestivo de hemoperitônio (como na gravidez ectópica rota), e não de apendicite aguda.",
      "D": "O sinal de Fothergill identifica massa que não cruza a linha média e permanece palpável durante a contração da parede abdominal, indicando hematoma da bainha do reto abdominal, e não hemoperitônio.",
      "E": "O sinal de ten Horn corresponde à dor em fossa ilíaca direita provocada pela tração suave do testículo direito, sendo sugestivo de apendicite aguda, e não de psoíte."
    }
  },
  {
    "id": "q-uepa-2026-059",
    "code": "Q-UEPA26-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": [
      "sleeve-gastrico",
      "cirurgia-bariatrica",
      "grelina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação ao Sleeve Gástrico (SG) para tratamento cirúrgico da obesidade mórbida.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O SG não preserva o piloro.",
        "explanation": "Incorreta: O *Sleeve* Gástrico **preserva o piloro** e a continuidade gastroduodenal (reduzindo o risco de *dumping*).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "No SG há aumento da síndrome de mal absorção e relação à gastroplastia em Y de Roux devido a retirada definitiva de parte do estômago.",
        "explanation": "Incorreta: O *Sleeve* é primariamente restritivo/metabólico sem desvio intestinal, apresentando **menor** síndrome disabsortiva que o *bypass* em Y de Roux.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "No SG há um aumento da ocorrência de hérnias internas em relação à gastroplastia em Y de Roux.",
        "explanation": "Incorreta: Por não criar anastomoses nem brechas mesentéricas, o *Sleeve* tem risco praticamente nulo de **hérnias internas** (complicação clássica do *bypass* em Y de Roux).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "No SG ocorre a redução metabólica dos níveis de grelina.",
        "explanation": "A alternativa **D** está correta. Na **gastrectomia vertical (*Sleeve* Gástrico)**, a ressecção de cerca de 75–80% do estômago inclui o **fundo gástrico** — principal sítio produtor de **grelina** (hormônio orexígeno) —, promovendo importante **redução dos níveis plasmáticos de grelina** e da sensação de fome (Sabiston / SBCBM).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "O SG não permite a transformação em gastroplastia em Y de Roux caso não se tenha atingido o objetivo final.",
        "explanation": "Incorreta: O *Sleeve* pode ser convertido cirurgicamente em *bypass* gástrico em Y de Roux (por exemplo, em caso de DRGE grave ou reganho de peso).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Na **gastrectomia vertical (*Sleeve* Gástrico)**, a ressecção de cerca de 75–80% do estômago inclui o **fundo gástrico** — principal sítio produtor de **grelina** (hormônio orexígeno) —, promovendo importante **redução dos níveis plasmáticos de grelina** e da sensação de fome (Sabiston / SBCBM).\n- **A) Incorreta:** O *Sleeve* Gástrico **preserva o piloro** e a continuidade gastroduodenal (reduzindo o risco de *dumping*).\n- **B) Incorreta:** O *Sleeve* é primariamente restritivo/metabólico sem desvio intestinal, apresentando **menor** síndrome disabsortiva que o *bypass* em Y de Roux.\n- **C) Incorreta:** Por não criar anastomoses nem brechas mesentéricas, o *Sleeve* tem risco praticamente nulo de **hérnias internas** (complicação clássica do *bypass* em Y de Roux).\n- **E) Incorreta:** O *Sleeve* pode ser convertido cirurgicamente em *bypass* gástrico em Y de Roux (por exemplo, em caso de DRGE grave ou reganho de peso).",
    "perolaClinica": "A alternativa **D** está correta. Na **gastrectomia vertical (*Sleeve* Gástrico)**, a ressecção de cerca de 75–80% do estômago inclui o **fundo gástrico** — principal sítio produtor de **grelina** (hormônio orexígeno) —, promovendo importante **redução dos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Mecanismo endócrino-metabólico e características anatômicas da gastrectomia vertical (Sleeve Gástrico).",
      "raciocinioChave": "A gastrectomia vertical resseca cerca de 75% a 80% do estômago ao longo da grande curvatura, incluindo o fundo gástrico. Como o fundo gástrico é o principal sítio produtor de grelina, o Sleeve reduz significativamente os níveis desse hormônio orexígeno.",
      "armadilhaBanca": "Atribuir ao Sleeve Gástrico complicações anatômicas exclusivas do bypass gástrico em Y de Roux, como hérnias internas e disabsorção acentuada."
    },
    "mapaDistratores": {
      "A": "A gastrectomia vertical preserva integralmente o piloro e o trânsito gastroduodenal fisiológico, reduzindo a ocorrência de síndrome de dumping.",
      "B": "Por não promover desvio intestinal, o Sleeve tem efeito disabsortivo muito menor do que o bypass gástrico em Y de Roux.",
      "C": "Como não cria anastomoses gastrointestinais nem brechas mesentéricas, o Sleeve praticamente não apresenta risco de hérnias internas, ao contrário do Y de Roux.",
      "E": "A gastrectomia vertical pode ser convertida cirurgicamente em bypass gástrico em Y de Roux em casos de DRGE grave ou reganho ponderal."
    }
  },
  {
    "id": "q-uepa-2026-060",
    "code": "Q-UEPA26-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": [
      "doenca-hemorroidaria",
      "hemorroidectomia",
      "coloproctologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa correta em relação à doença hemorroidária.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hemorróidas de segundo grau não são prolapsadas.",
        "explanation": "Incorreta: Hemorroidas de 2º grau **prolapsam** durante a evacuação e reduzem espontaneamente (apenas o 1º grau não prolapsa).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A hemorroidectomia geralmente é o melhor tratamento para a doença hemorroidária a partir do terceiro grau.",
        "explanation": "A alternativa **B** está correta. Segundo as diretrizes da **ASCRS** e o **Sabiston**, enquanto hemorroidas internas graus I e II (e alguns casos selecionados de grau III) respondem a medidas clínico-dietéticas e procedimentos ambulatoriais (ligadura elástica), a **hemorroidectomia cirúrgica** é geralmente o tratamento mais eficaz e definitivo para a **doença hemorroidária a partir do grau III** (especialmente grau III refratário/volumoso, grau IV ou mista sintomática).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A técnica de Milligan-Morgan consiste em um fechamento primário da ferida pós hemorroidectomia.",
        "explanation": "Incorreta: A técnica de **Milligan-Morgan** é a hemorroidectomia **aberta** (ferida deixada aberta para cicatrização por segunda intenção); a técnica fechada é a de **Ferguson**.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A melhor opção para a trombose hemorroidária é a incisão e evacuação do coágulo.",
        "explanation": "Incorreta: Na trombose hemorroidária externa aguda (< 72h com dor intensa), a melhor conduta cirúrgica é a **excisão completa do mamilo trombosado** (não simples incisão/drenagem, que tem alta taxa de recidiva do trombo); após 72h, prefere-se manejo conservador.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "As hemorróidas externas estão distais à borda anal.",
        "explanation": "Incorreta: Hemorroidas externas localizam-se distais à **linha pectínea (denteada)** (não \"distais à borda anal\", pois já se originam no canal anal abaixo da linha pectínea).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Segundo as diretrizes da **ASCRS** e o **Sabiston**, enquanto hemorroidas internas graus I e II (e alguns casos selecionados de grau III) respondem a medidas clínico-dietéticas e procedimentos ambulatoriais (ligadura elástica), a **hemorroidectomia cirúrgica** é geralmente o tratamento mais eficaz e definitivo para a **doença hemorroidária a partir do grau III** (especialmente grau III refratário/volumoso, grau IV ou mista sintomática).\n- **A) Incorreta:** Hemorroidas de 2º grau **prolapsam** durante a evacuação e reduzem espontaneamente (apenas o 1º grau não prolapsa).\n- **C) Incorreta:** A técnica de **Milligan-Morgan** é a hemorroidectomia **aberta** (ferida deixada aberta para cicatrização por segunda intenção); a técnica fechada é a de **Ferguson**.\n- **D) Incorreta:** Na trombose hemorroidária externa aguda (< 72h com dor intensa), a melhor conduta cirúrgica é a **excisão completa do mamilo trombosado** (não simples incisão/drenagem, que tem alta taxa de recidiva do trombo); após 72h, prefere-se manejo conservador.\n- **E) Incorreta:** Hemorroidas externas localizam-se distais à **linha pectínea (denteada)** (não \"distais à borda anal\", pois já se originam no canal anal abaixo da linha pectínea).",
    "perolaClinica": "A alternativa **B** está correta. Segundo as diretrizes da **ASCRS** e o **Sabiston**, enquanto hemorroidas internas graus I e II (e alguns casos selecionados de grau III) respondem a medidas clínico-dietéticas e procedimentos ambulatoriais (ligadura…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação terapêutica e técnicas cirúrgicas na doença hemorroidária e trombose externa.",
      "raciocinioChave": "Enquanto hemorroidas internas graus I e II (e casos selecionados de grau III) respondem a medidas conservadoras e ligadura elástica, a hemorroidectomia é o tratamento definitivo preferencial a partir do grau III (especialmente se volumosas/refratárias) e no grau IV.",
      "armadilhaBanca": "Inverter as técnicas aberta (Milligan-Morgan) e fechada (Ferguson) ou indicar simples incisão na trombose hemorroidária aguda."
    },
    "mapaDistratores": {
      "A": "Hemorroidas internas de 2º grau prolapsam durante o esforço evacuatório e sofrem redução espontânea; apenas as de 1º grau não prolapsam.",
      "C": "A técnica de Milligan-Morgan é a hemorroidectomia aberta (cicatrização por segunda intenção), enquanto o fechamento primário caracteriza a técnica de Ferguson.",
      "D": "Na trombose hemorroidária externa aguda (< 72 horas), prefere-se a excisão completa do mamilo trombosado à simples incisão com drenagem pelo alto risco de recidiva do coágulo.",
      "E": "As hemorroidas externas localizam-se abaixo (distais) da linha pectínea/denteada no canal anal e margem anal, e não apenas distais à borda anal."
    }
  },
  {
    "id": "q-uepa-2026-061",
    "code": "Q-UEPA26-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Abortamento e Incompetência Istmocervical",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-abortamento-e-incompetencia-istmocervical",
    "tags": [
      "incompetencia-istmocervical",
      "cerclagem",
      "exercicio-fisico-gestacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente tercigesta, sem comorbidades, com 24 semanas de gestação e histórico de realização de cerclagem uterina com 14 semanas de gestação por incompetência istmocervical, veio a consulta pré-natal em busca de orientações médicas sobre mudança de estilo de vida por desejar um melhor desfecho para a gestação atual. De acordo com recomendação do Colégio Americano de Obstetras e Ginecologistas, a melhor recomendação para o caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "indicar a prática de atividades físicas, mas interromper caso ocorra a presença de sangramento vaginal.",
        "explanation": "Incorreta: Não se indica iniciar atividade física diante de contraindicação absoluta (cerclagem).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "indicar a realização de atividades físicas em decúbito dorsal, pois levam ao aumento do débito cardíaco.",
        "explanation": "Incorreta: Além da contraindicação absoluta pela cerclagem, o decúbito dorsal prolongado na gestação causa compressão aortocava e **redução** (não aumento) do débito cardíaco.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "contraindicar de forma absoluta a realização de atividades físicas.",
        "explanation": "A alternativa **C** está correta. De acordo com o *Committee Opinion* nº 804 do **ACOG** (*Physical Activity and Exercise During Pregnancy and the Postpartum Period*) e a **FEBRASGO**, a **incompetência istmocervical / presença de cerclagem uterina** figura na lista de **contraindicações absolutas** à prática de exercício físico aeróbico na gestação (junto com placenta prévia após 26 semanas, RPMO, trabalho de parto prematuro, sangramento persistente no 2º/3º trimestre, cardiopatia hemodinamicamente significativa e doença pulmonar restritiva).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "está indicado o treinamento de resistência muscular, para melhor adaptação do organismo às alterações posturais.",
        "explanation": "Incorreta: Contraindicado em gestante com cerclagem por incompetência istmocervical.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "há contraindicação relativa à prática de atividades físicas, logo pode-se iniciar musculação no terceiro trimestre de gestação.",
        "explanation": "Incorreta: Trata-se de contraindicação absoluta (e não relativa), sendo inadequado iniciar musculação no 3º trimestre.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o *Committee Opinion* nº 804 do **ACOG** (*Physical Activity and Exercise During Pregnancy and the Postpartum Period*) e a **FEBRASGO**, a **incompetência istmocervical / presença de cerclagem uterina** figura na lista de **contraindicações absolutas** à prática de exercício físico aeróbico na gestação (junto com placenta prévia após 26 semanas, RPMO, trabalho de parto prematuro, sangramento persistente no 2º/3º trimestre, cardiopatia hemodinamicamente significativa e doença pulmonar restritiva).\n- **A) Incorreta:** Não se indica iniciar atividade física diante de contraindicação absoluta (cerclagem).\n- **B) Incorreta:** Além da contraindicação absoluta pela cerclagem, o decúbito dorsal prolongado na gestação causa compressão aortocava e **redução** (não aumento) do débito cardíaco.\n- **D) Incorreta:** Contraindicado em gestante com cerclagem por incompetência istmocervical.\n- **E) Incorreta:** Trata-se de contraindicação absoluta (e não relativa), sendo inadequado iniciar musculação no 3º trimestre.",
    "perolaClinica": "A alternativa **C** está correta. De acordo com o *Committee Opinion* nº 804 do **ACOG** (*Physical Activity and Exercise During Pregnancy and the Postpartum Period*) e a **FEBRASGO**, a **incompetência istmocervical / presença de cerclagem uterina** figura…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Contraindicações absolutas à prática de atividade física na gestação segundo o ACOG.",
      "raciocinioChave": "Pelo parecer nº 804 do ACOG e diretrizes da FEBRASGO, incompetência istmocervical ou cerclagem uterina constitui contraindicação absoluta à prática de exercícios físicos aeróbicos durante a gestação pelo risco de trabalho de parto prematuro e rotura de membranas. Assim, deve-se contraindicar formalmente a atividade física.",
      "armadilhaBanca": "Tratar a presença de cerclagem/incompetência istmocervical como contraindicação relativa ou liberar exercícios em decúbito dorsal."
    },
    "mapaDistratores": {
      "A": "Diante de cerclagem por incompetência istmocervical, a atividade física é absolutamente contraindicada, não devendo ser iniciada nem sob vigilância de sangramento.",
      "B": "Além da contraindicação absoluta pela cerclagem, o decúbito dorsal prolongado causa compressão aortocava e reduz (não aumenta) o débito cardíaco materno.",
      "D": "Treinamentos de resistência ou força física são contraindicados em gestantes portadoras de cerclagem uterina por incompetência istmocervical.",
      "E": "Incompetência istmocervical com cerclagem representa contraindicação absoluta, e não relativa, sendo proscrito iniciar musculação no terceiro trimestre."
    }
  },
  {
    "id": "q-uepa-2026-062",
    "code": "Q-UEPA26-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Diagnóstico de Gravidez e Modificações Fisiológicas",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-diagnostico-de-gravidez-e-modificacoes-fisiologicas",
    "tags": [
      "modificacoes-fisiologicas",
      "progesterona",
      "pirose",
      "pre-natal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente primigesta, 28 anos de idade, com 25 semanas de gestação, sem comorbidades, está em consulta de seguimento em pré-natal referindo por vezes dispnéia leve, congestão nasal e pirose. A orientação correta quanto as queixas relatadas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "explicar para a paciente que quadros de dispneia na gestação são graves, logo há necessidade de acompanhamento em pré-natal de alto risco.",
        "explanation": "Incorreta: Dispneia leve (sensação subjetiva de falta de ar sem hipoxemia ou sinais de alarme) é fisiológica na gestação pela ação estimulatória da progesterona no centro respiratório, não indicando pré-natal de alto risco.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "informar a paciente que por ação da progesterona na gestação, todo o aparelho digestivo permanece com tônus diminuído e a pirose é comum por isso.",
        "explanation": "A alternativa **B** está correta. Durante a gestação, os elevados níveis de **progesterona** promovem relaxamento da musculatura lisa em todo o trato gastrointestinal, diminuindo o tônus do esfíncter esofagiano inferior (EEI) e retardando o esvaziamento gástrico, o que — somado à compressão mecânica pelo útero gravídico — torna a **pirose** uma queixa fisiológica muito frequente (Zugaib / FEBRASGO).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "orientar a paciente que as queixas de dispneia são comuns pela hiperventilação que leva a um quadro de acidose respiratória compensada.",
        "explanation": "Incorreta: A hiperventilação fisiológica da gestação leva a **alcalose respiratória compensada** (queda da $\\text{PaCO}_2$ com excreção renal compensatória de bicarbonato), não acidose respiratória.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "orientar a paciente que é comum o sintoma de congestão nasal pela hipovascularização e edema da mucosa nasal na gravidez.",
        "explanation": "Incorreta: A rinite/congestão nasal gestacional decorre de **hipervascularização** (estrogênio-mediada) e edema da mucosa nasal, não hipovascularização.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "alertar a paciente que a tríade de sintomas apresentados no momento é sinal de gravidade tanto materno quanto fetal.",
        "explanation": "Incorreta: As três queixas (dispneia leve, congestão nasal e pirose) são adaptações fisiológicas benignas esperadas na gravidez.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Durante a gestação, os elevados níveis de **progesterona** promovem relaxamento da musculatura lisa em todo o trato gastrointestinal, diminuindo o tônus do esfíncter esofagiano inferior (EEI) e retardando o esvaziamento gástrico, o que — somado à compressão mecânica pelo útero gravídico — torna a **pirose** uma queixa fisiológica muito frequente (Zugaib / FEBRASGO).\n- **A) Incorreta:** Dispneia leve (sensação subjetiva de falta de ar sem hipoxemia ou sinais de alarme) é fisiológica na gestação pela ação estimulatória da progesterona no centro respiratório, não indicando pré-natal de alto risco.\n- **C) Incorreta:** A hiperventilação fisiológica da gestação leva a **alcalose respiratória compensada** (queda da $\\text{PaCO}_2$ com excreção renal compensatória de bicarbonato), não acidose respiratória.\n- **D) Incorreta:** A rinite/congestão nasal gestacional decorre de **hipervascularização** (estrogênio-mediada) e edema da mucosa nasal, não hipovascularização.\n- **E) Incorreta:** As três queixas (dispneia leve, congestão nasal e pirose) são adaptações fisiológicas benignas esperadas na gravidez.",
    "perolaClinica": "A alternativa **B** está correta. Durante a gestação, os elevados níveis de **progesterona** promovem relaxamento da musculatura lisa em todo o trato gastrointestinal, diminuindo o tônus do esfíncter esofagiano inferior (EEI) e retardando o esvaziamento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Modificações fisiológicas gastrointestinais e respiratórias mediadas por progesterona e estrogênio na gestação.",
      "raciocinioChave": "Na gestação normal, os níveis elevados de progesterona relaxam a musculatura lisa gastrointestinal, diminuem o tônus do esfíncter esofagiano inferior e lentificam o esvaziamento gástrico. Somada à compressão do útero gravídico, essa ação explica a alta prevalência de pirose fisiológica.",
      "armadilhaBanca": "Confundir a alcalose respiratória fisiológica da gestação com acidose respiratória ou interpretar queixas fisiológicas como sinais de gravidade."
    },
    "mapaDistratores": {
      "A": "A dispneia subjetiva leve sem hipoxemia decorre da hiperventilação fisiológica induzida pela progesterona e não indica encaminhamento ao pré-natal de alto risco.",
      "C": "A hiperventilação gestacional fisiológica reduz a PaCO2 e gera alcalose respiratória compensada (com excreção renal de bicarbonato), não acidose respiratória.",
      "D": "A congestão nasal da gravidez resulta de hipervascularização estrogênico-mediada e edema da mucosa nasal, e não de hipovascularização.",
      "E": "Dispneia leve, congestão nasal e pirose são adaptações fisiológicas benignas comuns na gestação, sem configurar tríade de gravidade materno-fetal."
    }
  },
  {
    "id": "q-uepa-2026-063",
    "code": "Q-UEPA26-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Descolamento Prematuro de Placenta",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-descolamento-prematuro-de-placenta",
    "tags": [
      "dpp",
      "cesariana-imediata",
      "sofrimento-fetal",
      "hipertonia-uterina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 31 anos de idade, primigesta, 35 semanas de gestação, deu entrada no pronto atendimento obstétrico referindo dor abdominal súbita e intensa, com sangramento vaginal vermelho escuro e dor a palpação do útero. Ao exame físico, nota-se hipertonia uterina e taquissistolia. Pressão arterial materna de 160/110 mmHg, frequência cardíaca materna de 120 bpm e batimentos cardíacos fetais de 90 bpm. Ao exame especular há discreto sangramento vaginal e visualização de colo uterino impérvio. O registro cardiotocográfico evidencia linha de base contínua de 90 bpm, com 7 contrações uterinas fortes em 10 minutos. Com base no caso clínico, a conduta imediata para o manejo dessa paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realização de cesariana imediata.",
        "explanation": "A alternativa **A** está correta. O quadro é clássico de **Descolamento Prematuro de Placenta (DPP)** associado a pico hipertensivo (dor abdominal súbita intensa, sangramento vermelho escuro, **hipertonia uterina**, taquissistolia) cursando com **feto vivo em sofrimento fetal agudo grave** (bradicardia sustentada com BCF 90 bpm) e **colo impérvio** (parto vaginal não iminente). Pela diretriz da **FEBRASGO** e **Zugaib**, a conduta imediata é a **resolução emergencial da gestação por cesariana** (concomitante à estabilização hemodinâmica materna).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "indução de trabalho de parto com misoprostol.",
        "explanation": "Incorreta: Misoprostol é contraindicado no DPP (especialmente com hipertonia/taquissistolia) e atrasaria fatalmente o nascimento.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "corticoterapia e cesariana em 48 horas.",
        "explanation": "Incorreta: Aguardar 48h para corticoterapia em DPP com bradicardia fetal de 90 bpm levaria a óbito fetal e agravamento de CIVD/choque materno.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "condução de trabalho de parto via vaginal.",
        "explanation": "Incorreta: Parto vaginal em DPP com feto vivo só é admitido se o parto for **iminente** (período expulsivo/dilatação avançada), o que não ocorre com colo impérvio.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "está indicada tocólise com nifedipino.",
        "explanation": "Incorreta: Tocólise é **contraindicada** no DPP pelo risco de agravar hemorragia uterina e mascarar sinais de choque.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O quadro é clássico de **Descolamento Prematuro de Placenta (DPP)** associado a pico hipertensivo (dor abdominal súbita intensa, sangramento vermelho escuro, **hipertonia uterina**, taquissistolia) cursando com **feto vivo em sofrimento fetal agudo grave** (bradicardia sustentada com BCF 90 bpm) e **colo impérvio** (parto vaginal não iminente). Pela diretriz da **FEBRASGO** e **Zugaib**, a conduta imediata é a **resolução emergencial da gestação por cesariana** (concomitante à estabilização hemodinâmica materna).\n- **B) Incorreta:** Misoprostol é contraindicado no DPP (especialmente com hipertonia/taquissistolia) e atrasaria fatalmente o nascimento.\n- **C) Incorreta:** Aguardar 48h para corticoterapia em DPP com bradicardia fetal de 90 bpm levaria a óbito fetal e agravamento de CIVD/choque materno.\n- **D) Incorreta:** Parto vaginal em DPP com feto vivo só é admitido se o parto for **iminente** (período expulsivo/dilatação avançada), o que não ocorre com colo impérvio.\n- **E) Incorreta:** Tocólise é **contraindicada** no DPP pelo risco de agravar hemorragia uterina e mascarar sinais de choque.",
    "perolaClinica": "A alternativa **A** está correta. O quadro é clássico de **Descolamento Prematuro de Placenta (DPP)** associado a pico hipertensivo (dor abdominal súbita intensa, sangramento vermelho escuro, **hipertonia uterina**, taquissistolia) cursando com **feto vivo em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta obstétrica imediata no descolamento prematuro de placenta com feto vivo e bradicardia fetal.",
      "raciocinioChave": "Dor abdominal súbita, sangramento escuro, hipertonia uterina, taquissistolia e pico hipertensivo em gestante de 35 semanas caracterizam descolamento prematuro de placenta (DPP). Com feto vivo apresentando bradicardia sustentada (BCF 90 bpm) e colo impérvio (parto vaginal não iminente), impõe-se cesariana imediata.",
      "armadilhaBanca": "Postergar o parto para corticoterapia em 48 horas ou tentar parto vaginal/tocólise diante de colo impérvio e sofrimento fetal agudo."
    },
    "mapaDistratores": {
      "B": "O misoprostol é contraindicado no DPP por intensificar a hipertonia/taquissistolia e retardar o nascimento diante de sofrimento fetal grave.",
      "C": "Aguardar 48 horas para maturação pulmonar fetal em DPP com bradicardia fetal sustentada levaria ao óbito fetal e risco de choque e CIVD maternos.",
      "D": "O parto vaginal em DPP com feto vivo só é aceito quando o parto é iminente (expulsivo/dilatação avançada), incompatível com colo impérvio.",
      "E": "A tocólise com nifedipino é contraindicada no DPP porque relaxa o miométrio, agrava a hemorragia retroplacentária e mascara sinais de choque."
    }
  },
  {
    "id": "q-uepa-2026-064",
    "code": "Q-UEPA26-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Rotura Prematura de Membranas Ovulares",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-rotura-prematura-de-membranas-ovulares",
    "tags": [
      "rpmo-a-termo",
      "misoprostol",
      "indice-de-bishop",
      "inducao-do-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante G2P1, 38 semanas de gestação, comparece ao pronto atendimento obstétrico relatando perda de líquido amniótico há 1 hora. Ao exame especular, observa-se saída de líquido claro com grumos pela vagina. Ao exame físico, feto cefálico, em -2 de De Lee, colo uterino com dilatação de 2 cm, esvaecimento de 40%, consistência firme e posição centralizada, sem contrações uterinas. A paciente teve parto vaginal há 3 anos, com episiotomia mediana. Apresenta bom estado geral, sem comorbidades, sinais de infecção ou sofrimento fetal. Para o quadro apresentado, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "prescrever ocitocina para condução do trabalho de parto via vaginal.",
        "explanation": "Incorreta: Ocitocina direta em colo desfavorável (Bishop 4) tem alta taxa de falha de indução; primeiro deve-se maturar o colo com misoprostol.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "indicação absoluta de cesárea, pois o índice de Bishop é desfavorável.",
        "explanation": "Incorreta: Bishop desfavorável não é indicação de cesárea, mas sim de maturação cervical prévia.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "realizar descolamento digital das membranas corioamnióticas.",
        "explanation": "Incorreta: As membranas já estão rotas (RPMO); descolamento digital de membranas não tem sentido e aumenta o risco de infecção ascendente.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "realização de amniotomia para coordenar as contrações.",
        "explanation": "Incorreta: Já há rotura espontânea das membranas confirmada ao exame especular (além de ausência de contrações).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "indicar maturação do colo uterino com misoprostol.",
        "explanation": "A alternativa **E** está correta. Trata-se de **RPMO a termo (38 semanas)** sem sinais de infecção, sem cicatriz uterina prévia (parto anterior foi vaginal) e sem trabalho de parto ativo. Calculando o **Índice de Bishop**: dilatação 2 cm (1) + esvaecimento 40% (1) + altura –2 (1) + consistência firme (0) + posição centralizada (1) = **4 pontos (colo desfavorável, Bishop < 6)**. Pela **FEBRASGO** e **ACOG**, a resolução ativa com **preparo/maturação cervical usando prostaglandina (misoprostol)** é a melhor conduta para reduzir o risco de corioamnionite e cesárea.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Trata-se de **RPMO a termo (38 semanas)** sem sinais de infecção, sem cicatriz uterina prévia (parto anterior foi vaginal) e sem trabalho de parto ativo. Calculando o **Índice de Bishop**: dilatação 2 cm (1) + esvaecimento 40% (1) + altura –2 (1) + consistência firme (0) + posição centralizada (1) = **4 pontos (colo desfavorável, Bishop < 6)**. Pela **FEBRASGO** e **ACOG**, a resolução ativa com **preparo/maturação cervical usando prostaglandina (misoprostol)** é a melhor conduta para reduzir o risco de corioamnionite e cesárea.\n- **A) Incorreta:** Ocitocina direta em colo desfavorável (Bishop 4) tem alta taxa de falha de indução; primeiro deve-se maturar o colo com misoprostol.\n- **B) Incorreta:** Bishop desfavorável não é indicação de cesárea, mas sim de maturação cervical prévia.\n- **C) Incorreta:** As membranas já estão rotas (RPMO); descolamento digital de membranas não tem sentido e aumenta o risco de infecção ascendente.\n- **D) Incorreta:** Já há rotura espontânea das membranas confirmada ao exame especular (além de ausência de contrações).",
    "perolaClinica": "A alternativa **E** está correta. Trata-se de **RPMO a termo (38 semanas)** sem sinais de infecção, sem cicatriz uterina prévia (parto anterior foi vaginal) e sem trabalho de parto ativo. Calculando o **Índice de Bishop**: dilatação 2 cm (1) + esvaecimento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo da rotura prematura de membranas ovulares a termo com índice de Bishop desfavorável.",
      "raciocinioChave": "Em gestação a termo (38 semanas) com RPMO confirmada, sem infecção, sem sofrimento fetal e sem cicatriz uterina prévia, recomenda-se interrupção ativa da gestação. O índice de Bishop soma 4 pontos (colo desfavorável < 6), indicando maturação cervical prévia com misoprostol antes da ocitocina.",
      "armadilhaBanca": "Indicar ocitocina diretamente sem preparo cervical em Bishop desfavorável (4 pontos) ou indicar cesárea pelo Bishop baixo."
    },
    "mapaDistratores": {
      "A": "A infusão direta de ocitocina em colo desfavorável (Bishop 4) apresenta elevada taxa de falha de indução, devendo-se maturar o colo previamente.",
      "B": "Um índice de Bishop desfavorável não indica cesariana, mas sim necessidade de amadurecimento cervical antes da indução com ocitocina.",
      "C": "As membranas ovulares já estão rotas (RPMO), tornando o descolamento digital inútil e capaz de elevar o risco de infecção ascendente.",
      "D": "A amniotomia não se aplica porque a rotura espontânea das membranas já está confirmada pela saída de líquido amniótico ao exame especular."
    }
  },
  {
    "id": "q-uepa-2026-065",
    "code": "Q-UEPA26-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Partograma e Distocias",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-partograma-e-distocias",
    "tags": [
      "distocia-de-ombro",
      "manobras-obstetricas",
      "parto-vaginal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante primigesta, 39 semanas de gestação, sem comorbidades, em trabalho no período expulsivo. O parto progrediu com saída da cabeça fetal, porém ocorre dificuldade na exteriorização dos ombros, com visualização de retração da cabeça fetal contra o períneo materno durante as contrações. Diante da situação exposta, a conduta correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar a hiperextensão e abdução das coxas da gestante, para auxiliar na liberação de ombro impactado.",
        "explanation": "Incorreta (pegadinha clássica): A manobra de McRoberts consiste em **hiperflexão** (e abdução) das coxas sobre o abdome materno — e **não hiperextensão**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "retirada do braço anterior fetal pela face anterior do tórax, na manobra de Jacquemier.",
        "explanation": "Incorreta: A manobra de Jacquemier (Barnum) consiste na retirada do braço **posterior** (e não anterior) pela face anterior do tórax fetal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "tentar girar os ombros fetais do diâmetro sagital para o diâmetro oblíquo, para o desprendimento dos ombros fetais.",
        "explanation": "A alternativa **C** está correta. O enunciado descreve o **sinal da tartaruga**, clássico de **distocia de ombros**. Entre as manobras internas de rotação (como **Rubin II** e **saca-rolha de Woods**), preconizadas pela **FEBRASGO** e pelo protocolo **ALSO/ACOG**, busca-se **girar os ombros fetais do diâmetro anteroposterior (sagital) para o diâmetro oblíquo da pelve** para desimpactar o ombro anterior preso atrás da sínfise púbica.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "realizar pressão mecânica no fundo uterino para desprendimento dos ombros fetais .",
        "explanation": "Incorreta: A pressão fúndica (manobra de Kristeller) é **expressamente contraindicada** na distocia de ombros por agravar a impactação do ombro anterior e aumentar o risco de rotura uterina e lesão do plexo braquial.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "indicar a ultimação do parto via vaginal com auxílio do fórceps Simpson-Braun.",
        "explanation": "Incorreta: O fórceps aplica-se ao polo cefálico ainda no canal de parto; na distocia de ombros a cabeça fetal já se desprendeu.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. O enunciado descreve o **sinal da tartaruga**, clássico de **distocia de ombros**. Entre as manobras internas de rotação (como **Rubin II** e **saca-rolha de Woods**), preconizadas pela **FEBRASGO** e pelo protocolo **ALSO/ACOG**, busca-se **girar os ombros fetais do diâmetro anteroposterior (sagital) para o diâmetro oblíquo da pelve** para desimpactar o ombro anterior preso atrás da sínfise púbica.\n- **A) Incorreta (pegadinha clássica):** A manobra de McRoberts consiste em **hiperflexão** (e abdução) das coxas sobre o abdome materno — e **não hiperextensão**.\n- **B) Incorreta:** A manobra de Jacquemier (Barnum) consiste na retirada do braço **posterior** (e não anterior) pela face anterior do tórax fetal.\n- **D) Incorreta:** A pressão fúndica (manobra de Kristeller) é **expressamente contraindicada** na distocia de ombros por agravar a impactação do ombro anterior e aumentar o risco de rotura uterina e lesão do plexo braquial.\n- **E) Incorreta:** O fórceps aplica-se ao polo cefálico ainda no canal de parto; na distocia de ombros a cabeça fetal já se desprendeu.",
    "perolaClinica": "A alternativa **C** está correta. O enunciado descreve o **sinal da tartaruga**, clássico de **distocia de ombros**. Entre as manobras internas de rotação (como **Rubin II** e **saca-rolha de Woods**), preconizadas pela **FEBRASGO** e pelo protocolo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manobras de resolução da distocia de ombros após desprendimento do polo cefálico.",
      "raciocinioChave": "A retração da cabeça fetal contra o períneo (sinal da tartaruga) confirma distocia de ombros. Entre as manobras internas de rotação (como Rubin II e saca-rolha de Woods), gira-se o diâmetro biacromial do plano sagital para o diâmetro oblíquo pélvico para desimpactar o ombro anterior preso na sínfise púbica.",
      "armadilhaBanca": "Trocar hiperflexão por hiperextensão na manobra de McRoberts ou braço posterior por braço anterior na manobra de Jacquemier."
    },
    "mapaDistratores": {
      "A": "A manobra de McRoberts exige hiperflexão e abdução das coxas sobre o abdome materno, e não hiperextensão (pegadinha anatômica clássica).",
      "B": "A manobra de Jacquemier (Barnum) consiste na extração do braço fetal posterior pela face anterior do tórax, e não do braço anterior.",
      "D": "A pressão no fundo uterino (manobra de Kristeller) é proscrita na distocia de ombros por agravar a impactação e elevar o risco de lesão do plexo braquial e rotura uterina.",
      "E": "O fórceps de Simpson-Braun aplica-se ao polo cefálico antes do seu desprendimento, não tendo função após a saída da cabeça fetal."
    }
  },
  {
    "id": "q-uepa-2026-066",
    "code": "Q-UEPA26-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": [
      "incontinencia-urinaria-de-esforco",
      "sling-suburetral",
      "urodinamica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 55 anos de idade, G2P2A0 (02 partos normais), pós menopausa há 3 anos (em uso de terapia de reposição hormonal combinada), procura atendimento ginecológico com queixa de perda urinária há 12 meses, que vem interferindo nas suas atividades diárias. Após medidas conservadoras, incluindo orientações comportamentais, nutricionais e exercícios de fortalecimento do assoalho pélvico, sem melhora significativa. O exame físico evidencia hipermobilidade uretral (sem prolapso de parede vaginal anterior e posterior), e o estudo urodinâmico mostra perda urinária associada ao aumento da pressão abdominal, sem contrações involuntárias do detrusor. Para o caso descrito, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colporrafia anterior e posterior.",
        "explanation": "Incorreta: Não há prolapso de parede vaginal anterior ou posterior (cistocele/retocele); colporrafia não é tratamento de escolha para IUE.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Histerectomia total via vaginal.",
        "explanation": "Incorreta: Histerectomia vaginal não trata incontinência urinária de esforço.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Iniciar anticolinérgico oral.",
        "explanation": "Incorreta: Anticolinérgicos (oxibutinina, solifenacina) tratam **bexiga hiperativa / urgeincontinência**, não IUE.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Prescrever beta-3 agonista.",
        "explanation": "Incorreta: Beta-3 agonistas (mirabegrona) também são indicados para **bexiga hiperativa**, sem eficácia na IUE pura.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Indicar tratamento cirúrgico com sling suburetral.",
        "explanation": "A alternativa **E** está correta. A paciente apresenta **Incontinência Urinária de Esforço (IUE)** pura (perda ao aumento da pressão abdominal na urodinâmica, **sem contrações involuntárias do detrusor**, com **hipermobilidade uretral**) refratária ao tratamento conservador (fisioterapia do assoalho pélvico e medidas comportamentais). Segundo a **FEBRASGO** e a **ICS**, o tratamento cirúrgico padrão-ouro para IUE por hipermobilidade uretral é o **sling suburetral** (faixa sintética livre de tensão, retropúbica/TVT ou transobturatória/TOT).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. A paciente apresenta **Incontinência Urinária de Esforço (IUE)** pura (perda ao aumento da pressão abdominal na urodinâmica, **sem contrações involuntárias do detrusor**, com **hipermobilidade uretral**) refratária ao tratamento conservador (fisioterapia do assoalho pélvico e medidas comportamentais). Segundo a **FEBRASGO** e a **ICS**, o tratamento cirúrgico padrão-ouro para IUE por hipermobilidade uretral é o **sling suburetral** (faixa sintética livre de tensão, retropúbica/TVT ou transobturatória/TOT).\n- **A) Incorreta:** Não há prolapso de parede vaginal anterior ou posterior (cistocele/retocele); colporrafia não é tratamento de escolha para IUE.\n- **B) Incorreta:** Histerectomia vaginal não trata incontinência urinária de esforço.\n- **C) Incorreta:** Anticolinérgicos (oxibutinina, solifenacina) tratam **bexiga hiperativa / urgeincontinência**, não IUE.\n- **D) Incorreta:** Beta-3 agonistas (mirabegrona) também são indicados para **bexiga hiperativa**, sem eficácia na IUE pura.",
    "perolaClinica": "A alternativa **E** está correta. A paciente apresenta **Incontinência Urinária de Esforço (IUE)** pura (perda ao aumento da pressão abdominal na urodinâmica, **sem contrações involuntárias do detrusor**, com **hipermobilidade uretral**) refratária ao…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Tratamento cirúrgico padrão-ouro para incontinência urinária de esforço por hipermobilidade uretral refratária.",
      "raciocinioChave": "A paciente tem perda urinária aos esforços na urodinâmica, sem contrações não inibidas do detrusor e com hipermobilidade uretral, definindo incontinência urinária de esforço (IUE) pura. Como houve falha das medidas conservadoras e fisioterapia pélvica, a conduta padrão-ouro é o sling suburetral.",
      "armadilhaBanca": "Indicar fármacos de bexiga hiperativa (anticolinérgicos ou beta-3 agonistas) ou cirurgia de prolapso em IUE pura."
    },
    "mapaDistratores": {
      "A": "A paciente não apresenta cistocele ou retocele ao exame físico, não havendo indicação nem eficácia da colporrafia para correção primária da IUE.",
      "B": "A histerectomia vaginal não corrige o defeito de suporte uretral responsável pela incontinência urinária de esforço.",
      "C": "Anticolinérgicos são indicados para síndrome da bexiga hiperativa (contrações involuntárias do detrusor), ausente neste estudo urodinâmico.",
      "D": "Agonistas beta-3 adrenérgicos (como mirabegrona) tratam hiperatividade detrusora/urgeincontinência, sem benefício na IUE pura por hipermobilidade uretral."
    }
  },
  {
    "id": "q-uepa-2026-067",
    "code": "Q-UEPA26-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Úlceras Genitais e ISTs em Ginecologia",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-ulceras-genitais-e-ists-em-ginecologia",
    "tags": [
      "cancro-mole",
      "cancroide",
      "ceftriaxona",
      "ulcera-genital"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 18 anos de idade procura o pronto atendimento ginecológico com queixa de ardor ao urinar. Ao exame ginecológico, observa-se uma úlcera genital dolorosa em introito vaginal, de bordas irregulares e fundo purulento, associada a linfonodomegalia inguinal acompanhada de dor. De acordo com o caso descrito, o melhor tratamento para a paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aciclovir 400 mg via oral a cada 8 horas, por 5 dias.",
        "explanation": "Incorreta: Aciclovir trata herpes genital (vesículas agrupadas que evoluem para úlceras rasas de fundo limpo).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Butoconazol em uso tópico, dose única.",
        "explanation": "Incorreta: Butoconazol é antifúngico tópico usado para candidíase vulvovaginal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A penicilina G benzatina em dose única de 2,4 milhões de unidades IM.",
        "explanation": "Incorreta: Penicilina G benzatina 2,4 milhões UI IM trata **sífilis primária** (cancro duro: úlcera única, **indolor**, bordas endurecidas, fundo limpo e linfonodos indolores).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "ceftriaxona 250 mg IM, em dose única.",
        "explanation": "A alternativa **D** está correta. Úlcera genital **dolorosa**, de **bordas irregulares** e **fundo purulento/sujo**, acompanhada de **linfonodomegalia inguinal dolorosa** (bubão), caracteriza **cancro mole (cancroide)** causado por *Haemophilus ducreyi*. Conforme o **PCDT de ISTs do Ministério da Saúde**, as opções terapêuticas de primeira linha são **azitromicina 1 g VO dose única** ou **ceftriaxona 250 mg IM dose única**.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Doxiciclina 100 mg a cada 12 horas, por 21 dias.",
        "explanation": "Incorreta: Doxiciclina por 21 dias é o esquema para **linfogranuloma venéreo** (*Chlamydia trachomatis* L1–L3) ou **donovanose** (úlceras indolores).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Úlcera genital **dolorosa**, de **bordas irregulares** e **fundo purulento/sujo**, acompanhada de **linfonodomegalia inguinal dolorosa** (bubão), caracteriza **cancro mole (cancroide)** causado por *Haemophilus ducreyi*. Conforme o **PCDT de ISTs do Ministério da Saúde**, as opções terapêuticas de primeira linha são **azitromicina 1 g VO dose única** ou **ceftriaxona 250 mg IM dose única**.\n- **A) Incorreta:** Aciclovir trata herpes genital (vesículas agrupadas que evoluem para úlceras rasas de fundo limpo).\n- **B) Incorreta:** Butoconazol é antifúngico tópico usado para candidíase vulvovaginal.\n- **C) Incorreta:** Penicilina G benzatina 2,4 milhões UI IM trata **sífilis primária** (cancro duro: úlcera única, **indolor**, bordas endurecidas, fundo limpo e linfonodos indolores).\n- **E) Incorreta:** Doxiciclina por 21 dias é o esquema para **linfogranuloma venéreo** (*Chlamydia trachomatis* L1–L3) ou **donovanose** (úlceras indolores).",
    "perolaClinica": "A alternativa **D** está correta. Úlcera genital **dolorosa**, de **bordas irregulares** e **fundo purulento/sujo**, acompanhada de **linfonodomegalia inguinal dolorosa** (bubão), caracteriza **cancro mole (cancroide)** causado por *Haemophilus ducreyi*.…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico e tratamento de primeira linha do cancro mole segundo o PCDT de ISTs.",
      "raciocinioChave": "Úlcera genital dolorosa, de bordas irregulares e fundo purulento associada a linfonodomegalia inguinal dolorosa caracteriza cancro mole (Haemophilus ducreyi). Pelo PCDT do Ministério da Saúde, trata-se em primeira linha com azitromicina 1 g VO dose única ou ceftriaxona 250 mg IM dose única.",
      "armadilhaBanca": "Confundir cancro mole (úlcera dolorosa, bordas irregulares, fundo purulento) com cancro duro (sífilis) ou herpes genital."
    },
    "mapaDistratores": {
      "A": "O aciclovir trata herpes genital, caracterizado por vesículas agrupadas que originam úlceras rasas de fundo limpo, e não fundo purulento com bubão.",
      "B": "O butoconazol é um antifúngico tópico voltado para candidíase vulvovaginal, sem ação sobre úlceras bacterianas.",
      "C": "A penicilina G benzatina 2,4 milhões UI IM trata sífilis primária (cancro duro), cuja úlcera típica é única, indolor, de fundo limpo e bordas endurecidas.",
      "E": "A doxiciclina por 21 dias é o esquema de escolha para linfogranuloma venéreo ou donovanose, que cursam respectivamente com linfadenopatia sem úlcera persistente ou úlceras vegetantes indolores."
    }
  },
  {
    "id": "q-uepa-2026-068",
    "code": "Q-UEPA26-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Climatério e Terapia Hormonal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-climaterio-e-terapia-hormonal",
    "tags": [
      "climaterio",
      "terapia-hormonal",
      "fogachos",
      "menopausa"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 49 anos, G2P2, com história de dois partos normais e sem cirurgias prévias, procura atendimento ginecológico com queixa de calores intensos, sudorese noturna e dificuldade para dormir, sintomas que se iniciaram após a menopausa, ocorrida há 2 anos. É hipertensa controlada em uso de losartana e nega tabagismo. Considerando o quadro clínico apresentado, a conduta terapêutica mais eficaz para o alívio dos sintomas vasomotores relatados é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "terapia de reposição hormonal com estrogênio isolado.",
        "explanation": "Incorreta: Estrogênio isolado em paciente com útero aumenta significativamente o risco de hiperplasia e câncer de endométrio (reserva-se a pacientes histerectomizadas).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "inibidores seletivos da recaptação de serotonina.",
        "explanation": "Incorreta: ISRS são alternativas **menos eficazes** que a TRH, indicadas quando há contraindicação ou recusa à terapia hormonal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "terapia de reposição hormonal com estrogênio e progesterona.",
        "explanation": "A alternativa **C** está correta. A paciente está na **janela de oportunidade** (< 60 anos e < 10 anos de menopausa), com sintomas vasomotores intensos, sem contraindicações à TRH (HAS controlada não contraindica TRH, preferindo-se via transdérmica quando há risco metabólico/vascular) e **possui útero íntegro** (\"sem cirurgias prévias\"). Pela diretriz da **FEBRASGO / SOBRAC**, o tratamento mais eficaz para sintomas vasomotores em mulher com útero é a **terapia hormonal combinada (estrogênio + progestagênio)** para proteção endometrial.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Estriol via vaginal.",
        "explanation": "Incorreta: Estriol tópico vaginal tem ação local restrita à síndrome geniturinária da menopausa (atrofia vaginal), sem eficácia sobre fogachos/sintomas vasomotores sistêmicos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "inibidores da recaptação de serotonina e norepinefrina.",
        "explanation": "Incorreta: IRSN (ex.: venlafaxina, desvenlafaxina) são opções não hormonais de segunda linha, inferiores em eficácia à TRH.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. A paciente está na **janela de oportunidade** (< 60 anos e < 10 anos de menopausa), com sintomas vasomotores intensos, sem contraindicações à TRH (HAS controlada não contraindica TRH, preferindo-se via transdérmica quando há risco metabólico/vascular) e **possui útero íntegro** (\"sem cirurgias prévias\"). Pela diretriz da **FEBRASGO / SOBRAC**, o tratamento mais eficaz para sintomas vasomotores em mulher com útero é a **terapia hormonal combinada (estrogênio + progestagênio)** para proteção endometrial.\n- **A) Incorreta:** Estrogênio isolado em paciente com útero aumenta significativamente o risco de hiperplasia e câncer de endométrio (reserva-se a pacientes histerectomizadas).\n- **B) Incorreta:** ISRS são alternativas **menos eficazes** que a TRH, indicadas quando há contraindicação ou recusa à terapia hormonal.\n- **D) Incorreta:** Estriol tópico vaginal tem ação local restrita à síndrome geniturinária da menopausa (atrofia vaginal), sem eficácia sobre fogachos/sintomas vasomotores sistêmicos.\n- **E) Incorreta:** IRSN (ex.: venlafaxina, desvenlafaxina) são opções não hormonais de segunda linha, inferiores em eficácia à TRH.",
    "perolaClinica": "A alternativa **C** está correta. A paciente está na **janela de oportunidade** (< 60 anos e < 10 anos de menopausa), com sintomas vasomotores intensos, sem contraindicações à TRH (HAS controlada não contraindica TRH, preferindo-se via transdérmica quando há…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escolha da terapia hormonal sistêmica combinada para sintomas vasomotores na janela de oportunidade em mulher com útero.",
      "raciocinioChave": "A paciente tem 49 anos, menopausa há 2 anos (dentro da janela de oportunidade), sintomas vasomotores intensos e útero preservado, sem contraindicações absolutas à TRH (HAS controlada). O tratamento mais eficaz é a terapia hormonal com estrogênio associado a progestagênio para proteção endometrial.",
      "armadilhaBanca": "Prescrever estrogênio isolado para mulher com útero íntegro (risco endometrial) ou estriol tópico para sintomas vasomotores sistêmicos."
    },
    "mapaDistratores": {
      "A": "A terapia com estrogênio isolado sem oposição progestagênica em mulher com útero íntegro eleva substancialmente o risco de hiperplasia e câncer endometrial.",
      "B": "Os inibidores seletivos da recaptação de serotonina têm eficácia inferior à terapia hormonal para fogachos, reservando-se a contraindicações ou recusa à TRH.",
      "D": "O estriol tópico vaginal atua apenas localmente na síndrome geniturinária da menopausa, não controlando fogachos nem sudorese noturna.",
      "E": "Os inibidores da recaptação de serotonina e norepinefrina são opções não hormonais de segunda linha, menos eficazes que a reposição estroprogestativa."
    }
  },
  {
    "id": "q-uepa-2026-069",
    "code": "Q-UEPA26-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Vulvovaginites e Corrimentos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-vulvovaginites-e-corrimentos-genitais",
    "tags": [
      "vaginose-bacteriana",
      "metronidazol",
      "diu-de-cobre",
      "teste-das-aminas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 27 anos, nuligesta, usuária de DIU de cobre 380-A, inserido há 2 anos, procura atendimento ginecológico com queixa de corrimento vaginal com odor desagradável, principalmente após a relação sexual. Nega dor pélvica ou febre. Ao exame ginecológico, observa-se corrimento acinzentado, fino e homogêneo, sem sinais inflamatórios. O teste das aminas é positivo e o pH vaginal está aumentado (> 4,5). Considerando o quadro clínico descrito, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Remover o DIU de cobre e iniciar fluconazol oral.",
        "explanation": "Incorreta: Fluconazol trata candidíase e não se deve remover o DIU na vaginose bacteriana.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Metronidazol, mantendo o DIU de cobre.",
        "explanation": "A alternativa **B** está correta. A paciente preenche 3 dos 4 **Critérios de Amsel** (corrimento fino/homogêneo acinzentado, teste das aminas/*whiff test* positivo e pH vaginal > 4,5), confirmando **vaginose bacteriana** (*Gardnerella vaginalis* e anaeróbios). Segundo o **PCDT de ISTs (MS)** e a **FEBRASGO**, o tratamento de primeira escolha é **metronidazol** (500 mg VO 12/12h por 7 dias ou gel vaginal), **sem necessidade de remoção do DIU de cobre**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Apenas prescrever fluconazol em dose única.",
        "explanation": "Incorreta: Fluconazol não tem atividade contra vaginose bacteriana.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Clindamicina creme vaginal 2% e retirar o DIU de cobre.",
        "explanation": "Incorreta: Embora clindamicina tópica trate vaginose bacteriana, **não há indicação de retirar o DIU de cobre**.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Ceftriaxona intramuscular e doxiciclina oral.",
        "explanation": "Incorreta: Ceftriaxona + doxiciclina é esquema para cervicite/DIP (gonococo e clamídia), e a paciente não tem dor pélvica, febre ou cervicite.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. A paciente preenche 3 dos 4 **Critérios de Amsel** (corrimento fino/homogêneo acinzentado, teste das aminas/*whiff test* positivo e pH vaginal > 4,5), confirmando **vaginose bacteriana** (*Gardnerella vaginalis* e anaeróbios). Segundo o **PCDT de ISTs (MS)** e a **FEBRASGO**, o tratamento de primeira escolha é **metronidazol** (500 mg VO 12/12h por 7 dias ou gel vaginal), **sem necessidade de remoção do DIU de cobre**.\n- **A) Incorreta:** Fluconazol trata candidíase e não se deve remover o DIU na vaginose bacteriana.\n- **C) Incorreta:** Fluconazol não tem atividade contra vaginose bacteriana.\n- **D) Incorreta:** Embora clindamicina tópica trate vaginose bacteriana, **não há indicação de retirar o DIU de cobre**.\n- **E) Incorreta:** Ceftriaxona + doxiciclina é esquema para cervicite/DIP (gonococo e clamídia), e a paciente não tem dor pélvica, febre ou cervicite.",
    "perolaClinica": "A alternativa **B** está correta. A paciente preenche 3 dos 4 **Critérios de Amsel** (corrimento fino/homogêneo acinzentado, teste das aminas/*whiff test* positivo e pH vaginal > 4,5), confirmando **vaginose bacteriana** (*Gardnerella vaginalis* e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico pelos critérios de Amsel e conduta na vaginose bacteriana em usuária de DIU de cobre.",
      "raciocinioChave": "Corrimento acinzentado fino e homogêneo, teste das aminas positivo e pH vaginal > 4,5 preenchem os critérios de Amsel para vaginose bacteriana. Pelo PCDT de ISTs, o tratamento de escolha é o metronidazol, mantendo-se o DIU de cobre no local.",
      "armadilhaBanca": "Indicar a retirada desnecessária do DIU de cobre em caso de vaginose bacteriana ou confundir com candidíase/cervicite."
    },
    "mapaDistratores": {
      "A": "O fluconazol trata candidíase vulvovaginal (não vaginose bacteriana) e não há indicação de remover o DIU de cobre.",
      "C": "O fluconazol em dose única não tem atividade contra Gardnerella vaginalis e anaeróbios responsáveis pela vaginose bacteriana.",
      "D": "Embora a clindamicina tópica seja alternativa válida para vaginose bacteriana, não se deve retirar o DIU de cobre para o tratamento.",
      "E": "Ceftriaxona com doxiciclina compõe o esquema para cervicite ou DIP, quadro ausente na paciente sem dor pélvica, febre ou secreção cervical mucopurulenta."
    }
  },
  {
    "id": "q-uepa-2026-070",
    "code": "Q-UEPA26-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Violência Sexual e Aborto Previsto em Lei",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-violencia-sexual-e-aborto-previsto-em-lei",
    "tags": [
      "violencia-sexual",
      "profilaxia-ist",
      "contracepcao-de-emergencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 21 anos de idade procura atendimento de urgência ginecológica relatando ter sido vítima de violência sexual com conjunção carnal há poucas horas. Refere dor intensa em região genital e sangramento discreto. Ao exame físico, observam-se lesões traumáticas em vulva e vagina, sem sinais de instabilidade hemodinâmica. Diante deste caso, a conduta adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "tratar lesões do canal vaginal, fazer profilaxia para Infecções Sexualmente Transmissíveis, contracepção de emergência e encaminhar para o seguimento com equipe multiprofissional.",
        "explanation": "A alternativa **A** está correta. Conforme a **Lei nº 12.845/2013** (Lei do Minuto Seguinte) e a Norma Técnica do **Ministério da Saúde** sobre atenção às pessoas em situação de violência sexual, o atendimento de emergência no SUS deve ser **imediato, integral e incondicional** (sem exigir Boletim de Ocorrência ou laudo do IML): inclui acolhimento, tratamento das lesões físicas/genitais, **profilaxia para ISTs virais (PEP HIV em até 72h, hepatite B) e não virais**, **contracepção de emergência** (em até 5 dias) e acompanhamento multiprofissional (psicologia, serviço social e médico).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "realizar sutura das lesões, prover contracepção de emergência e encaminhar a paciente para o médico legista.",
        "explanation": "Incorreta: Omite a profilaxia obrigatória para ISTs (incluindo PEP HIV) e o seguimento multiprofissional.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "encaminhar a paciente diretamente para o Instituto Médico Legal (IML).",
        "explanation": "Incorreta: O atendimento médico de urgência tem prioridade absoluta e não deve ser condicionado ou substituído pelo encaminhamento ao IML.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "encaminhar a paciente para realização de Boletim de Ocorrência (BO) e então fazer tratamento de lesões, contracepção de emergência e profilaxia para Infecções Sexualmente Transmissíveis.",
        "explanation": "Incorreta: É **ilegal** condicionar o atendimento em saúde à realização prévia de Boletim de Ocorrência.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "solicitar a presença de um familiar para acompanhar a paciente para o instituto médico legal, onde será feita contracepção de emergência e boletim de ocorrência.",
        "explanation": "Incorreta: A paciente é adulta (21 anos), tem autonomia e sigilo garantidos, e a contracepção de emergência/profilaxia é feita no serviço de saúde, não no IML.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Conforme a **Lei nº 12.845/2013** (Lei do Minuto Seguinte) e a Norma Técnica do **Ministério da Saúde** sobre atenção às pessoas em situação de violência sexual, o atendimento de emergência no SUS deve ser **imediato, integral e incondicional** (sem exigir Boletim de Ocorrência ou laudo do IML): inclui acolhimento, tratamento das lesões físicas/genitais, **profilaxia para ISTs virais (PEP HIV em até 72h, hepatite B) e não virais**, **contracepção de emergência** (em até 5 dias) e acompanhamento multiprofissional (psicologia, serviço social e médico).\n- **B) Incorreta:** Omite a profilaxia obrigatória para ISTs (incluindo PEP HIV) e o seguimento multiprofissional.\n- **C) Incorreta:** O atendimento médico de urgência tem prioridade absoluta e não deve ser condicionado ou substituído pelo encaminhamento ao IML.\n- **D) Incorreta:** É **ilegal** condicionar o atendimento em saúde à realização prévia de Boletim de Ocorrência.\n- **E) Incorreta:** A paciente é adulta (21 anos), tem autonomia e sigilo garantidos, e a contracepção de emergência/profilaxia é feita no serviço de saúde, não no IML.",
    "perolaClinica": "A alternativa **A** está correta. Conforme a **Lei nº 12.845/2013** (Lei do Minuto Seguinte) e a Norma Técnica do **Ministério da Saúde** sobre atenção às pessoas em situação de violência sexual, o atendimento de emergência no SUS deve ser **imediato,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Atendimento médico integral e incondicional à vítima de violência sexual conforme a Lei do Minuto Seguinte.",
      "raciocinioChave": "Pela Lei nº 12.845/2013 e normas do Ministério da Saúde, o atendimento de urgência à vítima de violência sexual deve ser imediato e sem pré-condições policiais. Inclui cuidado das lesões, contracepção de emergência, profilaxias de ISTs virais e não virais e seguimento multiprofissional.",
      "armadilhaBanca": "Condicionar o atendimento de emergência, profilaxias ou contracepção de emergência ao Boletim de Ocorrência ou envio imediato ao IML."
    },
    "mapaDistratores": {
      "B": "A conduta está incompleta por omitir a profilaxia obrigatória de ISTs (incluindo PEP para HIV em até 72 horas) e o seguimento multiprofissional.",
      "C": "Encaminhar diretamente ao IML posterga o atendimento médico de urgência, que tem prioridade absoluta e independe de perícia prévia.",
      "D": "É ilegal exigir Boletim de Ocorrência prévio para prestar assistência médica, contracepção de emergência ou profilaxia de ISTs no SUS.",
      "E": "Paciente adulta (21 anos) tem autonomia e sigilo garantidos, e as profilaxias e contracepção de emergência devem ser realizadas no serviço de saúde, não no IML."
    }
  },
  {
    "id": "q-uepa-2026-071",
    "code": "Q-UEPA26-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Climatério e Terapia Hormonal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-climaterio-e-terapia-hormonal",
    "tags": [
      "straw-10",
      "transicao-menopausal",
      "envelhecimento-reprodutivo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O sistema STRAW (Stages of Reproductive Aging Workshop) caracteriza os diferentes estágios do envelhecimento do sistema reprodutivo com base em características clínicas e laboratoriais. Segundo esse sistema, uma mulher com amenorréia há 90 dias, baixa contagem de folículos ovariano, alto nível de hormônio folículo estimulante, baixo nível de hormônio antimülleriano, baixo nível de Inibina B encontra-se na seguinte fase da vida reprodutiva:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pós menopausa Tardia",
        "explanation": "Incorreta: Pós-menopausa tardia ocorre após mais de 6–8 anos desde a última menstruação (DUM).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Pós menopausa Precoce",
        "explanation": "Incorreta: Pós-menopausa precoce só se inicia após **12 meses consecutivos de amenorreia** (estágio +1).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Transição menopausal",
        "explanation": "A alternativa **C** está correta. Pelo sistema **STRAW+10**, a **transição menopausal tardia (estágio –1)** caracteriza-se por intervalos de **amenorreia ≥ 60 dias** (aqui 90 dias, ainda abaixo de 12 meses), associados a **FSH elevado (> 25 UI/L)**, **contagem de folículos antrais muito baixa**, **HAM baixo** e **Inibina B baixa** (FEBRASGO / Harlow et al.).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Período reprodutivo precoce",
        "explanation": "Incorreta: No período reprodutivo precoce (–5), reserva folicular, HAM e Inibina B são normais/elevados e FSH é normal.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Pico do período reprodutivo",
        "explanation": "Incorreta: No pico do período reprodutivo (–4), os ciclos são regulares e os marcadores de reserva ovariana são normais.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Pelo sistema **STRAW+10**, a **transição menopausal tardia (estágio –1)** caracteriza-se por intervalos de **amenorreia ≥ 60 dias** (aqui 90 dias, ainda abaixo de 12 meses), associados a **FSH elevado (> 25 UI/L)**, **contagem de folículos antrais muito baixa**, **HAM baixo** e **Inibina B baixa** (FEBRASGO / Harlow et al.).\n- **A) Incorreta:** Pós-menopausa tardia ocorre após mais de 6–8 anos desde a última menstruação (DUM).\n- **B) Incorreta:** Pós-menopausa precoce só se inicia após **12 meses consecutivos de amenorreia** (estágio +1).\n- **D) Incorreta:** No período reprodutivo precoce (–5), reserva folicular, HAM e Inibina B são normais/elevados e FSH é normal.\n- **E) Incorreta:** No pico do período reprodutivo (–4), os ciclos são regulares e os marcadores de reserva ovariana são normais.",
    "perolaClinica": "A alternativa **C** está correta. Pelo sistema **STRAW+10**, a **transição menopausal tardia (estágio –1)** caracteriza-se por intervalos de **amenorreia ≥ 60 dias** (aqui 90 dias, ainda abaixo de 12 meses), associados a **FSH elevado (> 25 UI/L)**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Estadiamento do envelhecimento reprodutivo pelo sistema STRAW+10 diante de amenorreia de 90 dias.",
      "raciocinioChave": "No sistema STRAW+10, a transição menopausal tardia (estágio -1) é definida por intervalos de amenorreia ≥ 60 dias (ainda inferiores a 12 meses), acompanhados de elevação do FSH e queda acentuada de folículos antrais, HAM e Inibina B. Como a amenorreia dura 90 dias, a paciente está na transição menopausal.",
      "armadilhaBanca": "Classificar amenorreia de 90 dias como pós-menopausa precoce antes de completar 12 meses consecutivos sem menstruar."
    },
    "mapaDistratores": {
      "A": "A pós-menopausa tardia (estágio +2) inicia-se apenas após cerca de 6 a 8 anos contados da última menstruação definitiva.",
      "B": "A pós-menopausa precoce (estágio +1) só pode ser estabelecida retrospectivamente após 12 meses consecutivos de amenorreia.",
      "D": "No período reprodutivo precoce (-5), os ciclos costumam estar presentes e os níveis de HAM, Inibina B e contagem folicular são normais ou elevados, com FSH normal.",
      "E": "No pico do período reprodutivo (-4), os ciclos menstruais são regulares e os marcadores de reserva ovariana mantêm-se preservados."
    }
  },
  {
    "id": "q-uepa-2026-072",
    "code": "Q-UEPA26-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Doença Inflamatória Pélvica",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-doenca-inflamatoria-pelvica",
    "tags": [
      "dip",
      "dor-pelvica",
      "muco-purulento",
      "toque-vaginal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher com 24 anos de idade referindo dor pélvica aguda de forte intensidade há 2 dias. Nega: atraso menstrual. Ao exame físico: Febre (temperatura axilar=38,10C), sinal de Giordano negativo, normocorada, pressão arterial= 110/70 mmHg, eupneica. Especular vaginal: muco cervical purulento, conteúdo vaginal amarelado com odor discreto, colo e vagina sem lesões. Toque vaginal: colo, útero e anexos dolorosos a mobilização. Abdome: normotenso, doloroso a palpação profunda em hipogástrio, descompressão brusca indolor. Considerando o quadro clínico, a principal hipótese diagnóstica dentre as opções abaixo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prenhez ectópica íntegra.",
        "explanation": "Incorreta: Gravidez ectópica íntegra não causa febre nem muco cervical purulento, além de a paciente negar atraso menstrual.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Prenhez ectópica rota.",
        "explanation": "Incorreta: Ectópica rota cursa com irritação peritoneal (descompressão brusca dolorosa), palidez/instabilidade hemodinâmica e ausência de febre/cervicite purulenta.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Pielonefrite.",
        "explanation": "Incorreta: Pielonefrite cursa com sinal de Giordano positivo e sintomas urinários, sem cervicite purulenta ou dor à mobilização uterina/anexial.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Mioma parido.",
        "explanation": "Incorreta: Mioma parido manifesta-se por massa fibroelástica exteriorizando-se pelo orifício cervical externo ao exame especular (aqui o colo está sem lesões).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Doença inflamatória pélvica.",
        "explanation": "A alternativa **E** está correta. A paciente preenche os **3 critérios maiores** do Ministério da Saúde (PCDT IST) para **Doença Inflamatória Pélvica (DIP)** (dor em hipogástrio, dor à palpação anexial e dor à mobilização do colo uterino) além de **critérios menores** (febre > 37,5/38,3 °C e conteúdo/muco cervical purulento), confirmando o diagnóstico clínico e indicando início imediato de antibioticoterapia empírica (ceftriaxona + doxiciclina + metronidazol).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. A paciente preenche os **3 critérios maiores** do Ministério da Saúde (PCDT IST) para **Doença Inflamatória Pélvica (DIP)** (dor em hipogástrio, dor à palpação anexial e dor à mobilização do colo uterino) além de **critérios menores** (febre > 37,5/38,3 °C e conteúdo/muco cervical purulento), confirmando o diagnóstico clínico e indicando início imediato de antibioticoterapia empírica (ceftriaxona + doxiciclina + metronidazol).\n- **A) Incorreta:** Gravidez ectópica íntegra não causa febre nem muco cervical purulento, além de a paciente negar atraso menstrual.\n- **B) Incorreta:** Ectópica rota cursa com irritação peritoneal (descompressão brusca dolorosa), palidez/instabilidade hemodinâmica e ausência de febre/cervicite purulenta.\n- **C) Incorreta:** Pielonefrite cursa com sinal de Giordano positivo e sintomas urinários, sem cervicite purulenta ou dor à mobilização uterina/anexial.\n- **D) Incorreta:** Mioma parido manifesta-se por massa fibroelástica exteriorizando-se pelo orifício cervical externo ao exame especular (aqui o colo está sem lesões).",
    "perolaClinica": "A alternativa **E** está correta. A paciente preenche os **3 critérios maiores** do Ministério da Saúde (PCDT IST) para **Doença Inflamatória Pélvica (DIP)** (dor em hipogástrio, dor à palpação anexial e dor à mobilização do colo uterino) além de **critérios…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critérios clínicos maiores e menores do Ministério da Saúde para diagnóstico de doença inflamatória pélvica.",
      "raciocinioChave": "A paciente apresenta dor hipogástrica, dor à palpação anexial e dor à mobilização do colo uterino (os 3 critérios maiores para DIP), somados a febre (38,1 °C) e muco cervical purulento (critérios menores). O conjunto confirma doença inflamatória pélvica como principal hipótese diagnóstica.",
      "armadilhaBanca": "Confundir DIP com gravidez ectópica ou pielonefrite pela dor pélvica aguda e febre."
    },
    "mapaDistratores": {
      "A": "A prenhez ectópica íntegra não provoca febre nem muco cervical purulento, e a paciente nega atraso menstrual.",
      "B": "A prenhez ectópica rota cursa tipicamente com descompressão brusca dolorosa, palidez/hipotensão por hemoperitônio e ausência de febre ou cervicite purulenta.",
      "C": "A pielonefrite cursa com sinal de Giordano positivo e sintomas urinários, sem muco cervical purulento ou dor à mobilização uterina e anexial.",
      "D": "O mioma parido apresenta massa fibroelástica exteriorizando-se pelo orifício cervical externo ao exame especular, ausente nesta paciente."
    }
  },
  {
    "id": "q-uepa-2026-073",
    "code": "Q-UEPA26-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Úlceras Genitais e ISTs em Ginecologia",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-ulceras-genitais-e-ists-em-ginecologia",
    "tags": [
      "herpes-genital",
      "herpes-simplex",
      "ulceras-genitais",
      "vesiculas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 25 anos de idade, sexualmente ativa, queixando-se de pequenas vesículas agrupadas em região genital, que romperam formando úlceras dolorosas há cerca de 2 dias. Exame físico: úlceras agrupadas com fundo contendo conteúdo hialino em região genital e perianal; linfonodos inguinais não palpáveis. Especular vaginal: muco cervical cristalino, conteúdo vaginal fisiológico, colo e vagina sem lesões. Considerando o quadro acima, o agente etiológico das lesões com maior probabilidade dentre as opções abaixo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Haemophilus ducreyi.",
        "explanation": "Incorreta: *Haemophilus ducreyi* (cancro mole) causa úlceras dolorosas de fundo **purulento/sujo** e bordas irregulares (não precedidas por vesículas agrupadas), geralmente com linfonodomegalia inguinal dolorosa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Cândida Albicans.",
        "explanation": "Incorreta: *Candida albicans* causa prurido vulvar intenso e corrimento branco grumoso em placas, sem vesículas/úlceras agrupadas típicas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Trichomonas vaginalis.",
        "explanation": "Incorreta: *Trichomonas vaginalis* causa corrimento amarelo-esverdeado bolhoso e colpite em framboesa, não úlceras vesiculares.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Herpes simplex.",
        "explanation": "A alternativa **D** está correta (**gabarito oficial definitivo alterado de A para D pela banca UEPA 2026**). A história clássica de **pequenas vesículas agrupadas em base eritematosa** que se rompem formando **úlceras dolorosas agrupadas de fundo limpo/hialino** em região genital e perianal é patognomônica de **herpes genital**, causado pelo vírus ***Herpes simplex* (HSV-2 ou HSV-1)** (PCDT IST / Ministério da Saúde).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Klebisiella granulomats.",
        "explanation": "Incorreta: *Klebsiella granulomatis* (donovanose) causa úlceras vegetantes crônicas, **indolores** e friáveis (\"em espelho\").",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta (**gabarito oficial definitivo alterado de A para D pela banca UEPA 2026**). A história clássica de **pequenas vesículas agrupadas em base eritematosa** que se rompem formando **úlceras dolorosas agrupadas de fundo limpo/hialino** em região genital e perianal é patognomônica de **herpes genital**, causado pelo vírus ***Herpes simplex* (HSV-2 ou HSV-1)** (PCDT IST / Ministério da Saúde).\n- **A) Incorreta:** *Haemophilus ducreyi* (cancro mole) causa úlceras dolorosas de fundo **purulento/sujo** e bordas irregulares (não precedidas por vesículas agrupadas), geralmente com linfonodomegalia inguinal dolorosa.\n- **B) Incorreta:** *Candida albicans* causa prurido vulvar intenso e corrimento branco grumoso em placas, sem vesículas/úlceras agrupadas típicas.\n- **C) Incorreta:** *Trichomonas vaginalis* causa corrimento amarelo-esverdeado bolhoso e colpite em framboesa, não úlceras vesiculares.\n- **E) Incorreta:** *Klebsiella granulomatis* (donovanose) causa úlceras vegetantes crônicas, **indolores** e friáveis (\"em espelho\").",
    "perolaClinica": "A alternativa **D** está correta (**gabarito oficial definitivo alterado de A para D pela banca UEPA 2026**). A história clássica de **pequenas vesículas agrupadas em base eritematosa** que se rompem formando **úlceras dolorosas agrupadas de fundo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Identificação etiológica do herpes genital a partir de vesículas agrupadas que evoluem para úlceras de fundo hialino.",
      "raciocinioChave": "Pequenas vesículas agrupadas que se rompem formando úlceras dolorosas agrupadas com fundo limpo/hialino em região genital e perianal são características de herpes genital. O agente etiológico é o vírus Herpes simplex (HSV-1 ou HSV-2).",
      "armadilhaBanca": "Confundir úlceras dolorosas precedidas por vesículas agrupadas (herpes genital) com cancro mole por *Haemophilus ducreyi*."
    },
    "mapaDistratores": {
      "A": "O Haemophilus ducreyi (cancro mole) produz úlceras dolorosas de fundo purulento/sujo e bordas irregulares, sem fase vesicular prévia e frequentemente com bubão inguinal.",
      "B": "A Candida albicans causa prurido vulvovaginal intenso e corrimento branco grumoso aderido, não vesículas agrupadas que ulceram.",
      "C": "O Trichomonas vaginalis provoca corrimento amarelo-esverdeado bolhoso e colpite difusa, sem úlceras vesiculares agrupadas.",
      "E": "A Klebsiella granulomatis (donovanose) causa lesões ulcerovegetantes crônicas, indolores e friáveis, distintas de vesículas agudas dolorosas."
    }
  },
  {
    "id": "q-uepa-2026-074",
    "code": "Q-UEPA26-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Síndrome dos Ovários Policísticos",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-sindrome-dos-ovarios-policisticos",
    "tags": [
      "sop",
      "inducao-da-ovulacao",
      "citrato-de-clomifeno",
      "infertilidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A Síndrome dos Ovários Policísticos (SOP) tem ampla gama de sinais e sintomas, devendo o tratamento ser individualizado. Neste contexto, dentre as opções abaixo, a melhor opção terapêutica para uma paciente com SOP, índice de massa corpórea normal, sem sinais de hiperandrogenismo clínico, sem alterações em couro cabeludo e com desejo de engravidar é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Finasterida",
        "explanation": "Incorreta: Finasterida é antiandrogênico (inibidor da 5α-redutase) **teratogênico**, contraindicado em quem deseja engravidar.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Espironolactona",
        "explanation": "Incorreta: Espironolactona é antiandrogênico usado para hirsutismo/acne e também **contraindicado** em gestantes/tentantes (risco de feminização de feto masculino).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Liraglutida",
        "explanation": "Incorreta: Liraglutida é análogo de GLP-1 voltado à perda ponderal em pacientes com obesidade/sobrepeso (a paciente tem IMC normal e quer engravidar).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Drosperinona com etinilestradiol",
        "explanation": "Incorreta: Anticoncepcional oral combinado (drospirenona + etinilestradiol) inibe a ovulação e impede a gravidez.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Citrato de clomifeno",
        "explanation": "A alternativa **E** está correta. Em paciente com **SOP**, IMC normal, sem queixas androgênicas e **com desejo de gestação**, o objetivo terapêutico é a **indução da ovulação**. Dentre as alternativas apresentadas, o **citrato de clomifeno** (modulador seletivo do receptor de estrogênio que bloqueia o feedback negativo hipotalâmico e eleva FSH/LH) é a única opção indutora da ovulação (junto ao letrozol nas diretrizes atuais da FEBRASGO / ESHRE).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Em paciente com **SOP**, IMC normal, sem queixas androgênicas e **com desejo de gestação**, o objetivo terapêutico é a **indução da ovulação**. Dentre as alternativas apresentadas, o **citrato de clomifeno** (modulador seletivo do receptor de estrogênio que bloqueia o feedback negativo hipotalâmico e eleva FSH/LH) é a única opção indutora da ovulação (junto ao letrozol nas diretrizes atuais da FEBRASGO / ESHRE).\n- **A) Incorreta:** Finasterida é antiandrogênico (inibidor da 5α-redutase) **teratogênico**, contraindicado em quem deseja engravidar.\n- **B) Incorreta:** Espironolactona é antiandrogênico usado para hirsutismo/acne e também **contraindicado** em gestantes/tentantes (risco de feminização de feto masculino).\n- **C) Incorreta:** Liraglutida é análogo de GLP-1 voltado à perda ponderal em pacientes com obesidade/sobrepeso (a paciente tem IMC normal e quer engravidar).\n- **D) Incorreta:** Anticoncepcional oral combinado (drospirenona + etinilestradiol) inibe a ovulação e impede a gravidez.",
    "perolaClinica": "A alternativa **E** está correta. Em paciente com **SOP**, IMC normal, sem queixas androgênicas e **com desejo de gestação**, o objetivo terapêutico é a **indução da ovulação**. Dentre as alternativas apresentadas, o **citrato de clomifeno** (modulador…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Escolha terapêutica para indução da ovulação na síndrome dos ovários policísticos com desejo reprodutivo.",
      "raciocinioChave": "Em paciente com SOP, IMC normal, sem hiperandrogenismo clínico e com desejo imediato de engravidar, o foco terapêutico é induzir a ovulação. Entre as opções listadas, apenas o citrato de clomifeno atua como indutor da ovulação ao bloquear o feedback estrogênico negativo.",
      "armadilhaBanca": "Prescrever antiandrogênicos teratogênicos (finasterida/espironolactona) ou ACO para paciente com SOP que deseja engravidar."
    },
    "mapaDistratores": {
      "A": "A finasterida é um inibidor da 5-alfa-redutase teratogênico e sem indicação na ausência de hiperandrogenismo em mulher que deseja engravidar.",
      "B": "A espironolactona é antiandrogênico contraindicado para tentantes/gestantes pelo risco de feminização de feto masculino, além de a paciente não ter hiperandrogenismo.",
      "C": "A liraglutida é um análogo de GLP-1 indicado para redução ponderal em sobrepeso/obesidade, inadequado diante de IMC normal e desejo gestacional imediato.",
      "D": "A combinação drospirenona com etinilestradiol é um anticoncepcional oral combinado que bloqueia a ovulação, impedindo a gravidez desejada."
    }
  },
  {
    "id": "q-uepa-2026-075",
    "code": "Q-UEPA26-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "insuficiencia-ovariana-prematura",
      "fsh-elevado",
      "amenorreia-secundaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 34 anos de idade, relatando que há cerca de 1 ano apresenta ciclos menstruais longos, que variam de 60 a 90 dias. Nega outros sintomas e não apresenta sinais clínicos de hiperandrogenismo. Método contraceptivo: laqueadura tubária há 5 anos. As dosagens hormonais apresentam-se com: Folículo estimulante acima do normal, Prolactina normal e Tireoestimulante normal. Neste contexto a principal hipótese diagnóstica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hiperandrogenismo.",
        "explanation": "Incorreta: A paciente nega sinais clínicos de hiperandrogenismo e o FSH elevado não é típico de SOP/hiperandrogenismo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Hiperprolactinemia.",
        "explanation": "Incorreta: A dosagem de prolactina está normal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Hipotireoidismo.",
        "explanation": "Incorreta: O TSH está normal, afastando hipotireoidismo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Hipertireoidismo.",
        "explanation": "Incorreta: O TSH está normal, afastando hipertireoidismo.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Falência ovariana precoce.",
        "explanation": "A alternativa **E** está correta. Mulher **com menos de 40 anos** (34 anos) apresentando oligo/amenorreia há cerca de 1 ano com **FSH elevado** (hipogonadismo hipergonadotrófico), prolactina normal e TSH normal caracteriza **Insuficiência Ovariana Prematura (IOP)** — tradicionalmente chamada **Falência Ovariana Precoce** (FEBRASGO / ESHRE; diagnóstico confirmado com duas dosagens de FSH > 25 UI/L com intervalo ≥ 4 semanas).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Mulher **com menos de 40 anos** (34 anos) apresentando oligo/amenorreia há cerca de 1 ano com **FSH elevado** (hipogonadismo hipergonadotrófico), prolactina normal e TSH normal caracteriza **Insuficiência Ovariana Prematura (IOP)** — tradicionalmente chamada **Falência Ovariana Precoce** (FEBRASGO / ESHRE; diagnóstico confirmado com duas dosagens de FSH > 25 UI/L com intervalo ≥ 4 semanas).\n- **A) Incorreta:** A paciente nega sinais clínicos de hiperandrogenismo e o FSH elevado não é típico de SOP/hiperandrogenismo.\n- **B) Incorreta:** A dosagem de prolactina está normal.\n- **C) Incorreta:** O TSH está normal, afastando hipotireoidismo.\n- **D) Incorreta:** O TSH está normal, afastando hipertireoidismo.",
    "perolaClinica": "A alternativa **E** está correta. Mulher **com menos de 40 anos** (34 anos) apresentando oligo/amenorreia há cerca de 1 ano com **FSH elevado** (hipogonadismo hipergonadotrófico), prolactina normal e TSH normal caracteriza **Insuficiência Ovariana Prematura…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de insuficiência ovariana prematura diante de oligomenorreia e FSH elevado antes dos 40 anos.",
      "raciocinioChave": "Mulher com menos de 40 anos (34 anos) apresentando ciclos esparsos (60 a 90 dias) há 1 ano e FSH elevado, com prolactina e TSH normais, configura hipogonadismo hipergonadotrófico. Esse perfil laboratorial e etário estabelece como principal hipótese a falência ovariana precoce (insuficiência ovariana prematura).",
      "armadilhaBanca": "Deixar de reconhecer o padrão de hipogonadismo hipergonadotrófico (FSH elevado) em mulher abaixo de 40 anos como falência ovariana precoce."
    },
    "mapaDistratores": {
      "A": "Não há sinais clínicos de hiperandrogenismo no exame físico, e o FSH elevado afasta o perfil típico da síndrome dos ovários policísticos.",
      "B": "A dosagem sérica de prolactina encontra-se normal, descartando hiperprolactinemia como causa dos ciclos longos.",
      "C": "O hormônio tireoestimulante (TSH) está normal, o que exclui hipotireoidismo como etiologia da disfunção menstrual.",
      "D": "O TSH normal também afasta hipertireoidismo no diagnóstico diferencial da oligomenorreia."
    }
  },
  {
    "id": "q-uepa-2026-076",
    "code": "Q-UEPA26-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": [
      "bacteriuria-assintomatica",
      "imunoglobulina-anti-d",
      "pre-natal",
      "aloimunizacao-rh"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, com 24 semanas de idade gestacional, assintomática, comparece a consulta com os seguintes exames: 1- cultura de urina mostrando duas amostras consecutivas com isolamento Escherichia coli com 100.000 unidades formadoras de colônias (UFCs) por ml de urina; 2- Tipagem sanguínea AB Rh-negativa; 3- Coombs indireto negativo. O adequado cuidado pré-natal diante destes exames deve conter:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Antibioticoterapia por 7 dias e Imunoglobulina anti-D entre 28 e 34 semanas de gestação.",
        "explanation": "A alternativa **A** está correta. Pelo protocolo de pré-natal do **Ministério da Saúde** e da **FEBRASGO**:",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Repetir urocultura para decidir sobre antibioticoterapia e a Imunoglobulina anti-D deverá ser realizada somente após o parto.",
        "explanation": "Incorreta: Não se deve atrasar o tratamento da bacteriúria assintomática já confirmada, e a profilaxia anti-D também é feita no pré-natal (28 semanas).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Repetir urocultura para decidir sobre antibioticoterapia e administrar Imunoglobulina anti-D entre 28 e 34 semanas de gestação.",
        "explanation": "Incorreta: Duas uroculturas consecutivas com $10^5\\text{ UFC/mL}$ de *E. coli* já fecham diagnóstico — não se repete antes de tratar.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Antibioticoterapia por 7 dias e solicitação de coombs direto materno para decidir sobre Imunoglobulina anti-D.",
        "explanation": "Incorreta: O exame para rastrear aloimunização materna é o **Coombs indireto** (pesquisa de anticorpos irregulares no soro materno), não o Coombs direto.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Somente Antibioticoterapia por 14 dias.",
        "explanation": "Incorreta: Tempo excessivo para bacteriúria assintomática e omite a profilaxia anti-D.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Pelo protocolo de pré-natal do **Ministério da Saúde** e da **FEBRASGO**:\n1. **Bacteriúria assintomática na gestação** ($\\ge 10^5\\text{ UFC/mL}$ na urocultura) **sempre deve ser tratada** com antibioticoterapia oral por 5–7 dias (guiada pelo antibiograma) para prevenir pielonefrite aguda e parto prematuro.\n2. Em gestante **Rh-negativa com Coombs indireto negativo** (não sensibilizada), está indicada a **profilaxia antenatal com imunoglobulina anti-D** entre **28 e 34 semanas** (classicamante com 28 semanas), repetindo-a em até 72h pós-parto caso o RN seja Rh-positivo.\n- **B) Incorreta:** Não se deve atrasar o tratamento da bacteriúria assintomática já confirmada, e a profilaxia anti-D também é feita no pré-natal (28 semanas).\n- **C) Incorreta:** Duas uroculturas consecutivas com $10^5\\text{ UFC/mL}$ de *E. coli* já fecham diagnóstico — não se repete antes de tratar.\n- **D) Incorreta:** O exame para rastrear aloimunização materna é o **Coombs indireto** (pesquisa de anticorpos irregulares no soro materno), não o Coombs direto.\n- **E) Incorreta:** Tempo excessivo para bacteriúria assintomática e omite a profilaxia anti-D.",
    "perolaClinica": "A alternativa **A** está correta. Pelo protocolo de pré-natal do **Ministério da Saúde** e da",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo pré-natal da bacteriúria assintomática confirmada e profilaxia anti-D em gestante Rh-negativa não sensibilizada.",
      "raciocinioChave": "Duas uroculturas consecutivas com >= 100.000 UFC/mL de E. coli confirmam bacteriúria assintomática na gestação, exigindo antibioticoterapia imediata por 5–7 dias pelo risco de pielonefrite e prematuridade. Além disso, gestante Rh-negativa com Coombs indireto negativo deve receber imunoglobulina anti-D profilática entre 28 e 34 semanas.",
      "armadilhaBanca": "Mandar repetir urocultura após duas amostras positivas ou restringir a imunoglobulina anti-D apenas ao pós-parto / pedir Coombs direto materno."
    },
    "mapaDistratores": {
      "B": "Não se deve repetir urocultura nem postergar o tratamento diante de duas amostras já positivas, e a profilaxia anti-D é obrigatória já no pré-natal (28–34 semanas).",
      "C": "Duas uroculturas consecutivas com 100.000 UFC/mL já confirmam bacteriúria assintomática, sendo incorreto repetir o exame antes de iniciar o antibiótico.",
      "D": "O acompanhamento de aloimunização materna na gestação utiliza o teste de Coombs indireto (pesquisa de anticorpos irregulares no soro materno), e não o Coombs direto.",
      "E": "Um esquema de 14 dias excede o tempo padrão de 5–7 dias para bacteriúria assintomática e a opção omite a profilaxia indispensável com imunoglobulina anti-D."
    }
  },
  {
    "id": "q-uepa-2026-077",
    "code": "Q-UEPA26-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Abortamento e Incompetência Istmocervical",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-abortamento-e-incompetencia-istmocervical",
    "tags": [
      "ameaca-de-abortamento",
      "colo-impervio",
      "bcf-presente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Tercigesta, 32 anos de idade, 2 filhos vivos, com gestação planejada e 10 semanas de amenorréia. Relata dor leve tipo cólica em hipogástrio e 1 episódio de pequeno sangramento vaginal há cerca de 12 horas. Exame físico: febril, eupineica, acianótica; ausência de sangramento vaginal no momento da consulta; colo uterino impérvio. Ultrassonografia transvaginal evidencia saco gestacional regular e batimentos cardíacos fetais presentes. Diante deste quadro a melhor conduta dentre as opções abaixo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "antibioticoterapia e histerectomia.",
        "explanation": "Incorreta: Histerectomia é absolutamente descabida em gestação viável com ameaça de abortamento.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "antibioticoterapia seguida de aspiração manual intra-uterina.",
        "explanation": "Incorreta: AMIU é método de esvaziamento uterino para abortamento inevitável/incompleto/retido, sendo contraindicada com embrião vivo.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "curetagem uterina com alta após 24 horas.",
        "explanation": "Incorreta: Curetagem uterina interromperia uma gestação viável.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "acolhimento suporte emocional e acompanhamento com controle ultrassonográfico.",
        "explanation": "A alternativa **D** está correta. Gestação de 10 semanas com pequeno sangramento vaginal, cólica leve, **colo uterino impérvio** e **ultrassonografia demonstrando saco gestacional regular com embrião vivo (BCF presentes)** configura **ameaça de abortamento** (observação: \"febril\" no texto original provavelmente é erro de grafia para \"afebril\", já que todas as demais características confirmam ameaça de abortamento em gestação viável). Segundo a **FEBRASGO** e o **Ministério da Saúde**, a conduta é **expectante**, com acolhimento, orientações de sinais de alarme, suporte emocional e seguimento pré-natal/ultrassonográfico.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "iniciar misoprostol.",
        "explanation": "Incorreta: Misoprostol é abortivo/uterotônico, contraindicado em gestação viável.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Gestação de 10 semanas com pequeno sangramento vaginal, cólica leve, **colo uterino impérvio** e **ultrassonografia demonstrando saco gestacional regular com embrião vivo (BCF presentes)** configura **ameaça de abortamento** (observação: \"febril\" no texto original provavelmente é erro de grafia para \"afebril\", já que todas as demais características confirmam ameaça de abortamento em gestação viável). Segundo a **FEBRASGO** e o **Ministério da Saúde**, a conduta é **expectante**, com acolhimento, orientações de sinais de alarme, suporte emocional e seguimento pré-natal/ultrassonográfico.\n- **A) Incorreta:** Histerectomia é absolutamente descabida em gestação viável com ameaça de abortamento.\n- **B) Incorreta:** AMIU é método de esvaziamento uterino para abortamento inevitável/incompleto/retido, sendo contraindicada com embrião vivo.\n- **C) Incorreta:** Curetagem uterina interromperia uma gestação viável.\n- **E) Incorreta:** Misoprostol é abortivo/uterotônico, contraindicado em gestação viável.",
    "perolaClinica": "A alternativa **D** está correta. Gestação de 10 semanas com pequeno sangramento vaginal, cólica leve, **colo uterino impérvio** e **ultrassonografia demonstrando saco gestacional regular com embrião vivo (BCF presentes)** configura **ameaça de abortamento**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora na ameaça de abortamento em gestação tópica com embrião vivo.",
      "raciocinioChave": "Sangramento discreto com cólica leve, colo uterino impérvio e USG confirmando embrião com BCF caracterizam ameaça de abortamento em gestação viável. A conduta padrão é expectante, com acolhimento, suporte emocional e seguimento ultrassonográfico.",
      "armadilhaBanca": "O termo 'febril' no enunciado (provável erro gráfico para 'afebril') pode induzir a pensar em abortamento infectado, levando a esvaziamento uterino e antibioticoterapia desnecessários."
    },
    "mapaDistratores": {
      "A": "A histerectomia é medida mutiladora e absolutamente contraindicada em gestação viável com ameaça de abortamento sem foco infeccioso ou hemorragia incontrolável.",
      "B": "A aspiração manual intrauterina (AMIU) é indicada para esvaziamento em abortamento inevitável, incompleto ou retido, sendo proscrita quando há embrião vivo.",
      "C": "A curetagem uterina interromperia uma gestação viável com batimentos cardíacos fetais presentes e colo fechado.",
      "E": "O misoprostol é uterotônico abortivo contraindicado em gestações em curso com embrião viável."
    }
  },
  {
    "id": "q-uepa-2026-078",
    "code": "Q-UEPA26-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Infecções Congênitas na Gestação",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-infeccoes-congenitas-na-gestacao",
    "tags": [
      "toxoplasmose-na-gestacao",
      "avidez-igg",
      "alta-avidez",
      "pre-natal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante com 08 semanas de idade gestacional, comparece à consulta com os seguintes resultados de exame: 1- Sorologia para toxoplasmose IgM positiva e IgG positiva; 2- Teste de avidez para toxoplasmose com alta avidez. Diante destes exames a conduta inicial adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "tratar com espiramicina até o fim da gestação.",
        "explanation": "Incorreta: Espiramicina seria indicada em infecção aguda (< 16 semanas) com **baixa avidez** (ou IgM+/IgG–).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "tratar com sulfadiazina, pirimetamina, sulfadiazina e ácido folínico até o fim da gestação.",
        "explanation": "Incorreta: Esquema tríplice (sulfadiazina + pirimetamina + ácido folínico) é reservado a infecção fetal confirmada ou infecção materna após 16 semanas (além de pirimetamina ser teratogênica no 1º trimestre).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "iniciar sulfadiazina, pirimetamina, sulfadiazina e ácido folínico e solicitar amniocentese para pesquisa de toxoplasma no líquido amniótico.",
        "explanation": "Incorreta: Não há indicação de esquema tríplice nem amniocentese com alta avidez às 8 semanas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "realizar amniocentese para pesquisa de toxoplasma no líquido amniótico e decidir sobre tratamento após resultado de exame.",
        "explanation": "Incorreta: Amniocentese (feita apenas a partir de 18 semanas) é desnecessária quando a infecção é comprovadamente pré-concepcional.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "explicar para a paciente que não há necessidade de tratamento pois a infecção é antiga e a paciente é imune.",
        "explanation": "A alternativa **E** está correta. Em gestante com **idade gestacional < 16 semanas** (aqui 8 semanas) que apresenta sorologia para toxoplasmose **IgG+ e IgM+**, o **teste de avidez de IgG com ALTA avidez (> 60%)** indica que a infecção primária ocorreu há **mais de 3 a 4 meses** — ou seja, **antes da concepção** (IgM residual). Conforme o protocolo do **Ministério da Saúde (2022)** e da **FEBRASGO**, a paciente é **imune**, não há risco de transmissão vertical da infecção aguda atual e **não há necessidade de tratamento nem de amniocentese**.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **E** está correta. Em gestante com **idade gestacional < 16 semanas** (aqui 8 semanas) que apresenta sorologia para toxoplasmose **IgG+ e IgM+**, o **teste de avidez de IgG com ALTA avidez (> 60%)** indica que a infecção primária ocorreu há **mais de 3 a 4 meses** — ou seja, **antes da concepção** (IgM residual). Conforme o protocolo do **Ministério da Saúde (2022)** e da **FEBRASGO**, a paciente é **imune**, não há risco de transmissão vertical da infecção aguda atual e **não há necessidade de tratamento nem de amniocentese**.\n- **A) Incorreta:** Espiramicina seria indicada em infecção aguda (< 16 semanas) com **baixa avidez** (ou IgM+/IgG–).\n- **B) Incorreta:** Esquema tríplice (sulfadiazina + pirimetamina + ácido folínico) é reservado a infecção fetal confirmada ou infecção materna após 16 semanas (além de pirimetamina ser teratogênica no 1º trimestre).\n- **C) Incorreta:** Não há indicação de esquema tríplice nem amniocentese com alta avidez às 8 semanas.\n- **D) Incorreta:** Amniocentese (feita apenas a partir de 18 semanas) é desnecessária quando a infecção é comprovadamente pré-concepcional.",
    "perolaClinica": "A alternativa **E** está correta. Em gestante com **idade gestacional < 16 semanas** (aqui 8 semanas) que apresenta sorologia para toxoplasmose **IgG+ e IgM+**, o **teste de avidez de IgG com ALTA avidez (> 60%)** indica que a infecção primária ocorreu há…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Interpretação do teste de avidez de IgG para toxoplasmose no primeiro trimestre gestacional.",
      "raciocinioChave": "Com 8 semanas de gestação, IgG e IgM positivas associadas a alta avidez indicam que a infecção primária ocorreu há mais de 3 a 4 meses, portanto antes da concepção. A gestante é considerada imune, sem risco de transmissão vertical nem necessidade de tratamento.",
      "armadilhaBanca": "Confundir a positividade persistente de IgM residual com infecção aguda materna e iniciar espiramicina, esquema tríplice ou amniocentese sem valorizar a alta avidez precoce."
    },
    "mapaDistratores": {
      "A": "A espiramicina é indicada apenas na infecção materna aguda confirmada ou suspeita antes de 16 semanas (baixa avidez ou IgM+/IgG-), não na infecção pré-concepcional.",
      "B": "O esquema tríplice (sulfadiazina, pirimetamina e ácido folínico) reserva-se à infecção fetal confirmada ou soroconversão após 16 semanas, além da teratogenicidade da pirimetamina no 1º trimestre.",
      "C": "Não há indicação de esquema tríplice nem de amniocentese diante de infecção comprovadamente anterior à gestação pela alta avidez às 8 semanas.",
      "D": "A amniocentese (realizada apenas a partir de 18 semanas) é desnecessária quando a alta avidez precoce descarta infecção adquirida durante a gravidez."
    }
  },
  {
    "id": "q-uepa-2026-079",
    "code": "Q-UEPA26-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": [
      "cistite-na-gestacao",
      "itu-na-gestacao",
      "antibioticoterapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, com 25 semanas de idade gestacional, queixando-se de dor suprapúbica, disúria, polaciúria e urgência miccional. Exame físico: colo e vagina sem lesões, muco cervical cristalino, conteúdo vaginal fisiológico; Giordano negativo bilateralmente. Paciente nega episódios anteriores deste mesmo quadro clínico. Neste contexto, logo após coletar urocultura, a conduta mais adequada dentre as opções abaixo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "tratar após resultado de urocultura, conforme sensibilidade aos antibióticos testados.",
        "explanation": "Incorreta: Na cistite sintomática da gestante, o tratamento empírico inicia-se **imediatamente** após a coleta da urocultura para evitar progressão para pielonefrite.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "antibioticoterapia oral ambulatorial sem necessidade de profilaxia com antibiótico após tratamento.",
        "explanation": "A alternativa **B** está correta. O quadro caracteriza **cistite aguda não complicada na gestação** (sintomas urinários baixos, sem febre e com Giordano negativo bilateralmente), sendo o **primeiro episódio**. Segundo a **FEBRASGO** e o **Ministério da Saúde**, após coletar urocultura, deve-se **iniciar imediatamente antibioticoterapia oral empírica ambulatorial** (ex.: fosfomicina, nitrofurantoína ou cefalexina, ajustando se necessário pelo antibiograma), **sem indicação de antibioticoprofilaxia** após um primeiro episódio isolado de cistite (profilaxia reserva-se a ≥ 2 episódios de ITU na gestação ou após pielonefrite).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "antibioticoterapia intravenosa em ambiente hospitalar sem necessidade de profilaxia com antibiótico após tratamento.",
        "explanation": "Incorreta: Internação e antibiótico IV são indicados para **pielonefrite aguda** na gestação, não para cistite simples.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "antibioticoterapia oral ambulatorial, iniciando profilaxia com antibiótico após tratamento.",
        "explanation": "Incorreta: Não se indica profilaxia contínua após o primeiro episódio isolado de cistite.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "antibioticoterapia intravenosa em ambiente hospitalar, iniciando profilaxia com antibiótico após tratamento.",
        "explanation": "Incorreta: Nem internação/IV nem profilaxia estão indicadas nesse cenário.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O quadro caracteriza **cistite aguda não complicada na gestação** (sintomas urinários baixos, sem febre e com Giordano negativo bilateralmente), sendo o **primeiro episódio**. Segundo a **FEBRASGO** e o **Ministério da Saúde**, após coletar urocultura, deve-se **iniciar imediatamente antibioticoterapia oral empírica ambulatorial** (ex.: fosfomicina, nitrofurantoína ou cefalexina, ajustando se necessário pelo antibiograma), **sem indicação de antibioticoprofilaxia** após um primeiro episódio isolado de cistite (profilaxia reserva-se a ≥ 2 episódios de ITU na gestação ou após pielonefrite).\n- **A) Incorreta:** Na cistite sintomática da gestante, o tratamento empírico inicia-se **imediatamente** após a coleta da urocultura para evitar progressão para pielonefrite.\n- **C) Incorreta:** Internação e antibiótico IV são indicados para **pielonefrite aguda** na gestação, não para cistite simples.\n- **D) Incorreta:** Não se indica profilaxia contínua após o primeiro episódio isolado de cistite.\n- **E) Incorreta:** Nem internação/IV nem profilaxia estão indicadas nesse cenário.",
    "perolaClinica": "A alternativa **B** está correta. O quadro caracteriza **cistite aguda não complicada na gestação** (sintomas urinários baixos, sem febre e com Giordano negativo bilateralmente), sendo o **primeiro episódio**. Segundo a **FEBRASGO** e o **Ministério da…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Manejo empírico ambulatorial do primeiro episódio de cistite aguda na gestação.",
      "raciocinioChave": "Sintomas urinários baixos sem febre e com Giordano negativo configuram cistite aguda não complicada na gestação. Após coleta de urocultura, inicia-se imediatamente antibioticoterapia oral ambulatorial, sem necessidade de profilaxia contínua por ser o primeiro episódio.",
      "armadilhaBanca": "Aguardar o resultado da urocultura para tratar ou confundir primeiro episódio de cistite com indicação de internação IV ou profilaxia antibiótica contínua."
    },
    "mapaDistratores": {
      "A": "Aguardar o antibiograma sem iniciar tratamento empírico imediato expõe a gestante ao risco de ascensão bacteriana e evolução para pielonefrite aguda.",
      "C": "Internação hospitalar e antibioticoterapia intravenosa são indicadas na pielonefrite aguda gestacional, não na cistite não complicada.",
      "D": "A profilaxia antibiótica contínua na gestação reserva-se a ITU de repetição (≥ 2 episódios) ou após pielonefrite, não ao primeiro episódio isolado de cistite.",
      "E": "Não há indicação de tratamento hospitalar intravenoso nem de quimioprofilaxia posterior em um primeiro episódio de cistite simples sem sinais sistêmicos."
    }
  },
  {
    "id": "q-uepa-2026-080",
    "code": "Q-UEPA26-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Infecção Puerperal e Mastite",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-infeccao-puerperal-e-mastite",
    "tags": [
      "endometrite-puerperal",
      "infeccao-puerperal",
      "loquiacao-purulenta"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Puérpera, com 6 dias após parto normal, queixando-se de febre, dor suprapúbica e sangramento vaginal com odor fétido. Nega outras queixas. Exame físico: loquiação purulenta com odor fétido; colo uterino pérvio para 1 cm, útero amolecido; mamas túrgidas, sem flogose e indolores; Giordano negativo bilateralmente, frequência cardíaca= 107 bpm; temperatura axilar= 38,5°C. Com base nos sinais e sintomas descritos a principal hipótese diagnóstica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Mastite puerperal.",
        "explanation": "Incorreta: As mamas estão túrgidas (apojadura fisiológica), porém indolores e sem flogose, afastando mastite.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Puerpério fisiológico.",
        "explanation": "Incorreta: Febre de 38,5 °C e loquiação purulenta fétida são patológicos, nunca fisiológicos.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Endometrite puerperal.",
        "explanation": "A alternativa **C** está correta. A presença da **tríade de Bumm** — **útero subinvoluído/amolecido, doloroso à palpação e colo uterino pérvio com loquiação purulenta de odor fétido** — associada a **febre (38,5 °C)** e taquicardia no 6º dia pós-parto define **endometrite puerperal** (infecção polimicrobiana ascendente tratada classicamente com clindamicina + gentamicina IV), conforme **FEBRASGO** e **Zugaib**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Cistite no puerpério.",
        "explanation": "Incorreta: Não há sintomas urinários baixos e a cistite não justifica febre alta nem loquiação purulenta fétida.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Pielonefrite no puerpério.",
        "explanation": "Incorreta: Giordano negativo bilateralmente e exame ginecológico claramente alterado apontam para foco uterino, não renal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. A presença da **tríade de Bumm** — **útero subinvoluído/amolecido, doloroso à palpação e colo uterino pérvio com loquiação purulenta de odor fétido** — associada a **febre (38,5 °C)** e taquicardia no 6º dia pós-parto define **endometrite puerperal** (infecção polimicrobiana ascendente tratada classicamente com clindamicina + gentamicina IV), conforme **FEBRASGO** e **Zugaib**.\n- **A) Incorreta:** As mamas estão túrgidas (apojadura fisiológica), porém indolores e sem flogose, afastando mastite.\n- **B) Incorreta:** Febre de 38,5 °C e loquiação purulenta fétida são patológicos, nunca fisiológicos.\n- **D) Incorreta:** Não há sintomas urinários baixos e a cistite não justifica febre alta nem loquiação purulenta fétida.\n- **E) Incorreta:** Giordano negativo bilateralmente e exame ginecológico claramente alterado apontam para foco uterino, não renal.",
    "perolaClinica": "A alternativa **C** está correta. A presença da **tríade de Bumm** — **útero subinvoluído/amolecido, doloroso à palpação e colo uterino pérvio com loquiação purulenta de odor fétido** — associada a **febre (38,5 °C)** e taquicardia no 6º dia pós-parto define…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico da endometrite puerperal pela tríade de Bumm.",
      "raciocinioChave": "Febre puerperal no 6º dia pós-parto associada a útero amolecido, colo pérvio e loquiação purulenta com odor fétido preenche a tríade de Bumm. Esses achados, com mamas sem flogose e Giordano negativo, confirmam endometrite puerperal.",
      "armadilhaBanca": "Confundir mamas túrgidas da apojadura fisiológica com mastite puerperal ou atribuir a febre à via urinária ignorando a loquiação fétida e a subinvolução uterina."
    },
    "mapaDistratores": {
      "A": "As mamas apresentam apenas turgidez fisiológica da lactação, sem hiperemia, calor ou dor localizada, afastando mastite puerperal.",
      "B": "Febre de 38,5 °C, taquicardia e loquiação purulenta com odor fétido são achados infecciosos patológicos incompatíveis com puerpério fisiológico.",
      "D": "A ausência de disúria ou polaciúria e a presença de útero amolecido com secreção purulenta fétida direcionam para foco uterino, não cistite.",
      "E": "O sinal de Giordano negativo bilateralmente aliado às alterações francas do exame pélvico afasta pielonefrite como hipótese principal."
    }
  },
  {
    "id": "q-uepa-2026-081",
    "code": "Q-UEPA26-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "pni",
      "vacina-covid-19",
      "lactente",
      "calendario-vacinal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Dona Rosa leva seu primogênito de 8 meses de idade, hígido, para consulta de rotina com o pediatra. Ao checar a caderneta da criança, o médico constata que o bebê não recebeu nenhuma dose da vacina contra o vírus SARS-CoV-2. Nesse contexto é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a criança perdeu a oportunidade da imunização contra formas graves da COVID-19, não sendo possível iniciar o esquema vacinal na idade atual.",
        "explanation": "Incorreta: A criança pode e deve iniciar o esquema vacinal em qualquer idade entre 6 meses e < 5 anos (não há perda de oportunidade).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "nesta idade o bebê já deveria ter recebido uma dose da vacina contra a COVID-19, devendo iniciar o mais breve possível.",
        "explanation": "Incorreta: Aos 8 meses já passaram os marcos de 6 meses (D1) e 7 meses (D2), ou seja, duas doses.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o bebê deve iniciar o esquema com a vacina contra a COVD-19 na idade atual, até completar as 4 doses previstas.",
        "explanation": "Incorreta: O esquema primário infantil no PNI prevê 2 doses (Moderna) ou 3 doses (Pfizer), não 4 doses.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "nesta idade o bebê já deveria ter recebido duas doses da vacina contra a COVID-19, devendo iniciar o mais breve possível.",
        "explanation": "A alternativa **D** está correta. Pelo **Calendário Nacional de Vacinação do PNI (Ministério da Saúde, 2024–2025)**, a vacinação contra a **COVID-19** para crianças de 6 meses a menores de 5 anos inicia-se aos **6 meses de idade** (1ª dose), com a **2ª dose aos 7 meses** (intervalo de 4 semanas) — e 3ª dose aos 9 meses no esquema de 3 doses da vacina Pfizer pediátrica (ou esquema de 2 doses com Spikevax/Moderna). Portanto, aos **8 meses**, o lactente **já deveria ter recebido duas doses** (6 e 7 meses), devendo iniciar o esquema o mais breve possível.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "caso o bebê não tenha contraindicação, deve iniciar o esquema vacinal com doses anuais.",
        "explanation": "Incorreta: O esquema primário inicial infantil não consiste em doses anuais isoladas, mas em série primária de 2 ou 3 doses com intervalos definidos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Pelo **Calendário Nacional de Vacinação do PNI (Ministério da Saúde, 2024–2025)**, a vacinação contra a **COVID-19** para crianças de 6 meses a menores de 5 anos inicia-se aos **6 meses de idade** (1ª dose), com a **2ª dose aos 7 meses** (intervalo de 4 semanas) — e 3ª dose aos 9 meses no esquema de 3 doses da vacina Pfizer pediátrica (ou esquema de 2 doses com Spikevax/Moderna). Portanto, aos **8 meses**, o lactente **já deveria ter recebido duas doses** (6 e 7 meses), devendo iniciar o esquema o mais breve possível.\n- **A) Incorreta:** A criança pode e deve iniciar o esquema vacinal em qualquer idade entre 6 meses e < 5 anos (não há perda de oportunidade).\n- **B) Incorreta:** Aos 8 meses já passaram os marcos de 6 meses (D1) e 7 meses (D2), ou seja, duas doses.\n- **C) Incorreta:** O esquema primário infantil no PNI prevê 2 doses (Moderna) ou 3 doses (Pfizer), não 4 doses.\n- **E) Incorreta:** O esquema primário inicial infantil não consiste em doses anuais isoladas, mas em série primária de 2 ou 3 doses com intervalos definidos.",
    "perolaClinica": "A alternativa **D** está correta. Pelo **Calendário Nacional de Vacinação do PNI (Ministério da Saúde, 2024–2025)**, a vacinação contra a **COVID-19** para crianças de 6 meses a menores de 5 anos inicia-se aos **6 meses de idade** (1ª dose), com a **2ª dose…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Esquema vacinal infantil contra COVID-19 no Calendário Nacional do PNI.",
      "raciocinioChave": "Pelo PNI, a vacinação contra COVID-19 para crianças de 6 meses a menores de 5 anos inicia-se aos 6 meses (D1), com segunda dose aos 7 meses. Assim, aos 8 meses o lactente já deveria ter recebido duas doses e deve iniciar o esquema o quanto antes.",
      "armadilhaBanca": "Acreditar que o atraso vacinal impede o início do esquema, errar o número de doses já devidas aos 8 meses ou confundir a série primária infantil com reforço anual."
    },
    "mapaDistratores": {
      "A": "Não houve perda de oportunidade vacinal; crianças entre 6 meses e menores de 5 anos sem esquema prévio devem iniciar a vacinação imediatamente.",
      "B": "Aos 8 meses já transcorreram as idades recomendadas para a 1ª dose (6 meses) e a 2ª dose (7 meses), totalizando duas doses em atraso.",
      "C": "O esquema primário infantil no PNI é composto por 2 doses (Moderna) ou 3 doses (Pfizer), e não por 4 doses.",
      "E": "Crianças nessa faixa etária não iniciam com doses anuais isoladas, devendo cumprir a série primária completa com os intervalos preconizados."
    }
  },
  {
    "id": "q-uepa-2026-082",
    "code": "Q-UEPA26-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Meningites e Sepse em Pediatria",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-meningites-e-sepse-em-pediatria",
    "tags": [
      "fssl",
      "febre-sem-sinais-localizatorios",
      "lactente",
      "urgencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você atende um lactente de 2 meses de idade na UPA, com história de febre iniciada há 24 horas. Segundo a mãe, apresentou temperatura axilar de 38oC, sendo medicado com dipirona gotas (1 gota por Kg de peso). Lactente ativo, reativo ao manuseio, sem alterações no exame físico completo. Assinale abaixo a alternativa que contém a conduta correta neste caso.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Liberar para casa, orientando sinais de alerta de piora, com prescrição de paracetamol gotas (1 gota por Kg) e retorno em 24 horas.",
        "explanation": "Incorreta: Liberar lactente de 2 meses com FSSL sem qualquer rastreamento laboratorial (especialmente urina/hemograma) contraria os protocolos de FSSL em < 3 meses.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Internar, coletar exames laboratoriais incluindo coleta de líquor, Rx de tórax e iniciar antibiótico empírico.",
        "explanation": "Incorreta: Internação obrigatória com punção lombar e antibiótico empírico imediato aplica-se a **neonatos (< 28–30 dias)** ou lactentes toxemiados/com exames alterados — não de rotina a lactente de 2 meses em ótimo estado geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Coletar pesquisa de vírus respiratório, hemograma e sedimento urinário, aguardando resultado ainda na unidade, e orientar a mãe sobre o uso correto de antitérmico.",
        "explanation": "A alternativa **C** está correta. Em **lactente de 2 meses (60–90 dias)** em bom estado geral (ativo, reativo, sem sinais de toxemia) com **Febre Sem Sinais Localizatórios (FSSL)**, os protocolos da **SBP** e da **AAP** preconizam investigação laboratorial inicial para estratificação de risco de infecção bacteriana grave (especialmente ITU) — incluindo **urina tipo I / sedimento urinário (e urocultura), hemograma/marcadores inflamatórios e pesquisa viral quando disponível** — aguardando os resultados na unidade antes de decidir por alta com seguimento próximo. Além disso, deve-se orientar o antitérmico correto, pois **dipirona não é recomendada em lactentes < 3 meses (ou < 5 kg)**, preferindo-se paracetamol.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Liberar para casa, manter o antitérmico utilizado e orientar sobre sinais de alerta de piora.",
        "explanation": "Incorreta: Além de não investigar FSSL em lactente de 2 meses, mantém dipirona em criança < 3 meses.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Acalmar a mãe sobre o quadro, pois trata-se de infecção benigna com exame físico normal, devendo esta retornar em 48 horas para reavaliação.",
        "explanation": "Incorreta: Não se pode presumir infecção benigna em lactente de 2 meses sem investigação mínima nem adiar reavaliação para 48h.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Em **lactente de 2 meses (60–90 dias)** em bom estado geral (ativo, reativo, sem sinais de toxemia) com **Febre Sem Sinais Localizatórios (FSSL)**, os protocolos da **SBP** e da **AAP** preconizam investigação laboratorial inicial para estratificação de risco de infecção bacteriana grave (especialmente ITU) — incluindo **urina tipo I / sedimento urinário (e urocultura), hemograma/marcadores inflamatórios e pesquisa viral quando disponível** — aguardando os resultados na unidade antes de decidir por alta com seguimento próximo. Além disso, deve-se orientar o antitérmico correto, pois **dipirona não é recomendada em lactentes < 3 meses (ou < 5 kg)**, preferindo-se paracetamol.\n- **A) Incorreta:** Liberar lactente de 2 meses com FSSL sem qualquer rastreamento laboratorial (especialmente urina/hemograma) contraria os protocolos de FSSL em < 3 meses.\n- **B) Incorreta:** Internação obrigatória com punção lombar e antibiótico empírico imediato aplica-se a **neonatos (< 28–30 dias)** ou lactentes toxemiados/com exames alterados — não de rotina a lactente de 2 meses em ótimo estado geral.\n- **D) Incorreta:** Além de não investigar FSSL em lactente de 2 meses, mantém dipirona em criança < 3 meses.\n- **E) Incorreta:** Não se pode presumir infecção benigna em lactente de 2 meses sem investigação mínima nem adiar reavaliação para 48h.",
    "perolaClinica": "A alternativa **C** está correta. Em **lactente de 2 meses (60–90 dias)** em bom estado geral (ativo, reativo, sem sinais de toxemia) com **Febre Sem Sinais Localizatórios (FSSL)**, os protocolos da **SBP** e da **AAP** preconizam investigação laboratorial…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Estratificação laboratorial da febre sem sinais localizatórios em lactente de 2 meses.",
      "raciocinioChave": "Em lactente de 2 meses em bom estado geral com febre sem sinais localizatórios, recomenda-se investigação inicial para afastar infecção bacteriana grave, especialmente ITU. Coletam-se sedimento urinário, hemograma e pesquisa viral na unidade, além de orientar o uso adequado de antitérmico.",
      "armadilhaBanca": "Tratar o lactente de 2 meses como maior de 3 meses liberando sem exames, ou aplicar conduta agressiva de neonato (< 28 dias) com líquor e antibiótico empírico de rotina apesar do ótimo estado geral."
    },
    "mapaDistratores": {
      "A": "Liberar lactente de 2 meses com FSSL sem investigação laboratorial mínima (especialmente sedimento urinário e hemograma) contraria a estratificação de risco em menores de 3 meses.",
      "B": "Internação imediata com punção liquórica e antibioticoterapia empírica rotineira aplica-se a neonatos (< 28–30 dias) ou lactentes toxemiados, não a bebê de 2 meses em ótimo estado geral.",
      "D": "Além de omitir a investigação obrigatória para FSSL aos 2 meses, mantém o uso de dipirona sem adequação segura para a faixa etária.",
      "E": "Presumir etiologia viral benigna apenas pelo exame físico normal e postergar reavaliação para 48 horas traz risco de atrasar o diagnóstico de infecção bacteriana oculta."
    }
  },
  {
    "id": "q-uepa-2026-083",
    "code": "Q-UEPA26-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Avaliação do Crescimento e Baixa Estatura",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-avaliacao-do-crescimento-e-baixa-estatura",
    "tags": [
      "dor-do-crescimento",
      "dor-recorrente-em-membros",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 5 anos de idade, é levada a emergência devido quadro de dor difusa em face anterior da tíbia e fossa poplítea de membro inferior direito, de forte intensidade, há 30 minutos. Mãe relata episódios semelhantes nos últimos 6 meses, sempre no final da tarde ou a noite, as vezes acometendo membro inferior esquerdo e membros superiores, sem outras queixas. Administra paracetamol, com melhora completa do quadro. Ao exame físico, criança ativa com fascies de dor, sem alteração na inspeção, palpação e movimentação de membros e exame físico geral sem alterações. Nesse contexto é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve ser prescrito dexametasona, pois trata-se de dor de caráter inflamatório e de forte intensidade.",
        "explanation": "Incorreta: Corticoides sistêmicos não têm indicação e podem inclusive mascarar neoplasias (como leucemia) caso houvesse dúvida diagnóstica.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "deve ser pensado em Munchalsen por procuração, visto que não há alterações que justifiquem a queixa.",
        "explanation": "Incorreta: A dor recorrente benigna é real e frequente na infância, sem relação com síndrome de Münchhausen por procuração.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o mielograma é exame complementar essencial para a investigação diagnóstica deste paciente.",
        "explanation": "Incorreta: Mielograma só se justifica diante de sinais de alerta (citopenias, hepatoesplenomegalia, dor óssea persistente/diurna, febre, perda ponderal).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a criança deve ser medicada com analgésicos e realizar exames, dentre eles o FAN, ASLO e Fator Reumatóide para afastar doenças reumatológicas.",
        "explanation": "Incorreta: Na ausência de artrite ou sinais sistêmicos, exames reumatológicos inespecíficos (FAN, FR, ASLO) não são indicados e geram falsos-positivos desnecessários.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a principal hipótese diagnóstica é dor recorrente benigna em membros, a qual melhora com massagem e aquecimento do membro.",
        "explanation": "A alternativa **E** está correta. O quadro é clássico de **dor recorrente benigna em membros** (tradicionalmente chamada \"dor do crescimento\"), conforme a **Sociedade Brasileira de Pediatria (SBP)**: ocorre em pré-escolares/escolares (3–12 anos), tem caráter intermitente, **vespertino ou noturno**, localização muscular/profunda não articular (face anterior da tíbia, panturrilha, fossa poplítea), alterna os membros, **exame físico completamente normal** e ausência de sinais de alarme (sem febre, claudicação, artrite, perda ponderal ou dor diurna persistente). O manejo baseia-se em tranquilização familiar, **massagem local, compressas mornas** e analgésico simples se necessário.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. O quadro é clássico de **dor recorrente benigna em membros** (tradicionalmente chamada \"dor do crescimento\"), conforme a **Sociedade Brasileira de Pediatria (SBP)**: ocorre em pré-escolares/escolares (3–12 anos), tem caráter intermitente, **vespertino ou noturno**, localização muscular/profunda não articular (face anterior da tíbia, panturrilha, fossa poplítea), alterna os membros, **exame físico completamente normal** e ausência de sinais de alarme (sem febre, claudicação, artrite, perda ponderal ou dor diurna persistente). O manejo baseia-se em tranquilização familiar, **massagem local, compressas mornas** e analgésico simples se necessário.\n- **A) Incorreta:** Corticoides sistêmicos não têm indicação e podem inclusive mascarar neoplasias (como leucemia) caso houvesse dúvida diagnóstica.\n- **B) Incorreta:** A dor recorrente benigna é real e frequente na infância, sem relação com síndrome de Münchhausen por procuração.\n- **C) Incorreta:** Mielograma só se justifica diante de sinais de alerta (citopenias, hepatoesplenomegalia, dor óssea persistente/diurna, febre, perda ponderal).\n- **D) Incorreta:** Na ausência de artrite ou sinais sistêmicos, exames reumatológicos inespecíficos (FAN, FR, ASLO) não são indicados e geram falsos-positivos desnecessários.",
    "perolaClinica": "A alternativa **E** está correta. O quadro é clássico de **dor recorrente benigna em membros** (tradicionalmente chamada \"dor do crescimento\"), conforme a **Sociedade Brasileira de Pediatria (SBP)**: ocorre em pré-escolares/escolares (3–12 anos), tem caráter…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico e manejo conservador da dor recorrente benigna em membros.",
      "raciocinioChave": "Dor recorrente em membros, vespertina ou noturna, não articular, com alternância de lados, boa resposta a analgésico e exame físico normal define dor recorrente benigna em membros. O manejo baseia-se em tranquilização familiar, massagem e aquecimento local.",
      "armadilhaBanca": "Valorizar a intensidade da dor como sinal de artrite inflamatória ou neoplasia hematológica, indicando corticoide, mielograma ou painel reumatológico na ausência de sinais de alerta."
    },
    "mapaDistratores": {
      "A": "Corticoides sistêmicos não têm indicação na dor recorrente benigna e podem mascarar neoplasias hematológicas caso houvesse doença orgânica subjacente.",
      "B": "A síndrome de Münchhausen por procuração não se aplica a um quadro clínico típico, prevalente e benigno como a dor do crescimento.",
      "C": "O mielograma é reservado a casos com sinais de alerta (dor diurna persistente/óssea localizada, febre, perda ponderal, citopenias ou visceromegalias), ausentes neste paciente.",
      "D": "Exames reumatológicos como FAN, FR e ASLO não devem ser solicitados sem artrite objetiva ou sintomas sistêmicos devido ao alto risco de falsos-positivos."
    }
  },
  {
    "id": "q-uepa-2026-084",
    "code": "Q-UEPA26-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Icterícia Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-ictericia-neonatal",
    "tags": [
      "ictericia-neonatal",
      "incompatibilidade-abo",
      "coombs-direto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "RN do sexo masculino, nascido a termo, com peso adequado para a idade gestacional, de parto vaginal, sem intercorrências. Apresentou icterícia no segundo dia de vida, iniciando em face e progredindo para tronco no mesmo dia. Mãe primigesta, 25 anos de idade, pré-natal completo, tipagem sanguínea (TS) O positivo. Solicitados exames para o bebê: TS A positivo, Bilirrubina total 13 mg/dL, com predomínio de fração indireta, Coombs direto positivo. O diagnóstico mais provável para o caso descrito, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Icterícia fisiológica do RN",
        "explanation": "Incorreta: A icterícia fisiológica não cursa com Coombs direto positivo nem com níveis elevados precoces (BT 13 mg/dL no 2º dia com hemólise imune).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Incompatibilidade Rh",
        "explanation": "Incorreta: Tanto a mãe quanto o RN são **Rh positivos**, afastando incompatibilidade Rh.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Incompatibilidade ABO",
        "explanation": "A alternativa **C** está correta. Recém-nascido de **mãe O positivo** e **bebê A positivo** (mesmo em primigesta, pois anticorpos anti-A/anti-B IgG podem existir naturalmente sem sensibilização prévia), evoluindo com **hiperbilirrubinemia indireta significativa precoce** (BT 13 mg/dL já no 2º dia de vida) e **teste de Coombs direto (TAD) positivo**, fecha o diagnóstico de **doença hemolítica perinatal por incompatibilidade ABO** (SBP / Ministério da Saúde).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Icterícia do aleitamento materno",
        "explanation": "Incorreta: Icterícia do aleitamento materno (baixa oferta) não causa Coombs direto positivo.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Atresia de vias biliares",
        "explanation": "Incorreta: Atresia de vias biliares manifesta-se após 2 semanas de vida com **hiperbilirrubinemia direta (colestase)**, acolia fecal e colúria.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Recém-nascido de **mãe O positivo** e **bebê A positivo** (mesmo em primigesta, pois anticorpos anti-A/anti-B IgG podem existir naturalmente sem sensibilização prévia), evoluindo com **hiperbilirrubinemia indireta significativa precoce** (BT 13 mg/dL já no 2º dia de vida) e **teste de Coombs direto (TAD) positivo**, fecha o diagnóstico de **doença hemolítica perinatal por incompatibilidade ABO** (SBP / Ministério da Saúde).\n- **A) Incorreta:** A icterícia fisiológica não cursa com Coombs direto positivo nem com níveis elevados precoces (BT 13 mg/dL no 2º dia com hemólise imune).\n- **B) Incorreta:** Tanto a mãe quanto o RN são **Rh positivos**, afastando incompatibilidade Rh.\n- **D) Incorreta:** Icterícia do aleitamento materno (baixa oferta) não causa Coombs direto positivo.\n- **E) Incorreta:** Atresia de vias biliares manifesta-se após 2 semanas de vida com **hiperbilirrubinemia direta (colestase)**, acolia fecal e colúria.",
    "perolaClinica": "A alternativa **C** está correta. Recém-nascido de **mãe O positivo** e **bebê A positivo** (mesmo em primigesta, pois anticorpos anti-A/anti-B IgG podem existir naturalmente sem sensibilização prévia), evoluindo com **hiperbilirrubinemia indireta…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de doença hemolítica perinatal por incompatibilidade ABO.",
      "raciocinioChave": "Mãe tipo O positiva e recém-nascido tipo A positivo com hiperbilirrubinemia indireta precoce e Coombs direto positivo confirmam hemólise imune por incompatibilidade ABO. Diferentemente da doença Rh, ela pode ocorrer já na primeira gestação devido à presença natural de anticorpos IgG anti-A/anti-B.",
      "armadilhaBanca": "Descartar incompatibilidade sanguínea pelo fato de a mãe ser primigesta ou por ambos serem Rh positivos, ou atribuir BT de 13 mg/dL com Coombs positivo à icterícia fisiológica."
    },
    "mapaDistratores": {
      "A": "A icterícia fisiológica nunca cursa com teste de Coombs direto positivo nem com elevação tão precoce e intensa de bilirrubina por hemólise imune.",
      "B": "Tanto a mãe quanto o recém-nascido são Rh positivos, o que exclui isoimunização pelo fator Rh.",
      "D": "A icterícia do aleitamento materno decorre de baixa ingesta láctea e aumento da circulação êntero-hepática, não apresentando Coombs direto positivo.",
      "E": "A atresia de vias biliares manifesta-se tardiamente (após 2 semanas de vida) com colestase (predomínio de bilirrubina direta), acolia fecal e colúria."
    }
  },
  {
    "id": "q-uepa-2026-085",
    "code": "Q-UEPA26-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Reanimação Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-reanimacao-neonatal",
    "tags": [
      "reanimacao-neonatal",
      "vpp",
      "sbp",
      "ar-ambiente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 30 anos de idade, gestante com 35 semanas de idade gestacional, dá entrada na urgência da maternidade em franco trabalho de parto. O recém nascido não chorou ao nascer, apresentando movimentos respiratórios irregulares e frequência cardíaca de 90 bpm. Foi colocado em fonte de calor radiante, cabeça posicionada em leve extensão e realizada secagem vigorosa. Após 30 segundos a FC permanecia de 90 bpm e respiração irregular. A próxima conduta imediata para este caso, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administrar oxigênio inalatório a 100% via cânula nasal.",
        "explanation": "Incorreta: Oxigênio inalatório a 100% não ventila o pulmão em apneia/respiração irregular e aumenta toxicidade por hiperóxia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "iniciar ventilação com pressão positiva com ar ambiente (21%).",
        "explanation": "A alternativa **B** está correta. Pelas Diretrizes de **Reanimação do Recém-Nascido ≥ 34 semanas da SBP (2022)**, após os passos iniciais (30 segundos — prover calor, posicionar via aérea, aspirar se necessário, secar), se o RN apresentar **FC < 100 bpm** (90 bpm) e/ou **respiração irregular/apneia**, a conduta imediata e mais eficaz é iniciar **Ventilação com Pressão Positiva (VPP)** nos primeiros 60 segundos (\"minuto de ouro\"), utilizando **ar ambiente ($\\text{FiO}_2$ 21%)** para RN ≥ 34 semanas (aqui 35 semanas), acoplando monitor cardíaco e oxímetro de pulso.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "iniciar massagem cardíaca com relação 3 compressões para 1 ventilação.",
        "explanation": "Incorreta: Massagem cardíaca (3:1) só é indicada se a FC permanecer **< 60 bpm após 30 segundos de VPP eficaz** (com técnica corrigida e via aérea assegurada).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "administrar adrenalina via cateter umbilical.",
        "explanation": "Incorreta: Adrenalina só é indicada se FC permanecer < 60 bpm após VPP + massagem cardíaca coordenada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "fazer novo estímulo tátil e aguardar resposta.",
        "explanation": "Incorreta: Repetir estímulo tátil atrasa a VPP e compromete o minuto de ouro.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Pelas Diretrizes de **Reanimação do Recém-Nascido ≥ 34 semanas da SBP (2022)**, após os passos iniciais (30 segundos — prover calor, posicionar via aérea, aspirar se necessário, secar), se o RN apresentar **FC < 100 bpm** (90 bpm) e/ou **respiração irregular/apneia**, a conduta imediata e mais eficaz é iniciar **Ventilação com Pressão Positiva (VPP)** nos primeiros 60 segundos (\"minuto de ouro\"), utilizando **ar ambiente ($\\text{FiO}_2$ 21%)** para RN ≥ 34 semanas (aqui 35 semanas), acoplando monitor cardíaco e oxímetro de pulso.\n- **A) Incorreta:** Oxigênio inalatório a 100% não ventila o pulmão em apneia/respiração irregular e aumenta toxicidade por hiperóxia.\n- **C) Incorreta:** Massagem cardíaca (3:1) só é indicada se a FC permanecer **< 60 bpm após 30 segundos de VPP eficaz** (com técnica corrigida e via aérea assegurada).\n- **D) Incorreta:** Adrenalina só é indicada se FC permanecer < 60 bpm após VPP + massagem cardíaca coordenada.\n- **E) Incorreta:** Repetir estímulo tátil atrasa a VPP e compromete o minuto de ouro.",
    "perolaClinica": "A alternativa **B** está correta. Pelas Diretrizes de **Reanimação do Recém-Nascido ≥ 34 semanas da SBP (2022)**, após os passos iniciais (30 segundos — prover calor, posicionar via aérea, aspirar se necessário, secar), se o RN apresentar **FC < 100 bpm** (90…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Indicação imediata de VPP em ar ambiente na reanimação neonatal ≥ 34 semanas.",
      "raciocinioChave": "Após os passos iniciais de reanimação em RN ≥ 34 semanas, a persistência de FC < 100 bpm (90 bpm) e respiração irregular indica início imediato de ventilação com pressão positiva (VPP). A VPP deve ser iniciada com ar ambiente (FiO2 21%), respeitando o minuto de ouro.",
      "armadilhaBanca": "Indicar oxigênio inalatório a 100% em bebê com respiração irregular ou avançar precocemente para massagem cardíaca (indicada apenas se FC < 60 bpm após VPP eficaz)."
    },
    "mapaDistratores": {
      "A": "O oxigênio inalatório não garante expansão pulmonar diante de respiração irregular ou apneia, e a FiO2 a 100% aumenta o risco de hiperóxia em RN ≥ 34 semanas.",
      "C": "A massagem cardíaca (3:1) só é iniciada se a FC permanecer abaixo de 60 bpm após 30 segundos de VPP com técnica adequada.",
      "D": "A adrenalina é indicada apenas após falha de VPP eficaz associada à massagem cardíaca coordenada, com FC persistente < 60 bpm.",
      "E": "Repetir estímulo tátil após os passos iniciais atrasa a VPP efetiva e compromete o manejo no minuto de ouro."
    }
  },
  {
    "id": "q-uepa-2026-086",
    "code": "Q-UEPA26-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "tea",
      "autismo",
      "intervencao-precoce",
      "dnpm"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante uma consulta de rotina, a mãe de uma criança de 2 anos de idade relata que ela ainda não fala, evita contato visual e não atende quando chamada pelo nome. Ao brincar, o filho não socializa e organiza os brinquedos de forma repetitiva. A mãe trabalha em período integral e a criança fica com a babá durante o dia. Nesse contexto, a conduta mais adequada, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aguardar até os 3 anos de idade, pois para a idade atual não há sinais de alerta.",
        "explanation": "Incorreta: Há sinais inequívocos de alerta aos 2 anos; conduta expectante desperdiça janela crítica de neuroplasticidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "solicitar ressonância nuclear magnética de crânio.",
        "explanation": "Incorreta: Neuroimagem (RNM) não faz diagnóstico de TEA e não é indicada rotineiramente na ausência de achados neurológicos focais, regressão atípica ou macro/microcefalia sindrômica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "encaminhar para avaliação multidisciplinar e intervenção precoce.",
        "explanation": "A alternativa **C** está correta. A criança de 2 anos apresenta múltiplos **sinais precoces clássicos de alerta para Transtorno do Espectro Autista (TEA)** — atraso de linguagem expressiva, evitação de contato visual, não responder ao chamado pelo nome, déficit de interação social e padrões restritos/repetitivos (alinhar/organizar brinquedos). Segundo a **SBP** e a **Lei nº 13.438/2017** (rastreamento com M-CHAT-R/F), diante da suspeita de TEA, deve-se **encaminhar imediatamente para avaliação multidisciplinar e intervenção precoce** (aproveitando a máxima neuroplasticidade cerebral), sem aguardar diagnóstico definitivo fechado.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "iniciar medicação para reduzir comportamentos repetitivos.",
        "explanation": "Incorreta: Não há medicação indicada para os sintomas nucleares do TEA (e antipsicóticos não são terapia inicial aos 2 anos).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "orientar sobre estimulação domiciliar e reavaliar após 6 meses.",
        "explanation": "Incorreta: Apenas orientar estimulação domiciliar e postergar por 6 meses atrasa indevidamente a intervenção especializada.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. A criança de 2 anos apresenta múltiplos **sinais precoces clássicos de alerta para Transtorno do Espectro Autista (TEA)** — atraso de linguagem expressiva, evitação de contato visual, não responder ao chamado pelo nome, déficit de interação social e padrões restritos/repetitivos (alinhar/organizar brinquedos). Segundo a **SBP** e a **Lei nº 13.438/2017** (rastreamento com M-CHAT-R/F), diante da suspeita de TEA, deve-se **encaminhar imediatamente para avaliação multidisciplinar e intervenção precoce** (aproveitando a máxima neuroplasticidade cerebral), sem aguardar diagnóstico definitivo fechado.\n- **A) Incorreta:** Há sinais inequívocos de alerta aos 2 anos; conduta expectante desperdiça janela crítica de neuroplasticidade.\n- **B) Incorreta:** Neuroimagem (RNM) não faz diagnóstico de TEA e não é indicada rotineiramente na ausência de achados neurológicos focais, regressão atípica ou macro/microcefalia sindrômica.\n- **D) Incorreta:** Não há medicação indicada para os sintomas nucleares do TEA (e antipsicóticos não são terapia inicial aos 2 anos).\n- **E) Incorreta:** Apenas orientar estimulação domiciliar e postergar por 6 meses atrasa indevidamente a intervenção especializada.",
    "perolaClinica": "A alternativa **C** está correta. A criança de 2 anos apresenta múltiplos **sinais precoces clássicos de alerta para Transtorno do Espectro Autista (TEA)** — atraso de linguagem expressiva, evitação de contato visual, não responder ao chamado pelo nome,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Conduta diante de sinais precoces de Transtorno do Espectro Autista (TEA).",
      "raciocinioChave": "Ausência de fala, evitação de contato visual, não resposta ao nome, déficit de interação social e comportamento repetitivo aos 2 anos configuram sinais clássicos de alerta para TEA. Deve-se encaminhar prontamente para avaliação multidisciplinar e intervenção precoce.",
      "armadilhaBanca": "Atribuir o atraso à rotina com a babá ou adotar conduta expectante até os 3 anos, perdendo a janela crítica de intervenção precoce no neurodesenvolvimento."
    },
    "mapaDistratores": {
      "A": "Há múltiplos sinais inequívocos de alerta aos 2 anos, e aguardar até os 3 anos retarda o diagnóstico e reduz o potencial de resposta terapêutica.",
      "B": "A ressonância magnética de crânio não estabelece diagnóstico de TEA e não é indicada rotineiramente sem déficit neurológico focal, regressão atípica ou dismorfismos.",
      "D": "Não há fármacos indicados para os sintomas nucleares do TEA, e antipsicóticos não constituem terapia inicial aos 2 anos de idade.",
      "E": "Apenas orientar estimulação domiciliar e postergar reavaliação por 6 meses atrasa injustificadamente o início da terapia especializada multidisciplinar."
    }
  },
  {
    "id": "q-uepa-2026-087",
    "code": "Q-UEPA26-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Vacinas Especiais - CRIE e Eventos Adversos",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-vacinas-especiais-crie-e-eventos-adversos",
    "tags": [
      "erros-inatos-da-imunidade",
      "imunodeficiencia-primaria",
      "abscessos-de-repeticao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "João, 6 anos de idade, foi a sua primeira consulta com o novo pediatra. Na anamnese, tinha como queixa principal prurido nasal com espirros principalmente pela manhã. Em seus antecedentes, cerca de 3-4 resfriados por ano, uma internação anterior devida diarreia aguda controlada 72 horas após a admissão, uma internação para tratar pneumonia bacteriana aos 4 anos (tratou em enfermaria, sem intercorrências, recebendo alta em 7 dias). Durante o exame físico, o pediatra observa diversas cicatrizes em região glútea e em coxas, as quais a mãe diz serem resultado de abscessos de repetição. Dentre os dados coletados nesta consulta, o que justifica uma investigação para erros inatos da imunidade, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Rinite alérgica.",
        "explanation": "Incorreta: Rinite alérgica isolada não é um dos 10 sinais de alerta para erro inato da imunidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Resfriados de repetição.",
        "explanation": "Incorreta: 3 a 4 resfriados (IVAS virais) por ano está perfeitamente dentro da normalidade para uma criança de 6 anos (esperam-se até 6–8 episódios/ano).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Diarreia aguda.",
        "explanation": "Incorreta: Um único episódio de diarreia aguda resolvido em 72h não é sinal de alerta (o sinal de alerta é diarreia crônica/persistente com déficit ponderal).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Pneumonia bacteriana.",
        "explanation": "Incorreta: Apenas um episódio isolado de pneumonia aos 4 anos com boa resposta em 7 dias não preenche critério (o sinal de alerta são **≥ 2 pneumonias no último ano**).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Abscessos de repetição.",
        "explanation": "A alternativa **E** está correta. Pelos **10 Sinais de Alerta para Erros Inatos da Imunidade (Imunodeficiências Primárias) na Criança** da **Fundação Jeffrey Modell / BRAGID / SBP**, **abscessos cutâneos ou de órgãos profundos de repetição** (presentes neste caso como múltiplas cicatrizes em glúteos e coxas) constituem um sinal de alerta clássico que indica investigação imunológica (ex.: doença granulomatosa crônica, síndrome de hiper-IgE, defeitos de fagócitos).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **E** está correta. Pelos **10 Sinais de Alerta para Erros Inatos da Imunidade (Imunodeficiências Primárias) na Criança** da **Fundação Jeffrey Modell / BRAGID / SBP**, **abscessos cutâneos ou de órgãos profundos de repetição** (presentes neste caso como múltiplas cicatrizes em glúteos e coxas) constituem um sinal de alerta clássico que indica investigação imunológica (ex.: doença granulomatosa crônica, síndrome de hiper-IgE, defeitos de fagócitos).\n- **A) Incorreta:** Rinite alérgica isolada não é um dos 10 sinais de alerta para erro inato da imunidade.\n- **B) Incorreta:** 3 a 4 resfriados (IVAS virais) por ano está perfeitamente dentro da normalidade para uma criança de 6 anos (esperam-se até 6–8 episódios/ano).\n- **C) Incorreta:** Um único episódio de diarreia aguda resolvido em 72h não é sinal de alerta (o sinal de alerta é diarreia crônica/persistente com déficit ponderal).\n- **D) Incorreta:** Apenas um episódio isolado de pneumonia aos 4 anos com boa resposta em 7 dias não preenche critério (o sinal de alerta são **≥ 2 pneumonias no último ano**).",
    "perolaClinica": "A alternativa **E** está correta. Pelos **10 Sinais de Alerta para Erros Inatos da Imunidade (Imunodeficiências Primárias) na Criança** da **Fundação Jeffrey Modell / BRAGID / SBP**, **abscessos cutâneos ou de órgãos profundos de repetição** (presentes neste…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Identificação dos 10 sinais de alerta para Erros Inatos da Imunidade na infância.",
      "raciocinioChave": "Entre os 10 sinais de alerta para Erros Inatos da Imunidade (Jeffrey Modell/BRAGID/SBP), constam os abscessos cutâneos ou de órgãos profundos de repetição. As cicatrizes de abscessos recorrentes em glúteos e coxas justificam investigação imunológica, diferentemente dos demais achados fisiológicos ou isolados.",
      "armadilhaBanca": "Valorizar episódios isolados (1 pneumonia na vida, 1 diarreia aguda) ou a frequência normal de IVAS na infância (3–4 resfriados/ano) como sinais de imunodeficiência primária."
    },
    "mapaDistratores": {
      "A": "A rinite alérgica isolada é uma condição atópica comum e não integra os 10 sinais de alerta para erro inato da imunidade.",
      "B": "A ocorrência de 3 a 4 resfriados por ano está dentro do esperado para uma criança de 6 anos (até 6–8 IVAS/ano são fisiológicas).",
      "C": "Um único episódio de diarreia aguda com resolução em 72 horas não é sinal de alerta, diferentemente da diarreia crônica com déficit pondero-estatural.",
      "D": "Uma única pneumonia bacteriana aos 4 anos com boa resposta em 7 dias não preenche critério de alerta, que exige duas ou mais pneumonias no último ano."
    }
  },
  {
    "id": "q-uepa-2026-088",
    "code": "Q-UEPA26-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Puberdade Normal, Precoce e Atrasada",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-puberdade-normal-precoce-e-atrasada",
    "tags": [
      "puberdade-precoce",
      "idade-ossea",
      "tanner-2",
      "investigacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 7 anos de idade é levada em consulta por apresentar broto mamário e odor axilar há 6 meses. Ao exame físico, observa-se Tanner M2P1, sem outros achados. Comparando a estatura da última consulta, há 6 meses, você observa crescimento de 6 cm. Assinale a alternativa que contém a conduta mais adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Observar e reavaliar em 3 meses, pois pode tratar-se de telarca precoce isolada.",
        "explanation": "Incorreta: A aceleração marcante da velocidade de crescimento (12 cm/ano) afasta telarca precoce isolada benigna e exige investigação imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Solicitar Rx para avaliar idade óssea, dosagem de LH, FSH e estradiol.",
        "explanation": "A alternativa **B** está correta. Menina com **telarca antes dos 8 anos** (iniciada aos 6 anos e meio) associada a **aceleração importante da velocidade de crescimento** (**6 cm em 6 meses = 12 cm/ano**, muito acima do esperado pré-puberal de 5–6 cm/ano) e odor axilar tem forte suspeita de **puberdade precoce progressiva** (não telarca precoce isolada benigna). Segundo o **PCDT de Puberdade Precoce Central (MS)** e a **SBP**, a investigação inicial obrigatória consiste em **radiografia de mão e punho esquerdo para idade óssea** (avaliar avanço ósseo) e **dosagens hormonais basais de LH, FSH e estradiol** (para diferenciar puberdade precoce central dependente de GnRH da periférica).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Solicitar USG pélvica para avaliação inicial.",
        "explanation": "Incorreta: A USG pélvica é complementar, mas não substitui a idade óssea e o eixo gonadotrófico (LH, FSH, estradiol) na propedêutica inicial.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Iniciar tratamento com análogo de GnRH.",
        "explanation": "Incorreta: Análogo de GnRH só é iniciado **após confirmação** de puberdade precoce central progressiva (e exclusão de causas periféricas/SNC).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Solicitar TSH e T4 livre para investigação inicial.",
        "explanation": "Incorreta: Hipotireoidismo grave (síndrome de Van Wyk-Grumbach) cursa com **desaceleração** do crescimento, não aceleração de 12 cm/ano.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Menina com **telarca antes dos 8 anos** (iniciada aos 6 anos e meio) associada a **aceleração importante da velocidade de crescimento** (**6 cm em 6 meses = 12 cm/ano**, muito acima do esperado pré-puberal de 5–6 cm/ano) e odor axilar tem forte suspeita de **puberdade precoce progressiva** (não telarca precoce isolada benigna). Segundo o **PCDT de Puberdade Precoce Central (MS)** e a **SBP**, a investigação inicial obrigatória consiste em **radiografia de mão e punho esquerdo para idade óssea** (avaliar avanço ósseo) e **dosagens hormonais basais de LH, FSH e estradiol** (para diferenciar puberdade precoce central dependente de GnRH da periférica).\n- **A) Incorreta:** A aceleração marcante da velocidade de crescimento (12 cm/ano) afasta telarca precoce isolada benigna e exige investigação imediata.\n- **C) Incorreta:** A USG pélvica é complementar, mas não substitui a idade óssea e o eixo gonadotrófico (LH, FSH, estradiol) na propedêutica inicial.\n- **D) Incorreta:** Análogo de GnRH só é iniciado **após confirmação** de puberdade precoce central progressiva (e exclusão de causas periféricas/SNC).\n- **E) Incorreta:** Hipotireoidismo grave (síndrome de Van Wyk-Grumbach) cursa com **desaceleração** do crescimento, não aceleração de 12 cm/ano.",
    "perolaClinica": "A alternativa **B** está correta. Menina com **telarca antes dos 8 anos** (iniciada aos 6 anos e meio) associada a **aceleração importante da velocidade de crescimento** (**6 cm em 6 meses = 12 cm/ano**, muito acima do esperado pré-puberal de 5–6 cm/ano) e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Investigação inicial de puberdade precoce em menina antes dos 8 anos.",
      "raciocinioChave": "Telarca iniciada antes dos 8 anos associada a aceleração da velocidade de crescimento (12 cm/ano, muito acima dos 5–6 cm/ano pré-puberais) sugere puberdade precoce progressiva. A propedêutica inicial exige radiografia para idade óssea e dosagens de LH, FSH e estradiol.",
      "armadilhaBanca": "Classificar como telarca precoce isolada apenas pelo achado M2P1 ignorando a aceleração estatural de 12 cm/ano, ou iniciar análogo de GnRH antes da confirmação bioquímica e de imagem."
    },
    "mapaDistratores": {
      "A": "A aceleração expressiva da velocidade de crescimento (12 cm/ano) afasta telarca precoce isolada benigna e contraindica conduta meramente expectante.",
      "C": "A ultrassonografia pélvica é um exame complementar auxiliar, mas não substitui a idade óssea e as dosagens hormonais gonadotróficas na avaliação inicial.",
      "D": "O tratamento com análogo de GnRH só deve ser instituído após confirmação diagnóstica de puberdade precoce central progressiva e exclusão de causas periféricas.",
      "E": "O hipotireoidismo grave (síndrome de Van Wyk-Grumbach) cursa com desaceleração do crescimento estatural, incompatível com ganho de 6 cm em 6 meses."
    }
  },
  {
    "id": "q-uepa-2026-089",
    "code": "Q-UEPA26-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "ITU e Malformações Urinárias em Pediatria",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-itu-e-malformacoes-urinarias-em-pediatria",
    "tags": [
      "valvula-de-uretra-posterior",
      "uretrocistografia-miccional",
      "hidronefrose"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém nascido do sexo masculino, nascido a termo, apresenta irritabilidade, distensão abdominal e jato urinário fraco nas primeiras horas de vida. A ultrassonografia fetal havia identificado hidronefrose bilateral do feto e oligoâmnio. Ao exame, abdômen tenso e abaulamento em hipogástrio. Com base nesses achados, o diagnóstico mais provável e exame de escolha para confirmação, são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "refluxo vesicoureteral- urografia excretora.",
        "explanation": "Incorreta: RVU primário não explica obstrução infravesical com jato fraco e bexigoma, além de urografia excretora não ser exame de escolha no RN.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "estenose de meato uretral- uretrocistoscopia.",
        "explanation": "Incorreta: Estenose de meato uretral é tipicamente adquirida após circuncisão e não causa hidronefrose bilateral fetal com oligoâmnio.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "válvula de uretra posterior- uretrocistografia miccional.",
        "explanation": "A alternativa **C** está correta. Recém-nascido do **sexo masculino** com histórico pré-natal de **hidronefrose bilateral e oligoâmnio** evoluindo ao nascimento com **jato urinário fraco**, distensão abdominal e **bexigoma (abaulamento hipogástrico)** é o quadro clássico de **válvula de uretra posterior (VUP)** — principal causa de obstrução infravesical congênita grave em meninos. Segundo a **SBP** e a **SBU**, o exame padrão-ouro para confirmação diagnóstica (após descompressão vesical com sonda) é a **uretrocistografia miccional (UCM)**, que evidencia dilatação da uretra posterior (\"sinal da fechadura\") e bexiga trabeculada.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "hidronefrose obstrutiva bilateral- ultrassonografia de rins e vias urinárias.",
        "explanation": "Incorreta: Hidronefrose bilateral é apenas a consequência anatômica, não o diagnóstico etiológico; a confirmação da VUP é pela UCM.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "bexiga neurogênica- cistometria.",
        "explanation": "Incorreta: Não há relato de disrafismo espinhal/mielomeningocele para sugerir bexiga neurogênica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Recém-nascido do **sexo masculino** com histórico pré-natal de **hidronefrose bilateral e oligoâmnio** evoluindo ao nascimento com **jato urinário fraco**, distensão abdominal e **bexigoma (abaulamento hipogástrico)** é o quadro clássico de **válvula de uretra posterior (VUP)** — principal causa de obstrução infravesical congênita grave em meninos. Segundo a **SBP** e a **SBU**, o exame padrão-ouro para confirmação diagnóstica (após descompressão vesical com sonda) é a **uretrocistografia miccional (UCM)**, que evidencia dilatação da uretra posterior (\"sinal da fechadura\") e bexiga trabeculada.\n- **A) Incorreta:** RVU primário não explica obstrução infravesical com jato fraco e bexigoma, além de urografia excretora não ser exame de escolha no RN.\n- **B) Incorreta:** Estenose de meato uretral é tipicamente adquirida após circuncisão e não causa hidronefrose bilateral fetal com oligoâmnio.\n- **D) Incorreta:** Hidronefrose bilateral é apenas a consequência anatômica, não o diagnóstico etiológico; a confirmação da VUP é pela UCM.\n- **E) Incorreta:** Não há relato de disrafismo espinhal/mielomeningocele para sugerir bexiga neurogênica.",
    "perolaClinica": "A alternativa **C** está correta. Recém-nascido do **sexo masculino** com histórico pré-natal de **hidronefrose bilateral e oligoâmnio** evoluindo ao nascimento com **jato urinário fraco**, distensão abdominal e **bexigoma (abaulamento hipogástrico)** é o…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico e exame padrão-ouro da válvula de uretra posterior no neonato.",
      "raciocinioChave": "Recém-nascido do sexo masculino com antecedente fetal de hidronefrose bilateral e oligoâmnio que apresenta jato urinário fraco e bexigoma apresenta o quadro clássico de válvula de uretra posterior (VUP). A uretrocistografia miccional (UCM) é o exame de escolha para confirmar a obstrução uretral posterior.",
      "armadilhaBanca": "Assinalar a consequência anatômica (hidronefrose obstrutiva) com ultrassonografia em vez do diagnóstico etiológico específico (VUP) confirmado pela uretrocistografia miccional."
    },
    "mapaDistratores": {
      "A": "O refluxo vesicoureteral primário não causa obstrução infravesical com jato fraco e bexigoma, além de a urografia excretora ser proscrita como exame de escolha no RN.",
      "B": "A estenose de meato uretral é tipicamente adquirida pós-postectomia e não provoca hidronefrose bilateral fetal associada a oligoâmnio.",
      "D": "A hidronefrose bilateral é apenas a repercussão anatômica da obstrução, e a ultrassonografia não visualiza diretamente a válvula uretral como a UCM.",
      "E": "Não há relato de disrafismo espinhal ou mielomeningocele que sustente bexiga neurogênica como etiologia primária neste neonato."
    }
  },
  {
    "id": "q-uepa-2026-090",
    "code": "Q-UEPA26-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Anemias e Doença Falciforme na Infância",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-anemias-e-doenca-falciforme-na-infancia",
    "tags": [
      "doenca-falciforme",
      "dactilite",
      "eletroforese-de-hemoglobina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Joana leva seu filho Miguel, de 4 anos de idade, ao pronto atendimento devido quadro de dor em mão direita, associado a febre moderada há 48 horas. Ao exame, criança pálida (3/4+), regular estado geral, febril, com baço palpável a 4 cm do rebordo costal esquerdo, presença de dactilite em dedos de mão direita. Antecedentes pessoais: em uso de sulfato ferroso há 4 meses prescrito pelo médico do posto de saúde devido anemia. Vacinas atualizadas, teste do pezinho realizado porém sem resultado na caderneta da criança. Neste caso, o exame que deve ser solicitado para investigar a principal hipótese diagnóstica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Eletroforese de hemoglobina.",
        "explanation": "A alternativa **A** está correta. Criança de 4 anos com **anemia importante (palidez 3+/4+) refratária a sulfato ferroso**, **esplenomegalia (baço a 4 cm do RCE)**, febre e **dactilite aguda (síndrome mão-pé)** — sem resultado conhecido do teste do pezinho — apresenta quadro clássico de **doença falciforme** em crise vaso-oclusiva. Segundo o **Ministério da Saúde (Manual de Doença Falciforme)** e a **SBP**, o exame diagnóstico confirmatório de escolha após o período neonatal é a **eletroforese de hemoglobina** (ou HPLC).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Hemocultura.",
        "explanation": "Incorreta: Embora hemocultura faça parte da avaliação de febre no paciente falciforme, ela não diagnostica a doença de base (doença falciforme).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Rx de mão direita.",
        "explanation": "Incorreta: A radiografia de mão não confirma a hemoglobinopatia (e nas primeiras 48h de dactilite geralmente mostra apenas edema de partes moles).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Fator reumatoide.",
        "explanation": "Incorreta: Fator reumatoide não investiga doença falciforme.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "ASLO.",
        "explanation": "Incorreta: ASLO relaciona-se a infecção estreptocócica/febre reumática, incompatível com anemia grave + esplenomegalia + dactilite.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Criança de 4 anos com **anemia importante (palidez 3+/4+) refratária a sulfato ferroso**, **esplenomegalia (baço a 4 cm do RCE)**, febre e **dactilite aguda (síndrome mão-pé)** — sem resultado conhecido do teste do pezinho — apresenta quadro clássico de **doença falciforme** em crise vaso-oclusiva. Segundo o **Ministério da Saúde (Manual de Doença Falciforme)** e a **SBP**, o exame diagnóstico confirmatório de escolha após o período neonatal é a **eletroforese de hemoglobina** (ou HPLC).\n- **B) Incorreta:** Embora hemocultura faça parte da avaliação de febre no paciente falciforme, ela não diagnostica a doença de base (doença falciforme).\n- **C) Incorreta:** A radiografia de mão não confirma a hemoglobinopatia (e nas primeiras 48h de dactilite geralmente mostra apenas edema de partes moles).\n- **D) Incorreta:** Fator reumatoide não investiga doença falciforme.\n- **E) Incorreta:** ASLO relaciona-se a infecção estreptocócica/febre reumática, incompatível com anemia grave + esplenomegalia + dactilite.",
    "perolaClinica": "A alternativa **A** está correta. Criança de 4 anos com **anemia importante (palidez 3+/4+) refratária a sulfato ferroso**, **esplenomegalia (baço a 4 cm do RCE)**, febre e **dactilite aguda (síndrome mão-pé)** — sem resultado conhecido do teste do pezinho —…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico confirmatório de doença falciforme diante de dactilite e anemia.",
      "raciocinioChave": "Criança com anemia grave refratária a ferro, esplenomegalia e dactilite aguda (síndrome mão-pé) sem resultado conhecido de triagem neonatal apresenta quadro clássico de doença falciforme em crise vaso-oclusiva. O exame confirmatório de escolha para a hemoglobinopatia é a eletroforese de hemoglobina.",
      "armadilhaBanca": "Indicar radiografia da mão (que mostra apenas edema inicial na dactilite) ou hemocultura (útil para investigar febre no falciforme, mas não diagnostica a doença de base)."
    },
    "mapaDistratores": {
      "B": "Embora a hemocultura seja importante no manejo da febre em paciente falciforme pelo risco de sepse, ela não confirma o diagnóstico da hemoglobinopatia.",
      "C": "A radiografia de mão não diagnostica a doença de base e, nas primeiras 48 horas de dactilite, costuma revelar apenas edema inespecífico de partes moles.",
      "D": "O fator reumatoide é marcador de artrite reumatoide ou autoimunidade e não tem relação com anemia hemolítica, esplenomegalia e dactilite.",
      "E": "A dosagem de ASLO avalia infecção estreptocócica prévia na suspeita de febre reumática, não explicando anemia grave refratária a ferro nem dactilite."
    }
  },
  {
    "id": "q-uepa-2026-091",
    "code": "Q-UEPA26-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Diarreia Crônica, APLV e Doença Celíaca",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-diarreia-cronica-aplv-e-doenca-celiaca",
    "tags": [
      "microbiota-intestinal",
      "probioticos",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto ao uso de probióticos na população pediátrica, assinale a alternativa INCORRETA.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A colonização inicial da microbiota intestinal é fortemente influenciada pelo tipo de parto, pela alimentação (aleitamento materno versus fórmulas), pelo uso de antibióticos e pelo ambiente.",
        "explanation": "Correta: Tipo de parto (vaginal vs. cesárea), aleitamento materno, exposição precoce a antibióticos e ambiente moldam a microbiota inicial.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O eixo intestino-pele é responsável pelo desenvolvimento da dermatite atópica.",
        "explanation": "Correta (no contexto da banca): A disbiose e a modulação imunológica do eixo intestino-pele estão associadas à fisiopatologia da dermatite atópica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Imaturidade imunológica, escolarização precoce e o número de irmãos favorecem o incremento na incidência de infecções de repetição.",
        "explanation": "Correta: Frequência precoce a creches/escolas, irmãos mais velhos e imaturidade imunológica elevam a exposição e incidência de infecções respiratórias/virais na primeira infância.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Os efeitos clínicos dos probióticos independem da cepa utilizada.",
        "explanation": "A alternativa **D** é a **INCORRETA** (e portanto o gabarito). Segundo o Documento Científico da **SBP** e da **ESPGHAN** sobre probióticos, os efeitos clínicos dos probióticos são estritamente **cepa-específicos e dose-específicos** — isto é, os benefícios comprovados para uma cepa específica (como *Lactobacillus rhamnosus GG* ou *Saccharomyces boulardii* na diarreia aguda/associada a antibióticos) **não podem ser extrapolados** para outras cepas ou espécies.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Os probióticos são geralmente seguros, mas eventos adversos como distensão abdominal ou flatulência leve podem ocorrer. Entretanto, em teoria, são contraindicados em pacientes imunocomprometidos graves ou com cateter venoso central, devido ao risco, ainda que raro, de fungemia ou bacteremia.",
        "explanation": "Correta: Probióticos têm bom perfil de segurança em crianças hígidas, mas são contraindicados em imunocomprometidos graves, prematuros extremos selecionados e portadores de cateter venoso central pelo risco de translocação/bacteremia/fungemia.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** é a **INCORRETA** (e portanto o gabarito). Segundo o Documento Científico da **SBP** e da **ESPGHAN** sobre probióticos, os efeitos clínicos dos probióticos são estritamente **cepa-específicos e dose-específicos** — isto é, os benefícios comprovados para uma cepa específica (como *Lactobacillus rhamnosus GG* ou *Saccharomyces boulardii* na diarreia aguda/associada a antibióticos) **não podem ser extrapolados** para outras cepas ou espécies.\n- **A) Correta:** Tipo de parto (vaginal vs. cesárea), aleitamento materno, exposição precoce a antibióticos e ambiente moldam a microbiota inicial.\n- **B) Correta (no contexto da banca):** A disbiose e a modulação imunológica do eixo intestino-pele estão associadas à fisiopatologia da dermatite atópica.\n- **C) Correta:** Frequência precoce a creches/escolas, irmãos mais velhos e imaturidade imunológica elevam a exposição e incidência de infecções respiratórias/virais na primeira infância.\n- **E) Correta:** Probióticos têm bom perfil de segurança em crianças hígidas, mas são contraindicados em imunocomprometidos graves, prematuros extremos selecionados e portadores de cateter venoso central pelo risco de translocação/bacteremia/fungemia.",
    "perolaClinica": "A alternativa **D** é a **INCORRETA** (e portanto o gabarito). Segundo o Documento Científico da **SBP** e da **ESPGHAN** sobre probióticos, os efeitos clínicos dos probióticos são estritamente **cepa-específicos e dose-específicos** — isto é, os benefícios…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Especificidade de cepa e contraindicações no uso pediátrico de probióticos.",
      "raciocinioChave": "De acordo com a SBP e a ESPGHAN, os efeitos clínicos dos probióticos são estritamente cepa-específicos e dose-específicos, não podendo ser extrapolados entre microrganismos distintos. Portanto, afirmar que os efeitos independem da cepa utilizada é incorreto.",
      "armadilhaBanca": "Cair na generalização de que qualquer probiótico possui a mesma eficácia clínica ou esquecer que imunocomprometidos graves e portadores de cateter venoso central têm risco de translocação."
    },
    "mapaDistratores": {
      "A": "A afirmação é verdadeira, pois tipo de parto, aleitamento materno, antibióticos e ambiente determinam diretamente a colonização da microbiota neonatal.",
      "B": "A afirmativa é considerada verdadeira pela banca, refletindo a associação entre disbiose, modulação imune do eixo intestino-pele e dermatite atópica.",
      "C": "A afirmação é verdadeira, visto que imaturidade imunológica, ingresso precoce em creches e presença de irmãos aumentam a exposição a infecções recorrentes.",
      "E": "A afirmação é verdadeira, pois probióticos são seguros em hígidos, mas contraindicados em imunocomprometidos graves ou com cateter venoso central pelo risco de bacteremia ou fungemia."
    }
  },
  {
    "id": "q-uepa-2026-092",
    "code": "Q-UEPA26-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Asma na Infância e Fibrose Cística",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica",
    "tags": [
      "corticoides-sistemicos",
      "asma-pediatrica",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto ao uso de corticoides sistêmicos na pediatria, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "apesar da utilização de anticorpos monoclonais para tratamento de pacientes com dermatite atópica, os corticoides sistêmicos ainda são tratamento de primeira escolha em pediatria.",
        "explanation": "Incorreta: Na dermatite atópica pediátrica, a base do tratamento são emolientes e corticoides/inibidores de calcineurina **tópicos** (e imunobiológicos como dupilumabe nos casos graves); corticoides sistêmicos não são primeira escolha.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o uso prolongado de CS em crianças com asma é contraindicado devido aos seus efeitos adversos, sendo recomendado apenas para exacerbações graves ou casos refratários.",
        "explanation": "A alternativa **B** está correta. Pelas diretrizes da **GINA 2024/2025** e da **SBP**, o uso prolongado de **corticoides sistêmicos (CS)** na asma pediátrica deve ser evitado/contraindicado pelo risco de efeitos adversos graves (supressão adrenal, déficit estatural, osteopenia, síndrome de Cushing, hipertensão e diabetes), reservando-se a cursos curtos em **exacerbações moderadas/graves** ou último recurso em **asma grave refratária** (etapa 5).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "o V Consenso Brasileiro sobre Rinites (2024) recomenda o uso de corticoide sistêmico de deposito em rinite alérgica, preferencialmente por via parenteral, para rápido alivio dos sintomas e melhora de padrão respiratório.",
        "explanation": "Incorreta: O V Consenso Brasileiro sobre Rinites (2024) **contraindica** corticoides sistêmicos de depósito por via intramuscular na rinite alérgica devido aos riscos sistêmicos graves.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "na síndrome DRESS o corticoide sistêmico está relacionado a síndrome de reconstituição imune inflamatória, sendo portanto, contra indicado o seu uso.",
        "explanation": "Incorreta: Na síndrome DRESS com acometimento visceral, o **corticoide sistêmico é justamente o tratamento de primeira linha** (com desmame lento para evitar recidiva/reconstituição imune).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "no tratamento da anafilaxia, o corticoide é a primeira escolha medicamentosa a fazer, uma vez que evita as reações bifásicas, que são recidivas tardias que podem ocorrer entre 8 e 72 horas após o episódio inicial em até 20% dos casos.",
        "explanation": "Incorreta: A primeira escolha absoluta na anafilaxia é a **adrenalina intramuscular**; corticoides são adjuvantes de segunda linha sem comprovação robusta de prevenção de reações bifásicas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Pelas diretrizes da **GINA 2024/2025** e da **SBP**, o uso prolongado de **corticoides sistêmicos (CS)** na asma pediátrica deve ser evitado/contraindicado pelo risco de efeitos adversos graves (supressão adrenal, déficit estatural, osteopenia, síndrome de Cushing, hipertensão e diabetes), reservando-se a cursos curtos em **exacerbações moderadas/graves** ou último recurso em **asma grave refratária** (etapa 5).\n- **A) Incorreta:** Na dermatite atópica pediátrica, a base do tratamento são emolientes e corticoides/inibidores de calcineurina **tópicos** (e imunobiológicos como dupilumabe nos casos graves); corticoides sistêmicos não são primeira escolha.\n- **C) Incorreta:** O V Consenso Brasileiro sobre Rinites (2024) **contraindica** corticoides sistêmicos de depósito por via intramuscular na rinite alérgica devido aos riscos sistêmicos graves.\n- **D) Incorreta:** Na síndrome DRESS com acometimento visceral, o **corticoide sistêmico é justamente o tratamento de primeira linha** (com desmame lento para evitar recidiva/reconstituição imune).\n- **E) Incorreta:** A primeira escolha absoluta na anafilaxia é a **adrenalina intramuscular**; corticoides são adjuvantes de segunda linha sem comprovação robusta de prevenção de reações bifásicas.",
    "perolaClinica": "A alternativa **B** está correta. Pelas diretrizes da **GINA 2024/2025** e da **SBP**, o uso prolongado de **corticoides sistêmicos (CS)** na asma pediátrica deve ser evitado/contraindicado pelo risco de efeitos adversos graves (supressão adrenal, déficit…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Restrição ao uso prolongado de corticoide sistêmico na asma pediátrica.",
      "raciocinioChave": "Pelas diretrizes GINA e SBP, o uso contínuo de corticoide sistêmico em crianças asmáticas é contraindicado pelos graves efeitos adversos sistêmicos (déficit de crescimento, supressão adrenal, Cushing). Reserva-se a cursos curtos em exacerbações graves ou como último recurso na asma refratária.",
      "armadilhaBanca": "Confundir o papel do corticoide sistêmico como segunda linha na anafilaxia com primeira escolha (adrenalina IM) ou desconhecer que ele é primeira linha na síndrome DRESS visceral."
    },
    "mapaDistratores": {
      "A": "Na dermatite atópica pediátrica, o tratamento de primeira escolha baseia-se em hidratação e corticoides ou inibidores de calcineurina tópicos, nunca corticoide sistêmico.",
      "C": "O V Consenso Brasileiro sobre Rinites (2024) contraindica o uso de corticoides sistêmicos de depósito injetáveis na rinite alérgica devido ao risco de efeitos adversos graves.",
      "D": "Na síndrome DRESS com acometimento visceral, o corticoide sistêmico é justamente o tratamento de primeira linha, com desmame lento para evitar rebote inflamatório.",
      "E": "Na anafilaxia, a medicação de primeira escolha absoluta é a adrenalina intramuscular; os corticoides têm papel adjuvante secundário e não substituem a epinefrina."
    }
  },
  {
    "id": "q-uepa-2026-093",
    "code": "Q-UEPA26-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "condicoes-cronicas-complexas",
      "puericultura",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "São características das crianças com condições crônicas complexas, EXCETO:",
    "alternativas": [
      {
        "letter": "A",
        "text": "duração mínima de 6 meses (exceto se a morte for o desfecho anterior).",
        "explanation": "A alternativa **A** é a **INCORRETA (EXCETO)** e, portanto, o gabarito. Pela definição clássica de **Feudtner et al.** adotada pela **Sociedade Brasileira de Pediatria (SBP)**, **Condições Crônicas Complexas (CCC)** são quaisquer condições médicas com expectativa de duração de pelo menos **12 meses** (e **não 6 meses**), a menos que o óbito ocorra antes, envolvendo vários sistemas orgânicos ou um único sistema gravemente acometido, requerendo atenção pediátrica especializada e provável internação em hospital terciário.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "acometimento com disfunção de um órgão ou sistema, ou de apenas um órgão de forma grave.",
        "explanation": "Correta: Define o critério de gravidade/acometimento orgânico das CCC.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "necessitam de acompanhamento especializado e provavelmente um período de internação em hospital terciário, com necessidades intensivas dos serviços de saúde.",
        "explanation": "Correta: Descreve a alta demanda por atenção especializada e internação terciária.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "limitação funcional significativa, muitas vezes dependente de traqueostomia e gastrostomia.",
        "explanation": "Correta: Crianças com CCC frequentemente apresentam dependência tecnológica (traqueostomia, gastrostomia, ventilação domiciliar) e limitação funcional.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "transporte de pacientes com CCC, que muitas vezes estão acamados e cujos familiares não têm condições de levá-los sozinhos aos serviços de referência é um dos obstáculos enfrentados pelos cuidadores de crianças com condições crônicas complexas.",
        "explanation": "Correta: A dificuldade de transporte adaptado para crianças acamadas/dependentes de tecnologia é um obstáculo bem documentado na literatura da SBP sobre CCC.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** é a **INCORRETA (EXCETO)** e, portanto, o gabarito. Pela definição clássica de **Feudtner et al.** adotada pela **Sociedade Brasileira de Pediatria (SBP)**, **Condições Crônicas Complexas (CCC)** são quaisquer condições médicas com expectativa de duração de pelo menos **12 meses** (e **não 6 meses**), a menos que o óbito ocorra antes, envolvendo vários sistemas orgânicos ou um único sistema gravemente acometido, requerendo atenção pediátrica especializada e provável internação em hospital terciário.\n- **B) Correta:** Define o critério de gravidade/acometimento orgânico das CCC.\n- **C) Correta:** Descreve a alta demanda por atenção especializada e internação terciária.\n- **D) Correta:** Crianças com CCC frequentemente apresentam dependência tecnológica (traqueostomia, gastrostomia, ventilação domiciliar) e limitação funcional.\n- **E) Correta:** A dificuldade de transporte adaptado para crianças acamadas/dependentes de tecnologia é um obstáculo bem documentado na literatura da SBP sobre CCC.",
    "perolaClinica": "A alternativa **A** é a **INCORRETA (EXCETO)** e, portanto, o gabarito. Pela definição clássica de **Feudtner et al.** adotada pela **Sociedade Brasileira de Pediatria (SBP)**, **Condições Crônicas Complexas (CCC)** são quaisquer condições médicas com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Critério temporal mínimo (12 meses) das Condições Crônicas Complexas (CCC).",
      "raciocinioChave": "Pela definição de Feudtner adotada pela SBP, Condições Crônicas Complexas são agravos com expectativa de duração mínima de 12 meses (exceto se ocorrer óbito antes), acometendo múltiplos sistemas ou um órgão gravemente. Logo, o prazo de 6 meses torna a alternativa A incorreta.",
      "armadilhaBanca": "Trocar sutilmente o critério temporal de 12 meses por 6 meses em meio a quatro assertivas longas e fidedignas sobre limitação funcional e dependência tecnológica."
    },
    "mapaDistratores": {
      "B": "A afirmativa está correta, pois a definição de CCC abrange disfunção de múltiplos órgãos ou sistemas ou comprometimento grave de um único órgão.",
      "C": "A afirmativa está correta, uma vez que crianças com CCC demandam acompanhamento multidisciplinar especializado e internações frequentes em hospitais terciários.",
      "D": "A afirmativa está correta, refletindo a frequente dependência tecnológica (como traqueostomia e gastrostomia) e limitação funcional grave nesse grupo.",
      "E": "A afirmativa está correta, já que dificuldades de transporte adaptado para crianças acamadas constituem barreira real enfrentada pelos cuidadores."
    }
  },
  {
    "id": "q-uepa-2026-094",
    "code": "Q-UEPA26-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "manejo-da-dor",
      "dor-pediatrica",
      "analgesia",
      "escalas-de-dor"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre o adequado manejo da dor em pediatria, é correto afirmar que:\nI. O uso de escalas analgésicas de acordo com a faixa etária devem ser utilizadas para o adequado manejo da dor.\nII. O uso de codeína é uma recomendação forte para o manejo de dor de crianças em qualquer faixa etária.\nIII. Deve-se preferir o uso de analgésicos via oral, sempre que possível.\nIV. O adequado manejo da dor pediátrica deve ser feito de horário, exceto quando se utilizar uma medicação que tenha efeito analgésico e antitérmico, devendo-se a dose ser omitida em caso de ausência de febre.\nV. A morfina em pediatria está associada a delirium e constipação intestinal severa, sendo contraindicada na população pediátrica.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I e III",
        "explanation": "A alternativa **A** está correta (apenas **I e III** são verdadeiras), conforme as diretrizes da **OMS** e da **SBP** sobre manejo da dor em pediatria:",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "II , III e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta (apenas **I e III** são verdadeiras), conforme as diretrizes da **OMS** e da **SBP** sobre manejo da dor em pediatria:\n- **I. Correta:** A avaliação sistemática deve utilizar escalas validadas para cada faixa etária (ex.: NIPS/PIPP em neonatos, FLACC em lactentes/pré-escolares, escala de faces em escolares, EVA em adolescentes).\n- **II. Incorreta:** A **codeína é contraindicada em menores de 12 anos** (e após amigdalectomia/adenoidectomia em < 18 anos) pela variabilidade genética do CYP2D6 (metabolizadores ultrarrápidos com risco de depressão respiratória fatal).\n- **III. Correta:** Sempre que disponível e tolerada, prefere-se a **via oral** (menos invasiva e traumática para a criança).\n- **IV. Incorreta:** A analgesia de horário para dor persistente **não** deve ser omitida pela ausência de febre quando o fármaco também é antitérmico (como paracetamol ou dipirona).\n- **V. Incorreta:** A **morfina** é justamente o **opioide forte de primeira escolha** para dor moderada a intensa em pediatria (nunca contraindicada na população pediátrica).\n- **B, C, D e E) Incorretas:** Incluem afirmativas falsas (II, IV ou V).",
    "perolaClinica": "A alternativa **A** está correta (apenas **I e III** são verdadeiras), conforme as diretrizes da **OMS** e da **SBP** sobre manejo da dor em",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Princípios da OMS e SBP para avaliação e analgesia segura em pediatria.",
      "raciocinioChave": "O manejo adequado da dor pediátrica exige uso de escalas validadas para cada faixa etária (I) e preferência pela via oral sempre que possível (III). Codeína é contraindicada em menores de 12 anos, analgesia de horário não deve ser omitida sem febre e morfina é segura quando bem indicada.",
      "armadilhaBanca": "Desconhecer a contraindicação formal da codeína em menores de 12 anos (risco de depressão respiratória em metabolizadores ultrarrápidos) ou temer o uso de morfina em crianças."
    },
    "mapaDistratores": {
      "B": "As afirmativas II e IV são falsas, pois codeína é contraindicada em menores de 12 anos e a analgesia de horário para dor não deve ser omitida quando o paciente está afebril.",
      "C": "Inclui a afirmativa V, que é falsa, já que a morfina é opioide seguro e indicado na dor intensa pediátrica quando titulada adequadamente.",
      "D": "Contém as afirmativas II e IV, ambas incorretas quanto à recomendação de codeína e à omissão de analgésicos na ausência de febre.",
      "E": "Inclui a afirmativa II, incorreta porque a codeína possui restrição formal em crianças menores de 12 anos pelo risco de toxicidade opioide imprevisível."
    }
  },
  {
    "id": "q-uepa-2026-095",
    "code": "Q-UEPA26-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "bcg",
      "pni",
      "hanseniase",
      "imunizacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto a imunização com BCG, é correto afirmar que:\nI. Deve ser aplicada em dose única o mais precocemente possível, ainda na maternidade ou na primeira visita à Unidade de Saúde.\nII. Não se recomenda mais a revacinação de crianças que não apresentem cicatriz no local da aplicação após 6 meses.\nIII. Comunicantes domiciliares de hanseníase, independente da forma clínica, podem receber uma segunda dose da vacina BCG.\nIV. Em recém-nascidos filhos de mães que utilizaram imunossupressores na gestação, ou com história familiar de imunossupressão, a vacinação deverá ser adiada, pelo menos até os 6 meses de idade, ou contraindicada, dependendo da situação.\nV. Pode ser aplicada em bebês a partir de 1500 g.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I, II , III e IV",
        "explanation": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)** e a **SBP**:",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "II, III, IV e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)** e a **SBP**:\n- **I. Correta:** Dose única aplicada preferencialmente ainda na maternidade (ou o mais precocemente possível na UBS).\n- **II. Correta:** Desde 2019 (Nota Informativa MS nº 10/2019), o PNI **não recomenda mais revacinar** crianças que não desenvolveram cicatriz vacinal após 6 meses.\n- **III. Correta:** Comunicantes domiciliares de casos de hanseníase (paucibacilar ou multibacilar) com 1 cicatriz prévia de BCG recebem 1 dose adicional (respeitando intervalo mínimo de 6 meses).\n- **IV. Correta:** Por ser vacina viva atenuada (*M. bovis*), a BCG deve ser **adiada** (pelo menos até 6–12 meses em filhos de mães que usaram imunobiológicos/imunossupressores na gestação) ou **contraindicada** em suspeita/história familiar de imunodeficiência combinada grave (SCID).\n- **V. Incorreta:** O peso mínimo recomendado pelo PNI para aplicação da BCG é **≥ 2.000 g** (e não 1.500 g).\n- **A, B, C e E) Incorretas:** Omitiram afirmativas verdadeiras ou incluíram a afirmativa falsa V.",
    "perolaClinica": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)** e a",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Normas atuais do PNI sobre aplicação, ausência de cicatriz e peso mínimo da BCG.",
      "raciocinioChave": "Estão corretas as afirmativas I a IV: dose única precoce, dispensa de revacinação por ausência de cicatriz desde 2019, dose adicional para contatos de hanseníase e adiamento diante de imunossupressão materna ou familiar. A afirmativa V é falsa porque o peso mínimo para aplicar BCG é 2.000 g.",
      "armadilhaBanca": "Errar o ponto de corte ponderal mínimo para aplicação da BCG (2.000 g vs. 1.500 g) ou acreditar na regra antiga de revacinar crianças sem cicatriz após 6 meses."
    },
    "mapaDistratores": {
      "A": "É incompleta por excluir as afirmativas II e IV, ambas alinhadas às normas vigentes do PNI sobre ausência de cicatriz vacinal e exposição fetal a imunossupressores.",
      "B": "É incompleta por omitir as afirmativas I e III, que descrevem corretamente a dose única precoce e a indicação de dose adicional em contatos domiciliares de hanseníase.",
      "C": "Omite II e IV e inclui a afirmativa V, que é falsa porque o peso mínimo exigido pelo PNI para vacinação com BCG é 2.000 g.",
      "E": "Omite a afirmativa I e inclui a afirmativa V, incorreta por reduzir indevidamente o limite ponderal mínimo da BCG de 2.000 g para 1.500 g."
    }
  },
  {
    "id": "q-uepa-2026-096",
    "code": "Q-UEPA26-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Acidentes, Intoxicações e Maus-Tratos na Infância",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-acidentes-intoxicacoes-e-maus-tratos-na-infancia",
    "tags": [
      "intoxicacao-por-metanol",
      "etanol",
      "hemodialise",
      "adolescente"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Adolescente de 15 anos chega ao pronto socorro com relato de Náuseas e vômitos + Dor abdominal difusa+ Cefaleia + Tontura e Fraqueza. Relata que há 4 horas ingeriu bebida alcoólica e percebe piora progressiva do quadro. Após 12 h da admissão, relata visão turva, seguida de crise convulsiva. Exames de laboratório evidenciam acidose metabólica com GAP aniônico elevado, aumento de escorias nitrogenadas e discreta elevação de transaminases. Ante o exposto, assinale a hipótese diagnóstica e tratamento adequado.",
    "alternativas": [
      {
        "letter": "A",
        "text": "insuficiência renal => correção de acidose",
        "explanation": "Incorreta: A injúria renal é secundária; apenas corrigir acidose sem antídoto e diálise não impede cegueira e óbito.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "intoxicação por metanol => etanol + hemodiálise",
        "explanation": "A alternativa **B** está correta. Após ingestão de bebida alcoólica (adulterada/clandestina), o surgimento após período de latência (12–24h) de sintomas gastrointestinais, **alteração visual (visão turva/\"nevasca\", toxicidade do ácido fórmico ao nervo óptico)**, crise convulsiva e **acidose metabólica grave com ânion gap elevado** caracteriza **intoxicação por metanol**. Segundo as diretrizes de Toxicologia Clínica (CIATox / SBP / AACT), o tratamento específico consiste em bloquear a enzima álcool desidrogenase com **etanol (ou fomepizol)**, ácido folínico, correção da acidose e **hemodiálise** (indicada diante de acidose grave, alterações visuais ou insuficiência renal).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Pancreatite => jejum e medidas de suporte",
        "explanation": "Incorreta: Pancreatite não explica alteração visual aguda com acidose metabólica de ânion gap elevado após bebida alcoólica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "arritmias => cardioversao elétrica",
        "explanation": "Incorreta: Não há relato de arritmia instável.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "sepse => antibioticoterapia",
        "explanation": "Incorreta: O quadro é toxicológico agudo, não infeccioso/séptico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Após ingestão de bebida alcoólica (adulterada/clandestina), o surgimento após período de latência (12–24h) de sintomas gastrointestinais, **alteração visual (visão turva/\"nevasca\", toxicidade do ácido fórmico ao nervo óptico)**, crise convulsiva e **acidose metabólica grave com ânion gap elevado** caracteriza **intoxicação por metanol**. Segundo as diretrizes de Toxicologia Clínica (CIATox / SBP / AACT), o tratamento específico consiste em bloquear a enzima álcool desidrogenase com **etanol (ou fomepizol)**, ácido folínico, correção da acidose e **hemodiálise** (indicada diante de acidose grave, alterações visuais ou insuficiência renal).\n- **A) Incorreta:** A injúria renal é secundária; apenas corrigir acidose sem antídoto e diálise não impede cegueira e óbito.\n- **C) Incorreta:** Pancreatite não explica alteração visual aguda com acidose metabólica de ânion gap elevado após bebida alcoólica.\n- **D) Incorreta:** Não há relato de arritmia instável.\n- **E) Incorreta:** O quadro é toxicológico agudo, não infeccioso/séptico.",
    "perolaClinica": "A alternativa **B** está correta. Após ingestão de bebida alcoólica (adulterada/clandestina), o surgimento após período de latência (12–24h) de sintomas gastrointestinais, **alteração visual (visão turva/\"nevasca\", toxicidade do ácido fórmico ao nervo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento e tratamento da intoxicação aguda por metanol.",
      "raciocinioChave": "Ingestão de bebida alcoólica evoluindo após latência com sintomas gastrointestinais, visão turva (toxicidade óptica do ácido fórmico), convulsão e acidose metabólica com ânion gap elevado caracteriza intoxicação por metanol. O tratamento exige bloqueio da álcool desidrogenase com etanol associado à hemodiálise.",
      "armadilhaBanca": "Tratar apenas a acidose ou a injúria renal secundária sem identificar a tríade clássica (bebida alcoólica + visão turva + acidose com ânion gap elevado) que exige etanol e hemodiálise."
    },
    "mapaDistratores": {
      "A": "A injúria renal é consequência secundária, e apenas corrigir acidose sem antídoto (etanol ou fomepizol) e hemodiálise não evita cegueira irreversível nem óbito.",
      "C": "A pancreatite aguda não justifica visão turva aguda associada a acidose metabólica grave com ânion gap elevado após ingestão alcoólica.",
      "D": "Não há descrição de taquiarritmia instável que justifique cardioversão elétrica neste quadro toxicológico.",
      "E": "A evolução subaguda após libação alcoólica com distúrbio visual e acidose metabólica de ânion gap elevado aponta para intoxicação exógena, não sepse."
    }
  },
  {
    "id": "q-uepa-2026-097",
    "code": "Q-UEPA26-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "melatonina",
      "ritmo-circadiano",
      "exposicao-a-telas",
      "sono-infantil"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre a melatonina analise as afirmativas abaixo e assinale a correta.\nI. A melatonina é transferida para o recém-nascido através do leite materno até a 12ª e 20ª semanas de vida, seguindo o ritmo circadiano.\nII. A partir dos três meses de idade, os lactentes começam a produzir melatonina, sendo o leite materno importante para consolidar o ritmo sono-vigília dos bebês até que seu próprio sistema circadiano amadureça.\nIII. A exposição prolongada à luz azul emitida pelos dispositivos eletrônicos, pode prejudicar a produção da melatonina, levando a distúrbios do ritmo circadiano e alterando não apenas o sono, mas também outros processos fisiológicos como puberdade, ganho de peso, desenvolvimento da linguagem e da comunicação.\nIV. Apenas cinco minutos de exposição à luz azul durante à noite são capazes de bloquear a produção de melatonina, enquanto a recuperação de sua produção pode demandar horas.\nV. Os sintomas mais comuns da hipermelatoninemia são: sonolência diurna, tontura, hipotonia, alteração do nível de consciência e crises de síncope com sudorese e hipotermia (temperatura entre 33 e 34°C).\n\nA alternativa que contém todas as afirmativas corretas, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I, II , III e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "A alternativa **E** está correta (**todas as afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo diretamente o **Documento Científico da Sociedade Brasileira de Pediatria (SBP)** sobre o uso de melatonina em crianças e adolescentes:",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **E** está correta (**todas as afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo diretamente o **Documento Científico da Sociedade Brasileira de Pediatria (SBP)** sobre o uso de melatonina em crianças e adolescentes:\n- **I e II. Corretas:** Nos primeiros meses de vida, o RN depende da melatonina transferida pelo leite materno (com pico noturno), iniciando produção endógena própria por volta dos 3 meses (12–20 semanas) para consolidar o ciclo sono-vigília.\n- **III e IV. Corretas:** A luz azul de telas suprime rapidamente a secreção pineal de melatonina (bastando breves exposições noturnas), repercutindo sobre sono, metabolismo, neurodesenvolvimento e eixo puberal.\n- **V. Correta:** O excesso de melatonina (hipermelatoninemia/superdosagem por uso indiscriminado de suplementos) manifesta-se por sonolência diurna, tontura, hipotonia, rebaixamento do nível de consciência e episódios de síncope com sudorese e hipotermia (33–34 °C).\n- **A, B, C e D) Incorretas:** Omitiram afirmativas verdadeiras conforme o documento da SBP.",
    "perolaClinica": "A alternativa **E** está correta (**todas as afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo diretamente o **Documento Científico da Sociedade Brasileira de Pediatria (SBP)** sobre o uso de melatonina em crianças e",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Fisiologia da melatonina no lactente e impacto da luz azul segundo a SBP.",
      "raciocinioChave": "Todas as cinco afirmativas reproduzem o Documento Científico da SBP sobre melatonina na infância: transferência circadiana pelo leite materno até a 12ª–20ª semana, início da produção endógena por volta dos 3 meses e supressão pela exposição noturna à luz azul de telas.",
      "armadilhaBanca": "Desconfiar de assertivas completas ('todas verdadeiras') ou subestimar o impacto sistêmico da exposição à luz azul sobre o ritmo circadiano infantil."
    },
    "mapaDistratores": {
      "A": "É incompleta por desconsiderar as afirmativas II, IV e V, todas corretas segundo o documento científico da SBP.",
      "B": "É incompleta por excluir as afirmativas I, III e V, igualmente fidedignas à fisiologia da melatonina na infância.",
      "C": "É incompleta por omitir as afirmativas II e IV, que também estão corretas conforme a SBP.",
      "D": "É incompleta por deixar de incluir a afirmativa V, visto que todas as proposições apresentadas são verdadeiras."
    }
  },
  {
    "id": "q-uepa-2026-098",
    "code": "Q-UEPA26-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": [
      "pneumonia-necrosante",
      "pneumatocele",
      "pac-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A pneumonia necrosante, descrita em crianças desde 1994, é uma forma grave de pneumonia adquirida na comunidade, presente em até 7% dos casos pediátricos. Seu aumento não é completamente explicado pelos avanços diagnósticos, e sua fisiopatologia ainda é pouco compreendida, havendo suspeita de influência genética. Com base nesse contexto, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A consolidação com necrose caracteriza o estágio final da pneumonia necrosante.",
        "explanation": "Incorreta: A consolidação com necrose é o estágio **inicial**, precedendo a liquefação e cavitação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A necrose evolui rapidamente para cavitação (pneumatocele), geralmente periférica e multilobar. As cavidades podem coalescer, formando lesões maiores, fístulas broncopleurais e pneumotórax.",
        "explanation": "A alternativa **B** está correta. De acordo com o Documento Científico de **Pneumonia Adquirida na Comunidade / Complicações da SBP**, na **pneumonia necrosante** há liquefação do parênquima pulmonar que evolui rapidamente para **múltiplas cavitações de paredes finas (pneumatoceles)**, geralmente periféricas e multilobares; sua coalescência pode gerar grandes cavidades, **fístula broncopleural, empiema e pneumotórax**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Os principais agentes etiológicos são Streptococcus pneumoniae, Staphylococcus aureus e o vírus sincicial respiratório.",
        "explanation": "Incorreta: Os principais agentes bacterianos são *Streptococcus pneumoniae* (especialmente sorotipos 3 e 19A), *Staphylococcus aureus* e *Mycoplasma pneumoniae* / *Streptococcus pyogenes* (e não VSR como principal agente etiológico da necrose).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A pneumonia necrosante localiza-se em um espectro clínico entre o abscesso pulmonar e a gangrena pulmonar.",
        "explanation": "Incorreta: O espectro evolutivo clássico descrito na literatura pediátrica situa a pneumonia necrosante entre o **abscesso pulmonar** (lesão única/localizada com parede espessa) e a **gangrena pulmonar** — porém a banca considerou B como a descrição mais completa e exata conforme a referência da SBP (em que o abscesso pulmonar costuma ser o extremo mais localizado e a gangrena o mais extenso/vascular trombótico).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Estudos recentes não identificaram cepas de Staphylococcus aureus produtoras de leucocidina de Panton-Valentine (PVL), toxina associada a formas graves de pneumonia necrosante em crianças e adultos previamente saudáveis.",
        "explanation": "Incorreta: Pelo contrário, cepas de *S. aureus* (especialmente CA-MRSA) produtoras da toxina **leucocidina de Panton-Valentine (PVL)** são amplamente identificadas e fortemente associadas a formas fulminantes de pneumonia necrosante em crianças previamente hígidas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. De acordo com o Documento Científico de **Pneumonia Adquirida na Comunidade / Complicações da SBP**, na **pneumonia necrosante** há liquefação do parênquima pulmonar que evolui rapidamente para **múltiplas cavitações de paredes finas (pneumatoceles)**, geralmente periféricas e multilobares; sua coalescência pode gerar grandes cavidades, **fístula broncopleural, empiema e pneumotórax**.\n- **A) Incorreta:** A consolidação com necrose é o estágio **inicial**, precedendo a liquefação e cavitação.\n- **C) Incorreta:** Os principais agentes bacterianos são *Streptococcus pneumoniae* (especialmente sorotipos 3 e 19A), *Staphylococcus aureus* e *Mycoplasma pneumoniae* / *Streptococcus pyogenes* (e não VSR como principal agente etiológico da necrose).\n- **D) Incorreta:** O espectro evolutivo clássico descrito na literatura pediátrica situa a pneumonia necrosante entre o **abscesso pulmonar** (lesão única/localizada com parede espessa) e a **gangrena pulmonar** — porém a banca considerou B como a descrição mais completa e exata conforme a referência da SBP (em que o abscesso pulmonar costuma ser o extremo mais localizado e a gangrena o mais extenso/vascular trombótico).\n- **E) Incorreta:** Pelo contrário, cepas de *S. aureus* (especialmente CA-MRSA) produtoras da toxina **leucocidina de Panton-Valentine (PVL)** são amplamente identificadas e fortemente associadas a formas fulminantes de pneumonia necrosante em crianças previamente hígidas.",
    "perolaClinica": "A alternativa **B** está correta. De acordo com o Documento Científico de **Pneumonia Adquirida na Comunidade / Complicações da SBP**, na **pneumonia necrosante** há liquefação do parênquima pulmonar que evolui rapidamente para **múltiplas cavitações de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Fisiopatologia e evolução cavitária da pneumonia necrosante pediátrica.",
      "raciocinioChave": "Na pneumonia necrosante pediátrica, a liquefação do parênquima pulmonar evolui rapidamente para múltiplas cavitações periféricas de paredes finas (pneumatoceles), frequentemente multilobares. Essas cavidades podem coalescer e originar lesões maiores, fístula broncopleural, empiema e pneumotórax.",
      "armadilhaBanca": "Trocar o estágio inicial (consolidação com necrose) pelo final, atribuir papel etiológico principal ao VSR ou ignorar a relação do S. aureus produtor de PVL com formas graves."
    },
    "mapaDistratores": {
      "A": "A consolidação com necrose corresponde ao estágio inicial do processo, precedendo a liquefação tecidual e a formação de cavidades.",
      "C": "Os principais agentes etiológicos da necrose pulmonar são bactérias como Streptococcus pneumoniae e Staphylococcus aureus, e não o vírus sincicial respiratório.",
      "D": "Embora o espectro entre abscesso e gangrena seja citado na literatura, a banca adotou a descrição evolutiva da SBP apresentada na alternativa B como a resposta exata.",
      "E": "Pelo contrário, cepas de S. aureus produtoras da toxina leucocidina de Panton-Valentine (PVL) estão fortemente associadas a casos fulminantes de pneumonia necrosante."
    }
  },
  {
    "id": "q-uepa-2026-099",
    "code": "Q-UEPA26-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": [
      "pneumonia-necrosante",
      "vancomicina",
      "cefepime",
      "uti-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente do sexo feminino, 8 meses de idade, foi levada ao pronto-atendimento com febre e vômitos há dois dias, sendo inicialmente liberada com orientações e sintomáticos. Retornou no dia seguinte devido à persistência da febre. No exame físico, apresentava-se em mau estado geral, gemente, com taquipneia (76 irpm), tiragens subcostais e intercostais, retração de fúrcula, batimento de asa de nariz e rebaixamento do nível de consciência. A percussão torácica revelou submacicez no terço superior do hemitórax direito. Radiografia de tórax mostrou hipotransparência difusa no hemitórax direito e presença de pneumatoceles no lobo superior direito. Tomografia computadorizada sem contraste evidenciou áreas de necrose pulmonar. Diante desse quadro, a melhor conduta antimicrobiana inicial é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amoxicilina oral, associada a cuidados domiciliares e reavaliação ambulatorial.",
        "explanation": "Incorreta: Tratamento ambulatorial com amoxicilina oral é absolutamente contraindicado em pneumonia necrosante grave com insuficiência respiratória.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Oxacilina intravenosa associada a gentamicina, em enfermaria pediátrica.",
        "explanation": "Incorreta: Oxacilina não cobre CA-MRSA e a paciente tem indicação clara de UTI pediátrica, não enfermaria.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Ceftriaxona intravenosa, mantendo observação hospitalar.",
        "explanation": "Incorreta: Ceftriaxona isolada não cobre *S. aureus* (nem MSSA adequadamente nem MRSA), agente clássico de pneumonia necrosante com pneumatoceles.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Vancomicina associada a cefepime, com suporte avançado de vida, internação em UTI e intubação orotraqueal, se necessário.",
        "explanation": "A alternativa **D** está correta. Lactente de 8 meses em **insuficiência respiratória aguda grave** (gemência, FR 76 irpm, tiragens, retração de fúrcula, batimento de asa nasal e **rebaixamento do nível de consciência**) com **pneumonia necrosante e pneumatoceles** à radiografia/TC exige **internação imediata em UTI pediátrica**, suporte avançado de vida (incluindo IOT se necessário) e **antibioticoterapia IV de amplo espectro** com cobertura para ***S. aureus* resistente à meticilina (CA-MRSA)** — **vancomicina** — associada a beta-lactâmico de amplo espectro (como **cefepime** ou ceftriaxona), conforme diretrizes da **SBP** e **PIDS/IDSA**.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Azitromicina oral associada a antipiréticos e vigilância clínica em casa.",
        "explanation": "Incorreta: Macrolídeo oral em domicílio levaria rapidamente ao óbito em lactente séptico/insuficiência respiratória grave.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Lactente de 8 meses em **insuficiência respiratória aguda grave** (gemência, FR 76 irpm, tiragens, retração de fúrcula, batimento de asa nasal e **rebaixamento do nível de consciência**) com **pneumonia necrosante e pneumatoceles** à radiografia/TC exige **internação imediata em UTI pediátrica**, suporte avançado de vida (incluindo IOT se necessário) e **antibioticoterapia IV de amplo espectro** com cobertura para ***S. aureus* resistente à meticilina (CA-MRSA)** — **vancomicina** — associada a beta-lactâmico de amplo espectro (como **cefepime** ou ceftriaxona), conforme diretrizes da **SBP** e **PIDS/IDSA**.\n- **A) Incorreta:** Tratamento ambulatorial com amoxicilina oral é absolutamente contraindicado em pneumonia necrosante grave com insuficiência respiratória.\n- **B) Incorreta:** Oxacilina não cobre CA-MRSA e a paciente tem indicação clara de UTI pediátrica, não enfermaria.\n- **C) Incorreta:** Ceftriaxona isolada não cobre *S. aureus* (nem MSSA adequadamente nem MRSA), agente clássico de pneumonia necrosante com pneumatoceles.\n- **E) Incorreta:** Macrolídeo oral em domicílio levaria rapidamente ao óbito em lactente séptico/insuficiência respiratória grave.",
    "perolaClinica": "A alternativa **D** está correta. Lactente de 8 meses em **insuficiência respiratória aguda grave** (gemência, FR 76 irpm, tiragens, retração de fúrcula, batimento de asa nasal e **rebaixamento do nível de consciência**) com **pneumonia necrosante e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Suporte em UTI e antibioticoterapia ampla na pneumonia necrosante grave.",
      "raciocinioChave": "Lactente em franca insuficiência respiratória aguda com rebaixamento do nível de consciência e pneumonia necrosante com pneumatoceles exige internação imediata em UTI pediátrica, suporte avançado e antibioticoterapia IV ampla. A associação de vancomicina e cefepime cobre MRSA comunitário, pneumococo e Gram-negativos.",
      "armadilhaBanca": "Indicar monoterapia com ceftriaxona ou oxacilina em enfermaria, falhando na cobertura contra CA-MRSA e subestimando a iminência de falência respiratória que exige UTI."
    },
    "mapaDistratores": {
      "A": "O tratamento ambulatorial com amoxicilina oral é absolutamente contraindicado diante de insuficiência respiratória grave e necrose pulmonar.",
      "B": "A oxacilina não cobre MRSA comunitário, agente clássico de pneumonia necrosante com pneumatoceles, e o paciente exige UTI pediátrica em vez de enfermaria.",
      "C": "A ceftriaxona isolada não oferece cobertura adequada para Staphylococcus aureus (especialmente MRSA) e a gravidade clínica exige terapia intensiva.",
      "E": "A azitromicina em domicílio não trata patógenos necrosantes graves e levaria rapidamente à falência respiratória e óbito."
    }
  },
  {
    "id": "q-uepa-2026-100",
    "code": "Q-UEPA26-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Diarreia Aguda e Desidratação",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-diarreia-aguda-e-desidratacao",
    "tags": [
      "diarreia-aguda",
      "sinais-de-alerta",
      "oms",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2026,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "De acordo com a Organização Mundial da Saúde (OMS), alguns sinais indicam a necessidade de reavaliação médica imediata em casos de diarreia, especialmente na população pediátrica. Esses sinais de alerta ajudam a identificar quadros potencialmente graves que exigem intervenções precoces para evitar complicações como desidratação severa, sepse ou desnutrição aguda. Com base nas recomendações da OMS, assinale a alternativa que apresenta um sinal de alerta em crianças com diarreia aguda.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Melhora progressiva do apetite e redução das evacuações.",
        "explanation": "Incorreta: Indica evolução favorável para resolução do quadro.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Diarreia com duração de 2 dias, sem vômitos ou febre.",
        "explanation": "Incorreta: Diarreia aguda simples há 2 dias sem febre ou vômitos pode ser conduzida com Plano A (terapia de reidratação oral domiciliar).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Vômitos repetidos e presença de sangue nas fezes.",
        "explanation": "A alternativa **C** está correta. Segundo o protocolo da **OMS** e o **Manual de Manejo do Paciente com Diarreia (Ministério da Saúde / SBP)**, são sinais clássicos de alerta para retorno/reavaliação médica imediata: **vômitos repetidos/incoercíveis**, **presença de sangue nas fezes (disenteria)**, sede intensa ou recusa de líquidos, piora da diarreia, febre persistente e sinais de desidratação/letargia.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Frequência urinária preservada e boa aceitação de líquidos.",
        "explanation": "Incorreta: Diurese preservada e boa aceitação hídrica são sinais de hidratação adequada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Diarreia autolimitada com duração inferior a 48 horas.",
        "explanation": "Incorreta: Quadro autolimitado < 48h representa evolução benigna esperada.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Segundo o protocolo da **OMS** e o **Manual de Manejo do Paciente com Diarreia (Ministério da Saúde / SBP)**, são sinais clássicos de alerta para retorno/reavaliação médica imediata: **vômitos repetidos/incoercíveis**, **presença de sangue nas fezes (disenteria)**, sede intensa ou recusa de líquidos, piora da diarreia, febre persistente e sinais de desidratação/letargia.\n- **A) Incorreta:** Indica evolução favorável para resolução do quadro.\n- **B) Incorreta:** Diarreia aguda simples há 2 dias sem febre ou vômitos pode ser conduzida com Plano A (terapia de reidratação oral domiciliar).\n- **D) Incorreta:** Diurese preservada e boa aceitação hídrica são sinais de hidratação adequada.\n- **E) Incorreta:** Quadro autolimitado < 48h representa evolução benigna esperada.",
    "perolaClinica": "A alternativa **C** está correta. Segundo o protocolo da **OMS** e o **Manual de Manejo do Paciente com Diarreia (Ministério da Saúde / SBP)**, são sinais clássicos de alerta para retorno/reavaliação médica imediata: **vômitos repetidos/incoercíveis**,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2026 (Gabarito Oficial Definitivo)"
    ],
    "analiseBanca": {
      "conceitoCentral": "Sinais de alerta para reavaliação médica imediata na diarreia aguda infantil.",
      "raciocinioChave": "Segundo a OMS e o Ministério da Saúde, vômitos repetidos (que inviabilizam a reidratação oral) e sangue nas fezes (disenteria) são sinais clássicos de alerta na diarreia aguda pediátrica. Esses achados exigem reavaliação médica imediata pelo risco de desidratação grave ou infecção invasiva.",
      "armadilhaBanca": "Confundir evolução habitual ou sinais de boa hidratação (diurese preservada, boa aceitação hídrica) com critérios de gravidade."
    },
    "mapaDistratores": {
      "A": "A melhora do apetite e a redução na frequência das evacuações indicam recuperação clínica, não gravidade.",
      "B": "Diarreia aguda há 2 dias sem vômitos, febre ou sangue nas fezes pode ser manejada no domicílio com Plano A.",
      "D": "Diurese preservada e boa aceitação de líquidos demonstram estado de hidratação satisfatório.",
      "E": "Um episódio autolimitado com duração inferior a 48 horas representa evolução benigna sem sinais de alarme."
    }
  }
];
