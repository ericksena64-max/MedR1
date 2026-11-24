import { describe, expect, it } from 'vitest';
import {
  clampDailyGoalTarget,
  resolveTopBarContext,
  shouldConfirmLeaveSimulado,
} from './navigationState';

describe('navigationState', () => {
  it('distingue Simulados de Banco de Questões no contexto da TopBar', () => {
    expect(resolveTopBarContext('questoes', 'estudo', false)).toMatchObject({
      section: 'Banco de Questões',
      activePrimaryId: 'questoes',
    });
    expect(resolveTopBarContext('questoes', 'simulado', false)).toMatchObject({
      section: 'Simulados',
      activePrimaryId: 'simulados',
    });
    expect(resolveTopBarContext('questoes', 'simulado', true).detail).toContain('Em andamento');
    expect(resolveTopBarContext('desempenho', 'estudo', false).activePrimaryId).toBeNull();
  });

  it('exige confirmação apenas ao sair de um simulado ativo e não finalizado', () => {
    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: false,
        nextTab: 'inicio',
      })
    ).toBe(true);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: false,
        nextTab: 'questoes',
        nextMode: 'estudo',
      })
    ).toBe(true);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'simulado',
        simuladoActive: true,
        simuladoFinished: true,
        nextTab: 'inicio',
      })
    ).toBe(false);

    expect(
      shouldConfirmLeaveSimulado({
        activeTab: 'questoes',
        mode: 'estudo',
        simuladoActive: false,
        simuladoFinished: false,
        nextTab: 'flashcards',
      })
    ).toBe(false);
  });

  it('limita a meta diária entre 5 e 300 questões válidas', () => {
    expect(clampDailyGoalTarget(2)).toBe(5);
    expect(clampDailyGoalTarget(45.7)).toBe(46);
    expect(clampDailyGoalTarget(999)).toBe(300);
    expect(clampDailyGoalTarget(Number.NaN)).toBe(20);
  });
});
