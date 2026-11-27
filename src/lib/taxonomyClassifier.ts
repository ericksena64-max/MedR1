/**
 * Classificação taxonômica canônica do MedR1 (taxonomia v1: 5 grandes áreas,
 * 44 temas, 260 subtemas). Módulo puro, compartilhado por frontend, servidor
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
 * o alias mais longo contido no texto. Retorna `undefined` se não houver evidência.
 */
export function classifyByAliases(
  ...texts: Array<string | undefined | null>
): TaxonomyEntry | undefined {
  for (const t of texts) {
    const exact = resolveSubtema(t ?? undefined);
    if (exact) return exact;
  }
  const hay = ` ${normalizeTaxonomyText(texts.filter(Boolean).join(' '))} `;
  let best: { entry: TaxonomyEntry; len: number } | undefined;
  for (const [alias, entry] of byNormAlias) {
    if (alias.length < 5) continue;
    if (hay.includes(` ${alias} `) && (!best || alias.length > best.len)) {
      best = { entry, len: alias.length };
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

export const TAXONOMY_PROMPT_RULES = `Classifique cada questão escolhendo EXATAMENTE UM "subtemaSlug" da lista fechada abaixo (copie o slug literalmente, nunca invente). O tema e a grande área derivam do slug. Escolha o subtema mais específico para o ASSUNTO PRINCIPAL cobrado (não o cenário). Se nada se encaixar bem, escolha o mais próximo e marque "baixaConfianca": true. Gere de 3 a 5 "tags" em lowercase-kebab-case sem acentos (conceitos-chave: doença, fármaco, conduta, padrão de cobrança).`;
