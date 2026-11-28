/**
 * Classificação taxonômica canônica do MedR1 (taxonomia v1: 5 grandes áreas,
 * 44 temas, 262 subtemas). Módulo puro, compartilhado por frontend, servidor
 * (importação automática) e scripts offline (`scripts/classify_bank.ts`).
 */
import taxonomyJson from '../data/taxonomy/medr1_taxonomy_v1.json';
import type { GrandeAreaId } from '../types/medical';

export const TAXONOMY_VERSION = 'medr1_taxonomy_v1';

interface RawSubtema {
  slug: string;
  label: string;
  aliases?: string[];
}
interface RawTema {
  slug: string;
  label: string;
  subtemas: RawSubtema[];
}
interface RawArea {
  slug: string;
  label: string;
  temas: RawTema[];
}

export interface TaxonomyEntry {
  grandeAreaId: GrandeAreaId;
  areaSlug: string;
  temaSlug: string;
  tema: string;
  subtemaSlug: string;
  subtema: string;
  aliases: string[];
}

export interface TaxonomyClassification {
  grandeAreaId: GrandeAreaId;
  tema: string;
  temaSlug: string;
  subtema: string;
  subtemaSlug: string;
  tags: string[];
  needsTaxonomyReview: boolean;
}

const AREA_SLUG_TO_ID: Record<string, GrandeAreaId> = {
  cm: 'clinica_medica',
  cg: 'cirurgia_geral',
  go: 'ginecologia_obstetricia',
  ped: 'pediatria',
  mp: 'medicina_preventiva',
};

export function normalizeTaxonomyText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const areas = (taxonomyJson as { grandeAreas: RawArea[] }).grandeAreas;

export const TAXONOMY_ENTRIES: TaxonomyEntry[] = areas.flatMap((area) =>
  area.temas.flatMap((tema) =>
    tema.subtemas.map((sub) => ({
      grandeAreaId: AREA_SLUG_TO_ID[area.slug],
      areaSlug: area.slug,
      temaSlug: tema.slug,
      tema: tema.label,
      subtemaSlug: sub.slug,
      subtema: sub.label,
      aliases: sub.aliases ?? [],
    }))
  )
);

const bySubtemaSlug = new Map(TAXONOMY_ENTRIES.map((e) => [e.subtemaSlug, e]));
const byNormLabel = new Map<string, TaxonomyEntry>();
const byNormAlias = new Map<string, TaxonomyEntry>();
for (const e of TAXONOMY_ENTRIES) {
  byNormLabel.set(normalizeTaxonomyText(e.subtema), e);
  for (const a of e.aliases) {
    const key = normalizeTaxonomyText(a);
    if (key && !byNormAlias.has(key)) byNormAlias.set(key, e);
  }
}

export function getTaxonomyEntry(subtemaSlug: string): TaxonomyEntry | undefined {
  return bySubtemaSlug.get(subtemaSlug);
}

/** Resolve slug, label exato ou alias (normalizados) para uma entrada canônica. */
export function resolveSubtema(input: string | undefined | null): TaxonomyEntry | undefined {
  if (!input) return undefined;
  const direct = bySubtemaSlug.get(input.trim());
  if (direct) return direct;
  const norm = normalizeTaxonomyText(input);
  return byNormLabel.get(norm) ?? byNormAlias.get(norm);
}

export function normalizeTags(raw: unknown, max = 6): string[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<string>();
  for (const t of raw) {
    if (typeof t !== 'string') continue;
    const slug = t
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    if (slug.length >= 2 && slug.length <= 40) seen.add(slug);
    if (seen.size >= max) break;
  }
  return [...seen];
}

export function entryToClassification(
  entry: TaxonomyEntry,
  tags: unknown = [],
  needsTaxonomyReview = false
): TaxonomyClassification {
  return {
    grandeAreaId: entry.grandeAreaId,
    tema: entry.tema,
    temaSlug: entry.temaSlug,
    subtema: entry.subtema,
    subtemaSlug: entry.subtemaSlug,
    tags: normalizeTags(tags),
    needsTaxonomyReview,
  };
}

/**
 * Classificador determinístico (sem IA): casa slug/label/alias exatos e, na falta,
 * aplica a Hierarquia de Precedência Clínica sobre o texto antes de escolher o alias
 * mais longo contido no texto. Retorna `undefined` se não houver evidência.
 */
function hasAnyNormalizedPhrase(hay: string, phrases: string[]): boolean {
  return phrases.some((p) => hay.includes(` ${p} `));
}

