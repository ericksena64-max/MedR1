import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { DifficultyLevel, PerformanceStatus } from '../types/medical';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function computeDifficulty(globalAccuracyPct: number): DifficultyLevel {
  if (globalAccuracyPct > 70) return 'Fácil';
  if (globalAccuracyPct >= 40) return 'Médio';
  return 'Difícil';
}

export function computeWeightedScore(
  questionsToday: number,
  correctToday: number,
  streak: number
): number {
  if (questionsToday <= 0) return 0;
  const accuracy = correctToday / questionsToday;
  // Penalizes random guessing while rewarding consistent volume & accuracy
  const base = questionsToday * 10 * (0.4 + 0.6 * accuracy);
  const streakBonus = Math.min(streak * 2.5, 40);
  return Math.round(base + streakBonus);
}

export function computePerformanceStatus(delta: number): PerformanceStatus {
  if (delta >= 3) return 'Acima da Mediana';
  if (delta <= -3) return 'Ponto de Atenção';
  return 'Na Mediana';
}

export function formatTimer(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hrs > 0) {
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export function formatDelta(delta: number): string {
  const rounded = Number(delta.toFixed(1));
  if (rounded > 0) return `+${rounded.toFixed(1)}%`;
  if (rounded < 0) return `${rounded.toFixed(1)}%`;
  return '0.0%';
}
