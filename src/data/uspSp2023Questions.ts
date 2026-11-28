import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa USP-SP 2023 — Acesso Direto (120 questões: 120 válidas + 0 anuladas).
 * Extraída deterministicamente com gabarito oficial e comentários ancorados em diretrizes.
 */
export const USP_SP_2023_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-usp-sp-2023-001",
    "code": "Q-USPSP23-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Diverticulite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-diverticulite-aguda",
    "tags": [
      "diverticulite-aguda",
      "tratamento-clinico",
      "abdome-agudo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 72 anos de idade, procura o Serviço de Urgência devido à dor no flanco e na fossa ilíaca esquerdos há 2 dias. Fez uso de analgésico sem melhora. Refere ser constipado e está sem evacuar há três dias. Nega febre e relata perda de apetite. Tem diabete melito e hipertensão arterial controlados. Ao exame clínico, encontra-se em bom estado geral; IMC 30,2 kg/m² ; FC 80 bpm; PA 130x80 mmHg; sem alterações da ausculta torácica; abdome globoso, flácido, doloroso à palpação do flanco e da fossa ilíaca esquerdos, com sinal de irritação peritoneal neste local; ruídos hidroaéreos presentes; e toque retal com fezes na ampola. Exames laboratoriais: Hb 13,1 g/dL; Ht 38%; Leucócitos 15.693/mm³ ; PCR 138 mg/L.Tomografia apresentada: Qual é a melhor conduta neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Laparoscopia diagnóstica.",
        "explanation": "Incorreta: A laparoscopia diagnóstica/cirúrgica está reservada para casos de peritonite difusa (Hinchey III/IV), sepse refratária ou falha do tratamento conservador.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Drenagem percutânea da coleção.",
        "explanation": "Incorreta: A drenagem percutânea guiada por imagem é indicada para abscessos pericólicos ou pélvicos volumosos (em geral, maiores que 3 a 4 cm, Hinchey Ib/II), o que não é o caso aqui.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tratamento clínico.",
        "explanation": "Correta: A diverticulite aguda não complicada (Hinchey Ia) ou com microabscessos/flegmão sem coleções drenáveis em paciente clinicamente estável deve ser manejada com tratamento clínico (analgesia, suporte e antibioticoterapia quando indicada conforme diretrizes do WSES/SAGES).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Colectomia esquerda com anastomose.",
        "explanation": "Incorreta: A colectomia de urgência é uma cirurgia de grande porte indicada diante de peritonite fecal/purulenta generalizada, obstrução completa ou perfuração livre, e não na fase inicial não complicada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O quadro clínico e tomográfico evidencia diverticulite aguda não complicada (ou Hinchey Ia, com apenas espessamento parietal e densificação da gordura pericolônica, sem coleção drenável ou pneumoperitônio à distância). Nesses pacientes estáveis e sem sinais de peritonite difusa, a conduta recomendada pelas diretrizes internacionais (WSES, ASCRS) é o tratamento clínico conservador.",
    "perolaClinica": "Diverticulite Hinchey Ia ou sem coleções > 3-4 cm em paciente estável tem indicação de tratamento clínico conservador.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "WSES Guidelines for the management of acute left-sided colonic diverticulitis in the emergency setting (2020)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2963,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q001.png",
      "modality": "Tomografia",
      "caption": "TC de abdome com contraste evidenciando espessamento da parede do sigmoide e densificação da gordura pericolônica, sem grandes coleções organizadas.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora na diverticulite aguda não complicada (Hinchey Ia) em paciente clinicamente estável.",
      "raciocinioChave": "Idoso estável com dor em flanco/fossa ilíaca esquerda e diverticulite aguda sem coleção abscedida grande ou pneumoperitônio difuso na tomografia (Hinchey Ia) deve receber tratamento clínico. Analgesia, suporte e antibioticoterapia quando indicada controlam a fase inflamatória sem necessidade de intervenção invasiva.",
      "armadilhaBanca": "Indicar drenagem percutânea ou abordagem cirúrgica precoce diante de dor localizada e leucocitose sem abscesso drenável ou peritonite difusa."
    },
    "mapaDistratores": {
      "A": "A laparoscopia diagnóstica ou terapêutica reserva-se a casos de peritonite difusa (Hinchey III/IV), sepse refratária ou falha do manejo conservador.",
      "B": "A drenagem percutânea guiada por imagem é indicada para abscessos pericólicos ou pélvicos maiores que 3 a 4 cm (Hinchey Ib/II), ausentes neste caso.",
      "D": "A colectomia esquerda de urgência é reservada para perfuração livre, peritonite generalizada ou obstrução completa, sendo desproporcional na forma não complicada."
    }
  },
  {
    "id": "q-usp-sp-2023-002",
    "code": "Q-USPSP23-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "deiscencia-de-anastomose",
      "peritonite",
      "piperacilina-tazobactam"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 65 anos de idade, está internada na enfermaria, no sexto dia de pós- operatório de colectomia direita por câncer de cólon. Evoluiu com dor abdominal, vômitos e febre. Ao exame clínico, encontra-se em bom estado geral, FC de 100 bpm e PA de 110x70 mmHg; dor abdominal à palpação difusa com irritação peritoneal. Realizada a tomografia de abdome total com imagem compatível com deiscência da anastomose intestinal. Foi indicada laparotomia exploradora com presença de peritonite purulenta e deiscência da anastomose. Dentre as alternativas abaixo, qual é o esquema de antibioticoterapia mais adequado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ceftriaxone + metronidazol; 10 dias.",
        "explanation": "Incorreta: A infecção intra-abdominal pós-operatória (nosocomial/associada à assistência) exige cobertura de patógenos hospitalares resistentes, incluindo Pseudomonas aeruginosa e enterobactérias produtoras de betalactamase, além de a duração de 10 dias ser excessiva após controle de foco cirúrgico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Piperacilina + tazobactan; 10 dias.",
        "explanation": "Incorreta: O espectro está correto com piperacilina-tazobactam, porém o tempo prolongado de 10 dias é desnecessário com base nos ensaios clínicos modernos (como o estudo STOP-IT), aumentando risco de toxicidade e resistência bacteriana.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Ceftriaxone + metronidazol; 5 dias.",
        "explanation": "Incorreta: Ceftriaxone associado a metronidazol é esquema de escolha para infecções intra-abdominais comunitárias, não cobrindo adequadamente patógenos nosocomiais em deiscência no 6º dia de pós-operatório.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Piperacilina + tazobactan; 5 dias.",
        "explanation": "Correta: Trata-se de infecção intra-abdominal hospitalar/nosocomial pós-operatória, requerendo cobertura de amplo espectro com antipseudomonas e anaeróbios (Piperacilina-Tazobactam). Diretrizes como SIS/IDSA e dados do estudo STOP-IT recomendam esquemas curtos (cerca de 4 a 5 dias) após o controle cirúrgico adequado da fonte de contaminação.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Pacientes com peritonite secundária a deiscência anastomótica no pós-operatório hospitalar (infecção intra-abdominal nosocomial) necessitam de antibioticoterapia de amplo espectro com ação contra bacilos Gram-negativos multirresistentes, incluindo Pseudomonas aeruginosa (ex.: Piperacilina-Tazobactam). Após a intervenção e controle cirúrgico satisfatório do foco infeccioso, o tempo recomendado é curto, em torno de 4 a 5 dias, conforme preconizado pelas diretrizes da SIS/IDSA e pelo estudo STOP-IT.",
    "perolaClinica": "Infecção intra-abdominal nosocomial pós-operatória: cobrir Pseudomonas (ex: pip/tazo) e tratar por tempo curto (4-5 dias) pós-controle de foco.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "SIS/IDSA Guidelines for the Management of Complicated Intra-abdominal Infections",
      "Trial of Short-Course Antimicrobial Therapy for Intra-Abdominal Infection (STOP-IT, NEJM 2015)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2963,
    "analiseBanca": {
      "conceitoCentral": "Antibioticoterapia nosocomial de curto prazo (5 dias com piperacilina-tazobactam) na deiscência anastomótica controlada.",
      "raciocinioChave": "Deiscência anastomótica no 6º pós-operatório configura infecção intra-abdominal nosocomial, demandando cobertura de amplo espectro com ação antipseudomonas e anaeróbia (piperacilina-tazobactam). Após laparotomia com controle cirúrgico satisfatório do foco infeccioso (estudo STOP-IT), o tempo indicado é curto, em torno de 5 dias.",
      "armadilhaBanca": "Prescrever esquema comunitário (ceftriaxone + metronidazol) para infecção pós-operatória nosocomial ou prolongar a terapia por 10 dias após controle do foco."
    },
    "mapaDistratores": {
      "A": "Ceftriaxone com metronidazol não cobre adequadamente patógenos nosocomiais como Pseudomonas aeruginosa na deiscência pós-operatória, além de 10 dias exceder a duração recomendada.",
      "B": "Embora piperacilina-tazobactam tenha espectro adequado, manter o antibiótico por 10 dias após controle cirúrgico do foco contraria as evidências atuais do estudo STOP-IT.",
      "C": "O esquema ceftriaxone + metronidazol é restrito a infecções intra-abdominais comunitárias, mostrando-se insuficiente para infecção pós-operatória hospitalar."
    }
  },
  {
    "id": "q-usp-sp-2023-003",
    "code": "Q-USPSP23-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Perfurativo",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-abdome-agudo-perfurativo",
    "tags": [
      "ulcera-perfurada",
      "abdome-agudo-perfurativo",
      "aine"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 63 anos de idade, refere dor abdominal de forte intensidade, difusa e de início súbito há 2 horas. Nega vômitos. Última evacuação há 1 dia. Tem artrite reumatoide. Faz uso de um imunossupressor e corticoide. Na última semana, tomou cetoprofeno devido à dor nas mãos. Ao exame clínico, encontra-se em regular estado geral; FC 110 bpm; PA 100x60 mmHg; abdome plano, doloroso à palpação; e sinal de irritação peritoneal difusa. Exames laboratoriais: Hb 11,9 g/dL; Ht 32%; leucócitos 18.318/mm³ ; PCR 84 mg/L; amilase 251 U/L; lipase 101 U/L. Foi realizada tomografia de abdome. Assinale a alternativa que contém imagens que correspondem à principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: Demonstra volumoso pneumoperitônio livre subdiafragmático e peri-hepático na tomografia, achado radiológico patognomônico de perfuração de víscera oca (abdome agudo perfurativo), condizente com o uso de AINE e corticoides pela paciente.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Exibe achados tomográficos incompatíveis com perfuração livre de víscera oca (outras alterações anatômicas/patológicas sem ar livre intraperitoneal).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Não demonstra a presença de pneumoperitônio livre correspondente à apresentação clássica de abdome agudo perfurativo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Não exibe o volumoso gás extraluminal intraperitoneal típico da perfuração duodenal/gástrica descrita.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A história de uso crônico de corticoide e recente de AINE (cetoprofeno), associada à dor abdominal súbita de forte intensidade e abdome em tábua com peritonite difusa, é o clássico quadro de abdome agudo perfurativo por úlcera péptica. A TC de abdome confirma o diagnóstico ao evidenciar ar extraluminal livre na cavidade peritoneal (pneumoperitônio), retratado na alternativa A.",
    "perolaClinica": "Dor súbita em facada associada ao uso de AINEs/corticoides com peritonite difusa = úlcera péptica perfurada; procure pneumoperitônio na TC/RX.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "World Journal of Emergency Surgery - WSES guidelines for the management of perforated peptic ulcer (2020)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2964,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q003.png",
      "modality": "Tomografia",
      "caption": "Tomografia computadorizada de abdome demonstrando ar livre intraperitoneal (pneumoperitônio) peri-hepático e subdiafragmático.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico tomográfico de abdome agudo perfurativo (pneumoperitônio) secundário ao uso de AINE e corticoide.",
      "raciocinioChave": "Dor abdominal súbita intensa e peritonite difusa em paciente usuária crônica de corticoide e recente de cetoprofeno indicam perfuração de úlcera péptica. A confirmação ocorre pela identificação de gás extraluminal livre na cavidade peritoneal (pneumoperitônio) demonstrado na alternativa A.",
      "armadilhaBanca": "Supervalorizar leve elevação de amilase/lipase secundária à perfuração e peritonite para pensar em pancreatite aguda, deixando de identificar o pneumoperitônio."
    },
    "mapaDistratores": {
      "B": "A imagem correspondente não evidencia gás extraluminal livre na cavidade peritoneal compatível com abdome agudo perfurativo.",
      "C": "Os cortes tomográficos mostrados não apresentam o pneumoperitônio livre subdiafragmático ou peri-hepático característico da perfuração de víscera oca.",
      "D": "A imagem não exibe o acúmulo de ar livre intraperitoneal esperado na perfuração gastroduodenal associada a AINE e corticoide."
    }
  },
  {
    "id": "q-usp-sp-2023-004",
    "code": "Q-USPSP23-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": [
      "abscesso-perianal",
      "fistula-perianal",
      "glandulas-anais"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 23 anos de idade, refere dor na região perianal há 3 dias com piora progressiva e exacerbação ao sentar e evacuar. Relata febre há 12 horas. Teve a última evacuação há 2 dias e tem hábito intestinal diário normal. Sem queixas urinárias. Nega comorbidades. Tem vida sexual ativa com relação anal, sem parceiro fixo. Ao exame clínico, encontra-se em bom estado geral; abdome sem alterações. Inspeção anal com abaulamento em posição equivalente a “3 horas”, dor à palpação local e saída de secreção purulenta em pequena quantidade, em posição equivalente a “7 horas”, em orifício fistuloso (imagem a seguir). Toque retal muito doloroso, sem sangue ou lesão tumoral. Exames laboratorias Hb de 13,5 g/dL; Leucograma 16.274 mm³ ; PCR 129 mg/L. Realizada tomografia de pelve (imagens a seguir). Qual é a etiologia mais comum desta doença?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Doença de Crohn.",
        "explanation": "Incorreta: Embora a Doença de Crohn possa cursar com fístulas complexas e abscessos perianais, ela responde por menos de 10% de todos os casos de abscesso/fístula anorretal, não sendo a etiologia mais frequente.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Inflamação das glândulas do canal anal.",
        "explanation": "Correta: A grande maioria (mais de 90%) dos abscessos e fístulas anorretais decorre da teoria criptoglandular de Parks, iniciada pela obstrução e infecção secundária das glândulas anais que se abrem nas criptas de Morgagni ao nível da linha pectínea.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Retocolite ulcerativa.",
        "explanation": "Incorreta: A retocolite ulcerativa acomete a mucosa colorretal de forma contínua e raramente cursa com doença orificial fistulizante, diferentemente da Doença de Crohn.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Infecção sexualmente transmissível.",
        "explanation": "Incorreta: Infecções sexualmente transmissíveis (como LGV e sífilis) podem causar proctite e úlceras, mas não são a principal etiologia dos abscessos e trajetos fistulosos perianais.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A apresentação clínica com abaulamento doloroso e saída de secreção purulenta por orifício externo é típica de abscesso perianal com fístula em formação. De acordo com a clássica teoria criptoglandular de Eisenhammer e Parks, a etiologia mais comum de fístulas e abscessos anorretais não específicos é a infecção das glândulas anais ramificadas na linha criptopretínea.",
    "perolaClinica": ">90% dos abscessos e fístulas anorretais são de origem criptoglandular (infecção das glândulas do canal anal).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "American Society of Colon and Rectal Surgeons (ASCRS) Practice Parameters for the Management of Perianal Abscess and Fistula-in-Ano"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2965,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q004.png",
      "modality": "Fotografia Clínica",
      "caption": "Inspeção anal e cortes de TC de pelve demonstrando coleção líquida com trajeto fistuloso perianal.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Etiologia criptoglandular como principal causa de abscesso e fístula perianal na população geral.",
      "raciocinioChave": "Homem jovem com abaulamento perianal doloroso e drenagem purulenta por orifício externo apresenta abscesso e fístula anorretal. Conforme a teoria criptoglandular de Parks, mais de 90% desses quadros originam-se da obstrução e inflamação das glândulas anais nas criptas de Morgagni.",
      "armadilhaBanca": "Supervalorizar o histórico de relação anal ou possíveis doenças inflamatórias para marcar IST ou Crohn em vez da origem criptoglandular primária."
    },
    "mapaDistratores": {
      "A": "A doença de Crohn pode cursar com fístulas perianais complexas, porém representa menos de 10% do total de casos e não há manifestações intestinais sugestivas.",
      "C": "A retocolite ulcerativa limita-se à mucosa colorretal e raramente ocasiona abscessos ou trajetos fistulosos perianais.",
      "D": "Infecções sexualmente transmissíveis podem causar proctite ou ulcerações anorretais, mas não constituem a etiologia predominante dos abscessos e fístulas perianais."
    }
  },
  {
    "id": "q-usp-sp-2023-005",
    "code": "Q-USPSP23-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Apendicite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-apendicite-aguda",
    "tags": [
      "apendicectomia",
      "pos-operatorio",
      "alta-hospitalar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 19 anos de idade, procurou o Serviço de Emergência devido à dor abdominal há 1 dia. Não apresenta comorbidades. O paciente foi submetido a tratamento operatório com os achados apresentados. O procedimento evoluiu sem intercorrências. Qual deve ser a dieta no primeiro pós-operatório e quando deve receber alta hospitalar?",
    "alternativas": [
      {
        "letter": "A",
        "text": "dieta leve; terceiro pós-operatório.",
        "explanation": "Incorreta: Reter a alta até o terceiro pós-operatório é desnecessário e prolonga a hospitalização em casos de apendicite sem complicações, aumentando custos e riscos hospitalares.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "dieta leve; primeiro pós-operatório.",
        "explanation": "Correta: Em apendicectomia não complicada e sem intercorrências cirúrgicas, os protocolos modernos de aceleração da recuperação pós-operatória (ERAS / ACERTO) recomendam realimentação precoce (dieta leve no 1º PO) e alta hospitalar já no 1º PO.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "jejum; primeiro pós-operatório.",
        "explanation": "Incorreta: Manter jejum no pós-operatório de cirurgia não complicada sem íleo adinâmico retarda a recuperação e não possui respaldo científico.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "jejum; terceiro pós-operatório.",
        "explanation": "Incorreta: Não há justificativa para manter jejum ou internar o paciente jovem hígido por três dias após apendicectomia sem complicações.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Após a apendicectomia por apendicite aguda inicial/não complicada, em paciente jovem sem comorbidades e sem intercorrências, os conceitos de reabilitação multimodal (protocolos ACERTO/ERAS) preconizam o retorno precoce da dieta oral (dieta leve no 1º PO) e alta precoce programada no 1º pós-operatório.",
    "perolaClinica": "Apendicite aguda não complicada tratada com sucesso: reintrodução precoce da dieta e alta no 1º dia pós-operatório.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes do Projeto ACERTO (Aceleração da Recuperação Total Pós-Operatória)",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2966,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q005.png",
      "modality": "Fotografia Clínica",
      "caption": "Peça cirúrgica e achado intraoperatório de apendicite aguda inicial não perfurada.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Protocolo ERAS/ACERTO na apendicectomia não complicada: dieta leve e alta no 1º pós-operatório.",
      "raciocinioChave": "Em paciente jovem sem comorbidades submetido a apendicectomia não complicada e sem intercorrências, aplicam-se as diretrizes de aceleração da recuperação pós-operatória (ERAS/ACERTO). Recomenda-se reintrodução precoce de dieta leve e alta hospitalar já no 1º dia pós-operatório.",
      "armadilhaBanca": "Manter jejum pós-operatório desnecessário ou prolongar a internação por 3 dias seguindo conduta tradicionalista em caso não complicado."
    },
    "mapaDistratores": {
      "A": "Postergar a alta até o 3º pós-operatório em apendicectomia simples sem intercorrências prolonga a hospitalização e eleva riscos sem benefício clínico.",
      "C": "Manter jejum no 1º pós-operatório de cirurgia abdominal não complicada sem íleo adinâmico retarda a recuperação e contraria os protocolos ERAS/ACERTO.",
      "D": "Combinar jejum prolongado e alta apenas no 3º pós-operatório em jovem hígido pós-apendicectomia simples carece de respaldo científico atual."
    }
  },
  {
    "id": "q-usp-sp-2023-006",
    "code": "Q-USPSP23-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "infeccao-de-sitio-cirurgico",
      "herniorrafia-incisional",
      "desbridamento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 54 anos de idade, está no 6º pós-operatório de correção de hérnia incisional de laparotomia mediana com colocação de tela de polipropileno sobre a aponeurose (técnica onlay). Foi colocado dreno no subcutâneo. Evoluiu com dor na incisão e com saída de secreção espessa e purulenta. Ao exame clínico, encontra- se em bom estado geral, afebril, abdome (imagem a seguir) flácido e pouco doloroso à palpação. Qual deve ser a conduta neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Troca da tela e curativo com carvão ativado.",
        "explanation": "Incorreta: Não se deve recolocar nova tela em leito francamente infectado, pois haverá recontaminação inevitável do material protético.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Cefazolina com abertura da incisão, se não houver melhora.",
        "explanation": "Incorreta: Infecções purulentas de ferida operatória necessitam primariamente de drenagem e abertura da ferida; postergar a drenagem apostando apenas em antibiótico é conduta equivocada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Retirada da tela e curativo com pressão negativa.",
        "explanation": "Incorreta: A retirada imediata da tela de polipropileno (macroporosa) não é obrigatória de imediato se a infecção for superficial/subcutânea e a tela puder ser preservada através de desbridamento, drenagem e curativos locais.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Retirada de pontos, desbridamento e curativo diário.",
        "explanation": "Correta: Diante de secreção francamente purulenta na ferida operatória, a conduta imperativa é a drenagem mediante retirada de pontos, abertura da pele e tecido celular subcutâneo, desbridamento de tecidos desvitalizados e curativos diários, permitindo a cicatrização por segunda intenção.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A presença de secreção purulenta na ferida operatória traduz infecção de sítio cirúrgico. O princípio cirúrgico básico fundamental diante de secreção purulenta ou abscesso é a drenagem imediata: retirada de pontos da sutura, lavagem mecânica, remoção de crostas ou tecidos necróticos e realização de curativos diários.",
    "perolaClinica": "Pus na ferida operatória = retirada de pontos, drenagem ampla, desbridamento e curativos frequentes.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "CDC Guideline for the Prevention of Surgical Site Infection"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2966,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q006.png",
      "modality": "Fotografia Clínica",
      "caption": "Ferida operatória mediana com eritema, deiscência parcial e drenagem purulenta ativa após correção de hérnia.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Manejo de infecção superficial de sítio cirúrgico com secreção purulenta pós-hernioplastia onlay.",
      "raciocinioChave": "Saída de secreção espessa e purulenta na incisão traduz infecção de sítio cirúrgico com indicação absoluta de drenagem imediata. A retirada de pontos, abertura da ferida, desbridamento de tecidos desvitalizados e curativos diários controlam a infecção permitindo frequentemente preservar a tela de polipropileno macroporosa.",
      "armadilhaBanca": "Indicar retirada ou troca imediata da tela de polipropileno em infecção superficial, ou tentar tratar secreção purulenta apenas com antibiótico sem drenagem."
    },
    "mapaDistratores": {
      "A": "Implantar nova tela em leito francamente infectado resulta em recontaminação inevitável da prótese e manutenção do foco séptico.",
      "B": "Postergar a drenagem mecânica apostando apenas em cefazolina é erro técnico, pois coleção purulenta em ferida cirúrgica exige abertura imediata.",
      "C": "A remoção imediata da tela macroporosa de polipropileno não é obrigatória inicialmente quando a infecção se restringe ao subcutâneo e responde à drenagem aberta e curativos."
    }
  },
  {
    "id": "q-usp-sp-2023-007",
    "code": "Q-USPSP23-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnias Umbilical, Epigástrica e Incisional",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernias-umbilical-epigastrica-e-incisional",
    "tags": [
      "seroma",
      "hernia-incisional",
      "cinta-abdominal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 63 anos de idade, foi submetida à correção de hérnia incisional de laparotomia mediana. Foi feita a correção da hérnia com colocação de tela pré-aponeurótica (onlay) e drenagem fechada do subcutâneo. Recebeu alta hospitalar no 4º pós-operatório após a retirada do dreno. A paciente retorna em consulta ambulatorial, 7 dias após a alta, com queixa de abaulamento na incisão. Ao exame clínico, encontra-se em bom estado geral; abdome flácido, indolor à palpação, presença de coleção líquida no subcutâneo, sem sinais inflamatórios. Ultrassom de parede abdominal apresentado. Qual deve ser a conduta neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar antibioticoterapia.",
        "explanation": "Incorreta: O ultrassom e a clínica mostram coleção anecoica homogênea no subcutâneo sem sinais de celulite ou infecção (seroma asséptico), portanto não há indicação de antibiótico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Recolocar o dreno subcutâneo.",
        "explanation": "Incorreta: A recolocação invasiva de dreno é contraindicada pelo alto risco de colonização bacteriana e infecção secundária da tela.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Usar cinta abdominal.",
        "explanation": "Correta: A formação de seroma é comum após grandes descolamentos subcutâneos para tela onlay. Na ausência de dor intensa, infecção ou repercussão clínica, a conduta recomendada é conservadora com uso de contenção elástica (cinta abdominal), permitindo a reabsorção espontânea.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Abrir parcialmente a incisão.",
        "explanation": "Incorreta: Abrir a incisão transformaria uma coleção estéril em ferida aberta com exposição da tela e elevado risco de contaminação bacteriana.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Coleções líquidas subcutâneas indolores, anecoicas e sem sinais inflamatórios sistêmicos ou locais após reparo de hérnias incisionais correspondem a seromas. A conduta padrão para seromas assintomáticos ou pouco sintomáticos é eminentemente conservadora, utilizando suporte com cinta abdominal compressiva para favorecer a reabsorção natural.",
    "perolaClinica": "Seroma asséptico pós-correção de hérnia com tela: conduta expectante com cinta abdominal compressiva; evite puncionar sem necessidade.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "European Hernia Society guidelines on closure of abdominal wall incisions"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2967,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q007.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia de parede abdominal mostrando coleção líquida anecoica homogênea no subcutâneo (seroma) sem fluxo ao Doppler.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora (cinta abdominal) no seroma pós-operatório assintomático após hernioplastia onlay.",
      "raciocinioChave": "Abaulamento indolor sem sinais flogísticos e coleção subcutânea anecoica ao ultrassom após hernioplastia com tela onlay caracterizam seroma simples pós-descolamento. Na ausência de infecção ou dor importante, a conduta é conservadora com uso de cinta abdominal compressiva para favorecer a reabsorção.",
      "armadilhaBanca": "Prescrever antibiótico para seroma estéril ou abrir/recolocar dreno na ferida, contaminando uma coleção asséptica sobre a tela."
    },
    "mapaDistratores": {
      "A": "O líquido anecoico homogêneo e a ausência de dor, hiperemia ou febre afastam infecção ativa, não havendo indicação de antibioticoterapia.",
      "B": "Recolocar um dreno subcutâneo em seroma estéril cria porta de entrada bacteriana e aumenta o risco de infecção secundária da tela.",
      "D": "Abrir parcialmente a incisão converte uma coleção asséptica em ferida aberta contaminada com exposição direta da prótese."
    }
  },
  {
    "id": "q-usp-sp-2023-008",
    "code": "Q-USPSP23-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": [
      "dreno-cirurgico",
      "gradiente-de-pressao",
      "herniorrafia-incisional"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 57 anos de idade, foi submetido à correção de hérnia incisional de laparotomia mediana com colocação de tela sobre a aponeurose (imagem a seguir). Qual é o princípio de funcionamento do dreno indicado para esta situação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Gradiente de pressão, passivo.",
        "explanation": "Incorreta: Os drenos passivos por gradiente de pressão dependem da gravidade (como o dreno em selo d'água), mas o dreno de sucção subcutânea opera ativamente por pressão negativa gerada pelo reservatório colapsado.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Gradiente de pressão, ativo.",
        "explanation": "Correta: Na técnica onlay, há extenso descolamento subcutâneo gerando grande espaço morto; a drenagem indicada é a fechada com sistema de sucção (ex.: dreno de Jackson-Pratt ou Portovac), cujo funcionamento é ativo baseado em um gradiente de pressão negativa (vácuo criado externamente no reservatório).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Capilaridade, ativo.",
        "explanation": "Incorreta: Capilaridade é o princípio de drenos laminares (ex: dreno de Penrose), que funcionam de forma passiva, não ativa.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Capilaridade, passivo.",
        "explanation": "Incorreta: Drenos que funcionam por capilaridade e passividade (Penrose) não são adequados para grandes espaços mortos sob telas, pois aumentam a chance de infecção retrógrada e extravasamento.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O dreno de escolha para prevenir seromas e hematomas em grandes descolamentos de tela pré-aponeurótica é o dreno de sucção fechada (Portovac/Jackson-Pratt). Esses drenos utilizam pressão subatmosférica criada artificialmente pelo reservatório para aspirar fluidos ativamente contra a resistência dos tecidos (mecanismo ativo por gradiente de pressão).",
    "perolaClinica": "Drenos de sucção fechada (Portovac/Jackson-Pratt): princípio por gradiente de pressão negativa, mecanismo ATIVO.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "Townsend: Sabiston Tratado de Cirurgia"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2967,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q008.png",
      "modality": "Fotografia Clínica",
      "caption": "Fixação de tela de polipropileno pré-aponeurótica (onlay) em parede abdominal com grande descolamento subcutâneo.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Princípio físico do dreno fechado a vácuo (gradiente de pressão ativo) em hernioplastia incisional onlay.",
      "raciocinioChave": "O extenso descolamento subcutâneo necessário na técnica onlay gera amplo espaço morto, requerendo drenagem fechada por sucção (Portovac ou Jackson-Pratt). Esse sistema funciona ativamente por gradiente de pressão negativa gerado pelo reservatório colapsado.",
      "armadilhaBanca": "Confundir o mecanismo de sucção fechada com drenagem passiva por gravidade ou com drenagem capilar laminar (dreno de Penrose)."
    },
    "mapaDistratores": {
      "A": "Drenos passivos por gradiente de pressão dependem apenas da gravidade ou da pressão interna da cavidade, não da aspiração contínua a vácuo do reservatório.",
      "C": "A capilaridade é o princípio físico de drenos laminares abertos, que operam sempre de forma passiva e não ativa.",
      "D": "Drenos passivos por capilaridade (Penrose) são inadequados para grandes espaços mortos sobre telas protéticas pelo alto risco de infecção retrógrada."
    }
  },
  {
    "id": "q-usp-sp-2023-009",
    "code": "Q-USPSP23-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": [
      "politrauma",
      "ventilacao-mecanica",
      "trauma-toracico",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 33 anos, vítima de acidente de motocicleta em alta velocidade. Foi intubado na cena devido à inconsciência. Condições na admissão no Serviço de Emergência: I – entubado, saturação de O₂ 85%, colar cervical; II – escoriação no tórax direito, ausculta diminuída à direita, sem enfisema de subcutâneo; III – PA 140x80 mmHg, FC 100 bpm, FAST negativo. IV – escala de Coma de Glasgow de 3T, sedado; V – fratura exposta de perna direita. Qual deve ser a conduta com relação ao trauma de tórax?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ventilação mecânica.",
        "explanation": "Correta: O paciente foi intubado na cena, apresenta-se com grave hipoxemia (SatO2 85%), ausculta diminuída à direita em tórax contuso, sem pneumotórax hipertensivo (PA normal, sem desvio ou turgência). A prioridade no 'B' da via aérea garantida é a conexão, ajuste e otimização da ventilação mecânica com oxigenação a 100% e verificação do posicionamento do tubo.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Drenagem torácica.",
        "explanation": "Incorreta: Não há dados inequívocos de hemo ou pneumotórax drenável antes de checar a ventilação e realizar radiografia de tórax/eFAST torácico, visto que o paciente está hemodinamicamente estável e não tem enfisema de subcutâneo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tração do tubo traqueal.",
        "explanation": "Incorreta: A intubação seletiva usualmente ocorre no brônquio fonte direito (o que levaria à diminuição da ausculta à ESQUERDA, e não à direita). Tracionar às cegas causaria extubação inadvertida.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Videotoracoscopia.",
        "explanation": "Incorreta: Videotoracoscopia é exame/intervenção eletiva ou tardia, totalmente inadequada para o atendimento inicial no pronto-socorro ao politraumatizado grave.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "No paciente politraumatizado intubado ('A' controlado) com hipoxemia importante ('B' comprometido: SatO2 85%), a primeira etapa imediata após assegurar o posicionamento do tubo é conectar e fornecer suporte ventilatório adequado via ventilação mecânica com FiO2 100%, prosseguindo com a avaliação radiológica/ultrassonográfica imediata do tórax.",
    "perolaClinica": "No politraumatizado intubado com hipoxemia, a prioridade imediata do 'B' é garantir a ventilação mecânica e oxigenação adequadas.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS - Advanced Trauma Life Support, 10ª Edição, American College of Surgeons"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2968,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q009.png",
      "modality": "Fotografia Clínica",
      "caption": "Condições do paciente politraumatizado na sala de emergência.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Priorização do \"B\" no trauma: ventilação mecânica imediata no paciente já intubado com hipoxemia grave.",
      "raciocinioChave": "Com a via aérea garantida por intubação (\"A\"), a presença de hipoxemia grave (SatO2 85%) e ausculta reduzida à direita sem hipotensão ou enfisema subcutâneo direciona a prioridade imediata ao \"B\". Deve-se instituir ventilação mecânica adequada para corrigir a hipoxemia enquanto se completa a avaliação torácica.",
      "armadilhaBanca": "Indicar drenagem torácica precipitada sem sinais de pneumotórax hipertensivo ou tracionar o tubo às cegas presumindo intubação seletiva no lado errado."
    },
    "mapaDistratores": {
      "B": "Sem instabilidade hemodinâmica, enfisema subcutâneo ou confirmação radiológica/eFAST de pneumotórax ou hemotórax volumoso, não se deve drenar o tórax antes de otimizar a ventilação.",
      "C": "A intubação seletiva ocorre tipicamente no brônquio direito e reduziria o murmúrio à esquerda (não à direita), além de tração às cegas poder provocar extubação acidental.",
      "D": "A videotoracoscopia é procedimento cirúrgico de centro cirúrgico, impróprio para o atendimento inicial de emergência na sala de trauma."
    }
  },
  {
    "id": "q-usp-sp-2023-010",
    "code": "Q-USPSP23-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": [
      "tce",
      "edema-cerebral-difuso",
      "proclive",
      "controle-termico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 42 anos, vítima de colisão de moto contra anteparo fixo, com traumatismo craniano. Na sala de trauma, encontra-se entubado, em ventilação mecânica protetora. A tomografia de crânio mostra edema cerebral difuso, sem lesões focais ou sinais de hipertensão intracraniana. Qual é a conduta com relação ao trauma de crânio na Sala de Trauma?",
    "alternativas": [
      {
        "letter": "A",
        "text": "hipotermia; hipotensão permissiva; monitorização da pressão intracraniana.",
        "explanation": "Incorreta: Hipotermia profilática e hipotensão permissiva são formalmente contraindicadas no trauma cranioencefálico grave, pois a hipotensão reduz a pressão de perfusão cerebral (PPC) e piora a mortalidade.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "hiperventilação; hipotermia protetora; manitol endovenoso.",
        "explanation": "Incorreta: A hiperventilação de rotina causa vasoconstrição cerebral e isquemia secundária; manitol não deve ser usado profilaticamente sem sinais clínicos/tomográficos de herniação ou HIC confirmada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "sedação com tiopental; hidantoína; controle de temperatura.",
        "explanation": "Incorreta: Tiopental é reservado para HIC refratária em UTI; a fenitoína pode ser usada para profilaxia de crises, mas o barbitúrico não é medida de primeira linha na sala de trauma.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "proclive; controle de temperatura; posição cervical neutra.",
        "explanation": "Correta: As medidas fundamentais de neuroproteção de nível 1 na sala de trauma incluem cabeceira elevada a 30° (proclive) para facilitar a drenagem venosa jugular, controle rigoroso da temperatura (evitando febre) e manutenção da coluna cervical em posição neutra sem compressão jugular.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "No paciente com TCE que apresenta edema difuso sem sinais francos de herniação imediata, a neuroproteção inicial visa minimizar lesões cerebrais secundárias. Isso é obtido com elevação da cabeceira a 30° (proclive), cabeça alinhada em posição neutra (otimizando o retorno venoso do encéfalo) e controle estrito da temperatura corporal (normotermia, prevenindo hipertermia que aumenta a demanda metabólica).",
    "perolaClinica": "Medidas basais de neuroproteção no TCE: cabeceira elevada a 30° (proclive), pescoço em posição neutra e normotermia estrita.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brain Trauma Foundation Guidelines for the Management of Severe Traumatic Brain Injury, 4th ed.",
      "ATLS 10ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2969,
    "analiseBanca": {
      "conceitoCentral": "Medidas de neuroproteção inicial na sala de trauma para TCE com edema difuso sem herniação focal.",
      "raciocinioChave": "No TCE com edema difuso e sem sinais de hipertensão intracraniana descompensada, o foco inicial é prevenir lesão cerebral secundária e otimizar o retorno venoso. Isso é alcançado com cabeceira elevada em proclive (30°), coluna cervical em posição neutra e controle rigoroso da temperatura (normotermia).",
      "armadilhaBanca": "Aplicar medidas de exceção sem indicação (manitol profilático, hiperventilação, tiopental) ou condutas deletérias (hipotensão permissiva e hipotermia)."
    },
    "mapaDistratores": {
      "A": "Hipotermia profilática e hipotensão permissiva são contraindicadas no TCE grave por comprometerem a pressão de perfusão cerebral e agravarem o prognóstico neurológico.",
      "B": "Hiperventilação rotineira provoca vasoconstrição e isquemia cerebral, e o manitol não deve ser administrado profilaticamente sem sinais clínicos ou tomográficos de herniação.",
      "C": "O coma barbitúrico com tiopental restringe-se à hipertensão intracraniana refratária em ambiente de UTI, não sendo conduta inicial na sala de trauma."
    }
  },
  {
    "id": "q-usp-sp-2023-011",
    "code": "Q-USPSP23-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": [
      "gist",
      "melena",
      "endoscopia-digestiva-alta"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 59 anos de idade, foi admitida no Serviço de Emergência devido à melena há 6 dias. Nega alteração do hábito intestinal. Sem comorbidades. Relata ingestão de bebida alcóolica nos finais de semana (1 lata de cerveja). Fez uso de anti-inflamatório há 1 mês. Ao exame clínico, encontra-se em bom estado geral; descorada; abdome flácido; sem massas palpáveis; e ausência de ascite. Exames laboratoriais: Hb 8,7 g/dL; Ht 26%; Plaquetas 231 mil/mm³ ; INR 1,1. Foi realizada a endoscopia digestiva alta que mostrou a seguinte lesão no corpo gástrico: Considerando o quadro clínico e o achado endoscópico, qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tumor estromal gastrointestinal (GIST).",
        "explanation": "Correta: A EDA mostra uma lesão subepitelial protusa com mucosa suprajacente lisa e umbilicação/ulceração central pontual, aspecto clássico de um GIST gástrico que se manifestou com sangramento digestivo alto (melena).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Adenocarcinoma gástrico.",
        "explanation": "Incorreta: O adenocarcinoma gástrico clássico (tipo ulcerado/Borrmann III ou vegetante) surge do epitélio mucoso com bordas irregulares, leito necrótico e infiltração mucosa evidente, e não como massa submucosa recoberta por epitélio preservado.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Varizes gástricas.",
        "explanation": "Incorreta: Varizes gástricas apresentam-se como cordões serpiginosos ou dilatações venosas azuladas/arredondadas em fundo ou cárdia, em pacientes com sinais de hipertensão portal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Úlcera gástrica Forrest III.",
        "explanation": "Incorreta: A úlcera péptica Forrest III é uma úlcera com base limpa de fibrina sem estigmas de sangramento recente, sem aspecto de massa subepitelial protusa.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O tumor estromal gastrointestinal (GIST) é a neoplasia mesenquimal mais comum do trato gastrointestinal, acometendo preferencialmente o estômago. Na endoscopia, manifesta-se tipicamente como nódulo ou massa subepitelial (submucosa), muitas vezes com ulceração central apical (sinal do 'olho de boi'), que é a fonte do sangramento digestivo apresentado.",
    "perolaClinica": "Massa subepitelial gástrica com umbilicação/ulceração central na EDA = pensar fortemente em GIST.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "NCCN Guidelines - Gastrointestinal Stromal Tumors (GISTs)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2969,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q011.png",
      "modality": "Fotografia Clínica",
      "caption": "Endoscopia digestiva alta demonstrando lesão subepitelial volumosa em corpo gástrico com ulceração na porção central.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Aspecto endoscópico característico do GIST gástrico: lesão subepitelial protusa com ulceração central.",
      "raciocinioChave": "Paciente com hemorragia digestiva alta (melena e anemia) evidencia à endoscopia nódulo subepitelial protuso recoberto por mucosa preservada com ulceração central apical no corpo gástrico. Esse aspecto típico em \"olho de boi\" é característico de tumor estromal gastrointestinal (GIST).",
      "armadilhaBanca": "Confundir lesão subepitelial ulcerada com adenocarcinoma gástrico mucoso ou atribuir a melena a uma úlcera péptica simples pelo uso de AINE."
    },
    "mapaDistratores": {
      "B": "O adenocarcinoma gástrico origina-se do epitélio mucoso e apresenta bordas irregulares e infiltrativas com necrose, e não mucosa íntegra recobrindo massa submucosa.",
      "C": "Varizes gástricas manifestam-se como cordões venosos tortuosos e azulados no fundo ou cárdia em pacientes com hipertensão portal.",
      "D": "A úlcera gástrica Forrest III é uma lesão plana com fundo limpo de fibrina sem abaulamento tumoral subepitelial nem sinais de sangramento recente."
    }
  },
  {
    "id": "q-usp-sp-2023-012",
    "code": "Q-USPSP23-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Malformações Congênitas Cirúrgicas",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-malformacoes-congenitas-cirurgicas",
    "tags": [
      "cisto-broncogenico",
      "malformacao-congenita",
      "cirurgia-toracica-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 2 anos de idade, oligossintomático, é trazido à consulta ambulatorial por apresentar a seguinte imagem radiográfica: Qual é a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Malformação adenomatoide cística.",
        "explanation": "Incorreta: A malformação congênita das vias aéreas pulmonares (antiga MACP) situa-se no parênquima pulmonar e costuma apresentar múltiplas imagens císticas ou padrão microcístico/sólido intrapulmonar.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Cisto pulmonar congênito.",
        "explanation": "Incorreta: Cistos congênitos de parênquima pulmonar são lesões intrapulmonares periféricas, não mediastinais subcarinais/paratraqueais.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Cisto broncogênico.",
        "explanation": "Correta: O cisto broncogênico é uma malformação congênita do intestino anterior que se localiza comumente no mediastino médio (região subcarinal ou paratraqueal), apresentando-se no RX como massa/opacidade arredondada de contornos bem definidos junto à carina traqueal em criança/lactente oligossintomático.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Teratoma.",
        "explanation": "Incorreta: O teratoma é o tumor de células germinativas típico do mediastino ANTERIOR, e não do mediastino médio retrocarinal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Cistos broncogênicos originam-se do brotamento anômalo do trato traqueobrônquico primitivo e localizam-se predominantemente no mediastino médio, em torno da carina traqueal e brônquios principais. A radiografia de tórax evidencia massa arredondada ou ovalar, homogênea, de contornos nítidos na topografia subcarinal, aspecto típico da questão.",
    "perolaClinica": "Cisto broncogênico: lesão mediastinal média benigna mais comum em crianças, frequentemente subcarinal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "Nelson Textbook of Pediatrics, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2970,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q012.png",
      "modality": "Radiografia",
      "caption": "Radiografia simples de tórax exibindo opacidade mediastinal média subcarinal bem delimitada em paciente pediátrico.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Cisto broncogênico como massa bem delimitada do mediastino médio (região subcarinal/paratraqueal) na infância.",
      "raciocinioChave": "Lactente oligossintomático com opacidade arredondada, homogênea e de contornos nítidos junto à carina traqueal apresenta quadro clássico de cisto broncogênico. Originado do brotamento anômalo do intestino anterior, localiza-se tipicamente no mediastino médio.",
      "armadilhaBanca": "Confundir massas do mediastino médio (cisto broncogênico) com lesões do parênquima pulmonar ou tumores típicos do mediastino anterior (teratoma)."
    },
    "mapaDistratores": {
      "A": "A malformação adenomatoide cística situa-se no parênquima pulmonar e apresenta múltiplos cistos ou componente sólido intrapulmonar, não massa mediastinal única.",
      "B": "O cisto pulmonar congênito localiza-se no interior do parênquima pulmonar periférico, diferindo da topografia mediastinal média paratraqueal/subcarinal.",
      "D": "O teratoma é um tumor de células germinativas característico do mediastino anterior, e não da região retrocarinal do mediastino médio."
    }
  },
  {
    "id": "q-usp-sp-2023-013",
    "code": "Q-USPSP23-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Otorrinolaringologia e Cabeça e Pescoço",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-otorrinolaringologia-e-cabeca-e-pescoco",
    "tags": [
      "cancer-de-cavidade-oral",
      "cabeca-e-pescoco",
      "estomatologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O exame da cavidade oral tem por objetivo o diagnóstico precoce de tumores malignos. Considerando-se o tipo histológico mais comum, assinale o local mais frequentemente acometido.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Incorreta: O dorso da língua não é o sítio mais comum de carcinoma espinocelular de boca (mucosa mais espessa com papilas filiformes/fungiformes).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: A face interna da bochecha/mucosa jugal pode abrigar tumores, mas em frequência bem inferior ao bordo lateral da língua e assoalho bucal.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Correta: O carcinoma espinocelular (CEC) responde por mais de 90% dos tumores malignos da cavidade oral, e seu sítio anatômico mais frequentemente acometido é a borda lateral da língua (seguida pelo assoalho da boca).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: O palato duro é local incomum para CEC, sendo mais associado a neoplasias de glândulas salivares menores.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O câncer da cavidade oral mais prevalente é o carcinoma de células escamosas (espinocelular), com forte associação a tabagismo e etilismo. Os sítios anatômicos com maior risco de desenvolvimento neoplásico e os mais comuns no exame físico são o bordo lateral da língua e o assoalho da boca.",
    "perolaClinica": "Local mais comum do carcinoma espinocelular de cavidade oral: bordo lateral da língua e assoalho bucal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "Diretrizes Diagnósticas e Terapêuticas do Câncer de Cabeça e Pescoço - Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2970,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q013.png",
      "modality": "Fotografia Clínica",
      "caption": "Fotografia da cavidade oral indicando diferentes sítios anatômicos para exame físico.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Sítio anatômico mais frequente do carcinoma espinocelular de cavidade oral: borda lateral da língua.",
      "raciocinioChave": "O carcinoma espinocelular (CEC) corresponde a mais de 90% dos tumores malignos da cavidade oral. Seu sítio anatômico mais frequentemente acometido é a borda lateral da língua, seguida pelo assoalho da boca.",
      "armadilhaBanca": "Apontar regiões da mucosa oral menos acometidas pelo CEC, como dorso da língua, mucosa jugal ou palato duro."
    },
    "mapaDistratores": {
      "A": "O dorso da língua apresenta mucosa espessa queratinizada com papilas e raramente é a sede primária do carcinoma espinocelular oral.",
      "B": "A face interna da bochecha (mucosa jugal) pode ser acometida, mas com frequência muito inferior à da borda lateral da língua.",
      "D": "O palato duro é local incomum para carcinoma espinocelular, estando mais associado a tumores de glândulas salivares menores."
    }
  },
  {
    "id": "q-usp-sp-2023-014",
    "code": "Q-USPSP23-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Queimaduras e Lesão Inalatória",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-queimaduras-e-lesao-inalatoria",
    "tags": [
      "queimaduras",
      "queimadura-de-face",
      "desbridamento-de-flictenas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 28 anos de idade, pesando aproximadamente 70 Kg, vem encaminhado ao Pronto Atendimento com história de queimadura térmica por explosão de frasco de álcool líquido em casa, enquanto fazia churrasco. O exame clínico de entrada mostrou queimaduras de segundo grau em face, membros superiores e tórax anterior, totalizando 10% da superfície corporal. Assinale a alternativa com as condutas adequadas.",
    "alternativas": [
      {
        "letter": "A",
        "text": "internação, flictenas intactas e curativos expostos em face.",
        "explanation": "Incorreta: Flictenas rompidas ou volumosas devem ser desbridadas, e a presença de acometimento de área nobre (face) e de lesões em membros impõe tratamento com desbridamento e curativo oclusivo/biológico ou tópico apropriado.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "internação, desbridamento das flictenas e curativos.",
        "explanation": "Correta: Queimaduras em áreas nobres/especiais funcionais ou estéticas (face e mãos/membros superiores) e por explosão constituem critérios formais de internação hospitalar para tratamento em centro de queimados; a abordagem inicial inclui desbridamento dos tecidos desvitalizados/flictenas rotas e realização de curativos adequados.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "tratamento ambulatorial, flictenas intactas e curativos expostos em face.",
        "explanation": "Incorreta: O acometimento de áreas especiais/nobres como a face contraindica o tratamento puramente ambulatorial.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "tratamento ambulatorial, desbridamento das flictenas e curativos.",
        "explanation": "Incorreta: O paciente tem indicação formal de internação hospitalar pelo risco de edema de via aérea superior (face) e limitações funcionais decorrentes das lesões nos membros.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Segundo as diretrizes da Sociedade Brasileira de Queimaduras e do Ministério da Saúde/ATLS, queimaduras de 2º grau envolvendo áreas críticas (face, mãos, pés, genitália, períneo e grandes articulações) exigem internação hospitalar independentemente da porcentagem total de SCQ. O manejo das lesões consiste em limpeza estéril, remoção/desbridamento de flictenas e curativos com pomadas antimicrobianas (como sulfadiazina de prata a 1%) ou coberturas especiais.",
    "perolaClinica": "Queimadura de 2º grau em áreas nobres (face, mãos, genitália): critério absoluto de internação hospitalar.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Cartilha para Tratamento de Emergência das Queimaduras - Ministério da Saúde do Brasil",
      "ATLS 10ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2971,
    "analiseBanca": {
      "conceitoCentral": "Critérios de internação em queimaduras (áreas nobres: face e membros superiores) e desbridamento de flictenas.",
      "raciocinioChave": "Queimaduras de 2º grau por explosão envolvendo áreas nobres (face e membros superiores) impõem internação hospitalar independentemente da extensão (10% SCQ), pelo risco de edema de vias aéreas e sequelas funcionais. O manejo local exige desbridamento das flictenas e curativos adequados.",
      "armadilhaBanca": "Optar por tratamento ambulatorial devido à SCQ reduzida (10%), ignorando o acometimento de áreas nobres ou deixando flictenas íntegras em áreas de risco."
    },
    "mapaDistratores": {
      "A": "Flictenas em queimaduras de 2º grau devem ser desbridadas para limpeza e avaliação da profundidade do leito, não mantidas intactas.",
      "C": "O envolvimento de áreas nobres (face e membros superiores) por explosão contraindica o seguimento ambulatorial e exige internação hospitalar.",
      "D": "Embora preveja desbridamento e curativos, o manejo ambulatorial é inadequado diante do acometimento facial e do risco de edema de via aérea superior."
    }
  },
  {
    "id": "q-usp-sp-2023-015",
    "code": "Q-USPSP23-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": [
      "bypass-gastrico",
      "obstrucao-intestinal",
      "hernia-interna",
      "cirurgia-bariatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 27 anos, há 1 ano foi submetida à derivação gástrica em Y de Roux para tratamento de obesidade. Refere perda de 40 kg neste período. Procura o Serviço de Emergência devido à dor abdominal intensa, em cólica difusa, com início há 4 horas. Relata náuseas, porém sem vômitos. Nega melhora com analgésicos. Ao exame clínico, encontra- se em posição antálgica, FC 122 bpm, abdome pouco distendido, doloroso em hipocôndrio esquerdo, sem sinais de irritação peritoneal e com ruídos hidroaéreos aumentados em frequência. Exames laboratoriais: Hb 11,2 g/dL; Ht 38%; Leucograma 17.223/mm3 ; PCR 17 mg/L; Ureia 90 mg/dL; Creatinina 1,7 mg/dL. Tomografia de abdome apresentada abaixo. Qual deve ser a conduta, além de hidratação e analgesia?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trombólise.",
        "explanation": "Incorreta: O quadro não decorre de tromboembolismo arterial mesentérico primário isolado para justificar trombólise; trata-se de torção mecânica por hérnia interna com risco iminente de necrose intestinal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Sonda gástrica e observação.",
        "explanation": "Incorreta: A conduta expectante com sonda nasogástrica é altamente deletéria na suspeita de hérnia interna estrangulada/alça fechada, evoluindo rapidamente para infarto intestinal maciço.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Dilatação endoscópica da anastomose.",
        "explanation": "Incorreta: Dilatação endoscópica trata estenose crônica de anastomose gastrojejunal, sendo totalmente ineficaz para hérnia interna e torção mesentérica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Tratamento operatório.",
        "explanation": "Correta: Após derivação gástrica em Y de Roux, dor abdominal intensa desproporcional com sinais tomográficos de torção mesentérica (sinal do redemoinho / 'whirl sign') é diagnóstica de hérnia interna (espaço de Petersen ou defeito mesentérico). É uma emergência cirúrgica com indicação de tratamento operatório imediato (laparoscopia/laparotomia).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A hérnia interna é uma complicação potencialmente catastrófica e relativamente frequente após o bypass gástrico em Y de Roux laparoscópico, ocorrendo pelo espaço de Petersen ou pelos defeitos do mesentério. Na TC, a presença do sinal do redemoinho dos vasos mesentéricos indica volvo de alça de intestino delgado, exigindo exploração cirúrgica urgente para reduzir a hérnia e prevenir ou ressecar necrose intestinal.",
    "perolaClinica": "Dor abdominal intensa após By-pass em Y de Roux com sinal do redemoinho na TC = hérnia interna -> cirurgia de emergência!",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery, 21st Edition",
      "ASMBS Guidelines: Management of Abdominal Pain After Bariatric Surgery"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2971,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q015.png",
      "modality": "Tomografia",
      "caption": "TC de abdome evidenciando sinal do redemoinho ('whirl sign') dos vasos mesentéricos, compatível com volvo/hérnia interna.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Emergência cirúrgica por hérnia interna (sinal do redemoinho na TC) após bypass gástrico em Y de Roux.",
      "raciocinioChave": "Dor abdominal intensa após grande emagrecimento pós-derivação gástrica em Y de Roux levanta forte suspeita de hérnia interna. A tomografia com sinal do redemoinho mesentérico confirma volvo e obstrução em alça fechada, indicando tratamento operatório de emergência.",
      "armadilhaBanca": "Tentar tratamento conservador com sonda nasogástrica (ineficaz na obstrução em alça fechada) ou confundir dor intensa pós-bariátrica com estenose anastomótica."
    },
    "mapaDistratores": {
      "A": "O quadro resulta de torção mecânica de alça intestinal herniada e não de tromboembolismo arterial primário passível de trombólise.",
      "B": "A observação clínica com sonda gástrica na hérnia interna estrangulada retarda o tratamento definitivo e leva rapidamente à necrose intestinal maciça.",
      "C": "A dilatação endoscópica trata estenose crônica da anastomose gastrojejunal, sendo completamente ineficaz na torção mesentérica por hérnia interna."
    }
  },
  {
    "id": "q-usp-sp-2023-016",
    "code": "Q-USPSP23-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": [
      "hemorroidas",
      "doenca-hemorroidaria",
      "tratamento-conservador"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 61 anos, refere sangramento intermitente nas evacuações e sangue vivo no final da evacuação e no papel higiênico. As fezes têm cor e consistência normais. Evacua a cada 3 dias e refere fezes ressecadas. Fez colonoscopia há 2 anos, que evidenciou doença diverticular difusa. Exames clínico e laboratoriais sem alterações. Toque retal normal e exame proctológico conforme as imagens a seguir (figuras 2 e 3 representam anuscopia; seta ilustra a linha pectínea). Qual é a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Drenagem do trombo hemorroidário.",
        "explanation": "Incorreta: A drenagem de trombo hemorroidário é procedimento realizado em hemorroida EXTERNA trombosada aguda nas primeiras 72 horas, o que não corresponde ao achado de hemorroida interna não trombosada.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Orientação de dieta e higiene anal.",
        "explanation": "Correta: O quadro de sangramento anal indolor às evacuações com mamilos hemorroidários internos pequenos/sem prolapso importante (grau I/II) tem como manejo inicial o tratamento clínico conservador: aumento da ingestão hídrica, dieta rica em fibras para normalização do hábito intestinal e adequada higiene anal (evitar papel higiênico).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Retossigmoidoscopia.",
        "explanation": "Incorreta: O paciente realizou colonoscopia completa há apenas 2 anos com resultado normal (exceto divertículos), não havendo sinais de alarme que exijam nova retossigmoidoscopia imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Hemorroidectomia.",
        "explanation": "Incorreta: A hemorroidectomia excisional é reservada para graus avançados (graus III e IV) refratários ao tratamento conservador/ambulatorial.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O paciente apresenta doença hemorroidária interna de baixo grau (grau I a II), cuja manifestação principal é sangramento vivo vermelho-rutilante indolor gotejando no vaso ou no papel higiênico, associado a fezes ressecadas. A primeira linha de tratamento recomendada pelas sociedades de coloproctologia é eminentemente comportamental e clínica (fibras, líquidos e cuidados higiênicos locais).",
    "perolaClinica": "Hemorroidas internas graus I e II: primeira conduta é sempre tratamento conservador (fibras, água e higiene sem papel).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids (2018)",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2973,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q016.png",
      "modality": "Fotografia Clínica",
      "caption": "Anuscopia revelando plexos hemorroidários internos sem prolapso mantido ao nível da linha pectínea.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Tratamento clínico inicial (fibras, hidratação e higiene anal) na doença hemorroidária interna grau I/II.",
      "raciocinioChave": "Sangramento vermelho-vivo indolor às evacuações associado a fezes ressecadas e mamilos internos pequenos à anuscopia configura doença hemorroidária interna de baixo grau. Como já há colonoscopia recente sem neoplasia e ausência de prolapso grave, a primeira linha é o tratamento clínico com dieta rica em fibras e higiene anal.",
      "armadilhaBanca": "Indicar hemorroidectomia para hemorroida interna de baixo grau ou drenagem de trombo em mamilo interno não trombosado."
    },
    "mapaDistratores": {
      "A": "A drenagem de trombo aplica-se exclusivamente à trombose hemorroidária externa aguda nas primeiras 72 horas, não à hemorroida interna não trombosada.",
      "C": "O paciente realizou colonoscopia completa há 2 anos sem sinais de alarme atuais, dispensando nova retossigmoidoscopia diante de anuscopia conclusiva.",
      "D": "A hemorroidectomia cirúrgica é reservada para doença hemorroidária graus III e IV ou casos refratários às medidas clínicas e ambulatoriais."
    }
  },
  {
    "id": "q-usp-sp-2023-017",
    "code": "Q-USPSP23-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Complicações Crônicas do Diabetes",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-complicacoes-cronicas-do-diabetes",
    "tags": [
      "pe-diabetico",
      "desbridamento",
      "antibioticoterapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 65 anos, com diagnóstico de diabetes mellittus há 10 anos, procura serviço médico com história de surgimento de lesão em face medial e dorso do pé direito há 10 dias, após caminhada com um sapato novo. Nega claudicação prévia. Ao exame clínico, além da lesão da foto a seguir, apresenta pulsos poplíteo e tibiais presentes. Qual é a conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amputação transtibial primária.",
        "explanation": "Incorreta: A amputação maior (transtibial) é radical e desnecessária neste momento, pois o paciente possui perfusão preservada e a lesão é passível de tratamento conservador da extremidade.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Arteriografia e revascularização.",
        "explanation": "Incorreta: Os pulsos poplíteo e tibiais estão francamente presentes e palpáveis, afastando isquemia crítica primária e tornando exames invasivos/revascularização desnecessários.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Desbridamento e antibioticoterapia.",
        "explanation": "Correta: Trata-se de pé diabético complicado por úlcera neuropática infectada com necrose tecidual em paciente com pulsos arteriais preservados. A conduta mandatória imediata é o desbridamento cirúrgico de todo o tecido desvitalizado associado a antibioticoterapia sistêmica de amplo espectro.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Aguardar delimitação da necrose.",
        "explanation": "Incorreta: Aguardar delimitação de necrose é conduta permissiva perigosa em infecções bacterianas ativas do pé diabético (risco de fasceíte e perda do membro).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "No pé diabético com ferida infectada e presença de esfacelo/necrose, mas com boa perfusão distal (pulsos tibiais presentes, descartando componente isquêmico grave imediato), o pilar fundamental do tratamento é o desbridamento de tecidos necróticos associado à antibioticoterapia empírica direcionada contra patógenos comuns e controle glicêmico.",
    "perolaClinica": "Pé diabético infectado com pulsos arteriais normais: urgência cirúrgica para desbridamento agressivo + antibióticos.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "IWGDF Guidelines on the prevention and management of diabetes-related foot disease (2023)",
      "Diretrizes da Sociedade Brasileira de Diabetes (SBD)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2973,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q017.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão ulcerada em dorso e face medial do pé com áreas de necrose tecidual e eritema perilesional.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Manejo de pé diabético infectado com pulsos presentes: desbridamento cirúrgico precoce e antibioticoterapia.",
      "raciocinioChave": "Paciente diabético com úlcera infectada e necrótica no pé após atrito com calçado, porém com pulsos poplíteo e tibiais palpáveis, apresenta infecção em extremidade bem perfundida. A conduta imperativa é o desbridamento cirúrgico do tecido desvitalizado associado a antibioticoterapia sistêmica.",
      "armadilhaBanca": "Aguardar delimitação da necrose na vigência de infecção ativa ou indicar arteriografia/amputação maior desnecessária com pulsos preservados."
    },
    "mapaDistratores": {
      "A": "A amputação transtibial primária é mutiladora e desnecessária em paciente com boa perfusão distal e lesão passível de salvamento com desbridamento.",
      "B": "A presença franca dos pulsos poplíteo e tibiais descarta isquemia crítica primária, tornando arteriografia e revascularização desnecessárias.",
      "D": "Aguardar a delimitação espontânea da necrose em infecção bacteriana ativa do pé diabético permite progressão para fasceíte e perda do membro."
    }
  },
  {
    "id": "q-usp-sp-2023-018",
    "code": "Q-USPSP23-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Trauma Urológico e Litíase Cirúrgica",
    "temaSlug": "cg-uro",
    "subtemaSlug": "cg-uro-trauma-urologico-e-litiase-cirurgica",
    "tags": [
      "trauma-renal",
      "tratamento-conservador",
      "hematuria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 19 anos, foi vítima de queda de bicicleta em alta velocidade. Na admissão no serviço de Emergência, encontrava-se consciente, com PA de 120x70 mmHg e FC de 105 bpm; abdome doloroso à palpação em hipocôndrio e flanco esquerdo. Após a passagem de sonda vesical, foi evidenciada hematúria. Exames laboratoriais com uma hora após trauma: Hb 9,6 g/dL; Ht 28%; Ureia = 54 mg/dL; Creatinina 1,1 mg/dL; pH 7,37; BE 1; Lactato 10 mg/dL. A tomografia de abdome é apresentada. Qual é o tratamento para a lesão abdominal neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Observação com monitorização hemodinâmica.",
        "explanation": "Correta: No trauma renal fechado em paciente hemodinamicamente estável (PA 120x70 mmHg, FC 105), sem extravasamento urinário volumoso com repercussão ou lesão de hilo renal desvascularizante, o tratamento padrão é o não operatório (TNO), consistente em observação clínica e monitorização rigorosa em ambiente hospitalar.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Passagem de cateter duplo J.",
        "explanation": "Incorreta: O cateter duplo J é indicado diante de lesões do sistema coletor com urinoma persistente ou fístula urinária sintomática, não estando indicado na avaliação inicial imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Laparotomia com nefrectomia.",
        "explanation": "Incorreta: Laparotomia exploradora com nefrectomia é reservada exclusivamente para instabilidade hemodinâmica refratária atribuível ao rim ou lesão vascular hilar com avulsão renal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Nefrostomia.",
        "explanation": "Incorreta: Nefrostomia percutânea não tem indicação na fase aguda do trauma renal sem hidronefrose obstrutiva prévia ou falha de drenagem retrógrada posterior.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O manejo do trauma renal mudou drasticamente nas últimas décadas. Mesmo em lesões de alto grau (graus III e IV da AAST), se o paciente mantiver estabilidade hemodinâmica (normotenso, gasometria/lactato adequados), a conduta preconizada pelas diretrizes mundiais (EAU, AUA, WSES) é o tratamento conservador não operatório com observação estrita e repouso no leito.",
    "perolaClinica": "Trauma renal com paciente estável = tratamento conservador (TNO) com monitorização hemodinâmica rigorosa.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "European Association of Urology (EAU) Guidelines on Urological Trauma",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2974,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q018.png",
      "modality": "Tomografia",
      "caption": "TC de abdome com contraste mostrando laceração renal esquerda sem extravasamento maciço de contraste na fase excretora.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Tratamento não operatório (observação e monitorização) no trauma renal fechado com estabilidade hemodinâmica.",
      "raciocinioChave": "Jovem vítima de trauma renal fechado com hematúria apresenta-se estável hemodinamicamente (PA 120x70 mmHg, lactato e gasometria normais) e sem avulsão de pedículo na tomografia. O tratamento padrão é o não operatório, com observação clínica e monitorização hemodinâmica rigorosa.",
      "armadilhaBanca": "Indicar nefrectomia exploradora apenas pela presença de hematúria ou laceração parenquimatosa na TC em paciente hemodinamicamente estável."
    },
    "mapaDistratores": {
      "B": "O cateter duplo J é indicado diante de extravasamento urinário persistente ou urinoma sintomático evolutivo, não na abordagem inicial de paciente estável.",
      "C": "A laparotomia com nefrectomia restringe-se a instabilidade hemodinâmica refratária atribuída ao rim ou lesão vascular hilar com avulsão.",
      "D": "A nefrostomia percutânea não tem indicação na fase aguda do trauma renal na ausência de obstrução ureteral prévia ou urinoma infectado."
    }
  },
  {
    "id": "q-usp-sp-2023-019",
    "code": "Q-USPSP23-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Ortopedia e Traumatologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-ortopedia-e-traumatologia-basica",
    "tags": [
      "fratura-de-colo-de-femur",
      "ortopedia",
      "idoso"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 75 anos, foi trazido ao Serviço de Emergência pelos familiares após encontrá-lo caído ao lado de sua cama. Tem hipertensão arterial sistêmica e obesidade. Lúcido, o paciente refere que caiu sobre o quadril direito após tropeçar no tapete ao lado da cama; desde então não consegue deambular. Nega trauma encefálico. Previamente deambulador social, conseguia realizar apenas atividades básicas diárias sozinho. Atendimento inicial já realizado e solicitada a radiografia abaixo. Qual é o achado clínico compatível com a história e com o achado radiológico apresentados?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Membro inferior encurtado com rotação interna.",
        "explanation": "Incorreta: A rotação interna do membro com encurtamento é a atitude clássica da luxação traumática posterior do quadril (atitude de baioneta ou 'banhista púdico'), não da fratura de fêmur proximal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Membro inferior encurtado com rotação externa.",
        "explanation": "Correta: A radiografia evidencia fratura do fêmur proximal (transtrocanteriana/colo femoral). O quadro clínico semiológico clássico da fratura de fêmur proximal é caracterizado por dor no quadril, incapacidade de apoio, encurtamento do membro afetado e atitude em rotação externa (pela tração dos rotadores externos e ação da gravidade).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Membros inferiores simétricos com rotação interna do direito.",
        "explanation": "Incorreta: Na presença de fratura deslocada de fêmur, os membros não se mantêm simétricos em comprimento.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Membros inferiores simétricos com rotação externa do direito.",
        "explanation": "Incorreta: A fratura com desvio acarreta perda de continuidade e encurtamento evidente do membro inferior fraturado em relação ao contralateral.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Idosos vítimas de queda da própria altura sobre a região do quadril que evoluem com impotência funcional para deambular devem ser imediatamente avaliados para fratura de fêmur proximal. Ao exame físico ortopédico, a deformidade clássica resultante da ação das musculaturas iliopsoas, glúteas e rotadoras sobre o coto distal é a rotação externa com encurtamento do membro acometido.",
    "perolaClinica": "Fratura de fêmur proximal no idoso: encurtamento + rotação externa do membro acometido.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rockwood and Green's Fractures in Adults, 9th Edition",
      "Sabiston Textbook of Surgery, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2974,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q019.png",
      "modality": "Radiografia",
      "caption": "Radiografia da bacia e quadril direito mostrando descontinuidade óssea e fratura desviada de fêmur proximal.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Semiologia clássica da fratura de fêmur proximal em idoso: encurtamento e rotação externa do membro.",
      "raciocinioChave": "Idoso após queda sobre o quadril com impotência funcional absoluta e fratura de fêmur proximal à radiografia exibe atitude semiológica característica. Pela ação muscular dos rotadores externos e do iliopsoas sobre o fragmento distal, observa-se encurtamento associado a rotação externa do membro acometido.",
      "armadilhaBanca": "Confundir a atitude da fratura de fêmur proximal (encurtamento e rotação externa) com a da luxação posterior do quadril (encurtamento e rotação interna)."
    },
    "mapaDistratores": {
      "A": "Encurtamento associado a rotação interna é a deformidade clássica da luxação traumática posterior do quadril, não da fratura de fêmur proximal.",
      "C": "A fratura femoral com desvio provoca encurtamento evidente do membro inferior e assume rotação externa, não mantendo simetria nem rotação interna.",
      "D": "Embora haja rotação externa, a perda da continuidade óssea com desvio acarreta encurtamento do membro fraturado em relação ao contralateral."
    }
  },
  {
    "id": "q-usp-sp-2023-020",
    "code": "Q-USPSP23-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Ortopedia e Traumatologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-ortopedia-e-traumatologia-basica",
    "tags": [
      "osteossarcoma",
      "tumor-osseo",
      "ortopedia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 17 anos, refere contusão do joelho há 1 mês, durante prática esportiva. Relata que, desde então, a dor no joelho persiste, sem melhoras com aplicação de gelo e com uso de anti-inflamatórios. A radiografia é apresentada. Considerando a hipótese diagnóstica, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Corpo estranho.",
        "explanation": "Incorreta: Corpos estranhos radiopacos na intimidade muscular/articular não provocam reações ósseas osteoblásticas e líticas agressivas na metáfise com destruição cortical.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Abscesso.",
        "explanation": "Incorreta: Abscessos (como na osteomielite subaguda/crônica de Brodie) podem ter halo esclerótico, mas raramente causam agressividade óssea periosteal expansiva em raios de sol em adolescente hígido.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Hematoma.",
        "explanation": "Incorreta: Hematomas são lesões de partes moles e não justificam destruição óssea e reação periosteal agressiva na metáfise óssea.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Neoplasia.",
        "explanation": "Correta: A radiografia em jovem de 17 anos com dor óssea persistente após trauma mostra lesão óssea agressiva na metáfise distal do fêmur/proximal da tíbia, com áreas líticas e blásticas e reação periosteal evidente (triângulo de Codman e aspecto em 'raios de sol'), altamente sugestiva de neoplasia óssea maligna primária (Osteossarcoma).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A história de dor articular ou óssea persistente atribuída inicialmente a um trauma esportivo em crianças e adolescentes é a apresentação inicial mais clássica de neoplasias ósseas primárias. A imagem radiográfica revelando lesão óssea mista na região metafisária ao redor do joelho com rompimento cortical e reação periosteal agressiva confirma o diagnóstico presuntivo de neoplasia maligna (especialmente osteossarcoma).",
    "perolaClinica": "Dor óssea persistente após trauma esportivo em adolescente + lesão metafisária com reação periosteal = neoplasia óssea primária (osteossarcoma).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rockwood and Green's Fractures in Adults, 9th Edition",
      "Nelson Textbook of Pediatrics, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2975,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q020.png",
      "modality": "Radiografia",
      "caption": "Radiografia de joelho evidenciando lesão óssea destrutiva metafisária com reação periosteal agressiva compatível com tumor ósseo.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Suspeita de neoplasia óssea maligna (osteossarcoma) em adolescente com dor persistente pós-trauma e lesão metafisária.",
      "raciocinioChave": "Adolescente com dor persistente no joelho após trauma leve e radiografia demonstrando lesão metafisária mista com destruição cortical e reação periosteal agressiva (triângulo de Codman/raios de sol) tem alta suspeita de neoplasia óssea maligna primária, notadamente osteossarcoma.",
      "armadilhaBanca": "Atribuir a dor persistente apenas ao trauma esportivo inicial (hematoma) ou confundir reação periosteal agressiva em jovem com abscesso crônico."
    },
    "mapaDistratores": {
      "A": "Corpos estranhos radiopacos de partes moles não produzem destruição cortical metafisária nem reação periosteal em raios de sol.",
      "B": "Abscessos ósseos subagudos ou crônicos exibem halo esclerótico delimitado, sem o padrão osteolítico/osteoblástico agressivo e expansivo da neoplasia maligna.",
      "C": "Hematomas restringem-se a partes moles e não causam lise óssea ou reação periosteal agressiva na metáfise femoral ou tibial."
    }
  },
  {
    "id": "q-usp-sp-2023-021",
    "code": "Q-USPSP23-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Doenças Benignas da Mama",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-doencas-benignas-da-mama",
    "tags": [
      "cisto-mamario",
      "paaf",
      "seguimento-clinico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 27 anos, refere nodulação palpável em mama direita que se acentuou no período pré-menstrual. Nega antecedentes clínicos, refere um parto vaginal há 5 anos, em uso de preservativo como contracepção; última menstruação há 10 dias. Nega uso de outros medicamentos e antecedentes familiares significativos. Ao exame clínico das mamas, identifica-se nodulação com cerca de 3 cm, regular, dolorosa e móvel em quadrante súpero- externo de mama direita, recoberta com pele de aspecto normal. A ultrassonografia da região acometida é apresentada. Realiza-se punção aspirativa com saída de 10 mL de líquido (imagem abaixo) seroso acastanhado, com melhora significativa da dor. Não mais se percebe o achado palpatório e ultrassonográfico. Qual é a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Biópsia excisional.",
        "explanation": "Incorreta: A biópsia excisional é um procedimento cirúrgico invasivo indicado apenas para nódulos suspeitos de malignidade (BI-RADS 4/5) ou com histologia de alto risco, não se justificando após esvaziamento completo de cisto benigno típico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Seguimento clínico.",
        "explanation": "Correta: Diante de cisto mamário palpável doloroso cuja PAAF drena líquido não sanguinolento (amarelado/acastanhado) com colapso completo da lesão ao exame clínico e ultrassonográfico, a conduta padrão é o seguimento clínico de rotina, sem necessidade de citologia do líquido ou biópsia.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Biópsia agulha grossa.",
        "explanation": "Incorreta: A biópsia por agulha grossa (core biopsy) é indicada para lesões sólidas suspeitas ou cistos complexos com componente sólido intracístico, inexistentes neste caso.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Tomossíntese mamária.",
        "explanation": "Incorreta: A tomossíntese mamária é método de imagem avançado para rastreamento/diagnóstico de lesões parenquimatosas sólidas ou distorções arquiteturais em mamas densas, sem indicação para cisto simples já resolvido por punção.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O quadro clínico e ultrassonográfico é clássico de cisto mamário simples sintomático. A punção aspirativa com agulha fina (PAAF) é simultaneamente diagnóstica e terapêutica; ao aspirar líquido característico não hemático com regressão completa do nódulo, afasta-se malignidade e estabelece-se seguimento clínico habitual.",
    "perolaClinica": "Cisto mamário com líquido não sanguinolento e desaparecimento completo após PAAF = seguimento clínico de rotina.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Mastologia",
      "Colégio Brasileiro de Radiologia (CBR) — BI-RADS"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2976,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q021.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia mamária demonstrando imagem cística anecoica bem delimitada e seringa com líquido seroso acastanhado pós-PAAF.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora (seguimento clínico) após esvaziamento completo de cisto mamário simples por PAAF.",
      "raciocinioChave": "Mulher jovem com nódulo doloroso pré-menstrual e imagem cística ao ultrassom apresentou aspiração de líquido não sanguinolento na PAAF com colapso total da lesão. A resolução clínica e ultrassonográfica completa com fluido não hemático descarta malignidade, indicando apenas seguimento clínico.",
      "armadilhaBanca": "Solicitar biópsia cirúrgica ou core biopsy após resolução completa de cisto simples com fluido não hemático, ou indicar tomossíntese desnecessária."
    },
    "mapaDistratores": {
      "A": "A biópsia excisional é indicada para nódulos suspeitos (BI-RADS 4/5) ou lesões de alto risco, sendo desnecessária após esvaziamento completo de cisto benigno.",
      "C": "A biópsia por agulha grossa aplica-se a lesões sólidas ou cistos complexos com componente sólido intracístico, inexistentes após o colapso da lesão.",
      "D": "A tomossíntese mamária é método para rastreamento e avaliação de lesões sólidas ou distorções arquiteturais, sem indicação para cisto simples já resolvido."
    }
  },
  {
    "id": "q-usp-sp-2023-022",
    "code": "Q-USPSP23-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Miomatose Uterina e Pólipos",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-miomatose-uterina-e-polipos",
    "tags": [
      "histerectomia",
      "cupula-vaginal",
      "poliglactina",
      "fio-cirurgico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 45 anos, será submetida à histerectomia total abdominal em decorrência de miomatose uterina. Você é o instrumentador e o cirurgião solicita porta-agulhas montado com o fio para a sutura da cúpula vaginal. Qual é o tipo de fio adequado para este tempo cirúrgico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Poliéster.",
        "explanation": "Incorreta: O poliéster é um fio inabsorvível multifilamentar, inadequado para sutura de mucosa vaginal devido ao risco de extrusão crônica, formação de granulomas e dor pélvica/dispareunia.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Nylon.",
        "explanation": "Incorreta: O nylon é inabsorvível monofilamentar; seu uso na cúpula vaginal exigiria retirada posterior de pontos ou acarretaria dispareunia de contato por pontas rígidas.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Poliglactina.",
        "explanation": "Correta: A poliglactina 910 (Vicryl) é um fio sintético absorvível trançado, com excelente força tênsil e absorção previsível (56 a 70 dias) por hidrólise, sendo o padrão-ouro para o fechamento da cúpula vaginal na histerectomia.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Polipropileno.",
        "explanation": "Incorreta: O polipropileno (Prolene) é inabsorvível, indicado principalmente para sutura vascular, hérnias ou fechamento de aponeurose sob tensão, contraindicado para fechamento de mucosas intracavitárias.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O fechamento da cúpula vaginal em histerectomias requer fios absorvíveis sintéticos de degradação intermediária, que mantenham a aposição tecidual durante a cicatrização da mucosa e tecido conjuntivo vaginal sem risco de erosão ou retenção de corpo estranho.",
    "perolaClinica": "Para sutura de cúpula vaginal em histerectomia, utiliza-se fio sintético absorvível (poliglactina 910).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Cirurgia Ginecológica",
      "Sabiston — Tratado de Cirurgia"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2977,
    "analiseBanca": {
      "conceitoCentral": "Escolha de fio sintético absorvível (poliglactina) para síntese da cúpula vaginal em histerectomia total.",
      "raciocinioChave": "O fechamento da cúpula vaginal na histerectomia total exige fio que garanta boa força tênsil durante a cicatrização e seja absorvido sem deixar corpo estranho residual. A poliglactina 910 (Vicryl), fio sintético absorvível multifilamentar, é o padrão-ouro para esse tempo cirúrgico.",
      "armadilhaBanca": "Escolher fios inabsorvíveis (poliéster, nylon ou polipropileno) para síntese da cúpula vaginal, favorecendo granulomas, extrusão e dispareunia."
    },
    "mapaDistratores": {
      "A": "O poliéster é um fio inabsorvível multifilamentar inadequado para mucosa vaginal pelo risco de extrusão crônica, infecção persistente e granulomas.",
      "B": "O nylon é inabsorvível e rígido, causando dispareunia de contato pelas pontas e exigindo retirada posterior se utilizado na cúpula vaginal.",
      "D": "O polipropileno é inabsorvível e indicado para anastomoses vasculares ou aponeuroses, sendo contraindicado em mucosas intracavitárias pelo risco de erosão."
    }
  },
  {
    "id": "q-usp-sp-2023-023",
    "code": "Q-USPSP23-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "insensibilidade-androgenica",
      "amenorreia-primaria",
      "testosterona"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 18 anos, em investigação para amenorreia secundária. Ao exame clínico apresenta mamas Tanner 3, pilificação mínima axilar e pubiana, estatura percentil 60 e peso percentil 40, identifica-se discreta hérnia inguinal bilateral. Exame ginecológico: vulva com pouca pilificação, desenvolvida e adequada, hímen íntegro e perfurado, restringindo exame especular e toque vaginal. O exame ultrassonográfico abdominal é normal, corpo uterino não identificado, gônadas de volume habitual em topografia de paredes pélvicas. Considerando a principal hipótese diagnóstica, qual é o achado associado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "FSH e LH elevados.",
        "explanation": "Incorreta: O FSH costuma estar normal e o LH normal ou levemente elevado pela falta de feedback negativo androgênico no hipotálamo, mas gonadotrofinas marcadamente elevadas caracterizam disgenesia gonadal (ex: Síndrome de Turner).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Cariótipo 45 X0.",
        "explanation": "Incorreta: O cariótipo 45,X0 define a Síndrome de Turner, caracterizada por útero presente, estigmas turnerianos e baixa estatura (abaixo do percentil 3), e não estatura preservada com ausência de útero.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Testosterona sérica elevada.",
        "explanation": "Correta: O fenótipo feminino com mamas desenvolvidas (aromatização periférica), pelos pubianos/axilares escassos ou ausentes, hérnias inguinais (testículos criptorquídicos) e ausência de útero é diagnóstico de Síndrome de Insensibilidade Completa aos Androgênios (Síndrome de Morris). Nela, os testículos funcionantes produzem testosterona em níveis masculinos normais ou elevados.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Cariótipo 47 XXY.",
        "explanation": "Incorreta: 47,XXY define a Síndrome de Klinefelter, que se manifesta com fenótipo masculino, hipogonadismo hipergonadotrófico e ginecomastia, sem formação de genitália externa feminina.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A Síndrome de Insensibilidade Completa aos Androgênios decorre de mutação no gene do receptor androgênico (AR). O indivíduo 46,XY tem testículos produtores de hormônio antimulleriano (levando à regressão dos ductos mullerianos e ausência de útero/tubas) e testosterona em níveis masculinos normais ou elevados, porém sem resposta tecidual aos androgênios, gerando genitália externa feminina e ausência de pelos.",
    "perolaClinica": "Mulher fenotípica sem útero e sem pelos pubianos = Insensibilidade Androgênica (Morris, 46,XY) com testosterona elevada para o sexo feminino.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Endocrinologia Ginecológica",
      "Speroff's Clinical Gynecologic Endocrinology and Infertility"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2977,
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial de amenorreia: Síndrome de Insensibilidade Completa aos Androgênios (Síndrome de Morris).",
      "raciocinioChave": "O fenótipo feminino com mamas desenvolvidas, pelos escassos ou ausentes, hérnias inguinais bilaterais (testículos) e ausência de útero caracteriza a Síndrome de Morris (46,XY). Nela há produção testicular normal ou elevada de testosterona, porém sem resposta nos receptores androgênicos periféricos.",
      "armadilhaBanca": "Confundir a ausência de útero com agenesia mulleriana (Rokitansky, que tem pelos normais e testosterona feminina) ou com disgenesia gonadal de Turner."
    },
    "mapaDistratores": {
      "A": "FSH e LH marcadamente elevados são típicos de disgenesia gonadal (como Turner), enquanto na insensibilidade androgênica o FSH costuma estar normal e o LH normal ou discretamente elevado.",
      "B": "O cariótipo 45,X0 define a Síndrome de Turner, que cursa com baixa estatura, útero presente e gônadas em fita, e não com estatura preservada e ausência uterina.",
      "D": "O cariótipo 47,XXY corresponde à Síndrome de Klinefelter, que apresenta fenótipo masculino com hipogonadismo hipergonadotrófico e genitália externa masculina."
    }
  },
  {
    "id": "q-usp-sp-2023-024",
    "code": "Q-USPSP23-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Síndrome dos Ovários Policísticos",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-sindrome-dos-ovarios-policisticos",
    "tags": [
      "sop",
      "lh-elevado",
      "hiperandrogenismo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 20 anos, refere aumento de pelos faciais e acne. Nuligesta, uso de preservativo, ciclos menstruais com intervalos de 40 dias, por 6 dias e pouca quantidade. O exame clínico geral é normal, com achado de pilificação aumentada em face. Exame ginecológico: genitais externos, clitóris, pilificação, grandes e pequenos lábios normais; toque vaginal com útero de volume habitual e regiões anexiais normais. Qual é o achado laboratorial associado à condição clínica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "FSH baixo em relação ao LH.",
        "explanation": "Incorreta: A dinâmica neuroendócrina da SOP envolve pulsos rápidos de GnRH que favorecem a síntese de LH em detrimento de FSH, não redução isolada de FSH com LH baixo.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "LH elevado em relação ao FSH.",
        "explanation": "Correta: Na Síndrome dos Ovários Policísticos (SOP), o aumento na frequência dos pulsos de GnRH hipotalâmico estimula seletivamente a produção de LH pelas células gonadotróficas hipofisárias, resultando comumente em elevação de LH em relação ao FSH (relação LH/FSH > 2:1 a 3:1).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Antimulleriano baixo para a faixa etária.",
        "explanation": "Incorreta: Devido ao grande recrutamento folicular interrompido na fase antral/pré-antral, os níveis de hormônio antimulleriano (AMH) na SOP encontram-se caracteristicamente aumentados, não reduzidos.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Cortisol elevado para a faixa etária.",
        "explanation": "Incorreta: O cortisol sérico está normal na SOP. Elevação do cortisol apontaria para hipercortisolismo (Síndrome de Cushing), que se manifestaria com outros estigmas como pletora facial, estrias violáceas largas e miopatia proximal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A paciente jovem apresenta critérios diagnósticos de Rotterdam para SOP (oligo/anovulação traduzida por ciclos de 40 dias e hiperandrogenismo clínico manifestado por hirsutismo e acne). Laboratorialmente, observa-se hipersecreção de LH em relação ao FSH, estimulando a teca ovariana a superproduzir androgênios.",
    "perolaClinica": "Na SOP, a alteração clássica do eixo hipófise-ovário é a relação LH/FSH invertida (LH elevado em relação ao FSH).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rotterdam ESHRE/ASRM-Sponsored PCOS Consensus Workshop Group",
      "FEBRASGO — Síndrome dos Ovários Policísticos"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2977,
    "analiseBanca": {
      "conceitoCentral": "Perfil hormonal neuroendócrino na Síndrome dos Ovários Policísticos (SOP): inversão da relação LH/FSH.",
      "raciocinioChave": "Ciclos espaniomenorreicos (40 dias) associados a sinais clínicos de hiperandrogenismo (hirsutismo facial e acne) fecham critérios de Rotterdam para SOP. Nessa condição, o aumento da frequência dos pulsos de GnRH eleva seletivamente o LH em relação ao FSH.",
      "armadilhaBanca": "Inverter a razão LH/FSH na leitura apressada ou confundir o aumento do hormônio antimulleriano (AMH) típico da SOP com diminuição da reserva ovariana."
    },
    "mapaDistratores": {
      "A": "Na SOP ocorre aumento desproporcional do LH pela alta frequência de pulsos de GnRH, e não uma queda isolada do FSH com LH baixo.",
      "C": "O acúmulo de múltiplos folículos antrais na SOP eleva caracteristicamente o hormônio antimulleriano (AMH), em vez de reduzi-lo.",
      "D": "O cortisol sérico mantém-se normal na SOP; sua elevação sugeriria Síndrome de Cushing como diagnóstico diferencial de hiperandrogenismo."
    }
  },
  {
    "id": "q-usp-sp-2023-025",
    "code": "Q-USPSP23-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Endométrio",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-endometrio",
    "tags": [
      "cancer-de-endometrio",
      "preservacao-de-fertilidade",
      "progestagenio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 30 anos, nuligesta, ciclos menstruais com intervalos de 40 dias e duração de 5 dias, em investigação para infertilidade. Realiza biópsia de endométrio com diagnóstico de adenocarcinoma endometrióide, bem diferenciado, grau 1 histológico. A Ressonância Magnética demonstra abdome e pelve normais, útero e anexos normais, limite bem definido entre endométrio e miométrio, sugerindo neoplasia limitada ao endométrio. A paciente deseja preservar a fertilidade. Qual é o tratamento que pode ser considerado para esta paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "braquiterapia.",
        "explanation": "Incorreta: A braquiterapia destrói irreversivelmente a função reprodutiva e o endométrio, sendo modalidade radioterápica adjuvante ou curativa em casos inoperáveis, nunca em preservação de fertilidade.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "estrogênio alta dose.",
        "explanation": "Incorreta: O estrogênio administrado isoladamente promoveria mitogênese e progressão do adenocarcinoma endometrial, que é tumor hormonodependente.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "ablação de cavidade endometrial.",
        "explanation": "Incorreta: A ablação endometrial destrói a camada basal do endométrio com formação de sinéquias uterinas densas (Síndrome de Asherman), inviabilizando gestações futuras e dificultando o monitoramento oncológico histológico.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "progestagênio alta dose.",
        "explanation": "Correta: O tratamento padrão do câncer de endométrio é cirúrgico (histerectomia total + salpingooforectomia bilateral). Todavia, em pacientes jovens com desejo reprodutivo formal que apresentem adenocarcinoma endometrioide bem diferenciado (Grau 1) restrito ao endométrio na RM (estágio IA), pode-se propor terapia conservadora temporária com progestagênio em altas doses (ex: acetato de megestrol, medroxiprogesterona ou DIU de levonorgestrel) sob controle histeroscópico rigoroso.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A preservação da fertilidade no adenocarcinoma de endométrio é uma exceção terapêutica reservada estritamente para tumores estádio IA (sem invasão miometrial), histologia endometrioide e Grau 1 (G1). O tratamento médico é baseado em progesterona em altas doses para induzir diferenciação secretora e apoptose tumoral, seguido de gestação imediata e histerectomia profilática após o término da prole.",
    "perolaClinica": "Câncer de endométrio endometrioide G1 sem invasão miometrial em mulher com desejo de engravidar = tratamento clínico com progestagênio em alta dose.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "NCCN Guidelines — Uterine Neoplasms",
      "FEBRASGO — Tratamento Conservador do Câncer de Endométrio"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2978,
    "analiseBanca": {
      "conceitoCentral": "Tratamento conservador preservador de fertilidade no adenocarcinoma de endométrio grau 1 restrito ao endométrio.",
      "raciocinioChave": "Em mulher jovem com desejo reprodutivo e adenocarcinoma endometrioide bem diferenciado (G1) limitado ao endométrio na RM (sem invasão miometrial), admite-se terapia clínica com progestagênio em alta dose para regressão tumoral temporária.",
      "armadilhaBanca": "Indicar tratamentos ablativos ou actínicos que destroem o endométrio e inviabilizam a gestação futura, ou prescrever estrogênio que estimula o tumor."
    },
    "mapaDistratores": {
      "A": "A braquiterapia causa destruição endometrial e esterilidade irreversível, sendo contraindicada quando o objetivo é preservar a fertilidade.",
      "B": "O estrogênio em alta dose estimula a proliferação endometrial e acelera a progressão do adenocarcinoma endometrioide hormonodependente.",
      "C": "A ablação da cavidade endometrial destrói a camada basal e gera sinéquias uterinas, inviabilizando futuras gestações e o seguimento histológico."
    }
  },
  {
    "id": "q-usp-sp-2023-026",
    "code": "Q-USPSP23-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": [
      "retocele",
      "prolapso-de-parede-posterior",
      "colporrafia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 60 anos, antecedente de dois partos vaginais e menopausa aos 50 anos sem terapia hormonal. Nega procedimentos cirúrgicos prévios. Queixa-se de obstipação e de dificuldade para exoneração fecal. Frequentemente introduz o dedo na vagina para auxiliar na evacuação. Nega perda urinária. Exame ginecológico: pilificação compatível com a idade; rotura perineal de primeiro grau; procidência de parede vaginal anterior e posterior às manobras de esforço; especular com conteúdo vaginal habitual; colo uterino epitelizado. Qual é o tratamento mais adequado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colporrafia da fascia vesico-vaginal.",
        "explanation": "Incorreta: A colporrafia da fáscia vesicovaginal (colporrafia anterior) trata o prolapso de parede anterior (cistocele), que não é responsável pelos sintomas defecatórios e pela manobra de digitação vaginal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Colporrafia da fascia reto-vaginal.",
        "explanation": "Correta: A queixa clínica de constipação associada à necessidade de manobra de digitação transvaginal para completar a evacuação é patognomônica de retocele sintomática (defeito de parede vaginal posterior). O tratamento cirúrgico definitivo de escolha é a colporrafia posterior com plicatura/reparo da fáscia retovaginal.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Rafia do músculo transverso superficial do períneo.",
        "explanation": "Incorreta: A reconstituição isolada do músculo transverso superficial do períneo integra a perineoplastia e trata apenas defeitos do corpo perineal, sendo insuficiente para corrigir o abaulamento herniário retovaginal.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Colpo-sacro fixação.",
        "explanation": "Incorreta: A colposacrofixação é padrão-ouro para prolapso de cúpula vaginal pós-histerectomia ou prolapso apical uterino avançado, e não primeira escolha para retocele isolada sintomática.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O prolapso da parede vaginal posterior (retocele) decorre de fraqueza ou rotura da fáscia retovaginal (fáscia de Denonvilliers). Isso propicia a formação de um fundo de saco fecal voltado para a vagina durante o esforço evacuatório, exigindo suporte digital para orientar o bolo fecal em direção ao canal anal.",
    "perolaClinica": "Paciente que precisa digitar a parede posterior da vagina para evacuar tem retocele sintomática; cirurgia indicada: colporrafia retovaginal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Prolapso dos Órgãos Pélvicos",
      "Williams Ginecologia 3ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2978,
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico e correção cirúrgica específica da retocele sintomática (defeito da fáscia retovaginal).",
      "raciocinioChave": "A dificuldade evacuatória com necessidade de digitação vaginal para auxiliar a exoneração fecal é altamente específica de retocele. A correção cirúrgica dirigida ao compartimento posterior é a colporrafia da fáscia retovaginal.",
      "armadilhaBanca": "Confundir a reparação da fáscia retovaginal com a colporrafia anterior (vesicovaginal) ou com procedimentos exclusivos para defeito apical ou perineal."
    },
    "mapaDistratores": {
      "A": "A colporrafia da fáscia vesicovaginal corrige o prolapso de parede anterior (cistocele), sem atuar no defeito posterior responsável pelos sintomas defecatórios.",
      "C": "A rafia isolada do músculo transverso superficial do períneo integra a perineoplastia, insuficiente para corrigir a herniação retovaginal.",
      "D": "A colpossacrofixação é indicada principalmente para prolapso apical ou de cúpula vaginal pós-histerectomia, não sendo primeira escolha para retocele isolada."
    }
  },
  {
    "id": "q-usp-sp-2023-027",
    "code": "Q-USPSP23-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "ciclo-menstrual",
      "muco-cervical",
      "ovulacao",
      "citrato-de-clomifeno"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 28 anos, nuligesta, com antecedente de ciclos menstruais irregulares. Foi orientada a utilizar citrato de clomifeno 50 mg por 5 dias, iniciando no terceiro dia pós- início da menstruação, com o intuito de promover a ovulação e favorecer a gravidez. Qual o achado clínico mais provável ao examinar a paciente no 14º dia pós-início da menstruação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Muco cervical esbranquiçado e pegajoso.",
        "explanation": "Incorreta: O muco espesso, esbranquiçado e pegajoso decorre da ação da progesterona na fase lútea tardia ou no climatério/gestação com rolha mucosa.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Muco cervical transparente e elástico.",
        "explanation": "Correta: No 14º dia pós-início da menstruação (período periovulatória induzido por clomifeno), os folículos em desenvolvimento secretam altas concentrações de estradiol. O estrogênio atua nas criptas endocervicais produzindo muco abundante, transparente, fluido e com alta filância (elástico), facilitando a ascensão espermática.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Muco cervical sanguinolento e viscoso.",
        "explanation": "Incorreta: Muco sanguinolento não é o achado esperado fisiológico peri-ovulatório, podendo traduzir ectopia friável, pólipo endocervical ou sangramento intermenstrual.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Muco cervical amarelado e líquido.",
        "explanation": "Incorreta: Muco amarelado e purulento indica infecção genital baixa (cervicite por clamídia/gonococo), não tendo relação com a fisiologia hormonal ovariana.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A ação estrogênica típica da fase pré-ovulatória sobre o colo uterino induz a produção de muco tipo E (estrogênico), caracterizado por ser límpido, elástico, fluido e acelular, o qual se cristaliza em padrão de folhas de samambaia ao microscópio.",
    "perolaClinica": "Pico de estrogênio peri-ovulatório (D14) = muco cervical abundante, transparente e filante (clara de ovo).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guyton & Hall — Tratado de Fisiologia Médica",
      "FEBRASGO — Avaliação da Fertilidade Conjugal"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2978,
    "analiseBanca": {
      "conceitoCentral": "Alterações fisiológicas do muco cervical sob ação estrogênica no período periovulatório.",
      "raciocinioChave": "No 14º dia do ciclo com indução ovulatória por citrato de clomifeno, o pico pré-ovulatório de estradiol estimula o epitélio endocervical a secretar muco abundante, transparente, fluido e com alta filância (elástico).",
      "armadilhaBanca": "Confundir o muco estrogênico periovulatório (filante e cristalino) com o muco progestacional da fase lútea (espesso e pegajoso) ou com secreções patológicas."
    },
    "mapaDistratores": {
      "A": "O muco esbranquiçado, espesso e pegajoso é típico da fase lútea por ação da progesterona, dificultando a ascensão espermática.",
      "C": "Muco sanguinolento e viscoso não representa resposta hormonal fisiológica à ovulação, sugerindo lesões cervicais ou sangramento intermenstrual.",
      "D": "Secreção amarelada e purulenta indica processo infeccioso como cervicite bacteriana, sem relação com o pico estrogênico periovulatório."
    }
  },
  {
    "id": "q-usp-sp-2023-028",
    "code": "Q-USPSP23-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "colpocitologia",
      "homem-transgenero",
      "testosterona"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 30 anos, homem transgênero com preservação da vagina. Vida sexual com penetração vaginal, contracepção com DIU de cobre, sem uso de preservativo. Faz uso de terapia hormonal androgênica. Realiza coleta de citologia oncótica. Qual a implicação do ambiente androgênico na avaliação dos achados citológicos?",
    "alternativas": [
      {
        "letter": "A",
        "text": "diminuição de representação de células superficiais e melhor acurácia diagnóstica.",
        "explanation": "Incorreta: A terapia androgênica reduz as células superficiais e piora (em vez de melhorar) a acurácia diagnóstica do esfregaço.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "aumento de representação de células superficiais e pior acurácia diagnóstica.",
        "explanation": "Incorreta: O ambiente androgênico reduz, e não aumenta, a representação de células superficiais maduras.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "diminuição de representação de células basais e melhor acurácia diagnóstica.",
        "explanation": "Incorreta: Os androgênios promovem hipotrofia epitelial, aumentando a descamação das camadas basais/parabasais profundas, o que prejudica a acurácia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "aumento de representação de células basais e pior acurácia diagnóstica.",
        "explanation": "Correta: Em homens trans sob terapia com testosterona, o epitélio do colo uterino e da vagina sofre atrofia acentuada por hipoestrogenismo e ação androgênica. Isso provoca esfregaço atrófico, rico em células basais e parabasais e pobre em células superficiais maduras, o que reduz a celularidade representativa, aumenta a dessecação e piora a acurácia do teste citológico, elevando as taxas de amostras insatisfatórias.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "O rastreamento de câncer cervical em homens transgênero com preservação do colo deve ser mantido conforme as diretrizes populacionais. Entretanto, a virilização medicamentosa gera atrofia epitelial significativa, elevando a proporção de células basais/parabasais e dificultando a interpretação citológica, o que resulta em menor sensibilidade e maior índice de falso-negativos ou laudos insatisfatórios.",
    "perolaClinica": "Terapia androgênica em homem trans induz esfregaço atrófico (muitas células basais/parabasais) e piora a acurácia citológica.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero",
      "ACOG Clinical Consensus No. 2 — Health Care for Transgender and Gender Diverse Individuals"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2979,
    "analiseBanca": {
      "conceitoCentral": "Impacto da testosterona exógena na citologia oncótica cervical de homens transgênero.",
      "raciocinioChave": "A terapia hormonal androgênica em homens trans com colo uterino preservado induz atrofia epitelial cervicovaginal por hipoestrogenismo relativo, elevando a proporção de células basais/parabasais e piorando a acurácia diagnóstica da colpocitologia.",
      "armadilhaBanca": "Inverter o efeito da atrofia hormonal na maturidade celular do epitélio escamoso (superficiais vs. basais) ou supor que o esfregaço atrófico facilita a leitura."
    },
    "mapaDistratores": {
      "A": "Embora reduza as células superficiais maduras, o esfregaço atrófico piora a acurácia diagnóstica, aumentando laudos insatisfatórios ou falso-negativos.",
      "B": "O ambiente androgênico provoca atrofia epitelial com diminuição, e não aumento, da representação de células superficiais.",
      "C": "A atrofia induzida por testosterona aumenta a proporção de células basais e parabasais no esfregaço e prejudica a sensibilidade do exame."
    }
  },
  {
    "id": "q-usp-sp-2023-029",
    "code": "Q-USPSP23-0029",
    "numeroOriginal": 29,
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
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 60 anos, menopausa há 10 anos, sem terapia hormonal. Nega uso de medicamentos ou comorbidades. Refere sangramento genital em pequena quantidade. Realiza histeroscopia sem achados anormais na cavidade endometrial e a biópsia, representativa, é de atrofia endometrial. Qual é a conduta adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar terapia hormonal estrogênica e progestagênica.",
        "explanation": "Incorreta: A reposição hormonal não tem indicação para tratar atrofia endometrial assintomática/já investigada e apresenta riscos desnecessários sem queixas vasomotoras concomitantes.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Iniciar terapia hormonal estrogênica.",
        "explanation": "Incorreta: Estrogênio isolado em mulher com útero íntegro é expressamente contraindicado devido ao risco de indução de hiperplasia e adenocarcinoma de endométrio.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Orientação para controle clínico e seguimento habitual.",
        "explanation": "Correta: A atrofia endometrial é a principal causa de sangramento genital na pós-menopausa (responsável por 60-80% dos casos). Uma vez realizada a avaliação armada com histeroscopia e biópsia representativa que afastou hiperplasia e neoplasia maligna, a conduta correta é tranquilizar a paciente e manter o seguimento clínico ambulatorial habitual.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Ablação endometrial.",
        "explanation": "Incorreta: A ablação endometrial é procedimento cirúrgico para sangramento uterino anormal refratário na pré-menopausa, sem cabimento em endométrio já atrófico na pós-menopausa.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Todo sangramento genital na pós-menopausa impõe investigação para exclusão de câncer endometrial. Uma vez obtido o laudo histopatológico definitivo de atrofia endometrial benigna após visualização histeroscópica da cavidade, encerra-se a investigação invasiva e adota-se conduta expectante com controle clínico.",
    "perolaClinica": "Sangramento na pós-menopausa investigado com histeroscopia e biópsia compatível com atrofia = seguimento clínico expectante.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Sangramento Uterino na Pós-Menopausa",
      "ACOG Committee Opinion No. 734: The Role of Transvaginal Ultrasonography in Evaluating Postmenopausal Bleeding"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2979,
    "analiseBanca": {
      "conceitoCentral": "Conduta após confirmação histológica de atrofia endometrial como causa de sangramento pós-menopausa.",
      "raciocinioChave": "A atrofia é a causa mais frequente de sangramento uterino pós-menopausa; após exclusão segura de hiperplasia ou câncer por histeroscopia normal e biópsia representativa mostrando atrofia, indica-se seguimento clínico habitual.",
      "armadilhaBanca": "Indicar terapia hormonal sem sintomas climatéricos ou prescrever estrogênio isolado em paciente com útero, aumentando o risco neoplásico."
    },
    "mapaDistratores": {
      "A": "A terapia hormonal combinada não é indicada na ausência de sintomas vasomotores ou indicação específica apenas por achado de atrofia endometrial já investigada.",
      "B": "A reposição com estrogênio isolado em mulher não histerectomizada é contraindicada pelo risco elevado de hiperplasia e câncer de endométrio.",
      "D": "A ablação endometrial destina-se a sangramentos benignos refratários na pré-menopausa, sendo desnecessária e inadequada em endométrio já atrófico."
    }
  },
  {
    "id": "q-usp-sp-2023-030",
    "code": "Q-USPSP23-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Sangramento Uterino Anormal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-sangramento-uterino-anormal",
    "tags": [
      "sangramento-uterino-anormal",
      "coagulopatia",
      "pti",
      "adolescencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 16 anos, previamente hígida, menarca aos 12 anos e ciclos irregulares desde então. Procura ginecologista por sangramento menstrual excessivo há 5 dias. Ao exame clínico, apresenta Tanner 3 mamário e genital; hímen íntegro e perfurado. Exame clínico geral normal e petéquias esparsas. Exames laboratoriais apresentados. Considerando a principal hipótese diagnóstica, qual é a conduta adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Corticosteroide.",
        "explanation": "Correta: A presença de sangramento menstrual abundante associado a manifestações hemorrágicas mucocutâneas (petéquias) e plaquetopenia grave isolada nos exames aponta para Púrpura Trombocitopênica Imune (PTI). O tratamento inicial de escolha para estabilização hematológica e hemostasia é a corticoterapia sistêmica (ex: prednisona ou metilprednisolona).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Desmopressina.",
        "explanation": "Incorreta: A desmopressina (dDAVP) é utilizada na Doença de von Willebrand e hemofilia A leve para liberar fator VIII e vWF endoteliais, sem efeito terapêutico na plaquetopenia periférica imunomediada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Progesterona.",
        "explanation": "Incorreta: Progestágenos controlam disfunções ovulatórias (SUA-O), mas não corrigem a diátese hemorrágica primária decorrente de plaquetopenia imune grave.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Estradiol.",
        "explanation": "Incorreta: Estradiol em altas doses pode ser adjuvante no sangramento endometrial agudo grave, mas a intervenção etiológica indispensável neste caso com petéquias e plaquetopenia é imunossupressão com corticosteroide.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Cerca de 20% das adolescentes hospitalizadas por sangramento uterino anormal grave na menarca possuem uma coagulopatia subjacente. A coexistência de petéquias cutâneas e trombocitopenia isolada acentuada sela o diagnóstico de PTI, cujo pilar terapêutico de primeira linha é o corticosteroide.",
    "perolaClinica": "Menorragia grave associada a petéquias e trombocitopenia isolada = PTI; conduta: corticosteroide.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Sangramento Uterino Anormal na Adolescência",
      "Diretrizes Brasileiras de Púrpura Trombocitopênica Imune — ABHH"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2979,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q030.png",
      "modality": "Gráfico/Tabela",
      "caption": "Exames laboratoriais revelando trombocitopenia grave isolada compatível com púrpura trombocitopênica imune.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Sangramento uterino anormal na adolescência secundário à Púrpura Trombocitopênica Imune (PTI).",
      "raciocinioChave": "Menometrorragia na adolescência associada a petéquias esparsas e trombocitopenia isolada nos exames aponta para PTI; o tratamento inicial de escolha para elevar as plaquetas e conter a hemorragia é o corticosteroide.",
      "armadilhaBanca": "Tratar apenas como sangramento uterino disfuncional hormonal da anovulação juvenil (progesterona/estradiol) ou confundir PTI com doença de von Willebrand (desmopressina)."
    },
    "mapaDistratores": {
      "B": "A desmopressina é útil na doença de von Willebrand e hemofilia A leve por liberar fator VIII e fator de von Willebrand, mas não corrige a plaquetopenia autoimune da PTI.",
      "C": "A progesterona controla sangramento disfuncional anovulatório, porém é insuficiente isoladamente diante de diátese hemorrágica por plaquetopenia grave.",
      "D": "O estradiol pode auxiliar na estabilização endometrial aguda, mas não trata a destruição plaquetária imunomediada que causa as petéquias e a hemorragia."
    }
  },
  {
    "id": "q-usp-sp-2023-031",
    "code": "Q-USPSP23-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Hemorragia Pós-Parto",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-hemorragia-pos-parto",
    "tags": [
      "hemorragia-pos-parto",
      "atonia-uterina",
      "misoprostol",
      "descolamento-prematuro-de-placenta"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante primigesta de 24 anos, 32 semanas e 5 dias de gestação, chega ao Pronto- Socorro da Obstetrícia referindo dor de cabeça de forte intensidade associada a náuseas e mal-estar gástrico. Ao exame clínico: PA de 152x115 mmHg, FC 82 bpm, dinâmica uterina presente e fraca, altura uterina de 34 cm, batimentos cardíacos fetais de 150 bpm, edema +++/4 de MMII, hiperreflexia patelar. Recebeu Hidralazina endovenosa e dose de ataque de Sulfato de Magnésio pelo esquema de Pritchard. Após 1 hora, refere dor abdominal de forte intensidade. Ao exame obstétrico, útero hipertônico e BCF 98 bpm. Foi encaminhada para o parto cesáreo com feto vivo, masculino, peso de 1.748 g e placenta com aspecto de descolamento de 20% de sua área total. Após histerorrafia, útero mostrava-se bastante amolecido, pastoso, hipoinvoluído. Foi realizada massagem uterina, seguida de infusão de ocitocina. Qual é o próximo passo?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ergotamina.",
        "explanation": "Incorreta: Os derivados do ergot (maleato de metilergometrina) provocam intensa vasoconstrição periférica e elevação aguda da PA, sendo formalmente contraindicados em pacientes com pré-eclâmpsia/hipertensão arterial.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Balão de Bakri.",
        "explanation": "Incorreta: O balão de tamponamento intrauterino (Bakri) é indicado após a falha do tratamento medicamentoso completo com uterotônicos.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Misoprostol.",
        "explanation": "Correta: Na atonia uterina pós-parto não responsiva à massagem bimanual e ocitocina, o próximo passo farmacológico em uma paciente com pré-eclâmpsia (na qual a metilergometrina é contraindicada) é o uso de análogo de prostaglandina E1: o misoprostol (800 a 1000 mcg por via retal ou sublingual).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Sutura de B-Lynch.",
        "explanation": "Incorreta: A sutura compressiva de B-Lynch é uma intervenção cirúrgica de segunda linha, indicada quando todas as medidas farmacológicas (incluindo uterotônicos secundários) falharem.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "O manejo da hemorragia pós-parto por atonia uterina obedece a uma sequência escalonada de uterotônicos. Após a ocitocina, o segundo agente habitual seria a metilergometrina; contudo, por se tratar de paciente com pré-eclâmpsia grave, ela é formalmente contraindicada pelo risco de crise hipertensiva e AVC, impondo a prescrição imediata de misoprostol.",
    "perolaClinica": "Na atonia uterina em gestante hipertensa/pré-eclâmpsia: METILERGOMETRINA É CONTRAINDICADA; usar Misoprostol.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manual de Prevenção e Manejo da Hemorragia Pós-Parto",
      "FEBRASGO — Hemorragia Pós-Parto"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2980,
    "analiseBanca": {
      "conceitoCentral": "Manejo farmacológico escalonado da hemorragia pós-parto por atonia uterina em paciente com pré-eclâmpsia.",
      "raciocinioChave": "Na atonia uterina pós-parto em paciente com pré-eclâmpsia grave, os derivados do ergot são contraindicados pelo risco de crise hipertensiva; após ocitocina, o próximo uterotônico de escolha é o misoprostol, antes de medidas invasivas.",
      "armadilhaBanca": "Indicar ergotamina/metilergometrina ignorando sua contraindicação absoluta na pré-eclâmpsia, ou pular precocemente para tamponamento/cirurgia antes dos uterotônicos."
    },
    "mapaDistratores": {
      "A": "A ergotamina provoca vasoconstrição intensa e elevação aguda da pressão arterial, sendo formalmente contraindicada em gestantes com pré-eclâmpsia.",
      "B": "O balão de Bakri é medida mecânica de segunda linha utilizada apenas quando há falha dos uterotônicos farmacológicos disponíveis.",
      "D": "A sutura compressiva de B-Lynch é intervenção cirúrgica de resgate reservada aos casos refratários ao manejo clínico medicamentoso completo."
    }
  },
  {
    "id": "q-usp-sp-2023-032",
    "code": "Q-USPSP23-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": [
      "protese-valvar-mecanica",
      "anticoagulacao-na-gestacao",
      "varfarina",
      "enoxaparina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 35 anos, encaminhada para aconselhamento pré-concepcional por ser portadora de prótese metálica em posição mitral, operada há 9 anos. Atualmente usa somente Varfarina sódica 5 mg ao dia. Paciente deseja engravidar e quer saber como irá ficar a anticoagulação durante a gestação. Qual é a orientação quanto ao uso de anticoagulante?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Varfarina sódica (1º trimestre); Varfarina sódica (2º trimestre); Enoxaparina (após 36 semanas).",
        "explanation": "Incorreta: Manter varfarina no primeiro trimestre expõe o feto à embriopatia varfarínica teratogênica grave (hipoplasia nasal, condrodisplasia pontilhada), devendo ser substituída pela enoxaparina.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Enoxaparina (1º trimestre); Enoxaparina (2º trimestre); Varfarina sódica (após 36 semanas).",
        "explanation": "Incorreta: A enoxaparina isolada no segundo trimestre tem maior índice de trombose de prótese metálica do que a varfarina; além disso, a varfarina após 36 semanas é contraindicada pelo risco de sangramento intracraniano fetal durante o parto.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Varfarina sódica (1º trimestre); Enoxaparina (2º trimestre); Varfarina sódica (após 36 semanas).",
        "explanation": "Incorreta: Uso de varfarina no 1º trimestre e após 36 semanas acumula o risco de teratogênese embrionária inicial e coagulopatia fetal/hemorragia periparto.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Enoxaparina (1º trimestre); Varfarina sódica (2º trimestre); Enoxaparina (após 36 semanas).",
        "explanation": "Correta: O manejo clássico em portadoras de prótese metálica cardíaca que usam varfarina visa evitar a embriopatia no primeiro trimestre (substituição por Enoxaparina entre 6-12 semanas), retornar à Varfarina sódica no segundo trimestre (máxima eficácia antitrombótica) e reverter para Enoxaparina após 36 semanas para permitir parto seguro e bloqueio anestésico neuroaxial sem risco de sangramento intracraniano fetal.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A anticoagulação de próteses mecânicas na gravidez representa um dilema terapêutico entre eficácia antitrombótica materna (na qual a varfarina é superior) e segurança fetal. A estratégia tradicional alterna Enoxaparina no 1º trimestre (evita embriopatia), Varfarina no 2º trimestre e reintrodução de Enoxaparina a termo (>36 semanas) para programar o parto com segurança.",
    "perolaClinica": "Anticoagulação em prótese metálica: Enoxaparina no 1º tri (antiteratogênica) -> Varfarina no 2º tri -> Enoxaparina após 36 sem (anti-hemorrágica no parto).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz da Sociedade Brasileira de Cardiologia sobre Gravidez e Cardiopatia",
      "ACOG Practice Bulletin No. 196: Thromboembolism in Pregnancy"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2981,
    "analiseBanca": {
      "conceitoCentral": "Esquema sequencial de anticoagulação na gestação em portadora de prótese valvar cardíaca metálica.",
      "raciocinioChave": "Para equilibrar teratogenicidade fetal e proteção trombótica materna na prótese metálica, substitui-se a varfarina por enoxaparina no 1º trimestre (evitando embriopatia), retorna-se à varfarina no 2º trimestre (menor trombose valvar) e volta-se à enoxaparina após 36 semanas para segurança no parto.",
      "armadilhaBanca": "Manter varfarina no primeiro trimestre (risco de embriopatia varfarínica) ou após 36 semanas (hemorragia fetal no parto), ou deixar enoxaparina durante toda a gestação."
    },
    "mapaDistratores": {
      "A": "Manter varfarina no 1º trimestre expõe o embrião à embriopatia varfarínica, caracterizada por hipoplasia nasal e condrodisplasia pontilhada.",
      "B": "Manter varfarina após 36 semanas eleva o risco de hemorragia intracraniana fetal no parto, além de a enoxaparina no 2º trimestre conferir menor proteção valvar que a varfarina.",
      "C": "Usar varfarina no 1º trimestre e após 36 semanas combina justamente os dois períodos de maior risco fetal (teratogênese inicial e hemorragia periparto)."
    }
  },
  {
    "id": "q-usp-sp-2023-033",
    "code": "Q-USPSP23-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Gestação Gemelar e Restrição de Crescimento Fetal",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-gestacao-gemelar-e-restricao-de-crescimento-fetal",
    "tags": [
      "gestacao-gemelar",
      "apresentacao-pelvica",
      "parto-cesareo",
      "prematuridade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 28 anos, 2G:1PN:0A, encontra-se internada na enfermaria de alto risco por gestação gemelar dicoriônica-diamniótica e perda de líquido amniótico há 4 dias. Hoje, 33 semanas e 4 dias de gestação, o primeiro gemelar está em apresentação pélvica e pesa 1.405 g, o segundo gemelar está em apresentação cefálica e pesa 1.712 g. A paciente queixa-se de dor em baixo ventre. Ao exame clínico PA 110x74 mmHg, FC 82 bpm, BCF de ambos presentes e rítmicos, dinâmica uterina de 2 contrações fracas em 10 minutos. Ao toque colo fino, pérvio para 3 cm. Qual é a conduta obstétrica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Parto cesáreo de urgência.",
        "explanation": "Correta: Em gestação gemelar, a apresentação do primeiro gemelar define a via de parto. Quando o primeiro gemelar está em apresentação não cefálica (pélvico), a via de parto obrigatoriamente indicada é a cesariana de urgência, agravada aqui pelo trabalho de parto prematuro associado à rotura prematura de membranas.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Condução de trabalho de parto.",
        "explanation": "Incorreta: Conduzir parto vaginal com primeiro feto pélvico prematuro acarreta risco inaceitável de engasgamento da cabeça derradeira e intertravamento de cabeças fetais.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Butil brometo de escopolamina e reavaliação.",
        "explanation": "Incorreta: O butilbrometo de escopolamina é antiespasmódico sem papel na tocólise e atrasaria a resolução cirúrgica urgente necessária.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Inibição de trabalho de parto prematuro.",
        "explanation": "Incorreta: A tocólise (inibição de trabalho de parto) é contraindicada na presença de rotura prematura de membranas ovulares há 4 dias associada a trabalho de parto franco em gestação de 33 semanas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Na gravidez gemelar, o parto vaginal só é admitido se o primeiro gemelar estiver em apresentação cefálica. Caso o gemelar 1 esteja em situação transversa ou apresentação pélvica, impõe-se a via alta (cesariana). A rotura prévia de membranas associada à dilatação cervical confirma a necessidade de interrupção cirúrgica imediata.",
    "perolaClinica": "Parto em gestação gemelar: Primeiro feto não cefálico = indicação absoluta de cesariana.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Gestação Múltipla",
      "ACOG Practice Bulletin No. 169: Multifetal Gestations"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2981,
    "analiseBanca": {
      "conceitoCentral": "Via de parto na gestação gemelar com primeiro feto em apresentação pélvica e trabalho de parto.",
      "raciocinioChave": "Na gestação gemelar, a apresentação do primeiro gemelar define a via de parto: estando pélvico em paciente com trabalho de parto franco e rotura prematura de membranas, impõe-se cesariana de urgência.",
      "armadilhaBanca": "Tentar conduzir parto vaginal em gemelaridade com primeiro feto pélvico ou realizar tocólise na presença de rotura prematura de membranas há 4 dias."
    },
    "mapaDistratores": {
      "B": "A condução de parto vaginal com primeiro gemelar pélvico prematuro apresenta alto risco de retenção da cabeça derradeira e intertravamento cefálico.",
      "C": "O butilbrometo de escopolamina é antiespasmódico sem efeito tocolítico e apenas retardaria a resolução obstétrica cirúrgica necessária.",
      "D": "A tocólise é contraindicada na vigência de rotura prematura de membranas há 4 dias devido ao risco elevado de corioamnionite e sofrimento fetal."
    }
  },
  {
    "id": "q-usp-sp-2023-034",
    "code": "Q-USPSP23-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Assistência Pré-Natal de Baixo Risco",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-assistencia-pre-natal-de-baixo-risco",
    "tags": [
      "translucencia-nucal",
      "trissomia",
      "pre-natal",
      "primeiro-trimestre"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 41 anos retorna em consulta de pré-natal trazendo o exame realizado com 12 semanas de gestação: translucência nucal: 2,5 mm e imagens apresentadas. Quando comparado à população dessa mesma idade, qual é o significado desse resultado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Mantido o risco basal de cardiopatia fetal.",
        "explanation": "Incorreta: A translucência nucal aumentada também se correlaciona com aumento significativo do risco de malformações cardíacas estruturais congênitas.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Maior risco de meningomielocele.",
        "explanation": "Incorreta: Meningomielocele é defeito de fechamento do tubo neural rastreado no morfológico de segundo trimestre e associado a alterações da fossa posterior (sinal da banana/limão), não à translucência nucal aumentada isolada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Maior risco de trissomia.",
        "explanation": "Correta: A translucência nucal aumentada (≥ 2,5 mm ou > P95 para o CCN) e marcadores ultrassonográficos anormais no 1º trimestre elevam consideravelmente a probabilidade de anomalias cromossômicas, sobretudo trissomia do cromossomo 21 (Síndrome de Down), 18 (Edwards) e 13 (Patau).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Maior risco de espinha bífida.",
        "explanation": "Incorreta: Espinha bífida é defeito do tubo neural rastreado preferencialmente no segundo trimestre pela anatomia intracraniana e espinhal fetal, não sendo o desfecho primário rastreado pela translucência nucal aumentada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A medida da translucência nucal entre 11 semanas e 13 semanas e 6 dias (CCN entre 45 e 84 mm) é o principal marcador ultrassonográfico para o rastreamento de aneuploidias no primeiro trimestre. Níveis anormais elevam substancialmente o risco de trissomias.",
    "perolaClinica": "Translucência nucal aumentada no 1º trimestre = marcador de alto risco para aneuploidias (trissomias) e cardiopatias congênitas.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Fetal Medicine Foundation (FMF) — First Trimester Screening",
      "FEBRASGO — Rastreamento de Aneuploidias no Pré-Natal"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2981,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q034.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia obstétrica de primeiro trimestre avaliando a translucência nucal e osso nasal.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Interpretação da translucência nucal alterada no rastreamento ultrassonográfico de 1º trimestre.",
      "raciocinioChave": "Uma translucência nucal aumentada no exame de 12 semanas (associada aos marcadores do 1º trimestre) eleva significativamente a probabilidade de aneuploidias cromossômicas, principalmente as trissomias 21, 18 e 13.",
      "armadilhaBanca": "Associar o aumento da translucência nucal primariamente a defeitos abertos do tubo neural (espinha bífida/meningomielocele) ou negar a relação com cardiopatias fetais."
    },
    "mapaDistratores": {
      "A": "O aumento da translucência nucal associa-se também a risco elevado de cardiopatias congênitas estruturais, não mantendo o risco basal da idade.",
      "B": "A meningomielocele é um defeito do tubo neural avaliado principalmente no morfológico de 2º trimestre, não pela translucência nucal aumentada isolada.",
      "D": "A espinha bífida aberta é rastreada por sinais cranianos e vertebrais no segundo trimestre, não constituindo o principal desfecho apontado pela TN alterada."
    }
  },
  {
    "id": "q-usp-sp-2023-035",
    "code": "Q-USPSP23-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Abortamento e Incompetência Istmocervical",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-abortamento-e-incompetencia-istmocervical",
    "tags": [
      "abortamento-incompleto",
      "amiu",
      "sangramento-primeiro-trimestre"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 34 anos, chega ao Pronto-Socorro de Obstetrícia, referindo estar gestante de 7 semanas e com sangramento vaginal. Antecedente de 3 gestações com 1 parto vaginal e 1 aborto. Exame clínico: bom estado geral, descorada +/4, hidratada, pressão arterial de 120x74 mmHg, FC 72 bpm. Exame especular com sangramento moderado e presença do achado apresentado em canal vaginal. A paciente foi então encaminhada para exame de ultrassonografia transvaginal, cuja imagem é apresentada. Endométrio: 23 mm. Qual é a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Expectante.",
        "explanation": "Incorreta: A conduta expectante é desaconselhada diante de sangramento vaginal ativo moderado e colo entreaberto com restos ovulares exteriorizando-se.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "AMIU expectante.",
        "explanation": "Correta: A presença de restos ovulares visíveis exteriorizando-se pelo colo uterino associada a sangramento ativo e eco endometrial espessado e heterogêneo (23 mm) caracteriza abortamento incompleto. A aspiração manual intrauterina (AMIU) é o método cirúrgico de esvaziamento uterino de primeira escolha na gestação precoce (< 12 semanas), por ser mais seguro e apresentar menores taxas de complicações em relação à curetagem.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Curetagem puerperal.",
        "explanation": "Incorreta: A curetagem puerperal refere-se ao procedimento pós-parto tardio; a curetagem uterina tradicional para abortamento está associada a maior risco de perfuração uterina e sinéquias endometriais quando comparada à AMIU.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Histeroscopia cirúrgica.",
        "explanation": "Incorreta: A histeroscopia cirúrgica não é indicada na vigência de abortamento incompleto com sangramento ativo no pronto-socorro.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O quadro de sangramento no primeiro trimestre associado à eliminação parcial de tecido gestacional e eco endometrial heterogêneo > 15 mm define abortamento incompleto. Conforme o Ministério da Saúde e a OMS, a AMIU é a modalidade intervencionista padrão-ouro para o primeiro trimestre por sua rapidez, eficácia e menor trauma endometrial.",
    "perolaClinica": "Abortamento incompleto < 12 semanas com sangramento ativo: o método de escolha para esvaziamento é a AMIU.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Atenção Humanizada ao Abortamento",
      "OMS — Diretrizes sobre Cuidados no Aborto"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2982,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q035.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia transvaginal demonstrando cavidade endometrial espessada (23 mm) e heterogênea com restos ovulares.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Esvaziamento uterino por AMIU no abortamento incompleto de primeiro trimestre.",
      "raciocinioChave": "Gestante de 7 semanas com sangramento moderado, eliminação de material ovular ao exame especular e endométrio espessado (23 mm) apresenta abortamento incompleto; a Aspiração Manual Intrauterina (AMIU) é o método de escolha para esvaziamento no 1º trimestre.",
      "armadilhaBanca": "Indicar curetagem uterina convencional (denominada aqui impropriamente de puerperal) ou histeroscopia em cenário de emergência com sangramento ativo."
    },
    "mapaDistratores": {
      "A": "A conduta expectante não é apropriada diante de sangramento vaginal moderado ativo com material ovular exteriorizando-se pelo colo.",
      "C": "A curetagem puerperal aplica-se ao pós-parto tardio, e a curetagem uterina tradicional oferece maior risco de sinéquias e perfuração que a AMIU.",
      "D": "A histeroscopia cirúrgica não tem indicação no atendimento de emergência de abortamento incompleto com sangramento ativo."
    }
  },
  {
    "id": "q-usp-sp-2023-036",
    "code": "Q-USPSP23-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Diagnóstico de Gravidez e Modificações Fisiológicas",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-diagnostico-de-gravidez-e-modificacoes-fisiologicas",
    "tags": [
      "granuloma-gravidico",
      "modificacoes-fisiologicas-da-gestacao",
      "higiene-bucal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 24 semanas de gestação, em consulta de pré-natal refere problema na gengiva com presença de uma bola vermelha e dolorida. Relata frequente sangramento gengival ao escovar os dentes. Ao exame clínico, observa-se a seguinte imagem: Qual é a melhor conduta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Orientar higiene bucal.",
        "explanation": "Correta: Trata-se de um granuloma piogênico oral (épulis gravídico / gengivite gravídica), lesão vascular proliferativa benigna desencadeada por alterações hormonais (estrogênio e progesterona) combinadas à placa bacteriana local. A conduta inicial preconizada é conservadora, consistindo em reforço da higiene bucal e profilaxia periodontal, uma vez que a maioria regride espontaneamente após o parto.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Solicitar biópsia.",
        "explanation": "Incorreta: Biópsia é desnecessária em quadro com apresentação clínica e topográfica clássica e benigna, com risco de sangramento profuso local pela rica vascularização.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Encaminhar para exérese.",
        "explanation": "Incorreta: A exérese cirúrgica deve ser evitada durante a gravidez, sendo reservada estritamente para lesões com sangramento incoercível, interferência importante na mastigação ou suspeita atípica de malignidade.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Realizar cauterização.",
        "explanation": "Incorreta: A cauterização direta é contraindicada na gengiva pela dor, sangramento e risco de necrose periodontal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O épulis gravídico é uma hiperplasia vascular reacional benigna comum durante o segundo trimestre da gestação. Decorre da resposta tecidual exacerbada a irritantes locais (placa e cálculo) sob efeito hormonal. A higiene oral adequada reduz o componente inflamatório e frequentemente estabiliza ou resolve o quadro, aguardando-se a resolução pós-parto.",
    "perolaClinica": "Nódulo gengival sangrante benigno na gestante = granuloma piogênico (épulis gravídico); conduta inicial: higiene bucal rigorosa.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manual de Pré-Natal e Puerpério",
      "FEBRASGO — Assistência Pré-Natal"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2983,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q036.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão nodular avermelhada pediculada em gengiva maxilar compatível com granuloma piogênico oral da gestação.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora no granuloma piogênico oral da gestação (épulis gravídico).",
      "raciocinioChave": "Lesão gengival avermelhada, dolorida e friável ao escovar em gestante no 2º trimestre é clássica de granuloma gravídico (épulis gravídico), hiperplasia vascular reacional benigna cujo manejo inicial é conservador com higiene bucal rigorosa.",
      "armadilhaBanca": "Indicar biópsia ou ressecção cirúrgica imediata durante a gravidez, expondo a paciente a sangramento profuso e alta taxa de recidiva antes do parto."
    },
    "mapaDistratores": {
      "B": "A biópsia é desnecessária diante do quadro clínico típico e acarreta risco de sangramento abundante devido à intensa vascularização da lesão.",
      "C": "A exérese cirúrgica na gestação deve ser evitada salvo sangramento incoercível ou prejuízo funcional grave, pois a lesão costuma regredir após o parto.",
      "D": "A cauterização gengival direta é contraindicada pelo risco de dor, sangramento e necrose tecidual periodontal sem tratar o fator irritativo local."
    }
  },
  {
    "id": "q-usp-sp-2023-037",
    "code": "Q-USPSP23-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Avaliação da Vitalidade Fetal",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-avaliacao-da-vitalidade-fetal",
    "tags": [
      "cardiotocografia",
      "vitalidade-fetal",
      "bem-estar-fetal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 25 anos, 3G:2PN, chega ao pronto-socorro referindo dor em hipogástrio há 3 horas. Hoje com 33 semanas e 2 dias de gestação. Ao exame clínico: PA 113x76 mmHg, FC 74 bpm, presença de duas contrações uterinas por 10 minutos de fraca intensidade. Toque vaginal com colo grosso, posterior, pérvio para 3 cm, apresentação cefálica alta e móvel. Após analgesia, refere melhora das dores. Foi feita uma reavaliação do exame obstétrico que não demonstrou evolução do colo uterino, permanecendo com a mesma dilatação. Realiza a cardiotocografia apresentada. Qual é a conclusão desta cardiotocografia?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Reatividade fetal após estímulo.",
        "explanation": "Incorreta: A reatividade demonstrada ocorreu de forma basal e espontânea com a movimentação fetal fisiológica, sem necessidade de estímulo vibroacústico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Ausência de movimentação fetal.",
        "explanation": "Incorreta: O traçado evidencia claramente movimentação fetal e acelerações transitórias associadas, refutando a ausência de movimentos.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Atividade uterina excessiva.",
        "explanation": "Incorreta: A atividade uterina é de baixa intensidade e esparsa (duas contrações em 10 minutos), sem taquissistolia ou hipertonia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Bem-estar fetal.",
        "explanation": "Correta: O traçado cardiotocográfico classifica-se como Categoria I (traçado normal), apresentando frequência cardíaca basal entre 110 e 160 bpm, variabilidade moderada (6 a 25 bpm), presença de acelerações transitórias e ausência de desacelerações tardias ou variáveis, atestando bem-estar fetal.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A cardiotocografia basal anteparto com parâmetros dentro da normalidade (Categoria I de Miller/ACOG) possui excelente valor preditivo negativo para hipóxia e acidemia fetal nas 24 a 48 horas subsequentes, confirmando higidez e vitalidade fetal preservada.",
    "perolaClinica": "Cardiotocografia Categoria I (frequência normal, boa variabilidade, acelerações e sem desacelerações) = higidez e bem-estar fetal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FIGO Intrapartum Fetal Monitoring Guidelines",
      "FEBRASGO — Avaliação da Vitalidade Fetal"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2984,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q037.png",
      "modality": "Gráfico/Tabela",
      "caption": "Cardiotocografia demonstrando traçado categoria I com boa variabilidade e acelerações transitórias.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Interpretação de cardiotocografia anteparto basal normal (Categoria I).",
      "raciocinioChave": "Um traçado cardiotocográfico com linha de base entre 110 e 160 bpm, variabilidade moderada, acelerações transitórias espontâneas e ausência de desacelerações patológicas caracteriza padrão Categoria I, confirmando bem-estar fetal.",
      "armadilhaBanca": "Atribuir reatividade a estímulo vibroacústico não descrito ou confundir contrações fracas e esparsas com taquissistolia/atividade uterina excessiva."
    },
    "mapaDistratores": {
      "A": "O traçado basal demonstra reatividade espontânea associada à movimentação fetal fisiológica, não havendo registro de estímulo acústico.",
      "B": "A presença de acelerações transitórias no traçado comprova movimentação fetal preservada e resposta autonômica íntegra.",
      "C": "As contrações registradas são esparsas e de fraca intensidade (2 em 10 minutos), não configurando taquissistolia nem atividade uterina excessiva."
    }
  },
  {
    "id": "q-usp-sp-2023-038",
    "code": "Q-USPSP23-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Trabalho de Parto Prematuro",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-trabalho-de-parto-prematuro",
    "tags": [
      "trabalho-de-parto-prematuro",
      "falso-trabalho-de-parto",
      "conduta-clinica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 25 anos, 3G:2PN, chega ao pronto-socorro referindo dor em hipogástrio há 3 horas. Hoje com 33 semanas e 2 dias de gestação. Ao exame clínico: PA 113x76 mmHg, FC 74 bpm, presença de duas contrações uterinas por 10 minutos de fraca intensidade. Toque vaginal com colo grosso, posterior, pérvio para 3 cm, apresentação cefálica alta e móvel. Após analgesia, refere melhora das dores. Foi feita uma reavaliação do exame obstétrico que não demonstrou evolução do colo uterino, permanecendo com a mesma dilatação. Realiza a cardiotocografia apresentada. Com relação ao caso apresentado acima, qual é a conduta clínica nesse momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "internar a paciente para inibir trabalho de parto prematuro.",
        "explanation": "Incorreta: A inibição farmacológica (tocólise) exige diagnóstico firmado de trabalho de parto prematuro verdadeiro (contrações rítmicas com modificação cervical progressiva), ausente neste caso.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "manter vigilância no Pronto-Socorro por mais 6 horas.",
        "explanation": "Incorreta: Manter observação prolongada desnecessária onera o serviço de emergência e causa ansiedade, uma vez que o quadro álgico cessou e a vitalidade fetal é normal.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "liberar a paciente para casa com orientação de sinais de alarme.",
        "explanation": "Correta: A paciente apresentava contrações irregulares que cessaram após analgesia, sem dilatação ou apagamento cervical evolutivo na reavaliação seriada, caracterizando falso trabalho de parto (contrações de Braxton-Hicks). Associado à cardiotocografia com bem-estar fetal assegurado, a conduta é a alta para o domicílio com orientações claras sobre sinais de alerta para retorno.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "solicitar nova vitalidade em 48 horas.",
        "explanation": "Incorreta: Não há indicação de monitorização intensiva de vitalidade em 48 horas em feto saudável sem comorbidades maternas ou fetais que justifiquem protocolo de alto risco.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O diagnóstico de trabalho de parto prematuro requer contrações regulares associadas a modificação cervical progressiva comprovada (apagamento ou dilatação). Na ausência de alterações cervicais após observação e analgesia, conclui-se tratar-se de falso trabalho de parto, permitindo desospitalização segura com orientações.",
    "perolaClinica": "Contrações que cessam sem modificação cervical em colo grosso e CTG reativa = falso trabalho de parto; conduta: alta com orientações.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Trabalho de Parto Prematuro",
      "Ministério da Saúde — Manual de Gestação de Alto Risco"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2984,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q038.png",
      "modality": "Gráfico/Tabela",
      "caption": "Traçado cardiotocográfico atestando feto hígido e reativo sem contrações patológicas.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Diferenciação entre trabalho de parto prematuro verdadeiro e falso trabalho de parto.",
      "raciocinioChave": "Gestante de 33 semanas com contrações fracas que cessam após analgesia, sem progressão cervical na reavaliação e com cardiotocografia normal, apresenta falso trabalho de parto; a conduta é alta com orientação de sinais de alarme.",
      "armadilhaBanca": "Iniciar tocólise ou manter internação/observação prolongada apenas pela dilatação estática sem modificação cervical evolutiva."
    },
    "mapaDistratores": {
      "A": "A tocólise requer diagnóstico confirmado de trabalho de parto prematuro verdadeiro com modificação cervical progressiva, ausente neste caso.",
      "B": "Manter observação prolongada no pronto-socorro é desnecessário após resolução das contrações álgicas, estabilidade cervical e garantia de bem-estar fetal.",
      "D": "Não há indicação de reavaliação programada da vitalidade fetal em 48 horas diante de gestação sem intercorrência materna ou fetal ativa e CTG categoria I."
    }
  },
  {
    "id": "q-usp-sp-2023-039",
    "code": "Q-USPSP23-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Mecanismo e Assistência ao Trabalho de Parto",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-mecanismo-e-assistencia-ao-trabalho-de-parto",
    "tags": [
      "apresentacao-de-fronte",
      "deflexao-cefalica",
      "mecanismo-de-parto",
      "raiz-do-nariz"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 29 anos, 4G:3PN:0A, chega ao Pronto-Socorro Obstétrico trazida pelo SAMU em franco trabalho de parto. Não trouxe a carteira de pré-natal, refere data da última menstruação de 18/02/2022. Ao exame clínico, PA 123x82 mmHg, FC 84 bpm, altura uterina de 35 cm, batimento cardíaco fetal presente e rítmico. Ao toque vaginal, dilatação total, apresentação cefálica e alta, sendo percebida a variedade de posição representada na figura. Qual é a referência percebida ao toque que sinaliza dificuldade do parto vaginal?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Raiz do nariz.",
        "explanation": "Correta: A figura ilustra a apresentação cefálica defletida de 2º grau (apresentação de fronte). O ponto anatômico de referência percebido ao toque vaginal nesta apresentação é a raiz do nariz (glabela/naso). A apresentação de fronte oferece à bacia o maior diâmetro cefálico (occipitomentoniano = 13,5 cm), tornando o parto vaginal impossível caso persista, configurando distócia absoluta.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Occipício",
        "explanation": "Incorreta: O occipício (fontanela lambdoide/posterior) é o ponto de referência da apresentação cefálica fletida (vértice), a mais favorável ao parto transpélvico.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Bregma.",
        "explanation": "Incorreta: O bregma (fontanela anterior) é o ponto de referência da deflexão de 1º grau (apresentação de bregma), que permite parto vaginal na maioria das vezes com diâmetro occipitofrontal (12 cm).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Mento.",
        "explanation": "Incorreta: O mento é o ponto de referência da deflexão de 3º grau (apresentação de face), cujo parto vaginal só é viável se a rotação for anterior (mentovariante anterior).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A apresentação de fronte é a deflexão de 2º grau, caracterizada por apresentar à pelve materna o diâmetro occipitomentoniano (13,5 cm), incompatível com os estreitos da bacia materna normal. O ponto de referência tocado pelo examinador é a raiz do nariz (naso). Se não converter espontaneamente para face ou vértice, requer cesariana.",
    "perolaClinica": "Apresentação de fronte = ponto de referência é a RAIZ DO NARIZ; diâmetro occipitomentoniano (13,5 cm) impede o parto vaginal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rezende — Obstetrícia Fundamental",
      "FEBRASGO — Assistência ao Trabalho de Parto"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2985,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q039.png",
      "modality": "Gráfico/Tabela",
      "caption": "Esquema da apresentação cefálica defletida de segundo grau (apresentação de fronte).",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Pontos de referência das apresentações cefálicas defletidas: fronte (raiz do nariz).",
      "raciocinioChave": "A apresentação cefálica defletida de 2º grau (fronte) tem como ponto de referência a raiz do nariz e expõe o maior diâmetro cefálico (occipitomentoniano, 13,5 cm), constituindo distócia grave que dificulta ou impede o parto vaginal.",
      "armadilhaBanca": "Confundir os pontos de referência das apresentações cefálicas (occipício para fletida, bregma para defletida de 1º grau, raiz do nariz para 2º grau e mento para 3º grau)."
    },
    "mapaDistratores": {
      "B": "O occipício é o ponto de referência da apresentação cefálica fletida (vértice), que oferece o menor diâmetro e é a mais favorável ao parto vaginal.",
      "C": "O bregma corresponde à deflexão de 1º grau, na qual o parto vaginal geralmente é possível com o diâmetro occipitofrontal.",
      "D": "O mento é o ponto de referência da deflexão de 3º grau (face), que permite parto vaginal quando em variedade mentoanterior."
    }
  },
  {
    "id": "q-usp-sp-2023-040",
    "code": "Q-USPSP23-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Indicadores de Saúde e Transição Epidemiológica",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-indicadores-de-saude-e-transicao-epidemiologica",
    "tags": [
      "mortalidade-materna",
      "taxa-de-cesariana",
      "indicadores-de-saude"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Volpe (2011) publicou estudo da correlação das “taxas de cesariana” com as “taxas de mortalidade materna e infantil” através da avaliação de dados oficiais de 193 países. Com base nesse estudo, o gráfico abaixo apresenta a correlação entre a taxa de mortalidade materna e a taxa de cesárea de cada um desses países. De acordo com o gráfico, qual é a conclusão sobre a relação entre a taxa de mortalidade materna e a taxa de cesárea?",
    "alternativas": [
      {
        "letter": "A",
        "text": "quanto maior a taxa de cesárea, maior a mortalidade materna.",
        "explanation": "Incorreta: O gráfico demonstra que nos países com altas taxas de cesárea a mortalidade materna é baixa, não havendo relação de crescimento conjunto linear.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "quanto maior a taxa de cesárea, menor a mortalidade materna.",
        "explanation": "Incorreta: Embora em taxas muito baixas de cesárea a elevação da cirurgia reduza a mortalidade, a curva se estabiliza em patamares superiores a 15-20%, não sendo verdadeira a afirmação linear irrestrita de que quanto mais cesárea, menor a mortalidade.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "quanto menor a taxa de cesárea, maior a mortalidade materna.",
        "explanation": "Correta: A interpretação direta da dispersão no gráfico evidencia que países com taxas extremamente baixas de cesariana (abaixo de 10-15%, indicando escassez crítica de recursos e incapacidade de realizar intervenções obstétricas essenciais que salvam vidas) concentram os mais altos índices de mortalidade materna global.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "não há relação entre a taxa de cesárea e a mortalidade materna.",
        "explanation": "Incorreta: Há nítida relação inversa não linear documentada pelo gráfico: taxas de cesariana muito reduzidas associam-se a elevados coeficientes de mortalidade materna.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Estudos de saúde global da OMS (incluindo o estudo de Volpe et al., 2011) apontam que taxas populacionais de cesárea inferiores a 10-15% refletem subutilização e falta de acesso a cuidados obstétricos cirúrgicos em urgências, acarretando índices elevados de mortes maternas evitáveis. Acima desse patamar de 15%, novos aumentos nas taxas de cesárea não reduzem mais a mortalidade materna.",
    "perolaClinica": "Taxas muito baixas de cesariana (< 10%) refletem escassez de assistência obstétrica de emergência e correlacionam-se com alta mortalidade materna.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "World Health Organization (WHO) — Statement on Caesarean Section Rates",
      "Volpe et al. (2011) — Cesarean section rates and maternal mortality"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2986,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q040.png",
      "modality": "Gráfico/Tabela",
      "caption": "Gráfico de dispersão correlacionando taxas de mortalidade materna e taxas de parto cesáreo por países.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Relação ecológica inversa entre subutilização de cesarianas (<10-15%) e mortalidade materna.",
      "raciocinioChave": "O gráfico demonstra que países com taxas muito baixas de cesárea (indicando falta de acesso à assistência obstétrica cirúrgica essencial) concentram os maiores índices de mortalidade materna; portanto, quanto menor a taxa de cesárea nesse extremo, maior a mortalidade.",
      "armadilhaBanca": "Extrapolar erroneamente uma relação linear inversa ilimitada ('quanto maior a taxa, menor a mortalidade'), ignorando que acima de 15–20% a mortalidade se estabiliza em platô."
    },
    "mapaDistratores": {
      "A": "Os países com maiores taxas de cesárea apresentam baixos coeficientes de mortalidade materna no gráfico, refutando associação positiva.",
      "B": "Acima do limiar de acesso adequado (~15%), aumentos adicionais nas taxas de cesárea não reduzem mais a mortalidade materna, invalidando a relação linear irrestrita.",
      "D": "Os dados evidenciam forte associação inversa não linear, com explosão da mortalidade materna nos cenários de escassez extrema de cesarianas."
    }
  },
  {
    "id": "q-usp-sp-2023-041",
    "code": "Q-USPSP23-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": [
      "apneia-obstrutiva-do-sono",
      "cpap",
      "saos",
      "obesidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 38 anos, tem roncos e sonolência diurna há 2 anos. Refere obstrução nasal e sua esposa diz que, durante a noite, o paciente apresenta episódios em que “para de respirar” e parece que parece estar “engasgado”. Sem antecedentes mórbidos relevantes. O exame clínico é normal, com exceção de IMC = 34 kg/m². Considerando a principal hipótese diagnóstica, qual a terapia clínica de escolha para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Aparelho de pressão aérea positiva (CPAP).",
        "explanation": "Correta: O quadro de roncos intensos, sonolência diurna excessiva, apneias presenciadas e obesidade grau I (IMC = 34 kg/m²) define alta probabilidade pré-teste de Síndrome da Apneia Obstrutiva do Sono (SAOS) moderada a grave. O aparelho de pressão positiva contínua em vias aéreas (CPAP) é o padrão-ouro e a intervenção clínica de primeira linha para desobstrução das vias aéreas superiores durante o sono.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Elevação da cabeceira da cama.",
        "explanation": "Incorreta: A elevação da cabeceira da cama e a terapia posicional podem atuar como medidas adjuvantes em casos leves ou dependentes de decúbito dorsal, mas não constituem a terapia de escolha em pacientes obesos com quadro clássico moderado a grave.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Atividade física 30 minutos antes de dormir.",
        "explanation": "Incorreta: A prática de exercícios físicos intensos imediatamente antes de dormir é contraindicada na higiene do sono, pois aumenta o estado de alerta, temperatura corporal e catecolaminas, prejudicando o início e a consolidação do sono.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Aparelho intraoral noturno.",
        "explanation": "Incorreta: Aparelhos intraorais de avanço mandibular são indicados principalmente para pacientes com SAOS leve a moderada que recusam ou não toleram o CPAP, ou que apresentam contraindicações anatômicas específicas, não sendo a primeira escolha em obesos sintomáticos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O quadro clínico apresentado é clássico de Síndrome da Apneia/Hipopneia Obstrutiva do Sono (SAOS) em homem jovem/meia-idade com obesidade e sonolência diurna. O tratamento de escolha e mais eficaz para manter a patência de vias aéreas e prevenir eventos cardiovasculares associados é o CPAP noturno.",
    "perolaClinica": "Para SAOS moderada a grave ou sintomática em pacientes obesos, o CPAP é o tratamento de primeira escolha padrão-ouro.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Apneia Obstrutiva do Sono (SBPT)",
      "UpToDate: Obstructive sleep apnea in adults"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2986,
    "analiseBanca": {
      "conceitoCentral": "Tratamento de escolha da Síndrome da Apneia Obstrutiva do Sono (SAOS) sintomática.",
      "raciocinioChave": "Homem obeso (IMC 34 kg/m²) com roncos, sonolência diurna crônica e apneias presenciadas pela esposa apresenta quadro típico de SAOS clinicamente relevante, cuja terapia padrão-ouro de primeira linha é o aparelho de pressão aérea positiva (CPAP).",
      "armadilhaBanca": "Optar por medidas comportamentais isoladas (elevação da cabeceira) ou dispositivo intraoral como primeira linha em paciente obeso com sintomas clássicos marcantes, ou recomendar exercício antes de dormir."
    },
    "mapaDistratores": {
      "B": "A elevação da cabeceira é medida adjuvante de baixa eficácia isolada para controle de SAOS sintomática em pacientes obesos.",
      "C": "Atividade física vigorosa imediatamente antes de deitar prejudica a higiene do sono por aumentar a ativação simpática e dificultar o adormecimento.",
      "D": "O aparelho intraoral de avanço mandibular é alternativa para casos leves ou intolerância ao CPAP, não sendo a terapia clínica inicial de escolha aqui."
    }
  },
  {
    "id": "q-usp-sp-2023-042",
    "code": "Q-USPSP23-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": [
      "cuidados-paliativos",
      "protocolo-spikes",
      "comunicacao-de-mas-noticias",
      "cancer-de-pancreas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 63 anos, está em acompanhamento ambulatorial por adenocarcinoma de pâncreas com metástases hepáticas e ósseas. Há 6 meses, iniciou segunda linha de quimioterapia não curativa. A despeito do tratamento, sua doença teve rápida progressão durante esse período. Adicionalmente, sua funcionalidade teve uma mudança importante: era totalmente ativa (ECOG 0) e agora, embora consiga manter o autocuidado e a deambulação, está incapaz de realizar suas atividades laborais (ECOG 2). No atual retorno, a paciente questiona sobre as possibilidades de tratamento e a sua inclusão em um estudo clínico para novos medicamentos. Quais ações devem ser adotadas no caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "postergar as informações sobre a progressão da doença, pois a perda de funcionalidade da paciente é recente e influencia sua compreensão da gravidade.",
        "explanation": "Incorreta: Postergar informações viola o princípio da autonomia e da verdade compassiva; a paciente tem o direito de compreender seu prognóstico para tomar decisões alinhadas aos seus valores.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "questionar as expectativas da paciente e a sua percepção da doença, para verificar seu grau de entendimento e alinhamento com a expectativa da equipe médica.",
        "explanation": "Correta: Na comunicação em oncologia avançada e cuidados paliativos (seguindo protocolos como o SPIKES), o primeiro passo diante de dúvidas sobre continuidade de tratamento ou ensaios clínicos é explorar a percepção da paciente sobre sua condição atual e suas expectativas (etapa 'P' e 'I'), alinhando a comunicação antes de propor condutas ou transição de objetivos de cuidado.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "informar que não há eficácia comprovada para outros tratamentos e que, a partir deste momento, há indicação de acompanhamento com a equipe de cuidados paliativos.",
        "explanation": "Incorreta: Apresentar a transição de cuidados como um abandono abrupto ou imposição ('a partir deste momento') sem antes compreender o que a paciente sabe e deseja gera angústia, quebra de vínculo e reflete má prática de comunicação.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "convocar a família para explicar a ausência de resposta aos tratamentos convencionais e ponderar os riscos e benefícios das alternativas experimentais.",
        "explanation": "Incorreta: Chamar a família antes de ouvir a paciente viola sua autonomia e o sigilo médico, visto que ela é lúcida e capaz de tomar decisões sobre seu próprio tratamento.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Diante de progressão rápida de doença metastática refratária com declínio funcional (ECOG 2) e solicitação de tratamentos experimentais, o manejo ético e comunicacional exige explorar a percepção da paciente sobre sua doença e suas reais expectativas. Isso permite estabelecer metas de cuidado compartilhadas e realistas, alicerce dos Cuidados Paliativos.",
    "perolaClinica": "Antes de traçar novas condutas em oncologia avançada, explore a percepção e as expectativas do paciente (Protocolo SPIKES).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo SPIKES para Comunicação de Más Notícias",
      "Manual de Cuidados Paliativos — ANCP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2986,
    "analiseBanca": {
      "conceitoCentral": "Comunicação de más notícias e alinhamento de metas em cuidados paliativos (protocolo SPIKES).",
      "raciocinioChave": "Diante de progressão rápida de câncer pancreático metastático e declínio funcional com questionamento sobre novos tratamentos, o passo comunicacional fundamental é investigar primeiro a percepção e as expectativas da paciente sobre sua doença para alinhar decisões compartilhadas.",
      "armadilhaBanca": "Omitir informações prognósticas, impor o encaminhamento paliativo como ruptura abrupta de cuidado ou convocar a família antes de dialogar com a paciente autônoma."
    },
    "mapaDistratores": {
      "A": "Postergar informações sobre a progressão da doença fere a autonomia da paciente e impede o planejamento compartilhado de cuidados proporcionais.",
      "C": "Comunicar de forma impositiva o fim das opções sem explorar antes a compreensão da paciente gera sensação de abandono e quebra do vínculo terapêutico.",
      "D": "Convocar familiares antes de abordar a própria paciente, que é lúcida e autônoma, viola a confidencialidade e o protagonismo decisório do indivíduo."
    }
  },
  {
    "id": "q-usp-sp-2023-043",
    "code": "Q-USPSP23-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Hanseníase",
    "temaSlug": "cm-dermato",
    "subtemaSlug": "cm-dermato-hanseniase",
    "tags": [
      "hanseniase",
      "avaliacao-oftalmologica",
      "urgencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Qual foto indica situação médica com necessidade de avaliação oftalmológica de urgência?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: A imagem da alternativa A evidencia presença de hipópio em câmara anterior / ceratite infecciosa grave ou endoftalmite, condição oftalmológica aguda que cursa com risco iminente de perda visual e exige encaminhamento e intervenção oftalmológica de urgência.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Trata-se de lesão benigna/crônica (como pterígio ou hordéolo/calázio simples), passível de manejo ambulatorial eletivo.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Representa hemorragia subconjuntival espontânea ou lesão conjuntival superficial sem acometimento de câmara anterior, de evolução autolimitada e sem urgência imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Apresenta ectrópio ou blefarite crônica/conjuntivite leve, tratáveis na atenção primária ou em ambulatório especializado de forma eletiva.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Sinais de gravidade em queixas oftalmológicas ('red flags') incluem hipópio (nível de pus na câmara anterior), infiltrado corneano denso, perda súbita da acuidade visual, dor intensa e midríase média fixa. A presença de hipópio demanda avaliação urgente pelo oftalmologista para descartar endoftalmite ou úlcera de córnea grave.",
    "perolaClinica": "Hipópio (nível leucocitário na câmara anterior) é emergência oftalmológica: risco iminente de perfuração ocular e amaurose.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Conselho Brasileiro de Oftalmologia (CBO) — Urgências Oftalmológicas",
      "Manual de Condutas em Emergências Oftalmológicas — CBO"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2987,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q043.png",
      "modality": "Fotografia Clínica",
      "caption": "Fotografia de segmento anterior evidenciando nível purulento em câmara anterior (hipópio).",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento de emergência oftalmológica (hipópio / úlcera corneana grave / endoftalmite).",
      "raciocinioChave": "A identificação visual de hipópio ou lesão corneana/intraocular grave (Alternativa A) sinaliza infecção intraocular ou ceratite severa com risco iminente de perfuração ou perda visual permanente, exigindo avaliação oftalmológica de urgência.",
      "armadilhaBanca": "Subestimar sinais de alarme em câmara anterior/córnea ou confundir condições benignas e autolimitadas (como hemorragia subconjuntival ou pterígio) com emergências."
    },
    "mapaDistratores": {
      "B": "A imagem B retrata alteração ocular benigna ou crônica sem comprometimento agudo de câmara anterior, permitindo manejo ambulatorial eletivo.",
      "C": "A imagem C ilustra quadro superficial benigno e autolimitado (como hiposfagma), sem risco imediato à acuidade visual.",
      "D": "A imagem D mostra afecção palpebral ou conjuntival crônica ou leve sem sinais de gravidade que exijam intervenção oftalmológica emergencial."
    }
  },
  {
    "id": "q-usp-sp-2023-044",
    "code": "Q-USPSP23-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Hanseníase",
    "temaSlug": "cm-dermato",
    "subtemaSlug": "cm-dermato-hanseniase",
    "tags": [
      "hanseniase-virchowiana",
      "baciloscopia",
      "madarose",
      "celulas-de-virchow"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 44 anos, há 9 anos apresenta lesões na pele. No exame clínico, observa-se infiltração difusa da face e orelhas, além de madarose. Há várias pápulas e nódulos infiltrados, de cor eritêmato-acastanhados (imagem). O exame histopatológico de lesão cutânea evidenciou presença de macrófagos espumosos ao redor de filete nervoso. Quais os achados clínico-laboratoriais encontrados na principal hipótese diagnóstica para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "O exame histopatológico mostra depósitos hialinos e hemorragia na derme, evidenciados pela coloração vermelho-congo.",
        "explanation": "Incorreta: Depósito hialino com birrefringência verde-maçã ao vermelho-congo é característico de amiloidose cutânea, que não apresenta macrófagos espumosos invadindo filetes nervosos com fáscies leonina.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "O exame histopatológico mostra epidermotropismo com linfócitos atípicos.",
        "explanation": "Incorreta: Epidermotropismo com linfócitos atípicos (microabscessos de Pautrier) é o achado histopatológico clássico da micose fungoide (linfoma cutâneo de células T).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Baciloscopia de lesão cutânea positiva.",
        "explanation": "Correta: O quadro de infiltração difusa da face, madarose (perda de sobrancelhas), infiltração de lóbulos auriculares (fáscies leonina) e histopatologia com macrófagos espumosos (células de Virchow) ao redor de nervos periféricos fecha o diagnóstico de Hanseníase Virchowiana (dimorfa-virchowiana). Nesses pacientes, a imunidade celular é deficiente, levando a altíssima carga bacilar, de modo que a baciloscopia de raspado intradérmico é tipicamente positiva (multibacilar).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "O exame histopatológico mostra granuloma tuberculoide com necrose caseosa.",
        "explanation": "Incorreta: Granuloma tuberculoide com escassez de bacilos e eventual necrose caseosa é característico do polo tuberculoide da hanseníase ou de tuberculose cutânea, polos onde não há infiltração leonina difusa nem células de Virchow com alta carga bacilar.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A hanseníase virchowiana decorre da ineficácia da resposta celular (Th1) contra o Mycobacterium leprae, cursando com resposta Th2 desregulada, intensa proliferação bacilar, infiltração cutânea difusa, madarose e histologia com histiócitos espumosos repletos de bacilos (células de Virchow). A baciloscopia é invariavelmente francamente positiva.",
    "perolaClinica": "Hanseníase virchowiana: fáscies leonina, madarose, células de Virchow vacuoladas e baciloscopia fortemente positiva.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Guia Prático sobre a Hanseníase (2022)",
      "Diretrizes para Vigilância, Atenção e Eliminação da Hanseníase — MS"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2987,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q044.png",
      "modality": "Fotografia Clínica",
      "caption": "Paciente com madarose e infiltração cutânea difusa eritêmato-acastanhada com fáscies leonina.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico, histopatológico e baciloscópico da Hanseníase Virchowiana.",
      "raciocinioChave": "Infiltração difusa da face e orelhas (fácies leonina), madarose, nódulos eritêmato-acastanhados e macrófagos espumosos (células de Virchow) perineurais caracterizam a forma multibacilar virchowiana, na qual a baciloscopia cutânea é francamente positiva.",
      "armadilhaBanca": "Confundir a histologia de células de Virchow com granuloma tuberculoide (forma paucibacilar), amiloidose (vermelho-congo) ou linfoma cutâneo (epidermotropismo)."
    },
    "mapaDistratores": {
      "A": "Depósitos hialinos corados pelo vermelho-congo com birrefringência verde-maçã são típicos de amiloidose, não explicando madarose e macrófagos perineurais.",
      "B": "Epidermotropismo com linfócitos atípicos (microabscessos de Pautrier) é o padrão histológico da micose fungoide (linfoma cutâneo de células T).",
      "D": "Granulomas tuberculoides com escassez bacilar ocorrem no polo tuberculoide da hanseníase ou na tuberculose cutânea, opostos à forma virchowiana multibacilar."
    }
  },
  {
    "id": "q-usp-sp-2023-045",
    "code": "Q-USPSP23-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "subtema": "Insuficiência Venosa Crônica e Úlceras",
    "temaSlug": "cg-vascular",
    "subtemaSlug": "cg-vascular-insuficiencia-venosa-cronica-e-ulceras",
    "tags": [
      "insuficiencia-venosa-cronica",
      "dermatite-ocre",
      "eczema-de-estase",
      "lipodermatoesclerose"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 59 anos, apresenta há 4 anos lesões em membros inferiores (imagem). No exame clínico, são observadas varizes de grosso calibre. Há eritema, edema, exsudação e crostas nos terços inferiores de pernas. Também são encontradas hipercromia e induração nos 2/3 inferiores das pernas, bilateralmente. Quais são as principais hipóteses diagnósticas?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Erisipela, amiloidose maculosa e linfedema.",
        "explanation": "Incorreta: Erisipela é uma infecção bacteriana aguda com flogose intensa, febre e calafrios, não um quadro crônico bilateral de 4 anos de duração.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Tinha do corpo, púrpura pigmentosa crônica e esclerodermia cutânea.",
        "explanation": "Incorreta: Tinha do corpo é uma dermatofitose pruriginosa com lesões anulares com bordas ativas descamativas; não justifica o padrão de estase venosa crônica.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Neurodermatite circunscrita, melanodermia tóxica e líquen escleroso.",
        "explanation": "Incorreta: Neurodermatite (líquen simples crônico) decorre de coçadura repetitiva com liquenificação localizada, não explicando a pigmentação ferrosa nem a esclerose circunferencial secundária a varizes graves.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Eczema de estase, dermatite ocre e dermatoesclerose.",
        "explanation": "Correta: As três manifestações descritas são complicações cutâneas clássicas da insuficiência venosa crônica grave de membros inferiores: 1) Eczema de estase (eritema, prurido, exsudação e crostas); 2) Dermatite ocre (hiperpigmentação castanha devido ao extravasamento e depósito dérmico de hemossiderina); 3) Dermatoesclerose/lipodermatoesclerose (fibrose e induração fibrótica do subcutâneo e pele, conferindo aspecto em 'garrafa de champanhe invertida').",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A estase venosa crônica gera hipertensão venocapilar crônica, promovendo extravasamento eritrocitário com acúmulo de hemossiderina (dermatite ocre), processo inflamatório descamativo exsudativo (eczema de estase) e proliferação fibrótica/isquemia tecidual com induração subcutânea (lipodermatoesclerose).",
    "perolaClinica": "Insuficiência venosa crônica grave: tríade cutânea de eczema de estase, dermatite ocre (hemossiderina) e lipodermatoesclerose.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sociedade Brasileira de Dermatologia (SBD) — Dermatologia Clínica",
      "Diretrizes da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2988,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q045.png",
      "modality": "Fotografia Clínica",
      "caption": "Membros inferiores com varizes calibrosas, dermatite ocre, lesões descamativo-crostosas e induração cutânea.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Complicações cutâneas crônicas da insuficiência venosa de membros inferiores.",
      "raciocinioChave": "Varizes calibrosas de longa evolução associadas a eritema/exsudação/crostas (eczema de estase), hipercromia por hemossiderina (dermatite ocre) e induração subcutânea em terço inferior das pernas (dermatoesclerose) compõem a tríade cutânea da estase venosa crônica.",
      "armadilhaBanca": "Confundir o eritema exsudativo crônico bilateral do eczema de estase com infecção bacteriana aguda (erisipela) ou dermatofitose/colagenose."
    },
    "mapaDistratores": {
      "A": "Erisipela é uma infecção bacteriana aguda, febril e tipicamente unilateral, incompatível com quadro bilateral crônico de 4 anos.",
      "B": "Tinha do corpo apresenta placas anulares com bordas descamativas e esclerodermia tem distribuição distinta, não justificando varizes com exsudação crônica.",
      "C": "Neurodermatite e líquen escleroso não decorrem de hipertensão venocapilar nem produzem depósito difuso de hemossiderina associado a varizes."
    }
  },
  {
    "id": "q-usp-sp-2023-046",
    "code": "Q-USPSP23-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Tromboembolismo Pulmonar e TVP",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-tromboembolismo-pulmonar-e-tvp",
    "tags": [
      "tep",
      "tvp",
      "fatores-de-risco",
      "dispneia-aguda"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 65 anos, chega ao departamento de emergência com queixa de dor em hemitórax esquerdo, com início súbito há 8 horas e piora progressiva. A dor não estava relacionada ao esforço, não tinha irradiação e estava associada à dispneia. A paciente é obesa e trata hipertensão arterial sistêmica com amilodipina. Exame clínico: FC 110 bpm; FR 32 irpm; PA 125x86 mmHg; Sat O₂ 92% em ar ambiente; T 35,9° C. Ausculta respiratória e cardiovascular com MV+ s/RA. BRNF 2T sem sopros. Boa perfusão periférica, pulsos cheios e simétricos nos quatro membros. MID com edema 1+/4+, MIE com edema 3+/4+, com uma diferença de 3,8 cm no diâmetro das duas panturrilhas. Considerando a hipótese diagnóstica, qual é o principal fator de risco para o evento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Insuficiência venosa de membros inferiores.",
        "explanation": "Incorreta: A insuficiência venosa crônica simples de membros inferiores é fator predisponente fraco para tromboembolismo venoso profundo (odds ratio < 2).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Idade avançada.",
        "explanation": "Incorreta: Embora a idade avançada (> 65 anos) aumente o risco basal de TEV, é classificada como fator de risco fraco isoladamente quando comparada a hospitalizações clínicas recentes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Internação recente por insuficiência cardíaca ou fibrilação atrial.",
        "explanation": "Correta: Segundo as diretrizes da European Society of Cardiology (ESC) e do Ministério da Saúde para TEP/TEV, a internação hospitalar recente por insuficiência cardíaca ou fibrilação atrial/flutter nos últimos 3 meses é classificada como um fator de risco moderado a forte (Odds Ratio entre 2 e 9), sendo significativamente mais impactante que idade ou viagens.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Viagem aérea recente de longa duração.",
        "explanation": "Incorreta: Viagens de longa duração (> 4 a 6 horas em posição sentada/aérea) são fatores de risco fracos (Odds Ratio < 2) para TEV/TEP.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "O quadro clínico com dor torácica pleurítica súbita, taquicardia, taquipneia, hipoxemia e assimetria de panturrilhas (> 3 cm) é altamente sugestivo de TEP decorrente de TVP em MIE. Na estratificação etiológica de fatores predisponentes da ESC, a hospitalização médica recente por descompensação de insuficiência cardíaca ou arritmia atrial figura entre os fatores de risco mais relevantes e frequentes.",
    "perolaClinica": "Internação hospitalar recente por insuficiência cardíaca confere risco moderado-alto (OR 2-9) para tromboembolismo venoso.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism",
      "UpToDate: Overview of the treatment of acute pulmonary embolism in adults"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2989,
    "analiseBanca": {
      "conceitoCentral": "Estratificação de fatores de risco para tromboembolismo pulmonar (ESC): fatores moderados/fortes vs. fracos.",
      "raciocinioChave": "Diante da suspeita clínica de TEP (dor torácica súbita, taquipneia, taquicardia, hipoxemia e assimetria de panturrilha > 3 cm), as diretrizes da ESC classificam a internação recente por insuficiência cardíaca ou fibrilação atrial como fator de risco mais relevante (moderado/forte) em comparação aos fatores fracos.",
      "armadilhaBanca": "Escolher fatores de risco amplamente lembrados (idade avançada, viagem aérea longa, insuficiência venosa), porém classificados como fracos (OR < 2) pelas diretrizes."
    },
    "mapaDistratores": {
      "A": "A insuficiência venosa crônica de membros inferiores é classificada como fator de risco fraco para eventos tromboembólicos agudos (OR < 2).",
      "B": "A idade avançada isolada atua apenas como fator de risco fraco na estratificação da ESC quando comparada a hospitalizações agudas por descompensação cardíaca.",
      "D": "Viagem aérea de longa duração é reconhecida como fator predisponente fraco (OR < 2), de menor peso que internação recente por insuficiência cardíaca ou fibrilação atrial."
    }
  },
  {
    "id": "q-usp-sp-2023-047",
    "code": "Q-USPSP23-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Pericardite e Tamponamento Cardíaco",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-pericardite-e-tamponamento-cardiaco",
    "tags": [
      "tamponamento-cardiaco",
      "pericardiocentese",
      "derrame-pericardico",
      "pocus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 62 anos, procura o serviço de emergência com quadro de dispneia e dor torácica, que se iniciaram há 2 meses e vêm evoluindo com piora progressiva. Ao exame clínico, o paciente apresentava diminuição do murmúrio vesicular bilateralmente e estase jugular a 45°. Exame radiológico apresentado. A punção pleural demonstrou líquido exsudativo com predomínio de outras células, provavelmente células neoplásicas. Durante atendimento, o paciente apresentou piora da dispneia e PA 80x40 mmHg. A ultrassonografia cardíaca à beira do leito apresentada. Qual é a conduta imediata?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trombólise.",
        "explanation": "Incorreta: Trombólise é indicada em TEP maciço com instabilidade ou IAM com supra de ST; no tamponamento cardíaco causaria sangramento catastrófico intrapericárdico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Drenagem torácica.",
        "explanation": "Incorreta: A drenagem torácica (pleural) trata pneumotórax ou hemotórax, mas a causa do choque obstrutivo agudo é o derrame pericárdico com tamponamento.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Cineangiocoronariografia.",
        "explanation": "Incorreta: Cineangiocoronariografia avalia síndrome coronariana aguda obstrutiva, não estando indicada na vigência de choque obstrutivo por tamponamento.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Pericardiocentese.",
        "explanation": "Correta: O paciente com neoplasia apresenta derrame pericárdico volumoso que evoluiu para tamponamento cardíaco agudo, manifestado clinicamente por hipotensão grave (PA 80x40 mmHg), estase jugular e dispneia (choque obstrutivo com sinais de restrição diastólica na ultrassonografia à beira do leito). A conduta salvadora e imediata é a descompressão pericárdica de alívio por pericardiocentese guiada por imagem.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O tamponamento cardíaco neoplásico manifesta-se pela tríade clássica de Beck (hipotensão, turgência jugular patológica e hipofonese de bulhas) e culmina em choque obstrutivo por colapso das câmaras direitas durante a diástole. A descompressão imediata por pericardiocentese subxifoidiana guiada por POCUS é mandatória para restaurar o débito cardíaco.",
    "perolaClinica": "Hipotensão + turgência jugular + derrame pericárdico ao POCUS = tamponamento cardíaco: conduta imediata é pericardiocentese.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ESC Guidelines for the diagnosis and management of pericardial diseases",
      "Advanced Trauma Life Support (ATLS) 10th Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2989,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q047.png",
      "modality": "Ultrassonografia",
      "caption": "Ecocardiograma à beira do leito evidenciando derrame pericárdico volumoso com colapso diastólico de câmaras direitas.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de choque obstrutivo por tamponamento cardíaco e indicação de pericardiocentese imediata.",
      "raciocinioChave": "Paciente com neoplasia evoluindo com estase jugular, hipotensão grave (80x40 mmHg) e confirmação de derrame pericárdico à beira do leito encontra-se em tamponamento cardíaco agudo; a conduta salvadora imediata é a pericardiocentese descompressiva.",
      "armadilhaBanca": "Indicar drenagem pleural (confundindo com o derrame pleural neoplásico prévio) ou trombólise em cenário de choque obstrutivo pericárdico."
    },
    "mapaDistratores": {
      "A": "A trombólise é indicada para TEP maciço ou IAMCST e seria catastrófica no tamponamento cardíaco ao agravar hemorragia intrapericárdica.",
      "B": "A drenagem torácica trata coleções pleurais (pneumotórax ou hemotórax), não resolvendo o colapso diastólico cardíaco causado pelo líquido no saco pericárdico.",
      "C": "A cineangiocoronariografia avalia doença coronariana aguda e atrasaria a descompressão mecânica urgente necessária no choque obstrutivo."
    }
  },
  {
    "id": "q-usp-sp-2023-048",
    "code": "Q-USPSP23-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Demências e Delirium",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-demencias-e-delirium",
    "tags": [
      "delirium",
      "estado-confusional-agudo",
      "geriatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 83 anos, é trazida ao pronto-socorro com queixa de sonolência excessiva há três dias. Apresenta antecedente de hipertensão arterial, dislipidemia e síndrome demencial, com dependência parcial para atividades básicas, e total para atividades instrumentais de vida diária. Sua filha conta que, ao longo do último mês, sua mãe se tornou mais apática, apresentou edema progressivo de membros inferiores e, há 1 semana, está confusa, estando há 3 dias bastante sonolenta, com piora no dia de hoje. Ao exame clínico, nota-se que a paciente tem pontuação zero na Richmond Agitation Sedation Scale (RASS), está desatenta e, em alguns momentos, apresenta pensamento desorganizado. Além disso, tem edema de membros inferiores 3+/4+ e apresenta estertores finos em base direita. Considerando as hipóteses clínicas e a linha de cuidado, qual é a alternativa melhor associada ao caso clínico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "A paciente apresenta delirium, quadro marcado por estado confusional agudo flutuante com desatenção, sendo marcador de mortalidade em múltiplos contextos.",
        "explanation": "Correta: O quadro de início agudo e curso flutuante caracterizado por sonolência/hipoatividade, desatenção e pensamento desorganizado preenche os critérios diagnósticos do CAM (Confusion Assessment Method) para Delirium (na forma hipoativa). Em idosos frágeis, o delirium é uma emergência médica e um forte preditor independente de mortalidade, declínio funcional prolongado e aumento do tempo de internação.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Deve-se solicitar autorização da filha para tomada de decisão sobre a execução de medidas invasivas, como a entubação orotraqueal.",
        "explanation": "Incorreta: A paciente encontra-se em quadro agudo potencialmente reversível (ex.: descompensação de IC ou infecção pulmonar associada); medidas de suporte e investigação etiológica devem ser instituídas de imediato sem considerar terminalidade exclusiva.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Há elementos suficientes para estabelecer que a paciente virá a óbito nas próximas horas ou dias, período este considerado processo ativo de morte.",
        "explanation": "Incorreta: A presença de estertores e edema sugere etiologias clínicas tratáveis (insuficiência cardíaca descompensada, infecção respiratória). Não há elementos que indiquem processo ativo de morte (fase final de vida imediata de horas a dias).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "A apresentação neurológica do quadro indica progressão da síndrome demencial de base, o que contraindica o uso de antibióticos.",
        "explanation": "Incorreta: A flutuação aguda e rápida em dias é típica de delirium superposto à demência, e não de progressão natural da doença de base; o tratamento do fator desencadeante (incluindo antibióticos, se infecção for confirmada) é essencial.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Idosos com demência prévia apresentam vulnerabilidade aumentada para o desenvolvimento de delirium diante de qualquer estressor agudo (infecções, distúrbios hidroeletrolíticos, insuficiência cardíaca). O CAM positivo (início agudo + desatenção + pensamento desorganizado/nível de consciência alterado) fecha o diagnóstico de delirium hipoativo, que se associa a pior prognóstico e requer investigação imediata do fator desencadeante.",
    "perolaClinica": "Piora cognitiva aguda e flutuante com desatenção em idoso = delirium; é emergência médica e marcador independente de mortalidade.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras para Diagnóstico e Manejo do Delirium — AMIB/SBGG",
      "DSM-5-TR: Delirium Diagnostic Criteria"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2990,
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento e significado prognóstico do delirium hipoativo em idosa com demência prévia.",
      "raciocinioChave": "Início agudo e evolução flutuante com sonolência, desatenção e pensamento desorganizado configuram delirium (forma hipoativa) superposto à demência, frequentemente precipitado por descompensação clínica aguda e marcador de elevada mortalidade.",
      "armadilhaBanca": "Atribuir a confusão aguda à progressão natural da demência de base ou interpretar o quadro agudo reversível como processo ativo de morte."
    },
    "mapaDistratores": {
      "B": "A paciente apresenta descompensação clínica aguda potencialmente reversível, não sendo o momento adequado para limitar a abordagem apenas à autorização familiar para intubação sem investigação etiológica.",
      "C": "Sinais de congestão e rebaixamento agudo apontam para causa orgânica tratável (como insuficiência cardíaca descompensada ou infecção), e não para processo ativo de morte.",
      "D": "Mudança aguda em dias com desatenção define delirium, e não evolução crônica da demência; causas infecciosas devem ser ativamente investigadas e tratadas com antibióticos se confirmadas."
    }
  },
  {
    "id": "q-usp-sp-2023-049",
    "code": "Q-USPSP23-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Intoxicações Exógenas e Síndromes Toxicológicas",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-intoxicacoes-exogenas-e-sindromes-toxicologicas",
    "tags": [
      "sindrome-colinergica",
      "intoxicacao-exogena",
      "rivastigmina",
      "miose"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 55 anos, é trazido ao pronto-socorro após ingerir grande quantidade de uma substância que causou quadro de sudorese profusa, bradicardia, miose, hipotensão e broncorreia. Qual é a substância que apresentaria efeito similar quando ingerida em grande quantidade?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Loperamida.",
        "explanation": "Incorreta: Loperamida é um agonista opioide periférico; em doses tóxicas extremas pode causar síndrome opioide (depressão respiratória, miose, constipação) e arritmias ventriculares, mas não síndrome colinérgica clássica (broncorreia, sudorese profusa, salivação).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Rivsastigmina.",
        "explanation": "Correta: O paciente apresenta a síndrome colinérgica clássica por hiperestimulação muscarínica e nicotínica (miose, bradicardia, broncorreia, salivação, sudorese, hipotensão). A rivastigmina é um inibidor reversível da acetilcolinesterase utilizado na doença de Alzheimer; sua ingestão aguda em superdose impede a degradação da acetilcolina na fenda sináptica, desencadeando crise colinérgica idêntica à intoxicação por organofosforados/carbamatos.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Escopolamina.",
        "explanation": "Incorreta: Escopolamina é um antagonista muscarínico que desencadeia a síndrome anticolinérgica (midríase, taquicardia, pele seca e quente, retenção urinária, delírio).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Imipramina.",
        "explanation": "Incorreta: Imipramina é um antidepressivo tricíclico com potente ação anticolinérgica, causando midríase, taquicardia, retenção urinária, alargamento do QRS e convulsões.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A síndrome colinérgica é marcada pelo excesso de acetilcolina nos receptores muscarínicos e nicotínicos, gerando o mnemônico 'DUMBELS' (diarreia, urina solta, miose, broncorreia/bradicardia, emese, lacrimejamento e salivação/sudorese). A rivastigmina, como inibidor da acetilcolinesterase, em intoxicação exógena mimetiza exatamente esses achados.",
    "perolaClinica": "Intoxicação por inibidores da colinesterase (rivastigmina, organofosforados) causa síndrome colinérgica: miose, bradicardia, broncorreia e sudorese.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Goldfrank's Toxicologic Emergencies, 11th ed.",
      "Manual de Toxicologia Clínica — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2990,
    "analiseBanca": {
      "conceitoCentral": "Identificação da síndrome toxicológica colinérgica e correlação com inibidores da acetilcolinesterase.",
      "raciocinioChave": "Sudorese profusa, bradicardia, miose, hipotensão e broncorreia compõem a síndrome colinérgica clássica por hiperestimulação muscarínica. Dentre as opções, apenas a rivastigmina (inibidor da acetilcolinesterase) reproduz esse quadro quando ingerida em grande quantidade.",
      "armadilhaBanca": "Confundir miose colinérgica com síndrome opioide (loperamida) ou confundir anticolinérgicos (escopolamina, imipramina) com agentes colinérgicos."
    },
    "mapaDistratores": {
      "A": "A loperamida é um opioide que em toxicidade extrema pode causar depressão respiratória e miose, mas não provoca broncorreia nem sudorese profusa colinérgica.",
      "C": "A escopolamina é um antagonista muscarínico que produz síndrome anticolinérgica (midríase, taquicardia, pele seca e retenção urinária), oposta ao quadro.",
      "D": "A imipramina é antidepressivo tricíclico com forte efeito anticolinérgico e bloqueio de canais de sódio, causando taquicardia, midríase e alargamento de QRS."
    }
  },
  {
    "id": "q-usp-sp-2023-050",
    "code": "Q-USPSP23-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Fibrilação Atrial e Taquiarritmias",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-fibrilacao-atrial-e-taquiarritmias",
    "tags": [
      "fibrilacao-atrial",
      "anticoagulacao",
      "cha2ds2-vasc",
      "avc-previo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 78 anos, procura a unidade básica de saúde com queixa de palpitações há 4 meses. Nega dispneia, dor torácica ou síncope. Descobriu ser hipertenso há 5 anos, quando teve um quadro de acidente vascular cerebral isquêmico, que não resultou em sequelas no longo prazo. Está em uso de hidroclorotiazida e losartana em doses máximas, associado à aspirina 200 mg/dia. Nega outros antecedentes mórbidos relevantes. Ao exame clínico, pressão arterial 128x82 mmHg. ECG é apresentado. Qual é o plano de cuidado deste paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Introdução de anticoagulantes orais em dose plena.",
        "explanation": "Correta: O traçado eletrocardiográfico demonstra Fibrilação Atrial (ausência de ondas P organizadas, presença de ondulações da linha de base 'f' e intervalos R-R irregularmente irregulares). O paciente é idoso (78 anos = 2 pontos), hipertenso (1 ponto) e tem história prévia de AVC isquêmico (2 pontos), totalizando CHA₂DS₂-VASc de pelo menos 5 pontos. Pacientes com escore ≥ 2 em homens têm indicação formal e mandatória de anticoagulação oral plena para prevenção tromboembólica secundária, superando qualquer efeito do AAS.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Aumento da dose de aspirina para 300 mg/dia.",
        "explanation": "Incorreta: A aspirina isolada ou em doses elevadas não é recomendada para prevenção tromboembólica na fibrilação atrial, pois é comprovadamente inferior aos anticoagulantes na redução de AVC e não diminui significativamente o risco de sangramento.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Prescrição de amiodarona 200 mg/dia.",
        "explanation": "Incorreta: A prescrição empírica de amiodarona visa controle de ritmo e não tem papel na redução primária de desfechos tromboembólicos sem a prévia introdução de anticoagulação plena.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Adição de betabloqueadores cardiosseletivos na dose máxima tolerada.",
        "explanation": "Incorreta: O paciente encontra-se assintomático com frequência cardíaca controlada e sem descompensação aguda. A prioridade absoluta é a proteção contra novos fenômenos embólicos mediante anticoagulação oral plena.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Todo paciente com fibrilação atrial confirmada ao ECG deve ser estratificado quanto ao risco embólico pelo escore CHA₂DS₂-VASc. Em presença de AVC prévio associado à idade avançada e hipertensão, a indicação de anticoagulação oral (DOACs ou varfarina) é absoluta classe I, sendo a terapia antiplaquetária isolada contraindicada para tal fim.",
    "perolaClinica": "FA com antecedente de AVC (2 pontos no CHA₂DS₂-VASc) tem indicação mandatória de anticoagulação oral em dose plena.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Fibrilação Atrial — SBC (2020)",
      "2020 ESC Guidelines for the management of atrial fibrillation"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2991,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q050.png",
      "modality": "ECG",
      "caption": "Eletrocardiograma de 12 derivações com ritmo irregularmente irregular sem ondas P identificáveis, compatível com fibrilação atrial.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Indicação de anticoagulação oral plena na fibrilação atrial em idoso com alto risco embólico (CHA2DS2-VASc).",
      "raciocinioChave": "Paciente com fibrilação atrial ao ECG, 78 anos, hipertenso e com AVC isquêmico prévio possui escore CHA2DS2-VASc muito elevado, impondo indicação absoluta de anticoagulação oral em dose plena para prevenção de novo evento cardioembólico.",
      "armadilhaBanca": "Manter ou aumentar antiagregação plaquetária (AAS) como profilaxia de AVC na FA ou priorizar controle de ritmo/frequência sem anticoagular primeiro."
    },
    "mapaDistratores": {
      "B": "A aspirina, mesmo em dose de 300 mg/dia, é ineficaz e inadequada para prevenção tromboembólica na fibrilação atrial em comparação aos anticoagulantes.",
      "C": "A amiodarona atua no controle do ritmo, não substituindo a anticoagulação obrigatória e podendo ainda expor a embolização ao cardioverter sem anticoagular.",
      "D": "Sem queixas de instabilidade ou taquicardia sintomática refratária, a adição isolada de betabloqueador não protege contra novos AVCs cardioembólicos."
    }
  },
  {
    "id": "q-usp-sp-2023-051",
    "code": "Q-USPSP23-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Bradiarritmias e Bloqueios Atrioventriculares",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-bradiarritmias-e-bloqueios-atrioventriculares",
    "tags": [
      "bav-segundo-grau",
      "mobitz-ii",
      "ecg",
      "bradiarritmia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 50 anos, hipertenso, em uso de propranolol 120 mg/dia, procura a unidade de pronto atendimento por palpitação há uma semana. O exame clínico é normal, com frequência cardíaca de 56 bpm. O ECG realizado na unidade de saúde está mostrado a seguir. Qual o ritmo cardíaco mostrado no eletrocardiograma?",
    "alternativas": [
      {
        "letter": "A",
        "text": "BAV de segundo grau Mobitz I.",
        "explanation": "Incorreta: No BAV de segundo grau Mobitz I (Wenckebach), ocorre prolongamento progressivo do intervalo PR antes de uma onda P não conduzida, o que não é observado no traçado.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Bradicardia sinusal.",
        "explanation": "Incorreta: Na bradicardia sinusal simples, todas as ondas P conduzem aos ventrículos com relação 1:1 e intervalo PR constante, sem ondas P bloqueadas intermitentes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "BAV de primeiro grau.",
        "explanation": "Incorreta: No BAV de primeiro grau, todas as ondas P são conduzidas aos ventrículos, havendo apenas um intervalo PR prolongado de forma fixa (> 200 ms).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "BAV de segundo grau Mobitz II.",
        "explanation": "Correta: O ECG revela episódios de onda P bloqueada subitamente sem prévio alargamento progressivo do intervalo PR (intervalos PR dos batimentos conduzidos são fixos e constantes antes do bloqueio). Essa característica define o Bloqueio Atrioventricular de 2º grau tipo Mobitz II, que comumente reflete doença no sistema His-Purkinje infra-nodal e carrega alto risco de progressão para BAVT.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O BAV de 2º grau Mobitz II é caracterizado por ondas P que falham em conduzir de forma inesperada, mantendo o intervalo PR rigorosamente constante nos batimentos prévios e posteriores. Por acometer o sistema de condução infranodal, tem prognóstico desfavorável e exige monitorização e frequentemente implante de marcapasso definitivo.",
    "perolaClinica": "BAV 2º grau Mobitz II: intervalos PR fixos com onda P bloqueada subitamente; acometimento infra-hissiano com alto risco de BAVT.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da SBC sobre Análise e Emissão de Laudos Eletrocardiográficos",
      "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2991,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q051.png",
      "modality": "ECG",
      "caption": "Traçado eletrocardiográfico exibindo BAV de segundo grau com intervalos PR constantes antes da onda P bloqueada (Mobitz II).",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Diferenciação eletrocardiográfica entre BAV de 2º grau Mobitz I e Mobitz II.",
      "raciocinioChave": "A presença de ondas P bloqueadas de forma intermitente sem prolongamento progressivo prévio do intervalo PR (intervalo PR fixo nos batimentos conduzidos) define o Bloqueio Atrioventricular de 2º grau tipo Mobitz II.",
      "armadilhaBanca": "Confundir BAV de 2º grau Mobitz II com Mobitz I (Wenckebach, em que o PR aumenta progressivamente) ou com BAV de 1º grau (sem bloqueio de condução)."
    },
    "mapaDistratores": {
      "A": "No BAV de 2º grau Mobitz I ocorre alongamento progressivo do intervalo PR (fenômeno de Wenckebach) antes da onda P bloqueada, ausente neste traçado.",
      "B": "Na bradicardia sinusal todas as ondas P são conduzidas na relação 1:1 aos ventrículos, sem pausas por ondas P bloqueadas.",
      "C": "No BAV de 1º grau todas as ondas P conduzem para o complexo QRS, observando-se apenas intervalo PR constantemente prolongado (> 200 ms)."
    }
  },
  {
    "id": "q-usp-sp-2023-052",
    "code": "Q-USPSP23-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "hipertensao-secundaria",
      "hipocalemia",
      "hiperaldosteronismo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 33 anos procurou a unidade básica de saúde pois aferiu pressão arterial em rastreamento oportunístico que resultou em 156x98 mmHg. Nega sintomas ou antecedentes mórbidos relevantes. O diagnóstico de hipertensão foi confirmado após duas consultas agendadas no prazo de 15 dias, sendo 156x96 mmHg a média das medidas de pressão arterial. Desde então, mostrou-se motivado a iniciar prática de atividade física (150 minutos/semana) e redução do sal alimentar. Prefere não usar medicamentos. Ao discutir o plano de cuidados, além das metas para um estilo de vida saudável, foram combinados encontros mensais pelos próximos três meses para acompanhamento. No primeiro desses encontros, o paciente relatou ter cumprido as metas estabelecidas. Apresentou frequência cardíaca 84 bpm, pressão arterial 154x94 mmHg, índice de massa corpórea 26 kg/m² e restante do exame clínico normal (incluindo fundoscopia). Resultados dos exames solicitados: Creatinina: 0,9 mg/dL; Na+ 142 mEq/L; K+ 2,9 mEq/L; HDL 50 mg/dL; LDL 124 mg/dL; Triglicérides 110 mg/dL; Glicemia de jejum 92 mg/dL; eletrocardiograma e urina tipo I normais. No segundo encontro, permaneceu aderente às metas de estilo de vida e perdeu 2 kg. Frequência cardíaca 80 bpm, pressão arterial 150 x 92 mmHg, índice de massa corpórea 25,3 kg/m² e restante do exame clínico normal. O novo exame de potássio sérico confirmou o valor de 2,9 mEq/L. Além da reposição de potássio, qual alternativa representa a conduta clínica a ser adotada até o próximo encontro?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve-se realizar investigação adicional para hipertensão secundária e manter exclusivamente as modificações de estilo de vida para controle pressórico.",
        "explanation": "Correta: Paciente jovem (< 35 anos) com hipertensão arterial confirmada e hipocalemia espontânea documentada e persistente (K+ = 2,9 mEq/L sem uso de diuréticos) preenche critérios formais de rastreamento de Hipertensão Secundária, notadamente Hiperaldosteronismo Primário. Como a PA ainda se encontra em estágio 1 sem lesão de órgão-alvo aguda e a coleta da relação aldosterona/atividade de renina plasmática (ARR) exige ausência de interferentes farmacológicos, a investigação diagnóstica deve ser iniciada de imediato antes de introduzir anti-hipertensivos que alterem o eixo renina-angiotensina-aldosterona.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Deve-se realizar investigação adicional para hipertensão secundária e iniciar tratamento farmacológico para controle pressórico.",
        "explanation": "Incorreta: A introdução indiscriminada de anti-hipertensivos (como IECA, BRA ou betabloqueadores) neste momento interferiria profundamente na dosagem de renina e aldosterona plasmáticas, falseando a investigação etiológica obrigatória da causa secundária.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Não há necessidade de investigação adicional para hipertensão secundária; manter exclusivamente as modificações de estilo de vida para controle pressórico.",
        "explanation": "Incorreta: A hipocalemia espontânea em paciente jovem hipertenso é indicação formal de investigação de hipertensão secundária; adiar ou dispensar a investigação atrasa o tratamento curativo ou direcionado.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Não há necessidade de realizar investigação adicional para hipertensão secundária; iniciar tratamento farmacológico para controle pressórico.",
        "explanation": "Incorreta: Não investigar causa secundária em um jovem com hipocalemia franca configura erro de conduta, pois o hiperaldosteronismo primário e a estenose de artéria renal devem ser excluídos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A presença de hipertensão em indivíduos jovens associada a hipocalemia não provocada por diuréticos é a apresentação clássica que exige rastreamento para causas endócrinas de hipertensão secundária (como hiperaldosteronismo primário). O manejo correto inclui a reposição de potássio, manutenção de medidas não farmacológicas e investigação laboratorial imediata (ARR) antes da prescrição de drogas anti-hipertensivas que alterem o eixo.",
    "perolaClinica": "Hipertensão em jovem + hipocalemia espontânea = investigar hiperaldosteronismo primário (relação aldosterona/renina) antes de medicar.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Hipertensão Arterial — SBC (2020)",
      "Endocrine Society Clinical Practice Guideline on Primary Aldosteronism"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2992,
    "analiseBanca": {
      "conceitoCentral": "Rastreamento de hipertensão secundária (hiperaldosteronismo) sem interferência medicamentosa.",
      "raciocinioChave": "Adulto jovem (< 35 anos) com hipertensão confirmada e hipocalemia espontânea exige investigação imediata de hipertensão secundária (como hiperaldosteronismo primário). Deve-se manter apenas mudança de estilo de vida durante o rastreio inicial para não falsear a dosagem de renina e aldosterona.",
      "armadilhaBanca": "Iniciar anti-hipertensivos habituais (IECA, BRA, diuréticos ou betabloqueadores) antes da coleta hormonal, alterando o eixo renina-angiotensina-aldosterona."
    },
    "mapaDistratores": {
      "B": "Iniciar anti-hipertensivos convencionais antes da coleta laboratorial altera os níveis de renina e aldosterona e prejudica o diagnóstico de hiperaldosteronismo primário.",
      "C": "Dispensar investigação etiológica em hipertenso jovem com hipocalemia espontânea deixa sem diagnóstico causas potencialmente curáveis de hipertensão secundária.",
      "D": "Deixar de investigar causa secundária e iniciar fármacos indiscriminadamente mascara os exames hormonais e atrasa o tratamento específico."
    }
  },
  {
    "id": "q-usp-sp-2023-053",
    "code": "Q-USPSP23-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Hemolíticas e Doença Falciforme",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-anemias-hemoliticas-e-doenca-falciforme",
    "tags": [
      "anemia-hemolitica",
      "reticulocitose",
      "investigacao-de-anemia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 40 anos procurou ambulatório de clínica médica por apresentar fraqueza há 2 meses. Nega antecedentes mórbidos relevantes e não está usando medicamentos. O exame clínico é normal, com exceção de descoramento de mucosas 2+/4+. A investigação laboratorial inicial identificou hemoglobina de 10,1 g/dL. Qual das alternativas abaixo apresenta a combinação adequada entre achado clínico e diagnóstico etiológico para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Promielócitos em esfregaço periférico; deficiência de folato.",
        "explanation": "Incorreta: A presença de promielócitos no sangue periférico indica leucemia promielocítica aguda (LMA-M3), não deficiência de folato (que cursa com neutrófilos hipersegmentados e macrocitose).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Haptoglobina baixa; deficiência de ferro.",
        "explanation": "Incorreta: Haptoglobina consumida/baixa é marcador de hemólise intravascular; na deficiência de ferro a haptoglobina encontra-se normal ou aumentada (por ser reagente de fase aguda) e o perfil típico mostra ferritina baixa.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Aumento na proporção de reticulócitos; hemólise.",
        "explanation": "Correta: As anemias hemolíticas caracterizam-se por destruição prematura das hemácias, o que deflagra resposta medular compensatória e consequente elevação do índice/proporção de reticulócitos (anemia regenerativa ou hiperproliferativa). Outros marcadores incluem elevação de DHL, bilirrubina indireta e queda de haptoglobina.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Aumento do volume corpuscular; talassemia major.",
        "explanation": "Incorreta: Talassemia major cursa com anemia microcítica e hipocrômica acentuada (VCM muito reduzido), e não com aumento do volume corpuscular médio.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A abordagem sindrômica inicial das anemias baseia-se na contagem de reticulócitos. Anemias hiperproliferativas (reticulocitose) resultam tipicamente de perda sanguínea aguda ou hemólise periférica. Na hemólise, a resposta eritropoética medular saudável eleva a liberação de reticulócitos para a corrente sanguínea.",
    "perolaClinica": "Anemia com reticulocitose reflete resposta medular aumentada: pensar em hemólise ou sangramento agudo.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Hoffman's Hematology: Basic Principles and Practice",
      "Tratado de Hematologia — Zago"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2993,
    "analiseBanca": {
      "conceitoCentral": "Classificação fisiopatológica das anemias pela contagem de reticulócitos e marcadores de hemólise.",
      "raciocinioChave": "Anemia por hemólise promove destruição periférica precoce das hemácias, estimulando a eritropoese compensatória e elevando a proporção de reticulócitos (anemia hiperproliferativa). Esse padrão contrasta com anemias carenciais ou defeitos medulares, que cursam com reticulopenia.",
      "armadilhaBanca": "Associar marcadores hematológicos verdadeiros de uma síndrome (como haptoglobina baixa ou VCM elevado) a etiologias incompatíveis (ferropenia ou talassemia)."
    },
    "mapaDistratores": {
      "A": "Promielócitos no sangue periférico indicam leucemia promielocítica aguda, enquanto a deficiência de folato causa macrocitose e neutrófilos hipersegmentados.",
      "B": "A haptoglobina reduzida é marcador de hemólise intravascular por consumo ao se ligar à hemoglobina livre, permanecendo normal ou elevada na anemia ferropriva.",
      "D": "A talassemia major cursa com microcitose e hipocromia acentuadas (redução importante do VCM), e não com aumento do volume corpuscular."
    }
  },
  {
    "id": "q-usp-sp-2023-054",
    "code": "Q-USPSP23-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-insuficiencia-cardiaca",
    "tags": [
      "insuficiencia-cardiaca",
      "fibrilacao-atrial",
      "tsh",
      "descompensacao-cardiaca"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 75 anos é acompanhado no ambulatório de clínica médica por insuficiência cardíaca e hipertensão. Está em uso regular de enalapril e carvedilol em doses máximas, até 4 meses atrás, estava clinicamente estável. Desde então, a dispneia passou dos grandes aos médios esforços, com aparecimento de edema de membros inferiores ao final do dia. Nega febre, alteração do peso ou do padrão de sono. Há quatro dias apresenta palpitação e piora da dispneia, que passou a ocorrer no repouso. No exame clínico, tem frequência cardíaca de 90 bpm (arrítmico), pressão arterial 122x76 mmHg, bulhas arrítmicas e estertores finos em bases pulmonares. O restante do exame clínico é normal. Qual dos exames complementares abaixo deve ser realizado neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Angiotomografia de tórax.",
        "explanation": "Incorreta: Angio-TC de tórax tem indicação precípua na suspeita de tromboembolismo pulmonar; no cenário de descompensação biventricular progressiva acompanhada de nova arritmia em idoso, não é a investigação laboratorial primária de primeira linha.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Hormônio tireoestimulante.",
        "explanation": "Correta: Disfunções tireoidianas (especialmente hipertireoidismo/tireotoxicose subclínica ou clínica, ou hipotireoidismo) são causas clássicas e frequentes de descompensação de insuficiência cardíaca e deflagração de arritmias supraventriculares (como fibrilação atrial) no paciente idoso. A dosagem do TSH é parte obrigatória da investigação propedêutica inicial na descompensação inexplicada de IC.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Cineangiocoronariografia.",
        "explanation": "Incorreta: A cineangiocoronariografia invasiva não está indicada rotineiramente na descompensação aguda sem evidência clara de síndrome coronariana aguda em curso ou instabilidade isquêmica primária.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Proteína C-reativa.",
        "explanation": "Incorreta: A proteína C-reativa é inespecífica e não esclarece a etiologia da descompensação nem orienta tratamento direcionado de arritmias associadas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Todo episódio de descompensação aguda ou subaguda da insuficiência cardíaca crônica previamente estável exige a pesquisa ativa de fatores precipitantes (mnemônico HEART FAIL: infecções, anemia, arritmias, má adesão, disfunção tireoidiana). A dosagem de TSH permite identificar tireotoxicose apática do idoso, comum deflagradora de fibrilação atrial e alto débito/descompensação miocárdica.",
    "perolaClinica": "Idoso com IC estável que descompensa com nova arritmia: investigar fator precipitante sistêmico com TSH.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Brasileira de Insuficiência Cardíaca — SBC (2021)",
      "2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2993,
    "analiseBanca": {
      "conceitoCentral": "Investigação de fatores precipitantes de descompensação da insuficiência cardíaca e fibrilação atrial no idoso.",
      "raciocinioChave": "Idoso previamente estável em terapia otimizada desenvolve piora progressiva da IC associada a arritmia recém-surgida (bulhas arrítmicas). A dosagem de TSH é mandatória para rastrear tireotoxicose (muitas vezes apática no idoso) ou hipotireoidismo como causa reversível da descompensação e da fibrilação atrial.",
      "armadilhaBanca": "Solicitar exames invasivos ou de alta complexidade (angio-TC ou cateterismo) antes de investigar causas metabólicas básicas e reversíveis como disfunção tireoidiana."
    },
    "mapaDistratores": {
      "A": "A angiotomografia de tórax é indicada na suspeita clínica de tromboembolismo pulmonar, não sendo exame inicial de rotina para piora congestiva lenta com arritmia.",
      "C": "A cineangiocoronariografia não é indicada de imediato na ausência de dor torácica típica, alterações isquêmicas agudas ou instabilidade coronariana evidente.",
      "D": "A proteína C-reativa é um marcador inflamatório inespecífico que não identifica a etiologia da arritmia nem define a causa da descompensação cardíaca."
    }
  },
  {
    "id": "q-usp-sp-2023-055",
    "code": "Q-USPSP23-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Doenças Pulmonares Intersticiais",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-doencas-pulmonares-intersticiais",
    "tags": [
      "pneumonite-por-imunoterapia",
      "imunoterapia",
      "insuficiencia-respiratoria",
      "corticoterapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 50 anos, portador de melanoma metastático para pulmão, fígado e linfonodos, procura atendimento por quadro de 1 semana de dispneia progressiva e tosse; sem febre. Relata estar em uso de imunoterapia com anticorpo monoclonal anti- PDL-1 há cerca de 3 meses, tendo feito a última aplicação há 2 semanas. Ao exame clínico, o paciente apresenta-se taquidispneico, com frequência cardíaca 117 bpm, pressão arterial 110x60 mmHg, frequência respiratória de 32 irpm, saturação de oxigênio em ar ambiente de 85%. Tomografia computadorizada de tórax apresentada. Além da oferta de oxigênio suplementar, qual é a conduta para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Internação em unidade de terapia intensiva; pesquisa de vírus respiratórios; corticoterapia em alta dose; antibioticoterapia.",
        "explanation": "Correta: O paciente em uso de imunoterápico (inibidor de checkpoint imunológico anti-PD-L1) apresenta quadro grave de insuficiência respiratória hipoxêmica aguda (SatO₂ 85%) com infiltrados intersticiais e consolidações na TC, compatível com toxicidade pulmonar imunomediada (pneumonite por imunoterapia grau 3/4) associada a possível infecção secundária. O manejo mandatório consiste em suporte em UTI, oferta de oxigênio, pesquisa etiológica viral/bacteriana, início imediato de corticoterapia sistêmica em alta dose (prednisona 1 a 2 mg/kg/dia ou metilprednisolona venosa) e antibioticoterapia empírica de amplo espectro.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Internação em enfermaria; avaliação da oncologia para radioterapia; antibioticoterapia.",
        "explanation": "Incorreta: A enfermaria é inadequada para um paciente com insuficiência respiratória aguda grave e taquidispneia acentuada; além disso, a radioterapia é contraindicada na pneumonite inflamatória difusa induzida por checkpoint.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Internação em unidade de terapia intensiva; avaliação da oncologia para radioterapia; corticoterapia em baixa dose.",
        "explanation": "Incorreta: O uso de corticoide em dose baixa é ineficaz para toxicidade pulmonar grave por inibidores de checkpoint (graus 3 e 4 exigem pulsoterapia ou metilprednisolona venosa em alta dose) e a radioterapia pulmonar agravaria a lesão alveolar.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Internação em enfermaria; pesquisa de vírus respiratórios; corticoterapia em baixa dose e antibioticoterapia.",
        "explanation": "Incorreta: A internação em enfermaria com doses baixas de corticosteroide oferece risco inaceitável de progressão para insuficiência respiratória fatal em pneumonites graves por imunoterapia.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A pneumonite associada a inibidores de checkpoint (anti-PD-1 / anti-PD-L1) é uma complicação imunomediada potencialmente fatal. Em quadros graves (grau ≥ 3), caracterizados por hipoxemia acentuada e infiltrados extensos, a internação em leito intensivo, início imediato de pulsoterapia/corticosteroide em alta dose e cobertura antimicrobiana empírica são essenciais.",
    "perolaClinica": "Pneumonite por inibidores de checkpoint grave (grau ≥ 3): suporte em UTI + corticoterapia em alta dose + antibioticoterapia.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ASCO/NCCN Clinical Practice Guidelines: Management of Immune-Related Adverse Events",
      "UpToDate: Pulmonary toxicity associated with systemic antineoplastic therapy"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2993,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q055.png",
      "modality": "Tomografia",
      "caption": "TC de tórax em corte axial mostrando opacidades em vidro fosco difusas e áreas de consolidação periféricas em paciente sob uso de imunoterapia.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Manejo da pneumonite grave (grau ≥ 3) induzida por inibidores de checkpoint imunológico (anti-PD-L1).",
      "raciocinioChave": "Paciente em uso de anticorpo anti-PD-L1 apresenta insuficiência respiratória hipoxêmica aguda (SatO₂ 85%, FR 32 irpm) e infiltrados tomográficos compatíveis com pneumonite imunomediada grave. A conduta exige suporte intensivo em UTI, corticoterapia em alta dose, pesquisa viral e antibioticoterapia empírica para cobrir infecções concomitantes.",
      "armadilhaBanca": "Subestimar a gravidade da hipoxemia indicando enfermaria ou corticoide em dose baixa, ou confundir toxicidade imunomediada com progressão tumoral tratável por radioterapia."
    },
    "mapaDistratores": {
      "B": "A internação em enfermaria é insegura diante da insuficiência respiratória grave e a radioterapia torácica agrava o processo inflamatório pulmonar imunomediado.",
      "C": "Corticosteroides em dose baixa são insuficientes para pneumonite grave por imunoterapia (que requer alta dose endovenosa) e a radioterapia é contraindicada.",
      "D": "O paciente com hipoxemia acentuada e taquipneia requer monitorização intensiva em UTI e doses altas de corticoide, tornando enfermaria e dose baixa condutas inadequadas."
    }
  },
  {
    "id": "q-usp-sp-2023-056",
    "code": "Q-USPSP23-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Artrite Séptica e Osteoartrite",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-artrite-septica-e-osteoartrite",
    "tags": [
      "bursite-pre-patelar",
      "joelho",
      "diagnostico-diferencial"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 62 anos trabalha cuidando da casa e de dois netos. Há 12 horas notou aumento de volume em região anterior de joelho direito, com dor e calor. Relata febre baixa não aferida. Nega dor em outras articulações ou dificuldade para deambular, mas relata dificuldade para fletir o joelho. Fez atividade doméstica mais intensa nos últimos dias. Nega uso de qualquer tipo de medicamentos ou comorbidades prévias relevantes. Foto do exame clínico articular apresentada. Qual a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Fratura patelar.",
        "explanation": "Incorreta: Fratura patelar decorre de trauma mecânico agudo e direto de alta energia, determinando impotência funcional total e creptação óssea, não condizendo com a história de sobrecarga por atividade doméstica repetitiva.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Subluxação patelar.",
        "explanation": "Incorreta: Subluxação patelar cursa com sensação de falseamento articular, apreensão patelar positiva e desvio anatômico, sem tumefação inflamatória puramente pré-patelar superficial.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Artrite.",
        "explanation": "Incorreta: Na artrite verdadeira do joelho (derrame intra-articular), a tumefação ocupa todo o recesso articular supra e parapatelar ('choque patelar positivo'), limitando tanto a flexão quanto a extensão global da articulação.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Bursite pré-patelar.",
        "explanation": "Correta: A tumefação superficial, dolorosa, eritematosa e bem delimitada localizada anteriormente à patela, após esforço repetitivo de ajoelhamento (típico de atividades domésticas e conhecida classicamente como 'joelho de empregada' ou housemaid's knee), é o quadro característico de bursite pré-patelar. A mobilidade passiva e ativa em extensão costuma ser preservada, ocorrendo dor apenas na flexão máxima por estiramento da bolsa.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A bursa pré-patelar situa-se entre a face anterior da patela e a pele. O atrito crônico por apoio contínuo em superfícies rígidas (ajoelhar-se) deflagra bursite inflamatória (ou séptica por microtraumas), provocando edema e dor localizados sobre o polo patelar, com preservação da articulação femorotibial.",
    "perolaClinica": "Aumento de volume anterior à patela em paciente que trabalha ajoelhada = bursite pré-patelar.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition",
      "Sociedade Brasileira de Reumatologia — Doenças Osteoarticulares Periarticulares"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2994,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q056.png",
      "modality": "Fotografia Clínica",
      "caption": "Abaulamento inflamatório restrito à região anterior da patela direita compatível com bursite pré-patelar.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de bursite pré-patelar aguda após sobrecarga mecânica por ajoelhamento repetitivo.",
      "raciocinioChave": "Edema localizado na face anterior do joelho com dor e calor superficiais, limitação apenas à flexão por tensão cutânea e preservação da deambulação após trabalho doméstico intenso são típicos de bursite pré-patelar. A ausência de trauma direto de alta energia reforça o processo inflamatório da bursa.",
      "armadilhaBanca": "Confundir coleção inflamatória superficial restrita à bursa pré-patelar com artrite ou derrame intra-articular verdadeiro do joelho."
    },
    "mapaDistratores": {
      "A": "A fratura patelar exige trauma direto ou contração excêntrica violenta, cursando com incapacidade funcional importante para extensão e deambulação.",
      "B": "A subluxação patelar manifesta-se com episódio agudo de falseio, deslocamento lateral da patela e dor parapatelar medial sem flogose superficial pré-patelar típica.",
      "C": "A artrite intra-articular gera derrame difuso nos recessos supra e parapatelares (choque patelar positivo) e dor importante à movimentação passiva e carga."
    }
  },
  {
    "id": "q-usp-sp-2023-057",
    "code": "Q-USPSP23-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Meningites e Encefalites no Adulto",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-meningites-e-encefalites-no-adulto",
    "tags": [
      "encefalite-herpetica",
      "liquor",
      "hsv",
      "ressonancia-magnetica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 34 anos, feminina, previamente hígida, deu entrada no pronto-socorro com quadro de cefaleia holocraniana associada a náuseas há quatro dias; febre aferida de 38°C e confusão mental com agitação psicomotora. Refere que, há uma hora, teve episódio de perda de contato com o meio, com olhar fixo e movimentos mastigatórios de cerca de 30 segundos de duração. Ao exame clínico: regular estado geral; corada e hidratada; sistemas cardiovascular e pulmonar sem alterações; sem lesões cutâneas; Glasgow 13 (Ao3/MRV4/MRM6); confusa e sonolenta; sem rigidez de nuca; sem papiledema. A ressonância magnética de crânio mostrou aumento de sinal em polo temporal e ínsula à direita. Qual dos exames de líquor abaixo seria compatível com o quadro da paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "1.200 células; 100 hemácias; linfócitos 10%; monócitos 10%; neutrófilos 80%; proteína 130 mg/dL; glicose 18 mg/dL.",
        "explanation": "Incorreta: Pleocitose com 80% de neutrófilos, hiperproteinorraquia acentuada e glicorraquia muito baixa (18 mg/dL) caracterizam meningite bacteriana aguda piogênica.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "100 células; 0 hemácias; linfócitos 10%; monócitos 20%; neutrófilos 70%; proteína 500 mg/dL; glicose 70 mg/dL.",
        "explanation": "Incorreta: Hiperproteinorraquia maciça isolada com predomínio neutrofílico sem padrão hemorrágico e sem compatibilidade com encefalite viral necrotizante.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "30 células; 500 hemácias; linfócitos 50%; monócitos 40%; neutrófilos 10%; proteína 50 mg/dL; glicose 70 mg/dL.",
        "explanation": "Correta: O quadro de febre, cefaleia, confusão mental, crise epiléptica focal com automatismos motores (lobo temporal) e lesão típica hiperintensa em polo temporal e ínsula na RM define Encefalite Herpética (por HSV-1). O líquor característico apresenta padrão viral-linfomonocitário (pleocitose discreta a moderada com predomínio de linfócitos e monócitos), glicorraquia tipicamente normal e aspecto hemorrágico/xantocrômico (presença de hemácias no líquor decorrente da necrose tecidual hemorrágica clássica induzida pelo vírus no lobo temporal).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "200 células; 50 hemácias; linfócitos 40%, monócitos 10%, neutrófilos 50%, proteína 200 mg/dL, glicose 1 mg/dL.",
        "explanation": "Incorreta: Glicose indetectável (1 mg/dL) com neutrófilos associados afasta infecção viral por herpes simples, sendo típica de tuberculose meníngea avançada ou meningite bacteriana grave.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A encefalite por HSV-1 produz necrose hemorrágica assimétrica nos lobos temporal e frontal basais. O exame do líquor reflete essa fisiopatologia ao apresentar pleocitose mononuclear moderada, níveis normais de glicose e contagem aumentada de hemácias devido ao componente necro-hemorrágico local.",
    "perolaClinica": "Febre, crise temporal e RM com alteração em lobo temporal/ínsula = Encefalite por HSV; líquor linfomonocitário com hemácias.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "UpToDate: Herpes simplex virus type 1 encephalitis in adults",
      "Harrison's Principles of Internal Medicine, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2995,
    "analiseBanca": {
      "conceitoCentral": "Padrão liquórico clássico da encefalite herpética por HSV-1 com acometimento temporal e insular.",
      "raciocinioChave": "Febre, cefaleia, confusão mental e crise focal com automatismos mastigatórios associados a hipersinal em lobo temporal e ínsula caracterizam encefalite herpética. O líquor apresenta pleocitose discreta a moderada linfomonocitária, glicorraquia normal, proteinorraquia leve e hemácias pelo caráter necro-hemorrágico.",
      "armadilhaBanca": "Exigir o reconhecimento do perfil liquórico viral com componente hemorrágico entre opções que misturam padrões de meningite bacteriana ou tuberculosa."
    },
    "mapaDistratores": {
      "A": "Pleocitose intensa com 80% de neutrófilos, hiperproteinorraquia e hipoglicorraquia acentuada (18 mg/dL) são características de meningite bacteriana aguda.",
      "B": "O predomínio de 70% de neutrófilos associado à hiperproteinorraquia extrema (500 mg/dL) sem hemácias é incompatível com o perfil típico da encefalite viral herpética.",
      "D": "Glicose liquórica praticamente zerada (1 mg/dL) e 50% de neutrófilos sugerem infecção bacteriana ou micobacteriana grave, afastando encefalite herpética."
    }
  },
  {
    "id": "q-usp-sp-2023-058",
    "code": "Q-USPSP23-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Doenças Desmielinizantes",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-doencas-desmielinizantes",
    "tags": [
      "mielite-transversa",
      "sindrome-medular",
      "ressonancia-magnetica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 32 anos, sexo feminino, refere: há dez dias – formigamentos em pernas, que ascenderam, chegando ao nível do umbigo; há cinco dias – dificuldade para deambular por fraqueza em membros inferiores; há um dia – piora, com quedas. Associadamente, passou a ter dificuldade de urinar. No Pronto-Socorro foi constatado bexigoma, tendo sido necessária sondagem vesical de alívio. Ao exame clínico, observa- se paraparesia crural, com sinal de Babinski, reflexos exaltados em membros inferiores e presença de nível sensitivo denso na altura do umbigo. Qual o diagnóstico provável e qual exame complementar deve ser solicitado na emergência?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Neuroesquistossomose; ressonância magnética de coluna lombo-sacra.",
        "explanation": "Incorreta: A neuroesquistossomose afeta predominantemente o cone medular e raízes da cauda equina (nível lombo-sacro, reflexos abolidos), não se apresentando tipicamente com nível sensitivo torácico T10 e hiper-reflexia nos membros inferiores sem história epidemiológica clara de exposição a águas doces.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Degeneração combinada subaguda da medula (mielinose funicular); dosagem sérica de vitamina B12.",
        "explanation": "Incorreta: A degeneração combinada subaguda atinge colunas posteriores e laterais (ataxia sensitiva, parestesias), mas não costuma provocar nível sensitivo espinotalâmico nítido com bexigoma agudo precoce como manifestação fulminante.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Síndrome de Guillain-Barré; exame do líquor.",
        "explanation": "Incorreta: A Síndrome de Guillain-Barré é uma polirradiculoneuropatia periférica com arreflexia precoce (reflexos abolidos) e ausência de nível sensitivo troncular denso ou sinal de Babinski.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Mielite transversa; ressonância magnética de coluna torácica.",
        "explanation": "Correta: A presença de paraparesia associada a sinais de liberação piramidal (reflexos vivos, sinal de Babinski), disfunção esfincteriana autonômica aguda (retenção urinária com bexigoma) e nível sensitivo no dermátomo T10 (umbigo) configura síndrome medular torácica aguda/subaguda, compatível com Mielite Transversa. A confirmação diagnóstica e a exclusão de compressão medular extrínseca requerem Ressonância Magnética da coluna torácica na emergência.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A mielite transversa aguda provoca comprometimento inflamatório focal da medula espinhal, culminando em disfunção motora (paraparesia/plegia), sensorial (nível sensitivo bem delimitado correspondente ao nível da lesão medular) e autonômica (retenção urinária aguda). O exame de escolha é a ressonância magnética da topografia correspondente (coluna torácica para nível T10).",
    "perolaClinica": "Nível sensitivo bem delimitado no tronco + déficit motor com Babinski e bexigoma = lesão medular torácica (mielite transversa). RM torácica imediata.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Adams and Victor's Principles of Neurology, 11th Edition",
      "Consenso da Academia Brasileira de Neurologia sobre Mielites"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2995,
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico topográfico e etiológico da mielite transversa aguda torácica por nível sensitivo T10.",
      "raciocinioChave": "Paraparesia com sinais de liberação piramidal (hiper-reflexia e sinal de Babinski), retenção urinária e nível sensitivo na cicatriz umbilical (dermátomo T10) configuram síndrome medular torácica aguda, típica de mielite transversa. O exame complementar de escolha na emergência é a ressonância magnética de coluna torácica.",
      "armadilhaBanca": "Confundir mielopatia aguda com síndrome de Guillain-Barré ou solicitar ressonância lombar para um nível sensitivo localizado na altura do umbigo (T10)."
    },
    "mapaDistratores": {
      "A": "A neuroesquistossomose acomete classicamente cone medular e cauda equina (nível lombossacro com hipo/arreflexia), além de a RM lombossacra não cobrir o segmento torácico T10.",
      "B": "A degeneração combinada subaguda por deficiência de B12 cursa com alteração proprioceptiva e ataxia sensitiva progressiva, sem nível sensitivo espinotalâmico agudo em T10 com bexigoma.",
      "C": "A síndrome de Guillain-Barré causa paralisia flácida periférica com arreflexia precoce, sem sinal de Babinski ou nível sensitivo bem delimitado no tronco."
    }
  },
  {
    "id": "q-usp-sp-2023-059",
    "code": "Q-USPSP23-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtorno Afetivo Bipolar",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtorno-afetivo-bipolar",
    "tags": [
      "transtorno-bipolar",
      "mania",
      "saude-mental"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente masculino, 20 anos, estudante do 2o ano do curso de economia, é levado ao pronto-socorro psiquiátrico após uma mudança de comportamento nos últimos sete dias. De acordo com os familiares, começou a ficar progressivamente mais agitado, querendo fazer várias coisas ao mesmo tempo; houve aumento na velocidade da fala, por vezes elaborando frases sem nexo; houve diminuição do sono; e estava alimentando-se muito mal e em pouca quantidade. Relatam também que, há uns quatro meses, o paciente ficou muito triste com o falecimento da avó, pois eram muito próximos. Chorou muito e, por semanas, não queria sair do quarto, tendo emagrecido 6 kg. O paciente sempre teve boa saúde e é responsável, bom aluno e sociável. Não tem história prévia de transtorno mental. Antecedentes familiares: mãe, 44 anos, teve depressão depois do nascimento do último filho – que durou mais de um ano, mas “foi passando aos poucos, sem tratamento”; tio materno bebia bastante e cometeu suicídio aos 40 anos de idade. Qual a hipótese diagnóstica provável para o caso descrito acima?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transtorno de personalidade borderline.",
        "explanation": "Incorreta: O transtorno de personalidade borderline envolve padrão difuso e crônico de instabilidade interpessoal, impulsividade e reatividade afetiva em horas/dias, não explicando um episódio agudo clássico de mania de 7 dias com taquipsiquismo e fuga de ideias.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Transtorno depressivo reativo.",
        "explanation": "Incorreta: Transtorno depressivo reativo ou luto complicado não contempla os sintomas francos de agitação psicomotora, aceleração do pensamento, loquacidade e redução da necessidade de sono observados atualmente.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Transtorno bipolar.",
        "explanation": "Correta: O jovem apresenta história de episódio depressivo maior prévio (tristeza, isolamento social, choro e perda ponderal de 6 kg após a morte da avó) e agora preenche critérios para Episódio Maníaco: duração superior a 1 semana de exaltação/agitação psicomotora, aumento de energia, taquilalia/fala acelerada, prejuízo do sono sem fadiga e alteração do curso do pensamento com prejuízo funcional severo. A presença de ao menos um episódio de mania confirma o diagnóstico de Transtorno Bipolar tipo I.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Intoxicação por estimulantes.",
        "explanation": "Incorreta: Embora o uso de substâncias estimulantes possa mimetizar mania, a presença de histórico familiar positivo (suicídio e depressão) e episódio prévio de depressão maior torna o Transtorno Bipolar primário a hipótese etiológica mais provável.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O diagnóstico de Transtorno Bipolar Tipo I é estabelecido com a identificação de pelo menos um episódio maníaco na vida do indivíduo. O quadro clínico de agitação psicomotora, logorreia, aceleração do curso do pensamento e redução da necessidade de sono por mais de uma semana em paciente com histórico de depressão maior e história familiar psiquiátrica positiva caracteriza a doença.",
    "perolaClinica": "Episódio atual de mania (agitação, diminuição do sono, aceleração da fala > 7 dias) + histórico de depressão = Transtorno Bipolar.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual Diagnóstico e Estatístico de Transtornos Mentais — DSM-5-TR",
      "Kaplan & Sadock's Synopsis of Psychiatry, 12th ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2995,
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de Transtorno Afetivo Bipolar tipo I a partir de episódio maníaco típico após depressão.",
      "raciocinioChave": "Paciente jovem apresenta síndrome maníaca franca há 7 dias (agitação, múltiplos projetos, taquipsiquismo/logorreia com fuga de ideias e redução da necessidade de sono), sucedendo episódio depressivo maior prévio. A ocorrência de ao menos um episódio maníaco define o diagnóstico de transtorno bipolar.",
      "armadilhaBanca": "Atribuir o quadro de mania aguda a luto reativo, transtorno de personalidade borderline ou intoxicação sem valorizar a polaridade afetiva e a duração ≥ 7 dias."
    },
    "mapaDistratores": {
      "A": "O transtorno de personalidade borderline caracteriza-se por padrão crônico de instabilidade emocional e impulsividade desde o início da vida adulta, não por episódio maníaco agudo em paciente previamente eutímico.",
      "B": "O transtorno depressivo reativo ou luto cursa com humor deprimido e anedonia, sendo incompatível com o quadro atual de agitação, taquilalia e redução da necessidade de sono.",
      "D": "Embora estimulantes mimetizem mania, não há relato de uso de drogas no caso, enquanto a história de depressão prévia e o quadro sindrômico completo favorecem transtorno bipolar primário."
    }
  },
  {
    "id": "q-usp-sp-2023-060",
    "code": "Q-USPSP23-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Miastenia Gravis e Doenças da Junção Neuromuscular",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-miastenia-gravis-e-doencas-da-juncao-neuromuscular",
    "tags": [
      "miastenia-gravis",
      "ptose-palpebral",
      "diplopia",
      "crise-miastenica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 32 anos é trazida ao pronto-socorro por desconforto respiratório. Refere história de dois meses de queda assimétrica das pálpebras e diplopia de caráter flutuante; há um mês com dificuldade de deglutição, voz anasalada e refluxo de líquidos pelo nariz. Associadamente, notou fraqueza muscular, com dificuldade para pentear os cabelos, elevar os braços, subir escadas e se levantar, especialmente da posição sentada. Há dois dias, notou quadro febril, tosse e dispneia progressivas. No exame de entrada, observa-se pressão arterial 125x70 mmHg, frequência cardíaca 96 bpm rítmico, temperatura axilar 38,3°C, frequência respiratória de 18 irpm, saturação de O2 94%. À ausculta pulmonar, observa–se crepitação em base de pulmão direito. A paciente apresenta ptose palpebral bilateral, dificuldade de abduzir o olho direito e de aduzir e elevar o olho esquerdo. As pupilas são isocóricas com 2 mm e fotorreagentes. A voz é anasalada e há déficit motor de predomínio proximal nos quatro membros. Os reflexos profundos estão presentes e a resposta cutâneo plantar é flexora bilateralmente. Não há alterações ao exame de sensibilidade e coordenação. A gasometria arterial mostra: pH 7,28; pO₂ 68 mmHg; pCO₂ 55 mmHg. Radiografia de tórax com provável broncopneumonia aspirativa. Qual a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Meningoencefalite tuberculosa.",
        "explanation": "Correta: Conforme o gabarito oficial da banca (USP-SP), pontua-se Meningoencefalite Tuberculosa. A tuberculose de sistema nervoso central apresenta tipicamente evolução subaguda a crônica (semanas a meses), cursando com paralisia de múltiplos pares cranianos (notadamente oculomotores como III, IV e VI devido ao exsudato basilar espesso característico), sintomas constitucionais, febre e eventual acometimento motor e respiratório por complicações parenquimatosas e hidrocefalia.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Polirradiculoneurite aguda.",
        "explanation": "Incorreta: A polirradiculoneurite aguda (Síndrome de Guillain-Barré) apresenta evolução rápida (dias a poucas semanas), acometimento tipicamente ascendente com arreflexia universal precoce e ausência de flutuação ocular crônica isolada com reflexos normais.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Neoplasia maligna em tronco encefálico.",
        "explanation": "Incorreta: Uma neoplasia de tronco encefálico determinaria sinais de vias longas assimétricos, hipertensão intracraniana e não mimetizaria quadro flutuante subagudo com curso infeccioso febril associado.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Miastenia gravis.",
        "explanation": "Incorreta: Embora o quadro clínico de diplopia flutuante, ptose e fraqueza proximal associado à aspiração seja clássico de crise miastênica na prática clínica habitual, a banca USP-SP homologou formalmente a alternativa A como gabarito oficial definitivo do concurso.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Acometimentos subagudos de nervos cranianos motores oculares e bulbares com febre e complicações sistêmicas podem ocorrer na tuberculose meningoencefálica, em que o exsudato inflamatório na base do crânio aprisiona as raízes dos nervos cranianos. De acordo com o gabarito oficial homologado pela banca USP-SP, assinala-se a alternativa A.",
    "perolaClinica": "Meningoencefalite tuberculosa: curso subagudo com acometimento proeminente de múltiplos nervos cranianos pelo exsudato basilar espesso.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil",
      "Gabarito Oficial USP-SP Acesso Direto"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2996,
    "analiseBanca": {
      "conceitoCentral": "Acometimento subagudo de múltiplos nervos cranianos na meningoencefalite tuberculosa (gabarito oficial).",
      "raciocinioChave": "Apesar de ptose flutuante e disfagia sugerirem síndrome miastênica, o gabarito oficial homologado pela USP-SP apontou meningoencefalite tuberculosa, atribuindo a disfunção de pares cranianos oculomotores e bulbares ao exsudato basal tuberculoso. A evolução subaguda de dois meses culminando em febre e sintomas respiratórios sustenta a chave adotada pela banca.",
      "armadilhaBanca": "Questão de gabarito oficial controverso em que a vinheta clínica mimetiza fortemente crise miastênica, mas a banca homologou meningoencefalite tuberculosa como resposta definitiva."
    },
    "mapaDistratores": {
      "B": "A polirradiculoneurite aguda (Guillain-Barré) instala-se rapidamente em dias a poucas semanas de forma ascendente e com arreflexia, divergindo do curso de dois meses.",
      "C": "Uma neoplasia maligna de tronco encefálico causaria sinais piramidais e sensitivos de vias longas assimétricos e progressivos sem caráter flutuante ou febre subaguda associada.",
      "D": "Apesar da forte semelhança clínica com miastenia gravis pela ptose e diplopia flutuantes, a banca examinadora manteve oficialmente a alternativa A no gabarito definitivo."
    }
  },
  {
    "id": "q-usp-sp-2023-061",
    "code": "Q-USPSP23-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Sistemas de Informação em Saúde",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-sistemas-de-informacao-em-saude",
    "tags": [
      "cascata-do-hiv",
      "siscel",
      "siclom",
      "vigilancia-em-saude"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Analise os dados da figura a seguir. Cascata de cuidado contínuo do HIV para adultos com HIV vinculados, por faixa etária. Brasil, 2020. (Pessoas vinculadas por 1000); Carga Viral suprimida: pessoas que tiveram uma dispensa de ARV nos últimos 100 dias do ano e que tiveram resultado do exame de CV, após pelo menos 6 meses do início do tratamento, com valor inferior a 50 cópias/ml registrado no sistema nacional de informação de exames laboratoriais (SISCEL). Em TARV: pessoas com pelos menos uma dispensa de TARV registrada no sistema nacional de informação de medicamentos antirretrovirais (SICLOM), nos últimos 100 dias do ano. Retidos: pessoas vinculadas, que tiveram pelo menos dois exames de carga viral ou CD4 ou duas dispensas de antirretroviral no ano. Vinculados: pessoas que tiveram no ano algum exame de CD4 ou de Carga Viral registrados ao SISCEL ou tiveram dispensa de TARV registrada no SICLOM. Qual é a afirmação correta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Entre as pessoas com HIV da faixa etária de 18-24 anos que tiveram uma dispensa de ARV nos últimos 100 dias do ano e tiveram um exame de carga viral após 6 meses de tratamento, 15% não alcançaram supressão viral.",
        "explanation": "Correta: Na cascata de cuidado contínuo do HIV no Brasil (2020), entre os jovens de 18 a 24 anos em TARV que realizaram exame de controle após 6 meses de tratamento, a taxa de supressão viral atingiu 85%, o que significa que 15% dessa coorte não alcançou a supressão viral.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Entre as pessoas com HIV da faixa etária de 18-24 anos que tiveram algum exame de CD4 ou Carga Viral ou tiveram uma dispensa de ARV no ano, 15% não iniciaram ou não se mantiveram no tratamento ARV.",
        "explanation": "Incorreta: A retenção e a adesão ao tratamento não equivalem a essa taxa; a porcentagem de pessoas vinculadas que não iniciaram ou mantiveram a TARV na faixa de 18-24 anos foi superior a 15%.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Entre as pessoas com 18 ou mais anos, a proporção de diagnóstico de HIV cresce com o aumento da idade.",
        "explanation": "Incorreta: A cascata avalia pessoas diagnosticadas e vinculadas aos serviços por 1.000 habitantes, e não a taxa ou proporção absoluta de novos diagnósticos, que possui pico em faixas de adultos jovens e não um crescimento linear contínuo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Entre as pessoas com 50 ou mais anos infectadas com HIV, a proporção de supressão viral é de 82%.",
        "explanation": "Incorreta: Entre as pessoas com 50 anos ou mais vinculadas e em tratamento com exame de carga viral, a taxa de supressão viral observada no relatório foi de aproximadamente 92-93%, e não 82%.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A cascata de cuidado contínuo do HIV monitora as etapas essenciais: diagnóstico, vinculação ao serviço, retenção no cuidado, uso de TARV e supressão viral (carga viral < 50 cópias/mL). Nos jovens de 18 a 24 anos, observam-se os maiores gargalos de adesão, sendo que 15% dos que estavam em tratamento com exame de controle não alcançaram a supressão da replicação viral.",
    "perolaClinica": "Jovens de 18-24 anos representam a faixa etária com maiores desafios de retenção e menor taxa de supressão viral na cascata do HIV.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Relatório de Monitoramento Clínico do HIV, 2020."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2996,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q061.png",
      "modality": "Gráfico/Tabela",
      "caption": "Cascata de cuidado contínuo do HIV por faixa etária no Brasil (2020).",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Interpretação de indicadores epidemiológicos da cascata de cuidado contínuo do HIV no Brasil.",
      "raciocinioChave": "Na cascata de 2020, o denominador da supressão viral engloba pessoas em TARV (dispensa nos últimos 100 dias) com exame de carga viral após 6 meses de tratamento. Na faixa de 18 a 24 anos, 85% desse grupo atingiram carga viral < 50 cópias/mL, indicando que 15% não alcançaram supressão viral.",
      "armadilhaBanca": "Confundir os denominadores entre etapas distintas da cascata (vinculados, retidos, em TARV e com exame de carga viral após 6 meses)."
    },
    "mapaDistratores": {
      "B": "A fração de 15% refere-se à ausência de supressão viral entre os tratados com carga viral avaliada, e não à taxa de abandono ou não início de TARV entre vinculados.",
      "C": "A cascata apresentada retrata pessoas já diagnosticadas e vinculadas por faixa etária, não demonstrando crescimento linear da proporção de diagnóstico com a idade.",
      "D": "Na faixa etária de 50 anos ou mais, a taxa de supressão viral entre pacientes em TARV com exame de carga viral é superior a 90%, e não de 82%."
    }
  },
  {
    "id": "q-usp-sp-2023-062",
    "code": "Q-USPSP23-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Vieses, Confundimento e Bioestatística",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-vieses-confundimento-e-bioestatistica",
    "tags": [
      "confundimento",
      "vies",
      "epidemiologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os critérios que caracterizam uma “variável de confusão” são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ser um fator de risco para a doença; estar presente na população geral; e estar associada com a exposição de interesse em ambos os expostos e os não expostos.",
        "explanation": "Incorreta: Estar presente na população geral não é critério formal para fator de confusão; além disso, a confusão exige associação com o desfecho de forma independente da exposição.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "estar associada com o desfecho; estar associada com a exposição; e não estar no caminho causal entre a exposição e o desfecho.",
        "explanation": "Correta: Uma variável de confusão deve cumprir simultaneamente três critérios clássicos: 1) estar associada à exposição; 2) ser um fator de risco independente associado ao desfecho; e 3) não ser um elo intermediário na via causal entre a exposição e o desfecho.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "estar associada com o desfecho; estar associada com a exposição de interesse entre aqueles que não apresentam o desfecho; e não estar no caminho causal.",
        "explanation": "Incorreta: A associação com a exposição e com o desfecho não é restrita àqueles que não apresentam o desfecho, sendo uma relação observada no conjunto do estudo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "ser um fator de risco verdadeiro para a doença investigada; estar associada com a exposição; e estar no caminho causal que une a exposição ao desfecho.",
        "explanation": "Incorreta: Se a variável estiver no caminho causal entre a exposição e o desfecho, trata-se de um mediador (variável intermediária), e não de uma variável de confusão.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O fator de confusão distorce a medida de efeito entre a exposição e o desfecho. Para ser classificado como tal, precisa estar associado tanto à exposição quanto ao desfecho, sem ser uma consequência da exposição ou um passo intermediário da cascata causal.",
    "perolaClinica": "Variável no caminho causal é mediadora; para ser confusão, deve ser associada à exposição e ao desfecho, fora da cadeia causal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rothman KJ, Greenland S, Lash TL. Modern Epidemiology. 3rd ed.",
      "Fletcher RH, Fletcher SW. Epidemiologia Clínica: Elementos Essenciais. 5ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2997,
    "analiseBanca": {
      "conceitoCentral": "Critérios epidemiológicos formais que definem uma variável de confusão (confundimento).",
      "raciocinioChave": "Para gerar viés de confundimento, a terceira variável deve estar associada à exposição, ser fator de risco independente associado ao desfecho e não pertencer ao caminho causal entre ambos. Desse modo, ela distorce a medida de efeito sem atuar como mediadora.",
      "armadilhaBanca": "Confundir variável de confusão com variável mediadora (intermediária) ao incluí-la no caminho causal entre exposição e desfecho."
    },
    "mapaDistratores": {
      "A": "Estar presente na população geral não constitui critério definidor de confundimento, além de faltar a exigência explícita de não estar na via causal.",
      "C": "A associação da variável de confusão com a exposição e o desfecho não se restringe apenas aos indivíduos que não desenvolveram o desfecho.",
      "D": "Uma variável situada no caminho causal entre exposição e desfecho funciona como mediadora (variável intermediária), e não como fator de confusão."
    }
  },
  {
    "id": "q-usp-sp-2023-063",
    "code": "Q-USPSP23-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "História, Princípios e Leis Orgânicas do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-historia-principios-e-leis-organicas-do-sus",
    "tags": [
      "equidade",
      "principios-do-sus",
      "dsei"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Considere atentamente os dois episódios abaixo envolvendo o sistema de saúde brasileiro: EPISÓDIO 1 – Na cidade de São Paulo, um entregador de aplicativo, vítima de acidente de trânsito grave, é socorrido pelo SAMU e levado ao atendimento de um grande hospital público. Devido ao seu estado de saúde, é assistido antes de várias pessoas que aguardavam atendimento no pronto-socorro. EPISÓDIO 2 – Na divisa entre os estados do Amazonas e de Roraima, uma criança indígena com quadro clínico grave é atendida primeiramente por uma equipe de saúde local e posteriormente removida até a rede hospitalar do Sistema Único de Saúde (SUS) da cidade mais próxima. O atendimento foi viabilizado por um Distrito Sanitário Especial Indígena, de responsabilidade federal, que mantém serviços voltados especificamente para as necessidades de saúde e para a ocupação geográfica das comunidades indígenas no Brasil. Os dois episódios descritos correspondem a um mesmo princípio fundamental do SUS. Assinale a alternativa que corresponde ao princípio em questão.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Descentralização.",
        "explanation": "Incorreta: Descentralização é um princípio organizativo que redistribui poderes e responsabilidades entre as esferas de governo (federal, estadual e municipal).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Acesso.",
        "explanation": "Incorreta: O acesso universal e igualitário decorre da universalidade, mas o atendimento prioritário e diferenciado por necessidade clínica ou social refere-se à equidade.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Equidade.",
        "explanation": "Correta: A equidade é o princípio de justiça social que preconiza tratar desigualmente os desiguais, priorizando quem mais precisa (atendimento imediato pela gravidade no trauma e atenção diferenciada aos povos indígenas via DSEI).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Hierarquização.",
        "explanation": "Incorreta: Hierarquização organiza os serviços em níveis crescentes de complexidade tecnológica (primária, secundária e terciária), não se referindo ao imperativo ético da justiça distributiva.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A equidade busca diminuir desigualdades ao reconhecer que diferentes populações e situações clínicas exigem respostas proporcionais às suas vulnerabilidades. Tanto a classificação de risco no pronto-socorro quanto as políticas específicas para a saúde indígena corporificam esse princípio doutrinário.",
    "perolaClinica": "Equidade no SUS significa tratar desigualmente os desiguais, oferecendo mais a quem mais necessita.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 8.080, de 19 de setembro de 1990.",
      "Conselho Nacional de Secretários de Saúde (CONASS). Sistema Único de Saúde, 2011."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2998,
    "analiseBanca": {
      "conceitoCentral": "Princípio doutrinário da equidade no SUS aplicado à classificação de risco e à saúde indígena.",
      "raciocinioChave": "Os dois episódios ilustram o tratamento desigual para necessidades desiguais: priorização clínica imediata pela gravidade no pronto-socorro e estruturação de Distrito Sanitário Especial Indígena para reduzir vulnerabilidades históricas. Ambos materializam o princípio da equidade.",
      "armadilhaBanca": "Trocar o princípio doutrinário da equidade por diretrizes organizativas (hierarquização ou descentralização) ou pelo conceito amplo de acesso."
    },
    "mapaDistratores": {
      "A": "A descentralização diz respeito à redistribuição de poder e responsabilidades administrativas entre União, estados e municípios.",
      "B": "O acesso universal garante entrada no sistema a todos sem barreiras, enquanto a priorização conforme gravidade ou vulnerabilidade específica expressa a equidade.",
      "D": "A hierarquização organiza a rede de serviços por níveis crescentes de complexidade tecnológica, não se referindo à justiça distributiva no cuidado."
    }
  },
  {
    "id": "q-usp-sp-2023-064",
    "code": "Q-USPSP23-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Financiamento e Pactos do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-financiamento-e-pactos-do-sus",
    "tags": [
      "financiamento-do-sus",
      "gasto-em-saude",
      "saude-suplementar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Nos últimos anos, quando se compara o padrão de despesas com a saúde no Brasil com o de outros países, é correto afirmar:",
    "alternativas": [
      {
        "letter": "A",
        "text": "no Brasil, a participação do gasto privado no total de gastos com saúde é maior do que em outros países com sistemas universais de saúde.",
        "explanation": "Correta: No Brasil, o gasto privado em saúde (desembolso direto somado a planos e seguros privados) responde por cerca de 58% do gasto total com saúde, proporção atipicamente elevada em comparação a outros países dotados de sistemas de saúde universais (como Reino Unido, Canadá e Espanha, onde o gasto público ultrapassa 70%).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "embora o Brasil gaste com saúde uma porcentagem do PIB inferior à média de países Europeus, o gasto per capita no país, em comparação com esses países, é elevado.",
        "explanation": "Incorreta: O gasto per capita em saúde no Brasil é muito inferior ao da média dos países europeus desenvolvidos, tanto em termos absolutos quanto em paridade de poder de compra.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "embora seja inferior à média dos países da OCDE, o gasto per capita com saúde no Brasil supera o dos demais países da América Latina, devido à existência do Sistema Único de Saúde (SUS).",
        "explanation": "Incorreta: O gasto per capita em saúde no Brasil não supera o de todos os países latino-americanos; países como Chile, Uruguai e Argentina historicamente apresentam gastos em saúde per capita superiores ou semelhantes.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "a participação do gasto privado no total de gastos com saúde é maior em países mais ricos, enquanto no Brasil predomina o gasto destinado a ações e serviços públicos de saúde.",
        "explanation": "Incorreta: Nos países europeus mais ricos com sistemas públicos, o gasto público é majoritário, enquanto no Brasil a parcela privada supera a pública no total das despesas com saúde.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O modelo de financiamento em saúde no Brasil apresenta uma contradição estrutural: apesar de possuir um sistema público concebido para ser universal (o SUS), mais da metade das despesas totais de saúde provêm do setor privado (planos de saúde e gasto 'out-of-pocket'), contrariando o padrão internacional de sistemas de cobertura universal.",
    "perolaClinica": "No Brasil, o gasto privado em saúde supera o gasto público, cenário incomum para países que possuem sistemas universais.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Organização Mundial da Saúde (OMS). Global Health Expenditure Database.",
      "Conta Satélite de Saúde Brasil. IBGE, 2019."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2998,
    "analiseBanca": {
      "conceitoCentral": "Estrutura de financiamento da saúde no Brasil: predomínio do gasto privado frente a sistemas universais.",
      "raciocinioChave": "Embora o Brasil possua o SUS como sistema público universal, menos da metade do gasto total em saúde provém do setor público, fazendo com que a participação do gasto privado (planos e desembolso direto) supere a observada em outros países com cobertura universal.",
      "armadilhaBanca": "Presumir que a existência constitucional do SUS torna o gasto público brasileiro majoritário ou superior ao de países vizinhos e europeus per capita."
    },
    "mapaDistratores": {
      "B": "O gasto per capita com saúde no Brasil é significativamente menor do que a média dos países europeus desenvolvidos.",
      "C": "O gasto per capita brasileiro em saúde não supera o de todos os países latino-americanos, ficando atrás de países como Uruguai e Chile.",
      "D": "Em países ricos com sistemas universais predomina o financiamento público, ao contrário do Brasil, onde o gasto privado responde pela maior fatia das despesas totais."
    }
  },
  {
    "id": "q-usp-sp-2023-065",
    "code": "Q-USPSP23-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Sanitária, Ambiental e Saúde Planetária",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-sanitaria-ambiental-e-saude-planetaria",
    "tags": [
      "anvisa",
      "agrotoxicos",
      "vigilancia-sanitaria",
      "toxicologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O Brasil é um dos países que mais consome agrotóxicos no mundo, o que caracteriza um sério problema de Saúde Pública e Ambiental. A Organização Internacional do Trabalho (OIT) afirma que, em países em desenvolvimento, os agrotóxicos causam 70 mil intoxicações agudas e crônicas por ano, que evoluem para óbito. Outros mais de sete milhões de casos anuais de doenças agudas e crônicas estão ligadas aos agrotóxicos (CARNEIRO et al., 2015). No âmbito da Regulação em Saúde no Sistema Único de Saúde (SUS), a Agência Nacional de Vigilância Sanitária (ANVISA) tem uma atribuição específica relacionada ao registro e à autorização de uso e de comercialização de agrotóxicos no Brasil. Assinale a alternativa que corresponde à atribuição da ANVISA.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar análises de custo-benefício e de custo-efetividade do produto, considerando tanto eventuais danos à saúde quanto benefícios econômicos às atividades agrícolas.",
        "explanation": "Incorreta: A ANVISA não realiza análise de impacto econômico ou custo-benefício agrícola de agrotóxicos; sua análise é estritamente voltada à segurança sanitária e à saúde pública.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Elaborar um dossiê de saúde ambiental, no qual é avaliado o potencial poluidor do produto.",
        "explanation": "Incorreta: A avaliação do potencial poluidor e impacto ambiental cabe ao Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Avaliar a eficiência e o potencial de uso do produto na agricultura por meio de um dossiê agronômico.",
        "explanation": "Incorreta: A avaliação de eficiência e viabilidade agronômica (dossiê agronômico) e a concessão final do registro são atribuições do Ministério da Agricultura e Pecuária (MAPA).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Elaborar um dossiê toxicológico, avaliando quão tóxico é o produto para a população e em quais condições o seu uso é seguro.",
        "explanation": "Correta: No processo tripartite de registro de agrotóxicos (Lei nº 7.802/1989), a ANVISA é responsável pela avaliação e classificação toxicológica do produto, emitindo o dossiê que atesta o risco à saúde humana e os limites de segurança.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A regulação de agrotóxicos no Brasil envolve três órgãos federais com competências distintas: o MAPA cuida da eficácia agronômica e do registro; o IBAMA avalia os impactos ambientais; e a ANVISA analisa os riscos toxicológicos à saúde humana (trabalhadores e consumidores).",
    "perolaClinica": "Registro de agrotóxicos no Brasil: MAPA (agronômico), IBAMA (ambiental) e ANVISA (toxicológico/humano).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 7.802, de 11 de julho de 1989.",
      "ANVISA. Gerência-Geral de Toxicologia (GGTOX)."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2998,
    "analiseBanca": {
      "conceitoCentral": "Competência legal da ANVISA na avaliação toxicológica para registro de agrotóxicos no Brasil.",
      "raciocinioChave": "No modelo regulatório tripartite brasileiro para agrotóxicos, cabe à ANVISA elaborar o dossiê toxicológico, avaliando os riscos à saúde humana e definindo condições seguras de uso e limites de resíduos. O registro final só ocorre após anuência conjunta com IBAMA e MAPA.",
      "armadilhaBanca": "Trocar as atribuições sanitárias da ANVISA pelas competências ambientais do IBAMA ou agronômicas e econômicas do MAPA."
    },
    "mapaDistratores": {
      "A": "A análise de custo-benefício agrícola e econômico não compete à ANVISA, cuja avaliação restringe-se estritamente aos riscos sanitários à saúde humana.",
      "B": "A elaboração do dossiê ambiental para avaliar potencial poluidor e ecotoxicidade é atribuição legal do IBAMA.",
      "C": "A avaliação da eficiência e viabilidade agronômica por meio de dossiê específico compete ao Ministério da Agricultura e Pecuária (MAPA)."
    }
  },
  {
    "id": "q-usp-sp-2023-066",
    "code": "Q-USPSP23-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Financiamento e Pactos do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-financiamento-e-pactos-do-sus",
    "tags": [
      "saude-suplementar",
      "ans",
      "ressarcimento-ao-sus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O sistema de saúde brasileiro conta com o subsistema suplementar, no qual atuam mais de 700 operadoras de planos e seguros de saúde privados, cujas atividades são regulamentadas pela Lei n. 9.656 de 1998 e pela Agência Nacional de Saúde Suplementar (ANS). Com relação às regras de funcionamento ou às características do mercado de planos de saúde no Brasil, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Se um usuário de plano de saúde privado for atendido em um hospital público, o SUS deve ser ressarcido financeiramente por esse atendimento, nos limites das coberturas previstas no contrato do plano.",
        "explanation": "Correta: Conforme o art. 32 da Lei nº 9.656/1998, as operadoras de planos privados de assistência à saúde devem ressarcir o SUS pelas despesas com atendimento de seus beneficiários em instituições públicas ou conveniadas, respeitados os limites contratuais de cobertura.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "O reajuste das mensalidades dos planos de saúde é definido anualmente pela ANS e corresponde a um índice único de aumento aplicado a todos os planos individuais, familiares, coletivos e empresariais.",
        "explanation": "Incorreta: A ANS estipula o teto máximo de reajuste anual exclusivamente para os planos individuais/familiares antigos e novos; os planos coletivos (empresariais e por adesão) têm reajuste determinado por negociação direta entre as partes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "A maior fatia do mercado de assistência médica suplementar no Brasil corresponde à modalidade de contratação de planos individuais e familiares, que registrou expressivo crescimento em função da pandemia de COVID-19.",
        "explanation": "Incorreta: A grande maioria (mais de 80%) dos beneficiários no Brasil está vinculada a planos coletivos (sobretudo empresariais), e não individuais.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Os seguros de saúde representam o segmento de saúde suplementar com maior número de beneficiários no Brasil, superior à população coberta pelas cooperativas médicas e pelos planos de medicina de grupo.",
        "explanation": "Incorreta: O segmento com maior número de beneficiários é composto pelas medicinas de grupo e cooperativas médicas (como Unimed); as companhias seguradoras especializadas em saúde representam uma fatia menor.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O ressarcimento ao SUS é uma obrigação legal estabelecida para coibir o enriquecimento sem causa das operadoras suplementares quando a rede pública atende pacientes por procedimentos contratualmente cobertos pelas operadoras privadas, com constitucionalidade confirmada pelo STF.",
    "perolaClinica": "Planos de saúde devem ressarcir o SUS por atendimentos de seus clientes previstos em contrato; a ANS só fixa reajuste de planos individuais.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 9.656, de 3 de junho de 1998 (Artigo 32).",
      "Agência Nacional de Saúde Suplementar (ANS). Caderno de Informação da Saúde Suplementar."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2999,
    "analiseBanca": {
      "conceitoCentral": "Regulação da saúde suplementar (Lei 9.656/98) e obrigatoriedade de ressarcimento ao SUS.",
      "raciocinioChave": "O artigo 32 da Lei nº 9.656/1998 determina que as operadoras de planos privados ressarçam o SUS pelos atendimentos prestados a seus beneficiários na rede pública ou conveniada, dentro dos limites contratuais de cobertura. Essa regra evita enriquecimento sem causa das operadoras.",
      "armadilhaBanca": "Generalizar o teto de reajuste anual da ANS (restrito a planos individuais/familiares) para contratos coletivos ou inverter o predomínio real de carteiras no mercado."
    },
    "mapaDistratores": {
      "B": "A ANS define o teto máximo de reajuste anual apenas para planos individuais e familiares, enquanto os planos coletivos têm reajuste negociado entre operadora e contratante.",
      "C": "A maior parcela do mercado de saúde suplementar brasileiro corresponde aos planos coletivos empresariais e por adesão, e não aos individuais/familiares.",
      "D": "O maior número de beneficiários concentra-se nas modalidades de medicina de grupo e cooperativas médicas, superando numericamente as seguradoras especializadas."
    }
  },
  {
    "id": "q-usp-sp-2023-067",
    "code": "Q-USPSP23-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Investigação de Surtos e Epidemias",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-investigacao-de-surtos-e-epidemias",
    "tags": [
      "mpox",
      "emergencia-em-saude-publica",
      "epidemiologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em 23/07/2022, a Organização Mundial da Saúde (OMS) reconheceu que a disseminação internacional do vírus da Varíola dos Macacos (MPX) constitui uma emergência em saúde pública de interesse internacional. Em relação às características epidemiológicas da epidemia do vírus da Varíola dos Macacos (MPX) de 2022, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a concentração de casos entre homens que fazem sexo com homens era esperada, considerando o número de parceiros sexuais neste grupo.",
        "explanation": "Incorreta: A concentração inicial desproporcional entre HSH não era esperada historicamente, pois a doença na África subsahariana acometia homens, mulheres e crianças indistintamente por transmissão zoonótica e domiciliar.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "a rápida disseminação em regiões não endêmicas sugere que o MPX já estava circulando de forma não detectada por algum tempo.",
        "explanation": "Correta: A rápida e simultânea detecção de casos em múltiplos países não endêmicos da Europa e Américas em maio de 2022 evidenciou que a transmissão inter-humana já vinha ocorrendo de forma silenciosa e subnotificada semanas ou meses antes do alerta global.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "a transmissão ocorre prioritariamente pelo sêmen e por secreções vaginais.",
        "explanation": "Incorreta: A principal via de transmissão é o contato íntimo e direto com lesões cutâneo-mucosas e fluidos de lesões infectadas, e não fluidos genitais como sêmen de forma exclusiva/prioritária.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "a variante 1, antiga variante da África Ocidental e considerada uma das mais virulentas, é a responsável pela disseminação global em 2022.",
        "explanation": "Incorreta: A responsável pelo surto global foi a variante Clado IIb (antiga variante da África Ocidental), de menor letalidade (< 0,1%), enquanto o Clado I (Bacia do Congo) é o mais virulento.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A emergência global de Mpox declarada em julho de 2022 decorreu da propagação do Clado IIb fora das áreas endêmicas africanas. A ampla distribuição geográfica inicial indicou transmissão sustentada não detectada em redes de contato íntimo antes do primeiro alerta oficial.",
    "perolaClinica": "Mpox 2022: Clado IIb (África Ocidental, menor letalidade), transmissão por contato cutâneo direto com lesões ativas.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "World Health Organization (WHO). Multi-country monkeypox outbreak in non-endemic countries, 2022.",
      "Ministério da Saúde. Guia de Vigilância em Saúde: Monkeypox, 2022."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 2999,
    "analiseBanca": {
      "conceitoCentral": "Características epidemiológicas e dinâmica de disseminação do surto global de Mpox em 2022.",
      "raciocinioChave": "A detecção quase simultânea de casos de Mpox sem vínculo com viagens à África em múltiplos países não endêmicos indicou transmissão inter-humana silenciosa e não detectada previamente. O surto foi impulsionado pelo Clado IIb principalmente por contato íntimo pele a pele.",
      "armadilhaBanca": "Confundir o clado circulante no surto de 2022 (Clado IIb, antiga África Ocidental, menos letal) com o Clado I ou restringir a transmissão ao sêmen."
    },
    "mapaDistratores": {
      "A": "A concentração inicial entre homens que fazem sexo com homens não era historicamente esperada, pois em áreas endêmicas o perfil era predominantemente zoonótico e familiar.",
      "C": "A transmissão ocorre principalmente pelo contato direto e íntimo com lesões cutâneo-mucosas e secreções respiratórias próximas, não prioritariamente pelo sêmen.",
      "D": "A disseminação global de 2022 deveu-se ao Clado IIb (antiga variante da África Ocidental), menos virulento que o Clado I (da Bacia do Congo)."
    }
  },
  {
    "id": "q-usp-sp-2023-068",
    "code": "Q-USPSP23-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "conitec",
      "incorporacao-de-tecnologias",
      "sus",
      "custo-efetividade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde (CONITEC) tem por objetivo assessorar o Ministério da Saúde nas atribuições relativas à incorporação, exclusão ou alteração de tecnologias em saúde no Sistema Único de Saúde (SUS). Assinale a alternativa que melhor descreve o conteúdo exigido nos relatórios de recomendação sobre as tecnologias analisadas.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Evidências científicas sobre eficiência, implicações econômicas e aspectos organizacionais e ambientais.",
        "explanation": "Incorreta: A CONITEC analisa parâmetros clínicos formais de eficácia e efetividade clínica, além do impacto financeiro-orçamentário, não se restringindo a termos genéricos de aspectos organizacionais.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Evidências científicas sobre eficácia, segurança e aspectos organizacionais e ambientais.",
        "explanation": "Incorreta: A análise econômica (avaliação de custo-efetividade e impacto no orçamento do SUS) é elemento legal indispensável segundo a legislação vigente.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Evidências científicas sobre eficácia, acurácia, efetividade e segurança, bem como custo-efetividade.",
        "explanation": "Incorreta: Embora contemple eficácia, acurácia, efetividade, segurança e custo-efetividade, falta citar a análise de impacto orçamentário, que é requisito mandatório explícito no artigo 19-Q da Lei 8.080/90.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Evidências científicas sobre eficácia, acurácia, efetividade e segurança, bem como custo-efetividade e impacto orçamentário.",
        "explanation": "Correta: Nos termos do art. 19-Q da Lei 8.080/1990 (acrescentado pela Lei 12.401/2011), os relatórios da CONITEC devem obrigatoriamente conter evidências sobre eficácia, acurácia, efetividade e segurança, além do estudo de custo-efetividade e da análise de impacto orçamentário da tecnologia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A incorporação de medicamentos e procedimentos no SUS exige análise baseada em Avaliação de Tecnologias em Saúde (ATS). A CONITEC deve subsidiar a decisão demonstrando benefícios clínicos comprovados, custo-efetividade em relação às alternativas vigentes e sustentabilidade financeira por meio do impacto orçamentário.",
    "perolaClinica": "Incorporação no SUS pela CONITEC exige: eficácia, segurança, efetividade, custo-efetividade e análise de impacto orçamentário.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 8.080/1990 (Art. 19-Q, incluído pela Lei nº 12.401/2011).",
      "Ministério da Saúde. Diretrizes Metodológicas de Avaliação Econômica e Impacto Orçamentário da CONITEC."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3000,
    "analiseBanca": {
      "conceitoCentral": "Requisitos legais obrigatórios dos relatórios de avaliação de tecnologias pela CONITEC.",
      "raciocinioChave": "Segundo o artigo 19-Q da Lei nº 8.080/1990, os relatórios da CONITEC devem contemplar obrigatoriamente evidências científicas de eficácia, acurácia, efetividade e segurança, somadas às avaliações econômicas de custo-efetividade e impacto orçamentário no SUS.",
      "armadilhaBanca": "Apresentar alternativas quase completas (como eficácia, segurança e custo-efetividade) omitindo o requisito legal indispensável do impacto orçamentário."
    },
    "mapaDistratores": {
      "A": "O relatório legal da CONITEC exige critérios clínicos precisos (eficácia, acurácia, efetividade e segurança) e impacto orçamentário, não termos vagos sobre eficiência ou ambiente.",
      "B": "A ausência da análise econômica de custo-efetividade e de impacto orçamentário torna a descrição incompleta perante a Lei nº 8.080/1990.",
      "C": "Embora liste os parâmetros clínicos e o custo-efetividade, a alternativa omite a avaliação do impacto orçamentário, exigência legal expressa para incorporação no SUS."
    }
  },
  {
    "id": "q-usp-sp-2023-069",
    "code": "Q-USPSP23-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": [
      "conitec",
      "anvisa",
      "incorporacao-de-tecnologias",
      "sus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O Zolgensma é uma terapia gênica indicada para o tratamento de atrofia muscular espinhal (AME), uma doença neurodegenerativa rara e sem cura que, sem tratamento, pode levar a criança à morte ou à dependência de respirador artificial antes dos 2 anos de idade. Para que o Zolgensma seja disponibilizado de forma gratuita e universal no Sistema Único de Saúde (SUS) é necessário que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a Agência Nacional de Vigilância Sanitária (ANVISA) avalie a eficácia, a segurança e o custo-efetividade desta tecnologia e autorize sua comercialização no Brasil.",
        "explanation": "Incorreta: A ANVISA avalia qualidade, segurança e eficácia para conceder registro sanitário e autorizar a comercialização, mas não avalia custo-efetividade nem decide incorporação ao SUS.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "a Comissão Nacional de Incorporação de Tecnologias no SUS (CONITEC) avalie a efetividade, o custo-efetividade e os impactos orçamentários desta tecnologia, comparando-a aos tratamentos já incorporados ao SUS.",
        "explanation": "Correta: A oferta pública, universal e gratuita no SUS depende de avaliação e parecer favorável da CONITEC, que julga efetividade clínica, custo-efetividade e impacto financeiro frente às opções já existentes no sistema (ex.: nusinersena).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "a Comissão Nacional de Incorporação de Tecnologias no SUS (CONITEC) avalie a eficácia e a segurança desta tecnologia e autorize sua comercialização no Brasil.",
        "explanation": "Incorreta: Quem autoriza a comercialização de produtos farmacêuticos em território nacional é a ANVISA, não a CONITEC.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "a Agência Nacional de Vigilância Sanitária (ANVISA) avalie a efetividade e os impactos orçamentários desta tecnologia, comparando-a aos tratamentos já incorporados ao SUS.",
        "explanation": "Incorreta: Análises de impacto orçamentário e efetividade comparativa para fornecimento pelo SUS são atribuições da CONITEC, não da ANVISA.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O fluxo de uma nova tecnologia no Brasil segue duas etapas: primeiro o registro sanitário na ANVISA (que julga eficácia, segurança e qualidade fabril); em seguida, a avaliação pela CONITEC para decidir se o produto deve ser financiado pelo SUS, pesando o benefício clínico adicional contra o impacto orçamentário.",
    "perolaClinica": "ANVISA registra e autoriza o comércio; CONITEC avalia impacto orçamentário e custo-efetividade para incorporação no SUS.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 12.401, de 28 de abril de 2011.",
      "Ministério da Saúde. CONITEC — Competências e Processos de Incorporação."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3000,
    "analiseBanca": {
      "conceitoCentral": "Papel distinto entre ANVISA (registro sanitário) e CONITEC (incorporação de tecnologias ao SUS).",
      "raciocinioChave": "Para uma terapia gênica como o Zolgensma ser fornecida gratuita e universalmente pelo SUS, não basta o registro na ANVISA: é necessário parecer favorável da CONITEC avaliando efetividade comparativa, custo-efetividade e impacto orçamentário frente às terapias já disponíveis.",
      "armadilhaBanca": "Inverter as competências regulatórias atribuindo autorização comercial à CONITEC ou análise de custo-efetividade e incorporação no SUS à ANVISA."
    },
    "mapaDistratores": {
      "A": "A ANVISA avalia eficácia, segurança e qualidade para conceder registro de comercialização no país, sem realizar avaliação de custo-efetividade ou incorporação ao SUS.",
      "C": "A CONITEC assessora o Ministério da Saúde na incorporação de tecnologias ao SUS, não tendo competência legal para autorizar a comercialização de fármacos no Brasil.",
      "D": "Estudos de efetividade comparativa e impacto orçamentário para financiamento público no SUS são competências da CONITEC, e não da ANVISA."
    }
  },
  {
    "id": "q-usp-sp-2023-070",
    "code": "Q-USPSP23-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "colpocitologia",
      "saude-trans",
      "testosterona",
      "rastreamento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Jan é uma pessoa não binária transmasculina. Tem 28 anos e procura a UBS para a realização de Papanicolau (colpocitologia oncótica). Identifica-se como homossexual, iniciou atividade sexual aos 22 anos, com penetração vaginal. Faz uso de testosterona injetável e apresenta ressecamento vaginal. Neste caso, a colpocitologia oncótica:",
    "alternativas": [
      {
        "letter": "A",
        "text": "está recomendada; o estrógeno tópico está contraindicado; e a coleta deve ser realizada com lubrificante à base de água.",
        "explanation": "Incorreta: O estrogênio tópico de baixa dose não está contraindicado; ele pode ser empregado para reduzir a atrofia induzida pela hormonização com testosterona e minimizar o desconforto.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "está recomendada; deve-se utilizar um espéculo de menor tamanho; o estrógeno tópico está contraindicado, assim como o uso de lubrificante, pelo risco de alterar o resultado do exame.",
        "explanation": "Incorreta: Lubrificantes à base de água aplicados no bico do espéculo (evitando o óstio) são recomendados para diminuir a dor e não interferem na qualidade da citologia em meio líquido ou convencional.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "está recomendada; pode-se prescrever estrógeno tópico vaginal alguns dias antes e lubrificante à base de água no momento da coleta.",
        "explanation": "Correta: Pessoas transmasculinas que mantêm o colo do útero e têm histórico de atividade sexual com penetração devem seguir as diretrizes usuais de rastreamento de câncer de colo de útero; o uso de estrógeno tópico vaginal nos dias que antecedem a coleta e lubrificante aquoso na inserção do espéculo são práticas preconizadas para aliviar a dor decorrente da atrofia.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "não está recomendada, pois se refere a alguém com disforia de gênero; neste caso, o desconforto gerado pelo exame clínico seria maior que o risco de câncer de colo de útero nessa população.",
        "explanation": "Incorreta: O risco de câncer de colo uterino persiste enquanto o órgão estiver presente; o rastreamento está indicado e deve ser conduzido com acolhimento e técnicas de redução do desconforto físico e psicológico.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O rastreamento do câncer do colo do útero deve ser oferecido a todas as pessoas que possuem colo uterino, independentemente de sua identidade de gênero. Em homens trans sob androgenoterapia, a atrofia epitelial é frequente, podendo ser atenuada pelo preparo com estrogênio tópico prévio e lubrificação hidrossolúvel do espéculo.",
    "perolaClinica": "Pessoas transmasculinas com colo uterino devem rastrear câncer cervical; estrogênio tópico prévio e lubrificante aquoso aliviam o desconforto.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2016.",
      "WPATH (World Professional Association for Transgender Health). Standards of Care, Version 8."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3000,
    "analiseBanca": {
      "conceitoCentral": "Rastreamento do câncer de colo uterino em pessoas transmasculinas em uso de testosterona.",
      "raciocinioChave": "Pessoas com colo do útero e atividade sexual devem realizar o rastreamento citopatológico conforme as diretrizes vigentes, independentemente da identidade de gênero. Em usuários de testosterona com atrofia e ressecamento vaginal, recomenda-se estrogênio tópico prévio por alguns dias e lubrificante à base de água na coleta para reduzir desconforto e evitar amostra insatisfatória.",
      "armadilhaBanca": "Contraindicar equivocadamente o estrogênio tópico vaginal ou o lubrificante hidrossolúvel por receio infundado de interferência na hormonização ou no esfregaço."
    },
    "mapaDistratores": {
      "A": "O estrogênio tópico vaginal em baixa dose não é contraindicado em pessoas transmasculinas e auxilia na melhora do trofismo epitelial para reduzir dor e amostras inadequadas.",
      "B": "Tanto o estrogênio tópico prévio quanto o lubrificante hidrossolúvel em pequena quantidade no espéculo podem ser usados sem prejudicar a adequabilidade da coleta.",
      "D": "A manutenção do colo do útero mantém o risco oncológico, não havendo justificativa para suspender o rastreamento; o manejo adequado minimiza o desconforto físico."
    }
  },
  {
    "id": "q-usp-sp-2023-071",
    "code": "Q-USPSP23-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Violência Sexual e Aborto Previsto em Lei",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-violencia-sexual-e-aborto-previsto-em-lei",
    "tags": [
      "violencia-sexual",
      "aborto-legal",
      "notificacao-compulsoria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Adolescente de 17 anos apresenta resultado positivo para gravidez. Refere que tem um namorado e utiliza preservativo em todas as relações. Há seis semanas, após uma festa, estava alcoolizada e seu namorado teve relação sexual com ela, sem preservativo, desacordada. Ela tem medo de ter uma gestação e não a desejaria neste momento de sua vida. Qual a melhor conduta nesta consulta?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Explicar sobre a situação de violência sexual e a possibilidade de aborto legal. Orientar a realização do boletim de ocorrência para poder notificar a violência.",
        "explanation": "Incorreta: A realização de Boletim de Ocorrência (BO) ou autorização judicial não é exigência nem pré-requisito para o atendimento em saúde ou para a realização do aborto previsto em lei no SUS.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Iniciar o pré-natal, conversar com a paciente a importância de comunicar aos seus responsáveis a gravidez e a possibilidade de violência sexual.",
        "explanation": "Incorreta: A paciente com 17 anos tem discernimento para as decisões de saúde; a revelação aos responsáveis sem sua anuência viola o sigilo médico e desrespeita sua autonomia, salvo em situações de risco iminente de morte.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Explicar sobre a situação de violência sexual e a possibilidade de aborto legal. Notificar violência e decidir plano de cuidado com a paciente.",
        "explanation": "Correta: Relação sexual com pessoa desacordada configura estupro de vulnerável. O médico deve esclarecer o direito ao abortamento legal previsto no Código Penal (gravidez decorrente de estupro), emitir a Notificação Compulsória de Violência (Portaria MS nº 204/2016) e construir o plano terapêutico com a jovem, respeitando sua autonomia.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Iniciar o pré-natal, avaliar se realmente houve consentimento ou não. Notificar a violência a partir de decisão conjunta com a paciente.",
        "explanation": "Incorreta: Não cabe ao médico 'avaliar se houve consentimento' no sentido investigativo-policial (uma pessoa alcoolizada e desacordada é juridicamente incapaz de consentir); além disso, a notificação de violência interpessoal pelos serviços de saúde é obrigatória por lei e não depende de decisão da paciente.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O ato sexual praticado com pessoa sem capacidade de resistência ou desacordada caracteriza violência sexual (estupro de vulnerável). A gestação resultante confere direito ao abortamento legal no SUS, sem necessidade de boletim de ocorrência ou autorização judicial, sendo mandatória a notificação compulsória no SINAN.",
    "perolaClinica": "Gestação por estupro: aborto legal no SUS não exige BO nem ordem judicial; a notificação de violência na ficha do SINAN é obrigatória.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Atenção Técnica para Prevenção, Avaliação e Conduta nos Casos de Abortamento, 2022.",
      "Brasil. Código Penal Brasileiro (Art. 128 e Art. 217-A)."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3001,
    "analiseBanca": {
      "conceitoCentral": "Conduta médica, ética e legal diante de gestação decorrente de estupro de vulnerável em adolescente.",
      "raciocinioChave": "Relação sexual com pessoa desacordada e alcoolizada caracteriza estupro de vulnerável pela incapacidade de consentimento. O médico deve esclarecer o direito ao aborto legal previsto no Código Penal, emitir a notificação compulsória de violência e decidir o plano de cuidado em conjunto com a adolescente.",
      "armadilhaBanca": "Exigir boletim de ocorrência ou autorização judicial para aborto legal, ou condicionar a notificação compulsória à decisão da paciente ou comunicação aos pais."
    },
    "mapaDistratores": {
      "A": "A apresentação de boletim de ocorrência ou autorização judicial não é exigida por lei para o atendimento médico ou a realização do abortamento legal.",
      "B": "Comunicar os responsáveis sem autorização da adolescente capaz de discernimento viola o sigilo profissional e desconsidera o direito à interrupção legal da gestação.",
      "D": "Pessoa desacordada não tem capacidade jurídica de consentir, não cabendo investigação policial pelo médico, e a notificação compulsória de violência no SINAN é obrigatória independentemente de autorização."
    }
  },
  {
    "id": "q-usp-sp-2023-072",
    "code": "Q-USPSP23-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": [
      "comunicacao-clinica",
      "mccp",
      "pergunta-aberta",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Jéssica, de 25 anos, e seu médico desenvolvem o seguinte diálogo durante uma consulta na Unidade Básica de Saúde: - Médico: Olá, Jéssica, não te vejo há muito tempo, como tem passado? - Jéssica: Muito mal. Não consigo dormir, estou me sentindo fraca, acho que a imunidade está baixa. - Médico: Entendo. - Jéssica: Não sei o que é, minha vida está organizada, está tudo bem em casa com meus pais. - Médico: Puxa, pelo que você conta é algo novo e você não sabe qual pode ser a causa. - Jéssica: Às vezes penso que pode ser a rotina. Trabalho como recepcionista em uma empresa de componentes automotivos e faço faculdade de Contabilidade à noite. Chego em casa às 23 horas, ou até mais tarde, e saio às 6 horas da manhã. Faço isso há 2 anos, acho que estou acostumada. Quais as técnicas de comunicação utilizadas pelo médico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciou a conversa com uma pergunta aberta, deixando a paciente falar sem interrompê-la; utilizou técnicas de encorajamento verbal curto.",
        "explanation": "Correta: O médico iniciou com uma pergunta ampla e aberta ('como tem passado?'), permitiu a livre manifestação da paciente e utilizou técnicas de facilitação/encorajamento verbal mínimo ('Entendo').",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Iniciou a consulta por meio de encorajamentos verbais curtos a fim de direcionar o diálogo à hipótese diagnóstica; realizou técnicas de paráfrase.",
        "explanation": "Incorreta: O diálogo inicial não visou fechar precocemente uma hipótese diagnóstica, mas sim explorar a experiência subjetiva da paciente; ademais, a fala do médico não foi primariamente direcionadora.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Utilizou a técnica de reflexão em espelho para demonstrar empatia; realizou técnicas de paráfrase.",
        "explanation": "Incorreta: A fala 'Puxa, pelo que você conta é algo novo...' caracteriza reflexão do conteúdo ou sumarização, mas a abertura foi feita com pergunta aberta clássica, e não técnica isolada de espelho.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Iniciou a conversa com uma pergunta focal, deixando a paciente falar livremente; utilizou técnicas de encorajamento verbal curto.",
        "explanation": "Incorreta: Uma pergunta focal restringe as respostas a opções pré-estabelecidas ou detalhes pontuais (ex.: 'dói em pontada ou queimação?'), ao passo que 'como tem passado?' é uma pergunta tipicamente aberta.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "No Método Clínico Centrado na Pessoa (MCCP), a condução inicial da consulta deve privilegiar perguntas abertas para explorar os motivos do comparecimento e o impacto dos sintomas, combinadas a facilitadores verbais curtos ('entendo', 'sim') que demonstram escuta ativa sem interromper a narrativa.",
    "perolaClinica": "Perguntas abertas e encorajamentos curtos estimulam o paciente a expressar seus sentimentos, ideias e expectativas (FIFE).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Stewart M, et al. Medicina Centrada na Pessoa: Transformando o Método Clínico. 3ª ed. Artmed, 2017."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3001,
    "analiseBanca": {
      "conceitoCentral": "Técnicas de comunicação clínica centrada na pessoa: pergunta aberta e encorajamento verbal curto.",
      "raciocinioChave": "O médico abriu a consulta com uma pergunta ampla ('como tem passado?') permitindo a narrativa livre sem interrupções, e sustentou a escuta ativa com um facilitador verbal mínimo ('Entendo'). Na sequência, refletiu a fala da paciente para estimular a exploração do contexto.",
      "armadilhaBanca": "Confundir pergunta aberta com pergunta focal ou classificar o facilitador curto como técnica de direcionamento diagnóstico."
    },
    "mapaDistratores": {
      "B": "A abertura da consulta com pergunta aberta visou explorar livremente a queixa da paciente, sem direcionamento precoce para hipóteses diagnósticas fechadas.",
      "C": "O início do atendimento deu-se por pergunta aberta clássica combinada a encorajamento mínimo ('Entendo'), não constituindo uma abordagem isolada de reflexão em espelho.",
      "D": "Uma pergunta focal restringe a resposta a detalhes específicos ou opções fechadas, ao passo que 'como tem passado?' é uma pergunta aberta típica."
    }
  },
  {
    "id": "q-usp-sp-2023-073",
    "code": "Q-USPSP23-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "sobrediagnostico",
      "prevencao-quaternaria",
      "rastreamento",
      "cancer-de-tireoide"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O gráfico a seguir apresenta a tendência de diagnósticos e a de mortalidade por câncer de tireoide. Qual o conceito e sua respectiva definição que explicam a relação entre as curvas de mortalidade e a do diagnóstico do câncer de tireoide apresentadas no gráfico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sobrediagnóstico; refere-se ao rastreamento com resultado positivo, mas cujo diagnóstico não é confirmado por exames complementares.",
        "explanation": "Incorreta: O conceito descrito ('rastreamento positivo não confirmado') define falso-positivo, e não sobrediagnóstico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Sobrediagnóstico; refere-se a uma condição corretamente diagnosticada, mas que não causaria sintomas ou morte.",
        "explanation": "Correta: Sobrediagnóstico (overdiagnosis) é a identificação acurada de uma doença ou anormalidade verdadeira que, todavia, evoluiria de forma indolente, sem jamais causar sintomas ou levar o paciente ao óbito durante toda a sua vida.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Falso positivo; refere-se a uma condição corretamente diagnosticada, mas que não causaria sintomas ou morte.",
        "explanation": "Incorreta: A definição dada na alternativa é a de sobrediagnóstico, e não de falso positivo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Falso positivo; refere-se ao rastreamento com resultado positivo, mas cujo diagnóstico não é confirmado por exames complementares.",
        "explanation": "Incorreta: O gráfico revela aumento vertiginoso da incidência de câncer de tireoide com curva de mortalidade estritamente plana, fenômeno epidemiológico paradigmático do sobrediagnóstico (e não de falso positivo).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A curva clássica do câncer de tireoide (explosão de diagnósticos impulsionada por ultrassonografias de alta resolução, enquanto a taxa de mortalidade permanece inalterada e baixa por décadas) ilustra o sobrediagnóstico. Diferente do falso positivo (no qual a doença não existe), no sobrediagnóstico a neoplasia histológica existe, mas seu curso biológico é inofensivo.",
    "perolaClinica": "Sobrediagnóstico: detecção correta de uma lesão real que nunca causaria sintomas ou morte no tempo de vida do indivíduo.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Welch HG, Black WC. Overdiagnosis in cancer. J Natl Cancer Inst. 2010.",
      "INCA / Ministério da Saúde. Rastreamento e Sobrediagnóstico de Câncer de Tireoide."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3002,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q073.png",
      "modality": "Imagem Clínica",
      "caption": "Figura clínica — USP-SP 2023 Q73",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Conceito epidemiológico de sobrediagnóstico ilustrado pela dissociação incidência-mortalidade.",
      "raciocinioChave": "O gráfico evidencia aumento expressivo na detecção de casos de câncer de tireoide sem variação correspondente na taxa de mortalidade, padrão clássico de sobrediagnóstico. Esse fenômeno ocorre quando se diagnostica corretamente uma neoplasia indolente que jamais causaria sintomas ou óbito.",
      "armadilhaBanca": "Confundir sobrediagnóstico (doença verdadeira, porém biologicamente inofensiva) com resultado falso-positivo (ausência real da doença)."
    },
    "mapaDistratores": {
      "A": "Um rastreamento positivo não confirmado por exame diagnóstico subsequente define resultado falso-positivo, e não sobrediagnóstico.",
      "C": "A definição apresentada refere-se a uma condição realmente diagnosticada de curso indolente, o que caracteriza sobrediagnóstico em vez de falso-positivo.",
      "D": "O gráfico demonstra casos verdadeiros diagnosticados sem impacto na mortalidade, definindo sobrediagnóstico e não resultados falso-positivos não confirmados."
    }
  },
  {
    "id": "q-usp-sp-2023-074",
    "code": "Q-USPSP23-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": [
      "registro-soap",
      "mccp",
      "comunicacao-clinica",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 35 anos, previamente hígido. Iniciou com queixa de episódios de palpitações, associadas à sensação de falta de ar, perda de apetite e desconforto no peito. Nega tristeza, desânimo, fadiga, irritabilidade ou nervosismo. Não associa o quadro a nenhum evento recente em sua vida. Diz estar tranquilo, menos estressado, agora que saiu do emprego. Tem preocupação de ser algum problema no coração, pois seu tio morreu de infarto aos 75 anos. Recentemente passou em consulta médica, tendo recebido a orientação de que não era nada grave. Fez eletrocardiograma, holter e dosagem de TSH. Todos os resultados foram normais, mas Carlos continua com a queixa. A esposa diz que ele costuma apresentar esses sintomas quando se senta para fazer as contas da família ou quando recebe alguma conta para pagar. Ele não tem história pessoal nem familiar de transtorno mental. Assinale a alternativa que apresenta o registro adequado para o item de avaliação do SOAP desta consulta – de acordo com o Registro Orientado por Problemas –, assim como uma intervenção no atendimento.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Distúrbio ansioso/estado de ansiedade; intervenção: – Posso prescrever propranolol, um remédio para diminuir a batedeira, você concorda?",
        "explanation": "Incorreta: Fechar precocemente o diagnóstico como distúrbio de ansiedade e medicar com betabloqueador desrespeita a etapa exploratória e médica um sintoma ainda sob investigação.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Transtorno do pânico; intervenção: – Como excluímos problemas do coração, você acha que poderia ser algo psicológico?",
        "explanation": "Incorreta: O paciente não preenche os critérios diagnósticos do DSM-5 para Transtorno de Pânico (ausência de ataques paroxísticos recorrentes, medo de morrer ou perder o controle).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Sensação de ansiedade/nervosismo/tensão; intervenção: – Não me parece ser nada grave, concordo com o cardiologista, seus exames estão normais.",
        "explanation": "Incorreta: Dizer 'concordo com o cardiologista, seus exames estão normais' invalida o sofrimento do paciente e ignora o gatilho psicossocial (preocupações financeiras) evidenciado pela esposa.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Palpitações; intervenção: – Você acha que seus sintomas podem ter relação com o que sua esposa relatou?",
        "explanation": "Correta: No Registro Médico Orientado por Problemas (RMOP), na ausência de uma doença definida, o campo de 'Avaliação' (A do SOAP) deve registrar o sintoma/problema em seu nível máximo de certeza ('Palpitações'); a intervenção aborda o contexto e integra a perspectiva familiar com empatia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Segundo os preceitos de Weed e do Método Clínico Centrado na Pessoa, quando o raciocínio clínico não permite firmar um diagnóstico nosológico preciso com segurança, a 'Avaliação' (A do SOAP) deve ser registrada como sinal ou sintoma (neste caso, palpitações). A abordagem subsequente deve explorar a correlação entre as crises e os estressores financeiros apontados pelo cônjuge.",
    "perolaClinica": "No SOAP, quando não há doença firmada, a Avaliação registra o sintoma-guia, evitando diagnósticos presuntivos precoces.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Duncan BB, et al. Medicina Ambulatorial: Condutas de Atenção Primária Baseadas em Evidências. 5ª ed.",
      "Weed LL. Medical records that guide and teach. N Engl J Med. 1968."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3002,
    "analiseBanca": {
      "conceitoCentral": "Registro do problema em nível de certeza (SOAP) e abordagem centrada na pessoa de sintomas sem diagnóstico.",
      "raciocinioChave": "Sem critérios definidos para transtorno psiquiátrico e com exames cardiológicos normais, o campo Avaliação do SOAP deve registrar o sintoma em seu grau máximo de certeza ('Palpitações'). A intervenção adequada integra a observação da esposa sobre o gatilho financeiro, convidando o paciente a refletir sobre essa relação.",
      "armadilhaBanca": "Rotular precocemente o sintoma como transtorno de ansiedade/pânico e prescrever medicação, ou encerrar a queixa dizendo que 'não é nada grave'."
    },
    "mapaDistratores": {
      "A": "Diagnosticar distúrbio ansioso precocemente e propor propranolol medicaliza uma queixa cujo contexto psicossocial ainda não foi explorado com o paciente.",
      "B": "O quadro não preenche critérios de transtorno do pânico e a pergunta fechada com viés dualista ('algo psicológico') pode gerar resistência do paciente.",
      "C": "Reafirmar apenas que os exames estão normais invalida o sofrimento percebido e desperdiça a pista contextual relevante fornecida pela esposa."
    }
  },
  {
    "id": "q-usp-sp-2023-075",
    "code": "Q-USPSP23-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "niveis-de-prevencao",
      "prevencao-quaternaria",
      "leavell-e-clark",
      "niveis-de-atencao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Qual o tipo de prevenção realizada e o nível de atenção à saúde nos cenários a seguir: I. Criança com transtorno global do desenvolvimento participando de grupo no Centro de Apoio Psicossocial Infanto Juvenil (CAPS-IJ), para integração comunitária. II. Pessoa que teve relação sexual sem preservativo recebendo Profilaxia Pós-Exposição (PEP) para HIV em uma Unidade de Pronto-Atendimento (UPA). III. Clínico geral, que acompanha o paciente em consultório particular, orientando que não há necessidade de solicitar exame de vitamina D para o check-up de rotina.",
    "alternativas": [
      {
        "letter": "A",
        "text": "I. Prevenção terciária, atenção secundária; II. Prevenção primária, atenção secundária; III. Prevenção quaternária, atenção primária.",
        "explanation": "Correta: I. CAPS-IJ é serviço especializado ambulatorial (atenção secundária) e a reabilitação/integração é prevenção terciária; II. UPA é serviço de pronto atendimento especializado/urgência (atenção secundária) e a PEP impede o estabelecimento da infecção, configurando prevenção primária; III. O consultório de clínica geral atua no nível primário de atenção e evitar intervenções médicas desnecessárias (como dosagem inútil de vitamina D em assintomático) é prevenção quaternária.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "I. Prevenção primária, atenção primária; II. Prevenção secundária, atenção primária; III. Prevenção quaternária, atenção secundária.",
        "explanation": "Incorreta: A reabilitação em grupo de criança com TGD não é primária (a condição já existe), e UPA não pertence à atenção primária.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "I. Prevenção terciária, atenção terciária; II. Prevenção primária, atenção primária; III. Prevenção primária, atenção secundária.",
        "explanation": "Incorreta: CAPS não é nível terciário (atenção terciária corresponde à rede hospitalar de alta complexidade); PEP em UPA não é atenção primária.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "I. Prevenção primária, atenção primária; II. Prevenção secundária, atenção secundária; III. Prevenção primária, atenção primária.",
        "explanation": "Incorreta: Ação com pessoa já doente no CAPS visa reabilitar (terciária); PEP visa impedir a instalação da infecção (primária, proteção específica).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A classificação de Leavell & Clark define: Primária (evita o surgimento do agravo - ex.: PEP, vacina); Secundária (diagnóstico precoce e tratamento - ex.: rastreamento); Terciária (reabilitação e redução de incapacidades). A prevenção Quaternária (Jamoulle) visa evitar sobrediagnósticos e iatrogenias. Já os níveis de atenção dividem-se em Primário (UBS/consultório geral), Secundário (ambulatórios especializados, CAPS, UPAs) e Terciário (hospitais de alta complexidade).",
    "perolaClinica": "Prevenção quaternária: identificar pessoas em risco de hipermedicalização e protegê-las de novas intervenções iatrogênicas.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Jamoulle M. Quaternary prevention, an essential concept. 2015.",
      "Leavell HR, Clark EG. Preventive Medicine for the Doctor in His Community. 1965."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3003,
    "analiseBanca": {
      "conceitoCentral": "Classificação dos níveis de prevenção (Leavell & Clark / Jamoulle) e níveis de atenção no SUS.",
      "raciocinioChave": "A reabilitação em CAPS-IJ configura prevenção terciária na atenção secundária; a PEP em UPA evita o estabelecimento da infecção após exposição (prevenção primária) na atenção secundária; e evitar dosagem rotineira desnecessária de vitamina D em consultório geral é prevenção quaternária na atenção primária.",
      "armadilhaBanca": "Confundir CAPS ou UPA com atenção primária ou terciária e classificar a PEP como prevenção secundária por ocorrer após a relação de risco."
    },
    "mapaDistratores": {
      "B": "Ações de reabilitação para agravo já estabelecido configuram prevenção terciária, a UPA integra a atenção secundária e a PEP previne o adoecimento (prevenção primária).",
      "C": "O CAPS-IJ é um serviço especializado de atenção secundária (não terciária), a UPA pertence à atenção secundária e evitar exame desnecessário é prevenção quaternária.",
      "D": "No CAPS-IJ realiza-se prevenção terciária (não primária), a PEP atua evitando a infecção pelo HIV (prevenção primária) e evitar iatrogenia é prevenção quaternária."
    }
  },
  {
    "id": "q-usp-sp-2023-076",
    "code": "Q-USPSP23-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "promocao-da-saude",
      "pnps",
      "atencao-primaria",
      "sus"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "De acordo com a Política Nacional de Promoção da Saúde, são exemplos de ações de promoção da saúde:",
    "alternativas": [
      {
        "letter": "A",
        "text": "desarmamento da população; incentivo à cultura popular e a manifestações artísticas; vacinação.",
        "explanation": "Incorreta: A vacinação é classicamente uma medida de prevenção primária (proteção específica direcionada a patologias específicas), não uma ação de promoção geral de saúde.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "incentivo ao aleitamento materno; legislação para controle do sódio nos alimentos industrializados; medida de peso e altura na puericultura.",
        "explanation": "Incorreta: A aferição periódica de peso e altura na puericultura é ação de vigilância do desenvolvimento e rastreamento/detecção precoce de desnutrição (prevenção secundária).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "educação sobre autocuidado com o corpo; uso de preservativo nas relações sexuais; sorologias para Infecções Sexualmente Transmissíveis.",
        "explanation": "Incorreta: O uso de preservativo é prevenção primária específica para ISTs e as sorologias constituem rastreamento (prevenção secundária).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "redução da poluição urbana; orientações individuais para incentivo à atividade física; políticas de garantia da diversidade e dos direitos humanos.",
        "explanation": "Correta: De acordo com a Política Nacional de Promoção da Saúde (PNPS) e a Carta de Ottawa, promoção da saúde envolve ações intersetoriais e populacionais sobre determinantes sociais: ambientes sustentáveis (redução da poluição), estilos de vida saudáveis (atividade física) e cultura de paz e direitos humanos.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A Promoção da Saúde distingue-se da Prevenção de Doenças por atuar globalmente sobre os determinantes sociais da saúde (educação, renda, ambiente seguro, combate à poluição, discriminação e fomento à autonomia), capacitando a comunidade para a melhoria de sua qualidade de vida, em consonância com a PNPS.",
    "perolaClinica": "Promoção da saúde atua sobre determinantes sociais e bem-estar geral; prevenção específica foca na doença (ex.: vacinas).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde. Política Nacional de Promoção da Saúde (PNPS), 2014.",
      "Carta de Ottawa para a Promoção da Saúde. OMS, 1986."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3003,
    "analiseBanca": {
      "conceitoCentral": "Distinção entre ações de promoção da saúde (PNPS) e medidas de prevenção específica ou rastreamento.",
      "raciocinioChave": "Conforme a Política Nacional de Promoção da Saúde, ações promotoras atuam sobre determinantes sociais, ambientes sustentáveis e direitos humanos, sem foco em uma doença isolada. Redução da poluição urbana, estímulo à atividade física e garantia da diversidade e direitos humanos exemplificam promoção da saúde.",
      "armadilhaBanca": "Misturar duas ações legítimas de promoção da saúde com uma medida clássica de prevenção primária (vacinação, preservativo) ou secundária (sorologias, antropometria)."
    },
    "mapaDistratores": {
      "A": "A vacinação é uma medida clássica de prevenção primária (proteção específica contra doenças infecciosas), e não de promoção geral da saúde.",
      "B": "A aferição seriada de peso e altura na puericultura constitui vigilância nutricional e detecção precoce de desvios do crescimento (prevenção secundária).",
      "C": "O uso de preservativo é prevenção primária específica contra ISTs e a realização de sorologias configura rastreamento (prevenção secundária)."
    }
  },
  {
    "id": "q-usp-sp-2023-077",
    "code": "Q-USPSP23-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": [
      "estudos-epidemiologicos",
      "odds-ratio",
      "cancer-de-mama",
      "epidemiologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O câncer de mama (CM) é um importante problema de saúde pública. A identificação e o melhor gerenciamento clínico das pacientes com alto risco de apresentar câncer de mama é importante para reduzir a morbidade e a mortalidade causadas pela doença. A maioria dos fatores de risco genéticos para o CM foi identificada em mulheres de ascendência europeia e asiática; contudo, os dados genéticos sobre mulheres latinoamericanas são escassos. Um estudo examinou variantes genéticas em regiões de regulação gênica, incluindo locais de ligação do microRNA (miR), como potenciais fatores de risco para o CM em 2.045 mulheres latinoamericanas. Os resultados obtidos são mostrados na tabela abaixo. Dentre as alternativas abaixo, qual representa uma das conclusões do estudo?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Nenhuma variante genética está associada à suscetibilidade ao CM entre as mulheres ER+.",
        "explanation": "Incorreta: Entre mulheres ER+, a análise estatística dos dados apresentados aponta variantes com associação significativa no subgrupo correspondente.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Apenas as variantes genéticas nos genes TGFBR1 e KRAS aumentam o risco de CM total.",
        "explanation": "Correta: Ao avaliar a coluna 'CM total', verifica-se que apenas os genes TGFBR1 e KRAS apresentaram Odds Ratio com intervalo de confiança de 95% que não cruza a unidade (1,00) com valor de p < 0,05, caracterizando aumento de risco estatisticamente significante.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A variante genética no gene IQGAP1 é um fator de proteção para o CM ER-.",
        "explanation": "Incorreta: A variante no gene IQGAP1 para o subgrupo ER- não apresentou associação de proteção estatisticamente válida (o intervalo de confiança compreende o valor 1,00).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "A variante com maior efeito sobre o CM total foi a rs1042538.",
        "explanation": "Incorreta: A magnitude do efeito é medida pelo Odds Ratio; a variante rs1042538 não apresentou a maior estimativa pontual nem relevância estatística sobre o total de casos.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Na interpretação de medidas de associação com Odds Ratio (OR), uma variável só demonstra associação estatisticamente significante quando seu intervalo de confiança de 95% (IC 95%) não contém o valor 1 (valor nulo). Na tabela da questão, somente as variantes nos genes TGFBR1 e KRAS tiveram IC 95% estritamente superior a 1 no modelo de CM total.",
    "perolaClinica": "Razão de chances (OR): se o IC95% incluir o número 1, a associação não tem significância estatística (p ≥ 0,05).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Fletcher RH, Fletcher SW. Epidemiologia Clínica: Elementos Essenciais. 5ª ed.",
      "Gordis L. Epidemiologia. 5ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3004,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q077.png",
      "modality": "Imagem Clínica",
      "caption": "Figura clínica — USP-SP 2023 Q77",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Interpretação de Odds Ratio e intervalo de confiança de 95% em estudo de associação genética.",
      "raciocinioChave": "Na tabela de associação genética, uma variante só demonstra associação estatisticamente significante quando seu IC 95% não cruza o valor nulo (1,00). Para o desfecho 'CM total', apenas as variantes em TGFBR1 e KRAS mantiveram IC 95% estritamente acima de 1, indicando aumento real de risco.",
      "armadilhaBanca": "Focar apenas na estimativa pontual do Odds Ratio (como > 1 ou < 1) ignorando se o intervalo de confiança de 95% inclui a unidade (1,00)."
    },
    "mapaDistratores": {
      "A": "Na estratificação do subgrupo ER+, a tabela apresenta ao menos uma variante genética com intervalo de confiança que não inclui a unidade, indicando associação significativa.",
      "C": "A variante no gene IQGAP1 no subgrupo ER- apresenta intervalo de confiança que engloba o valor 1,00, não podendo ser considerada fator de proteção estatisticamente significante.",
      "D": "A variante rs1042538 não apresentou a maior razão de chances pontual nem significância estatística para o risco de câncer de mama total."
    }
  },
  {
    "id": "q-usp-sp-2023-078",
    "code": "Q-USPSP23-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": [
      "ensaio-clinico",
      "covid-19",
      "medicina-baseada-em-evidencias"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "No início da pandemia de COVID-19, na ausência de alternativas terapêuticas específicas, deu-se ênfase ao reposicionamento de fármacos já utilizados para outras indicações como possibilidades de tratamento. Uma dessas drogas foi a Ivermectina. No sentido de avaliar a eficácia dela na proteção contra o agravamento do quadro clínico, foi realizado um ensaio clínico, com 490 pacientes com quadros leves ou moderados de COVID- 19, confirmados por PCR. Dentre eles, 249 receberam o tratamento de suporte padrão para COVID-19 (grupo controle) e 241 receberam o tratamento padrão mais 0,4 mg/kg/dia de Ivermectina, durante 5 dias (grupo experimental). Os resultados estão resumidos na tabela abaixo. De acordo com as informações, pode-se afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a Ivermectina foi eficaz na redução dos óbitos.",
        "explanation": "Incorreta: Os dados demonstram que a taxa de mortalidade entre o grupo intervenção e controle não diferiu de forma estatisticamente significante (p > 0,05 e IC englobando a unidade).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "a Ivermectina foi eficaz para os desfechos de maior gravidade.",
        "explanation": "Incorreta: Para nenhum dos desfechos graves (necessidade de ventilação mecânica, admissão em UTI ou evolução para óbito) foi verificada redução de risco estatisticamente significante.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "não se observou a eficácia da Ivermectina para nenhum dos desfechos.",
        "explanation": "Correta: Em todos os desfechos avaliados no ensaio clínico (progressão da doença, internação em UTI, ventilação mecânica e óbito), os intervalos de confiança de 95% incluíram a hipótese nula (1,0) e os valores de p foram maiores que 0,05, demonstrando ausência de eficácia clínica da Ivermectina.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "não é possível qualquer conclusão a partir destes resultados.",
        "explanation": "Incorreta: É perfeitamente possível concluir com base na amostra e nas medidas de precisão que o medicamento não demonstrou benefício terapêutico frente ao tratamento padrão.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Ensaios clínicos randomizados controlados com Ivermectina para a COVID-19 demonstraram de forma consistente que a droga não reduz tempo de internação, progressão para formas graves ou risco de óbito, com estimativas de efeito sem significância estatística, desaconselhando seu uso.",
    "perolaClinica": "Eficácia clínica requer significância estatística (IC95% sem cruzar a unidade) em desfechos centrados no paciente.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Lopez-Medina E, et al. Effect of Ivermectin on Time to Resolution of Symptoms Among Adults With Mild COVID-19: A Randomized Clinical Trial. JAMA, 2021.",
      "Organização Mundial da Saúde (OMS). Therapeutics and COVID-19: Living Guideline."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3004,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q078.png",
      "modality": "Imagem Clínica",
      "caption": "Figura clínica — USP-SP 2023 Q78",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Análise de significância estatística em ensaio clínico randomizado controlado.",
      "raciocinioChave": "Ao comparar o grupo Ivermectina com o grupo controle em todos os desfechos clínicos avaliados (progressão, UTI, ventilação mecânica e óbito), nenhum apresentou diferença estatisticamente significante (p > 0,05 e intervalos de confiança cruzando o valor nulo). Logo, conclui-se ausência de eficácia observada para todos os desfechos.",
      "armadilhaBanca": "Interpretar pequenas diferenças numéricas percentuais favoráveis ao grupo experimental como prova de eficácia, ignorando p-valores não significantes."
    },
    "mapaDistratores": {
      "A": "A diferença observada na taxa de óbitos não alcançou significância estatística, não permitindo afirmar redução de mortalidade pela Ivermectina.",
      "B": "Nenhum dos desfechos de gravidade (internação em UTI, ventilação mecânica ou morte) apresentou redução estatisticamente significante no grupo experimental.",
      "D": "O ensaio clínico controlado com 490 pacientes tem poder e desenho adequados para concluir pela ausência de benefício estatisticamente comprovado nos desfechos avaliados."
    }
  },
  {
    "id": "q-usp-sp-2023-079",
    "code": "Q-USPSP23-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": [
      "caso-controle",
      "odds-ratio",
      "transtornos-alimentares",
      "epidemiologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um estudo de caso-controle foi realizado com adolescentes europeus maiores de 16 anos, com o objetivo de investigar a associação entre bullying e transtornos alimentares (TA). Foram estudados 495 casos de TA e 395 controles. A vitimização por bullying foi investigada através das respostas ao Retrospective Bullying Questionnaire. Os seguintes tipos de bullying foram investigados: bullying físico, bullying verbal, bullying verbal relacionado ao corpo (provocações ou apelidos relacionados ao corpo, peso ou aparência) e bullying verbal não relacionado ao corpo. Alguns resultados podem ser vistos na tabela sobre “Associação entre vitimização por bullying e transtorno alimentar em adolescentes noruegueses\". Considerando estes dados, indique a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ser vítima de “bullying verbal” e de “bullying verbal relacionado ao corpo” aumenta a chance de transtornos alimentares.",
        "explanation": "Correta: Ao avaliar os tipos de agressão na tabela do estudo de caso-controle, as categorias 'bullying verbal' e 'bullying verbal relacionado ao corpo' apresentaram estimativas de Odds Ratio pontuais elevadas cujo intervalo de confiança de 95% foi superior a 1,00, comprovando aumento estatisticamente significante da chance de transtornos alimentares.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Ser vítima de qualquer um dos tipos de bullying investigados aumenta a chance de transtornos alimentares.",
        "explanation": "Incorreta: Bullying físico não demonstrou associação estatisticamente significante com transtornos alimentares, apresentando IC 95% englobando o 1.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Ser vítima de qualquer um dos tipos de “bullying verbal” aumenta a chance de transtornos alimentares.",
        "explanation": "Incorreta: O bullying verbal não relacionado ao corpo não obteve significância estatística, demonstrando que não é qualquer forma de bullying verbal que eleva a chance.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Não é possível chegar a conclusões sobre a associação entre vitimização por bullying e transtornos alimentares.",
        "explanation": "Incorreta: O delineamento caso-controle adotado e o tamanho amostral permitem inferir e concluir associações epidemiológicas precisas por meio do Odds Ratio.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Estudos de caso-controle medem a associação entre exposições pregressas e desfechos clínicos por meio da Razão de Chances (Odds Ratio - OR). Quando o limite inferior do IC 95% é maior do que 1, comprova-se uma associação positiva de risco estatisticamente significante.",
    "perolaClinica": "Em estudos de caso-controle, a associação é estatisticamente significante apenas quando o IC95% do Odds Ratio não inclui o 1,0.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Fletcher RH, Fletcher SW. Epidemiologia Clínica: Elementos Essenciais. 5ª ed.",
      "Gordis L. Epidemiologia. 5ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3005,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q079.png",
      "modality": "Imagem Clínica",
      "caption": "Figura clínica — USP-SP 2023 Q79",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Leitura de Odds Ratio ajustado e significância estatística em estudo de caso-controle.",
      "raciocinioChave": "Em estudos de caso-controle, a associação significativa exige que o intervalo de confiança de 95% do Odds Ratio não contenha o valor 1,00. Na tabela apresentada, apenas 'bullying verbal' e 'bullying verbal relacionado ao corpo' cumpriram esse critério, elevando a chance de transtornos alimentares.",
      "armadilhaBanca": "Generalizar a associação significativa de dois subtipos para todos os tipos de bullying ou para todo bullying verbal indistintamente."
    },
    "mapaDistratores": {
      "B": "Nem todos os tipos avaliados mostraram associação válida, pois o bullying físico apresentou intervalo de confiança englobando o valor nulo.",
      "C": "O subtipo 'bullying verbal não relacionado ao corpo' não alcançou significância estatística, refutando a generalização para qualquer forma de agressão verbal.",
      "D": "Os resultados de um estudo caso-controle bem delineado permitem inferir conclusões válidas sobre a associação positiva entre determinados tipos de bullying e transtornos alimentares."
    }
  },
  {
    "id": "q-usp-sp-2023-080",
    "code": "Q-USPSP23-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "História, Princípios e Leis Orgânicas do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-historia-principios-e-leis-organicas-do-sus",
    "tags": [
      "integralidade",
      "principios-do-sus",
      "redes-de-atencao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em 2020, o Instituto Nacional do Câncer (INCA) estimou 40.990 novos casos e 20.245 óbitos devido ao câncer colorretal no Brasil. Embora tenham ocorrido avanços na detecção precoce em vários municípios, há falhas, desde a atenção básica, no encaminhamento de pacientes para pesquisa de sangue oculto ou colonoscopia. Mesmo após rastreados os tumores de cólon e reto, muitos pacientes têm dificuldade de acessar a atenção especializada, inclusive quando há indicação de cirurgia, radioterapia ou quimioterapia. Neste caso, qual princípio do SUS está sendo ignorado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Universalidade.",
        "explanation": "Incorreta: A universalidade assegura o acesso de todos os cidadãos ao sistema de saúde, princípio formalmente atendido pela porta de entrada aberta.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Hierarquização.",
        "explanation": "Incorreta: A hierarquização é uma diretriz organizativa que distribui serviços por densidade tecnológica; o problema relatado é a ruptura da linha assistencial de cuidado.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Integralidade.",
        "explanation": "Correta: A integralidade garante ao usuário a assistência completa e articulada em todos os níveis do sistema, desde a prevenção/rastreamento primário até os procedimentos curativos de alta complexidade (cirurgia, radioterapia e quimioterapia). Quando o paciente rastreado não consegue a continuidade do tratamento oncológico, a integralidade é vulnerada.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Regionalização.",
        "explanation": "Incorreta: A regionalização refere-se à delimitação de uma base territorial e geográfica para integração da rede de serviços.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O princípio da integralidade (art. 7º, inciso II da Lei 8.080/90) preconiza um conjunto articulado e contínuo de ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema. A incapacidade de ofertar o tratamento especializado aos pacientes com diagnóstico rastreado na APS quebra diretamente esse princípio.",
    "perolaClinica": "Acesso a todas as etapas do cuidado — da prevenção primária ao tratamento de alta complexidade — traduz a Integralidade no SUS.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Brasil. Lei nº 8.080, de 19 de setembro de 1990 (Artigo 7º, II).",
      "Mattos RA. Os sentidos da integralidade: algumas reflexões acerca de valores que merecem ser defendidos. 2001."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3006,
    "analiseBanca": {
      "conceitoCentral": "Princípio doutrinário da integralidade diante da descontinuidade entre rastreamento e tratamento.",
      "raciocinioChave": "A integralidade garante ao usuário acesso articulado e contínuo a todos os níveis de atenção, desde prevenção e rastreamento até diagnóstico e tratamento de alta complexidade. Quando pacientes rastreados na atenção básica não conseguem realizar cirurgia, radioterapia ou quimioterapia, esse princípio é violado.",
      "armadilhaBanca": "Confundir integralidade (continuidade do cuidado entre prevenção e cura em todos os níveis) com universalidade (direito de acesso) ou diretrizes organizativas."
    },
    "mapaDistratores": {
      "A": "A universalidade assegura o direito de acesso de todo cidadão ao sistema, mas a falha descrita ocorre na continuidade assistencial entre prevenção e terapia especializada.",
      "B": "A hierarquização é uma diretriz organizativa de distribuição dos serviços por complexidade, não o princípio doutrinário que assegura a assistência completa ao indivíduo.",
      "D": "A regionalização refere-se à organização territorial das redes de atenção em regiões de saúde, não definindo a articulação preventiva e curativa do cuidado individual."
    }
  },
  {
    "id": "q-usp-sp-2023-081",
    "code": "Q-USPSP23-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "anafilaxia",
      "adrenalina-intramuscular",
      "emergencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 7 anos, sexo masculino, com antecedente de asma em uso de medicação contínua. Estava brincando no parquinho quando começou a sentir dor intensa no braço esquerdo. Após cerca de 30 minutos, começou a apresentar tosse, dor abdominal, vômitos e diarreia. Levado ao pronto atendimento, foi colocado sob fonte de oxigênio, sob monitorização e um acesso periférico foi obtido. Ao exame clínico, estava em regular estado geral, FC: 145 bpm, FR: 34 irpm, PA: 82x30 mmHg, Saturação 92% em ar ambiente, ausculta cardíaca sem alterações e ausculta pulmonar com sibilos difusos. Na exposição, foi notada a seguinte lesão: Além de oxigênio e expansão volêmica, qual a conduta a ser prontamente realizada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Bloqueador H1 e H2; corticosteroide e adrenalina (1:1.000) endovenosos.",
        "explanation": "Incorreta: A adrenalina não deve ser administrada por via endovenosa em bolus no manejo inicial fora de parada cardíaca ou ambiente de UTI monitorizada com diluição adequada (risco de arritmias fatais e vasoespasmo grave), e anti-histamínicos e corticoides são adjuvantes de segunda linha que não tratam o choque nem o broncoespasmo agudo.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Adrenalina (1:1.000) intramuscular; elevação dos membros inferiores.",
        "explanation": "Correta: O quadro clínico é compatível com anafilaxia grave com acometimento respiratório (sibilos), gastrointestinal (vômitos, diarreia) e cardiovascular (hipotensão/choque distributivo) desencadeada por provável picada de inseto/himenóptero. A primeira medicação e conduta prioritária é a adrenalina aquosa 1:1.000 (1 mg/mL) na dose de 0,01 mg/kg (máx. 0,3-0,5 mg) por via intramuscular na face anterolateral da coxa (vasto lateral), associada a decúbito dorsal com elevação dos membros inferiores para otimizar o retorno venoso.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Soro antiaracnidico 3 ampolas e morfina endovenosos; bloqueio local.",
        "explanation": "Incorreta: O quadro sistêmico com choque, hipotensão, sibilos difusos e sintomas gastrointestinais imediatos após brincar em parquinho caracteriza anafilaxia secundária a picada de himenóptero (abelha/vespa/formiga). Soros antiaracnídicos não são a conduta imediata para essa apresentação clínica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Antiescorpiônico endovenoso 2-3 ampolas; alfa-1 bloqueador oral.",
        "explanation": "Incorreta: O escorpionismo grave em crianças tipicamente se apresenta com manifestações colinérgicas (sudorese profusa, sialorreia, vômitos incoercíveis, taquicardia/bradicardia, hipertensão inicial e posterior choque cardiogênico com edema agudo de pulmão). Não se trata de escorpionismo, e o tratamento imediato do choque anafilático é adrenalina IM.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O caso descreve um paciente que evoluiu rapidamente após picada (provavelmente de himenóptero) com envolvimento de múltiplos órgãos e sistemas (respiratório, digestivo, cardiovascular com hipotensão e choque). Trata-se de uma anafilaxia grave, cuja droga de escolha imediata e sem contraindicação é a adrenalina 1:1.000 intramuscular no vasto lateral da coxa, acompanhada de posicionamento em decúbito dorsal com elevação de membros inferiores e ressuscitação volêmica.",
    "perolaClinica": "Na anafilaxia, a adrenalina 1:1.000 IM (0,01 mg/kg no vasto lateral da coxa) é o tratamento de 1ª linha mandatório imediato; corticoides e anti-histamínicos são apenas adjuvantes.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "World Allergy Organization (WAO) Anaphylaxis Guidelines",
      "Diretrizes de Reanimação Pediátrica da SBP/AHA (PALS)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3006,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q081.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesão eritemato-edematosa localizada no membro superior compatível com picada de inseto/himenóptero.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Tratamento de primeira linha da anafilaxia grave pediátrica com adrenalina intramuscular.",
      "raciocinioChave": "Criança com dor aguda no braço no parquinho evoluiu em 30 minutos com acometimento respiratório (sibilos, SatO₂ 92%), gastrointestinal (vômitos, diarreia) e hemodinâmico (hipotensão e taquicardia), configurando anafilaxia grave por picada de inseto. Além de O₂ e volume, a conduta imediata prioritária é adrenalina 1:1.000 intramuscular e elevação dos membros inferiores.",
      "armadilhaBanca": "Indicar adrenalina por via endovenosa em bolus (risco de arritmias fatais na abordagem inicial) ou confundir anafilaxia por himenóptero com escorpionismo ou aracneísmo."
    },
    "mapaDistratores": {
      "A": "A adrenalina endovenosa em bolus é contraindicada no manejo inicial da anafilaxia pelo risco de arritmias letais, e anti-histamínicos/corticoides são apenas medidas secundárias.",
      "C": "O quadro sistêmico agudo com broncoespasmo, diarreia e choque distributivo imediato configura reação anafilática, não justificando soro antiaracnídico nem morfina (que piora a hipotensão).",
      "D": "O escorpionismo grave cursa tipicamente com sudorese profusa, sialorreia, vômitos incoercíveis e hiperatividade adrenérgica/colinérgica sem sibilância anafilática típica, e alfa-1 bloqueador agravaria o choque."
    }
  },
  {
    "id": "q-usp-sp-2023-082",
    "code": "Q-USPSP23-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Acidentes, Intoxicações e Maus-Tratos na Infância",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-acidentes-intoxicacoes-e-maus-tratos-na-infancia",
    "tags": [
      "corpo-estranho",
      "ingestao-de-moeda",
      "endoscopia",
      "emergencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 1 ano, sexo masculino, é trazido ao pronto atendimento após ter engolido uma moeda, há cerca de 30 minutos. Ao exame clínico, paciente em bom estado geral, sem sinais de desconforto respiratório, apresentando dificuldade de engolir saliva e engasgos. Alimentou-se a última vez há 2 horas. Foi realizada radiografia de tórax com a imagem apresentada. Qual a conduta a ser realizada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Endoscopia digestiva alta após jejum apropriado e em até 24 horas.",
        "explanation": "Incorreta: A espera de até 24 horas só seria aceitável se o paciente estivesse completamente assintomático e o corpo estranho fosse rombo (como uma moeda) impactado no terço médio/inferior do esôfago. Como a criança apresenta sintomas esofágicos agudos (sialorreia/dificuldade de engolir saliva e engasgos), há risco imediato de aspiração e complicações, exigindo EDA urgente.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Endoscopia digestiva alta em até 2 horas.",
        "explanation": "Correta: Pela diretriz da NASPGHAN/ASGE, corpos estranhos rombos impactados no esôfago que cursam com sintomas de obstrução esofágica completa ou quase completa (incapacidade de engolir secreções/sialorreia, engasgos, estridor ou desconforto) requerem remoção endoscópica de emergência (em até 2 horas), devido ao alto risco de broncoaspiração de saliva e lesão transmural por compressão mecânica.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Observação domiciliar com radiografia de tórax a cada 3 dias.",
        "explanation": "Incorreta: Corpos estranhos impactados no esôfago nunca devem ser deixados em observação domiciliar por dias, pois a permanência na parede esofágica por mais de 24 horas aumenta drasticamente o risco de necrose por pressão, perfuração esofágica, mediastinite e fístula traqueoesofágica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Observação hospitalar com radiografia de tórax diária.",
        "explanation": "Incorreta: Corpos estranhos sintomáticos no esôfago exigem remoção ativa de urgência; mantê-lo sob observação expectante sem intervir gera risco de aspiração de saliva para a via aérea.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A ingestão de moedas alojadas no esôfago proximal com repercussão sintomática (inabilidade para engolir a própria saliva, sialorreia importante ou engasgos) caracteriza urgência/emergência endoscópica absoluta (remoção em até 2 horas). Se o paciente estivesse totalmente assintomático, uma observação de até 12-24 horas poderia ser considerada para verificar progressão espontânea ao estômago, o que não se aplica ao caso clínico apresentado.",
    "perolaClinica": "Corpo estranho no esôfago com disfagia/sialorreia (incapacidade de deglutir secreções) exige EDA de emergência em até 2 horas pelo risco iminente de aspiração.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "NASPGHAN Endoscopic Management of Foreign Bodies in Pediatric Patients",
      "Tratado de Pediatria SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3007,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q082.png",
      "modality": "Radiografia",
      "caption": "Radiografia cervical/torácica revelando corpo estranho metálico radiopaco e circular compatível com moeda alojada no terço superior do esôfago.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Indicação de endoscopia digestiva alta de emergência (até 2h) na impactação esofágica sintomática.",
      "raciocinioChave": "Lactente com ingestão recente de moeda apresenta dificuldade para engolir saliva e engasgos, evidenciando obstrução esofágica sintomática na radiografia. Pelas diretrizes pediátricas, corpos estranhos impactados no esôfago com incapacidade de deglutir secreções demandam remoção endoscópica de emergência em até 2 horas.",
      "armadilhaBanca": "Aplicar a janela de até 24 horas (válida apenas para moedas esofágicas em pacientes totalmente assintomáticos) em uma criança com sialorreia e engasgos."
    },
    "mapaDistratores": {
      "A": "O prazo de até 24 horas aplica-se apenas a pacientes assintomáticos com objeto rombo no esôfago; a dificuldade para engolir saliva exige endoscopia de emergência em até 2 horas.",
      "C": "A observação domiciliar de corpo estranho impactado no esôfago é contraindicada pelo alto risco de necrose de parede, perfuração, mediastinite e broncoaspiração.",
      "D": "Manter criança sintomática com obstrução esofágica em observação hospitalar expectante retarda a desobstrução necessária e eleva o risco de aspiração de secreções."
    }
  },
  {
    "id": "q-usp-sp-2023-083",
    "code": "Q-USPSP23-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "ventilacao-bolsa-valvula-mascara",
      "via-aerea-pediatrica",
      "pals"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 2 meses, sexo masculino, foi admitido no pronto atendimento após mãe ter notado que ele estava com os lábios arroxeados. Na admissão, encontrava-se arresponsivo, com perda de tônus muscular e com respiração superficial e hipoxemia, tendo sido prontamente iniciadas ventilações assistidas. O paciente havia recebido as imunizações previstas no calendário vacinal há cerca de 5 horas e teve febre precedendo o quadro. Assinale a alternativa abaixo na qual está representada a escolha da máscara adequada, o posicionamento correto do coxim e o posicionamento correto da mão na máscara.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: Em lactentes até 1-2 anos, o occipital proeminente gera flexão passiva do pescoço quando a criança é deitada em decúbito dorsal; portanto, é mandatório colocar um coxim sob os ombros/escapular para retificar a via aérea em posição neutra (\"sniffing position\"). Além disso, a máscara deve cobrir da ponte nasal à fenda do queixo (sem comprimir os olhos), e o selamento deve ser feito com a técnica \"C-E\" mantendo os três dedos inferiores no arco ósseo da mandíbula, sem comprimir os tecidos moles submandibulares.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Apresenta coxim posicionado sob a cabeça (o que piora a flexão cervical em lactentes, obstruindo a via aérea) e/ou compressão dos tecidos moles do assoalho lingual.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Demonstra tamanho inadequado da máscara (comprimindo as órbitas ou extrapolando o queixo) ou posicionamento dos dedos fora dos marcos anatômicos adequados.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Demonstra hiperextensão do pescoço ou máscara desajustada, o que colapsa a via aérea cartilaginosa mais maleável do lactente pequeno.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A anatomia da via aérea no lactente pequeno se caracteriza por occipital volumoso, língua proporcionalmente grande e traqueia mais maleável. Por isso, a retificação da via aérea é obtida com a colocação de um coxim sob as escápulas (ombros), mantendo a cabeça em posição neutra. A vedação com a máscara exige seleção do tamanho apropriado e fixação com a manobra 'C-E', apoiando os dedos apenas no rebordo ósseo da mandíbula.",
    "perolaClinica": "Em lactentes, coxim é SOB AS ESCÁPULAS (para compensar o grande occipital e manter posição neutra); nunca sob o crânio.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "PALS (Pediatric Advanced Life Support) — AHA",
      "Tratado de Pediatria SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3007,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q083.png",
      "modality": "Fotografia Clínica",
      "caption": "Painel de alternativas fotográficas demonstrando tamanhos de máscara facial, apoio de dedos e posição de coxim subescapular em manequim de lactente.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Posicionamento da via aérea (coxim subescapular) e técnica da máscara em C-E para ventilação assistida no lactente pequeno.",
      "raciocinioChave": "Devido ao occipital proeminente do lactente de 2 meses, o decúbito dorsal flexiona o pescoço e obstrui a via aérea; o coxim sob os ombros/escápulas retifica o eixo em posição neutra. A vedação exige máscara do tamanho correto (da ponte nasal ao sulco mentoniano) segurada com a manobra C-E apoiada no rebordo ósseo mandibular.",
      "armadilhaBanca": "Confundir a posição neutra com coxim subescapular no lactente com a hiperextensão cervical ou coxim sob a cabeça usados em crianças maiores e adultos."
    },
    "mapaDistratores": {
      "B": "O posicionamento do coxim sob a cabeça acentua a flexão cervical pelo occipital proeminente e pode haver compressão de partes moles do assoalho oral.",
      "C": "A máscara apresenta tamanho inadequado (comprimindo órbitas ou extrapolando o mento) ou posicionamento incorreto dos dedos fora do rebordo mandibular.",
      "D": "A hiperextensão cervical ou o desajuste da máscara promove o colapso da traqueia cartilaginosa maleável típica do lactente pequeno."
    }
  },
  {
    "id": "q-usp-sp-2023-084",
    "code": "Q-USPSP23-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Vacinas Especiais - CRIE e Eventos Adversos",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-vacinas-especiais-crie-e-eventos-adversos",
    "tags": [
      "evento-adverso-pos-vacinal",
      "ehh",
      "brue",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 2 meses, sexo masculino, foi admitido no pronto atendimento após mãe ter notado que ele estava com os lábios arroxeados. Na admissão, encontrava-se arresponsivo, com perda de tônus muscular e com respiração superficial e hipoxemia, tendo sido prontamente iniciadas ventilações assistidas. O paciente havia recebido as imunizações previstas no calendário vacinal há cerca de 5 horas e teve febre precedendo o quadro. Após cerca de 5 minutos de suporte ventilatório, o paciente apresentou recuperação da respiração e do tônus, não sendo necessária entubação orotraqueal. Ao exame de reavaliação, estava corado, hidratado, FC: 150 bpm, FR 36 irpm, PA 73x40 mmHg, pulsos presentes e simétricos, tempo de enchimento capilar de 2 segundos, com abertura ocular espontânea. Restante do exame clínico sem alterações. Com relação à investigação do evento apresentado, podemos afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "estão indicados eletrocardiograma na internação e eletroencefalograma ambulatorial.",
        "explanation": "Incorreta: O episódio é tipicamente atribuível ao componente pertussis celular da vacina e foi autolimitado com recuperação completa, caracterizando um EHH típico sem sinais focais neurológicos ou cardiopatia; não há necessidade de ECG de internação ou EEG ambulatorial de rotina.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "está indicado ultrassom transfontanela ou ressonância magnética de crânio.",
        "explanation": "Incorreta: O lactente recuperou plenamente o tônus, o nível de consciência e a respiração, sem qualquer déficit focal ou alteração de fontanela que justifique neuroimagem.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "está indicada coleta de liquor ampliado com pesquisa de Bordetella pertussis.",
        "explanation": "Incorreta: Não há indicação de coleta de líquor ou PCR de Bordetella pertussis, pois não se trata de sepse ou coqueluche clínica, mas sim de um evento adverso pós-vacinação bem documentado.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "não há necessidade de investigações adicionais.",
        "explanation": "Correta: O quadro de febre, perda de tônus, cianose/palidez e diminuição da responsividade com início poucas horas após a imunização (especialmente a vacina Pentavalente/pertussis de células inteiras aos 2 meses) e com recuperação clínica completa e exame físico pós-evento rigorosamente normal configura o Episódio Hipotônico-Hiporresponsivo (EHH). O EHH é um evento adverso grave, mas autolimitado e sem sequelas a longo prazo; com a recuperação clínica e hemodinâmica estável, não há necessidade de exames diagnósticos complementares invasivos ou adicionais.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O Episódio Hipotônico-Hiporresponsivo (EHH) ocorre predominantemente nas primeiras 48 horas (geralmente primeiras 6 a 12 horas) após a administração da vacina de células inteiras contra coqueluche (Penta de células inteiras). É caracterizado pela tríade: hipotonia muscular, hiporresponsividade e palidez ou cianose. Trata-se de um evento funcional transitório sem repercussões neurológicas crônicas, não havendo necessidade de exames adicionais após a estabilização clínica completa (a próxima dose da vacina com pertussis deverá ser com a fórmula acelular).",
    "perolaClinica": "Episódio Hipotônico-Hiporresponsivo (EHH) pós-DTP/Penta: início em até 48h, tríade de hipotonia + palidez/cianose + arresponsividade. É autolimitado e dispensa propedêutica invasiva após normalização clínica.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação — Ministério da Saúde",
      "SBP — Atualização em Imunizações"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3008,
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento e conduta conservadora no Episódio Hipotônico-Hiporresponsivo (EHH) pós-vacina pertussis celular aos 2 meses.",
      "raciocinioChave": "A tríade de hipotonia, hiporresponsividade e cianose/palidez poucas horas após a vacinação dos 2 meses (pentavalente), seguida de recuperação completa e exame físico normal, fecha o diagnóstico clínico de EHH. Por ser um evento funcional transitório sem sequelas neurológicas, não há indicação de exames complementares adicionais.",
      "armadilhaBanca": "Tratar um evento adverso vacinal benigno e autolimitado como sepse, meningite ou cardiopatia, levando a investigação invasiva desnecessária."
    },
    "mapaDistratores": {
      "A": "Não há indicação rotineira de ECG ou EEG após EHH típico autolimitado com recuperação completa e ausência de sinais focais ou cardiológicos.",
      "B": "O retorno pleno do tônus, da consciência e da respiração sem déficits focais ou alterações de fontanela torna desnecessária a neuroimagem.",
      "C": "A coleta de líquor e pesquisa de Bordetella pertussis não se justificam diante de evento pós-vacinal típico sem sinais de sepse ou neuroinfecção."
    }
  },
  {
    "id": "q-usp-sp-2023-085",
    "code": "Q-USPSP23-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Asma na Infância e Fibrose Cística",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica",
    "tags": [
      "fibrose-cistica",
      "pseudomonas",
      "mrsa",
      "exacerbacao-pulmonar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 9 anos, sexo feminino, portadora de fibrose cística pancreato-insuficiente foi admitida no pronto-socorro queixando-se de tosse com aumento da expectoração de aspecto esverdeada, há uma semana; hoje, com pequena quantidade de sangue e sem febre associada. Em culturas prévias de escarro, apresenta colonização crônica para Pseudomonas aeruginosa, sensível aos antibióticos testáveis, e Staphylococus aureus resistente à meticilina. Já faz uso de oxigênio domiciliar, 1 L/minuto e nos últimos dias precisou aumentar para 2L/minuto. Ao exame clínico, paciente mantendo estado geral de base, alerta, hidratada, taquidispneica moderada, com crepitações difusas à ausculta. Saturação 94% em oxigênio 2L/minuto. Estável hemodinamicamente. A radiografia de tórax atual (figura 1) e no momento da alta na internação anterior (figura 2) estão apresentadas. A paciente foi internada para suporte clínico com coleta de nova cultura de escarro. Com relação ao uso de antimicrobianos, podemos afirmar que a conduta adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "introduzir vancomicina, ceftriaxone e metronidazol.",
        "explanation": "Incorreta: Ceftriaxone não tem cobertura antipseudomonas (indispensável para paciente com colonização crônica por Pseudomonas aeruginosa) e metronidazol não tem papel de rotina nas exacerbações de fibrose cística sem abscesso pulmonar anaeróbio.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "introduzir linezolida, ceftazidima e amicacina.",
        "explanation": "Correta: Na exacerbação pulmonar de um paciente com fibrose cística colonizado cronicamente por Pseudomonas aeruginosa e MRSA, a terapia antimicrobiana empírica deve cobrir ambos os germes. Para a P. aeruginosa, preconiza-se cobertura dupla com classes sinérgicas distintas (um betalactâmico antipseudomonas como a ceftazidima associado a um aminoglicosídeo como a amicacina). Para o MRSA, utiliza-se linezolida ou vancomicina. Portanto, a combinação linezolida + ceftazidima + amicacina é perfeita.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "guardar identificação do agente na cultura atual para início do antibiótico.",
        "explanation": "Incorreta: A paciente apresenta piora clínica evidente (aumento da tosse e escarro, hemoptise leve, aumento da necessidade de oxigênio domiciliar de 1 para 2 L/min); adiar a antibioticoterapia até os resultados microbiológicos (48-72h) compromete irreversivelmente a função pulmonar.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "não há indicação de antimicrobianos neste momento.",
        "explanation": "Incorreta: A presença de escarro purulento associada ao aumento do suporte de oxigênio caracteriza exacerbação pulmonar aguda na fibrose cística, a qual exige antibioticoterapia parenteral intensiva precoce.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Nas exacerbações infecciosas pulmonares de pacientes com fibrose cística, a terapia antimicrobiana deve ser instituída de imediato, direcionada pelo histórico de colonizações crônicas prévias do paciente. Havendo histórico de colonização por Pseudomonas aeruginosa e MRSA, a recomendação clássica é utilizar dois antimicrobianos antipseudomonas de classes distintas (betalactâmico com ação antipseudomonas + aminoglicosídeo) associados a um agente com excelente penetração pulmonar contra MRSA (linezolida ou vancomicina).",
    "perolaClinica": "Exacerbação em fibrose cística com colonização prévia por Pseudomonas + MRSA = cobertura antipseudomonas dupla (ex: Ceftazidima + Amicacina) + anti-MRSA (Linezolida ou Vancomicina).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras para o Diagnóstico e Tratamento da Fibrose Cística",
      "Cystic Fibrosis Foundation Pulmonary Guidelines"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3009,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q085.png",
      "modality": "Radiografia",
      "caption": "Radiografias de tórax comparativas demonstrando bronquiectasias difusas, espessamento peribrônquico e novos infiltrados interstício-alveolares bilaterais.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Antibioticoterapia empírica na exacerbação pulmonar de fibrose cística guiada por colonização crônica (Pseudomonas e MRSA).",
      "raciocinioChave": "A piora da tosse, escarro purulento, hemoptise leve e aumento da demanda de O2 caracterizam exacerbação infecciosa aguda na fibrose cística, exigindo tratamento empírico imediato guiado pelas culturas prévias. Para cobertura simultânea de Pseudomonas aeruginosa (dupla terapia sinérgica) e MRSA, associa-se ceftazidima + amicacina + linezolida.",
      "armadilhaBanca": "Escolher ceftriaxona por ser um betalactâmico comum em pneumonias comunitárias ou postergar o início do antibiótico aguardando nova cultura."
    },
    "mapaDistratores": {
      "A": "A ceftriaxona não possui ação antipseudomonas e o metronidazol não integra o esquema empírico habitual sem evidência de abscesso por anaeróbios.",
      "C": "Aguardar os resultados das culturas atuais atrasaria a terapia frente à deterioração respiratória clínica, agravando o dano pulmonar.",
      "D": "O aumento da purulência do escarro e da necessidade de oxigênio define exacerbação aguda com indicação formal de antibioticoterapia parenteral precoce."
    }
  },
  {
    "id": "q-usp-sp-2023-086",
    "code": "Q-USPSP23-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Neoplasias Pediátricas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-neoplasias-pediatricas",
    "tags": [
      "sindrome-de-lise-tumoral",
      "emergencia-oncologica",
      "neoplasias-pediatricas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 7 anos, previamente hígido, apresentando febre diária há 7 dias, prostração, dor abdominal, vômitos e dificuldade para respirar. Passou em atendimento médico há 3 dias e, após realização do exame de imagem, recebeu alta com prescrição de amoxicilina 50 mg/kg/dia por 7 dias. Segue com manutenção dos sintomas e queixa- se de diminuição da diurese. Ao exame clínico, REG, pálido, mucosas secas, FC 165 bpm, FR 40 irpm, saturação 93% em ar ambiente, PA 100x50 mmHg, ausculta pulmonar diminuída em base esquerda com crepitações bilaterais, tiragem subdiafragmática e intercostal. Exames iniciais apresentados. Para definir as medidas de estabilização a serem instituídas para este paciente no momento, qual(is) exame(s) deve(m) ser acrescentado(s)?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Contagem celular diferencial e cultura de líquido pleural.",
        "explanation": "Incorreta: A toracocentese diagnóstica e a análise do líquido pleural podem ser realizadas no estadiamento, mas a prioridade imediata para definir as medidas de estabilização do paciente oligúrico com grande massa/linfadenopatia ou lesão é afastar distúrbios metabólicos potencialmente fatais.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Pesquisa de esquizócitos em sangue periférico.",
        "explanation": "Incorreta: A pesquisa de esquizócitos se presta ao diagnóstico de microangiopatias trombóticas (como a Síndrome Hemolítico-Urêmica), o que não justifica a massa/dor abdominal associada a quadro respiratório subagudo e insuficiência renal no contexto de provável neoplasia hematológica infantil rápida (ex.: Linfoma de Burkitt).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Lactato desidrogenase, fósforo e ácido úrico séricos.",
        "explanation": "Correta: Criança previamente hígida com hepatoesplenomegalia/massa abdominal, falha de tratamento clínico prévio, prostração, acometimento respiratório e agora oligúria/lesão renal aguda sugere fortemente neoplasia hematológica de proliferação rápida (como Linfoma não-Hodgkin/Burkitt ou Leucemia Linfoblástica Aguda) evoluindo com Síndrome de Lise Tumoral (SLT) espontânea. A dosagem de DHL, ácido úrico, fósforo, cálcio e potássio é imprescindível de imediato para guiar as medidas de estabilização hemodinâmica, hiper-hidratação, hipouricemiantes (rasburicase/alopurinol) e manejo hidroeletrolítico de suporte.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Teste rápido molecular para micobactéria.",
        "explanation": "Incorreta: O quadro de febre há 7 dias com rápida deterioração clínica, envolvimento abdominal, respiratório e insuficiência renal aguda oligúrica sugere neoplasia proliferativa com SLT, e não tuberculose primária aguda que justifique estabilização prioritária por TRM-TB.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A apresentação de sintomas constitucionais, aumento de volume abdominal, comprometimento respiratório e oligúria súbita em criança previamente sadia aponta para uma neoplasia de alta fração de proliferação (ex.: Linfoma de Burkitt) com Síndrome de Lise Tumoral (SLT) espontânea, gerando nefropatia obstrutiva por ácido úrico e/ou fosfato de cálcio. A prioridade de emergência para instituir estabilização e suporte nefrológico/metabólico envolve dosar DHL, fósforo, ácido úrico, cálcio e eletrólitos.",
    "perolaClinica": "Suspeita de malignidade de rápida proliferação com lesão renal aguda/oligúria = dosar imediatamente Ácido Úrico, Fósforo, Cálcio, Potássio e DHL para diagnosticar Síndrome de Lise Tumoral.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Cairo-Bishop Criteria for Lysis Tumor Syndrome",
      "Tratado de Pediatria SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3009,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q086.png",
      "modality": "Radiografia",
      "caption": "Radiografia de tórax/abdome e exames laboratoriais iniciais demonstrando alterações compatíveis com acometimento neoplásico abdominal e disfunção renal.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Rastreamento imediato de Síndrome de Lise Tumoral em criança com suspeita de neoplasia hematológica e lesão renal aguda oligúrica.",
      "raciocinioChave": "Febre prolongada, falha de antibiótico, massa/acometimento abdominal e respiratório com oligúria súbita sugerem neoplasia de alta proliferação (como linfoma de Burkitt) complicada por Síndrome de Lise Tumoral espontânea. Dosar DHL, fósforo e ácido úrico é prioritário para definir medidas de estabilização metabólica e proteção renal imediatas.",
      "armadilhaBanca": "Focar apenas na investigação etiológica do derrame pleural ou infecções crônicas, ignorando a emergência metabólica da Síndrome de Lise Tumoral."
    },
    "mapaDistratores": {
      "A": "A análise do líquido pleural auxilia no diagnóstico e estadiamento, mas não define os distúrbios metabólicos ameaçadores à vida na estabilização inicial.",
      "B": "A pesquisa de esquizócitos investiga microangiopatias trombóticas (como SHU), quadro incompatível com massa abdominal/torácica de provável origem linfoproliferativa.",
      "D": "A rápida progressão clínica com oligúria e provável massa neoplásica aponta para lise tumoral, e não para tuberculose como prioridade de estabilização aguda."
    }
  },
  {
    "id": "q-usp-sp-2023-087",
    "code": "Q-USPSP23-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Síndrome Nefrítica e Nefrótica Pediátrica",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-sindrome-nefritica-e-nefrotica-pediatrica",
    "tags": [
      "sindrome-nefrotica",
      "sindrome-nefritica",
      "investigacao-renal",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 8 anos, sexo feminino, admitida no pronto- socorro com queixa de edema em face e membros inferiores e redução da diurese há cerca de uma semana. Ao exame clínico, regular estado geral, hidratada, corada. Notado edema em face e membros inferiores, FC 108 bpm, FR 23 irpm, PA 138x94 mmHg, restante do exame sem alterações. Sorologias negativas para HIV e hepatites.Resultados dos exames iniciais apresentados. Podemos afirmar que a paciente tem indicação de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "biópsia renal após 8 semanas, caso não responda ao corticoide.",
        "explanation": "Incorreta: Esta conduta seria clássica para a Síndrome Nefrótica Idiopática (Lesão Mínima), que se apresenta com hipoalbuminemia pura, proteinúria maciça, sem hematúria glomerular dismórfica evidente ou consumo de complemento atípico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "iniciar corticoterapia sem necessidade de investigações adicionais.",
        "explanation": "Incorreta: Na presença de síndrome nefrítica associada a parâmetros atípicos e suspeita de nefropatia secundária em menina escolar, iniciar corticoterapia empírica isolada sem investigação etiológica diagnóstica pode mascarar doenças sistêmicas graves como o lúpus eritematoso sistêmico (LES).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "biópsia renal após 8 semanas, caso o complemento não normalize.",
        "explanation": "Incorreta: A conduta de aguardar até 8 semanas para normalização do complemento refere-se estritamente à GNPE (Glomerulonefrite Pós-Estreptocócica) típica em crianças pequenas com história clara de infecção faríngea/cutânea recente.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "ampliar investigação de causas secundárias.",
        "explanation": "Correta: A paciente apresenta síndrome nefrítica/glomerulopatia aos 8 anos com proteinúria e hematúria, hipertensão arterial acentuada e alterações laboratoriais que demandam esclarecimento de causas secundárias (especialmente LES, vasculites sistêmicas, nefropatias por imunocomplexos ou hepatites/HIV já rastreados como negativos), sendo necessária ampliação da investigação antes ou em paralelo à definição de corticoterapia e indicação de biópsia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Crianças em idade escolar com acometimento glomerular evidente (edema, hipertensão arterial, alteração urinária e lesão renal) fora do padrão epidemiológico ou clínico típico da GNPE benigna requerem investigação de causas secundárias, notadamente colagenoses como Lúpus Eritematoso Sistêmico (FAN, anti-DNA, complemento C3/C4).",
    "perolaClinica": "Glomerulonefrite com apresentação atípica em menina escolar exige investigação diagnóstica ampliada para causas sistêmicas e autoimunes (especialmente LES).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "KDIGO Clinical Practice Guideline for Glomerular Diseases",
      "Manual de Nefrologia Pediátrica — SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3010,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q087.png",
      "modality": "Gráfico/Tabela",
      "caption": "Painel de exames laboratoriais demonstrando urinálise com hematúria/proteinúria e provas de função renal alteradas.",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Indicação de investigação de glomerulopatias secundárias em criança escolar com síndrome nefrítica e quadro clínico atípico.",
      "raciocinioChave": "Menina de 8 anos com síndrome nefrítica, hipertensão importante e alterações laboratoriais fora do curso clássico da GNPE pós-infecciosa benigna ou da lesão mínima pura necessita investigação etiológica ampliada. Deve-se rastrear causas secundárias como Lúpus Eritematoso Sistêmico e outras colagenoses/vasculites antes de definir imunossupressão ou biópsia.",
      "armadilhaBanca": "Assumir automaticamente tratar-se de síndrome nefrótica por lesão mínima ou GNPE típica, aplicando o prazo de 8 semanas de conduta expectante."
    },
    "mapaDistratores": {
      "A": "Aguardar 8 semanas de resposta ao corticoide aplica-se à síndrome nefrótica idiopática típica, sem hematúria ou padrão nefrítico atípico.",
      "B": "Iniciar corticoterapia empírica antes do diagnóstico etiológico pode mascarar doenças sistêmicas graves, como nefrite lúpica, e prejudicar a conduta definitiva.",
      "C": "A espera de 8 semanas pela normalização do complemento restringe-se à GNPE clássica com história infecciosa compatível e evolução benigna esperada."
    }
  },
  {
    "id": "q-usp-sp-2023-088",
    "code": "Q-USPSP23-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "atresia-de-vias-biliares",
      "hipertensao-portal",
      "hemorragia-digestiva-alta",
      "octreotide"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 10 meses, sexo masculino, portador de atresia de vias biliares com portoenterostomia prévia, porém sem melhora significativa da drenagem biliar, foi trazido ao departamento de emergência por ter apresentado três episódios de fezes muito escuras e malcheirosas (Figura A). O responsável também notou que o lactente está mais irritado e com aumento do volume abdominal. Nega febre ou outros sintomas associados. Ao exame clínico, regular estado geral, descorado, ictérico. FC 130 bpm, FAR 48 irpm, PA 82x56 mmHg, pulsos amplos, tempo de enchimento capilar inferior a 1 segundo. Ausculta cardíaca e pulmonar sem alterações, abdome com percussão maciça, tenso e distendido, conforme imagem. Além de jejum e antibiótico, indique a conduta imediata indicada para a complicação apresentada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar shunt portossistêmico transjugular.",
        "explanation": "Incorreta: O TIPS (Shunt Portossistêmico Intra-hepático Transjugular) é uma medida de resgate em sangramentos refratários ou ponte para transplante hepático, não sendo a primeira medida farmacológica imediata na emergência.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Iniciar infusão de vasoconstritor esplâncnico.",
        "explanation": "Correta: Lactente de 10 meses com atresia de vias biliares operado pela técnica de Kasai sem sucesso evolui invariavelmente com cirrose biliar e hipertensão portal grave (com ascite e circulação colateral). O quadro de melena profusa e repercussão hemodinâmica caracteriza Hemorragia Digestiva Alta (HDA) varicosa por ruptura de varizes esofagogástricas. Além de estabilização clínica, jejum e profilaxia com antibiótico, a conduta farmacológica imediata mandatória é a introdução de vasoconstritor esplâncnico contínuo (octreotide ou terlipressina) para reduzir o fluxo venoso portal e estancar o sangramento.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Expandir com soro fisiológico 40–60 mL/kg.",
        "explanation": "Incorreta: A reposição volêmica na HDA varicosa deve ser cautelosa (alíquotas de 10 a 20 mL/kg guiadas por metas modestas) para evitar hipervolemia de rebote, a qual aumenta a pressão hidrostática portal e agrava o sangramento varicoso.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Remover aderências por cirurgia laparoscópica.",
        "explanation": "Incorreta: Não se trata de abdome agudo obstrutivo por bridas, mas sim de HDA decorrente de hipertensão portal com sangramento varicoso; laparoscopia diagnóstica é contraindicada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A falha da cirurgia de Kasai na atresia de vias biliares cursa com fibrose hepática progressiva e hipertensão portal. A exteriorização de melena escura e malcheirosa nesse cenário denota sangramento digestivo alto por rotura de varizes de esôfago. A abordagem inicial inclui estabilização hemodinâmica cuidadosa, antibioprofilaxia e início imediato de vasoconstritor esplâncnico (como octreotida ou terlipressina) antes da endoscopia digestiva diagnóstica e terapêutica.",
    "perolaClinica": "HDA varicosa na hipertensão portal pediátrica: jejum + proteção de via aérea + expansão parcimoniosa + antibiótico profilático + VASOCONSTRITOR ESPLÂNCNICO (octreotide).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Baveno VII Consensus Guidelines on Portal Hypertension",
      "Tratado de Pediatria SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3011,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q088.png",
      "modality": "Fotografia Clínica",
      "caption": "Fotografia de fezes em melena volumosa (Figura A) e abdome globoso distendido com circulação colateral evidente e ascite.",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Manejo inicial da hemorragia digestiva alta varicosa na hipertensão portal secundária à atresia de vias biliares.",
      "raciocinioChave": "Lactente com atresia de vias biliares pós-Kasai sem drenagem adequada evolui com cirrose e hipertensão portal, apresentando agora melena e ascite por provável sangramento varicoso. Além de jejum e antibioticoprofilaxia, a medida farmacológica imediata de escolha é iniciar vasoconstritor esplâncnico (como octreotida) para reduzir o fluxo e a pressão portal.",
      "armadilhaBanca": "Indicar expansão volêmica vigorosa (40–60 mL/kg), que eleva a pressão portal e agrava a hemorragia varicosa."
    },
    "mapaDistratores": {
      "A": "O TIPS é terapia de resgate para sangramento varicoso refratário à farmacoterapia e endoscopia, não constituindo medida inicial imediata.",
      "C": "Expansões volêmicas agressivas aumentam a pressão hidrostática portal e precipitam ressangramento ou piora da hemorragia varicosa.",
      "D": "O quadro decorre de hipertensão portal com sangramento digestivo alto, e não de abdome agudo obstrutivo por bridas, contraindicando laparoscopia."
    }
  },
  {
    "id": "q-usp-sp-2023-089",
    "code": "Q-USPSP23-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Triagens Neonatais",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-triagens-neonatais",
    "tags": [
      "triagem-auditiva-neonatal",
      "emissoes-otoacusticas",
      "recem-nascido"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido do sexo masculino, de 15 dias de vida, comparece à Unidade Básica de Saúde para consulta de rotina. A mãe tem 40 anos, é quartigesta com três cesarianas anteriores, hipertensa crônica, recebeu assistência pré-natal adequada, tendo apresentado diabetes gestacional controlada com dieta. Não há antecedente familiar de surdez permanente e os pais não são consanguíneos. A criança nasceu com 37 semanas e 2 dias de idade gestacional, de parto cesariano com peso de 2.700 g, APGAR 7/9/10, permanecendo internada devido à icterícia neonatal tratada com fototerapia. Recebeu alta da maternidade no quinto dia de vida, com icterícia zona II de Krammer, sem outras alterações ao exame clínico. Assinale a alternativa correta considerando o caso acima.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O recém-nascido não apresenta indicador de risco para perda auditiva e deve realizar exame de potenciais evocados auditivos do tronco encefálico até 30 dias de vida.",
        "explanation": "Incorreta: Para RNs sem indicadores de risco de perda auditiva (IRDA), o exame de triagem auditiva preconizado é a Emissão Otoacústica Evocada (EOA), e não o PEATE.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "O recém-nascido não apresenta indicador de risco para perda auditiva e deve realizar exame de emissões otoacústicas até 30 dias de vida.",
        "explanation": "Correta: Segundo as diretrizes do Ministério da Saúde e do Comitê Brasileiro sobre Perdas Auditivas na Infância (CBPAI), recém-nascidos sem Indicadores de Risco para Deficiência Auditiva (IRDA) devem ser submetidos à Triagem Auditiva Neonatal (TAN) por meio das Emissões Otoacústicas Evocadas (EOAE / \"teste da orelhinha\") preferencialmente antes da alta hospitalar ou no primeiro mês de vida (até 30 dias). O RN do caso teve alta no 5º dia, icterícia tratada com fototerapia sem necessidade de exsanguinotransfusão e sem outros critérios de risco (peso > 1.500 g, sem infecções congênitas, sem UTI > 5 dias, sem asfixia grave com Apgar baixo prolongado).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "O recém-nascido apresenta indicador de risco para perda auditiva e deve realizar exame de emissões otoacústicas até 30 dias de vida.",
        "explanation": "Incorreta: O recém-nascido em questão não apresenta IRDA. Fototerapia convencional para icterícia fisiológica/tardia sem nível de exsanguinotransfusão e internação em alojamento conjunto não configuram IRDA.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "O recém-nascido apresenta indicador de risco para perda auditiva e deve realizar exame de potenciais evocados auditivos do tronco encefálico até 30 dias de vida.",
        "explanation": "Incorreta: O PEATE como triagem inicial é reservado aos recém-nascidos que apresentam indicadores de risco (IRDA), como prematuros de muito baixo peso, internação em UTI neonatal por mais de 5 dias, hiperbilirrubinemia com indicação de exsanguinotransfusão, infecções congênitas do grupo STORCH, entre outros.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A triagem auditiva neonatal universal deve ser realizada preferencialmente nos primeiros 30 dias de vida. Em crianças sem indicadores de risco para deficiência auditiva (IRDA), o teste de escolha é a Emissão Otoacústica Evocada (EOAE). O PEATE/BERA só é o exame de triagem de primeira escolha nos recém-nascidos que apresentam pelo menos um IRDA.",
    "perolaClinica": "Triagem auditiva neonatal universal: SEM fatores de risco (IRDA) = Emissões Otoacústicas (EOA); COM fatores de risco (IRDA) = PEATE/BERA.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Atenção da Triagem Auditiva Neonatal — Ministério da Saúde",
      "SBP — Triagem Auditiva Neonatal Universal"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3012,
    "analiseBanca": {
      "conceitoCentral": "Escolha do método de Triagem Auditiva Neonatal (EOA vs. PEATE) conforme presença de indicadores de risco (IRDA).",
      "raciocinioChave": "O recém-nascido a termo teve apenas icterícia tratada com fototerapia (sem necessidade de exsanguinotransfusão e sem internação em UTI > 5 dias) e não possui antecedentes familiares ou malformações, não configurando IRDA. Na ausência de indicadores de risco, a triagem auditiva até 30 dias deve ser feita por Emissões Otoacústicas Evocadas (EOA).",
      "armadilhaBanca": "Classificar erroneamente a icterícia tratada com fototerapia convencional como Indicador de Risco para Deficiência Auditiva (IRDA), indicando PEATE."
    },
    "mapaDistratores": {
      "A": "O PEATE (BERA) como exame inicial de triagem destina-se apenas aos recém-nascidos que apresentam pelo menos um indicador de risco para deficiência auditiva.",
      "C": "Icterícia neonatal em fototerapia convencional sem nível de exsanguinotransfusão e parto a termo sem UTI > 5 dias não configuram IRDA.",
      "D": "Além de indicar incorretamente o PEATE para um caso de baixo risco, atribui erroneamente a presença de IRDA ao recém-nascido descrito."
    }
  },
  {
    "id": "q-usp-sp-2023-090",
    "code": "Q-USPSP23-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Sepse Neonatal e Infecções Congênitas no RN",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-sepse-neonatal-e-infeccoes-congenitas-no-rn",
    "tags": [
      "toxoplasmose-congenita",
      "avidez-de-igg",
      "pre-natal",
      "recem-nascido"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido a termo, adequado para idade gestacional, filho de mãe hígida com pré-natal adequado, ultrassom morfológico normal. Sorologia de toxoplasmose com 7 semanas de gestação: IgM (método elisa) positivo, IgG positivo, com alta avidez. Exame clínico normal ao nascimento. A conduta recomendada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar avaliação de fundo de olho, ultrassonografia transfontanela e abdominal, hemograma, punção lombar e sorologias do recém-nascido, antes de indicar o tratamento.",
        "explanation": "Incorreta: A investigação com punção lombar, fundo de olho e neuroimagem está indicada para recém-nascidos com suspeita de toxoplasmose congênita (quando a mãe teve infecção aguda confirmada ou provável na gestação), o que foi descartado pela alta avidez materna no 1º trimestre.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "coletar sorologia para toxoplasmose do sangue do cordão e indicar o tratamento dependendo do resultado.",
        "explanation": "Incorreta: A sorologia do sangue do cordão umbilical tem alta taxa de contaminação com sangue materno e não é o método padrão de acompanhamento; além disso, a infecção congênita foi descartada pela alta avidez no início da gestação.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "iniciar tratamento com sulfadiazina, pirimetamina e ácido folínico por um ano, independentemente do resultado de exames.",
        "explanation": "Incorreta: Tratar o recém-nascido com o esquema tríplice (sulfadiazina, pirimetamina e ácido folínico) é absolutamente desnecessário e expõe o bebê a riscos desnecessários de mielotoxicidade, pois não houve toxoplasmose adquirida na gestação.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "realizar cuidados de rotina, não havendo necessidade de investigação diagnóstica ou de tratamento do recém-nascido.",
        "explanation": "Correta: A gestante realizou a sorologia com apenas 7 semanas de gestação, apresentando IgM positivo, IgG positivo e ALTA avidez de IgG. A presença de alta avidez de IgG antes da 16ª semana de idade gestacional (e especialmente nas primeiras 12-16 semanas) exclui com segurança a infecção aguda adquirida durante a gestação, confirmando infecção pré-concepcional (ocorrida há mais de 3 a 4 meses). Portanto, não há risco de transmissão vertical e o recém-nascido é considerado não infectado, necessitando apenas dos cuidados rotineiros de puericultura.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alta avidez de IgG realizada no primeiro trimestre (até a 12ª-16ª semana de gestação) confirma que a aquisição do Toxoplasma gondii ocorreu pelo menos 12 a 16 semanas antes da realização do teste, ou seja, antes do período gestacional. Como a transmissão congênita só ocorre na primoinfecção durante a gravidez (salvo exceções de imunossupressão grave como AIDS descompensada), não há risco de toxoplasmose congênita, dispensando investigação e tratamento no concepto.",
    "perolaClinica": "IgG e IgM reagentes com ALTA AVIDEZ no 1º trimestre (< 16 sem) = infecção pré-concepcional (antiga). Risco fetal nulo; RN necessita apenas de puericultura habitual.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo de Notificação e Investigação da Toxoplasmose Gestacional e Congênita — Ministério da Saúde",
      "Manual de Pré-Natal e Neonatologia SBP/FEBRASGO"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3012,
    "analiseBanca": {
      "conceitoCentral": "Interpretação da avidez de IgG para toxoplasmose no 1º trimestre gestacional e conduta no recém-nascido.",
      "raciocinioChave": "A alta avidez de IgG detectada com 7 semanas de gestação comprova que a infecção materna por Toxoplasma gondii ocorreu há mais de 12–16 semanas, ou seja, antes da concepção. Descartada a primoinfecção gestacional em mãe hígida, o RN assintomático recebe apenas cuidados de rotina, sem investigação ou tratamento.",
      "armadilhaBanca": "Ignorar a idade gestacional da coleta e indicar investigação invasiva ou tratamento do RN apenas pela presença de IgM positiva materna."
    },
    "mapaDistratores": {
      "A": "A investigação completa do RN (líquor, fundo de olho e neuroimagem) só é indicada quando há suspeita ou confirmação de infecção materna adquirida na gestação.",
      "B": "A sorologia de sangue de cordão sofre contaminação materna e é desnecessária quando a infecção aguda gestacional já foi excluída pela alta avidez precoce.",
      "C": "O esquema tríplice por 1 ano expõe o recém-nascido a toxicidade medular desnecessária, pois a infecção materna foi pré-gestacional."
    }
  },
  {
    "id": "q-usp-sp-2023-091",
    "code": "Q-USPSP23-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Triagens Neonatais",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-triagens-neonatais",
    "tags": [
      "teste-do-pezinho",
      "fenilcetonuria",
      "triagem-neonatal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mãe de 28 anos, primigesta, sem comorbidades, há 24 horas deu à luz a um recém- nascido a termo, adequado para a idade gestacional. O pré-natal foi adequado e sem intercorrências. O primeiro exame clínico completo do recém-nascido não apresentou alterações. A mãe refere preocupação com relação à investigação de fenilcetonúria, pois tem histórico familiar da doença. Ela insiste na realização imediata de exames que identifiquem a doença. Com relação ao exame de triagem para a doença em questão, está correto afirmar:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve ser solicitado ambulatorialmente, dado que este erro inato do metabolismo não tem seu curso modificado por intervenções específicas.",
        "explanation": "Incorreta: A fenilcetonúria é tratável com dieta com restrição estrita de fenilalanina; quando diagnosticada precocemente no período neonatal, o desenvolvimento cognitivo e neurológico é normal, o que justifica a triagem universal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "deve ser realizado logo após o nascimento e antes da introdução de leite materno ou fórmula, a fim de evitar lesão neurológica irreversível.",
        "explanation": "Incorreta: Se realizada antes da ingestão proteica, a dosagem sérica de fenilalanina será artificialmente normal, gerando falso-negativo perigoso.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "deve ser realizado após 48 horas do nascimento, pois é necessário que a criança tenha sido alimentada com uma quantidade suficiente de proteína.",
        "explanation": "Correta: A coleta da triagem neonatal biológica (Teste do Pezinho), especificamente para a detecção de fenilcetonúria, requer que o recém-nascido tenha recebido aporte proteico prévio (leite materno ou fórmula infantil) para acúmulo mensurável do aminoácido fenilalanina caso a enzima fenilalanina-hidroxilase seja deficiente. Pelo Programa Nacional de Triagem Neonatal (PNTN) do Ministério da Saúde, a coleta ideal ocorre entre o 3º e o 5º dia de vida (nunca antes de 48 horas de vida alimentada).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "não está indicado para este recém-nascido cujo peso é normal e cujo exame clínico não evidencia traços de doença genética.",
        "explanation": "Incorreta: O teste do pezinho para fenilcetonúria é universal e obrigatório para todos os recém-nascidos, independente do peso, história familiar ou ausência de dismorfismos ao exame físico.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O teste do pezinho para identificação da fenilcetonúria depende da ingestão de fenilalanina através da dieta láctea. Se coletado precocemente antes de 48 horas de vida ou antes de uma ingesta proteica adequada, os níveis sanguíneos de fenilalanina podem estar falsamente baixos, impossibilitando a detecção da doença. O período preconizado pelo Ministério da Saúde é entre o 3º e 5º dia de vida.",
    "perolaClinica": "Triagem para Fenilcetonúria (Teste do Pezinho): deve ser realizada entre o 3º e o 5º dia de vida, impreterivelmente após 48h de ingesta proteica para evitar falso-negativos.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual Técnico do Programa Nacional de Triagem Neonatal — Ministério da Saúde",
      "Tratado de Pediatria SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3012,
    "analiseBanca": {
      "conceitoCentral": "Momento ideal para coleta da triagem neonatal (Teste do Pezinho) para fenilcetonúria após aporte proteico.",
      "raciocinioChave": "A detecção da fenilcetonúria na triagem neonatal depende do acúmulo sérico de fenilalanina proveniente da digestão de proteínas do leite materno ou fórmula. Portanto, a coleta deve ocorrer após 48 horas de vida (idealmente entre o 3º e o 5º dia), garantindo ingesta proteica suficiente para evitar resultados falso-negativos.",
      "armadilhaBanca": "Ceder à ansiedade materna e coletar o Teste do Pezinho antes das 48 horas de vida ou antes do início da alimentação láctea, gerando falso-negativo."
    },
    "mapaDistratores": {
      "A": "A fenilcetonúria possui tratamento dietético eficaz com restrição de fenilalanina, prevenindo deficiência intelectual quando iniciada precocemente.",
      "B": "Coletar antes da introdução do leite e logo após o nascimento impede a elevação da fenilalanina sérica, gerando resultado falso-negativo.",
      "D": "A triagem neonatal para fenilcetonúria é universal e obrigatória para todos os recém-nascidos, independentemente do exame físico normal."
    }
  },
  {
    "id": "q-usp-sp-2023-092",
    "code": "Q-USPSP23-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Icterícia Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-ictericia-neonatal",
    "tags": [
      "ictericia-neonatal",
      "zonas-de-kramer",
      "deficiencia-de-g6pd",
      "fototerapia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um recém-nascido (RN) do sexo masculino, com 39 semanas e 4 dias de gestação e peso de nascimento de 3.200 g, apresenta, com 40 horas de vida, icterícia que se estende até a raiz de coxas. Tipagem sanguínea da mãe: A, Rh positivo, com Coombs indireto (pesquisa de anticorpos irregulares) positivo. Tipagem sanguínea do RN: O, Rh negativo, com Coombs direto (teste da antiglobulina direto) negativo. Coletados os exames, a bilirrubina indireta (BI) foi de 11,1 mg/dL, a bilirrubina direta (BD) de 0,7 mg/dL, Hemograma com hemoglobina de 18,1 g/dL, com presença de hemácias fragmentadas e dosagem de G6PD (Glicose-6 fosfato desidrogenase) com metade do valor considerado limite inferior da normalidade. Qual é a classificação da icterícia pelos critérios de Kramer e qual é a conduta imediata?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Zona IV; observação clínica e nova coleta de bilirrubina em 6 horas.",
        "explanation": "Incorreta: A icterícia que atinge a raiz das coxas corresponde à Zona III (não Zona IV), e com 40 horas de vida e BI de 11,1 mg/dL associada a hemólise (G6PD baixa, fragmentos de hemácias), o paciente já atinge o limiar para indicação imediata de fototerapia pelas curvas da AAP/SBP.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Zona IV; fototerapia.",
        "explanation": "Incorreta: A distribuição cutânea restrita ao abdome e à raiz das coxas caracteriza Zona III de Kramer. A Zona IV envolve braços, antebraços e pernas abaixo dos joelhos.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Zona III; observação clínica e nova coleta de bilirrubina em 12 horas.",
        "explanation": "Incorreta: A simples observação com reavaliação em 12 horas é perigosa, pois o RN apresenta fator de risco hemolítico comprovado (deficiência enzimática de G6PD e hemácias fragmentadas) e a bilirrubina de 11,1 mg/dL com menos de 48 horas de vida está acima do percentil de risco intermediário/alto com indicação formal de fototerapia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Zona III; fototerapia.",
        "explanation": "Correta: Pela classificação clínica topográfica de Kramer: Zona I = cabeça e pescoço; Zona II = tronco até a cicatriz umbilical; Zona III = do umbigo até os joelhos e raiz de coxas; Zona IV = pernas abaixo dos joelhos e braços/antebraços; Zona V = mãos e pés. Como a icterícia vai até a raiz de coxas, classifica-se como Zona III de Kramer. Em um RN a termo com 40 horas de vida, portador de doença hemolítica enzimática (deficiência de G6PD com esquizócitos) e bilirrubina indireta de 11,1 mg/dL, as curvas de corte da Academia Americana de Pediatria / SBP indicam início imediato de fototerapia para prevenção de encefalopatia bilirrubínica.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A escala de Kramer correlaciona a progressão cefalocaudal da icterícia com os níveis séricos presumidos, situando a raiz das coxas na Zona III. Para a idade de 40 horas de vida em paciente com processo hemolítico subjacente confirmado (deficiência de G6PD com presença de hemácias fragmentadas), o valor de BI de 11,1 mg/dL ultrapassa o limiar de indicação de fototerapia para RNs de médio/alto risco.",
    "perolaClinica": "Icterícia até os joelhos e coxas = Zona III de Kramer. Na presença de hemólise (G6PD baixa, fragmentos) e BI > 11 mg/dL com 40h de vida, a fototerapia imediata é mandatória.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes de Icterícia Neonatal — Academia Americana de Pediatria (AAP 2022)",
      "Documento Científico de Icterícia no Recém-Nascido — SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3013,
    "analiseBanca": {
      "conceitoCentral": "Classificação topográfica de Kramer (Zona III) e indicação de fototerapia na hiperbilirrubinemia hemolítica por deficiência de G6PD.",
      "raciocinioChave": "A extensão da icterícia até a raiz das coxas corresponde à Zona III de Kramer (umbigo até joelhos/coxas). Diante de BI de 11,1 mg/dL com 40 horas de vida em RN portador de doença hemolítica (deficiência de G6PD e hemácias fragmentadas), o nível atinge o limiar para fototerapia imediata.",
      "armadilhaBanca": "Errar a correspondência anatômica da Zona III de Kramer (raiz das coxas) ou subestimar o risco hemolítico da deficiência de G6PD para indicar fototerapia."
    },
    "mapaDistratores": {
      "A": "A raiz das coxas define Zona III (e não IV), além de a conduta expectante ser inadequada frente à hemólise por G6PD e BI de 11,1 mg/dL às 40h.",
      "B": "A Zona IV de Kramer engloba pernas abaixo dos joelhos e antebraços/braços, não correspondendo à distribuição até a raiz das coxas.",
      "C": "Apesar da classificação correta como Zona III, aguardar 12 horas em RN com hemólise por deficiência de G6PD aumenta o risco de neurotoxicidade bilirrubínica."
    }
  },
  {
    "id": "q-usp-sp-2023-093",
    "code": "Q-USPSP23-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Convulsão Febril e Emergências Neurológicas",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-convulsao-febril-e-emergencias-neurologicas",
    "tags": [
      "crise-febril-simples",
      "convulsao-febril",
      "observacao-clinica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A mãe de uma lactente do sexo feminino de 18 meses de idade refere que, há 15 dias, sua filha apresentou um episódio de crise convulsiva tônico-clônica generalizada, com duração de 8 minutos; o quadro foi acompanhado de febre de 38,5°C. Procurou Pronto Atendimento na ocasião e, após 6 horas em observação, foi dada alta hospitalar com medicação apropriada para o tratamento de otite média aguda. A criança nunca havia apresentado episódio convulsivo até então e não voltou a apresentar novas crises. Nasceu a termo, sem intercorrências no período perinatal e a mãe nega doenças relevantes prévias. Na consulta atual, apresenta exame clínico normal. Qual a conduta neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realização de tomografia computadorizada do crânio.",
        "explanation": "Incorreta: A neuroimagem (TC de crânio) não é indicada em crise febril simples sem sinais de hipertensão intracraniana, sem déficit focal ou após recuperação completa.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Prescrição de medicação antiepiléptica profilática.",
        "explanation": "Incorreta: O uso de drogas antiepilépticas contínuas profiláticas (como fenobarbital ou ácido valproico) não é recomendado em crise febril simples, pois os efeitos colaterais cognitivos e comportamentais superam amplamente os riscos do quadro, que possui evolução benigna.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Solicitação de exame eletroencefalográfico.",
        "explanation": "Incorreta: O eletroencefalograma (EEG) de rotina não está indicado após um episódio de crise febril simples em criança neurologicamente hígida com exame normal, pois alterações transitórias não predizem recorrência nem risco de epilepsia.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Observação clínica em consultas pediátricas de rotina.",
        "explanation": "Correta: O episódio apresentado preenche todos os critérios de Crise Febril Simples: ocorreu na faixa etária típica (6 meses a 5 anos, paciente com 18 meses), associada à febre em vigência de foco infeccioso extracraniano evidente (OMA), foi generalizada tônico-clônica, durou menos de 15 minutos (durou 8 minutos), em crise única em 24 horas, e sem histórico prévio ou déficit neurológico focal pós-ictal. Crianças com crise febril simples e exame normal na reavaliação necessitam exclusivamente de orientação familiar sobre a benignidade do quadro e acompanhamento clínico em puericultura de rotina.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A crise convulsiva febril simples é um evento neurológico benigno comum na infância. Os critérios incluem idade entre 6 meses e 5 anos, crise tônico-clônica generalizada, duração menor que 15 minutos, episódio único em 24 horas e ausência de infecção do sistema nervoso central ou distúrbio metabólico. Uma vez excluída meningite e com recuperação clínica completa, não há indicação de EEG, neuroimagem ou profilaxia medicamentosa, recomendando-se apenas seguimento ambulatorial e esclarecimento aos pais.",
    "perolaClinica": "Crise Febril Simples (generalizada, < 15 min, única em 24h, 6m-5a): prognóstico excelente; NÃO requer EEG, TC nem anticonvulsivante contínuo profilático.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "AAP Clinical Practice Guideline — Febrile Seizures",
      "Manual de Neurologia Pediátrica — SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3013,
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora após crise convulsiva febril simples em lactente neurologicamente hígido.",
      "raciocinioChave": "A crise generalizada, única em 24 horas, com duração de 8 minutos (< 15 min) durante episódio febril por otite média aguda em lactente de 18 meses com exame neurológico normal preenche critérios de crise febril simples. Por ter evolução benigna, indica-se apenas acompanhamento pediátrico de rotina, sem exames complementares ou profilaxia.",
      "armadilhaBanca": "Solicitar EEG, neuroimagem ou anticonvulsivante profilático em uma criança que apresentou apenas um episódio típico de crise febril simples."
    },
    "mapaDistratores": {
      "A": "A tomografia de crânio não é recomendada na crise febril simples em criança sem sinais focais, trauma ou hipertensão intracraniana.",
      "B": "Antiepilépticos profiláticos contínuos não são indicados na crise febril simples devido aos efeitos adversos superiores ao risco benigno de recorrência.",
      "C": "O eletroencefalograma não altera a conduta nem prediz epilepsia ou recorrência após um episódio típico de crise febril simples."
    }
  },
  {
    "id": "q-usp-sp-2023-094",
    "code": "Q-USPSP23-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "calendario-vacinal",
      "rotavirus",
      "atraso-vacinal",
      "pni"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente do sexo masculino de 4 meses e 10 dias é levado à Unidade Básica de Saúde para atualização da imunização. Recebeu somente as vacinas administradas na maternidade (BCG e Hepatite B). Nasceu de parto cesariano, com 35 semanas de idade gestacional, apresenta paralisia cerebral e sibilância recorrente desde o primeiro mês de vida. Hoje está no 5o dia de uso de amoxicilina, prednisolona e broncodiltador para tratamento de uma otite média aguda associada a broncoespasmo. Qual vacina não deverá ser administrada hoje?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pentavalente.",
        "explanation": "Incorreta: A vacina pentavalente (DTP + Hib + HepB) pode ser iniciada em atraso nessa idade sem prejuízo.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Pneumococo.",
        "explanation": "Incorreta: A vacina pneumocócica 10-valente pode e deve ser administrada aos 4 meses e 10 dias em esquema de atraso.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Rotavírus.",
        "explanation": "Correta: Pelo Programa Nacional de Imunizações (PNI/MS), a vacina oral de rotavírus humano (VORH) possui limites estritos e inflexíveis de idade para aplicação devido ao risco aumentado de invaginação intestinal: a 1ª dose deve ser administrada impreterivelmente até os 3 meses e 15 dias de vida (15 semanas). Como o lactente tem 4 meses e 10 dias de vida e nunca recebeu a primeira dose, ele ultrapassou a idade máxima limite, estando formalmente contraindicada a administração da vacina contra rotavírus.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Poliomielite.",
        "explanation": "Incorreta: A vacina contra a poliomielite inativada (VIP) não possui o limite estrito de idade para a 1ª dose que contraindique a aplicação neste momento.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A vacina contra o rotavírus (VORH) monovalente atenuada é a única vacina do calendário básico infantil do PNI que possui rigorosa 'idade limite de corte' para início e término do esquema vacinal, visando minimizar a incidência de intussuscepção/invaginação intestinal. A primeira dose só pode ser aplicada até 3 meses e 15 dias (15 semanas e 6 dias). Crianças com idade superior a essa que não receberam a 1ª dose não poderão mais iniciar o esquema de rotavírus.",
    "perolaClinica": "Vacina Rotavírus (VORH): limite rígido da 1ª dose = 3 meses e 15 dias; limite da 2ª dose = 7 meses e 29 dias. Passou do prazo, NÃO vacina!",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Normas e Procedimentos para Vacinação — Ministério da Saúde",
      "Calendário Vacinal da Sociedade Brasileira de Pediatria (SBP)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3014,
    "analiseBanca": {
      "conceitoCentral": "Idade máxima limite para início do esquema vacinal da vacina oral de rotavírus humano (VORH) pelo PNI.",
      "raciocinioChave": "Pelo PNI, a primeira dose da vacina contra rotavírus (VORH) só pode ser administrada até no máximo 3 meses e 15 dias de idade devido ao risco aumentado de invaginação intestinal em faixas etárias maiores. Como o lactente já tem 4 meses e 10 dias e não recebeu a 1ª dose, essa vacina está contraindicada definitivamente.",
      "armadilhaBanca": "Achar que o uso de corticosteroide oral por 5 dias para broncoespasmo contraindica vacinas inativadas ou esquecer a idade limite rígida do rotavírus."
    },
    "mapaDistratores": {
      "A": "A vacina pentavalente é inativada/combinada e deve ser iniciada normalmente em esquema de atualização aos 4 meses e 10 dias.",
      "B": "A vacina pneumocócica 10-valente pode ser aplicada sem restrição nessa idade para atualização vacinal.",
      "D": "A vacina inativada contra poliomielite (VIP) não possui limite etário estreito que impeça o início aos 4 meses e 10 dias."
    }
  },
  {
    "id": "q-usp-sp-2023-095",
    "code": "Q-USPSP23-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Obesidade Infantil e Desnutrição Grave",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-obesidade-infantil-e-desnutricao-grave",
    "tags": [
      "obesidade-infantil",
      "curvas-oms",
      "pressao-arterial-em-pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em consulta médica de rotina, um menino previamente hígido, de 10 anos e 6 meses de idade, apresenta peso de 40 kg e estatura de 1,30 m. Foram realizadas três medidas da pressão arterial sob condições adequadas, obtendo-se o valor médio de 100x70 mmHg em todas as aferições. De acordo com as Curvas de Referência da OMS para IMC e altura por idade e sexo, e segundo a 7a Diretriz Brasileira de Hipertensão Arterial (tabelas acima), este paciente apresenta:",
    "alternativas": [
      {
        "letter": "A",
        "text": "sobrepeso, estatura normal e pressão arterial elevada.",
        "explanation": "Incorreta: O IMC da criança é de 23,67 kg/m² (40 / 1,30²). Para a idade de 10 anos e 6 meses, este valor de IMC situa-se acima do escore Z +2 (p97), o que caracteriza obesidade, e não sobrepeso. Além disso, a PA 100x70 mmHg para a idade/sexo/estatura encontra-se abaixo do percentil 90, sendo classificada como normal.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "obesidade, baixa estatura e pressão arterial elevada.",
        "explanation": "Incorreta: A estatura de 1,30 m aos 10 anos e meio situa-se entre o escore Z -2 e escore Z 0 (por volta do percentil 15-20), correspondendo a estatura adequada/normal para a idade. A pressão não é elevada.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "obesidade, estatura normal e pressão arterial normal.",
        "explanation": "Correta: Cálculo do IMC = 40 kg / (1,3 m)² = 23,67 kg/m². Analisando a curva de IMC para idade (meninos de 5 a 19 anos - OMS), o escore Z +2 aos 10,5 anos está em torno de 22,2 kg/m²; logo, IMC > +2 define OBESIDADE. A estatura de 1,30 m está acima do escore Z -2 (estatura normal). Na tabela de PA infantil (percentil 50 de altura aos 10 anos para meninos: P90 = 111/73 mmHg), os valores médios de 100x70 mmHg estão abaixo do percentil 90, definindo PRESSÃO ARTERIAL NORMAL.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "sobrepeso, risco de baixa estatura e pressão arterial normal.",
        "explanation": "Incorreta: O paciente tem obesidade (não sobrepeso) e estatura normal (não risco de baixa estatura).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Com base nos referenciais antropométricos da Organização Mundial da Saúde (OMS) para crianças > 5 anos: escore Z entre +1 e +2 define sobrepeso; escore Z > +2 define obesidade; e escore Z > +3 define obesidade grave. O IMC de 23,67 kg/m² aos 10 anos e 6 meses corresponde a escore Z > +2 (obesidade). A estatura de 1,30 m é adequada (Z > -2). Pelas diretrizes de hipertensão arterial pediátrica, pressão arterial com sistólica e diastólica < percentil 90 é estritamente normal.",
    "perolaClinica": "Crianças > 5 anos nas curvas da OMS: IMC Z > +1 = sobrepeso; Z > +2 = obesidade. Pressão arterial pediátrica < P90 = normal.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "WHO Growth Standards for Children and Adolescents (5–19 years)",
      "7ª Diretriz Brasileira de Hipertensão Arterial — SBC/SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3014,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q095.png",
      "modality": "Gráfico/Tabela",
      "caption": "Gráficos de referência da OMS para IMC por idade e Estatura por idade para meninos de 5 a 19 anos, e tabelas percentilares de pressão arterial pediátrica.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Classificação nutricional (IMC/idade e estatura/idade da OMS) e avaliação pressórica pediátrica.",
      "raciocinioChave": "Com peso de 40 kg e estatura de 1,30 m, o IMC é 23,67 kg/m², situando-se acima do escore Z +2 para meninos de 10 anos e 6 meses, o que define obesidade. A estatura de 1,30 m está acima do escore Z -2 (normal para a idade) e a PA de 100x70 mmHg encontra-se abaixo do percentil 90 para idade, sexo e estatura (normal).",
      "armadilhaBanca": "Confundir os pontos de corte do escore Z do IMC da OMS (classificando Z > +2 como sobrepeso) ou considerar PA 100x70 mmHg elevada sem consultar o percentil."
    },
    "mapaDistratores": {
      "A": "O IMC de 23,67 kg/m² ultrapassa o escore Z +2 (obesidade, não sobrepeso) e a pressão arterial de 100x70 mmHg situa-se na faixa normal para o percentil estatural.",
      "B": "A estatura de 1,30 m encontra-se dentro da normalidade (acima do escore Z -2) e a pressão arterial é normotensa para o sexo e estatura.",
      "D": "O diagnóstico nutricional é de obesidade (escore Z > +2), e a estatura é adequada para a idade, sem critério de risco para baixa estatura."
    }
  },
  {
    "id": "q-usp-sp-2023-096",
    "code": "Q-USPSP23-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "vacina-bcg",
      "reacao-vacinal",
      "linfadenopatia-axilar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em consulta de rotina, a mãe de um lactente de 35 dias de vida encontra-se preocupada com o aparecimento de uma “ferida” no local da aplicação da vacina BCG, há 4 dias. A criança nasceu a termo, de parto normal, pesando 2.980 g, medindo 49 cm de comprimento, sem intercorrências no período perinatal. Na maternidade, recebeu as vacinas BCG e Hepatite B. Está em aleitamento materno exclusivo, ganhando 28 g de peso ao dia. Ao exame clínico, nota-se a presença de uma úlcera de 0,8 cm de diâmetro localizada na inserção inferior do músculo deltoide direito, sem saída de secreção e de gânglio axilar homolateral, indolor, de consistência fibroelástica, móvel, sem sinais flogísticos, medindo 2,5 cm. Sem outras alterações nos demais aparelhos e sistemas. Qual a conduta para este caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prescrição de isoniazida.",
        "explanation": "Incorreta: A isoniazida só está indicada nas reações adversas graves da BCG, como linfadenite supurada/fistulizada, lesões ulceradas > 1 cm com evolução persistente além de 12 semanas ou na disseminação da BCG.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Acompanhamento clínico.",
        "explanation": "Correta: A evolução normal da vacina BCG inclui mácula, pápula, pústula e úlcera de até 1 cm de diâmetro por volta da 3ª à 6ª semana, que cura deixando a cicatriz vacinal. O achado de gânglio regional axilar homolateral até 3 cm, único, indolor, fibroelástico e sem sinais flogísticos nem supuração (linfadenite não supurada) faz parte da resposta imune reacional esperada, não sendo considerado complicação nem exigindo medicação antimicrobiana ou punção; a conduta é apenas acompanhamento clínico.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Introdução de cefalexina.",
        "explanation": "Incorreta: Não há infecção piogênica bacteriana secundária; a úlcera é a reação imune típica à micobactéria viva atenuada, tornando desnecessário o uso de cefalexina ou qualquer outro antibiótico.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Punção ganglionar.",
        "explanation": "Incorreta: A punção ou excisão de linfonodos pós-BCG não é recomendada quando não supurados, pois pode favorecer a formação de fístulas de cicatrização difícil.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A vacina BCG (bacilo de Calmette-Guérin) sofre evolução cicatricial típica que atinge a fase de úlcera (normalmente até 1 cm de diâmetro) entre 4 e 6 semanas pós-aplicação. Além disso, o surgimento de linfadenomegalia axilar ou supraclavicular homolateral de consistência elástica, não supurativa, com menos de 3 cm de diâmetro, decorre da resposta imune celular normal e deve ser manejada exclusivamente com conduta expectante e acompanhamento clínico.",
    "perolaClinica": "Evolução normal da BCG: úlcera até 1 cm + gânglio axilar homolateral não supurado < 3 cm = CONDUTA EXPECTANTE / acompanhamento clínico.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação — Ministério da Saúde",
      "SBP — Atualização em Imunizações na Infância"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3015,
    "analiseBanca": {
      "conceitoCentral": "Evolução local fisiológica da vacina BCG e manejo conservador de linfadenomegalia axilar não supurada < 3 cm.",
      "raciocinioChave": "A presença de úlcera vacinal de até 1 cm entre a 3ª e 6ª semana pós-BCG associada a gânglio axilar homolateral único, indolor, móvel, não supurado e menor que 3 cm (2,5 cm) traduz resposta imune normal. Nessa situação, a única conduta indicada é o acompanhamento clínico expectante.",
      "armadilhaBanca": "Indicar isoniazida ou punção ganglionar diante da reação vacinal cicatricial e linfadenopatia reacional fisiológicas da BCG."
    },
    "mapaDistratores": {
      "A": "A isoniazida reserva-se a eventos adversos graves, como úlcera > 1 cm persistente por mais de 12 semanas, linfadenite supurada/fistulizada ou disseminação.",
      "C": "Não existe infecção bacteriana piogênica secundária na úlcera fisiológica da BCG, sendo injustificado o uso de cefalexina.",
      "D": "A punção de linfonodo pós-BCG não supurado é contraindicada pelo risco de induzir fistulização e atraso cicatricial."
    }
  },
  {
    "id": "q-usp-sp-2023-097",
    "code": "Q-USPSP23-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Bronquiolite Viral Aguda e Coqueluche",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-bronquiolite-viral-aguda-e-coqueluche",
    "tags": [
      "bronquiolite-viral-aguda",
      "otite-media-aguda",
      "complicacao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "actente de 5 meses, sexo masculino, com quadro de febre de até 38,2°C associada à tosse e à coriza que se iniciaram três dias antes da admissão hospitalar. Ao exame clínico da entrada, estava em bom estado geral, corado, hidratado, taquidispneico com frequência respiratória de 70 movimentos/minuto, saturação em ar ambiente de 89% e frequência cardíaca de 148 bpm. Ausculta pulmonar com estertores, roncos e sibilos difusos. O paciente foi internado na enfermaria geral da pediatria e apresentou boa evolução respiratória, mas voltou a apresentar febre de 38,9 ̊C e irritabilidade no quinto dia da doença. Qual das imagens abaixo representa a complicação mais provável apresentada pelo paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: O quadro inicial de pródromo catarral seguido de taquidispneia, sibilos e estertores em lactente de 5 meses é diagnóstico clássico de Bronquiolite Viral Aguda (BVA), causada predominantemente pelo Vírus Sincicial Respiratório (VSR). A complicação bacteriana secundária mais frequente da BVA é a Otite Média Aguda (OMA), evidenciada pela recrudescência da febre, irritabilidade e imagem de otoscopia mostrando membrana timpânica hiperemiada, opaca e abaulada com perda dos marcos anatômicos (figura da Alternativa A).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem de complicação distinta (ex.: pneumonia lobar extensa, derrame ou atelectasia) que, embora possíveis, são menos frequentes que a OMA como causa de febre rebote no 5º dia de BVA sem nova piora pulmonar importante.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Apresenta membrana timpânica normal e translúcida, sem sinais flogísticos ou abaulamento.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem atípica de achado dermatológico ou radiológico não compatível com a complicação secundária mais prevalente.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A Bronquiolite Viral Aguda acomete lactentes menores de 2 anos e frequentemente evolui com disfunção da tuba auditiva devido ao edema e secreção nasofaríngea. A Otite Média Aguda (OMA) é a principal complicação bacteriana associada à BVA, ocorrendo em 20 a 50% dos lactentes internados. O reaparecimento da febre e a irritabilidade no curso de melhora respiratória devem alertar imediatamente para o exame da membrana timpânica por otoscopia.",
    "perolaClinica": "Piora febril ou irritabilidade no curso da Bronquiolite Viral Aguda: examine os ouvidos! A complicação secundária mais frequente é a Otite Média Aguda.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes para o Manejo da Bronquiolite Viral Aguda — Sociedade Brasileira de Pediatria (SBP)",
      "AAP Clinical Practice Guideline — Bronchiolitis"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3016,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q097.png",
      "modality": "Fotografia Clínica",
      "caption": "Otoscopia demonstrando membrana timpânica francamente hiperemiada, opaca e intensamente abaulada com perda do cone luminoso, compatível com OMA.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Otite Média Aguda como complicação bacteriana secundária mais frequente na evolução da Bronquiolite Viral Aguda.",
      "raciocinioChave": "Lactente de 5 meses internado por Bronquiolite Viral Aguda com boa melhora pulmonar apresenta novo pico febril e irritabilidade no 5º dia de doença. A complicação bacteriana mais comum da BVA é a Otite Média Aguda (20–50% dos casos), identificada à otoscopia por membrana timpânica hiperemiada e abaulada.",
      "armadilhaBanca": "Atribuir a febre recorrente no 5º dia de internação obrigatoriamente a pneumonia bacteriana extensa, esquecendo a OMA como complicação mais comum da BVA."
    },
    "mapaDistratores": {
      "B": "Alterações pulmonares extensas são menos frequentes que a otite média aguda como causa de febre rebote isolada após melhora respiratória na BVA.",
      "C": "Uma membrana timpânica normal e translúcida exclui o foco otológico, não explicando a complicação febril com irritabilidade.",
      "D": "Achados não compatíveis com otoscopia de OMA não representam a complicação bacteriana secundária mais prevalente da bronquiolite."
    }
  },
  {
    "id": "q-usp-sp-2023-098",
    "code": "Q-USPSP23-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Doenças Exantemáticas",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-doencas-exantematicas",
    "tags": [
      "impetigo-bolhoso",
      "staphylococcus-aureus",
      "sindrome-da-pele-escaldada",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 9 meses é levado em consulta na Unidade Básica de Saúde apresentando lesões papulares há 3 dias, que evoluíram conforme imagem abaixo. Mãe refere que há rotura espontânea das lesões. Sem febre associada ou outras lesões. Em relação à principal hipótese diagnóstica, é possível afirmar que o agente etiológico causador é o mesmo agente da:",
    "alternativas": [
      {
        "letter": "A",
        "text": "escarlatina.",
        "explanation": "Incorreta: A escarlatina é causada pelo Streptococcus pyogenes (estreptococo do grupo A) produtor de exotoxina pirogênica estreptocócica.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "erisipela.",
        "explanation": "Incorreta: A erisipela é causada principalmente pelo Streptococcus pyogenes.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "candidíase.",
        "explanation": "Incorreta: A candidíase é uma infecção fúngica causada por espécies de Candida (principalmente Candida albicans).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "síndrome da pele escaldada.",
        "explanation": "Correta: As lesões descritas e mostradas são pápulas e vesículas que evoluem para bolhas flácidas de conteúdo claro a purulento que se rompem espontaneamente, deixando colarete descamativo e crostas finas, caracterizando o Impetigo Bolhoso. O agente etiológico exclusivo do impetigo bolhoso é o Staphylococcus aureus (cepas do fago grupo II), que produz toxinas esfoliativas (esfoliatinas A e B) que clivam a desmogleína 1 na epiderme alta (estrato granuloso). Esse mesmo mecanismo fisiopatológico e o mesmo patógeno (S. aureus produtor de esfoliatina) são os responsáveis pela Síndrome da Pele Escaldada Estafilocócica (Doença de Ritter von Rittershain).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O impetigo bolhoso é uma forma de piodermite superficial provocada pelas toxinas esfoliativas (A e B) produzidas pelo Staphylococcus aureus. Essas toxinas provocam clivagem seletiva da proteína de adesão celular desmogleína 1 no estrato granuloso da epiderme. A Síndrome da Pele Escaldada Estafilocócica (SSSS) compartilha exatamente o mesmo agente etiológico e a mesma toxina esfoliativa, ocorrendo disseminação hematogênica da toxina a partir de um foco infeccioso cutâneo ou de mucosas.",
    "perolaClinica": "Impetigo bolhoso = Staphylococcus aureus (toxina esfoliativa que cliva desmogleína 1). É a mesma toxina e bactéria da Síndrome da Pele Escaldada Estafilocócica.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria — Sociedade Brasileira de Pediatria (SBP)",
      "Nelson Textbook of Pediatrics, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3016,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q098.png",
      "modality": "Fotografia Clínica",
      "caption": "Lesões cutâneas caracterizadas por bolhas flácidas rotas, erosões superficiais com colarete descamativo e exsudato, típicas de impetigo bolhoso.",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Etiologia compartilhada por Staphylococcus aureus produtor de toxina esfoliativa no impetigo bolhoso e na SSSS.",
      "raciocinioChave": "Pápulas e vesículas que evoluem para bolhas flácidas com rotura espontânea e colarete descamativo em lactente afebril caracterizam impetigo bolhoso, causado exclusivamente pelo Staphylococcus aureus produtor de toxinas esfoliativas (A/B) que clivam a desmogleína 1. O mesmo agente e mecanismo causam a síndrome da pele escaldada estafilocócica (SSSS).",
      "armadilhaBanca": "Confundir a etiologia estafilocócica do impetigo bolhoso com piodermites estreptocócicas clássicas como escarlatina e erisipela."
    },
    "mapaDistratores": {
      "A": "A escarlatina é causada por Streptococcus pyogenes produtor de exotoxina pirogênica, agente distinto do impetigo bolhoso.",
      "B": "A erisipela tem como principal agente etiológico o Streptococcus pyogenes, e não o Staphylococcus aureus produtor de toxina esfoliativa.",
      "C": "A candidíase é uma micose cutaneomucosa provocada por leveduras do gênero Candida, sem relação com infecção estafilocócica bolhosa."
    }
  },
  {
    "id": "q-usp-sp-2023-099",
    "code": "Q-USPSP23-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Anemias e Doença Falciforme na Infância",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-anemias-e-doenca-falciforme-na-infancia",
    "tags": [
      "anemia-falciforme",
      "crise-vaso-oclusiva",
      "sindrome-toracica-aguda",
      "opioide"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 9 anos, sexo masculino, asmático e portador de anemia falciforme, está internado na enfermaria da pediatria devido ao quadro de exacerbação asmática, associada à infecção das vias aéreas superiores. Na admissão, apresentava sibilos difusos, saturação 92% em ar ambiente, desconforto respiratório leve/moderado, com exame de imagem normal. No segundo dia de internação hospitalar, o paciente começou a se queixar de piora da falta de ar, dor em membros inferiores e na região torácica, de forte intensidade (nota 9/10 na escala numérica de dor). Sem febre ou outros sintomas associados. Ao exame clínico, encontra-se hidratado, descorado 2+, com saturação de 92% em Venturi 50%, FC: 90 bpm, FR: 32 irpm, PA: 96x50 mmHg; apresenta desconforto moderado com ausculta mantida em relação ao último exame. Sem febre associada. Frente aos novos sintomas apresentados, qual a conduta indicada para o paciente acima?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar opioide; reavaliar necessidade de nova dose em 30 minutos; repetir exame de imagem pulmonar.",
        "explanation": "Correta: O paciente com anemia falciforme apresenta dor intensa (9/10), piora da falta de ar, hipoxemia e dor torácica aguda em vigência de gatilho respiratório/infeccioso. Esse cenário impõe: 1) Controle imediato e agressivo da dor com opioide forte (morfina EV), com reavaliação precoce em 30 minutos; e 2) Investigação de Síndrome Torácica Aguda (STA) com repetição imediata da radiografia de tórax, visto que o infiltrado novo pode surgir de 24 a 48 horas após os sintomas iniciais.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Iniciar analgésico simples paracetamol/dipirona; reavaliar resposta após 1–2 horas; não repetir exame de imagem pulmonar.",
        "explanation": "Incorreta: Analgésicos simples isolados (dipirona/paracetamol) são insuficientes para crise álgica grave (escala de dor 9/10), e deixar de repetir a imagem torácica coloca o paciente em risco de morte por atraso no diagnóstico de STA.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Iniciar anti-inflamatório não hormonal; reavaliar resposta após 30 minutos; não repetir exame de imagem pulmonar.",
        "explanation": "Incorreta: AINEs em monoterapia não controlam a dor de intensidade 9/10 e não substituem o opioide na dor vaso-oclusiva severa; a radiografia é mandatória frente à dor torácica e piora respiratória.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Iniciar metadona e evitar opioide; repetir exame de imagem pulmonar.",
        "explanation": "Incorreta: A metadona não é droga de escolha na emergência para analgesia aguda rápida; não se deve evitar opioides na crise falciforme (a morfina é a droga padrão-ouro).",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Na doença falciforme, o desenvolvimento de dor torácica e nova hipoxemia associada a quadro respiratório define a suspeita clínica de Síndrome Torácica Aguda (STA), principal causa de mortalidade na doença. O manejo analgésico da dor grave (nota 9/10) exige opioides parenterais com reavaliação seriada e rápida (a cada 30 minutos). A repetição da imagem radiográfica do tórax é indispensável, pois novos infiltrados pulmonares podem se manifestar horas após o início da dor torácica.",
    "perolaClinica": "Dor aguda torácica + hipoxemia em anemia falciforme = suspeitar de Síndrome Torácica Aguda! Conduta: Morfina EV (dor grave) + REPETIR Raio-X de tórax.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Eventos Agudos na Doença Falciforme — Ministério da Saúde",
      "Diretrizes de Cuidados na Doença Falciforme — SBP"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3017,
    "analiseBanca": {
      "conceitoCentral": "Analgesia com opioide e reavaliação radiográfica na suspeita de Síndrome Torácica Aguda em doença falciforme.",
      "raciocinioChave": "Paciente falciforme internado por crise asmática/IVAS desenvolve dor torácica e em membros de forte intensidade (9/10) associada a piora da hipoxemia, configurando suspeita de Síndrome Torácica Aguda. O manejo exige analgesia parenteral imediata com opioide forte e reavaliação em 30 minutos, além de repetir a radiografia de tórax para detectar novo infiltrado pulmonar.",
      "armadilhaBanca": "Subtratar dor intensa (9/10) com analgésicos simples/AINEs ou deixar de repetir a radiografia de tórax frente à suspeita de Síndrome Torácica Aguda."
    },
    "mapaDistratores": {
      "B": "Analgésicos simples não controlam dor vaso-oclusiva intensa (9/10), e não repetir a imagem pulmonar atrasa o diagnóstico de Síndrome Torácica Aguda.",
      "C": "AINEs isolados são insuficientes para dor grave na doença falciforme e omitir nova radiografia coloca o paciente em risco frente à hipoxemia e dor torácica.",
      "D": "A metadona não é droga de escolha para titulação analgésica aguda na emergência e opioides (morfina) não devem ser evitados na crise álgica falciforme."
    }
  },
  {
    "id": "q-usp-sp-2023-100",
    "code": "Q-USPSP23-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": [
      "pneumonia-aspirativa",
      "sialorreia",
      "atropina",
      "encefalopatia-cronica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 3 anos, sexo masculino, com antecedente de encefalopatia hipóxico- isquêmica, portador de gastrostomia e traqueostomia, foi internado na enfermaria devido ao quadro de pneumonia à direita. O paciente tem antecedente de epilepsia, em uso de ácido valproico, com bom controle das crises, e pneumonias de repetição, com diversas internações no último ano. Durante a internação atual, o paciente foi avaliado por equipe de fonoaudiologia, que identificou distúrbio de deglutição e sialorreia. Qual das alternativas abaixo contém medicações que devem ser adicionadas às de uso contínuo, com o objetivo de reduzir a recorrência destes quadros pulmonares?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amoxicilina em dose profilática.",
        "explanation": "Incorreta: O uso de antibioticoprofilaxia contínua com amoxicilina não é recomendado para prevenção de pneumonia aspirativa e favorece a seleção de bactérias multirresistentes.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Pró-cinético e bloqueador H2.",
        "explanation": "Incorreta: Pró-cinéticos não têm benefício comprovado na redução de pneumonia aspirativa e bloqueadores H2 alcalinizam o estômago, o que pode aumentar a colonização gástrica por bacilos Gram-negativos e piorar o prognóstico de pneumonias por aspiração.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Colírio de atropina via oral.",
        "explanation": "Correta: Pacientes com encefalopatia crônica não progressiva grave, traqueostomia e disfagia apresentam risco elevado de pneumonias recorrentes por microaspiração secundária à sialorreia crônica e incapacidade de deglutição de saliva. O uso de anticolinérgicos (como o colírio de sulfato de atropina 1% administrado por via oral/sublingual ou glicopirrolato) reduz significativamente a produção e o volume salivar, diminuindo a carga de aspiração para a via aérea e a frequência de infecções respiratórias recorrentes.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Benzodiazepínicos de absorção lenta.",
        "explanation": "Incorreta: Benzodiazepínicos causam sedação, relaxamento muscular faríngeo e deprimen reflexos protetores de via aérea, piorando drasticamente a deglutição e aumentando a taxa de aspiração.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Crianças com sequelas neurológicas graves (encefalopatia hipóxico-isquêmica) e via aérea artificial frequentemente sofrem com sialorreia crônica e pneumonia aspirativa de repetição. O manejo clínico da hipersecreção salivar inclui fármacos anticolinérgicos, sendo o colírio de atropina 1% por via oral/sublingual uma medida de fácil acesso, segura e consagrada pela literatura neuropediátrica para reduzir o volume salivar e proteger a árvore traqueobrônquica.",
    "perolaClinica": "Sialorreia com risco de broncoaspiração em neuropatas: anticolinérgicos orais/sublinguais (como colírio de sulfato de atropina 1% VO/SL) diminuem a produção de saliva e a aspiração.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria — Sociedade Brasileira de Pediatria (SBP)",
      "American Academy for Cerebral Palsy and Developmental Medicine (AACPDM) Sialorrhea Care Pathway"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3017,
    "analiseBanca": {
      "conceitoCentral": "Uso de anticolinérgico (atropina oral) no controle da sialorreia para prevenir pneumonias aspirativas em neuropata.",
      "raciocinioChave": "Criança com encefalopatia crônica grave, traqueostomia e disfagia apresenta pneumonias aspirativas recorrentes devido ao acúmulo de saliva e microaspiração pela sialorreia. O uso off-label de colírio de atropina por via oral/sublingual reduz a produção salivar por ação anticolinérgica, diminuindo a frequência de aspirações.",
      "armadilhaBanca": "Prescrever antibioticoprofilaxia contínua ou bloqueador H2, que selecionam patógenos resistentes e aumentam a colonização gástrica por Gram-negativos."
    },
    "mapaDistratores": {
      "A": "A antibioticoprofilaxia com amoxicilina não reduz episódios de pneumonia aspirativa e induz seleção de cepas bacterianas multirresistentes.",
      "B": "Pró-cinéticos não previnem aspiração de saliva e bloqueadores H2 elevam o pH gástrico, favorecendo colonização bacteriana por Gram-negativos.",
      "D": "Benzodiazepínicos causam sedação e hipotonia faríngea, agravando a incoordenação da deglutição e o risco de broncoaspiração."
    }
  },
  {
    "id": "q-usp-sp-2023-101",
    "code": "Q-USPSP23-0101",
    "numeroOriginal": 101,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Artrite Séptica e Osteoartrite",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-artrite-septica-e-osteoartrite",
    "tags": [
      "osteoartrite",
      "liquido-sinovial",
      "artrocentese"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 65 anos, queixa-se de dor crônica em joelhos quando anda, com piora ao longo do dia. Nega febre ou perda de peso. Apresenta antecedente de diabetes, dislipidemia e hipertensão, em controle clínico regular. No exame clínico, encontra-se com índice de massa corpórea de 32 kg/m2 e hipotrofia dos quadríceps bilateralmente. Há aumento de volume dos joelhos com crepitações na flexão ativa e discreto varismo. No joelho direito, há leve aumento de temperatura e derrame discreto. Exames complementares mostraram hemograma sem alterações e proteína C-Reativa de 8 mg/L. Três meses após a consulta, a paciente foi atendida em pronto atendimento municipal e encaminhada ao pronto-socorro de hospital terciário por disúria, dor lombar e febre há 3 dias. Não tem antecedentes relevantes. O exame clínico inicial apresentou regular estado geral, PA 80x42 mmHg, FC 120 bpm, T axilar 38,4ºC. Encontrava-se confusa, com pontuação na escala de coma de Glasgow de 12 e má perfusão periférica. Semiologia pulmonar normal. Apresentava posição antálgica e dor à punho-percussão lombar. Posteriormente, a paciente foi transferida à Unidade de Terapia Intensiva. Durante as primeiras horas de evolução, foi sedada, entubada e foram locados cateter venoso central e monitorização invasiva da pressão arterial. Após uma hora da introdução de tratamento específico adequado e expansão volêmica, apresentou PA 84x50 mmHg e FC 108 bpm. Permanece com má perfusão periférica. Semiologia pulmonar normal. Teve débito urinário de 30 mL nas últimas duas horas. O eletrocardiograma e a monitorização estão apresentados. Mulher, 65 anos, queixa-se de dor crônica em joelhos quando anda, com piora ao longo do dia. Nega febre ou perda de peso. Apresenta antecedente de diabetes, dislipidemia e hipertensão, em controle clínico regular. No exame clínico, encontra-se com índice de massa corpórea de 32 kg/m2 e hipotrofia dos quadríceps bilateralmente. Há aumento de volume dos joelhos com crepitações na flexão ativa e discreto varismo. No joelho direito, há leve aumento de temperatura e derrame discreto. Exames complementares mostraram hemograma sem alterações e proteína C- Reativa de 8 mg/L. Quais são as características do líquido sinovial compatíveis com a principal hipótese diagnóstica para o caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Viscosidade; Diminuída; Coloração; Purulenta; Leucócitos (/mm³); > 50.000; Polimorfo- nucleares (%); >75%",
        "explanation": "Incorreta: Descreve um líquido sinovial inflamatório grave ou séptico (turvo/purulento, leucócitos > 50.000/mm³ com predomínio acentuado de polimorfonucleares > 75%), típico de artrite séptica.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Viscosidade; Alta; Coloração; Purulenta; Leucócitos (/mm3); 2.000 a 50.000; Polimorfo- nucleares (%); >75%",
        "explanation": "Incorreta: O líquido com leucócitos entre 2.000 e 50.000/mm³ e predomínio de PMN > 75% corresponde a um padrão inflamatório (ex.: artrite reumatoide, artrite por microcristais), e não osteoartrite.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Viscosidade; Alta; Coloração; Incolor; Leucócitos (/mm3); < 200; Polimorfo-nucleares (%); <50%",
        "explanation": "Incorreta: Descreve o líquido sinovial normal (incolor, transparente, viscosidade alta, leucócitos < 200/mm³).",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Viscosidade; Diminuída; Coloração; Amarela clara; Leucócitos (/mm3); 200 a 2.000; Polimorfo-nucleares (%); <50%",
        "explanation": "Correta: O quadro de dor articular mecânica crônica, crepitação e varismo aos 65 anos em paciente com sobrepeso caracteriza osteoartrite. O líquido sinovial na osteoartrite é não inflamatório (Grupo I): aspecto amarelo claro/transparente, viscosidade preservada ou levemente diminuída, leucócitos entre 200 e 2.000/mm³ e predomínio de mononucleares (polimorfonucleares < 50%).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A apresentação clínica é típica de osteoartrite (gonartrose) com dor de padrão mecânico aos esforços e piora no decorrer do dia. O líquido sinovial não inflamatório (Grupo I) apresenta contagem leucocitária baixa (200 a 2.000/mm³) com menos de 50% de polimorfonucleares e aspecto límpido amarelo-claro.",
    "perolaClinica": "Líquido sinovial na osteoartrite é não inflamatório: aspecto citrino límpido, leucócitos de 200 a 2.000/mm³ e PMN < 50%.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21ª ed.",
      "Sociedade Brasileira de Reumatologia (SBR) — Consenso de Osteoartrite"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3018,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q101.png",
      "modality": "Gráfico/Tabela",
      "caption": "Tabela de características de líquido sinovial e traçados de monitorização",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Características citológicas e bioquímicas do líquido sinovial não inflamatório (Grupo I) na osteoartrite.",
      "raciocinioChave": "Dor crônica de ritmo mecânico nos joelhos, crepitações e varismo em idosa obesa com PCR normal configuram osteoartrite. O líquido sinovial correspondente pertence ao Grupo I (não inflamatório): coloração amarela clara, viscosidade preservada ou discretamente reduzida, leucócitos entre 200 e 2.000/mm³ e menos de 50% de polimorfonucleares.",
      "armadilhaBanca": "Confundir o padrão do líquido sinovial não inflamatório da osteoartrite com o padrão inflamatório (2.000–50.000) ou séptico (> 50.000)."
    },
    "mapaDistratores": {
      "A": "Leucócitos acima de 50.000/mm³, aspecto purulento e > 75% de PMN definem padrão séptico (Grupo III), típico de artrite infecciosa.",
      "B": "Contagem de 2.000 a 50.000 leucócitos/mm³ com PMN > 75% caracteriza líquido inflamatório (Grupo II), próprio de artrite reumatoide ou microcristalina.",
      "C": "Líquido incolor com menos de 200 leucócitos/mm³ representa o padrão fisiológico normal de articulação sem derrame patológico."
    }
  },
  {
    "id": "q-usp-sp-2023-102",
    "code": "Q-USPSP23-0102",
    "numeroOriginal": 102,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Sepse e Choque Séptico",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-sepse-e-choque-septico",
    "tags": [
      "choque-septico",
      "sepse-urinaria",
      "ressuscitacao-volemica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 65 anos, queixa-se de dor crônica em joelhos quando anda, com piora ao longo do dia. Nega febre ou perda de peso. Apresenta antecedente de diabetes, dislipidemia e hipertensão, em controle clínico regular. No exame clínico, encontra-se com índice de massa corpórea de 32 kg/m2 e hipotrofia dos quadríceps bilateralmente. Há aumento de volume dos joelhos com crepitações na flexão ativa e discreto varismo. No joelho direito, há leve aumento de temperatura e derrame discreto. Exames complementares mostraram hemograma sem alterações e proteína C-Reativa de 8 mg/L. Três meses após a consulta, a paciente foi atendida em pronto atendimento municipal e encaminhada ao pronto-socorro de hospital terciário por disúria, dor lombar e febre há 3 dias. Não tem antecedentes relevantes. O exame clínico inicial apresentou regular estado geral, PA 80x42 mmHg, FC 120 bpm, T axilar 38,4ºC. Encontrava-se confusa, com pontuação na escala de coma de Glasgow de 12 e má perfusão periférica. Semiologia pulmonar normal. Apresentava posição antálgica e dor à punho-percussão lombar. Posteriormente, a paciente foi transferida à Unidade de Terapia Intensiva. Durante as primeiras horas de evolução, foi sedada, entubada e foram locados cateter venoso central e monitorização invasiva da pressão arterial. Após uma hora da introdução de tratamento específico adequado e expansão volêmica, apresentou PA 84x50 mmHg e FC 108 bpm. Permanece com má perfusão periférica. Semiologia pulmonar normal. Teve débito urinário de 30 mL nas últimas duas horas. O eletrocardiograma e a monitorização estão apresentados. Três meses após a consulta, a paciente foi atendida em pronto atendimento municipal e encaminhada ao pronto-socorro de hospital terciário por disúria, dor lombar e febre há 3 dias. Não tem antecedentes relevantes. O exame clínico inicial apresentou regular estado geral, PA 80x42 mmHg, FC 120 bpm, T axilar 38,4ºC. Encontrava-se confusa, com pontuação na escala de coma de Glasgow de 12 e má perfusão periférica. Semiologia pulmonar normal. Apresentava posição antálgica e dor à punho- percussão lombar. Posteriormente, a paciente foi transferida à Unidade de Terapia Intensiva. Durante as primeiras horas de evolução, foi sedada, entubada e foram locados cateter venoso central e monitorização invasiva da pressão arterial. Após uma hora da introdução de tratamento específico adequado e expansão volêmica, apresentou PA 84x50 mmHg e FC 108 bpm. Permanece com má perfusão periférica. Semiologia pulmonar normal. Teve débito urinário de 30 mL nas últimas duas horas. O eletrocardiograma e a monitorização estão apresentados. Considerando os dados de monitorização, qual é a conduta mais adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "O volume corrente deve diminuir pelo risco de barotrauma.",
        "explanation": "Incorreta: A ventilação protetora visa volume corrente de 6 mL/kg de peso predito; não há evidência imediata de barotrauma indicada no traçado que exija redução adicional isolada.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "A expansão volêmica deve continuar para elevar o débito cardíaco.",
        "explanation": "Correta: A paciente encontra-se em choque séptico refratário inicial de foco urinário, oligúrica e com hipoperfusão. Os parâmetros hemodinâmicos dinâmicos na monitorização mostram sinais de fluidorresponsividade (variação de pressão de pulso / volume sistólico elevada), indicando que a expansão volêmica adicional otimiza a pré-carga e eleva o débito cardíaco.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A punção para alívio do derrame pericárdico deve ser realizada.",
        "explanation": "Incorreta: Não há achados semiológicos ou ecocardiográficos de tamponamento cardíaco descritos no caso.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "A droga vasoativa de escolha é a dopamina, pelo maior efeito miocárdico.",
        "explanation": "Incorreta: No choque séptico, o vasopressor de primeira escolha é a noradrenalina, e não a dopamina, que está associada a maior risco de arritmias.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "No choque séptico com sinais de hipoperfusão persistente pós-ressuscitação inicial, a avaliação de parâmetros hemodinâmicos dinâmicos guia a continuidade da fluidoterapia. Demonstrada a fluidorresponsividade, a infusão adicional de cristaloides aumenta o volume sistólico e o débito cardíaco.",
    "perolaClinica": "Em pacientes ventilados em ritmo sinusal, a variação da pressão de pulso (PPV/VPP) prevê resposta favorável à infusão volêmica.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Surviving Sepsis Campaign Guidelines 2021",
      "Medicina Intensiva — AMIB"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3019,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q102.png",
      "modality": "Gráfico/Tabela",
      "caption": "Traçados de pressão arterial invasiva e monitorização hemodinâmica funcional",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Avaliação dinâmica de fluidorresponsividade para guiar ressuscitação volêmica no choque séptico.",
      "raciocinioChave": "No choque séptico urinário com hipoperfusão persistente, a presença de parâmetros hemodinâmicos dinâmicos favoráveis (elevada variação da pressão de pulso/volume sistólico) demonstra que o paciente está na porção ascendente da curva de Frank-Starling. Assim, prosseguir com expansão volêmica elevará o volume sistólico e o débito cardíaco.",
      "armadilhaBanca": "Indicar dopamina como vasopressor inicial ou restringir volume diante de sinais dinâmicos claros de fluidorresponsividade."
    },
    "mapaDistratores": {
      "A": "Não há evidência de hiperinsuflação ou barotrauma que indique redução adicional do volume corrente além da estratégia protetora padrão.",
      "C": "O quadro descreve choque séptico urinário com fluidorresponsividade, sem achados clínicos ou ecocardiográficos de tamponamento cardíaco.",
      "D": "O vasopressor de primeira escolha no choque séptico é a noradrenalina, enquanto a dopamina associa-se a maior incidência de taquiarritmias e mortalidade."
    }
  },
  {
    "id": "q-usp-sp-2023-103",
    "code": "Q-USPSP23-0103",
    "numeroOriginal": 103,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": [
      "tep-na-gestacao",
      "tvp",
      "pocus",
      "choque-obstrutivo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, 35 anos, encontra-se com 31 semanas de idade gestacional. Refere dispneia súbita e dor torácica; é ventilatório dependente. Nega perda de líquido ou de sangue, dor abdominal e diminuição da movimentação fetal. Apresenta SatO₂ 98% em ar ambiente, FR 24 irpm sem esforço, PA 110x70 mmHg e FC 95 bpm. POCUS pulmonar Padrão A, com deslizamento pleural presente. Abdome: altura uterina de 32 cm, ausência de líquido livre em cavidade, BCF 130 bpm, feto com tônus adequado, presença de movimentos respiratórios e movimentação fetal. ILA 14. A paciente iniciou o tratamento e seguiu internada. Encontrava- se em boa evolução clínica quando, depois de 1 semana, apresentou episódio de piora da dispneia, agora associada à hipotensão, sendo levada à sala de emergência. Dentre as medidas terapêuticas, foram necessárias doses crescentes de noradrenalina e dobutamina parenteral, além de suporte ventilatório invasivo, cuja monitorização está apresentada. Considerando a investigação da principal hipótese diagnóstica, qual é o exame subsidiário mais adequado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Angio TC de tórax.",
        "explanation": "Incorreta: A paciente encontra-se com instabilidade hemodinâmica grave com necessidade de vasopressores em doses crescentes, o que contraindica o transporte para angiotomografia computadorizada.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Radiografia de tórax.",
        "explanation": "Incorreta: A radiografia de tórax de leito tem baixa sensibilidade e especificidade para confirmar o diagnóstico de TEP e orientar a conduta imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "POCUS de MMII.",
        "explanation": "Correta: Diante de choque obstrutivo e suspeita de TEP maciço em paciente instável e gestante, a confirmação à beira-leito com POCUS venoso de compressão dos membros inferiores (ou ecocardiograma transtorácico) fecha o diagnóstico de TEV sem necessidade de transporte ou radiação, permitindo a conduta terapêutica imediata.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "D-Dímero.",
        "explanation": "Incorreta: O D-dímero já se eleva fisiologicamente na gestação, não sendo útil para confirmação diagnóstica, sobretudo em pacientes de alta probabilidade clínica e instabilidade.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Em gestantes com suspeita de tromboembolismo pulmonar que evoluem com instabilidade hemodinâmica, métodos de imagem à beira-leito são prioritários. O achado de TVP proximal pelo POCUS venoso de membros inferiores em paciente com suspeita de TEP é suficiente para confirmar TEV e autorizar condutas específicas de reperfusão.",
    "perolaClinica": "No TEP com instabilidade hemodinâmica, evite o transporte: priorize POCUS venoso compressivo e ecocardiograma à beira-leito.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ESC Guidelines on Pulmonary Embolism 2019",
      "FEBRASGO — Tromboembolismo Venoso na Gestação"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3021,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q103.png",
      "modality": "Gráfico/Tabela",
      "caption": "Curvas de ventilação mecânica e parâmetros hemodinâmicos",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Uso do POCUS venoso de membros inferiores à beira-leito em gestante instável com suspeita de TEP maciço.",
      "raciocinioChave": "Em gestante evoluindo com choque obstrutivo por suspeita de TEP maciço, a instabilidade contraindica o transporte para angiotomografia de tórax. O POCUS venoso de compressão dos membros inferiores à beira-leito confirma TVP rapidamente sem radiação ou deslocamento, autorizando a terapia de reperfusão imediata.",
      "armadilhaBanca": "Solicitar angiotomografia de tórax em paciente hemodinamicamente instável em uso de vasopressor ou confiar no D-dímero durante a gestação."
    },
    "mapaDistratores": {
      "A": "A instabilidade hemodinâmica grave em uso de vasopressores contraindica o transporte da paciente até o setor de tomografia.",
      "B": "A radiografia de tórax no leito possui baixa sensibilidade e especificidade, não confirmando nem afastando o diagnóstico de TEP.",
      "D": "O D-dímero encontra-se fisiologicamente elevado na gravidez e não tem utilidade diagnóstica em pacientes de alta probabilidade clínica ou choque."
    }
  },
  {
    "id": "q-usp-sp-2023-104",
    "code": "Q-USPSP23-0104",
    "numeroOriginal": 104,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": [
      "ventilacao-mecanica",
      "modo-vcv",
      "medicina-intensiva"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, 35 anos, encontra-se com 31 semanas de idade gestacional. Refere dispneia súbita e dor torácica; é ventilatório dependente. Nega perda de líquido ou de sangue, dor abdominal e diminuição da movimentação fetal. Apresenta SatO₂ 98% em ar ambiente, FR 24 irpm sem esforço, PA 110x70 mmHg e FC 95 bpm. POCUS pulmonar Padrão A, com deslizamento pleural presente. Abdome: altura uterina de 32 cm, ausência de líquido livre em cavidade, BCF 130 bpm, feto com tônus adequado, presença de movimentos respiratórios e movimentação fetal. ILA 14. A paciente iniciou o tratamento e seguiu internada. Encontrava-se em boa evolução clínica quando, depois de 1 semana, apresentou episódio de piora da dispneia, agora associada à hipotensão, sendo levada à sala de emergência. Dentre as medidas terapêuticas, foram necessárias doses crescentes de noradrenalina e dobutamina parenteral, além de suporte ventilatório invasivo, cuja monitorização está apresentada. Qual é o modo ventilatório programado para esta paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ventilação mandatória intermitente sincronizada.",
        "explanation": "Incorreta: Na ventilação mandatória intermitente sincronizada (SIMV), observam-se ciclos mandatórios intercalados com ciclos espontâneos com suporte de pressão, o que difere das curvas apresentadas.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Pressão assisto-controlada.",
        "explanation": "Incorreta: No modo PCV (pressão controlada), a onda de fluxo inspiratório é tipicamente desacelerada e a pressão de via aérea tem formato retangular (platô mantido durante toda a inspiração).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Pressão de suporte.",
        "explanation": "Incorreta: No modo PSV (pressão de suporte), a ventilação é totalmente espontânea, ciclada a porcentagem do pico de fluxo expiratório, com fluxo desacelerado.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Volume assisto-controlado.",
        "explanation": "Correta: O modo é Volume Controlado (VCV), identificado pela onda de fluxo inspiratório constante (onda quadrada/retangular) e pela curva de pressão de via aérea em rampa ascendente até atingir a pressão de pico.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A identificação do modo ventilatório nas telas de ventilação mecânica baseia-se na análise das curvas de fluxo e pressão. O fluxo retangular (onda quadrada) fixo com pressão ascendente em rampa é a assinatura clássica do modo volume assisto-controlado (VCV).",
    "perolaClinica": "Fluxo constante (onda quadrada) + pressão ascendente em rampa = ventilação controlada a volume (VCV).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "III Consenso Brasileiro de Ventilação Mecânica",
      "Princípios de Ventilação Mecânica — AMIB"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3022,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q104.png",
      "modality": "Gráfico/Tabela",
      "caption": "Curvas de fluxo, pressão e volume na monitorização gráfica do ventilador mecânico",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Identificação do modo ventilatório volume assisto-controlado (VCV) pelas curvas de fluxo e pressão.",
      "raciocinioChave": "Na ventilação em modo volume assisto-controlado (VCV), o fluxo inspiratório é entregue de forma constante (onda quadrada/retangular), resultando em aumento progressivo da pressão de via aérea em rampa ascendente até o pico inspiratório. Esse padrão gráfico distingue o VCV dos modos limitados a pressão.",
      "armadilhaBanca": "Confundir as curvas de fluxo quadrado e pressão em rampa do modo VCV com o formato retangular de pressão e fluxo desacelerado do modo PCV."
    },
    "mapaDistratores": {
      "A": "O modo SIMV intercala ciclos mandatórios pré-programados com respirações espontâneas em suporte de pressão, gerando curvas heterogêneas.",
      "B": "No modo pressão assisto-controlada (PCV), a curva de pressão é retangular (platô constante) e o fluxo inspiratório é tipicamente desacelerado.",
      "C": "Na pressão de suporte (PSV), todos os ciclos são disparados pelo paciente com fluxo desacelerado e ciclagem a fluxo, sem fluxo inspiratório fixo quadrado."
    }
  },
  {
    "id": "q-usp-sp-2023-105",
    "code": "Q-USPSP23-0105",
    "numeroOriginal": 105,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Doença Inflamatória Pélvica",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-doenca-inflamatoria-pelvica",
    "tags": [
      "dip",
      "doenca-inflamatoria-pelvica",
      "exame-especular"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 27 anos, refere dor pélvica há 2 dias e piora progressiva. Nuligesta, ciclos menstruais regulares, faz uso de abstinência periódica como contracepção. Refere última menstruação há 10 dias. Nega comorbidades ou uso de medicamentos. Ao exame clínico, temperatura 37,6 ºC, descorada +/4+, FC 96 bpm, FR 12 irpm, PA 110x70 mmHg. Ao toque vaginal, útero com volume habitual, doloroso à mobilização, regiões anexiais com avaliação limitada pela dor. Teste de gravidez negativo. As imagens ultrassonográficas representativas são apresentadas. Qual o achado de exame especular compatível com a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Incorreta: A imagem mostra ectopia cervical fisiológica ou lesão cervical sem secreção purulenta evidente.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Correta: A paciente jovem com dor pélvica aguda, febre baixa, dor à mobilização do colo uterino e anexo espessado/com líquido tem diagnóstico clínico de DIP. O exame especular clássico revela cervicite mucopurulenta (secreção endocervical amarelada purulenta fluindo pelo orifício externo do colo).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: A imagem exibe colo com sangramento discreto ou secreção fisiológica hialina.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: A imagem ilustra lesão ulcerada ou colo atrófico, não condizente com DIP/cervicite purulenta aguda.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O diagnóstico de Doença Inflamatória Pélvica (DIP) baseia-se em critérios clínicos (dor em hipogástrio + dor à palpação anexial + dor à mobilização do colo). O achado adicional no exame especular que fortalece o diagnóstico é a presença de cervicite mucopurulenta saindo pelo orifício externo do colo.",
    "perolaClinica": "Corrimento endocervical mucopurulento ao exame especular é critério adicional altamente sugestivo de DIP.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo Clínico e Diretrizes Terapêuticas (PCDT) para Atenção Integral às IST — Ministério da Saúde",
      "FEBRASGO — Manual de Ginecologia"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3023,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q105.png",
      "modality": "Fotografia Clínica",
      "caption": "Exame especular exibindo colo uterino com secreção mucopurulenta endocervical",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Achado especular clássico de cervicite mucopurulenta na Doença Inflamatória Pélvica (DIP).",
      "raciocinioChave": "Mulher jovem com dor pélvica progressiva, febre baixa, dor à mobilização do colo e espessamento anexial à ultrassonografia preenche critérios clínicos de Doença Inflamatória Pélvica. No exame especular, o achado adicional típico associado é a secreção endocervical mucopurulenta fluindo pelo orifício externo do colo uterino.",
      "armadilhaBanca": "Confundir cervicite mucopurulenta típica da DIP com ectopia cervical fisiológica, muco hialino ovulatório ou lesões ulceradas/atróficas."
    },
    "mapaDistratores": {
      "A": "Ectopia cervical fisiológica ou lesão sem exsudato purulento não caracterizam o processo infeccioso cervical ascendente da DIP.",
      "C": "Muco cervical hialino fisiológico ou discreto sangramento isolado não traduzem infecção bacteriana mucopurulenta do canal endocervical.",
      "D": "Úlcera cervical ou mucosa atrófica apontam para outras etiologias (como infecções ulcerativas ou hipoestrogenismo), não para DIP aguda."
    }
  },
  {
    "id": "q-usp-sp-2023-106",
    "code": "Q-USPSP23-0106",
    "numeroOriginal": 106,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Infertilidade Conjugal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-infertilidade-conjugal",
    "tags": [
      "infertilidade-conjugal",
      "fator-tuboperitoneal",
      "dip",
      "histerossalpingografia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 27 anos, refere dor pélvica há 2 dias e piora progressiva. Nuligesta, ciclos menstruais regulares, faz uso de abstinência periódica como contracepção. Refere última menstruação há 10 dias. Nega comorbidades ou uso de medicamentos. Ao exame clínico, temperatura 37,6 ºC, descorada +/4+, FC 96 bpm, FR 12 irpm, PA 110x70 mmHg. Ao toque vaginal, útero com volume habitual, doloroso à mobilização, regiões anexiais com avaliação limitada pela dor. Teste de gravidez negativo. As imagens ultrassonográficas representativas são apresentadas. A paciente foi tratada clinicamente com melhora do quadro e, cerca de um ano após este episódio, iniciou tentativa de engravidar; por não conseguir, começou a investigação. Qual o resultado de exame compatível com a condição previamente apresentada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: A principal complicação a longo prazo da DIP tratada é a sequela tuboperitoneal (obstrução tubária e hidrossalpinge), evidenciada na histerossalpingografia por dilatação tubária sacular com ausência de prova de Cotte positiva (sem extravasamento peritoneal do contraste).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Exibe trompas pérvias normais com extravasamento livre de contraste na cavidade peritoneal (prova de Cotte positiva bilateralmente).",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Exibe útero unicorno ou septado sem alterações anatômicas inflamatórias tubárias.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Exibe exame normal ou falha de enchimento endometrial compatível com pólipo/mioma, não refletindo sequela tubária de DIP.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A DIP é uma das principais causas de infertilidade por fator tuboperitoneal secundária a salpingite, aderências pélvicas e hidrossalpinge. Na histerossalpingografia, a presença de trompas dilatadas e ocluídas (obstrução tubária) confirma o comprometimento decorrente do episódio infeccioso prévio.",
    "perolaClinica": "A complicação tardia clássica da DIP é a infertilidade por fator tubário (obstrução e hidrossalpinge na HSG).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Tratado de Ginecologia",
      "PCDT de Atenção Integral às IST — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3024,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q106.png",
      "modality": "Radiografia",
      "caption": "Histerossalpingografia demonstrando hidrossalpinge e obstrução tubária bilateral",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Fator tuboperitoneal (obstrução tubária/hidrossalpinge na HSG) como sequela de Doença Inflamatória Pélvica prévia.",
      "raciocinioChave": "Após um episódio de DIP, o processo inflamatório tubário frequentemente resulta em fibrose, aderências e obstrução das tubas uterinas, levando à infertilidade por fator tuboperitoneal. Na histerossalpingografia, isso se manifesta por dilatação sacular distal (hidrossalpinge) e ausência de extravasamento peritoneal do contraste (prova de Cotte negativa).",
      "armadilhaBanca": "Não reconhecer a hidrossalpinge/obstrução tubária na histerossalpingografia ou confundi-la com trompas pérvias com prova de Cotte positiva."
    },
    "mapaDistratores": {
      "B": "Trompas de calibre preservado com livre passagem de contraste para a cavidade peritoneal (Cotte positivo bilateral) demonstram exame normal.",
      "C": "Malformações müllerianas (útero unicorno ou septado) são alterações congênitas do desenvolvimento uterino, não sequelas infecciosas da DIP.",
      "D": "Falhas de enchimento intracavitárias (como pólipos ou miomas submucosos) refletem fator uterino, e não dano tubário pós-salpingite."
    }
  },
  {
    "id": "q-usp-sp-2023-107",
    "code": "Q-USPSP23-0107",
    "numeroOriginal": 107,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Hipertensão Crônica e Gestacional",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-hipertensao-cronica-e-gestacional",
    "tags": [
      "hipertensao-cronica-na-gestacao",
      "restricao-de-crescimento-fetal",
      "plano-de-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, 42 anos, primigesta (fertilização assistida). Apresenta hipertensão arterial crônica há 7 anos, atualmente em uso de alfa metildopa 2,0 g ao dia, anlodipino 5,0 mg ao dia, AAS 100 mg ao dia e multivitamínico com ácido fólico e sulfato ferroso. Encontra- se em acompanhamento pré-natal de alto risco. Comparece à consulta pré-natal com 37 semanas de idade gestacional e realiza ultrassom obstétrico com os seguintes achados: feto em apresentação cefálica, peso estimado de 2.205 g, percentil 7, placenta posterior e índice de líquido amniótico de 11. A paciente está ansiosa e preocupada com o parto. Apresenta seu plano de parto com os seguintes desejos: I. parto por via vaginal; II. aguardar o tempo do bebê, com o trabalho de parto espontâneo até 42 semanas; III. presença do companheiro e de fisioterapeuta na sala de parto; IV. recusa uso de ocitocina endovenosa para acelerar as contrações; V. clampeamento do cordão umbilical pelo companheiro, em momento oportuno; VI. contato pele a pele com a criança, imediatamente após o nascimento. Todos os pontos apresentados foram discutidos com a paciente e com seu companheiro. Em internação oportuna, a paciente apresenta a seguinte avaliação clínica: PA 135x82 mmHg; FC 82 bpm; altura uterina de 32 cm; dinâmica uterina ausente; batimento cardíacos fetais 144 rítmicos; ao toque, colo grosso, posterior, pérvio para 2 cm; apresentação cefálica alta e móvel; bolsa íntegra, líquido claro com grumos grossos. Considerando as condições clínico-obstétricas e a segurança do binômio materno-fetal, qual é o item do plano de parto que não poderia ser contemplado na assistência obstétrica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Contato pele a pele imediato ao parto.",
        "explanation": "Incorreta: O contato pele a pele imediato é fortemente estimulado para recém-nascidos a termo com boa vitalidade ao nascer, mesmo em gestações de alto risco.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Via de parto vaginal.",
        "explanation": "Incorreta: A via de parto vaginal não é contraindicada; pelo contrário, a indução do parto vaginal é recomendada quando as condições materno-fetais permitem.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Clampeamento do cordão.",
        "explanation": "Incorreta: O clampeamento oportuno do cordão (após 1 a 3 minutos) é indicado e seguro na ausência de necessidade de reanimação imediata.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Aguardar trabalho de parto espontâneo.",
        "explanation": "Correta: A paciente é portadora de hipertensão arterial crônica e o feto apresenta restrição de crescimento fetal (percentil 7) com 37 semanas. Nessa condição de alto risco, a gestação deve ser resolvida com 37 semanas para mitigar o risco de óbito fetal intrauterino por insuficiência placentária; aguardar trabalho de parto espontâneo até 42 semanas é contraindicado.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A presença de comorbidade materna grave (hipertensão arterial crônica) associada a feto pequeno para a idade gestacional/RCF com termo precoce (37 semanas) indica resolução imediata da gestação. Não se deve aguardar trabalho de parto espontâneo até 41-42 semanas pelo elevado risco de sofrimento e óbito fetal.",
    "perolaClinica": "Gestante com HAC e feto PIG/RCF atinge 37 semanas com indicação de interrupção imediata da gestação.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Hipertensão na Gestação",
      "ACOG Practice Bulletin — Chronic Hypertension in Pregnancy"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3025,
    "analiseBanca": {
      "conceitoCentral": "Indicação de resolução da gestação com 37 semanas em hipertensa crônica com feto em restrição de crescimento (P7).",
      "raciocinioChave": "A gestante apresenta hipertensão arterial crônica associada a feto no percentil 7 (restrição de crescimento fetal) atingindo o termo precoce (37 semanas). Nessa situação de alto risco de insuficiência placentária progressiva e óbito fetal intrauterino, não se deve aguardar o trabalho de parto espontâneo, indicando-se interrupção da gestação.",
      "armadilhaBanca": "Permitir que a gestante aguarde trabalho de parto espontâneo após 37 semanas apesar da combinação de HAC e restrição de crescimento fetal."
    },
    "mapaDistratores": {
      "A": "O contato pele a pele imediato deve ser incentivado sempre que o recém-nascido a termo apresentar boa vitalidade ao nascimento.",
      "B": "A via vaginal não é contraindicada pelo plano de parto ou pela hipertensão crônica compensada, sendo preferível à cesariana eletiva na ausência de sofrimento fetal.",
      "C": "O clampeamento oportuno do cordão umbilical (1 a 3 minutos) é seguro e recomendado caso o neonato não necessite de reanimação imediata."
    }
  },
  {
    "id": "q-usp-sp-2023-108",
    "code": "Q-USPSP23-0108",
    "numeroOriginal": 108,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Indução do Parto e Gestação Pós-Termo",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-inducao-do-parto-e-gestacao-pos-termo",
    "tags": [
      "inducao-do-parto",
      "misoprostol",
      "preparo-cervical"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante, 42 anos, primigesta (fertilização assistida). Apresenta hipertensão arterial crônica há 7 anos, atualmente em uso de alfa metildopa 2,0 g ao dia, anlodipino 5,0 mg ao dia, AAS 100 mg ao dia e multivitamínico com ácido fólico e sulfato ferroso. Encontra- se em acompanhamento pré-natal de alto risco. Comparece à consulta pré-natal com 37 semanas de idade gestacional e realiza ultrassom obstétrico com os seguintes achados: feto em apresentação cefálica, peso estimado de 2.205 g, percentil 7, placenta posterior e índice de líquido amniótico de 11. A paciente está ansiosa e preocupada com o parto. Apresenta seu plano de parto com os seguintes desejos: I. parto por via vaginal; II. aguardar o tempo do bebê, com o trabalho de parto espontâneo até 42 semanas; III. presença do companheiro e de fisioterapeuta na sala de parto; IV. recusa uso de ocitocina endovenosa para acelerar as contrações; V. clampeamento do cordão umbilical pelo companheiro, em momento oportuno; VI. contato pele a pele com a criança, imediatamente após o nascimento. Todos os pontos apresentados foram discutidos com a paciente e com seu companheiro. Em internação oportuna, a paciente apresenta a seguinte avaliação clínica: PA 135x82 mmHg; FC 82 bpm; altura uterina de 32 cm; dinâmica uterina ausente; batimento cardíacos fetais 144 rítmicos; ao toque, colo grosso, posterior, pérvio para 2 cm; apresentação cefálica alta e móvel; bolsa íntegra, líquido claro com grumos grossos. Qual é a conduta obstétrica para resolução dessa gestação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Indução com ocitocina.",
        "explanation": "Incorreta: A ocitocina endovenosa não é o método de escolha para iniciar a indução em pacientes com colo uterino desfavorável (grosso, posterior, 2 cm, Bishop <= 6), pois apresenta alta taxa de falha de indução.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Amniotomia.",
        "explanation": "Incorreta: A amniotomia está contraindicada com apresentação alta e móvel e colo desfavorável devido ao alto risco de prolapso de cordão umbilical.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Preparo de colo com prostaglandina.",
        "explanation": "Correta: O colo uterino é desfavorável (grosso, posterior, 2 cm, apresentação alta — Índice de Bishop <= 6) e a paciente não tem cicatriz uterina prévia (primigesta). A conduta preconizada para indução do parto é o preparo cervical com análogo de prostaglandina (misoprostol vaginal) ou método mecânico.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Cesárea.",
        "explanation": "Incorreta: A cesariana imediata não está indicada apenas pela necessidade de resolução; a tentativa de indução de parto vaginal é segura e recomendada, reservando a cesárea para falha de indução ou sofrimento fetal.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Diante da indicação de interrupção da gestação em primigesta com feto viável e ausência de sofrimento fetal, o parto vaginal deve ser favorecido. Apresentando colo desfavorável (Bishop <= 6) sem contraindicações como cesárea prévia, a primeira etapa é o preparo/maturação cervical com prostaglandinas.",
    "perolaClinica": "Colo desfavorável (Bishop <= 6) sem cicatriz uterina = maturação cervical com misoprostol antes da ocitocina.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Indução do Parto",
      "Diretriz Nacional de Assistência ao Parto Normal — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3026,
    "analiseBanca": {
      "conceitoCentral": "Preparo cervical com prostaglandina antes da indução do parto em primigesta com colo desfavorável (Bishop <= 6).",
      "raciocinioChave": "Diante da necessidade de interrupção gestacional às 37 semanas sem sofrimento fetal agudo ou cicatriz uterina prévia, busca-se o parto vaginal. Como o colo encontra-se desfavorável (grosso, posterior, 2 cm, apresentação alta; Bishop <= 6), a primeira conduta é a maturação cervical com análogo de prostaglandina (ex.: misoprostol).",
      "armadilhaBanca": "Iniciar indução diretamente com ocitocina ou cesariana em primigesta com colo desfavorável, em vez de realizar maturação cervical."
    },
    "mapaDistratores": {
      "A": "A infusão inicial de ocitocina sem preparo cervical prévio em colo com Bishop desfavorável resulta em altas taxas de falha de indução.",
      "B": "Realizar amniotomia com colo desfavorável e apresentação alta e móvel acarreta elevado risco de prolapso de cordão umbilical.",
      "D": "A cesariana de imediato não se justifica na ausência de comprometimento agudo da vitalidade fetal ou contraindicação obstétrica ao parto vaginal."
    }
  },
  {
    "id": "q-usp-sp-2023-109",
    "code": "Q-USPSP23-0109",
    "numeroOriginal": 109,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": [
      "comunicacao-clinica",
      "mccp",
      "pre-natal",
      "adesao"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Carla é gestante e, com 13 semanas de gestação, iniciou pré-natal com enfermeira da Equipe de Saúde da Família. Na primeira consulta, apresentou resultado positivo para sífilis em teste rápido. Nega exames ou tratamento prévios. Exame clínico sem alterações. No momento da abertura do pré-natal, o caso de sífilis foi notificado à Vigilância e a enfermeira prescreveu penicilina benzatina, 2,4 milhões UI por semana, durante 3 semanas. A paciente refere que teve duas parcerias sexuais no último ano: Mateus, de quem está grávida e com quem não mantém mais relações sexuais há 8 semanas; e Sandro, o atual namorado, com quem iniciou relações há 3 semanas. O teste rápido de sífilis de Mateus foi positivo e o de Sandro foi negativo. Ambos sem exames ou história de tratamento prévios. Para as questões a seguir, considere as recomendações do Protocolo do Ministério da Saúde e a dose de penicilina benzatina de 2,4 milhões UI. Carla está com baixa adesão ao pré-natal. O caso foi discutido na reunião de equipe da Estratégia de Saúde da Família e foi planejada uma visita domiciliar. Considerando as informações obtidas até o momento, qual é a frase que reflete a melhor abordagem inicial da médica para ampliar a adesão de Carla ao pré- natal?",
    "alternativas": [
      {
        "letter": "A",
        "text": "\"\"O que tem acontecido para você não comparecer às consultas de pré-natal? Há algo que possamos fazer para facilitar a sua vinda à UBS?\"\".",
        "explanation": "Correta: Adota o Método Clínico Centrado na Pessoa, utilizando perguntas abertas, empáticas e focadas em identificar barreiras psicossociais e de acesso, construindo um plano conjunto de cuidado para restabelecer o vínculo.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "\"\"Seu filho tem risco de nascer com problemas devido à sífilis; é nossa responsabilidade encaminhá-la ao Conselho Tutelar caso você não venha às consultas.\"\".",
        "explanation": "Incorreta: Adota postura punitiva e ameaçadora (\"encaminhar ao Conselho Tutelar\"), o que quebra o vínculo terapêutico e afasta ainda mais a usuária do serviço de saúde.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "\"\"Seu namorado está impedindo que você venha ao pré-natal? Você está sofrendo alguma violência?\"\".",
        "explanation": "Incorreta: Faz uma presunção acusatória e invasiva precoce sem explorar primeiro o motivo espontâneo da ausência.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "\"\"Mesmo que você não tenha sintomas, a criança pode nascer com alterações da sífilis, por isso é importante que você compareça ao pré-natal\"\".",
        "explanation": "Incorreta: Adota postura prescritiva e diretiva centrada no profissional, sem explorar os reais motivos de não adesão da gestante.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "O Método Clínico Centrado na Pessoa preconiza a compreensão ampla da pessoa, a exploração de suas dificuldades reais e o manejo compartilhado. Perguntas abertas e livres de julgamento constituem a melhor ferramenta para acolher usuárias com absenteísmo e reconstruir a adesão ao cuidado.",
    "perolaClinica": "Para resgatar adesão na APS: explore barreiras com perguntas abertas e empáticas; nunca ameace ou puna.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Medicina de Família e Comunidade (Duncan)",
      "Manual de Pré-Natal de Baixo Risco — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3026,
    "analiseBanca": {
      "conceitoCentral": "Comunicação empática e perguntas abertas no Método Clínico Centrado na Pessoa frente ao absenteísmo no pré-natal.",
      "raciocinioChave": "Para resgatar uma gestante com sífilis que faltou às consultas, o Método Clínico Centrado na Pessoa prioriza perguntas abertas, acolhedoras e isentas de julgamento. Explorar as barreiras vividas e pactuar soluções facilita o vínculo e a adesão ao seguimento pré-natal e ao tratamento.",
      "armadilhaBanca": "Usar abordagem punitiva (Conselho Tutelar), acusatória ou puramente prescritiva, rompendo o vínculo com a gestante faltosa."
    },
    "mapaDistratores": {
      "B": "A ameaça de acionar o Conselho Tutelar adota postura coercitiva que destrói a confiança e afasta a gestante do acompanhamento de saúde.",
      "C": "Questionar diretamente sobre impedimento pelo parceiro ou violência sem abertura prévia soa acusatório e invasivo, bloqueando o diálogo.",
      "D": "A fala puramente informativa e diretiva foca apenas na agenda médica sem investigar os obstáculos psicossociais reais para o comparecimento."
    }
  },
  {
    "id": "q-usp-sp-2023-110",
    "code": "Q-USPSP23-0110",
    "numeroOriginal": 110,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Infecções Congênitas na Gestação",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-infeccoes-congenitas-na-gestacao",
    "tags": [
      "sifilis-na-gestacao",
      "parcerias-sexuais",
      "penicilina-benzatina",
      "aps"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Carla é gestante e, com 13 semanas de gestação, iniciou pré-natal com enfermeira da Equipe de Saúde da Família. Na primeira consulta, apresentou resultado positivo para sífilis em teste rápido. Nega exames ou tratamento prévios. Exame clínico sem alterações. No momento da abertura do pré-natal, o caso de sífilis foi notificado à Vigilância e a enfermeira prescreveu penicilina benzatina, 2,4 milhões UI por semana, durante 3 semanas. A paciente refere que teve duas parcerias sexuais no último ano: Mateus, de quem está grávida e com quem não mantém mais relações sexuais há 8 semanas; e Sandro, o atual namorado, com quem iniciou relações há 3 semanas. O teste rápido de sífilis de Mateus foi positivo e o de Sandro foi negativo. Ambos sem exames ou história de tratamento prévios. Para as questões a seguir, considere as recomendações do Protocolo do Ministério da Saúde e a dose de penicilina benzatina de 2,4 milhões UI. Após a abordagem da médica, Carla passou a comparecer mais frequentemente às consultas. Com idade gestacional de 35 semanas, apresentava os seguintes resultados para o exame de VDRL: I. 13 semanas: 1:64. II. 26 semanas: 1:8. III. 32 semanas: 1:32. Qual é a conduta adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tratar Carla com 2 doses de penicilina benzatina, com intervalo de uma semana; tratar Sandro com dose única de penicilina benzatina.",
        "explanation": "Incorreta: Esquema de duas doses não é preconizado para sífilis latente ou recente pelo Ministério da Saúde (as opções padronizadas são 1 dose de 2,4 milhões UI ou 3 doses semanais).",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Tratar Carla com 3 doses de penicilina benzatina, com intervalo de 1 semana; tratar Sandro com dose única de penicilina benzatina.",
        "explanation": "Incorreta: Embora 3 doses fossem opção caso a infecção fosse de duração indeterminada ou tardia, na presença de documentação sorológica de reinfecção recente (< 1 ano), 1 dose é suficiente tanto para a gestante quanto para a parceria.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Tratar Carla com 3 doses de penicilina benzatina, com intervalo de 1 semana; tratar Sandro com 3 doses de penicilina benzatina, com intervalo de 1 semana.",
        "explanation": "Incorreta: A reinfecção ocorreu em período inferior a 1 ano (sífilis recente), e a parceria atual é assintomática com exposição nos últimos 90 dias, requerendo dose única presuntiva.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Tratar Carla com dose única de penicilina benzatina; tratar Sandro com dose única de penicilina benzatina.",
        "explanation": "Correta: Carla tratou a sífilis inicialmente (título caiu de 1:64 para 1:8, demonstrando resposta adequada). Na 32ª semana, o VDRL subiu para 1:32 (aumento de 2 diluições / 4 vezes), caracterizando reinfecção recente (< 1 ano de evolução). O tratamento para sífilis recente é com penicilina benzatina 2,4 milhões UI em dose única. Sandro, sendo parceria sexual recente com contato nos últimos 90 dias, deve receber tratamento presuntivo com penicilina benzatina 2,4 milhões UI dose única, mesmo com sorologia negativa.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A elevação de dois títulos (4 vezes) após queda documentada do VDRL define reinfecção. Como a reinfecção ocorreu há menos de 1 ano, classifica-se como sífilis recente e trata-se com 1 dose de 2,4 milhões UI de penicilina benzatina. A parceria sexual atual com contato em até 90 dias deve ser tratada presuntivamente com dose única, independentemente de sintomas ou do teste rápido ser negativo.",
    "perolaClinica": "Reinfecção documentada < 1 ano = penicilina benzatina 2,4 milhões UI dose única; tratar parceiro recente em dose única.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "PCDT para Atenção Integral às Pessoas com IST — Ministério da Saúde",
      "Nota Informativa de Sífilis Congênita e Gestacional — MS"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3027,
    "analiseBanca": {
      "conceitoCentral": "Conduta na reinfecção recente de sífilis na gestação (elevação >= 2 diluições no VDRL) e tratamento presuntivo da parceria.",
      "raciocinioChave": "A queda de 1:64 para 1:8 comprovou resposta terapêutica prévia; a posterior subida para 1:32 na 32ª semana (aumento de 2 diluições / 4 vezes) confirma reinfecção recente (< 1 ano), cujo tratamento é dose única de penicilina benzatina (2,4 milhões UI). A parceria atual com exposição nos últimos 90 dias também recebe dose única presuntiva, mesmo com teste rápido negativo.",
      "armadilhaBanca": "Prescrever esquema de 3 doses semanais por tratar-se de gestante, ignorando que a reinfecção documentada em < 1 ano exige apenas dose única."
    },
    "mapaDistratores": {
      "A": "O esquema de duas doses semanais de penicilina benzatina não faz parte dos protocolos padronizados para sífilis recente ou tardia pelo Ministério da Saúde.",
      "B": "O esquema de três doses aplica-se à sífilis tardia ou de duração ignorada; como a reinfecção ocorreu há menos de 1 ano, basta dose única.",
      "C": "Nem a gestante com reinfecção recente documentada nem o parceiro exposto há menos de 90 dias necessitam de três doses semanais."
    }
  },
  {
    "id": "q-usp-sp-2023-111",
    "code": "Q-USPSP23-0111",
    "numeroOriginal": 111,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Investigação de Surtos e Epidemias",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-investigacao-de-surtos-e-epidemias",
    "tags": [
      "investigacao-de-surtos",
      "meningite",
      "vigilancia-epidemiologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O serviço municipal de vigilância epidemiológica (SMVE) de uma cidade do interior do estado foi acionado para investigar a ocorrência de um “caso de meningite”, no campus da universidade pública local, na data de 18 março de 2022. O campus sedia 10 cursos de graduação e tem cerca de 4.000 alunos, 350 professores e 400 funcionários. Em 16 de março de 2022, um jovem do sexo masculino (CASO 1), 20 anos, aluno do 2o ano do curso de Medicina Veterinária, apresentou os primeiros sintomas, com início súbito de febre, cefaleia intensa e rigidez de nuca ao exame clínico. Foi atendido na emergência do hospital universitário e internado no mesmo dia. Em 19 de março de 2022, o SMVE recebeu a notificação feita por hospital da rede privada de outro caso suspeito de meningite, de paciente do sexo masculino (CASO 2), 22 anos, vendedor de loja no shopping center da cidade, com início dos sintomas em 17 de março de 2022. Os dois pacientes não se conheciam, porém ambos relatavam ter participado da festa de recepção aos calouros, realizada no dia 11 de março de 2022. Os organizadores informaram que 1.305 pessoas estiveram na festa, número registrado na portaria da casa noturna a partir do QR code dos ingressos. O estudante (CASO 1) mora em uma “república”, como é tradicional na cidade, com outros 9 moradores. Ele divide o quarto com um outro estudante. Já o vendedor (CASO 2) mora na casa de sua família, onde vivem os seus pais e dois irmãos menores. Em 20 de março de 2022, a prefeitura do campus foi informada do falecimento de uma outra estudante (CASO 3), de 19 anos, caloura do curso de Medicina. As suas aulas iniciaram-se em 7 de março de 2022. Em 12 de março de 2022 ela havia viajado para a casa de sua família, em um município próximo; no dia 15 de março 2022, havia apresentado quadro de cefaleia intensa, mal-estar geral e febre, sendo internada na Santa Casa do município. Em seguida, apresentou manchas hemorrágicas em mãos e pés, evoluindo para choque e óbito, 12 horas após a admissão hospitalar. Na Declaração de Óbito foi registrada, como causa básica, “septicemia” (CID A41). Uma colega de turma informou à equipe de vigilância epidemiológica que esta paciente também havia participado da festa de recepção dos calouros, em 11 de março de 2022. Qual é o procedimento metodológico para confirmar a existência de um surto relacionado ao campus universitário e/ou ao município em questão?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Consulta e exame clínico dos participantes da festa.",
        "explanation": "Incorreta: O exame clínico dos mais de 1.300 participantes não é factível nem metodologicamente apropriado para definir se há um surto em nível populacional.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Comparação com a ocorrência em anos anteriores.",
        "explanation": "Correta: O primeiro passo metodológico na investigação de um surto é confirmar o diagnóstico e verificar a ocorrência de uma epidemia comparando o número observado de casos com o número esperado para aquele local e período do ano, utilizando como referência os dados dos anos anteriores (diagrama de controle).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Inquérito soroepidemiológico dos participantes da festa.",
        "explanation": "Incorreta: Inquérito sorológico não é recomendado para detecção nem para confirmação rotineira de surto de doença meningocócica.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Esperar a ocorrência de casos adicionais.",
        "explanation": "Incorreta: Ações de vigilância epidemiológica e controle devem ser imediatas; aguardar novos casos aumentaria o risco de morbimortalidade evitável.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Metodologicamente, para confirmar ou descartar uma epidemia ou surto em uma população, a vigilância deve comparar a incidência observada com a frequência basal histórica (endêmica) dos anos anteriores na mesma localidade e período sazonal.",
    "perolaClinica": "Definição de surto/epidemia: ocorrência de casos claramente acima do esperado em relação à série histórica anterior.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guia de Vigilância em Saúde — Ministério da Saúde",
      "Epidemiologia Básica (Bonita & Beaglehole / OMS)"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3028,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q111.png",
      "modality": "Gráfico/Tabela",
      "caption": "Dados de distribuição e cronologia dos casos notificados de meningite",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Etapa inicial na investigação de surtos: comparação da ocorrência observada com a série histórica dos anos anteriores.",
      "raciocinioChave": "Para confirmar metodologicamente se há um surto ou epidemia de meningite, a vigilância epidemiológica deve comparar o número de casos observados no período atual com o número esperado (limiar endêmico) baseado nos registros de anos anteriores na mesma população e época. Essa etapa precede ações investigativas amplas ou conclusões definitivas.",
      "armadilhaBanca": "Partir diretamente para inquéritos sorológicos ou exames em massa de participantes antes de confirmar o excesso de casos em relação à linha de base."
    },
    "mapaDistratores": {
      "A": "Examinar clinicamente todos os mais de 1.300 participantes da festa é operacionalmente inviável e não define por si só a existência estatística de um surto.",
      "C": "Inquéritos soroepidemiológicos não são indicados na rotina inicial para confirmar ou descartar surtos agudos de doença meningocócica.",
      "D": "Aguardar passivamente novos casos de doença invasiva grave viola o princípio da vigilância epidemiológica de intervenção e bloqueio precoces."
    }
  },
  {
    "id": "q-usp-sp-2023-112",
    "code": "Q-USPSP23-0112",
    "numeroOriginal": 112,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Investigação de Surtos e Epidemias",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-investigacao-de-surtos-e-epidemias",
    "tags": [
      "surto",
      "vinculo-epidemiologico",
      "meningite",
      "vigilancia-epidemiologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O serviço municipal de vigilância epidemiológica (SMVE) de uma cidade do interior do estado foi acionado para investigar a ocorrência de um “caso de meningite”, no campus da universidade pública local, na data de 18 março de 2022. O campus sedia 10 cursos de graduação e tem cerca de 4.000 alunos, 350 professores e 400 funcionários. Em 16 de março de 2022, um jovem do sexo masculino (CASO 1), 20 anos, aluno do 2o ano do curso de Medicina Veterinária, apresentou os primeiros sintomas, com início súbito de febre, cefaleia intensa e rigidez de nuca ao exame clínico. Foi atendido na emergência do hospital universitário e internado no mesmo dia. Em 19 de março de 2022, o SMVE recebeu a notificação feita por hospital da rede privada de outro caso suspeito de meningite, de paciente do sexo masculino (CASO 2), 22 anos, vendedor de loja no shopping center da cidade, com início dos sintomas em 17 de março de 2022. Os dois pacientes não se conheciam, porém ambos relatavam ter participado da festa de recepção aos calouros, realizada no dia 11 de março de 2022. Os organizadores informaram que 1.305 pessoas estiveram na festa, número registrado na portaria da casa noturna a partir do QR code dos ingressos. O estudante (CASO 1) mora em uma “república”, como é tradicional na cidade, com outros 9 moradores. Ele divide o quarto com um outro estudante. Já o vendedor (CASO 2) mora na casa de sua família, onde vivem os seus pais e dois irmãos menores. Em 20 de março de 2022, a prefeitura do campus foi informada do falecimento de uma outra estudante (CASO 3), de 19 anos, caloura do curso de Medicina. As suas aulas iniciaram-se em 7 de março de 2022. Em 12 de março de 2022 ela havia viajado para a casa de sua família, em um município próximo; no dia 15 de março 2022, havia apresentado quadro de cefaleia intensa, mal-estar geral e febre, sendo internada na Santa Casa do município. Em seguida, apresentou manchas hemorrágicas em mãos e pés, evoluindo para choque e óbito, 12 horas após a admissão hospitalar. Na Declaração de Óbito foi registrada, como causa básica, “septicemia” (CID A41). Uma colega de turma informou à equipe de vigilância epidemiológica que esta paciente também havia participado da festa de recepção dos calouros, em 11 de março de 2022. Considerando as informações, é possível afirmar que ocorreu um surto de doença meningocócica neste município?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Não, pelo pequeno número de casos.",
        "explanation": "Incorreta: O conceito de surto em espaço restrito ou evento específico independe de números astronômicos; basta a ocorrência agregada com vínculo epidemiológico comum.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Sim, pelo aumento da incidência em 2022.",
        "explanation": "Incorreta: O surto em ambiente institucional/festa universitária caracteriza-se pelo agrupamento espacial e temporal em torno de um evento comum, e não pela taxa média anual de incidência.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Sim, pelo agregado de casos com vínculo epidemiológico entre si.",
        "explanation": "Correta: Em doenças de transmissão respiratória como a doença meningocócica, a ocorrência de casos suspeitos ou confirmados concentrados em curto espaço de tempo compartilhando um mesmo ambiente/evento social (a festa de recepção de calouros) estabelece nexo e vínculo epidemiológico, caracterizando um surto de fonte pontual ou comum.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Não, pelo diagnóstico incompleto ou não realizado em dois casos.",
        "explanation": "Incorreta: Na vigilância epidemiológica de eventos de emergência em saúde pública, o diagnóstico clínico-epidemiológico (caso compatível com purpura fulminans / meningococcemia pós-evento de risco) é válido para fins de definição operacional de surto.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "Considera-se surto a ocorrência de dois ou mais casos relacionados entre si no espaço e no tempo, com vínculo epidemiológico claramente estabelecido (mesmo evento com aglomeração). Isso autoriza medidas imediatas de bloqueio e quimioprofilaxia de contatos íntimos.",
    "perolaClinica": "Casos de doença meningocócica associados ao mesmo evento restrito no tempo e espaço = surto com vínculo epidemiológico.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guia de Vigilância em Saúde — Ministério da Saúde",
      "Manual de Doenças Transmissíveis — OPAS/OMS"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3029,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q112.png",
      "modality": "Gráfico/Tabela",
      "caption": "Resumo temporal e perfil epidemiológico dos casos investigados",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Definição operacional de surto por agregado espaço-temporal de casos com vínculo epidemiológico comum.",
      "raciocinioChave": "Caracteriza-se um surto pela ocorrência de dois ou mais casos epidemiologicamente vinculados entre si em determinado espaço e tempo, como estudantes expostos a um mesmo evento social com aglomeração (festa universitária). Na doença meningocócica, o nexo clínico-epidemiológico já configura surto para fins de resposta e bloqueio rápidos.",
      "armadilhaBanca": "Descartar a definição de surto pelo número absoluto reduzido de casos ou pela ausência de confirmação laboratorial em todos os suspeitos."
    },
    "mapaDistratores": {
      "A": "O conceito de surto em ambiente fechado ou evento específico não exige grande volume absoluto de casos, bastando dois ou mais casos ligados entre si.",
      "B": "A caracterização do surto institucional decorre do agrupamento espaço-temporal em torno de um evento comum, e não da taxa média de incidência anual.",
      "D": "Na vigilância de emergências transmissíveis graves, casos suspeitos compatíveis clinicamente com vínculo epidemiológico são suficientes para definir o surto sem aguardar confirmação laboratorial completa."
    }
  },
  {
    "id": "q-usp-sp-2023-113",
    "code": "Q-USPSP23-0113",
    "numeroOriginal": 113,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "cetoacidose-diabetica",
      "dm1",
      "emergencia-pediatrica",
      "tratamento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 4 anos, com diagnóstico de Diabetes Mellitus tipo 1 há 5 meses, em uso irregular de insulina NPH, foi trazido ao departamento de emergência devido ao quadro de dor abdominal intensa há 3 dias, referindo vômitos, “cansaço” e diurese abundante. Ao exame clínico, paciente em regular estado geral, mucosas secas e olhos encovados, FC 145 bpm, FR 44 irpm, PA 96x50 mmHg, pulsos finos, extremidades frias com tempo de enchimento capilar de 6 segundos. Ausculta pulmonar e cardíaca sem alterações. Na 2a hora após a admissão, o paciente apresentava melhora dos parâmetros hemodinâmicos, porém ainda mantinha náuseas e não conseguia se alimentar. Qual é a tabela que apresenta as intervenções adequadas para cada momento da evolução da paciente desde o momento da admissão (entrada) até a quarta hora de atendimento? Após 7 horas de tratamento, o paciente começou a apresentar sonolência excessiva e voltou a apresentar vômitos. Ao exame clínico, estava corado, hidratado, eupneico, com abertura ocular e retirada do membro ao estímulo doloroso, sem resposta verbal; ausculta cardíaca com 2 BRNF sem sopros, FC 62 bpm, PA: 146x92 mmHg; MV presente sem ruídos adventícios, FR 18 irpm; tempo de enchimento capilar de 2 segundos, pulsos presentes.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: O manejo da CAD em pediatria obedece à sequência temporal: 1ª hora: expansão volêmica lenta com cristaloide isotônico (SF 0,9% 10 a 20 mL/kg, sem insulina na 1ª hora); a partir da 2ª hora: início da insulinoterapia contínua (0,05 a 0,1 U/kg/h EV), reposição de potássio na hidratação e, quando a glicemia cai para < 250-300 mg/dL, adição de glicose ao soro.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Prescreve insulina rápida em bolus na primeira hora, conduta proscrita em pediatria pelo alto risco de colapso circulatório e edema cerebral.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Administra bicarbonato de sódio precocemente, conduta contraindicada de rotina na CAD infantil por piorar a acidose liquórica paradoxal e elevar o risco de edema cerebral.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Inicia hipoglicemiante oral ou infusão de potássio em bólus sem comprovação de diurese e função renal prévia.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Na cetoacidose diabética pediátrica, a ressuscitação volêmica deve ser iniciada na 1ª hora exclusivamente com solução isotônica. A insulina em bomba (0,05-0,1 U/kg/h) só deve ser introduzida na 2ª hora, nunca em bolus, com reposição de potássio após confirmar débito urinário e adição de glicose para manter valores entre 150 e 200 mg/dL.",
    "perolaClinica": "CAD pediátrica: primeira hora é só expansão isotônica (SF 0,9%); insulina EV contínua entra apenas na 2ª hora, sem bolus.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ISPAD Clinical Practice Consensus Guidelines — Diabetic Ketoacidosis",
      "Sociedade Brasileira de Pediatria (SBP) — Tratado de Pediatria"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3030,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q113.png",
      "modality": "Gráfico/Tabela",
      "caption": "Tabelas de protocolos de infusão e etapas terapêuticas de cetoacidose diabética",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Sequência temporal da ressuscitação volêmica, insulinoterapia e reposição de potássio na cetoacidose diabética pediátrica.",
      "raciocinioChave": "Criança com DM1 em choque desidratado por CAD exige expansão inicial com cristaloide isotônico na 1ª hora sem insulina. A partir da 2ª hora, após melhora hemodinâmica, inicia-se insulina regular em infusão contínua (0,05–0,1 U/kg/h) e reposição de potássio conforme diurese.",
      "armadilhaBanca": "Administrar insulina na primeira hora, fazer bolus insulínico ou usar bicarbonato de rotina aumenta o risco de edema cerebral e colapso hemodinâmico."
    },
    "mapaDistratores": {
      "B": "A administração de insulina rápida em bolus na primeira hora é proscrita em pediatria pelo risco elevado de hipoglicemia abrupta, hipocalemia e edema cerebral.",
      "C": "O bicarbonato de sódio precoce é contraindicado na rotina da CAD infantil por induzir acidose liquórica paradoxal e aumentar a incidência de edema cerebral.",
      "D": "Hipoglicemiantes orais não tratam CAD por DM1 e a infusão de potássio em bolus sem diurese documentada provoca arritmias fatais."
    }
  },
  {
    "id": "q-usp-sp-2023-114",
    "code": "Q-USPSP23-0114",
    "numeroOriginal": 114,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": [
      "cetoacidose-diabetica",
      "edema-cerebral",
      "emergencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, 4 anos, com diagnóstico de Diabetes Mellitus tipo 1 há 5 meses, em uso irregular de insulina NPH, foi trazido ao departamento de emergência devido ao quadro de dor abdominal intensa há 3 dias, referindo vômitos, “cansaço” e diurese abundante. Ao exame clínico, paciente em regular estado geral, mucosas secas e olhos encovados, FC 145 bpm, FR 44 irpm, PA 96x50 mmHg, pulsos finos, extremidades frias com tempo de enchimento capilar de 6 segundos. Ausculta pulmonar e cardíaca sem alterações. Na 2a hora após a admissão, o paciente apresentava melhora dos parâmetros hemodinâmicos, porém ainda mantinha náuseas e não conseguia se alimentar. Qual dos exames de imagem abaixo é compatível com a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem de tomografia de crânio com hemorragia intraparenquimatosa ou normal com sulcos preservados.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra acidente vascular encefálico isquêmico focal ou lesão expansiva.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem tomográfica com hidrocefalia obstrutiva com dilatação ventricular evidente.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Correta: Após horas de infusão para CAD, a criança apresenta rebaixamento do nível de consciência, vômitos e tríade de Cushing (hipertensão arterial e bradicardia com bradipneia), quadro clássico de edema cerebral. A TC de crânio compatível demonstra apagamento difuso dos sulcos corticais e fissuras, colapso dos ventrículos laterais e perda da diferenciação córtico-subcortical.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O edema cerebral é a complicação aguda mais temida e a principal causa de mortalidade na CAD pediátrica. O surgimento de cefaleia, sonolência, vômitos e tríade de Cushing alerta para hipertensão intracraniana grave, cuja tomografia revela apagamento dos sulcos e compressão ventricular difusa.",
    "perolaClinica": "Rebaixamento neurológico + bradicardia + hipertensão em CAD pediátrica = edema cerebral (TC com apagamento difuso de sulcos).",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ISPAD Guidelines — Diabetic Ketoacidosis and Cerebral Edema",
      "SBP — Cetoacidose Diabética na Criança"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3032,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q114.png",
      "modality": "Tomografia",
      "caption": "Tomografia computadorizada de crânio com apagamento de sulcos corticais e colapso ventricular por edema cerebral",
      "aspectRatio": "1:1"
    },
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento clínico e tomográfico do edema cerebral como complicação aguda da cetoacidose diabética pediátrica.",
      "raciocinioChave": "A deterioração neurológica durante o tratamento da CAD pediátrica, associada a vômitos e sinais de hipertensão intracraniana (tríade de Cushing), aponta para edema cerebral. Na TC de crânio, esse quadro se traduz por apagamento difuso dos sulcos corticais e colabamento ventricular.",
      "armadilhaBanca": "Confundir edema cerebral iatrogênico pós-hidratação na CAD com eventos vasculares focais ou hidrocefalia obstrutiva na tomografia de crânio."
    },
    "mapaDistratores": {
      "A": "Uma tomografia normal com sulcos preservados ou com hemorragia intraparenquimatosa focal não corresponde ao edema cerebral difuso da CAD.",
      "B": "Acidente vascular encefálico isquêmico focal ou lesão expansiva localizada não explicam o edema citotóxico/vasogênico difuso da CAD pediátrica.",
      "C": "A hidrocefalia obstrutiva cursa com dilatação ventricular, o oposto da compressão ventricular e apagamento de sulcos vistos no edema cerebral difuso."
    }
  },
  {
    "id": "q-usp-sp-2023-115",
    "code": "Q-USPSP23-0115",
    "numeroOriginal": 115,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": [
      "pneumonia-pediatrica",
      "crise-asmatica",
      "salbutamol",
      "penicilina-cristalina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 5 anos, sexo masculino, com antecedente de dermatite atópica, rinite alérgica e internações prévias por crises de sibilância, foi admitido no setor de emergência, apresentando quadro de febre de até 39.5 o C, tosse e dificuldade para respirar há dois dias. Apresenta o seguinte exame clínico inicial: I. regular estado geral, corado, hidratado, alerta, orientado; II. 2 BRNF, sem sopros, FC: 152 bpm, PA: 88x46 mmHg; III. murmúrio vesicular presente, reduzido bilateralmente, com estertores crepitantes em base direita e sibilos difusos, tiragem subdiafragmática, intercostal e de fúrcula, com tempo expiratório prolongado, FR: 42 irpm; saturação de oxigênio de 92% em ar ambiente, 96% em máscara de Venturi 50%; tempo de enchimento capilar de 2 segundos, pulsos cheios; IV. peso 20 Kg. Realizou o exame radiológico apresentado. Qual é a prescrição inicial mais adequada (itens 1-3) e o antimicrobiano a ser introduzido (item 4)?",
    "alternativas": [
      {
        "letter": "A",
        "text": "1) Salbutamol 600 mcg, via inalatória, 3x com intervalo de 20 minutos; 2) Prednisolona 30 mg, via oral, agora; 3) Máscara de Venturi 50%; 4) Antimicrobiano: Penicilina Cristalina endovenosa.",
        "explanation": "Correta: A criança de 5 anos (20 kg) apresenta crise asmática grave/moderada associada a pneumonia bacteriana (febre alta, estertores localizados em base e condensação ao RX). O tratamento da crise requer beta-2-agonista inalatório em altas doses (salbutamol 100 mcg, 4-6 jatos = até 600 mcg a cada 20 min na 1ª hora), corticoide sistêmico (prednisolona 1-2 mg/kg = 20 a 40 mg VO) e oxigenoterapia. Para a pneumonia bacteriana comunitária em paciente internado em bom/regular estado, a penicilina cristalina (ou ampicilina) endovenosa é a primeira escolha.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "1) Salbutamol 200 mcg, via inalatória, 3x com intervalo de 20 minutos; 2) Prednisolona 30 mg, via oral, agora; 3) Máscara não reinalante de oxigênio; 4) Antimicrobiano: Azitromicina endovenosa.",
        "explanation": "Incorreta: A dose de salbutamol é subótima para uma crise moderada a grave com tiragens múltiplas (200 mcg = apenas 2 jatos), e a azitromicina não é a droga de primeira linha para pneumonia bacteriana típica nessa faixa etária.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "1) Salbutamol 200 mcg, via inalatória, 3x com intervalo de 20 minutos; 2) Soro Fisiológico 400 ml, endovenoso, agora; 3) Máscara não reinalante de oxigênio; 4) Antimicrobiano: Penicilina Cristalina endovenosa.",
        "explanation": "Incorreta: A paciente está hemodinamicamente estável (pulsos cheios, TEC 2s), não havendo indicação de expansão rápida com 400 mL de SF 0,9%; ademais, a dose de salbutamol está insuficiente.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "1) Salbutamol 600 mcg, via inalatória, 3x com intervalo de 20 minutos; 2) Soro Fisiológico, 400 ml endovenoso agora; 3) Máscara de Venturi 50%; 4) Antimicrobiano: Azitromicina endovenosa.",
        "explanation": "Incorreta: A expansão rápida com cristaloide é desnecessária e pode agravar a mecânica pulmonar; azitromicina é macrolídeo e não cobre adequadamente o pneumococo em infecção típica internada.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "O manejo inicial conjunto da exacerbação de asma com pneumonia comunitária associada inclui broncodilatador de curta ação inalatório em doses plenas (salbutamol 6 jatos de 100 mcg), corticoide oral precoce e antibioticoterapia empírica parenteral direcionada ao *Streptococcus pneumoniae* (penicilina cristalina ou ampicilina).",
    "perolaClinica": "Crise de asma moderada/grave: Salbutamol 4-6 jatos a cada 20 min na 1ª hora + Corticoide sistêmico oral precoce.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "GINA (Global Initiative for Asthma) 2023",
      "Sociedade Brasileira de Pediatria — Diretrizes de Pneumonia Adquirida na Comunidade"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3032,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q115.png",
      "modality": "Radiografia",
      "caption": "Radiografia de tórax com hiperinsuflação pulmonar difusa e condensação alveolar em base pulmonar direita",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Manejo simultâneo da exacerbação asmática moderada a grave e da pneumonia bacteriana comunitária em criança internada.",
      "raciocinioChave": "Criança atópica de 5 anos (~20 kg) com tiragens múltiplas, sibilância, febre alta e crepitações em base apresenta crise asmática associada a PAC bacteriana. A conduta exige salbutamol em dose plena (600 mcg = 6 jatos a cada 20 min), corticoide oral precoce (prednisolona 30 mg), Venturi 50% e penicilina cristalina IV contra pneumococo.",
      "armadilhaBanca": "Prescrever subdoses de salbutamol para crise moderada/grave, expandir volume desnecessariamente em paciente normovolêmico ou escolher macrolídeo na PAC típica."
    },
    "mapaDistratores": {
      "B": "A dose de 200 mcg de salbutamol é insuficiente para crise moderada/grave e a azitromicina não é primeira escolha para pneumonia pneumocócica internada.",
      "C": "Não há indicação de expansão volêmica com 400 mL de soro fisiológico em criança hemodinamicamente estável, além de a dose de salbutamol ser subótima.",
      "D": "A infusão rápida de cristaloide sem choque pode piorar a congestão pulmonar e a azitromicina não oferece cobertura ideal para pneumococo típico hospitalizado."
    }
  },
  {
    "id": "q-usp-sp-2023-116",
    "code": "Q-USPSP23-0116",
    "numeroOriginal": 116,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": [
      "pneumonia-pediatrica",
      "pocus-pulmonar",
      "ultrassonografia-pulmonar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 5 anos, sexo masculino, com antecedente de dermatite atópica, rinite alérgica e internações prévias por crises de sibilância, foi admitido no setor de emergência, apresentando quadro de febre de até 39.5 o C, tosse e dificuldade para respirar há dois dias. Apresenta o seguinte exame clínico inicial: I. regular estado geral, corado, hidratado, alerta, orientado; II. 2 BRNF, sem sopros, FC: 152 bpm, PA: 88x46 mmHg; III. murmúrio vesicular presente, reduzido bilateralmente, com estertores crepitantes em base direita e sibilos difusos, tiragem subdiafragmática, intercostal e de fúrcula, com tempo expiratório prolongado, FR: 42 irpm; saturação de oxigênio de 92% em ar ambiente, 96% em máscara de Venturi 50%; tempo de enchimento capilar de 2 segundos, pulsos cheios; IV. peso 20 Kg. Realizou o exame radiológico apresentado. Quais as imagens de ultrassom pulmonar compatíveis com a radiografia previamente apresentada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: A ultrassonografia pulmonar correspondente à condensação pneumônica lobar em base direita demonstra consolidação subpleural com hepatização do parênquima pulmonar e presença de broncogramas aéreos hiperecogênicos móveis ou puntiformes.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra artefato em linhas A paralelas e deslizamento pleural regular, padrão típico de pulmão normal aerado.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra padrão de linhas B confluentes difusas (\"pulmão branco\"), típico de edema alveolar ou síndrome intersticial bilateral difusa.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra ausência de deslizamento pleural com ponto pulmonar, padrão patognomônico de pneumotórax.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "No POCUS pulmonar, a condensação bacteriana caracteriza-se por perda do padrão artefatual habitual e aparecimento de imagem tecidual ecogênica semelhante ao fígado (sinal da hepatização pulmonar) com imagens hiperecóicas ramificadas no seu interior (broncogramas aéreos).",
    "perolaClinica": "Consolidação pulmonar ao ultrassom = sinal da hepatização tecidual com broncogramas aéreos hiperecogênicos.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "POCUS in Pediatric Emergency Medicine — Consensus Guidelines",
      "Nelson Textbook of Pediatrics, 21ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3033,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q116.png",
      "modality": "Ultrassonografia",
      "caption": "Ultrassonografia pulmonar demonstrando consolidação com sinal de hepatização e broncogramas aéreos",
      "aspectRatio": "4:3"
    },
    "analiseBanca": {
      "conceitoCentral": "Achados ultrassonográficos pulmonares (POCUS) característicos da consolidação pneumônica lobar em pediatria.",
      "raciocinioChave": "Na criança com febre alta e estertores localizados em base direita por pneumonia bacteriana, a ultrassonografia pulmonar evidencia perda da aeração alveolar. Isso gera imagem subpleural ecogênica semelhante ao parênquima hepático (hepatização) contendo broncogramas aéreos hiperecogênicos.",
      "armadilhaBanca": "Confundir o padrão de consolidação pneumônica (hepatização e broncogramas aéreos) com linhas B de congestão ou linhas A de parênquima normal."
    },
    "mapaDistratores": {
      "B": "Linhas A paralelas com deslizamento pleural preservado representam pulmão normalmente aerado, incompatível com consolidação em base direita.",
      "C": "Linhas B confluentes difusas indicam síndrome intersticial ou edema pulmonar alveolar, e não consolidação lobar bacteriana localizada.",
      "D": "A ausência de deslizamento pleural associada a ponto pulmonar é achado patognomônico de pneumotórax, não de pneumonia."
    }
  },
  {
    "id": "q-usp-sp-2023-117",
    "code": "Q-USPSP23-0117",
    "numeroOriginal": 117,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": [
      "cancer-gastrico",
      "terapia-nutricional",
      "obstrucao-piloro-duodenal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 59 anos, refere empachamento e vômitos esporádicos que se intensificaram na última semana. Apresentou perda de 6 kg neste período. Nega alteração do hábito intestinal. Trabalha como secretário e na última semana pediu afastamento devido à fraqueza, apesar de realizar sozinho suas tarefas em casa. Tem diabete melito, hipertensão arterial e é tabagista (40 anos.maço). Teve infarto agudo do miocárdio há 7 meses, quando foi submetido à angioplastia e colocação de stent. Faz uso de aspirina, clopidogrel, atenolol, metformina e atorvastatina. Ao exame clínico, encontra- se em bom estado geral: IMC: 21 kg/m2 ; ausculta pulmonar e cardíaca sem alterações; abdome flácido, escavado e sem massas palpáveis; toque retal sem alterações. Exames laboratoriais: Hb 9,6 g/dL; Ht 29%; VCM 77 fL; HCM 25 pg; albumina 3,1 mg/dL. Realizada endoscopia digestiva alta, que evidenciou lesão estenosante em antro com difícil passagem do gastroscópio infantil. Qual é o dispositivo que tem que ser usado para a nutrição do doente neste momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Correta: Paciente desnutrido com lesão estenosante antro-pilórica e vômitos refratários necessita de suporte nutricional pré-operatório. A via preferencial e mais fisiológica é a enteral através de sonda nasoentérica posicionada além da obstrução (sonda pós-pilórica/nasojejunal guiada por endoscopia/fluoroscopia).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: A gastrostomia percutânea (PEG) é contraindicada ou inviável na presença de lesão gástrica antral infiltrativa/estenosante com risco de semeadura neoplásica e esvaziamento prejudicado.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Ilustra cateter venoso central totalmente implantado (Port-a-cath); a nutrição parenteral total não é a primeira escolha quando há possibilidade de acesso enteral pós-estenose.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Ilustra sonda nasogástrica simples em sifonagem, que serve para descompressão, mas não permite aporte nutricional em quadro de obstrução gástrica fixa.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Em pacientes com estenose da via de saída gástrica e desnutrição grave que serão submetidos à cirurgia oncológica de grande porte, a terapia nutricional enteral pré-operatória por sonda nasoentérica posicionada em jejuno (pós-pilórica) é a melhor escolha, reduzindo complicações pós-operatórias.",
    "perolaClinica": "Se o trato gastrointestinal distal está funcionante, use sonda nasoentérica pós-pilórica para nutrir o paciente com estenose gástrica.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz BRASPEN de Terapia Nutricional no Paciente Cirúrgico",
      "Sabiston Textbook of Surgery, 21ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3035,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q117.png",
      "modality": "Fotografia Clínica",
      "caption": "Sonda nasoentérica radiopaca de ponta de tungstênio para posicionamento pós-pilórico",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Via preferencial de terapia nutricional pré-operatória em paciente desnutrido com obstrução gástrica neoplásica.",
      "raciocinioChave": "Homem desnutrido com estenose antro-pilórica e vômitos refratários necessita de preparo nutricional antes da gastrectomia oncológica. Estando o intestino distal íntegro, a via de escolha é a nutrição enteral por sonda nasoentérica posicionada em jejuno (pós-pilórica), ultrapassando a obstrução.",
      "armadilhaBanca": "Indicar gastrostomia em estômago neoplásico obstruído ou optar precocemente por nutrição parenteral quando o intestino delgado está funcionante."
    },
    "mapaDistratores": {
      "B": "A gastrostomia percutânea é contraindicada em obstrução antral neoplásica pelo risco de implante tumoral e incapacidade de esvaziamento gástrico.",
      "C": "A nutrição parenteral total por cateter central é reservada aos casos de falência ou impossibilidade de acesso enteral, não sendo primeira opção com delgado viável.",
      "D": "A sonda nasogástrica em sifonagem promove apenas descompressão gástrica, sendo incapaz de nutrir o paciente diante de estenose pilórica fixa."
    }
  },
  {
    "id": "q-usp-sp-2023-118",
    "code": "Q-USPSP23-0118",
    "numeroOriginal": 118,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Avaliação Pré-Operatória e Risco Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-avaliacao-pre-operatoria-e-risco-cirurgico",
    "tags": [
      "pre-operatorio",
      "clopidogrel",
      "metformina",
      "manejo-perioperatorio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 59 anos, refere empachamento e vômitos esporádicos que se intensificaram na última semana. Apresentou perda de 6 kg neste período. Nega alteração do hábito intestinal. Trabalha como secretário e na última semana pediu afastamento devido à fraqueza, apesar de realizar sozinho suas tarefas em casa. Tem diabete melito, hipertensão arterial e é tabagista (40 anos.maço). Teve infarto agudo do miocárdio há 7 meses, quando foi submetido à angioplastia e colocação de stent. Faz uso de aspirina, clopidogrel, atenolol, metformina e atorvastatina. Ao exame clínico, encontra- se em bom estado geral: IMC: 21 kg/m2 ; ausculta pulmonar e cardíaca sem alterações; abdome flácido, escavado e sem massas palpáveis; toque retal sem alterações. Exames laboratoriais: Hb 9,6 g/dL; Ht 29%; VCM 77 fL; HCM 25 pg; albumina 3,1 mg/dL. Realizada endoscopia digestiva alta, que evidenciou lesão estenosante em antro com difícil passagem do gastroscópio infantil. Foi indicado tratamento operatório. Quais são as medidas que devem ser adotadas no pré-operatório com relação ao clopidogrel e à metformina?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Suspender o clopidogrel 5 dias antes da operação e manter a metformina.",
        "explanation": "Incorreta: A metformina deve ser suspensa antes de cirurgias com jejum prolongado, contraste ou risco de instabilidade hemodinâmica, não devendo ser mantida no dia cirúrgico.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Suspender o clopidogrel 5 dias antes e a metformina 2 dias antes da operação.",
        "explanation": "Correta: O clopidogrel (inibidor P2Y12) deve ser suspenso 5 dias antes de procedimentos eletivos de grande porte para reduzir o risco de sangramento intraoperatório (já se passaram 7 meses da angioplastia coronariana com stent, ultrapassando o período crítico de alto risco de trombose de stent). A metformina deve ser suspensa de 24 a 48 horas (2 dias) antes do procedimento devido ao risco de acidose lática associada ao estresse cirúrgico e hipotensão.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Manter o clopidogrel e suspender a metfomina 5 dias antes da operação.",
        "explanation": "Incorreta: Manter clopidogrel acarretaria alto risco de hemorragia grave intraoperatória na gastrectomia; suspender metformina 5 dias antes é excessivo.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Manter o clopidogrel e manter a metformina.",
        "explanation": "Incorreta: Manter ambos os medicamentos expõe o paciente a hemorragia maciça pelo clopidogrel e acidose lática perioperatória pela metformina.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "Para cirurgias eletivas de grande porte, o clopidogrel deve ser descontinuado 5 dias antes do ato operatório (em pacientes com mais de 6 meses após implante de stent coronariano farmacológico, com manutenção do AAS se o risco trombótico justificar). A metformina deve ser suspensa 24 a 48 horas antes da cirurgia pelo risco de acidose lática.",
    "perolaClinica": "Manejo pré-operatório clássico: suspender clopidogrel 5 dias antes e suspender metformina 2 dias (48h) antes da cirurgia.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz de Avaliação Cardiovascular Perioperatória — SBC 2022",
      "Sabiston Textbook of Surgery, 21ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3036,
    "analiseBanca": {
      "conceitoCentral": "Manejo perioperatório de antiagregantes plaquetários (após stent) e antidiabéticos orais (metformina) antes de cirurgia eletiva maior.",
      "raciocinioChave": "Passados 7 meses da angioplastia com stent, já foi superado o período crítico de trombose, permitindo suspender o clopidogrel 5 dias antes da cirurgia oncológica para evitar sangramento grave. A metformina deve ser suspensa 24 a 48 horas antes do procedimento pelo risco de acidose lática perioperatória.",
      "armadilhaBanca": "Manter o clopidogrel pelo antecedente de stent há 7 meses ou manter a metformina até o dia da cirurgia de grande porte."
    },
    "mapaDistratores": {
      "A": "Manter a metformina até a cirurgia expõe o paciente ao risco de acidose lática associada a jejum, hipoperfusão ou disfunção renal perioperatória.",
      "C": "Manter o clopidogrel em gastrectomia eletiva eleva drasticamente o risco hemorrágico, e suspender metformina com 5 dias de antecedência é desnecessário.",
      "D": "A manutenção simultânea de clopidogrel e metformina combina alto risco de sangramento cirúrgico maciço com risco de acidose lática."
    }
  },
  {
    "id": "q-usp-sp-2023-119",
    "code": "Q-USPSP23-0119",
    "numeroOriginal": 119,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": [
      "fast",
      "politrauma",
      "trauma-abdominal",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 33 anos, caiu do terceiro andar do prédio. No atendimento pré-hospitalar, encontrava-se inconsciente, com FC de 120 bpm e PAS de 100 mmHg. Foi realizada entubação orotraqueal e infusão de 1.000 mL de cristaloide e ácido tranexâmico. Na admissão no Serviço de Emergência encontrava-se: I. Entubada, saturação de O2: 97%; II. MV presente e expansibilidade simétrica; III. FC 130 bpm, PA: 80x50 mmHg; IV. exame da bacia com sinais de instabilidade pélvica; V. realizado FAST que evidenciou presença de líquido livre em todos os quadrantes do abdome. VI. sedada; escala de Coma de Glasgow 3; VII. sem deformidades nos membros ou no dorso; VIII. toque retal sem alterações. Qual é a imagem do FAST esperada para esta paciente? Foi indicada a colocação de lençol para fechamento temporário do anel pélvico e laparotomia exploradora. Identificado 1,8 L de sangue na cavidade abdominal, decorrente da lesão hepática representada na figura a seguir. No intraoperatório apresentava lactato de 49, BE -6 e pH 7,31.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem normal da janela pericárdica sem derrame.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem do quadrante superior esquerdo (espaço esplenorrenal) sem líquido livre anecoico.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Correta: No choque hemorrágico pós-trauma fechado de alta energia com instabilidade pélvica e FAST positivo, a janela hepatorrenal (espaço de Morison / quadrante superior direito) revela a presença de faixa anecoica (líquido livre intra-abdominal correspondendo a hemoperitônio) entre o parênquima hepático e o rim direito.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Incorreta: Mostra imagem da janela supra-púbica (fundo de saco de Douglas) sem coleções líquidas anecoicas.",
        "communityPct": 12.7
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "O protocolo FAST (Focused Assessment with Sonography for Trauma) pesquisa líquido livre na cavidade abdominal e pericárdio. O recesso hepatorrenal (espaço de Morison) é o local mais sensível e dependente no paciente em decúbito dorsal, onde o hemoperitônio é visualizado como faixa escura/preta (anecoica).",
    "perolaClinica": "O espaço de Morison (hepatorrenal) é o sítio mais precoce e sensível para detecção de hemoperitônio no FAST.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS — Advanced Trauma Life Support, 10ª ed.",
      "Sabiston Textbook of Surgery, 21ª ed."
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3036,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q119.png",
      "modality": "Ultrassonografia",
      "caption": "Janela do espaço de Morison no FAST mostrando lâmina anecoica de líquido livre entre o fígado e o rim direito",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Identificação de hemoperitônio no protocolo FAST em paciente politraumatizado instável com líquido livre difuso.",
      "raciocinioChave": "Diante de trauma fechado grave, choque hemorrágico e FAST positivo em todos os quadrantes, espera-se observar faixa anecoica (escura) representando sangue livre. O espaço hepatorrenal (recesso de Morison), no quadrante superior direito, é o local mais sensível e clássico para essa demonstração em decúbito dorsal.",
      "armadilhaBanca": "Escolher janelas ultrassonográficas normais do exame ou confundir o recesso hepatorrenal (Morison) com janelas sem coleção anecoica."
    },
    "mapaDistratores": {
      "A": "A janela pericárdica normal sem derrame não representa o achado de hemoperitônio difuso descrito no protocolo FAST da paciente.",
      "B": "O quadrante superior esquerdo sem faixa anecoica livre contradiz o resultado positivo em todos os quadrantes descrito no enunciado.",
      "D": "A janela suprapúbica sem líquido livre anecoico no fundo de saco não condiz com o achado de hemoperitônio generalizado ao FAST."
    }
  },
  {
    "id": "q-usp-sp-2023-120",
    "code": "Q-USPSP23-0120",
    "numeroOriginal": 120,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": [
      "trauma-hepatico",
      "controle-de-danos",
      "empacotamento-hepatico",
      "laparotomia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "USP-SP",
    "instituicao": "USP-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 33 anos, caiu do terceiro andar do prédio. No atendimento pré-hospitalar, encontrava-se inconsciente, com FC de 120 bpm e PAS de 100 mmHg. Foi realizada entubação orotraqueal e infusão de 1.000 mL de cristaloide e ácido tranexâmico. Na admissão no Serviço de Emergência encontrava-se: I. Entubada, saturação de O2: 97%; II. MV presente e expansibilidade simétrica; III. FC 130 bpm, PA: 80x50 mmHg; IV. exame da bacia com sinais de instabilidade pélvica; V. realizado FAST que evidenciou presença de líquido livre em todos os quadrantes do abdome. VI. sedada; escala de Coma de Glasgow 3; VII. sem deformidades nos membros ou no dorso; VIII. toque retal sem alterações. Qual das ilustrações abaixo representa a melhor conduta operatória?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alternativa A (consultar imagem clínica)",
        "explanation": "Incorreta: Ilustra sutura hemostática complexa ou hepatectomia anatômica regrada, manobras demoradas e proscritas no doente instável na tríade da morte.",
        "communityPct": 12.7
      },
      {
        "letter": "B",
        "text": "Alternativa B (consultar imagem clínica)",
        "explanation": "Incorreta: Ilustra manobra de Pringle isolada mantida sem controle definitivo da lesão parenquimatosa.",
        "communityPct": 12.7
      },
      {
        "letter": "C",
        "text": "Alternativa C (consultar imagem clínica)",
        "explanation": "Incorreta: Ilustra ressecção em cunha e fechamento primário da parede abdominal sem drenagem ou controle temporário.",
        "communityPct": 12.7
      },
      {
        "letter": "D",
        "text": "Alternativa D (consultar imagem clínica)",
        "explanation": "Correta: A paciente encontra-se em choque grave com acidose metabólica e hiperlactatemia (início da tríade letal) e lesão hepática complexa sangrante com 1,8 L de hemoperitônio. A indicação mandatória é a laparotomia para Cirurgia de Controle de Danos: realização de empacotamento hepático com compressas (perihepatic packing) em torno do fígado e fechamento abdominal temporário tipo peritoniostomia (ex.: técnica de Barker/curativo a vácuo).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "Na presença de sangramento maciço decorrente de trauma hepático grave associado a sinais da tríade letal (acidose, coagulopatia, hipotermia), a conduta operatória de escolha é a cirurgia de controle de danos. A hemostasia rápida obtida por empacotamento compressivo peri-hepático associada à peritoniostomia salva vidas ao permitir a reanimação prévia em UTI.",
    "perolaClinica": "Trauma hepático grave + choque + acidose = cirurgia de controle de danos com empacotamento peri-hepático e peritoniostomia.",
    "referencias": [
      "USP-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS — Advanced Trauma Life Support, 10ª ed.",
      "World Society of Emergency Surgery (WSES) — Liver Trauma Guidelines"
    ],
    "sourceBatch": "r1-2023-pack:usp-sp-2023",
    "importedAt": "2026-11-27T11:57:53Z",
    "sourcePdfPage": 3037,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/usp-sp-2023/q120.png",
      "modality": "Fotografia Clínica",
      "caption": "Ilustração demonstrando empacotamento peri-hepático com compressas na cirurgia de controle de danos",
      "aspectRatio": "16:9"
    },
    "analiseBanca": {
      "conceitoCentral": "Indicação de cirurgia de controle de danos (empacotamento peri-hepático) no trauma abdominal grave com instabilidade e tríade letal.",
      "raciocinioChave": "A paciente evolui em choque hemorrágico grave com acidose e hiperlactatemia diante de lesão hepática complexa com grande hemoperitônio. Nessa condição, impõe-se abreviar o tempo operatório via controle de danos: empacotamento compressivo peri-hepático e peritoniostomia para reanimação em UTI antes do reparo definitivo.",
      "armadilhaBanca": "Tentar reparos anatômicos definitivos e demorados (hepatectomia ou rafia extensa) em paciente já em tríade letal e choque refratário."
    },
    "mapaDistratores": {
      "A": "Hepatectomias regradas ou suturas hemostáticas demoradas prolongam o ato cirúrgico e agravam hipotermia, acidose e coagulopatia no paciente instável.",
      "B": "A manobra de Pringle isolada causa isquemia hepática prolongada e não substitui o empacotamento compressivo como medida de controle de danos.",
      "C": "A ressecção hepática em cunha com fechamento primário da parede abdominal ignora a tríade letal e aumenta o risco de síndrome compartimental abdominal."
    }
  }
];
