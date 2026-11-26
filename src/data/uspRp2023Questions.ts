import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa USP-RP 2023 — Acesso Direto (100 questões: 99 válidas + 1 anuladas).
 * Extraída deterministicamente com gabarito oficial e comentários ancorados em diretrizes.
 */
export const USP_RP_2023_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-usp-rp-2023-001",
    "code": "Q-USPRP23-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia Pediátrica",
    "subtema": "Leucemia Linfoblástica Aguda — Investigação Inicial",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino de 8 anos, previamente hígido, apresenta quadro de dor intensa nos joelhos e tornozelos, que o impede de caminhar. Refere que o quadro iniciou há 30 dias, com piora progressiva. A dor é pior no período noturno e o acorda algumas vezes durante a noite. Nega traumas ou infecções recentes. Perdeu 2 quilos no período. Ao exame físico: regular estado geral, fácies de dor, adenomegalia cervical e inguinal com gânglios de até 2 cm, bilaterais, não coalescentes, de consistência fibroelástica. Dor intensa e limitação à movimentação de joelhos e tornozelos, sem edema ou outras alterações. Exames complementares iniciais: Hb; 10g/dL, GB: 3.200/mm³ (20% neutrófilos, 80% linfócitos), plaquetas: 240.000/mm³, VHS 50 mm/1 hora, proteína C reativa 7 mg/dl (VR: abaixo de 0,5 mg/dl). Com relação à principal hipótese diagnóstica, qual o exame a ser solicitado nesse momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ecocardiograma.",
        "explanation": "Incorreta: A suspeita principal não é febre reumática ou cardiopatia congênita, mas sim neoplasia hematológica, não havendo indicação inicial de ecocardiograma.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Anticorpo antinuclear.",
        "explanation": "Incorreta: O FAN é solicitado na suspeita de colagenoses/lúpus, mas dor óssea noturna intensa com citopenias e perda ponderal impõe o afastamento imediato de leucemia.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Análise de líquido sinovial.",
        "explanation": "Incorreta: A punção articular estaria indicada na suspeita de artrite séptica aguda (monoartrite com flogose exuberante e febre alta), o que não corresponde ao quadro subagudo e multifocal com citopenias.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Mielograma.",
        "explanation": "Correta: O quadro de dor óssea metafisária que acorda a criança à noite, associado a perda ponderal, linfoadenopatia generalizada, anemia e leucopenia/neutropenia relativa, é altamente sugestivo de Leucemia Linfoblástica Aguda (LLA). O exame padrão-ouro para o diagnóstico confirmatório é o aspirado de medula óssea (mielograma).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Quadro clássico de Leucemia Linfoblástica Aguda (LLA) na infância mimetizando queixas reumatológicas. A dor óssea decorre da infiltração e expansão leucêmica na cavidade medular, caracteristicamente noturna. Diante de citopenias e sintomas constitucionais, o mielograma é mandatório.",
    "perolaClinica": "Dor musculoesquelética noturna que acorda a criança associada a citopenias e linfadenopatia é LLA até que se prove o contrário; a conduta é mielograma.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2667
  },
  {
    "id": "q-usp-rp-2023-002",
    "code": "Q-USPRP23-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "subtema": "Doença Diarreica Aguda, Disenteria e Plano B de Reidratação",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 5 anos, queixa-se de vômitos 3 vezes ao dia há 3 dias, acompanhados de diarreia aquosa de médio volume, 5 vezes ao dia. Hoje a mãe notou que a criança está apática, com dor abdominal e diminuição das evacuações. Não está se alimentando adequadamente. Exame físico: regular estado geral, descorado +/4+, febril, hidratado. Aparelho respiratório: sem alterações. Aparelho cardiovascular: 2 bulhas rítmicas normofonéticas sem sopros, FC: 130 bpm, PA: 90 x 50 mmHg, pulsos cheios, tempo de enchimento capilar: 2 segundos. Abdome: distensão abdominal, com dor à palpação difusa e ruídos hidroaéreos diminuídos. Exames laboratoriais: Na: 135 mEq/L, K: 2,9 mEq/L, Ca iônico: 1,2 mg/dl. Escala de Alvarado modificada: 3. Qual a hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Constipação intestinal.",
        "explanation": "Incorreta: A criança apresentava quadro diarreico agudo infeccioso de início há 3 dias; a parada das evacuações acompanhada de distensão e ruídos diminuídos é secundária ao quadro hidroeletrolítico, não constipação funcional.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Íleo paralítico.",
        "explanation": "Correta: Perdas gastrointestinais volumosas por vômitos e diarreia provocaram hipocalemia grave (K: 2,9 mEq/L). A redução do potássio sérico hiperpolariza o músculo liso intestinal, levando à atonia intestinal, diminuição dos ruídos hidroaéreos e distensão abdominal característica do íleo paralítico (metabólico).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Apendicite aguda.",
        "explanation": "Incorreta: O escore de Alvarado modificado é 3 (baixa probabilidade de apendicite), o abdome tem dor difusa sem sinais de peritonite localizada e há clara explicação metabólica com diarreia prévia e hipocalemia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Adenite mesentérica.",
        "explanation": "Incorreta: A adenite mesentérica cursa com quadro que mimetiza apendicite após IVAS, geralmente com diarreia ausente ou branda e sem marcada atonia intestinal hipocalêmica.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O íleo paralítico na infância frequentemente decorre de distúrbios hidroeletrolíticos após gastroenterite aguda, principalmente a hipocalemia. A correção venosa cuidadosa do potássio e reposição volêmica restabelecem o trânsito intestinal normal.",
    "perolaClinica": "Diarreia e vômitos que evoluem com distensão abdominal, parada de eliminação de fezes e RHA abolidos indicam íleo paralítico por hipocalemia.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Terapia de Reidratação Oral — Ministério da Saúde",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2667
  },
  {
    "id": "q-usp-rp-2023-003",
    "code": "Q-USPRP23-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia Pediátrica",
    "subtema": "Cardiopatias Congênitas Cianóticas — Transposição das Grandes Artérias (TGA) e Prostaglandina E1",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 8 anos, sexo feminino, vem a consulta devido a arroxeamento dos lábios e unhas, além de cansaço durante esforços físicos. Esses episódios começaram há cerca de 1 ano e estão se tornando mais frequentes. Nega internações prévias e quadros de chiados no peito. Familiar refere que no primeiro ano de vida, época em que fez puericultura, foi observado sopro sistólico e desconforto respiratório, porém médico disse que paciente devia ter \"algum buraquinho no coração que fecharia sozinho\". Refere também que sentia uma vibração torácica em região de rebordo esternal esquerdo baixo, mas que desapareceu ao longo dos anos. Qual hipótese diagnóstica deve ser investigada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transposição de grandes artérias.",
        "explanation": "Incorreta: A TGA é uma cardiopatia congênita com cianose neonatal precoce e grave nas primeiras horas a dias de vida, necessitando de patência do canal arterial para sobrevida imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Comunicação interatrial.",
        "explanation": "Incorreta: A CIA isolada cursa com hiperfluxo pulmonar de baixa pressão e raramente evolui para síndrome de Eisenmenger na infância, com sopro em foco pulmonar e desdobramento fixo de B2.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tetralogia de Fallot.",
        "explanation": "Incorreta: A Tetralogia de Fallot apresenta estenose pulmonar anatômica, logo não há hiperfluxo e hipertensão arterial pulmonar progressiva com reversão tardia de shunt.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Síndrome de Eisenmenger.",
        "explanation": "Correta: A história descreve uma cardiopatia acianótica com shunt E-D (como uma grande CIV, indicada pelo sopro com frêmito em REEB na infância inicial). Sem correção cirúrgica, o hiperfluxo gerou remodelamento vascular pulmonar, hipertensão pulmonar fixa, inversão do shunt para D-E, desaparecimento do sopro de CIV e surgimento de cianose progressiva aos esforços (Síndrome de Eisenmenger).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A síndrome de Eisenmenger é o estágio final da doença vascular pulmonar obstrutiva secundária a grandes shunts intracardíacos ou extracardíacos não tratados. A reversão do fluxo (direita-esquerda) gera hipoxemia crônica, policitemia secundária e cianose periférica/central.",
    "perolaClinica": "Criança com histórico de sopro holossistólico na primeira infância que desaparece, evoluindo com cianose aos esforços na idade escolar, apresenta Síndrome de Eisenmenger.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Cardiopatias Congênitas no Adulto — SBC",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2667
  },
  {
    "id": "q-usp-rp-2023-004",
    "code": "Q-USPRP23-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumopediatria",
    "subtema": "Crise Asmática Moderada/Grave na Infância — Conduta na Emergência",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 7 anos de idade, diagnosticada com asma aos 6 anos, com base na história clínica e espirometria. Nega uso de medicações de uso contínuo. Nos últimos 6 meses, vem apresentando tosse e dispneia diariamente e despertar noturno, devido à tosse, 3 vezes por semana. Como deve ser o tratamento inicial?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Corticoide inalado associado a teofilina.",
        "explanation": "Incorreta: A teofilina é uma metilxantina com estreita faixa terapêutica e alto risco de toxicidade, não sendo recomendada na terapia de controle inicial na infância.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Corticoide inalado associado a montelucaste.",
        "explanation": "Incorreta: Antagonistas de receptores de leucotrienos (montelucaste) são opções de segunda linha ou alternativas em monoterapia de baixa intensidade, inferiores à associação de CI com LABA para asma moderada/grave não controlada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Corticoide inalado associado a beta 2 de ação prolongada.",
        "explanation": "Correta: Criança de 7 anos com asma grave/não controlada (sintomas diários e despertares noturnos múltiplos por semana) requer início direto na etapa 3 ou 4 do GINA (6 a 11 anos), cuja terapia de controle preferencial consiste na associação de corticoide inalatório (CI) com broncodilatador de longa duração (LABA).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Corticoide inalado associado a imunobiológico.",
        "explanation": "Incorreta: Os imunobiológicos (anti-IgE, anti-IL-5, anti-IL-4R) são restritos à etapa 5 do GINA em asma grave refratária com fenótipo T2 alérgico/eosinofílico após otimização da dose máxima de CI + LABA.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Conforme a Global Initiative for Asthma (GINA) para a faixa etária de 6 a 11 anos, quando o paciente se apresenta sem tratamento prévio mas com sintomas diários frequentes e despertares noturnos, inicia-se o tratamento no Step 3/4 com a combinação fixa de Corticoide Inalatório em dose baixa/média com LABA.",
    "perolaClinica": "Asma não controlada em maiores de 6 anos com sintomas diários e despertares noturnos exige início direto com CI + LABA.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Global Initiative for Asthma (GINA) 2023/2024",
      "Diretrizes da Sociedade Brasileira de Pneumologia e Tisiologia (SBPT) para o Manejo da Asma"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2668
  },
  {
    "id": "q-usp-rp-2023-005",
    "code": "Q-USPRP23-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Reumatologia Pediátrica",
    "subtema": "Púrpura de Henoch-Schönlein (Vasculite por IgA)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 10 anos apresenta dor e edema em tornozelos e lesões cutâneas, principalmente em membros inferiores e nádegas, há 5 dias (foto), sem nenhuma outra queixa. O restante do exame físico está sem alteração. Há 20 dias, apresentou quadro de infecção respiratória. Exames complementares: Hb: 14 g/dL, GB: 7.200/mm³ (40% neutrófilos, 60% linfócitos), plaquetas: 480.000/mm³, VHS 40 mm/1 hora, proteína C reativa 3 mg/dl (VR: abaixo de 0,5 mg/dl), urina rotina sem alterações. Ultrassonografia de abdome normal. Além de observar a evolução do quadro, qual a conduta terapêutica nesse momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Analgésico.",
        "explanation": "Correta: Trata-se de vasculite por IgA (Púrpura de Henoch-Schönlein), caracterizada por púrpura palpável sem plaquetopenia em membros inferiores e artralgia/artrite de tornozelos após infecção respiratória. Sem manifestações gastrointestinais graves ou nefrite ativa (urina I normal), a conduta é puramente sintomática com repouso e analgésicos comuns.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Corticoide.",
        "explanation": "Incorreta: Os glicocorticoides estão indicados apenas em casos de dor abdominal moderada a grave, invaginação intestinal, nefrite rapidamente progressiva, orquite grave ou hemorragia pulmonar, não alterando o curso da púrpura cutânea ou artralgia isolada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Dapsona.",
        "explanation": "Incorreta: A dapsona é indicada em dermatoses neutrofílicas e hanseníase, não tendo papel na fase aguda autolimitada da vasculite por IgA na infância.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Tacrolimus.",
        "explanation": "Incorreta: Tacrolimus é um imunossupressor inibidor de calcineurina reservado para transplantes ou formas refratárias de doenças reumatológicas graves sob protocolo especializado.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Vasculite por IgA (Púrpura de Henoch-Schönlein) é uma vasculite de pequenos vasos mediada por imunocomplexos de IgA, autolimitada na grande maioria das crianças. O tratamento de suporte com analgesia simples e acompanhamento da função renal e pressão arterial é a conduta padrão.",
    "perolaClinica": "Na Vasculite por IgA sem acometimento renal ou gastrointestinal grave, o tratamento é exclusivamente sintomático com analgésicos e repouso.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Vasculites na Infância — Sociedade Brasileira de Pediatria (SBP)",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2668,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q005.png",
      "modality": "Fotografia Clínica",
      "caption": "Púrpura palpável simétrica em membros inferiores e glúteos em pré-escolar/escolar",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-006",
    "code": "Q-USPRP23-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "subtema": "Ingestão de Corpo Estranho na Infância",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um pré-escolar de 5 anos e 20 kg, foi internado para o tratamento de pneumonia bacteriana adquirida na comunidade. Devido à inapetência e para prevenção de broncoaspiração, foi indicada alimentação por sonda nasogástrica. Após a passagem da sonda pela enfermagem, foi realizada a seguinte radiografia. Qual a conduta imediata mais apropriada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Introduzir mais a sonda.",
        "explanation": "Incorreta: Introduzir mais a sonda agravaria o trauma na via aérea inferior, podendo causar pneumotórax ou perfuração brônquica.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Injetar ar sob ausculta.",
        "explanation": "Incorreta: A ausculta epigástrica de ar é um método falho e perigoso; com a radiografia confirmando trajeto brônquico, injetar ar pode causar lesão pulmonar ou barotrauma.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Liberar a sonda para uso.",
        "explanation": "Incorreta: A administração de dieta na via aérea causaria pneumonia aspirativa grave, asfixia e risco iminente de parada respiratória.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Retirar a sonda.",
        "explanation": "Correta: O controle radiológico pós-sondagem nasogástrica revelou intubação inadvertida da árvore traqueobrônquica (a sonda seguiu a traqueia e o brônquio principal). A conduta obrigatória e imediata antes de qualquer infusão é a retirada da sonda.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O posicionamento de sonda enteral na árvore brônquica é uma complicação grave e potencialmente fatal. O padrão-ouro para checagem da posição antes do uso é a radiografia de tórax e abdome superior. Diante do trajeto intrapulmonar, a remoção deve ser imediata.",
    "perolaClinica": "Sonda enteral na árvore traqueobrônquica em radiografia de controle exige remoção imediata para evitar lesão da via aérea e aspiração.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo de Segurança na Terapia Nutricional Enteral — ANVISA",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2669,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q006.png",
      "modality": "Radiografia",
      "caption": "Radiografia torácica mostrando sonda nasogástrica anômala progredindo pela árvore brônquica",
      "aspectRatio": "4:3"
    }
  },
  {
    "id": "q-usp-rp-2023-007",
    "code": "Q-USPRP23-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Endocrinologia Pediátrica",
    "subtema": "Puberdade Precoce — Investigação Inicial",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você examina um recém-nascido, primeiro filho de um casal jovem, saudável e sem consanguinidade. Foi uma gestação muito aguardada e todo o acompanhamento pré- natal foi completo e sem intercorrências. Entretanto, aos 6 meses de gestação realizaram também um exame de sexagem fetal, cujo resultado (46, XY) foi discrepante dos achados da ultrassonografia fetal. Durante o exame físico, você não encontra nenhuma outra anormalidade aparente e o exame da região genital é mostrado na figura abaixo. O exame ultrassonográfico não encontrou útero e demais derivados Mullerianos. Considerando que o resultado do exame citogenético seja de fato confirmado, qual é o provável diagnóstico desta criança?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome de resistência androgênica.",
        "explanation": "Correta: Cariótipo 46,XY associado à ausência de derivados Müllerianos (útero/tubas ausentes pelo efeito normal do Hormônio Antimülleriano produzido pelos testículos) e genitália externa feminina/atípica define a Síndrome de Insensibilidade Aos Andrógenos (Resistência Androgênica completa ou parcial / Síndrome de Morris), decorrente de mutação no gene do receptor androgênico.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Hiperplasia adrenal congênita por deficiência de 21 hidroxilase.",
        "explanation": "Incorreta: A deficiência de 21-hidroxilase cursa com cariótipo 46,XX, presença de útero e ovários normais ao ultrassom e virilização da genitália externa por acúmulo de andrógenos adrenais.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Síndrome de Rokitansky (Mayer Rokitansky Kuster Hauser).",
        "explanation": "Incorreta: A síndrome de Rokitansky cursa com cariótipo 46,XX, genitália externa tipicamente feminina, ovários funcionantes e agenesia de derivados Müllerianos (útero e dois terços superiores da vagina).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Disgenesia gonadal mista.",
        "explanation": "Incorreta: A disgenesia gonadal mista cursa mais tipicamente com mosaicismo 45,X/46,XY e frequentemente há persistência de derivados Müllerianos pela produção inadequada de AMH pela gônada disgenética.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na Síndrome de Insensibilidade aos Andrógenos (46,XY), as gônadas são testículos que produzem AMH normalmente (fazendo os ductos de Müller regredirem, portanto sem útero) e testosterona, porém a insensibilidade periférica ao receptor de andrógenos impede a virilização dos ductos de Wolff e da genitália externa.",
    "perolaClinica": "Cariótipo 46,XY com genitália externa feminina e ausência de útero ao ultrassom é Síndrome de Insensibilidade aos Andrógenos (Morris).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Anomalias da Diferenciação do Sexo — SBP",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2669,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q007.png",
      "modality": "Fotografia Clínica",
      "caption": "Genitália externa com aspecto feminino/ambíguo sem orifício vaginal pérvio evidente",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-008",
    "code": "Q-USPRP23-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia Pediátrica",
    "subtema": "Distúrbios da Coagulação na Infância (Deficiência de Fator VII)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino de 3 anos é trazido à consulta pediátrica com história de hematoma em perna direita desproporcional após trauma na região. Mãe refere equimoses e epistaxes ocasionais. Nega outras queixas e história familiar de sangramento. Ao exame: Hematoma de 6 x 6 cm em região de panturrilha direita. Equimose em axila esquerda de 2 x 3 cm e em região dorsal de 3 x 4 cm. Ausência de petéquias. Restante do exame físico sem alterações. Exames complementares: Hb: 12,5 g/dL, GB: 7.600/µL (48% neutrófilos, 52% linfócitos), plaquetas: 245.000/µL. TTPA ratio: 1,1 (VR < 1,3); TP INR: 2,4 (VR < 1,2); TT ratio: 1,1 (VR < 1,2). Com base na história e exames acima, qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deficiência do fator V ou X.",
        "explanation": "Incorreta: Os fatores V e X fazem parte da via comum da coagulação; sua deficiência levaria ao prolongamento concomitante do Tempo de Protrombina (TP) e do TTPA.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Deficiência do fator VIII, IX ou XI.",
        "explanation": "Incorreta: As deficiências dos fatores VIII (Hemofilia A), IX (Hemofilia B) e XI (Hemofilia C) alteram exclusivamente a via intrínseca da coagulação, prolongando o TTPA com TP/INR normal.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Doença de von Willebrand.",
        "explanation": "Incorreta: A Doença de von Willebrand afeta a hemostasia primária (tempo de sangramento alterado) e pode prolongar o TTPA (por redução da meia-vida do fator VIII), mantendo o TP normal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Deficiência do fator VII.",
        "explanation": "Correta: O prolongamento isolado do Tempo de Protrombina (INR 2,4) com TTPA (1,1) e TT normais aponta exclusivamente para a via extrínseca da cascata da coagulação, cujo único fator exclusivo testado é o Fator VII.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A via extrínseca da coagulação é avaliada pelo Tempo de Protrombina (TP/INR). Como o fator VII é o único fator participante unicamente da via extrínseca (iniciada pelo fator tecidual), o seu déficit congênito ou adquirido cursa com alargamento isolado do TP com TTPA rigorosamente normal.",
    "perolaClinica": "TP/INR alargado com TTPA normal aponta para defeito exclusivo da via extrínseca: pense em deficiência de Fator VII.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Hematologia Pediátrica — SBP",
      "Manual de Coagulopatias Hereditárias — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2670
  },
  {
    "id": "q-usp-rp-2023-009",
    "code": "Q-USPRP23-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas / Terapia Intensiva",
    "subtema": "Sepse e Choque Séptico em Pediatria",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pré-escolar de 4 anos com história de trauma contuso em membro inferior esquerdo há 5 dias, evoluiu com febre, associada a edema, hiperemia, dor e calor no membro há 2 dias. Há 12 horas, encontra-se apático e alternando irritabilidade com sonolência. Chega à sala de emergência com frequência cardíaca 160 bpm, frequência respiratória 30 ipm, pressão arterial 70/20 mmHg, saturação de oxigênio 95%, tempo de enchimento capilar menor que 1 segundo, com extremidades quentes e avermelhadas e pulsos bem amplos. Os exames laboratoriais mostram: pH 7,30, PO2 100 mmHg, PCO₂ 30 mmHg, bicarbonato 15 mEq/L, base excess 10, sódio 140 mEq/L, potássio 4,0 mEq/L, cloro 103 mEq/L. Qual é o diagnóstico do distúrbio acidobásico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Acidose metabólica de ânion gap aumentado e alcalose respiratória.",
        "explanation": "Incorreta: A compensação respiratória pela fórmula de Winter para HCO3 de 15 mEq/L é PaCO2 = (1,5 x 15) + 8 ± 2 = 30,5 ± 2 mmHg (faixa de 28,5 a 32,5). A PaCO2 medida é 30 mmHg, estando exatamente na faixa esperada de compensação fisiológica, sem distúrbio respiratório adicional.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Acidose metabólica de ânion gap normal.",
        "explanation": "Incorreta: O ânion gap está elevado: AG = Na - (Cl + HCO3) = 140 - (103 + 15) = 22 mEq/L (VR: 8 a 12 mEq/L), decorrente da acidose láctica pelo choque séptico distributivo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Acidose metabólica de ânion gap normal e alcalose respiratória.",
        "explanation": "Incorreta: O ânion gap é aumentado (22 mEq/L) e não há alcalose respiratória primária associada, já que a PaCO2 de 30 reflete resposta compensatória normal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Acidose metabólica de ânion gap aumentado.",
        "explanation": "Correta: Trata-se de choque séptico (",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A criança apresenta choque distributivo secundário a infecção de partes moles, desenvolvendo acidose láctica. O cálculo do ânion gap resulta em 22 mEq/L (elevado) e o cálculo da PaCO2 esperada por Winter confere PaCO2 de 30,5 ± 2 mmHg (valor real = 30 mmHg), confirmando acidose metabólica de ânion gap aumentado compensada puramente.",
    "perolaClinica": "Fórmula de Winter: PaCO2 esperada = 1,5 x [HCO3] + 8 ± 2. Se a PaCO2 observada estiver na faixa, a compensação é adequada e não há distúrbio misto.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes PALS (Pediatric Advanced Life Support) — AHA",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2670
  },
  {
    "id": "q-usp-rp-2023-010",
    "code": "Q-USPRP23-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura / Desenvolvimento Infantil",
    "subtema": "Marcos do Desenvolvimento Neuropsicomotor aos 11 Meses",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante uma consulta de rotina de puericultura, a mãe de uma criança de 8 meses relata que está preocupada porque o seu filho ainda não consegue sentar sem apoio. A criança nasceu a termo e não há outras queixas; teste do pezinho: sem alterações. Você observa, durante a consulta, que a criança necessita de auxílio para passar da posição supina para a sentada, mas uma vez nessa posição permanece estável, sem cair. Restante do exame físico sem alterações. Qual a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Manter retorno regular de puericultura.",
        "explanation": "Correta: O marco motor de sentar sem apoio com bom equilíbrio do tronco é tipicamente adquirido entre os 6 e 9 meses de idade. A criança de 8 meses já é capaz de manter-se sentada sem apoio de forma estável após ser colocada na posição; a capacidade de passar ativamente da posição supina para sentada sem ajuda é um marco subsequente, esperado por volta dos 9 a 10 meses. O desenvolvimento é normal.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Solicitar dosagem sérica de TSH e T4 livre.",
        "explanation": "Incorreta: O teste do pezinho foi normal e não há sinais clínicos de hipotireoidismo congênito (macroglossia, hérnia umbilical volumosa, constipação, letargia).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitar eletroneuromiografia e dosagem sérica de CPK.",
        "explanation": "Incorreta: A eletroneuromiografia e CPK são indicadas na suspeita de doenças neuromusculares (ex.: Atrofia Muscular Espinhal), que cursariam com hipotonia difusa, arreflexia e regressão de marcos motores, ausentes no caso.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Solicitar tomografia computadorizada de crânio.",
        "explanation": "Incorreta: Não há assimetria motora, convulsões, macrocefalia ou atraso patológico do neurodesenvolvimento que justifiquem exame de imagem cerebral com radiação.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A avaliação dos marcos do desenvolvimento neuropsicomotor deve diferenciar a manutenção da postura estável sentada (marco dos 6 aos 9 meses) do ato de transicionar sozinho de deitado para sentado (geralmente aos 9-10 meses). A criança descrita é plenamente saudável e deve seguir puericultura de rotina.",
    "perolaClinica": "Aos 8 meses, sentar com equilíbrio quando colocada é esperado; passar ativamente deitada para sentada surge por volta dos 9-10 meses.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Caderneta da Criança — Ministério da Saúde",
      "Diretrizes de Vigilância do Desenvolvimento — Sociedade Brasileira de Pediatria (SBP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2671
  },
  {
    "id": "q-usp-rp-2023-011",
    "code": "Q-USPRP23-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia Pediátrica",
    "subtema": "Doença Falciforme — Crise Vaso-Oclusiva (Dactilite) e Diagnóstico",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 2 anos, com anemia falciforme, é levada pelos pais ao pronto socorro com queixa de dor abdominal importante e em membros. Mãe refere que criança iniciou com tosse, coriza e febre há 2 dias e refere que hemoglobina basal da criança geralmente fica em torno de 8 g/dL. Ao exame: prostrada, palidez importante, febril, ictérica. Frequência cardíaca 180 bpm, frequência respiratória 30 ipm, saturação de oxigênio 96%, PA 80 x 50 mmHg. Fígado a 2 cm do rebordo costal direito e baço a 8 cm do rebordo costal esquerdo. Exames laboratoriais: Hb 2,9 g/dL; Ht 11%; VCM 78; HCM 21,8; plaquetas 68 mil/µL; GB 14 mil/µL (3% bastonetes); contagem de reticulócitos: 17,43% (VR: 0,5 - 2,1%); bilirrubinas: total 2 mg/dL; direta 0,4 mg/dL; LDH: 1827 U/L(VR: 85 - 227 U/L). Diante deste cenário, qual é a hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Anemia aplástica.",
        "explanation": "Incorreta: A crise aplástica (geralmente associada ao Parvovírus B19) cursa com queda acentuada da hemoglobina, porém com contagem de reticulócitos muito baixa (reticulocitopenia) e sem esplenomegalia aguda volumosa.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Crise vaso oclusiva.",
        "explanation": "Incorreta: A crise vaso-oclusiva dolorosa acomete ossos e articulações, mas não explica por si só a queda crítica de Hb (de 8 para 2,9 g/dL) acompanhada de choque hipovolêmico e esplenomegalia aguda maciça.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Sequestro esplênico.",
        "explanation": "Correta: O sequestro esplênico agudo é uma emergência hematológica fatal típica em menores de 2 a 5 anos com anemia falciforme. Caracteriza-se pelo represamento maciço de sangue no baço, cursando com esplenomegalia súbita e dolorosa, queda acentuada da hemoglobina, trombocitopenia por consumo/sequestro e resposta reticulocitária exuberante (reticulócitos 17,43%).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Síndrome torácica aguda.",
        "explanation": "Incorreta: A síndrome torácica aguda cursa com febre, taquipneia, dor torácica, hipoxemia e infiltrado pulmonar novo ao radiograma, o que não foi relatado.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O sequestro esplênico é uma das principais causas de óbito precoce na anemia falciforme. A tríade clássica consiste em: queda súbita e grave da hemoglobina (> 2 g/dL abaixo do basal), esplenomegalia aguda e reticulocitose compensatória. O tratamento imediato requer ressuscitação volêmica cautelosa e transfusão de hemácias.",
    "perolaClinica": "Lactente com anemia falciforme, choque hipovolêmico, queda abrupta da Hb, reticulocitose e baço palpável volumoso: Sequestro Esplênico Agudo.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Eventos Agudos na Doença Falciforme — Ministério da Saúde",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2671
  },
  {
    "id": "q-usp-rp-2023-012",
    "code": "Q-USPRP23-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "subtema": "Ingestão de Corpo Estranho na Infância",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pré escolar com 4 anos é trazido ao pronto socorro com relato de ter ingerido objeto enquanto brincava no quintal de sua casa. Mãe refere que no momento da ingestão criança relatou dor na boca, chorou muito e apresentou cianose em lábios que se resolveu espontaneamente. No momento apresenta sialorreia discreta, sem qualquer outra manifestação. Você indica realização de radiografia a seguir.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Observação clínica e radiografia controle em 24 horas.",
        "explanation": "Incorreta: Baterias impactadas no esôfago provocam necrose de liquefação por corrente elétrica e liberação de hidróxido em até 2 horas; a observação é contraindicada pelo altíssimo risco de perfuração e fístula aortoesofágica.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Remoção endoscópica de urgência.",
        "explanation": "Correta: A ingestão de corpo estranho circular com imagem em duplo anel (halo duplo) é patognomônica de bateria de botão (pilha de lítio/disco). Localizada no esôfago e associada a sialorreia, constitui emergência absoluta com indicação formal de remoção endoscópica de urgência (em menos de 2 horas).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Induzir vômito para eliminação do corpo estranho.",
        "explanation": "Incorreta: Induzir vômitos é formalmente contraindicado em ingestão de corpos estranhos pelo risco de broncoaspiração e laceração de mucosa esofágica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Remoção de urgência por broncoscopia.",
        "explanation": "Incorreta: O corpo estranho está alojado no trato digestivo (esôfago proximal/médio), não na via aérea; o método para remoção é a endoscopia digestiva alta, não a broncoscopia.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Baterias de botão impactadas no esôfago geram circuito elétrico local associado à hidrólise, alcalinização rápida dos tecidos e necrose tecidual profunda em poucas horas. A remoção endoscópica deve ser realizada em caráter de emergência imediata.",
    "perolaClinica": "Radiografia com sinal do duplo halo em esôfago indica bateria de botão: remoção endoscópica imediata de urgência.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Recomendações da Sociedade Brasileira de Pediatria (SBP) — Ingestão de Baterias",
      "NASPGHAN Clinical Practice Guideline for Foreign Body Ingestion"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2671,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q012.png",
      "modality": "Radiografia",
      "caption": "Radiografia cervical/torácica mostrando objeto radiopaco com sinal do duplo halo/anel em esôfago",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-013",
    "code": "Q-USPRP23-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumopediatria",
    "subtema": "Pneumonia Adquirida na Comunidade (PAC) — Diagnóstico e Laboratório",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 4 anos, levado ao pronto atendimento com história de coriza há 5 dias, evoluiu com tosse produtiva e febre há 2 dias, hiporexia leve. Mãe nega doentes em casa, criança frequenta escolinha, apresenta vacinação em dia. Peso 16,8 kg, previamente hígido. Ao exame: estado geral bom, corado, hidratado, acianótico, anictérico; frequência respiratória 36 irpm, sem retrações, com boa expansibilidade torácica. Ausculta pulmonar: murmúrios presentes bilateralmente, presença de estertores crepitantes localizados em terço médio à direita. Qual a conduta mais adequada para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar amoxicilina oral e retorno em 48 horas.",
        "explanation": "Correta: Pré-escolar de 4 anos com Pneumonia Adquirida na Comunidade (PAC), em bom estado geral, frequência respiratória normal para a idade (< 40 irpm aos 4 anos) e sem sinais de desconforto/tiragens ou hipoxemia, tem indicação de tratamento ambulatorial. O antimicrobiano de primeira escolha é a amoxicilina oral, com reavaliação clínica obrigatória em 48 a 72 horas.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Iniciar ceftriaxone endovenoso e internar.",
        "explanation": "Incorreta: A internação com ceftriaxone endovenoso é reservada para PAC grave (sinais de desconforto respiratório, hipoxemia, incapacidade de ingerir líquidos ou falha terapêutica ambulatorial).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Prescrever penicilina benzatina e retorno em 48 horas.",
        "explanation": "Incorreta: A penicilina benzatina não fornece níveis séricos pulmonares adequados para o tratamento de pneumonia comunitária por Streptococcus pneumoniae, sendo indicada para faringoamigdalite estreptocócica e sífilis.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Prescrever azitromicina e liberar.",
        "explanation": "Incorreta: Macrolídeos como azitromicina cobrem germes atípicos, incomuns como etiologia primária em pré-escolares saudáveis; o principal agente bacteriano é o pneumococo, sendo a amoxicilina a droga de escolha.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Organização Mundial da Saúde (OMS) e a Sociedade Brasileira de Pediatria (SBP) recomendam que crianças entre 2 meses e 5 anos com pneumonia comunitária sem sinais de gravidade (sem tiragem subcostal, estridor em repouso, cianose ou FR elevada de risco) sejam tratadas ambulatorialmente com amoxicilina oral por 5 a 7 dias.",
    "perolaClinica": "PAC não grave na infância sem sinais de perigo ou desconforto trata-se ambulatorialmente com amoxicilina em altas doses.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade em Pediatria — SBP",
      "Manual da OMS para Atenção Integrada às Doenças Prevalentes na Infância (AIDPI)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2672
  },
  {
    "id": "q-usp-rp-2023-014",
    "code": "Q-USPRP23-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação (PNI — Atualizações)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 15 meses é filha de mãe com infecção pelo HIV que realizou tratamento pré-natal irregular. A criança apresentou exames de carga viral do HIV indetectáveis ao nascimento, com 15 dias, com 6 semanas e com 12 semanas de vida. Comparece com a mãe na sala de vacina regularmente e hoje se apresenta para receber a imunização de rotina de 15 meses. Legenda: SCR: sarampo, caxumba e rubéola. VOP: vacina oral contra poliomielite. DPT: difteria, tétano e coqueluche. VIP: vacina inativada contra poliomielite. Entre as vacinas que poderão ser administradas estão:",
    "alternativas": [
      {
        "letter": "A",
        "text": "DPT, VIP, febre amarela, SCR.",
        "explanation": "Incorreta: A vacina febre amarela não faz parte da rotina padrão de 15 meses do PNI nacional (sua aplicação padrão no PNI ocorre aos 9 meses e reforço aos 4 anos).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "DPT, VOP, varicela, hepatite A.",
        "explanation": "Incorreta: A VOP (vírus vivo atenuado) é estritamente contraindicada para crianças expostas ou infectadas pelo HIV (e para seus contactantes domiciliares), devendo-se utilizar exclusivamente a VIP.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "SCR, DPT, VOP, hepatite A.",
        "explanation": "Incorreta: Contém a VOP, que é contraindicada em crianças expostas ao HIV, que devem receber a vacina inativada (VIP).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "SCR, varicela, DPT, VIP.",
        "explanation": "Correta: Aos 15 meses de vida, as vacinas de rotina são: DTP (1º reforço), Poliomielite (reforço com VIP em crianças expostas ao HIV para evitar a poliomielite vacinal), SCR e Varicela (ou tetraviral, desde que a criança não apresente imunodeficiência grave, estando a infecção descartada ou assintomática) e Hepatite A.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Crianças expostas ao HIV, mesmo quando os testes preliminares de PCR forem negativos, não devem receber a vacina oral da poliomielite (VOP - vírus vivo atenuado) pelo risco de paralisia flácida associada à vacina (PAV), devendo receber a vacina inativada (VIP). As vacinas de vírus atenuado SCR e varicela podem ser aplicadas com segurança na ausência de imunossupressão grave.",
    "perolaClinica": "Criança exposta ao HIV nunca recebe vacina oral atenuada da poliomielite (VOP); deve receber a vacina inativada (VIP).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Normas e Procedimentos para Vacinação — Ministério da Saúde",
      "Guia Prático de Imunizações da Sociedade Brasileira de Pediatria (SBP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2672
  },
  {
    "id": "q-usp-rp-2023-015",
    "code": "Q-USPRP23-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "subtema": "Glomerulonefrite Rapidamente Progressiva e Consumo de Complemento",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino com 8 anos e história de feridas na perna há 15 dias. Há 5 dias evoluiu com edema palpebral e urina escurecida. Exame físico: edema palpebral e de membros inferiores, frequência respiratória 20 ipm, murmúrio vesicular presente, simétrico, com alguns estertores nas bases, estase jugular discreta; frequência cardíaca 80 bpm, PA 120 x 80 mmHg, fígado palpável a 2,5 cm do rebordo costal direito. Exames laboratoriais: urina tipo 1: proteína ++/4+, leucócitos 60 a 80 por campo; hemácias incontáveis; ureia 71 mg/dL; creatinina 0,7 mg/dL. Qual o tratamento medicamentoso inicial mais indicado para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prednisona.",
        "explanation": "Incorreta: Corticosteroides não estão indicados na Glomerulonefrite Difusa Aguda Pós-Estreptocócica (GNDAPE) típica, pois se trata de doença mediada por imunocomplexos com resolução espontânea.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Enalapril.",
        "explanation": "Incorreta: Os IECA não são a droga inicial em vigência de retenção hidrossalina aguda e disfunção renal inicial, podendo piorar a filtração glomerular e causar hipercalemia aguda.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Amoxicilina + clavulanato.",
        "explanation": "Incorreta: A antibioticoterapia não altera a evolução clínica da nefropatia nem previne a glomerulonefrite (ao contrário da febre reumática), não sendo o tratamento da congestão circulatória.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Furosemida.",
        "explanation": "Correta: Trata-se de Síndrome Nefrítica clássica (GNDAPE) pós-piodermite (latência de 2 a 3 semanas), manifestada por edema, hipertensão, hematúria macroscópica (urina escura) e sinais de sobrecarga hídrica (hepatomegalia, estertores em bases pulmonares e turgência jugular). O tratamento medicamentoso de escolha para promover a depleção volêmica e controlar a hipertensão é o diurético de alça (Furosemida).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na síndrome nefrítica pós-estreptocócica, a hipertensão arterial e o edema decorrem primariamente da retenção hidrossalina por queda da taxa de filtração glomerular. O tratamento primordial baseia-se em restrição hidrossalina e uso de furosemida intravenosa ou oral para descompressão volêmica.",
    "perolaClinica": "Na GNDAPE com sobrecarga volêmica e hipertensão, a conduta medicamentosa inicial imediata é a Furosemida.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Nefrologia Pediátrica — Sociedade Brasileira de Pediatria (SBP)",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2672
  },
  {
    "id": "q-usp-rp-2023-016",
    "code": "Q-USPRP23-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "subtema": "Atresia de Vias Biliares e Transplante Hepático",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com 6 meses, apresenta história de icterícia, colúria e acolia desde um mês de idade. Apresenta bom desenvolvimento pondero estatural, sendo alimentada por aleitamento materno e papas. Exame físico: ictérico ++/4, fígado a 3 cm do rebordo costal direito, firme; baço a 2 cm do rebordo costal esquerdo. Exames laboratoriais: bilirrubinas totais = 7,3 mg/dL; bilirrubina direta = 5,1 mg/dL; TGO = 245 U/L (Valor de Referência [VR] < 31); TGP = 295 U/L (VR < 31); GamaGT = 400 U/L (VR < 50); INR = 1,5 (VR < 1,3); albumina = 3,0 g/dL (VR: 3,5 - 5). Ultrassom abdominal: fígado com bordas rombas, contornos lobulados, aumento difuso da ecogenicidade; presença de massa fibrosa de forma triangular situada na porção cranial da bifurcação da veia porta; esplenomegalia. Biópsia hepática percutânea: fibrose moderada, com septos e nódulos; proliferação de ductos biliares e frequentes lagos biliares. Com base no seu principal diagnóstico etiológico, qual a melhor opção para esta criança?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colangiografia intraoperatória.",
        "explanation": "Incorreta: A colangiografia intraoperatória é padrão diagnóstico precoce, mas inadequada como conduta resolutiva diante de cirrose avançada estabelecida aos 6 meses de vida.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Colangiografia endoscópica retrógrada.",
        "explanation": "Incorreta: A CPRE não tem papel terapêutico na atresia de vias biliares e não reverte a falência hepática já instalada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Transplante hepático.",
        "explanation": "Correta: A tríade de icterícia colestática persistente, acolia fecal e sinal do cordão triangular ao ultrassom confirma Atresia de Vias Biliares (AVB). Contudo, aos 6 meses de idade com cirrose confirmada por biópsia (fibrose moderada com nódulos e septos), coagulopatia e esplenomegalia, o momento da portoenterostomia de Kasai já passou (eficaz apenas se < 60-90 dias). A única opção terapêutica definitiva é o transplante hepático.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Cirurgia de Kasai.",
        "explanation": "Incorreta: A cirurgia de Kasai (portoenterostomia) tem eficácia restrita quando indicada precocemente (idealmente antes de 60 a 90 dias de vida). Aos 6 meses, já na presença de cirrose consolidada, o procedimento tem taxa de falha quase absoluta e pode criar aderências que dificultam o transplante posterior.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Atresia de Vias Biliares não tratada precocemente evolui inexoravelmente para cirrose biliar secundária nos primeiros meses de vida. Quando o diagnóstico ocorre tardiamente (aos 6 meses) com confirmação histológica de cirrose hepática constituída, o transplante hepático é a melhor indicação.",
    "perolaClinica": "Atresia de vias biliares com diagnóstico tardio aos 6 meses e cirrose comprovada tem indicação direta de transplante hepático.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes para Manejo da Colestase Neonatal — Sociedade Brasileira de Pediatria (SBP) e NASPGHAN",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2672
  },
  {
    "id": "q-usp-rp-2023-017",
    "code": "Q-USPRP23-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura / Aleitamento Materno",
    "subtema": "Desenvolvimento Neuropsicomotor — Transtorno do Espectro Autista (TEA)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma criança de quatro anos com deficiência intelectual e diagnóstico de síndrome de Down é avaliada por atraso de fala. Apresenta déficit de comunicação, socialização, estereotipias motoras e hipersensibilidade aos estímulos auditivos e táteis. Qual a provável comorbidade dessa criança?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transtorno do movimento estereotipado.",
        "explanation": "Incorreta: Embora haja estereotipias motoras, o diagnóstico de transtorno do movimento estereotipado não é dado quando os comportamentos ocorrem no contexto de TEA com prejuízo sociocomunicativo global.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Apraxia de fala na infância.",
        "explanation": "Incorreta: A apraxia de fala infantil afeta a programação motora dos sons da fala, mas não justifica os déficits de reciprocidade socioemocional, estereotipias e hipersensibilidade sensorial.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Transtorno do espectro autista.",
        "explanation": "Correta: A síndrome de Down confere risco substancialmente aumentado para o Transtorno do Espectro Autista (TEA). Os sintomas apresentados pela criança preenchem integralmente os dois pilares centrais do DSM-5 para TEA: 1) déficits persistentes na comunicação e interação social em múltiplos contextos; e 2) padrões restritos e repetitivos de comportamento, interesses ou atividades (estereotipias e hiper-reatividade a estímulos sensoriais).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Déficit de atenção e hiperatividade.",
        "explanation": "Incorreta: O TDAH cursa primariamente com desatenção, hiperatividade motora e impulsividade desproporcionais à idade, não abrangendo desvio na sociabilidade primária e alterações sensoriais complexas típicas do TEA.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Transtorno do Espectro Autista (TEA) pode coexistir com anomalias cromossômicas, como a Trissomia do 21 (Síndrome de Down). O reconhecimento precoce de déficits na comunicação social aliado a estereotipias e hiper-reatividade sensorial é fundamental para intervenção interdisciplinar precoce.",
    "perolaClinica": "Déficit sociocomunicativo persistente associado a estereotipias motoras e hipersensibilidade sensorial em criança com Down indica a comorbidade de TEA.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual Diagnóstico e Estatístico de Transtornos Mentais — DSM-5-TR",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2673
  },
  {
    "id": "q-usp-rp-2023-018",
    "code": "Q-USPRP23-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Reanimação Neonatal — Ventilação com Pressão Positiva (SBP 2022)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido atendido em sala de parto de uma maternidade. Nasceu de parto normal com 40 semanas de idade gestacional, após uma gestação sem intercorrências; bolsa rota há 2 horas, com líquido amniótico meconiado. Imediatamente após o nascimento, o recém-nascido apresentava choro forte, tônus muscular em flexão e cianose generalizada. Foi secado rapidamente, colocado em contato pele a pele com a mãe e coberto com tecido seco e aquecido. Qual é a conduta imediata mais adequada na assistência a este recém-nascido?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Oferecer oxigênio inalatório suplementar.",
        "explanation": "Incorreta: A cianose generalizada transitória nos primeiros minutos de vida em RN com choro vigoroso e bom tônus é comum (demora até 10 minutos para SatO2 atingir 90%); não se indica oxigênio inalatório.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Avaliar a frequência cardíaca, o tônus e a respiração.",
        "explanation": "Correta: Segundo as Diretrizes de Reanimação Neonatal da SBP (2022), o RN a termo, vigoroso (respirando/chorando e com tônus em flexão), independentemente da presença de mecônio, deve ir para o contato pele a pele com a mãe. Durante esse período, a equipe deve manter avaliação contínua e vigilante da frequência cardíaca, do padrão respiratório e do tônus muscular.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Levar ao berço de reanimação, sob fonte de calor radiante.",
        "explanation": "Incorreta: Levar à mesa de reanimação só é indicado se o recém-nascido for não vigoroso (apneia, respiração irregular ou hipotonia) ou apresentar desconforto respiratório persistente.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Posicionar o pescoço em hiperextensão.",
        "explanation": "Incorreta: O posicionamento da via aérea deve ser neutro (leve extensão); a hiperextensão pode colapsar a traqueia cartilaginosa do recém-nascido e obstruir a via aérea.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Nas diretrizes de assistência em sala de parto para o recém-nascido a termo vigoroso, o contato pele a pele precoce e contínuo é preconizado, mesmo na presença de líquido amniótico meconiado. A vigilância dos sinais vitais (FC, respiração e tônus) deve ser mantida durante todo o procedimento.",
    "perolaClinica": "RN a termo vigoroso (mesmo com mecônio) vai direto para o contato pele a pele com vigilância contínua da FC, tônus e respiração.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Reanimação do Recém-Nascido ≥ 34 Semanas em Sala de Parto — Sociedade Brasileira de Pediatria (SBP) 2022"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2673
  },
  {
    "id": "q-usp-rp-2023-019",
    "code": "Q-USPRP23-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Infecções Congênitas — Citomegalovírus Congênito",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido de parto normal, a termo, após uma gestação sem intercorrências. Mãe de 25 anos, G2, saudável, com acompanhamento pré-natal adequado. As sorologias maternas foram negativas com 10 semanas de gestação e no momento do parto (HIV, VDRL, toxoplasmose IgG/IgM, hepatites B e C). Ao nascimento, foi observado que o recém-nascido apresentava peso no percentil 4 para a idade gestacional, petéquias em face e tronco, hepatoesplenomegalia e microcefalia. Exames realizados: Hemograma com Hb/Ht normais, séria branca normal, plaquetas 87.000/ µL; TGO 92 U/L (VR até 32 U/L); TGP normal; fundoscopia ocular: sem alterações; ultrassom transfontanelar: presença de calcificações periventriculares; triagem auditiva: ausência de respostas bilateralmente; análise de líquido cefalorraquidiano normal; Qual é o tratamento indicado para a causa mais provável deste quadro?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Aciclovir.",
        "explanation": "Incorreta: O aciclovir é o fármaco de escolha para a infecção neonatal por Herpes Simples vírus (HSV), que cursa com lesões vesiculares, ceratoconjuntivite e encefalite aguda.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Penicilina cristalina.",
        "explanation": "Incorreta: A penicilina cristalina é utilizada no tratamento da neurossífilis/sífilis congênita, na qual as alterações características incluem periostite, osteocondrite, coriza sifilítica e VDRL materno/neonatal positivo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Ganciclovir.",
        "explanation": "Correta: O quadro de microcefalia, petéquias/purpura (",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Sulfadiazina e pirimetamina.",
        "explanation": "Incorreta: Não corresponde à conduta/diagnóstico preconizado pelas diretrizes.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Citomegalovírus (CMV) é a principal causa infecciosa de perda auditiva neurossensorial congênita não hereditária. O achado de calcificações periventriculares na neuroimagem aliado à perda auditiva e microcefalia é clássico. O tratamento com ganciclovir intravenoso ou valganciclovir oral por 6 meses é recomendado para minimizar a progressão do déficit auditivo e sequelas neurocognitivas.",
    "perolaClinica": "Microcefalia com calcificações periventriculares e perda auditiva neurossensorial é CMV congênito; o tratamento é Ganciclovir.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Infecções Congênitas — Sociedade Brasileira de Pediatria (SBP)",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2673
  },
  {
    "id": "q-usp-rp-2023-020",
    "code": "Q-USPRP23-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Clínicas / Toxicologia",
    "subtema": "Intoxicação Aguda por Opioides",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um pré-escolar de 4 anos e 12 kg foi submetido a cirurgia abdominal de baixa complexidade com anestesia geral, sem intercorrências. Ao final do procedimento, recebeu uma dose adicional endovenosa de fentanil e cetoprofeno para analgesia. Veio direto para enfermaria pediátrica, 1 hora após o final da cirurgia. Após 30 minutos, você é chamado para avaliar a criança, pois a mãe diz que ela não acorda. Ao exame físico: corada, hidratada, acianótica, anictérica e afebril. Frequência cardíaca 110 bpm, frequência respiratória 10 irpm, pressão arterial 95 x 55 mmHg, saturação periférica de oxigênio 90% em ar ambiente. Ausculta respiratória mostra murmúrio vesicular simétrico, sem ruídos adventícios. Ausculta cardíaca revela ritmo regular, duas bulhas normofonéticas, sem sopros, pulsos centrais e periféricos fortes, tempo de enchimento capilar 2 segundos. Abdome sem anormalidades. Pupilas mióticas e isocóricas. Com base no quadro clínico acima, qual o tratamento farmacológico imediato mais adequado para esta situação clínica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Haloperidol.",
        "explanation": "Incorreta: O haloperidol é um antipsicótico típico utilizado para controle de delírio agitado ou psicose aguda, contraindicado diante de depressão do SNC e bradipneia.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Flumazenil.",
        "explanation": "Incorreta: O flumazenil é o antídoto específico para intoxicação ou sedação por benzodiazepínicos, ineficaz contra a ação de agonistas opioides como o fentanil.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Glicose.",
        "explanation": "Incorreta: Embora a hipoglicemia deva sempre ser checada no coma, a história de dose recente de opioide associada à clássica miose puntiforme e bradipneia torna a reversão com antagonista opioide a prioridade medicamentosa imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Naloxona.",
        "explanation": "Correta: A tríade de rebaixamento do nível de consciência, depressão respiratória (FR 10 irpm, saturação 90%) e miose puntiforme após administração de fentanil é diagnóstica de toxicidade/overdose por opioide. O tratamento específico imediato é o antagonista competitivo do receptor opioide, a naloxona.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A depressão respiratória induzida por opioides é uma complicação pós-operatória grave. A naloxona intravenosa deve ser titulada para reverter a depressão respiratória sem precipitar crise aguda de dor intensa ou síndrome de abstinência abrupta.",
    "perolaClinica": "Rebaixamento do nível de consciência + bradipneia + miose puntiforme após opioide exige Naloxona imediata.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Pediatric Advanced Life Support (PALS) Provider Manual — AHA",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2674
  },
  {
    "id": "q-usp-rp-2023-021",
    "code": "Q-USPRP23-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Infecções Genitais",
    "subtema": "Úlceras Genitais — Herpes Genital Recorrente",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, 21 anos, 26 semanas de gestação, procura o pronto atendimento referindo lesões genitais muito dolorosas. Informa que as lesões apareceram há três dias, mas não observou vesículas previamente ao aparecimento de lesões. Nega episódios semelhante no passado. Nega queixas em relação a gravidez. Ao exame observa-se a imagem a seguir: Além do alívio da dor e orientações de higiene, qual tratamento deve ser prescrito para esta gestante?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Aciclovir 400 mg 8/8 horas via oral.",
        "explanation": "Correta: O quadro de múltiplas úlceras dolorosas com base eritematosa na vulva é clássico de primoinfecção herpética genital. O Ministério da Saúde e a FEBRASGO recomendam o tratamento antiviral com Aciclovir 400 mg VO 3x/dia (8/8h) por 7 a 10 dias no primeiro episódio durante a gestação, com perfil de segurança bem estabelecido.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Ceftriaxone 500 mg IM dose única.",
        "explanation": "Incorreta: Ceftriaxona é indicada no tratamento de gonococo (uretrite/cervicite) e cancroide (como alternativa), apresentando lesões clínicas distintas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Azitromicina 1 grama via oral dose única.",
        "explanation": "Incorreta: Azitromicina 1 g VO dose única trata cancro mole (*Haemophilus ducreyi*) ou infecções por *Chlamydia trachomatis*, não cobrindo infecção herpética.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Penicilina benzatina 2400.000 UI por duas semanas.",
        "explanation": "Incorreta: Penicilina benzatina trata sífilis (cancro duro na primária, habitualmente úlcera única e indolor; ou secundária/latente).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O herpes genital é uma das principais causas de úlceras genitais agudas muito dolorosas. Durante a gestação, a primoinfecção genital confere risco de transmissão vertical e deve ser prontamente tratada com aciclovir oral, associado a analgesia.",
    "perolaClinica": "Úlceras genitais agrupadas, rasas e muito dolorosas: suspeitar de herpes genital; o tratamento de escolha na gestação é aciclovir oral.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Atenção Integral às Pessoas com Infecções Sexualmente Transmissíveis (PCDT/IST), 2020.",
      "FEBRASGO. Infecções Genitais na Gestação, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2674,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q021.png",
      "modality": "Fotografia Clínica",
      "caption": "Múltiplas pequenas úlceras genitais eritematosas agrupadas em região vulvar compatíveis com herpes genital.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-022",
    "code": "Q-USPRP23-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Urgências",
    "subtema": "Eclâmpsia — Conduta Imediata",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta com 1 parto cesárea anterior, 24 anos, 31 semanas de gestação, é trazida ao centro obstétrico pela família devido quadro de crise convulsiva há 30 minutos. Ao exame: regular estado geral, pressão arterial: 160 x 120 mmHg, frequência respiratória: 24 irpm. Abdome: altura uterina: 32 cm, atividade uterina ausente, ausculta fetal de 150 bpm, sem desacelerações. Toque vaginal: colo posterior, longo, amolecido, impérvio. Equipe inicia administração de sulfato de magnésio e decide pela interrupção da gestação por cesárea. Considerando a maior segurança materna, qual(is) exame(s) é (são) mandatório(s) para orientar o procedimento anestésico cirúrgico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ureia e creatinina.",
        "explanation": "Incorreta: Avaliam a função renal, mas não definem a segurança hemostática para anestesia neuroaxial de urgência.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Fibrinogênio.",
        "explanation": "Incorreta: O fibrinogênio pode estar alterado em quadros graves de coagulopatia de consumo (CIVD/DPP), mas a avaliação inicial para planejamento anestésico baseia-se na contagem de plaquetas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Hemograma.",
        "explanation": "Correta: Pacientes com pré-eclâmpsia grave/eclâmpsia têm alto risco de desenvolver Síndrome HELLP com trombocitopenia grave (< 100.000 ou < 50.000/mm³). A contagem de plaquetas no hemograma é mandatória para determinar a segurança e a escolha da técnica anestésica (bloqueio neuroaxial vs. anestesia geral), prevenindo hematoma espinhal/epidural.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "TP e TTPA.",
        "explanation": "Incorreta: Os testes de coagulação secundária (TP e TTPA) habitualmente permanecem normais na pré-eclâmpsia, a menos que haja complicação com CIVD ou DPP maciço; a trombocitopenia é o achado mais frequente e determinante.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Em gestantes com eclâmpsia que serão submetidas à cesariana de urgência após estabilização com sulfato de magnésio, a contagem de plaquetas (via hemograma) é o exame mais crítico e imediato para a segurança anestésica materna, pois a trombocitopenia contraindica a anestesia neuroaxial devido ao risco de hematoma de neuroeixo.",
    "perolaClinica": "Na eclâmpsia/pré-eclâmpsia grave, o hemograma é mandatório para checar plaquetas antes de definir se a anestesia será neuroaxial ou geral.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Pré-eclâmpsia e Eclâmpsia. Manual de Orientação, 2021.",
      "American College of Obstetricians and Gynecologists (ACOG). Gestational Hypertension and Preeclampsia. Practice Bulletin No. 222, 2020."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2675
  },
  {
    "id": "q-usp-rp-2023-023",
    "code": "Q-USPRP23-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Intercorrências Clínicas",
    "subtema": "Adaptações Fisiológicas da Gestação",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, 34 anos, com 16 semanas de gestação, comparece ao ambulatório de gestação de alto risco para iniciar seguimento de pré-natal. Sem queixas clínicas e obstétricas. Antecedentes pessoais: cardiopatia reumática com válvula metálica, classe funcional I, em uso de warfarin 5 mg uma vez ao dia. O resultado do RNI (Razão Normalizada Internacional) colhido há 1 semana apresenta valor de 1,8 vezes o controle. Qual é a melhor conduta com relação à anticoagulação dessa paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Aumentar a dose de warfarin para 7,5 mg uma vez ao dia.",
        "explanation": "Incorreta: Embora a varfarina seja o anticoagulante mais eficaz em próteses metálicas mecânicas, o RNI de 1,8 está subterapêutico e, na presença de dose limítrofe/baixa de varfarina ou na transição de risco, as diretrizes nacionais recomendam HBPM com controle de fator anti-Xa ou manejo com HBPM em dose plena caso o risco/benefício recomende evitar o dicumarínico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Suspender warfarin e iniciar dose terapêutica de enoxaparina.",
        "explanation": "Correta: Pelas recomendações da Sociedade Brasileira de Cardiologia (SBC) e FEBRASGO sobre gravidez em portadoras de próteses mecânicas, diante de INR subterapêutico e risco de eventos trombóticos/embólicos, a troca imediata para Enoxaparina em dose terapêutica (ajustada pelo anti-Xa) é indicada para reestabelecer anticoagulação segura e eficaz de forma rápida.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Manter a dose de warfarin 5 mg uma vez ao dia.",
        "explanation": "Incorreta: Manter a mesma dose deixará a paciente sob anticoagulação ineficaz (RNI de 1,8, sendo o alvo para prótese mitral de 2,5 a 3,5 ou aórtica 2,0 a 3,0), com altíssimo risco de trombose de prótese.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Suspender warfarin e iniciar AAS 100 mg uma vez ao dia.",
        "explanation": "Incorreta: O AAS isolado não é suficiente para a profilaxia de eventos tromboembólicos em próteses metálicas mecânicas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Gestantes portadoras de prótese valvar mecânica representam extremo risco tromboembólico. Frente a um RNI subterapêutico, a transição e início imediato de heparina de baixo peso molecular (enoxaparina) em dose terapêutica guiada por anti-Xa evita falhas e garante rápida anticoagulação.",
    "perolaClinica": "Prótese metálica na gestação exige anticoagulação rigorosa; diante de RNI subterapêutico com varfarina, institui-se HBPM terapêutica imediatamente.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sociedade Brasileira de Cardiologia (SBC). Diretriz Brasileira de Cardiopatia e Gravidez, 2020.",
      "FEBRASGO. Cardiopatias na Gravidez, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2675
  },
  {
    "id": "q-usp-rp-2023-024",
    "code": "Q-USPRP23-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Assistência Pré-Natal — Exercício Físico e Incompetência Istmocervical",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta com 1 parto normal anterior a termo, 26 anos, 15 semanas de gestação, sem comorbidades prévias. Comparece à consulta para iniciar pré-natal, sem queixas clínicas ou obstétricas. Exame físico: bom estado geral, PA: 105 x 72 mmHg. Peso: 92 kg, estatura: 160 cm. Altura uterina: 18 cm, ausculta de batimentos cardíacos fetais de 142 bpm. Além da suplementação de ferro, qual a conduta mais adequada para essa paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar ácido acetilsalicílico e enoxaparina.",
        "explanation": "Incorreta: A enoxaparina não tem indicação na prevenção de rotina de pré-eclâmpsia em pacientes sem trombofilia grave de alto risco ou SAF.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Iniciar ácido acetilsalicílico e cálcio.",
        "explanation": "Correta: Paciente obesa (IMC = 92/(1,60)² = 35,9 kg/m², obesidade grau II), fator de risco moderado para pré-eclâmpsia. Pelas diretrizes da FEBRASGO, ACOG e Ministério da Saúde, indica-se profilaxia com AAS em baixas doses (100 a 150 mg/dia antes de 16 semanas). Além disso, a suplementação com carbonato de cálcio elementar (1 a 1,5 g/dia) é indicada para populações com baixa ingesta de cálcio na dieta habitual para reduzir o risco de pré-eclâmpsia.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Iniciar ácido acetilsalicílico.",
        "explanation": "Incorreta: O carbonato de cálcio também deve ser associado rotineiramente na prevenção de pré-eclâmpsia em serviços do SUS/Brasil, visto que a ingestão dietética média de cálcio na população é insuficiente.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Não indicar profilaxia medicamentosa.",
        "explanation": "Incorreta: A presença de obesidade confere risco aumentado para pré-eclâmpsia, justificando profilaxia medicamentosa com AAS e cálcio.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A prevenção de pré-eclâmpsia inclui a identificação de fatores de risco clínico (como obesidade com IMC ≥ 30 ou 35). A introdução de AAS em baixas doses associado à suplementação de carbonato de cálcio iniciados precocemente (idealmente entre 12 e 16 semanas) reduz significativamente a incidência de formas precoces e graves da doença.",
    "perolaClinica": "Profilaxia de pré-eclâmpsia em gestantes de risco (ex: obesidade): AAS 100-150 mg/dia iniciado até 16 semanas + Carbonato de Cálcio 1,0-1,5 g/dia.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Pré-eclâmpsia. Manual de Orientação, 2021.",
      "Ministério da Saúde. Manual de Gestação de Alto Risco, 2022."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2675
  },
  {
    "id": "q-usp-rp-2023-025",
    "code": "Q-USPRP23-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Assistência ao Parto — Partograma e Período Expulsivo Prolongado (Fórceps)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, 20 anos, durante o acompanhamento de pré-natal de risco habitual, elabora e registra institucionalmente o seu plano de parto, pelo qual manifesta expressa vontade, dentre outros aspectos, de ser acompanhada durante seu trabalho de parto e parto tanto por sua esposa, como também por uma doula voluntária capacitada e certificada de sua escolha. A equipe assistencial acolhe o plano de parto e promove esclarecimentos e orientações sobre viabilidade de cada tópico abordado. Em relação ao caso, qual a orientação mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Permitir a permanência de uma acompanhante com preferência para esposa.",
        "explanation": "Incorreta: A doula não substitui o acompanhante de livre escolha garantido por lei federal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Permitir a permanência simultânea da esposa e da doula.",
        "explanation": "Correta: A Lei Federal nº 11.108/2005 (Lei do Acompanhante) garante à parturiente o direito à presença de um acompanhante de sua livre escolha (neste caso, a esposa). Além disso, leis estaduais (como em SP) e diretrizes de humanização do parto autorizam expressamente a presença concomitante da doula, por se tratar de apoio contínuo não médico e não substitutivo ao acompanhante.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Permitir a permanência de uma acompanhante com alternância entre a esposa e a doula.",
        "explanation": "Incorreta: Não é necessário nem adequado alternar; a presença de ambos pode ser simultânea.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Permitir a permanência de uma acompanhante com preferência para a doula.",
        "explanation": "Incorreta: Não há preferência da doula em detrimento da acompanhante de escolha afetiva da parturiente.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A legislação brasileira e as boas práticas de atenção ao parto garantem a presença contínua de um acompanhante de livre escolha da gestante durante todo o trabalho de parto, parto e pós-parto imediato. A doula presta suporte físico e emocional complementar, sendo permitida sua presença simultânea à do acompanhante de escolha.",
    "perolaClinica": "A presença da doula não exclui nem substitui o direito da gestante ao acompanhante de sua livre escolha.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei Federal nº 11.108, de 7 de abril de 2005 (Lei do Acompanhante).",
      "Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2675
  },
  {
    "id": "q-usp-rp-2023-026",
    "code": "Q-USPRP23-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Adaptações Fisiológicas da Gestação",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta, 29 anos, com 40 semanas de gestação, comparece a maternidade devido a redução da movimentação fetal nas últimas horas. Sem outras queixas. Nega doenças e não houve intercorrências em seu pré-natal. Exame físico geral normal. Ausência de atividade uterina, altura uterina = 35 cm e frequência cardíaca fetal normal, com percepção de movimento fetal ao exame. Uma cardiotocografia foi realizada (figura). Qual alternativa apresenta a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar parto cesárea imediatamente.",
        "explanation": "Incorreta: A cardiotocografia é hipoativa/não reativa, mas sem desacelerações patológicas agudas que indiquem cesariana de emergência imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Conduta expectante com alta hospitalar.",
        "explanation": "Incorreta: Houve queixa de redução de movimentação fetal e o traçado não reativo exige investigação complementar antes da alta.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Internar para indução do trabalho de parto.",
        "explanation": "Incorreta: A indução imediata sem confirmação do bem-estar fetal ou do perfil de reserva não é a primeira conduta, visto que um feto com sofrimento crônico pode não tolerar a indução.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Realizar perfil biofísico fetal.",
        "explanation": "Correta: Na presença de cardiotocografia não reativa (ausência de acelerações transitórias na avaliação inicial, com variabilidade preservada ou limítrofe e sem contrações), o teste complementar mais rápido e indicado para avaliar a higidez biofísica fetal é o Perfil Biofísico Fetal (PBF), que avalia tônus, movimentos corpóreos, movimentos respiratórios e volume de líquido amniótico.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Frente a uma queixa de diminuição de movimentos fetais a termo com cardiotocografia não reativa/hipoativa sem desacelerações de risco imediato, a conduta propedêutica adequada é prosseguir a investigação da vitalidade com o perfil biofísico fetal (PBF) para afastar hipóxia e orientar a tomada de decisão.",
    "perolaClinica": "Cardiotocografia não reativa sem desacelerações patológicas deve ser complementada por Perfil Biofísico Fetal (PBF) para certificar a higidez fetal.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Avaliação da Vitalidade Fetal Anteparto, 2021.",
      "American College of Obstetricians and Gynecologists (ACOG). Practice Bulletin No. 229: Antepartum Fetal Monitoring, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2676,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q026.png",
      "modality": "Gráfico/Tabela",
      "caption": "Traçado de cardiotocografia anteparto demonstrando linha de base normal, porém sem acelerações transitórias (traçado não reativo).",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-027",
    "code": "Q-USPRP23-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Assistência ao Parto — Partograma e Período Expulsivo Prolongado (Fórceps)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, 32 anos, 41 semanas de gestação de risco habitual. Interna na fase ativa da dilatação para assistência ao parto. Na admissão apresentava sinais vitais e exame físico geral normais, altura uterina = 38 cm, vitalidade fetal normal. A evolução gráfica de seu trabalho de parto está representada abaixo (Figura). Qual é a conduta para após a avaliação das 20h?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Aguardar mais uma hora de período expulsivo.",
        "explanation": "Correta: Pelo partograma, a dilatação total (10 cm) foi alcançada às 19h. Às 20h, decorreu apenas 1 hora de período expulsivo. Em primigesta, o período expulsivo normal pode durar até 2 a 3 horas (especialmente se sob analgesia) desde que a vitalidade fetal permaneça rigorosamente normal e haja progressão; portanto, a conduta correta é aguardar mais uma hora com vigilância contínua.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Realizar parto instrumentalizado.",
        "explanation": "Incorreta: Não há indicação de parto instrumentalizado (fórceps ou vácuo-extrator) sem que haja período expulsivo prolongado/parada de descida documentada ou sofrimento fetal agudo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Realizar amniotomia artificial.",
        "explanation": "Incorreta: A bolsa habitualmente já se rompeu ou não há indicação mandatória de rotura no expulsivo inicial com evolução normal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Estimular a paciente a realizar puxos dirigidos.",
        "explanation": "Incorreta: As diretrizes atuais preconizam puxos espontâneos (fisiológicos) em vez de puxos dirigidos (manobra de Valsalva sustentada), para diminuir morbidade materna e fetal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O período expulsivo em primíparas pode durar até 2 a 3 horas sem configurar distócia, desde que a frequência cardíaca fetal e a mecânica do parto estejam preservadas. Às 20h, completou-se apenas 1 hora do segundo estágio, sendo indicado aguardar com monitorização contínua.",
    "perolaClinica": "Em primigestas, o período expulsivo pode durar até 2-3 horas; na presença de bem-estar fetal, a conduta após 1 hora de expulsivo é aguardar e monitorar.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Diretrizes Nacionais de Assistência ao Parto Normal, 2017.",
      "World Health Organization (WHO). WHO recommendations: intrapartum care for a positive childbirth experience, 2018."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2676,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q027.png",
      "modality": "Gráfico/Tabela",
      "caption": "Partograma demonstrando dilatação cervical completa (10 cm) às 19h e evolução no plano de De Lee às 20h em primigesta.",
      "aspectRatio": "4:3"
    }
  },
  {
    "id": "q-usp-rp-2023-028",
    "code": "Q-USPRP23-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Urgências",
    "subtema": "Abortamento Incompleto Infectado",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta (G2P1N), 33 semanas de gestação, está internada com diagnóstico de corioamniorrexe prematura em conduta expectante há uma semana. Na ocasião do diagnóstico recebeu betametasona e 48 horas de penicilina cristalina. Na avaliação realizada hoje, se queixou de dor abdominal. Exame físico: BEG, temperatura de 38,0ºC, demais sinais vitais e exame físico geral normais. Atividade uterina ausente, feto apresentação cefálica. Vitalidade fetal preservada. Toque: colo posterior, médio, 1 polpa, feto cefálico. Exames laboratoriais: Hemograma: glóbulos brancos = 13.500/mm³, 17% de bastões, plaquetas 180.000/mm³. Swab vaginal/endoanal para Estreptococo do grupo B positivo. Quais as melhores condutas nesse momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Clindamicina, betametasona por 24 horas e resolução da gestação por cesárea.",
        "explanation": "Incorreta: A corioamnionite contraindica nova corticoterapia e exige resolução rápida; além disso, a via de parto não é compulsoriamente cesárea, preferindo-se a via vaginal se o parto puder ocorrer em tempo oportuno.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Clindamicina, penicilina cristalina e indução do trabalho de parto.",
        "explanation": "Correta: A paciente apresenta febre (38°C), dor abdominal e leucocitose com desvio (17% de bastões), configurando corioamnionite clínica (critérios de Gibbs). A conduta mandatória é iniciar antibioticoterapia de amplo espectro de imediato (ex.: clindamicina associada ou ampicilina/penicilina + gentamicina) e interrupção imediata da gestação, sendo a indução do parto vaginal a conduta obstétrica padrão, reservando cesariana apenas para indicações obstétricas.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Amoxicilina, azitromicina, penicilina cristalina e indução do trabalho de parto na 34ª semana.",
        "explanation": "Incorreta: Não se deve aguardar a 34ª semana diante de infecção intra-amniótica; o parto deve ser imediato.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Clindamicina, gentamicina e resolução da gestação por cesárea.",
        "explanation": "Incorreta: A via de parto não é obrigatoriamente cesárea; a infecção ovular não é indicação mandatória de cesariana, devendo-se induzir o parto caso as condições materno-fetais permitam.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O diagnóstico de corioamnionite em paciente com bolsa rota rompe a conduta expectante independentemente da idade gestacional. É mandatória a antibioticoterapia terapêutica venosa imediata e a interrupção da gravidez, sendo a via vaginal preferencial por meio de indução, desde que a vitalidade fetal esteja assegurada.",
    "perolaClinica": "Corioamnionite clínica = Antibioticoterapia venosa imediata + Interrupção da gestação (indução do parto vaginal preferencial).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Rotura Prematura de Membranas Ovulares, 2021.",
      "American College of Obstetricians and Gynecologists (ACOG). Practice Bulletin No. 217: Prelabor Rupture of Membranes, 2020."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2677
  },
  {
    "id": "q-usp-rp-2023-029",
    "code": "Q-USPRP23-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "subtema": "Planejamento Pré-Concepcional e Saúde da População Trans",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, 25 anos, G2P1, idade gestacional de 39 semanas + 3 dias, portadora do vírus da imunodeficiência humana e uso regular de tenofovir+lamivudina+dolutegravir. A carga viral com 35 semanas e 3 dias era: 165 cópias/mL e T CD4: 648 cél/mL. Demais exames sem alterações. Feto cefálico com vitalidade preservada. Qual alternativa contempla a condução mais adequada para este caso, de acordo com o Ministério da Saúde do Brasil?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Cesárea sem zidovudina endovenosa.",
        "explanation": "Incorreta: Não há indicação de cesárea eletiva, pois a carga viral é < 1.000 cópias/mL.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Parto vaginal e zidovudina endovenosa.",
        "explanation": "Correta: De acordo com o Protocolo Clínico do Ministério da Saúde para Prevenção da Transmissão Vertical do HIV, quando a carga viral colhida a partir da 34ª semana é detectável mas inferior a 1.000 cópias/mL (aqui 165 cópias/mL), a indicação da via de parto é por critérios obstétricos (parto vaginal liberado) e o uso de AZT (zidovudina) endovenosa intraparto continua sendo recomendado (o AZT venoso só é dispensado quando a CV é indetectável / < 50 cópias/mL após 34 semanas).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Parto vaginal sem zidovudina endovenosa.",
        "explanation": "Incorreta: A zidovudina endovenosa só é dispensável se a carga viral na 34ª semana for indetectável (< 50 cópias/mL). Como está em 165 cópias/mL, o AZT venoso é formalmente mandatório.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Cesárea e zidovudina endovenosa.",
        "explanation": "Incorreta: A cesariana eletiva na 38ª semana é reservada para gestantes com carga viral ≥ 1.000 cópias/mL ou desconhecida na 34ª semana.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Ministério da Saúde determina que gestantes com HIV em uso de TARV e carga viral entre 50 e 999 cópias/mL após a 34ª semana podem ter parto vaginal por indicação obstétrica, mas devem receber Zidovudina (AZT) endovenosa no trabalho de parto/parto. O AZT EV só é omitido se CV < 50 cópias/mL.",
    "perolaClinica": "Parto no HIV: CV < 50 = parto vaginal sem AZT; CV 50–999 = parto vaginal com AZT EV; CV ≥ 1.000 = cesárea eletiva às 38 semanas com AZT EV.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para Prevenção da Transmissão Vertical do HIV, Sífilis e Hepatites Virais, 2022."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2677
  },
  {
    "id": "q-usp-rp-2023-030",
    "code": "Q-USPRP23-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Diabetes Mellitus Gestacional — Complicações Maternas e Fetais",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta, 24 anos, com 29 semanas de idade gestacional, sem comorbidades prévias à gestação. Retorna à consulta de pré-natal sem queixas. Recebeu diagnóstico de Diabetes Mellitus gestacional há 10 dias, com adequada adesão ao plano nutricional, programa de atividade física e automonitorização glicêmica, porém mantendo se acima das metas glicêmicas em aproximadamente 50% dos valores aferidos. Exame físico geral e obstétrico dentro dos padrões de normalidade. Ganho de peso de 300 gramas em uma semana. Foi indicada insulinoterapia, porém paciente é moradora de área rural com dificuldade de acesso, transporte e armazenamento adequados da insulina. Considerando as recomendações brasileiras de 2019 (Organização Pan Americana da Saúde. Ministério da Saúde. Federação Brasileira das Associações de Ginecologia e Obstetrícia. Sociedade Brasileira de Diabetes), qual a alternativa terapêutica farmacológica mais adequada para essa paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Glibenclamida.",
        "explanation": "Incorreta: A glibenclamida está associada a maior risco de macrossomia fetal e hipoglicemia neonatal quando comparada à metformina e insulina, não sendo a escolha preconizada pelo consenso brasileiro.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Acarbose.",
        "explanation": "Incorreta: A acarbose tem dados escassos de eficácia e segurança na gestação e não é recomendada como alternativa de primeira linha nas diretrizes nacionais.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Liraglutida.",
        "explanation": "Incorreta: Os análogos de GLP-1 (liraglutida) são contraindicados durante a gravidez por falta de dados de segurança e potencial teratogênico.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Metformina.",
        "explanation": "Correta: O consenso brasileiro (OPAS/MS/FEBRASGO/SBD 2019) preconiza a insulina como droga de primeira escolha. Contudo, em situações de extrema dificuldade de acesso, armazenamento seguro ou recusa/impossibilidade do uso de insulina, a Metformina é a única alternativa oral aceita como opção segura e eficaz.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Quando as medidas comportamentais falham no DMG, a insulina é o tratamento padrão. Nas situações em que a insulina é inviável por questões logísticas, socioeconômicas ou recusa materna, o consenso OPAS/MS/FEBRASGO/SBD autoriza o uso da metformina como fármaco alternativo.",
    "perolaClinica": "DMG que não atinge metas: primeira escolha é Insulina; alternativa oral aceita por inviabilidade logística/armazenamento é Metformina.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "OPAS/MS/FEBRASGO/SBD. Rastreamento e Diagnóstico de Diabetes Mellitus Gestacional no Brasil, 2019.",
      "American Diabetes Association (ADA). Standards of Care in Diabetes — Management of Diabetes in Pregnancy, 2023."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2678
  },
  {
    "id": "q-usp-rp-2023-031",
    "code": "Q-USPRP23-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Sangramento Uterino Anormal",
    "subtema": "Sangramento Uterino Grave na Menarca — Coagulopatias (PALM-COEIN)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 30 anos, G2P2, com queixa de sangramento uterino anormal há 5 anos. Não apresenta comorbidades e nem faz uso de medicações. Marido fez vasectomia. No prontuário está descrito como sangramento de causa endometrial. Qual alternativa contém a descrição do ciclo e do achado da ultrassonografia transvaginal (USTV) mais prováveis para este caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ciclo irregular com aumento de volume e USTV com espessamento endometrial difuso.",
        "explanation": "Incorreta: Espessamento endometrial difuso sugere patologia estrutural (hiperplasia) e ciclos anovulatórios (AUB-O).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Ciclo regular com sangramento prolongado e USTV com perda da junção miométrio endométrio.",
        "explanation": "Incorreta: Perda da junção miométrio-endométrio é achado ultrassonográfico típico de adenomiose (AUB-A).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Ciclo regular com aumento de volume e USTV sem alterações.",
        "explanation": "Correta: De acordo com o sistema PALM-COEIN da FIGO, a disfunção endometrial primária (AUB-E) caracteriza-se por ciclos ovulatórios regulares, com sangramento menstrual aumentado (menorragia) decorrente de desregulação local de vasoconstritores (endotelina-1, PGF2alfa) e fibrinólise endometrial, com ultrassonografia transvaginal e cavidade uterina rigorosamente normais.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Ciclo irregular com sangramento prolongado e USTV sem alterações.",
        "explanation": "Incorreta: Sangramento irregular e prolongado com ultrassom normal é típico de disfunção ovulatória (AUB-O), e não de causa primariamente endometrial (AUB-E).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Pelo sistema FIGO (PALM-COEIN), o sangramento por disfunção endometrial (AUB-E) ocorre em mulheres com ciclos ovulatórios e regulares, manifestando-se por fluxo aumentado ou prolongado decorrente de distúrbio intrínseco da hemostasia endometrial, sem lesões estruturais no exame de ultrassom.",
    "perolaClinica": "SUA de causa endometrial (AUB-E): ciclo ovulatório regular com fluxo volumoso e ultrassonografia transvaginal estritamente normal.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FIGO. The two FIGO systems for normal and abnormal uterine bleeding symptoms and classification of causes of abnormal uterine bleeding in the reproductive years, 2018.",
      "FEBRASGO. Sangramento Uterino Anormal. Manual de Orientação, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2678
  },
  {
    "id": "q-usp-rp-2023-032",
    "code": "Q-USPRP23-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia",
    "subtema": "Doença Inflamatória Pélvica (DIP)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 68 anos, queixa-se de prurido vulvar há cerca de 8 meses. A inspeção genital está representada na imagem. Diante do quadro clínico e do exame físico, qual a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Exérese completa com margem de 3 mm.",
        "explanation": "Incorreta: A exérese completa com margem só deve ser planejada após diagnóstico histopatológico definitivo e estadiamento adequado, sob risco de sub ou sobretratamento cirúrgico de um câncer invasor.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Biópsia incisional da borda da lesão.",
        "explanation": "Correta: Mulher idosa com prurido vulvar crônico e lesão exofítica/ulcerada suspeita de neoplasia vulvar (carcinoma espinocelular de vulva). A conduta mandatória inicial para confirmação diagnóstica é a biópsia incisional (ou com punch de Keyes) na margem da lesão, englobando tecido são e lesional.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Corticosteroide de alta potência.",
        "explanation": "Incorreta: Corticosteroide de alta potência (clobetasol) é o tratamento do líquen escleroso, mas lesões vegetantes/ulceradas e nodulares suspeitas exigem biópsia prévia obrigatória para afastar malignidade.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Antibioticoterapia com penicilina benzatina.",
        "explanation": "Incorreta: A lesão vegetante/ulcerada crônica em paciente de 68 anos não tem aspecto de sífilis primária ou secundária.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O câncer de vulva manifesta-se tipicamente em idosas com história crônica de prurido e aparecimento de nódulo, úlcera ou placa exofítica na vulva. Diante de qualquer lesão vulvar suspeita ou resistente a tratamento clínico, a biópsia incisional é o passo inicial indispensável.",
    "perolaClinica": "Toda lesão vulvar nodular, ulcerada ou suspeita em mulher na pós-menopausa deve ser submetida à biópsia incisional antes de qualquer conduta definitiva.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Lesões Precursoras e Câncer de Vulva, 2021.",
      "NCCN Clinical Practice Guidelines in Oncology: Vulvar Cancer, 2023."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2678,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q032.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão ulcerada e vegetante na vulva em mulher idosa, altamente suspeita de carcinoma epidermoide de vulva.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-033",
    "code": "Q-USPRP23-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Mastologia",
    "subtema": "Classificação BI-RADS e Terapia de Reposição Hormonal",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 27 anos, G1P1, usuária de DIU de cobre, menstruando regularmente. Queixa- se de dor intensa em quadrante supero lateral da mama direita, há 3 meses, com piora importante pré-menstrual e melhora parcial após. Está preocupada com histórico de câncer na família, pois tia avó materna teve câncer de mama aos 68 anos. Exame físico: mamas sem nódulos ou lesões. Cadeias linfonodais sem alterações. Dor à palpação de mama direita, às 10 hs. Ultrassonografia de mamas realizada há 10 dias: cistos mamários bilaterais, maior diâmetro 0,5 cm, BI RADS: 2. Qual a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Retorno com ultrassonografia de mamas em 6 meses.",
        "explanation": "Incorreta: BI-RADS 2 representa achado benigno (cistos simples menores de 0,5 cm), sem necessidade de controle semestral precoce.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Solicitar ressonância magnética das mamas.",
        "explanation": "Incorreta: Não há indicação de RNM de mamas para queixa de dor mamária cíclica com ultrassom benigno e ausência de critérios de alto risco genético/familiar (apenas uma tia-avó acometida aos 68 anos não configura risco elevado).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tranquilizar e prescrever anti-inflamatório tópico.",
        "explanation": "Correta: O quadro de mastalgia cíclica (piora pré-menstrual e alívio pós-menstrual), com exame físico normal e cistos simples à ecografia (BI-RADS 2), é uma condição eminentemente benigna. A conduta primordial consiste em tranquilizar a paciente quanto à ausência de câncer, orientar medidas comportamentais e prescrever AINE tópico como sintomático se a dor for limitante.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Teste terapêutico com tamoxifeno 20 mg/dia.",
        "explanation": "Incorreta: O tamoxifeno é reservado para casos graves e refratários de mastalgia severa e incapacitante, devido aos seus potenciais efeitos colaterais adversos (risco tromboembólico, ondas de calor, etc.).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A mastalgia cíclica é uma condição extremamente frequente e benigna na menacme. Diante de exame físico normal e ultrassonografia evidenciando apenas cistos simples (BI-RADS 2), a conduta baseia-se na desmistificação do câncer, tranquilização da paciente e uso de analgésicos/AINEs tópicos.",
    "perolaClinica": "Mastalgia cíclica + BI-RADS 2: conduta é tranquilizar a paciente sobre a benignidade e prescrever AINE tópico.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sociedade Brasileira de Mastologia (SBM). Diagnóstico e Conduta na Mastalgia, 2021.",
      "FEBRASGO. Mastalgia: Diagnóstico e Tratamento, 2020."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2679
  },
  {
    "id": "q-usp-rp-2023-034",
    "code": "Q-USPRP23-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica",
    "subtema": "Sangramento Pós-Menopausa e Câncer de Endométrio",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 62 anos, tratada de câncer de mama há 4 anos, em uso de tamoxifeno 20 mg via oral ao dia. Apresenta sangramento vaginal de pequeno volume há 2 meses. A ultrassonografia transvaginal identificou eco endometrial irregular com 9 mm de espessura, sem outras alterações. A histeroscopia diagnóstica e a biópsia dirigida foram compatíveis com hiperplasia endometrial atípica. Qual a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Repetir a ultrassonografia em 3 meses.",
        "explanation": "Incorreta: Hiperplasia atípica (neoplasia intraepitelial endometrial) é uma lesão pré-maligna de alto risco (risco de carcinoma sincrônico associado de 40-50%), sendo inaceitável a conduta expectante.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Suspender o tamoxifeno e introduzir inibidor da aromatase.",
        "explanation": "Incorreta: A simples troca da medicação não trata a neoplasia intraepitelial já instalada, que exige ressecção cirúrgica curativa.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Histerectomia e salpingooforectomia bilateral.",
        "explanation": "Correta: Paciente menopausada, em uso de tamoxifeno (fator de risco para proliferação endometrial), com diagnóstico histopatológico de hiperplasia endometrial com atipia (neoplasia intraepitelial endometrial). O tratamento padrão de escolha é cirúrgico: histerectomia total com salpingooforectomia bilateral, pela alta taxa de câncer de endométrio coexistente oculto.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Progesterona via oral por 6 meses.",
        "explanation": "Incorreta: O tratamento clínico com progestagênio (VO ou DIU de levonorgestrel) é reservado para mulheres jovens que desejam preservar a fertilidade ou em pacientes com contraindicações cirúrgicas proibitivas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A hiperplasia atípica de endométrio em mulher na pós-menopausa apresenta risco de até 40–50% de abrigar um adenocarcinoma endometrial invasor sincrônico na peça cirúrgica definitiva. Dessa forma, a histerectomia com anexectomia bilateral é o tratamento definitivo e mandatório.",
    "perolaClinica": "Hiperplasia endometrial com atipia na pós-menopausa tem indicação cirúrgica: Histerectomia total com salpingooforectomia bilateral.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ACOG Committee Opinion No. 631: Endometrial Intraepithelial Neoplasia, 2015 (Reaffirmed 2020).",
      "FEBRASGO. Sangramento Pós-Menopausa e Câncer de Endométrio, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2679
  },
  {
    "id": "q-usp-rp-2023-035",
    "code": "Q-USPRP23-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina",
    "subtema": "Hiperprolactinemia e Amenorreia Secundária",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Nuligesta, 21 anos, procura atendimento ginecológico referindo que não menstrua há seis meses. Histórico de ciclos menstruais regulares com intervalos de 28 a 30 dias. Refere cefaleia frequente, que melhora com analgésicos. Em uso de amitriptilina há um ano para tratamento de depressão. Nega alterações ponderais. Faz atividade física regularmente. Sem atividade sexual há dois anos. Exame físico: PA = 90 x 60 mmHg; IMC = 17Kg/m². Mamas M5, sem nódulos e expressão negativa. Exame ginecológico: sem alterações. Exames complementares: prolactina = 112 ng/ml (VN < 25 ng/ml); FSH = 4,0 mlU/ml (VN = 2,5 a 10,2 mlU/ml); TSH = 2,1 mlU/ml (VN = 0,4 a 4,0 mlU/ml). Qual a conduta mais adequada para o caso neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar ressonância magnética de crânio e sela túrcica.",
        "explanation": "Incorreta: A solicitação de RM de sela túrcica deve ser realizada após excluir a causa medicamentosa, especialmente quando os níveis de prolactina permanecem elevados após suspensão/troca da droga indutora.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Dosagem de prolactina 1 semana após troca do antidepressivo.",
        "explanation": "Correta: Antidepressivos tricíclicos como a amitriptilina interferem na dopamina/serotonina e frequentemente causam hiperprolactinemia medicamentosa moderada (habitualmente < 100–150 ng/mL). A diretriz da Endocrine Society e da FEBRASGO recomenda descontinuar ou trocar a medicação suspeita (em conjunto com o médico prescritor) e redosar a prolactina após 7 a 14 dias para confirmar a etiologia farmacológica.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Iniciar cabergolina 0,5 mg 2 vezes por semana.",
        "explanation": "Incorreta: Não se deve iniciar agonista dopaminérgico empiricamente antes de confirmar se a causa é medicamentosa ou tumoral.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Iniciar terapia hormonal com estrogênio e progesterona.",
        "explanation": "Incorreta: Não há indicação de terapia de reposição estrogênica sem antes definir a etiologia e conduzir a causa primária da amenorreia.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Medicamentos com ação no sistema nervoso central (como tricíclicos, antipsicóticos e metoclopramida) são causas clássicas de hiperprolactinemia moderada. A abordagem preconiza afastar causas farmacológicas substituindo ou suspendendo temporariamente a droga e redosando a prolactina antes de solicitar exames de imagem da sela túrcica.",
    "perolaClinica": "Prolactina entre 50 e 150 ng/mL em uso de medicação psicotrópica: troque ou suspenda o fármaco e redose a prolactina antes da ressonância.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Endocrine Society. Diagnosis and Treatment of Hyperprolactinemia: An Endocrine Society Clinical Practice Guideline, 2011.",
      "FEBRASGO. Amenorreia Secundária e Hiperprolactinemia, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2680
  },
  {
    "id": "q-usp-rp-2023-036",
    "code": "Q-USPRP23-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Urgências",
    "subtema": "Abortamento Incompleto Infectado",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 28 anos, procura atendimento ginecológico com queixa de dor pélvica à direita há 2 dias de fraca intensidade, mas que impede de desenvolver suas atividades laborais. Ao exame físico: PA: 120 x 70 mmHg, FC: 84 bpm, abdome plano, normotenso com discreta dor em fossa ilíaca direita à palpação profunda, descompressão brusca negativa. Exames complementares solicitados: Hb: 12,3 g/dl; Ht: 33%, B HCG: 1720,0 mUl/ml, progesterona: 5,2 ng/ml (VR: 11 a 90 ng/ml). Ultrassonografia pélvica: útero AVF, centrado, vol: 110 cm³, ovário esquerdo: 5 cm³, ovário direito: 6,5 cm³, em região anexial direita presença de lesão ovalada, amorfa com 2,2 x 1,9 x 1,7 cm com vascularização aumentada ao redor da lesão, sem líquido livre na cavidade abdominal. Considerando se a possibilidade diagnóstica mais provável, qual a conduta mais apropriada neste momento após internação da paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Laparotomia exploradora",
        "explanation": "Incorreta: Não há indicação de cirurgia de urgência (laparotomia/laparoscopia) em paciente hemodinamicamente estável, com lesão anexial pequena, sem líquido livre na cavidade peritoneal e sem sinais de peritonite.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Cetoprofeno 100 mg EV",
        "explanation": "Incorreta: Analgesia isolada não trata a gravidez ectópica e deixaria a paciente exposta ao risco de rotura tubária.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Observação clínica",
        "explanation": "Incorreta: A conduta expectante é reservada para níveis de beta-hCG muito baixos e em declínio espontâneo (geralmente < 1.000 ou < 200 mUI/mL).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Metotrexate IM 50 mg/m².",
        "explanation": "Correta: O caso preenche todos os critérios para tratamento clínico com Metotrexato (MTX 50 mg/m² IM): estabilidade hemodinâmica, massa anexial íntegra < 3,5–4,0 cm (mede 2,2 cm), beta-hCG < 5.000 mUI/mL (1.720 mUI/mL), ausência de batimentos cardíacos embrionários e ausência de líquido livre moderado/grave.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A gravidez ectópica íntegra em paciente estável pode ser tratada clinicamente com dose única de metotrexato intramuscular (50 mg/m²), desde que observados os critérios de elegibilidade: estabilidade hemodinâmica, saco gestacional < 3,5 cm, beta-hCG < 5.000 mUI/mL e ausência de BCF à ultrassonografia.",
    "perolaClinica": "Ectópica íntegra + paciente estável + massa < 3,5 cm + beta-hCG < 5.000 + sem BCF = indicação de Metotrexato 50 mg/m² IM.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ACOG Practice Bulletin No. 193: Tubal Ectopic Pregnancy, 2018.",
      "FEBRASGO. Gravidez Ectópica, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2680
  },
  {
    "id": "q-usp-rp-2023-037",
    "code": "Q-USPRP23-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Uroginecologia",
    "subtema": "Prolapso de Órgãos Pélvicos — Classificação POP-Q (ICS)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 53 anos, com antecedente de 5 partos vaginais prévios e menopausa há 2 anos. Procura o serviço médico com sensação de peso no períneo e de uma bola que sai pela vagina. O exame ginecológico identificou um prolapso descrito segundo o instrumento POP-Q (Pelvic Organ Prolapse Quantification) conforme mostrado na figura a seguir. Quais os diagnósticos podem ser feitos de acordo com as anotações presentes no POP-Q?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prolapso de parede posterior, rotura perineal, histerectomia prévia.",
        "explanation": "Correta: Na grade do POP-Q: Parede anterior (Aa = -3, Ba = -3, normais); Parede posterior (Ap = +2, Bp = +4, valores positivos indicando prolapso além do hímen = prolapso de parede posterior / retocele); Hiato genital (GH = 5) e Corpo perineal (PB = 1 cm, valor reduzido compatível com rotura perineal); Comprimento vaginal total (TVL = 8); Ponto C = -7 e ponto D ausente/vazio (ou C negativo alto em vagina sem colo), caracterizando histerectomia prévia.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Prolapso de parede anterior, prolapso de cúpula vaginal, histerectomia prévia.",
        "explanation": "Incorreta: A parede anterior está em limites normais anatômicos (Aa = -3 e Ba = -3), portanto não há prolapso de parede anterior.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Prolapso de parede posterior, prolapso uterino grau III, rotura perineal.",
        "explanation": "Incorreta: A paciente não possui útero (ponto C está em -7 com ausência de D), não havendo prolapso uterino.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Prolapso de parede anterior, prolapso uterino grau II, prolapso de parede posterior.",
        "explanation": "Incorreta: Não há prolapso de parede anterior (está -3) nem prolapso uterino.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O sistema POP-Q quantifica o prolapso de órgãos pélvicos em 9 medidas com relação ao anel himenal (linha zero). Os valores de Aa e Ba em -3 indicam parede anterior tópica; Ap (+2) e Bp (+4) revelam prolapso avançado de parede posterior; o corpo perineal (PB) de 1 cm evidencia rotura perineal e a ausência do colo/ponto D com cúpula em -7 revela histerectomia prévia.",
    "perolaClinica": "No POP-Q: valores positivos estão além do hímen. Ausência de ponto D indica paciente histerectomizada.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "International Urogynecological Association (IUGA) / International Continence Society (ICS). POP-Q System, 2016.",
      "FEBRASGO. Distopias Genitais e Uroginecologia, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2680,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q037.png",
      "modality": "Gráfico/Tabela",
      "caption": "Tabela de 9 quadrantes do sistema POP-Q demonstrando medidas do prolapso genital.",
      "aspectRatio": "4:3"
    }
  },
  {
    "id": "q-usp-rp-2023-038",
    "code": "Q-USPRP23-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia",
    "subtema": "Doença Inflamatória Pélvica (DIP)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Nuligesta, 24 anos, há um ano tenta engravidar sem sucesso. Apresenta ciclos menstruais de 27 a 29 dias, com fluxo normal. Tem atividade sexual regular, com relação pênis vagina quatro vezes na semana. Marido de 28 anos, tem três filhos de outro relacionamento e nega comorbidades. Exame físico: sem alterações. Exames complementares: FSH 5,4 mUI/mL (2,8 a 14,4 mUI/mL), TSH 2 µUI/mL (0,3 a 4,0 µUI/mL). Ultrassonografia transvaginal com útero e ovários normais e contagem de folículos antrais de 9 em cada ovário, imagem hipoecogênica alongada em topografia de anexo esquerdo. Histerossalpingografia com cavidade uterina normal, trompa direita filiforme e trompa esquerda dilatada, sem passagem de contraste bilateralmente. Espermograma com volume de 2 mL, 16 milhões de espermatozoides / mL, 50% vivos, 30% de motilidade progressiva e 5% normais (critério de Kruger). Qual o melhor tratamento para este casal?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ciclo de fertilização in vitro",
        "explanation": "Incorreta: Realizar a FIV sem retirar a trompa acometida (hidrossalpinge) reduz as taxas de implantação embrionária pela metade e dobra a taxa de abortamento, devido ao influxo tóxico e mecânico de fluido inflamatório na cavidade endometrial.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Coito programado após indução da ovulação.",
        "explanation": "Incorreta: A obstrução tubária bilateral impede o encontro dos gametas no coito programado.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Ciclo de fertilização in vitro após salpingectomia.",
        "explanation": "Correta: A paciente apresenta fator tuboperitoneal grave de infertilidade, com obstrução tubária bilateral e hidrossalpinge à esquerda (imagem alongada no anexo e trompa dilatada sem passagem de contraste). A conduta padrão para otimizar os resultados reprodutivos é a realização de salpingectomia prévia (ou oclusão tubária proximal) seguida de Fertilização In Vitro (FIV), pois o líquido da hidrossalpinge possui efeito embriotóxico sobre o endométrio.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Inseminação intrauterina após indução da ovulação.",
        "explanation": "Incorreta: A inseminação intrauterina requer obrigatoriamente a perviedade de pelo menos uma tuba uterina para que ocorra a fertilização in vivo.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Frente à obstrução tubária bilateral com hidrossalpinge, a técnica de reprodução assistida de escolha é a fertilização *in vitro* (FIV). No entanto, o fluido da hidrossalpinge é embriotóxico e altera a receptividade endometrial; por isso, a salpingectomia bilateral (ou unilateral da hidrossalpinge) prévia ao ciclo de FIV é indispensável para duplicar as chances de sucesso.",
    "perolaClinica": "Hidrossalpinge reduz pela metade o sucesso da FIV: sempre indicar salpingectomia prévia ao procedimento de reprodução assistida.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ASRM (American Society for Reproductive Medicine). Salpingectomy for hydrosalpinx prior to in vitro fertilization, 2021.",
      "FEBRASGO. Investigação e Manejo do Casal Infértil, 2021."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2681
  },
  {
    "id": "q-usp-rp-2023-039",
    "code": "Q-USPRP23-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Patologia do Trato Genital Inferior",
    "subtema": "Rastreamento do Câncer de Colo Uterino — Conduta frente a ASC-H",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 33 anos, G2PC2, último parto há 3 anos, realizou última coleta de colpocitologia durante o último pré-natal, sem anormalidades citológicas de acordo com a informação da paciente. Refere ciclos menstruais regulares em uso de contraceptivo hormonal injetável mensal. Comparece para checar resultado da colpocitologia que evidencia amostra satisfatória com epitélio metaplásico e cilindrico e anormalidades em células glandulares sem outras especificações. Qual a conduta mais adequada para esta paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar colposcopia.",
        "explanation": "Correta: O achado de Atipias em Células Glandulares sem outras especificações (AGC-SOE / AGC-NOS) tem elevado risco de neoplasias graves subjacentes (adenocarcinoma in situ, adenocarcinoma invasor do colo uterino ou endométrio). Pelas Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero do Ministério da Saúde/INCA, a conduta imediata mandatória é o encaminhamento para colposcopia (com avaliação do canal endocervical).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Realizar ultrassom transvaginal.",
        "explanation": "Incorreta: A ultrassonografia transvaginal e a investigação endometrial (biópsia) podem ser necessárias em mulheres acima de 35 anos ou com sangramento anormal, mas a conduta inicial mandatória para a lesão cervical é a colposcopia.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitar biologia molecular.",
        "explanation": "Incorreta: O teste molecular para HPV não substitui a colposcopia de imediato frente ao resultado de AGC.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Repetir colpocitologia.",
        "explanation": "Incorreta: Nunca se deve simplesmente repetir a citologia em casos de AGC, pois o risco de lesão pré-neoplásica/neoplásica associada é elevado.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O resultado citopatológico com atipias em células glandulares (AGC) decorre frequentemente de lesões cervicais graves ou lesões endometriais. As diretrizes do Ministério da Saúde determinam encaminhamento imediato para colposcopia com avaliação do canal cervical.",
    "perolaClinica": "Resultado citopatológico com atipia glandular (AGC): conduta imediata mandatória é Colposcopia (com avaliação endocervical).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde / INCA. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2016.",
      "ASCCP Management Guidelines for Abnormal Cervical Cancer Screening Tests, 2020."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2681
  },
  {
    "id": "q-usp-rp-2023-040",
    "code": "Q-USPRP23-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "subtema": "Planejamento Pré-Concepcional e Saúde da População Trans",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem trans, 32 anos, hipertenso, comparece para consulta de rotina em UBS. Refere-se relacionar sexualmente com homem cisgênero, e atualmente está em uso regular de contraceptivo oral combinado (COC) contendo levonogestrel (0,15 mg) + etinilestradiol (0,03 mg) para controle de sangramento vaginal volumoso. Refere ter iniciado o uso de testosterona em outro serviço há 2 meses. Exame físico: sem lesões ou achados anormais ao exame da genitália. Qual a melhor conduta clínica neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trocar para anel ou adesivo contraceptivo e suspender a testosterona.",
        "explanation": "Incorreta: Anel e adesivo contêm etinilestradiol, o qual permanece contraindicado na presença de hipertensão e causa antagonismo aos efeitos masculinizantes da testosterona.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Prescrever análogo de GnRH e suspender temporariamente a testosterona.",
        "explanation": "Incorreta: O análogo de GnRH não é necessário nessa fase se houver resposta adequada com testosterona e métodos progestagênicos.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Substituir o COC por progestágeno isolado e manter a testosterona.",
        "explanation": "Correta: Homens trans com útero e ovários funcionantes em relações penetrativas com homens cisgênero necessitam de contracepção eficaz, pois a testosterona não é método contraceptivo seguro e possui efeitos teratogênicos. Como o paciente é hipertenso e está em terapia de afirmação de gênero masculina com testosterona, o estrogênio (COC) é contraindicado (aumenta risco cardiovascular e contrapõe a virilização). Deve-se substituir o COC por um método com progestágeno isolado (como DIU de levonorgestrel, implante ou minipílula) ou método não hormonal, mantendo-se a testosterona.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Suspender o COC e manter apenas a testosterona.",
        "explanation": "Incorreta: A testosterona não é um método contraceptivo; gestações indesejadas podem ocorrer mesmo em vigência de amenorreia induzida por andrógenos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Homens trans em uso de testosterona com potencial de gravidez requerem contracepção efetiva, pois os andrógenos não impedem ovulações esporádicas e têm risco teratogênico. O uso de estrogênios é contraindicado devido ao risco cardiovascular e antagonismo aos efeitos virilizantes, devendo-se prescrever progestagênio isolado (ou DIU) mantendo a hormonização.",
    "perolaClinica": "Testosterona NÃO é contraceptivo. Para homens trans com risco de gravidez e hipertensão: indicar método exclusivo de progestágeno ou DIU não hormonal.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO. Manual de Anticoncepção na População LGBTQIA+, 2022.",
      "World Professional Association for Transgender Health (WPATH). Standards of Care Version 8, 2022."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2682
  },
  {
    "id": "q-usp-rp-2023-041",
    "code": "Q-USPRP23-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Rastreamento e Interpretação de Exames na UBS",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "L.C.P. 39 anos, vendedora, sexualmente ativa, procura seu Médico de Família e Comunidade sem queixas, desejando realizar exames, pois \"faz tempo que não realiza\". Como antecedente pessoal, informa ser G1P1A0C0 com parto há 5 anos. Refere cirurgia para implante de prótese mamária por motivo estético há 15 anos. Nega doenças. Refere uso de DIU de cobre há 5 anos. Nega história familiar de doenças. Ao exame físico apresenta IMC 24 kg/m², pele sem lesões, mucosas normocoradas. Além da realização de exame citopatológico do colo do útero e aferição de pressão arterial, qual a ação também está indicada para rastreamento assintomático com evidência científica grau de recomendação A?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Lipidograma.",
        "explanation": "Incorreta: O rastreamento de dislipidemia em mulheres sem fatores de risco cardiovascular maiores não possui recomendação grau A nessa faixa etária (39 anos).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Glicemia de jejum.",
        "explanation": "Incorreta: O rastreamento de diabetes/pré-diabetes é preconizado para adultos com sobrepeso/obesidade ou a partir dos 35-45 anos, não sendo grau A para mulher de 39 anos eutrófica (IMC 24).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Mamografia.",
        "explanation": "Incorreta: O rastreamento mamográfico de rotina no Brasil (MS) é recomendado a partir dos 50 anos (bienal), ou a partir dos 40 anos segundo algumas sociedades, mas não aos 39 anos assintomática.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Rastreamento de tabagismo.",
        "explanation": "Correta: A USPSTF e o Ministério da Saúde recomendam sistematicamente perguntar sobre o uso de tabaco a todos os adultos e orientar a cessação (recomendação grau A).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O rastreamento de tabagismo em todas as consultas na Atenção Primária à Saúde possui nível de evidência e recomendação máxima (grau A pela USPSTF), permitindo intervenções precoces e redução de morbimortalidade. As demais opções não têm recomendação grau A para uma mulher de 39 anos sem comorbidades e eutrófica.",
    "perolaClinica": "Perguntar sobre tabagismo a todo paciente na APS é recomendação grau A com altíssimo impacto preventivo.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "USPSTF Tobacco Smoking Cessation in Adults Recommendation Statement",
      "Cadernos de Atenção Básica nº 29 — Rastreamento (Ministério da Saúde)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2682
  },
  {
    "id": "q-usp-rp-2023-042",
    "code": "Q-USPRP23-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Hanseníase: Diagnóstico Clínico",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "J.F.C. 50 anos, sexo masculino, refere que há 2 anos apresenta câimbras e dormência em perna esquerda. Nega história de traumatismo, cirurgias ou lesões na pele. Nega lombalgia. Nega doenças crônicas e uso de medicamentos. Ao exame: IMC 28 Kg/m², PA 134 x 78 mmHg. FC 68 bpm. Pele sem lesões visíveis. AR: MV + sem RA. ACV: RCR 2BNF, sem sopros. Abdome indolor, sem massas ou VMG. MMII: sem edema, com nervo fibular comum à esquerda palpável e o seguinte exame de sensibilidade com estesiômetro. Qual a suspeita diagnóstica mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hanseníase com comprometimento neural.",
        "explanation": "Correta: O espessamento de tronco nervoso periférico (nervo fibular comum) associado a déficit de sensibilidade no seu território de inervação, na ausência de lesões cutâneas, caracteriza a hanseníase neural pura.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Diabetes com neuropatia diabética.",
        "explanation": "Incorreta: A neuropatia diabética típica é simétrica, distal, em botas e luvas, e o paciente não apresenta diagnóstico ou estigmas de diabetes mellitus.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Hérnia de disco com compressão de raiz nervosa.",
        "explanation": "Incorreta: A compressão radicular (radiculopatia lombar) cursa com dor lombar irradiada em trajeto de dermátomo e piora com manobras de estiramento neural, o que o paciente nega.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Distúrbio hidroeletrolítico.",
        "explanation": "Incorreta: Distúrbios hidroeletrolíticos provocam manifestações difusas e flutuantes, sem espessamento localizado de nervo periférico ou déficit sensitivo focal crônico.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A hanseníase neural pura (primária) manifesta-se por espessamento neural periférico e alteração de sensibilidade correspondente ao trajeto do nervo acometido, sem lesões cutâneas típicas. A palpação do nervo fibular comum alterada com teste do monofilamento alterado sela a forte suspeita.",
    "perolaClinica": "Espessamento de nervo periférico com perda sensitiva focal, mesmo sem manchas na pele, é hanseníase neural até que se prove o contrário.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes para Vigilância, Atenção e Eliminação da Hanseníase (Ministério da Saúde)",
      "Protocolo Clínico e Diretrizes Terapêuticas da Hanseníase"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2682,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q042.png",
      "modality": "Gráfico/Tabela",
      "caption": "Mapeamento sensitivo com monofilamentos de Semmes-Weinstein no pé esquerdo evidenciando hipoestesia em trajeto de nervo fibular.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-043",
    "code": "Q-USPRP23-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação (PNI — Atualizações)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 5 meses e 17 dias vem para consulta de puericultura com seu médico de família e mãe apresenta o cartão vacinal abaixo. Segundo o Calendário Nacional de vacinação apresentado, qual vacina está em atraso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Febre Amarela.",
        "explanation": "Incorreta: A vacina da Febre Amarela é administrada rotineiramente aos 9 meses de vida pelo PNI.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Pentavalente.",
        "explanation": "Incorreta: A Pentavalente é aplicada aos 2, 4 e 6 meses; aos 5 meses e 17 dias, a dose dos 4 meses já foi realizada e a dos 6 meses ainda não venceu.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "VIP.",
        "explanation": "Incorreta: A vacina inativada contra poliomielite (VIP) é recomendada aos 2, 4 e 6 meses, estando em conformidade com o cronograma atual da criança.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Meningocóccica C.",
        "explanation": "Correta: Pelo Calendário Nacional de Vacinação do PNI, a vacina meningocócica C conjugada tem esquema aos 3 e aos 5 meses de idade; com 5 meses e 17 dias sem a 2ª dose, ela está em atraso.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O esquema básico da vacina meningocócica C no PNI preconiza duas doses: a primeira aos 3 meses e a segunda aos 5 meses de idade, com reforço aos 12 meses. Uma criança de 5 meses e 17 dias que não recebeu a dose de 5 meses está com essa vacina em atraso.",
    "perolaClinica": "Meningocócica C no PNI: 3 meses e 5 meses, com reforço aos 12 meses de idade.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Normas e Procedimentos para Vacinação (Ministério da Saúde / PNI)",
      "Calendário de Vacinação da Sociedade Brasileira de Pediatria (SBP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2683,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q043.png",
      "modality": "Gráfico/Tabela",
      "caption": "Cartão de vacinação infantil demonstrando registro de vacinas até os 4 meses de vida.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-044",
    "code": "Q-USPRP23-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Demência por Corpos de Lewy",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 75 anos vem à consulta de saúde acompanhada da filha que refere que sua mãe está apresentando muitos esquecimentos, há aproximadamente 6 meses. Paciente é hipertensa, diabética e faz uso de losartana 50 mg 1 comprimido ao dia e glifage XR 500 mg 2 comprimidos ao dia. Paciente estudou até a 8º série do ensino médio. Ao exame clínico: PA: 120 x 80 mmHg, FC: 71 bpm, FR:16 ipm Peso: 60 Kg, Alt: 1.65 m, IMC: 22, saturação de O₂: 98% dextro: 110 mg/dl. Exames laboratoriais: vitamina B12: 400 (VR: 210 - 980 pg/ml), TSH: 2.80 (VR: 0.3 - 4.8), MEEM: 28 pontos. GDS (Escala de Depressão Geriátrica): 8. De acordo com o quadro descrito acima, qual o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hipotireoidismo.",
        "explanation": "Incorreta: O TSH está rigorosamente na faixa de normalidade (2,80 mUI/L, VR: 0,3 a 4,8).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Síndrome demencial.",
        "explanation": "Incorreta: O MEEM de 28 pontos em idosa escolarizada afasta declínio cognitivo evidente com critério demencial no momento.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Transtorno depressivo.",
        "explanation": "Correta: A Escala de Depressão Geriátrica (GDS) pontuou 8 (ponto de corte para rastreio positivo é usualmente > 5), configurando quadro depressivo, que frequentemente cursa com queixas de déficit de memória (pseudodemência depressiva).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Hipovitaminose de B12.",
        "explanation": "Incorreta: A dosagem de vitamina B12 encontra-se normal (400 pg/ml, VR: 210 a 980).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Em idosos com queixa de esquecimento recente, exames laboratoriais normais e MEEM preservado (28 pontos), a pontuação elevada na GDS (8 pontos) confirma sintomas depressivos expressivos como causa principal das alterações subjetivas de memória (pseudodemência).",
    "perolaClinica": "Queixa de memória em idoso com cognição preservada e GDS elevada indica pseudodemência depressiva.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Associação Brasileira de Psiquiatria (ABP)",
      "Caderno de Atenção Básica nº 19 — Envelhecimento e Saúde da Pessoa Idosa (MS)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2684
  },
  {
    "id": "q-usp-rp-2023-045",
    "code": "Q-USPRP23-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia / Atenção Primária à Saúde",
    "subtema": "Tuberculose em População em Situação de Rua (PSR)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 35 anos, trabalha como pedreiro e comparece à unidade de saúde para uma consulta, acompanhado de sua esposa, pois acha estranho o marido estar com tosse há 1 mês. Paciente relata que no início a tosse era seca e que atualmente está com catarro. Acha que perdeu peso porque suas roupas estão mais largas e que, frequentemente, tem tido febre quando chega do trabalho à tarde. A esposa declara que o marido geralmente apresenta febre de 38,5ºC e que durante à noite transpira bastante. Não é hipertenso e nem diabético. Nega problemas pulmonares na infância. É tabagista de paieiro há 15 anos. À ausculta pulmonar observa-se murmúrio vesicular reduzido. Qual seria o melhor exame para confirmar o diagnóstico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hemograma completo.",
        "explanation": "Incorreta: O hemograma pode mostrar anemia inflamatória ou leucocitose, mas não confirma a etiologia da doença.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Hemocultura.",
        "explanation": "Incorreta: A hemocultura convencional não tem utilidade para o diagnóstico de tuberculose pulmonar em imunocompetentes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Baciloscopia de escarro.",
        "explanation": "Correta: Tosse por mais de 3 semanas, febre vespertina, sudorese noturna e perda de peso definem o sintomático respiratório com alta suspeita de tuberculose; a baciloscopia ou o teste rápido molecular (TRM-TB) no escarro confirmam o diagnóstico.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Espirometria.",
        "explanation": "Incorreta: A espirometria avalia distúrbios ventilatórios obstrutivos ou restritivos, não sendo teste etiológico para infecção bacteriana ativa.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O paciente preenche a definição de sintomático respiratório clássico com sintomas B (febre vespertina, emagrecimento e sudorese noturna). O método direto de confirmação laboratorial preconizado na APS é o exame de escarro (baciloscopia direta ou teste rápido molecular para M. tuberculosis).",
    "perolaClinica": "Tosse > 3 semanas + febre vespertina e sudorese noturna = investigar tuberculose com exame de escarro.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde)",
      "Protocolo Clínico e Diretrizes Terapêuticas da Tuberculose"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2684
  },
  {
    "id": "q-usp-rp-2023-046",
    "code": "Q-USPRP23-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Secundária / Induzida por Fármacos",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com 44 anos do sexo feminino de raça negra vem em retorno para avaliação de exames e acompanhamento de pressão arterial alterada, não fuma, faz uso de álcool aos finais de semana. Na consulta verificado pressão arterial de 142 x 92 mmHg, além de IMC de 38. Resultados de exames: Glicemia de jejum: 109 mg/dl, colesterol total: 207 mg/dl, HDL colesterol: 58 mg/dl, triglicérides: 190mg/dl, creatinina: 1,1 mg/dl, sódio: 142 mEq/l, potássio: 4,9 mEq/l, ácido úrico: 5,1 mg/dl, urina tipo 1: sem alterações. Valores de referência: Glicemia 70 - 100 mg/dl Colesterol total: < 200 mg/dl HDL Colesterol: 40 - 60 mg/dl Triglicérides: < 150 mg/dl Creatinina: < 1,3 mg/dl Sódio: 135 - 145 mEq/l Potássio: 3,5 - 5,5 mEq/l Ácido Úrico: 4,0 - 7,0 mg/dl. Qual tratamento é o mais indicado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Beta bloqueador.",
        "explanation": "Incorreta: Os betabloqueadores não são fármacos de primeira linha no manejo da hipertensão primária não complicada.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Vasodilatador direto.",
        "explanation": "Incorreta: Vasodilatadores diretos (como hidralazina) são reservados para hipertensão refratária ou situações específicas com indicação formal.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Bloqueador de canal de cálcio.",
        "explanation": "Correta: Em pacientes de etnia negra, os bloqueadores dos canais de cálcio (di-hidropiridínicos) e os diuréticos tiazídicos são mais eficazes como monoterapia inicial devido ao perfil fisiopatológico hiporreninêmico.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Antagonista alfa 1 adrenérgico.",
        "explanation": "Incorreta: Antagonistas alfa-1 adrenérgicos (como doxazosina) são agentes de quarta linha ou mais, usados preferencialmente em homens com HPB associada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "De acordo com a Diretriz Brasileira de Hipertensão Arterial (SBC 2020), para pacientes de raça negra em monoterapia, os bloqueadores dos canais de cálcio ou diuréticos tiazídicos são as classes de escolha de primeira linha por conferirem maior resposta anti-hipertensiva e redução de eventos cardiovasculares.",
    "perolaClinica": "Paciente de etnia negra com HAS: primeira escolha anti-hipertensiva inclui bloqueador de canal de cálcio ou tiazídico.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Hipertensão Arterial (SBC/SBH/SBN 2020)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2684
  },
  {
    "id": "q-usp-rp-2023-047",
    "code": "Q-USPRP23-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Urologia",
    "subtema": "Hiperplasia Prostática Benigna e Retenção Urinária Aguda",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Numa consulta de paciente na unidade de atenção primária do sexo masculino, 47 anos, casado, heteroafetivo, parceira única. O paciente questiona sobre o seu desempenho nas relações sexuais. O mesmo refere que sua ereção não é a mesma de antes e que isso tem ocorrido com mais frequência nesse ano. Paciente nega queixas urinárias como dor, incontinência, jato fraco, hesitação ou sensação de esvaziamento incompleto. Nega alterações ejaculatórias como ejaculação precoce ou diminuição do volume ejaculado. Refere que mantém desejo sexual e que relacionamento está bom, mas parceira tem notado a diferença na ereção. Refere que continua mantendo episódios de ereção reflexa. Nega sintomas de ansiedade ou de depressão, mas que está preocupado em relação ao seu desempenho. Não faz uso de nenhuma medicação, não tem hábitos de tabagismo, etilismo ou de substâncias psicoativas. Refere sedentarismo. Ao Exame físico: IMC de 42 Kg/m². Ausculta cardíaca sem alterações. Pressão Arterial: 128 x 74 mmHg. Sem sinais clínicos de obstrução arterial periférica. Genitais sem lesões, deformidades, testículos normotróficos. Exames: Glicemia: 95 mg/dl; Valor de referência 70 - 100 mg/dl; Colesterol total: 270 mg/dl; Valor de referência 140 - 200 mg/dl; HDL Colesterol: 58 mg/dl; Valor de referência > 45 mg/dl; Triglicérides: 290 mg/dl; Valor de referência < 150 mg/dl; Testosterona total: 429 ng/dl; Valor de referência 250 - 900 ng/dl. Além de recomendar atividade física de maneira regular, orientação sobre resposta sexual e controle do peso, qual seria a melhor terapêutica medicamentosa para o paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Clomipramina.",
        "explanation": "Incorreta: A clomipramina é um antidepressivo tricíclico usado no tratamento da ejaculação precoce, não sendo indicada para disfunção erétil.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Finasterida.",
        "explanation": "Incorreta: A finasterida é um inibidor da 5-alfa-redutase utilizado em HPB e alopecia androgênica, podendo inclusive piorar a função erétil.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alprostadil.",
        "explanation": "Incorreta: O alprostadil intracavernoso ou intrauretral é terapia de segunda linha para pacientes refratários ou que não toleram inibidores orais.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Sildenafila.",
        "explanation": "Correta: Os inibidores da fosfodiesterase tipo 5 (iPDE-5), como a sildenafila ou tadalafila, são a terapia medicamentosa de primeira linha para disfunção erétil na ausência de contraindicações formais (como nitratos orgânicos).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na disfunção erétil de etiologia predominantemente psicogênica ou mista com exames hormonais e cardiovasculares basais normais, o tratamento medicamentoso de escolha inicial são os inibidores da fosfodiesterase tipo 5 (sildenafila), associados a mudanças no estilo de vida.",
    "perolaClinica": "Inibidores da PDE-5 (ex.: sildenafila) são a primeira linha farmacológica para disfunção erétil.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Disfunção Erétil da Sociedade Brasileira de Urologia (SBU)",
      "American Urological Association (AUA) Guidelines on Erectile Dysfunction"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2685
  },
  {
    "id": "q-usp-rp-2023-048",
    "code": "Q-USPRP23-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Infectologia / Atenção Primária à Saúde",
    "subtema": "Infecção Latente pelo Mycobacterium tuberculosis (ILTB)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você é o médico de uma unidade de saúde da família em uma cidade de pequeno porte que faz seguimento dos pacientes portadores do HIV. Você atende um paciente recém diagnosticado com HIV, totalmente assintomático, sem comorbidades. Faz os exames iniciais para investigação e início do tratamento para HIV. Nos exames tem resultado do teste tuberculínico de 15 mm. Sem história de tuberculose no passado. Exames bioquímicos e hemograma normais. Contagem de CD4 370 cel/mm³, carga viral 10000 cópias/ml. Paciente não apresenta queixas respiratórias, exame físico do aparelho respiratório normal e radiografia do tórax normal. Além de iniciar tratamento para HIV, qual a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar isoniazida, pirazinamida, rifampicina e etambutol.",
        "explanation": "Incorreta: O esquema quádruplo (RIPE) destina-se ao tratamento da tuberculose doença ativa, a qual foi afastada pela ausência de sintomas e radiografia de tórax normal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Iniciar tratamento com isoniazida.",
        "explanation": "Correta: Em pessoas vivendo com HIV (PVHIV), o teste tuberculínico >= 5 mm sem evidência de tuberculose ativa é indicação formal de tratamento da infecção latente da tuberculose (ILTB) com isoniazida (ou rifapentina + isoniazida).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Manter observação clínica.",
        "explanation": "Incorreta: Manter apenas observação clínica expõe o paciente ao alto risco de progressão para tuberculose ativa com imunossupressão.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Repetir o teste tuberculínico após 30 dias.",
        "explanation": "Incorreta: O teste tuberculínico já é fortemente reator (15 mm); não há indicação de repetição em 30 dias.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Em pessoas vivendo com HIV, a indicação para tratamento de ILTB ocorre com PT >= 5 mm (ou IGRA positivo), após exclusão rigorosa de doença ativa por clínica e radiografia torácica normal. O tratamento padrão clássico consiste em Isoniazida por 6 a 9 meses ou esquemas mais curtos.",
    "perolaClinica": "Em PVHIV: PT >= 5 mm com RX tórax normal e assintomático = tratar ILTB (ex.: Isoniazida).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção Latente pelo Mycobacterium tuberculosis no Brasil (Ministério da Saúde)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2685
  },
  {
    "id": "q-usp-rp-2023-049",
    "code": "Q-USPRP23-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondilite Anquilosante e Lombalgia Inflamatória",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 34 anos de idade, sexo masculino, trabalha como pedreiro, sem doenças prévias, não faz uso de medicamentos de rotina. Chega à unidade de saúde da família com queixa de dor lombar de forte intensidade há 21 dias. A dor surgiu após esforço físico intenso em seu serviço. A dor está incomodando-o muito, impedindo de trabalhar normalmente nos últimos dias. Está fazendo uso de analgésicos comuns e anti- inflamatórios orais diariamente desde o início do quadro, com pouca melhora. A dor piora aos esforços e melhora com o repouso. A dor não irradia para os membros inferiores, nega perda de força ou formigamento nos MMII, nega febre, dores noturnas. Sem queixas urinárias, gastrintestinais. EF: realizado exame físico completo, tendo como alteração apenas a dor lombar à mobilidade da coluna, dores à palpação da musculatura paravertebral lombar, sem déficit neurológico nos membros, sem outras alterações dignas de nota. Qual a abordagem mais adequada para diagnóstico do paciente neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Não há indicação de exames de imagem neste momento.",
        "explanation": "Correta: Trata-se de lombalgia mecânica aguda (< 4-6 semanas) relacionada a esforço físico, sem sinais de alerta (red flags) como déficits neurológicos focais, febre, perda ponderal ou histórico neoplásico. Exames de imagem não são indicados de rotina.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Solicitar radiografia simples da coluna lombar.",
        "explanation": "Incorreta: Radiografias simples expõem à radiação e não alteram a conduta clínica em pacientes com dor mecânica pura sem sinais de gravidade.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitar tomografia computadorizada coluna lombar.",
        "explanation": "Incorreta: A tomografia computadorizada não tem papel na avaliação inicial de lombalgia mecânica aguda sem suspeita de fratura ou trauma grave.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Solicitar ressonância nuclear magnética da coluna lombar.",
        "explanation": "Incorreta: A ressonância magnética é reservada para suspeita de compressão medular, síndrome da cauda equina, neoplasia ou infecção (espondilodiscite).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Conforme as recomendações do Choosing Wisely e diretrizes de APS/Reumatologia, a realização precoce de exames de imagem em lombalgias inespecíficas ou mecânicas agudas (< 6 semanas) sem sinais de alerta é contraindicada, pois não melhora desfechos e aumenta intervenções desnecessárias.",
    "perolaClinica": "Lombalgia mecânica aguda sem red flags: analgesia e reabilitação; exames de imagem são dispensáveis.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Choosing Wisely Brasil / CFM",
      "Diretrizes Clínicas para Dor Lombar Aguda (ACP/AAFP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2685
  },
  {
    "id": "q-usp-rp-2023-050",
    "code": "Q-USPRP23-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia",
    "subtema": "Delineamento de Estudos — Coorte",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O gráfico abaixo foi extraído de um estudo de coorte em que os autores avaliaram o meio principal de transporte utilizado por quase 400.0000 pessoas do Reino Unido e sua associação com a incidência de algumas doenças e também sobre a mortalidade ao longo de 25 anos de seguimento. Considerando as taxas ajustadas de risco relativo e respectivos intervalos de confiança, assinale a alternativa que interpreta corretamente achados do estudo.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Comparativamente àqueles que dirigiam carro, os que usavam a bicicleta tiveram menor mortalidade por câncer e doenças cardiovasculares.",
        "explanation": "Correta: O uso de bicicleta comparado ao carro apresentou Risco Relativo significativamente menor que 1,00, com intervalo de confiança de 95% que não incluiu a unidade tanto para mortalidade por câncer quanto por DCV, confirmando proteção estatisticamente significativa.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Comparativamente àqueles que dirigiam carro, os que usavam transporte público tiveram menor mortalidade por doenças cardiovasculares.",
        "explanation": "Incorreta: Para o transporte público, o intervalo de confiança do risco relativo para mortalidade cardiovascular cruzou a unidade (1,00), não havendo significância estatística.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Comparativamente àqueles que dirigiam carro, os que usavam caminhavam tiveram menor mortalidade por doenças cardiovasculares.",
        "explanation": "Incorreta: Aqueles que caminhavam não apresentaram redução estatisticamente significativa na mortalidade cardiovascular isolada.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Comparativamente àqueles que dirigiam carro, os que caminhavam tiveram menor incidência de câncer e mortalidade por câncer.",
        "explanation": "Incorreta: Caminhar não demonstrou redução com significância estatística na incidência e mortalidade de neoplasias.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A análise visual de Forest plots e gráficos de risco relativo com intervalos de confiança exige checar se o IC95% cruza a linha de nulidade (RR = 1). Apenas o uso de bicicleta demonstrou redução simultânea e estatisticamente significativa tanto na mortalidade por doenças cardiovasculares quanto por câncer.",
    "perolaClinica": "Se o IC95% do risco relativo não cruza a unidade (1,0), o achado tem significância estatística (p < 0,05).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Medronho RA. Epidemiologia. 2ª ed. Atheneu, 2009.",
      "Fletcher RH, Fletcher SW. Epidemiologia Clínica: Elementos Essenciais. 5ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2686,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q050.png",
      "modality": "Gráfico/Tabela",
      "caption": "Gráfico de risco relativo ajustado e intervalos de confiança de 95% associando transporte ativo e mortalidade por causas específicas.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-051",
    "code": "Q-USPRP23-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Competências das Esferas de Gestão (Lei 8.080/1990)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Na reunião da Comissão Intergestores Regional (CIR) durante a discussão sobre o Programa Previne Brasil, os Secretários da Saúde foram estimulados a implantar em seus municípios Programas de Residência Médica em Medicina de Família e Comunidade e de Residência Multiprofissional em Saúde, na Atenção Primária à Saúde (APS), confirmando o compromisso da gestão pública com a formação de profissionais para atuação no Sistema Único de Saúde (SUS). Os gestores foram informados que aqueles que implantassem os programas de residência receberiam financiamento federal para o custeio dessa atividade. A implantação de Programas de Residência, de acordo o Programa Previne Brasil, refere-se a que componente do financiamento da APS?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Capitação ponderada.",
        "explanation": "Incorreta: A capitação ponderada baseia-se no cadastro de cidadãos vinculados às equipes, ajustado pelo índice de vulnerabilidade e perfil demográfico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Incentivo para ação estratégica.",
        "explanation": "Correta: No modelo do Programa Previne Brasil (Portaria nº 2.979/2019), o custeio para implantação de Programas de Residência em Medicina de Família e Comunidade e Residência Multiprofissional insere-se no 'Incentivo para Ações Estratégicas'.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Pagamento por desempenho.",
        "explanation": "Incorreta: O pagamento por desempenho apoia-se no alcance de metas de indicadores de saúde pactuados (ex.: pré-natal, citopatológico, vacinação, DM/HAS).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Pagamento por produtividade.",
        "explanation": "Incorreta: O modelo do Previne Brasil não contempla componente de pagamento por produtividade estrita.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O modelo de financiamento da APS do Previne Brasil é composto por: Capitação Ponderada, Pagamento por Desempenho e Incentivo para Ações Estratégicas. Os incentivos para formação em serviço, como os programas de residência médica em MFC e multiprofissional, compõem as Ações Estratégicas.",
    "perolaClinica": "Residência médica e multiprofissional na APS é financiada via Incentivo para Ações Estratégicas do Previne Brasil.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Portaria MS/GM nº 2.979, de 12 de novembro de 2019 (Programa Previne Brasil)",
      "Manual de Financiamento da Atenção Primária à Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2687
  },
  {
    "id": "q-usp-rp-2023-052",
    "code": "Q-USPRP23-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia",
    "subtema": "Delineamento de Estudos Epidemiológicos",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um recurso utilizado para estimar o potencial epidêmico de uma doença transmissível é o chamado número básico de reprodução (R0), que representa o número médio de indivíduos que poderão ser infectados a partir de um caso, desde que nenhuma medida preventiva seja estabelecida e que haja 100% de susceptibilidade populacional. A partir de uma pessoa infectante e após cinco gerações de transmissão, uma doença com R0=2 atingirá um número médio de casos equivalente a:",
    "alternativas": [
      {
        "letter": "A",
        "text": "48",
        "explanation": "Incorreta: Valor obtido por erro de progressão aritmética.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "18",
        "explanation": "Incorreta: Valor incorreto; não reflete a multiplicação exponencial da cadeia de transmissão.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "32",
        "explanation": "Correta: Com R0 = 2 e população 100% suscetível sem intervenções: Geração 1 = 2 casos; Geração 2 = 2 x 2 = 4; Geração 3 = 4 x 2 = 8; Geração 4 = 8 x 2 = 16; Geração 5 = 16 x 2 = 32 casos (2^5 = 32).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "12",
        "explanation": "Incorreta: Cálculo inconsistente com a taxa de reprodução basal após cinco gerações.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O número de novos casos gerados após n gerações de transmissão em uma população totalmente suscetível a partir de um caso índice é calculado pela fórmula geométrica (R0)^n. Para R0 = 2 e n = 5 gerações: 2^5 = 32 casos.",
    "perolaClinica": "Propagação epidêmica teórica: número de casos na n-ésima geração = (R0)^n.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Medronho RA. Epidemiologia. 2ª ed. Atheneu, 2009.",
      "Gordis L. Epidemiologia. 5ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2687
  },
  {
    "id": "q-usp-rp-2023-053",
    "code": "Q-USPRP23-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia",
    "subtema": "Cálculo de Valor Preditivo Positivo (Tabela 2x2)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Com base nos valores de sensibilidade e especificidade de um teste diagnóstico, a chamada Curva ROC (Receiver Operation Characteristic) é uma representação gráfica que busca facilitar a identificação do melhor ponto de corte desse teste quando aplicado a uma doença. Na curva ROC aqui representada, o ponto de corte mais adequado para o diagnóstico da doença seria:",
    "alternativas": [
      {
        "letter": "A",
        "text": "O que mais se aproxima do quadrante superior direito.",
        "explanation": "Incorreta: O quadrante superior direito corresponde a alta sensibilidade mas péssima especificidade (1 - Especificidade próximo a 1,0).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "O que se situa no ponto médio da linha diagonal tracejada.",
        "explanation": "Incorreta: A linha diagonal tracejada representa o teste nulo (sem capacidade discriminatória, acurácia de 50%).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "O que mais se aproxima do quadrante inferior direito.",
        "explanation": "Incorreta: O quadrante inferior direito corresponde à menor sensibilidade e especificidade possível.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "O que mais se aproxima do quadrante superior esquerdo.",
        "explanation": "Correta: Na curva ROC, o eixo Y representa a Sensibilidade e o eixo X representa a taxa de falso-positivos (1 - Especificidade). O ponto ideal (maior acurácia / índice de Youden) é aquele mais próximo do canto superior esquerdo (Sensibilidade = 100% e 1 - Especificidade = 0%).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O melhor ponto de corte em uma curva ROC é definido pelo ponto que maximiza tanto a sensibilidade quanto a especificidade (maior índice de Youden = Sensibilidade + Especificidade - 1), correspondendo geometricamente ao ponto da curva mais próximo do canto superior esquerdo (coordenadas 0, 1).",
    "perolaClinica": "Ponto de corte ótimo na Curva ROC: vértice mais próximo do canto superior esquerdo.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Fletcher RH, Fletcher SW. Epidemiologia Clínica: Elementos Essenciais. 5ª ed.",
      "Medronho RA. Epidemiologia. 2ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2687,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q053.png",
      "modality": "Gráfico/Tabela",
      "caption": "Curva ROC representando Sensibilidade versus 1 - Especificidade com linha de referência diagonal.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-054",
    "code": "Q-USPRP23-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Notificação Compulsória e Impactos da Subnotificação no SUS",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O conhecimento dos períodos de incubação e de transmissibilidade de uma doença infecciosa é essencial para o médico orientar adequadamente a conduta frente às situações em que ocorre contato entre um indivíduo infectado e outras pessoas da população. Para o sarampo, os períodos de incubação e de transmissibilidade são, respectivamente, de 7 a 18 dias até o aparecimento da febre, e de quatro dias antes a quatro dias após o surgimento do exantema. Suponha que a criança A tenha regressado recentemente de um país europeu e que no dia 1º/10/2022 apresentou sinais e sintomas de sarampo com surgimento de exantema. No dia 30/09/2022, havia tido contato com a criança B, nunca vacinada contra sarampo. Frente a essa situação, você indicaria:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Quarentena até 7/10 para A e isolamento até 6/10 para B.",
        "explanation": "Incorreta: O isolamento deve ser mantido para o caso A (não quarentena) e dura 4 dias após o exantema (até 05/10).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Quarentena até 6/10 para A e isolamento até 15/10 para B.",
        "explanation": "Incorreta: O caso índice é colocado em isolamento e o contato suscetível é colocado em quarentena.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Isolamento até 5/10 para A e quarentena até 18/10 para B.",
        "explanation": "Correta: O caso A é doente, exigindo isolamento respiratório até 4 dias após o surgimento do exantema (surgiu em 01/10, logo isolamento até 05/10). A criança B é um contato assintomático, exigindo quarentena durante o período máximo de incubação (18 dias a partir da exposição em 30/09, logo até 18/10).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Isolamento até 9/10 para A e quarentena até 14/10 para B.",
        "explanation": "Incorreta: As datas e o tempo de transmissibilidade/incubação estão discordantes dos parâmetros estabelecidos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O isolamento aplica-se a pessoas infectadas e transmissíveis (para o sarampo, até o 4º dia pós-exantema: 01/10 + 4 = 05/10). A quarentena aplica-se a contatos suscetíveis expostos assintomáticos durante o período máximo de incubação (contato em 30/09 + 18 dias = 18/10).",
    "perolaClinica": "Isolamento = doente (até fim da transmissibilidade); Quarentena = exposto sadio (até fim do período de incubação).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guia de Vigilância em Saúde (Ministério da Saúde)",
      "Protocolo de Vigilância Epidemiológica do Sarampo"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2688
  },
  {
    "id": "q-usp-rp-2023-055",
    "code": "Q-USPRP23-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Imunizações",
    "subtema": "Normas Gerais de Administração de Vacinas (PNI)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você atua como Médico da Família e Comunidade em uma Unidade Básica de Saúde e faz seguimento de uma paciente do sexo feminino de 75 anos, que trata hipertensão arterial com enalapril há aproximadamente 10 anos e está com a carteira de vacinação em dia. Ela comparece para consulta de rotina, assintomática, quando você detecta a presença de esplenomegalia no exame abdominal e a encaminha a um hematologista para investigação diagnóstica. Um mês depois, a hematologista lhe devolve a paciente com o diagnóstico de linfoma de células B (zona marginal) esplênico. Ela propõe como tratamento esplenectomia + 4 sessões de rituximabe, um anticorpo monoclonal anti células B, e lhe pergunta quais os cuidados necessários para a prevenção de complicações infecciosas potencialmente associadas ao mesmo. Diante dessa situação, assinale dentre as alternativas abaixo aquela que contém a conduta apropriada para essa paciente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realização de teste tuberculínico e indicação de rifapentina + Isoniazida se resultado do teste maior ou igual a 5mm.",
        "explanation": "Incorreta: O rastreio de ILTB não é prioridade para cirurgia de esplenectomia isolada, e sim a profilaxia contra germes capsulados.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Vacinação contra pneumococo e meningococo e Haemophilus influenzae tipo B, no mínimo 4 semanas após a cirurgia.",
        "explanation": "Incorreta: Em cirurgias eletivas, a vacinação deve ser feita no período pré-operatório para garantir títulos protetores adequados antes da asplenia.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Realização de teste tuberculínico e indicação de rifapentina + Isoniazida se resultado do teste maior ou igual a 10mm.",
        "explanation": "Incorreta: Não há indicação profilática prioritária para rastreio e tratamento de ILTB apenas por esplenectomia programada.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Vacinação contra pneumococo, meningococo e Haemophilus influenzae tipo B, no mínimo 2 semanas antes da cirurgia.",
        "explanation": "Correta: Em pacientes que serão submetidos a esplenectomia eletiva, as vacinas contra germes encapsulados (Streptococcus pneumoniae, Neisseria meningitidis e Haemophilus influenzae b) devem ser administradas no mínimo 14 dias (2 semanas) antes do procedimento cirúrgico.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A asplenia predispõe a infecções fulminantes por bactérias capsuladas (sepse pós-esplenectomia). Nas cirurgias eletivas, o esquema vacinal com Pneumocócica, Meningocócica e Hib deve ser concluído com pelo menos 14 dias de antecedência para garantir adequada resposta imune humoral.",
    "perolaClinica": "Vacinas para capsulados (Pneumo, Meningo, Hib) na esplenectomia eletiva: idealmente no mínimo 2 semanas antes da cirurgia.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE) — Ministério da Saúde",
      "CDC Advisory Committee on Immunization Practices (ACIP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2688
  },
  {
    "id": "q-usp-rp-2023-056",
    "code": "Q-USPRP23-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Lei Orgânica da Saúde (Lei 8.080/1990) — Dever do Estado e Corresponsabilidade",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os cinco gestores da Região de Saúde (RS) X solicitaram uma reunião extraordinária da Comissão Intergestores Regional (CIR) da Região de Saúde Y para discutir especificamente duas questões: a falta de agentes comunitários que estava prejudicando o cadastramento da população nas unidades de atenção primária e a fila de espera de 8 meses para a realização de colonoscopia, disponibilizada apenas no município sede da RS. Para enfrentar estes problemas os gestores fizeram a pactuação de tentar organizar colaborativamente o sistema de saúde regional no formato de rede de atenção à saúde (RAS), pois eles acreditavam ser esse o caminho mais acertado para se melhorar o atendimento de saúde à população. Quais elementos constitutivos da RAS estavam prejudicados na RS do caso descrito?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Estrutura operacional e modelo de atenção.",
        "explanation": "Incorreta: Os problemas relatados são especificamente cadastramento populacional deficiente e carência em apoio diagnóstico especializado.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Modelo de atenção e sistemas logísticos.",
        "explanation": "Incorreta: Sistemas logísticos envolvem regulação, cartão de identificação, prontuário eletrônico e sistemas de transporte, não o exame diagnóstico em si.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Sistemas logísticos e governança.",
        "explanation": "Incorreta: A governança está operando ativamente na CIR; a falha ocorre na base populacional e na oferta diagnóstica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Gestão de base populacional e sistemas de apoio.",
        "explanation": "Correta: De acordo com a formulação de Eugênio Vilaça Mendes sobre RAS, a falta de ACS prejudica a 'Gestão de base populacional' (cadastramento e responsabilização sanitária) e a fila para colonoscopia prejudica os 'Sistemas de apoio' (especificamente apoio diagnóstico).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Segundo os fundamentos das Redes de Atenção à Saúde descritos por Eugênio Vilaça Mendes, a RAS estrutura-se sobre a população/gestão de base populacional, estrutura operacional e modelos de atenção. A falha no cadastramento refere-se à gestão de base populacional, e o gargalo em colonoscopia expressa deficiência nos sistemas de apoio diagnóstico.",
    "perolaClinica": "Cadastramento de usuários = gestão de base populacional; exames complementares = sistemas de apoio na RAS.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Mendes EV. As Redes de Atenção à Saúde. Organização Pan-Americana da Saúde (OPAS), 2011.",
      "Portaria de Consolidação nº 3/2017 — Redes de Atenção à Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2689
  },
  {
    "id": "q-usp-rp-2023-057",
    "code": "Q-USPRP23-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Competências das Esferas de Gestão (Lei 8.080/1990)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os gestores da Região de Saúde (RS) X se reuniram para discutir a operacionalização da rede de atenção à saúde (RAS) regional, considerando as orientações de portaria específica do Ministério da Saúde sobre este assunto. Durante a discussão houve um impasse, pois alguns gestores defendiam a construção de mais dois hospitais na RS, enquanto outros argumentavam que era preciso construir mais unidades de atenção primária à saúde (APS). Os gestores que defendiam o maior investimento na APS, se apoiavam no conceito de que em uma RAS os serviços de saúde devem ser organizados de forma que o que é frequentemente necessário esteja disseminado e o que é raramente necessário esteja concentrado. Esse conceito empregado pelos gestores se refere a que princípio do Sistema Único de Saúde?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Universalização.",
        "explanation": "Incorreta: A universalidade garante o acesso a todas as pessoas em todos os níveis, sem delimitar a densidade espacial de cada recurso.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Hierarquização.",
        "explanation": "Correta: O princípio da hierarquização determina a organização dos serviços em níveis crescentes de complexidade tecnológica, distribuindo amplamente os serviços de alta frequência e baixa densidade (APS) e concentrando os serviços de alta complexidade e menor frequência (hospitais).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Descentralização.",
        "explanation": "Incorreta: A descentralização diz respeito à distribuição de poder e responsabilidades de gestão entre as três esferas de governo (federal, estadual e municipal).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Integralidade.",
        "explanation": "Incorreta: A integralidade compreende o conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O conceito de que serviços frequentemente necessários devem estar capilarizados e próximos da população (disseminados na APS), enquanto os raramente necessários de alta tecnologia devem ser concentrados em polos de referência, define o princípio organizativo da hierarquização.",
    "perolaClinica": "Frequente e de menor densidade disseminado, raro e complexo concentrado: princípio da hierarquização.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Lei Orgânica da Saúde nº 8.080/1990",
      "Mendes EV. As Redes de Atenção à Saúde. OPAS, 2011."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2689
  },
  {
    "id": "q-usp-rp-2023-058",
    "code": "Q-USPRP23-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Farmacodermias Graves (Síndrome DRESS)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente, do sexo feminino, chega à USF solicitando consulta porque há vários dias vem apresentando lesões eritematosas, descamativas e muito pruriginosas localizadas em regiões laterais D e E do tórax, dirigindo se para região posterior, contornando o tronco de forma simétrica. Refere também lesões semelhantes em antebraço esquerdo, próximo ao punho, que surgiram da mesma forma que as lesões em tronco inicialmente formavam pápulas eritematosas, evoluindo para vesículas de conteúdo seroso e depois descamação, sempre acompanhadas de muito prurido. Informa praticar atividade física regularmente e nos últimos tempos tem se dedicado à natação e corrida, mas no momento não está conseguindo porque sente piora após a realização dos exercícios. Fotos abaixo. Diante da história clínica e imagens das lesões, qual, na sua opinião, o diagnóstico mais provável desta paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Dermatite herpetiforme.",
        "explanation": "Incorreta: A dermatite herpetiforme cursa com vesículas intensamente pruriginosas agrupadas tipicamente em superfícies extensoras (cotovelos, joelhos, nádegas) associada à doença celíaca.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Dermatite de contato.",
        "explanation": "Correta: O aspecto eritematovesiculoso seguido de descamação em faixas simétricas no tronco (correspondentes ao elástico de top/frequencímetro cardíaco) e no punho (relógio esportivo/smartwatch) após atividades físicas é típico de dermatite de contato (por irritante primário ou alérgica por borracha/níquel).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Dermatite psoriasiforme.",
        "explanation": "Incorreta: Lesões psoriasiformes clássicas são placas eritematosas bem delimitadas com escamas micáceas espessas, em relevo, sem evolução com vesículas serosas.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Dermatite atópica.",
        "explanation": "Incorreta: A dermatite atópica afeta preferencialmente dobras flexurais (fossas antecubitais e poplíteas) e face, sem o padrão linear delimitado por artefatos esportivos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A história de lesões eritematovesiculosas pruriginosas com evolução para descamação, distribuídas em topografia exata de compressão e fricção de acessórios desportivos (cinta de monitor cardíaco / top de natação no tórax e relógio no punho), configura quadro clássico de dermatite de contato.",
    "perolaClinica": "Lesões eczematosas em padrão geométrico correspondendo a roupas ou acessórios esportivos indicam dermatite de contato.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sampaio SAP, Rivitti EA. Dermatologia. 4ª ed. Artes Médicas.",
      "Bolognia JL, et al. Dermatologia. 4ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2689,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q058.png",
      "modality": "Fotografia Clínica",
      "caption": "Placas eritematovesiculosas e descamativas dispostas linearmente no dorso/tórax lateral e no punho.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-059",
    "code": "Q-USPRP23-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Endocrinologia Pediátrica",
    "subtema": "Puberdade Precoce — Investigação Inicial",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Os pais de um garoto de 13 anos e 7 meses de idade trazem no em uma consulta de rotina em uma unidade de saúde da família. Os pais demonstram grande preocupação sobre a altura do filho, já que ele sempre foi o mais baixo da sala de aula da escola. A mãe conta que a gestação do menino correu muito bem, sem intercorrências. O parto foi normal, a termo, sem intercorrências, peso ao nascimento 3180 gramas, comprimento 49 cm, PC 33 cm, Apgar 9/10. A criança apresentou o desenvolvimento neuropsicomotor adequado. Fica resfriado com uma frequência alta, segundo a opinião dos pais. Sem outras doenças prévias, uso de medicamentos ou cirurgias. História familiar sem informações relevantes. EF: sem alterações dignas de nota, genitália masculina típica, estadiamento de Tanner G2P2, exame de idade óssea 11 anos. Calculada a altura alvo do garoto através das alturas dos pais. Avaliado o gráfico de crescimento do paciente desenhado acima, qual o diagnóstico provável do paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deficiência do hormônio do crescimento.",
        "explanation": "Incorreta: Explicar anulação: A deficiência de GH cursa com desvio progressivo descendente da velocidade de crescimento sem desaceleração puberal fisiológica isolada.",
        "communityPct": 25.0
      },
      {
        "letter": "B",
        "text": "Estatura normal.",
        "explanation": "Incorreta: Explicar anulação: A estatura da criança está abaixo do percentil 3 na idade cronológica atual, não sendo normal para a faixa etária média.",
        "communityPct": 25.0
      },
      {
        "letter": "C",
        "text": "Baixa estatura constitucional.",
        "explanation": "Incorreta: Explicar anulação: O atraso de idade óssea (11 anos vs 13 anos e 7 meses cronológicos) sugere retardo constitucional do crescimento e da puberdade (RCCP), mas inconsistências nos dados do gráfico levaram à anulação da questão.",
        "communityPct": 25.0
      },
      {
        "letter": "D",
        "text": "Baixa estatura familiar.",
        "explanation": "Incorreta: Explicar anulação: Na baixa estatura familiar, a idade óssea é equivalente à idade cronológica e a estatura correlaciona-se com o canal parental.",
        "communityPct": 25.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão ANULADA pela banca examinadora. A análise clínica sugeria o diagnóstico de Baixa Estatura Constitucional (ou Retardo Constitucional do Crescimento e da Puberdade), caracterizado por atraso da idade óssea em relação à idade cronológica e desaceleração pré-estirão. Contudo, devido a discrepâncias ou ambiguidades gráficas no traçado de crescimento fornecido na prova, a banca optou pela anulação oficial.",
    "perolaClinica": "Questão anulada pela banca. No atraso constitucional do crescimento, a idade óssea é atrasada em relação à cronológica.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª ed.",
      "Consenso de Baixa Estatura da Sociedade Brasileira de Pediatria"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2690,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q059.png",
      "modality": "Gráfico/Tabela",
      "caption": "Gráfico de estatura por idade com curva de crescimento e marcação de idade óssea.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-060",
    "code": "Q-USPRP23-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Parasitoses Intestinais — Giardíase",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente chega à Unidade de Saúde da Família queixando se de lesão no braço há 5 dias. Passou pelo acolhimento e como havia vaga para consulta eventual, o paciente foi orientado a aguardar. Na consulta, o paciente referiu ao médico de família aparecimento de lesão em região posterior do braço D que vem aumentando progressivamente e o prurido se intensificando, atrapalhando o sono e suas atividades no trabalho. Diante do apresentado, qual a melhor conduta para o quadro do paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prescrever albendazol oral.",
        "explanation": "Correta: O quadro clínico com lesão linear, eritematosa e serpiginosa intensamente pruriginosa que progride diariamente é característico de Larva Migrans Cutânea ('bicho geográfico', Ancylostoma braziliense/caninum). O tratamento de escolha sistêmico é com albendazol oral (ou ivermectina).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Prescrever corticosteroide tópico.",
        "explanation": "Incorreta: Corticoides tópicos podem atenuar o prurido sintomaticamente, mas não tratam o agente etiológico nem impedem a progressão da larva.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitar exame parasitológico de fezes.",
        "explanation": "Incorreta: A infecção humana por Ancylostoma de cães e gatos é um ciclo abortivo cutâneo sem ovoposição ou parasitismo intestinal; o EPF é negativo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Solicitar raios x de tórax PA e perfil.",
        "explanation": "Incorreta: A larva migrans cutânea clássica não realiza ciclo de Looss pulmonar nem justifica rastreamento radiológico torácico em paciente sem sintomas respiratórios.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A lesão serpiginosa, eritematosa, ligeiramente elevada e intensamente pruriginosa que avança alguns milímetros a centímetros por dia é o aspecto típico da Larva Migrans Cutânea. A abordagem padrão curativa recomendada é a prescrição de anti-helmíntico, sendo o albendazol oral (400 mg/dia por 3 a 5 dias) uma das primeiras opções.",
    "perolaClinica": "Lesão serpiginosa pruriginosa em trajeto linear/tortuoso = Larva Migrans Cutânea; tratamento: albendazol oral.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Dermatologia — Bolognia JL",
      "Guia de Doenças Infecciosas e Parasitárias (Ministério da Saúde)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2691,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q060.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão cutânea linear e serpiginosa eritematosa na face posterior do braço direito.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-061",
    "code": "Q-USPRP23-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Semiologia Cardiovascular e Valvopatias",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 45 anos, dislipidêmico, refere dor precordial há 2 horas com irradiação para ombro direito, associada a diaforese e náuseas. Exame físico: estertores pulmonares basais, sem outras alterações; FC= 70 bpm, PA = 100 x 60 mmHg. Eletrocardiograma (ECG) abaixo. Qual a conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Seriar ECG e observação clínica.",
        "explanation": "Incorreta: Diante de um paciente com dor torácica típica e ECG demonstrando supradesnivelamento do segmento ST (IAMCSST), a conduta é a reperfusão coronariana imediata; seriar ECG e manter observação posterga o tempo porta-balão de forma inaceitável.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Seriar troponina e eletrocardiograma.",
        "explanation": "Incorreta: A presença de supradesnivelamento de ST no ECG fecha o diagnóstico de IAM com supra de ST; a espera por enzimas cardíacas (troponina) nunca deve retardar a terapia de reperfusão de emergência.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Intervenção coronariana percutânea.",
        "explanation": "Correta: O traçado do ECG evidencia síndrome coronariana aguda com supradesnivelamento do segmento ST (IAMCSST). Pelas diretrizes da SBC e ESC/ACC, a conduta de escolha nas primeiras 12 horas é a terapia de reperfusão imediata, preferencialmente por intervenção coronariana percutânea (angioplastia primária), com tempo porta-balão alvo menor que 90 a 120 minutos.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Tomografia computadorizada de tórax.",
        "explanation": "Incorreta: A tomografia de tórax é indicada quando há suspeita fundada de dissecção aguda de aorta ou tromboembolismo pulmonar, não sendo prioritária diante de IAMCSST com anatomia e apresentação clássicas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O quadro clínico de precordialgia típica associado ao ECG com supradesnivelamento de segmento ST define a síndrome coronariana aguda com supra de ST (IAMCSST). A prioridade absoluta é a reperfusão coronariana precoce através de intervenção coronariana percutânea (ICP) primária, que supera a trombólise quando disponível em tempo hábil.",
    "perolaClinica": "IAM com supra de ST: não espere troponina! A conduta imediata é a reperfusão coronariana (ICP em até 90-120 min ou fibrinólise se delta T < 12h e ICP > 120 min).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz da Sociedade Brasileira de Cardiologia sobre Tratamento do Infarto Agudo do Miocárdio com Supradesnível do Segmento ST (2020)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2692,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q061.png",
      "modality": "ECG",
      "caption": "Eletrocardiograma de 12 derivações evidenciando supradesnivelamento do segmento ST.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-062",
    "code": "Q-USPRP23-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Farmacodermias Graves (Síndrome DRESS)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 62 anos, parda, diabética e hipertensa controlada, portadora de lúpus sistêmico em uso de cloroquina e azatioprina há 8 anos. Refere trauma na unha do 1° quirodáctilo da mão esquerda há 1 ano. Desde então notou escurecimento da unha (Figura). Qual o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Melanoníquia traumática.",
        "explanation": "Incorreta: O hematoma ou melanoníquia traumática tende a migrar distalmente com o crescimento ungueal e raramente persiste com alargamento irregular e pigmentação da prega periungueal por mais de um ano.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Melanoma ungueal.",
        "explanation": "Correta: A presença de banda pigmentar única, larga (> 3 mm), assimétrica, de coloração heterogênea e com extensão do pigmento para a dobra ungueal proximal ou lateral (sinal de Hutchinson) é altamente sugestiva de melanoma do aparelho ungueal (melanoma acral lentiginoso).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Nevo melanocítico.",
        "explanation": "Incorreta: Nevo melanocítico na matriz ungueal costuma apresentar faixas homogêneas, estreitas, de bordas regulares e sem acometimento da pele periungueal (sinal de Hutchinson ausente).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Melanoníquia medicamentosa.",
        "explanation": "Incorreta: Melanoníquia medicamentosa (por exemplo, por cloroquina ou quimioterápicos) costuma ser múltipla, acometendo diversos dígitos de forma difusa ou em bandas paralelas, e não confinada a uma única unha de modo agressivo e irregular.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O acometimento ungueal solitário com pigmentação irregular, associado à dispersão do pigmento para a cutícula e prega ungueal (sinal de Hutchinson positivo), impõe como diagnóstico principal o melanoma ungueal. A confirmação histopatológica por biópsia da matriz ungueal é mandatória.",
    "perolaClinica": "Faixa ungueal hipercrômica irregular associada ao sinal de Hutchinson (pigmento na cutícula/prega) é melanoma ungueal até prova em contrário.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Consenso Brasileiro de Melanoma Cutâneo — Sociedade Brasileira de Dermatologia (SBD)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2693,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q062.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão hipercrômica ungueal irregular acometendo o primeiro quirodáctilo com envolvimento da dobra ungueal (sinal de Hutchinson).",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-063",
    "code": "Q-USPRP23-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Hanseníase: Diagnóstico Clínico",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 40 anos, em tratamento de hanseníase dimorfa com poliquimioterapia multibacilar (PQT MB) há 2 meses, apresenta edema e aumento das lesões de pele, além de aparecimento de lesões ao redor das lesões prévias há 15 dias. Em associação, relata dor intensa na região de fossa cubital direita e piora do formigamento na mão ipsilateral. Não apresenta outras patologias ou alterações ao exame físico. Qual a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ultrassonografia de nervos e substituição para PQT alternativa.",
        "explanation": "Incorreta: Não há indicação de substituir o esquema PQT padrão, pois a reação tipo 1 é decorrente do aumento da resposta imune celular, e não de falha terapêutica ou toxicidade medicamentosa.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Eletroneuromiografia e suspensão da PQT MB.",
        "explanation": "Incorreta: A PQT MB não deve ser suspensa na vigência de estados reacionais; a suspensão comprometeria o tratamento definitivo da infecção por Mycobacterium leprae.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Talidomida e substituição para PQT alternativa.",
        "explanation": "Incorreta: A talidomida é a droga de escolha para o eritema nodoso hansênico (reação tipo 2); ela não possui eficácia comprovada no tratamento da reação tipo 1 nem no resgate agudo de neurite.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Corticoterapia e manutenção da PQT MB.",
        "explanation": "Correta: Trata-se de uma reação hansênica tipo 1 (reação reversa) associada à neurite cubital aguda (dor e parestesias). O tratamento de escolha, conforme o Ministério da Saúde, é a introdução imediata de corticoterapia oral sistêmica (prednisona 1 a 2 mg/kg/dia) com manutenção estrita do esquema PQT MB.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O paciente apresenta reação hansênica do tipo 1 (reativação inflamatória de lesões prévias com novas lesões ao redor) complicada por neurite periférica em membro superior. O manejo preconizado pelo Ministério da Saúde consiste na introdução precoce de prednisona para prevenir incapacidade funcional permanente, mantendo-se a poliquimioterapia (PQT) inalterada.",
    "perolaClinica": "Reação Reversa (Tipo 1) e Neurite Hansênica tratam-se com corticoide sistêmico (prednisona) SEM interromper a PQT!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Diretrizes para Vigilância, Atenção e Eliminação da Hanseníase como Problema de Saúde Pública (2022)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2693
  },
  {
    "id": "q-usp-rp-2023-064",
    "code": "Q-USPRP23-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Distúrbios Ácido-Básicos (Fórmula de Winter e Distúrbio Misto)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 60 anos, tabagista (40 anos-maço), queixa-se de dispneia aos mínimos esforços. Nega tosse, febre ou outros sintomas gripais. Exame físico: REG, corada, hidratada, sonolenta; Peso = 150 kg e altura = 1,60 m; Ap.resp.: murmúrio vesicular presente, diminuído globalmente, sem RA, SatO₂: 97% com cateter de O₂ a 4L/min. Foi coletada uma gasometria arterial para avaliação. Qual é o resultado de gasometria arterial esperado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "pCO₂= 20 mmHg",
        "explanation": "Incorreta: Pacientes em hipoventilação alveolar crônica retêm CO2, apresentando hipercapnia (pCO2 elevado, tipicamente > 50-60 mmHg), e não hipocapnia.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "HCO₃=42 mEq/L",
        "explanation": "Correta: A paciente apresenta obesidade mórbida (IMC ~58,6 kg/m²) e provável síndrome de hipoventilação da obesidade (associada ou não à DPOC pelo tabagismo). O estado de hipoventilação alveolar crônica leva à retenção sustentada de CO2 (hipercapnia) e consequente compensação renal através da retenção crônica de bicarbonato, elevando seus níveis plasmáticos de forma marcante (frequentemente > 35-40 mEq/L).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "pO₂=50 mmHg",
        "explanation": "Incorreta: Em uso de oxigenoterapia suplementar (cateter nasal a 4 L/min) com saturação periférica de 97%, a pO2 arterial estará consideravelmente acima de 50 mmHg (geralmente > 80 mmHg).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "pH= 7,5",
        "explanation": "Incorreta: Na acidose respiratória crônica compensada, o pH tende a ser discretamente acidêmico ou normal-baixo (ex.: 7,34 a 7,38); um pH de 7,50 indicaria alcalose metabólica ou respiratória primária importante não compensada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A paciente apresenta obesidade extrema associada a sonolência diurna e insuficiência respiratória crônica hipercápnica. O mecanismo compensatório renal frente à hipercapnia prolongada envolve o aumento significativo da reabsorção e síntese de bicarbonato (HCO3- > 40 mEq/L), mantendo o pH próximo à faixa normal.",
    "perolaClinica": "Acidose respiratória crônica (DPOC / hipoventilação da obesidade) cursa com hipercapnia e acentuada elevação compensatória do bicarbonato sérico.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition — Acid-Base Disorders and Hypoventilation Syndromes"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2694
  },
  {
    "id": "q-usp-rp-2023-065",
    "code": "Q-USPRP23-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Farmacologia Clínica / Reumatologia",
    "subtema": "Efeitos Adversos de Fármacos (Ação Uricosúrica da Losartana)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 60 anos, portador de hepatite C diagnosticada há 20 anos, sem tratamento. Refere aumento progressivo do volume abdominal, edema nos membros inferiores e alteração do ciclo sono vigília. Exame físico: REG, descorado +/4+, hidratado. Abdome globoso, presença de macicez móvel e do sinal do piparote. Exames laboratoriais: Cr: 1,0 mg/dL, Na: 121 mEq/L, K: 3,8 mEq/L. Qual é o local de ação do diurético mais indicado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "D",
        "explanation": "Correta: O paciente tem cirrose por hepatite C descompensada com ascite volumosa. A base do tratamento medicamentoso da ascite cirrótica é o uso de antagonistas dos receptores mineralocorticoides (espironolactona), que atuam inibindo os canais de sódio no túbulo contorcido distal terminal e no túbulo coletor cortical, representados pela letra D na ilustração esquemática do néfron.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "C",
        "explanation": "Incorreta: A letra C indica o túbulo contorcido distal inicial, local de ação clássico dos diuréticos tiazídicos (cotransportador Na-Cl), que não são a droga de primeira escolha para ascite na cirrose.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "A",
        "explanation": "Incorreta: A letra A representa o túbulo contorcido proximal (sítio de ação dos inibidores da anidrase carbônica como acetazolamida e iSGLT2), ineficazes para a fisiopatologia do hiperaldosteronismo na ascite.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "B",
        "explanation": "Incorreta: A letra B representa a alça de Henle (sítio de ação dos diuréticos de alça, como a furosemida). Embora a furosemida possa ser combinada, o diurético fundamental e de primeira linha na ascite cirrótica é a espironolactona (atuante em D).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na cirrose hepática descompensada com ascite, o hiperaldosteronismo secundário decorrente da vasodilatação esplâncnica e hipovolemia arterial efetiva faz da espironolactona (antagonista da aldosterona com ação no túbulo coletor - segmento D) o pilar do tratamento diurético.",
    "perolaClinica": "O pilar diurético da ascite no cirrótico é a Espironolactona (age no túbulo coletor), combatendo o hiperaldosteronismo secundário.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sociedade Brasileira de Hepatologia (SBH) — Manejo da Ascite na Cirrose Hepática",
      "AASLD Guidelines — Management of Adult Patients with Ascites Due to Cirrhosis"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2694,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q065.png",
      "modality": "Gráfico/Tabela",
      "caption": "Esquema anatômico e funcional do néfron demonstrando seus diferentes segmentos (A: proximal, B: alça de Henle, C: distal, D: coletor).",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-066",
    "code": "Q-USPRP23-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "subtema": "Insuficiência Adrenal Primária (Doença de Addison) e Síndromes Poliglandulares",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 19 anos, iniciou quadro de poliúria e polidipsia após bater a cabeça durante uma partida de futebol. Exame físico: bom estado geral, mucosas hidratadas, eupneico, estável hemodinamicamente. Diurese das 8h às 20h: 3000 mL; das 20h às 8h: 2600 mL. Exames laboratoriais: glicemia: 80 mg/dL (VR: 70 a 99); Na: 146 mEq/L (VR: 136 a 145); osmolalidade urinária: 75 mOsm/kg (VR: 300 a 900); osmolalidade plasmática: 304 mOsm/kg (VR: 280 a 295); TSH: 5.6mUI/L (VR 0,5 a 5), T4 livre: 1,1 ng/dL (VR: 0,8 a 1,8); creatinina e cortisol normais. Considerando a doença mais provável, qual tratamento é indicado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Desmopressina.",
        "explanation": "Correta: Paciente desenvolve síndrome de poliúria-polidipsia após traumatismo cranioencefálico, cursando com diurese volumosa (> 5 L/dia), osmolalidade urinária muito baixa (< 300 mOsm/kg) e hipernatremia/hiperosmolalidade plasmática. Esse quadro define Diabetes Insipidus central neurogênico (deficiência de ADH por lesão do eixo hipotálamo-hipofisário). O tratamento específico consiste na reposição de desmopressina (DDAVP).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Restrição hídrica.",
        "explanation": "Incorreta: A restrição hídrica em um paciente com Diabetes Insipidus não tratado precipitará desidratação hipernatrêmica grave, hipovolemia e choque, sendo formalmente contraindicada como terapêutica.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Diurético.",
        "explanation": "Incorreta: Diuréticos tiazídicos podem ter indicação no diabetes insipidus nefrogênico, mas a apresentação pós-traumática aguda e a falha central respondem diretamente à reposição de desmopressina.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Levotiroxina.",
        "explanation": "Incorreta: Os níveis de T4 livre estão normais e o TSH apenas limítrofe, não havendo hipotireoidismo clínico que justifique reposição de levotiroxina nem correlação fisiopatológica com a poliúria aquosa.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O traumatismo cranioencefálico com lesão da neuro-hipófise ou haste hipofisária pode desencadear Diabetes Insipidus Central por perda da secreção de vasopressina (ADH). O achado de urina hipotônica inadequada em face de plasma hiperosmolar e hipernatremia confirma o diagnóstico, sendo a reposição de desmopressina o tratamento preconizado.",
    "perolaClinica": "Poliúria hipotônica + hipernatremia após TCE = Diabetes Insipidus Central! Tratamento: Desmopressina (DDAVP).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition — Disorders of the Posterior Pituitary"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2695
  },
  {
    "id": "q-usp-rp-2023-067",
    "code": "Q-USPRP23-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "subtema": "Diabetes Mellitus Tipo 2 — Farmacoterapia (GLP-1 e iSGLT2)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 56 anos, diabética há 8 anos e em tratamento com insulina, está internada para realização de colecistectomia. Você é chamado para avaliar a paciente por ela apresentar sudorese e tremores em mãos e estar agitada. Exame físico: bom estado geral, consciente, orientada, com palidez cutâneo mucosa. FC:112 bpm. PA: 140 x 80 mmHg. Glicosimetria capilar: 46 mg/dL. Qual é a conduta preconizada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Oferecer sanduíche.",
        "explanation": "Incorreta: O sanduíche contém carboidratos complexos, proteínas e gorduras, nutrientes que lentificam o esvaziamento gástrico e retardam a elevação da glicemia, não sendo indicado para a correção imediata da hipoglicemia aguda.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Glicose 5% endovenosa.",
        "explanation": "Incorreta: Soluções glicosadas hipotônicas como SG 5% por via parenteral não fornecem aporte rápido suficiente de glicose para reversão ágil e não têm indicação quando a via oral está preservada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Glicose 50% endovenosa.",
        "explanation": "Incorreta: A administração venosa de glicose a 50% é reservada para pacientes inconscientes, confusos, com rebaixamento do nível de consciência ou impossibilitados de deglutir com segurança.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "300 mL de suco de laranja.",
        "explanation": "Correta: Paciente consciente, orientada e estável com glicemia capilar de 46 mg/dL (hipoglicemia nível 2). As diretrizes da SBD e ADA preconizam a regra dos 15 g de carboidratos simples de rápida absorção por via oral (ex.: 150 a 200 mL de refrigerante comum ou 200 a 300 mL de suco de fruta/laranja), reavaliando a glicemia em 15 minutos.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Para episódios de hipoglicemia sintomática em pacientes acordados e capazes de deglutir com segurança, a via oral com carboidratos simples de absorção rápida é a abordagem de escolha. Alimentos ricos em lipídios e proteínas retardam a absorção de glicose e o suporte parenteral deve ser reservado para indivíduos inconscientes ou sem via oral.",
    "perolaClinica": "Hipoglicemia no paciente consciente: carboidrato simples por via oral (suco ou água com açúcar). Glicose hipertensa IV fica para o paciente com rebaixamento!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Diabetes (SBD 2023-2024) — Manejo da Hipoglicemia",
      "American Diabetes Association (ADA) Standards of Care in Diabetes (2023)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2696
  },
  {
    "id": "q-usp-rp-2023-068",
    "code": "Q-USPRP23-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Hanseníase: Diagnóstico Laboratorial e Formas Clínicas",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 28 anos, procura atendimento médico após seu irmão receber o diagnóstico de hepatite B. Assintomática. Exames laboritoriais: HBsAg negativo; anti HBc IgG positivo; HBeAg negativo; anti HBs positivo; anti HBe positivo. Como devemos interpretar estes resultados?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Cura funcional da hepatite B.",
        "explanation": "Correta: A presença de HBsAg negativo associada a anti-HBc total positivo e anti-HBs positivo demonstra que houve contato prévio com o vírus selvagem com posterior clareamento do antígeno de superfície e soroconversão protetora, o que define cura funcional (infecção resolvida) da hepatite B.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Infecção crônica pelo vírus B.",
        "explanation": "Incorreta: A infecção crônica é caracterizada pela persistência de HBsAg positivo por período superior a 6 meses.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Vacinação prévia para hepatite B.",
        "explanation": "Incorreta: Indivíduos com imunidade induzida exclusivamente por vacinação apresentam apenas anti-HBs positivo, com anti-HBc total (marcador de contato com o vírus natural) estritamente negativo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Imunotolerância ao vírus B.",
        "explanation": "Incorreta: A fase de imunotolerância da infecção crônica cursa com HBsAg positivo, HBeAg positivo, cargas virais elevadas de HBV-DNA e aminotransferases normais.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O perfil sorológico com HBsAg negativo, anti-HBc IgG positivo e anti-HBs positivo representa infecção pelo vírus da hepatite B resolvida e curada funcionalmente. O anti-HBc positivo atesta infecção prévia pelo vírus selvagem e o anti-HBs confere imunidade adquirida.",
    "perolaClinica": "Anti-HBs (+) com Anti-HBc total (+): infecção curada (cura funcional). Anti-HBs (+) isolado: vacinação prévia.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Protocolo Clínico e Diretrizes Terapêuticas para Hepatite B e Coinfecções (2020)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2696
  },
  {
    "id": "q-usp-rp-2023-069",
    "code": "Q-USPRP23-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia / Gastroenterologia",
    "subtema": "Diarreia Associada a Antimicrobianos e Colite Pseudomembranosa (*Clostridioides difficile*)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 66 anos, com diarreia há 5 dias. Relata 10 a 12 evacuações ao dia, com fezes líquidas, em pequeno volume, que após dois dias passaram a ser mucossanguinolentas, e acompanhadas de tenesmo. Ademais, refere dor abdominal difusa, em cólica, de intensidade moderada e sem alívio com a evacuação, febre não aferida e naúseas. Exame físico: abdome com ruídos hidroaéreos hiperativos, doloroso à palpação difusamente, sem descompressão brusca. Qual mecanismos mais provável associado à diarreia?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Inflamatório.",
        "explanation": "Correta: A síndrome disentérica caracterizada por fezes líquidas com muco, pus e sangue, evacuações frequentes de pequeno volume, dor abdominal em cólica, tenesmo e febre decorre da invasão e lesão celular da mucosa colônica por mediadores inflamatórios e citotóxicos, definindo mecanismo inflamatório/exsudativo.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Osmótico.",
        "explanation": "Incorreta: A diarreia osmótica é tipicamente volumosa, aquosa, cessa com o jejum e resulta da retenção intraluminal de solutos não absorvíveis, sem presença de febre, tenesmo ou sangue nas fezes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Motor.",
        "explanation": "Incorreta: A diarreia por hipermotilidade (motor) decorre de trânsito intestinal acelerado (como na síndrome do intestino irritável ou hipertireoidismo), sem processo invasivo, sangramento ou leucócitos fecais.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Secretor.",
        "explanation": "Incorreta: A diarreia secretora é caracterizada por fezes aquosas de grande volume que persistem mesmo durante o jejum, sem sangue, tenesmo ou febre (ex.: cólera, enterotoxinas bacterianas não invasivas).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A presença de sangue, muco, tenesmo retal e febre caracteriza a síndrome disentérica, típica de colite infecciosa por patógenos enteroinvasivos (como Shigella, Campylobacter, Salmonella, EIEC). O mecanismo fisiopatológico subjacente é predominantemente inflamatório decorrente da agressão à mucosa.",
    "perolaClinica": "Fezes com muco, sangue e tenesmo (disenteria) = Diarreia de mecanismo inflamatório/invasivo.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition — Acute Infectious Diarrheal Diseases"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2696
  },
  {
    "id": "q-usp-rp-2023-070",
    "code": "Q-USPRP23-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Dislipidemias — Hipercolesterolemia Familiar e Inibidores de PCSK9",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 74 anos, relata que há dois anos vem notando faixa esbranquiçada no olho. Ao exame: presença de arco opaco esbranquiçado na junção esclerocorneal, na periferia da íris bilateral (Figura). Qual a conduta mais adequada em relação à alteração ocular mostrada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Não prosseguir com investigação.",
        "explanation": "Correta: O arco senil (gerontoxon) é uma opacidade anular periférica na córnea decorrente da deposição estromal de fosfolipídios e ésteres de colesterol. Em indivíduos idosos (> 60-70 anos), é um achado comum, benigno e assintomático relacionado ao envelhecimento fisiológico, sem associação independente com aterosclerose acelerada, não demandando investigação adicional.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Avaliação com lâmpada de fenda.",
        "explanation": "Incorreta: O exame em lâmpada de fenda pode caracterizar a anatomia corneana, mas é clinicamente desnecessário, visto que o diagnóstico é puramente clínico e a condição não afeta o eixo visual nem ameaça a acuidade.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Realização de topografia corneana.",
        "explanation": "Incorreta: A topografia corneana avalia ceratocone e irregularidades refrativas corneanas, não tendo indicação para avaliação de arco senil.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Prescrição de lágrima artificial.",
        "explanation": "Incorreta: A lágrima artificial é indicada para ceratoconjuntivite seca (olho seco), quadro não descrito no caso em questão.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O arco corneano em pacientes acima dos 60 anos (arco senil) reflete depósito lipídico estromal associado à senescência natural e permeabilidade vascular límbica aumentada. Não interfere na visão nem requer conduta diagnóstica adicional, diferindo do arco juvenil (< 45 anos), que exige investigação metabólica de dislipidemia familiar.",
    "perolaClinica": "Arco corneano no idoso = arco senil benigno (não investigar). Arco corneano no jovem (< 45 anos) = pesquisar hipercolesterolemia familiar!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Yanoff & Duker: Ophthalmology, 5th Edition — Diseases of the Cornea",
      "Diretriz Brasileira de Dislipidemias e Prevenção da Aterosclerose — SBC (2017)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2696,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q070.png",
      "modality": "Fotografia Clínica",
      "caption": "Presença de anel opaco acinzentado-esbranquiçado na periferia da córnea bilateral compatível com arco senil.",
      "aspectRatio": "4:3"
    }
  },
  {
    "id": "q-usp-rp-2023-071",
    "code": "Q-USPRP23-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Emergências Oncológicas — Síndrome de Lise Tumoral",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 39 anos, apresenta distensão abdominal e não evacua há 48 horas. Realizada tomografia computadorizada de abdome com achado de massa de 11 x 8 cm nos maiores diâmetros e sinais de compressão intestinal. Exames laboratoriais: Hemograma: Hb: 8,4 g/dL, Ht: 25%, VCM: 98 fL, leucócitos: 14.000/mm³, plaquetas: 56.000/mm³ (esfregaço do sangue periférico mostrado na Figura); LDH: 3.236 U/L (VR<230), ácido úrico: 13 mg/dL (VR < 6,0). Qual alteração eletrolítica é mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hiponatremia.",
        "explanation": "Incorreta: A hiponatremia não faz parte das alterações eletrolíticas características ou esperadas da síndrome de lise tumoral.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Hiperfosfatemia.",
        "explanation": "Correta: O caso demonstra neoplasia hematológica volumosa de altíssima proliferação (massa abdominal com rápido crescimento e citopenias periféricas, compatível com Linfoma de Burkitt ou leucemia aguda) cursando com síndrome de lise tumoral (SLT) espontânea, marcada por LDH e ácido úrico muito elevados. Os critérios de Cairo-Bishop para SLT incluem: hiperuricemia, hipercalemia, HIPERFOSFATEMIA e hipocalcemia.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Hipercalcemia.",
        "explanation": "Incorreta: Na SLT ocorre HIPOCALCEMIA, que é secundária à precipitação do cálcio sérico com o fosfato liberado em excesso pelas células neoplásicas lisadas (formando fosfato de cálcio).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Hipocalemia.",
        "explanation": "Incorreta: Ocorre HIPERCALEMIA devido à liberação massiva de potássio intracelular após a ruptura celular, e não hipocalemia.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Neoplasias hematológicas de alta fração de proliferação celular (como o linfoma de Burkitt) podem sofrer lise tumoral espontânea ou pós-quimioterapia. A liberação do conteúdo intracelular gera o quarteto clássico: hipercalemia, hiperfosfatemia, hiperuricemia e hipocalcemia secundária.",
    "perolaClinica": "Síndrome de Lise Tumoral: 3 hiper e 1 hipo (HiperK, HiperP, Hiperuricemia e HIPOcalcemia).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Cairo MS, Bishop M. Tumour lysis syndrome: new therapeutic strategies and classification. Br J Haematol. 2004",
      "Diretrizes de Suporte Oncológico — Sociedade Brasileira de Oncologia Clínica (SBOC)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2697,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q071.png",
      "modality": "Fotografia Clínica",
      "caption": "Esfregaço de sangue periférico demonstrando blastos/células linfoides atípicas basofílicas com vacuolização citoplasmática compatíveis com linfoma/leucemia de alto grau.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-072",
    "code": "Q-USPRP23-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Hanseníase: Diagnóstico Clínico",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 18 anos, procura atendimento médico devido a febre e dor de garganta há 2 dias. Teve reação anafilática aos 10 anos após uso de penicilina benzatina. Exame físico: Edema e exsudato puntiforme nas tonsilas palatinas, associados a petéquias no palato. Dois linfonodos palpáveis e dolorosos em cadeia submandibular à direita com cerca de 2 cm de diâmetro. Qual o tratamento mais adequado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Cefuroxima.",
        "explanation": "Incorreta: Por ter histórico de reação anafilática (reação de hipersensibilidade tipo I mediada por IgE) à penicilina, as cefalosporinas (como a cefuroxima) devem ser evitadas pelo risco de reatividade cruzada potencialmente fatal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Ampicilina.",
        "explanation": "Incorreta: A ampicilina é uma aminopenicilina e está estritamente contraindicada em pacientes com antecedente comprovado de choque anafilático a penicilinas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Azitromicina.",
        "explanation": "Correta: O quadro de odinofagia aguda, febre, exsudato amigdaliano e linfadenopatia cervical com petéquias no palato é compatível com faringotonsilite estreptocócica aguda por Streptococcus pyogenes. Em indivíduos com história de anafilaxia confirmada a penicilinas, as diretrizes internacionais e do Ministério da Saúde indicam macrolídeos (como a azitromicina) ou lincosamidas (clindamicina).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Amoxicilina.",
        "explanation": "Incorreta: A amoxicilina pertence ao grupo das penicilinas e oferece risco de choque anafilático iminente nessa paciente.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A faringoamigdalite estreptocócica bacteriana requer antibioticoterapia para reduzir o tempo de sintomas e prevenir a febre reumática. Diante de anafilaxia prévia documentada à penicilina benzatina, contraindicam-se todas as penicilinas e cefalosporinas, elegendo-se a azitromicina (macrolídeo) ou a clindamicina como terapia segura.",
    "perolaClinica": "Paciente com ANAFILAXIA à penicilina não pode receber betalactâmicos! Na faringite bacteriana, trate com macrolídeo (azitromicina) ou clindamicina.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Infectious Diseases Society of America (IDSA) — Clinical Practice Guideline for the Diagnosis and Management of Group A Streptococcal Pharyngitis"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2698
  },
  {
    "id": "q-usp-rp-2023-073",
    "code": "Q-USPRP23-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Emergências Oncológicas — Síndrome de Lise Tumoral",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 17 anos, com adenomegalia, perda de peso e febre há 1 mês. Exame físico: linfonodos palpáveis em cadeias cervicais, axilares e inguinais, com 2 a 3 cm de diâmetro. Abdome: indolor, fígado e baço palpáveis. Ap. respiratório e cardiovascular sem alterações. Radiografia da admissão hospitalar é mostrada na figura A. Nova radiografia, após 20 dias de internação, é mostrada na figura B. Foram realizadas biópsia de linfonodo cervical e toracocentese diagnóstica. Líquido pleural: aspecto turvo e esbranquiçado; leucócitos: 4363 células/mm³ (VR < 200) (35% de neutrófilos; 63% linfócitos); pH: 7,44; LDH: 138 U/L; proteínas totais: 4,29 g/dL; colesterol total: 54,1 mg/dL; triglicérides: 143 mg/dL. Relação proteína líquido pleural/sangue = 0,58; relação LDH líquido pleural/sangue = 0,53. Qual é o mecanismo fisiopatológico mais provável para a ocorrência do derrame pleural?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Inflamação da pleura.",
        "explanation": "Incorreta: O derrame inflamatório ou paraneoplásico cursa com exsudato rico em proteínas e LDH elevado por agressão endotelial, mas a presença de líquido leitoso com triglicérides > 110 mg/dL reflete quilotórax, não inflamação simples.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Obstrução da drenagem linfática.",
        "explanation": "Correta: Paciente jovem com linfonodomegalia generalizada, visceromegalia e alargamento mediastinal (provável linfoma) que desenvolve derrame pleural de aspecto leitoso/esbranquiçado com dosagem de triglicérides de 143 mg/dL (> 110 mg/dL). Esses dados confirmam quilotórax, cuja gênese principal nas neoplasias hematológicas é a compressão ou infiltração neoplásica com consequente obstrução da drenagem do ducto torácico e canais linfáticos.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Redução da pressão oncótica.",
        "explanation": "Incorreta: A redução da pressão oncótica gera transudatos bilaterais (como na síndrome nefrótica ou cirrose), nos quais os níveis de triglicérides e proteínas pleurais são muito baixos.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Aumento na pressão hidrostática.",
        "explanation": "Incorreta: O aumento da pressão hidrostática (típico de insuficiência cardíaca congestiva) acarreta transudato claro/citrino, sem aspecto quiloso ou elevação acentuada de triglicérides.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O aspecto leitoso do líquido pleural aliado à dosagem de triglicerídeos > 110 mg/dL define indiscutivelmente o quilotórax. Em pacientes jovens com linfadenopatia difusa e massa mediastinal, o mecanismo etiopatogênico é a obstrução mecânica e o extravasamento do ducto torácico por compressão linfonodal neoplásica (linfoma).",
    "perolaClinica": "Líquido pleural leitoso + triglicerídeos > 110 mg/dL = Quilotórax. A principal causa não traumática é a obstrução do ducto torácico por Linfoma.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Light RW. Pleural Diseases, 6th Edition — Chylothorax and Pseudochylothorax"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2698,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q073.png",
      "modality": "Radiografia",
      "caption": "Radiografias de tórax evidenciando alargamento mediastinal linfonodal prévio e surgimento subsequente de volumoso derrame pleural unilateral.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-074",
    "code": "Q-USPRP23-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Glomerulonefrite Rapidamente Progressiva e Consumo de Complemento",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 55 anos, teve infecção de vias aéreas superiores há 3 semanas, com melhora após uso de anti-inflamatório não esteroidal por 10 dias. Refere adinamia, redução do volume de diurese e edema de membros inferiores, progressivo, há 1 semana. Exame físico: PA = 140 x 90 mmHg, FC = 100 bpm. Ausculta: bulhas cardíacas rítmicas e hiperfonéticas, sem sopro; murmúrio vesicular presente, com crepitações em bases pulmonares. Exames laboratoriais Cr: 3,0 mg/dL, Ur: 100mg/dL, Na: 140 mEq/L, K: 4,0 mEq/L, Ca: 7,5 mg/dL, albumina: 1,8 mg/dL e dosagens de complementos C3 e C4 normais; urina rotina densidade: 1020, hemácias: 2/campo, leucócitos: 2/campo, proteínas: 500 mg/dL, lipídeos: 3+. Qual a hipótese mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Glomerulonefrite aguda pós infecciosa.",
        "explanation": "Incorreta: A GNPE manifesta-se tipicamente como síndrome nefrítica (hematúria dismórfica evidente, hipertensão, oligúria), com consumo transitório de fração C3 do complemento, que se encontra rigorosamente normal no caso.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Nefrite intersticial aguda.",
        "explanation": "Incorreta: A nefrite intersticial aguda induzida por AINE costuma cursar com piúria estéril, eosinofilúria/eosinofilia, cilindros leucocitários e proteinúria não nefrótica (a menos que associada à lesão mínima simultânea).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Glomerulopatia por lesões mínimas.",
        "explanation": "Correta: Paciente adulto fez uso de anti-inflamatório não esteroidal (AINE) por 10 dias e evoluiu com síndrome nefrótica franca (proteinúria maciça de 500 mg/dL, lipídios 3+, hipoalbuminemia grave de 1,8 mg/dL e anasarca), sedimento urinário brando (sem hematúria) e complemento sérico normal. AINEs são causa clássica de doença de lesões mínimas secundária.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Nefropatia por IgA.",
        "explanation": "Incorreta: A nefropatia por IgA manifesta-se predominantemente por hematúria glomerular macro ou microscópica recorrente associada a infecções de via aérea (sinfaríngea), e raramente como síndrome nefrótica pura com sedimento inativo.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O uso continuado de AINEs é uma causa reconhecida de nefropatia por lesões mínimas com síndrome nefrótica secundária, frequentemente associada a algum grau de insuficiência renal aguda. O sedimento urinário com ausência de elementos nefríticos ativos e as frações normais de complemento apoiam fortemente essa hipótese.",
    "perolaClinica": "AINE é causa farmacológica clássica de Síndrome Nefrótica por Doença por Lesão Mínima secundária!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2699
  },
  {
    "id": "q-usp-rp-2023-075",
    "code": "Q-USPRP23-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Doença Renal do Diabetes — Finerenona (KDIGO)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 55 anos, hipertenso em uso de hidroclorotiazida 25 mg/dia e atenolol 50 mg 2x ao dia, refere edema de membros inferiores e redução do volume de diurese há 30 dias. Submetido a biópsia renal, cujos achados foram compatíveis com nefropatia por IgA. Exame físico: PA: 110 x 70 mmHg, FC: 65 bpm. Ausculta respiratória com crepitações em terço inferior bilateral. Edema de membros inferiores 3+/4+. Exames laboratoriais: Cr: 1,5 mg/dl (taxa de filtração glomerular estimada: 45 ml/min/1,73 m²); Ur 85 mg/dl. K: 5,0 mg/dl; urina rotina densidade: 1.018, proteínas: 300 mg/dl, hemácias: 10/campo. Proteinúria de 24h: 900 mg (volume urinário de 1.000 ml). Qual medicação deve ser associada ao tratamento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Micofenolato mofetil.",
        "explanation": "Incorreta: O uso de imunossupressores como o micofenolato mofetil não é indicado na abordagem inicial de pacientes com nefropatia por IgA com proteinúria moderada sem otimização prévia de medidas antiproteinúricas de suporte.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Ciclosporina.",
        "explanation": "Incorreta: Inibidores da calcineurina como a ciclosporina são opções de exceção e não fazem parte do algoritmo terapêutico inicial da nefropatia por IgA.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Prednisona.",
        "explanation": "Incorreta: Corticoterapia oral com prednisona só é indicada caso a proteinúria permaneça > 0,75-1,0 g/dia após pelo menos 3 meses de terapia de suporte antiproteinúrica máxima otimizada com bloqueador do SRAA, pelo risco de efeitos adversos graves.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Losartana.",
        "explanation": "Correta: Conforme as diretrizes internacionais do KDIGO para o manejo da nefropatia por IgA, a primeira linha obrigatória de tratamento em pacientes com proteinúria > 0,5 g/dia é a otimização da terapia de suporte com inibidores da enzima conversora de angiotensina (iECA) ou bloqueadores dos receptores de angiotensina (BRA, como a losartana), visando redução da pressão intraglomerular e controle da proteinúria.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A diretriz internacional KDIGO orienta que todo paciente com nefropatia por IgA e proteinúria superior a 0,5 g/dia deve iniciar otimização com bloqueador do sistema renina-angiotensina-aldosterona (iECA ou BRA, como a losartana). Essa terapia antiproteinúrica e nefroprotetora é a primeira linha indispensável antes de qualquer consideração sobre imunossupressão sistêmica.",
    "perolaClinica": "Nefropatia por IgA com proteinúria > 0,5 g/dia: primeira conduta obrigatória é bloqueio do SRAA (iECA ou BRA) em dose máxima tolerada!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "KDIGO 2021 Clinical Practice Guideline for the Management of Glomerular Diseases — IgA Nephropathy"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2699
  },
  {
    "id": "q-usp-rp-2023-076",
    "code": "Q-USPRP23-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca — Hepatomegalia Congestiva e Refluxo Hepatojugular",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 41 anos, trabalhador rural, hipertenso em uso irregular de anti- hipertensivos. Foi admitido em hospital com queixa de dispneia, ortopneia, edema de membros inferiores e palpitações há 1 mês, além de oligúria há 2 dias. Feito o diagnóstico inicial de insuficiência cardíaca e tratado com furosemida e vasodilatadores, sem melhora do quadro. História de consumo prévio de 95 g de etanol/dia por 15 anos; parou há 4 meses, no decorrer dos quais perdeu 10 Kg. Exame físico: consciente, afebril, PA: 130/75 mmHg, FC: 121 bpm, estase jugular, edema depressível generalizado, pulsos amplos e extremidades quentes, sem nistagmo ou ataxia. Exames complementares revelam: derrame pleural bilateral, acidose lática, fração de ejeção do ventrículo esquerdo de 77% (aferida por ecocardiograma). Qual a etiologia mais provável da insuficiência cardíaca?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deficiência de tiamina.",
        "explanation": "Correta: Paciente com etilismo crônico pesado e rápida perda ponderal que abre quadro de insuficiência cardíaca de alto débito (extremidades quentes, pulsos amplos, fração de ejeção do VE preservada/aumentada em 77%) refratária a vasodilatadores/diuréticos e acompanhada de acidose láctica. Essa apresentação é patognomônica de beribéri úmido, causado pela deficiência nutricional de tiamina (vitamina B1).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Miocardite viral.",
        "explanation": "Incorreta: A miocardite viral cursa caracteristicamente com disfunção sistólica grave (baixo débito, fração de ejeção reduzida) e extremidades frias, não justificando a fração de ejeção hiperdinâmica de 77%.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Miocardiopatia alcoólica.",
        "explanation": "Incorreta: A miocardiopatia alcoólica típica manifesta-se como miocardiopatia dilatada clássica de baixo débito cardíaco com hipocinesia difusa e fração de ejeção significativamente reduzida.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Cardiopatia hipertensiva.",
        "explanation": "Incorreta: A cardiopatia hipertensiva com insuficiência cardíaca cursa com sobrecarga pressórica, sem estado hipercinético exuberante ou acidose láctica na ausência de choque obstrutivo/cardiogênico.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O beribéri úmido é uma causa tratável de insuficiência cardíaca de alto débito provocada pela carência de vitamina B1 (tiamina), frequente em etilistas desnutridos. O estado hipercinético manifesta-se com taquicardia, pulsos em martelo d'água, extremidades quentes e acidose láctica por bloqueio do metabolismo oxidativo do piruvato.",
    "perolaClinica": "IC de alto débito (FE > 70%, extremidades quentes) + acidose láctica em etilista desnutrido = Beribéri Úmido (Deficiência de Tiamina).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition — Inadequacy and Excess of Vitamins and Trace Minerals",
      "Diretriz Brasileira de Insuficiência Cardíaca — SBC (2021)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2700
  },
  {
    "id": "q-usp-rp-2023-077",
    "code": "Q-USPRP23-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia / Medicina de Emergência",
    "subtema": "Emergência Hipertensiva e Encefalopatia Hipertensiva",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 67 anos, previamente hígida, internada por dispneia súbita, hemoptise e dor torácica há 1 hora. Tromboembolismo pulmonar foi confirmado por angiotomografia de tórax, sendo iniciada anticoagulação plena com enoxaparina. A dispneia passou a ser discreta, aos esforços. No terceiro dia de internação apresentou se em REG, descorada (+/4+), consciente. Murmúrio vesicular simétrico, sem ruídos adventícios FR: 30 ipm. Ritmo cardíaco regular, FC: 128 bpm. PA: 60 x 30 mmHg, má perfusão distal. Sem sinais neurológicos focais. Eletrocardiograma abaixo: Qual a terapêutica mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar cinecoronariografia.",
        "explanation": "Incorreta: O quadro de instabilidade hemodinâmica súbita em paciente internada por TEP confirma colapso por TEP maciço, não tendo indicação primária de cinecoronariografia de urgência.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Controle de frequência cardíaca.",
        "explanation": "Incorreta: A taquicardia sinusal é compensatória ao choque obstrutivo circulatório grave por falência aguda do ventrículo direito; usar drogas para controle de frequência cardíaca anularia a resposta cronotrópica adaptativa e provocaria PCR imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Trombólise com alteplase.",
        "explanation": "Correta: Paciente com embolia pulmonar documentada que apresenta hipotensão grave sustentada (PA 60x30 mmHg) e má perfusão periférica no 3º dia preenche critérios para TEP de alto risco (TEP maciço / choque obstrutivo). Pelas diretrizes da ESC e da SBC, a conduta de escolha de emergência é a trombólise sistêmica imediata com rt-PA (alteplase), visando desobstruir a circulação arterial pulmonar e salvar a função do ventrículo direito.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Repetir angiotomografia.",
        "explanation": "Incorreta: A repetição de angiotomografia atrasaria uma conduta salvadora de minutos em paciente instável hemodinamicamente (contraindicação ao transporte para sala de TC).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O TEP agudo com hipotensão arterial persistente (pressão arterial sistólica < 90 mmHg ou queda > 40 mmHg) define TEP de alto risco (maciço). A falência e sobrecarga aguda de VD colocam a vida em risco imediato, sendo a trombólise sistêmica imediata com alteplase a intervenção prioritária de classe I.",
    "perolaClinica": "TEP com hipotensão / choque (TEP de alto risco) = Trombólise de emergência com alteplase!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "European Heart Journal — 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism",
      "Diretrizes da SBC sobre Tromboembolismo Venoso e Tromboembolismo Pulmonar"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2700,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q077.png",
      "modality": "ECG",
      "caption": "Eletrocardiograma evidenciando taquicardia sinusal associada a sinais de sobrecarga ventricular direita aguda (padrão S1Q3T3 e inversão de ondas T de V1 a V4).",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-078",
    "code": "Q-USPRP23-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondilite Anquilosante e Lombalgia Inflamatória",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 41 anos, refere dispneia progressiva há 1 ano, atualmente ao andar 50 metros. Há 8 meses notou edema de membros inferiores. Refere que as mãos ficam arroxeadas e em seguida esbranquiçadas, quando em contato com água gelada, e diz ter disfagia com engasgos há 3 anos. Exame físico: BEG, corada, hidratada; elasticidade da pele reduzida em membros e face, com diminuição da abertura oral. Murmúrio vesicular presente, simétrico, sem ruídos adventícios FR: 26 ipm. Sat O₂: 87% em ar ambiente. Ritmo cardíaco regular com hiperfonese de B2. FC: 98 bpm. PA: 110 x 60 mmHg. Estase jugular a 45 graus. Qual sintoma adicional seria mais compatível?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síncope.",
        "explanation": "Correta: Paciente com quadro exuberante de esclerose sistêmica (Raynaud trifásico, disfagia por dismotilidade esofágica, esclerodermia cutânea de face e mãos com microstomia) que desenvolveu hipertensão arterial pulmonar (HAP), manifestada por dispneia progressiva, hiperfonese de B2, estase jugular patológica e dessaturação. O sintoma clássico adicional decorrente da falência de débito cardíaco frente ao esforço na HAP grave é a síncope aos esforços.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Ortopneia.",
        "explanation": "Incorreta: A ortopneia é um sintoma característico de insuficiência ventricular esquerda com congestão pulmonar capilar e venosa retrógrada, enquanto a HAP isolada cursa com cor pulmonale pré-capilar, sem congestão pulmonar passiva.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Hemoptise.",
        "explanation": "Incorreta: Hemoptise é mais comumente observada em estenose mitral grave, tromboembolismo pulmonar com infarto pulmonar ou malformações arteriovenosas, sendo incomum na fase primária de acometimento vascular da esclerodermia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Chiado.",
        "explanation": "Incorreta: Chiado ou sibilância refere-se a broncoespasmo difuso intratorácico (asma, DPOC), não sendo uma manifestação direta ou habitual de hipertensão pulmonar pura.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A esclerose sistêmica tem como complicação vascular temível a hipertensão arterial pulmonar (HAP) pré-capilar. O quadro clínico de hiperfonese de B2 com sobrecarga de câmaras direitas (estase jugular, edema de MMII) e incompetência de elevação do débito cardíaco durante demandas metabólicas leva caracteristicamente à síncope de esforço.",
    "perolaClinica": "Hipertensão Arterial Pulmonar na Esclerose Sistêmica cursa com dispneia progressiva, hiperfonese de B2 e SÍNCOPE aos esforços.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sociedade Brasileira de Reumatologia (SBR) — Consenso de Esclerose Sistêmica",
      "ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension (2022)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2700
  },
  {
    "id": "q-usp-rp-2023-079",
    "code": "Q-USPRP23-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondilite Anquilosante e Lombalgia Inflamatória",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 52 anos, refere dor e rigidez em região lombar pela manhã há 1 ano. Ambos os sintomas são aliviados parcialmente após horas de atividade ou uso de AINEs. Refere dor em calcanhares há 3 meses. Nega doenças e tratamentos. Exame físico: bom estado geral, corada; sem lesões cutâneas; unhas: onicólise e mancha de óleo nos pés; teste de Patrick positivo à esquerda. Os pés são mostrados na foto abaixo: Qual o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Gota tofácea crônica.",
        "explanation": "Incorreta: A gota tofácea crônica manifesta-se por tofos gotosos periarticulares e subcutâneos com artrite erosiva assimétrica destrutiva, sem padrão axial típico de espondilite nem alterações ungueais como mancha de óleo.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Artrite psoriásica.",
        "explanation": "Correta: Paciente com espondiloartropatia evidenciada por lombalgia inflamatória crônica (rigidez matinal que melhora com atividade e AINEs), entesite calcânea, acometimento sacroilíaco (teste de Patrick positivo), associados a dactilite visível (dedo em salsicha) e distrofia ungueal característica de psoríase (onicólise e mancha de óleo). Esse conjunto consolida o diagnóstico de artrite psoriásica.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Artrite reumatoide.",
        "explanation": "Incorreta: A artrite reumatoide é uma poliartrite periférica tipicamente simétrica de pequenas articulações com poupamento axial (exceto coluna cervical alta) e não cursa com dactilite ou mancha de óleo ungueal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Espondilite anquilosante.",
        "explanation": "Incorreta: Embora a espondilite anquilosante justifique o acometimento axial e as entesites, ela não cursa de forma típica com distrofia ungueal psoriásica (manchas em óleo) ou dactilite periférica acentuada nos pés sem acometimento cutâneo/ungueal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A presença de dactilite ('dedo em salsicha'), entesite de Aquiles, lombalgia com características inflamatórias e manifestações ungueais psoriásicas (onicólise e mancha de óleo salmão) preenche com robustez os critérios de CASPAR para o diagnóstico de artrite psoriásica.",
    "perolaClinica": "Lombalgia inflamatória + Dactilite + Onicólise / Mancha de óleo ungueal = Artrite Psoriásica!",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "CASPAR Criteria for Psoriatic Arthritis",
      "Sociedade Brasileira de Reumatologia (SBR) — Consenso para Diagnóstico e Tratamento da Artrite Psoriásica"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2701,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q079.png",
      "modality": "Fotografia Clínica",
      "caption": "Fotografia clínica dos pés evidenciando edema difuso digitiforme (dactilite em terceiro pododáctilo) e distrofia ungueal com onicólise.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-080",
    "code": "Q-USPRP23-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondilite Anquilosante e Lombalgia Inflamatória",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 52 anos, há três anos apresenta arroxeamento, formigamento e queimação em dedos das mãos ao contato com superfícies ou ambientes frios. Refere disfagia para alimentos sólidos, com frequente queimação retroesternal pós alimentar. Exame físico: bom estado geral; redução da elasticidade da pele em dorso das mãos; murmúrio vesicular bem distribuído, com estertores em velcro nas bases pulmonares. Teste de contato com gelo resultou na imagem abaixo: Qual medicação está indicada para a alteração mostrada na imagem?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Metotrexato.",
        "explanation": "Incorreta: O metotrexato é um imunossupressor que pode ser utilizado para controle de manifestações articulares ou cutâneas inflamatórias precoces da esclerose sistêmica, mas não exerce vasodilatação nem trata as crises do fenômeno de Raynaud.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Nifedipino.",
        "explanation": "Correta: A paciente apresenta fenômeno de Raynaud secundário à esclerose sistêmica (dor, parestesia e alteração bifásica/trifásica da coloração cutânea deflagrada pelo frio, exibida na imagem com palidez distal e cianose). A medicação de primeira escolha para o tratamento sintomático e prevenção do fenômeno de Raynaud, segundo as diretrizes de reumatologia (EUSTAR/ACR/SBR), são os bloqueadores dos canais de cálcio di-hidropiridínicos de liberação lenta, destacando-se o nifedipino.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Varfarina.",
        "explanation": "Incorreta: A varfarina não tem indicação no manejo do fenômeno de Raynaud; a anticoagulação oral não resolve a hiper-reatividade vasomotora periférica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Prednisona.",
        "explanation": "Incorreta: Corticosteroides sistêmicos como a prednisona não têm eficácia no fenômeno de Raynaud e, na esclerose sistêmica, doses moderadas a altas de prednisona (> 15 mg/dia) estão contraindicadas pelo risco de precipitar crise renal esclerodérmica.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O fenômeno de Raynaud é a manifestação inicial e mais prevalente na esclerose sistêmica. Para seu controle sintomático e prevenção de isquemia tecidual e úlceras de polpa digital, os antagonistas dos canais de cálcio da classe dos di-hidropiridínicos (em especial o nifedipino) constituem a terapêutica farmacológica de primeira escolha.",
    "perolaClinica": "Droga de 1ª linha para o Fenômeno de Raynaud: Bloqueador de canal de cálcio (Nifedipino oral de liberação lenta).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "EULAR recommendations for the treatment of systemic sclerosis (Ann Rheum Dis 2017)",
      "Sociedade Brasileira de Reumatologia (SBR) — Recomendações sobre Esclerose Sistêmica"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2701,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q080.png",
      "modality": "Fotografia Clínica",
      "caption": "Fotografia clínica das mãos após exposição ao gelo evidenciando palidez isquêmica bem demarcada de falanges distais e médias compatível com Fenômeno de Raynaud.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-usp-rp-2023-081",
    "code": "Q-USPRP23-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Doença Arterial Obstrutiva Periférica — Fontaine e Rutherford (Questão Anulada)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 65 anos de idade, diabético, apresenta-se no pronto-socorro com uma úlcera na região plantar do pé esquerdo há 6 semanas. Sem febre, com sinais vitais estáveis e com contagem de leucócitos de 9000 cels/mm³. A radiografia simples do pé demonstra destruição óssea significativa do primeiro e do segundo metatarsos distais. Ao exame, há uma ferida aberta de 3 x 4 cm sobre o antepé, com eritema circundante moderado menor que 0,5 cm. Pulsos distais ausentes, a pele do pé é brilhante e há perda dos fâneros até a metade da perna. O ultrassom mostra uma coleção discreta de fluido plantar sobre a primeira e a segunda cabeça do metatarso. O índice tornozelo braço (ITB) do lado esquerdo é 0,5. Foi internado e prescrito antibiótico endovenoso. Qual das alternativas a seguir descreve é a melhor sequência de manejo cirúrgico para este paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Revascularização e posterior desbridamento.",
        "explanation": "Correta: Na presença de isquemia crítica grave concomitante (ITB = 0,5, ausência de pulsos, perda de fâneros) e ferida infectada estável sem sepse flegmonosa imediata, a prioridade cirúrgica é restabelecer a perfusão tecidual (revascularização) para permitir a cicatrização pós-desbridamento e evitar perda tecidual proximal extensa.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Desbridamento e curativo com pressão negativa.",
        "explanation": "Incorreta: Desbridar tecido isquêmico sem revascularização prévia precipita piora da necrose e falha na cicatrização; além disso, curativo por pressão negativa é contraindicado sobre leito isquêmico não revascularizado e com osteomielite não tratada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Desbridamento e oxigenoterapia hiperbárica.",
        "explanation": "Incorreta: A oxigenoterapia hiperbárica não substitui a revascularização arterial direta em pacientes com estenose/oclusão macrovascular significativa (ITB 0,5).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Amputação do primeiro e segundo raio e posterior revascularização.",
        "explanation": "Incorreta: Amputar em leito gravemente isquêmico sem revascularização prévia leva à deiscência e necrose do coto de amputação, exigindo amputações proximais repetidas (maiores).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "No manejo do pé diabético neuroisquêmico com isquemia crítica associada, a revascularização deve preceder desbridamentos extensos ou amputações definitivas (desde que não haja sepse local descompensada que exija drenagem de emergência), assegurando fluxo sanguíneo adequado para a cicatrização tecidual.",
    "perolaClinica": "No pé diabético com isquemia crítica, sem fluxo não há cicatrização: revascularizar antes de procedimentos ressectivos definitivos.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV)",
      "IWGDF Guidelines on the Prevention and Management of Diabetic Foot Disease"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2702
  },
  {
    "id": "q-usp-rp-2023-082",
    "code": "Q-USPRP23-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Aneurismas Arteriais e Critérios de Intervenção",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "As figuras abaixo mostram os achados radiológicos de dois pacientes masculinos, Paciente 1 e Paciente 2, atendidos no serviço médico de urgência com história de dor súbita de forte intensidade em região anterior do tórax. Ambos têm 65 anos de idade e são hipertensos de longa data. Ambos receberam beta bloqueador e analgésico opioide na admissão e estão hemodinamicamente estáveis. Após medicados, a pressão arterial de ambos é de 130/80 mmHg, a frequência cardíaca de 56 bpm, ambos apresentaram redução significativa da dor e não apresentaram intercorrências. Das alternativas abaixo, qual mostra a conduta mais adequada para cada paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "O paciente 2 deve ser submetido a tratamento medicamentoso.",
        "explanation": "Incorreta: O paciente 2 apresenta dissecção tipo A ou tipo B complicada (com isquemia de órgãos/risco iminente de rotura), demandando intervenção cirúrgica/endovascular, não apenas tratamento clínico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "O paciente 1 deve ser submetido a tratamento endovascular imediato.",
        "explanation": "Incorreta: O paciente 1 apresenta dissecção de aorta descendente (Stanford B) não complicada e clinicamente controlada (PA e dor controladas), cujo tratamento de escolha inicial é estritamente medicamentoso.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "O paciente 1 deve ser submetido a tratamento medicamentoso.",
        "explanation": "Correta: Na dissecção aórtica tipo B de Stanford não complicada, com bom controle pressórico e álgico após betabloqueador e opioide, a conduta padrão é o tratamento medicamentoso intensivo na UTI.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "O paciente 2 deve ser submetido a tratamento endovascular imediato.",
        "explanation": "Incorreta: A intervenção no paciente 2 depende da topografia; se for Stanford A, a cirurgia é aberta convencional de emergência, e não endovascular.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A dissecção de aorta tipo B não complicada, com controle adequado da dor e da pressão arterial por meio de anti-hipertensivos parenterais (betabloqueadores como primeira linha), é manejada inicialmente de forma conservadora/medicamentosa, reservando-se o TEVAR para casos complicados.",
    "perolaClinica": "Dissecção de aorta Stanford B não complicada e estável = tratamento clínico/medicamentoso intensivo.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz de Doenças Aórticas da Sociedade Brasileira de Cardiologia (SBC)",
      "ESC Guidelines for the Diagnosis and Treatment of Aortic Diseases"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2703,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q082.png",
      "modality": "Tomografia",
      "caption": "Angiotomografia de tórax demonstrando dissecção de aorta descendente (Stanford B).",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-083",
    "code": "Q-USPRP23-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Pré e Pós-Operatório",
    "subtema": "Resposta Orgânica ao Trauma Cirúrgico (REMIT)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 66 anos, diabético, portador de coronariopatia obstrutiva e doença arterial obstrutiva periférica, ambas ateroscleróticas, creatinina de 1,4 mg/dl, fração de ejeção do ventrículo esquerdo de 30%, com 22% de miocárdio isquêmico pela cintilografia, com lesão de 55% de tronco de artéria coronária esquerda e obstruções maiores que 70% em ramo marginal da circunflexa, descendente anterior proximal, segundo ramo diagonal e porção distal da coronária direita que é dominante. O Syntax Score I é de 38. Apresenta angina classe III segundo a Sociedade Canadense de Cardiologia. Qual alternativa aponta para a conduta que tem maior probabilidade de oferecer maior sobrevida em 4 anos?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Cirurgia de revascularização do miocárdio.",
        "explanation": "Correta: Paciente diabético, multiarterial, com lesão de tronco de coronária esquerda, disfunção ventricular importante (FE 30%) e Syntax Score alto (38) tem benefício comprovado em sobrevida e redução de desfechos duros a longo prazo com Cirurgia de Revascularização do Miocárdio (CABG).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Tratamento paliativo.",
        "explanation": "Incorreta: O paciente apresenta miocárdio isquêmico viável (22% à cintilografia) e doença passível de tratamento curativo cirúrgico, não havendo indicação de paliação exclusiva.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tratamento medicamentoso otimizado apenas.",
        "explanation": "Incorreta: O tratamento clínico isolado tem mortalidade significativamente maior em 4 anos quando comparado à revascularização miocárdica em pacientes com acometimento de tronco de TCE e alto Syntax.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Intervenção coronária percutânea.",
        "explanation": "Incorreta: Pelo SYNTAX trial, escores > 32 e acometimento de tronco em diabéticos com disfunção ventricular favorecem categoricamente a cirurgia aberta sobre a intervenção percutânea.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Segundo as diretrizes da SBC, AHA e ESC, a cirurgia de revascularização miocárdica é a intervenção de escolha para lesão de tronco da coronária esquerda associada a escore SYNTAX elevado (≥ 33), diabetes e disfunção ventricular, conferindo ganho de sobrevida inequívoco.",
    "perolaClinica": "Lesão de tronco + alto SYNTAX (≥ 33) + diabetes = padrão-ouro é cirurgia de revascularização miocárdica (CABG).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz da Sociedade Brasileira de Cardiologia sobre Cirurgia de Revascularização Miocárdica",
      "2018 ESC/EACTS Guidelines on Myocardial Revascularization"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2703
  },
  {
    "id": "q-usp-rp-2023-084",
    "code": "Q-USPRP23-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Pancreatite Aguda Biliar — Critérios de Ranson",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 32 anos, admitida com dor no andar superior do abdome há 12 horas. Achados físicos: icterícia +/4+, temperatura de 37 ºC, frequências respiratória e cardíaca de 20 incursões e 100 batimentos por minuto, respectivamente, distensão e dor abdominal no andar superior à palpação superficial e profunda. Achados laboratoriais: Glóbulos brancos: 16.000/ml (valor de referência de 4.000 a 10.000/ml), amilasemia de 1.200 U/dl (valor de referência de até 1,10 e 0,30 mg/dL, respectivamente). As imagens foram obtidas durante o tratamento cirúrgico realizado após uma semana da admissão. Dentre os cálculos observados, as manifestações clínicas e laboratoriais e os achados radiológicos estão associados, provavelmente, ao:",
    "alternativas": [
      {
        "letter": "A",
        "text": "3",
        "explanation": "Incorreta: O cálculo apontado em 3 não corresponde à topografia ou à característica morfológica compatível com o quadro descrito na colangiografia.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "4",
        "explanation": "Incorreta: A numeração 4 não identifica o cálculo obstrutivo correlacionado às alterações apresentadas na colangiografia intraoperatória.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "1",
        "explanation": "Incorreta: O cálculo 1 não é o cálculo representativo da impactação/migração biliar documentada.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "2",
        "explanation": "Correta: O cálculo identificado pelo número 2 corresponde ao micromicrólito/cálculo biliar de pequenas dimensões compatível com migração pela via biliar principal, desencadeando pancreatite aguda biliar transitória e icterícia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Cálculos biliares pequenos (geralmente < 5 mm) apresentam maior risco de migração pelo ducto cístico para o colédoco, podendo obstruir temporariamente a papila de Vater e deflagrar pancreatite aguda biliar associada a hiperbilirrubinemia e elevação de enzimas pancreáticas.",
    "perolaClinica": "Microlitíase biliar (< 5 mm) tem alto potencial de migração e é a principal causa de pancreatite aguda biliar.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "Colégio Brasileiro de Cirurgia Digestiva (CBCD)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2704,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q084.png",
      "modality": "Fotografia Clínica",
      "caption": "Aspecto macroscópico dos cálculos biliares extraídos durante o procedimento cirúrgico.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-085",
    "code": "Q-USPRP23-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Choque Hemorrágico — Classificação do ATLS",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 20 anos, vítima de acidente automobilístico em rodovia há 40 minutos, com trauma de crânio evidente, trazido pelo SAMU; chega à sala de trauma de um hospital terciário com intubação traqueal em razão do rebaixamento do nível de consciência. A equipe de atendimento pré-hospitalar informou que o paciente apresentava sinais de choque hipovolêmico e infundiu até a chegada ao hospital 1 litro de solução cristaloide. Exame físico: saturação de O₂ = 95%, FC = 140 bpm, PA = 80 x 60 mmHg, ECG = 3. Qual a melhor forma de tratar o choque hemorrágico deste paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Infundir hemácias e plasma fresco em proporções altas, sem necessidade de aguardar exames laboratoriais e buscar foco de sangramento.",
        "explanation": "Correta: Paciente em choque hemorrágico grave (classe IV: FC 140, PA 80/60) associado a TCE grave (ECG 3). Pelo ATLS 10ª edição, a ressuscitação hemostática imediata com sangue e derivados em proporção balanceada (1:1:1) é indicada sem aguardar exames laboratoriais, evitando hipotensão que agravaria a lesão cerebral secundária.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Infundir 1 litro de cristaloide, aguardar exames laboratoriais para iniciar transfusão hemácias e buscar foco de sangramento.",
        "explanation": "Incorreta: Aguardar exames laboratoriais em choque classe IV com instabilidade hemodinâmica crítica atrasa a infusão e aumenta a mortalidade por coagulopatia e choque irreversível.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Infundir 1 litro de cristaloide, realizar hipotensão permissiva, iniciar transfusão de hemácias e buscar foco de sangramento.",
        "explanation": "Incorreta: A hipotensão permissiva é formalmente contraindicada na presença de TCE grave (ECG ≤ 8), pois a pressão de perfusão cerebral (PPC) deve ser preservada (PAS ≥ 100-110 mmHg).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Infundir hemácias, realizar hipotensão permissiva, aguardar exames laboratoriais para infundir plasma fresco e buscar foco de sangramento.",
        "explanation": "Incorreta: A hipotensão permissiva está contraindicada no TCE grave, e o plasma não deve ser postergado, devendo fazer parte do protocolo de transfusão maciça precoce.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "No choque hemorrágico associado a trauma cranioencefálico grave, a hipotensão permissiva é contraindicada para manter a pressão de perfusão cerebral. A ressuscitação hemostática com protocolo de transfusão maciça balanceada (hemácias e plasma em proporções 1:1) deve ser iniciada imediatamente.",
    "perolaClinica": "TCE grave contraindica hipotensão permissiva: garanta PAS ≥ 100-110 mmHg e transfusão balanceada imediata.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Advanced Trauma Life Support (ATLS), 10ª Edição",
      "Brain Trauma Foundation Guidelines, 4th Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2704
  },
  {
    "id": "q-usp-rp-2023-086",
    "code": "Q-USPRP23-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Neurocirurgia / Trauma Raquimedular",
    "subtema": "Síndrome de Hemissecção Medular (Síndrome de Brown-Séquard)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 76 anos, previamente hipertensa, é admitida no pronto atendimento com história de crise convulsiva inédita há 2 horas. Familiares negam episódios prévios, assim como referem que a crise convulsiva foi autolimitada, com ocorrência de liberação esfincteriana e abalos musculares tônico clônicos. Ao exame: confusa e sonolenta (Glasgow 13), pupilas isocóricas e bradirreagentes e hemiparesia dimidiada à esquerda. Solicitada tomografia computadorizada de crânio sem e com administração de contraste endovenoso (vide figuras A e B, respectivamente). Qual o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Acidente vascular cerebral isquêmico.",
        "explanation": "Incorreta: O AVCI não se apresenta como lesão expansiva com realce anelar periférico heterogêneo, necrose central e importante edema vasogênico perilesional.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Glioblastoma.",
        "explanation": "Correta: A imagem tomográfica com contraste evidencia lesão expansiva intraparenquimatosa volumosa, de contornos irregulares, com impregnação anelar heterogênea pelo contraste e necrose central, padrão clássico do glioblastoma multiforme (astrocitoma grau IV da OMS) em idosos.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Hemorragia intraparenquimatosa.",
        "explanation": "Incorreta: A hemorragia intraparenquimatosa aguda apresenta-se espontaneamente hiperdensa na TC sem contraste, sem o padrão de impregnação anelar e necrose central visto nesta lesão neoplásica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Meningioma.",
        "explanation": "Incorreta: O meningioma é um tumor extra-axial, homogêneo, bem delimitado, frequentemente aderido à dura-máter e com o sinal da cauda dural, diferindo da lesão intra-axial necrótica da paciente.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O glioblastoma é o tumor cerebral primário maligno mais frequente no idoso. Na neuroimagem, caracteriza-se por lesão intra-axial expansiva com realce periférico irregular em anel, necrose central e extenso edema vasogênico perilesional.",
    "perolaClinica": "Lesão intra-axial com realce periférico heterogêneo em anel e necrose central no idoso = glioblastoma.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Greenberg's Handbook of Neurosurgery, 9th Edition",
      "WHO Classification of Tumours of the Central Nervous System"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2705,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q086.png",
      "modality": "Tomografia",
      "caption": "Tomografia de crânio com e sem contraste revelando volumosa lesão expansiva frontoparietal com impregnação anelar e necrose central.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-087",
    "code": "Q-USPRP23-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Neurocirurgia / Trauma Raquimedular",
    "subtema": "Síndrome de Hemissecção Medular (Síndrome de Brown-Séquard)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 1 mês de idade, nascida de parto cesárea sem intercorrências, com quadro de irritabilidade e baixo ganho de peso. A mãe teve diagnóstico de toxoplasmose confirmado durante a gestação. Ao exame físico, encontra se desperto e reativo, com peso de 2400 g e perímetro craniano de 42 cm; fontanelas abauladas, com mobilidade ocular normal. Seu exame de ultrassonografia de crânio transfontanelar encontra se abaixo. Qual a melhor conduta terapêutica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Terceiroventriculocisternostomia endoscópica.",
        "explanation": "Incorreta: A terceiroventriculocisternostomia é indicada preferencialmente na estenose aquedutal pura isolada em crianças > 6 meses, tendo alta taxa de falha no neonato com hidrocefalia pós-infecciosa por toxoplasmose congênita.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Acetazolamida oral.",
        "explanation": "Incorreta: O tratamento medicamentoso com acetazolamida não resolve a hidrocefalia congênita progressiva sintomática com macrocrania e fontanelas tensas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Punção lombar de alívio.",
        "explanation": "Incorreta: A punção lombar de alívio não é conduta definitiva para hidrocefalia progressiva de causa congênita e pode não aliviar a pressão se houver componente obstrutivo proximal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Derivação ventrículo peritoneal.",
        "explanation": "Correta: Na hidrocefalia secundária à toxoplasmose congênita com macrocrania (PC 42 cm), fontanela abaulada e ventrilomegalia grave confirmada no US transfontanelar, a conduta definitiva de escolha é a derivação ventrículo-peritoneal (DVP).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A toxoplasmose congênita integra a tétrade de Sabin (hidrocefalia, calcificações intracranianas, coriorretinite e retardo mental). Quando há hidrocefalia progressiva e hipertensão intracraniana no lactente, o tratamento neurocirúrgico padrão é a inserção de derivação ventrículo-peritoneal.",
    "perolaClinica": "Hidrocefalia sintomática na toxoplasmose congênita com fontanela tensa = Derivação Ventrículo-Peritoneal (DVP).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Nelson Textbook of Pediatrics, 21st Edition",
      "Tratado de Neurocirurgia da Sociedade Brasileira de Neurocirurgia (SBN)"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2705,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q087.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia transfontanelar evidenciando dilatação acentuada dos ventrículos laterais.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-088",
    "code": "Q-USPRP23-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Neurocirurgia / Trauma Raquimedular",
    "subtema": "Síndrome de Hemissecção Medular (Síndrome de Brown-Séquard)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 23 anos, previamente hígida, é trazida ao pronto-socorro devido queixa de cefaleia súbita e de forte intensidade. Familiares negam perda de consciência, assim como negam episódios prévios semelhantes. Ao exame: sonolenta e confusa (Glasgow 13), pupilas isocóricas e fotorreagentes, sem déficits neurológicos focais, apresentando rigidez de nuca (+2/+4), afebril e estável hemodinamicamente. Qual a medida inicial indicada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tomografia computadorizada de crânio.",
        "explanation": "Correta: Cefaleia súbita de forte intensidade (\"em trovoada\") com rigidez de nuca é a apresentação clássica da hemorragia subaracnóidea (HSA) por rotura de aneurisma sacular. O exame inicial de escolha, com altíssima sensibilidade nas primeiras 24 horas, é a TC de crânio sem contraste.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Punção lombar diagnóstica.",
        "explanation": "Incorreta: A punção lombar está indicada apenas se a TC de crânio for normal/inconclusiva e a suspeita clínica de HSA persistir, sendo contraindicada como exame inicial sem antes excluir efeito de massa.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Administração de solução salina hipertônica 3%.",
        "explanation": "Incorreta: Salina hipertônica a 3% é usada para hipertensão intracraniana descompensada ou herniação iminente, não sendo conduta diagnóstica inicial em paciente estável.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Intubação orotraqueal seguida por hiperventilação controlada.",
        "explanation": "Incorreta: A paciente tem Glasgow 13 e respiração espontânea estável; não há indicação imediata de intubação e a hiperventilação profilática não deve ser realizada de rotina.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A apresentação clínica de cefaleia em trovoada e rigidez de nuca sem febre obriga a exclusão imediata de Hemorragia Subaracnóidea não traumática. O primeiro passo diagnóstico mandatório é a realização de tomografia computadorizada de crânio sem contraste.",
    "perolaClinica": "Cefaleia súbita \"a pior da vida\" + rigidez de nuca = TC de crânio sem contraste como exame de escolha imediato.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guidelines for the Management of Aneurysmal Subarachnoid Hemorrhage (AHA/ASA)",
      "Greenberg's Handbook of Neurosurgery, 9th Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2706
  },
  {
    "id": "q-usp-rp-2023-089",
    "code": "Q-USPRP23-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Hiperplasia Prostática Benigna e Retenção Urinária Aguda",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em uma avaliação médica de rotina de puericultura, notou-se em menino 2 anos de idade ausência do testículo esquerdo na bolsa. Já ao nascer o pediatra orientou os pais que até os dois anos o testículo poderia descer espontaneamente. O paciente encontra se saudável e o exame físico geral não apresenta alterações. O testículo direito é tópico e normotrófico. Qual a próxima medida diagnóstica a ser tomada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Descartar testículo retrátil.",
        "explanation": "Correta: Antes de qualquer indicação cirúrgica ou investigação complementar de criptorquidia, é mandatório realizar um exame físico minucioso (com a criança relaxada, em decúbito e posição de pernas cruzadas ou acocorada) para descartar testículo retrátil por hiper-reflexia cremastérica, uma condição benigna que não exige cirurgia.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Solicitar ressonância magnética de abdome e pelve.",
        "explanation": "Incorreta: A RM de abdome e pelve não tem papel estabelecido como rotina inicial para localização testicular na ausência de exame clínico conclusivo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitar US abdominal.",
        "explanation": "Incorreta: O ultrassom tem baixa sensibilidade e especificidade para testículos não palpáveis e não substitui o exame físico ou a laparoscopia diagnóstica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Prescrever gonadotrofina coriônica.",
        "explanation": "Incorreta: A terapia hormonal com gonadotrofina coriônica (hCG) não é mais recomendada rotineiramente pelas diretrizes urológicas devido à baixa eficácia e potenciais efeitos adversos a longo prazo.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A diferenciação entre criptorquidia verdadeira e testículo retrátil é puramente clínica. O testículo retrátil pode ser ordenhado até a bolsa escrotal sem tensão e nela permanece temporariamente, sendo uma variante normal decorrente do reflexo cremastérico exacerbado.",
    "perolaClinica": "Bolsa vazia na infância: descarte primeiro o testículo retrátil pelo exame físico cuidadoso.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Urologia (SBU)",
      "AUA/EAU Guidelines on Undescended Testis"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2706
  },
  {
    "id": "q-usp-rp-2023-090",
    "code": "Q-USPRP23-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma Abdominal",
    "subtema": "Hematomas Retroperitoneais (Zonas 1, 2 e 3) e Manobras de Exposição (Mattox vs. Cattell-Braasch)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 25 anos, vítima de queda de moto, trazido pelo SAMU, é admitido na sala de trauma de um hospital referência, confuso e com dor abdominal. Exame físico: saturação de O₂ = 94%, FC = 130 bpm, PA = 90 x 60 mmHg, Escala de Coma de Glasgow = 14. Após reanimação volêmica com 1L de solução cristaloide e infusão de dois concentrados de hemácias e um PFC, passou a apresentar FC = 105 bpm e PA = 100 x 70 mmHg. Realizou tomografia computadorizada de corpo inteiro, que evidenciou lesão hepática grau V com blush e volumoso hemoperitôneo. Qual a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Manter paciente em observação na sala de trauma nas primeiras 24 horas.",
        "explanation": "Incorreta: Apenas observar um paciente com lesão grau V e sangramento arterial ativo (blush) é inaceitável devido ao alto risco de choque descompensado e óbito.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Encaminhar paciente para tratamento não cirúrgico em leito intensivo.",
        "explanation": "Incorreta: O tratamento puramente não operatório expectante em UTI é reservado a pacientes sem extravasamento ativo de contraste (sem blush) ou estáveis após lesões de menor gravidade.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Encaminhar paciente para tratamento cirúrgico.",
        "explanation": "Incorreta: O paciente estabilizou hemodinamicamente após reanimação (PA 100x70 mmHg, FC 105). A cirurgia de lesão hepática grau V apresenta altíssima mortalidade cirúrgica; a angioembolização é preferível se o paciente estiver estável.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Encaminhar paciente para a embolização.",
        "explanation": "Correta: Em pacientes hemodinamicamente estáveis ou respondedores à ressuscitação com lesão hepática grave e extravasamento de contraste arterial (blush) na angiotomografia, a arteriografia com angioembolização é a conduta padrão ouro, evitando a morbimortalidade de uma laparotomia maior.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O tratamento não operatório do trauma hepático em pacientes que se estabilizam após ressuscitação inclui a angioembolização arterial quando a TC demonstra blush arterial ativo, permitindo o controle hemostático seletivo com menor mortalidade do que a exploração cirúrgica em lesões grau V.",
    "perolaClinica": "Trauma hepático com blush arterial em paciente estabilizado/respondedor = indicação de angioembolização.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "WSES Guidelines on Liver Trauma Management",
      "Advanced Trauma Life Support (ATLS), 10ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2706
  },
  {
    "id": "q-usp-rp-2023-091",
    "code": "Q-USPRP23-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Apendicite Aguda — Diagnóstico por Imagem (TC)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 70 anos, com dor abdominal inicialmente no andar inferior do abdome que migrou para hemi abdome direito e, principalmente, na fossa ilíaca direita associada a cerca de 5 evacuações diárias sem sangue ou muco há 15 dias. Há 12 dias, em serviço externo, iniciou tratamento para infecção do trato urinário com antibiótico. Houve discreta melhora e foi submetida a exame de imagem que motivou o encaminhamento para hospital terciário. Na admissão estava consciente e orientada, desidratada +/4+, frequências, cardíaca de 78 batimentos por minuto e respiratória de 18 incursões por minuto e saturação de oxigênio de 95%. O abdome era globoso, distendido, com ruídos hidroaéreos hipoativos, massa palpável e dolorosa no hemi abdome direito e com reação de defesa à palpação de fossa ilíaca direita. A tomografia revelou volumosa coleção parcialmente delimitada com focos gasosos com extensão para o músculo iliopsoas, a cavidade e a parede abdominal, com provável fecalito no interior. Em adição às medidas de correção das alterações sistêmicas e antibioticoterapia, qual a abordagem a ser adotada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Drenagem percutânea.",
        "explanation": "Correta: Trata-se de apendicite tardia complicada (> 10-14 dias de evolução) com formação de volumoso abscesso/plastrom bloqueado e presença de fecalito. A conduta padrão é o tratamento conservador inicial com antibioticoterapia parenteral e drenagem percutânea da coleção guiada por imagem (TC ou US), postergando a apendicectomia de intervalo.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Laparotomia exploradora.",
        "explanation": "Incorreta: A laparotomia exploradora imediata nesse estágio apresenta altos índices de complicações (fístulas cecais, lesões intestinais e necessidade de colectomia direita desnecessária) devido ao intenso processo inflamatório.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Drenagem ecoendoscópica.",
        "explanation": "Incorreta: A drenagem ecoendoscópica é indicada para coleções perigástricas/periduodenais (ex.: necrose pancreática murada), não sendo técnica aplicável para abscessos na fossa ilíaca direita/psoas.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Laparoscopia exploradora.",
        "explanation": "Incorreta: A laparoscopia em apendicite com plastrom avançado e abscesso bloqueado é tecnicamente difícil, friável e contraindicada em relação à drenagem percutânea minimamente invasiva.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Em casos de apendicite complicada com abscesso bloqueado de evolução prolongada (> 5 a 7 dias) em paciente estável, a abordagem recomendada pelas diretrizes internacionais (WSES) consiste em antibioticoterapia associada à drenagem percutânea da coleção, evitando cirurgias mórbidas na fase inflamatória aguda.",
    "perolaClinica": "Abscesso apendicular bloqueado em paciente estável = antibioticoterapia venosa + drenagem percutânea.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "WSES Guidelines for Diagnosis and Treatment of Acute Appendicitis",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2707,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q091.png",
      "modality": "Tomografia",
      "caption": "Tomografia de abdome revelando coleção delimitada com focos gasosos e fecalito no interior na fossa ilíaca direita.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-092",
    "code": "Q-USPRP23-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico e Pneumotórax Hipertensivo (ATLS)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 20 anos, vítima de ferimento por arma branca em hemitórax esquerdo, na altura do 3º EIC junto à linha axilar anterior; chega dispneica à sala de trauma com saturação de O₂ = 88%. O tórax foi drenado com dreno tubular e sistema coletor selo d'água. A saturação após a drenagem pleural = 90%. Realizado RX de tórax ainda na sala de trauma que mostra dreno bem posicionado com pneumotórax persistente, apesar do coletor borbulhar bastante. Qual a próxima conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colocar um segundo dreno de tórax.",
        "explanation": "Correta: Diante de ferimento torácico penetrante com pneumotórax residual importante e grande fuga aérea (borbulhamento contínuo e volumoso no selo d'água), a conduta imediata preconizada pelo ATLS é a inserção de um segundo dreno de tórax para tentar reexpandir o pulmão e manejar o grande volume de ar, antes ou paralelamente à investigação de lesão traqueobrônquica.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Tomografia computadorizada de tórax.",
        "explanation": "Incorreta: O paciente permanece hipoxêmico (sat 90%) e com escape de ar maciço; transportá-lo à TC antes de estabilizar o espaço pleural e a via aérea traz grave risco de deterioração.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Broncoscopia de urgência.",
        "explanation": "Incorreta: A broncoscopia é o exame definitivo para confirmar lesão de via aérea proximal, mas a conduta imediata para manter o hemitórax drenado e evitar colapso ventilatório é a colocação do segundo dreno.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Trocar o dreno de tórax.",
        "explanation": "Incorreta: O dreno atual foi checado e está pérvio e bem posicionado; retirá-lo ou trocá-lo é inútil e perigoso perante uma fístula broncopleural de alto débito.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O escape aéreo maciço e contínuo com falha de reexpansão pulmonar após drenagem torácica adequada sugere fortemente lesão da árvore traqueobrônquica maior ou fístula broncopleural extensa. O ATLS preconiza a colocação de um segundo dreno tubular de grosso calibre enquanto se organiza a broncoscopia e/ou toracotomia.",
    "perolaClinica": "Pneumotórax com escape aéreo maciço e dreno bem posicionado = inserir segundo dreno e suspeitar de lesão traqueobrônquica.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Advanced Trauma Life Support (ATLS), 10ª Edição",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2707
  },
  {
    "id": "q-usp-rp-2023-093",
    "code": "Q-USPRP23-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Geral",
    "subtema": "Fases da Cicatrização (Inflamatória, Proliferativa e Maturação)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 50 anos procura cirurgião plástico preocupada com lesão papular hipercrômica na face, com cerca de 2 mm de espessura, simétrica, bordos regulares, coloração homogênea, diâmetro de 5 mm e crescimento lento. Qual a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Exérese com margem de 5 mm e pesquisa do linfonodo sentinela cervical.",
        "explanation": "Incorreta: A biópsia com margem ampla de 5 mm e pesquisa de linfonodo sentinela só é considerada após diagnóstico anatomopatológico definitivo de melanoma invasivo com Breslow ≥ 0,8 mm.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Eletrocauterização.",
        "explanation": "Incorreta: A eletrocauterização destrói a amostra, impedindo a análise histopatológica essencial em lesões pigmentadas suspeitas ou para confirmação diagnóstica.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Crioterapia.",
        "explanation": "Incorreta: A crioterapia destrói o tecido celular e impede a realização de exame anatomopatológico de lesão névica/pigmentada suspeita.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Exérese com margem de 2 mm e exame anatomopatológico.",
        "explanation": "Correta: Para lesão pigmentada da face em que se busca diagnóstico e exclusão de malignidade, o procedimento preconizado é a biópsia excisional completa com margem estreita de segurança (1 a 2 mm), preservando a arquitetura tecidual para análise histopatológica.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Toda lesão pigmentada com indicação de ressecção na face deve ser submetida à exérese cirúrgica completa com margens mínimas de 1 a 2 mm e envio para exame anatomopatológico, garantindo o diagnóstico acurado e evitando técnicas destrutivas sem amostragem histológica.",
    "perolaClinica": "Lesão pigmentada facial: exérese com margem de 1-2 mm e anatomopatológico, nunca métodos destrutivos.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes do Grupo Brasileiro de Melanoma (GBM)",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2708
  },
  {
    "id": "q-usp-rp-2023-094",
    "code": "Q-USPRP23-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma (ATLS) / Queimaduras",
    "subtema": "Grande Queimado — Ressuscitação Volêmica e Monitorização do Débito Urinário",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 36 anos, 100 kg, foi vítima de queimaduras por combustão de álcool ao acender churrasqueira. Após 2 horas, foi admitido no pronto-socorro de hospital terciário, trazido pelo SAMU, tendo recebido no transporte 1.000 ml de solução de ringer lactato. Ao exame: consciente e orientado, Glasgow 15, saturação de oxigênio em ar ambiente de 95%, ventilação com murmúrio vesicular presente e simétrico, frequência respiratória de 18 ipm, frequência cardíaca de 86 bpm, pressão arterial de 110 x 70 mmHg, queimaduras de segundo e terceiro graus em metade do tronco posterior e todo membro inferior direito. De acordo com a 10ª edição do ATLS, como deve ser realizada a reposição volêmica deste paciente nas próximas horas?",
    "alternativas": [
      {
        "letter": "A",
        "text": "2.700 ml de solução cristaloide nas próximas 6 horas.",
        "explanation": "Incorreta: Não desconta o volume de 1.000 ml já infundido pelo SAMU nas primeiras 2 horas.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "2.700 ml de solução cristaloide nas próximas 8 horas.",
        "explanation": "Incorreta: O prazo total da primeira metade é de 8 horas a partir do acidente; como já se passaram 2 horas, restam apenas 6 horas para infundir a cota inicial, e deve-se subtrair o volume prévio.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "1.700 ml de solução cristaloide nas próximas 6 horas.",
        "explanation": "Correta: Pelo ATLS 10ª edição: volume de 24h = 2 ml × 100 kg × 27% SCQ (metade do tronco posterior = 9%, MID = 18%) = 5.400 ml. Metade deve ser dada nas primeiras 8 horas do trauma (2.700 ml). Como já recebeu 1.000 ml e passaram-se 2 horas, restam 1.700 ml (2.700 - 1.000) a serem infundidos nas próximas 6 horas.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "1.700 ml de solução cristaloide nas próximas 8 horas.",
        "explanation": "Incorreta: O tempo restante para completar as primeiras 8 horas desde o trauma é de 6 horas, e não de 8 horas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O cálculo da ressuscitação segundo o ATLS 10ª edição para queimaduras térmicas em adultos utiliza 2 ml × kg × %SCQ nas primeiras 24 horas. Metade do volume total calculado é administrada nas primeiras 8 horas contadas a partir do momento do evento térmico, descontando-se os fluidos já infundidos no transporte.",
    "perolaClinica": "No queimado, o relógio das 8 horas corre a partir do acidente: calcule o volume, subtraia o que já correu e infunda o restante no tempo que sobra.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Advanced Trauma Life Support (ATLS), 10ª Edição",
      "Diretrizes da Sociedade Brasileira de Queimaduras"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2708
  },
  {
    "id": "q-usp-rp-2023-095",
    "code": "Q-USPRP23-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Neurocirurgia / Trauma Raquimedular",
    "subtema": "Síndrome de Hemissecção Medular (Síndrome de Brown-Séquard)",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 32 anos, sem comorbidades prévias, queixa se de lombalgia de início súbito com irradiação para membro inferior esquerdo há 7 dias, contínua, melhora parcial com analgésicos. Ao exame físico, além de dor no membro citado (principalmente quando elevado em posição reta acima de 40 graus), apresenta outra nítida alteração semiológica ipsilateral. Realizou o exame de ressonância magnética em anexo. Qual a alteração vista no exame neurológico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hipoestesia na face posterior da coxa.",
        "explanation": "Incorreta: A hipoestesia na face posterior da coxa é característica de radiculopatia de S1, não de L5.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Paresia da extensão do hálux.",
        "explanation": "Incorreta: Embora o extensor do hálux seja inervado por L5, o achado clínico cardinal de deficit motor incapacitante por fraqueza dos dorsiflexores do tornozelo é o pé caído.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Pé caído.",
        "explanation": "Correta: A ressonância magnética evidencia volumosa hérnia discal paracentral L4-L5 acometendo a raiz emergente/descendente de L5. A lesão da raiz de L5 causa deficit motor do músculo tibial anterior e extensor longo dos dedos, culminando no sinal de 'pé caído' (drop foot).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Hiporreflexia do aquileu.",
        "explanation": "Incorreta: A alteração ou abolição do reflexo aquileu avalia predominantemente a raiz sacral S1, enquanto L5 não possui reflexo tendinoso expressivo de rotina.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A compressão aguda da raiz de L5 (frequente em hérnias L4-L5) manifesta-se clinicamente por lombociatalgia irradiada pela face lateral da perna até o dorso do pé e comprometimento motor da dorsiflexão do pé e dedos, determinando marcha escarvante ou 'pé caído'.",
    "perolaClinica": "Radiculopatia de L5 = acometimento da dorsiflexão do tornozelo/dedos gerando pé caído; reflexo aquileu é S1.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Greenberg's Handbook of Neurosurgery, 9th Edition",
      "Adams and Victor's Principles of Neurology, 11th Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2708,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q095.png",
      "modality": "Ressonância Magnética",
      "caption": "Ressonância magnética da coluna lombossacra em corte sagital evidenciando volumosa hérnia discal L4-L5.",
      "aspectRatio": "16:9"
    }
  },
  {
    "id": "q-usp-rp-2023-096",
    "code": "Q-USPRP23-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo",
    "subtema": "Abdome Agudo Obstrutivo — Volvo de Sigmoide",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino, 6 meses de idade. Há 6 horas iniciou quadro de dor abdominal em cólica, intensa, com período de acalmia. Evoluiu com piora da dor apresentando episódios mais frequentes com as mesmas características e vômitos. Na ocasião da troca das fraldas, informante refere sangue e muco. Exame físico: estado geral preservado, sem dor na ocasião do exame. Hidratado, corado, eupneico, afebril. Abdome globoso, flácido, sem distensão. Sinal de dance positivo. Imediatamente encaminhado para exame contrastado, enema opaco. Considerando o provável diagnóstico e a conduta (enema opaco) proposta, qual o resultado esperado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Identificação da zona de transição confirmando Hirschsprung.",
        "explanation": "Incorreta: Zona de transição cone-like no enema é típica da Doença de Hirschsprung (megacólon congênito), quadro de constipação crônica e não de cólica aguda com fezes em geleia de morango.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Melhora clínica da enterocolite pela descompressão.",
        "explanation": "Incorreta: A enterocolite necrotizante cursa com pneumatose e acomete prematuros em UTI, sendo contraindicado o enema.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Confirmação diagnóstica de volvo intestinal.",
        "explanation": "Incorreta: O volvo intestinal no lactente apresenta sinal do redemoinho e vômitos biliosos agudos, sem a clássica massa de Dance ou muco sanguinolento característico da intussuscepção.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Redução hidrostática do intussuscepto.",
        "explanation": "Correta: O quadro de crises paroxísticas de choro, vômitos, fezes em geleia de morango e sinal de Dance (fossa ilíaca direita vazia) é clássico de intussuscepção intestinal. O enema (opaco/hidrostático ou pneumático), além de diagnóstico, é primariamente terapêutico, promovendo a redução não operatória do intussuscepto.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A intussuscepção intestinal (ou invaginação intestinal) é a causa mais comum de obstrução intestinal entre 3 meses e 3 anos. Na ausência de sinais de peritonite ou perfuração, o enema contrastado ou pneumático sob fluoroscopia/ultrassom atua reduzindo o segmento invaginado em mais de 80% dos casos.",
    "perolaClinica": "Cólica episódica + fezes em geleia de morango + Sinal de Dance = Intussuscepção; enema reduz o intussuscepto.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Nelson Textbook of Pediatrics, 21st Edition",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2709
  },
  {
    "id": "q-usp-rp-2023-097",
    "code": "Q-USPRP23-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Hiperplasia Prostática Benigna e Retenção Urinária Aguda",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 21 anos, vem a um serviço de pronto atendimento com queixa de dor no testículo direito, de início insidioso, com progressão há um dia, associada à disúria. Exame físico: hiperemia da bolsa escrotal, dor á palpação do testículo e endurecimento do epidídimo. Sinal de Prehn positivo. Qual a melhor conduta no pronto atendimento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Analgesia, colher urina I, urocultura e encaminhar paciente para serviço especializado de urologia.",
        "explanation": "Incorreta: Embora colher urocultura seja pertinente, adiar o tratamento para aguardar atendimento ambulatorial em paciente com orquiepididimite aguda não é a conduta resolutiva para o pronto atendimento.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Encaminhar paciente para realizar ultrassonografia com Doppler e avaliar do fluxo sanguíneo testicular.",
        "explanation": "Incorreta: O Doppler é valioso na dúvida entre torção e orquiepididimite, mas o quadro apresentado é típico de orquiepididimite bacteriana (início insidioso, disúria, febre/hiperemia, Prehn positivo), podendo-se iniciar o tratamento imediatamente.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Analgesia e encaminhar paciente para exploração cirúrgica de emergência",
        "explanation": "Incorreta: A exploração cirúrgica de emergência é indicada para a torção testicular (início súbito, sem disúria, Prehn negativo, reflexo cremastérico abolido).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Tratamento clínico com anti-inflamatório, antibioticoterapia empírica e reavaliação entre 7 e 10 dias.",
        "explanation": "Correta: Trata-se de orquiepididimite aguda (sintomas urinários, evolução insidiosa e Sinal de Prehn positivo — alívio da dor com elevação testicular). Em adultos jovens (< 35 anos), o tratamento ambulatorial empírico inclui antibioticoterapia (cobrindo clamídia e gonococo com ceftriaxona + doxiciclina), anti-inflamatório, suspensório escrotal e reavaliação clínica.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O sinal de Prehn positivo (alívio da dor ao elevar o testículo) associado a sintomas urinários em jovem orienta o diagnóstico de epididimite/orquiepididimite, diferenciando-a da torção testicular. O manejo consiste em antibioticoterapia empírica direcionada a patógenos sexualmente transmissíveis, sintomáticos e repouso.",
    "perolaClinica": "Dor testicular insidiosa + disúria + Prehn positivo = Orquiepididimite aguda (tratar com ATB e sintomáticos).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Urologia (SBU)",
      "CDC STI Treatment Guidelines"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2709
  },
  {
    "id": "q-usp-rp-2023-098",
    "code": "Q-USPRP23-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Obstrutivo — Volvo de Sigmoide",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 90 anos, com internação prolongada e imobilização por tratamento cirúrgico de fratura do colo do fêmur. Estava em antibioticoterapia para tratamento de pneumonia nosocomial e passou a apresentar parada de eliminação de flatos e fezes associada à distensão abdominal dolorosa. Ao exame, o estado geral era bom, entretanto o abdome era distendido, doloroso à palpação superficial, hipertimpânico e sem sinais de irritação peritoneal. A radiografia simples de abdome mostrou importante distensão gasosa de todo o cólon. Qual o provável diagnóstico e a melhor conduta indicada neste caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Íleo metabólico; compensação dos distúrbios hidroeletrolíticos e dieta laxativa.",
        "explanation": "Incorreta: O íleo metabólico/adinâmico envolve distensão primária do intestino delgado e estômago, enquanto a dilatação maciça restrita ao cólon sem obstrução mecânica caracteriza a síndrome de Ogilvie.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Megacólon funcional; colectomia total com ileostomia temporária e sepultamento do reto.",
        "explanation": "Incorreta: A colectomia total com ileostomia é uma cirurgia mutiladora desproporcional, reservada a casos de isquemia transmural, perfuração ou peritonite evidente.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Pseudo obstrução colônica aguda; descompressão endoscópica do cólon.",
        "explanation": "Correta: Paciente idoso, restrito ao leito pós-cirurgia ortopédica e em uso de fármacos, apresentando dilatação colônica maciça sem obstáculo mecânico mecânico luminal, fecha o diagnóstico de Síndrome de Ogilvie (pseudo-obstrução colônica aguda). Quando o tratamento conservador/neostigmina falha ou há contraindicação, a descompressão endoscópica é o tratamento preconizado.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Volvo colônico; colonoscopia descompressiva e compensação dos distúrbios hidroeletrolíticos.",
        "explanation": "Incorreta: O volvo de sigmoide apresenta imagem típica em \"grão de café\" ou \"U invertido\" com parada no reto/sigmoide, diferindo da dilatação harmoniosa de todo o cólon da pseudo-obstrução.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Síndrome de Ogilvie (pseudo-obstrução colônica aguda) decorre de desregulação do sistema nervoso autonômico em pacientes acamados, politraumatizados ou pós-cirúrgicos. Apresenta dilatação importante do cólon na ausência de obstrução mecânica, sendo tratada conservadoramente, com neostigmina ou descompressão colonoscópica.",
    "perolaClinica": "Idoso acamado + dilatação colônica maciça sem obstrução mecânica = Síndrome de Ogilvie.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "ASGE Guideline: Colonic pseudo-obstruction"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2709
  },
  {
    "id": "q-usp-rp-2023-099",
    "code": "Q-USPRP23-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Trombose Venosa Profunda (TVP) — Diagnóstico e Tratamento",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 54 anos com queixa de frialdade, cianose não fixa, parestesia e dor súbita em pé e perna direita há 8 horas. Possui de antecedentes uma prótese valvular aórtica mecânica com controle irregular da anticoagulação com Varfarina. Foi submetida a embolectomia de emergência para revascularização de membro inferior direito, bem- sucedida. Uma hora após do procedimento, já na recuperação, apresentou recrudescimento da dor no membro, edema de panturrilha e perda de pulsos que haviam sidos restabelecidos com a cirurgia. Qual o provável diagnóstico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome compartimental.",
        "explanation": "Correta: Após a revascularização bem-sucedida de um membro com isquemia prolongada (> 6-8 horas), a lesão de isquemia-reperfusão provoca aumento da permeabilidade capilar, edema intramuscular acentuado nos compartimentos osteofasciais inextensíveis e elevação da pressão intracompartimental, culminando em síndrome compartimental com dor intensa e perda secundária de pulsos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Flegmasia cerúlea dolens.",
        "explanation": "Incorreta: A flegmasia cerúlea dolens é uma complicação trombótica venosa maciça de todo o leito iliofemoral, não uma complicação imediata de embolectomia arterial.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Novo episódio embólico.",
        "explanation": "Incorreta: A recorrência embólica aguda não explicaria o edema tenso e maciço da panturrilha de instalação precoce típico da lesão de reperfusão.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Trombose arterial devido a lesão iatrogênica pelo cateter de Fogarty.",
        "explanation": "Incorreta: A lesão intimal pelo cateter de Fogarty pode provocar trombose arterial focal, mas o edema volumoso e a dor intensa em panturrilha são causados pelo aumento da pressão compartimental pós-reperfusão.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A síndrome compartimental pós-isquemia/reperfusão é uma emergência cirúrgica que ocorre tipicamente após embolectomia de membros isquêmicos por mais de 6 horas. O edema muscular intenso no compartimento inextensível colapsa a microcirculação e, subsequentemente, as artérias principais, exigindo fasciotomia descompressiva de urgência.",
    "perolaClinica": "Embolectomia bem-sucedida seguida de dor intensa, panturrilha empastada e perda de pulso = Síndrome compartimental pós-reperfusão (indicação de fasciotomia).",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rutherford's Vascular Surgery and Endovascular Therapy, 9th Edition",
      "Diretrizes da SBACV"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2709
  },
  {
    "id": "q-usp-rp-2023-100",
    "code": "Q-USPRP23-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Aneurismas Arteriais e Critérios de Intervenção",
    "banca": "USP-RP",
    "instituicao": "USP-RP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 64 anos com quadro de perda acentuada de peso (20 kg em 6 meses), astenia e dor abdominal pós pradial. Possui hipertensão arterial sistêmica descontrolada e tabagismo ativo. Ao exame físico apresenta se em regular estado geral, hipocorado e hidratado. Peso atual 47 kg, Abdome escavado sem dor à palpação no momento. Aorta abdominal palpável e pulsátil, porém endurecida. Sopro sistólico audível em mesogástrio sem alteração com a respiração. Pulsos em membros inferiores presentes e simétricos. Realizou tomografia de abdome abaixo: Qual o diagnóstico provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome do ligamento arqueado mediano.",
        "explanation": "Incorreta: A síndrome do ligamento arqueado mediano afeta tipicamente mulheres jovens e não costuma causar perda ponderal tão catastrófica (20 kg) associada a ateromatose grave difusa e sopro contínuo em idosos tabagistas.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Neoplasia de cabeça de pâncreas.",
        "explanation": "Incorreta: O adenocarcinoma pancreático pode cursar com dor pós-prandial e perda de peso, mas a tomografia demonstraria massa hipodensa na cabeça pancreática, sem o acometimento aterosclerótico calcificado obstrutivo das artérias mesentéricas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Compressão duodenal por aneurisma de aorta abdominal.",
        "explanation": "Incorreta: Não há dilatação aneurismática causando compressão duodenal extrínseca na imagem apresentada.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Isquemia mesentérica crônica.",
        "explanation": "Correta: O quadro de perda de peso acentuada secundária ao medo de comer (\"sitofobia\"), dor abdominal tipo cólica que surge 30 a 60 minutos após as refeições (angina abdominal), presença de sopro epigástrico e achado tomográfico de calcificações ateromatosas exuberantes com estenose/oclusão de ramos viscerais (tronco celíaco e artéria mesentérica superior) fecha o diagnóstico de isquemia mesentérica crônica.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A isquemia mesentérica crônica (angina abdominal) resulta da obstrução aterosclerótica de pelo menos dois dos três principais vasos esplâncnicos (tronco celíaco, mesentérica superior e mesentérica inferior). A incapacidade de aumentar o fluxo sanguíneo intestinal no período pós-prandial causa dor intensa e sitofobia, levando à desnutrição e perda de peso acentuada.",
    "perolaClinica": "Dor pós-prandial (\"angina abdominal\") + medo de comer (sitofobia) + grande perda de peso em tabagista = Isquemia mesentérica crônica.",
    "referencias": [
      "USP-RP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "Rutherford's Vascular Surgery and Endovascular Therapy, 9th Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-rp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 2710,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-rp-2023/q100.png",
      "modality": "Tomografia",
      "caption": "Angiotomografia abdominal com reconstrução sagital evidenciando ateromatose calcificada extensa e estenose do tronco celíaco e artéria mesentérica superior.",
      "aspectRatio": "16:9"
    }
  }
];
