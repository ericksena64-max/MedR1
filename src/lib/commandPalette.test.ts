import { describe, expect, it } from 'vitest';
import {
  buildCommandPaletteItems,
  filterCommandPaletteItems,
} from './commandPalette';
import type { MedicalQuestion } from '../types/medical';

function mockQuestion(
  id: string,
  grandeAreaId: MedicalQuestion['grandeAreaId'],
  tema: string
): MedicalQuestion {
  return { id, grandeAreaId, tema } as MedicalQuestion;
}

describe('commandPalette', () => {
  it('inclui módulos de navegação, 5 grandes áreas, especialidades reais e ações rápidas', () => {
    const questions = [
      mockQuestion('1', 'clinica_medica', 'Cardiologia'),
      mockQuestion('2', 'clinica_medica', 'Cardiologia'),
      mockQuestion('3', 'cirurgia_geral', 'Trauma'),
    ];
    const items = buildCommandPaletteItems(questions);

    expect(items.some((i) => i.group === 'Navegação' && i.label === 'Flashcards')).toBe(true);
    expect(items.some((i) => i.group === 'Grandes Áreas' && i.label === 'Clínica Médica')).toBe(true);
    expect(items.some((i) => i.group === 'Especialidades' && i.label === 'Cardiologia')).toBe(true);
    expect(items.some((i) => i.group === 'Ações' && i.label === 'Configurar Rotina')).toBe(true);
  });

  it('filtra sem acentos e sem sensibilidade a maiúsculas', () => {
    const questions = [
      mockQuestion('1', 'clinica_medica', 'Cardiologia'),
      mockQuestion('2', 'ginecologia_obstetricia', 'Obstetrícia de Alto Risco'),
    ];
    const items = buildCommandPaletteItems(questions);

    const cardio = filterCommandPaletteItems(items, 'cardio');
    expect(cardio[0]?.label).toBe('Cardiologia');

    const obs = filterCommandPaletteItems(items, 'obstetricia');
    expect(obs.some((i) => i.label === 'Obstetrícia de Alto Risco')).toBe(true);

    const rotina = filterCommandPaletteItems(items, 'ROTINA');
    expect(rotina.some((i) => i.label === 'Configurar Rotina')).toBe(true);
  });

  it('retorna lista limitada e útil quando a busca está vazia', () => {
    const items = buildCommandPaletteItems([]);
    const initial = filterCommandPaletteItems(items, '');
    expect(initial.length).toBeGreaterThan(0);
    expect(initial.length).toBeLessThanOrEqual(12);
  });
});
