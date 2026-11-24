import { describe, expect, it } from 'vitest';
import { buildSpecialtyExplorerItems } from './medicalSpecialties';
import type { MedicalQuestion } from '../types/medical';

function mockQuestion(
  id: string,
  grandeAreaId: MedicalQuestion['grandeAreaId'],
  tema: string
): MedicalQuestion {
  return { id, grandeAreaId, tema } as MedicalQuestion;
}

describe('buildSpecialtyExplorerItems', () => {
  it('agrupa questões reais por tema, ordena por contagem decrescente e filtra por grandeAreaId', () => {
    const questions = [
      mockQuestion('1', 'clinica_medica', 'Cardiologia'),
      mockQuestion('2', 'clinica_medica', 'Cardiologia'),
      mockQuestion('3', 'cirurgia_geral', 'Trauma'),
      mockQuestion('4', 'pediatria', 'Neonatologia'),
      mockQuestion('5', 'clinica_medica', '   '),
    ];

    const all = buildSpecialtyExplorerItems(questions, 'todos');
    expect(all.map((i) => [i.label, i.questionCount, i.iconKey])).toEqual([
      ['Cardiologia', 2, 'heart'],
      ['Neonatologia', 1, 'baby'],
      ['Trauma', 1, 'scalpel'],
    ]);

    const onlyClinica = buildSpecialtyExplorerItems(questions, 'clinica_medica');
    expect(onlyClinica).toHaveLength(1);
    expect(onlyClinica[0].label).toBe('Cardiologia');
  });

  it('retorna lista vazia com segurança quando o banco está vazio ou não há correspondência', () => {
    expect(buildSpecialtyExplorerItems([], 'todos')).toEqual([]);
    expect(
      buildSpecialtyExplorerItems([mockQuestion('1', 'pediatria', 'Neonatologia')], 'cirurgia_geral')
    ).toEqual([]);
  });
});
