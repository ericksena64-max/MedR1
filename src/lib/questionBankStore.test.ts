import { beforeEach, describe, expect, it } from 'vitest';
import {
  areAllOfficialExamsLoaded,
  getAllBankQuestions,
  getLoadedOfficialExamIds,
  getMatchingOfficialExamIds,
  getOfficialCatalogCache,
  getOfficialExamCatalog,
  getOfficialExamIdsForQuestionIds,
  getUnloadedOfficialCatalogEntries,
  isOfficialExamLoaded,
  loadOfficialCatalogQuestions,
  loadOfficialExam,
  loadOfficialExamsMatchingFilters,
  resetOfficialCatalogCacheForTests,
} from './questionBankStore';
import type { GrandeAreaId } from '../types/medical';

describe('questionBankStore — code-splitting e carregamento sob demanda de provas', () => {
  beforeEach(() => {
    resetOfficialCatalogCacheForTests();
  });

  it('inicia sem carregar chunks oficiais em memória, mas expõe o manifesto completo', () => {
    expect(getLoadedOfficialExamIds()).toEqual([]);
    expect(getOfficialCatalogCache()).toEqual([]);
    expect(areAllOfficialExamsLoaded()).toBe(false);

    const catalog = getOfficialExamCatalog();
    expect(catalog.map((e) => e.id)).toEqual([
      'uepa-2026',
      'uepa-2025',
      'uepa-2024',
      'uepa-2023',
      'uepa-2022',
      'usp-rp-2023',
      'usp-sp-2023',
      'sus-sp-2023',
      'unifesp-2023',
    ]);
    expect(catalog.reduce((acc, e) => acc + e.questionCount, 0)).toBe(920);
    expect(getUnloadedOfficialCatalogEntries()).toHaveLength(9);
  });

  it('seleciona apenas as provas compatíveis com os filtros ativos', () => {
    expect(getMatchingOfficialExamIds({ ano: '2026' })).toEqual(['uepa-2026']);
    expect(getMatchingOfficialExamIds({ examSearch: 'UEPA 2025' })).toEqual(['uepa-2025']);
    expect(getMatchingOfficialExamIds({ examSearch: 'Q-UEPA24-0010' })).toEqual(['uepa-2024']);
    expect(getMatchingOfficialExamIds({ examSearch: 'UEPA 2023' })).toEqual(['uepa-2023']);
    expect(getMatchingOfficialExamIds({ examSearch: 'UEPA 2022' })).toEqual(['uepa-2022']);
    expect(getMatchingOfficialExamIds({ instituicao: 'USP-SP' })).toEqual(['usp-sp-2023']);
    expect(getMatchingOfficialExamIds({ instituicao: 'ENARE' })).toEqual([]);
    expect(getMatchingOfficialExamIds({ regiao: 'Sudeste' })).toEqual([
      'usp-rp-2023',
      'usp-sp-2023',
      'sus-sp-2023',
      'unifesp-2023',
    ]);
    expect(getMatchingOfficialExamIds({ regiao: 'Norte' })).toEqual([
      'uepa-2026',
      'uepa-2025',
      'uepa-2024',
      'uepa-2023',
      'uepa-2022',
    ]);
    expect(getMatchingOfficialExamIds({})).toEqual([
      'uepa-2026',
      'uepa-2025',
      'uepa-2024',
      'uepa-2023',
      'uepa-2022',
      'usp-rp-2023',
      'usp-sp-2023',
      'sus-sp-2023',
      'unifesp-2023',
    ]);
  });

  it('resolve apenas os chunks oficiais referenciados por IDs de questões salvas', () => {
    const ids = getOfficialExamIdsForQuestionIds([
      'q-uepa-2025-042',
      'q-uepa-2025-099',
      'q-usp-sp-2023-012',
      'q-usp-2025-cardio-01',
    ]);
    expect(ids).toEqual(['uepa-2025', 'usp-sp-2023']);
  });

  it('carrega sob demanda apenas a prova filtrada sem baixar as demais', async () => {
    const loaded = await loadOfficialExamsMatchingFilters({
      instituicao: 'UEPA',
      ano: '2026',
    });

    expect(loaded).toHaveLength(100);
    expect(isOfficialExamLoaded('uepa-2026')).toBe(true);
    expect(isOfficialExamLoaded('uepa-2025')).toBe(false);
    expect(isOfficialExamLoaded('uepa-2024')).toBe(false);
    expect(getLoadedOfficialExamIds()).toEqual(['uepa-2026']);
    expect(getUnloadedOfficialCatalogEntries().map((e) => e.id)).toEqual([
      'uepa-2025',
      'uepa-2024',
      'uepa-2023',
      'uepa-2022',
      'usp-rp-2023',
      'usp-sp-2023',
      'sus-sp-2023',
      'unifesp-2023',
    ]);
    expect(getAllBankQuestions().length).toBeGreaterThan(100);
  });

  it('não baixa nenhum chunk oficial quando o filtro aponta para outra banca', async () => {
    const loaded = await loadOfficialExamsMatchingFilters({
      instituicao: 'ENARE',
    });
    expect(loaded).toEqual([]);
    expect(getLoadedOfficialExamIds()).toEqual([]);
  });

  it('carrega o catálogo completo preservando a ordem e valida integridade do manifesto', async () => {
    // Carrega primeiro 2024 fora de ordem para garantir ordenação determinística no cache
    await loadOfficialExam('uepa-2024');
    expect(getLoadedOfficialExamIds()).toEqual(['uepa-2024']);

    const allCatalog = await loadOfficialCatalogQuestions();
    expect(allCatalog).toHaveLength(920);
    expect(areAllOfficialExamsLoaded()).toBe(true);
    expect(getUnloadedOfficialCatalogEntries()).toEqual([]);

    // Ordem preservada: UEPA 2026..2022 + USP-RP 2023 + USP-SP 2023 + SUS-SP 2023 + UNIFESP 2023
    expect(allCatalog[0].ano).toBe(2026);
    expect(allCatalog[100].ano).toBe(2025);
    expect(allCatalog[200].ano).toBe(2024);
    expect(allCatalog[300].ano).toBe(2023);
    expect(allCatalog[400].ano).toBe(2022);
    expect(allCatalog[500].instituicao).toBe('USP-RP');
    expect(allCatalog[600].instituicao).toBe('USP-SP');
    expect(allCatalog[720].instituicao).toBe('SUS-SP');
    expect(allCatalog[820].instituicao).toBe('UNIFESP');

    // Garante que os metadados do manifesto batem exatamente com os arquivos das provas
    for (const entry of getOfficialExamCatalog()) {
      const questions = await loadOfficialExam(entry.id);
      expect(questions).toHaveLength(entry.questionCount);
      const active = questions.filter((q) => !q.anulada && !q.desatualizada).length;
      expect(active).toBe(entry.activeCount);

      const computedAreas: Record<GrandeAreaId, number> = {
        clinica_medica: 0,
        cirurgia_geral: 0,
        ginecologia_obstetricia: 0,
        pediatria: 0,
        medicina_preventiva: 0,
      };
      for (const q of questions) {
        computedAreas[q.grandeAreaId] += 1;
      }
      expect(computedAreas).toEqual(entry.areaCounts);
    }
  });
});
