import type { MedicalQuestion } from '../types/medical';

/**
 * Prova ENAMED 2025 — Caderno 01 (Outubro/2025) — 90 questões válidas (10 anuladas no gabarito definitivo omitidas).
 * Gerado a partir de data/provas/enamed-2025.md / data/provas/enamed-2025.jsonl.
 */
export const ENAMED_2025_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-enamed-2025-001",
    "code": "Q-ENAMED25-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-insuficiencia-cardiaca",
    "tags": [
      "insuficiencia-cardiaca",
      "fe-reduzida",
      "espironolactona",
      "bnp"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 58 anos, com diagnóstico de hipertensão arterial sistêmica (HAS) e em tratamento irregular, é encaminhada ao ambulatório de clínica médica de atenção secundária. Queixa-se de fadiga e dispneia aos esforços, com piora progressiva. Ao exame físico, é observado ritmo cardíaco regular em 4 tempos (B3 + B4), sem sopros no precórdio, mas com crépitos em bases pulmonares; pressão arterial: 148 x 90 mmHg. Ecocardiograma transtorácico evidencia hipertrofia ventricular esquerda concêntrica, associada com fração de ejeção de 38% (por Simpson). Exames laboratoriais normais, salvo pela elevação sérica de peptídeo natriurético tipo B (BNP). Para melhorar o controle da HAS e o prognóstico da paciente, o tratamento com inibidor da enzima conversora de angiotensina foi mantido, e o especialista optou por associar determinado fármaco, devido ao impacto positivo no prognóstico de sobrevida dessa paciente.\n\nO fármaco introduzido no tratamento da paciente foi",
    "alternativas": [
      {
        "letter": "A",
        "text": "espironolactona.",
        "explanation": "A alternativa **A** está correta. A paciente apresenta insuficiência cardíaca com fração de ejeção reduzida (ICFER, FE 38% ≤ 40%), sintomática (NYHA II–III). Conforme a Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (SBC) e a diretriz da AHA/ACC/HFSA, os antagonistas dos receptores mineralocorticoides (como a espironolactona) integram a terapia quádrupla modificadora de prognóstico na ICFER, reduzindo mortalidade e hospitalizações.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "clortalidona.",
        "explanation": "Incorreta: A clortalidona (diurético tiazídico) auxilia no controle pressórico, mas não tem impacto comprovado na redução de mortalidade na ICFER.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "hidralazina.",
        "explanation": "Incorreta: A hidralazina isolada não reduz mortalidade; sua associação com nitrato (dinitrato de isossorbida) tem indicação específica em pacientes negros sintomáticos ou intolerantes a IECA/BRA.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "clonidina.",
        "explanation": "Incorreta: A clonidina (agonista alfa-2 central) não melhora sobrevida na ICFER e pode inclusive associar-se a pior desfecho em insuficiência cardíaca.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. A paciente apresenta insuficiência cardíaca com fração de ejeção reduzida (ICFER, FE 38% ≤ 40%), sintomática (NYHA II–III). Conforme a Diretriz Brasileira de Insuficiência Cardíaca Crônica e Aguda (SBC) e a diretriz da AHA/ACC/HFSA, os antagonistas dos receptores mineralocorticoides (como a espironolactona) integram a terapia quádrupla modificadora de prognóstico na ICFER, reduzindo mortalidade e hospitalizações.\n- **B) Incorreta:** A clortalidona (diurético tiazídico) auxilia no controle pressórico, mas não tem impacto comprovado na redução de mortalidade na ICFER.\n- **C) Incorreta:** A hidralazina isolada não reduz mortalidade; sua associação com nitrato (dinitrato de isossorbida) tem indicação específica em pacientes negros sintomáticos ou intolerantes a IECA/BRA.\n- **D) Incorreta:** A clonidina (agonista alfa-2 central) não melhora sobrevida na ICFER e pode inclusive associar-se a pior desfecho em insuficiência cardíaca.",
    "perolaClinica": "A paciente apresenta insuficiência cardíaca com fração de ejeção reduzida (ICFER, FE 38% ≤ 40%), sintomática (NYHA II–III).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Indicação de antagonista mineralocorticoide na insuficiência cardíaca com fração de ejeção reduzida (ICFER) e HAS.",
      "raciocinioChave": "A paciente tem ICFER sintomática (FE 38%, B3, congestão pulmonar e BNP elevado) associada à HAS. Além de IECA e betabloqueador, a espironolactona compõe a terapia quádrupla que controla a pressão arterial e reduz mortalidade e hospitalizações.",
      "armadilhaBanca": "Confundir controle pressórico sintomático com redução de mortalidade na ICFER, escolhendo tiazídicos ou simpaticolíticos em vez da terapia quádrupla."
    },
    "mapaDistratores": {
      "B": "A clortalidona auxilia no controle da pressão arterial e congestão leve, mas não possui benefício comprovado na redução de mortalidade na ICFER.",
      "C": "A hidralazina isolada não modifica sobrevida; sua associação com nitrato tem indicação restrita a pacientes negros sintomáticos ou intolerantes a IECA/BRA.",
      "D": "A clonidina não reduz mortalidade na insuficiência cardíaca com fração de ejeção reduzida e pode associar-se a piores desfechos clínicos."
    }
  },
  {
    "id": "q-enamed-2025-003",
    "code": "Q-ENAMED25-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": [
      "trauma-cranioencefalico",
      "tce-leve",
      "tomografia-de-cranio",
      "coluna-cervical",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 45 anos foi encontrado inconsciente por familiares junto a uma escada de sua casa. Familiares o conduziram em carro próprio, sem medidas-padrão de atendimento pré-hospitalar. Não sabem por quanto tempo ficou desacordado e nem sobre o histórico de saúde. Quando deu entrada no pronto-socorro, encontrava-se inconsciente, com equimose e escoriações na região orbital e palpebral direita, além de escoriações na região cervical posterior e em membros à direita. Não apresentava resposta ao comando verbal, mas respirava espontaneamente com frequência normal. Pressão arterial de 140 x 90 mmHg e pupilas isocóricas. Durante a avaliação, abriu os olhos e começou a se mexer, ainda sem responder a questões ou comandos. Após 30 minutos começou a responder, mas informava não se lembrar de ter caído da escada.\n\nConsiderando o quadro, a conduta adequada é",
    "alternativas": [
      {
        "letter": "A",
        "text": "tomografia de crânio, face e coluna cervical; radiografia de membros; manter o paciente em observação por 12 horas.",
        "explanation": "A alternativa **A** está correta. Trata-se de paciente vítima de queda com perda de consciência prolongada, amnésia do evento, rebaixamento transitório do nível de consciência e sinais de trauma craniofacial e cervical posterior sem imobilização pré-hospitalar. Segundo o ATLS (10ª edição) e os critérios de trauma cranioencefálico e cervical (Canadian CT Head Rule / NEXUS), há indicação formal de tomografia computadorizada (TC) de crânio, face e coluna cervical (exame padrão-ouro para afastar lesões intracranianas, fraturas faciais e lesão raquimedular), radiografia dos membros acometidos e observação hospitalar por pelo menos 12 horas.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "radiografia de crânio, coluna cervical e membros em duas posições; internar o paciente para observação.",
        "explanation": "Incorreta: Radiografia simples de crânio é proscrita para avaliação de TCE por baixíssima sensibilidade para lesões intracranianas, e a TC de coluna cervical é superior à radiografia em pacientes com mecanismo grave/alteração de consciência.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "tomografia de crânio, face e radiografia de membros; liberar o paciente para observação domiciliar.",
        "explanation": "Incorreta: Faltou avaliar a coluna cervical (trauma cervical posterior sem colar) e não é seguro liberar imediatamente um paciente que cursou com perda de consciência e amnésia pós-traumática.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "radiografia de crânio e face; radiografia de membros; internar o paciente por 24 horas.",
        "explanation": "Incorreta: Radiografia de crânio e face não substitui a TC na suspeita de TCE e trauma de face.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Trata-se de paciente vítima de queda com perda de consciência prolongada, amnésia do evento, rebaixamento transitório do nível de consciência e sinais de trauma craniofacial e cervical posterior sem imobilização pré-hospitalar. Segundo o ATLS (10ª edição) e os critérios de trauma cranioencefálico e cervical (Canadian CT Head Rule / NEXUS), há indicação formal de tomografia computadorizada (TC) de crânio, face e coluna cervical (exame padrão-ouro para afastar lesões intracranianas, fraturas faciais e lesão raquimedular), radiografia dos membros acometidos e observação hospitalar por pelo menos 12 horas.\n- **B) Incorreta:** Radiografia simples de crânio é proscrita para avaliação de TCE por baixíssima sensibilidade para lesões intracranianas, e a TC de coluna cervical é superior à radiografia em pacientes com mecanismo grave/alteração de consciência.\n- **C) Incorreta:** Faltou avaliar a coluna cervical (trauma cervical posterior sem colar) e não é seguro liberar imediatamente um paciente que cursou com perda de consciência e amnésia pós-traumática.\n- **D) Incorreta:** Radiografia de crânio e face não substitui a TC na suspeita de TCE e trauma de face.",
    "perolaClinica": "Trata-se de paciente vítima de queda com perda de consciência prolongada, amnésia do evento, rebaixamento transitório do nível de consciência e sinais de trauma craniofacial e cervical posterior sem imobilização pré-hospitalar.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Indicação de tomografia computadorizada e período de observação no trauma cranioencefálico e cervical fechado.",
      "raciocinioChave": "A vítima sofreu queda sem atendimento pré-hospitalar, cursando com rebaixamento transitório de consciência, escoriações craniofaciais e cervicais posteriores. Pelo ATLS, impõe-se TC de crânio, face e coluna cervical (além de radiografia de membros) com observação mínima de 12 horas.",
      "armadilhaBanca": "Optar por radiografia simples de crânio/coluna cervical ou liberar precocemente paciente com perda de consciência prolongada e trauma sem colar cervical."
    },
    "mapaDistratores": {
      "B": "A radiografia simples de crânio tem baixíssima sensibilidade para lesões intracranianas e a TC cervical é superior à radiografia em mecanismos graves com alteração de consciência.",
      "C": "Omite a avaliação tomográfica da coluna cervical diante de trauma posterior sem imobilização e libera precocemente paciente com perda de consciência e amnésia.",
      "D": "A radiografia simples de crânio e face é inadequada para excluir hemorragias intracranianas ou fraturas faciais complexas no contexto de TCE."
    }
  },
  {
    "id": "q-enamed-2025-004",
    "code": "Q-ENAMED25-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Endometriose e Adenomiose",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-endometriose-e-adenomiose",
    "tags": [
      "endometriose",
      "dismenorreia",
      "dispareunia-de-profundidade",
      "dor-pelvica-cronica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 30 anos procurou consultório de ginecologia relatando fadiga, dismenorreia progressiva e dispareunia de profundidade. Toque vaginal: útero de volume normal, retroversofletido, dor à mobilização do colo.\n\nCom base nessas informações, a principal hipótese diagnóstica é",
    "alternativas": [
      {
        "letter": "A",
        "text": "doença inflamatória pélvica.",
        "explanation": "Incorreta: A doença inflamatória pélvica (DIP) cursa tipicamente com quadro agudo/subagudo de dor pélvica, febre, corrimento mucopurulento cervical e dor à palpação anexial.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "miomatose uterina.",
        "explanation": "Incorreta: A miomatose uterina manifesta-se com sangramento uterino anormal (hipermenorreia) e aumento do volume uterino ao toque, e não com útero de volume normal e dispareunia de profundidade isolada.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "cisto hemorrágico.",
        "explanation": "Incorreta: Cisto ovariano hemorrágico provoca dor pélvica aguda unilateral súbita, sem caráter progressivo cíclico típico.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "endometriose.",
        "explanation": "A alternativa **D** está correta. A tríade clínica clássica de dismenorreia progressiva, dispareunia de profundidade e dor pélvica crônica/fadiga em mulher em idade reprodutiva, associada ao achado de útero retroversofletido e dor à mobilização cervical no exame ginecológico, aponta fortemente para endometriose, conforme o Protocolo FEBRASGO e a diretriz da ESHRE.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. A tríade clínica clássica de dismenorreia progressiva, dispareunia de profundidade e dor pélvica crônica/fadiga em mulher em idade reprodutiva, associada ao achado de útero retroversofletido e dor à mobilização cervical no exame ginecológico, aponta fortemente para endometriose, conforme o Protocolo FEBRASGO e a diretriz da ESHRE.\n- **A) Incorreta:** A doença inflamatória pélvica (DIP) cursa tipicamente com quadro agudo/subagudo de dor pélvica, febre, corrimento mucopurulento cervical e dor à palpação anexial.\n- **B) Incorreta:** A miomatose uterina manifesta-se com sangramento uterino anormal (hipermenorreia) e aumento do volume uterino ao toque, e não com útero de volume normal e dispareunia de profundidade isolada.\n- **C) Incorreta:** Cisto ovariano hemorrágico provoca dor pélvica aguda unilateral súbita, sem caráter progressivo cíclico típico.",
    "perolaClinica": "A tríade clínica clássica de dismenorreia progressiva, dispareunia de profundidade e dor pélvica crônica/fadiga em mulher em idade reprodutiva, associada ao achado de útero retroversofletido e dor à mobilização cervical no exame ginecológico, aponta fortemente para endometriose, conforme o Protocolo FEBRASGO e a diretriz da ESHRE.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de endometriose pela tríade dolorosa clássica e achados ao exame ginecológico.",
      "raciocinioChave": "A associação de dismenorreia progressiva, dispareunia de profundidade e fadiga em idade reprodutiva, somada a útero retroversofletido doloroso à mobilização cervical, é típica de endometriose. A cronicidade cíclica e a ausência de febre diferenciam o quadro de causas infecciosas agudas.",
      "armadilhaBanca": "Confundir a dor à mobilização do colo na endometriose pélvica com doença inflamatória pélvica aguda, que cursa com febre e sinais infecciosos."
    },
    "mapaDistratores": {
      "A": "A doença inflamatória pélvica manifesta-se de forma aguda ou subaguda com febre, corrimento mucopurulento cervical e dor à palpação anexial, não como dismenorreia progressiva crônica.",
      "B": "A miomatose uterina causa tipicamente sangramento uterino anormal e aumento do volume uterino ao toque, divergindo do útero de tamanho normal encontrado.",
      "C": "O cisto ovariano hemorrágico provoca dor pélvica aguda de início súbito e unilateral, sem evolução cíclica progressiva nem dispareunia crônica."
    }
  },
  {
    "id": "q-enamed-2025-005",
    "code": "Q-ENAMED25-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Micoses Sistêmicas Endêmicas",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-micoses-sistemicas-endemicas",
    "tags": [
      "esporotricose",
      "itraconazol",
      "corpos-asteroides",
      "arranhadura-de-gato"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 28 anos, estudante universitário, residente em zona urbana, comparece à Unidade Básica de Saúde (UBS) referindo aparecimento de lesão cutânea em região dorsal da mão, cerca de 1 mês após ter sofrido arranhadura de gato de rua. A lesão apresenta úlceras com presença de crostas além de nodulações próximas. Foi submetido à biópsia da lesão cutânea e cultura de material. Observou-se dermatite granulomatosa difusa, presença de corpos asteroides e material eosinofílico ao redor de células características.\n\nQual é a principal hipótese diagnóstica e o respectivo tratamento para esse caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Furunculose; cefalexina por 7 dias.",
        "explanation": "Incorreta: Furunculose é infecção bacteriana aguda por *Staphylococcus aureus*, sem corpos asteroides ou evolução subaguda granulomatosa pós-arranhadura felina.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Herpes-zóster; aciclovir por 10 dias.",
        "explanation": "Incorreta: Herpes-zóster apresenta vesículas agrupadas em base eritematosa seguindo dermátomo unilateral.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Esporotricose; itraconazol por 120 dias.",
        "explanation": "A alternativa **C** está correta. [REVISAR: questão acompanhada de fotografia clínica de lesão ulcerocrostosa e nodular em dorso da mão no caderno original] A história epidemiológica de arranhadura por gato em área urbana, evoluindo com lesão ulcerada e nódulos adjacentes (padrão linfocutâneo/cutâneo-fixo) e histopatologia com dermatite granulomatosa e corpos asteroides (fenômeno de Splendore-Hoeppli) é clássica de esporotricose (*Sporothrix* spp.). O tratamento de escolha segundo o Ministério da Saúde é o itraconazol oral por 3 a 6 meses (cerca de 120 dias, até cura clínica completa).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Paracoccidioidomicose; anfotericina B por 30 dias.",
        "explanation": "Incorreta: Paracoccidioidomicose acomete classicamente trabalhadores rurais com lesões mucosas/pulmonares (\"estomatite moriforme\") e tem aspecto em \"roda de leme\" na microscopia, sendo tratada inicialmente com itraconazol nas formas leves/moderadas.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. [REVISAR: questão acompanhada de fotografia clínica de lesão ulcerocrostosa e nodular em dorso da mão no caderno original] A história epidemiológica de arranhadura por gato em área urbana, evoluindo com lesão ulcerada e nódulos adjacentes (padrão linfocutâneo/cutâneo-fixo) e histopatologia com dermatite granulomatosa e corpos asteroides (fenômeno de Splendore-Hoeppli) é clássica de esporotricose (*Sporothrix* spp.). O tratamento de escolha segundo o Ministério da Saúde é o itraconazol oral por 3 a 6 meses (cerca de 120 dias, até cura clínica completa).\n- **A) Incorreta:** Furunculose é infecção bacteriana aguda por *Staphylococcus aureus*, sem corpos asteroides ou evolução subaguda granulomatosa pós-arranhadura felina.\n- **B) Incorreta:** Herpes-zóster apresenta vesículas agrupadas em base eritematosa seguindo dermátomo unilateral.\n- **D) Incorreta:** Paracoccidioidomicose acomete classicamente trabalhadores rurais com lesões mucosas/pulmonares (\"estomatite moriforme\") e tem aspecto em \"roda de leme\" na microscopia, sendo tratada inicialmente com itraconazol nas formas leves/moderadas.",
    "perolaClinica": "A história epidemiológica de arranhadura por gato em área urbana, evoluindo com lesão ulcerada e nódulos adjacentes (padrão linfocutâneo/cutâneo-fixo) e histopatologia com dermatite granulomatosa e corpos asteroides (fenômeno de Splendore-Hoeppli) é clássica de esporotricose (*Sporothrix* spp.).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico-histopatológico e tratamento de primeira linha da esporotricose linfocutânea urbana.",
      "raciocinioChave": "A úlcera crostosa com nódulos adjacentes no dorso da mão após arranhadura de gato em área urbana, associada a dermatite granulomatosa com corpos asteroides, fecha o diagnóstico de esporotricose. O tratamento padrão para a forma cutânea/linfocutânea é itraconazol oral prolongado.",
      "armadilhaBanca": "Confundir micoses subcutâneas pós-trauma com infecções bacterianas comuns ou paracoccidioidomicose, cujo perfil epidemiológico e tratamento diferem."
    },
    "mapaDistratores": {
      "A": "A furunculose é uma infecção bacteriana estafilocócica aguda que não cursa com evolução subaguda granulomatosa nem com corpos asteroides pós-arranhadura felina.",
      "B": "O herpes-zóster apresenta vesículas agrupadas sobre base eritematosa seguindo trajeto de dermátomo unilateral, sem nódulos granulomatosos.",
      "D": "A paracoccidioidomicose predomina em trabalhadores rurais com lesões pulmonares/mucosas e leveduras em roda de leme, além de usar itraconazol nas formas leves."
    }
  },
  {
    "id": "q-enamed-2025-006",
    "code": "Q-ENAMED25-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "niveis-de-atencao",
      "niveis-de-prevencao",
      "prevencao-secundaria",
      "atencao-secundaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Observe o encaminhamento realizado por um médico de família.\n“À cardiologia,\nEncaminho o Sr. J. L. S., de 56 anos, com diagnóstico de cardiopatia isquêmica, que sofreu um infarto agudo do miocárdio há 3 meses. Tem orientação para o uso de antiagregantes plaquetários, mas tem história de úlcera péptica e teve reação alérgica ao clopidogrel e à ticlopidina. Desta forma, solicito orientação quanto à conduta preventiva.”\n\nAo ser assistido pelo cardiologista, o paciente será atendido em qual nível de atenção e receberá que tipo de prevenção, respectivamente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Primário; secundário.",
        "explanation": "Incorreta: O cardiologista em ambulatório especializado atua na atenção secundária, não na atenção primária (UBS/ESF).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Secundário; secundário.",
        "explanation": "A alternativa **B** está correta. O atendimento ambulatorial especializado (cardiologista) corresponde ao nível **secundário** de atenção à saúde no SUS (atenção especializada ambulatorial). Além disso, a instituição de antiagregação plaquetária após infarto agudo do miocárdio para evitar novos eventos isquêmicos em doença já estabelecida configura **prevenção secundária** (ou controle de progressão/recorrência clínica precoce na classificação clássica adotada pelo exame).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Terciário; terciário.",
        "explanation": "Incorreta: O nível terciário refere-se a internações hospitalares de alta complexidade e procedimentos invasivos; embora reabilitação pós-IAM possa envolver prevenção terciária em alguns autores, o atendimento ambulatorial especializado é secundário.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Quaternário; terciário.",
        "explanation": "Incorreta: Não existe \"nível quaternário\" de atenção no SUS (prevenção quaternária refere-se a evitar iatrogenia/sobremedicalização).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O atendimento ambulatorial especializado (cardiologista) corresponde ao nível **secundário** de atenção à saúde no SUS (atenção especializada ambulatorial). Além disso, a instituição de antiagregação plaquetária após infarto agudo do miocárdio para evitar novos eventos isquêmicos em doença já estabelecida configura **prevenção secundária** (ou controle de progressão/recorrência clínica precoce na classificação clássica adotada pelo exame).\n- **A) Incorreta:** O cardiologista em ambulatório especializado atua na atenção secundária, não na atenção primária (UBS/ESF).\n- **C) Incorreta:** O nível terciário refere-se a internações hospitalares de alta complexidade e procedimentos invasivos; embora reabilitação pós-IAM possa envolver prevenção terciária em alguns autores, o atendimento ambulatorial especializado é secundário.\n- **D) Incorreta:** Não existe \"nível quaternário\" de atenção no SUS (prevenção quaternária refere-se a evitar iatrogenia/sobremedicalização).",
    "perolaClinica": "O atendimento ambulatorial especializado (cardiologista) corresponde ao nível **secundário** de atenção à saúde no SUS (atenção especializada ambulatorial).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Níveis de atenção à saúde no SUS e classificação de prevenção secundária na reabilitação pós-infarto.",
      "raciocinioChave": "O encaminhamento da UBS para consulta ambulatorial com cardiologista situa o atendimento no nível secundário de atenção. A prescrição de antiagregante plaquetário após IAM já estabelecido visa prevenir recorrência isquêmica, caracterizando prevenção secundária.",
      "armadilhaBanca": "Confundir o nível de atenção ambulatorial especializado com atenção terciária ou rotular como prevenção quaternária a prevenção secundária pós-IAM."
    },
    "mapaDistratores": {
      "A": "O cardiologista em ambulatório especializado atua no nível secundário de atenção à saúde, e não na atenção primária prestada pela equipe da UBS.",
      "C": "O nível terciário compreende atenção hospitalar de alta complexidade e procedimentos invasivos, não correspondendo à consulta ambulatorial especializada.",
      "D": "Não há nível quaternário de atenção na rede do SUS, pois o termo prevenção quaternária refere-se à proteção contra intervenções médicas excessivas ou iatrogenia."
    }
  },
  {
    "id": "q-enamed-2025-008",
    "code": "Q-ENAMED25-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Artrite Reumatoide",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-artrite-reumatoide",
    "tags": [
      "artrite-reumatoide",
      "fator-reumatoide",
      "metotrexato",
      "rigidez-matinal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 20 anos procura atendimento médico no ambulatório de clínica médica de referência devido a quadro iniciado há 3 meses, com dor e edema articular acometendo articulações das mãos (interfalangeanas proximais, metacarpofalangeanas e punhos), assim como cotovelos, joelhos e tornozelos. Relata rigidez matinal que persiste por mais de 2 horas. O exame físico confirma dor e edema nas articulações descritas, além de mucosas hipocoradas (++/4+), sem outras alterações.\n\nA hipótese diagnóstica a ser considerada, o achado laboratorial esperado e a primeira linha de tratamento indicada são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "esclerose sistêmica; níveis elevados de creatina quinase; prednisona.",
        "explanation": "Incorreta: Esclerose sistêmica cursa com espessamento cutâneo (esclerodactilia) e fenômeno de Raynaud; CPK elevada sugere miopatia inflamatória.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "artrite reumatoide; pesquisa de fator reumatoide (FR) positivo; metotrexato.",
        "explanation": "A alternativa **B** está correta. Poliartrite simétrica crônica (> 6 semanas) acometendo pequenas articulações das mãos (IFP, MCF, punhos) e grandes articulações, com rigidez matinal prolongada (> 1 hora) e anemia de doença crônica, é o quadro típico de artrite reumatoide (AR). Segundo o PCDT de Artrite Reumatoide (Ministério da Saúde) e as diretrizes da SBR/EULAR, espera-se fator reumatoide (FR) e/ou anti-CCP positivos, e o fármaco modificador do curso da doença (MMCD) de primeira escolha é o **metotrexato**.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "lúpus eritematoso sistêmico; FAN com padrão nuclear pontilhado fino denso; cloroquina.",
        "explanation": "Incorreta: Padrão nuclear pontilhado fino denso no FAN geralmente ocorre em indivíduos saudáveis (anti-DFS70), não sendo típico de LES, além de não haver outros critérios sistêmicos de LES.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "doença mista do tecido conjuntivo; FAN com padrão nuclear pontilhado fino; azatioprina.",
        "explanation": "Incorreta: Doença mista do tecido conjuntivo cursa tipicamente com anti-RNP em altos títulos, fenômeno de Raynaud e dedos em salsicha.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Poliartrite simétrica crônica (> 6 semanas) acometendo pequenas articulações das mãos (IFP, MCF, punhos) e grandes articulações, com rigidez matinal prolongada (> 1 hora) e anemia de doença crônica, é o quadro típico de artrite reumatoide (AR). Segundo o PCDT de Artrite Reumatoide (Ministério da Saúde) e as diretrizes da SBR/EULAR, espera-se fator reumatoide (FR) e/ou anti-CCP positivos, e o fármaco modificador do curso da doença (MMCD) de primeira escolha é o **metotrexato**.\n- **A) Incorreta:** Esclerose sistêmica cursa com espessamento cutâneo (esclerodactilia) e fenômeno de Raynaud; CPK elevada sugere miopatia inflamatória.\n- **C) Incorreta:** Padrão nuclear pontilhado fino denso no FAN geralmente ocorre em indivíduos saudáveis (anti-DFS70), não sendo típico de LES, além de não haver outros critérios sistêmicos de LES.\n- **D) Incorreta:** Doença mista do tecido conjuntivo cursa tipicamente com anti-RNP em altos títulos, fenômeno de Raynaud e dedos em salsicha.",
    "perolaClinica": "Poliartrite simétrica crônica (> 6 semanas) acometendo pequenas articulações das mãos (IFP, MCF, punhos) e grandes articulações, com rigidez matinal prolongada (> 1 hora) e anemia de doença crônica, é o quadro típico de artrite reumatoide (AR).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico, sorologia e terapia modificadora de doença inicial na artrite reumatoide.",
      "raciocinioChave": "Poliartrite simétrica crônica (> 6 semanas) de pequenas articulações das mãos e grandes articulações, com rigidez matinal > 1 hora e anemia inflamatória, caracteriza artrite reumatoide. Espera-se fator reumatoide positivo e inicia-se metotrexato como droga modificadora de primeira linha.",
      "armadilhaBanca": "Escolher padrões de FAN não específicos (pontilhado fino denso) ou imunossupressores de segunda linha em detrimento do metotrexato na AR inicial."
    },
    "mapaDistratores": {
      "A": "A esclerose sistêmica cursa com espessamento cutâneo e fenômeno de Raynaud, enquanto elevação de creatina quinase aponta para miopatias inflamatórias.",
      "C": "O padrão nuclear pontilhado fino denso no FAN associa-se frequentemente a indivíduos saudáveis (anti-DFS70), não sustentando o diagnóstico de lúpus sem critérios sistêmicos.",
      "D": "A doença mista do tecido conjuntivo cursa com fenômeno de Raynaud, dedos em salsicha e altos títulos de anti-RNP, e a azatioprina não é o tratamento padrão de artrite isolada."
    }
  },
  {
    "id": "q-enamed-2025-012",
    "code": "Q-ENAMED25-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "rastreamento",
      "atencao-primaria",
      "sangue-oculto-nas-fezes",
      "cessacao-do-tabagismo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 52 anos, branco, solteiro, comparece à consulta agendada na Unidade Básica de Saúde (UBS) desejando realizar revisão clínica e exames laboratoriais. Desde os 35 anos não faz acompanhamento de saúde. Relata história familiar de diabetes e hipertensão, e a mãe faleceu com câncer de pulmão. Sem história familiar de câncer de próstata. Fuma cerca de 2 maços por dia há 21 anos. Exame físico: pressão arterial de 120 x 80 mmHg, índice de massa corporal de 23 kg/m², sem outras alterações.\n\nConsiderando as recomendações de rastreamento para esse paciente, o médico de família e comunidade deve",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar exames de colesterol total e frações, hemograma, glicemia de jejum, creatinina, PSA, radiografia de tórax, colonoscopia, realizar toque retal; orientar sobre a prática de atividade física regular.",
        "explanation": "Incorreta: Hemograma, creatinina e radiografia de tórax não têm indicação de rastreamento em assintomáticos, e o rastreamento de câncer de próstata (PSA/toque retal) não é recomendado de rotina pelo Ministério da Saúde/INCA.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "solicitar exames de colesterol total, glicemia de jejum, pesquisa de sangue oculto nas fezes, PSA, ofertar anti-HIV e HBsAg, realizar toque retal; orientar sobre participação no grupo na UBS para abandono do tabagismo.",
        "explanation": "Incorreta: Inclui PSA e toque retal de rotina em paciente assintomático sem decisão compartilhada e omite sífilis/hepatite C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "abordar mudanças no estilo de vida e cessação do tabagismo; acompanhar, em consultas longitudinais, as futuras possibilidades de exames complementares, quando o paciente atingir faixa etária para investigações adicionais.",
        "explanation": "Incorreta: Com 52 anos, o paciente já está na faixa etária de rastreamento para câncer colorretal (≥ 50 anos), dislipidemia e diabetes.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "solicitar exames de colesterol total, HDL e triglicerídeos, glicemia de jejum, pesquisa de sangue oculto nas fezes, ofertar testes rápidos para HIV, sífilis e hepatites B e C; realizar abordagem sobre possibilidade de cessação do tabagismo.",
        "explanation": "A alternativa **D** está correta. Para homem assintomático de 52 anos na APS, segundo os Cadernos de Atenção Básica (Rastreamento — Ministério da Saúde), estão indicados: rastreamento de risco cardiovascular/dislipidemia (colesterol total, HDL, triglicerídeos) e diabetes mellitus (glicemia de jejum, especialmente com história familiar e ≥ 45 anos), rastreamento de câncer colorretal (50–75 anos) com pesquisa de sangue oculto nas fezes, oferta de testes rápidos para ISTs (HIV, sífilis, hepatites B e C) e abordagem estruturada para cessação do tabagismo.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Para homem assintomático de 52 anos na APS, segundo os Cadernos de Atenção Básica (Rastreamento — Ministério da Saúde), estão indicados: rastreamento de risco cardiovascular/dislipidemia (colesterol total, HDL, triglicerídeos) e diabetes mellitus (glicemia de jejum, especialmente com história familiar e ≥ 45 anos), rastreamento de câncer colorretal (50–75 anos) com pesquisa de sangue oculto nas fezes, oferta de testes rápidos para ISTs (HIV, sífilis, hepatites B e C) e abordagem estruturada para cessação do tabagismo.\n- **A) Incorreta:** Hemograma, creatinina e radiografia de tórax não têm indicação de rastreamento em assintomáticos, e o rastreamento de câncer de próstata (PSA/toque retal) não é recomendado de rotina pelo Ministério da Saúde/INCA.\n- **B) Incorreta:** Inclui PSA e toque retal de rotina em paciente assintomático sem decisão compartilhada e omite sífilis/hepatite C.\n- **C) Incorreta:** Com 52 anos, o paciente já está na faixa etária de rastreamento para câncer colorretal (≥ 50 anos), dislipidemia e diabetes.",
    "perolaClinica": "Para homem assintomático de 52 anos na APS, segundo os Cadernos de Atenção Básica (Rastreamento — Ministério da Saúde), estão indicados: rastreamento de risco cardiovascular/dislipidemia (colesterol total, HDL, triglicerídeos) e diabetes mellitus (glicemia de jejum, especialmente com história familiar e ≥ 45 anos), rastreamento de câncer colorretal (50–75 anos) com pesquisa de sangue oculto nas fezes, oferta de testes rápidos para ISTs (HIV, sífilis, hepatites B e C) e abordagem estruturada para cessação do tabagismo.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Protocolo de rastreamento baseado em evidências para homem assintomático de 52 anos na atenção primária.",
      "raciocinioChave": "Aos 52 anos, indicam-se rastreamento cardiovascular e metabólico (perfil lipídico e glicemia), pesquisa de sangue oculto nas fezes para câncer colorretal (50–75 anos) e oferta de testes rápidos para ISTs. A abordagem de cessação do tabagismo é mandatória pelo alto carga tabágica.",
      "armadilhaBanca": "Solicitar rastreamento oportunístico excessivo (PSA, toque retal, hemograma, radiografia de tórax) violando a prevenção quaternária na APS."
    },
    "mapaDistratores": {
      "A": "Inclui exames sem indicação de rastreamento em assintomáticos (hemograma, creatinina, radiografia de tórax) e rastreamento rotineiro de próstata não recomendado pelo MS.",
      "B": "Mantém solicitação rotineira de PSA e toque retal sem decisão compartilhada e deixa de ofertar a triagem completa de ISTs incluindo sífilis e hepatite C.",
      "C": "Posterga investigações que já têm indicação formal aos 52 anos, como rastreamento de câncer colorretal, dislipidemia, diabetes e infecções sexualmente transmissíveis."
    }
  },
  {
    "id": "q-enamed-2025-013",
    "code": "Q-ENAMED25-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Saúde do Trabalhador",
    "subtema": "Doenças Relacionadas ao Trabalho",
    "temaSlug": "mp-trabalho",
    "subtemaSlug": "mp-trabalho-doencas-relacionadas-ao-trabalho",
    "tags": [
      "intoxicacao-por-agrotoxicos",
      "saude-do-trabalhador",
      "notificacao-compulsoria",
      "sinan"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 32 anos, parda, ensino fundamental incompleto, trabalhadora rural, diarista no plantio de morango, procura Unidade Básica de Saúde (UBS) com queixas de tonturas, dores de cabeça, cansaço, náuseas e falta de ar. Ela referiu que desde os 20 anos sofre com dores de cabeça frequentes, mas há 2 semanas, após uma pulverização de agrotóxicos, começou a apresentar os sintomas descritos. Disse ainda que sua colega de trabalho apresentava queixas similares. Ao ouvir esses relatos, a médica da UBS suspeita de intoxicação aguda por agrotóxicos.\n\nNessa situação, qual é a conduta adequada a ser adotada na assistência?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Encaminhar como caso suspeito ao centro de referência em saúde do trabalhador estadual e formalizar denúncia ao Ministério Público do Trabalho.",
        "explanation": "Incorreta: A UBS não deve apenas encaminhar sem manejar clinicamente nem substituir a notificação no Sinan por denúncia ao MPT.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Estabelecer nexo causal entre os sintomas e os resultados de exames complementares, para confirmar diagnóstico de intoxicação por agrotóxicos, e notificar a Vigilância em Saúde municipal.",
        "explanation": "Incorreta: A notificação no Sinan de intoxicação exógena é compulsória já na suspeita clínica/epidemiológica, não dependendo de confirmação laboratorial prévia.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Tratar os sintomas, solicitar exames complementares, notificar o caso no Sistema de Notificação de Agravos e Doenças (Sinan), conceder atestado médico e solicitar matriciamento à Vigilância em Saúde do Trabalhador.",
        "explanation": "A alternativa **C** está correta. Diante de suspeita de intoxicação exógena por agrotóxicos na APS, conforme a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) e a Lista Nacional de Notificação Compulsória (Portaria GM/MS), a equipe da UBS deve: prestar assistência imediata (tratar sintomas e solicitar exames), **notificar o caso suspeito no Sinan** (não é necessário aguardar confirmação laboratorial), emitir atestado médico (afastamento da exposição) e acionar/solicitar matriciamento da Vigilância em Saúde do Trabalhador (Visat/Cerest).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Informar não ser responsável pelo preenchimento da comunicação de acidente de trabalho (CAT), por ser atribuição exclusiva da medicina do trabalho, no centro municipal de referência em saúde do trabalhador.",
        "explanation": "Incorreta: Qualquer médico assistente pode preencher o campo médico da CAT na omissão do empregador; não é atribuição exclusiva do médico do trabalho.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. Diante de suspeita de intoxicação exógena por agrotóxicos na APS, conforme a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) e a Lista Nacional de Notificação Compulsória (Portaria GM/MS), a equipe da UBS deve: prestar assistência imediata (tratar sintomas e solicitar exames), **notificar o caso suspeito no Sinan** (não é necessário aguardar confirmação laboratorial), emitir atestado médico (afastamento da exposição) e acionar/solicitar matriciamento da Vigilância em Saúde do Trabalhador (Visat/Cerest).\n- **A) Incorreta:** A UBS não deve apenas encaminhar sem manejar clinicamente nem substituir a notificação no Sinan por denúncia ao MPT.\n- **B) Incorreta:** A notificação no Sinan de intoxicação exógena é compulsória já na suspeita clínica/epidemiológica, não dependendo de confirmação laboratorial prévia.\n- **D) Incorreta:** Qualquer médico assistente pode preencher o campo médico da CAT na omissão do empregador; não é atribuição exclusiva do médico do trabalho.",
    "perolaClinica": "Diante de suspeita de intoxicação exógena por agrotóxicos na APS, conforme a Política Nacional de Saúde do Trabalhador e da Trabalhadora (PNSTT) e a Lista Nacional de Notificação Compulsória (Portaria GM/MS), a equipe da UBS deve: prestar assistência imediata (tratar sintomas e solicitar exames), **notificar o caso suspeito no Sinan** (não é necessário aguardar confirmação laboratorial), emitir atestado médico (afastamento da exposição) e acionar/solicitar matriciamento da Vigilância em Saúde do Trabalhador (Visat/Cerest).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo clínico e vigilância epidemiológica na suspeita de intoxicação aguda por agrotóxicos na APS.",
      "raciocinioChave": "Diante de sintomas agudos compatíveis após pulverização de agrotóxicos e relato de colega acometida, a intoxicação exógena é de notificação compulsória imediata no Sinan apenas pela suspeita. A equipe da UBS deve tratar os sintomas, investigar, emitir atestado e acionar matriciamento em saúde do trabalhador.",
      "armadilhaBanca": "Aguardar confirmação laboratorial ou delegar exclusivamente ao médico do trabalho a notificação no Sinan e a emissão da CAT."
    },
    "mapaDistratores": {
      "A": "A UBS não deve limitar-se a encaminhar o caso sem prestar assistência clínica imediata nem substituir a notificação oficial no Sinan por denúncia ao MPT.",
      "B": "A notificação compulsória de intoxicação exógena no Sinan deve ocorrer já na suspeita clínica e epidemiológica, sem aguardar confirmação laboratorial do nexo causal.",
      "D": "O preenchimento da parte médica da CAT não é exclusivo do médico do trabalho, podendo ser realizado por qualquer médico assistente diante da omissão do empregador."
    }
  },
  {
    "id": "q-enamed-2025-014",
    "code": "Q-ENAMED25-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "transtorno-de-oposicao-desafiante",
      "saude-mental-infantil",
      "comportamento-infantil"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pais de um menino de 10 anos levam a criança para avaliação médica em Unidade Básica de Saúde (UBS). Relatam que seu filho se dá bem com a família até que não lhe seja permitido fazer algo que deseja. Quando isso ocorre, ele fica irritado, impulsivamente agressivo e agitado por várias horas. Assim que se acalma ou consegue o que quer, fica feliz e agradável novamente. Os pais entendem que o filho parece agir deliberadamente para aborrecer os outros e nunca assume a culpa por seus próprios erros ou mau comportamento. Relatam ainda que ele discute com adultos ou figuras de autoridade e em várias situações não aceita as regras de boa convivência com os familiares.\n\nConsiderando o caso descrito, qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Transtorno afetivo bipolar.",
        "explanation": "Incorreta: Transtorno bipolar cursa com episódios bem delimitados de mania/hipomania e depressão, com alteração sustentada de humor e energia independente de limites impostos.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Transtorno de oposição desafiante.",
        "explanation": "A alternativa **B** está correta. O padrão persistente de humor raivoso/irritável, comportamento questionador/desafiante frente a figuras de autoridade, recusa em aceitar regras, provocação deliberada de terceiros e atribuição da culpa aos outros — com retorno à eutimia quando contrariedades cessam — caracteriza o **Transtorno de Oposição Desafiante (TOD)** segundo o DSM-5.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Transtorno disruptivo da desregulação do humor.",
        "explanation": "Incorreta: No transtorno disruptivo da desregulação do humor (TDDH), o humor entre as explosões de raiva permanece persistentemente irritável ou zangado na maior parte do dia, quase todos os dias.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Transtorno do déficit de atenção e hiperatividade.",
        "explanation": "Incorreta: O TDAH caracteriza-se por desatenção, hiperatividade e impulsividade, não por desafio deliberado e culpabilização de terceiros.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O padrão persistente de humor raivoso/irritável, comportamento questionador/desafiante frente a figuras de autoridade, recusa em aceitar regras, provocação deliberada de terceiros e atribuição da culpa aos outros — com retorno à eutimia quando contrariedades cessam — caracteriza o **Transtorno de Oposição Desafiante (TOD)** segundo o DSM-5.\n- **A) Incorreta:** Transtorno bipolar cursa com episódios bem delimitados de mania/hipomania e depressão, com alteração sustentada de humor e energia independente de limites impostos.\n- **C) Incorreta:** No transtorno disruptivo da desregulação do humor (TDDH), o humor entre as explosões de raiva permanece persistentemente irritável ou zangado na maior parte do dia, quase todos os dias.\n- **D) Incorreta:** O TDAH caracteriza-se por desatenção, hiperatividade e impulsividade, não por desafio deliberado e culpabilização de terceiros.",
    "perolaClinica": "O padrão persistente de humor raivoso/irritável, comportamento questionador/desafiante frente a figuras de autoridade, recusa em aceitar regras, provocação deliberada de terceiros e atribuição da culpa aos outros — com retorno à eutimia quando contrariedades cessam — caracteriza o **Transtorno de Oposição Desafiante (TOD)** segundo o DSM-5.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios clínicos do transtorno de oposição desafiante (TOD) segundo o DSM-5.",
      "raciocinioChave": "O menino apresenta padrão persistente de desafio a figuras de autoridade, desrespeito a regras, provocação deliberada e culpabilização de terceiros, retornando à eutimia quando contrariedades cessam. Esse conjunto fecha o diagnóstico de transtorno de oposição desafiante.",
      "armadilhaBanca": "Confundir o transtorno de oposição desafiante com o transtorno disruptivo da desregulação do humor (TDDH), em que a irritabilidade persiste entre crises."
    },
    "mapaDistratores": {
      "A": "O transtorno afetivo bipolar manifesta-se com episódios bem delimitados de mania/hipomania e depressão, com alteração sustentada de humor independente de frustrações imediatas.",
      "C": "No transtorno disruptivo da desregulação do humor, o humor entre as explosões de raiva permanece persistentemente irritável ou zangado na maior parte do dia, ao contrário da eutimia descrita.",
      "D": "O TDAH caracteriza-se por tríade de desatenção, hiperatividade e impulsividade, não explicando comportamento desafiador deliberado e transferência de culpa."
    }
  },
  {
    "id": "q-enamed-2025-015",
    "code": "Q-ENAMED25-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Síndrome Nefrótica",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-sindrome-nefrotica",
    "tags": [
      "sindrome-nefrotica",
      "proteinuria-nefrotica",
      "hipoalbuminemia",
      "edema"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 50 anos, queixando-se de astenia e constipação com fezes em fita. Há 15 dias, apresenta edema de membros inferiores até a raiz da região crural, bilateralmente, com pouca melhora à elevação dos membros. Ele perdeu 10 kg em 6 meses. Nega hipertensão arterial e *diabetes mellitus* e não faz uso de medicamento. Os exames do paciente apresentaram os seguintes resultados:\n\n| Exame | Resultado | Valor de referência |\n|---|---|---|\n| Pressão arterial | 130 x 80 mmHg | --- |\n| Peso | 70 kg | --- |\n| Hematócrito | 35% | 48 a 69% |\n| Glicemia | 88 mg/dL | 60 a 100 mg/dL |\n| Albumina sérica | 1,8 g/dL | 3,8 a 4,8 g/dL |\n| Creatinina | 1,2 mg/dL | 0,7 a 1,3 mg/dL |\n| Triglicerídeos | 200 mg/dL | < 150 mg/dL |\n| Proteína urinária de 24 horas | 3,6 g/24 horas | < 100 mg/24 horas |\n| Sedimentos | proteínas +++ / hemácias + (5 por campo) | --- |\n\nDentre esses achados laboratoriais, quais são necessários para a definição da síndrome renal do paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Proteína urinária de 24 horas = 3,6 g e albumina sérica = 1,8 g/dL.",
        "explanation": "A alternativa **A** está correta. O paciente apresenta **síndrome nefrótica** (inclusive possivelmente secundária a neoplasia colorretal, dada a perda ponderal e fezes em fita — nefropatia membranosa paraneoplásica). Os critérios laboratoriais definidores de síndrome nefrótica segundo o KDIGO são **proteinúria nefrótica (> 3,5 g/24h)** e **hipoalbuminemia (< 3,0 ou < 2,5 g/dL)**, geralmente acompanhadas de edema e dislipidemia.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Proteína urinária de 24 horas = 3,6 g e triglicerídeos = 200 mg/dL.",
        "explanation": "Incorreta: A hipertrigliceridemia é uma manifestação associada frequente, porém não obrigatória para a definição diagnóstica.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Hematúria e triglicerídeos = 200 mg/dL.",
        "explanation": "Incorreta: Hematúria discreta e triglicerídeos não definem síndrome nefrótica.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Hematúria e albumina sérica = 1,8 g/dL.",
        "explanation": "Incorreta: Hematúria (5/campo) é achado inespecífico e não define a síndrome nefrótica sem a proteinúria > 3,5 g/24h.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. O paciente apresenta **síndrome nefrótica** (inclusive possivelmente secundária a neoplasia colorretal, dada a perda ponderal e fezes em fita — nefropatia membranosa paraneoplásica). Os critérios laboratoriais definidores de síndrome nefrótica segundo o KDIGO são **proteinúria nefrótica (> 3,5 g/24h)** e **hipoalbuminemia (< 3,0 ou < 2,5 g/dL)**, geralmente acompanhadas de edema e dislipidemia.\n- **B) Incorreta:** A hipertrigliceridemia é uma manifestação associada frequente, porém não obrigatória para a definição diagnóstica.\n- **C) Incorreta:** Hematúria discreta e triglicerídeos não definem síndrome nefrótica.\n- **D) Incorreta:** Hematúria (5/campo) é achado inespecífico e não define a síndrome nefrótica sem a proteinúria > 3,5 g/24h.",
    "perolaClinica": "O paciente apresenta **síndrome nefrótica** (inclusive possivelmente secundária a neoplasia colorretal, dada a perda ponderal e fezes em fita — nefropatia membranosa paraneoplásica).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios laboratoriais definidores de síndrome nefrótica em adulto com quadro paraneoplásico sugestivo.",
      "raciocinioChave": "O paciente apresenta edema generalizado com possível neoplasia colorretal oculta (fezes em fita e perda ponderal) levando à síndrome nefrótica. Os critérios laboratoriais definidores da síndrome são proteinúria nefrótica (> 3,5 g/24h, aqui 3,6 g) e hipoalbuminemia grave (1,8 g/dL).",
      "armadilhaBanca": "Selecionar achados associados frequentes na síndrome nefrótica (hipertrigliceridemia ou hematúria discreta) no lugar dos dois critérios definidores essenciais."
    },
    "mapaDistratores": {
      "B": "A hipertrigliceridemia é uma alteração metabólica secundária frequente na síndrome nefrótica, mas não constitui critério diagnóstico obrigatório.",
      "C": "Nem hematúria discreta nem hipertrigliceridemia isoladas ou combinadas definem o diagnóstico de síndrome nefrótica.",
      "D": "A hematúria é achado inespecífico que não substitui a demonstração de proteinúria em faixa nefrótica (> 3,5 g/24h) para caracterizar a síndrome."
    }
  },
  {
    "id": "q-enamed-2025-016",
    "code": "Q-ENAMED25-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Avaliação do Crescimento e Baixa Estatura",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-avaliacao-do-crescimento-e-baixa-estatura",
    "tags": [
      "sindrome-de-down",
      "curvas-de-crescimento",
      "puericultura",
      "crescimento-infantil"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido de 15 dias, a termo, Apgar 8/9, peso e comprimento ao nascer de 2.600 g e 46 cm, respectivamente, com síndrome de Down, e cuja gestação não apresentou outras intercorrências. Está na consulta de puericultura com peso e comprimento atuais de 2.900 g e 47 cm, respectivamente.\n\nPara o acompanhamento pôndero-estatural, os dados devem ser plotados nas",
    "alternativas": [
      {
        "letter": "A",
        "text": "curvas de crescimento da OMS desde o nascimento até a adolescência.",
        "explanation": "Incorreta: As curvas padrão da OMS subestimam o crescimento adequado de crianças com síndrome de Down, gerando falsos diagnósticos de déficit pôndero-estatural.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "curvas de crescimento específicas para síndrome de Down desde o nascimento.",
        "explanation": "A alternativa **B** está correta. Crianças com síndrome de Down (trissomia do 21) possuem padrão de crescimento linear e ganho ponderal próprios. Conforme as Diretrizes de Atenção à Pessoa com Síndrome de Down (Ministério da Saúde) e a Sociedade Brasileira de Pediatria (SBP), o acompanhamento pôndero-estatural deve ser feito em **curvas específicas para síndrome de Down desde o nascimento** (como as curvas de Mustacchi / Zemel).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "curvas de crescimento da OMS, corrigindo o peso e o comprimento para síndrome de Down.",
        "explanation": "Incorreta: Não existe fator de correção sobre as curvas da OMS para síndrome de Down.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "curvas de crescimento da OMS até os dois anos e, a partir daí, em curvas específicas para síndrome de Down.",
        "explanation": "Incorreta: As curvas específicas abrangem desde o nascimento (0 a 18/20 anos), não devendo esperar os 2 anos para utilizá-las.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Crianças com síndrome de Down (trissomia do 21) possuem padrão de crescimento linear e ganho ponderal próprios. Conforme as Diretrizes de Atenção à Pessoa com Síndrome de Down (Ministério da Saúde) e a Sociedade Brasileira de Pediatria (SBP), o acompanhamento pôndero-estatural deve ser feito em **curvas específicas para síndrome de Down desde o nascimento** (como as curvas de Mustacchi / Zemel).\n- **A) Incorreta:** As curvas padrão da OMS subestimam o crescimento adequado de crianças com síndrome de Down, gerando falsos diagnósticos de déficit pôndero-estatural.\n- **C) Incorreta:** Não existe fator de correção sobre as curvas da OMS para síndrome de Down.\n- **D) Incorreta:** As curvas específicas abrangem desde o nascimento (0 a 18/20 anos), não devendo esperar os 2 anos para utilizá-las.",
    "perolaClinica": "Crianças com síndrome de Down (trissomia do 21) possuem padrão de crescimento linear e ganho ponderal próprios.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Uso de curvas de crescimento específicas para síndrome de Down desde o nascimento na puericultura.",
      "raciocinioChave": "Lactentes com trissomia do 21 apresentam velocidade de crescimento e ganho ponderal próprios da condição genética. Segundo o Ministério da Saúde e a SBP, o monitoramento pôndero-estatural deve ocorrer em curvas específicas para síndrome de Down desde o nascimento.",
      "armadilhaBanca": "Utilizar curvas padrão da OMS até os 2 anos ou aplicar fatores matemáticos de correção em crianças com síndrome de Down."
    },
    "mapaDistratores": {
      "A": "As curvas padrão da OMS subestimam o crescimento fisiológico de crianças com síndrome de Down, gerando falsos diagnósticos de desnutrição ou baixa estatura.",
      "C": "Não existe fator de correção validado para adaptar os valores brutos das curvas da OMS a pacientes com síndrome de Down.",
      "D": "As curvas específicas para síndrome de Down cobrem desde o período neonatal até o final da adolescência, não havendo motivo para aguardar os 2 anos para adotá-las."
    }
  },
  {
    "id": "q-enamed-2025-017",
    "code": "Q-ENAMED25-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": [
      "trauma-toracico",
      "pneumotorax-hipertensivo",
      "toracocentese",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 20 anos, sexo masculino, vítima de colisão “automóvel a muro”, sem cinto de segurança, é atendido ainda na cena pelo Serviço Móvel de Atendimento de Urgência (SAMU). Exame físico: paciente torporoso; saturação de O₂ de 60%, em ar ambiente; frequência respiratória de 28 irpm; frequência cardíaca de 112 bpm; pressão arterial de 90 x 50 mmHg. Desvio da traqueia para a direita, turgência de veias jugulares, hipofonese de bulhas cardíacas e diminuição acentuada do murmúrio vesicular à esquerda.\n\nQual é a conduta adequada no atendimento pré-hospitalar?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Reposição volêmica.",
        "explanation": "Incorreta: Reposição volêmica isolada não resolve o colapso hemodinâmico obstrutivo causado pela pressão intratorácica positiva.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Cricotireoidostomia.",
        "explanation": "Incorreta: Não há obstrução de via aérea superior que justifique via aérea cirúrgica imediata.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Pericardiocentese.",
        "explanation": "Incorreta: A hipofonese de bulhas pode ocorrer pela hiperinsuflação/desvio mediastinal, mas a assimetria acentuada do murmúrio vesicular e o desvio de traqueia fecham o diagnóstico de pneumotórax hipertensivo, e não tamponamento cardíaco isolado.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Toracocentese.",
        "explanation": "A alternativa **D** está correta. O paciente apresenta choque obstrutivo (hipotensão, taquicardia, turgência jugular), hipoxemia grave, **desvio contralateral da traqueia** (para a direita) e **diminuição acentuada do murmúrio vesicular à esquerda**, quadro clássico de **pneumotórax hipertensivo à esquerda**. Segundo o ATLS (10ª edição), a conduta imediata na cena/emergência é a descompressão torácica por **toracocentese de alívio** (punção com agulha calibrosa no 4º ou 5º espaço intercostal anterior à linha axilar média em adultos).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. O paciente apresenta choque obstrutivo (hipotensão, taquicardia, turgência jugular), hipoxemia grave, **desvio contralateral da traqueia** (para a direita) e **diminuição acentuada do murmúrio vesicular à esquerda**, quadro clássico de **pneumotórax hipertensivo à esquerda**. Segundo o ATLS (10ª edição), a conduta imediata na cena/emergência é a descompressão torácica por **toracocentese de alívio** (punção com agulha calibrosa no 4º ou 5º espaço intercostal anterior à linha axilar média em adultos).\n- **A) Incorreta:** Reposição volêmica isolada não resolve o colapso hemodinâmico obstrutivo causado pela pressão intratorácica positiva.\n- **B) Incorreta:** Não há obstrução de via aérea superior que justifique via aérea cirúrgica imediata.\n- **C) Incorreta:** A hipofonese de bulhas pode ocorrer pela hiperinsuflação/desvio mediastinal, mas a assimetria acentuada do murmúrio vesicular e o desvio de traqueia fecham o diagnóstico de pneumotórax hipertensivo, e não tamponamento cardíaco isolado.",
    "perolaClinica": "O paciente apresenta choque obstrutivo (hipotensão, taquicardia, turgência jugular), hipoxemia grave, **desvio contralateral da traqueia** (para a direita) e **diminuição acentuada do murmúrio vesicular à esquerda**, quadro clássico de **pneumotórax hipertensivo à esquerda**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento clínico e descompressão imediata do pneumotórax hipertensivo no pré-hospitalar.",
      "raciocinioChave": "Choque obstrutivo associado a hipoxemia grave, desvio contralateral da traqueia (para a direita) e redução acentuada do murmúrio vesicular à esquerda confirma pneumotórax hipertensivo esquerdo. A conduta imediata na cena, segundo o ATLS, é a toracocentese de alívio.",
      "armadilhaBanca": "Confundir pneumotórax hipertensivo com tamponamento cardíaco devido à turgência jugular e hipofonese de bulhas, indicando pericardiocentese errônea."
    },
    "mapaDistratores": {
      "A": "A reposição volêmica isolada não reverte o choque obstrutivo causado pelo colapso mecânico do retorno venoso secundário à hipertensão intratorácica.",
      "B": "Não há sinais de obstrução mecânica de via aérea superior que justifiquem cricotireoidostomia de emergência.",
      "C": "Embora turgência jugular e hipofonese de bulhas ocorram no tamponamento cardíaco, o desvio de traqueia e a abolição unilateral do murmúrio vesicular confirmam pneumotórax hipertensivo."
    }
  },
  {
    "id": "q-enamed-2025-018",
    "code": "Q-ENAMED25-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": [
      "amenorreia-primaria",
      "cariotipo-46-xy",
      "ausencia-de-utero"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 16 anos comparece ao ambulatório para mostrar os resultados dos exames complementares solicitados na consulta anterior. Está preocupada porque todas as colegas da mesma idade já menstruaram e ela não. O fenótipo é feminino, com pelos pubianos e axilares esparsos. Os exames complementares evidenciam ausência do útero à ultrassonografia pélvica, dosagem sérica do hormônio folículo estimulante (FSH) normal, dosagem de testosterona sérica compatível com níveis do sexo masculino e cariótipo 46 XY.\n\nCom base no quadro clínico e nos dados apresentados, a principal hipótese diagnóstica dessa paciente é",
    "alternativas": [
      {
        "letter": "A",
        "text": "disgenesia gonadal.",
        "explanation": "Incorreta: Disgenesia gonadal (ex: síndrome de Swyer 46,XY ou Turner 45,X) cursa com FSH elevado (hipogonadismo hipergonadotrófico), testosterona baixa e presença de útero.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "malformação Mulleriana.",
        "explanation": "Incorreta: Na agenesia mülleriana (síndrome de Rokitansky), o cariótipo é 46,XX, pelos pubianos/axilares são normais e a testosterona está em níveis femininos.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "obstrução do trato genital.",
        "explanation": "Incorreta: Obstrução do trato genital (ex: hímen imperfurado, septo vaginal) cursa com útero presente, hematocolpo/hematometra, dor pélvica cíclica e cariótipo 46,XX.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "insensibilidade androgênica.",
        "explanation": "A alternativa **D** está correta. Trata-se de quadro clássico de **síndrome da insensibilidade androgênica completa (síndrome de Morris)**: paciente com amenorreia primária, fenótipo feminino (desenvolvimento mamário pela aromatização periférica da testosterona), pelos pubianos e axilares escassos ou ausentes, ausência de útero (os testículos produzem hormônio antimülleriano que regride os ductos de Müller), testosterona em faixa masculina e cariótipo 46,XY.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Trata-se de quadro clássico de **síndrome da insensibilidade androgênica completa (síndrome de Morris)**: paciente com amenorreia primária, fenótipo feminino (desenvolvimento mamário pela aromatização periférica da testosterona), pelos pubianos e axilares escassos ou ausentes, ausência de útero (os testículos produzem hormônio antimülleriano que regride os ductos de Müller), testosterona em faixa masculina e cariótipo 46,XY.\n- **A) Incorreta:** Disgenesia gonadal (ex: síndrome de Swyer 46,XY ou Turner 45,X) cursa com FSH elevado (hipogonadismo hipergonadotrófico), testosterona baixa e presença de útero.\n- **B) Incorreta:** Na agenesia mülleriana (síndrome de Rokitansky), o cariótipo é 46,XX, pelos pubianos/axilares são normais e a testosterona está em níveis femininos.\n- **C) Incorreta:** Obstrução do trato genital (ex: hímen imperfurado, septo vaginal) cursa com útero presente, hematocolpo/hematometra, dor pélvica cíclica e cariótipo 46,XX.",
    "perolaClinica": "Trata-se de quadro clássico de **síndrome da insensibilidade androgênica completa (síndrome de Morris)**: paciente com amenorreia primária, fenótipo feminino (desenvolvimento mamário pela aromatização periférica da testosterona), pelos pubianos e axilares escassos ou ausentes, ausência de útero (os testículos produzem hormônio antimülleriano que regride os ductos de Müller), testosterona em faixa masculina e cariótipo 46,XY.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial de amenorreia primária sem útero e com cariótipo 46,XY (síndrome de Morris).",
      "raciocinioChave": "Adolescente com fenótipo feminino, pelos axilares/pubianos escassos, ausência uterina, testosterona em nível masculino e cariótipo 46,XY apresenta síndrome da insensibilidade androgênica completa. Os testículos produzem hormônio antimülleriano (regredindo o útero) e testosterona sem ação periférica em receptores androgênicos.",
      "armadilhaBanca": "Confundir síndrome de insensibilidade androgênica completa (46,XY) com agenesia mülleriana de Rokitansky (46,XX) pela ausência comum de útero."
    },
    "mapaDistratores": {
      "A": "A disgenesia gonadal (como Swyer 46,XY ou Turner) cursa com útero presente, testosterona baixa e FSH marcadamente elevado por falência gonadal primária.",
      "B": "Na malformação mülleriana (síndrome de Rokitansky), o cariótipo é 46,XX, a pilificação sexual é normal e a testosterona sérica encontra-se em faixa feminina.",
      "C": "A obstrução do trato genital (como hímen imperfurado) apresenta útero e ovários normais, hematocolpo, dor pélvica cíclica e cariótipo 46,XX."
    }
  },
  {
    "id": "q-enamed-2025-019",
    "code": "Q-ENAMED25-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": [
      "hipertensao-arterial",
      "idoso",
      "conduta-expectante",
      "monitoramento-pressor"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 82 anos, sem história prévia de hipertensão, comparece à consulta preocupada porque aferiu a pressão na farmácia há 1 semana e estava em 146 x 86 mmHg. Em outra aferição, há 2 semanas, na unidade de saúde, a pressão estava em 144 x 88 mmHg. No momento da consulta, a pressão está em 148 x 88 mmHg. Não apresenta sintomas nem está em acompanhamento de outros agravos neste momento.\n\nQual é a abordagem adequada nesse caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Referenciar ao cardiologista para um manejo específico.",
        "explanation": "Incorreta: Não há indicação de encaminhamento ao especialista; o seguimento é da APS.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Solicitar holter 24 horas e ecocardiograma para ampliar a avaliação.",
        "explanation": "Incorreta: Holter de 24h não diagnostica hipertensão arterial.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Prescrever losartana 50 mg, 1 comprimido à noite, com monitoramento da pressão arterial na unidade.",
        "explanation": "Incorreta: O início de anti-hipertensivo em paciente de 82 anos com PAS < 160 mmHg sem comorbidades aumenta o risco de hipotensão ortostática e quedas sem benefício estabelecido.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Realizar uma conduta expectante, sem necessidade de medicamentos, com monitoramento de pressão arterial na unidade.",
        "explanation": "A alternativa **D** está correta. Em idosos muito idosos (≥ 80 anos) hígidos e sem lesão de órgão-alvo ou doença cardiovascular estabelecida, as Diretrizes Brasileiras de Hipertensão Arterial (SBC) preconizam início de terapia anti-hipertensiva farmacológica apenas quando a pressão arterial sistólica estiver **≥ 160 mmHg**. Com níveis entre 140–148 x 86–88 mmHg e assintomática, a conduta é expectante/orientação não farmacológica e monitoramento ambulatorial da PA (ou MAPA/MRPA).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Em idosos muito idosos (≥ 80 anos) hígidos e sem lesão de órgão-alvo ou doença cardiovascular estabelecida, as Diretrizes Brasileiras de Hipertensão Arterial (SBC) preconizam início de terapia anti-hipertensiva farmacológica apenas quando a pressão arterial sistólica estiver **≥ 160 mmHg**. Com níveis entre 140–148 x 86–88 mmHg e assintomática, a conduta é expectante/orientação não farmacológica e monitoramento ambulatorial da PA (ou MAPA/MRPA).\n- **A) Incorreta:** Não há indicação de encaminhamento ao especialista; o seguimento é da APS.\n- **B) Incorreta:** Holter de 24h não diagnostica hipertensão arterial.\n- **C) Incorreta:** O início de anti-hipertensivo em paciente de 82 anos com PAS < 160 mmHg sem comorbidades aumenta o risco de hipotensão ortostática e quedas sem benefício estabelecido.",
    "perolaClinica": "Em idosos muito idosos (≥ 80 anos) hígidos e sem lesão de órgão-alvo ou doença cardiovascular estabelecida, as Diretrizes Brasileiras de Hipertensão Arterial (SBC) preconizam início de terapia anti-hipertensiva farmacológica apenas quando a pressão arterial sistólica estiver **≥ 160 mmHg**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Limiar terapêutico e conduta expectante na hipertensão arterial em idoso muito idoso (≥ 80 anos) hígido.",
      "raciocinioChave": "Em pacientes com 80 anos ou mais, assintomáticos e sem lesão de órgão-alvo ou doença cardiovascular estabelecida, o início de anti-hipertensivo só é indicado se PAS ≥ 160 mmHg. Com medidas entre 144–148 x 86–88 mmHg, recomenda-se conduta expectante, medidas não farmacológicas e monitoramento na UBS.",
      "armadilhaBanca": "Tratar farmacologicamente pressão sistólica entre 140–159 mmHg em idoso muito idoso hígido (≥ 80 anos), aumentando risco de hipotensão e quedas."
    },
    "mapaDistratores": {
      "A": "Não há hipertensão refratária ou lesão de órgão-alvo que justifique encaminhamento ao cardiologista, cabendo o acompanhamento longitudinal à APS.",
      "B": "O Holter de 24 horas avalia arritmias cardíacas e não serve para diagnóstico ou estadiamento inicial da hipertensão arterial sistêmica.",
      "C": "Iniciar losartana em idosa de 82 anos hígida com PAS < 160 mmHg expõe a paciente a hipotensão ortostática e quedas sem benefício prognóstico comprovado."
    }
  },
  {
    "id": "q-enamed-2025-020",
    "code": "Q-ENAMED25-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "HIV/AIDS e Infecções Oportunistas",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-hiv-aids-e-infeccoes-oportunistas",
    "tags": [
      "hiv",
      "pep",
      "prep",
      "prevencao-combinada",
      "testagem-rapida"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher travesti de 28 anos, profissional do sexo, comparece à Unidade Básica de Saúde (UBS) em demanda espontânea. Relata relações sexuais frequentes com diferentes parceiros, com uso inconsistente de preservativos, principalmente durante relações anais receptivas. Há 2 dias teve uma relação sexual desprotegida com um cliente que se recusou a usar camisinha. Nunca utilizou medicamento para profilaxia pré-exposição (PrEP) ou pós-exposição (PEP) à infecção pelo HIV.\n\nConsiderando que a paciente está assintomática no momento, qual a melhor estratégia de prevenção?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prescrever PrEP após resultado não reagente para HIV; indicar PEP após tratamento inicial e orientar rastreamento de ISTs a cada 3 meses.",
        "explanation": "Incorreta: A ordem é inversa: primeiro PEP pela exposição aguda (< 72h), depois PrEP.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Oferecer teste rápido para HIV e sífilis; prescrever PrEP de início imediato; orientar sobre as vacinas disponíveis no SUS para seu grupo populacional.",
        "explanation": "Incorreta: PrEP não substitui PEP após exposição recente de risco ocorrida há 48h (pois o esquema de PrEP possui apenas 2 antirretrovirais, insuficiente como profilaxia pós-exposição).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Realizar testagem rápida para HIV e sífilis; prescrever PEP mediante resultado não reagente para HIV e programar início da PrEP após término da PEP.",
        "explanation": "A alternativa **C** está correta. A paciente sofreu exposição sexual de risco há 2 dias (48h, portanto dentro da janela de **até 72 horas** para **PEP**). Segundo o PCDT de PEP e PrEP do Ministério da Saúde, realiza-se testagem rápida para HIV (e sífilis/hepatites); com teste rápido de HIV não reagente, inicia-se imediatamente a **PEP por 28 dias** (TDF/3TC + DTG) e, devido à vulnerabilidade contínua (profissional do sexo com exposição recorrente), programa-se a transição direta para **PrEP** ao término da PEP (com nova testagem rápida de HIV).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Prescrever PEP e PrEP de forma concomitante; solicitar sorologias para ISTs; agendar retorno para analisar os resultados e revisar adesão ao tratamento.",
        "explanation": "Incorreta: Não se prescrevem PEP e PrEP concomitantemente (haveria duplicidade de TDF).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A paciente sofreu exposição sexual de risco há 2 dias (48h, portanto dentro da janela de **até 72 horas** para **PEP**). Segundo o PCDT de PEP e PrEP do Ministério da Saúde, realiza-se testagem rápida para HIV (e sífilis/hepatites); com teste rápido de HIV não reagente, inicia-se imediatamente a **PEP por 28 dias** (TDF/3TC + DTG) e, devido à vulnerabilidade contínua (profissional do sexo com exposição recorrente), programa-se a transição direta para **PrEP** ao término da PEP (com nova testagem rápida de HIV).\n- **A) Incorreta:** A ordem é inversa: primeiro PEP pela exposição aguda (< 72h), depois PrEP.\n- **B) Incorreta:** PrEP não substitui PEP após exposição recente de risco ocorrida há 48h (pois o esquema de PrEP possui apenas 2 antirretrovirais, insuficiente como profilaxia pós-exposição).\n- **D) Incorreta:** Não se prescrevem PEP e PrEP concomitantemente (haveria duplicidade de TDF).",
    "perolaClinica": "A paciente sofreu exposição sexual de risco há 2 dias (48h, portanto dentro da janela de **até 72 horas** para **PEP**).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Sequenciamento correto entre profilaxia pós-exposição (PEP) e pré-exposição (PrEP) ao HIV após risco recente.",
      "raciocinioChave": "A relação anal desprotegida há 48 horas encontra-se dentro da janela de 72 horas para PEP, que exige esquema tríplice por 28 dias após teste rápido de HIV não reagente. Ao término da PEP, pela exposição contínua, programa-se a transição imediata para PrEP.",
      "armadilhaBanca": "Indicar apenas PrEP após exposição sexual ocorrida há menos de 72 horas ou prescrever PrEP e PEP simultaneamente em duplicidade antirretroviral."
    },
    "mapaDistratores": {
      "A": "A ordem é invertida: diante de exposição de risco há 48 horas, a PEP é prioritária e imediata, iniciando-se a PrEP apenas após os 28 dias da PEP.",
      "B": "A PrEP utiliza esquema duplo insuficiente para bloquear a infecção aguda pós-exposição recente (< 72h), não podendo substituir a PEP neste momento.",
      "D": "Não se prescrevem PEP e PrEP concomitantemente devido à duplicidade de fármacos (tenofovir) sem benefício adicional e com maior toxicidade."
    }
  },
  {
    "id": "q-enamed-2025-021",
    "code": "Q-ENAMED25-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos Alimentares e de Personalidade",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-alimentares-e-de-personalidade",
    "tags": [
      "anorexia-nervosa",
      "internacao-hospitalar",
      "transtornos-alimentares",
      "instabilidade-hemodinamica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 21 anos comparece à consulta médica em Unidade Básica de Saúde (UBS) para avaliação de amenorreia há 4 meses, sendo descartada gravidez. Paciente relata que há 10 meses iniciou dieta para perder peso, tendo emagrecido nesse período aproximadamente 30 kg. Há 2 dias relata desmaio durante prática de exercício físico e, por isso, realizou eletrocardiograma (ECG) que indicou alterações no segmento ST e na onda T. Paciente nega histórico de diagnóstico de transtorno mental, mora sozinha e sua família é de outra cidade. Afirma manter o padrão alimentar, pois ainda quer perder peso. Ao exame físico, apresenta palidez de mucosa e turgor cutâneo diminuído. Altura = 1,63 m; peso = 39 kg (IMC = 14,7 kg/m²); pressão arterial = 80 x 60 mmHg; frequência cardíaca = 55 bpm e frequência respiratória = 15 irpm.\n\nQual é a conduta adequada nesse momento?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar internação em enfermaria de clínica médica.",
        "explanation": "A alternativa **A** está correta. A paciente apresenta quadro de **anorexia nervosa grave** (IMC 14,7 kg/m² < 15 kg/m²) com **instabilidade clínica e risco cardiovascular imediato**: síncope aos esforços, hipotensão arterial (80 x 60 mmHg), bradicardia (55 bpm), desidratação e alterações eletrocardiográficas de ST/T. A prioridade absoluta é a estabilização clínica e hidroeletrolítica (prevenção de morte súbita e síndrome de realimentação), indicando **internação em enfermaria de clínica médica** (e não psiquiátrica pura ou seguimento ambulatorial).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Encaminhar para internação em enfermaria de saúde mental.",
        "explanation": "Incorreta: A instabilidade hemodinâmica e as alterações de ECG exigem suporte clínico hospitalar em enfermaria de clínica médica.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Continuar a investigação para causas da amenorreia na UBS.",
        "explanation": "Incorreta: A paciente apresenta risco iminente de morte por desnutrição grave e instabilidade cardiovascular, contraindicando seguimento apenas ambulatorial na UBS.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Acompanhar em ambulatório do Centro de Atenção Psicossocial (CAPs).",
        "explanation": "Incorreta: O CAPS não dispõe de suporte hospitalar para estabilização clínica e monitorização cardíaca contínua.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. A paciente apresenta quadro de **anorexia nervosa grave** (IMC 14,7 kg/m² < 15 kg/m²) com **instabilidade clínica e risco cardiovascular imediato**: síncope aos esforços, hipotensão arterial (80 x 60 mmHg), bradicardia (55 bpm), desidratação e alterações eletrocardiográficas de ST/T. A prioridade absoluta é a estabilização clínica e hidroeletrolítica (prevenção de morte súbita e síndrome de realimentação), indicando **internação em enfermaria de clínica médica** (e não psiquiátrica pura ou seguimento ambulatorial).\n- **B) Incorreta:** A instabilidade hemodinâmica e as alterações de ECG exigem suporte clínico hospitalar em enfermaria de clínica médica.\n- **C) Incorreta:** A paciente apresenta risco iminente de morte por desnutrição grave e instabilidade cardiovascular, contraindicando seguimento apenas ambulatorial na UBS.\n- **D) Incorreta:** O CAPS não dispõe de suporte hospitalar para estabilização clínica e monitorização cardíaca contínua.",
    "perolaClinica": "A paciente apresenta quadro de **anorexia nervosa grave** (IMC 14,7 kg/m² < 15 kg/m²) com **instabilidade clínica e risco cardiovascular imediato**: síncope aos esforços, hipotensão arterial (80 x 60 mmHg), bradicardia (55 bpm), desidratação e alterações eletrocardiográficas de ST/T.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios de internação clínica hospitalar de urgência na anorexia nervosa grave com instabilidade cardiovascular.",
      "raciocinioChave": "Paciente com anorexia nervosa grave (IMC 14,7 kg/m²) apresentando síncope aos esforços, hipotensão (80 x 60 mmHg), bradicardia e alterações de ST/T no ECG possui alto risco de morte súbita. A prioridade absoluta é internação em enfermaria de clínica médica para estabilização clínica e realimentação segura.",
      "armadilhaBanca": "Encaminhar paciente clinicamente instável (síncope, bradicardia, hipotensão e alterações de ECG) diretamente para CAPS ou enfermaria psiquiátrica."
    },
    "mapaDistratores": {
      "B": "Enfermarias de saúde mental não dispõem do suporte intensivo de monitorização cardíaca e correção hidroeletrolítica imediata exigido pela instabilidade hemodinâmica.",
      "C": "A investigação ambulatorial na UBS postergaria a estabilização de quadro grave com risco iminente de arritmia fatal e descompensação hemodinâmica.",
      "D": "O CAPS é dispositivo ambulatorial de atenção psicossocial sem estrutura hospitalar para manejo de desnutrição extrema e alterações eletrocardiográficas agudas."
    }
  },
  {
    "id": "q-enamed-2025-022",
    "code": "Q-ENAMED25-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Doença de Parkinson e Transtornos do Movimento",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-doenca-de-parkinson-e-transtornos-do-movimento",
    "tags": [
      "doenca-de-parkinson",
      "levodopa",
      "bradicinesia",
      "rigidez-em-roda-dentada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 65 anos iniciou quadro de lentidão dos movimentos há 6 meses, com dificuldade para amarrar sapatos, abotoar roupas e digitar. Ao caminhar, apresentava passos mais curtos e sensação de instabilidade, com 1 episódio de queda. Concomitantemente apresentou tremores nas mãos, de repouso, associados à rigidez e alteração do padrão do sono. Nega alterações de memória e cognição. Ao exame físico apresentava fácies em máscara, marcha em pequenos passos, frequência cardíaca de 88 bpm com ausculta sem alterações, pressão arterial de 130 x 80 mmHg, tremores assimétricos na manobra dos braços estendidos, hipertonia em roda dentada. A ressonância nuclear magnética realizada há 2 semanas constatou atrofia cerebral compatível com a idade.\n\nO tratamento medicamentoso inicial recomendado para o caso clínico será",
    "alternativas": [
      {
        "letter": "A",
        "text": "levodopa e carbidopa.",
        "explanation": "A alternativa **A** está correta. Trata-se de síndrome parkinsoniana clássica (bradicinesia, rigidez em roda dentada, tremor de repouso assimétrico, instabilidade postural/marcha em pequenos passos e hipomimia facial), compatível com **Doença de Parkinson** idiopática. Conforme o PCDT de Doença de Parkinson (Ministério da Saúde) e a Academia Brasileira de Neurologia, o tratamento sintomático mais eficaz e padrão-ouro inicial (especialmente em pacientes > 60 anos ou com prejuízo funcional) é a associação de **levodopa + inibidor da descarboxilase periférica (carbidopa ou benserazida)**.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "donepezila e memantina.",
        "explanation": "Incorreta: Donepezila e memantina são indicadas para doença de Alzheimer / demência.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "propranolol e amantadina.",
        "explanation": "Incorreta: Propranolol é primeira linha para tremor essencial (de ação/postural), não para doença de Parkinson.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "atorvastatina e baclofeno.",
        "explanation": "Incorreta: Estatina e relaxante muscular (baclofeno) não tratam parkinsonismo.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Trata-se de síndrome parkinsoniana clássica (bradicinesia, rigidez em roda dentada, tremor de repouso assimétrico, instabilidade postural/marcha em pequenos passos e hipomimia facial), compatível com **Doença de Parkinson** idiopática. Conforme o PCDT de Doença de Parkinson (Ministério da Saúde) e a Academia Brasileira de Neurologia, o tratamento sintomático mais eficaz e padrão-ouro inicial (especialmente em pacientes > 60 anos ou com prejuízo funcional) é a associação de **levodopa + inibidor da descarboxilase periférica (carbidopa ou benserazida)**.\n- **B) Incorreta:** Donepezila e memantina são indicadas para doença de Alzheimer / demência.\n- **C) Incorreta:** Propranolol é primeira linha para tremor essencial (de ação/postural), não para doença de Parkinson.\n- **D) Incorreta:** Estatina e relaxante muscular (baclofeno) não tratam parkinsonismo.",
    "perolaClinica": "Trata-se de síndrome parkinsoniana clássica (bradicinesia, rigidez em roda dentada, tremor de repouso assimétrico, instabilidade postural/marcha em pequenos passos e hipomimia facial), compatível com **Doença de Parkinson** idiopática.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico da doença de Parkinson e tratamento sintomático de primeira linha com levodopa/carbidopa.",
      "raciocinioChave": "Bradicinesia acompanhada de rigidez em roda dentada, tremor de repouso assimétrico, hipomimia facial e marcha em pequenos passos em idosa sem déficit cognitivo fecha o diagnóstico de doença de Parkinson. A terapia sintomática padrão-ouro inicial é a associação levodopa/carbidopa.",
      "armadilhaBanca": "Confundir tremor de repouso assimétrico parkinsoniano com tremor essencial (tratado com propranolol) ou com síndrome demencial (tratada com donepezila)."
    },
    "mapaDistratores": {
      "B": "Donepezila e memantina são fármacos antidemenciais indicados para doença de Alzheimer, sem ação sobre os sintomas motores do parkinsonismo.",
      "C": "O propranolol é primeira linha no tremor essencial (tremor postural/de ação simétrico), não tratando a bradicinesia e a rigidez da doença de Parkinson.",
      "D": "Atorvastatina (hipolipemiante) e baclofeno (relaxante muscular espástico) não têm indicação no tratamento motor da doença de Parkinson."
    }
  },
  {
    "id": "q-enamed-2025-023",
    "code": "Q-ENAMED25-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Acidentes, Intoxicações e Maus-Tratos na Infância",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-acidentes-intoxicacoes-e-maus-tratos-na-infancia",
    "tags": [
      "maus-tratos-infantis",
      "conselho-tutelar",
      "notificacao-compulsoria",
      "violencia-domestica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A violência contra adolescentes pode ter várias causas e atores. Os sinais que demonstram essas ações podem ser indiretos, mas devem ser observados pelos profissionais da saúde.\n\nAssinale a alternativa com a situação em que se deve notificar o Conselho Tutelar.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Manuel, 15 anos, abandonado pelos pais e sob os cuidados de uma família acolhedora, apresenta febre, vômitos, petéquias que evoluem para púrpuras em MMII e SS, rigidez de nuca e história vacinal desconhecida.",
        "explanation": "Incorreta: O quadro clínico é de doença meningocócica aguda (febre, vômitos, púrpuras, rigidez de nuca).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Michele, 13 anos, está morando temporariamente com os tios enquanto a mãe faz um curso no exterior. Há 1 mês vem apresentando equimoses em face, pernas, coxas, em vários estágios de evolução, e evita falar sobre o fato.",
        "explanation": "A alternativa **B** está correta. Equimoses em múltiplos estágios evolutivos de cicatrização e localizadas em áreas atípicas (face, coxas) acompanhadas de evitação em falar sobre o ocorrido são fortes indícios de **maus-tratos / violência física** contra adolescente. Conforme o Estatuto da Criança e do Adolescente (ECA, Art. 13 e 245), a simples suspeita ou confirmação de maus-tratos obriga a notificação imediata ao **Conselho Tutelar** (além da notificação no Sinan).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Felipe, 11 anos, acolhido em um abrigo desde os 9 anos, há 3 dias está mais recolhido no seu quarto e dorme quase o tempo todo. Apresenta febre, muita dor no corpo e retro-orbitária, sangramento gengival quando escova os dentes e petéquias pelo corpo.",
        "explanation": "Incorreta: O quadro clínico é sugestivo de dengue com sinais de alarme (febre, dor retro-orbitária, sangramento gengival, petéquias).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Edilene, 16 anos, que cumpre medidas socioeducativas em uma instituição do Estado, apresenta várias equimoses nos membros superiores e inferiores, além do tronco. Refere também suores noturnos, febre inexplicada, perda de peso e linfonodos aumentados de tamanho em região cervical, supraclavicular e inguinal bilateralmente.",
        "explanation": "Incorreta: Sintomas B (febre inexplicada, sudorese noturna, perda ponderal), linfonodomegalia generalizada e equimoses sugerem doença linfoproliferativa/leucemia aguda.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Equimoses em múltiplos estágios evolutivos de cicatrização e localizadas em áreas atípicas (face, coxas) acompanhadas de evitação em falar sobre o ocorrido são fortes indícios de **maus-tratos / violência física** contra adolescente. Conforme o Estatuto da Criança e do Adolescente (ECA, Art. 13 e 245), a simples suspeita ou confirmação de maus-tratos obriga a notificação imediata ao **Conselho Tutelar** (além da notificação no Sinan).\n- **A) Incorreta:** O quadro clínico é de doença meningocócica aguda (febre, vômitos, púrpuras, rigidez de nuca).\n- **C) Incorreta:** O quadro clínico é sugestivo de dengue com sinais de alarme (febre, dor retro-orbitária, sangramento gengival, petéquias).\n- **D) Incorreta:** Sintomas B (febre inexplicada, sudorese noturna, perda ponderal), linfonodomegalia generalizada e equimoses sugerem doença linfoproliferativa/leucemia aguda.",
    "perolaClinica": "Equimoses em múltiplos estágios evolutivos de cicatrização e localizadas em áreas atípicas (face, coxas) acompanhadas de evitação em falar sobre o ocorrido são fortes indícios de **maus-tratos / violência física** contra adolescente.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento de sinais físicos e comportamentais de maus-tratos infantojuvenis e notificação obrigatória ao Conselho Tutelar.",
      "raciocinioChave": "Equimoses em diferentes estágios de evolução em áreas atípicas (face, coxas) acompanhadas de evitação em relatar a origem configuram forte suspeita de violência física contra adolescente. Pelo ECA, toda suspeita exige notificação imediata ao Conselho Tutelar.",
      "armadilhaBanca": "Confundir sinais clínicos de doenças graves (meningococcemia, dengue com sinais de alarme, leucemia aguda) com indícios de violência física infantil."
    },
    "mapaDistratores": {
      "A": "Febre, vômitos, púrpuras em membros e rigidez de nuca configuram doença meningocócica aguda, uma emergência infecciosa e não lesão por maus-tratos.",
      "C": "Febre, dor retro-orbitária, sangramento gengival e petéquias caracterizam dengue com sinais de alarme, justificando as manifestações hemorrágicas.",
      "D": "Equimoses associadas a sintomas B (febre, sudorese noturna, emagrecimento) e linfonodomegalia generalizada apontam para neoplasia hematológica ou doença linfoproliferativa."
    }
  },
  {
    "id": "q-enamed-2025-024",
    "code": "Q-ENAMED25-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Apendicite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-apendicite-aguda",
    "tags": [
      "apendicite-aguda",
      "abdome-agudo-inflamatorio",
      "ultrassonografia-abdominal",
      "parecer-cirurgico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, 27 anos, é atendida em Unidade de Pronto Atendimento (UPA) com história de dor abdominal, com início em epigástrio há dois dias, contínua, sem fatores de melhora, associada a náuseas e perda de apetite, evoluindo para dor em fossa ilíaca direita há 1 dia e febre de 38,2 °C no dia do atendimento. Nega comorbidades, cirurgias prévias ou uso de medicações regulares. Relata que a última menstruação foi há 23 dias, e apresenta ciclos regulares de 28 dias.\n\nExame físico: regular estado geral, corada, desidratada +/4+, eupneica, anictérica, acianótica; ausculta pulmonar e cardíaca sem alterações; ruídos hidroaéreos diminuídos, descompressão brusca dolorosa em quadrante inferior de abdome à direita.\n\n| Exame | Resultado | Valor de referência |\n|---|---|---|\n| Hemoglobina | 10,7 g/dL | 11,5 a 15,5 g/dL |\n| Hematócrito | 37% | 38 a 52% |\n| Leucócitos totais | 13.400/mm³ | 4.000 a 11.000/mm³ |\n| Bastonetes | 7% | 0 a 5% |\n| Urina | 25 leucócitos/campo | -- |\n| Hemácias | 8 hemácias/campo | -- |\n| Beta-hCG sérico | negativo | -- |\n\nConsiderando o diagnóstico mais provável, a conduta adequada é",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar antibioticoterapia empírica até resultado de exame de urocultura.",
        "explanation": "Incorreta: A dor migratória e a irritação peritoneal localizada em FID não são explicadas por infecção urinária baixa simples.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "realizar tomografia computadorizada de abdome e iniciar metotrexato.",
        "explanation": "Incorreta: Metotrexato é usado em gravidez ectópica íntegra, já descartada pelo beta-hCG negativo.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "iniciar antibioticoterapia empírica e acompanhamento ambulatorial.",
        "explanation": "Incorreta: Paciente com irritação peritoneal e suspeita de apendicite aguda não deve receber alta para acompanhamento ambulatorial.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "realizar ultrassonografia de abdome e solicitar parecer cirúrgico.",
        "explanation": "A alternativa **D** está correta. Quadro clássico de **apendicite aguda**: dor epigástrica migratória para fossa ilíaca direita (FID), anorexia, náuseas, febre, sinal de Blumberg (descompressão brusca dolorosa em FID) e leucocitose com desvio à esquerda (note que leucocitúria leve no EAS pode ocorrer por contiguidade inflamatória com ureter/bexiga, e beta-hCG negativo afasta gravidez ectópica). A conduta adequada é solicitar **ultrassonografia de abdome** (exame inicial útil em mulheres jovens em idade fértil para confirmar apendicite e afastar diagnósticos ginecológicos) e **parecer cirúrgico** para apendicectomia.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Quadro clássico de **apendicite aguda**: dor epigástrica migratória para fossa ilíaca direita (FID), anorexia, náuseas, febre, sinal de Blumberg (descompressão brusca dolorosa em FID) e leucocitose com desvio à esquerda (note que leucocitúria leve no EAS pode ocorrer por contiguidade inflamatória com ureter/bexiga, e beta-hCG negativo afasta gravidez ectópica). A conduta adequada é solicitar **ultrassonografia de abdome** (exame inicial útil em mulheres jovens em idade fértil para confirmar apendicite e afastar diagnósticos ginecológicos) e **parecer cirúrgico** para apendicectomia.\n- **A) Incorreta:** A dor migratória e a irritação peritoneal localizada em FID não são explicadas por infecção urinária baixa simples.\n- **B) Incorreta:** Metotrexato é usado em gravidez ectópica íntegra, já descartada pelo beta-hCG negativo.\n- **C) Incorreta:** Paciente com irritação peritoneal e suspeita de apendicite aguda não deve receber alta para acompanhamento ambulatorial.",
    "perolaClinica": "Quadro clássico de **apendicite aguda**: dor epigástrica migratória para fossa ilíaca direita (FID), anorexia, náuseas, febre, sinal de Blumberg (descompressão brusca dolorosa em FID) e leucocitose com desvio à esquerda (note que leucocitúria leve no EAS pode ocorrer por contiguidade inflamatória com ureter/bexiga, e beta-hCG negativo afasta gravidez ectópica).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico-laboratorial da apendicite aguda e conduta cirúrgica com ultrassonografia complementar.",
      "raciocinioChave": "Dor epigástrica migratória para fossa ilíaca direita, febre, Blumberg positivo e leucocitose com desvio à esquerda são típicos de apendicite aguda, descartada gravidez ectópica pelo beta-hCG negativo. Deve-se solicitar ultrassonografia abdominal para confirmação e parecer cirúrgico.",
      "armadilhaBanca": "Valorizar leucocitúria discreta por contiguidade inflamatória como infecção urinária ou confundir quadro apendicular com gestação ectópica apesar de beta-hCG negativo."
    },
    "mapaDistratores": {
      "A": "A presença de irritação peritoneal localizada (Blumberg) e dor migratória clássica não se explica por infecção urinária baixa, sendo a leucocitúria discreta secundária à contiguidade inflamatória.",
      "B": "O metotrexato é indicado na gravidez ectópica íntegra, hipótese afastada pelo beta-hCG negativo e pelo quadro inflamatório típico de apendicite.",
      "C": "Paciente com sinal de irritação peritoneal e forte suspeita de abdome agudo inflamatório não pode receber alta com antibiótico empírico para acompanhamento ambulatorial."
    }
  },
  {
    "id": "q-enamed-2025-025",
    "code": "Q-ENAMED25-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Diabetes Mellitus Gestacional e Prévio",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-diabetes-mellitus-gestacional-e-previo",
    "tags": [
      "diabetes-gestacional",
      "puerperio",
      "insulinoterapia",
      "conduta-pos-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Multípara, 37 semanas, obesa, apresentando *diabetes mellitus* gestacional controlada com insulina NPH e regular. Evoluiu para parto normal, e o recém-nascido pesou 3.300 g.\n\nA conduta no puerpério imediato deve ser",
    "alternativas": [
      {
        "letter": "A",
        "text": "suspender insulinoterapia.",
        "explanation": "A alternativa **A** está correta. No *diabetes mellitus* gestacional (DMG), a resistência insulínica decorre principalmente dos hormônios contrainsulínicos placentários (como o lactogênio placentário). Com a dequitação da placenta após o parto, a necessidade de insulina cai abruptamente, devendo-se **suspender imediatamente a insulinoterapia** no puerpério imediato (com monitorização glicêmica pós-parto e realização de TOTG 75g com 6 semanas para reclassificação metabólica), conforme diretrizes da SBD e FEBRASGO.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "iniciar hipoglicemiante oral.",
        "explanation": "Incorreta: Não há indicação de iniciar hipoglicemiante oral de rotina no puerpério imediato de DMG sem constatação de hiperglicemia persistente.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "manter insulina NPH em 1/3 da dose da gravidez.",
        "explanation": "Incorreta: A redução para 1/3 a 1/2 da dose aplica-se a gestantes com diabetes prévio (DM1 ou DM2 pré-gestacional), e não ao DMG.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "manter insulinoterapia com a dosagem do pré-natal.",
        "explanation": "Incorreta: Manter a dose do pré-natal em paciente com DMG após o parto provocaria hipoglicemia grave.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. No *diabetes mellitus* gestacional (DMG), a resistência insulínica decorre principalmente dos hormônios contrainsulínicos placentários (como o lactogênio placentário). Com a dequitação da placenta após o parto, a necessidade de insulina cai abruptamente, devendo-se **suspender imediatamente a insulinoterapia** no puerpério imediato (com monitorização glicêmica pós-parto e realização de TOTG 75g com 6 semanas para reclassificação metabólica), conforme diretrizes da SBD e FEBRASGO.\n- **B) Incorreta:** Não há indicação de iniciar hipoglicemiante oral de rotina no puerpério imediato de DMG sem constatação de hiperglicemia persistente.\n- **C) Incorreta:** A redução para 1/3 a 1/2 da dose aplica-se a gestantes com diabetes prévio (DM1 ou DM2 pré-gestacional), e não ao DMG.\n- **D) Incorreta:** Manter a dose do pré-natal em paciente com DMG após o parto provocaria hipoglicemia grave.",
    "perolaClinica": "No *diabetes mellitus* gestacional (DMG), a resistência insulínica decorre principalmente dos hormônios contrainsulínicos placentários (como o lactogênio placentário).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Suspensão imediata da insulinoterapia no puerpério de mulheres com diabetes mellitus gestacional.",
      "raciocinioChave": "No DMG, a resistência insulínica é mantida pelos hormônios placentários (como o lactogênio placentário). Após a dequitação da placenta no parto, a sensibilidade à insulina normaliza rapidamente, impondo a suspensão da insulina no puerpério imediato sob monitorização glicêmica.",
      "armadilhaBanca": "Aplicar no diabetes mellitus gestacional (DMG) a regra de redução para 1/3 da dose de insulina válida apenas para gestantes com diabetes prévio."
    },
    "mapaDistratores": {
      "B": "Não há indicação de iniciar hipoglicemiante oral rotineiramente no puerpério imediato do DMG sem comprovação de hiperglicemia persistente após o parto.",
      "C": "A redução para 1/3 a 1/2 da dose pré-parto aplica-se ao diabetes pré-gestacional (DM1 ou DM2), e não ao diabetes gestacional desencadeado pela placenta.",
      "D": "Manter a dose de insulina usada no terceiro trimestre após a expulsão placentária provocaria hipoglicemia puerperal grave."
    }
  },
  {
    "id": "q-enamed-2025-026",
    "code": "Q-ENAMED25-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Arboviroses",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-arboviroses",
    "tags": [
      "dengue",
      "sinais-de-alarme",
      "grupo-c",
      "hidratacao-venosa"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 34 anos se dirige à Unidade Básica de Saúde (UBS) com febre (38,5 °C), dores de moderada intensidade e manchas no corpo há 3 dias. No dia da consulta, iniciou com dores abdominais e vômitos incontroláveis. Exame físico: prostrado, mucosas coradas, extremidades bem perfundidas. Pressão arterial de 120 x 80 mmHg; frequência respiratória de 16 irpm; frequência cardíaca de 80 bpm. Leve dor à palpação abdominal, sem outras alterações.\n\nQual a hipótese diagnóstica e o manejo, respectivamente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Dengue grupo B. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; realizar acompanhamento domiciliar após exames.",
        "explanation": "Incorreta: Grupo B refere-se a pacientes sem sinais de alarme, mas com prova do laço positiva, sangramento espontâneo de pele, comorbidades ou risco social.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Dengue grupo C. Prescrever hidratação oral, analgésico e antiemético; solicitar hemograma, plaquetas e anticorpo IgM; realizar acompanhamento ambulatorial após exames.",
        "explanation": "Incorreta: Grupo C exige hidratação parenteral e observação/internação (não apenas hidratação oral e retorno ambulatorial), além de o NS1 ser o método indicado até o 5º dia de sintomas (IgM a partir do 6º dia).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Dengue grupo C. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas e antígeno NS1; manter em leito de observação até estabilização.",
        "explanation": "A alternativa **C** está correta. Paciente com quadro febril agudo e exantema há 3 dias (fase aguda até o 5º dia: exame específico de escolha é o **antígeno NS1**), evoluindo com **dor abdominal e vômitos persistentes/incontroláveis** (sinais de alarme), porém sem sinais de choque ou disfunção orgânica grave, classifica-se como **Dengue Grupo C** segundo o Manual de Manejo Clínico da Dengue (Ministério da Saúde, 2024). A conduta é **hidratação venosa (parenteral)** imediata, sintomáticos, solicitação de hemograma/plaquetas + NS1 e internação/observação em leito até estabilização clínica e laboratorial.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Dengue grupo B. Prescrever hidratação parenteral, analgésico e antiemético; solicitar hemograma, plaquetas, antígeno NS1 e anticorpo IgM; manter em leito de observação até estabilização.",
        "explanation": "Incorreta: A presença de sinais de alarme (dor abdominal + vômitos persistentes) exclui o Grupo B.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Paciente com quadro febril agudo e exantema há 3 dias (fase aguda até o 5º dia: exame específico de escolha é o **antígeno NS1**), evoluindo com **dor abdominal e vômitos persistentes/incontroláveis** (sinais de alarme), porém sem sinais de choque ou disfunção orgânica grave, classifica-se como **Dengue Grupo C** segundo o Manual de Manejo Clínico da Dengue (Ministério da Saúde, 2024). A conduta é **hidratação venosa (parenteral)** imediata, sintomáticos, solicitação de hemograma/plaquetas + NS1 e internação/observação em leito até estabilização clínica e laboratorial.\n- **A) Incorreta:** Grupo B refere-se a pacientes sem sinais de alarme, mas com prova do laço positiva, sangramento espontâneo de pele, comorbidades ou risco social.\n- **B) Incorreta:** Grupo C exige hidratação parenteral e observação/internação (não apenas hidratação oral e retorno ambulatorial), além de o NS1 ser o método indicado até o 5º dia de sintomas (IgM a partir do 6º dia).\n- **D) Incorreta:** A presença de sinais de alarme (dor abdominal + vômitos persistentes) exclui o Grupo B.",
    "perolaClinica": "Paciente com quadro febril agudo e exantema há 3 dias (fase aguda até o 5º dia: exame específico de escolha é o **antígeno NS1**), evoluindo com **dor abdominal e vômitos persistentes/incontroláveis** (sinais de alarme), porém sem sinais de choque ou disfunção orgânica grave, classifica-se como **Dengue Grupo C** segundo o Manual de Manejo Clínico da Dengue (Ministério da Saúde, 2024).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Classificação de dengue Grupo C por sinais de alarme e escolha de hidratação venosa com pesquisa de NS1 até o 5º dia.",
      "raciocinioChave": "Quadro febril com exantema no 3º dia evoluindo com dor abdominal e vômitos persistentes configura dengue com sinais de alarme (Grupo C), exigindo hidratação venosa imediata e leito de observação. Até o 5º dia de sintomas, o exame etiológico indicado é o antígeno NS1.",
      "armadilhaBanca": "Trocar o teste diagnóstico específico por fase clínica (NS1 até o 5º dia vs. IgM a partir do 6º dia) ou subestimar os sinais de alarme como Grupo B."
    },
    "mapaDistratores": {
      "A": "O Grupo B aplica-se a casos sem sinais de alarme (com prova do laço positiva, comorbidades ou risco social), não contemplando vômitos persistentes e dor abdominal.",
      "B": "O Grupo C exige hidratação parenteral em observação hospitalar, e não manejo ambulatorial com hidratação oral; além disso, a sorologia IgM positiva-se apenas a partir do 6º dia.",
      "D": "A presença inequívoca de sinais de alarme exclui a classificação de Grupo B, e a solicitação simultânea de IgM no 3º dia de doença não é indicada pelo protocolo."
    }
  },
  {
    "id": "q-enamed-2025-027",
    "code": "Q-ENAMED25-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": [
      "lombalgia-inespecifica",
      "prevencao-quaternaria",
      "atencao-primaria",
      "sem-sinais-de-alarme"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 48 anos, auxiliar de pedreiro, procura Unidade Básica de Saúde (UBS) com queixa de dor lombar iniciada há 3 semanas, de instalação insidiosa, sem irradiação. Relata que a dor piora ao final do dia e melhora parcialmente com repouso e uso de paracetamol. Nega perda de peso, febre, traumas, incontinência ou fraqueza nos membros inferiores. Ao exame físico, apresenta dor à palpação paravertebral em região lombar, sem alterações neurológicas.\n\nCom base na história clínica e no exame físico, qual o próximo passo na condução desse caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar ressonância magnética da coluna lombar e encaminhar para a ortopedia.",
        "explanation": "Incorreta: Ressonância magnética e encaminhamento à ortopedia são reservados para lombalgia com sinais de alarme, déficit neurológico progressivo ou falha após 4–6 semanas de manejo conservador.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Solicitar radiografia lombar, prescrever corticoide oral e agendar o retorno após 10 dias.",
        "explanation": "Incorreta: Radiografia lombar não muda conduta na lombalgia inespecífica sem *red flags*, e corticoide oral não tem benefício comprovado na lombalgia mecânica.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Orientar repouso, fornecer atestado de 7 dias e otimizar a analgesia com antidepressivo tricíclico.",
        "explanation": "Incorreta: Repouso prolongado piora o prognóstico funcional da lombalgia aguda, e antidepressivos tricíclicos são opções para dor crônica/neuropática.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Explicar a natureza benigna, orientar analgesia e atividade física leve, com reavaliação em 4 a 6 semanas.",
        "explanation": "A alternativa **D** está correta. Trata-se de **lombalgia aguda mecânica inespecífica** (< 4–6 semanas), sem bandeiras vermelhas (*red flags*: perda ponderal, febre, trauma, déficit neurológico ou síndrome da cauda equina). Segundo as diretrizes de APS (Ministério da Saúde) e o ACP (American College of Physicians), não há indicação de exames de imagem iniciais; deve-se tranquilizar o paciente quanto ao caráter benigno e autolimitado, manter analgesia simples/AINE se necessário, estimular manutenção das atividades/exercícios leves (evitando repouso absoluto) e reavaliar em 4 a 6 semanas se persistir.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Trata-se de **lombalgia aguda mecânica inespecífica** (< 4–6 semanas), sem bandeiras vermelhas (*red flags*: perda ponderal, febre, trauma, déficit neurológico ou síndrome da cauda equina). Segundo as diretrizes de APS (Ministério da Saúde) e o ACP (American College of Physicians), não há indicação de exames de imagem iniciais; deve-se tranquilizar o paciente quanto ao caráter benigno e autolimitado, manter analgesia simples/AINE se necessário, estimular manutenção das atividades/exercícios leves (evitando repouso absoluto) e reavaliar em 4 a 6 semanas se persistir.\n- **A) Incorreta:** Ressonância magnética e encaminhamento à ortopedia são reservados para lombalgia com sinais de alarme, déficit neurológico progressivo ou falha após 4–6 semanas de manejo conservador.\n- **B) Incorreta:** Radiografia lombar não muda conduta na lombalgia inespecífica sem *red flags*, e corticoide oral não tem benefício comprovado na lombalgia mecânica.\n- **C) Incorreta:** Repouso prolongado piora o prognóstico funcional da lombalgia aguda, e antidepressivos tricíclicos são opções para dor crônica/neuropática.",
    "perolaClinica": "Trata-se de **lombalgia aguda mecânica inespecífica** (< 4–6 semanas), sem bandeiras vermelhas (*red flags*: perda ponderal, febre, trauma, déficit neurológico ou síndrome da cauda equina).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo conservador sem imagem inicial na lombalgia mecânica aguda inespecífica sem bandeiras vermelhas.",
      "raciocinioChave": "Dor lombar há 3 semanas relacionada ao esforço, sem irradiação, déficits neurológicos ou bandeiras vermelhas (febre, perda ponderal, trauma, cauda equina), caracteriza lombalgia mecânica inespecífica. Indica-se educação sobre benignidade, analgesia simples, manutenção de atividade leve e reavaliação em 4–6 semanas.",
      "armadilhaBanca": "Solicitar exames de imagem precoces (radiografia ou RNM) ou prescrever repouso absoluto na lombalgia aguda mecânica sem sinais de alarme."
    },
    "mapaDistratores": {
      "A": "Ressonância magnética e encaminhamento ortopédico são indicados apenas se houver sinais de alarme, déficit neurológico progressivo ou falha após 4 a 6 semanas de tratamento conservador.",
      "B": "A radiografia lombar é desnecessária na ausência de red flags e o corticoide oral não demonstra benefício clínico na lombalgia mecânica aguda inespecífica.",
      "C": "O repouso absoluto prolongado piora o desfecho funcional na lombalgia aguda, e antidepressivos tricíclicos são reservados para dor crônica ou componente neuropático."
    }
  },
  {
    "id": "q-enamed-2025-028",
    "code": "Q-ENAMED25-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Emergências Psiquiátricas e Risco de Suicídio",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-emergencias-psiquiatricas-e-risco-de-suicidio",
    "tags": [
      "internacao-involuntaria",
      "reforma-psiquiatrica",
      "lei-10216",
      "laudo-medico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "“Internações sem consentimento aumentam na Cracolândia, em meio a denúncias de agressões”.\nZYLBERKAN, M.; KRUSE, T. Folha de S. Paulo, 3 jul. 2024.\n\nNotícias como esta têm se tornado frequentes em jornais brasileiros nos últimos anos. Alguns municípios têm criado leis locais próprias para as internações involuntárias que muitas vezes contradizem as leis federais sobre o tema.\n\nSobre a internação involuntária no Brasil, é correto afirmar que",
    "alternativas": [
      {
        "letter": "A",
        "text": "a internação involuntária é determinada, de acordo com a legislação, pela Justiça.",
        "explanation": "Incorreta: A internação determinada pela Justiça é a internação **compulsória**, e não a involuntária.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "é autorizada por médico devidamente registrado no Conselho Regional de Medicina.",
        "explanation": "A alternativa **B** está correta. Conforme a Lei da Reforma Psiquiátrica (Lei nº 10.216/2001, Art. 6º e 8º), toda internação psiquiátrica — inclusive a **involuntária** (sem consentimento do usuário e a pedido de terceiro) — somente será realizada mediante **laudo médico circunstanciado** que caracterize os seus motivos e seja **autorizada por médico devidamente registrado no Conselho Regional de Medicina (CRM)** do Estado onde se localize o estabelecimento.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "no prazo de 15 dias, a internação deve ser comunicada ao Ministério Público Federal.",
        "explanation": "Incorreta: A internação involuntária deve ser comunicada ao **Ministério Público Estadual** no prazo máximo de **72 horas** (e não 15 dias ao MPF).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "o término da internação involuntária ocorrerá por solicitação do Ministério Público Municipal.",
        "explanation": "Incorreta: O término da internação involuntária dá-se por solicitação escrita do familiar/responsável legal ou quando estabelecido pelo especialista responsável pelo tratamento.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Conforme a Lei da Reforma Psiquiátrica (Lei nº 10.216/2001, Art. 6º e 8º), toda internação psiquiátrica — inclusive a **involuntária** (sem consentimento do usuário e a pedido de terceiro) — somente será realizada mediante **laudo médico circunstanciado** que caracterize os seus motivos e seja **autorizada por médico devidamente registrado no Conselho Regional de Medicina (CRM)** do Estado onde se localize o estabelecimento.\n- **A) Incorreta:** A internação determinada pela Justiça é a internação **compulsória**, e não a involuntária.\n- **C) Incorreta:** A internação involuntária deve ser comunicada ao **Ministério Público Estadual** no prazo máximo de **72 horas** (e não 15 dias ao MPF).\n- **D) Incorreta:** O término da internação involuntária dá-se por solicitação escrita do familiar/responsável legal ou quando estabelecido pelo especialista responsável pelo tratamento.",
    "perolaClinica": "Conforme a Lei da Reforma Psiquiátrica (Lei nº 10.216/2001, Art.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Requisitos legais da internação psiquiátrica involuntária segundo a Lei nº 10.216/2001 (Reforma Psiquiátrica).",
      "raciocinioChave": "Pela Lei nº 10.216/2001, a internação psiquiátrica involuntária (sem consentimento do usuário, a pedido de terceiro) só pode ser realizada após laudo médico circunstanciado e autorização por médico devidamente registrado no CRM do respectivo Estado.",
      "armadilhaBanca": "Confundir internação involuntária (autorizada por médico e comunicada ao MP Estadual em 72h) com internação compulsória (determinada pela Justiça)."
    },
    "mapaDistratores": {
      "A": "A internação determinada por ordem judicial é a internação compulsória, distinta da internação involuntária solicitada por familiares ou terceiros.",
      "C": "A internação involuntária deve ser comunicada ao Ministério Público Estadual no prazo máximo de 72 horas, e não em 15 dias ao Ministério Público Federal.",
      "D": "O término da internação involuntária ocorre por solicitação escrita do familiar/responsável legal ou por decisão do médico especialista responsável pelo tratamento."
    }
  },
  {
    "id": "q-enamed-2025-029",
    "code": "Q-ENAMED25-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "AVC Isquêmico e AIT",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-avc-isquemico-e-ait",
    "tags": [
      "avc-isquemico",
      "trombolise",
      "contraindicacoes",
      "arteria-cerebral-media"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 68 anos, em tratamento crônico irregular de hipertensão arterial sistêmica, *diabetes mellitus* e fibrilação atrial, é admitido em Unidade de Pronto Atendimento (UPA) com quadro de rebaixamento do nível de consciência e déficit neurológico do lado esquerdo, de predomínio braquiofacial. Segundo o acompanhante, o paciente tinha ido se deitar havia 90 minutos, sem qualquer sintoma antes de ser encontrado com o transtorno observado. Foi levado ao hospital, onde deu entrada 30 minutos após constatado o déficit focal. Ao exame físico, paciente com 9 pontos na escala de coma de Glasgow modificada, exibindo hemiparesia acentuada à esquerda, pressão arterial de 170 x 100 mmHg em ambos os membros superiores, com ritmo cardíaco irregular, frequência cardíaca média de 96 bpm. Não há outras alterações expressivas ao exame físico. Glicemia capilar de 285 mg/dL; demais exames laboratoriais não revelam anormalidades. A tomografia computadorizada de crânio sem contraste revela área de atenuação de densidade em cerca de 40% do território da artéria cerebral média direita, cujo laudo é obtido cerca de 3 horas após o último momento em que o paciente foi visto sem déficits.\n\nO médico da unidade explica ao acompanhante que, apesar dos potenciais benefícios da terapia trombolítica em pacientes com acidente vascular encefálico isquêmico, o paciente apresenta contraindicação em função de",
    "alternativas": [
      {
        "letter": "A",
        "text": "apresentar extensão de isquemia superior a 1/3 do território da artéria cerebral média acometida.",
        "explanation": "A alternativa **A** está correta. De acordo com o Protocolo Clínico e Diretrizes Terapêuticas do AVC Isquêmico Agudo (Ministério da Saúde / AHA-ASA), a presença de hipodensidade extensa na TC de crânio comprometendo **mais de 1/3 do território da artéria cerebral média** (neste caso, ~40%) é contraindicação absoluta à trombólise endovenosa (alteplase), pelo altíssimo risco de transformação hemorrágica fatal.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "haver decorrido período de tempo superior ao limite máximo tolerável desde o início do déficit.",
        "explanation": "Incorreta: A janela padrão para trombólise endovenosa é de até 4,5 horas desde o último momento visto bem (aqui decorreram cerca de 3 horas).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "evoluir com glicemia acima de 200 mg/dL com intervalo maior que 2 horas pós-prandial.",
        "explanation": "Incorreta: Hiperglicemia (285 mg/dL) deve ser corrigida, mas não contraindica trombólise (o limite de contraindicação é glicemia < 50 mg/dL se explicar o déficit, ou > 400 mg/dL antes de correção).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "ter níveis pressóricos superiores aos permitidos para o uso do fármaco.",
        "explanation": "Incorreta: A PA de 170 x 100 mmHg está **abaixo** do limite máximo permitido para iniciar trombólise (< 185 x 110 mmHg).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. De acordo com o Protocolo Clínico e Diretrizes Terapêuticas do AVC Isquêmico Agudo (Ministério da Saúde / AHA-ASA), a presença de hipodensidade extensa na TC de crânio comprometendo **mais de 1/3 do território da artéria cerebral média** (neste caso, ~40%) é contraindicação absoluta à trombólise endovenosa (alteplase), pelo altíssimo risco de transformação hemorrágica fatal.\n- **B) Incorreta:** A janela padrão para trombólise endovenosa é de até 4,5 horas desde o último momento visto bem (aqui decorreram cerca de 3 horas).\n- **C) Incorreta:** Hiperglicemia (285 mg/dL) deve ser corrigida, mas não contraindica trombólise (o limite de contraindicação é glicemia < 50 mg/dL se explicar o déficit, ou > 400 mg/dL antes de correção).\n- **D) Incorreta:** A PA de 170 x 100 mmHg está **abaixo** do limite máximo permitido para iniciar trombólise (< 185 x 110 mmHg).",
    "perolaClinica": "De acordo com o Protocolo Clínico e Diretrizes Terapêuticas do AVC Isquêmico Agudo (Ministério da Saúde / AHA-ASA), a presença de hipodensidade extensa na TC de crânio comprometendo **mais de 1/3 do território da artéria cerebral média** (neste caso, ~40%) é contraindicação absoluta à trombólise endovenosa (alteplase), pelo altíssimo risco de transformação hemorrágica fatal.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Contraindicação tomográfica à trombólise no AVC isquêmico agudo por extensão superior a 1/3 do território da ACM.",
      "raciocinioChave": "Embora o paciente esteja dentro da janela de 4,5 horas e com PA inferior ao limite de 185 x 110 mmHg, a TC revela hipodensidade extensa (> 1/3 do território da artéria cerebral média). Esse achado constitui contraindicação à trombólise endovenosa pelo altíssimo risco de transformação hemorrágica fatal.",
      "armadilhaBanca": "Focar na hiperglicemia (285 mg/dL) ou na PA (170 x 100 mmHg, abaixo do teto de 185 x 110 mmHg) como contraindicações falsas à trombólise no AVCi."
    },
    "mapaDistratores": {
      "B": "Considerando o último momento visto bem há cerca de 2 a 3 horas, o paciente ainda se encontra dentro da janela terapêutica padrão de até 4,5 horas para alteplase.",
      "C": "Hiperglicemia isolada em 285 mg/dL requer controle glicêmico clínico, mas não contraindica a trombólise (o critério de exclusão é < 50 mg/dL ou > 400 mg/dL refratária).",
      "D": "A pressão arterial de 170 x 100 mmHg está abaixo do limiar máximo de 185 x 110 mmHg exigido antes da infusão do trombolítico."
    }
  },
  {
    "id": "q-enamed-2025-030",
    "code": "Q-ENAMED25-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Emergências Cirúrgicas Pediátricas",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-emergencias-cirurgicas-pediatricas",
    "tags": [
      "fimose-patologica",
      "balanopostite",
      "postectomia",
      "cirurgia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino de 6 anos é levado à Unidade Básica de Saúde (UBS) com queixa de fimose. Mãe relata balanopostites frequentes, sendo o primeiro episódio com 1 ano de vida. Nega infecções do trato urinário. Ao exame físico, apresenta prepúcio cobrindo toda a glande que, quando tracionado, expõe meato uretral e anel fibrótico prepucial.\n\nSobre o caso, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Trata-se de fimose fisiológica, necessitando de exercícios de redução e higiene do prepúcio.",
        "explanation": "Incorreta: A presença de anel fibrótico e infecções de repetição descarta fimose fisiológica; exercícios forçados (\"massagens\") são contraindicados por agravarem fissuras e fibrose.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Há indicação cirúrgica na adolescência, pois já está apresentando exposição de meato uretral.",
        "explanation": "Incorreta: Não se deve postergar a cirurgia até a adolescência quando já existem complicações (fibrose + balanopostites de repetição).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Há indicação cirúrgica, pois a criança apresenta balanopostites recorrentes com fibrose prepucial.",
        "explanation": "A alternativa **C** está correta. Embora a aderência prepucial fisiológica possa regredir espontaneamente até os 3–5 anos, a presença de **anel fibrótico prepucial** associada a **balanopostites recorrentes** caracteriza **fimose patológica**. Nesses casos, segundo a Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Urologia (SBU), há indicação formal de tratamento cirúrgico (postectomia), sem aguardar a adolescência.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Indica-se uso de creme de betametasona e hialuronidase por 4 semanas, uma vez que apresenta exposição de meato uretral.",
        "explanation": "Incorreta: Corticoide tópico tem boa resposta na fimose sem fibrose cicatricial importante e sem balanopostites recorrentes; na fibrose estabelecida com infecções repetidas, a indicação é cirúrgica.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Embora a aderência prepucial fisiológica possa regredir espontaneamente até os 3–5 anos, a presença de **anel fibrótico prepucial** associada a **balanopostites recorrentes** caracteriza **fimose patológica**. Nesses casos, segundo a Sociedade Brasileira de Pediatria (SBP) e a Sociedade Brasileira de Urologia (SBU), há indicação formal de tratamento cirúrgico (postectomia), sem aguardar a adolescência.\n- **A) Incorreta:** A presença de anel fibrótico e infecções de repetição descarta fimose fisiológica; exercícios forçados (\"massagens\") são contraindicados por agravarem fissuras e fibrose.\n- **B) Incorreta:** Não se deve postergar a cirurgia até a adolescência quando já existem complicações (fibrose + balanopostites de repetição).\n- **D) Incorreta:** Corticoide tópico tem boa resposta na fimose sem fibrose cicatricial importante e sem balanopostites recorrentes; na fibrose estabelecida com infecções repetidas, a indicação é cirúrgica.",
    "perolaClinica": "Embora a aderência prepucial fisiológica possa regredir espontaneamente até os 3–5 anos, a presença de **anel fibrótico prepucial** associada a **balanopostites recorrentes** caracteriza **fimose patológica**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Indicação cirúrgica (postectomia) na fimose patológica com anel fibrótico e balanopostites de repetição.",
      "raciocinioChave": "Apesar da exposição parcial do meato, a presença de anel fibrótico prepucial associada a balanopostites recorrentes desde 1 ano de vida define fimose patológica. Nessa situação, há indicação cirúrgica formal de postectomia sem aguardar a adolescência.",
      "armadilhaBanca": "Indicar exercícios de retração forçada ou corticoide tópico em criança com anel fibrótico cicatricial estabelecido e balanopostites recorrentes."
    },
    "mapaDistratores": {
      "A": "A presença de anel fibrótico e infecções de repetição exclui fimose fisiológica, e manobras forçadas de retração causam microfissuras que agravam a fibrose.",
      "B": "Não se deve postergar a cirurgia até a adolescência quando já existem complicações infecciosas recorrentes e fibrose cicatricial instalada.",
      "D": "O uso de corticoide tópico tem indicação na fimose sem fibrose cicatricial estabelecida e sem histórico de balanopostites de repetição."
    }
  },
  {
    "id": "q-enamed-2025-031",
    "code": "Q-ENAMED25-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Neoplasias Periampulares e de Pâncreas",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-neoplasias-periampulares-e-de-pancreas",
    "tags": [
      "cancer-de-pancreas",
      "ictericia-colestatica",
      "sinal-de-courvoisier-terrier",
      "tomografia-computadorizada"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 72 anos foi atendida em hospital de médio porte. Relatava emagrecimento e dor abdominal com irradiação para região dorsal há 3 meses; há 1 mês a urina ficou mais escura, começou a apresentar prurido cutâneo intenso e icterícia em escleras. Ao exame físico, encontrava-se ictérica +++/4+, emagrecida; exame do abdome com fígado palpável abaixo da borda costal direita, assim como uma massa bem definida, de consistência cística, não dolorosa em hipocôndrio direito.\n\nNesse caso, o mais adequado é solicitar",
    "alternativas": [
      {
        "letter": "A",
        "text": "ultrassonografia para avaliar colecistite crônica calculosa.",
        "explanation": "Incorreta: Colecistite crônica calculosa não explica icterícia colestática progressiva com vesícula distendida indolor e perda ponderal importante.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "tomografia computadorizada para avaliar vias biliares e pâncreas.",
        "explanation": "A alternativa **B** está correta. Idosa com síndrome consumptiva, dor epigástrica com irradiação dorsal, icterícia colestática progressiva (colúria, prurido) e **vesícula biliar palpável e indolor** (sinal de Courvoisier-Terrier) tem como principal hipótese **neoplasia periampular / adenocarcinoma de cabeça de pâncreas**. Segundo as diretrizes do NCCN e Colégio Brasileiro de Cirurgiões, o exame de escolha para diagnóstico, avaliação de ressecabilidade e estadiamento é a **tomografia computadorizada (TC) de abdome com contraste** (protocolo pancreático).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "colangiopancreatografia por ressonância para avaliar coledocolitíase.",
        "explanation": "Incorreta: A colangiorressonância é útil na suspeita de coledocolitíase, mas a TC com contraste é superior para estadiamento vascular e tumoral do pâncreas.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "biópsia percutânea com agulha da massa palpada para avaliar neoplasia.",
        "explanation": "Incorreta: A massa palpada em hipocôndrio direito é a vesícula biliar distendida (Courvoisier-Terrier), e não um tumor para punção percutânea — puncioná-la causaria coleperitônio.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Idosa com síndrome consumptiva, dor epigástrica com irradiação dorsal, icterícia colestática progressiva (colúria, prurido) e **vesícula biliar palpável e indolor** (sinal de Courvoisier-Terrier) tem como principal hipótese **neoplasia periampular / adenocarcinoma de cabeça de pâncreas**. Segundo as diretrizes do NCCN e Colégio Brasileiro de Cirurgiões, o exame de escolha para diagnóstico, avaliação de ressecabilidade e estadiamento é a **tomografia computadorizada (TC) de abdome com contraste** (protocolo pancreático).\n- **A) Incorreta:** Colecistite crônica calculosa não explica icterícia colestática progressiva com vesícula distendida indolor e perda ponderal importante.\n- **C) Incorreta:** A colangiorressonância é útil na suspeita de coledocolitíase, mas a TC com contraste é superior para estadiamento vascular e tumoral do pâncreas.\n- **D) Incorreta:** A massa palpada em hipocôndrio direito é a vesícula biliar distendida (Courvoisier-Terrier), e não um tumor para punção percutânea — puncioná-la causaria coleperitônio.",
    "perolaClinica": "Idosa com síndrome consumptiva, dor epigástrica com irradiação dorsal, icterícia colestática progressiva (colúria, prurido) e **vesícula biliar palpável e indolor** (sinal de Courvoisier-Terrier) tem como principal hipótese **neoplasia periampular / adenocarcinoma de cabeça de pâncreas**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Investigação por tomografia computadorizada de neoplasia periampular diante do sinal de Courvoisier-Terrier.",
      "raciocinioChave": "Idosa com perda ponderal, dor em faixa dorsal, icterícia colestática progressiva e vesícula palpável indolor (Courvoisier-Terrier) apresenta forte suspeita de neoplasia periampular/cabeça de pâncreas. A TC de abdome com contraste é o exame de escolha para diagnóstico e estadiamento de ressecabilidade.",
      "armadilhaBanca": "Indicar punção percutânea da massa palpável no hipocôndrio direito, sem reconhecer que se trata da vesícula biliar distendida (sinal de Courvoisier-Terrier)."
    },
    "mapaDistratores": {
      "A": "A colecistite crônica calculosa não cursa com icterícia colestática progressiva indolor, vesícula distendida palpável e síndrome consumptiva acentuada.",
      "C": "Embora a colangiorressonância avalie coledocolitíase, a TC com protocolo pancreático é superior na suspeita neoplásica para definir invasão vascular e estadiamento cirúrgico.",
      "D": "A massa cística palpada corresponde à vesícula biliar distendida pelo tumor periampular, de modo que sua punção percutânea provocaria extravasamento biliar e coleperitônio."
    }
  },
  {
    "id": "q-enamed-2025-032",
    "code": "Q-ENAMED25-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Hipertensão Crônica e Gestacional",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-hipertensao-cronica-e-gestacional",
    "tags": [
      "hipertensao-arterial-cronica",
      "profilaxia-de-pre-eclampsia",
      "alfa-metildopa",
      "aas-e-calcio"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente G5P3C1, 35 anos, idade gestacional de 15 semanas por ecografia realizada com 8 semanas, hipertensa crônica em uso de enalapril, antecedente de pré-eclâmpsia. Comparece à consulta de pré-natal na Unidade Básica de Saúde (UBS) com pressão arterial de 140 x 90 mmHg.\n\nQual é a conduta medicamentosa indicada para essa paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Captopril, varfarina e ácido acetilsalicílico.",
        "explanation": "Incorreta: Captopril (IECA) e varfarina (antagonista da vitamina K) são teratogênicos na gestação.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Furosemida, varfarina e carbonato de cálcio.",
        "explanation": "Incorreta: Furosemida não é anti-hipertensivo de primeira linha na gestação (pode reduzir perfusão placentária) e varfarina é contraindicada.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Losartana, enoxaparina e carbonato de cálcio.",
        "explanation": "Incorreta: Losartana (BRA) é teratogênica e formalmente contraindicada na gravidez.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Alfa-metildopa, ácido acetilsalicílico e carbonato de cálcio.",
        "explanation": "A alternativa **D** está correta. Gestante hipertensa crônica em uso de IECA (enalapril, teratogênico e contraindicado na gestação) deve ter o anti-hipertensivo substituído por fármaco seguro na gravidez, sendo a **alfa-metildopa** a primeira escolha no pré-natal pelo Ministério da Saúde/FEBRASGO. Além disso, por apresentar **dois fatores de alto risco para pré-eclâmpsia** (hipertensão arterial crônica e antecedente de pré-eclâmpsia) e estar entre 12 e 16–20 semanas, está indicada a profilaxia com **ácido acetilsalicílico (AAS 100–150 mg/dia)** e **carbonato de cálcio** (suplementação universal recomendada pelo MS/OMS).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Gestante hipertensa crônica em uso de IECA (enalapril, teratogênico e contraindicado na gestação) deve ter o anti-hipertensivo substituído por fármaco seguro na gravidez, sendo a **alfa-metildopa** a primeira escolha no pré-natal pelo Ministério da Saúde/FEBRASGO. Além disso, por apresentar **dois fatores de alto risco para pré-eclâmpsia** (hipertensão arterial crônica e antecedente de pré-eclâmpsia) e estar entre 12 e 16–20 semanas, está indicada a profilaxia com **ácido acetilsalicílico (AAS 100–150 mg/dia)** e **carbonato de cálcio** (suplementação universal recomendada pelo MS/OMS).\n- **A) Incorreta:** Captopril (IECA) e varfarina (antagonista da vitamina K) são teratogênicos na gestação.\n- **B) Incorreta:** Furosemida não é anti-hipertensivo de primeira linha na gestação (pode reduzir perfusão placentária) e varfarina é contraindicada.\n- **C) Incorreta:** Losartana (BRA) é teratogênica e formalmente contraindicada na gravidez.",
    "perolaClinica": "Gestante hipertensa crônica em uso de IECA (enalapril, teratogênico e contraindicado na gestação) deve ter o anti-hipertensivo substituído por fármaco seguro na gravidez, sendo a **alfa-metildopa** a primeira escolha no pré-natal pelo Ministério da Saúde/FEBRASGO.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Substituição de IECA por alfa-metildopa e profilaxia de pré-eclâmpsia com AAS e cálcio em gestante hipertensa crônica.",
      "raciocinioChave": "Gestante com 15 semanas em uso de enalapril (teratogênico) deve trocá-lo por alfa-metildopa, anti-hipertensivo de primeira escolha no pré-natal. Como possui dois fatores de alto risco para pré-eclâmpsia (HAS crônica e pré-eclâmpsia prévia), indicam-se AAS e carbonato de cálcio profiláticos.",
      "armadilhaBanca": "Manter IECA ou substituir por BRA (losartana) ou varfarina na gravidez, desconhecendo o risco teratogênico e a indicação de profilaxia de pré-eclâmpsia."
    },
    "mapaDistratores": {
      "A": "Tanto o captopril (IECA) quanto a varfarina (antagonista da vitamina K) são formalmente contraindicados na gestação por teratogenicidade e toxicidade fetal.",
      "B": "A furosemida não é anti-hipertensivo de primeira escolha na gestação por risco de hipoperfusão placentária, e a varfarina é teratogênica.",
      "C": "A losartana (BRA) é teratogênica e proscrita durante a gravidez, além de não haver indicação de anticoagulação com enoxaparina nesse cenário."
    }
  },
  {
    "id": "q-enamed-2025-033",
    "code": "Q-ENAMED25-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": [
      "tuberculose-pulmonar",
      "retratamento-abandono",
      "trm-tb",
      "cultura-e-testes-de-sensibilidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 48 anos busca atendimento na Unidade Básica de Saúde (UBS) para reiniciar tratamento para tuberculose. Paciente refere que iniciou o tratamento poliquimioterápico há 6 meses, quando foi diagnosticado com tuberculose; porém, há 2 meses, interrompeu o acompanhamento na sua unidade de origem devido ao uso de substâncias psicoativas. Ele se mudou para o território da unidade há 15 dias e foi visitado pelo agente comunitário, que o orientou a procurar atendimento médico para avaliação e retomada do tratamento. Foram solicitados, inicialmente, o teste rápido molecular para tuberculose (TRM-TB), baciloscopia de escarro e radiografia de tórax.\n\nQual a conduta adequada para esse caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Se o TRM-TB for positivo, sem resistência à rifampicina, e a baciloscopia for negativa, reiniciar o esquema básico.",
        "explanation": "Incorreta: Em caso de retratamento após abandono, mesmo com TRM-TB positivo sensível à rifampicina, a cultura com TS é obrigatória para avaliar resistência à isoniazida e demais fármacos antes/durante o reinício.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Se o TRM-TB for negativo e a baciloscopia for positiva, reiniciar o esquema básico, desde que a resistência à rifampicina seja positiva.",
        "explanation": "Incorreta: Se o TRM-TB foi negativo, ele não detectou resistência à rifampicina (e se houvesse resistência à rifampicina, o esquema básico não seria o definitivo).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Se o TRM-TB for negativo e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.",
        "explanation": "A alternativa **C** está correta. De acordo com o Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde), todo paciente em **retratamento (retorno após abandono)** deve realizar cultura com teste de sensibilidade (TS). Caso o TRM-TB venha negativo (por exemplo, possível micobactéria não tuberculosa ou baixa carga/inibidores) com baciloscopia positiva, deve-se **solicitar cultura com TS** e **reiniciar o esquema básico (RIPE)** enquanto se aguarda o resultado da cultura e do TS.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Se o TRM-TB for positivo, com resistência à rifampicina, e a baciloscopia for positiva, solicitar cultura de escarro com teste de sensibilidade e reiniciar o esquema básico enquanto se aguarda a cultura.",
        "explanation": "Incorreta: Diante de TRM-TB com resistência à rifampicina detectada, o paciente não deve reiniciar esquema básico, devendo repetir o TRM-TB/solicitar cultura + TS e ser encaminhado à referência terciária para esquema de TB-DR (em até 7 dias).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde), todo paciente em **retratamento (retorno após abandono)** deve realizar cultura com teste de sensibilidade (TS). Caso o TRM-TB venha negativo (por exemplo, possível micobactéria não tuberculosa ou baixa carga/inibidores) com baciloscopia positiva, deve-se **solicitar cultura com TS** e **reiniciar o esquema básico (RIPE)** enquanto se aguarda o resultado da cultura e do TS.\n- **A) Incorreta:** Em caso de retratamento após abandono, mesmo com TRM-TB positivo sensível à rifampicina, a cultura com TS é obrigatória para avaliar resistência à isoniazida e demais fármacos antes/durante o reinício.\n- **B) Incorreta:** Se o TRM-TB foi negativo, ele não detectou resistência à rifampicina (e se houvesse resistência à rifampicina, o esquema básico não seria o definitivo).\n- **D) Incorreta:** Diante de TRM-TB com resistência à rifampicina detectada, o paciente não deve reiniciar esquema básico, devendo repetir o TRM-TB/solicitar cultura + TS e ser encaminhado à referência terciária para esquema de TB-DR (em até 7 dias).",
    "perolaClinica": "De acordo com o Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde), todo paciente em **retratamento (retorno após abandono)** deve realizar cultura com teste de sensibilidade (TS).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Fluxograma de investigação e conduta no retratamento de tuberculose por abandono com TRM-TB negativo e baciloscopia positiva.",
      "raciocinioChave": "Todo retorno após abandono exige coleta de cultura com teste de sensibilidade (TS) para detectar eventuais resistências. Se o TRM-TB vier negativo mas a baciloscopia for positiva, solicita-se cultura com TS e reinicia-se o esquema básico enquanto se aguarda o resultado definitivo.",
      "armadilhaBanca": "Reiniciar esquema básico diante de TRM-TB com resistência à rifampicina ou deixar de solicitar cultura com teste de sensibilidade no retorno após abandono."
    },
    "mapaDistratores": {
      "A": "No retratamento após abandono, a solicitação de cultura com teste de sensibilidade é obrigatória mesmo quando o TRM-TB resulta positivo e sensível à rifampicina.",
      "B": "Um TRM-TB negativo não fornece informação de resistência à rifampicina, e a presença de resistência à rifampicina contraindicaria a manutenção definitiva do esquema básico.",
      "D": "Diante de resistência à rifampicina detectada no TRM-TB, não se reinicia o esquema básico, devendo-se repetir o exame, solicitar cultura com TS e encaminhar para esquema de TB-DR."
    }
  },
  {
    "id": "q-enamed-2025-034",
    "code": "Q-ENAMED25-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": [
      "sensibilidade-e-especificidade",
      "valor-preditivo-positivo",
      "prevalencia",
      "falso-positivo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma instituição de saúde está pesquisando um novo teste de triagem para hanseníase, com sensibilidade de 92% e especificidade de 65%, aplicado em uma população com baixa prevalência da doença.\n\nNesse contexto, é correto afirmar que",
    "alternativas": [
      {
        "letter": "A",
        "text": "quase todos os testes positivos indicarão verdadeiros casos de hanseníase, diante da elevada sensibilidade do teste.",
        "explanation": "Incorreta: Alta sensibilidade gera alto VPN (bom para excluir doença quando negativo), mas não garante alto VPP em baixa prevalência.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "o número de falsos-positivos será elevado, devido à baixa especificidade do teste e à baixa prevalência da doença.",
        "explanation": "A alternativa **B** está correta. A especificidade de 65% significa que 35% dos indivíduos sadios terão resultado falso-positivo. Quando aplicado em uma população de **baixa prevalência** (onde a grande maioria é sadia), o valor preditivo positivo (VPP) cai drasticamente e o **número absoluto de falsos-positivos será muito elevado** (Epidemiologia Clínica — Fletcher / Medronho).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "o número de falsos-negativos será elevado, reduzindo a capacidade do teste em detectar casos reais.",
        "explanation": "Incorreta: Como a sensibilidade é alta (92%), o número de falsos-negativos será baixo (8% dos doentes).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "a elevada sensibilidade do teste o torna ideal para a confirmação do diagnóstico de hanseníase.",
        "explanation": "Incorreta: Testes de alta sensibilidade e baixa especificidade servem para **triagem/rastreamento**, e não para confirmação diagnóstica (que exige alta especificidade).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. A especificidade de 65% significa que 35% dos indivíduos sadios terão resultado falso-positivo. Quando aplicado em uma população de **baixa prevalência** (onde a grande maioria é sadia), o valor preditivo positivo (VPP) cai drasticamente e o **número absoluto de falsos-positivos será muito elevado** (Epidemiologia Clínica — Fletcher / Medronho).\n- **A) Incorreta:** Alta sensibilidade gera alto VPN (bom para excluir doença quando negativo), mas não garante alto VPP em baixa prevalência.\n- **C) Incorreta:** Como a sensibilidade é alta (92%), o número de falsos-negativos será baixo (8% dos doentes).\n- **D) Incorreta:** Testes de alta sensibilidade e baixa especificidade servem para **triagem/rastreamento**, e não para confirmação diagnóstica (que exige alta especificidade).",
    "perolaClinica": "A especificidade de 65% significa que 35% dos indivíduos sadios terão resultado falso-positivo.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Impacto da baixa especificidade e baixa prevalência no aumento de falsos-positivos e queda do VPP em testes de triagem.",
      "raciocinioChave": "Com especificidade de 65%, 35% dos indivíduos sadios testam positivo. Em uma população de baixa prevalência onde a maioria absoluta é sadia, o valor preditivo positivo despenca e o número de falsos-positivos torna-se elevado, apesar da alta sensibilidade.",
      "armadilhaBanca": "Confundir alta sensibilidade com alto valor preditivo positivo (VPP) ou adequação do teste para confirmação diagnóstica em cenário de baixa prevalência."
    },
    "mapaDistratores": {
      "A": "Alta sensibilidade garante elevado valor preditivo negativo para excluir a doença, mas não assegura alto valor preditivo positivo em populações de baixa prevalência.",
      "C": "A sensibilidade elevada de 92% implica baixa taxa de falsos-negativos (apenas 8% dos indivíduos realmente doentes deixam de ser detectados).",
      "D": "Testes com alta sensibilidade e baixa especificidade prestam-se à triagem inicial, enquanto a confirmação diagnóstica exige testes com elevada especificidade."
    }
  },
  {
    "id": "q-enamed-2025-035",
    "code": "Q-ENAMED25-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": [
      "luto-agudo",
      "atencao-primaria-a-saude",
      "abordagem-centrada-na-pessoa",
      "seguimento-longitudinal"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 52 anos chega ao acolhimento de Unidade Básica de Saúde (UBS), muito chorosa, e relata: “Estou com dificuldade para dormir, não tenho comido direito, desde o ocorrido ... é o meu filho, sabe ... ele morreu há 3 dias ... e a dor no meu coração está muito forte, quase insuportável”. A paciente chora copiosamente e diz que sonha com uma pessoa gritando o nome de seu filho, relembrando o momento em que o tinha encontrado na rua, vítima de atropelamento. Após o primeiro acolhimento, ela fica um pouco mais calma, relatando que não pensa em se matar, que nunca tinha sido atendida por psiquiatra ou tomado medicamentos antes, mas que nesse momento precisa de muita ajuda.\n\nDiante do caso, qual a conduta adequada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prescrever inibidor de recaptação de serotonina para alívio dos sintomas depressivos e ansiosos.",
        "explanation": "Incorreta: Antidepressivos (ISRS) não são indicados no luto agudo fisiológico (3 dias) e demoram semanas para agir.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Encaminhar ao Centro de Atenção Psicossocial (CAPs) para seguimento intensivista com médico psiquiatra.",
        "explanation": "Incorreta: O CAPS destina-se a transtornos mentais graves e persistentes ou crises psiquiátricas agudas com risco, não sendo indicado para luto recente sem risco de suicídio.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Encaminhar para psicologia na atenção secundária para ofertar terapia psicanalítica breve.",
        "explanation": "Incorreta: Não há necessidade de encaminhamento imediato à atenção secundária; a UBS é o cenário ideal para o cuidado longitudinal.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Acompanhar longitudinalmente para observação e ofertar apoio pela equipe da UBS.",
        "explanation": "A alternativa **D** está correta. Trata-se de **reação aguda de luto normal** após perda traumática recentíssima (há 3 dias), sem ideação suicida, sem sintomas psicóticos e sem histórico psiquiátrico prévio. A medicalização precoce do luto normal viola os princípios da prevenção quaternária; conforme o Caderno de Atenção Básica em Saúde Mental (Ministério da Saúde) e o DSM-5, a conduta adequada é **acolhimento empático, escuta qualificada, apoio psicossocial e acompanhamento longitudinal pela equipe da UBS** (observando evolução caso evolua para transtorno de luto prolongado ou episódio depressivo maior).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Trata-se de **reação aguda de luto normal** após perda traumática recentíssima (há 3 dias), sem ideação suicida, sem sintomas psicóticos e sem histórico psiquiátrico prévio. A medicalização precoce do luto normal viola os princípios da prevenção quaternária; conforme o Caderno de Atenção Básica em Saúde Mental (Ministério da Saúde) e o DSM-5, a conduta adequada é **acolhimento empático, escuta qualificada, apoio psicossocial e acompanhamento longitudinal pela equipe da UBS** (observando evolução caso evolua para transtorno de luto prolongado ou episódio depressivo maior).\n- **A) Incorreta:** Antidepressivos (ISRS) não são indicados no luto agudo fisiológico (3 dias) e demoram semanas para agir.\n- **B) Incorreta:** O CAPS destina-se a transtornos mentais graves e persistentes ou crises psiquiátricas agudas com risco, não sendo indicado para luto recente sem risco de suicídio.\n- **C) Incorreta:** Não há necessidade de encaminhamento imediato à atenção secundária; a UBS é o cenário ideal para o cuidado longitudinal.",
    "perolaClinica": "Trata-se de **reação aguda de luto normal** após perda traumática recentíssima (há 3 dias), sem ideação suicida, sem sintomas psicóticos e sem histórico psiquiátrico prévio.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo longitudinal e prevenção quaternária na reação aguda de luto normal na atenção primária.",
      "raciocinioChave": "A paciente vivencia reação aguda de luto normal há 3 dias após perda traumática do filho, sem ideação suicida ou transtorno psiquiátrico prévio. A conduta adequada na APS baseia-se em acolhimento empático, suporte da equipe da UBS e acompanhamento longitudinal, evitando medicalização iatrogênica.",
      "armadilhaBanca": "Medicalizar precocemente o luto agudo fisiológico com antidepressivos ISRS ou encaminhar desnecessariamente para atenção secundária ou CAPS."
    },
    "mapaDistratores": {
      "A": "Inibidores da recaptação de serotonina não são indicados no luto agudo normal (3 dias) nem produzem efeito terapêutico imediato sobre a reação fisiológica de pesar.",
      "B": "O CAPS destina-se a transtornos mentais graves e persistentes ou crises com risco clínico/suicida, não cabendo para luto recente sem ideação suicida.",
      "C": "Não há indicação de encaminhamento imediato para psicoterapia especializada na atenção secundária diante de quadro agudo recente passível de acolhimento na UBS."
    }
  },
  {
    "id": "q-enamed-2025-036",
    "code": "Q-ENAMED25-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Geriatria e Oncologia Clínica",
    "subtema": "Síndromes Geriátricas e Avaliação Geriátrica Ampla",
    "temaSlug": "cm-geriatria",
    "subtemaSlug": "cm-geriatria-sindromes-geriatricas-e-avaliacao-geriatrica-ampla",
    "tags": [
      "polifarmacia",
      "hipotensao-postural",
      "quedas-em-idosos",
      "iatrogenia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 86 anos é levada pela filha à consulta no ambulatório de clínica médica, com queixa de quedas frequentes. A paciente tem diagnóstico prévio de hipertensão arterial sistêmica, *diabetes mellitus* tipo 2, dislipidemia, depressão, déficit cognitivo leve e constipação intestinal. Está em uso de losartana, hidroclorotiazida, atenolol, metformina, gliclazida, rosuvastatina, escitalopram, donepezila e lactulose. Segundo a filha da paciente, as quedas ocorrem em diversos horários do dia, mais frequentemente na madrugada, ao se levantar para ir ao banheiro. Ao exame físico, a idosa apresenta leve bradipsiquismo e sinais de sarcopenia; pressão arterial do membro superior direito de 138 x 92 mmHg, quando deitada, e 110 x 70 mmHg, quando sentada.\n\nO plano terapêutico apropriado contexto desse caso deve incluir",
    "alternativas": [
      {
        "letter": "A",
        "text": "sugerir avaliação oftalmológica para investigação de catarata.",
        "explanation": "Incorreta: Embora avaliação visual faça parte da abordagem multifatorial de quedas, não trata a causa direta documentada (hipotensão ortostática medicamentosa).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "encaminhar ao neurologista para investigar a presença de disautonomia.",
        "explanation": "Incorreta: Antes de investigar disautonomia primária com especialista, deve-se corrigir a causa iatrogênica evidente (polifarmácia anti-hipertensiva).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "rever a polifarmácia para reduzir fármacos indutores de hipotensão arterial.",
        "explanation": "A alternativa **C** está correta. A paciente apresenta **hipotensão ortostática** sintomática (queda da PAS de 138 para 110 mmHg — redução ≥ 20 mmHg — e PAD de 92 para 70 mmHg — redução ≥ 10 mmHg — ao mudar de decúbito) provocando quedas noturnas ao levantar-se, em contexto de **polifarmácia** (9 fármacos, incluindo três anti-hipertensivos: losartana, hidroclorotiazida e atenolol, além de donepezila e escitalopram). Segundo as diretrizes da SBGG e critérios de Beers/STOPP, a primeira medida prioritária é **revisar a prescrição e desprescrever/reduzir fármacos indutores de hipotensão**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "adicionar fármaco capaz de elevar os níveis tensionais, como a fludrocortisona.",
        "explanation": "Incorreta: Adicionar fludrocortisona em idosa usando três anti-hipertensivos constitui cascata iatrogênica grave.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. A paciente apresenta **hipotensão ortostática** sintomática (queda da PAS de 138 para 110 mmHg — redução ≥ 20 mmHg — e PAD de 92 para 70 mmHg — redução ≥ 10 mmHg — ao mudar de decúbito) provocando quedas noturnas ao levantar-se, em contexto de **polifarmácia** (9 fármacos, incluindo três anti-hipertensivos: losartana, hidroclorotiazida e atenolol, além de donepezila e escitalopram). Segundo as diretrizes da SBGG e critérios de Beers/STOPP, a primeira medida prioritária é **revisar a prescrição e desprescrever/reduzir fármacos indutores de hipotensão**.\n- **A) Incorreta:** Embora avaliação visual faça parte da abordagem multifatorial de quedas, não trata a causa direta documentada (hipotensão ortostática medicamentosa).\n- **B) Incorreta:** Antes de investigar disautonomia primária com especialista, deve-se corrigir a causa iatrogênica evidente (polifarmácia anti-hipertensiva).\n- **D) Incorreta:** Adicionar fludrocortisona em idosa usando três anti-hipertensivos constitui cascata iatrogênica grave.",
    "perolaClinica": "A paciente apresenta **hipotensão ortostática** sintomática (queda da PAS de 138 para 110 mmHg — redução ≥ 20 mmHg — e PAD de 92 para 70 mmHg — redução ≥ 10 mmHg — ao mudar de decúbito) provocando quedas noturnas ao levantar-se, em contexto de **polifarmácia** (9 fármacos, incluindo três anti-hipertensivos: losartana, hidroclorotiazida e atenolol, além de donepezila e escitalopram).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo da hipotensão ortostática iatrogênica por polifarmácia como causa de quedas em idosos.",
      "raciocinioChave": "A queda de 28 mmHg na PAS e 22 mmHg na PAD ao mudar de decúbito caracteriza hipotensão ortostática sintomática. Como a idosa usa três anti-hipertensivos entre nove fármacos, a conduta prioritária é revisar a polifarmácia para reduzir agentes hipotensores.",
      "armadilhaBanca": "Induzir à cascata iatrogênica com fludrocortisona ou investigação neurológica especializada antes de corrigir a polifarmácia evidente."
    },
    "mapaDistratores": {
      "A": "A avaliação oftalmológica não trata de imediato a causa hemodinâmica documentada das quedas noturnas.",
      "B": "Investigar disautonomia primária com especialista é prematuro antes de corrigir os fármacos hipotensores em uso.",
      "D": "Prescrever fludrocortisona mantendo três anti-hipertensivos configura cascata iatrogênica grave com risco de hipertensão supina e retenção hídrica."
    }
  },
  {
    "id": "q-enamed-2025-037",
    "code": "Q-ENAMED25-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Infecções de Vias Aéreas Superiores",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-infeccoes-de-vias-aereas-superiores",
    "tags": [
      "febre-reumatica",
      "artrite-migratoria",
      "streptococcus-pyogenes",
      "penicilina-g-benzatina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino, 10 anos, morador de área urbana, está em avaliação no pronto-atendimento por apresentar dor em cotovelo direito há 1 dia. Há 1 semana, iniciou quadro de febre de 38,5 °C, 1 a 2 picos ao dia, associada à dificuldade de deambular devido ao joelho direito apresentar-se “doloroso e inchado”. Após 4 dias, percebeu melhora da dor no joelho, porém o tornozelo direito começou a ficar “inchado e um pouco avermelhado”, doloroso, com melhora em 2 dias. Há 3 semanas, havia se queixado de dor de garganta. Sem outras queixas. Nega contato com animais domésticos. No momento do atendimento, está com dificuldade para movimentar o cotovelo direito por causa da dor e do edema, frequência cardíaca de 110 bpm e 2 bulhas rítmicas normofonéticas, com sopro sistólico de 3+/6+. Restante do exame físico sem anormalidades.\n\nConsiderando o quadro clínico apresentado, o agente etiológico e o tratamento de escolha são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "*Borrelia burgdorferi*; doxiciclina.",
        "explanation": "Incorreta: *Borrelia burgdorferi* causa doença de Lyme (eritema migrans após picada de carrapato).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "*Staphylococcus aureus*; oxacilina.",
        "explanation": "Incorreta: Artrite séptica por *S. aureus* é tipicamente monoarticular, fixa e destrutiva, não migratória após faringite.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "*Treponema pallidum*; penicilina G benzatina.",
        "explanation": "Incorreta: *Treponema pallidum* é o agente da sífilis.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "*Streptococcus pyogenes*; penicilina G benzatina.",
        "explanation": "A alternativa **D** está correta. Menino de 10 anos com **poliartrite migratória** de grandes articulações (joelho → tornozelo → cotovelo) e **cardite** (taquicardia + sopro sistólico 3+/6+), cerca de 3 semanas após faringoamigdalite, preenche os critérios de Jones para **febre reumática aguda**. O agente desencadeante é o estreptococo beta-hemolítico do grupo A (***Streptococcus pyogenes***), e o tratamento de escolha para erradicação do agente (e profilaxia secundária) segundo a Diretriz Brasileira de Febre Reumática (SBC/SBP) é a **penicilina G benzatina**.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Menino de 10 anos com **poliartrite migratória** de grandes articulações (joelho → tornozelo → cotovelo) e **cardite** (taquicardia + sopro sistólico 3+/6+), cerca de 3 semanas após faringoamigdalite, preenche os critérios de Jones para **febre reumática aguda**. O agente desencadeante é o estreptococo beta-hemolítico do grupo A (***Streptococcus pyogenes***), e o tratamento de escolha para erradicação do agente (e profilaxia secundária) segundo a Diretriz Brasileira de Febre Reumática (SBC/SBP) é a **penicilina G benzatina**.\n- **A) Incorreta:** *Borrelia burgdorferi* causa doença de Lyme (eritema migrans após picada de carrapato).\n- **B) Incorreta:** Artrite séptica por *S. aureus* é tipicamente monoarticular, fixa e destrutiva, não migratória após faringite.\n- **C) Incorreta:** *Treponema pallidum* é o agente da sífilis.",
    "perolaClinica": "Menino de 10 anos com **poliartrite migratória** de grandes articulações (joelho → tornozelo → cotovelo) e **cardite** (taquicardia + sopro sistólico 3+/6+), cerca de 3 semanas após faringoamigdalite, preenche os critérios de Jones para **febre reumática aguda**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios de Jones para febre reumática aguda pós-estreptocócica e erradicação do Streptococcus pyogenes.",
      "raciocinioChave": "Poliartrite migratória de grandes articulações associada a cardite (taquicardia e sopro sistólico) três semanas após faringite fecha o diagnóstico de febre reumática aguda. O agente desencadeante é o Streptococcus pyogenes, erradicado com penicilina G benzatina.",
      "armadilhaBanca": "Confundir poliartrite migratória pós-faringite com artrite séptica estafilocócica ou doença de Lyme."
    },
    "mapaDistratores": {
      "A": "Borrelia burgdorferi causa doença de Lyme transmitida por carrapatos, sem relação com faringite estreptocócica prévia.",
      "B": "Staphylococcus aureus provoca artrite séptica tipicamente monoarticular, fixa e destrutiva, não migratória.",
      "C": "Treponema pallidum é o agente etiológico da sífilis, não explicando poliartrite migratória e cardite após faringite."
    }
  },
  {
    "id": "q-enamed-2025-038",
    "code": "Q-ENAMED25-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Pancreatite Aguda e Crônica",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-pancreatite-aguda-e-cronica",
    "tags": [
      "pancreatite-cronica",
      "etilismo",
      "dor-epigastrica",
      "insuficiencia-pancreatica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 58 anos deu entrada no pronto-socorro com dor epigástrica irradiada para as costas, iniciada há 2 horas, progressiva, pós-prandial, acompanhada de náuseas, vômitos e sudorese. Relata episódios semelhantes no último ano, que melhoraram com uso de analgésico. Tabagista ativo, alcoolista de 8 doses de destilado por dia há 33 anos, nega comorbidades. Exame físico: corado, acianótico, anictérico, sudoreico, fácies de dor, agitado. Índice de massa corporal de 23 kg/m²; pressão arterial de 150 x 90 mmHg; frequência cardíaca de 74 bpm; frequência respiratória de 18 irpm; temperatura axilar de 37 °C. Abdome globoso, distendido, timpânico, peristalse presente, doloroso à palpação do epigástrio e hipocôndrio esquerdo.\n\nOs exames laboratoriais apresentam os seguintes resultados:\n\n| Exame | Resultado | Valor de referência |\n|---|---|---|\n| Hematócrito | 46% | 36 a 46% |\n| Hemoglobina | 15,0 g/dL | 12,0 a 15,0 g/dL |\n| Leucócitos | 12.000/mm³ | 4.000 a 10.000/mm³ |\n| Glicose | 120 mg/dL | 70 a 99 mg/dL |\n| Bilirrubina total | 1,2 mg/dL | 0,3 a 1,3 mg/dL |\n| Ureia | 38 mg/dL | 15 a 40 mg/dL |\n| Cálcio | 8,9 mg/dL | 8,7 a 10,2 mg/dL |\n| Amilase | 35 U/L | 20 a 96 U/L |\n| Lipase | 12 U/L | 3 a 43 U/L |\n| Fosfatase alcalina | 81 U/L | 33 a 96 U/L |\n| LDH | 127 U/L | 100 a 190 U/L |\n| TGO | 36 U/L | 5 a 40 U/L |\n\nQual é o provável diagnóstico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Colangite aguda.",
        "explanation": "Incorreta: Colangite aguda cursa com tríade de Charcot (febre, icterícia, dor em HCD) e elevação de bilirrubinas e fosfatase alcalina.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Colecistite aguda.",
        "explanation": "Incorreta: Colecistite aguda causa dor em hipocôndrio direito com sinal de Murphy, geralmente acompanhada de febre.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Doença ulcerosa péptica.",
        "explanation": "Incorreta: Embora doença ulcerosa péptica entre no diferencial de dor epigástrica, o histórico clássico de etilismo crônico (8 doses/dia por 33 anos) + tabagismo + dor epigástrica em faixa para o dorso pós-prandial com enzimas pancreáticas normais aponta para pancreatite crônica.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Pancreatite crônica.",
        "explanation": "A alternativa **D** está correta. Homem com etilismo pesado de longa data (33 anos) e tabagismo ativo, apresentando episódios recorrentes de dor epigástrica pós-prandial irradiada para o dorso, com **amilase e lipase normais** (devido à fibrose e destruição extensa do parênquima acinar pancreático) e glicemia levemente elevada, tem quadro típico de **pancreatite crônica** (agudização dolorosa).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Homem com etilismo pesado de longa data (33 anos) e tabagismo ativo, apresentando episódios recorrentes de dor epigástrica pós-prandial irradiada para o dorso, com **amilase e lipase normais** (devido à fibrose e destruição extensa do parênquima acinar pancreático) e glicemia levemente elevada, tem quadro típico de **pancreatite crônica** (agudização dolorosa).\n- **A) Incorreta:** Colangite aguda cursa com tríade de Charcot (febre, icterícia, dor em HCD) e elevação de bilirrubinas e fosfatase alcalina.\n- **B) Incorreta:** Colecistite aguda causa dor em hipocôndrio direito com sinal de Murphy, geralmente acompanhada de febre.\n- **C) Incorreta:** Embora doença ulcerosa péptica entre no diferencial de dor epigástrica, o histórico clássico de etilismo crônico (8 doses/dia por 33 anos) + tabagismo + dor epigástrica em faixa para o dorso pós-prandial com enzimas pancreáticas normais aponta para pancreatite crônica.",
    "perolaClinica": "Homem com etilismo pesado de longa data (33 anos) e tabagismo ativo, apresentando episódios recorrentes de dor epigástrica pós-prandial irradiada para o dorso, com **amilase e lipase normais** (devido à fibrose e destruição extensa do parênquima acinar pancreático) e glicemia levemente elevada, tem quadro típico de **pancreatite crônica** (agudização dolorosa).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de pancreatite crônica agudizada em etilista de longa data com enzimas pancreáticas normais.",
      "raciocinioChave": "Etilismo pesado por 33 anos e tabagismo associados a dor epigástrica pós-prandial recorrente irradiada para o dorso caracterizam pancreatite crônica. Na doença avançada, a fibrose acinar extensa mantém amilase e lipase normais mesmo durante crises dolorosas.",
      "armadilhaBanca": "Descartar pancreatite por amilase e lipase normais ou confundir a dor epigástrica com doença ulcerosa péptica."
    },
    "mapaDistratores": {
      "A": "A colangite aguda apresenta tríade de Charcot com febre, icterícia e dor em hipocôndrio direito, ausentes no caso.",
      "B": "A colecistite aguda manifesta-se com dor em hipocôndrio direito, febre e sinal de Murphy positivo.",
      "C": "Embora entre no diagnóstico diferencial da dor epigástrica, a doença ulcerosa péptica não explica o histórico prolongado de etilismo pesado com dor pós-prandial irradiada ao dorso."
    }
  },
  {
    "id": "q-enamed-2025-039",
    "code": "Q-ENAMED25-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Indução do Parto e Gestação Pós-Termo",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-inducao-do-parto-e-gestacao-pos-termo",
    "tags": [
      "gestacao-prolongada",
      "perfil-biofisico-fetal",
      "vitalidade-fetal",
      "inducao-do-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta de 29 anos, com 41 semanas de gestação e pré-natal de risco habitual, comparece à Unidade Básica de Saúde (UBS) para consulta de rotina. Ela está preocupada com a duração da gravidez e deseja saber quais serão os próximos passos. A paciente está assintomática, relata movimentação fetal presente, e o exame físico está normal para a idade gestacional. Perfil biofísico fetal realizado há 1 dia encontra-se dentro da normalidade.\n\nConsiderando o quadro clínico apresentado e a idade gestacional, a conduta é",
    "alternativas": [
      {
        "letter": "A",
        "text": "orientar repouso domiciliar, com planejamento da indução do parto após 42 semanas.",
        "explanation": "Incorreta: Aguardar além de 42 semanas aumenta significativamente a morbimortalidade perinatal.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "solicitar dopplervelocimetria obstétrica para avaliar o bem-estar fetal e planejar o manejo com base no resultado.",
        "explanation": "Incorreta: A dopplervelocimetria obstétrica não é o método de rotina indicado para vigilância isolada de pós-datismo em gestação de risco habitual sem restrição de crescimento.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "realizar amnioscopia para verificar a presença de mecônio no líquido amniótico e planejar o manejo com base no resultado.",
        "explanation": "Incorreta: A amnioscopia caiu em desuso por baixa acurácia e risco de amniorrexe/infecção, não integrando o protocolo padrão.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "solicitar perfil biofísico fetal e cardiotocografia a cada 2 a 3 dias e planejamento da indução do parto até 41 semanas e 6 dias.",
        "explanation": "A alternativa **D** está correta. Em gestação de risco habitual atingindo **41 semanas**, o protocolo do Ministério da Saúde / FEBRASGO preconiza vigilância fetal intensiva (perfil biofísico fetal / cardiotocografia a cada 2–3 dias) e **planejamento da indução do parto antes de completar 42 semanas** (entre 41s0d e 41s6d), reduzindo o risco de óbito fetal e síndrome de aspiração meconial.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Em gestação de risco habitual atingindo **41 semanas**, o protocolo do Ministério da Saúde / FEBRASGO preconiza vigilância fetal intensiva (perfil biofísico fetal / cardiotocografia a cada 2–3 dias) e **planejamento da indução do parto antes de completar 42 semanas** (entre 41s0d e 41s6d), reduzindo o risco de óbito fetal e síndrome de aspiração meconial.\n- **A) Incorreta:** Aguardar além de 42 semanas aumenta significativamente a morbimortalidade perinatal.\n- **B) Incorreta:** A dopplervelocimetria obstétrica não é o método de rotina indicado para vigilância isolada de pós-datismo em gestação de risco habitual sem restrição de crescimento.\n- **C) Incorreta:** A amnioscopia caiu em desuso por baixa acurácia e risco de amniorrexe/infecção, não integrando o protocolo padrão.",
    "perolaClinica": "Em gestação de risco habitual atingindo **41 semanas**, o protocolo do Ministério da Saúde / FEBRASGO preconiza vigilância fetal intensiva (perfil biofísico fetal / cardiotocografia a cada 2–3 dias) e **planejamento da indução do parto antes de completar 42 semanas** (entre 41s0d e 41s6d), reduzindo o risco de óbito fetal e síndrome de aspiração meconial.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Vigilância fetal e momento ideal para indução do parto na gestação de risco habitual com 41 semanas.",
      "raciocinioChave": "A partir de 41 semanas em gestação de risco habitual com vitalidade preservada, preconiza-se vigilância com perfil biofísico fetal e cardiotocografia a cada 2 a 3 dias. A indução do parto deve ser programada até 41 semanas e 6 dias para reduzir morbimortalidade perinatal.",
      "armadilhaBanca": "Aguardar mais de 42 semanas para induzir ou indicar exames proscritos/inadequados como amnioscopia e dopplervelocimetria isolada."
    },
    "mapaDistratores": {
      "A": "Postergar a indução para além de 42 semanas eleva significativamente o risco de insuficiência placentária, aspiração meconial e óbito fetal.",
      "B": "A dopplervelocimetria obstétrica não é o método de rotina para vigilância isolada de pós-datismo em gestação de risco habitual sem restrição de crescimento.",
      "C": "A amnioscopia caiu em desuso pela baixa acurácia diagnóstica e pelo risco de amniorrexe prematura e infecção."
    }
  },
  {
    "id": "q-enamed-2025-041",
    "code": "Q-ENAMED25-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Complicações Agudas do Diabetes",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-complicacoes-agudas-do-diabetes",
    "tags": [
      "cetoacidose-diabetica",
      "reposicao-volemica",
      "hipocalemia",
      "diabetes-mellitus-tipo-1"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 21 anos, portador de *diabetes mellitus* tipo 1, diagnosticado há 5 anos, foi levado à Unidade de Pronto Atendimento (UPA) devido à dor abdominal, náuseas e vômitos. Familiares informam que está sem utilizar insulina há 3 dias por dificuldades financeiras. No exame físico, encontra-se torporoso, desidratado, com hálito cetótico e dor abdominal à palpação profunda de forma generalizada. Ao exame, frequência cardíaca de 112 bpm; frequência respiratória de 38 irpm; pressão arterial de 110 x 70 mmHg.\n\nOs exames laboratoriais na admissão indicam:\n\n| Exame | Resultado | Valor de referência |\n|---|---|---|\n| Glicemia | 472 mg/dL | 60 a 100 mg/dL |\n| Gasometria arterial | pH de 7,2 | 7,35 a 7,45 |\n| Bicarbonato | 10 mEq/L | 22 a 26 mEq/L |\n| Creatinina | 1,6 mg/dL | 0,7 a 1,3 mg/dL |\n| Potássio sérico | 3,0 mEq/L | 3,5 a 5,5 mEq/L |\n\nO diagnóstico e a conduta inicial indicada para esse paciente são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "pancreatite aguda; iniciar dieta oral zero.",
        "explanation": "Incorreta: Pancreatite não explica acidose metabólica severa com hiperglicemia e hálito cetótico após suspensão de insulina.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "estado hiperosmolar hiperglicêmico; iniciar insulinoterapia.",
        "explanation": "Incorreta: Estado hiperosmolar hiperglicêmico cursa com glicemia > 600 mg/dL, osmolaridade > 320 mOsm/kg e pH > 7,3 sem cetose significativa; além disso, insulina não deve ser iniciada antes da hidratação e correção de K+ < 3,3 mEq/L.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "cetoacidose diabética; prescrever solução fisiológica a 0,9 por cento.",
        "explanation": "A alternativa **C** está correta. Paciente jovem com DM1 que suspendeu insulina, apresentando hálito cetótico, taquipneia (respiração de Kussmaul), dor abdominal, hiperglicemia (472 mg/dL) e acidose metabólica (pH 7,2 < 7,3 e bicarbonato 10 mEq/L < 15–18) fecha o diagnóstico de **cetoacidose diabética (CAD)**. Segundo as diretrizes da SBD e ADA, o **primeiro passo imediato** no manejo é a **expansão volêmica com solução fisiológica (NaCl 0,9%)** (e atenção: como o potássio sérico é 3,0 mEq/L < 3,3 mEq/L, deve-se repor potássio *antes* de iniciar insulina).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "insuficiência renal aguda; prescrever bicarbonato de sódio.",
        "explanation": "Incorreta: A elevação da creatinina é pré-renal por desidratação, e bicarbonato de sódio não é indicado com pH ≥ 6,9–7,0.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Paciente jovem com DM1 que suspendeu insulina, apresentando hálito cetótico, taquipneia (respiração de Kussmaul), dor abdominal, hiperglicemia (472 mg/dL) e acidose metabólica (pH 7,2 < 7,3 e bicarbonato 10 mEq/L < 15–18) fecha o diagnóstico de **cetoacidose diabética (CAD)**. Segundo as diretrizes da SBD e ADA, o **primeiro passo imediato** no manejo é a **expansão volêmica com solução fisiológica (NaCl 0,9%)** (e atenção: como o potássio sérico é 3,0 mEq/L < 3,3 mEq/L, deve-se repor potássio *antes* de iniciar insulina).\n- **A) Incorreta:** Pancreatite não explica acidose metabólica severa com hiperglicemia e hálito cetótico após suspensão de insulina.\n- **B) Incorreta:** Estado hiperosmolar hiperglicêmico cursa com glicemia > 600 mg/dL, osmolaridade > 320 mOsm/kg e pH > 7,3 sem cetose significativa; além disso, insulina não deve ser iniciada antes da hidratação e correção de K+ < 3,3 mEq/L.\n- **D) Incorreta:** A elevação da creatinina é pré-renal por desidratação, e bicarbonato de sódio não é indicado com pH ≥ 6,9–7,0.",
    "perolaClinica": "Paciente jovem com DM1 que suspendeu insulina, apresentando hálito cetótico, taquipneia (respiração de Kussmaul), dor abdominal, hiperglicemia (472 mg/dL) e acidose metabólica (pH 7,2 < 7,3 e bicarbonato 10 mEq/L < 15–18) fecha o diagnóstico de **cetoacidose diabética (CAD)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico e expansão volêmica inicial imediata na cetoacidose diabética.",
      "raciocinioChave": "Jovem com DM1 que suspendeu insulina e apresenta dor abdominal, hálito cetótico, taquipneia, glicemia de 472 mg/dL, pH 7,2 e bicarbonato de 10 mEq/L tem cetoacidose diabética. O primeiro passo obrigatório no tratamento é a expansão volêmica com solução fisiológica a 0,9%.",
      "armadilhaBanca": "Confundir cetoacidose diabética com estado hiperosmolar ou priorizar insulina e bicarbonato antes da expansão volêmica."
    },
    "mapaDistratores": {
      "A": "A pancreatite aguda não justifica o hálito cetótico nem a acidose metabólica grave desencadeada pela suspensão de insulina.",
      "B": "O estado hiperosmolar hiperglicêmico cursa com glicemia > 600 mg/dL e pH > 7,3 sem cetose significativa, e a insulina não deve preceder a hidratação.",
      "D": "A disfunção renal aguda é pré-renal por desidratação, e o bicarbonato de sódio não é indicado com pH ≥ 7,0."
    }
  },
  {
    "id": "q-enamed-2025-042",
    "code": "Q-ENAMED25-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Sepse Neonatal e Infecções Congênitas no RN",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-sepse-neonatal-e-infeccoes-congenitas-no-rn",
    "tags": [
      "sepse-neonatal-tardia",
      "choque-distributivo",
      "onfalite",
      "ressuscitacao-volemica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido de 14 dias, hipoativo e com desconforto respiratório, é levado para avaliação na Unidade de Pronto Atendimento (UPA). Antecedentes obstétricos: não foi realizado pré-natal e o parto ocorreu a termo no domicílio. Exame clínico: hipoativo e pouco responsivo, hipocorado, cianótico. Aparelho respiratório: 70 irpm com tiragem subcostal. Murmúrio vesicular diminuído bilateralmente. Saturação de O₂ em ar ambiente de 82%. Aparelho cardiovascular: pulsos débeis, tempo de perfusão capilar de 5 segundos. Frequência cardíaca de 160 bpm, com ritmo cardíaco regular. Abdome globoso, com fígado a 2,5 cm do rebordo costal direito, presença de halo de hiperemia e edema em torno do coto umbilical.\n\nO diagnóstico e as condutas adequadas são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "choque cardiogênico; manter suporte ventilatório, evitar excesso de volume intravascular devido a risco de piora, administrar fármacos vasoativos e prostaglandina E1.",
        "explanation": "Incorreta: A presença de onfalite clara aponta foco infeccioso séptico, e o fígado a 2,5 cm do RCD é normal no RN (não indica congestão cardiogênica isolada).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "choque neurogênico; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico, hidratação venosa de manutenção e administrar corticoide endovenoso.",
        "explanation": "Incorreta: Não há trauma raquimedular ou lesão neurológica central que justifique choque neurogênico.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "choque obstrutivo; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico e corrigir rapidamente a causa subjacente com descompressão torácica com agulha.",
        "explanation": "Incorreta: O murmúrio vesicular é simetricamente diminuído pela hipoventilação/sepse, sem desvio traqueal ou assimetria para pneumotórax hipertensivo.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "choque distributivo; manter suporte ventilatório, acesso venoso para fase rápida de fluido cristaloide isotônico, hidratação venosa de manutenção, administrar antibióticos e fármacos vasoativos.",
        "explanation": "A alternativa **D** está correta. Recém-nascido com parto domiciliar e sem pré-natal, apresentando **onfalite** (halo de hiperemia e edema periumbilical) evoluindo com sinais de hipoperfusão grave (hipoatividade, pulsos débeis, TEC 5 s, taquicardia, taquipneia e hipoxemia), configura **sepse neonatal tardia com choque séptico (choque distributivo)**. Conforme o PALS e as diretrizes da SBP, o manejo exige suporte ventilatório/oxigenoterapia, acesso venoso com **expansão volêmica com cristaloide isotônico**, **antibioticoterapia parenteral empírica imediata** e drogas vasoativas se choque refratário a volume.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Recém-nascido com parto domiciliar e sem pré-natal, apresentando **onfalite** (halo de hiperemia e edema periumbilical) evoluindo com sinais de hipoperfusão grave (hipoatividade, pulsos débeis, TEC 5 s, taquicardia, taquipneia e hipoxemia), configura **sepse neonatal tardia com choque séptico (choque distributivo)**. Conforme o PALS e as diretrizes da SBP, o manejo exige suporte ventilatório/oxigenoterapia, acesso venoso com **expansão volêmica com cristaloide isotônico**, **antibioticoterapia parenteral empírica imediata** e drogas vasoativas se choque refratário a volume.\n- **A) Incorreta:** A presença de onfalite clara aponta foco infeccioso séptico, e o fígado a 2,5 cm do RCD é normal no RN (não indica congestão cardiogênica isolada).\n- **B) Incorreta:** Não há trauma raquimedular ou lesão neurológica central que justifique choque neurogênico.\n- **C) Incorreta:** O murmúrio vesicular é simetricamente diminuído pela hipoventilação/sepse, sem desvio traqueal ou assimetria para pneumotórax hipertensivo.",
    "perolaClinica": "Recém-nascido com parto domiciliar e sem pré-natal, apresentando **onfalite** (halo de hiperemia e edema periumbilical) evoluindo com sinais de hipoperfusão grave (hipoatividade, pulsos débeis, TEC 5 s, taquicardia, taquipneia e hipoxemia), configura **sepse neonatal tardia com choque séptico (choque distributivo)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Reconhecimento e manejo do choque séptico (distributivo) por onfalite na sepse neonatal tardia.",
      "raciocinioChave": "Recém-nascido de parto domiciliar com onfalite associada a hipoatividade, pulsos débeis, TEC de 5 segundos e hipoxemia apresenta choque séptico (distributivo). A conduta exige suporte ventilatório, expansão rápida com cristaloide isotônico, hidratação de manutenção, antibióticos e vasoativos.",
      "armadilhaBanca": "Interpretar o fígado a 2,5 cm do rebordo costal direito como congestão de choque cardiogênico, evitando volume e antibióticos."
    },
    "mapaDistratores": {
      "A": "A borda hepática a 2,5 cm do rebordo costal direito é fisiológica no recém-nascido, e a onfalite evidencia foco séptico, contraindicando restrição volêmica.",
      "B": "Não há história ou sinal de trauma raquimedular ou lesão neurológica central que sustente choque neurogênico.",
      "C": "O murmúrio vesicular reduzido bilateralmente decorre de hipoventilação séptica, sem assimetria ou desvio traqueal sugestivos de pneumotórax hipertensivo."
    }
  },
  {
    "id": "q-enamed-2025-044",
    "code": "Q-ENAMED25-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Mecanismo e Assistência ao Trabalho de Parto",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-mecanismo-e-assistencia-ao-trabalho-de-parto",
    "tags": [
      "dequitacao",
      "terceiro-periodo-do-parto",
      "tracao-controlada-do-cordao",
      "assistencia-ao-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Parturiente de 29 anos, sem comorbidades, esteve em trabalho de parto por 8 horas e evoluiu para parto vaginal. Após 10 minutos do desprendimento do feto, ainda não se observou a expulsão da placenta. A paciente está estável e sem sinais de hemorragia.\n\nDiante do quadro apresentado, a conduta a ser adotada é",
    "alternativas": [
      {
        "letter": "A",
        "text": "aguardar a expulsão espontânea da placenta, sem intervenções adicionais, e observar sinais de separação.",
        "explanation": "Incorreta: O manejo ativo é superior à conduta puramente expectante na prevenção da hemorragia pós-parto.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "realizar tração controlada do cordão umbilical, enquanto se estabiliza o útero com a mão suprapúbica.",
        "explanation": "A alternativa **B** está correta. Segundo as Diretrizes Nacionais de Assistência ao Parto Normal (Ministério da Saúde) e a OMS, o manejo ativo do terceiro período (dequitação) reduz significativamente o risco de hemorragia pós-parto e inclui: ocitocina profilática após o nascimento, **tração controlada do cordão umbilical** associada à **contra-tração/estabilização uterina com a mão suprapúbica** (manobra de Brandt-Andrews) para evitar inversão uterina.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "iniciar curagem placentária, devido ao tempo transcorrido sem desprendimento placentário.",
        "explanation": "Incorreta: Retenção placentária só é diagnosticada após 30 minutos (ou 60 minutos em manejo expectante) sem dequitação.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "administrar uterotônico adicional e realizar massagem uterina para auxiliar a dequitação.",
        "explanation": "Incorreta: Massagem uterina antes da dequitação pode provocar descolamento parcial e sangramento, e não há atonia/hemorragia para uterotônico adicional neste momento.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Segundo as Diretrizes Nacionais de Assistência ao Parto Normal (Ministério da Saúde) e a OMS, o manejo ativo do terceiro período (dequitação) reduz significativamente o risco de hemorragia pós-parto e inclui: ocitocina profilática após o nascimento, **tração controlada do cordão umbilical** associada à **contra-tração/estabilização uterina com a mão suprapúbica** (manobra de Brandt-Andrews) para evitar inversão uterina.\n- **A) Incorreta:** O manejo ativo é superior à conduta puramente expectante na prevenção da hemorragia pós-parto.\n- **C) Incorreta:** Retenção placentária só é diagnosticada após 30 minutos (ou 60 minutos em manejo expectante) sem dequitação.\n- **D) Incorreta:** Massagem uterina antes da dequitação pode provocar descolamento parcial e sangramento, e não há atonia/hemorragia para uterotônico adicional neste momento.",
    "perolaClinica": "Segundo as Diretrizes Nacionais de Assistência ao Parto Normal (Ministério da Saúde) e a OMS, o manejo ativo do terceiro período (dequitação) reduz significativamente o risco de hemorragia pós-parto e inclui: ocitocina profilática após o nascimento, **tração controlada do cordão umbilical** associada à **contra-tração/estabilização uterina com a mão suprapúbica** (manobra de Brandt-Andrews) para evitar inversão uterina.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo ativo do terceiro período do parto com tração controlada do cordão e estabilização uterina.",
      "raciocinioChave": "Após 10 minutos do desprendimento fetal em parturiente estável e sem sangramento, o manejo ativo da dequitação inclui tração controlada do cordão associada à estabilização suprapúbica do útero. Essa manobra previne inversão uterina e reduz a incidência de hemorragia pós-parto.",
      "armadilhaBanca": "Diagnosticar precocemente retenção placentária antes de 30 minutos para indicar curagem ou realizar massagem uterina antes da dequitação."
    },
    "mapaDistratores": {
      "A": "A conduta puramente expectante apresenta maior risco de hemorragia pós-parto do que o manejo ativo do terceiro período.",
      "C": "A curagem manual é reservada para retenção placentária, diagnosticada somente após 30 minutos sem dequitação ou diante de hemorragia.",
      "D": "Massagear o útero antes da saída da placenta pode causar descolamento parcial com sangramento, e não há atonia indicando uterotônico adicional."
    }
  },
  {
    "id": "q-enamed-2025-045",
    "code": "Q-ENAMED25-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": [
      "tuberculose",
      "populacao-privada-de-liberdade",
      "sintomatico-respiratorio",
      "busca-ativa"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 27 anos, em regime fechado em penitenciária, queixa-se de tosse há 2 semanas.\n\nConsiderando a situação na qual se encontra esse paciente, o médico de família e comunidade deve",
    "alternativas": [
      {
        "letter": "A",
        "text": "encaminhar para internação clínica, objetivando rapidez no diagnóstico e garantia da segurança.",
        "explanation": "Incorreta: Não há indicação de internação hospitalar clínica para investigação rotineira de TB pulmonar sem gravidade.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "solicitar radiografia de tórax, pesquisa laboratorial de *Mycobacterium tuberculosis* e garantir o tratamento em caso de positividade.",
        "explanation": "A alternativa **B** está correta. A população privada de liberdade (PPL) é grupo de altíssima vulnerabilidade para tuberculose. Segundo o Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde), em pessoas privadas de liberdade a busca ativa de sintomáticos respiratórios considera **tosse com duração ≥ 2 semanas** (ou até qualquer duração), indicando investigação imediata com **pesquisa laboratorial de *M. tuberculosis*** (TRM-TB/baciloscopia/cultura) e **radiografia de tórax**, garantindo o tratamento diretamente observado (TDO) na própria unidade prisional se positivo.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "solicitar internação social, a fim de garantir tratamento supervisionado, observado diretamente por 6 meses, caso seja confirmada a tuberculose.",
        "explanation": "Incorreta: O TDO é realizado na própria unidade prisional pela equipe de saúde prisional/APS, não havendo \"internação social\" por 6 meses.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "aguardar evolução, com uso de sintomáticos; caso a tosse persista por mais de 3 semanas, proceder à investigação diagnóstica de tuberculose.",
        "explanation": "Incorreta: O critério de 3 semanas aplica-se à população geral na demanda espontânea; na PPL, investiga-se já com ≥ 2 semanas (ou qualquer tempo em busca ativa).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. A população privada de liberdade (PPL) é grupo de altíssima vulnerabilidade para tuberculose. Segundo o Manual de Recomendações para o Controle da Tuberculose no Brasil (Ministério da Saúde), em pessoas privadas de liberdade a busca ativa de sintomáticos respiratórios considera **tosse com duração ≥ 2 semanas** (ou até qualquer duração), indicando investigação imediata com **pesquisa laboratorial de *M. tuberculosis*** (TRM-TB/baciloscopia/cultura) e **radiografia de tórax**, garantindo o tratamento diretamente observado (TDO) na própria unidade prisional se positivo.\n- **A) Incorreta:** Não há indicação de internação hospitalar clínica para investigação rotineira de TB pulmonar sem gravidade.\n- **C) Incorreta:** O TDO é realizado na própria unidade prisional pela equipe de saúde prisional/APS, não havendo \"internação social\" por 6 meses.\n- **D) Incorreta:** O critério de 3 semanas aplica-se à população geral na demanda espontânea; na PPL, investiga-se já com ≥ 2 semanas (ou qualquer tempo em busca ativa).",
    "perolaClinica": "A população privada de liberdade (PPL) é grupo de altíssima vulnerabilidade para tuberculose.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Rastreamento de tuberculose pulmonar na população privada de liberdade com tosse há 2 semanas ou mais.",
      "raciocinioChave": "Em pessoas privadas de liberdade, o critério de busca ativa de sintomático respiratório para tuberculose reduz-se para tosse ≥ 2 semanas. Deve-se solicitar radiografia de tórax, pesquisa laboratorial de Mycobacterium tuberculosis e assegurar o tratamento na própria unidade.",
      "armadilhaBanca": "Aplicar o critério de 3 semanas da população geral para retardar o diagnóstico ou indicar internação clínica/social desnecessária."
    },
    "mapaDistratores": {
      "A": "Não há sinais de gravidade clínica que justifiquem internação hospitalar para investigação diagnóstica rotineira de tuberculose.",
      "C": "O tratamento diretamente observado deve ser conduzido pela equipe de saúde prisional/APS na unidade, não existindo internação social por 6 meses.",
      "D": "O critério de 3 semanas de tosse aplica-se à demanda espontânea na população geral, não à população privada de liberdade."
    }
  },
  {
    "id": "q-enamed-2025-046",
    "code": "Q-ENAMED25-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondiloartrites",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-espondiloartrites",
    "tags": [
      "espondilite-anquilosante",
      "espondiloartrites",
      "hla-b27",
      "dor-lombar-inflamatoria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 32 anos apresenta quadro de dor lombar crônica de início insidioso, com duração aproximada de 6 meses, que piora pela manhã e melhora com o movimento. Refere rigidez matinal, principalmente nas regiões lombar e sacroilíaca, com duração de mais de 30 minutos, com dor nas articulações sacroilíacas e sensação de fadiga durante as últimas semanas. Não há histórico de trauma. A história familiar é positiva para doenças reumatológicas, mas o paciente desconhece diagnósticos específicos.\n\nO painel de autoanticorpos apresenta:\n\n| Exame | Resultado |\n|---|---|\n| Anticorpo antinuclear (ANA) | Positivo — Título 1:80 — Padrão homogêneo/difuso |\n| Anticorpo anti-DNA dupla hélice | Negativo |\n| Antígeno leucocitário humano B27 (HLA-B27) | Positivo |\n| Fator reumatoide | Negativo |\n| Anticorpo anti-CCP | Negativo |\n| Anticorpo anti-Ro | Negativo |\n| Anticorpo anti-La | Negativo |\n\nCom base no caso clínico e nos exames laboratoriais apresentados, qual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Artrite reativa.",
        "explanation": "Incorreta: Artrite reativa geralmente cursa com oligoartrite periférica assimétrica, uretrite/conjuntivite após infecção entérica ou geniturinária prévia.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Artrite psoriática.",
        "explanation": "Incorreta: Não há relato de lesões cutâneas de psoríase ou dactilite/acometimento ungueal.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Espondilite anquilosante.",
        "explanation": "A alternativa **C** está correta. Homem jovem (< 40–45 anos) com **lombalgia crônica de padrão inflamatório** (> 3 meses, início insidioso, piora matinal com rigidez > 30 min, melhora com exercício/movimento), dor sacroilíaca e **HLA-B27 positivo** (com FR e anti-CCP negativos) apresenta quadro clássico de **espondilite anquilosante** (espondiloartrite axial), segundo os critérios ASAS e o PCDT do Ministério da Saúde.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Lúpus eritematoso sistêmico.",
        "explanation": "Incorreta: FAN 1:80 isolado é achado inespecífico de baixo título, sem manifestações clínicas de LES e com anti-DNA/anti-Ro/anti-La negativos.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Homem jovem (< 40–45 anos) com **lombalgia crônica de padrão inflamatório** (> 3 meses, início insidioso, piora matinal com rigidez > 30 min, melhora com exercício/movimento), dor sacroilíaca e **HLA-B27 positivo** (com FR e anti-CCP negativos) apresenta quadro clássico de **espondilite anquilosante** (espondiloartrite axial), segundo os critérios ASAS e o PCDT do Ministério da Saúde.\n- **A) Incorreta:** Artrite reativa geralmente cursa com oligoartrite periférica assimétrica, uretrite/conjuntivite após infecção entérica ou geniturinária prévia.\n- **B) Incorreta:** Não há relato de lesões cutâneas de psoríase ou dactilite/acometimento ungueal.\n- **D) Incorreta:** FAN 1:80 isolado é achado inespecífico de baixo título, sem manifestações clínicas de LES e com anti-DNA/anti-Ro/anti-La negativos.",
    "perolaClinica": "Homem jovem (< 40–45 anos) com **lombalgia crônica de padrão inflamatório** (> 3 meses, início insidioso, piora matinal com rigidez > 30 min, melhora com exercício/movimento), dor sacroilíaca e **HLA-B27 positivo** (com FR e anti-CCP negativos) apresenta quadro clássico de **espondilite anquilosante** (espondiloartrite axial), segundo os critérios ASAS e o PCDT do Ministério da Saúde.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de espondilite anquilosante pela lombalgia inflamatória em adulto jovem com HLA-B27 positivo.",
      "raciocinioChave": "Homem de 32 anos com lombalgia crônica insidiosa que piora pela manhã, dura > 30 minutos com rigidez, melhora com movimento e associa-se a dor sacroilíaca e HLA-B27 positivo fecha o quadro clássico de espondilite anquilosante.",
      "armadilhaBanca": "Valorizar FAN positivo em título baixo (1:80) como critério para lúpus eritematoso sistêmico."
    },
    "mapaDistratores": {
      "A": "A artrite reativa cursa tipicamente com oligoartrite periférica assimétrica, uretrite ou conjuntivite após infecção prévia.",
      "B": "A artrite psoriática pressupõe lesões cutâneas de psoríase, dactilite ou alterações ungueais, ausentes no relato.",
      "D": "Um FAN 1:80 isolado é inespecífico e não sustenta o diagnóstico de lúpus diante da ausência de critérios clínicos e anti-DNA negativo."
    }
  },
  {
    "id": "q-enamed-2025-047",
    "code": "Q-ENAMED25-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": [
      "vacinacao-do-adolescente",
      "pni",
      "vacina-hpv",
      "vacina-meningococica-acwy",
      "febre-amarela"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Adolescente de 12 anos, sexo feminino, é levada à Unidade Básica de Saúde (UBS) para verificar se suas vacinas estão atualizadas. Até os 8 anos, todas as vacinas preconizadas pelo Ministério da Saúde para o biênio 2024-2025 foram feitas, sendo que tomou 1 dose da vacina contra febre amarela aos 9 meses.\n\nNesse momento, deve receber as vacinas",
    "alternativas": [
      {
        "letter": "A",
        "text": "HPV, reforço da hepatite B e dT.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "reforço da hepatite B, dT e SCR.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "HPV, meningocócica ACWY e febre amarela.",
        "explanation": "A alternativa **C** está correta. Segundo o Calendário Nacional de Vacinação do PNI (2024–2025) para adolescentes de **11 a 14 anos**:\n- **HPV4:** dose única (9 a 14 anos);\n- **Meningocócica ACWY:** dose única/reforço aos **11–14 anos**;\n- **Febre amarela:** quem recebeu apenas 1 dose aos 9 meses (e não tomou o reforço aos 4 anos, pois tinha 8 anos com esquema até então ou faltou o reforço) deve receber a **dose de reforço** (uma vez que o esquema infantil exige dose aos 9 meses + reforço aos 4 anos, ou 1 dose de reforço se não aplicada aos 4 anos).\n- **A e B) Incorretas:** A vacina contra hepatite B não tem reforço de rotina após esquema completo na infância; dT aplica-se a cada 10 anos após o último reforço (DTP aos 4 anos → reforço aos 14 anos, ou conforme intervalo de 10 anos).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "SCR, meningocócica ACWY e febre amarela.",
        "explanation": "Incorreta: A adolescente já recebeu todas as vacinas até os 8 anos (incluindo as 2 doses de SCR/tríplice viral aos 12 e 15 meses), não necessitando repetir SCR, mas faltou HPV.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **C** está correta. Segundo o Calendário Nacional de Vacinação do PNI (2024–2025) para adolescentes de **11 a 14 anos**:\n- **HPV4:** dose única (9 a 14 anos);\n- **Meningocócica ACWY:** dose única/reforço aos **11–14 anos**;\n- **Febre amarela:** quem recebeu apenas 1 dose aos 9 meses (e não tomou o reforço aos 4 anos, pois tinha 8 anos com esquema até então ou faltou o reforço) deve receber a **dose de reforço** (uma vez que o esquema infantil exige dose aos 9 meses + reforço aos 4 anos, ou 1 dose de reforço se não aplicada aos 4 anos).\n- **A e B) Incorretas:** A vacina contra hepatite B não tem reforço de rotina após esquema completo na infância; dT aplica-se a cada 10 anos após o último reforço (DTP aos 4 anos → reforço aos 14 anos, ou conforme intervalo de 10 anos).\n- **D) Incorreta:** A adolescente já recebeu todas as vacinas até os 8 anos (incluindo as 2 doses de SCR/tríplice viral aos 12 e 15 meses), não necessitando repetir SCR, mas faltou HPV.",
    "perolaClinica": "Segundo o Calendário Nacional de Vacinação do PNI (2024–2025) para adolescentes de **11 a 14 anos**:\n- **HPV4:** dose única (9 a 14 anos);\n- **Meningocócica ACWY:** dose única/reforço aos **11–14 anos**;\n- **Febre amarela:** quem recebeu apenas 1 dose aos 9 meses (e não tomou o reforço aos 4 anos, pois tinha 8 anos com esquema até então ou faltou o reforço) deve receber a **dose de reforço** (uma vez que o esquema infantil exige dose aos 9 meses + reforço aos 4 anos, ou 1 dose de reforço se não aplicada aos 4 anos).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Atualização vacinal pelo PNI em adolescente de 12 anos com esquema completo até os 8 anos e 1 dose de febre amarela.",
      "raciocinioChave": "Aos 12 anos, pelo calendário do PNI 2024–2025, a adolescente deve receber HPV4 e meningocócica ACWY. Como tomou apenas uma dose de febre amarela aos 9 meses sem o reforço dos 4 anos, necessita também da dose de reforço de febre amarela.",
      "armadilhaBanca": "Indicar reforço desnecessário de hepatite B, repetir SCR ou prescrever dT sem considerar o esquema infantil completo até os 8 anos."
    },
    "mapaDistratores": {
      "A": "Não há indicação de reforço rotineiro de hepatite B nem de dT aos 12 anos quando o esquema básico infantil até os 8 anos está completo.",
      "B": "Com vacinação completa até os 8 anos, as duas doses de SCR já foram aplicadas na infância, e faltou indicar HPV e meningocócica ACWY.",
      "D": "A adolescente não necessita de nova dose de SCR, mas precisa receber a vacina contra o HPV prevista para a faixa de 9 a 14 anos."
    }
  },
  {
    "id": "q-enamed-2025-048",
    "code": "Q-ENAMED25-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Derrame Pleural",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-derrame-pleural",
    "tags": [
      "derrame-pleural",
      "toracocentese",
      "ultrassonografia-toracica",
      "tuberculose-pleural"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente masculino, 36 anos, é tabagista e trabalha como ascensorista. Procura atendimento no ambulatório queixando-se de tosse seca, persistente por mais de 3 semanas, acompanhada de febre vespertina, dificuldade respiratória durante esforços e dor infraescapular à esquerda. Exame físico: bom estado geral, orientado, emagrecido, descorado, hidratado, afebril. Ausculta cardíaca sem alterações; ausculta pulmonar com murmúrios vesiculares diminuídos e percussão maciça em base do tórax à esquerda.\n\nCom base no diagnóstico provável, quais são, respectivamente, o exame complementar e a conduta adequada ao caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Ressonância magnética; programação cirúrgica.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Tomografia de tórax; lobectomia segmentar.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Tomografia de tórax; drenagem de tórax.",
        "explanation": "Incorreta: Drenagem torácica fechada em selo d'água é indicada para empiema pleural ou hemotórax, não como conduta inicial antes da toracocentese diagnóstica em derrame provavelmente tuberculoso.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Ultrassonografia; toracocentese.",
        "explanation": "A alternativa **D** está correta. Jovem com tosse seca > 3 semanas, febre vespertina, emagrecimento, dor pleurítica e **síndrome de derrame pleural à esquerda** (murmúrio vesicular diminuído + macicez à percussão na base esquerda) tem como principal hipótese **tuberculose pleural**. Segundo as Diretrizes de Derrame Pleural (SBPT / BTS), a investigação inicial de derrame pleural à beira-leito ou ambulatorial utiliza **ultrassonografia de tórax** (alta sensibilidade para localizar e quantificar líquido) e **toracocentese diagnóstica** (para análise bioquímica — exsudato linfocítico com ADA > 40 U/L).\n- **A e B) Incorretas:** Não há indicação cirúrgica (lobectomia) nem ressonância magnética.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Jovem com tosse seca > 3 semanas, febre vespertina, emagrecimento, dor pleurítica e **síndrome de derrame pleural à esquerda** (murmúrio vesicular diminuído + macicez à percussão na base esquerda) tem como principal hipótese **tuberculose pleural**. Segundo as Diretrizes de Derrame Pleural (SBPT / BTS), a investigação inicial de derrame pleural à beira-leito ou ambulatorial utiliza **ultrassonografia de tórax** (alta sensibilidade para localizar e quantificar líquido) e **toracocentese diagnóstica** (para análise bioquímica — exsudato linfocítico com ADA > 40 U/L).\n- **A e B) Incorretas:** Não há indicação cirúrgica (lobectomia) nem ressonância magnética.\n- **C) Incorreta:** Drenagem torácica fechada em selo d'água é indicada para empiema pleural ou hemotórax, não como conduta inicial antes da toracocentese diagnóstica em derrame provavelmente tuberculoso.",
    "perolaClinica": "Jovem com tosse seca > 3 semanas, febre vespertina, emagrecimento, dor pleurítica e **síndrome de derrame pleural à esquerda** (murmúrio vesicular diminuído + macicez à percussão na base esquerda) tem como principal hipótese **tuberculose pleural**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Investigação inicial de derrame pleural sugestivo de tuberculose pleural com ultrassonografia e toracocentese.",
      "raciocinioChave": "Tosse seca por mais de 3 semanas, febre vespertina, emagrecimento e síndrome de derrame pleural em jovem apontam para tuberculose pleural. A ultrassonografia de tórax confirma a coleção e guia a toracocentese diagnóstica para análise do líquido pleural.",
      "armadilhaBanca": "Indicar procedimentos invasivos ou cirúrgicos (drenagem em selo d'água ou lobectomia) antes da punção diagnóstica."
    },
    "mapaDistratores": {
      "A": "A ressonância magnética não é exame de escolha para derrame pleural, tampouco há indicação cirúrgica inicial.",
      "B": "A lobectomia pulmonar não faz parte da abordagem diagnóstica nem terapêutica inicial de derrame pleural infeccioso.",
      "C": "A drenagem torácica fechada reserva-se a empiema ou hemotórax, não devendo preceder a toracocentese diagnóstica."
    }
  },
  {
    "id": "q-enamed-2025-049",
    "code": "Q-ENAMED25-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Planejamento Familiar e Anticoncepção",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-planejamento-familiar-e-anticoncepcao",
    "tags": [
      "contracepcao",
      "diu-de-levonorgestrel",
      "criterios-de-elegibilidade",
      "lupus-eritematoso-sistemico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Nulípara de 30 anos, com diagnóstico de lúpus eritematoso sistêmico e história recente de trombose venosa, apresenta ciclos menstruais prolongados de 8 a 10 dias, com intenso sangramento e cólicas fortes, busca orientação sobre métodos contraceptivos.\n\nConsiderando os critérios de elegibilidade para uso de anticoncepção e o quadro clínico, qual é a melhor opção de contracepção?",
    "alternativas": [
      {
        "letter": "A",
        "text": "DIU de cobre.",
        "explanation": "Incorreta: O DIU de cobre não tem estrogênio, mas tende a **aumentar o sangramento menstrual e as cólicas**, piorando os sintomas já presentes na paciente.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "DIU de levonorgestrel.",
        "explanation": "A alternativa **B** está correta. Em mulher com **lúpus eritematoso sistêmico (LES)** e **história de trombose venosa profunda** (categoria 4 da OMS para métodos com estrogênio), os métodos combinados são formalmente contraindicados. Como a paciente também sofre de **sangramento uterino intenso e dismenorreia grave**, o **SIU/DIU de levonorgestrel** é a melhor escolha por oferecer altíssima eficácia contraceptiva sem estrogênio e reduzir significativamente o fluxo menstrual e as cólicas.\n- **C e D) Incorretas:** Injetável mensal e pílula combinada contêm estrogênio, sendo categoria 4 (contraindicação absoluta) na história de tromboembolismo venoso.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Anticoncepcional injetável mensal.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Pílula anticoncepcional combinada contínua.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Em mulher com **lúpus eritematoso sistêmico (LES)** e **história de trombose venosa profunda** (categoria 4 da OMS para métodos com estrogênio), os métodos combinados são formalmente contraindicados. Como a paciente também sofre de **sangramento uterino intenso e dismenorreia grave**, o **SIU/DIU de levonorgestrel** é a melhor escolha por oferecer altíssima eficácia contraceptiva sem estrogênio e reduzir significativamente o fluxo menstrual e as cólicas.\n- **A) Incorreta:** O DIU de cobre não tem estrogênio, mas tende a **aumentar o sangramento menstrual e as cólicas**, piorando os sintomas já presentes na paciente.\n- **C e D) Incorretas:** Injetável mensal e pílula combinada contêm estrogênio, sendo categoria 4 (contraindicação absoluta) na história de tromboembolismo venoso.",
    "perolaClinica": "Em mulher com **lúpus eritematoso sistêmico (LES)** e **história de trombose venosa profunda** (categoria 4 da OMS para métodos com estrogênio), os métodos combinados são formalmente contraindicados.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Escolha do DIU de levonorgestrel em paciente com LES, trombose venosa prévia e sangramento uterino intenso.",
      "raciocinioChave": "História de trombose venosa e LES contraindica formalmente estrogênios (categoria 4 da OMS), tornando o DIU de levonorgestrel a escolha ideal por ser seguro do ponto de vista trombótico e reduzir significativamente o fluxo menstrual e a dismenorreia.",
      "armadilhaBanca": "Indicar DIU de cobre por ser não hormonal sem considerar que ele piora o sangramento menstrual e as cólicas já intensas."
    },
    "mapaDistratores": {
      "A": "Embora livre de hormônios, o DIU de cobre tende a agravar o volume de sangramento menstrual e as cólicas.",
      "C": "O injetável mensal contém estrogênio, sendo contraindicado pelo risco trombótico elevado em paciente com LES e trombose venosa prévia.",
      "D": "A pílula combinada contém estrogênio, configurando contraindicação absoluta (categoria 4 da OMS) diante de trombose venosa."
    }
  },
  {
    "id": "q-enamed-2025-050",
    "code": "Q-ENAMED25-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Diabetes Mellitus - Diagnóstico e Tratamento",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-diabetes-mellitus-diagnostico-e-tratamento",
    "tags": [
      "diabetes-mellitus-tipo-2",
      "insulinizacao-basal",
      "insulina-nph",
      "falha-terapeutica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 55 anos, com diagnóstico de *diabetes mellitus*, foi em consulta de rotina em Unidade Básica de Saúde (UBS) levando exames laboratoriais solicitados pelo médico na consulta anterior. Faz uso de metformina 850 mg, 3 vezes ao dia, e glicazida 30 mg, 1 vez ao dia, há mais de 6 meses. Os exames laboratoriais atuais apresentam hemoglobina glicada de 9,5% e creatinina sérica de 0,8 mg/dL.\n\nQual das condutas é a mais adequada para o seguimento desse caso?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Suspender os medicamentos orais, iniciar insulina NPH 10 UI subcutânea pela manhã e 20 UI à noite. Monitorar a glicemia pré-prandial, e, quando estiver controlada, medir a glicemia pós-prandial para avaliação da introdução da insulina regular.",
        "explanation": "Incorreta: Não se deve suspender a metformina (mantém sensibilização periférica e reduz ganho de peso/dose de insulina) nem iniciar duas doses elevadas de NPH (30 UI/dia) de imediato em paciente ambulatorial estável.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Aumentar a glicazida para 60 mg ao dia, aumentar a metformina para 1 g, 3 vezes ao dia, repetir exames em 1 mês. Iniciar insulina se estiverem alterados; pactuar com o paciente a possibilidade de insulinização no retorno.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Manter a dose de metformina e glicazida, iniciar insulina NPH 10 UI subcutânea à noite, associada à monitorização glicêmica de jejum. Ajustar 2 a 3 UI a cada 2 a 3 dias, até atingir a meta da glicemia de jejum.",
        "explanation": "A alternativa **C** está correta. Paciente com DM2 já em uso de metformina (dose otimizada de 2.550 mg/dia) associada a sulfonilureia (glicazida) com **HbA1c de 9,5%** (> 9,0% / bem acima da meta de < 7%) tem indicação de iniciar **insulinização basal** na APS. Conforme a Diretriz da Sociedade Brasileira de Diabetes (SBD) e o Caderno de Atenção Básica do Ministério da Saúde, mantém-se os antidiabéticos orais (especialmente metformina) e inicia-se **insulina NPH 10 UI (ou 0,1–0,2 UI/kg) ao deitar (bedtime)**, titulando 2 a 3 UI a cada 2–3 dias conforme a glicemia capilar de jejum.\n- **B e D) Incorretas:** Metformina já está em dose máxima prática (2.550 mg/dia — acima de 2.000–2.550 mg/dia não há ganho de eficácia e aumenta intolerância GI), e trocar glicazida por glibenclamida aumenta risco de hipoglicemia sem controle adequado com HbA1c de 9,5%.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Trocar a glicazida por glibenclamida 20 mg por dia, aumentar a metformina para 1 g, 3 vezes ao dia, solicitar novos exames em 1 mês. Pactuar com o paciente a possibilidade de insulinização no retorno.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Paciente com DM2 já em uso de metformina (dose otimizada de 2.550 mg/dia) associada a sulfonilureia (glicazida) com **HbA1c de 9,5%** (> 9,0% / bem acima da meta de < 7%) tem indicação de iniciar **insulinização basal** na APS. Conforme a Diretriz da Sociedade Brasileira de Diabetes (SBD) e o Caderno de Atenção Básica do Ministério da Saúde, mantém-se os antidiabéticos orais (especialmente metformina) e inicia-se **insulina NPH 10 UI (ou 0,1–0,2 UI/kg) ao deitar (bedtime)**, titulando 2 a 3 UI a cada 2–3 dias conforme a glicemia capilar de jejum.\n- **A) Incorreta:** Não se deve suspender a metformina (mantém sensibilização periférica e reduz ganho de peso/dose de insulina) nem iniciar duas doses elevadas de NPH (30 UI/dia) de imediato em paciente ambulatorial estável.\n- **B e D) Incorretas:** Metformina já está em dose máxima prática (2.550 mg/dia — acima de 2.000–2.550 mg/dia não há ganho de eficácia e aumenta intolerância GI), e trocar glicazida por glibenclamida aumenta risco de hipoglicemia sem controle adequado com HbA1c de 9,5%.",
    "perolaClinica": "Paciente com DM2 já em uso de metformina (dose otimizada de 2.550 mg/dia) associada a sulfonilureia (glicazida) com **HbA1c de 9,5%** (> 9,0% / bem acima da meta de < 7%) tem indicação de iniciar **insulinização basal** na APS.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Início de insulinização basal noturna com NPH mantendo antidiabéticos orais em DM2 com HbA1c 9,5%.",
      "raciocinioChave": "Paciente com DM2 em dose plena de metformina e glicazida mantendo HbA1c de 9,5% necessita de insulinização basal na APS. Mantêm-se os antidiabéticos orais e inicia-se insulina NPH 10 UI à noite, titulando 2 a 3 UI conforme a glicemia de jejum.",
      "armadilhaBanca": "Suspender os hipoglicemiantes orais ao iniciar insulina ou insistir apenas em ajuste de sulfonilureias diante de HbA1c > 9%."
    },
    "mapaDistratores": {
      "A": "Suspender a metformina piora o controle e eleva a dose necessária de insulina, sendo excessivo iniciar 30 UI/dia divididas em duas tomadas.",
      "B": "Com HbA1c de 9,5% em terapia dupla e metformina já em 2.550 mg/dia, apenas titular fármacos orais é insuficiente e atrasa a insulinização.",
      "D": "Substituir glicazida por glibenclamida aumenta o risco de hipoglicemia sem atingir a meta glicêmica diante de HbA1c de 9,5%."
    }
  },
  {
    "id": "q-enamed-2025-051",
    "code": "Q-ENAMED25-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Doença Inflamatória Intestinal",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-doenca-inflamatoria-intestinal",
    "tags": [
      "colangite-esclerosante-primaria",
      "retocolite-ulcerativa",
      "manifestacoes-extraintestinais",
      "colangiorressonancia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 38 anos retorna a ambulatório de clínica médica de um hospital de atenção secundária, onde faz acompanhamento clínico de retocolite ulcerativa. Analisando os exames complementares solicitados na última consulta, o médico atendente observa elevações significativas da fosfatase alcalina e gama-GT, com discreta elevação dos níveis séricos de aminotransferases, sem hiperbilirrubinemia. Questionado, o paciente refere apenas leve desconforto no hipocôndrio direito. Ao exame físico, não há icterícia, febre ou presença de sinal de Murphy.\n\nConsiderando a doença de base do caso, o exame complementar indicado e seu resultado provável são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "tomografia computadorizada de abdome; lesão tumoral presente ao nível do hilo hepático.",
        "explanation": "Incorreta: Tumor de Klatskin (colangiocarcinoma hilar) é complicação possível da CEP, mas o quadro inicial sem icterícia em portador de RCU aponta primeiro para CEP.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "colangiopancreatografia retrógrada endoscópica; presença de litíase impactada no colédoco terminal.",
        "explanation": "Incorreta: A CPRE é procedimento invasivo reservado para intervenção terapêutica (dilatação/biópsia de estenose dominante) ou quando a CRM é inconclusiva, não sendo o exame diagnóstico inicial.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "colangiorressonância; múltiplas estenoses intercaladas na árvore biliar, com áreas normais ou dilatadas de permeio.",
        "explanation": "A alternativa **C** está correta. Paciente jovem com **retocolite ulcerativa (RCU)** evoluindo com padrão laboratorial colestático (elevação expressiva de fosfatase alcalina e GGT) tem como principal hipótese **colangite esclerosante primária (CEP)**. Conforme diretrizes da AASLD/EASL e SBH, o exame diagnóstico não invasivo de escolha é a **colangiorressonância magnética (CRM)**, que evidencia o padrão clássico em \"contas de rosário\": múltiplas estenoses biliares intercaladas com áreas normais ou dilatadas.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "ultrassonografia abdominal total; espessamento da parede da vesícula biliar com nodulação no interior, sem sombra acústica.",
        "explanation": "Incorreta: Achado descreve pólipo de vesícula biliar, que não explica colestase enzimática significativa associada à RCU.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Paciente jovem com **retocolite ulcerativa (RCU)** evoluindo com padrão laboratorial colestático (elevação expressiva de fosfatase alcalina e GGT) tem como principal hipótese **colangite esclerosante primária (CEP)**. Conforme diretrizes da AASLD/EASL e SBH, o exame diagnóstico não invasivo de escolha é a **colangiorressonância magnética (CRM)**, que evidencia o padrão clássico em \"contas de rosário\": múltiplas estenoses biliares intercaladas com áreas normais ou dilatadas.\n- **A) Incorreta:** Tumor de Klatskin (colangiocarcinoma hilar) é complicação possível da CEP, mas o quadro inicial sem icterícia em portador de RCU aponta primeiro para CEP.\n- **B) Incorreta:** A CPRE é procedimento invasivo reservado para intervenção terapêutica (dilatação/biópsia de estenose dominante) ou quando a CRM é inconclusiva, não sendo o exame diagnóstico inicial.\n- **D) Incorreta:** Achado descreve pólipo de vesícula biliar, que não explica colestase enzimática significativa associada à RCU.",
    "perolaClinica": "Paciente jovem com **retocolite ulcerativa (RCU)** evoluindo com padrão laboratorial colestático (elevação expressiva de fosfatase alcalina e GGT) tem como principal hipótese **colangite esclerosante primária (CEP)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Investigação de colangite esclerosante primária na retocolite ulcerativa por colangiorressonância.",
      "raciocinioChave": "Elevação acentuada de fosfatase alcalina e GGT sem icterícia em portador de retocolite ulcerativa sugere colangite esclerosante primária. A colangiorressonância é o exame não invasivo padrão-ouro, demonstrando múltiplas estenoses intercaladas com dilatações na árvore biliar.",
      "armadilhaBanca": "Indicar CPRE invasiva como primeiro exame ou presumir colangiocarcinoma hilar sem padrão obstrutivo ictérico."
    },
    "mapaDistratores": {
      "A": "Embora o colangiocarcinoma possa complicar a CEP, a ausência de icterícia favorece inicialmente a própria CEP e não uma massa hilar obstrutiva.",
      "B": "A CPRE é exame invasivo reservado para intervenção terapêutica ou biópsia, não sendo o método diagnóstico inicial.",
      "D": "O espessamento vesicular com nodulação sem sombra acústica descreve pólipo de vesícula, que não justifica colestase associada à RCU."
    }
  },
  {
    "id": "q-enamed-2025-052",
    "code": "Q-ENAMED25-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "desenvolvimento-neuropsicomotor",
      "reflexos-primitivos",
      "reflexo-plantar",
      "puericultura"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mãe de menina de 11 meses em consulta de puericultura, relata que não há queixas específicas no momento e refere que a criança está começando a trocar passos de maneira independente. Apresenta marcos do desenvolvimento anteriores a 11 meses dentro da normalidade e bom ganho pondero-estatural. Gestação e parto sem intercorrências.\n\nO reflexo primitivo usualmente presente nessa faixa etária é o",
    "alternativas": [
      {
        "letter": "A",
        "text": "reflexo plantar.",
        "explanation": "A alternativa **A** está correta. Segundo a Sociedade Brasileira de Pediatria (SBP), a maioria dos reflexos primitivos desaparece entre 2 e 6 meses de idade; contudo, o **reflexo plantar** (preensão plantar: flexão dos artelhos ao estímulo da planta do pé, bem como o reflexo cutâneo-plantar em extensão/Babinski fisiológico) persiste normalmente até cerca de **9 a 12 meses** (podendo estender-se até 15–18 meses).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "reflexo de Moro.",
        "explanation": "Incorreta: O reflexo de Moro desaparece entre 4 e 6 meses de idade.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "reflexo de procura.",
        "explanation": "Incorreta: O reflexo de procura (voracidade/busca) desaparece por volta dos 3 a 4 meses.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "reflexo tônico cervical.",
        "explanation": "Incorreta: O reflexo tônico-cervical assimétrico (esgrimista) desaparece entre 4 e 6 meses.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Segundo a Sociedade Brasileira de Pediatria (SBP), a maioria dos reflexos primitivos desaparece entre 2 e 6 meses de idade; contudo, o **reflexo plantar** (preensão plantar: flexão dos artelhos ao estímulo da planta do pé, bem como o reflexo cutâneo-plantar em extensão/Babinski fisiológico) persiste normalmente até cerca de **9 a 12 meses** (podendo estender-se até 15–18 meses).\n- **B) Incorreta:** O reflexo de Moro desaparece entre 4 e 6 meses de idade.\n- **C) Incorreta:** O reflexo de procura (voracidade/busca) desaparece por volta dos 3 a 4 meses.\n- **D) Incorreta:** O reflexo tônico-cervical assimétrico (esgrimista) desaparece entre 4 e 6 meses.",
    "perolaClinica": "Segundo a Sociedade Brasileira de Pediatria (SBP), a maioria dos reflexos primitivos desaparece entre 2 e 6 meses de idade; contudo, o **reflexo plantar** (preensão plantar: flexão dos artelhos ao estímulo da planta do pé, bem como o reflexo cutâneo-plantar em extensão/Babinski fisiológico) persiste normalmente até cerca de **9 a 12 meses** (podendo estender-se até 15–18 meses).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Cronologia de desaparecimento dos reflexos primitivos no lactente de 11 meses.",
      "raciocinioChave": "A maioria dos reflexos primitivos desaparece até os 4 a 6 meses de idade. Aos 11 meses, espera-se que ainda esteja presente o reflexo plantar, que persiste normalmente até 9 a 12 meses ou mais.",
      "armadilhaBanca": "Confundir a persistência tardia do reflexo plantar com os reflexos de Moro, procura e tônico-cervical, já abolidos no segundo semestre."
    },
    "mapaDistratores": {
      "B": "O reflexo de Moro desaparece fisiologicamente entre 4 e 6 meses de idade.",
      "C": "O reflexo de procura ou voracidade desaparece por volta dos 3 a 4 meses de vida.",
      "D": "O reflexo tônico-cervical assimétrico (do esgrimista) desaparece entre 4 e 6 meses de idade."
    }
  },
  {
    "id": "q-enamed-2025-053",
    "code": "Q-ENAMED25-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": [
      "trauma-cranioencefalico",
      "hematoma-epidural",
      "intervalo-lucido",
      "hipertensao-intracraniana"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, 23 anos, foi vítima de acidente automobilístico no qual o veículo em que estava colidiu com caminhão. Usava cinto de segurança e foi retirado consciente do carro pela equipe de resgate. Apresentava amnésia anterógrada. Após atendimento pré-hospitalar, o paciente foi levado ao pronto-socorro, sem déficits motores ou sensitivos. No hospital, o médico pede uma tomografia computadorizada de crânio para avaliação. Alguns minutos depois, a equipe de enfermagem solicita avaliação de emergência para o paciente, com necessidade de intubação orotraqueal por rebaixamento do nível de consciência e anisocoria com pupila esquerda dilatada.\n\nTomografia computadorizada de crânio sem contraste: [imagem de TC de crânio evidenciando coleção extra-axial hiperdensa em formato biconvexo/lenticular na região frontotemporoparietal esquerda, com efeito de massa e desvio da linha média].\n\nAo considerar a situação clínica do paciente e a imagem tomográfica apresentada, o médico diagnosticou",
    "alternativas": [
      {
        "letter": "A",
        "text": "hematoma subdural agudo, sendo necessário realizar hidantalização do paciente e aguardar melhora clínica.",
        "explanation": "Incorreta: Hematoma subdural agudo apresenta formato em **crescente (côncavo-convexo)** acompanhando a convexidade cerebral, e não biconvexo.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "contusão cerebral, sendo necessário realizar cirurgia de emergência para controle de hipertensão intracraniana.",
        "explanation": "Incorreta: Contusão cerebral aparece como focos hemorrágicos heterogêneos intraparenquimatosos (\"sal e pimenta\"), sem formato lenticular extra-axial.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "hematoma epidural, sendo necessário realizar cirurgia de emergência para controle da hipertensão intracraniana.",
        "explanation": "A alternativa **C** está correta. [REVISAR: questão acompanhada de tomografia computadorizada de crânio sem contraste no caderno original] Paciente vítima de trauma craniano que chega consciente, evolui com **intervalo lúcido** seguido de rebaixamento súbito do nível de consciência e anisocoria ipsilateral (midríase à esquerda por herniação de úncus comprimindo o III par), associado a imagem tomográfica hiperdensa extra-axial **biconvexa (em lente)** à esquerda, caracteriza **hematoma epidural (extradural) agudo**. Conforme o ATLS (10ª ed.), trata-se de emergência neurocirúrgica com indicação de **craniotomia descompressiva/drenagem imediata**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "hematoma intraparenquimatoso, sendo necessário realizar hidantalização do paciente e aguardar melhora clínica.",
        "explanation": "Incorreta: Não é coleção intraparenquimatosa nem tem indicação de conduta conservadora diante de anisocoria e hipertensão intracraniana aguda.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. [REVISAR: questão acompanhada de tomografia computadorizada de crânio sem contraste no caderno original] Paciente vítima de trauma craniano que chega consciente, evolui com **intervalo lúcido** seguido de rebaixamento súbito do nível de consciência e anisocoria ipsilateral (midríase à esquerda por herniação de úncus comprimindo o III par), associado a imagem tomográfica hiperdensa extra-axial **biconvexa (em lente)** à esquerda, caracteriza **hematoma epidural (extradural) agudo**. Conforme o ATLS (10ª ed.), trata-se de emergência neurocirúrgica com indicação de **craniotomia descompressiva/drenagem imediata**.\n- **A) Incorreta:** Hematoma subdural agudo apresenta formato em **crescente (côncavo-convexo)** acompanhando a convexidade cerebral, e não biconvexo.\n- **B) Incorreta:** Contusão cerebral aparece como focos hemorrágicos heterogêneos intraparenquimatosos (\"sal e pimenta\"), sem formato lenticular extra-axial.\n- **D) Incorreta:** Não é coleção intraparenquimatosa nem tem indicação de conduta conservadora diante de anisocoria e hipertensão intracraniana aguda.",
    "perolaClinica": "Paciente vítima de trauma craniano que chega consciente, evolui com **intervalo lúcido** seguido de rebaixamento súbito do nível de consciência e anisocoria ipsilateral (midríase à esquerda por herniação de úncus comprimindo o III par), associado a imagem tomográfica hiperdensa extra-axial **biconvexa (em lente)** à esquerda, caracteriza **hematoma epidural (extradural) agudo**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico-tomográfico e drenagem cirúrgica de emergência do hematoma epidural agudo.",
      "raciocinioChave": "Trauma craniano com intervalo lúcido seguido de rebaixamento rápido da consciência e anisocoria ipsilateral traduz herniação uncal por hematoma epidural agudo. Impõe cirurgia de emergência para evacuação do hematoma e controle da hipertensão intracraniana.",
      "armadilhaBanca": "Confundir hematoma epidural com subdural agudo ou adotar conduta conservadora com anticonvulsivante diante de herniação cerebral iminente."
    },
    "mapaDistratores": {
      "A": "O hematoma subdural agudo tem formato em crescente na TC, e a presença de anisocoria por herniação contraindica conduta expectante.",
      "B": "A contusão cerebral manifesta-se por focos hemorrágicos intraparenquimatosos heterogêneos, não explicando coleção extra-axial lenticular nem intervalo lúcido clássico.",
      "D": "O hematoma intraparenquimatoso localiza-se no interior do parênquima cerebral e não justifica aguardar melhora clínica diante de midríase aguda."
    }
  },
  {
    "id": "q-enamed-2025-054",
    "code": "Q-ENAMED25-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Planejamento Familiar e Anticoncepção",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-planejamento-familiar-e-anticoncepcao",
    "tags": [
      "contraceptivos-orais-combinados",
      "enxaqueca-com-aura",
      "acidente-vascular-cerebral",
      "contraindicacao-contraceptiva"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma adolescente de 15 anos comparece em consulta ginecológica com a finalidade de iniciar contracepção. Na história patológica pregressa, refere episódios de enxaqueca com aura. Nos antecedentes familiares, relara que a avó materna teve diagnóstico de câncer de mama, sua mãe é hipertensa e sua irmã tem diabetes.\n\nO uso do contraceptivo combinado está contraindicado para essa paciente devido ao risco de",
    "alternativas": [
      {
        "letter": "A",
        "text": "câncer de mama.",
        "explanation": "Incorreta: História familiar de câncer de mama em avó materna não contraindica anticoncepcional combinado (Categoria 1).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "*diabetes mellitus*.",
        "explanation": "Incorreta: História familiar de diabetes em irmã não contraindica anticoncepcional combinado.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "acidente vascular cerebral.",
        "explanation": "A alternativa **C** está correta. De acordo com os Critérios Médicos de Elegibilidade da OMS e a FEBRASGO, a **enxaqueca (migrânea) com aura** em qualquer idade é **contraindicação absoluta (Categoria 4)** ao uso de anticoncepcionais hormonais combinados (contendo estrogênio), devido ao aumento expressivo do risco de **acidente vascular cerebral (AVC) isquêmico**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "hipertensão arterial sistêmica.",
        "explanation": "Incorreta: História familiar de HAS na mãe não contraindica método combinado em paciente normotensa.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com os Critérios Médicos de Elegibilidade da OMS e a FEBRASGO, a **enxaqueca (migrânea) com aura** em qualquer idade é **contraindicação absoluta (Categoria 4)** ao uso de anticoncepcionais hormonais combinados (contendo estrogênio), devido ao aumento expressivo do risco de **acidente vascular cerebral (AVC) isquêmico**.\n- **A) Incorreta:** História familiar de câncer de mama em avó materna não contraindica anticoncepcional combinado (Categoria 1).\n- **B) Incorreta:** História familiar de diabetes em irmã não contraindica anticoncepcional combinado.\n- **D) Incorreta:** História familiar de HAS na mãe não contraindica método combinado em paciente normotensa.",
    "perolaClinica": "De acordo com os Critérios Médicos de Elegibilidade da OMS e a FEBRASGO, a **enxaqueca (migrânea) com aura** em qualquer idade é **contraindicação absoluta (Categoria 4)** ao uso de anticoncepcionais hormonais combinados (contendo estrogênio), devido ao aumento expressivo do risco de **acidente vascular cerebral (AVC) isquêmico**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Contraindicação absoluta ao anticoncepcional combinado na enxaqueca com aura pelo risco de AVC.",
      "raciocinioChave": "Segundo a OMS e a FEBRASGO, a enxaqueca com aura é contraindicação absoluta (categoria 4) ao uso de anticoncepcionais combinados com estrogênio em qualquer idade. Essa restrição deve-se ao aumento significativo do risco de acidente vascular cerebral isquêmico.",
      "armadilhaBanca": "Desviar a atenção para antecedentes familiares (câncer de mama em avó, HAS materna ou diabetes na irmã) que não contraindicam o método."
    },
    "mapaDistratores": {
      "A": "A história familiar de câncer de mama em avó materna é categoria 1 da OMS e não contraindica contraceptivo combinado.",
      "B": "O antecedente familiar de diabetes em irmã não representa contraindicação ao uso de contraceptivos hormonais combinados.",
      "D": "A hipertensão arterial familiar sem hipertensão na paciente não contraindica o uso de método hormonal combinado."
    }
  },
  {
    "id": "q-enamed-2025-055",
    "code": "Q-ENAMED25-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Ferramentas de Abordagem Familiar e Comunitária",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-ferramentas-de-abordagem-familiar-e-comunitaria",
    "tags": [
      "vacinacao-do-idoso",
      "pni",
      "visita-domiciliar",
      "abordagem-familiar"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Ao visitar um idoso acamado de 80 anos, restrito ao lar e dependente em relação às atividades de vida diária, a médica de família e comunidade verificou que ele não havia recebido as vacinas indicadas pelo Ministério da Saúde para os idosos. Ao questionar a filha de 55 anos, principal cuidadora, sobre a vacinação do idoso, ela respondeu que o pai é muito frágil e não iria aguentar os efeitos colaterais, e como ele é restrito ao lar, a família preferiu não vacinar.\n\nAssinale a alternativa que inclui, respectivamente, vacinas disponibilizadas no calendário de imunização nacional para o idoso e uma forma de abordar a situação encontrada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pneumocócica 23-valente, 1 dose, com reforço em 5 anos; dupla adulto (dT – contra difteria e tétano), a cada 10 anos; contra influenza e covid-19, anualmente; contra hepatite B, 3 doses. Agendar uma nova visita domiciliar com mais membros da família para dialogar sobre a situação.",
        "explanation": "A alternativa **A** está correta. Pelo Calendário Nacional de Vacinação do Idoso (PNI/MS), estão disponíveis no SUS para idosos: **influenza** e **covid-19** (anuais/conforme campanha), **dupla adulto (dT)** (a cada 10 anos), **hepatite B** (3 doses) e **pneumocócica 23-valente (VPP23)** (indicada especialmente para idosos institucionalizados/acamados ou com comorbidades, 1 dose com reforço após 5 anos). Diante da hesitação vacinal baseada em medo de eventos adversos, a abordagem centrada na pessoa e na família na APS recomenda **dialogar em nova visita domiciliar com mais familiares** para esclarecer riscos/benefícios, e não postura punitiva.\n- **B e D) Incorretas:** A vacina contra herpes-zóster não integra o calendário básico universal do SUS; além disso, denunciar imediatamente ao Conselho do Idoso ou aceitar passivamente sem esclarecimento adequado prejudica o vínculo e a proteção do idoso.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Contra influenza e covid-19, anualmente; dupla adulto (dT – contra difteria e tétano), a cada 10 anos; contra hepatite B, 3 doses; contra herpes-zóster, 2 doses. Fazer denúncia ao Conselho Municipal do Idoso sobre não vacinação do idoso.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Pneumocócica 10-valente, 1 dose, com reforço em 5 anos; dupla adulto (dT – contra difteria e tétano), a cada 10 anos; contra influenza e covid-19, anualmente; contra hepatite B, 3 doses. Solicitar que a filha assine um termo de responsabilidade em relação à não vacinação do pai.",
        "explanation": "Incorreta: A pneumocócica 10-valente é destinada a crianças menores de 5 anos (no idoso no SUS utiliza-se VPP23).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Pneumocócica 10-valente, 1 dose, com reforço em 5 anos; contra influenza e covid-19, anualmente; contra herpes-zóster, 2 doses; dupla adulto (dT – contra difteria e tétano), a cada 10 anos. Respeitar a autonomia da filha sobre a vacinação, uma vez que é a cuidadora responsável.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Pelo Calendário Nacional de Vacinação do Idoso (PNI/MS), estão disponíveis no SUS para idosos: **influenza** e **covid-19** (anuais/conforme campanha), **dupla adulto (dT)** (a cada 10 anos), **hepatite B** (3 doses) e **pneumocócica 23-valente (VPP23)** (indicada especialmente para idosos institucionalizados/acamados ou com comorbidades, 1 dose com reforço após 5 anos). Diante da hesitação vacinal baseada em medo de eventos adversos, a abordagem centrada na pessoa e na família na APS recomenda **dialogar em nova visita domiciliar com mais familiares** para esclarecer riscos/benefícios, e não postura punitiva.\n- **B e D) Incorretas:** A vacina contra herpes-zóster não integra o calendário básico universal do SUS; além disso, denunciar imediatamente ao Conselho do Idoso ou aceitar passivamente sem esclarecimento adequado prejudica o vínculo e a proteção do idoso.\n- **C) Incorreta:** A pneumocócica 10-valente é destinada a crianças menores de 5 anos (no idoso no SUS utiliza-se VPP23).",
    "perolaClinica": "Pelo Calendário Nacional de Vacinação do Idoso (PNI/MS), estão disponíveis no SUS para idosos: **influenza** e **covid-19** (anuais/conforme campanha), **dupla adulto (dT)** (a cada 10 anos), **hepatite B** (3 doses) e **pneumocócica 23-valente (VPP23)** (indicada especialmente para idosos institucionalizados/acamados ou com comorbidades, 1 dose com reforço após 5 anos).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Calendário vacinal do idoso no SUS (PNI) e abordagem dialógica da hesitação vacinal em visita domiciliar.",
      "raciocinioChave": "O PNI disponibiliza ao idoso VPP23, dT a cada 10 anos, influenza e covid-19 anuais e hepatite B em 3 doses. Diante da hesitação vacinal da cuidadora, a conduta da MFC é agendar nova visita com a família para esclarecer dúvidas e dialogar.",
      "armadilhaBanca": "Incluir vacinas indisponíveis na rotina do PNI para idosos (herpes-zóster, VPC10) ou adotar condutas punitivas e burocráticas com a família."
    },
    "mapaDistratores": {
      "B": "A vacina contra herpes-zóster não integra o calendário de rotina do SUS para idosos, e denunciar a família rompe o vínculo sem diálogo prévio.",
      "C": "A pneumocócica 10-valente é destinada à pediatria (idosos recebem VPP23), e exigir termo de responsabilidade não substitui a educação em saúde.",
      "D": "A VPC10 e a vacina contra herpes-zóster não compõem esse esquema rotineiro do idoso no SUS, e acatar a recusa sem esclarecimento configura omissão."
    }
  },
  {
    "id": "q-enamed-2025-056",
    "code": "Q-ENAMED25-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": [
      "chikungunya",
      "aedes-aegypti",
      "manejo-integrado-de-vetores",
      "vigilancia-epidemiologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O vírus Chikungunya é transmitido pelo mosquito *Aedes sp* e foi responsável por grandes epidemias associadas a desfechos clínicos agudos, crônicos e graves. As ações voltadas para o controle do *Aedes sp* incluem medidas como o manejo integrado de vetores, que envolve atividades a serem executadas pela equipe de vigilância do território em um processo cíclico, tais como",
    "alternativas": [
      {
        "letter": "A",
        "text": "levantamento do índice larvário, notificação de vetores infectados e avaliação dos indicadores entomológicos e epidemiológicos.",
        "explanation": "Incorreta: Não existe \"notificação de vetores infectados\" no Sinan.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "treinamento da equipe de controle de vetores, uso intensivo de inseticidas, mutirões de limpeza e tratamento de pontos estratégicos.",
        "explanation": "Incorreta: O uso intensivo/indiscriminado de inseticidas contraria o MIV (que prioriza controle mecânico/ambiental e uso racional de larvicidas/adulticidas).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "vigilância virológica, notificação semanal dos casos suspeitos de Chikungunya em áreas sem transmissão e definição do local provável de infecção.",
        "explanation": "Incorreta: Em áreas sem transmissão autóctone, a notificação de caso suspeito/confirmado de Chikungunya ou óbito segue fluxos específicos, mas o texto descreve vigilância de casos humanos, e não o ciclo do MIV.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "análise situacional com base em informações epidemiológicas e entomológicas, desenho das operações de planejamento, implementação, monitoramento e avaliação.",
        "explanation": "A alternativa **D** está correta. Segundo as Diretrizes Nacionais para Prevenção e Controle de Epidemias de Dengue/Chikungunya e a OPAS/OMS, o **Manejo Integrado de Vetores (MIV)** é um processo cíclico e racional de tomada de decisão baseado em evidências, composto pelas etapas de **análise situacional** (dados epidemiológicos e entomológicos), **planejamento das operações**, **implementação**, **monitoramento** e **avaliação**.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **D** está correta. Segundo as Diretrizes Nacionais para Prevenção e Controle de Epidemias de Dengue/Chikungunya e a OPAS/OMS, o **Manejo Integrado de Vetores (MIV)** é um processo cíclico e racional de tomada de decisão baseado em evidências, composto pelas etapas de **análise situacional** (dados epidemiológicos e entomológicos), **planejamento das operações**, **implementação**, **monitoramento** e **avaliação**.\n- **A) Incorreta:** Não existe \"notificação de vetores infectados\" no Sinan.\n- **B) Incorreta:** O uso intensivo/indiscriminado de inseticidas contraria o MIV (que prioriza controle mecânico/ambiental e uso racional de larvicidas/adulticidas).\n- **C) Incorreta:** Em áreas sem transmissão autóctone, a notificação de caso suspeito/confirmado de Chikungunya ou óbito segue fluxos específicos, mas o texto descreve vigilância de casos humanos, e não o ciclo do MIV.",
    "perolaClinica": "Segundo as Diretrizes Nacionais para Prevenção e Controle de Epidemias de Dengue/Chikungunya e a OPAS/OMS, o **Manejo Integrado de Vetores (MIV)** é um processo cíclico e racional de tomada de decisão baseado em evidências, composto pelas etapas de **análise situacional** (dados epidemiológicos e entomológicos), **planejamento das operações**, **implementação**, **monitoramento** e **avaliação**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Etapas do processo cíclico do Manejo Integrado de Vetores (MIV) no controle do Aedes sp.",
      "raciocinioChave": "O Manejo Integrado de Vetores baseia-se em tomada de decisão racional e cíclica pela vigilância em saúde. Compreende análise situacional epidemiológica e entomológica, planejamento das operações, implementação, monitoramento e avaliação contínua.",
      "armadilhaBanca": "Confundir o ciclo do MIV com uso intensivo de inseticidas químicos ou com ações inexistentes como notificação de vetores infectados."
    },
    "mapaDistratores": {
      "A": "Não existe notificação compulsória de vetores infectados nos sistemas de vigilância epidemiológica.",
      "B": "O uso intensivo e indiscriminado de inseticidas contraria os princípios do MIV, que prioriza controle ambiental e uso racional de larvicidas.",
      "C": "A notificação semanal de casos suspeitos humanos refere-se à vigilância epidemiológica de agravos, não às etapas cíclicas do controle vetorial."
    }
  },
  {
    "id": "q-enamed-2025-057",
    "code": "Q-ENAMED25-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": [
      "tdah",
      "metilfenidato",
      "monitoramento-puerperal",
      "efeitos-adversos"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 9 anos chega à Unidade Básica de Saúde (UBS) com o diagnóstico de transtorno de déficit de atenção e hiperatividade há 2 anos. Faz uso de metilfenidato há pelo menos 1 ano. O pai informa que, desde o início do uso, apresentou grande melhora na escola e solicita que o uso seja estendido por mais tempo.\n\nQuais estratégias de monitoramento referentes ao uso dessa medicação devem ser utilizadas?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Realizar seguimento em conjunto com neuropediatra para acompanhar aumento de peso e possível dislipidemia associada ao uso crônico do medicamento.",
        "explanation": "Incorreta: Metilfenidato tende a causar redução de apetite/perda de peso (e não ganho ponderal/dislipidemia, que são típicos de antipsicóticos atípicos).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Acompanhar com testes psicodinâmicos parâmetros de atenção e desempenho escolar, a fim de avaliar a efetividade da estimulação farmacológica.",
        "explanation": "Incorreta: Acompanhamento de efetividade do tratamento do TDAH é clínico/funcional (escala SNAP-IV, relato escolar/familiar), não por \"testes psicodinâmicos\".",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Coletar hemograma e hormônios tireoidianos anuais e eventualmente prescrever antipsicóticos para combate dos efeitos colaterais.",
        "explanation": "Incorreta: Não há indicação de hemograma ou TSH anuais de rotina nem de associar antipsicóticos para efeitos colaterais do metilfenidato.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Agendar consultas periódicas para verificação da estatura, peso e pressão arterial, com nova avaliação para retirada após 1 ano.",
        "explanation": "A alternativa **D** está correta. Os psicoestimulantes (metilfenidato) podem causar redução do apetite, desaceleração transitória do ganho ponderal/estatural e discreta elevação da pressão arterial e frequência cardíaca. Segundo o PCDT de TDAH (Ministério da Saúde) e as diretrizes da SBP/AAP, o monitoramento clínico periódico deve aferir **peso, estatura (em curvas de crescimento) e pressão arterial/FC**, além de reavaliar periodicamente (em geral anualmente, ou em períodos de menor demanda escolar) a necessidade de manutenção ou tentativa de retirada da medicação.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Os psicoestimulantes (metilfenidato) podem causar redução do apetite, desaceleração transitória do ganho ponderal/estatural e discreta elevação da pressão arterial e frequência cardíaca. Segundo o PCDT de TDAH (Ministério da Saúde) e as diretrizes da SBP/AAP, o monitoramento clínico periódico deve aferir **peso, estatura (em curvas de crescimento) e pressão arterial/FC**, além de reavaliar periodicamente (em geral anualmente, ou em períodos de menor demanda escolar) a necessidade de manutenção ou tentativa de retirada da medicação.\n- **A) Incorreta:** Metilfenidato tende a causar redução de apetite/perda de peso (e não ganho ponderal/dislipidemia, que são típicos de antipsicóticos atípicos).\n- **B) Incorreta:** Acompanhamento de efetividade do tratamento do TDAH é clínico/funcional (escala SNAP-IV, relato escolar/familiar), não por \"testes psicodinâmicos\".\n- **C) Incorreta:** Não há indicação de hemograma ou TSH anuais de rotina nem de associar antipsicóticos para efeitos colaterais do metilfenidato.",
    "perolaClinica": "Os psicoestimulantes (metilfenidato) podem causar redução do apetite, desaceleração transitória do ganho ponderal/estatural e discreta elevação da pressão arterial e frequência cardíaca.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Monitoramento clínico de crescimento, pressão arterial e reavaliação anual no uso de metilfenidato.",
      "raciocinioChave": "O metilfenidato pode reduzir o apetite, desacelerar o ganho pondero-estatural e elevar pressão arterial e frequência cardíaca. O seguimento exige consultas periódicas para aferir peso, estatura e pressão arterial, com reavaliação após 1 ano para eventual retirada.",
      "armadilhaBanca": "Atribuir ganho de peso e dislipidemia (típicos de antipsicóticos atípicos) ao metilfenidato ou exigir exames laboratoriais e testes desnecessários."
    },
    "mapaDistratores": {
      "A": "Os psicoestimulantes causam redução do apetite e perda ponderal, não ganho de peso ou dislipidemia metabólica.",
      "B": "A efetividade terapêutica no TDAH é monitorada por avaliação clínica, escolar e escalas funcionais, não por testes psicodinâmicos.",
      "C": "Não há recomendação de hemograma ou hormônios tireoidianos anuais de rotina nem de associar antipsicóticos para eventos adversos do metilfenidato."
    }
  },
  {
    "id": "q-enamed-2025-058",
    "code": "Q-ENAMED25-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Hipertireoidismo e Tireoidites",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-hipertireoidismo-e-tireoidites",
    "tags": [
      "tireoidite-subaguda",
      "de-quervain",
      "capitacao-de-iodo",
      "betabloqueador"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 45 anos é internada em hospital de média complexidade com queixas de febre (em torno de 38 °C), mialgia, mal-estar e dor na região cervical anterior, irradiada para a mandíbula e orelhas. Há 2 semanas, iniciou quadro sugestivo de infecção viral respiratória alta, com evolução clínica lenta desde então, passando a sentir palpitações e tremores nos últimos 3 dias. Procurou atendimento na unidade de saúde. Ao exame físico, a paciente se encontra febril, com taquicardia desproporcional à temperatura corporal e tremores finos nas extremidades. À palpação da tireoide: glândula dolorosa, firme e levemente aumentada de tamanho, assimétrica, não nodular. As dosagens da velocidade de hemossedimentação e proteína C reativa se mostraram elevadas.\n\nConsiderando a principal hipótese diagnóstica para o caso, quais exames complementares a sustentariam e qual o tratamento indicado, respectivamente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Redução da captação tireoidiana de iodo radioativo; betabloqueador e anti-inflamatório.",
        "explanation": "A alternativa **A** está correta. Quadro pós-viral (IVAs há 2 semanas) evoluindo com **dor cervical anterior irradiada para mandíbula/orelhas**, tireoide dolorosa à palpação, **VHS/PCR muito elevados** e sintomas de tireotoxicose (taquicardia, tremores) é clássico de **tireoidite subaguda granulomatosa (de De Quervain)**. Como a tireotoxicose decorre de destruição folicular e liberação de hormônio pré-formado (e não de hiperprodução), a cintilografia/RAIU mostra **redução acentuada da captação de iodo radioativo**. O tratamento baseia-se em **anti-inflamatórios** (AINEs ou prednisona nos casos moderados/graves) e **betabloqueador** para controle sintomático adrenérgico (SBEM/ATA).\n- **C e D) Incorretas:** Na tireotoxicose o TSH está **suprimido** (e não aumentado); além disso, tionamidas (metimazol) e radioiodo não funcionam na tireoidite destrutiva.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Detecção de presença de nódulo quente à cintilografia de tireoide; tireoidectomia subtotal.",
        "explanation": "Incorreta: Nódulo quente corresponde a adenoma tóxico (doença de Plummer), que é indolor e sem VHS elevado pós-viral.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Verificação de aumento nas dosagens séricas de TSH, T4 livre e TRAb; ablação com iodo radioativo.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Verificação de aumento das concentrações sanguíneas de TSH, T3 e T4 livre; oseltamivir + metimazol + atenolol.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Quadro pós-viral (IVAs há 2 semanas) evoluindo com **dor cervical anterior irradiada para mandíbula/orelhas**, tireoide dolorosa à palpação, **VHS/PCR muito elevados** e sintomas de tireotoxicose (taquicardia, tremores) é clássico de **tireoidite subaguda granulomatosa (de De Quervain)**. Como a tireotoxicose decorre de destruição folicular e liberação de hormônio pré-formado (e não de hiperprodução), a cintilografia/RAIU mostra **redução acentuada da captação de iodo radioativo**. O tratamento baseia-se em **anti-inflamatórios** (AINEs ou prednisona nos casos moderados/graves) e **betabloqueador** para controle sintomático adrenérgico (SBEM/ATA).\n- **B) Incorreta:** Nódulo quente corresponde a adenoma tóxico (doença de Plummer), que é indolor e sem VHS elevado pós-viral.\n- **C e D) Incorretas:** Na tireotoxicose o TSH está **suprimido** (e não aumentado); além disso, tionamidas (metimazol) e radioiodo não funcionam na tireoidite destrutiva.",
    "perolaClinica": "Quadro pós-viral (IVAs há 2 semanas) evoluindo com **dor cervical anterior irradiada para mandíbula/orelhas**, tireoide dolorosa à palpação, **VHS/PCR muito elevados** e sintomas de tireotoxicose (taquicardia, tremores) é clássico de **tireoidite subaguda granulomatosa (de De Quervain)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico cintilográfico e manejo sintomático da tireoidite subaguda de De Quervain.",
      "raciocinioChave": "Pródromo viral seguido de dor cervical anterior irradiada para mandíbula e orelhas, tireoide dolorosa, VHS/PCR elevados e tireotoxicose caracterizam tireoidite subaguda de De Quervain. Pela destruição folicular sem hiperprodução, há baixa captação de iodo radioativo e trata-se com anti-inflamatório e betabloqueador.",
      "armadilhaBanca": "Indicar antitireoidianos (metimazol), ablação com radioiodo ou cirurgia em uma tireotoxicose transitória por destruição glandular."
    },
    "mapaDistratores": {
      "B": "Nódulo quente à cintilografia indica adenoma tóxico (doença de Plummer), que cursa de forma indolor e sem elevação de provas inflamatórias.",
      "C": "Na tireoidite subaguda, o TSH encontra-se suprimido (não elevado) com TRAb negativo, e a ablação com radioiodo é ineficaz e contraindicada.",
      "D": "O TSH está suprimido na tireotoxicose, e o metimazol não atua na liberação de hormônios pré-formados por destruição folicular."
    }
  },
  {
    "id": "q-enamed-2025-059",
    "code": "Q-ENAMED25-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Convulsão Febril e Emergências Neurológicas",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-convulsao-febril-e-emergencias-neurologicas",
    "tags": [
      "esclerose-tuberosa",
      "espasmos-infantis",
      "sindrome-de-west",
      "manchas-hipomelanoticas"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 9 meses é atendido em Unidade Básica de Saúde (UBS) em virtude do surgimento de crises epilépticas há 3 meses. Os eventos se caracterizam por espasmos em flexão dos membros superiores sobre o tronco, semelhantes a sustos, e ocorrem nos horários de maior sonolência da criança. História gestacional e de parto sem anormalidades. Ao exame físico, lactente interage com o observador, porém não consegue ficar sentado. Ausculta cardíaca e respiratória sem anormalidades. Apresenta várias manchas hipomelanóticas nos membros inferiores e no tronco. Ressonância magnética de crânio revelou duas áreas compatíveis com astrocitomas de células gigantes subependimárias.\n\nA principal hipótese diagnóstica é",
    "alternativas": [
      {
        "letter": "A",
        "text": "neurofibromatose.",
        "explanation": "Incorreta: Neurofibromatose tipo 1 cursa com manchas café com leite, efélides axilares/inguinais, neurofibromas e nódulos de Lisch.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "esclerose tuberosa.",
        "explanation": "A alternativa **B** está correta. Lactente com **espasmos infantis (síndrome de West)**, atraso motor, **manchas hipomelanóticas** (\"em folha de freixo\") e **astrocitomas subependimários de células gigantes (SEGA)** na RM de crânio preenche critérios maiores inequívocos para **esclerose tuberosa** (complexo esclerose tuberosa — mutação *TSC1/TSC2*).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "síndrome de Sturge-Weber.",
        "explanation": "Incorreta: Síndrome de Sturge-Weber caracteriza-se por mancha vinho do Porto facial (território V1 do trigêmeo) e angiomatose leptomeníngea ipsilateral.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "doença de von Hippel-Lindau.",
        "explanation": "Incorreta: Doença de von Hippel-Lindau associa-se a hemangioblastomas retinianos/cerebelares, carcinoma renal e feocromocitoma.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Lactente com **espasmos infantis (síndrome de West)**, atraso motor, **manchas hipomelanóticas** (\"em folha de freixo\") e **astrocitomas subependimários de células gigantes (SEGA)** na RM de crânio preenche critérios maiores inequívocos para **esclerose tuberosa** (complexo esclerose tuberosa — mutação *TSC1/TSC2*).\n- **A) Incorreta:** Neurofibromatose tipo 1 cursa com manchas café com leite, efélides axilares/inguinais, neurofibromas e nódulos de Lisch.\n- **C) Incorreta:** Síndrome de Sturge-Weber caracteriza-se por mancha vinho do Porto facial (território V1 do trigêmeo) e angiomatose leptomeníngea ipsilateral.\n- **D) Incorreta:** Doença de von Hippel-Lindau associa-se a hemangioblastomas retinianos/cerebelares, carcinoma renal e feocromocitoma.",
    "perolaClinica": "Lactente com **espasmos infantis (síndrome de West)**, atraso motor, **manchas hipomelanóticas** (\"em folha de freixo\") e **astrocitomas subependimários de células gigantes (SEGA)** na RM de crânio preenche critérios maiores inequívocos para **esclerose tuberosa** (complexo esclerose tuberosa — mutação *TSC1/TSC2*).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de esclerose tuberosa por espasmos infantis, máculas hipomelanóticas e SEGA.",
      "raciocinioChave": "Lactente com espasmos em flexão (síndrome de West), atraso do desenvolvimento, manchas hipomelanóticas e astrocitomas subependimários de células gigantes na RM apresenta critérios maiores típicos de esclerose tuberosa.",
      "armadilhaBanca": "Confundir as facomatoses entre si, trocando máculas hipomelanóticas e SEGA por manchas café com leite ou mancha vinho do Porto."
    },
    "mapaDistratores": {
      "A": "A neurofibromatose tipo 1 caracteriza-se por manchas café com leite, efélides em dobras, neurofibromas e nódulos de Lisch.",
      "C": "A síndrome de Sturge-Weber apresenta mancha vinho do Porto facial em território trigeminal e angiomatose leptomeníngea.",
      "D": "A doença de von Hippel-Lindau associa-se a hemangioblastomas retinianos ou cerebelares, carcinoma renal e feocromocitoma."
    }
  },
  {
    "id": "q-enamed-2025-060",
    "code": "Q-ENAMED25-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Diverticulite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-diverticulite-aguda",
    "tags": [
      "diverticulite-aguda",
      "tomografia-computadorizada",
      "plastrao-inflamatorio",
      "abdome-agudo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente masculino, 59 anos, atendido em hospital terciário com queixa de dor de moderada intensidade em fossa ilíaca esquerda (FIE), com início há 5 dias. Apresentou temperatura de 38 °C nas últimas 48 horas, associada à prostração. Não possuía comorbidades. Relatou episódio semelhante de menor intensidade há cerca de 1 ano, com resolução espontânea e um episódio de hematoquezia há 6 meses. No momento se encontra em regular estado geral, discretamente desidratado, com frequência cardíaca de 95 bpm; pressão arterial de 140 x 90 mmHg; índice de massa corporal de 30,5 kg/m². Abdome flácido, doloroso à palpação profunda em FIE e hipogástrio, com plastrão palpável em hipogástrio. Hemograma: leucócitos de 17.000/mm³ (valor de referência: 5.000 a 10.000/mm³), 7% de bastões (valor de referência: 0 a 5%).\n\nConsiderando o quadro, qual é o exame complementar de maior acurácia para estabelecer o diagnóstico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Radiografia abdominal em 3 posições.",
        "explanation": "Incorreta: Radiografia simples só detecta pneumoperitônio ou obstrução grosseira, tendo baixíssima acurácia para diverticulite.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Colonoscopia com biópsia.",
        "explanation": "Incorreta: A colonoscopia é **contraindicada na fase aguda** da diverticulite pelo risco de perfuração intestinal por insuflação (deve ser feita após 6–8 semanas da resolução).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Tomografia de abdome com contraste.",
        "explanation": "A alternativa **C** está correta. Homem > 50 anos com dor em fossa ilíaca esquerda há 5 dias, febre, plastrão palpável e leucocitose com desvio à esquerda apresenta quadro clássico de **diverticulite aguda** (possivelmente complicada com flegmão/abscesso). Segundo as diretrizes da WSES e ASCRS, o exame de maior acurácia e padrão-ouro para confirmar o diagnóstico e estadiar complicações (classificação de Hinchey) é a **tomografia computadorizada de abdome e pelve com contraste**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Ultrassonografia de abdome.",
        "explanation": "Incorreta: A ultrassonografia tem menor acurácia que a TC, especialmente em paciente obeso (IMC 30,5 kg/m²) e para avaliar coleções pélvicas profundas.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Homem > 50 anos com dor em fossa ilíaca esquerda há 5 dias, febre, plastrão palpável e leucocitose com desvio à esquerda apresenta quadro clássico de **diverticulite aguda** (possivelmente complicada com flegmão/abscesso). Segundo as diretrizes da WSES e ASCRS, o exame de maior acurácia e padrão-ouro para confirmar o diagnóstico e estadiar complicações (classificação de Hinchey) é a **tomografia computadorizada de abdome e pelve com contraste**.\n- **A) Incorreta:** Radiografia simples só detecta pneumoperitônio ou obstrução grosseira, tendo baixíssima acurácia para diverticulite.\n- **B) Incorreta:** A colonoscopia é **contraindicada na fase aguda** da diverticulite pelo risco de perfuração intestinal por insuflação (deve ser feita após 6–8 semanas da resolução).\n- **D) Incorreta:** A ultrassonografia tem menor acurácia que a TC, especialmente em paciente obeso (IMC 30,5 kg/m²) e para avaliar coleções pélvicas profundas.",
    "perolaClinica": "Homem > 50 anos com dor em fossa ilíaca esquerda há 5 dias, febre, plastrão palpável e leucocitose com desvio à esquerda apresenta quadro clássico de **diverticulite aguda** (possivelmente complicada com flegmão/abscesso).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Tomografia computadorizada de abdome com contraste como padrão-ouro na suspeita de diverticulite aguda.",
      "raciocinioChave": "Homem > 50 anos com dor em fossa ilíaca esquerda há 5 dias, febre, plastrão palpável e leucocitose apresenta suspeita clínica de diverticulite aguda possivelmente complicada. A tomografia de abdome com contraste é o exame padrão-ouro para confirmar o diagnóstico e estadiar complicações.",
      "armadilhaBanca": "Indicar colonoscopia na fase aguda da diverticulite, procedimento proscrito pelo risco de perfuração intestinal."
    },
    "mapaDistratores": {
      "A": "A radiografia simples em 3 posições tem baixíssima sensibilidade para diverticulite, detectando apenas pneumoperitônio ou obstrução.",
      "B": "A colonoscopia é contraindicada na fase aguda da diverticulite pelo risco de perfuração por insuflação.",
      "D": "A ultrassonografia abdominal tem acurácia inferior à tomografia, especialmente em pacientes com obesidade e suspeita de coleções profundas."
    }
  },
  {
    "id": "q-enamed-2025-061",
    "code": "Q-ENAMED25-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Vulvovaginites e Corrimentos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-vulvovaginites-e-corrimentos-genitais",
    "tags": [
      "candidiase-vulvovaginal",
      "miconazol",
      "vulvovaginite",
      "prurido-genital"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 35 anos, diabética, com laqueadura tubária bilateral, procurou atendimento médico com queixa de prurido genital e disúria terminal, com 7 dias de evolução. Recentemente, fez uso de antibiótico para tratamento de abscesso dental. Ao exame especular, notava-se edema vulvar, hiperemia, fissura, corrimento esbranquiçado e teste das aminas negativo.\n\nCom base no agente etiológico mais provável, o tratamento é",
    "alternativas": [
      {
        "letter": "A",
        "text": "miconazol, 1 aplicador, via vaginal, por 7 noites.",
        "explanation": "A alternativa **A** está correta. Mulher diabética que usou antibiótico recentemente (dois fatores de risco clássicos) apresentando prurido vulvar intenso, disúria externa/terminal, hiperemia, fissuras, corrimento branco grumoso e teste das aminas negativo tem diagnóstico clínico de **candidíase vulvovaginal** (*Candida albicans*). Pelo PCDT de ISTs do Ministério da Saúde, o tratamento tópico de primeira escolha é **miconazol creme vaginal 2%, 1 aplicador à noite por 7 dias** (ou fluconazol 150 mg VO dose única em casos não complicados).\n- **B e C) Incorretas:** Antibióticos antibacterianos agravam a candidíase por destruírem a flora lactobacilar protetora.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "cefalexina, 2 g/dia, via oral, por 7 dias.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "azitromicina 1 g/dia, via oral, por 10 dias.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "metronidazol, 1 aplicador, via vaginal, por 10 noites.",
        "explanation": "Incorreta: Metronidazol trata vaginose bacteriana (teste das aminas positivo) e tricomoníase, não tendo ação contra fungos.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. Mulher diabética que usou antibiótico recentemente (dois fatores de risco clássicos) apresentando prurido vulvar intenso, disúria externa/terminal, hiperemia, fissuras, corrimento branco grumoso e teste das aminas negativo tem diagnóstico clínico de **candidíase vulvovaginal** (*Candida albicans*). Pelo PCDT de ISTs do Ministério da Saúde, o tratamento tópico de primeira escolha é **miconazol creme vaginal 2%, 1 aplicador à noite por 7 dias** (ou fluconazol 150 mg VO dose única em casos não complicados).\n- **B e C) Incorretas:** Antibióticos antibacterianos agravam a candidíase por destruírem a flora lactobacilar protetora.\n- **D) Incorreta:** Metronidazol trata vaginose bacteriana (teste das aminas positivo) e tricomoníase, não tendo ação contra fungos.",
    "perolaClinica": "Mulher diabética que usou antibiótico recentemente (dois fatores de risco clássicos) apresentando prurido vulvar intenso, disúria externa/terminal, hiperemia, fissuras, corrimento branco grumoso e teste das aminas negativo tem diagnóstico clínico de **candidíase vulvovaginal** (*Candida albicans*).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico clínico de candidíase vulvovaginal e tratamento tópico de primeira escolha com miconazol.",
      "raciocinioChave": "Mulher diabética após antibioticoterapia com prurido vulvar, disúria externa, hiperemia, fissuras, corrimento esbranquiçado e teste das aminas negativo apresenta candidíase vulvovaginal. O tratamento de escolha conforme o PCDT de ISTs é miconazol vaginal por 7 noites.",
      "armadilhaBanca": "Confundir candidíase com vaginose bacteriana ou tricomoníase para prescrever metronidazol, ou prescrever antibacterianos."
    },
    "mapaDistratores": {
      "B": "A cefalexina é um antibacteriano sem atividade antifúngica e pode agravar a disbiose vaginal.",
      "C": "A azitromicina não tem ação contra Candida albicans, sendo usada para infecções bacterianas como clamídia.",
      "D": "O metronidazol trata vaginose bacteriana (teste das aminas positivo) e tricomoníase, não tendo efeito sobre fungos."
    }
  },
  {
    "id": "q-enamed-2025-062",
    "code": "Q-ENAMED25-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Declaração de Óbito",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-declaracao-de-obito",
    "tags": [
      "declaracao-de-obito",
      "causa-basica",
      "causa-terminal",
      "preenchimento-de-do"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Médica de família e comunidade foi solicitada para preencher a declaração de óbito de um paciente que acompanhava regularmente em sua área adstrita. O paciente era hipertenso há 30 anos, com histórico pessoal de acidente vascular encefálico (AVE) há 5 anos. Há 10 dias o paciente apresentou quadro gripal e há 1 dia teve agravamento dos sintomas respiratórios, com dispneia e cianose.\n\nA declaração de óbito deverá ser preenchida",
    "alternativas": [
      {
        "letter": "A",
        "text": "pelo Instituto Médico Legal e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Síndrome gripal (10 dias); c) Hipertensão arterial sistêmica (30 anos). Parte II: Acidente vascular encefálico (5 anos).",
        "explanation": "Incorreta: IML só atua em mortes por causas externas (violentas/acidentais/suspeitas).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "pela médica e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Pneumonia (1 dia); c) Síndrome gripal (10 dias). Parte II: a) Acidente vascular encefálico (5 anos); b) Hipertensão arterial sistêmica (30 anos).",
        "explanation": "A alternativa **B** está correta. Trata-se de morte por **causa natural com assistência médica regular** (paciente acompanhado na UBS com causa bem definida), devendo a Declaração de Óbito (DO) ser preenchida **pela própria médica assistente** (Manual de Instruções para Preenchimento da DO — Ministério da Saúde). Na **Parte I**, registra-se a cadeia causal sequencial de cima para baixo (causa terminal na linha *a* até a causa básica na última linha preenchida): *a)* Insuficiência respiratória aguda grave (horas) ← *b)* Pneumonia (1 dia) ← *c)* Síndrome gripal (10 dias). Na **Parte II**, registram-se comorbidades que contribuíram para o óbito sem fazer parte da cadeia direta: AVE prévio (5 anos) e HAS (30 anos).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "pelo Serviço Móvel de Atendimento de Urgência (SAMU) e constar: Parte I: a) Síndrome gripal (10 dias); b) Pneumonia (1 dia); c) Insuficiência respiratória aguda grave (horas). Parte II: a) Acidente vascular encefálico (5 anos); b) Hipertensão arterial sistêmica (30 anos).",
        "explanation": "Incorreta: A ordem na Parte I está invertida (a causa terminal deve ficar na linha *a*, e a causa básica por último).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "pelo serviço de verificação de óbitos e constar: Parte I: a) Insuficiência respiratória aguda grave (horas); b) Acidente vascular encefálico (5 anos); c) Hipertensão arterial sistêmica (30 anos). Parte II: a) Pneumonia (1 dia); b) Síndrome gripal (10 dias).",
        "explanation": "Incorreta: SVO só é acionado em morte natural sem assistência médica ou com causa mal definida.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Trata-se de morte por **causa natural com assistência médica regular** (paciente acompanhado na UBS com causa bem definida), devendo a Declaração de Óbito (DO) ser preenchida **pela própria médica assistente** (Manual de Instruções para Preenchimento da DO — Ministério da Saúde). Na **Parte I**, registra-se a cadeia causal sequencial de cima para baixo (causa terminal na linha *a* até a causa básica na última linha preenchida): *a)* Insuficiência respiratória aguda grave (horas) ← *b)* Pneumonia (1 dia) ← *c)* Síndrome gripal (10 dias). Na **Parte II**, registram-se comorbidades que contribuíram para o óbito sem fazer parte da cadeia direta: AVE prévio (5 anos) e HAS (30 anos).\n- **A) Incorreta:** IML só atua em mortes por causas externas (violentas/acidentais/suspeitas).\n- **C) Incorreta:** A ordem na Parte I está invertida (a causa terminal deve ficar na linha *a*, e a causa básica por último).\n- **D) Incorreta:** SVO só é acionado em morte natural sem assistência médica ou com causa mal definida.",
    "perolaClinica": "Trata-se de morte por **causa natural com assistência médica regular** (paciente acompanhado na UBS com causa bem definida), devendo a Declaração de Óbito (DO) ser preenchida **pela própria médica assistente** (Manual de Instruções para Preenchimento da DO — Ministério da Saúde).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Responsabilidade pelo preenchimento da Declaração de Óbito e sequência causal nas Partes I e II.",
      "raciocinioChave": "Em óbito por causa natural com assistência médica regular e causa definida, a médica assistente deve emitir a Declaração de Óbito. Na Parte I registra-se a sequência de cima para baixo (insuficiência respiratória ← pneumonia ← síndrome gripal), deixando AVE e HAS na Parte II.",
      "armadilhaBanca": "Encaminhar morte natural assistida ao IML ou SVO, inverter a ordem causal da Parte I ou colocar comorbidades prévias na cadeia terminal."
    },
    "mapaDistratores": {
      "A": "O IML atua apenas em mortes por causas externas, além de a HAS não compor a cadeia direta da infecção respiratória aguda.",
      "C": "O SAMU não preenche DO de paciente com acompanhamento regular, e a sequência da Parte I está invertida (causa básica na primeira linha).",
      "D": "O SVO só é acionado em óbito natural sem assistência médica ou mal definido, e a Parte I listou comorbidades crônicas no lugar da cadeia respiratória."
    }
  },
  {
    "id": "q-enamed-2025-063",
    "code": "Q-ENAMED25-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": [
      "estudos-epidemiologicos",
      "ensaio-nao-randomizado",
      "estudo-de-intervencao",
      "saude-coletiva"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma equipe de saúde da família percebeu um aumento do número de casos complicados de *diabetes mellitus*. De um total de 3.500 pacientes cadastrados, 280 são acompanhados por *diabetes mellitus* tipo 2, sendo 4 casos de amputações, 28 casos de retinopatia diabética e 80 casos de algum grau de doença renal crônica. Foi identificado que essa população apresentava dieta inadequada, baixo nível de atividade física e pouco conhecimento sobre estilos de vida que poderiam prevenir complicações das doenças. A equipe de saúde decidiu elaborar um projeto de intervenção com ênfase em avaliação e orientação nutricional e práticas de atividade física de rotina.\n\nQual é o desenho de pesquisa para avaliação do impacto desse projeto de intervenção coletiva?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Estudo de caso-controle aninhado.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Ensaio clínico não randomizado.",
        "explanation": "A alternativa **B** está correta. Trata-se de um **estudo de intervenção** (a equipe introduz ativamente orientação nutricional e atividade física na população adstrita para avaliar impacto), o que exclui estudos observacionais (caso-controle, coorte). Como a intervenção coletiva é aplicada à comunidade/grupo acompanhado pela equipe sem alocação aleatória de indivíduos para grupo controle, configura um **ensaio clínico/comunitário não randomizado** (estudo quase-experimental).\n- **A e C) Incorretas:** Caso-controle aninhado e coorte retrospectivo são estudos observacionais (sem intervenção do pesquisador).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Estudo de coorte retrospectivo.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Ensaio clínico randomizado.",
        "explanation": "Incorreta: Não há processo de randomização entre grupo intervenção e controle descrita no projeto coletivo da equipe.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Trata-se de um **estudo de intervenção** (a equipe introduz ativamente orientação nutricional e atividade física na população adstrita para avaliar impacto), o que exclui estudos observacionais (caso-controle, coorte). Como a intervenção coletiva é aplicada à comunidade/grupo acompanhado pela equipe sem alocação aleatória de indivíduos para grupo controle, configura um **ensaio clínico/comunitário não randomizado** (estudo quase-experimental).\n- **A e C) Incorretas:** Caso-controle aninhado e coorte retrospectivo são estudos observacionais (sem intervenção do pesquisador).\n- **D) Incorreta:** Não há processo de randomização entre grupo intervenção e controle descrita no projeto coletivo da equipe.",
    "perolaClinica": "Trata-se de um **estudo de intervenção** (a equipe introduz ativamente orientação nutricional e atividade física na população adstrita para avaliar impacto), o que exclui estudos observacionais (caso-controle, coorte).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Classificação de projeto de intervenção coletiva sem alocação aleatória como ensaio clínico não randomizado.",
      "raciocinioChave": "Como a equipe de saúde aplica ativamente uma intervenção educativa e de atividade física para avaliar impacto na população diabética, trata-se de um estudo experimental, não observacional. Pela ausência de randomização para grupos distintos, classifica-se como ensaio clínico não randomizado.",
      "armadilhaBanca": "Confundir estudo de intervenção comunitária com estudo observacional (coorte/caso-controle) ou presumir randomização inexistente."
    },
    "mapaDistratores": {
      "A": "O caso-controle aninhado é um estudo observacional retrospectivo dentro de uma coorte, sem introdução ativa de intervenção.",
      "C": "A coorte retrospectiva apenas observa desfechos já ocorridos a partir de exposições prévias, sem intervenção da equipe.",
      "D": "Não há descrição de alocação aleatória dos participantes entre grupo intervenção e grupo controle para caracterizar randomização."
    }
  },
  {
    "id": "q-enamed-2025-064",
    "code": "Q-ENAMED25-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Emergências Psiquiátricas e Risco de Suicídio",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-emergencias-psiquiatricas-e-risco-de-suicidio",
    "tags": [
      "risco-de-suicidio",
      "emergencia-psiquiatrica",
      "internacao-psiquiatrica",
      "transtorno-depressivo"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 23 anos, estudante universitário, é levado à Unidade de Pronto Atendimento (UPA) por um amigo da moradia estudantil, que o encontrou chorando, trancado no banheiro com diversas cartelas de medicamentos próximas de si. O paciente nega ter ingerido qualquer fármaco ou outras substâncias, mas admite estar pensando em dar fim à própria vida. Refere tristeza profunda há cerca de 2 meses, com piora recente após o término de um relacionamento. Diz estar “sem propósito na vida” e que “ninguém sentiria falta” se ele morresse. Conta que viu na internet que tomar muitos comprimidos de paracetamol seria a melhor forma de morrer. Relata insônia inicial e terminal, perda de apetite, queda de rendimento acadêmico e isolamento social. Nega uso atual de drogas ilícitas, mas admite consumo de álcool eventualmente. Abandonou psicoterapia após 2 sessões. Todos os familiares vivem em outro estado. Ao exame, apresenta-se vígil, orientado, com discurso discretamente lentificado, sem alucinações ou delírios evidentes. O contato visual é pobre, o afeto está intensamente rebaixado e não modulante. Exames laboratoriais gerais solicitados à chegada na UPA não mostram alterações.\n\nQual é a conduta adequada ao caso clínico apresentado?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Encaminhar o paciente para acompanhamento médico em Unidade Básica de Saúde (UBS).",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Encaminhar o paciente para psicoterapia com equipe multiprofissional na atenção primária à saúde.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Encaminhar o paciente para avaliação ambulatorial com psiquiatra em centro de atenção psicossocial do tipo I.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Encaminhar o paciente para internação em enfermaria de saúde mental em hospital geral ou em serviço congênere.",
        "explanation": "A alternativa **D** está correta. O paciente apresenta episódio depressivo grave com **altíssimo risco iminente de suicídio**: ideação suicida estruturada com plano letal pesquisado (paracetamol), acesso aos meios (cartelas de medicamentos no banheiro), desesperança intensa, abandono prévio de tratamento e **ausência de rede de apoio familiar próxima** (mora em moradia estudantil, família em outro estado). Conforme as diretrizes da ABP e do Ministério da Saúde, diante de risco agudo de suicídio sem suporte familiar seguro, há indicação formal de **internação psiquiátrica em enfermaria de saúde mental em hospital geral** para proteção e estabilização.\n- **A, B e C) Incorretas:** Encaminhamentos ambulatoriais (UBS ou CAPS I) não oferecem proteção contínua 24 horas para um paciente em crise suicida iminente com plano estruturado e sem suporte familiar.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. O paciente apresenta episódio depressivo grave com **altíssimo risco iminente de suicídio**: ideação suicida estruturada com plano letal pesquisado (paracetamol), acesso aos meios (cartelas de medicamentos no banheiro), desesperança intensa, abandono prévio de tratamento e **ausência de rede de apoio familiar próxima** (mora em moradia estudantil, família em outro estado). Conforme as diretrizes da ABP e do Ministério da Saúde, diante de risco agudo de suicídio sem suporte familiar seguro, há indicação formal de **internação psiquiátrica em enfermaria de saúde mental em hospital geral** para proteção e estabilização.\n- **A, B e C) Incorretas:** Encaminhamentos ambulatoriais (UBS ou CAPS I) não oferecem proteção contínua 24 horas para um paciente em crise suicida iminente com plano estruturado e sem suporte familiar.",
    "perolaClinica": "O paciente apresenta episódio depressivo grave com **altíssimo risco iminente de suicídio**: ideação suicida estruturada com plano letal pesquisado (paracetamol), acesso aos meios (cartelas de medicamentos no banheiro), desesperança intensa, abandono prévio de tratamento e **ausência de rede de apoio familiar próxima** (mora em moradia estudantil, família em outro estado).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Indicação de internação hospitalar imediata diante de alto risco de suicídio sem rede de apoio.",
      "raciocinioChave": "Paciente com depressão grave, ideação suicida estruturada, plano letal pesquisado, acesso aos meios e ausência de suporte familiar próximo apresenta altíssimo risco iminente de suicídio. A conduta segura imediata é encaminhar para internação em enfermaria de saúde mental em hospital geral ou serviço congênere.",
      "armadilhaBanca": "Optar por seguimento ambulatorial na UBS, psicoterapia ou CAPS I em paciente com risco suicida iminente e sem rede de apoio."
    },
    "mapaDistratores": {
      "A": "O acompanhamento ambulatorial na UBS não oferece vigilância contínua nem proteção imediata diante de risco suicida iminente.",
      "B": "A psicoterapia ambulatorial isolada na APS é insuficiente para conter paciente com plano estruturado e acesso a meios letais.",
      "C": "A avaliação ambulatorial em CAPS I não garante internação ou observação 24 horas quando o paciente mora sozinho e apresenta alto risco imediato."
    }
  },
  {
    "id": "q-enamed-2025-065",
    "code": "Q-ENAMED25-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Distúrbios da Coagulação e Anticoagulação",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-disturbios-da-coagulacao-e-anticoagulacao",
    "tags": [
      "trombofilia-hereditaria",
      "fator-v-de-leiden",
      "trombose-venosa-profunda",
      "hipercoagulabilidade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 35 anos procura Unidade Básica de Saúde (UBS) informando ter tido diagnóstico de trombose venosa profunda há cerca de 2 anos. Fez tratamento adequado com anticoagulante oral por tempo limitado, tendo recebido alta com cura do quadro há cerca de 1 ano. Na ocasião, ela não havia realizado qualquer exame específico adicional. Entretanto, nos últimos 6 meses, seu pai e sua irmã também tiveram o diagnóstico de trombose. O médico assistente solicita exames complementares para rastreio de hipercoagulabilidade primária.\n\nConsiderando a história apresentada, qual alteração laboratorial é compatível com a suspeita de doença hereditária?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Presença de Fator V de Leiden.",
        "explanation": "A alternativa **A** está correta. Paciente jovem (< 45–50 anos) com antecedente de trombose venosa profunda (TVP) e forte história familiar de eventos tromboembólicos em parentes de primeiro grau (pai e irmã) sugere **trombofilia hereditária**. A trombofilia hereditária mais prevalente na população é a mutação do **Fator V de Leiden** (que confere resistência à clivagem pela proteína C ativada).\n- **B e C) Incorretas:** Proteína S e antitrombina III são anticoagulantes naturais; as trombofilias associadas decorrem de sua **deficiência** (níveis reduzidos), e não aumentados.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Níveis aumentados de proteína S.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Níveis aumentados de antitrombina III.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Níveis reduzidos de Fator de Von Willebrand.",
        "explanation": "Incorreta: Níveis reduzidos de fator de von Willebrand causam doença de von Willebrand (distúrbio **hemorrágico**, não trombótico).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Paciente jovem (< 45–50 anos) com antecedente de trombose venosa profunda (TVP) e forte história familiar de eventos tromboembólicos em parentes de primeiro grau (pai e irmã) sugere **trombofilia hereditária**. A trombofilia hereditária mais prevalente na população é a mutação do **Fator V de Leiden** (que confere resistência à clivagem pela proteína C ativada).\n- **B e C) Incorretas:** Proteína S e antitrombina III são anticoagulantes naturais; as trombofilias associadas decorrem de sua **deficiência** (níveis reduzidos), e não aumentados.\n- **D) Incorreta:** Níveis reduzidos de fator de von Willebrand causam doença de von Willebrand (distúrbio **hemorrágico**, não trombótico).",
    "perolaClinica": "Paciente jovem (< 45–50 anos) com antecedente de trombose venosa profunda (TVP) e forte história familiar de eventos tromboembólicos em parentes de primeiro grau (pai e irmã) sugere **trombofilia hereditária**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Rastreio de trombofilia hereditária destacando o Fator V de Leiden como causa mais prevalente.",
      "raciocinioChave": "Paciente jovem com antecedente de TVP e história familiar em parentes de primeiro grau sugere trombofilia hereditária. A mutação do Fator V de Leiden (resistência à proteína C ativada) é a trombofilia hereditária mais comum compatível com esse cenário.",
      "armadilhaBanca": "Inverter o sentido das deficiências trombofílicas (níveis aumentados em vez de reduzidos) ou confundir com distúrbio hemorrágico."
    },
    "mapaDistratores": {
      "B": "As trombofilias hereditárias associam-se à deficiência (níveis reduzidos), e não ao aumento, de proteína S.",
      "C": "O estado pró-trombótico hereditário decorre da deficiência (redução) de antitrombina III, e não de sua elevação.",
      "D": "Níveis reduzidos de fator de von Willebrand provocam doença hemorrágica, e não predisposição a trombose venosa."
    }
  },
  {
    "id": "q-enamed-2025-066",
    "code": "Q-ENAMED25-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Endocrinologia Pediátrica e Diabetes na Infância",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-endocrinologia-pediatrica-e-diabetes-na-infancia",
    "tags": [
      "cetoacidose-diabetica",
      "reposicao-de-potassio",
      "diabetes-mellitus",
      "emergencia-pediatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 11 anos foi trazida à Unidade de Pronto Atendimento (UPA) com quadro de queda do estado geral, náuseas e dor abdominal, desidratação e hálito cetônico. Exames realizados: glicemia de 410 mg/dL; gasometria venosa de pH 7,15 e bicarbonato de 13 mEq/L; exame de urina indica cetonúria.\n\nAlém da fluidoterapia, o próximo passo é",
    "alternativas": [
      {
        "letter": "A",
        "text": "reposição de potássio.",
        "explanation": "A alternativa **A** está correta. Criança com quadro clássico de **cetoacidose diabética (CAD)** (glicemia > 200 mg/dL, pH < 7,3, bicarbonato < 15 mEq/L e cetonúria). Segundo as diretrizes da ISPAD e da SBP, após a fase inicial de expansão volêmica (fluidoterapia com SF 0,9%), o passo essencial antes/junto à insulinoterapia contínua (após assegurar diurese e verificar K+ não hipercalêmico) é a **reposição de potássio**, pois há depleção corporal total grave de potássio e a insulina promoverá intenso influxo intracelular de K+, podendo causar hipocalemia fatal.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "correção imediata da glicemia.",
        "explanation": "Incorreta: A redução rápida da glicemia (ou bólus de insulina) é contraindicada na CAD pediátrica pelo risco de edema cerebral; além disso, insulina não deve preceder a hidratação e avaliação/reposição do potássio.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "reposição de bicarbonato de sódio.",
        "explanation": "Incorreta: Bicarbonato de sódio não é indicado na CAD com pH 7,15 (só considerado excepcionalmente se pH < 6,9 com choque/disfunção miocárdica), pelo risco de acidose paradoxal do SNC, hipocalemia e edema cerebral.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "administração imediata de manitol.",
        "explanation": "Incorreta: Manitol só é indicado se houver sinais clínicos de **edema cerebral** instalado (alteração de consciência/bradicardia/hipertensão), o que não está descrito.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Criança com quadro clássico de **cetoacidose diabética (CAD)** (glicemia > 200 mg/dL, pH < 7,3, bicarbonato < 15 mEq/L e cetonúria). Segundo as diretrizes da ISPAD e da SBP, após a fase inicial de expansão volêmica (fluidoterapia com SF 0,9%), o passo essencial antes/junto à insulinoterapia contínua (após assegurar diurese e verificar K+ não hipercalêmico) é a **reposição de potássio**, pois há depleção corporal total grave de potássio e a insulina promoverá intenso influxo intracelular de K+, podendo causar hipocalemia fatal.\n- **B) Incorreta:** A redução rápida da glicemia (ou bólus de insulina) é contraindicada na CAD pediátrica pelo risco de edema cerebral; além disso, insulina não deve preceder a hidratação e avaliação/reposição do potássio.\n- **C) Incorreta:** Bicarbonato de sódio não é indicado na CAD com pH 7,15 (só considerado excepcionalmente se pH < 6,9 com choque/disfunção miocárdica), pelo risco de acidose paradoxal do SNC, hipocalemia e edema cerebral.\n- **D) Incorreta:** Manitol só é indicado se houver sinais clínicos de **edema cerebral** instalado (alteração de consciência/bradicardia/hipertensão), o que não está descrito.",
    "perolaClinica": "Criança com quadro clássico de **cetoacidose diabética (CAD)** (glicemia > 200 mg/dL, pH < 7,3, bicarbonato < 15 mEq/L e cetonúria).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Sequência terapêutica na cetoacidose diabética pediátrica: reposição de potássio após fluidoterapia inicial.",
      "raciocinioChave": "Após a expansão volêmica inicial na cetoacidose diabética pediátrica, há depleção corporal importante de potássio agravada pela futura entrada intracelular com a insulina. Por isso, deve-se iniciar reposição de potássio (assegurada diurese e sem hipercalemia) antes ou junto à insulinoterapia contínua.",
      "armadilhaBanca": "Priorizar correção rápida da glicemia (risco de edema cerebral) ou indicar bicarbonato e manitol sem critério."
    },
    "mapaDistratores": {
      "B": "A redução abrupta da glicemia eleva o risco de edema cerebral na criança, e a insulina não deve preceder a hidratação e avaliação do potássio.",
      "C": "O bicarbonato de sódio não é indicado com pH 7,15 pelo risco de acidose paradoxal do SNC, hipocalemia e edema cerebral.",
      "D": "O manitol só é administrado diante de sinais clínicos de edema cerebral instalado, não descritos na paciente."
    }
  },
  {
    "id": "q-enamed-2025-067",
    "code": "Q-ENAMED25-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cervical, Vascular e de Extremidades",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cervical-vascular-e-de-extremidades",
    "tags": [
      "trauma-vascular",
      "torniquete",
      "controle-de-hemorragia",
      "atls"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, 26 anos, está sendo atendido em via pública, vítima de disparo de arma de fogo em braço direito. O trauma ocorreu cerca de 15 minutos antes da chegada da equipe de atendimento pré-hospitalar. Ao exame, o paciente se encontra pálido, pele fria, sudoreico, frequência cardíaca de 120 bpm, pressão arterial de 90 x 50 mmHg e escala de coma de Glasgow de 15. A equipe de socorristas não possui hemoderivados disponíveis. Exame físico de cabeça, pescoço, tórax e abdome sem alterações, incluindo a região posterior do paciente. Presença de ferida perfuro-contusa em região medial do terço distal do braço direito, apresentando hemorragia pulsátil em grande volume.\n\nConsiderando o atendimento pré-hospitalar do paciente, deve-se realizar",
    "alternativas": [
      {
        "letter": "A",
        "text": "dissecção da região traumatizada e hemostasia do vaso que apresenta sangramento com pinças hemostáticas; iniciar reposição volêmica com albumina e soro fisiológico.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "dissecção da região traumatizada e hemostasia do vaso que apresenta sangramento com pinças hemostáticas; iniciar reposição volêmica com soro fisiológico e glicofisiológico.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "compressão local da ferida e, caso essa manobra não cesse a hemorragia, aplicação de torniquete proximal à ferida e fora da região de articulação; iniciar reposição volêmica com soro fisiológico.",
        "explanation": "A alternativa **C** está correta. Diante de hemorragia arterial exsanguinante em extremidade no atendimento pré-hospitalar (X-ABCDE), conforme o PHTLS e o ATLS (10ª edição), a conduta imediata é **compressão direta firme sobre a ferida**; se ineficaz (ou em sangramento arterial massivo), aplica-se **torniquete proximal à lesão** (evitando articulações). Na ausência de hemoderivados na cena, inicia-se reposição volêmica cautelosa com **cristaloide isotônico (soro fisiológico 0,9% ou Ringer lactato)**.\n- **A e B) Incorretas:** Exploração/dissecção às cegas da ferida ou pinçamento vascular na cena são proscritos pelo risco de lesão nervosa e agravamento da hemorragia.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "compressão local da ferida e, caso essa manobra não cesse a hemorragia, aplicação de torniquete proximal à ferida e fora da região de articulação; iniciar reposição volêmica com albumina e soro fisiológico.",
        "explanation": "Incorreta: Albumina não é fluido de ressuscitação inicial no trauma hemorrágico (cristaloide isotônico é a escolha; coloides/albumina não mostram benefício e podem piorar desfecho em TCE).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Diante de hemorragia arterial exsanguinante em extremidade no atendimento pré-hospitalar (X-ABCDE), conforme o PHTLS e o ATLS (10ª edição), a conduta imediata é **compressão direta firme sobre a ferida**; se ineficaz (ou em sangramento arterial massivo), aplica-se **torniquete proximal à lesão** (evitando articulações). Na ausência de hemoderivados na cena, inicia-se reposição volêmica cautelosa com **cristaloide isotônico (soro fisiológico 0,9% ou Ringer lactato)**.\n- **A e B) Incorretas:** Exploração/dissecção às cegas da ferida ou pinçamento vascular na cena são proscritos pelo risco de lesão nervosa e agravamento da hemorragia.\n- **D) Incorreta:** Albumina não é fluido de ressuscitação inicial no trauma hemorrágico (cristaloide isotônico é a escolha; coloides/albumina não mostram benefício e podem piorar desfecho em TCE).",
    "perolaClinica": "Diante de hemorragia arterial exsanguinante em extremidade no atendimento pré-hospitalar (X-ABCDE), conforme o PHTLS e o ATLS (10ª edição), a conduta imediata é **compressão direta firme sobre a ferida**; se ineficaz (ou em sangramento arterial massivo), aplica-se **torniquete proximal à lesão** (evitando articulações).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Controle de hemorragia exsanguinante em extremidade no pré-hospitalar (X-ABCDE) e ressuscitação com cristaloide.",
      "raciocinioChave": "Diante de hemorragia arterial pulsátil em extremidade no pré-hospitalar, a prioridade imediata é compressão direta local e, se refratária, torniquete proximal à ferida fora de articulações. Na falta de hemoderivados na cena, inicia-se reposição volêmica com soro fisiológico.",
      "armadilhaBanca": "Indicar dissecção e pinçamento vascular às cegas na cena pré-hospitalar ou associar albumina/soro glicofisiológico na reanimação."
    },
    "mapaDistratores": {
      "A": "A dissecção vascular em cena pré-hospitalar atrasa a hemostasia e lesa estruturas nobres, e a albumina não é fluido de escolha no trauma.",
      "B": "Pinçamento às cegas em via pública é contraindicado, e soro glicofisiológico não é indicado para reposição volêmica no choque hemorrágico.",
      "D": "A albumina não oferece vantagem sobre cristaloides isotônicos na ressuscitação inicial do trauma e pode piorar desfechos em TCE associado."
    }
  },
  {
    "id": "q-enamed-2025-068",
    "code": "Q-ENAMED25-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "asc-h",
      "colposcopia",
      "citologia-oncotica",
      "prevencao-cancer-colo-uterino"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 30 anos recebeu a citologia oncótica com laudo de “atipias celulares escamosas de significado indeterminado, onde não se pode afastar alto grau (ASC-H)”. Ela nega antecedente de tabagismo e não se lembra de ter tido infecção sexualmente transmissível.\n\nNesse caso, a conduta adequada deve ser a realização de",
    "alternativas": [
      {
        "letter": "A",
        "text": "conização.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "colposcopia.",
        "explanation": "A alternativa **B** está correta. Conforme as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), qualquer laudo citológico com **ASC-H** (atipias escamosas em que não se pode afastar lesão de alto grau), independentemente da idade, indica **encaminhamento imediato para colposcopia** (e biópsia de eventuais áreas suspeitas).\n- **A e C) Incorretas:** Conização e CAF são procedimentos excisionais indicados após confirmação histológica/colposcópica de lesão de alto grau (NIC II/III) ou em protocolo \"ver e tratar\" quando colposcopia já é compatível com HSIL, nunca diretamente sem colposcopia prévia diante de ASC-H.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "cirurgia de alta frequência.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "nova citologia oncótica em 6 meses.",
        "explanation": "Incorreta: Repetição citológica em 6 meses aplica-se a ASC-US (em ≥ 30 anos) ou LSIL (≥ 25 anos), jamais a ASC-H.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Conforme as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), qualquer laudo citológico com **ASC-H** (atipias escamosas em que não se pode afastar lesão de alto grau), independentemente da idade, indica **encaminhamento imediato para colposcopia** (e biópsia de eventuais áreas suspeitas).\n- **A e C) Incorretas:** Conização e CAF são procedimentos excisionais indicados após confirmação histológica/colposcópica de lesão de alto grau (NIC II/III) ou em protocolo \"ver e tratar\" quando colposcopia já é compatível com HSIL, nunca diretamente sem colposcopia prévia diante de ASC-H.\n- **D) Incorreta:** Repetição citológica em 6 meses aplica-se a ASC-US (em ≥ 30 anos) ou LSIL (≥ 25 anos), jamais a ASC-H.",
    "perolaClinica": "Conforme as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), qualquer laudo citológico com **ASC-H** (atipias escamosas em que não se pode afastar lesão de alto grau), independentemente da idade, indica **encaminhamento imediato para colposcopia** (e biópsia de eventuais áreas suspeitas).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Conduta diante de citologia oncótica com laudo de ASC-H segundo as diretrizes do INCA/MS.",
      "raciocinioChave": "Qualquer laudo de ASC-H indica possibilidade de lesão intraepitelial de alto grau não afastada e exige encaminhamento imediato para colposcopia, independentemente da idade ou fatores de risco. A ausência de tabagismo ou IST prévia não dispensa a investigação colposcópica imediata.",
      "armadilhaBanca": "Confundir a conduta imediata de ASC-H (colposcopia) com a repetição citológica semestral de ASC-US/LSIL ou com excisão prévia sem biópsia."
    },
    "mapaDistratores": {
      "A": "A conização é um procedimento excisional indicado apenas após confirmação histopatológica ou achados colposcópicos específicos, nunca como conduta inicial direta diante de ASC-H.",
      "C": "A cirurgia de alta frequência (CAF) não deve ser realizada sem avaliação colposcópica prévia, exceto em situações específicas de \"ver e tratar\" em lesão de alto grau confirmada à colposcopia.",
      "D": "A repetição da citologia oncótica em 6 meses aplica-se a casos de ASC-US em mulheres com 30 anos ou mais ou LSIL a partir dos 25 anos, sendo inadequada e insegura para ASC-H."
    }
  },
  {
    "id": "q-enamed-2025-069",
    "code": "Q-ENAMED25-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos por Uso de Substâncias e Abstinência",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-por-uso-de-substancias-e-abstinencia",
    "tags": [
      "dependencia-quimica",
      "transtorno-por-uso-de-alcool",
      "criterios-dsm-5",
      "psiquiatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 45 anos procura Unidade Básica de Saúde (UBS) do seu bairro, por não conseguir controlar a frequência e a quantidade do uso de bebida alcoólica. Por conta disso, está faltando ao trabalho e não consegue se lembrar do que acontece quando bebe. O médico da UBS investigará os pontos mais importantes que podem indicar o padrão de dependência a substâncias psicoativas de acordo com o Manual Diagnóstico Estatístico de Saúde Mental (DSM-5).\n\nO médico deve investigar sobre",
    "alternativas": [
      {
        "letter": "A",
        "text": "a intolerância cruzada entre outras substâncias e a de uso abusivo.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "a aceitação e a adesão à proposta de abstinência apresentada pela equipe.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "o tempo que é gasto para obter a substância ou recuperar-se de seus efeitos.",
        "explanation": "A alternativa **C** está correta. O DSM-5 unificou abuso e dependência em **Transtorno por Uso de Substâncias**, com 11 critérios diagnósticos divididos em 4 grupos (baixo controle, prejuízo social, uso arriscado e critérios farmacológicos). Um dos critérios clássicos de baixo controle é justamente **gastar muito tempo em atividades necessárias para obter a substância, utilizá-la ou recuperar-se de seus efeitos**.\n- **A, B e D) Incorretas:** Intolerância cruzada, adesão à abstinência e classificação jurídica (lícita vs. ilícita) não fazem parte dos 11 critérios diagnósticos do DSM-5 para transtorno por uso de substâncias.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "o tipo e a classe de substância que o paciente usa, diferenciando se é lícita ou ilícita.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. O DSM-5 unificou abuso e dependência em **Transtorno por Uso de Substâncias**, com 11 critérios diagnósticos divididos em 4 grupos (baixo controle, prejuízo social, uso arriscado e critérios farmacológicos). Um dos critérios clássicos de baixo controle é justamente **gastar muito tempo em atividades necessárias para obter a substância, utilizá-la ou recuperar-se de seus efeitos**.\n- **A, B e D) Incorretas:** Intolerância cruzada, adesão à abstinência e classificação jurídica (lícita vs. ilícita) não fazem parte dos 11 critérios diagnósticos do DSM-5 para transtorno por uso de substâncias.",
    "perolaClinica": "O DSM-5 unificou abuso e dependência em **Transtorno por Uso de Substâncias**, com 11 critérios diagnósticos divididos em 4 grupos (baixo controle, prejuízo social, uso arriscado e critérios farmacológicos).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios diagnósticos do DSM-5 para Transtorno por Uso de Substâncias (padrão de dependência).",
      "raciocinioChave": "O DSM-5 define o transtorno por uso de substâncias por 11 critérios agrupados em baixo controle, prejuízo social, uso arriscado e critérios farmacológicos. Gastar muito tempo para obter a substância, utilizá-la ou recuperar-se de seus efeitos é um dos critérios centrais de baixo controle.",
      "armadilhaBanca": "Trocar os 11 critérios oficiais do DSM-5 para transtorno por uso de substâncias por noções genéricas como legalidade da droga ou adesão ao tratamento."
    },
    "mapaDistratores": {
      "A": "Não existe o critério de \"intolerância cruzada\" no DSM-5; os critérios farmacológicos avaliam tolerância à própria substância e síndrome de abstinência.",
      "B": "A aceitação ou adesão à proposta de abstinência relaciona-se ao estágio motivacional e ao manejo terapêutico, não constituindo critério diagnóstico do DSM-5.",
      "D": "Os critérios do DSM-5 aplicam-se de forma padronizada a diferentes classes de substâncias psicoativas, independentemente de seu estatuto lícito ou ilícito."
    }
  },
  {
    "id": "q-enamed-2025-070",
    "code": "Q-ENAMED25-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Investigação de Surtos e Epidemias",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-investigacao-de-surtos-e-epidemias",
    "tags": [
      "escabiose",
      "investigacao-de-surtos",
      "vigilancia-epidemiologica",
      "saude-prisional"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Agentes penitenciários de uma unidade prisional informaram à equipe de saúde sobre o aumento de queixas de prurido intenso e lesões cutâneas entre as pessoas privadas de liberdade. Cada cela, prevista para 35 pessoas, está com lotação de 75.\n\nAs ações prioritárias no manejo adequado dessa situação são",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar o isolamento imediato dos casos sintomáticos, iniciar tratamento individual conforme avaliação clínica, recomendar higienização de colchões e ampliar o fornecimento de sabão e escovas pessoais.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "implementar bloqueio coletivo com tratamento simultâneo, notificar o surto ao serviço de vigilância em saúde, reorganizar fluxos com a administração prisional e planejar medidas educativas e estruturais.",
        "explanation": "A alternativa **B** está correta. Diante de **surto de escabiose em ambiente fechado e superlotado** (cela com 75 pessoas em espaço para 35), o tratamento apenas dos sintomáticos falha porque contactantes assintomáticos (período de incubação de 2–6 semanas) mantêm a cadeia de transmissão. Segundo o Guia de Vigilância em Saúde (Ministério da Saúde) e a PNAISP, a conduta prioritária envolve **bloqueio coletivo com tratamento simultâneo** de todos os contactantes da cela/ala (ivermectina oral ou permetrina tópica, além de higienização de roupas/colchões), **notificação do surto** à Vigilância Epidemiológica, articulação intersetorial com a administração prisional e ações educativas/estruturais.\n- **A e C) Incorretas:** Tratar apenas casos sintomáticos/confirmados sem bloqueio coletivo de contactantes em ambiente superlotado perpetua o surto.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "preferir o tratamento tópico dos casos diagnosticados, com prescrição médica individualizada, e restringir o fornecimento de medicação aos casos confirmados, evitando exposição a medicamentos em massa.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "reunir-se com a direção para discutir a viabilidade de transferência dos casos graves, focando a atuação em medidas educativas com folhetos informativos sobre problemas de pele mais frequentes.",
        "explanation": "Incorreta: Folhetos informativos e transferência de casos não interrompem a transmissão ativa na unidade.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Diante de **surto de escabiose em ambiente fechado e superlotado** (cela com 75 pessoas em espaço para 35), o tratamento apenas dos sintomáticos falha porque contactantes assintomáticos (período de incubação de 2–6 semanas) mantêm a cadeia de transmissão. Segundo o Guia de Vigilância em Saúde (Ministério da Saúde) e a PNAISP, a conduta prioritária envolve **bloqueio coletivo com tratamento simultâneo** de todos os contactantes da cela/ala (ivermectina oral ou permetrina tópica, além de higienização de roupas/colchões), **notificação do surto** à Vigilância Epidemiológica, articulação intersetorial com a administração prisional e ações educativas/estruturais.\n- **A e C) Incorretas:** Tratar apenas casos sintomáticos/confirmados sem bloqueio coletivo de contactantes em ambiente superlotado perpetua o surto.\n- **D) Incorreta:** Folhetos informativos e transferência de casos não interrompem a transmissão ativa na unidade.",
    "perolaClinica": "Diante de **surto de escabiose em ambiente fechado e superlotado** (cela com 75 pessoas em espaço para 35), o tratamento apenas dos sintomáticos falha porque contactantes assintomáticos (período de incubação de 2–6 semanas) mantêm a cadeia de transmissão.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo coletivo e vigilância epidemiológica de surto de escabiose em sistema prisional superlotado.",
      "raciocinioChave": "Em instituições fechadas com superlotação (75 pessoas em cela para 35), o controle do surto de escabiose requer bloqueio coletivo com tratamento simultâneo de sintomáticos e contactantes assintomáticos, notificação à vigilância e medidas estruturais/educativas. Isso interrompe a cadeia de transmissão durante o período de incubação de 2 a 6 semanas.",
      "armadilhaBanca": "Restringir o tratamento aos sintomáticos em ambiente superlotado, permitindo que contactantes em período de incubação perpetuem o surto."
    },
    "mapaDistratores": {
      "A": "Tratar apenas casos sintomáticos e isolá-los não controla o surto em celas superlotadas porque indivíduos assintomáticos já infectados continuam transmitindo o ácaro.",
      "C": "Restringir a medicação aos casos confirmados favorece a reinfestação contínua pelos contactantes expostos e impede a erradicação do surto na unidade prisional.",
      "D": "Transferir casos graves e distribuir folhetos educativos são medidas insuficientes e podem até disseminar o surto para outras alas ou unidades sem interromper a transmissão local."
    }
  },
  {
    "id": "q-enamed-2025-071",
    "code": "Q-ENAMED25-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos de Ansiedade, TOC e TEPT",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-de-ansiedade-toc-e-tept",
    "tags": [
      "transtorno-obsessivo-compulsivo",
      "obsessao",
      "pensamento-intrusivo",
      "psiquiatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 28 anos, solteiro e residindo com os pais, comparece ao Centro de Atenção Psicossocial (CAPs), com visível constrangimento ao longo da consulta. Apesar de sua resistência inicial, relata que tem pensamentos recorrentes e indesejados, os quais invadem sua cabeça, tendo como temática a sua mãe sendo vítima de grande violência. Enfatiza sua angústia com esses pensamentos, que já duram mais de 6 meses, provocando significativo prejuízo em sua vida pessoal e profissional. Afirma ter o entendimento de que não há fundamento nessas ideias e que não faz sentido sofrer com isso.\n\nA denominação para a descrição clínica apresentada é",
    "alternativas": [
      {
        "letter": "A",
        "text": "delírio.",
        "explanation": "Incorreta: Delírio é uma crença falsa e irredutível com perda do juízo de realidade (egossintônica, sem crítica).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "obsessão.",
        "explanation": "A alternativa **B** está correta. Pensamentos, impulsos ou imagens **recorrentes, intrusivos e indesejados** (egodistônicos), que causam acentuada ansiedade/angústia e nos quais o paciente **preserva a crítica/juízo de realidade** (reconhece que são produto de sua própria mente e sem fundamento), definem **obsessão** (componente cognitivo do TOC, segundo Dalgalarrondo e DSM-5).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "hipertimia.",
        "explanation": "Incorreta: Hipertimia refere-se à elevação patológica do humor (típica de mania/hipomania).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "compulsão.",
        "explanation": "Incorreta: Compulsão corresponde a comportamentos repetitivos ou atos mentais realizados em resposta à obsessão para aliviar a ansiedade.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Pensamentos, impulsos ou imagens **recorrentes, intrusivos e indesejados** (egodistônicos), que causam acentuada ansiedade/angústia e nos quais o paciente **preserva a crítica/juízo de realidade** (reconhece que são produto de sua própria mente e sem fundamento), definem **obsessão** (componente cognitivo do TOC, segundo Dalgalarrondo e DSM-5).\n- **A) Incorreta:** Delírio é uma crença falsa e irredutível com perda do juízo de realidade (egossintônica, sem crítica).\n- **C) Incorreta:** Hipertimia refere-se à elevação patológica do humor (típica de mania/hipomania).\n- **D) Incorreta:** Compulsão corresponde a comportamentos repetitivos ou atos mentais realizados em resposta à obsessão para aliviar a ansiedade.",
    "perolaClinica": "Pensamentos, impulsos ou imagens **recorrentes, intrusivos e indesejados** (egodistônicos), que causam acentuada ansiedade/angústia e nos quais o paciente **preserva a crítica/juízo de realidade** (reconhece que são produto de sua própria mente e sem fundamento), definem **obsessão** (componente cognitivo do TOC, segundo Dalgalarrondo e DSM-5).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diferenciação psicopatológica entre obsessão, compulsão, delírio e alteração de humor no TOC.",
      "raciocinioChave": "O paciente descreve pensamentos recorrentes, intrusivos e angustiantes de conteúdo violento que ele reconhece como sem fundamento e próprios de sua mente (egodistonia com crítica preservada). Essa definição psicopatológica clássica corresponde exatamente à obsessão.",
      "armadilhaBanca": "Confundir obsessão (pensamento intrusivo egodistônico com crítica preservada) com delírio (juízo alterado) ou compulsão (ato motor/mental de alívio)."
    },
    "mapaDistratores": {
      "A": "Delírio é uma crença falsa, irredutível à argumentação lógica e acompanhada de perda do juízo de realidade, ao contrário do paciente que mantém crítica preservada.",
      "C": "Hipertimia refere-se à elevação patológica do humor observada em episódios maníacos ou hipomaníacos, sem relação com pensamentos intrusivos angustiantes.",
      "D": "Compulsão corresponde a comportamentos repetitivos ou atos mentais executados em resposta à obsessão para tentar neutralizar a ansiedade, e não ao pensamento intrusivo em si."
    }
  },
  {
    "id": "q-enamed-2025-072",
    "code": "Q-ENAMED25-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Síndrome Disabsortiva e Doença Celíaca",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-sindrome-disabsortiva-e-doenca-celiaca",
    "tags": [
      "supercrescimento-bacteriano",
      "sibo",
      "rifaximina",
      "sindrome-disabsortiva"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 35 anos, índice de massa corporal de 15 kg/m², é internado devido à diarreia líquida, com produtos patológicos, acompanhada de flatulência e desconforto abdominal há 4 semanas. Apresentou emagrecimento de cerca de 10 kg em 1 mês. Foram solicitados exames com endoscopia digestiva alta e baixa, sem alterações macroscópicas. Estudos histopatológicos de estômago, intestino delgado e cólon normais. Teste respiratório com lactulose positivo.\n\nO plano terapêutico adequado para esse paciente será",
    "alternativas": [
      {
        "letter": "A",
        "text": "neomicina e rifaximina.",
        "explanation": "A alternativa **A** está correta. Diarreia crônica disabsortiva com perda ponderal acentuada, endoscopia/colonoscopia e biópsias intestinais normais e **teste respiratório com lactulose positivo** estabelecem o diagnóstico de **supercrescimento bacteriano do intestino delgado (SIBO)**. Segundo as diretrizes da ACG (American College of Gastroenterology), o tratamento baseia-se em antibioticoterapia direcionada à flora entérica, com destaque para **rifaximina** (e associação com **neomicina** quando há produção associada de metano / SIBO metanogênico).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "loperamida e escopolamina.",
        "explanation": "Incorreta: Antidiarreicos e antiespasmódicos apenas mascaram sintomas e não erradicam o supercrescimento bacteriano (podendo até piorar a estase).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "dieta sem glúten e sem lactose.",
        "explanation": "Incorreta: Doença celíaca foi afastada pela histopatologia duodenal normal.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "probióticos e inibidores da bomba de prótons.",
        "explanation": "Incorreta: Inibidores da bomba de prótons (IBPs) são inclusive fator de risco para SIBO por reduzirem a barreira ácida gástrica.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Diarreia crônica disabsortiva com perda ponderal acentuada, endoscopia/colonoscopia e biópsias intestinais normais e **teste respiratório com lactulose positivo** estabelecem o diagnóstico de **supercrescimento bacteriano do intestino delgado (SIBO)**. Segundo as diretrizes da ACG (American College of Gastroenterology), o tratamento baseia-se em antibioticoterapia direcionada à flora entérica, com destaque para **rifaximina** (e associação com **neomicina** quando há produção associada de metano / SIBO metanogênico).\n- **B) Incorreta:** Antidiarreicos e antiespasmódicos apenas mascaram sintomas e não erradicam o supercrescimento bacteriano (podendo até piorar a estase).\n- **C) Incorreta:** Doença celíaca foi afastada pela histopatologia duodenal normal.\n- **D) Incorreta:** Inibidores da bomba de prótons (IBPs) são inclusive fator de risco para SIBO por reduzirem a barreira ácida gástrica.",
    "perolaClinica": "Diarreia crônica disabsortiva com perda ponderal acentuada, endoscopia/colonoscopia e biópsias intestinais normais e **teste respiratório com lactulose positivo** estabelecem o diagnóstico de **supercrescimento bacteriano do intestino delgado (SIBO)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico e antibioticoterapia do supercrescimento bacteriano do intestino delgado (SIBO).",
      "raciocinioChave": "Diarreia crônica disabsortiva com emagrecimento importante, endoscopias e biópsias normais e teste respiratório com lactulose positivo confirmam supercrescimento bacteriano do intestino delgado (SIBO). O tratamento definitivo visa erradicar a flora excedente com antibióticos de ação luminal, como rifaximina e neomicina.",
      "armadilhaBanca": "Indicar sintomáticos antidiarreicos, dieta sem glúten ou IBPs sem notar a combinação de histologia normal com teste da lactulose positivo."
    },
    "mapaDistratores": {
      "B": "Antidiarreicos e antiespasmódicos apenas reduzem a motilidade e mascaram os sintomas, podendo agravar a estase intestinal e piorar o supercrescimento bacteriano.",
      "C": "A doença celíaca foi excluída pela histopatologia duodenal normal, não havendo indicação de dieta isenta de glúten ou lactose como terapia principal da SIBO.",
      "D": "Os inibidores da bomba de prótons reduzem a barreira ácida gástrica e atuam como fator predisponente para o desenvolvimento e manutenção da SIBO."
    }
  },
  {
    "id": "q-enamed-2025-073",
    "code": "Q-ENAMED25-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Convulsão Febril e Emergências Neurológicas",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-convulsao-febril-e-emergencias-neurologicas",
    "tags": [
      "crise-febril-simples",
      "convulsao-febril",
      "puericultura",
      "conduta-expectante"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 2 anos encaminhada ao matriciamento de pediatria, com história de ter apresentado há 7 dias uma crise tônico-clônica generalizada em vigência de temperatura axilar de 39,3 °C, duração de 2 minutos, sem recorrência em 24 horas. Naquela ocasião foi realizado exame físico e neurológico, compatível com infecção viral de vias aéreas superiores, sem outras alterações.\n\nA conduta adequada nesse caso é",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar eletroencefalograma.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "indicar profilaxia com barbitúricos.",
        "explanation": "Incorreta: Profilaxia contínua com fenobarbital ou ácido valproico é contraindicada na crise febril simples porque os efeitos adversos superam amplamente o risco benigno de recorrência.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "tranquilizar e orientar puericultura de rotina.",
        "explanation": "A alternativa **C** está correta. Criança entre 6 meses e 5 anos apresentando **crise tônico-clônica generalizada**, com **duração < 15 minutos** (2 min), **episódio único em 24 horas**, associada à febre (39,3 °C) de origem extracraniana (IVAS) e exame neurológico normal após a crise preenche todos os critérios de **crise febril simples (benigna)**. Conforme a Sociedade Brasileira de Pediatria (SBP) e a AAP, não há necessidade de exames complementares nem de profilaxia anticonvulsivante contínua — deve-se **tranquilizar os pais quanto ao bom prognóstico e manter puericultura de rotina**.\n- **A e D) Incorretas:** EEG, exames laboratoriais e neuroimagem não são indicados na crise febril simples típica sem déficits neurológicos.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "solicitar exames laboratoriais e de imagem.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Criança entre 6 meses e 5 anos apresentando **crise tônico-clônica generalizada**, com **duração < 15 minutos** (2 min), **episódio único em 24 horas**, associada à febre (39,3 °C) de origem extracraniana (IVAS) e exame neurológico normal após a crise preenche todos os critérios de **crise febril simples (benigna)**. Conforme a Sociedade Brasileira de Pediatria (SBP) e a AAP, não há necessidade de exames complementares nem de profilaxia anticonvulsivante contínua — deve-se **tranquilizar os pais quanto ao bom prognóstico e manter puericultura de rotina**.\n- **A e D) Incorretas:** EEG, exames laboratoriais e neuroimagem não são indicados na crise febril simples típica sem déficits neurológicos.\n- **B) Incorreta:** Profilaxia contínua com fenobarbital ou ácido valproico é contraindicada na crise febril simples porque os efeitos adversos superam amplamente o risco benigno de recorrência.",
    "perolaClinica": "Criança entre 6 meses e 5 anos apresentando **crise tônico-clônica generalizada**, com **duração < 15 minutos** (2 min), **episódio único em 24 horas**, associada à febre (39,3 °C) de origem extracraniana (IVAS) e exame neurológico normal após a crise preenche todos os critérios de **crise febril simples (benigna)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Critérios diagnósticos e conduta conservadora na crise febril simples em pediatria.",
      "raciocinioChave": "Criança de 2 anos com crise tônico-clônica generalizada única em 24 horas, duração de 2 minutos (< 15 min), associada à febre de foco extracraniano (IVAS) e exame neurológico normal preenche critérios de crise febril simples. A conduta é tranquilizar a família, orientar sinais de alarme e manter puericultura de rotina, sem exames ou profilaxia.",
      "armadilhaBanca": "Solicitar EEG, neuroimagem ou iniciar anticonvulsivante profilático diante de crise febril simples já resolvida e sem sinais de alarme."
    },
    "mapaDistratores": {
      "A": "O eletroencefalograma não é indicado após crise febril simples porque não prediz recorrência nem risco futuro de epilepsia nessa população.",
      "B": "A profilaxia contínua com barbitúricos (fenobarbital) é contraindicada na crise febril simples devido aos efeitos adversos cognitivos e comportamentais superarem o risco benigno do quadro.",
      "D": "Exames laboratoriais adicionais e neuroimagem são desnecessários quando a causa da febre é clinicamente evidente e o exame neurológico pós-ictal está normal."
    }
  },
  {
    "id": "q-enamed-2025-074",
    "code": "Q-ENAMED25-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Otorrinolaringologia e Cabeça e Pescoço",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-otorrinolaringologia-e-cabeca-e-pescoco",
    "tags": [
      "tireoidectomia",
      "nervo-laringeo-recorrente",
      "rouquidao-pos-operatoria",
      "complicacao-cirurgica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 47 anos, sexo feminino, atendida no ambulatório de cirurgia geral. A paciente havia sido submetida à cirurgia de tireoidectomia total há 60 dias, devido a um carcinoma folicular de tireoide, o qual estava restrito à glândula. No pós-operatório imediato, a paciente apresentou rouquidão, que não melhorou durante o acompanhamento ambulatorial nesses 60 dias.\n\nCom base no quadro clínico apresentado, qual foi o nervo lesionado durante a cirurgia?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Laríngeo recorrente.",
        "explanation": "A alternativa **A** está correta. A rouquidão (disfonia) persistente no pós-operatório de tireoidectomia total decorre classicamente de lesão do **nervo laríngeo recorrente** (ramo do nervo vago que inerva todos os músculos intrínsecos da laringe, exceto o cricotireoideo), causando paresia/paralisia de prega vocal unilateral (Sabiston).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Glossofaríngeo.",
        "explanation": "Incorreta: O nervo glossofaríngeo (IX par) atua na sensibilidade/gustação do terço posterior da língua e faringe, sem relação anatômica com a tireoide.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Hipoglosso.",
        "explanation": "Incorreta: O nervo hipoglosso (XII par) inerva a musculatura motora da língua (desvio da língua ao protrair).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Vago.",
        "explanation": "Incorreta: O tronco do nervo vago (X par) cursa na bainha carotídea lateralmente; a estrutura em íntimo contato com a face posterior da tireoide e ligada diretamente à disfonia pós-tireoidectomia é seu ramo, o **laríngeo recorrente**.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **A** está correta. A rouquidão (disfonia) persistente no pós-operatório de tireoidectomia total decorre classicamente de lesão do **nervo laríngeo recorrente** (ramo do nervo vago que inerva todos os músculos intrínsecos da laringe, exceto o cricotireoideo), causando paresia/paralisia de prega vocal unilateral (Sabiston).\n- **B) Incorreta:** O nervo glossofaríngeo (IX par) atua na sensibilidade/gustação do terço posterior da língua e faringe, sem relação anatômica com a tireoide.\n- **C) Incorreta:** O nervo hipoglosso (XII par) inerva a musculatura motora da língua (desvio da língua ao protrair).\n- **D) Incorreta:** O tronco do nervo vago (X par) cursa na bainha carotídea lateralmente; a estrutura em íntimo contato com a face posterior da tireoide e ligada diretamente à disfonia pós-tireoidectomia é seu ramo, o **laríngeo recorrente**.",
    "perolaClinica": "A rouquidão (disfonia) persistente no pós-operatório de tireoidectomia total decorre classicamente de lesão do **nervo laríngeo recorrente** (ramo do nervo vago que inerva todos os músculos intrínsecos da laringe, exceto o cricotireoideo), causando paresia/paralisia de prega vocal unilateral (Sabiston).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Lesão do nervo laríngeo recorrente como causa de disfonia pós-tireoidectomia total.",
      "raciocinioChave": "A disfonia persistente após tireoidectomia total resulta classicamente da lesão do nervo laríngeo recorrente, que cursa em íntima relação com a face posterior da tireoide. Esse nervo inerva quase toda a musculatura intrínseca da laringe, causando paralisia de prega vocal quando lesionado.",
      "armadilhaBanca": "Assinalar o tronco do nervo vago em vez de seu ramo específico (laríngeo recorrente) diretamente lesado na loja tireoidiana."
    },
    "mapaDistratores": {
      "B": "O nervo glossofaríngeo (IX par) inerva a sensibilidade e gustação do terço posterior da língua e faringe, não tendo relação anatômica com o campo operatório da tireoide.",
      "C": "O nervo hipoglosso (XII par) é responsável pela motricidade da língua e cursa em plano superior na região submandibular, causando desvio lingual quando lesado, e não rouquidão.",
      "D": "O tronco do nervo vago (X par) situa-se lateralmente na bainha carotídea; a disfonia isolada pós-tireoidectomia decorre tipicamente da lesão do seu ramo laríngeo recorrente."
    }
  },
  {
    "id": "q-enamed-2025-075",
    "code": "Q-ENAMED25-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Planejamento Familiar e Anticoncepção",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-planejamento-familiar-e-anticoncepcao",
    "tags": [
      "anticoncepcao",
      "diu-com-levonorgestrel",
      "obesidade-morbida",
      "cirurgia-bariatrica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 29 anos, nuligesta, ciclos menstruais com intervalos de 20 a 65 dias, duração de 4 a 10 dias, intensidade moderada. Apresenta índice de massa corporal de 41,5 kg/m² e se submeterá à cirurgia bariátrica em alguns meses. Necessita de orientação para contracepção.\n\nCom base nessas informações, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Para contracepção efetiva e proteção endometrial, está indicado o endoceptivo antes da operação.",
        "explanation": "A alternativa **A** está correta. Paciente com obesidade grau III (IMC 41,5 kg/m²) em pré-operatório de cirurgia bariátrica (na qual a gravidez é contraindicada nos primeiros 12–18 meses pós-operatórios) e com ciclos irregulares sugestivos de anovulação crônica (risco de hiperplasia endometrial por estímulo estrogênico sem oposição) beneficia-se fortemente do **endoceptivo (SIU/DIU de levonorgestrel)** antes da cirurgia: garante altíssima eficácia contraceptiva independente de absorção oral/IMC e promove proteção endometrial local (FEBRASGO / OMS).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Devido ao risco de apresentar tromboembolismo, está contraindicado o uso de métodos hormonais.",
        "explanation": "Incorreta: Apenas métodos com **estrogênio** aumentam risco tromboembólico; progestagênios isolados (como DIU de levonorgestrel ou implante subdérmico) são seguros (Categoria 1–2 da OMS).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Apresenta quadro de anovulação crônica, portanto deve ser orientada a usar preservativo masculino.",
        "explanation": "Incorreta: Preservativo masculino isolado tem alta taxa de falha no uso típico, sendo insuficiente para paciente com contraindicação formal à gestação no pós-operatório de bariátrica.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Está contraindica gravidez na fase de perda de peso, logo ela pode usar o adesivo anticoncepcional.",
        "explanation": "Incorreta: O adesivo transdérmico contém estrogênio (risco aumentado de TEV na obesidade grau III) e tem eficácia reduzida em mulheres com peso > 90 kg.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Paciente com obesidade grau III (IMC 41,5 kg/m²) em pré-operatório de cirurgia bariátrica (na qual a gravidez é contraindicada nos primeiros 12–18 meses pós-operatórios) e com ciclos irregulares sugestivos de anovulação crônica (risco de hiperplasia endometrial por estímulo estrogênico sem oposição) beneficia-se fortemente do **endoceptivo (SIU/DIU de levonorgestrel)** antes da cirurgia: garante altíssima eficácia contraceptiva independente de absorção oral/IMC e promove proteção endometrial local (FEBRASGO / OMS).\n- **B) Incorreta:** Apenas métodos com **estrogênio** aumentam risco tromboembólico; progestagênios isolados (como DIU de levonorgestrel ou implante subdérmico) são seguros (Categoria 1–2 da OMS).\n- **C) Incorreta:** Preservativo masculino isolado tem alta taxa de falha no uso típico, sendo insuficiente para paciente com contraindicação formal à gestação no pós-operatório de bariátrica.\n- **D) Incorreta:** O adesivo transdérmico contém estrogênio (risco aumentado de TEV na obesidade grau III) e tem eficácia reduzida em mulheres com peso > 90 kg.",
    "perolaClinica": "Paciente com obesidade grau III (IMC 41,5 kg/m²) em pré-operatório de cirurgia bariátrica (na qual a gravidez é contraindicada nos primeiros 12–18 meses pós-operatórios) e com ciclos irregulares sugestivos de anovulação crônica (risco de hiperplasia endometrial por estímulo estrogênico sem oposição) beneficia-se fortemente do **endoceptivo (SIU/DIU de levonorgestrel)** antes da cirurgia: garante altíssima eficácia contraceptiva independente de absorção oral/IMC e promove proteção endometrial local (FEBRASGO / OMS).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Escolha contraceptiva segura e eficaz com proteção endometrial no pré-operatório de cirurgia bariátrica.",
      "raciocinioChave": "Paciente com obesidade grau III, anovulação crônica (risco de hiperplasia endometrial) e bariátrica programada necessita de contracepção altamente eficaz nos primeiros 12 a 18 meses pós-operatórios e sem absorção oral prejudicada. O endoceptivo (SIU de levonorgestrel) oferece altíssima eficácia contraceptiva, proteção endometrial e não contém estrogênio.",
      "armadilhaBanca": "Contraindicar qualquer método hormonal na obesidade grau III ou indicar adesivo/preservativo em paciente com contraindicação de gestação pós-bariátrica."
    },
    "mapaDistratores": {
      "B": "Apenas métodos contendo estrogênio aumentam o risco tromboembólico venoso na obesidade; progestagênios isolados, especialmente o SIU de levonorgestrel, são seguros.",
      "C": "O preservativo masculino isolado apresenta elevada taxa de falha no uso típico e não oferece proteção endometrial contra a anovulação crônica.",
      "D": "O adesivo anticoncepcional contém estrogênio, elevando o risco de tromboembolismo venoso em paciente com IMC 41,5 kg/m², além de ter eficácia reduzida acima de 90 kg."
    }
  },
  {
    "id": "q-enamed-2025-077",
    "code": "Q-ENAMED25-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": [
      "competencia-cultural",
      "saude-indigena",
      "metodo-clinico-centrado-na-pessoa",
      "atencao-primaria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma equipe de saúde da família realiza atendimento itinerante a comunidades ribeirinhas e aldeias indígenas na Região Amazônica. Em visita, uma médica recém-chegada observa que uma mulher ribeirinha evita contato visual durante a consulta e responde às perguntas apenas com monossílabos. Em outra situação, um indígena da etnia Tikuna não aceita ser atendido sozinho e insiste na presença de um pajé da comunidade.\n\nA abordagem adequada que a equipe deve adotar é",
    "alternativas": [
      {
        "letter": "A",
        "text": "investir na padronização de rotinas clínicas e na capacitação da equipe para comunicação técnica propositiva e objetiva.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "promover espaços formativos para a equipe assistencial, reconhecendo saberes e práticas das populações atendidas.",
        "explanation": "A alternativa **B** está correta. O atendimento a populações tradicionais (ribeirinhas e indígenas) exige **competência cultural**, respeito à diversidade sociocultural e diálogo intercultural com os sistemas tradicionais de cura (como a presença do pajé), conforme preconizado pela Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI) e pela Política Nacional de Saúde Integral das Populações do Campo, da Floresta e das Águas. Promover espaços formativos reconhecendo saberes e práticas locais fortalece o vínculo e a resolutividade do cuidado.\n- **A e D) Incorretas:** Padronizações rígidas e uniformes ignoram as singularidades culturais e linguísticas, gerando barreiras de acesso e quebra de vínculo.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "reforçar a autonomia profissional da médica, mantendo as condutas clínicas baseadas em evidências científicas.",
        "explanation": "Incorreta: A Medicina Baseada em Evidências integra a melhor evidência científica aos valores e preferências culturais do paciente, não devendo ser usada de forma impositiva.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "estabelecer rotinas padronizadas uniformes de atendimento para ribeirinhos e indígenas.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. O atendimento a populações tradicionais (ribeirinhas e indígenas) exige **competência cultural**, respeito à diversidade sociocultural e diálogo intercultural com os sistemas tradicionais de cura (como a presença do pajé), conforme preconizado pela Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI) e pela Política Nacional de Saúde Integral das Populações do Campo, da Floresta e das Águas. Promover espaços formativos reconhecendo saberes e práticas locais fortalece o vínculo e a resolutividade do cuidado.\n- **A e D) Incorretas:** Padronizações rígidas e uniformes ignoram as singularidades culturais e linguísticas, gerando barreiras de acesso e quebra de vínculo.\n- **C) Incorreta:** A Medicina Baseada em Evidências integra a melhor evidência científica aos valores e preferências culturais do paciente, não devendo ser usada de forma impositiva.",
    "perolaClinica": "O atendimento a populações tradicionais (ribeirinhas e indígenas) exige **competência cultural**, respeito à diversidade sociocultural e diálogo intercultural com os sistemas tradicionais de cura (como a presença do pajé), conforme preconizado pela Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI) e pela Política Nacional de Saúde Integral das Populações do Campo, da Floresta e das Águas.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Competência cultural e diálogo intercultural na atenção à saúde de povos indígenas e ribeirinhos.",
      "raciocinioChave": "O atendimento a populações ribeirinhas e indígenas demanda competência cultural, escuta qualificada e articulação entre o saber biomédico e as práticas tradicionais (como a presença do pajé). Promover espaços formativos que reconheçam os saberes locais fortalece o vínculo e a integralidade do cuidado conforme a PNASPI.",
      "armadilhaBanca": "Priorizar a padronização rígida de rotinas técnicas ou a autonomia médica impositiva em detrimento da competência cultural."
    },
    "mapaDistratores": {
      "A": "Padronizar rotinas clínicas com comunicação estritamente técnica desconsidera códigos culturais próprios e amplia barreiras de acesso e adesão dessas comunidades.",
      "C": "A Medicina Baseada em Evidências exige integrar a evidência científica aos valores e crenças culturais do paciente, jamais impondo condutas que desrespeitem sua cosmologia.",
      "D": "Estabelecer rotinas uniformes ignora a diversidade sociocultural específica existente entre diferentes etnias indígenas e comunidades ribeirinhas."
    }
  },
  {
    "id": "q-enamed-2025-078",
    "code": "Q-ENAMED25-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": [
      "saude-lgbtqiapn",
      "homem-trans",
      "atencao-primaria-a-saude",
      "afirmacao-de-genero"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 21 anos comparece à Unidade Básica de Saúde (UBS) para uma consulta agendada. Durante o atendimento, diz que se reconhece como um homem trans e que está em processo de afirmação de gênero. Relata que, nos últimos meses, tem buscado apoio em grupos de pessoas trans, começou a usar um *binder* (faixa de compressão torácica) e que cogita iniciar terapia hormonal no futuro. Refere que não apresenta sofrimento psíquico intenso relacionado à sua identidade de gênero, mas sente que precisa de informações adequadas sobre os próximos passos e sobre cuidados com a saúde. Não apresenta sintomas depressivos, ansiosos ou psicóticos.\n\nQual é a conduta mais adequada a ser adotada?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar avaliação psiquiátrica para diagnóstico de disforia de gênero antes do acompanhamento na UBS.",
        "explanation": "Incorreta: Não é obrigatório diagnóstico psiquiátrico prévio de disforia de gênero para acolhimento e acompanhamento na UBS.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Iniciar terapia hormonal na UBS, conforme estabelecido no processo transexualizador do SUS, e marcar retorno em 8 semanas.",
        "explanation": "Incorreta: O paciente relatou apenas que *cogita* iniciar terapia hormonal no futuro (não pediu início imediato hoje), além de a hormonização no Processo Transexualizador seguir fluxos específicos de habilitação/matriciamento na rede.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Encaminhar paciente para serviço especializado e informar que o seguimento relacionado à transição de gênero deve ser feito com especialista.",
        "explanation": "Incorreta: O cuidado integral não deve ser terceirizado exclusivamente ao especialista, mantendo-se a longitudinalidade na APS.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Esclarecer que tal identidade de gênero não é transtorno mental, oferecer acompanhamento contínuo na UBS e orientar sobre cuidados gerais de saúde.",
        "explanation": "A alternativa **D** está correta. De acordo com a CID-11 (que retirou a incongruência de gênero do capítulo de transtornos mentais) e a Política Nacional de Saúde Integral LGBT (Ministério da Saúde), a identidade trans **não é transtorno mental**. A UBS é a porta de entrada e ordenadora do cuidado, devendo oferecer acolhimento, vínculo, acompanhamento longitudinal e orientações gerais de saúde (incluindo uso seguro de *binder*, rastreamentos e informações sobre a rede do Processo Transexualizador quando desejar hormonização).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. De acordo com a CID-11 (que retirou a incongruência de gênero do capítulo de transtornos mentais) e a Política Nacional de Saúde Integral LGBT (Ministério da Saúde), a identidade trans **não é transtorno mental**. A UBS é a porta de entrada e ordenadora do cuidado, devendo oferecer acolhimento, vínculo, acompanhamento longitudinal e orientações gerais de saúde (incluindo uso seguro de *binder*, rastreamentos e informações sobre a rede do Processo Transexualizador quando desejar hormonização).\n- **A) Incorreta:** Não é obrigatório diagnóstico psiquiátrico prévio de disforia de gênero para acolhimento e acompanhamento na UBS.\n- **B) Incorreta:** O paciente relatou apenas que *cogita* iniciar terapia hormonal no futuro (não pediu início imediato hoje), além de a hormonização no Processo Transexualizador seguir fluxos específicos de habilitação/matriciamento na rede.\n- **C) Incorreta:** O cuidado integral não deve ser terceirizado exclusivamente ao especialista, mantendo-se a longitudinalidade na APS.",
    "perolaClinica": "De acordo com a CID-11 (que retirou a incongruência de gênero do capítulo de transtornos mentais) e a Política Nacional de Saúde Integral LGBT (Ministério da Saúde), a identidade trans **não é transtorno mental**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Acolhimento despatologizante e cuidado longitudinal de pessoas trans na Atenção Primária à Saúde.",
      "raciocinioChave": "Conforme a CID-11 e a Política Nacional de Saúde Integral LGBT, a identidade trans não configura transtorno mental e o paciente não refere sofrimento psíquico nem demanda imediata de hormonização. A UBS deve acolher, despatologizar, orientar cuidados gerais (como uso seguro do binder) e garantir acompanhamento contínuo.",
      "armadilhaBanca": "Exigir laudo psiquiátrico prévio, iniciar hormonização não solicitada ou terceirizar integralmente o cuidado para fora da APS."
    },
    "mapaDistratores": {
      "A": "Não se exige avaliação ou diagnóstico psiquiátrico de disforia de gênero para acolher e acompanhar pessoas trans na UBS, pois a identidade trans não é patologia.",
      "B": "O paciente relatou apenas cogitar terapia hormonal no futuro, não havendo solicitação imediata nem seguimento exclusivo restrito a retorno em 8 semanas sem orientações integrais.",
      "C": "Encaminhar para especialista rompendo o seguimento na UBS fere o princípio da longitudinalidade e da APS como coordenadora do cuidado."
    }
  },
  {
    "id": "q-enamed-2025-079",
    "code": "Q-ENAMED25-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Sepse e Choque Séptico",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-sepse-e-choque-septico",
    "tags": [
      "sepse",
      "pacote-de-primeira-hora",
      "antibioticoterapia-precoce",
      "pielonefrite"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 62 anos, com histórico de infecções do trato urinário de repetição, dá entrada em Unidade de Pronto Atendimento (UPA) com quadro de febre alta e calafrios. A paciente é portadora de *diabetes mellitus* tipo 2, em tratamento regular com metformina e glicazida. À admissão apresenta-se com pressão arterial de 110 x 70 mmHg, frequência cardíaca de 106 bpm, frequência respiratória de 25 irpm e temperatura axilar de 38 °C. Os exames laboratoriais indicam hemoglobina de 12,3 g/dL e hematócrito de 36%; leucócitos de 14.000/mm³ (valor de referência: 6.000 a 10.000/mm³), com 84% de neutrófilos e 12% de bastonetes; plaquetas de 210.000/mm³.\n\nA conduta para o caso deve ser recomendar",
    "alternativas": [
      {
        "letter": "A",
        "text": "tratamento com antitérmico, hidratação oral vigorosa e observação na unidade hospitalar.",
        "explanation": "Incorreta: Tratar apenas com antitérmico e hidratação oral sem antibiótico imediato em quadro séptico eleva drasticamente a mortalidade.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "tratamento com esquema antibiótico de amplo espectro, ainda na 1ª hora da chegada da paciente.",
        "explanation": "A alternativa **B** está correta. Idosa diabética com histórico de ITU de repetição apresentando febre, calafrios, taquicardia (106 bpm), taquipneia (25 irpm) e leucocitose com desvio à esquerda (12% bastonetes) configura **sepse de provável foco urinário (pielonefrite aguda)**. Conforme o pacote de 1 hora da *Surviving Sepsis Campaign* (ILAS/AMIB), deve-se coletar culturas e iniciar **antibioticoterapia empírica de amplo espectro na primeira hora** do atendimento.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "tratamento com cobertura contra *Candida sp*, por se tratar de infecção urinária de repetição em paciente diabética.",
        "explanation": "Incorreta: Cobertura antifúngica empírica para *Candida* não é rotina inicial na pielonefrite comunitária.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "tratamento com antibiótico de amplo espectro, mantido durante todo o curso de tratamento, mesmo após os resultados das culturas.",
        "explanation": "Incorreta: Após o resultado das culturas e antibiograma, deve-se realizar o **descalonamento** antimicrobiano, e não manter amplo espectro indefinidamente.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Idosa diabética com histórico de ITU de repetição apresentando febre, calafrios, taquicardia (106 bpm), taquipneia (25 irpm) e leucocitose com desvio à esquerda (12% bastonetes) configura **sepse de provável foco urinário (pielonefrite aguda)**. Conforme o pacote de 1 hora da *Surviving Sepsis Campaign* (ILAS/AMIB), deve-se coletar culturas e iniciar **antibioticoterapia empírica de amplo espectro na primeira hora** do atendimento.\n- **A) Incorreta:** Tratar apenas com antitérmico e hidratação oral sem antibiótico imediato em quadro séptico eleva drasticamente a mortalidade.\n- **C) Incorreta:** Cobertura antifúngica empírica para *Candida* não é rotina inicial na pielonefrite comunitária.\n- **D) Incorreta:** Após o resultado das culturas e antibiograma, deve-se realizar o **descalonamento** antimicrobiano, e não manter amplo espectro indefinidamente.",
    "perolaClinica": "Idosa diabética com histórico de ITU de repetição apresentando febre, calafrios, taquicardia (106 bpm), taquipneia (25 irpm) e leucocitose com desvio à esquerda (12% bastonetes) configura **sepse de provável foco urinário (pielonefrite aguda)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Manejo inicial da sepse de foco urinário com antibioticoterapia empírica na primeira hora.",
      "raciocinioChave": "Idosa diabética com ITU prévia, febre, taquicardia (106 bpm), taquipneia (25 irpm) e leucocitose com desvio à esquerda configura sepse de provável foco urinário (pielonefrite). O pacote de 1 hora recomenda coleta de culturas e início imediato de antimicrobiano endovenoso de amplo espectro ainda na primeira hora.",
      "armadilhaBanca": "Adiar antibiótico na suspeita de sepse urinária ou manter amplo espectro fixo sem descalonamento após culturas."
    },
    "mapaDistratores": {
      "A": "Tratar apenas com antitérmico e hidratação oral sem antibiótico imediato em quadro séptico eleva expressivamente o risco de choque séptico e óbito.",
      "C": "A cobertura empírica inicial para Candida não é rotina na pielonefrite comunitária e deixaria descobertos os principais agentes bacterianos gram-negativos.",
      "D": "O esquema de amplo espectro deve ser reavaliado e descalonado conforme os resultados de culturas e antibiograma, não mantido indiscriminadamente até o fim do tratamento."
    }
  },
  {
    "id": "q-enamed-2025-080",
    "code": "Q-ENAMED25-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Reanimação Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-reanimacao-neonatal",
    "tags": [
      "reanimacao-neonatal",
      "hernia-diafragmatica-congenita",
      "intubacao-orotraqueal",
      "sala-de-parto"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascido a termo apresenta, no 1° minuto de vida, quadro de apneia e bradicardia, desvio do *ictus* à direita, abdome escavado e presença de ruídos hidroaéreos à ausculta do hemitórax esquerdo.\n\nNo decorrer do atendimento desse recém-nascido, em sala de parto, os procedimentos adequados a serem realizados são",
    "alternativas": [
      {
        "letter": "A",
        "text": "intubação traqueal e massagem cardíaca externa.",
        "explanation": "A alternativa **A** está correta. Recém-nascido com apneia, bradicardia, **abdome escavado**, desvio do *ictus* para a direita e **ruídos hidroaéreos no hemitórax esquerdo** tem diagnóstico clínico imediato de **hérnia diafragmática congênita (HDC)**. Conforme as Diretrizes de Reanimação Neonatal da SBP, a ventilação com máscara facial/balão é formalmente contraindicada na HDC porque insufla as alças intestinais herniadas no tórax, comprimindo ainda mais os pulmões e o mediastino; deve-se proceder à **intubação traqueal imediata** (além de sondagem gástrica descompressiva) e, se persistir FC < 60 bpm após ventilação efetiva via cânula traqueal, iniciar **massagem cardíaca externa**.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "cateterismo umbilical e drenagem de hemitórax esquerdo.",
        "explanation": "Incorreta: Drenagem torácica é contraindicada (há risco de perfurar alças intestinais herniadas).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "ventilação com óxido nítrico e administração de surfactante.",
        "explanation": "Incorreta: Surfactante e óxido nítrico não são procedimentos iniciais da reanimação em sala de parto na HDC.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "ventilação com balão autoinflável com pressão expiratória final positiva.",
        "explanation": "Incorreta: Ventilação não invasiva com balão/máscara distende o trato gastrointestinal intratorácico, agravando o colapso pulmonar.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **A** está correta. Recém-nascido com apneia, bradicardia, **abdome escavado**, desvio do *ictus* para a direita e **ruídos hidroaéreos no hemitórax esquerdo** tem diagnóstico clínico imediato de **hérnia diafragmática congênita (HDC)**. Conforme as Diretrizes de Reanimação Neonatal da SBP, a ventilação com máscara facial/balão é formalmente contraindicada na HDC porque insufla as alças intestinais herniadas no tórax, comprimindo ainda mais os pulmões e o mediastino; deve-se proceder à **intubação traqueal imediata** (além de sondagem gástrica descompressiva) e, se persistir FC < 60 bpm após ventilação efetiva via cânula traqueal, iniciar **massagem cardíaca externa**.\n- **B) Incorreta:** Drenagem torácica é contraindicada (há risco de perfurar alças intestinais herniadas).\n- **C) Incorreta:** Surfactante e óxido nítrico não são procedimentos iniciais da reanimação em sala de parto na HDC.\n- **D) Incorreta:** Ventilação não invasiva com balão/máscara distende o trato gastrointestinal intratorácico, agravando o colapso pulmonar.",
    "perolaClinica": "Recém-nascido com apneia, bradicardia, **abdome escavado**, desvio do *ictus* para a direita e **ruídos hidroaéreos no hemitórax esquerdo** tem diagnóstico clínico imediato de **hérnia diafragmática congênita (HDC)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Reanimação neonatal em sala de parto na hérnia diafragmática congênita (HDC).",
      "raciocinioChave": "Apneia, bradicardia, abdome escavado, desvio do ictus para a direita e ruídos hidroaéreos no hemitórax esquerdo fecham o diagnóstico de hérnia diafragmática congênita. Nessa condição, contraindica-se ventilação com máscara facial e indica-se intubação traqueal imediata (associada à massagem cardíaca se bradicardia persistente).",
      "armadilhaBanca": "Indicar ventilação com máscara/balão (VPP não invasiva) ou drenagem torácica diante de hérnia diafragmática congênita."
    },
    "mapaDistratores": {
      "B": "A drenagem torácica é contraindicada na hérnia diafragmática congênita pelo risco grave de perfuração das alças intestinais herniadas no hemitórax esquerdo.",
      "C": "Óxido nítrico e surfactante não fazem parte dos passos imediatos de reanimação em sala de parto para garantir via aérea e circulação na HDC.",
      "D": "A ventilação não invasiva com balão e máscara distende com ar as alças intestinais intratorácicas, agravando a compressão pulmonar e o desvio mediastinal."
    }
  },
  {
    "id": "q-enamed-2025-081",
    "code": "Q-ENAMED25-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": [
      "fissura-anal",
      "doencas-orificiais",
      "sangramento-anal",
      "dor-evacuatoria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Adulto jovem, sexo masculino, atendido em Unidade Básica de Saúde (UBS), relata dor e ardor no ânus acompanhados de sangramento vivo em pequena quantidade ao evacuar com esforço e fezes endurecidas. Nega tumoração perianal. Portador de constipação crônica e diagnóstico recente de doença Crohn. Exame geral sem alterações.\n\nQual é o diagnóstico mais provável?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Abcesso perianal.",
        "explanation": "Incorreta: Abscesso perianal cursa com dor contínua, pulsátil, febre e tumoração flogística palpável.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Fístula perianal.",
        "explanation": "Incorreta: Fístula perianal manifesta-se com drenagem crônica de secreção purulenta/serossanguinolenta por orifício externo perianal.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Cisto pilonidal.",
        "explanation": "Incorreta: Cisto pilonidal localiza-se na região sacrococcígea (fenda interglútea), não no canal anal.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Fissura anal.",
        "explanation": "A alternativa **D** está correta. Dor anal intensa/ardor desencadeada pela evacuação de fezes endurecidas, associada a sangramento vermelho-vivo em pequena quantidade (geralmente no papel higiênico) e ausência de tumoração palpável, caracteriza **fissura anal** (comum em constipados crônicos e em portadores de doença de Crohn, quando pode ser atípica/lateral).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **D** está correta. Dor anal intensa/ardor desencadeada pela evacuação de fezes endurecidas, associada a sangramento vermelho-vivo em pequena quantidade (geralmente no papel higiênico) e ausência de tumoração palpável, caracteriza **fissura anal** (comum em constipados crônicos e em portadores de doença de Crohn, quando pode ser atípica/lateral).\n- **A) Incorreta:** Abscesso perianal cursa com dor contínua, pulsátil, febre e tumoração flogística palpável.\n- **B) Incorreta:** Fístula perianal manifesta-se com drenagem crônica de secreção purulenta/serossanguinolenta por orifício externo perianal.\n- **C) Incorreta:** Cisto pilonidal localiza-se na região sacrococcígea (fenda interglútea), não no canal anal.",
    "perolaClinica": "Dor anal intensa/ardor desencadeada pela evacuação de fezes endurecidas, associada a sangramento vermelho-vivo em pequena quantidade (geralmente no papel higiênico) e ausência de tumoração palpável, caracteriza **fissura anal** (comum em constipados crônicos e em portadores de doença de Crohn, quando pode ser atípica/lateral).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial das doenças orificiais baseado na sintomatologia dolorosa e sangramento.",
      "raciocinioChave": "Dor e ardor anal desencadeados pela evacuação de fezes endurecidas, com pequeno sangramento vermelho-vivo e ausência de tumoração perianal, caracterizam fissura anal. A constipação crônica e a doença de Crohn são fatores associados bem estabelecidos para seu surgimento.",
      "armadilhaBanca": "Associar erroneamente doença de Crohn diretamente a abscesso ou fístula quando o quadro clínico é típico de fissura anal."
    },
    "mapaDistratores": {
      "A": "Abscesso perianal manifesta-se com dor contínua e pulsátil independente da evacuação, febre e tumoração hiperemiada e flutuante palpável na região perianal.",
      "B": "Fístula perianal apresenta-se tipicamente com eliminação crônica de secreção purulenta ou serossanguinolenta por um orifício cutâneo externo perianal.",
      "C": "O cisto pilonidal acomete a região sacrococcígea na linha média da fenda interglútea, e não o canal anal com dor evacuatória e sangramento vivo."
    }
  },
  {
    "id": "q-enamed-2025-082",
    "code": "Q-ENAMED25-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Trabalho de Parto Prematuro",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-trabalho-de-parto-prematuro",
    "tags": [
      "colo-curto",
      "parto-prematuro",
      "progesterona-micronizada",
      "prevencao-prematuridade"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente G3P1A1, idade gestacional de 24 semanas, comparece à consulta. Refere que na primeira gestação teve um abortamento com 16 semanas e na segunda, teve trabalho de parto vaginal muito rápido, na idade gestacional de 28 semanas. Na ultrassonografia transvaginal, realizada com 23 semanas desta gestação, detectou-se colo uterino com 1,5 cm de comprimento.\n\nQual é a conduta adequada à situação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar a pesquisa de estreptococo do Grupo B na 28ª semana.",
        "explanation": "Incorreta: O rastreio de *Streptococcus* do Grupo B (swab vaginal/retal) é realizado entre 35 e 37 semanas.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Internar a paciente para receber atosiban intravenoso até 34 semanas.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Prescrever nifedipina 20 mg via oral diariamente à noite até 39 semanas.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Prescrever progesterona micronizada via vaginal 200 mg ao dia até 36 semanas.",
        "explanation": "A alternativa **D** está correta. Gestante com antecedente de parto prematuro espontâneo (28 semanas) e perda gestacional tardia (16 semanas), apresentando **colo curto (< 25 mm)** na ultrassonografia transvaginal de 23 semanas (1,5 cm = 15 mm), tem indicação formal de **progesterona micronizada via vaginal (200 mg/dia)** até cerca de 36 semanas (além de poder ser considerada cerclagem uterina diante de história sugestiva de insuficiência istmocervical + colo < 25 mm antes de 24 semanas, conforme FEBRASGO/ACOG). Entre as opções listadas, a progesterona vaginal é a conduta baseada em evidências.\n- **B e C) Incorretas:** Tocolíticos (atosiban, nifedipina) não são usados de forma profilática contínua em paciente assintomática sem trabalho de parto prematuro ativo.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Gestante com antecedente de parto prematuro espontâneo (28 semanas) e perda gestacional tardia (16 semanas), apresentando **colo curto (< 25 mm)** na ultrassonografia transvaginal de 23 semanas (1,5 cm = 15 mm), tem indicação formal de **progesterona micronizada via vaginal (200 mg/dia)** até cerca de 36 semanas (além de poder ser considerada cerclagem uterina diante de história sugestiva de insuficiência istmocervical + colo < 25 mm antes de 24 semanas, conforme FEBRASGO/ACOG). Entre as opções listadas, a progesterona vaginal é a conduta baseada em evidências.\n- **A) Incorreta:** O rastreio de *Streptococcus* do Grupo B (swab vaginal/retal) é realizado entre 35 e 37 semanas.\n- **B e C) Incorretas:** Tocolíticos (atosiban, nifedipina) não são usados de forma profilática contínua em paciente assintomática sem trabalho de parto prematuro ativo.",
    "perolaClinica": "Gestante com antecedente de parto prematuro espontâneo (28 semanas) e perda gestacional tardia (16 semanas), apresentando **colo curto (< 25 mm)** na ultrassonografia transvaginal de 23 semanas (1,5 cm = 15 mm), tem indicação formal de **progesterona micronizada via vaginal (200 mg/dia)** até cerca de 36 semanas (além de poder ser considerada cerclagem uterina diante de história sugestiva de insuficiência istmocervical + colo < 25 mm antes de 24 semanas, conforme FEBRASGO/ACOG).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Prevenção do parto prematuro em gestante com histórico obstétrico adverso e colo curto (< 25 mm).",
      "raciocinioChave": "Gestante com parto prematuro prévio, abortamento tardio e colo uterino de 15 mm (< 25 mm) às 23 semanas possui alto risco de prematuridade espontânea. A medida farmacológica indicada para prevenção é a progesterona micronizada via vaginal 200 mg/dia até cerca de 36 semanas.",
      "armadilhaBanca": "Indicar tocolítico de manutenção (nifedipina/atosiban) fora de trabalho de parto agudo em vez de progesterona vaginal para colo curto."
    },
    "mapaDistratores": {
      "A": "O rastreamento do estreptococo do grupo B é feito apenas entre 35 e 37 semanas e não previne o trabalho de parto prematuro em curso por colo curto.",
      "B": "O atosiban é um tocolítico de uso agudo por até 48 horas no trabalho de parto prematuro estabelecido, não devendo ser mantido continuamente até 34 semanas.",
      "C": "A nifedipina não é recomendada como terapia tocolítica de manutenção prolongada em pacientes assintomáticas com colo curto sem contrações efetivas."
    }
  },
  {
    "id": "q-enamed-2025-083",
    "code": "Q-ENAMED25-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": [
      "lsil",
      "citopatologico",
      "colo-uterino",
      "diretrizes-papanicolau"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 32 anos, sexualmente ativa, comparece à consulta com o médico de família e comunidade para realização do seu primeiro exame preventivo. O médico realiza a coleta de citologia oncótica. Após 3 semanas, a paciente retorna com o resultado “presença de lesão intraepitelial de baixo grau”.\n\nConsiderando esse resultado, qual é a conduta adequada do médico?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar ultrassonografia transvaginal.",
        "explanation": "Incorreta: Ultrassonografia transvaginal não avalia lesões intraepiteliais cervicais.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Repetir o exame citopatológico em 6 meses.",
        "explanation": "A alternativa **B** está correta. Segundo as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), diante de laudo citopatológico de **lesão intraepitelial escamosa de baixo grau (LSIL)** em mulheres com **25 anos ou mais**, devido à alta taxa de regressão espontânea pelo sistema imune, a conduta inicial é **repetir a citologia em 6 meses** na UBS (encaminhando para colposcopia apenas se a segunda citologia mantiver qualquer atipia).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Encaminhar para a realização de colposcopia.",
        "explanation": "Incorreta: Colposcopia direta é indicada na persistência de LSIL após 6 meses (ou em ASC-H / HSIL / AGC / imunossuprimidas).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Repetir o exame citopatológico imediatamente.",
        "explanation": "Incorreta: Repetição imediata não agrega valor diagnóstico e aumenta custo/ansiedade.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Segundo as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), diante de laudo citopatológico de **lesão intraepitelial escamosa de baixo grau (LSIL)** em mulheres com **25 anos ou mais**, devido à alta taxa de regressão espontânea pelo sistema imune, a conduta inicial é **repetir a citologia em 6 meses** na UBS (encaminhando para colposcopia apenas se a segunda citologia mantiver qualquer atipia).\n- **A) Incorreta:** Ultrassonografia transvaginal não avalia lesões intraepiteliais cervicais.\n- **C) Incorreta:** Colposcopia direta é indicada na persistência de LSIL após 6 meses (ou em ASC-H / HSIL / AGC / imunossuprimidas).\n- **D) Incorreta:** Repetição imediata não agrega valor diagnóstico e aumenta custo/ansiedade.",
    "perolaClinica": "Segundo as Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/Ministério da Saúde), diante de laudo citopatológico de **lesão intraepitelial escamosa de baixo grau (LSIL)** em mulheres com **25 anos ou mais**, devido à alta taxa de regressão espontânea pelo sistema imune, a conduta inicial é **repetir a citologia em 6 meses** na UBS (encaminhando para colposcopia apenas se a segunda citologia mantiver qualquer atipia).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Conduta inicial na lesão intraepitelial escamosa de baixo grau (LSIL) em mulher com 25 anos ou mais.",
      "raciocinioChave": "Em mulheres com 25 anos ou mais, a LSIL apresenta alta taxa de regressão espontânea pelo clareamento do HPV. Por isso, as diretrizes do INCA/MS preconizam repetir o exame citopatológico em 6 meses na própria atenção primária antes de indicar colposcopia.",
      "armadilhaBanca": "Encaminhar imediatamente para colposcopia uma paciente ≥ 25 anos com LSIL, confundindo com a conduta de HSIL ou ASC-H."
    },
    "mapaDistratores": {
      "A": "A ultrassonografia transvaginal avalia útero e anexos, não possuindo papel no seguimento de alterações citológicas pré-neoplásicas do colo uterino.",
      "C": "O encaminhamento direto para colposcopia na LSIL só ocorre se houver persistência da alteração na repetição em 6 meses ou em situações especiais como imunossupressão.",
      "D": "Repetir a citologia imediatamente não permite tempo hábil para a regressão espontânea da infecção pelo HPV e gera exames e ansiedade desnecessários."
    }
  },
  {
    "id": "q-enamed-2025-084",
    "code": "Q-ENAMED25-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": [
      "notificacao-compulsoria",
      "violencia-institucional",
      "ilpi",
      "saude-do-idoso"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A agente comunitária de saúde de uma Unidade Básica de Saúde (UBS) relata, durante a reunião de equipe, a sua preocupação com os idosos de uma instituição de longa permanência para idosos (ILPI) no território da UBS. Em sua última visita, a agente observou que na instituição havia 38 idosos vivendo em isolamento excessivo, a maioria sem vínculos familiares ativos e sofrendo constantes agressões dos funcionários. Comenta ainda que havia sinais de contenção física em idosos com demência avançada e presença de lesões de pressão.\n\nQual a conduta mais adequada da equipe de saúde?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Formalizar denúncia ao Conselho Municipal do Idoso, considerando que situações como contenção e úlcera por pressão podem acontecer em ambientes de institucionalização prolongada e não requerem intervenção clínica imediata.",
        "explanation": "Incorreta: Agressões constantes e lesões evitáveis requerem intervenção clínica e protetiva imediata, não podendo ser naturalizadas.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Oferecer apoio clínico para os casos de maior vulnerabilidade, como os com lesão por pressão e agitação psicomotora, sugerindo adequações na rotina assistencial, respeitando a autonomia da ILPI.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Articular ação intersetorial com órgãos de controle social, registrar notificação compulsória de violência institucional e elaborar plano de ação conjunta com a equipe da ILPI.",
        "explanation": "A alternativa **C** está correta. Maus-tratos, agressões físicas, contenção inadequada e negligência em ILPI configuram **violência institucional contra a pessoa idosa**. Conforme o Estatuto da Pessoa Idosa (Lei nº 10.741/2003) e as normas do Sinan/Ministério da Saúde, a equipe da UBS tem obrigação legal de **registrar notificação compulsória de violência**, **articular ação intersetorial com órgãos de controle social e proteção** (Conselho do Idoso, Ministério Público, Vigilância Sanitária, Assistência Social) e **elaborar plano de cuidado/ação conjunta** para garantir assistência clínica imediata e readequação das práticas.\n- **B e D) Incorretas:** Omitir a notificação compulsória de violência e deixar de acionar órgãos de proteção viola o Estatuto da Pessoa Idosa.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Agendar reuniões quinzenais com a equipe da ILPI para educação permanente sobre cuidados paliativos, sem envolver outras instâncias legais ou sociais.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Maus-tratos, agressões físicas, contenção inadequada e negligência em ILPI configuram **violência institucional contra a pessoa idosa**. Conforme o Estatuto da Pessoa Idosa (Lei nº 10.741/2003) e as normas do Sinan/Ministério da Saúde, a equipe da UBS tem obrigação legal de **registrar notificação compulsória de violência**, **articular ação intersetorial com órgãos de controle social e proteção** (Conselho do Idoso, Ministério Público, Vigilância Sanitária, Assistência Social) e **elaborar plano de cuidado/ação conjunta** para garantir assistência clínica imediata e readequação das práticas.\n- **A) Incorreta:** Agressões constantes e lesões evitáveis requerem intervenção clínica e protetiva imediata, não podendo ser naturalizadas.\n- **B e D) Incorretas:** Omitir a notificação compulsória de violência e deixar de acionar órgãos de proteção viola o Estatuto da Pessoa Idosa.",
    "perolaClinica": "Maus-tratos, agressões físicas, contenção inadequada e negligência em ILPI configuram **violência institucional contra a pessoa idosa**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Notificação compulsória e abordagem intersetorial diante de violência institucional em ILPI.",
      "raciocinioChave": "Agressões físicas, isolamento excessivo, contenção inadequada e negligência clínica configuram violência institucional contra a pessoa idosa. Cabe à equipe da UBS realizar notificação compulsória de violência, acionar órgãos de controle social/proteção e construir plano de ação conjunto com a instituição.",
      "armadilhaBanca": "Naturalizar lesões por pressão e contenção física como inevitáveis na ILPI ou omitir a notificação compulsória e articulação intersetorial."
    },
    "mapaDistratores": {
      "A": "Agressões físicas e úlceras por pressão associadas a maus-tratos não são aceitáveis na institucionalização e exigem intervenção clínica imediata além da denúncia.",
      "B": "Respeitar a autonomia da ILPI diante de violência institucional evidente omite o dever legal de notificação compulsória e acionamento da rede de proteção ao idoso.",
      "D": "Limitar a conduta a reuniões educativas internas sem acionar órgãos de proteção social e vigilância descumpre o Estatuto da Pessoa Idosa."
    }
  },
  {
    "id": "q-enamed-2025-085",
    "code": "Q-ENAMED25-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Intoxicações Exógenas e Síndromes Toxicológicas",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-intoxicacoes-exogenas-e-sindromes-toxicologicas",
    "tags": [
      "intoxicacao-exogena",
      "benzodiazepinicos",
      "flumazenil",
      "clonazepam"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 42 anos é levada pelo irmão à Unidade de Pronto Atendimento (UPA) com fala alterada, lentificação, tontura e sonolência. Ela admite ter ingerido 30 comprimidos de clonazepam 2 mg há 20 minutos. Paciente evolui com hipotensão, rebaixamento do nível de consciência, sendo caracterizado coma e indicada a ventilação mecânica.\n\nQual medicação é indicada nessa situação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "N-acetilcisteína.",
        "explanation": "Incorreta: N-acetilcisteína é o antídoto para intoxicação por paracetamol.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Flumazenil.",
        "explanation": "A alternativa **B** está correta. Trata-se de intoxicação aguda grave por benzodiazepínico (clonazepam 60 mg) evoluindo para **coma e depressão respiratória grave** com indicação de ventilação mecânica (sem relato de coingestão de antidepressivos tricíclicos ou uso crônico com epilepsia). O antagonista específico dos receptores GABA-A benzodiazepínicos é o **flumazenil**.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Naloxona.",
        "explanation": "Incorreta: Naloxona é o antagonista opioide (intoxicação por morfina/fentanil/heroína).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Atropina.",
        "explanation": "Incorreta: Atropina é indicada na síndrome colinérgica (intoxicação por organofosforados/carbamatos).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **B** está correta. Trata-se de intoxicação aguda grave por benzodiazepínico (clonazepam 60 mg) evoluindo para **coma e depressão respiratória grave** com indicação de ventilação mecânica (sem relato de coingestão de antidepressivos tricíclicos ou uso crônico com epilepsia). O antagonista específico dos receptores GABA-A benzodiazepínicos é o **flumazenil**.\n- **A) Incorreta:** N-acetilcisteína é o antídoto para intoxicação por paracetamol.\n- **C) Incorreta:** Naloxona é o antagonista opioide (intoxicação por morfina/fentanil/heroína).\n- **D) Incorreta:** Atropina é indicada na síndrome colinérgica (intoxicação por organofosforados/carbamatos).",
    "perolaClinica": "Trata-se de intoxicação aguda grave por benzodiazepínico (clonazepam 60 mg) evoluindo para **coma e depressão respiratória grave** com indicação de ventilação mecânica (sem relato de coingestão de antidepressivos tricíclicos ou uso crônico com epilepsia).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Uso de flumazenil como antídoto específico na intoxicação aguda grave por benzodiazepínico.",
      "raciocinioChave": "A ingestão de dose maciça de clonazepam (60 mg) levando a coma e depressão respiratória com necessidade de ventilação mecânica caracteriza intoxicação benzodiazepínica grave. Sem contraindicações relatadas (como coingestão de tricíclicos ou epilepsia), o antagonista específico é o flumazenil.",
      "armadilhaBanca": "Confundir o antídoto específico dos benzodiazepínicos (flumazenil) com antídotos de outras síndromes toxicológicas."
    },
    "mapaDistratores": {
      "A": "A N-acetilcisteína é o antídoto específico para intoxicação aguda por paracetamol, atuando na reposição de glutationa hepática.",
      "C": "A naloxona é um antagonista competitivo dos receptores opioides, indicado para intoxicação por morfina, fentanil ou heroína, e não por benzodiazepínicos.",
      "D": "A atropina é um anticolinérgico utilizado para reverter efeitos muscarínicos da síndrome colinérgica por organofosforados ou carbamatos."
    }
  },
  {
    "id": "q-enamed-2025-086",
    "code": "Q-ENAMED25-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Vasculites Sistêmicas",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-vasculites-sistemicas",
    "tags": [
      "arterite-de-celulas-gigantes",
      "arterite-temporal",
      "vasculites",
      "vhs"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 55 anos, sem história de doenças crônicas, procura atendimento por queixa de cefaleia persistente em ambos os lados do crânio, associada a alterações de visão (amaurose fugaz e diplopia), cansaço e artralgias. Relata dor em todo o couro cabeludo. Notou perda de peso (2 kg em 2 meses). Nega fotofobia ou fonofobia, febre ou náuseas, e afirma que não acorda de madrugada por conta da cefaleia. Nega qualquer problema de ordem emocional. Ao exame, paciente encontra-se afebril, com pupilas isocóricas e sem rigidez de nuca.\n\nQual é o tipo de cefaleia dessa paciente, e qual exame seria útil na sua investigação preliminar, respectivamente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Cefaleia primária (cefaleia tensional); nenhum exame é necessário.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Cefaleia secundária (hemorragia subaracnoideia); análise de líquor.",
        "explanation": "Incorreta: Hemorragia subaracnoidea cursa com cefaleia em trovoada súbita, náuseas/vômitos e rigidez de nuca.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Cefaleia primária (migrânea); tomografia computadorizada de encéfalo.",
        "explanation": "Incorreta: A alternativa correta é a D.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Cefaleia secundária (arterite temporal); velocidade de hemossedimentação.",
        "explanation": "A alternativa **D** está correta. Mulher > 50 anos com cefaleia nova persistente, **hipersensibilidade/dor no couro cabeludo**, **sintomas visuais isquêmicos (amaurose fugaz e diplopia)**, fadiga, artralgias e perda ponderal apresenta quadro clássico de **arterite de células gigantes (arterite temporal)** — uma **cefaleia secundária** com risco iminente de cegueira irreversível. Segundo as diretrizes da SBR/EULAR, o exame laboratorial inicial mais útil e sensível é a **velocidade de hemossedimentação (VHS)** (geralmente > 50 mm/h, junto com PCR), devendo-se iniciar corticoide em altas doses imediatamente na suspeita clínica para prevenir perda visual definitiva.\n- **A e C) Incorretas:** Sinais de alarme (idade > 50 anos, início novo, amaurose fugaz, diplopia, perda de peso) descartam cefaleia primária.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. Mulher > 50 anos com cefaleia nova persistente, **hipersensibilidade/dor no couro cabeludo**, **sintomas visuais isquêmicos (amaurose fugaz e diplopia)**, fadiga, artralgias e perda ponderal apresenta quadro clássico de **arterite de células gigantes (arterite temporal)** — uma **cefaleia secundária** com risco iminente de cegueira irreversível. Segundo as diretrizes da SBR/EULAR, o exame laboratorial inicial mais útil e sensível é a **velocidade de hemossedimentação (VHS)** (geralmente > 50 mm/h, junto com PCR), devendo-se iniciar corticoide em altas doses imediatamente na suspeita clínica para prevenir perda visual definitiva.\n- **A e C) Incorretas:** Sinais de alarme (idade > 50 anos, início novo, amaurose fugaz, diplopia, perda de peso) descartam cefaleia primária.\n- **B) Incorreta:** Hemorragia subaracnoidea cursa com cefaleia em trovoada súbita, náuseas/vômitos e rigidez de nuca.",
    "perolaClinica": "Mulher > 50 anos com cefaleia nova persistente, **hipersensibilidade/dor no couro cabeludo**, **sintomas visuais isquêmicos (amaurose fugaz e diplopia)**, fadiga, artralgias e perda ponderal apresenta quadro clássico de **arterite de células gigantes (arterite temporal)** — uma **cefaleia secundária** com risco iminente de cegueira irreversível.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico de cefaleia secundária à arterite de células gigantes e investigação inicial com VHS.",
      "raciocinioChave": "Mulher acima de 50 anos com cefaleia nova persistente, hipersensibilidade no couro cabeludo, sintomas visuais isquêmicos (amaurose fugaz, diplopia) e perda ponderal apresenta quadro clássico de arterite temporal. Trata-se de cefaleia secundária cujo rastreio laboratorial preliminar utiliza a velocidade de hemossedimentação (VHS).",
      "armadilhaBanca": "Classificar a cefaleia como primária (tensional ou migrânea) em mulher > 50 anos ignorando sinais de alarme para arterite temporal."
    },
    "mapaDistratores": {
      "A": "A presença de idade > 50 anos, dor no couro cabeludo, perda ponderal e amaurose fugaz são sinais de alarme que afastam cefaleia tensional primária.",
      "B": "A hemorragia subaracnoideia apresenta início súbito explosivo (\"em trovoada\"), frequentemente com náuseas, vômitos e rigidez de nuca, ausentes no caso.",
      "C": "A migrânea é uma cefaleia primária pulsátil recorrente, geralmente desde a juventude e acompanhada de fotofobia/náuseas, não explicando perda ponderal e hipersensibilidade difusa do couro cabeludo aos 55 anos."
    }
  },
  {
    "id": "q-enamed-2025-087",
    "code": "Q-ENAMED25-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Obesidade Infantil e Desnutrição Grave",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-obesidade-infantil-e-desnutricao-grave",
    "tags": [
      "obesidade-infantil",
      "acantose-nigricans",
      "sindrome-metabolica",
      "perfil-lipidico"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Adolescente de 13 anos, sexo masculino, procura atendimento na Unidade Básica de Saúde (UBS) devido a manchas escurecidas nas dobras do pescoço, axilas e virilhas. Ao exame físico, índice de massa corporal está no Z escore entre +2 e +3 para a idade e sexo, relação da circunferência abdominal/estatura aumentada, com manchas hipercrômicas no pescoço, axilas e raiz da coxa, sem outros achados significativos.\n\nAlém de prescrever mudança de hábitos alimentares e aumento da atividade física, deve-se",
    "alternativas": [
      {
        "letter": "A",
        "text": "solicitar biópsia das lesões e hemoglobina glicada.",
        "explanation": "Incorreta: O diagnóstico de acantose nigricans é estritamente clínico, não havendo indicação de biópsia cutânea.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "solicitar perfil lipídico e ultrassonografia de abdome.",
        "explanation": "A alternativa **B** está correta. Adolescente com **obesidade** (escore Z de IMC entre +2 e +3) e **acantose nigricans** (manchas hipercrômicas aveludadas em dobras cervicais, axilares e inguinais, marcador clínico de **resistência insulínica**) necessita de rastreamento das comorbidades metabólicas associadas à síndrome metabólica e obesidade infantil. Segundo o Manual de Obesidade da SBP, recomenda-se solicitar **perfil lipídico**, glicemia de jejum/HbA1c, transaminases hepáticas e **ultrassonografia de abdome** (para rastrear doença hepática esteatótica associada à disfunção metabólica — MASLD/esteatose hepática).\n- **C e D) Incorretas:** Não se trata de dermatite inflamatória nem de micose superficial (tinea/pitiríase); o tratamento das lesões é o controle da resistência insulínica com perda ponderal.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "indicar corticoide tópico nas lesões e evitar exposição solar.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "indicar antifúngico nas lesões e solicitar teste de tolerância oral à glicose.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. Adolescente com **obesidade** (escore Z de IMC entre +2 e +3) e **acantose nigricans** (manchas hipercrômicas aveludadas em dobras cervicais, axilares e inguinais, marcador clínico de **resistência insulínica**) necessita de rastreamento das comorbidades metabólicas associadas à síndrome metabólica e obesidade infantil. Segundo o Manual de Obesidade da SBP, recomenda-se solicitar **perfil lipídico**, glicemia de jejum/HbA1c, transaminases hepáticas e **ultrassonografia de abdome** (para rastrear doença hepática esteatótica associada à disfunção metabólica — MASLD/esteatose hepática).\n- **A) Incorreta:** O diagnóstico de acantose nigricans é estritamente clínico, não havendo indicação de biópsia cutânea.\n- **C e D) Incorretas:** Não se trata de dermatite inflamatória nem de micose superficial (tinea/pitiríase); o tratamento das lesões é o controle da resistência insulínica com perda ponderal.",
    "perolaClinica": "Adolescente com **obesidade** (escore Z de IMC entre +2 e +3) e **acantose nigricans** (manchas hipercrômicas aveludadas em dobras cervicais, axilares e inguinais, marcador clínico de **resistência insulínica**) necessita de rastreamento das comorbidades metabólicas associadas à síndrome metabólica e obesidade infantil.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Investigação metabólica e de esteatose hepática em adolescente com obesidade e acantose nigricans.",
      "raciocinioChave": "Adolescente com obesidade (escore Z entre +2 e +3) e acantose nigricans (marcador clínico de resistência insulínica) requer rastreamento das complicações cardiometabólicas associadas. Além de mudanças de estilo de vida, deve-se solicitar perfil lipídico e ultrassonografia abdominal (para pesquisa de doença hepática esteatótica).",
      "armadilhaBanca": "Indicar biópsia ou tratamento dermatológico tópico para acantose nigricans em vez de rastrear comorbidades metabólicas da obesidade."
    },
    "mapaDistratores": {
      "A": "O diagnóstico de acantose nigricans é puramente clínico, sendo desnecessária e inadequada a realização de biópsia cutânea dessas lesões.",
      "C": "Corticoides tópicos e fotoproteção não tratam a causa da acantose nigricans (hiperinsulinemia por resistência à insulina) nem investigam suas comorbidades.",
      "D": "A acantose nigricans não é uma micose superficial, logo antifúngicos são ineficazes e postergam a abordagem da síndrome metabólica."
    }
  },
  {
    "id": "q-enamed-2025-089",
    "code": "Q-ENAMED25-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Descolamento Prematuro de Placenta",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-descolamento-prematuro-de-placenta",
    "tags": [
      "dpp",
      "descolamento-prematuro-de-placenta",
      "utero-de-couvelaire",
      "cesarea-de-urgencia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 28 anos, idade gestacional desconhecida, situação de vulnerabilidade social, chega, trazida pelo Serviço Móvel de Atendimento de Urgência (SAMU), com sangramento vaginal intenso, hipertonia uterina, pressão arterial de 130 x 90 mmHg, altura uterina de 32 cm, batimentos cardíacos fetais de 90 bpm. Toque vaginal: colo grosso, posterior impérvio. A acompanhante refere que a paciente fez uso de cocaína antes do ocorrido.\n\nO diagnóstico, a conduta adequada e a complicação possível são, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "descolamento de placenta; cesárea; útero de Couvelaire.",
        "explanation": "A alternativa **A** está correta. Gestante usuária de **cocaína** (vasoconstrição intensa e picos hipertensivos, grande fator de risco para DPP) apresentando **sangramento vaginal intenso**, **hipertonia uterina**, **bradicardia fetal (BCF 90 bpm)** e colo fechado/impérvio tem quadro clássico de **descolamento prematuro de placenta (DPP)**. Com feto vivo em sofrimento agudo e parto vaginal não iminente (colo grosso e impérvio), a via de parto imediata é a **cesariana de urgência**. Uma complicação clássica do DPP grave por infiltração sanguínea miometrial é o **útero de Couvelaire (apoplexia uteroplacentária)**, levando à atonia uterina pós-parto (FEBRASGO).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "rotura de vasa prévia; amniotomia; anemia fetal.",
        "explanation": "Incorreta: Rotura de vasa prévia ocorre após rotura das membranas, sem hipertonia uterina materna, e a amniotomia seria a causa/agravante, não a conduta.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "trabalho de parto; inibição; prematuridade.",
        "explanation": "Incorreta: Hipertonia uterina com sangramento intenso e bradicardia fetal contraindica tocólise/inibição.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "pré-eclâmpsia; cesárea; rotura uterina.",
        "explanation": "Incorreta: Rotura uterina cursa tipicamente com parada das contrações, subida da apresentação fetal e partes fetais facilmente palpáveis, e não hipertonia uterina mantida.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Gestante usuária de **cocaína** (vasoconstrição intensa e picos hipertensivos, grande fator de risco para DPP) apresentando **sangramento vaginal intenso**, **hipertonia uterina**, **bradicardia fetal (BCF 90 bpm)** e colo fechado/impérvio tem quadro clássico de **descolamento prematuro de placenta (DPP)**. Com feto vivo em sofrimento agudo e parto vaginal não iminente (colo grosso e impérvio), a via de parto imediata é a **cesariana de urgência**. Uma complicação clássica do DPP grave por infiltração sanguínea miometrial é o **útero de Couvelaire (apoplexia uteroplacentária)**, levando à atonia uterina pós-parto (FEBRASGO).\n- **B) Incorreta:** Rotura de vasa prévia ocorre após rotura das membranas, sem hipertonia uterina materna, e a amniotomia seria a causa/agravante, não a conduta.\n- **C) Incorreta:** Hipertonia uterina com sangramento intenso e bradicardia fetal contraindica tocólise/inibição.\n- **D) Incorreta:** Rotura uterina cursa tipicamente com parada das contrações, subida da apresentação fetal e partes fetais facilmente palpáveis, e não hipertonia uterina mantida.",
    "perolaClinica": "Gestante usuária de **cocaína** (vasoconstrição intensa e picos hipertensivos, grande fator de risco para DPP) apresentando **sangramento vaginal intenso**, **hipertonia uterina**, **bradicardia fetal (BCF 90 bpm)** e colo fechado/impérvio tem quadro clássico de **descolamento prematuro de placenta (DPP)**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico, via de parto e complicação do descolamento prematuro de placenta induzido por cocaína.",
      "raciocinioChave": "Gestante usuária de cocaína com sangramento vaginal intenso, hipertonia uterina, bradicardia fetal (90 bpm) e colo impérvio apresenta descolamento prematuro de placenta (DPP) com sofrimento fetal agudo. Como o feto está vivo e o parto vaginal não é iminente, impõe-se cesárea de emergência, havendo risco de infiltração sanguínea miometrial (útero de Couvelaire).",
      "armadilhaBanca": "Confundir a hipertonia uterina e uso de cocaína do DPP com rotura de vasa prévia, trabalho de parto ou rotura uterina."
    },
    "mapaDistratores": {
      "B": "A rotura de vasa prévia ocorre após amniorrexe com sangramento de origem fetal e útero normotônico, sendo a amniotomia a causa ou agravante e não o tratamento.",
      "C": "A inibição do trabalho de parto é formalmente contraindicada diante de sangramento intenso, hipertonia uterina e bradicardia fetal por DPP.",
      "D": "Na rotura uterina há cessação súbita das contrações, perda da estática fetal e partes fetais facilmente palpáveis, e não hipertonia uterina mantida."
    }
  },
  {
    "id": "q-enamed-2025-090",
    "code": "Q-ENAMED25-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Profilaxia Pós-Exposição",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-profilaxia-pos-exposicao",
    "tags": [
      "raiva-humana",
      "profilaxia-pos-exposicao",
      "vacina-antirrabica",
      "imunoglobulina-antirrabica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 23 anos, previamente hígido, procura atendimento na Unidade Básica de Saúde (UBS) relatando que há cerca de 2 horas foi mordido por um gato de rua ao tentar retirá-lo de cima de uma árvore. A mordida resultou em feridas cortocontusas nos dedos da mão esquerda. Paciente nega episódios anteriores de agressões desse tipo. O animal, que não pertence a ninguém da vizinhança, fugiu após ser resgatado. Na cidade, no ano anterior, houve a confirmação de raiva em felinos.\n\nA conduta adequada no atendimento imediato ao paciente é",
    "alternativas": [
      {
        "letter": "A",
        "text": "higienizar adequadamente e suturar as lacerações; aplicar o soro antirrábico; prescrever 1 dose de penicilina benzatina 1,2 milhão de UI.",
        "explanation": "Incorreta: Feridas por mordedura animal em mãos não devem ser suturadas primariamente (alto risco de infecção), e penicilina benzatina não cobre *Pasteurella multocida* e anaeróbios de mordedura de gato (a escolha profilática antibiótica é amoxicilina + clavulanato).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "lavar os ferimentos com antissépticos; aguardar a busca ativa do animal pela zoonose para início da profilaxia; aplicar reforço da vacina dT (difteria e tétano).",
        "explanation": "Incorreta: Nunca se aguarda busca de animal desaparecido para iniciar profilaxia antirrábica em acidente grave.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "lavar os ferimentos com água corrente abundante e sabão; administrar a vacina antirrábica em 4 doses, nos dias 0, 3, 7 e 14; aplicar imunoglobulina humana antirrábica.",
        "explanation": "A alternativa **C** está correta. Mordedura em **dedos da mão** (extremidade/área ricamente inervada = **acidente grave**) por **gato não passível de observação** (animal de rua que fugiu, em município com circulação recente de raiva felina) exige profilaxia pós-exposição completa segundo o Protocolo de Profilaxia da Raiva Humana (Ministério da Saúde, 2022/2024): **lavagem imediata com água corrente e sabão**, **vacina antirrábica em 4 doses (dias 0, 3, 7 e 14)** e **soro ou imunoglobulina humana antirrábica** infiltrada na lesão (e restante IM se sobrar).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "higienizar com solução antisséptica; administrar a 1ª dose da vacina antirrábica; na presença de qualquer reação adversa, contraindicar as doses subsequentes; aplicar o soro antirrábico.",
        "explanation": "Incorreta: Reações adversas leves/moderadas à vacina antirrábica não contraindicam a continuidade do esquema vital de profilaxia da raiva (doença ~100% letal).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Mordedura em **dedos da mão** (extremidade/área ricamente inervada = **acidente grave**) por **gato não passível de observação** (animal de rua que fugiu, em município com circulação recente de raiva felina) exige profilaxia pós-exposição completa segundo o Protocolo de Profilaxia da Raiva Humana (Ministério da Saúde, 2022/2024): **lavagem imediata com água corrente e sabão**, **vacina antirrábica em 4 doses (dias 0, 3, 7 e 14)** e **soro ou imunoglobulina humana antirrábica** infiltrada na lesão (e restante IM se sobrar).\n- **A) Incorreta:** Feridas por mordedura animal em mãos não devem ser suturadas primariamente (alto risco de infecção), e penicilina benzatina não cobre *Pasteurella multocida* e anaeróbios de mordedura de gato (a escolha profilática antibiótica é amoxicilina + clavulanato).\n- **B) Incorreta:** Nunca se aguarda busca de animal desaparecido para iniciar profilaxia antirrábica em acidente grave.\n- **D) Incorreta:** Reações adversas leves/moderadas à vacina antirrábica não contraindicam a continuidade do esquema vital de profilaxia da raiva (doença ~100% letal).",
    "perolaClinica": "Mordedura em **dedos da mão** (extremidade/área ricamente inervada = **acidente grave**) por **gato não passível de observação** (animal de rua que fugiu, em município com circulação recente de raiva felina) exige profilaxia pós-exposição completa segundo o Protocolo de Profilaxia da Raiva Humana (Ministério da Saúde, 2022/2024): **lavagem imediata com água corrente e sabão**, **vacina antirrábica em 4 doses (dias 0, 3, 7 e 14)** e **soro ou imunoglobulina humana antirrábica** infiltrada na lesão (e restante IM se sobrar).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Profilaxia pós-exposição antirrábica em acidente grave por animal não observável.",
      "raciocinioChave": "Mordedura em dedos da mão (região ricamente inervada, definindo acidente grave) por gato de rua que fugiu, em local com raiva felina recente, exige profilaxia completa imediata. A conduta inclui lavagem abundante com água e sabão, esquema vacinal antirrábico de 4 doses (dias 0, 3, 7 e 14) e soro ou imunoglobulina antirrábica.",
      "armadilhaBanca": "Aguardar captura do animal desaparecido, suturar mordedura em mão ou contraindicar vacina diante de reação adversa leve."
    },
    "mapaDistratores": {
      "A": "Mordeduras em mãos têm alto risco infeccioso e não devem receber sutura primária de rotina, além de a penicilina benzatina não cobrir Pasteurella multocida e anaeróbios.",
      "B": "Nunca se deve aguardar a busca ativa de animal que fugiu para iniciar a profilaxia antirrábica em acidente grave devido à letalidade próxima a 100% da raiva.",
      "D": "Reações adversas comuns à vacina antirrábica não contraindicam a conclusão do esquema de profilaxia, dada a gravidade fatal da doença."
    }
  },
  {
    "id": "q-enamed-2025-091",
    "code": "Q-ENAMED25-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Síndrome Coronariana Aguda sem Supra de ST",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-sindrome-coronariana-aguda-sem-supra-de-st",
    "tags": [
      "sindrome-coronariana-aguda",
      "scasst",
      "cateterismo-cardiaco",
      "estratificacao-de-risco"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 56 anos, em acompanhamento médico por angina instável de início recente, *diabetes mellitus* tipo 2, hipertensão arterial sistêmica e dislipidemia, é internado em unidade coronariana de hospital de atenção terciária com quadro de dor torácica em aperto, de forte intensidade, irradiada para o membro superior esquerdo e mandíbula, iniciada há cerca de 2 horas. O paciente relata ter sofrido 3 episódios de dor com características similares, mas de menor duração, nas últimas 24 horas. Ele vem em uso crônico de losartana, hidroclorotiazida, ácido acetilsalicílico, dapagliflozina, metformina e atorvastatina. Ao exame físico, ausculta-se 4ª bulha, níveis pressóricos dentro da normalidade, sem congestão pulmonar. Um eletrocardiograma mostra novo infradesnivelamento segmento ST de 1 mm, com inversão de onda T, em parede anterior. O paciente evoluiu com elevação da troponina-I, fazendo curva enzimática. O escore de risco Grace é de 152 pontos, enquanto o TIMI *risk score* é de 5 pontos.\n\nA conduta indicada nesse caso é realizar",
    "alternativas": [
      {
        "letter": "A",
        "text": "angiotomografia coronária em até 48 horas.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "cateterismo cardíaco nas primeiras 24 horas.",
        "explanation": "A alternativa **B** está correta. Paciente com **IAM sem supradesnivelamento do segmento ST (IAMSSST)** (dor anginosa típica + novo infradesnivelamento de ST + curva positiva de troponina-I) apresentando critérios de **alto risco isquêmico**: **escore GRACE > 140 pontos (152)**, alteração dinâmica de ST e elevação de troponina (além de TIMI 5). Conforme a Diretriz Brasileira de SCASSST (SBC) e a diretriz da ESC/AHA, recomenda-se **estratégia invasiva precoce com cateterismo cardíaco (cineangiocoronariografia) nas primeiras 24 horas**.\n- **A e D) Incorretas:** Testes não invasivos (angioTC ou eco de estresse) são indicados em pacientes de risco baixo ou intermediário sem curva de troponina/alteração isquêmica de alto risco.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "cateterismo cardíaco em até 3 dias do evento.",
        "explanation": "Incorreta: A janela de até 72 horas aplica-se a pacientes de risco intermediário sem critérios de alto risco (GRACE < 140, sem alteração dinâmica de ST ou troponina elevada).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "ecocardiograma de estresse em até 7 dias do evento.",
        "explanation": "Incorreta: A alternativa correta é a B.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 36.8,
    "taxaAcertoGlobal": 36.8,
    "comentarioGeral": "A alternativa **B** está correta. Paciente com **IAM sem supradesnivelamento do segmento ST (IAMSSST)** (dor anginosa típica + novo infradesnivelamento de ST + curva positiva de troponina-I) apresentando critérios de **alto risco isquêmico**: **escore GRACE > 140 pontos (152)**, alteração dinâmica de ST e elevação de troponina (além de TIMI 5). Conforme a Diretriz Brasileira de SCASSST (SBC) e a diretriz da ESC/AHA, recomenda-se **estratégia invasiva precoce com cateterismo cardíaco (cineangiocoronariografia) nas primeiras 24 horas**.\n- **A e D) Incorretas:** Testes não invasivos (angioTC ou eco de estresse) são indicados em pacientes de risco baixo ou intermediário sem curva de troponina/alteração isquêmica de alto risco.\n- **C) Incorreta:** A janela de até 72 horas aplica-se a pacientes de risco intermediário sem critérios de alto risco (GRACE < 140, sem alteração dinâmica de ST ou troponina elevada).",
    "perolaClinica": "Paciente com **IAM sem supradesnivelamento do segmento ST (IAMSSST)** (dor anginosa típica + novo infradesnivelamento de ST + curva positiva de troponina-I) apresentando critérios de **alto risco isquêmico**: **escore GRACE > 140 pontos (152)**, alteração dinâmica de ST e elevação de troponina (além de TIMI 5).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Estratégia invasiva precoce (< 24 horas) no IAM sem supradesnivelamento de ST de alto risco.",
      "raciocinioChave": "Paciente com dor anginosa típica em repouso, infradesnivelamento de ST, elevação de troponina e escore GRACE elevado (> 140 pontos) configura IAMSSST de alto risco. As diretrizes recomendam estratégia invasiva precoce com cateterismo cardíaco nas primeiras 24 horas.",
      "armadilhaBanca": "Indicar cateterismo em até 72 h ou exames não invasivos em paciente com IAMSSST de alto risco isquêmico (GRACE > 140)."
    },
    "mapaDistratores": {
      "A": "A angiotomografia coronariana é reservada para dor torácica de risco baixo a intermediário com troponina negativa e ECG não diagnóstico, nunca para IAMSSST confirmado de alto risco.",
      "C": "O prazo de até 72 horas destina-se a pacientes de risco intermediário sem elevação de troponina, alterações dinâmicas de ST ou GRACE > 140.",
      "D": "Testes provocativos não invasivos como ecocardiograma de estresse em até 7 dias atrasam inaceitavelmente a revascularização no IAMSSST de alto risco."
    }
  },
  {
    "id": "q-enamed-2025-092",
    "code": "Q-ENAMED25-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Asma na Infância e Fibrose Cística",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica",
    "tags": [
      "asma-infantil",
      "crise-diasmatica-grave",
      "corticotera-endovenosa",
      "metilprednisolona"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 1 ano e 10 meses é levada ao serviço de urgência com quadro de tosse e dispneia há 4 dias. A mãe refere que aumentou a frequência de salbutamol, que usa rotineiramente, porém não observou melhora, com piora da dispneia há 6 horas. Relata frequentes exacerbações da asma nos últimos 3 meses, apesar da utilização de prednisolona. História familiar: pai e mãe asmáticos. Ao exame físico, lactente no colo da mãe, afebril, sonolenta, taquidispneica, choro entrecortado, saturação 94% em ar ambiente, retração de musculatura acessória.\n\nAlém da internação da criança, a conduta adequada é prescrever",
    "alternativas": [
      {
        "letter": "A",
        "text": "metilprednisolona endovenoso.",
        "explanation": "A alternativa **A** está correta. Lactente com **crise asmática grave** (sonolência, choro entrecortado, retração de musculatura acessória, refratária ao salbutamol domiciliar) e indicação de internação hospitalar deve receber, além de oxigenoterapia (se SatO2 < 94–95%) e broncodilatador inalatório de resgate em doses repetidas (SABA + brometo de ipratrópio), **corticosteroide sistêmico por via endovenosa (metilprednisolona)** diante da gravidade/sonolência que compromete a via oral (GINA / SBP).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "ventilação não invasiva (VNI) com sedação.",
        "explanation": "Incorreta: Sedação em paciente já sonolenta com crise asmática grave pode precipitar depressão respiratória e parada respiratória.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "salbutamol endovenoso em infusão contínua.",
        "explanation": "Incorreta: Salbutamol endovenoso contínuo é terapia de exceção em UTI pediátrica para mal asmático refratário a toda terapia inalatória e sulfato de magnésio, pelo alto risco de arritmias e acidose láctica.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "sulfato de magnésio em infusão intravenosa contínua.",
        "explanation": "Incorreta: Sulfato de magnésio na crise asmática grave é administrado em **bólus/infusão rápida (20–30 min)**, e não em infusão contínua de manutenção como primeira medida isolada antes do corticoide sistêmico.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Lactente com **crise asmática grave** (sonolência, choro entrecortado, retração de musculatura acessória, refratária ao salbutamol domiciliar) e indicação de internação hospitalar deve receber, além de oxigenoterapia (se SatO2 < 94–95%) e broncodilatador inalatório de resgate em doses repetidas (SABA + brometo de ipratrópio), **corticosteroide sistêmico por via endovenosa (metilprednisolona)** diante da gravidade/sonolência que compromete a via oral (GINA / SBP).\n- **B) Incorreta:** Sedação em paciente já sonolenta com crise asmática grave pode precipitar depressão respiratória e parada respiratória.\n- **C) Incorreta:** Salbutamol endovenoso contínuo é terapia de exceção em UTI pediátrica para mal asmático refratário a toda terapia inalatória e sulfato de magnésio, pelo alto risco de arritmias e acidose láctica.\n- **D) Incorreta:** Sulfato de magnésio na crise asmática grave é administrado em **bólus/infusão rápida (20–30 min)**, e não em infusão contínua de manutenção como primeira medida isolada antes do corticoide sistêmico.",
    "perolaClinica": "Lactente com **crise asmática grave** (sonolência, choro entrecortado, retração de musculatura acessória, refratária ao salbutamol domiciliar) e indicação de internação hospitalar deve receber, além de oxigenoterapia (se SatO2 < 94–95%) e broncodilatador inalatório de resgate em doses repetidas (SABA + brometo de ipratrópio), **corticosteroide sistêmico por via endovenosa (metilprednisolona)** diante da gravidade/sonolência que compromete a via oral (GINA / SBP).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Corticoterapia sistêmica endovenosa no manejo hospitalar da crise asmática grave pediátrica.",
      "raciocinioChave": "Lactente com crise asmática grave (sonolência, choro entrecortado, retração de musculatura acessória e refratariedade ao salbutamol domiciliar) necessita de internação e terapia sistêmica imediata. Diante da gravidade e da impossibilidade/falha da via oral prévia, indica-se metilprednisolona endovenosa associada aos broncodilatadores inalatórios e oxigênio se necessário.",
      "armadilhaBanca": "Indicar sedação para VNI em criança já sonolenta ou salbutamol/magnésio em infusão contínua antes da corticoterapia EV."
    },
    "mapaDistratores": {
      "B": "Sedar uma criança já sonolenta por fadiga/hipoxemia na crise asmática grave pode desencadear depressão respiratória e parada cardiorrespiratória.",
      "C": "O salbutamol endovenoso contínuo é medida excepcional de UTI para mal asmático refratário a múltiplas terapias pelo alto risco de arritmias e acidose láctica.",
      "D": "O sulfato de magnésio na asma grave é administrado em infusão rápida (20 a 30 minutos) como adjuvante após falha inicial, não em infusão contínua substitutiva do corticoide sistêmico."
    }
  },
  {
    "id": "q-enamed-2025-093",
    "code": "Q-ENAMED25-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Oftalmologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-oftalmologia-basica",
    "tags": [
      "queimadura-ocular-quimica",
      "alvejante",
      "lavagem-ocular",
      "emergencia-oftalmologica"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 45 anos atendida na Unidade Básica de Saúde (UBS) com dor ocular. Referiu que estava realizando limpeza doméstica com alvejante e deixou atingir o olho, acidentalmente. Ao exame físico, foi observada presença de hiperemia intensa com opacidade da córnea e queimadura química da pálpebra superior do olho direito.\n\nQual é o correto manejo da paciente?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Prescrição de analgésico tópico e colírio lubrificante.",
        "explanation": "Incorreta: Anestésico/analgésico tópico de uso domiciliar é contraindicado por retardar a epitelização corneana e mascarar piora; além disso, omitiu a lavagem imediata.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Lavagem dos olhos com solução de água boricada e curativo oclusivo.",
        "explanation": "Incorreta: Não se utiliza água boricada nem curativo oclusivo antes de descontaminação e avaliação especializada (curativo retém resíduo químico e favorece infecção).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Lavagem ocular com solução fisiológica e avaliação imediata do especialista.",
        "explanation": "A alternativa **C** está correta. Queimadura ocular química por álcali (alvejante/hipoclorito de sódio) é uma **emergência oftalmológica absoluta**, pois substâncias alcalinas causam necrose de liquefação e penetram rapidamente na córnea e câmara anterior. A conduta imediata na UBS é **irrigação/lavagem ocular copiosa e contínua com soro fisiológico 0,9% (ou água corrente limpa)** até normalização do pH, seguida de **avaliação imediata pelo oftalmologista** (Conselho Brasileiro de Oftalmologia).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Prescrição de colírio de corticoide tópico e avaliação precoce do especialista.",
        "explanation": "Incorreta: Corticoide tópico sem avaliação oftalmológica prévia e lavagem imediata pode agravar perfuração corneana.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 76.5,
    "taxaAcertoGlobal": 76.5,
    "comentarioGeral": "A alternativa **C** está correta. Queimadura ocular química por álcali (alvejante/hipoclorito de sódio) é uma **emergência oftalmológica absoluta**, pois substâncias alcalinas causam necrose de liquefação e penetram rapidamente na córnea e câmara anterior. A conduta imediata na UBS é **irrigação/lavagem ocular copiosa e contínua com soro fisiológico 0,9% (ou água corrente limpa)** até normalização do pH, seguida de **avaliação imediata pelo oftalmologista** (Conselho Brasileiro de Oftalmologia).\n- **A) Incorreta:** Anestésico/analgésico tópico de uso domiciliar é contraindicado por retardar a epitelização corneana e mascarar piora; além disso, omitiu a lavagem imediata.\n- **B) Incorreta:** Não se utiliza água boricada nem curativo oclusivo antes de descontaminação e avaliação especializada (curativo retém resíduo químico e favorece infecção).\n- **D) Incorreta:** Corticoide tópico sem avaliação oftalmológica prévia e lavagem imediata pode agravar perfuração corneana.",
    "perolaClinica": "Queimadura ocular química por álcali (alvejante/hipoclorito de sódio) é uma **emergência oftalmológica absoluta**, pois substâncias alcalinas causam necrose de liquefação e penetram rapidamente na córnea e câmara anterior.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Conduta de emergência na queimadura ocular química por álcali na Atenção Primária.",
      "raciocinioChave": "Alvejantes contêm álcalis que promovem necrose de liquefação e penetração ocular profunda rápida, configurando emergência oftalmológica. A medida imediata na UBS é a lavagem ocular copiosa com soro fisiológico 0,9% seguida de encaminhamento imediato ao oftalmologista.",
      "armadilhaBanca": "Prescrever colírios (anestésico ou corticoide), água boricada ou curativo oclusivo antes da irrigação copiosa na queimadura alcalina."
    },
    "mapaDistratores": {
      "A": "Prescrever analgésico tópico e lubrificante sem irrigar o olho permite a ação contínua do álcali, além de anestésicos tópicos retardarem a cicatrização corneana.",
      "B": "Água boricada é inadequada e o curativo oclusivo antes da avaliação especializada retém resíduos químicos em contato com a córnea e favorece infecção.",
      "D": "O uso empírico de corticoide tópico sem exame oftalmológico e lavagem prévia pode prejudicar a regeneração epitelial e facilitar perfuração corneana."
    }
  },
  {
    "id": "q-enamed-2025-094",
    "code": "Q-ENAMED25-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Endométrio",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-endometrio",
    "tags": [
      "sangramento-pos-menopausa",
      "espessamento-endometrial",
      "hiperplasia-endometrial",
      "ginecologia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 72 anos, previamente hígida, com menopausa aos 53 anos, obesa, solteira e nulípara, nunca fez reposição hormonal. Chega à Unidade de Pronto Atendimento (UPA) com sangramento vaginal há dois dias, hemodinamicamente estável. Nega sangramentos anteriores. Realizou exame especular, com os seguintes achados: mucosa vaginal sem alterações, colo uterino contendo lesão polipoide que se exteriorizava pelo orifício externo, ectocérvice sem alterações, anexos livres. À ultrassonografia transvaginal, útero contendo 3 nódulos, medindo respectivamente 2,5 cm, 3,5 cm e 1,5 cm em seus maiores diâmetros, sendo o 1° e o 2° intramurais e o 3° submucoso. Endométrio medindo 8 mm de espessura. Colo uterino mostrando lesão polipoide no canal endocervical, medindo 1,5 cm em sua maior dimensão.\n\nQual é a principal hipótese diagnóstica?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hiperplasia endometrial.",
        "explanation": "A alternativa **A** está correta. Paciente idosa (72 anos) pós-menopausada sem terapia hormonal, apresentando múltiplos fatores de risco para estímulo estrogênico endógeno sem oposição (**obesidade, nuliparidade, menopausa aos 53 anos**), com sangramento uterino pós-menopausa e **espessamento endometrial à ultrassonografia transvaginal (8 mm > ponto de corte de 4–5 mm)**, tem como principal hipótese **hiperplasia endometrial** (ou neoplasia endometrial, devendo prosseguir com histeroscopia e biópsia endometrial segundo FEBRASGO).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Câncer de colo de útero.",
        "explanation": "Incorreta: A ectocérvice está sem alterações e a lesão descrita é polipoide endocervical benigna típica (pólipo endocervical).",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Leiomioma submucoso.",
        "explanation": "Incorreta: Leiomiomas tendem a regredir na pós-menopausa e não justificam o espessamento endometrial difuso de 8 mm em paciente sem TH.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "Endométrio atrófico.",
        "explanation": "Incorreta: Endométrio atrófico (causa mais comum de sangramento pós-menopausa em geral) apresenta espessura **≤ 4–5 mm** à USTV, e não 8 mm.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Paciente idosa (72 anos) pós-menopausada sem terapia hormonal, apresentando múltiplos fatores de risco para estímulo estrogênico endógeno sem oposição (**obesidade, nuliparidade, menopausa aos 53 anos**), com sangramento uterino pós-menopausa e **espessamento endometrial à ultrassonografia transvaginal (8 mm > ponto de corte de 4–5 mm)**, tem como principal hipótese **hiperplasia endometrial** (ou neoplasia endometrial, devendo prosseguir com histeroscopia e biópsia endometrial segundo FEBRASGO).\n- **B) Incorreta:** A ectocérvice está sem alterações e a lesão descrita é polipoide endocervical benigna típica (pólipo endocervical).\n- **C) Incorreta:** Leiomiomas tendem a regredir na pós-menopausa e não justificam o espessamento endometrial difuso de 8 mm em paciente sem TH.\n- **D) Incorreta:** Endométrio atrófico (causa mais comum de sangramento pós-menopausa em geral) apresenta espessura **≤ 4–5 mm** à USTV, e não 8 mm.",
    "perolaClinica": "Paciente idosa (72 anos) pós-menopausada sem terapia hormonal, apresentando múltiplos fatores de risco para estímulo estrogênico endógeno sem oposição (**obesidade, nuliparidade, menopausa aos 53 anos**), com sangramento uterino pós-menopausa e **espessamento endometrial à ultrassonografia transvaginal (8 mm > ponto de corte de 4–5 mm)**, tem como principal hipótese **hiperplasia endometrial** (ou neoplasia endometrial, devendo prosseguir com histeroscopia e biópsia endometrial segundo FEBRASGO).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico diferencial do sangramento pós-menopausa com espessamento endometrial (> 4–5 mm).",
      "raciocinioChave": "Idosa pós-menopausada sem terapia hormonal, com fatores de risco para hiperestrogenismo sem oposição (obesidade e nuliparidade), apresenta sangramento vaginal e endométrio espessado (8 mm à USTV). O achado supera o ponto de corte de 4–5 mm e torna a hiperplasia endometrial (ou neoplasia endometrial) a principal hipótese diagnóstica.",
      "armadilhaBanca": "Atribuir o sangramento pós-menopausa a mioma ou atrofia endometrial ignorando a espessura endometrial de 8 mm sem terapia hormonal."
    },
    "mapaDistratores": {
      "B": "O exame especular demonstrou ectocérvice sem alterações e lesão polipoide endocervical benigna típica, não sugerindo neoplasia de colo uterino como causa do espessamento endometrial.",
      "C": "Leiomiomas tendem à regressão na pós-menopausa e não justificam o espessamento difuso do eco endometrial para 8 mm em mulher sem uso de hormônios.",
      "D": "O endométrio atrófico, embora frequente no sangramento pós-menopausa, caracteriza-se ultrassonograficamente por eco endometrial fino (≤ 4–5 mm), incompatível com 8 mm."
    }
  },
  {
    "id": "q-enamed-2025-095",
    "code": "Q-ENAMED25-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Anemias e Doença Falciforme na Infância",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-anemias-e-doenca-falciforme-na-infancia",
    "tags": [
      "anemia-ferropriva",
      "ferro-elementar",
      "reticulocitos",
      "pediatria"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 11 anos é levada pela mãe à consulta médica em Unidade Básica de Saúde (UBS), com história de cansaço, palidez cutânea e baixo rendimento escolar nos últimos 3 meses. Ao exame físico, mucosas hipocrômicas (3+/4+); palidez cutânea. Pulso radial: 104 bpm, rítmico e cheio. Aparelho cardiovascular: sopro sistólico 2/6. Restante do exame físico sem alterações. Mãe apresenta hemograma da menina realizado há 2 semanas.\n\n| Exame | Resultados | Valores de referência |\n|---|---|---|\n| Hemoglobina | 8,4 g/dL | 11,5 a 15,5 g/dL |\n| Hematócrito | 25,3% | 36 a 48% |\n| VCM | 62 fL | 80 a 98 fL |\n| HCM | 24 pg | 27 a 34 pg |\n| CHCM | 28 g/dL | 31 a 36 g/dL |\n| RDW | 22% | 11,5 a 14,5% |\n| Leucócitos totais | 8.430/mm³ | 4.000 a 10.000/mm³ |\n| Neutrófilos | 54% | 40 a 80% |\n| Eosinófilos | 10% | 0 a 5% |\n| Basófilos | 1% | 0 a 2% |\n| Monócitos | 4% | 2 a 10% |\n| Linfócitos | 31% | 25 a 50% |\n| Plaquetas | 480.000/mm³ | 140.000 a 450.000/mm³ |\n\nDiante do caso apresentado, assinale a alternativa mais adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Deve-se dosar o ferro sérico, por ser exame sensível e específico, atentando-se para o ritmo circadiano do ferro, cujos valores são mais elevados pela manhã.",
        "explanation": "Incorreta: O ferro sérico tem baixa especificidade/sensibilidade isolada e grande variação circadiana; o melhor marcador dos estoques é a **ferritina sérica**.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Considerando-se o resultado dos exames, pode-se iniciar tratamento com 4 mg/kg/dia de ferro elementar, e espera-se aumento de reticulócitos em 4 a 7 dias.",
        "explanation": "A alternativa **B** está correta. O hemograma evidencia **anemia microcítica (VCM 62 fL) e hipocrômica (HCM 24 pg, CHCM 28 g/dL) com anisocitose acentuada (RDW 22%)** e trombocitose reacional (480.000/mm³), quadro clássico de **anemia ferropriva**. Segundo a Sociedade Brasileira de Pediatria (SBP), o tratamento é feito com **3 a 6 mg/kg/dia de ferro elementar** via oral, observando-se como primeiro marcador de resposta terapêutica o **pico/aumento de reticulócitos em 4 a 10 dias** (4–7 dias).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "Com base no HCM, a anemia pode ser classificada em normocítica, e o esfregaço de sangue periférico pode evidenciar anisocitose, eliptocitose e poiquilocitose.",
        "explanation": "Incorreta: A classificação morfológica quanto ao tamanho (normocítica/microcítica) baseia-se no **VCM** (62 fL = microcítica), enquanto o HCM avalia a coloração/hemoglobina corpuscular (hipocrômica).",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "A eosinofilia e a trombocitose observadas justificam o encaminhamento para hematologista, a fim de investigar causas de anemia e comprometimento esplênico.",
        "explanation": "Incorreta: Trombocitose leve é reacional à ferropenia, e eosinofilia (10%) sugere possível parasitose intestinal concomitante (causa associada comum de anemia ferropriva), sendo de manejo resolutivo na APS.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **B** está correta. O hemograma evidencia **anemia microcítica (VCM 62 fL) e hipocrômica (HCM 24 pg, CHCM 28 g/dL) com anisocitose acentuada (RDW 22%)** e trombocitose reacional (480.000/mm³), quadro clássico de **anemia ferropriva**. Segundo a Sociedade Brasileira de Pediatria (SBP), o tratamento é feito com **3 a 6 mg/kg/dia de ferro elementar** via oral, observando-se como primeiro marcador de resposta terapêutica o **pico/aumento de reticulócitos em 4 a 10 dias** (4–7 dias).\n- **A) Incorreta:** O ferro sérico tem baixa especificidade/sensibilidade isolada e grande variação circadiana; o melhor marcador dos estoques é a **ferritina sérica**.\n- **C) Incorreta:** A classificação morfológica quanto ao tamanho (normocítica/microcítica) baseia-se no **VCM** (62 fL = microcítica), enquanto o HCM avalia a coloração/hemoglobina corpuscular (hipocrômica).\n- **D) Incorreta:** Trombocitose leve é reacional à ferropenia, e eosinofilia (10%) sugere possível parasitose intestinal concomitante (causa associada comum de anemia ferropriva), sendo de manejo resolutivo na APS.",
    "perolaClinica": "O hemograma evidencia **anemia microcítica (VCM 62 fL) e hipocrômica (HCM 24 pg, CHCM 28 g/dL) com anisocitose acentuada (RDW 22%)** e trombocitose reacional (480.000/mm³), quadro clássico de **anemia ferropriva**.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico laboratorial, tratamento com ferro oral e resposta reticulocitária na anemia ferropriva infantil.",
      "raciocinioChave": "O hemograma mostra anemia microcítica (VCM 62 fL) e hipocrômica (HCM 24 pg, CHCM 28 g/dL) com RDW elevado (22%) e plaquetose reacional, típicos de anemia ferropriva. O tratamento na infância utiliza 3 a 6 mg/kg/dia de ferro elementar (como 4 mg/kg/dia), com pico reticulocitário esperado em 4 a 7 dias.",
      "armadilhaBanca": "Valorizar ferro sérico isolado para diagnóstico, confundir HCM com VCM na classificação morfológica ou encaminhar trombocitose reacional."
    },
    "mapaDistratores": {
      "A": "O ferro sérico sofre ampla variação circadiana e baixa especificidade isolada; o exame de escolha para avaliar os estoques corporais de ferro é a ferritina sérica.",
      "C": "A classificação do tamanho eritrocitário (microcítica vs. normocítica) baseia-se no VCM (62 fL indica microcitose), enquanto o HCM avalia o conteúdo de hemoglobina por hemácia.",
      "D": "Trombocitose discreta é achado reacional frequente na deficiência de ferro e a eosinofilia sugere parasitose associada, ambas perfeitamente manejáveis na UBS sem necessidade de hematologista."
    }
  },
  {
    "id": "q-enamed-2025-096",
    "code": "Q-ENAMED25-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "ISTs e Sífilis no Adulto",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-ists-e-sifilis-no-adulto",
    "tags": [
      "cancro-mole",
      "haemophilus-ducreyi",
      "ulcera-genital",
      "azitromicina"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 30 anos chega para consulta em Unidade Básica de Saúde (UBS) devido a astenia e úlcera no pênis. Trabalha como profissional do sexo e nem sempre faz uso de preservativo. Há cerca de 3 meses, vem notando emagrecimento (10 kg no período), astenia, febre baixa sem horário fixo e, há 1 semana, observou o aparecimento de úlcera dolorosa no pênis. Nega secreção uretral. Ao exame físico, apresenta-se emagrecido, com uma lesão ulcerada com bordas elevadas sem secreção de aproximadamente 3 centímetros logo abaixo da glande, rasa e de base mole, além de linfonodomegalia inguinal direita, com sinais inflamatórios, sem fistulização.\n\n[Imagem clínica no caderno original: fotografia de úlcera peniana rasa de base mole/suja em região subbalânica.]\n\nNesse caso, a investigação, o achado esperado e o tratamento referentes à úlcera devem ser, respectivamente,",
    "alternativas": [
      {
        "letter": "A",
        "text": "sorologia para *Chlamydia trachomatis*; positiva; doxiciclina 100 mg, 2 vezes ao dia, via oral, por 7 dias.",
        "explanation": "Incorreta: *Chlamydia trachomatis* (L1–L3) causa linfogranuloma venéreo (úlcera indolor efêmera seguida de linfadenite que fistuliza por múltiplos orifícios, tratada com doxiciclina por 21 dias).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "biópsia da úlcera; bacilos álcool ácido resistentes; esquema inicial com pirazinamida, isoniazida e rifampicina, via oral.",
        "explanation": "Incorreta: Tuberculose cutânea genital é rara e não explica úlcera aguda de base mole com adenite inflamatória em 1 semana.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Venereal Disease Research Laboratory (VDRL); reagente; benzilpenicilina benzatina 1,2 milhão de unidades, intramuscular, dose única.",
        "explanation": "Incorreta: Sífilis primária (cancro duro) apresenta úlcera **indolor**, de fundo limpo e **base endurecida**, e na sífilis recente a dose de penicilina benzatina é de 2,4 milhões UI IM.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "microscopia de esfregaço do fundo da úlcera; Gram negativos agrupados em correntes; azitromicina 500 mg, via oral, 2 comprimidos em dose única.",
        "explanation": "A alternativa **D** está correta. [REVISAR: questão acompanhada de fotografia clínica de úlcera peniana no caderno original] Paciente com **úlcera genital dolorosa**, rasa, de **base mole**, associada à linfadenopatia inguinal dolorosa unilateral com sinais inflamatórios (bubão), apresenta quadro típico de **cancro mole (cancroide)** causado pelo cocobacilo Gram-negativo ***Haemophilus ducreyi*** (que à microscopia dispõe-se em cadeias/correntes ou \"cardume de peixes\"). Conforme o PCDT de ISTs (Ministério da Saúde), o tratamento de primeira escolha é **azitromicina 1 g (2 comprimidos de 500 mg) via oral em dose única** (e lembre-se de que na prática clínica, na abordagem sindrômica de úlcera genital sem vesículas < 4 semanas, associa-se também cobertura para sífilis e investiga-se HIV/sífilis devido ao emagrecimento e febre).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **D** está correta. [REVISAR: questão acompanhada de fotografia clínica de úlcera peniana no caderno original] Paciente com **úlcera genital dolorosa**, rasa, de **base mole**, associada à linfadenopatia inguinal dolorosa unilateral com sinais inflamatórios (bubão), apresenta quadro típico de **cancro mole (cancroide)** causado pelo cocobacilo Gram-negativo ***Haemophilus ducreyi*** (que à microscopia dispõe-se em cadeias/correntes ou \"cardume de peixes\"). Conforme o PCDT de ISTs (Ministério da Saúde), o tratamento de primeira escolha é **azitromicina 1 g (2 comprimidos de 500 mg) via oral em dose única** (e lembre-se de que na prática clínica, na abordagem sindrômica de úlcera genital sem vesículas < 4 semanas, associa-se também cobertura para sífilis e investiga-se HIV/sífilis devido ao emagrecimento e febre).\n- **A) Incorreta:** *Chlamydia trachomatis* (L1–L3) causa linfogranuloma venéreo (úlcera indolor efêmera seguida de linfadenite que fistuliza por múltiplos orifícios, tratada com doxiciclina por 21 dias).\n- **B) Incorreta:** Tuberculose cutânea genital é rara e não explica úlcera aguda de base mole com adenite inflamatória em 1 semana.\n- **C) Incorreta:** Sífilis primária (cancro duro) apresenta úlcera **indolor**, de fundo limpo e **base endurecida**, e na sífilis recente a dose de penicilina benzatina é de 2,4 milhões UI IM.",
    "perolaClinica": "Paciente com **úlcera genital dolorosa**, rasa, de **base mole**, associada à linfadenopatia inguinal dolorosa unilateral com sinais inflamatórios (bubão), apresenta quadro típico de **cancro mole (cancroide)** causado pelo cocobacilo Gram-negativo ***Haemophilus ducreyi*** (que à microscopia dispõe-se em cadeias/correntes ou \"cardume de peixes\").",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diagnóstico etiológico e tratamento de primeira linha do cancro mole (Haemophilus ducreyi).",
      "raciocinioChave": "Úlcera peniana dolorosa, rasa, de base mole, acompanhada de linfadenopatia inguinal inflamatória dolorosa (bubão) caracteriza cancro mole por Haemophilus ducreyi. A bacterioscopia evidencia cocobacilos Gram-negativos em correntes e o tratamento de escolha é azitromicina 1 g via oral em dose única.",
      "armadilhaBanca": "Confundir úlcera dolorosa de base mole (cancro mole) com sífilis primária (indolor, base dura) ou linfogranuloma venéreo."
    },
    "mapaDistratores": {
      "A": "Chlamydia trachomatis (sorotipos L1–L3) causa linfogranuloma venéreo, que cursa com úlcera inicial indolor fugaz e adenite com fistulização por múltiplos orifícios, tratada por 21 dias com doxiciclina.",
      "B": "Tuberculose cutânea genital é rara e de evolução crônica indolente, não explicando úlcera dolorosa aguda com adenite inguinal inflamatória em 1 semana.",
      "C": "A sífilis primária (cancro duro) manifesta-se com úlcera única indolor, de fundo limpo e base endurecida, além de ser tratada com 2,4 milhões UI de penicilina benzatina na forma recente."
    }
  },
  {
    "id": "q-enamed-2025-097",
    "code": "Q-ENAMED25-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Avaliação do Crescimento e Baixa Estatura",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-avaliacao-do-crescimento-e-baixa-estatura",
    "tags": [
      "baixa-estatura-familiar",
      "puericultura",
      "idade-ossea",
      "curva-de-crescimento"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mãe de menina de 7 anos, em consulta na Unidade Básica de Saúde (UBS), relata preocupação por a filha ser a menor de sua sala de aula. Nega intercorrências nos períodos gestacional e neonatal. Nega internações ou uso de medicações contínuas. Exame físico sem alterações, estágio de desenvolvimento de Tanner M1P1; peso de 19 kg (z-1); estatura de 1,07 m (-3 < z < -2) com alvo de 1,50 m (z-2); índice de massa corporal de 16,6 (0 < z < +1); relação entre segmento superior e segmento inferior de 1,02 (valor de referência para a idade: 1 a 1,3). Em consulta com 6 anos e 8 meses, apresentava peso de 17 kg (-2 < z < -1); estatura de 1,05 m (-3 < z < -2); índice de massa corporal de 15,4 (z 0), quando foi realizado cálculo de idade óssea compatível com 5 anos e 10 meses.\n\nA hipótese diagnóstica adequada para o caso é",
    "alternativas": [
      {
        "letter": "A",
        "text": "acondroplasia.",
        "explanation": "Incorreta: Acondroplasia cursa com baixa estatura desproporcionada (aumento acentuado da relação SS/SI por encurtamento rizomélico dos membros).",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "síndrome de Turner.",
        "explanation": "Incorreta: Síndrome de Turner cursa com estigmas típicos (pescoço alado, cúbito valgo, tórax em escudo) e desaceleração da velocidade de crescimento abaixo do alvo familiar.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "baixa estatura familiar.",
        "explanation": "A alternativa **C** está correta. Menina com baixa estatura proporcionada (relação SS/SI normal = 1,02), velocidade de crescimento adequada (cresceu 2 cm em 4 meses, equivalente a ~6 cm/ano), idade óssea próxima à idade cronológica (5a10m para 6a8m) e **estatura-alvo familiar igualmente baixa (1,50 m, escore Z -2)**, compatível com o canal de crescimento da criança (-3 < z < -2), preenche os critérios de **baixa estatura familiar (variante normal do crescimento)** segundo a Sociedade Brasileira de Pediatria (SBP).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "atraso constitucional do crescimento.",
        "explanation": "Incorreta: No atraso constitucional do crescimento e da puberdade, o alvo parental costuma ser normal e há atraso mais expressivo da idade óssea (≥ 2 anos / > 2 DP).",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Menina com baixa estatura proporcionada (relação SS/SI normal = 1,02), velocidade de crescimento adequada (cresceu 2 cm em 4 meses, equivalente a ~6 cm/ano), idade óssea próxima à idade cronológica (5a10m para 6a8m) e **estatura-alvo familiar igualmente baixa (1,50 m, escore Z -2)**, compatível com o canal de crescimento da criança (-3 < z < -2), preenche os critérios de **baixa estatura familiar (variante normal do crescimento)** segundo a Sociedade Brasileira de Pediatria (SBP).\n- **A) Incorreta:** Acondroplasia cursa com baixa estatura desproporcionada (aumento acentuado da relação SS/SI por encurtamento rizomélico dos membros).\n- **B) Incorreta:** Síndrome de Turner cursa com estigmas típicos (pescoço alado, cúbito valgo, tórax em escudo) e desaceleração da velocidade de crescimento abaixo do alvo familiar.\n- **D) Incorreta:** No atraso constitucional do crescimento e da puberdade, o alvo parental costuma ser normal e há atraso mais expressivo da idade óssea (≥ 2 anos / > 2 DP).",
    "perolaClinica": "Menina com baixa estatura proporcionada (relação SS/SI normal = 1,02), velocidade de crescimento adequada (cresceu 2 cm em 4 meses, equivalente a ~6 cm/ano), idade óssea próxima à idade cronológica (5a10m para 6a8m) e **estatura-alvo familiar igualmente baixa (1,50 m, escore Z -2)**, compatível com o canal de crescimento da criança (-3 < z < -2), preenche os critérios de **baixa estatura familiar (variante normal do crescimento)** segundo a Sociedade Brasileira de Pediatria (SBP).",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diferenciação entre baixa estatura familiar e causas patológicas ou atraso constitucional.",
      "raciocinioChave": "Criança com baixa estatura proporcionada (relação SS/SI normal), velocidade de crescimento normal (~6 cm/ano), idade óssea compatível com a cronológica e estatura-alvo parental igualmente baixa (z -2) preenche todos os critérios de baixa estatura familiar. Trata-se de variante normal do crescimento, sem doença subjacente.",
      "armadilhaBanca": "Confundir baixa estatura familiar com atraso constitucional do crescimento ou síndromes dismórficas/desproporcionadas."
    },
    "mapaDistratores": {
      "A": "A acondroplasia provoca baixa estatura acentuadamente desproporcionada às custas de encurtamento rizomélico dos membros, elevando muito a relação SS/SI.",
      "B": "A síndrome de Turner cursa com estigmas físicos característicos (pescoço alado, cúbito valgo) e desaceleração da velocidade de crescimento desviando do canal familiar.",
      "D": "No atraso constitucional do crescimento e da puberdade, o alvo genético familiar costuma ser normal e observa-se atraso expressivo da idade óssea (≥ 2 anos) em relação à cronológica."
    }
  },
  {
    "id": "q-enamed-2025-098",
    "code": "Q-ENAMED25-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Coledocolitíase e Colangite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-coledocolitiase-e-colangite-aguda",
    "tags": [
      "coledocolitiase",
      "sindrome-colestatica",
      "colangiopressonancia",
      "vias-biliares"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 43 anos, sexo feminino, internada em enfermaria de cirurgia. Refere icterícia, colúria e acolia, iniciadas há 72 horas. Paciente nega tabagismo, comorbidades ou episódios semelhantes previamente. Exame físico: icterícia (+++/4+), dor à palpação profunda de hipocôndrio direito; frequência cardíaca de 83 bpm; pressão arterial de 123 x 76 mmHg; temperatura axilar de 37,4 °C. Ultrassonografia de abdome: presença de múltiplas imagens móveis e arredondadas, de 0,5 a 1 cm de diâmetro, e dilatação de vias biliares intra e extra-hepáticas.\n\nExames laboratoriais:\n\n| Exame | Resultado | Valor de referência |\n|---|---|---|\n| Hematócrito | 50% | 38 a 52% |\n| Leucócitos totais | 9.000/mL | 4.000 a 11.000/mL |\n| Bastões | 3% | 0 a 5% |\n| Creatinina | 0,9 mg/dL | 0,7 a 1,3 mg/dL |\n| TGO | 45 U/L | 4 a 35 U/L |\n| TGP | 38 U/L | 4 a 32 U/L |\n| Fosfatase alcalina | 760 U/L | 40 a 150 U/L |\n| Gama GT | 900 U/L | 9 a 36 U/L |\n| Bilirrubina total | 6,2 mg/dL | 0,2 mg/dL a 1,20 mg/dL |\n| Bilirrubina direta | 5,1 mg/dL | 0,1 a 0,4 mg/dL |\n| Amilase | 80 U/L | 28 a 100 U/L |\n\nNesse momento, quais são, respectivamente, o diagnóstico sindrômico e o exame complementar mais indicados para prosseguir à investigação?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Síndrome colestática sem colangite; tomografia de abdome com contraste venoso.",
        "explanation": "Incorreta: A tomografia tem baixa sensibilidade para cálculos biliares radiotransparentes (de colesterol) em comparação com a colangiorressonância.",
        "communityPct": 12.0
      },
      {
        "letter": "B",
        "text": "Síndrome colestática com colangite; ressonância nuclear magnética de vias biliares.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "Síndrome colestática sem colangite; ressonância nuclear magnética de vias biliares.",
        "explanation": "A alternativa **C** está correta. Paciente com icterícia à custa de bilirrubina direta (5,1 mg/dL), colúria, acolia, elevação acentuada de fosfatase alcalina (760 U/L) e GGT (900 U/L) e dilatação biliar à ultrassonografia (com colelitíase) apresenta **síndrome colestática** por provável coledocolitíase. Como não há febre alta (37,4 °C), leucocitose, hipotensão ou alteração do sensório, **não há critérios de colangite aguda** (Tokyo Guidelines 2018). Para confirmação não invasiva de cálculo no colédoco antes de indicar CPRE terapêutica, o exame de escolha é a **colangiorressonância (RNM de vias biliares)**.\n- **B e D) Incorretas:** Não há colangite aguda (ausência de febre ≥ 38 °C, leucocitose ou proteína inflamatória elevada), não se justificando CPRE diagnóstica direta sem evidência de cálculo no colédoco ou colangite.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Síndrome colestática com colangite; colangiopancreatografia retrógrada endoscópica.",
        "explanation": "Incorreta: A alternativa correta é a C.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **C** está correta. Paciente com icterícia à custa de bilirrubina direta (5,1 mg/dL), colúria, acolia, elevação acentuada de fosfatase alcalina (760 U/L) e GGT (900 U/L) e dilatação biliar à ultrassonografia (com colelitíase) apresenta **síndrome colestática** por provável coledocolitíase. Como não há febre alta (37,4 °C), leucocitose, hipotensão ou alteração do sensório, **não há critérios de colangite aguda** (Tokyo Guidelines 2018). Para confirmação não invasiva de cálculo no colédoco antes de indicar CPRE terapêutica, o exame de escolha é a **colangiorressonância (RNM de vias biliares)**.\n- **A) Incorreta:** A tomografia tem baixa sensibilidade para cálculos biliares radiotransparentes (de colesterol) em comparação com a colangiorressonância.\n- **B e D) Incorretas:** Não há colangite aguda (ausência de febre ≥ 38 °C, leucocitose ou proteína inflamatória elevada), não se justificando CPRE diagnóstica direta sem evidência de cálculo no colédoco ou colangite.",
    "perolaClinica": "Paciente com icterícia à custa de bilirrubina direta (5,1 mg/dL), colúria, acolia, elevação acentuada de fosfatase alcalina (760 U/L) e GGT (900 U/L) e dilatação biliar à ultrassonografia (com colelitíase) apresenta **síndrome colestática** por provável coledocolitíase.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Diferenciação entre síndrome colestática e colangite aguda e escolha da colangiorressonância.",
      "raciocinioChave": "Icterícia com predomínio de bilirrubina direta, elevação de FA/GGT e dilatação biliar à ultrassonografia sem febre alta (37,4 °C), leucocitose ou disfunção orgânica configuram síndrome colestática sem colangite. Como não há indicação de drenagem de urgência por CPRE nem diagnóstico definitivo do cálculo no colédoco, o exame de escolha de alta acurácia é a colangiorressonância.",
      "armadilhaBanca": "Diagnosticar colangite aguda na ausência de febre/leucocitose ou indicar TC em vez de colangiorressonância na suspeita de coledocolitíase."
    },
    "mapaDistratores": {
      "A": "A tomografia computadorizada tem baixa sensibilidade para detectar cálculos biliares de colesterol (radiotransparentes) no colédoco quando comparada à ressonância magnética das vias biliares.",
      "B": "Não há critérios clínicos ou laboratoriais de colangite aguda (ausência de febre > 38 °C, leucocitose, hipotensão ou alteração neurológica pelos critérios de Tóquio).",
      "D": "Além de não haver colangite aguda no quadro apresentado, a CPRE é um procedimento invasivo terapêutico indicado após confirmação de coledocolitíase ou na colangite aguda, e não para investigação inicial não complicada."
    }
  },
  {
    "id": "q-enamed-2025-099",
    "code": "Q-ENAMED25-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Rotura Prematura de Membranas Ovulares",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-rotura-prematura-de-membranas-ovulares",
    "tags": [
      "rotura-prematura-de-membranas",
      "prematuridade",
      "conduta-expectante",
      "obstetricia"
    ],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENAMED",
    "instituicao": "ENAMED",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2025,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta de 28 anos, com 33 semanas de gestação, pré-natal de risco habitual, chega ao pronto-atendimento obstétrico relatando saída de líquido claro pela vagina há cerca de 2 horas. Ao exame físico, sinais vitais normais, tônus uterino normal, não há presença de contrações, altura uterina é compatível com a idade gestacional, movimentos fetais presentes e frequência cardíaca fetal de 140 bpm. Ao exame especular, nota-se saída de líquido amniótico claro pelo orifício externo do colo uterino.\n\nApós a prescrição de antibiótico e corticoterapia antenatal, a conduta adequada a ser adotada é prescrever",
    "alternativas": [
      {
        "letter": "A",
        "text": "internação hospitalar e monitoramento materno-fetal diário.",
        "explanation": "A alternativa **A** está correta. Trata-se de **rotura prematura de membranas ovulares pré-termo (RPMO-PT)** com **33 semanas** (< 34 semanas), sem sinais de corioamnionite, trabalho de parto ou sofrimento fetal. Conforme o protocolo da FEBRASGO e do Ministério da Saúde, entre 24 e 34 semanas indica-se conduta conservadora (expectante) com **internação hospitalar**, antibioticoterapia para prolongamento da latência e profilaxia de GBS, corticoterapia antenatal para maturação pulmonar e **monitoramento materno-fetal diário** (curva térmica, hemograma/PCR, dinâmica uterina, BCF/cardiotocografia) até atingir 34 semanas (ou antes se houver infecção/sofrimento fetal).\n- **C e D) Incorretas:** Paciente com RPMO pré-termo confirmada deve permanecer **internada** para vigilância rigorosa de corioamnionite e prolapso de cordão, nunca receber alta para seguimento domiciliar.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "internação hospitalar, cardiotocografia e indução imediata do parto.",
        "explanation": "Incorreta: A interrupção imediata antes de 34 semanas sem sinais de infecção ou sofrimento fetal aumenta morbimortalidade neonatal por prematuridade.",
        "communityPct": 12.0
      },
      {
        "letter": "C",
        "text": "alta, repouso domiciliar e monitoramento materno-fetal ambulatorial diário.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      },
      {
        "letter": "D",
        "text": "alta, repouso domiciliar e monitoramento materno-fetal ambulatorial semanal.",
        "explanation": "Incorreta: A alternativa correta é a A.",
        "communityPct": 12.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoBase": 58.4,
    "taxaAcertoGlobal": 58.4,
    "comentarioGeral": "A alternativa **A** está correta. Trata-se de **rotura prematura de membranas ovulares pré-termo (RPMO-PT)** com **33 semanas** (< 34 semanas), sem sinais de corioamnionite, trabalho de parto ou sofrimento fetal. Conforme o protocolo da FEBRASGO e do Ministério da Saúde, entre 24 e 34 semanas indica-se conduta conservadora (expectante) com **internação hospitalar**, antibioticoterapia para prolongamento da latência e profilaxia de GBS, corticoterapia antenatal para maturação pulmonar e **monitoramento materno-fetal diário** (curva térmica, hemograma/PCR, dinâmica uterina, BCF/cardiotocografia) até atingir 34 semanas (ou antes se houver infecção/sofrimento fetal).\n- **B) Incorreta:** A interrupção imediata antes de 34 semanas sem sinais de infecção ou sofrimento fetal aumenta morbimortalidade neonatal por prematuridade.\n- **C e D) Incorretas:** Paciente com RPMO pré-termo confirmada deve permanecer **internada** para vigilância rigorosa de corioamnionite e prolapso de cordão, nunca receber alta para seguimento domiciliar.",
    "perolaClinica": "Trata-se de **rotura prematura de membranas ovulares pré-termo (RPMO-PT)** com **33 semanas** (< 34 semanas), sem sinais de corioamnionite, trabalho de parto ou sofrimento fetal.",
    "referencias": [
      "ENAMED 2025 — Caderno 01 Outubro/2025 (INEP/MEC — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enamed-2025-caderno-01",
    "analiseBanca": {
      "conceitoCentral": "Conduta conservadora hospitalar na rotura prematura de membranas ovulares pré-termo (< 34 semanas).",
      "raciocinioChave": "Gestante com 33 semanas e RPMO confirmada sem sinais de corioamnionite, trabalho de parto ou sofrimento fetal tem indicação de manejo expectante entre 24 e 34 semanas. Após corticoterapia antenatal e antibioticoprofilaxia de latência/GBS, deve permanecer internada sob vigilância materno-fetal diária.",
      "armadilhaBanca": "Dar alta hospitalar na RPMO pré-termo ou interromper a gestação antes das 34 semanas sem sinais de infecção ou sofrimento fetal."
    },
    "mapaDistratores": {
      "B": "A indução imediata do parto antes de 34 semanas sem infecção materna ou sofrimento fetal expõe o recém-nascido a riscos evitáveis da prematuridade.",
      "C": "O acompanhamento ambulatorial com alta domiciliar é inadequado na RPMO pré-termo pelo risco de corioamnionite subclínica, prolapso de cordão e descolamento prematuro de placenta.",
      "D": "A alta com seguimento ambulatorial semanal retarda o reconhecimento precoce de complicações infecciosas e fetais agudas graves inerentes à bolsa rota."
    }
  }
];
