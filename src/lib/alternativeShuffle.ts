import type { AlternativeLetter, QuestionAlternative } from '../types/medical';

export interface DisplayedAlternative {
  alternative: QuestionAlternative;
  displayLetter: AlternativeLetter;
  officialLetter: AlternativeLetter;
}

const DISPLAY_LETTERS: readonly AlternativeLetter[] = ['A', 'B', 'C', 'D', 'E'];

/** FNV-1a 32-bit hash for deterministic per-question/session seeding. */
export function hashSeed(seed: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns alternatives for visual display.
 * When `enabled` is false (default), preserves the exact official bank order.
 * When `enabled` is true, deterministically shuffles a shallow copy using `seed`
 * while keeping each option's `officialLetter` intact for grading and explanations.
 */
export function getDisplayedAlternatives(
  alternativas: QuestionAlternative[],
  options: { enabled: boolean; seed: string }
): DisplayedAlternative[] {
  if (!options.enabled || alternativas.length <= 1) {
    return alternativas.map((alt) => ({
      alternative: alt,
      displayLetter: alt.letter,
      officialLetter: alt.letter,
    }));
  }

  const copy = [...alternativas];
  const rng = mulberry32(hashSeed(options.seed));

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }

  return copy.map((alt, idx) => ({
    alternative: alt,
    displayLetter: DISPLAY_LETTERS[idx] ?? alt.letter,
    officialLetter: alt.letter,
  }));
}
