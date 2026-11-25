import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  createSingleSubmissionGuard,
  diffNewlyUnlockedAchievements,
  getLocalDateKey,
  matchesStudentStatusFilter,
  safeReadStorage,
  writeStorageSafely,
} from './useMedR1Store';
import type { GamificationAchievement } from '../lib/gamificationChallenges';
import type { UserAnswerRecord } from '../types/medical';

function createMemoryStorage() {
  const store = new Map<string, string>();
  return {
    getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => {
      store.clear();
    },
  };
}

describe('useMedR1Store — integridade de dados, filtros, simulado e fuso horário', () => {
  let memoryStorage: ReturnType<typeof createMemoryStorage>;

  beforeEach(() => {
    memoryStorage = createMemoryStorage();
    vi.stubGlobal('window', { localStorage: memoryStorage });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  describe('safeReadStorage e cota do localStorage', () => {
    it('retorna fallback quando o JSON está corrompido', () => {
      memoryStorage.setItem('medr1_flashcards_v1', '{json-quebrado');
      const result = safeReadStorage('medr1_flashcards_v1', [{ id: 'fallback' }]);
      expect(result).toEqual([{ id: 'fallback' }]);
    });

    it('rejeita null ou objeto quando o fallback espera um array (evita crash em .map)', () => {
      memoryStorage.setItem('medr1_flashcards_v1', 'null');
      expect(safeReadStorage('medr1_flashcards_v1', ['ok'])).toEqual(['ok']);

      memoryStorage.setItem('medr1_flashcards_v1', '{"corrupted":true}');
      expect(safeReadStorage('medr1_flashcards_v1', ['ok'])).toEqual(['ok']);
    });

    it('rejeita array ou null quando o fallback espera objeto plano', () => {
      memoryStorage.setItem('medr1_answers_v1', '[]');
      expect(safeReadStorage('medr1_answers_v1', { a: 1 })).toEqual({ a: 1 });

      memoryStorage.setItem('medr1_answers_v1', 'null');
      expect(safeReadStorage('medr1_answers_v1', { a: 1 })).toEqual({ a: 1 });
    });

    it('retorna os dados válidos quando o tipo corresponde ao fallback', () => {
      memoryStorage.setItem('medr1_bookmarks_v1', JSON.stringify(['q1', 'q2']));
      expect(safeReadStorage<string[]>('medr1_bookmarks_v1', [])).toEqual(['q1', 'q2']);
    });

    it('captura QuotaExceededError em writeStorageSafely e retorna false sem lançar exceção', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      vi.stubGlobal('window', {
        localStorage: {
          ...memoryStorage,
          setItem: () => {
            const err = new Error('QuotaExceededError');
            err.name = 'QuotaExceededError';
            throw err;
          },
        },
      });

      const ok = writeStorageSafely('medr1_answers_v1', { q1: { isCorrect: true } });
      expect(ok).toBe(false);
      expect(warnSpy).toHaveBeenCalledOnce();
    });
  });

  describe('matchesStudentStatusFilter — Favoritadas vs Caderno de Erros', () => {
    const wrongAnswer: UserAnswerRecord = {
      questionId: 'q-wrong',
      selectedLetter: 'B',
      isCorrect: false,
      answeredAt: '2026-11-23T15:00:00.000Z',
      mode: 'estudo',
      timeSpentSec: 40,
    };

    const correctAnswer: UserAnswerRecord = {
      questionId: 'q-right',
      selectedLetter: 'A',
      isCorrect: true,
      answeredAt: '2026-11-23T15:05:00.000Z',
      mode: 'estudo',
      timeSpentSec: 30,
    };

    it('filtro "favoritadas" NÃO inclui questões erradas que não foram favoritadas', () => {
      expect(matchesStudentStatusFilter('favoritadas', false, wrongAnswer)).toBe(false);
      expect(matchesStudentStatusFilter('favoritadas', true, wrongAnswer)).toBe(true);
      expect(matchesStudentStatusFilter('favoritadas', true, correctAnswer)).toBe(true);
      expect(matchesStudentStatusFilter('favoritadas', true, undefined)).toBe(true);
    });

    it('filtro "caderno_erros" inclui questões erradas OU favoritadas', () => {
      expect(matchesStudentStatusFilter('caderno_erros', false, wrongAnswer)).toBe(true);
      expect(matchesStudentStatusFilter('caderno_erros', true, correctAnswer)).toBe(true);
      expect(matchesStudentStatusFilter('caderno_erros', false, correctAnswer)).toBe(false);
      expect(matchesStudentStatusFilter('caderno_erros', false, undefined)).toBe(false);
    });
  });

  describe('createSingleSubmissionGuard — proteção contra dupla submissão no Simulado', () => {
    it('permite apenas uma submissão até ser resetado', () => {
      const guard = createSingleSubmissionGuard();
      let recordedCount = 0;

      const finish = () => {
        if (!guard.tryAcquire()) return;
        recordedCount += 1;
      };

      finish();
      finish();
      finish();
      expect(recordedCount).toBe(1);

      guard.reset();
      finish();
      expect(recordedCount).toBe(2);
    });
  });

  describe('getLocalDateKey — fuso horário local (Brasília UTC-3 após 21h)', () => {
    it('mantém a data local às 21:30 sem virar o dia antecipadamente pelo UTC', () => {
      const lateEveningLocal = new Date(2026, 10, 23, 21, 30, 0); // 23/11/2026 21:30 local
      expect(getLocalDateKey(lateEveningLocal)).toBe('2026-11-23');
    });

    it('mantém a data local às 23:59 e só vira às 00:00 local', () => {
      expect(getLocalDateKey(new Date(2026, 10, 23, 23, 59, 59))).toBe('2026-11-23');
      expect(getLocalDateKey(new Date(2026, 10, 24, 0, 0, 0))).toBe('2026-11-24');
    });
  });

  describe('diffNewlyUnlockedAchievements — deduplicação de toasts de conquista', () => {
    const sampleBadges: GamificationAchievement[] = [
      {
        id: 'primeiro_plantao',
        title: 'Primeiro Plantão',
        description: 'Primeira questão',
        pillar: 'conquista',
        iconName: 'stethoscope',
        unlocked: true,
        progressLabel: '1/1',
        progressPct: 100,
      },
      {
        id: 'ritmo_25',
        title: 'Ritmo de Ambulatório',
        description: '25 questões',
        pillar: 'aprendizado',
        iconName: 'target',
        unlocked: true,
        progressLabel: '25/25',
        progressPct: 100,
      },
      {
        id: 'centuriao_100',
        title: 'Centurião R1',
        description: '100 questões',
        pillar: 'conquista',
        iconName: 'rocket',
        unlocked: false,
        progressLabel: '25/100',
        progressPct: 25,
      },
    ];

    it('retorna apenas conquistas desbloqueadas que ainda não foram vistas', () => {
      const newly = diffNewlyUnlockedAchievements(sampleBadges, ['primeiro_plantao']);
      expect(newly.map((b) => b.id)).toEqual(['ritmo_25']);
    });

    it('não repete conquistas já vistas nem inclui bloqueadas', () => {
      const newly = diffNewlyUnlockedAchievements(sampleBadges, [
        'primeiro_plantao',
        'ritmo_25',
      ]);
      expect(newly).toEqual([]);
    });
  });
});
