import { describe, expect, it } from 'vitest';
import { buildNavigationUrl, parseNavigationUrl } from './navigationUrl';

describe('navigationUrl', () => {
  it('converte rotas de abas e simulados entre URL e estado do app', () => {
    expect(buildNavigationUrl({ tab: 'inicio', mode: 'estudo' })).toBe('/');
    expect(buildNavigationUrl({ tab: 'questoes', mode: 'estudo' })).toBe('/questoes');
    expect(buildNavigationUrl({ tab: 'questoes', mode: 'simulado' })).toBe('/simulados');
    expect(buildNavigationUrl({ tab: 'flashcards', mode: 'estudo' })).toBe('/flashcards');
    expect(buildNavigationUrl({ tab: 'caderno_erros', mode: 'estudo' })).toBe('/caderno-erros');
    expect(buildNavigationUrl({ tab: 'desempenho', mode: 'estudo' })).toBe('/desempenho');
    expect(buildNavigationUrl({ tab: 'ranking', mode: 'estudo' })).toBe('/ranking');
    expect(buildNavigationUrl({ tab: 'importar', mode: 'estudo' })).toBe('/importar');

    expect(parseNavigationUrl('/', '')).toEqual({ tab: 'inicio', mode: 'estudo' });
    expect(parseNavigationUrl('/simulados', '')).toEqual({ tab: 'questoes', mode: 'simulado' });
    expect(parseNavigationUrl('/caderno-erros', '')).toEqual({ tab: 'caderno_erros', mode: 'estudo' });
    expect(parseNavigationUrl('/rota-desconhecida', '')).toEqual({ tab: 'inicio', mode: 'estudo' });
  });

  it('serializa e restaura query params de área e tema em /questoes', () => {
    const url = buildNavigationUrl({
      tab: 'questoes',
      mode: 'estudo',
      area: 'clinica_medica',
      tema: 'Cardiologia',
    });
    expect(url).toBe('/questoes?area=clinica_medica&tema=Cardiologia');

    const parsed = parseNavigationUrl('/questoes', '?area=clinica_medica&tema=Cardiologia');
    expect(parsed).toEqual({
      tab: 'questoes',
      mode: 'estudo',
      area: 'clinica_medica',
      tema: 'Cardiologia',
    });
  });

  it('ignora area inválida na query string com fallback seguro', () => {
    const parsed = parseNavigationUrl('/questoes', '?area=invalida&tema=Trauma');
    expect(parsed).toEqual({
      tab: 'questoes',
      mode: 'estudo',
      tema: 'Trauma',
    });
  });
});