function hasPediatricAgeContext(hay: string): boolean {
  if (
    hasAnyNormalizedPhrase(hay, [
      'crianca',
      'criancas',
      'lactente',
      'lactentes',
      'pre escolar',
      'escolar',
      'adolescente',
      'adolescentes',
      'menino',
      'meninos',
      'menina',
      'meninas',
      'pediatrico',
      'pediatrica',
      'pediatria',
      'recem nascido',
      'recem nascida',
      'neonato',
      'neonatal',
      'rn',
    ])
  ) {
    return true;
  }
  return /(?:^| )(?!ha |por |durante )(?:[1-9]|1[0-7]) (?:anos|ano|meses|mes|dias de vida) /.test(
    hay
  );
}

function inferBoundaryOverride(hay: string): TaxonomyEntry | undefined {
  const isPed = hasPediatricAgeContext(hay);
  const isObs = hasAnyNormalizedPhrase(hay, [
    'gestante',
    'gestantes',
    'gravida',
    'gravidas',
    'puerpera',
    'puerperas',
    'puerperio',
    'idade gestacional',
    'semanas de gestacao',
  ]);
  const isSurg = hasAnyNormalizedPhrase(hay, [
    'transfusao',
    'transfusao macica',
    'hemocomponente',
    'hemocomponentes',
    'concentrado de hemacias',
    'plasma fresco',
    'pre operatorio',
    'pos operatorio',
    'perioperatorio',
    'cirurgico',
    'cirurgica',
    'politraumatizado',
    'laparotomia',
    'choque hemorragico',
  ]);

  if (isObs) {
    if (
      hasAnyNormalizedPhrase(hay, [
        'tromboembolismo',
        'tep',
        'tvp',
        'trombose venosa',
        'itu',
        'pielonefrite',
        'anticoagulacao',
        'heparina',
        'enoxaparina',
      ])
    ) {
      return bySubtemaSlug.get(
        'go-intercorrencias-itu-tromboembolismo-e-intercorrencias-clinicas'
      );
    }
    if (
      hasAnyNormalizedPhrase(hay, [
        'diabetes gestacional',
        'dmg',
        'insulina',
        'hiperglicemia',
      ])
    ) {
      return bySubtemaSlug.get('go-shg-diabetes-mellitus-gestacional-e-previo');
    }
  }

  if (isPed) {
    if (
      hasAnyNormalizedPhrase(hay, [
        'cetoacidose',
        'cetoacidose diabetica',
        'cad',
        'diabetes',
        'dm1',
        'insulina',
        'hipotireoidismo congenito',
        'hiperplasia adrenal',
      ])
    ) {
      return bySubtemaSlug.get(
        'ped-puericultura-endocrinologia-pediatrica-e-diabetes-na-infancia'
      );
    }
    if (hasAnyNormalizedPhrase(hay, ['asma', 'crise asmatica', 'fibrose cistica'])) {
      return bySubtemaSlug.get('ped-pneumo-ped-asma-na-infancia-e-fibrose-cistica');
    }
    if (
      hasAnyNormalizedPhrase(hay, [
        'sindrome nefritica',
        'sindrome nefrotica',
        'gnpe',
        'glomerulonefrite',
      ])
    ) {
      return bySubtemaSlug.get(
        'ped-gastro-nefro-ped-sindrome-nefritica-e-nefrotica-pediatrica'
      );
    }
  }

  if (isSurg) {
    if (
      hasAnyNormalizedPhrase(hay, [
        'transfusao macica',
        'protocolo de transfusao',
        'hemocomponente',
        'hemocomponentes',
        'concentrado de hemacias',
        'plasma fresco',
        'choque hemorragico',
        'acido tranexamico',
        'reposicao volemica',
      ])
    ) {
      return bySubtemaSlug.get(
        'cg-periop-hemoterapia-transfusao-macica-e-reposicao-volemica'
      );
    }
  }

  return undefined;
}

