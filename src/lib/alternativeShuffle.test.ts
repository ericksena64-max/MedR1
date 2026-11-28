import { describe, expect, it } from 'vitest';
import type { AlternativeLetter, QuestionAlternative } from '../types/medical';
import { getDisplayedAlternatives } from './alternativeShuffle';

const SAMPLE_ALTERNATIVES: QuestionAlternative[] = [
  { letter: 'A', text: 'Primeira opção oficial', explanation: 'Exp A', communityPct: 10 },
  { letter: 'B', text: 'Segunda opção oficial', explanation: 'Exp B', communityPct: 62 },
  { letter: 'C', text: 'Terceira opção oficial', explanation: 'Exp C', communityPct: 12 },
  { letter: 'D', text: 'Quarta opção oficial', explanation: 'Exp D', communityPct: 8 },
  { letter: 'E', text: 'Quinta opção oficial', explanation: 'Exp E', communityPct: 8 },
];

describe('alternativeShuffle — embaralhamento apenas visual', () => {
  it('preserva a ordem oficial exata (A..E) quando desligado (padrão)', () => {
    const displayed = getDisplayedAlternatives(SAMPLE_ALTERNATIVES, {
      enabled: false,
      seed: 'session-1::q-uepa-2026-001',
    });

    expect(displayed.map((d) => d.displayLetter)).toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(displayed.map((d) => d.officialLetter)).toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(displayed.map((d) => d.alternative.text)).toEqual(
      SAMPLE_ALTERNATIVES.map((a) => a.text)
    );
  });

  it('é determinístico para o mesmo seed, não muta o original e preserva officialLetter', () => {
    const snapshot = SAMPLE_ALTERNATIVES.map((a) => ({ ...a }));
    const firstRun = getDisplayedAlternatives(SAMPLE_ALTERNATIVES, {
      enabled: true,
      seed: 'sess-alpha::q-uepa-2026-001',
    });
    const secondRun = getDisplayedAlternatives(SAMPLE_ALTERNATIVES, {
      enabled: true,
      seed: 'sess-alpha::q-uepa-2026-001',
    });

    expect(SAMPLE_ALTERNATIVES).toEqual(snapshot);
    expect(firstRun).toEqual(secondRun);

    // Visual badges remain ordered A..E while officialLetter tracks the real key
    expect(firstRun.map((d) => d.displayLetter)).toEqual(['A', 'B', 'C', 'D', 'E']);
    const officialSet = new Set<AlternativeLetter>(firstRun.map((d) => d.officialLetter));
    expect(officialSet).toEqual(new Set(['A', 'B', 'C', 'D', 'E']));

    for (const item of firstRun) {
      const original = SAMPLE_ALTERNATIVES.find((a) => a.letter === item.officialLetter);
      expect(item.alternative.text).toBe(original?.text);
    }
  });

  it('gera permutações distintas para seeds diferentes', () => {
    const orders = new Set<string>();
    for (let i = 0; i < 8; i += 1) {
      const res = getDisplayedAlternatives(SAMPLE_ALTERNATIVES, {
        enabled: true,
        seed: `sess-${i}::q-uepa-2026-001`,
      });
      orders.add(res.map((d) => d.officialLetter).join(','));
    }
    expect(orders.size).toBeGreaterThan(1);
  });
});
