import fs from 'node:fs';
import path from 'node:path';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import type {
  AlternativeLetter,
  GrandeAreaId,
  MedicalQuestion,
  QuestionAlternative,
} from '../src/types/medical';

interface ExamFilePair {
  ano: number;
  provaFile: string;
  gabaritoFile: string;
  provaPublicUrl: string;
}

const UEPA_EXAMS: ExamFilePair[] = [
  {
    ano: 2020,
    provaFile: 'public/assets/aistudio/PROVA_2020_145c24aa.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2020_06a0571a.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2020_145c24aa.pdf',
  },
  {
    ano: 2021,
    provaFile: 'public/assets/aistudio/PROVA_2021_6e169662.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2021_10c4610f.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2021_6e169662.pdf',
  },
  {
    ano: 2022,
    provaFile: 'public/assets/aistudio/PROVA_2022_4858f52f.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2022_7af55aba.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2022_4858f52f.pdf',
  },
  {
    ano: 2023,
    provaFile: 'public/assets/aistudio/PROVA_2023_3cf11773.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2023_7b8c8a16.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2023_3cf11773.pdf',
  },
  {
    ano: 2024,
    provaFile: 'public/assets/aistudio/PROVA_2024_d18cc12f.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2024_588b7219.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2024_d18cc12f.pdf',
  },
  {
    ano: 2025,
    provaFile: 'public/assets/aistudio/PROVA_2025_4d6f0db0.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2025_93896fd7.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2025_4d6f0db0.pdf',
  },
  {
    ano: 2026,
    provaFile: 'public/assets/aistudio/PROVA_2026_0468a015.pdf',
    gabaritoFile: 'public/assets/aistudio/GABARITO_2026_5e2fc746.pdf',
    provaPublicUrl: '/assets/aistudio/PROVA_2026_0468a015.pdf',
  },
];

interface PdfToken {
  x: number;
  xEnd: number;
  y: number;
  w: number;
  h: number;
  str: string;
  fontName: string;
}

interface TextLine {
  page: number;
  y: number;
  minX: number;
  maxX: number;
  tokens: PdfToken[];
  text: string;
  column: 'left' | 'right' | 'full';
}

interface GabaritoEntry {
  numero: number;
  letter: AlternativeLetter;
  anulada: boolean;
}

const VALID_LETTERS: AlternativeLetter[] = ['A', 'B', 'C', 'D', 'E'];

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function extractGabarito(filePath: string): Promise<Map<number, GabaritoEntry>> {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true, disableFontFace: true }).promise;
  const map = new Map<number, GabaritoEntry>();

  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    const tokens: PdfToken[] = [];
    for (const raw of tc.items as any[]) {
      if (!('str' in raw)) continue;
      const s = String(raw.str).trim();
      if (!s) continue;
      tokens.push({
        x: raw.transform[4],
        xEnd: raw.transform[4] + (raw.width || 0),
        y: raw.transform[5],
        w: raw.width || 0,
        h: Math.abs(raw.transform[0] || raw.height || 10),
        str: s,
        fontName: raw.fontName || '',
      });
    }

    // Group tokens into rows by Y coordinate (within 5pt)
    tokens.sort((a, b) => b.y - a.y || a.x - b.x);
    const rows: PdfToken[][] = [];
    for (const tok of tokens) {
      const last = rows[rows.length - 1];
      if (last && Math.abs(last[0].y - tok.y) <= 5) {
        last.push(tok);
      } else {
        rows.push([tok]);
      }
    }

    for (const row of rows) {
      row.sort((a, b) => a.x - b.x);
      // Skip notes/obs rows
      const rowJoined = row.map((t) => t.str).join(' ');
      if (/^OBS\b|ALTERADA|UNIVERSIDADE|GABARITO|PROCESSO|RESID[EÊ]NCIA|QUEST[ÃA]O/i.test(rowJoined)) {
        continue;
      }

      // Flatten tokens splitting any whitespace inside a single token
      const flat = row
        .flatMap((t) => t.str.split(/\s+/))
        .map((s) => s.trim())
        .filter(Boolean);

      for (let i = 0; i < flat.length - 1; i++) {
        const cur = flat[i];
        const nxt = flat[i + 1].toUpperCase();
        if (/^\d{1,3}$/.test(cur)) {
          const num = Number(cur);
          if (num >= 1 && num <= 100) {
            if (nxt === 'ANULADA' || nxt === 'NULA' || nxt === 'ANULADO') {
              map.set(num, { numero: num, letter: 'A', anulada: true });
              i++;
            } else if (/^[A-E]$/.test(nxt)) {
              map.set(num, { numero: num, letter: nxt as AlternativeLetter, anulada: false });
              i++;
            }
          }
        }
      }
    }
  }

  return map;
}

function joinTokensToText(tokens: PdfToken[]): string {
  const sorted = [...tokens].sort((a, b) => a.x - b.x);
  let out = '';
  let prev: PdfToken | null = null;

  for (const tok of sorted) {
    const s = tok.str;
    if (!s) continue;
    if (!prev) {
      out += s;
      prev = tok;
      continue;
    }

    const gap = tok.x - prev.xEnd;
    const prevEndsSpace = /\s$/.test(out);
    const curStartsSpace = /^\s/.test(s);
    const isSubOrSup = Math.abs(tok.y - prev.y) > 1.2 && s.trim().length <= 3;

    if (prevEndsSpace || curStartsSpace) {
      out += s;
    } else if (isSubOrSup && gap < 4) {
      out += s;
    } else if (gap > 1.8) {
      out += ' ' + s;
    } else {
      out += s;
    }
    prev = tok;
  }

  return out.replace(/[ \t]+/g, ' ').trim();
}

function buildVisualLines(tokens: PdfToken[], pageNum: number, column: 'left' | 'right' | 'full'): TextLine[] {
  if (tokens.length === 0) return [];
  // Sort top-to-bottom, then left-to-right
  const sorted = [...tokens].sort((a, b) => b.y - a.y || a.x - b.x);
  const clusters: PdfToken[][] = [];

  for (const tok of sorted) {
    // Find an existing cluster whose anchor Y is close enough AND does not horizontally collide
    let placed = false;
    for (let i = clusters.length - 1; i >= Math.max(0, clusters.length - 4); i--) {
      const cluster = clusters[i];
      // Use the main-height token's y as cluster anchor
      const anchorY = cluster[0].y;
      const dy = Math.abs(anchorY - tok.y);
      const isTinySupSub = tok.str.trim().length <= 4 && tok.h < 8.5;
      const maxDy = isTinySupSub ? 5.2 : 3.2;

      if (dy <= maxDy) {
        // Check no horizontal overlap with an existing non-space token in cluster
        const overlaps = cluster.some(
          (c) =>
            c.str.trim().length > 0 &&
            tok.str.trim().length > 0 &&
            Math.min(c.xEnd, tok.xEnd) - Math.max(c.x, tok.x) > 2.5
        );
        if (!overlaps) {
          cluster.push(tok);
          placed = true;
          break;
        }
      }
    }
    if (!placed) {
      clusters.push([tok]);
    }
  }

  // Sort clusters strictly top-to-bottom by max Y
  clusters.sort((a, b) => {
    const ay = a.reduce((m, t) => Math.max(m, t.y), -Infinity);
    const by = b.reduce((m, t) => Math.max(m, t.y), -Infinity);
    return by - ay;
  });

  return clusters
    .map((cluster) => {
      const nonSpace = cluster.filter((t) => t.str.trim().length > 0);
      if (nonSpace.length === 0) return null;
      nonSpace.sort((a, b) => a.x - b.x);
      const minX = nonSpace[0].x;
      const maxX = Math.max(...nonSpace.map((t) => t.xEnd));
      const y = nonSpace[0].y;
      const text = joinTokensToText(cluster);
      if (!text) return null;
      return {
        page: pageNum,
        y,
        minX,
        maxX,
        tokens: nonSpace,
        text,
        column,
      };
    })
    .filter((l): l is TextLine => l !== null);
}

/**
 * Splits a page's body tokens into ordered visual lines respecting both
 * 2-column UEPA regions (left col top->bottom, then right col top->bottom)
 * and full-width bands (e.g. wide questions/cases at top or bottom of a page).
 */
