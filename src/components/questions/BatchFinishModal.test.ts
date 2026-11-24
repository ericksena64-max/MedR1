import { describe, expect, it } from 'vitest';
import { buildBatchFinishSummary } from './BatchFinishModal';

describe('BatchFinishModal — cálculo de lote completo vs incompleto', () => {
  it('marca isIncomplete como false quando todas as questões do lote foram respondidas', () => {
    const summary = buildBatchFinishSummary(20, 20, 'simulado');
    expect(summary.answeredCount).toBe(20);
    expect(summary.totalCount).toBe(20);
    expect(summary.unansweredCount).toBe(0);
    expect(summary.isIncomplete).toBe(false);
  });

  it('marca isIncomplete como true e calcula pendentes quando o lote é encerrado parcialmente', () => {
    const summary = buildBatchFinishSummary(12, 20, 'estudo');
    expect(summary.answeredCount).toBe(12);
    expect(summary.totalCount).toBe(20);
    expect(summary.unansweredCount).toBe(8);
    expect(summary.isIncomplete).toBe(true);
  });

  it('limita valores fora do intervalo sem gerar números negativos', () => {
    const summary = buildBatchFinishSummary(25, 20, 'estudo');
    expect(summary.answeredCount).toBe(20);
    expect(summary.unansweredCount).toBe(0);
    expect(summary.isIncomplete).toBe(false);
  });
});
