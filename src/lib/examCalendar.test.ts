import { describe, expect, it } from 'vitest';
import {
  classifyStudyPhase,
  computeExamCalendarSummary,
  computeUrgencyAdjustedExamWeights,
  parseIsoDateLocal,
} from './examCalendar';

describe('examCalendar', () => {
  it('classifica corretamente as 4 fases de periodização e sem_data', () => {
    expect(classifyStudyPhase(null).id).toBe('sem_data');
    expect(classifyStudyPhase(100).id).toBe('base');
    expect(classifyStudyPhase(56).id).toBe('aprofundamento');
    expect(classifyStudyPhase(21).id).toBe('reta_final');
    expect(classifyStudyPhase(5).id).toBe('semana_prova');
    expect(classifyStudyPhase(5).loadMultiplier).toBe(0.6);
  });

  it('remove automaticamente prova já passada e foca 100% na próxima prova futura', () => {
    const ref = parseIsoDateLocal('2026-10-20')!;
    const summary = computeExamCalendarSummary(
      ['ENARE', 'UEPA'],
      { ENARE: '2026-10-18', UEPA: '2026-11-15' },
      ref
    );

    expect(summary.nextExam?.exam).toBe('UEPA');
    expect(summary.nextExam?.daysRemaining).toBe(26);
    expect(summary.activePhase.id).toBe('reta_final');
    expect(summary.activeExams).toEqual(['UEPA']);

    const weights = computeUrgencyAdjustedExamWeights(
      ['ENARE', 'UEPA'],
      { ENARE: '2026-10-18', UEPA: '2026-11-15' },
      ref
    );
    expect(weights.ENARE).toBe(0);
    expect(weights.UEPA).toBeCloseTo(1, 5);
  });

  it('eleva o peso de uma prova secundária quando ela entra nas últimas 4 semanas', () => {
    const ref = parseIsoDateLocal('2026-10-01')!;
    const weights = computeUrgencyAdjustedExamWeights(
      ['UEPA', 'ENARE'],
      { UEPA: '2026-11-30', ENARE: '2026-10-15' },
      ref
    );
    expect(weights.ENARE).toBeGreaterThan(0.45);
    expect(weights.UEPA + weights.ENARE).toBeCloseTo(1, 5);
  });

  it('faz fallback seguro para sem_data quando todas as provas já passaram ou não há datas', () => {
    const ref = parseIsoDateLocal('2026-12-01')!;
    const summary = computeExamCalendarSummary(
      ['UEPA'],
      { UEPA: '2026-11-15' },
      ref
    );
    expect(summary.nextExam).toBeNull();
    expect(summary.activePhase.id).toBe('sem_data');
    expect(summary.activeExams).toEqual(['UEPA']);
  });
});