async function extractOrderedLinesFromProva(filePath: string): Promise<{
  lines: TextLine[];
  altBulletFonts: Set<string>;
}> {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const doc = await pdfjs.getDocument({ data, useSystemFonts: true, disableFontFace: true }).promise;

  // Pass 1: discover which fontName(s) are used exclusively/primarily for single-char a..e bullets
  const singleCharFontCounts = new Map<string, number>();
  const multiCharFontCounts = new Map<string, number>();

  const pageTokensList: Array<{ page: number; width: number; tokens: PdfToken[] }> = [];

  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const vp = page.getViewport({ scale: 1 });
    const tc = await page.getTextContent();
    const rawTokens: PdfToken[] = [];

    for (const raw of tc.items as any[]) {
      if (!('str' in raw)) continue;
      const str = String(raw.str);
      if (str.length === 0) continue;
      const x = raw.transform[4];
      const y = raw.transform[5];
      const w = raw.width || 0;
      const h = Math.abs(raw.transform[0] || raw.height || 10);
      const fontName = raw.fontName || '';

      // Skip page header (top) & footer (bottom)
      if (y >= 792 || y <= 54) continue;

      const trimmed = str.trim();
      if (trimmed.length > 0) {
        if (/^[a-e]$/.test(trimmed)) {
          singleCharFontCounts.set(fontName, (singleCharFontCounts.get(fontName) || 0) + 1);
        } else if (trimmed.length >= 2) {
          multiCharFontCounts.set(fontName, (multiCharFontCounts.get(fontName) || 0) + 1);
        }
      }

      rawTokens.push({ x, xEnd: x + w, y, w, h, str, fontName });
    }

    pageTokensList.push({ page: p, width: vp.width, tokens: rawTokens });
  }

  // A bullet font has many single [a-e] occurrences (>= 30) and almost ZERO multi-char words
  const altBulletFonts = new Set<string>();
  for (const [fontName, singleCount] of singleCharFontCounts.entries()) {
    const multiCount = multiCharFontCounts.get(fontName) || 0;
    if (singleCount >= 30 && multiCount < singleCount * 0.25) {
      altBulletFonts.add(fontName);
    }
  }

  // Pass 2: segment each page (skipping page 1 cover if it has no question 1.)
  const allOrderedLines: TextLine[] = [];

  for (const { page, width, tokens } of pageTokensList) {
    const nonSpaceTokens = tokens.filter((t) => t.str.trim().length > 0);
    if (nonSpaceTokens.length === 0) continue;

    // Skip page 1 cover sheet AND back-cover "GABARITO DO CANDIDATO" sheet
    const pageFullText = nonSpaceTokens.map((t) => t.str).join(' ');
    if (
      page === 1 &&
      /BOLETIM DE QUEST[ÕO]ES|LEIA,?\s*COM ATEN[ÇC][ÃA]O|CART[ÃA]O-?RESPOSTA|INSTRU[ÇC][ÕO]ES|CADERNO DE QUEST[ÕO]ES/i.test(
        pageFullText
      )
    ) {
      continue;
    }
    if (/GABARITO DO CANDIDATO/i.test(pageFullText)) {
      continue;
    }

    const midX = width / 2; // ~297.66 on A4

    // Build preliminary horizontal rows across the full page width to classify bands
    const fullPageLines = buildVisualLines(tokens, page, 'full');

    // Determine for each preliminary horizontal row whether it crosses the center gutter
    type RowKind = 'full_cross' | 'two_col' | 'left_only' | 'right_only';
    interface ClassifiedRow {
      line: TextLine;
      kind: RowKind;
      leftTokens: PdfToken[];
      rightTokens: PdfToken[];
    }

    // Strict partition with ZERO crack:
    // Left column tokens: xEnd <= gutterRight (midX + 12) AND x < gutterLeft (midX + 4) -> wait:
    // Any token overlapping the gutter band [midX + 2, midX + 12] marks the whole line as full_cross!
    const gutterLeft = midX + 2;
    const gutterRight = midX + 12;

    const classifiedRows: ClassifiedRow[] = fullPageLines.map((line) => {
      const crossesDirect = line.tokens.some(
        (t) => t.x < gutterRight && t.xEnd > gutterLeft
      );
      if (crossesDirect) {
        return { line, kind: 'full_cross', leftTokens: [], rightTokens: [] };
      }

      // Now guaranteed: every token has either xEnd <= gutterLeft OR x >= gutterRight (ZERO dropped tokens!)
      const leftTokens = line.tokens.filter((t) => t.xEnd <= gutterLeft);
      const rightTokens = line.tokens.filter((t) => t.x >= gutterRight);

      if (leftTokens.length > 0 && rightTokens.length > 0) {
        const maxLeftEnd = Math.max(...leftTokens.map((t) => t.xEnd));
        const minRightStart = Math.min(...rightTokens.map((t) => t.x));
        const gap = minRightStart - maxLeftEnd;
        // True 2-column UEPA gutter is >= 14pt; normal word space in a full-width sentence is < 14pt
        if (gap < 14) {
          return { line, kind: 'full_cross', leftTokens: [], rightTokens: [] };
        }
        return { line, kind: 'two_col', leftTokens, rightTokens };
      }

      if (leftTokens.length > 0) {
        return { line, kind: 'left_only', leftTokens, rightTokens: [] };
      }
      return { line, kind: 'right_only', leftTokens: [], rightTokens };
    });

    // Group rows into vertical bands: 'full' vs 'two_col'
    // A 'left_only' row inherits 'full' if we are currently in a 'full' band AND no 'two_col'/'right_only'
    // appears closely below it (within the same paragraph); otherwise it belongs to the 2-column left stream.
    interface Band {
      mode: 'full' | 'two_col';
      rows: ClassifiedRow[];
    }

    const bands: Band[] = [];
    for (let i = 0; i < classifiedRows.length; i++) {
      const row = classifiedRows[i];
      let targetMode: 'full' | 'two_col';

      if (row.kind === 'full_cross') {
        targetMode = 'full';
      } else if (row.kind === 'two_col' || row.kind === 'right_only') {
        targetMode = 'two_col';
      } else {
        // left_only: check surrounding context
        const prevBand = bands[bands.length - 1];
        // Look ahead to see if there's any right-column content before the next full_cross or end of page
        let nextNonLeft: RowKind | null = null;
        for (let j = i + 1; j < classifiedRows.length; j++) {
          if (classifiedRows[j].kind !== 'left_only') {
            nextNonLeft = classifiedRows[j].kind;
            break;
          }
        }
        if (prevBand?.mode === 'full') {
          // Stay in full mode unless a two_col or right_only starts next AND there's a big Y gap
          const yGapFromPrev = prevBand.rows[prevBand.rows.length - 1].line.y - row.line.y;
          if ((nextNonLeft === 'two_col' || nextNonLeft === 'right_only') && yGapFromPrev > 18) {
            targetMode = 'two_col';
          } else {
            targetMode = 'full';
          }
        } else if (nextNonLeft === 'full_cross') {
          // Could be a short line right before a full-width paragraph or last line of left col
          // If prevBand is two_col, keep in two_col unless there's a large vertical gap and it starts a new full-width question
          const startsNewQ = /^\d{1,3}\.\s/.test(row.line.text);
          const nextRow = classifiedRows[i + 1];
          const closeToNextFull = nextRow && nextRow.kind === 'full_cross' && (row.line.y - nextRow.line.y) < 16;
          targetMode = (startsNewQ || closeToNextFull) ? 'full' : 'two_col';
        } else {
          targetMode = 'two_col';
        }
      }

      const lastBand = bands[bands.length - 1];
      if (lastBand && lastBand.mode === targetMode) {
        lastBand.rows.push(row);
      } else {
        bands.push({ mode: targetMode, rows: [row] });
      }
    }

    // Emit lines from each band in strict reading order
    for (const band of bands) {
      if (band.mode === 'full') {
        for (const r of band.rows) {
          allOrderedLines.push({ ...r.line, column: 'full' });
        }
      } else {
        const leftRawTokens = band.rows.flatMap((r) => r.leftTokens);
        const rightRawTokens = band.rows.flatMap((r) => r.rightTokens);
        const leftLines = buildVisualLines(leftRawTokens, page, 'left');
        const rightLines = buildVisualLines(rightRawTokens, page, 'right');
        allOrderedLines.push(...leftLines, ...rightLines);
      }
    }
  }

  return { lines: allOrderedLines, altBulletFonts };
}

