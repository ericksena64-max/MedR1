import type { SrsRating } from '../types/medical';

export interface FlashcardShortcutInput {
  key: string;
  code?: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  altKey?: boolean;
  flipped: boolean;
  hasActiveCard: boolean;
  isReviewMode: boolean;
  isInputFocused: boolean;
  isModalOpen: boolean;
  canUndo: boolean;
}

export type FlashcardShortcutAction =
  | { type: 'noop' }
  | { type: 'reveal' }
  | { type: 'rate'; rating: SrsRating }
  | { type: 'undo' };

export function isEditableElement(target: EventTarget | null): boolean {
  if (!target || typeof target !== 'object') return false;
  const el = target as {
    tagName?: string;
    isContentEditable?: boolean;
  };
  const tag = (el.tagName || '').toUpperCase();
  return (
    tag === 'INPUT' ||
    tag === 'TEXTAREA' ||
    tag === 'SELECT' ||
    Boolean(el.isContentEditable)
  );
}

export function resolveFlashcardShortcut(
  input: FlashcardShortcutInput
): FlashcardShortcutAction {
  if (
    !input.isReviewMode ||
    !input.hasActiveCard ||
    input.isInputFocused ||
    input.isModalOpen ||
    input.ctrlKey ||
    input.metaKey ||
    input.altKey
  ) {
    return { type: 'noop' };
  }

  if ((input.key === 'z' || input.key === 'Z') && input.canUndo) {
    return { type: 'undo' };
  }

  if (!input.flipped) {
    if (input.code === 'Space' || input.key === ' ' || input.key === 'Enter') {
      return { type: 'reveal' };
    }
    return { type: 'noop' };
  }

  if (input.key === '1') return { type: 'rate', rating: 1 };
  if (input.key === '2') return { type: 'rate', rating: 2 };
  if (input.key === '3') return { type: 'rate', rating: 3 };
  if (input.key === '4') return { type: 'rate', rating: 4 };

  return { type: 'noop' };
}

export interface AdaptiveFlashcardTypography {
  tier: 'short' | 'medium' | 'long' | 'dense';
  frontClass: string;
  backClass: string;
  summaryClass: string;
}

/**
 * Computes safe, legible Tailwind typography classes based on text length
 * so front + back + 1-4 rating buttons fit cleanly on screen without scrolling.
 */
export function getAdaptiveFlashcardTypography(
  frontText: string,
  backText: string,
  flipped: boolean
): AdaptiveFlashcardTypography {
  const frontLen = frontText.trim().length;
  const backLen = flipped ? backText.trim().length : 0;
  const effectiveLen = flipped ? frontLen + backLen : frontLen;

  if (effectiveLen <= 160) {
    return {
      tier: 'short',
      frontClass: 'text-lg sm:text-xl leading-relaxed',
      backClass: 'text-base sm:text-[17px] leading-relaxed',
      summaryClass: 'text-sm leading-relaxed',
    };
  }

  if (effectiveLen <= 340) {
    return {
      tier: 'medium',
      frontClass: 'text-base sm:text-[17px] leading-relaxed',
      backClass: 'text-sm sm:text-[15px] leading-relaxed',
      summaryClass: 'text-xs sm:text-sm leading-snug',
    };
  }

  if (effectiveLen <= 620) {
    return {
      tier: 'long',
      frontClass: 'text-sm sm:text-[15px] leading-snug',
      backClass: 'text-[13.5px] sm:text-sm leading-snug',
      summaryClass: 'text-xs leading-snug',
    };
  }

  return {
    tier: 'dense',
    frontClass: 'text-[13px] sm:text-sm leading-snug',
    backClass: 'text-[13px] sm:text-[13.5px] leading-snug',
    summaryClass: 'text-xs leading-snug',
  };
}
