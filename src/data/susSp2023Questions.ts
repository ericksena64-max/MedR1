import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa SUS-SP 2023 — Acesso Direto (100 questões: 91 válidas + 9 anuladas).
 * Extraída deterministicamente com gabarito oficial e comentários ancorados em diretrizes.
 */
export const SUS_SP_2023_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-sus-sp-2023-001",
    "code": "Q-SUSSP23-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Coloproctologia",
    "subtema": "Fissura Anal Crônica",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Entre as alternativas a seguir, assinale aquela que apresenta uma alteração para a qual, ao exame proctológico, está indicado o uso de pomada tópica de Diltiazen a 2% na região anal.",
    "alternativas": [
      {
        "letter": "A",
        "text": "sangramento anal com dor contínua há 8 semanas, associado à presença de plicoma, ulceração na linha média anterior, hipertonia esfincteriana e papila hipertrófica",
        "explanation": "Correta: A tríade clássica da fissura anal crônica (dor, plicoma sentinela e papila hipertrófica) associada à hipertonia do esfíncter interno justifica o uso de bloqueadores de canais de cálcio tópicos (Diltiazem 2%) para promover o relaxamento esfincteriano e a cicatrização.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "sangramento anal sem dor há 6 semanas, associado à presença de abaulamento perianal com saída de secreção purulenta e ulceração na linha média posterior",
        "explanation": "Incorreta: A presença de secreção purulenta e abaulamento sugere abscesso ou fístula perianal, cujo tratamento é cirúrgico (drenagem ou fistulotomia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "sangramento anal sem dor há 3 semanas, associado à presença de abaulamento anal durante as evacuações que regride espontaneamente",
        "explanation": "Incorreta: Descreve hemorroidas internas de grau II (prolapso com redução espontânea), tratadas inicialmente com medidas dietéticas e comportamentais.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "sangramento anal com dor durante as evacuações há 3 semanas, associado à presença de ulceração superficial na linha média posterior e papila hipertrófica",
        "explanation": "Incorreta: Embora apresente ulceração, a duração de 3 semanas e a ausência de plicoma sugerem fissura aguda, onde o tratamento inicial é conservador (fibras e banhos de assento), reservando-se o Diltiazem para casos crônicos ou refratários.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "sangramento anal com incômodo local há 8 semanas, associado à presença de múltiplas lesões verrucosas na margem anal",
        "explanation": "Incorreta: Lesões verrucosas na margem anal são características de condiloma acuminado (infecção por HPV), tratadas com podofilina, imiquimode ou cauterização.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A fissura anal crônica é definida por sintomas persistentes por mais de 6 a 8 semanas e achados físicos como plicoma sentinela e papila hipertrófica. O tratamento clínico de primeira linha envolve o uso de nitratos ou bloqueadores de canais de cálcio (como o Diltiazem 2%) para reduzir a hipertonia esfincteriana.",
    "perolaClinica": "A tríade da fissura anal crônica é composta por: úlcera linear, plicoma sentinela e papila anal hipertrófica.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Coloproctologia — Sociedade Brasileira de Coloproctologia",
      "Sabiston Textbook of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1626
  },
  {
    "id": "q-sus-sp-2023-002",
    "code": "Q-SUSSP23-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Coloproctologia / Oncologia Cirúrgica",
    "subtema": "Rastreamento e Seguimento de Pólipos Colorretais",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, de 53 anos de idade, sem comorbidades, assintomática, sem antecedente familiar de câncer colorretal, realizou exame de sangue oculto nas fezes com guáiaco que veio positivo, sendo indicada a realização de colonoscopia. A colonoscopia evidenciou dois pólipos sésseis, de 0,5 cm cada, localizados no cólon direito (ambos adenoma tubular de baixo grau), um pólipo séssil de 0,8 cm localizado no cólon transverso (adenoma túbulo-viloso de alto grau) e dois pólipos pediculados no sigmoide de 1,2 cm e 1,5 cm (ambos adenoma tubular de baixo grau). Foi realizada polipectomia, com margens livres de todos os pólipos. Com base nesse caso clínico, assinale a alternativa que apresenta o seguimento adequado dessa paciente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar exame imunoquímico fecal anual e, se alterado, solicitar colonoscopia",
        "explanation": "Incorreta: O exame de sangue oculto não é indicado para seguimento pós-polipectomia em pacientes de alto risco.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "repetir a colonoscopia em 3 anos",
        "explanation": "Correta: De acordo com as diretrizes da USMSTF e da Sociedade Brasileira de Coloproctologia, pacientes com 5 ou mais adenomas, ou pelo menos um adenoma > 10 mm, ou com histologia vilosa/displasia de alto grau, devem repetir a colonoscopia em 3 anos.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "realizar exame de sangue oculto nas fezes com guáiaco anual e, se positivo, solicitar colonoscopia",
        "explanation": "Incorreta: O teste de guáiaco é uma ferramenta de rastreamento populacional, não de seguimento para quem já teve pólipos avançados detectados.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "repetir a colonoscopia em 1 ano",
        "explanation": "Incorreta: O intervalo de 1 ano é reservado para casos de polipectomia incompleta, pólipos muito grandes (> 20 mm) removidos em pedaços (piecemeal) ou síndromes hereditárias.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "repetir a colonoscopia entre 5 e 7 anos",
        "explanation": "Incorreta: Intervalos de 5 a 10 anos são indicados apenas para pacientes com 1-2 adenomas tubulares pequenos (< 10 mm) com displasia de baixo grau.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O seguimento pós-polipectomia é estratificado pelo risco de recorrência de lesões avançadas. Esta paciente apresenta critérios de alto risco (5 adenomas no total, um deles com componente viloso e displasia de alto grau, e dois maiores que 1 cm), o que impõe o retorno em 3 anos.",
    "perolaClinica": "Achado de 3 a 10 adenomas, ou qualquer adenoma > 10mm, ou componente viloso/alto grau = Colonoscopia em 3 anos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "US Multi-Society Task Force (USMSTF) on Colorectal Cancer",
      "Diretrizes da Sociedade Brasileira de Coloproctologia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1626
  },
  {
    "id": "q-sus-sp-2023-003",
    "code": "Q-SUSSP23-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Parede Abdominal e Hérnias",
    "subtema": "Classificação de Nyhus das Hérnias Inguinocrurais",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em relação às hérnias inguinocrurais em adultos, julgue os itens a seguir. I O tratamento cirúrgico é indicado para homens sintomáticos com hérnia inguinocrural. II O tratamento cirúrgico é indicado para mulheres não gestantes com hérnia inguinocrural, seja ela sintomática ou assintomática. III O diagnóstico da hérnia inguinocrural deve ser feito pelo exame clínico. IV O ultrassom deve ser o exame inicial em casos em que a história clínica é condizente com hérnia e o seu exame físico é vago. V Os diagnósticos diferenciais incluem linfonodomegalia, hérnia incisional, hidrocele e pubeíte. Assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Apenas os itens I e III estão certos.",
        "explanation": "Incorreta: Todos os itens estão corretos, não apenas I e III.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Apenas os itens II e V estão certos.",
        "explanation": "Incorreta: Todos os itens estão corretos, não apenas II e V.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Apenas os itens I, II e IV estão certos.",
        "explanation": "Incorreta: Todos os itens estão corretos, não apenas I, II e IV.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Apenas os itens III, IV e V estão certos.",
        "explanation": "Incorreta: Todos os itens estão corretos, não apenas III, IV e V.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Todos os itens estão certos.",
        "explanation": "Correta: Todos os itens refletem as recomendações atuais: cirurgia para homens sintomáticos (I), cirurgia sempre para mulheres devido ao risco de hérnia femoral (II), diagnóstico clínico soberano (III), USG para casos duvidosos (IV) e diagnósticos diferenciais pertinentes (V).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O manejo das hérnias inguinocrurais baseia-se na clínica. Em homens, a conduta 'watchful waiting' pode ser aceitável em assintomáticos, mas em mulheres a cirurgia é sempre indicada pelo alto risco de encarceramento em hérnias femorais, que são mais comuns no sexo feminino.",
    "perolaClinica": "Hérnia inguinal em mulher é indicação cirúrgica formal, independentemente de sintomas, pelo risco de hérnia femoral.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "International Guidelines for Groin Hernia Management",
      "Sabiston Textbook of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1626
  },
  {
    "id": "q-sus-sp-2023-004",
    "code": "Q-SUSSP23-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares",
    "subtema": "Colelitíase Assintomática — Indicações Cirúrgicas",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 45 anos de idade, assintomática, com índice de massa corpórea (IMC) igual a 34, sem comorbidades, compareceu ao consultório após ter sido diagnosticada, por meio de ultrassom de rotina, com colelitíase, tendo o ultrassom evidenciado a presença de microcálculos (menores que 0,5 cm). Nesse caso clínico hipotético,",
    "alternativas": [
      {
        "letter": "A",
        "text": "a colecistectomia está indicada devido ao risco de pancreatite aguda.",
        "explanation": "Correta: Microcálculos (menores que 0,5 cm) têm maior facilidade de migrar pelo ducto cístico, aumentando significativamente o risco de pancreatite aguda biliar, o que justifica a colecistectomia mesmo em pacientes assintomáticos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "a indicação cirúrgica é relativa, pois o risco de complicações é menor que o risco da operação.",
        "explanation": "Incorreta: Em pacientes com microcálculos, o risco de complicações graves como pancreatite supera os riscos inerentes ao procedimento cirúrgico eletivo.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "recomenda-se não operar e iniciar dieta pobre em colesterol e ácidos graxos, pois os cálculos são constituídos, na maioria dos casos, por colesterol puro, além de traços de ácidos graxos e fosfolipídios.",
        "explanation": "Incorreta: A dieta não dissolve cálculos biliares formados e não previne a migração de microcálculos existentes.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "indica-se a colecistectomia após a realização de colangiopancreatografia retrógrada endoscópica, para excluir a presença de microcoledocolitíase.",
        "explanation": "Incorreta: A CPRE é um procedimento invasivo com riscos e não deve ser realizada de forma profilática ou diagnóstica sem evidência de obstrução biliar (coledocolitíase).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a colecistectomia está indicada, devido ao alto risco de desenvolvimento de colecistite aguda e câncer de vesícula.",
        "explanation": "Incorreta: Embora o risco de colecistite exista, a principal preocupação específica dos microcálculos é a pancreatite aguda; o risco de câncer de vesícula está associado a cálculos grandes (> 3 cm) ou vesícula em porcelana.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A colelitíase assintomática geralmente não requer cirurgia, exceto em situações específicas: microcálculos (risco de pancreatite), cálculos > 3 cm (risco de câncer), vesícula em porcelana, pólipos de vesícula associados ou pacientes que serão submetidos a cirurgia bariátrica/transplantes.",
    "perolaClinica": "Microcálculos biliares (< 5mm) são indicação de colecistectomia assintomática pelo alto risco de pancreatite.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery",
      "Diretrizes da Sociedade Brasileira de Cirurgia Digestiva (CBCD)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1627
  },
  {
    "id": "q-sus-sp-2023-005",
    "code": "Q-SUSSP23-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Coloproctologia / Oncologia Cirúrgica",
    "subtema": "Câncer de Reto — Diagnóstico e Estadiamento",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Um paciente de 75 anos de idade, hipertenso controlado, com queixa de sangramento anal há 6 meses após as evacuações e alteração do hábito intestinal, compareceu ao hospital. O exame proctológico evidenciou a presença de mamilos hemorroidários grau 3 e tumoração endurecida, friável, sangrante, indolor, ocupando 1/3 da circunferência do reto, a 5 cm da borda anal. Nesse caso hipotético, a melhor conduta é solicitar",
    "alternativas": [
      {
        "letter": "A",
        "text": "retossigmoidoscopia, CEA (antígeno carcinoembrionário), radiografia de tórax e ultrassonografia de abdome superior.",
        "explanation": "Incorreta: A radiografia de tórax e USG de abdome são inferiores às tomografias para o estadiamento oncológico moderno.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "colonoscopia, CEA, PET-CT e exames pré-operatórios.",
        "explanation": "Incorreta: O PET-CT não faz parte da rotina inicial de estadiamento do câncer de reto.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "exames pré-operatórios e agendar biópsia da lesão retal no centro cirúrgico a ser realizada durante a hemorroidectomia.",
        "explanation": "Incorreta: Nunca se deve realizar hemorroidectomia na presença de uma lesão retal suspeita sem diagnóstico e estadiamento prévios, pois o tratamento do câncer de reto pode envolver neoadjuvância.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "colonoscopia e, a depender do resultado da biópsia, prosseguir com a investigação diagnóstica.",
        "explanation": "Incorreta: Embora a biópsia seja essencial, o estadiamento completo (incluindo exames de imagem) é necessário para definir a conduta terapêutica.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "colonoscopia, CEA, tomografia de tórax e abdome e ressonância magnética da pelve.",
        "explanation": "Correta (Gabarito da banca, embora a questão tenha sido anulada): A investigação padrão para suspeita de câncer de reto inclui colonoscopia com biópsia, marcadores tumorais (CEA), TC de tórax e abdome (metástases) e RM de pelve (estadiamento local).",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A questão foi anulada pela banca examinadora. No entanto, clinicamente, diante de uma tumoração retal endurecida e friável, a principal suspeita é neoplasia colorretal. O protocolo exige diagnóstico histopatológico e estadiamento sistêmico e local rigorosos antes de qualquer intervenção cirúrgica definitiva.",
    "perolaClinica": "Suspeita de câncer de reto? Colonoscopia + Biópsia + TC Tórax/Abdome + RM de Pelve.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "NCCN Guidelines - Colon and Rectal Cancer",
      "Diretrizes da Sociedade Brasileira de Coloproctologia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1627
  },
  {
    "id": "q-sus-sp-2023-006",
    "code": "Q-SUSSP23-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Pré e Pós-Operatório",
    "subtema": "Complicações Pós-Operatórias — Insuficiência Renal Aguda",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 78 anos de idade, com histórico de múltiplas cirurgias prévias, apresenta quadro de abdome agudo obstrutivo. Foi submetida a uma laparotomia exploradora com extensa lise de aderências, procedimento que teve duração de 7 horas. Recebeu 2 litros de cristaloide durante a cirurgia e urinou 200 mL. A creatinina sérica teve um incremento de 0,6 mg/dL no dia seguinte. Outros dados da paciente: PA = 90 mmHg x 60 mmHg; FC = 110 bpm. Assinale a alternativa que apresenta a conduta que deve ser evitada nesse caso hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "descartar obstrução de sonda vesical",
        "explanation": "Incorreta: É uma conduta inicial obrigatória em pacientes com oligúria súbita no pós-operatório para descartar causas mecânicas.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "verificar valor da hemoglobina sérica",
        "explanation": "Incorreta: Necessário para avaliar perdas sanguíneas ocultas durante uma cirurgia de grande porte e longa duração.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "calcular a fração de excreção de sódio",
        "explanation": "Incorreta: Ajuda a diferenciar a etiologia da insuficiência renal aguda (pré-renal vs. renal intrínseca).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "administrar volume",
        "explanation": "Incorreta: A paciente apresenta sinais claros de hipovolemia (hipotensão, taquicardia, oligúria e aumento de creatinina), sendo a reposição volêmica a conduta prioritária.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "iniciar amina vasoativa para manter a pressão arterial média em torno de 65 mmHg",
        "explanation": "Correta: O uso de aminas vasoativas deve ser evitado como conduta inicial em pacientes com sinais de choque hipovolêmico/desidratação. Deve-se primeiro restaurar a volemia; o uso precoce de vasopressores sem volume pode agravar a isquemia renal e tecidual.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O quadro clínico sugere Insuficiência Renal Aguda (IRA) de padrão pré-renal decorrente de hipovolemia (cirurgia longa, perda de fluidos, hipotensão e taquicardia). A prioridade é a ressuscitação volêmica e não o uso de vasopressores, que podem piorar a perfusão renal se o leito vascular estiver vazio.",
    "perolaClinica": "No choque hipovolêmico, o vasopressor é a última linha; volume é a primeira.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "KDIGO Clinical Practice Guideline for Acute Kidney Injury",
      "Sabiston Textbook of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1627
  },
  {
    "id": "q-sus-sp-2023-007",
    "code": "Q-SUSSP23-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva",
    "subtema": "Sepse e Choque Séptico",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Cada uma das alternativas a seguir apresenta um paciente e algumas de suas informações clínicas. Entre essas alternativas, assinale aquela que apresenta o paciente com maior gravidade e provável quadro de sepse.",
    "alternativas": [
      {
        "letter": "A",
        "text": "mulher de 27 anos de idade, após litotripsia para nefrolitíase, afebril, com FC de 102 bpm e PA igual a 90 mmHg x 40 mmHg, com confusão mental e com contagem de leucócitos igual a 9.000/µL",
        "explanation": "Correta: Paciente com foco infeccioso provável (pós-litotripsia), hipotensão (PAS 90 mmHg) e alteração do nível de consciência (confusão mental). Preenche critérios de qSOFA positivo (2 pontos), indicando alto risco de sepse.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "homem de 45 anos de idade, com pancreatite, temperatura igual a 38 ºC, FC igual a 110 bpm, PA de 110 mmHg x 60 mmHg e contagem de leucócitos igual a 14.000/µL",
        "explanation": "Incorreta: Apresenta critérios de SIRS (febre, taquicardia, leucocitose), mas a pancreatite é uma causa inflamatória sistêmica que nem sempre evolui com sepse infecciosa imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "mulher de 53 anos, em pós-operatório imediato de ressecção de tumor de cólon, que está taquicárdica e requer intubação orotraqueal",
        "explanation": "Incorreta: Taquicardia e necessidade de IOT no pós-operatório imediato podem ser decorrentes de diversas causas (dor, efeito anestésico, atelectasia), sem evidência clara de infecção.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "senhora que reside em casa de repouso, de 84 anos de idade, com cultura de urina positiva para Proteus spp.",
        "explanation": "Incorreta: Descreve uma provável bacteriúria assintomática, comum em idosos institucionalizados, sem sinais de disfunção orgânica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "homem de 18 anos de idade que apresentou quadro de apendicite gangrenosa, estando agora no pós-operatório imediato de uma apendicectomia laparoscópica, febril (39 ºC) e taquicárdico (FC = 130 bpm), com PA igual a 140 mmHg x 70 mmHg",
        "explanation": "Incorreta: Paciente com febre e taquicardia no pós-operatório de apendicite, mas está hipertenso e sem sinais de disfunção orgânica aguda que caracterizem sepse pelos critérios atuais (Sepsis-3).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "De acordo com o Sepsis-3, a sepse é definida como disfunção orgânica ameaçadora à vida causada por uma resposta desregulada do hospedeiro à infecção. O qSOFA (frequência respiratória ≥ 22, alteração do sensório e PAS ≤ 100) é uma ferramenta rápida para identificar pacientes com suspeita de infecção e maior risco de desfechos desfavoráveis.",
    "perolaClinica": "Sepse = Infecção + Disfunção Orgânica (identificada por aumento de ≥ 2 pontos no SOFA ou qSOFA positivo).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)",
      "Surviving Sepsis Campaign 2021"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1628
  },
  {
    "id": "q-sus-sp-2023-008",
    "code": "Q-SUSSP23-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cicatrização de Feridas",
    "subtema": "Fases da Cicatrização e Cuidados Pós-Operatórios",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 55 anos de idade foi submetida a reconstrução mamária com músculo reto abdominal (TRAM) bilateral após mastectomia radical. Está em programação de radioterapia pós-operatória. Com base nesse caso clínico, assinale a alternativa correta, quanto à cicatrização de feridas dessa paciente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A presença de leucócitos com contagem de 100 por centímetro quadrado retarda a cicatrização de feridas.",
        "explanation": "Incorreta: Os leucócitos (especialmente macrófagos) são essenciais para a cicatrização; sua ausência é que a retarda.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A denervação tem um efeito deletério na contração da ferida e na epitelização.",
        "explanation": "Incorreta: A denervação isolada não tem impacto significativo comprovado na contração ou epitelização de feridas cirúrgicas agudas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Quimioterapia iniciada 10 a 14 dias após a cirurgia tem pouco efeito sobre o estado final da cicatrização.",
        "explanation": "Incorreta: A quimioterapia pode interferir na cicatrização se iniciada muito precocemente, mas o efeito após 10-14 dias ainda é debatido, não sendo a alternativa mais precisa.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A isquemia tecidual é o principal componente do dano tecidual causado pela irradiação.",
        "explanation": "Correta: A radiação ionizante causa danos crônicos ao tecido, sendo a endarterite obliterante (isquemia tecidual progressiva) o principal mecanismo de retardo na cicatrização e complicações tardias.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "A radioterapia pós-operatória deve ser adiada por, pelo menos, 4 a 6 meses após a cirurgia, para diminuir a incidência de complicações da ferida.",
        "explanation": "Incorreta: O intervalo recomendado para radioterapia pós-operatória costuma ser de 4 a 6 semanas, não meses, para não comprometer o tratamento oncológico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A radioterapia interfere na cicatrização por causar danos diretos ao DNA celular e, principalmente, por induzir uma endarterite obliterante, que resulta em hipóxia tecidual crônica, fibrose e redução da capacidade de reparo tecidual.",
    "perolaClinica": "O principal efeito deletério da radioterapia na cicatrização é a isquemia por endarterite obliterante.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery",
      "Schwartz's Principles of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1628
  },
  {
    "id": "q-sus-sp-2023-009",
    "code": "Q-SUSSP23-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma (ATLS) / Queimaduras",
    "subtema": "Grande Queimado — Ressuscitação Volêmica e Monitorização do Débito Urinário",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente, masculino, de 45 anos de idade, vítima de incêndio de grandes proporções em sua casa, tendo permanecido por mais de duas horas dentro do local, foi resgatado e levado ao pronto-socorro. Apresenta desconforto respiratório e queimaduras profundas, nas áreas indicadas na figura a seguir por meio de um círculo com um \"X\". Assinale a alternativa que apresenta, respectivamente, o percentual de superfície corpórea queimada (SCQ), de acordo com o método de Wallace, e a melhor conduta inicial de tratamento, nesse caso hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "40%; intubação orotraqueal, reposição volêmica de 2 mL de ringer lactato x peso corporal x SCQ",
        "explanation": "Anulada: A questão foi anulada pela banca. O cálculo da SCQ depende da imagem (não fornecida aqui), mas a fórmula de Parkland atualizada (ATLS 10ª ed) usa 2 mL/kg/%SCQ para adultos.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "45%; intubação orotraqueal, reposição volêmica de 2 mL de ringer lactato x peso corporal x SCQ, limpeza e curativo das áreas queimadas, analgesia, antibioticoterapia, transferência para centro especializado em tratamento de queimados",
        "explanation": "Anulada: A antibioticoterapia profilática não é recomendada de rotina no atendimento inicial ao queimado.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "45%; intubação orotraqueal, reposição volêmica de 5,2 mL de ringer lactato x peso corporal x SCQ, curativo das áreas queimadas, analgesia",
        "explanation": "Anulada: O valor de 5,2 mL/kg/%SCQ não corresponde às fórmulas padrão (Parkland ou Brooke).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "50%; cateter nasal com oxigênio úmido 5 L/min, curativo das áreas queimadas, transferência para centro especializado em tratamento de queimados",
        "explanation": "Anulada: Paciente vítima de incêndio em local fechado com desconforto respiratório tem alto risco de lesão inalatória, exigindo via aérea definitiva (IOT), não apenas cateter de O2.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "50%; CEPAP ou máscara de O₂ não reinalante 15 L/min, curativo simples das áreas queimadas, analgesia",
        "explanation": "Anulada: Máscara de O2 não é suficiente se houver sinais de obstrução de via aérea ou lesão inalatória grave.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca examinadora. No manejo do grande queimado, as prioridades são: A (via aérea com controle de coluna cervical, atenção à lesão inalatória), B (ventilação), C (reposição volêmica pela fórmula de Parkland: 2ml x peso x %SCQ de Ringer Lactato nas primeiras 24h).",
    "perolaClinica": "Suspeita de lesão inalatória (queimadura em local fechado, escarro carbonáceo, estridor) = Intubação Orotraqueal precoce.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS 10ª Edição",
      "Manual de Queimaduras do Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1628,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/sus-sp-2023/q009.png",
      "modality": "Gráfico/Tabela",
      "caption": "Diagrama de Wallace (Regra dos Nove) para cálculo de superfície corpórea queimada.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-sus-sp-2023-010",
    "code": "Q-SUSSP23-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Raquimedular",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 35 anos de idade, masculino, vítima de acidente com colisão de sua moto contra um caminhão, politraumatizado, com suspeita de trauma raquimedular, foi levado ao hospital. Com base nesse caso clínico, assinale a alternativa correta, com relação ao trauma raquimedular.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A associação de hipotensão e vasoconstrição caracteriza o choque medular.",
        "explanation": "Incorreta: O choque neurogênico caracteriza-se por hipotensão e bradicardia (perda do tônus simpático), resultando em vasodilatação, não vasoconstrição.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A presença do reflexo bulbocavernoso afasta lesão medular.",
        "explanation": "Incorreta: O reflexo bulbocavernoso é usado para definir o fim do choque medular (fase de arreflexia), mas sua presença não exclui uma lesão medular definitiva (plegia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A avaliação neurológica e funcional define o prognóstico, além de procurar apontar com exatidão o nível neurológico da lesão e o grau de comprometimento funcional.",
        "explanation": "Correta: A avaliação neurológica sistemática (escala ASIA) é fundamental para determinar o nível da lesão, o grau de comprometimento (completo vs. incompleto) e o prognóstico funcional.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Em uma avaliação primária, deve-se identificar se a causa do choque é hipovolêmico ou neurogênico, embora o tratamento para ambos seja a administração de grande reposição volêmica.",
        "explanation": "Incorreta: O tratamento do choque neurogênico foca em vasopressores e reposição volêmica cautelosa; a reposição volêmica maciça é o tratamento do choque hipovolêmico e pode causar edema pulmonar no choque neurogênico.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O choque medular é uma disfunção autonômica que interfere na manutenção da estabilidade hemodinâmica, resultando em bradicardia, vasoconstrição, hipotensão e aumento da capacidade venosa a paralisia flácida.",
        "explanation": "Incorreta: O choque medular refere-se ao estado de arreflexia e paralisia flácida logo após o trauma; a disfunção hemodinâmica (hipotensão/bradicardia) é o choque neurogênico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "No trauma raquimedular, é crucial distinguir o choque medular (fenômeno neurológico de arreflexia temporária) do choque neurogênico (fenômeno hemodinâmico por perda do tônus simpático). A avaliação clínica detalhada define o nível neurológico da lesão.",
    "perolaClinica": "Choque neurogênico = Hipotensão + Bradicardia + Vasodilatação (pele quente).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS 10ª Edição",
      "PHTLS 9ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1629
  },
  {
    "id": "q-sus-sp-2023-011",
    "code": "Q-SUSSP23-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares",
    "subtema": "Colangite Aguda (Tríade de Charcot e Conduta Inicial — Tokyo Guidelines)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A tríade de Charcot caracteriza-se por",
    "alternativas": [
      {
        "letter": "A",
        "text": "febre, icterícia e dor em hipocôndrio direito, estando presente em pacientes com colangite aguda.",
        "explanation": "Correta: A tríade de Charcot é composta por febre com calafrios, icterícia e dor no hipocôndrio direito, sendo altamente sugestiva de colangite aguda.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "febre, dor em fossa ilíaca direita e icterícia, estando presente em pacientes com apendicite aguda.",
        "explanation": "Incorreta: Dor em fossa ilíaca direita é característica de apendicite, que não costuma cursar com icterícia (exceto em complicações raras como pileflebite).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "dor em hipocôndrio direito, icterícia e vômitos, estando presente em pacientes com pancreatite aguda.",
        "explanation": "Incorreta: Vômitos são comuns na pancreatite, mas a tríade de Charcot é específica para colangite.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "febre, icterícia e dor em hipocôndrio direito, estando presente em pacientes com colecistite aguda.",
        "explanation": "Incorreta: A colecistite aguda cursa com dor e febre, mas a icterícia não é um componente típico, a menos que haja síndrome de Mirizzi ou coledocolitíase associada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "icterícia, febre e leucocitose, estando presente em pacientes com colangite aguda e colecistite aguda.",
        "explanation": "Incorreta: Leucocitose é um achado laboratorial, não faz parte da tríade clínica de Charcot.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A tríade de Charcot é o conjunto clássico de sinais e sintomas da colangite aguda, refletindo a obstrução biliar (icterícia) e a infecção sistêmica (febre e dor). Sua presença indica a necessidade de antibioticoterapia e drenagem das vias biliares.",
    "perolaClinica": "Tríade de Charcot: Febre, Icterícia e Dor no Hipocôndrio Direito.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tokyo Guidelines 2018 (TG18)",
      "Sabiston Textbook of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1630
  },
  {
    "id": "q-sus-sp-2023-012",
    "code": "Q-SUSSP23-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares",
    "subtema": "Colangite Aguda (Tríade de Charcot e Conduta Inicial — Tokyo Guidelines)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto à Pêntade de Reinolds, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Seus sintomas são febre, icterícia, dor em hipocôndrio direito, hipotensão e vômitos.",
        "explanation": "Incorreta: Vômitos não fazem parte da pêntade de Reynolds.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Seus sintomas são febre, icterícia, dor em hipocôndrio direito, rebaixamento do nível de consciência e hipotensão.",
        "explanation": "Correta: A pêntade de Reynolds consiste na tríade de Charcot (febre, icterícia, dor em HCD) acrescida de hipotensão arterial e alteração do nível de consciência, indicando colangite supurativa grave.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Ela representa sepse em quadros de colecistite aguda.",
        "explanation": "Incorreta: A pêntade de Reynolds é específica para colangite aguda grave, não para colecistite.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Nesse caso, o tratamento da causa base é sempre cirúrgico.",
        "explanation": "Incorreta: O tratamento inicial da colangite grave foca na estabilização hemodinâmica e descompressão biliar de urgência, preferencialmente por via endoscópica (CPRE), não necessariamente cirúrgica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Ela sempre está presente em pacientes com colangite aguda.",
        "explanation": "Incorreta: A pêntade de Reynolds está presente apenas nos casos mais graves de colangite (choque séptico biliar).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A pêntade de Reynolds é um sinal de gravidade extrema na colangite aguda, sugerindo sepse de origem biliar. O manejo requer suporte intensivo e descompressão biliar imediata.",
    "perolaClinica": "Pêntade de Reynolds = Charcot + Hipotensão + Alteração do Sensório.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tokyo Guidelines 2018 (TG18)",
      "Sabiston Textbook of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1630
  },
  {
    "id": "q-sus-sp-2023-013",
    "code": "Q-SUSSP23-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Apendicite Aguda — Sinais Semiológicos",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, de 35 anos de idade, com queixa de dor abdominal há 5 dias, iniciada em epigastro, agora localizada em fossa ilíaca direita, associada a inapetência e febre não medida, está recebendo atendimento em um hospital. A paciente nega corrimento vaginal. Exames revelaram o seguinte: HB = 12,4; leucograma = 14.900, com desvio à esquerda; urina 1 com leucocitúria; e nitrito negativo. O exame físico revelou dor à palpação de fossa ilíaca direita, com defesa localizada neste quadrante. A respeito desse caso hipotético, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trata-se de uma infecção de trato urinário; deve-se prescrever antibioticoterapia domiciliar e dar alta à paciente.",
        "explanation": "Incorreta: Embora haja leucocitúria, a dor abdominal com defesa em FID e febre torna a apendicite o diagnóstico principal; a leucocitúria pode ser reacional.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Trata-se de gastroenterite aguda, e a paciente, provavelmente, desenvolverá quadro diarreico nos próximos dias; o tratamento indicado no caso é antiespasmódico e hidratação.",
        "explanation": "Incorreta: Gastroenterite costuma cursar com diarreia precoce e dor difusa, sem sinais de irritação peritoneal localizada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Trata-se, provavelmente, de apendicite aguda, diagnóstico que pode ser confirmado por exame de tomografia.",
        "explanation": "Correta: O quadro clínico de dor migratória (epigástrio para FID), inapetência, febre e defesa em FID é clássico para apendicite aguda. A TC é o padrão-ouro para confirmação diagnóstica em adultos.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Trata-se de ureterolitíase; nesse caso, deve-se solicitar avaliação de urologia e dar alta da cirurgia geral.",
        "explanation": "Incorreta: A ureterolitíase causa dor em cólica intensa, geralmente sem febre ou leucocitose importante, a menos que haja infecção associada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Trata-se, certamente, de infecção ginecológica, devendo-se, nesse caso, prescrever antibiótico via oral e creme vaginal e dar alta hospitalar; caso a paciente apresente melhora dos sintomas, deve procurar avaliação de ginecologista.",
        "explanation": "Incorreta: A DIP (Doença Inflamatória Pélvica) é um diferencial, mas a paciente nega corrimento e a localização da dor e defesa sugerem fortemente apendicite.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A apendicite aguda é a causa mais comum de abdome agudo cirúrgico. A presença de leucocitúria em exames de urina não exclui o diagnóstico, pois o apêndice inflamado pode irritar o ureter direito ou a bexiga.",
    "perolaClinica": "Apendicite pode causar leucocitúria por contiguidade com o trato urinário.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery",
      "Diretrizes da Sociedade Brasileira de Cirurgia Geral"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1630
  },
  {
    "id": "q-sus-sp-2023-014",
    "code": "Q-SUSSP23-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia / Hepatologia",
    "subtema": "Hemorragia Digestiva Alta por Úlcera Péptica",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Com relação à classificação de Forrest para úlceras pépticas com sangramento, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Forrest 2A diz respeito a úlceras com coágulo aderido.",
        "explanation": "Incorreta: Forrest 2A é vaso visível não sangrante. Coágulo aderido é Forrest 2B.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Forrest 1B diz respeito a úlceras com coto vascular visível.",
        "explanation": "Incorreta: Forrest 1B é sangramento em 'babação' (oozing). Vaso visível é 2A.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Forrest 3 diz respeito a úlceras com pontos de hematina.",
        "explanation": "Incorreta: Forrest 3 é base clara (limpa). Pontos de hematina são Forrest 2C.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Forrest 2B diz respeito a úlceras com sangramento em babação ou porejamento.",
        "explanation": "Incorreta: Forrest 2B é coágulo aderido. Sangramento em babação é 1B.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Forrest 1 A diz respeito a úlceras com sangramento em jato.",
        "explanation": "Correta: Forrest 1A representa sangramento arterial ativo em jato (spurting).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A classificação de Forrest é utilizada na endoscopia digestiva alta para estratificar o risco de ressangramento de úlceras pépticas e guiar a terapia endoscópica. Os graus 1A, 1B e 2A são de alto risco e exigem intervenção.",
    "perolaClinica": "Forrest 1A (Jato), 1B (Babação), 2A (Vaso visível), 2B (Coágulo), 2C (Hematina), 3 (Base limpa).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Consenso de Hemorragia Digestiva Alta da Sociedade Brasileira de Endoscopia Digestiva (SOBED)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1631
  },
  {
    "id": "q-sus-sp-2023-015",
    "code": "Q-SUSSP23-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia / Hepatologia",
    "subtema": "Hemorragia Digestiva Alta e Baixa",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Quanto às hemorragias digestivas, assinale a alternativa incorreta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Melena significa sangue digerido nas fezes.",
        "explanation": "Incorreta (na verdade, correta como definição): Melena é sangue digerido, indicando geralmente origem alta.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Enterorragia ou hematoquezia significa presença de sangue vivo nas fezes.",
        "explanation": "Incorreta (na verdade, correta como definição): Enterorragia/hematoquezia é sangue vivo ou rutilante.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "Hematêmese significa vômitos com sangue.",
        "explanation": "Incorreta (na verdade, correta como definição): Hematêmese é o vômito de sangue vivo ou em 'borra de café'.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "Pacientes que apresentam hematêmese certamente apresentam hemorragia digestiva alta.",
        "explanation": "Incorreta (na verdade, correta como definição): Hematêmese é sinal patognomônico de HDA (acima do ângulo de Treitz).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Pacientes que apresentam melena certamente não apresentam hemorragia digestiva baixa.",
        "explanation": "Correta (como alternativa incorreta solicitada): A melena geralmente indica HDA, mas pode ocorrer em hemorragias do intestino delgado ou cólon direito se o trânsito intestinal for lento o suficiente para a digestão do sangue.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca. O objetivo era identificar a afirmação incorreta sobre hemorragias digestivas. Embora a melena seja clássica de HDA, ela pode raramente ocorrer em lesões de cólon direito com trânsito lento, tornando a afirmação 'certamente não apresentam HDB' tecnicamente falsa.",
    "perolaClinica": "Melena sugere HDA, mas pode ocorrer em HDB se o trânsito intestinal for lento.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1631
  },
  {
    "id": "q-sus-sp-2023-016",
    "code": "Q-SUSSP23-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Pancreatite Aguda Grave — Conduta Inicial",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Acerca de pancreatites agudas, assinale a alternativa incorreta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Para o diagnóstico de pancreatite aguda, deve-se considerar o quadro clínico característico, elevação de amilase e(ou) lipase pelo menos três vezes acima dos níveis séricos normais, tomografia computadorizada com contraste endovenoso evidenciando alterações pancreáticas; pelo menos dois desses critérios devem estar presentes.",
        "explanation": "Incorreta (como afirmação): Esta afirmação está correta segundo os critérios de Atlanta (clínica, laboratório > 3x e imagem).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A única forma de se considerar uma pancreatite aguda grave é se houver mais que 30% de necrose de parênquima pancreático visualizado em tomografia computadorizada com contraste; na ausência de necrose, a pancreatite sempre deve ser considerada leve.",
        "explanation": "Correta (como alternativa incorreta solicitada): A gravidade da pancreatite aguda, segundo a Classificação de Atlanta revisada, é definida pela presença e duração da falência orgânica (transitória < 48h ou persistente > 48h), e não apenas pela extensão da necrose tomográfica.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A principal etiologia da pancreatite aguda é biliar.",
        "explanation": "Incorreta (como afirmação): Correta, a etiologia biliar é a mais frequente no Brasil.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Também são causas de pancreatite aguda a hipertrigliceridemia e a hipercalcemia.",
        "explanation": "Incorreta (como afirmação): Correta, são causas metabólicas conhecidas de pancreatite.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A ecoendoscopia é um exame de imagem importante durante investigação das causas de pancreatite aguda.",
        "explanation": "Incorreta (como afirmação): Correta, a ecoendoscopia é útil para detectar microlitíase ou tumores periampulares não vistos em outros exames.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A classificação de gravidade da pancreatite aguda evoluiu para focar na falência orgânica (critérios de Marshall modificados). A necrose pancreática é uma complicação local que aumenta o risco de gravidade, mas não é o único critério definidor.",
    "perolaClinica": "Gravidade na pancreatite aguda = Falência orgânica persistente (> 48 horas).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Classificação de Atlanta Revisada (2012)",
      "Diretrizes da Associação Brasileira de Pancreatologia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1631
  },
  {
    "id": "q-sus-sp-2023-017",
    "code": "Q-SUSSP23-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Obstrutivo — Volvo de Sigmoide",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A respeito do abdome agudo obstrutivo (AAO), assinale a alternativa incorreta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "AAO classifica-se como alto ou baixo, de acordo com o distúrbio metabólico decorrente do quadro de obstrução.",
        "explanation": "Incorreta (como afirmação): Correta, a distinção entre alta e baixa orienta o manejo hidroeletrolítico e a urgência.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Obstrução intestinal em alça fechada é considerada uma emergência cirúrgica.",
        "explanation": "Incorreta (como afirmação): Correta, o risco de isquemia e perfuração é iminente.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Volvo de sigmoide e bridas são causas extrínsecas de obstrução intestinal.",
        "explanation": "Incorreta (como afirmação): Correta, bridas e volvos são causas que comprimem ou torcem o intestino externamente.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Neoplasias gástricas ou estenoses antropilóricas não são causas de AAO, pois não provocam parada de eliminação de gases e fezes.",
        "explanation": "Correta (como alternativa incorreta solicitada): Neoplasias gástricas ou estenoses pilóricas SÃO causas de abdome agudo obstrutivo (obstrução alta), manifestando-se com vômitos precoces e alcalose metabólica, mesmo que a parada de gases e fezes demore a ocorrer.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Algumas vezes, a primeira manifestação de uma neoplasia de cólon é o quadro obstrutivo.",
        "explanation": "Incorreta (como afirmação): Correta, o câncer colorretal frequentemente debuta como obstrução intestinal aguda.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O abdome agudo obstrutivo pode ocorrer em qualquer nível do trato gastrointestinal. Obstruções altas (estômago/duodeno) apresentam quadro clínico distinto das baixas, mas ainda são classificadas como obstrutivas.",
    "perolaClinica": "Obstrução pilórica causa vômitos intensos e alcalose metabólica hipoclorêmica hipocalêmica.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sabiston Textbook of Surgery",
      "Schwartz's Principles of Surgery"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1631
  },
  {
    "id": "q-sus-sp-2023-018",
    "code": "Q-SUSSP23-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma",
    "subtema": "Trauma Cervical Penetrante",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente, vítima de ferimento penetrante por arma branca em zona II cervical, foi levado ao pronto-socorro por transeuntes. A avaliação primária era a seguinte: vias aéreas pérvias; murmúrio vesicular presente bilateralmente; frequência cardíaca de 95 batimentos por minuto, tempo de enchimento capilar menor que 3 segundos, pulso cheio; pupilas isocóricas e fotorreagentes, escala de coma de Glasgow 15; ferimento em zona II cervical à direita de aproximadamente 2,0 cm, sem sangramento ativo, sem outros ferimentos. Não havia saída de ar do ferimento. Considerando esse caso clínico, assinale a alternativa correta, com relação à melhor conduta referente ao quadro clínico apresentado por esse paciente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O paciente deve ser submetido a exploração digital do ferimento; caso o músculo platisma tenha sido penetrado, o paciente deve ser submetido a endoscopia digestiva e ultrassom Doppler dos vasos cervicais, para avaliação de potenciais lesões relacionadas ao ferimento.",
        "explanation": "Incorreta: A exploração digital de ferimentos cervicais é contraindicada pelo risco de deslocar coágulos e causar sangramento maciço.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Mesmo estável hemodinamicamente, o paciente deve ser submetido a cervicotomia exploradora mandatória, uma vez que o ferimento se encontra em zona II cervical.",
        "explanation": "Incorreta: A cervicotomia mandatória para zona II caiu em desuso; a conduta atual em pacientes estáveis é a exploração seletiva baseada em exames de imagem (AngioTC).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Na suspeita de penetração do músculo platisma, o paciente, uma vez estável e sem sinais de sangramento em atividade, deve ser submetido a exames de endoscopia digestiva alta, broncoscopia e arteriografia dos vasos cervicais, para descartar potenciais lesões relacionadas ao ferimento.",
        "explanation": "Correta: Em pacientes estáveis com ferimento que ultrapassa o platisma, a investigação seletiva com exames para avaliar via aérea (broncoscopia), via digestiva (EDA ou esofagograma) e vasos (AngioTC ou arteriografia) é a conduta padrão.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "O paciente deve ser submetido a exploração digital do ferimento e, caso o músculo platisma tenha sido penetrado, está indicada a cervicotomia exploradora.",
        "explanation": "Incorreta: A penetração do platisma isoladamente não indica mais cirurgia imediata se o paciente estiver estável e sem 'hard signs' de lesão.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Uma vez que o paciente está estável, não apresenta sangramento ativo, nem saída de ar do ferimento, não é necessário realizar exames complementares nem cirurgia, podendo ser submetido apenas a sutura do ferimento e mantido em observação; caso permaneça bem, poderá receber alta hospitalar.",
        "explanation": "Incorreta: Se o platisma foi penetrado, há risco de lesões ocultas que devem ser investigadas antes da alta.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O manejo do trauma cervical penetrante mudou da exploração mandatória para a exploração seletiva. Pacientes estáveis sem sinais de alarme ('hard signs') devem ser submetidos a exames diagnósticos para excluir lesões de órgãos aerodigestivos e vasculares.",
    "perolaClinica": "Ferimento cervical que penetrou o platisma em paciente estável = Investigação seletiva (AngioTC é o exame inicial de escolha).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS 10ª Edição",
      "Western Trauma Association Critical Decisions in Trauma"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1631
  },
  {
    "id": "q-sus-sp-2023-019",
    "code": "Q-SUSSP23-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma Abdominal",
    "subtema": "Tratamento Não Operatório (TNO) no Trauma Abdominal",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Acerca do tratamento não operatório (TNO) no trauma abdominal fechado, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Grau da lesão é condição determinante para esse tratamento poder ser instituído.",
        "explanation": "Incorreta: O grau da lesão isoladamente não contraindica o TNO; a estabilidade hemodinâmica é o fator determinante.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Esse tratamento pode ser feito com diagnóstico ecográfico de lesão de vísceras parenquimatosas como figado, baço ou rim.",
        "explanation": "Incorreta: O diagnóstico para TNO deve ser feito preferencialmente por Tomografia Computadorizada (TC), que avalia melhor a extensão da lesão e a presença de blush arterial.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Esse tratamento pode ser feito em pacientes cujo achado de tomografia ou ultrassom seja líquido livre sem lesão de víscera parenquimatosa, desde que o paciente esteja estável hemodinamicamente e sem sinais de peritonite.",
        "explanation": "Incorreta: Líquido livre sem lesão de víscera parenquimatosa em trauma fechado levanta suspeita de lesão de víscera oca ou mesentério, o que geralmente requer cirurgia.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Esse tratamento pode ser feito em pacientes estáveis hemodinamicamente, desde que o diagnóstico de lesão de víscera parenquimatosa seja feito através de exame de tomografia e que haja acompanhamento intensivo feito por equipe horizontal.",
        "explanation": "Correta: Os pilares do TNO são: estabilidade hemodinâmica, ausência de sinais de peritonite, diagnóstico por TC e vigilância em ambiente intensivo/semi-intensivo.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Esse tratamento não é a melhor escolha para pacientes com lesão hepática grau III.",
        "explanation": "Incorreta: Lesões hepáticas grau III são frequentemente manejadas de forma não operatória se o paciente estiver estável.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Tratamento Não Operatório (TNO) é o padrão para lesões de órgãos sólidos (fígado, baço, rim) em pacientes estáveis. A TC é essencial para graduar a lesão e identificar sangramentos ativos que possam necessitar de angioembolização.",
    "perolaClinica": "A estabilidade hemodinâmica é a condição 'sine qua non' para o tratamento não operatório no trauma abdominal.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS 10ª Edição",
      "WSES Guidelines on Liver/Spleen Trauma"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1632
  },
  {
    "id": "q-sus-sp-2023-020",
    "code": "Q-SUSSP23-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado (ATLS)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente, vitima de acidente de moto contra anteparo fixo a 60 km/h, com capacete, foi levado pelos bombeiros à sala de trauma, em prancha longa e com colar cervical. Ao exame físico, apresentava frequência cardíaca (FC) de 110 bpm, pressão arterial (PA) de 100 mmHg x 70 mmHg, bacia estável, fratura exposta em coxa direita, com sangramento e pulsos distais de membro inferior direito diminuídos; havia presença de sangue em orofaringe. Chegou com olhos fechados, porém os abre ao ser chamado pelo nome. Localiza dor quando avaliada sua movimentação e expressa palavras desconexas e confusão mental. Tem equimose palpebral bilateral. À ausculta respiratória, os murmúrios vesiculares são presentes; sem ruídos adventícios. Nesse caso hipotético, a sequência mais adequada para identificação e resolução dos problemas desse paciente, segundo os preceitos da avaliação primaria do ATLS, é.",
    "alternativas": [
      {
        "letter": "A",
        "text": "intubação orotraqueal, uma vez que o Glasgow é 8, acesso venoso periférico em membros superiores com inicio de infusão de solução de ringer lactato aquecido, ligadura dos vasos que apresentam sangramento na fratura exposta.",
        "explanation": "Incorreta: O Glasgow é 11 (Ocular 3, Verbal 3, Motor 5), não 8. A intubação não é mandatória apenas pelo Glasgow neste caso.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "intubação nasotraqueal, uma vez que tem sangue na orofaringe, acesso venoso central com inicio de infusão de solução de ringer lactato aquecido, tamponamento com curativo de sangramento da fratura exposta.",
        "explanation": "Incorreta: A intubação nasotraqueal é contraindicada em suspeita de fratura de base de crânio (sinal do guaxinim/equimose palpebral).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aspirar sangue da orofaringe e aporte de oxigênio sob máscara a 12 L/min, acessos venosos periféricos em membros superiores com início de infusão de solução de ringer lactato aquecido, alinhamento de membro inferior direito fraturado na tentativa de melhorar sua perfusão e tamponamento do sangramento da fratura exposta com curativo.",
        "explanation": "Correta: Segue a sequência A-B-C: A (limpeza de orofaringe e O2), B (ausculta já feita), C (acessos periféricos, volume, controle de sangramento externo e alinhamento de fratura para restaurar perfusão distal).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "intubação orotraqueal, uma vez que Glasgow é 10, dissecção de veia safena do membro não fraturado (esquerdo) e inicio de infusão de solução de ringer lactato aquecido, ligadura dos vasos com sangramento da fratura exposta.",
        "explanation": "Incorreta: O Glasgow é 11. A dissecção de veia safena é uma alternativa de exceção, não a primeira escolha.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "aspirar sangue de orofaringe e aporte de oxigênio sob máscara a 12 L/min, acesso venoso central com início de infusão de solução de ringer lactato aquecido, tamponamento do sangramento dos vasos da fratura exposta com curativo.",
        "explanation": "Incorreta: Acesso venoso central não é a primeira escolha no trauma (preferir 2 acessos periféricos calibrosos).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O atendimento inicial segue o ABCDE do ATLS. No 'A', a prioridade é a patência das vias aéreas (limpeza de sangue). No 'C', deve-se obter acessos periféricos e controlar hemorragias. O alinhamento de fraturas com déficit vascular é parte do manejo circulatório e de extremidades.",
    "perolaClinica": "No trauma, dois acessos venosos periféricos curtos e calibrosos são superiores a um acesso central para reposição volêmica rápida.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ATLS 10ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1632
  },
  {
    "id": "q-sus-sp-2023-021",
    "code": "Q-SUSSP23-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura / Hematologia Pediátrica",
    "subtema": "Profilaxia da Anemia Ferropriva no Lactente (SBP)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa que apresenta a recomendação de suplementação de ferro para recém-nascidos a termo, com peso adequado para a idade gestacional, em aleitamento materno exclusivo, de acordo com o consenso sobre anemia ferropriva da Sociedade Brasileira de Pediatria.",
    "alternativas": [
      {
        "letter": "A",
        "text": "2 mg de ferro elementar/kg/dia, iniciando aos 6 meses de vida até os 12 meses, em lactentes sem fator de risco",
        "explanation": "Incorreta: A recomendação atual da SBP (2021) para lactentes a termo e AIG é iniciar a suplementação aos 3 meses de vida, não aos 6 meses.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "1 mg de ferro elementar/kg/dia, iniciando aos 3 meses de vida até os 2 anos de idade, em lactentes com fator de risco",
        "explanation": "Correta: De acordo com a atualização da SBP (2021), lactentes a termo, AIG, em aleitamento materno exclusivo ou misto, devem receber 1 mg/kg/dia de ferro elementar dos 3 aos 24 meses de vida.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "2 mg de ferro elementar/kg/dia, iniciando aos 3 meses de vida até os 2 anos de idade, em lactentes com fator de risco",
        "explanation": "Incorreta: A dose de 2 mg/kg/dia é reservada para recém-nascidos prematuros ou de baixo peso, conforme o peso ao nascer.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "1 mg de ferro elementar/kg/dia, iniciando aos 6 meses de vida até os 12 meses, em lactentes sem fator de risco",
        "explanation": "Incorreta: Embora a dose de 1 mg/kg/dia esteja correta, o início deve ser aos 3 meses, independentemente de fatores de risco, segundo o consenso mais recente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "2 mg de ferro elementar/kg/dia, iniciando aos 3 meses de vida até os 12 meses, em lactentes com fator de risco",
        "explanation": "Incorreta: A dose de 2 mg/kg/dia não é a padrão para RN a termo AIG; além disso, a suplementação deve se estender até os 24 meses.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Sociedade Brasileira de Pediatria (SBP), em sua atualização de 2021, recomenda que todo lactente nascido a termo e com peso adequado para a idade gestacional (AIG), independentemente do tipo de aleitamento, receba suplementação profilática de 1 mg/kg/dia de ferro elementar dos 3 aos 24 meses de vida.",
    "perolaClinica": "Lactente termo AIG: suplementar 1 mg/kg/dia de ferro elementar dos 3 aos 24 meses, independente do tipo de leite.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "SBP — Guia Prático de Atualização: Anemia Ferropriva (2021)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1633
  },
  {
    "id": "q-sus-sp-2023-022",
    "code": "Q-SUSSP23-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Dermatologia Pediátrica",
    "subtema": "Dermatite Atópica",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 12 meses de vida, do sexo masculino, foi levado para consulta de puericultura com queixa de lesões pruriginosas na pele. Pais referem prurido intenso nos últimos meses, por vezes atrapalhando o sono da criança. Ao exame, lactente apresenta lesões eritematosas com pápulas, vesículas e crostas na face, sem acometimento de nariz e boca; com dupla prega infrapalpebral. Apresenta também algumas lesões de mesmo aspecto em região extensora dos braços. Considerando esse caso clínico hipotético, assinale a alternativa que apresenta, respectivamente, o diagnóstico e o possível tratamento para o quadro apresentado.",
    "alternativas": [
      {
        "letter": "A",
        "text": "dermatite seborreica; corticoide tópico",
        "explanation": "Incorreta: A dermatite seborreica costuma aparecer mais precocemente (primeiros meses) e atinge áreas gordurosas (couro cabeludo, sulco nasogeniano), geralmente sem prurido intenso.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "eczema numular; tracolimus",
        "explanation": "Incorreta: O eczema numular apresenta lesões em formato de moeda, bem delimitadas, o que difere do quadro difuso e facial descrito.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "dermatite de contato alérgica; anti-histamínicos",
        "explanation": "Incorreta: A dermatite de contato alérgica é menos comum nessa distribuição facial clássica em lactentes e não explicaria a prega de Dennie-Morgan.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "impetigo; antibiótico oral e tópico",
        "explanation": "Incorreta: O impetigo é uma infecção bacteriana secundária com crostas melicéricas, não sendo a causa primária de prurido crônico e prega infraorbitária.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "dermatite atópica; hidratação da pele",
        "explanation": "Correta: O quadro de prurido intenso, lesões eritemato-papulo-vesiculosas na face (poupando a região perioral/nasal) e superfícies extensoras, associado à dupla prega infrapalpebral (sinal de Dennie-Morgan), é clássico de Dermatite Atópica. O pilar do tratamento é a hidratação vigorosa da pele.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A dermatite atópica no lactente caracteriza-se por prurido intenso e lesões eczematosas que tipicamente poupam o triângulo central da face. O sinal de Dennie-Morgan (prega infrapalpebral) é um estigma de atopia.",
    "perolaClinica": "Dermatite atópica no lactente: prurido intenso + face (poupando centro) + superfícies extensoras. Hidratação é a base.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1633
  },
  {
    "id": "q-sus-sp-2023-023",
    "code": "Q-SUSSP23-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia Pediátrica",
    "subtema": "Deficiência de G6PD",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um menino de 3 anos de idade, previamente hígido, foi levado ao pronto-socorro com quadro de palidez abrupta e queda no estado geral. Sua avó, que o acompanhava, negou uso de medicações e relatou que, nos últimos dias, encontrara a criança brincando com bolinhas de naftalina. Ao exame, constatou-se o seguinte: criança afebril, hipocorada (2+/4+) e ictérica (2+/4+); taquicardia, com ausculta respiratória e cardíaca sem alterações; e baço palpável a 1 cm do rebordo costal. Foram solicitados exames laboratoriais, os quais revelaram Hb = 6,2 mg/dL, Ht = 18,5%, reticulócitos = 9,5% e Coombs direto negativo. Assinale a alternativa que apresenta a hipótese diagnóstica nesse caso.",
    "alternativas": [
      {
        "letter": "A",
        "text": "doença falciforme",
        "explanation": "Incorreta: A doença falciforme geralmente apresenta crises álgicas e alterações no teste do pezinho, não sendo tipicamente desencadeada por naftalina.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "esferocitose hereditária",
        "explanation": "Incorreta: A esferocitose é uma anemia hemolítica crônica com microesferócitos no sangue periférico e Coombs negativo, mas não tem relação direta com exposição a oxidantes.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "talassemia minor",
        "explanation": "Incorreta: A talassemia minor é uma anemia microcítica e hipocrômica leve, geralmente assintomática, sem crises hemolíticas agudas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "deficiência de glicose-6-fosfato desidrogenase",
        "explanation": "Correta: A deficiência de G6PD causa anemia hemolítica aguda após estresse oxidativo (como exposição à naftalina). O quadro de palidez, icterícia, reticulocitose e Coombs negativo após exposição é patognomônico.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "anemia hemolítica autoimune",
        "explanation": "Incorreta: A anemia hemolítica autoimune apresentaria teste de Coombs direto positivo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A deficiência de G6PD é a enzimopatia eritrocitária mais comum. O quadro clínico clássico é de hemólise aguda desencadeada por agentes oxidantes (naftalina, feijão fava, certas medicações), cursando com icterícia, palidez e reticulocitose.",
    "perolaClinica": "Crise hemolítica aguda + Coombs negativo + exposição à naftalina = Deficiência de G6PD.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Nelson Textbook of Pediatrics — 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1633
  },
  {
    "id": "q-sus-sp-2023-024",
    "code": "Q-SUSSP23-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "subtema": "Tuberculose na Infância — Investigação de Contatos e ILTB",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Foi levado para o hospital um recém-nascido, do sexo masculino, com 39 semanas de vida, AIG, assintomático, filho de mãe com tuberculose, diagnosticada no início do terceiro trimestre, em tratamento regular. Exames maternos dos últimos 15 dias revelaram o seguinte: pesquisa BAAR no escarro negativo e radiografia de tórax sem alterações. Com base nesse caso hipotético, assinale a alternativa correta, com relação à conduta recomendada para o paciente em questão.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A amamentação deve ser orientada sem qualquer restrição, e a vacina BCG pode ser aplicada.",
        "explanation": "Incorreta: A questão foi anulada, mas o conceito envolve a separação da vacinação BCG da quimioprofilaxia em RN expostos.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "A amamentação deve ser contraindicada, devido ao risco de passagem do Mycobacterium tuberculosis pelo leite humano.",
        "explanation": "Incorreta: O aleitamento materno não é contraindicado na tuberculose materna, desde que a mãe não tenha mastite tuberculosa e use máscara se for bacilífera.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "A mãe deve amamentar seu filho usando máscara até o final do tratamento.",
        "explanation": "Incorreta: O uso de máscara é indicado apenas enquanto a mãe for bacilífera (BAAR positivo), o que não é o caso aqui.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "A amamentação deve ser orientada, porém recomenda-se, para a criança, o uso profilático de rifampicina até o terceiro mês de vida.",
        "explanation": "Incorreta: A quimioprofilaxia de escolha no RN exposto é com Isoniazida ou Rifampicina, mas a conduta depende da infectividade materna.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "A mãe deve amamentar seu filho usando máscara, e a vacina BCG deve ser aplicada após o terceiro mês de vida.",
        "explanation": "Incorreta: A vacina BCG deve ser adiada até o término da quimioprofilaxia primária em RN expostos a contatos bacilíferos.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca. Em RN expostos à tuberculose, a conduta clássica do Ministério da Saúde é iniciar quimioprofilaxia primária e adiar a vacina BCG até a conclusão do tratamento preventivo e realização do teste tuberculínico/IGRA.",
    "perolaClinica": "RN exposto à TB: não vacinar com BCG ao nascer; iniciar quimioprofilaxia e reavaliar após 3 meses.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1634
  },
  {
    "id": "q-sus-sp-2023-025",
    "code": "Q-SUSSP23-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação (PNI — Atualizações)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto à vacina contra o HPV disponível no calendário nacional de vacinação do Brasil, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Essa vacina protege contra o papilomavírus humano 6, 11, 31 e 33.",
        "explanation": "Incorreta: A vacina quadrivalente do PNI protege contra os tipos 6, 11, 16 e 18.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O esquema básico recomenda dose única para adolescentes.",
        "explanation": "Incorreta: O esquema básico para adolescentes (9 a 14 anos) foi atualizado para dose única em 2024, mas na época da prova o esquema era de duas doses.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Essa vacina é composta pelo papilomavírus humano atenuado.",
        "explanation": "Incorreta: A vacina HPV é inativada, composta por partículas semelhantes ao vírus (VLP - virus-like particles), não por vírus atenuado.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A idade recomendada para a aplicação dessa vacina é 7 anos.",
        "explanation": "Incorreta: A idade recomendada no PNI é de 9 a 14 anos para ambos os sexos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O esquema com três doses está recomendado para pacientes oncológicos.",
        "explanation": "Correta: Para pacientes imunossuprimidos (incluindo oncológicos, transplantados e vivendo com HIV) na faixa de 9 a 45 anos, o esquema recomendado é de três doses (0, 2 e 6 meses).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A vacina HPV quadrivalente (6, 11, 16, 18) é oferecida pelo PNI. Enquanto para a população geral de 9 a 14 anos o esquema atual é dose única, para grupos especiais (imunossuprimidos) mantém-se o esquema de 3 doses.",
    "perolaClinica": "Vacina HPV no PNI: dose única para 9-14 anos; 3 doses para imunossuprimidos (9-45 anos).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Calendário Nacional de Vacinação — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1634
  },
  {
    "id": "q-sus-sp-2023-026",
    "code": "Q-SUSSP23-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica / Infectopediatria",
    "subtema": "Parasitoses Intestinais — Enterobíase",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Escolar, com 7 anos de idade, do sexo feminino, previamente hígida, apresenta, em consulta de rotina, quadro de corrimento vaginal há um mês. Sua mãe refere que a criança acorda muitas vezes durante a noite com prurido em região anal. Seu desenvolvimento pondero-estatural é adequado. O quadro clínico apresentado nessa situação hipotética é sugestivo do parasita denominado",
    "alternativas": [
      {
        "letter": "A",
        "text": "Entamoeba histolytica.",
        "explanation": "Incorreta: A amebíase causa diarreia invasiva (disenteria) e abscessos hepáticos, não prurido anal noturno.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Trichuris trichiura.",
        "explanation": "Incorreta: A tricuríase grave pode causar prolapso retal e anemia, mas não é a causa clássica de prurido anal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Strongyloides stercoralis.",
        "explanation": "Incorreta: A estrongiloidíase pode causar a 'larva currens' e sintomas respiratórios/gastrointestinais, mas não prurido anal noturno.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Enterobius vermiculares.",
        "explanation": "Correta: O *Enterobius vermicularis* (oxiúro) é o agente da enterobíase, caracterizada por prurido anal intenso, predominantemente noturno (migração das fêmeas para a região perianal), podendo causar vulvovaginite em meninas.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Necator americanus.",
        "explanation": "Incorreta: O *Necator americanus* é um ancilostomídeo que causa anemia ferropriva e sintomas cutâneos no local da penetração (bicho geográfico).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A enterobíase é uma parasitose comum em escolares. O sintoma cardeal é o prurido anal noturno, que ocorre devido à migração das fêmeas do parasita para a região perianal para deposição de ovos. Em meninas, a proximidade anatômica pode levar à vulvovaginite.",
    "perolaClinica": "Prurido anal noturno + vulvovaginite em criança = Enterobius vermicularis (Oxiuríase).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1634
  },
  {
    "id": "q-sus-sp-2023-027",
    "code": "Q-SUSSP23-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura / Aleitamento Materno",
    "subtema": "Aleitamento Materno e Prevenção de Alergias (APLV)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente do sexo masculino, com 2 meses de vida, foi levado para consulta de puericultura em uma unidade básica de saúde. Sua mãe, muito aflita, referiu que o filho apresentava cólicas intensas, acompanhadas de vômitos frequentes e recusa de alimentos havia 30 dias, além de presença de sangue e muco nas fezes havia 10 dias, bem como eritema em topografia de região poplítea e fossa cubital. Trata-se de paciente em aleitamento materno exclusivo, e a mãe tem antecedente pessoal de asma e dermatite atópica na infância. Diante desse caso e da principal hipótese diagnóstica, a conduta a ser adotada é recomendar que a mãe",
    "alternativas": [
      {
        "letter": "A",
        "text": "mantenha o aleitamento materno e inicie dieta de eliminação do leite de vaca e derivados, por 2 a 4 semanas.",
        "explanation": "Correta: O quadro de proctocolite alérgica (sangue e muco nas fezes em lactente em AME) associado a eczema e sintomas gastrointestinais sugere APLV. A conduta é a dieta de exclusão de leite e derivados pela mãe por 2 a 4 semanas para teste terapêutico.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "mantenha o aleitamento materno e inicie dieta de eliminação do leite de vaca e derivados, por 7 a 14 dias.",
        "explanation": "Incorreta: O período de 7 a 14 dias pode ser insuficiente para a remissão completa dos sintomas na proctocolite alérgica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "suspenda o aleitamento materno e inicie fórmula extensamente hidrolisada para o lactente.",
        "explanation": "Incorreta: Não se deve suspender o aleitamento materno; a primeira medida é a dieta de exclusão materna.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "mantenha o aleitamento materno, sem restrições lácteas em sua dieta.",
        "explanation": "Incorreta: Diante da suspeita de APLV com sintomas significativos, a intervenção dietética é necessária.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "mantenha o aleitamento materno e inicie dieta de eliminação do leite de vaca e derivados, por 2 a 4 semanas, e solicitar dosagem sérica de IgE específica para proteína do leite de vaca para o lactente.",
        "explanation": "Incorreta: A proctocolite alérgica é geralmente uma reação não mediada por IgE, portanto, a dosagem de IgE específica não auxilia no diagnóstico inicial.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A proctocolite alérgica induzida por proteína alimentar é a manifestação mais comum de APLV em lactentes em aleitamento materno exclusivo. O diagnóstico é clínico, baseado na melhora após dieta de exclusão materna e recaída após teste de provocação oral.",
    "perolaClinica": "Sangue nas fezes em lactente em AME + bom estado geral = Proctocolite alérgica (APLV). Conduta: Dieta de exclusão materna.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guia Prático de Atualização SBP: Alergia Alimentar (2021)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1634
  },
  {
    "id": "q-sus-sp-2023-028",
    "code": "Q-SUSSP23-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumopediatria",
    "subtema": "Pneumonia Bacteriana",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Apesar do desenvolvimento de vacinas eficazes e novos testes de diagnósticos rápidos para detectar agentes virais e bacterianos, a PAC e suas complicações representam uma importante causa de morbidade e mortalidade na população pediátrica. O pneumococo é o principal agente bacteriano na PAC, mas há situações e condições clínicas que se relacionam a possíveis agentes etiológicos. Com relação a esse assunto, considere as seguintes condições de risco de pneumonias complicadas na infância e possíveis agentes etiológicos. condições de risco; 1) tosse crônica, febre prolongada, emagrecimento e piora radiológica; 2) quadro de varicela; 3) pacientes com fibrose cística; 4) infectados pelo HIV em tratamento irregular; 5) maiores de 5 anos de idade com tosse pouco produtiva subaguda ou crônica; possíveis agentes etiológicos; a) Mycoplasma pneumoniae; b) Mycobacterium tuberculosis; c) Pseudomonas aeruginosa; d) Streptoccocus pyogenes; e) Pneumacystis jirovecci; Considerando essas informações, assinale a alternativa que apresenta a correta correlação de condições de risco e possíveis agentes etiológicos.",
    "alternativas": [
      {
        "letter": "A",
        "text": "1b; 2c; 3d; 4e; 5a",
        "explanation": "Incorreta: A correlação para varicela (2) é S. pyogenes (d), não Pseudomonas.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "1b; 2d; 3c; 4e; 5a",
        "explanation": "Correta: 1b (TB: tosse crônica/emagrecimento); 2d (Varicela: risco para S. pyogenes); 3c (Fibrose Cística: Pseudomonas); 4e (HIV: Pneumocystis); 5a (Escolares: Mycoplasma).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "1a; 2c; 3d; 4e; 5b",
        "explanation": "Incorreta: Mycoplasma (a) não é a causa típica de emagrecimento e febre prolongada (1).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "1a; 2d; 3c; 4e; 5b",
        "explanation": "Incorreta: Mycobacterium tuberculosis (b) não é o agente típico de tosse subaguda em maiores de 5 anos (5) comparado ao Mycoplasma.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "1d; 2c; 3a; 4e; 5b",
        "explanation": "Incorreta: S. pyogenes (d) não é o agente clássico para o quadro 1.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A etiologia da pneumonia pediátrica varia conforme a idade e condições de base. O Mycoplasma é comum em escolares; Pseudomonas em fibrose cística; S. pyogenes é uma complicação temida da varicela; e o Pneumocystis é marcador de imunodeficiência (HIV).",
    "perolaClinica": "Varicela + Pneumonia = pensar em Streptococcus pyogenes ou Staphylococcus aureus.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1635
  },
  {
    "id": "q-sus-sp-2023-029",
    "code": "Q-SUSSP23-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectopediatria",
    "subtema": "Meningite Bacteriana e Análise do LCR",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma criança do sexo feminino, de 2 anos de idade, foi levada ao pronto atendimento com história de febre baixa e cefaleia há 10 dias, que evoluiu com vômitos, rebaixamento de nível de consciência, convulsão tônico-clônica prolongada e coma. Foi realizada punção lombar, revelando-se o seguinte: 700 células/mm³, com 10% de neutrófilos, 90% de linfócitos, proteína 200 mg/dL e glicose 16 mg/dL. Assinale a alternativa que apresenta o principal agente etiológico nesse caso clínico hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "herpes simples 1",
        "explanation": "Incorreta: A encefalite herpética costuma ter início mais agudo e o LCR pode apresentar hemácias, com glicose geralmente normal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Streptococcus pneumoniae",
        "explanation": "Incorreta: A meningite pneumocócica é aguda (1-2 dias) e apresenta predomínio de neutrófilos no LCR.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Neisseria meningitidis",
        "explanation": "Incorreta: A meningite meningocócica é hiperaguda e purulenta (neutrofílica).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Haemophilus influenzae tipo B",
        "explanation": "Incorreta: Semelhante ao pneumococo, causa meningite bacteriana aguda purulenta.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Mycobacteria tuberculosis",
        "explanation": "Correta: O quadro subagudo (10 dias), evolução para coma/convulsão e o LCR com pleocitose linfocitária, hiperproteinorraquia e hipoglicorraquia acentuada são típicos da Meningite Tuberculosa.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A meningite tuberculosa apresenta-se classicamente em três fases: prodrômica (insidiosa), de irritação meníngea e fase neurológica grave. O líquor é característico: aspecto límpido ou xantocrômico, pleocitose moderada com predomínio de linfócitos, proteínas muito elevadas e glicose muito baixa.",
    "perolaClinica": "LCR com linfomonocitose + glicose muito baixa + proteínas muito altas = Meningite Tuberculosa.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manual de Recomendações para o Controle da Tuberculose no Brasil"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1635
  },
  {
    "id": "q-sus-sp-2023-030",
    "code": "Q-SUSSP23-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neurologia Pediátrica",
    "subtema": "Crise Febril em Lactentes — Indicação de Punção Lombar",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de dois anos de idade, do sexo masculino, deu entrada pela sala de emergência, trazido pela equipe do SAMU. Sua mãe relata que, há aproximadamente uma hora, o paciente apresentou uma convulsão em vigência de febre. Conforme a descrição da mãe, trata-se de quadro com característica de ser uma convulsão tônica clônica generalizada. A mãe relata duração de aproximadamente 5 minutos, com resolução espontânea. Relata que o paciente ficou sonolento após resolução do quadro, mas que, ao chegar no hospital, já se apresentava ativo e reativo. Ao exame físico, constatou-se o seguinte: paciente em bom estado geral, febril, sem alterações neurológicas, com quadro de coriza hialina e congestão nasal. Mãe relata que paciente está com quadro de tosse, coriza hialina e febre há 2 dias. Assinale a alternativa que apresenta a conduta a ser tomada nesse caso hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar (TC) de crânio com contraste",
        "explanation": "Incorreta: Exames de imagem não são indicados rotineiramente na crise febril simples em pacientes com exame neurológico normal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dar alta com tratamento sintomático e orientações de sinais de alarme",
        "explanation": "Correta: O paciente apresenta uma crise febril simples (generalizada, < 15 min, sem recorrência em 24h, recuperação rápida). A conduta é apenas o tratamento da causa da febre e orientações.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "coletar hemograma, hemocultura e PCR",
        "explanation": "Incorreta: Exames laboratoriais não são necessários se a fonte da febre for clinicamente identificada (neste caso, quadro viral de vias aéreas superiores).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "internar paciente e solicitar avaliação de neuropediatra",
        "explanation": "Incorreta: Não há indicação de internação ou avaliação especializada urgente para uma crise febril simples isolada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar coleta obrigatória de líquor",
        "explanation": "Incorreta: A punção lombar é indicada se houver sinais meníngeos, suspeita de meningite ou em crianças < 6-12 meses com vacinação incompleta.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A crise febril simples é um evento benigno que ocorre entre 6 meses e 5 anos. Se preencher critérios de simplicidade e o exame neurológico estiver normal, não há necessidade de investigação exaustiva, apenas tratamento sintomático.",
    "perolaClinica": "Crise febril simples: generalizada, < 15 min, 1x em 24h. Conduta: tranquilizar pais e tratar a febre.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "SBP — Guia Prático: Crise Febril (2022)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1636
  },
  {
    "id": "q-sus-sp-2023-031",
    "code": "Q-SUSSP23-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Resfriado Comum",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 10 anos de idade foi levado a uma consulta com queixa de tosse e coriza hialina há 5 dias, sem febre ou demais queixas. Seu exame físico revelou o seguinte: bom estado geral, corado, hidratado, afebril, ativo e reativo; bulhas rítmicas e normofonéticas em 2 tempos, sem sopro audível; murmúrios vesiculares positivos bilateralmente sem ruído adventício, sem sinais de desconforto; abdome flácido, indolor, com ruídos hidroaéreos presentes; tempo de enchimento capilar de 2 segundos; orofaringe sem alterações; otoscopia sem alterações. Assinale a alternativa que apresenta a conduta que deve ser tomada nesse caso hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "alta com lavagem nasal, orientar aumento de ingesta hídrica e orientações de sinais de alarme",
        "explanation": "Correta: O quadro é compatível com resfriado comum (IVAS viral). O tratamento é sintomático, com foco em lavagem nasal e hidratação.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "solicitar radiografia de tórax",
        "explanation": "Incorreta: Não há indicação de radiografia de tórax em um paciente com exame físico pulmonar normal e sem sinais de gravidade.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "solicitar radiografia de seios da face",
        "explanation": "Incorreta: O diagnóstico de rinossinusite é clínico e a radiografia de seios da face não é recomendada em crianças devido à baixa especificidade e desenvolvimento incompleto dos seios.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "alta com anti-histamínico e corticoide oral",
        "explanation": "Incorreta: Anti-histamínicos e corticoides não têm benefício comprovado no resfriado comum e podem causar efeitos adversos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "alta com salbutamol e prednisolona",
        "explanation": "Incorreta: Não há sinais de broncoespasmo (sibilos ou desconforto) que justifiquem o uso de salbutamol ou prednisolona.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O resfriado comum é a infecção mais frequente na infância. O diagnóstico é clínico e o manejo baseia-se em medidas de suporte, como lavagem nasal com solução salina e hidratação, evitando-se o uso desnecessário de antibióticos ou xaropes.",
    "perolaClinica": "Resfriado comum: tratamento é lavagem nasal, hidratação e paciência.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1636
  },
  {
    "id": "q-sus-sp-2023-032",
    "code": "Q-SUSSP23-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "subtema": "Traumatismo Cranioencefálico",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Considerando-se um quadro de traumatismo crânio encefálico em uma criança com menos de 2 anos de idade, é correto afirmar que não é considerado como um mecanismo de trauma grave",
    "alternativas": [
      {
        "letter": "A",
        "text": "acidente com óbito no local.",
        "explanation": "Incorreta: Acidentes com óbito no local são considerados mecanismos de alta energia e, portanto, graves.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "acidente de carro com paciente sendo ejetado do veículo.",
        "explanation": "Incorreta: Ejeção do veículo é um critério clássico de mecanismo de trauma grave em qualquer protocolo de trauma.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "queda de até 50 centímetros.",
        "explanation": "Correta: De acordo com os critérios de PECARN para crianças < 2 anos, o mecanismo é considerado grave se a queda for superior a 0,9 metro (3 pés). Uma queda de 50 cm não atinge esse limiar.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "capotamento do veículo.",
        "explanation": "Incorreta: Capotamento é um mecanismo de trauma de alto impacto.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "queda de bicicleta em baixa velocidade sem capacete.",
        "explanation": "Incorreta: Queda de bicicleta sem capacete, mesmo em baixa velocidade, pode ser considerada grave dependendo do impacto, mas comparativamente, a queda de 50 cm é o mecanismo de menor risco entre as opções.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na avaliação do TCE pediátrico, o protocolo PECARN define mecanismos graves: quedas > 0,9m (< 2 anos) ou > 1,5m (> 2 anos), acidentes automobilísticos com ejeção, capotamento ou óbito, e atropelamentos.",
    "perolaClinica": "Mecanismo grave no TCE (< 2 anos): queda > 0,9 metro ou acidente automobilístico de alto impacto.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "PECARN — Pediatric Emergency Care Applied Research Network"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1636
  },
  {
    "id": "q-sus-sp-2023-033",
    "code": "Q-SUSSP23-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "subtema": "Ingestão de Corpo Estranho na Infância",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Paciente de 2 anos de idade é levada pela mãe ao hospital com relato de aumento de salivação subitamente, não conseguindo deglutir. A mãe relata que quadro iniciou há, aproximadamente, 1 hora após deixar a paciente sozinha na sala por alguns minutos, afirmando que antes a paciente estava bem. Foi realizada uma radiografia de tórax, obtendo-se a seguinte imagem. Com base nesse caso clínico, assinale a alternativa que apresenta o corpo estranho ingerido pela paciente e a conduta a ser adotada nessa situação.",
    "alternativas": [
      {
        "letter": "A",
        "text": "bateria; realizar endoscopia o mais rápido possível",
        "explanation": "Incorreta: Questão anulada. Baterias de disco no esôfago exigem remoção imediata.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "moeda; realizar endoscopia o mais rápido possível",
        "explanation": "Incorreta: Questão anulada. Moedas no esôfago podem ser observadas por até 24h se o paciente estiver assintomático, mas a sialorreia indica obstrução.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "bateria; realizar endoscopia eletivamente no próximo dia",
        "explanation": "Incorreta: Questão anulada. Baterias nunca devem ser removidas eletivamente se estiverem no esôfago.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "moeda; realizar endoscopia eletivamente no próximo dia",
        "explanation": "Incorreta: Questão anulada. A conduta para moeda depende da localização e sintomas.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "moeda; não realizar endoscopia",
        "explanation": "Incorreta: Questão anulada. Sialorreia e disfagia sugerem impactação esofágica, o que geralmente requer intervenção.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca examinadora. O manejo de corpos estranhos depende do objeto (bateria vs. moeda) e da localização (esôfago vs. estômago). Baterias no esôfago são emergências absolutas pelo risco de necrose por liquefação.",
    "perolaClinica": "Bateria de disco no esôfago: emergência endoscópica imediata (risco de perfuração em 2h).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "NASPGHAN — Management of Ingested Foreign Bodies in Children"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1636
  },
  {
    "id": "q-sus-sp-2023-034",
    "code": "Q-SUSSP23-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumopediatria",
    "subtema": "Crise Asmática Moderada/Grave na Infância — Conduta na Emergência",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "De acordo com o Global Initiative For Asthma de 2022 (GINA 2022), assinale a alternativa incorreta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve-se dar preferência para corticoide oral quando possível.",
        "explanation": "Incorreta: Questão anulada. O GINA 2022 trouxe mudanças significativas no manejo da asma.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Deve-se realizar beta-2 agonista de cura duração.",
        "explanation": "Incorreta: Questão anulada. O uso de SABA isolado não é mais a preferência no manejo de manutenção, mas continua na crise.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "Nos casos de anafilaxia, deve-se realizar adrenalina, além das outras medidas para broncoespasmo.",
        "explanation": "Incorreta: Questão anulada. Adrenalina é o tratamento de escolha para anafilaxia.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "Corticoide oral é tão eficaz quanto corticoide endovenoso.",
        "explanation": "Incorreta: Questão anulada. Corticoide oral e venoso têm eficácia equivalente na maioria das crises de asma.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Deve-se manter brometo de ipratrópio de horário em paciêntes com necessidade de internação.",
        "explanation": "Incorreta: Questão anulada. O brometo de ipratrópio é indicado nas crises graves nas primeiras horas.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca. As diretrizes do GINA sofrem atualizações anuais frequentes, especialmente sobre o uso de corticoides inalatórios associados a formoterol como terapia de resgate e manutenção.",
    "perolaClinica": "Na crise de asma, corticoide oral é tão eficaz quanto o venoso e deve ser iniciado precocemente.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "GINA — Global Initiative for Asthma (2022)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1637
  },
  {
    "id": "q-sus-sp-2023-035",
    "code": "Q-SUSSP23-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas / Terapia Intensiva",
    "subtema": "Suporte Avançado de Vida em Pediatria (PALS)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa que apresenta a primeira carga a ser utilizada de acordo com o suporte avançado de vida em pediatria no caso de uma parada cardiorrespiratória em ritmo chocável.",
    "alternativas": [
      {
        "letter": "A",
        "text": "1 J/kg",
        "explanation": "Incorreta: 1 J/kg não é a carga inicial recomendada pelo PALS.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "2 J/kg",
        "explanation": "Correta: De acordo com o PALS (AHA), a carga inicial para desfibrilação em ritmos chocáveis (FV/TV sem pulso) é de 2 J/kg.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "4 J/kg",
        "explanation": "Incorreta: 4 J/kg é a carga recomendada para o segundo choque.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "8 J/kg",
        "explanation": "Incorreta: 8 J/kg pode ser utilizado em choques subsequentes, mas não é a carga inicial.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "10 J/kg",
        "explanation": "Incorreta: 10 J/kg é a carga máxima recomendada para desfibrilação pediátrica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "No suporte avançado de vida em pediatria (PALS), para ritmos chocáveis, a sequência de cargas é: 2 J/kg no primeiro choque, 4 J/kg no segundo, e >= 4 J/kg nos subsequentes (máximo 10 J/kg ou carga de adulto).",
    "perolaClinica": "Desfibrilação pediátrica: 1º choque 2 J/kg, 2º choque 4 J/kg, subsequentes >= 4 J/kg.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "PALS — Pediatric Advanced Life Support (AHA 2020)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1637
  },
  {
    "id": "q-sus-sp-2023-036",
    "code": "Q-SUSSP23-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "subtema": "Síndrome Nefrótica na Infância (Lesão Mínima) — Diagnóstico e Manejo Terapêutico",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma criança de 7 anos de idade, previamente hígida, com história de tosse, coriza e odinofagia há 3 dias, evoluiu com edema periorbitário ontem, com piora hoje pela manhã. A mãe relata que o paciente apresentou quadro semelhante no mês anterior, com resolução espontânea, sem necessitar buscar auxílio médico. Ao exame, o paciente apresenta edema periorbitário, edema de membros inferiores e discreta ascite, sem outras alterações. Os exames realizados evidenciaram proteinúria e hipoalbuminemia. Com relação a esse caso clínico, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A conduta deve ser internar o paciente, colher exames para afastar causas secundárias e iniciar tratamento com ceftriaxone e com reposição de albumina.",
        "explanation": "Incorreta: O tratamento inicial da síndrome nefrótica idiopática é com corticoide (prednisona), não antibióticos, a menos que haja infecção comprovada.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A conduta deve ser colher exames para afastar causas secundárias, prescrever prednisona em dias alternados, bem como diurético, e orientar alta com reavaliação clínica em uma semana.",
        "explanation": "Incorreta: O esquema inicial de corticoterapia é diário (60 mg/m²/dia ou 2 mg/kg/dia), não em dias alternados na fase de indução.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Essa doença pode cursar com hiperlipidemia e fenômenos tromboembólicos.",
        "explanation": "Correta: A síndrome nefrótica cursa com hiperlipidemia (devido ao aumento da síntese hepática de lipoproteínas) e um estado de hipercoagulabilidade, aumentando o risco de fenômenos tromboembólicos.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Para confirmação diagnóstica, é necessário que a proteinúria seja maior que 40 mg/kg/dia e que a albumina sérica seja inferior a 2,5 g/dL.",
        "explanation": "Incorreta: A definição de proteinúria nefrótica em pediatria é > 40 mg/m²/hora (ou relação proteína/creatinina urinária > 2).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Frequentemente essa doença cursa com hipertensão e hematúria.",
        "explanation": "Incorreta: A Doença de Lesão Mínima (causa mais comum em crianças) tipicamente não cursa com hipertensão ou hematúria macroscópica (características da síndrome nefrítica).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A síndrome nefrótica é definida pela tríade: proteinúria maciça, hipoalbuminemia e edema. A Doença de Lesão Mínima é a principal causa na infância, respondendo bem à corticoterapia, mas apresentando riscos de infecções e tromboses.",
    "perolaClinica": "Síndrome Nefrótica: Proteinúria maciça + Hipoalbuminemia + Edema + Hiperlipidemia.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tratado de Pediatria SBP — 5ª Edição"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1637
  },
  {
    "id": "q-sus-sp-2023-037",
    "code": "Q-SUSSP23-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Bronquiolite Viral Aguda — Critérios de Internação e Suporte",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "De acordo com as diretrizes da Sociedade Brasileira de Pediatria acerca do manejo de infecção causada pelo vírus sincicial respiratório (VSR), assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A fisioterapia respiratória é recomendada para todos os quadros.",
        "explanation": "Incorreta: A fisioterapia respiratória não é recomendada rotineiramente na bronquiolite aguda, pois pode aumentar o estresse e o desconforto da criança.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O corte de saturação de oxigênio usado para indicar o uso de oxigenoterapia é 94%.",
        "explanation": "Incorreta: O alvo de saturação de oxigênio para indicar oxigenoterapia na bronquiolite é geralmente < 90% a 92%, dependendo da diretriz (SBP usa 90-92%).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Sempre que o paciente for internado, deve-se manter o uso de corticoide oral.",
        "explanation": "Incorreta: O uso de corticoides (oral ou inalatório) não é recomendado para o tratamento da bronquiolite viral aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Quanto ao uso de broncodilatador, o uso de acordo com a resposta clínica pode eventualmente ser considerado, mas só deve ser mantido se houver evidência de melhora imediata.",
        "explanation": "Correta: As diretrizes atuais não recomendam o uso rotineiro de broncodilatadores. Um teste terapêutico pode ser feito, mas só deve ser mantido se houver melhora clínica clara e imediata.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "A toda criança com quadro de bronquiolite deve ser prescrita antibioticoterapia para evitar complicações bacterianas.",
        "explanation": "Incorreta: A bronquiolite é uma doença viral; antibióticos só devem ser usados se houver evidência de infecção bacteriana secundária.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O manejo da bronquiolite viral aguda é essencialmente de suporte: hidratação e oxigenoterapia se necessário. Broncodilatadores, corticoides e fisioterapia não devem ser usados rotineiramente.",
    "perolaClinica": "Bronquiolite: o tratamento é suporte (oxigênio e hidratação). Menos é mais.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "SBP — Diretrizes no Manejo da Bronquiolite Viral Aguda"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1638
  },
  {
    "id": "q-sus-sp-2023-038",
    "code": "Q-SUSSP23-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "subtema": "Dengue",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um adolescente de 14 anos de idade dá entrada no pronto-socorro com história de vômitos persistentes e de dor abdominal de forte intensidade há 1 dia. A mãe relata que o paciente retornou de uma viagem que fez com alguns amigos para o interior de São Paulo, região de São José do Rio Preto, há 10 dias e, após 3 dias do retorno, iniciou um quadro de febre de até 39°C, junto de cefaleia e de artralgia. Há 3 dias, houve melhora da febre e surgimento de exantema máculo-papular, com resolução espontânea em 48 horas. O paciente nega outros sintomas e relata que os outros três amigos estão bem. Ao exame, apresenta regular estado geral, corado, desidratado, taquipneico, taquicárdico, afebril, consciente e orientado; ausculta cardíaca e pulmonar sem alterações; abdome globoso, com fígado a 4 cm do rebordo costal direito, doloroso à palpação; boa perfusão periférica e pulsos cheios. Considerando esse caso hipotético, assinale a melhor conduta entre as alternativas apresentadas.",
    "alternativas": [
      {
        "letter": "A",
        "text": "colher culturas, hemograma e provas de atividade inflamatória; e iniciar reposição volêmica e antibioticoterapia de amplo espectro na primeira hora",
        "explanation": "Incorreta: O quadro sugere dengue, não sepse bacteriana; o foco inicial deve ser a reposição volêmica e exames específicos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar ultrassom de abdome; iniciar reposição volêmica; e solicitar avaliação da cirurgia infantil de imediato",
        "explanation": "Incorreta: Embora a dor abdominal e hepatomegalia possam simular abdome agudo, o contexto epidemiológico e clínico aponta fortemente para dengue.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "colher hemograma completo, albumina sérica e transaminases; iniciar reposição volêmica; e notificar o caso imediatamente",
        "explanation": "Correta: O paciente apresenta sinais de alarme para dengue (dor abdominal intensa, hepatomegalia dolorosa, vômitos persistentes). A conduta inclui exames laboratoriais, hidratação imediata e notificação compulsória.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "realizar ultrassom cervical para pesquisa de adenomegalias; iniciar reposição volêmica; e orientar repouso por 1 a 2 semanas, evitando contatos íntimos nesse período",
        "explanation": "Incorreta: Esse manejo seria mais adequado para mononucleose infecciosa, que não explicaria a gravidade e o exantema pós-defervescência nesse contexto.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "colher hemograma e marcadores de atividade inflamatória; e iniciar reposição volêmica e corticoide",
        "explanation": "Incorreta: Corticoides não fazem parte do manejo padrão da dengue e podem ser prejudiciais.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A dengue com sinais de alarme é caracterizada por dor abdominal, vômitos persistentes, acúmulo de líquidos, hepatomegalia > 2cm e aumento do hematócrito. O manejo exige hidratação venosa imediata e monitorização rigorosa.",
    "perolaClinica": "Dengue: a dor abdominal e a hepatomegalia após a febre baixar são sinais de alarme críticos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Dengue: Diagnóstico e Manejo Clínico"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1638
  },
  {
    "id": "q-sus-sp-2023-039",
    "code": "Q-SUSSP23-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "subtema": "Doença Diarreica Aguda, Disenteria e Plano B de Reidratação",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um lactente de 10 meses de idade, previamente hígido, dá entrada no pronto- socorro infantil com vômitos (apresentando de 2 a 3 episódios por dia) e com diarreia (de 7 a 8 episódios por dia) há 2 dias. A mãe nega a presença de sangue nas fezes. Ao exame físico, o paciente apresenta-se inquieto, demonstrando sede, chorando sem lágrimas, com olhos fundos e pulsos rápidos. Nesse caso hipotético, de acordo com as diretrizes do Ministério da Saúde, há indicação de",
    "alternativas": [
      {
        "letter": "A",
        "text": "hidratação endovenosa com alíquotas de 20 mL/kg de SF 0,9% em 30 minutos até o reestabelecimento da hidratação, com reavaliações dos sinais clínicos após cada expansão.",
        "explanation": "Incorreta: A hidratação venosa (Plano C) é reservada para desidratação grave ou falha da via oral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "administração de antiemético seguida de solução de reidratação oral, que deve ser oferecida em um volume aproximado de 50 a 100 mL/kg em 4 a 6 horas.",
        "explanation": "Incorreta: O volume de 50-100 mL/kg em 4-6 horas está correto para o Plano B, mas o uso de antieméticos não é a primeira medida obrigatória.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "hidratação endovenosa e introdução de antibioticoterapia; se paciente evoluir com hidratação e melhora clínica, deve receber alta com terapia de reidratação e de antibiótico por via oral.",
        "explanation": "Incorreta: Não há indicação de antibióticos para diarreia aguda sem sangue (não inflamatória) e sem sinais de sepse.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "reidratação via oral, que deve ser oferecida em um volume aproximado de 50 a 100 mL/kg em 4 a 6 horas; se mantiver os mesmos sinais de desidratação na reavaliação, deve-se modificar a terapia de reidratação para via endovenosa.",
        "explanation": "Incorreta: Se o paciente mantiver sinais de desidratação após a primeira fase do Plano B, deve-se repetir o Plano B ou considerar sonda nasogástrica antes da via endovenosa.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "reidratação via oral, que deve ser oferecida em um volume aproximado de 50 a 100 mL/kg em 4 a 6 horas; se evoluir com desparecimento dos sinais de desidratação, deve- se dar alta com indicação de dieta habitual, solução de reidratação oral após evacuações e zinco por 10 a 14 dias.",
        "explanation": "Correta: O paciente tem sinais de desidratação moderada (inquieto, sede, olhos fundos - Plano B). A conduta é SRO 50-100 mL/kg em 4-6h na unidade de saúde. Após reidratar, alta com Plano A (zinco por 10-14 dias).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Plano B do Ministério da Saúde é indicado para crianças com sinais de desidratação (não grave). Consiste na oferta de SRO na unidade de saúde sob supervisão médica até que os sinais de desidratação desapareçam.",
    "perolaClinica": "Plano B: SRO 50-100 mL/kg em 4 a 6 horas na unidade de saúde.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Manejo da Criança com Diarreia Aguda"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1638
  },
  {
    "id": "q-sus-sp-2023-040",
    "code": "Q-SUSSP23-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura / Endocrinologia Pediátrica",
    "subtema": "Obesidade Infantil — Fatores de Risco e Prevenção",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Acerca da obesidade infantil, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A principal herança genética na determinação da obesidade é de natureza monogênica.",
        "explanation": "Incorreta: A obesidade é predominantemente poligênica, influenciada por múltiplos genes e fatores ambientais. Formas monogênicas são raras.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "As crianças de 0 a 5 anos de idade são consideradas obesas quando os valores de IMC estiverem acima de +2 escore Z.",
        "explanation": "Incorreta: Para crianças de 0 a 5 anos, Obesidade é definida como IMC > +3 escore Z. Entre +2 e +3 é considerado Sobrepeso.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A relação circunferência abdominal/estatura é considerada adequada se estiver menor ou igual a 0,5.",
        "explanation": "Correta: A relação circunferência abdominal/estatura é um marcador de gordura visceral; valores <= 0,5 são considerados adequados para crianças e adultos.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Menos de 10% das crianças e dos adolescentes obesos são hipertensos.",
        "explanation": "Incorreta: A prevalência de hipertensão em crianças obesas é significativamente maior que 10%.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O screening universal com exames laboratoriais não está indicado para crianças e para adolescentes com excesso de peso.",
        "explanation": "Incorreta: O screening laboratorial (perfil lipídico, glicemia, transaminases) é recomendado para crianças com obesidade ou sobrepeso com fatores de risco.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A obesidade infantil é um problema de saúde pública crescente. O diagnóstico utiliza curvas de IMC da OMS, e a avaliação de riscos metabólicos (como a relação cintura/estatura e exames laboratoriais) é fundamental no manejo.",
    "perolaClinica": "Relação cintura/estatura > 0,5 é um preditor simples de risco cardiovascular em pediatria.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "SBP — Manual de Orientação: Obesidade na Infância e Adolescência"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1639
  },
  {
    "id": "q-sus-sp-2023-041",
    "code": "Q-SUSSP23-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia",
    "subtema": "Massas Anexiais",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em relação a massas anexiais, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O exame pélvico bimanual ou a ultrassonografia transvaginal não têm acurácia significativa em mulheres assintomáticas para tumores anexiais benignos ou malignos, doença inflamatória pélvica ou câncer cervical, não sendo, portanto, recomendados como rotina para rastreamento.",
        "explanation": "Correta: De acordo com o USPSTF e o ACOG, o rastreamento de rotina para câncer de ovário ou massas anexiais em mulheres assintomáticas e de risco habitual não é recomendado, pois não reduz a mortalidade e apresenta alta taxa de resultados falso-positivos e cirurgias desnecessárias.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "O diagnóstico definitivo dos tumores de ovário é citopatológico.",
        "explanation": "Incorreta: O diagnóstico definitivo dos tumores de ovário é histopatológico (obtido por biópsia ou exérese da peça), e não citopatológico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Mulheres na menacme têm grande proporção de lesões malignas dos ovários em relação às lesões benignas.",
        "explanation": "Incorreta: Na menacme, a grande maioria das massas anexiais é benigna (cistos funcionais, endometriomas, teratomas). O risco de malignidade aumenta significativamente após a menopausa.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "São importantes fatores de risco para tumores epiteliais malignos dos ovários a menarca tardia e a menopausa precoce.",
        "explanation": "Incorreta: Menarca precoce e menopausa tardia (maior número de ciclos ovulatórios) são fatores de risco para tumores epiteliais de ovário.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Mutações dos genes BRCA1 e BRCA2 nada têm a ver com tumores ovarianos, relacionando-se apenas com tumores de mama.",
        "explanation": "Incorreta: Mutações nos genes BRCA1 e BRCA2 estão fortemente associadas ao aumento do risco de câncer de ovário, além do câncer de mama.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O rastreamento de massas anexiais em mulheres assintomáticas não é indicado por falta de evidência em redução de mortalidade e risco de iatrogenia. O diagnóstico padrão-ouro é histopatológico, e a maioria das lesões na menacme é benigna.",
    "perolaClinica": "Não se faz rastreamento de câncer de ovário com USG ou CA-125 em pacientes de risco habitual assintomáticas.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "ACOG Practice Bulletin No. 174: Evaluation and Management of Adnexal Masses",
      "USPSTF — Screening for Ovarian Cancer: Recommendation Statement"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1639
  },
  {
    "id": "q-sus-sp-2023-042",
    "code": "Q-SUSSP23-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia",
    "subtema": "Atendimento à Vítima de Violência Sexual",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 27 anos de idade comparece ao pronto-socorro de um hospital e refere ao médico ter sido vitima de violência sexual há cinquenta horas. Durante anamnese cuidadosa, a paciente refere que já sofreu abuso pela mesma pessoa diversas vezes, mas que esta foi a primeira vez em que teve coragem de buscar ajuda. A paciente refere fazer uso regular de contraceptivo hormonal oral e que, em todos os episódios de abuso, houve uso de preservativo do início ao fim do ato. O abusador é conhecido da vítima e pertence à sua família. Nessa situação hipotética, o médico",
    "alternativas": [
      {
        "letter": "A",
        "text": "não deve notificar o caso, pois, apesar de se tratar de ato de notificação compulsória, o médico deve respeitar o sigilo médico.",
        "explanation": "Incorreta: A violência sexual é um agravo de notificação compulsória imediata (em até 24 horas para autoridades sanitárias). O sigilo deve ser mantido, mas a notificação é obrigatória.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "deverá prescrever contracepção de emergência, pois a paciente ainda se encontra na janela de oportunidade, ou seja, menos de 72 horas do contato sexual.",
        "explanation": "Incorreta: A paciente já faz uso regular de contraceptivo hormonal oral e relatou uso de preservativo, o que torna a contracepção de emergência desnecessária neste contexto específico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "deverá aplicar imunoglobulina humana anti-hepatite B, que pode ser aplicada até 14 dias após a violência.",
        "explanation": "Incorreta: A imunoglobulina para Hepatite B deve ser administrada idealmente nas primeiras 24 horas, podendo ser feita até 14 dias apenas em casos específicos de exposição sexual se o agressor for sabidamente HBsAg positivo e a vítima não vacinada.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "não deverá fazer profilaxia para HIV, pois, além de se tratar de um caso de abuso crônico, a vítima relata uso de preservativo durante todo o ato, em todos os episódios de abuso.",
        "explanation": "Correta: Segundo o Protocolo do Ministério da Saúde, a profilaxia para HIV (PEP) não é indicada se houve uso correto e consistente de preservativo ou se a exposição é crônica com parceiro conhecido sem novos fatores de risco, embora cada caso deva ser individualizado.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "deverá fazer profilaxia para HIV, pois tal conduta é necessária em todos os casos de abuso.",
        "explanation": "Incorreta: A profilaxia não é automática; ela depende da avaliação de risco (tempo decorrido, tipo de ato, uso de barreira e status do agressor).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O atendimento à vítima de violência sexual exige avaliação de risco para ISTs e gravidez. Neste caso, o uso de preservativo e de anticoncepcional oral, somado à cronicidade do abuso, afasta a necessidade de profilaxias de emergência.",
    "perolaClinica": "A PEP para HIV deve ser iniciada em até 72 horas, mas pode ser dispensada se houve uso íntegro de preservativo.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo Clínico e Diretrizes Terapêuticas para Profilaxia Pós-Exposição (PEP) de Risco à Infecção pelo HIV, IST e Hepatites Virais — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1639
  },
  {
    "id": "q-sus-sp-2023-043",
    "code": "Q-SUSSP23-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Sangramento Uterino Anormal",
    "subtema": "Adenomiose",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 42 anos de idade comparece a uma consulta ambulatorial queixando-se de sangramento aumentado. Seu ciclo é de trinta dias, com duração que aumentou de três para cinco dias. Afirma que, antes, o fluxo era leve, mas hoje é moderado. Há aproximadamente dois anos, iniciou quadro de dismenorreia, que tem sido progressivo, mas ainda controlável com antiespasmódicos. Ao exame, o colo revela- se móvel e indolor; o médico não palpa anexos e o fundo uterino está próximo da sínfise pública, ainda intrapélvico. Especular sem alterações. O médico solicita uma ultrassonografia transvaginal, que evidencia espessamento miometrial assimétrico (com parede anterior maior que posterior), zona juncional irregular e pequenos cistos miometriais. Considerando esse caso clínico, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve-se tranquilizar a paciente, por se tratar de um quadro de dismenorreia primária, devendo a paciente apenas continuar com o uso de antiespasmódico.",
        "explanation": "Incorreta: A dismenorreia que se inicia tardiamente (aos 40 anos) e é progressiva sugere causa secundária, não primária.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Trata-se de climatério.",
        "explanation": "Incorreta: Embora a idade seja compatível com a transição menopausal, os achados de imagem e clínicos direcionam para uma patologia uterina estrutural.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Conforme avaliação para sangramento uterino anormal, com o exame de imagem, consegue-se estabelecer a hipótese diagnóstica de adenomiose, uma lesão benigna, devendo-se seguir com tratamento.",
        "explanation": "Correta: Os achados ultrassonográficos de espessamento miometrial assimétrico, zona juncional irregular e cistos miometriais são patognomônicos de adenomiose, que causa sangramento aumentado e dismenorreia secundária.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Conforme avaliação para sangramento uterino anormal, o exame de imagem com paredes uterinas assimétricas sugere mioma.",
        "explanation": "Incorreta: Miomas costumam se apresentar como nódulos hipoecoicos bem delimitados com fluxo periférico ao Doppler, diferentemente do padrão difuso/assimétrico da adenomiose.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Conforme exame de imagem, não há causa estrutural.",
        "explanation": "Incorreta: A adenomiose é uma causa estrutural de sangramento (letra 'A' do sistema PALM-COEIN).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A adenomiose é caracterizada pela presença de tecido endometrial no miométrio. Clinicamente manifesta-se por útero globoso, dismenorreia secundária e sangramento uterino anormal, com sinais típicos na ultrassonografia.",
    "perolaClinica": "Zona juncional mioendometrial > 12mm ou cistos miometriais na USG sugerem fortemente adenomiose.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Federação Brasileira das Associações de Ginecologia e Obstetrícia (FEBRASGO) — Tratado de Ginecologia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1640
  },
  {
    "id": "q-sus-sp-2023-044",
    "code": "Q-SUSSP23-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Sangramento Uterino Anormal",
    "subtema": "Pólipo Endometrial",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 45 anos de idade comparece a uma consulta ambulatorial por metrorragia, com ultrassonografia transvaginal solicitada por outro médico, cujo laudo revela o seguinte: projeção digitiforme da camada endometrial com pequeno pedículo vascular, sem fluxo aumentado ao Doppler, com 3,5 cm. Com base nesse caso clínico, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve-se tranquilizar a paciente, por se tratar de uma lesão provavelmente benigna que não necessita de tratamento.",
        "explanation": "Incorreta: Pólipos sintomáticos (causando metrorragia) ou maiores que 1,5 cm devem ser tratados cirurgicamente devido ao risco de malignização e para controle dos sintomas.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Deve-se informar que, devido à idade da paciente, trata-se provavelmente de um câncer de endométrio.",
        "explanation": "Incorreta: A maioria dos pólipos é benigna, embora o risco de malignidade aumente com a idade e na pós-menopausa.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Apesar de se tratar de lesão provavelmente benigna, será necessário realizar histeroscopia para diagnóstico e tratamento.",
        "explanation": "Correta: A histeroscopia cirúrgica é o padrão-ouro para o diagnóstico e tratamento (polipectomia) de lesões intracavitárias como os pólipos endometriais.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Nesse caso, deve-se sugerir tratamento clínico sem mais investigações.",
        "explanation": "Incorreta: O tratamento de pólipos é cirúrgico; o tratamento clínico não resolve a lesão estrutural.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Deve-se indicar tratamento cirúrgico com laparoscopia para exérese da lesão.",
        "explanation": "Incorreta: A laparoscopia visualiza a cavidade peritoneal; para lesões dentro da cavidade uterina, o acesso deve ser por histeroscopia.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Pólipos endometriais são projeções sésseis ou pediculadas da mucosa endometrial. Quando sintomáticos ou volumosos, a conduta indicada é a polipectomia via histeroscopia para avaliação histopatológica.",
    "perolaClinica": "Pólipo endometrial sintomático ou > 1,5 cm = Polipectomia por Histeroscopia.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Ginecologia Endócrina"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1640
  },
  {
    "id": "q-sus-sp-2023-045",
    "code": "Q-SUSSP23-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica",
    "subtema": "Sangramento Pós-Menopausa e Câncer de Endométrio",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 64 anos de idade compareceu ao consultório ginecológico por apresentar mioma, referindo ao médico que não aguentava mais sangrar. Intrigado pela presença do sangramento nessa idade, o médico questionou a paciente a respeito do sangramento menstrual, e ela referiu que havia entrado na menopausa aos 55 anos de idade, mas que, aos 63 anos de idade, tinha voltado a sangrar, sempre em pequena quantidade, alguns dias do mês, o que, na ocasião, a paciente achou normal, porque sempre teve mioma. Após solicitar uma ultrassonografia transvaginal, o médico observou que, além de dois miomas intramurais de aproximadamente 1,5 cm cada - que não sofreram alteração em relação aos exames anteriores -, o endométrio era espessado e heterogêneo, com algumas regiões da zona juncional mal delimitadas. A paciente tem IMC de 33,5, é hipertensa e diabética, e ambas as comorbidades estão controladas com medicações. Ao exame ginecológico, o médico não conseguiu boa palpação dos órgãos, devido ao panículo adiposo. Não havia cânula para biópsia endometrial no consultório. Com base nesse caso clínico, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O médico deve tranquilizar a paciente, pois seus miomas não se tornarão câncer, e orientar que o sangramento provavelmente cessará espontaneamente.",
        "explanation": "Incorreta: Sangramento na pós-menopausa é câncer de endométrio até que se prove o contrário, especialmente com endométrio espessado e heterogêneo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O médico deve encaminhar a paciente para o centro de oncologia, por se tratar, certamente, de diagnóstico de câncer de endométrio, pois a paciente apresenta obesidade como fator de risco importante para neoplasia do endométrio.",
        "explanation": "Incorreta: O encaminhamento para oncologia exige diagnóstico histológico prévio; a conduta imediata é a investigação diagnóstica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A paciente deve ser encaminhada para quimioterapia.",
        "explanation": "Incorreta: A quimioterapia não é a conduta inicial; o tratamento primário do câncer de endométrio é cirúrgico após o diagnóstico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Deve-se solicitar histeroscopia com biópsia para esclarecimento das lesões miometriais, pois, apesar de os miomas serem pequenos, não deveriam estar presentes após a menopausa.",
        "explanation": "Incorreta: O foco da investigação deve ser o endométrio espessado, que justifica o sangramento, e não os miomas intramurais estáveis.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Deve-se solicitar histeroscopia com biópsia para diagnóstico histológico da lesão endometrial visualizada no exame de imagem.",
        "explanation": "Correta: Diante de sangramento pós-menopausa e endométrio espessado/heterogêneo em paciente com fatores de risco (obesidade, DM, HAS), a histeroscopia com biópsia é mandatória para diagnóstico histopatológico.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O sangramento uterino na pós-menopausa deve sempre ser investigado. A ultrassonografia com endométrio > 4-5 mm em pacientes sem TH indica a necessidade de biópsia endometrial, preferencialmente por histeroscopia.",
    "perolaClinica": "Sangramento pós-menopausa + Endométrio > 4-5 mm = Investigação histopatológica obrigatória.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras para o Diagnóstico e Tratamento do Câncer de Endométrio"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1641
  },
  {
    "id": "q-sus-sp-2023-046",
    "code": "Q-SUSSP23-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina / Climatério",
    "subtema": "Osteoporose",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "A osteoporose é uma doença esquelética sistêmica e silenciosa. É considerada uma doença osteometabólica caracterizada por resistência óssea comprometida, predispondo a um risco aumentado de fratura. A resistência óssea é uma função tanto de quantidade óssea, estimada pela medição da densidade mineral óssea, quanto de qualidade óssea, conjunto de propriedades que inclui microarquitetura óssea, taxa de remodelação, grau de mineralização e normalidade da matriz osteoide. Em relação à osteoporose na menopausa, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "São recomendações não farmacológicas para tratamento de osteoporose: praticar exercícios físicos; dieta rica em cálcio; cessar tabagismo; e ingesta de bebidas alcoólicas.",
        "explanation": "Incorreta: A ingestão de bebidas alcoólicas é um fator de risco para osteoporose e deve ser evitada, não recomendada como tratamento.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "O tabagismo é um fator de risco pouco importante para osteoporose.",
        "explanation": "Incorreta: O tabagismo é um fator de risco maior e muito importante para a perda de massa óssea.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "Mulheres na pós-menopausa com menos de 65 anos de idade não devem realizar densitometria óssea, mesmo na vigência de fatores de risco para osteoporose.",
        "explanation": "Incorreta: Mulheres na pós-menopausa com menos de 65 anos devem realizar densitometria se apresentarem fatores de risco (ex: baixo peso, fratura prévia, uso de corticoide).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "A osteoporose não é a principal causa de fraturas na população acima de 50 anos de idade.",
        "explanation": "Incorreta: A osteoporose é, de fato, a principal causa de fraturas por fragilidade na população idosa.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Os agentes anticatabólicos estimulam a atividade osteoclástica e aumentam a remodelação óssea.",
        "explanation": "Incorreta: Agentes anticatabólicos (como bisfosfonatos) inibem a atividade osteoclástica, reduzindo a reabsorção óssea.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca. A osteoporose é uma doença caracterizada pela redução da densidade mineral óssea e deterioração da microarquitetura. O tratamento envolve medidas não farmacológicas (cálcio, vitamina D, exercícios) e farmacológicas (anticatabólicos ou anabólicos).",
    "perolaClinica": "Questão anulada. Lembre-se: Bisfosfonatos são anticatabólicos que inibem os osteoclastos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo Clínico e Diretrizes Terapêuticas da Osteoporose — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1641
  },
  {
    "id": "q-sus-sp-2023-047",
    "code": "Q-SUSSP23-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina",
    "subtema": "Amenorreia Primária — Síndrome de Mayer-Rokitansky-Küster-Hauser",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 16 anos de idade comparece sozinha ao consultório referindo tentativas de relação sexual sem sucesso. A paciente também relata que é a única aluna do seu colégio que ainda não menstruou. Ao exame, apresenta pilificação escassa e mamas pouco desenvolvidas. Vulva sem alteração. Ao se inserir o espéculo, nota-se vagina em fundo cego. Ultrassom pélvico não evidencia genitália interna (não há útero, tubas e colo uterino), e o FSH da paciente é normal. Nesse caso, o médico deve",
    "alternativas": [
      {
        "letter": "A",
        "text": "fechar o diagnóstico de síndrome de Rokitansky.",
        "explanation": "Incorreta: Embora Rokitansky seja uma hipótese, a ausência de caracteres sexuais secundários bem desenvolvidos e a necessidade de diferenciar de Morris exigem o cariótipo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "solicitar o cariótipo para diferenciar entre síndrome de Morris e Rokitansky.",
        "explanation": "Correta: A paciente apresenta amenorreia primária com vagina em fundo cego e ausência de útero. As principais hipóteses são Síndrome de Rokitansky (46,XX) e Síndrome de Morris (46,XY). O cariótipo é o exame definitivo para diferenciá-las.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "fechar o diagnóstico de síndrome de Morris.",
        "explanation": "Incorreta: Não se pode fechar o diagnóstico de Morris apenas com o exame físico e USG.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar o cariótipo para diferenciar entre síndrome de Morris e síndrome da feminização testicular ou insensibilidade completa aos androgênios.",
        "explanation": "Incorreta: Síndrome de Morris e Síndrome da Insensibilidade Completa aos Androgênios são sinônimos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "fechar o diagnóstico de insensibilidade completa aos androgênios.",
        "explanation": "Incorreta: O diagnóstico requer a confirmação do cariótipo 46,XY e níveis elevados de testosterona.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Diante de amenorreia primária com caracteres sexuais presentes (ou parcialmente presentes) e ausência de útero/vagina curta, deve-se diferenciar Rokitansky (disgenesia mulleriana) de Morris (insensibilidade androgênica). O cariótipo define a conduta.",
    "perolaClinica": "Ausência de útero + Vagina curta: Rokitansky é 46,XX; Morris é 46,XY.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Ginecologia Endócrina"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1641
  },
  {
    "id": "q-sus-sp-2023-048",
    "code": "Q-SUSSP23-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina",
    "subtema": "Síndrome dos Ovários Policísticos (SOP) e Hirsutismo",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 22 anos de idade, cuja menarca foi aos 14 anos de idade, comparece ao consultório alegando não aguentar mais sangramentos volumosos, que aparecem de surpresa: ás vezes menstrua a cada 35 dias, às vezes chega a ficar 90 dias sem sangramento. Segundo a paciente, quanto mais longo o intervalo entre os sangramentos, mais intenso o fluxo. A paciente também relata ter ganhado peso nos últimos anos e não conseguir controle adequado. Além disso, a paciente busca método contraceptivo, por ter medo de usar apenas preservativo nas relações sexuais. A escala de Ferriman-Gallwey soma 8 pontos, mas a paciente não apresenta aumento de pelos como queixa, apesar de relatar aumento de espinhas e já ter consulta agendada com a dermatologista. A paciente apresenta os seguintes exames laboratoriais: prolactina, 17- alfa-hidroxiprogesterona, TSH/T4 livre, SDHEA, cortisol e testosterona total e livre ainda dentro do normal; a relação LH/FSH é de 3,5. A paciente não apresenta micropolicistos pelo exame de ultrassom transvaginal. Com base nesse caso clínico, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Não se trata de síndrome dos ovários policísticos, pois não há cistos na periferia dos ovários no exame de imagem; pode-se entrar com contracepção oral.",
        "explanation": "Incorreta: O diagnóstico de SOP não exige a presença de cistos na ultrassonografia se os outros dois critérios de Rotterdam estiverem presentes.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Não se trata de síndrome dos ovários policísticos, pois não há hiperandrogenismo laboratorial; a contracepção está contraindicada enquanto não há diagnóstico fechado.",
        "explanation": "Incorreta: O hiperandrogenismo pode ser clínico (acne, hirsutismo) ou laboratorial. A paciente tem acne e Ferriman-Gallwey de 8 (limite para hirsutismo).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A resistência insulínica é comum dentro das disfunções metabólicas na síndrome dos ovários policísticos; a contracepção oral está contraindicada, devido ao risco aumentado de eventos trombóticos.",
        "explanation": "Incorreta: O uso de anticoncepcionais orais combinados é a primeira linha de tratamento para SOP, a menos que haja contraindicação absoluta (como risco trombótico elevado específico).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Trata-se de síndrome dos ovários policísticos com fenótipo B; o tratamento inicial inclui atividade física e dieta adequada, além de contracepção oral combinada, que deve atenuar o hirsutismo clínico.",
        "explanation": "Correta: A paciente preenche critérios de Rotterdam: disfunção ovulatória (oligomenorreia) e hiperandrogenismo clínico (acne e Ferriman-Gallwey = 8). O fenótipo B (hiperandrogenismo + disfunção ovulatória) não requer alteração na USG. O tratamento envolve mudança de estilo de vida e ACO.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Trata-se de síndrome dos ovários policísticos com fenótipo D, e o tratamento inicial é contracepção hormonal oral.",
        "explanation": "Incorreta: O fenótipo D da SOP é caracterizado por disfunção ovulatória e morfologia policística na USG, sem hiperandrogenismo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A SOP é diagnosticada pelos critérios de Rotterdam (2 de 3): oligo/anovulação, hiperandrogenismo (clínico ou laboratorial) e morfologia policística à USG. O tratamento foca em sintomas e prevenção metabólica.",
    "perolaClinica": "SOP Fenótipo B: Hiperandrogenismo + Disfunção Ovulatória (USG normal).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Protocolo de Síndrome dos Ovários Policísticos"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1642
  },
  {
    "id": "q-sus-sp-2023-049",
    "code": "Q-SUSSP23-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Uroginecologia",
    "subtema": "Prolapso de Órgãos Pélvicos — Classificação POP-Q (ICS)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 77 anos de idade, cadeirante, foi levada ao consultório pela filha, que relata internação recente da mãe com quadro de \"bexigoma\". Durante a internação, a mãe precisou fazer diálise, mas conseguiu recuperar a função renal. Antes da alta, foi inserido, na vagina da paciente, um aparelho cujo nome a filha desconhece, mas que, segundo seu relato, parece com um anel grosso e tem diâmetro de, aproximadamente, 7 cm. A filha relata que a mãe expulsou o aparelho pela vagina em uma das trocas de fralda e que, nesse momento, surgiu uma \"bola rosa\", exteriorizando-se pela vagina. A filha levou o aparelho na consulta e o médico conclui que se tratava de um pessário em forma de donut, do maior tamanho disponível no mercado. Ao exame, o médico observou um prolapso genital com a seguinte quantificação (POP-Q). (Aa)+3 | (Ba) +5 | (C) +6; (HG) 6 | (CP) 1 | (CVT) 10; (Ap) +3 | (Bp) +3 | (D) +5; Considerando-se que a paciente é hipertensa e diabética, estando ambas as comorbidades controladas no momento, e que ela não tem relação sexual há mais de 15 anos, nem pretende ter novas relações, é correto afirmar que, nesse caso, a melhor conduta é",
    "alternativas": [
      {
        "letter": "A",
        "text": "indicar histerectomia vaginal com culdoplastia de McCall.",
        "explanation": "Incorreta: A cirurgia reconstrutiva é mais invasiva e tem maior risco de recidiva em pacientes com tecidos muito atrofiados e comorbidades.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "indicar histerectomia vaginal, colpoplastia anterior e posterior.",
        "explanation": "Incorreta: Semelhante à alternativa A, é um procedimento mais longo e complexo para uma paciente de alto risco cirúrgico.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "manter tentativa de pessário.",
        "explanation": "Incorreta: O relato indica falha do pessário (expulsão do maior tamanho disponível).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "encaminhar paciente para fisioterapia pélvica.",
        "explanation": "Incorreta: A fisioterapia não reverte prolapsos avançados (estádio IV), servindo apenas como adjuvante ou para casos leves.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "indicar colpocleise.",
        "explanation": "Correta: A colpocleise (cirurgia de Le Fort) é o tratamento obliterativo indicado para pacientes idosas, com comorbidades, sem desejo de coito futuro e com prolapso grave, apresentando alta taxa de sucesso e baixa morbidade.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O prolapso genital estádio IV (POP-Q com Ba +5 e C +6) em paciente idosa e sem atividade sexual é idealmente tratado com colpocleise, uma técnica obliterativa rápida e eficaz.",
    "perolaClinica": "Prolapso grave + Idosa + Sem atividade sexual + Risco cirúrgico = Colpocleise.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Uroginecologia e Cirurgia Vaginal"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1642
  },
  {
    "id": "q-sus-sp-2023-050",
    "code": "Q-SUSSP23-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Mastologia",
    "subtema": "Câncer de Mama — Rastreamento",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O câncer de mama é o mais incidente em mulheres no mundo. Quanto ao rastreamento do câncer de mama nas mulheres com risco habitual para a enfermidade, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Indica-se ultrassonografia dos 20 anos aos 40 anos de idade e mamografia a partir dos 40 anos de idade.",
        "explanation": "Incorreta: A ultrassonografia não é método de rastreamento isolado. A mamografia inicia-se aos 40 anos (SBM/Febrasgo) ou 50 anos (Ministério da Saúde).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A alta densidade mamária pode diminuir a sensibilidade da mamografia; nesses casos, indica-se ultrassonografia complementar à mamografia.",
        "explanation": "Correta: Mamas densas reduzem a sensibilidade da mamografia (mascaramento de lesões). Nesses casos, a ultrassonografia é um excelente método complementar para aumentar a detecção.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "O autoexame das mamas é efetivo para detecção precoce de lesões palpáveis, com redução de mortalidade.",
        "explanation": "Incorreta: O autoexame não reduz a mortalidade e não substitui o rastreamento mamográfico; recomenda-se o 'breast awareness'.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A ressonância nuclear magnética é superior à mamografia convencional ou digital para o rastreio do câncer de mama.",
        "explanation": "Incorreta: A ressonância é superior em sensibilidade, mas não é o método de escolha para rastreio na população de risco habitual devido ao custo e falso-positivos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A mamografia é dispensável e pode ser substituída pela ultrassonografia no rastreio do câncer de mama.",
        "explanation": "Incorreta: A ultrassonografia não substitui a mamografia, pois não detecta microcalcificações suspeitas com a mesma eficácia.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A mamografia é o único exame que comprovadamente reduz a mortalidade por câncer de mama. Em mamas densas, a ultrassonografia deve ser utilizada de forma complementar para melhorar a acurácia diagnóstica.",
    "perolaClinica": "Mamas densas na mamografia? Complemente sempre com ultrassonografia.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil — INCA/MS",
      "Posicionamento SBM/FEBRASGO/CBR sobre Rastreamento"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1643
  },
  {
    "id": "q-sus-sp-2023-051",
    "code": "Q-SUSSP23-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Classificação de Robson",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma gestante de 18 anos de idade, com antecedentes de G2 P0 A1, idade gestacional de 37 semanas e 1 dia, gestação gemelar dicoriônica e diamniótica, deu entrada no pronto atendimento obstétrico com quadro de amniorrexe prematura. Foi realizada ultrassonografia, que mostrou primeiro feto transverso e segundo feto pélvico. Considerando-se esse caso hipotético, é correto afirmar que, de acordo com a Classificação de Robson, trata-se de um caso classificado como Robson",
    "alternativas": [
      {
        "letter": "A",
        "text": "6.",
        "explanation": "Incorreta: Robson 6 refere-se a todas as nulíparas com feto único em apresentação pélvica.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "7.",
        "explanation": "Incorreta: Robson 7 refere-se a todas as multíparas com feto único em apresentação pélvica (incluindo cicatriz uterina).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "8.",
        "explanation": "Correta: O grupo 8 da Classificação de Robson engloba todas as mulheres com gestações múltiplas (gemelares ou mais), independentemente da paridade ou via de parto anterior.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "9.",
        "explanation": "Incorreta: Robson 9 refere-se a todas as mulheres com feto único em situação transversa ou oblíqua.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "10.",
        "explanation": "Incorreta: Robson 10 refere-se a todas as mulheres com feto único, cefálico, com menos de 37 semanas (parto pré-termo).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Classificação de Robson é uma ferramenta da OMS para monitorar e comparar taxas de cesariana. O grupo 8 é específico para gestações múltiplas, facilitando a análise epidemiológica desses casos.",
    "perolaClinica": "Robson Grupo 8 = Gestações Múltiplas (sempre!).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "WHO — Robson Classification: Implementation Manual"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1643
  },
  {
    "id": "q-sus-sp-2023-052",
    "code": "Q-SUSSP23-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto",
    "subtema": "Índice de Bishop",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante com idade gestacional de 39 semanas e 4 dias internou-se para a indução do trabalho de parto. Foi avaliada na admissão, e o exame de toque vaginal apresentava colo impérvio, longo (aproximadamente 3 cm), apresentação em plano 0 de De Lee, consistência intermediária e posição intermediária do colo. Nesse caso clínico, o Índice de Bishop é de",
    "alternativas": [
      {
        "letter": "A",
        "text": "2.",
        "explanation": "Incorreta: Valor abaixo do calculado.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "3.",
        "explanation": "Incorreta: Valor abaixo do calculado.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "4.",
        "explanation": "Correta: Cálculo do Índice de Bishop: Dilatação impérvia (0); Apagamento/Comprimento 3cm (0); Plano de De Lee 0 (2); Consistência intermediária (1); Posição intermediária (1). Total = 4.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "5.",
        "explanation": "Incorreta: Valor acima do calculado.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "6.",
        "explanation": "Incorreta: Valor acima do calculado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Índice de Bishop avalia a favorabilidade do colo uterino para indução. Um índice ≤ 6 sugere colo desfavorável, indicando a necessidade de preparo cervical (ex: misoprostol ou método de Krause).",
    "perolaClinica": "Bishop < 6 = Colo desfavorável. Bishop > 8 = Sucesso de indução provável.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Indução do Parto"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1643
  },
  {
    "id": "q-sus-sp-2023-053",
    "code": "Q-SUSSP23-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "subtema": "Procedimentos Invasivos",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A respeito dos procedimentos invasivos realizados em medicina fetal, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A amniocentese pode ser realizada a partir da 12ª semana de gestação.",
        "explanation": "Incorreta: A amniocentese é realizada idealmente após a 15ª-16ª semana. Antes da 14ª semana, há maior risco de perda fetal e pé torto congênito.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Após procedimentos invasivos, é necessário realizar profilaxia anti-D nas gestantes RH negativo.",
        "explanation": "Correta: Qualquer procedimento invasivo em gestante Rh negativo não sensibilizada exige a administração de imunoglobulina anti-D para prevenir a isoimunização por hemorragia fetomaterna.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A cordocentese tem taxa de perda fetal de 0,3% a 0,5%.",
        "explanation": "Incorreta: A cordocentese é o procedimento de maior risco, com taxa de perda fetal em torno de 1% a 2%.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A amniocentese transplacentária aumenta a taxa de perda fetal.",
        "explanation": "Incorreta: A via transplacentária deve ser evitada se possível, mas não é contraindicação absoluta nem o principal fator isolado de perda.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A biópsia de vilo corial tem baixa taxa de perda gestacional (0,2%), contudo a taxa de moisacismo é de 10%.",
        "explanation": "Incorreta: A biópsia de vilo corial tem taxa de perda de 0,5-1% e mosaicismo placentário em cerca de 1-2% dos casos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Procedimentos invasivos em medicina fetal (amniocentese, biópsia de vilo corial, cordocentese) carregam riscos de perda gestacional e exigem profilaxia com imunoglobulina anti-D em pacientes Rh negativo não sensibilizadas.",
    "perolaClinica": "Gestante Rh negativo + Procedimento invasivo = Imunoglobulina Anti-D.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Medicina Fetal"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1643
  },
  {
    "id": "q-sus-sp-2023-054",
    "code": "Q-SUSSP23-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto",
    "subtema": "Partograma e Distócias",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primípara a termo, com gestação de risco habitual, foi admitida no centro de parto normal com 5 cm de dilatação, 4 contrações de 50º em 10 minutos, bolsa íntegra, apresentação cefálica fletida, em OEA em plano -1 de De Lee. Feto com boa vitalidade e BCF de 144 bpm. Uma hora após a admissão, apresentava-se com toque vaginal sem modificações comparado ao momento da admissão; feto com boa vitalidade. Assinale a alternativa que apresenta a conduta correta nesse caso clínico.",
    "alternativas": [
      {
        "letter": "A",
        "text": "suspender dieta, devido ao risco de distocia funcional e eventual necessidade de cesariana",
        "explanation": "Incorreta: A dieta leve deve ser mantida em gestantes de risco habitual durante o trabalho de parto.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar amniotomia e instalação de soro com ocitocina, para acelerar a dilatação que, no partograma, aproxima-se da linha de alerta",
        "explanation": "Incorreta: A intervenção precoce (amniotomia/ocitocina) em apenas 1 hora de observação na fase ativa sem sinais de sofrimento fetal não é recomendada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "manter ausculta fetal intermitente a cada 30 minutos e sugerir à parturiente caminhada e posições verticalizadas",
        "explanation": "Correta: A paciente está na fase ativa (5 cm). Uma hora sem progressão não define distocia. A conduta humanizada preconiza liberdade de movimento e métodos não farmacológicos antes de intervenções.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "instalar soro com ocitocina e reavaliar em 1 hora; se não houver progressão da dilatação, indicar cesariana por distocia funcional",
        "explanation": "Incorreta: A indicação de cesariana por distocia funcional exige critérios mais rigorosos de tempo e dinâmica uterina inadequada.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "manter ausculta fetal intermitente a cada 1 hora e realizar amniotomia para evitar que a dilatação alcance a linha de ação no partograma",
        "explanation": "Incorreta: A ausculta fetal no primeiro estágio deve ser a cada 15-30 minutos, e a amniotomia não deve ser feita rotineiramente apenas para 'evitar' a linha de ação.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O manejo do trabalho de parto de baixo risco deve ser o menos intervencionista possível. A ausência de progressão em apenas 1 hora na fase ativa, com vitalidade fetal preservada, não justifica intervenções imediatas.",
    "perolaClinica": "Fase ativa do parto: paciência e movimentação são as melhores condutas iniciais.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Nacional de Assistência ao Parto Normal — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1644
  },
  {
    "id": "q-sus-sp-2023-055",
    "code": "Q-SUSSP23-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto",
    "subtema": "Assistência ao Parto — Fórceps",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Com relação ao fórceps, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "É possível a aplicação de fórceps no caso de fetos em apresentação pélvica.",
        "explanation": "Correta: O fórceps de Piper é especificamente desenhado para a aplicação na cabeça derradeira em partos pélvicos, sendo uma manobra de auxílio importante.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "O Fórceps de Kielland tem curvatura pélvica acentuada.",
        "explanation": "Incorreta: O fórceps de Kielland caracteriza-se por ter uma curvatura pélvica mínima ou ausente, o que facilita as rotações.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O Fórceps de Simpson realiza rotações de 90º.",
        "explanation": "Incorreta: O fórceps de Simpson é indicado para tração em apresentações cefálicas fletidas, não sendo ideal para grandes rotações.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A variedade de posição OEA necessita de rotação de 90º em sentido horário.",
        "explanation": "Incorreta: OEA (Occipito-Esquerda-Anterior) necessita de uma rotação de apenas 45º para atingir a posição Occipito-Púbica (OP).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A variedade de posição ODT necessita de rotação de 90º em sentido anti-horário.",
        "explanation": "Incorreta: ODT (Occipito-Direita-Transversa) necessita de uma rotação de 90º, mas o sentido depende da técnica e da posição final desejada (geralmente anti-horário para OP).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O fórceps é um instrumento de tração e/ou rotação. O modelo de Piper é exclusivo para a cabeça derradeira no parto pélvico, enquanto o de Kielland é o preferido para rotações devido à sua curvatura pélvica reduzida.",
    "perolaClinica": "Fórceps de Piper = Cabeça derradeira no parto pélvico.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Assistência ao Parto"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1644
  },
  {
    "id": "q-sus-sp-2023-056",
    "code": "Q-SUSSP23-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia",
    "subtema": "Medicina Fetal - Teratoma Cervical",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Considerando a imagem acima, assinale a alternativa que apresenta uma alteração ultrassonográfica que pode se associar aos teratomas cervicais.",
    "alternativas": [
      {
        "letter": "A",
        "text": "É rara a associação com polidrâmnio.",
        "explanation": "Incorreta: A associação com polidrâmnio é comum devido à compressão esofágica pela massa cervical, impedindo a deglutição do líquido.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A placentomegalia não está presente.",
        "explanation": "Incorreta: Placentomegalia pode ocorrer em casos de hidropisia fetal associada a grandes tumores.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Há aumento de líquido na bexiga fetal.",
        "explanation": "Incorreta: Não há relação direta entre teratoma cervical e aumento de líquido na bexiga fetal.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Há redução ou ausência da bolha gástrica.",
        "explanation": "Correta: Grandes massas cervicais, como o teratoma, podem comprimir o esôfago fetal, impedindo a passagem de líquido amniótico para o estômago, resultando em bolha gástrica reduzida ou ausente.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "O líquido amniótico está reduzido.",
        "explanation": "Incorreta: O líquido amniótico costuma estar aumentado (polidrâmnio), não reduzido.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Teratomas cervicais são tumores raros que podem causar obstrução extrínseca do trato digestivo e respiratório superior do feto, levando a polidrâmnio e ausência de visualização da bolha gástrica.",
    "perolaClinica": "Massa cervical fetal + Polidrâmnio + Estômago vazio = Obstrução esofágica extrínseca.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Callen — Ultrassonografia em Ginecologia e Obstetrícia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1644,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/sus-sp-2023/q056.png",
      "modality": "Ultrassonografia",
      "caption": "Massa cervical fetal volumosa sugestiva de teratoma.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-sus-sp-2023-057",
    "code": "Q-SUSSP23-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Urgências",
    "subtema": "Pré-eclâmpsia",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A pré-eclâmpsia é uma grave doença multissistêmica caracterizada por hipertensão e proteinúria, ocorrendo, geralmente, na segunda metade da gestação. Acerca dessa entidade clínica, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A fim de reduzir a incidência de pré-eclâmpsia em gestantes de alto risco, uso de ácido acetilsalicílico deve ser iniciado entre 8 e 12 semanas de gestação.",
        "explanation": "Incorreta: O AAS deve ser iniciado idealmente entre 12 e 16 semanas, não devendo ultrapassar as 20 semanas para benefício máximo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A dieta pobre em sal é uma das formas de se evitar o surgimento da pré-eclâmpsia em gestantes de alto risco.",
        "explanation": "Incorreta: A restrição de sal não previne a pré-eclâmpsia, pois a fisiopatologia não é dependente de sobrecarga de sódio.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Em áreas de baixa ingesta de cálcio, indica-se suplementação com 1,5 g a 2 g de cálcio, a fim de reduzir a incidência de pré-eclâmpsia.",
        "explanation": "Correta: A suplementação de cálcio (1,5 a 2,0 g/dia) é recomendada pela OMS e FEBRASGO para gestantes com baixa ingestão dietética de cálcio para reduzir o risco de pré-eclâmpsia.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Gestantes com pré-eclâmpsia em uso de metildopa em dose mínima e níveis de pressão bem controlados podem aguardar o parto até 40 semanas.",
        "explanation": "Incorreta: A pré-eclâmpsia, mesmo controlada, indica interrupção da gestação com 37 semanas. Aguardar até 40 semanas aumenta riscos materno-fetais.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Os exames laboratoriais iniciais para critério de gravidade da pré-eclâmpsia incluem o coagulograma.",
        "explanation": "Incorreta: O coagulograma não é um exame de rotina inicial para todas as pré-eclâmpsias, sendo reservado para casos com plaquetopenia < 100.000 ou suspeita de descolamento de placenta.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A pré-eclâmpsia é prevenida em grupos de risco com AAS e cálcio (se baixa ingesta). O manejo envolve controle pressórico e vigilância de sinais de gravidade, com parto indicado a termo (37 semanas).",
    "perolaClinica": "Cálcio previne pré-eclâmpsia em populações com baixa ingestão desse mineral.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "FEBRASGO — Manual de Pré-Eclâmpsia",
      "WHO — Recommendations for Prevention and Treatment of Pre-eclampsia and Eclampsia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1645
  },
  {
    "id": "q-sus-sp-2023-058",
    "code": "Q-SUSSP23-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto",
    "subtema": "Assistência ao Parto — Período Expulsivo",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A respeito do período expulsivo do trabalho de parto, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O período expulsivo inicia-se quando a parturiente passa a apresentar puxos espontâneos e a apresentação fetal é visível no introito vaginal.",
        "explanation": "Incorreta: O período expulsivo inicia-se com a dilatação total do colo uterino (10 cm), independentemente da presença de puxos ou visibilidade da apresentação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "As posições verticalizadas apresentam vantagens, tais como: efeito da gravidade; menor compressão da aorta e cava; e maior eficiência da contratilidade uterina.",
        "explanation": "Correta: Posições verticalizadas (sentada, de cócoras, em pé) favorecem o trajeto fetal pela gravidade, melhoram a dinâmica uterina e evitam a compressão da veia cava inferior.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "É necessário uso de clorexidina, preparação com campos estéreis e luvas estéreis para assistência ao período expulsivo.",
        "explanation": "Incorreta: A assistência ao parto pode ser feita com técnica limpa; o uso excessivo de campos estéreis e clorexidina não é obrigatório em partos de baixo risco.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Não há evidências de que massagem perineal e compressas mornas reduzam a incidência de lacerações de 3° e 4° graus.",
        "explanation": "Incorreta: Massagem perineal e compressas mornas são evidências consolidadas para redução de lacerações graves.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A avaliação da frequência cardíaca fetal deve ser realizada a cada 10 minutos, e presença de desacelerações precoces (DIP I) é indicativa de sofrimento fetal.",
        "explanation": "Incorreta: No expulsivo, a FCF deve ser avaliada a cada 5 minutos. DIP I (desaceleração precoce) é fisiológica por compressão cefálica, não indicando sofrimento fetal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O período expulsivo deve ser conduzido de forma a respeitar a fisiologia e o desejo da mulher. Posições não supinas e proteção perineal ativa (compressas) são recomendadas.",
    "perolaClinica": "Período expulsivo: Posição verticalizada reduz o tempo de puxo e melhora a oxigenação fetal.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Nacional de Assistência ao Parto Normal — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1646
  },
  {
    "id": "q-sus-sp-2023-059",
    "code": "Q-SUSSP23-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Puericultura / Aleitamento Materno",
    "subtema": "Contraindicações e Intercorrências",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A respeito da amamentação, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "As mastites apresentam-se clinicamente com hiperemia, ingurgitamento e dor mamária, tendo como agente etiológico mais comum a Klebsiella sp.",
        "explanation": "Incorreta: O agente etiológico mais comum das mastites puerperais é o *Staphylococcus aureus*.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A exposição do recém-nascido a fármacos ingeridos pela lactante é cinco vezes maior do que na vida intrauterina, por via transplacentária.",
        "explanation": "Incorreta: A exposição via leite materno costuma ser muito menor do que a exposição transplacentária durante a gestação.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "As mastites são a principal causa de desmame precoce e ocorrem nos primeiros dias de aleitamento.",
        "explanation": "Incorreta: As fissuras mamilares são a causa mais comum de desmame precoce; a mastite é uma complicação infecciosa.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Medicamentos categoria D podem ser usados sem restrição durante a amamentação.",
        "explanation": "Incorreta: Medicamentos categoria D apresentam evidências de risco fetal e devem ser evitados ou usados com extrema cautela.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Em pacientes HIV positivo, é necessário inibir a lactação, e métodos mecânicos não são eficazes quando utilizados isoladamente, devendo ser associado método medicamentoso.",
        "explanation": "Correta: No Brasil, o HIV é contraindicação absoluta à amamentação. Deve-se inibir a lactação com cabergolina (medicamentoso) e enfaixamento das mamas (mecânico) para maior eficácia.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A amamentação é contraindicada em mães HIV positivo no Brasil. O manejo do puerpério nessas pacientes inclui a inibição da lactação imediata para evitar a transmissão vertical pós-natal.",
    "perolaClinica": "HIV na puérpera: Cabergolina 1mg (dose única) + Enfaixamento mamário.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo de Transmissão Vertical do HIV — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1646
  },
  {
    "id": "q-sus-sp-2023-060",
    "code": "Q-SUSSP23-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Puerpério",
    "subtema": "Fisiologia do Puerpério",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O puerpério é o período que sucede o parto e, do ponto de vista fisiológico, compreende os processos involutivos das modificações gravídicas locais e gerais ocorridas na gestação. Em relação a esse período, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A lochia alba aparece ao redor do 10.° dia de puerpério e contém significativa quantidade de leucócitos.",
        "explanation": "Correta: A loquiação evolui de rubra (sangue) para serosa (exsudato) e, por fim, alba (leucócitos e células epiteliais), que surge por volta do 10º dia.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "No primeiro dia pós-parto, ocorre a apojadura, que consiste na descida do leite.",
        "explanation": "Incorreta: A apojadura (descida do leite) ocorre geralmente entre o 2º e o 4º dia pós-parto.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "No 15.° dia pós-parto vaginal, o colo uterino permanece pérvio a um ou dois dedos.",
        "explanation": "Incorreta: O colo uterino fecha-se progressivamente, tornando-se impérvio ao dedo no final da primeira semana.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Deve ser postergada a contracepção com anticoncepcionais orais de progestógenos isolados nos primeiros 60 dias pós-parto.",
        "explanation": "Incorreta: Anticoncepcionais de progestógeno isolado (minipílula, implante, injeção trimestral) podem ser iniciados imediatamente após o parto, sem interferir na lactação.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A inserção de DIU de cobre imediatamente após a dequitação apresenta taxa de expulsão de 75% nos primeiros seis meses pós-parto.",
        "explanation": "Incorreta: A inserção de DIU pós-dequitação é segura e recomendada, com taxas de expulsão em torno de 10-15%, muito menores que 75%.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O puerpério envolve a involução dos órgãos genitais e a lactogênese. A loquiação é um marcador clínico dessa involução, mudando de cor e aspecto ao longo das semanas.",
    "perolaClinica": "Lochia alba: aspecto esbranquiçado/amarelado, rica em leucócitos, surge após o 10º dia.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rezende Obstetrícia Fundamental",
      "Manual de Planejamento Familiar — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1646
  },
  {
    "id": "q-sus-sp-2023-061",
    "code": "Q-SUSSP23-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Farmacologia Clínica / Cardiologia / Endocrinologia",
    "subtema": "Efeitos Adversos de Anti-hipertensivos e Metformina",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 58 anos de idade, obeso, hipertenso e diabético, em uso de atenolol 25 mg/dia, de hidroclorotiazida 25 mg/dia e de metformina 1.000 mg/dia, comparece a uma consulta de rotina trazendo exame de amostra isolada de urina com microalbuminúria e Holter 24 h com bradicardia sinusal, com frequência cardíaca mínima em vigília igual a 45 bpm, assintomático. No momento da consulta, sua frequência cardíaca é 50 bpm. O médico de família indica a troca do atenolol. Com base nesse caso hipotético, assinale a melhor opção de medicamento entre as alternativas apresentadas a seguir.",
    "alternativas": [
      {
        "letter": "A",
        "text": "anlodipino",
        "explanation": "Incorreta: O anlodipino é um bloqueador de canal de cálcio diidropiridínico que não oferece a mesma proteção renal (redução de albuminúria) que os iECAs ou BRAs em pacientes diabéticos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "espironolactona",
        "explanation": "Incorreta: A espironolactona é um antagonista da aldosterona usado em casos de hipertensão resistente ou insuficiência cardíaca, não sendo a primeira escolha para substituição isolada visando nefroproteção inicial.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "furosemida",
        "explanation": "Incorreta: A furosemida é um diurético de alça indicado para estados edematosos, não sendo a droga de escolha para o controle pressórico ambulatorial em paciente diabético com microalbuminúria.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "enalapril",
        "explanation": "Correta: O enalapril (iECA) é a melhor escolha, pois além de controlar a pressão arterial, possui efeito nefroprotetor comprovado em pacientes com diabetes e microalbuminúria, e não reduz a frequência cardíaca, sendo seguro na bradicardia sinusal assintomática.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "hidralazina",
        "explanation": "Incorreta: A hidralazina é um vasodilatador direto geralmente reservado para hipertensão de difícil controle ou em associação na insuficiência cardíaca, sem benefícios nefroprotetores específicos no diabetes.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Em pacientes diabéticos e hipertensos com evidência de lesão de órgão-alvo (microalbuminúria), os inibidores da enzima conversora de angiotensina (iECA) ou bloqueadores dos receptores de angiotensina (BRA) são as drogas de primeira escolha devido ao seu efeito nefroprotetor. O atenolol, um betabloqueador, deve ser trocado devido à bradicardia sinusal apresentada pelo paciente.",
    "perolaClinica": "Diabético com albuminúria? Pense sempre em iECA ou BRA para nefroproteção, independentemente do nível pressórico inicial.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Hipertensão Arterial – 2020",
      "KDIGO 2022 Clinical Practice Guideline for Diabetes Management in Chronic Kidney Disease"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1646
  },
  {
    "id": "q-sus-sp-2023-062",
    "code": "Q-SUSSP23-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Geriatria / Clínica Médica",
    "subtema": "Sarcopenia e Envelhecimento Muscular",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em relação à iatrogenia, assinale a alternativa incorreta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ciprofloxacino, assim como outras quinolonas, pode provocar agitação e confusão mental em pessoas idosas, sendo um possível causador de delirium.",
        "explanation": "Incorreta: Esta afirmação é verdadeira. Quinolonas podem causar efeitos no sistema nervoso central, incluindo delirium, especialmente em idosos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Inibidores de enzima conversora de angiotensina, como captopril e enalapril, podem originar tosse.",
        "explanation": "Incorreta: Esta afirmação é verdadeira. A tosse seca é um efeito colateral clássico dos iECAs devido ao acúmulo de bradicinina.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Antipsicóticos, como haloperidol e risperidona, podem ocasionar rigidez e acarretar parkinsonismo secundário.",
        "explanation": "Incorreta: Esta afirmação é verdadeira. Antipsicóticos bloqueiam receptores dopaminérgicos D2 na via nigroestriatal, podendo causar parkinsonismo secundário.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Benzodiazepínicos, como diazepam e clonazepam, aumentam o risco de levar pessoas idosas à queda.",
        "explanation": "Incorreta: Esta afirmação é verdadeira. Benzodiazepínicos causam sedação e relaxamento muscular, aumentando significativamente o risco de quedas e fraturas em idosos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O potencial iatrogênico com suplementação de vitamina D é nulo.",
        "explanation": "Correta: A afirmação é incorreta (o que a torna o gabarito). A vitamina D possui potencial iatrogênico se suplementada em excesso, podendo levar à hipercalcemia, hipercalciúria e nefrocalcinose.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A iatrogenia medicamentosa é um risco real em todas as faixas etárias, mas especialmente em idosos. A vitamina D, embora essencial, pode causar toxicidade grave se administrada em doses excessivas, resultando em quadros de hipercalcemia.",
    "perolaClinica": "Não existe suplemento inofensivo: o excesso de Vitamina D pode causar hipercalcemia grave e insuficiência renal.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition",
      "Tratado de Geriatria e Gerontologia (SBGG)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1647
  },
  {
    "id": "q-sus-sp-2023-063",
    "code": "Q-SUSSP23-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Demência por Corpos de Lewy",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 78 anos de idade, com antecedentes pessoais de hipertensão arterial sistêmica e de diabetes melito não insulino-dependente, comparece à consulta médica de rotina em unidade básica de saúde (UBS) acompanhada do filho. Ele refere que sua mãe faz uso correto dos medicamentos, já que ele mesmo os administra para ela há, aproximadamente, 1 ano, pois percebeu que a mãe estava se confundindo para tomá-los assim que houve uma alteração na prescrição. Ele se queixa de que sua mãe está apresentando déficit auditivo, de que está repetitiva e apática. A paciente, por sua vez, não apresenta queixas. Com relação a esse caso hipotético, assinale a alternativa, entre as apresentadas a seguir, que representa, respectivamente, o diagnóstico provável e a orientação adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "depressão; orientar o filho que é indicada psicoterapia para esse caso e que deve ser introduzido o clonazepam",
        "explanation": "Incorreta: O quadro clínico de déficit cognitivo progressivo e apatia sugere demência, não depressão isolada. O uso de clonazepam (benzodiazepínico) deve ser evitado em idosos com declínio cognitivo.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "delirium; orientar o filho a acompanhar a paciente ao pronto-socorro imediatamente",
        "explanation": "Incorreta: O delirium é um quadro agudo e flutuante, geralmente secundário a uma causa orgânica. A história de 1 ano de evolução sugere um processo crônico (demência).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "síndrome demencial; orientar o filho acerca da necessidade de supervisão constante",
        "explanation": "Correta: A perda de autonomia para medicações, apatia, repetição e falta de autocrítica (anosognosia) em uma paciente idosa configuram uma síndrome demencial, exigindo supervisão constante para segurança e adesão terapêutica.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "alterações inerentes ao envelhecimento fisiológico; informar o filho de que essa situação é normal na idade da mãe",
        "explanation": "Incorreta: Déficits cognitivos que interferem nas atividades de vida diária (como gerenciar medicamentos) nunca são considerados envelhecimento fisiológico (senescência).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "doença de Pick; orientar o filho que o quadro é reversível com o tratamento",
        "explanation": "Incorreta: A Doença de Pick (demência frontotemporal) é uma causa de demência, mas o quadro é neurodegenerativo e progressivo, não sendo reversível.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A síndrome demencial é caracterizada pelo declínio cognitivo em um ou mais domínios que interfere na independência do indivíduo. A anosognosia (falta de percepção da própria doença) é comum, e a supervisão por cuidadores torna-se essencial para a segurança do paciente.",
    "perolaClinica": "Perda de independência para atividades instrumentais da vida diária (como tomar remédios) em idosos é demência até que se prove o contrário.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "DSM-5 — Manual Diagnóstico e Estatístico de Transtornos Mentais",
      "Protocolo Clínico e Diretrizes Terapêuticas (PCDT) — Doença de Alzheimer"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1647
  },
  {
    "id": "q-sus-sp-2023-064",
    "code": "Q-SUSSP23-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Rastreamento e Interpretação de Exames na UBS",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Segundo o Caderno de Atenção Primária do Ministério da Saúde, existe boa evidência de que a dosagem dos lipídios séricos pode identificar homens e mulheres assintomáticos que são elegíveis para a terapia preventiva. Níveis altos de colesterol total (CT) e de lipoproteína de baixa densidade de colesterol (LDL-C), assim como baixos níveis de lipoproteína, são importantes fatores de risco para doença arterial coronariana (DAC). O risco de DAC é maior naqueles em que há combinação de fatores de riscos. O risco de doença arterial coronariana em 10 anos é menor em homens jovens e em mulheres que não tenham outros fatores de risco, mesmo na presença de anormalidade lipídicas. Considerando esse assunto, assinale a alternativa correta, a respeito da recomendação desse rastreamento, de acordo com a referida publicação.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Está recomendado fortemente o rastreamento das desordens lipídicas em homens com 35 anos de idade ou mais.",
        "explanation": "Correta: De acordo com o Caderno de Atenção Básica nº 22 do Ministério da Saúde (e recomendações da USPSTF), o rastreamento de dislipidemia é fortemente recomendado para homens a partir dos 35 anos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Não está recomendado o rastreamento das desordens lipídicas em homens com 20 a 35 anos de idade, quando se enquadrarem como um grupo de alto risco para doença coronariana.",
        "explanation": "Incorreta: O rastreamento é recomendado para homens entre 20 e 35 anos se houver outros fatores de risco cardiovascular (alto risco).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Não há recomendação contra ou a favor do rastreamento das desordens lipídicas em homens com 20 a 35 anos de idade.",
        "explanation": "Incorreta: Há recomendação a favor do rastreamento em homens de 20-35 anos se houver risco aumentado.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Não está recomendado o rastreamento das desordens lipídicas em mulheres com 20 a 45 anos de idade, quando se enquadrarem como um grupo de alto risco para doença coronariana.",
        "explanation": "Incorreta: O rastreamento é recomendado para mulheres a partir de 20 anos se houver alto risco cardiovascular.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Está recomendado o rastreamento das desordens lipídicas em mulheres com 45 anos de idade ou mais quando não se enquadrarem como grupo de alto risco para doença coronariana.",
        "explanation": "Incorreta: A recomendação forte para mulheres sem fatores de risco adicionais inicia-se aos 45 anos, mas a alternativa inverte a lógica de risco.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O rastreamento de dislipidemias visa a prevenção primária de eventos cardiovasculares. As diretrizes nacionais e internacionais (USPSTF) preconizam o início do rastreamento universal em homens aos 35 anos e mulheres aos 45 anos, ou mais cedo (20 anos) se houver fatores de risco.",
    "perolaClinica": "Rastreamento de dislipidemia: Homens >= 35 anos e Mulheres >= 45 anos (ou 20 anos se houver risco cardiovascular).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Caderno de Atenção Básica nº 22 — Ministério da Saúde",
      "USPSTF — Screening for Lipid Disorders in Adults"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1647
  },
  {
    "id": "q-sus-sp-2023-065",
    "code": "Q-SUSSP23-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "subtema": "Hipercalcemia da Malignidade",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente IVM, feminina, de 67 anos de idade, com diagnóstico prévio de osteoporose, compareceu a uma consulta médica com exame que evidenciava concentrações séricas de 25(OH)D abaixo de 20 ng/mL. A partir desse caso hipotético, assinale a alternativa correta, considerando as Diretrizes Brasileiras para o Diagnóstico e Tratamento da Osteoporose em Mulheres na Pós-Menopausa da Sociedade Brasileira de Reumatologia.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Em pacientes com osteoporose pós-menopausa, não se recomenda avaliar as concentrações plasmáticas da 25(OH)D antes de se iniciar o tratamento.",
        "explanation": "Incorreta: Recomenda-se a avaliação da 25(OH)D antes de iniciar o tratamento da osteoporose para garantir que a deficiência seja corrigida, otimizando a ação dos bisfosfonatos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Em pacientes deficientes de vitamina D, a reposição deve ser iniciada com 50.000 UI por semana durante oito semanas e, então, deve-se reavaliar. Como dose de manutenção, recomendam-se doses diárias de 1.000-2.000 UI e valores séricos acima de 30 ng/mL para a prevenção do hiperparatireoidismo secundário, melhoria da massa óssea e redução do risco de quedas. Tratamentos com altas doses de vitamina D não estão indicados.",
        "explanation": "Correta: Segundo a Sociedade Brasileira de Reumatologia, a dose de ataque para deficiência (< 20 ng/mL) é de 50.000 UI/semana por 8 semanas, seguida de manutenção para manter níveis > 30 ng/mL em pacientes de alto risco.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Em pacientes com osteoporose pós-menopausa, recomenda-se avaliar as concentrações plasmáticas da 25(OH)D antes de se iniciar o tratamento somente em populações de alto risco.",
        "explanation": "Incorreta: A avaliação é recomendada para todas as pacientes que iniciarão tratamento farmacológico para osteoporose.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Em pacientes deficientes de vitamina D, a reposição deve ser iniciada com 20.000 UI por semana durante três semanas e, então, deve-se reavaliar. Como dose de manutenção, recomendam-se doses diárias de 1.000-2.000 UI e valores séricos acima de 30 ng/mL para a prevenção do hiperparatireoidismo secundário, melhoria da massa óssea e redução do risco de quedas.",
        "explanation": "Incorreta: O esquema de 20.000 UI por 3 semanas é insuficiente para a correção da deficiência profunda de vitamina D.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Em pacientes com osteoporose, recomenda-se avaliar as concentrações plasmáticas da 25(OH)D antes de se iniciar o tratamento somente em meninas pré-púberes.",
        "explanation": "Incorreta: A recomendação foca em mulheres na pós-menopausa com osteoporose ou risco de fraturas, não em meninas pré-púberes.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A correção da deficiência de vitamina D é fundamental no manejo da osteoporose para prevenir o hiperparatireoidismo secundário e garantir a eficácia dos medicamentos antirreabsortivos. O alvo terapêutico em pacientes com osteoporose é manter a 25(OH)D acima de 30 ng/mL.",
    "perolaClinica": "Ataque de Vitamina D na deficiência: 50.000 UI/semana por 8 semanas. Manutenção: 1.000-2.000 UI/dia.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras para o Diagnóstico e Tratamento da Osteoporose em Mulheres na Pós-Menopausa (SBR)",
      "Posicionamento Oficial da SBEM/SBDP sobre Vitamina D"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1648
  },
  {
    "id": "q-sus-sp-2023-066",
    "code": "Q-SUSSP23-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Cessação do Tabagismo",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recomenda-se que, pelo risco que oferece à saúde do indivíduo, o tabagismo passivo seja frequentemente indagado aos usuários dos serviços de saúde (tanto quanto o tabagismo ativo), incluindo também as crianças. Nesse sentido, pode constituir-se como importante estratégia de identificação de fumantes e motivação destes para abandono do tabaco, sendo as principais consequências e efeitos de longo prazo do fumo passivo, o(a)",
    "alternativas": [
      {
        "letter": "A",
        "text": "diminuição do risco cardiovascular na idade adulta.",
        "explanation": "Incorreta: O tabagismo passivo aumenta significativamente o risco cardiovascular na idade adulta.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "aumento do risco em 90% de câncer de pulmão.",
        "explanation": "Incorreta: O risco de câncer de pulmão aumenta em cerca de 20-30% em não fumantes expostos ao fumo passivo, não 90%.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aumento do risco em 50% de infarto do miocárdio.",
        "explanation": "Incorreta: O risco de infarto aumenta em cerca de 25-30%, não 50%.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "aumento do risco de câncer de seios da face.",
        "explanation": "Correta: O tabagismo passivo está associado a diversos tipos de câncer, incluindo o de seios da face, além de doenças respiratórias e cardiovasculares.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "diminuição de bronquite crônica e enfisema pulmonar.",
        "explanation": "Incorreta: O fumo passivo é um fator de risco conhecido para o desenvolvimento e exacerbação de bronquite crônica e enfisema.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O tabagismo passivo é uma causa importante de morbimortalidade. Além do câncer de pulmão e doenças cardiovasculares, a exposição está ligada a cânceres de seios da face, redução da função pulmonar e morte súbita do lactente.",
    "perolaClinica": "Tabagismo passivo não é apenas incômodo: aumenta o risco de câncer de pulmão, seios da face e eventos coronarianos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "INCA — Tabagismo Passivo",
      "Surgeon General's Report on Secondhand Smoke"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1648
  },
  {
    "id": "q-sus-sp-2023-067",
    "code": "Q-SUSSP23-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Pneumonia Adquirida na Comunidade (PAC) na Emergência",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente FMN, masculino, de 28 anos de idade, comparece a consulta ambulatorial com queixa de febre aferida acima de 38,5 °C, astenia, tosse produtiva, sem dispneia referida ou aferida, com teste negativo para covid-19. O médico que o atende o diagnostica com pneumonia adquirida na comunidade (PAC). A PAC constitui a principal causa de morte no mundo; apesar da vasta microbiota respiratória, o Streptococcus pneumoniae permanece sendo a bactéria de maior prevalência entre os agentes etiológicos agudos. Com base no caso clínico apresentado, assinale a alternativa correta, quanto ao nível de atenção em que deve ser realizado o tratamento do referido paciente e quanto à terapia mais indicada nesse caso, seguindo as recomendações para o manejo da pneumonia adquirida na comunidade da SBPT.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trata-se de candidato ao tratamento ambulatorial; recomenda-se uso empírico de piperacilina-tazobactam endovenoso em hospital.",
        "explanation": "Incorreta: Piperacilina-tazobactam é um antibiótico de amplo espectro (incluindo Pseudomonas) reservado para casos graves ou com fatores de risco específicos, não para tratamento ambulatorial.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Trata-se de caso de tratamento hospitalar como PAC grave, devendo-se avaliar UTI e recomendando-se uso empírico de piperacilina-tazobactam endovenoso.",
        "explanation": "Incorreta: O paciente é jovem, sem comorbidades e sem sinais de gravidade (eupneico), não preenchendo critérios para internação ou UTI.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Trata-se de candidato ao tratamento ambulatorial, recomendando-se uso empírico de monoterapia com β-lactâmico ou macrolídeo.",
        "explanation": "Correta: Paciente jovem, hígido e sem sinais de instabilidade (provável CURB-65 = 0) pode ser tratado ambulatorialmente com monoterapia (Amoxicilina ou Macrolídeo), conforme diretrizes da SBPT.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Trata-se de caso de tratamento hospitalar como PAC grave, devendo-se avaliar UTI e recomendando-se uso empírico de vancomicina e meropenem endovenoso.",
        "explanation": "Incorreta: Vancomicina e Meropenem são drogas de reserva para infecções por germes multirresistentes em ambiente hospitalar/UTI.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Trata-se de candidato ao tratamento ambulatorial, devendo-se guiar antibiótico somente após resultado de cultura de escarro.",
        "explanation": "Incorreta: O tratamento da PAC é empírico e deve ser iniciado prontamente; a cultura de escarro não é recomendada rotineiramente para pacientes ambulatoriais.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O manejo da PAC baseia-se na estratificação de risco (como o escore CURB-65). Pacientes hígidos, sem sinais de gravidade, são candidatos ao tratamento ambulatorial com cobertura para os agentes mais comuns, principalmente o Streptococcus pneumoniae.",
    "perolaClinica": "PAC ambulatorial em hígido? Monoterapia com Beta-lactâmico ou Macrolídeo é a regra.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes Brasileiras de Pneumonia Adquirida na Comunidade – SBPT",
      "Escore CURB-65"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1648
  },
  {
    "id": "q-sus-sp-2023-068",
    "code": "Q-SUSSP23-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca — Hepatomegalia Congestiva e Refluxo Hepatojugular",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente MDH, homem, de 42 anos de idade, foi internado por dispneia aos esforços há cinco meses, com sensação de opressão no tórax há uma semana. Nega tosse, expectoração ou chiado. Nega tabagismo. Seu exame físico da entrada revelou o seguinte: PA de 110 mmHg x 76 mmHg; FC de 54 bpm; saturação de O₂ (ar ambiente) de 91%. Ausculta cardíaca: hiperfonese e desdobramento de segunda bulha em foco pulmonar. Turgência jugular bilateral. Pulmões com estertores bibasais. Apresenta ecocardiograma transtorácico com FEVE de 34% e a radiografia inicial mostrada a seguir. O paciente é estabilizado no terceiro dia da internação e já está com a volemia estável. A partir desse caso hipotético, assinale a alternativa correta, a respeito do planejamento pós-alta desse paciente, de acordo com a Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Recomenda-se que pacientes que foram internados por insuficiência cardíaca (IC) descompensada sejam seguidos somente em casos de necessidade de terapia de suporte ventricular.",
        "explanation": "Incorreta: Todos os pacientes com IC descompensada devem ter seguimento rigoroso pós-alta para otimização terapêutica e prevenção de reinternações, não apenas os que precisam de suporte ventricular.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Recomenda-se visita clinica precoce após hospitalização, com avaliação médica/multidisciplinar, somente depois do terceiro mês após alta hospitalar.",
        "explanation": "Incorreta: A visita clínica deve ser precoce, idealmente entre 7 a 14 dias após a alta hospitalar.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "É recomendada a vacinação anual contra influenza para todos os pacientes com IC.",
        "explanation": "Correta: A vacinação anual contra influenza e a vacinação contra pneumococo são recomendadas para todos os pacientes com IC para reduzir o risco de descompensações infecciosas.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Pacientes com sintomas avançados (classe IV da NYHA) são os únicos indicados a iniciar programas de exercício.",
        "explanation": "Incorreta: Programas de exercício são recomendados para pacientes estáveis em classes NYHA I a III; pacientes em classe IV requerem estabilização prévia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O retorno ao trabalho deve ser evitado, ainda que seja importante financeiramente, pois o trabalho não é benéfico para o estado emocional e a autoestima de pacientes com doenças crônicas.",
        "explanation": "Incorreta: O retorno ao trabalho e a reabilitação psicossocial são incentivados conforme a capacidade funcional, sendo benéficos para a autoestima e saúde mental.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O cuidado pós-alta na insuficiência cardíaca foca na estabilidade clínica e prevenção de gatilhos de descompensação. A imunização é uma medida de prevenção secundária fundamental para reduzir a morbimortalidade nessa população.",
    "perolaClinica": "Paciente com IC deve tomar vacina da gripe todo ano para evitar descompensações por infecções respiratórias.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda – 2018",
      "Diretriz SBC de Miocardites e Pericardites"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1649
  },
  {
    "id": "q-sus-sp-2023-069",
    "code": "Q-SUSSP23-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Farmacocinética e Farmacodinâmica de Antimicrobianos (Beta-Lactâmicos)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, RFO, homem, de 53 anos de idade, sofreu acidente automobilístico há 20 dias, com fratura exposta da tíbia direita, com necessidade de tratamento cirúrgico. Após 10 dias do procedimento, evoluiu com dor local e saída de secreção purulenta no sítio cirúrgico e compareceu em setor de internação com hemograma que evidenciava leucocitose, aumento de marcadores inflamatórios e ressonância magnética com sinais de osteomielite com destruição óssea e envolvimento de tecidos moles adjacentes. Foi feita abordagem cirúrgica local e foi enviado tecido para análise, que evidenciou MSSA no material coletado multissensível. Assinale a alternativa que apresenta o tratamento mais adequado nesse caso hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "vancomicina",
        "explanation": "Incorreta: A vancomicina é o tratamento de escolha para MRSA (Staphylococcus aureus resistente à oxacilina), mas é inferior aos beta-lactâmicos no tratamento de MSSA.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "daptomicina",
        "explanation": "Incorreta: A daptomicina é uma alternativa para infecções graves por Gram-positivos, mas não é a primeira escolha para MSSA sensível a beta-lactâmicos.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "ceftazidima",
        "explanation": "Incorreta: A ceftazidima é uma cefalosporina de 3ª geração com foco em Gram-negativos (incluindo Pseudomonas), sem cobertura adequada para Staphylococcus aureus.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "oxacilina",
        "explanation": "Correta: Para Staphylococcus aureus sensível à meticilina (MSSA), as penicilinas penicilinase-resistentes (como a oxacilina) ou cefalosporinas de 1ª geração são o tratamento padrão-ouro.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "teicoplanina",
        "explanation": "Incorreta: A teicoplanina é um glicopeptídeo similar à vancomicina, reservado para casos de resistência ou alergia aos beta-lactâmicos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "No tratamento de infecções estafilocócicas, a identificação do perfil de sensibilidade é crucial. Se o isolado é MSSA, os beta-lactâmicos (Oxacilina ou Cefazolina) são superiores aos glicopeptídeos (Vancomicina) em termos de eficácia clínica e velocidade de bacteremia.",
    "perolaClinica": "MSSA? O tratamento de escolha é Oxacilina ou Cefazolina. Guarde a Vancomicina para o MRSA.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Sanford Guide to Antimicrobial Therapy",
      "Harrison's Principles of Internal Medicine, 21st Edition"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1650
  },
  {
    "id": "q-sus-sp-2023-070",
    "code": "Q-SUSSP23-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Trombofilias e Trombose Venosa Profunda (TVP)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, JVCC, 25 anos de idade, apresentou quadro de dispneia súbita e dessaturação 4 horas após realização de cirurgia intra-abdominal. Após a realização de exames complementares, foi diagnosticada com tromboembolia pulmonar aguda. A partir desse caso clínico hipotético, assinale a alternativa correta, em relação ao tempo de duração da anticoagulação, segundo a SBACV.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O objetivo de prolongar a duração do tratamento é garantir a recorrência de TVP. O risco será menor se a TVP ocorrer na presença de fatores de risco reversíveis, como cirurgias, e maior se a TVP for idiopática ou na presença de câncer.",
        "explanation": "Incorreta: O objetivo é prevenir a recorrência, não garantir. Além disso, o risco de recorrência é menor em fatores provocados (como cirurgia).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Devem-se ponderar os riscos e benefícios para a anticoagulação estendida por tempo indefinido, mas não se deve adaptá-la de acordo a situação clínica de cada paciente.",
        "explanation": "Incorreta: A decisão de estender a anticoagulação deve ser sempre individualizada, pesando o risco de sangramento versus o risco de recorrência.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O objetivo de prolongar a duração do tratamento é prevenir a recorrência de TVP. O risco será menor se a TVP ocorrer na presença de fatores de risco reversíveis, como cirurgias, e maior se a TVP for idiopática ou na presença de câncer.",
        "explanation": "Correta: A duração da anticoagulação visa prevenir recorrências. Fatores de risco cirúrgicos (reversíveis) conferem baixo risco de recorrência após o tratamento inicial (geralmente 3 meses), enquanto causas idiopáticas ou câncer têm alto risco.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Não se devem ponderar os riscos e benefícios para a anticoagulação estendida por tempo indefinido, nem adaptar de acordo a situação clinica de cada paciente.",
        "explanation": "Incorreta: É imperativo ponderar riscos e benefícios e adaptar a conduta à situação clínica do paciente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O objetivo de encurtar a duração do tratamento é prevenir a recorrência de TVP. O risco será menor se a TVP ocorrer na presença de fatores de risco reversíveis, como cirurgias, e maior se a TVP for idiopática ou na presença de câncer.",
        "explanation": "Incorreta: O objetivo não é 'encurtar' o tratamento, mas sim definir a duração ótima para equilibrar proteção e risco hemorrágico.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O tratamento do tromboembolismo venoso (TEV) dura, no mínimo, 3 meses. A decisão de estender o tratamento depende se o evento foi provocado por um fator transitório (como cirurgia de grande porte) ou se é idiopático/associado a condições crônicas (como câncer).",
    "perolaClinica": "TEV provocado por cirurgia? 3 meses de anticoagulação costumam ser suficientes devido ao baixo risco de recorrência.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Angiologia e de Cirurgia Vascular (SBACV)",
      "Chest Guideline: Antithrombotic Therapy for VTE Disease"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1651
  },
  {
    "id": "q-sus-sp-2023-071",
    "code": "Q-SUSSP23-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca — Hepatomegalia Congestiva e Refluxo Hepatojugular",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 63 anos de idade, com antecedente pessoal de hipertensão arterial sistêmica, em uso irregular de enalapril 20 mg/dia, compareceu ao pronto atendimento com queixa de dispneia aos esforços piorada há 1 semana, com dispneia aos mínimos esforços atualmente. Relata ortopneia e dispneia paroxística noturna, além de edema de membros inferiores, sem febre ou dor torácica. Refere tosse seca e nega tabagismo. Assinale a alternativa que apresenta o diagnóstico provável do paciente nesse caso clínico hipotético.",
    "alternativas": [
      {
        "letter": "A",
        "text": "pneumonia",
        "explanation": "Incorreta: Embora possa causar dispneia e tosse, a pneumonia geralmente cursa com febre e expectoração, e não explicaria a ortopneia e o edema de membros inferiores.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "doença pulmonar obstrutiva crônica exacerbada",
        "explanation": "Incorreta: A DPOC exacerbada causa dispneia e tosse (geralmente produtiva), mas a ortopneia e a dispneia paroxística noturna são marcos da congestão pulmonar por falência cardíaca.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "insuficiência cardíaca descompensada",
        "explanation": "Correta: O quadro clínico é clássico de insuficiência cardíaca congestiva: dispneia progressiva, ortopneia, dispneia paroxística noturna e edema periférico em paciente hipertenso com má adesão ao tratamento.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "infarto do miocárdio",
        "explanation": "Incorreta: O infarto agudo do miocárdio manifesta-se tipicamente com dor torácica aguda, embora possa evoluir para IC aguda. O quadro aqui é mais sugestivo de descompensação crônica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "tuberculose pulmonar",
        "explanation": "Incorreta: A tuberculose pulmonar apresenta-se com tosse crônica, febre vespertina e perda ponderal, não com sinais típicos de congestão sistêmica e pulmonar.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A insuficiência cardíaca descompensada é um diagnóstico clínico baseado nos critérios de Framingham. A presença de ortopneia e dispneia paroxística noturna possui alta especificidade para o diagnóstico de congestão pulmonar de origem cardíaca.",
    "perolaClinica": "Ortopneia e dispneia paroxística noturna? É insuficiência cardíaca até que se prove o contrário.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda – 2018",
      "Critérios de Framingham para Insuficiência Cardíaca"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1651
  },
  {
    "id": "q-sus-sp-2023-072",
    "code": "Q-SUSSP23-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva",
    "subtema": "Delirium no Paciente Hospitalizado",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 82 anos de idade, com antecedentes pessoais de diabetes melito não insulino-dependente e doença de Alzheimer em fase moderada, foi levada ao pronto- socorro com história de diarreia líquida sem sangue ou muco há 3 dias, além de queda do estado geral, sem febre. Evoluiu com piora há 1 dia, apresentando apatia e lentificação. Ao exame, encontra-se desidratada, hemodinamicamente estável e eupneica e apresenta déficit de atenção e sonolência, sem déficits neurológicos focais. Outros dados da paciente: saturação de oxigênio = 97% e glicemia capilar = 110 mg/dL. Considerando-se esse caso clínico, é correto afirmar que, de acordo com as possibilidades diagnósticas, a conduta inicial deverá incluir, além de hidratação endovenosa e teste para covid-19,",
    "alternativas": [
      {
        "letter": "A",
        "text": "coleta de hemograma, urina I, eletrólitos e função renal.",
        "explanation": "Correta: Em idosos com demência prévia, qualquer insulto agudo (como diarreia e desidratação) pode desencadear delirium. A investigação inicial deve focar em causas metabólicas, hidroeletrolíticas e infecciosas (Urina I).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "tomografia de crânio e gasometria arterial.",
        "explanation": "Incorreta: A TC de crânio não é a primeira prioridade em um quadro claramente sistêmico (diarreia) sem sinais focais, embora possa ser feita posteriormente se não houver melhora.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "ressonância de crânio e gasometria venosa.",
        "explanation": "Incorreta: A ressonância é um exame de segunda linha e a gasometria venosa é menos prioritária que a avaliação de eletrólitos e função renal neste contexto.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "coleta de hemoculturas e gasometria arterial.",
        "explanation": "Incorreta: Hemoculturas são importantes se houver suspeita de sepse, mas a avaliação metabólica e renal é mandatória pela história de perda volêmica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "tomografia de tórax e ultrassonografia de abdome.",
        "explanation": "Incorreta: Estes exames de imagem não são a conduta inicial prioritária para um quadro de alteração do nível de consciência em idoso desidratado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O delirium é uma síndrome confusional aguda muito comum em idosos, frequentemente precipitada por infecções, desidratação ou distúrbios metabólicos. Em pacientes com Alzheimer, o limiar para o desenvolvimento de delirium é ainda menor.",
    "perolaClinica": "Idoso com alteração aguda do comportamento ou consciência? Procure infecção (especialmente urinária) ou distúrbio metabólico.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition",
      "Tratado de Geriatria e Gerontologia (SBGG)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1651
  },
  {
    "id": "q-sus-sp-2023-073",
    "code": "Q-SUSSP23-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia / Atenção Primária à Saúde",
    "subtema": "Tuberculose em População em Situação de Rua (PSR)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, de 39 anos de idade, natural e procedente de São Paulo - SP, sem comorbidades, procura atendimento no Centro de Saúde Escola por quadro de perda ponderal de 8 kg em 4 meses, tosse produtiva, febre baixa no início da noite, fadiga e nodulações cervicais. Ao exame, revela-se emagrecida, descorada 2+/4+, afebril, com nodulações endurecidas em cadeias cervicais anterior e posterior, com ausculta cardíaca sem alterações e estertores crepitantes em ápice direito. Realizou a radiografia de tórax apresentada a seguir. Com base nesse caso clínico, assinale, entre as alternativas a seguir, aquela que apresenta a principal hipótese diagnóstica do quadro pulmonar e seu exame confirmatório, respectivamente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "cavitação pulmonar, tuberculose pulmonar, pesquisa do bacilo álcool-ácido resistente (pelo menos uma amostra)",
        "explanation": "Incorreta: Embora o diagnóstico seja tuberculose, a recomendação do Ministério da Saúde para diagnóstico por baciloscopia é de pelo menos duas amostras (uma na consulta e outra na manhã seguinte).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "abscesso pulmonar, pneumonia por Staphilococcus aureus; três pares de hemoculturas",
        "explanation": "Incorreta: O quadro clínico arrastado (4 meses) e a imagem de cavitação em ápice são típicos de tuberculose, não de pneumonia estafilocócica aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "massa pulmonar, neoplasia maligna de pulmão; biópsia guiada por tomografia",
        "explanation": "Incorreta: A imagem mostra uma cavitação (parede fina, conteúdo aéreo), não uma massa sólida sugestiva de neoplasia, e a clínica é muito sugestiva de infecção crônica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "cavitação pulmonar, tuberculose pulmonar; pesquisa do bacilo álcool-ácido resistente (pelo menos duas amostras)",
        "explanation": "Correta: A imagem radiológica mostra uma cavitação no ápice pulmonar direito. A clínica de tosse crônica, febre vespertina e perda de peso é clássica de tuberculose pulmonar, confirmada por baciloscopia (BAAR) em pelo menos duas amostras.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "massa pulmonar, neoplasia maligna de pulmão; biópsia endobrônquica",
        "explanation": "Incorreta: A hipótese de neoplasia é menos provável que tuberculose dada a epidemiologia e a imagem de cavitação apical típica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A tuberculose pulmonar pós-primária manifesta-se tipicamente com infiltrados e cavitações nos segmentos apicais e posteriores dos lobos superiores. O diagnóstico padrão no SUS envolve a baciloscopia de escarro ou o Teste Rápido Molecular (TRM-TB).",
    "perolaClinica": "Tosse por > 3 semanas + febre vespertina + cavitação em ápice pulmonar = Tuberculose até que se prove o contrário.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Recomendações para o Controle da Tuberculose no Brasil – Ministério da Saúde",
      "Diretrizes da SBPT sobre Tuberculose"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1652,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/sus-sp-2023/q073.png",
      "modality": "Radiografia",
      "caption": "Radiografia de tórax evidenciando cavitação em ápice pulmonar direito.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-sus-sp-2023-074",
    "code": "Q-SUSSP23-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia / Atenção Primária à Saúde",
    "subtema": "Tuberculose em População em Situação de Rua (PSR)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, de 39 anos de idade, natural e procedente de São Paulo - SP, sem comorbidades, procura atendimento no Centro de Saúde Escola por quadro de perda ponderal de 8 kg em 4 meses, tosse produtiva, febre baixa no início da noite, fadiga e nodulações cervicais. Ao exame, revela-se emagrecida, descorada 2+/4+, afebril, com nodulações endurecidas em cadeias cervicais anterior e posterior, com ausculta cardíaca sem alterações e estertores crepitantes em ápice direito. Realizou a radiografia de tórax apresentada a seguir. Considere que, após confirmação do diagnóstico do quadro pulmonar, a paciente receba o resultado de dois testes rápidos positivos para HIV e, posteriormente, seja realizada carga viral de 10.000 cópias/mL e contagem de linfócitos TCD4+ = 150 células/mL. Nesse caso, em relação ao tratamento do HIV e da patologia pulmonar, deve-se iniciar,",
    "alternativas": [
      {
        "letter": "A",
        "text": "concomitantemente, quimioterapia e terapia antirretrovial.",
        "explanation": "Incorreta: O tratamento da tuberculose é feito com quimioterapia específica (RIPE), mas a terapia antirretroviral (TARV) não deve ser iniciada simultaneamente se o CD4 for > 50.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "imediatamente, esquema RIPE associado a terapia antirretroviral.",
        "explanation": "Incorreta: O início imediato da TARV junto com o RIPE aumenta o risco de Síndrome Inflamatória de Reconstituição Imune (SIRÍ) e toxicidade combinada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "imediatamente, ceftriaxona endovenosa por 7 dias, associada a terapia antirretroviral.",
        "explanation": "Incorreta: Ceftriaxona é para pneumonia bacteriana aguda; o tratamento da tuberculose é o esquema RIPE.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "imediatamente, quimioterapia e, após 12 semanas, associar terapia antirretrovial.",
        "explanation": "Incorreta: O prazo de 12 semanas é excessivo e aumenta o risco de progressão da imunodeficiência pelo HIV.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "imediatamente, esquema RIPE e, após 8 semanas de tratamento, associar terapia antirretroviral.",
        "explanation": "Correta: Em pacientes com coinfecção TB-HIV e CD4 entre 50 e 200 células/mL, recomenda-se iniciar o tratamento da tuberculose (RIPE) imediatamente e postergar a TARV para a 8ª semana de tratamento para reduzir o risco de SIRÍ.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na coinfecção TB-HIV, o tratamento da tuberculose é sempre prioritário. O momento de iniciar a TARV depende da contagem de CD4: se < 50 cel/mm³, inicia-se em 2 semanas; se > 50 cel/mm³, inicia-se em 8 semanas (após a fase intensiva do RIPE).",
    "perolaClinica": "Coinfecção TB-HIV: Trate a TB primeiro. Se CD4 > 50, espere 8 semanas para iniciar a TARV.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo Clínico e Diretrizes Terapêuticas para Manejo da Infecção pelo HIV – Ministério da Saúde",
      "Manual de Recomendações para o Controle da Tuberculose no Brasil"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1653,
    "hasPdfFigure": true,
    "clinicalImage": {
      "url": "/assets/exams/sus-sp-2023/q074.png",
      "modality": "Radiografia",
      "caption": "Radiografia de tórax com cavitação apical em paciente com coinfecção TB-HIV.",
      "aspectRatio": "1:1"
    }
  },
  {
    "id": "q-sus-sp-2023-075",
    "code": "Q-SUSSP23-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Semiologia Cardiovascular e Valvopatias",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 52 anos de idade, hipertensa, diabética e tabagista procurou o pronto- socorro de um hospital terciário com quadro de dor precordial de início súbito há cerca de duas horas, de forte intensidade, associada a diaforese e dispneia. Ao exame físico, apresenta-se sudoreica, com palidez cutânea, PA = 80mmHg x 60 mmHg, FC = 64 bpm, FR = 28 ipm, saturação de oxigênio = 98% em ar ambiente, turgência jugular a 45º, com bulhas rítmicas, normofonéticas, sem sopros. À ausculta pulmonar, observa-se murmúrio vesicular presente em cada hemitórax, com estertores crepitantes em terço inferior bilateralmente. Constatam-se extremidades frias, com tempo de enchimento capilar prolongado. Foi realizado o eletrocardiograma a seguir. Assinale a alternativa que apresenta, respectivamente, o correto diagnóstico e a conduta adequada, nesse caso clínico.",
    "alternativas": [
      {
        "letter": "A",
        "text": "infarto agudo do miocárdio sem supradesnivelamento do segmento ST; encaminhar ao laboratório de hemodinâmica de imediato.",
        "explanation": "Incorreta: O quadro de dor súbita com instabilidade e o enunciado mencionando 'eletrocardiograma a seguir' (que mostra supra de ST) definem um IAM com supra.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "infarto agudo do miocárdio com supradesnivelamento do segmento ST de parede anterior; encaminhar ao laboratório de hemodinâmica de imediato.",
        "explanation": "Incorreta: O supra de ST em parede inferior (DII, DIII, aVF) indica infarto de parede inferior, não anterior.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "infarto agudo do miocárdio com supradesnivelamento do segmento ST de parede inferior; realizar trombólise de urgência, se ausência de contraindicações.",
        "explanation": "Incorreta: Embora seja um IAM de parede inferior, a presença de choque cardiogênico (hipotensão, extremidades frias) torna a angioplastia primária (hemodinâmica) mandatória e superior à trombólise.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "infarto agudo do miocárdio com supradesnivelamento do segmento ST de parede inferior; encaminhar ao laboratório de hemodinâmica de imediato.",
        "explanation": "Correta: O diagnóstico é IAM com supra de ST de parede inferior. A presença de sinais de choque cardiogênico (Killip IV) exige transferência imediata para cineangiocoronariografia e intervenção coronariana percutânea primária.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "infarto agudo do miocárdio sem supradesnivelamento do segmento ST; realizar trombólise de urgência, se ausência de contraindicações.",
        "explanation": "Incorreta: O diagnóstico é IAM com supra de ST e a trombólise é contraindicada se houver disponibilidade de hemodinâmica imediata, especialmente em vigência de choque.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O IAM com supra de ST associado a choque cardiogênico (Killip IV) é uma emergência médica gravíssima. A estratégia de reperfusão preferencial é a angioplastia primária, que deve ser realizada o mais rápido possível.",
    "perolaClinica": "IAM com supra + Choque Cardiogênico = Vaga zero para Hemodinâmica (Angioplastia Primária).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da SBC sobre Angina Instável e IAM sem Supradesnivelamento do Segmento ST",
      "ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1654
  },
  {
    "id": "q-sus-sp-2023-076",
    "code": "Q-SUSSP23-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Emergências Clínicas / Toxicologia",
    "subtema": "Intoxicação Aguda por Opioides",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto à intoxicação exógena, considere as seguintes possibilidades de quadros clínicos, agentes causadores e medidas de tratamento específicas. Paciente A: pupilas rapidamente variáveis, convulsão, pele fria, bradicardia. Paciente B: pupilas mióticas, broncorreia, hipersalivação, bradicardia. Paciente C: pupilas muito mióticas, hipoventilação, bradipneia. Agente 1: opioide. Agente 2: betabloqueador. Agente 3: organofosforado. Medida X: glucagon, gluconato de cálcio. Medida Y: naloxone. Medida Z: atropina e pralidoxima. A partir dessas informações, assinale a alternativa que apresenta a correlação mais adequada entre o quadro clínico, o agente causador e a medida de tratamento.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A-1-X; B-2-Y; C-3-Z",
        "explanation": "Incorreta: A correlação está errada. O paciente A (bradicardia, convulsão) não condiz com opioide (que causa miose fixa e bradipneia).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A-2-X; B-3-Z; C-1-Y",
        "explanation": "Correta: Paciente A (Betabloqueador/Agente 2) trata-se com Glucagon (Medida X). Paciente B (Organofosforado/Agente 3 - síndrome colinérgica) trata-se com Atropina/Pralidoxima (Medida Z). Paciente C (Opioide/Agente 1) trata-se com Naloxone (Medida Y).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A-3-Z; B-1-Y; C-2-X",
        "explanation": "Incorreta: Inverte os tratamentos e agentes para as síndromes descritas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A-1-Z; B-2-X; C-3-Y",
        "explanation": "Incorreta: A medida Z (atropina) é para organofosforados, não para opioides.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A-2-Y; B-1-X; C-3-Z",
        "explanation": "Incorreta: Naloxone (Y) é para opioides, não para betabloqueadores.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O reconhecimento das síndromes toxicológicas (toxidromes) permite o tratamento empírico e específico. A síndrome colinérgica (organofosforados) e a intoxicação por betabloqueadores/bloqueadores de canal de cálcio são emergências que possuem antídotos específicos.",
    "perolaClinica": "Bradicardia + Broncorreia + Miose = Síndrome Colinérgica (Atropina!). Bradicardia + Hipotensão + Hipoglicemia = Betabloqueador (Glucagon!).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition",
      "Manual de Toxicologia Clínica — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1654
  },
  {
    "id": "q-sus-sp-2023-077",
    "code": "Q-SUSSP23-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Demência por Corpos de Lewy",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 60 anos de idade refere início, há 4 meses, de bradicinesia, passos curtos, tremores e dificuldade para realização das suas atividades diárias. Refere uso de cinarizina e lorazepam. Com base nesse caso clínico, assinale a alternativa que apresenta, respectivamente, o diagnóstico mais provável e a melhor conduta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "parkinsonismo secundário; suspender a cinarizina e o lorazepam",
        "explanation": "Correta: A cinarizina é um bloqueador de canal de cálcio com propriedades antidopaminérgicas, sendo uma causa comum de parkinsonismo secundário em idosos. A conduta é a suspensão do fármaco causador.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "labirintopatia; otimizar o tratamento com a cinarizina",
        "explanation": "Incorreta: A cinarizina é usada para vertigem, mas seus efeitos colaterais extrapiramidais mimetizam a doença de Parkinson, não sendo o diagnóstico de labirintopatia o foco aqui.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "doença de Alzheimer; introdução de levodopa",
        "explanation": "Incorreta: A Doença de Alzheimer manifesta-se primariamente com perda de memória, não com síndrome parkinsoniana isolada no início.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "tremor essencial; introduzir betabloqueador",
        "explanation": "Incorreta: O tremor essencial é um tremor de ação/postural, geralmente bilateral e sem bradicinesia ou rigidez.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "doença de Parkinson; manter os medicamentos em uso e iniciar fisioterapia motora diária",
        "explanation": "Incorreta: Antes de diagnosticar Doença de Parkinson idiopática, deve-se excluir causas secundárias, como o uso de fármacos bloqueadores de dopamina.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O parkinsonismo farmacológico é a segunda causa mais comum de síndrome parkinsoniana. Medicamentos como cinarizina, flunarizina, antipsicóticos e metoclopramida devem ser sempre pesquisados na anamnese de pacientes com tremores e bradicinesia.",
    "perolaClinica": "Idoso com tremor e lentidão? Verifique se ele usa 'remédio para labirinto' (Cinarizina/Flunarizina).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Harrison's Principles of Internal Medicine, 21st Edition",
      "Tratado de Neurologia da Academia Brasileira de Neurologia"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1655
  },
  {
    "id": "q-sus-sp-2023-078",
    "code": "Q-SUSSP23-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "subtema": "Diabetes Mellitus Tipo 2 — Farmacoterapia (GLP-1 e iSGLT2)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, de 20 anos de idade, com diagnóstico de DM1 há cerca de 12 anos, chega ao pronto-socorro com quadro de astenia, taquipneia, rebaixamento do nível de consciência e desidratação com início há 12 horas. Familiares referem que o paciente estava fazendo uso irregular da insulina nos últimos dias e que já apresentou quadro semelhante quando interrompeu o tratamento de diabetes. Com base nesse caso clínico, assinale a alternativa que apresenta, respectivamente, a hipótese diagnóstica mais provável para esse quadro e o(s) melhor(es) exame(s) a ser(em) solicitado(s) no momento.",
    "alternativas": [
      {
        "letter": "A",
        "text": "cetoacidose diabética; glicemia, gasometria arterial e pesquisa de corpos cetônicos na urina",
        "explanation": "Correta: O quadro de DM1 com interrupção de insulina, astenia, taquipneia (Kussmaul) e rebaixamento de consciência é típico de Cetoacidose Diabética (CAD). Os exames iniciais são glicemia, gasometria (acidose) e cetonúria/cetonemia.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "sepse de foco a esclarecer; hemoculturas e hemograma",
        "explanation": "Incorreta: Embora a sepse possa precipitar CAD, a história de má adesão à insulina em paciente com DM1 torna a CAD a hipótese primária.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "cetoacidose diabética; tomografia de crânio sem contraste, para avaliar a causa do rebaixamento do nível de consciência",
        "explanation": "Incorreta: O rebaixamento de consciência na CAD é metabólico; a TC de crânio não é o exame inicial prioritário, a menos que não haja melhora com a correção metabólica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "acidente vascular encefálico; tomografia de crânio sem contraste, para avaliar a causa do rebaixamento do nível de consciência",
        "explanation": "Incorreta: O quadro é sistêmico e metabólico, não focal como um AVE, especialmente em um paciente jovem com DM1 descompensado.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "sepse de foco pulmonar; radiografia de tórax e hemoculturas",
        "explanation": "Incorreta: A prioridade é confirmar a descompensação glicêmica e o estado ácido-básico antes de focar exclusivamente em focos infecciosos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A cetoacidose diabética é uma complicação aguda grave do DM1, caracterizada pela tríade: hiperglicemia (> 250 mg/dL), acidose metabólica (pH < 7,3 ou HCO3 < 18) e cetonemia/cetonúria. O tratamento envolve hidratação vigorosa, insulinoterapia e correção de eletrólitos.",
    "perolaClinica": "Tríade da CAD: Hiperglicemia + Acidose Metabólica com Anion-Gap aumentado + Cetonúria.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Diabetes (SBD) 2023",
      "ADA Standards of Care in Diabetes 2023"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1655
  },
  {
    "id": "q-sus-sp-2023-079",
    "code": "Q-SUSSP23-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Hemolíticas (Marcadores Laboratoriais de Hemólise)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Entre as alternativas a seguir, assinale a que não apresenta um dos critérios diagnósticos de síndrome torácica aguda em pacientes com anemia falciforme.",
    "alternativas": [
      {
        "letter": "A",
        "text": "presença de infiltrado novo em radiografia de tórax",
        "explanation": "Incorreta: A presença de um novo infiltrado pulmonar na radiografia é o critério radiológico obrigatório para o diagnóstico de Síndrome Torácica Aguda (STA).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dor torácica",
        "explanation": "Incorreta: A dor torácica é um dos critérios clínicos que, associado ao infiltrado novo, define a STA.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "temperatura > 38,5°C.",
        "explanation": "Incorreta: A febre (> 38,5°C) é um critério clínico comum e faz parte da definição de STA.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "taquipneia, tosse, estertores à ausculta",
        "explanation": "Incorreta: Sinais respiratórios como taquipneia, tosse e estertores são critérios clínicos válidos para STA.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "sinais de isquemia no eletrocardiograma ou aumento de biomarcadores de necrose miocárdica",
        "explanation": "Correta: Alterações no ECG ou biomarcadores de necrose miocárdica não fazem parte dos critérios diagnósticos clássicos da Síndrome Torácica Aguda, embora possam ocorrer em complicações cardíacas da anemia falciforme.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Síndrome Torácica Aguda (STA) é definida pela presença de um novo infiltrado na radiografia de tórax associado a pelo menos um sinal ou sintoma clínico: febre, dor torácica, taquipneia, tosse ou hipoxemia. É uma das principais causas de morte em pacientes falciformes.",
    "perolaClinica": "STA = Novo infiltrado no RX de tórax + Sintoma respiratório ou febre em paciente falciforme.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Protocolo de Doença Falciforme — Ministério da Saúde",
      "Hematology: Basic Principles and Practice (Hoffman)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1655
  },
  {
    "id": "q-sus-sp-2023-080",
    "code": "Q-SUSSP23-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia",
    "subtema": "Ascite e Gradiente de Albumina Soro-Ascite (GASA)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os fatores predisponentes para o desenvolvimento de peritonite bacteriana espontânea (PBE) não incluem",
    "alternativas": [
      {
        "letter": "A",
        "text": "sangramento gastrointestinal.",
        "explanation": "Incorreta: O sangramento gastrointestinal é um fator predisponente importante, pois favorece a translocação bacteriana.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "episódio prévio de PBE.",
        "explanation": "Incorreta: Um episódio prévio de PBE é o principal fator de risco para novas recorrências, indicando necessidade de profilaxia secundária.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "procedimentos invasivos (sondas urinárias ou cateteres intravasculares).",
        "explanation": "Incorreta: Procedimentos invasivos aumentam o risco de bacteremia e subsequente colonização do líquido ascítico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "doença hepática avançada.",
        "explanation": "Incorreta: Quanto mais avançada a doença hepática (Child-Pugh C, bilirrubina alta, proteína baixa no líquido ascítico), maior o risco de PBE.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "hipertensão arterial sistêmica.",
        "explanation": "Correta: A hipertensão arterial sistêmica não é um fator predisponente para o desenvolvimento de Peritonite Bacteriana Espontânea. O fator hemodinâmico relevante é a hipertensão portal.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A PBE ocorre principalmente por translocação bacteriana de germes entéricos em pacientes com defesas imunológicas reduzidas e baixa concentração de proteínas (opsoninas) no líquido ascítico. Fatores que aumentam a carga bacteriana ou reduzem a imunidade favorecem seu surgimento.",
    "perolaClinica": "Fatores de risco para PBE: Proteína no líquido < 1,5 g/dL, hemorragia digestiva e episódio prévio de PBE.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes da Sociedade Brasileira de Hepatologia",
      "EASL Clinical Practice Guidelines on the management of ascites, spontaneous bacterial peritonitis, and hepatorenal syndrome in patients with cirrhosis"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1655
  },
  {
    "id": "q-sus-sp-2023-081",
    "code": "Q-SUSSP23-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Infectologia / Atenção Primária à Saúde",
    "subtema": "Rastreamento de IST, Sífilis e PrEP",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Prevenção combinada, segundo o Ministério da Saúde (MS), é uma estratégia de prevenção que faz uso de combinado de intervenções biomédicas, comportamentais e estruturais aplicadas no nível dos indivíduos, de suas relações e dos grupos sociais a que pertencem, mediante ações que levem em consideração suas necessidades e especificidades e as formas de transmissão. A prevenção combinada é preconizada pelo Programa Conjunto das Nações Unidas sobre HIV/Aids (Unaids), desde 2010, e incorporada no Brasil desde 2013. A atenção primária à saúde (APS) tem papel fundamental tanto na garantia de acesso de usuários às tecnologias de prevenção quanto na oferta qualificada dessas tecnologias. Considerando-se esse conceito, pode-se dizer que as ações de prevenção combinada que podem ser realizadas pelas equipes multidisciplinares na APS incluem",
    "alternativas": [
      {
        "letter": "A",
        "text": "garantir a acessibilidade a seringas e a agulhas descartáveis para pessoas que usam drogas injetáveis e para travestis e transexuais que fazem uso de silicone industrial e de hormônios injetáveis, como redução de danos.",
        "explanation": "Correta: A redução de danos é uma intervenção estrutural e comportamental da prevenção combinada, incluindo a oferta de insumos estéreis para usuários de drogas e populações vulneráveis para evitar a transmissão de patógenos sanguíneos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "encaminhar o usuário do serviço para centros especializados e de referência quando for necessário prescrever PrEP, visto que, nas unidades básicas de saúde (UBS), não é possível prescrever.",
        "explanation": "Incorreta: A PrEP (Profilaxia Pré-Exposição) pode e deve ser prescrita e acompanhada na Atenção Primária à Saúde, conforme o Protocolo Clínico e Diretrizes Terapêuticas (PCDT) do Ministério da Saúde.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "fortalecer permanentemente o vínculo da gestante portadora de HIV com a equipe de pré-natal de alto risco, com finalidade de prevenção da transmissão vertical (PTV), não sendo função da equipe da APS seu acompanhamento.",
        "explanation": "Incorreta: O acompanhamento da gestante vivendo com HIV deve ser compartilhado entre o pré-natal de alto risco e a equipe da APS, visando à integralidade e ao fortalecimento do vínculo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "ofertar, em todas as UBS, preservativo masculino, preservativo feminino e gel lubrificante, sendo fornecido somente quando prescrito por profissional de saúde, após orientação sobre cuidados de infecções sexualmente transmissíveis (ISTs).",
        "explanation": "Incorreta: Preservativos e gel lubrificante são insumos de livre acesso na APS e não necessitam de prescrição profissional para serem fornecidos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar testagem para pessoas cadastradas no serviço da UBS, orientando os que não forem cadastrados a procurarem suas unidades de referência.",
        "explanation": "Incorreta: O acesso às ações de prevenção e saúde na APS é universal, não se restringindo apenas aos usuários cadastrados na unidade específica (princípio da universalidade).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A prevenção combinada utiliza intervenções biomédicas, comportamentais e estruturais. Na APS, a redução de danos através da oferta de seringas e agulhas é uma estratégia fundamental para populações vulneráveis, conforme as diretrizes do Ministério da Saúde.",
    "perolaClinica": "A prevenção combinada do HIV na APS inclui PrEP, PEP, testagem regular, tratamento como prevenção e redução de danos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Ministério da Saúde — Prevenção Combinada do HIV",
      "PCDT para Profilaxia Pré-Exposição (PrEP) de Risco à Infecção pelo HIV"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1656
  },
  {
    "id": "q-sus-sp-2023-082",
    "code": "Q-SUSSP23-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Lei Orgânica da Saúde (Lei 8.080/1990) — Dever do Estado e Corresponsabilidade",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Dona Teresa, de 45 anos de idade, foi visitar os netos para as festas de fim de ano. Durante a sua estadia, após o almoço familiar em uma quarta-feira, começou a sentir dores abdominais moderadas. Ela relata já ter apresentado dores abdominais antes, mas não com essa intensidade. A filha a levou na unidade de saúde de família do bairro, que era a unidade de saúde mais próxima. Dona Teresa foi acolhida pela enfermeira e passou por uma consulta com o médico de família da unidade e teve a resolução do quadro e os devidos encaminhamentos. Nessa situação hipotética, o princípio do Sistema Único de Saúde (SUS) que permitiu o atendimento na unidade local foi a(o)",
    "alternativas": [
      {
        "letter": "A",
        "text": "equidade.",
        "explanation": "Incorreta: A equidade refere-se a tratar desigualmente os desiguais para atingir a igualdade, priorizando quem mais precisa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "coordenação do cuidado.",
        "explanation": "Incorreta: A coordenação do cuidado é um atributo da APS, garantindo a continuidade do acompanhamento em diferentes pontos da rede.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "integralidade.",
        "explanation": "Incorreta: A integralidade foca em considerar a pessoa como um todo, atendendo necessidades de promoção, prevenção e cura.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "universalidade.",
        "explanation": "Correta: A universalidade garante que todo cidadão tem direito ao acesso aos serviços de saúde pública, independentemente de onde resida ou de seu vínculo formal com a unidade.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "acesso.",
        "explanation": "Incorreta: Embora o acesso tenha sido permitido, o princípio doutrinário do SUS que sustenta esse direito para qualquer cidadão em território nacional é a universalidade.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O caso descreve uma paciente que, mesmo estando fora de sua área de residência habitual, foi atendida em uma unidade de saúde. Isso exemplifica o princípio da universalidade, que assegura o acesso de todos os cidadãos aos serviços de saúde em todos os níveis de assistência.",
    "perolaClinica": "Universalidade significa que o SUS é para todos, sem barreiras de acesso geográficas ou administrativas.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Constituição Federal de 1988 — Artigo 196",
      "Lei 8.080/1990"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1656
  },
  {
    "id": "q-sus-sp-2023-083",
    "code": "Q-SUSSP23-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Saúde do Trabalhador",
    "subtema": "Acidente de Trabalho, PAIR e CAT",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um rapaz de 18 anos de idade, motoboy, tinha acabado de ser registrado em seu primeiro emprego e pilotava sua moto em direção ao local de trabalho para iniciar suas entregas quando foi, repentinamente, atingido por outro veículo automotor, o qual o lançou a 10 metros de distância contra um muro. Ele foi resgatado pelo serviço móvel de urgência e levado ao hospital municipal da região. Sofreu cirurgia devido à fratura de múltiplas costelas, à fratura de processo odontóide e de tíbia esquerda. Com relação a essa situação hipotética, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O acidente deve ser notificado apenas ao sistema de informação de agravos de notificação (SINAN).",
        "explanation": "Incorreta: Além do SINAN, acidentes de trabalho com vínculo formal exigem a emissão da CAT (Comunicação de Acidente de Trabalho).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "O hospital deve realizar apenas a comunicação de acidente de trabalho (CAT), não sendo necessário realizar a notificação ao SINAN, visto não ser um acidente com material biológico.",
        "explanation": "Incorreta: Acidentes de trabalho graves (como o descrito, com múltiplas fraturas) são de notificação compulsória imediata no SINAN.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O hospital deve realizar ambas as notificações SINAN, em até 24 horas, e realizar CAT.",
        "explanation": "Correta: Acidentes de trabalho graves devem ser notificados no SINAN em até 24 horas (notificação imediata) e, havendo vínculo empregatício, deve-se emitir a CAT para fins previdenciários.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "O caso não deve ser notificado, visto que o entregador ainda não estava em seu horário de trabalho, não podendo ser considerado um acidente de trabalho.",
        "explanation": "Incorreta: Acidentes ocorridos no trajeto para o trabalho (acidente de trajeto) são considerados acidentes de trabalho pela legislação brasileira.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O caso deve ser notificado apenas como acidente de trânsito grave, cabendo ao Detran a responsabilidade.",
        "explanation": "Incorreta: A responsabilidade de notificação de agravos à saúde é do serviço de saúde que presta o atendimento, não do Detran.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O acidente de trajeto é equiparado ao acidente de trabalho. Sendo um acidente grave (múltiplas fraturas), exige notificação compulsória imediata ao SINAN e a emissão da CAT pelo empregador ou serviço de saúde.",
    "perolaClinica": "Acidente de trajeto é acidente de trabalho; se for grave, notifique ao SINAN em 24h e emita a CAT.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Portaria de Consolidação nº 4/2017 — Lista Nacional de Notificação Compulsória",
      "Lei 8.213/1991"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1656
  },
  {
    "id": "q-sus-sp-2023-084",
    "code": "Q-SUSSP23-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Notificação Compulsória e Impactos da Subnotificação no SUS",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Acerca das recentes atualizações na lista nacional de agravos de notificação, julgue os itens a seguir. I As síndromes inflamatórias multissistêmicas associadas à covid-19 em adultos e em crianças, SIM-A e SIM-P, respectivamente, passaram a figurar na lista de agravos de notificação do Ministério da Saúde, com notificação imediata. II A síndrome gripal por covid-19 se manteve na lista geral de agravos, mas, devido à diminuição dos casos e ao esfriamento da pandemia, passou a ser de notificação semanal. III A doença de Chagas crônica, a partir de 2020, passou a figurar na lista de agravos de notificação, devendo ser notificada com periodicidade imediata, em até 24 horas. Com essa alteração, tanto o quadro agudo quanto o quadro crônico da doença causada pelo Trypanosoma cruzi passam a ser obrigatoriamente notificados em todo o território nacional. IV Em 2021, a síndrome congênita associada a infecção pelo vírus Zika passou a ser de notificação compulsória, adotando-se a periodicidade imediata, ou seja, até 24 horas para notificação. Assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Nenhum item está certo.",
        "explanation": "Incorreta: O item I está correto conforme as atualizações recentes da lista de notificação.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Apenas o item I está certo.",
        "explanation": "Correta: A SIM-P e SIM-A foram incluídas como agravos de notificação imediata. O item II está errado (COVID-19 manteve-se imediata em muitos contextos); o III está errado (Chagas crônica é notificação semanal); o IV está errado (Zika congênita é semanal).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Apenas o item II está certo.",
        "explanation": "Incorreta: A notificação de COVID-19 não passou a ser semanal na lista geral de agravos de forma universal conforme o enunciado sugere.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Apenas o item III está certo.",
        "explanation": "Incorreta: A Doença de Chagas Crônica passou a ser de notificação compulsória em 2020, mas a periodicidade é semanal, não imediata.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Apenas o item IV está certo.",
        "explanation": "Incorreta: A síndrome congênita associada ao vírus Zika é de notificação compulsória, mas sua periodicidade é semanal.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "As atualizações da Lista Nacional de Notificação Compulsória incluíram as Síndromes Inflamatórias Multissistêmicas (SIM-P e SIM-A) com periodicidade imediata. A Doença de Chagas Crônica é notificação semanal, assim como a Síndrome Congênita pelo Zika.",
    "perolaClinica": "SIM-P e SIM-A são de notificação imediata (24h); Chagas crônica e Zika congênita são semanais.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Portaria GM/MS nº 1.102/2022",
      "Guia de Vigilância em Saúde — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1657
  },
  {
    "id": "q-sus-sp-2023-085",
    "code": "Q-SUSSP23-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Ética Médica",
    "subtema": "Cuidados Paliativos na Emergência e Código de Ética Médica",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em uma cidade do interior paulista, uma clínica vem fazendo muito sucesso com proposta de tratamentos estéticos com resultados imediatos. José, acabou de se formar em clínica médica e irá iniciar residência em endocrinologia na cidade. Ele foi convidado para atuar nessa clínica ao finais de semana, com bons ganhos mensais. José, diante dos protocolos utilizados na clínica, verifica que ela não possui pesquisas robustas que corroboram com os resultados entregues aos pacientes e que, inclusive, há críticas feitas por algumas sociedades médicas. Ao conversar com os colegas e com o proprietário da clínica, eles informam que não há pesquisas robustas, masq que o importante é o resultado empírico, prático, que eles estão tendo, o que tem trazido clientela de todo o Brasil, principalmente após o marketing agressivo na internet. Com base nessa situação hipotética, considere que José tenha optado por não aceitar a proposta de emprego. Nesse caso, é correto afirmar que José, ao tomar essa decisão, baseou-se no princípio bioético da",
    "alternativas": [
      {
        "letter": "A",
        "text": "justiça.",
        "explanation": "Incorreta: O princípio da justiça refere-se à equidade na distribuição de recursos e tratamentos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "equidade.",
        "explanation": "Incorreta: Equidade é um princípio do SUS, não um dos quatro pilares clássicos da bioética de Beauchamp e Childress.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "não maleficência.",
        "explanation": "Correta: A não maleficência determina que o médico deve evitar causar danos ao paciente. Prescrever tratamentos sem evidência científica robusta e com riscos potenciais fere esse princípio.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "autonomia.",
        "explanation": "Incorreta: A autonomia refere-se ao direito do paciente de decidir sobre seu próprio corpo e tratamento.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "beneficência.",
        "explanation": "Incorreta: A beneficência foca em agir no melhor interesse do paciente para promover o bem, mas a recusa de José baseia-se primariamente em evitar o dano (não maleficência).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Ao recusar uma prática sem evidências científicas e com críticas de sociedades médicas, o profissional prioriza o princípio da não maleficência ('primum non nocere'), evitando expor pacientes a riscos desnecessários.",
    "perolaClinica": "Não maleficência: o dever ético de não causar dano intencional e evitar riscos desnecessários.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Código de Ética Médica (Resolução CFM nº 2.217/2018)",
      "Beauchamp & Childress — Princípios de Ética Biomédica"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1657
  },
  {
    "id": "q-sus-sp-2023-086",
    "code": "Q-SUSSP23-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia",
    "subtema": "Delineamento de Estudos Epidemiológicos",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em julho de 2022, a Organização Mundial da Saúde (OMS) decretou que a doença varíola dos macacos, também conhecida como monkeypox, tornou-se uma emergência de saúde pública global. Isso significa que houve um aumento da transmissibilidade por provável mutação viral. Mas não se notou o aumento de casos graves ou fatais até o momento do decreto da OMS. Nesse sentido, conclui-se que o vírus manteve seu(sua)",
    "alternativas": [
      {
        "letter": "A",
        "text": "poder invasivo.",
        "explanation": "Incorreta: Poder invasivo (invasividade) é a capacidade do agente de se difundir através de tecidos e órgãos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dose infectante.",
        "explanation": "Incorreta: Dose infectante é a quantidade mínima de agentes necessária para iniciar uma infecção.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "virulência.",
        "explanation": "Correta: Virulência é o grau de severidade de uma doença, medido pela proporção de casos graves ou fatais. Se a gravidade não aumentou, a virulência manteve-se estável.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "patogenicidade.",
        "explanation": "Incorreta: Patogenicidade é a capacidade de um agente biológico causar doença em hospedeiros suscetíveis (proporção de doentes/infectados).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "imunogenicidade.",
        "explanation": "Incorreta: Imunogenicidade é a capacidade do agente de estimular uma resposta imune no hospedeiro.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Na cadeia epidemiológica, a virulência quantifica a gravidade da doença (casos graves e óbitos). Se houve aumento de transmissibilidade (infectividade) mas não de gravidade, a virulência não se alterou.",
    "perolaClinica": "Virulência = Gravidade (casos graves/óbitos); Patogenicidade = Capacidade de causar doença (doentes/infectados).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rouquayrol — Epidemiologia & Saúde",
      "Gordis — Epidemiology"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1658
  },
  {
    "id": "q-sus-sp-2023-087",
    "code": "Q-SUSSP23-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Rastreamento e Interpretação de Exames na UBS",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Ana, uma mulher de 35 anos de idade, casada, possui uma filha de 7 anos de idade, a qual foi amamentada exclusivamente até os 6 meses de idade. Essa mãe comparece à consulta de rotina anual na UBS. Após a consulta, a médica solicita exames visando à prevenção de agravos de saúde e aos rastreamentos, segundo é preconizado pelo Ministério de Saúde para a idade de Ana. Após as explicações dos exames pedidos, a médica nota que a paciente se encontra apreensiva e preocupada e pergunta se ela tem alguma dúvida em relação às explicações dadas. Ana, então, relata que está preocupada, pois a médica não pediu mamografia e gostaria de fazer esse exame, pois sua vizinha faleceu de câncer de mama recentemente e Ana relata ter muito medo de não descobrir uma doença como essa precocemente. Nesse caso hipotético, após ouvir o pedido e a preocupação de sua paciente, considerando a medicina centrada na pessoa, os fundamentos conceituais de testes diagnósticos e as recomendações do Ministério da Saúde e do Instituto Nacional do Câncer em relação ao rastreamento de neoplasia mamária, a médica deve",
    "alternativas": [
      {
        "letter": "A",
        "text": "dispensar a solicitação de mamografia, uma vez que, na idade da paciente, a prevalência da doença é baixa, o que aumenta o risco de falso-positivo.",
        "explanation": "Correta: O Ministério da Saúde e o INCA recomendam o rastreamento mamográfico bienal para mulheres de 50 a 69 anos. Em mulheres jovens e sem risco elevado, a baixa prevalência aumenta a chance de resultados falso-positivos e sobrediagnóstico.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "solicitar a mamografia, visando a trazer conforto emocional à paciente, segundo a orientação fornecida pela medicina centrada na pessoa.",
        "explanation": "Incorreta: A medicina centrada na pessoa valoriza a subjetividade, mas não justifica a realização de exames que tragam mais riscos do que benefícios (prevenção quaternária).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "dispensar a solicitação de mamografia, uma vez que a probabilidade pré-teste da doença é baixa, o que aumenta o risco de falso-negativo.",
        "explanation": "Incorreta: A baixa probabilidade pré-teste em uma população de baixa prevalência aumenta o risco de falso-positivo, não de falso-negativo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar a mamografia, devido à baixa probabilidade de falso-positivo, ficando, assim, resguardada, caso haja um futuro processo.",
        "explanation": "Incorreta: Solicitar exames desnecessários por medo de processos é prática de medicina defensiva, não recomendada eticamente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "solicitar a mamografia, como preconizado pela Sociedade Brasileira de Mastologia e pelo Colégio Brasileiro de Radiologia, devido à alta prevalência da doença nessa faixa etária.",
        "explanation": "Incorreta: Embora a SBM recomende a partir dos 40 anos, a questão foca nas diretrizes do Ministério da Saúde/INCA, que mantêm a recomendação a partir dos 50 anos.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "As diretrizes brasileiras (MS/INCA) preconizam o rastreamento do câncer de mama por mamografia a cada 2 anos para mulheres entre 50 e 69 anos. Fora dessa faixa e sem fatores de risco, o risco de falso-positivos e intervenções desnecessárias supera os benefícios.",
    "perolaClinica": "Rastreamento de câncer de mama (MS/INCA): Mamografia bienal dos 50 aos 69 anos.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretrizes para a Detecção Precoce do Câncer de Mama no Brasil (INCA/MS)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1658
  },
  {
    "id": "q-sus-sp-2023-088",
    "code": "Q-SUSSP23-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Estratégia de Agentes Comunitários de Saúde (EACS)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um médico terminou a residência em medicina de família e comunidade recentemente. Logo após a finalização da residência, assumiu uma equipe de atenção primária (eAP) no interior do estado de São Paulo. Ao chegar na unidade de saúde, notou que sua equipe era composta por ele e por um enfermeiro. A partir desse caso hipotético, assinale a alternativa que apresenta a composição mínima para esse tipo de equipe, segundo a Política Nacional de Atenção Básica (PNAB) e a Portaria n.° 2.539/2019.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A composição da equipe está inadequada e deve ser formada por um médico, por um enfermeiro, por um agente comunitário de saúde e por um profissional técnico ou auxiliar de enfermagem.",
        "explanation": "Incorreta: Essa descrição corresponde à composição mínima da Equipe de Saúde da Família (eSF), não da eAP.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A composição está adequada e a equipe pode, portanto, ser formada por um médico e por um enfermeiro.",
        "explanation": "Correta: Segundo a PNAB (atualizada pela Portaria 2.539/2019), a Equipe de Atenção Primária (eAP) Modalidade I pode ser composta apenas por médico e enfermeiro.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "A equipe está inadequada e deve ser formada por um médico, por um enfermeiro e por mais um agente comunitário de saúde.",
        "explanation": "Incorreta: A eAP não exige obrigatoriamente o Agente Comunitário de Saúde (ACS), embora sua presença seja recomendada.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A composição está adequada e a equipe deve ser formada, obrigatoriamente, por um médico especialista em medicina de família e comunidade e por um profissional de enfermagem.",
        "explanation": "Incorreta: Embora o médico de família seja o ideal, a PNAB permite outros especialistas em clínica médica, pediatria ou ginecologia na composição das equipes de atenção básica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A equipe está inadequada e deve ser formada por um médico, por um enfermeiro, por um agente comunitário de saúde e por um técnico de saúde bucal.",
        "explanation": "Incorreta: O técnico de saúde bucal faz parte da Equipe de Saúde Bucal (eSB), que é uma modalidade complementar, não obrigatória na eAP básica.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Política Nacional de Atenção Básica (PNAB) define a Equipe de Atenção Primária (eAP) como uma alternativa à eSF, permitindo composições mais enxutas (médico e enfermeiro) para ampliar a cobertura, especialmente em áreas com dificuldades de fixação de profissionais.",
    "perolaClinica": "eAP (Modalidade I) composição mínima: Médico + Enfermeiro. eSF composição mínima: Médico + Enfermeiro + Aux/Téc Enfermagem + ACS.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Política Nacional de Atenção Básica (PNAB 2017)",
      "Portaria nº 2.539/2019"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1658
  },
  {
    "id": "q-sus-sp-2023-089",
    "code": "Q-SUSSP23-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Níveis de Prevenção de Leavell & Clark e Prevenção Quaternária",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em um município de 5.000 habitantes, existe somente uma unidade de saúde da família com duas equipes. Devido à falta de disponibilização de outros serviços na comunidade, a unidade básica de saúde (UBS) realiza todo o tipo de atendimento: desde consultas programáticas até ás de urgência e de emergência. Por conta disso, o horário de funcionamento da (UBS) fica estendido e as duas médicas da unidade, Maria e Kelly, se revezam nos horários de atendimento, de modo que fique pelo menos um médico durante todo o período de funcionamento da unidade. Com um novo aumento de casos de síndrome respiratória, o atendimento triplicou na unidade e, para corroborar, Maria foi afastada por covid-19, ficando Kelly sozinha por uma semana para realizar todos os atendimentos prioritários. No final da quinta-feira daquela semana, o paciente Jorge chega para sua consulta agendada devido a uma dor no pé que já dura 3 meses. Ele aguardava a consulta há 2 meses, que sempre era remarcada devido aos casos graves que chegavam na unidade e que precisavam ser atendidos com maior prioridade e transferidos de unidade. Ao chegar ao balcão, a recepcionista informa a Jorge que a consulta tera que ser novamente remarcada, visto que a Dr.ª Kelly ainda irá realizar o atendimento de 5 pacientes com sintomas gripais e que, portanto, não conseguirá atendê-lo. Ele, chateado e com dor, fala que não sairá da unidade até conversar com a médica, visto que já será a quarta vez que sua consulta será remarcada. Dr.ª Kelly estava no corredor e ouviu Jorge argumentar. Ela vai em direção dele e pergunta se ele não se importa com as pessoas com covid-19. Diz que, se ele esperou 3 meses, pode esperar mais 1 dia, que não vai morrer pela dor. Jorge, constrangido, pede desculpas e sai da unidade. Considerando que, nessa situação hipotética, a atitude de Kelly com o paciente pode ser derivada de sua sobrecarga de trabalho, assinale a alternativa que apresenta em que nível de prevenção se enquadrariam as ações de saúde para evitar burnout médico.",
    "alternativas": [
      {
        "letter": "A",
        "text": "prevenção primária",
        "explanation": "Incorreta: Prevenção primária visa evitar a ocorrência da doença removendo causas e fatores de risco.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "prevenção secundária",
        "explanation": "Incorreta: Prevenção secundária foca no diagnóstico precoce e tratamento imediato de doenças já instaladas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "prevenção terciária",
        "explanation": "Incorreta: Prevenção terciária visa reduzir a incapacidade e reabilitar o paciente com doença crônica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "prevenção quaternária",
        "explanation": "Incorreta: Prevenção quaternária visa evitar o excesso de intervencionismo médico e a iatrogenia.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "prevenção quinquenária",
        "explanation": "Correta: A prevenção quinquenária é um conceito recente que foca na saúde do próprio profissional de saúde, visando prevenir o burnout e garantir a segurança do paciente através do bem-estar do cuidador.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A prevenção quinquenária refere-se às estratégias para prevenir o adoecimento do profissional de saúde (como o burnout), reconhecendo que a sobrecarga do médico compromete a qualidade e a segurança do atendimento.",
    "perolaClinica": "Prevenção Quinquenária: Cuidar de quem cuida para evitar o burnout e erros assistenciais.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Tesser CD. Prevenção Quaternária e Quinquenária.",
      "Gusso & Lopes — Tratado de Medicina de Família e Comunidade"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1659
  },
  {
    "id": "q-sus-sp-2023-090",
    "code": "Q-SUSSP23-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Lei Orgânica da Saúde (Lei 8.080/1990) — Dever do Estado e Corresponsabilidade",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em dezembro de 2022, o governo federal aprovou a Lei n.° 14.510/2022, que autoriza e estabelece regras para a prática de atendimentos de saúde a distância, revogando a Lei n.° 13.989/2020, criada durante a pandemia de covid-19. Em relação à Lei n.° 14.510/2022 e ao atendimento via telessaúde, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ao profissional de saúde são asseguradas a liberdade e a completa independência de decidir sobre a utilização ou não da telessaúde, exceto com relação à primeira consulta ou ao primeiro atendimento e procedimento, que deverão ser realizados de forma presencial.",
        "explanation": "Incorreta: A Lei 14.510/2022 não obriga que a primeira consulta seja presencial; o profissional tem liberdade para decidir a modalidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A telessaúde abrange a prestação remota de serviços relacionados às profissões da área da saúde regulamentadas pelos órgãos competentes do Poder Executivo Federal, excetuando o serviço de pediatria que deverá ocorrer de forma presencial.",
        "explanation": "Incorreta: A telessaúde abrange todas as especialidades regulamentadas, incluindo a pediatria, sem restrições de modalidade remota.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A telemedicina não deve ser utilizada pela estratégia de saúde da família, pois reduz a integralidade do cuidado.",
        "explanation": "Incorreta: A telemedicina pode ser uma ferramenta poderosa na ESF para ampliar o acesso e a resolutividade, não reduzindo a integralidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "O acesso ao serviço de saúde poderá ser facilitado, em determinadas regiões do País, auxiliando a coordenação de cuidado e o acolhimento de forma a aumentar os atendimentos síncronos e assíncronos.",
        "explanation": "Correta: A telessaúde visa ampliar o acesso, facilitar a coordenação do cuidado e permitir atendimentos síncronos (tempo real) e assíncronos.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Caso o paciente se recuse ao atendimento na modalidade telessaúde, não há necessidade de fornecer garantia do atendimento presencial quando solicitado.",
        "explanation": "Incorreta: O paciente tem o direito de recusar o atendimento remoto, e o serviço de saúde deve garantir a alternativa do atendimento presencial.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Lei nº 14.510/2022 regulamentou a telessaúde no Brasil, garantindo autonomia ao profissional e ao paciente, visando ampliar o acesso e a eficiência do sistema de saúde, respeitando o direito ao atendimento presencial se solicitado.",
    "perolaClinica": "Telessaúde: Autonomia profissional, consentimento do paciente e garantia de atendimento presencial se houver recusa ao remoto.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Lei nº 14.510/2022 (Lei da Telessaúde)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1659
  },
  {
    "id": "q-sus-sp-2023-091",
    "code": "Q-SUSSP23-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Saúde Coletiva e Ética Médica",
    "subtema": "Sigilo Médico no Atendimento ao Adolescente e Risco de Suicídio",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma jovem de 17 anos de idade comparece à unidade de saúde, desacompanhada, solicitando consulta de acolhimento. Ela é atendida pela profissional de enfermagem. Durante o atendimento, a jovem relata que está sem menstruar há 2 meses, refere que teve relação sem preservativo apenas uma vez e afirma que está preocupada com a possibilidade de estar grávida, pois tem medo da reação dos seus pais. Acerca desse caso hipotético, entre as alternativas apresentadas a seguir, assinale aquela que apresenta a melhor conduta a ser tomada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar a presença dos responsáveis para continuar a consulta, pois, pelo fato de a adolescente ser menor de idade, o profissional da saúde é obrigado a informar os pais sobre o conteúdo da consulta",
        "explanation": "Incorreta: O adolescente com capacidade de discernimento tem direito ao sigilo e à consulta desacompanhada, exceto em situações de risco de vida ou dano a terceiros.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar teste de gravidez e, se o resultado der positivo, combinar com a adolescente a melhor forma e o melhor momento para contar aos seus responsáveis",
        "explanation": "Correta: O profissional deve respeitar a autonomia da adolescente, realizar o teste e, em caso positivo, trabalhar o vínculo para que ela se sinta segura em comunicar os responsáveis, sem quebra imediata de sigilo.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "solicitar a presença do conselho tutelar e fazer denúncia de provável abuso sexual, devido ao fato de a adolescente ser menor de idade",
        "explanation": "Incorreta: Relação sexual aos 17 anos não configura presunção de abuso sexual por si só (idade de consentimento é 14 anos no Brasil).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "convocar os responsáveis e agendar consulta com o médico, para que os pais sejam informados sobre a probabilidade de gravidez e para que solicite autorização para realização dos exames a fim de comprovar a gravidez e iniciar o pré-natal",
        "explanation": "Incorreta: Convocar responsáveis sem o consentimento da adolescente para informar sobre suspeita de gravidez fere o sigilo médico e a autonomia do menor com discernimento.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar teste de gravidez e, se o resultado der positivo, iniciar o pré-natal; a decisão da adolescente de não contar aos responsáveis deve ser respeitada devido ao sigilo médico",
        "explanation": "Incorreta: Embora o sigilo deva ser respeitado, a conduta ética ideal envolve o aconselhamento para que a família seja integrada ao processo, especialmente no pré-natal de uma menor.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O atendimento ao adolescente baseia-se na avaliação de sua maturidade e discernimento. O sigilo deve ser mantido, inclusive em casos de gravidez, a menos que haja risco grave, devendo o médico estimular o diálogo familiar.",
    "perolaClinica": "Adolescente com discernimento tem direito a sigilo e consulta desacompanhada; quebra de sigilo só em risco de vida.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Estatuto da Criança e do Adolescente (ECA)",
      "Código de Ética Médica",
      "Caderno de Atenção Básica nº 24 (Saúde do Adolescente)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1660
  },
  {
    "id": "q-sus-sp-2023-092",
    "code": "Q-SUSSP23-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia",
    "subtema": "Delineamento de Estudos Epidemiológicos",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Com o objetivo de avaliar o impacto da triagem populacional com o exame de antígeno prostático específico (PSA), visto que o diagnóstico precoce é considerado um fator importante para a efetividade do tratamento do câncer, realizou-se um estudo com dois grupos: grupo A, que realizou a dosagem de PSA por 10 anos, e grupo B, que não realizou o exame de forma periódica. Considerando esse caso hipotético, entre as alternativas apresentadas a seguir, assinale aquela que melhor apresenta, respectivamente, o estudo descrito e a interpretação adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Utilizou-se um ensaio clínico e o exame de PSA não teve efeito na redução da mortalidade por câncer de próstata.",
        "explanation": "Incorreta: O estudo descrito não menciona a alocação aleatória (randomização) de uma intervenção, característica do ensaio clínico.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Utilizou-se um ensaio clínico e o exame de PSA foi eficaz porque aumentou o número de diagnósticos de câncer de próstata.",
        "explanation": "Incorreta: O aumento de diagnósticos não significa eficácia; o desfecho relevante para eficácia de rastreamento é a redução da mortalidade.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Utilizou-se um estudo de coorte e o exame de PSA não teve efeito na redução da mortalidade por câncer de próstata.",
        "explanation": "Correta: Ao acompanhar dois grupos (expostos e não expostos ao rastreamento) ao longo do tempo para observar o desfecho (mortalidade), caracteriza-se um estudo de coorte. Grandes estudos mostram que o PSA tem impacto limitado na mortalidade populacional.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Utilizou-se um estudo de caso-controle e os dados são insuficientes para avaliar a eficácia do exame de PSA.",
        "explanation": "Incorreta: O estudo de caso-controle parte do desfecho (doentes vs não doentes) para olhar o passado, o que não é o caso descrito.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Utilizou-se um estudo de coorte e os dados são insuficientes para avaliar a eficácia do exame de PSA.",
        "explanation": "Incorreta: Embora seja uma coorte, os dados de grandes estudos (como o PLCO) foram suficientes para mostrar a falta de benefício claro na mortalidade global com rastreamento sistemático por PSA.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O delineamento que acompanha grupos ao longo do tempo para observar a incidência de um desfecho é o estudo de coorte. No caso do PSA, o debate sobre rastreamento populacional envolve o alto risco de overdiagnosis sem redução proporcional da mortalidade.",
    "perolaClinica": "Estudo de Coorte: Parte da exposição (ou intervenção) e segue no tempo para observar o desfecho.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Rouquayrol — Epidemiologia & Saúde",
      "Diretrizes da USPSTF sobre Rastreamento de Câncer de Próstata"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1660
  },
  {
    "id": "q-sus-sp-2023-093",
    "code": "Q-SUSSP23-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Indicadores de Saúde",
    "subtema": "Curva de Mortalidade Proporcional de Nelson de Moraes (Questão Anulada)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os coeficientes de mortalidade auxiliam as vigilâncias epidemiológicas, juntamente com municípios, estados e Ministério da Saúde, a adotarem medidas para melhorar a qualidade de serviços e para articular uma ação nacional. Considerando-se os coeficientes de mortalidade, é correto afirmar que",
    "alternativas": [
      {
        "letter": "A",
        "text": "as curvas de Nelson de Moraes são curvas de mortalidade proporcional por idade.",
        "explanation": "Correta: As curvas de Nelson de Moraes representam a mortalidade proporcional por quatro faixas etárias, indicando o nível de saúde de uma população.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "o indicador de Swaroop-Uemura informa a proporção de óbitos de indivíduos com menos de 50 anos de idade residentes em uma determinada localidade.",
        "explanation": "Incorreta: O Índice de Swaroop-Uemura (Razão de Mortalidade Proporcional) informa a proporção de óbitos em indivíduos com 50 anos ou mais.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "estão incluídos, no coeficiente de mortalidade neonatal, óbitos de crianças que faleceram até o 42.° dia completo de vida.",
        "explanation": "Incorreta: O coeficiente de mortalidade neonatal refere-se a óbitos de 0 a 27 dias completos de vida.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "o coeficiente de mortalidade materna informa o risco de óbito materno em uma determinada localidade ao longo de um determinado período e deve ser calculado dividindo-se óbitos de gestantes até 27.° dia após o término da gestação pelo número de nascidos vivos.",
        "explanation": "Incorreta: O coeficiente de mortalidade materna inclui óbitos durante a gestação ou até 42 dias após o parto, divididos pelo número de nascidos vivos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O coeficiente de mortalidade por causas externas não pode incluir óbitos por complicações de assistência médica, uma vez que esse tipo de causa deve ser calculado por coeficiente específico.",
        "explanation": "Incorreta: Causas externas incluem acidentes e violências; complicações de assistência médica são classificadas em capítulos específicos da CID-10, mas podem ser analisadas em conjunto em estudos de segurança do paciente.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Os indicadores de mortalidade são essenciais para o diagnóstico de saúde. Nelson de Moraes utiliza a mortalidade proporcional por idade para classificar o nível de saúde (Tipo I a IV).",
    "perolaClinica": "Nelson de Moraes: Curva em 'J' ou 'L' (baixo nível), 'U' (médio), 'N' ou 'J invertido' (elevado nível).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Indicadores de Saúde no Brasil — RIPSA",
      "Rouquayrol — Epidemiologia & Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1661
  },
  {
    "id": "q-sus-sp-2023-094",
    "code": "Q-SUSSP23-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Apoio Matricial e Saúde Mental na APS",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A atenção primária à saúde (APS) é fundamental para a organização da rede de atenção à saúde (RAS), sendo dividida em atributos essenciais e derivados, descrita por Barbara Starfield, em 1998, \"como oferta de ações de atenção à saúde integradas e acessíveis segundo as necessidades locais, desenvolvidas por equipes multiprofissionais responsáveis por abordar uma ampla maioria das necessidades individuais e coletivas em saúde, desenvolvendo uma parceria sustentada com as pessoas e comunidades\". Em relação aos atributos da APS, assinale a alternativa correta,",
    "alternativas": [
      {
        "letter": "A",
        "text": "A promoção de saúde diz respeito à acessibilidade do serviço de saúde a cada nova necessidade do usuário.",
        "explanation": "Incorreta: A acessibilidade do serviço a cada nova necessidade é o atributo do 'Acesso de Primeiro Contato'.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A longitudinalidade trata da complexidade do entendimento do processo saúde- doença, bem como de ações de promoção, de prevenção, de cura e de reabilitação adequadas ao contexto da APS.",
        "explanation": "Incorreta: A longitudinalidade refere-se ao acompanhamento do paciente ao longo do tempo pela mesma equipe, independentemente da presença de doença.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A universalidade determina o acesso universal à saúde para todos os indivíduos — um atributo essencial da APS.",
        "explanation": "Incorreta: A universalidade é um princípio do SUS; os atributos essenciais da APS segundo Starfield são: Primeiro Contato, Longitudinalidade, Integralidade e Coordenação.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Orientação familiar, orientação comunitária e competência cultural são informações secundárias, derivadas do contexto do indivíduo.",
        "explanation": "Correta: Os atributos derivados da APS são: Orientação Familiar, Orientação Comunitária e Competência Cultural.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Territorialização é um atributo da APS, caracterizada pela organização dos serviços de saúde de acordo com cada território, observando-se as necessidades e as particularidades.",
        "explanation": "Incorreta: A territorialização é uma diretriz operacional da APS no Brasil (PNAB), mas não é listada como um dos atributos clássicos de Starfield.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Barbara Starfield definiu quatro atributos essenciais (Acesso, Longitudinalidade, Integralidade e Coordenação) e três derivados (Orientação Familiar, Comunitária e Competência Cultural) que qualificam a Atenção Primária.",
    "perolaClinica": "Atributos Essenciais: Acesso, Longitudinalidade, Integralidade e Coordenação. Derivados: Família, Comunidade e Cultura.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Starfield B. Atenção Primária: Equilíbrio entre necessidades de saúde, serviços e tecnologia.",
      "PNAB 2017"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1661
  },
  {
    "id": "q-sus-sp-2023-095",
    "code": "Q-SUSSP23-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "subtema": "Diabetes Mellitus Tipo 2 — Farmacoterapia (GLP-1 e iSGLT2)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Uma mulher com 62 anos de idade comparece à unidade básica de saúde, pois tem apresentado piora de um quadro de dispneia ao se esforçar. Relata acompanhar estas comorbidades com especialistas: um quadro de insuficiência cardíaca de fração de ejeção reduzida, hipertensão e diabetes melito tipo II. Apesar do uso de diversas medicações, seus exames recentes apontam que sua hemoglobina glicosilada está 8,2%. Nesse caso hipotético, considerando a prevenção quaternária e os efeitos deletérios da polifarmácia, assinale a alternativa que apresenta a medicação que deve ser suspensa.",
    "alternativas": [
      {
        "letter": "A",
        "text": "empagliflozina",
        "explanation": "Incorreta: Inibidores de SGLT2 (como empagliflozina) são benéficos e indicados na IC com fração de ejeção reduzida.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "dapaglifozina",
        "explanation": "Incorreta: Dapagliflozina é um iSGLT2 com benefício comprovado na redução de hospitalização e mortalidade por IC.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "anlodipino",
        "explanation": "Incorreta: Anlodipino é um bloqueador de canal de cálcio diidropiridínico, geralmente seguro na IC se a pressão não estiver controlada, embora não seja primeira linha.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "digoxina",
        "explanation": "Incorreta: A digoxina pode ser usada para controle de sintomas na ICFER, embora seu papel tenha diminuído com as novas terapias.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "pioglitazona",
        "explanation": "Correta: A pioglitazona (tiazolidinediona) causa retenção hídrica e está contraindicada em pacientes com insuficiência cardíaca (classes NYHA II a IV).",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada pela banca. O conceito médico relevante é que a pioglitazona deve ser evitada em pacientes com insuficiência cardíaca devido ao risco de descompensação por retenção de fluidos. Já os iSGLT2 (dapa/empa) são pilares do tratamento da ICFER.",
    "perolaClinica": "Pioglitazona é contraindicada na Insuficiência Cardíaca devido ao risco de edema e descompensação.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Diretriz Brasileira de Insuficiência Cardíaca — SBC",
      "Diretriz da Sociedade Brasileira de Diabetes (SBD)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1661
  },
  {
    "id": "q-sus-sp-2023-096",
    "code": "Q-SUSSP23-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Políticas de Saúde / SUS",
    "subtema": "Atenção Básica para Populações Específicas (eCR e eSFR)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Segundo o Tratado de Medicina de Família, Gusso e Ceratti (2018) afirmam que \"o território é um espaço limitado político-administrativamente ou por ação de um grupo social, em que se edificam e se exercitam os poderes do Estado e dos cidadãos, de grande importância para a definição de políticas públicas\". Considerando-se essa informação, a avaliação da implantação de uma unidade básica de saúde em uma determinada localidade, realizada pela gestão municipal por meio da delimitação político-administrativa, é característica de",
    "alternativas": [
      {
        "letter": "A",
        "text": "território-área.",
        "explanation": "Incorreta: Território-área é a área de abrangência de uma Unidade Básica de Saúde.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "território-microárea.",
        "explanation": "Incorreta: Território-microárea é a área de atuação de um Agente Comunitário de Saúde (ACS).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "território-moradia.",
        "explanation": "Incorreta: Território-moradia refere-se ao espaço específico da residência das famílias.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "território-distrito.",
        "explanation": "Correta: O território-distrito é uma delimitação político-administrativa utilizada pela gestão municipal para organizar serviços e fluxos em uma região maior da cidade.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "região de saúde.",
        "explanation": "Incorreta: Região de Saúde é um conceito mais amplo, envolvendo um conjunto de municípios limítrofes para planejamento e compartilhamento de serviços de maior complexidade.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A territorialização na APS organiza-se em diferentes escalas: microárea (ACS), área (UBS) e distrito (administrativo municipal). O território-distrito permite a gestão de políticas públicas em uma escala intermediária.",
    "perolaClinica": "Escalas do território: Microárea (ACS) < Área (UBS) < Distrito (Gestão Municipal).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Gusso & Lopes — Tratado de Medicina de Família e Comunidade",
      "PNAB 2017"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1662
  },
  {
    "id": "q-sus-sp-2023-097",
    "code": "Q-SUSSP23-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Saúde Coletiva e Ética Médica",
    "subtema": "Declaração de Óbito (Preenchimento da Parte I e Parte II)",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente internado em UTI após cirurgia neurológica por fratura de base de crânio acompanhado de paralisía facial total devido à briga no bar e à queda com TCE está em seu 5.° dia de internação e evolui com pneumonia nosocomial, sepse e vai a óbito no 11.° dia de internação. Nessa situação hipotética, a declaração de óbito deverá ser assinada por",
    "alternativas": [
      {
        "letter": "A",
        "text": "médico plantonista da UTI.",
        "explanation": "Incorreta: O médico assistente ou plantonista não deve assinar DO em casos de morte por causa externa (violenta ou suspeita).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "médico diarista da UTI.",
        "explanation": "Incorreta: Mesmo em óbito hospitalar, se a causa básica for um evento traumático/violento, a competência é do IML.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "neurocirurgião que realizou a cirurgia",
        "explanation": "Incorreta: O cirurgião não assina a DO se o óbito decorre de um trauma (causa externa).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "médico do SVO.",
        "explanation": "Incorreta: O SVO (Serviço de Verificação de Óbito) destina-se a mortes naturais sem assistência médica ou com causa mal definida.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "médico do IML.",
        "explanation": "Correta: Mortes por causas externas (acidentes, homicídios, suicídios), independentemente do tempo de internação hospitalar, devem ser encaminhadas ao Instituto Médico Legal (IML).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Declaração de Óbito em casos de causas externas (como o TCE por briga relatado) é de competência exclusiva do perito do IML, mesmo que o óbito ocorra após dias de internação hospitalar.",
    "perolaClinica": "Morte por causa externa (trauma/violência) = IML. Morte natural sem assistência = SVO.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Manual de Preenchimento da Declaração de Óbito — Ministério da Saúde",
      "Resolução CFM nº 1.779/2005"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1662
  },
  {
    "id": "q-sus-sp-2023-098",
    "code": "Q-SUSSP23-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Hanseníase — Esquema PQT-U e Efeitos Adversos da Clofazimina",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Um paciente aparece na unidade básica de saúde em sua consulta agendada. Durante a consulta, mostra-se angustiado e relata que foi diversas vezes ao pronto- socorro e que ninguém resolve seu problema. Mostra manchas em sua pele e diz que já \"passou de tudo\" e nada melhora sua condição. Diz que está há 1 ano nessa luta. Ao examinar as lesões, nota-se três máculas hipocrômicas, mal delimitadas, localizadas no tronco e na nádega direita. Ao realizar o teste de sensibilidade, nota-se hipoestesia nas lesões. Na palpação dos nervos periféricos, não há qualquer espessamento neural. Nesse caso hipotético, com base nas recomendações atuais do Ministério da Saúde, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O tratamento preconizado terá duração prevista de 6 meses com dapsona 100 mg/dia (autoadministrada) + rifampicina 600 mg/mês (dose supervisionada).",
        "explanation": "Incorreta: O esquema Paucibacilar (PB) agora também inclui a clofazimina no protocolo unificado (PQT-U).",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "O tratamento preconizado terá duração prevista de 6 meses com dapsona 100 mg/dia (autoadministrada) + clofazimina 50 mg/dia (autoadministrada) e 300 mg/mês (supervisionada) + rifampicina 600 mg/mês (supervisionada).",
        "explanation": "Incorreta: Embora o tratamento PQT-U utilize as três drogas, a classificação e duração dependem do número de lesões e nervos.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "O tratamento preconizado terá duração prevista de 3 meses com dapsona 100 mg/dia (autoadministrada) + clofazinima 50 mg/dia (autoadministrada) e 300 mg/mês (supervisionada) + rifampicina 600 mg/mês (supervisionada).",
        "explanation": "Incorreta: A duração mínima para casos paucibacilares é de 6 meses (6 doses supervisionadas).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "É obrigatório o encaminhamento para o especialista para a realização da biópsia cutânea e para diagnóstico definitivo do paciente.",
        "explanation": "Incorreta: O diagnóstico de hanseníase é eminentemente clínico e deve ser realizado na APS; o encaminhamento não é obrigatório para o diagnóstico.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "O paciente é classificado como multibacilar, pois possui três lesões ou mais, devendo ser tratado com dapsona 100 mg/dia (autoadministrada) + clofazimina 50 mg/dia (autoadministrada) e 300 mg/mês (supervisionada) + rifampicina 600 mg/mês (supervisionada), por 12 meses.",
        "explanation": "Incorreta: O paciente tem 3 lesões e nenhum nervo espessado, sendo classificado como Paucibacilar (até 5 lesões).",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "Questão anulada. O paciente apresenta quadro clínico compatível com Hanseníase Paucibacilar (3 lesões hipocrômicas com alteração de sensibilidade e sem nervos espessados). O tratamento atual segue o esquema PQT-U (Rifampicina, Dapsona e Clofazimina) por 6 meses para PB e 12 meses para MB.",
    "perolaClinica": "Hanseníase: Diagnóstico clínico. PB (até 5 lesões) trata por 6 meses; MB (> 5 lesões ou > 1 nervo) trata por 12 meses.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Guia Prático de Hanseníase — Ministério da Saúde",
      "Protocolo PQT-U (Poliquimioterapia Única)"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1662
  },
  {
    "id": "q-sus-sp-2023-099",
    "code": "Q-SUSSP23-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia",
    "subtema": "Atendimento à Vítima de Violência Sexual",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM) reflete o compromisso com a implementação de ações de saúde que contribuam para a garantia dos direitos humanos das mulheres e para reduzir a morbimortalidade por causas preveníveis e evitáveis. Acerca dessa política, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Essa política contempla apenas mulheres acima dos 14 anos de idade.",
        "explanation": "Incorreta: A PNAISM contempla mulheres em todas as fases do ciclo vital, desde a infância até a senescência.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Ações não farmacológicas podem ser utilizadas no climatério a fim de amenizar os sintomas dessa doença.",
        "explanation": "Incorreta: O climatério não é considerado uma doença, mas uma fase fisiológica da vida da mulher.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Mulheres em idade reprodutiva constituem a maior parte da população feminina, conformando um segmento social importante para a elaboração das políticas de saúde.",
        "explanation": "Correta: Mulheres em idade reprodutiva (10 a 49 anos) representam um contingente expressivo e são foco central de diversas ações de saúde reprodutiva e prevenção.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "O aborto, na prática, pode ser causa de discriminação de mulheres em serviços de saúde, havendo intensa orientação no sentindo de evitar que o aborto se repita.",
        "explanation": "Incorreta: O aborto deve ser tratado com acolhimento e humanização, visando reduzir riscos e garantir direitos, não sendo a 'evitação da repetição' o único foco, mas sim a saúde integral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Mulheres nas grandes cidades têm acesso semelhante à saúde reprodutiva as que vivem na zona rural, devido à transição demográfica e às migrações.",
        "explanation": "Incorreta: Persistem desigualdades regionais e sociais significativas no acesso à saúde reprodutiva entre áreas urbanas e rurais no Brasil.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM) busca a integralidade do cuidado, reconhecendo as especificidades de cada fase da vida e os direitos sexuais e reprodutivos como direitos humanos.",
    "perolaClinica": "PNAISM: Integralidade do cuidado à mulher em todas as fases da vida, com foco em direitos e equidade.",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Política Nacional de Atenção Integral à Saúde da Mulher (PNAISM) — Ministério da Saúde"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1663
  },
  {
    "id": "q-sus-sp-2023-100",
    "code": "Q-SUSSP23-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Atenção Primária à Saúde",
    "subtema": "Rastreamento e Interpretação de Exames na UBS",
    "banca": "SUS-SP",
    "instituicao": "SUS-SP",
    "estado": "SP",
    "regiao": "Sudeste",
    "ano": 2023,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O Método Clínico Centrado na Pessoa (MCCP) surgiu da necessidade de um atendimento mais integral, que contemplasse as preocupações e as vivências relacionadas à saúde e às doenças. É um método específico que utiliza uma abordagem biopsicossocial e centrada na pessoa. O MCCP deve propor a integração entre os aspectos relacionados a doença e à perspectiva da pessoa doente, garantindo as particularidades e as preferências pessoais, de forma a elaborar um plano terapêutico que englobe esses fatores. Considerando esse raciocínio, levando em conta a atualização realizada por Moira Stewart em 2017, assinale a alternativa correta,",
    "alternativas": [
      {
        "letter": "A",
        "text": "O terceiro componente do método visa a reforçar a relação médico-pessoa, ponto imprescindível para que as medidas terapêuticas pactuadas sejam adotadas pelo paciente.",
        "explanation": "Incorreta: O terceiro componente é 'Pactuando metas e prioridades' (elaboração do plano conjunto). O fortalecimento da relação é o quarto componente.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Atualmente, o MCCP é composto por 6 elementos. O último deles, \"\"sendo realista\"\", volta-se para a avaliação do contexto em que o paciente está incluído. O médico, ao encarar essa realidade, poderá ofertar cuidados mais adequados, levando em consideração todos os fatores que fazem parte da vida do indivíduo e da comunidade.",
        "explanation": "Incorreta: O MCCP atualizado por Stewart possui 4 componentes principais, não 6. 'Sendo realista' é o terceiro componente.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O acrônimo SIFE faz parte do segundo elemento do MCCP e objetiva avaliar questões como o quanto o problema de saúde vivenciado pela pessoa afeta a funcionalidade dela, excetuando a expectativa que faz parte do terceiro componente.",
        "explanation": "Incorreta: O acrônimo SIFE (Sentimentos, Ideias, Funcionalidade e Expectativas) faz parte do primeiro componente (Explorando a saúde, a doença e a experiência da doença).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "O MCCP é uma ferramenta exclusiva da atenção primária, não sendo possível utilizá-la em outros contextos clínicos.",
        "explanation": "Incorreta: O MCCP pode e deve ser aplicado em qualquer nível de atenção à saúde, não sendo exclusivo da APS.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "\"\"Explorando a saúde, a doença e a experiência da doença\"\" é o componente do método que visa a compreender como o paciente percebe e entende seu adoecimento, abarcando toda a subjetividade desse processo, e a entender suas percepções de saúde e sua experiência única da doença, voltando-se mais á experiência da doença \"\"illness\"\" do que para doença em si \"\"disease\"\".",
        "explanation": "Correta: O primeiro componente foca na distinção entre 'disease' (patologia biológica) e 'illness' (experiência subjetiva do paciente), buscando entender como o indivíduo vivencia seu estado de saúde.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1150,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "O Método Clínico Centrado na Pessoa (MCCP) organiza o atendimento em quatro componentes: 1. Explorando a saúde, a doença e a experiência da doença; 2. Entendendo a pessoa como um todo; 3. Elaborando um plano conjunto; 4. Fortalecendo a relação médico-pessoa.",
    "perolaClinica": "MCCP: SIFE (Sentimentos, Ideias, Funcionalidade, Expectativas) ajuda a explorar a 'illness' (experiência da doença).",
    "referencias": [
      "SUS-SP — Processo Seletivo de Residência Médica 2023 (Gabarito Oficial)",
      "Stewart M. Medicina Centrada na Pessoa.",
      "Gusso & Lopes — Tratado de Medicina de Família e Comunidade"
    ],
    "sourceBatch": "r1-2023-pack:sus-sp-2023",
    "importedAt": "2026-11-26T00:17:14Z",
    "sourcePdfPage": 1663
  }
];
