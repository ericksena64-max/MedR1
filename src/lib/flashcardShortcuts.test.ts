import { describe, expect, it } from 'vitest';
import {
  getAdaptiveFlashcardTypography,
  isEditableElement,
  resolveFlashcardShortcut,
  type FlashcardShortcutInput,
} from './flashcardShortcuts';

const BASE: FlashcardShortcutInput = {
  key: '',
  code: '',
  ctrlKey: false,
  metaKey: false,
  altKey: false,
  flipped: false,
  hasActiveCard: true,
  isReviewMode: true,
  isInputFocused: false,
  isModalOpen: false,
  canUndo: false,
};

describe('flashcardShortcuts — fluxo 100% teclado estilo Anki', () => {
  it('revela o verso com Espaço ou Enter quando ainda não foi revelado', () => {
    expect(resolveFlashcardShortcut({ ...BASE, key: ' ', code: 'Space' })).toEqual({
      type: 'reveal',
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: 'Enter', code: 'Enter' })).toEqual({
      type: 'reveal',
    });
  });

  it('ignora teclas 1-4 antes de revelar a resposta', () => {
    expect(resolveFlashcardShortcut({ ...BASE, key: '1', flipped: false })).toEqual({
      type: 'noop',
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: '3', flipped: false })).toEqual({
      type: 'noop',
    });
  });

  it('avalia o card diretamente com teclas 1, 2, 3 e 4 após revelar o verso', () => {
    expect(resolveFlashcardShortcut({ ...BASE, key: '1', flipped: true })).toEqual({
      type: 'rate',
      rating: 1,
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: '2', flipped: true })).toEqual({
      type: 'rate',
      rating: 2,
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: '3', flipped: true })).toEqual({
      type: 'rate',
      rating: 3,
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: '4', flipped: true })).toEqual({
      type: 'rate',
      rating: 4,
    });
  });

  it('ignora atalhos quando o foco está em input/textarea/select ou modal/lightbox aberto', () => {
    expect(
      resolveFlashcardShortcut({ ...BASE, key: ' ', code: 'Space', isInputFocused: true })
    ).toEqual({ type: 'noop' });
    expect(
      resolveFlashcardShortcut({ ...BASE, key: '3', flipped: true, isModalOpen: true })
    ).toEqual({ type: 'noop' });
    expect(
      resolveFlashcardShortcut({ ...BASE, key: 'Enter', metaKey: true })
    ).toEqual({ type: 'noop' });

    expect(isEditableElement({ tagName: 'INPUT' } as unknown as EventTarget)).toBe(true);
    expect(isEditableElement({ tagName: 'TEXTAREA' } as unknown as EventTarget)).toBe(true);
    expect(isEditableElement({ tagName: 'SELECT' } as unknown as EventTarget)).toBe(true);
    expect(isEditableElement({ tagName: 'DIV', isContentEditable: true } as unknown as EventTarget)).toBe(true);
    expect(isEditableElement({ tagName: 'BUTTON' } as unknown as EventTarget)).toBe(false);
  });

  it('suporta desfazer com Z quando canUndo é true', () => {
    expect(resolveFlashcardShortcut({ ...BASE, key: 'z', canUndo: true })).toEqual({
      type: 'undo',
    });
    expect(resolveFlashcardShortcut({ ...BASE, key: 'Z', canUndo: false })).toEqual({
      type: 'noop',
    });
  });

  it('ajusta automaticamente o tier de fonte conforme o comprimento do texto', () => {
    expect(getAdaptiveFlashcardTypography('Pergunta curta?', 'Resposta curta.', false).tier).toBe(
      'short'
    );
    expect(
      getAdaptiveFlashcardTypography('a'.repeat(180), 'b'.repeat(120), true).tier
    ).toBe('medium');
    expect(
      getAdaptiveFlashcardTypography('a'.repeat(260), 'b'.repeat(260), true).tier
    ).toBe('long');
    expect(
      getAdaptiveFlashcardTypography('a'.repeat(400), 'b'.repeat(350), true).tier
    ).toBe('dense');
  });
});