function isAltBulletLine(line: TextLine, altBulletFonts: Set<string>): {
  letter: AlternativeLetter;
  restText: string;
} | null {
  if (line.tokens.length === 0) return null;
  const first = line.tokens[0];
  const firstTrim = first.str.trim();

  // Case 1: exact single lowercase [a-e] in one of the detected UEPA circular-bullet fonts
  if (/^[a-e]$/.test(firstTrim) && altBulletFonts.has(first.fontName)) {
    const restTokens = line.tokens.slice(1);
    return {
      letter: firstTrim.toUpperCase() as AlternativeLetter,
      restText: joinTokensToText(restTokens),
    };
  }

  // Case 2: fallback for a)/b)/c)/d)/e) or A)/B)/C)/D)/E) or single [a-e] with large indent gap (>= 5pt)
  const parenMatch = line.text.match(/^([a-eA-E])\)\s*(.+)$/);
  if (parenMatch) {
    return {
      letter: parenMatch[1].toUpperCase() as AlternativeLetter,
      restText: parenMatch[2].trim(),
    };
  }

  // Case 3: single [a-e] token whose fontName differs from second token AND sits at alternative margin
  if (/^[a-e]$/.test(firstTrim) && line.tokens.length >= 2) {
    const second = line.tokens[1];
    const colBaseX = line.column === 'right' ? 335 : 65;
    const nearAltMargin = first.x >= colBaseX && first.x <= colBaseX + 32;
    const fontDiffers = first.fontName !== second.fontName;
    const indentGap = second.x - first.xEnd >= 3.5;
    if (nearAltMargin && fontDiffers && indentGap) {
      return {
        letter: firstTrim.toUpperCase() as AlternativeLetter,
        restText: joinTokensToText(line.tokens.slice(1)),
      };
    }
  }

  return null;
}

function detectQuestionStart(line: TextLine, expectedNext: number): {
  numero: number;
  restText: string;
} | null {
  // Check strict hanging-indent margin:
  // UEPA question numbers protrude 15–28pt LEFT of body text:
  //   Left col / full-width: qNum at x ≈ 40..64, body at x ≈ 70..78
  //   Right col:             qNum at x ≈ 312..334, body at x ≈ 340..348
  const isLeftOrFull = line.column === 'left' || line.column === 'full';
  const colMinX = isLeftOrFull ? 30 : 300;
  const colMaxX = isLeftOrFull ? 66 : 335;

  if (line.minX < colMinX || line.minX > colMaxX) return null;

  // Match "1." or "100." at the start of the line
  const match = line.text.match(/^(\d{1,3})\s*[.\-–]\s*(.*)$/);
  if (!match) return null;

  const num = Number(match[1]);
  if (num < 1 || num > 100) return null;

  // Require strictly sequential next question (or within +2 only if first token is an isolated number token like "14.")
  const firstTok = line.tokens[0]?.str.trim() ?? '';
  const isIsolatedNumToken = /^\d{1,3}\.?$/.test(firstTok);

  if (num === expectedNext) {
    return { numero: num, restText: match[2].trim() };
  }
  if (isIsolatedNumToken && num > expectedNext && num <= expectedNext + 2) {
    return { numero: num, restText: match[2].trim() };
  }

  return null;
}

function parseReferencedQuestionNumbers(text: string): number[] {
  const nums = new Set<number>();
  // Only match forward target phrases like "para responder às questões 83 e 84", "para responder à questão 93",
  // "as questões 86, 87 e 88 referem-se" — NEVER backward references like "do caso anterior das questões 86 e 87".
  const norm = normalizeText(text);
  const blockMatches = norm.matchAll(
    /(?:para\s+responder\s+(?:as?|a)?\s*quest(?:ao|oes)|^as\s+questoes)\s+(\d{1,3}(?:\s*(?:,|e|a|-)\s*\d{1,3})*)/g
  );
  for (const m of blockMatches) {
    const expr = m[1];
    const rangeMatch = expr.match(/^(\d{1,3})\s*(?:a|-)\s*(\d{1,3})$/);
    if (rangeMatch) {
      const start = Number(rangeMatch[1]);
      const end = Number(rangeMatch[2]);
      if (start >= 1 && end <= 100 && end >= start && end - start <= 10) {
        for (let k = start; k <= end; k++) nums.add(k);
        continue;
      }
    }
    for (const d of expr.matchAll(/\d{1,3}/g)) {
      const n = Number(d[0]);
      if (n >= 1 && n <= 100) nums.add(n);
    }
  }
  return [...nums].sort((a, b) => a - b);
}

function appendLineCleanly(existing: string, nextLine: string): string {
  const cleanNext = nextLine.trim();
  if (!cleanNext) return existing;
  if (!existing) return cleanNext;

  // Preserve intentional line breaks before Roman numerals, V/F items "( )", or explicit numbered items
  if (/^(?:[IVX]{1,4}\s*[.\-–)]|\(\s*\)|•|-)/.test(cleanNext)) {
    return `${existing}\n${cleanNext}`;
  }

  // Soft hyphen at end of PDF line: preserve known Portuguese prefixes/compounds, join broken words
  if (existing.endsWith('-')) {
    const keepHyphen =
      /(?:pré|pós|pró|anti|auto|inter|intra|sub|super|hiper|hipo|neo|semi|não|recém|infecto|custo|benigno|maligno|t|z|c|d|e|f|g|h|l|m|n|p|q|r|s|v|x|y)-$/i.test(
        existing
      );
    if (keepHyphen) {
      return `${existing}${cleanNext}`;
    }
    // Check if next line starts with a lowercase letter (likely broken word across PDF column)
    if (/^[a-záàâãéêíóôõúç]/.test(cleanNext)) {
      return `${existing.slice(0, -1)}${cleanNext}`;
    }
  }

  return `${existing} ${cleanNext}`;
}

interface ExtractedRawQuestion {
  numero: number;
  page: number;
  enunciado: string;
  alternativas: Record<AlternativeLetter, string>;
  hasImageReference: boolean;
}

