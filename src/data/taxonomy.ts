import type { GrandeAreaId } from '../types/medical';

export interface GrandeAreaMeta {
  id: GrandeAreaId;
  name: string;
  shortName: string;
  color: string;
}

export const GRANDES_AREAS: GrandeAreaMeta[] = [
  {
    id: 'clinica_medica',
    name: 'Clínica Médica',
    shortName: 'Clínica',
    color: '#0284C7',
  },
  {
    id: 'cirurgia_geral',
    name: 'Cirurgia Geral',
    shortName: 'Cirurgia',
    color: '#0D9488',
  },
  {
    id: 'ginecologia_obstetricia',
    name: 'Ginecologia e Obstetrícia',
    shortName: 'GO',
    color: '#7C3AED',
  },
  {
    id: 'pediatria',
    name: 'Pediatria',
    shortName: 'Pediatria',
    color: '#D97706',
  },
  {
    id: 'medicina_preventiva',
    name: 'Medicina Preventiva e Social',
    shortName: 'Preventiva',
    color: '#059669',
  },
];

export const REGIOES_BRASIL = [
  'Nacional',
  'Sudeste',
  'Sul',
  'Norte',
  'Nordeste',
  'Centro-Oeste',
];

export const MEDICAL_CODENAMES = [
  'FutureR1_Cardio',
  'PlantonistaNoturno',
  'BisturiDeOuro',
  'ResidenteSUS_SP',
  'InternoDoHC',
  'ATLS_Master',
  'PuericulturaPro',
  'EcgSemSupra',
  'R1_NeuroCirurgia',
  'GuardiaoDoSUS',
  'ObstetraEmFormacao',
  'IntensivistaBR',
  'NefroPrecisao',
  'PlantaoDeDomingo',
  'HarrisonLover',
];
