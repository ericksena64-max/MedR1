import type { MedicalQuestion } from '../types/medical';

/**
 * Prova completa UEPA 2024 — Acesso Direto (100 questões: 98 válidas + 2 anuladas comentadas).
 * Gerado a partir de data/provas/uepa-2024.md / data/provas/uepa-2024.jsonl.
 */
export const UEPA_2024_QUESTIONS: MedicalQuestion[] = [
  {
    "id": "q-uepa-2024-001",
    "code": "Q-UEPA24-0001",
    "numeroOriginal": 1,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Sanitária, Ambiental e Saúde Planetária",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-sanitaria-ambiental-e-saude-planetaria",
    "tags": ["vigilancia-sanitaria","risco-social","alimento-vencido"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Carlos foi ao supermercado e encontrou caixas de leite líquido já vencido. Conhecedor dos diversos riscos à saúde que são áreas de atuação da Vigilância Sanitária procedeu a denúncia a fim de que esse risco fosse eliminado. O risco à saúde da população denunciado por Carlos refere-se a risco:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ocupacional",
        "explanation": "Incorreta: Risco ocupacional refere-se aos agravos relacionados ao processo e ambiente de trabalho.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "institucional",
        "explanation": "Incorreta: Risco institucional relaciona-se a estabelecimentos coletivos (creches, escolas, asilos, presídios) e suas condições estruturais/sanitárias internas.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "ambiental",
        "explanation": "Incorreta: Risco ambiental diz respeito à poluição da água, ar, solo, vetores e resíduos no meio ambiente.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "social",
        "explanation": "A alternativa **D** está correta. Na classificação didática dos riscos sob atuação da **Vigilância Sanitária (ANVISA / Ministério da Saúde)** — ambiental, ocupacional, iatrogênico, institucional e **social** —, o **risco social** abrange danos decorrentes da produção, circulação e comercialização de bens de consumo e serviços destinados à população (como alimentos vencidos ou impróprios para consumo em supermercados).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "iatrogênico",
        "explanation": "Incorreta: Risco iatrogênico decorre de intervenções assistenciais de saúde (medicamentos, procedimentos médicos, infecções relacionadas à assistência).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Na classificação didática dos riscos sob atuação da **Vigilância Sanitária (ANVISA / Ministério da Saúde)** — ambiental, ocupacional, iatrogênico, institucional e **social** —, o **risco social** abrange danos decorrentes da produção, circulação e comercialização de bens de consumo e serviços destinados à população (como alimentos vencidos ou impróprios para consumo em supermercados).\n- **A) Incorreta:** Risco ocupacional refere-se aos agravos relacionados ao processo e ambiente de trabalho.\n- **B) Incorreta:** Risco institucional relaciona-se a estabelecimentos coletivos (creches, escolas, asilos, presídios) e suas condições estruturais/sanitárias internas.\n- **C) Incorreta:** Risco ambiental diz respeito à poluição da água, ar, solo, vetores e resíduos no meio ambiente.\n- **E) Incorreta:** Risco iatrogênico decorre de intervenções assistenciais de saúde (medicamentos, procedimentos médicos, infecções relacionadas à assistência).",
    "perolaClinica": "A alternativa **D** está correta. Na classificação didática dos riscos sob atuação da **Vigilância Sanitária (ANVISA / Ministério da Saúde)** — ambiental, ocupacional, iatrogênico, institucional e **social** —, o **risco social** abrange danos decorrentes da…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-002",
    "code": "Q-UEPA24-0002",
    "numeroOriginal": 2,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": ["vigilancia-do-obito","obito-materno","obito-fetal","sim"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A vigilância do óbito materno, infantil e fetal utiliza estratégias a fim de reduzir a subnotificação e subregistro desses óbitos, assim como melhor identificar a causa básica do óbito, a fim de possibilitar a formulação de políticas direcionadas para a redução desses agravos. A alternativa que indica estratégias que dizem respeito a esse tipo de vigilância é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "os hospitais que integram a rede de serviços assistenciais do SUS, devem realizar por meio do rastreio semanal os óbitos ocorridos ou atestados em suas dependências, e garantir o envio da via branca da Declaração de Óbito em até 30 dias para o Ministério da Saúde.",
        "explanation": "Incorreta: A via branca da DO é encaminhada à **Secretaria Municipal de Saúde** (não diretamente ao Ministério da Saúde) e a notificação do óbito materno/infantil/fetal deve ocorrer em até **48 horas** (e conclusão da investigação em até 120 dias).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a busca ativa pelas Secretarias Municipais de Saúde de óbitos maternos e infantis, não notificados ao Sistema de Informação de Mortalidade (SIM) deve limitar-se aos óbitos ocorridos em mulheres na faixa etária de 15 a 49 anos de idade e de crianças menores que cinco anos.",
        "explanation": "Incorreta: A faixa etária da vigilância de óbito de mulheres em idade fértil (MIF) é **10 a 49 anos** (não 15 a 49), e o óbito infantil compreende menores de **1 ano** (não < 5 anos).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "uso rotineiro de vinculação de base de dados pelas Secretarias Municipais de Saúde entre o Sistema de Informação Ambulatorial (SIA), o Sistema de Informação Hospitalar (SIH) e o Serviço de Verificação de Óbito (SVO), pois neles há informação do desfecho do óbito.",
        "explanation": "Incorreta: O SIA não tem como foco principal o registro do desfecho de óbito (a vinculação clássica envolve SIM, SINASC e SIH).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "envolvimento de agentes com práticas e vínculo com a comunidade em seus territórios, como enfermeiras e médicos das unidades básicas de saúde e profissionais do serviço de vigilância epidemiológica da Secretaria Municipal de Saúde, em municípios onde há elevado subregistro de óbitos.",
        "explanation": "Incorreta: A busca ativa comunitária de subregistro de óbitos envolve sobretudo os **Agentes Comunitários de Saúde (ACS)**, cartórios, cemitérios e funerárias, não se restringindo a médicos/enfermeiros de UBS.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "investigação dos casos de óbitos fetais registrados nas Declarações de Óbito com mais de 22 semanas de gestação, ou peso igual ou superior a 500 gramas e/ou estatura igual ou superior a 25 centímetros, além de coletar dados da atenção recebida nos serviços de saúde, antes do óbito.",
        "explanation": "A alternativa **E** está correta. Segundo o **Manual de Vigilância do Óbito Infantil e Fetal** e a **Portaria GM/MS nº 72/2010**, a vigilância do óbito fetal investiga os óbitos com **idade gestacional ≥ 22 semanas, ou peso ≥ 500 g e/ou estatura ≥ 25 cm** registrados na Declaração de Óbito, analisando a linha de cuidado e a assistência pré-natal/hospitalar recebida para identificar evitabilidade e corrigir causas básicas.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Segundo o **Manual de Vigilância do Óbito Infantil e Fetal** e a **Portaria GM/MS nº 72/2010**, a vigilância do óbito fetal investiga os óbitos com **idade gestacional ≥ 22 semanas, ou peso ≥ 500 g e/ou estatura ≥ 25 cm** registrados na Declaração de Óbito, analisando a linha de cuidado e a assistência pré-natal/hospitalar recebida para identificar evitabilidade e corrigir causas básicas.\n- **A) Incorreta:** A via branca da DO é encaminhada à **Secretaria Municipal de Saúde** (não diretamente ao Ministério da Saúde) e a notificação do óbito materno/infantil/fetal deve ocorrer em até **48 horas** (e conclusão da investigação em até 120 dias).\n- **B) Incorreta:** A faixa etária da vigilância de óbito de mulheres em idade fértil (MIF) é **10 a 49 anos** (não 15 a 49), e o óbito infantil compreende menores de **1 ano** (não < 5 anos).\n- **C) Incorreta:** O SIA não tem como foco principal o registro do desfecho de óbito (a vinculação clássica envolve SIM, SINASC e SIH).\n- **D) Incorreta:** A busca ativa comunitária de subregistro de óbitos envolve sobretudo os **Agentes Comunitários de Saúde (ACS)**, cartórios, cemitérios e funerárias, não se restringindo a médicos/enfermeiros de UBS.",
    "perolaClinica": "A alternativa **E** está correta. Segundo o **Manual de Vigilância do Óbito Infantil e Fetal** e a **Portaria GM/MS nº 72/2010**, a vigilância do óbito fetal investiga os óbitos com **idade gestacional ≥ 22 semanas, ou peso ≥ 500 g e/ou estatura ≥ 25 cm**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-003",
    "code": "Q-UEPA24-0003",
    "numeroOriginal": 3,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Controle Social e Participação Popular",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-controle-social-e-participacao-popular",
    "tags": ["conselho-municipal-de-saude","cib","controle-social","sus"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Um Secretário Municipal de Saúde encaminha ao Estado a solicitação de apoio para aquisição de uma ambulância a fim de viabilizar atendimento à população da zona rural. Como o Estado demorou a responder sobre o financiamento do projeto, o secretário resolve solicitar o apoio diretamente ao Ministério da Saúde (MS). O MS devolve o projeto para o secretário recomendando que o mesmo deva seguir o fluxo estabelecido pelo Ministério. Sobre os encaminhamentos do projeto é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "o projeto precisa ser aprovado pelo Conselho Estadual de Saúde e se a resposta for negativa o secretário deve recorrer ao Ministério da Saúde.",
        "explanation": "Incorreta: O controle social de projeto municipal é o CMS, não o CES, e não há \"recurso direto\" ao MS pulando a CIB.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o projeto precisa ser aprovado no Conselho Municipal de Saúde e encaminhado à Comissão Intergestora Bipartite.",
        "explanation": "A alternativa **B** está correta. Pelo fluxo normativo de gestão interfederativa do SUS (**Lei nº 8.080/1990**, **Lei nº 8.142/1990** e **Decreto nº 7.508/2011**), um projeto de iniciativa municipal deve ser apreciado/aprovado pelo **Conselho Municipal de Saúde (CMS)** (controle social local) e pactuado com a gestão estadual no âmbito da **Comissão Intergestores Bipartite (CIB)** (foro de negociação entre Secretaria Estadual e COSEMS/municípios) antes de tramitar para financiamento federal.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "o projeto precisa ser aprovado no Conselho Estadual de Saúde e encaminhado à Comissão Intergestora Tripartite.",
        "explanation": "Incorreta: A CIT pactua normas e políticas entre União, Estados e Municípios em âmbito nacional, não projetos municipais isolados sem passagem pelo CMS/CIB.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "o projeto precisa ser aprovado no Conselho Municipal de Saúde e encaminhado à Comissão Intergestora Tripartite.",
        "explanation": "Incorreta: O encaminhamento após o CMS é à **CIB** (estadual-municipal), não diretamente à CIT.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "o projeto deve ser aprovado pela Câmara de Vereadores e depois pelo Conselho Municipal de Saúde e encaminhado ao Ministério da Saúde.",
        "explanation": "Incorreta: O fluxo do SUS não exige aprovação prévia pela Câmara de Vereadores para encaminhamento direto ao MS sem pactuação na CIB.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Pelo fluxo normativo de gestão interfederativa do SUS (**Lei nº 8.080/1990**, **Lei nº 8.142/1990** e **Decreto nº 7.508/2011**), um projeto de iniciativa municipal deve ser apreciado/aprovado pelo **Conselho Municipal de Saúde (CMS)** (controle social local) e pactuado com a gestão estadual no âmbito da **Comissão Intergestores Bipartite (CIB)** (foro de negociação entre Secretaria Estadual e COSEMS/municípios) antes de tramitar para financiamento federal.\n- **A) Incorreta:** O controle social de projeto municipal é o CMS, não o CES, e não há \"recurso direto\" ao MS pulando a CIB.\n- **C) Incorreta:** A CIT pactua normas e políticas entre União, Estados e Municípios em âmbito nacional, não projetos municipais isolados sem passagem pelo CMS/CIB.\n- **D) Incorreta:** O encaminhamento após o CMS é à **CIB** (estadual-municipal), não diretamente à CIT.\n- **E) Incorreta:** O fluxo do SUS não exige aprovação prévia pela Câmara de Vereadores para encaminhamento direto ao MS sem pactuação na CIB.",
    "perolaClinica": "A alternativa **B** está correta. Pelo fluxo normativo de gestão interfederativa do SUS (**Lei nº 8.080/1990**, **Lei nº 8.142/1990** e **Decreto nº 7.508/2011**), um projeto de iniciativa municipal deve ser apreciado/aprovado pelo **Conselho Municipal de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-004",
    "code": "Q-UEPA24-0004",
    "numeroOriginal": 4,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "História, Princípios e Leis Orgânicas do SUS",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-historia-principios-e-leis-organicas-do-sus",
    "tags": ["lei-8080","corresponsabilidade","dever-do-estado"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma cidade com 30.000 habitantes sofre uma epidemia de uma doença de transmissão respiratória. O elevado número de casos leva ao colapso da Rede de Serviços de Saúde do município, por isso houve determinação do uso de máscaras e do isolamento social por decreto municipal. É correto afirmar que as medidas estabelecidas pela Secretaria de Saúde e Prefeitura tem amparo:",
    "alternativas": [
      {
        "letter": "A",
        "text": "no princípio da universalidade da atenção à saúde, uma vez que todos indistintamente passam a ser responsáveis pela redução da epidemia.",
        "explanation": "Incorreta: Universalidade refere-se ao direito de acesso de todos os cidadãos aos serviços de saúde, não à corresponsabilidade sanitária de empresas e famílias.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "no princípio organizacional do SUS de regionalização e hierarquização da assistência com o cuidado centrado na pessoa.",
        "explanation": "Incorreta: Regionalização e hierarquização dizem respeito à organização territorial e por níveis de complexidade da rede assistencial.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "na lei orgânica da saúde, a qual estabelece a corresponsabilidade da saúde ao indivíduo, à família, às empresas e à comunidade.",
        "explanation": "A alternativa **C** está correta. O **art. 2º, § 2º da Lei nº 8.080/1990 (Lei Orgânica da Saúde)** estabelece expressamente que *\"O dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade\"*, fundamentando juridicamente a **corresponsabilidade sanitária** em medidas coletivas de contenção epidêmica (como uso de máscaras e isolamento social).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "na lei orgânica da saúde que estabelece os princípios doutrinários como a equidade e organizacionais como a participação da comunidade.",
        "explanation": "Incorreta: Equidade não consta literalmente no rol do art. 7º da Lei 8.080/1990 (é princípio doutrinário consolidado a partir da igualdade), e não fundamenta especificamente a obrigatoriedade sanitária individual/empresarial.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "nos princípios doutrinários da integralidade da atenção, da regionalização e da participação da comunidade.",
        "explanation": "Incorreta: Regionalização e participação da comunidade são diretrizes **organizacionais**, não princípios doutrinários.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. O **art. 2º, § 2º da Lei nº 8.080/1990 (Lei Orgânica da Saúde)** estabelece expressamente que *\"O dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade\"*, fundamentando juridicamente a **corresponsabilidade sanitária** em medidas coletivas de contenção epidêmica (como uso de máscaras e isolamento social).\n- **A) Incorreta:** Universalidade refere-se ao direito de acesso de todos os cidadãos aos serviços de saúde, não à corresponsabilidade sanitária de empresas e famílias.\n- **B) Incorreta:** Regionalização e hierarquização dizem respeito à organização territorial e por níveis de complexidade da rede assistencial.\n- **D) Incorreta:** Equidade não consta literalmente no rol do art. 7º da Lei 8.080/1990 (é princípio doutrinário consolidado a partir da igualdade), e não fundamenta especificamente a obrigatoriedade sanitária individual/empresarial.\n- **E) Incorreta:** Regionalização e participação da comunidade são diretrizes **organizacionais**, não princípios doutrinários.",
    "perolaClinica": "A alternativa **C** está correta. O **art. 2º, § 2º da Lei nº 8.080/1990 (Lei Orgânica da Saúde)** estabelece expressamente que *\"O dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade\"*, fundamentando juridicamente a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-005",
    "code": "Q-UEPA24-0005",
    "numeroOriginal": 5,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Atenção Primária à Saúde e ESF",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-atencao-primaria-a-saude-e-esf",
    "tags": ["pnab","atencao-primaria","longitudinalidade","coordenacao-do-cuidado"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Considerando a Política Nacional de Atenção Básica (PNAB), a qual estabelece as diretrizes para a organização e funcionamento da rede de atenção à saúde, associe as colunas abaixo:\n1. Cuidado construído com as pessoas, de acordo com suas necessidades e potencialidades para gerir e tomar decisões embasadas sobre sua própria saúde e seu cuidado de saúde de forma mais efetiva.\n2. Reforça o uso de diferentes tecnologias de cuidado individual e coletivo, por meio de uma clínica ampliada capaz de construir vínculos positivos e intervenções clínicas efetivas, centradas na pessoa.\n3. Dá conformação à continuidade da relação de cuidado, com construção de vínculo e responsabilização entre profissionais e usuários ao longo do tempo.\n4. Atua como o centro de comunicação entre os diversos pontos da Rede de Atenção à Saúde (RAS), além de articular com estruturas intersetoriais, públicas, comunitárias e sociais.\n5. Reconhece e organiza as necessidades de saúde da população sob sua responsabilidade, em relação aos outros pontos de atenção à saúde, contribuindo com o planejamento das ações e com a programação dos serviços de saúde.\n\nI. Longitudinalidade do cuidado.\nII. Coordenação do cuidado.\nIII. Cuidado Centrado na Pessoa.\nIV. Ordena as redes.\nV. Resolutividade.\n\nA sequência correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "1-III, 2-V, 3-I, 4-II, 5-IV",
        "explanation": "A alternativa **A** está correta. Reproduz textualmente as definições das diretrizes da **PNAB (Portaria GM/MS nº 2.436/2017, art. 3º)**:",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "1-II, 2-I, 3-V, 4-III, 5-IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "1-III, 2-II, 3-IV, 4-V, 5-I",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "1-II, 2-I, 3-III, 4-IV, 5-V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "1-III, 2-I, 3-II, 4-V, 5-IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Reproduz textualmente as definições das diretrizes da **PNAB (Portaria GM/MS nº 2.436/2017, art. 3º)**:\n- **1-III (Cuidado Centrado na Pessoa):** construído com as pessoas, respeitando necessidades e autonomia para tomada de decisões.\n- **2-V (Resolutividade):** uso de diferentes tecnologias e clínica ampliada para intervenções clínicas efetivas.\n- **3-I (Longitudinalidade do cuidado):** continuidade da relação de cuidado, vínculo e responsabilização ao longo do tempo.\n- **4-II (Coordenação do cuidado):** centro de comunicação entre os pontos da RAS e articulação intersetorial.\n- **5-IV (Ordenação da rede):** reconhece e organiza as necessidades de saúde da população em relação aos demais pontos de atenção.\n- **B, C, D e E) Incorretas:** Invertem as associações literais da Portaria GM/MS nº 2.436/2017.",
    "perolaClinica": "A alternativa **A** está correta. Reproduz textualmente as definições das diretrizes da **PNAB (Portaria GM/MS nº 2.436/2017, art.",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-006",
    "code": "Q-UEPA24-0006",
    "numeroOriginal": 6,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Indicadores de Saúde e Transição Epidemiológica",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-indicadores-de-saude-e-transicao-epidemiologica",
    "tags": ["transicao-epidemiologica","transicao-nutricional","obesidade","sedentarismo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O envelhecimento, a urbanização, as mudanças sociais e econômicas e a globalização impactaram no modo de viver, trabalhar e se alimentar dos brasileiros, o que tem como consequência:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aumento da carga de adoecimento por doenças transmissíveis.",
        "explanation": "Incorreta: A carga proporcional de doenças transmissíveis diminuiu significativamente ao longo das últimas décadas (apesar da persistência/reemergência de algumas endemias — tripla carga).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "aumento da prevalência de adoecimentos em mulheres, jovens e crianças.",
        "explanation": "Incorreta: O envelhecimento populacional concentra a maior carga de morbimortalidade crônica em adultos mais velhos e idosos.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "redução da carga de morbidade por doenças crônico degenerativas nos idosos.",
        "explanation": "Incorreta: Ocorre **aumento** (e não redução) da morbidade por doenças crônico-degenerativas nos idosos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "aumento da prevalência de fatores de risco para obesidade e sedentarismo.",
        "explanation": "A alternativa **D** está correta. O processo de **transição demográfica, epidemiológica e nutricional** no Brasil — impulsionado pela urbanização acelerada, envelhecimento populacional e consumo de alimentos ultraprocessados — resultou no predomínio das **Doenças Crônicas Não Transmissíveis (DCNT)** e no **aumento expressivo de fatores de risco como obesidade, sobrepeso e sedentarismo** (Plano de Ações Estratégicas para o Enfrentamento das DCNT — Ministério da Saúde / VIGITEL).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "aumento da incidência das doenças imunopreveniveis .",
        "explanation": "Incorreta: O PNI reduziu drasticamente a incidência de doenças imunopreveníveis.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. O processo de **transição demográfica, epidemiológica e nutricional** no Brasil — impulsionado pela urbanização acelerada, envelhecimento populacional e consumo de alimentos ultraprocessados — resultou no predomínio das **Doenças Crônicas Não Transmissíveis (DCNT)** e no **aumento expressivo de fatores de risco como obesidade, sobrepeso e sedentarismo** (Plano de Ações Estratégicas para o Enfrentamento das DCNT — Ministério da Saúde / VIGITEL).\n- **A) Incorreta:** A carga proporcional de doenças transmissíveis diminuiu significativamente ao longo das últimas décadas (apesar da persistência/reemergência de algumas endemias — tripla carga).\n- **B) Incorreta:** O envelhecimento populacional concentra a maior carga de morbimortalidade crônica em adultos mais velhos e idosos.\n- **C) Incorreta:** Ocorre **aumento** (e não redução) da morbidade por doenças crônico-degenerativas nos idosos.\n- **E) Incorreta:** O PNI reduziu drasticamente a incidência de doenças imunopreveníveis.",
    "perolaClinica": "A alternativa **D** está correta. O processo de **transição demográfica, epidemiológica e nutricional** no Brasil — impulsionado pela urbanização acelerada, envelhecimento populacional e consumo de alimentos ultraprocessados — resultou no predomínio das…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-007",
    "code": "Q-UEPA24-0007",
    "numeroOriginal": 7,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Calendário Nacional de Vacinação - PNI",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-calendario-nacional-de-vacinacao-pni",
    "tags": ["atraso-vacinal","pni","pentavalente","calendario-vacinal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Carla hoje completa 7 meses de idade e veio à consulta de puericultura na UBS trazida pela sua mãe. Seu cartão de vacinação tem registro das vacinas, em dia, até os 3 meses de vida. Para atualização do calendário vacinal dessa criança, considerando que a oportunidade de vacinar não deve ser perdida, deverá ser prescrita, corretamente, a administração das seguintes vacinas segundo o calendário vacinal de 2022 do Ministério da Saúde:",
    "alternativas": [
      {
        "letter": "A",
        "text": "terceira dose das vacinas Pentavalente, da inativada contra Poliomielite e a segunda dose das vacinas contra Rotavírus Humano, Pneumocócica 10 e Meningocócica C.",
        "explanation": "Incorreta: A criança ainda não recebeu a 2ª dose de Pentavalente e VIP (não se pula para a 3ª dose).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "segunda dose das vacinas Pentavalente, da inativada contra Poliomielite, da Pneumocócica 10, da Meningocócica C e da vacina oral contra o Rotavírus Humano.",
        "explanation": "A alternativa **B** está correta. Se a criança está com vacinas **em dia até os 3 meses**, ela já recebeu as **1ªs doses** de Pentavalente, VIP, Pneumocócica 10 e VORH (aos 2 meses) e a **1ª dose** de Meningocócica C (aos 3 meses). Portanto, aos **7 meses completos**, estão em atraso e devem ser aplicadas imediatamente as **segundas doses (D2)** de **Pentavalente, VIP, Pneumocócica 10, Meningocócica C e VORH** (pelo calendário PNI 2022, a idade máxima para a 2ª dose da VORH é **7 meses e 29 dias**, podendo ainda ser administrada aos 7 meses completos).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "primeira dose das vacinas Pentavalente, contra Hepatite A , da Pneumocócica 23, da Meningocócica C e da tetra viral.",
        "explanation": "Incorreta: Hepatite A e Tetraviral são aplicadas a partir de 12–15 meses, e Pneumo 23 não integra o calendário básico de rotina de lactentes hígidos.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "terceira dose das vacinas Pentavalente, vacina oral contra Poliomielite, primeira dose da vacina contra febre amarela, Pneumocócica 10 e oral contra o Rotavírus Humano.",
        "explanation": "Incorreta: Febre amarela é aplicada aos 9 meses, e VOP não era utilizada no esquema primário de 2–6 meses (e sim VIP).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "primeira dose da vacina Tetraviral, a terceira dose da vacina anti-hepatite B e da vacina anti-amarílica e reforço da MeningoC.",
        "explanation": "Incorreta: Tetraviral, reforço de Meningo C e febre amarela não correspondem à atualização de 7 meses.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Se a criança está com vacinas **em dia até os 3 meses**, ela já recebeu as **1ªs doses** de Pentavalente, VIP, Pneumocócica 10 e VORH (aos 2 meses) e a **1ª dose** de Meningocócica C (aos 3 meses). Portanto, aos **7 meses completos**, estão em atraso e devem ser aplicadas imediatamente as **segundas doses (D2)** de **Pentavalente, VIP, Pneumocócica 10, Meningocócica C e VORH** (pelo calendário PNI 2022, a idade máxima para a 2ª dose da VORH é **7 meses e 29 dias**, podendo ainda ser administrada aos 7 meses completos).\n- **A) Incorreta:** A criança ainda não recebeu a 2ª dose de Pentavalente e VIP (não se pula para a 3ª dose).\n- **C) Incorreta:** Hepatite A e Tetraviral são aplicadas a partir de 12–15 meses, e Pneumo 23 não integra o calendário básico de rotina de lactentes hígidos.\n- **D) Incorreta:** Febre amarela é aplicada aos 9 meses, e VOP não era utilizada no esquema primário de 2–6 meses (e sim VIP).\n- **E) Incorreta:** Tetraviral, reforço de Meningo C e febre amarela não correspondem à atualização de 7 meses.",
    "perolaClinica": "A alternativa **B** está correta. Se a criança está com vacinas **em dia até os 3 meses**, ela já recebeu as **1ªs doses** de Pentavalente, VIP, Pneumocócica 10 e VORH (aos 2 meses) e a **1ª dose** de Meningocócica C (aos 3 meses). Portanto, aos **7 meses…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-008",
    "code": "Q-UEPA24-0008",
    "numeroOriginal": 8,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Vieses, Confundimento e Bioestatística",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-vieses-confundimento-e-bioestatistica",
    "tags": ["erro-sistematico","erro-aleatorio","validade-de-estudo","vieses"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre estudos epidemiológicos, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "para que um estudo seja válido e forte, devemos evitar o erro sistemático relacionado ao desenho de estudo e o erro aleatório (o erro estatístico).",
        "explanation": "A alternativa **A** está correta. Em epidemiologia clínica (Fletcher / Gordis / Medronho), a qualidade e a validade interna de um estudo dependem do controle de dois tipos de erro: o **erro sistemático (viés)** — ligado a falhas no desenho, seleção, aferição ou confundimento — e o **erro aleatório (acaso/estatístico)** — minimizado pelo tamanho amostral adequado e avaliado por intervalos de confiança e valores de *p*.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "estudos de acurácia tem como objetivo verificar a capacidade de um teste “acertar” o diagnóstico. São descritivos e transversais.",
        "explanation": "Incorreta: Estudos de acurácia diagnóstica são **analíticos** (comparam teste índice vs. padrão-ouro), não meramente descritivos.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "um estudo de coorte concorrente foi proposto para verificar a associação entre ingestão de pimenta com síndrome do colon irritável. Ao final de dois anos de exposição a associação foi forte. Depois realizaram um estudo seccional que demonstrou fraca associação. O estudo seccional é hierarquicamente superior, portanto, conclui-se que a associação é fraca.",
        "explanation": "Incorreta: O estudo de **coorte** é hierarquicamente **superior** ao estudo seccional (transversal) para estabelecer causalidade e temporalidade.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "estudos ecológicos de prevalência são excelentes para gerar evidências clínicas de intervenção terapêutica.",
        "explanation": "Incorreta: Estudos ecológicos geram hipóteses em nível agregado (sujeitos à falácia ecológica); evidências de intervenção terapêutica exigem **ensaios clínicos randomizados**.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "para gerar evidências de prognóstico e servir de base para gerar evidências e recomendações, usamos recursos de epidemiologia descritiva, revisão sistemática de estudos de série de casos.",
        "explanation": "Incorreta: Evidências de **prognóstico** são geradas principalmente por **estudos de coorte** (e suas revisões sistemáticas), não por séries de casos descritivas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Em epidemiologia clínica (Fletcher / Gordis / Medronho), a qualidade e a validade interna de um estudo dependem do controle de dois tipos de erro: o **erro sistemático (viés)** — ligado a falhas no desenho, seleção, aferição ou confundimento — e o **erro aleatório (acaso/estatístico)** — minimizado pelo tamanho amostral adequado e avaliado por intervalos de confiança e valores de *p*.\n- **B) Incorreta:** Estudos de acurácia diagnóstica são **analíticos** (comparam teste índice vs. padrão-ouro), não meramente descritivos.\n- **C) Incorreta:** O estudo de **coorte** é hierarquicamente **superior** ao estudo seccional (transversal) para estabelecer causalidade e temporalidade.\n- **D) Incorreta:** Estudos ecológicos geram hipóteses em nível agregado (sujeitos à falácia ecológica); evidências de intervenção terapêutica exigem **ensaios clínicos randomizados**.\n- **E) Incorreta:** Evidências de **prognóstico** são geradas principalmente por **estudos de coorte** (e suas revisões sistemáticas), não por séries de casos descritivas.",
    "perolaClinica": "A alternativa **A** está correta. Em epidemiologia clínica (Fletcher / Gordis / Medronho), a qualidade e a validade interna de um estudo dependem do controle de dois tipos de erro: o **erro sistemático (viés)** — ligado a falhas no desenho, seleção, aferição…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-009",
    "code": "Q-UEPA24-0009",
    "numeroOriginal": 9,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": ["tuberculose-pulmonar","populacao-em-situacao-de-rua","aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Ronildo, 37 anos, proveniente do interior do Pará, mudou-se para Belém há 5 anos, residindo em um kitnet que alugava em um bairro popular de Belém. Com a pandemia, em 2020, perdeu o emprego e passou a viver em situação de rua, no mesmo bairro. Uma senhora da vizinhança o auxilia com alimentos e pequenos valores às vezes, enquanto ele presta serviços de limpeza na frente de sua casa, que costuma ser um ponto de acúmulo de lixo irregular. Ela percebeu que ele vinha perdendo peso e apresentava tosse contínua, insistindo que ele fosse à unidade de saúde do bairro por várias vezes. Ronildo finalmente procurou a UBS, relatando ao médico da família e comunidade tosse seca há 5 semanas, agravada nos últimos dias, perda de peso mas não soube informar em quantos quilos, febre vespertina baixa, diminuição da disposição e força para os pequenos serviços que costumava fazer em troca de alimentos ou dinheiro. Refere que há 9 anos é etilista crônico, com episódios de mudança de comportamento, o que colocou como uma das razões para o término do seu relacionamento e à sua condição de morador de rua. Afirma nunca ter sido usuário de drogas exceto o consumo de álcool e uso irregular de cigarro. Nega pneumopatias no passado e que não tem contatos familiares há cerca de 3 anos. Ao exame físico: regular estado geral, tossindo muito, um pouco emagrecido, orientado e cooperativo ao exame. Hidratado, hipocorado (++/4), eupneico, acianótico, anictérico. Ausculta pulmonar com diminuição do murmúrio vesicular. Com base no caso clinico acima, analise as afirmativas abaixo:\nI. Pessoas em situação de rua tem maior risco de adoecimento por tuberculose, sendo considerada população vulnerável e prioritária para investigação e tratamento.\nII. O teste rápido molecular (TRM-TB) com cultura com teste de sensibilidade, em pacientes adultos expectorantes, é o exame diagnóstico de escolha para a tuberculose pulmonar quando este está disponível, em conjunto com radiografia de tórax.\nIII. Para a população de rua, é fundamental oferecer testagem para HIV, hepatites virais e sífilis, com acolhimento e informação sobre a importância desses testes.\nIV. É essencial para a população de rua a imediata abstinência do consumo de álcool e drogas para a efetividade do tratamento.\nV. O Tratamento Diretamente Observado (TDO) é responsabilidade das equipes de Consultório na Rua, necessitando seu acionamento para que seja implementado.\nVI. A busca ativa de sintomáticos respiratórios em pessoas em situação de rua só é realizada com mais de 2 semanas de duração de tosse.\nVII. Estratégias de acolhimento, abordagem e referenciamento à rede de assistência social e psicosocial, quando necessários, são importantes para uma melhor adesão e sucesso do tratamento.\nVIII. A utilização de Projeto Terapêutico Singular, entre outras estratégias individuais e coletivas, pode ser utilizada no tratamento e acompanhamento do paciente com tuberculose, exclusivamente pelas equipes de saúde da família.\n\nA alternativa que contém todas as afirmativas corretas, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, II, IV, V, VI e VII",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "I, III, IV, VII e VIII",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, II, III, IV e VII",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I, II, III, VI e VII",
        "explanation": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2024** (**I, II, III, VI e VII**).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "I, II, III, VI, VII e VIII",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2024** (**I, II, III, VI e VII**).\n- **I, II, III e VII (Corretas):** Conforme o **Manual de Recomendações para o Controle da Tuberculose no Brasil (MS)**, a população em situação de rua (PSR) tem risco ~56× maior de TB; o TRM-TB associado à cultura com TS (obrigatória em populações vulneráveis) e radiografia de tórax é a propedêutica de escolha; deve-se ofertar testagem para HIV, sífilis e hepatites; e o suporte intersetorial (SUAS/RAPS) é fundamental para adesão.\n- **IV (Incorreta):** Não se exige abstinência imediata de álcool/drogas como condição para iniciar ou efetivar o tratamento da TB (adota-se redução de danos).\n- **V (Incorreta):** O TDO é responsabilidade de toda a APS/UBS que acompanha o paciente, podendo ser compartilhado com o Consultório na Rua (não exclusivo dele).\n- **VI (Ressalva didática):** Na prática atual do Manual do MS, recomenda-se investigar TB em PSR com **qualquer duração de tosse** (e não apenas > 2 semanas); contudo, a banca manteve **D** como gabarito oficial por exclusão das demais alternativas (todas contêm IV, V ou VIII).\n- **VIII (Incorreta):** O PTS não é exclusivo das equipes de Saúde da Família, sendo ferramenta multiprofissional de toda a rede (CAPS, Consultório na Rua, ambulatórios).",
    "perolaClinica": "A alternativa **D** é o **gabarito oficial definitivo da UEPA 2024** (**I, II, III, VI e",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-010",
    "code": "Q-UEPA24-0010",
    "numeroOriginal": 10,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": ["raps","saude-mental","reforma-psiquiatrica","aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre os cuidados em saúde mental, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Na atenção básica do Brasil, a RAPS está presente: nas UBS, no NASF vinculado à UBS, no apoio aos serviços do componente atenção residencial de caráter transitório, consultórios de rua e nos centros de convivência e cultura.",
        "explanation": "A alternativa **A** está correta. De acordo com a **Portaria GM/MS nº 3.088/2011** (instituição da **Rede de Atenção Psicossocial — RAPS**), o componente **Atenção Básica em Saúde** da RAPS inclui: **Unidade Básica de Saúde (UBS)**, **Núcleo de Apoio à Saúde da Família (NASF)**, **Consultório na Rua**, **apoio aos serviços do componente Atenção Residencial de Caráter Transitório** e **Centros de Convivência e Cultura**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "No contexto da reforma psiquiátrica, a política de saúde mental busca consolidar um modelo aberto e de base comunitária. A rede é composta por equipamentos e serviços, exceto os leitos de atenção integral nos hospitais gerais e Caps III.",
        "explanation": "Incorreta: Tanto os **leitos de saúde mental em hospital geral** quanto o **CAPS III** (funcionamento 24h) **fazem parte** da RAPS.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O manual DSM elaborado pela American Psiquiatry Association, se propõe a servir como um guia prático, funcional e flexível para organizar informações que podem auxiliar o diagnóstico preciso e tratamento de transtornos mentais. Porém está em desacordo com o CID-11 da OMS, o que dificulta a assistência à saúde mental, na prática.",
        "explanation": "Incorreta: O DSM-5 e a CID-11 foram elaborados em processo de **harmonização** conceitual e diagnóstica, não estando em desacordo impeditivo na prática.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Priscila tem 22 anos e tem diagnóstico de transtorno bipolar. Faz tratamento há 3 anos com lítio. Está estabilizada porém não é recomendado que seja tratada na UBS. Não há psiquiatra nem a medicação faz parte do padrão.",
        "explanation": "Incorreta: Paciente estável com transtorno bipolar em uso de lítio (que consta na RENAME/CBAF) pode e deve manter seguimento longitudinal compartilhado na UBS.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "D. Joana, 65 anos, tem diagnóstico de depressão e neuropatia hansênica. Iniciou 75 mg de amitriptilina ao dia há anos. Ultimamente tem tido muito sono e fraqueza, palpitação e cefaleia. O novo médico da UBS conversou sobre a mudança do medicamento alegando que não é recomendado pra idosos. O médico responsável retornou e manteve a droga, considerando que o benefício supera o risco.",
        "explanation": "Incorreta: Amitriptilina é medicamento potencialmente inapropriado em idosos (**Critérios de Beers**) pelos fortes efeitos anticolinérgicos, sedação e cardiotoxicidade (palpitações); diante de sinais claros de toxicidade, a manutenção contraria a segurança do paciente.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. De acordo com a **Portaria GM/MS nº 3.088/2011** (instituição da **Rede de Atenção Psicossocial — RAPS**), o componente **Atenção Básica em Saúde** da RAPS inclui: **Unidade Básica de Saúde (UBS)**, **Núcleo de Apoio à Saúde da Família (NASF)**, **Consultório na Rua**, **apoio aos serviços do componente Atenção Residencial de Caráter Transitório** e **Centros de Convivência e Cultura**.\n- **B) Incorreta:** Tanto os **leitos de saúde mental em hospital geral** quanto o **CAPS III** (funcionamento 24h) **fazem parte** da RAPS.\n- **C) Incorreta:** O DSM-5 e a CID-11 foram elaborados em processo de **harmonização** conceitual e diagnóstica, não estando em desacordo impeditivo na prática.\n- **D) Incorreta:** Paciente estável com transtorno bipolar em uso de lítio (que consta na RENAME/CBAF) pode e deve manter seguimento longitudinal compartilhado na UBS.\n- **E) Incorreta:** Amitriptilina é medicamento potencialmente inapropriado em idosos (**Critérios de Beers**) pelos fortes efeitos anticolinérgicos, sedação e cardiotoxicidade (palpitações); diante de sinais claros de toxicidade, a manutenção contraria a segurança do paciente.",
    "perolaClinica": "A alternativa **A** está correta. De acordo com a **Portaria GM/MS nº 3.088/2011** (instituição da **Rede de Atenção Psicossocial — RAPS**), o componente **Atenção Básica em Saúde** da RAPS inclui: **Unidade Básica de Saúde (UBS)**, **Núcleo de Apoio à Saúde…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-011",
    "code": "Q-UEPA24-0011",
    "numeroOriginal": 11,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "SUS, Políticas Públicas e Gestão em Saúde",
    "subtema": "Redes de Atenção à Saúde e Regulação",
    "temaSlug": "mp-sus",
    "subtemaSlug": "mp-sus-redes-de-atencao-a-saude-e-regulacao",
    "tags": ["saude-indigena","sasisus","pnaspi","sesai"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o texto abaixo para responder à questão 11.\n“Diante da crise de desassistência sanitária e nutricional constatada em território Yanomami, o Ministério da Saúde declarou, em 20 de janeiro de 2023, através da Portaria GM/MS nº 28, Emergência em Saúde Pública de Importância Nacional (Espin) na região e instituiu o Centro de Operações de Emergências em Saúde Pública (COE-Yanomami). O COE está sob coordenação da Secretaria de Saúde Indígena (Sesai) e terá a função de planejar, organizar e controlar medidas durante o período de emergência. Os Yanomamis ficam em uma localidade cercada por garimpo ilegal, onde existe um histórico de denúncias de violência contra os povos indígenas, além de registros de altas de taxas de desnutrição.”\n(Fonte: Ministério da Saúde: https://www.gov.br/saude/pt-br/composicao/svsa/resposta-a-emergencias/coes/coe-yanomami)\n\nCom relação à saúde indígena, julgue as afirmativas em Verdadeira ou Falsa.\n( ) As equipes de saúde dos distritos deverão ser compostas por médicos, enfermeiros, odontólogos, auxiliares de enfermagem e agentes indígenas de saúde, contando com a participação sistemática de antropólogos, educadores, engenheiros sanitaristas e outros especialistas e técnicos considerados necessários.\n( ) É diretriz da PNASP: organização dos serviços de atenção à saúde dos povos indígenas na forma de Distritos Sanitários Especiais e Pólos-Base, no nível local, onde a atenção primária e os serviços de referência se situam.\n( ) É responsablidade dos governos estaduais, através das secretarias estaduais de saúde (SES) a gestão direta dos Distritos Sanitários Especiais Indígenas (DSEIs).\n( ) O princípio que permeia todas as diretrizes da Política Nacional de Atenção à Saúde dos Povos Indígenas é o respeito às concepções, valores e práticas relativos ao processo saúde-doença próprios a cada sociedade indígena e a seus diversos especialistas.\n( ) Os Agentes Indígenas de Saúde, lotados e organizados pela gestão municipal nos Pólos Base Tipo II.\n\nA sequência correta de cima para baixo, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "V, V, V, V, F",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "F, V, V, V, V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "V, V, V, F, F",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "V, F, F, F, V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "V, V, F, V, F",
        "explanation": "A alternativa **E** está correta (**V, V, F, V, F**), segundo a **Lei Arouca (Lei nº 9.836/1999)** e a **Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI)**:",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta (**V, V, F, V, F**), segundo a **Lei Arouca (Lei nº 9.836/1999)** e a **Política Nacional de Atenção à Saúde dos Povos Indígenas (PNASPI)**:\n1. **(V)** As Equipes Multidisciplinares de Saúde Indígena (EMSI) incluem médicos, enfermeiros, odontólogos, técnicos/auxiliares e AIS, articuladas com antropólogos, sanitaristas e educadores.\n2. **(V)** A organização territorial do SasiSUS estrutura-se em **Distritos Sanitários Especiais Indígenas (DSEIs)** e **Polos-Base** no nível local.\n3. **(F)** A gestão direta dos DSEIs é de responsabilidade da **União (Ministério da Saúde, por meio da SESAI)** — e **não** das Secretarias Estaduais de Saúde.\n4. **(V)** A interculturalidade e o respeito às práticas tradicionais indígenas permeiam todas as diretrizes da PNASPI.\n5. **(F)** Os Agentes Indígenas de Saúde (AIS) atuam nas aldeias/unidades básicas indígenas vinculados à **SESAI/DSEI** (esfera federal), e não organizados pela gestão municipal nos Polos-Base Tipo II.\n- **A, B, C e D) Incorretas:** Apresentam sequências incompatíveis com a PNASPI e a gestão federal dos DSEIs.",
    "perolaClinica": "A alternativa **E** está correta (**V, V, F, V, F**), segundo a **Lei Arouca (Lei nº 9.836/1999)** e a **Política Nacional de Atenção à Saúde dos Povos Indígenas",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-012",
    "code": "Q-UEPA24-0012",
    "numeroOriginal": 12,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": ["medicina-baseada-em-evidencias","pico","sistema-grade","revisao-sistematica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A prática médica atual exige a incorporação da Medicina Baseada em Evidências (MBE). A MBE é definida como a integração das melhores evidências disponíveis na literatura científica, com a experiência clínica individual e as preferências das pessoas. Sobre MBE, analise as afirmativas abaixo.\nI. A estratégia PICO é utilizada para estudos de revisão sistemática, a fim de gerar evidências para perguntas clínicas bem definidas. As informações relevantes, são cotadas em relação aos bons desfechos clínicos, especialmente em relação ao tamanho do benefício versus o efeito adverso de uma intervenção clínica.\nII. A metanálise é o tipo de estudo secundário que inclue estudos clínicos primários e apresenta os recursos para corrigir os vieses de publicação e heterogeneidade de estudos.\nIII. O sistema GRADE (Grading of Recommendatons Assessment, Development and Evaluaton) é um sistema desenvolvido por um grupo colaborativo que visa à criação de um sistema universal, transparente e sensível para graduar a qualidade das evidências e a força das recomendações nas condutas.\nIV. Os guidelines, consensos, protocolos e diretrizes de sociedades médicas e instituições são baseados em estudos científicos bem conduzidos, especialmente estudos primários de ensaios clínicos e estudos de acurácia. São bem estruturados e objetivos e devem ser elaborados anualmente para manter profissionais de saúde atualizados.\n\nA alternativa que contém todas as afirmativas corretas, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I e II",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "I e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "II e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "II, III e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I e III",
        "explanation": "A alternativa **E** está correta (**I e III** são verdadeiras):",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta (**I e III** são verdadeiras):\n- **I. Correta:** O acrônimo **PICO** (Paciente/População, Intervenção, Comparador, *Outcome*/Desfecho) estrutura perguntas clínicas focadas para revisões sistemáticas, avaliando desfechos clinicamente relevantes (benefício vs. dano).\n- **II. Incorreta:** A metanálise pode **detectar/explorar** heterogeneidade (ex.: $I^2$) e viés de publicação (ex.: *funnel plot*), mas **não corrige nem elimina** vieses de publicação ou heterogeneidade estrutural dos estudos primários.\n- **III. Correta:** O sistema **GRADE** é o método internacional padronizado para classificar a certeza/qualidade da evidência (alta, moderada, baixa, muito baixa) e a força da recomendação (forte ou condicional/fraca).\n- **IV. Incorreta:** Nem toda diretriz/consenso é baseada apenas em ensaios clínicos (muitas incorporam revisões sistemáticas ou opiniões de especialistas quando faltam ECRs) e **não existe obrigatoriedade de atualização anual** de todos os guidelines.\n- **A, B, C e D) Incorretas:** Incluem as afirmativas falsas II ou IV.",
    "perolaClinica": "A alternativa **E** está correta (**I e III** são",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-013",
    "code": "Q-UEPA24-0013",
    "numeroOriginal": 13,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Estudos Epidemiológicos",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-estudos-epidemiologicos",
    "tags": ["sistema-grade","medicina-baseada-em-evidencias","aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "A.M.C., 47 anos, sexo feminino, comerciante, branca, casada, procurou atendimento na UBS Vila Nova em Bragança, Pará, onde reside há 6 anos. Relata que nos últimos anos evoluiu com visão escurecida, turva, com dificuldade de focar objetos, com prejuízo para atividades diárias como leitura, atividades laborais e direção veicular. Relata poliúria, com noctúria. PA em decúbito dorsal: 150x 90 mmHg, circunferência abdominal: 100cm, peso: 92kg, glicemia em jejum 134 mg/dL. Janaína a médica da UBS, considerou o diagnostico inicial de diabetes tipo 2, possível retinopatia diabética e síndrome metabólica. Atenta à medicina baseada em evidências para o melhor tratamento desta paciente, realiza as seguintes condutas (segundo o sistema GRADE para os consensos da literatura): refere a paciente para avaliação oftalmológica (recomendação moderada); indicação de exercício aeróbio como caminhada (forte recomendação) e prescreve metformina (forte recomendação) associação de dois anti-hipertensivos (recomendação moderada) Solicita exames complementares para avaliar a dislipidemia e risco cardiovascular e indicação da terapêutica específica( forte recomendação). Assinale a alternativa correta quanto à conduta da médica.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Conduta adequada. Decisões bem suportadas por recomendações fortes e moderadas. Novos estudos pouco mudarão os desfechos já encontrados em estudos de revisão sistemática. E o benefício ao paciente está bem estabelecido.",
        "explanation": "A alternativa **A** está correta. As condutas adotadas pela médica da UBS para paciente com DM2, HAS (150×90 mmHg), obesidade abdominal e sintomas visuais estão plenamente alinhadas às diretrizes clínicas (**SBD / SBC / Ministério da Saúde**) e sustentadas por evidências sólidas no sistema **GRADE** (alta/moderada certeza, em que o benefício clínico supera claramente os riscos e é improvável que novos estudos revertam a direção do efeito).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "É inadequada, pois o grau de recomendação do uso combinado de anti-hipertensivo é moderado, portanto gerado apenas por opinião de especialistas.",
        "explanation": "Incorreta: Evidência/recomendação moderada no GRADE não significa \"apenas opinião de especialistas\" (opinião isolada corresponde a certeza muito baixa).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Conduta não justificada. O grau de recomendação da metformina é alto, porém a médica deve aguardar o risco cardiovascular para iniciar tratamento medicamentoso e considerar o risco de atividade física. Outros estudos de revisão sistemática podem mudar essas recomendações.",
        "explanation": "Incorreta: Não se aguarda cálculo completo de risco CV para iniciar metformina e atividade física em paciente com DM2 sintomático.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Conduta incorreta. Os especialistas não recomendaram fortemente o uso de anti-hipertensivo combinado devido à estudos muito heterogêneos. No caso específico da paciente, haverá ônus com recomendação de exames complementares. Deveria se iniciar fibratos devido à obesidade e dislipidemia presuntiva.",
        "explanation": "Incorreta: Não se inicia fibrato empiricamente sem lipidograma (e o foco primário na dislipidemia diabética é LDL-c / estatina).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Conduta correta. Embora a forte recomendação não seja gerada por revisões sistemáticas no sistema GRADE, a recomendação gerada por estudos de metanálise. A recomendação moderada gerada por série de casos e opinião de especialista suporta a tomada de decisão do caso.",
        "explanation": "Incorreta: No sistema GRADE, revisões sistemáticas são justamente a base principal das recomendações fortes, e recomendação moderada não provém de séries de casos/opinião de especialistas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. As condutas adotadas pela médica da UBS para paciente com DM2, HAS (150×90 mmHg), obesidade abdominal e sintomas visuais estão plenamente alinhadas às diretrizes clínicas (**SBD / SBC / Ministério da Saúde**) e sustentadas por evidências sólidas no sistema **GRADE** (alta/moderada certeza, em que o benefício clínico supera claramente os riscos e é improvável que novos estudos revertam a direção do efeito).\n- **B) Incorreta:** Evidência/recomendação moderada no GRADE não significa \"apenas opinião de especialistas\" (opinião isolada corresponde a certeza muito baixa).\n- **C) Incorreta:** Não se aguarda cálculo completo de risco CV para iniciar metformina e atividade física em paciente com DM2 sintomático.\n- **D) Incorreta:** Não se inicia fibrato empiricamente sem lipidograma (e o foco primário na dislipidemia diabética é LDL-c / estatina).\n- **E) Incorreta:** No sistema GRADE, revisões sistemáticas são justamente a base principal das recomendações fortes, e recomendação moderada não provém de séries de casos/opinião de especialistas.",
    "perolaClinica": "A alternativa **A** está correta. As condutas adotadas pela médica da UBS para paciente com DM2, HAS (150×90 mmHg), obesidade abdominal e sintomas visuais estão plenamente alinhadas às diretrizes clínicas (**SBD / SBC / Ministério da Saúde**) e sustentadas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-014",
    "code": "Q-UEPA24-0014",
    "numeroOriginal": 14,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Medicina de Família e Comunidade",
    "subtema": "Prevenção Quaternária e Rastreamento Populacional",
    "temaSlug": "mp-mfc",
    "subtemaSlug": "mp-mfc-prevencao-quaternaria-e-rastreamento-populacional",
    "tags": ["prevencao-quaternaria","prevencao-terciaria","leavell-e-clark"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você está em atendimento em uma unidade básica de saúde, quando recebe no consultório paciente cadeirante por trauma de acidente de moto há nove anos, lesão em altura de T2, utiliza sonda vesical de demora, refere querer usar antibiótico de forma profilática para evitar ITU (Infecção do Tato Urinário), pois hoje refere grumos na sonda e ausência de febre ou dor, porém você orienta não haver evidências dos benefícios do uso profilático de antibiótico em pacientes com sonda urinaria, orientando o paciente sobre sinais de alarme da ITU. Além do quadro anterior, o paciente também relata que acompanhou uma palestra sobre complicações que pessoas que usam cadeiras de rodas de forma crônica, podem apresentar, sendo uma delas as escaras de pressão, como poderia fazer para evitá-las. Com base no quadro acima, a classificação dos níveis de prevenção citados, respectivamente são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Secundária e Terciária.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Quaternária e Secundária.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Quaternária e Terciária.",
        "explanation": "A alternativa **C** está correta (**Quaternária e Terciária**, respectivamente):",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Terciária e Secundária.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Terciária e Quaternária.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta (**Quaternária e Terciária**, respectivamente):\n1. **Prevenção Quaternária (Marc Jamoulle / WONCA):** proteger o paciente contra intervenções médicas excessivas, sem evidência científica e potencialmente iatrogênicas — aqui, evitar antibioticoprofilaxia desnecessária em bacteriúria assintomática de paciente sondado (evitando resistência bacteriana e efeitos adversos).\n2. **Prevenção Terciária (Leavell & Clark):** ações voltadas à reabilitação e **prevenção de complicações/incapacidades adicionais** em doença/lesão crônica já estabelecida (como prevenir lesões/escaras de pressão em paciente paraplégico cadeirante).\n- **A, B, D e E) Incorretas:** Prevenção secundária consiste em diagnóstico precoce e tratamento oportuno (rastreamento), o que não se aplica a nenhuma das duas situações descritas.",
    "perolaClinica": "A alternativa **C** está correta (**Quaternária e Terciária**,",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-015",
    "code": "Q-UEPA24-0015",
    "numeroOriginal": 15,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Epidemiologia e Bioestatística",
    "subtema": "Testes Diagnósticos e Tabela 2x2",
    "temaSlug": "mp-epidemio",
    "subtemaSlug": "mp-epidemio-testes-diagnosticos-e-tabela-2x2",
    "tags": ["tabela-2x2","especificidade","sensibilidade","vpp"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você está fazendo parte de um grupo de pesquisa clínica, que está estudando um novo exame laboratorial para diagnostico por amostra de sangue para Febre Amarela, usando um número de 500 pessoas, que habitam área endêmica com 250 casos já diagnosticados, tendo os seguintes dados: sensibilidade de 80%, valor preditivo positivo de 80%. O nível de especificidade do teste estudado é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "40%",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "50%",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "75%",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "80%",
        "explanation": "A alternativa **D** está correta (**80%**). Montando a tabela 2×2 com $N = 500$ indivíduos (250 doentes e 250 sadios):",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "85%",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta (**80%**). Montando a tabela 2×2 com $N = 500$ indivíduos (250 doentes e 250 sadios):\n- **Sensibilidade = 80%:** $VP = 0{,}80 \\times 250 = 200$ (e $FN = 50$).\n- **Valor Preditivo Positivo = 80%:** $VPP = \\frac{VP}{VP + FP} = 0{,}80 \\implies \\frac{200}{200 + FP} = 0{,}80 \\implies 200 + FP = 250 \\implies FP = 50$.\n- **Verdadeiros Negativos:** $VN = \\text{Sadios} - FP = 250 - 50 = 200$.\n- **Especificidade:** $E = \\frac{VN}{VN + FP} = \\frac{200}{250} = 0{,}80 = \\mathbf{80\\%}$ (Fletcher / Gordis).\n- **A, B, C e E) Incorretas:** Valores incompatíveis com a resolução da tabela 2×2.",
    "perolaClinica": "A alternativa **D** está correta (**80%**). Montando a tabela 2×2 com $N = 500$ indivíduos (250 doentes e 250",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-016",
    "code": "Q-UEPA24-0016",
    "numeroOriginal": 16,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Vigilância em Saúde",
    "subtema": "Vigilância Epidemiológica e Notificação Compulsória",
    "temaSlug": "mp-vigilancia",
    "subtemaSlug": "mp-vigilancia-vigilancia-epidemiologica-e-notificacao-compulsoria",
    "tags": ["notificacao-compulsoria","subnotificacao","vigilancia-epidemiologica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O processo de notificação de doenças tem importância crucial para gestão em saúde. Sobre o impacto da subnotificação de doenças, jugue as afirmativas abaixo em verdadeiras ou falsas.\n( ) A ausência de coordenação em saúde, para planejamento e organização de ações em saúde para agravos endêmicos, sobrecarrega níveis secundário e terciário de saúde.\n( ) A ausência de planejamento em saúde, para manejo de quadros endêmicos, sobrecarrega a rede do SUS.\n( ) A ausência de dados para alocação de recursos, e controle de doenças endêmicas de áreas especificas, não possui investimento em prevenção, a nível de atenção primaria.\n( ) A subnotificação de eventos, gera investimento em agravos comuns de todo território nacional, não respeitando as peculiaridades das regiões.\n( ) A subnotificação de eventos, impacta a coordenação em saúde, ou seja, os executores das ações do SUS ficam desassistidos de planejamento para agravos prevalentes.\n\nA sequência correta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "V,V,V,F,V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "V,F,V,V,V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "V,V,V,V,V",
        "explanation": "A alternativa **C** está correta (**V, V, V, V, V**). Todas as cinco assertivas descrevem consequências reais da **subnotificação no SINAN** (Guia de Vigilância em Saúde — Ministério da Saúde): sem dados epidemiológicos fidedignos sobre doenças endêmicas locais (como na Amazônia), há falha de planejamento e coordenação na APS, subfinanciamento de ações preventivas regionais, direcionamento homogêneo de recursos para agravos nacionais mais visíveis e consequente sobrecarga dos níveis secundário e terciário do SUS.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "V,V,V,V,F",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "F,V,V,V,V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta (**V, V, V, V, V**). Todas as cinco assertivas descrevem consequências reais da **subnotificação no SINAN** (Guia de Vigilância em Saúde — Ministério da Saúde): sem dados epidemiológicos fidedignos sobre doenças endêmicas locais (como na Amazônia), há falha de planejamento e coordenação na APS, subfinanciamento de ações preventivas regionais, direcionamento homogêneo de recursos para agravos nacionais mais visíveis e consequente sobrecarga dos níveis secundário e terciário do SUS.\n- **A, B, D e E) Incorretas:** Classificam indevidamente como falsa uma ou mais consequências diretas da subnotificação epidemiológica.",
    "perolaClinica": "A alternativa **C** está correta (**V, V, V, V, V**). Todas as cinco assertivas descrevem consequências reais da **subnotificação no SINAN** (Guia de Vigilância em Saúde — Ministério da Saúde): sem dados epidemiológicos fidedignos sobre doenças endêmicas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-017",
    "code": "Q-UEPA24-0017",
    "numeroOriginal": 17,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": ["sedacao-paliativa","meperidina","imao","cuidados-paliativos"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Fazendo visita domiciliar, você avalia um paciente com quadro de metástase óssea, em cuidado paliativo domiciliar, mesmo fazendo altas doses de morfina, o paciente apresenta o quadro doloroso, interferindo diretamente na sua qualidade de vida, assim, em comum acordo com a família, você iniciará sedação paliativa, mantendo conduta analgésica anterior. Sendo assim, a droga que deverá ser evitada neste caso de sedação paliativa é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Clopromazina, Haloperidol.",
        "explanation": "Incorreta: Neuropilépticos/antipsicóticos (clorpromazina, levomepromazina, haloperidol) são amplamente usados na sedação paliativa, especialmente quando há delirium refratário associado.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Midazolan, Diazepam ou Lorazepam.",
        "explanation": "Incorreta: Benzodiazepínicos (especialmente **midazolam**, primeira escolha) são a base da sedação paliativa.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Fenobarbital.",
        "explanation": "Incorreta: Fenobarbital é opção reconhecida de segunda/terceira linha na sedação paliativa refratária a midazolam.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Propofol ou Quetamina.",
        "explanation": "Incorreta: Propofol (em ambiente monitorizado) e cetamina (como adjuvante analgésico/sedativo) são opções de resgate em dor/sintomas refratários.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Meperidina com Tranilcipromina.",
        "explanation": "A alternativa **E** está correta. A associação **meperidina (petidina) + tranilcipromina (IMAO irreversível)** é **absolutamente contraindicada** pelo altíssimo risco de **síndrome serotoninérgica grave/fatal**, hipertermia, convulsões e colapso cardiovascular. Além disso, a **meperidina é proscrita em cuidados paliativos** pela OMS e ANCP devido ao acúmulo do metabólito neurotóxico normeperidina (que causa delírio, mioclonias e convulsões), além de **não** ser fármaco de sedação paliativa.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. A associação **meperidina (petidina) + tranilcipromina (IMAO irreversível)** é **absolutamente contraindicada** pelo altíssimo risco de **síndrome serotoninérgica grave/fatal**, hipertermia, convulsões e colapso cardiovascular. Além disso, a **meperidina é proscrita em cuidados paliativos** pela OMS e ANCP devido ao acúmulo do metabólito neurotóxico normeperidina (que causa delírio, mioclonias e convulsões), além de **não** ser fármaco de sedação paliativa.\n- **A) Incorreta:** Neuropilépticos/antipsicóticos (clorpromazina, levomepromazina, haloperidol) são amplamente usados na sedação paliativa, especialmente quando há delirium refratário associado.\n- **B) Incorreta:** Benzodiazepínicos (especialmente **midazolam**, primeira escolha) são a base da sedação paliativa.\n- **C) Incorreta:** Fenobarbital é opção reconhecida de segunda/terceira linha na sedação paliativa refratária a midazolam.\n- **D) Incorreta:** Propofol (em ambiente monitorizado) e cetamina (como adjuvante analgésico/sedativo) são opções de resgate em dor/sintomas refratários.",
    "perolaClinica": "A alternativa **E** está correta. A associação **meperidina (petidina) + tranilcipromina (IMAO irreversível)** é **absolutamente contraindicada** pelo altíssimo risco de **síndrome serotoninérgica grave/fatal**, hipertermia, convulsões e colapso…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-018",
    "code": "Q-UEPA24-0018",
    "numeroOriginal": 18,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": ["cuidados-paliativos","desidratacao","hidratacao-venosa","hipotensao"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente vem a UBS para consulta de acompanhamento do quadro de metástase hepática e pulmonar, em acompanhamento paliativo, veio acompanhado pela filha, que relata que o pai não se alimenta nem aceita água há quatro dias, apresenta -se desidratado, desorientado e letárgico, com PA: 60x40 mmHg, FC: 110 BPM, sem febre, e saturando 93% em ar ambiente. A conduta imediata no caso acima deve ser:",
    "alternativas": [
      {
        "letter": "A",
        "text": "estimular dieta e hidratação oral domiciliar.",
        "explanation": "Incorreta: Paciente desorientado e letárgico tem alto risco de broncoaspiração por via oral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "manter jejum e orientar filha a manter o jejum.",
        "explanation": "Incorreta: Apenas manter jejum sem oferecer qualquer suporte clínico ou controle de sintomas na UBS diante de PA 60×40 mmHg e delirium não constitui conduta adequada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "instituir hidratação venosa vigorosa.",
        "explanation": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. O paciente chega à UBS em **choque hipovolêmico franco** (PA 60×40 mmHg, FC 110 bpm, desorientado e letárgico) secundário a 4 dias sem ingesta hídrica, sem menção no enunciado de diretiva antecipada de não reanimação ou fase ativa de morte já definida. A banca considerou que a medida imediata diante de desidratação grave com hipotensão e rebaixamento é **instituir hidratação venosa** (ressalva didática em Cuidados Paliativos: em fase final de vida/processo ativo de morte, hidratação venosa vigorosa pode gerar congestão/desconforto e deve ser individualizada conforme metas de cuidado e reversibilidade do delirium/desidratação).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "solicitar passagem de sonda naso gástrica para alimentação enteral.",
        "explanation": "Incorreta: Sonda nasogástrica para nutrição enteral não é conduta imediata em paciente hipotenso/letárgico e não traz benefício em pacientes paliativos avançados com anorexia terminal.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "encaminhar ao Hospital de referência para executar gastrostomia.",
        "explanation": "Incorreta: Gastrostomia é procedimento invasivo desproporcional e contraindicado como conduta imediata em paciente instável e em cuidado paliativo oncológico avançado.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. O paciente chega à UBS em **choque hipovolêmico franco** (PA 60×40 mmHg, FC 110 bpm, desorientado e letárgico) secundário a 4 dias sem ingesta hídrica, sem menção no enunciado de diretiva antecipada de não reanimação ou fase ativa de morte já definida. A banca considerou que a medida imediata diante de desidratação grave com hipotensão e rebaixamento é **instituir hidratação venosa** (ressalva didática em Cuidados Paliativos: em fase final de vida/processo ativo de morte, hidratação venosa vigorosa pode gerar congestão/desconforto e deve ser individualizada conforme metas de cuidado e reversibilidade do delirium/desidratação).\n- **A) Incorreta:** Paciente desorientado e letárgico tem alto risco de broncoaspiração por via oral.\n- **B) Incorreta:** Apenas manter jejum sem oferecer qualquer suporte clínico ou controle de sintomas na UBS diante de PA 60×40 mmHg e delirium não constitui conduta adequada.\n- **D) Incorreta:** Sonda nasogástrica para nutrição enteral não é conduta imediata em paciente hipotenso/letárgico e não traz benefício em pacientes paliativos avançados com anorexia terminal.\n- **E) Incorreta:** Gastrostomia é procedimento invasivo desproporcional e contraindicado como conduta imediata em paciente instável e em cuidado paliativo oncológico avançado.",
    "perolaClinica": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. O paciente chega à UBS em **choque hipovolêmico franco** (PA 60×40 mmHg, FC 110 bpm, desorientado e letárgico) secundário a 4 dias sem ingesta hídrica, sem menção no enunciado de diretiva…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-019",
    "code": "Q-UEPA24-0019",
    "numeroOriginal": 19,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Câncer de Pulmão e Nódulo Pulmonar",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-cancer-de-pulmao-e-nodulo-pulmonar",
    "tags": ["nodulo-pulmonar-solitario","fleischner","baixo-risco"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 46 anos, vem a UBS para consulta com resultados de exames de pré-operatório para hernioplastia ignal, sem queixas ou comorbidades, sem histórico de tabagismo, ingesta alcoólica moderada, e sedentário com sobre peso, resultados dos exames; ECG: Ritmo sinusal sem alteração, Hemograma: Sem alterações na série vermelha e branca, assim como perfil plaquetário, Coagulograma: sem alterações, Radiografia de Torax (PA e perfil): Nódulo de 5 mm, em terço inferior de hemi pulmão esquerdo. Baseado no quadro acima, a melhor conduta a ser tomada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "não indicar exames novos, e fazer acompanhamento clínico.",
        "explanation": "A alternativa **A** está correta. Pelas diretrizes da **Sociedade de Fleischner (2017)**, para um **nódulo pulmonar sólido único < 6 mm** (aqui 5 mm) em paciente de **baixo risco** (46 anos, não tabagista, sem história de neoplasia ou exposição ocupacional), o risco de malignidade é < 1%, **não havendo indicação de seguimento rotineiro por imagem** — devendo-se apenas tranquilizar o paciente e manter acompanhamento clínico (além de reforçar que radiografia de tórax de rotina nem sequer era indicada no pré-operatório de hernioplastia em paciente hígido assintomático).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "solicitar radiografia de tórax nova em 12 meses.",
        "explanation": "Incorreta: Radiografia de tórax não tem acurácia adequada para seguimento de nódulo de 5 mm e não é recomendada em baixo risco < 6 mm.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "solicitar Tomografia computadorizada de tórax.",
        "explanation": "Incorreta: Embora em alguns cenários se discuta TC para caracterização, a diretriz de Fleischner dispensa seguimento tomográfico rotineiro para nódulo sólido < 6 mm em paciente de baixo risco.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "solicitar avaliação de cirurgião toráxico, para possível biopsia.",
        "explanation": "Incorreta: Biópsia cirúrgica é absolutamente desproporcional para nódulo de 5 mm em paciente de baixo risco.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "solicitar broncoscopia com avaliação de pneumologista.",
        "explanation": "Incorreta: Broncoscopia tem baixíssimo rendimento em nódulo periférico de 5 mm e não está indicada.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Pelas diretrizes da **Sociedade de Fleischner (2017)**, para um **nódulo pulmonar sólido único < 6 mm** (aqui 5 mm) em paciente de **baixo risco** (46 anos, não tabagista, sem história de neoplasia ou exposição ocupacional), o risco de malignidade é < 1%, **não havendo indicação de seguimento rotineiro por imagem** — devendo-se apenas tranquilizar o paciente e manter acompanhamento clínico (além de reforçar que radiografia de tórax de rotina nem sequer era indicada no pré-operatório de hernioplastia em paciente hígido assintomático).\n- **B) Incorreta:** Radiografia de tórax não tem acurácia adequada para seguimento de nódulo de 5 mm e não é recomendada em baixo risco < 6 mm.\n- **C) Incorreta:** Embora em alguns cenários se discuta TC para caracterização, a diretriz de Fleischner dispensa seguimento tomográfico rotineiro para nódulo sólido < 6 mm em paciente de baixo risco.\n- **D) Incorreta:** Biópsia cirúrgica é absolutamente desproporcional para nódulo de 5 mm em paciente de baixo risco.\n- **E) Incorreta:** Broncoscopia tem baixíssimo rendimento em nódulo periférico de 5 mm e não está indicada.",
    "perolaClinica": "A alternativa **A** está correta. Pelas diretrizes da **Sociedade de Fleischner (2017)**, para um **nódulo pulmonar sólido único < 6 mm** (aqui 5 mm) em paciente de **baixo risco** (46 anos, não tabagista, sem história de neoplasia ou exposição ocupacional),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-020",
    "code": "Q-UEPA24-0020",
    "numeroOriginal": 20,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Saúde do Trabalhador",
    "subtema": "Doenças Relacionadas ao Trabalho",
    "temaSlug": "mp-trabalho",
    "subtemaSlug": "mp-trabalho-doencas-relacionadas-ao-trabalho",
    "tags": ["benzeno","exame-admissional","pcmso","saude-do-trabalhador"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Você assume o ambulatório de medicina ocupacional de uma grande empresa petroquímica, e foi solicitado a fazer exames admissionais de alguns novos contratados, que vão trabalhar na plataforma litorânea, que faz extração de petróleo pesado em grandes profundidades. Assim, os exames obrigatórios para admissão são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "hemograma com contagem de reticulócitos, anualmente.",
        "explanation": "A alternativa **A** está correta. Trabalhadores da indústria petroquímica e de extração de petróleo têm exposição ocupacional a hidrocarbonetos aromáticos, com destaque para o **benzeno** (agente mielotóxico e leucemogênico). Conforme a **Norma Regulamentadora nº 7 (NR-7 / PCMSO)** e a Norma de Vigilância da Saúde dos Trabalhadores Expostos ao Benzeno (Portaria MS/MTb), o monitoramento hematológico obrigatório inclui **hemograma completo com contagem de plaquetas e reticulócitos** (admissional e periódico — semestral ou anual conforme grau de exposição).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "endoscopia digestiva na admissão e solicitar a cada cinco anos.",
        "explanation": "Incorreta: Endoscopia digestiva não é exame ocupacional admissional de rotina na indústria petroquímica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "radiografia de tórax, repetir a cada três anos.",
        "explanation": "Incorreta: Radiografia de tórax periódica (padrão OIT) é exigida para exposição a **poeiras minerais** (sílica, asbesto, carvão), não como exame padrão de benzenismo.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "TGO e TGP repetir a cada seis meses.",
        "explanation": "Incorreta: Transaminases isoladas semestralmente não substituem o monitoramento hematológico obrigatório para benzeno.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "fundoscopia de olho, sendo reavaliado a casa dois anos.",
        "explanation": "Incorreta: Fundoscopia ocular bienal não é exame ocupacional obrigatório para plataformas de petróleo.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Trabalhadores da indústria petroquímica e de extração de petróleo têm exposição ocupacional a hidrocarbonetos aromáticos, com destaque para o **benzeno** (agente mielotóxico e leucemogênico). Conforme a **Norma Regulamentadora nº 7 (NR-7 / PCMSO)** e a Norma de Vigilância da Saúde dos Trabalhadores Expostos ao Benzeno (Portaria MS/MTb), o monitoramento hematológico obrigatório inclui **hemograma completo com contagem de plaquetas e reticulócitos** (admissional e periódico — semestral ou anual conforme grau de exposição).\n- **B) Incorreta:** Endoscopia digestiva não é exame ocupacional admissional de rotina na indústria petroquímica.\n- **C) Incorreta:** Radiografia de tórax periódica (padrão OIT) é exigida para exposição a **poeiras minerais** (sílica, asbesto, carvão), não como exame padrão de benzenismo.\n- **D) Incorreta:** Transaminases isoladas semestralmente não substituem o monitoramento hematológico obrigatório para benzeno.\n- **E) Incorreta:** Fundoscopia ocular bienal não é exame ocupacional obrigatório para plataformas de petróleo.",
    "perolaClinica": "A alternativa **A** está correta. Trabalhadores da indústria petroquímica e de extração de petróleo têm exposição ocupacional a hidrocarbonetos aromáticos, com destaque para o **benzeno** (agente mielotóxico e leucemogênico). Conforme a **Norma…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-021",
    "code": "Q-UEPA24-0021",
    "numeroOriginal": 21,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Complicações Crônicas do Diabetes",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-complicacoes-cronicas-do-diabetes",
    "tags": ["nefropatia-diabetica","finerenona","albuminuria","kdigo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pedro, 54 anos, diabético tipo 2 e hipertenso há 8 anos, em acompanhamento clínico regular, encontra-se em uso de dapagliflozina 10 mg/dia, valsartana 320 mg/dia, metformina XR 1000 mg/dia e rosuvastatina 20 mg/dia. Não tem histórico de eventos isquêmicos/trombóticos prévios, encontra-se assintomático, com pressão arterial de 126x70 mmHg nos dois membros superiores, com os seguintes exames bioquímicos: glicose em jejum 96 mg/dL; hemoglobina glicada (método HPLC): 6,7%; clearance de creatinina: 80 ml/min/1.73 m²; LDL-c 60 mg/dL; HDL-c 54 mg/dL; microalbuminuria (2 amostras isoladas de urina): 320 mg/g e 332 mg/g. A próxima estratégia para otimizar a doença renal do diabético é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "dobrar a dose da rosuvastatina.",
        "explanation": "Incorreta: O LDL-c já está em 60 mg/dL e dobrar estatina não reduz albuminúria nem substitui terapia nefroprotetora específica.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dobrar a dose de dapagliflozina.",
        "explanation": "Incorreta: A dose máxima padronizada de dapagliflozina é 10 mg/dia (não existe dose de 20 mg/dia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "associar linagliptina.",
        "explanation": "Incorreta: Inibidores da DPP-4 (linagliptina) não demonstraram proteção renal ou redução de progressão da DRC.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "associar finerenona.",
        "explanation": "A alternativa **D** está correta. O paciente tem DM2 com controle glicêmico (HbA1c 6,7%), pressórico (126×70 mmHg) e lipídico (LDL 60 mg/dL) adequados, já em uso de **BRA em dose máxima tolerada (valsartana 320 mg/dia)** e **iSGLT2 (dapagliflozina 10 mg/dia)**, porém persiste com **albuminúria elevada (> 300 mg/g — A3)** e TFG 80 mL/min/1,73m². Pelas diretrizes **KDIGO 2022/2024** e **SBD/ADA** (estudos **FIDELIO-DKD** e **FIGARO-DKD**), o próximo passo nefroprotetor de primeira linha é associar um **antagonista não esteroidal do receptor mineralocorticoide: finerenona**.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "associar captopril.",
        "explanation": "Incorreta: O duplo bloqueio do SRAA (**IECA + BRA**: captopril + valsartana) é **contraindicado** pelo aumento de hipercalemia, hipotensão e injúria renal aguda sem benefício adicional.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. O paciente tem DM2 com controle glicêmico (HbA1c 6,7%), pressórico (126×70 mmHg) e lipídico (LDL 60 mg/dL) adequados, já em uso de **BRA em dose máxima tolerada (valsartana 320 mg/dia)** e **iSGLT2 (dapagliflozina 10 mg/dia)**, porém persiste com **albuminúria elevada (> 300 mg/g — A3)** e TFG 80 mL/min/1,73m². Pelas diretrizes **KDIGO 2022/2024** e **SBD/ADA** (estudos **FIDELIO-DKD** e **FIGARO-DKD**), o próximo passo nefroprotetor de primeira linha é associar um **antagonista não esteroidal do receptor mineralocorticoide: finerenona**.\n- **A) Incorreta:** O LDL-c já está em 60 mg/dL e dobrar estatina não reduz albuminúria nem substitui terapia nefroprotetora específica.\n- **B) Incorreta:** A dose máxima padronizada de dapagliflozina é 10 mg/dia (não existe dose de 20 mg/dia).\n- **C) Incorreta:** Inibidores da DPP-4 (linagliptina) não demonstraram proteção renal ou redução de progressão da DRC.\n- **E) Incorreta:** O duplo bloqueio do SRAA (**IECA + BRA**: captopril + valsartana) é **contraindicado** pelo aumento de hipercalemia, hipotensão e injúria renal aguda sem benefício adicional.",
    "perolaClinica": "A alternativa **D** está correta. O paciente tem DM2 com controle glicêmico (HbA1c 6,7%), pressórico (126×70 mmHg) e lipídico (LDL 60 mg/dL) adequados, já em uso de **BRA em dose máxima tolerada (valsartana 320 mg/dia)** e **iSGLT2 (dapagliflozina 10…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-022",
    "code": "Q-UEPA24-0022",
    "numeroOriginal": 22,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Distúrbios do Cálcio e Paratireoide",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-disturbios-do-calcio-e-paratireoide",
    "tags": ["hipercalcemia","pth","nefrolitiase","hiperparatireoidismo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante internação de paciente masculino de 55 anos, para tratamento de nefrolitíase, você detecta a presença de valores de cálcio total 12,2 mg/dL (referência: 8,8 - 10,4), confirmado em segunda amostra. No momento, o paciente está hidratado, assintomático e apresenta níveis de albumina, 25OHD e demais eletrólitos dentro da normalidade. A conduta mais adequada neste momento é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Solicitar cintilografia de paratireoide.",
        "explanation": "Incorreta: Cintilografia de paratireoides (sestamibi) é exame de **localização pré-operatória**, solicitado apenas **após** confirmação bioquímica de hiperparatireoidismo primário (PTH elevado/inapropriadamente normal).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Prescrever furosemida.",
        "explanation": "Incorreta: Furosemida não é tratamento de primeira linha para hipercalcemia (pode agravar hipovolemia e hipercalcemia), reservando-se apenas a sobrecarga volêmica durante hidratação.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Prescrever calcitonina.",
        "explanation": "Incorreta: Calcitonina é usada apenas em hipercalcemia **grave/sintomática** (> 14 mg/dL ou crise hipercalcêmica) para redução rápida temporária.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Prescrever ácido zoledrônico.",
        "explanation": "Incorreta: Ácido zoledrônico IV é reservado a hipercalcemia moderada/grave sintomática (sobretudo da malignidade), não sendo indicado antes da investigação etiológica em paciente assintomático com Ca 12,2 mg/dL.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Dosar PTH.",
        "explanation": "A alternativa **E** está correta. Diante de **hipercalcemia confirmada** (Ca total 12,2 mg/dL com albumina normal) em paciente hidratado e **assintomático** (com história sugestiva de nefrolitíase), o primeiro passo obrigatório da investigação diagnóstica — segundo a **Endocrine Society** e a **SBEM** — é **dosar o PTH intacto sérico** para diferenciar hipercalcemia **PTH-dependente** (hiperparatireoidismo primário — principal causa ambulatorial) de **PTH-independente** (malignidade, granulomatoses, intoxicação por vitamina D).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Diante de **hipercalcemia confirmada** (Ca total 12,2 mg/dL com albumina normal) em paciente hidratado e **assintomático** (com história sugestiva de nefrolitíase), o primeiro passo obrigatório da investigação diagnóstica — segundo a **Endocrine Society** e a **SBEM** — é **dosar o PTH intacto sérico** para diferenciar hipercalcemia **PTH-dependente** (hiperparatireoidismo primário — principal causa ambulatorial) de **PTH-independente** (malignidade, granulomatoses, intoxicação por vitamina D).\n- **A) Incorreta:** Cintilografia de paratireoides (sestamibi) é exame de **localização pré-operatória**, solicitado apenas **após** confirmação bioquímica de hiperparatireoidismo primário (PTH elevado/inapropriadamente normal).\n- **B) Incorreta:** Furosemida não é tratamento de primeira linha para hipercalcemia (pode agravar hipovolemia e hipercalcemia), reservando-se apenas a sobrecarga volêmica durante hidratação.\n- **C) Incorreta:** Calcitonina é usada apenas em hipercalcemia **grave/sintomática** (> 14 mg/dL ou crise hipercalcêmica) para redução rápida temporária.\n- **D) Incorreta:** Ácido zoledrônico IV é reservado a hipercalcemia moderada/grave sintomática (sobretudo da malignidade), não sendo indicado antes da investigação etiológica em paciente assintomático com Ca 12,2 mg/dL.",
    "perolaClinica": "A alternativa **E** está correta. Diante de **hipercalcemia confirmada** (Ca total 12,2 mg/dL com albumina normal) em paciente hidratado e **assintomático** (com história sugestiva de nefrolitíase), o primeiro passo obrigatório da investigação diagnóstica —…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-023",
    "code": "Q-UEPA24-0023",
    "numeroOriginal": 23,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Leptospirose e Rickettsioses",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-leptospirose-e-rickettsioses",
    "tags": ["febre-maculosa","rickettsia","doxiciclina","carrapato"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 32 anos, egresso de viagem na região de Campinas/SP, onde esteve acampado durante feriado, relata febre alta há 5 dias, odinofagia, mialgia e aparecimento de exantema difuso, não pruriginoso. Refere ter presenciado carrapatos na região onde esteve, mas desconhece ter sido picado. Fez uso de azitromicina + cetoprofeno, por 4 dias, sem melhora. Você está no pronto socorro e opta por solicitar hemograma e análise bioquímica geral, bem como sorologia pela técnica de RIFI para Rickettsia. O tratamento que deve ser instituído é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Amoxicilina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Clindamicina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Doxiciclina.",
        "explanation": "A alternativa **C** está correta. O quadro clínico-epidemiológico (viagem à região de **Campinas/SP** — área hiperendêmica —, contato com ambiente de carrapatos *Amblyomma sculptum*, febre alta há 5 dias, mialgia e exantema difuso sem resposta a azitromicina) é altamente suspeito de **Febre Maculosa Brasileira** (*Rickettsia rickettsii*). Conforme o **Guia de Vigilância em Saúde (Ministério da Saúde)**, a **doxiciclina** (100 mg VO/IV 12/12h) é o antimicrobiano de primeira escolha absoluta (em adultos e crianças), devendo ser iniciada **imediatamente na suspeita clínica**, sem aguardar o resultado da sorologia RIFI (cuja soroconversão é tardia), pois o atraso além do 5º dia eleva drasticamente a letalidade.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Penicilina cristalina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Metronidazol.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. O quadro clínico-epidemiológico (viagem à região de **Campinas/SP** — área hiperendêmica —, contato com ambiente de carrapatos *Amblyomma sculptum*, febre alta há 5 dias, mialgia e exantema difuso sem resposta a azitromicina) é altamente suspeito de **Febre Maculosa Brasileira** (*Rickettsia rickettsii*). Conforme o **Guia de Vigilância em Saúde (Ministério da Saúde)**, a **doxiciclina** (100 mg VO/IV 12/12h) é o antimicrobiano de primeira escolha absoluta (em adultos e crianças), devendo ser iniciada **imediatamente na suspeita clínica**, sem aguardar o resultado da sorologia RIFI (cuja soroconversão é tardia), pois o atraso além do 5º dia eleva drasticamente a letalidade.\n- **A, B, D e E) Incorretas:** Beta-lactâmicos (amoxicilina, penicilina), clindamicina e metronidazol **não possuem atividade** contra *Rickettsia rickettsii* (a alternativa em gestantes ou alergia grave à doxiciclina é o **cloranfenicol**).",
    "perolaClinica": "A alternativa **C** está correta. O quadro clínico-epidemiológico (viagem à região de **Campinas/SP** — área hiperendêmica —, contato com ambiente de carrapatos *Amblyomma sculptum*, febre alta há 5 dias, mialgia e exantema difuso sem resposta a azitromicina)…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-024",
    "code": "Q-UEPA24-0024",
    "numeroOriginal": 24,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "subtema": "Mieloma Múltiplo e Gamopatias",
    "temaSlug": "cm-hemato",
    "subtemaSlug": "cm-hemato-mieloma-multiplo-e-gamopatias",
    "tags": ["amiloidose","amiloidose-cardiaca","vermelho-congo","icfep"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Leia o texto abaixo para responder a questão 24\nEla [médica] mandou arrancar\nQuatro pedacinhos do meu coração\nDepois mandou examinar\nOs quatro pedacinhos\nUm para saber se há um depósito\nDe proteínas esquisitas lá\nUm para saber se as pequeninas\nSão assassinas e podem matar\nUm para saber se estou curado\nCom os remédios que ela me deu\nUm para saber se estou errado\nPor ter juntado o meu destino ao seu\n(Canção: Quatro Pedacinhos, Gilberto Gil - álbum OK OK OK ,2018)\n\nDurante internação hospitalar no ano de 2016 por doença renal e cardiopatia, de provável causa genética, o cantor Gilberto Gil poetizou o evento de biópsia cardíaca em forma de canção. Sobre a amiloidose, uma das condições clínicas que podem justificar o evento clínico em questão, analise as alternativas e marque a INCORRETA.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Alguns dos achados clínicos que podem aumentar a suspeição para a doença são presença de macroglossia, púrpura periorbitária e insuficiência cardíaca com fração de ejeção preservada (ICFEP).",
        "explanation": "Correta: Macroglossia, púrpura periorbitária (\"olhos de guaxinim\", típicas da AL) e ICFEP com hipertrofia ventricular/baixa voltagem ao ECG são *red flags* clássicos.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Em alguns casos, o diagnóstico pode ser confirmado através de biopsia de tecidos periféricos. A coloração de vermelho-congo com birrefringência sob a luz polarizada é o método para determinar proteína amiloide tecidual.",
        "explanation": "Correta: A biópsia (gordura abdominal, glândula salivar ou endomiocárdica) corada com **vermelho-congo** demonstra **birrefringência verde-maçã** sob luz polarizada.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Trata-se de uma causa altamente prevalente de insuficiência cardíaca (IC) em nosso meio, porém ainda não há tratamento clínico específico para amiloidose, devendo o paciente com a forma cardíaca receber medidas de suporte para controle da IC.",
        "explanation": "A alternativa **C** é a **INCORRETA** (gabarito). Atualmente **existem tratamentos clínicos específicos modificadores de doença** para ambas as principais formas de amiloidose cardíaca, segundo o **Posicionamento sobre Diagnóstico e Tratamento da Amiloidose Cardíaca da SBC (2021)**: na **amiloidose por transtirretina (ATTR)** utiliza-se **tafamidis** (estabilizador do tetrâmero de TTR, que reduz mortalidade e hospitalizações — estudo ATTR-ACT) além de silenciadores de RNA (patisirana, inotersena, vutrisirana) na forma hereditária com polineuropatia; e na **amiloidose AL** utiliza-se quimioterapia/imunoterapia anti-plasmocitária (esquema Dara-CyBorD).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Mutações genéticas estão associadas a uma grande variedade de manifestações clínicas, que refletem o depósito da proteína em diferentes tipos de tecidos, podendo haver envolvimento misto do coração e o do sistema nervoso periférico.",
        "explanation": "Correta: A forma hereditária (ATTRv) apresenta fenótipo variável (cardíaco, neuropático periférico/autonômico ou misto).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Atualmente, já existem testes moleculares que detectam mutações genéticas e que podem ser úteis para promover aconselhamento genético e identificação de membros da família em risco, no contexto da forma hereditária da doença.",
        "explanation": "Correta: O sequenciamento do gene *TTR* diferencia ATTR hereditária (ATTRv) da selvagem (ATTRwt) e orienta o aconselhamento familiar.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** é a **INCORRETA** (gabarito). Atualmente **existem tratamentos clínicos específicos modificadores de doença** para ambas as principais formas de amiloidose cardíaca, segundo o **Posicionamento sobre Diagnóstico e Tratamento da Amiloidose Cardíaca da SBC (2021)**: na **amiloidose por transtirretina (ATTR)** utiliza-se **tafamidis** (estabilizador do tetrâmero de TTR, que reduz mortalidade e hospitalizações — estudo ATTR-ACT) além de silenciadores de RNA (patisirana, inotersena, vutrisirana) na forma hereditária com polineuropatia; e na **amiloidose AL** utiliza-se quimioterapia/imunoterapia anti-plasmocitária (esquema Dara-CyBorD).\n- **A) Correta:** Macroglossia, púrpura periorbitária (\"olhos de guaxinim\", típicas da AL) e ICFEP com hipertrofia ventricular/baixa voltagem ao ECG são *red flags* clássicos.\n- **B) Correta:** A biópsia (gordura abdominal, glândula salivar ou endomiocárdica) corada com **vermelho-congo** demonstra **birrefringência verde-maçã** sob luz polarizada.\n- **D) Correta:** A forma hereditária (ATTRv) apresenta fenótipo variável (cardíaco, neuropático periférico/autonômico ou misto).\n- **E) Correta:** O sequenciamento do gene *TTR* diferencia ATTR hereditária (ATTRv) da selvagem (ATTRwt) e orienta o aconselhamento familiar.",
    "perolaClinica": "A alternativa **C** é a **INCORRETA** (gabarito). Atualmente **existem tratamentos clínicos específicos modificadores de doença** para ambas as principais formas de amiloidose cardíaca, segundo o **Posicionamento sobre Diagnóstico e Tratamento da Amiloidose…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-025",
    "code": "Q-UEPA24-0025",
    "numeroOriginal": 25,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Hipertireoidismo e Tireoidites",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-hipertireoidismo-e-tireoidites",
    "tags": ["biotina","interferencia-laboratorial","tsh-suprimido","tireoide"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 32 anos, está em acompanhamento dermatológico devido “queda de cabelo acentuada”, e em uso de fórmula com “vitaminas” comprada na internet, por conta própria. Na avaliação bioquímica inicial, o médico detectou a presença de TSH suprimido, mas a paciente não apresentava nenhuma outra manifestação sugestiva de tireotoxicose. A substância em uso na fórmula da paciente que pode interferir em diversos ensaios laboratoriais hormonais e deve ser suspensa 72h antes de uma nova coleta de sangue é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Biotina.",
        "explanation": "A alternativa **A** está correta. Altas doses de **biotina (vitamina B7)** — muito presentes em suplementos para cabelos e unhas — interferem em imunoensaios laboratoriais baseados na ligação estreptavidina-biotina, podendo causar **TSH falsamente suprimido** (ensaio sanduíche) e **T4 livre/T3 falsamente elevados** (ensaio competitivo), simulando hipertireoidismo bioquímico em paciente eutireoidea. Segundo a **SBEM** e a **ATA**, deve-se suspender a biotina por **48 a 72 horas** antes de repetir os exames hormonais (também pode interferir em PTH e troponina).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Cisteína.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Metionina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Arginina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Ácido pantotênico.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Altas doses de **biotina (vitamina B7)** — muito presentes em suplementos para cabelos e unhas — interferem em imunoensaios laboratoriais baseados na ligação estreptavidina-biotina, podendo causar **TSH falsamente suprimido** (ensaio sanduíche) e **T4 livre/T3 falsamente elevados** (ensaio competitivo), simulando hipertireoidismo bioquímico em paciente eutireoidea. Segundo a **SBEM** e a **ATA**, deve-se suspender a biotina por **48 a 72 horas** antes de repetir os exames hormonais (também pode interferir em PTH e troponina).\n- **B, C, D e E) Incorretas:** Cisteína, metionina, arginina e ácido pantotênico (vitamina B5) não causam interferência nos imunoensaios estreptavidina-biotina de função tireoidiana.",
    "perolaClinica": "A alternativa **A** está correta. Altas doses de **biotina (vitamina B7)** — muito presentes em suplementos para cabelos e unhas — interferem em imunoensaios laboratoriais baseados na ligação estreptavidina-biotina, podendo causar **TSH falsamente suprimido**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-026",
    "code": "Q-UEPA24-0026",
    "numeroOriginal": 26,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "HIV/AIDS e Infecções Oportunistas",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-hiv-aids-e-infeccoes-oportunistas",
    "tags": ["prep","hiv","prep-sob-demanda","prevencao-combinada"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem, 40 anos, reporta em consulta ser bissexual e ter histórico de uso de preservativo masculino na maioria de suas relações. Refere desejo de iniciar PrEP (Profilaxia Pré-Exposição de Risco à Infecção pelo HIV). Sobre essa estratégica de prevenção, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a Prep é uma associação de três fármacos antirretrovirais combinados na posologia de 1 (um) comprimido diário, destinado a grupos com alto risco de infecção pelo HIV.",
        "explanation": "Incorreta: A PrEP oral no SUS associa **dois** antirretrovirais (tenofovir TDF + entricitabina FTC), não três (três fármacos compõem a PEP ou TARV).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "dada o baixo potencial toxicidade renal da Prep, a sua prescrição está indicada para indivíduos com clearance de creatinina acima de 15 mL/min.",
        "explanation": "Incorreta: O TDF tem potencial nefrotóxico; a PrEP exige **clearance de creatinina ≥ 60 mL/min** (e não > 15 mL/min).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "mulheres HIV negativas, com desejo de engravidar de parceiro soropositivo, não podem fazer uso de PrEP de forma segura, devido risco ao longo da gravidez e amamentação.",
        "explanation": "Incorreta: A PrEP diária é **segura e recomendada** em mulheres HIV-negativas gestantes, tentantes ou lactantes em situação de vulnerabilidade (como parceria sorodiferente).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "o esquema de prescrição “sob demanda” (PrEP intermitente) envolve tomar uma dose dupla (duas pílulas) entre 2 e 24 horas antes do sexo previsto e uma pílula 24 horas após a dose dupla e outra 48 horas depois (esquema 2 + 1 + 1).",
        "explanation": "A alternativa **D** está correta. Conforme o **PCDT de Profilaxia Pré-Exposição (PrEP) do Ministério da Saúde (2022)**, a **PrEP sob demanda** (indicada para homens cisgêneros e pessoas designadas do sexo masculino ao nascer que não usam hormônios à base de estradiol) segue o **esquema 2 + 1 + 1**: 2 comprimidos de TDF/FTC entre **2 e 24 horas antes** da relação sexual, 1 comprimido **24 horas após** a primeira dose e 1 comprimido **48 horas após** a primeira dose.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "caso o indivíduo seja portador de infecção pelo vírus da hepatites B ou C, há uma contraindicação formal para o uso de PrEP oral diária, pelo risco de toxicidade hepática.",
        "explanation": "Incorreta: Infecção por HBV ou HCV **não contraindica** PrEP oral diária (inclusive TDF/FTC tem ação contra o HBV, exigindo cautela apenas na descontinuação para evitar *flare* hepático; na hepatite B crônica, contraindica-se apenas a PrEP **sob demanda**).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Conforme o **PCDT de Profilaxia Pré-Exposição (PrEP) do Ministério da Saúde (2022)**, a **PrEP sob demanda** (indicada para homens cisgêneros e pessoas designadas do sexo masculino ao nascer que não usam hormônios à base de estradiol) segue o **esquema 2 + 1 + 1**: 2 comprimidos de TDF/FTC entre **2 e 24 horas antes** da relação sexual, 1 comprimido **24 horas após** a primeira dose e 1 comprimido **48 horas após** a primeira dose.\n- **A) Incorreta:** A PrEP oral no SUS associa **dois** antirretrovirais (tenofovir TDF + entricitabina FTC), não três (três fármacos compõem a PEP ou TARV).\n- **B) Incorreta:** O TDF tem potencial nefrotóxico; a PrEP exige **clearance de creatinina ≥ 60 mL/min** (e não > 15 mL/min).\n- **C) Incorreta:** A PrEP diária é **segura e recomendada** em mulheres HIV-negativas gestantes, tentantes ou lactantes em situação de vulnerabilidade (como parceria sorodiferente).\n- **E) Incorreta:** Infecção por HBV ou HCV **não contraindica** PrEP oral diária (inclusive TDF/FTC tem ação contra o HBV, exigindo cautela apenas na descontinuação para evitar *flare* hepático; na hepatite B crônica, contraindica-se apenas a PrEP **sob demanda**).",
    "perolaClinica": "A alternativa **D** está correta. Conforme o **PCDT de Profilaxia Pré-Exposição (PrEP) do Ministério da Saúde (2022)**, a **PrEP sob demanda** (indicada para homens cisgêneros e pessoas designadas do sexo masculino ao nascer que não usam hormônios à base de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-027",
    "code": "Q-UEPA24-0027",
    "numeroOriginal": 27,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Geriatria e Oncologia Clínica",
    "subtema": "Emergências Oncológicas",
    "temaSlug": "cm-geriatria",
    "subtemaSlug": "cm-geriatria-emergencias-oncologicas",
    "tags": ["sindrome-de-lise-tumoral","hipocalcemia","linfoma","emergencia-oncologica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente jovem, em tratamento para linfoma não Hodgkin, com presença de massa tumoral volumosa em mediastino, apresenta, alguns dias após início de quimioterapia, quadro de confusão mental e desidratação, seguidos de crise convulsiva. Frente à suspeita de síndrome de lise tumoral, espera-se a redução sérica do marcador:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Potássio.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Fósforo.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Cálcio.",
        "explanation": "A alternativa **C** está correta. Na **Síndrome de Lise Tumoral (SLT)** (critérios de Cairo-Bishop), a destruição maciça de células neoplásicas libera conteúdo intracelular na circulação, causando **hiperuricemia**, **hipercalemia** e **hiperfosfatemia**. O excesso de fósforo liga-se ao cálcio sérico formando precipitados de fosfato de cálcio nos tecidos e túbulos renais, resultando em **hipocalcemia** (único marcador eletrolítico que **reduz**, podendo precipitar tetania, arritmias e crises convulsivas) e injúria renal aguda (aumento da creatinina).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Ácido úrico.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Creatinina.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Na **Síndrome de Lise Tumoral (SLT)** (critérios de Cairo-Bishop), a destruição maciça de células neoplásicas libera conteúdo intracelular na circulação, causando **hiperuricemia**, **hipercalemia** e **hiperfosfatemia**. O excesso de fósforo liga-se ao cálcio sérico formando precipitados de fosfato de cálcio nos tecidos e túbulos renais, resultando em **hipocalcemia** (único marcador eletrolítico que **reduz**, podendo precipitar tetania, arritmias e crises convulsivas) e injúria renal aguda (aumento da creatinina).\n- **A, B, D e E) Incorretas:** Potássio, fósforo, ácido úrico e creatinina **elevam-se** na síndrome de lise tumoral.",
    "perolaClinica": "A alternativa **C** está correta. Na **Síndrome de Lise Tumoral (SLT)** (critérios de Cairo-Bishop), a destruição maciça de células neoplásicas libera conteúdo intracelular na circulação, causando **hiperuricemia**, **hipercalemia** e **hiperfosfatemia**. O…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-028",
    "code": "Q-UEPA24-0028",
    "numeroOriginal": 28,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Dislipidemia e Prevenção Cardiovascular",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-dislipidemia-e-prevencao-cardiovascular",
    "tags": ["hipercolesterolemia-familiar","evolocumabe","pcsk9","dislipidemia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Youssef, 38 anos, de origem libanesa, realiza acompanhamento no serviço universitário devido dislipidemia. Faz uso regular da associação rosuvastatina+ezetimiba 20/10 mg/dia, há 1 ano. Ao exame físico, apresenta arco corneano e xantomas eruptivos em punhos. Apresenta PA 120x70 mmHg, frequência cardíaca 68 bpm e índice de massa corpórea 21 kg/m². Quando questionado, informa que pai teve infarto aos 47 anos, e avô paterno teve morte súbita aos 49 anos. Traz laboratório atualizado: glicose 92 mg/dL; HBa1c 5,4%; HDL-c 32 mg/dL; LDL 290 mg/dL; triglicerídeos 180 mg/dL. A terapia de escolha a ser prescrita nesse momento é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Tirzepatida.",
        "explanation": "Incorreta: Tirzepatida é coagonista GIP/GLP-1 para DM2 e obesidade (o paciente tem IMC 21 e HbA1c 5,4%).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Evolocumabe.",
        "explanation": "A alternativa **B** está correta. O paciente apresenta diagnóstico clínico inequívoco de **Hipercolesterolemia Familiar (HF)** (origem libanesa — efeito fundador clássico —, arco corneano precoce, xantomas, história familiar de DAC prematura e **LDL-c de 290 mg/dL** mesmo em uso de rosuvastatina + ezetimiba). Pela **Diretriz Brasileira de Hipercolesterolemia Familiar (SBC 2021)**, quando o LDL-c permanece muito acima da meta apesar de estatina de alta potência + ezetimiba, a terapia adicional de escolha é um **inibidor da PCSK9** (**evolocumabe** ou alirocumabe), que reduz o LDL-c em mais 50–60%.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Fenofibrato.",
        "explanation": "Incorreta: Fenofibrato atua predominantemente sobre triglicerídeos (aqui apenas 180 mg/dL), com efeito mínimo no LDL-c.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Adalimumabe.",
        "explanation": "Incorreta: Adalimumabe é anticorpo anti-TNF-α usado em doenças inflamatórias/autoimunes, sem ação hipolipemiante.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Ômega 3.",
        "explanation": "Incorreta: Ômega-3 não reduz LDL-c em hipercolesterolemia familiar.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. O paciente apresenta diagnóstico clínico inequívoco de **Hipercolesterolemia Familiar (HF)** (origem libanesa — efeito fundador clássico —, arco corneano precoce, xantomas, história familiar de DAC prematura e **LDL-c de 290 mg/dL** mesmo em uso de rosuvastatina + ezetimiba). Pela **Diretriz Brasileira de Hipercolesterolemia Familiar (SBC 2021)**, quando o LDL-c permanece muito acima da meta apesar de estatina de alta potência + ezetimiba, a terapia adicional de escolha é um **inibidor da PCSK9** (**evolocumabe** ou alirocumabe), que reduz o LDL-c em mais 50–60%.\n- **A) Incorreta:** Tirzepatida é coagonista GIP/GLP-1 para DM2 e obesidade (o paciente tem IMC 21 e HbA1c 5,4%).\n- **C) Incorreta:** Fenofibrato atua predominantemente sobre triglicerídeos (aqui apenas 180 mg/dL), com efeito mínimo no LDL-c.\n- **D) Incorreta:** Adalimumabe é anticorpo anti-TNF-α usado em doenças inflamatórias/autoimunes, sem ação hipolipemiante.\n- **E) Incorreta:** Ômega-3 não reduz LDL-c em hipercolesterolemia familiar.",
    "perolaClinica": "A alternativa **B** está correta. O paciente apresenta diagnóstico clínico inequívoco de **Hipercolesterolemia Familiar (HF)** (origem libanesa — efeito fundador clássico —, arco corneano precoce, xantomas, história familiar de DAC prematura e **LDL-c de 290…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-029",
    "code": "Q-UEPA24-0029",
    "numeroOriginal": 29,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "subtema": "Tuberculose Pulmonar e Extrapulmonar",
    "temaSlug": "cm-infecto",
    "subtemaSlug": "cm-infecto-tuberculose-pulmonar-e-extrapulmonar",
    "tags": ["iltb","tuberculose-latente","prova-tuberculinica","igra"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Estima-se que um quarto da população mundial esteja infectada pelo Mycobacterium tuberculosis, agente causador da tuberculose (TB). Para a erradicação da TB, é imprescindível aumentar o rastreio, diagnóstico e tratamento da infecção latente pelo Mycobacterium tuberculosis (ILTB), reduzindo o risco de adoecimento (Fonte: Brasil. Ministério da Saúde, Protocolo de vigilância da infecção latente pelo Mycobacterium tuberculosis no Brasil 2018). Sobre a condição clínica abordada (ILTB), assinale a alternativa correta, segundo recomendações nacionais:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pessoas com a ILTB cujo tratamento será iniciado não precisam ser notificadas devido não haver Ficha de notificação específica para essa situação.",
        "explanation": "Incorreta: Todo tratamento de ILTB iniciado **deve ser notificado** em ficha específica no sistema **IL-TB** do Ministério da Saúde.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A Rifampicina é a droga de escolha nas pessoas vivendo com HIV (PVHIV) em uso de inibidores de protease e dolutegravir.",
        "explanation": "Incorreta: A rifampicina tem forte interação com **inibidores de protease** (contraindicada) e exige ajuste de dose do dolutegravir; em PVHIV com IP, prefere-se isoniazida.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Indivíduos diabéticos, tabagistas (>1 maço/dia) e renais dialíticos são indicados para tratamento da ILTB, se prova tuberculínica > 10 mm ou IGRA positivo.",
        "explanation": "A alternativa **C** está correta. Conforme o **Protocolo de Vigilância da ILTB do Ministério da Saúde (2018/2022)**, pacientes com **diabetes mellitus**, **tabagismo pesado (> 1 maço/dia)**, **insuficiência renal em diálise**, baixo peso (< 85% do ideal), silicose, neoplasias de cabeça/pescoço/pulmão e gastrectomia têm indicação de tratamento da ILTB quando apresentam **prova tuberculínica (PT) ≥ 10 mm** ou **IGRA positivo** (afastada TB ativa).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Atualmente o Brasil dispõe de dois esquemas de tratamento para ILTB (isoniazida ou rifampicina), ambos com duração de 3 meses.",
        "explanation": "Incorreta: Os esquemas no Brasil são **3HP** (rifapentina + isoniazida semanal por 3 meses), **4R** (rifampicina diária por 4 meses) e **6H ou 9H** (isoniazida diária por 6 a 9 meses).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Todo indivíduo com morbidade reumatológica e que usará prednisona em algum momento, independente da dose, tem indicação de tratar ILTB.",
        "explanation": "Incorreta: A indicação por corticoterapia exige dose equivalente a **prednisona ≥ 15 mg/dia por mais de 1 mês** (com PT ≥ 5 mm ou IGRA+), não qualquer dose isolada.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Conforme o **Protocolo de Vigilância da ILTB do Ministério da Saúde (2018/2022)**, pacientes com **diabetes mellitus**, **tabagismo pesado (> 1 maço/dia)**, **insuficiência renal em diálise**, baixo peso (< 85% do ideal), silicose, neoplasias de cabeça/pescoço/pulmão e gastrectomia têm indicação de tratamento da ILTB quando apresentam **prova tuberculínica (PT) ≥ 10 mm** ou **IGRA positivo** (afastada TB ativa).\n- **A) Incorreta:** Todo tratamento de ILTB iniciado **deve ser notificado** em ficha específica no sistema **IL-TB** do Ministério da Saúde.\n- **B) Incorreta:** A rifampicina tem forte interação com **inibidores de protease** (contraindicada) e exige ajuste de dose do dolutegravir; em PVHIV com IP, prefere-se isoniazida.\n- **D) Incorreta:** Os esquemas no Brasil são **3HP** (rifapentina + isoniazida semanal por 3 meses), **4R** (rifampicina diária por 4 meses) e **6H ou 9H** (isoniazida diária por 6 a 9 meses).\n- **E) Incorreta:** A indicação por corticoterapia exige dose equivalente a **prednisona ≥ 15 mg/dia por mais de 1 mês** (com PT ≥ 5 mm ou IGRA+), não qualquer dose isolada.",
    "perolaClinica": "A alternativa **C** está correta. Conforme o **Protocolo de Vigilância da ILTB do Ministério da Saúde (2018/2022)**, pacientes com **diabetes mellitus**, **tabagismo pesado (> 1 maço/dia)**, **insuficiência renal em diálise**, baixo peso (< 85% do ideal),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-030",
    "code": "Q-UEPA24-0030",
    "numeroOriginal": 30,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Osteoporose e Doenças Osteometabólicas",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-osteoporose-e-doencas-osteometabolicas",
    "tags": ["osteopenia","densitometria-ossea","frax","pos-menopausa"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher, 52 anos, em amenorreia há 1 ano, vem à consulta de rotina, com exames solicitados. Apresenta intolerância à lactose, mas nega hipertensão ou diabetes. Traz os seguintes exames: TSH 2,2 (0,4 a 5,6 UI/mL), cálcio iônico 4,9 (4,7-5,2 mg/dL), magnésio 1,9 (1,6-2,6 mg/dL), 25OHD 52 ng/mL, clearance de creatinina 84 ml/min, e radiografia de coluna lombo-sacra sem sinais de fratura ou de achatamento de vértebras. Densitometria óssea (exame realizado sob técnica adequada):\n- Coluna AP (L1-L4): BMD 1,089 g/cm² | T-score -1,0 | Z-score -1,2\n- Fêmur direito (colo): BMD 0,964 g/cm² | T-score -2,3 | Z-score -1,6\n- Fêmur total: BMD 0,972 g/cm² | T-score -2,0 | Z-score -1,5\n\nSobre o caso em questão, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "deve-se suplementar “vitamina D” (colecalciferol), objetivando manter níveis de 25OHD acima de 60 ng/ml, valores que se associam a maior proteção óssea e muscular.",
        "explanation": "Incorreta: A paciente já tem 25(OH)D de 52 ng/mL (suficiente; meta em grupos de risco é 30–60 ng/mL, sem benefício adicional acima de 60 ng/mL).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o uso da plataforma FRAX® pode ser útil para definir risco de fratura nos próximos anos, e ajudar na indicação de terapia antirreabsortiva óssea.",
        "explanation": "A alternativa **B** está correta. Mulher **pós-menopausa** (amenorreia há 1 ano aos 52 anos) avaliada pelo **T-score**, apresentando **osteopenia** (T-score entre –1,1 e –2,4; menor valor –2,3 em colo femoral) sem fraturas vertebrais. Segundo a **ABRASSO / SBEM**, diante de osteopenia pós-menopausa sem fratura prévia, a ferramenta **FRAX®** estima a probabilidade de fratura osteoporótica maior e de quadril em 10 anos, auxiliando na decisão de iniciar terapia farmacológica antirreabsortiva.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "neste caso, deve-se usar o “z-score” para avaliação densitométrica da paciente, e seu diagnóstico é de baixa massa óssea.",
        "explanation": "Incorreta: Em mulheres **pós-menopausa**, usa-se o **T-score** (o Z-score é utilizado em mulheres pré-menopausa, homens < 50 anos e crianças).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "caso esteja em uso de terapia de reposição hormonal (TRH) com estrogênio e progesterona, aumenta-se o risco de fratura de fragilidade.",
        "explanation": "Incorreta: A TRH estroprogestativa **reduz** (e não aumenta) o risco de fraturas por fragilidade.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "só está indicada suplementação de cálcio se paciente apresentar níveis séricos persistentemente reduzidos de cálcio ionizado.",
        "explanation": "Incorreta: A suplementação de cálcio (1.000–1.200 mg/dia total, dieta + suplemento) baseia-se na **baixa ingestão dietética** (como na intolerância à lactose), e não em hipocalcemia sérica (que é mantida normal à custa de reabsorção óssea).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Mulher **pós-menopausa** (amenorreia há 1 ano aos 52 anos) avaliada pelo **T-score**, apresentando **osteopenia** (T-score entre –1,1 e –2,4; menor valor –2,3 em colo femoral) sem fraturas vertebrais. Segundo a **ABRASSO / SBEM**, diante de osteopenia pós-menopausa sem fratura prévia, a ferramenta **FRAX®** estima a probabilidade de fratura osteoporótica maior e de quadril em 10 anos, auxiliando na decisão de iniciar terapia farmacológica antirreabsortiva.\n- **A) Incorreta:** A paciente já tem 25(OH)D de 52 ng/mL (suficiente; meta em grupos de risco é 30–60 ng/mL, sem benefício adicional acima de 60 ng/mL).\n- **C) Incorreta:** Em mulheres **pós-menopausa**, usa-se o **T-score** (o Z-score é utilizado em mulheres pré-menopausa, homens < 50 anos e crianças).\n- **D) Incorreta:** A TRH estroprogestativa **reduz** (e não aumenta) o risco de fraturas por fragilidade.\n- **E) Incorreta:** A suplementação de cálcio (1.000–1.200 mg/dia total, dieta + suplemento) baseia-se na **baixa ingestão dietética** (como na intolerância à lactose), e não em hipocalcemia sérica (que é mantida normal à custa de reabsorção óssea).",
    "perolaClinica": "A alternativa **B** está correta. Mulher **pós-menopausa** (amenorreia há 1 ano aos 52 anos) avaliada pelo **T-score**, apresentando **osteopenia** (T-score entre –1,1 e –2,4; menor valor –2,3 em colo femoral) sem fraturas vertebrais. Segundo a **ABRASSO /…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-031",
    "code": "Q-UEPA24-0031",
    "numeroOriginal": 31,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": ["via-aerea-falha","via-aerea-dificil","laringoscopia","iot"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre o manejo da via aérea no departamento de emergência, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "entre outras definições, o insucesso em manter uma saturação de oxigênio aceitável durante ou após uma ou mais tentativas falhas na laringoscopia, define uma “via aérea falha”.",
        "explanation": "A alternativa **A** está correta. Segundo o *Manual de Manejo de Via Aérea na Emergência* (**Walls**), uma **via aérea falha (*failed airway*)** é definida por: (1) cenário *\"não intubo, não oxigeno\"* (incapacidade de manter $\\text{SpO}_2$ aceitável durante ou após uma ou mais tentativas falhas de laringoscopia); ou (2) falha em **três tentativas** de intubação por operador experiente mesmo mantendo oxigenação.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "o sistema de classificação da visualização laríngea de Cormack-Lehane não é recomendado para avaliação realizada por laringoscopia direta.",
        "explanation": "Incorreta: A classificação de **Cormack-Lehane** foi criada justamente para graduar a visualização glótica na **laringoscopia direta**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "visualização laríngea de graus 1 e 2 estão altamente relacionadas com intubação difícil ou falha.",
        "explanation": "Incorreta: Graus **1 e 2** de Cormack-Lehane representam boa visualização laríngea (intubação fácil); graus **3 e 4** é que se associam a intubação difícil/falha.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "na avaliação da dificuldade de laringoscopia (escala de Mallampati), na classe I, apenas o palato duro é visível, com a predição de provável nenhuma dificuldade.",
        "explanation": "Incorreta: Na classe **I** de Mallampati, visualizam-se palato mole, úvula, fauce e pilares amigdalianos (apenas palato duro visível corresponde à classe **IV**).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "“via aérea difícil” é definida como a falha em duas ou mais tentativas de intubação por operadores experientes.",
        "explanation": "Incorreta: Três tentativas falhas por operador experiente definem via aérea **falha**, e não duas tentativas como definição de via aérea difícil.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Segundo o *Manual de Manejo de Via Aérea na Emergência* (**Walls**), uma **via aérea falha (*failed airway*)** é definida por: (1) cenário *\"não intubo, não oxigeno\"* (incapacidade de manter $\\text{SpO}_2$ aceitável durante ou após uma ou mais tentativas falhas de laringoscopia); ou (2) falha em **três tentativas** de intubação por operador experiente mesmo mantendo oxigenação.\n- **B) Incorreta:** A classificação de **Cormack-Lehane** foi criada justamente para graduar a visualização glótica na **laringoscopia direta**.\n- **C) Incorreta:** Graus **1 e 2** de Cormack-Lehane representam boa visualização laríngea (intubação fácil); graus **3 e 4** é que se associam a intubação difícil/falha.\n- **D) Incorreta:** Na classe **I** de Mallampati, visualizam-se palato mole, úvula, fauce e pilares amigdalianos (apenas palato duro visível corresponde à classe **IV**).\n- **E) Incorreta:** Três tentativas falhas por operador experiente definem via aérea **falha**, e não duas tentativas como definição de via aérea difícil.",
    "perolaClinica": "A alternativa **A** está correta. Segundo o *Manual de Manejo de Via Aérea na Emergência* (**Walls**), uma **via aérea falha (*failed airway*)** é definida por: (1) cenário *\"não intubo, não oxigeno\"* (incapacidade de manter $\\text{SpO}_2$ aceitável durante…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-032",
    "code": "Q-UEPA24-0032",
    "numeroOriginal": 32,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Insuficiência Respiratória e Ventilação Mecânica",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-insuficiencia-respiratoria-e-ventilacao-mecanica",
    "tags": ["ventilacao-bolsa-valvula-mascara","moans","via-aerea","emergencia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "No manejo da via aérea, é necessário ter certeza que a oxigenação com o dispositivo de Ventilação Bolsa-Válvula-Máscara (VBVM) seja efetivo antes da administração de bloqueador neuromuscular. Das alternativas abaixo, não é um indicador de VBVM difícil:",
    "alternativas": [
      {
        "letter": "A",
        "text": "obesidade, especialmente IMC > 26 kg/m².",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "barba cerrada (em grande volume).",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "idade superior a 55 anos.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "ausência de um dos dentes.",
        "explanation": "A alternativa **D** está correta (não é indicador de VBVM difícil). Os cinco preditores clássicos de **ventilação bolsa-válvula-máscara (VBVM) difícil** seguem o mnemônico **MOANS** (*Walls Manual of Emergency Airway Management*):",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "“restrição”, como em pacientes com doenças reativas das vias aéreas e obstrução das vias aéreas de pequeno e médio calibre (como asma ou doença pulmonar obstrutiva crônica).",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta (não é indicador de VBVM difícil). Os cinco preditores clássicos de **ventilação bolsa-válvula-máscara (VBVM) difícil** seguem o mnemônico **MOANS** (*Walls Manual of Emergency Airway Management*):\n- **M**ask seal: selo inadequado (ex.: **barba cerrada**);\n- **O**besity / Obstruction: **obesidade (IMC > 26 kg/m²)** ou obstrução;\n- **A**ge: **idade > 55 anos**;\n- **N**o teeth: **edentulismo total** (ausência completa de dentes prejudica a sustentação facial da máscara — e **não a falta de apenas um dente**);\n- **S**tiffness: rigidez/baixa complacência ou **restrição/obstrução** de vias aéreas (asma, DPOC, SARA).\n- **A, B, C e E) Incorretas:** Todas integram formalmente o mnemônico **MOANS**.",
    "perolaClinica": "A alternativa **D** está correta (não é indicador de VBVM difícil). Os cinco preditores clássicos de **ventilação bolsa-válvula-máscara (VBVM) difícil** seguem o mnemônico **MOANS** (*Walls Manual of Emergency Airway",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-033",
    "code": "Q-UEPA24-0033",
    "numeroOriginal": 33,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Pneumonia Adquirida na Comunidade e Hospitalar",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-pneumonia-adquirida-na-comunidade-e-hospitalar",
    "tags": ["pneumonia-comunitaria","pac","leucocitose","diagnostico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre o diagnóstico da pneumonia comunitária, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "dor torácica pleurítica e expectoração hemoptoica excluem o diagnóstico.",
        "explanation": "Incorreta: Dor pleurítica e escarro hemoptoico/ferruginoso são sintomas clássicos de PAC (especialmente pneumocócica), jamais excluem o diagnóstico.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "pneumonia viral não apresenta, em nenhuma condição, sintomas respiratórios superiores, como rinorreia, odinofagia e tosse seca.",
        "explanation": "Incorreta: Pneumonias virais (influenza, VSR, SARS-CoV-2) frequentemente se iniciam com pródromos de vias aéreas superiores (rinorreia, odinofagia, tosse seca).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "apenas pneumonias de etiologia bacteriana podem resultar em infiltrados pulmonares compatíveis com síndrome do desconforto respiratório no adulto.",
        "explanation": "Incorreta: Pneumonias virais (ex.: COVID-19, influenza H1N1) são causas frequentes de SDRA.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a elevação da contagem de leucócitos não é específica para pneumonia, e contagens de 6.000/μL ou menos podem ser observadas em infecções bacterianas fulminantes.",
        "explanation": "A alternativa **D** está correta. Segundo as diretrizes da **SBPT** e **IDSA/ATS**, a leucocitose no hemograma tem baixa especificidade para PAC; além disso, **leucopenia** (≤ 4.000–6.000/µL) pode ocorrer em **pneumonias bacterianas fulminantes/sepse grave** (por consumo/sequestro medular) e constitui critério menor de gravidade da IDSA/ATS.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "contagens de leucócitos superiores a 20.000/μL são comuns em condições pulmonares agudas além da pneumonia comunitária bacteriana no momento da admissão. No entanto, contagens de leucócitos superiores a 20.000/μL são incomuns em condições pulmonares agudas além da pneumonia de etiologia bacteriana.",
        "explanation": "Incorreta: A alternativa é internamente contraditória em suas duas frases.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Segundo as diretrizes da **SBPT** e **IDSA/ATS**, a leucocitose no hemograma tem baixa especificidade para PAC; além disso, **leucopenia** (≤ 4.000–6.000/µL) pode ocorrer em **pneumonias bacterianas fulminantes/sepse grave** (por consumo/sequestro medular) e constitui critério menor de gravidade da IDSA/ATS.\n- **A) Incorreta:** Dor pleurítica e escarro hemoptoico/ferruginoso são sintomas clássicos de PAC (especialmente pneumocócica), jamais excluem o diagnóstico.\n- **B) Incorreta:** Pneumonias virais (influenza, VSR, SARS-CoV-2) frequentemente se iniciam com pródromos de vias aéreas superiores (rinorreia, odinofagia, tosse seca).\n- **C) Incorreta:** Pneumonias virais (ex.: COVID-19, influenza H1N1) são causas frequentes de SDRA.\n- **E) Incorreta:** A alternativa é internamente contraditória em suas duas frases.",
    "perolaClinica": "A alternativa **D** está correta. Segundo as diretrizes da **SBPT** e **IDSA/ATS**, a leucocitose no hemograma tem baixa especificidade para PAC; além disso, **leucopenia** (≤ 4.000–6.000/µL) pode ocorrer em **pneumonias bacterianas fulminantes/sepse grave**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-034",
    "code": "Q-UEPA24-0034",
    "numeroOriginal": 34,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "subtema": "Pneumonia Adquirida na Comunidade e Hospitalar",
    "temaSlug": "cm-pneumo",
    "subtemaSlug": "cm-pneumo-pneumonia-adquirida-na-comunidade-e-hospitalar",
    "tags": ["pac","pneumonia-aspirativa","antibioticoterapia","beta-lactamico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pneumonia é um diagnóstico comum em ambulatórios, departamentos de emergência e em pacientes hospitalizados. Sobre o tratamento da pneumonia bacteriana, analise as afirmativas abaixo.\nI. Em pacientes graves, o tratamento inicial com beta-lactâmico, em combinação com um macrolídeo, ou uma quinolona respiratória, é uma opção.\nII. Em pacientes ambulatoriais, ciprofloxacino é um antibiótico de primeira escolha, devido à sua cobertura anti-pseudomonas.\nIII. Etilismo e alterações agudas e crônicas do estado mental são fatores de risco associados às pneumonias aspirativas.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I e II",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "I",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I, II e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "II e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I e III",
        "explanation": "A alternativa **E** está correta (**I e III** são verdadeiras):",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta (**I e III** são verdadeiras):\n- **I. Correta:** Pela **SBPT** e **IDSA/ATS**, na PAC grave (UTI), o esquema empírico padrão é **beta-lactâmico IV** (ceftriaxona ou ampicilina-sulbactam) associado a **macrolídeo** (azitromicina/claritromicina) **ou quinolona respiratória** (levofloxacino/moxifloxacino).\n- **II. Incorreta:** **Ciprofloxacino** não é quinolona respiratória, possui fraca atividade contra *Streptococcus pneumoniae* e **jamais** é primeira escolha em PAC ambulatorial.\n- **III. Correta:** Etilismo, rebaixamento do nível de consciência, AVC, disfagia e convulsões são os principais fatores de risco para **pneumonia aspirativa**.\n- **A, B, C e D) Incorretas:** Incluem II (falsa) ou omitem III (verdadeira).",
    "perolaClinica": "A alternativa **E** está correta (**I e III** são",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-035",
    "code": "Q-UEPA24-0035",
    "numeroOriginal": 35,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "subtema": "Distúrbios do Sódio",
    "temaSlug": "cm-nefro",
    "subtemaSlug": "cm-nefro-disturbios-do-sodio",
    "tags": ["homeostase-do-sodio","osmorreceptores","hipotalamo","tubulopatias"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Condições que determinam alterações na homeostase de sódio e água podem determinar grande mortalidade em pacientes hospitalizados. Sobre esta condição, analise as afirmativas abaixo.\nI. O controle do balanço hídrico, embora possa ser realizado em pacientes críticos, têm valor de avaliação limitado, pois não é possível estimar efetivamente o volume recebido pelo paciente. Dessa forma, não se recomenda sua avaliação diária.\nII. Osmorreceptores estão localizados nos núcleos supraópticos e paraventriculares do hipotálamo.\nIII. Síndromes de Bartter ou Gitelman não costumam estar associado a distúrbios da reabsorção tubular de sódio.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, II e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "I e II",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "I",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "II",
        "explanation": "A alternativa **D** está correta (apenas **II** é verdadeira):",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta (apenas **II** é verdadeira):\n- **I. Incorreta:** O **balanço hídrico diário** rigoroso é ferramenta essencial e recomendada em pacientes críticos (UTI), pois o balanço positivo acumulado associa-se diretamente a maior mortalidade.\n- **II. Correta:** Os osmorreceptores hipotalâmicos (região anterior / núcleos **supraópticos e paraventriculares**, que também sintetizam o ADH/vasopressina) regulam a osmolaridade plasmática e a sede (Guyton / Rose).\n- **III. Incorreta:** As síndromes de **Bartter** (defeito no cotransportador NKCC2 da alça de Henle) e **Gitelman** (defeito no cotransportador NCC do túbulo contorcido distal) são classicamente **tubulopatias perdedoras de sódio (sal)** associadas a alcalose metabólica hipocalêmica.\n- **A, B, C e E) Incorretas:** Incluem afirmativas falsas (I ou III).",
    "perolaClinica": "A alternativa **D** está correta (apenas **II** é",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-036",
    "code": "Q-UEPA24-0036",
    "numeroOriginal": 36,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos por Uso de Substâncias e Abstinência",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-por-uso-de-substancias-e-abstinencia",
    "tags": ["abstinencia-alcoolica","delirium-tremens","alcoolismo","emergencia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente masculino, 27 anos, atualmente em situação de rua, dá entrada na Unidade de Pronto Atendimento (UPA) trazido pelo SAMU. Ele fora encontrado “desacordado” por populares, que acionaram o 192. O médico plantonista, que está em seu primeiro dia de trabalho na Unidade, é informado pela recepcionista que ele tem diversas entradas recentes na instituição. Além disso, relata que o paciente é etilista crônico, e que já tentou suicídio algumas vezes. O paciente, no momento da admissão, está vigil e interage adequadamente com o examinador, apresentando tremor e agitação psicomotora extrema. Nega uso de álcool ou outra substância. A partir deste caso, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "síndrome de Abstinência Alcoólica (SAA) é uma possível causa para o quadro e, caso delirium esteja presente, trata-se de estado de abstinência alcoólica com delirium.",
        "explanation": "A alternativa **A** está correta. Em paciente etilista crônico com **tremor e agitação psicomotora extrema**, a **Síndrome de Abstinência Alcoólica (SAA)** é hipótese prioritária (mesmo quando o paciente nega etilismo); caso evolua com alteração do nível de consciência/atenção e desorientação (delirium), configura-se **estado de abstinência alcoólica com delirium (*delirium tremens*)** — emergência médica com alta mortalidade se não tratada com benzodiazepínicos e tiamina (DSM-5 / CID-10 F10.4).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "a SAA costuma ter evolução benigna, não sendo relatados casos graves quando confirmada, e costuma durar de 1 a 3 dias.",
        "explanation": "Incorreta: A SAA pode evoluir de forma grave/potencialmente fatal (convulsões, *delirium tremens*, disautonomia).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a SAA é uma possível causa para o quadro, e diarreia e hipotensão arterial reforçam essa hipótese.",
        "explanation": "Incorreta: A SAA cursa com **hiperatividade autonômica** (**hipertensão**, taquicardia, sudorese, febre), não hipotensão e diarreia (mais típicas de abstinência de opioides).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "devido ao quadro de agitação psicomotora, SAA é um diagnóstico de possibilidade remota, uma vez que pacientes em abstinência costumam apresentar sonolência.",
        "explanation": "Incorreta: Agitação psicomotora, ansiedade e insônia (não sonolência) são sintomas cardinais da SAA.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "tremor é pouco frequente na SAA, e reforça a hipótese de se tratar de libação alcoólica.",
        "explanation": "Incorreta: O **tremor** é o sinal mais precoce e frequente da SAA.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Em paciente etilista crônico com **tremor e agitação psicomotora extrema**, a **Síndrome de Abstinência Alcoólica (SAA)** é hipótese prioritária (mesmo quando o paciente nega etilismo); caso evolua com alteração do nível de consciência/atenção e desorientação (delirium), configura-se **estado de abstinência alcoólica com delirium (*delirium tremens*)** — emergência médica com alta mortalidade se não tratada com benzodiazepínicos e tiamina (DSM-5 / CID-10 F10.4).\n- **B) Incorreta:** A SAA pode evoluir de forma grave/potencialmente fatal (convulsões, *delirium tremens*, disautonomia).\n- **C) Incorreta:** A SAA cursa com **hiperatividade autonômica** (**hipertensão**, taquicardia, sudorese, febre), não hipotensão e diarreia (mais típicas de abstinência de opioides).\n- **D) Incorreta:** Agitação psicomotora, ansiedade e insônia (não sonolência) são sintomas cardinais da SAA.\n- **E) Incorreta:** O **tremor** é o sinal mais precoce e frequente da SAA.",
    "perolaClinica": "A alternativa **A** está correta. Em paciente etilista crônico com **tremor e agitação psicomotora extrema**, a **Síndrome de Abstinência Alcoólica (SAA)** é hipótese prioritária (mesmo quando o paciente nega etilismo); caso evolua com alteração do nível de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-037",
    "code": "Q-UEPA24-0037",
    "numeroOriginal": 37,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Ética Médica, Bioética e Medicina Legal",
    "subtema": "Código de Ética Médica e Sigilo Profissional",
    "temaSlug": "mp-etica",
    "subtemaSlug": "mp-etica-codigo-de-etica-medica-e-sigilo-profissional",
    "tags": ["codigo-de-etica-medica","autonomia","cuidados-paliativos","uti"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente idosa, 76 anos, dá entrada na Unidade de Pronto Atendimento (UPA) com queixa de dispneia aos mínimos esforços após ingesta de açaí. A filha refere que o quadro teve início há menos de 24 horas, e que a mãe tem diagnóstico de “insuficiência cardíaca e pulmonar”, pois era tabagista por mais de 25 anos, e que vem sofrendo em demasia durante diversas internações recentes por pneumonia. Devido à gravidade do quadro, a médica que a atendeu indicou transferência imediata para a sala vermelha e unidade de terapia intensiva (UTI). O médico da unidade de graves, no entanto, considerou que a paciente não tinha recomendação de UTI, pois não tinha “indicação de intubação” e era uma “paciente paliativa”. Sobre o quadro descrito, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "os cuidados paliativos podem ser fornecidos em qualquer momento do curso da doença e, no caso descrito, não é necessário fazer completa avaliação de prognóstico e acessar eventual prévio plano de cuidados. Deve-se perguntar à família se concordam com a indicação de intubação.",
        "explanation": "Incorreta: A avaliação prognóstica completa e o acesso ao plano prévio de cuidados são **indispensáveis**; além disso, a indicação técnica de intubação é decisão médica compartilhada, não transferida isoladamente como pergunta à família.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "devido à sua complexidade, os cuidados paliativos não devem ser praticados no departamento de emergência, especialmente em uma UPA, já que enfatizam o cuidado centrado na doença, devendo ser esse o principal objetivo no quadro descrito.",
        "explanation": "Incorreta: Cuidados paliativos **devem** ser iniciados inclusive na emergência/UPA e têm foco centrado na **pessoa**, não apenas na doença.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "por se tratar de paciente em cuidados paliativos, a declaração de óbito só pode ser preenchida pelo médico que indicou tais medidas.",
        "explanation": "Incorreta: A DO pode ser preenchida pelo médico assistente ou pelo plantonista que constatou o óbito com causa definida.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "independente de avaliação prévia, de plano de tratamento elaborado pelo médico assistente, bem como do prognóstico da paciente, não há indicação de transferência para UTI.",
        "explanation": "Incorreta: Não se pode negar UTI de forma automática sem avaliar prognóstico, reversibilidade (ex.: aspiração aguda de açaí) e plano de cuidados.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "com base no código de ética médica, é vedado ao médico desrespeitar o direito do paciente ou de seu representante legal de decidir livremente sobre a execução de práticas diagnósticas ou terapêuticas, salvo em caso de iminente risco de morte. No caso descrito, a abordagem e indicação de eventuais terapias, teria como suporte eventual plano de cuidados e avaliação prognóstica prévia, preferencialmente.",
        "explanation": "A alternativa **E** está correta. O **art. 31 do Código de Ética Médica (CFM)** veda ao médico desrespeitar o direito do paciente ou de seu representante legal de decidir livremente sobre práticas diagnósticas ou terapêuticas, salvo em iminente risco de morte. Em pacientes com doenças crônicas avançadas na emergência, decisões sobre proporcionalidade terapêutica (UTI, intubação, cuidados paliativos) exigem **avaliação prognóstica criteriosa, consulta ao plano avançado de cuidados/diretivas antecipadas e comunicação compartilhada**, jamais um rótulo unilateral e imediato de \"paciente paliativa sem indicação de UTI\".",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. O **art. 31 do Código de Ética Médica (CFM)** veda ao médico desrespeitar o direito do paciente ou de seu representante legal de decidir livremente sobre práticas diagnósticas ou terapêuticas, salvo em iminente risco de morte. Em pacientes com doenças crônicas avançadas na emergência, decisões sobre proporcionalidade terapêutica (UTI, intubação, cuidados paliativos) exigem **avaliação prognóstica criteriosa, consulta ao plano avançado de cuidados/diretivas antecipadas e comunicação compartilhada**, jamais um rótulo unilateral e imediato de \"paciente paliativa sem indicação de UTI\".\n- **A) Incorreta:** A avaliação prognóstica completa e o acesso ao plano prévio de cuidados são **indispensáveis**; além disso, a indicação técnica de intubação é decisão médica compartilhada, não transferida isoladamente como pergunta à família.\n- **B) Incorreta:** Cuidados paliativos **devem** ser iniciados inclusive na emergência/UPA e têm foco centrado na **pessoa**, não apenas na doença.\n- **C) Incorreta:** A DO pode ser preenchida pelo médico assistente ou pelo plantonista que constatou o óbito com causa definida.\n- **D) Incorreta:** Não se pode negar UTI de forma automática sem avaliar prognóstico, reversibilidade (ex.: aspiração aguda de açaí) e plano de cuidados.",
    "perolaClinica": "A alternativa **E** está correta. O **art. 31 do Código de Ética Médica (CFM)** veda ao médico desrespeitar o direito do paciente ou de seu representante legal de decidir livremente sobre práticas diagnósticas ou terapêuticas, salvo em iminente risco de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-038",
    "code": "Q-UEPA24-0038",
    "numeroOriginal": 38,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria",
    "subtema": "Transtornos por Uso de Substâncias e Abstinência",
    "temaSlug": "cm-psiq",
    "subtemaSlug": "cm-psiq-transtornos-por-uso-de-substancias-e-abstinencia",
    "tags": ["abstinencia-de-opioides","morfina","sindromes-de-abstinencia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em síndromes de abstinência, no caso de medicamentos, identificar possíveis classes, auxilia na definição do tratamento. Dentre as substâncias abaixo, aquela que habitualmente, em sua abstenção, cursa com pacientes alertas e orientados é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Clonazepam.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Fenobarbital.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Morfina.",
        "explanation": "A alternativa **C** está correta. Na **síndrome de abstinência de opioides** (**morfina**, heroína, metadona, fentanil), o paciente apresenta sintomas muito desconfortáveis (midríase, bocejos, lacrimejamento, rinorreia, piloereção, cólicas abdominais, diarreia, mialgia e ansiedade), porém permanece **habitualmente alerta, vigil e orientado** (sem delirium ou convulsões e raramente ameaçadora à vida em adultos), segundo o **DSM-5** e **Goldfrank's Toxicologic Emergencies**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Álcool.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Nenhuma das anteriores.",
        "explanation": "Incorreta: A morfina responde diretamente à questão.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Na **síndrome de abstinência de opioides** (**morfina**, heroína, metadona, fentanil), o paciente apresenta sintomas muito desconfortáveis (midríase, bocejos, lacrimejamento, rinorreia, piloereção, cólicas abdominais, diarreia, mialgia e ansiedade), porém permanece **habitualmente alerta, vigil e orientado** (sem delirium ou convulsões e raramente ameaçadora à vida em adultos), segundo o **DSM-5** e **Goldfrank's Toxicologic Emergencies**.\n- **A, B e D) Incorretas:** A abstinência de depressores GABAérgicos (**benzodiazepínicos** como clonazepam, **barbitúricos** como fenobarbital e **álcool**) cursa com alto risco de **delirium, desorientação, alucinações e convulsões** potencialmente fatais.\n- **E) Incorreta:** A morfina responde diretamente à questão.",
    "perolaClinica": "A alternativa **C** está correta. Na **síndrome de abstinência de opioides** (**morfina**, heroína, metadona, fentanil), o paciente apresenta sintomas muito desconfortáveis (midríase, bocejos, lacrimejamento, rinorreia, piloereção, cólicas abdominais,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-039",
    "code": "Q-UEPA24-0039",
    "numeroOriginal": 39,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia e Metabologia",
    "subtema": "Doenças da Hipófise",
    "temaSlug": "cm-endocrino",
    "subtemaSlug": "cm-endocrino-doencas-da-hipofise",
    "tags": ["hormonio-do-crescimento","gh","igf-1","fisiologia-endocrina"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os efeitos fisiológicos do hormônio do crescimento (GH) estão associados ao:",
    "alternativas": [
      {
        "letter": "A",
        "text": "aumento da gordura corporal devido ao seu efeito catabólico.",
        "explanation": "Incorreta: O GH é lipolítico e **reduz** a gordura corporal (aumentando massa magra).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "crescimento linear pós-natal.",
        "explanation": "A alternativa **B** está correta. O **hormônio do crescimento (GH / somatotrofina)** atua direta e indiretamente (via estímulo hepático à produção de **IGF-1**) promovendo o **crescimento linear ósseo pós-natal** nas placas epifisárias, além de exercer efeito **anabólico proteico** (balanço nitrogenado positivo), **lipolítico** (redução de massa adiposa) e **contrarregulador da insulina** (hiperglicemiante), segundo Guyton e Williams Textbook of Endocrinology.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "melhora dos índices glicêmicos em pacientes diabéticos.",
        "explanation": "Incorreta: O GH causa resistência insulínica e **piora** os índices glicêmicos (efeito diabetogênico).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "diminuição dos níveis de Fator de Crescimento Associado à Insulina (IGF-1).",
        "explanation": "Incorreta: O GH **aumenta** os níveis séricos de IGF-1.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "balanço nitrogenado negativo.",
        "explanation": "Incorreta: Por ser anabólico (estimular síntese proteica), promove **balanço nitrogenado positivo**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. O **hormônio do crescimento (GH / somatotrofina)** atua direta e indiretamente (via estímulo hepático à produção de **IGF-1**) promovendo o **crescimento linear ósseo pós-natal** nas placas epifisárias, além de exercer efeito **anabólico proteico** (balanço nitrogenado positivo), **lipolítico** (redução de massa adiposa) e **contrarregulador da insulina** (hiperglicemiante), segundo Guyton e Williams Textbook of Endocrinology.\n- **A) Incorreta:** O GH é lipolítico e **reduz** a gordura corporal (aumentando massa magra).\n- **C) Incorreta:** O GH causa resistência insulínica e **piora** os índices glicêmicos (efeito diabetogênico).\n- **D) Incorreta:** O GH **aumenta** os níveis séricos de IGF-1.\n- **E) Incorreta:** Por ser anabólico (estimular síntese proteica), promove **balanço nitrogenado positivo**.",
    "perolaClinica": "A alternativa **B** está correta. O **hormônio do crescimento (GH / somatotrofina)** atua direta e indiretamente (via estímulo hepático à produção de **IGF-1**) promovendo o **crescimento linear ósseo pós-natal** nas placas epifisárias, além de exercer efeito…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-040",
    "code": "Q-UEPA24-0040",
    "numeroOriginal": 40,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "subtema": "Insuficiência Cardíaca",
    "temaSlug": "cm-cardio",
    "subtemaSlug": "cm-cardio-insuficiencia-cardiaca",
    "tags": ["insuficiencia-cardiaca","refluxo-hepatojugular","hepatomegalia-congestiva"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente masculino, ribeirinho, 43 anos, etilista, em consulta ambulatorial com queixa de dor abdominal em hipocôndrio direito, com irradiação para ombro ipsilateral, há 7 dias, acompanhada de náuseas, ortopneia e edema de membros inferiores. Refere que procurou atendimento médico há alguns dias, e que recebera o diagnóstico de “doença do fígado”. Nega febre ou outros sintomas sistêmicos. Sobre este caso, e a propedêutica das doenças hepáticas, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a impressão diagnóstica provavelmente está equivocada, caso o paciente apresente refluxo hepatojugular no exame físico. Um diagnóstico provável é insuficiência cardíaca.",
        "explanation": "A alternativa **A** está correta. A associação de **ortopneia**, **edema de membros inferiores** e **dor em hipocôndrio direito** (por distensão da cápsula de Glisson na congestão hepática passiva), somada à presença de **refluxo hepatojugular positivo** ao exame físico, aponta fortemente para **insuficiência cardíaca congestiva** (possivelmente cardiomiopatia alcoólica ou chagásica) como causa primária, e não doença hepática isolada (Diretriz Brasileira de IC — SBC / Porto Semiologia).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "a impressão diagnóstica provavelmente está equivocada, caso a consistência do fígado seja firme ou duro à palpação, e desta forma um diagnóstico improvável é cirrose hepática.",
        "explanation": "Incorreta: Fígado de consistência endurecida/firme e borda fina/nodular é justamente achado compatível com **cirrose hepática** (não a torna improvável).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a impressão diagnóstica provavelmente está correta, e deve se tratar de coledocolitíase, caso o paciente não apresente icterícia, já que o paciente é etilista.",
        "explanation": "Incorreta: Coledocolitíase não explica ortopneia e edema de MMII, e classicamente cursa com icterícia colestática.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a impressão diagnóstica provavelmente está incorreta, e deve se tratar de doença de Chagas, uma vez que à palpação o fígado esteja com tamanho diminuído.",
        "explanation": "Incorreta: Fígado de tamanho diminuído não é critério diagnóstico de doença de Chagas (que na IC direita causa hepatomegalia congestiva).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a impressão diagnóstica provavelmente está correta, caso o paciente sinta dor à palpação hepática, o que não acontece em quadros de hepatite viral e de insuficiência cardíaca congestiva.",
        "explanation": "Incorreta: Tanto hepatite viral aguda quanto insuficiência cardíaca congestiva causam distensão da cápsula hepática e **dor à palpação do fígado**.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. A associação de **ortopneia**, **edema de membros inferiores** e **dor em hipocôndrio direito** (por distensão da cápsula de Glisson na congestão hepática passiva), somada à presença de **refluxo hepatojugular positivo** ao exame físico, aponta fortemente para **insuficiência cardíaca congestiva** (possivelmente cardiomiopatia alcoólica ou chagásica) como causa primária, e não doença hepática isolada (Diretriz Brasileira de IC — SBC / Porto Semiologia).\n- **B) Incorreta:** Fígado de consistência endurecida/firme e borda fina/nodular é justamente achado compatível com **cirrose hepática** (não a torna improvável).\n- **C) Incorreta:** Coledocolitíase não explica ortopneia e edema de MMII, e classicamente cursa com icterícia colestática.\n- **D) Incorreta:** Fígado de tamanho diminuído não é critério diagnóstico de doença de Chagas (que na IC direita causa hepatomegalia congestiva).\n- **E) Incorreta:** Tanto hepatite viral aguda quanto insuficiência cardíaca congestiva causam distensão da cápsula hepática e **dor à palpação do fígado**.",
    "perolaClinica": "A alternativa **A** está correta. A associação de **ortopneia**, **edema de membros inferiores** e **dor em hipocôndrio direito** (por distensão da cápsula de Glisson na congestão hepática passiva), somada à presença de **refluxo hepatojugular positivo** ao…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-041",
    "code": "Q-UEPA24-0041",
    "numeroOriginal": 41,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": ["sequencia-rapida-de-intubacao","politrauma","via-aerea-definitiva","atls"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo feminino, 32 anos, trazida após queda da garupa da moto, pelo SAMU, em prancha rígida e com o colar cervical, com respiração ruidosa, hematoma subgaleal temporal e inconsciente (Glasgow 7). Considerando a necessidade de realizar sequência rápida para intubação, assinale a alternativa mais adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A paciente deve ser transferida para o centro cirúrgico, facilitando o auxílio do anestesista no manejo da via aérea.",
        "explanation": "Incorreta: A garantia da via aérea definitiva (A do ABCDE) ocorre imediatamente na sala de trauma; jamais se transporta paciente com Glasgow 7 e respiração ruidosa sem via aérea assegurada.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A hiperextensão cervical pode ser feita caso a via aérea seja difícil, considerando a urgência respiratória.",
        "explanation": "Incorreta: **Hiperextensão cervical é contraindicada** no politraumatizado pelo risco de lesão medular cervical.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A pré-oxigenação não faz parte da sequência rápida de intubação, considerando o risco de broncoaspiração.",
        "explanation": "Incorreta: A **pré-oxigenação** (3–5 min com $\\text{O}_2$ a 100%) é etapa fundamental da SRI para prolongar o tempo de apneia segura sem dessaturação.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Deve-se solicitar auxílio de outro profissional de saúde, visto administração síncrona de drogas sedativas durante a intubação.",
        "explanation": "A alternativa **D** está correta. Na **Sequência Rápida de Intubação (SRI)** no politraumatizado com Glasgow ≤ 8 e suspeita de lesão cervical (**ATLS 10ª edição**), é indispensável atuar com equipe/auxílio de outros profissionais treinados — tanto para **estabilização manual em linha da coluna cervical** após abertura da parte anterior do colar quanto para **administração síncrona das medicações** (indutor + bloqueador neuromuscular) e aspiração/suporte.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "A passagem de sonda nasogástrica, seguida de aspiração, antes da intubação diminui o risco de broncoaspiração.",
        "explanation": "Incorreta: Passagem de SNG antes da intubação em paciente com Glasgow 7 (sem proteção de via aérea) e possível fratura de base de crânio pode desencadear vômito/broncoaspiração e falsa via intracraniana.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Na **Sequência Rápida de Intubação (SRI)** no politraumatizado com Glasgow ≤ 8 e suspeita de lesão cervical (**ATLS 10ª edição**), é indispensável atuar com equipe/auxílio de outros profissionais treinados — tanto para **estabilização manual em linha da coluna cervical** após abertura da parte anterior do colar quanto para **administração síncrona das medicações** (indutor + bloqueador neuromuscular) e aspiração/suporte.\n- **A) Incorreta:** A garantia da via aérea definitiva (A do ABCDE) ocorre imediatamente na sala de trauma; jamais se transporta paciente com Glasgow 7 e respiração ruidosa sem via aérea assegurada.\n- **B) Incorreta:** **Hiperextensão cervical é contraindicada** no politraumatizado pelo risco de lesão medular cervical.\n- **C) Incorreta:** A **pré-oxigenação** (3–5 min com $\\text{O}_2$ a 100%) é etapa fundamental da SRI para prolongar o tempo de apneia segura sem dessaturação.\n- **E) Incorreta:** Passagem de SNG antes da intubação em paciente com Glasgow 7 (sem proteção de via aérea) e possível fratura de base de crânio pode desencadear vômito/broncoaspiração e falsa via intracraniana.",
    "perolaClinica": "A alternativa **D** está correta. Na **Sequência Rápida de Intubação (SRI)** no politraumatizado com Glasgow ≤ 8 e suspeita de lesão cervical (**ATLS 10ª edição**), é indispensável atuar com equipe/auxílio de outros profissionais treinados — tanto para…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-042",
    "code": "Q-UEPA24-0042",
    "numeroOriginal": 42,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Meningites e Sepse em Pediatria",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-meningites-e-sepse-em-pediatria",
    "tags": ["meningite-pediatrica","puncao-lombar","manometria","liquor"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 3 anos, com febre, náuseas, vômitos e irritabilidade há 24h. Durante avaliação inicial, identificado sinais de irritação meníngea. Para controle da febre, mãe administrou AAS infantil uma hora antes de levar a criança ao pronto-socrro (PS). Quanto a punção lombar necessária para confirmação diagnóstica, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O local mais adequado e, portanto, mais utilizado para a punção lombar é o espaço entre as vertebras L1 e L2.",
        "explanation": "Incorreta: Em crianças, o cone medular pode estender-se até L2–L3; portanto, a punção lombar deve ser feita nos espaços **L3–L4 ou L4–L5** (nunca L1–L2).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "A agulha utilizada para o procedimento diagnóstico de punção lombar é chamada de agulha de Tuohy.",
        "explanation": "Incorreta: A agulha de **Tuohy** é usada para anestesia **peridural**; a punção lombar diagnóstica usa agulhas espinhais (Quincke, Whitacre ou Sprotte).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Para realizar a manometria do espaço do liquor cefalorraquidiano, a posição preferencial é decúbito lateral.",
        "explanation": "A alternativa **C** está correta. Para aferição fidedigna da **pressão de abertura (manometria do LCR)** durante a punção lombar, o paciente deve estar obrigatoriamente em **decúbito lateral** (com pernas relaxadas/levemente estendidas no momento da medição), pois a posição sentada eleva artificialmente a pressão hidrostática (SBP / Harrison).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "A ultrassonografia é utilizada para guiar diversos tipos de punção, porém no caso da punção lombar, é inútil.",
        "explanation": "Incorreta: A ultrassonografia à beira-leito é útil para identificar espaços intervertebrais e aumentar a taxa de sucesso da punção lombar, sobretudo em lactentes e obesos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A punção lombar está contraindicada por 12 horas após o uso do AAS infantil, devido risco de sangramento.",
        "explanation": "Incorreta: O uso isolado de AAS **não contraindica** a punção lombar diagnóstica de urgência na suspeita de meningite (além de o AAS dever ser evitado em crianças febris pelo risco de Síndrome de Reye).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Para aferição fidedigna da **pressão de abertura (manometria do LCR)** durante a punção lombar, o paciente deve estar obrigatoriamente em **decúbito lateral** (com pernas relaxadas/levemente estendidas no momento da medição), pois a posição sentada eleva artificialmente a pressão hidrostática (SBP / Harrison).\n- **A) Incorreta:** Em crianças, o cone medular pode estender-se até L2–L3; portanto, a punção lombar deve ser feita nos espaços **L3–L4 ou L4–L5** (nunca L1–L2).\n- **B) Incorreta:** A agulha de **Tuohy** é usada para anestesia **peridural**; a punção lombar diagnóstica usa agulhas espinhais (Quincke, Whitacre ou Sprotte).\n- **D) Incorreta:** A ultrassonografia à beira-leito é útil para identificar espaços intervertebrais e aumentar a taxa de sucesso da punção lombar, sobretudo em lactentes e obesos.\n- **E) Incorreta:** O uso isolado de AAS **não contraindica** a punção lombar diagnóstica de urgência na suspeita de meningite (além de o AAS dever ser evitado em crianças febris pelo risco de Síndrome de Reye).",
    "perolaClinica": "A alternativa **C** está correta. Para aferição fidedigna da **pressão de abertura (manometria do LCR)** durante a punção lombar, o paciente deve estar obrigatoriamente em **decúbito lateral** (com pernas relaxadas/levemente estendidas no momento da medição),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-043",
    "code": "Q-UEPA24-0043",
    "numeroOriginal": 43,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "subtema": "Hiperplasia Prostática Benigna e Câncer de Próstata",
    "temaSlug": "cg-uro",
    "subtemaSlug": "cg-uro-hiperplasia-prostatica-benigna-e-cancer-de-prostata",
    "tags": ["hpb","retencao-urinaria-aguda","cateterismo-vesical","urologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Homem de 68 anos, vai ao pronto-socorro (PS) com dor em hipogástrio e ausência de micção há 8 horas. Refere que já vinha apresentado dificuldade miccional há cerca de um ano, com polaciúria, nictúria de 4 vezes, jato fraco e entrecortado. No último mês, passou a usar fralda devido incontinência urinária, até o momento que precisou ir ao PS. Durante avaliação inicial, verificado dor em hipogástrio, com sensação de massa nesta região e som sub-maciço à percussão abdominal. Nega antecedente cirúrgico e tem PSA total colhido há 6 meses atrás no valor de 4,5 ng/dl. Assinale a conduta mais adequada para o caso.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Iniciar alfa-bloqueador para provável hiperplasia prostática e encaminhar para o urologista.",
        "explanation": "Incorreta: Alfa-bloqueador isolado não resolve imediatamente o bexigoma doloroso em RUA.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Iniciar hidratação endovenosa, diuréticos para estimular a micção e deixar o paciente em observação.",
        "explanation": "Incorreta: Administrar líquidos IV e diuréticos em obstrução infravesical agrava a distensão vesical e a dor, com risco de lesão renal pós-renal.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Realizar cateterismo vesical de demora com sonda de Foley e encaminhar para o urologista.",
        "explanation": "A alternativa **C** está correta. Idoso com sintomas crônicos do trato urinário inferior (LUTS) + incontinência por transbordamento recente evoluindo com anúria/dor hipogástrica há 8 horas e **bexigoma palpável/submaciço** apresenta **retenção urinária aguda (RUA)** secundária à obstrução infravesical (provável HPB). Pela diretriz da **SBU / AUA**, a conduta imediata prioritária no pronto-socorro é a **descompressão vesical por cateterismo vesical de demora (sonda de Foley)** (associando-se posteriormente alfa-bloqueador para aumentar chance de sucesso na retirada da sonda e seguimento urológico).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Solicitar Tomografia de Pelve para avaliar massa pélvica e encaminhar para avaliação do urologista.",
        "explanation": "Incorreta: A massa hipogástrica é claramente um bexigoma (clínico); TC de pelve atrasa o alívio imediato.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Iniciar inibidor da 5 alfa-redutase para provável hiperplasia prostática e encaminhar para o urologista.",
        "explanation": "Incorreta: Inibidores da 5α-redutase (finasterida/dutasterida) levam meses para reduzir o volume prostático, sem efeito agudo na RUA.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Idoso com sintomas crônicos do trato urinário inferior (LUTS) + incontinência por transbordamento recente evoluindo com anúria/dor hipogástrica há 8 horas e **bexigoma palpável/submaciço** apresenta **retenção urinária aguda (RUA)** secundária à obstrução infravesical (provável HPB). Pela diretriz da **SBU / AUA**, a conduta imediata prioritária no pronto-socorro é a **descompressão vesical por cateterismo vesical de demora (sonda de Foley)** (associando-se posteriormente alfa-bloqueador para aumentar chance de sucesso na retirada da sonda e seguimento urológico).\n- **A) Incorreta:** Alfa-bloqueador isolado não resolve imediatamente o bexigoma doloroso em RUA.\n- **B) Incorreta:** Administrar líquidos IV e diuréticos em obstrução infravesical agrava a distensão vesical e a dor, com risco de lesão renal pós-renal.\n- **D) Incorreta:** A massa hipogástrica é claramente um bexigoma (clínico); TC de pelve atrasa o alívio imediato.\n- **E) Incorreta:** Inibidores da 5α-redutase (finasterida/dutasterida) levam meses para reduzir o volume prostático, sem efeito agudo na RUA.",
    "perolaClinica": "A alternativa **C** está correta. Idoso com sintomas crônicos do trato urinário inferior (LUTS) + incontinência por transbordamento recente evoluindo com anúria/dor hipogástrica há 8 horas e **bexigoma palpável/submaciço** apresenta **retenção urinária aguda…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-044",
    "code": "Q-UEPA24-0044",
    "numeroOriginal": 44,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Torácico",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-toracico",
    "tags": ["tamponamento-cardiaco","triade-de-beck","trauma-toracico","atls"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 19 anos, estava dirigindo carro que teve colisão frontal com caminhão. Chegou consciente, com a pele fria e taquicárdico, reclamando de dor torácica. Realizada avaliação clínica inicial, com identificação de abrasão transversal no tórax, provavelmente provocado pelo volante. A ausculta pulmonar não identificou ruídos patológicos e as bulhas cardíacas estavam abafadas e rítmicas (130 bpm), com ingurgitamento de jugulares, hipotensão 90x50 mmHg, abdome doloroso em epigástrio, sem sinais de irritação peritoneal, com diurese clara pela sonda vesical. A causa mais provável do quadro acima é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "tamponamento cardíaco.",
        "explanation": "A alternativa **A** está correta. O paciente apresenta a **Tríade de Beck** completa após trauma torácico fechado contra o volante: **hipotensão arterial (90×50 mmHg) + turgência jugular + abafamento de bulhas cardíacas**, com **ausculta pulmonar normal** (afastando pneumotórax hipertensivo) — quadro clássico de **tamponamento cardíaco** (choque obstrutivo), conforme o **ATLS 10ª edição**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "pneumotórax hipertensivo.",
        "explanation": "Incorreta: Pneumotórax hipertensivo também causa choque obstrutivo e turgência jugular, mas apresenta **murmúrio vesicular abolido e hipertimpanismo** unilateral (aqui a ausculta pulmonar está normal).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "hemoperitônio.",
        "explanation": "Incorreta: Hemoperitônio causa choque hipovolêmico com veias jugulares **colabadas**, não ingurgitadas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "tórax instável.",
        "explanation": "Incorreta: Tórax instável cursa com respiração paradoxal e hipoxemia/contusão pulmonar, não tríade de Beck.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "hematoma retroperitônio.",
        "explanation": "Incorreta: Hematoma retroperitoneal causa choque hipovolêmico com jugulares colabadas.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. O paciente apresenta a **Tríade de Beck** completa após trauma torácico fechado contra o volante: **hipotensão arterial (90×50 mmHg) + turgência jugular + abafamento de bulhas cardíacas**, com **ausculta pulmonar normal** (afastando pneumotórax hipertensivo) — quadro clássico de **tamponamento cardíaco** (choque obstrutivo), conforme o **ATLS 10ª edição**.\n- **B) Incorreta:** Pneumotórax hipertensivo também causa choque obstrutivo e turgência jugular, mas apresenta **murmúrio vesicular abolido e hipertimpanismo** unilateral (aqui a ausculta pulmonar está normal).\n- **C) Incorreta:** Hemoperitônio causa choque hipovolêmico com veias jugulares **colabadas**, não ingurgitadas.\n- **D) Incorreta:** Tórax instável cursa com respiração paradoxal e hipoxemia/contusão pulmonar, não tríade de Beck.\n- **E) Incorreta:** Hematoma retroperitoneal causa choque hipovolêmico com jugulares colabadas.",
    "perolaClinica": "A alternativa **A** está correta. O paciente apresenta a **Tríade de Beck** completa após trauma torácico fechado contra o volante: **hipotensão arterial (90×50 mmHg) + turgência jugular + abafamento de bulhas cardíacas**, com **ausculta pulmonar normal**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-045",
    "code": "Q-UEPA24-0045",
    "numeroOriginal": 45,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Queimaduras e Lesão Inalatória",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-queimaduras-e-lesao-inalatoria",
    "tags": ["queimadura-eletrica","mioglobinuria","rabdomiolise","debito-urinario"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Trabalhador da companhia elétrica recebeu grande carga de energia durante o trabalho, com queimadura de 3º grau em mão esquerda e pé direito. Levado imediatamente para receber assistência médica, foi monitorizado com eletrocardiograma, oxímetro e controle do débito urinário através de sonda vesical de demora, que evidenciou urina vermelho escuro. Neste caso, a melhor conduta inicial é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "irrigar com soro fisiológico a bexiga para diminuir risco de tamponamento por coágulos.",
        "explanation": "Incorreta: A coloração vermelho-escura decorre de pigmentos heme (mioglobina), não de hematúria maciça com coágulos vesicais.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "hidratar segundo a fórmula de Parkland na dose de 1ml/kg peso/%superfície queimada.",
        "explanation": "Incorreta: A fórmula para queimadura elétrica no ATLS 10ª ed. é **4 mL/kg/%SCQ** (não 1 mL/kg), e o ajuste real é guiado pela meta de diurese (~100 mL/h).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "pesquisar mioglobinúria antes de expandir a volemia do paciente desnecessariamente.",
        "explanation": "Incorreta: Jamais se deve aguardar confirmação laboratorial de mioglobinúria para iniciar a expansão volêmica diante de urina pigmentada em queimadura elétrica.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "iniciar a administração de solução de manitol intravenoso, para forçar diurese osmótica.",
        "explanation": "Incorreta: Manitol/alcalinização urinária não são medidas iniciais isoladas de rotina antes da expansão volêmica adequada (ATLS não recomenda manitol rotineiro antes da reposição com cristaloide).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "iniciar expansão volêmica com intuito de alcançar débito urinário de cerca de 100ml/h.",
        "explanation": "A alternativa **E** está correta. Em **queimaduras elétricas de alta voltagem**, a lesão muscular profunda é muito maior do que a área cutânea visível, causando **rabdomiólise maciça com mioglobinúria** (urina vermelho-escura/\"cor de coca-cola\") e alto risco de necrose tubular aguda. Pelo **ATLS 10ª edição** (4 mL/kg/%SCQ para queimadura elétrica), a conduta inicial prioritária é **expansão volêmica vigorosa com cristaloide (Ringer Lactato) visando manter débito urinário elevado de ~100 mL/h** em adultos (ou 1–1,5 mL/kg/h) até o clareamento completo da urina.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Em **queimaduras elétricas de alta voltagem**, a lesão muscular profunda é muito maior do que a área cutânea visível, causando **rabdomiólise maciça com mioglobinúria** (urina vermelho-escura/\"cor de coca-cola\") e alto risco de necrose tubular aguda. Pelo **ATLS 10ª edição** (4 mL/kg/%SCQ para queimadura elétrica), a conduta inicial prioritária é **expansão volêmica vigorosa com cristaloide (Ringer Lactato) visando manter débito urinário elevado de ~100 mL/h** em adultos (ou 1–1,5 mL/kg/h) até o clareamento completo da urina.\n- **A) Incorreta:** A coloração vermelho-escura decorre de pigmentos heme (mioglobina), não de hematúria maciça com coágulos vesicais.\n- **B) Incorreta:** A fórmula para queimadura elétrica no ATLS 10ª ed. é **4 mL/kg/%SCQ** (não 1 mL/kg), e o ajuste real é guiado pela meta de diurese (~100 mL/h).\n- **C) Incorreta:** Jamais se deve aguardar confirmação laboratorial de mioglobinúria para iniciar a expansão volêmica diante de urina pigmentada em queimadura elétrica.\n- **D) Incorreta:** Manitol/alcalinização urinária não são medidas iniciais isoladas de rotina antes da expansão volêmica adequada (ATLS não recomenda manitol rotineiro antes da reposição com cristaloide).",
    "perolaClinica": "A alternativa **E** está correta. Em **queimaduras elétricas de alta voltagem**, a lesão muscular profunda é muito maior do que a área cutânea visível, causando **rabdomiólise maciça com mioglobinúria** (urina vermelho-escura/\"cor de coca-cola\") e alto risco…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-046",
    "code": "Q-UEPA24-0046",
    "numeroOriginal": 46,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Hemorragia Digestiva Baixa",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-hemorragia-digestiva-baixa",
    "tags": ["hematoquezia","hdb","aspiracao-nasogastrica","hemorragia-digestiva"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 72 anos foi encontrada no chão do banheiro, após segundo episódio de hematoquezia no mesmo dia. Como antecedente pessoal relevante, paciente é tabagista inveterada há 40 anos. Após medidas iniciais para expansão volêmica, controle dos sinais vitais e coleta de exames laboratoriais, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "endoscopia digestiva alta",
        "explanation": "Incorreta (no algoritmo clássico cobrado): Na prática atual (ACG 2023), a EDA direta tem substituído a SNG em muitos centros, mas a banca cobrou literalmente a etapa clássica do Sabiston (aspiração nasogástrica inicial após estabilização).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "colonoscopia",
        "explanation": "Incorreta: Colonoscopia exige preparo de cólon e só deve ser realizada após afastar fonte alta em paciente com hematoquezia grave/instável.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "aspiração nasogástrica",
        "explanation": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. Cerca de **10% a 15% dos quadros de hematoquezia volumosa com instabilidade hemodinâmica** (aqui paciente encontrada no chão após síncope/choque) têm origem no **trato gastrointestinal superior (HDA maciça)**. Seguindo o algoritmo clássico do **Sabiston** (*Tratado de Cirurgia*), após estabilização hemodinâmica inicial, realiza-se **passagem de sonda e aspiração nasogástrica** (para rastrear rapidamente sangue ou bile — se sangue vivo/borra de café, prossegue-se diretamente para EDA; se aspirado bilioso sem sangue, afasta-se HDA ativa proximal ao piloro).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "arteriografia seletiva",
        "explanation": "Incorreta: Arteriografia seletiva é reservada a sangramento ativo persistente (> 0,5–1 mL/min) quando não há localização endoscópica ou instabilidade refratária.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "cintilografia",
        "explanation": "Incorreta: Cintilografia com hemácias marcadas tem baixa disponibilidade de urgência e não é exame terapêutico nem inicial após estabilização.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. Cerca de **10% a 15% dos quadros de hematoquezia volumosa com instabilidade hemodinâmica** (aqui paciente encontrada no chão após síncope/choque) têm origem no **trato gastrointestinal superior (HDA maciça)**. Seguindo o algoritmo clássico do **Sabiston** (*Tratado de Cirurgia*), após estabilização hemodinâmica inicial, realiza-se **passagem de sonda e aspiração nasogástrica** (para rastrear rapidamente sangue ou bile — se sangue vivo/borra de café, prossegue-se diretamente para EDA; se aspirado bilioso sem sangue, afasta-se HDA ativa proximal ao piloro).\n- **A) Incorreta (no algoritmo clássico cobrado):** Na prática atual (ACG 2023), a EDA direta tem substituído a SNG em muitos centros, mas a banca cobrou literalmente a etapa clássica do Sabiston (aspiração nasogástrica inicial após estabilização).\n- **B) Incorreta:** Colonoscopia exige preparo de cólon e só deve ser realizada após afastar fonte alta em paciente com hematoquezia grave/instável.\n- **D) Incorreta:** Arteriografia seletiva é reservada a sangramento ativo persistente (> 0,5–1 mL/min) quando não há localização endoscópica ou instabilidade refratária.\n- **E) Incorreta:** Cintilografia com hemácias marcadas tem baixa disponibilidade de urgência e não é exame terapêutico nem inicial após estabilização.",
    "perolaClinica": "A alternativa **C** é o **gabarito oficial definitivo da UEPA 2024**. Cerca de **10% a 15% dos quadros de hematoquezia volumosa com instabilidade hemodinâmica** (aqui paciente encontrada no chão após síncope/choque) têm origem no **trato gastrointestinal…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-047",
    "code": "Q-UEPA24-0047",
    "numeroOriginal": 47,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Colorretal e Pólipos",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-colorretal-e-polipos",
    "tags": ["rastreamento-colorretal","cancer-colorretal","inca","aps"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher procurou a Unidade Básica de Saúde (UBS), após ler informações nas redes sociais sobre rastreamento de Câncer de cólon. Considerando que a paciente está assintomática, tem 46 anos e não possui fator de risco familiar. A orientação mais adequada para ela quanto ao rastreamento no seu caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "iniciar rastreamento com uma vídeo-colonoscopia e depois repetir a cada 5 anos.",
        "explanation": "Incorreta: Mesmo quando indicada, a colonoscopia de rastreamento em risco habitual tem intervalo de **10 anos** (não 5 anos) quando normal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "orientar que ela não está na idade para rastreamento, devendo retornar aos 50 anos.",
        "explanation": "A alternativa **B** está correta segundo as **Diretrizes do Ministério da Saúde (Caderno de Atenção Primária nº 29 — Rastreamento) e INCA**, que preconizam o início do rastreamento populacional de câncer colorretal em indivíduos de risco habitual (assintomáticos e sem história familiar) a partir dos **50 anos de idade** (até 75 anos). *(Nota didática: sociedades americanas como USPSTF e ACS atualizaram o início para 45 anos desde 2021, mas no contexto de UBS/SUS cobrado pela UEPA 2024 prevalece o marco de 50 anos do MS/INCA.)*",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "iniciar rastreamento com exame de pesquisa de sangue oculto nas fezes, anualmente.",
        "explanation": "Incorreta: PSOF anual pelo MS inicia-se aos **50 anos** em pacientes de risco habitual.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "iniciar rastreamento com enema opaco, e depois repetir a cada 3 anos.",
        "explanation": "Incorreta: Enema opaco não é método recomendado para rastreamento de câncer colorretal.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "iniciar rastreamento com retossigmoidoscopia, e depois repetir a cada 5 anos.",
        "explanation": "Incorreta: Não se indica iniciar aos 46 anos sem fatores de risco pelo protocolo do MS.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta segundo as **Diretrizes do Ministério da Saúde (Caderno de Atenção Primária nº 29 — Rastreamento) e INCA**, que preconizam o início do rastreamento populacional de câncer colorretal em indivíduos de risco habitual (assintomáticos e sem história familiar) a partir dos **50 anos de idade** (até 75 anos). *(Nota didática: sociedades americanas como USPSTF e ACS atualizaram o início para 45 anos desde 2021, mas no contexto de UBS/SUS cobrado pela UEPA 2024 prevalece o marco de 50 anos do MS/INCA.)*\n- **A) Incorreta:** Mesmo quando indicada, a colonoscopia de rastreamento em risco habitual tem intervalo de **10 anos** (não 5 anos) quando normal.\n- **C) Incorreta:** PSOF anual pelo MS inicia-se aos **50 anos** em pacientes de risco habitual.\n- **D) Incorreta:** Enema opaco não é método recomendado para rastreamento de câncer colorretal.\n- **E) Incorreta:** Não se indica iniciar aos 46 anos sem fatores de risco pelo protocolo do MS.",
    "perolaClinica": "A alternativa **B** está correta segundo as **Diretrizes do Ministério da Saúde (Caderno de Atenção Primária nº 29 — Rastreamento) e INCA**, que preconizam o início do rastreamento populacional de câncer colorretal em indivíduos de risco habitual…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-048",
    "code": "Q-UEPA24-0048",
    "numeroOriginal": 48,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Lesões Iatrogênicas de Via Biliar e Cistos",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-lesoes-iatrogenicas-de-via-biliar-e-cistos",
    "tags": ["lesao-de-via-biliar","colecistectomia","colestase","pos-operatorio"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Durante consulta de rotina, uma senhora de 63 anos diagnosticou colelitíase por cálculo único de 3 cm, através de uma ultrassonografia (US) abdominal. Referia sentir sensação de empachamento pós-prandial, azia e em raras vezes, dor leve há 1 ano. Foi submetida a colecistectomia videolaparoscópica sem aparentes intercorrências, evoluindo no segundo dia pós-operatório com episódio de dor abdominal, febre e icterícia. Sobre este caso, assinale a alternativa mais adequada.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A solicitação de enzimas hepáticas, bilirrubinas e US de abdome é suficiente para confirmar possível obstrução biliar iatrogênica.",
        "explanation": "A alternativa **A** está correta. Diante de **dor abdominal, febre e icterícia no pós-operatório precoce (2º DPO) de colecistectomia videolaparoscópica**, a suspeita imediata é de **lesão/obstrução iatrogênica de via biliar** (ou biloma/cálculo residual). A avaliação inicial de primeira linha (Sabiston / WSES) consiste em **laboratório hepático (bilirrubinas totais e frações, FA, GGT, TGO, TGP)** associado à **ultrassonografia abdominal**, capaz de demonstrar dilatação das vias biliares intra/extra-hepáticas e coleções peribiliares, confirmando a suspeita de obstrução biliar antes de exames invasivos.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "A colecistopancreatografia retrógrada endoscópica (CPRE) deve ser a primeira opção para o caso, pois inclusive trata cálculo residual.",
        "explanation": "Incorreta: A CPRE é invasiva e não deve ser o primeiro exame antes da propedêutica laboratorial e de imagem não invasiva (US/colangioRM), além de não avaliar bem a árvore biliar proximal em transecção completa.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Colangiografia transparieto hepática oferece estudo dos ductos biliares proximais à lesão e por isso deve anteceder a CPRE.",
        "explanation": "Incorreta: A colangiografia transparieto-hepática (CTPH) é invasiva e não precede sistematicamente a avaliação não invasiva ou a CPRE.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A colangiografia por ressonância magnética está contraindicada até o quadro febril regredir e o paciente ficar afebril por, pelo menos, 24 horas.",
        "explanation": "Incorreta: Febre não contraindica a colangiorressonância (exame não invasivo padrão-ouro para mapear a anatomia biliar).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A tomografia de abdome com contraste não é adequada para avaliação do caso devido a incapacidade de identificar cálculos de colesterol.",
        "explanation": "Incorreta: A TC de abdome com contraste é excelente para identificar bilomas, coleções infectadas e lesões vasculares associadas (mesmo que cálculos puros de colesterol sejam menos visíveis).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Diante de **dor abdominal, febre e icterícia no pós-operatório precoce (2º DPO) de colecistectomia videolaparoscópica**, a suspeita imediata é de **lesão/obstrução iatrogênica de via biliar** (ou biloma/cálculo residual). A avaliação inicial de primeira linha (Sabiston / WSES) consiste em **laboratório hepático (bilirrubinas totais e frações, FA, GGT, TGO, TGP)** associado à **ultrassonografia abdominal**, capaz de demonstrar dilatação das vias biliares intra/extra-hepáticas e coleções peribiliares, confirmando a suspeita de obstrução biliar antes de exames invasivos.\n- **B) Incorreta:** A CPRE é invasiva e não deve ser o primeiro exame antes da propedêutica laboratorial e de imagem não invasiva (US/colangioRM), além de não avaliar bem a árvore biliar proximal em transecção completa.\n- **C) Incorreta:** A colangiografia transparieto-hepática (CTPH) é invasiva e não precede sistematicamente a avaliação não invasiva ou a CPRE.\n- **D) Incorreta:** Febre não contraindica a colangiorressonância (exame não invasivo padrão-ouro para mapear a anatomia biliar).\n- **E) Incorreta:** A TC de abdome com contraste é excelente para identificar bilomas, coleções infectadas e lesões vasculares associadas (mesmo que cálculos puros de colesterol sejam menos visíveis).",
    "perolaClinica": "A alternativa **A** está correta. Diante de **dor abdominal, febre e icterícia no pós-operatório precoce (2º DPO) de colecistectomia videolaparoscópica**, a suspeita imediata é de **lesão/obstrução iatrogênica de via biliar** (ou biloma/cálculo residual). A…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-049",
    "code": "Q-UEPA24-0049",
    "numeroOriginal": 49,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": ["sindrome-de-dumping","cirurgia-bariatrica","sleeve","pos-operatorio"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 28 anos, submetido a cirurgia bariátrica de Sleeve há 6 meses, procura auxílio médico devido episódios de vertigem, sudorese fria e ruborização, frequentemente após a alimentação. Baseado no caso, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O quadro clínico está relacionado a provável hipovitaminose de Tiamina, o que leva a alterações neurológicas.",
        "explanation": "Incorreta: Deficiência de tiamina (B1) manifesta-se por **encefalopatia de Wernicke** (ataxia, oftalmoplegia, confusão) ou neuropatia periférica (beribéri), não sintomas vasomotores exclusivamente pós-prandiais.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Considerando tratar-se de uma cirurgia disabsortiva, o paciente deve ter diarréia osmótica e resposta vagal.",
        "explanation": "Incorreta: O *Sleeve* gástrico é técnica predominantemente **restritiva/metabólica**, e não disabsortiva.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "O paciente deve estar evoluindo com colelitíase de colesterol, e por isso os sintomas ocorrem de maneira pós-prandial.",
        "explanation": "Incorreta: Colelitíase manifesta-se por cólica biliar em hipocôndrio direito, não vertigem + sudorese fria + ruborização.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A restrição cirúrgica provoca refluxo gastro-esofágico e esôfago de Barret, com sintomas relacionados a reposta vaso-vagal.",
        "explanation": "Incorreta: DRGE causa pirose e regurgitação, não sintomas vasomotores típicos de dumping.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "O consumo de dietas ricas em carboidratos provocam uma atividade osmótica elevada no duodeno, causando os sintomas.",
        "explanation": "A alternativa **E** está correta. Episódios pós-prandiais de **vertigem, sudorese fria e ruborização (sintomas vasomotores)** após cirurgia bariátrica (embora mais comuns no *bypass*, podem ocorrer também após *Sleeve* pelo esvaziamento gástrico acelerado) caracterizam a **Síndrome de Dumping precoce**. O mecanismo fisiopatológico decorre da chegada rápida de quimo hiperosmolar — especialmente após **refeições ricas em carboidratos simples** — ao duodeno/jejuno, provocando influxo rápido de líquido intravascular para a luz intestinal, hipovolemia relativa e liberação de peptídeos vasoativos (Sabiston).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Episódios pós-prandiais de **vertigem, sudorese fria e ruborização (sintomas vasomotores)** após cirurgia bariátrica (embora mais comuns no *bypass*, podem ocorrer também após *Sleeve* pelo esvaziamento gástrico acelerado) caracterizam a **Síndrome de Dumping precoce**. O mecanismo fisiopatológico decorre da chegada rápida de quimo hiperosmolar — especialmente após **refeições ricas em carboidratos simples** — ao duodeno/jejuno, provocando influxo rápido de líquido intravascular para a luz intestinal, hipovolemia relativa e liberação de peptídeos vasoativos (Sabiston).\n- **A) Incorreta:** Deficiência de tiamina (B1) manifesta-se por **encefalopatia de Wernicke** (ataxia, oftalmoplegia, confusão) ou neuropatia periférica (beribéri), não sintomas vasomotores exclusivamente pós-prandiais.\n- **B) Incorreta:** O *Sleeve* gástrico é técnica predominantemente **restritiva/metabólica**, e não disabsortiva.\n- **C) Incorreta:** Colelitíase manifesta-se por cólica biliar em hipocôndrio direito, não vertigem + sudorese fria + ruborização.\n- **D) Incorreta:** DRGE causa pirose e regurgitação, não sintomas vasomotores típicos de dumping.",
    "perolaClinica": "A alternativa **E** está correta. Episódios pós-prandiais de **vertigem, sudorese fria e ruborização (sintomas vasomotores)** após cirurgia bariátrica (embora mais comuns no *bypass*, podem ocorrer também após *Sleeve* pelo esvaziamento gástrico acelerado)…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-050",
    "code": "Q-UEPA24-0050",
    "numeroOriginal": 50,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Pancreatite Aguda e Crônica",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-pancreatite-aguda-e-cronica",
    "tags": ["pancreatite-aguda-grave","sinal-de-cullen","uti","suporte-clinico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente do sexo masculino, 47 anos, com história de dor abdominal de forte intensidade, em faixa, súbita, associado a presença de sinal de Cullen há 2 dias. Apresenta-se no Pronto-socorro (PS) com frequência cardíaca de 130 bpm, pressão arterial de 100 x 60 mmHg, obnubilado e com oligúria de 400ml/24h. Único dado comemorativo na sua história pregressa é o fato de ter dislipidemia familiar. Quanto a estratégia de tratamento do caso, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "O tratamento a princípio é conservador, com internação em unidade de terapia intensiva, controle da dor e medidas de suporte para controle das funções vitais.",
        "explanation": "A alternativa **A** está correta. Dor abdominal súbita em faixa, **sinal de Cullen** (equimose periumbilical por hemorragia retroperitoneal), hipertrigliceridemia presumida (dislipidemia familiar) e **disfunção orgânica** (obnubilação, taquicardia 130 bpm, oligúria 400 mL/24h) configuram **pancreatite aguda grave** (Classificação de Atlanta). Pelas diretrizes da **IAP/APA** e **ACG**, o tratamento inicial é **clínico/conservador em UTI**, com ressuscitação volêmica guiada (preferencialmente Ringer Lactato), analgesia eficaz e suporte orgânico intensivo.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "O uso da morfina no controle do quadro de dor é fundamental, devido a intensidade da dor e ao menor efeito causador de espasmo sobre o esfíncter de Oddi.",
        "explanation": "Incorreta: Embora opioides possam ser usados na pancreatite aguda, a justificativa apresentada está errada (classicamente atribui-se à morfina **maior** tendência teórica a espasmo do esfíncter de Oddi que outros opioides, ainda que sem impacto clínico comprovado).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A presença de oligúria contraindica o uso de drogas vasoativas como a dopamina, permanecendo a estratégia de expansão volêmica com soro fisiológico.",
        "explanation": "Incorreta: Oligúria não contraindica vasopressores em choque refratário à volume (sendo a **noradrenalina** o vasopressor de escolha, e prefere-se Ringer Lactato ao SF 0,9%).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "A Nutrição Parenteral Total (NPT) é primordial como forma de suporte nutricional, considerando que não se deve utilizar o tubo digestivo para alimentação.",
        "explanation": "Incorreta: A **nutrição enteral** precoce (assim que tolerada) é superior à NPT por preservar a barreira mucosa intestinal e reduzir infecção de necrose pancreática.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "A cobertura profilática de antibióticos com carbapenêmicos ou associação de ciprofloxacino e clindamicina está indicada mesmo sem sinais infecciosos.",
        "explanation": "Incorreta: **Antibioticoprofilaxia é contraindicada** na pancreatite aguda (mesmo com necrose estéril); antibióticos só são iniciados diante de **necrose infectada** comprovada ou forte suspeita de infecção.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Dor abdominal súbita em faixa, **sinal de Cullen** (equimose periumbilical por hemorragia retroperitoneal), hipertrigliceridemia presumida (dislipidemia familiar) e **disfunção orgânica** (obnubilação, taquicardia 130 bpm, oligúria 400 mL/24h) configuram **pancreatite aguda grave** (Classificação de Atlanta). Pelas diretrizes da **IAP/APA** e **ACG**, o tratamento inicial é **clínico/conservador em UTI**, com ressuscitação volêmica guiada (preferencialmente Ringer Lactato), analgesia eficaz e suporte orgânico intensivo.\n- **B) Incorreta:** Embora opioides possam ser usados na pancreatite aguda, a justificativa apresentada está errada (classicamente atribui-se à morfina **maior** tendência teórica a espasmo do esfíncter de Oddi que outros opioides, ainda que sem impacto clínico comprovado).\n- **C) Incorreta:** Oligúria não contraindica vasopressores em choque refratário à volume (sendo a **noradrenalina** o vasopressor de escolha, e prefere-se Ringer Lactato ao SF 0,9%).\n- **D) Incorreta:** A **nutrição enteral** precoce (assim que tolerada) é superior à NPT por preservar a barreira mucosa intestinal e reduzir infecção de necrose pancreática.\n- **E) Incorreta:** **Antibioticoprofilaxia é contraindicada** na pancreatite aguda (mesmo com necrose estéril); antibióticos só são iniciados diante de **necrose infectada** comprovada ou forte suspeita de infecção.",
    "perolaClinica": "A alternativa **A** está correta. Dor abdominal súbita em faixa, **sinal de Cullen** (equimose periumbilical por hemorragia retroperitoneal), hipertrigliceridemia presumida (dislipidemia familiar) e **disfunção orgânica** (obnubilação, taquicardia 130 bpm,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-051",
    "code": "Q-UEPA24-0051",
    "numeroOriginal": 51,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Atendimento Inicial ao Politraumatizado",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-atendimento-inicial-ao-politraumatizado",
    "tags": ["choque-hemorragico","classificacao-atls","politraumatizado"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente vítima de colisão de trânsito chega ao pronto atendimento com frequência cardíaca (FC) de 110 batimentos por minuto (bpm) e pressão arterial (PA) de 120 x 85 mmHg. Segundo o ATLS esse paciente possui que classe de choque?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Choque classe I",
        "explanation": "Incorreta: No choque Classe I (< 15% de perda), a FC é < 100 bpm e a pressão de pulso é normal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Choque classe II",
        "explanation": "A alternativa **B** está correta. Pela tabela de classificação do **choque hemorrágico do ATLS (10ª edição)**, o paciente com **taquicardia leve a moderada (FC entre 100 e 120 bpm — aqui 110 bpm)**, **PA sistólica ainda preservada (120 mmHg)** e **estreitamento da pressão de pulso** (aumento da diastólica para 85 mmHg por vasoconstrição compensatória; pressão de pulso = 35 mmHg) encontra-se em **Choque Classe II** (perda de 15% a 30% da volemia).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Choque classe III",
        "explanation": "Incorreta: No choque Classe III (30–40%), há FC > 120 bpm e **hipotensão arterial sistólica franca**.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Choque classe IV",
        "explanation": "Incorreta: No choque Classe IV (> 40%), há FC > 140 bpm e hipotensão grave com risco imediato de vida.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Choque classe V",
        "explanation": "Incorreta: Não existe Classe V no ATLS.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Pela tabela de classificação do **choque hemorrágico do ATLS (10ª edição)**, o paciente com **taquicardia leve a moderada (FC entre 100 e 120 bpm — aqui 110 bpm)**, **PA sistólica ainda preservada (120 mmHg)** e **estreitamento da pressão de pulso** (aumento da diastólica para 85 mmHg por vasoconstrição compensatória; pressão de pulso = 35 mmHg) encontra-se em **Choque Classe II** (perda de 15% a 30% da volemia).\n- **A) Incorreta:** No choque Classe I (< 15% de perda), a FC é < 100 bpm e a pressão de pulso é normal.\n- **C) Incorreta:** No choque Classe III (30–40%), há FC > 120 bpm e **hipotensão arterial sistólica franca**.\n- **D) Incorreta:** No choque Classe IV (> 40%), há FC > 140 bpm e hipotensão grave com risco imediato de vida.\n- **E) Incorreta:** Não existe Classe V no ATLS.",
    "perolaClinica": "A alternativa **B** está correta. Pela tabela de classificação do **choque hemorrágico do ATLS (10ª edição)**, o paciente com **taquicardia leve a moderada (FC entre 100 e 120 bpm — aqui 110 bpm)**, **PA sistólica ainda preservada (120 mmHg)** e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-052",
    "code": "Q-UEPA24-0052",
    "numeroOriginal": 52,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-complicacoes-pos-operatorias-e-infeccao-de-sitio-cirurgico",
    "tags": ["infeccao-de-sitio-cirurgico","isc","complicacoes-pos-operatorias"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Sobre as complicações cirúrgicas é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a pneumonia é a complicação respiratória mais comum no pós-operatório.",
        "explanation": "Incorreta: A complicação pulmonar mais comum no pós-operatório é a **atelectasia**, não a pneumonia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a mais comum causa de febre nas primeiras 48 horas de pós-operatório é a infecção do sítio cirúrgico.",
        "explanation": "Incorreta: Nas primeiras 24–48 horas de pós-operatório, a causa mais comum de febre é a **resposta inflamatória/metabólica ao trauma cirúrgico** (e atelectasia), não ISC (exceto infecções fulminantes por *S. pyogenes* ou *Clostridium*).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "o hematoma representa a mais benigna complicação pós-operatória.",
        "explanation": "Incorreta: Hematomas podem causar compressão grave de vias aéreas (ex.: tireoidectomia), choque ou infecção secundária — a complicação mais benigna costuma ser o **seroma**.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "as bactérias gram positivas são as mais presentes nas infecções de sítio cirúrgico",
        "explanation": "A alternativa **D** está correta. Segundo o **Sabiston** (*Tratado de Cirurgia*) e o **CDC/ANVISA**, os patógenos mais frequentemente isolados nas **infecções de sítio cirúrgico (ISC)** são **bactérias Gram-positivas** da microbiota cutânea — com destaque para *Staphylococcus aureus* (principal agente global) e *Staphylococcus* coagulase-negativo.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "as infecções do sítio cirúrgico ocorrem mais comumente entre 2 e 3 dias após o procedimento cirúrgico.",
        "explanation": "Incorreta: A maioria das ISC manifesta-se entre o **5º e o 10º dia de pós-operatório** (tipicamente após 5–7 dias), não entre 2 e 3 dias.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Segundo o **Sabiston** (*Tratado de Cirurgia*) e o **CDC/ANVISA**, os patógenos mais frequentemente isolados nas **infecções de sítio cirúrgico (ISC)** são **bactérias Gram-positivas** da microbiota cutânea — com destaque para *Staphylococcus aureus* (principal agente global) e *Staphylococcus* coagulase-negativo.\n- **A) Incorreta:** A complicação pulmonar mais comum no pós-operatório é a **atelectasia**, não a pneumonia.\n- **B) Incorreta:** Nas primeiras 24–48 horas de pós-operatório, a causa mais comum de febre é a **resposta inflamatória/metabólica ao trauma cirúrgico** (e atelectasia), não ISC (exceto infecções fulminantes por *S. pyogenes* ou *Clostridium*).\n- **C) Incorreta:** Hematomas podem causar compressão grave de vias aéreas (ex.: tireoidectomia), choque ou infecção secundária — a complicação mais benigna costuma ser o **seroma**.\n- **E) Incorreta:** A maioria das ISC manifesta-se entre o **5º e o 10º dia de pós-operatório** (tipicamente após 5–7 dias), não entre 2 e 3 dias.",
    "perolaClinica": "A alternativa **D** está correta. Segundo o **Sabiston** (*Tratado de Cirurgia*) e o **CDC/ANVISA**, os patógenos mais frequentemente isolados nas **infecções de sítio cirúrgico (ISC)** são **bactérias Gram-positivas** da microbiota cutânea — com destaque…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-053",
    "code": "Q-UEPA24-0053",
    "numeroOriginal": 53,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e ATLS",
    "subtema": "Trauma Cranioencefálico e Raquimedular",
    "temaSlug": "cg-trauma",
    "subtemaSlug": "cg-trauma-trauma-cranioencefalico-e-raquimedular",
    "tags": ["escala-de-coma-de-glasgow","tce","trauma-cranioencefalico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente sofreu trauma e apresenta abertura ocular espontânea, resposta verbal confusa e flexão anormal dos membros. De acordo com a escala de coma de Glasgow sua pontuação é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "8",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "9",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "10",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "11",
        "explanation": "A alternativa **D** está correta (**11 pontos**). Pela **Escala de Coma de Glasgow (ATLS 10ª edição)**:",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "12",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta (**11 pontos**). Pela **Escala de Coma de Glasgow (ATLS 10ª edição)**:\n- **Abertura ocular espontânea:** **4**;\n- **Resposta verbal confusa:** **4**;\n- **Resposta motora em flexão anormal (postura de decorticação):** **3**.\n- **Soma total:** $4 + 4 + 3 = \\mathbf{11}$ (TCE moderado: 9 a 12).\n- **A, B, C e E) Incorretas:** Somas incompatíveis com os parâmetros descritos (flexão normal/retirada valeria 4 e totalizaria 12; extensão anormal valeria 2 e totalizaria 10).",
    "perolaClinica": "A alternativa **D** está correta (**11 pontos**). Pela **Escala de Coma de Glasgow (ATLS 10ª",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-054",
    "code": "Q-UEPA24-0054",
    "numeroOriginal": 54,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Perioperatório, Cicatrização e Anestesiologia",
    "subtema": "Cicatrização de Feridas e Cirurgia Plástica Básica",
    "temaSlug": "cg-periop",
    "subtemaSlug": "cg-periop-cicatrizacao-de-feridas-e-cirurgia-plastica-basica",
    "tags": ["cicatrizacao","fase-proliferativa","fibroblastos"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os fibroblastos são as células principais de que fase da cicatrização?",
    "alternativas": [
      {
        "letter": "A",
        "text": "Inflamatória",
        "explanation": "Incorreta: Na fase inflamatória predominam **neutrófilos** (primeiras 24–48h) e **macrófagos** (48–96h).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Proliferativa",
        "explanation": "A alternativa **B** está correta. Segundo o **Sabiston**, na **fase proliferativa** da cicatrização (aproximadamente do 4º ao 12º–14º dia), os **fibroblastos** (junto às células endoteliais) são as células predominantes, sendo responsáveis pela fibroplasia, síntese de matriz extracelular/colágeno (inicialmente tipo III) e formação do tecido de granulação.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Maturação",
        "explanation": "Incorreta: A fase de maturação/remodelação caracteriza-se por redução da celularidade e remodelamento de colágeno tipo III em tipo I por metaloproteinases.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Hemostática",
        "explanation": "Incorreta: Na fase hemostática predominam **plaquetas** e cascata de fibrina.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Regenerativa",
        "explanation": "Incorreta: Não é uma das fases clássicas da cicatrização descritas no Sabiston.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Segundo o **Sabiston**, na **fase proliferativa** da cicatrização (aproximadamente do 4º ao 12º–14º dia), os **fibroblastos** (junto às células endoteliais) são as células predominantes, sendo responsáveis pela fibroplasia, síntese de matriz extracelular/colágeno (inicialmente tipo III) e formação do tecido de granulação.\n- **A) Incorreta:** Na fase inflamatória predominam **neutrófilos** (primeiras 24–48h) e **macrófagos** (48–96h).\n- **C) Incorreta:** A fase de maturação/remodelação caracteriza-se por redução da celularidade e remodelamento de colágeno tipo III em tipo I por metaloproteinases.\n- **D) Incorreta:** Na fase hemostática predominam **plaquetas** e cascata de fibrina.\n- **E) Incorreta:** Não é uma das fases clássicas da cicatrização descritas no Sabiston.",
    "perolaClinica": "A alternativa **B** está correta. Segundo o **Sabiston**, na **fase proliferativa** da cicatrização (aproximadamente do 4º ao 12º–14º dia), os **fibroblastos** (junto às células endoteliais) são as células predominantes, sendo responsáveis pela fibroplasia,…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-055",
    "code": "Q-UEPA24-0055",
    "numeroOriginal": 55,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "DRGE e Doenças do Esôfago",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-drge-e-doencas-do-esofago",
    "tags": ["drge","refluxo-fisiologico","fisiologia-esofagica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "O refluxo gastroesofágico fisiológico é mais comum em um paciente:",
    "alternativas": [
      {
        "letter": "A",
        "text": "acordado e de pé",
        "explanation": "A alternativa **A** está correta. Conforme o **Sabiston** (*Tratado de Cirurgia*), o **refluxo gastroesofágico fisiológico** ocorre tipicamente em indivíduos saudáveis quando **acordados e em posição ortostática (de pé)**, sobretudo no período pós-prandial (mediado por relaxamentos transitórios do esfíncter esofagiano inferior após distensão gástrica), sendo rapidamente clareado pela gravidade, peristalse e saliva. Já o refluxo **noturno/durante o sono em decúbito supino** é classicamente **patológico** e associado a esofagite grave.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "acordado em posição supina",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "dormindo sentado",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "dormindo em posição supina",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "dormindo em posição prona",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Conforme o **Sabiston** (*Tratado de Cirurgia*), o **refluxo gastroesofágico fisiológico** ocorre tipicamente em indivíduos saudáveis quando **acordados e em posição ortostática (de pé)**, sobretudo no período pós-prandial (mediado por relaxamentos transitórios do esfíncter esofagiano inferior após distensão gástrica), sendo rapidamente clareado pela gravidade, peristalse e saliva. Já o refluxo **noturno/durante o sono em decúbito supino** é classicamente **patológico** e associado a esofagite grave.\n- **B, C, D e E) Incorretas:** O refluxo durante o sono ou em posição supina não é o padrão do refluxo fisiológico (caracterizando exposição ácida anormal/patológica na pHmetria).",
    "perolaClinica": "A alternativa **A** está correta. Conforme o **Sabiston** (*Tratado de Cirurgia*), o **refluxo gastroesofágico fisiológico** ocorre tipicamente em indivíduos saudáveis quando **acordados e em posição ortostática (de pé)**, sobretudo no período pós-prandial…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-056",
    "code": "Q-UEPA24-0056",
    "numeroOriginal": 56,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Hérnias e Parede Abdominal",
    "subtema": "Hérnia Inguinal e Femoral",
    "temaSlug": "cg-hernias",
    "subtemaSlug": "cg-hernias-hernia-inguinal-e-femoral",
    "tags": ["classificacao-de-nyhus","hernia-inguinal-indireta","questao-anulada"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "A classificação de Nyhus é a mais difundida entre as hérnias da região inguinal. Assinale a alternativa que contém a classificação, segundo Nyhus, de uma hérnia inguinal indireta com parede posterior intacta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Nyhus I",
        "explanation": "Correta (causa de anulação por duplicidade): Nyhus I = hérnia inguinal indireta com anel interno normal e parede posterior intacta.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "Nyhus II",
        "explanation": "Correta (causa de anulação por duplicidade): Nyhus II = hérnia inguinal indireta com anel interno dilatado e parede posterior intacta.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "Nyhus IIIA",
        "explanation": "Incorreta: Nyhus IIIA = hérnia inguinal **direta** (defeito da parede posterior).",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "Nyhus IIIB",
        "explanation": "Incorreta: Nyhus IIIB = hérnia inguinal indireta com destruição/defeito da parede posterior (ou mista/pantalona).",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "Nyhus IIIC",
        "explanation": "Incorreta: Nyhus IIIC = hérnia **femoral**.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2024.** Na **Classificação de Nyhus** (Sabiston), **tanto Nyhus I quanto Nyhus II** correspondem a **hérnias inguinais indiretas com parede posterior intacta** — a diferença entre elas está no calibre do anel inguinal interno (**Nyhus I:** anel interno normal; **Nyhus II:** anel interno dilatado/alargado, porém com parede posterior preservada). Como o enunciado omitiu o estado do anel inguinal interno, há **duas alternativas igualmente corretas (A e B)**, motivando a anulação oficial.\n- **A) Correta (causa de anulação por duplicidade):** Nyhus I = hérnia inguinal indireta com anel interno normal e parede posterior intacta.\n- **B) Correta (causa de anulação por duplicidade):** Nyhus II = hérnia inguinal indireta com anel interno dilatado e parede posterior intacta.\n- **C) Incorreta:** Nyhus IIIA = hérnia inguinal **direta** (defeito da parede posterior).\n- **D) Incorreta:** Nyhus IIIB = hérnia inguinal indireta com destruição/defeito da parede posterior (ou mista/pantalona).\n- **E) Incorreta:** Nyhus IIIC = hérnia **femoral**.",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2024.** Na **Classificação de Nyhus** (Sabiston), **tanto Nyhus I quanto Nyhus II** correspondem a **hérnias inguinais indiretas com parede posterior intacta** — a diferença entre elas está no calibre do anel…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-057",
    "code": "Q-UEPA24-0057",
    "numeroOriginal": 57,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Câncer Gástrico e Cirurgia Bariátrica",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-cancer-gastrico-e-cirurgia-bariatrica",
    "tags": ["cirurgia-bariatrica","duodenal-switch","disabsortiva"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa que contém a técnica cirúrgica bariátrica, que tem o componente disabsortivo predominante em relação ao componente restritivo.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sleeve gástrico",
        "explanation": "Incorreta: *Sleeve* gástrico é técnica predominantemente restritiva/metabólica (sem desvio intestinal).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "By-pass gástrico em Y de Roux",
        "explanation": "Incorreta: *Bypass* gástrico em Y de Roux é técnica mista com predomínio **restritivo/metabólico**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Duodenal switch",
        "explanation": "A alternativa **C** está correta. A **derivação biliopancreática com *Duodenal Switch* (BPD-DS)** (assim como a técnica de Scopinaro) é uma cirurgia bariátrica mista com **predomínio marcante do componente disabsortivo** (canal comum curto de ~75–100 cm), proporcionando a maior perda ponderal e remissão metabólica, porém com maior risco de desnutrição proteico-calórica e deficiências de vitaminas lipossolúveis (Sabiston / SBCBM).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Banda gástrica ajustável",
        "explanation": "Incorreta: Banda gástrica ajustável é puramente **restritiva**.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Cirurgia de Fobi e Capella",
        "explanation": "Incorreta: Cirurgia de Fobi-Capella é uma variação do *bypass* gástrico em Y de Roux com anel restritivo (predomínio restritivo).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. A **derivação biliopancreática com *Duodenal Switch* (BPD-DS)** (assim como a técnica de Scopinaro) é uma cirurgia bariátrica mista com **predomínio marcante do componente disabsortivo** (canal comum curto de ~75–100 cm), proporcionando a maior perda ponderal e remissão metabólica, porém com maior risco de desnutrição proteico-calórica e deficiências de vitaminas lipossolúveis (Sabiston / SBCBM).\n- **A) Incorreta:** *Sleeve* gástrico é técnica predominantemente restritiva/metabólica (sem desvio intestinal).\n- **B) Incorreta:** *Bypass* gástrico em Y de Roux é técnica mista com predomínio **restritivo/metabólico**.\n- **D) Incorreta:** Banda gástrica ajustável é puramente **restritiva**.\n- **E) Incorreta:** Cirurgia de Fobi-Capella é uma variação do *bypass* gástrico em Y de Roux com anel restritivo (predomínio restritivo).",
    "perolaClinica": "A alternativa **C** está correta. A **derivação biliopancreática com *Duodenal Switch* (BPD-DS)** (assim como a técnica de Scopinaro) é uma cirurgia bariátrica mista com **predomínio marcante do componente disabsortivo** (canal comum curto de ~75–100 cm),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-058",
    "code": "Q-UEPA24-0058",
    "numeroOriginal": 58,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia do Aparelho Digestivo e Coloproctologia",
    "subtema": "Doenças Orificiais",
    "temaSlug": "cg-cad",
    "subtemaSlug": "cg-cad-doencas-orificiais",
    "tags": ["doenca-hemorroidaria","hemorroidas","classificacao","coloproctologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente foi examinado e apresenta mamilos hemorroidários com redução espontânea. Assinale a alternativa que contém a correta classificação da doença hemorroidária apresentada por este paciente.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Grau I",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Grau II",
        "explanation": "A alternativa **B** está correta. Pela **Classificação de Goligher** para hemorroidas internas (Sabiston / ASCRS):",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Grau III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Grau IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Grau V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Pela **Classificação de Goligher** para hemorroidas internas (Sabiston / ASCRS):\n- **Grau I:** sangramento sem prolapso;\n- **Grau II:** prolapso durante a evacuação com **redução espontânea**;\n- **Grau III:** prolapso que requer **redução manual**;\n- **Grau IV:** prolapso **irredutível** (permanente).\n- **A, C, D e E) Incorretas:** Não correspondem ao prolapso com redução espontânea (e não existe Grau V).",
    "perolaClinica": "A alternativa **B** está correta. Pela **Classificação de Goligher** para hemorroidas internas (Sabiston /",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-059",
    "code": "Q-UEPA24-0059",
    "numeroOriginal": 59,
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Vias Biliares, Fígado e Pâncreas Cirúrgico",
    "subtema": "Coledocolitíase e Colangite Aguda",
    "temaSlug": "cg-biliar",
    "subtemaSlug": "cg-biliar-coledocolitiase-e-colangite-aguda",
    "tags": ["triade-de-charcot","colangite-aguda","vias-biliares"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Os sintomas da tríade de Charcot são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "febre, dor no hipocôndrio direito e choque",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "choque, febre e confusão mental",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "dor no hipocôndrio direito, febre e icterícia",
        "explanation": "A alternativa **C** está correta. A **Tríade de Charcot** (clássica da **colangite aguda** — *Tokyo Guidelines* / Sabiston) é composta por: **dor em hipocôndrio direito, febre (frequentemente com calafrios) e icterícia**. Quando se somam hipotensão/choque e alteração do estado mental, configura-se a **Pêntade de Reynolds** (colangite aguda grave/tóxica).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "icterícia, febre e confusão mental",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "icterícia, choque e febre",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. A **Tríade de Charcot** (clássica da **colangite aguda** — *Tokyo Guidelines* / Sabiston) é composta por: **dor em hipocôndrio direito, febre (frequentemente com calafrios) e icterícia**. Quando se somam hipotensão/choque e alteração do estado mental, configura-se a **Pêntade de Reynolds** (colangite aguda grave/tóxica).\n- **A, B, D e E) Incorretas:** Misturam componentes da Pêntade de Reynolds (choque e confusão mental) omitindo elementos essenciais da Tríade de Charcot.",
    "perolaClinica": "A alternativa **C** está correta. A **Tríade de Charcot** (clássica da **colangite aguda** — *Tokyo Guidelines* / Sabiston) é composta por: **dor em hipocôndrio direito, febre (frequentemente com calafrios) e icterícia**. Quando se somam hipotensão/choque e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-060",
    "code": "Q-UEPA24-0060",
    "numeroOriginal": 60,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "subtema": "Cirrose Hepática e Hipertensão Portal",
    "temaSlug": "cm-gastro",
    "subtemaSlug": "cm-gastro-cirrose-hepatica-e-hipertensao-portal",
    "tags": ["sinal-de-cruveilhier","hipertensao-portal","semiologia-abdominal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Assinale a alternativa que contém a correspondência correta entre o sinal e a patologia.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Sinal de Chandelier – apendicite.",
        "explanation": "Incorreta: Sinal de Chandelier sugere **doença inflamatória pélvica (DIP)**, não apendicite.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Sinal de Courvoisier – colecistite.",
        "explanation": "Incorreta: Sinal de Courvoisier-Terrier (vesícula palpável e **indolor** em paciente ictérico) sugere **neoplasia periampular / cabeça de pâncreas**, não colecistite aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Sinal de Danforth – doença inflamatória pélvica.",
        "explanation": "Incorreta: Sinal de Danforth (dor no ombro à inspiração profunda) sugere **hemoperitônio**, não DIP.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Sinal de Aaron – hemoperitônio.",
        "explanation": "Incorreta: Sinal de Aaron (dor epigástrica à palpação da FID) sugere **apendicite aguda**, não hemoperitônio.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Sinal de Cruveilhier – hipertensão portal.",
        "explanation": "A alternativa **E** está correta. O **sinal/síndrome de Cruveilhier-Baumgarten** (dilatação venosa periumbilical em \"cabeça de medusa\" com sopro/frêmito venoso à ausculta devido à recanalização da veia paraumbilical) é achado clássico de **hipertensão portal** (Sabiston / Porto Semiologia).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. O **sinal/síndrome de Cruveilhier-Baumgarten** (dilatação venosa periumbilical em \"cabeça de medusa\" com sopro/frêmito venoso à ausculta devido à recanalização da veia paraumbilical) é achado clássico de **hipertensão portal** (Sabiston / Porto Semiologia).\n- **A) Incorreta:** Sinal de Chandelier sugere **doença inflamatória pélvica (DIP)**, não apendicite.\n- **B) Incorreta:** Sinal de Courvoisier-Terrier (vesícula palpável e **indolor** em paciente ictérico) sugere **neoplasia periampular / cabeça de pâncreas**, não colecistite aguda.\n- **C) Incorreta:** Sinal de Danforth (dor no ombro à inspiração profunda) sugere **hemoperitônio**, não DIP.\n- **D) Incorreta:** Sinal de Aaron (dor epigástrica à palpação da FID) sugere **apendicite aguda**, não hemoperitônio.",
    "perolaClinica": "A alternativa **E** está correta. O **sinal/síndrome de Cruveilhier-Baumgarten** (dilatação venosa periumbilical em \"cabeça de medusa\" com sopro/frêmito venoso à ausculta devido à recanalização da veia paraumbilical) é achado clássico de **hipertensão…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-061",
    "code": "Q-UEPA24-0061",
    "numeroOriginal": 61,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": ["asc-us","colpocitologia","rastreamento-colo-uterino"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com 32 anos de idade comparece ao consultório de ginecologia trazendo um exame de colpocitologia oncótica do colo do útero com o seguinte resultado: “Células escamosas atípicas de significado indeterminado (ASCUS) possivelmente não neoplásica”. Para esta paciente a conduta imediata recomendada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar biópsia dirigida pelo teste de Schiller.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar colposcopia e biopsia se houver achados anormais.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "indicar conização de alta frequência.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "repetir exame de colpocitologia oncótica em 12 meses.",
        "explanation": "Incorreta: Repetição em 12 meses aplica-se à faixa de 25 a 29 anos, não a 32 anos.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "repetir exame em de colpocitologia oncótica 6 meses.",
        "explanation": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS 2016)**, diante de citologia com **ASC-US (possivelmente não neoplásico)**:",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS 2016)**, diante de citologia com **ASC-US (possivelmente não neoplásico)**:\n- **< 25 anos:** repetir citologia em 3 anos;\n- **25 a 29 anos:** repetir citologia em 12 meses;\n- **≥ 30 anos (caso desta paciente de 32 anos):** **repetir colpocitologia oncótica em 6 meses** (encaminhando para colposcopia apenas se a repetição vier novamente alterada).\n- **A, B e C) Incorretas:** Colposcopia/biópsia imediata em ASC-US só se indica em pacientes imunossuprimidas (ex.: HIV+) ou após dois exames alterados; conização é absolutamente excessiva.\n- **D) Incorreta:** Repetição em 12 meses aplica-se à faixa de 25 a 29 anos, não a 32 anos.",
    "perolaClinica": "A alternativa **E** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS 2016)**, diante de citologia com **ASC-US (possivelmente não",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-062",
    "code": "Q-UEPA24-0062",
    "numeroOriginal": 62,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Câncer de Mama",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-cancer-de-mama",
    "tags": ["rastreamento-cancer-de-mama","mamografia","inca"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com 42 anos de idade comparece ao consultório de ginecologia sem queixas. Nega antecedentes familiares de câncer de mama. Faz a seguinte indagação: “na minha idade com que frequência devo realizar a mamografia?”. Com base nas recomendações das Diretrizes para a detecção precoce do câncer de mama no Brasil do Instituto Nacional de Câncer José de Alencar (INCA) a resposta correta para essa pergunta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar mamografia a cada 2 anos após os 40 anos de idade.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "realizar mamografia a cada 2 anos somente após os 50 anos de idade.",
        "explanation": "A alternativa **B** está correta. O enunciado pergunta especificamente com base nas **Diretrizes do INCA / Ministério da Saúde** (2015), que recomendam o rastreamento mamográfico populacional **bienal (a cada 2 anos) para mulheres de risco habitual entre 50 e 69 anos** (contraindicando o rastreamento rotineiro abaixo de 50 anos sem fatores de alto risco). *(Nota: a FEBRASGO/SBM/CBR recomendam mamografia anual a partir dos 40 anos, mas a questão especificou explicitamente a diretriz do INCA.)*",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "realizar mamografia a cada 1 ano após os 40 anos de idade.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "realizar mamografia a cada 1 ano somente após os 50 anos de idade.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "realizar mamografia a cada 3 anos após os 40 anos de idade.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. O enunciado pergunta especificamente com base nas **Diretrizes do INCA / Ministério da Saúde** (2015), que recomendam o rastreamento mamográfico populacional **bienal (a cada 2 anos) para mulheres de risco habitual entre 50 e 69 anos** (contraindicando o rastreamento rotineiro abaixo de 50 anos sem fatores de alto risco). *(Nota: a FEBRASGO/SBM/CBR recomendam mamografia anual a partir dos 40 anos, mas a questão especificou explicitamente a diretriz do INCA.)*\n- **A, C, D e E) Incorretas:** Não refletem a recomendação oficial do INCA/MS (50–69 anos, bienal).",
    "perolaClinica": "A alternativa **B** está correta. O enunciado pergunta especificamente com base nas **Diretrizes do INCA / Ministério da Saúde** (2015), que recomendam o rastreamento mamográfico populacional **bienal (a cada 2 anos) para mulheres de risco habitual entre 50 e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-063",
    "code": "Q-UEPA24-0063",
    "numeroOriginal": 63,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Puberdade Normal, Precoce e Atrasada",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-puberdade-normal-precoce-e-atrasada",
    "tags": ["puberdade-precoce","estadiamento-de-tanner","tanner-2"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina com 7 anos de idade, apresentando os seguintes achados no exame físico: desenvolvimento do botão mamário com elevação da papila e aumento do diâmetro da aréola, além de pelos esparsos e finos em grandes lábios. Com base no exame físico é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "trata-se de puberdade precoce estando a criança no estágio de Tanner II, devendo iniciar tratamento após avaliação da idade óssea e velocidade de crescimento.",
        "explanation": "A alternativa **A** está correta. O surgimento de caracteres sexuais secundários em meninas **antes dos 8 anos de idade** define **puberdade precoce**. O exame físico descreve exatamente o **estágio II de Tanner**: **M2** (broto/botão mamário sob a aréola com elevação da papila e aumento do diâmetro areolar) e **P2** (pelos finos, longos, esparsos e discretamente pigmentados ao longo dos grandes lábios). A decisão terapêutica (análogo de GnRH) depende da confirmação de progressão após avaliação da **idade óssea, velocidade de crescimento e eixo hormonal** (SBP / PCDT MS).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "trata-se de puberdade precoce estando a criança no estágio de Tanner III, devendo iniciar tratamento imediatamente.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "trata-se de puberdade normal estando a criança no estágio de Tanner I, não havendo necessidade de tratamento.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "trata-se de puberdade normal estando a criança no estágio de Tanner IV, devendo iniciar tratamento após avaliação da idade óssea.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "trata-se de puberdade precoce estando a criança no estágio de Tanner III, devendo iniciar tratamento após avaliação da idade óssea e velocidade de crescimento.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. O surgimento de caracteres sexuais secundários em meninas **antes dos 8 anos de idade** define **puberdade precoce**. O exame físico descreve exatamente o **estágio II de Tanner**: **M2** (broto/botão mamário sob a aréola com elevação da papila e aumento do diâmetro areolar) e **P2** (pelos finos, longos, esparsos e discretamente pigmentados ao longo dos grandes lábios). A decisão terapêutica (análogo de GnRH) depende da confirmação de progressão após avaliação da **idade óssea, velocidade de crescimento e eixo hormonal** (SBP / PCDT MS).\n- **B e E) Incorretas:** Em Tanner III (M3), há aumento adicional da mama e aréola sem separação de contornos, e pelos (P3) mais escuros/grossos espalhando-se sobre o púbis.\n- **C e D) Incorretas:** Não é puberdade normal aos 7 anos e Tanner I corresponde a fase pré-puberal (ausência de broto mamário e pelos).",
    "perolaClinica": "A alternativa **A** está correta. O surgimento de caracteres sexuais secundários em meninas **antes dos 8 anos de idade** define **puberdade precoce**. O exame físico descreve exatamente o **estágio II de Tanner**: **M2** (broto/botão mamário sob a aréola com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-064",
    "code": "Q-UEPA24-0064",
    "numeroOriginal": 64,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "subtema": "Vasculites Sistêmicas",
    "temaSlug": "cm-reumato",
    "subtemaSlug": "cm-reumato-vasculites-sistemicas",
    "tags": ["doenca-de-behcet","ulceras-genitais","uveite","vasculite"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Jovem, sexo feminino, com 17 anos de idade, coitarca aos 16 anos, 1 parceiro sexual nos últimos 12 meses, apresentando história de episódio recente de mal-estar geral e estado gripal e reclama de aparecimento de feridas dolorosas não sangrantes em genitais e na boca. Na avaliação do oftalmologista foi diagnosticada uma Uveíte. Relata que há 1 ano teve episódio semelhante. Paciente nega outros sintomas precedendo o quadro clinico atual e nega lesões em outras partes do corpo. Diante deste quadro a principal hipótese diagnóstica é.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Linfogranuloma venéreo",
        "explanation": "Incorreta: Linfogranuloma venéreo apresenta úlcera fugaz indolor seguida de linfadenopatia inguinal supurativa (bubão), sem úlceras orais recorrentes nem uveíte.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Donovanose",
        "explanation": "Incorreta: Donovanose cursa com úlceras vegetantes indolores e crônicas, sem uveíte.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Doença de Behçet",
        "explanation": "A alternativa **C** está correta. A tríade clássica de **úlceras orais aftosas recorrentes + úlceras genitais dolorosas recorrentes + uveíte** em adulta jovem fecha o diagnóstico clínico de **Doença de Behçet** (vasculite sistêmica de vasos variáveis, segundo os Critérios Internacionais para Doença de Behçet — ICBD / SBR).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Escorbuto",
        "explanation": "Incorreta: Escorbuto (deficiência de vitamina C) manifesta-se por gengivorragia, petéquias perifoliculares e hemartroses, não úlceras genitais + uveíte.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Cancro mole",
        "explanation": "Incorreta: Cancro mole (*H. ducreyi*) causa úlceras genitais purulentas dolorosas com bubão inguinal, sem acometimento oral recorrente nem uveíte.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. A tríade clássica de **úlceras orais aftosas recorrentes + úlceras genitais dolorosas recorrentes + uveíte** em adulta jovem fecha o diagnóstico clínico de **Doença de Behçet** (vasculite sistêmica de vasos variáveis, segundo os Critérios Internacionais para Doença de Behçet — ICBD / SBR).\n- **A) Incorreta:** Linfogranuloma venéreo apresenta úlcera fugaz indolor seguida de linfadenopatia inguinal supurativa (bubão), sem úlceras orais recorrentes nem uveíte.\n- **B) Incorreta:** Donovanose cursa com úlceras vegetantes indolores e crônicas, sem uveíte.\n- **D) Incorreta:** Escorbuto (deficiência de vitamina C) manifesta-se por gengivorragia, petéquias perifoliculares e hemartroses, não úlceras genitais + uveíte.\n- **E) Incorreta:** Cancro mole (*H. ducreyi*) causa úlceras genitais purulentas dolorosas com bubão inguinal, sem acometimento oral recorrente nem uveíte.",
    "perolaClinica": "A alternativa **C** está correta. A tríade clássica de **úlceras orais aftosas recorrentes + úlceras genitais dolorosas recorrentes + uveíte** em adulta jovem fecha o diagnóstico clínico de **Doença de Behçet** (vasculite sistêmica de vasos variáveis, segundo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-065",
    "code": "Q-UEPA24-0065",
    "numeroOriginal": 65,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Câncer de Ovário e Massas Anexiais",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-cancer-de-ovario-e-massas-anexiais",
    "tags": ["massa-anexial","cancer-de-ovario","pos-menopausa","cisto-complexo"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 55 anos de idade na pós-menopausa, referindo dor pélvica intensa persistente há cerca de 1 mês e apresentando cisto complexo de 11 cm em anexo uterino esquerdo na ultrassonografia vaginal. Sem outras queixas. Com base no quadro acima, a conduta mais adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "referenciar paciente para o cirurgião oncoginecologista.",
        "explanation": "A alternativa **A** está correta. Mulher **pós-menopausa** com **massa anexial complexa volumosa (11 cm)** e sintomática (dor pélvica persistente) apresenta alto risco de **neoplasia maligna de ovário** (critérios IOTA / ACOG / FEBRASGO). O encaminhamento precoce ao **cirurgião oncoginecologista** para estadiamento cirúrgico adequado e citorredução primária (caso confirmada malignidade) é fator independente de melhora da sobrevida global.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "prescrever antibioticoterapia de amplo espectro.",
        "explanation": "Incorreta: Não há sinais infecciosos (febre, cervicite, leucocitose) sugestivos de abscesso tubo-ovariano.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "solicitar dosagem de CA 125 e encaminhar para a cirurgia somente se resultado elevado.",
        "explanation": "Incorreta: Um CA-125 normal **não exclui** câncer de ovário (especialmente tumores mucinosos ou estágios iniciais) nem dispensa cirurgia para cisto complexo de 11 cm na pós-menopausa.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "repetir ultrassonografia a cada 4 semanas.",
        "explanation": "Incorreta: Conduta expectante com USG seriada aplica-se apenas a cistos **simples** pequenos (< 5–10 cm) e assintomáticos, nunca a cisto complexo de 11 cm sintomático.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "prescrever citrato de clomifeno.",
        "explanation": "Incorreta: Citrato de clomifeno é indutor de ovulação, sem qualquer papel em mulher pós-menopausa.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Mulher **pós-menopausa** com **massa anexial complexa volumosa (11 cm)** e sintomática (dor pélvica persistente) apresenta alto risco de **neoplasia maligna de ovário** (critérios IOTA / ACOG / FEBRASGO). O encaminhamento precoce ao **cirurgião oncoginecologista** para estadiamento cirúrgico adequado e citorredução primária (caso confirmada malignidade) é fator independente de melhora da sobrevida global.\n- **B) Incorreta:** Não há sinais infecciosos (febre, cervicite, leucocitose) sugestivos de abscesso tubo-ovariano.\n- **C) Incorreta:** Um CA-125 normal **não exclui** câncer de ovário (especialmente tumores mucinosos ou estágios iniciais) nem dispensa cirurgia para cisto complexo de 11 cm na pós-menopausa.\n- **D) Incorreta:** Conduta expectante com USG seriada aplica-se apenas a cistos **simples** pequenos (< 5–10 cm) e assintomáticos, nunca a cisto complexo de 11 cm sintomático.\n- **E) Incorreta:** Citrato de clomifeno é indutor de ovulação, sem qualquer papel em mulher pós-menopausa.",
    "perolaClinica": "A alternativa **A** está correta. Mulher **pós-menopausa** com **massa anexial complexa volumosa (11 cm)** e sintomática (dor pélvica persistente) apresenta alto risco de **neoplasia maligna de ovário** (critérios IOTA / ACOG / FEBRASGO). O encaminhamento…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-066",
    "code": "Q-UEPA24-0066",
    "numeroOriginal": 66,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Rotura Prematura de Membranas Ovulares",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-rotura-prematura-de-membranas-ovulares",
    "tags": ["rpmo","pre-termo","corticoterapia","antibioticoterapia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta com 26 semanas de idade gestacional, comparece à urgência e emergência obstétrica de uma maternidade de referência para gestações de alto risco queixando-se de perda de líquido via vaginal em grande quantidade há cerca de 4 horas. Nega outras queixas. Ao exame especular observa-se perda de líquido via canal cervical. Considerando o diagnóstico e a idade gestacional a conduta mais indicada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "interrupção da gravidez indispensavelmente devido inviabilidade fetal.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "interrupção da gravidez em caso de concordância do casal.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "expectante até 34 semanas na ausência de complicações com prescrição imediata de corticóide e antibiótico.",
        "explanation": "A alternativa **C** está correta. Em **RPMO pré-termo entre 24 e 34 semanas** (aqui 26 semanas, feto viável) sem sinais de corioamnionite, DPP ou sofrimento fetal, a diretriz da **FEBRASGO** e do **ACOG** preconiza **conduta expectante internada até 34 semanas** (na ausência de complicações), associada à prescrição imediata de:",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "expectante com prescrição de corticóide e antibiótico somente após 28 semanas.",
        "explanation": "Incorreta: Corticoide e antibiótico devem ser iniciados **imediatamente** a partir de 24 semanas (não aguardar 28 semanas).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "expectante até 28 semanas na ausência de complicações com prescrição imediata de corticóide e antibiótico.",
        "explanation": "Incorreta: Na ausência de infecção/sofrimento fetal, mantém-se conduta expectante até **34 semanas** (não se interrompe rotineiramente às 28 semanas).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Em **RPMO pré-termo entre 24 e 34 semanas** (aqui 26 semanas, feto viável) sem sinais de corioamnionite, DPP ou sofrimento fetal, a diretriz da **FEBRASGO** e do **ACOG** preconiza **conduta expectante internada até 34 semanas** (na ausência de complicações), associada à prescrição imediata de:\n1. **Corticoterapia antenatal** (betametasona ou dexametasona) para maturação pulmonar fetal;\n2. **Antibioticoterapia para prolongamento do período de latência** (ampicilina + azitromicina/eritromicina, esquema Mercer) e profilaxia de sepse neonatal por *Streptococcus agalactiae* (GBS).\n- **A e B) Incorretas:** Aos 26 semanas o feto já se encontra no limiar/faixa de viabilidade em maternidade de alto risco, não havendo indicação de interrupção sem complicações.\n- **D) Incorreta:** Corticoide e antibiótico devem ser iniciados **imediatamente** a partir de 24 semanas (não aguardar 28 semanas).\n- **E) Incorreta:** Na ausência de infecção/sofrimento fetal, mantém-se conduta expectante até **34 semanas** (não se interrompe rotineiramente às 28 semanas).",
    "perolaClinica": "A alternativa **C** está correta. Em **RPMO pré-termo entre 24 e 34 semanas** (aqui 26 semanas, feto viável) sem sinais de corioamnionite, DPP ou sofrimento fetal, a diretriz da **FEBRASGO** e do **ACOG** preconiza **conduta expectante internada até 34…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-067",
    "code": "Q-UEPA24-0067",
    "numeroOriginal": 67,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Diabetes Mellitus Gestacional e Prévio",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-diabetes-mellitus-gestacional-e-previo",
    "tags": ["overt-diabetes","diabetes-previo","gestacao","glicemia-de-jejum"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Secundigesta com 14 semanas de gestação comparece a consulta pré-natal trazendo o resultado de exame mostrando uma glicemia de jejum = 128 mg/dL, sem outras alterações no exame fisico ou exames complementares. Sobre o diagnostico e tratamento desta gestante é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "trata-se de diabetes mellitus prévio, devendo-se recomendar dieta adequada e prática de exercício físico.",
        "explanation": "A alternativa **A** está correta. Pelo consenso **FEBRASGO / SBD / OMS / Ministério da Saúde**, uma **glicemia de jejum ≥ 126 mg/dL** (aqui **128 mg/dL**) em qualquer momento da gestação (especialmente no 1º trimestre/14 semanas) diagnostica **Diabetes Mellitus prévio (diagnosticado na gestação / *Overt Diabetes*)** — enquanto valores de 92 a 125 mg/dL definem Diabetes Mellitus Gestacional (DMG). A base inicial do manejo inclui **terapia nutricional (dieta adequada), exercício físico regular e automonitorização glicêmica** (associando insulina se metas não atingidas).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "trata-se de diabetes gestacional, devendo-se recomendar dieta adequada e prática de exercício físico.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "trata-se de diabetes mellitus prévio, a meta glicêmica no tratamento consiste em valores menores que 95 mg/dL no jejum e 140 mg/dL duas horas pós-prandial.",
        "explanation": "Incorreta (pegadinha clássica): As metas glicêmicas na gestação são jejum < 95 mg/dL, **1 hora pós-prandial < 140 mg/dL** e **2 horas pós-prandial < 120 mg/dL** (e não < 140 mg/dL em 2 horas!).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "trata-se de diabetes gestacional, sendo obrigatório o uso de insulina NPH humana.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "trata-se de diabetes mellitus prévio, sendo obrigatório o uso de insulina NPH humana.",
        "explanation": "Incorreta: Embora muitas gestantes com *overt diabetes* necessitem de insulina (NPH ou análogos aprovados), o enunciado afirma incorretamente ser \"obrigatório o uso de insulina NPH humana\" como regra absoluta e única.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Pelo consenso **FEBRASGO / SBD / OMS / Ministério da Saúde**, uma **glicemia de jejum ≥ 126 mg/dL** (aqui **128 mg/dL**) em qualquer momento da gestação (especialmente no 1º trimestre/14 semanas) diagnostica **Diabetes Mellitus prévio (diagnosticado na gestação / *Overt Diabetes*)** — enquanto valores de 92 a 125 mg/dL definem Diabetes Mellitus Gestacional (DMG). A base inicial do manejo inclui **terapia nutricional (dieta adequada), exercício físico regular e automonitorização glicêmica** (associando insulina se metas não atingidas).\n- **B e D) Incorretas:** Glicemia de jejum ≥ 126 mg/dL caracteriza **DM prévio (*overt diabetes*)**, não DMG.\n- **C) Incorreta (pegadinha clássica):** As metas glicêmicas na gestação são jejum < 95 mg/dL, **1 hora pós-prandial < 140 mg/dL** e **2 horas pós-prandial < 120 mg/dL** (e não < 140 mg/dL em 2 horas!).\n- **E) Incorreta:** Embora muitas gestantes com *overt diabetes* necessitem de insulina (NPH ou análogos aprovados), o enunciado afirma incorretamente ser \"obrigatório o uso de insulina NPH humana\" como regra absoluta e única.",
    "perolaClinica": "A alternativa **A** está correta. Pelo consenso **FEBRASGO / SBD / OMS / Ministério da Saúde**, uma **glicemia de jejum ≥ 126 mg/dL** (aqui **128 mg/dL**) em qualquer momento da gestação (especialmente no 1º trimestre/14 semanas) diagnostica **Diabetes…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-068",
    "code": "Q-UEPA24-0068",
    "numeroOriginal": 68,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Síndromes Hipertensivas e Metabólicas na Gestação",
    "subtema": "Hipertensão Crônica e Gestacional",
    "temaSlug": "go-shg",
    "subtemaSlug": "go-shg-hipertensao-cronica-e-gestacional",
    "tags": ["hipertensao-gestacional","sindromes-hipertensivas","pre-natal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "As síndromes hipertensivas são a intercorrência clínica mais comum da gestação e representam a principal causa de morbimortalidade materna no mundo. Sobre a classificação de hipertensão na gravidez é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "se níveis pressóricos maior ou igual a 180/110 mmHg após a 20ª semana de gestação fecha-se o diagnóstico de hipertensão arterial crônica.",
        "explanation": "Incorreta: HAS crônica é diagnosticada **antes** da 20ª semana (ou persistindo > 12 semanas pós-parto); PA ≥ 160/110 mmHg após 20 semanas caracteriza crise hipertensiva / sinal de gravidade de pré-eclâmpsia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a Hipertensão gestacional caracteriza-se por hipertensão arterial na segunda metade da gestação, em gestante previamente normotensa, porém sem proteinúria ou manifestação de outros sinais/sintomas relacionados à pré-eclâmpsia.",
        "explanation": "A alternativa **B** está correta. Pela classificação da **FEBRASGO / Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG) / ACOG**, a **hipertensão gestacional** é definida por surgimento de PA ≥ 140/90 mmHg **após a 20ª semana de gestação** em mulher previamente normotensa, **na ausência de proteinúria e sem sinais de disfunção orgânica/gravidade** característicos de pré-eclâmpsia.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "sempre que houver hipertensão arterial na segunda metade da gestação, em gestante previamente normotensa deverá ser realizado o diagnostico de pré-eclâmpsia.",
        "explanation": "Incorreta: Nem toda HAS após 20 semanas é pré-eclâmpsia (pode ser hipertensão gestacional pura).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "estado hipertensivo com pressão arterial (PA) sistólica ≥150 mmHg e/ou PA diastólica ≥100 mmHg em pacientes com pré-eclâmpsia é um sinal de gravidade.",
        "explanation": "Incorreta: O critério pressórico de gravidade na pré-eclâmpsia é **PA ≥ 160/110 mmHg** (não ≥ 150/100 mmHg).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "insuficiência renal, identificada pela elevação progressiva dos níveis séricos de creatinina (≥0,9 mg/dL) é um sinal de gravidade.",
        "explanation": "Incorreta: O ponto de corte de creatinina para lesão renal grave na pré-eclâmpsia é **≥ 1,1 mg/dL** (ou duplicação do valor basal), não ≥ 0,9 mg/dL.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Pela classificação da **FEBRASGO / Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG) / ACOG**, a **hipertensão gestacional** é definida por surgimento de PA ≥ 140/90 mmHg **após a 20ª semana de gestação** em mulher previamente normotensa, **na ausência de proteinúria e sem sinais de disfunção orgânica/gravidade** característicos de pré-eclâmpsia.\n- **A) Incorreta:** HAS crônica é diagnosticada **antes** da 20ª semana (ou persistindo > 12 semanas pós-parto); PA ≥ 160/110 mmHg após 20 semanas caracteriza crise hipertensiva / sinal de gravidade de pré-eclâmpsia.\n- **C) Incorreta:** Nem toda HAS após 20 semanas é pré-eclâmpsia (pode ser hipertensão gestacional pura).\n- **D) Incorreta:** O critério pressórico de gravidade na pré-eclâmpsia é **PA ≥ 160/110 mmHg** (não ≥ 150/100 mmHg).\n- **E) Incorreta:** O ponto de corte de creatinina para lesão renal grave na pré-eclâmpsia é **≥ 1,1 mg/dL** (ou duplicação do valor basal), não ≥ 0,9 mg/dL.",
    "perolaClinica": "A alternativa **B** está correta. Pela classificação da **FEBRASGO / Rede Brasileira de Estudos sobre Hipertensão na Gravidez (RBEHG) / ACOG**, a **hipertensão gestacional** é definida por surgimento de PA ≥ 140/90 mmHg **após a 20ª semana de gestação** em…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-069",
    "code": "Q-UEPA24-0069",
    "numeroOriginal": 69,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Pré-Natal e Fisiologia Obstétrica",
    "subtema": "Avaliação da Vitalidade Fetal",
    "temaSlug": "go-prenatal",
    "subtemaSlug": "go-prenatal-avaliacao-da-vitalidade-fetal",
    "tags": ["oligoamnio","liquido-amniotico","trombofilia-materna"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Oligoâmnio é definido como o volume de líquido amniótico abaixo do esperado para idade gestacional. Sua incidência é de aproximadamente 1% das gestações, sendo mais comum nas gestações que atingem o termo (1% a 5%). Representa uma causa de Oligoâmnio:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Diabete Melito materno",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Anemia fetal grave",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Anomalias que interferem na deglutição fetal.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Obstrução gastrointestinal primária fetal (como atresia esofágica e duodenal).",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Trombofilia materna.",
        "explanation": "A alternativa **E** está correta. A **trombofilia materna** (como síndrome antifosfolípide) cursa com vasculopatia decidual e **insuficiência uteroplacentária**, levando à centralização hemodinâmica fetal, redução da perfusão renal fetal e consequente **oligoâmnio** (Zugaib / FEBRASGO).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. A **trombofilia materna** (como síndrome antifosfolípide) cursa com vasculopatia decidual e **insuficiência uteroplacentária**, levando à centralização hemodinâmica fetal, redução da perfusão renal fetal e consequente **oligoâmnio** (Zugaib / FEBRASGO).\n- **A, B, C e D) Incorretas:** Diabetes mellitus materno (poliúria fetal por hiperglicemia), anemia fetal grave (insuficiência cardíaca de alto débito/hidropsia), anomalias da deglutição fetal (anencefalia, doenças neuromusculares) e obstruções gastrointestinais altas (atresia de esôfago ou duodeno) são causas clássicas de **polidrâmnio**, e não de oligoâmnio.",
    "perolaClinica": "A alternativa **E** está correta. A **trombofilia materna** (como síndrome antifosfolípide) cursa com vasculopatia decidual e **insuficiência uteroplacentária**, levando à centralização hemodinâmica fetal, redução da perfusão renal fetal e consequente…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-070",
    "code": "Q-UEPA24-0070",
    "numeroOriginal": 70,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Intercorrências Clínicas e Infecciosas na Gestação",
    "subtema": "Gestação Gemelar e Restrição de Crescimento Fetal",
    "temaSlug": "go-intercorrencias",
    "subtemaSlug": "go-intercorrencias-gestacao-gemelar-e-restricao-de-crescimento-fetal",
    "tags": ["gestacao-gemelar","monocorionica","diamniotica","corionicidade"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Primigesta com 11 semanas de gestação comparece a consulta pré-natal trazendo uma ultrassonografia que descreve gestação monocoriônica e diamniótica. Neste contexto é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "os fetos compartilham a placenta e a bolsa amniótica.",
        "explanation": "Incorreta: Descreve gestação **monocoriônica e monoamniótica**.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "nesta gravidez não há risco de síndrome da transfusão feto-fetal.",
        "explanation": "Incorreta: A **Síndrome da Transfusão Feto-Fetal (STFF)** ocorre justamente em gestações **monocoriônicas** (anastomoses vasculares placentárias desequilibradas).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "os fetos compartilham a placenta e possuem bolsas amnióticas independentes",
        "explanation": "A alternativa **C** está correta. Na gestação gemelar **monocoriônica e diamniótica** (divisão embrionária entre o 4º e o 8º dia após a fecundação), há **uma única placenta compartilhada** (monocoriônica, sinal do \"T\" à USG do 1º trimestre) e **duas cavidades/bolsas amnióticas separadas** (diamniótica), conforme **Zugaib** e **FEBRASGO**.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "os fetos compartilham placenta, bolsa e partes fetais.",
        "explanation": "Incorreta: Descreve gêmeos **imperfeitos/siameses** (divisão > 13º dia).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "recomenda-se a dieta com as mesmas calorias recomendadas para grávidas com feto único.",
        "explanation": "Incorreta: Gestações gemelares requerem **maior aporte calórico e nutricional** (além de suplementação reforçada de ferro e ácido fólico) em comparação à gestação única.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Na gestação gemelar **monocoriônica e diamniótica** (divisão embrionária entre o 4º e o 8º dia após a fecundação), há **uma única placenta compartilhada** (monocoriônica, sinal do \"T\" à USG do 1º trimestre) e **duas cavidades/bolsas amnióticas separadas** (diamniótica), conforme **Zugaib** e **FEBRASGO**.\n- **A) Incorreta:** Descreve gestação **monocoriônica e monoamniótica**.\n- **B) Incorreta:** A **Síndrome da Transfusão Feto-Fetal (STFF)** ocorre justamente em gestações **monocoriônicas** (anastomoses vasculares placentárias desequilibradas).\n- **D) Incorreta:** Descreve gêmeos **imperfeitos/siameses** (divisão > 13º dia).\n- **E) Incorreta:** Gestações gemelares requerem **maior aporte calórico e nutricional** (além de suplementação reforçada de ferro e ácido fólico) em comparação à gestação única.",
    "perolaClinica": "A alternativa **C** está correta. Na gestação gemelar **monocoriônica e diamniótica** (divisão embrionária entre o 4º e o 8º dia após a fecundação), há **uma única placenta compartilhada** (monocoriônica, sinal do \"T\" à USG do 1º trimestre) e **duas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-071",
    "code": "Q-UEPA24-0071",
    "numeroOriginal": 71,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Rastreamento e Lesões Precursoras do Colo Uterino",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-rastreamento-e-lesoes-precursoras-do-colo-uterino",
    "tags": ["hsil","ver-e-tratar","excisao-tipo-1","colposcopia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mulher de 38 anos de idade, nuligesta, retorna à consulta com laudo citopatológico de lesão intraepitelial escamosa de alto grau (HSIL). Foi indicada colposcopia e durante o procedimento foi observada presença de achados anormais maiores, junção escamocolunar visível (zona de transformação tipo 1), sem suspeita de acometimento glandular ou lesão invasiva. Diante desses achados a melhor conduta, de acordo com as Diretrizes brasileiras para o rastreamento do câncer do colo do útero, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "realizar imediatamente nova colpocitologia e em seguida fazer a exérese da zona de transformação.",
        "explanation": "Incorreta: Não se repete colpocitologia diante de HSIL com colposcopia concordante.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "indicar histerectomia total, pois HSIL significa doença malígna in situ.",
        "explanation": "Incorreta: HSIL é lesão precursora (NIC II/III), **não** indica histerectomia total (sobretudo em mulher nuligesta de 38 anos).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "realizar excisão tipo 3, que garante tratamento adequado a situação da paciente.",
        "explanation": "Incorreta: Excisão tipo 3 (conização clássica profunda) é reservada a ZT tipo 3 (JEC não visível/endocervical) ou suspeita de doença glandular/microinvasão — em ZT tipo 1, seria sobretratamento com risco obstétrico desnecessário.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "indicar excisão tipo 1 e contraindicar nova colpocitologia imediata.",
        "explanation": "A alternativa **D** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)**, em mulher ≥ 25 anos (aqui 38 anos) com citologia de **HSIL** concordante com **achados colposcópicos maiores**, **JEC completamente visível (zona de transformação tipo 1)** e sem suspeita de invasão ou doença glandular, aplica-se a conduta **\"Ver e Tratar\"**: **Excisão da Zona de Transformação Tipo 1 (EZT/CAF tipo 1)**, sendo **contraindicada** a repetição imediata da colpocitologia (pois não altera a conduta já estabelecida e pode gerar falsos-negativos).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "proceder apenas investigação do canal endocervical.",
        "explanation": "Incorreta: A lesão é ectocervical visível (ZT tipo 1), exigindo excisão terapêutica tipo 1.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)**, em mulher ≥ 25 anos (aqui 38 anos) com citologia de **HSIL** concordante com **achados colposcópicos maiores**, **JEC completamente visível (zona de transformação tipo 1)** e sem suspeita de invasão ou doença glandular, aplica-se a conduta **\"Ver e Tratar\"**: **Excisão da Zona de Transformação Tipo 1 (EZT/CAF tipo 1)**, sendo **contraindicada** a repetição imediata da colpocitologia (pois não altera a conduta já estabelecida e pode gerar falsos-negativos).\n- **A) Incorreta:** Não se repete colpocitologia diante de HSIL com colposcopia concordante.\n- **B) Incorreta:** HSIL é lesão precursora (NIC II/III), **não** indica histerectomia total (sobretudo em mulher nuligesta de 38 anos).\n- **C) Incorreta:** Excisão tipo 3 (conização clássica profunda) é reservada a ZT tipo 3 (JEC não visível/endocervical) ou suspeita de doença glandular/microinvasão — em ZT tipo 1, seria sobretratamento com risco obstétrico desnecessário.\n- **E) Incorreta:** A lesão é ectocervical visível (ZT tipo 1), exigindo excisão terapêutica tipo 1.",
    "perolaClinica": "A alternativa **D** está correta. Pelas **Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)**, em mulher ≥ 25 anos (aqui 38 anos) com citologia de **HSIL** concordante com **achados colposcópicos maiores**, **JEC completamente…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-072",
    "code": "Q-UEPA24-0072",
    "numeroOriginal": 72,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Descolamento Prematuro de Placenta",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-descolamento-prematuro-de-placenta",
    "tags": ["dpp","apresentacao-de-fronte","cesariana","sofrimento-fetal"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 26 anos de idade, primigesta, com 37 semanas de gestação, sem patologias ou procedimentos cirúrgicos prévios, chega ao pronto socorro obstétrico com dor abdominal súbita persistente e intensa, sangramento vaginal, dor durante a palpação uterina, acompanhada de hipertonia uterina. Ao exame físico: feto com apresentação de fronte, colo com 9 cm de dilatação no plano zero de DeLee, bolsa rota, ausculta fetal 100 bpm, pressão arterial materna 100x60mmHg, dinâmica uterina presente (7 contrações fortes em 10 minutos). Diante do quadro clínico exposto, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a hipótese principal é de placenta prévia. Mesmo que o parto vaginal esteja iminente, para o caso em questão está indicada cesárea.",
        "explanation": "Incorreta: Placenta prévia cursa com sangramento indolor e útero com tônus normal (sem hipertonia).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "a hipótese principal é de descolamento prematuro de placenta. Para o caso em questão existe indicação absoluta de cesárea.",
        "explanation": "A alternativa **B** está correta. Dor abdominal súbita intensa, sangramento vaginal, **hipertonia uterina**, taquissistolia (7 contrações/10 min) e sofrimento fetal (BCF 100 bpm) fecham o diagnóstico de **Descolamento Prematuro de Placenta (DPP)**. Apesar de o colo estar com 9 cm de dilatação, há **apresentação cefálica defletida de 2º grau (apresentação de fronte)** — a mais distócica das apresentações cefálicas (maior diâmetro de insinuação, occipitomentoniano = 13,5 cm), que constitui **indicação absoluta de cesariana** em feto a termo (além de o feto estar no plano 0 de DeLee e em bradicardia), conforme **Zugaib** e **FEBRASGO**.",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "a hipótese principal é de rotura uterina. Está indicada laparotomia exploradora de urgência devido a alteração de vitalidade materna e fetal.",
        "explanation": "Incorreta: Rotura uterina cursa com parada súbita das contrações (hipotonia/atonia), subida da apresentação e partes fetais facilmente palpáveis, em geral em útero com cicatriz prévia.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "a hipótese principal é de taquissistolia. Devido a cervicodilatação avançada, está indicado o parto pela via mais rápida (parto vaginal).",
        "explanation": "Incorreta: Apresentação de fronte em feto de termo inviabiliza parto vaginal seguro (risco de obstrução/rotura uterina).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "a hipótese principal é de rotura de vasa prévia. Está indicada aplicação de fórcipe de Simpson para alívio de período expulsivo.",
        "explanation": "Incorreta: Rotura de vasa prévia não causa hipertonia uterina nem dor súbita intensa, e fórcipe é contraindicado em apresentação de fronte e plano 0 com 9 cm.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Dor abdominal súbita intensa, sangramento vaginal, **hipertonia uterina**, taquissistolia (7 contrações/10 min) e sofrimento fetal (BCF 100 bpm) fecham o diagnóstico de **Descolamento Prematuro de Placenta (DPP)**. Apesar de o colo estar com 9 cm de dilatação, há **apresentação cefálica defletida de 2º grau (apresentação de fronte)** — a mais distócica das apresentações cefálicas (maior diâmetro de insinuação, occipitomentoniano = 13,5 cm), que constitui **indicação absoluta de cesariana** em feto a termo (além de o feto estar no plano 0 de DeLee e em bradicardia), conforme **Zugaib** e **FEBRASGO**.\n- **A) Incorreta:** Placenta prévia cursa com sangramento indolor e útero com tônus normal (sem hipertonia).\n- **C) Incorreta:** Rotura uterina cursa com parada súbita das contrações (hipotonia/atonia), subida da apresentação e partes fetais facilmente palpáveis, em geral em útero com cicatriz prévia.\n- **D) Incorreta:** Apresentação de fronte em feto de termo inviabiliza parto vaginal seguro (risco de obstrução/rotura uterina).\n- **E) Incorreta:** Rotura de vasa prévia não causa hipertonia uterina nem dor súbita intensa, e fórcipe é contraindicado em apresentação de fronte e plano 0 com 9 cm.",
    "perolaClinica": "A alternativa **B** está correta. Dor abdominal súbita intensa, sangramento vaginal, **hipertonia uterina**, taquissistolia (7 contrações/10 min) e sofrimento fetal (BCF 100 bpm) fecham o diagnóstico de **Descolamento Prematuro de Placenta (DPP)**. Apesar de…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-073",
    "code": "Q-UEPA24-0073",
    "numeroOriginal": 73,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Sangramentos da Gestação",
    "subtema": "Gestação Ectópica",
    "temaSlug": "go-sangramento",
    "subtemaSlug": "go-sangramento-gestacao-ectopica",
    "tags": ["gestacao-ectopica","salpingectomia","massa-anexial"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 28 anos de idade, G3 P2 A0 (dois filhos vivos), chega ao pronto atendimento com atraso menstrual de 7 semanas, dor abdominal e exame de β-hCG com valor de 12.000 mUI/mL. Foi realizada ultrassonografia transvaginal que evidenciou massa anexial em tuba uterina direita de 6 cm de diâmetro com embrião sem batimentos cardíacos. A melhor conduta para o caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Salpingectomia direita",
        "explanation": "A alternativa **A** está correta. Trata-se de **gestação ectópica tubária direita** volumosa (**6 cm de diâmetro**) e com **$\\beta$-hCG muito elevado (12.000 mUI/mL)** em paciente já com 2 filhos vivos. Esses dois achados **contraindicam tanto a conduta expectante quanto o tratamento clínico com metotrexato** (que exige massa < 3,5–4 cm e $\\beta$-hCG < 5.000 mUI/mL). Pela diretriz da **FEBRASGO** e **ACOG**, a conduta cirúrgica padrão (preferencialmente videolaparoscópica) diante de tuba lesada/distendida (6 cm) e tuba contralateral presumivelmente saudável é a **salpingectomia direita**.",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Conduta expectante",
        "explanation": "Incorreta: Conduta expectante exige $\\beta$-hCG baixo (< 1.500–2.000) em declínio e massa pequena assintomática.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Tratamento clínico com metrotexate",
        "explanation": "Incorreta: Massa de 6 cm e $\\beta$-hCG de 12.000 mUI/mL têm altíssima taxa de falha e risco de rotura com metotrexato.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Salpingostomia",
        "explanation": "Incorreta: Salpingostomia (conservadora) reserva-se a pacientes com desejo reprodutivo e tuba contralateral ausente/lesada, com massa menor (< 4–5 cm), sob maior risco de trofoblasto persistente e nova ectópica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Laparotomia exploradora para salpingooforectomia direita",
        "explanation": "Incorreta: Não há indicação de retirar o ovário (ooforectomia) em gestação ectópica tubária.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Trata-se de **gestação ectópica tubária direita** volumosa (**6 cm de diâmetro**) e com **$\\beta$-hCG muito elevado (12.000 mUI/mL)** em paciente já com 2 filhos vivos. Esses dois achados **contraindicam tanto a conduta expectante quanto o tratamento clínico com metotrexato** (que exige massa < 3,5–4 cm e $\\beta$-hCG < 5.000 mUI/mL). Pela diretriz da **FEBRASGO** e **ACOG**, a conduta cirúrgica padrão (preferencialmente videolaparoscópica) diante de tuba lesada/distendida (6 cm) e tuba contralateral presumivelmente saudável é a **salpingectomia direita**.\n- **B) Incorreta:** Conduta expectante exige $\\beta$-hCG baixo (< 1.500–2.000) em declínio e massa pequena assintomática.\n- **C) Incorreta:** Massa de 6 cm e $\\beta$-hCG de 12.000 mUI/mL têm altíssima taxa de falha e risco de rotura com metotrexato.\n- **D) Incorreta:** Salpingostomia (conservadora) reserva-se a pacientes com desejo reprodutivo e tuba contralateral ausente/lesada, com massa menor (< 4–5 cm), sob maior risco de trofoblasto persistente e nova ectópica.\n- **E) Incorreta:** Não há indicação de retirar o ovário (ooforectomia) em gestação ectópica tubária.",
    "perolaClinica": "A alternativa **A** está correta. Trata-se de **gestação ectópica tubária direita** volumosa (**6 cm de diâmetro**) e com **$\\beta$-hCG muito elevado (12.000 mUI/mL)** em paciente já com 2 filhos vivos. Esses dois achados **contraindicam tanto a conduta…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-074",
    "code": "Q-UEPA24-0074",
    "numeroOriginal": 74,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Endócrina e Reprodutiva",
    "subtema": "Fisiologia do Ciclo Menstrual e Amenorreias",
    "temaSlug": "go-gineco-endocrino",
    "subtemaSlug": "go-gineco-endocrino-fisiologia-do-ciclo-menstrual-e-amenorreias",
    "tags": ["amenorreia-secundaria","hiperprolactinemia","risperidona","galactorreia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 33 anos de idade, tercigesta com 3 cesarianas anteriores, apresenta queixa de ausência de menstruação por 7 meses. Seu ciclo sempre foi regular anteriormente, mas nos últimos 6 meses tem apresentado descarga papilar láctea. Nega demais sintomas. Fez laqueadura tubária na última cesariana, faz uso de risperidona e losartana, iniciados há seis meses. Beta HCG negativo, funções ovariana e tireoidiana normais e exame transvaginal normal. Diante do exposto o provável mecanismo para as queixas da paciente é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "falência gonadal ocasionada pela laqueadura tubária.",
        "explanation": "Incorreta: Laqueadura tubária não causa falência gonadal nem galactorreia.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "hiperprolactinemia causada pela Losartana, devido à elevação do neuropeptídeo Y.",
        "explanation": "Incorreta: Losartana não é causa clássica de hiperprolactinemia (entre anti-hipertensivos, destacam-se metildopa e verapamil).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "falência ovariana precoce em paciente jovem.",
        "explanation": "Incorreta: O enunciado informa explicitamente que a função ovariana é normal, afastando IOP.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "antagonismo dos receptores D2 tuberoinfundibular hipotalâmico promovido pela Risperidona.",
        "explanation": "A alternativa **D** está correta. A associação temporal direta entre o início da **risperidona** (há 6 meses) e o quadro de **amenorreia secundária + galactorreia** (com $\\beta$-hCG negativo e função tireoidiana normal) caracteriza **hiperprolactinemia farmacológica**. A dopamina produzida na via **tuberoinfundibular** é o principal fator inibidor da secreção de prolactina; a risperidona (antipsicótico com potente bloqueio dopaminérgico) promove **antagonismo dos receptores D2**, elevando a prolactina e suprimindo a pulsatilidade de GnRH (FEBRASGO / SBEM).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "nos casos em que não se estabelece um motivo, como no caso acima, é classificada como idiopática.",
        "explanation": "Incorreta: Há causa farmacológica inequívoca (risperidona).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. A associação temporal direta entre o início da **risperidona** (há 6 meses) e o quadro de **amenorreia secundária + galactorreia** (com $\\beta$-hCG negativo e função tireoidiana normal) caracteriza **hiperprolactinemia farmacológica**. A dopamina produzida na via **tuberoinfundibular** é o principal fator inibidor da secreção de prolactina; a risperidona (antipsicótico com potente bloqueio dopaminérgico) promove **antagonismo dos receptores D2**, elevando a prolactina e suprimindo a pulsatilidade de GnRH (FEBRASGO / SBEM).\n- **A) Incorreta:** Laqueadura tubária não causa falência gonadal nem galactorreia.\n- **B) Incorreta:** Losartana não é causa clássica de hiperprolactinemia (entre anti-hipertensivos, destacam-se metildopa e verapamil).\n- **C) Incorreta:** O enunciado informa explicitamente que a função ovariana é normal, afastando IOP.\n- **E) Incorreta:** Há causa farmacológica inequívoca (risperidona).",
    "perolaClinica": "A alternativa **D** está correta. A associação temporal direta entre o início da **risperidona** (há 6 meses) e o quadro de **amenorreia secundária + galactorreia** (com $\\beta$-hCG negativo e função tireoidiana normal) caracteriza **hiperprolactinemia…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-075",
    "code": "Q-UEPA24-0075",
    "numeroOriginal": 75,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Vulvovaginites e Corrimentos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-vulvovaginites-e-corrimentos-genitais",
    "tags": ["tricomoniase","colo-em-morango","metronidazol","vulvovaginites"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 36 anos de idade, sem comorbidades, apresenta queixa de corrimento vaginal profuso, amarelado, acompanhado de ardor genital, disúria e dor durante relação sexual. Refere que os sintomas se acentuam no período pós-menstrual. Ao exame ginecológico, foi observada hiperemia dos genitais externos e presença de corrimento espesso, de aspecto purulento, exteriorizando-se pela fenda vulvar. Ao exame especular, aumento do conteúdo vaginal, de coloração amarelada e com odor, paredes vaginais hiperemiadas, observando-se o “colo uterino com aspecto de morango”. Diante do exposto, o diagnóstico e o tratamento adequado são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Candidíase vaginal, prescrever nistatina 100.000 UI, uma aplicação, via vaginal, à noite por 14 dias.",
        "explanation": "Incorreta: Candidíase apresenta corrimento branco grumoso aderido, prurido intenso e pH < 4,5, sem colo em morango.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Vaginose bacteriana, prescrever metronidazol 250mg, 2 comprimidos VO, 2x/dia, por 7 dias.",
        "explanation": "Incorreta: Vaginose bacteriana apresenta corrimento branco-acinzentado fino/homogêneo sem inflamação vaginal nem colo em morango.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Herpes genital, prescrever aciclovir 200mg, 2 comprimidos, VO, 3x/dia, por 7 dias.",
        "explanation": "Incorreta: Herpes genital manifesta-se por vesículas/úlceras dolorosas agrupadas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Tricomoníase, Metronidazol 400mg, 5 comprimidos, VO, dose única (dose total 2g).",
        "explanation": "A alternativa **D** está correta. Corrimento amarelo-esverdeado/purulento profuso com ardor, disúria, dispareunia, piora pós-menstrual e o achado patognomônico de **colpite macular (\"colo em framboesa/morango\")** confirmam **tricomoníase** (*Trichomonas vaginalis* — IST). Conforme o **PCDT de ISTs do Ministério da Saúde**, o tratamento de escolha é **metronidazol 2 g VO em dose única** (5 comprimidos de 400 mg) — ou metronidazol 500 mg VO 12/12h por 7 dias —, sempre tratando também a(s) parceria(s) sexual(is).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Vaginite atrófica, prescrever estriol 1% tópico.",
        "explanation": "Incorreta: Vaginite atrófica ocorre em hipoestrogenismo (pós-menopausa/puerpério), não em mulher de 36 anos com corrimento purulento e colo em morango.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Corrimento amarelo-esverdeado/purulento profuso com ardor, disúria, dispareunia, piora pós-menstrual e o achado patognomônico de **colpite macular (\"colo em framboesa/morango\")** confirmam **tricomoníase** (*Trichomonas vaginalis* — IST). Conforme o **PCDT de ISTs do Ministério da Saúde**, o tratamento de escolha é **metronidazol 2 g VO em dose única** (5 comprimidos de 400 mg) — ou metronidazol 500 mg VO 12/12h por 7 dias —, sempre tratando também a(s) parceria(s) sexual(is).\n- **A) Incorreta:** Candidíase apresenta corrimento branco grumoso aderido, prurido intenso e pH < 4,5, sem colo em morango.\n- **B) Incorreta:** Vaginose bacteriana apresenta corrimento branco-acinzentado fino/homogêneo sem inflamação vaginal nem colo em morango.\n- **C) Incorreta:** Herpes genital manifesta-se por vesículas/úlceras dolorosas agrupadas.\n- **E) Incorreta:** Vaginite atrófica ocorre em hipoestrogenismo (pós-menopausa/puerpério), não em mulher de 36 anos com corrimento purulento e colo em morango.",
    "perolaClinica": "A alternativa **D** está correta. Corrimento amarelo-esverdeado/purulento profuso com ardor, disúria, dispareunia, piora pós-menstrual e o achado patognomônico de **colpite macular (\"colo em framboesa/morango\")** confirmam **tricomoníase** (*Trichomonas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-076",
    "code": "Q-UEPA24-0076",
    "numeroOriginal": 76,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Oncologia Ginecológica e Mastologia",
    "subtema": "Doenças Benignas da Mama",
    "temaSlug": "go-onco-go",
    "subtemaSlug": "go-onco-go-doencas-benignas-da-mama",
    "tags": ["fluxo-papilar","descarga-papilar-uniductal","mamografia","ultrassonografia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 51 anos de idade, está procurando atendimento médico especializado devido ao aparecimento súbito e espontâneo de fluxo papilar apenas em mama direita, de coloração cristalina e caracterizado como uniductal ao exame físico. Nega comorbidades, traumas ou uso de medicações. Não sabe antecedentes familiares pois é filha adotiva. Diante do quadro, a conduta adequada é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "está indicada a realização de citologia oncótica, obtida por esfregaço do fluxo ou por lavagem e aspiração ductal.",
        "explanation": "Incorreta: A citologia do derrame papilar tem baixíssima sensibilidade (~30–50%) e alto índice de falsos-negativos, não sendo recomendada de rotina para descartar malignidade.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "está indicada a realização de ductografia, um procedimento simples e sem desconforto para paciente, que é útil para o diagnostico e tratamento.",
        "explanation": "Incorreta: A ductografia (galactografia) é invasiva, tecnicamente difícil, desconfortável e **não é terapêutica**.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "a realização de mamografia e ultrassonografia é mandatória para avaliar possíveis lesões concomitantes.",
        "explanation": "A alternativa **C** está correta. Descarga papilar **espontânea, unilateral, uniductal e cristalina (\"água de rocha\") ou sanguinolenta** em mulher de 51 anos é considerada **descarga papilar patológica/suspeita** (principais causas: papiloma intraductal e carcinoma ductal *in situ*/invasor). Segundo a **Sociedade Brasileira de Mastologia (SBM)** e a **FEBRASGO**, a investigação inicial obrigatória em mulheres ≥ 30–40 anos inclui **mamografia diagnóstica e ultrassonografia mamária** (com foco na região retroareolar) para pesquisar massas, microcalcificações ou lesões intraductais associadas antes de definir biópsia ou ressecção ductal.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "devido a descarga papilar ser espontânea, está indicada apenas exérese dos ductos acometidos.",
        "explanation": "Incorreta: A exérese de ductos não deve ser feita sem propedêutica de imagem prévia (mamografia + USG).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "deve ser feito seguimento clínico, sem adicional de exames complementares.",
        "explanation": "Incorreta: Fluxo uniductal espontâneo cristalino exige investigação diagnóstica ativa, nunca seguimento expectante sem exames.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Descarga papilar **espontânea, unilateral, uniductal e cristalina (\"água de rocha\") ou sanguinolenta** em mulher de 51 anos é considerada **descarga papilar patológica/suspeita** (principais causas: papiloma intraductal e carcinoma ductal *in situ*/invasor). Segundo a **Sociedade Brasileira de Mastologia (SBM)** e a **FEBRASGO**, a investigação inicial obrigatória em mulheres ≥ 30–40 anos inclui **mamografia diagnóstica e ultrassonografia mamária** (com foco na região retroareolar) para pesquisar massas, microcalcificações ou lesões intraductais associadas antes de definir biópsia ou ressecção ductal.\n- **A) Incorreta:** A citologia do derrame papilar tem baixíssima sensibilidade (~30–50%) e alto índice de falsos-negativos, não sendo recomendada de rotina para descartar malignidade.\n- **B) Incorreta:** A ductografia (galactografia) é invasiva, tecnicamente difícil, desconfortável e **não é terapêutica**.\n- **D) Incorreta:** A exérese de ductos não deve ser feita sem propedêutica de imagem prévia (mamografia + USG).\n- **E) Incorreta:** Fluxo uniductal espontâneo cristalino exige investigação diagnóstica ativa, nunca seguimento expectante sem exames.",
    "perolaClinica": "A alternativa **C** está correta. Descarga papilar **espontânea, unilateral, uniductal e cristalina (\"água de rocha\") ou sanguinolenta** em mulher de 51 anos é considerada **descarga papilar patológica/suspeita** (principais causas: papiloma intraductal e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-077",
    "code": "Q-UEPA24-0077",
    "numeroOriginal": 77,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Incontinência Urinária e Prolapsos Genitais",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-incontinencia-urinaria-e-prolapsos-genitais",
    "tags": ["prolapso-genital","pessario","estriol-topico","uroginecologia"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "M.B, 73 anos de idade, procura atendimento por queixa de ressecamento vaginal e “sensação de bola na vagina”. Refere menopausa aos 49 anos de idade e nunca realizou terapia de reposição hormonal. Ao exame físico foi observado prolapso de parede vaginal anterior estágio 3 que reduz após pressão digital, as paredes vaginais são pálidas sem rugosidades com coalescência de pequenos lábios. A paciente não deseja fazer tratamentos cirúrgicos para a redução do porlapso, portanto a melhor conduta conservadora para esse caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Histerectomia vaginal e prescrição de terapia de reposição hormonal via oral.",
        "explanation": "Incorreta: Histerectomia vaginal é cirurgia (recusada pela paciente) e TRH oral sistêmica não está indicada aos 73 anos (fora da janela de oportunidade).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Sling transobturatório, prescrição de promestrieno e fisioterapia pélvica.",
        "explanation": "Incorreta: *Sling* transobturatório é procedimento cirúrgico para incontinência urinária de esforço, não para prolapso estágio 3.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Indicação de pessário, associado ao uso de tratamento tópico com estriol.",
        "explanation": "A alternativa **C** está correta. Em paciente idosa (73 anos) com **prolapso de parede vaginal anterior estágio 3 sintomático** e **síndrome geniturinária da menopausa (atrofia vaginal intensa)** que **recusa tratamento cirúrgico**, a melhor estratégia conservadora — conforme **FEBRASGO** e **ACOG** — é o uso de **pessário vaginal** (dispositivo mecânico de suporte para redução do prolapso avançado) associado à **estrogenioterapia tópica vaginal (estriol)** para melhorar o trofismo epitelial e prevenir ulcerações/erosões pelo pessário.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "Colpocleise e uso de estrogênio transdérmico.",
        "explanation": "Incorreta: Colpocleise (cirurgia obliterativa de Le Fort) é tratamento cirúrgico, recusado pela paciente.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Fisioterapia pélvica e estriol creme vaginal em uso contínuo .",
        "explanation": "Incorreta: Fisioterapia pélvica isolada tem baixa eficácia na redução anatômica de prolapsos avançados (estágio 3/4), sendo o pessário a opção conservadora efetiva.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Em paciente idosa (73 anos) com **prolapso de parede vaginal anterior estágio 3 sintomático** e **síndrome geniturinária da menopausa (atrofia vaginal intensa)** que **recusa tratamento cirúrgico**, a melhor estratégia conservadora — conforme **FEBRASGO** e **ACOG** — é o uso de **pessário vaginal** (dispositivo mecânico de suporte para redução do prolapso avançado) associado à **estrogenioterapia tópica vaginal (estriol)** para melhorar o trofismo epitelial e prevenir ulcerações/erosões pelo pessário.\n- **A) Incorreta:** Histerectomia vaginal é cirurgia (recusada pela paciente) e TRH oral sistêmica não está indicada aos 73 anos (fora da janela de oportunidade).\n- **B) Incorreta:** *Sling* transobturatório é procedimento cirúrgico para incontinência urinária de esforço, não para prolapso estágio 3.\n- **D) Incorreta:** Colpocleise (cirurgia obliterativa de Le Fort) é tratamento cirúrgico, recusado pela paciente.\n- **E) Incorreta:** Fisioterapia pélvica isolada tem baixa eficácia na redução anatômica de prolapsos avançados (estágio 3/4), sendo o pessário a opção conservadora efetiva.",
    "perolaClinica": "A alternativa **C** está correta. Em paciente idosa (73 anos) com **prolapso de parede vaginal anterior estágio 3 sintomático** e **síndrome geniturinária da menopausa (atrofia vaginal intensa)** que **recusa tratamento cirúrgico**, a melhor estratégia…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-078",
    "code": "Q-UEPA24-0078",
    "numeroOriginal": 78,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Doença Inflamatória Pélvica",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-doenca-inflamatoria-pelvica",
    "tags": ["dip","diu-de-cobre","manutencao-do-diu","oms"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente de 31 anos de idade está no ambulatório com dor pélvica devido ao diagnóstico de doença inflamatória pélvica. A paciente faz uso de carbamazepina e usa como método contraceptivo o dispositivo intrauterino de cobre (TCu380A) que foi inserido há 7 anos. Realizada ultrassonografia transvaginal que detectou dispositivo intrauterino normoposicionado e ausência de piossalpinge. Para o caso descrito, de acordo com orientações da Organização mundial de saúde, a melhor conduta é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "retirar obrigatoriamente o dispositivo intrauterino, tratar a doença inflamatória pélvica com antibióticos adequados e prescrever anticoncepcional combinado oral.",
        "explanation": "Incorreta: Não se retira o DIU obrigatoriamente e anticoncepcional combinado oral tem eficácia reduzida pela carbamazepina (categoria 3 da OMS).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "manter o dispositivo intrauterino, tratar a doença inflamatória pélvica com anti-inflamatórios adequados e fazer seguimento ambulatorial.",
        "explanation": "Incorreta: DIP exige **antibioticoterapia**, não apenas anti-inflamatórios.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "internar a paciente para tratamento endovenoso da doença inflamatória pélvica com antibióticos e retirada obrigatória do dispositivo intrauterino.",
        "explanation": "Incorreta: Ausência de abscesso tubo-ovariano/sinais de gravidade permite manejo ambulatorial sem retirada obrigatória do DIU.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "não há necessidade de retirar o dispositivo intrauterino e deve-se realizar tratamento com antibióticos adequados para doença inflamatória pélvica.",
        "explanation": "A alternativa **D** está correta. Pelos **Critérios Médicos de Elegibilidade da OMS** e pelo **PCDT de ISTs (Ministério da Saúde)**, em usuária de DIU diagnosticada com **DIP** sem critérios de gravidade (ausência de piossalpinge/abscesso tubo-ovariano), **não há necessidade de remoção imediata do DIU** — institui-se **antibioticoterapia adequada** (ceftriaxona + doxiciclina + metronidazol) e reavalia-se clinicamente em 48–72 horas (considerando retirada apenas se não houver melhora clínica). Além disso, o DIU **TCu380A** tem validade de **10 anos** (está há 7 anos, normoposicionado) e é excelente escolha para usuária de **carbamazepina** (indutor enzimático que reduz a eficácia de contraceptivos hormonais orais).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "dispositivo intrauterino está vencido e deve ser retirado. Deve-se fazer o tratamento com antibióticos para doença inflamatória pélvica e em seguida propor inserção de novo dispositivo.",
        "explanation": "Incorreta: O DIU TCu380A dura **10 anos** (não está vencido aos 7 anos).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Pelos **Critérios Médicos de Elegibilidade da OMS** e pelo **PCDT de ISTs (Ministério da Saúde)**, em usuária de DIU diagnosticada com **DIP** sem critérios de gravidade (ausência de piossalpinge/abscesso tubo-ovariano), **não há necessidade de remoção imediata do DIU** — institui-se **antibioticoterapia adequada** (ceftriaxona + doxiciclina + metronidazol) e reavalia-se clinicamente em 48–72 horas (considerando retirada apenas se não houver melhora clínica). Além disso, o DIU **TCu380A** tem validade de **10 anos** (está há 7 anos, normoposicionado) e é excelente escolha para usuária de **carbamazepina** (indutor enzimático que reduz a eficácia de contraceptivos hormonais orais).\n- **A) Incorreta:** Não se retira o DIU obrigatoriamente e anticoncepcional combinado oral tem eficácia reduzida pela carbamazepina (categoria 3 da OMS).\n- **B) Incorreta:** DIP exige **antibioticoterapia**, não apenas anti-inflamatórios.\n- **C) Incorreta:** Ausência de abscesso tubo-ovariano/sinais de gravidade permite manejo ambulatorial sem retirada obrigatória do DIU.\n- **E) Incorreta:** O DIU TCu380A dura **10 anos** (não está vencido aos 7 anos).",
    "perolaClinica": "A alternativa **D** está correta. Pelos **Critérios Médicos de Elegibilidade da OMS** e pelo **PCDT de ISTs (Ministério da Saúde)**, em usuária de DIU diagnosticada com **DIP** sem critérios de gravidade (ausência de piossalpinge/abscesso tubo-ovariano),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-079",
    "code": "Q-UEPA24-0079",
    "numeroOriginal": 79,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Parto, Prematuridade e Puerpério",
    "subtema": "Partograma e Distocias",
    "temaSlug": "go-parto",
    "subtemaSlug": "go-parto-partograma-e-distocias",
    "tags": ["partograma","periodo-expulsivo-prolongado","forceps-de-simpson"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Gestante de 39 semanas de gestação, secundigesta com 1 parto normal há 2 anos, apresenta a evolução do trabalho de parto de acordo com o partograma em anexo (Fonte: ZUGAIB, 2023). [Descrição do partograma anexo: dilatação cervical progride de 4 cm na hora 2 até 10 cm (dilatação completa) na hora 7, permanecendo em 10 cm nas horas 7, 8 e 9; apresentação fetal desce progressivamente do plano –3 de De Lee (horas 1–3) para –2 (hora 4), –1 (hora 5), 0 (hora 6), +1 (hora 7), +2 (hora 8) e +3 (hora 9).] No último registro do partograma, foram registradas 4 contrações uterinas fortes a cada 10 minutos, bolsa rota com líquido claro com grumos, com batimento cardíaco fetal em 100bpm, com quedas recorrentes de até 30bpm durante as contrações. Diante do exposto, o diagnóstico do partograma e a conduta mais adequada para o caso são:",
    "alternativas": [
      {
        "letter": "A",
        "text": "parada secundária da dilatação, está indicada a aplicação de vácuo extrator.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "parto taquitócito, portanto deve-se aguardar a evolução do parto corrigindo as contrações com ocitocina .",
        "explanation": "Incorreta: Parto taquitócito é o parto precipitado com duração total < 4 horas; além disso, já há 4 contrações fortes em 10 min (não se usa ocitocina).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "parada secundária da descida, logo está indicada cesariana por parto obstruído .",
        "explanation": "Incorreta: A parada secundária da descida ocorre quando a apresentação permanece na mesma altura por ≥ 2 horas após dilatação completa — aqui houve descida contínua (+1 → +2 → +3).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "parada secundária da dilatação, realizar amniotomia para aumentar as contrações.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "período expulsivo prolongado, indicar fórceps de Simpson .",
        "explanation": "A alternativa **E** está correta. Analisando o **partograma** (Zugaib 2023): a paciente atingiu **dilatação completa (10 cm) na hora 7** e permanece em período expulsivo na **hora 9 (mais de 2 horas de período expulsivo em multípara/secundigesta)**, porém a apresentação **continuou descendo** progressivamente (de +1 → +2 → **+3 de De Lee**, portanto **não** houve parada da descida). Trata-se de **período expulsivo prolongado** associado a **sofrimento fetal agudo** (BCF basal 100 bpm com desacelerações de 30 bpm). Como estão preenchidas todas as condições de aplicabilidade (dilatação completa, bolsa rota, apresentação cefálica baixa em +3 de De Lee), a conduta de escolha para abreviação imediata do período expulsivo é o **parto instrumental com fórceps de Simpson** (FEBRASGO / Zugaib).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Analisando o **partograma** (Zugaib 2023): a paciente atingiu **dilatação completa (10 cm) na hora 7** e permanece em período expulsivo na **hora 9 (mais de 2 horas de período expulsivo em multípara/secundigesta)**, porém a apresentação **continuou descendo** progressivamente (de +1 → +2 → **+3 de De Lee**, portanto **não** houve parada da descida). Trata-se de **período expulsivo prolongado** associado a **sofrimento fetal agudo** (BCF basal 100 bpm com desacelerações de 30 bpm). Como estão preenchidas todas as condições de aplicabilidade (dilatação completa, bolsa rota, apresentação cefálica baixa em +3 de De Lee), a conduta de escolha para abreviação imediata do período expulsivo é o **parto instrumental com fórceps de Simpson** (FEBRASGO / Zugaib).\n- **A e D) Incorretas:** A dilatação já atingiu 10 cm (não há parada secundária da dilatação) e a bolsa já está rota.\n- **B) Incorreta:** Parto taquitócito é o parto precipitado com duração total < 4 horas; além disso, já há 4 contrações fortes em 10 min (não se usa ocitocina).\n- **C) Incorreta:** A parada secundária da descida ocorre quando a apresentação permanece na mesma altura por ≥ 2 horas após dilatação completa — aqui houve descida contínua (+1 → +2 → +3).",
    "perolaClinica": "A alternativa **E** está correta. Analisando o **partograma** (Zugaib 2023): a paciente atingiu **dilatação completa (10 cm) na hora 7** e permanece em período expulsivo na **hora 9 (mais de 2 horas de período expulsivo em multípara/secundigesta)**, porém a…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-080",
    "code": "Q-UEPA24-0080",
    "numeroOriginal": 80,
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia Geral e Uroginecologia",
    "subtema": "Miomatose Uterina e Pólipos",
    "temaSlug": "go-gineco-geral",
    "subtemaSlug": "go-gineco-geral-miomatose-uterina-e-polipos",
    "tags": ["leiomioma-submucoso","figo-1","miomectomia-histeroscopica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Uma paciente de 34 anos de idade, com desejo reprodutivo, realizou ultrassonografia transvaginal para avaliar a cavidade uterina. O exame evidenciou um nódulo uterino classificado como FIGO 1, sugestivo de leiomioma do útero, medindo 20 mm. A conduta mais adequada para o caso relatado é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "miomectomia por via histeroscópica .",
        "explanation": "A alternativa **A** está correta. Pela classificação **PALM-COEIN da FIGO**, um leiomioma **FIGO tipo 1** é **submucoso com < 50% de componente intramural** (ou seja, > 50% projetado para dentro da cavidade endometrial). Em mulher com **desejo reprodutivo** (miomas submucosos reduzem implantação e aumentam abortamento), medindo 20 mm (2 cm), a abordagem padrão-ouro e minimamente invasiva é a **miomectomia por via histeroscópica** (FEBRASGO).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "miomectomia por via laparoscópica .",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "ressonância magnética da pelve .",
        "explanation": "Incorreta: Mioma único FIGO 1 de 20 mm bem caracterizado à USG já tem indicação terapêutica histeroscópica direta.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "miomectomia por via laparotômica .",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "embolização das artérias uterinas.",
        "explanation": "Incorreta: Embolização de artérias uterinas é classicamente evitada/relativamente contraindicada em mulheres com desejo reprodutivo (risco de insuficiência ovariana, sinéquias e complicações placentárias).",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Pela classificação **PALM-COEIN da FIGO**, um leiomioma **FIGO tipo 1** é **submucoso com < 50% de componente intramural** (ou seja, > 50% projetado para dentro da cavidade endometrial). Em mulher com **desejo reprodutivo** (miomas submucosos reduzem implantação e aumentam abortamento), medindo 20 mm (2 cm), a abordagem padrão-ouro e minimamente invasiva é a **miomectomia por via histeroscópica** (FEBRASGO).\n- **B e D) Incorretas:** Vias laparoscópica e laparotômica são reservadas a miomas intramurais/subserosos (FIGO 3–7) ou submucosos muito volumosos/múltiplos inacessíveis à histeroscopia.\n- **C) Incorreta:** Mioma único FIGO 1 de 20 mm bem caracterizado à USG já tem indicação terapêutica histeroscópica direta.\n- **E) Incorreta:** Embolização de artérias uterinas é classicamente evitada/relativamente contraindicada em mulheres com desejo reprodutivo (risco de insuficiência ovariana, sinéquias e complicações placentárias).",
    "perolaClinica": "A alternativa **A** está correta. Pela classificação **PALM-COEIN da FIGO**, um leiomioma **FIGO tipo 1** é **submucoso com < 50% de componente intramural** (ou seja, > 50% projetado para dentro da cavidade endometrial). Em mulher com **desejo reprodutivo**…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-081",
    "code": "Q-UEPA24-0081",
    "numeroOriginal": 81,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Triagens Neonatais",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-triagens-neonatais",
    "tags": ["hipotireoidismo-congenito","teste-do-pezinho","ictericia-prolongada","tsh"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Paciente com 3 meses de idade é levado a consulta devido icterícia desde o quinto dia de vida, associada a constipação crônica. Ao exame físico, bebê hipoativo, ictérico, não sustenta o pescoço, com fontanela ampla, presença de fecaloma palpável em fossa ilíaca direita e hérnia umbilical. Mãe realizou pré-natal completo, sem intercorrências. Encontra-se em aleitamento materno exclusivo, as vacinas do bebê estão atualizadas, realizou teste do pezinho com resultado pendente. Em relação ao caso descrito, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "a principal hipótese diagnóstica é megacolon congênito, devendo ser realizado clister opaco para a confirmação diagnóstica e posterior tratamento cirúrgico.",
        "explanation": "Incorreta: Doença de Hirschsprung (megacólon congênito) não explica icterícia prolongada, fontanela ampla, hipoatividade e hérnia umbilical.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "deve ser prescrito probiótico para regularizar o funcionamento intestinal e tranquilizar a mãe em relação a icterícia pelo leite materno, sem a necessidade de suspensão do aleitamento.",
        "explanation": "Incorreta: Icterícia do leite materno cursa em bebê ativo, com ganho ponderal adequado e exame neurológico/intestinal normais.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "deve ser solicitado THS e T4 livre para descartar a principal hipótese diagnóstica, confirmada caso THS acima do valor de referência, podendo o T4 estar baixo ou normal.",
        "explanation": "A alternativa **C** está correta. O lactente de 3 meses (com teste do pezinho pendente) apresenta o quadro clínico clássico de **Hipotireoidismo Congênito** não tratado: **icterícia prolongada**, **constipação crônica/fecaloma**, **hipoatividade**, **atraso neuropsicomotor (não sustenta a cabeça aos 3 meses)**, **fontanela ampla** e **hérnia umbilical**. Segundo o **PCDT de Hipotireoidismo Congênito (MS)** e a **SBP**, deve-se solicitar imediatamente **TSH** (grafado \"THS\" na prova original) e **T4 livre** séricos — o diagnóstico primário confirma-se com **TSH elevado** acompanhado de T4 livre baixo (ou ainda normal nas formas compensadas/iniciais), iniciando-se levotiroxina sem demora para prevenir deficiência intelectual irreversível.",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "o paciente deve ser encaminhado para acompanhamento com terapeuta ocupacional e fisioterapeuta, além de realizar ressonância nuclear magnética para elucidar o diagnóstico.",
        "explanation": "Incorreta: A prioridade absoluta é o diagnóstico bioquímico e reposição hormonal imediata, não RNM de crânio.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "devem ser investigadas as infecções congênitas com acometimento hepático e de sistema nervoso central, especialmente sífilis congênita e citomegalovírus congênito.",
        "explanation": "Incorreta: Infecções congênitas (TORCH) cursam tipicamente com hepatoesplenomegalia, microcefalia/calcificações, petéquias ou baixo peso ao nascer, não a síndrome clássica de hipotireoidismo congênito.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. O lactente de 3 meses (com teste do pezinho pendente) apresenta o quadro clínico clássico de **Hipotireoidismo Congênito** não tratado: **icterícia prolongada**, **constipação crônica/fecaloma**, **hipoatividade**, **atraso neuropsicomotor (não sustenta a cabeça aos 3 meses)**, **fontanela ampla** e **hérnia umbilical**. Segundo o **PCDT de Hipotireoidismo Congênito (MS)** e a **SBP**, deve-se solicitar imediatamente **TSH** (grafado \"THS\" na prova original) e **T4 livre** séricos — o diagnóstico primário confirma-se com **TSH elevado** acompanhado de T4 livre baixo (ou ainda normal nas formas compensadas/iniciais), iniciando-se levotiroxina sem demora para prevenir deficiência intelectual irreversível.\n- **A) Incorreta:** Doença de Hirschsprung (megacólon congênito) não explica icterícia prolongada, fontanela ampla, hipoatividade e hérnia umbilical.\n- **B) Incorreta:** Icterícia do leite materno cursa em bebê ativo, com ganho ponderal adequado e exame neurológico/intestinal normais.\n- **D) Incorreta:** A prioridade absoluta é o diagnóstico bioquímico e reposição hormonal imediata, não RNM de crânio.\n- **E) Incorreta:** Infecções congênitas (TORCH) cursam tipicamente com hepatoesplenomegalia, microcefalia/calcificações, petéquias ou baixo peso ao nascer, não a síndrome clássica de hipotireoidismo congênito.",
    "perolaClinica": "A alternativa **C** está correta. O lactente de 3 meses (com teste do pezinho pendente) apresenta o quadro clínico clássico de **Hipotireoidismo Congênito** não tratado: **icterícia prolongada**, **constipação crônica/fecaloma**, **hipoatividade**, **atraso…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-082",
    "code": "Q-UEPA24-0082",
    "numeroOriginal": 82,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Pneumonia Adquirida na Comunidade em Pediatria",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-pneumonia-adquirida-na-comunidade-em-pediatria",
    "tags": ["pneumonia-estafilococica","oxacilina","pac-pediatrica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menino de 5 anos de idade vai a UPA com quadro de tosse úmida e febre alta há 2 dias, com queda do estado geral hoje. Nega vômitos ou recusa alimentar. Vacinas atualizadas. Ao exame físico, criança alerta, ativa, com presença de tiragem intercostal e estertores crepitantes em terço médio de hemitórax direito, com ruídos hidroaéreos dimunuídos em base ipsilateral. Presença de lesões de estrófulos em membros inferiores, sem outras alterações cutâneas. Saturação de 97% em ar ambiente. Sobre o caso descrito, assinale a alternativa que contém a escolha do antimicrobiano correta:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Penicilina G Cristalina endovenosa",
        "explanation": "Incorreta: Penicilina G cristalina não tem atividade contra *S. aureus* produtor de penicilinase.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Oxacilina endovenosa",
        "explanation": "A alternativa **B** está correta. Menino de 5 anos com pneumonia bacteriana aguda com sinal de gravidade/internação (tiragem intercostal, queda do estado geral e provável derrame pleural — redução do murmúrio vesicular/sons em base direita, grafado \"ruídos hidroaéreos\" por lapso no enunciado) associado a **lesões cutâneas pruriginosas (estrófulo em MMII)** — clássica **porta de entrada cutânea para *Staphylococcus aureus***. Pelas diretrizes da **SBP** para PAC complicada/com suspeita de etiologia estafilocócica comunitária (MSSA), o antimicrobiano de escolha inicial é a **oxacilina endovenosa** (frequentemente associada a ceftriaxona para cobertura pneumocócica concomitante).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "Vancomicina endovenosa",
        "explanation": "Incorreta: Vancomicina reserva-se a casos sépticos graves/UTI, pneumonia necrosante fulminante ou suspeita de CA-MRSA (a criança está alerta, ativa, SpO2 97%).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Amoxicilina com clavulanato oral",
        "explanation": "Incorreta: A criança apresenta tiragem intercostal, queda do estado geral e provável derrame pleural, indicando tratamento hospitalar endovenoso.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Claritromicina via oral.",
        "explanation": "Incorreta: Macrolídeo (claritromicina) cobre germes atípicos (*Mycoplasma*), não sendo escolha para pneumonia bacteriana com porta de entrada cutânea e derrame.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Menino de 5 anos com pneumonia bacteriana aguda com sinal de gravidade/internação (tiragem intercostal, queda do estado geral e provável derrame pleural — redução do murmúrio vesicular/sons em base direita, grafado \"ruídos hidroaéreos\" por lapso no enunciado) associado a **lesões cutâneas pruriginosas (estrófulo em MMII)** — clássica **porta de entrada cutânea para *Staphylococcus aureus***. Pelas diretrizes da **SBP** para PAC complicada/com suspeita de etiologia estafilocócica comunitária (MSSA), o antimicrobiano de escolha inicial é a **oxacilina endovenosa** (frequentemente associada a ceftriaxona para cobertura pneumocócica concomitante).\n- **A) Incorreta:** Penicilina G cristalina não tem atividade contra *S. aureus* produtor de penicilinase.\n- **C) Incorreta:** Vancomicina reserva-se a casos sépticos graves/UTI, pneumonia necrosante fulminante ou suspeita de CA-MRSA (a criança está alerta, ativa, SpO2 97%).\n- **D) Incorreta:** A criança apresenta tiragem intercostal, queda do estado geral e provável derrame pleural, indicando tratamento hospitalar endovenoso.\n- **E) Incorreta:** Macrolídeo (claritromicina) cobre germes atípicos (*Mycoplasma*), não sendo escolha para pneumonia bacteriana com porta de entrada cutânea e derrame.",
    "perolaClinica": "A alternativa **B** está correta. Menino de 5 anos com pneumonia bacteriana aguda com sinal de gravidade/internação (tiragem intercostal, queda do estado geral e provável derrame pleural — redução do murmúrio vesicular/sons em base direita, grafado \"ruídos…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-083",
    "code": "Q-UEPA24-0083",
    "numeroOriginal": 83,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Vacinas Especiais - CRIE e Eventos Adversos",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-vacinas-especiais-crie-e-eventos-adversos",
    "tags": ["vacina-varicela","erro-inato-da-imunidade","vacinas-em-imunossuprimidos"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Menina de 10 anos de idade, com antecedente de pneumonia de repetição, vai a consulta com seu pediatra para investigar a causa. Ao avaliar a caderneta de vacinação, ele observa que a paciente tem várias vacinas atrasadas, geralmente por estar com sintomas infecciosos nos dias de vacinação. O pediatra resolve investigar erro inato da imunidade e contraindica a seguinte vacina até que seja definido o diagnóstico:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Pneumococo",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Influenza",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Varicela",
        "explanation": "A alternativa **C** está correta. Na suspeita de **Erro Inato da Imunidade (imunodeficiência primária)** — especialmente defeitos de imunidade celular ou combinada —, estão **contraindicadas as vacinas de agentes vivos atenuados** (BCG, VOP, VORH, febre amarela, tríplice viral e **varicela**) até a definição diagnóstica e imunológica pelo risco de doença vacinal disseminada (Manual dos CRIE — Ministério da Saúde / SBP).",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "HPV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Meningococo",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Na suspeita de **Erro Inato da Imunidade (imunodeficiência primária)** — especialmente defeitos de imunidade celular ou combinada —, estão **contraindicadas as vacinas de agentes vivos atenuados** (BCG, VOP, VORH, febre amarela, tríplice viral e **varicela**) até a definição diagnóstica e imunológica pelo risco de doença vacinal disseminada (Manual dos CRIE — Ministério da Saúde / SBP).\n- **A, B, D e E) Incorretas:** As vacinas contra **pneumococo, influenza, HPV e meningococo** são todas **inativadas / de subunidades / recombinantes** (não contêm agentes vivos) e são **seguras e recomendadas** em pacientes com suspeita ou confirmação de imunodeficiência.",
    "perolaClinica": "A alternativa **C** está correta. Na suspeita de **Erro Inato da Imunidade (imunodeficiência primária)** — especialmente defeitos de imunidade celular ou combinada —, estão **contraindicadas as vacinas de agentes vivos atenuados** (BCG, VOP, VORH, febre…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-084",
    "code": "Q-UEPA24-0084",
    "numeroOriginal": 84,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Doenças Exantemáticas",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-doencas-exantematicas",
    "tags": ["exantema-subito","roseola-infantum","hhv-6","doencas-exantematicas"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Mãe levou sua filha de 9 meses à consulta no Posto de Saúde de seu bairro com queixa de febre de até 39,5C há 2 dias, com estado geral preservado e apetite levemente diminuído. Segundo ela, o médico examinou a criança e disse não haver nada de alterado no exame físico, porém prescreveu amoxicilina empírica. Há 24 horas a febre cessou, no entanto surgiu exantema macular em tronco, não pruriginoso, por isso ela retorna à unidade preocupada com as manchas. Sobre o caso, é correto orientar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "O bebê apresenta quadro compatível de sarampo, evidenciado pela febre alta e pelo exantema na ausência de vacina específica.",
        "explanation": "Incorreta: No sarampo há pródromo catarral intenso (tosse, coriza, conjuntivite, manchas de Koplik) e o exantema surge **durante o pico da febre** com progressão craniocaudal.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Deve ser suspensa a amoxicilina devido quadro alérgico ao medicamento e iniciado outro antimicrobiano de classe diferente.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "A evolução clínica sugere etiologia viral, mais provavelmente causado por Parvovírus B19, devendo ser suspenso o antimicrobiano.",
        "explanation": "Incorreta: Parvovírus B19 causa **eritema infeccioso** (face esbofeteada + exantema rendilhado em membros em crianças maiores/escolares).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "O diagnóstico mais provável é de Roséola Infantum, devendo ser suspenso o antimicrobiano.",
        "explanation": "A alternativa **D** está correta. Lactente (pico entre 6 e 15 meses) com **febre alta (39,5 °C) por 2 a 3 dias com excelente estado geral** e exame físico normal, seguida pelo **desaparecimento súbito da febre coincidindo com o surgimento de exantema maculopapular róseo em tronco não pruriginoso**, é o quadro patognomônico de **Exantema Súbito (Roséola Infantum)**, causado pelo **Herpesvírus humano tipo 6 (HHV-6)** (ou HHV-7). Como a etiologia é viral benigna e autolimitada, deve-se tranquilizar a família e **suspender a amoxicilina** prescrita desnecessariamente (evitando inclusive o rótulo equivocado de \"alergia à penicilina\") (SBP / Nelson).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "A duração da febre e bom estado geral fala a favor de quadro viral associado a reação alérgica a amoxicilina, devendo esta ser suspensa e iniciar anti-histamínico.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Lactente (pico entre 6 e 15 meses) com **febre alta (39,5 °C) por 2 a 3 dias com excelente estado geral** e exame físico normal, seguida pelo **desaparecimento súbito da febre coincidindo com o surgimento de exantema maculopapular róseo em tronco não pruriginoso**, é o quadro patognomônico de **Exantema Súbito (Roséola Infantum)**, causado pelo **Herpesvírus humano tipo 6 (HHV-6)** (ou HHV-7). Como a etiologia é viral benigna e autolimitada, deve-se tranquilizar a família e **suspender a amoxicilina** prescrita desnecessariamente (evitando inclusive o rótulo equivocado de \"alergia à penicilina\") (SBP / Nelson).\n- **A) Incorreta:** No sarampo há pródromo catarral intenso (tosse, coriza, conjuntivite, manchas de Koplik) e o exantema surge **durante o pico da febre** com progressão craniocaudal.\n- **B e E) Incorretas:** Não se trata de farmacodermia alérgica (o exantema não é pruriginoso e seguiu o padrão clássico pós-febril da roséola) nem há indicação de outro antibiótico.\n- **C) Incorreta:** Parvovírus B19 causa **eritema infeccioso** (face esbofeteada + exantema rendilhado em membros em crianças maiores/escolares).",
    "perolaClinica": "A alternativa **D** está correta. Lactente (pico entre 6 e 15 meses) com **febre alta (39,5 °C) por 2 a 3 dias com excelente estado geral** e exame físico normal, seguida pelo **desaparecimento súbito da febre coincidindo com o surgimento de exantema…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-085",
    "code": "Q-UEPA24-0085",
    "numeroOriginal": 85,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "subtema": "Distúrbios Metabólicos e Enterocolite Necrosante",
    "temaSlug": "ped-neo",
    "subtemaSlug": "ped-neo-disturbios-metabolicos-e-enterocolite-necrosante",
    "tags": ["pseudomenstruacao-neonatal","recem-nascido","alojamento-conjunto"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Recém-nascida internada no Alojamento Conjunto, 24 horas de vida, nascida de parto vaginal, pesando 3200 g, apresenta pequeno sangramento em fralda, de origem vaginal. O médico do plantão é acionado para avaliar a criança e constata presença de sangue em região genital, sem outras alterações ao exame físico. Assinale abaixo a alternativa que contém a causa do sangramento da RN:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Supressão de hormônios sexuais maternos",
        "explanation": "A alternativa **A** está correta. Pequeno sangramento vaginal (ou secreção mucoide esbranquiçada) nos primeiros dias de vida em recém-nascida hígida, com exame físico normal, constitui a **pseudomenstruação (crise genital) neonatal** — fenômeno completamente **fisiológico e benigno** causado pela **queda abrupta/supressão dos hormônios sexuais maternos (estrogênio/progesterona)** transferidos pela placenta após o nascimento, levando à descamação endometrial transitória (SBP / Cloherty).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "Munchausen por procuração",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Tocotraumatismo",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Rabdomiossarcoma",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Alimentação materna rica em soja",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Pequeno sangramento vaginal (ou secreção mucoide esbranquiçada) nos primeiros dias de vida em recém-nascida hígida, com exame físico normal, constitui a **pseudomenstruação (crise genital) neonatal** — fenômeno completamente **fisiológico e benigno** causado pela **queda abrupta/supressão dos hormônios sexuais maternos (estrogênio/progesterona)** transferidos pela placenta após o nascimento, levando à descamação endometrial transitória (SBP / Cloherty).\n- **B, C, D e E) Incorretas:** Não há sinais de trauma, massa/lesão em \"cacho de uvas\" (sarcoma botrioide/rabdomiossarcoma) ou abuso, e a alimentação materna com soja não causa sangramento vaginal neonatal.",
    "perolaClinica": "A alternativa **A** está correta. Pequeno sangramento vaginal (ou secreção mucoide esbranquiçada) nos primeiros dias de vida em recém-nascida hígida, com exame físico normal, constitui a **pseudomenstruação (crise genital) neonatal** — fenômeno completamente…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-086",
    "code": "Q-UEPA24-0086",
    "numeroOriginal": 86,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Tuberculose e Arboviroses na Infância",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-tuberculose-e-arboviroses-na-infancia",
    "tags": ["tuberculose-infantil","escore-de-pontuacao-tb","prova-tuberculinica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Criança de 5 anos de idade, apresenta tosse úmida e diminuição do apetite há 20 dias, associados a febre não aferida. Em uso atual de xarope expectorante e já fez uso de amoxicilina por 7 dias, sem melhora. Ao exame físico, peso com Z-score <-3, ausculta pulmonar sem alterações. O irmão mais velho, de 19 anos, apresenta os mesmos sintomas há 30 dias Em relação ao caso é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "podem ser levados em consideração o quadro clínico, a epidemiologia, radiografia de tórax e teste tuberculínico na investigação diagnóstica.",
        "explanation": "A alternativa **A** está correta. Criança de 5 anos com **tosse prolongada (> 2 semanas)** sem resposta a amoxicilina, febre, hiporexia, **desnutrição grave (Z-score < –3)** e **contato domiciliar com adulto sintomático respiratório (irmão de 19 anos)** tem forte suspeita de **tuberculose pulmonar na infância**. Como crianças < 10 anos são geralmente paucibacilares e têm dificuldade para expectorar, o **Ministério da Saúde (Manual de Controle da Tuberculose)** preconiza o diagnóstico pelo **Sistema de Pontuação (Escore Clínico)**, que combina cinco critérios: **quadro clínico-radiológico**, **contato com adulto tuberculoso (epidemiologia)**, **teste tuberculínico (PPD/PT)** e **estado nutricional** (≥ 40 pontos = diagnóstico muito provável; 30–35 = possível).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "radiografia de seios da face deve ser realizada para confirmação diagnóstica.",
        "explanation": "Incorreta: Radiografia de seios da face não é indicada para sinusite nem diagnostica tuberculose pulmonar.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "trata-se de quadro provavelmente alérgico causado por fatores ambientais, devendo ser tratado com anti-histamínico.",
        "explanation": "Incorreta: Desnutrição grave, febre e contato domiciliar com tosse crônica afastam quadro puramente alérgico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "para confirmação diagnostica deve ser solicitado exame do escarro em três amostras e radiografia de tórax.",
        "explanation": "Incorreta: Crianças de 5 anos raramente conseguem produzir escarro adequado e costumam ser paucibacilares (escarro negativo não exclui TB; o diagnóstico baseia-se no escore do MS).",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "o exame mais indicado na investigação diagnóstica do paciente é a tomografia computadorizada de tórax.",
        "explanation": "Incorreta: A radiografia simples de tórax (e não a TC) é o exame de imagem inicial preconizado pelo MS.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta. Criança de 5 anos com **tosse prolongada (> 2 semanas)** sem resposta a amoxicilina, febre, hiporexia, **desnutrição grave (Z-score < –3)** e **contato domiciliar com adulto sintomático respiratório (irmão de 19 anos)** tem forte suspeita de **tuberculose pulmonar na infância**. Como crianças < 10 anos são geralmente paucibacilares e têm dificuldade para expectorar, o **Ministério da Saúde (Manual de Controle da Tuberculose)** preconiza o diagnóstico pelo **Sistema de Pontuação (Escore Clínico)**, que combina cinco critérios: **quadro clínico-radiológico**, **contato com adulto tuberculoso (epidemiologia)**, **teste tuberculínico (PPD/PT)** e **estado nutricional** (≥ 40 pontos = diagnóstico muito provável; 30–35 = possível).\n- **B) Incorreta:** Radiografia de seios da face não é indicada para sinusite nem diagnostica tuberculose pulmonar.\n- **C) Incorreta:** Desnutrição grave, febre e contato domiciliar com tosse crônica afastam quadro puramente alérgico.\n- **D) Incorreta:** Crianças de 5 anos raramente conseguem produzir escarro adequado e costumam ser paucibacilares (escarro negativo não exclui TB; o diagnóstico baseia-se no escore do MS).\n- **E) Incorreta:** A radiografia simples de tórax (e não a TC) é o exame de imagem inicial preconizado pelo MS.",
    "perolaClinica": "A alternativa **A** está correta. Criança de 5 anos com **tosse prolongada (> 2 semanas)** sem resposta a amoxicilina, febre, hiporexia, **desnutrição grave (Z-score < –3)** e **contato domiciliar com adulto sintomático respiratório (irmão de 19 anos)** tem…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-087",
    "code": "Q-UEPA24-0087",
    "numeroOriginal": 87,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações",
    "subtema": "Profilaxia Pós-Exposição",
    "temaSlug": "ped-vacinas",
    "subtemaSlug": "ped-vacinas-profilaxia-pos-exposicao",
    "tags": ["imunoglobulina-varicela","igvz","profilaxia-pos-exposicao","enfermaria-pediatrica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Em uma enfermaria de pediatria, um dos pacientes inicia quadro de febre baixa e aparecimento de vesículas em tronco, couro cabeludo e face, de conteúdo claro, pruriginosas e que se rompem com facilidade. Ao exame dermatológico há presença de vesículas, algumas lesões exulceradas e crostas. Este paciente divide uma enfermaria com outros dois pacientes: paciente 1- prematuro de 35 semanas de idade gestacional, com 1 mês e 20 dias de idade cronológica, finalizando tratamento de pneumonia. Paciente 2- menino de 5 anos de idade, sem comorbidades, esquema vacinal completo, em tratamento de celulite no pé. Em relação aos contactantes do paciente com varicela, é correto afirmar que:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ambos devem receber vacinação de bloqueio para Varicela.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "o paciente 1 deve receber imunoglobulina para evitar Varicela e o paciente 2 não necessita de profilaxia.",
        "explanation": "A alternativa **B** está correta. Conforme o **Manual dos CRIE (Ministério da Saúde)** e a **SBP**, diante de exposição hospitalar (mesma enfermaria) a caso de **varicela**:",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "o paciente 1 deve receber imunoglobulina e tratamento profilático com Aciclovir oral para evitar Varicela grave.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "ambos devem receber vacinação de bloqueio e tratamento profilático com Aciclovir oral para evitar Varicela grave.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "ambos devem receber imunoglobulina para evitar contágio e adoecimento.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Conforme o **Manual dos CRIE (Ministério da Saúde)** e a **SBP**, diante de exposição hospitalar (mesma enfermaria) a caso de **varicela**:\n- **Paciente 1 (lactente < 9 meses hospitalizado, prematuro 35 sem com 1m20d):** está abaixo da idade mínima para vacinação de bloqueio (9 meses) e tem contraindicação à vacina viva; por estar internado/suscetível e sob risco de varicela grave, tem indicação de **Imunoglobulina Humana Antivaricela-Zóster (IGHAVZ / IGVZ)** em até 96 horas após o contato.\n- **Paciente 2 (menino de 5 anos, imunocompetente, esquema vacinal completo — já recebeu 2 doses de varicela aos 15 meses e 4 anos):** é considerado **imune** e **não necessita de profilaxia** pós-exposição.\n- **A, C, D e E) Incorretas:** Vacina de bloqueio não pode ser aplicada a lactente de 1 mês e 20 dias; aciclovir oral profilático não substitui nem se associa de rotina à IGVZ; e criança imunocompetente com esquema completo não precisa de vacina nem imunoglobulina.",
    "perolaClinica": "A alternativa **B** está correta. Conforme o **Manual dos CRIE (Ministério da Saúde)** e a **SBP**, diante de exposição hospitalar (mesma enfermaria) a caso de",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-088",
    "code": "Q-UEPA24-0088",
    "numeroOriginal": 88,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Cardiopatias Congênitas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-cardiopatias-congenitas",
    "tags": ["miocardite-viral","insuficiencia-cardiaca-lactente","cardiologia-pediatrica"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 6 meses de vida apresentou quadro de febre baixa, coriza e tosse seca com duração de 3 dias. Uma semana após evoluiu com desconforto respiratório que piorava ao mamar. Ao exame físico, frequência respiratória de 52 irpm, com tiragem intercostal, ausculta cardíaca com ritmo cardíaco irregular e presença de terceira bulha, ausculta pulmonar com sibilos difusos, além de rebaixamento de fígado. Radiografia de tórax demonstra aumento da área cardíaca e sinais de congestão pulmonar. Em relação ao quadro descrito assinale a alternativa que contém o tratamento mais adequado para a principal hipótese diagnóstica:",
    "alternativas": [
      {
        "letter": "A",
        "text": "imunoglobulina humana endovenosa 2 g/kg associada a Ácido Acetil Salicílico.",
        "explanation": "Incorreta: IGIV 2 g/kg + AAS é o tratamento da **Doença de Kawasaki** (não há febre ≥ 5 dias nem critérios mucocutâneos).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "penicilina G Benzatina e prednisona.",
        "explanation": "Incorreta: Penicilina benzatina + prednisona trata cardite da **febre reumática** (incomum em lactente de 6 meses).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "nebulização com solução salina hipertônica.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "digitálico, diurético e inibidor da enzima conversora de angiotensina.",
        "explanation": "A alternativa **D** está correta. Lactente de 6 meses evoluindo 1 semana após pródromo viral (IVAS) com dispneia que piora às mamadas, taquipneia, **ritmo cardíaco irregular + terceira bulha (galope)**, **hepatomegalia**, sibilos (\"asma cardíaca\") e **radiografia com cardiomegalia e congestão pulmonar** apresenta quadro clássico de **Insuficiência Cardíaca Congestiva (ICC) secundária a miocardite viral aguda**. Segundo a **SBP** e tratados de Cardiologia Pediátrica (Nelson / Park), o manejo farmacológico clássico da ICC sistólica no lactente baseia-se em **diurético (furosemida)** para descongestão, **IECA (captopril/enalapril)** para redução de pós-carga e **digitálico (digoxina)** (com cautela se arritmia) para suporte inotrópico.",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "broncodilatador e prednisolona.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Lactente de 6 meses evoluindo 1 semana após pródromo viral (IVAS) com dispneia que piora às mamadas, taquipneia, **ritmo cardíaco irregular + terceira bulha (galope)**, **hepatomegalia**, sibilos (\"asma cardíaca\") e **radiografia com cardiomegalia e congestão pulmonar** apresenta quadro clássico de **Insuficiência Cardíaca Congestiva (ICC) secundária a miocardite viral aguda**. Segundo a **SBP** e tratados de Cardiologia Pediátrica (Nelson / Park), o manejo farmacológico clássico da ICC sistólica no lactente baseia-se em **diurético (furosemida)** para descongestão, **IECA (captopril/enalapril)** para redução de pós-carga e **digitálico (digoxina)** (com cautela se arritmia) para suporte inotrópico.\n- **A) Incorreta:** IGIV 2 g/kg + AAS é o tratamento da **Doença de Kawasaki** (não há febre ≥ 5 dias nem critérios mucocutâneos).\n- **B) Incorreta:** Penicilina benzatina + prednisona trata cardite da **febre reumática** (incomum em lactente de 6 meses).\n- **C e E) Incorretas:** Tratam bronquiolite/crise de sibilância pulmonar primária, mas aqui os sibilos decorrem de congestão pulmonar cardiogênica (cardiomegalia + B3 + hepatomegalia).",
    "perolaClinica": "A alternativa **D** está correta. Lactente de 6 meses evoluindo 1 semana após pródromo viral (IVAS) com dispneia que piora às mamadas, taquipneia, **ritmo cardíaco irregular + terceira bulha (galope)**, **hepatomegalia**, sibilos (\"asma cardíaca\") e…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-089",
    "code": "Q-UEPA24-0089",
    "numeroOriginal": 89,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Meningites e Sepse em Pediatria",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-meningites-e-sepse-em-pediatria",
    "tags": ["encefalite-viral","aciclovir-endovenoso","convulsao","lactente"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 11 meses de idade, apresenta febre não aferida a coriza hialina há 2 dias. Evolui de forma súbita com crise convulsiva de difícil controle, dificuldade em sustentar o pescoço e estrabismo. Tomografia computadorizada de crânio com hipodensidade difusa em ambos hemisférios cerebrais. Em relação ao caso descrito, assinale a alternativa que contém a principal hipótese diagnóstica e seu respectivo tratamento:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hemorragia cerebral/ tratamento neurocirúrgico",
        "explanation": "Incorreta: Hemorragia aguda aparece como **hiperdensidade** na TC de crânio, não hipodensidade difusa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Síndrome da secreção inapropriada de hormônio antidiurético/ restrição hidrica",
        "explanation": "Incorreta: SIADH não explica febre, estrabismo focal e hipodensidade inflamatória cerebral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Síndrome do bebê sacudido/ suporte intensivo",
        "explanation": "Incorreta: Síndrome do bebê sacudido cursa tipicamente com hematomas subdurais bilaterais e hemorragias retinianas.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Convulsão febril/ controle da temperatura.",
        "explanation": "Incorreta: Convulsão febril simples não cursa com convulsão de difícil controle, déficit neurológico persistente (estrabismo/hipotonia) nem alteração tomográfica.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Encefalite viral/ aciclovir endovenoso.",
        "explanation": "A alternativa **E** está correta. Lactente com pródromo febril/respiratório agudo (2 dias) evoluindo subitamente com **convulsões refratárias, perda de marco motor (sustento cefálico), déficit de par craniano (estrabismo)** e **hipodensidade difusa cerebral (edema/encefalopatia)** na TC caracteriza **encefalite viral aguda**. Segundo a **SBP** e a **IDSA**, diante de toda suspeita clínica de encefalite viral aguda na infância, deve-se iniciar imediatamente **aciclovir endovenoso empírico** (para cobrir precocemente *Herpes simplex* — principal causa tratável e de alta morbimortalidade) até exclusão etiológica por PCR no LCR.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. Lactente com pródromo febril/respiratório agudo (2 dias) evoluindo subitamente com **convulsões refratárias, perda de marco motor (sustento cefálico), déficit de par craniano (estrabismo)** e **hipodensidade difusa cerebral (edema/encefalopatia)** na TC caracteriza **encefalite viral aguda**. Segundo a **SBP** e a **IDSA**, diante de toda suspeita clínica de encefalite viral aguda na infância, deve-se iniciar imediatamente **aciclovir endovenoso empírico** (para cobrir precocemente *Herpes simplex* — principal causa tratável e de alta morbimortalidade) até exclusão etiológica por PCR no LCR.\n- **A) Incorreta:** Hemorragia aguda aparece como **hiperdensidade** na TC de crânio, não hipodensidade difusa.\n- **B) Incorreta:** SIADH não explica febre, estrabismo focal e hipodensidade inflamatória cerebral.\n- **C) Incorreta:** Síndrome do bebê sacudido cursa tipicamente com hematomas subdurais bilaterais e hemorragias retinianas.\n- **D) Incorreta:** Convulsão febril simples não cursa com convulsão de difícil controle, déficit neurológico persistente (estrabismo/hipotonia) nem alteração tomográfica.",
    "perolaClinica": "A alternativa **E** está correta. Lactente com pródromo febril/respiratório agudo (2 dias) evoluindo subitamente com **convulsões refratárias, perda de marco motor (sustento cefálico), déficit de par craniano (estrabismo)** e **hipodensidade difusa cerebral…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-090",
    "code": "Q-UEPA24-0090",
    "numeroOriginal": 90,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "ITU e Malformações Urinárias em Pediatria",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-itu-e-malformacoes-urinarias-em-pediatria",
    "tags": ["itu-pediatrica","saco-coletor","sondagem-vesical","urocultura"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 7 meses de idade, apresenta febre de ate 38ºC há 2 dias, associada a hiporexia, sem outras queixas clínicas. Possui calendário vacinal atualizado. Exame físico sem alterações. Realizado exame de urina coletado por saco coletor que revelou 10 piócitos/ campo, ausência de hemácias e nitrito negativo. Em relação ao caso descrito, assinale a alternativa correta.",
    "alternativas": [
      {
        "letter": "A",
        "text": "A paciente apresenta infecção urinária muito provável, devendo ser iniciado tratamento empírico com amoxicilina.",
        "explanation": "Incorreta: Não se firma diagnóstico de ITU por saco coletor (e amoxicilina tem alta taxa de resistência para *E. coli*).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Deve ser realizado novo exame de urina por sondagem, incluindo urocultura, para investigar infecção urinária, além de pesquisa de vírus respiratório.",
        "explanation": "A alternativa **B** está correta. Em lactentes sem controle esfincteriano (7 meses), a urina coletada por **saco coletor** apresenta elevadíssima taxa de contaminação/falso-positivo (até 85%): tem excelente valor preditivo **negativo** (quando normal, afasta ITU), mas **não serve para confirmar diagnóstico de ITU nem para urocultura**. Diante de piúria (10 piócitos/campo) em saco coletor num lactente febril sem foco, a diretriz da **SBP** e da **AAP** exige **nova coleta estéril por cateterismo vesical (sondagem) ou punção suprapúbica com envio de urocultura** antes de iniciar antibiótico, avaliando também etiologia viral (pesquisa de vírus respiratório).",
        "communityPct": 62.0
      },
      {
        "letter": "C",
        "text": "O exame de urina com piúria associado ao quadro de febre sugere pielonefrite e está indicada internação para uso de ceftriaxona EV.",
        "explanation": "Incorreta: Além de o exame por saco coletor não confirmar ITU, lactente de 7 meses em bom estado geral sem vômitos não tem indicação obrigatória de internação e ceftriaxona IV antes de confirmar o diagnóstico.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "O lactente tem alto risco para sepsis, devendo ser realizada triagem completa incluindo hemocultura e radiografia de tórax.",
        "explanation": "Incorreta: Lactente de 7 meses vacinado, com exame físico normal e febre de 38 °C, não tem alto risco de sepse nem indicação de radiografia de tórax sem sinais respiratórios.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Deve ser iniciado antibioticoterapia com ciprofloxacino por ser a opção antimicrobiana de maior espectro de ação no tratamento de infecção do trato urinário.",
        "explanation": "Incorreta: Fluoroquinolonas (ciprofloxacino) não são primeira linha para ITU comunitária em lactentes.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "B",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **B** está correta. Em lactentes sem controle esfincteriano (7 meses), a urina coletada por **saco coletor** apresenta elevadíssima taxa de contaminação/falso-positivo (até 85%): tem excelente valor preditivo **negativo** (quando normal, afasta ITU), mas **não serve para confirmar diagnóstico de ITU nem para urocultura**. Diante de piúria (10 piócitos/campo) em saco coletor num lactente febril sem foco, a diretriz da **SBP** e da **AAP** exige **nova coleta estéril por cateterismo vesical (sondagem) ou punção suprapúbica com envio de urocultura** antes de iniciar antibiótico, avaliando também etiologia viral (pesquisa de vírus respiratório).\n- **A) Incorreta:** Não se firma diagnóstico de ITU por saco coletor (e amoxicilina tem alta taxa de resistência para *E. coli*).\n- **C) Incorreta:** Além de o exame por saco coletor não confirmar ITU, lactente de 7 meses em bom estado geral sem vômitos não tem indicação obrigatória de internação e ceftriaxona IV antes de confirmar o diagnóstico.\n- **D) Incorreta:** Lactente de 7 meses vacinado, com exame físico normal e febre de 38 °C, não tem alto risco de sepse nem indicação de radiografia de tórax sem sinais respiratórios.\n- **E) Incorreta:** Fluoroquinolonas (ciprofloxacino) não são primeira linha para ITU comunitária em lactentes.",
    "perolaClinica": "A alternativa **B** está correta. Em lactentes sem controle esfincteriano (7 meses), a urina coletada por **saco coletor** apresenta elevadíssima taxa de contaminação/falso-positivo (até 85%): tem excelente valor preditivo **negativo** (quando normal, afasta…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-091",
    "code": "Q-UEPA24-0091",
    "numeroOriginal": 91,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica e Exantemáticas",
    "subtema": "Meningites e Sepse em Pediatria",
    "temaSlug": "ped-infecto-ped",
    "subtemaSlug": "ped-infecto-ped-meningites-e-sepse-em-pediatria",
    "tags": ["meningococcemia","choque-septico","meningite-pediatrica","petequias"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Escolar com 08 anos de idade, iniciou quadro de febre alta há 24 horas evoluindo com piora do estado geral a 6 horas, letargia e aparecimento de petéquias difusas pelo corpo. Ao exame: letárgico, pálido, hidratado, eupneico, acianoitico, aniciterico; Of: NDN; Ap: MV+ S/RA. FR: 20ipm sem sinais de desconforto respiratório; AC: bcnf rcr 2t, s/s; Fc: 160 bpm; pulsos periféricos finos, pulsos centrais +, reduzido; PA: 70x40 mmhg; Abd: flácido; sem vgm (viceromegalia); SN: letárgico, escala de glasgow 10, Kerning e Brudzinky +. O possível diagnóstico é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "miningococcemia",
        "explanation": "A alternativa **A** está correta (**meningococcemia**, grafada \"miningococcemia\" no original). Escolar com evolução fulminante (< 24h) de **febre alta, petéquias difusas (exantema purpúrico/petequial), sinais meníngeos (Kernig e Brudzinski positivos), rebaixamento do nível de consciência (Glasgow 10) e choque séptico descompensado (PA 70×40 mmHg, FC 160 bpm, pulsos finos)** configura o quadro clássico de **doença meningocócica invasiva / meningococcemia** (*Neisseria meningitidis*), exigindo ressuscitação volêmica imediata e antibioticoterapia IV precoce (ceftriaxona) sem atraso (SBP / Ministério da Saúde).",
        "communityPct": 62.0
      },
      {
        "letter": "B",
        "text": "encefalite",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "intoxicação exógena",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "pneumonia",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "COVID",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **A** está correta (**meningococcemia**, grafada \"miningococcemia\" no original). Escolar com evolução fulminante (< 24h) de **febre alta, petéquias difusas (exantema purpúrico/petequial), sinais meníngeos (Kernig e Brudzinski positivos), rebaixamento do nível de consciência (Glasgow 10) e choque séptico descompensado (PA 70×40 mmHg, FC 160 bpm, pulsos finos)** configura o quadro clássico de **doença meningocócica invasiva / meningococcemia** (*Neisseria meningitidis*), exigindo ressuscitação volêmica imediata e antibioticoterapia IV precoce (ceftriaxona) sem atraso (SBP / Ministério da Saúde).\n- **B, C, D e E) Incorretas:** Não explicam a combinação clássica fulminante de febre alta + petéquias difusas + sinais de irritação meníngea + choque séptico.",
    "perolaClinica": "A alternativa **A** está correta (**meningococcemia**, grafada \"miningococcemia\" no original). Escolar com evolução fulminante (< 24h) de **febre alta, petéquias difusas (exantema purpúrico/petequial), sinais meníngeos (Kernig e Brudzinski positivos),…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-092",
    "code": "Q-UEPA24-0092",
    "numeroOriginal": 92,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cardiologia, Hematologia e Oncologia Pediátrica",
    "subtema": "Cardiopatias Congênitas",
    "temaSlug": "ped-cardio-hemato-ped",
    "subtemaSlug": "ped-cardio-hemato-ped-cardiopatias-congenitas",
    "tags": ["cardiopatias-canal-dependentes","prostaglandina-e1","civ"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Dentre as cardiopatias listadas abaixo, assinale aquela que não se beneficiará do uso de prostaglandina E1.",
    "alternativas": [
      {
        "letter": "A",
        "text": "Hipoplasia coração esquerdo.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Estenose aórtica crítica.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Transposição das grandes artérias.",
        "explanation": "Incorreta: Transposição das grandes artérias (TGA) depende de mistura entre as circulações paralelas (canal arterial/forame oval), beneficiando-se de PGE1 até a atriosseptostomia (Rashkind) e cirurgia de Jatene.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Comunicação interventricular.",
        "explanation": "A alternativa **D** está correta. A **prostaglandina E1 (alprostadil)** é utilizada no período neonatal para manter a patência do **canal arterial** em **cardiopatias congênitas canal-dependentes** (de fluxo sistêmico, de fluxo pulmonar ou de mistura intercirculatória). A **Comunicação Interventricular (CIV)** isolada é uma cardiopatia **acianótica de hiperfluxo pulmonar** (shunt esquerdo-direito), **não canal-dependente** — portanto não se beneficia de prostaglandina E1 (que inclusive agravaria o hiperfluxo pulmonar) (SBP / Park).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Ventrículo único com coarctação ou interrupção do arco aórtico.",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. A **prostaglandina E1 (alprostadil)** é utilizada no período neonatal para manter a patência do **canal arterial** em **cardiopatias congênitas canal-dependentes** (de fluxo sistêmico, de fluxo pulmonar ou de mistura intercirculatória). A **Comunicação Interventricular (CIV)** isolada é uma cardiopatia **acianótica de hiperfluxo pulmonar** (shunt esquerdo-direito), **não canal-dependente** — portanto não se beneficia de prostaglandina E1 (que inclusive agravaria o hiperfluxo pulmonar) (SBP / Park).\n- **A, B e E) Incorretas:** Síndrome da hipoplasia do coração esquerdo, estenose aórtica crítica e ventrículo único com coarctação/interrupção do arco aórtico são cardiopatias **canal-dependentes de fluxo sistêmico**, beneficiando-se criticamente de PGE1.\n- **C) Incorreta:** Transposição das grandes artérias (TGA) depende de mistura entre as circulações paralelas (canal arterial/forame oval), beneficiando-se de PGE1 até a atriosseptostomia (Rashkind) e cirurgia de Jatene.",
    "perolaClinica": "A alternativa **D** está correta. A **prostaglandina E1 (alprostadil)** é utilizada no período neonatal para manter a patência do **canal arterial** em **cardiopatias congênitas canal-dependentes** (de fluxo sistêmico, de fluxo pulmonar ou de mistura…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-093",
    "code": "Q-UEPA24-0093",
    "numeroOriginal": 93,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia e Nefrologia Pediátrica",
    "subtema": "ITU e Malformações Urinárias em Pediatria",
    "temaSlug": "ped-gastro-nefro-ped",
    "subtemaSlug": "ped-gastro-nefro-ped-itu-e-malformacoes-urinarias-em-pediatria",
    "tags": ["itu-na-infancia","urocultura","escherichia-coli","fatores-de-risco"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto a infecção urinaria na infância, analise as afirmativas abaixo:\nI. A ITU é a segunda infecção bacteriana mais prevalente em pediatria, atingindo 8,4% das meninas e 1,7% dos meninos menores de 7 anos de idade, com alto risco de recorrência dentro do primeiro ano do episódio inicial.\nII. São fatores de risco para ITU: Anomalias estruturais do trato urinário; megaureter; alterações funcionais; sonda vesical de demora; neonatos; imunossupressão; meninos não circuncisados.\nIII. A urocultura é o padrão ouro para diagnóstico de ITU.\nIV. O tratamento empiricamente com medicamento de menor espectro antimicrobiano possível, com base na coloração de gram, se disponível. Caso contrário, deve-se priorizar cobertura para Escherichia coli.\nV. Sempre internar para antibioticoterapia venosa por 24 horas, seguida de antibioticoterapia oral por mais 10 dias.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
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
        "text": "I, II, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I,II, III e IV",
        "explanation": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o Documento Científico de **ITU na Infância da SBP**:",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o Documento Científico de **ITU na Infância da SBP**:\n- **I, II, III e IV (Corretas):** Descrevem fielmente a epidemiologia (8,4% meninas / 1,7% meninos < 7 anos), os fatores de risco (anomalias estruturais/funcionais, meninos não circuncisados, neonatos, SVD), a **urocultura como padrão-ouro** e a antibioticoterapia empírica direcionada principalmente a ***Escherichia coli*** (80–90% dos casos) com o menor espectro eficaz.\n- **V (Incorreta):** **Não** é obrigatório internar todas as crianças com ITU — crianças > 2–3 meses em bom estado geral, sem toxemia e com boa tolerância oral podem ser tratadas **ambulatorialmente por via oral** (cefalexina, cefuroxima, amoxicilina-clavulanato ou SMX-TMP conforme perfil local).\n- **A, B, C e E) Incorretas:** Incluem a afirmativa falsa V ou omitem afirmativas verdadeiras.",
    "perolaClinica": "A alternativa **D** está correta (**I, II, III e IV** são verdadeiras; apenas **V** é falsa), conforme o Documento Científico de **ITU na Infância da",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-094",
    "code": "Q-UEPA24-0094",
    "numeroOriginal": 94,
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Medicina Intensiva e Toxicologia",
    "subtema": "Cuidados Paliativos",
    "temaSlug": "cm-uti",
    "subtemaSlug": "cm-uti-cuidados-paliativos",
    "tags": ["cuidados-paliativos-pediatricos","oms","sbp","principios"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto ao cuidado paliativo pediátrico, analise as afirmativas abaixo:\nI. Membros da família de um feto ou criança que morre inesperadamente não são comtemplados nesse tipo de cuidado.\nII. Crianças com condições neurológicas graves que não são progressivas não são contemplados porque não estão em fase final de vida ou processo ativo de morte.\nIII. Cuidados Paliativos Pediátricos são para crianças com câncer.\nIV. Tratamentos curativos e cuidados paliativos não são excludentes.\nV. Os cuidados paliativos não se destinam a abreviar a etapa final de vida\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
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
        "text": "IV e V",
        "explanation": "A alternativa **C** está correta (apenas **IV e V** são verdadeiras), segundo a **OMS** e o Departamento Científico de **Cuidados Paliativos da SBP**:",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "I e III",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta (apenas **IV e V** são verdadeiras), segundo a **OMS** e o Departamento Científico de **Cuidados Paliativos da SBP**:\n- **I. Incorreta:** O cuidado paliativo pediátrico inclui o acolhimento e suporte ao luto das famílias inclusive em perdas fetais/perinatais ou mortes inesperadas.\n- **II. Incorreta:** Condições neurológicas graves não progressivas (ex.: paralisia cerebral grave, encefalopatia hipóxico-isquêmica — Grupo 4 da ACT/Together for Short Lives) **são contempladas** pelos cuidados paliativos pediátricos.\n- **III. Incorreta:** Não se restringem a crianças com câncer (na pediatria, a maioria das indicações são doenças genéticas, neurológicas, malformações e condições crônicas complexas).\n- **IV. Correta:** Tratamento curativo/modificador de doença e cuidados paliativos são **complementares e integrados desde o diagnóstico**, não excludentes.\n- **V. Correta:** Cuidados paliativos afirmam a vida e **não aceleram nem adiam artificialmente a morte** (ortotanásia).\n- **A, B, D e E) Incorretas:** Incluem afirmativas falsas (I, II ou III).",
    "perolaClinica": "A alternativa **C** está correta (apenas **IV e V** são verdadeiras), segundo a **OMS** e o Departamento Científico de **Cuidados Paliativos da",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-095",
    "code": "Q-UEPA24-0095",
    "numeroOriginal": 95,
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva",
    "tema": "Ética Médica, Bioética e Medicina Legal",
    "subtema": "Código de Ética Médica e Sigilo Profissional",
    "temaSlug": "mp-etica",
    "subtemaSlug": "mp-etica-codigo-de-etica-medica-e-sigilo-profissional",
    "tags": ["atendimento-ao-adolescente","autonomia","sigilo-medico","sbp"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Quanto ao atendimento ao adolescente, analise as afirmativas abaixo:\nI. Adolescentes têm direito à escolha de realizar consulta médica, procedimentos não invasivos como coleta de exames laboratoriais, sozinhos ou acompanhados por familiares, amigos ou parceiros, desde que o profissional reconheça que ele tem discernimento adequado de sua saúde e compreensão de seu autocuidado.\nII. Em casos de internação hospitalar, será necessária a autorização de pai- -mãe-responsável legal, o que não impedirá qualquer conduta de emergência, por motivos éticos e profissionais de omissão de socorro.\nIII. Os adolescentes também têm direito de receber informações sobre qualquer aspecto relacionado à sexualidade e saúde reprodutiva além das imunizações comtempladas pelo MS.\nIV. O Departamento Científico de Medicina do Adolescente da SBP, no Manual de Orientação Nº 10 de janeiro de 2019, orienta conduta diferenciada no que se refere à testagem e entrega de exames anti-HIV - até os 12 anos recomenda-se que estes procedimentos ocorram com conhecimento e/ou presença dos pais ou responsáveis; já após os 12 anos, prevalece o princípio da autonomia, assim como a participação do resultado a outras pessoas após avaliação das condições de discernimento.\nV. Do ponto de vista cronológico, a Organização Mundial de Saúde (OMS) delimita a adolescência como a segunda década de vida. No Brasil, o Ministério da Saúde (MS), seguindo a mesma linha da OMS, promulgou o programa de saúde do adolescente por intermédio da portaria nº 980 de 21 de fevereiro de 1989, demarcando a adolescência entre os 10 anos completos e os 20 anos incompletos.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
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
        "text": "I, II, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "I,II, III e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "A alternativa **E** está correta (**todas as cinco afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo fielmente o **Manual de Orientação nº 10 do Departamento Científico de Medicina do Adolescente da SBP (2019)** (*Consulta do Adolescente: Abordagem Clínica, Orientações Éticas e Legais*), o **ECA** e a **Portaria MS nº 980/1989**:",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta (**todas as cinco afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo fielmente o **Manual de Orientação nº 10 do Departamento Científico de Medicina do Adolescente da SBP (2019)** (*Consulta do Adolescente: Abordagem Clínica, Orientações Éticas e Legais*), o **ECA** e a **Portaria MS nº 980/1989**:\n- **I e III:** Garantem privacidade, consulta desacompanhada, autonomia proporcional ao discernimento e acesso integral à educação sexual, saúde reprodutiva e vacinação.\n- **II:** Internação eletiva requer consentimento dos responsáveis, mas **emergências médicas** nunca são impedidas (dever ético de evitar omissão de socorro).\n- **IV:** Reflete a orientação expressa da SBP sobre testagem anti-HIV (> 12 anos prevalece a autonomia mediante discernimento).\n- **V:** OMS e MS definem a adolescência de **10 a 19 anos completos** (10 anos completos a 20 anos incompletos), enquanto o ECA adota 12 a 18 anos.\n- **A, B, C e D) Incorretas:** Omitiram afirmativas verdadeiras.",
    "perolaClinica": "A alternativa **E** está correta (**todas as cinco afirmativas — I, II, III, IV e V — são verdadeiras**), reproduzindo fielmente o **Manual de Orientação nº 10 do Departamento Científico de Medicina do Adolescente da SBP (2019)** (*Consulta do Adolescente:…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-096",
    "code": "Q-UEPA24-0096",
    "numeroOriginal": 96,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Infecções de Vias Aéreas Superiores",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-infeccoes-de-vias-aereas-superiores",
    "tags": ["epiglotite-aguda","estridor","sialorreia","obstrucao-via-aerea"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Pré-Escolar com 4 anos de idade, vacinas atrasadas, iniciou quadro de febre seguida de dor de garganta, voz abafada e sialorréia há 24h. Ao exame físico: aspecto toxemiado, pálido, dispneico, estridor inspiratório; Of: não examinado; Ap: MV reduzido, sra ; FR: 54ipm; SO2: 92%; ban e tiragem intercostal; AC: bcnf rcr 2t, ss; Fc: 160 bpm; enchimento capilar 2 segundo; PA: 90x50 mmhg; Abd: flácido, sem vgm; SN: ecg 15; Pulsos cheios. Ante o exposto, o diagnostico provável, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Crupe",
        "explanation": "Incorreta: Crupe (laringotraqueobronquite viral) tem início mais gradual após pródromo catarral, tosse ladrante/metálica, sem toxemia importante nem sialorreia intensa.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Pneumonia",
        "explanation": "Incorreta: Pneumonia não causa estridor inspiratório, voz abafada e sialorreia.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Aspiraçao de corpo estranho",
        "explanation": "Incorreta: Aspiração de corpo estranho tem início súbito durante alimentação/brincadeira, afebril e sem toxemia infecciosa aguda.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Epiglotite",
        "explanation": "A alternativa **D** está correta. Pré-escolar de 4 anos com **vacinação atrasada** (susceptível a *Haemophilus influenzae* tipo b) apresentando início abrupto (< 24h) de **febre, dor de garganta, voz abafada (\"batata quente\"), sialorreia intensa, aspecto toxemiado e estridor inspiratório** (com acerto da equipe em **não examinar a orofaringe** para evitar laringoespasmo e obstrução total) é o quadro clássico de **epiglotite aguda (supraglotite)** — emergência de via aérea (SBP / PALS).",
        "communityPct": 62.0
      },
      {
        "letter": "E",
        "text": "Anafilaxia",
        "explanation": "Incorreta: Anafilaxia não cursa com febre e dor de garganta de 24h de evolução.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "D",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **D** está correta. Pré-escolar de 4 anos com **vacinação atrasada** (susceptível a *Haemophilus influenzae* tipo b) apresentando início abrupto (< 24h) de **febre, dor de garganta, voz abafada (\"batata quente\"), sialorreia intensa, aspecto toxemiado e estridor inspiratório** (com acerto da equipe em **não examinar a orofaringe** para evitar laringoespasmo e obstrução total) é o quadro clássico de **epiglotite aguda (supraglotite)** — emergência de via aérea (SBP / PALS).\n- **A) Incorreta:** Crupe (laringotraqueobronquite viral) tem início mais gradual após pródromo catarral, tosse ladrante/metálica, sem toxemia importante nem sialorreia intensa.\n- **B) Incorreta:** Pneumonia não causa estridor inspiratório, voz abafada e sialorreia.\n- **C) Incorreta:** Aspiração de corpo estranho tem início súbito durante alimentação/brincadeira, afebril e sem toxemia infecciosa aguda.\n- **E) Incorreta:** Anafilaxia não cursa com febre e dor de garganta de 24h de evolução.",
    "perolaClinica": "A alternativa **D** está correta. Pré-escolar de 4 anos com **vacinação atrasada** (susceptível a *Haemophilus influenzae* tipo b) apresentando início abrupto (< 24h) de **febre, dor de garganta, voz abafada (\"batata quente\"), sialorreia intensa, aspecto…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-097",
    "code": "Q-UEPA24-0097",
    "numeroOriginal": 97,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": ["choque-cardiogenico","miocardite-aguda","lactente","pals"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Lactente de 11 meses de idade, iniciou quadro de febre há 15 dias, seguida de tosse, recusa alimentar e progressão para desconforto respiratório. Refere melhora do quadro febril há 5 dias, persistindo dispneia e dificuldade para mamar em virtude do cansaço. Ao exame físico:reg, pálido, dispneico, hidratado, acianótico; Of: sem alterações; Ap: estertores subcrepitantes em bases, bilateralmente; FR: 64ipm; SO2: 92%; ban e tiragem intercostal; AC: bcnf rcr 2t, ss; Fc: 174 bpm; enchimento capilar 4 segundo; PA: 60x 40 mmhg; Abd: flácido, fígado 4 cm rcd; SN: letárgico; sem sinais de irritação meníngea; Pulsos periféricos finos; Leucograma: 4500 leucocitos com predomínio de linfócitos; Pcr: 10; CKMB: 180; Rx tórax: cardiomegalia. O diagnostico provável é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "ICC",
        "explanation": "Incorreta: Embora exista insuficiência cardíaca subjacente, a presença de hipotensão arterial franca (60×40 mmHg), TEC de 4 segundos, pulsos finos e letargia já define o estágio mais grave de **choque cardiogênico** (que exige cautela extrema com alíquotas de volume — 5–10 mL/kg — e suporte inotrópico precoce).",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Choque séptico",
        "explanation": "Incorreta: Paciente afebril há 5 dias, leucograma 4.500 linfocítico, PCR baixa (10), **cardiomegalia** e **CK-MB muito elevada (180)** apontam diretamente para etiologia cardiogênica.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Pneumonia",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Bronquiolite",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Choque cardiogenico",
        "explanation": "A alternativa **E** está correta. O lactente evolui após quadro viral com sinais inequívocos de **falência miocárdica (miocardite aguda: CK-MB 180, cardiomegalia, hepatomegalia 4 cm RCD e estertores bibasais)** somados a **choque descompensado com hipoperfusão tecidual grave** (**PA 60×40 mmHg — hipotensão para 11 meses**, FC 174 bpm, **enchimento capilar 4 segundos**, pulsos periféricos finos e **letargia**), configurando **choque cardiogênico** (PALS / SBP).",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. O lactente evolui após quadro viral com sinais inequívocos de **falência miocárdica (miocardite aguda: CK-MB 180, cardiomegalia, hepatomegalia 4 cm RCD e estertores bibasais)** somados a **choque descompensado com hipoperfusão tecidual grave** (**PA 60×40 mmHg — hipotensão para 11 meses**, FC 174 bpm, **enchimento capilar 4 segundos**, pulsos periféricos finos e **letargia**), configurando **choque cardiogênico** (PALS / SBP).\n- **A) Incorreta:** Embora exista insuficiência cardíaca subjacente, a presença de hipotensão arterial franca (60×40 mmHg), TEC de 4 segundos, pulsos finos e letargia já define o estágio mais grave de **choque cardiogênico** (que exige cautela extrema com alíquotas de volume — 5–10 mL/kg — e suporte inotrópico precoce).\n- **B) Incorreta:** Paciente afebril há 5 dias, leucograma 4.500 linfocítico, PCR baixa (10), **cardiomegalia** e **CK-MB muito elevada (180)** apontam diretamente para etiologia cardiogênica.\n- **C e D) Incorretas:** Não justificam cardiomegalia, CK-MB 180, hepatomegalia de 4 cm e hipotensão com TEC de 4s.",
    "perolaClinica": "A alternativa **E** está correta. O lactente evolui após quadro viral com sinais inequívocos de **falência miocárdica (miocardite aguda: CK-MB 180, cardiomegalia, hepatomegalia 4 cm RCD e estertores bibasais)** somados a **choque descompensado com…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-098",
    "code": "Q-UEPA24-0098",
    "numeroOriginal": 98,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas e Proteção Infantil",
    "subtema": "Suporte Avançado de Vida em Pediatria - PALS",
    "temaSlug": "ped-emerg-ped",
    "subtemaSlug": "ped-emerg-ped-suporte-avancado-de-vida-em-pediatria-pals",
    "tags": ["pcr-pediatrica","taquicardia-ventricular-sem-pulso","desfibrilacao","pals"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Escolar admitido na urgência pediátrica em PCR, com monitorização eletrocardiográfica evidenciando o seguinte ritmo: [Descrição do traçado de ECG anexo: taquicardia rápida e regular de complexos QRS largos monomórficos, uniformes e contínuos, sem ondas P identificáveis.] O provável diagnóstico, é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "Taquicardia supraventricular/ adenosina EV",
        "explanation": "Incorreta: TSV apresenta complexos QRS **estreitos** e não ocorre como ritmo clássico de PCR tratado com adenosina.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "Fibrilação ventricular/ cardioversão",
        "explanation": "Incorreta: FV apresenta ondas caóticas/irregulares de amplitudes variadas, além de o tratamento da FV ser **desfibrilação** (não cardioversão sincronizada).",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "Atividade elétrica sem pulso/ desfibrilação",
        "explanation": "Incorreta: AESP é ritmo **não chocável** (não se desfibrila).",
        "communityPct": 9.5
      },
      {
        "letter": "D",
        "text": "Assistolia, compressão torácica + epinefrina",
        "explanation": "Incorreta: Assistolia apresenta linha isoelétrica reta.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "Taquicardia ventricular sem pulso/ desfibrilação",
        "explanation": "A alternativa **E** está correta. O traçado eletrocardiográfico em paciente em **parada cardiorrespiratória (PCR)** exibe um ritmo rápido, regular e de **complexos QRS largos monomórficos**, característico de **Taquicardia Ventricular Sem Pulso (TVSP)**. Segundo o algoritmo de PCR pediátrica do **PALS (AHA)**, TVSP e FV são **ritmos chocáveis**, cuja conduta prioritária imediata é a **desfibrilação** (1º choque: 2 J/kg; 2º choque: 4 J/kg; subsequentes ≥ 4 J/kg até 10 J/kg) intercalada com RCP de alta qualidade.",
        "communityPct": 62.0
      }
    ],
    "gabaritoOficial": "E",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **E** está correta. O traçado eletrocardiográfico em paciente em **parada cardiorrespiratória (PCR)** exibe um ritmo rápido, regular e de **complexos QRS largos monomórficos**, característico de **Taquicardia Ventricular Sem Pulso (TVSP)**. Segundo o algoritmo de PCR pediátrica do **PALS (AHA)**, TVSP e FV são **ritmos chocáveis**, cuja conduta prioritária imediata é a **desfibrilação** (1º choque: 2 J/kg; 2º choque: 4 J/kg; subsequentes ≥ 4 J/kg até 10 J/kg) intercalada com RCP de alta qualidade.\n- **A) Incorreta:** TSV apresenta complexos QRS **estreitos** e não ocorre como ritmo clássico de PCR tratado com adenosina.\n- **B) Incorreta:** FV apresenta ondas caóticas/irregulares de amplitudes variadas, além de o tratamento da FV ser **desfibrilação** (não cardioversão sincronizada).\n- **C) Incorreta:** AESP é ritmo **não chocável** (não se desfibrila).\n- **D) Incorreta:** Assistolia apresenta linha isoelétrica reta.",
    "perolaClinica": "A alternativa **E** está correta. O traçado eletrocardiográfico em paciente em **parada cardiorrespiratória (PCR)** exibe um ritmo rápido, regular e de **complexos QRS largos monomórficos**, característico de **Taquicardia Ventricular Sem Pulso (TVSP)**.…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-099",
    "code": "Q-UEPA24-0099",
    "numeroOriginal": 99,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "subtema": "Asma na Infância e Fibrose Cística",
    "temaSlug": "ped-pneumo-ped",
    "subtemaSlug": "ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica",
    "tags": ["crise-asmatica","asma-pediatrica","beta2-inalatorio","corticoide-sistemico"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": false,
    "desatualizada": false,
    "enunciado": "Escolar de 6 anos de idade, portador de asma brônquica, procura o pronto atendimento em virtude de estar apresentando há 3 dias quadro gripal, evoluindo com desconforto respiratório moderado, sem febre, com fala entrecortada, tosse seca frequente, em acessos. Esta sem medicação de manutenção há 30 dias. Ao exame físico: regular estado geral, corado, hidratado, dispneico, anictérico; acianótico; OF; sem alterações; AP: sibilos difusos; FR:52 ipm; SO2: 90% em ar ambiente; batimento de asa de nariz, tiragem intercostal e subcostal; AC: BCNF RCR 2t, sem sopros, FC: 154 bpm; PA: 100x 60 mmHg Abd: flácido, sem vmg, indolor; Neuro: ecg 15; Pulsos centrais e periféricos cheios, pcp 2 seg; Sem edemas; sem lesões de pele. A melhor conduta terapêutica neste caso é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "oxigenioterapia de alto fluxo + B2 endovenoso + corticoide inalatório",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      },
      {
        "letter": "B",
        "text": "intubaçao orotraqueal",
        "explanation": "Incorreta: A criança está alerta (Glasgow 15), com boa perfusão e sem fadiga respiratória iminente ou silêncio torácico, não havendo indicação imediata de IOT.",
        "communityPct": 9.5
      },
      {
        "letter": "C",
        "text": "oxigenioterapia alto fluxo + B2 inalatório (uma serie com 3 ciclos a cada 20 minutos) + corticoide sistêmico e reavaliação em 1 hora",
        "explanation": "A alternativa **C** está correta. Escolar em **exacerbação asmática moderada a grave** (fala entrecortada, FR 52 irpm, tiragens, batimento de asa nasal, FC 154 bpm, **$\\text{SpO}_2$ 90%** e Glasgow 15). Pelas diretrizes da **GINA 2024** e da **SBP**, o manejo inicial de primeira linha na 1ª hora compreende:",
        "communityPct": 62.0
      },
      {
        "letter": "D",
        "text": "sulfato de magnésio + ventilação não invasiva",
        "explanation": "Incorreta: Sulfato de magnésio IV e VNI são medidas de **segunda linha** em caso de falha de resposta ao tratamento inicial da 1ª hora.",
        "communityPct": 9.5
      },
      {
        "letter": "E",
        "text": "B2 endovenoso + cateter nasal de O2",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 9.5
      }
    ],
    "gabaritoOficial": "C",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 62.0,
    "comentarioGeral": "A alternativa **C** está correta. Escolar em **exacerbação asmática moderada a grave** (fala entrecortada, FR 52 irpm, tiragens, batimento de asa nasal, FC 154 bpm, **$\\text{SpO}_2$ 90%** e Glasgow 15). Pelas diretrizes da **GINA 2024** e da **SBP**, o manejo inicial de primeira linha na 1ª hora compreende:\n1. **Oxigenioterapia** para manter $\\text{SpO}_2 \\ge 94\\%$;\n2. **$\\beta_2$-agonista de curta ação (salbutamol) por via inalatória** (spray com espaçador ou nebulização) em **3 ciclos a cada 20 minutos** (podendo associar brometo de ipratrópio nos casos graves);\n3. **Corticoide sistêmico precoce** (prednisolona VO ou metilprednisolona/hidrocortisona IV), com **reavaliação clínica após 1 hora**.\n- **A e E) Incorretas:** $\\beta_2$-agonista endovenoso não é primeira linha (alto risco de taquicardia/hipocalemia/arritmias) e corticoide inalatório não substitui o corticoide sistêmico na crise moderada/grave.\n- **B) Incorreta:** A criança está alerta (Glasgow 15), com boa perfusão e sem fadiga respiratória iminente ou silêncio torácico, não havendo indicação imediata de IOT.\n- **D) Incorreta:** Sulfato de magnésio IV e VNI são medidas de **segunda linha** em caso de falha de resposta ao tratamento inicial da 1ª hora.",
    "perolaClinica": "A alternativa **C** está correta. Escolar em **exacerbação asmática moderada a grave** (fala entrecortada, FR 52 irpm, tiragens, batimento de asa nasal, FC 154 bpm, **$\\text{SpO}_2$ 90%** e Glasgow 15). Pelas diretrizes da **GINA 2024** e da **SBP**, o manejo…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  },
  {
    "id": "q-uepa-2024-100",
    "code": "Q-UEPA24-0100",
    "numeroOriginal": 100,
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura, Crescimento e Nutrição",
    "subtema": "Aleitamento Materno e Fórmulas Infantis",
    "temaSlug": "ped-puericultura",
    "subtemaSlug": "ped-puericultura-aleitamento-materno-e-formulas-infantis",
    "tags": ["aleitamento-materno","contraindicacoes","hiv","questao-anulada"],
    "taxonomyVersion": "medr1_taxonomy_v1",
    "banca": "UEPA",
    "instituicao": "UEPA",
    "estado": "PA",
    "regiao": "Norte",
    "ano": 2024,
    "tipoProva": "Acesso Direto",
    "anulada": true,
    "desatualizada": false,
    "enunciado": "Quanto ao aleitamento materno, analise as afirmativas abaixo.\nI. Hanseníase virchowiana não tratada ou com tratamento inferior a 3 meses com sulfona ou inferior a 3 semanas com rifampicina ou com lesões de pele na mama: Contraindicado até tratamento corretamente instituído com duração superior a 3 meses com sulfona ou superior a 3 semanas com rifampicina, sem lesões na pele da mama.\nII. Doença de Chagas: Contraindicado na fase aguda da doença ou quando houver lesão mamilar com sangramento\nIII. Puérpera HIV positivo deve ser orientada a não amamentar, devendo ter sua lactação inibida A contraindicação deve ser baseada em um teste HIV reagente.\nIV. O MS do Brasil contraindica a amamentação de mães portadoras do HTLV-1 ou HTLV-2.\nV. Mães infectadas pelo vírus da febre amarela, não devem amamentar.\n\nA alternativa que contém todas as afirmativas corretas é:",
    "alternativas": [
      {
        "letter": "A",
        "text": "I, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 20.0
      },
      {
        "letter": "B",
        "text": "II e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 20.0
      },
      {
        "letter": "C",
        "text": "I, II, III e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 20.0
      },
      {
        "letter": "D",
        "text": "I,II, III e IV",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 20.0
      },
      {
        "letter": "E",
        "text": "I, II, III, IV e V",
        "explanation": "Alternativa incorreta conforme comentário geral.",
        "communityPct": 20.0
      }
    ],
    "gabaritoOficial": "A",
    "totalRespostasComunidade": 1240,
    "taxaAcertoGlobal": 0.0,
    "comentarioGeral": "**Questão ANULADA oficialmente pela banca UEPA 2024.** Conforme as diretrizes atualizadas do **Ministério da Saúde** e da **SBP** sobre contraindicações ao aleitamento materno, houve divergência entre o gabarito pretendido e os protocolos vigentes nas afirmativas **I, III e V**, motivando a anulação:\n- **I (Desatualizada/Incorreta na prática atual):** A hanseníase (mesmo virchowiana) **não contraindica** o aleitamento materno após o início da poliquimioterapia (a rifampicina torna a paciente não bacilífera em poucos dias), recomendando-se apenas evitar contato direto do bebê com lesões abertas na mama (o critério antigo de 3 meses de sulfona/3 semanas de rifampicina foi superado).\n- **II (Correta):** Na Doença de Chagas, a amamentação é contraindicada na **fase aguda** ou quando há **fissura/sangramento mamilar**.\n- **III (Controversa/Imprecisa):** Embora puérpera HIV+ tenha contraindicação formal ao aleitamento no Brasil, o protocolo exige **diagnóstico confirmado** (dois testes rápidos distintos ou fluxograma confirmatório — na triagem de sala de parto com 1º teste rápido reagente suspende-se temporariamente até confirmação imediata).\n- **IV (Correta):** O Ministério da Saúde contraindica formalmente o aleitamento materno em mães infectadas por **HTLV-1 e HTLV-2**.\n- **V (Incorreta):** A infecção pelo vírus da febre amarela não figura como contraindicação definitiva clássica ao aleitamento (a orientação específica do MS refere-se à **vacinação** contra febre amarela em nutrizes de lactentes < 6 meses, com suspensão temporária por 10 dias caso vacinadas inadvertidamente).",
    "perolaClinica": "**Questão ANULADA oficialmente pela banca UEPA 2024.** Conforme as diretrizes atualizadas do **Ministério da Saúde** e da **SBP** sobre contraindicações ao aleitamento materno, houve divergência entre o gabarito pretendido e os protocolos vigentes nas…",
    "referencias": [
      "UEPA — Processo Seletivo Unificado de Residência Médica 2024 (Gabarito Oficial Definitivo)"
    ]
  }
];
