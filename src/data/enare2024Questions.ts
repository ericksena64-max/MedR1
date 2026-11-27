import type { MedicalQuestion } from '../types/medical';

/**
 * Prova ENARE 2024/2025 — Acesso Direto Tipo 1 (Outubro/2024) — 97 questões válidas (3 anuladas no gabarito definitivo omitidas: Q42, Q56 e Q84).
 * Gerado a partir de data/provas/enare-2024.md / data/provas/enare-2024.jsonl.
 */
export const ENARE_2024_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-enare-2024-001",
    "code": "Q-ENARE24-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Anemias Carenciais",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-anemias-carenciais",
    "tags": ["anemia-megaloblastica","deficiencia-de-vitamina-b12","cianocobalamina","macrocitose"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 60 anos foi internada para investigação de anemia associada a déficit cognitivo. O médico percebeu lentidão de raciocínio e redução da capacidade executiva. A paciente estava atenta e cooperando com o examinador quando se queixou de parestesias (dormência e queimação) simétricas em ambos os membros inferiores. Em relação à anemia, havia macrocitose e reticulocitopenia. O nível de vitamina B12 sérica foi 125 pg/mL (normal: acima de 200 pg/mL).\n\nDiante desse quadro clínico, além da investigação da causa da anemia, deve-se proceder à reposição:",
    "alternativas": [
      {
        "letter": "A",
        "text": "oral de cianocobalamina (1000 microgramas por dia) e manutenção da mesma dose uma vez por mês;",
        "explanation": "Incorreta: Em quadros neurológicos graves, prefere-se reposição parenteral inicial, e a manutenção oral requer doses diárias (1.000–2.000 mcg/dia), não mensais.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "de cianocobalamina parenteral (1000 microgramas por dia) e manutenção da mesma dose por via oral a cada mês;",
        "explanation": "Incorreta: A manutenção oral mensal de 1.000 mcg é insuficiente para manter níveis adequados de cobalamina.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "de cianocobalamina intramuscular (1000 microgramas por dia) e posterior injeção intramuscular uma vez por semana até reavaliação dos sintomas e investigação da causa;",
        "explanation": "A alternativa **C** está correta. Na deficiência grave de vitamina B12 acompanhada de manifestações neurológicas ou neuropsiquiátricas (parestesias simétricas e déficit cognitivo), as diretrizes hematológicas (BSH / UpToDate / Harrison) recomendam reposição parenteral inicial — cianocobalamina 1.000 mcg IM diariamente (ou em dias alternados) na primeira semana, seguida de aplicações semanais até resolução/reavaliação clínica e definição etiológica, garantindo biodisponibilidade imediata independentemente de má absorção.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "de hidroxicobalamina parenteral ou oral três vezes por semana seguida da dose de 1000 microgramas, uma vez por semana, para o resto da vida;",
        "explanation": "Incorreta: A via oral não é preferencial no ataque de quadro neurológico e a manutenção vitalícia semanal não é o esquema padrão (geralmente mensal após normalização, dependendo da causa).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "de hidroxicobalamina parenteral (1000 microgramas por dia) até a mitigação dos sintomas.",
        "explanation": "Incorreta: Suspender a reposição assim que os sintomas melhoram, sem esquema de manutenção e sem definição da causa (ex.: anemia perniciosa), leva à recidiva neurológica.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Na deficiência grave de vitamina B12 acompanhada de manifestações neurológicas ou neuropsiquiátricas (parestesias simétricas e déficit cognitivo), as diretrizes hematológicas (BSH / UpToDate / Harrison) recomendam reposição parenteral inicial — cianocobalamina 1.000 mcg IM diariamente (ou em dias alternados) na primeira semana, seguida de aplicações semanais até resolução/reavaliação clínica e definição etiológica, garantindo biodisponibilidade imediata independentemente de má absorção.\n- **A) Incorreta:** Em quadros neurológicos graves, prefere-se reposição parenteral inicial, e a manutenção oral requer doses diárias (1.000–2.000 mcg/dia), não mensais.\n- **B) Incorreta:** A manutenção oral mensal de 1.000 mcg é insuficiente para manter níveis adequados de cobalamina.\n- **D) Incorreta:** A via oral não é preferencial no ataque de quadro neurológico e a manutenção vitalícia semanal não é o esquema padrão (geralmente mensal após normalização, dependendo da causa).\n- **E) Incorreta:** Suspender a reposição assim que os sintomas melhoram, sem esquema de manutenção e sem definição da causa (ex.: anemia perniciosa), leva à recidiva neurológica.",
    "perolaClinica": "Na deficiência grave de vitamina B12 acompanhada de manifestações neurológicas ou neuropsiquiátricas (parestesias simétricas e déficit cognitivo), as diretrizes hematológicas (BSH / UpToDate / Harrison) recomendam reposi",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-002",
    "code": "Q-ENARE24-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "HIV/AIDS e Infecções Oportunistas",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-hiv-aids-e-infeccoes-oportunistas",
    "tags": ["hiv-aids","sindrome-de-reconstituicao-imune","corticoterapia","tarv"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Após o início de tratamento antirretroviral (TARV) há 1 mês, um paciente com síndrome consumptiva, candidíase e diarreia crônica foi internado por outras manifestações. O grupo de residentes da clínica médica percebeu, durante os primeiros três dias de internação, febre vespertina, linfadenomegalias cervicais e axilares com fistulização e constipação intestinal com cólicas abdominais. Os exames demonstraram anemia e VHS e PCR elevados, bem como imagens reticulonodulares difusas e bilaterais em ambos os hemitóraces. As tomografias reforçaram os infiltrados reticulonodulares com linfadenomegalias mediastinais com centro necrótico, além de linfadenomegalias mesentéricas com espessamento de íleo distal. O paciente piorou clinicamente, apresentando-se prostrado e com hipoxemia no 4º dia de internação. A contagem de linfócitos CD4 no início do tratamento era de 45 células/mm³ e a PPD (prova tuberculínica anérgica) era 0 mm.\n\nDiante do exposto, a conduta mais adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "suspender a TARV até finalizar a investigação para infecções intestinais relacionadas ao HIV;",
        "explanation": "Incorreta: A suspensão da TARV piora o prognóstico imunológico e aumenta mortalidade em pacientes com CD4 < 50 células/mm³.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "proceder à biópsia de linfonodo por provável diagnóstico de linfoma;",
        "explanation": "Incorreta: A apresentação com linfonodos necróticos fistulizantes e padrão reticulonodular miliar pós-TARV aponta fortemente para tuberculose/SIRI, não justificando focar apenas em linfoma sem manejo da reação imune.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "iniciar tratamento empírico para tuberculose e micobactérias atípicas e prescrever procinéticos e laxativos;",
        "explanation": "Incorreta: Procinéticos e laxativos não resolvem o espessamento ileal/linfadenopatia mesentérica e podem ser prejudiciais em suboclusão; além disso, omitiu o manejo da SIRI.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "realizar biópsia de linfonodo e coleta de escarro para análise de baciloscopia, teste rápido molecular para tuberculose e cultura para micobactéria; suspender a TARV e avaliar início de corticoide;",
        "explanation": "Incorreta: Embora a investigação microbiológica e histopatológica seja válida, a recomendação de suspender a TARV torna a alternativa incorreta.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "manter a TARV e acrescentar corticoide até o final da investigação, devido a reação imune.",
        "explanation": "A alternativa **E** está correta. O paciente com imunossupressão avançada (CD4 = 45 células/mm³) desenvolveu, 1 mês após iniciar TARV, quadro clássico de Síndrome Inflamatória de Reconstituição Imune (SIRI) desmascarando provável tuberculose disseminada (linfonodos necróticos, fistulização, infiltrado miliar/reticulonodular, hipoxemia). Segundo o PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde), na SIRI **não se deve suspender a TARV** (exceto em situações de risco imediato à vida refratárias, como meningite criptocócica com hipertensão intracraniana grave), devendo-se manter a TARV e associar corticoterapia sistêmica nas formas moderadas a graves enquanto se conduz a investigação/tratamento da infecção oportunista.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. O paciente com imunossupressão avançada (CD4 = 45 células/mm³) desenvolveu, 1 mês após iniciar TARV, quadro clássico de Síndrome Inflamatória de Reconstituição Imune (SIRI) desmascarando provável tuberculose disseminada (linfonodos necróticos, fistulização, infiltrado miliar/reticulonodular, hipoxemia). Segundo o PCDT de Manejo da Infecção pelo HIV em Adultos (Ministério da Saúde), na SIRI **não se deve suspender a TARV** (exceto em situações de risco imediato à vida refratárias, como meningite criptocócica com hipertensão intracraniana grave), devendo-se manter a TARV e associar corticoterapia sistêmica nas formas moderadas a graves enquanto se conduz a investigação/tratamento da infecção oportunista.\n- **A) Incorreta:** A suspensão da TARV piora o prognóstico imunológico e aumenta mortalidade em pacientes com CD4 < 50 células/mm³.\n- **B) Incorreta:** A apresentação com linfonodos necróticos fistulizantes e padrão reticulonodular miliar pós-TARV aponta fortemente para tuberculose/SIRI, não justificando focar apenas em linfoma sem manejo da reação imune.\n- **C) Incorreta:** Procinéticos e laxativos não resolvem o espessamento ileal/linfadenopatia mesentérica e podem ser prejudiciais em suboclusão; além disso, omitiu o manejo da SIRI.\n- **D) Incorreta:** Embora a investigação microbiológica e histopatológica seja válida, a recomendação de suspender a TARV torna a alternativa incorreta.",
    "perolaClinica": "O paciente com imunossupressão avançada (CD4 = 45 células/mm³) desenvolveu, 1 mês após iniciar TARV, quadro clássico de Síndrome Inflamatória de Reconstituição Imune (SIRI) desmascarando provável tuberculose disseminada ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-003",
    "code": "Q-ENARE24-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Fibromialgia e Dor Crônica",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-fibromialgia-e-dor-cronica",
    "tags": ["lombalgia","sinais-de-alarme","red-flags","ressonancia-magnetica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante o atendimento ambulatorial, José, de 68 anos, queixou-se de dor toracolombar de intensidade moderada, constante, iniciada há 3 semanas. Foi associada a dormência nas duas pernas, havendo piora da dor quando ele ficava muito tempo em pé e melhora quando se sentava ou se deitava. O paciente já estava em tratamento para diabetes mellitus há 10 anos, com elevação recente da dose de metformina para 2 g/dia. Segundo ele, a glicemia estava bem controlada, mas o tabagismo e o alcoolismo persistiam (75 maços x ano e 40 g de álcool por dia). Na anamnese dirigida, revelou-se constipação de início recente, sem mudança do volume ou consistência das fezes. Não houve qualquer outra queixa ou sintoma relatado. No exame físico, notam-se dor à palpação da musculatura paravertebral bilateralmente, bem como dor em queimação agravada em flexão de quadril e coxa. Sinais de Lasègue e Kernig positivos bilateralmente. O restante do exame físico não mostrou alterações.\n\nConsiderando o quadro exposto, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "uma conduta mais agressiva deve ser adotada, com investigação de tumores devido à idade e ao tabagismo, apesar de se tratar de uma dor lombar aguda;",
        "explanation": "Incorreta: A banca considerou que, na ausência de perda ponderal, dor noturna progressiva ou déficit motor focal, não se adota investigação oncológica invasiva imediata apenas pela idade e tabagismo.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a ressonância de coluna torácica e lombar é obrigatória devido à localização da dor, ao tempo de acometimento e aos sinais neurológicos;",
        "explanation": "Incorreta: A RNM imediata é obrigatória na suspeita de síndrome da cauda equina, mielopatia progressiva ou abscesso epidural, não apenas pela duração de 3 semanas.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "radiografia de tórax, VHS, proteína C-reativa e hemograma devem ser solicitados, mas pode ser necessário solicitar também uma ressonância nuclear magnética (RNM) de coluna torácica e lombar se as medidas comportamentais e analgesia não melhorarem;",
        "explanation": "A alternativa **C** está correta conforme o gabarito definitivo da banca (FGV/ENARE). Em idoso tabagista pesado com dor toracolombar há 3 semanas (aguda) sem déficit motor grave nem síndrome da cauda equina estabelecida, recomenda-se investigação laboratorial inicial (hemograma, VHS, PCR) e radiografia de tórax (pelo risco neoplásico pulmonar), reservando a RNM de coluna toracolombar para casos com falha clínica ou suspeita persistente de compressão/lesão estrutural (diretrizes ACP / UpToDate para abordagem de lombalgia aguda).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "a dor lombar em pessoa acima de 50 anos deve ser sempre investigada, independentemente dos sintomas e sinais associados. O principal exame é a ressonância nuclear magnética (RNM) de coluna lombar com contraste venoso;",
        "explanation": "Incorreta: Idade > 50 anos isoladamente, sem outros sinais de alarme, não torna obrigatória a RNM com contraste para todos os pacientes.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "os sinais de alarme associados a dor lombar subaguda ou crônica (respectivamente, 4 a 12 semanas e mais de 12 semanas) em indivíduos com mais de 50 anos são desnecessários para indicação de exame específico, pois todos esses pacientes devem ter exame de imagem.",
        "explanation": "Incorreta: Sinais de alarme continuam sendo fundamentais para racionalizar exames de imagem na lombalgia em maiores de 50 anos.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta conforme o gabarito definitivo da banca (FGV/ENARE). Em idoso tabagista pesado com dor toracolombar há 3 semanas (aguda) sem déficit motor grave nem síndrome da cauda equina estabelecida, recomenda-se investigação laboratorial inicial (hemograma, VHS, PCR) e radiografia de tórax (pelo risco neoplásico pulmonar), reservando a RNM de coluna toracolombar para casos com falha clínica ou suspeita persistente de compressão/lesão estrutural (diretrizes ACP / UpToDate para abordagem de lombalgia aguda).\n- **A) Incorreta:** A banca considerou que, na ausência de perda ponderal, dor noturna progressiva ou déficit motor focal, não se adota investigação oncológica invasiva imediata apenas pela idade e tabagismo.\n- **B) Incorreta:** A RNM imediata é obrigatória na suspeita de síndrome da cauda equina, mielopatia progressiva ou abscesso epidural, não apenas pela duração de 3 semanas.\n- **D) Incorreta:** Idade > 50 anos isoladamente, sem outros sinais de alarme, não torna obrigatória a RNM com contraste para todos os pacientes.\n- **E) Incorreta:** Sinais de alarme continuam sendo fundamentais para racionalizar exames de imagem na lombalgia em maiores de 50 anos.",
    "perolaClinica": "conforme o gabarito definitivo da banca (FGV/ENARE).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-004",
    "code": "Q-ENARE24-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Infecções de Pele e Partes Moles",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-infeccoes-de-pele-e-partes-moles",
    "tags": ["herpes-zoster","imunossupressao","aciclovir-ev","isolamento-hospitalar"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um rapaz de 18 anos foi atendido no ambulatório de clínica médica para acompanhamento de lúpus eritematoso sistêmico com nefrite e cardite. Estava em bom estado geral após 3 pulsoterapias com corticoide e ciclofosfamida, mas deveria fazer nova dose de corticoide sistêmico naquele mês. No entanto, apresentava lesões hiperemiadas com vesículas e algumas pústulas em dermátomos oftálmico e maxilar da hemiface direita. A impressão do médico foi de herpes-zóster.\n\nA conduta adequada para esse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "prescrição de aciclovir oral 800 mg, 5 vezes ao dia, por 14 dias, e encaminhar o paciente para casa;",
        "explanation": "Incorreta: Terapia oral ambulatorial é inadequada em imunossuprimido grave com acometimento multidermatomal e ramo oftálmico.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "profilaxia dos contactantes domiciliares e hospitalares com a vacina contra varicela-zóster, independentemente do estado de imunização, do estado imunológico e do tempo de exposição;",
        "explanation": "Incorreta: A vacina de varicela (vírus vivo atenuado) é contraindicada em imunossuprimidos e gestantes, e sua indicação pós-exposição depende do status imune e da janela de tempo (até 5 dias).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "internação hospitalar para isolamento respiratório e de contato, prescrição de aciclovir parenteral e acompanhamento de complicações pelo herpes-zóster disseminado;",
        "explanation": "A alternativa **C** está correta. Trata-se de paciente gravemente imunossuprimido (pulsoterapia com corticoide + ciclofosfamida) com herpes-zóster acometendo múltiplos dermátomos (V1 oftálmico e V2 maxilar — alto risco de ceratite, necrose retiniana e disseminação). Segundo o Guia de Vigilância em Saúde (Ministério da Saúde) e o CDC/IDSA, impõe-se internação hospitalar, **precauções para aerossóis (isolamento respiratório) e contato**, além de **aciclovir endovenoso (10 mg/kg 8/8h)** e avaliação oftalmológica/vigilância de complicações.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "prescrição de aciclovir parenteral apenas se o rash e as vesículas tiverem iniciado há menos de 72 horas. Caso contrário, fazer apenas a profilaxia dos contactantes com vacina e do paciente com antibiótico devido à alta prevalência de infecção bacteriana secundária;",
        "explanation": "Incorreta: Em imunossuprimidos ou acometimento oftálmico/disseminado, o aciclovir venoso é indicado mesmo após 72 horas do início das lesões enquanto houver vesículas ativas.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "internação hospitalar em quarto com pressão negativa e precauções de contato como máscara cirúrgica, capote, luva, gorro e óculos para toda a equipe assistencial. O aciclovir de 800 mg pode ser feito de forma oral, 5 vezes ao dia, por 7 a 10 dias ou até a alta hospitalar.",
        "explanation": "Incorreta: Para isolamento de aerossóis exige-se máscara N95/PFF2 (não cirúrgica) e a terapia deve ser parenteral, não oral.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Trata-se de paciente gravemente imunossuprimido (pulsoterapia com corticoide + ciclofosfamida) com herpes-zóster acometendo múltiplos dermátomos (V1 oftálmico e V2 maxilar — alto risco de ceratite, necrose retiniana e disseminação). Segundo o Guia de Vigilância em Saúde (Ministério da Saúde) e o CDC/IDSA, impõe-se internação hospitalar, **precauções para aerossóis (isolamento respiratório) e contato**, além de **aciclovir endovenoso (10 mg/kg 8/8h)** e avaliação oftalmológica/vigilância de complicações.\n- **A) Incorreta:** Terapia oral ambulatorial é inadequada em imunossuprimido grave com acometimento multidermatomal e ramo oftálmico.\n- **B) Incorreta:** A vacina de varicela (vírus vivo atenuado) é contraindicada em imunossuprimidos e gestantes, e sua indicação pós-exposição depende do status imune e da janela de tempo (até 5 dias).\n- **D) Incorreta:** Em imunossuprimidos ou acometimento oftálmico/disseminado, o aciclovir venoso é indicado mesmo após 72 horas do início das lesões enquanto houver vesículas ativas.\n- **E) Incorreta:** Para isolamento de aerossóis exige-se máscara N95/PFF2 (não cirúrgica) e a terapia deve ser parenteral, não oral.",
    "perolaClinica": "Trata-se de paciente gravemente imunossuprimido (pulsoterapia com corticoide + ciclofosfamida) com herpes-zóster acometendo múltiplos dermátomos (V1 oftálmico e V2 maxilar — alto risco de ceratite, necrose retiniana e di",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-005",
    "code": "Q-ENARE24-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Mieloma Múltiplo e Gamopatias",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-mieloma-multiplo-e-gamopatias",
    "tags": ["sindrome-poems","gamopatia-monoclonal","eletroforese-de-proteinas","imunofixacao"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 49 anos foi internada na enfermaria de clínica médica por quadro de síndrome consumptiva, ascite e fraqueza em membros inferiores. A paciente conta que tudo começou 1 ano antes com dormência nas pernas ascendendo até o meio da perna e posterior redução de força em membros inferiores. Naquela época, houve turvação visual e cefaleia. Com aproximadamente 4 meses de sintomas, sem limitação para trabalhar e realizar as tarefas da vida diária, a cefaleia e a turvação visual ficaram mais proeminentes. Segundo a paciente, foram realizados diversos exames (ressonância de crânio, coluna cervical e lombar), sem evidência de alterações. A pressão do liquor estava alta, motivando o uso de acetazolamida por 8 meses (até a internação). No dia da internação, pôde-se observar hepatoesplenomegalia, ascite de grande volume, déficit sensitivo-motor distal em membros inferiores com hiporreflexia, fenômeno de Raynaud, cistos em tireoide (ultrassom confirmando e uso prévio de levotiroxina) e lesões cutâneas hipercrômicas. Outros exames demonstraram lesões osteoescleróticas em esterno, derrame pleural e pericárdico e padrão de polirradiculoneuropatia desmielinizante crônica.\n\nA conduta adequada para o quadro é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "dosagem de fator reumatoide, fator antinuclear, anti-Scl-70, anticentrômero e pulsoterapia por provável doença do tecido conjuntivo indiferenciada ou sobreposição de lúpus com esclerodermia em evolução grave;",
        "explanation": "Incorreta: Embora haja fenômeno de Raynaud e serosite, a combinação de polineuropatia desmielinizante crônica com lesões osteoescleróticas e organomegalia define POEMS, não colagenose.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "dosagem de eletroforese de proteínas séricas e urinárias com imunofixação em busca de pico monoclonal;",
        "explanation": "A alternativa **B** está correta. O caso reúne os critérios clássicos da **Síndrome POEMS**: **P**olineuropatia desmielinizante crônica, **O**rganomegalia (hepatoesplenomegalia), **E**ndocrinopatia (hipotireoidismo), **M**onoclonalidade (distúrbio plasmocitário — critério obrigatório junto com a polineuropatia) e **S**kin changes (hiperpigmentação), além de lesões osteoescleróticas, papiledema/hipertensão intracraniana e sobrecarga extravascular (ascite, derrame pleural e pericárdico). Segundo os critérios diagnósticos do International Myeloma Working Group (IMWG), a investigação obrigatória inclui eletroforese de proteínas séricas e urinárias com **imunofixação** para identificar o componente monoclonal (geralmente cadeia leve lambda).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "biópsia de gordura abdominal em busca de proteína amiloide;",
        "explanation": "Incorreta: Amiloidose sistêmica cursa tipicamente com neuropatia axonal (não desmielinizante) e sem lesões osteoescleróticas.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "biópsia de peritônio se o gradiente soro-ascite for menor que 1,1;",
        "explanation": "Incorreta: A ascite na síndrome POEMS decorre de hiperpermeabilidade vascular mediada por VEGF, não exigindo biópsia peritoneal como exame definidor.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "punção aspirativa de cisto tireoidiano.",
        "explanation": "Incorreta: Cistos tireoidianos simples não explicam o quadro sistêmico.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. O caso reúne os critérios clássicos da **Síndrome POEMS**: **P**olineuropatia desmielinizante crônica, **O**rganomegalia (hepatoesplenomegalia), **E**ndocrinopatia (hipotireoidismo), **M**onoclonalidade (distúrbio plasmocitário — critério obrigatório junto com a polineuropatia) e **S**kin changes (hiperpigmentação), além de lesões osteoescleróticas, papiledema/hipertensão intracraniana e sobrecarga extravascular (ascite, derrame pleural e pericárdico). Segundo os critérios diagnósticos do International Myeloma Working Group (IMWG), a investigação obrigatória inclui eletroforese de proteínas séricas e urinárias com **imunofixação** para identificar o componente monoclonal (geralmente cadeia leve lambda).\n- **A) Incorreta:** Embora haja fenômeno de Raynaud e serosite, a combinação de polineuropatia desmielinizante crônica com lesões osteoescleróticas e organomegalia define POEMS, não colagenose.\n- **C) Incorreta:** Amiloidose sistêmica cursa tipicamente com neuropatia axonal (não desmielinizante) e sem lesões osteoescleróticas.\n- **D) Incorreta:** A ascite na síndrome POEMS decorre de hiperpermeabilidade vascular mediada por VEGF, não exigindo biópsia peritoneal como exame definidor.\n- **E) Incorreta:** Cistos tireoidianos simples não explicam o quadro sistêmico.",
    "perolaClinica": "O caso reúne os critérios clássicos da **Síndrome POEMS**: **P**olineuropatia desmielinizante crônica, **O**rganomegalia (hepatoesplenomegalia), **E**ndocrinopatia (hipotireoidismo), **M**onoclonalidade (distúrbio plasmo",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-006",
    "code": "Q-ENARE24-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Lúpus Eritematoso Sistêmico",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-lupus-eritematoso-sistemico",
    "tags": ["lupus-eritematoso-sistemico","anemia-hemolitica-autoimune","corticoterapia","autoanticorpos"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 20 anos se queixa de edema generalizado iniciado há 3 semanas, que evoluiu com piora progressiva. Relata hiporexia e astenia nesse período. Desconhece ser portadora de doenças atuais ou prévias e não faz uso de quaisquer medicamentos ou drogas. Ao exame físico, PA: 160 x 90 mmHg, FC: 97 bpm, FR: 22 ipm, SpO2 98% (em ar ambiente). As mucosas estão hipocoradas, ictéricas e hidratadas. Há edema na face, pálpebras, parede abdominal e membros inferiores. Há também ascite e síndrome de derrame pleural.\n\nExames de laboratório: sangue: Hb: 7,0 g/dL; Hct: 24%; VCM: 98 fL; HCM: 31 pg; CHCM: 32 g/dL; RDW: 18,3%; leucócitos: 3.400/mm³; neutrófilos segmentados: 1.500/mm³; linfócitos: 700/mm³; Plq.: 201.000/mm³; PCR: 28 mg/dL; FAN reagente: 1:320 padrão nuclear homogêneo; anti-DNA reagente; anti-SSA reagente; anti-SSB reagente; anti-Sm reagente; ANCA não reagente; C3: 43 mg/dL (90-170 mg/dL); C4: 10 mg/dL (VR: 12-36 mg/dL); exame de urina: densidade 1.020; pH 6,0; nitrito negativo; proteínas ++++; hemoglobina ++; 4 piócitos/campo, 145 hemácias/campo; presença de cilindros hemáticos. Para investigação da anemia apresentada pela paciente, são solicitados os seguintes exames: LDL: 1150 UI/L (VR: 120-246 UI/L); BT: 4,2 mg/dL; BD: 0,4 mg/dL; reticulócitos: 18%, Coombs direto positivo; ferro sérico: 52 mcg/dL (VR: 65-175 mcg/dL); ferritina 650 ng/mL (VR: 10-291 ng/mL); capacidade total de ligação do ferro: 200 mcg/dL (250-425 mcg/dL).\n\nA conduta imediata mais adequada para o tratamento da anemia é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administração de eritropoetina;",
        "explanation": "Incorreta: A medula está hiperproliferativa (reticulócitos 18%), não havendo déficit de eritropoetina.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "administração de corticoide;",
        "explanation": "A alternativa **B** está correta. A paciente apresenta **lúpus eritematoso sistêmico (LES)** em atividade grave (nefrite lúpica, consumo de complemento, FAN/anti-DNA/anti-Sm positivos) complicado por **anemia hemolítica autoimune (AHAI) por anticorpos quentes** (Hb 7,0 g/dL, reticulocitose 18%, DHL 1150 UI/L, hiperbilirrubinemia indireta, Coombs direto positivo). Conforme as diretrizes da EULAR/SBR para LES e hematologia, a terapia de primeira linha imediata para AHAI é **corticoterapia sistêmica** (prednisona 1 mg/kg/dia ou pulsoterapia com metilprednisolona, que também trata a nefrite lúpica).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "reposição de ferro parenteral;",
        "explanation": "Incorreta: Ferritina elevada (650 ng/mL) e TIBC baixa indicam perfil inflamatório/hemolítico, não deficiência de ferro.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "hemotransfusão;",
        "explanation": "Incorreta: A paciente está hemodinamicamente estável (PA 160x90, FC 97, SpO2 98%); na AHAI evita-se transfusão desnecessária pelo risco de hemólise acelerada e dificuldade de prova cruzada.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "prescrição de hidroxicloroquina oral.",
        "explanation": "Incorreta: Hidroxicloroquina é terapia de manutenção para todo paciente com LES, mas tem início de ação lento e não trata a hemólise aguda.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. A paciente apresenta **lúpus eritematoso sistêmico (LES)** em atividade grave (nefrite lúpica, consumo de complemento, FAN/anti-DNA/anti-Sm positivos) complicado por **anemia hemolítica autoimune (AHAI) por anticorpos quentes** (Hb 7,0 g/dL, reticulocitose 18%, DHL 1150 UI/L, hiperbilirrubinemia indireta, Coombs direto positivo). Conforme as diretrizes da EULAR/SBR para LES e hematologia, a terapia de primeira linha imediata para AHAI é **corticoterapia sistêmica** (prednisona 1 mg/kg/dia ou pulsoterapia com metilprednisolona, que também trata a nefrite lúpica).\n- **A) Incorreta:** A medula está hiperproliferativa (reticulócitos 18%), não havendo déficit de eritropoetina.\n- **C) Incorreta:** Ferritina elevada (650 ng/mL) e TIBC baixa indicam perfil inflamatório/hemolítico, não deficiência de ferro.\n- **D) Incorreta:** A paciente está hemodinamicamente estável (PA 160x90, FC 97, SpO2 98%); na AHAI evita-se transfusão desnecessária pelo risco de hemólise acelerada e dificuldade de prova cruzada.\n- **E) Incorreta:** Hidroxicloroquina é terapia de manutenção para todo paciente com LES, mas tem início de ação lento e não trata a hemólise aguda.",
    "perolaClinica": "A paciente apresenta **lúpus eritematoso sistêmico (LES)** em atividade grave (nefrite lúpica, consumo de complemento, FAN/anti-DNA/anti-Sm positivos) complicado por **anemia hemolítica autoimune (AHAI) por anticorpos qu",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-007",
    "code": "Q-ENARE24-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Doenças Pulmonares Intersticiais",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-doencas-pulmonares-intersticiais",
    "tags": ["pneumonia-em-organizacao","boop","doenca-pulmonar-intersticial","tomografia-computadorizada"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A pneumonia em organização criptogênica (POC) tem sua forma idiopática de pneumonia em organização, anteriormente chamada de bronquiolite obliterante com pneumonia em organização (BOOP). É uma doença pulmonar intersticial difusa decorrente de lesão na parede alveolar tipicamente caracterizada por infiltrados pulmonares periféricos e difusos com áreas de preenchimento alveolar e responsividade a terapia sistêmica com glicocorticoides. A manifestação clínica é de uma pneumonia subaguda ou de difícil resolução, com tosse pouco produtiva, dispneia, febre baixa e fraqueza ou cansaço. No entanto, há diversas condições autoimunes, pneumonias de hipersensibilidade e efeitos colaterais que devem ser excluídos para que a POC seja dada como idiopática.\n\nEm uma análise mais profunda sobre a POC, o quadro descrito acima pode indicar pneumonia em organização caso se verifique(m):",
    "alternativas": [
      {
        "letter": "A",
        "text": "paciente com tosse, febre e dispneia há 3 semanas e imagem apical fibrótica e cavitação adjacente;",
        "explanation": "Incorreta: Imagem apical fibrótica com cavitação e sintomas por 3 semanas sugere tuberculose pulmonar.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "aspecto tomográfico reticulonodular difuso em paciente com dispneia importante iniciada há 1 semana;",
        "explanation": "Incorreta: Padrão reticulonodular difuso agudo sugere tuberculose miliar, linfangite carcinomatosa ou infecção viral/fúngica disseminada.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "aspecto radiográfico de consolidação lobar em paciente com febre alta de início recente;",
        "explanation": "Incorreta: Consolidação lobar com febre alta aguda é clássica de pneumonia bacteriana adquirida na comunidade (ex.: *Streptococcus pneumoniae*).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "aspecto tomográfico de consolidação irregular do espaço aéreo, opacidades em vidro fosco e pequenas opacidades nodulares em paciente usuário de cocaína;",
        "explanation": "A alternativa **D** está correta. O padrão tomográfico clássico da pneumonia em organização (tanto criptogênica quanto secundária — inclusive secundária à inalação de drogas como a cocaína) consiste em **consolidações irregulares/periféricas do espaço aéreo, opacidades em vidro fosco e pequenos nódulos** (podendo exibir o sinal do halo invertido), conforme diretrizes da ATS/ERS para pneumonias intersticiais idiopáticas.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "aspecto tomográfico com opacidades evanescentes, bronquiectasias e achados relacionados a impactação mucoide e obstrução brônquica em paciente com eosinofilia e broncoespasmo.",
        "explanation": "Incorreta: Bronquiectasias centrais com impactação mucoide, eosinofilia e broncoespasmo caracterizam aspergilose broncopulmonar alérgica (ABPA).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. O padrão tomográfico clássico da pneumonia em organização (tanto criptogênica quanto secundária — inclusive secundária à inalação de drogas como a cocaína) consiste em **consolidações irregulares/periféricas do espaço aéreo, opacidades em vidro fosco e pequenos nódulos** (podendo exibir o sinal do halo invertido), conforme diretrizes da ATS/ERS para pneumonias intersticiais idiopáticas.\n- **A) Incorreta:** Imagem apical fibrótica com cavitação e sintomas por 3 semanas sugere tuberculose pulmonar.\n- **B) Incorreta:** Padrão reticulonodular difuso agudo sugere tuberculose miliar, linfangite carcinomatosa ou infecção viral/fúngica disseminada.\n- **C) Incorreta:** Consolidação lobar com febre alta aguda é clássica de pneumonia bacteriana adquirida na comunidade (ex.: *Streptococcus pneumoniae*).\n- **E) Incorreta:** Bronquiectasias centrais com impactação mucoide, eosinofilia e broncoespasmo caracterizam aspergilose broncopulmonar alérgica (ABPA).",
    "perolaClinica": "O padrão tomográfico clássico da pneumonia em organização (tanto criptogênica quanto secundária — inclusive secundária à inalação de drogas como a cocaína) consiste em **consolidações irregulares/periféricas do espaço aé",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-008",
    "code": "Q-ENARE24-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "DRGE e Doenças do Esôfago",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-drge-e-doencas-do-esofago",
    "tags": ["esofagite-eosinofilica","disfagia","corticosteroide-topico","budesonida"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 31 anos, previamente saudável, apresenta-se com uma história de 2 anos de disfagia intermitente, principalmente para alimentos sólidos. Relatou 2 episódios de impactação alimentar, com necessidade de endoscopia digestiva alta de urgência. Estava em uso de esomeprazol (40 mg ao dia) há 6 meses, sem melhora significativa dos sintomas de disfagia. Realizou recentemente nova endoscopia, em que a biópsia foi compatível com esofagite eosinofílica, sem estenose esofágica. Foi orientado a restringir alimentos que pudessem estar associados com essa forma de esofagite. Contudo, não houve resposta satisfatória.\n\nNesse caso, a estratégia de intervenção mais adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "associar sucralfato antes das refeições e à noite, antes de deitar;",
        "explanation": "Incorreta: Sucralfato não atua na inflamação eosinofílica da mucosa esofágica.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "trocar esomeprazol por outro bloqueador da bomba de prótons;",
        "explanation": "Incorreta: O paciente já fez uso prolongado de IBP em dose plena (esomeprazol 40 mg/dia por 6 meses) sem resposta; trocar de IBP não é a conduta de escolha.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "encaminhar para tratamento com terapia biológica específica;",
        "explanation": "Incorreta: Imunobiológicos (como dupilumabe) ficam reservados para casos refratários aos corticoides tópicos ou doença grave/fibroestenosante recorrente.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "associar um procinético (como domperidona) antes das refeições;",
        "explanation": "Incorreta: Procinéticos não tratam esofagite eosinofílica.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "associar um esteroide tópico (como fluticasona ou budesonida) por via oral.",
        "explanation": "A alternativa **E** está correta. Segundo as diretrizes da ACG/AGA e da Federação Brasileira de Gastroenterologia (FBG), o tratamento farmacológico de primeira linha para esofagite eosinofílica refratária a IBP e dieta de eliminação é o uso de **corticosteroides tópicos deglutidos** (fluticasona em spray deglutido ou budesonida viscosa oral), que induzem remissão histológica e sintomática com baixa absorção sistêmica.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Segundo as diretrizes da ACG/AGA e da Federação Brasileira de Gastroenterologia (FBG), o tratamento farmacológico de primeira linha para esofagite eosinofílica refratária a IBP e dieta de eliminação é o uso de **corticosteroides tópicos deglutidos** (fluticasona em spray deglutido ou budesonida viscosa oral), que induzem remissão histológica e sintomática com baixa absorção sistêmica.\n- **A) Incorreta:** Sucralfato não atua na inflamação eosinofílica da mucosa esofágica.\n- **B) Incorreta:** O paciente já fez uso prolongado de IBP em dose plena (esomeprazol 40 mg/dia por 6 meses) sem resposta; trocar de IBP não é a conduta de escolha.\n- **C) Incorreta:** Imunobiológicos (como dupilumabe) ficam reservados para casos refratários aos corticoides tópicos ou doença grave/fibroestenosante recorrente.\n- **D) Incorreta:** Procinéticos não tratam esofagite eosinofílica.",
    "perolaClinica": "Segundo as diretrizes da ACG/AGA e da Federação Brasileira de Gastroenterologia (FBG), o tratamento farmacológico de primeira linha para esofagite eosinofílica refratária a IBP e dieta de eliminação é o uso de **corticos",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-009",
    "code": "Q-ENARE24-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Fibrilação Atrial e Taquiarritmias",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-fibrilacao-atrial-e-taquiarritmias",
    "tags": ["fibrilacao-atrial","estenose-mitral","anticoagulacao","varfarina"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 42 anos, com história de “reumatismo” na infância, procura ambulatório com um quadro de cansaço aos esforços. Tem história de “isquemia cerebral” há 2 anos, sem sequelas motoras. Ao exame físico, a pressão arterial é de 110 x 68 mmHg e a frequência cardíaca é de 60 batimentos por minuto. Apresenta ritmo cardíaco regular, bulhas normofonéticas e B1 acentuada. Na ausculta cardíaca, há um sopro diastólico em foco mitral. Nos exames laboratoriais, há um clearance de creatinina estimado em 46 mL/min/1,73 m². No ecocardiograma, foram observados estenose mitral moderada e episódios de fibrilação atrial no Holter de 24 horas.\n\nEm relação à prevenção de embolização sistêmica, está mais indicado o uso de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "rivaroxabana de 15 mg, uma vez ao dia;",
        "explanation": "Incorreta: Rivaroxabana foi inferior à varfarina em pacientes com FA reumática no estudo INVICTUS e é contraindicada na estenose mitral moderada a grave.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "aspirina na dosagem de 200 mg ao dia;",
        "explanation": "Incorreta: Antiagregação plaquetária com AAS não oferece proteção adequada contra tromboembolismo na FA.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "apixabana de 2,5 mg, duas vezes ao dia;",
        "explanation": "Incorreta: Apixabana (assim como os demais DOACs) não deve ser utilizada na estenose mitral moderada a importante.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "varfarina, com a dose de acordo com o INR;",
        "explanation": "A alternativa **D** está correta. A paciente apresenta **fibrilação atrial associada a estenose mitral moderada de etiologia reumática** (FA \"valvar\") e antecedente de AVC isquêmico. De acordo com a Diretriz Brasileira de Fibrilação Atrial (SBC) e o ensaio INVICTUS (NEJM 2022), os anticoagulantes orais diretos (DOACs) são contraindicados na estenose mitral moderada a grave, sendo a **varfarina** (alvo de INR 2,0–3,0) a única medicação indicada para prevenção de eventos tromboembólicos.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "metoprolol para manutenção do ritmo sinusal.",
        "explanation": "Incorreta: Betabloqueadores controlam frequência cardíaca, mas não substituem a anticoagulação oral para prevenção de AVC.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A paciente apresenta **fibrilação atrial associada a estenose mitral moderada de etiologia reumática** (FA \"valvar\") e antecedente de AVC isquêmico. De acordo com a Diretriz Brasileira de Fibrilação Atrial (SBC) e o ensaio INVICTUS (NEJM 2022), os anticoagulantes orais diretos (DOACs) são contraindicados na estenose mitral moderada a grave, sendo a **varfarina** (alvo de INR 2,0–3,0) a única medicação indicada para prevenção de eventos tromboembólicos.\n- **A) Incorreta:** Rivaroxabana foi inferior à varfarina em pacientes com FA reumática no estudo INVICTUS e é contraindicada na estenose mitral moderada a grave.\n- **B) Incorreta:** Antiagregação plaquetária com AAS não oferece proteção adequada contra tromboembolismo na FA.\n- **C) Incorreta:** Apixabana (assim como os demais DOACs) não deve ser utilizada na estenose mitral moderada a importante.\n- **E) Incorreta:** Betabloqueadores controlam frequência cardíaca, mas não substituem a anticoagulação oral para prevenção de AVC.",
    "perolaClinica": "A paciente apresenta **fibrilação atrial associada a estenose mitral moderada de etiologia reumática** (FA \"valvar\") e antecedente de AVC isquêmico.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-010",
    "code": "Q-ENARE24-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Emergências Psiquiátricas e Risco de Suicídio",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-emergencias-psiquiatricas-e-risco-de-suicidio",
    "tags": ["sindrome-neuroleptica-maligna","dantrolene","bromocriptina","antipsicoticos"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 47 anos, que vinha em uso de medicações para controle de transtorno bipolar, é levada para atendimento com alteração do nível de consciência, confusão mental, sudorese e desorientação. Ao exame, foi observada rigidez muscular generalizada, especialmente em membros superiores e inferiores. Apresentou pressão arterial de 172 por 104 mmHg, frequência cardíaca de 109 batimentos por minuto, frequência respiratória de 24 incursões respiratórias por minuto e temperatura axilar de 39,2 °C. O exame laboratorial revelou aumento significativo de creatinofosfoquinase sérica, sem alterações nas transaminases. Como a equipe médica suspeitou de síndrome neuroléptica maligna, suspendeu as medicações em uso e iniciou terapia de suporte clínico.\n\nFazem parte do arsenal terapêutico da síndrome neuroléptica maligna as seguintes medicações:",
    "alternativas": [
      {
        "letter": "A",
        "text": "haloperidol e fenitoína;",
        "explanation": "Incorreta: Haloperidol é justamente um dos principais desencadeantes da SNM por ser antagonista D2 potente.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "quetiapina e olanzapina;",
        "explanation": "Incorreta: Quetiapina e olanzapina são antipsicóticos atípicos, contraindicados na fase aguda da SNM.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "dantrolene e bromocriptina;",
        "explanation": "A alternativa **C** está correta. A **síndrome neuroléptica maligna (SNM)** manifesta-se com hipertermia, rigidez muscular (\"em cano de chumbo\"), disautonomia, alteração do sensório e elevação acentuada de CPK. Além da suspensão imediata do agente causal e suporte intensivo (hidratação, resfriamento), o tratamento farmacológico específico (DSM-5-TR / UpToDate) utiliza o relaxante muscular de ação direta **dantrolene** e o agonista dopaminérgico **bromocriptina** (ou amantadina).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "risperidona e carbamazepina;",
        "explanation": "Incorreta: Risperidona é antagonista dopaminérgico (pode precipitar/agravar SNM).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "oxcarbazepina e prometazina.",
        "explanation": "Incorreta: Prometazina tem ação antidopaminérgica/anticolinérgica e pode piorar a hipertermia e a SNM.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. A **síndrome neuroléptica maligna (SNM)** manifesta-se com hipertermia, rigidez muscular (\"em cano de chumbo\"), disautonomia, alteração do sensório e elevação acentuada de CPK. Além da suspensão imediata do agente causal e suporte intensivo (hidratação, resfriamento), o tratamento farmacológico específico (DSM-5-TR / UpToDate) utiliza o relaxante muscular de ação direta **dantrolene** e o agonista dopaminérgico **bromocriptina** (ou amantadina).\n- **A) Incorreta:** Haloperidol é justamente um dos principais desencadeantes da SNM por ser antagonista D2 potente.\n- **B) Incorreta:** Quetiapina e olanzapina são antipsicóticos atípicos, contraindicados na fase aguda da SNM.\n- **D) Incorreta:** Risperidona é antagonista dopaminérgico (pode precipitar/agravar SNM).\n- **E) Incorreta:** Prometazina tem ação antidopaminérgica/anticolinérgica e pode piorar a hipertermia e a SNM.",
    "perolaClinica": "A **síndrome neuroléptica maligna (SNM)** manifesta-se com hipertermia, rigidez muscular (\"em cano de chumbo\"), disautonomia, alteração do sensório e elevação acentuada de CPK.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-011",
    "code": "Q-ENARE24-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Farmacodermias Graves",
    "temaSlug": "cm-dermato",
    "subtemaSlug": "cm-dermato-farmacodermias-graves",
    "tags": ["sindrome-dress","farmacodermia","alopurinol","eosinofilia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 48 anos foi admitido no hospital com erupção cutânea generalizada, mal-estar geral e febre. Ele relatou ter iniciado recentemente alopurinol para controle de hiperuricemia. Nos últimos dias, ele notou o surgimento de uma erupção cutânea que começou no tronco e se espalhou para membros, região cervical e face. Além disso, queixava-se de náuseas e dor abdominal. No exame físico, foram observados erupção cutânea maculopapular generalizada, adenomegalia generalizada e edema em face, mãos e pés bilateralmente. Nos exames laboratoriais, foram encontradas leucocitose, eosinofilia e elevação das transaminases.\n\nA principal hipótese diagnóstica nesse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "eritema multiforme;",
        "explanation": "Incorreta: Eritema multiforme caracteriza-se por lesões em alvo típicas, geralmente desencadeadas por herpes simples, sem hepatite e eosinofilia sistêmica marcante.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "urticária medicamentosa;",
        "explanation": "Incorreta: Urticária medicamentosa cursa com placas eritematoedematosas pruriginosas fugazes (< 24h), sem febre, linfadenomegalia ou hepatite.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "síndrome de Stevens-Johnson (SSJ);",
        "explanation": "Incorreta: SSJ caracteriza-se por necrose epidérmica com bolhas/descolamento cutâneo (< 10% SC) e acometimento mucoso grave, não descritos no caso.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "púrpura trombocitopênica idiopática (PTI);",
        "explanation": "Incorreta: PTI manifesta-se por plaquetopenia isolada com petéquias/equimoses, sem exantema maculopapular febril com eosinofilia.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "síndrome de hipersensibilidade induzida por drogas (DRESS).",
        "explanation": "A alternativa **E** está correta. O uso recente de **alopurinol** (um dos principais fármacos desencadeantes, ao lado de anticonvulsivantes aromáticos) seguido de febre, exantema maculopapular disseminado, **edema facial**, linfadenomegalia generalizada, **eosinofilia** e acometimento visceral (**elevação de transaminases**) preenche os critérios RegiSCAR para **síndrome DRESS** (*Drug Reaction with Eosinophilia and Systemic Symptoms*).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. O uso recente de **alopurinol** (um dos principais fármacos desencadeantes, ao lado de anticonvulsivantes aromáticos) seguido de febre, exantema maculopapular disseminado, **edema facial**, linfadenomegalia generalizada, **eosinofilia** e acometimento visceral (**elevação de transaminases**) preenche os critérios RegiSCAR para **síndrome DRESS** (*Drug Reaction with Eosinophilia and Systemic Symptoms*).\n- **A) Incorreta:** Eritema multiforme caracteriza-se por lesões em alvo típicas, geralmente desencadeadas por herpes simples, sem hepatite e eosinofilia sistêmica marcante.\n- **B) Incorreta:** Urticária medicamentosa cursa com placas eritematoedematosas pruriginosas fugazes (< 24h), sem febre, linfadenomegalia ou hepatite.\n- **C) Incorreta:** SSJ caracteriza-se por necrose epidérmica com bolhas/descolamento cutâneo (< 10% SC) e acometimento mucoso grave, não descritos no caso.\n- **D) Incorreta:** PTI manifesta-se por plaquetopenia isolada com petéquias/equimoses, sem exantema maculopapular febril com eosinofilia.",
    "perolaClinica": "O uso recente de **alopurinol** (um dos principais fármacos desencadeantes, ao lado de anticonvulsivantes aromáticos) seguido de febre, exantema maculopapular disseminado, **edema facial**, linfadenomegalia generalizada,",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-012",
    "code": "Q-ENARE24-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Cirrose Hepática e Hipertensão Portal",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-cirrose-hepatica-e-hipertensao-portal",
    "tags": ["doenca-de-wilson","penicilamina","acumulo-de-cobre","hipertensao-portal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um jovem de 20 anos foi admitido com um quadro de hepatite, esplenomegalia com hiperesplenismo, anemia hemolítica com Coombs negativo, hipertensão portal e confusão mental.\n\nO exame neurológico mostrou síndrome rígida-acinética semelhante ao parkinsonismo, tremores e ataxia. Foram também observadas disartria, disfagia e incoordenação motora. Tais achados neurológicos se associam a disfunção dos gânglios da base.\n\nO tratamento instituído foi D-penicilamina oral (0,75 - 2 g/dia em doses divididas, tomadas 1 hora antes ou 2 horas após a refeição) associada a piridoxina oral, 50 mg por semana. Foi também prescrito zinco elementar na dose de 50 mg três vezes ao dia. Houve melhora clínica e indicação para que o tratamento fosse continuado indefinidamente, além de uma dieta específica.\n\nA doença em questão é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "hemocromatose;",
        "explanation": "Incorreta: Hemocromatose cursa com sobrecarga de ferro (cirrose, diabetes, hiperpigmentação, cardiopatia), tratada com flebotomias, sem parkinsonismo nem uso de D-penicilamina.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "hepatite autoimune;",
        "explanation": "Incorreta: Hepatite autoimune é tratada com corticoides e azatioprina, sem acometimento de gânglios da base.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "colangite esclerosante primária;",
        "explanation": "Incorreta: Colangite esclerosante primária é colangiopatia colestática frequentemente associada à retocolite ulcerativa, sem quadro neurológico extrapiramidal.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "doença de Wilson;",
        "explanation": "A alternativa **D** está correta. A associação em adulto jovem de **hepatopatia com anemia hemolítica Coombs negativa**, sintomas extrapiramidais/disfunção de gânglios da base (parkinsonismo, tremores, disartria, ataxia) e resposta a quelantes de cobre (**D-penicilamina** + piridoxina) e **zinco** (que bloqueia absorção intestinal de cobre) é patognomônica da **doença de Wilson** (diretriz AASLD / EASL).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "síndrome de Budd-Chiari.",
        "explanation": "Incorreta: Síndrome de Budd-Chiari decorre de trombose das veias supra-hepáticas, manifestando-se por ascite, hepatomegalia e dor abdominal, sem sintomas extrapiramidais.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A associação em adulto jovem de **hepatopatia com anemia hemolítica Coombs negativa**, sintomas extrapiramidais/disfunção de gânglios da base (parkinsonismo, tremores, disartria, ataxia) e resposta a quelantes de cobre (**D-penicilamina** + piridoxina) e **zinco** (que bloqueia absorção intestinal de cobre) é patognomônica da **doença de Wilson** (diretriz AASLD / EASL).\n- **A) Incorreta:** Hemocromatose cursa com sobrecarga de ferro (cirrose, diabetes, hiperpigmentação, cardiopatia), tratada com flebotomias, sem parkinsonismo nem uso de D-penicilamina.\n- **B) Incorreta:** Hepatite autoimune é tratada com corticoides e azatioprina, sem acometimento de gânglios da base.\n- **C) Incorreta:** Colangite esclerosante primária é colangiopatia colestática frequentemente associada à retocolite ulcerativa, sem quadro neurológico extrapiramidal.\n- **E) Incorreta:** Síndrome de Budd-Chiari decorre de trombose das veias supra-hepáticas, manifestando-se por ascite, hepatomegalia e dor abdominal, sem sintomas extrapiramidais.",
    "perolaClinica": "A associação em adulto jovem de **hepatopatia com anemia hemolítica Coombs negativa**, sintomas extrapiramidais/disfunção de gânglios da base (parkinsonismo, tremores, disartria, ataxia) e resposta a quelantes de cobre (",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-013",
    "code": "Q-ENARE24-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Espondiloartrites",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-espondiloartrites",
    "tags": ["espondilite-anquilosante","espondiloartrites","lombalgia-inflamatoria","sacroiliite"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um jovem de 24 anos refere lombalgia e dor sacroilíaca crônicas há aproximadamente 6 meses. Apresenta também dor progressiva em membro inferior esquerdo. No último mês, vem apresentando rigidez matinal que melhora com exercícios físicos. A dor lombossacra chega a acordá-lo no meio da noite. Afirma também ter certa dificuldade em expandir a parede torácica.\n\nO diagnóstico mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "artrite reumatoide;",
        "explanation": "Incorreta: Artrite reumatoide acomete preferencialmente pequenas articulações periféricas de forma simétrica e poupa a coluna lombar/sacroilíacas (acomete apenas coluna cervical).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "esclerose sistêmica;",
        "explanation": "Incorreta: Esclerose sistêmica manifesta-se por esclerodactilia, fenômeno de Raynaud e fibrose visceral, não por lombalgia inflamatória com sacroileíte.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "doença de Crohn atípica;",
        "explanation": "Incorreta: Não há qualquer sintoma gastrointestinal relatado para sustentar doença de Crohn.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "artrite reativa do HIV;",
        "explanation": "Incorreta: Não há história de infecção pelo HIV nem quadro clássico de oligoartrite periférica assimétrica pós-infecciosa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "espondilite anquilosante.",
        "explanation": "A alternativa **E** está correta. Homem jovem (< 40 anos) com **lombalgia inflamatória crônica (> 3 meses)** — caracterizada por início insidioso, dor noturna, rigidez matinal que **melhora com exercícios**, dor sacroilíaca e **redução da expansibilidade torácica** (acometimento costovertebral) — apresenta o quadro clássico de **espondilite anquilosante** (espondiloartrite axial radiográfica, critérios ASAS / SBR).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Homem jovem (< 40 anos) com **lombalgia inflamatória crônica (> 3 meses)** — caracterizada por início insidioso, dor noturna, rigidez matinal que **melhora com exercícios**, dor sacroilíaca e **redução da expansibilidade torácica** (acometimento costovertebral) — apresenta o quadro clássico de **espondilite anquilosante** (espondiloartrite axial radiográfica, critérios ASAS / SBR).\n- **A) Incorreta:** Artrite reumatoide acomete preferencialmente pequenas articulações periféricas de forma simétrica e poupa a coluna lombar/sacroilíacas (acomete apenas coluna cervical).\n- **B) Incorreta:** Esclerose sistêmica manifesta-se por esclerodactilia, fenômeno de Raynaud e fibrose visceral, não por lombalgia inflamatória com sacroileíte.\n- **C) Incorreta:** Não há qualquer sintoma gastrointestinal relatado para sustentar doença de Crohn.\n- **D) Incorreta:** Não há história de infecção pelo HIV nem quadro clássico de oligoartrite periférica assimétrica pós-infecciosa.",
    "perolaClinica": "Homem jovem (< 40 anos) com **lombalgia inflamatória crônica (> 3 meses)** — caracterizada por início insidioso, dor noturna, rigidez matinal que **melhora com exercícios**, dor sacroilíaca e **redução da expansibilidade",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-014",
    "code": "Q-ENARE24-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": ["estenose-de-arteria-renal","hipertensao-renovascular","ieca-bra","hipertensao-secundaria"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 45 anos, tabagista, apresentava diabetes mellitus e dislipidemia, porém não era hipertenso. Foi atendido no pronto-socorro com quadro de edema agudo do pulmão hipertensivo. Apresentou melhora clínica e foi liberado com prescrição de losartana e hidroclorotiazida.\n\nA hipertensão ficou refratária ao tratamento e o paciente desenvolveu insuficiência renal aguda, que foi associada ao uso da losartana. No exame físico, foi detectado um sopro em linha mamilar esquerda na altura da cicatriz umbilical. O doppler de carótidas mostrou obstrução de 50% à direita e 40% à esquerda.\n\nA doença em questão é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "doença de Kawasaki;",
        "explanation": "Incorreta: Doença de Kawasaki é vasculite febril aguda da infância com aneurismas coronarianos.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "arterite de Takayasu;",
        "explanation": "Incorreta: Arterite de Takayasu acomete predominantemente mulheres jovens (< 40 anos) com claudicação de membros superiores e assimetria de pulsos/PA.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "hiperaldosteronismo primário;",
        "explanation": "Incorreta: Hiperaldosteronismo primário cursa com HAS e hipocalemia/alcalose metabólica, sem sopro abdominal nem piora renal clássica com BRA.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "estenose de artéria renal;",
        "explanation": "A alternativa **D** está correta. A combinação de **fatores de risco ateroscleróticos** (tabagismo, DM, dislipidemia, ateromatose carotídea), **edema agudo de pulmão hipertensivo súbito (\"flash pulmonary edema\")**, hipertensão refratária, **piora aguda da função renal após bloqueador do receptor da angiotensina (losartana)** e **sopro abdominal periumbilical** é clássica de **estenose aterosclerótica de artéria renal** (provavelmente bilateral ou em rim único funcionante), conforme a Diretriz Brasileira de Hipertensão Arterial (SBC).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "feocromocitoma.",
        "explanation": "Incorreta: Feocromocitoma manifesta-se por paroxismos de cefaleia, sudorese e palpitações, sem sopro renal nem IRA induzida por losartana.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A combinação de **fatores de risco ateroscleróticos** (tabagismo, DM, dislipidemia, ateromatose carotídea), **edema agudo de pulmão hipertensivo súbito (\"flash pulmonary edema\")**, hipertensão refratária, **piora aguda da função renal após bloqueador do receptor da angiotensina (losartana)** e **sopro abdominal periumbilical** é clássica de **estenose aterosclerótica de artéria renal** (provavelmente bilateral ou em rim único funcionante), conforme a Diretriz Brasileira de Hipertensão Arterial (SBC).\n- **A) Incorreta:** Doença de Kawasaki é vasculite febril aguda da infância com aneurismas coronarianos.\n- **B) Incorreta:** Arterite de Takayasu acomete predominantemente mulheres jovens (< 40 anos) com claudicação de membros superiores e assimetria de pulsos/PA.\n- **C) Incorreta:** Hiperaldosteronismo primário cursa com HAS e hipocalemia/alcalose metabólica, sem sopro abdominal nem piora renal clássica com BRA.\n- **E) Incorreta:** Feocromocitoma manifesta-se por paroxismos de cefaleia, sudorese e palpitações, sem sopro renal nem IRA induzida por losartana.",
    "perolaClinica": "A combinação de **fatores de risco ateroscleróticos** (tabagismo, DM, dislipidemia, ateromatose carotídea), **edema agudo de pulmão hipertensivo súbito (\"flash pulmonary edema\")**, hipertensão refratária, **piora aguda d",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-015",
    "code": "Q-ENARE24-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hepatites Virais",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hepatites-virais",
    "tags": ["porfiria-cutanea-tardia","hepatite-c","manifestacoes-extrahepaticas","flebotomia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 44 anos e com diagnóstico de hepatite C, não tratada, desenvolveu quadro de porfiria. O tratamento instituído consistiu em antivirais de ação direta contra o HCV, hidroxicloroquina e flebotomias regulares.\n\nO tipo de porfiria em questão é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "porfiria aguda intermitente;",
        "explanation": "Incorreta: Porfiria aguda intermitente cursa com dor abdominal e sintomas neuropsiquiátricos agudos (sem lesões cutâneas), tratada com hemina e glicose.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "protoporfiria eritropoiética;",
        "explanation": "Incorreta: Protoporfiria eritropoiética inicia-se na infância com fotossensibilidade dolorosa aguda sem bolhas, não respondendo a flebotomia ou hidroxicloroquina.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "porfiria cutânea tardia;",
        "explanation": "A alternativa **C** está correta. A **porfiria cutânea tardia (PCT)** é o tipo mais comum de porfiria e tem forte associação epidemiológica com **infecção crônica pelo vírus da hepatite C (HCV)**, etilismo e sobrecarga de ferro. Seu tratamento padrão consiste na erradicação do HCV com antivirais de ação direta, **flebotomias seriadas** (para reduzir estoques hepáticos de ferro) e/ou **hidroxicloroquina em baixas doses** (que mobiliza uroporfirinas hepáticas), conforme diretrizes dermatológicas e hepatológicas.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "porfiria variegata;",
        "explanation": "Incorreta: Porfiria variegata é porfiria aguda mista autossômica dominante que não é tratada com flebotomias e hidroxicloroquina.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "protoporfiria ligada ao X.",
        "explanation": "Incorreta: Protoporfiria ligada ao X tem apresentação semelhante à protoporfiria eritropoiética na infância, sem associação clássica com HCV ou resposta a flebotomias.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. A **porfiria cutânea tardia (PCT)** é o tipo mais comum de porfiria e tem forte associação epidemiológica com **infecção crônica pelo vírus da hepatite C (HCV)**, etilismo e sobrecarga de ferro. Seu tratamento padrão consiste na erradicação do HCV com antivirais de ação direta, **flebotomias seriadas** (para reduzir estoques hepáticos de ferro) e/ou **hidroxicloroquina em baixas doses** (que mobiliza uroporfirinas hepáticas), conforme diretrizes dermatológicas e hepatológicas.\n- **A) Incorreta:** Porfiria aguda intermitente cursa com dor abdominal e sintomas neuropsiquiátricos agudos (sem lesões cutâneas), tratada com hemina e glicose.\n- **B) Incorreta:** Protoporfiria eritropoiética inicia-se na infância com fotossensibilidade dolorosa aguda sem bolhas, não respondendo a flebotomia ou hidroxicloroquina.\n- **D) Incorreta:** Porfiria variegata é porfiria aguda mista autossômica dominante que não é tratada com flebotomias e hidroxicloroquina.\n- **E) Incorreta:** Protoporfiria ligada ao X tem apresentação semelhante à protoporfiria eritropoiética na infância, sem associação clássica com HCV ou resposta a flebotomias.",
    "perolaClinica": "A **porfiria cutânea tardia (PCT)** é o tipo mais comum de porfiria e tem forte associação epidemiológica com **infecção crônica pelo vírus da hepatite C (HCV)**, etilismo e sobrecarga de ferro.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-016",
    "code": "Q-ENARE24-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Leptospirose e Rickettsioses",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-leptospirose-e-rickettsioses",
    "tags": ["leptospirose","nefrite-tubulointersticial","injuria-renal-aguda","histopatologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante a tragédia das enchentes no estado do Rio Grande do Sul em 2024, ocorreram vários casos de leptospirose que acometeram principalmente voluntários que atuaram no resgate da população atingida.\n\nA insuficiência renal causada pela doença tem como lesão histopatológica:",
    "alternativas": [
      {
        "letter": "A",
        "text": "nefrite tubulointersticial;",
        "explanation": "A alternativa **A** está correta. Na **leptospirose**, o rim é um dos principais órgãos-alvo e a lesão histopatológica fundamental e característica é a **nefrite tubulointersticial aguda (NTIA)** causada por invasão direta das espiroquetas e resposta imune no interstício renal, cursando classicamente com IRA não oligúrica e hipocalemia/normocalemia (Manual de Leptospirose — Ministério da Saúde / Harrison).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "necrose tubular aguda;",
        "explanation": "Incorreta: Embora possa ocorrer necrose tubular aguda secundária à hipovolemia ou rabdomiólise em casos graves, a lesão histopatológica primária e clássica descrita na leptospirose é a nefrite tubulointersticial.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "glomerulonefrite membranosa;",
        "explanation": "Incorreta: Glomerulonefrite membranosa é causa de síndrome nefrótica crônica (ex.: anti-PLA2R, hepatite B), não da IRA da leptospirose.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "glomerulonefrite rapidamente progressiva;",
        "explanation": "Incorreta: Glomerulonefrite rapidamente progressiva cursa com crescentes glomerulares e síndrome nefrítica grave (vasculites ANCA, Goodpasture).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "glomeruloesclerose focal e segmentar.",
        "explanation": "Incorreta: GESF é glomerulopatia associada a síndrome nefrótica (ex.: HIV, hiperfiltração), não à leptospirose aguda.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Na **leptospirose**, o rim é um dos principais órgãos-alvo e a lesão histopatológica fundamental e característica é a **nefrite tubulointersticial aguda (NTIA)** causada por invasão direta das espiroquetas e resposta imune no interstício renal, cursando classicamente com IRA não oligúrica e hipocalemia/normocalemia (Manual de Leptospirose — Ministério da Saúde / Harrison).\n- **B) Incorreta:** Embora possa ocorrer necrose tubular aguda secundária à hipovolemia ou rabdomiólise em casos graves, a lesão histopatológica primária e clássica descrita na leptospirose é a nefrite tubulointersticial.\n- **C) Incorreta:** Glomerulonefrite membranosa é causa de síndrome nefrótica crônica (ex.: anti-PLA2R, hepatite B), não da IRA da leptospirose.\n- **D) Incorreta:** Glomerulonefrite rapidamente progressiva cursa com crescentes glomerulares e síndrome nefrítica grave (vasculites ANCA, Goodpasture).\n- **E) Incorreta:** GESF é glomerulopatia associada a síndrome nefrótica (ex.: HIV, hiperfiltração), não à leptospirose aguda.",
    "perolaClinica": "Na **leptospirose**, o rim é um dos principais órgãos-alvo e a lesão histopatológica fundamental e característica é a **nefrite tubulointersticial aguda (NTIA)** causada por invasão direta das espiroquetas e resposta imu",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-017",
    "code": "Q-ENARE24-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia",
    "subtema": "Miastenia Gravis e Doenças da Junção Neuromuscular",
    "temaSlug": "cm-neuro",
    "subtemaSlug": "cm-neuro-miastenia-gravis-e-doencas-da-juncao-neuromuscular",
    "tags": ["botulismo","clostridium-botulinum","paralisia-flacida-descendente","juncao-neuromuscular"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 45 anos, sem doenças prévias, desenvolveu enfermidade de instalação súbita e progressiva com quadro de náuseas, vômitos, diarreia e dor abdominal. Logo após, queixou-se de cefaleia, vertigem e tontura. Foi internado na emergência, onde foi iniciada hidratação venosa e administração de sintomáticos. Entretanto, 3 horas depois começou a apresentar visão turva, ptose palpebral, diplopia, disfagia, disartria, boca seca e fraqueza muscular simétrica, acometendo com maior intensidade os membros superiores, sem perda da sensibilidade. Notaram-se hipotensão sem taquicardia e retenção urinária. Cerca de 6 horas após a internação, evoluiu para paralisia flácida motora descendente, associada a comprometimento autonômico disseminado. Durante todo esse período, o paciente se manteve consciente. A fraqueza muscular descendente afetou os músculos do tronco e dos membros, levando a dispneia, insuficiência respiratória e tetraplegia flácida. Foi necessária a transferência do paciente para o CTI, com instalação de tubo orotraqueal e ventilação mecânica, além de rotinas terapêuticas para pacientes graves.\n\nO diagnóstico mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "meningite por Haemophilus influenzae;",
        "explanation": "Incorreta: Meningite bacteriana cursa com febre, rigidez de nuca e rebaixamento do nível de consciência, não paralisia flácida descendente com consciência preservada.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "síndrome de Guillain-Barré;",
        "explanation": "Incorreta: A síndrome de Guillain-Barré clássica apresenta paralisia flácida **ascendente** com arreflexia e frequentemente alterações sensitivas leves.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "doença de Lyme;",
        "explanation": "Incorreta: Doença de Lyme pode causar paralisia facial (Bell) e meningorradiculite subaguda, não paralisia descendente fulminante em horas.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "infecção pelo Clostridium botulinum;",
        "explanation": "A alternativa **D** está correta. O quadro descreve a apresentação clássica do **botulismo alimentar** (toxina do *Clostridium botulinum* bloqueando a liberação pré-sináptica de acetilcolina): pródromo gastrointestinal seguido de **acometimento simétrico de pares cranianos** (ptose, diplopia, visão turva, disfagia, disartria), **paralisia flácida motora descendente**, **sensibilidade e consciência preservadas**, além de **disautonomia anticolinérgica** (boca seca, retenção urinária, hipotensão sem taquicardia) evoluindo para insuficiência respiratória (Guia de Vigilância em Saúde — Ministério da Saúde).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "raiva.",
        "explanation": "Incorreta: Raiva cursa com encefalite aguda, hidrofobia, aerofobia, agitação e alteração grave do sensório.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. O quadro descreve a apresentação clássica do **botulismo alimentar** (toxina do *Clostridium botulinum* bloqueando a liberação pré-sináptica de acetilcolina): pródromo gastrointestinal seguido de **acometimento simétrico de pares cranianos** (ptose, diplopia, visão turva, disfagia, disartria), **paralisia flácida motora descendente**, **sensibilidade e consciência preservadas**, além de **disautonomia anticolinérgica** (boca seca, retenção urinária, hipotensão sem taquicardia) evoluindo para insuficiência respiratória (Guia de Vigilância em Saúde — Ministério da Saúde).\n- **A) Incorreta:** Meningite bacteriana cursa com febre, rigidez de nuca e rebaixamento do nível de consciência, não paralisia flácida descendente com consciência preservada.\n- **B) Incorreta:** A síndrome de Guillain-Barré clássica apresenta paralisia flácida **ascendente** com arreflexia e frequentemente alterações sensitivas leves.\n- **C) Incorreta:** Doença de Lyme pode causar paralisia facial (Bell) e meningorradiculite subaguda, não paralisia descendente fulminante em horas.\n- **E) Incorreta:** Raiva cursa com encefalite aguda, hidrofobia, aerofobia, agitação e alteração grave do sensório.",
    "perolaClinica": "O quadro descreve a apresentação clássica do **botulismo alimentar** (toxina do *Clostridium botulinum* bloqueando a liberação pré-sináptica de acetilcolina): pródromo gastrointestinal seguido de **acometimento simétrico",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-018",
    "code": "Q-ENARE24-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Leptospirose e Rickettsioses",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-leptospirose-e-rickettsioses",
    "tags": ["leptospirose","sindrome-de-weil","sufusao-conjuntival","cpk-elevada"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 22 anos apresentou quadro clínico com início abrupto de febre, cefaleia, mialgia, anorexia, náuseas e vômitos. Foi avaliado na UPA e liberado com prescrição de sintomáticos. Vinte e quatro horas depois, apresentou diarreia, artralgia, dor ocular, fotofobia e hemorragia conjuntival, além de tosse. Foi internado, recebendo hidratação venosa e sintomáticos venosos. Foram solicitados exames complementares, com os seguintes resultados: leucocitose, neutrofilia e desvio à esquerda, plaquetopenia, aumento de ureia e creatinina, CPK elevada, baixa densidade urinária, proteinúria, hematúria microscópica e leucocitúria.\n\nFoi então iniciada antibioticoterapia com sulfametoxazol + trimetoprima. Logo a seguir, o paciente apresentou exantema, eritema macular, papular purpúrico, distribuídos no tronco ou na região pré-tibial. USG exibiu hepatomegalia, esplenomegalia e linfadenopatia. Na ocasião, reclamou de intensa mialgia, principalmente em região lombar e nas panturrilhas.\n\nApesar do uso de antibiótico, não apresentou melhora, com evolução para tríade insuficiência renal, icterícia rubínica e hemorragia pulmonar discreta (síndrome de Weil). Foi intubado e no CTI iniciou penicilina G cristalina em dose plena e cuidados intensivos. Após 10 dias, apresentou melhora clínica, sendo transferido para enfermaria até concluir seu tratamento.\n\nA doença descrita acima é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "febre maculosa;",
        "explanation": "Incorreta: Febre maculosa é causada por *Rickettsia rickettsii*, cursa com exantema maculopapular centrípeto (palmoplantar) e responde à doxiciclina, não à penicilina G.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "endocardite bacteriana;",
        "explanation": "Incorreta: Endocardite infecciosa não cursa com síndrome de Weil nem mialgia intensa em panturrilhas com CPK elevada como apresentação típica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "leptospirose;",
        "explanation": "A alternativa **C** está correta. O enunciado descreve explicitamente a evolução da **leptospirose** grave: febre abrupta, intensa mialgia em panturrilhas, sufusão/hemorragia conjuntival, CPK elevada, plaquetopenia e evolução para a **síndrome de Weil** (tríade de icterícia rubínica, insuficiência renal e manifestações hemorrágicas, incluindo hemorragia pulmonar), com resposta à **penicilina G cristalina** (Manual de Leptospirose — Ministério da Saúde).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "dengue hemorrágica;",
        "explanation": "Incorreta: Dengue grave cursa com extravasamento plasmático e hemoconcentração, sem icterícia rubínica nem resposta à penicilina cristalina.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "infecção urinária por pseudomonas aeruginosa.",
        "explanation": "Incorreta: *Pseudomonas aeruginosa* é resistente à penicilina G cristalina e não produz síndrome de Weil.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O enunciado descreve explicitamente a evolução da **leptospirose** grave: febre abrupta, intensa mialgia em panturrilhas, sufusão/hemorragia conjuntival, CPK elevada, plaquetopenia e evolução para a **síndrome de Weil** (tríade de icterícia rubínica, insuficiência renal e manifestações hemorrágicas, incluindo hemorragia pulmonar), com resposta à **penicilina G cristalina** (Manual de Leptospirose — Ministério da Saúde).\n- **A) Incorreta:** Febre maculosa é causada por *Rickettsia rickettsii*, cursa com exantema maculopapular centrípeto (palmoplantar) e responde à doxiciclina, não à penicilina G.\n- **B) Incorreta:** Endocardite infecciosa não cursa com síndrome de Weil nem mialgia intensa em panturrilhas com CPK elevada como apresentação típica.\n- **D) Incorreta:** Dengue grave cursa com extravasamento plasmático e hemoconcentração, sem icterícia rubínica nem resposta à penicilina cristalina.\n- **E) Incorreta:** *Pseudomonas aeruginosa* é resistente à penicilina G cristalina e não produz síndrome de Weil.",
    "perolaClinica": "O enunciado descreve explicitamente a evolução da **leptospirose** grave: febre abrupta, intensa mialgia em panturrilhas, sufusão/hemorragia conjuntival, CPK elevada, plaquetopenia e evolução para a **síndrome de Weil** ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-019",
    "code": "Q-ENARE24-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hepatites Virais",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hepatites-virais",
    "tags": ["hepatite-c","antivirais-de-acao-direta","sofosbuvir-pibrentasvir","glecaprevir"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 50 anos em tratamento para hepatite C, com cirrose hepática compensada CHILD PUGH A, tem histórico de falha terapêutica com uso prévio de antivirais de ação direta. O médico assistente do serviço de atenção especializada prescreveu um novo esquema terapêutico, recomendado pelo Ministério da Saúde.\n\nO esquema prescrito foi:",
    "alternativas": [
      {
        "letter": "A",
        "text": "sofosbuvir/velpastavir/ribavirina por 24 semanas;",
        "explanation": "Incorreta: Sofosbuvir/velpatasvir + ribavirina por 24 semanas é reservado para cirrose descompensada (Child-Pugh B ou C), situação em que inibidores de protease (como glecaprevir) são contraindicados.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "sofosbuvir/daclatasvir por 12 semanas;",
        "explanation": "Incorreta: Sofosbuvir + daclatasvir por 12 semanas não é o esquema de retratamento pós-falha a AAD.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "sofosbuvir/pibrentasvir + glecaprevir por 12 semanas;",
        "explanation": "A alternativa **C** está correta. Conforme o **PCDT para Hepatite C e Coinfecções do Ministério da Saúde**, no retratamento de pacientes com cirrose compensada (**Child-Pugh A**) que apresentaram falha terapêutica prévia a antivirais de ação direta (AADs), recomenda-se o esquema pangenotípico triplo **sofosbuvir + glecaprevir/pibrentasvir** (ou sofosbuvir/velpatasvir/voxilaprevir) por **12 semanas** (podendo estender-se a 16 semanas conforme o perfil de resistência).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "sofosbuvir/velpastavir por 12 semanas;",
        "explanation": "Incorreta: Sofosbuvir/velpatasvir por 12 semanas é esquema de primeira linha para pacientes virgens de tratamento, não de resgate pós-falha a AAD.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "sofosbuvir/ribavirina por 24 semanas.",
        "explanation": "Incorreta: Sofosbuvir + ribavirina sem inibidor de NS5A/protease é esquema obsoleto e ineficaz no retratamento.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Conforme o **PCDT para Hepatite C e Coinfecções do Ministério da Saúde**, no retratamento de pacientes com cirrose compensada (**Child-Pugh A**) que apresentaram falha terapêutica prévia a antivirais de ação direta (AADs), recomenda-se o esquema pangenotípico triplo **sofosbuvir + glecaprevir/pibrentasvir** (ou sofosbuvir/velpatasvir/voxilaprevir) por **12 semanas** (podendo estender-se a 16 semanas conforme o perfil de resistência).\n- **A) Incorreta:** Sofosbuvir/velpatasvir + ribavirina por 24 semanas é reservado para cirrose descompensada (Child-Pugh B ou C), situação em que inibidores de protease (como glecaprevir) são contraindicados.\n- **B) Incorreta:** Sofosbuvir + daclatasvir por 12 semanas não é o esquema de retratamento pós-falha a AAD.\n- **D) Incorreta:** Sofosbuvir/velpatasvir por 12 semanas é esquema de primeira linha para pacientes virgens de tratamento, não de resgate pós-falha a AAD.\n- **E) Incorreta:** Sofosbuvir + ribavirina sem inibidor de NS5A/protease é esquema obsoleto e ineficaz no retratamento.",
    "perolaClinica": "Conforme o **PCDT para Hepatite C e Coinfecções do Ministério da Saúde**, no retratamento de pacientes com cirrose compensada (**Child-Pugh A**) que apresentaram falha terapêutica prévia a antivirais de ação direta (AADs",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-020",
    "code": "Q-ENARE24-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Cirrose Hepática e Hipertensão Portal",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-cirrose-hepatica-e-hipertensao-portal",
    "tags": ["colangite-biliar-primaria","anticorpo-antimitocondria","colestase","prurido"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 65 anos procura o gastroenterologista com queixas de astenia, prurido palmar e plantar e elevação de fosfatase alcalina (1005 UI/ml) e Gama GT (1200 UI/ml). As enzimas hepáticas TGO e TGP estão elevadas (300 e 250 UI/ml, respectivamente) e a bilirrubina total é de 6,0 mg/dl, às custas da bilirrubina direta. Apresenta plaquetopenia de 85.000/mm³, e a ultrassonografia de abdômen aponta alterações compatíveis com doença parenquimatosa crônica do fígado, sem dilatação das vias biliares intra e extra-hepáticas e vesícula biliar anecoica.\n\nA principal hipótese diagnóstica para o caso e o exame complementar a ser solicitado são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "hepatite colestática autoimune; FAN e antimúsculo liso;",
        "explanation": "Incorreta: Hepatite autoimune clássica apresenta predomínio acentuado de transaminases (padrão hepatocelular), não colestase intensa com FA > 1.000.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "colangite esclerosante primária; CPER e P-Anca;",
        "explanation": "Incorreta: Colangite esclerosante primária predomina em homens jovens com doença inflamatória intestinal e geralmente cursa com dilatações/estenoses biliares focais à colangio-RM.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "colangite biliar primária; anti-LKM1;",
        "explanation": "Incorreta: Anti-LKM1 é marcador de hepatite autoimune tipo 2 (predominante em crianças/jovens), não de CBP.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "colangite biliar primária; antimitocôndria;",
        "explanation": "A alternativa **D** está correta. Mulher de meia-idade/idosa com **fadiga, prurido palmoplantar, síndrome colestática acentuada** (FA > 1.000, GGT > 1.200, hiperbilirrubinemia direta) e **ausência de dilatação de vias biliares** ao ultrassom apresenta o quadro típico de **colangite biliar primária (CBP)**. Segundo a diretriz da AASLD/EASL, o marcador sorológico de alta sensibilidade e especificidade (> 95%) é o **anticorpo antimitocôndria (AMA)**.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "hepatite medicamentosa; FAN e antimúsculo liso.",
        "explanation": "Incorreta: Não há histórico medicamentoso descrito e FAN/antimúsculo liso não confirmam hepatite medicamentosa.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Mulher de meia-idade/idosa com **fadiga, prurido palmoplantar, síndrome colestática acentuada** (FA > 1.000, GGT > 1.200, hiperbilirrubinemia direta) e **ausência de dilatação de vias biliares** ao ultrassom apresenta o quadro típico de **colangite biliar primária (CBP)**. Segundo a diretriz da AASLD/EASL, o marcador sorológico de alta sensibilidade e especificidade (> 95%) é o **anticorpo antimitocôndria (AMA)**.\n- **A) Incorreta:** Hepatite autoimune clássica apresenta predomínio acentuado de transaminases (padrão hepatocelular), não colestase intensa com FA > 1.000.\n- **B) Incorreta:** Colangite esclerosante primária predomina em homens jovens com doença inflamatória intestinal e geralmente cursa com dilatações/estenoses biliares focais à colangio-RM.\n- **C) Incorreta:** Anti-LKM1 é marcador de hepatite autoimune tipo 2 (predominante em crianças/jovens), não de CBP.\n- **E) Incorreta:** Não há histórico medicamentoso descrito e FAN/antimúsculo liso não confirmam hepatite medicamentosa.",
    "perolaClinica": "Mulher de meia-idade/idosa com **fadiga, prurido palmoplantar, síndrome colestática acentuada** (FA > 1.000, GGT > 1.200, hiperbilirrubinemia direta) e **ausência de dilatação de vias biliares** ao ultrassom apresenta o ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-021",
    "code": "Q-ENARE24-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "subtema": "Câncer de Pele",
    "temaSlug": "cm-dermato",
    "subtemaSlug": "cm-dermato-cancer-de-pele",
    "tags": ["melanoma-maligno","excisao-cirurgica","linfonodo-sentinela","cancer-de-pele"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 64 anos de idade, saudável, agricultor, apresenta-se no consultório com uma lesão cutânea que ele notou há cerca de 6 meses. A lesão está localizada no dorso da mão direita e tem crescido lentamente. O paciente relata que a área está um pouco dolorosa e pruriginosa. Ao exame físico, observa-se uma lesão de 1,2 cm de diâmetro, de cor acastanhada, bordas irregulares, e com algumas áreas de ulceração, e há linfadenomegalia palpável na axila.\n\nCom base na descrição clínica e no exame físico, as melhores propostas diagnóstica e terapêutica para esse paciente são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "carcinoma basocelular; tratamento com crioterapia;",
        "explanation": "Incorreta: Carcinoma basocelular raramente metastatiza para linfonodos e não deve ser tratado com crioterapia nesse cenário.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "queratoacantoma; tratamento com antibioticoterapia;",
        "explanation": "Incorreta: Queratoacantoma é lesão cupuliforme de crescimento rápido com rolha córnea central e não se trata com antibióticos.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "dermatofibroma; tratamento com observação e seguimento;",
        "explanation": "Incorreta: Dermatofibroma é lesão benigna firme, sem ulceração ou linfadenopatia axilar.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "carcinoma espinocelular; tratamento com eletrocoagulação e curetagem;",
        "explanation": "Incorreta: Mesmo que fosse carcinoma espinocelular ulcerado com linfonodo palpável, eletrocoagulação e curetagem são contraindicadas em lesões de alto risco.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "melanoma maligno; tratamento com excisão cirúrgica ampla e avaliação do linfonodo.",
        "explanation": "A alternativa **E** está correta. Lesão pigmentada acastanhada, de crescimento progressivo, bordas irregulares, diâmetro > 6 mm (1,2 cm), ulceração e **linfadenomegalia axilar palpável** preenche os critérios ABCDE para **melanoma maligno**. Segundo as diretrizes da NCCN e do GBM (Grupo Brasileiro de Melanoma), o manejo definitivo exige **excisão cirúrgica ampla** com margens adequadas (definidas pelo Breslow) associada à **avaliação linfonodal** (biópsia/PAAF do linfonodo clinicamente suspeito).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Lesão pigmentada acastanhada, de crescimento progressivo, bordas irregulares, diâmetro > 6 mm (1,2 cm), ulceração e **linfadenomegalia axilar palpável** preenche os critérios ABCDE para **melanoma maligno**. Segundo as diretrizes da NCCN e do GBM (Grupo Brasileiro de Melanoma), o manejo definitivo exige **excisão cirúrgica ampla** com margens adequadas (definidas pelo Breslow) associada à **avaliação linfonodal** (biópsia/PAAF do linfonodo clinicamente suspeito).\n- **A) Incorreta:** Carcinoma basocelular raramente metastatiza para linfonodos e não deve ser tratado com crioterapia nesse cenário.\n- **B) Incorreta:** Queratoacantoma é lesão cupuliforme de crescimento rápido com rolha córnea central e não se trata com antibióticos.\n- **C) Incorreta:** Dermatofibroma é lesão benigna firme, sem ulceração ou linfadenopatia axilar.\n- **D) Incorreta:** Mesmo que fosse carcinoma espinocelular ulcerado com linfonodo palpável, eletrocoagulação e curetagem são contraindicadas em lesões de alto risco.",
    "perolaClinica": "Lesão pigmentada acastanhada, de crescimento progressivo, bordas irregulares, diâmetro > 6 mm (1,2 cm), ulceração e **linfadenomegalia axilar palpável** preenche os critérios ABCDE para **melanoma maligno**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-022",
    "code": "Q-ENARE24-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Otorrinolaringologia e Cabeça e Pescoço",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-otorrinolaringologia-e-cabeca-e-pescoco",
    "tags": ["carcinoma-espinocelular","cancer-de-boca","biopsia","estadiamento"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 47 anos de idade, fumante há 30 anos e com histórico de consumo de bebidas alcoólicas destiladas, apresenta uma úlcera dolorosa na língua há 3 meses. Relata que a lesão não cicatriza e está aumentando de tamanho. Além disso, nota dificuldade para engolir e dor referida no ouvido. Ao exame físico, observa-se uma úlcera irregular na borda lateral da língua, com margens endurecidas e base infiltrada. Não há linfonodos cervicais palpáveis.\n\nO diagnóstico provável e o tratamento inicial mais adequado para esse paciente são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "adenoma; ressecção com anestesia local;",
        "explanation": "Incorreta: Adenoma de glândula salivar menor não se apresenta tipicamente como úlcera infiltrada em borda lateral de língua em tabagista/etilista.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "candidíase oral; iniciar tratamento antifúngico tópico;",
        "explanation": "Incorreta: Candidíase oral produz placas esbranquiçadas removíveis, não úlcera endurecida crônica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "ulceração traumática; recomendações de higiene oral rigorosa e acompanhamento;",
        "explanation": "Incorreta: Úlcera traumática cicatriza em 10–14 dias após remoção do fator irritativo; 3 meses de evolução exige biópsia imediata.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "líquen plano oral; encaminhar para biópsia e tratamento com corticosteroides tópicos;",
        "explanation": "Incorreta: Líquen plano oral apresenta estrias reticulares esbranquiçadas (estrias de Wickham) bilaterais, não úlcera única infiltrada com otalgia reflexa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "carcinoma espinocelular; biópsia da lesão, estadiamento e tratamento cirúrgico.",
        "explanation": "A alternativa **E** está correta. Homem tabagista e etilista pesado com **úlcera crônica (> 2 semanas) na borda lateral da língua**, margens endurecidas, base infiltrada, disfagia e otalgia reflexa tem como principal diagnóstico **carcinoma espinocelular (CEC) de cavidade oral** (responsável por > 90% das neoplasias orais). Conforme diretrizes da NCCN e SBCCP, a conduta é **biópsia incisional confirmatória, estadiamento locorregional/sistêmico e ressecção cirúrgica** (com avaliação cervical).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Homem tabagista e etilista pesado com **úlcera crônica (> 2 semanas) na borda lateral da língua**, margens endurecidas, base infiltrada, disfagia e otalgia reflexa tem como principal diagnóstico **carcinoma espinocelular (CEC) de cavidade oral** (responsável por > 90% das neoplasias orais). Conforme diretrizes da NCCN e SBCCP, a conduta é **biópsia incisional confirmatória, estadiamento locorregional/sistêmico e ressecção cirúrgica** (com avaliação cervical).\n- **A) Incorreta:** Adenoma de glândula salivar menor não se apresenta tipicamente como úlcera infiltrada em borda lateral de língua em tabagista/etilista.\n- **B) Incorreta:** Candidíase oral produz placas esbranquiçadas removíveis, não úlcera endurecida crônica.\n- **C) Incorreta:** Úlcera traumática cicatriza em 10–14 dias após remoção do fator irritativo; 3 meses de evolução exige biópsia imediata.\n- **D) Incorreta:** Líquen plano oral apresenta estrias reticulares esbranquiçadas (estrias de Wickham) bilaterais, não úlcera única infiltrada com otalgia reflexa.",
    "perolaClinica": "Homem tabagista e etilista pesado com **úlcera crônica (> 2 semanas) na borda lateral da língua**, margens endurecidas, base infiltrada, disfagia e otalgia reflexa tem como principal diagnóstico **carcinoma espinocelular",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-023",
    "code": "Q-ENARE24-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": ["trauma-abdominal","trauma-esplenico","esplenectomia","tratamento-nao-operatorio"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um adolescente de 16 anos foi admitido no pronto-socorro após queda de motocicleta. Ele estava lúcido e com sinais vitais estáveis. Realizou-se uma tomografia computadorizada do abdômen, que mostrou uma laceração esplênica grau II. Optou-se por um tratamento conservador inicial com monitoramento em unidade de terapia intensiva. Após 24 horas de internação, o paciente apresentou uma queda súbita na pressão arterial, aumento da frequência cardíaca e sinais de irritação peritoneal. Uma nova TC de abdômen mostrou aumento significativo do hemoperitônio e sinais de ruptura esplênica adicional.\n\nDiante desse quadro, a conduta mais apropriada para esse paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "indicar a cirurgia de Warren;",
        "explanation": "Incorreta: Cirurgia de Warren (derivação esplenorrenal distal) é procedimento eletivo para hipertensão portal, sem relação com trauma esplênico.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "realizar uma embolização seletiva da artéria esplênica;",
        "explanation": "Incorreta: Embolização arterial esplênica é reservada a pacientes hemodinamicamente estáveis ou respondedores transitórios sem peritonite.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "transferi-lo para a sala de cirurgia para uma esplenectomia de emergência;",
        "explanation": "A alternativa **C** está correta. O paciente apresentou **falha do tratamento não operatório (TNO)** de trauma esplênico, caracterizada por **instabilidade hemodinâmica súbita, sinais de irritação peritoneal e aumento do hemoperitônio**. Segundo o **ATLS (10ª edição)** e diretrizes da WSES/EAST, instabilidade hemodinâmica ou peritonite no trauma abdominal contuso constituem indicação absoluta de **laparotomia exploradora de emergência (esplenectomia)**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "continuar com o manejo conservador e aumentar a frequência de monitoramento hemodinâmico;",
        "explanation": "Incorreta: Manter tratamento conservador diante de choque hemorrágico e peritonite coloca a vida do paciente em risco imediato.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "administrar fluidos intravenosos e realizar a transfusão sanguínea, mantendo o paciente sob observação.",
        "explanation": "Incorreta: Reposição volêmica/hemotransfusão são medidas de suporte simultâneas, mas não substituem o controle cirúrgico definitivo da hemorragia.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O paciente apresentou **falha do tratamento não operatório (TNO)** de trauma esplênico, caracterizada por **instabilidade hemodinâmica súbita, sinais de irritação peritoneal e aumento do hemoperitônio**. Segundo o **ATLS (10ª edição)** e diretrizes da WSES/EAST, instabilidade hemodinâmica ou peritonite no trauma abdominal contuso constituem indicação absoluta de **laparotomia exploradora de emergência (esplenectomia)**.\n- **A) Incorreta:** Cirurgia de Warren (derivação esplenorrenal distal) é procedimento eletivo para hipertensão portal, sem relação com trauma esplênico.\n- **B) Incorreta:** Embolização arterial esplênica é reservada a pacientes hemodinamicamente estáveis ou respondedores transitórios sem peritonite.\n- **D) Incorreta:** Manter tratamento conservador diante de choque hemorrágico e peritonite coloca a vida do paciente em risco imediato.\n- **E) Incorreta:** Reposição volêmica/hemotransfusão são medidas de suporte simultâneas, mas não substituem o controle cirúrgico definitivo da hemorragia.",
    "perolaClinica": "O paciente apresentou **falha do tratamento não operatório (TNO)** de trauma esplênico, caracterizada por **instabilidade hemodinâmica súbita, sinais de irritação peritoneal e aumento do hemoperitônio**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-024",
    "code": "Q-ENARE24-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Queimaduras e Lesão Inalatória",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-queimaduras-e-lesao-inalatoria",
    "tags": ["queimaduras","formula-de-parkland","ressuscitacao-hidrica","ringer-lactato"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pedro Paulo, um homem de 41 anos, foi admitido no pronto-socorro após sofrer queimaduras extensas em um incêndio no seu local de trabalho. Ele apresentava queimaduras de segundo grau que cobriam aproximadamente 45% de sua superfície corporal total (SCT). O paciente pesava 70 kg e estava consciente e lúcido, mas sentia dor intensa e desconforto. Os sinais vitais eram: frequência cardíaca: 120 bpm; pressão arterial de 100/60 mmHg; frequência respiratória de 24 ipm e saturação de oxigênio de 94% em ar ambiente. Seu médico decidiu iniciar a reanimação hídrica imediatamente.\n\nA melhor abordagem inicial para a reanimação hídrica de Pedro Paulo é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administrar 2 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, dividindo o volume total igualmente ao longo do período;",
        "explanation": "Incorreta: Mesmo usando 2 mL/kg/%SCQ (ATLS 10ª ed.), a divisão NÃO é igual ao longo das 24 horas, e sim metade nas primeiras 8h e metade nas 16h seguintes.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "administrar 8 ml/kg/%SCT de solução cristaloide de NaCl a 0,9% nas primeiras 24 horas, com um ajuste para cada %SCT adicional acima de 50%;",
        "explanation": "Incorreta: 8 mL/kg/%SCQ com NaCl 0,9% causa sobrecarga hídrica excessiva e acidose metabólica hiperclorêmica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "administrar 6 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, com um ajuste de 10% para cada grau adicional de queimadura acima do segundo grau;",
        "explanation": "Incorreta: Não existe fórmula padrão de 6 mL/kg/%SCQ com ajuste por grau de queimadura.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "administrar 4 ml/kg/%SCT de solução de Ringer Lactato nas primeiras 24 horas, dividindo o volume total em duas metades: uma nas primeiras 8 horas e a outra nas 16 horas seguintes;",
        "explanation": "A alternativa **D** está correta. A fórmula clássica de **Parkland** (Sabiston / Ministério da Saúde) preconiza **4 mL/kg/%SCQ de Ringer Lactato nas primeiras 24 horas**, administrando **metade do volume nas primeiras 8 horas** a partir do momento da queimadura e a **outra metade nas 16 horas subsequentes**, ajustando-se o ritmo conforme o débito urinário (0,5 mL/kg/h em adultos). (Observação: embora o ATLS 10ª ed. proponha 2 mL/kg/%SCQ, também divide 50% nas primeiras 8h e 50% nas 16h seguintes — nunca igualmente ao longo de 24h.)",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "administrar 4 ml/kg/%SCT de solução coloidal de albumina nas primeiras 24 horas, dividindo o volume total em duas metades: uma nas primeiras 8 horas e a outra nas 16 horas seguintes.",
        "explanation": "Incorreta: Coloides (albumina) não são recomendados nas primeiras 24 horas pela hiperpermeabilidade capilar inicial.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A fórmula clássica de **Parkland** (Sabiston / Ministério da Saúde) preconiza **4 mL/kg/%SCQ de Ringer Lactato nas primeiras 24 horas**, administrando **metade do volume nas primeiras 8 horas** a partir do momento da queimadura e a **outra metade nas 16 horas subsequentes**, ajustando-se o ritmo conforme o débito urinário (0,5 mL/kg/h em adultos). (Observação: embora o ATLS 10ª ed. proponha 2 mL/kg/%SCQ, também divide 50% nas primeiras 8h e 50% nas 16h seguintes — nunca igualmente ao longo de 24h.)\n- **A) Incorreta:** Mesmo usando 2 mL/kg/%SCQ (ATLS 10ª ed.), a divisão NÃO é igual ao longo das 24 horas, e sim metade nas primeiras 8h e metade nas 16h seguintes.\n- **B) Incorreta:** 8 mL/kg/%SCQ com NaCl 0,9% causa sobrecarga hídrica excessiva e acidose metabólica hiperclorêmica.\n- **C) Incorreta:** Não existe fórmula padrão de 6 mL/kg/%SCQ com ajuste por grau de queimadura.\n- **E) Incorreta:** Coloides (albumina) não são recomendados nas primeiras 24 horas pela hiperpermeabilidade capilar inicial.",
    "perolaClinica": "A fórmula clássica de **Parkland** (Sabiston / Ministério da Saúde) preconiza **4 mL/kg/%SCQ de Ringer Lactato nas primeiras 24 horas**, administrando **metade do volume nas primeiras 8 horas** a partir do momento da que",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-025",
    "code": "Q-ENARE24-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Obstrutivo",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-abdome-agudo-obstrutivo",
    "tags": ["abdome-agudo-obstrutivo","bridas","sonda-nasogastrica","tratamento-conservador"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 48 anos apresenta-se no pronto-socorro com dor abdominal intensa e intermitente há 18 horas, com náuseas e vômitos. Ele relata não ter evacuado ou eliminado gases nas últimas 48 horas. Sua história patológica pregressa inclui uma apendicectomia realizada há 20 anos e uma cirurgia para correção de hérnia inguinoescrotal há 5 anos. O exame físico mostrou o paciente lúcido e apirético; sinais vitais: PA 125/80 mmHg, FC 90 bpm, FR 20 ipm, T 36,8 °C. O abdômen está distendido. Peristalse de luta apresenta ruídos metálicos e hipercinéticos. Sente dor à palpação difusa, porém sem sinais de defesa e com ausência de hérnias palpáveis. Os exames laboratoriais registram hemograma com leucócitos de 8.000/mm³ e eletrólitos dentro dos limites normais. Os exames de imagem revelam rotina de abdômen agudo, mostrando distensão de alças intestinais com níveis hidroaéreos, e sem evidências de tumorações.\n\nDiante desse quadro clínico, a etapa inicial mais apropriada para o manejo do caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "colonoscopia urgente;",
        "explanation": "Incorreta: Colonoscopia urgente não é indicada na obstrução de delgado por aderências.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "administração de laxantes e observação;",
        "explanation": "Incorreta: Laxantes são contraindicados na obstrução intestinal mecânica pelo risco de piora da distensão e perfuração.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "cirurgia imediata para exploração abdominal;",
        "explanation": "Incorreta: Cirurgia imediata é indicada apenas na suspeita de estrangulamento/isquemia, peritonite, hérnia estrangulada ou falha do tratamento conservador.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "alta com orientação para retorno no caso de persistirem os sintomas;",
        "explanation": "Incorreta: Obstrução intestinal exige internação hospitalar e vigilância clínica rigorosa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "administração intravenosa de líquidos, descompressão nasogástrica e observação.",
        "explanation": "A alternativa **E** está correta. O paciente apresenta **obstrução intestinal por bridas (aderências)** — causa mais frequente de obstrução de intestino delgado em pacientes com cirurgias abdominais prévias — **sem sinais de complicação/estrangulamento** (afebril, estável, sem peritonite, leucograma normal). Conforme as diretrizes de Bologna (WSES) e Sabiston, o manejo inicial é **conservador**: jejum, **hidratação endovenosa com correção hidroeletrolítica, descompressão com sonda nasogástrica e observação seriada** (taxa de resolução espontânea de 65–80% em 48–72h).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. O paciente apresenta **obstrução intestinal por bridas (aderências)** — causa mais frequente de obstrução de intestino delgado em pacientes com cirurgias abdominais prévias — **sem sinais de complicação/estrangulamento** (afebril, estável, sem peritonite, leucograma normal). Conforme as diretrizes de Bologna (WSES) e Sabiston, o manejo inicial é **conservador**: jejum, **hidratação endovenosa com correção hidroeletrolítica, descompressão com sonda nasogástrica e observação seriada** (taxa de resolução espontânea de 65–80% em 48–72h).\n- **A) Incorreta:** Colonoscopia urgente não é indicada na obstrução de delgado por aderências.\n- **B) Incorreta:** Laxantes são contraindicados na obstrução intestinal mecânica pelo risco de piora da distensão e perfuração.\n- **C) Incorreta:** Cirurgia imediata é indicada apenas na suspeita de estrangulamento/isquemia, peritonite, hérnia estrangulada ou falha do tratamento conservador.\n- **D) Incorreta:** Obstrução intestinal exige internação hospitalar e vigilância clínica rigorosa.",
    "perolaClinica": "O paciente apresenta **obstrução intestinal por bridas (aderências)** — causa mais frequente de obstrução de intestino delgado em pacientes com cirurgias abdominais prévias — **sem sinais de complicação/estrangulamento**",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-026",
    "code": "Q-ENARE24-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Ortopedia e Traumatologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-ortopedia-e-traumatologia-basica",
    "tags": ["fratura-de-umero","ortopedia","reducao-aberta-e-fixacao-interna","traumatologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 55 anos sofreu queda de uma altura de aproximadamente dois metros enquanto trabalhava em uma obra. Ele caiu diretamente sobre o braço direito estendido. No pronto-socorro, apresentava dor intensa, incapacidade de mover o braço direito e deformidade visível no meio do braço. As radiografias mostraram uma fratura diafisária do úmero com desvio. O exame neurovascular estava normal.\n\nO tratamento mais apropriado para esse paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "fixação externa;",
        "explanation": "Incorreta: Fixação externa é reservada para fraturas expostas graves com extensa lesão de partes moles ou politraumatizados instáveis (controle de danos).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "redução aberta e fixação interna;",
        "explanation": "A alternativa **B** está correta conforme o gabarito definitivo da banca (FGV/ENARE). Diante de **fratura diafisária do úmero com desvio significativo e deformidade visível** em adulto ativo vítima de queda de altura (trauma de maior energia), a banca considerou a **redução aberta e fixação interna (RAFI)** com placa e parafusos (ou haste intramedular) como a abordagem mais apropriada para restabelecer o alinhamento anatômico, permitir mobilização precoce e reduzir risco de pseudartrose ou consolidação viciosa (Rockwood & Green / SBOT).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "imobilização com uma tipoia e observação;",
        "explanation": "Incorreta: Apenas tipoia e observação não estabilizam adequadamente uma fratura diafisária desviada.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "redução fechada e imobilização com gesso;",
        "explanation": "Incorreta: Embora fraturas diafisárias de úmero com desvio aceitável possam ser tratadas conservadoramente com órtese funcional (Sarmiento) ou pinça de confeiteiro, a banca destacou o desvio/deformidade visível para indicar tratamento cirúrgico definitivo (RAFI).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "administração de analgésicos e alta para casa.",
        "explanation": "Incorreta: Alta apenas com analgésicos sem estabilização ortopédica é conduta inadequada.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta conforme o gabarito definitivo da banca (FGV/ENARE). Diante de **fratura diafisária do úmero com desvio significativo e deformidade visível** em adulto ativo vítima de queda de altura (trauma de maior energia), a banca considerou a **redução aberta e fixação interna (RAFI)** com placa e parafusos (ou haste intramedular) como a abordagem mais apropriada para restabelecer o alinhamento anatômico, permitir mobilização precoce e reduzir risco de pseudartrose ou consolidação viciosa (Rockwood & Green / SBOT).\n- **A) Incorreta:** Fixação externa é reservada para fraturas expostas graves com extensa lesão de partes moles ou politraumatizados instáveis (controle de danos).\n- **C) Incorreta:** Apenas tipoia e observação não estabilizam adequadamente uma fratura diafisária desviada.\n- **D) Incorreta:** Embora fraturas diafisárias de úmero com desvio aceitável possam ser tratadas conservadoramente com órtese funcional (Sarmiento) ou pinça de confeiteiro, a banca destacou o desvio/deformidade visível para indicar tratamento cirúrgico definitivo (RAFI).\n- **E) Incorreta:** Alta apenas com analgésicos sem estabilização ortopédica é conduta inadequada.",
    "perolaClinica": "conforme o gabarito definitivo da banca (FGV/ENARE).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-027",
    "code": "Q-ENARE24-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": ["trauma-toracico","tamponamento-cardiaco","toracotomia-de-emergencia","triade-de-beck"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Após um traumatismo torácico contuso, um paciente apresenta sinais de tamponamento cardíaco, incluindo hipotensão, taquicardia, aumento da turgência jugular e pulso fino.\n\nA conduta clínico-cirúrgica mais apropriada para esse paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realização de pericardiocentese emergencial;",
        "explanation": "Incorreta: A pericardiocentese é apenas medida temporária de salvamento na ausência de equipe cirúrgica imediata, não a conduta cirúrgica definitiva.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "ultrassonografia e punção aspirativa por agulha fina;",
        "explanation": "Incorreta: PAAF não trata tamponamento cardíaco.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "administração de fluidos intravenosos e monitoramento contínuo;",
        "explanation": "Incorreta: Expansão volêmica isolada é apenas medida transitória e não resolve a compressão mecânica das câmaras cardíacas.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "realização de toracotomia de emergência para drenagem do pericárdio;",
        "explanation": "A alternativa **D** está correta. O paciente apresenta **tríade de Beck / tamponamento cardíaco traumático** com choque obstrutivo. Segundo o **ATLS (10ª edição)**, o tratamento definitivo do tamponamento cardíaco traumático é a **intervenção cirúrgica imediata (toracotomia ou esternotomia de emergência)** para descompressão pericárdica e reparo da lesão cardíaca/vascular; a pericardiocentese fica restrita apenas como medida temporária de ponte quando não há cirurgião/centro cirúrgico imediatamente disponível (além de frequentemente falhar por sangue coagulado no saco pericárdico).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "inserção de um tubo torácico para drenagem do espaço pleural esquerdo.",
        "explanation": "Incorreta: Drenagem pleural trata pneumotórax/hemotórax, não hemopericárdio.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. O paciente apresenta **tríade de Beck / tamponamento cardíaco traumático** com choque obstrutivo. Segundo o **ATLS (10ª edição)**, o tratamento definitivo do tamponamento cardíaco traumático é a **intervenção cirúrgica imediata (toracotomia ou esternotomia de emergência)** para descompressão pericárdica e reparo da lesão cardíaca/vascular; a pericardiocentese fica restrita apenas como medida temporária de ponte quando não há cirurgião/centro cirúrgico imediatamente disponível (além de frequentemente falhar por sangue coagulado no saco pericárdico).\n- **A) Incorreta:** A pericardiocentese é apenas medida temporária de salvamento na ausência de equipe cirúrgica imediata, não a conduta cirúrgica definitiva.\n- **B) Incorreta:** PAAF não trata tamponamento cardíaco.\n- **C) Incorreta:** Expansão volêmica isolada é apenas medida transitória e não resolve a compressão mecânica das câmaras cardíacas.\n- **E) Incorreta:** Drenagem pleural trata pneumotórax/hemotórax, não hemopericárdio.",
    "perolaClinica": "O paciente apresenta **tríade de Beck / tamponamento cardíaco traumático** com choque obstrutivo.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-028",
    "code": "Q-ENARE24-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": ["sindrome-de-dumping","gastrectomia","cancer-gastrico","complicacao-pos-operatoria"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 58 anos foi submetido a uma gastrectomia subtotal devido a um adenocarcinoma gástrico. Após a cirurgia, ele desenvolveu episódios frequentes de sudorese, palpitações, tonturas e diarreia após as refeições.\n\nEssa complicação pós-operatória está relacionada:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ao desenvolvimento de diabetes mellitus tipo 2;",
        "explanation": "Incorreta: O quadro é pós-prandial vasomotor/diarreico típico de esvaziamento gástrico acelerado, não de diabetes tipo 2.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a uma trombose venosa profunda;",
        "explanation": "Incorreta: TVP manifesta-se por edema/dor assimétrica em membro inferior, sem relação com refeições.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "à síndrome de dumping;",
        "explanation": "A alternativa **C** está correta. A **síndrome de dumping** ocorre após cirurgias que alteram o reservatório gástrico ou o esfíncter pilórico (como gastrectomia subtotal), levando ao esvaziamento rápido de conteúdo hiperosmolar no intestino delgado. Manifesta-se na forma precoce (15–30 min pós-prandial) por sintomas vasomotores (sudorese, palpitações, tontura, rubor) e gastrointestinais (diarreia, cólicas) e na forma tardia (1–3h) por hipoglicemia reativa hiperinsulinêmica (Sabiston).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "ao aumento da densidade óssea;",
        "explanation": "Incorreta: Gastrectomias associam-se a risco de osteopenia/osteoporose (redução da absorção de cálcio/vitamina D), não aumento da densidade óssea.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "à presença de úlcera alcalina.",
        "explanation": "Incorreta: Gastrite/úlcera por refluxo alcalino cursa com dor epigástrica em queimação contínua e vômitos biliosos.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. A **síndrome de dumping** ocorre após cirurgias que alteram o reservatório gástrico ou o esfíncter pilórico (como gastrectomia subtotal), levando ao esvaziamento rápido de conteúdo hiperosmolar no intestino delgado. Manifesta-se na forma precoce (15–30 min pós-prandial) por sintomas vasomotores (sudorese, palpitações, tontura, rubor) e gastrointestinais (diarreia, cólicas) e na forma tardia (1–3h) por hipoglicemia reativa hiperinsulinêmica (Sabiston).\n- **A) Incorreta:** O quadro é pós-prandial vasomotor/diarreico típico de esvaziamento gástrico acelerado, não de diabetes tipo 2.\n- **B) Incorreta:** TVP manifesta-se por edema/dor assimétrica em membro inferior, sem relação com refeições.\n- **D) Incorreta:** Gastrectomias associam-se a risco de osteopenia/osteoporose (redução da absorção de cálcio/vitamina D), não aumento da densidade óssea.\n- **E) Incorreta:** Gastrite/úlcera por refluxo alcalino cursa com dor epigástrica em queimação contínua e vômitos biliosos.",
    "perolaClinica": "A **síndrome de dumping** ocorre após cirurgias que alteram o reservatório gástrico ou o esfíncter pilórico (como gastrectomia subtotal), levando ao esvaziamento rápido de conteúdo hiperosmolar no intestino delgado.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-029",
    "code": "Q-ENARE24-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Doença Inflamatória Intestinal",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-doenca-inflamatoria-intestinal",
    "tags": ["doenca-de-crohn","doenca-inflamatoria-intestinal","ileite-terminal","dor-em-fid"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente jovem, sem histórico familiar de câncer colorretal, apresenta sintomas como alterações no hábito intestinal, pequeno sangramento retal, dor abdominal, perda de peso inexplicada e palpação abdominal dolorosa no quadrante inferior direito.\n\nA hipótese diagnóstica mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "síndrome do intestino irritável;",
        "explanation": "Incorreta: Síndrome do intestino irritável não causa perda de peso inexplicada nem sangramento retal (sinais de alarme).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "doença de Crohn;",
        "explanation": "A alternativa **B** está correta. Paciente jovem com diarreia/alteração do hábito intestinal, **perda ponderal** (sinal de alarme que afasta distúrbio funcional), discreto sangramento retal e **dor localizada no quadrante inferior direito** (sítio clássico de acometimento do íleo terminal e ceco) tem como principal hipótese **doença de Crohn** (diretriz ECCO / GEDIIB).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "retocolite ulcerativa;",
        "explanation": "Incorreta: Retocolite ulcerativa acomete obrigatoriamente o reto com sangramento vivo/muco predominante e dor mais típica em fossa ilíaca esquerda, poupando classicamente o íleo terminal.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "polipose adenomatosa familiar;",
        "explanation": "Incorreta: PAF é autossômica dominante com forte histórico familiar (ausente no caso) e centenas de pólipos colônicos.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "síndrome de Gardner.",
        "explanation": "Incorreta: Síndrome de Gardner é variante da PAF com osteomas, tumores desmoides e cistos epidermoides, também hereditária.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Paciente jovem com diarreia/alteração do hábito intestinal, **perda ponderal** (sinal de alarme que afasta distúrbio funcional), discreto sangramento retal e **dor localizada no quadrante inferior direito** (sítio clássico de acometimento do íleo terminal e ceco) tem como principal hipótese **doença de Crohn** (diretriz ECCO / GEDIIB).\n- **A) Incorreta:** Síndrome do intestino irritável não causa perda de peso inexplicada nem sangramento retal (sinais de alarme).\n- **C) Incorreta:** Retocolite ulcerativa acomete obrigatoriamente o reto com sangramento vivo/muco predominante e dor mais típica em fossa ilíaca esquerda, poupando classicamente o íleo terminal.\n- **D) Incorreta:** PAF é autossômica dominante com forte histórico familiar (ausente no caso) e centenas de pólipos colônicos.\n- **E) Incorreta:** Síndrome de Gardner é variante da PAF com osteomas, tumores desmoides e cistos epidermoides, também hereditária.",
    "perolaClinica": "Paciente jovem com diarreia/alteração do hábito intestinal, **perda ponderal** (sinal de alarme que afasta distúrbio funcional), discreto sangramento retal e **dor localizada no quadrante inferior direito** (sítio clássi",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-030",
    "code": "Q-ENARE24-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Apendicite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-apendicite-aguda",
    "tags": ["apendicite-aguda","apendicite-perfurada","apendicectomia","peritonite"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 26 anos, atlético, em boas condições físicas, se apresenta ao pronto-socorro com dor abdominal intensa no quadrante inferior direito, que começou há 3 dias e piorou progressivamente. Ele relata náuseas, vômitos e febre. Ao exame físico, está taquicárdico, febril (38,5 °C), com defesa muscular e dor à descompressão brusca no quadrante inferior direito. A palpação abdominal revela sinais de irritação peritoneal. Os exames laboratoriais mostram leucocitose com desvio à esquerda. Uma tomografia computadorizada de abdômen revela apêndice distendido com parede espessada, líquido livre na cavidade abdominal e sinais de abscesso periapendicular.\n\nO diagnóstico mais provável e a abordagem mais adequada para esse paciente são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "apendicite não complicada; apendicectomia laparoscópica com recomposição hidroeletrolítica e antibioticoterapia;",
        "explanation": "Incorreta: Classifica erroneamente como \"apendicite não complicada\", ignorando o líquido livre, o abscesso periapendicular e a peritonite.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "apendicite perfurada com peritonite; apendicectomia aberta, drenagem do abscesso e antibioticoterapia;",
        "explanation": "A alternativa **B** está correta. O paciente apresenta **apendicite aguda complicada (perfurada com peritonite e abscesso periapendicular)** evidenciada por 3 dias de evolução, febre alta, irritação peritoneal, líquido livre na cavidade e abscesso à TC. Segundo as diretrizes da WSES (Jerusalém 2020) e Sabiston, a presença de peritonite exige **intervenção cirúrgica de urgência com apendicectomia, lavagem/drenagem do abscesso e antibioticoterapia venosa de amplo espectro** (a via aberta ou laparoscópica é aceita conforme experiência da equipe; entre as opções, apenas B traz o diagnóstico correto de apendicite perfurada com peritonite).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "apendicite retrocecal; observação e antibioticoterapia;",
        "explanation": "Incorreta: Conduta expectante sem cirurgia é contraindicada diante de peritonite difusa.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "gastroenterite viral; hidratação oral e observação;",
        "explanation": "Incorreta: A TC confirma apendicite complicada, afastando gastroenterite viral.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "doença inflamatória intestinal; corticosteroides e observação.",
        "explanation": "Incorreta: Corticosteroides piorariam dramaticamente uma sepse abdominal por apendicite perfurada.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. O paciente apresenta **apendicite aguda complicada (perfurada com peritonite e abscesso periapendicular)** evidenciada por 3 dias de evolução, febre alta, irritação peritoneal, líquido livre na cavidade e abscesso à TC. Segundo as diretrizes da WSES (Jerusalém 2020) e Sabiston, a presença de peritonite exige **intervenção cirúrgica de urgência com apendicectomia, lavagem/drenagem do abscesso e antibioticoterapia venosa de amplo espectro** (a via aberta ou laparoscópica é aceita conforme experiência da equipe; entre as opções, apenas B traz o diagnóstico correto de apendicite perfurada com peritonite).\n- **A) Incorreta:** Classifica erroneamente como \"apendicite não complicada\", ignorando o líquido livre, o abscesso periapendicular e a peritonite.\n- **C) Incorreta:** Conduta expectante sem cirurgia é contraindicada diante de peritonite difusa.\n- **D) Incorreta:** A TC confirma apendicite complicada, afastando gastroenterite viral.\n- **E) Incorreta:** Corticosteroides piorariam dramaticamente uma sepse abdominal por apendicite perfurada.",
    "perolaClinica": "O paciente apresenta **apendicite aguda complicada (perfurada com peritonite e abscesso periapendicular)** evidenciada por 3 dias de evolução, febre alta, irritação peritoneal, líquido livre na cavidade e abscesso à TC.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-031",
    "code": "Q-ENARE24-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Gestação Ectópica",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-gestacao-ectopica",
    "tags": ["gestacao-ectopica","gravidez-tubaria-rota","sangramento-primeiro-trimestre","choque-hemorragico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 22 anos apresentou quadro de dor pélvica súbita há cerca de 2 horas. Ao exame, constata-se que está hipocorada ++/4, com PA = 90 x 40 mmHg e FC = 118 bpm. Seu abdômen está atípico com dor à palpação difusa, mais acentuada em fossa ilíaca direita, com descompressão dolorosa.\n\nO diagnóstico mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "apendicite aguda;",
        "explanation": "Incorreta: Apendicite aguda tem evolução progressiva (horas a dias) e não provoca choque hipovolêmico agudo com anemia em 2 horas.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "cisto ovariano direito roto;",
        "explanation": "Incorreta: Embora cisto ovariano hemorrágico roto possa causar hemoperitônio, a gravidez ectópica rota é a causa mais grave e mais provável de choque hemorrágico súbito em mulher em idade reprodutiva.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "gravidez tubária rota;",
        "explanation": "A alternativa **C** está correta. Em mulher em idade fértil (22 anos) com **dor pélvica/abdominal de início súbito associada a choque hipovolêmico agudo** (hipocorada ++/4, PA 90x40 mmHg, FC 118 bpm) e sinais de irritação peritoneal, a principal hipótese diagnóstica que deve ser imediatamente considerada e excluída/tratada é a **gravidez ectópica (tubária) rota** (FEBRASGO / Sabiston).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "mittelschmerz;",
        "explanation": "Incorreta: *Mittelschmerz* (dor ovulatória) é autolimitada e jamais cursa com choque hipovolêmico.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "torção de ovário direito.",
        "explanation": "Incorreta: Torção anexial causa dor intensa súbita com náuseas/vômitos, mas não produz hemorragia maciça com hipocoração e choque hipovolêmico.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Em mulher em idade fértil (22 anos) com **dor pélvica/abdominal de início súbito associada a choque hipovolêmico agudo** (hipocorada ++/4, PA 90x40 mmHg, FC 118 bpm) e sinais de irritação peritoneal, a principal hipótese diagnóstica que deve ser imediatamente considerada e excluída/tratada é a **gravidez ectópica (tubária) rota** (FEBRASGO / Sabiston).\n- **A) Incorreta:** Apendicite aguda tem evolução progressiva (horas a dias) e não provoca choque hipovolêmico agudo com anemia em 2 horas.\n- **B) Incorreta:** Embora cisto ovariano hemorrágico roto possa causar hemoperitônio, a gravidez ectópica rota é a causa mais grave e mais provável de choque hemorrágico súbito em mulher em idade reprodutiva.\n- **D) Incorreta:** *Mittelschmerz* (dor ovulatória) é autolimitada e jamais cursa com choque hipovolêmico.\n- **E) Incorreta:** Torção anexial causa dor intensa súbita com náuseas/vômitos, mas não produz hemorragia maciça com hipocoração e choque hipovolêmico.",
    "perolaClinica": "Em mulher em idade fértil (22 anos) com **dor pélvica/abdominal de início súbito associada a choque hipovolêmico agudo** (hipocorada ++/4, PA 90x40 mmHg, FC 118 bpm) e sinais de irritação peritoneal, a principal hipótese",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-032",
    "code": "Q-ENARE24-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hepatocarcinoma e Nódulos Hepáticos",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hepatocarcinoma-e-nodulos-hepaticos",
    "tags": ["hiperplasia-nodular-focal","nodulo-hepatico","cicatriz-central","tomografia-trifasica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 23 anos realizou ultrassonografia abdominal de rotina, na qual foi observado nódulo sólido de 4 cm de diâmetro no fígado. Foi realizada tomografia abdominal com contraste venoso trifásico, que mostrou lesão hipercaptante, bem circunscrita, com cicatriz central localizada em segmento VII do fígado.\n\nDentre os diagnósticos abaixo, o mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "adenoma hepático;",
        "explanation": "Incorreta: Adenoma hepático costuma ser heterogêneo (áreas de hemorragia/necrose), sem cicatriz central típica, e associa-se ao uso prolongado de anticoncepcionais orais.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "hepatocarcinoma;",
        "explanation": "Incorreta: Hepatocarcinoma ocorre em fígados cirróticos/hepatopatas crônicos, com *wash-in* arterial e *wash-out* portal/tardio, sem cicatriz central típica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "hemangioma hepático;",
        "explanation": "Incorreta: Hemangioma hepático apresenta realce nodular periférico descontínuo com preenchimento centrípeto progressivo.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "hiperplasia nodular focal;",
        "explanation": "A alternativa **D** está correta. Mulher jovem assintomática com achado incidental de **nódulo hepático sólido hipervascular (hipercaptante na fase arterial), bem circunscrito e com cicatriz central** na TC trifásica apresenta o aspecto clássico da **hiperplasia nodular focal (HNF)** — segundo tumor benigno hepático mais comum, sem risco de malignização e de manejo conservador (EASL / Sabiston).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "colangiocarcinoma periférico.",
        "explanation": "Incorreta: Colangiocarcinoma periférico acomete pacientes mais velhos e mostra realce tardio com retração capsular e dilatação biliar.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Mulher jovem assintomática com achado incidental de **nódulo hepático sólido hipervascular (hipercaptante na fase arterial), bem circunscrito e com cicatriz central** na TC trifásica apresenta o aspecto clássico da **hiperplasia nodular focal (HNF)** — segundo tumor benigno hepático mais comum, sem risco de malignização e de manejo conservador (EASL / Sabiston).\n- **A) Incorreta:** Adenoma hepático costuma ser heterogêneo (áreas de hemorragia/necrose), sem cicatriz central típica, e associa-se ao uso prolongado de anticoncepcionais orais.\n- **B) Incorreta:** Hepatocarcinoma ocorre em fígados cirróticos/hepatopatas crônicos, com *wash-in* arterial e *wash-out* portal/tardio, sem cicatriz central típica.\n- **C) Incorreta:** Hemangioma hepático apresenta realce nodular periférico descontínuo com preenchimento centrípeto progressivo.\n- **E) Incorreta:** Colangiocarcinoma periférico acomete pacientes mais velhos e mostra realce tardio com retração capsular e dilatação biliar.",
    "perolaClinica": "Mulher jovem assintomática com achado incidental de **nódulo hepático sólido hipervascular (hipercaptante na fase arterial), bem circunscrito e com cicatriz central** na TC trifásica apresenta o aspecto clássico da **hip",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-033",
    "code": "Q-ENARE24-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": ["trombose-hemorroidaria","doenca-hemorroidaria","doencas-orificiais","banho-de-assento"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 24 anos chega ao consultório relatando dor anal intensa há 4 dias. Ao exame, constata-se nódulo violáceo perianal de 1 cm, localizado posterior à direita, distal à linha denteada e muito doloroso ao toque.\n\nDentre as condutas abaixo, a mais apropriada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "analgésicos tópico e oral, e banho de assento;",
        "explanation": "A alternativa **A** está correta. O quadro é de **trombose hemorroidária externa** (nódulo violáceo perianal distal à linha denteada, doloroso). Segundo as diretrizes da ASCRS (American Society of Colon and Rectal Surgeons) e SBCP, a excisão do trombo/hemorroida trombosada tem benefício principalmente nas **primeiras 72 horas**; como a paciente já tem **4 dias (96 horas)** de evolução, a reabsorção espontânea já se iniciou e o tratamento de escolha é **conservador** (analgésicos orais e tópicos, banhos de assento mornos, dieta rica em fibras e emolientes fecais).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "excisão do trombo com anestesia local;",
        "explanation": "Incorreta: A excisão cirúrgica sob anestesia local é indicada preferencialmente até 72 horas do início dos sintomas (pico da dor).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "ligadura elástica;",
        "explanation": "Incorreta: Ligadura elástica é contraindicada em hemorroidas externas (distais à linha denteada, ricamente inervadas por fibras somáticas) por causar dor excruciante.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "escleroterapia com fenol;",
        "explanation": "Incorreta: Escleroterapia é indicada para hemorroidas internas graus I–II, nunca externas trombosadas.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "hemorroidectomia de urgência.",
        "explanation": "Incorreta: Hemorroidectomia de urgência não é indicada na trombose hemorroidária externa isolada com 4 dias de evolução.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O quadro é de **trombose hemorroidária externa** (nódulo violáceo perianal distal à linha denteada, doloroso). Segundo as diretrizes da ASCRS (American Society of Colon and Rectal Surgeons) e SBCP, a excisão do trombo/hemorroida trombosada tem benefício principalmente nas **primeiras 72 horas**; como a paciente já tem **4 dias (96 horas)** de evolução, a reabsorção espontânea já se iniciou e o tratamento de escolha é **conservador** (analgésicos orais e tópicos, banhos de assento mornos, dieta rica em fibras e emolientes fecais).\n- **B) Incorreta:** A excisão cirúrgica sob anestesia local é indicada preferencialmente até 72 horas do início dos sintomas (pico da dor).\n- **C) Incorreta:** Ligadura elástica é contraindicada em hemorroidas externas (distais à linha denteada, ricamente inervadas por fibras somáticas) por causar dor excruciante.\n- **D) Incorreta:** Escleroterapia é indicada para hemorroidas internas graus I–II, nunca externas trombosadas.\n- **E) Incorreta:** Hemorroidectomia de urgência não é indicada na trombose hemorroidária externa isolada com 4 dias de evolução.",
    "perolaClinica": "O quadro é de **trombose hemorroidária externa** (nódulo violáceo perianal distal à linha denteada, doloroso).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-034",
    "code": "Q-ENARE24-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Pancreatite Aguda e Crônica",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-pancreatite-aguda-e-cronica",
    "tags": ["pancreatite-aguda","escore-bisap","prognostico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O escore BISAP tem sido amplamente utilizado na avaliação prognóstica da pancreatite aguda.\n\nDentre os critérios abaixo, o único que NÃO faz parte desse escore é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "presença de derrame pleural;",
        "explanation": "Incorreta: Derrame pleural corresponde ao \"P\" do BISAP.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "glicemia maior que 200 mg/dL;",
        "explanation": "A alternativa **B** está correta (é o único item que **NÃO** faz parte do escore BISAP). O acrônimo **BISAP** (*Bedside Index for Severity in Acute Pancreatitis*) reúne 5 variáveis nas primeiras 24h: **B**UN (ureia nitrogenada sérica) > 25 mg/dL, **I**mpaired mental status (alteração do estado mental), **S**IRS (≥ 2 critérios), **A**ge (idade) > 60 anos e **P**leural effusion (derrame pleural). A glicemia > 200 mg/dL pertence aos **critérios de Ranson**, não ao BISAP.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "ureia nitrogenada sérica maior que 25 mg/dL;",
        "explanation": "Incorreta: BUN > 25 mg/dL corresponde ao \"B\" do BISAP.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "idade maior que 60 anos;",
        "explanation": "Incorreta: Idade > 60 anos corresponde ao \"A\" do BISAP.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "alteração do estado mental.",
        "explanation": "Incorreta: Alteração do estado mental corresponde ao \"I\" do BISAP.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta (é o único item que **NÃO** faz parte do escore BISAP). O acrônimo **BISAP** (*Bedside Index for Severity in Acute Pancreatitis*) reúne 5 variáveis nas primeiras 24h: **B**UN (ureia nitrogenada sérica) > 25 mg/dL, **I**mpaired mental status (alteração do estado mental), **S**IRS (≥ 2 critérios), **A**ge (idade) > 60 anos e **P**leural effusion (derrame pleural). A glicemia > 200 mg/dL pertence aos **critérios de Ranson**, não ao BISAP.\n- **A) Incorreta:** Derrame pleural corresponde ao \"P\" do BISAP.\n- **C) Incorreta:** BUN > 25 mg/dL corresponde ao \"B\" do BISAP.\n- **D) Incorreta:** Idade > 60 anos corresponde ao \"A\" do BISAP.\n- **E) Incorreta:** Alteração do estado mental corresponde ao \"I\" do BISAP.",
    "perolaClinica": "(é o único item que **NÃO** faz parte do escore BISAP).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-035",
    "code": "Q-ENARE24-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Diverticulite Aguda",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-diverticulite-aguda",
    "tags": ["diverticulite-aguda","hinchey-ib","abscesso-pericolico","drenagem-percutanea"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 58 anos buscou atendimento médico queixando-se de febre e dor em fossa ilíaca esquerda. Realizou tomografia, que mostrou sigmoide espessado com vários divertículos e presença de abscesso pericólico de 6 cm, restrito ao mesentério.\n\nA melhor conduta inicial para esse paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "antibioticoterapia oral ambulatorial;",
        "explanation": "Incorreta: Abscesso de 6 cm exige internação e antibioticoterapia venosa + drenagem, nunca tratamento oral ambulatorial.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "antibioticoterapia venosa exclusiva;",
        "explanation": "Incorreta: Antibioticoterapia venosa exclusiva é indicada para abscessos pequenos (< 3–4 cm).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "antibioticoterapia venosa e drenagem percutânea;",
        "explanation": "A alternativa **C** está correta. Trata-se de **diverticulite aguda complicada com abscesso pericólico de 6 cm** (classificação **Hinchey Ib**). Segundo as diretrizes da ASCRS e WSES, abscessos diverticulares **≥ 4 cm** (ou ≥ 3–4 cm) têm alta taxa de falha com antibiótico isolado, sendo a conduta inicial padrão a **antibioticoterapia venosa associada à drenagem percutânea guiada por TC/USG** (evitando cirurgia de urgência com estoma).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "laparotomia com irrigação da cavidade abdominal;",
        "explanation": "Incorreta: Laparotomia não é a primeira linha na ausência de peritonite difusa ou falha da drenagem percutânea.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "laparotomia com procedimento de Hartmann.",
        "explanation": "Incorreta: Cirurgia de Hartmann de urgência reserva-se para peritonite purulenta/fecal (Hinchey III/IV) ou instabilidade/falha do manejo minimamente invasivo.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Trata-se de **diverticulite aguda complicada com abscesso pericólico de 6 cm** (classificação **Hinchey Ib**). Segundo as diretrizes da ASCRS e WSES, abscessos diverticulares **≥ 4 cm** (ou ≥ 3–4 cm) têm alta taxa de falha com antibiótico isolado, sendo a conduta inicial padrão a **antibioticoterapia venosa associada à drenagem percutânea guiada por TC/USG** (evitando cirurgia de urgência com estoma).\n- **A) Incorreta:** Abscesso de 6 cm exige internação e antibioticoterapia venosa + drenagem, nunca tratamento oral ambulatorial.\n- **B) Incorreta:** Antibioticoterapia venosa exclusiva é indicada para abscessos pequenos (< 3–4 cm).\n- **D) Incorreta:** Laparotomia não é a primeira linha na ausência de peritonite difusa ou falha da drenagem percutânea.\n- **E) Incorreta:** Cirurgia de Hartmann de urgência reserva-se para peritonite purulenta/fecal (Hinchey III/IV) ou instabilidade/falha do manejo minimamente invasivo.",
    "perolaClinica": "Trata-se de **diverticulite aguda complicada com abscesso pericólico de 6 cm** (classificação **Hinchey Ib**).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-036",
    "code": "Q-ENARE24-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Coledocolitíase e Colangite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-coledocolitiase-e-colangite-aguda",
    "tags": ["colangite-aguda","criterios-de-toquio","ictericia","colelitiase"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 45 anos, com diagnóstico de colelitíase há 1 ano, apresenta dor em hipocôndrio direito, icterícia ++/4, temperatura axilar de 38 °C, PA: 110 x 70 mmHg e bilirrubina total de 4,6 mg/dL, com bilirrubina direta de 3,2 mg/dL. Realizou ultrassonografia de abdômen, que mostrou vesícula de paredes finas, contendo múltiplos cálculos e discreta dilatação das vias biliares extra-hepáticas.\n\nAlém da antibioticoterapia venosa, a conduta mais apropriada neste momento é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "hidratação e medidas de suporte, somente;",
        "explanation": "A alternativa **A** está correta conforme o gabarito definitivo (FGV/ENARE) e as **Diretrizes de Tóquio (TG18)**. A paciente apresenta **colangite aguda leve (Grau I)** — tríade de Charcot (dor em HCD, icterícia e febre), porém sem disfunção orgânica (Grau III) e sem critérios de colangite moderada (Grau II: idade ≥ 75 anos, febre ≥ 39 °C, BT ≥ 5 mg/dL, leucócitos > 12.000 ou < 4.000). Na colangite **Grau I**, o tratamento inicial consiste em **antibioticoterapia venosa, hidratação e medidas de suporte**, reservando a drenagem biliar (CPRE) para falha de resposta clínica nas primeiras 24h ou eletivamente após controle da infecção.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "papilotomia endoscópica de urgência;",
        "explanation": "Incorreta: Papilotomia/CPRE de urgência imediata é indicada na colangite grave (Grau III) ou precoce na moderada (Grau II) ou na falha terapêutica da Grau I.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "drenagem cirúrgica das vias biliares com dreno de Kehr;",
        "explanation": "Incorreta: Exploração cirúrgica aberta com dreno de Kehr tem maior morbimortalidade e só é usada quando a via endoscópica/percutânea falha.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "colecistectomia de urgência com colangiografia;",
        "explanation": "Incorreta: Colecistectomia de urgência não descomprime a via biliar principal infectada e é feita apenas após resolução da colangite.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "drenagem biliar externa trans-hepática.",
        "explanation": "Incorreta: Drenagem percutânea trans-hepática é alternativa de segunda linha quando a CPRE não é factível.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta conforme o gabarito definitivo (FGV/ENARE) e as **Diretrizes de Tóquio (TG18)**. A paciente apresenta **colangite aguda leve (Grau I)** — tríade de Charcot (dor em HCD, icterícia e febre), porém sem disfunção orgânica (Grau III) e sem critérios de colangite moderada (Grau II: idade ≥ 75 anos, febre ≥ 39 °C, BT ≥ 5 mg/dL, leucócitos > 12.000 ou < 4.000). Na colangite **Grau I**, o tratamento inicial consiste em **antibioticoterapia venosa, hidratação e medidas de suporte**, reservando a drenagem biliar (CPRE) para falha de resposta clínica nas primeiras 24h ou eletivamente após controle da infecção.\n- **B) Incorreta:** Papilotomia/CPRE de urgência imediata é indicada na colangite grave (Grau III) ou precoce na moderada (Grau II) ou na falha terapêutica da Grau I.\n- **C) Incorreta:** Exploração cirúrgica aberta com dreno de Kehr tem maior morbimortalidade e só é usada quando a via endoscópica/percutânea falha.\n- **D) Incorreta:** Colecistectomia de urgência não descomprime a via biliar principal infectada e é feita apenas após resolução da colangite.\n- **E) Incorreta:** Drenagem percutânea trans-hepática é alternativa de segunda linha quando a CPRE não é factível.",
    "perolaClinica": "conforme o gabarito definitivo (FGV/ENARE) e as **Diretrizes de Tóquio (TG18)**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-037",
    "code": "Q-ENARE24-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Abdominal e Pélvico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-abdominal-e-pelvico",
    "tags": ["trauma-abdominal","choque-hemorragico","fast","transfusao-macica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um homem de 28 anos, admitido no pronto-socorro após um acidente automobilístico, apresenta ectoscopicamente sinais evidentes de trauma abdominal. Na avaliação neurológica inicial, está consciente, mas confuso. Seus sinais vitais são: pressão arterial de 85/60 mmHg, frequência cardíaca de 130 bpm, frequência respiratória de 28 ipm, saturação de oxigênio de 94% em ar ambiente. Sua pele está fria e pegajosa, com enchimento capilar prolongado. Refere dor intensa no abdômen. O abdômen está tenso e distendido, com dor à palpação e sem peristaltismo audível.\n\nOs exames complementares mostram hemoglobina 8 g/dL com hematócrito de 24%. Foi realizado um FAST (Focused Assessment with Sonography for Trauma), que mostrou líquido livre na cavidade peritoneal. Radiografia de tórax e pelve não mostrou fraturas.\n\nNesse momento, seu diagnóstico é de choque hipovolêmico grau III por hemorragia intra-abdominal.\n\nA conduta adotada deverá ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "administração de solução salina isotônica e monitoramento em observação;",
        "explanation": "Incorreta: Apenas cristaloide e observação em paciente instável com FAST positivo agrava coagulopatia dilucional e leva ao óbito.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "transfusão sanguínea de hemoderivados na relação 1/1/1 e intervenção cirúrgica imediata;",
        "explanation": "A alternativa **B** está correta. Paciente politraumatizado com **choque hipovolêmico grau III** (hipotensão 85/60, FC 130, confusão mental, Hb 8 g/dL), abdômen tenso e **FAST positivo** tem indicação absoluta de **ressuscitação hemostática (protocolo de transfusão maciça 1:1:1 — concentrado de hemácias, plasma fresco congelado e plaquetas) + laparotomia exploradora imediata** para controle do sangramento (ATLS 10ª edição).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "administração de medicamentos vasopressores para aumentar a pressão arterial;",
        "explanation": "Incorreta: Vasopressores são contraindicados como tratamento primário do choque hemorrágico traumático.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "administração de diuréticos para reduzir a pressão intra-abdominal;",
        "explanation": "Incorreta: Diuréticos pioram drasticamente a hipovolemia e não reduzem hemoperitônio.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "realização de tomografia computadorizada (TC) de abdômen para avaliação adicional antes de qualquer intervenção.",
        "explanation": "Incorreta: Paciente hemodinamicamente instável com FAST positivo **nunca** deve ser encaminhado à sala de tomografia.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Paciente politraumatizado com **choque hipovolêmico grau III** (hipotensão 85/60, FC 130, confusão mental, Hb 8 g/dL), abdômen tenso e **FAST positivo** tem indicação absoluta de **ressuscitação hemostática (protocolo de transfusão maciça 1:1:1 — concentrado de hemácias, plasma fresco congelado e plaquetas) + laparotomia exploradora imediata** para controle do sangramento (ATLS 10ª edição).\n- **A) Incorreta:** Apenas cristaloide e observação em paciente instável com FAST positivo agrava coagulopatia dilucional e leva ao óbito.\n- **C) Incorreta:** Vasopressores são contraindicados como tratamento primário do choque hemorrágico traumático.\n- **D) Incorreta:** Diuréticos pioram drasticamente a hipovolemia e não reduzem hemoperitônio.\n- **E) Incorreta:** Paciente hemodinamicamente instável com FAST positivo **nunca** deve ser encaminhado à sala de tomografia.",
    "perolaClinica": "Paciente politraumatizado com **choque hipovolêmico grau III** (hipotensão 85/60, FC 130, confusão mental, Hb 8 g/dL), abdômen tenso e **FAST positivo** tem indicação absoluta de **ressuscitação hemostática (protocolo de",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-038",
    "code": "Q-ENARE24-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Abdome Agudo",
    "subtema": "Abdome Agudo Obstrutivo",
    "temaSlug": "cg-abdome",
    "subtemaSlug": "cg-abdome-abdome-agudo-obstrutivo",
    "tags": ["sindrome-de-ogilvie","pseudo-obstrucao-colonica","neostigmina","distensao-abdominal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 81 anos, com diagnóstico de doença pulmonar obstrutiva crônica e insuficiência cardíaca congestiva, é internado para tratamento de pneumonia. Após alguns dias de tratamento com antibióticos e repouso no leito, ele começa a apresentar distensão abdominal significativa, dor leve e náuseas, mas sem vômitos. Não apresenta sinais clínicos de peritonite aos exames físico e laboratorial. Radiografias do abdômen mostram dilatação importante dos cólons, principalmente no ceco e cólon ascendente, porém sem evidência de obstrução mecânica.\n\nDiante desse quadro clínico, o diagnóstico mais provável e a melhor abordagem inicial para o manejo desse paciente são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "síndrome de Ogilvie e tratamento com neostigmina;",
        "explanation": "A alternativa **A** está correta. Idoso acamado com comorbidades clínicas graves (DPOC, ICC, pneumonia) que desenvolve **dilatação maciça e seletiva do cólon (especialmente ceco e cólon ascendente) sem obstrução mecânica e sem peritonite** apresenta o quadro clássico de **síndrome de Ogilvie (pseudo-obstrução colônica aguda)**. Além das medidas de suporte iniciais, o tratamento farmacológico de escolha é a **neostigmina** (anticolinesterásico que restaura o tônus parassimpático colônico, com resposta em > 80% dos casos; diretriz ASGE / Sabiston).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "colite pseudomembranosa e tratamento com metronidazol;",
        "explanation": "Incorreta: Colite pseudomembranosa cursa classicamente com diarreia aquosa fétida, febre e leucocitose acentuada (e a primeira escolha atual é vancomicina oral ou fidaxomicina).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "obstrução intestinal por brida e tratamento com cirurgia exploratória;",
        "explanation": "Incorreta: Não há evidência de obstrução mecânica nem histórico de cirurgia abdominal prévia.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "volvo de sigmoide e tratamento com sigmoidoscopia descompressiva;",
        "explanation": "Incorreta: Volvo de sigmoide apresenta imagem clássica em \"grão de café\" ou \"U invertido\" no sigmoide, não dilatação predominante de ceco/ascendente sem obstrução mecânica.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "íleo paralítico e tratamento com reposição de eletrólitos e mobilização precoce.",
        "explanation": "Incorreta: Íleo paralítico acomete difusamente tanto intestino delgado quanto cólon, e não seletivamente ceco e cólon ascendente como na síndrome de Ogilvie.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Idoso acamado com comorbidades clínicas graves (DPOC, ICC, pneumonia) que desenvolve **dilatação maciça e seletiva do cólon (especialmente ceco e cólon ascendente) sem obstrução mecânica e sem peritonite** apresenta o quadro clássico de **síndrome de Ogilvie (pseudo-obstrução colônica aguda)**. Além das medidas de suporte iniciais, o tratamento farmacológico de escolha é a **neostigmina** (anticolinesterásico que restaura o tônus parassimpático colônico, com resposta em > 80% dos casos; diretriz ASGE / Sabiston).\n- **B) Incorreta:** Colite pseudomembranosa cursa classicamente com diarreia aquosa fétida, febre e leucocitose acentuada (e a primeira escolha atual é vancomicina oral ou fidaxomicina).\n- **C) Incorreta:** Não há evidência de obstrução mecânica nem histórico de cirurgia abdominal prévia.\n- **D) Incorreta:** Volvo de sigmoide apresenta imagem clássica em \"grão de café\" ou \"U invertido\" no sigmoide, não dilatação predominante de ceco/ascendente sem obstrução mecânica.\n- **E) Incorreta:** Íleo paralítico acomete difusamente tanto intestino delgado quanto cólon, e não seletivamente ceco e cólon ascendente como na síndrome de Ogilvie.",
    "perolaClinica": "Idoso acamado com comorbidades clínicas graves (DPOC, ICC, pneumonia) que desenvolve **dilatação maciça e seletiva do cólon (especialmente ceco e cólon ascendente) sem obstrução mecânica e sem peritonite** apresenta o qu",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-039",
    "code": "Q-ENARE24-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnia Inguinal e Femoral",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernia-inguinal-e-femoral",
    "tags": ["hernia-inguinoescrotal","hernia-inguinal","tecnica-de-lichtenstein","herniorrafia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um paciente de 55 anos apresenta-se no consultório com queixa de uma protuberância na região inguinal direita que se estende até o escroto. Ele relata que a protuberância aparece principalmente quando faz esforço físico, como levantar pesos, e desaparece quando está deitado. Não há sinais de dor intensa, febre ou outros sintomas sistêmicos. Ao exame físico, observa-se uma massa inguinoescrotal redutível ao repouso e com manobras de redução manual. Não há sinais de estrangulamento ou obstrução.\n\nA melhor técnica cirúrgica para tratar a hérnia inguinoescrotal redutível desse paciente será:",
    "alternativas": [
      {
        "letter": "A",
        "text": "herniorrafia convencional pela técnica de Shouldice;",
        "explanation": "Incorreta: Shouldice é a melhor técnica *sem tela*, mas possui maior recidiva e exige curva de aprendizado específica, sendo reservada a casos em que não se pode usar prótese.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "redução digital, observação clínica sem intervenção cirúrgica e uso de funda;",
        "explanation": "Incorreta: Hérnia sintomática inguinoescrotal tem indicação cirúrgica; o uso de funda é proscrito.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "herniorrafia laparoscópica transabdominal pré-peritoneal (TAPP);",
        "explanation": "Incorreta: TAPP/TEP são excelentes em hérnias bilaterais ou recidivadas pós-via anterior, mas em hérnias inguinoescrotais volumosas a técnica aberta de Lichtenstein é preferida.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "herniorrafia convencional pela técnica de Lichtenstein;",
        "explanation": "A alternativa **D** está correta. Para **hérnia inguinoescrotal unilateral primária** em homem adulto, as diretrizes internacionais da **HerniaSurge (2018/2023)** recomendam preferencialmente o reparo aberto anterior com tela livre de tensão pela **técnica de Lichtenstein**, pois grandes hérnias inguinoescrotais apresentam maior dificuldade técnica e risco de seroma/complicações na abordagem laparoscópica (TAPP/TEP) e taxas de recidiva muito inferiores às técnicas sem tela.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "herniorrafia convencional sem reforço de tecido à Bassini.",
        "explanation": "Incorreta: A técnica de Bassini (sem tela, sob tensão) apresenta elevadas taxas de recidiva e foi substituída pelo reparo livre de tensão.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Para **hérnia inguinoescrotal unilateral primária** em homem adulto, as diretrizes internacionais da **HerniaSurge (2018/2023)** recomendam preferencialmente o reparo aberto anterior com tela livre de tensão pela **técnica de Lichtenstein**, pois grandes hérnias inguinoescrotais apresentam maior dificuldade técnica e risco de seroma/complicações na abordagem laparoscópica (TAPP/TEP) e taxas de recidiva muito inferiores às técnicas sem tela.\n- **A) Incorreta:** Shouldice é a melhor técnica *sem tela*, mas possui maior recidiva e exige curva de aprendizado específica, sendo reservada a casos em que não se pode usar prótese.\n- **B) Incorreta:** Hérnia sintomática inguinoescrotal tem indicação cirúrgica; o uso de funda é proscrito.\n- **C) Incorreta:** TAPP/TEP são excelentes em hérnias bilaterais ou recidivadas pós-via anterior, mas em hérnias inguinoescrotais volumosas a técnica aberta de Lichtenstein é preferida.\n- **E) Incorreta:** A técnica de Bassini (sem tela, sob tensão) apresenta elevadas taxas de recidiva e foi substituída pelo reparo livre de tensão.",
    "perolaClinica": "Para **hérnia inguinoescrotal unilateral primária** em homem adulto, as diretrizes internacionais da **HerniaSurge (2018/2023)** recomendam preferencialmente o reparo aberto anterior com tela livre de tensão pela **técni",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-040",
    "code": "Q-ENARE24-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Anestesiologia Básica e Anestésicos Locais",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-anestesiologia-basica-e-anestesicos-locais",
    "tags": ["pneumoperitonio","videolaparoscopia","bradicardia","alteracoes-hemodinamicas"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante o pneumoperitônio para realização de cirurgias por acesso videolaparoscópico, algumas alterações hemodinâmicas podem ocorrer no paciente.\n\nEm relação a essas alterações, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "há diminuição do débito cardíaco, com aumento do retorno venoso;",
        "explanation": "Incorreta: O aumento da pressão intra-abdominal comprime a veia cava inferior, **diminuindo** (e não aumentando) o retorno venoso e, consequentemente, o débito cardíaco.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "ocorre hipotensão por compressão mecânica da aorta abdominal;",
        "explanation": "Incorreta: A compressão arterial aumenta a resistência vascular sistêmica (pós-carga), tendendo inicialmente à **hipertensão** (ou manutenção da PAM), não hipotensão por compressão aórtica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "a oligúria ocorre devido à hipercapnia e retenção de bicarbonato pelos rins;",
        "explanation": "Incorreta: A oligúria decorre da compressão direta do parênquima e das veias renais + redução do fluxo sanguíneo renal e ativação do SRAA/ADH, não de retenção de bicarbonato.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "a bradicardia ocorre por estímulo vasovagal pela distensão abdominal;",
        "explanation": "A alternativa **D** está correta. A insuflação rápida de CO₂ e o estiramento peritoneal durante a criação do pneumoperitônio podem desencadear **reflexo vagal (estímulo vasovagal)** com **bradicardia** súbita e até assistolia transitória, revertida pela desinsuflação abdominal e atropina (Sabiston / Miller's Anesthesia).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "arritmias cardíacas e outros distúrbios de ritmo cardíaco são raros.",
        "explanation": "Incorreta: Arritmias (bradicardia sinusal, extrassístoles por hipercapnia/descarga simpática) são relativamente comuns durante o pneumoperitônio.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A insuflação rápida de CO₂ e o estiramento peritoneal durante a criação do pneumoperitônio podem desencadear **reflexo vagal (estímulo vasovagal)** com **bradicardia** súbita e até assistolia transitória, revertida pela desinsuflação abdominal e atropina (Sabiston / Miller's Anesthesia).\n- **A) Incorreta:** O aumento da pressão intra-abdominal comprime a veia cava inferior, **diminuindo** (e não aumentando) o retorno venoso e, consequentemente, o débito cardíaco.\n- **B) Incorreta:** A compressão arterial aumenta a resistência vascular sistêmica (pós-carga), tendendo inicialmente à **hipertensão** (ou manutenção da PAM), não hipotensão por compressão aórtica.\n- **C) Incorreta:** A oligúria decorre da compressão direta do parênquima e das veias renais + redução do fluxo sanguíneo renal e ativação do SRAA/ADH, não de retenção de bicarbonato.\n- **E) Incorreta:** Arritmias (bradicardia sinusal, extrassístoles por hipercapnia/descarga simpática) são relativamente comuns durante o pneumoperitônio.",
    "perolaClinica": "A insuflação rápida de CO₂ e o estiramento peritoneal durante a criação do pneumoperitônio podem desencadear **reflexo vagal (estímulo vasovagal)** com **bradicardia** súbita e até assistolia transitória, revertida pela ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-041",
    "code": "Q-ENARE24-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Puberdade Normal, Precoce e Atrasada",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-puberdade-normal-precoce-e-atrasada",
    "tags": ["estadiamento-puberal","critarios-de-tanner","desenvolvimento-puberal","puericultura"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma adolescente de 12 anos apresenta pelos espessos e esparsos em genitália e mamas/mamilos aumentados, sem contorno definido.\n\nÉ correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a adolescente tem o desenvolvimento puberal adequado para a sua idade;",
        "explanation": "Incorreta: A banca alterou o gabarito preliminar de A para E por considerar os dados transversais isolados insuficientes para afirmar adequação puberal completa.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a adolescente tem o desenvolvimento puberal atrasado para a sua idade;",
        "explanation": "Incorreta: Aos 12 anos com mamas e pelos já presentes, não há atraso puberal (definido em meninas pela ausência de telarca aos 13 anos).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "o diagnóstico de pubarca precoce deve ser investigado;",
        "explanation": "Incorreta: Pubarca precoce é definida antes dos 8 anos em meninas.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "o diagnóstico de telarca precoce deve ser investigado;",
        "explanation": "Incorreta: Telarca precoce é definida antes dos 8 anos em meninas.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "os dados apresentados não permitem avaliação do desenvolvimento puberal.",
        "explanation": "A alternativa **E** está correta conforme o gabarito definitivo (alterado pós-recurso pela FGV/ENARE). Embora a descrição sugira estágios compatíveis com M3 e P2–P3 de Tanner em uma menina de 12 anos, a banca acolheu recurso argumentando que a avaliação rigorosa do desenvolvimento puberal exige dados complementares (idade de início da telarca/pubarca, velocidade de crescimento, menarca e comparação longitudinal nos gráficos de crescimento e estágios completos de Tanner, segundo o Tratado de Pediatria da SBP).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta conforme o gabarito definitivo (alterado pós-recurso pela FGV/ENARE). Embora a descrição sugira estágios compatíveis com M3 e P2–P3 de Tanner em uma menina de 12 anos, a banca acolheu recurso argumentando que a avaliação rigorosa do desenvolvimento puberal exige dados complementares (idade de início da telarca/pubarca, velocidade de crescimento, menarca e comparação longitudinal nos gráficos de crescimento e estágios completos de Tanner, segundo o Tratado de Pediatria da SBP).\n- **A) Incorreta:** A banca alterou o gabarito preliminar de A para E por considerar os dados transversais isolados insuficientes para afirmar adequação puberal completa.\n- **B) Incorreta:** Aos 12 anos com mamas e pelos já presentes, não há atraso puberal (definido em meninas pela ausência de telarca aos 13 anos).\n- **C) Incorreta:** Pubarca precoce é definida antes dos 8 anos em meninas.\n- **D) Incorreta:** Telarca precoce é definida antes dos 8 anos em meninas.",
    "perolaClinica": "conforme o gabarito definitivo (alterado pós-recurso pela FGV/ENARE).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-043",
    "code": "Q-ENARE24-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Doenças Exantemáticas",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-doencas-exantematicas",
    "tags": ["exantema-subito","roseola-infantum","doencas-exantematicas","lactente"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um lactente de 10 meses apresentou febre alta (39 °C) e coriza hialina por 3 dias. No quarto dia de doença, 12 horas após o último pico febril, surge exantema maculopapular em tronco que se dissemina para os membros. Ao exame, apresenta discreta hiperemia de orofaringe, linfonodos cervicais sem características inflamatórias e exantema maculopapular eritematoso difuso.\n\nDiante desse quadro, o diagnóstico correto é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "escarlatina;",
        "explanation": "Incorreta: Escarlatina é bacteriana (*Streptococcus pyogenes*), acomete mais escolares com faringoamigdalite exsudativa, exantema micropapular em \"lixa\", sinal de Filatov e linhas de Pastia.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "sarampo;",
        "explanation": "Incorreta: No sarampo, o exantema surge no auge da febre, inicia-se na região retroauricular/face (craniocaudal) e acompanha tosse intensa, conjuntivite e manchas de Koplik.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "varicela;",
        "explanation": "Incorreta: Varicela caracteriza-se por exantema vesicular polimórfico pruriginoso (máculas, pápulas, vesículas e crostas simultaneamente).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "rubéola;",
        "explanation": "Incorreta: Rubéola cursa com febre baixa, linfadenopatia retroauricular/occipital dolorosa e exantema craniocaudal concomitante ao quadro febril.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "exantema súbito.",
        "explanation": "A alternativa **E** está correta. Lactente (6 meses a 2 anos) com **febre alta por 3 dias que cede em crise** seguida pelo **surgimento do exantema maculopapular no tronco com disseminação centrífuga após o desaparecimento da febre** constitui a apresentação clássica do **exantema súbito (roséola infantum)**, causado pelo herpesvírus humano tipo 6 (HHV-6), conforme a SBP.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Lactente (6 meses a 2 anos) com **febre alta por 3 dias que cede em crise** seguida pelo **surgimento do exantema maculopapular no tronco com disseminação centrífuga após o desaparecimento da febre** constitui a apresentação clássica do **exantema súbito (roséola infantum)**, causado pelo herpesvírus humano tipo 6 (HHV-6), conforme a SBP.\n- **A) Incorreta:** Escarlatina é bacteriana (*Streptococcus pyogenes*), acomete mais escolares com faringoamigdalite exsudativa, exantema micropapular em \"lixa\", sinal de Filatov e linhas de Pastia.\n- **B) Incorreta:** No sarampo, o exantema surge no auge da febre, inicia-se na região retroauricular/face (craniocaudal) e acompanha tosse intensa, conjuntivite e manchas de Koplik.\n- **C) Incorreta:** Varicela caracteriza-se por exantema vesicular polimórfico pruriginoso (máculas, pápulas, vesículas e crostas simultaneamente).\n- **D) Incorreta:** Rubéola cursa com febre baixa, linfadenopatia retroauricular/occipital dolorosa e exantema craniocaudal concomitante ao quadro febril.",
    "perolaClinica": "Lactente (6 meses a 2 anos) com **febre alta por 3 dias que cede em crise** seguida pelo **surgimento do exantema maculopapular no tronco com disseminação centrífuga após o desaparecimento da febre** constitui a apresent",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-044",
    "code": "Q-ENARE24-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": ["vacina-hpv","falsas-contraindicacoes","corticoide-nasal","pni"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os pais de um escolar em tratamento de rinite alérgica com corticoide nasal procuraram o posto de saúde para aplicação da vacina HPV (papilomavírus humano).\n\nEm vista do quadro apresentado, o agente do posto de saúde deverá:",
    "alternativas": [
      {
        "letter": "A",
        "text": "orientar os pais a vacinarem a criança após o término do tratamento;",
        "explanation": "Incorreta: Adiar a vacinação configura oportunidade perdida de imunização sem justificativa técnica.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "suspender a medicação por 7 dias após a vacinação;",
        "explanation": "Incorreta: Não há necessidade de suspender o corticoide nasal.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "vacinar a criança com as orientações habituais;",
        "explanation": "A alternativa **C** está correta. De acordo com o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)**, o uso de **corticosteroides tópicos, inalatórios ou nasais** não causa imunossupressão sistêmica e constitui uma **falsa contraindicação** vacinal — além disso, a vacina HPV é recombinante (não viva), podendo ser aplicada normalmente com as orientações habituais.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "vacinar a criança com a dose dobrada da vacina;",
        "explanation": "Incorreta: A dose da vacina HPV não é dobrada em pacientes usando corticoide nasal.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "vacinar a criança, advertindo quanto à possibilidade de reações vacinais mais intensas.",
        "explanation": "Incorreta: Corticoide nasal não aumenta a incidência nem a gravidade de eventos supostamente atribuíveis à vacinação.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)**, o uso de **corticosteroides tópicos, inalatórios ou nasais** não causa imunossupressão sistêmica e constitui uma **falsa contraindicação** vacinal — além disso, a vacina HPV é recombinante (não viva), podendo ser aplicada normalmente com as orientações habituais.\n- **A) Incorreta:** Adiar a vacinação configura oportunidade perdida de imunização sem justificativa técnica.\n- **B) Incorreta:** Não há necessidade de suspender o corticoide nasal.\n- **D) Incorreta:** A dose da vacina HPV não é dobrada em pacientes usando corticoide nasal.\n- **E) Incorreta:** Corticoide nasal não aumenta a incidência nem a gravidade de eventos supostamente atribuíveis à vacinação.",
    "perolaClinica": "De acordo com o **Manual de Normas e Procedimentos para Vacinação do PNI (Ministério da Saúde)**, o uso de **corticosteroides tópicos, inalatórios ou nasais** não causa imunossupressão sistêmica e constitui uma **falsa c",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-045",
    "code": "Q-ENARE24-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Icterícia Neonatal",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-ictericia-neonatal",
    "tags": ["ictericia-neonatal","ictericia-patologica","hiperbilirrubinemia-direta","neonatologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Dentre as situações a seguir, aquela em que o recém-nascido tem dois critérios para icterícia patológica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "RN a termo, icterícia desde 37 horas de vida, bilirrubina total = 4 mg/dl, bilirrubina indireta = 3,1 mg/dl;",
        "explanation": "Incorreta: Início após 24h (37h), BT 4 mg/dL e BD = 0,9 mg/dL (apenas 1 critério limítrofe de BD > 20%, mas sem início precoce).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "RN prematuro, 6º dia de vida, bilirrubina total = 3 mg/dl, bilirrubina indireta = 2,2 mg/dl;",
        "explanation": "Incorreta: No 6º dia de vida em prematuro, BT 3 mg/dL e BD 0,8 mg/dL não somam dois critérios patológicos clássicos.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "RN a termo, icterícia desde 12 horas de vida, bilirrubina total = 2 mg/dl, bilirrubina indireta = 0,8 mg/dl;",
        "explanation": "A alternativa **C** está correta. O recém-nascido apresenta **dois critérios clássicos de icterícia patológica** (SBP / Ministério da Saúde): (1) **início precoce nas primeiras 24 horas de vida** (desde 12h) e (2) **colestase / hiperbilirrubinemia direta significativa**, pois BD = BT − BI = 2,0 − 0,8 = **1,2 mg/dL** (que corresponde a **60% da BT**, ultrapassando tanto > 1 mg/dL quanto > 20% da BT).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "RN prematuro, 39 horas de vida, bilirrubina total = 8 mg/dl, aumento de bilirrubina em seis horas = 0,1 mg/dl/hora;",
        "explanation": "Incorreta: Início > 24h (39h) e velocidade de elevação de 0,1 mg/dL/h (patológica seria > 0,2–0,5 mg/dL/h).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "RN prematuro, grupo sanguíneo/RH: RN = O+ e mãe = A+, ictérico no 12º dia de vida.",
        "explanation": "Incorreta: RN O+ com mãe A+ não apresenta incompatibilidade ABO (que ocorre em mãe O com RN A ou B), e icterícia até 14 dias em prematuro ainda pode ser fisiológica.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O recém-nascido apresenta **dois critérios clássicos de icterícia patológica** (SBP / Ministério da Saúde): (1) **início precoce nas primeiras 24 horas de vida** (desde 12h) e (2) **colestase / hiperbilirrubinemia direta significativa**, pois BD = BT − BI = 2,0 − 0,8 = **1,2 mg/dL** (que corresponde a **60% da BT**, ultrapassando tanto > 1 mg/dL quanto > 20% da BT).\n- **A) Incorreta:** Início após 24h (37h), BT 4 mg/dL e BD = 0,9 mg/dL (apenas 1 critério limítrofe de BD > 20%, mas sem início precoce).\n- **B) Incorreta:** No 6º dia de vida em prematuro, BT 3 mg/dL e BD 0,8 mg/dL não somam dois critérios patológicos clássicos.\n- **D) Incorreta:** Início > 24h (39h) e velocidade de elevação de 0,1 mg/dL/h (patológica seria > 0,2–0,5 mg/dL/h).\n- **E) Incorreta:** RN O+ com mãe A+ não apresenta incompatibilidade ABO (que ocorre em mãe O com RN A ou B), e icterícia até 14 dias em prematuro ainda pode ser fisiológica.",
    "perolaClinica": "O recém-nascido apresenta **dois critérios clássicos de icterícia patológica** (SBP / Ministério da Saúde): (1) **início precoce nas primeiras 24 horas de vida** (desde 12h) e (2) **colestase / hiperbilirrubinemia direta",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-046",
    "code": "Q-ENARE24-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "DRGE e Constipação na Infância",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-drge-e-constipacao-na-infancia",
    "tags": ["sindrome-do-intestino-irritavel","criterios-de-roma-iv","dor-abdominal-funcional","gastroenterologia-pediatrica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Segundo os critérios de ROMA IV para lactentes, escolares e adolescentes, na síndrome do intestino irritável:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a criança tem diarreia associada a perda ponderal nos últimos 2 meses;",
        "explanation": "Incorreta: Perda ponderal é sinal de alarme que afasta distúrbio funcional e exige investigação de doença orgânica (ex.: DII, doença celíaca).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a dor abdominal é aliviada após resolução da constipação;",
        "explanation": "Incorreta: Se a dor abdominal desaparece após a resolução da constipação, o diagnóstico pelos critérios de Roma IV é **constipação funcional**, não SII.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "a dor abdominal é acompanhada de alteração na frequência das evacuações;",
        "explanation": "A alternativa **C** está correta. Pelos **Critérios de Roma IV para Pediatria** (4 a 18 anos), o diagnóstico de síndrome do intestino irritável (SII) requer dor abdominal por pelo menos 4 dias/mês durante **≥ 2 meses**, associada a um ou mais dos seguintes: relação com a defecação, **mudança na frequência das evacuações** ou mudança na forma/aparência das fezes — sem que a dor se resolva apenas com o tratamento da constipação (diferenciando-a da constipação funcional).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "a criança tem evacuação Bristol 6 na primeira evacuação do dia, seguida por Bristol 1 nas demais evacuações;",
        "explanation": "Incorreta: Esse padrão específico de Bristol não compõe os critérios diagnósticos de Roma IV.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "os sintomas acontecem por pelo menos 1 mês antes do diagnóstico.",
        "explanation": "Incorreta: A duração mínima exigida pelos critérios de Roma IV em pediatria é de **2 meses**, não 1 mês.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Pelos **Critérios de Roma IV para Pediatria** (4 a 18 anos), o diagnóstico de síndrome do intestino irritável (SII) requer dor abdominal por pelo menos 4 dias/mês durante **≥ 2 meses**, associada a um ou mais dos seguintes: relação com a defecação, **mudança na frequência das evacuações** ou mudança na forma/aparência das fezes — sem que a dor se resolva apenas com o tratamento da constipação (diferenciando-a da constipação funcional).\n- **A) Incorreta:** Perda ponderal é sinal de alarme que afasta distúrbio funcional e exige investigação de doença orgânica (ex.: DII, doença celíaca).\n- **B) Incorreta:** Se a dor abdominal desaparece após a resolução da constipação, o diagnóstico pelos critérios de Roma IV é **constipação funcional**, não SII.\n- **D) Incorreta:** Esse padrão específico de Bristol não compõe os critérios diagnósticos de Roma IV.\n- **E) Incorreta:** A duração mínima exigida pelos critérios de Roma IV em pediatria é de **2 meses**, não 1 mês.",
    "perolaClinica": "Pelos **Critérios de Roma IV para Pediatria** (4 a 18 anos), o diagnóstico de síndrome do intestino irritável (SII) requer dor abdominal por pelo menos 4 dias/mês durante **≥ 2 meses**, associada a um ou mais dos seguint",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-047",
    "code": "Q-ENARE24-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Desenvolvimento Neuropsicomotor e Autismo",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-desenvolvimento-neuropsicomotor-e-autismo",
    "tags": ["m-chat-r","transtorno-do-espectro-autista","triagem-precoce","puericultura"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "M-CHAT-R é um teste utilizado no transtorno do espectro autista para:",
    "alternativas": [
      {
        "letter": "A",
        "text": "diagnóstico da síndrome de Asperger;",
        "explanation": "Incorreta: M-CHAT-R é teste de triagem, não instrumento diagnóstico definitivo (além de o DSM-5 ter unificado a síndrome de Asperger no espectro do TEA).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "triagem dos sinais precoces;",
        "explanation": "A alternativa **B** está correta. O **M-CHAT-R/F** (*Modified Checklist for Autism in Toddlers, Revised with Follow-Up*) é um instrumento validado de **triagem (rastreamento) de sinais precoces de Transtorno do Espectro Autista (TEA)**, aplicado obrigatoriamente nas consultas de puericultura entre **16 e 30 meses** de idade (especialmente aos 18 e 24 meses), conforme a SBP e a Lei nº 13.438/2017 (Ministério da Saúde).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "acompanhamento do neurodesenvolvimento;",
        "explanation": "Incorreta: Não é uma escala longitudinal geral de acompanhamento do neurodesenvolvimento (como Denver II ou marcos da Caderneta da Criança).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "avaliação de TEA entre 9 e 15 meses de idade;",
        "explanation": "Incorreta: A faixa etária validada do M-CHAT-R é de **16 a 30 meses**, não 9 a 15 meses.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "estadiamento do grau de autismo.",
        "explanation": "Incorreta: Não serve para estadiar o nível de suporte/gravidade do TEA.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. O **M-CHAT-R/F** (*Modified Checklist for Autism in Toddlers, Revised with Follow-Up*) é um instrumento validado de **triagem (rastreamento) de sinais precoces de Transtorno do Espectro Autista (TEA)**, aplicado obrigatoriamente nas consultas de puericultura entre **16 e 30 meses** de idade (especialmente aos 18 e 24 meses), conforme a SBP e a Lei nº 13.438/2017 (Ministério da Saúde).\n- **A) Incorreta:** M-CHAT-R é teste de triagem, não instrumento diagnóstico definitivo (além de o DSM-5 ter unificado a síndrome de Asperger no espectro do TEA).\n- **C) Incorreta:** Não é uma escala longitudinal geral de acompanhamento do neurodesenvolvimento (como Denver II ou marcos da Caderneta da Criança).\n- **D) Incorreta:** A faixa etária validada do M-CHAT-R é de **16 a 30 meses**, não 9 a 15 meses.\n- **E) Incorreta:** Não serve para estadiar o nível de suporte/gravidade do TEA.",
    "perolaClinica": "O **M-CHAT-R/F** (*Modified Checklist for Autism in Toddlers, Revised with Follow-Up*) é um instrumento validado de **triagem (rastreamento) de sinais precoces de Transtorno do Espectro Autista (TEA)**, aplicado obrigato",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-048",
    "code": "Q-ENARE24-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Aleitamento Materno e Fórmulas Infantis",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-aleitamento-materno-e-formulas-infantis",
    "tags": ["aleitamento-materno","puericultura","amamentacao-exclusiva","aconselhamento"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma primípara comparece à consulta de puericultura com seu filho de 2 meses. Durante a consulta, o pediatra percebe que ela está prestes a abandonar o aleitamento materno exclusivo e conduz a conversa de forma a mantê-lo.\n\nNessa conversa é importante ser empático, evitando:",
    "alternativas": [
      {
        "letter": "A",
        "text": "fazer perguntas abertas que permitam à mãe expressar argumentos contra a manutenção da amamentação;",
        "explanation": "Incorreta: Perguntas abertas devem ser **estimuladas**, não evitadas, no aconselhamento em aleitamento.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "recorrer à comunicação não verbal, uma vez que esta pode induzir a erros de interpretação, tornar-se inapropriada ou gerar problemas éticos;",
        "explanation": "Incorreta: A comunicação não verbal acolhedora (contato visual, postura aberta, aceno) é ferramenta essencial do aconselhamento, não deve ser evitada.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "aceitar as opiniões da mãe durante a conversa, a fim de demonstrar, de forma clara e incisiva, que a posição expressa nessas opiniões está equivocada;",
        "explanation": "Incorreta: No aconselhamento empático, deve-se aceitar o que a mãe pensa e sente sem confrontá-la de forma incisiva.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "usar palavras que possam ser interpretadas como julgamento, exceto quando possam efetivamente levar ao desmame;",
        "explanation": "Incorreta: Palavras de julgamento devem ser sempre evitadas, sem a exceção contraditória citada na alternativa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "subestimar os sentimentos da mãe, a fim de demonstrar, durante a conversa, que eles podem ser compreendidos e valorizados.",
        "explanation": "A alternativa **E** está correta (gabarito definitivo alterado pós-recurso pela FGV/ENARE). Nas técnicas de **aconselhamento em amamentação** (OMS / Caderno de Atenção Básica nº 23 — Ministério da Saúde), a escuta ativa e empática exige **evitar subestimar os sentimentos da mãe**, acolhendo suas angústias para demonstrar que são compreendidos e valorizados.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta (gabarito definitivo alterado pós-recurso pela FGV/ENARE). Nas técnicas de **aconselhamento em amamentação** (OMS / Caderno de Atenção Básica nº 23 — Ministério da Saúde), a escuta ativa e empática exige **evitar subestimar os sentimentos da mãe**, acolhendo suas angústias para demonstrar que são compreendidos e valorizados.\n- **A) Incorreta:** Perguntas abertas devem ser **estimuladas**, não evitadas, no aconselhamento em aleitamento.\n- **B) Incorreta:** A comunicação não verbal acolhedora (contato visual, postura aberta, aceno) é ferramenta essencial do aconselhamento, não deve ser evitada.\n- **C) Incorreta:** No aconselhamento empático, deve-se aceitar o que a mãe pensa e sente sem confrontá-la de forma incisiva.\n- **D) Incorreta:** Palavras de julgamento devem ser sempre evitadas, sem a exceção contraditória citada na alternativa.",
    "perolaClinica": "(gabarito definitivo alterado pós-recurso pela FGV/ENARE).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-049",
    "code": "Q-ENARE24-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Acidentes, Intoxicações e Maus-Tratos na Infância",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-acidentes-intoxicacoes-e-maus-tratos-na-infancia",
    "tags": ["maus-tratos-na-infancia","violencia-psicologica","notificacao-compulsoria","protecao-infantil"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma adolescente com 11 anos é levada à emergência em pediatria por apresentar vômitos. Reside com a avó, que informalmente assumiu a guarda e que frequentemente desvaloriza os genitores, pois a adolescente fora abandonada pela mãe por ser fruto de gestação não desejada e nunca teve contato com o pai. A avó está em tratamento de depressão, imputando seu sofrimento à adolescente.\n\nNesse caso, a notificação:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deverá ser feita, pois existem fatos justificando a suspeita de violência;",
        "explanation": "A alternativa **A** está correta. O relato evidencia **violência psicológica e abandono/negligência** (a avó imputa seu sofrimento depressivo à neta e desvaloriza constantemente os genitores após abandono materno). Conforme o **Estatuto da Criança e do Adolescente (ECA, art. 13 e art. 245)** e a Portaria de Notificação Compulsória do Ministério da Saúde, a **suspeita** ou confirmação de violência contra crianças e adolescentes exige **notificação compulsória imediata** (SINAN e Conselho Tutelar) por parte do profissional de saúde.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "somente será feita após a localização da mãe, que possui a guarda legal;",
        "explanation": "Incorreta: A notificação não depende da localização ou autorização dos responsáveis legais.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "deve ser registrada após concordância de ambas as envolvidas no caso;",
        "explanation": "Incorreta: Não requer concordância da vítima nem do responsável/agressor.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "só poderá ser feita caso existam provas da violência contra a adolescente;",
        "explanation": "Incorreta: A lei determina notificação diante de **suspeita**, não exigindo comprovação prévia (cuja investigação cabe aos órgãos competentes).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "poderá ocorrer caso a adolescente manifeste o desejo de que haja denúncia.",
        "explanation": "Incorreta: A notificação é compulsória e independe de desejo ou pedido de denúncia pela adolescente.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O relato evidencia **violência psicológica e abandono/negligência** (a avó imputa seu sofrimento depressivo à neta e desvaloriza constantemente os genitores após abandono materno). Conforme o **Estatuto da Criança e do Adolescente (ECA, art. 13 e art. 245)** e a Portaria de Notificação Compulsória do Ministério da Saúde, a **suspeita** ou confirmação de violência contra crianças e adolescentes exige **notificação compulsória imediata** (SINAN e Conselho Tutelar) por parte do profissional de saúde.\n- **B) Incorreta:** A notificação não depende da localização ou autorização dos responsáveis legais.\n- **C) Incorreta:** Não requer concordância da vítima nem do responsável/agressor.\n- **D) Incorreta:** A lei determina notificação diante de **suspeita**, não exigindo comprovação prévia (cuja investigação cabe aos órgãos competentes).\n- **E) Incorreta:** A notificação é compulsória e independe de desejo ou pedido de denúncia pela adolescente.",
    "perolaClinica": "O relato evidencia **violência psicológica e abandono/negligência** (a avó imputa seu sofrimento depressivo à neta e desvaloriza constantemente os genitores após abandono materno).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-050",
    "code": "Q-ENARE24-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": ["calendario-vacinal","pni","vacinacao-do-adolescente","vacina-hpv","vacina-meningococica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um adolescente saudável de 16 anos comparece à clínica da família para atualizar sua situação vacinal. Alega que só recebeu vacinas no primeiro ano de vida, mas, 2 meses antes, fez uma dose de vacina para difteria e tétano (dT), para se matricular em um curso. Em sua caderneta da criança, há registro das seguintes vacinas: duas doses da vacina contra hepatite B (HB); duas doses da vacina contra difteria, tétano e pertússis (DTP); uma dose da vacina contra febre amarela (VFA); uma dose da vacina contra sarampo, caxumba e rubéola (tríplice viral).\n\nA atualização deverá ser feita com:",
    "alternativas": [
      {
        "letter": "A",
        "text": "duas doses da VFA, duas doses da dT, duas doses da tríplice viral, duas doses de vacina contra HPV e uma dose da vacina meningocócica ACWY;",
        "explanation": "Incorreta: Não precisa de 2 doses de VFA, nem 2 de dT (já completou 3 doses), nem 2 de tríplice viral, nem 2 de HPV.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "duas doses da HB, duas doses da VFA, uma dose da tríplice viral, uma dose da vacina contra HPV e duas doses da vacina meningocócica ACWY;",
        "explanation": "Incorreta: Faltam apenas 1 dose de HB, 1 de VFA e 1 de Meningo ACWY.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "uma dose da HB, uma dose da VFA, uma dose da tríplice viral, uma dose da vacina contra HPV e uma dose da vacina meningocócica ACWY;",
        "explanation": "A alternativa **C** está correta. Analisando cada vacina pelo **Calendário Nacional de Vacinação do Adolescente (PNI/MS 2024)**:\n- **Hepatite B (HB):** tem 2 doses → falta **1 dose** para completar o esquema de 3 doses.\n- **dT/DTP:** tem 2 DTP na infância + 1 dT há 2 meses = 3 doses completas → esquema completo (próximo reforço em 10 anos).\n- **Febre amarela (VFA):** recebeu 1 dose antes dos 5 anos (no 1º ano de vida) → necessita **1 dose de reforço**.\n- **Tríplice viral:** tem 1 dose → para menores de 30 anos são 2 doses → falta **1 dose**.\n- **HPV:** em 2024 o PNI adotou esquema de **dose única** (com resgate para adolescentes de 15 a 19 anos não vacinados) → **1 dose**.\n- **Meningocócica ACWY:** indicada para adolescentes (11 a 14 anos, com resgate/ampliação) → **1 dose**.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "uma dose da HB, uma dose da DTP, duas doses da tríplice viral, duas doses da vacina contra HPV e uma dose da vacina meningocócica ACWY;",
        "explanation": "Incorreta: DTP não se aplica em adolescentes (limite < 7 anos), e tríplice viral/HPV requerem apenas 1 dose cada.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "uma dose da VFA, uma dose da dT, uma dose da tríplice viral, uma dose da vacina contra HPV e duas doses da vacina meningocócica ACWY.",
        "explanation": "Incorreta: Faltou completar a Hepatite B, dT já está completa e Meningo ACWY é dose única.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Analisando cada vacina pelo **Calendário Nacional de Vacinação do Adolescente (PNI/MS 2024)**:\n- **Hepatite B (HB):** tem 2 doses → falta **1 dose** para completar o esquema de 3 doses.\n- **dT/DTP:** tem 2 DTP na infância + 1 dT há 2 meses = 3 doses completas → esquema completo (próximo reforço em 10 anos).\n- **Febre amarela (VFA):** recebeu 1 dose antes dos 5 anos (no 1º ano de vida) → necessita **1 dose de reforço**.\n- **Tríplice viral:** tem 1 dose → para menores de 30 anos são 2 doses → falta **1 dose**.\n- **HPV:** em 2024 o PNI adotou esquema de **dose única** (com resgate para adolescentes de 15 a 19 anos não vacinados) → **1 dose**.\n- **Meningocócica ACWY:** indicada para adolescentes (11 a 14 anos, com resgate/ampliação) → **1 dose**.\n- **A) Incorreta:** Não precisa de 2 doses de VFA, nem 2 de dT (já completou 3 doses), nem 2 de tríplice viral, nem 2 de HPV.\n- **B) Incorreta:** Faltam apenas 1 dose de HB, 1 de VFA e 1 de Meningo ACWY.\n- **D) Incorreta:** DTP não se aplica em adolescentes (limite < 7 anos), e tríplice viral/HPV requerem apenas 1 dose cada.\n- **E) Incorreta:** Faltou completar a Hepatite B, dT já está completa e Meningo ACWY é dose única.",
    "perolaClinica": "Analisando cada vacina pelo **Calendário Nacional de Vacinação do Adolescente (PNI/MS 2024)**:\n- **Hepatite B (HB):** tem 2 doses → falta **1 dose** para completar o esquema de 3 doses.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-051",
    "code": "Q-ENARE24-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Diarreia Aguda e Desidratação",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-diarreia-aguda-e-desidratacao",
    "tags": ["diarreia-aguda","desidratacao","plano-b","reidratacao-oral"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um escolar com 5 anos é atendido em uma unidade básica de saúde com história de diarreia iniciada 2 dias antes. Houve aumento da frequência das evacuações há 24 horas, e o paciente apresentou um episódio de vômitos há 12 horas. Ao exame físico, mostrou-se intranquilo, chorando sem lágrimas, com a língua levemente seca.\n\nA conduta imediata é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "fazer hidratação oral com 75 mL/kg (sais de reidratação) em 4 horas; não medicar; observação no local;",
        "explanation": "A alternativa **A** está correta. A criança apresenta sinais clássicos de **desidratação (algum grau / moderada)** — irritada/intranquila, ausência de lágrimas e mucosa oral/língua seca — sem sinais de gravidade (letargia, incapacidade de beber ou pulso fraco). Segundo o **Manual de Manejo do Paciente com Diarreia do Ministério da Saúde (2023)** e a SBP, aplica-se o **Plano B**: **terapia de reidratação oral (TRO) na unidade de saúde** com **50 a 100 mL/kg (média 75 mL/kg) de SRO em 4 a 6 horas**, sem antieméticos de rotina (teve apenas 1 vômito há 12h), mantendo observação local até reidratação completa.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "iniciar hidratação venosa com 10 mL/kg em 30 minutos; prescrever ondansetrona; transferir para unidade hospitalar;",
        "explanation": "Incorreta: Hidratação venosa (Plano C) reserva-se para desidratação grave ou falha/contraindicação da TRO.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "orientar quando à ingestão de líquidos; não usar medicamentos; dar alta com orientações sobre o retorno;",
        "explanation": "Incorreta: Alta imediata (Plano A) é apenas para pacientes **sem desidratação**.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "prescrever hidratação venosa com 70 mL/kg em 2,5 horas; usar antieméticos; manter naquela unidade de saúde;",
        "explanation": "Incorreta: Não há indicação de hidratação venosa nem de antiemético.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "indicar hidratação oral com 20 mL/kg (sais de reidratação), usar ondansetrona; retornar para casa com orientação.",
        "explanation": "Incorreta: O volume de 20 mL/kg é insuficiente e o Plano B deve ser supervisionado na unidade de saúde antes da alta.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. A criança apresenta sinais clássicos de **desidratação (algum grau / moderada)** — irritada/intranquila, ausência de lágrimas e mucosa oral/língua seca — sem sinais de gravidade (letargia, incapacidade de beber ou pulso fraco). Segundo o **Manual de Manejo do Paciente com Diarreia do Ministério da Saúde (2023)** e a SBP, aplica-se o **Plano B**: **terapia de reidratação oral (TRO) na unidade de saúde** com **50 a 100 mL/kg (média 75 mL/kg) de SRO em 4 a 6 horas**, sem antieméticos de rotina (teve apenas 1 vômito há 12h), mantendo observação local até reidratação completa.\n- **B) Incorreta:** Hidratação venosa (Plano C) reserva-se para desidratação grave ou falha/contraindicação da TRO.\n- **C) Incorreta:** Alta imediata (Plano A) é apenas para pacientes **sem desidratação**.\n- **D) Incorreta:** Não há indicação de hidratação venosa nem de antiemético.\n- **E) Incorreta:** O volume de 20 mL/kg é insuficiente e o Plano B deve ser supervisionado na unidade de saúde antes da alta.",
    "perolaClinica": "A criança apresenta sinais clássicos de **desidratação (algum grau / moderada)** — irritada/intranquila, ausência de lágrimas e mucosa oral/língua seca — sem sinais de gravidade (letargia, incapacidade de beber ou pulso ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-052",
    "code": "Q-ENARE24-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "DRGE e Constipação na Infância",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-drge-e-constipacao-na-infancia",
    "tags": ["doenca-de-hirschsprung","megacolon-congenito","constipacao-intestinal","toque-retal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um menino de 3 anos apresenta história de dificuldade para evacuar desde o primeiro ano de vida. Fica alguns dias sem evacuar e só evacua com o uso de doses altas de laxante ou com enemas. A mãe refere que ele demorou 4 dias para evacuar após nascer e o fez porque usou supositório. Tem pouco apetite e não ganha peso adequadamente. O exame clínico revelou distensão abdominal e saída de fezes explosivas ao toque retal. Realizou exames laboratoriais e clister opaco.\n\nCom base na principal hipótese diagnóstica, é esperado encontrar no exame radiológico uma área de intestino:",
    "alternativas": [
      {
        "letter": "A",
        "text": "dilatada, apresentando extensão limitada, iniciando em qualquer local no colo, correspondendo à região agangliônica;",
        "explanation": "Incorreta: A região **dilatada** é o intestino normal com gânglios a montante da obstrução funcional, não a região agangliônica.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "estreitada, que acomete o colo descendente, poupando as porções distais, sendo a área com gânglios;",
        "explanation": "Incorreta: A doença de Hirschsprung **sempre** inicia no reto distal (não poupa as porções distais) e a zona estreitada é agangliônica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "estreitada, que inicia distalmente e se estende proximalmente, correspondendo à região agangliônica;",
        "explanation": "A alternativa **C** está correta. O atraso na eliminação de mecônio (> 48 horas após o nascimento), constipação refratária desde o 1º ano, déficit ponderal, distensão abdominal e **saída explosiva de fezes ao toque retal** (sinal clássico de ampola retal vazia com estase a montante) fecham o diagnóstico de **doença de Hirschsprung (megacólon congênito)**. No clister opaco, observa-se uma **zona estreitada distal** (iniciando no reto e estendendo-se proximalmente em extensão variável) que corresponde ao **segmento agangliônico** espástico, seguida de uma zona de transição (em cone) e dilatação proximal (segmento normal com gânglios), conforme Nelson/SBP.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "dilatada, de extensão variada, que ocorre nas porções mais distais e que demonstra a parte agangliônica;",
        "explanation": "Incorreta: A porção distal é estreitada (agangliônica), não dilatada.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "estreitada, que apresenta extensão limitada, tendo início proximal, traduzindo a porção com gânglios.",
        "explanation": "Incorreta: A área estreitada tem início distal (reto) e corresponde à ausência de gânglios.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O atraso na eliminação de mecônio (> 48 horas após o nascimento), constipação refratária desde o 1º ano, déficit ponderal, distensão abdominal e **saída explosiva de fezes ao toque retal** (sinal clássico de ampola retal vazia com estase a montante) fecham o diagnóstico de **doença de Hirschsprung (megacólon congênito)**. No clister opaco, observa-se uma **zona estreitada distal** (iniciando no reto e estendendo-se proximalmente em extensão variável) que corresponde ao **segmento agangliônico** espástico, seguida de uma zona de transição (em cone) e dilatação proximal (segmento normal com gânglios), conforme Nelson/SBP.\n- **A) Incorreta:** A região **dilatada** é o intestino normal com gânglios a montante da obstrução funcional, não a região agangliônica.\n- **B) Incorreta:** A doença de Hirschsprung **sempre** inicia no reto distal (não poupa as porções distais) e a zona estreitada é agangliônica.\n- **D) Incorreta:** A porção distal é estreitada (agangliônica), não dilatada.\n- **E) Incorreta:** A área estreitada tem início distal (reto) e corresponde à ausência de gânglios.",
    "perolaClinica": "O atraso na eliminação de mecônio (> 48 horas após o nascimento), constipação refratária desde o 1º ano, déficit ponderal, distensão abdominal e **saída explosiva de fezes ao toque retal** (sinal clássico de ampola retal",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-053",
    "code": "Q-ENARE24-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Pediátrica e Especialidades Cirúrgicas",
    "subtema": "Ortopedia e Traumatologia Básica",
    "temaSlug": "cg-espec",
    "subtemaSlug": "cg-espec-ortopedia-e-traumatologia-basica",
    "tags": ["doenca-de-osgood-schlatter","apofisite-de-tracao","tuberosidade-anterior-da-tibia","joelho-no-escolar"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um escolar masculino de 9 anos está em acompanhamento na unidade básica por dor no joelho direito iniciada 2 meses antes. Há inchaço no local e a dor o impede de praticar basquete no time do clube. Não há história de trauma. No exame físico há edema e dor sobre a porção distal do tendão patelar direito, além de uma proeminência firme e fixa do tubérculo tibial.\n\nA radiografia do joelho está normal. O médico orientou repouso, afastamento temporário do basquete e fisioterapia.\n\nA principal hipótese diagnóstica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "síndrome de Sinding-Larsen-Johansson;",
        "explanation": "Incorreta: Síndrome de Sinding-Larsen-Johansson acomete o **polo inferior da patela**, não o tubérculo tibial.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "síndrome da dor patelofemoral;",
        "explanation": "Incorreta: Síndrome da dor patelofemoral causa dor peripatelar difusa sem proeminência fixa no tubérculo tibial.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "doença de Osgood-Schlatter;",
        "explanation": "A alternativa **C** está correta. Criança/pré-adolescente praticante de esporte de salto/impacto (basquete) com **dor e edema localizados na inserção distal do tendão patelar e proeminência firme e dolorosa na tuberosidade anterior da tíbia** (com radiografia frequentemente normal ou com fragmentação da apófise) caracteriza a **doença de Osgood-Schlatter** (apofisite por tração do tubérculo tibial), de manejo conservador (SBP / SBOT).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "doença de Legg-Calvé-Perthes;",
        "explanation": "Incorreta: Doença de Legg-Calvé-Perthes é necrose avascular da cabeça femoral (quadril), causando claudicação e dor no quadril/coxa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "rotura do ligamento cruzado anterior.",
        "explanation": "Incorreta: Rotura de LCA ocorre após trauma torsional agudo com hemartrose e instabilidade articular (gaveta anterior/Lachman positivos).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Criança/pré-adolescente praticante de esporte de salto/impacto (basquete) com **dor e edema localizados na inserção distal do tendão patelar e proeminência firme e dolorosa na tuberosidade anterior da tíbia** (com radiografia frequentemente normal ou com fragmentação da apófise) caracteriza a **doença de Osgood-Schlatter** (apofisite por tração do tubérculo tibial), de manejo conservador (SBP / SBOT).\n- **A) Incorreta:** Síndrome de Sinding-Larsen-Johansson acomete o **polo inferior da patela**, não o tubérculo tibial.\n- **B) Incorreta:** Síndrome da dor patelofemoral causa dor peripatelar difusa sem proeminência fixa no tubérculo tibial.\n- **D) Incorreta:** Doença de Legg-Calvé-Perthes é necrose avascular da cabeça femoral (quadril), causando claudicação e dor no quadril/coxa.\n- **E) Incorreta:** Rotura de LCA ocorre após trauma torsional agudo com hemartrose e instabilidade articular (gaveta anterior/Lachman positivos).",
    "perolaClinica": "Criança/pré-adolescente praticante de esporte de salto/impacto (basquete) com **dor e edema localizados na inserção distal do tendão patelar e proeminência firme e dolorosa na tuberosidade anterior da tíbia** (com radiog",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-054",
    "code": "Q-ENARE24-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Parasitoses Intestinais",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-parasitoses-intestinais",
    "tags": ["esquistossomose","schistosoma-mansoni","parasitoses-intestinais","transmissibilidade"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "*Schistosoma*, um helminto pertencente à classe Trematoda, à família Schistossomatidae e ao gênero *Schistosoma*, são vermes digenéticos, delgados, de coloração branca e sexos separados. A fêmea adulta, mais alongada, encontra-se alojada em uma fenda do corpo do macho, denominada canal ginecóforo.\n\nO ser humano é o principal hospedeiro definitivo do *S. mansoni*. É nele que o parasita desenvolve a forma adulta e se reproduz sexuadamente, gerando ovos que são disseminados no meio ambiente por meio das fezes, ocasionando a contaminação das coleções hídricas.\n\nO ciclo biológico do *S. mansoni* depende da presença do hospedeiro intermediário no ambiente. Os caramujos gastrópodes aquáticos, pertencentes à família Planorbidae e ao gênero *Biomphalaria*, são os organismos que possibilitam a reprodução assexuada do helminto.\n\nCom relação ao período de transmissibilidade dessa doença, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a pessoa infectada pode eliminar ovos viáveis de S. mansoni a partir de 5 semanas após a infecção e por um período de 6 a 10 anos, podendo chegar a até mais de 20 anos;",
        "explanation": "A alternativa **A** está correta. Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)**, a pessoa infectada pelo *Schistosoma mansoni* começa a eliminar ovos viáveis nas fezes **a partir de 5 semanas** após a penetração das cercárias, mantendo a eliminação por **6 a 10 anos** (podendo ultrapassar 20 anos na ausência de tratamento).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "os hospedeiros intermediários começam a eliminar miracídios após 4 a 7 semanas da infecção pelas cercárias;",
        "explanation": "Incorreta: Os conceitos estão invertidos: os caramujos (*Biomphalaria*) infectam-se por **miracídios** e passam a eliminar **cercárias** após 4 a 7 semanas.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "os caramujos infectados eliminam cercárias por toda a vida, que é aproximadamente de 3 anos;",
        "explanation": "Incorreta: A expectativa de vida dos caramujos infectados é de semanas a poucos meses (em geral até ~1 ano em condições ideais), não 3 anos.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "a pessoa infectada pode eliminar ovos viáveis de S. mansoni a partir de 1 semana após a infecção e por um período de 6 meses a 1 ano;",
        "explanation": "Incorreta: 1 semana é insuficiente para maturação dos vermes adultos (período pré-patente é de ~5 semanas) e a eliminação dura anos, não meses.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "os hospedeiros permissivos ou reservatórios, como os primatas, marsupiais (gambá), ruminantes, roedores e lagomorfos (lebres e coelhos), são considerados reservatórios que não eliminam ovos.",
        "explanation": "Incorreta: Reservatórios permissivos (como roedores silvestres *Nectomys*) podem eliminar ovos viáveis nas fezes, embora seu papel epidemiológico seja secundário ao do homem.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)**, a pessoa infectada pelo *Schistosoma mansoni* começa a eliminar ovos viáveis nas fezes **a partir de 5 semanas** após a penetração das cercárias, mantendo a eliminação por **6 a 10 anos** (podendo ultrapassar 20 anos na ausência de tratamento).\n- **B) Incorreta:** Os conceitos estão invertidos: os caramujos (*Biomphalaria*) infectam-se por **miracídios** e passam a eliminar **cercárias** após 4 a 7 semanas.\n- **C) Incorreta:** A expectativa de vida dos caramujos infectados é de semanas a poucos meses (em geral até ~1 ano em condições ideais), não 3 anos.\n- **D) Incorreta:** 1 semana é insuficiente para maturação dos vermes adultos (período pré-patente é de ~5 semanas) e a eliminação dura anos, não meses.\n- **E) Incorreta:** Reservatórios permissivos (como roedores silvestres *Nectomys*) podem eliminar ovos viáveis nas fezes, embora seu papel epidemiológico seja secundário ao do homem.",
    "perolaClinica": "Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)**, a pessoa infectada pelo *Schistosoma mansoni* começa a eliminar ovos viáveis nas fezes **a partir de 5 semanas** após a penetração das cercárias, mantendo ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-055",
    "code": "Q-ENARE24-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "ISTs e Sífilis no Adulto",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-ists-e-sifilis-no-adulto",
    "tags": ["uretrite-gonococica","ceftriaxona","azitromicina","ists","pcdt-ist"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um jovem de 18 anos foi atendido em uma unidade básica de saúde com um quadro de segundo episódio de uretrite gonocócica em 3 meses.\n\nApós aconselhamento pela equipe, o tratamento instituído foi:",
    "alternativas": [
      {
        "letter": "A",
        "text": "doxiciclina 100 mg, 1 comprimido via oral, 12/12h por 30 dias;",
        "explanation": "Incorreta: Doxiciclina não cobre adequadamente *Neisseria gonorrhoeae* (e 30 dias é esquema excessivo).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "ceftriaxona 1g, intramuscular, dose única;",
        "explanation": "Incorreta: Ceftriaxona isolada não cobre coinfecção por *Chlamydia trachomatis* (frequente nas uretrites) e a dose padrão no Brasil é 500 mg IM.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "ceftriaxona 500 mg, intramuscular, dose única + azitromicina 500 mg, 4 comprimidos via oral, dose única;",
        "explanation": "A alternativa **C** está correta. No manejo da **infecção gonocócica anogenital/uretrite recorrente ou resistente** (ou no esquema de segunda linha/retratamento quando há falha ou reinfecção com suspeita de resistência, bem como no tratamento de cobertura dupla para gonococo + clamídia/micoplasma), o **PCDT de Atenção Integral às Pessoas com IST (Ministério da Saúde)** prevê **ceftriaxona 500 mg IM dose única associada a azitromicina** (na dose padrão de 1 g VO dose única ou **2 g VO — 4 comprimidos de 500 mg** em situações de suspeita de falha terapêutica/recorrência).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "ciprofloxacino 500 mg, via oral, 12/12h por 7 dias;",
        "explanation": "Incorreta: Quinolonas (ciprofloxacino) não são recomendadas para gonorreia no Brasil devido à elevada resistência bacteriana.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "azitromicina 500 mg, via oral, por 10 dias.",
        "explanation": "Incorreta: Azitromicina isolada por 10 dias não é esquema preconizado para uretrite gonocócica.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. No manejo da **infecção gonocócica anogenital/uretrite recorrente ou resistente** (ou no esquema de segunda linha/retratamento quando há falha ou reinfecção com suspeita de resistência, bem como no tratamento de cobertura dupla para gonococo + clamídia/micoplasma), o **PCDT de Atenção Integral às Pessoas com IST (Ministério da Saúde)** prevê **ceftriaxona 500 mg IM dose única associada a azitromicina** (na dose padrão de 1 g VO dose única ou **2 g VO — 4 comprimidos de 500 mg** em situações de suspeita de falha terapêutica/recorrência).\n- **A) Incorreta:** Doxiciclina não cobre adequadamente *Neisseria gonorrhoeae* (e 30 dias é esquema excessivo).\n- **B) Incorreta:** Ceftriaxona isolada não cobre coinfecção por *Chlamydia trachomatis* (frequente nas uretrites) e a dose padrão no Brasil é 500 mg IM.\n- **D) Incorreta:** Quinolonas (ciprofloxacino) não são recomendadas para gonorreia no Brasil devido à elevada resistência bacteriana.\n- **E) Incorreta:** Azitromicina isolada por 10 dias não é esquema preconizado para uretrite gonocócica.",
    "perolaClinica": "No manejo da **infecção gonocócica anogenital/uretrite recorrente ou resistente** (ou no esquema de segunda linha/retratamento quando há falha ou reinfecção com suspeita de resistência, bem como no tratamento de cobertur",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-057",
    "code": "Q-ENARE24-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "Síndrome Nefrítica e Nefrótica Pediátrica",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-sindrome-nefritica-e-nefrotica-pediatrica",
    "tags": ["sindrome-hemolitico-uremica","stec","escherichia-coli","anemia-hemolitica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A síndrome urêmica hemolítica típica (SHU) é uma doença do grupo das microangiopatias trombóticas. São distúrbios caracterizados por anemia hemolítica microangiopática não imune, trombocitopenia e insuficiência multissistêmica. A SHU está associada a infecções intestinais por bactérias produtoras da toxina Shiga, em especial a *Escherichia coli* enterohemorrágica invasiva (STEC - *Shiga-toxin– producing strains of E coli*). Carne mal-cozida, especialmente hambúrguer, leite e suco não pasteurizados, além de frutas e vegetais crus, podem estar contaminados por essas bactérias.\n\nA doença geralmente tem início abrupto com quadro de diarreia, muitas vezes com sangue e dor abdominal. Em adultos, geralmente é autolimitada a 5-10 dias. Porém, em crianças, observa-se maior associação à SHU.\n\nCom relação a essa doença em crianças, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o antibiótico de escolha é o ciprofloxacino;",
        "explanation": "Incorreta: Fluoroquinolonas (ciprofloxacino) aumentam a expressão da toxina Shiga e o risco de SHU.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a terapia antibiótica pode aumentar o risco de SHU e a plasmaférese pode auxiliar pacientes com doença por E. coli enterohemorrágica invasiva produtora da toxina SHIGA;",
        "explanation": "A alternativa **B** está correta. Na infecção intestinal por *E. coli* produtora de toxina Shiga (STEC), a **antibioticoterapia é contraindicada** pois a lise bacteriana e indução de profagos aumentam a liberação de toxina Shiga e **elevam significativamente o risco de desenvolvimento de SHU** (diretrizes IDSA / SBP / Nelson). Em casos graves com acometimento neurológico ou sistêmico refratário, terapias adjuvantes como a plasmaférese podem ser consideradas além do suporte intensivo.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "rifaximina associada a fluorquinolona deve ser administrada imediatamente em casos de diarreia hemorrágica;",
        "explanation": "Incorreta: Antibióticos são contraindicados na diarreia hemorrágica por STEC.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "vancomicina 125 mg, por via oral, quatro vezes ao dia, associada a fidaxomicina 200 mg, duas vezes ao dia durante 10 dias, é o tratamento indicando;",
        "explanation": "Incorreta: Vancomicina oral e fidaxomicina são tratamentos para *Clostridioides difficile*, não para STEC/SHU.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "sulfametoxazol + trimetoprima 800/160 mg a cada 6h por 28 dias é o tratamento de escolha.",
        "explanation": "Incorreta: SMX-TMP também é contraindicado na suspeita de STEC por elevar o risco de SHU.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Na infecção intestinal por *E. coli* produtora de toxina Shiga (STEC), a **antibioticoterapia é contraindicada** pois a lise bacteriana e indução de profagos aumentam a liberação de toxina Shiga e **elevam significativamente o risco de desenvolvimento de SHU** (diretrizes IDSA / SBP / Nelson). Em casos graves com acometimento neurológico ou sistêmico refratário, terapias adjuvantes como a plasmaférese podem ser consideradas além do suporte intensivo.\n- **A) Incorreta:** Fluoroquinolonas (ciprofloxacino) aumentam a expressão da toxina Shiga e o risco de SHU.\n- **C) Incorreta:** Antibióticos são contraindicados na diarreia hemorrágica por STEC.\n- **D) Incorreta:** Vancomicina oral e fidaxomicina são tratamentos para *Clostridioides difficile*, não para STEC/SHU.\n- **E) Incorreta:** SMX-TMP também é contraindicado na suspeita de STEC por elevar o risco de SHU.",
    "perolaClinica": "Na infecção intestinal por *E.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-058",
    "code": "Q-ENARE24-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Bronquiolite Viral Aguda e Coqueluche",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-bronquiolite-viral-aguda-e-coqueluche",
    "tags": ["coqueluche","bordetella-pertussis","macrolideos","tratamento-antibiotico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Coqueluche é uma infecção aguda do trato respiratório causada pela bactéria *Bordetella pertussis*. A palavra coqueluche significa “tosse violenta”, expressão que descreve apropriadamente a característica mais consistente e proeminente da doença. O nome chinês para coqueluche é “tosse de 100 dias”, termo que descreve o curso clínico da doença com precisão. A identificação de *B. pertussis* foi relatada pela primeira vez por Bordet e Gengou em 1906.\n\nA classe de antibióticos mais adequada para tratamento dessa doença é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "fosfomicina;",
        "explanation": "Incorreta: Fosfomicina não tem atividade clínica preconizada contra *B. pertussis*.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "quinolona;",
        "explanation": "Incorreta: Quinolonas não são primeira linha em pediatria nem para coqueluche.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "tetraciclina;",
        "explanation": "Incorreta: Tetraciclinas são contraindicadas em menores de 8 anos e não são droga de escolha.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "beta-lactâmico;",
        "explanation": "Incorreta: Beta-lactâmicos (como amoxicilina) não erradicam *B. pertussis* da nasofaringe.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "macrolídeo.",
        "explanation": "A alternativa **E** está correta. Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)** e a SBP, os **macrolídeos** — especialmente **azitromicina** (primeira escolha em todas as faixas etárias, inclusive neonatos) ou claritromicina/eritromicina — são a classe de escolha tanto para o tratamento quanto para a quimioprofilaxia da coqueluche (*Bordetella pertussis*), reduzindo a transmissibilidade (alternativa em alergia: SMX-TMP).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)** e a SBP, os **macrolídeos** — especialmente **azitromicina** (primeira escolha em todas as faixas etárias, inclusive neonatos) ou claritromicina/eritromicina — são a classe de escolha tanto para o tratamento quanto para a quimioprofilaxia da coqueluche (*Bordetella pertussis*), reduzindo a transmissibilidade (alternativa em alergia: SMX-TMP).\n- **A) Incorreta:** Fosfomicina não tem atividade clínica preconizada contra *B. pertussis*.\n- **B) Incorreta:** Quinolonas não são primeira linha em pediatria nem para coqueluche.\n- **C) Incorreta:** Tetraciclinas são contraindicadas em menores de 8 anos e não são droga de escolha.\n- **D) Incorreta:** Beta-lactâmicos (como amoxicilina) não erradicam *B. pertussis* da nasofaringe.",
    "perolaClinica": "Segundo o **Guia de Vigilância em Saúde (Ministério da Saúde)** e a SBP, os **macrolídeos** — especialmente **azitromicina** (primeira escolha em todas as faixas etárias, inclusive neonatos) ou claritromicina/eritromicin",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-059",
    "code": "Q-ENARE24-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Cardiopatias Congênitas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-cardiopatias-congenitas",
    "tags": ["sopro-cardiaco","sopro-inocente","cardiopatia-congenita","ausculta-cardiaca"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um lactente de 9 meses, com fácies sindrômica, assintomático, apresenta ausculta cardíaca com ritmo regular, bulhas normofonéticas com desdobramento variável da segunda bulha, sopro sistólico 2+/6+ mais audível em borda esternal esquerda baixa, sem irradiação, que diminui com a posição sentada. Os pulsos femorais são palpáveis.\n\nNesse caso, o médico deve:",
    "alternativas": [
      {
        "letter": "A",
        "text": "internar a criança para realização de exames;",
        "explanation": "Incorreta: O lactente está assintomático e hemodinamicamente estável, não havendo necessidade de internação hospitalar.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "encaminhar a criança para avaliação do cardiopediatra;",
        "explanation": "A alternativa **B** está correta. Apesar de a ausculta isolada lembrar um sopro inocente (sopro de Still: sistólico 2+/6+ em BEE baixa, sem irradiação, diminui sentado, B2 com desdobramento fisiológico), a presença de **fácies sindrômica** (ex.: síndrome de Down, Noonan, Williams, DiGeorge) é um **sinal de alerta formal** devido à altíssima prevalência de cardiopatias congênitas associadas, tornando obrigatório o **encaminhamento para avaliação do cardiopediatra** (com ecocardiograma), conforme diretrizes da SBP.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "iniciar medicação cardiológica (furosemida e captopril);",
        "explanation": "Incorreta: Não há sinais de insuficiência cardíaca que justifiquem iniciar furosemida ou captopril empiricamente.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "solicitar teste de oximetria de pulso;",
        "explanation": "Incorreta: O teste do coraçãozinho (oximetria de pulso) é exame de triagem neonatal (24–48h de vida) para cardiopatias críticas, não substitui avaliação cardiopediátrica em lactente de 9 meses com fácies sindrômica.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "considerar o achado como funcional, sem necessidade de encaminhamento.",
        "explanation": "Incorreta: Nunca se deve rotular um sopro como inocente sem investigação ecocardiográfica em criança com fácies sindrômica.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Apesar de a ausculta isolada lembrar um sopro inocente (sopro de Still: sistólico 2+/6+ em BEE baixa, sem irradiação, diminui sentado, B2 com desdobramento fisiológico), a presença de **fácies sindrômica** (ex.: síndrome de Down, Noonan, Williams, DiGeorge) é um **sinal de alerta formal** devido à altíssima prevalência de cardiopatias congênitas associadas, tornando obrigatório o **encaminhamento para avaliação do cardiopediatra** (com ecocardiograma), conforme diretrizes da SBP.\n- **A) Incorreta:** O lactente está assintomático e hemodinamicamente estável, não havendo necessidade de internação hospitalar.\n- **C) Incorreta:** Não há sinais de insuficiência cardíaca que justifiquem iniciar furosemida ou captopril empiricamente.\n- **D) Incorreta:** O teste do coraçãozinho (oximetria de pulso) é exame de triagem neonatal (24–48h de vida) para cardiopatias críticas, não substitui avaliação cardiopediátrica em lactente de 9 meses com fácies sindrômica.\n- **E) Incorreta:** Nunca se deve rotular um sopro como inocente sem investigação ecocardiográfica em criança com fácies sindrômica.",
    "perolaClinica": "Apesar de a ausculta isolada lembrar um sopro inocente (sopro de Still: sistólico 2+/6+ em BEE baixa, sem irradiação, diminui sentado, B2 com desdobramento fisiológico), a presença de **fácies sindrômica** (ex.: síndrome",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-060",
    "code": "Q-ENARE24-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Neoplasias Pediátricas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-neoplasias-pediatricas",
    "tags": ["leucemia","neoplasia-pediatrica","dor-ossea","bancitopenia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um escolar de 10 anos apresenta queixa de cansaço, dores nas pernas que o acordam durante a noite e emagrecimento de 2 kg no último mês. Apresenta as seguintes alterações ao exame físico: palidez cutâneo-mucosa 3+/4+, sopro sistólico 2+/6+ em bordo esternal esquerdo, taquicardia (FC = 120 bpm), fígado a 2,5 cm do RCD, ponta de baço palpável, dor à palpação do terço proximal da tíbia bilateralmente e petéquias esparsas em membros.\n\nO quadro clínico é sugestivo de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "anemia falciforme;",
        "explanation": "Incorreta: Anemia falciforme tem início precoce na infância, cursa com hemólise crônica e crises vaso-oclusivas, não com emagrecimento subagudo + petéquias (plaquetopenia) + dor metafisária bilateral de início aos 10 anos.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "leucemia;",
        "explanation": "A alternativa **B** está correta. A combinação de **sinais de falência medular** (anemia sintomática com palidez 3+/4+, taquicardia e sopro anêmico + plaquetopenia manifesta por **petéquias**), **sintomas B** (emagrecimento, astenia), **hepatoesplenomegalia** e **dor óssea noturna com dor à palpação de metáfises tibiais** (infiltração leucêmica periosteal) é altamente sugestiva de **leucemia aguda** (principalmente LLA, neoplasia mais comum da infância; SBP / INCA).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "zika vírus;",
        "explanation": "Incorreta: Zika vírus é doença viral aguda autolimitada (exantema pruriginoso, conjuntivite, artralgia), não provoca anemia grave, emagrecimento e hepatoesplenomegalia subagudos.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "endocardite infecciosa;",
        "explanation": "Incorreta: Endocardite infecciosa cursa com febre persistente e sopro regurgitativo novo em cardiopata, sem dor metafisária tibial bilateral típica de infiltração medular.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "toxoplasmose.",
        "explanation": "Incorreta: Toxoplasmose adquirida em imunocompetente é geralmente assintomática ou causa linfadenopatia cervical autolimitada.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. A combinação de **sinais de falência medular** (anemia sintomática com palidez 3+/4+, taquicardia e sopro anêmico + plaquetopenia manifesta por **petéquias**), **sintomas B** (emagrecimento, astenia), **hepatoesplenomegalia** e **dor óssea noturna com dor à palpação de metáfises tibiais** (infiltração leucêmica periosteal) é altamente sugestiva de **leucemia aguda** (principalmente LLA, neoplasia mais comum da infância; SBP / INCA).\n- **A) Incorreta:** Anemia falciforme tem início precoce na infância, cursa com hemólise crônica e crises vaso-oclusivas, não com emagrecimento subagudo + petéquias (plaquetopenia) + dor metafisária bilateral de início aos 10 anos.\n- **C) Incorreta:** Zika vírus é doença viral aguda autolimitada (exantema pruriginoso, conjuntivite, artralgia), não provoca anemia grave, emagrecimento e hepatoesplenomegalia subagudos.\n- **D) Incorreta:** Endocardite infecciosa cursa com febre persistente e sopro regurgitativo novo em cardiopata, sem dor metafisária tibial bilateral típica de infiltração medular.\n- **E) Incorreta:** Toxoplasmose adquirida em imunocompetente é geralmente assintomática ou causa linfadenopatia cervical autolimitada.",
    "perolaClinica": "A combinação de **sinais de falência medular** (anemia sintomática com palidez 3+/4+, taquicardia e sopro anêmico + plaquetopenia manifesta por **petéquias**), **sintomas B** (emagrecimento, astenia), **hepatoesplenomega",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-061",
    "code": "Q-ENARE24-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Ovário e Massas Anexiais",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-ovario-e-massas-anexiais",
    "tags": ["torcao-anexial","torcao-de-ovario","abdome-agudo-ginecologico","ultrassonografia-doppler"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 24 anos, saudável, é usuária de dispositivo intrauterino de cobre. Refere vida sexual ativa com uso de preservativos e última menstruação há 10 dias. Há 2 horas, iniciou-se uma dor de instalação aguda, de padrão constante, em fossa ilíaca direita, sem irradiação, associada a náuseas e vômitos. Nega sangramento vaginal, febre, dor lombar, mudança de hábito intestinal ou urinário. A ultrassonografia transvaginal evidenciou aumento do ovário direito, comprometimento do fluxo sanguíneo em região anexial do mesmo lado e líquido livre em fundo de saco.\n\nA hipótese mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "gestação ectópica à direita;",
        "explanation": "Incorreta: Menstruação há 10 dias, sem sangramento vaginal, e USTV mostrando especificamente aumento ovariano com redução do fluxo vascular (sem massa anexial extraovariana/saco gestacional).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "abscesso ovariano à direita;",
        "explanation": "Incorreta: Abscesso tubo-ovariano cursa com febre, leucocitose, corrimento purulento e dor subaguda, não instalação súbita em 2 horas afebril.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "torção de ovário e tuba uterina à direita;",
        "explanation": "A alternativa **C** está correta. Mulher jovem com **dor aguda intensa em fossa ilíaca direita associada a náuseas e vômitos**, afebril, sem atraso menstrual (DUM há 10 dias, uso de DIU + preservativo) e **USTV com aumento unilateral do ovário direito e comprometimento do fluxo sanguíneo ao Doppler** fecha o diagnóstico clássico de **torção anexial (ovário e tuba uterina)**, emergência cirúrgica (FEBRASGO).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "apendicite;",
        "explanation": "Incorreta: Apendicite aguda não causa aumento ovariano com comprometimento de fluxo vascular anexial ao Doppler.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "pielonefrite à direita.",
        "explanation": "Incorreta: Pielonefrite cursa com febre, disúria/polaciúria e dor lombar (sinal de Giordano), ausentes no caso.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Mulher jovem com **dor aguda intensa em fossa ilíaca direita associada a náuseas e vômitos**, afebril, sem atraso menstrual (DUM há 10 dias, uso de DIU + preservativo) e **USTV com aumento unilateral do ovário direito e comprometimento do fluxo sanguíneo ao Doppler** fecha o diagnóstico clássico de **torção anexial (ovário e tuba uterina)**, emergência cirúrgica (FEBRASGO).\n- **A) Incorreta:** Menstruação há 10 dias, sem sangramento vaginal, e USTV mostrando especificamente aumento ovariano com redução do fluxo vascular (sem massa anexial extraovariana/saco gestacional).\n- **B) Incorreta:** Abscesso tubo-ovariano cursa com febre, leucocitose, corrimento purulento e dor subaguda, não instalação súbita em 2 horas afebril.\n- **D) Incorreta:** Apendicite aguda não causa aumento ovariano com comprometimento de fluxo vascular anexial ao Doppler.\n- **E) Incorreta:** Pielonefrite cursa com febre, disúria/polaciúria e dor lombar (sinal de Giordano), ausentes no caso.",
    "perolaClinica": "Mulher jovem com **dor aguda intensa em fossa ilíaca direita associada a náuseas e vômitos**, afebril, sem atraso menstrual (DUM há 10 dias, uso de DIU + preservativo) e **USTV com aumento unilateral do ovário direito e ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-062",
    "code": "Q-ENARE24-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Violência Sexual e Aborto Previsto em Lei",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-violencia-sexual-e-aborto-previsto-em-lei",
    "tags": ["violencia-sexual","profilaxia-pos-exposicao","contracepcao-de-emergencia","atendimento-inicial"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 18 anos chega à emergência do hospital referindo ter sido vítima de violência sexual há 2 horas em uma festa. Relata que, no ato, houve penetração. Ela desconhece o agressor, o qual não usou preservativo.\n\nA abordagem inicial deve incluir:",
    "alternativas": [
      {
        "letter": "A",
        "text": "atendimento inicial exclusivo por médico;",
        "explanation": "Incorreta: O atendimento deve ser realizado por equipe multiprofissional (enfermagem, psicologia, serviço social e medicina), não exclusivamente por médico.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "encaminhamento da paciente primeiramente ao instituto médico legal;",
        "explanation": "Incorreta: Nunca se deve condicionar ou atrasar o atendimento médico encaminhando primeiro ao IML.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "encaminhamento da paciente para realizar boletim de ocorrência antes do atendimento médico;",
        "explanation": "Incorreta: O Boletim de Ocorrência **não é obrigatório** nem pré-requisito para atendimento ou profilaxias no SUS.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "início de profilaxia para as doenças sexualmente transmissíveis e prevenção de gravidez em até 5 dias;",
        "explanation": "Incorreta: A profilaxia pós-exposição ao HIV (PEP) deve ser iniciada **o mais rápido possível, em até 72 horas (3 dias)** — não 5 dias.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "avaliação do estado geral de saúde, orientação e proteção contra doenças de transmissão sexual, prevenção de gravidez e coleta de materiais biológicos ou outros indícios materiais que permitam a identificação do agressor.",
        "explanation": "A alternativa **E** está correta. Segundo a **Lei nº 12.845/2013 (Lei do Minuto Seguinte)** e a **Norma Técnica do Ministério da Saúde** para atenção às pessoas em situação de violência sexual, o atendimento no SUS é imediato, obrigatório e multidisciplinar, devendo incluir: acolhimento e avaliação clínica geral, **profilaxias contra ISTs não virais, HIV (PEP em até 72h) e hepatite B**, **anticoncepção de emergência** e **coleta/preservação de vestígios biológicos** (com consentimento da vítima) na própria unidade de saúde.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Segundo a **Lei nº 12.845/2013 (Lei do Minuto Seguinte)** e a **Norma Técnica do Ministério da Saúde** para atenção às pessoas em situação de violência sexual, o atendimento no SUS é imediato, obrigatório e multidisciplinar, devendo incluir: acolhimento e avaliação clínica geral, **profilaxias contra ISTs não virais, HIV (PEP em até 72h) e hepatite B**, **anticoncepção de emergência** e **coleta/preservação de vestígios biológicos** (com consentimento da vítima) na própria unidade de saúde.\n- **A) Incorreta:** O atendimento deve ser realizado por equipe multiprofissional (enfermagem, psicologia, serviço social e medicina), não exclusivamente por médico.\n- **B) Incorreta:** Nunca se deve condicionar ou atrasar o atendimento médico encaminhando primeiro ao IML.\n- **C) Incorreta:** O Boletim de Ocorrência **não é obrigatório** nem pré-requisito para atendimento ou profilaxias no SUS.\n- **D) Incorreta:** A profilaxia pós-exposição ao HIV (PEP) deve ser iniciada **o mais rápido possível, em até 72 horas (3 dias)** — não 5 dias.",
    "perolaClinica": "Segundo a **Lei nº 12.845/2013 (Lei do Minuto Seguinte)** e a **Norma Técnica do Ministério da Saúde** para atenção às pessoas em situação de violência sexual, o atendimento no SUS é imediato, obrigatório e multidiscipli",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-063",
    "code": "Q-ENARE24-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Síndrome dos Ovários Policísticos",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-sindrome-dos-ovarios-policisticos",
    "tags": ["sindrome-dos-ovarios-policisticos","sop","oligoamenorreia","hiperandrogenismo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 23 anos tem queixa de irregularidade menstrual de longa data. Relata que, desde a primeira menstruação, tem intervalo de 50 a 60 dias entre os ciclos e períodos de amenorreia. No último ano, estava em final de faculdade e ganhou muito peso em função de estresse e sedentarismo. Ao exame, apresenta bom estado geral, IMC 31 kg/m², presença de acne em face e dorso e escurecimento de região de dobras.\n\nFrente a esse cenário, a principal hipótese é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "síndrome dos ovários policísticos;",
        "explanation": "A alternativa **A** está correta. Mulher jovem com **oligo/amenorreia desde a menarca** (ciclos de 50–60 dias), **hiperandrogenismo clínico** (acne em face e dorso), obesidade (IMC 31 kg/m²) e **acantose nigricans** (escurecimento de dobras — marcador de resistência insulínica) já preenche 2 dos 3 **critérios de Rotterdam** (disfunção ovulatória + hiperandrogenismo) para **síndrome dos ovários policísticos (SOP)** (FEBRASGO / Consenso Internacional de SOP 2023).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "sobrepeso com aumento de gordura visceral;",
        "explanation": "Incorreta: O IMC é 31 kg/m² (obesidade grau I, não sobrepeso) e não explica isoladamente a irregularidade menstrual desde a menarca e o hiperandrogenismo.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "deficiência enzimática da suprarrenal da 21-hidroxilase;",
        "explanation": "Incorreta: Hiperplasia adrenal congênita forma não clássica (21-hidroxilase) é diagnóstico diferencial a ser excluído (dosando 17-OH-progesterona), mas é muito menos prevalente que a SOP.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "síndrome de Cushing;",
        "explanation": "Incorreta: Síndrome de Cushing apresenta estrias violáceas largas, fácies em lua cheia, giba dorsal, fraqueza proximal e HAS, ausentes no relato.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "hipotireoidismo.",
        "explanation": "Incorreta: Hipotireoidismo é diagnóstico diferencial de irregularidade menstrual, mas não explica acne androgênica e acantose nigricans como causa principal.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Mulher jovem com **oligo/amenorreia desde a menarca** (ciclos de 50–60 dias), **hiperandrogenismo clínico** (acne em face e dorso), obesidade (IMC 31 kg/m²) e **acantose nigricans** (escurecimento de dobras — marcador de resistência insulínica) já preenche 2 dos 3 **critérios de Rotterdam** (disfunção ovulatória + hiperandrogenismo) para **síndrome dos ovários policísticos (SOP)** (FEBRASGO / Consenso Internacional de SOP 2023).\n- **B) Incorreta:** O IMC é 31 kg/m² (obesidade grau I, não sobrepeso) e não explica isoladamente a irregularidade menstrual desde a menarca e o hiperandrogenismo.\n- **C) Incorreta:** Hiperplasia adrenal congênita forma não clássica (21-hidroxilase) é diagnóstico diferencial a ser excluído (dosando 17-OH-progesterona), mas é muito menos prevalente que a SOP.\n- **D) Incorreta:** Síndrome de Cushing apresenta estrias violáceas largas, fácies em lua cheia, giba dorsal, fraqueza proximal e HAS, ausentes no relato.\n- **E) Incorreta:** Hipotireoidismo é diagnóstico diferencial de irregularidade menstrual, mas não explica acne androgênica e acantose nigricans como causa principal.",
    "perolaClinica": "Mulher jovem com **oligo/amenorreia desde a menarca** (ciclos de 50–60 dias), **hiperandrogenismo clínico** (acne em face e dorso), obesidade (IMC 31 kg/m²) e **acantose nigricans** (escurecimento de dobras — marcador de",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-064",
    "code": "Q-ENARE24-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Climatério e Terapia Hormonal",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-climaterio-e-terapia-hormonal",
    "tags": ["menopausa-precoce","sintomas-vasomotores","cancer-de-mama","tratamento-nao-hormonal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 38 anos teve diagnóstico de câncer de mama há 18 meses, com realização de quimioterapia neoadjuvante e mastectomia à direita. Não menstrua há 12 meses. Há 6 meses queixa-se de calores e suores todas as noites, com prejuízo importante de sua qualidade de vida. Recentemente notou piora da lubrificação vaginal.\n\nAnalisando o caso acima, o diagnóstico e a conduta apropriada são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "menopausa precoce; início de terapia hormonal com estrogênio e progesterona via oral e uso de lubrificantes vaginais;",
        "explanation": "Incorreta: Terapia hormonal sistêmica com estrogênio e progesterona é contraindicada absoluta em pacientes com histórico de câncer de mama.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "menopausa precoce; início de escitalopram e hidratantes vaginais;",
        "explanation": "A alternativa **B** está correta. Mulher < 40 anos com 12 meses consecutivos de amenorreia pós-quimioterapia e sintomas vasomotores intensos apresenta **menopausa precoce (insuficiência ovariana prematura iatrogênica)**. Como há histórico de **câncer de mama**, a terapia hormonal sistêmica é formalmente **contraindicada** (FEBRASGO / NAMS / ASCO); o manejo de primeira linha dos fogachos é não hormonal com **ISRS/IRSN** (como **escitalopram** ou venlafaxina — evitando paroxetina/fluoxetina se em uso de tamoxifeno por inibição da CYP2D6) associado a **hidratantes e lubrificantes vaginais não hormonais** para a síndrome geniturinária da menopausa.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "menopausa precoce; início de estriol vaginal e laser vaginal;",
        "explanation": "Incorreta: Estriol vaginal não trata fogachos sistêmicos e só é considerado em casos refratários de atrofia após discussão com o oncologista.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "cessação temporária da menstruação; início de desvenlafaxina e lubrificantes vaginais;",
        "explanation": "Incorreta: 12 meses de amenorreia aos 38 anos configura menopausa precoce, não mera \"cessação temporária\".",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "transição menopausal; início de estriol transdérmico e fisioterapia pélvica.",
        "explanation": "Incorreta: A paciente já completou 12 meses sem menstruar (pós-menopausa precoce, não transição menopausal) e estrogênio transdérmico é contraindicado.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Mulher < 40 anos com 12 meses consecutivos de amenorreia pós-quimioterapia e sintomas vasomotores intensos apresenta **menopausa precoce (insuficiência ovariana prematura iatrogênica)**. Como há histórico de **câncer de mama**, a terapia hormonal sistêmica é formalmente **contraindicada** (FEBRASGO / NAMS / ASCO); o manejo de primeira linha dos fogachos é não hormonal com **ISRS/IRSN** (como **escitalopram** ou venlafaxina — evitando paroxetina/fluoxetina se em uso de tamoxifeno por inibição da CYP2D6) associado a **hidratantes e lubrificantes vaginais não hormonais** para a síndrome geniturinária da menopausa.\n- **A) Incorreta:** Terapia hormonal sistêmica com estrogênio e progesterona é contraindicada absoluta em pacientes com histórico de câncer de mama.\n- **C) Incorreta:** Estriol vaginal não trata fogachos sistêmicos e só é considerado em casos refratários de atrofia após discussão com o oncologista.\n- **D) Incorreta:** 12 meses de amenorreia aos 38 anos configura menopausa precoce, não mera \"cessação temporária\".\n- **E) Incorreta:** A paciente já completou 12 meses sem menstruar (pós-menopausa precoce, não transição menopausal) e estrogênio transdérmico é contraindicado.",
    "perolaClinica": "Mulher < 40 anos com 12 meses consecutivos de amenorreia pós-quimioterapia e sintomas vasomotores intensos apresenta **menopausa precoce (insuficiência ovariana prematura iatrogênica)**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-065",
    "code": "Q-ENARE24-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Neoplasias Pediátricas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-neoplasias-pediatricas",
    "tags": ["sarcoma-botrioide","rabdomiossarcoma","neoplasia-pediatrica","tumores-ginecologicos-infantis"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma criança do sexo feminino, de 2 anos de idade, chega encaminhada pelo seu pediatra. A mãe relata corrimento vaginal ora sanguinolento, ora aquoso e uma estrutura semelhante a “cachos de uva” de aspecto gelatinoso na entrada da vagina.\n\nA principal hipótese é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "má higiene;",
        "explanation": "Incorreta: Má higiene causa vulvovaginite inespecífica, nunca massa gelatinosa em cachos de uva.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "sarcoma botrioide;",
        "explanation": "A alternativa **B** está correta. Menina pequena (< 5 anos, pico em torno de 2 anos) apresentando **corrimento vaginal sanguinolento/aquoso e massa polipoide gelatinosa exteriorizando-se pelo introito vaginal com aspecto clássico em \"cachos de uva\"** é a apresentação patognomônica do **sarcoma botrioide** (rabdomiossarcoma embrionário de vagina), neoplasia maligna mais comum do trato genital inferior na infância (FEBRASGO / Nelson).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "corpo estranho;",
        "explanation": "Incorreta: Corpo estranho vaginal provoca corrimento purulento/sanguinolento fétido, sem lesão tumoral em cachos de uva.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "contaminação com gel hormonal transdérmico da mãe;",
        "explanation": "Incorreta: Exposição exógena a estrogênio pode causar telarca/sangramento, não massa polipoide gelatinosa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "estímulo hormonal remanescente do intraútero.",
        "explanation": "Incorreta: Estímulo estrogênico materno residual ocorre apenas nas primeiras semanas de vida (período neonatal), nunca aos 2 anos.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Menina pequena (< 5 anos, pico em torno de 2 anos) apresentando **corrimento vaginal sanguinolento/aquoso e massa polipoide gelatinosa exteriorizando-se pelo introito vaginal com aspecto clássico em \"cachos de uva\"** é a apresentação patognomônica do **sarcoma botrioide** (rabdomiossarcoma embrionário de vagina), neoplasia maligna mais comum do trato genital inferior na infância (FEBRASGO / Nelson).\n- **A) Incorreta:** Má higiene causa vulvovaginite inespecífica, nunca massa gelatinosa em cachos de uva.\n- **C) Incorreta:** Corpo estranho vaginal provoca corrimento purulento/sanguinolento fétido, sem lesão tumoral em cachos de uva.\n- **D) Incorreta:** Exposição exógena a estrogênio pode causar telarca/sangramento, não massa polipoide gelatinosa.\n- **E) Incorreta:** Estímulo estrogênico materno residual ocorre apenas nas primeiras semanas de vida (período neonatal), nunca aos 2 anos.",
    "perolaClinica": "Menina pequena (< 5 anos, pico em torno de 2 anos) apresentando **corrimento vaginal sanguinolento/aquoso e massa polipoide gelatinosa exteriorizando-se pelo introito vaginal com aspecto clássico em \"cachos de uva\"** é a",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-066",
    "code": "Q-ENARE24-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": ["hsil","hpv-16","colposcopia","prevencao-colo-uterino"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 32 anos foi à consulta ginecológica de rotina para realização de colpocitologia oncótica. O exame evidenciou agrupamento de células escamosas com núcleos aumentados, hipercrômicos e irregulares, com alta relação núcleo-citoplasmática sugestiva de lesão intraepitelial de alto grau. Como a amostra foi coletada em meio líquido, foi solicitado teste de HPV, que veio positivo para o subtipo 16.\n\nFrente a essas informações, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "se trata de exame normal, com seguimento em 3 anos;",
        "explanation": "Incorreta: O exame é claramente alterado (HSIL + HPV 16), jamais normal.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "pela associação com HPV-16, a lesão é considerada de baixo grau;",
        "explanation": "Incorreta: HPV 16 é o principal subtipo de **alto risco** e a citologia já é de alto grau (HSIL).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "se trata de uma lesão de alto grau com infecção por HPV de alto risco oncogênico, sendo indicada colposcopia;",
        "explanation": "A alternativa **C** está correta. O achado citológico descreve **lesão intraepitelial escamosa de alto grau (HSIL)** associada ao **HPV 16** (subtipo de **alto risco oncogênico**, responsável por ~50–60% dos cânceres cervicais). Segundo as **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)** e a FEBRASGO, toda paciente com citologia HSIL deve ser encaminhada imediatamente para **colposcopia** (para localizar a lesão, avaliar a junção escamocolunar e decidir entre biópsia ou \"ver e tratar\" — EZT).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "por se tratar de uma infecção por HPV de baixo risco oncogênico, está indicado seguimento semestral;",
        "explanation": "Incorreta: HPV 16 é de alto risco (baixo risco são 6 e 11) e não se faz apenas seguimento semestral diante de HSIL.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "se trata de uma infecção por HPV de alto risco oncogênico, sendo indicada a realização imediata da exérese da zona de transformação (EZT ou LEEP), sem a necessidade de colposcopia.",
        "explanation": "Incorreta: A EZT (\"ver e tratar\") só é realizada **sob visão colposcópica** quando a colposcopia é satisfatória (ZT tipo 1 ou 2) e confirma lesão maior compatível — nunca \"sem necessidade de colposcopia\".",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O achado citológico descreve **lesão intraepitelial escamosa de alto grau (HSIL)** associada ao **HPV 16** (subtipo de **alto risco oncogênico**, responsável por ~50–60% dos cânceres cervicais). Segundo as **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)** e a FEBRASGO, toda paciente com citologia HSIL deve ser encaminhada imediatamente para **colposcopia** (para localizar a lesão, avaliar a junção escamocolunar e decidir entre biópsia ou \"ver e tratar\" — EZT).\n- **A) Incorreta:** O exame é claramente alterado (HSIL + HPV 16), jamais normal.\n- **B) Incorreta:** HPV 16 é o principal subtipo de **alto risco** e a citologia já é de alto grau (HSIL).\n- **D) Incorreta:** HPV 16 é de alto risco (baixo risco são 6 e 11) e não se faz apenas seguimento semestral diante de HSIL.\n- **E) Incorreta:** A EZT (\"ver e tratar\") só é realizada **sob visão colposcópica** quando a colposcopia é satisfatória (ZT tipo 1 ou 2) e confirma lesão maior compatível — nunca \"sem necessidade de colposcopia\".",
    "perolaClinica": "O achado citológico descreve **lesão intraepitelial escamosa de alto grau (HSIL)** associada ao **HPV 16** (subtipo de **alto risco oncogênico**, responsável por ~50–60% dos cânceres cervicais).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-067",
    "code": "Q-ENARE24-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Câncer de Mama",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-cancer-de-mama",
    "tags": ["cancer-de-mama","niveis-de-berg","peitoral-menor","esvaziamento-axilar"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 63 anos, portadora de carcinoma lobular invasivo de mama direita de 2,0 cm, com axila clinicamente livre, é submetida a quadrantectomia com biópsia de linfonodo sentinela. Durante o exame de congelação intraoperatória, o patologista encontra a presença de células carcinomatosas nos linfonodos sentinelas biopsiados. É indicado o esvaziamento axilar. Para tanto, é importante definir quais são os 3 níveis dos linfonodos axilares.\n\nA estrutura anatômica que define esses níveis é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a artéria axilar;",
        "explanation": "Incorreta: A artéria/veia axilar serve como limite superior anatômico da dissecção axilar, mas não define os níveis I, II e III de Berg.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "o músculo peitoral maior;",
        "explanation": "Incorreta: O músculo peitoral maior é superficial ao peitoral menor e não é o marco dos níveis de Berg.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "o músculo peitoral menor;",
        "explanation": "A alternativa **C** está correta. Os **3 níveis de Berg** dos linfonodos axilares são definidos anatomicamente em relação ao **músculo peitoral menor**: **Nível I** (lateral/inferior à borda lateral do peitoral menor), **Nível II** (posterior/sob o peitoral menor) e **Nível III** (medial/apical à borda medial do peitoral menor), conforme SBM/FEBRASGO e Sabiston.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "a artéria mamária interna;",
        "explanation": "Incorreta: A cadeia mamária interna é drenagem paraesternal independente dos níveis axilares.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "o nervo intercostobraquial.",
        "explanation": "Incorreta: O nervo intercostobraquial cruza a axila (sensibilidade da face medial do braço) e deve ser preservado quando possível, mas não define os níveis linfonodais.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Os **3 níveis de Berg** dos linfonodos axilares são definidos anatomicamente em relação ao **músculo peitoral menor**: **Nível I** (lateral/inferior à borda lateral do peitoral menor), **Nível II** (posterior/sob o peitoral menor) e **Nível III** (medial/apical à borda medial do peitoral menor), conforme SBM/FEBRASGO e Sabiston.\n- **A) Incorreta:** A artéria/veia axilar serve como limite superior anatômico da dissecção axilar, mas não define os níveis I, II e III de Berg.\n- **B) Incorreta:** O músculo peitoral maior é superficial ao peitoral menor e não é o marco dos níveis de Berg.\n- **D) Incorreta:** A cadeia mamária interna é drenagem paraesternal independente dos níveis axilares.\n- **E) Incorreta:** O nervo intercostobraquial cruza a axila (sensibilidade da face medial do braço) e deve ser preservado quando possível, mas não define os níveis linfonodais.",
    "perolaClinica": "Os **3 níveis de Berg** dos linfonodos axilares são definidos anatomicamente em relação ao **músculo peitoral menor**: **Nível I** (lateral/inferior à borda lateral do peitoral menor), **Nível II** (posterior/sob o peito",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-068",
    "code": "Q-ENARE24-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Puberdade Normal, Precoce e Atrasada",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-puberdade-normal-precoce-e-atrasada",
    "tags": ["puberdade-precoce","puberdade-precoce-central","telarca","estagios-de-tanner"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma menina de 6 anos é levada pela mãe ao ginecologista por ter iniciado desenvolvimento mamário há 4 meses. Ao exame físico, apresenta mamas em estágio M2 de Tanner e genitália em estágio P1 de Tanner. De acordo com o gráfico de velocidade de crescimento, a paciente manteve um padrão de 4 cm/ano no último ano. Realizada uma radiografia de mão e de punhos pelo método de Greulich-Pyle, identifica-se que a idade óssea da criança é estimada em 6 anos e 2 meses. A dosagem hormonal de LH é 1,2 UI/L.\n\nConsiderando as informações acima, o diagnóstico mais provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "telarca precoce isolada;",
        "explanation": "Incorreta: Na telarca precoce isolada, o eixo HHG permanece inativo e os níveis basais de LH são pré-puberais (indetectáveis / < 0,3 UI/L).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "pubarca precoce isolada;",
        "explanation": "Incorreta: A paciente está em P1 de Tanner (ausência de pelos pubianos).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "menarca precoce isolada;",
        "explanation": "Incorreta: Não há relato de sangramento vaginal (menarca).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "puberdade precoce central;",
        "explanation": "A alternativa **D** está correta. Apesar de a velocidade de crescimento (4 cm/ano) e a idade óssea (6a 2m) ainda não estarem acentuadamente avançadas (início recente há apenas 4 meses), o dado decisivo no enunciado é o **LH basal = 1,2 UI/L** — valor **puberal** (pelo PCDT de Puberdade Precoce Central do Ministério da Saúde e SBP/FEBRASGO, LH basal > 0,3 a 0,6 UI/L por ensaio ultrassensível já confirma ativação do eixo hipotálamo-hipófise-gonadal), definindo **puberdade precoce central (GnRH-dependente)** em menina < 8 anos.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "puberdade precoce periférica.",
        "explanation": "Incorreta: Na puberdade precoce periférica (GnRH-independente), a produção autônoma de esteroides suprime o eixo HHG, cursando com LH suprimido/indetectável.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Apesar de a velocidade de crescimento (4 cm/ano) e a idade óssea (6a 2m) ainda não estarem acentuadamente avançadas (início recente há apenas 4 meses), o dado decisivo no enunciado é o **LH basal = 1,2 UI/L** — valor **puberal** (pelo PCDT de Puberdade Precoce Central do Ministério da Saúde e SBP/FEBRASGO, LH basal > 0,3 a 0,6 UI/L por ensaio ultrassensível já confirma ativação do eixo hipotálamo-hipófise-gonadal), definindo **puberdade precoce central (GnRH-dependente)** em menina < 8 anos.\n- **A) Incorreta:** Na telarca precoce isolada, o eixo HHG permanece inativo e os níveis basais de LH são pré-puberais (indetectáveis / < 0,3 UI/L).\n- **B) Incorreta:** A paciente está em P1 de Tanner (ausência de pelos pubianos).\n- **C) Incorreta:** Não há relato de sangramento vaginal (menarca).\n- **E) Incorreta:** Na puberdade precoce periférica (GnRH-independente), a produção autônoma de esteroides suprime o eixo HHG, cursando com LH suprimido/indetectável.",
    "perolaClinica": "Apesar de a velocidade de crescimento (4 cm/ano) e a idade óssea (6a 2m) ainda não estarem acentuadamente avançadas (início recente há apenas 4 meses), o dado decisivo no enunciado é o **LH basal = 1,2 UI/L** — valor **p",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-069",
    "code": "Q-ENARE24-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Úlceras Genitais e ISTs em Ginecologia",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-ulceras-genitais-e-ists-em-ginecologia",
    "tags": ["herpes-genital","aciclovir","ulceras-genitais","ist"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 23 anos, sexualmente ativa, utilizando contracepção com pílula hormonal combinada, refere surgimento de lesões ulceradas, dolorosas em face interna de grande lábio esquerdo, há 3 dias. Precedendo o surgimento das lesões, refere que a região acometida apresentou um aumento de sensibilidade. Além disso, relata ter apresentado quadro de faringite há 1 semana. Ao exame, identifica-se a vulva trófica, sem distopias aparentes, apresentando 5 lesões ulceradas, com menos de 0,5 cm cada, coalescendo, dolorosas ao toque. Há presença de micropolilinfadenopatia inguinal bilateral, indolor.\n\nConsiderando a principal hipótese diagnóstica, a opção adequada de tratamento para a paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aciclovir 400 mg, três vezes ao dia, por 7 a 14 dias;",
        "explanation": "A alternativa **A** está correta. O quadro de **pródromo sensitivo local** (aumento de sensibilidade/parestesia) seguido de **múltiplas pequenas úlceras (< 0,5 cm) dolorosas coalescentes** em vulva e linfadenopatia inguinal bilateral é clássico de **herpes genital (primeiro episódio)**. Conforme o **PCDT-IST do Ministério da Saúde**, o tratamento de escolha é **aciclovir 400 mg VO de 8/8h (3x/dia) por 7 a 10 dias** (ou até 14 dias se cicatrização incompleta).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "ceftriaxona 1g, IV ou IM, uma vez ao dia, por 8 a 10 dias;",
        "explanation": "Incorreta: Ceftriaxona por 8–10 dias não trata herpes genital nem é esquema de úlcera genital primária.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "doxiciclina 100 mg, VO, duas vezes ao dia, por 10 a 15 dias;",
        "explanation": "Incorreta: Doxiciclina 100 mg 12/12h é tratamento de linfogranuloma venéreo (21 dias) ou alternativa para sífilis/clamídia, não de herpes.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "prednisona, 20 mg, VO, uma vez ao dia, até remissão da úlcera;",
        "explanation": "Incorreta: Corticoterapia sistêmica é contraindicada em infecção herpética ativa.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "penicilina G benzatina, 2,4 milhões UI, IM, dose única (1,2 milhão UI em cada glúteo).",
        "explanation": "Incorreta: Penicilina G benzatina trata sífilis primária (cancro duro: úlcera única, indolor, de base endurecida e fundo limpo), diferente das múltiplas úlceras dolorosas coalescentes.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O quadro de **pródromo sensitivo local** (aumento de sensibilidade/parestesia) seguido de **múltiplas pequenas úlceras (< 0,5 cm) dolorosas coalescentes** em vulva e linfadenopatia inguinal bilateral é clássico de **herpes genital (primeiro episódio)**. Conforme o **PCDT-IST do Ministério da Saúde**, o tratamento de escolha é **aciclovir 400 mg VO de 8/8h (3x/dia) por 7 a 10 dias** (ou até 14 dias se cicatrização incompleta).\n- **B) Incorreta:** Ceftriaxona por 8–10 dias não trata herpes genital nem é esquema de úlcera genital primária.\n- **C) Incorreta:** Doxiciclina 100 mg 12/12h é tratamento de linfogranuloma venéreo (21 dias) ou alternativa para sífilis/clamídia, não de herpes.\n- **D) Incorreta:** Corticoterapia sistêmica é contraindicada em infecção herpética ativa.\n- **E) Incorreta:** Penicilina G benzatina trata sífilis primária (cancro duro: úlcera única, indolor, de base endurecida e fundo limpo), diferente das múltiplas úlceras dolorosas coalescentes.",
    "perolaClinica": "O quadro de **pródromo sensitivo local** (aumento de sensibilidade/parestesia) seguido de **múltiplas pequenas úlceras (< 0,5 cm) dolorosas coalescentes** em vulva e linfadenopatia inguinal bilateral é clássico de **herp",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-070",
    "code": "Q-ENARE24-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Miomatose Uterina e Pólipos",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-miomatose-uterina-e-polipos",
    "tags": ["polipo-endometrial","sangramento-pos-menopausa","ultrassonografia-transvaginal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 63 anos, portadora de diabetes mellitus e hipertensão arterial sistêmica controlada, encontra-se em menopausa há 10 anos. Comparece ao ginecologista com queixas de sangramento vaginal há 3 meses. O exame físico não apresenta alterações aparentes ou sinais de sangramento ativo no momento. É realizada uma ultrassonografia transvaginal, que evidencia endométrio com 3 mm de espessura, com imagem ecogênica focal que ocupa a interface entre os folhetos endometriais e mede 5 mm no maior eixo.\n\nA causa mais provável do sangramento nesse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "adenomiose;",
        "explanation": "Incorreta: Adenomiose regride na pós-menopausa (hipoestrogenismo) e manifesta-se como miométrio heterogêneo/assimétrico, não imagem ecogênica focal intracavitária.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "pólipo endometrial;",
        "explanation": "A alternativa **B** está correta. Na pós-menopausa sem terapia hormonal, o **endométrio fino (3 mm, ≤ 4–5 mm)** torna improvável hiperplasia ou adenocarcinoma difuso; a presença de uma **imagem ecogênica focal bem delimitada ocupando a cavidade/interface entre os folhetos endometriais** à USTV é o achado clássico de **pólipo endometrial** (FEBRASGO — indica-se histeroscopia com polipectomia para confirmação histológica).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "miomatose uterina;",
        "explanation": "Incorreta: Miomas costumam ser hipoecoicos/heterogêneos com sombra acústica no miométrio e tendem a regredir após 10 anos de menopausa.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "hiperplasia endometrial;",
        "explanation": "Incorreta: Hiperplasia endometrial cursa tipicamente com espessamento endometrial difuso (> 4–5 mm).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "adenocarcinoma do endométrio.",
        "explanation": "Incorreta: Embora deva ser excluído na histologia do pólipo, um endométrio de 3 mm com lesão ecogênica focal bem delimitada tem como causa mais provável o pólipo endometrial.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Na pós-menopausa sem terapia hormonal, o **endométrio fino (3 mm, ≤ 4–5 mm)** torna improvável hiperplasia ou adenocarcinoma difuso; a presença de uma **imagem ecogênica focal bem delimitada ocupando a cavidade/interface entre os folhetos endometriais** à USTV é o achado clássico de **pólipo endometrial** (FEBRASGO — indica-se histeroscopia com polipectomia para confirmação histológica).\n- **A) Incorreta:** Adenomiose regride na pós-menopausa (hipoestrogenismo) e manifesta-se como miométrio heterogêneo/assimétrico, não imagem ecogênica focal intracavitária.\n- **C) Incorreta:** Miomas costumam ser hipoecoicos/heterogêneos com sombra acústica no miométrio e tendem a regredir após 10 anos de menopausa.\n- **D) Incorreta:** Hiperplasia endometrial cursa tipicamente com espessamento endometrial difuso (> 4–5 mm).\n- **E) Incorreta:** Embora deva ser excluído na histologia do pólipo, um endométrio de 3 mm com lesão ecogênica focal bem delimitada tem como causa mais provável o pólipo endometrial.",
    "perolaClinica": "Na pós-menopausa sem terapia hormonal, o **endométrio fino (3 mm, ≤ 4–5 mm)** torna improvável hiperplasia ou adenocarcinoma difuso; a presença de uma **imagem ecogênica focal bem delimitada ocupando a cavidade/interface",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-071",
    "code": "Q-ENARE24-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Ovário e Massas Anexiais",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-ovario-e-massas-anexiais",
    "tags": ["teratoma-maduro","cisto-dermoide","massa-anexial"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 25 anos, sexualmente ativa, sem atraso menstrual, comparece ao ginecologista com uma ultrassonografia transvaginal de rotina que apresentou nódulo de aspecto misto, com áreas hiperecogênicas difusas e sombra acústica posterior no ovário direito medindo 7,0 cm. O ovário esquerdo e o útero não apresentaram alterações à ultrassonografia. Ao toque vaginal, identificou-se a presença de massa móvel, indolor, medindo em torno de 7,0 cm, palpável em região anexial direita.\n\nConsiderando a principal hipótese diagnóstica do caso, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "esse tipo de tumor ovariano é bilateral em 10% dos casos;",
        "explanation": "A alternativa **A** está correta. Mulher jovem (25 anos) com massa anexial móvel, indolor, de aspecto **ultrassonográfico misto com áreas hiperecogênicas e sombra acústica posterior** (calcificações/dentes, gordura, pelos — sinal de Rokitansky) tem como principal diagnóstico **teratoma cístico maduro (cisto dermoide)**, o tumor germinativo benigno mais comum em jovens. Ele é **bilateral em cerca de 10% a 15% dos casos** (FEBRASGO / Berek & Novak).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "usualmente o marcador tumoral CA125 é elevado nesses casos;",
        "explanation": "Incorreta: CA-125 geralmente é normal no teratoma maduro benigno.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "a chance de malignidade desse tipo de tumor é usualmente alta;",
        "explanation": "Incorreta: A taxa de transformação maligna do teratoma maduro é muito baixa (< 1–2%, geralmente em mulheres pós-menopausa).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "o principal subtipo histológico desses tumores é o cistoadenocarcinoma seroso;",
        "explanation": "Incorreta: Cistoadenocarcinoma seroso é o principal tumor epitelial maligno do ovário, não germinativo benigno.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "o tratamento de eleição para esse tipo de tumor é a histerectomia com ooforectomia bilateral.",
        "explanation": "Incorreta: O tratamento de eleição em mulher jovem é a **ooforoplastia (cistectomia) videolaparoscópica** preservando parênquima ovariano e fertilidade, jamais histerectomia com ooforectomia bilateral.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Mulher jovem (25 anos) com massa anexial móvel, indolor, de aspecto **ultrassonográfico misto com áreas hiperecogênicas e sombra acústica posterior** (calcificações/dentes, gordura, pelos — sinal de Rokitansky) tem como principal diagnóstico **teratoma cístico maduro (cisto dermoide)**, o tumor germinativo benigno mais comum em jovens. Ele é **bilateral em cerca de 10% a 15% dos casos** (FEBRASGO / Berek & Novak).\n- **B) Incorreta:** CA-125 geralmente é normal no teratoma maduro benigno.\n- **C) Incorreta:** A taxa de transformação maligna do teratoma maduro é muito baixa (< 1–2%, geralmente em mulheres pós-menopausa).\n- **D) Incorreta:** Cistoadenocarcinoma seroso é o principal tumor epitelial maligno do ovário, não germinativo benigno.\n- **E) Incorreta:** O tratamento de eleição em mulher jovem é a **ooforoplastia (cistectomia) videolaparoscópica** preservando parênquima ovariano e fertilidade, jamais histerectomia com ooforectomia bilateral.",
    "perolaClinica": "Mulher jovem (25 anos) com massa anexial móvel, indolor, de aspecto **ultrassonográfico misto com áreas hiperecogênicas e sombra acústica posterior** (calcificações/dentes, gordura, pelos — sinal de Rokitansky) tem como ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-072",
    "code": "Q-ENARE24-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Vulvovaginites e Corrimentos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-vulvovaginites-e-corrimentos-genitais",
    "tags": ["vaginose-bacteriana","metronidazol","criterios-de-amsel","clue-cells"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 33 anos comparece ao médico com queixa de leucorreia há 2 semanas, com odor desagradável, que piora após a relação sexual. Ao exame especular, verifica-se conteúdo vaginal aumentado, com coloração branco-acinzentada e algo bolhoso. O colo uterino apresenta mácula rubra de 2,0 cm de diâmetro ao redor do orifício externo, e o muco cervical está com aspecto transparente. A fita de pH vaginal registra resultado de 5,2. O teste do KOH10% exacerbou o odor da leucorreia. Ao toque vaginal, o colo móvel apresenta-se indolor. Realizada a bacterioscopia, visualizaram-se células epiteliais recobertas por cocobacilos Gram variáveis.\n\nConsiderando a principal hipótese diagnóstica, o melhor tratamento para a paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "fluconazol, 1 comprimido de 150 mg em dose única;",
        "explanation": "Incorreta: Fluconazol é antifúngico usado para candidíase vulvovaginal (pH < 4,5, corrimento grumoso sem odor).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "duchas vaginais com bicarbonato de sódio por 10 dias;",
        "explanation": "Incorreta: Duchas vaginais são contraindicadas pois pioram a disbiose vaginal.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "fenticonazol, creme vaginal, 0,02 mg/g, uma vez ao dia, durante 7 dias;",
        "explanation": "Incorreta: Fenticonazol é antifúngico tópico (candidíase), sem ação contra vaginose bacteriana.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "metronidazol 500 mg, por via oral, duas vezes ao dia, durante 7 dias;",
        "explanation": "A alternativa **D** está correta. A paciente preenche todos os **4 Critérios de Amsel** para **vaginose bacteriana**: (1) corrimento homogêneo branco-acinzentado, (2) pH vaginal > 4,5 (5,2), (3) teste das aminas (*Whiff test*) com KOH 10% positivo (exacerbação do odor de peixe) e (4) presença de ***clue cells*** (células epiteliais recobertas por cocobacilos Gram-variáveis, como *Gardnerella vaginalis*). Conforme o **PCDT-IST do Ministério da Saúde**, o tratamento de primeira escolha é **metronidazol 500 mg VO de 12/12h por 7 dias** (ou metronidazol gel vaginal 0,75% por 5 dias).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "creme vaginal combinando clindamicina 2% e hidrocortisona 10%, por 14 dias.",
        "explanation": "Incorreta: Clindamicina creme vaginal 2% é usada por 7 dias (não 14 dias) e não se associa hidrocortisona 10% de rotina.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A paciente preenche todos os **4 Critérios de Amsel** para **vaginose bacteriana**: (1) corrimento homogêneo branco-acinzentado, (2) pH vaginal > 4,5 (5,2), (3) teste das aminas (*Whiff test*) com KOH 10% positivo (exacerbação do odor de peixe) e (4) presença de ***clue cells*** (células epiteliais recobertas por cocobacilos Gram-variáveis, como *Gardnerella vaginalis*). Conforme o **PCDT-IST do Ministério da Saúde**, o tratamento de primeira escolha é **metronidazol 500 mg VO de 12/12h por 7 dias** (ou metronidazol gel vaginal 0,75% por 5 dias).\n- **A) Incorreta:** Fluconazol é antifúngico usado para candidíase vulvovaginal (pH < 4,5, corrimento grumoso sem odor).\n- **B) Incorreta:** Duchas vaginais são contraindicadas pois pioram a disbiose vaginal.\n- **C) Incorreta:** Fenticonazol é antifúngico tópico (candidíase), sem ação contra vaginose bacteriana.\n- **E) Incorreta:** Clindamicina creme vaginal 2% é usada por 7 dias (não 14 dias) e não se associa hidrocortisona 10% de rotina.",
    "perolaClinica": "A paciente preenche todos os **4 Critérios de Amsel** para **vaginose bacteriana**: (1) corrimento homogêneo branco-acinzentado, (2) pH vaginal > 4,5 (5,2), (3) teste das aminas (*Whiff test*) com KOH 10% positivo (exace",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-073",
    "code": "Q-ENARE24-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Hemorragia Pós-Parto",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-hemorragia-pos-parto",
    "tags": ["sindrome-de-sheehan","descolamento-prematuro-de-placenta","hemorragia-pos-parto","hipopituitarismo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente, após gestação e parto complicados, está em acompanhamento com endocrinologista com diagnóstico de síndrome de Sheehan.\n\nA complicação obstétrica que mais provavelmente ocorreu nesse caso foi:",
    "alternativas": [
      {
        "letter": "A",
        "text": "diabetes gestacional em uso de insulina;",
        "explanation": "Incorreta: Diabetes gestacional não causa choque hemorrágico obstétrico nem necrose hipofisária.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "descolamento prematuro da placenta;",
        "explanation": "A alternativa **B** está correta. A **síndrome de Sheehan** consiste em **pan-hipopituitarismo pós-parto decorrente de necrose isquêmica da adeno-hipófise** (que está fisiologicamente hipertrofiada na gestação) após episódio de **hemorragia obstétrica grave com choque hipovolêmico**. Entre as opções listadas, o **descolamento prematuro da placenta (DPP)** é a clássica causa de hemorragia grave, coagulopatia de consumo (CIVD), útero de Couvelaire/atonia uterina e choque hemorrágico no parto (FEBRASGO / Williams Obstetrics).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "rotura prematura de membranas ovulares;",
        "explanation": "Incorreta: RPMO associa-se a corioamnionite e prematuridade, não hemorragia maciça.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "gestação gemelar monocoriônica;",
        "explanation": "Incorreta: Gemelaridade monocoriônica associa-se a STFF e RCIU seletiva, não sendo causa direta principal comparada ao DPP.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "restrição de crescimento intrauterino.",
        "explanation": "Incorreta: RCIU é complicação fetal de insuficiência placentária crônica, não evento hemorrágico materno agudo.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. A **síndrome de Sheehan** consiste em **pan-hipopituitarismo pós-parto decorrente de necrose isquêmica da adeno-hipófise** (que está fisiologicamente hipertrofiada na gestação) após episódio de **hemorragia obstétrica grave com choque hipovolêmico**. Entre as opções listadas, o **descolamento prematuro da placenta (DPP)** é a clássica causa de hemorragia grave, coagulopatia de consumo (CIVD), útero de Couvelaire/atonia uterina e choque hemorrágico no parto (FEBRASGO / Williams Obstetrics).\n- **A) Incorreta:** Diabetes gestacional não causa choque hemorrágico obstétrico nem necrose hipofisária.\n- **C) Incorreta:** RPMO associa-se a corioamnionite e prematuridade, não hemorragia maciça.\n- **D) Incorreta:** Gemelaridade monocoriônica associa-se a STFF e RCIU seletiva, não sendo causa direta principal comparada ao DPP.\n- **E) Incorreta:** RCIU é complicação fetal de insuficiência placentária crônica, não evento hemorrágico materno agudo.",
    "perolaClinica": "A **síndrome de Sheehan** consiste em **pan-hipopituitarismo pós-parto decorrente de necrose isquêmica da adeno-hipófise** (que está fisiologicamente hipertrofiada na gestação) após episódio de **hemorragia obstétrica gr",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-074",
    "code": "Q-ENARE24-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Pré-Eclâmpsia, Eclâmpsia e Síndrome HELLP",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-pre-eclampsia-eclampsia-e-sindrome-hellp",
    "tags": ["sindrome-hellp","pre-eclampsia","hemolise","trombocitopenia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A pré-eclâmpsia complicada com síndrome HELLP é caracterizada por:",
    "alternativas": [
      {
        "letter": "A",
        "text": "trombocitopenia e convulsões maternas;",
        "explanation": "Incorreta: Convulsões maternas caracterizam **eclâmpsia**, não a definição da síndrome HELLP.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "disfunção hepática e elevação da glicemia;",
        "explanation": "Incorreta: Hiperglicemia não faz parte da síndrome HELLP (na esteatose hepática aguda da gestação ocorre inclusive hipoglicemia).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "hemólise, disfunção hepática e trombocitopenia;",
        "explanation": "A alternativa **C** está correta. O acrônimo **HELLP** define a tríade laboratorial dessa complicação grave da pré-eclâmpsia (FEBRASGO / Manual de Gestação de Alto Risco — Ministério da Saúde): **H** (*Hemolysis* — hemólise microangiopática: esquizócitos, DHL ≥ 600 UI/L, BT ≥ 1,2 mg/dL), **EL** (*Elevated Liver enzymes* — disfunção hepática: TGO/AST ≥ 70 UI/L) e **LP** (*Low Platelets* — trombocitopenia: plaquetas < 100.000/mm³).",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "convulsões maternas, hemólise e hiperglicemia;",
        "explanation": "Incorreta: Convulsões e hiperglicemia não compõem o acrônimo HELLP.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "diminuição dos reflexos profundos e hemólise.",
        "explanation": "Incorreta: Diminuição de reflexos profundos é sinal de intoxicação por sulfato de magnésio (na iminência de eclâmpsia ocorre hiperreflexia).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. O acrônimo **HELLP** define a tríade laboratorial dessa complicação grave da pré-eclâmpsia (FEBRASGO / Manual de Gestação de Alto Risco — Ministério da Saúde): **H** (*Hemolysis* — hemólise microangiopática: esquizócitos, DHL ≥ 600 UI/L, BT ≥ 1,2 mg/dL), **EL** (*Elevated Liver enzymes* — disfunção hepática: TGO/AST ≥ 70 UI/L) e **LP** (*Low Platelets* — trombocitopenia: plaquetas < 100.000/mm³).\n- **A) Incorreta:** Convulsões maternas caracterizam **eclâmpsia**, não a definição da síndrome HELLP.\n- **B) Incorreta:** Hiperglicemia não faz parte da síndrome HELLP (na esteatose hepática aguda da gestação ocorre inclusive hipoglicemia).\n- **D) Incorreta:** Convulsões e hiperglicemia não compõem o acrônimo HELLP.\n- **E) Incorreta:** Diminuição de reflexos profundos é sinal de intoxicação por sulfato de magnésio (na iminência de eclâmpsia ocorre hiperreflexia).",
    "perolaClinica": "O acrônimo **HELLP** define a tríade laboratorial dessa complicação grave da pré-eclâmpsia (FEBRASGO / Manual de Gestação de Alto Risco — Ministério da Saúde): **H** (*Hemolysis* — hemólise microangiopática: esquizócitos",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-075",
    "code": "Q-ENARE24-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Infecções Congênitas na Gestação",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-infeccoes-congenitas-na-gestacao",
    "tags": ["parvovirus-b19","anemia-fetal","doppler-arteria-cerebral-media","hidropsia-fetal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma gestante com 28 semanas tem o diagnóstico de infecção por parvovírus B19.\n\nA melhor maneira de avaliar a principal complicação fetal nesse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realização do doppler da artéria cerebral média;",
        "explanation": "A alternativa **A** está correta. O **parvovírus B19** tem tropismo pelos precursores eritroides da medula óssea fetal, podendo causar **anemia fetal grave (aplasia eritroide)** e consequente **hidropsia fetal não imune**. Conforme a FEBRASGO e o ACOG, o método padrão-ouro não invasivo para rastrear e monitorar anemia fetal semanalmente (por 8–12 semanas após infecção materna) é o **Doppler da artéria cerebral média (ACM)** medindo o pico de velocidade sistólica (PVS-ACM > 1,5 MoM indica anemia moderada/grave e necessidade de cordocentese/transfusão intrauterina).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "avaliação ultrassonográfica da movimentação fetal;",
        "explanation": "Incorreta: A movimentação fetal altera-se apenas tardiamente quando o feto já está em sofrimento/hidropsia avançada.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "pesquisa de células fetais livres no sangue materno;",
        "explanation": "Incorreta: DNA fetal livre (NIPT) rastreia aneuploidias/tipagem RhD, não anemia fetal por parvovírus.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "medida menor do fundo uterino ao exame clínico;",
        "explanation": "Incorreta: Altura uterina não diagnostica anemia fetal (na hidropsia/polidrâmnio pode até estar aumentada).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "realização do teste de Coombs direto no sangue materno.",
        "explanation": "Incorreta: Coombs direto avalia hemólise imune (aloimunização), enquanto o parvovírus causa anemia não imune; além disso, Coombs indireto é que se faz no sangue materno.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O **parvovírus B19** tem tropismo pelos precursores eritroides da medula óssea fetal, podendo causar **anemia fetal grave (aplasia eritroide)** e consequente **hidropsia fetal não imune**. Conforme a FEBRASGO e o ACOG, o método padrão-ouro não invasivo para rastrear e monitorar anemia fetal semanalmente (por 8–12 semanas após infecção materna) é o **Doppler da artéria cerebral média (ACM)** medindo o pico de velocidade sistólica (PVS-ACM > 1,5 MoM indica anemia moderada/grave e necessidade de cordocentese/transfusão intrauterina).\n- **B) Incorreta:** A movimentação fetal altera-se apenas tardiamente quando o feto já está em sofrimento/hidropsia avançada.\n- **C) Incorreta:** DNA fetal livre (NIPT) rastreia aneuploidias/tipagem RhD, não anemia fetal por parvovírus.\n- **D) Incorreta:** Altura uterina não diagnostica anemia fetal (na hidropsia/polidrâmnio pode até estar aumentada).\n- **E) Incorreta:** Coombs direto avalia hemólise imune (aloimunização), enquanto o parvovírus causa anemia não imune; além disso, Coombs indireto é que se faz no sangue materno.",
    "perolaClinica": "O **parvovírus B19** tem tropismo pelos precursores eritroides da medula óssea fetal, podendo causar **anemia fetal grave (aplasia eritroide)** e consequente **hidropsia fetal não imune**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-076",
    "code": "Q-ENARE24-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Gestação Gemelar e Restrição de Crescimento Fetal",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-gestacao-gemelar-e-restricao-de-crescimento-fetal",
    "tags": ["gestacao-gemelar","monocorionica","restricao-de-crescimento-fetal","siugr"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma gestante realiza ultrassonografia com 24 semanas, que identifica gestação gemelar monocoriônica, diamniótica, com um feto com peso estimado no percentil 3 e o outro com peso estimado no percentil 43. Eles têm uma diferença de 28% entre os pesos. Ambos os fetos estão com volume do líquido amniótico normal e ambos com o doppler da artéria umbilical, da artéria cerebral média e do ducto venoso dentro da normalidade.\n\nO diagnóstico compatível com esse quadro é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "gemelidade imperfeita;",
        "explanation": "Incorreta: Gemelidade imperfeita refere-se a gêmeos conjugados (siameses), ocorrendo em gestações monocoriônicas monoamnióticas.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "síndrome de transfusão feto-fetal;",
        "explanation": "Incorreta: A síndrome de transfusão feto-fetal (STFF) exige obrigatoriamente a sequência **polidrâmnio/oligodrâmnio** (MBV > 8 cm em um saco e < 2 cm no outro), ausente no caso.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "sequência de anemia/policitemia;",
        "explanation": "Incorreta: Sequência anemia/policitemia (TAPS) diagnostica-se pela discordância de PVS da **artéria cerebral média** (> 1,5 MoM no doador e < 1,0 MoM no receptor), que aqui está normal.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "restrição de crescimento intrauterino seletiva;",
        "explanation": "A alternativa **D** está correta. Em gestação gemelar **monocoriônica diamniótica**, a presença de um feto com **peso estimado < percentil 10 (percentil 3)** associada à **discordância de peso ≥ 25% (28%)**, com **líquido amniótico normal** (afastando STFF) e **Doppler da ACM normal** (afastando TAPS), fecha os critérios da ISUOG/FEBRASGO para **restrição de crescimento intrauterino seletiva (RCIUs / CIUR seletivo)** — neste caso Tipo I (Doppler de artéria umbilical normal).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "sequência TRAP.",
        "explanation": "Incorreta: Sequência TRAP caracteriza-se por um gêmeo acárdico perfundido de forma retrógrada pelo gêmeo bomba.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Em gestação gemelar **monocoriônica diamniótica**, a presença de um feto com **peso estimado < percentil 10 (percentil 3)** associada à **discordância de peso ≥ 25% (28%)**, com **líquido amniótico normal** (afastando STFF) e **Doppler da ACM normal** (afastando TAPS), fecha os critérios da ISUOG/FEBRASGO para **restrição de crescimento intrauterino seletiva (RCIUs / CIUR seletivo)** — neste caso Tipo I (Doppler de artéria umbilical normal).\n- **A) Incorreta:** Gemelidade imperfeita refere-se a gêmeos conjugados (siameses), ocorrendo em gestações monocoriônicas monoamnióticas.\n- **B) Incorreta:** A síndrome de transfusão feto-fetal (STFF) exige obrigatoriamente a sequência **polidrâmnio/oligodrâmnio** (MBV > 8 cm em um saco e < 2 cm no outro), ausente no caso.\n- **C) Incorreta:** Sequência anemia/policitemia (TAPS) diagnostica-se pela discordância de PVS da **artéria cerebral média** (> 1,5 MoM no doador e < 1,0 MoM no receptor), que aqui está normal.\n- **E) Incorreta:** Sequência TRAP caracteriza-se por um gêmeo acárdico perfundido de forma retrógrada pelo gêmeo bomba.",
    "perolaClinica": "Em gestação gemelar **monocoriônica diamniótica**, a presença de um feto com **peso estimado < percentil 10 (percentil 3)** associada à **discordância de peso ≥ 25% (28%)**, com **líquido amniótico normal** (afastando ST",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-077",
    "code": "Q-ENARE24-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Avaliação da Vitalidade Fetal",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-avaliacao-da-vitalidade-fetal",
    "tags": ["polidramnio","liquido-amniotico","maior-bolsao","malformacao-fetal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante realiza ultrassonografia obstétrica, que evidencia uma medida do maior bolsão vertical do líquido amniótico de 12 cm.\n\nA condição que pode estar associada a esse quadro é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "insuficiência uteroplacentária;",
        "explanation": "Incorreta: Insuficiência uteroplacentária associa-se a **oligodrâmnio** (centralização hemodinâmica com redução da perfusão renal fetal).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "displasia tanatofórica no feto;",
        "explanation": "A alternativa **B** está correta. Um **maior bolsão vertical (MBV) = 12 cm** (≥ 8 cm define polidrâmnio; 12–15 cm corresponde a polidrâmnio moderado) indica **polidrâmnio**. Entre as causas fetais de polidrâmnio estão malformações que dificultam a deglutição fetal ou comprimem o esôfago/tórax, como as **displasias esqueléticas letais (displasia tanatofórica)**, atresias gastrointestinais, defeitos do tubo neural e diabetes materno (FEBRASGO / Williams Obstetrics).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "agenesia renal bilateral fetal;",
        "explanation": "Incorreta: Agenesia renal bilateral (sequência de Potter) causa **anidrâmnio/oligodrâmnio** grave por ausência de diurese fetal.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "restrição de crescimento fetal;",
        "explanation": "Incorreta: Restrição de crescimento fetal por insuficiência placentária cursa tipicamente com oligodrâmnio.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "gravidez com pós-datismo.",
        "explanation": "Incorreta: Pós-datismo (gestação prolongada) associa-se à redução fisiológica/patológica do líquido amniótico (**oligodrâmnio**).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Um **maior bolsão vertical (MBV) = 12 cm** (≥ 8 cm define polidrâmnio; 12–15 cm corresponde a polidrâmnio moderado) indica **polidrâmnio**. Entre as causas fetais de polidrâmnio estão malformações que dificultam a deglutição fetal ou comprimem o esôfago/tórax, como as **displasias esqueléticas letais (displasia tanatofórica)**, atresias gastrointestinais, defeitos do tubo neural e diabetes materno (FEBRASGO / Williams Obstetrics).\n- **A) Incorreta:** Insuficiência uteroplacentária associa-se a **oligodrâmnio** (centralização hemodinâmica com redução da perfusão renal fetal).\n- **C) Incorreta:** Agenesia renal bilateral (sequência de Potter) causa **anidrâmnio/oligodrâmnio** grave por ausência de diurese fetal.\n- **D) Incorreta:** Restrição de crescimento fetal por insuficiência placentária cursa tipicamente com oligodrâmnio.\n- **E) Incorreta:** Pós-datismo (gestação prolongada) associa-se à redução fisiológica/patológica do líquido amniótico (**oligodrâmnio**).",
    "perolaClinica": "Um **maior bolsão vertical (MBV) = 12 cm** (≥ 8 cm define polidrâmnio; 12–15 cm corresponde a polidrâmnio moderado) indica **polidrâmnio**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-078",
    "code": "Q-ENARE24-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Diagnóstico de Gravidez e Modificações Fisiológicas",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-diagnostico-de-gravidez-e-modificacoes-fisiologicas",
    "tags": ["sinal-de-hegar","diagnostico-de-gravidez","sinais-de-probabilidade","modificacoes-fisiologicas"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma mulher de 25 anos chega ao ambulatório com um exame de farmácia demonstrando gravidez. Ainda não realizou ultrassonografia e, pela data da última menstruação, estaria com aproximadamente 8 semanas de gestação.\n\nAo toque, nota-se um amolecimento acentuado no istmo, que configuraria o sinal de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hegar;",
        "explanation": "A alternativa **A** está correta. O **sinal de Hegar** (sinal de probabilidade de gravidez, presente entre a 6ª e a 8ª semana) corresponde ao **amolecimento acentuado do istmo uterino** ao toque bimanual, permitindo a aproximação dos dedos vaginais e abdominais (Rezende / FEBRASGO).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "Piskacek;",
        "explanation": "Incorreta: Sinal de Piskacek é a **assimetria uterina** temporária no local de implantação do ovo.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "Osiander;",
        "explanation": "Incorreta: Sinal de Osiander é a percepção da **pulsação da artéria vaginal** nos fundos de saco laterais.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "Nobile-Budin;",
        "explanation": "Incorreta: Sinal de Nobile-Budin é o **preenchimento dos fundos de saco vaginais laterais** pelo corpo uterino globoso ao toque.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "Puzos.",
        "explanation": "Incorreta: Sinal de Puzos é o **rechaço fetal intrauterino** ao toque vaginal (sinal de certeza, mais tardio, a partir de 14 semanas).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O **sinal de Hegar** (sinal de probabilidade de gravidez, presente entre a 6ª e a 8ª semana) corresponde ao **amolecimento acentuado do istmo uterino** ao toque bimanual, permitindo a aproximação dos dedos vaginais e abdominais (Rezende / FEBRASGO).\n- **B) Incorreta:** Sinal de Piskacek é a **assimetria uterina** temporária no local de implantação do ovo.\n- **C) Incorreta:** Sinal de Osiander é a percepção da **pulsação da artéria vaginal** nos fundos de saco laterais.\n- **D) Incorreta:** Sinal de Nobile-Budin é o **preenchimento dos fundos de saco vaginais laterais** pelo corpo uterino globoso ao toque.\n- **E) Incorreta:** Sinal de Puzos é o **rechaço fetal intrauterino** ao toque vaginal (sinal de certeza, mais tardio, a partir de 14 semanas).",
    "perolaClinica": "O **sinal de Hegar** (sinal de probabilidade de gravidez, presente entre a 6ª e a 8ª semana) corresponde ao **amolecimento acentuado do istmo uterino** ao toque bimanual, permitindo a aproximação dos dedos vaginais e abd",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-079",
    "code": "Q-ENARE24-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Abortamento e Incompetência Istmocervical",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-abortamento-e-incompetencia-istmocervical",
    "tags": ["abortamento-incompleto","esvaziamento-uterino","amiu","curetagem-uterina"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma gestante de 38 anos, secundigesta e cardiopata, chega à emergência referindo cólicas intensas, sangramento vaginal em grande quantidade e sangue vivo. A idade gestacional, estabelecida pela ultrassonografia transvaginal realizada com 6 semanas, é de 9 semanas e 3 dias. Ao exame, o útero encontra-se aumentado de volume, amolecido, com colo entreaberto e saída de material ovular identificada no exame especular. A ultrassonografia mostra a presença de restos ovulares em grande quantidade.\n\nDiante desse quadro, a conduta deve ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "esvaziamento uterino por aspiração a vácuo ou curetagem;",
        "explanation": "A alternativa **A** está correta. O quadro de gestante com 9 semanas e 3 dias apresentando **sangramento vaginal em grande quantidade**, cólicas intensas, **colo uterino entreaberto** com saída de material ovular e **restos ovulares abundantes à USTV** define **abortamento incompleto com sangramento volumoso** (em paciente cardiopata, com menor reserva hemodinâmica). Conforme a FEBRASGO e o Manual Técnico de Atenção Humanizada ao Abortamento (Ministério da Saúde), impõe-se **esvaziamento uterino imediato**, preferencialmente por **aspiração manual intrauterina (AMIU / aspiração a vácuo)** ou curetagem uterina.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "ocitocina venosa, 20 UI em 500 ml de soro fisiológico;",
        "explanation": "Incorreta: Ocitocina isolada no 1º trimestre tem pouca eficácia (poucos receptores uterinos) e não substitui o esvaziamento mecânico diante de sangramento intenso.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "expectante, monitorando a pressão arterial e sangramento;",
        "explanation": "Incorreta: Conduta expectante é contraindicada quando há sangramento volumoso e restos ovulares em grande quantidade, especialmente em cardiopata.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "misoprostol retal na dose de 800 mcg em dose única;",
        "explanation": "Incorreta: Misoprostol não é a conduta de escolha em paciente com sangramento ativo abundante e colo já entreaberto (e a dose padrão para abortamento incompleto é sublingual/oral, não retal 800 mcg — dose usada para HPP).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "realização de nova ultrassonografia transvaginal em 12 horas.",
        "explanation": "Incorreta: Retardar o esvaziamento por 12 horas expõe a paciente a choque hemorrágico e descompensação cardíaca.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. O quadro de gestante com 9 semanas e 3 dias apresentando **sangramento vaginal em grande quantidade**, cólicas intensas, **colo uterino entreaberto** com saída de material ovular e **restos ovulares abundantes à USTV** define **abortamento incompleto com sangramento volumoso** (em paciente cardiopata, com menor reserva hemodinâmica). Conforme a FEBRASGO e o Manual Técnico de Atenção Humanizada ao Abortamento (Ministério da Saúde), impõe-se **esvaziamento uterino imediato**, preferencialmente por **aspiração manual intrauterina (AMIU / aspiração a vácuo)** ou curetagem uterina.\n- **B) Incorreta:** Ocitocina isolada no 1º trimestre tem pouca eficácia (poucos receptores uterinos) e não substitui o esvaziamento mecânico diante de sangramento intenso.\n- **C) Incorreta:** Conduta expectante é contraindicada quando há sangramento volumoso e restos ovulares em grande quantidade, especialmente em cardiopata.\n- **D) Incorreta:** Misoprostol não é a conduta de escolha em paciente com sangramento ativo abundante e colo já entreaberto (e a dose padrão para abortamento incompleto é sublingual/oral, não retal 800 mcg — dose usada para HPP).\n- **E) Incorreta:** Retardar o esvaziamento por 12 horas expõe a paciente a choque hemorrágico e descompensação cardíaca.",
    "perolaClinica": "O quadro de gestante com 9 semanas e 3 dias apresentando **sangramento vaginal em grande quantidade**, cólicas intensas, **colo uterino entreaberto** com saída de material ovular e **restos ovulares abundantes à USTV** d",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-080",
    "code": "Q-ENARE24-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "ITU, Tromboembolismo e Intercorrências Clínicas",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas",
    "tags": ["dengue-na-gestacao","sinais-de-alarme","hipotensao-postural","intercorrencias-clinicas"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma gestante de 20 semanas, moradora de área endêmica, chegou à admissão da maternidade com sinais e sintomas sugestivos de dengue.\n\nApós o exame clínico-obstétrico e laboratorial, a equipe de plantão resolveu internar e tratar a paciente, pois identificou corretamente o seguinte sinal de alarme:",
    "alternativas": [
      {
        "letter": "A",
        "text": "vômitos esporádicos;",
        "explanation": "Incorreta: O sinal de alarme são vômitos **persistentes**, não esporádicos.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "dor abdominal moderada;",
        "explanation": "Incorreta: O sinal de alarme é dor abdominal **intensa (referida ou à palpação) e contínua**, não moderada.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "hipotensão postural e/ou lipotimia;",
        "explanation": "A alternativa **C** está correta. De acordo com o **Manual de Diagnóstico e Manejo Clínico da Dengue (Ministério da Saúde, 6ª ed. 2024)**, os sinais de alarme da dengue (Grupo C — indicação formal de internação e hidratação venosa imediata) são: dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos (ascite, derrame pleural/pericárdico), **hipotensão postural e/ou lipotimia**, hepatomegalia > 2 cm abaixo do RCD, sangramento de mucosa, letargia/irritabilidade e **aumento** progressivo do hematócrito.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "diminuição progressiva do hematócrito;",
        "explanation": "Incorreta: O sinal de alarme é o **aumento** progressivo do hematócrito (hemoconcentração por extravasamento plasmático), não diminuição.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "esplenomegalia 1 cm abaixo do rebordo costal.",
        "explanation": "Incorreta: O sinal de alarme é **hepatomegalia > 2 cm** abaixo do rebordo costal, não esplenomegalia de 1 cm.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. De acordo com o **Manual de Diagnóstico e Manejo Clínico da Dengue (Ministério da Saúde, 6ª ed. 2024)**, os sinais de alarme da dengue (Grupo C — indicação formal de internação e hidratação venosa imediata) são: dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos (ascite, derrame pleural/pericárdico), **hipotensão postural e/ou lipotimia**, hepatomegalia > 2 cm abaixo do RCD, sangramento de mucosa, letargia/irritabilidade e **aumento** progressivo do hematócrito.\n- **A) Incorreta:** O sinal de alarme são vômitos **persistentes**, não esporádicos.\n- **B) Incorreta:** O sinal de alarme é dor abdominal **intensa (referida ou à palpação) e contínua**, não moderada.\n- **D) Incorreta:** O sinal de alarme é o **aumento** progressivo do hematócrito (hemoconcentração por extravasamento plasmático), não diminuição.\n- **E) Incorreta:** O sinal de alarme é **hepatomegalia > 2 cm** abaixo do rebordo costal, não esplenomegalia de 1 cm.",
    "perolaClinica": "De acordo com o **Manual de Diagnóstico e Manejo Clínico da Dengue (Ministério da Saúde, 6ª ed.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-081",
    "code": "Q-ENARE24-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Asma no Adulto",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-asma-no-adulto",
    "tags": ["asma","quadro-clinico","diagnostico","broncoespasmo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Alice, 30 anos, chega à unidade básica de saúde com tosse seca, chiado no peito e dispneia aos grandes esforços, com piora à noite. Não tem história de febre, não apresenta perda de peso e a mucosa nasal está sem alterações. Piora com a fumaça de cigarro do marido. Ao exame pulmonar, apresenta tosse, murmúrio vesicular e sibilos difusos, especialmente na expiração forçada. Não apresenta outras alterações. Pesa 60 kg, tem 1,60 m de altura, seu IMC é 21,5 kg/m², a FC está em 77 bpm e a FR, em 15 irpm. O exame cardiovascular indica ritmo regular em 2 tempos, sem sopro e sem alteração de ictus. O abdômen está normotenso, depressível, sem organomegalias ou ruídos hidroaéreos presentes.\n\nO diagnóstico provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "asma;",
        "explanation": "A alternativa **A** está correta. Mulher jovem (30 anos) com **tosse seca, sibilos difusos expiratórios, chiado no peito e dispneia aos esforços**, com **piora noturna e desencadeada por irritantes** (fumaça de cigarro), afebril e sem perda ponderal, apresenta o quadro clínico clássico de **asma** na Atenção Primária à Saúde (GINA 2024 / Caderno de Atenção Básica nº 25 — Ministério da Saúde).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "rinossinusite;",
        "explanation": "Incorreta: Mucosa nasal sem alterações e ausência de secreção purulenta/dor facial afastam rinossinusite como causa dos sibilos difusos.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "DPOC;",
        "explanation": "Incorreta: DPOC acomete tipicamente maiores de 40 anos com carga tabágica ativa prolongada e dispneia progressiva persistente.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "tuberculose;",
        "explanation": "Incorreta: Ausência de febre vespertina, emagrecimento e tosse produtiva torna tuberculose pouco provável.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "pneumonia adquirida na comunidade.",
        "explanation": "Incorreta: PAC cursa com quadro agudo febril, tosse produtiva, taquipneia/taquicardia e estertores localizados, ausentes no caso.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Mulher jovem (30 anos) com **tosse seca, sibilos difusos expiratórios, chiado no peito e dispneia aos esforços**, com **piora noturna e desencadeada por irritantes** (fumaça de cigarro), afebril e sem perda ponderal, apresenta o quadro clínico clássico de **asma** na Atenção Primária à Saúde (GINA 2024 / Caderno de Atenção Básica nº 25 — Ministério da Saúde).\n- **B) Incorreta:** Mucosa nasal sem alterações e ausência de secreção purulenta/dor facial afastam rinossinusite como causa dos sibilos difusos.\n- **C) Incorreta:** DPOC acomete tipicamente maiores de 40 anos com carga tabágica ativa prolongada e dispneia progressiva persistente.\n- **D) Incorreta:** Ausência de febre vespertina, emagrecimento e tosse produtiva torna tuberculose pouco provável.\n- **E) Incorreta:** PAC cursa com quadro agudo febril, tosse produtiva, taquipneia/taquicardia e estertores localizados, ausentes no caso.",
    "perolaClinica": "Mulher jovem (30 anos) com **tosse seca, sibilos difusos expiratórios, chiado no peito e dispneia aos esforços**, com **piora noturna e desencadeada por irritantes** (fumaça de cigarro), afebril e sem perda ponderal, apr",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-082",
    "code": "Q-ENARE24-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": ["rubeola","sorologia-igm-igg","vigilancia-epidemiologica","diagnostico-laboratorial"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Carlos, 27 anos, vai à consulta médica com febre, exantema, gânglios retroauriculares aumentados, conjuntivite, artralgia e tosse. Em seu prontuário, não há registro de vacinação contra a rubéola. Ele declara não ter viajado recentemente, nem ter tido contato com pessoas confirmadas para rubéola. Contudo, sua região encontra-se no estado que registrou um surto da doença há 4 meses. Trata-se de um caso suspeito de rubéola.\n\nO melhor método para fazer a confirmação desse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "examinar se há vínculo epidemiológico com outros casos confirmados;",
        "explanation": "Incorreta: O paciente nega contato com casos confirmados e o surto ocorreu há 4 meses (acima do período de incubação/transmissibilidade), impedindo confirmação por vínculo epidemiológico.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "realizar a sorologia de anticorpos IgM e IgG contra rubéola;",
        "explanation": "A alternativa **B** está correta. Em cenário de eliminação da rubéola (ou surto encerrado há 4 meses, sem vínculo epidemiológico direto referido), o **Guia de Vigilância em Saúde (Ministério da Saúde)** determina que todo caso suspeito de doença exantemática febril (sarampo/rubéola) deve ser **notificado imediatamente e confirmado laboratorialmente** mediante coleta de sangue para **sorologia (anticorpos IgM e IgG específicos)** no primeiro contato com o serviço de saúde (e coleta de swab para RT-PCR quando indicado).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "verificar a associação temporal com a vacinação;",
        "explanation": "Incorreta: Não há registro de vacinação recente no prontuário.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "considerar os critérios clínicos como suficientes, diante dos sinais e sintomas presentes;",
        "explanation": "Incorreta: Critério clínico isolado nunca é suficiente para confirmar rubéola, dado o diagnóstico diferencial com sarampo, dengue, Zika, parvovírus e sífilis secundária.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "observar o caso por 48 horas.",
        "explanation": "Incorreta: Aguardar 48 horas sem coleta laboratorial atrasa as medidas de bloqueio vacinal e vigilância.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Em cenário de eliminação da rubéola (ou surto encerrado há 4 meses, sem vínculo epidemiológico direto referido), o **Guia de Vigilância em Saúde (Ministério da Saúde)** determina que todo caso suspeito de doença exantemática febril (sarampo/rubéola) deve ser **notificado imediatamente e confirmado laboratorialmente** mediante coleta de sangue para **sorologia (anticorpos IgM e IgG específicos)** no primeiro contato com o serviço de saúde (e coleta de swab para RT-PCR quando indicado).\n- **A) Incorreta:** O paciente nega contato com casos confirmados e o surto ocorreu há 4 meses (acima do período de incubação/transmissibilidade), impedindo confirmação por vínculo epidemiológico.\n- **C) Incorreta:** Não há registro de vacinação recente no prontuário.\n- **D) Incorreta:** Critério clínico isolado nunca é suficiente para confirmar rubéola, dado o diagnóstico diferencial com sarampo, dengue, Zika, parvovírus e sífilis secundária.\n- **E) Incorreta:** Aguardar 48 horas sem coleta laboratorial atrasa as medidas de bloqueio vacinal e vigilância.",
    "perolaClinica": "Em cenário de eliminação da rubéola (ou surto encerrado há 4 meses, sem vínculo epidemiológico direto referido), o **Guia de Vigilância em Saúde (Ministério da Saúde)** determina que todo caso suspeito de doença exantemá",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-083",
    "code": "Q-ENARE24-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Imunização na Gestação",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-imunizacao-na-gestacao",
    "tags": ["imunizacao-na-gestacao","vacina-influenza","pre-natal","pni"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Letícia está na 10ª semana de gestação. Diante do aumento de casos de gripe entre familiares e conhecidos, ela foi à unidade básica de saúde para saber se precisava tomar a vacina contra influenza. Na análise em seu prontuário, verificou-se que sua última vacina havia sido no ano anterior.\n\nEm relação a esse caso, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "não se recomenda a vacina nesse estágio da gestação;",
        "explanation": "Incorreta: A vacina é recomendada em qualquer idade gestacional, inclusive com 10 semanas.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "não é necessário o reforço da vacina, pois ela confere imunidade por 10 anos;",
        "explanation": "Incorreta: A vacina influenza requer dose anual, não confere imunidade por 10 anos.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "deve-se evitar a vacina na gestação;",
        "explanation": "Incorreta: Gestantes são grupo de indicação formal prioritária (não contraindicação).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "a paciente deve ser revacinada;",
        "explanation": "A alternativa **D** está correta. A vacina contra **influenza** é **inativada** (segura em **qualquer idade gestacional**, inclusive no 1º trimestre) e deve ser aplicada **anualmente** (pois as cepas circulantes mudam a cada temporada e a imunidade declina). Gestantes constituem grupo prioritário do **PNI (Ministério da Saúde)** devido ao maior risco de SRAG e mortalidade materna, além da proteção passiva conferida ao recém-nascido; portanto, Letícia deve ser **revacinada imediatamente**.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "a vacina deve ser tomada, por segurança, após 12 semanas de gestação.",
        "explanation": "Incorreta: Não há necessidade de aguardar 12 semanas de gestação para aplicar vacina inativada contra influenza.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. A vacina contra **influenza** é **inativada** (segura em **qualquer idade gestacional**, inclusive no 1º trimestre) e deve ser aplicada **anualmente** (pois as cepas circulantes mudam a cada temporada e a imunidade declina). Gestantes constituem grupo prioritário do **PNI (Ministério da Saúde)** devido ao maior risco de SRAG e mortalidade materna, além da proteção passiva conferida ao recém-nascido; portanto, Letícia deve ser **revacinada imediatamente**.\n- **A) Incorreta:** A vacina é recomendada em qualquer idade gestacional, inclusive com 10 semanas.\n- **B) Incorreta:** A vacina influenza requer dose anual, não confere imunidade por 10 anos.\n- **C) Incorreta:** Gestantes são grupo de indicação formal prioritária (não contraindicação).\n- **E) Incorreta:** Não há necessidade de aguardar 12 semanas de gestação para aplicar vacina inativada contra influenza.",
    "perolaClinica": "A vacina contra **influenza** é **inativada** (segura em **qualquer idade gestacional**, inclusive no 1º trimestre) e deve ser aplicada **anualmente** (pois as cepas circulantes mudam a cada temporada e a imunidade decli",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-085",
    "code": "Q-ENARE24-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": ["mpox","monkeypox","vigilancia-epidemiologica","monitoramento-clinico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Milton teve o diagnóstico de *monkeypox* confirmado por meio de PCR positivo. Ele se enquadra no grupo de indivíduos com alto risco de desenvolver formas graves.\n\nSeu monitoramento deve acontecer:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a cada 2 dias;",
        "explanation": "Incorreta: Intervalo de 2 dias é insuficiente para grupo de alto risco de agravamento.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "a cada 3 dias;",
        "explanation": "Incorreta: Monitoramento a cada 48–72h pode ser adotado em casos leves de risco habitual, não em alto risco.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "a cada 7 dias;",
        "explanation": "Incorreta: Intervalo semanal é inadequado para doença aguda em paciente de alto risco.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "a cada 15 dias;",
        "explanation": "Incorreta: Intervalo quinzenal não permite identificar complicações agudas.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "diariamente.",
        "explanation": "A alternativa **E** está correta. Conforme o **Plano de Contingência Nacional / Nota Técnica de Manejo Clínico da Mpox (Ministério da Saúde)**, pacientes confirmados que pertencem a **grupos de alto risco para evolução grave** (imunossuprimidos, PVHIV com CD4 < 200, gestantes, crianças < 8 anos, doenças cutâneas extensas) em acompanhamento ambulatorial/domiciliar devem receber **monitoramento clínico diário** (telemonitoramento ou presencial) para detecção precoce de sinais de gravidade e indicação de internação.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Conforme o **Plano de Contingência Nacional / Nota Técnica de Manejo Clínico da Mpox (Ministério da Saúde)**, pacientes confirmados que pertencem a **grupos de alto risco para evolução grave** (imunossuprimidos, PVHIV com CD4 < 200, gestantes, crianças < 8 anos, doenças cutâneas extensas) em acompanhamento ambulatorial/domiciliar devem receber **monitoramento clínico diário** (telemonitoramento ou presencial) para detecção precoce de sinais de gravidade e indicação de internação.\n- **A) Incorreta:** Intervalo de 2 dias é insuficiente para grupo de alto risco de agravamento.\n- **B) Incorreta:** Monitoramento a cada 48–72h pode ser adotado em casos leves de risco habitual, não em alto risco.\n- **C) Incorreta:** Intervalo semanal é inadequado para doença aguda em paciente de alto risco.\n- **D) Incorreta:** Intervalo quinzenal não permite identificar complicações agudas.",
    "perolaClinica": "Conforme o **Plano de Contingência Nacional / Nota Técnica de Manejo Clínico da Mpox (Ministério da Saúde)**, pacientes confirmados que pertencem a **grupos de alto risco para evolução grave** (imunossuprimidos, PVHIV co",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-086",
    "code": "Q-ENARE24-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": ["metodo-clinico-centrado-na-pessoa","entrevista-motivacional","sintomas-psicoticos","acolhimento-aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Geraldo, 37 anos, adscrito à unidade básica de saúde, chega para consulta apresentando sintomas psicóticos. Como parte de seu delírio persecutório, recusa-se a ser medicado e não aceita ser encaminhado para o CAPS.\n\nNesse caso, a conduta correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "encaminhar para o CAPS mesmo assim, pois a unidade não tem recurso para esse atendimento;",
        "explanation": "Incorreta: Encaminhamento burocrático contra a vontade do paciente gera evasão e quebra a coordenação do cuidado pela APS.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "insistir com a medicação, que é condição para um plano terapêutico adequado;",
        "explanation": "Incorreta: Insistir de forma impositiva na medicação em paciente com delírio persecutório agrava a desconfiança e rompe o vínculo terapêutico.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "fazer o acolhimento de Geraldo e convencê-lo a aderir ao tratamento para os problemas identificados;",
        "explanation": "Incorreta: Tentar \"convencer\" racionalmente alguém em delírio persecutório é ineficaz e contraproducente.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "fazer o acolhimento de Geraldo, avaliar o quadro clínico geral e pactuar o acompanhamento na medida de suas limitações, lançando mão da entrevista motivacional se possível;",
        "explanation": "A alternativa **D** está correta. Diante de paciente com sintomas psicóticos **sem risco iminente de auto ou heteroagressão**, o manejo centrado na pessoa na APS (Caderno de Atenção Básica nº 34 — Saúde Mental / Ministério da Saúde; Tratado de MFC — Gusso) prioriza **acolhimento qualificado, construção de vínculo, avaliação clínica integral e pactuação de um Projeto Terapêutico Singular (PTS) dentro das possibilidades aceitas pelo paciente**, utilizando técnicas de **entrevista motivacional** e matriciamento com o CAPS, evitando posturas coercitivas que rompem o vínculo.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "chamar a ambulância para levá-lo compulsoriamente para a internação.",
        "explanation": "Incorreta: Internação involuntária/compulsória (Lei nº 10.216/2001) só se justifica quando esgotados os recursos extra-hospitalares e diante de risco grave iminente à vida/integridade física.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Diante de paciente com sintomas psicóticos **sem risco iminente de auto ou heteroagressão**, o manejo centrado na pessoa na APS (Caderno de Atenção Básica nº 34 — Saúde Mental / Ministério da Saúde; Tratado de MFC — Gusso) prioriza **acolhimento qualificado, construção de vínculo, avaliação clínica integral e pactuação de um Projeto Terapêutico Singular (PTS) dentro das possibilidades aceitas pelo paciente**, utilizando técnicas de **entrevista motivacional** e matriciamento com o CAPS, evitando posturas coercitivas que rompem o vínculo.\n- **A) Incorreta:** Encaminhamento burocrático contra a vontade do paciente gera evasão e quebra a coordenação do cuidado pela APS.\n- **B) Incorreta:** Insistir de forma impositiva na medicação em paciente com delírio persecutório agrava a desconfiança e rompe o vínculo terapêutico.\n- **C) Incorreta:** Tentar \"convencer\" racionalmente alguém em delírio persecutório é ineficaz e contraproducente.\n- **E) Incorreta:** Internação involuntária/compulsória (Lei nº 10.216/2001) só se justifica quando esgotados os recursos extra-hospitalares e diante de risco grave iminente à vida/integridade física.",
    "perolaClinica": "Diante de paciente com sintomas psicóticos **sem risco iminente de auto ou heteroagressão**, o manejo centrado na pessoa na APS (Caderno de Atenção Básica nº 34 — Saúde Mental / Ministério da Saúde; Tratado de MFC — Guss",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-087",
    "code": "Q-ENARE24-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": ["cuidados-paliativos","alzheimer-avancado","geriatria","conduta-terapeutica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Apolinário, 86 anos, perfil 3 de funcionalidade, com Alzheimer em estágio avançado, hipertenso, diabético e com imobilidade grau IV, em uso de medicação para as doenças de base, é levado à consulta médica.\n\nSobre seu quadro clínico, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve ser feito controle rigoroso da hipertensão e diabetes, com vistas à reabilitação;",
        "explanation": "Incorreta: Controle rigoroso de PA e glicemia em idoso frágil terminal aumenta risco de hipotensão ortostática, quedas e hipoglicemia grave sem benefício de sobrevida.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "todas as medicações em uso certamente são essenciais e devem ser mantidas, independentemente de se configurar a polifarmácia;",
        "explanation": "Incorreta: Polifarmácia deve ser ativamente revista (prevenção quaternária / desprescrição de medicações preventivas de longo prazo sem benefício em fase avançada).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "Apolinário apresenta dependência parcial para as atividades básicas da vida diária;",
        "explanation": "Incorreta: Alzheimer avançado + imobilidade grau IV configura **dependência total** para ABVDs, não parcial.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "uma equipe multiprofissional deve ser acionada para reabilitação de Apolinário;",
        "explanation": "Incorreta: O objetivo da equipe multiprofissional nesse estágio é cuidado paliativo e conforto, não reabilitação funcional.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "Apolinário é um paciente em cuidados paliativos prolongados ou em fase final de vida.",
        "explanation": "A alternativa **E** está correta. Idoso longevo (86 anos) com **demência de Alzheimer em estágio avançado**, **síndrome de imobilidade grau IV** e **perfil 3 de funcionalidade** (dependência total/fragilidade avançada) apresenta doença crônica progressiva e ameaçadora à vida sem perspectiva curativa, enquadrando-se em **cuidados paliativos prolongados / fase final de vida**, cujo foco é conforto, controle de sintomas, suporte familiar e desprescrição de terapias fúteis (Manual de Cuidados Paliativos — Ministério da Saúde / ANCP).",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. Idoso longevo (86 anos) com **demência de Alzheimer em estágio avançado**, **síndrome de imobilidade grau IV** e **perfil 3 de funcionalidade** (dependência total/fragilidade avançada) apresenta doença crônica progressiva e ameaçadora à vida sem perspectiva curativa, enquadrando-se em **cuidados paliativos prolongados / fase final de vida**, cujo foco é conforto, controle de sintomas, suporte familiar e desprescrição de terapias fúteis (Manual de Cuidados Paliativos — Ministério da Saúde / ANCP).\n- **A) Incorreta:** Controle rigoroso de PA e glicemia em idoso frágil terminal aumenta risco de hipotensão ortostática, quedas e hipoglicemia grave sem benefício de sobrevida.\n- **B) Incorreta:** Polifarmácia deve ser ativamente revista (prevenção quaternária / desprescrição de medicações preventivas de longo prazo sem benefício em fase avançada).\n- **C) Incorreta:** Alzheimer avançado + imobilidade grau IV configura **dependência total** para ABVDs, não parcial.\n- **D) Incorreta:** O objetivo da equipe multiprofissional nesse estágio é cuidado paliativo e conforto, não reabilitação funcional.",
    "perolaClinica": "Idoso longevo (86 anos) com **demência de Alzheimer em estágio avançado**, **síndrome de imobilidade grau IV** e **perfil 3 de funcionalidade** (dependência total/fragilidade avançada) apresenta doença crônica progressiv",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-088",
    "code": "Q-ENARE24-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Método Clínico Centrado na Pessoa e Comunicação",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-metodo-clinico-centrado-na-pessoa-e-comunicacao",
    "tags": ["tabagismo","entrevista-motivacional","estagios-de-mudanca","cessacao-do-tabagismo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mylena, 42 anos, fuma 50 cigarros/dia desde os 16 anos. Seu Fagerström é igual a 10. Na escala de razões para fumar, declara que fuma para controlar o peso, para mediar situações de estresse e ansiedade e porque o cigarro é uma companhia. Diz que não consegue nem imaginar tentar parar de fumar e que, por isso, nunca tentou fazê-lo. Declara não se ver sem o cigarro. Recentemente, Mylena foi diagnosticada com neoplasia de pulmão.\n\nNesse caso, a abordagem a essa fumante deve considerar:",
    "alternativas": [
      {
        "letter": "A",
        "text": "uso de vapers para iniciar o processo de mudança;",
        "explanation": "Incorreta: Dispositivos eletrônicos para fumar (*vapes*) são proibidos pela ANVISA e contraindicados como ferramenta de cessação do tabagismo.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "cessação do tabagismo sem uso de suporte farmacoterápico;",
        "explanation": "Incorreta: Com Fagerström 10 (dependência muito elevada), o suporte farmacoterápico é formalmente indicado junto à terapia comportamental.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "cessação do tabagismo com uso de reposição de nicotina apenas;",
        "explanation": "Incorreta: Terapia farmacológica isolada sem entrevista motivacional e suporte comportamental apresenta taxas de sucesso muito menores, especialmente em paciente em pré-contemplação.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "entrevista motivacional, com o suporte comportamental e farmacoterápico necessário;",
        "explanation": "A alternativa **D** está correta. Mylena possui **dependência nicotínica muito elevada (Fagerström = 10; 50 cigarros/dia)** e encontra-se no estágio de **pré-contemplação** (não consegue imaginar parar), apesar do diagnóstico recente de câncer de pulmão. Conforme o **PCDT do Tabagismo (INCA/Ministério da Saúde)**, a abordagem eficaz combina **entrevista motivacional** (para trabalhar ambivalência e avançar nos estágios de mudança) associada a **abordagem cognitivo-comportamental e suporte farmacoterápico** adequado (reposição de nicotina combinada e/ou bupropiona) assim que pactuada a cessação.",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "prescrição de bupropiona para cessação do tabagismo.",
        "explanation": "Incorreta: Prescrever bupropiona isoladamente sem trabalhar motivação e abordagem comportamental é insuficiente (além de ser incompleta frente à D).",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Mylena possui **dependência nicotínica muito elevada (Fagerström = 10; 50 cigarros/dia)** e encontra-se no estágio de **pré-contemplação** (não consegue imaginar parar), apesar do diagnóstico recente de câncer de pulmão. Conforme o **PCDT do Tabagismo (INCA/Ministério da Saúde)**, a abordagem eficaz combina **entrevista motivacional** (para trabalhar ambivalência e avançar nos estágios de mudança) associada a **abordagem cognitivo-comportamental e suporte farmacoterápico** adequado (reposição de nicotina combinada e/ou bupropiona) assim que pactuada a cessação.\n- **A) Incorreta:** Dispositivos eletrônicos para fumar (*vapes*) são proibidos pela ANVISA e contraindicados como ferramenta de cessação do tabagismo.\n- **B) Incorreta:** Com Fagerström 10 (dependência muito elevada), o suporte farmacoterápico é formalmente indicado junto à terapia comportamental.\n- **C) Incorreta:** Terapia farmacológica isolada sem entrevista motivacional e suporte comportamental apresenta taxas de sucesso muito menores, especialmente em paciente em pré-contemplação.\n- **E) Incorreta:** Prescrever bupropiona isoladamente sem trabalhar motivação e abordagem comportamental é insuficiente (além de ser incompleta frente à D).",
    "perolaClinica": "Mylena possui **dependência nicotínica muito elevada (Fagerström = 10; 50 cigarros/dia)** e encontra-se no estágio de **pré-contemplação** (não consegue imaginar parar), apesar do diagnóstico recente de câncer de pulmão.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-089",
    "code": "Q-ENARE24-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": ["hipertensao-arterial-sistemica","diagnostico","criterios-diagnosticos","atencao-primaria"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Rodrigo, 48 anos, casado, autônomo, vem à unidade básica de saúde se queixando de dores de cabeça de repetição e apresentando PA = 165 x 90 mmHg. Em seu prontuário, identifica-se que, nas últimas 5 consultas, no último ano, por motivos diversos, sua pressão arterial foi, respectivamente, de 147 x 99 mmHg; 180 x 100 mmHg; 152 x 90 mmHg; 160 x 95 mmHg e 170 x 92 mmHg. Rodrigo tem história familiar de hipertensão e é sedentário.\n\nO fato que permite o diagnóstico de hipertensão arterial sistêmica é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ter sido admitido em unidade de pronto atendimento com pressão arterial 150 x 95 mmHg;",
        "explanation": "Incorreta: Uma única aferição isolada em pronto atendimento (sob dor/estresse agudo) não fecha diagnóstico de HAS.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "ser sedentário;",
        "explanation": "Incorreta: Sedentarismo é fator de risco cardiovascular, não critério diagnóstico de HAS.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "ter tido história familiar de hipertensão;",
        "explanation": "Incorreta: História familiar aumenta o risco, mas não define o diagnóstico.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "ter tido aferições da pressão arterial maiores que 140 x 90 mmHg no último ano;",
        "explanation": "A alternativa **D** está correta. Segundo a **Diretriz Brasileira de Hipertensão Arterial (SBC)** e o Caderno de Atenção Básica nº 37 (Ministério da Saúde), o diagnóstico de HAS em consultório é estabelecido pela **persistência de níveis pressóricos ≥ 140 x 90 mmHg em pelo menos duas consultas/ocasiões distintas** — Rodrigo apresenta 5 registros consecutivos acima de 140 x 90 mmHg no último ano, além da aferição atual (165 x 90 mmHg).",
        "communityPct": 64.0
      },
      {
        "letter": "E",
        "text": "ter 48 anos de idade.",
        "explanation": "Incorreta: Idade de 48 anos não é critério diagnóstico de hipertensão.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **D** está correta. Segundo a **Diretriz Brasileira de Hipertensão Arterial (SBC)** e o Caderno de Atenção Básica nº 37 (Ministério da Saúde), o diagnóstico de HAS em consultório é estabelecido pela **persistência de níveis pressóricos ≥ 140 x 90 mmHg em pelo menos duas consultas/ocasiões distintas** — Rodrigo apresenta 5 registros consecutivos acima de 140 x 90 mmHg no último ano, além da aferição atual (165 x 90 mmHg).\n- **A) Incorreta:** Uma única aferição isolada em pronto atendimento (sob dor/estresse agudo) não fecha diagnóstico de HAS.\n- **B) Incorreta:** Sedentarismo é fator de risco cardiovascular, não critério diagnóstico de HAS.\n- **C) Incorreta:** História familiar aumenta o risco, mas não define o diagnóstico.\n- **E) Incorreta:** Idade de 48 anos não é critério diagnóstico de hipertensão.",
    "perolaClinica": "Segundo a **Diretriz Brasileira de Hipertensão Arterial (SBC)** e o Caderno de Atenção Básica nº 37 (Ministério da Saúde), o diagnóstico de HAS em consultório é estabelecido pela **persistência de níveis pressóricos ≥ 14",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-090",
    "code": "Q-ENARE24-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Diabetes Mellitus - Diagnóstico e Tratamento",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-diabetes-mellitus-diagnostico-e-tratamento",
    "tags": ["diabetes-mellitus","glicemia-de-jejum","criterios-diagnosticos","atencao-primaria"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Foram atendidas 5 irmãs na unidade básica de saúde. A única que tem características que permitem o diagnóstico de diabetes mellitus é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Maria Hilma, de 49 anos, que realizou teste de glicemia capilar com resultado 179 mg/dl;",
        "explanation": "Incorreta: Glicemia capilar não é exame diagnóstico (e mesmo venosa casual exigiria ≥ 200 mg/dL com sintomas clássicos).",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "Maria José, que, em 01/03/2024, apresentou hemoglobina glicada (HbA1c) = 5,6% e, em 12/07/2024, apresentou hemoglobina glicada (HbA1c) = 6,1%;",
        "explanation": "Incorreta: HbA1c de 5,6% é normal e 6,1% configura **pré-diabetes** (5,7% a 6,4%).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "Maria Lina, que apresentou, em 01/03/2024, glicemia de jejum = 136 mg/dl e, em 12/07/2024, glicemia de jejum = 152 mg/dl;",
        "explanation": "A alternativa **C** está correta. Segundo a **Diretriz da Sociedade Brasileira de Diabetes (SBD 2024)** e a ADA, em pacientes assintomáticos, o diagnóstico de diabetes mellitus exige **dois exames alterados** (em ocasiões distintas ou dois métodos diferentes na mesma coleta), considerando: glicemia de jejum **≥ 126 mg/dL**, HbA1c **≥ 6,5%** ou TOTG 2h **≥ 200 mg/dL**. Maria Lina apresenta **duas glicemias de jejum ≥ 126 mg/dL** em datas distintas (136 e 152 mg/dL), confirmando o diagnóstico.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "Maria Cláudia, que apresenta glicemia de jejum = 126 mg/dl;",
        "explanation": "Incorreta: Uma **única** glicemia de jejum de 126 mg/dL em paciente assintomática exige repetição/confirmação com segundo exame para firmar o diagnóstico.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "Maria Antônia, que apresenta hemoglobina glicada (HbA1c) = 4,5%.",
        "explanation": "Incorreta: HbA1c de 4,5% é completamente normal.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Segundo a **Diretriz da Sociedade Brasileira de Diabetes (SBD 2024)** e a ADA, em pacientes assintomáticos, o diagnóstico de diabetes mellitus exige **dois exames alterados** (em ocasiões distintas ou dois métodos diferentes na mesma coleta), considerando: glicemia de jejum **≥ 126 mg/dL**, HbA1c **≥ 6,5%** ou TOTG 2h **≥ 200 mg/dL**. Maria Lina apresenta **duas glicemias de jejum ≥ 126 mg/dL** em datas distintas (136 e 152 mg/dL), confirmando o diagnóstico.\n- **A) Incorreta:** Glicemia capilar não é exame diagnóstico (e mesmo venosa casual exigiria ≥ 200 mg/dL com sintomas clássicos).\n- **B) Incorreta:** HbA1c de 5,6% é normal e 6,1% configura **pré-diabetes** (5,7% a 6,4%).\n- **D) Incorreta:** Uma **única** glicemia de jejum de 126 mg/dL em paciente assintomática exige repetição/confirmação com segundo exame para firmar o diagnóstico.\n- **E) Incorreta:** HbA1c de 4,5% é completamente normal.",
    "perolaClinica": "Segundo a **Diretriz da Sociedade Brasileira de Diabetes (SBD 2024)** e a ADA, em pacientes assintomáticos, o diagnóstico de diabetes mellitus exige **dois exames alterados** (em ocasiões distintas ou dois métodos difere",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-091",
    "code": "Q-ENARE24-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Hipertensão Arterial Sistêmica",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-hipertensao-arterial-sistemica",
    "tags": ["hipertensao-arterial-sistemica","meta-pressorica","mudanca-de-estilo-de-vida","seguimento-aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "José, 55 anos, hipertenso há 3 anos, em uso regular de medicação, vem para consulta de rotina apresentando PA = 130 x 80 mmHg. Após exame clínico, conclui-se que tem baixo risco cardiovascular.\n\nNesse caso, a conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "manter a medicação e reforçar a importância de manter a mudança de estilo de vida, pois a PA está dentro da meta;",
        "explanation": "A alternativa **A** está correta. Para hipertensos de **baixo ou moderado risco cardiovascular**, a meta pressórica recomendada pela **Diretriz Brasileira de Hipertensão Arterial (SBC)** é **< 140 x 90 mmHg** (idealmente em torno de 130 x 80 mmHg se bem tolerada). Com PA controlada em 130 x 80 mmHg em uso regular, a conduta é **manter o esquema anti-hipertensivo atual e reforçar continuamente as medidas não farmacológicas (MEV)**.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "retirar a medicação e reforçar a importância de manter a mudança de estilo de vida, pois a PA está dentro da meta;",
        "explanation": "Incorreta: Retirar a medicação de um paciente hipertenso controlado leva à recidiva da elevação pressórica.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "modificar a medicação para que o organismo não crie tolerância às medicações atuais, embora a PA esteja dentro da meta;",
        "explanation": "Incorreta: Não existe indicação de rodízio de anti-hipertensivos para evitar \"tolerância\".",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "reforçar a mudança de estilo de vida, pois a PA está fora da meta;",
        "explanation": "Incorreta: A PA de 130 x 80 mmHg está dentro da meta preconizada.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "modificar a conduta medicamentosa, pois a PA está fora da meta.",
        "explanation": "Incorreta: A PA está controlada dentro da meta, não requerendo troca ou intensificação medicamentosa.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Para hipertensos de **baixo ou moderado risco cardiovascular**, a meta pressórica recomendada pela **Diretriz Brasileira de Hipertensão Arterial (SBC)** é **< 140 x 90 mmHg** (idealmente em torno de 130 x 80 mmHg se bem tolerada). Com PA controlada em 130 x 80 mmHg em uso regular, a conduta é **manter o esquema anti-hipertensivo atual e reforçar continuamente as medidas não farmacológicas (MEV)**.\n- **B) Incorreta:** Retirar a medicação de um paciente hipertenso controlado leva à recidiva da elevação pressórica.\n- **C) Incorreta:** Não existe indicação de rodízio de anti-hipertensivos para evitar \"tolerância\".\n- **D) Incorreta:** A PA de 130 x 80 mmHg está dentro da meta preconizada.\n- **E) Incorreta:** A PA está controlada dentro da meta, não requerendo troca ou intensificação medicamentosa.",
    "perolaClinica": "Para hipertensos de **baixo ou moderado risco cardiovascular**, a meta pressórica recomendada pela **Diretriz Brasileira de Hipertensão Arterial (SBC)** é **< 140 x 90 mmHg** (idealmente em torno de 130 x 80 mmHg se bem ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-092",
    "code": "Q-ENARE24-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Complicações Crônicas do Diabetes",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-complicacoes-cronicas-do-diabetes",
    "tags": ["pe-diabetico","rastreamento","classificacao-de-risco","iwgdf"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leonora, 60 anos, com diabetes mellitus diagnosticada há 5 anos, em acompanhamento contínuo na unidade básica de saúde, vem para a consulta de rotina. Após avaliação dos pés, identificamos: sensibilidade presente, deformidade ausente e úlceras ou cicatrizes de úlceras ausentes.\n\nSegundo o exame clínico do pé diabético, conclui-se que a categoria de risco e o melhor manejo para Leonora são, respectivamente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "grau 0 – reavaliação anual;",
        "explanation": "A alternativa **A** está correta. Conforme o **Manual do Pé Diabético do Ministério da Saúde** e as diretrizes do **IWGDF / SBD**, a ausência de neuropatia (sensibilidade protetora plantar preservada), ausência de doença arterial periférica, ausência de deformidades e sem história de úlcera/amputação classifica o paciente como **Risco Grau 0 (muito baixo risco)**, indicando **exame clínico dos pés com reavaliação anual** na APS e educação em autocuidado.",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "grau I – reavaliação anual;",
        "explanation": "Incorreta: Grau 1 corresponde à presença de neuropatia sensitiva (perda da sensibilidade protetora) ou DAP isolada (reavaliação semestral).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "grau II – reavaliação semestral;",
        "explanation": "Incorreta: Grau 2 envolve neuropatia + DAP e/ou deformidade nos pés (reavaliação a cada 3–6 meses).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "grau III – reavaliação semestral;",
        "explanation": "Incorreta: Grau 3 corresponde a histórico prévio de úlcera ou amputação (reavaliação a cada 1–3 meses).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "grau IIIa – reavaliação semestral.",
        "explanation": "Incorreta: Não corresponde à classificação de risco 0–3 do IWGDF/MS.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Conforme o **Manual do Pé Diabético do Ministério da Saúde** e as diretrizes do **IWGDF / SBD**, a ausência de neuropatia (sensibilidade protetora plantar preservada), ausência de doença arterial periférica, ausência de deformidades e sem história de úlcera/amputação classifica o paciente como **Risco Grau 0 (muito baixo risco)**, indicando **exame clínico dos pés com reavaliação anual** na APS e educação em autocuidado.\n- **B) Incorreta:** Grau 1 corresponde à presença de neuropatia sensitiva (perda da sensibilidade protetora) ou DAP isolada (reavaliação semestral).\n- **C) Incorreta:** Grau 2 envolve neuropatia + DAP e/ou deformidade nos pés (reavaliação a cada 3–6 meses).\n- **D) Incorreta:** Grau 3 corresponde a histórico prévio de úlcera ou amputação (reavaliação a cada 1–3 meses).\n- **E) Incorreta:** Não corresponde à classificação de risco 0–3 do IWGDF/MS.",
    "perolaClinica": "Conforme o **Manual do Pé Diabético do Ministério da Saúde** e as diretrizes do **IWGDF / SBD**, a ausência de neuropatia (sensibilidade protetora plantar preservada), ausência de doença arterial periférica, ausência de ",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-093",
    "code": "Q-ENARE24-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Ferramentas de Abordagem Familiar e Comunitária",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-ferramentas-de-abordagem-familiar-e-comunitaria",
    "tags": ["abordagem-familiar","sobrecarga-do-cuidador","plano-terapeutico-singular","atencao-domiciliar"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Vanda, 92 anos, hipertensa, com diagnóstico de Alzheimer há 16 anos, acamada, estável, sem lesões por pressão, sem histórico recente de internação, tem uma filha, Joana, de 68 anos, que faz o manejo diário: banho no leito, administração de medicação, dieta enteral, mudança de decúbito. A filha está bem orientada e procura se informar sobre o quadro e as melhores condutas.\n\nNesse caso, o plano terapêutico singular deve:",
    "alternativas": [
      {
        "letter": "A",
        "text": "dar suporte à cuidadora, acompanhá-la regularmente para avaliação de sobrecarga no cuidado e manter o acompanhamento de Vanda pela equipe da APS;",
        "explanation": "A alternativa **A** está correta. Vanda está clínica e funcionalmente **estável** (sem lesões por pressão, sem internações, cuidados bem executados pela filha). Por outro lado, Joana é uma **cuidadora idosa (68 anos)** assumindo integralmente cuidados de alta demanda (banho no leito, dieta enteral, mudança de decúbito). Segundo os **Cadernos de Atenção Domiciliar e Envelhecimento (Ministério da Saúde)**, a conduta essencial da equipe da APS (Modalidade AD1) é **manter o acompanhamento longitudinal de Vanda na APS** e **cuidar ativamente da cuidadora**, rastreando precocemente estresse e **sobrecarga do cuidador** (ex.: escala de Zarit).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "agendar consultas regulares de fisioterapia e fonoaudiologia e encaminhamento ao geriatra para acompanhamento da doença de Alzheimer;",
        "explanation": "Incorreta: Paciente estável com Alzheimer há 16 anos não precisa ser encaminhada ao geriatra nem sobrecarregar a família com deslocamentos ambulatoriais de reabilitação sem indicação.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "agendar consultas regulares de nutricionista e encaminhamento ao CER para reabilitação da deglutição;",
        "explanation": "Incorreta: Não há perspectiva de reabilitação de deglutição em CER numa paciente de 92 anos com 16 anos de Alzheimer em dieta enteral.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "dar suporte à cuidadora e encaminhar Vanda para o serviço de atenção secundária domiciliar para reabilitação da deglutição por fonoaudióloga;",
        "explanation": "Incorreta: AD2/atenção secundária domiciliar é indicada para casos agudizados/instáveis ou procedimentos complexos, não para paciente estável acompanhável em AD1.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "fornecer acompanhamento regular com fonoaudióloga e nutricionista e encaminhar a paciente ao serviço de cuidados paliativos.",
        "explanation": "Incorreta: A equipe da APS tem atribuição de prover cuidados paliativos primários sem necessidade de transferir o cuidado estável para serviço especializado, além de omitir o suporte à cuidadora.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. Vanda está clínica e funcionalmente **estável** (sem lesões por pressão, sem internações, cuidados bem executados pela filha). Por outro lado, Joana é uma **cuidadora idosa (68 anos)** assumindo integralmente cuidados de alta demanda (banho no leito, dieta enteral, mudança de decúbito). Segundo os **Cadernos de Atenção Domiciliar e Envelhecimento (Ministério da Saúde)**, a conduta essencial da equipe da APS (Modalidade AD1) é **manter o acompanhamento longitudinal de Vanda na APS** e **cuidar ativamente da cuidadora**, rastreando precocemente estresse e **sobrecarga do cuidador** (ex.: escala de Zarit).\n- **B) Incorreta:** Paciente estável com Alzheimer há 16 anos não precisa ser encaminhada ao geriatra nem sobrecarregar a família com deslocamentos ambulatoriais de reabilitação sem indicação.\n- **C) Incorreta:** Não há perspectiva de reabilitação de deglutição em CER numa paciente de 92 anos com 16 anos de Alzheimer em dieta enteral.\n- **D) Incorreta:** AD2/atenção secundária domiciliar é indicada para casos agudizados/instáveis ou procedimentos complexos, não para paciente estável acompanhável em AD1.\n- **E) Incorreta:** A equipe da APS tem atribuição de prover cuidados paliativos primários sem necessidade de transferir o cuidado estável para serviço especializado, além de omitir o suporte à cuidadora.",
    "perolaClinica": "Vanda está clínica e funcionalmente **estável** (sem lesões por pressão, sem internações, cuidados bem executados pela filha).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-094",
    "code": "Q-ENARE24-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Ferramentas de Abordagem Familiar e Comunitária",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-ferramentas-de-abordagem-familiar-e-comunitaria",
    "tags": ["ciclo-de-vida-familiar","crises-familiares","crise-acidental","medicina-de-familia-e-comunidade"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Com queixa de dor de cabeça, Jéssica, 37 anos, diarista, vai pela primeira vez à unidade básica de saúde. Ela reporta: “Doutor, sinto essa dor há mais de 2 meses, desde que precisamos sair da nossa casa porque não dava mais para pagar o aluguel depois que meu marido foi demitido do emprego. Na minha casa somos eu, meu marido e três filhas de 4, 6 e 14 anos”.\n\nÉ exemplo de crise acidental do ciclo de vida familiar da família de Jéssica:",
    "alternativas": [
      {
        "letter": "A",
        "text": "família com filho pequeno;",
        "explanation": "Incorreta: Família com filho pequeno é estágio normativo/evolutivo do ciclo de vida familiar.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "família em estágio tardio;",
        "explanation": "Incorreta: Família em estágio tardio é fase evolutiva esperada (e nem corresponde ao momento atual de Jéssica).",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "desemprego;",
        "explanation": "A alternativa **C** está correta. Na **Abordagem Familiar em Medicina de Família e Comunidade** (Carter & McGoldrick / Tratado de MFC — Gusso), distinguem-se **crises evolutivas (previsíveis/normativas)** — transições esperadas do ciclo de vida (nascimento de filhos, escola, adolescência, saída de casa, envelhecimento) — de **crises acidentais (imprevisíveis/paranormativas)**, eventos inesperados que desestruturam a homeostase familiar, como **desemprego**, doença grave súbita, morte prematura ou despejo/perda da moradia.",
        "communityPct": 64.0
      },
      {
        "letter": "D",
        "text": "família com criança em idade escolar;",
        "explanation": "Incorreta: Família com criança em idade escolar é transição evolutiva previsível.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "família com adolescente.",
        "explanation": "Incorreta: Família com adolescente é fase evolutiva previsível do ciclo de vida familiar.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **C** está correta. Na **Abordagem Familiar em Medicina de Família e Comunidade** (Carter & McGoldrick / Tratado de MFC — Gusso), distinguem-se **crises evolutivas (previsíveis/normativas)** — transições esperadas do ciclo de vida (nascimento de filhos, escola, adolescência, saída de casa, envelhecimento) — de **crises acidentais (imprevisíveis/paranormativas)**, eventos inesperados que desestruturam a homeostase familiar, como **desemprego**, doença grave súbita, morte prematura ou despejo/perda da moradia.\n- **A) Incorreta:** Família com filho pequeno é estágio normativo/evolutivo do ciclo de vida familiar.\n- **B) Incorreta:** Família em estágio tardio é fase evolutiva esperada (e nem corresponde ao momento atual de Jéssica).\n- **D) Incorreta:** Família com criança em idade escolar é transição evolutiva previsível.\n- **E) Incorreta:** Família com adolescente é fase evolutiva previsível do ciclo de vida familiar.",
    "perolaClinica": "Na **Abordagem Familiar em Medicina de Família e Comunidade** (Carter & McGoldrick / Tratado de MFC — Gusso), distinguem-se **crises evolutivas (previsíveis/normativas)** — transições esperadas do ciclo de vida (nascimen",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-095",
    "code": "Q-ENARE24-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Ferramentas de Abordagem Familiar e Comunitária",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-ferramentas-de-abordagem-familiar-e-comunitaria",
    "tags": ["genograma","abordagem-familiar","medicina-de-familia-e-comunidade","padroes-transgeracionais"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mônica, 29 anos, professora, vem para a consulta na unidade básica de saúde preocupada com seu sobrepeso. Diz que anda muito estressada, que os cuidados com o filho mais novo têm tomado muito seu tempo e que o marido não ajuda e anda bebendo demais. Sua sogra Maria foi morar com eles e dá muito trabalho em virtude do quadro depressivo, que não melhora. O sogro, Mário, faleceu aos 53 anos, e isso a preocupa em relação a Mário Luís, seu marido, que também fuma e bebe demais. Eles têm ainda um filho de 12 anos, que não dá trabalho nenhum.\n\nConsidere o genograma a seguir.\n\nO genograma de Mônica mostra que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "existe um padrão repetitivo de comportamento e saúde entre Mário e Mário Luís;",
        "explanation": "A alternativa **A** está correta. [REVISAR: questão possui figura de genograma na página 19 do PDF original que pode ser anexada como clinicalImage]. Pela leitura do genograma apresentado na prova (Mário: falecido [X] aos 53 anos com etilismo, HAS e tabagismo; Mário Luís: 43 anos com etilismo, HAS e tabagismo), evidencia-se claramente um **padrão transgeracional repetitivo de comportamento e saúde** (etilismo, tabagismo e hipertensão arterial) entre pai (Mário) e filho (Mário Luís), conforme a interpretação clássica de genogramas em MFC (McGoldrick / Gusso).",
        "communityPct": 64.0
      },
      {
        "letter": "B",
        "text": "existe uma relação conflituosa entre Mônica e Maria;",
        "explanation": "Incorreta: Não há linha em zigue-zague (símbolo de relação conflituosa) conectando Mônica e Maria no genograma.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "existe uma relação conflituosa entre Mônica e Mário Luís;",
        "explanation": "Incorreta: Não há linha em zigue-zague indicando relação conflituosa entre Mônica e Mário Luís no desenho.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "Maria e Mário são divorciados;",
        "explanation": "Incorreta: Não há duas barras transversais na linha conjugal de Maria e Mário (símbolo de divórcio); Mário está marcado com \"X\" (falecido).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "Mário Luís é o indivíduo índice do genograma.",
        "explanation": "Incorreta: O indivíduo índice (representado por **círculo duplo**) no genograma é **Mônica** (29 anos), não Mário Luís.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **A** está correta. [REVISAR: questão possui figura de genograma na página 19 do PDF original que pode ser anexada como clinicalImage]. Pela leitura do genograma apresentado na prova (Mário: falecido [X] aos 53 anos com etilismo, HAS e tabagismo; Mário Luís: 43 anos com etilismo, HAS e tabagismo), evidencia-se claramente um **padrão transgeracional repetitivo de comportamento e saúde** (etilismo, tabagismo e hipertensão arterial) entre pai (Mário) e filho (Mário Luís), conforme a interpretação clássica de genogramas em MFC (McGoldrick / Gusso).\n- **B) Incorreta:** Não há linha em zigue-zague (símbolo de relação conflituosa) conectando Mônica e Maria no genograma.\n- **C) Incorreta:** Não há linha em zigue-zague indicando relação conflituosa entre Mônica e Mário Luís no desenho.\n- **D) Incorreta:** Não há duas barras transversais na linha conjugal de Maria e Mário (símbolo de divórcio); Mário está marcado com \"X\" (falecido).\n- **E) Incorreta:** O indivíduo índice (representado por **círculo duplo**) no genograma é **Mônica** (29 anos), não Mário Luís.",
    "perolaClinica": "[REVISAR: questão possui figura de genograma na página 19 do PDF original que pode ser anexada como clinicalImage].",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-096",
    "code": "Q-ENARE24-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": ["rcop","metodo-soap","registro-clinico","atencao-primaria-a-saude"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Tatiana vem à consulta médica com queixa de dor lombar. Em sua consulta anterior, apresentou pressão arterial de 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal. Ela declara ter alergia a dipirona. De acordo com seu prontuário, seu último Papanicolau foi há 3 anos. Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação.\n\nEm relação ao registro das informações fornecidas por Tatiana no Registro Clínico Orientado por Problemas (RCOP), é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "devem ser registradas no campo Subjetivo as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”;",
        "explanation": "Incorreta: Sinais vitais e antropometria são achados mensuráveis pertencentes ao campo **Objetivo (O)**, não Subjetivo.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "devem ser registradas no campo Objetivo as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”;",
        "explanation": "A alternativa **B** está correta. No método **SOAP** do **Registro Clínico Orientado por Problemas (RCOP)** (Weed / Tratado de MFC — Gusso): **S (Subjetivo)** registra queixas, sintomas, sentimentos, medos e expectativas relatados pela pessoa; **O (Objetivo)** registra dados mensuráveis e observáveis do exame físico e exames complementares (**PA 120 x 65 mmHg, FC, peso, altura, FR**); **A (Avaliação)** registra hipóteses diagnósticas/problemas (CIAP-2/CID); e **P (Plano)** registra condutas terapêuticas, diagnósticas e seguimento.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "devem ser registradas no campo Avaliação as informações “apresentou pressão arterial 120 x 65 mmHg, FC normal, peso 59 kg, altura 1,60 m e FR normal”;",
        "explanation": "Incorreta: O campo Avaliação (A) contém síntese clínica e diagnósticos, não sinais vitais brutos.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "devem ser registradas no campo Avaliação as informações “Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação”;",
        "explanation": "Incorreta: Sentimentos, medos e insônia relatados por Tatiana pertencem ao campo **Subjetivo (S)** (experiência da doença — MCCP).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "as informações “Tatiana relata se sentir sem energia e ter medo de essas dores serem alguma doença ruim. Diz que não tem conseguido mais dormir de preocupação” não são relevantes; logo, não devem ser registradas no RCOP.",
        "explanation": "Incorreta: Medos e preocupações são altamente relevantes no Método Clínico Centrado na Pessoa e devem constar no campo Subjetivo.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. No método **SOAP** do **Registro Clínico Orientado por Problemas (RCOP)** (Weed / Tratado de MFC — Gusso): **S (Subjetivo)** registra queixas, sintomas, sentimentos, medos e expectativas relatados pela pessoa; **O (Objetivo)** registra dados mensuráveis e observáveis do exame físico e exames complementares (**PA 120 x 65 mmHg, FC, peso, altura, FR**); **A (Avaliação)** registra hipóteses diagnósticas/problemas (CIAP-2/CID); e **P (Plano)** registra condutas terapêuticas, diagnósticas e seguimento.\n- **A) Incorreta:** Sinais vitais e antropometria são achados mensuráveis pertencentes ao campo **Objetivo (O)**, não Subjetivo.\n- **C) Incorreta:** O campo Avaliação (A) contém síntese clínica e diagnósticos, não sinais vitais brutos.\n- **D) Incorreta:** Sentimentos, medos e insônia relatados por Tatiana pertencem ao campo **Subjetivo (S)** (experiência da doença — MCCP).\n- **E) Incorreta:** Medos e preocupações são altamente relevantes no Método Clínico Centrado na Pessoa e devem constar no campo Subjetivo.",
    "perolaClinica": "No método **SOAP** do **Registro Clínico Orientado por Problemas (RCOP)** (Weed / Tratado de MFC — Gusso): **S (Subjetivo)** registra queixas, sintomas, sentimentos, medos e expectativas relatados pela pessoa; **O (Objet",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-097",
    "code": "Q-ENARE24-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Vasculites Sistêmicas",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-vasculites-sistemicas",
    "tags": ["arterite-de-celulas-gigantes","arterite-temporal","vasculites-sistemicas","vhs"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um senhor de 82 anos comparece à consulta queixando-se de uma cefaleia de início recente. HAS controlada com IECA. Exame físico sem particularidades, exceto por espessamento da artéria temporal à palpação.\n\nNesse contexto:",
    "alternativas": [
      {
        "letter": "A",
        "text": "PCR elevada aumenta a chance de arterite de células gigantes;",
        "explanation": "Incorreta: Em idosos, PCR elevada isoladamente tem baixíssima especificidade (LR+ muito baixo); seu maior valor está no alto valor preditivo negativo quando normal.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "VHS > 100 mm/h aumenta a chance de arterite de células gigantes;",
        "explanation": "A alternativa **B** está correta. Em idoso (> 50 anos) com cefaleia nova e **espessamento/anormalidade da artéria temporal**, a suspeita clínica é de **arterite de células gigantes (arterite temporal)**. Segundo revisões sistemáticas de acurácia diagnóstica (JAMA Rational Clinical Examination — *Does This Patient Have Temporal Arteritis?* / Gusso), **VHS > 100 mm/h** apresenta razão de verossimilhança positiva (LR+) relevante (~3,1), aumentando significativamente a probabilidade pós-teste da doença (enquanto PCR elevada isolada tem LR+ próximo de 1,0–1,4, baixa especificidade, servindo mais para reduzir probabilidade quando normal).",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "tomografia craniana é essencial para excluir diagnósticos outros, antes de se pensar em arterite de células gigantes;",
        "explanation": "Incorreta: TC de crânio não é pré-requisito para pensar em arterite de células gigantes nem deve atrasar a corticoterapia diante de alta suspeita (risco de amaurose irreversível).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "radiografia craniana é essencial para excluir diagnósticos outros, antes de se pensar em arterite de células gigantes;",
        "explanation": "Incorreta: Radiografia de crânio não tem papel na investigação de cefaleia ou arterite temporal.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "ressonância magnética craniana é essencial para excluir outros diagnósticos, antes de se pensar em arterite de células gigantes.",
        "explanation": "Incorreta: RNM craniana não é essencial antes de considerar o diagnóstico clínico-laboratorial de arterite de células gigantes.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. Em idoso (> 50 anos) com cefaleia nova e **espessamento/anormalidade da artéria temporal**, a suspeita clínica é de **arterite de células gigantes (arterite temporal)**. Segundo revisões sistemáticas de acurácia diagnóstica (JAMA Rational Clinical Examination — *Does This Patient Have Temporal Arteritis?* / Gusso), **VHS > 100 mm/h** apresenta razão de verossimilhança positiva (LR+) relevante (~3,1), aumentando significativamente a probabilidade pós-teste da doença (enquanto PCR elevada isolada tem LR+ próximo de 1,0–1,4, baixa especificidade, servindo mais para reduzir probabilidade quando normal).\n- **A) Incorreta:** Em idosos, PCR elevada isoladamente tem baixíssima especificidade (LR+ muito baixo); seu maior valor está no alto valor preditivo negativo quando normal.\n- **C) Incorreta:** TC de crânio não é pré-requisito para pensar em arterite de células gigantes nem deve atrasar a corticoterapia diante de alta suspeita (risco de amaurose irreversível).\n- **D) Incorreta:** Radiografia de crânio não tem papel na investigação de cefaleia ou arterite temporal.\n- **E) Incorreta:** RNM craniana não é essencial antes de considerar o diagnóstico clínico-laboratorial de arterite de células gigantes.",
    "perolaClinica": "Em idoso (> 50 anos) com cefaleia nova e **espessamento/anormalidade da artéria temporal**, a suspeita clínica é de **arterite de células gigantes (arterite temporal)**.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-098",
    "code": "Q-ENARE24-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": ["tuberculose","populacoes-vulneraveis","populacao-em-situacao-de-rua","epidemiologia-da-tuberculose"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Segundo o Manual de Recomendações e Controle da Tuberculose no Brasil 2ª ed., atualizado em 29/05/2024, a transmissão e adoecimento por TB são influenciados por fatores demográficos, sociais e econômicos. Dentre os fatores que contribuem para a manutenção e propagação da doença, destacam-se: urbanização crescente e desordenada, desigualdade na distribuição de renda, moradias precárias e superlotação, insegurança alimentar e baixa escolaridade, bem como dificuldade de acesso aos serviços e bens públicos. Dessa maneira, no Brasil, assim como em outros países que têm condições de vida semelhantes, alguns grupos populacionais apresentam maior vulnerabilidade para a TB.\n\nPelo exposto acima, em comparação com a população em geral, o risco de adoecimento por tuberculose é maior no seguinte grupo:",
    "alternativas": [
      {
        "letter": "A",
        "text": "indígenas;",
        "explanation": "Incorreta: População indígena tem risco ~3x maior que a população geral.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "profissionais de saúde;",
        "explanation": "Incorreta: Profissionais de saúde possuem risco ocupacional aumentado, mas muito inferior ao de pessoas em situação de rua.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "pessoas vivendo com o HIV;",
        "explanation": "Incorreta: PVHIV têm risco ~28x maior — metade do risco observado em pessoas em situação de rua (56x).",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "pessoas privadas de liberdade;",
        "explanation": "Incorreta: Pessoas privadas de liberdade têm risco ~28x maior — também inferior ao de pessoas em situação de rua (56x).",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "pessoas vivendo em situação de rua.",
        "explanation": "A alternativa **E** está correta. De acordo com o **Manual de Recomendações para o Controle da Tuberculose no Brasil (2ª ed. atualizada — Ministério da Saúde)**, a tabela oficial de risco relativo de adoecimento por TB em comparação à população geral aponta:\n- **Pessoas em situação de rua:** **56 vezes** maior risco (o mais elevado de todos os grupos);\n- **Pessoas privadas de liberdade:** **28 vezes** maior;\n- **Pessoas vivendo com HIV (PVHIV):** **28 vezes** maior;\n- **Indígenas:** **3 vezes** maior.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta. De acordo com o **Manual de Recomendações para o Controle da Tuberculose no Brasil (2ª ed. atualizada — Ministério da Saúde)**, a tabela oficial de risco relativo de adoecimento por TB em comparação à população geral aponta:\n- **Pessoas em situação de rua:** **56 vezes** maior risco (o mais elevado de todos os grupos);\n- **Pessoas privadas de liberdade:** **28 vezes** maior;\n- **Pessoas vivendo com HIV (PVHIV):** **28 vezes** maior;\n- **Indígenas:** **3 vezes** maior.\n- **A) Incorreta:** População indígena tem risco ~3x maior que a população geral.\n- **B) Incorreta:** Profissionais de saúde possuem risco ocupacional aumentado, mas muito inferior ao de pessoas em situação de rua.\n- **C) Incorreta:** PVHIV têm risco ~28x maior — metade do risco observado em pessoas em situação de rua (56x).\n- **D) Incorreta:** Pessoas privadas de liberdade têm risco ~28x maior — também inferior ao de pessoas em situação de rua (56x).",
    "perolaClinica": "De acordo com o **Manual de Recomendações para o Controle da Tuberculose no Brasil (2ª ed.",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-099",
    "code": "Q-ENARE24-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": ["srag","sindrome-gripal","definicao-de-caso","vigilancia-epidemiologica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "De acordo com parâmetros do Ministério da Saúde, a definição utilizada na vigilância da influenza e da covid-19 para determinar casos de síndrome respiratória aguda grave (SRAG) é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "indivíduo com febre, mesmo que referida, acompanhada de tosse ou dor de garganta e com início dos sintomas nos últimos sete dias;",
        "explanation": "Incorreta: Descreve a definição antiga de Síndrome Gripal (pré-pandemia de Covid-19), sem sinais de gravidade.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "indivíduo com quadro respiratório agudo, caracterizado por pelo menos dois dos seguintes sinais e sintomas: febre (mesmo que referida), calafrios, dor de garganta, dor de cabeça, tosse, coriza, distúrbios olfativos ou distúrbios gustativos;",
        "explanation": "Incorreta: Descreve a definição atual de **Síndrome Gripal (SG)**, não de SRAG.",
        "communityPct": 9.0
      },
      {
        "letter": "C",
        "text": "em crianças, além da febre (mesmo que referida), calafrios, dor de garganta, dor de cabeça, tosse, coriza, distúrbios olfativos ou distúrbios gustativos, também obstrução nasal, na ausência de outro diagnóstico específico;",
        "explanation": "Incorreta: Descreve critério adicional de **Síndrome Gripal** em crianças.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "em idosos, critérios específicos de agravamento como síncope, confusão mental, sonolência excessiva, irritabilidade e inapetência;",
        "explanation": "Incorreta: Descreve critérios específicos de agravamento considerados na definição de **Síndrome Gripal** em idosos (na suspeita de SG), não a definição geral de SRAG.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "indivíduo com síndrome gripal que apresenta dispneia/desconforto respiratório, ou pressão persistente no tórax, ou saturação de O2 ≤94% em ar ambiente ou coloração azulada dos lábios ou rosto.",
        "explanation": "A alternativa **E** está correta (gabarito definitivo alterado pós-recurso pela FGV/ENARE). Conforme o **Guia de Vigilância Epidemiológica — Covid-19 e Influenza (Ministério da Saúde)**, define-se **SRAG** como **indivíduo com Síndrome Gripal (SG) que apresente dispneia/desconforto respiratório OU pressão/dor persistente no tórax OU saturação de O₂ menor que 95% (≤ 94%) em ar ambiente OU coloração azulada (cianose) dos lábios ou rosto**.",
        "communityPct": 64.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **E** está correta (gabarito definitivo alterado pós-recurso pela FGV/ENARE). Conforme o **Guia de Vigilância Epidemiológica — Covid-19 e Influenza (Ministério da Saúde)**, define-se **SRAG** como **indivíduo com Síndrome Gripal (SG) que apresente dispneia/desconforto respiratório OU pressão/dor persistente no tórax OU saturação de O₂ menor que 95% (≤ 94%) em ar ambiente OU coloração azulada (cianose) dos lábios ou rosto**.\n- **A) Incorreta:** Descreve a definição antiga de Síndrome Gripal (pré-pandemia de Covid-19), sem sinais de gravidade.\n- **B) Incorreta:** Descreve a definição atual de **Síndrome Gripal (SG)**, não de SRAG.\n- **C) Incorreta:** Descreve critério adicional de **Síndrome Gripal** em crianças.\n- **D) Incorreta:** Descreve critérios específicos de agravamento considerados na definição de **Síndrome Gripal** em idosos (na suspeita de SG), não a definição geral de SRAG.",
    "perolaClinica": "(gabarito definitivo alterado pós-recurso pela FGV/ENARE).",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  },
  {
    "id": "q-enare-2024-100",
    "code": "Q-ENARE24-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Infecções de Vias Aéreas Superiores",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-infeccoes-de-vias-aereas-superiores",
    "tags": ["difteria","pseudomembranas","corynebacterium-diphtheriae","doencas-imunopreveniveis"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "ENARE",
    "instituicao": "ENARE",
    "estado": "BR",
    "regiao": "Nacional",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os movimentos antivacina, causados por um sistema de desinformação, trazem muitos danos para as pessoas não vacinadas, pois já está mais que provado pela ciência que vacinas são muito efetivas e salvam vidas.\n\nUma dessas doenças preveníveis por vacinas tem como manifestação clínica típica a presença de placas pseudomembranosas branco-acinzentadas, aderentes, que se instalam nas amígdalas e invadem estruturas vizinhas. Essas placas podem se localizar na faringe, na laringe e nas fossas nasais; e, com menos frequência, também são observadas na conjuntiva, na pele, no conduto auditivo, na vulva, no pênis (pós-circuncisão) e no cordão umbilical. A doença manifesta-se clinicamente por comprometimento do estado geral do paciente, que pode se apresentar prostrado e pálido. A dor de garganta é discreta, independentemente da localização ou da quantidade de placas existentes, e a febre normalmente não é muito elevada, variando de 37,5 °C a 38,5 °C, embora temperaturas mais altas não afastem o diagnóstico. Nos casos mais graves, há intenso edema do pescoço, com grande aumento dos gânglios linfáticos dessa área (pescoço taurino) e edema periganglionar nas cadeias cervicais e submandibulares. Dependendo do tamanho e da localização da placa pseudomembranosa, pode ocorrer asfixia mecânica aguda no paciente, o que muitas vezes exige imediata traqueostomia para evitar a morte.\n\nA descrição acima é característica de:",
    "alternativas": [
      {
        "letter": "A",
        "text": "vírus sincicial respiratório;",
        "explanation": "Incorreta: VSR causa bronquiolite viral aguda e IVAS em lactentes, sem pseudomembranas aderentes nem pescoço taurino.",
        "communityPct": 9.0
      },
      {
        "letter": "B",
        "text": "difteria;",
        "explanation": "A alternativa **B** está correta. O texto transcreve fielmente o capítulo de **difteria** (*Corynebacterium diphtheriae*) do **Guia de Vigilância em Saúde (Ministério da Saúde)**: **placas pseudomembranosas branco-acinzentadas fortemente aderentes** em amígdalas/faringe/laringe, febre baixa com **prostração desproporcional**, **pescoço taurino** (linfadenopatia cervical volumosa + edema periganglionar) e risco de **obstrução aguda de vias aéreas** (além de miocardite e neurite pela exotoxina), sendo prevenível pelas vacinas pentavalente/DTP/dT.",
        "communityPct": 64.0
      },
      {
        "letter": "C",
        "text": "faringo-amigdalite por estreptococo;",
        "explanation": "Incorreta: Faringoamigdalite estreptocócica cursa com odinofagia intensa, febre alta e exsudato purulento facilmente removível sem sangramento ou pescoço taurino.",
        "communityPct": 9.0
      },
      {
        "letter": "D",
        "text": "sífilis;",
        "explanation": "Incorreta: Sífilis não é imunoprevenível por vacina e não cursa com placas pseudomembranosas faríngeas obstrutivas.",
        "communityPct": 9.0
      },
      {
        "letter": "E",
        "text": "sarampo.",
        "explanation": "Incorreta: Sarampo cursa com febre alta, tosse, coriza, conjuntivite, manchas de Koplik e exantema maculopapular craniocaudal, não pescoço taurino com pseudomembranas.",
        "communityPct": 9.0
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1000,
    "taxaAcertoGlobal": 64.0,
    "comentarioGeral": "A alternativa **B** está correta. O texto transcreve fielmente o capítulo de **difteria** (*Corynebacterium diphtheriae*) do **Guia de Vigilância em Saúde (Ministério da Saúde)**: **placas pseudomembranosas branco-acinzentadas fortemente aderentes** em amígdalas/faringe/laringe, febre baixa com **prostração desproporcional**, **pescoço taurino** (linfadenopatia cervical volumosa + edema periganglionar) e risco de **obstrução aguda de vias aéreas** (além de miocardite e neurite pela exotoxina), sendo prevenível pelas vacinas pentavalente/DTP/dT.\n- **A) Incorreta:** VSR causa bronquiolite viral aguda e IVAS em lactentes, sem pseudomembranas aderentes nem pescoço taurino.\n- **C) Incorreta:** Faringoamigdalite estreptocócica cursa com odinofagia intensa, febre alta e exsudato purulento facilmente removível sem sangramento ou pescoço taurino.\n- **D) Incorreta:** Sífilis não é imunoprevenível por vacina e não cursa com placas pseudomembranosas faríngeas obstrutivas.\n- **E) Incorreta:** Sarampo cursa com febre alta, tosse, coriza, conjuntivite, manchas de Koplik e exantema maculopapular craniocaudal, não pescoço taurino com pseudomembranas.",
    "perolaClinica": "O texto transcreve fielmente o capítulo de **difteria** (*Corynebacterium diphtheriae*) do **Guia de Vigilância em Saúde (Ministério da Saúde)**: **placas pseudomembranosas branco-acinzentadas fortemente aderentes** em a",
    "referencias": [
      "ENARE 2024/2025 — Acesso Direto Tipo 1 Outubro/2024 (FGV Conhecimento / EBSERH — Gabarito Definitivo Oficial)"
    ],
    "sourceBatch": "enare-2024-tipo-1"
  }
];