function parseProvaLines(
  lines: TextLine[],
  altBulletFonts: Set<string>
): {
  questions: Map<number, ExtractedRawQuestion>;
  preamblesByQuestion: Map<number, string[]>;
} {
  const questions = new Map<number, ExtractedRawQuestion>();
  const preamblesByQuestion = new Map<number, string[]>();

  let currentQ: ExtractedRawQuestion | null = null;
  let currentAlt: AlternativeLetter | null = null;
  let expectedNext = 1;
  let pendingPreambleLines: string[] = [];

  const flushPreamble = (nextQNum: number) => {
    if (pendingPreambleLines.length === 0) return;
    const text = pendingPreambleLines
      .reduce((acc, line) => appendLineCleanly(acc, line), '')
      .trim();
    pendingPreambleLines = [];
    if (text.length < 15) return;

    const refs = parseReferencedQuestionNumbers(text);
    const targets = refs.length > 0 ? refs : [nextQNum];
    for (const qNum of targets) {
      const list = preamblesByQuestion.get(qNum) || [];
      list.push(text);
      preamblesByQuestion.set(qNum, list);
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.text.trim();
    if (!trimmed) continue;

    // Detect preamble box start even if we are right after alternative E of previous question
    const isPreambleTrigger =
      /^(?:Leia\s+(?:o\s+texto|a\s+situa[çc][ãa]o|o\s+caso|os\s+casos|o\s+quadro|as\s+informa[çc][õo]es|atentamente)|Avalie\s+(?:os\s+casos|o\s+caso|o\s+quadro)|Analise\s+(?:o\s+caso|o\s+quadro|o\s+gr[áa]fico|a\s+tabela|a\s+figura|o\s+partograma)|Observe\s+(?:as\s+informa[çc][õo]es|a\s+figura|o\s+gr[áa]fico|o\s+partograma|o\s+tra[çc]ado|a\s+imagem|o\s+caso|o\s+quadro)|Na\s+reavalia[çc][ãa]o\s+cl[íi]nica|Considere\s+(?:o\s+caso|o\s+texto|a\s+situa[çc][ãa]o|as\s+informa[çc][õo]es)|Com\s+base\s+no\s+(?:caso|texto|quadro)\s+abaixo|Texto\s+para\s+as?\s+quest|Caso\s+cl[íi]nico\s+para\s+as?\s+quest|As\s+quest[õo]es\s+\d)/i.test(
        trimmed
      );

    if (isPreambleTrigger && (currentAlt === 'E' || currentQ === null)) {
      // Close current question so preamble lines aren't appended into alternative E
      if (currentQ) {
        questions.set(currentQ.numero, currentQ);
        currentQ = null;
        currentAlt = null;
      }
      pendingPreambleLines.push(trimmed);
      continue;
    }

    // Check if this line starts a new question
    const qStart = detectQuestionStart(line, expectedNext);
    if (qStart && !questions.has(qStart.numero)) {
      if (currentQ) {
        questions.set(currentQ.numero, currentQ);
      }
      flushPreamble(qStart.numero);

      currentQ = {
        numero: qStart.numero,
        page: line.page,
        enunciado: qStart.restText,
        alternativas: { A: '', B: '', C: '', D: '', E: '' },
        hasImageReference: false,
      };
      currentAlt = null;
      expectedNext = qStart.numero + 1;
      continue;
    }

    // If we are inside a preamble block before the next question
    if (!currentQ) {
      // Ignore cover/section title noise unless it looks like a real preamble
      if (pendingPreambleLines.length > 0 || /quest(?:ã|a)o|quest(?:õ|o)es/i.test(trimmed)) {
        pendingPreambleLines.push(trimmed);
      }
      continue;
    }

    // Check if this line starts an alternative (a..e)
    const altStart = isAltBulletLine(line, altBulletFonts);
    if (altStart) {
      // Guard: only transition in order or if that letter is still empty
      const letterOrder = VALID_LETTERS.indexOf(altStart.letter);
      const curOrder = currentAlt ? VALID_LETTERS.indexOf(currentAlt) : -1;
      if (letterOrder === curOrder + 1 || (!currentQ.alternativas[altStart.letter] && letterOrder > curOrder)) {
        currentAlt = altStart.letter;
        currentQ.alternativas[currentAlt] = altStart.restText;
        continue;
      }
    }

    // Otherwise append to active alternative or to stem
    if (currentAlt) {
      currentQ.alternativas[currentAlt] = appendLineCleanly(
        currentQ.alternativas[currentAlt],
        trimmed
      );
    } else {
      currentQ.enunciado = appendLineCleanly(currentQ.enunciado, trimmed);
    }
  }

  if (currentQ) {
    questions.set(currentQ.numero, currentQ);
  }

  // Prepend captured preambles to every referenced question
  for (const [qNum, preambles] of preamblesByQuestion.entries()) {
    const q = questions.get(qNum);
    if (!q) continue;
    const prefix = preambles.join('\n\n');
    if (!q.enunciado.includes(prefix.slice(0, 40))) {
      q.enunciado = `${prefix}\n\n${q.enunciado}`.trim();
    }
  }

  // Flag questions that reference an embedded figure/partogram/ECG/chart in the PDF
  for (const q of questions.values()) {
    const combined = `${q.enunciado} ${Object.values(q.alternativas).join(' ')}`;
    q.hasImageReference =
      /\b(?:partograma|cardiotocografia|forest\s*plot|curva(?:s)?\s+de\s+nelson\s+moraes|tra[çc]ado\s+(?:abaixo|acima|eletrocardiogr[áa]fico\s+abaixo)|figura\s+(?:abaixo|acima|ao\s+lado)|imagem\s+(?:abaixo|acima|ao\s+lado)|gr[áa]fico\s+(?:abaixo|acima|a\s+seguir)|ilustra[çc][ãa]o\s+(?:abaixo|acima)|observe\s+o\s+ecg\s+abaixo)\b/i.test(
        combined
      );
  }

  return { questions, preamblesByQuestion };
}

// -----------------------------------------------------------------------------
// Deterministic Medical Residency Taxonomy Classifier (UEPA / MedR1 Canonical)
// Uses official section structure + comprehensive clinical keyword scoring
// (especially critical for UEPA 2021 where Q45-Q60 mixed Cirurgia/GO/Pediatria)
// -----------------------------------------------------------------------------

interface TopicClassification {
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  subtema: string;
}

const GRANDE_AREA_NAMES: Record<GrandeAreaId, string> = {
  clinica_medica: 'Clínica Médica',
  cirurgia_geral: 'Cirurgia Geral',
  ginecologia_obstetricia: 'Ginecologia e Obstetrícia',
  pediatria: 'Pediatria',
  medicina_preventiva: 'Medicina Preventiva e Social',
};

interface TopicRule {
  grandeAreaId: GrandeAreaId;
  tema: string;
  subtema: string;
  patterns: RegExp[];
  weight?: number;
}

const TOPIC_RULES: TopicRule[] = [
  // Medicina Preventiva e Social
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Atenção Primária e SUS',
    subtema: 'Políticas de Saúde, ESF e Princípios do SUS',
    patterns: [
      /\b(?:sus|sistema unico de saude|atencao primaria|atencao basica|estrategia saude da familia|esf|ubs|nasf|pnab|lei 8\.?080|lei 8\.?142|territorializacao|longitudinalidade|integralidade|equidade|universalidade|descentralizacao|controle social|conselho de saude|conferencia de saude|previne brasil|financiamento do sus|redes de atencao|ras|prontuario|metodo clinico centrado|abordagem familiar|genograma|ecomapa|visita domiciliar|agente comunitario|acs|nucleo ampliado|matriciamento|projeto terapeutico singular|pts)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Epidemiologia',
    subtema: 'Indicadores, Bioestatística e Desenhos de Estudo',
    patterns: [
      /\b(?:sensibilidade|especificidade|valor preditivo|razao de verossimilhanca|acuracia|curva roc|coorte|caso-controle|caso controle|ensaio clinico|randomizado|transversal|estudo ecologico|revisao sistemica|revisao sistematica|metanalise|meta-analise|forest plot|risco relativo|odds ratio|razao de chances|nnt|numero necessario para tratar|reducao do risco|intervalo de confianca|valor de p|erro alfa|erro beta|vies de|fator de confusao|incidencia|prevalencia|letalidade|mortalidade infantil|mortalidade materna|swaroop|nelson moraes|transicao epidemiologica|transicao demografica|piramide etaria|esperanca de vida|historia natural da doenca|leavell|prevencao primaria|prevencao secundaria|prevencao terciaria|prevencao quaternaria|rastreamento)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Vigilância em Saúde',
    subtema: 'Notificação Compulsória, Surtos e Declaração de Óbito',
    patterns: [
      /\b(?:notificacao compulsoria|sinan|sim|sinasc|sistema de informacao|declaracao de obito|causa basica|atestado de obito|vigilancia epidemiologica|vigilancia sanitaria|surto|epidemia|endemia|pandemia|diagrama de controle|curva epidemica|investigacao de surto)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Saúde do Trabalhador',
    subtema: 'Doenças Ocupacionais, CAT e Schilling',
    patterns: [
      /\b(?:saude do trabalhador|acidente de trabalho|doenca ocupacional|schilling|silicose|asbestose|pneumoconiose|pair|perda auditiva induzida|ler\/dort|cat\b|comunicacao de acidente|saturnismo|benzenismo|intoxicacao por agrotoxico|organofosforado|cerest|nr-\d)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Ética Médica',
    subtema: 'Código de Ética Médica, Sigilo e Bioética',
    patterns: [
      /\b(?:codigo de etica medica|conselho regional de medicina|crm|cfm|sigilo medico|bioetica|autonomia|beneficencia|nao maleficencia|termo de consentimento|ortotanasia|distanasia|eutanasia|diretivas antecipadas|cuidados paliativos|iatrogenia|impericia|imprudencia|negligencia)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'medicina_preventiva',
    tema: 'Doenças Endêmicas',
    subtema: 'Endemias Amazônicas e Agravos Tropicais',
    patterns: [
      /\b(?:malaria|plasmodium|vivax|falciparum|gota espessa|cloroquina|primaquina|hanseniase|paucibacilar|multibacilar|pqt|baciloscopia|reacao hansenica|leishmaniose|calazar|leishmania|dengue|chikungunya|zika|arbovirose|febre amarela|doenca de chagas|trypanosoma cruzi|leptospirose|esquistossomose|mansoni|tuberculose|bacilo de koch|bk|trm-tb|esquema ripe|raiva humana|acidente ofidico|bothrops|crotalus|lachesis|micrurus|escorpionismo|febre tifoide|filariose|oncocercose|doenca de jorge lobo|paracoccidioidomicose|histoplasmose)\b/i,
    ],
    weight: 3,
  },

  // Ginecologia e Obstetrícia
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Síndromes Hipertensivas',
    subtema: 'Pré-eclâmpsia, Eclâmpsia e Síndrome HELLP',
    patterns: [
      /\b(?:pre-eclampsia|preeclampsia|eclampsia|sindrome hellp|hellp|hipertensao gestacional|hipertensao cronica superposta|sulfato de magnesio|pritchard|zuspan|proteinuria.*gestant|gestant.*pa\s*1[4-9]\d|iminencia de eclampsia|metildopa|hidralazina.*gestant)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Pré-Natal e Alto Risco',
    subtema: 'Assistência Pré-Natal, DMG e Infecções na Gestação',
    patterns: [
      /\b(?:pre-natal|prenatal|gestante|primigesta|secundigesta|multigesta|ig\s*\d+\s*semanas|idade gestacional|altura uterina|diabetes\s*(?:mellitus\s*)?gestacional|totg|curva glicemica.*gesta|isoimunizacao|coombs indireto|imunoglobulina anti-d|toxoplasmose.*gesta|espiramicina|sifilis.*gesta|hiv.*gesta|estrep.*grupo b|gbS|estreptococo do grupo b|amniocentese|cardiotocografia|perfil biofisico fetal|doppler.*arteria umbilical|restricao de crescimento intrauterino|rciu|polidramnio|oligodramnio|gestacao gemelar|anemia na gestacao|hiperemese gravidica)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Assistência ao Parto',
    subtema: 'Trabalho de Parto, Partograma, Distócias e Puerpério',
    patterns: [
      /\b(?:partograma|trabalho de parto|dilatacao cervical|plano de de lee|de lee|apresentacao cefalica|apresentacao pelvica|distocia|parada secundaria|periodo expulsivo|forceps|vacuo-extrator|cesariana|inducao do parto|bishop|ocitocina|misoprostol.*parto|amniotomia|rotura prematura de membranas|rpmo|roprema|trabalho de parto prematuro|tocolise|nifedipino.*tocoli|corticoterapia antenatal|puerperio|puerpera|endometrite puerperal|mastite puerperal|hemorragia pos-parto|atonia uterina|hpp)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Urgências Obstétricas',
    subtema: 'Sangramentos da 1ª e 2ª Metades da Gestação',
    patterns: [
      /\b(?:abortamento|aborto|gravidez ectopica|ectopica|doenca trofoblastica|mola hidatiforme|placenta previa|descolamento prematuro de placenta|dpp|rotura uterina|vasa previa|rotura de seio marginal|incompetencia istmocervical)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Anticoncepção e SUA',
    subtema: 'Planejamento Reprodutivo, SUA, Mioma e Endometriose',
    patterns: [
      /\b(?:anticoncepcao|contracepcao|contraceptivo|diu\b|dispositivo intrauterino|aco\b|anticoncepcional|pilula|criterios de elegibilidade|oms categoria|laqueadura|sangramento uterino anormal|sua\b|palm-coein|mioma|leiomioma|adenomiose|endometriose|dismenorreia|amenorreia|sindrome dos ovarios policisticos|sop\b|climat[eé]rio|menopausa|terapia hormonal|trh\b|prolapso genital|pop-q|incontinencia urinaria de esforco|bexiga hiperativa|infertilidade conjugal)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Oncologia Ginecológica',
    subtema: 'Câncer de Colo Uterino, Mama, Endométrio e Ovário',
    patterns: [
      /\b(?:cancer de colo|colo uterino|colpocitologia|papanicolau|nic\s*[123i]|hsil|lsil|asc-us|asc-h|colposcopia|hpv|cancer de mama|mamografia|bi-rads|birads|nodulo mamario|fibroadenoma|mastalgia|descarga papilar|cancer de endometrio|hiperplasia endometrial|cancer de ovario|ca-125|cisto ovariano|teratoma|disgerminoma|disgerminomas|tumor de celulas germinativas|ovario)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'ginecologia_obstetricia',
    tema: 'Ginecologia',
    subtema: 'Vulvovaginites, DIP, Úlceras Genitais e Violência Sexual',
    patterns: [
      /\b(?:vulvovaginite|vaginose bacteriana|gardnerella|candidiase vulvovaginal|tricomoniase|trichomonas|corrimento vaginal|cervicite|doenca inflamatoria pelvica|dip\b|ulcera genital|cancro mole|cancro duro|linfogranuloma|donovanose|herpes genital|violencia sexual|profilaxia pos-exposicao.*sexual)\b/i,
    ],
    weight: 4,
  },

  // Pediatria
  {
    grandeAreaId: 'pediatria',
    tema: 'Neonatologia',
    subtema: 'Reanimação Neonatal, Icterícia, Sepse e SDR',
    patterns: [
      /\b(?:recem-nascido|recem nascido|neonato|neonatal|apgar|reanimacao neonatal|clampeamento do cordao|ictericia neonatal|hiperbilirrubinemia|fototerapia|exossanguineotransfusao|sepse neonatal|sindrome do desconforto respiratorio|doenca da membrana hialina|taquipneia transitoria|sindrome de aspiracao meconial|enterocolite necrosante|apneia da prematuridade|teste do pezinho|triagem neonatal|teste do coracaozinho|teste da orelhinha|reflexo vermelho|sifilis congenita|toxoplasmose congenita|citomegalovirus congenit|capurro|ballard|sala de parto|pig\b|gig\b|aig\b)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Imunizações',
    subtema: 'Calendário PNI, Vacinas e Eventos Adversos',
    patterns: [
      /\b(?:vacina|vacinacao|imunizacao|imunizacoes|calendario vacinal|pni\b|bcg|pentavalente|vip\b|vop\b|rotavirus|pneumo 10|meningo c|meningo acwy|triplice viral|tetra viral|dtp\b|dtpa|febre amarela.*dose|esavi|evento adverso pos-vacinal|crie\b)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Puericultura',
    subtema: 'Aleitamento Materno, Crescimento, Desenvolvimento e Nutrição',
    patterns: [
      /\b(?:aleitamento materno|leite materno|amamentacao|desmame|introducao alimentar|puericultura|crescimento e desenvolvimento|marcos do desenvolvimento|curva da oms|escore-z|escore z|tanner|puberdade precoce|baixa estatura|desnutricao grave|kwashiorkor|marasmo|obesidade infantil|anemia ferropriva.*lactente|suplementacao de ferro|vitamina d.*lactente|lactente de \d+ meses)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Pneumopediatria',
    subtema: 'Bronquiolite, Asma Infantil, Laringite e Pneumonia Pediátrica',
    patterns: [
      /\b(?:bronquiolite|virus sincicial respiratorio|vsr|crupe|laringotraqueite|laringite estridulosa|epiglotite|coqueluche|asma.*crianca|crianca.*asma|sibilancia recorrente|pneumonia.*crianca|crianca.*pneumonia|taquipneia.*meses|tiragem subcostal|fibrose cistica)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Infectopediatria',
    subtema: 'Doenças Exantemáticas, Meningite e Infecções na Infância',
    patterns: [
      /\b(?:exantema|sarampo|rubeola|escarlatina|eritema infeccioso|exantema subito|roseola|varicela|catapora|kawasaki|doenca de kawasaki|mononucleose|caxumba|parotidite|mao-pe-boca|otite media aguda|faringoamigdalite|febre reumatica|gnpe|glomerulonefrite pos-estreptococica|purpura de henoch|itu.*crianca|itu.*lactente)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Gastroenterologia Pediátrica',
    subtema: 'Diarreia Aguda, Desidratação, APLV e Refluxo',
    patterns: [
      /\b(?:diarreia|plano a|plano b|plano c|terapia de reidratacao oral|sro\b|desidratacao|alergia a proteina do leite de vaca|aplv|intolerancia a lactose|doenca celiaca|estenose hipertrofica do piloro|invaginacao intestinal|intussuscepcao|megacolon congenito|hirschsprung|constipacao|refluxo gastroesofagico|vomito|dor abdominal)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Emergências Pediátricas',
    subtema: 'PALS, Convulsão Febril, Choque e Maus-Tratos',
    patterns: [
      /\b(?:pals\b|convulsao febril|crise febril|reanimacao pediatrica|choque.*crianca|cetoacidose.*crianca|intoxicacao.*crianca|maus-tratos|sindrome do bebe sacudido|afogamento.*crianca|aspiracao de corpo estranho|cardiopatia congenita|tetralogia de fallot|civ\b|cia\b|pca\b|coarctacao da aorta)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'pediatria',
    tema: 'Genética',
    subtema: 'Cromossomopatias e Erros Inatos do Metabolismo',
    patterns: [
      /\b(?:sindrome de down|trissomia|sindrome de turner|klinefelter|edwards|patau|erro inato|fenilcetonuria|galactosemia|fibrose cistica|autismo|tea\b|tdah)\b/i,
    ],
    weight: 2,
  },

  // Cirurgia Geral
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Trauma e Abdome Agudo',
    subtema: 'ATLS, Trauma Torácico/Abdominal, Queimaduras e Abdome Agudo',
    patterns: [
      /\b(?:atls|politraumatizado|trauma abdominal|trauma toracico|trauma cranioencefalico|tce\b|glasgow|pneumotorax hipertensivo|hemotorax|tamponamento cardiaco|toracocentese|drenagem de torax|fast\b|e-fast|lavado peritoneal|choque hemorragico|reanimacao volemica|transfusao macica|queimadura|queimado|parkland|regra dos nove|lesao de via aerea|cricotireoidostomia|abdome agudo|apendicite|alvarado|colecistite aguda|colangite|triade de charcot|pentade de reynolds|pancreatite aguda|ranson|obstrucao intestinal|volvo|isquemia mesenterica|ulcera perfurada|pneumoperitonio|diverticulite|hinchey|trauma pelvico|trauma cervical|trauma vascular|sindrome compartimental)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Hérnias e Parede Abdominal',
    subtema: 'Hérnias Inguinais, Crurais, Incisionais e Reparo Cirúrgico',
    patterns: [
      /\b(?:hernia inguinal|hernia femoral|hernia crural|hernia umbilical|hernia incisional|hernia epigastrica|nyhus|lichtenstein|shouldice|bassini|mcvay|tapp|tep\b.*hernia|triangulo de hesselbach|hernia encarcerada|hernia estrangulada|richter|littre|amyand)\b/i,
    ],
    weight: 4,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Cirurgia do Aparelho Digestivo',
    subtema: 'Esôfago, Estômago, Vias Biliares, Pâncreas e Coloproctologia',
    patterns: [
      /\b(?:colelitiase|coledocolitiase|cpre|colecistectomia|vesicula biliar|via biliar|acalasia|cancer de esofago|cancer gastrico|gastrectomia|cirurgia bariatrica|bypass gastrico|sleeve|cancer colorretal|colectomia|hemorroida|fissura anal|fistula perianal|abscesso perianal|doenca pilonidal|cancer de pancreas|duodenopancreatectomia|whipple|tumor hepatico|adenoma hepatico|hemangioma hepatico|hiperplasia nodular focal|carcinoma hepatocelular)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Perioperatório e Cicatrização',
    subtema: 'Avaliação Pré-Operatória, REMIT, Cicatrização, Anestesia e Infecção',
    patterns: [
      /\b(?:pre-operatorio|pos-operatorio|perioperatorio|risco cirurgico|asa\s*[i1-5]|antibioticoprofilaxia|infeccao de sitio cirurgico|isc\b|cicatrizacao|fase inflamatoria|fase proliferativa|queloide|cicatriz hipertrofica|remit|resposta endocrino|jejum pre-operatorio|acerto|eras\b|anestesia|anestesico local|lidocaina|bupivacaina|hipertermia maligna|dantrolene|intubacao|mallampati|deiscencia|evisceracao|fistula enterocutanea|nutricao parenteral|nutricao enteral|sutura|fio cirurgico)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Urologia',
    subtema: 'Litíase Urinária, HPB, Câncer Urológico e Escroto Agudo',
    patterns: [
      /\b(?:litiase urinaria|calculo renal|calculo ureteral|nefrolitiase|colica nefre|hiperplasia prostatica|hpb\b|psa\b|cancer de prostata|toque retal|cancer renal|cancer de bexiga|torcao testicular|escroto agudo|orquiepididimite|priapismo|trauma uretral|trauma vesical|fournier|sindrome de fournier|varicocele|hidrocele|fimose)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Ortopedia',
    subtema: 'Fraturas, Luxações e Infecções Osteoarticulares',
    patterns: [
      /\b(?:fratura exposta|gustilo|luxacao|osteomielite|artrite septica|fratura de femur|fratura de quadril|fratura supracondiliana|fratura de colles|epifisiolise|legg-calve-perthes|displasia do desenvolvimento do quadril|ortolani|barlow)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Subespecialidades Cirúrgicas',
    subtema: 'Cirurgia Vascular, Torácica, Cabeça e Pescoço e Plástica',
    patterns: [
      /\b(?:aneurisma de aorta|disseccao de aorta|oclusao arterial aguda|doenca arterial obstrutiva|daop|tvp\b|trombose venosa profunda|insuficiencia venosa|carotida|nodulo tireoidiano|tirads|bethesda|cancer de tireoide|paratireoide|enxerto cutaneo|retalho|melanoma|carcinoma basocelular|carcinoma espinocelular|mediastino|cancer de pulmao|nodulo pulmonar solitario|traqueostomia)\b/i,
    ],
    weight: 2,
  },
  {
    grandeAreaId: 'cirurgia_geral',
    tema: 'Oftalmologia / Otorrino',
    subtema: 'Oftalmologia e Otorrinolaringologia Geral',
    patterns: [
      /\b(?:glaucoma|catarata|conjuntivite|uveite|descolamento de retina|rolha de cera|cerume|otoscopia|zumbido|vertigem|vppb|meniere|epistaxe|sinusite|rinossinusite|amigdalite|abscesso periamigdaliano|disfonia|laringe)\b/i,
    ],
    weight: 3,
  },

  // Clínica Médica
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Cardiologia',
    subtema: 'SCA, IC, HAS, Arritmias e Valvopatias',
    patterns: [
      /\b(?:infarto|iam\b|iamcsst|iamssst|sindrome coronariana|angina|supra de st|supradesnivelamento|troponina|cateterismo|trombolise|insuficiencia cardiaca|fracao de ejecao|icfer|icfep|nyha|bnp\b|hipertensao arterial|crise hipertensiva|emergencia hipertensiva|fibrilacao atrial|cha2ds2|flutter atrial|taquicardia supraventricular|taquicardia ventricular|bradicardia|bloqueio atrioventricular|bav\b|pcr\b|acls|parada cardiorrespiratoria|endocardite infecciosa|criterios de duke|pericardite|miocardite|estenose aortica|insuficiencia mitral|sopro sistolico|sopro diastolico|dislipidemia|estatina)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Endocrinologia',
    subtema: 'Diabetes, Tireoide, Adrenal, Hipófise e Metabolismo Ósseo',
    patterns: [
      /\b(?:diabetes mellitus|dm1|dm2|cetoacidose diabetica|estado hiperosmolar|hipoglicemia|hemoglobina glicada|hba1c|insulina|metformina|sglt2|glp-1|hipotireoidismo|hipertireoidismo|graves|hashimoto|tireoidite|tempestade tireoidiana|coma mixedematoso|tsh\b|t4 livre|cushing|addison|insuficiencia adrenal|feocromocitoma|hiperaldosteronismo|hiperparatireoidismo|hipoparatireoidismo|hipercalcemia|osteoporose|densitometria|t-score|bisfosfonato|alendronato|frax|acromegalia|prolactinoma|hiperprolactinemia|diabetes insipidus|siadh)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Infectologia',
    subtema: 'Sepse, HIV/AIDS, Meningites, Hepatites e Antimicrobianos',
    patterns: [
      /\b(?:hiv|aids|tarv|antirretroviral|cd4|pneumocistose|neurotoxoplasmose|criptococose|citomegalovirus|sepse|choque septico|qsofa|sofa\b|meningite|liquor|puncao lombar|hepatite b|hepatite c|hepatite a|hbsag|anti-hbs|anti-hbc|anti-hcv|sifilis primaria|sifilis secundaria|sifilis terciaria|neurossifilis|vdrl|fta-abs|penicilina benzatina|endocardite|celulite|erisipela|fasceite necrosante|covid-19|influenza|tetano|botulismo|infeccao urinaria|pielonefrite|cistite|antimicrobiano|antibiotico)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Pneumologia',
    subtema: 'Pneumonia, Asma, DPOC, TEP e Derrame Pleural',
    patterns: [
      /\b(?:pneumonia adquirida|pac\b|curb-65|dpoc|enfisema|bronquite cronica|espirometria|vef1|cvf|asma\b|gina\b|derrame pleural|criterios de light|toracocentese|empiema|tromboembolismo pulmonar|tep\b|wells|d-dimero|angiotomografia|sara\b|sdra\b|sindrome do desconforto respiratorio agudo|ventilacao mecanica|peep|doenca pulmonar intersticial|fibrose pulmonar|sarcoidose|bronquiectasia|hipertensao pulmonar)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Nefrologia',
    subtema: 'IRA, DRC, Glomerulopatias e Distúrbios Eletrolíticos/Ácido-Base',
    patterns: [
      /\b(?:injuria renal|lesao renal aguda|insuficiencia renal|kdigo|doenca renal cronica|drc\b|tfg|taxa de filtracao glomerular|hemodialise|dialise|glomerulonefrite|sindrome nefrotica|sindrome nefritica|nefropatia por iga|nefropatia diabetica|crioglobulinemia|hiponatremia|hipernatremia|hipocalemia|hipercalemia|acidose metabolica|alcalose metabolica|acidose respiratoria|alcalose respiratoria|anion gap|gasometria|rabdomiolise|nefrite intersticial|sindrome hemolitico-uremica)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Gastroenterologia',
    subtema: 'Hepatologia, Hemorragia Digestiva, Úlcera e DII',
    patterns: [
      /\b(?:cirrose|ascite|gasa\b|peritonite bacteriana espontanea|pbe\b|encefalopatia hepatica|child-pugh|meld\b|varizes esofagicas|hemorragia digestiva|hematemese|melena|forrest|ulcera peptica|helicobacter pylori|drge|esofago de barrett|doenca inflamatoria intestinal|doenca de crohn|retocolite ulcerativa|diarreia cronica|sindrome do intestino irritavel|doenca celiaca|esteatose hepatica|esteato-hepatite|lesao hepatica|ictericia.*colestatica|colangite biliar)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Hematologia',
    subtema: 'Anemias, Leucemias, Linfomas, Mieloma e Hemostasia',
    patterns: [
      /\b(?:anemia ferropriva|anemia megaloblastica|vitamina b12|acido folico|anemia falciforme|drepanocitose|crise vaso-oclusiva|talassemia|anemia hemolitica|esferocitose|g6pd|anemia aplastica|anemia de doenca cronica|leucemia|lma\b|lla\b|lmc\b|llc\b|linfoma|hodgkin|mieloma multiplo|plasmocito|proteina m|plaquetopenia|pti\b|ptt\b|civd|coagulacao intravascular|hemofilia|von willebrand|trombofilia|transfusao|reacao transfusional|neutropenia febril)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Neurologia',
    subtema: 'AVC, Cefaleias, Epilepsia, Demências e Neuropatias',
    patterns: [
      /\b(?:avc\b|acidente vascular cerebral|ave\b|ait\b|alteplase|trombectomia|hemorragia subaracnoidea|hemorragia intraparenquimatosa|cefaleia|enxaqueca|migranea|cefaleia em salvas|epilepsia|crise convulsiva|estado de mal epileptico|parkinson|alzheimer|demencia|delirium|guillain-barre|miastenia gravis|esclerose multipla|ela\b|esclerose lateral|neuropatia periferica|paralisia facial|bell|vertigem central|ataxia|sindrome medular|hipertensao intracraniana)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Psiquiatria',
    subtema: 'Depressão, Bipolaridade, Esquizofrenia, Ansiedade e Dependência',
    patterns: [
      /\b(?:depressao|transtorno depressivo|suicidio|ideacao suicida|transtorno bipolar|mania|litio|esquizofrenia|psicose|alucinacao|delirio|antipsicotico|haloperidol|sindrome neuroleptica maligna|transtorno de ansiedade|panico|toc\b|estresse pos-traumatico|alcoolismo|abstinencia alcoolica|delirium tremens|wernicke|dependencia quimica|benzodiazepinico|isrs|sindrome serotoninergica|anorexia|bulimia)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Reumatologia',
    subtema: 'LES, Artrite Reumatoide, Gota, Espondiloartrites e Vasculites',
    patterns: [
      /\b(?:lupus|les\b|anti-dsdna|anti-sm|fan\b|artrite reumatoide|fator reumatoide|anti-ccp|gota|acido urico|hiperuricemia|cristais de urato|pseudogota|osteoartrite|artrose|espondilite anquilosante|hla-b27|artrite psoriasica|artrite reativa|fibromialgia|vasculite|anca|granulomatose com poliangiite|poliarterite nodosa|arterite temporal|celulas gigantes|polimialgia|behcet|sindrome antifosfolipide|saf\b|esclerose sistemica|esclerodermia|dermatomiosite|sjogren)\b/i,
    ],
    weight: 3,
  },
  {
    grandeAreaId: 'clinica_medica',
    tema: 'Dermatologia',
    subtema: 'Dermatoses Infecciosas, Inflamatórias e Farmacodermias',
    patterns: [
      /\b(?:psoriase|dermatite atopica|dermatite de contato|urticaria|angioedema|penfigo|penfigoide|stevens-johnson|necrolise epidermica|dress\b|farmacodermia|escabiose|pediculose|tinha|dermatofitose|pitiriase|herpes zoster|impetigo|acne|rosacea)\b/i,
    ],
    weight: 2,
  },
];

function defaultGrandeAreaByOrder(ano: number, numero: number): GrandeAreaId {
  // Official UEPA block order across 2020 and 2022–2026:
  // 1-20: Medicina Preventiva e Social
  // 21-40: Clínica Médica
  // 41-60: Cirurgia Geral
  // 61-80: Ginecologia e Obstetrícia
  // 81-100: Pediatria
  // Note: In 2021, Q45-Q60 had some GO/Pediatria mixed in; keyword scoring overrides accurately!
  if (numero <= 20) return 'medicina_preventiva';
  if (numero <= 40) return 'clinica_medica';
  if (numero <= 60) return 'cirurgia_geral';
  if (numero <= 80) return 'ginecologia_obstetricia';
  return 'pediatria';
}

function defaultTopicForArea(area: GrandeAreaId): { tema: string; subtema: string } {
  switch (area) {
    case 'medicina_preventiva':
      return { tema: 'Atenção Primária e SUS', subtema: 'Saúde Coletiva e Políticas de Saúde' };
    case 'clinica_medica':
      return { tema: 'Infectologia', subtema: 'Clínica Médica Geral' };
    case 'cirurgia_geral':
      return { tema: 'Trauma e Abdome Agudo', subtema: 'Cirurgia Geral e Emergências' };
    case 'ginecologia_obstetricia':
      return { tema: 'Pré-Natal e Alto Risco', subtema: 'Ginecologia e Obstetrícia Geral' };
    case 'pediatria':
      return { tema: 'Puericultura', subtema: 'Pediatria Geral' };
  }
}

function classifyQuestion(
  ano: number,
  numero: number,
  enunciado: string,
  alternativas: Record<AlternativeLetter, string>
): TopicClassification {
  const expectedArea = defaultGrandeAreaByOrder(ano, numero);
  const fullNorm = normalizeText(`${enunciado} ${Object.values(alternativas).join(' ')}`);

  // Score every topic rule
  let bestRule: TopicRule | null = null;
  let bestScore = 0;

  for (const rule of TOPIC_RULES) {
    let hits = 0;
    for (const pat of rule.patterns) {
      const globalPat = new RegExp(pat.source, 'gi');
      const matches = fullNorm.match(globalPat);
      if (matches) {
        hits += Math.min(matches.length, 4);
      }
    }
    if (hits === 0) continue;

    let score = hits * (rule.weight ?? 2);

    // Give a strong prior bonus to rules inside the exam's official block Grande Área
    // EXCEPT for UEPA 2021 Q45-Q60 where blocks were mixed across Cirurgia/GO/Pediatria
    const is2021MixedZone = ano === 2021 && numero >= 45 && numero <= 60;
    if (rule.grandeAreaId === expectedArea) {
      score += is2021MixedZone ? 1 : 6;
    }

    // Special UEPA rule: Doenças Endêmicas can be in Preventiva (Q1-20) or Clínica (Q21-40)
    if (rule.tema === 'Doenças Endêmicas' && (expectedArea === 'clinica_medica' || expectedArea === 'medicina_preventiva')) {
      score += 4;
    }

    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  if (bestRule) {
    // Keep Grande Área aligned with official UEPA section except when 2021 mixed zone or overwhelming clinical evidence (score >= 12)
    const is2021MixedZone = ano === 2021 && numero >= 45 && numero <= 60;
    let finalArea: GrandeAreaId = expectedArea;

    if (is2021MixedZone) {
      finalArea = bestRule.grandeAreaId;
    } else if (bestRule.tema === 'Doenças Endêmicas' && expectedArea === 'clinica_medica') {
      finalArea = 'clinica_medica';
    } else if (bestRule.grandeAreaId === expectedArea) {
      finalArea = expectedArea;
    } else if (bestScore >= 12) {
      // Strong clinical override only if unmistakable (e.g., GO question inside another block)
      finalArea = bestRule.grandeAreaId;
    } else {
      // Find best matching rule strictly within expectedArea
      let areaRule: TopicRule | null = null;
      let areaScore = 0;
      for (const r of TOPIC_RULES) {
        if (r.grandeAreaId !== expectedArea) continue;
        let hits = 0;
        for (const pat of r.patterns) {
          const matches = fullNorm.match(new RegExp(pat.source, 'gi'));
          if (matches) hits += Math.min(matches.length, 4);
        }
        const s = hits * (r.weight ?? 2);
        if (s > areaScore) {
          areaScore = s;
          areaRule = r;
        }
      }
      if (areaRule) {
        return {
          grandeAreaId: expectedArea,
          grandeArea: GRANDE_AREA_NAMES[expectedArea],
          tema: areaRule.tema,
          subtema: areaRule.subtema,
        };
      }
      const fallbackSameArea = defaultTopicForArea(expectedArea);
      return {
        grandeAreaId: expectedArea,
        grandeArea: GRANDE_AREA_NAMES[expectedArea],
        tema: fallbackSameArea.tema,
        subtema: fallbackSameArea.subtema,
      };
    }

    return {
      grandeAreaId: finalArea,
      grandeArea: GRANDE_AREA_NAMES[finalArea],
      tema: bestRule.tema,
      subtema: bestRule.subtema,
    };
  }

  const fallback = defaultTopicForArea(expectedArea);
  return {
    grandeAreaId: expectedArea,
    grandeArea: GRANDE_AREA_NAMES[expectedArea],
    tema: fallback.tema,
    subtema: fallback.subtema,
  };
}

async function run() {
  const allQuestions: MedicalQuestion[] = [];
  const anomalies: string[] = [];

  for (const exam of UEPA_EXAMS) {
    const gabarito = await extractGabarito(exam.gabaritoFile);
    const { lines, altBulletFonts } = await extractOrderedLinesFromProva(exam.provaFile);
    const { questions } = parseProvaLines(lines, altBulletFonts);

    const anuladasCount = [...gabarito.values()].filter((g) => g.anulada).length;
    console.log(
      `\n=== UEPA ${exam.ano} === Gabarito: ${gabarito.size}/100 (anuladas: ${anuladasCount}) | Questões extraídas: ${questions.size}/100 | Bullet fonts: [${[...altBulletFonts].join(', ')}]`
    );

    const missingQs: number[] = [];
    const badAlts: string[] = [];
    const shortStems: string[] = [];

    for (let num = 1; num <= 100; num++) {
      const gab = gabarito.get(num);
      const rawQ = questions.get(num);

      if (!gab) {
        anomalies.push(`UEPA ${exam.ano} Q${num}: SEM GABARITO`);
        continue;
      }
      if (!rawQ) {
        missingQs.push(num);
        anomalies.push(`UEPA ${exam.ano} Q${num}: QUESTÃO NÃO ENCONTRADA`);
        continue;
      }

      if (rawQ.enunciado.length < 20) {
        shortStems.push(`Q${num}(len=${rawQ.enunciado.length})`);
      }

      const emptyLetters = VALID_LETTERS.filter((l) => !rawQ.alternativas[l] || rawQ.alternativas[l].trim().length === 0);
      if (emptyLetters.length > 0) {
        badAlts.push(`Q${num}(faltando: ${emptyLetters.join(',')})`);
        anomalies.push(`UEPA ${exam.ano} Q${num}: alternativas vazias [${emptyLetters.join(',')}]`);
      }

      const cls = classifyQuestion(exam.ano, num, rawQ.enunciado, rawQ.alternativas);
      const shortYear = String(exam.ano).slice(-2);

      const alternativas: QuestionAlternative[] = VALID_LETTERS.map((letter) => ({
        letter,
        text: rawQ.alternativas[letter].trim(),
        explanation: '',
        communityPct: 0,
      }));

      const item: MedicalQuestion = {
        id: `uepa-${exam.ano}-q${String(num).padStart(3, '0')}`,
        code: `Q-UEPA${shortYear}-${String(num).padStart(3, '0')}`,
        grandeAreaId: cls.grandeAreaId,
        grandeArea: cls.grandeArea,
        tema: cls.tema,
        subtema: cls.subtema,
        banca: 'UEPA',
        instituicao: 'UEPA',
        estado: 'PA',
        regiao: 'Norte',
        ano: exam.ano,
        tipoProva: 'Acesso Direto',
        anulada: gab.anulada,
        desatualizada: false,
        enunciado: rawQ.enunciado.trim(),
        alternativas,
        gabaritoOficial: gab.letter,
        totalRespostasComunidade: 0,
        taxaAcertoGlobal: 0,
        comentarioGeral: '',
        perolaClinica: '',
        referencias: [
          `Prova Oficial UEPA ${exam.ano} — Processo Seletivo Unificado de Residência Médica (Acesso Direto), Questão ${num} (Pág. ${rawQ.page}).`,
          `Gabarito Oficial Definitivo UEPA ${exam.ano}${gab.anulada ? ' — Questão ANULADA pela banca' : ` — Gabarito: ${gab.letter}`}.`,
        ],
        sourceBatch: `UEPA ${exam.ano} (Acesso Direto)`,
        numeroOriginal: num,
        needsAiCommentary: true,
        sourcePdfUrl: `${exam.provaPublicUrl}#page=${rawQ.page}`,
        sourcePdfPage: rawQ.page,
        hasPdfFigure: rawQ.hasImageReference,
      };

      allQuestions.push(item);
    }

    if (missingQs.length > 0) console.log('  MISSING Qs:', missingQs.join(', '));
    if (shortStems.length > 0) console.log('  SHORT STEMS:', shortStems.join(', '));
    if (badAlts.length > 0) console.log('  BAD ALTS:', badAlts.join(', '));
  }

  // Sort newest year first, then Q1..Q100
  allQuestions.sort((a, b) => {
    if (b.ano !== a.ano) return b.ano - a.ano;
    return (a.numeroOriginal ?? 0) - (b.numeroOriginal ?? 0);
  });

  // Summary by Grande Área and Top Temas
  const byArea = new Map<string, number>();
  const byTema = new Map<string, number>();
  for (const q of allQuestions) {
    byArea.set(q.grandeArea, (byArea.get(q.grandeArea) || 0) + 1);
    byTema.set(q.tema, (byTema.get(q.tema) || 0) + 1);
  }

  console.log('\n========================================');
  console.log(`TOTAL EXTRAÍDO: ${allQuestions.length} / 700`);
  console.log(`ANOMALIAS: ${anomalies.length}`);
  console.log('Por Grande Área:', Object.fromEntries(byArea));
  console.log(
    'Top 15 Temas:',
    [...byTema.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)
  );

  const outDir = path.resolve('public/data');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'uepa_2020_2026.json');
  fs.writeFileSync(outPath, JSON.stringify(allQuestions, null, 2), 'utf8');
  console.log(`Salvo em: ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
