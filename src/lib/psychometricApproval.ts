export type Stage1Model = 'binomial_wilson' | 'binomial_wald' | 'tct_sem';

export interface CalibrationPair {
  id: string;
  label: string;
  simuladoScore: number; // X_i
  officialScore: number; // Y_i
}

export interface PsychometricInput {
  stage1Model: Stage1Model;
  // Binomial inputs (k correct in n valid questions)
  correctCount: number; // k
  totalCount: number; // n
  // TCT (Lord & Novick, 1968) inputs
  observedScore: number; // X (0-100)
  cohortStdDev: number; // sigma_X
  reliabilityRxx: number; // r_xx (Cronbach's alpha / KR-20, 0 < r_xx < 1)
  // Stage 2: Optional OLS calibration
  enableOlsCalibration: boolean;
  calibrationPairs: CalibrationPair[];
  // Stage 3: Cutoff distribution C ~ N(mu_C, sigma_C^2)
  cutoffMean: number; // mu_C
  cutoffStdDev: number; // sigma_C (0 for fixed cutoff)
}

export interface OlsCalibrationResult {
  valid: boolean;
  sampleSize: number; // m
  beta0: number;
  beta1: number;
  residualSe: number; // s_e
  tCritical95: number; // t_{0.025, m-2}
  predictedY0: number; // Y_hat_0
  predictionSe: number; // SE_pred
  piLow: number;
  piHigh: number;
  rSquared: number;
}

export interface DensityPoint {
  x: number;
  studentDensity?: number;
  cutoffDensity?: number;
  marginPositiveDensity?: number;
  marginNegativeDensity?: number;
}

export interface PsychometricResult {
  valid: boolean;
  validationMessage?: string;
  // Stage 1 outputs
  pHat: number | null; // k/n
  stage1PointEstimate: number; // Y_hat from Stage 1 (0-100)
  stage1Se: number; // 100 * SE_bin or SEM
  waldCi: [number, number] | null;
  wilsonCi: [number, number] | null;
  activeStage1Ci: [number, number];
  // Stage 2 outputs
  ols: OlsCalibrationResult | null;
  // Active score distribution fed into Stage 3: Y ~ N(finalMeanY, finalSigmaY^2)
  finalMeanY: number;
  finalSigmaY: number;
  finalInterval95: [number, number];
  finalIntervalLabel: 'IC 95% (Wilson)' | 'IC 95% (Wald)' | 'IC 95% (TCT · SEM)' | 'IP 95% (MQO)';
  // Stage 3 outputs: D = Y - C ~ N(marginMean, marginSigma^2)
  cutoffMean: number;
  cutoffStdDev: number;
  marginMean: number; // Y_hat - mu_C
  marginSigma: number; // sqrt(sigma_Y^2 + sigma_C^2)
  zScore: number;
  approvalProbabilityPct: number; // 0-100
  statusLabel: 'Alta probabilidade' | 'Zona competitiva' | 'Abaixo do corte';
  // Chart distributions
  overlapCurve: DensityPoint[];
  marginCurve: DensityPoint[];
}

const Z_95 = 1.959963984540054; // Exact two-tailed 95% normal quantile (~1.96)

/**
 * Error function erf(x) via Abramowitz & Stegun 7.1.26 (max error < 1.5e-7).
 */
function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const poly =
    (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) *
      t +
      0.254829592) *
      t);
  const y = 1 - poly * Math.exp(-ax * ax);
  return sign * y;
}

/**
 * Standard Normal Cumulative Distribution Function Phi(z).
 */