export function classifyByAliases(
  ...texts: Array<string | undefined | null>
): TaxonomyEntry | undefined {
  for (const t of texts) {
    const exact = resolveSubtema(t ?? undefined);
    if (exact) return exact;
  }
  const hay = ` ${normalizeTaxonomyText(texts.filter(Boolean).join(' '))} `;
  const boundaryMatch = inferBoundaryOverride(hay);
  if (boundaryMatch) return boundaryMatch;

  const preferredAreas = new Set<GrandeAreaId>();
  if (hasPediatricAgeContext(hay)) preferredAreas.add('pediatria');
  if (
    hasAnyNormalizedPhrase(hay, [
      'gestante',
      'gravida',
      'puerpera',
      'idade gestacional',
      'semanas de gestacao',
    ])
  ) {
    preferredAreas.add('ginecologia_obstetricia');
  }
  if (
    hasAnyNormalizedPhrase(hay, [
      'transfusao macica',
      'pre operatorio',
      'pos operatorio',
      'perioperatorio',
      'politraumatizado',
      'laparotomia',
      'choque hemorragico',
    ])
  ) {
    preferredAreas.add('cirurgia_geral');
  }

  let best: { entry: TaxonomyEntry; len: number; preferred: boolean } | undefined;
  for (const [alias, entry] of byNormAlias) {
    if (alias.length < 5) continue;
    if (hay.includes(` ${alias} `)) {
      const isPref = preferredAreas.has(entry.grandeAreaId);
      if (
        !best ||
        (isPref && !best.preferred) ||
        (isPref === best.preferred && alias.length > best.len)
      ) {
        best = { entry, len: alias.length, preferred: isPref };
      }
    }
  }
  return best?.entry;
}

/**
 * Valida a saída de uma IA (subtemaSlug ou rótulos) e devolve a classificação
 * canônica. Sem correspondência exata → fallback por alias e marca para revisão.
 */
export function normalizeAiClassification(
  raw: { subtemaSlug?: unknown; subtema?: unknown; tema?: unknown; tags?: unknown },
  contextText?: string
): TaxonomyClassification | undefined {
  const slug = typeof raw.subtemaSlug === 'string' ? raw.subtemaSlug : undefined;
  const exact = resolveSubtema(slug) ?? resolveSubtema(typeof raw.subtema === 'string' ? raw.subtema : undefined);
  if (exact) return entryToClassification(exact, raw.tags, false);
  const fuzzy = classifyByAliases(
    typeof raw.subtema === 'string' ? raw.subtema : undefined,
    typeof raw.tema === 'string' ? raw.tema : undefined,
    contextText
  );
  return fuzzy ? entryToClassification(fuzzy, raw.tags, true) : undefined;
}

/** Guia compacto (slug | rótulo) para prompts de IA — vocabulário fechado. */
export function buildTaxonomyPromptGuide(): string {
  return areas
    .map((area) => {
      const lines = area.temas.map((tema) => {
        const subs = tema.subtemas.map((s) => `    ${s.slug} | ${s.label}`).join('\n');
        return `  [${tema.label}]\n${subs}`;
      });
      return `# ${area.label} (${AREA_SLUG_TO_ID[area.slug]})\n${lines.join('\n')}`;
    })
    .join('\n');
}

export const CLINICAL_PRECEDENCE_RULES = `HIERARQUIA DE PRECEDÊNCIA CLÍNICA (OBRIGATÓRIA EM FRONTEIRAS):
1. Pediatria > Clínica Médica: Paciente pediátrico (RN, lactente, pré-escolar, escolar, adolescente / idade < 18 anos) com abordagem diagnóstica ou terapêutica pediátrica (incluindo DM1 e cetoacidose diabética na infância, asma infantil, nefropatias e infecções pediátricas) DEVE ser classificado em Pediatria (ex.: "ped-puericultura-endocrinologia-pediatrica-e-diabetes-na-infancia").
2. Cirurgia Geral > Clínica Médica: Transfusão de hemocomponentes, protocolo de transfusão maciça, reposição volêmica no choque hemorrágico/trauma, preparo pré-operatório, manejo de anticoagulantes no perioperatório e complicações pós-operatórias DEVEM ser classificados em Cirurgia Geral (ex.: "cg-periop-hemoterapia-transfusao-macica-e-reposicao-volemica").
3. Ginecologia e Obstetrícia > Clínica Médica: Gestantes ou puérperas com intercorrências clínicas, metabólicas ou trombóticas DEVEM ser classificadas em Ginecologia e Obstetrícia.
4. Sinal de Bloco da Prova: Em provas organizadas por blocos clássicos (Clínica Médica, Cirurgia Geral, Pediatria, Ginecologia e Obstetrícia, Medicina Preventiva), use a numeração/posição da questão como critério auxiliar de desempate.`;

export const TAXONOMY_PROMPT_RULES = `Classifique cada questão escolhendo EXATAMENTE UM "subtemaSlug" da lista fechada abaixo (copie o slug literalmente, nunca invente). O tema e a grande área derivam do slug. Escolha o subtema mais específico para o ASSUNTO PRINCIPAL cobrado (não o cenário). Se nada se encaixar bem, escolha o mais próximo e marque "baixaConfianca": true. Gere de 3 a 5 "tags" em lowercase-kebab-case sem acentos (conceitos-chave: doença, fármaco, conduta, padrão de cobrança).

${CLINICAL_PRECEDENCE_RULES}`;
