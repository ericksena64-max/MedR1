#!/usr/bin/env python3
"""
Instalador único da skill medr1-batch-pipeline para o Antigravity.
Cria toda a árvore em .agents/skills/medr1-batch-pipeline/, aplica permissões
de execução, atualiza .gitignore e executa validação de sintaxe (py_compile).
"""

from __future__ import annotations

import argparse
import json
import os
import py_compile
import stat
import sys
from pathlib import Path
from typing import Dict


SKILL_REL_ROOT = Path(".agents/skills/medr1-batch-pipeline")

FILES: Dict[str, str] = {
    "SKILL.md": r'''---
name: medr1-batch-pipeline
description: >
  Extrai provas de residência médica em PDF de forma 100% determinística,
  enriquece com classificação taxonômica e comentários via Gemini Batch API
  (com Context Caching e roteamento Flash/Pro), audita divergências e integra
  ao MedR1. Use sempre que o usuário pedir para ingerir, importar em lote,
  processar PDFs de provas ou atualizar o banco de questões do MedR1.
---

# MedR1 Batch Pipeline (Zero Alucinação + Custo Mínimo)

## Regras Inegociáveis (Anti-Alucinação e Economia de Tokens)
1. **NUNCA leia o PDF da prova no chat.** Toda leitura de PDF, recorte de imagem e cruzamento de gabarito deve ser feita exclusivamente via `scripts/extract_pdf.py`.
2. **NUNCA reescreva enunciados ou alternativas com LLM.** O LLM recebe a questão pronta e retorna apenas metadados e comentários; o merge final é determinístico pelo `numeroOriginal`.
3. **Exija sempre `--caderno` e `--banca`** antes de cruzar o gabarito definitivo (evita troca silenciosa entre Tipo 1/2/3/4).
4. **Roteamento obrigatório:**
   - Questões texto puro -> `gemini-2.5-flash` (Batch API).
   - Questões com imagem clínica, tabela complexa, anuladas ou sinalizadas com divergência -> `gemini-2.5-pro` (Batch API).

---

## Workflow em 4 Estágios

### Calibração Visual (Opcional — recomendado para bancas novas)
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/calibrate_layout.py \
  --prova "<caminho_prova.pdf>" \
  --banca "<ENARE|USP|UNIFESP|SUS-SP|PSU-MG|UEPA|GENERICO>" \
  --profiles ".agents/skills/medr1-batch-pipeline/references/perfis_bancas.json" \
  --page 2
```

### Estágio 1 — Extração Determinística (0 tokens)
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/extract_pdf.py \
  --prova "<caminho_prova.pdf>" \
  --gabarito "<caminho_gabarito.pdf>" \
  --banca "<ENARE|USP|UNIFESP|SUS-SP|PSU-MG|UEPA|GENERICO>" \
  --caderno "<A|B|1|2>" \
  --profiles ".agents/skills/medr1-batch-pipeline/references/perfis_bancas.json" \
  --out "tmp/<exam_id>/extracted.json"
```

**Checkpoint:** Verifique no stdout se o total de questões bate com a prova, quantas têm imagem e se alguma ficou sem gabarito. Se houver problema, calibre `references/perfis_bancas.json` antes de prosseguir.

### Estágio 2 — Enriquecimento via Gemini Batch API
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/batch_gemini.py \
  --input "tmp/<exam_id>/extracted.json" \
  --taxonomy ".agents/skills/medr1-batch-pipeline/references/taxonomia_medr1.json" \
  --schema ".agents/skills/medr1-batch-pipeline/references/response_schema.json" \
  --out "tmp/<exam_id>/enriched.jsonl"
```

Use `--dry-run` para simular sem chamar a API ou `--no-wait` / `--collect` para lotes assíncronos.

### Estágio 3 — Merge e Auditoria Automática
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/merge_and_audit.py \
  --extracted "tmp/<exam_id>/extracted.json" \
  --enriched "tmp/<exam_id>/enriched.jsonl" \
  --taxonomy ".agents/skills/medr1-batch-pipeline/references/taxonomia_medr1.json" \
  --out "tmp/<exam_id>/validated.json" \
  --report "tmp/<exam_id>/audit_report.md"
```

**Checkpoint obrigatório:** Leia `tmp/<exam_id>/audit_report.md` e apresente ao usuário apenas a fila `[REVISAR]` para decisão.

### Estágio 4 — Integração ao MedR1
```bash
python3 .agents/skills/medr1-batch-pipeline/scripts/export_medr1.py \
  --input "tmp/<exam_id>/validated.json" \
  --target "<ts_chunk|supabase>" \
  --exam-id "<exam_id>" \
  --update-hashes ".agents/skills/medr1-batch-pipeline/references/existing_hashes.json"
```
''',
    "references/response_schema.json": r'''{
  "type": "OBJECT",
  "required": [
    "numeroOriginal",
    "grandeAreaId",
    "tema",
    "subtema",
    "tags",
    "concordaComGabarito",
    "precisaRevisaoHumana",
    "comentarioGeral",
    "explicacoesPorAlternativa",
    "referencias"
  ],
  "properties": {
    "numeroOriginal": { "type": "INTEGER" },
    "grandeAreaId": {
      "type": "STRING",
      "enum": [
        "clinica-medica",
        "cirurgia-geral",
        "pediatria",
        "ginecologia-obstetricia",
        "medicina-preventiva"
      ]
    },
    "tema": { "type": "STRING" },
    "subtema": { "type": "STRING" },
    "tags": {
      "type": "ARRAY",
      "items": { "type": "STRING" }
    },
    "concordaComGabarito": {
      "type": "BOOLEAN",
      "description": "False se o gabarito oficial divergir da diretriz médica atual ou parecer incorreto."
    },
    "motivoDivergencia": {
      "type": "STRING",
      "nullable": true
    },
    "precisaRevisaoHumana": {
      "type": "BOOLEAN",
      "description": "True se houver imagem ambígua, divergência de gabarito, questão anulada ou baixa confiança."
    },
    "comentarioGeral": {
      "type": "STRING",
      "description": "Síntese clínica direta (máx. 3 frases) explicando o raciocínio-chave."
    },
    "explicacoesPorAlternativa": {
      "type": "OBJECT",
      "properties": {
        "A": { "type": "STRING" },
        "B": { "type": "STRING" },
        "C": { "type": "STRING" },
        "D": { "type": "STRING" },
        "E": { "type": "STRING", "nullable": true }
      },
      "required": ["A", "B", "C", "D"]
    },
    "referencias": {
      "type": "ARRAY",
      "items": { "type": "STRING" },
      "description": "Apenas diretrizes reais e verificáveis (ex: Ministério da Saúde, SBC, FEBRASGO, SBP, ATLS)."
    }
  }
}
''',
    "references/perfis_bancas.json": r'''{
  "GENERICO": {
    "banca_organizadora": "Fallback padrão",
    "cols": 2,
    "alternativas_esperadas": 5,
    "header_margin_ratio": 0.06,
    "footer_margin_ratio": 0.06,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})\\s*[\\.\\-\\)\\:]?(?:\\s+|$)",
    "alt_regex": "^\\(?([A-E])\\)?[\\.\\)\\-\\:]\\s+(.+)$",
    "observacoes": "Perfil de fallback para provas não mapeadas."
  },
  "ENARE": {
    "banca_organizadora": "FGV (2024+) / Instituto AOCP (até 2023)",
    "cols": 2,
    "alternativas_esperadas": 5,
    "header_margin_ratio": 0.075,
    "footer_margin_ratio": 0.065,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})(?:\\s*$|\\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\\(])",
    "alt_regex": "^\\(?([A-E])\\)?[\\)\\.]\\s+(.+)$",
    "observacoes": "FGV usa cabeçalho alto com nome do caderno e alternativas (A) ou A). Se usar PDF antigo da AOCP com 1 coluna, ajuste cols para 1."
  },
  "USP": {
    "banca_organizadora": "FUVEST (USP-SP)",
    "cols": 1,
    "alternativas_esperadas": 4,
    "header_margin_ratio": 0.065,
    "footer_margin_ratio": 0.06,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})[\\.\\-\\)]?(?:\\s+|$)",
    "alt_regex": "^\\(?([A-D])\\)?[\\)\\.]\\s+(.+)$",
    "observacoes": "Layout clássico em 1 coluna larga com 4 alternativas (A-D)."
  },
  "UNIFESP": {
    "banca_organizadora": "VUNESP / Própria",
    "cols": 2,
    "alternativas_esperadas": 5,
    "header_margin_ratio": 0.07,
    "footer_margin_ratio": 0.06,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})[\\.\\)]?\\s+",
    "alt_regex": "^\\(?([A-E])\\)?[\\)\\.]\\s+(.+)$",
    "observacoes": "Diagramação em 2 colunas com linha divisória central."
  },
  "SUS-SP": {
    "banca_organizadora": "VUNESP / Quadrix",
    "cols": 2,
    "alternativas_esperadas": 5,
    "header_margin_ratio": 0.065,
    "footer_margin_ratio": 0.065,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})\\.\\s+",
    "alt_regex": "^\\(([A-E])\\)\\s+(.+)$",
    "observacoes": "Padrão VUNESP com numeração '01.' e alternativas entre parênteses '(A)'."
  },
  "PSU-MG": {
    "banca_organizadora": "AREMG",
    "cols": 1,
    "alternativas_esperadas": 4,
    "header_margin_ratio": 0.07,
    "footer_margin_ratio": 0.06,
    "question_regex": "^QUEST[ÃA]O\\s+0*(\\d{1,3})\\b",
    "alt_regex": "^([A-Da-d])\\)\\s+(.+)$",
    "observacoes": "Caderno em 1 coluna com 4 alternativas (A-D) e cabeçalho institucional AREMG."
  },
  "UEPA": {
    "banca_organizadora": "UEPA (PSU / DAA)",
    "cols": 2,
    "alternativas_esperadas": 5,
    "header_margin_ratio": 0.08,
    "footer_margin_ratio": 0.065,
    "question_regex": "^(?:QUEST[ÃA]O\\s+)?0*(\\d{1,3})[\\.\\-\\)]\\s*",
    "alt_regex": "^([a-eA-E])[\\)\\.]\\s+(.+)$",
    "observacoes": "Cabeçalho mais alto com brasão da UEPA. Alternativas frequentemente em minúscula 'a)'."
  }
}
''',
    "references/taxonomia_medr1.json": r'''{
  "versao": "1.0.0",
  "descricao": "Taxonomia canônica do MedR1 no padrão Pareto 80/20 para provas de Residência Médica.",
  "grandesAreas": {
    "clinica-medica": {
      "nome": "Clínica Médica",
      "temas": {
        "Cardiologia": [
          "Hipertensão Arterial Sistêmica e Crise Hipertensiva",
          "Síndrome Coronariana Aguda e IAM",
          "Insuficiência Cardíaca Aguda e Crônica",
          "Arritmias, Fibrilação Atrial e ACLS",
          "Valvopatias e Endocardite Infecciosa",
          "Dislipidemia, Risco Cardiovascular e Prevenção",
          "Doenças do Pericárdio e Miocardiopatias"
        ],
        "Endocrinologia": [
          "Diabetes Mellitus: Diagnóstico e Tratamento",
          "Complicações Agudas do Diabetes (CAD e EHH)",
          "Doenças da Tireoide (Hipo, Hiper e Nódulos)",
          "Doenças da Adrenal (Cushing, Addison, Feocromocitoma)",
          "Obesidade e Síndrome Metabólica",
          "Osteoporose e Distúrbios do Cálcio",
          "Doenças da Hipófise"
        ],
        "Pneumologia": [
          "Pneumonia Adquirida na Comunidade e Nosocomial",
          "Tuberculose Pulmonar e Extrapulmonar",
          "Asma no Adulto",
          "DPOC e Exacerbações",
          "Tromboembolismo Pulmonar (TEP)",
          "Derrame Pleural e Pneumotórax",
          "Doenças Intersticiais e Neoplasia de Pulmão"
        ],
        "Infectologia": [
          "HIV/AIDS e Infecções Oportunistas",
          "Arboviroses (Dengue, Zika, Chikungunya, Febre Amarela)",
          "ISTs e Sífilis no Adulto",
          "Sepse e Choque Séptico",
          "Meningites e Encefalites",
          "Endemias Brasileiras (Malária, Leishmaniose, Chagas, Leptospirose)",
          "Hepatites Virais",
          "Antimicrobianos e Infecções de Pele/Partes Moles"
        ],
        "Nefrologia": [
          "Lesão Renal Aguda (LRA)",
          "Doença Renal Crônica (DRC)",
          "Glomerulopatias (Nefrítica e Nefrótica)",
          "Distúrbios Hidroeletrolíticos (Sódio e Potássio)",
          "Distúrbios Ácido-Base",
          "Infecção do Trato Urinário e Nefrolitíase"
        ],
        "Gastroenterologia e Hepatologia": [
          "DRGE, Dispepsia e Doença Ulcerosa Péptica",
          "Hemorragia Digestiva Alta e Baixa",
          "Cirrose Hepática e Complicações (Ascite, PBE, Encefalopatia)",
          "Doença Inflamatória Intestinal e Doença Celíaca",
          "Diarreias Agudas e Crônicas",
          "Pancreatite Aguda e Crônica"
        ],
        "Neurologia": [
          "AVC Isquêmico e Hemorrágico",
          "Cefaleias Primárias e Secundárias",
          "Epilepsia e Estado de Mal Epiléptico",
          "Demências e Delirium",
          "Fraqueza Muscular, Guillain-Barré e Miastenia Gravis",
          "Doença de Parkinson e Distúrbios do Movimento"
        ],
        "Hematologia": [
          "Anemias Carenciais (Ferropriva e Megaloblástica)",
          "Anemias Hemolíticas e Doença Falciforme",
          "Leucemias, Linfomas e Mieloma Múltiplo",
          "Distúrbios da Hemostasia e Plaquetopenias",
          "Hemoterapia e Reações Transfusionais"
        ],
        "Reumatologia": [
          "Artrite Reumatoide",
          "Lúpus Eritematoso Sistêmico e SAAF",
          "Espondiloartrites",
          "Vasculites Sistêmicas",
          "Artrites Microcristalinas (Gota) e Artrite Séptica",
          "Osteoartrite e Fibromialgia"
        ],
        "Psiquiatria": [
          "Transtornos Depressivos e Transtorno Bipolar",
          "Transtornos de Ansiedade e TOC",
          "Esquizofrenia e Transtornos Psicóticos",
          "Dependência Química e Síndromes de Abstinência",
          "Emergências Psiquiátricas e Risco de Suicídio"
        ],
        "Dermatologia": [
          "Hanseníase",
          "Câncer de Pele (Melanoma e Não Melanoma)",
          "Farmacodermias Graves (SSJ, NET, DRESS)",
          "Dermatoses Infecciosas e Inflamatórias"
        ],
        "Emergências e Terapia Intensiva": [
          "Intoxicações Exógenas e Acidentes por Animais Peçonhentos",
          "Insuficiência Respiratória, Ventilação Mecânica e SARA",
          "Choque e Drogas Vasoativas",
          "Cuidados Paliativos e Morte Encefálica"
        ]
      }
    },
    "cirurgia-geral": {
      "nome": "Cirurgia Geral",
      "temas": {
        "Trauma e ATLS": [
          "Atendimento Inicial (XABCDE) e Via Aérea Definitiva",
          "Choque Hemorrágico e Reposição Volêmica",
          "Trauma Torácico",
          "Trauma Abdominal e Pélvico",
          "Traumatismo Cranioencefálico e Raquimedular",
          "Queimaduras e Trauma Elétrico"
        ],
        "Abdome Agudo": [
          "Abdome Agudo Inflamatório (Apendicite e Diverticulite)",
          "Abdome Agudo Obstrutivo",
          "Abdome Agudo Perfurativo",
          "Abdome Agudo Vascular (Isquemia Mesentérica)",
          "Abdome Agudo Hemorrágico"
        ],
        "Vias Biliares, Fígado e Pâncreas": [
          "Colelitíase e Colecistite Aguda",
          "Coledocolitíase, Colangite e Mirizzi",
          "Pancreatite Aguda e Complicações Cirúrgicas",
          "Neoplasias Hepatobiliopancreáticas e Lesões Focais Hepáticas"
        ],
        "Parede Abdominal e Hérnias": [
          "Hérnia Inguinal e Femoral (Classificação e Técnicas)",
          "Hérnias Umbilical, Epigástrica e Incisional",
          "Complicações de Hérnias (Encarceramento e Estrangulamento)"
        ],
        "Cirurgia Digestiva e Oncologia": [
          "Câncer Colorretal e Pólipos",
          "Câncer Gástrico e de Esôfago",
          "Doenças Orificiais (Hemorroidas, Fissura, Fístula, Abscesso)",
          "Doença do Refluxo, Acalasia e Cirurgia Bariátrica"
        ],
        "Perioperatório e Complicações Cirúrgicas": [
          "Avaliação Pré-Operatória e Risco Cirúrgico",
          "Resposta Metabólica ao Trauma e Nutrição Cirúrgica",
          "Complicações Pós-Operatórias e Infecção de Sítio Cirúrgico",
          "Cicatrização, Drenos e Fios Cirúrgicos"
        ],
        "Especialidades Cirúrgicas": [
          "Urologia (Litíase, HPB, CA de Próstata, Torção Testicular)",
          "Cirurgia Vascular (DAOP, Oclusão Arterial Aguda, TVP, Aneurisma de Aorta)",
          "Cirurgia Pediátrica (Estenose Pilórica, Invaginação, Hérnias)",
          "Ortopedia de Urgência (Fraturas Expostas e Síndrome Compartimental)",
          "Otorrinolaringologia e Cabeça/Pescoço em Urgência"
        ]
      }
    },
    "pediatria": {
      "nome": "Pediatria",
      "temas": {
        "Neonatologia": [
          "Reanimação Neonatal (SBP)",
          "Icterícia Neonatal",
          "Sepse Neonatal Precoce e Tardia",
          "Desconforto Respiratório do Recém-Nascido",
          "Infecções Congênitas (STORCH e Sífilis Congênita)",
          "Triagem Neonatal, Alojamento Conjunto e Distúrbios Metabólicos"
        ],
        "Puericultura, Crescimento e Desenvolvimento": [
          "Aleitamento Materno e Alimentação Complementar",
          "Avaliação do Crescimento e Curvas da OMS",
          "Desenvolvimento Neuropsicomotor e Autismo (TEA)",
          "Puberdade Normal, Precoce e Atraso Puberal",
          "Desnutrição Grave, Obesidade e Carências Vitamínicas"
        ],
        "Imunizações": [
          "Calendário Nacional de Vacinação (PNI)",
          "Vacinas Especiais e Indicações do CRIE",
          "Eventos Adversos Pós-Vacinação e Contraindicações"
        ],
        "Doenças Respiratórias Pediátricas": [
          "IVAS (OMA, Sinusite, Faringoamigdalite, Laringite, Epiglotite)",
          "Bronquiolite Viral Aguda",
          "Pneumonia Adquirida na Comunidade na Infância",
          "Asma e Lactente Sibilante",
          "Aspiração de Corpo Estranho e Fibrose Cística"
        ],
        "Infectologia Pediátrica": [
          "Doenças Exantemáticas (Sarampo, Rubéola, Escarlatina, Varicela, etc.)",
          "Doença Diarreica Aguda e Planos de Reidratação (A, B, C)",
          "Infecção do Trato Urinário na Infância",
          "Meningites e Sepse em Pediatria",
          "Tuberculose na Infância"
        ],
        "Emergências e Subespecialidades Pediátricas": [
          "Reanimação Pediátrica (PALS) e Choque na Criança",
          "Crise Convulsiva Febril e Epilepsia na Infância",
          "Nefrologia Pediátrica (GNPE, Síndrome Nefrótica, SHU)",
          "Cardiopatias Congênitas, Febre Reumática e Doença de Kawasaki",
          "Hematologia Pediátrica (Anemia Ferropriva, PTI, Leucemia)",
          "Maus-Tratos, Violência Infantil e Prevenção de Acidentes"
        ]
      }
    },
    "ginecologia-obstetricia": {
      "nome": "Ginecologia e Obstetrícia",
      "temas": {
        "Assistência Pré-Natal e Fisiologia Obstétrica": [
          "Diagnóstico de Gravidez e Modificações Fisiológicas",
          "Rotina Pré-Natal, Exames e Suplementação",
          "Infecções na Gestação e Transmissão Vertical (HIV, Sífilis, Toxoplasmose)",
          "Avaliação da Vitalidade Fetal e Ultrassonografia Obstétrica"
        ],
        "Parto, Puerpério e Hemorragias Obstétricas": [
          "Mecanismo de Parto, Assistência e Partograma",
          "Indução, Distocias e Parto Operatório (Fórcipe/Vácuo/Cesárea)",
          "Hemorragias da Primeira Metade (Abortamento, Ectópica, Mola)",
          "Hemorragias da Segunda Metade (Placenta Prévia, DPP, Rotura Uterina)",
          "Hemorragia Pós-Parto e Infecção Puerperal"
        ],
        "Intercorrências Clínicas na Gestação": [
          "Síndromes Hipertensivas (Pré-Eclâmpsia, Eclâmpsia, HELLP)",
          "Diabetes Mellitus Gestacional",
          "Trabalho de Parto Prematuro e Rotura Prematura de Membranas (RPMO)",
          "Doença Hemolítica Perinatal (Aloimunização Rh)",
          "Gestação Gemelar e Restrição de Crescimento Fetal"
        ],
        "Ginecologia Endócrina e Planejamento Familiar": [
          "Fisiologia do Ciclo Menstrual e Amenorreias",
          "Síndrome dos Ovários Policísticos (SOP)",
          "Sangramento Uterino Anormal (PALM-COEIN) e Miomatose",
          "Climatério e Terapia Hormonal",
          "Anticoncepção e Critérios de Elegibilidade da OMS",
          "Infertilidade Conjugal"
        ],
        "Oncologia Ginecológica e Mastologia": [
          "Rastreamento e Câncer de Colo Uterino (INCA/MS)",
          "Rastreamento, Diagnóstico e Câncer de Mama",
          "Doenças Benignas da Mama (BI-RADS, Mastite, Fluxo Papilar)",
          "Hiperplasia e Câncer de Endométrio",
          "Massas Anexiais e Câncer de Ovário"
        ],
        "Ginecologia Infecciosa e Uroginecologia": [
          "Vulvovaginites e Corrimento Vaginal",
          "Doença Inflamatória Pélvica (DIP) e Úlceras Genitais",
          "Endometriose, Adenomiose e Dor Pélvica Crônica",
          "Incontinência Urinária e Prolapso de Órgãos Pélvicos",
          "Atendimento à Violência Sexual e Aborto Legal"
        ]
      }
    },
    "medicina-preventiva": {
      "nome": "Medicina Preventiva e Social",
      "temas": {
        "SUS, Políticas Públicas e Gestão": [
          "História, Princípios e Diretrizes do SUS (Leis 8.080 e 8.142)",
          "Financiamento, Pactos e Redes de Atenção à Saúde (RAS)",
          "Atenção Primária à Saúde, PNAB e Estratégia Saúde da Família",
          "Controle Social e Sistemas de Informação em Saúde (SIM, SINASC, SINAN)"
        ],
        "Epidemiologia e Bioestatística": [
          "Indicadores de Saúde (Mortalidade, Letalidade, Incidência, Prevalência)",
          "Desenhos de Estudos Epidemiológicos (Coorte, Caso-Controle, ECR, Transversal)",
          "Testes Diagnósticos (Sensibilidade, Especificidade, VPP, VPN, Curva ROC)",
          "Medidas de Associação e Impacto (RR, OR, RAR, NNT)",
          "Viés, Confundimento, Validade e Medicina Baseada em Evidências"
        ],
        "Vigilância em Saúde": [
          "Vigilância Epidemiológica e Doenças de Notificação Compulsória",
          "Investigação de Surtos, Epidemias e Endemias",
          "Declaração de Óbito (DO) e Atestados"
        ],
        "Medicina de Família e Comunidade": [
          "Método Clínico Centrado na Pessoa e Comunicação Clínica",
          "Ferramentas de Abordagem Familiar e Comunitária (Genograma, Ecomapa)",
          "Níveis de Prevenção, Prevenção Quaternária e Rastreamento Populacional",
          "Cuidado Longitudinal, Acesso Avançado e Territorialização"
        ],
        "Saúde do Trabalhador e Ética Médica": [
          "Saúde do Trabalhador, Doenças Ocupacionais, CAT e Schilling",
          "Código de Ética Médica, Sigilo e Bioética",
          "Documentos Médicos e Responsabilidade Profissional"
        ]
      }
    }
  },
  "tags": [
    "diagnostico",
    "conduta-terapeutica",
    "conduta-inicial",
    "exame-complementar",
    "fisiopatologia",
    "rastreamento-prevencao",
    "farmacologia",
    "emergencia",
    "atencao-primaria",
    "diretriz-ms",
    "imagem-clinica",
    "ecg",
    "radiografia",
    "tomografia-ressonancia",
    "partograma",
    "tabela-ou-grafico",
    "calculo-epidemiologico",
    "doenca-regional-norte",
    "pareto-alta-incidencia",
    "pegadinha-classica"
  ]
}
''',
    "scripts/calibrate_layout.py": r'''#!/usr/bin/env python3
"""
Utilitário visual do MedR1 Batch Pipeline:
Desenha margens (header/footer), divisão de colunas, blocos de texto e imagens
detectadas sobre uma página do PDF para calibrar references/perfis_bancas.json.

Dependência: pip install pymupdf
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Optional

import fitz  # PyMuPDF

DEFAULT_PROFILE = {
    "cols": 2,
    "header_margin_ratio": 0.06,
    "footer_margin_ratio": 0.06,
}

COLOR_HEADER_FOOTER = (0.85, 0.12, 0.12)
COLOR_MID_COL = (0.55, 0.10, 0.75)
COLOR_COL_0 = (0.10, 0.40, 0.85)
COLOR_COL_1 = (0.08, 0.60, 0.25)
COLOR_IGNORED = (0.55, 0.55, 0.55)
COLOR_IMAGE = (0.95, 0.50, 0.05)


def load_profile(banca: str, profiles_path: Optional[Path]) -> dict:
    banca_key = banca.upper()
    if profiles_path and profiles_path.exists():
        data = json.loads(profiles_path.read_text(encoding="utf-8"))
        if banca_key in data:
            return {**DEFAULT_PROFILE, **data[banca_key]}
    print(f"[AVISO] Banca '{banca_key}' não encontrada em {profiles_path}. Usando padrão.", file=sys.stderr)
    return dict(DEFAULT_PROFILE)


def draw_calibration_overlay(
    pdf_path: Path,
    page_number: int,
    header_ratio: float,
    footer_ratio: float,
    num_cols: int,
    show_blocks: bool,
    min_image_area: float,
    dpi: int,
    out_path: Path,
) -> None:
    doc = fitz.open(str(pdf_path))
    if page_number < 1 or page_number > len(doc):
        doc.close()
        sys.exit(f"Erro: página {page_number} fora do intervalo (PDF tem {len(doc)} páginas).")

    page = doc[page_number - 1]
    rect = page.rect
    w, h = rect.width, rect.height

    min_y = h * header_ratio
    max_y = h * (1.0 - footer_ratio)
    mid_x = w / 2.0

    kept_col0 = 0
    kept_col1 = 0
    ignored_blocks = 0

    if show_blocks:
        for b in page.get_text("blocks"):
            x0, y0, x1, y1, text, _, block_type = b
            if block_type != 0 or not text.strip():
                continue
            bbox = fitz.Rect(x0, y0, x1, y1)
            if y1 < min_y or y0 > max_y:
                ignored_blocks += 1
                page.draw_rect(bbox, color=COLOR_IGNORED, width=0.8, dashes="[2 2] 0")
                continue

            if num_cols == 2:
                block_center = (x0 + x1) / 2.0
                col = 0 if block_center < mid_x else 1
            else:
                col = 0

            if col == 0:
                kept_col0 += 1
                color = COLOR_COL_0
            else:
                kept_col1 += 1
                color = COLOR_COL_1

            page.draw_rect(bbox, color=color, width=0.9)

    detected_images = 0
    for info in page.get_image_info(xrefs=True):
        bbox = fitz.Rect(info["bbox"])
        if bbox.y1 < min_y or bbox.y0 > max_y:
            continue
        if bbox.get_area() < min_image_area:
            continue
        detected_images += 1
        page.draw_rect(bbox, color=COLOR_IMAGE, width=1.6)
        page.insert_text(
            fitz.Point(bbox.x0 + 2, max(min_y + 10, bbox.y0 + 10)),
            f"IMG #{detected_images} ({int(bbox.get_area())}px2)",
            fontsize=7.5,
            color=COLOR_IMAGE,
        )

    page.draw_line(fitz.Point(0, min_y), fitz.Point(w, min_y), color=COLOR_HEADER_FOOTER, width=1.6, dashes="[5 3] 0")
    page.insert_text(
        fitz.Point(8, max(10, min_y - 4)),
        f"header_margin_ratio = {header_ratio:.3f} (y={min_y:.1f})",
        fontsize=8.5,
        color=COLOR_HEADER_FOOTER,
    )

    page.draw_line(fitz.Point(0, max_y), fitz.Point(w, max_y), color=COLOR_HEADER_FOOTER, width=1.6, dashes="[5 3] 0")
    page.insert_text(
        fitz.Point(8, min(h - 4, max_y + 11)),
        f"footer_margin_ratio = {footer_ratio:.3f} (y={max_y:.1f})",
        fontsize=8.5,
        color=COLOR_HEADER_FOOTER,
    )

    if num_cols == 2:
        page.draw_line(fitz.Point(mid_x, min_y), fitz.Point(mid_x, max_y), color=COLOR_MID_COL, width=1.4, dashes="[4 4] 0")
        page.insert_text(
            fitz.Point(mid_x + 4, min_y + 12),
            f"cols=2 (x={mid_x:.1f})",
            fontsize=8.5,
            color=COLOR_MID_COL,
        )

    out_path.parent.mkdir(parents=True, exist_ok=True)
    pix = page.get_pixmap(dpi=dpi)
    pix.save(str(out_path))
    doc.close()

    print("=== CALIBRAÇÃO VISUAL GERADA ===")
    print(f"PDF / Página       : {pdf_path.name} (pág. {page_number})")
    print(f"Header / Footer    : {header_ratio:.3f} / {footer_ratio:.3f}")
    print(f"Colunas            : {num_cols}")
    if show_blocks:
        print(f"Blocos capturados  : col 0 = {kept_col0} | col 1 = {kept_col1} | ignorados = {ignored_blocks}")
    print(f"Imagens detectadas : {detected_images} (área >= {int(min_image_area)}px2)")
    print(f"PNG salvo em       : {out_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Calibração visual de margens e colunas de PDF")
    parser.add_argument("--prova", required=True, type=Path, help="Caminho do PDF da prova")
    parser.add_argument("--banca", default="GENERICO", help="Banca em perfis_bancas.json")
    parser.add_argument("--profiles", type=Path, default=None, help="Caminho de references/perfis_bancas.json")
    parser.add_argument("--page", type=int, default=1, help="Página a inspecionar (1-indexed)")
    parser.add_argument("--header", type=float, default=None, help="Sobrescreve header_margin_ratio")
    parser.add_argument("--footer", type=float, default=None, help="Sobrescreve footer_margin_ratio")
    parser.add_argument("--cols", type=int, choices=[1, 2], default=None, help="Sobrescreve cols (1 ou 2)")
    parser.add_argument("--no-blocks", action="store_true", help="Oculta caixas dos blocos de texto")
    parser.add_argument("--min-image-area", type=float, default=4500.0, help="Área mínima de imagem clínica")
    parser.add_argument("--dpi", type=int, default=150, help="Resolução do PNG de saída")
    parser.add_argument("--out", type=Path, default=None, help="Caminho do PNG de saída")
    args = parser.parse_args()

    if not args.prova.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.prova}")

    profile = load_profile(args.banca, args.profiles)
    header_ratio = args.header if args.header is not None else float(profile["header_margin_ratio"])
    footer_ratio = args.footer if args.footer is not None else float(profile["footer_margin_ratio"])
    num_cols = args.cols if args.cols is not None else int(profile["cols"])
    out_path = args.out or Path(f"tmp/calibrate_{args.banca.lower()}_p{args.page}.png")

    draw_calibration_overlay(
        pdf_path=args.prova,
        page_number=args.page,
        header_ratio=header_ratio,
        footer_ratio=footer_ratio,
        num_cols=num_cols,
        show_blocks=not args.no_blocks,
        min_image_area=args.min_image_area,
        dpi=args.dpi,
        out_path=out_path,
    )


if __name__ == "__main__":
    main()
''',
    "scripts/extract_pdf.py": r'''#!/usr/bin/env python3
"""
Estágio 1 do MedR1 Batch Pipeline:
Extração 100% determinística de PDFs de provas de residência médica (0 tokens de LLM).
Dependência: pip install pymupdf
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import fitz  # PyMuPDF

DEFAULT_PROFILES = {
    "GENERICO": {
        "cols": 2,
        "header_margin_ratio": 0.06,
        "footer_margin_ratio": 0.06,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})\s*[\.\-\)\:]?(?:\s+|$)",
        "alt_regex": r"^\(?([A-E])\)?[\.\)\-\:]\s+(.+)$",
    },
    "ENARE": {
        "cols": 2,
        "header_margin_ratio": 0.075,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})(?:\s*$|\s+[A-ZÁÉÍÓÚÂÊÔÃÕÇ\(])",
        "alt_regex": r"^\(?([A-E])\)?[\)\.]\s+(.+)$",
    },
    "USP": {
        "cols": 1,
        "header_margin_ratio": 0.065,
        "footer_margin_ratio": 0.06,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})[\.\-\)]?(?:\s+|$)",
        "alt_regex": r"^\(?([A-D])\)?[\)\.]\s+(.+)$",
    },
    "SUS-SP": {
        "cols": 2,
        "header_margin_ratio": 0.065,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})\.\s+",
        "alt_regex": r"^\(([A-E])\)\s+(.+)$",
    },
    "UEPA": {
        "cols": 2,
        "header_margin_ratio": 0.08,
        "footer_margin_ratio": 0.065,
        "question_regex": r"^(?:QUEST[ÃA]O\s+)?0*(\d{1,3})[\.\-\)]\s*",
        "alt_regex": r"^([a-eA-E])[\)\.]\s+(.+)$",
    },
}


@dataclass
class TextBlock:
    page_num: int
    col: int
    x0: float
    y0: float
    x1: float
    y1: float
    text: str


@dataclass
class QuestionSpan:
    page_num: int
    col: int
    y0: float
    y1: float


@dataclass
class ExtractedQuestion:
    numeroOriginal: int
    enunciado: str = ""
    alternativas: Dict[str, str] = field(default_factory=dict)
    gabaritoOficial: Optional[str] = None
    anulada: bool = False
    hasImage: bool = False
    images: List[str] = field(default_factory=list)
    hashConteudo: str = ""
    spans: List[QuestionSpan] = field(default_factory=list)

    def to_public_dict(self) -> dict:
        data = asdict(self)
        data.pop("spans", None)
        return data


def load_profile(banca: str, profiles_path: Optional[Path]) -> dict:
    banca_key = banca.upper()
    if profiles_path and profiles_path.exists():
        custom = json.loads(profiles_path.read_text(encoding="utf-8"))
        if banca_key in custom:
            return {**DEFAULT_PROFILES["GENERICO"], **custom[banca_key]}
    return DEFAULT_PROFILES.get(banca_key, DEFAULT_PROFILES["GENERICO"])


def extract_sorted_blocks(doc: fitz.Document, profile: dict) -> List[TextBlock]:
    num_cols = profile["cols"]
    header_ratio = profile["header_margin_ratio"]
    footer_ratio = profile["footer_margin_ratio"]
    all_blocks: List[TextBlock] = []

    for page_idx, page in enumerate(doc):
        rect = page.rect
        min_y = rect.height * header_ratio
        max_y = rect.height * (1.0 - footer_ratio)
        mid_x = rect.width / 2.0

        raw_blocks = page.get_text("blocks")
        page_blocks: List[TextBlock] = []

        for b in raw_blocks:
            x0, y0, x1, y1, text, _, block_type = b
            if block_type != 0:
                continue
            cleaned = text.strip()
            if not cleaned:
                continue
            if y1 < min_y or y0 > max_y:
                continue

            if num_cols == 2:
                block_center = (x0 + x1) / 2.0
                col = 0 if block_center < mid_x else 1
            else:
                col = 0

            page_blocks.append(TextBlock(page_idx, col, x0, y0, x1, y1, cleaned))

        page_blocks.sort(key=lambda blk: (blk.col, round(blk.y0, 1), round(blk.x0, 1)))
        all_blocks.extend(page_blocks)

    return all_blocks


def parse_questions_state_machine(blocks: List[TextBlock], profile: dict) -> List[ExtractedQuestion]:
    q_re = re.compile(profile["question_regex"], re.IGNORECASE)
    alt_re = re.compile(profile["alt_regex"])

    questions: List[ExtractedQuestion] = []
    current: Optional[ExtractedQuestion] = None
    state = "IDLE"
    current_alt: Optional[str] = None

    def register_span(q: ExtractedQuestion, blk: TextBlock) -> None:
        if q.spans and q.spans[-1].page_num == blk.page_num and q.spans[-1].col == blk.col:
            q.spans[-1].y1 = max(q.spans[-1].y1, blk.y1)
        else:
            q.spans.append(QuestionSpan(blk.page_num, blk.col, blk.y0, blk.y1))

    for blk in blocks:
        lines = [ln.strip() for ln in blk.text.splitlines() if ln.strip()]
        for line in lines:
            q_match = q_re.match(line)
            if q_match:
                num = int(q_match.group(1))
                if 1 <= num <= 250 and (current is None or num != current.numeroOriginal):
                    if current is not None:
                        questions.append(current)
                    remainder = line[q_match.end():].strip()
                    current = ExtractedQuestion(numeroOriginal=num, enunciado=remainder)
                    register_span(current, blk)
                    state = "ENUNCIADO"
                    current_alt = None
                    continue

            if current is None:
                continue

            register_span(current, blk)

            alt_match = alt_re.match(line)
            if alt_match:
                letter = alt_match.group(1).upper()
                alt_text = alt_match.group(2).strip()
                if letter == "A" or (current_alt is not None and letter in "BCDE"):
                    state = "ALT"
                    current_alt = letter
                    current.alternativas[letter] = alt_text
                    continue

            if state == "ENUNCIADO":
                current.enunciado = f"{current.enunciado} {line}".strip()
            elif state == "ALT" and current_alt:
                current.alternativas[current_alt] = f"{current.alternativas[current_alt]} {line}".strip()

    if current is not None:
        questions.append(current)

    for q in questions:
        q.enunciado = re.sub(r"\s+", " ", q.enunciado).strip()
        for k in list(q.alternativas.keys()):
            q.alternativas[k] = re.sub(r"\s+", " ", q.alternativas[k]).strip()
        raw_sig = q.enunciado + "|" + "|".join(f"{k}:{v}" for k, v in sorted(q.alternativas.items()))
        q.hashConteudo = hashlib.sha256(raw_sig.encode("utf-8")).hexdigest()[:16]

    return questions


def extract_clinical_images(
    doc: fitz.Document,
    questions: List[ExtractedQuestion],
    img_dir: Path,
    profile: dict,
    min_area_px: float = 4500.0,
) -> int:
    img_dir.mkdir(parents=True, exist_ok=True)
    num_cols = profile["cols"]
    header_ratio = profile["header_margin_ratio"]
    footer_ratio = profile["footer_margin_ratio"]
    total_saved = 0

    spans_by_page: Dict[int, List[Tuple[ExtractedQuestion, QuestionSpan]]] = {}
    for q in questions:
        for sp in q.spans:
            spans_by_page.setdefault(sp.page_num, []).append((q, sp))

    for page_idx, page in enumerate(doc):
        if page_idx not in spans_by_page:
            continue

        rect = page.rect
        min_y = rect.height * header_ratio
        max_y = rect.height * (1.0 - footer_ratio)
        mid_x = rect.width / 2.0

        candidates: List[fitz.Rect] = []
        for info in page.get_image_info(xrefs=True):
            bbox = fitz.Rect(info["bbox"])
            if bbox.y1 < min_y or bbox.y0 > max_y:
                continue
            if bbox.get_area() < min_area_px:
                continue
            candidates.append(bbox)

        for idx, bbox in enumerate(candidates):
            img_center_x = (bbox.x0 + bbox.x1) / 2.0
            img_col = 0 if (num_cols == 1 or img_center_x < mid_x) else 1

            matched_q: Optional[ExtractedQuestion] = None
            best_dist = float("inf")

            for q, sp in spans_by_page[page_idx]:
                if sp.col != img_col:
                    continue
                if sp.y0 - 20 <= bbox.y0 <= sp.y1 + 20:
                    matched_q = q
                    break
                if sp.y1 <= bbox.y0 and (bbox.y0 - sp.y1) < best_dist:
                    best_dist = bbox.y0 - sp.y1
                    matched_q = q

            if matched_q is None:
                continue

            clip_rect = fitz.Rect(
                max(rect.x0, bbox.x0 - 6),
                max(rect.y0, bbox.y0 - 6),
                min(rect.x1, bbox.x1 + 6),
                min(rect.y1, bbox.y1 + 6),
            )
            pix = page.get_pixmap(clip=clip_rect, dpi=200)
            filename = f"q{matched_q.numeroOriginal:03d}_p{page_idx + 1}_{idx + 1}.png"
            out_file = img_dir / filename
            pix.save(str(out_file))

            matched_q.hasImage = True
            matched_q.images.append(str(out_file))
            total_saved += 1

    return total_saved


def parse_gabarito(gabarito_path: Path, caderno: str) -> Dict[int, Tuple[Optional[str], bool]]:
    doc = fitz.open(str(gabarito_path))
    full_text = "\n".join(page.get_text("text") for page in doc)
    doc.close()

    caderno_pattern = re.compile(rf"(?:CADERNO|TIPO|PROVA)\s*{re.escape(caderno)}\b", re.IGNORECASE)
    match = caderno_pattern.search(full_text)
    target_text = full_text[match.start():] if match else full_text

    pair_re = re.compile(
        r"\b0*(\d{1,3})\s*[\-\:\.\)\s]+\s*([A-E]|ANUL(?:ADA)?|NULA|\*|X)\b",
        re.IGNORECASE,
    )

    answers: Dict[int, Tuple[Optional[str], bool]] = {}
    for m in pair_re.finditer(target_text):
        num = int(m.group(1))
        val = m.group(2).upper()
        if not (1 <= num <= 250) or num in answers:
            continue
        if val in ("*", "X") or val.startswith("ANUL") or val == "NULA":
            answers[num] = (None, True)
        else:
            answers[num] = (val, False)

    return answers


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Extração determinística de prova PDF")
    parser.add_argument("--prova", required=True, type=Path, help="Caminho do PDF da prova")
    parser.add_argument("--gabarito", required=True, type=Path, help="Caminho do PDF do gabarito")
    parser.add_argument("--banca", default="GENERICO", help="Banca (ENARE, USP, UNIFESP, SUS-SP, PSU-MG, UEPA)")
    parser.add_argument("--caderno", required=True, help="Identificador do caderno/tipo (ex: A, B, 1, 2)")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do JSON de saída")
    parser.add_argument("--profiles", type=Path, default=None, help="JSON opcional de perfis por banca")
    parser.add_argument("--img-dir", type=Path, default=None, help="Diretório para salvar imagens recortadas")
    args = parser.parse_args()

    if not args.prova.exists():
        sys.exit(f"Erro: arquivo da prova não encontrado: {args.prova}")
    if not args.gabarito.exists():
        sys.exit(f"Erro: arquivo do gabarito não encontrado: {args.gabarito}")

    profile = load_profile(args.banca, args.profiles)
    img_dir = args.img_dir or (args.out.parent / "images")

    doc = fitz.open(str(args.prova))
    blocks = extract_sorted_blocks(doc, profile)
    questions = parse_questions_state_machine(blocks, profile)
    total_images = extract_clinical_images(doc, questions, img_dir, profile)
    doc.close()

    gabarito = parse_gabarito(args.gabarito, args.caderno)

    sem_gabarito = []
    anuladas = []
    poucas_alts = []

    for q in questions:
        if q.numeroOriginal in gabarito:
            letra, is_anulada = gabarito[q.numeroOriginal]
            q.gabaritoOficial = letra
            q.anulada = is_anulada
            if is_anulada:
                anuladas.append(q.numeroOriginal)
        else:
            sem_gabarito.append(q.numeroOriginal)

        if len(q.alternativas) < 4:
            poucas_alts.append(q.numeroOriginal)

    payload = {
        "meta": {
            "prova": args.prova.name,
            "gabarito": args.gabarito.name,
            "banca": args.banca.upper(),
            "caderno": args.caderno,
            "totalQuestoes": len(questions),
            "totalImagensRecortadas": total_images,
        },
        "questoes": [q.to_public_dict() for q in questions],
    }

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

    print("=== CHECKPOINT ESTÁGIO 1 (EXTRAÇÃO DETERMINÍSTICA) ===")
    print(f"Banca / Caderno      : {args.banca.upper()} / {args.caderno}")
    print(f"Questões extraídas   : {len(questions)}")
    print(f"Imagens recortadas   : {total_images} (em {img_dir})")
    print(f"Questões anuladas    : {len(anuladas)} {anuladas if anuladas else ''}")
    print(f"Sem gabarito         : {len(sem_gabarito)} {sem_gabarito if sem_gabarito else ''}")
    print(f"Com menos de 4 alts  : {len(poucas_alts)} {poucas_alts if poucas_alts else ''}")
    print(f"Arquivo gerado       : {args.out}")

    if sem_gabarito or poucas_alts:
        print("\n[ATENÇÃO] Revise o perfil em references/perfis_bancas.json antes de rodar o Estágio 2.")


if __name__ == "__main__":
    main()
''',
    "scripts/batch_gemini.py": r'''#!/usr/bin/env python3
"""
Estágio 2 do MedR1 Batch Pipeline:
Enriquecimento taxonômico e comentários clínicos via Gemini Batch API.
Dependência: pip install google-genai
"""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
import sys
import time
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from google import genai
from google.genai import types

SYSTEM_INSTRUCTION = """Você é um médico preceptor especialista em provas de Residência Médica do Brasil (ENARE, USP, UNIFESP, SUS-SP, UEPA).

Sua tarefa é classificar e comentar questões de residência para o banco MedR1 seguindo estritamente estas regras:

1. Classifique `grandeAreaId`, `tema`, `subtema` e `tags` usando EXCLUSIVAMENTE a taxonomia canônica fornecida no contexto.
2. NÃO reescreva o enunciado nem as alternativas.
3. Escreva `comentarioGeral` direto (máx. 3 frases) com o raciocínio clínico central.
4. Em `explicacoesPorAlternativa`, explique objetivamente por que cada letra está correta ou incorreta (1 a 2 frases por letra).
5. REGRA ANTI-ALUCINAÇÃO:
* Se o `gabaritoOficial` fornecido divergir da diretriz médica vigente ou parecer incorreto, NÃO invente justificativa para defendê-lo. Marque `concordaComGabarito: false`, `precisaRevisaoHumana: true` e explique brevemente em `motivoDivergencia`.
* Se a questão estiver anulada, tiver imagem ambígua ou gerar baixa confiança, marque `precisaRevisaoHumana: true`.
* Em `referencias`, cite apenas diretrizes reais e verificáveis (ex: Ministério da Saúde, SBC, FEBRASGO, SBP, ATLS, SBPT).
"""

TERMINAL_STATES = {
    "JOB_STATE_SUCCEEDED",
    "JOB_STATE_FAILED",
    "JOB_STATE_CANCELLED",
    "JOB_STATE_EXPIRED",
}


def route_tier(question: dict) -> str:
    if (
        question.get("hasImage")
        or question.get("images")
        or question.get("anulada")
        or not question.get("gabaritoOficial")
        or len(question.get("alternativas", {})) < 4
    ):
        return "pro"
    return "flash"


def encode_image_part(image_path: Path) -> Optional[dict]:
    if not image_path.exists():
        print(f"[AVISO] Imagem não encontrada: {image_path}", file=sys.stderr)
        return None
    mime_type, _ = mimetypes.guess_type(str(image_path))
    mime_type = mime_type or "image/png"
    b64_data = base64.b64encode(image_path.read_bytes()).decode("ascii")
    return {"inline_data": {"mime_type": mime_type, "data": b64_data}}


def try_create_cache(
    client: genai.Client,
    model_name: str,
    taxonomy_text: str,
    tier: str,
    ttl: str,
) -> Optional[str]:
    try:
        cache = client.caches.create(
            model=model_name,
            config=types.CreateCachedContentConfig(
                display_name=f"medr1-taxonomy-{tier}",
                system_instruction=SYSTEM_INSTRUCTION,
                contents=[f"TAXONOMIA OFICIAL DO MEDR1:\n{taxonomy_text}"],
                ttl=ttl,
            ),
        )
        print(f"[CACHE] Criado para {model_name}: {cache.name} (TTL={ttl})")
        return cache.name
    except Exception as exc:
        print(f"[CACHE] Fallback para prompt inline em {model_name} (motivo: {exc})", file=sys.stderr)
        return None


def build_batch_request_line(
    question: dict,
    response_schema: dict,
    cache_name: Optional[str],
    taxonomy_text: str,
) -> dict:
    num = question["numeroOriginal"]
    payload_question = {
        "numeroOriginal": num,
        "enunciado": question.get("enunciado", ""),
        "alternativas": question.get("alternativas", {}),
        "gabaritoOficial": question.get("gabaritoOficial"),
        "anulada": question.get("anulada", False),
    }

    parts: List[dict] = []
    if not cache_name:
        parts.append({"text": f"TAXONOMIA OFICIAL DO MEDR1:\n{taxonomy_text}\n---"})

    parts.append(
        {
            "text": (
                "Classifique e comente a questão abaixo seguindo o schema JSON:\n"
                + json.dumps(payload_question, ensure_ascii=False)
            )
        }
    )

    for img_str in question.get("images", []):
        img_part = encode_image_part(Path(img_str))
        if img_part:
            parts.append(img_part)

    request_body: dict = {
        "contents": [{"role": "user", "parts": parts}],
        "generation_config": {
            "temperature": 0.1,
            "response_mime_type": "application/json",
            "response_schema": response_schema,
        },
    }

    if cache_name:
        request_body["cached_content"] = cache_name
    else:
        request_body["system_instruction"] = {"parts": [{"text": SYSTEM_INSTRUCTION}]}

    return {"key": f"q-{num:04d}", "request": request_body}


def write_jsonl(path: Path, rows: List[dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        for row in rows:
            fh.write(json.dumps(row, ensure_ascii=False) + "\n")


def submit_batch_job(client: genai.Client, jsonl_path: Path, model_name: str, display_name: str) -> str:
    uploaded = client.files.upload(
        file=str(jsonl_path),
        config=types.UploadFileConfig(display_name=jsonl_path.name, mime_type="jsonl"),
    )
    job = client.batches.create(
        model=model_name,
        src=uploaded.name,
        config={"display_name": display_name},
    )
    print(f"[BATCH] Job submetido ({model_name}): {job.name}")
    return job.name


def extract_json_from_batch_line(raw_line: str, tier: str, model_name: str) -> dict:
    entry = json.loads(raw_line)
    key = entry.get("key", "unknown")

    if "error" in entry:
        return {"key": key, "_meta": {"tier": tier, "model": model_name, "status": "error"}, "error": entry["error"]}

    try:
        candidates = entry["response"]["candidates"]
        text = candidates[0]["content"]["parts"][0]["text"]
        parsed = json.loads(text)
        parsed["_meta"] = {"tier": tier, "model": model_name, "status": "ok", "key": key}
        return parsed
    except Exception as exc:
        return {
            "key": key,
            "_meta": {"tier": tier, "model": model_name, "status": "parse_error"},
            "error": str(exc),
            "raw": entry,
        }


def collect_jobs(
    client: genai.Client,
    jobs_meta: Dict[str, dict],
    out_path: Path,
    poll_interval: int,
) -> Tuple[int, int]:
    pending = dict(jobs_meta)
    completed: Dict[str, object] = {}

    while pending:
        for tier, info in list(pending.items()):
            job = client.batches.get(name=info["job_name"])
            state = job.state.name if hasattr(job.state, "name") else str(job.state)
            print(f"[POLL] {tier.upper()} ({info['job_name']}): {state}")
            if state in TERMINAL_STATES:
                completed[tier] = job
                del pending[tier]
        if pending:
            time.sleep(poll_interval)

    consolidated: List[dict] = []
    errors = 0

    for tier, job in completed.items():
        model_name = jobs_meta[tier]["model"]
        state = job.state.name if hasattr(job.state, "name") else str(job.state)
        if state != "JOB_STATE_SUCCEEDED":
            print(f"[ERRO] Job {tier} finalizou com estado {state}", file=sys.stderr)
            errors += jobs_meta[tier]["count"]
            continue

        dest = getattr(job, "dest", None)
        file_name = getattr(dest, "file_name", None) if dest else None
        if not file_name:
            print(f"[ERRO] Job {tier} sem arquivo de saída.", file=sys.stderr)
            continue

        raw_bytes = client.files.download(file=file_name)
        content = raw_bytes.decode("utf-8") if isinstance(raw_bytes, bytes) else str(raw_bytes)
        for line in content.splitlines():
            if not line.strip():
                continue
            item = extract_json_from_batch_line(line, tier, model_name)
            if item.get("_meta", {}).get("status") != "ok":
                errors += 1
            consolidated.append(item)

    consolidated.sort(key=lambda x: x.get("numeroOriginal", 999999))
    write_jsonl(out_path, consolidated)
    return len(consolidated) - errors, errors


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Enriquecimento via Gemini Batch API")
    parser.add_argument("--input", type=Path, help="Caminho do extracted.json")
    parser.add_argument("--taxonomy", type=Path, help="Caminho do references/taxonomia_medr1.json")
    parser.add_argument("--schema", type=Path, help="Caminho do references/response_schema.json")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do enriched.jsonl")
    parser.add_argument("--flash-model", default="gemini-2.5-flash", help="Modelo para texto puro")
    parser.add_argument("--pro-model", default="gemini-2.5-pro", help="Modelo para imagens/anuladas")
    parser.add_argument("--cache-ttl", default="3600s", help="TTL do Context Cache")
    parser.add_argument("--poll-interval", type=int, default=30, help="Intervalo de polling (s)")
    parser.add_argument("--dry-run", action="store_true", help="Gera JSONLs sem chamar a API")
    parser.add_argument("--no-wait", action="store_true", help="Submete jobs e encerra sem aguardar")
    parser.add_argument("--collect", type=Path, default=None, help="Retoma coleta via batch_jobs.json")
    args = parser.parse_args()

    if not args.dry_run and not os.environ.get("GEMINI_API_KEY"):
        sys.exit("Erro: defina a variável de ambiente GEMINI_API_KEY antes de executar.")

    if args.collect:
        if not args.collect.exists():
            sys.exit(f"Erro: arquivo de jobs não encontrado: {args.collect}")
        client = genai.Client()
        jobs_meta = json.loads(args.collect.read_text(encoding="utf-8"))
        ok_count, err_count = collect_jobs(client, jobs_meta, args.out, args.poll_interval)
        print("\n=== CHECKPOINT ESTÁGIO 2 (COLETA BATCH) ===")
        print(f"Questões enriquecidas : {ok_count}")
        print(f"Erros                 : {err_count}")
        print(f"Arquivo gerado        : {args.out}")
        return

    if not (args.input and args.taxonomy and args.schema):
        sys.exit("Erro: informe --input, --taxonomy e --schema (ou use --collect).")

    extracted = json.loads(args.input.read_text(encoding="utf-8"))
    taxonomy_text = args.taxonomy.read_text(encoding="utf-8")
    response_schema = json.loads(args.schema.read_text(encoding="utf-8"))
    questions = extracted.get("questoes", [])

    if not questions:
        sys.exit("Erro: nenhuma questão encontrada em --input.")

    flash_qs = [q for q in questions if route_tier(q) == "flash"]
    pro_qs = [q for q in questions if route_tier(q) == "pro"]

    work_dir = args.out.parent
    flash_jsonl = work_dir / "flash_batch.jsonl"
    pro_jsonl = work_dir / "pro_batch.jsonl"
    jobs_file = work_dir / "batch_jobs.json"

    client = None if args.dry_run else genai.Client()

    flash_cache = (
        try_create_cache(client, args.flash_model, taxonomy_text, "flash", args.cache_ttl)
        if (client and flash_qs)
        else None
    )
    pro_cache = (
        try_create_cache(client, args.pro_model, taxonomy_text, "pro", args.cache_ttl)
        if (client and pro_qs)
        else None
    )

    if flash_qs:
        write_jsonl(
            flash_jsonl,
            [build_batch_request_line(q, response_schema, flash_cache, taxonomy_text) for q in flash_qs],
        )

    if pro_qs:
        write_jsonl(
            pro_jsonl,
            [build_batch_request_line(q, response_schema, pro_cache, taxonomy_text) for q in pro_qs],
        )

    print("=== RESUMO DE ROTEAMENTO (ESTÁGIO 2) ===")
    print(f"Total de questões : {len(questions)}")
    print(f"Lote Flash        : {len(flash_qs)} ({args.flash_model}) -> {flash_jsonl if flash_qs else '-'}")
    print(f"Lote Pro          : {len(pro_qs)} ({args.pro_model}) -> {pro_jsonl if pro_qs else '-'}")

    if args.dry_run:
        print("\n[DRY-RUN] JSONLs gerados localmente. Nenhuma chamada foi feita à API.")
        return

    jobs_meta: Dict[str, dict] = {}
    exam_label = extracted.get("meta", {}).get("prova", "medr1-exam")

    if flash_qs:
        job_name = submit_batch_job(client, flash_jsonl, args.flash_model, f"{exam_label}-flash")
        jobs_meta["flash"] = {"job_name": job_name, "model": args.flash_model, "count": len(flash_qs)}

    if pro_qs:
        job_name = submit_batch_job(client, pro_jsonl, args.pro_model, f"{exam_label}-pro")
        jobs_meta["pro"] = {"job_name": job_name, "model": args.pro_model, "count": len(pro_qs)}

    jobs_file.write_text(json.dumps(jobs_meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[INFO] IDs dos jobs salvos em: {jobs_file}")

    if args.no_wait:
        print(
            "\n[ASSÍNCRONO] Jobs em processamento. Para coletar depois, execute:\n"
            f"python3 {Path(__file__).name} --collect {jobs_file} --out {args.out}"
        )
        return

    ok_count, err_count = collect_jobs(client, jobs_meta, args.out, args.poll_interval)
    print("\n=== CHECKPOINT ESTÁGIO 2 (ENRIQUECIMENTO BATCH) ===")
    print(f"Questões enriquecidas : {ok_count}")
    print(f"Erros                 : {err_count}")
    print(f"Arquivo gerado        : {args.out}")


if __name__ == "__main__":
    main()
''',
    "scripts/merge_and_audit.py": r'''#!/usr/bin/env python3
"""
Estágio 3 do MedR1 Batch Pipeline:
Merge determinístico (Estágio 1 + Estágio 2), auditoria anti-alucinação,
deduplicação e geração do audit_report.md.
"""

from __future__ import annotations

import argparse
import difflib
import json
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path
from typing import Dict, List, Optional, Set, Tuple

INCORRETA_START_RE = re.compile(r"^\s*(?:alternativa\s+)?(?:incorret[ao]|errad[ao]|fals[ao])\b", re.IGNORECASE)
CORRETA_START_RE = re.compile(r"^\s*(?:alternativa\s+)?(?:corret[ao]|gabarito|verdadeir[ao])\b", re.IGNORECASE)
KEY_NUM_RE = re.compile(r"q-0*(\d+)")


def normalize_str(text: str) -> str:
    nfkd = unicodedata.normalize("NFKD", text or "")
    ascii_text = "".join(ch for ch in nfkd if not unicodedata.combining(ch))
    return re.sub(r"\s+", " ", ascii_text).strip().lower()


class TaxonomyValidator:
    def __init__(self, taxonomy_path: Optional[Path]) -> None:
        self.enabled = False
        self.grandes_areas: Set[str] = set()
        self.temas_por_area: Dict[str, Set[str]] = {}
        self.subtemas_por_tema: Dict[str, Set[str]] = {}
        self.tags_canonicas: Set[str] = set()

        if not taxonomy_path or not taxonomy_path.exists():
            return

        data = json.loads(taxonomy_path.read_text(encoding="utf-8"))
        self.enabled = True

        ga_map = data.get("grandesAreas", {})
        if isinstance(ga_map, dict):
            for ga_id, ga_body in ga_map.items():
                self.grandes_areas.add(ga_id)
                temas_obj = ga_body.get("temas", {}) if isinstance(ga_body, dict) else {}
                self.temas_por_area[ga_id] = set(temas_obj.keys()) if isinstance(temas_obj, dict) else set()
                if isinstance(temas_obj, dict):
                    for tema, subtemas in temas_obj.items():
                        self.subtemas_por_tema[tema] = set(subtemas) if isinstance(subtemas, list) else set()

        for tag in data.get("tags", []):
            self.tags_canonicas.add(tag)

    def validate(self, enriched: dict) -> List[str]:
        if not self.enabled:
            return []

        issues: List[str] = []
        ga = enriched.get("grandeAreaId")
        tema = enriched.get("tema")
        subtema = enriched.get("subtema")
        tags = enriched.get("tags") or []

        if self.grandes_areas and ga not in self.grandes_areas:
            issues.append(f"TAXONOMIA_GRANDE_AREA_INVALIDA({ga})")
            return issues

        valid_temas = self.temas_por_area.get(ga, set())
        if valid_temas and tema not in valid_temas:
            issues.append(f"TAXONOMIA_TEMA_NAO_CANONICO({tema})")
        else:
            valid_subtemas = self.subtemas_por_tema.get(tema, set())
            if valid_subtemas and subtema not in valid_subtemas:
                issues.append(f"TAXONOMIA_SUBTEMA_NAO_CANONICO({subtema})")

        if self.tags_canonicas:
            invalid_tags = [t for t in tags if t not in self.tags_canonicas]
            if invalid_tags:
                issues.append(f"TAXONOMIA_TAGS_FORA_PADRAO({','.join(invalid_tags)})")

        return issues


def load_enriched_map(enriched_path: Path) -> Dict[int, dict]:
    by_num: Dict[int, dict] = {}
    with enriched_path.open("r", encoding="utf-8") as fh:
        for line_no, raw in enumerate(fh, start=1):
            raw = raw.strip()
            if not raw:
                continue
            item = json.loads(raw)
            num = item.get("numeroOriginal")
            if num is None:
                key = item.get("key") or item.get("_meta", {}).get("key", "")
                m = KEY_NUM_RE.search(str(key))
                if m:
                    num = int(m.group(1))
            if num is None:
                print(f"[AVISO] Linha {line_no} em {enriched_path} sem numeroOriginal.", file=sys.stderr)
                continue
            by_num[int(num)] = item
    return by_num


def load_existing_hashes(path: Optional[Path]) -> Dict[str, str]:
    if not path or not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        return {str(k): str(v) for k, v in data.items()}
    if isinstance(data, list):
        return {str(h): "banco_existente" for h in data}
    return {}


def check_gabarito_consistency(
    gabarito: Optional[str],
    anulada: bool,
    alternativas: Dict[str, str],
    explicacoes: Dict[str, str],
) -> List[str]:
    issues: List[str] = []
    if anulada:
        return issues
    if not gabarito:
        issues.append("SEM_GABARITO_OFICIAL")
        return issues
    if gabarito not in alternativas:
        issues.append(f"GABARITO_FORA_DAS_ALTERNATIVAS({gabarito})")

    missing_exp = [k for k in alternativas.keys() if not (explicacoes.get(k) or "").strip()]
    if missing_exp:
        issues.append(f"EXPLICACAO_AUSENTE({','.join(sorted(missing_exp))})")

    gab_exp = (explicacoes.get(gabarito) or "").strip()
    if gab_exp and INCORRETA_START_RE.match(gab_exp):
        issues.append(f"CONTRADICAO_COMENTARIO_GABARITO({gabarito})")

    for letter, exp_text in explicacoes.items():
        if letter == gabarito or not exp_text:
            continue
        if CORRETA_START_RE.match(exp_text.strip()):
            issues.append(f"CONTRADICAO_ALTERNATIVA_MARCADA_CORRETA({letter})")

    return issues


def find_near_duplicate(norm_enunciado: str, seen_texts: List[Tuple[int, str]], threshold: float) -> Optional[int]:
    if len(norm_enunciado) < 60:
        return None
    for other_num, other_text in seen_texts:
        len_ratio = min(len(norm_enunciado), len(other_text)) / max(len(norm_enunciado), len(other_text))
        if len_ratio < threshold:
            continue
        sim = difflib.SequenceMatcher(None, norm_enunciado, other_text).ratio()
        if sim >= threshold:
            return other_num
    return None


def generate_audit_report(meta: dict, summary: dict, flagged_questions: List[dict], report_path: Path) -> None:
    lines: List[str] = [
        f"# Relatório de Auditoria MedR1 — {meta.get('banca', 'PROVA')} ({meta.get('prova', '')})",
        "",
        "## Resumo Executivo",
        "",
        "| Métrica | Valor |",
        "| :--- | :--- |",
        f"| Total de questões | **{summary['total']}** |",
        f"| Aprovadas automaticamente | **{summary['aprovadas']}** ({summary['pctAprovadas']}%) |",
        f"| Sinalizadas `[REVISAR]` | **{summary['revisar']}** ({summary['pctRevisar']}%) |",
        f"| Divergências de gabarito | {summary['divergenciasGabarito']} |",
        f"| Questões com imagem | {summary['comImagem']} |",
        f"| Questões anuladas | {summary['anuladas']} |",
        f"| Erros de taxonomia | {summary['errosTaxonomia']} |",
        f"| Duplicatas detectadas | {summary['duplicatas']} |",
        f"| Falhas de enriquecimento (API) | {summary['falhasApi']} |",
        "",
    ]

    if summary["contagemFlags"]:
        lines.append("## Distribuição de Flags")
        lines.append("")
        for flag, count in summary["contagemFlags"].items():
            lines.append(f"- `{flag}`: {count}")
        lines.append("")

    lines.append(f"## Fila de Revisão Humana (`[REVISAR]` — {len(flagged_questions)} questões)")
    lines.append("")

    if not flagged_questions:
        lines.append("Nenhuma questão sinalizada. Lote pronto para exportação no Estágio 4.")
    else:
        for q in flagged_questions:
            num = q["numeroOriginal"]
            flags_str = " ".join(f"`[{f}]`" for f in q["flagsRevisao"])
            gab = "ANULADA" if q["anulada"] else (q["gabaritoOficial"] or "SEM GABARITO")
            snippet = (q["enunciado"][:180] + "...") if len(q["enunciado"]) > 180 else q["enunciado"]

            lines.append(f"### [REVISAR] Questão {num:03d} — Gabarito: `{gab}`")
            lines.append(f"- **Flags:** {flags_str}")
            lines.append(
                f"- **Classificação:** `{q.get('grandeAreaId') or '-'}` > "
                f"`{q.get('tema') or '-'}` > `{q.get('subtema') or '-'}` "
                f"*(modelo: `{q.get('modeloUtilizado') or '-'}`)*"
            )
            if q.get("concordaComGabarito") is False:
                lines.append(f"- **Divergência reportada pelo LLM:** {q.get('motivoDivergencia') or 'Não detalhada'}")
            if q.get("duplicadaDe"):
                lines.append(f"- **Duplicata de:** `{q['duplicadaDe']}`")
            if q.get("images"):
                lines.append(f"- **Imagens:** {', '.join(q['images'])}")
            lines.append(f"- **Trecho:** {snippet}")
            lines.append("")

    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Merge determinístico e auditoria de questões")
    parser.add_argument("--extracted", required=True, type=Path, help="Caminho do extracted.json")
    parser.add_argument("--enriched", required=True, type=Path, help="Caminho do enriched.jsonl")
    parser.add_argument("--out", required=True, type=Path, help="Caminho do validated.json")
    parser.add_argument("--report", required=True, type=Path, help="Caminho do audit_report.md")
    parser.add_argument("--taxonomy", type=Path, default=None, help="Caminho de references/taxonomia_medr1.json")
    parser.add_argument("--existing-hashes", type=Path, default=None, help="JSON com hashes já no banco")
    parser.add_argument("--sim-threshold", type=float, default=0.92, help="Limiar de similaridade")
    args = parser.parse_args()

    if not args.extracted.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.extracted}")
    if not args.enriched.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.enriched}")

    extracted_payload = json.loads(args.extracted.read_text(encoding="utf-8"))
    extracted_qs: List[dict] = extracted_payload.get("questoes", [])
    enriched_map = load_enriched_map(args.enriched)
    taxonomy_validator = TaxonomyValidator(args.taxonomy)
    existing_hashes = load_existing_hashes(args.existing_hashes)

    seen_hashes_local: Dict[str, int] = {}
    seen_texts_local: List[Tuple[int, str]] = []

    validated_qs: List[dict] = []
    flagged_qs: List[dict] = []
    flag_counter: Counter = Counter()

    stats = {
        "divergenciasGabarito": 0,
        "comImagem": 0,
        "anuladas": 0,
        "errosTaxonomia": 0,
        "duplicatas": 0,
        "falhasApi": 0,
    }

    for raw_q in extracted_qs:
        num = int(raw_q["numeroOriginal"])
        enr = enriched_map.get(num)
        flags: List[str] = []
        duplicada_de: Optional[str] = None

        if raw_q.get("hasImage") or raw_q.get("images"):
            flags.append("IMAGEM_CLINICA")
            stats["comImagem"] += 1
        if raw_q.get("anulada"):
            flags.append("QUESTAO_ANULADA")
            stats["anuladas"] += 1
        if len(raw_q.get("alternativas", {})) < 4:
            flags.append("MENOS_DE_4_ALTERNATIVAS")

        h = raw_q.get("hashConteudo", "")
        if h and h in existing_hashes:
            duplicada_de = existing_hashes[h]
            flags.append("DUPLICATA_BANCO_EXISTENTE")
            stats["duplicatas"] += 1
        elif h and h in seen_hashes_local:
            duplicada_de = f"Q{seen_hashes_local[h]:03d} (mesma prova)"
            flags.append("DUPLICATA_MESMA_PROVA")
            stats["duplicatas"] += 1
        else:
            norm_enunc = normalize_str(raw_q.get("enunciado", ""))
            near_num = find_near_duplicate(norm_enunc, seen_texts_local, args.sim_threshold)
            if near_num is not None:
                duplicada_de = f"Q{near_num:03d} (similaridade >= {int(args.sim_threshold * 100)}%)"
                flags.append("DUPLICATA_APROXIMADA")
                stats["duplicatas"] += 1
            if h:
                seen_hashes_local[h] = num
            seen_texts_local.append((num, norm_enunc))

        if enr is None or enr.get("_meta", {}).get("status") != "ok":
            flags.append("FALHA_ENRIQUECIMENTO_API")
            stats["falhasApi"] += 1
            merged = {
                **raw_q,
                "grandeAreaId": None,
                "tema": None,
                "subtema": None,
                "tags": [],
                "concordaComGabarito": None,
                "motivoDivergencia": enr.get("error") if enr else "Ausente no enriched.jsonl",
                "comentarioGeral": "",
                "explicacoesPorAlternativa": {},
                "referencias": [],
                "modeloUtilizado": enr.get("_meta", {}).get("model") if enr else None,
            }
        else:
            if enr.get("concordaComGabarito") is False:
                flags.append("DIVERGENCIA_GABARITO")
                stats["divergenciasGabarito"] += 1
            if enr.get("precisaRevisaoHumana") is True:
                flags.append("SINALIZADA_PELO_LLM")

            tax_issues = taxonomy_validator.validate(enr)
            if tax_issues:
                flags.extend(tax_issues)
                stats["errosTaxonomia"] += 1

            gab_issues = check_gabarito_consistency(
                raw_q.get("gabaritoOficial"),
                bool(raw_q.get("anulada")),
                raw_q.get("alternativas", {}),
                enr.get("explicacoesPorAlternativa") or {},
            )
            flags.extend(gab_issues)

            if not enr.get("referencias"):
                flags.append("SEM_REFERENCIAS")

            merged = {
                "numeroOriginal": num,
                "enunciado": raw_q["enunciado"],
                "alternativas": raw_q["alternativas"],
                "gabaritoOficial": raw_q.get("gabaritoOficial"),
                "anulada": bool(raw_q.get("anulada")),
                "hasImage": bool(raw_q.get("hasImage")),
                "images": raw_q.get("images", []),
                "hashConteudo": raw_q.get("hashConteudo", ""),
                "grandeAreaId": enr.get("grandeAreaId"),
                "tema": enr.get("tema"),
                "subtema": enr.get("subtema"),
                "tags": enr.get("tags", []),
                "concordaComGabarito": enr.get("concordaComGabarito"),
                "motivoDivergencia": enr.get("motivoDivergencia"),
                "comentarioGeral": enr.get("comentarioGeral", ""),
                "explicacoesPorAlternativa": enr.get("explicacoesPorAlternativa", {}),
                "referencias": enr.get("referencias", []),
                "modeloUtilizado": enr.get("_meta", {}).get("model"),
            }

        unique_flags = list(dict.fromkeys(flags))
        for f in unique_flags:
            flag_counter[f.split("(")[0]] += 1

        status = "REVISAR" if unique_flags else "APROVADA"
        merged["statusAuditoria"] = status
        merged["flagsRevisao"] = unique_flags
        merged["duplicadaDe"] = duplicada_de

        validated_qs.append(merged)
        if status == "REVISAR":
            flagged_qs.append(merged)

    total = len(validated_qs)
    revisar = len(flagged_qs)
    aprovadas = total - revisar

    audit_summary = {
        "total": total,
        "aprovadas": aprovadas,
        "revisar": revisar,
        "pctAprovadas": round((aprovadas / total) * 100, 1) if total else 0.0,
        "pctRevisar": round((revisar / total) * 100, 1) if total else 0.0,
        **stats,
        "contagemFlags": dict(flag_counter.most_common()),
    }

    output_payload = {
        "meta": extracted_payload.get("meta", {}),
        "auditSummary": audit_summary,
        "questoes": validated_qs,
    }

    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(output_payload, ensure_ascii=False, indent=2), encoding="utf-8")
    generate_audit_report(output_payload["meta"], audit_summary, flagged_qs, args.report)

    print("=== CHECKPOINT ESTÁGIO 3 (MERGE E AUDITORIA) ===")
    print(f"Total de questões    : {total}")
    print(f"Aprovadas direto     : {aprovadas} ({audit_summary['pctAprovadas']}%)")
    print(f"Sinalizadas [REVISAR]: {revisar} ({audit_summary['pctRevisar']}%)")
    print(f"Divergências gabarito: {stats['divergenciasGabarito']}")
    print(f"Erros de taxonomia   : {stats['errosTaxonomia']}")
    print(f"Duplicatas           : {stats['duplicatas']}")
    print(f"Falhas de API        : {stats['falhasApi']}")
    print(f"JSON validado        : {args.out}")
    print(f"Relatório de revisão : {args.report}")


if __name__ == "__main__":
    main()
''',
    "scripts/export_medr1.py": r'''#!/usr/bin/env python3
"""
Estágio 4 do MedR1 Batch Pipeline:
Exportação do validated.json para chunks TypeScript (examCatalog.ts) ou Supabase.
"""

from __future__ import annotations

import argparse
import json
import mimetypes
import os
import re
import shutil
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Tuple

CATALOG_START_MARKER = "// [MEDR1_AUTO_CATALOG_START]"
CATALOG_END_MARKER = "// [MEDR1_AUTO_CATALOG_END]"


def slug_to_camel(slug: str) -> str:
    parts = [p for p in re.split(r"[^a-zA-Z0-9]+", slug.strip()) if p]
    if not parts:
        return "examQuestions"
    ident = parts[0].lower() + "".join(p.capitalize() for p in parts[1:])
    if ident[0].isdigit():
        ident = "exam" + ident
    return ident + "Questions"


def parse_year_from_exam_id(exam_id: str, fallback_text: str = "") -> int:
    m = re.search(r"(20\d{2})", exam_id) or re.search(r"(20\d{2})", fallback_text)
    return int(m.group(1)) if m else datetime.now().year


def filter_questions(
    questions: List[dict],
    only_approved: bool,
    include_duplicates: bool,
) -> Tuple[List[dict], List[dict]]:
    accepted: List[dict] = []
    skipped: List[dict] = []

    for q in questions:
        base_flags = {f.split("(")[0] for f in (q.get("flagsRevisao") or [])}
        if "FALHA_ENRIQUECIMENTO_API" in base_flags:
            skipped.append(q)
            continue
        if not include_duplicates and "DUPLICATA_BANCO_EXISTENTE" in base_flags:
            skipped.append(q)
            continue
        if only_approved and q.get("statusAuditoria") != "APROVADA":
            skipped.append(q)
            continue
        accepted.append(q)

    return accepted, skipped


def normalize_question_record(q: dict, exam_id: str, banca: str, ano: int, image_urls: List[str]) -> dict:
    num = int(q["numeroOriginal"])
    return {
        "id": f"{exam_id}-q{num:03d}",
        "examId": exam_id,
        "banca": banca,
        "ano": ano,
        "numeroOriginal": num,
        "grandeAreaId": q.get("grandeAreaId") or "clinica-medica",
        "tema": q.get("tema") or "Geral",
        "subtema": q.get("subtema") or "Geral",
        "tags": q.get("tags") or [],
        "enunciado": q["enunciado"],
        "alternativas": q["alternativas"],
        "gabaritoOficial": q.get("gabaritoOficial"),
        "anulada": bool(q.get("anulada")),
        "images": image_urls,
        "comentarioGeral": q.get("comentarioGeral") or "",
        "explicacoesPorAlternativa": q.get("explicacoesPorAlternativa") or {},
        "referencias": q.get("referencias") or [],
        "hashConteudo": q.get("hashConteudo") or "",
        "needsReview": q.get("statusAuditoria") != "APROVADA",
        "flagsRevisao": q.get("flagsRevisao") or [],
    }


def copy_images_to_public(questions: List[dict], exam_id: str, project_root: Path) -> Dict[int, List[str]]:
    dest_dir = project_root / "public" / "images" / "exams" / exam_id
    urls_by_num: Dict[int, List[str]] = {}

    for q in questions:
        num = int(q["numeroOriginal"])
        rel_urls: List[str] = []
        for raw_path in q.get("images") or []:
            src = Path(raw_path)
            if not src.exists():
                print(f"[AVISO] Imagem não encontrada para Q{num:03d}: {src}", file=sys.stderr)
                continue
            dest_dir.mkdir(parents=True, exist_ok=True)
            dst = dest_dir / src.name
            shutil.copy2(src, dst)
            rel_urls.append(f"/images/exams/{exam_id}/{src.name}")
        urls_by_num[num] = rel_urls

    return urls_by_num


def update_exam_catalog(
    catalog_path: Path,
    exam_id: str,
    var_name: str,
    banca: str,
    ano: int,
    total_questions: int,
) -> str:
    entry_block = (
        f"  '{exam_id}': {{\n"
        f"    id: '{exam_id}',\n"
        f"    banca: '{banca}',\n"
        f"    ano: {ano},\n"
        f"    totalQuestoes: {total_questions},\n"
        f"    load: () => import('./exams/{exam_id}').then((m) => m.{var_name}),\n"
        f"  }},"
    )

    if not catalog_path.exists():
        catalog_path.parent.mkdir(parents=True, exist_ok=True)
        content = (
            "// Gerado automaticamente pelo MedR1 Batch Pipeline\n"
            "export interface ExamCatalogEntry {\n"
            "  id: string;\n"
            "  banca: string;\n"
            "  ano: number;\n"
            "  totalQuestoes: number;\n"
            "  load: () => Promise<unknown[]>;\n"
            "}\n\n"
            "export const examCatalog: Record<string, ExamCatalogEntry> = {\n"
            f"  {CATALOG_START_MARKER}\n"
            f"{entry_block}\n"
            f"  {CATALOG_END_MARKER}\n"
            "};\n"
        )
        catalog_path.write_text(content, encoding="utf-8")
        return "criado"

    text = catalog_path.read_text(encoding="utf-8")
    existing_re = re.compile(rf"  ['\"]{re.escape(exam_id)}['\"]\s*:\s*\{{[\s\S]*?\}},", re.MULTILINE)
    if existing_re.search(text):
        catalog_path.write_text(existing_re.sub(entry_block, text, count=1), encoding="utf-8")
        return "atualizado"

    if CATALOG_END_MARKER in text:
        updated = text.replace(CATALOG_END_MARKER, f"{entry_block}\n  {CATALOG_END_MARKER}", 1)
        catalog_path.write_text(updated, encoding="utf-8")
        return "inserido (via marcador)"

    last_close = text.rfind("};")
    if last_close != -1:
        updated = text[:last_close] + f"{entry_block}\n" + text[last_close:]
        catalog_path.write_text(updated, encoding="utf-8")
        return "inserido (fallback)"

    return "ignorado (adicione marcadores ao examCatalog.ts)"


def export_ts_chunk(questions: List[dict], meta: dict, exam_id: str, project_root: Path, dry_run: bool) -> None:
    banca = meta.get("banca", "GERAL")
    ano = parse_year_from_exam_id(exam_id, meta.get("prova", ""))
    var_name = slug_to_camel(exam_id)

    urls_by_num = (
        {int(q["numeroOriginal"]): [] for q in questions}
        if dry_run
        else copy_images_to_public(questions, exam_id, project_root)
    )

    records = [
        normalize_question_record(q, exam_id, banca, ano, urls_by_num.get(int(q["numeroOriginal"]), []))
        for q in questions
    ]

    ts_content = (
        f"// Gerado pelo MedR1 Batch Pipeline em {datetime.now(timezone.utc).isoformat()}\n"
        f"// Prova: {meta.get('prova', exam_id)} | Banca: {banca} | Questões: {len(records)}\n\n"
        f"export const {var_name} = {json.dumps(records, ensure_ascii=False, indent=2)} as const;\n"
    )

    chunk_path = project_root / "src" / "data" / "exams" / f"{exam_id}.ts"
    catalog_path = project_root / "src" / "data" / "examCatalog.ts"

    if dry_run:
        print(f"[DRY-RUN] Geraria chunk TS: {chunk_path} ({len(records)} questões)")
        print(f"[DRY-RUN] Atualizaria catálogo: {catalog_path}")
        return

    chunk_path.parent.mkdir(parents=True, exist_ok=True)
    chunk_path.write_text(ts_content, encoding="utf-8")
    catalog_status = update_exam_catalog(catalog_path, exam_id, var_name, banca, ano, len(records))

    print("=== CHECKPOINT ESTÁGIO 4 (EXPORTAÇÃO TS CHUNK) ===")
    print(f"Exam ID          : {exam_id}")
    print(f"Chunk gerado     : {chunk_path}")
    print(f"examCatalog.ts   : {catalog_status} ({catalog_path})")
    print(f"Questões salvas  : {len(records)}")


def http_request(url: str, method: str, headers: Dict[str, str], body: bytes) -> Tuple[int, str]:
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return resp.status, resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as exc:
        err_body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {exc.code} em {url}: {err_body}") from exc


def upload_images_to_supabase_storage(
    questions: List[dict],
    exam_id: str,
    supabase_url: str,
    service_key: str,
    bucket: str,
) -> Dict[int, List[str]]:
    urls_by_num: Dict[int, List[str]] = {}
    base = supabase_url.rstrip("/")

    for q in questions:
        num = int(q["numeroOriginal"])
        public_urls: List[str] = []
        for raw_path in q.get("images") or []:
            src = Path(raw_path)
            if not src.exists():
                print(f"[AVISO] Imagem não encontrada para Q{num:03d}: {src}", file=sys.stderr)
                continue
            mime_type, _ = mimetypes.guess_type(str(src))
            object_path = f"{exam_id}/{src.name}"
            upload_url = f"{base}/storage/v1/object/{bucket}/{object_path}"
            headers = {
                "Authorization": f"Bearer {service_key}",
                "apikey": service_key,
                "Content-Type": mime_type or "image/png",
                "x-upsert": "true",
            }
            http_request(upload_url, "POST", headers, src.read_bytes())
            public_urls.append(f"{base}/storage/v1/object/public/{bucket}/{object_path}")
        urls_by_num[num] = public_urls

    return urls_by_num


def to_supabase_row(rec: dict) -> dict:
    return {
        "id": rec["id"],
        "exam_id": rec["examId"],
        "banca": rec["banca"],
        "ano": rec["ano"],
        "numero_original": rec["numeroOriginal"],
        "grande_area_id": rec["grandeAreaId"],
        "tema": rec["tema"],
        "subtema": rec["subtema"],
        "tags": rec["tags"],
        "enunciado": rec["enunciado"],
        "alternativas": rec["alternativas"],
        "gabarito_oficial": rec["gabaritoOficial"],
        "anulada": rec["anulada"],
        "images": rec["images"],
        "comentario_geral": rec["comentarioGeral"],
        "explicacoes_por_alternativa": rec["explicacoesPorAlternativa"],
        "referencias": rec["referencias"],
        "hash_conteudo": rec["hashConteudo"],
        "needs_review": rec["needsReview"],
        "flags_revisao": rec["flagsRevisao"],
    }


def export_supabase(
    questions: List[dict],
    meta: dict,
    exam_id: str,
    bucket: str,
    batch_size: int,
    out_dir: Path,
    dry_run: bool,
) -> None:
    banca = meta.get("banca", "GERAL")
    ano = parse_year_from_exam_id(exam_id, meta.get("prova", ""))
    supabase_url = os.environ.get("SUPABASE_URL", "").strip()
    service_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY", "").strip()

    if not dry_run and (not supabase_url or not service_key):
        sys.exit(
            "Erro: defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY "
            "(ou execute com --dry-run para gerar o payload local)."
        )

    if dry_run:
        urls_by_num = {
            int(q["numeroOriginal"]): [
                f"<CDN>/{bucket}/{exam_id}/{Path(p).name}" for p in (q.get("images") or [])
            ]
            for q in questions
        }
    else:
        urls_by_num = upload_images_to_supabase_storage(questions, exam_id, supabase_url, service_key, bucket)

    records = [
        normalize_question_record(q, exam_id, banca, ano, urls_by_num.get(int(q["numeroOriginal"]), []))
        for q in questions
    ]
    rows = [to_supabase_row(r) for r in records]

    exam_row = {
        "id": exam_id,
        "banca": banca,
        "ano": ano,
        "caderno": meta.get("caderno"),
        "arquivo_origem": meta.get("prova"),
        "total_questoes": len(rows),
    }

    payload_file = out_dir / "supabase_payload.json"
    payload_file.parent.mkdir(parents=True, exist_ok=True)
    payload_file.write_text(
        json.dumps({"exam": exam_row, "questions": rows}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    if dry_run:
        print("=== CHECKPOINT ESTÁGIO 4 (SUPABASE DRY-RUN) ===")
        print(f"Exam ID          : {exam_id}")
        print(f"Questões prontas : {len(rows)}")
        print(f"Payload salvo em : {payload_file}")
        return

    base = supabase_url.rstrip("/")
    headers = {
        "Authorization": f"Bearer {service_key}",
        "apikey": service_key,
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates",
    }

    http_request(
        f"{base}/rest/v1/exams?on_conflict=id",
        "POST",
        headers,
        json.dumps([exam_row], ensure_ascii=False).encode("utf-8"),
    )

    for i in range(0, len(rows), batch_size):
        chunk = rows[i : i + batch_size]
        http_request(
            f"{base}/rest/v1/questions?on_conflict=id",
            "POST",
            headers,
            json.dumps(chunk, ensure_ascii=False).encode("utf-8"),
        )
        print(f"[SUPABASE] Upsert lote {i + 1}..{i + len(chunk)} / {len(rows)} OK")

    print("=== CHECKPOINT ESTÁGIO 4 (EXPORTAÇÃO SUPABASE) ===")
    print(f"Exam ID          : {exam_id}")
    print(f"Questões enviadas: {len(rows)}")
    print(f"Bucket de imagens: {bucket}")


def update_hash_registry(registry_path: Path, questions: List[dict], exam_id: str) -> int:
    registry: Dict[str, str] = {}
    if registry_path.exists():
        data = json.loads(registry_path.read_text(encoding="utf-8"))
        if isinstance(data, dict):
            registry = data

    added = 0
    for q in questions:
        h = q.get("hashConteudo")
        if h and h not in registry:
            registry[h] = f"{exam_id}-q{int(q['numeroOriginal']):03d}"
            added += 1

    registry_path.parent.mkdir(parents=True, exist_ok=True)
    registry_path.write_text(json.dumps(registry, ensure_ascii=False, indent=2), encoding="utf-8")
    return added


def main() -> None:
    parser = argparse.ArgumentParser(description="MedR1 - Exportação para TypeScript Chunk ou Supabase")
    parser.add_argument("--input", required=True, type=Path, help="Caminho do validated.json")
    parser.add_argument("--target", required=True, choices=["ts_chunk", "supabase"], help="Destino")
    parser.add_argument("--exam-id", required=True, help="Slug único da prova (ex: enare-2025)")
    parser.add_argument("--project-root", type=Path, default=Path("."), help="Raiz do projeto MedR1")
    parser.add_argument("--bucket", default="exam-images", help="Bucket do Supabase Storage")
    parser.add_argument("--batch-size", type=int, default=100, help="Tamanho do lote no Supabase")
    parser.add_argument("--only-approved", action="store_true", help="Exporta apenas questões APROVADA")
    parser.add_argument("--include-duplicates", action="store_true", help="Inclui duplicatas do banco")
    parser.add_argument("--update-hashes", type=Path, default=None, help="Atualiza existing_hashes.json")
    parser.add_argument("--dry-run", action="store_true", help="Simula sem alterar arquivos/banco")
    args = parser.parse_args()

    if not args.input.exists():
        sys.exit(f"Erro: arquivo não encontrado: {args.input}")

    payload = json.loads(args.input.read_text(encoding="utf-8"))
    meta = payload.get("meta", {})
    all_questions = payload.get("questoes", [])

    accepted, skipped = filter_questions(
        all_questions,
        only_approved=args.only_approved,
        include_duplicates=args.include_duplicates,
    )

    if not accepted:
        sys.exit("Nenhuma questão apta para exportação com os filtros atuais.")

    print(f"[INFO] Aptas: {len(accepted)} | Ignoradas: {len(skipped)}")

    if args.target == "ts_chunk":
        export_ts_chunk(accepted, meta, args.exam_id, args.project_root, args.dry_run)
    else:
        export_supabase(accepted, meta, args.exam_id, args.bucket, args.batch_size, args.input.parent, args.dry_run)

    if args.update_hashes and not args.dry_run:
        added = update_hash_registry(args.update_hashes, accepted, args.exam_id)
        print(f"[INFO] Registro de hashes atualizado (+{added} novos) em: {args.update_hashes}")


if __name__ == "__main__":
    main()
''',
}


