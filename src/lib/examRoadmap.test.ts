import { describe, expect, it } from 'vitest';
import { buildExamWeeksRoadmap, computeParetoFeasibility } from './examRoadmap';
import { parseIsoDateLocal } from './examCalendar';

describe('examRoadmap', () => {
  it('sinaliza status critico e recomenda horas/dia quando a capacidade não cobre o Núcleo Pareto', () => {
    const report = computeParetoFeasibility({
      weeksUntilExam: 2,
      activeDaysPerWeek: 5,
      hoursPerDay: 1,
      estimatedQuestionsPerActiveDay: 15,
      paretoCoreTopicsCount: 20, // 500q target vs 150q capacity -> 30%
    });

    expect(report.status).toBe('critico');
    expect(report.coveragePct).toBe(30);
    expect(report.recommendedHoursPerDay).toBeGreaterThan(1);
    expect(report.recommendedHoursPerDay).toBeLessThanOrEqual(8);
  });

  it('sinaliza status confortavel quando há margem para cobrir 100% do Núcleo Pareto', () => {
    const report = computeParetoFeasibility({
      weeksUntilExam: 16,
      activeDaysPerWeek: 6,
      hoursPerDay: 3,
      estimatedQuestionsPerActiveDay: 50,
      paretoCoreTopicsCount: 20,
    });

    expect(report.status).toBe('confortavel');
    expect(report.coveragePct).toBe(100);
    expect(report.recommendedHoursPerDay).toBeNull();
  });

  it('gera linha do tempo semanal até a data da prova marcando fase, simulado e semana do exame', () => {
    const ref = parseIsoDateLocal('2026-10-01')!;
    const weeks = buildExamWeeksRoadmap({
      targetExams: ['UEPA'],
      examDates: { UEPA: '2026-11-15' },
      referenceDate: ref,
      maxWeeks: 24,
    });

    expect(weeks.length).toBeGreaterThanOrEqual(6);
    expect(weeks[0].weekOffset).toBe(0);
    expect(weeks[0].isCurrentWeek).toBe(true);
    const examWeek = weeks.find((w) => w.examEvents.includes('UEPA'));
    expect(examWeek).toBeDefined();
    expect(examWeek!.phase.id).toBe('semana_prova');
    expect(examWeek!.hasSimulado).toBe(false);
  });
});
