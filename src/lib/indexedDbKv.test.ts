import { afterEach, describe, expect, it } from 'vitest';
import {
  clearMemoryFallbackForTests,
  idbDelete,
  idbGet,
  idbSet,
  loadOrMigrateHeavyState,
} from './indexedDbKv';

describe('P1 Persistência — indexedDbKv (fallback seguro e migração de localStorage)', () => {
  afterEach(() => {
    clearMemoryFallbackForTests();
  });

  it('armazena, lê e remove objetos pesados de forma assíncrona', async () => {
    await idbSet('medr1_test_answers', { q1: { isCorrect: true } });
    const loaded = await idbGet<Record<string, { isCorrect: boolean }>>('medr1_test_answers');
    expect(loaded).toEqual({ q1: { isCorrect: true } });

    await idbDelete('medr1_test_answers');
    expect(await idbGet('medr1_test_answers')).toBeNull();
  });

  it('retorna fallback quando a chave não existe e lê do store após escrita', async () => {
    const emptyRes = await loadOrMigrateHeavyState('medr1_missing_key', { count: 0 });
    expect(emptyRes).toEqual({ value: { count: 0 }, source: 'fallback' });

    await idbSet('medr1_missing_key', { count: 42 });
    const hydrated = await loadOrMigrateHeavyState('medr1_missing_key', { count: 0 });
    expect(hydrated).toEqual({ value: { count: 42 }, source: 'idb' });
  });
});