export function normalCdf(z: number): number {
  if (!Number.isFinite(z)) return z > 0 ? 1 : 0;
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

/**
 * Normal Probability Density Function phi(x; mean, sigma).
 */
export function normalPdf(x: number, mean: number, sigma: number): number {
  if (sigma <= 0) return 0;
  const z = (x - mean) / sigma;
  return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
}

/**
 * Exact two-tailed Student-t critical value t_{0.025, df} (95% interval).
 */
export function studentTCritical95(df: number): number {
  const table: Record<number, number> = {
    1: 12.706,
    2: 4.303,
    3: 3.182,
    4: 2.776,
    5: 2.571,
    6: 2.447,
    7: 2.365,
    8: 2.306,
    9: 2.262,
    10: 2.228,
    11: 2.201,
    12: 2.179,
    13: 2.16,
    14: 2.145,
    15: 2.131,
    16: 2.12,
    17: 2.11,
    18: 2.101,
    19: 2.093,
    20: 2.086,
    21: 2.08,
    22: 2.074,
    23: 2.069,
    24: 2.064,
    25: 2.06,
    26: 2.056,
    27: 2.052,
    28: 2.048,
    29: 2.045,
    30: 2.042,
  };
  const k = Math.max(1, Math.floor(df));
  if (k in table) return table[k];
  // Cornish-Fisher expansion for df > 30
  const z = Z_95;
  const z3 = z * z * z;
  const z5 = z3 * z * z;
  return (
    z +
    (z3 + z) / (4 * k) +
    (5 * z5 + 16 * z3 + 3 * z) / (96 * k * k)
  );
}

/**
 * Compute sample mean and unbiased sample standard deviation (ddof=1) from historical cutoffs.
 */
export function computeCutoffSeriesStats(values: number[]): {
  mean: number;
  stdDev: number;
  count: number;
} {
  const clean = values.filter((v) => Number.isFinite(v) && v >= 0 && v <= 100);
  if (clean.length === 0) return { mean: 75, stdDev: 0, count: 0 };
  const mean = clean.reduce((acc, v) => acc + v, 0) / clean.length;
  if (clean.length === 1) {
    return { mean: Number(mean.toFixed(2)), stdDev: 0, count: 1 };
  }
  const variance =
    clean.reduce((acc, v) => acc + (v - mean) ** 2, 0) / (clean.length - 1);
  return {
    mean: Number(mean.toFixed(2)),
    stdDev: Number(Math.sqrt(variance).toFixed(2)),
    count: clean.length,
  };
}

function clamp100(val: number): number {
  return Math.max(0, Math.min(100, val));
}

function computeOlsCalibration(
  pairs: CalibrationPair[],
  x0: number
): OlsCalibrationResult {
  const validPairs = pairs.filter(
    (p) =>
      Number.isFinite(p.simuladoScore) && Number.isFinite(p.officialScore)
  );
  const m = validPairs.length;
  if (m < 3) {
    return {
      valid: false,
      sampleSize: m,
      beta0: 0,
      beta1: 1,
      residualSe: 0,
      tCritical95: 0,
      predictedY0: x0,
      predictionSe: 0,
      piLow: x0,
      piHigh: x0,
      rSquared: 0,
    };
  }

  const meanX = validPairs.reduce((acc, p) => acc + p.simuladoScore, 0) / m;
  const meanY = validPairs.reduce((acc, p) => acc + p.officialScore, 0) / m;

  let sxx = 0;
  let sxy = 0;
  let syy = 0;
  for (const p of validPairs) {
    const dx = p.simuladoScore - meanX;
    const dy = p.officialScore - meanY;
    sxx += dx * dx;
    sxy += dx * dy;
    syy += dy * dy;
  }

  if (sxx < 1e-6) {
    return {
      valid: false,
      sampleSize: m,
      beta0: meanY,
      beta1: 0,
      residualSe: 0,
      tCritical95: studentTCritical95(m - 2),
      predictedY0: meanY,
      predictionSe: 0,
      piLow: meanY,
      piHigh: meanY,
      rSquared: 0,
    };
  }

  const beta1 = sxy / sxx;
  const beta0 = meanY - beta1 * meanX;

  let sse = 0;
  for (const p of validPairs) {
    const fitted = beta0 + beta1 * p.simuladoScore;
    sse += (p.officialScore - fitted) ** 2;
  }

  const df = m - 2;
  const residualSe = Math.sqrt(sse / df);
  const tCrit = studentTCritical95(df);
  const predictedY0 = clamp100(beta0 + beta1 * x0);
  const leverageTerm = 1 + 1 / m + ((x0 - meanX) ** 2) / sxx;
  const predictionSe = residualSe * Math.sqrt(leverageTerm);
  const piLow = clamp100(predictedY0 - tCrit * predictionSe);
  const piHigh = clamp100(predictedY0 + tCrit * predictionSe);
  const rSquared = syy > 1e-6 ? Math.max(0, Math.min(1, 1 - sse / syy)) : 0;

  return {
    valid: true,
    sampleSize: m,
    beta0,
    beta1,
    residualSe,
    tCritical95: tCrit,
    predictedY0,
    predictionSe,
    piLow,
    piHigh,
    rSquared,
  };
}

export const DEFAULT_CALIBRATION_PAIRS: CalibrationPair[] = [
  { id: 'cal-1', label: 'Ex-aluno A', simuladoScore: 68, officialScore: 66.5 },
  { id: 'cal-2', label: 'Ex-aluno B', simuladoScore: 72, officialScore: 70.0 },
  { id: 'cal-3', label: 'Ex-aluno C', simuladoScore: 75, officialScore: 73.5 },
  { id: 'cal-4', label: 'Ex-aluno D', simuladoScore: 79, officialScore: 78.0 },
  { id: 'cal-5', label: 'Ex-aluno E', simuladoScore: 83, officialScore: 80.5 },
  { id: 'cal-6', label: 'Ex-aluno F', simuladoScore: 86, officialScore: 84.5 },
];

export function computePsychometricApproval(
  input: PsychometricInput
): PsychometricResult {
  const cutoffMean = clamp100(
    Number.isFinite(input.cutoffMean) ? input.cutoffMean : 75
  );
  const cutoffStdDev = Math.max(
    0,
    Number.isFinite(input.cutoffStdDev) ? input.cutoffStdDev : 0
  );

  // Stage 1: Estimate student's score and SE
  let pHat: number | null = null;
  let stage1PointEstimate = 0;
  let stage1Se = 0;
  let waldCi: [number, number] | null = null;
  let wilsonCi: [number, number] | null = null;
  let activeStage1Ci: [number, number] = [0, 0];

  if (input.stage1Model === 'tct_sem') {
    const x = clamp100(input.observedScore);
    const sx = Math.max(0, input.cohortStdDev);
    const rxx = Math.max(0.01, Math.min(0.999, input.reliabilityRxx));
    const sem = sx * Math.sqrt(1 - rxx);
    stage1PointEstimate = x;
    stage1Se = sem;
    activeStage1Ci = [clamp100(x - Z_95 * sem), clamp100(x + Z_95 * sem)];
  } else {
    const n = Math.max(0, Math.round(input.totalCount));
    const k = Math.max(0, Math.min(n, Math.round(input.correctCount)));
    if (n < 1) {
      return {
        valid: false,
        validationMessage:
          'Informe pelo menos 1 questão válida (n ≥ 1) para estimar o intervalo de confiança.',
        pHat: null,
        stage1PointEstimate: 0,
        stage1Se: 0,
        waldCi: null,
        wilsonCi: null,
        activeStage1Ci: [0, 0],
        ols: null,
        finalMeanY: 0,
        finalSigmaY: 0,
        finalInterval95: [0, 0],
        finalIntervalLabel: 'IC 95% (Wilson)',
        cutoffMean,
        cutoffStdDev,
        marginMean: -cutoffMean,
        marginSigma: cutoffStdDev,
        zScore: 0,
        approvalProbabilityPct: 0,
        statusLabel: 'Abaixo do corte',
        overlapCurve: [],
        marginCurve: [],
      };
    }

    pHat = k / n;
    stage1PointEstimate = 100 * pHat;
    const seBin = Math.sqrt((pHat * (1 - pHat)) / n);
    const waldSe = 100 * seBin;

    // Wald 95% CI
    const waldLow = clamp100(stage1PointEstimate - Z_95 * waldSe);
    const waldHigh = clamp100(stage1PointEstimate + Z_95 * waldSe);
    waldCi = [waldLow, waldHigh];

    // Wilson 95% CI (more accurate for small n or extreme p near 0/1)
    const z2 = Z_95 * Z_95;
    const denom = 1 + z2 / n;
    const center = pHat + z2 / (2 * n);
    const rad = Z_95 * Math.sqrt((pHat * (1 - pHat)) / n + z2 / (4 * n * n));
    const wilsonLow = clamp100((100 * (center - rad)) / denom);
    const wilsonHigh = clamp100((100 * (center + rad)) / denom);
    wilsonCi = [wilsonLow, wilsonHigh];

    // Keep Stage 1 SE consistent with Wilson when Wilson is active (avoids SE=0 at k=0 or k=n)
    const wilsonEffectiveSe = (100 * rad) / (denom * Z_95);
    stage1Se =
      input.stage1Model === 'binomial_wald' ? waldSe : wilsonEffectiveSe;

    activeStage1Ci =
      input.stage1Model === 'binomial_wald' ? waldCi : wilsonCi;
  }

  // Stage 2: Optional OLS calibration
  const ols = input.enableOlsCalibration
    ? computeOlsCalibration(input.calibrationPairs, stage1PointEstimate)
    : null;

  let finalMeanY = stage1PointEstimate;
  let finalSigmaY = stage1Se;
  let finalInterval95: [number, number] = activeStage1Ci;
  let finalIntervalLabel: PsychometricResult['finalIntervalLabel'] =
    input.stage1Model === 'tct_sem'
      ? 'IC 95% (TCT · SEM)'
      : input.stage1Model === 'binomial_wald'
      ? 'IC 95% (Wald)'
      : 'IC 95% (Wilson)';

  if (ols && ols.valid) {
    finalMeanY = ols.predictedY0;
    // Propagate Stage 1 measurement error (errors-in-variables) and small-df Student-t tail inflation
    const tTailScale = ols.tCritical95 > 0 ? ols.tCritical95 / Z_95 : 1;
    const propagatedStage1Se = Math.abs(ols.beta1) * stage1Se;
    const combinedPredSe = Math.sqrt(
      ols.predictionSe * ols.predictionSe + propagatedStage1Se * propagatedStage1Se
    );
    finalSigmaY = combinedPredSe * tTailScale;
    finalInterval95 = [
      clamp100(finalMeanY - Z_95 * finalSigmaY),
      clamp100(finalMeanY + Z_95 * finalSigmaY),
    ];
    finalIntervalLabel = 'IP 95% (MQO)';
  }

  // Stage 3: Approval Margin D = Y - C ~ N(finalMeanY - cutoffMean, finalSigmaY^2 + cutoffStdDev^2)
  const marginMean = finalMeanY - cutoffMean;
  const marginSigma = Math.sqrt(
    finalSigmaY * finalSigmaY + cutoffStdDev * cutoffStdDev
  );

  let zScore = 0;
  let approvalProb = 0.5;
  if (marginSigma > 1e-6) {
    zScore = marginMean / marginSigma;
    approvalProb = normalCdf(zScore);
  } else {
    zScore = marginMean >= 0 ? 10 : -10;
    approvalProb = marginMean >= 0 ? 1 : 0;
  }

  const approvalProbabilityPct = Number((approvalProb * 100).toFixed(1));
  const statusLabel: PsychometricResult['statusLabel'] =
    approvalProbabilityPct >= 75
      ? 'Alta probabilidade'
      : approvalProbabilityPct >= 45
      ? 'Zona competitiva'
      : 'Abaixo do corte';

  // Generate smooth Gaussian overlap curve: Y vs C
  const minScore = Math.max(
    0,
    Math.floor(
      Math.min(
        finalMeanY - 3.6 * Math.max(finalSigmaY, 1.5),
        cutoffMean - 3.6 * Math.max(cutoffStdDev, 1.5)
      )
    )
  );
  const maxScore = Math.min(
    100,
    Math.ceil(
      Math.max(
        finalMeanY + 3.6 * Math.max(finalSigmaY, 1.5),
        cutoffMean + 3.6 * Math.max(cutoffStdDev, 1.5)
      )
    )
  );
  const overlapSteps = 80;
  const scoreStep = Math.max(0.25, (maxScore - minScore) / overlapSteps);
  const overlapCurve: DensityPoint[] = [];

  for (let i = 0; i <= overlapSteps; i++) {
    const x = Number((minScore + i * scoreStep).toFixed(2));
    const yDens =
      finalSigmaY > 0.05
        ? Number((normalPdf(x, finalMeanY, finalSigmaY) * 100).toFixed(3))
        : 0;
    const cDens =
      cutoffStdDev > 0.05
        ? Number((normalPdf(x, cutoffMean, cutoffStdDev) * 100).toFixed(3))
        : undefined;
    overlapCurve.push({
      x,
      studentDensity: yDens,
      cutoffDensity: cDens,
    });
  }

  // Generate smooth Approval Margin curve: D = Y - C split cleanly at D = 0
  const effMarginSigma = Math.max(marginSigma, 1.2);
  const dMin = Math.floor(Math.min(-3.5 * effMarginSigma, marginMean - 3.5 * effMarginSigma));
  const dMax = Math.ceil(Math.max(3.5 * effMarginSigma, marginMean + 3.5 * effMarginSigma));
  const marginSteps = 84;
  const dStep = Math.max(0.25, (dMax - dMin) / marginSteps);
  const marginCurve: DensityPoint[] = [];

  for (let i = 0; i <= marginSteps; i++) {
    const x = Number((dMin + i * dStep).toFixed(2));
    const dens = Number((normalPdf(x, marginMean, effMarginSigma) * 100).toFixed(3));
    marginCurve.push({
      x,
      marginPositiveDensity: x >= 0 ? dens : 0,
      marginNegativeDensity: x <= 0 ? dens : 0,
    });
  }

  return {
    valid: true,
    pHat,
    stage1PointEstimate: Number(stage1PointEstimate.toFixed(2)),
    stage1Se: Number(stage1Se.toFixed(2)),
    waldCi: waldCi
      ? [Number(waldCi[0].toFixed(2)), Number(waldCi[1].toFixed(2))]
      : null,
    wilsonCi: wilsonCi
      ? [Number(wilsonCi[0].toFixed(2)), Number(wilsonCi[1].toFixed(2))]
      : null,
    activeStage1Ci: [
      Number(activeStage1Ci[0].toFixed(2)),
      Number(activeStage1Ci[1].toFixed(2)),
    ],
    ols,
    finalMeanY: Number(finalMeanY.toFixed(2)),
    finalSigmaY: Number(finalSigmaY.toFixed(2)),
    finalInterval95: [
      Number(finalInterval95[0].toFixed(2)),
      Number(finalInterval95[1].toFixed(2)),
    ],
    finalIntervalLabel,
    cutoffMean: Number(cutoffMean.toFixed(2)),
    cutoffStdDev: Number(cutoffStdDev.toFixed(2)),
    marginMean: Number(marginMean.toFixed(2)),
    marginSigma: Number(marginSigma.toFixed(2)),
    zScore: Number(zScore.toFixed(3)),
    approvalProbabilityPct,
    statusLabel,
    overlapCurve,
    marginCurve,
  };
}