def ensure_gitignore_tmp(project_root: Path) -> str:
    gitignore = project_root / ".gitignore"
    if not gitignore.exists():
        gitignore.write_text("tmp/\n", encoding="utf-8")
        return "criado com tmp/"
    content = gitignore.read_text(encoding="utf-8")
    lines = [ln.strip() for ln in content.splitlines()]
    if "tmp/" in lines or "tmp" in lines:
        return "já contém tmp/"
    suffix = "" if (not content or content.endswith("\n")) else "\n"
    gitignore.write_text(content + suffix + "\n# MedR1 Batch Pipeline\ntmp/\n", encoding="utf-8")
    return "adicionado tmp/"


def install(project_root: Path, no_overwrite: bool) -> None:
    skill_dir = project_root / SKILL_REL_ROOT
    created = 0
    skipped = 0
    py_files = []
    json_files = []

    for rel_path, content in FILES.items():
        target = skill_dir / rel_path
        target.parent.mkdir(parents=True, exist_ok=True)
        if target.exists() and no_overwrite:
            print(f"[SKIP] {target}")
            skipped += 1
            continue

        target.write_text(content.lstrip("\n"), encoding="utf-8")
        created += 1

        if target.suffix == ".py":
            mode = os.stat(target).st_mode
            os.chmod(target, mode | stat.S_IXUSR | stat.S_IXGRP | stat.S_IXOTH)
            py_files.append(target)
        elif target.suffix == ".json":
            json_files.append(target)

        print(f"[OK]   {target}")

    # Validação imediata de sintaxe em todos os scripts Python e JSONs instalados
    for py_file in py_files:
        py_compile.compile(str(py_file), doraise=True)
    for json_file in json_files:
        json.loads(json_file.read_text(encoding="utf-8"))

    gitignore_status = ensure_gitignore_tmp(project_root)

    print("\n=== INSTALAÇÃO CONCLUÍDA ===")
    print(f"Diretório da skill : {skill_dir}")
    print(f"Arquivos gravados  : {created} | Ignorados: {skipped}")
    print(f"Validação sintaxe  : {len(py_files)}/{len(py_files)} scripts OK (py_compile) | {len(json_files)}/{len(json_files)} JSONs OK")
    print(f".gitignore         : {gitignore_status}")
    print("\nPróximos passos:")
    print("  1. pip install pymupdf google-genai")
    print("  2. export GEMINI_API_KEY='sua_chave'")
    print("  3. Teste: python3 .agents/skills/medr1-batch-pipeline/scripts/extract_pdf.py --help")


def main() -> None:
    parser = argparse.ArgumentParser(description="Instala a skill medr1-batch-pipeline no repositório MedR1.")
    parser.add_argument("--project-root", type=Path, default=Path("."), help="Raiz do projeto MedR1")
    parser.add_argument("--no-overwrite", action="store_true", help="Não sobrescreve arquivos já existentes")
    args = parser.parse_args()

    try:
        install(args.project_root.resolve(), args.no_overwrite)
    except Exception as exc:
        sys.exit(f"Erro na instalação: {exc}")


if __name__ == "__main__":
    main()
