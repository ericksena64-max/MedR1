import type { MedicalQuestion } from '../types/medical';

export const MEDICAL_QUESTIONS: MedicalQuestion[] = [
  {
    id: 'q-usp-2025-cardio-01',
    code: 'Q-USP25-0142',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Síndrome Coronariana Aguda com Supra de ST',
    banca: 'FUVEST',
    instituicao: 'USP-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Homem de 58 anos, tabagista (40 maços-ano) e hipertenso irregular, chega à UPA de um município sem serviço de hemodinâmica queixando-se de dor torácica retroesternal em aperto de forte intensidade (9/10), com irradiação para mandíbula e sudorese fria há 2 horas e 15 minutos. Ao exame: PA 138/86 mmHg, FC 94 bpm, SpO₂ 97% em ar ambiente, ausculta pulmonar limpa, sem sopros cardíacos (Killip I). Realizado ECG de 12 derivações em 6 minutos da admissão (imagem abaixo). O hospital de referência com angioplastia primária disponível encontra-se a 150 minutos de transporte terrestre. Não há contraindicações à fibrinólise. Qual é a conduta imediata mais adequada?',
    clinicalImage: {
      url: '/src/assets/images/clinical_ecg_stemi_1795302152424.jpg',
      modality: 'ECG 12 Derivações',
      caption: 'Eletrocardiograma de admissão (25 mm/s, 10 mm/mV) demonstrando supradesnivelamento do segmento ST em parede anterior.',
      aspectRatio: '16:9',
    },
    labTable: [
      { exame: 'Troponina I ultrassensível', resultado: '412 ng/L', referencia: '< 19 ng/L', alterado: 'alto' },
      { exame: 'Creatinina sérica', resultado: '1,0 mg/dL', referencia: '0,7–1,3 mg/dL', alterado: 'normal' },
      { exame: 'Potássio (K⁺)', resultado: '4,2 mEq/L', referencia: '3,5–5,1 mEq/L', alterado: 'normal' },
      { exame: 'Hemoglobina', resultado: '14,8 g/dL', referencia: '13,5–17,5 g/dL', alterado: 'normal' },
    ],
    alternativas: [
      {
        letter: 'A',
        text: 'Administrar AAS 300 mg, clopidogrel 300 mg, enoxaparina e iniciar fibrinólise imediata (tenecteplase ou alteplase), com transferência subsequente para centro com hemodinâmica em estratégia fármaco-invasiva.',
        explanation:
          'Correta. O ECG mostra IAMCSST de parede anterior extensa (supra de ST em V1-V4) com delta-T de 2h15 (< 12h). Como o tempo estimado porta-balão excede 120 minutos (transporte de 150 min), a Diretriz SBC recomenda fibrinólise imediata (meta porta-agulha ≤ 30 min) associada a dupla antiagregação (AAS + clopidogrel 300 mg em pacientes ≤ 75 anos) e anticoagulação, seguida de transferência para cineangiocoronariografia entre 2 e 24h (estratégia fármaco-invasiva).',
        communityPct: 68.4,
      },
      {
        letter: 'B',
        text: 'Administrar AAS 300 mg, ticagrelor 180 mg e transferir imediatamente para angioplastia primária, evitando trombólise pelo risco hemorrágico.',
        explanation:
          'Incorreta (Principal distrator). A angioplastia primária só é preferível à fibrinólise quando pode ser realizada em até 120 minutos a partir do diagnóstico eletrocardiográfico em hospitais sem hemodinâmica. Além disso, ticagrelor e prasugrel não são os inibidores P2Y12 de escolha no cenário de fibrinólise imediata.',
        communityPct: 19.2,
      },
      {
        letter: 'C',
        text: 'Aguardar nova curva de troponina em 3 horas e realizar nitrato sublingual e morfina antes de definir terapia de reperfusão.',
        explanation:
          'Incorreta. No IAM com supradesnivelamento do segmento ST, a decisão de reperfusão é estritamente clínico-eletrocardiográfica; jamais se deve atrasar a reperfusão aguardando marcadores de necrose miocárdica.',
        communityPct: 3.1,
      },
      {
        letter: 'D',
        text: 'Administrar AAS 300 mg, prasugrel 60 mg, heparina não fracionada e iniciar tenecteplase em dose plena.',
        explanation:
          'Incorreta. O prasugrel é contraindicado na terapia fibrinolítica (estudos demonstraram risco elevado de sangramento maior sem benefício estabelecido). Com trombolítico, o inibidor P2Y12 padrão-ouro é o clopidogrel.',
        communityPct: 7.5,
      },
      {
        letter: 'E',
        text: 'Iniciar oxigenoterapia em máscara não reinalante a 10 L/min, furosemida venosa e aguardar estabilidade hemodinâmica para transferência.',
        explanation:
          'Incorreta. O paciente tem SpO₂ 97% (oxigênio suplementar só é indicado se SpO₂ < 90% ou desconforto respiratório) e está em Killip I (sem congestão pulmonar), não havendo indicação de furosemida.',
        communityPct: 1.8,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 4820,
    taxaAcertoGlobal: 68.4,
    comentarioGeral:
      'Questão clássica da USP-SP cobrando o algoritmo de reperfusão no IAMCSST em serviços sem hemodinâmica. O ponto decisivo é a regra dos 120 minutos: se o tempo previsto desde o diagnóstico de IAMCSST até a abertura da artéria (fio-guia) ultrapassar 120 minutos e o paciente estiver dentro da janela de 12 horas do início dos sintomas sem contraindicações absolutas, a fibrinólise imediata seguida de estratégia fármaco-invasiva salva mais miocárdio e reduz mortalidade.',
    perolaClinica:
      'Regra de ouro no IAMCSST sem hemodinâmica: transferência > 120 min = Fibrinólise imediata (porta-agulha ≤ 30 min) + AAS + Clopidogrel (300 mg se ≤ 75 anos; sem ataque se > 75 anos) + Enoxaparina + CATE em 2–24h.',
    referencias: [
      'Diretriz Brasileira de Síndromes Coronarianas Agudas — SBC (2021/2023).',
      'Braunwald’s Heart Disease: A Textbook of Cardiovascular Medicine, 12ª ed.',
      'Harrison’s Principles of Internal Medicine, 21ª ed., Cap. 275.',
    ],
  },
  {
    id: 'q-unicamp-2025-trauma-02',
    code: 'Q-UNI25-0089',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Trauma',
    subtema: 'Atendimento Inicial ao Politraumatizado (ATLS)',
    banca: 'COMVEST',
    instituicao: 'UNICAMP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Motociclista de 27 anos sofre colisão lateral contra automóvel e é trazido à sala de trauma pelo SAMU em prancha rígida e colar cervical. À avaliação primária: via aérea pérvia com fala entrecortada, FR 34 irpm, SpO₂ 86% em máscara com reservatório, murmúrio vesicular abolido em hemitórax direito, hipertimpanismo à percussão à direita, turgência jugular bilateral, PA 78/46 mmHg e FC 136 bpm. Antes mesmo da radiografia de tórax (ilustrada apenas para correlação diagnóstica didática), qual é a conduta imediata preconizada pela 10ª edição do ATLS para adultos?',
    clinicalImage: {
      url: '/src/assets/images/clinical_xray_pneumothorax_1795302149327.jpg',
      modality: 'Radiografia de Tórax AP',
      caption: 'Radiografia de tórax demonstrando pneumotórax extenso à direita com linha pleural visceral evidente e desvio mediastinal contralateral (na prática clínica, não aguardar RX no pneumotórax hipertensivo).',
      aspectRatio: '4:3',
    },
    alternativas: [
      {
        letter: 'A',
        text: 'Descompressão torácica imediata com agulha calibrosa no 4º ou 5º espaço intercostal direito, imediatamente anterior à linha axilar média, seguida de drenagem pleural em selo d’água.',
        explanation:
          'Correta. A 10ª edição do ATLS alterou o sítio preferencial de punção de alívio em adultos do 2º EIC na linha hemiclavicular para o 4º ou 5º espaço intercostal, ligeiramente anterior à linha axilar média (mesmo local anatômico da drenagem torácica), devido à menor espessura da parede torácica e menor taxa de falha.',
        communityPct: 54.6,
      },
      {
        letter: 'B',
        text: 'Descompressão imediata com jelco 14G obrigatoriamente no 2º espaço intercostal na linha hemiclavicular direita, única topografia recomendada para adultos pelo ATLS 10ª edição.',
        explanation:
          'Incorreta (Principal distrator). O 2º EIC na linha hemiclavicular permanece como sítio preferencial em crianças (e alternativa aceitável), mas no adulto a atualização da 10ª edição do ATLS passou a recomendar o 4º ou 5º EIC anterior à linha axilar média.',
        communityPct: 31.4,
      },
      {
        letter: 'C',
        text: 'Realizar radiografia de tórax no leito e eFAST para confirmar o pneumotórax hipertensivo antes de qualquer procedimento invasivo.',
        explanation:
          'Incorreta. O diagnóstico do pneumotórax hipertensivo é estritamente clínico (choque obstrutivo + ausência de MV + hipertimpanismo + turgência jugular). Aguardar imagem atrasa o tratamento e aumenta drasticamente a mortalidade.',
        communityPct: 6.2,
      },
      {
        letter: 'D',
        text: 'Intubação orotraqueal imediata com pressão positiva elevada e reposição volêmica vigorosa com 2 litros de Ringer Lactato aquecido.',
        explanation:
          'Incorreta. Instituir ventilação com pressão positiva antes de descomprimir um pneumotórax hipertensivo agrava o aprisionamento aéreo e precipita parada cardiorrespiratória em AESP.',
        communityPct: 5.5,
      },
      {
        letter: 'E',
        text: 'Pericardiocentese subxifoidea guiada por ultrassom para tratamento do choque obstrutivo com turgência jugular.',
        explanation:
          'Incorreta. Embora o tamponamento cardíaco também cause choque obstrutivo e turgência jugular, ele não cursa com abolição do murmúrio vesicular e hipertimpanismo unilateral.',
        communityPct: 2.3,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 5390,
    taxaAcertoGlobal: 54.6,
    comentarioGeral:
      'A atualização do sítio anatômico da toracocentese de alívio em adultos na 10ª edição do ATLS é um dos temas mais prevalentes nas provas de Cirurgia Geral de São Paulo (UNICAMP, USP e SUS-SP). O quadro clínico de choque obstrutivo associado a hipertimpanismo e abolição do MV à direita fecha o diagnóstico clínico de pneumotórax hipertensivo.',
    perolaClinica:
      'ATLS 10ª edição: Punção de alívio em ADULTOS → 4º ou 5º EIC, anterior à linha axilar média (em crianças mantém-se 2º EIC na linha hemiclavicular). Depois, dreno de tórax em selo d’água (28–32 Fr).',
    referencias: [
      'ATLS — Advanced Trauma Life Support, Student Course Manual, 10ª ed., Cap. 4.',
      'Sabiston Textbook of Surgery, 21ª ed., Cap. 16 (Management of Acute Trauma).',
    ],
  },
  {
    id: 'q-psumg-2024-neurotrauma-03',
    code: 'Q-PSU24-0311',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Trauma',
    subtema: 'Traumatismo Cranioencefálico e Hematomas Intracranianos',
    banca: 'AREMG',
    instituicao: 'PSU-MG',
    estado: 'MG',
    regiao: 'Sudeste',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Homem de 31 anos sofre trauma cranioencefálico após queda de bicicleta sem capacete com impacto em região temporal esquerda. Apresentou perda transitória da consciência por 2 minutos, acordou lúcido e orientado (Glasgow 15), mas após 90 minutos na observação evoluiu subitamente com sonolência (Glasgow 10), anisocoria com midríase esquerda e hemiparesia direita. Realizada tomografia de crânio sem contraste (imagem abaixo). Qual é o diagnóstico mais provável e o principal vaso acometido?',
    clinicalImage: {
      url: '/src/assets/images/clinical_ct_epidural_1795302150711.jpg',
      modality: 'TC de Crânio sem Contraste',
      caption: 'Corte axial em janela de parênquima cerebral evidenciando coleção extra-axial hiperdensa de morfologia biconvexa em região temporoparietal esquerda.',
      aspectRatio: '1:1',
    },
    alternativas: [
      {
        letter: 'A',
        text: 'Hematoma subdural agudo por rotura de veias-ponte corticais.',
        explanation:
          'Incorreta (Principal distrator). O hematoma subdural agudo apresenta aspecto em crescente (côncavo-convexo), cruza linhas de sutura, costuma associar-se a lesão parenquimatosa subjacente e tem origem venosa (veias-ponte).',
        communityPct: 16.8,
      },
      {
        letter: 'B',
        text: 'Hematoma epidural (extradural) agudo por lesão da artéria meníngea média.',
        explanation:
          'Correta. O quadro clássico de "intervalo lúcido" seguido de rápida deterioração neurológica com sinais de herniação uncal (midríase ipsilateral por compressão do III par + hemiparesia contralateral) associado à imagem hiperdensa biconvexa (em lente) que respeita suturas cranianas define o hematoma epidural agudo, classicamente causado por fratura do osso temporal com lesão da artéria meníngea média.',
        communityPct: 76.2,
      },
      {
        letter: 'C',
        text: 'Hemorragia subaracnoidea traumática por ruptura de aneurisma da artéria comunicante anterior.',
        explanation:
          'Incorreta. A HSA cursa com hiperdensidade preenchendo cisternas da base e sulcos corticais, sem coleção biconvexa extra-axial localizada.',
        communityPct: 3.1,
      },
      {
        letter: 'D',
        text: 'Lesão axonal difusa grave por cisalhamento da substância branca subcortical.',
        explanation:
          'Incorreta. A LAD manifesta-se com coma imediato desde o momento do trauma (sem intervalo lúcido) e TC inicialmente normal ou com micro-hemorragias puntiformes no corpo caloso e junção córtico-subcortical.',
        communityPct: 3.9,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 3910,
    taxaAcertoGlobal: 76.2,
    comentarioGeral:
      'Questão de neurotrauma de alta incidência no PSU-MG e ENARE. Na convenção radiológica da TC axial, o lado direito da imagem corresponde ao hemisfério esquerdo do paciente. A coleção hiperdensa biconvexa limitada pelas inserções durais nas suturas cranianas, somada ao intervalo lúcido e à anisocoria ipsilateral (herniação do uncus comprimindo o nervo oculomotor), fecha o diagnóstico de hematoma epidural agudo — emergência neurocirúrgica com indicação de craniotomia descompressiva.',
    perolaClinica:
      'Epidural = Lente Biconvexa + Artéria Meníngea Média + Intervalo Lúcido + NÃO cruza suturas. Subdural = Crescente (Lua) + Veias-Ponte + CRUZA suturas.',
    referencias: [
      'ATLS — Advanced Trauma Life Support, 10ª ed., Cap. 6 (Head Trauma).',
      'Sabiston Textbook of Surgery, 21ª ed., Cap. 68 (Neurosurgery).',
    ],
  },
  {
    id: 'q-enare-2025-nefro-04',
    code: 'Q-ENR25-0204',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Nefrologia',
    subtema: 'Distúrbios Hidroeletrolíticos e Hipercalemia Grave',
    banca: 'FGV',
    instituicao: 'ENARE',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Mulher de 67 anos, portadora de doença renal crônica estágio 4 secundária à nefropatia diabética, dá entrada no pronto-socorro por fraqueza muscular progressiva após uso de anti-inflamatório não esteroidal por 5 dias. PA 152/88 mmHg, FC 52 bpm, diurese reduzida. O ECG demonstra ondas T apiculadas em tenda, prolongamento do intervalo PR e alargamento do complexo QRS (138 ms). Os exames laboratoriais estão apresentados na tabela. Qual deve ser a PRIMEIRA medida farmacológica imediata?',
    labTable: [
      { exame: 'Potássio sérico (K⁺)', resultado: '7,4 mEq/L', referencia: '3,5–5,1 mEq/L', alterado: 'alto' },
      { exame: 'Creatinina', resultado: '4,8 mg/dL', referencia: '0,6–1,1 mg/dL', alterado: 'alto' },
      { exame: 'Ureia', resultado: '142 mg/dL', referencia: '15–40 mg/dL', alterado: 'alto' },
      { exame: 'pH arterial', resultado: '7,29', referencia: '7,35–7,45', alterado: 'baixo' },
      { exame: 'Bicarbonato (HCO₃⁻)', resultado: '15 mEq/L', referencia: '22–26 mEq/L', alterado: 'baixo' },
      { exame: 'Glicemia capilar', resultado: '164 mg/dL', referencia: '70–140 mg/dL', alterado: 'alto' },
    ],
    alternativas: [
      {
        letter: 'A',
        text: 'Solução polarizante com insulina regular 10 UI IV associada a glicose hipertônica a 50%.',
        explanation:
          'Incorreta (Principal distrator). A solução polarizante promove o influxo intracelular de potássio com início em 15–30 min, sendo a segunda etapa fundamental, mas NÃO estabiliza imediatamente a membrana miocárdica frente ao alargamento de QRS.',
        communityPct: 24.5,
      },
      {
        letter: 'B',
        text: 'Gluconato de cálcio a 10%, 10 mL por via intravenosa em 2 a 5 minutos, sob monitorização eletrocardiográfica contínua.',
        explanation:
          'Correta. Diante de hipercalemia com repercussão eletrocardiográfica (especialmente alargamento de QRS ou ausência de onda P), a prioridade absoluta é a estabilização da membrana do cardiomiócito com cálcio intravenoso (gluconato de cálcio 10%), cujo efeito ocorre em 1 a 3 minutos e previne fibrilação ventricular e assistolia.',
        communityPct: 64.8,
      },
      {
        letter: 'C',
        text: 'Resina de troca iônica (poliestirenossulfonato de cálcio) via oral associada a furosemida IV.',
        explanation:
          'Incorreta. Resinas de troca têm início de ação lento (horas) e nunca constituem a primeira medida na hipercalemia ameaçadora à vida.',
        communityPct: 3.4,
      },
      {
        letter: 'D',
        text: 'Bicarbonato de sódio 8,4% 1 mEq/kg IV em bolus como monoterapia inicial.',
        explanation:
          'Incorreta. O bicarbonato tem efeito discreto e demorado sobre o potássio sérico e pode auxiliar apenas em acidose metabólica grave, sem substituir o cálcio na estabilização elétrica imediata.',
        communityPct: 4.9,
      },
      {
        letter: 'E',
        text: 'Nebulização isolada com fenoterol 10 gotas e repetição do potássio em 1 hora.',
        explanation:
          'Incorreta. Beta-2 agonistas são adjuvantes para redistribuição intracelular do potássio, mas não protegem o miocárdio imediatamente contra arritmias malignas.',
        communityPct: 2.4,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 6120,
    taxaAcertoGlobal: 64.8,
    comentarioGeral:
      'Na emergência nefrológica, o manejo da **hipercalemia grave** ($K^+ \\ge 6{,}5\\text{ mEq/L}$ ou alterações no ECG) segue **3 pilares sequenciais**:\n\n1. **Estabilizar a membrana cardíaca:** Gluconato de cálcio 10% (10 mL IV em 2–5 min) — *não reduz* o $K^+$ sérico, mas eleva o potencial de limiar em 1–3 minutos.\n2. **Redistribuir $K^+$ para o intracelular:** Solução polarizante (insulina regular + glicose), $\\beta_2$-agonista inalatório e bicarbonato de sódio (se acidose metabólica).\n3. **Eliminar $K^+$ do organismo:** Furosemida IV (se diurese preservada), resinas de troca iônica ou hemodiálise de urgência.',
    perolaClinica:
      '**Alteração no ECG na hipercalemia** $\\rightarrow$ **Gluconato de Cálcio 10% IV PRIMEIRO!** Ele estabiliza o cardiomiócito em 1–3 min sem alterar o $K^+$ sérico.',
    referencias: [
      'KDIGO Controversies Conference on Potassium Management in Kidney Disease.',
      'Harrison’s Principles of Internal Medicine, 21ª ed., Cap. 53 (Fluid and Electrolyte Disturbances).',
    ],
  },
  {
    id: 'q-usp-2025-go-05',
    code: 'Q-USP25-0418',
    grandeAreaId: 'ginecologia_obstetricia',
    grandeArea: 'Ginecologia e Obstetrícia',
    tema: 'Obstetrícia / Pré-Natal',
    subtema: 'Diabetes Mellitus Gestacional (DMG)',
    banca: 'FUVEST',
    instituicao: 'USP-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Gestante de 29 anos, G2P1A0, IMC pré-gestacional de 28,4 kg/m², sem comorbidades prévias conhecidas, comparece à consulta de pré-natal com 26 semanas trazendo resultado de Teste Oral de Tolerância à Glicose com 75 g (TOTG-75g) realizado conforme rotina em serviço com viabilidade técnica total. A glicemia de jejum do primeiro trimestre havia sido 84 mg/dL. Os valores do TOTG atual são: jejum 90 mg/dL, 1ª hora 184 mg/dL e 2ª hora 148 mg/dL. Segundo o Consenso Brasileiro de Diabetes Mellitus Gestacional (FEBRASGO/SBD/OPAS), qual é o diagnóstico e a conduta inicial?',
    labTable: [
      { exame: 'TOTG 75g — Jejum', resultado: '90 mg/dL', referencia: '< 92 mg/dL', alterado: 'normal' },
      { exame: 'TOTG 75g — 1ª hora', resultado: '184 mg/dL', referencia: '< 180 mg/dL', alterado: 'alto' },
      { exame: 'TOTG 75g — 2ª hora', resultado: '148 mg/dL', referencia: '< 153 mg/dL', alterado: 'normal' },
    ],
    alternativas: [
      {
        letter: 'A',
        text: 'Exame normal, pois apenas um ponto do TOTG-75g encontra-se alterado; manter pré-natal de risco habitual.',
        explanation:
          'Incorreta (Principal distrator). Esse era o critério antigo de Carpenter & Coustan (TOTG 100g), que exigia dois valores alterados. Pelo critério atual da IADPSG/FEBRASGO com TOTG-75g, APENAS UM ponto igual ou superior ao ponto de corte já confirma o diagnóstico de DMG.',
        communityPct: 26.7,
      },
      {
        letter: 'B',
        text: 'Diabetes Mellitus Gestacional (DMG); iniciar terapia nutricional, atividade física orientada e automonitorização glicêmica capilar antes de indicar farmacoterapia.',
        explanation:
          'Correta. Os pontos de corte do TOTG-75g (24–28 semanas) são: jejum ≥ 92 mg/dL, 1h ≥ 180 mg/dL ou 2h ≥ 153 mg/dL. Um único valor alterado (1h = 184 mg/dL) confirma DMG. A primeira linha terapêutica consiste em orientação dietética individualizada, atividade física regular e perfil glicêmico capilar por 1 a 2 semanas; apenas na falha de controle inicia-se insulina.',
        communityPct: 58.3,
      },
      {
        letter: 'C',
        text: 'Diabetes Mellitus prévio (Overt Diabetes) diagnosticado na gestação; iniciar insulina NPH e regular imediatamente.',
        explanation:
          'Incorreta. Overt Diabetes é definido por glicemia de jejum ≥ 126 mg/dL, 2h no TOTG ≥ 200 mg/dL, HbA1c ≥ 6,5% ou glicemia ao acaso ≥ 200 mg/dL com sintomas.',
        communityPct: 5.8,
      },
      {
        letter: 'D',
        text: 'Diabetes Mellitus Gestacional (DMG); iniciar metformina 850 mg duas vezes ao dia como primeira linha padrão.',
        explanation:
          'Incorreta. Além de a mudança de estilo de vida preceder a medicação em pacientes sem descompensação grave, a terapia farmacológica de primeira escolha no DMG no Brasil continua sendo a insulina (a metformina é alternativa em casos selecionados).',
        communityPct: 9.2,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 4415,
    taxaAcertoGlobal: 58.3,
    comentarioGeral:
      'A tabela diagnóstica de DMG da OPAS/FEBRASGO/MS é campeã absoluta de cobrança em GO. Memorizar os cortes exatos — 92 / 180 / 153 mg/dL — e lembrar que basta UM valor alterado no TOTG-75g evita cair no distrator clássico dos "dois pontos alterados".',
    perolaClinica:
      'TOTG-75g (24–28 sem): basta 1 valor ≥ 92 (jejum) | ≥ 180 (1h) | ≥ 153 (2h) = DMG! Alvos no tratamento: jejum < 95, 1h pós-prandial < 140, 2h pós-prandial < 120 mg/dL.',
    referencias: [
      'FEBRASGO / OPAS / SBD — Rastreamento e Diagnóstico de Diabetes Mellitus Gestacional no Brasil.',
      'Williams Obstetrics, 26ª ed., Cap. 60 (Diabetes Mellitus).',
    ],
  },
  {
    id: 'q-unifesp-2025-neo-06',
    code: 'Q-UNF25-0512',
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Neonatologia',
    subtema: 'Reanimação Neonatal (Diretriz SBP 2022)',
    banca: 'VUNESP',
    instituicao: 'UNIFESP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Recém-nascido a termo (IG 39 semanas e 2 dias), parto vaginal sem intercorrências maternas, líquido amniótico claro, nasce hipotônico e em apneia. Foi realizado clampeamento imediato do cordão umbilical e o neonato foi levado à mesa de reanimação sob fonte de calor radiante. Após posicionar a cabeça em leve extensão, aspirar vias aéreas se necessário, secar e desprezar campos úmidos (passos iniciais concluídos em 30 segundos), o RN permanece em apneia e com frequência cardíaca de 76 bpm medida por ausculta precordial. De acordo com a Diretriz de Reanimação do RN ≥ 34 semanas da SBP (2022), qual é a conduta imediata correta?',
    alternativas: [
      {
        letter: 'A',
        text: 'Iniciar ventilação com pressão positiva (VPP) com máscara facial e ar ambiente (FiO₂ 21%), na frequência de 40 a 60 movimentos por minuto, e instalar monitor cardíaco e oxímetro de pulso no membro superior direito.',
        explanation:
          'Correta. Em RN ≥ 34 semanas que após os passos iniciais apresenta apneia, respiração irregular ou FC < 100 bpm, indica-se VPP imediata (dentro do Minuto de Ouro — primeiros 60 segundos) com máscara facial em ar ambiente (FiO₂ 21%), ritmo de 40–60/min ("aperta-solta-solta"), acompanhada da instalação do monitor cardíaco de 3 derivações e oxímetro pré-ductal (MSD).',
        communityPct: 71.9,
      },
      {
        letter: 'B',
        text: 'Iniciar ventilação com pressão positiva (VPP) com FiO₂ a 30% e massagem cardíaca externa coordenada na relação 3:1.',
        explanation:
          'Incorreta (Principal distrator). FiO₂ a 30% é utilizada no início da VPP para prematuros < 34 semanas, e a massagem cardíaca só é indicada se a FC permanecer < 60 bpm APÓS 30 segundos de VPP efetiva com cânula traqueal.',
        communityPct: 14.3,
      },
      {
        letter: 'C',
        text: 'Realizar intubação orotraqueal imediata e administrar adrenalina endotraqueal antes de iniciar ventilação.',
        explanation:
          'Incorreta. A VPP com máscara facial é sempre a primeira intervenção ventilatória (exceto situações especiais como hérnia diafragmática congênita). Mais de 90% dos RNs respondem adequadamente à VPP bem executada.',
        communityPct: 4.8,
      },
      {
        letter: 'D',
        text: 'Fornecer oxigênio inalatório livre a 5 L/min próximo à face e aguardar mais 30 segundos para reavaliar a frequência cardíaca.',
        explanation:
          'Incorreta. Oxigênio inalatório não substitui a VPP diante de apneia ou FC < 100 bpm e atrasa a abertura alveolar dentro do Minuto de Ouro.',
        communityPct: 6.1,
      },
      {
        letter: 'E',
        text: 'Realizar estímulo tátil vigoroso em dorso e plantas dos pés por mais 30 segundos antes de indicar suporte ventilatório.',
        explanation:
          'Incorreta. O estímulo tátil delicado (no máximo 2 vezes) já faz parte dos passos iniciais; persistindo apneia ou FC < 100 bpm, não se deve atrasar a VPP.',
        communityPct: 2.9,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 5280,
    taxaAcertoGlobal: 71.9,
    comentarioGeral:
      'A Reanimação Neonatal (SBP 2022) é o assunto mais cobrado em Pediatria nas provas de residência do Brasil. O "Minuto de Ouro" determina que, se o RN não respirar ou mantiver FC < 100 bpm após os passos iniciais, a VPP deve começar até os 60 segundos de vida: em ≥ 34 semanas começa-se em ar ambiente (21%); em < 34 semanas inicia-se com FiO₂ 30%.',
    perolaClinica:
      'SBP 2022 — VPP inicial: RN ≥ 34 sem → FiO₂ 21% | RN < 34 sem → FiO₂ 30%. Oxímetro SEMPRE pré-ductal (membro superior direito) + monitor cardíaco de 3 eletrodos.',
    referencias: [
      'Sociedade Brasileira de Pediatria (SBP) — Diretrizes de Reanimação do Recém-Nascido ≥ 34 semanas em sala de parto (2022).',
      'Tratado de Pediatria SBP, 5ª ed.',
    ],
  },
  {
    id: 'q-enare-2025-epi-07',
    code: 'Q-ENR25-0673',
    grandeAreaId: 'medicina_preventiva',
    grandeArea: 'Medicina Preventiva e Social',
    tema: 'Epidemiologia',
    subtema: 'Testes Diagnósticos e Valores Preditivos',
    banca: 'FGV',
    instituicao: 'ENARE',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Um novo teste rápido sorológico para diagnóstico de determinada infecção apresenta sensibilidade de 90% e especificidade de 90% em estudos de validação hospitalar. A Secretaria Municipal de Saúde decide aplicá-lo em dois cenários distintos: Cenário 1 — ambulatório de referência em infectologia, onde a prevalência da doença é de 50%; Cenário 2 — campanha populacional de rastreamento em assintomáticos, onde a prevalência é de 1%. Considerando as propriedades dos testes diagnósticos, assinale a alternativa CORRETA.',
    alternativas: [
      {
        letter: 'A',
        text: 'A sensibilidade e a especificidade diminuem drasticamente no Cenário 2 devido à queda na prevalência da doença.',
        explanation:
          'Incorreta. Sensibilidade e especificidade são propriedades intrínsecas do teste e não variam diretamente com a prevalência da doença na população testada.',
        communityPct: 18.4,
      },
      {
        letter: 'B',
        text: 'O Valor Preditivo Positivo (VPP) será substancialmente menor no Cenário 2 (próximo a 8,3%), enquanto o Valor Preditivo Negativo (VPN) será muito elevado (> 99%).',
        explanation:
          '**Correta.** Em uma população hipotética de $N = 10.000$ pessoas com prevalência de $1\\%$ ($100$ doentes e $9.900$ sadios), temos $VP = 90\\% \\times 100 = 90$ e $FP = 10\\% \\times 9.900 = 990$. Assim:\n\n$$VPP = \\frac{VP}{VP + FP} = \\frac{90}{90 + 990} = \\frac{90}{1.080} \\approx 8{,}3\\%$$\n\nJá o $VPN = \\frac{8.910}{8.910 + 10} \\approx 99{,}9\\%$. Quanto menor a prevalência, **menor o $VPP$** e **maior o $VPN$**.',
        communityPct: 47.6,
      },
      {
        letter: 'C',
        text: 'A razão de verossimilhança positiva (LR+) muda de 9,0 no Cenário 1 para 0,9 no Cenário 2.',
        explanation:
          '**Incorreta (Principal distrator).** A razão de verossimilhança positiva depende exclusivamente de sensibilidade ($S$) e especificidade ($E$), sendo **independente da prevalência**:\n\n$$LR^+ = \\frac{S}{1 - E} = \\frac{0{,}90}{1 - 0{,}90} = 9{,}0$$',
        communityPct: 22.1,
      },
      {
        letter: 'D',
        text: 'O Valor Preditivo Positivo permanece em 90% em ambos os cenários, pois depende exclusivamente da especificidade do teste.',
        explanation:
          '**Incorreta.** O $VPP$ depende fortemente da **prevalência** (probabilidade pré-teste), além da sensibilidade e da especificidade.',
        communityPct: 8.2,
      },
      {
        letter: 'E',
        text: 'Para aumentar a sensibilidade na campanha de rastreamento, deve-se aplicar dois testes em série (só considerar positivo se ambos forem reagentes).',
        explanation:
          '**Incorreta.** Testes em **série** aumentam a *especificidade* (reduzem falsos-positivos), mas diminuem a *sensibilidade*. Para aumentar a sensibilidade, aplicam-se testes em **paralelo**.',
        communityPct: 3.7,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 4980,
    taxaAcertoGlobal: 47.6,
    comentarioGeral:
      'Questão clássica da **FGV/ENARE** que exige distinguir **propriedades intrínsecas** do teste ($S$, $E$, $LR^+$ e $LR^-$ — *independentes* da prevalência) das **propriedades pós-teste** ($VPP$ e $VPN$ — diretamente moduladas pela prevalência).\n\nVeja a **tabela $2 \\times 2$** no **Cenário 2** ($N = 10.000$ indivíduos, prevalência $= 1\\%$):\n\n| Teste Rápido | Doentes ($100$) | Sadios ($9.900$) | Total |\n| :--- | :---: | :---: | :---: |\n| **Positivo ($+$)** | $VP = 90$ | $FP = 990$ | $1.080$ |\n| **Negativo ($-$)** | $FN = 10$ | $VN = 8.910$ | $8.920$ |\n| **Total** | $100$ | $9.900$ | $10.000$ |\n\n$$VPP = \\frac{VP}{VP + FP} = \\frac{90}{1.080} \\approx 8{,}3\\% \\qquad\\text{e}\\qquad LR^+ = \\frac{S}{1 - E} = \\frac{0{,}90}{0{,}10} = 9{,}0$$\n\n> Mesmo um teste com $S = 90\\%$ e $E = 90\\%$ gera mais de **$91\\%$ de falsos-positivos** quando aplicado indiscriminadamente em populações de baixíssima prevalência.',
    perolaClinica:
      '**Prevalência cai** $\\rightarrow$ $VPP$ cai e $VPN$ sobe. Sensibilidade ($S$), Especificidade ($E$) e $LR^+ = \\frac{S}{1 - E}$ **não mudam** com a prevalência.',
    referencias: [
      'Fletcher RH, Fletcher SW — Epidemiologia Clínica: Elementos Essenciais, 6ª ed.',
      'Medronho RA — Epidemiologia, 2ª ed., Cap. 18.',
    ],
  },
  {
    id: 'q-unifesp-2024-endocrino-08',
    code: 'Q-UNF24-0195',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Endocrinologia',
    subtema: 'Cetoacidose Diabética (CAD)',
    banca: 'VUNESP',
    instituicao: 'UNIFESP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Adolescente de 19 anos com diabetes mellitus tipo 1 chega à emergência com náuseas, dor abdominal difusa, respiração de Kussmaul e desidratação moderada após suspender insulina por 48 horas. PA 102/64 mmHg, FC 118 bpm. Após infusão inicial de 1.000 mL de soro fisiológico 0,9% na primeira hora, chegam os exames laboratoriais abaixo. Qual é a conduta IMEDIATA mais segura em relação à insulinoterapia e reposição de potássio?',
    labTable: [
      { exame: 'Glicemia venosa', resultado: '468 mg/dL', referencia: '70–99 mg/dL', alterado: 'alto' },
      { exame: 'pH arterial', resultado: '7,14', referencia: '7,35–7,45', alterado: 'baixo' },
      { exame: 'Bicarbonato (HCO₃⁻)', resultado: '8,2 mEq/L', referencia: '22–26 mEq/L', alterado: 'baixo' },
      { exame: 'Potássio (K⁺)', resultado: '3,0 mEq/L', referencia: '3,5–5,1 mEq/L', alterado: 'baixo' },
      { exame: 'Sódio (Na⁺)', resultado: '132 mEq/L', referencia: '135–145 mEq/L', alterado: 'baixo' },
      { exame: 'Cetonemia (β-hidroxibutirato)', resultado: '5,4 mmol/L', referencia: '< 0,6 mmol/L', alterado: 'alto' },
    ],
    alternativas: [
      {
        letter: 'A',
        text: 'Iniciar bomba de insulina regular 0,1 UI/kg/h imediatamente e repor potássio apenas se cair abaixo de 2,5 mEq/L.',
        explanation:
          'Incorreta. Iniciar insulina com K⁺ < 3,3 mEq/L induz hipocalemia grave por influxo celular de potássio, com alto risco de arritmias fatais e parada cardíaca.',
        communityPct: 8.9,
      },
      {
        letter: 'B',
        text: 'Postergar o início da insulina, manter hidratação venosa e repor potássio (20–30 mEq/h) até atingir K⁺ ≥ 3,3–3,5 mEq/L antes de iniciar a insulinoterapia.',
        explanation:
          'Correta. Segundo o consenso da ADA/SBD para crises hiperglicêmicas, quando o potássio sérico inicial está abaixo de 3,3 mEq/L (ou < 3,5 mEq/L nas diretrizes mais recentes da ADA 2024), a insulina DEVE ser adiada e o potássio reposto vigorosamente primeiro para evitar hipocalemia fatal.',
        communityPct: 62.1,
      },
      {
        letter: 'C',
        text: 'Administrar bicarbonato de sódio 100 mEq IV imediato para corrigir o pH de 7,14 e iniciar insulina em bolus.',
        explanation:
          'Incorreta (Principal distrator). O bicarbonato na CAD só é considerado quando o pH está < 6,9 (ou < 7,0 em alguns consensos), pois sua infusão agrava a hipocalemia e pode precipitar acidose paradoxal do SNC.',
        communityPct: 21.6,
      },
      {
        letter: 'D',
        text: 'Iniciar insulina NPH subcutânea combinada com soro glicosado 5% desde o início para prevenir edema cerebral.',
        explanation:
          'Incorreta. A insulina de escolha na CAD moderada/grave é a regular em infusão venosa contínua (após correção do K⁺), e o soro glicosado só é associado quando a glicemia cai abaixo de 200–250 mg/dL.',
        communityPct: 7.4,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 4230,
    taxaAcertoGlobal: 62.1,
    comentarioGeral:
      'A principal pegadinha na **Cetoacidose Diabética (CAD)** é o manejo do potássio ($K^+$). Apesar de todo paciente em CAD ter déficit corporal total de $K^+$, a conduta depende da calemia inicial:\n\n- **$K^+ < 3{,}3\\text{ mEq/L}$** *(ADA 2024: $< 3{,}5\\text{ mEq/L}$)*: **adiar insulina** e repor $20\\text{–}30\\text{ mEq/h}$ de $K^+$ até atingir valor seguro.\n- **$K^+$ entre $3{,}3$ e $5{,}2\\text{ mEq/L}$**: iniciar insulina venosa **e** adicionar $K^+$ na hidratação.\n- **$K^+ > 5{,}2\\text{ mEq/L}$**: iniciar insulina *sem* repor $K^+$ e reavaliar em 2 horas.\n\nAlém disso, lembre-se de calcular o **Sódio Corrigido** pela hiperglicemia (neste caso, $Na^+ = 132\\text{ mEq/L}$ é pseudo-hiponatremia translocacional):\n\n$$\\text{Na}^+_{\\text{corr}} = \\text{Na}^+_{\\text{medido}} + 1{,}6 \\times \\frac{\\text{Glicemia} - 100}{100} = 132 + 1{,}6 \\times \\frac{468 - 100}{100} \\approx 137{,}9\\text{ mEq/L}$$',
    perolaClinica:
      '**Regra do $K^+$ na CAD:** $K^+ < 3{,}3\\text{ mEq/L}$ $\\rightarrow$ **segura a insulina** e repõe $K^+$ primeiro. Bicarbonato só se $\\text{pH} < 6{,}9$.',
    referencias: [
      'ADA / EASD / JBDS Consensus Report: Hyperglycemic Crises in Adults With Diabetes (Diabetes Care, 2024).',
      'Sociedade Brasileira de Diabetes — Diretriz Oficial 2024.',
    ],
  },
  {
    id: 'q-unicamp-2025-go-09',
    code: 'Q-UNI25-0741',
    grandeAreaId: 'ginecologia_obstetricia',
    grandeArea: 'Ginecologia e Obstetrícia',
    tema: 'Obstetrícia / Urgências',
    subtema: 'Pré-Eclâmpsia com Sinais de Gravidade e Síndrome HELLP',
    banca: 'COMVEST',
    instituicao: 'UNICAMP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Primigesta de 24 anos, com 33 semanas e 4 dias de idade gestacional, procura o pronto-socorro obstétrico queixando-se de cefaleia fronto-occipital intensa, escotomas cintilantes e dor epigástrica em barra há 4 horas. Ao exame: PA 174/112 mmHg (confirmada após 15 min), reflexos patelares exaltados (+++/4+), batimentos cardíacos fetais 144 bpm, dinâmica uterina ausente. Os exames laboratoriais colhidos mostram o perfil abaixo. Qual conjunto de medidas representa a conduta imediata prioritária?',
    labTable: [
      { exame: 'Plaquetas', resultado: '82.000 /mm³', referencia: '150.000–400.000 /mm³', alterado: 'baixo' },
      { exame: 'TGO (AST)', resultado: '138 U/L', referencia: '< 32 U/L', alterado: 'alto' },
      { exame: 'DHL', resultado: '740 U/L', referencia: '< 250 U/L', alterado: 'alto' },
      { exame: 'Creatinina', resultado: '1,3 mg/dL', referencia: '< 0,9 mg/dL', alterado: 'alto' },
      { exame: 'Relação Ptn/Cr urinária', resultado: '0,68', referencia: '< 0,30', alterado: 'alto' },
    ],
    alternativas: [
      {
        letter: 'A',
        text: 'Sulfato de magnésio IV (esquema de Zuspan ou Pritchard) para profilaxia de eclâmpsia, anti-hipertensivo de ação rápida (hidralazina IV ou nifedipino VO) e programação de resolução da gestação após estabilização materna.',
        explanation:
          'Correta. A paciente apresenta iminência de eclâmpsia, emergência hipertensiva (PA ≥ 160/110) e síndrome HELLP (hemólise com DHL > 600, AST ≥ 2x LSN e plaquetas < 100.000). A prioridade é prevenir convulsões com sulfato de magnésio, reduzir a PA com segurança (alvo 140–155 / 90–100 mmHg com hidralazina IV ou nifedipino VO) e resolver a gestação após estabilização materna, independentemente da idade gestacional na síndrome HELLP.',
        communityPct: 74.5,
      },
      {
        letter: 'B',
        text: 'Conduta expectante rigorosa até completar 34 semanas após dois dias completos de betametasona, utilizando apenas metildopa oral para controle pressórico.',
        explanation:
          'Incorreta (Principal distrator). Embora a corticoide antenatal possa ser iniciada se o parto não for imediato, a síndrome HELLP e a iminência de eclâmpsia contraindicam conduta expectante prolongada; além disso, metildopa não serve para crise hipertensiva aguda.',
        communityPct: 14.9,
      },
      {
        letter: 'C',
        text: 'Fenitoína venosa como primeira escolha para neuroproteção materna, nitroprussiato de sódio IV e cesariana imediata em sala de emergência sem aguardar estabilização.',
        explanation:
          'Incorreta. O sulfato de magnésio é amplamente superior à fenitoína e benzodiazepínicos na prevenção/tratamento de eclâmpsia; nitroprussiato é evitado pelo risco de intoxicação fetal por cianeto; a estabilização materna sempre precede o parto.',
        communityPct: 5.1,
      },
      {
        letter: 'D',
        text: 'Transfusão imediata de concentrado de plaquetas (pois < 100.000/mm³) seguida de indução com misoprostol sem sulfato de magnésio.',
        explanation:
          'Incorreta. A transfusão profilática de plaquetas na síndrome HELLP é indicada geralmente se plaquetas < 50.000/mm³ para cesariana ou < 20.000/mm³ para parto vaginal (ou sangramento ativo), e o sulfato de magnésio é mandatório.',
        communityPct: 5.5,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 5110,
    taxaAcertoGlobal: 74.5,
    comentarioGeral:
      'Tríade clássica de prova em Obstetrícia: PA ≥ 160/110 + sintomas de iminência de eclâmpsia (cefaleia, escotomas, epigastralgia) + síndrome HELLP. Lembre-se de monitorar a intoxicação pelo sulfato de magnésio avaliando reflexo patelar, frequência respiratória (≥ 16 irpm) e diurese (≥ 25–30 mL/h), mantendo gluconato de cálcio 10% como antídoto à beira-leito.',
    perolaClinica:
      'Esquema de Zuspan (IV): ataque 4 g em 15–20 min + manutenção 1–2 g/h em BIC. Antídoto da intoxicação por MgSO₄: Gluconato de cálcio 10% (10 mL IV lento).',
    referencias: [
      'FEBRASGO — Protocolo de Pré-Eclâmpsia (2023).',
      'ACOG Practice Bulletin No. 222 — Gestational Hypertension and Preeclampsia.',
    ],
  },
  {
    id: 'q-sussp-2025-infecto-10',
    code: 'Q-SUS25-0309',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Infectologia',
    subtema: 'Dengue: Classificação de Risco e Manejo Volêmico',
    banca: 'VUNESP',
    instituicao: 'SUS-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2025,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Homem de 36 anos, 70 kg, no 4º dia de quadro febril agudo com diagnóstico confirmado de dengue (NS1 reagente), evoluiu com defervescência hoje pela manhã, porém refere dor abdominal intensa e contínua, dois episódios de vômitos persistentes e tontura ao levantar. Ao exame: consciente, PA 112/76 mmHg em decúbito (98/68 mmHg em ortostase), FC 104 bpm, extremidades aquecidas, tempo de enchimento capilar 2 segundos, hepatomegalia dolorosa a 3 cm do rebordo costal direito. Hemograma: Hb 16,2 g/dL, Ht 49% (basal prévio 42%), plaquetas 58.000/mm³. De acordo com o Manual de Manejo Clínico da Dengue do Ministério da Saúde (2024), qual é a classificação do paciente e a reposição volêmica inicial indicada?',
    alternativas: [
      {
        letter: 'A',
        text: 'Grupo B; hidratação oral supervisionada de 60 mL/kg/dia e liberação com retorno diário.',
        explanation:
          'Incorreta. A presença de dor abdominal intensa e contínua, vômitos persistentes, hipotensão postural, hepatomegalia > 2 cm e hemoconcentração configura SINAIS DE ALARME, enquadrando o paciente no Grupo C (não B).',
        communityPct: 7.3,
      },
      {
        letter: 'B',
        text: 'Grupo C; internação em leito de observação/hospitalar com reposição imediata de soro fisiológico 0,9% 10 mL/kg na primeira hora, reavaliando clínica e hematócrito.',
        explanation:
          'Correta. Sinais de alarme sem choque instalado definem o Grupo C. O protocolo do Ministério da Saúde (2024) preconiza reposição imediata de 10 mL/kg de soro fisiológico 0,9% na 1ª hora (podendo repetir até 3 vezes se necessário), seguida de fase de manutenção e monitoramento rigoroso de hematócrito e diurese.',
        communityPct: 51.4,
      },
      {
        letter: 'C',
        text: 'Grupo D; expansão rápida com 20 mL/kg de solução cristaloide em 20 minutos e transfusão profilática de plaquetas.',
        explanation:
          'Incorreta (Principal distrator). O esquema de 20 mL/kg em 20 minutos é destinado ao Grupo D (choque com hipotensão, pressão arterial convergente ≤ 20 mmHg, TEC > 2s, extremidades frias ou sangramento grave/disfunção orgânica). Além disso, plaquetopenia de 58.000/mm³ sem sangramento grave não indica transfusão.',
        communityPct: 33.8,
      },
      {
        letter: 'D',
        text: 'Grupo C; iniciar albumina humana 5% imediatamente devido ao extravasamento plasmático evidenciado pelo hematócrito de 49%.',
        explanation:
          'Incorreta. Coloides (como albumina) são reservados para casos refratários de choque (Grupo D) que não respondem às fases iniciais de cristaloide com hematócrito em ascensão.',
        communityPct: 4.9,
      },
      {
        letter: 'E',
        text: 'Grupo B; transfusão de concentrado de plaquetas e observação ambulatorial por 12 horas.',
        explanation:
          'Incorreta. Classificação equivocada e conduta contraindicada (transfusão desnecessária aumenta risco de sobrecarga volêmica).',
        communityPct: 2.6,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 5890,
    taxaAcertoGlobal: 51.4,
    comentarioGeral:
      'A edição de 2024 do Manual de Dengue do Ministério da Saúde unificou e refinou o protocolo de hidratação do Grupo C: reposição inicial de 10 mL/kg na 1ª hora (antes era 20 mL/kg em 2 horas — o que equivalia à mesma taxa horária, mas agora padronizado como 10 mL/kg/h!). Diferenciar Grupo C (sinais de alarme, hemodinamicamente estável sem choque) de Grupo D (choque / sangramento grave / disfunção orgânica) é crucial.',
    perolaClinica:
      'Dengue MS 2024: Grupo C (sinais de alarme) → 10 mL/kg na 1ª hora (SF 0,9%). Grupo D (choque/grave) → 20 mL/kg em até 20 minutos. Plaquetopenia isolada NÃO indica transfusão!',
    referencias: [
      'Ministério da Saúde — Dengue: Diagnóstico e Manejo Clínico (Adulto e Criança), 6ª edição (2024).',
    ],
  },
  {
    id: 'q-enare-2024-cir-11',
    code: 'Q-ENR24-0815',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Abdome Agudo',
    subtema: 'Colecistite Aguda Calculosa (Critérios de Tóquio)',
    banca: 'INSTITUTO AOCP',
    instituicao: 'ENARE',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2024,
    tipoProva: 'R+',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Mulher de 54 anos apresenta dor em hipocôndrio direito há 84 horas, febre de 38,4 °C e sinal de Murphy positivo. Ao exame: consciente, PA 124/78 mmHg, FC 96 bpm, sem icterícia. Hemograma mostra leucocitose de 19.600/mm³ com desvio à esquerda, bilirrubinas normais, creatinina 0,9 mg/dL, RNI 1,0. Ultrassonografia abdominal evidencia vesícula biliar distendida com cálculo impactado no infundíbulo, espessamento parietal de 6 mm e líquido pericolecístico. Segundo os Critérios de Tóquio (TG18), qual é a gravidade dessa colecistite aguda?',
    alternativas: [
      {
        letter: 'A',
        text: 'Grau I (Leve), pois não há disfunção orgânica ou icterícia associada.',
        explanation:
          'Incorreta (Principal distrator). Embora não haja disfunção orgânica (que definiria Grau III), a paciente apresenta dois critérios claros de Grau II (Moderada): leucocitose > 18.000/mm³ e duração dos sintomas > 72 horas.',
        communityPct: 29.4,
      },
      {
        letter: 'B',
        text: 'Grau II (Moderada), caracterizada por leucocitose > 18.000/mm³ e duração dos sintomas superior a 72 horas.',
        explanation:
          'Correta. Pelo Tokyo Guidelines 2018 (TG18), a colecistite aguda Grau II (moderada) é definida por qualquer um dos critérios: leucócitos > 18.000/mm³, massa palpável dolorosa em QSD, duração dos sintomas > 72h ou inflamação local acentuada (colecistite gangrenosa, enfisematosa, abscesso pericolecístico/hepático ou peritonite biliar).',
        communityPct: 58.7,
      },
      {
        letter: 'C',
        text: 'Grau III (Grave), devido à presença de líquido pericolecístico e espessamento parietal > 4 mm.',
        explanation:
          'Incorreta. Grau III exige disfunção orgânica (cardiovascular com droga vasoativa, neurológica, respiratória PaO₂/FiO₂ < 300, renal com Cr > 2,0, hepática com RNI > 1,5 ou hematológica com plaquetas < 100.000).',
        communityPct: 8.6,
      },
      {
        letter: 'D',
        text: 'Diagnóstico apenas suspeito, necessitando de colangiorressonância para confirmação antes da estratificação.',
        explanation:
          'Incorreta. O diagnóstico definitivo pelos Critérios de Tóquio é fechado com 1 critério A (Murphy + dor QSD) + 1 critério B (febre/leucocitose/PCR) + 1 critério C (achado ultrassonográfico típico).',
        communityPct: 3.3,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 3420,
    taxaAcertoGlobal: 58.7,
    comentarioGeral:
      'Os Critérios de Tóquio 2018 (TG18) são cobrados tanto no Acesso Direto quanto no R+ de Cirurgia Geral. Para classificar rapidamente: primeiro procure disfunção orgânica (Grau III); se ausente, procure sinais de gravidade local/temporal (Leuco > 18.000, > 72h, massa palpável, gangrena/abscesso = Grau II); se nenhum estiver presente, é Grau I (Leve).',
    perolaClinica:
      'TG18 Grau II (Moderada): Leuco > 18.000 | > 72h de evolução | Massa palpável em QSD | Inflamação local grave (abscesso, gangrena, enfisematosa). Grau III = Disfunção orgânica!',
    referencias: [
      'Yokoe M et al. Tokyo Guidelines 2018 (TG18): diagnostic criteria and severity grading of acute cholecystitis.',
      'Sabiston Textbook of Surgery, 21ª ed., Cap. 55 (Biliary System).',
    ],
  },
  {
    id: 'q-amrigs-2024-gineco-12',
    code: 'Q-AMR24-0440',
    grandeAreaId: 'ginecologia_obstetricia',
    grandeArea: 'Ginecologia e Obstetrícia',
    tema: 'Ginecologia',
    subtema: 'Rastreamento de Câncer de Colo Uterino (INCA/MS)',
    banca: 'FUNDATEC',
    instituicao: 'AMRIGS',
    estado: 'RS',
    regiao: 'Sul',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Mulher de 28 anos, imunocompetente, assintomática, realiza exame citopatológico do colo uterino de rotina cujo resultado retorna como "Células escamosas atípicas de significado indeterminado, possivelmente não neoplásicas (ASC-US)", amostra satisfatória com epitélios escamoso, glandular e metaplásico representados. Qual é a conduta recomendada pelas Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero (INCA/MS)?',
    alternativas: [
      {
        letter: 'A',
        text: 'Encaminhar imediatamente para colposcopia com biópsia dirigida.',
        explanation:
          'Incorreta (Principal distrator). O encaminhamento imediato para colposcopia ocorre em ASC-H, HSIL, AGC ou em pacientes imunossuprimidas com qualquer alteração. No ASC-US em imunocompetentes, repete-se a citologia.',
        communityPct: 22.8,
      },
      {
        letter: 'B',
        text: 'Repetir o exame citopatológico em 12 meses.',
        explanation:
          'Correta. Nas Diretrizes do INCA/MS, a conduta frente ao resultado de ASC-US depende da faixa etária: em mulheres < 25 anos, repetir em 3 anos; entre 25 e 29 anos, repetir em 12 meses; e em ≥ 30 anos, repetir em 6 meses.',
        communityPct: 41.2,
      },
      {
        letter: 'C',
        text: 'Repetir o exame citopatológico em 6 meses.',
        explanation:
          'Incorreta. A repetição em 6 meses para ASC-US aplica-se a mulheres com 30 anos ou mais. Entre 25 e 29 anos, o intervalo de repetição é de 12 meses.',
        communityPct: 30.1,
      },
      {
        letter: 'D',
        text: 'Realizar exérese da zona de transformação (EZT) ambulatorial ("ver e tratar").',
        explanation:
          'Incorreta. O método "ver e tratar" aplica-se em cenários selecionados de HSIL com colposcopia satisfatória e achados maiores concordantes em mulheres ≥ 25 anos, nunca em ASC-US.',
        communityPct: 5.9,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 4650,
    taxaAcertoGlobal: 41.2,
    comentarioGeral:
      'Esta é uma das pegadinhas de faixa etária mais tradicionais das bancas brasileiras (especialmente AMRIGS, USP e ENARE). Em ASC-US (imunocompetente), a conduta é estratificada exatamente nos cortes de 25 e 30 anos devido à alta taxa de clareamento espontâneo do HPV em mulheres jovens.',
    perolaClinica:
      'ASC-US (INCA/MS): < 25 anos → repetir em 3 anos | 25 a 29 anos → repetir em 12 meses | ≥ 30 anos → repetir em 6 meses. Se persistir na repetição → Colposcopia!',
    referencias: [
      'INCA / Ministério da Saúde — Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero, 2ª ed.',
      'FEBRASGO — Tratado de Ginecologia.',
    ],
  },
  {
    id: 'q-uepa-2024-ped-13',
    code: 'Q-UEP24-0227',
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Infectopediatria',
    subtema: 'Bronquiolite Viral Aguda',
    banca: 'UEPA',
    instituicao: 'UEPA',
    estado: 'PA',
    regiao: 'Norte',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Lactente de 5 meses, previamente hígido e nascido a termo, é levado à emergência com história de coriza hialina e febre baixa há 3 dias, evoluindo hoje com tosse, taquipneia e dificuldade para mamar. Ao exame físico: ativo, hidratado, FR 58 irpm, tiragem subcostal leve, SpO₂ 94% em ar ambiente, ausculta pulmonar com sibilos expiratórios difusos e crepitações finas bilaterais. É o primeiro episódio de sibilância. Qual é a conduta terapêutica baseada nas melhores evidências atuais (AAP/SBP)?',
    alternativas: [
      {
        letter: 'A',
        text: 'Prednisolona oral 1 mg/kg/dia por 5 dias associada a salbutamol inalatório de 4/4h.',
        explanation:
          'Incorreta (Principal distrator). Corticosteroides sistêmicos e broncodilatadores de rotina NÃO demonstram benefício na redução de internação ou tempo de doença na bronquiolite viral aguda típica.',
        communityPct: 20.5,
      },
      {
        letter: 'B',
        text: 'Medidas de suporte: lavagem nasal com solução salina, manutenção da hidratação/oferta nutricional fracionada e orientações de sinais de alarme (sem broncodilatador ou corticoide de rotina).',
        explanation:
          'Correta. O quadro clínico é clássico de Bronquiolite Viral Aguda (VSR como principal agente): primeiro episódio de sibilância em lactente < 2 anos após pródromos catarrais. Com SpO₂ 94% (≥ 90–92%), bom estado geral e sem desconforto grave, o manejo é exclusivamente de suporte (desobstrução nasal, hidratação e vigilância).',
        communityPct: 70.3,
      },
      {
        letter: 'C',
        text: 'Iniciar amoxicilina 50 mg/kg/dia devido à presença de crepitações finas bilaterais sugestivas de pneumonia bacteriana.',
        explanation:
          'Incorreta. Crepitações finas difusas associadas a sibilos são achados auscultatórios habituais da própria bronquiolite viral e não indicam antibiótico.',
        communityPct: 4.8,
      },
      {
        letter: 'D',
        text: 'Oxigenoterapia em cateter nasal imediata para manter SpO₂ ≥ 98% e fisioterapia respiratória com tapotagem.',
        explanation:
          'Incorreta. Oxigênio suplementar é indicado geralmente quando SpO₂ < 90–92%, e manobras convencionais de fisioterapia (tapotagem/vibração) não são recomendadas na fase aguda da BVA.',
        communityPct: 4.4,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 3780,
    taxaAcertoGlobal: 70.3,
    comentarioGeral:
      'Na Bronquiolite Viral Aguda, a prova avalia se o candidato sabe "o que NÃO fazer". Evitar prescrições desnecessárias (corticoide, beta-2 agonista de rotina, antibiótico, radiografia de tórax em casos típicos leves) é o foco central das diretrizes da SBP e da Academia Americana de Pediatria.',
    perolaClinica:
      'Bronquiolite Viral Aguda (VSR): diagnóstico CLÍNICO! Tratamento = Suporte (lavagem nasal + hidratação + O₂ apenas se SpO₂ < 90–92%). NÃO fazer corticoide, broncodilatador ou ATB de rotina.',
    referencias: [
      'Sociedade Brasileira de Pediatria — Diretrizes para o Manejo da Infecção Causada pelo Vírus Sincicial Respiratório.',
      'Ralston SL et al. Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis (AAP).',
    ],
  },
  {
    id: 'q-revalida-2025-ped-14',
    code: 'Q-REV25-0108',
    grandeAreaId: 'pediatria',
    grandeArea: 'Pediatria',
    tema: 'Puericultura / Imunizações',
    subtema: 'Calendário Vacinal PNI e Contraindicações',
    banca: 'INEP',
    instituicao: 'Revalida',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2025,
    tipoProva: 'Revalida',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Lactente de 4 meses é trazido à Unidade Básica de Saúde para atualização vacinal. A mãe relata que, 18 horas após receber a primeira dose das vacinas de rotina aos 2 meses, a criança apresentou episódio súbito de palidez cutânea, hipotonia generalizada e diminuição da responsividade com duração de 15 minutos, evoluindo com recuperação espontânea e completa após avaliação no pronto-socorro. Sem outras comorbidades. Qual é a orientação correta quanto à vacina pentavalente (DTP + Hib + Hepatite B) nesta consulta?',
    alternativas: [
      {
        letter: 'A',
        text: 'Contraindicar definitivamente qualquer vacina contra difteria, tétano e coqueluche pelo risco de encefalopatia pós-vacinal.',
        explanation:
          'Incorreta. O quadro descrito é um Episódio Hipotônico-Hiporresponsivo (EHH), e não encefalopatia. Não contraindica vacinação contra difteria/tétano e permite esquema acelular (DTPa).',
        communityPct: 11.2,
      },
      {
        letter: 'B',
        text: 'Substituir o componente pertussis de células inteiras pela vacina DTP acelular (DTPa), disponível via CRIE, mantendo o esquema para Hib e Hepatite B.',
        explanation:
          'Correta. A criança apresentou Episódio Hipotônico-Hiporresponsivo (EHH) dentro de 48h após a vacina pentavalente (atribuído principalmente ao componente pertussis de células inteiras). Segundo o Manual de Vigilância Epidemiológica de Eventos Supostamente Atribuíveis à Vacinação (ESAVI/PNI), a conduta é substituir DTP por DTPa (acelular) via CRIE nas doses subsequentes (ou penta/hexa acelular conforme disponibilidade do CRIE).',
        communityPct: 63.5,
      },
      {
        letter: 'C',
        text: 'Administrar normalmente a vacina pentavalente de células inteiras associada a paracetamol profilático 1 hora antes.',
        explanation:
          'Incorreta (Principal distrator). Embora febre alta ou choro persistente não contraindiquem a DTP de células inteiras, o EHH e a convulsão febril/afebril pós-DTP são indicações formais de troca para DTPa no CRIE.',
        communityPct: 17.8,
      },
      {
        letter: 'D',
        text: 'Substituir pela vacina dupla infantil (DT — sem componente pertussis), pois a DTPa também é contraindicada no EHH.',
        explanation:
          'Incorreta. A DT (remoção total do componente pertussis) é reservada para ENCEFALOPATIA aguda ocorrida até 7 dias após a dose anterior de DTP/pentavalente.',
        communityPct: 7.5,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 4120,
    taxaAcertoGlobal: 63.5,
    comentarioGeral:
      'Tema clássico e recorrente tanto no Revalida INEP quanto no ENARE e SUS-SP. Saber diferenciar quando trocar DTP por DTPa (acelular) versus quando trocar por DT (sem pertussis) garante acertos certos em imunizações.',
    perolaClinica:
      'ESAVI pós-Pentavalente: EHH (até 48h) ou Convulsão (até 72h) → trocar para DTPa (CRIE). Encefalopatia (até 7 dias) → trocar para DT (retira pertussis).',
    referencias: [
      'Ministério da Saúde — Manual dos Centros de Referência para Imunobiológicos Especiais (CRIE), 6ª ed. (2023).',
      'Ministério da Saúde — Manual de Vigilância Epidemiológica de Eventos Adversos Pós-Vacinação.',
    ],
  },
  {
    id: 'q-sussp-2024-sus-15',
    code: 'Q-SUS24-0901',
    grandeAreaId: 'medicina_preventiva',
    grandeArea: 'Medicina Preventiva e Social',
    tema: 'Políticas de Saúde / SUS',
    subtema: 'Princípios Doutrinários, Organizativos e Atenção Primária',
    banca: 'VUNESP',
    instituicao: 'SUS-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2024,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Uma equipe da Estratégia Saúde da Família (ESF) identifica em seu território adscrito um aumento expressivo de casos de hipertensão descompensada entre trabalhadores rurais com baixa escolaridade. Para enfrentar o problema, a equipe reorganiza a agenda criando um turno estendido noturno para esse grupo específico, promove visitas domiciliares com agentes comunitários e articula o encaminhamento regulado dos casos com lesão de órgão-alvo para o ambulatório de cardiologia regional, mantendo o vínculo contínuo na UBS. Quais princípios do SUS e atributos da Atenção Primária à Saúde (Starfield) estão mais diretamente exemplificados nessa ação?',
    alternativas: [
      {
        letter: 'A',
        text: 'Universalidade como princípio organizativo e focalização seletiva como atributo essencial da APS.',
        explanation:
          'Incorreta. Universalidade é princípio doutrinário (não organizativo), e focalização seletiva não faz parte dos atributos essenciais de Starfield.',
        communityPct: 6.4,
      },
      {
        letter: 'B',
        text: 'Equidade, integralidade e regionalização/hierarquização do SUS; acesso de primeiro contato, longitudinalidade e coordenação do cuidado na APS.',
        explanation:
          'Correta. Oferecer horário diferenciado a um grupo vulnerável exemplifica a EQUIDADE (tratar desigualmente os desiguais na medida de suas necessidades); articular atenção básica e especializada demonstra INTEGRALIDADE e HIERARQUIZAÇÃO; ampliar o turno facilita o ACESSO; manter o vínculo contínuo traduz LONGITUDINALIDADE; e regular o cuidado junto ao especialista representa COORDENAÇÃO DO CUIDADO.',
        communityPct: 78.6,
      },
      {
        letter: 'C',
        text: 'Descentralização administrativa exclusivamente, com ênfase no atributo derivado de orientação hospitalocêntrica.',
        explanation:
          'Incorreta. A APS opõe-se ao modelo hospitalocêntrico, e os atributos derivados de Starfield são orientação familiar, orientação comunitária e competência cultural.',
        communityPct: 3.2,
      },
      {
        letter: 'D',
        text: 'Igualdade estrita (mesma oferta de horário para todos) e desvinculação da UBS após encaminhamento à cardiologia.',
        explanation:
          'Incorreta (Principal distrator). Tratar todos de forma idêntica ignorando barreiras de acesso fere a equidade, e perder o vínculo ao encaminhar rompe a coordenação do cuidado e a longitudinalidade.',
        communityPct: 11.8,
      },
    ],
    gabaritoOficial: 'B',
    totalRespostasComunidade: 5640,
    taxaAcertoGlobal: 78.6,
    comentarioGeral:
      'Os atributos da Atenção Primária descritos por Bárbara Starfield (4 essenciais: Acesso de primeiro contato, Longitudinalidade, Integralidade, Coordenação do cuidado; 3 derivados: Orientação familiar, Orientação comunitária, Competência cultural) integrados aos princípios da Lei 8.080/90 são presença garantida em praticamente todas as provas de Medicina Preventiva.',
    perolaClinica:
      '4 Atributos Essenciais da APS (Starfield): Acesso · Longitudinalidade · Integralidade · Coordenação. 3 Derivados: Orientação Familiar · Orientação Comunitária · Competência Cultural.',
    referencias: [
      'Starfield B. Atenção Primária: equilíbrio entre necessidades de saúde, serviços e tecnologia (UNESCO/MS).',
      'Brasil — Lei nº 8.080/1990 e Política Nacional de Atenção Básica (PNAB).',
    ],
  },
  {
    id: 'q-psumg-2023-vigilancia-16',
    code: 'Q-PSU23-0551',
    grandeAreaId: 'medicina_preventiva',
    grandeArea: 'Medicina Preventiva e Social',
    tema: 'Vigilância em Saúde',
    subtema: 'Doenças de Notificação Compulsória Imediata (SINAN)',
    banca: 'AREMG',
    instituicao: 'PSU-MG',
    estado: 'MG',
    regiao: 'Sudeste',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: false,
    enunciado:
      'Durante plantão em unidade de pronto atendimento, o médico atende quatro pacientes distintos: (1) Suspeita de sarampo em criança não vacinada; (2) Caso confirmado de tuberculose pulmonar bacilífera; (3) Suspeita de meningite meningocócica em universitário; (4) Diagnóstico de sífilis adquirida em adulto assintomático. Segundo a Lista Nacional de Notificação Compulsória do Ministério da Saúde, quais casos exigem notificação IMEDIATA (em até 24 horas)?',
    alternativas: [
      {
        letter: 'A',
        text: 'Apenas os casos 1 (sarampo) e 3 (meningite meningocócica).',
        explanation:
          'Correta. Sarampo (doença exantemática em plano de eliminação/erradicação) e doença meningocócica (risco de surtos e necessidade imediata de quimioprofilaxia de contatos) exigem notificação compulsória IMEDIATA em até 24h. Tuberculose e sífilis adquirida são de notificação semanal.',
        communityPct: 66.9,
      },
      {
        letter: 'B',
        text: 'Os casos 1 (sarampo), 2 (tuberculose) e 3 (meningite meningocócica).',
        explanation:
          'Incorreta (Principal distrator). Embora a tuberculose seja uma doença de enorme relevância em saúde pública e de notificação obrigatória, sua periodicidade na Lista Nacional é SEMANAL, e não imediata.',
        communityPct: 24.1,
      },
      {
        letter: 'C',
        text: 'Todos os quatro casos exigem notificação imediata em até 24 horas.',
        explanation:
          'Incorreta. Tanto a tuberculose quanto a sífilis adquirida possuem periodicidade semanal.',
        communityPct: 5.8,
      },
      {
        letter: 'D',
        text: 'Apenas o caso 3 (meningite meningocócica), pois os demais aguardam confirmação laboratorial.',
        explanation:
          'Incorreta. A notificação imediata de doenças como sarampo e doença meningocócica deve ser feita já na SUSPEITA clínica, sem aguardar confirmação laboratorial.',
        communityPct: 3.2,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 3890,
    taxaAcertoGlobal: 66.9,
    comentarioGeral:
      'A Lista Nacional de Notificação Compulsória (Portaria de Consolidação GM/MS nº 4 e atualizações) é um clássico da Saúde Coletiva. Lembre-se da regra mnemônica: notificações imediatas (≤ 24h) envolvem doenças com alto potencial epidêmico, gravidade/mortalidade rápida, doenças preveníveis em erradicação/eliminação (sarampo, rubéola, poliomielite), acidentes por animais peçonhentos, raiva humana, violência sexual/tentativa de suicídio e óbitos por dengue/chikungunya/zika.',
    perolaClinica:
      'Notificação IMEDIATA (≤ 24h): Sarampo, Meningite meningocócica, Raiva, Animais peçonhentos, Violência sexual, Tentativa de suicídio, Botulismo, Febre amarela. Tuberculose, Hanseníase, HIV e Sífilis = SEMANAL!',
    referencias: [
      'Ministério da Saúde — Lista Nacional de Notificação Compulsória de Doenças, Agravos e Eventos de Saúde Pública (Portaria GM/MS atualizada).',
    ],
  },
  {
    id: 'q-usp-2021-desatualizada-17',
    code: 'Q-USP21-0114',
    grandeAreaId: 'clinica_medica',
    grandeArea: 'Clínica Médica',
    tema: 'Cardiologia',
    subtema: 'Insuficiência Cardíaca com Fração de Ejeção Reduzida',
    banca: 'FUVEST',
    instituicao: 'USP-SP',
    estado: 'SP',
    regiao: 'Sudeste',
    ano: 2021,
    tipoProva: 'Acesso Direto',
    anulada: false,
    desatualizada: true,
    enunciado:
      '[Questão marcada como Desatualizada pela mudança nas diretrizes de IC] Paciente de 64 anos com ICFER (FEVE 30%), classe funcional NYHA II, sem diabetes mellitus, já em uso otimizado de enalapril, carvedilol e espironolactona. Segundo o protocolo vigente à época da prova (2021), qual classe não era considerada terapia modificadora de mortalidade obrigatória de primeira linha para pacientes não diabéticos?',
    alternativas: [
      {
        letter: 'A',
        text: 'Betabloqueadores cardiosseletivos (bisoprolol ou succinato de metoprolol).',
        explanation: 'Incorreta. Betabloqueadores já constituíam pilar clássico de redução de mortalidade na ICFER.',
        communityPct: 8.4,
      },
      {
        letter: 'B',
        text: 'Antagonistas do receptor mineralocorticoide (espironolactona).',
        explanation: 'Incorreta. A espironolactona já era recomendada em NYHA II-IV com FEVE ≤ 35%.',
        communityPct: 11.2,
      },
      {
        letter: 'C',
        text: 'Inibidores de SGLT2 (dapagliflozina/empagliflozina) como parte da terapia quádrupla inicial obrigatória.',
        explanation:
          'Correta (Histórica — Desatualizada). Hoje, nas diretrizes SBC/ESC/AHA atuais, os iSGLT2 são pilar obrigatório da terapia quádrupla da ICFER independentemente da presença de diabetes mellitus. Esta questão permanece sinalizada como desatualizada para fins de filtro.',
        communityPct: 37.8,
      },
      {
        letter: 'D',
        text: 'Inibidores da enzima conversora de angiotensina (IECA).',
        explanation: 'Incorreta (Principal distrator). IECAs são pilares consagrados desde a década de 1990.',
        communityPct: 42.6,
      },
    ],
    gabaritoOficial: 'C',
    totalRespostasComunidade: 2140,
    taxaAcertoGlobal: 37.8,
    comentarioGeral:
      'Atenção: questão mantida no banco com a marcação de DESATUALIZADA. Atualmente, os quatro pilares fundamentais da ICFER (independentemente de diabetes) são: INRA (ou IECA), Betabloqueador, Antagonista Mineralocorticoide e iSGLT2.',
    perolaClinica:
      'Diretriz Atual de ICFER: Terapia Quádrupla precoce — INRA/IECA + Betabloqueador + Espironolactona + iSGLT2 (dapagliflozina ou empagliflozina), mesmo SEM diabetes!',
    referencias: [
      'Atualização de Tópicos Emergentes da Diretriz Brasileira de Insuficiência Cardíaca — SBC.',
    ],
  },
  {
    id: 'q-enare-2023-anulada-18',
    code: 'Q-ENR23-0774',
    grandeAreaId: 'cirurgia_geral',
    grandeArea: 'Cirurgia Geral',
    tema: 'Abdome Agudo',
    subtema: 'Apendicite Aguda e Escore de Alvarado',
    banca: 'INSTITUTO AOCP',
    instituicao: 'ENARE',
    estado: 'BR',
    regiao: 'Nacional',
    ano: 2023,
    tipoProva: 'Acesso Direto',
    anulada: true,
    desatualizada: false,
    enunciado:
      '[Questão Anulada pela Banca Oficial] Paciente masculino de 22 anos apresenta dor periumbilical com migração para fossa ilíaca direita há 18 horas, náuseas, febre de 37,8 °C, dor à descompressão brusca em ponto de McBurney e leucocitose de 13.400/mm³ com neutrofilia. Sobre o escore de Alvarado e a indicação de exames de imagem, assinale a alternativa correta.',
    alternativas: [
      {
        letter: 'A',
        text: 'O paciente soma 8 pontos no escore de Alvarado, indicando alta probabilidade de apendicite aguda.',
        explanation:
          'Gabarito preliminar. A questão foi posteriormente anulada pela banca devido à ambiguidade na descrição do critério de desvio à esquerda versus neutrofilia (>75%) no enunciado.',
        communityPct: 39.5,
      },
      {
        letter: 'B',
        text: 'A tomografia computadorizada de abdome é formalmente contraindicada em homens jovens com suspeita de apendicite.',
        explanation:
          'Incorreta. A TC tem elevada acurácia (>95%) e pode ser utilizada em casos duvidosos.',
        communityPct: 27.1,
      },
      {
        letter: 'C',
        text: 'A migração da dor e a febre valem 2 pontos cada no escore de Alvarado.',
        explanation:
          'Incorreta (Principal distrator). Os únicos itens que valem 2 pontos no escore de Alvarado (MANTRELS) são dor em FID (Tenderness) e Leucocitose > 10.000.',
        communityPct: 28.4,
      },
      {
        letter: 'D',
        text: 'A antibioticoterapia exclusiva substitui a apendicectomia em todos os casos não perfurados no Brasil.',
        explanation:
          'Incorreta. A apendicectomia laparoscópica permanece como tratamento padrão-ouro na maioria dos casos.',
        communityPct: 5.0,
      },
    ],
    gabaritoOficial: 'A',
    totalRespostasComunidade: 1950,
    taxaAcertoGlobal: 39.5,
    comentarioGeral:
      'Questão oficialmente anulada pela banca organizadora por imprecisão na pontuação do desvio à esquerda no escore MANTRELS. Utilize o filtro "Excluir anuladas/desatualizadas" no painel superior quando desejar treinar apenas questões válidas.',
    perolaClinica:
      'Escore de Alvarado (MANTRELS — 10 pontos): apenas Dor em FID (2 pts) e Leucocitose (2 pts) valem 2 pontos; todos os outros 6 itens valem 1 ponto cada.',
    referencias: [
      'Sabiston Textbook of Surgery, 21ª ed., Cap. 51 (The Appendix).',
    ],
  },
];
