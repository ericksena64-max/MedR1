import type { Flashcard, GrandeAreaId } from '../types/medical';

export const IMPORTED_ANKI_DECK_VERSION = '2026-11-26-anki-438';

interface ImportedAnkiSeedEntry {
  id: string;
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  front: string;
  backPearl: string;
}

const RAW_IMPORTED_ANKI_CARDS: readonly ImportedAnkiSeedEntry[] = [
  {
    "id": "fc-anki-001",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual o melhor momento para equipe cirúrgica confirmar a reserva de sangue?",
    "backPearl": "Antes da indução anestésica."
  },
  {
    "id": "fc-anki-002",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "O pico da icterícia fisiológica do RN a termo ocorre entre o___ e ___ dia de vida.",
    "backPearl": "O pico da icterícia fisiológica do RN a termo ocorre entre o 3 e o 5 dia de vida."
  },
  {
    "id": "fc-anki-003",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "A icterícia fisiológica do RN a termo ocorre até qual dia de vida?",
    "backPearl": "A icterícia fisiológica do RN a termo ocorre até 10 e 14 dia de vida"
  },
  {
    "id": "fc-anki-004",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual a característica marcante da icterícia DO ALEITAMENTO?",
    "backPearl": "Perda ponderal importante ligada à baixa oferta de leite materno."
  },
  {
    "id": "fc-anki-005",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual a base do manejo da ICTERÍCIA DO ALEITAMENTO MATERNO?",
    "backPearl": "Corrigir a amamentação e indicar fototerapia conforme níveis de bilirrubinas"
  },
  {
    "id": "fc-anki-006",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual a bilirrubina está associada a icterícia neonatal? Direta ou indireta?",
    "backPearl": "INDIRETA"
  },
  {
    "id": "fc-anki-007",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "A icterícia do leite materno ocorre pela ativação ou inibição da atividade da enzima glicuroniltransferase?",
    "backPearl": "Pela INIBIÇÃO da enzima."
  },
  {
    "id": "fc-anki-008",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Com qual idade gestacional deve ser solicitada a Ultrassonografia morfológica?",
    "backPearl": "Entre 18 e 22 semanas"
  },
  {
    "id": "fc-anki-009",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Em um quadro de suspeita/confirmação de **meningite bacteriana aguda grave**, qual classe medicamentosa deve ser administrada **imediatamente antes ou junto** com a primeira dose da antibioticoterapia empírica?",
    "backPearl": "DEXAMETASONA (CORTICOIDE)\n\n**Por quê?** A lise bacteriana inicial provocada pelo antibiótico induz uma resposta inflamatória intensa no SNC. O corticoide atenua essa reação, reduzindo o risco de edema cerebral, sequelas neurológicas graves (como perda auditiva) e mortalidade."
  },
  {
    "id": "fc-anki-010",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "front": "Paciente com **anemia falciforme** admitido no pronto-socorro com **dor torácica**, **febre** e **dispneia** (suspeita de Síndrome Torácica Aguda):\nQual é a conduta inicial imediata?",
    "backPearl": "-\n**internação hospitalar** imediata.\n\n-\n**Exame de imagem pulmonar** (radiografia/TC de tórax para rastrear novo infiltrado).\n\n-\n**Antibioticoterapia empírica** precoce (cobertura para germes encapsulados e atípicos, ex.: macrolídeo/quinolona respiratória ou cefalosporina de 3ª geração + macrolídeo).\n\n-\n**Suporte clínico:** oxigenoterapia (se $\\text{SpO}_2 < 92\\%$), analgesia, hidratação cuidadosa e fisioterapia respiratória."
  },
  {
    "id": "fc-anki-011",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual é a conduta farmacológica indicada para idoso com fratura por fragilidade, mesmo com densitometria óssea normal ou com osteopenia?",
    "backPearl": "Iniciar tratamento para osteoporose (prevenção secundária)."
  },
  {
    "id": "fc-anki-012",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é a principal complicação a suspeitar em pós-operatório precoce de gastrectomia vertical com taquicardia persistente, febre e dor no ombro esquerdo?",
    "backPearl": "Fístula da linha de grampeamento (deiscência)."
  },
  {
    "id": "fc-anki-013",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Oftalmologia / Otorrino",
    "front": "Qual é o tratamento de primeira linha para otite média aguda (OMA) não complicada em adultos?",
    "backPearl": "Amoxicilina + clavulanato (via oral) + analgesia."
  },
  {
    "id": "fc-anki-014",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual é a conduta inicial no adenocarcinoma de pâncreas localmente avançado/borderline com icterícia obstrutiva?",
    "backPearl": "Drenagem biliar + quimioterapia neoadjuvante."
  },
  {
    "id": "fc-anki-015",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Um nódulo tireoidiano hipercaptante (\"quente\") na cintilografia tem indicação de PAAF inicial?",
    "backPearl": "Não (baixo risco de malignidade; conduta é o tratamento do hipertireoidismo)."
  },
  {
    "id": "fc-anki-016",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual é o intervalo recomendado para a dosagem de CEA nos primeiros anos de vigilância pós-tratamento curativo do câncer colorretal?",
    "backPearl": "A cada 3 a 6 meses."
  },
  {
    "id": "fc-anki-017",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é a conduta imediata ao identificar canulação arterial acidental após a passagem do dilatador?",
    "backPearl": "Manter o dispositivo no local e acionar especialista (cirurgia vascular/radiologia intervencionista) para remoção planejada."
  },
  {
    "id": "fc-anki-018",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Qual é a conduta laboratorial inicial em adolescente com sangramento uterino anormal por anovulação imatura e sem sinais de coagulopatia?",
    "backPearl": "Não realizar investigação laboratorial específica (apenas conduta clínica)."
  },
  {
    "id": "fc-anki-019",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Qual é o diagnóstico provável em adolescente com amenorreia primária, baixa estatura, pescoço alado e ausência de mamas?",
    "backPearl": "Síndrome de Turner."
  },
  {
    "id": "fc-anki-020",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Qual achado laboratorial associado a púrpura palpável diferencia a vasculite por IgA da PTI?",
    "backPearl": "Contagem de plaquetas normal ou aumentada na vasculite por IgA."
  },
  {
    "id": "fc-anki-021",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Qual é o diagnóstico mais provável para cisto ovariano com padrão homogêneo em \"vidro fosco\" à ultrassonografia?",
    "backPearl": "Endometrioma."
  },
  {
    "id": "fc-anki-022",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Qual é a conduta para criança de 18 meses sem marcha independente, mas com desenvolvimento global e tônus normais?",
    "backPearl": "Orientar acompanhamento e reavaliação."
  },
  {
    "id": "fc-anki-023",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual ferramenta de avaliação familiar é indicada para investigar profundamente disfunções, papéis e conflitos intrafamiliares complexos?",
    "backPearl": "P.R.A.C.T.I.C.E."
  },
  {
    "id": "fc-anki-024",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Qual medida de frequência expressa a ocorrência de casos novos considerando o denominador em pessoas-tempo sob risco?",
    "backPearl": "Densidade de incidência."
  },
  {
    "id": "fc-anki-025",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Por quanto tempo a amamentação deve ser suspensa após a administração da vacina de febre amarela em lactantes de bebês menores de 6 meses?",
    "backPearl": "10 dias (mínimo)."
  },
  {
    "id": "fc-anki-026",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Diante da suspeita diagnóstica de erro inato da imunidade, qual classe de vacinas deve ser formalmente contraindicada?",
    "backPearl": "Vacinas vivas atenuadas."
  },
  {
    "id": "fc-anki-027",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual é a meta percentual mínima de cobertura vacinal estabelecida pela OPAS/MS para a vacina tríplice viral?",
    "backPearl": "95%"
  },
  {
    "id": "fc-anki-028",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Em crianças que receberam a primeira dose da vacina contra febre amarela aos 9 meses de vida, com que idade é indicada a dose de reforço pelo PNI?",
    "backPearl": "Aos 4 anos"
  },
  {
    "id": "fc-anki-029",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é o anticoagulante padrão-ouro para pacientes com **Fibrilação Atrial + Estenose Mitral** moderada a grave?",
    "backPearl": "**Varfarina** (com dose ajustada pelo INR)."
  },
  {
    "id": "fc-anki-030",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual classe de anticoagulantes é formalmente **contraindicada** na FA por estenose mitral reumática?",
    "backPearl": "**DOACs** (Novos anticoagulantes orais, ex: rivaroxabana, apixabana, dabigatrana)."
  },
  {
    "id": "fc-anki-031",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a alteração clássica da **primeira bulha (B1)** na ausculta da estenose mitral?",
    "backPearl": "**Hiperfonese** de B1 (B1 acentuada)."
  },
  {
    "id": "fc-anki-032",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual é a conduta imediata para Tromboembolismo Pulmonar (TEP) de alto risco?",
    "backPearl": "Trombólise sistêmica (ex: alteplase endovenosa)."
  },
  {
    "id": "fc-anki-033",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Quais sinais clínicos caracterizam um TEP de alto risco?",
    "backPearl": "Hipotensão, choque com necessidade de vasopressor e sinais de hipoperfusão (sonolência, perfusão periférica lentificada)."
  },
  {
    "id": "fc-anki-034",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Como a angiotomografia de tórax confirma o diagnóstico de TEP?",
    "backPearl": "Demonstra falha de enchimento na artéria pulmonar."
  },
  {
    "id": "fc-anki-035",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Como se caracteriza a dor torácica relatada no quadro agudo de TEP?",
    "backPearl": "Dor de caráter pleurítico que piora à inspiração profunda."
  },
  {
    "id": "fc-anki-036",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Quais são os principais sinais clínicos da crise tireotóxica?",
    "backPearl": "Febre, taquicardia acentuada, tremores, alteração do nível de consciência."
  },
  {
    "id": "fc-anki-037",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual é a conduta farmacológica inicial prioritária na crise tireotóxica?",
    "backPearl": "Administração de betabloqueador (como propranolol ou esmolol)."
  },
  {
    "id": "fc-anki-038",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Por que o betabloqueador é a prioridade no tratamento inicial da crise tireotóxica?",
    "backPearl": "Para realizar o controle imediato da taquicardia e dos sintomas adrenérgicos sistêmicos."
  },
  {
    "id": "fc-anki-039",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Por que o teste rápido para HIV pode ser negativo em um paciente com síndrome retroviral aguda?",
    "backPearl": "Devido à janela imunológica, que é o período em que o corpo ainda não produziu anticorpos detectáveis."
  },
  {
    "id": "fc-anki-040",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o exame de escolha para confirmar infecção aguda pelo HIV quando há alta suspeita e teste rápido negativo?",
    "backPearl": "Carga viral para HIV pelo método PCR (pesquisa de RNA-HIV)."
  },
  {
    "id": "fc-anki-041",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é o risco de transmissão vertical do HIV em gestante com carga viral indetectável no 3º trimestre?",
    "backPearl": "Risco muito baixo."
  },
  {
    "id": "fc-anki-042",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Como é definida a via de parto para gestantes com HIV, boa adesão à TARV e carga viral indetectável?",
    "backPearl": "A via de parto segue exclusivamente critérios obstétricos (o parto vaginal é adequado)."
  },
  {
    "id": "fc-anki-043",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "O que deve ser garantido à criança recém-nascida de mãe vivendo com HIV em substituição ao leite materno?",
    "backPearl": "Acesso gratuito à fórmula infantil fornecida pelo SUS."
  },
  {
    "id": "fc-anki-044",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Há indicação obrigatória de cesariana eletiva para todas as gestantes vivendo com HIV?",
    "backPearl": "Não. A indicação de cesariana eletiva por causa do HIV depende da carga viral; sendo indetectável, prevalece a indicação obstétrica."
  },
  {
    "id": "fc-anki-045",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Por que o implante subdérmico de etonogestrel é seguro durante a amamentação exclusiva?",
    "backPearl": "Porque é composto apenas por progestagênio, não interferindo na quantidade ou qualidade do leite materno."
  },
  {
    "id": "fc-anki-046",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Em qual janela de tempo do puerpério a inserção do DIU é contraindicada pelo alto risco de expulsão?",
    "backPearl": "Entre 48 horas e 4 semanas pós-parto."
  },
  {
    "id": "fc-anki-047",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "A eficácia do implante subdérmico sofre interferência de alterações anatômicas no útero?",
    "backPearl": "Não, o método atua sistemicamente e independe da anatomia da cavidade uterina."
  },
  {
    "id": "fc-anki-048",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são os sinais clássicos de megacólon congênito (doença de Hirschsprung) no recém-nascido?",
    "backPearl": "Atraso na eliminação de mecônio (> 24-48h).\nDistensão abdominal.\nVômitos biliosos.\nAmpola retal vazia.\nEliminação fecal explosiva ao toque."
  },
  {
    "id": "fc-anki-049",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é a diferença no exame retal entre o megacólon congênito e o íleo meconial?",
    "backPearl": "No megacólon congênito, a ampola retal está vazia e há saída explosiva de fezes ao estímulo; no íleo meconial, há obstrução por mecônio espesso."
  },
  {
    "id": "fc-anki-050",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "O QUE É ÍLEO MECONIAL?",
    "backPearl": "O **íleo meconial** é uma causa de obstrução intestinal neonatal decorrente da impactação de mecônio anormalmente espesso, desidratado e viscoso, geralmente no íleo terminal."
  },
  {
    "id": "fc-anki-051",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é o exame de escolha para investigar complicações pós-operatórias em paciente bariátrico hemodinamicamente estável?",
    "backPearl": "Tomografia computadorizada de abdome com contraste."
  },
  {
    "id": "fc-anki-052",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Quando a laparotomia de urgência estaria formalmente indicada no contexto de complicação pós-bariátrica?",
    "backPearl": "Na presença de instabilidade hemodinâmica grave ou sinais francos de peritonite."
  },
  {
    "id": "fc-anki-053",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Por que a tomografia é o exame inicial na suspeita de fístula após gastrectomia vertical?",
    "backPearl": "Porque a tomografia é superior para avaliar extravasamento, pneumoperitônio e a presença de coleções intra-abdominais nesse cenário."
  },
  {
    "id": "fc-anki-054",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "A idade materna > 35 anos isolada é considerada um fator de risco para hemorragia pós-parto pelo Ministério da Saúde?",
    "backPearl": "Não. A idade isolada não é um fator de risco específico no protocolo."
  },
  {
    "id": "fc-anki-055",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual ponto de corte do Índice de Massa Corporal (IMC) configura fator de risco para hemorragia pós-parto?",
    "backPearl": "IMC > 35 kg/m² (obesidade)."
  },
  {
    "id": "fc-anki-056",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Cite três condições gestacionais que causam sobredistensão uterina e aumentam o risco de hemorragia pós-parto.",
    "backPearl": "Gestação múltipla, polidrâmnio e macrossomia fetal."
  },
  {
    "id": "fc-anki-057",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o quadro clínico clássico da fase pós-aguda da febre Chikungunya?",
    "backPearl": "Poliartrite distal.\nRigidez matinal.\nTenossinovite.\nFadiga Crônica."
  },
  {
    "id": "fc-anki-058",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "A pesquisa do antígeno NS1 é detectável até quantos dias de sintomas suspeitos de arbovirose (dengue)?",
    "backPearl": "O antígeno NS1 é detectável apenas na fase aguda inicial da viremia, geralmente até o 5º ao 7º dia."
  },
  {
    "id": "fc-anki-059",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "A partir de qual dia do início dos sintomas a sorologia IgM para Chikungunya costuma se tornar positiva?",
    "backPearl": "A partir do 4º ao 5º dia de doença, permanecendo detectável por semanas a meses."
  },
  {
    "id": "fc-anki-060",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é o critério diagnóstico para bacteriúria assintomática na gestação?",
    "backPearl": "Urocultura com crescimento igual ou superior a 100.000 UFC/mL em paciente sem sintomas."
  },
  {
    "id": "fc-anki-061",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é a conduta para gestante assintomática com urocultura alterada, mas com crescimento inferior a 100.000 UFC/mL?",
    "backPearl": "Apenas acompanhamento pré-natal habitual, sem indicação de antibiótico imediato."
  },
  {
    "id": "fc-anki-062",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual microrganismo isolado na urocultura, mesmo em contagens inferiores a 100.000 UFC/mL, exige atenção especial na gestação?",
    "backPearl": "*Streptococcus* do grupo B."
  },
  {
    "id": "fc-anki-063",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Como manejar o achado de *Streptococcus* do grupo B em baixa contagem na urocultura de uma gestante assintomática?",
    "backPearl": "Não tratar durante a gestação; registrar o achado exclusivamente para realizar profilaxia intraparto."
  },
  {
    "id": "fc-anki-064",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Em quais situações está indicada a repetição da urocultura por suspeita de contaminação?",
    "backPearl": "Quando há crescimento de múltiplos microrganismos (flora mista) ou discordância clínica."
  },
  {
    "id": "fc-anki-065",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual agente etiológico causa a lesão eritematosa serpiginosa típica da larva migrans cutânea?",
    "backPearl": "*Ancylostoma brasiliensis*."
  },
  {
    "id": "fc-anki-066",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o agente causador da tungíase?",
    "backPearl": "*Tunga penetrans*."
  },
  {
    "id": "fc-anki-067",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Como se caracteriza clinicamente a lesão clássica da tungíase?",
    "backPearl": "Pápula ou nódulo doloroso e pruriginoso com um ponto negro central (poro de eliminação), comum na região periungueal."
  },
  {
    "id": "fc-anki-068",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Qual é o sistema de informação que o serviço de saúde deve obrigatoriamente notificar em caso de acidente de trabalho grave ou fatal?",
    "backPearl": "Sinan (Sistema de Informação de Agravos de Notificação)."
  },
  {
    "id": "fc-anki-069",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "Qual é o documento que serve como registro previdenciário oficial de um acidente de trabalho?",
    "backPearl": "Comunicação de Acidente de Trabalho (CAT)."
  },
  {
    "id": "fc-anki-070",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "De quem é a obrigação principal de abrir a Comunicação de Acidente de Trabalho (CAT)?",
    "backPearl": "Da empresa empregadora (embora outros legitimados possam emiti-la na sua ausência)."
  },
  {
    "id": "fc-anki-071",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "A notificação compulsória ao Sinan substitui a necessidade de emissão da CAT?",
    "backPearl": "Não, pois são instrumentos com finalidades distintas (vigilância em saúde vs. registro previdenciário)."
  },
  {
    "id": "fc-anki-072",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Quais são os sinais neurológicos clássicos de intoxicação por lítio?",
    "backPearl": "Discurso desconexo, tremor grosseiro nas extremidades e marcha atáxica."
  },
  {
    "id": "fc-anki-073",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é a conduta terapêutica imediata na suspeita clínica de intoxicação por lítio?",
    "backPearl": "Suspender o carbonato de lítio, iniciar suporte volêmico (hidratação venosa) e monitorar a função renal e a litemia."
  },
  {
    "id": "fc-anki-074",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual é o exame de escolha para investigar suspeita clínica de Trombose Venosa Profunda (TVP) em paciente estável?",
    "backPearl": "Ultrassom Doppler venoso do membro acometido."
  },
  {
    "id": "fc-anki-075",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Por que a anticoagulação empírica plena não deve ser iniciada antes do Doppler em pós-operatório recente de cirurgia abdominal?",
    "backPearl": "Porque eleva significativamente o risco de sangramento na ferida operatória."
  },
  {
    "id": "fc-anki-076",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Em quais cenários a trombólise sistêmica está indicada no tromboembolismo venoso?",
    "backPearl": "No TEP de alto risco (com instabilidade hemodinâmica) ou na TVP iliofemoral maciça com ameaça ao membro."
  },
  {
    "id": "fc-anki-077",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "front": "Qual é o distúrbio fisiopatológico característico da Síndrome de Gilbert?",
    "backPearl": "É um distúrbio benigno da conjugação hepática da bilirrubina (deficiência parcial da enzima UGT1A1)."
  },
  {
    "id": "fc-anki-078",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "front": "Como se caracteriza o quadro clínico típico da Síndrome de Gilbert?",
    "backPearl": "Episódios recorrentes e autolimitados de icterícia leve, sem colúria, sem acolia fecal e com exame físico normal (exceto icterícia)."
  },
  {
    "id": "fc-anki-079",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "front": "Qual é a conduta médica recomendada para o manejo da Síndrome de Gilbert?",
    "backPearl": "Nenhuma intervenção medicamentosa. A conduta é reconhecer a benignidade da condição e orientar o paciente."
  },
  {
    "id": "fc-anki-080",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a conduta medicamentosa adequada para um idoso com IC de fração de ejeção preservada e sintomas de hipotensão ortostática?",
    "backPearl": "Manter as classes terapêuticas atuais (bloqueadores do SRAA, betabloqueadores, antagonistas de mineralocorticoide) e realizar ajuste posológico cuidadoso."
  },
  {
    "id": "fc-anki-081",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a principal indicação para o uso de sacubitril-valsartana na insuficiência cardíaca?",
    "backPearl": "Insuficiência cardíaca com fração de ejeção reduzida (ICFER)."
  },
  {
    "id": "fc-anki-082",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "O que a suspensão abrupta do betabloqueador pode causar em pacientes com doença coronariana crônica?",
    "backPearl": "Pode desencadear um efeito de rebote adrenérgico, resultando em piora clínica e eventos isquêmicos."
  },
  {
    "id": "fc-anki-083",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "front": "Quais achados clínicos indicam gravidade e necessidade de UTI na pneumonia infantil?",
    "backPearl": "Hipoxemia (SatO₂ < 90%), taquipneia severa, tiragem intercostal e batimento de asa nasal."
  },
  {
    "id": "fc-anki-084",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Em quais situações o uso de macrolídeos, como a azitromicina, é bem indicado nas pneumonias?",
    "backPearl": "Quando há forte suspeita clínica de infecção por agentes atípicos."
  },
  {
    "id": "fc-anki-085",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Hérnias e Parede Abdominal",
    "front": "Qual achado no exame físico confirma o diagnóstico de hérnia inguinal indireta?",
    "backPearl": "A abolição completa do abaulamento durante a manobra de Valsalva ao realizar a compressão do anel inguinal profundo."
  },
  {
    "id": "fc-anki-086",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Hérnias e Parede Abdominal",
    "front": "Qual é o trajeto anatômico de protrusão da hérnia inguinal indireta?",
    "backPearl": "Ela emerge pelo anel inguinal profundo (lateral aos vasos epigástricos) e percorre o canal inguinal."
  },
  {
    "id": "fc-anki-087",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Hérnias e Parede Abdominal",
    "front": "Qual é a via anatômica de protrusão da hérnia inguinal direta?",
    "backPearl": "Ela protrui devido à fraqueza da parede posterior no triângulo de Hesselbach (medial aos vasos epigástricos)."
  },
  {
    "id": "fc-anki-088",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Hérnias e Parede Abdominal",
    "front": "Qual é a diferença entre a hérnia inguinal direta e a indireta durante o teste de oclusão do anel profundo?",
    "backPearl": "Na indireta, a oclusão impede a saída da hérnia; na direta, o abaulamento persiste."
  },
  {
    "id": "fc-anki-089",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e Emergência Cirúrgica",
    "front": "Qual é a técnica de primeira escolha para a remoção de um anzol simples transfixado na atenção primária?",
    "backPearl": "Técnica de avançar e cortar: exterioriza-se a ponta, corta-se a farpa com um alicate e remove-se o anzol pelo orifício de entrada."
  },
  {
    "id": "fc-anki-090",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "O que significa a sigla AGC na citologia cervical?",
    "backPearl": "Células glandulares atípicas de significado indeterminado."
  },
  {
    "id": "fc-anki-091",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Qual é a conduta clínica principal diante de um laudo com AGC?",
    "backPearl": "Encaminhar para colposcopia imediata associada à amostragem endocervical."
  },
  {
    "id": "fc-anki-092",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "A partir de qual idade a avaliação endometrial torna-se obrigatória em pacientes com AGC?",
    "backPearl": "A partir de 35 anos."
  },
  {
    "id": "fc-anki-093",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Por que a conduta de repetir a citologia em 6 meses é contraindicada para AGC?",
    "backPearl": "Porque adia o diagnóstico de lesões potencialmente graves, sendo uma estratégia restrita a achados de menor risco, como ASC-US."
  },
  {
    "id": "fc-anki-094",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a conduta farmacológica imediata prioritária na suspeita de Síndrome Coronariana Aguda sem supra de ST?",
    "backPearl": "Dupla antiagregação plaquetária com AAS e um inibidor P2Y12 (ex: clopidogrel), após descartar contraindicações."
  },
  {
    "id": "fc-anki-095",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual achado eletrocardiográfico nas derivações V1 a V4 sugere isquemia da parede anterior do coração?",
    "backPearl": "Inversão simétrica de onda T."
  },
  {
    "id": "fc-anki-096",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Qual é a apresentação temporal típica do declínio cognitivo na demência vascular?",
    "backPearl": "Início súbito com progressão clínica em degraus (períodos de estabilidade intercalados com novas perdas)."
  },
  {
    "id": "fc-anki-097",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Quais domínios cognitivos costumam ser mais afetados na demência vascular subcortical?",
    "backPearl": "Funções executivas e atenção, muitas vezes com relativa preservação da memória no início do quadro."
  },
  {
    "id": "fc-anki-098",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Qual é a diferença na progressão clínica entre a doença de Alzheimer e a demência vascular?",
    "backPearl": "O Alzheimer tem progressão insidiosa e contínua, enquanto a vascular apresenta piora em degraus associada a eventos isquêmicos."
  },
  {
    "id": "fc-anki-099",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Quais são os principais fatores de risco para o desenvolvimento de demência vascular?",
    "backPearl": "Hipertensão arterial sistêmica mal controlada, tabagismo e histórico de eventos cardiovasculares."
  },
  {
    "id": "fc-anki-100",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Quais sintomas diferenciam a demência de corpúsculos de Lewy da demência vascular?",
    "backPearl": "A demência de Lewy apresenta alucinações visuais recorrentes, flutuação cognitiva marcante e parkinsonismo precoce."
  },
  {
    "id": "fc-anki-101",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Por que a doença de Alzheimer é improvável em um paciente com início súbito de demência após pico hipertensivo?",
    "backPearl": "Porque o Alzheimer possui um curso lento e progressivo, sem relação direta de piora súbita atrelada a eventos vasculares agudos."
  },
  {
    "id": "fc-anki-102",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Como o IVCF-20 define o critério de polifarmácia?",
    "backPearl": "Como o uso habitual de cinco ou mais medicamentos."
  },
  {
    "id": "fc-anki-103",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "O que é o Índice de Vulnerabilidade Clínico-Funcional (IVCF-20)?",
    "backPearl": "Um instrumento de avaliação multidimensional da pessoa idosa utilizado para estratificar o risco de fragilidade e declínio funcional."
  },
  {
    "id": "fc-anki-104",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Quais sintomas compõem a avaliação do domínio cognição/humor no IVCF-20?",
    "backPearl": "Queixas recentes de esquecimento ou perda de memória."
  },
  {
    "id": "fc-anki-105",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Como o domínio funcional é avaliado pelo IVCF-20?",
    "backPearl": "Pela verificação de dificuldades na realização de atividades instrumentais da vida diária (como limpar a casa) e atividades básicas (como tomar banho)."
  },
  {
    "id": "fc-anki-106",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "O uso de dispositivos de auxílio à marcha (como bengalas) é um critério direto de pontuação no IVCF-20?",
    "backPearl": "Não, o instrumento avalia especificamente a limitação de mobilidade (dificuldade para caminhar ou levantar) e o histórico de quedas."
  },
  {
    "id": "fc-anki-107",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Como o estado nutricional da pessoa idosa é pontuado no IVCF-20?",
    "backPearl": "Por meio do relato de perda de peso não intencional ou baixa ingestão alimentar recente, e não pelo valor do Índice de Massa Corporal (IMC)."
  },
  {
    "id": "fc-anki-108",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "O histórico de internação hospitalar prévia sempre pontua no IVCF-20?",
    "backPearl": "Apenas quando o evento ocorreu de forma recente (geralmente nos últimos 6 meses)."
  },
  {
    "id": "fc-anki-109",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual infecção sexualmente transmissível cursa com pápula genital inicial seguida de linfadenite inguinal dolorosa unilateral que fistuliza por múltiplos orifícios?",
    "backPearl": "Linfogranuloma venéreo."
  },
  {
    "id": "fc-anki-110",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o agente etiológico clássico do linfogranuloma venéreo?",
    "backPearl": "*Chlamydia trachomatis* (sorotipos L1–L3)."
  },
  {
    "id": "fc-anki-111",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual agente etiológico é responsável por causar o cancro mole?",
    "backPearl": "*Haemophilus ducreyi*."
  },
  {
    "id": "fc-anki-112",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual a bactéria causadora de donovanose?",
    "backPearl": "É uma infecção causada pela *Klebsiella granulomatis.*"
  },
  {
    "id": "fc-anki-113",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o prazo máximo preconizado pelo Ministério da Saúde para o início da Profilaxia Pós-Exposição (PEP) ao HIV?",
    "backPearl": "Até 72 horas após a exposição de risco (sendo ideal o início o mais precocemente possível)."
  },
  {
    "id": "fc-anki-114",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é a conduta clínica adequada para um trabalhador exposto a material biológico que procura atendimento após a janela de 72 horas?",
    "backPearl": "Realizar a testagem rápida (sorologia basal) do profissional e iniciar o acompanhamento sorológico ambulatorial, sem indicar a profilaxia medicamentosa."
  },
  {
    "id": "fc-anki-115",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Se o paciente-fonte tiver diagnóstico confirmado de HIV, o protocolo autoriza abrir uma exceção e iniciar a PEP no profissional após 72 horas?",
    "backPearl": "Não, a contraindicação de início após 72 horas se mantém independentemente do status sorológico positivo do paciente-fonte."
  },
  {
    "id": "fc-anki-116",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "Qual distúrbio ácido-básico é esperado em um lactente com desidratação grave, osteopenia e raquitismo resistente à vitamina D?",
    "backPearl": "Acidose metabólica hiperclorêmica."
  },
  {
    "id": "fc-anki-117",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é a conduta farmacológica de escolha para reverter rapidamente um quadro de distonia aguda induzida por antipsicóticos?",
    "backPearl": "Administração de anticolinérgicos (como o biperideno) ou anti-histamínicos por via intramuscular."
  },
  {
    "id": "fc-anki-118",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é a diferença temporal entre a distonia aguda e a discinesia tardia ao uso de antipsicóticos?",
    "backPearl": "A distonia aguda (Início Súbito de horas a dias)\nDiscinesia tardia (insidioso e crônico como meses)"
  },
  {
    "id": "fc-anki-119",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é o diagnóstico mais provável para um paciente em uso recente de haloperidol que desenvolve contratura cervical aguda e dolorosa?",
    "backPearl": "Distonia aguda."
  },
  {
    "id": "fc-anki-120",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Quanto tempo costuma durar a rigidez matinal na artrite reumatoide?",
    "backPearl": "Mais de 2 horas (prolongada)."
  },
  {
    "id": "fc-anki-121",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Níveis elevados de creatina quinase (CK) indicam qual tipo de complicação reumatológica?",
    "backPearl": "Miosite (envolvimento inflamatório)."
  },
  {
    "id": "fc-anki-122",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Qual é o quadro clínico clássico da artrite reumatoide?",
    "backPearl": "Poliartrite simétrica, dor, edema articular e rigidez matinal prolongada."
  },
  {
    "id": "fc-anki-123",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "O FAN com padrão nuclear pontilhado fino denso pode ser encontrado em qual doença?",
    "backPearl": "Lúpus eritematoso sistêmico (embora não seja exclusivo)."
  },
  {
    "id": "fc-anki-124",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Hérnias e Parede Abdominal",
    "front": "Qual grupo de pacientes apresenta maior risco para o desenvolvimento de hérnia femoral?",
    "backPearl": "Mulheres idosas."
  },
  {
    "id": "fc-anki-125",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "Quais são as prioridades imediatas no atendimento inicial de uma suspeita de intoxicação aguda por agrotóxicos?",
    "backPearl": "Tratar os sintomas, notificar o caso e afastar o paciente da exposição."
  },
  {
    "id": "fc-anki-126",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Em qual sistema de informação deve ser feita a notificação de um caso suspeito de intoxicação por agrotóxicos?",
    "backPearl": "Sinan (Sistema de Notificação de Agravos e Doenças)."
  },
  {
    "id": "fc-anki-127",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Qual é o diagnóstico para fenótipo feminino, cariótipo 46,XY, ausência de útero e testosterona em nível masculino?",
    "backPearl": "Síndrome da insensibilidade androgênica."
  },
  {
    "id": "fc-anki-128",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "O que explica o desenvolvimento de um fenótipo feminino na síndrome da insensibilidade androgênica?",
    "backPearl": "A resistência dos tecidos aos efeitos dos androgênios."
  },
  {
    "id": "fc-anki-129",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Como se apresenta a distribuição de pelos na síndrome da insensibilidade androgênica?",
    "backPearl": "Pelos pubianos e axilares esparsos ou ausentes."
  },
  {
    "id": "fc-anki-130",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Qual é a principal diferença genética entre a malformação mülleriana (Rokitansky) e a insensibilidade androgênica?",
    "backPearl": "A malformação mülleriana ocorre no cariótipo 46,XX; a insensibilidade androgênica ocorre no 46,XY."
  },
  {
    "id": "fc-anki-131",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a conduta inicial para idosos (≥ 80 anos) assintomáticos com PA sistólica entre 140 e 150 mmHg sem lesão de órgão-alvo?",
    "backPearl": "Conduta expectante, orientações não farmacológicas e monitoramento ambulatorial."
  },
  {
    "id": "fc-anki-132",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Em pacientes com 80 anos ou mais, a partir de qual valor de pressão sistólica geralmente se inicia a terapia medicamentosa?",
    "backPearl": "PAS persistentemente ≥ 160 mmHg (após confirmação) ou se houver lesão de órgão-alvo."
  },
  {
    "id": "fc-anki-133",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Quais exames são o padrão adequado para confirmar o diagnóstico de hipertensão fora do consultório?",
    "backPearl": "MAPA (Monitorização Ambulatorial) ou MRPA (Monitorização Residencial)."
  },
  {
    "id": "fc-anki-134",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cirurgia Pediátrica",
    "front": "O que define clinicamente a fimose?",
    "backPearl": "A incapacidade de retrair o prepúcio para expor completamente a glande do pênis."
  },
  {
    "id": "fc-anki-135",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cirurgia Pediátrica",
    "front": "O que caracteriza uma balanopostite?",
    "backPearl": "É a inflamação simultânea da glande e do prepúcio."
  },
  {
    "id": "fc-anki-136",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cirurgia Pediátrica",
    "front": "Qual é a conduta indicada para uma criança com fimose, anel fibrótico prepucial e balanopostites de repetição?",
    "backPearl": "Indicação de tratamento cirúrgico."
  },
  {
    "id": "fc-anki-137",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cirurgia Pediátrica",
    "front": "Por que a fimose acompanhada de anel fibrótico não pode ser classificada como fisiológica?",
    "backPearl": "Porque a presença de fibrose e infecções indica uma condição patológica que não se resolve apenas com exercícios de redução e higiene."
  },
  {
    "id": "fc-anki-138",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Cirurgia Pediátrica",
    "front": "Quando a correção cirúrgica da fimose não deve aguardar a adolescência?",
    "backPearl": "Quando o paciente já apresenta complicações precoces, como fibrose prepucial e balanopostites recorrentes."
  },
  {
    "id": "fc-anki-139",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Quais exames iniciais devem ser solicitados para um paciente que retorna após abandono do tratamento da tuberculose?",
    "backPearl": "Teste rápido molecular (TRM-TB), baciloscopia de escarro e radiografia de tórax."
  },
  {
    "id": "fc-anki-140",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é a conduta diagnóstica ao encontrar TRM-TB negativo e baciloscopia positiva no retorno ao tratamento?",
    "backPearl": "Solicitar cultura de escarro com teste de sensibilidade."
  },
  {
    "id": "fc-anki-141",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é a conduta terapêutica para TRM-TB negativo e baciloscopia positiva enquanto se aguarda o resultado da cultura?",
    "backPearl": "Reiniciar o esquema básico de tratamento da tuberculose."
  },
  {
    "id": "fc-anki-142",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é a conduta imediata caso o TRM-TB indique resistência à rifampicina?",
    "backPearl": "Repetir o TRM-TB.\nSolicitar cultura do escarro + teste de sensibilidade.\nEncaminhar para serviço terciário em até 7 dias."
  },
  {
    "id": "fc-anki-143",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual antecedente infeccioso típico precede o quadro articular da febre reumática em algumas semanas?",
    "backPearl": "Infecção de garganta (faringoamigdalite)."
  },
  {
    "id": "fc-anki-144",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual é a manifestação articular clássica da febre reumática?",
    "backPearl": "Artrite migratória, que afeta grandes articulações de forma sequencial."
  },
  {
    "id": "fc-anki-145",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "O que o achado de sopro sistólico de 3+/6+ indica em um paciente com suspeita de febre reumática?",
    "backPearl": "Cardite reumática (envolvimento cardíaco inflamatório)."
  },
  {
    "id": "fc-anki-146",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual é o agente etiológico responsável por desencadear o quadro de febre reumática?",
    "backPearl": "*Streptococcus pyogenes* (estreptococo do grupo A)."
  },
  {
    "id": "fc-anki-147",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual é o tratamento de escolha para erradicação do agente bacteriano na febre reumática?",
    "backPearl": "Penicilina G benzatina."
  },
  {
    "id": "fc-anki-148",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual é a principal diferença clínica entre o acometimento articular da febre reumática e o da artrite por *Staphylococcus aureus*?",
    "backPearl": "A febre reumática cursa com poliartrite migratória, enquanto a artrite estafilocócica (séptica) costuma ser monoarticular, fixa e progressiva."
  },
  {
    "id": "fc-anki-149",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "O agente *Borrelia burgdorferi* causa qual doença e qual é o antibiótico indicado?",
    "backPearl": "Causa a doença de Lyme e é tratada com doxiciclina."
  },
  {
    "id": "fc-anki-150",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual fator de risco comportamental de longo prazo é o principal causador da pancreatite crônica?",
    "backPearl": "Etilismo crônico (frequentemente associado ao tabagismo)."
  },
  {
    "id": "fc-anki-151",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual é a diferença na localização da dor entre colecistite aguda e pancreatite?",
    "backPearl": "A colecistite aguda causa dor no quadrante superior direito (hipocôndrio direito), enquanto a pancreatite causa dor epigástrica que irradia para as costas."
  },
  {
    "id": "fc-anki-152",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual medicamento é indicado para quimioprofilaxia de malária em pessoas que se deslocam para áreas endêmicas (como a região amazônica)?",
    "backPearl": "1-Mefloquina\n2-Doxiciclina."
  },
  {
    "id": "fc-anki-153",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual medicamento é utilizado especificamente para eliminar as formas hepáticas do *Plasmodium vivax*?",
    "backPearl": "Primaquina."
  },
  {
    "id": "fc-anki-154",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual é o método intervencionista de escolha para tratar abscessos diverticulares significativos (geralmente > 4 cm) e acessíveis?",
    "backPearl": "Drenagem percutânea guiada por imagem (como tomografia)."
  },
  {
    "id": "fc-anki-155",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Como costuma ser o manejo de microabscessos diverticulares (coleções muito pequenas, tratadas de forma conservadora)?",
    "backPearl": "Apenas com antibioticoterapia sistêmica, sem indicação inicial de drenagem percutânea ou cirúrgica."
  },
  {
    "id": "fc-anki-156",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Por que contraceptivos contendo estrogênio são contraindicados para pacientes com lúpus eritematoso sistêmico (LES) e história de trombose?",
    "backPearl": "Devido ao risco aumentado de eventos tromboembólicos."
  },
  {
    "id": "fc-anki-157",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Qual é o método contraceptivo de escolha para uma paciente com LES, histórico de trombose, sangramento menstrual intenso e cólicas fortes?",
    "backPearl": "DIU de levonorgestrel."
  },
  {
    "id": "fc-anki-158",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "O que indica uma sorologia para toxoplasmose com IgM positiva e IgG negativa na gestação?",
    "backPearl": "Infecção recente ou provável resultado falso positivo."
  },
  {
    "id": "fc-anki-159",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é a conduta inicial para gestante com toxoplasmose apresentando IgM positiva e IgG negativa?",
    "backPearl": "Iniciar espiramicina e repetir as sorologias em 2 a 3 semanas."
  },
  {
    "id": "fc-anki-160",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Quando é indicado o teste de avidez de IgG na toxoplasmose gestacional?",
    "backPearl": "Para determinar a antiguidade da infecção em casos onde a IgM e a IgG também é positiva."
  },
  {
    "id": "fc-anki-161",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é o tratamento de primeira escolha para controlar a frequência cardíaca na fibrilação atrial estável?",
    "backPearl": "Betabloqueador endovenoso."
  },
  {
    "id": "fc-anki-162",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é a principal diferença no ritmo cardíaco entre fibrilação atrial e taquicardia paroxística supraventricular (TPSV)?",
    "backPearl": "A fibrilação atrial apresenta ritmo irregular, enquanto a TPSV possui ritmo regular."
  },
  {
    "id": "fc-anki-163",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "Qual é o exame de escolha para detectar cicatrizes renais após episódios repetidos de infecção urinária?",
    "backPearl": "Cintilografia renal estática (DMSA)."
  },
  {
    "id": "fc-anki-164",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "O que a presença de cicatrizes renais indica após infecções de repetição?",
    "backPearl": "Danos permanentes ao tecido do parênquima renal."
  },
  {
    "id": "fc-anki-165",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "Uma ultrassonografia normal dispensa a investigação de cicatrizes renais em lactentes com infecção de repetição?",
    "backPearl": "Não, exames mais sensíveis, como a cintilografia estática, continuam sendo necessários."
  },
  {
    "id": "fc-anki-166",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Quando o DIU de cobre pode ser inserido no puerpério imediato?",
    "backPearl": "Até dois dias (48 horas) após o parto vaginal ou apenas após quatro semanas."
  },
  {
    "id": "fc-anki-167",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Em qual período do ciclo menstrual o DIU de cobre pode ser inserido no contexto da atenção primária?",
    "backPearl": "A qualquer momento do ciclo, desde que a ausência de gravidez seja confirmada."
  },
  {
    "id": "fc-anki-168",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é a conduta inicial recomendada para um lactente com diarreia aguda e desidratação moderada?",
    "backPearl": "Terapia de reidratação oral (TRO) supervisionada na unidade de saúde."
  },
  {
    "id": "fc-anki-169",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é a conduta imediata se o paciente mantiver desidratação moderada e vomitar repetidamente durante a TRO?",
    "backPearl": "Introduzir sonda nasogástrica e iniciar a TRO por gastróclise."
  },
  {
    "id": "fc-anki-170",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Por que a terapia intravenosa não é a primeira escolha após a falha da TRO por vômitos em casos moderados?",
    "backPearl": "Porque a administração de soro de reidratação oral por sonda nasogástrica deve ser tentada antes de métodos mais invasivos."
  },
  {
    "id": "fc-anki-171",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Quando a terapia de reidratação intravenosa (ex: soro fisiológico) está formalmente indicada na diarreia aguda?",
    "backPearl": "Apenas em casos de desidratação grave ou quando há falha completa da hidratação oral e por sonda."
  },
  {
    "id": "fc-anki-172",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "O que a presença de dor lombar noturna e perda de peso em um paciente com histórico oncológico sugere?",
    "backPearl": "Alta suspeita de metástase óssea ou recidiva do câncer."
  },
  {
    "id": "fc-anki-173",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Qual é a relevância clínica do uso contínuo de imunossupressores na investigação de dor lombar aguda?",
    "backPearl": "Aumenta significativamente o risco de etiologias infecciosas."
  },
  {
    "id": "fc-anki-174",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Qual é o exame de imagem padrão-ouro para investigar dor lombar com suspeita de compressão medular, infecção ou metástase?",
    "backPearl": "Ressonância magnética da coluna lombossacra."
  },
  {
    "id": "fc-anki-175",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é a medida imediata recomendada para a descontaminação gastrointestinal na intoxicação aguda por AAS?",
    "backPearl": "Administração de carvão ativado."
  },
  {
    "id": "fc-anki-176",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é o antídoto específico indicado para reverter a intoxicação por paracetamol (acetaminofeno)?",
    "backPearl": "N-acetilcisteína."
  },
  {
    "id": "fc-anki-177",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Qual é a principal indicação toxicológica para o uso da atropina?",
    "backPearl": "Tratamento de intoxicações por organofosforados e outros agentes que desencadeiam síndrome colinérgica."
  },
  {
    "id": "fc-anki-178",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "front": "Qual subtipo de melanoma é característico de áreas como palmas das mãos e plantas dos pés?",
    "backPearl": "Melanoma acrolentiginoso."
  },
  {
    "id": "fc-anki-179",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "front": "Quais são as características visuais clássicas do carcinoma basocelular?",
    "backPearl": "Lesão perolada ou translúcida, com bordas elevadas e presença de telangiectasias visíveis."
  },
  {
    "id": "fc-anki-180",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "front": "Como costuma se apresentar clinicamente o carcinoma espinocelular?",
    "backPearl": "Como uma lesão escamosa, ulcerada ou nodular, geralmente restrita a áreas expostas ao sol."
  },
  {
    "id": "fc-anki-181",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "front": "O que é a queratose actínica?",
    "backPearl": "É uma lesão cutânea pré-cancerosa que se manifesta como placa ou pápula áspera, escamosa e avermelhada."
  },
  {
    "id": "fc-anki-182",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Dermatologia",
    "front": "Qual é o diagnóstico clínico mais provável para uma lesão cutânea com bordas irregulares e coloração heterogênea (preto, castanho, cinza)?",
    "backPearl": "MELANOMA"
  },
  {
    "id": "fc-anki-183",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Quais sinais em um lactente indicam necessidade de triagem específica para Transtorno do Espectro Autista (TEA)?",
    "backPearl": "Alterações nos marcos de desenvolvimento relacionados à comunicação, comportamento e socialização."
  },
  {
    "id": "fc-anki-184",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Quando deve ser realizada a triagem universal padronizada para TEA (como o M-CHAT-R/F) segundo a SBP?",
    "backPearl": "Nas consultas de puericultura aos 18 e 24 meses de idade."
  },
  {
    "id": "fc-anki-185",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Qual é o volume padrão por quilograma para a expansão volêmica inicial no choque hipovolêmico pediátrico?",
    "backPearl": "20 mL/kg."
  },
  {
    "id": "fc-anki-186",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "O ordenamento jurídico brasileiro permite a interrupção da gestação em casos de microcefalia fetal por Zika vírus?",
    "backPearl": "Não, o procedimento não é permitido independentemente da idade gestacional."
  },
  {
    "id": "fc-anki-187",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Quais são as três únicas situações de abortamento legalizadas no Brasil?",
    "backPearl": "Risco de vida para a gestante, gravidez resultante de estupro e gestação de feto com anencefalia."
  },
  {
    "id": "fc-anki-188",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "front": "Qual é o quadro clínico sugestivo de infecção por vírus sincicial respiratório (VSR) em adolescentes?",
    "backPearl": "Pródromos de vias aéreas superiores (odinofagia, rouquidão), seguidos de tosse seca e estertores finos bilaterais."
  },
  {
    "id": "fc-anki-189",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "front": "O que a presença de rouquidão, evolução para paciente afebril e padrão intersticial na radiografia sugere em um quadro respiratório?",
    "backPearl": "Alta probabilidade de etiologia viral (como o vírus sincicial respiratório)."
  },
  {
    "id": "fc-anki-190",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "front": "Qual é o quadro clássico da pneumonia por *Chlamydia trachomatis*no lactente?",
    "backPearl": "Pneumonia afebril do lactente, frequentemente associada a conjuntivite neonatal e eosinofilia."
  },
  {
    "id": "fc-anki-191",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Pneumologia Pediátrica",
    "front": "Qual é a diferença na ausculta pulmonar entre a pneumonia pneumocócica e a pneumonia viral clássica?",
    "backPearl": "A pneumocócica apresenta achados focais (consolidação); a viral apresenta estertores finos difusos e bilaterais."
  },
  {
    "id": "fc-anki-192",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual é o medicamento considerado como primeira linha no manejo medicamentoso da bradicardia sintomática?",
    "backPearl": "Atropina"
  },
  {
    "id": "fc-anki-193",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Quando o uso de dopamina intravenosa se torna apropriado em quadros de bradicardia?",
    "backPearl": "Bradicardia sintomática mesmo após uso de atropina."
  },
  {
    "id": "fc-anki-194",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é a conduta médica correta ao atender uma paciente em UBS com gravidez indesejada e aflita?",
    "backPearl": "Assegurar informações clínicas e legais, garantir sigilo e orientar sobre sintomas de alarme em caso de aborto inseguro."
  },
  {
    "id": "fc-anki-195",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "Por que a terapia com estrogênio isolado é contraindicada no climatério para mulheres histerectomizadas que possuem histórico de endometriose?",
    "backPearl": "O estrogênio de forma isolada pode estimular o crescimento de focos de tecido endometrial residuais na pelve ou peritônio."
  },
  {
    "id": "fc-anki-196",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "A coleta do teste do pezinho pode ser realizada após o 28º dia de vida?",
    "backPearl": "Sim, essa é uma condição de exceção permitida em casos de difícil acesso aos serviços de saúde ou negligência."
  },
  {
    "id": "fc-anki-197",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é o período ideal recomendado para a realização da coleta do teste do pezinho?",
    "backPearl": "Entre o 3º e o 5º dia de vida do recém-nascido."
  },
  {
    "id": "fc-anki-198",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "O que caracteriza o estágio de Pré-contemplação no Modelo Transteórico de Mudança?",
    "backPearl": "A negação ou o não reconhecimento de que existe um problema a ser mudado."
  },
  {
    "id": "fc-anki-199",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Explique o estágio de Contemplação no contexto de mudança comportamental.",
    "backPearl": "É a fase em que o indivíduo reconhece o problema e suas consequências, mas apresenta ambivalência e ainda não tomou uma decisão firme para mudar."
  },
  {
    "id": "fc-anki-200",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "O que define o estágio de Preparação?",
    "backPearl": "A intenção clara de agir em um futuro próximo, acompanhada da elaboração de um plano de ação para a mudança."
  },
  {
    "id": "fc-anki-201",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Quais são os três pilares ou focos principais da Entrevista Motivacional?",
    "backPearl": "Empatia, evocação da motivação intrínseca e exploração da autonomia do paciente."
  },
  {
    "id": "fc-anki-202",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual é o critério espirométrico para classificar um paciente no Estágio 1 da DPOC (segundo GOLD)?",
    "backPearl": "VEF1 pós-broncodilatador maior ou igual a 80% do previsto."
  },
  {
    "id": "fc-anki-203",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "O que define o Estágio 2 da DPOC de acordo com a classificação GOLD?",
    "backPearl": "VEF1 pós-broncodilatador entre 50% e 79% do previsto."
  },
  {
    "id": "fc-anki-204",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual é o intervalo do VEF1 pós-broncodilatador que caracteriza o Estágio 3 da DPOC (GOLD 3)?",
    "backPearl": "VEF1 pós-broncodilatador entre 30% e 49% do previsto."
  },
  {
    "id": "fc-anki-205",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Quais são os critérios que definem o Estágio 4 (muito grave) da DPOC segundo a iniciativa GOLD?",
    "backPearl": "VEF1 pós-broncodilatador menor que 30% do previsto ou a presença de insuficiência respiratória crônica."
  },
  {
    "id": "fc-anki-206",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Como se calcula a porcentagem do VEF1 pós-broncodilatador do paciente em relação ao previsto?",
    "backPearl": "Dividindo o valor absoluto obtido do VEF1 pós-broncodilatador pelo valor de referência previsto para o paciente."
  },
  {
    "id": "fc-anki-207",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são os achados clínicos sugestivos de toxoplasmose congênita?",
    "backPearl": "Coriorretinite\nCalcificações cerebrais difusas\nHidrocefalia"
  },
  {
    "id": "fc-anki-208",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Explique a tríade clássica da rubéola congênita (Síndrome de Gregg).",
    "backPearl": "Catarata\nSurdez\nCardiopatias"
  },
  {
    "id": "fc-anki-209",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais sinais mucocutâneos são característicos da sífilis congênita precoce?",
    "backPearl": "Pênfigo palmoplantar\nRinite serossanguinolenta\nFissuras periorais e perianais"
  },
  {
    "id": "fc-anki-210",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Como se apresenta classicamente o herpes simples congênito/neonatal?",
    "backPearl": "Lesões cutâneas vesiculares, encefalite e manifestações oculares (como conjuntivite ou ceratite)."
  },
  {
    "id": "fc-anki-211",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são os principais achados de imagem no citomegalovírus (CMV) congênito?",
    "backPearl": "Calcificações cerebrais periventriculares.\nMicrocefalia"
  },
  {
    "id": "fc-anki-212",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Transplante / Doação de Órgãos",
    "front": "Explique por que um paciente anti-HBs positivo e HBsAg negativo está apto para a doação de órgãos.",
    "backPearl": "Esse perfil sorológico indica imunidade contra a hepatite B (por vacina ou infecção curada), não apresentando risco de transmissão da doença ativa."
  },
  {
    "id": "fc-anki-213",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Transplante / Doação de Órgãos",
    "front": "O desejo documentado em vida de ser doador de órgãos prevalece sobre a recusa familiar no momento do óbito?",
    "backPearl": "Não. A autorização familiar é obrigatória e soberana, mesmo diante do consentimento prévio do falecido."
  },
  {
    "id": "fc-anki-214",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Quais são as principais deficiências nutricionais suspeitas em um lactente em aleitamento materno com dieta complementar estritamente vegana?",
    "backPearl": "Deficiência de vitamina B12 e deficiência de ferro."
  },
  {
    "id": "fc-anki-215",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Segundo a Sociedade Brasileira de Pediatria, qual é a conduta para lactentes em aleitamento materno filhos de mães veganas não suplementadas?",
    "backPearl": "Iniciar a suplementação de vitamina B12 para a criança precocemente para evitar danos neurológicos irreversíveis."
  },
  {
    "id": "fc-anki-216",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Por que o ácido fólico não é a prioridade no tratamento de anemia macrocítica em crianças com dieta vegana?",
    "backPearl": "Porque a dieta vegana (rica em vegetais e grãos) costuma fornecer quantidades adequadas de ácido fólico, sendo a deficiência de B12 a causa quase exclusiva da macrocitose nesse grupo."
  },
  {
    "id": "fc-anki-217",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Além da anemia, qual é o impacto da deficiência de ferro não tratada no primeiro ano de vida?",
    "backPearl": "Prejuízo no desenvolvimento cognitivo e motor, que pode ser irreversível."
  },
  {
    "id": "fc-anki-218",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual é o exame de rastreamento inicial para câncer colorretal recomendado pelo SUS para pacientes assintomáticos de risco habitual?",
    "backPearl": "Exame de pesquisa de sangue oculto nas fezes (PSOF)."
  },
  {
    "id": "fc-anki-219",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual é a faixa etária recomendada pelo Ministério da Saúde para o rastreamento do câncer colorretal na população de risco habitual?",
    "backPearl": "Dos 50 aos 75 anos."
  },
  {
    "id": "fc-anki-220",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Quando a colonoscopia está indicada no fluxo de rastreamento de pacientes de risco habitual no SUS?",
    "backPearl": "Após um resultado positivo no exame de sangue oculto nas fezes.\nSinais de alarme."
  },
  {
    "id": "fc-anki-221",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Quais espécies animais são passíveis de observação clínica de 10 dias no protocolo de profilaxia da raiva do SUS?",
    "backPearl": "Apenas cães e gatos."
  },
  {
    "id": "fc-anki-222",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "É permitido postergar a profilaxia antirrábica para observar um bovino agressor de propriedade conhecida?",
    "backPearl": "Não. A observação é restrita a cães e gatos."
  },
  {
    "id": "fc-anki-223",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Qual é a conduta profilática para um acidente leve (ferida superficial) causado por animal de interesse econômico?",
    "backPearl": "Lavar a ferida com água e sabão e iniciar imediatamente o esquema de vacinação com 4 doses (dias 0, 3, 7 e 14)."
  },
  {
    "id": "fc-anki-224",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Quando está indicado o uso de soro antirrábico em acidentes com animais de interesse econômico (ex: bovinos e equinos)?",
    "backPearl": "Apenas em acidentes graves (ferimentos profundos, múltiplos ou em áreas nobres como cabeça, face, pescoço e extremidades)."
  },
  {
    "id": "fc-anki-225",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Puericultura e Desenvolvimento",
    "front": "Por que o encaminhamento imediato ao especialista com exames de imagem não é a primeira conduta para atraso isolado de desenvolvimento?",
    "backPearl": "Porque exames de imagem têm indicações restritas (ex: microcefalia, macrocefalia, convulsões).\nA grande maioria dos atrasos isolados do desenvolvimento decorre de privação ambiental, estímulo inadequado ou variações do neurodesenvolvimento que não possuem tradução estrutural na imagem"
  },
  {
    "id": "fc-anki-226",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Por que a retocolite ulcerativa é um dado relevante na história patológica pregressa de um paciente com endocardite?",
    "backPearl": "Lesões na mucosa intestinal aumentam a translocação bacteriana para a corrente sanguínea."
  },
  {
    "id": "fc-anki-227",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é a conduta inicial mandatória diante de uma criança com dor abdominal aguda e fecaloma palpável?",
    "backPearl": "Desimpactação fecal (com enema retal ou polietilenoglicol em doses altas por via oral)."
  },
  {
    "id": "fc-anki-228",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Por que lactulose e óleo mineral não são a primeira escolha na fase de desimpactação fecal aguda na pediatria?",
    "backPearl": "Porque são laxativos mais lentos, reservados primordialmente para a terapia de manutenção."
  },
  {
    "id": "fc-anki-229",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é o medicamento de primeira escolha tanto para desimpactação quanto para a manutenção da constipação funcional segundo a SBP?",
    "backPearl": "Polietilenoglicol (PEG 4000 sem eletrólitos)."
  },
  {
    "id": "fc-anki-230",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "O que a presença de massa palpável em fossa ilíaca esquerda associada a fezes em cíbalos sugere no exame clínico pediátrico?",
    "backPearl": "Fecaloma (impactação fecal no cólon sigmoide e reto)."
  },
  {
    "id": "fc-anki-231",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é a periodicidade mínima de evacuações para suspeitar de constipação crônica na infância?",
    "backPearl": "Duas ou menos evacuações por semana."
  },
  {
    "id": "fc-anki-232",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "A partir de qual idade gestacional é eticamente permitida a realização de cesariana eletiva a pedido materno no Brasil?",
    "backPearl": "A partir de 39 semanas completas de gestação."
  },
  {
    "id": "fc-anki-233",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é a conduta inicial do médico da Atenção Básica quando a gestante manifesta desejo por cesariana sem indicação clínica?",
    "backPearl": "Acolher as dúvidas, esclarecer riscos e benefícios de cada via de parto e registrar a discussão no prontuário."
  },
  {
    "id": "fc-anki-234",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "É permitido adiar a investigação diagnóstica de um nódulo mamário até o término da gestação ou lactação?",
    "backPearl": "Não, a propedêutica deve ser imediata devido ao risco de retardo diagnóstico de câncer de mama gestacional."
  },
  {
    "id": "fc-anki-235",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "A mamografia pode ser realizada durante a gravidez em caso de suspeita diagnóstica?",
    "backPearl": "Sim, desde que realizada com blindagem (proteção) abdominal de chumbo para segurança fetal."
  },
  {
    "id": "fc-anki-236",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Qual critério de histórico familiar de câncer de mama indica alto risco genético/hereditário?",
    "backPearl": "Parente de primeiro grau diagnosticado com câncer de mama antes dos 50 anos (ou câncer de mama bilateral/ovário)."
  },
  {
    "id": "fc-anki-237",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é o papel da biópsia mamária (percutânea) diante de lesão suspeita na gestação?",
    "backPearl": "Está indicada após a avaliação por imagem que classifique a lesão como suspeita (BI-RADS 4 ou 5).\nAvaliar benigno/maligno."
  },
  {
    "id": "fc-anki-238",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "A presença isolada de nódulo mamário em investigação exige encaminhamento imediato ao pré-natal de alto risco?",
    "backPearl": "Não, a propedêutica inicial com exames de imagem deve ser solicitada e coordenada na própria Atenção Primária à Saúde."
  },
  {
    "id": "fc-anki-239",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a faixa de dose diária de ferro elementar recomendada pela SBP para o tratamento de anemia ferropriva na infância?",
    "backPearl": "De 3 a 6 mg/kg/dia de ferro elementar."
  },
  {
    "id": "fc-anki-240",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Para que finalidade a dose de 1 a 2 mg/kg/dia de ferro elementar é utilizada na pediatria?",
    "backPearl": "Profilaxia da deficiência de ferro."
  },
  {
    "id": "fc-anki-241",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Por quanto tempo deve ser mantida a reposição de ferro elementar após a normalização dos níveis de hemoglobina?",
    "backPearl": "Por 3 meses adicionais (ou até a normalização da ferritina) para recompor os estoques corporais de ferro."
  },
  {
    "id": "fc-anki-242",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a alteração laboratorial típica dos índices hematimétricos na anemia ferropriva?",
    "backPearl": "Anemia microcítica e hipocrômica com RDW (amplitude de distribuição dos glóbulos vermelhos) elevado."
  },
  {
    "id": "fc-anki-243",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual orientação prática sobre o horário de administração do ferro oral melhora sua biodisponibilidade?",
    "backPearl": "Administrar preferencialmente em jejum ou 1 hora antes das refeições, associado a fontes de vitamina C e distante de laticínios."
  },
  {
    "id": "fc-anki-244",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a primeira resposta laboratorial esperada e precoce ao tratamento adequado com ferro oral?",
    "backPearl": "Pico de reticulócitos entre o 5º e o 10º dia após o início do tratamento."
  },
  {
    "id": "fc-anki-245",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é o medicamento de primeira linha para o tratamento clínico conservador da gravidez ectópica íntegra?",
    "backPearl": "Metotrexato por via intramuscular."
  },
  {
    "id": "fc-anki-246",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Quais são os três critérios clínicos e ultrassonográficos clássicos para indicar metotrexato na gravidez ectópica?",
    "backPearl": "Estabilidade hemodinâmica, massa anexial menor que 3,5 a 4 cm e ausência de batimentos cardíacos embrionários."
  },
  {
    "id": "fc-anki-247",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é o ponto de corte habitual do beta-hCG sérico para considerar indicação favorável ao metotrexato?",
    "backPearl": "Beta-hCG menor que 5.000 mUI/mL."
  },
  {
    "id": "fc-anki-248",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Em qual situação a conduta expectante pode ser considerada na gravidez ectópica?",
    "backPearl": "Paciente assintomática, estável e com títulos de beta-hCG baixos (geralmente menores que 1.000 a 1.500 mUI/mL) em declínio espontâneo documentado."
  },
  {
    "id": "fc-anki-249",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Quando a abordagem cirúrgica (laparotomia ou laparoscopia) torna-se mandatória na gravidez ectópica?",
    "backPearl": "Diante de instabilidade hemodinâmica, sinais de abdome agudo hemorrágico ou contraindicações ao metotrexato."
  },
  {
    "id": "fc-anki-250",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é a queda percentual esperada do beta-hCG entre o D4 e o D7 para considerar o tratamento com metotrexato eficaz?",
    "backPearl": "Queda de pelo menos 15% nos níveis séricos."
  },
  {
    "id": "fc-anki-251",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Em caso de divergência entre a diretiva antecipada do paciente e o pedido de familiares, qual vontade prevalece?",
    "backPearl": "A diretiva antecipada do próprio paciente prevalece sobre a vontade dos familiares."
  },
  {
    "id": "fc-anki-252",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "O registro em cartório é obrigatório para a validade das diretivas antecipadas de vontade?",
    "backPearl": "Não, basta o registro em prontuário médico feito pelo médico assistente a pedido do paciente."
  },
  {
    "id": "fc-anki-253",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual é a classe medicamentosa de primeira escolha para o alívio da dispneia em cuidados paliativos de fim de vida?",
    "backPearl": "Opioides (com destaque para a morfina por via parenteral ou oral)."
  },
  {
    "id": "fc-anki-254",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Como a morfina atua no alívio sintomático da dispneia em pacientes oncológicos paliativos?",
    "backPearl": "Reduz a sensação de esforço respiratório, modula os centros respiratórios e diminui a ansiedade associada ao desconforto ventilatório."
  },
  {
    "id": "fc-anki-255",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "O que a imagem radiológica de corpo estranho circular com duplo contorno sugere?",
    "backPearl": "Bateria de botão (pilha de lítio/disco)."
  },
  {
    "id": "fc-anki-256",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Por que a presença de bateria de botão na fossa nasal é considerada uma emergência médica?",
    "backPearl": "Porque a liberação de corrente elétrica e substâncias alcalinas causa necrose tecidual e perfuração septal em poucas horas (menos de 2 a 4 horas)."
  },
  {
    "id": "fc-anki-257",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Qual é a conduta médica imediata diante da suspeita de bateria de botão impactada no nariz?",
    "backPearl": "Encaminhamento ou transferência imediata para remoção urgente por especialista sob visualização direta (como nasofibroscopia)."
  },
  {
    "id": "fc-anki-258",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Por que a lavagem nasal está contraindicada na suspeita de bateria de botão em cavidade nasal?",
    "backPearl": "A água ou soro acelera a reação eletroquímica e a condução elétrica da bateria, agravando as queimaduras cáusticas e necrose da mucosa."
  },
  {
    "id": "fc-anki-259",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é o momento oportuno para inscrever a criança com LLA em centro de referência para TMO?",
    "backPearl": "Tão logo seja confirmada a falha na terapia de indução (ou outro critério formal de alto risco/refratariedade)."
  },
  {
    "id": "fc-anki-260",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a neoplasia maligna mais comum na faixa etária pediátrica frequentemente cobrada no ENARE?",
    "backPearl": "Leucemia linfocítica aguda (LLA)."
  },
  {
    "id": "fc-anki-261",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é o exame laboratorial inicial de escolha na UBS diante da suspeita de leucemia aguda na criança?",
    "backPearl": "Hemograma completo com análise cuidadosa da lâmina de sangue periférico (presença de blastos e pancitopenia/leucocitose)."
  },
  {
    "id": "fc-anki-262",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Em qual faixa etária o Ministério da Saúde preconiza a aplicação de 2 doses da vacina contra febre amarela?",
    "backPearl": "Crianças menores de 5 anos (dose inicial aos 9 meses e reforço aos 4 anos de idade)."
  },
  {
    "id": "fc-anki-263",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Qual é a conduta da equipe da Atenção Básica ao ser informada sobre um macaco encontrado morto?",
    "backPearl": "Notificar imediatamente a Vigilância Epidemiológica municipal para investigação e coleta de amostras do animal."
  },
  {
    "id": "fc-anki-264",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "front": "Qual achado no exame de urina confirma a suspeita de cálculo renal e afasta infecção?",
    "backPearl": "Presença de hematúria significativa associada à ausência de nitritos."
  },
  {
    "id": "fc-anki-265",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "front": "Qual o tratamento inicial recomendado para litíase renal aguda não complicada?",
    "backPearl": "Analgesia para controle da dor e hidratação."
  },
  {
    "id": "fc-anki-266",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "front": "Em quais situações a cirurgia de urgência é indicada no paciente com litíase renal?",
    "backPearl": "Casos de obstrução completa com risco de perda renal, infecção associada ou dor refratária."
  },
  {
    "id": "fc-anki-267",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Como se descreve classicamente a lesão da úlcera venosa sem infecção secundária?",
    "backPearl": "Lesão superficial, com bordas elevadas e presença de tecido de granulação no leito."
  },
  {
    "id": "fc-anki-268",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Qual é a base do tratamento clínico conservador para a úlcera venosa na atenção primária?",
    "backPearl": "Terapia compressiva (como meias de média compressão) associada à elevação das pernas."
  },
  {
    "id": "fc-anki-269",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "A bota de Unna é uma opção válida para o tratamento da úlcera venosa?",
    "backPearl": "Sim, é uma excelente terapia compressiva, porém não deve ser associada a atividades físicas intensas que sobrecarreguem o membro."
  },
  {
    "id": "fc-anki-270",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual o principal objetivo do terceiro tempo da manobra de Leopold?",
    "backPearl": "Identificar a apresentação fetal e avaliar a sua mobilidade no estreito superior da pelve materna."
  },
  {
    "id": "fc-anki-271",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "O que define a situação fetal longitudinal?",
    "backPearl": "É a coincidência (paralelismo) entre o maior eixo longitudinal do feto e o maior eixo do útero materno."
  },
  {
    "id": "fc-anki-272",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é a apresentação fetal obrigatória quando o feto se encontra em situação transversa?",
    "backPearl": "Apresentação córmica (ombro)."
  },
  {
    "id": "fc-anki-273",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual a conduta inicial obrigatória para um recém-nascido assintomático com fatores de risco para hipoglicemia no alojamento conjunto?",
    "backPearl": "Monitorização seriada da glicemia capilar associada ao incentivo ao aleitamento materno precoce."
  },
  {
    "id": "fc-anki-274",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quando está indicada a reposição de glicose endovenosa no manejo da hipoglicemia neonatal?",
    "backPearl": "Em casos de recém-nascidos francamente sintomáticos ou com hipoglicemia persistente/grave a despeito da otimização da oferta enteral."
  },
  {
    "id": "fc-anki-275",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são os sinais clínicos clássicos de hipoglicemia neonatal que indicariam a necessidade de terapia endovenosa imediata?",
    "backPearl": "Letargia, crises convulsivas, tremores, hipotonia, recusa alimentar e apneia."
  },
  {
    "id": "fc-anki-276",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é o critério obrigatório em relação ao colo uterino para a aplicação de fórceps?",
    "backPearl": "Dilatação cervical total (10 cm)."
  },
  {
    "id": "fc-anki-277",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Como deve estar a bolsa amniótica para permitir a aplicação segura do fórceps?",
    "backPearl": "As membranas amnióticas devem estar obrigatoriamente rotas."
  },
  {
    "id": "fc-anki-278",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é a altura mínima da apresentação fetal (plano de De Lee) exigida para a aplicação do fórceps?",
    "backPearl": "A apresentação deve estar obrigatoriamente insinuada (plano 0 de De Lee ou inferior/positivo)."
  },
  {
    "id": "fc-anki-279",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Por que a aplicação do fórceps no plano -1 de De Lee é contraindicada?",
    "backPearl": "Porque nesse plano a cabeça fetal ainda não está insinuada na pelve materna."
  },
  {
    "id": "fc-anki-280",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Epidemiologia e Vigilância",
    "front": "Como a cólera é classificada na lista nacional de doenças de notificação do Ministério da Saúde?",
    "backPearl": "É uma doença de notificação compulsória imediata (em até 24 horas) às autoridades de saúde."
  },
  {
    "id": "fc-anki-281",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual é o antibiótico de escolha nas diretrizes brasileiras para o tratamento da cólera em crianças menores de oito anos?",
    "backPearl": "Azitromicina"
  },
  {
    "id": "fc-anki-282",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Como se classifica uma fístula digestiva com débito de 150 mL/dia?",
    "backPearl": "Fístula de baixo débito (débito inferior a 200 mL em 24 horas)."
  },
  {
    "id": "fc-anki-283",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual a utilidade do teste de Coombs direto negativo na investigação da icterícia neonatal prolongada?",
    "backPearl": "Afasta causas hemolíticas imunomediadas, tornando a incompatibilidade sanguínea uma causa menos provável para a gravidade do quadro."
  },
  {
    "id": "fc-anki-284",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "O que é a galactosemia e qual a sua relação temporal com a dieta do recém-nascido?",
    "backPearl": "Incapacidade de metabolizar a galactose; os sintomas surgem rapidamente após a introdução de leite materno ou fórmulas tradicionais."
  },
  {
    "id": "fc-anki-285",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são as manifestações clínicas clássicas da galactosemia clássica não tratada nas primeiras semanas de vida?",
    "backPearl": "Icterícia, vômitos, hepatomegalia, letargia, déficit de ganho ponderal e alto risco de sepse por *Escherichia coli*."
  },
  {
    "id": "fc-anki-286",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual dado da história clínica permite afastar rapidamente a suspeita de galactosemia em um lactente ictérico?",
    "backPearl": "O ganho ponderal adequado em uso contínuo de fórmula láctea tradicional ou leite materno, sem a presença de vômitos."
  },
  {
    "id": "fc-anki-287",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é o diagnóstico laboratorial da gestante que apresenta TSH elevado e T4 livre baixo?",
    "backPearl": "Hipotireoidismo clínico."
  },
  {
    "id": "fc-anki-288",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual hormônio é o parâmetro de escolha para monitorar a eficácia do tratamento com levotiroxina na gestação?",
    "backPearl": "TSH (hormônio tireoestimulante)."
  },
  {
    "id": "fc-anki-289",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual a periodicidade recomendada para a dosagem do TSH no início do tratamento até que se atinja a meta terapêutica?",
    "backPearl": "Mensal (a cada 4 semanas)."
  },
  {
    "id": "fc-anki-290",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual complicação obstétrica importante é prevenida ao se manter o TSH dentro dos valores normais?",
    "backPearl": "Parto prematuro."
  },
  {
    "id": "fc-anki-291",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual o objetivo de solicitar a tomografia de tórax com contraste na avaliação de um nódulo pulmonar?",
    "backPearl": "Avaliar o padrão de captação e vascularização, auxiliando na diferenciação entre nódulos benignos e malignos."
  },
  {
    "id": "fc-anki-292",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Quais são os dois fármacos de primeira linha recomendados para o tratamento do transtorno por uso de álcool (redução de fissura)?",
    "backPearl": "Naltrexona e acamprosato."
  },
  {
    "id": "fc-anki-293",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e Emergência Cirúrgica",
    "front": "Qual a manobra manual preferencial para desobstrução de vias aéreas no paciente politraumatizado?",
    "backPearl": "Tração anterior da mandíbula (jaw thrust), desenhada para evitar a mobilização do pescoço."
  },
  {
    "id": "fc-anki-294",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e Emergência Cirúrgica",
    "front": "Por que a manobra de inclinação da cabeça com extensão cervical é proscrita no atendimento ao trauma?",
    "backPearl": "Porque a extensão do pescoço pode causar ou agravar lesões irreversíveis na medula espinhal."
  },
  {
    "id": "fc-anki-295",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual a principal suspeita clínica diante de alta drenagem de secreção clara pelo dreno abdominal após gastroduodenopancreatectomia?",
    "backPearl": "Fístula pancreática."
  },
  {
    "id": "fc-anki-296",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o critério de tempo de tosse para investigar tuberculose pulmonar na população em situação de rua?",
    "backPearl": "Qualquer tempo de duração da tosse."
  },
  {
    "id": "fc-anki-297",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual é o exame de primeira escolha no SUS para o diagnóstico inicial de tuberculose pulmonar?",
    "backPearl": "Teste rápido molecular para tuberculose (TRM-TB)."
  },
  {
    "id": "fc-anki-298",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Neurologia e Geriatria",
    "front": "Qual complicação neurológica irreversível tenta-se prevenir ou tratar ao se avaliar a deficiência de tiamina em etilistas crônicos?",
    "backPearl": "Síndrome de Wernicke-Korsakoff."
  },
  {
    "id": "fc-anki-299",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "Qual a conduta imediata para recém-nascidos e lactentes menores de 3 meses com suspeita de infecção do trato urinário febril?",
    "backPearl": "Internação hospitalar obrigatória e início de antibioticoterapia parenteral empírica."
  },
  {
    "id": "fc-anki-300",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Nefrologia Pediátrica",
    "front": "Qual é o exame de imagem inicial recomendado pela SBP após o primeiro episódio de ITU febril em crianças menores de 2 anos?",
    "backPearl": "Ultrassonografia de rins e vias urinárias, geralmente realizada após o término do tratamento ou na fase de resolução da fase aguda."
  },
  {
    "id": "fc-anki-301",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Quais são os critérios diagnósticos para pré-eclâmpsia?",
    "backPearl": "Pressão arterial maior ou igual a 140/90 mmHg após a 20ª semana de gestação, associada à proteinúria maior ou igual a 300 mg em 24 horas."
  },
  {
    "id": "fc-anki-302",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Quais são as vacinas preconizadas pelo Programa Nacional de Imunizações para a criança aos 15 meses de idade?",
    "backPearl": "Hepatite A, Tetraviral (ou Tríplice Viral + Varicela), DTP (1º reforço) e Poliomielite (1º reforço)."
  },
  {
    "id": "fc-anki-303",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual vacina de dose única (no calendário de rotina) é introduzida exatamente aos 15 meses de idade?",
    "backPearl": "Vacina contra hepatite A."
  },
  {
    "id": "fc-anki-304",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Infectologia Pediátrica",
    "front": "Qual a principal hipótese diagnóstica para adolescente com astenia, tonsilite exsudativa, linfonodomegalia cervical posterior e petéquias no palato?",
    "backPearl": "Mononucleose infecciosa."
  },
  {
    "id": "fc-anki-305",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é o risco iminente de hemólise quando uma mãe tem tipagem sanguínea O- e o recém-nascido é B+?",
    "backPearl": "Doença hemolítica do recém-nascido por dupla incompatibilidade (sistema ABO e sistema Rh)."
  },
  {
    "id": "fc-anki-306",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual taxa de elevação da bilirrubina total indica falha da fototerapia e necessidade de exsanguineotransfusão em quadros hemolíticos?",
    "backPearl": "Aumento da bilirrubina total igual ou superior a 0,5 mg/dL/hora."
  },
  {
    "id": "fc-anki-307",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Por que a imunoglobulina intravenosa não substitui a exsanguineotransfusão em casos de elevação rápida da bilirrubina?",
    "backPearl": "Porque a exsanguineotransfusão é o único método capaz de remover mecanicamente e rapidamente a bilirrubina excedente e os anticorpos circulantes."
  },
  {
    "id": "fc-anki-308",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual achado na monitorização ambulatorial da pressão arterial (MAPA) é altamente característico do feocromocitoma?",
    "backPearl": "Hipertensão paroxística (oscilações importantes e picos pressóricos repentinos)."
  },
  {
    "id": "fc-anki-309",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Quais são os três sintomas clássicos que compõem a tríade do feocromocitoma?",
    "backPearl": "Cefaleia episódica, sudorese e taquicardia (palpitações)."
  },
  {
    "id": "fc-anki-310",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é a conduta diagnóstica inicial mandatória para recém-nascidos com suspeita clínica de distúrbio da diferenciação sexual?",
    "backPearl": "Solicitação de cariótipo para confirmação do sexo biológico genético e de exames hormonais."
  },
  {
    "id": "fc-anki-311",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é a orientação ética e legal sobre o registro civil de recém-nascidos com distúrbio da diferenciação sexual não esclarecido?",
    "backPearl": "A família deve ser aconselhada a adiar a definição do sexo no registro civil até a conclusão da investigação pela equipe multidisciplinar."
  },
  {
    "id": "fc-anki-312",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quando suspeitar de distúrbio da diferenciação sexual em um recém-nascido com genitália de aparência tipicamente masculina?",
    "backPearl": "Quando houver criptorquidia bilateral (testículos não palpáveis no escroto ou canal inguinal)."
  },
  {
    "id": "fc-anki-313",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Quais são os dois principais agentes etiológicos causadores de cervicite?",
    "backPearl": "*Neisseria gonorrhoeae* e *Chlamydia trachomatis*."
  },
  {
    "id": "fc-anki-314",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Qual característica clássica do corrimento vaginal sugere infecção por *Trichomonas vaginalis*?",
    "backPearl": "Corrimento abundante, amarelo-esverdeado e bolhoso, acompanhado de pH elevado e, frequentemente, colpite macular (colo em framboesa)."
  },
  {
    "id": "fc-anki-315",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Por que a vaginose bacteriana é um diagnóstico incorreto para uma paciente com secreção mucopurulenta e colo friável?",
    "backPearl": "Porque a vaginose cursa com corrimento homogêneo, odor fétido (Whiff positivo) e pH maior que 4,5, sem sinais inflamatórios exuberantes no colo."
  },
  {
    "id": "fc-anki-316",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Qual é o padrão esperado para o pH vaginal e o teste das aminas (Whiff test) em um quadro exclusivo de cervicite?",
    "backPearl": "pH vaginal normal (menor ou igual a 4,5) e teste de Whiff negativo."
  },
  {
    "id": "fc-anki-317",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "O óbito de uma gestante por insuficiência respiratória devido à Covid-19 entra no cálculo da mortalidade materna?",
    "backPearl": "Sim, é classificado como óbito materno obstétrico indireto, pois trata-se de uma doença intercorrente agravada pelos efeitos fisiológicos da gestação."
  },
  {
    "id": "fc-anki-318",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Quais são os critérios clínicos do Ministério da Saúde para definir um nascido vivo, independentemente do peso (ex: 450g) ou idade gestacional?",
    "backPearl": "Presença de respiração, batimentos cardíacos, pulsação do cordão umbilical ou movimentos efetivos de músculos de contração voluntária após a extração do corpo materno."
  },
  {
    "id": "fc-anki-319",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Um recém-nascido que apresenta batimentos cardíacos por apenas 10 segundos e vai a óbito logo em seguida deve ser incluído na taxa de natalidade?",
    "backPearl": "Sim, pois preenche os critérios definitivos de nascido vivo."
  },
  {
    "id": "fc-anki-320",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual é o modelo de gestão de agenda na atenção primária que divide rigidamente as vagas entre demanda programada e demanda espontânea (ex: 60% e 40%)?",
    "backPearl": "Modelo carve-out."
  },
  {
    "id": "fc-anki-321",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual é a principal desvantagem ou risco da implantação do modelo carve-out na unidade básica de saúde?",
    "backPearl": "O desperdício de vagas (ociosidade) caso a demanda espontânea do dia seja menor do que a porcentagem engessada."
  },
  {
    "id": "fc-anki-322",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual modelo de agenda propõe o princípio de \"fazer o trabalho de hoje, hoje\", focando em atender a demanda no mesmo dia sem segmentação rígida?",
    "backPearl": "Acesso avançado."
  },
  {
    "id": "fc-anki-323",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Quais são os quatro achados clínicos e laboratoriais que caracterizam a síndrome nefrítica?",
    "backPearl": "Hematúria (geralmente com dismorfismo eritrocitário), hipertensão arterial, edema e proteinúria subnefrótica (menor que 3,5 g/24h)."
  },
  {
    "id": "fc-anki-324",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "O que a presença de dismorfismo eritrocitário no exame de urina (EAS) sugere fortemente?",
    "backPearl": "Sangramento de origem glomerular, sendo um marcador clássico das síndromes nefríticas."
  },
  {
    "id": "fc-anki-325",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "Qual é a glomerulopatia primária mais comum no mundo, frequentemente associada à síndrome nefrítica?",
    "backPearl": "Nefropatia por IgA (doença de Berger)."
  },
  {
    "id": "fc-anki-326",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual exame laboratorial é obrigatório para confirmar o diagnóstico em recém-nascidos com fenótipo sugestivo de síndrome de Down?",
    "backPearl": "Cariótipo (estudo cromossômico)."
  },
  {
    "id": "fc-anki-327",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são as três principais justificativas clínicas para a solicitação do cariótipo na suspeita de síndrome de Down?",
    "backPearl": "Confirmação diagnóstica, avaliação de possível mosaicismo e pesquisa de translocações do cromossomo 21."
  },
  {
    "id": "fc-anki-328",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "O fenótipo clássico de síndrome de Down associado à idade materna avançada (maior que 35 anos) dispensa a realização do cariótipo?",
    "backPearl": "Não, o exame cromossômico nunca deve ser dispensado, independentemente da idade materna ou da clareza dos sinais clínicos."
  },
  {
    "id": "fc-anki-329",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "É necessário manter o recém-nascido internado aguardando o resultado do cariótipo para programar a alta hospitalar?",
    "backPearl": "Não, a alta pode ser concedida se o paciente estiver clinicamente estável, devendo o seguimento do exame ocorrer ambulatorialmente."
  },
  {
    "id": "fc-anki-330",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é o achado clínico fundamental que diferencia o aborto inevitável da ameaça de aborto?",
    "backPearl": "Dilatação do orifício interno do colo uterino, presente no aborto inevitável e ausente na ameaça de aborto."
  },
  {
    "id": "fc-anki-331",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Como se caracteriza clinicamente e ultrassonograficamente o diagnóstico de aborto inevitável?",
    "backPearl": "Sangramento transvaginal e cólicas com colo uterino dilatado, associados a um embrião ou feto ainda retido na cavidade uterina."
  },
  {
    "id": "fc-anki-332",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Parto e Puerpério",
    "front": "Qual é a apresentação clínica e ultrassonográfica típica do aborto retido?",
    "backPearl": "Embrião ou feto sem sinais de vitalidade retido na cavidade uterina, associado a um colo uterino fechado, muitas vezes sem sintomas ativos de sangramento ou cólicas."
  },
  {
    "id": "fc-anki-333",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é a complicação biliar mais comum associada à rápida perda de peso no pós-operatório de cirurgia bariátrica?",
    "backPearl": "Colelitíase."
  },
  {
    "id": "fc-anki-334",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Entre a gastrectomia vertical (Sleeve) e o bypass gástrico em Y de Roux, qual apresenta maior risco clássico de desenvolver síndrome de Dumping?",
    "backPearl": "Bypass gástrico em Y de Roux, devido à exclusão pilórica e ao rápido esvaziamento gástrico para o jejuno."
  },
  {
    "id": "fc-anki-335",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual é o benefício central das intervenções em grupo no tratamento do tabagismo na Atenção Básica?",
    "backPearl": "A promoção da abstinência por meio da interação social, do apoio mútuo entre os participantes e da facilitação ativa pelo profissional de saúde."
  },
  {
    "id": "fc-anki-336",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "O que avalia especificamente o Teste de Fagerström na consulta do paciente tabagista?",
    "backPearl": "O grau de dependência física à nicotina."
  },
  {
    "id": "fc-anki-337",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Quais são as duas perguntas de maior peso preditivo no Teste de Fagerström?",
    "backPearl": "O tempo que o paciente leva para fumar o primeiro cigarro após acordar e a quantidade de cigarros fumados por dia."
  },
  {
    "id": "fc-anki-338",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual resposta no Teste de Fagerström aponta para a dependência mais grave (pontuação máxima) em relação ao horário de acordar?",
    "backPearl": "Fumar o primeiro cigarro nos primeiros 5 minutos após despertar."
  },
  {
    "id": "fc-anki-339",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual é a indicação terapêutica do Ministério da Saúde para pacientes com pontuação elevada no Teste de Fagerström (geralmente acima de 5)?",
    "backPearl": "Associação obrigatória do aconselhamento com a terapia medicamentosa (como terapia de reposição de nicotina ou bupropiona)."
  },
  {
    "id": "fc-anki-340",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Qual é o principal efeito colateral neurológico que contraindica o uso de bupropiona em pacientes com epilepsia?",
    "backPearl": "A redução do limiar convulsivo."
  },
  {
    "id": "fc-anki-341",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "A bupropiona é contraindicada em pacientes com histórico de quais dois principais transtornos alimentares?",
    "backPearl": "Anorexia nervosa e bulimia nervosa."
  },
  {
    "id": "fc-anki-342",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "Em pacientes tabagistas com histórico de convulsões, qual fármaco de primeira linha é preferível à bupropiona?",
    "backPearl": "Vareniclina."
  },
  {
    "id": "fc-anki-343",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "O uso de bupropiona é contraindicado em indivíduos com histórico de convulsão febril na infância?",
    "backPearl": "Sim, antecedentes de convulsão febril são contraindicações ao uso."
  },
  {
    "id": "fc-anki-344",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Pneumologia",
    "front": "Qual achado clássico na radiografia de tórax indica infarto pulmonar secundário ao tromboembolismo pulmonar?",
    "backPearl": "Sinal de Hampton (imagem radiopaca em formato de cunha baseada na pleura)."
  },
  {
    "id": "fc-anki-345",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Medicina de Família e Comunidade",
    "front": "A bupropiona é contraindicada em pacientes com alcoolismo ativo?",
    "backPearl": "Sim, o alcoolismo é uma contraindicação formal ao uso da droga."
  },
  {
    "id": "fc-anki-346",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "**Síndrome de Rokitansky (Agenesia Mülleriana):** Apresenta cariótipo tipicamente masculino ou feminino?",
    "backPearl": "Feminino, **46, XX**"
  },
  {
    "id": "fc-anki-347",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Endocrinologia e Climatério",
    "front": "**Síndrome de Morris (Insensibilidade Androgênica):** Apresenta cariótipo tipicamente masculino ou feminino?",
    "backPearl": "Masculino, **46, XY**"
  },
  {
    "id": "fc-anki-348",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Reumatologia",
    "front": "Nome científico da antiga Púrpura de Henoch-Schönlein?",
    "backPearl": "Vasculite por IgA."
  },
  {
    "id": "fc-anki-349",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Quais são os sinais ósseos da sífilis congênita?",
    "backPearl": "Pseudoparalisia de Parrot.\nOsteocondrite e periostite."
  },
  {
    "id": "fc-anki-350",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "front": "O que causa deficiência de B12?",
    "backPearl": "Baixa ingesta de alimentos de origem animal.\nMedicamentos (IBP, Metformina).\nAnemia perniciosa."
  },
  {
    "id": "fc-anki-351",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual a conduta do Ministério da Saúde para úlceras genitais sem vesículas e com menos de 4 semanas?",
    "backPearl": "Tratamento empírico simultâneo para sífilis primária e cancro mole."
  },
  {
    "id": "fc-anki-352",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual o ponto de corte temporal no fluxograma nacional para classificar uma úlcera genital como crônica?",
    "backPearl": "Mais de 4 semanas de evolução."
  },
  {
    "id": "fc-anki-353",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Quais as principais suspeitas clínicas para úlceras genitais com evolução superior a 4 semanas?",
    "backPearl": "Donovanose, linfogranuloma venéreo e neoplasias."
  },
  {
    "id": "fc-anki-354",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Infectologia",
    "front": "Qual a conduta preconizada pelo PCDT brasileiro para o manejo de úlceras genitais crônicas?",
    "backPearl": "Realizar biópsia e investigar causas crônicas específicas."
  },
  {
    "id": "fc-anki-355",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a neoplasia maligna mais comum na faixa etária pediátrica no geral?",
    "backPearl": "Leucemia linfocítica aguda (LLA), correspondendo a cerca de 25% a 35% dos casos."
  },
  {
    "id": "fc-anki-356",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é o tumor sólido mais comum na infância?",
    "backPearl": "Tumores do sistema nervoso central (SNC)."
  },
  {
    "id": "fc-anki-357",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é o tumor sólido extracraniano mais comum na pediatria?",
    "backPearl": "Neuroblastoma."
  },
  {
    "id": "fc-anki-358",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Quais são as alterações clínicas clássicas frequentemente associadas ao quadro inicial da LLA em pré-escolares?",
    "backPearl": "Febre persistente, palidez, petéquias e dor óssea que pode acordar a criança à noite."
  },
  {
    "id": "fc-anki-359",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual distúrbio eletrolítico é uma complicação clássica observada na pancreatite aguda biliar?",
    "backPearl": "Hipocalcemia"
  },
  {
    "id": "fc-anki-360",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Como se denomina o espasmo carpal induzido ao manter o manguito inflado acima da pressão sistólica por três minutos?",
    "backPearl": "Sinal de Trousseau."
  },
  {
    "id": "fc-anki-361",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual achado semiológico se caracteriza pela contração perilabial após a percussão direta do nervo facial?",
    "backPearl": "Sinal de Chvostek."
  },
  {
    "id": "fc-anki-362",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual é a alteração marcante encontrada no eletrocardiograma de pacientes com hipocalcemia aguda?",
    "backPearl": "Alargamento do intervalo QT."
  },
  {
    "id": "fc-anki-363",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Quais são as queixas sensitivas iniciais mais comuns relatadas por pacientes em crise de hipocalcemia?",
    "backPearl": "Parestesias periorais e formigamento nas extremidades."
  },
  {
    "id": "fc-anki-364",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual o exame laboratorial específico para confirmar a etiologia autoimune da doença de Graves?",
    "backPearl": "Pesquisa de anticorpos do tipo TRAb."
  },
  {
    "id": "fc-anki-365",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual é o padrão esperado na cintilografia com iodo radioativo em pacientes com doença de Graves?",
    "backPearl": "Glândula hipercaptante."
  },
  {
    "id": "fc-anki-366",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual a principal indicação para a realização da punção aspirativa por agulha fina (PAAF) na tireoide?",
    "backPearl": "Avaliação de nódulos tireoidianos para afastar o risco de malignidade."
  },
  {
    "id": "fc-anki-367",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Contracepção",
    "front": "Quais métodos contraceptivos são contraindicados (categoria 4) em pacientes com malformações uterinas que distorcem a cavidade (ex: útero didelfo)?",
    "backPearl": "Dispositivos e sistemas intrauterinos (DIU de cobre, DIU de prata e SIU-levonorgestrel)."
  },
  {
    "id": "fc-anki-368",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é o volume e o tempo da **1ª fase** de expansão no Plano C para menores de 1 ano?",
    "backPearl": "**1ª etapa de expansão:** **30 ml/kg** administrados em **1 hora**"
  },
  {
    "id": "fc-anki-369",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Gastroenterologia Pediátrica",
    "front": "Qual é o volume e o tempo da **1ª fase** de expansão no Plano C para maiores de 1 ano?",
    "backPearl": "**1ª etapa de expansão:** **30 ml/kg** administrados em **30 minutos**"
  },
  {
    "id": "fc-anki-370",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "front": "Paciente idoso, tabagista, apresentando hematúria macroscópica. qual é a principal suspeita clínica na atenção básica?",
    "backPearl": "Câncer urotelial (câncer de bexiga) até que se prove o contrário."
  },
  {
    "id": "fc-anki-371",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "Qual achado tomográfico é o marcador mais característico de exposição ocupacional ao amianto?",
    "backPearl": "Espessamento e formação de placas pleurais parietais e viscerais."
  },
  {
    "id": "fc-anki-372",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "Quais são as principais consequências clínicas da exposição crônica a agrotóxicos na agricultura?",
    "backPearl": "Alterações neurológicas, declínio cognitivo e desenvolvimento de neoplasias."
  },
  {
    "id": "fc-anki-373",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde do Trabalhador",
    "front": "Qual é a complicação hematológica mais típica da exposição ocupacional prolongada ao benzeno?",
    "backPearl": "Pancitopenia."
  },
  {
    "id": "fc-anki-374",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a propedêutica diagnóstica inicial obrigatória para uma criança com cateter venoso central em quimioterapia que apresenta o primeiro pico febril?",
    "backPearl": "Coleta imediata de hemograma, provas inflamatórias, hemocultura de sangue periférico e hemocultura do cateter central."
  },
  {
    "id": "fc-anki-375",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Hematologia / Oncologia Pediátrica",
    "front": "Qual é a conduta imediata em relação ao cateter de longa permanência na criança imunossuprimida que inicia um quadro febril agudo?",
    "backPearl": "O dispositivo deve ser mantido inicialmente, sendo a remoção indicada apenas se for comprovado como a fonte da infecção."
  },
  {
    "id": "fc-anki-376",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é a conduta pré-operatória prioritária para um paciente com obesidade grau II e hérnia incisional assintomática?",
    "backPearl": "Encaminhar para tratamento multidisciplinar focado na perda ponderal antes de planejar a correção cirúrgica."
  },
  {
    "id": "fc-anki-377",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é a conduta obstétrica definitiva indicada para uma gestante de 35 semanas com pré-eclâmpsia com sinais de gravidade?",
    "backPearl": "Internação urgente para estabilização clínica e interrupção da gestação."
  },
  {
    "id": "fc-anki-378",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "É obrigatória a presença de proteinúria para o diagnóstico de pré-eclâmpsia em paciente com hipertensão gestacional e cefaleia refratária?",
    "backPearl": "Não, a presença de sinais de gravidade neurológicos já fecha o diagnóstico."
  },
  {
    "id": "fc-anki-379",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Qual é o diagnóstico clínico de uma gestante após 20 semanas com pressão arterial de 140/90 mmHg e cefaleia intensa refratária?",
    "backPearl": "Pré-eclâmpsia com sinais de gravidade."
  },
  {
    "id": "fc-anki-380",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é o principal fator de risco associado ao desenvolvimento da taquipneia transitória do recém-nascido?",
    "backPearl": "Parto cesáreo eletivo sem evolução prévia para o trabalho de parto."
  },
  {
    "id": "fc-anki-381",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Neonatologia",
    "front": "Qual é o perfil clássico do paciente e a evolução esperada na taquipneia transitória do recém-nascido?",
    "backPearl": "Recém-nascido a termo ou prematuro tardio com desconforto respiratório imediato que melhora entre 3 a 5 dias."
  },
  {
    "id": "fc-anki-382",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "É permitida a troca de acompanhante ao longo do processo de trabalho de parto, parto e pós-parto no SUS?",
    "backPearl": "Sim, a mudança é permitida para respeitar a vontade e o conforto emocional da gestante."
  },
  {
    "id": "fc-anki-383",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual é o esquema de resgate da vacina contra hepatite B para um adolescente de 11 anos sem comprovação vacinal?",
    "backPearl": "Administrar 3 doses (esquema 0, 1 e 6 meses)."
  },
  {
    "id": "fc-anki-384",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Como deve ser feita a primovacinação contra difteria e tétano em adolescentes sem histórico vacinal comprovado?",
    "backPearl": "Administrar 3 doses da vacina dupla adulto (dT)."
  },
  {
    "id": "fc-anki-385",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual é a indicação da vacina tríplice viral para indivíduos de 11 anos sem registro no cartão de vacinas?",
    "backPearl": "Administrar 2 doses, com intervalo mínimo de 30 dias entre elas."
  },
  {
    "id": "fc-anki-386",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual é o esquema atualizado (2024) da vacina HPV para adolescentes imunocompetentes de 9 a 14 anos?",
    "backPearl": "Dose única."
  },
  {
    "id": "fc-anki-387",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Qual vacina meningocócica está indicada como reforço ou dose única para adolescentes na faixa etária de 11 e 12 anos no SUS?",
    "backPearl": "Vacina meningocócica ACWY."
  },
  {
    "id": "fc-anki-388",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Como proceder em relação à vacinação contra febre amarela em adolescente sem histórico vacinal prévio?",
    "backPearl": "Administrar dose única."
  },
  {
    "id": "fc-anki-389",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Imunizações / Pediatria",
    "front": "Por que a vacina pentavalente não é utilizada no resgate vacinal de um paciente de 11 anos?",
    "backPearl": "Porque é indicada apenas para crianças menores de 7 anos; em adolescentes, os componentes são substituídos pelas vacinas dT e hepatite B isoladas."
  },
  {
    "id": "fc-anki-390",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "front": "Qual é a principal suspeita diagnóstica para um paciente idoso apresentando dores ósseas, lesões osteolíticas vertebrais e sonolência excessiva?",
    "backPearl": "Mieloma múltiplo."
  },
  {
    "id": "fc-anki-391",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Hematologia",
    "front": "Quais são as alterações clínicas e laboratoriais que compõem o mnemônico CRAB utilizado no rastreio do mieloma múltiplo?",
    "backPearl": "Hipercalcemia, disfunção renal, anemia e lesões ósseas."
  },
  {
    "id": "fc-anki-392",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual doença endócrina é um importante diagnóstico diferencial do mieloma múltiplo por também cursar com hipercalcemia e sintomas neurológicos?",
    "backPearl": "Hiperparatireoidismo"
  },
  {
    "id": "fc-anki-393",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Como se diferencia clinicamente a doença hemorroidária não complicada de uma fissura anal aguda?",
    "backPearl": "A doença hemorroidária manifesta-se predominantemente com sangramento indolor, enquanto a fissura cursa com dor intensa relacionada à evacuação."
  },
  {
    "id": "fc-anki-394",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Abdome Agudo e Digestiva",
    "front": "Qual é a característica da dor no abscesso perianal que o difere da fissura anal?",
    "backPearl": "A dor no abscesso é contínua e latejante, não restrita à tentativa de evacuação."
  },
  {
    "id": "fc-anki-395",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Como manter a proporção de massagem e ventilação em pediatria com dois socorristas sem via aérea avançada?",
    "backPearl": "Quinze compressões para duas ventilações."
  },
  {
    "id": "fc-anki-396",
    "grandeAreaId": "pediatria",
    "grandeArea": "Pediatria",
    "tema": "Emergências Pediátricas",
    "front": "Qual a frequência de ventilação na reanimação pediátrica após a inserção de via aérea avançada?",
    "backPearl": "Uma ventilação a cada dois a três segundos (vinte a trinta ventilações por minuto)."
  },
  {
    "id": "fc-anki-397",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual a conduta medicamentosa recomendada pela diretriz para ritmos como a assistolia logo após o acesso vascular?",
    "backPearl": "Administração precoce de epinefrina."
  },
  {
    "id": "fc-anki-398",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Qual é o sintoma clássico inicial da insuficiência arterial crônica em membros inferiores?",
    "backPearl": "Claudicação intermitente, que se caracteriza por dor ao caminhar que alivia com o repouso."
  },
  {
    "id": "fc-anki-399",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Como a dor da úlcera arterial se comporta ao elevar o membro inferior?",
    "backPearl": "A dor piora, pois a elevação dificulta ainda mais a perfusão arterial pela gravidade."
  },
  {
    "id": "fc-anki-400",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Quais são as características macroscópicas típicas de uma úlcera arterial?",
    "backPearl": "Bordas bem definidas, leito pálido, presença de necrose e ausência de tecido de granulação."
  },
  {
    "id": "fc-anki-401",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Qual é o comportamento da dor da úlcera venosa em relação à elevação do membro?",
    "backPearl": "A dor da insuficiência venosa geralmente melhora com a elevação dos membros inferiores."
  },
  {
    "id": "fc-anki-402",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Como se caracteriza o leito típico de uma úlcera de insuficiência venosa crônica?",
    "backPearl": "Costuma ser exsudativo e frequentemente apresenta tecido de granulação."
  },
  {
    "id": "fc-anki-403",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia Vascular",
    "front": "Como diferenciar clinicamente as bordas de uma úlcera arterial de uma úlcera venosa?",
    "backPearl": "A úlcera arterial possui bordas bem definidas, enquanto a úlcera venosa apresenta bordas irregulares."
  },
  {
    "id": "fc-anki-404",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "front": "Qual é o esquema de antibioticoterapia empírica de primeira escolha para peritonite bacteriana espontânea (PBE)?",
    "backPearl": "Cefotaxima ou ceftriaxona por via endovenosa."
  },
  {
    "id": "fc-anki-405",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Gastroenterologia e Hepatologia",
    "front": "Qual é o critério laboratorial no líquido ascítico que confirma o diagnóstico de peritonite bacteriana espontânea (PBE)?",
    "backPearl": "Contagem de polimorfonucleares (neutrófilos) > ou = 250 células/mm³."
  },
  {
    "id": "fc-anki-406",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Trauma e Emergência Cirúrgica",
    "front": "Por que fraturas nas primeiras vértebras cervicais (C1 e C2) raramente cursam com tetraplegia?",
    "backPearl": "Devido à grande amplitude do canal medular nessas topografias."
  },
  {
    "id": "fc-anki-407",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "A partir de qual idade gestacional a reatividade da frequência cardíaca fetal está bem estabelecida para o uso confiável da cardiotocografia?",
    "backPearl": "No terceiro trimestre, especialmente após 32 semanas de gestação."
  },
  {
    "id": "fc-anki-408",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Quais são os valores de oscilação da frequência cardíaca fetal que definem uma variabilidade normal?",
    "backPearl": "Flutuações entre 6 e 25 batimentos por minuto (bpm)."
  },
  {
    "id": "fc-anki-409",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Por que a cardiotocografia apresenta alta taxa de resultados falso-positivos em gestações de 24 semanas?",
    "backPearl": "Devido à imaturidade no equilíbrio dos sistemas nervoso simpático e parassimpático do feto."
  },
  {
    "id": "fc-anki-410",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Qual é a diferença no poder de decisão entre o conselho municipal de saúde e o conselho local de saúde de uma Unidade Básica de Saúde (UBS)?",
    "backPearl": "O conselho municipal (assim como o estadual e nacional) é um órgão permanente e deliberativo. O conselho local atua na esfera da UBS, possuindo, em regra, caráter consultivo para aproximar a comunidade da resolução de fluxos internos."
  },
  {
    "id": "fc-anki-411",
    "grandeAreaId": "medicina_preventiva",
    "grandeArea": "Medicina Preventiva e Social",
    "tema": "Saúde Coletiva e SUS",
    "front": "Segundo a Política Nacional de Atenção Básica (PNAB), por que uma equipe de Saúde da Família com mais de 4.000 usuários cadastrados tende a enfrentar colapso nos agendamentos?",
    "backPearl": "Porque a PNAB recomenda um teto máximo de 3.500 pessoas por equipe (sendo o parâmetro ideal de 2.000 a 3.000 pessoas), tornando 4.000 uma situação de evidente superlotação territorial."
  },
  {
    "id": "fc-anki-412",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "Quais são os dois exames indicados para o rastreamento inicial da doença renal do diabetes na atenção básica?",
    "backPearl": "Relação albumina/creatinina em amostra isolada de urina e estimativa da taxa de filtração glomerular (eTFG)."
  },
  {
    "id": "fc-anki-413",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "Qual valor da relação albumina/creatinina urinária indica alteração inicial na doença renal do diabetes?",
    "backPearl": "Excreção entre 30 e 300 mg/g de creatinina, classificada atualmente pela SBD como albuminúria moderadamente aumentada (antiga microalbuminúria)."
  },
  {
    "id": "fc-anki-414",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "Qual valor da taxa de filtração glomerular estimada (eTFG) indica alteração compatível com doença renal crônica?",
    "backPearl": "Taxa de filtração glomerular inferior a 60 mL/min/1,73 m²."
  },
  {
    "id": "fc-anki-415",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Nefrologia",
    "front": "Quais marcadores da doença renal do diabetes são considerados preditores independentes de progressão e risco de mortalidade?",
    "backPearl": "A taxa de filtração glomerular estimada e a excreção de albumina na urina."
  },
  {
    "id": "fc-anki-416",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Oftalmologia / Otorrino",
    "front": "Qual é a principal causa de cegueira irreversível no mundo que exige atenção do médico generalista?",
    "backPearl": "Glaucoma."
  },
  {
    "id": "fc-anki-417",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Oftalmologia / Otorrino",
    "front": "Quais são os dois achados clássicos que devem levantar suspeita de glaucoma durante a avaliação clínica?",
    "backPearl": "Aumento da razão entre a escavação e o disco óptico na fundoscopia e pressão intraocular elevada."
  },
  {
    "id": "fc-anki-418",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Oftalmologia / Otorrino",
    "front": "Qual medicamento antidepressivo comumente usado na atenção básica pode precipitar uma crise de glaucoma de ângulo fechado?",
    "backPearl": "Amitriptilina, devido aos seus efeitos anticolinérgicos que dificultam a drenagem do humor aquoso."
  },
  {
    "id": "fc-anki-419",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Oftalmologia / Otorrino",
    "front": "Quais achados no fundo de olho caracterizam a retinopatia diabética e ajudam a diferenciá-la do glaucoma?",
    "backPearl": "Presença de neovasos, exsudatos duros e moles, microaneurismas e hemorragias."
  },
  {
    "id": "fc-anki-420",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Cardiologia",
    "front": "Qual sinal na fundoscopia sugere hipertensão intracraniana ou compressão retro-orbitária por tumor?",
    "backPearl": "Edema de papila."
  },
  {
    "id": "fc-anki-421",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Urologia",
    "front": "Qual deve ser a principal suspeita diagnóstica diante de um homem jovem com aumento de volume escrotal indolor e progressivo?",
    "backPearl": "Câncer de testículo."
  },
  {
    "id": "fc-anki-422",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Psiquiatria e Toxicologia",
    "front": "Quando está indicado o uso do antídoto flumazenil na intoxicação por benzodiazepínicos segundo os protocolos nacionais?",
    "backPearl": "Apenas em situações de depressão respiratória grave ou coma profundo que ameacem a via aérea, não sendo indicado para pacientes estáveis."
  },
  {
    "id": "fc-anki-423",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Quais faixas etárias maternas são consideradas fatores de risco para prematuridade segundo o Ministério da Saúde?",
    "backPearl": "Menores de 17 anos e maiores de 35 anos."
  },
  {
    "id": "fc-anki-424",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Até qual idade gestacional está indicada a internação para tentativa de tocólise e corticoterapia?",
    "backPearl": "Até antes de 34 semanas de gestação."
  },
  {
    "id": "fc-anki-425",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Obstetrícia / Pré-Natal",
    "front": "Por que a presença de anemia e infecção urinária em uma gestante exige atenção redobrada na atenção básica?",
    "backPearl": "Porque ambas as condições são fatores de risco independentes e tratáveis para a ocorrência de trabalho de parto prematuro."
  },
  {
    "id": "fc-anki-426",
    "grandeAreaId": "cirurgia_geral",
    "grandeArea": "Cirurgia Geral",
    "tema": "Cirurgia / Pré e Pós-Operatório",
    "front": "Qual é o tempo mínimo exigido de falha no tratamento clínico prévio para que haja indicação padrão de cirurgia bariátrica, segundo a resolução CFM nº 2.131/2015?",
    "backPearl": "Pelo menos dois anos de tratamento clínico prévio insatisfatório devidamente documentado."
  },
  {
    "id": "fc-anki-427",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Qual é a vacina contra o HPV disponibilizada gratuitamente pelo SUS e quais tipos virais ela cobre?",
    "backPearl": "Vacina quadrivalente (HPV4), que protege contra os tipos 6, 11, 16 e 18."
  },
  {
    "id": "fc-anki-428",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Qual é a modalidade terapêutica de escolha para o tratamento de lesões epiteliais de alto grau (NIC II e NIC III) no colo uterino?",
    "backPearl": "Métodos excisionais, como a Cirurgia de Alta Frequência (CAF) ou conização a frio."
  },
  {
    "id": "fc-anki-429",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Qual é a conduta indicada ao se identificar epitélio acetobranco denso, vasos atípicos e ulceração durante a colposcopia?",
    "backPearl": "Realizar a biópsia dirigida do colo uterino imediatamente."
  },
  {
    "id": "fc-anki-430",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual é a classificação da insulina asparte quanto ao seu tempo de ação?",
    "backPearl": "Análogo de ação ultrarrápida."
  },
  {
    "id": "fc-anki-431",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual insulina é classificada como de ação intermediária, apresentando início em 1 a 2 horas e pico entre 4 a 12 horas?",
    "backPearl": "Insulina NPH."
  },
  {
    "id": "fc-anki-432",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Qual insulina possui ação ultralonga, com duração superior a 42 horas e perfil muito estável?",
    "backPearl": "Insulina degludeca."
  },
  {
    "id": "fc-anki-433",
    "grandeAreaId": "clinica_medica",
    "grandeArea": "Clínica Médica",
    "tema": "Endocrinologia",
    "front": "Como é classificada a insulina detemir em relação ao seu perfil farmacocinético?",
    "backPearl": "Insulina basal de longa duração (aproximadamente 12 a 24 horas), com pico discreto."
  },
  {
    "id": "fc-anki-434",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Oncologia e Patologia Cervical",
    "front": "Quais são as duas principais oncoproteínas do HPV responsáveis pela carcinogênese do colo uterino?",
    "backPearl": "Proteínas E6 e E7."
  },
  {
    "id": "fc-anki-435",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Quais são os quatro critérios clínicos de Amsel?",
    "backPearl": "1. Corrimento homogêneo branco-acinzentado;\n2. pH vaginal > 4,5;\n3. Teste das aminas positivo;\n4. Presença de *clue cells*"
  },
  {
    "id": "fc-anki-436",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Nome dos critérios clínicos utilizados para o diagnóstico da vaginose bacteriana?",
    "backPearl": "Critérios de Amsel."
  },
  {
    "id": "fc-anki-437",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Quantidade de critérios de Amsel necessários para confirmar o diagnóstico de vaginose bacteriana?",
    "backPearl": "Pelo menos três dos quatro critérios."
  },
  {
    "id": "fc-anki-438",
    "grandeAreaId": "ginecologia_obstetricia",
    "grandeArea": "Ginecologia e Obstetrícia",
    "tema": "Ginecologia / Vulvovaginites e ISTs",
    "front": "Achado patognomônico da tricomoníase visualizado ao exame especular.",
    "backPearl": "Colo em framboesa (ou colo em morango)."
  }
];

export function buildImportedAnkiFlashcards(nowMs: number = Date.now()): Flashcard[] {
  return RAW_IMPORTED_ANKI_CARDS.map((entry, idx) => {
    // Slight staggered dueAt so initial review order stays deterministic
    const stamp = new Date(nowMs - (RAW_IMPORTED_ANKI_CARDS.length - idx) * 1000).toISOString();
    return {
      id: entry.id,
      institutionLabel: 'Baralho Importado (Anki)',
      grandeAreaId: entry.grandeAreaId,
      grandeArea: entry.grandeArea,
      tema: entry.tema,
      front: entry.front,
      backPearl: entry.backPearl,
      source: 'manual',
      createdAt: stamp,
      dueAt: stamp,
      stability: 0,
      difficulty: 0,
      elapsed_days: 0,
      scheduled_days: 0,
      learning_steps: 0,
      reps: 0,
      lapses: 0,
      state: 'New',
    };
  });
}
