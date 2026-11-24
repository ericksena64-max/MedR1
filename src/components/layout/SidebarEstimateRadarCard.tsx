import React, { useEffect, useMemo, useState } from 'react';
import { Radar, ChevronDown, ArrowUpRight } from 'lucide-react';
import type { CutoffTargetConfig, GrandeAreaId } from '../../types/medical';
import type { PerformanceRow } from '../analytics/PerformanceDashboard';
import { GRANDES_AREAS } from '../../data/taxonomy';
import {
  calcularEstimativaResidencia,
  identificarGargaloPrioritario,
  readPersistedEstimatorConfig,
  ESTIMATOR_UPDATED_EVENT,
  type AreaMedica,
  type DesempenhoArea,
} from '../../lib/residenciaEstimator';
import { cn } from '../../lib/utils';

interface SidebarEstimateRadarCardProps {
  areaRows: PerformanceRow[];
  cutoffTarget: CutoffTargetConfig;
  isCompact: boolean;
  onOpenDashboard: () => void;
  onPracticeArea: (areaId: GrandeAreaId) => void;
  onRequestExpand?: () => void;
}

const SHORT_AXIS_LABELS: Record<GrandeAreaId, string> = {
  clinica_medica: 'Clín',
  cirurgia_geral: 'Cir',
  ginecologia_obstetricia: 'GO',
  pediatria: 'Ped',
  medicina_preventiva: 'Prev',
};

const AREA_META_MAP = new Map(GRANDES_AREAS.map((a) => [a.id, a]));

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleIndex: number,
  totalAxes: number
): { x: number; y: number } {
  const angleRad = -Math.PI / 2 + (angleIndex * 2 * Math.PI) / totalAxes;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function buildPolygonPoints(
  cx: number,
  cy: number,
  maxRadius: number,
  valuesPct: number[]
): string {
  const total = valuesPct.length;
  return valuesPct
    .map((pct, i) => {
      const clamped = Math.max(0, Math.min(100, pct));
      const { x, y } = polarToCartesian(
        cx,
        cy,
        (clamped / 100) * maxRadius,
        i,
        total
      );
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
}

export function SidebarEstimateRadarCard({
  areaRows,
  cutoffTarget,
  isCompact,
  onOpenDashboard,
  onPracticeArea,
  onRequestExpand,
}: SidebarEstimateRadarCardProps) {
  const [showRadarGraphic, setShowRadarGraphic] = useState(true);
  const [configTick, setConfigTick] = useState(0);

  // Live-sync whenever the student updates cutoff/exam parameters inside Desempenho
  useEffect(() => {
    const handleSync = () => setConfigTick((t) => t + 1);
    window.addEventListener(ESTIMATOR_UPDATED_EVENT, handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener(ESTIMATOR_UPDATED_EVENT, handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const fallbackCutoff =
    cutoffTarget.scaleType === 'bruta_100' ? cutoffTarget.historicalCutoff : 78;

  const estimatorConfig = useMemo(() => {
    void configTick;
    return readPersistedEstimatorConfig(fallbackCutoff);
  }, [fallbackCutoff, configTick]);

  const desempenhoAreas: DesempenhoArea[] = useMemo(
    () =>
      GRANDES_AREAS.map((area) => {
        const row = areaRows.find((r) => r.grandeAreaId === area.id);
        return {
          area: area.id as AreaMedica,
          acertos: row?.correct ?? 0,
          total: row?.answered ?? 0,
          peso: 0.2,
        };
      }),
    [areaRows]
  );

  const resultado = useMemo(
    () => calcularEstimativaResidencia(desempenhoAreas, estimatorConfig),
    [desempenhoAreas, estimatorConfig]
  );

  const gargalo = useMemo(
    () =>
      identificarGargaloPrioritario(
        desempenhoAreas,
        estimatorConfig,
        resultado,
        5
      ),
    [desempenhoAreas, estimatorConfig, resultado]
  );

  const gargaloMeta = gargalo ? AREA_META_MAP.get(gargalo.area) : null;

  const probTone =
    resultado.probabilidadeAprovacao >= 70
      ? {
          text: 'text-emerald-700 dark:text-emerald-400',
          stroke: 'stroke-emerald-500 dark:stroke-emerald-400',
          label: 'Favorável',
        }
      : resultado.probabilidadeAprovacao >= 40
      ? {
          text: 'text-amber-700 dark:text-amber-400',
          stroke: 'stroke-amber-500 dark:stroke-amber-400',
          label: 'Disputa',
        }
      : {
          text: 'text-red-700 dark:text-red-400',
          stroke: 'stroke-red-500 dark:stroke-red-400',
          label: 'Abaixo',
        };

  // Compact sidebar mode: crisp SVG radial ring with live approval percentage
  if (isCompact) {
    const size = 40;
    const strokeWidth = 3.2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset =
      circumference * (1 - Math.min(100, resultado.probabilidadeAprovacao) / 100);

    return (
      <div className="mb-2 flex justify-center">
        <button
          type="button"
          onClick={() => onRequestExpand?.()}
          title={`Radar de Estimativas · Chance de aprovação: ${resultado.probabilidadeAprovacao.toFixed(
            1
          )}% · Nota projetada: ${resultado.notaEstimada.toFixed(
            1
          )}% (IP 95%: ${resultado.ipDiaProva95[0].toFixed(
            0
          )}–${resultado.ipDiaProva95[1].toFixed(0)}%) · Corte: ${estimatorConfig.notaCorteMedia.toFixed(
            1
          )}%`}
          aria-label={`Chance estimada de aprovação: ${resultado.probabilidadeAprovacao.toFixed(
            0
          )}%. Expandir barra lateral para ver o Radar de Estimativas.`}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/75 bg-[#F6F8FC] hover:bg-[#E8F0FE] hover:border-[#1A56DB]/25 dark:border-white/[0.08] dark:bg-white/[0.04] dark:hover:bg-sky-500/15 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB]"
        >
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="-rotate-90"
            aria-hidden="true"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              className="stroke-slate-200 dark:stroke-slate-800"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className={cn('transition-all duration-500 ease-out', probTone.stroke)}
            />
          </svg>
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center font-mono text-[10px] font-bold tabular-nums',
              probTone.text
            )}
          >
            {Math.round(resultado.probabilidadeAprovacao)}%
          </span>
        </button>
      </div>
    );
  }

  // Pentagon SVG geometry for the 5 Grandes Áreas mini-radar
  const cx = 112;
  const cy = 78;
  const maxR = 46;
  const areaValues = resultado.detalhePorArea.map((d) => d.percentual);
  const cutoffValues = resultado.detalhePorArea.map(
    () => estimatorConfig.notaCorteMedia
  );
  const studentPolygon = buildPolygonPoints(cx, cy, maxR, areaValues);
  const cutoffPolygon = buildPolygonPoints(cx, cy, maxR, cutoffValues);

  return (
    <section
      aria-label="Radar rápido de estimativas e probabilidade de aprovação"
      className="mb-2.5 rounded-2xl border border-slate-200/65 bg-[#F6F8FC] p-3 dark:border-white/[0.06] dark:bg-white/[0.035]"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onOpenDashboard}
          className="flex items-center gap-1.5 min-w-0 text-left hover:opacity-80 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A56DB] rounded"
        >
          <Radar className="h-3.5 w-3.5 shrink-0 text-[#1A56DB] dark:text-sky-400" />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300 truncate">
            Radar de Estimativas
          </span>
        </button>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setShowRadarGraphic((v) => !v)}
            aria-expanded={showRadarGraphic}
            aria-label={
              showRadarGraphic
                ? 'Recolher gráfico radar'
                : 'Expandir gráfico radar'
            }
            title={showRadarGraphic ? 'Ocultar radar' : 'Mostrar radar'}
            className="inline-flex items-center justify-center rounded-md p-1 text-slate-500 hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-slate-100 transition-colors cursor-pointer"
          >
            <ChevronDown
              className={cn(
                'h-3.5 w-3.5 transition-transform duration-150',
                showRadarGraphic && 'rotate-180'
              )}
            />
          </button>
          <button
            type="button"
            onClick={onOpenDashboard}
            aria-label="Abrir painel completo de Desempenho"
            title="Abrir painel completo"
            className="inline-flex items-center justify-center rounded-md p-1 text-slate-500 hover:bg-slate-200/70 hover:text-[#1A56DB] dark:text-slate-400 dark:hover:bg-white/[0.08] dark:hover:text-sky-400 transition-colors cursor-pointer"
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Side-by-side Primary Readout: Approval Probability % + Projected Score */}
      <button
        type="button"
        onClick={onOpenDashboard}
        className="mt-2 grid w-full grid-cols-2 gap-2 border-b border-slate-200/75 pb-2.5 text-left dark:border-white/[0.07] cursor-pointer group"
      >
        <div className="min-w-0">
          <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
            Aprovação (corte {estimatorConfig.notaCorteMedia.toFixed(0)}%)
          </p>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span
              className={cn(
                'font-mono text-lg font-bold leading-none tabular-nums',
                probTone.text
              )}
            >
              {resultado.probabilidadeAprovacao.toFixed(1)}%
            </span>
            <span
              className={cn(
                'text-[10px] font-semibold truncate',
                probTone.text
              )}
            >
              {probTone.label}
            </span>
          </div>
        </div>

        <div className="min-w-0 border-l border-slate-200/75 pl-2.5 dark:border-white/[0.07]">
          <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 truncate">
            Nota Projetada
          </p>
          <div className="mt-0.5 flex items-baseline gap-1">
            <span className="font-mono text-lg font-bold leading-none tabular-nums text-slate-900 dark:text-white group-hover:text-[#1A56DB] dark:group-hover:text-sky-300 transition-colors">
              {resultado.notaEstimada.toFixed(1)}%
            </span>
          </div>
          <p className="mt-0.5 font-mono text-[10px] tabular-nums text-slate-500 dark:text-slate-400 truncate">
            IP {resultado.ipDiaProva95[0].toFixed(0)}–
            {resultado.ipDiaProva95[1].toFixed(0)}%
          </p>
        </div>
      </button>

      {/* Lightweight Interactive 5-Area SVG Radar Chart */}
      {showRadarGraphic && (
        <div className="pt-2">
          <svg
            viewBox="0 0 224 156"
            className="w-full h-[136px] overflow-visible select-none"
            role="img"
            aria-label="Gráfico radar das 5 grandes áreas comparado à nota de corte"
          >
            {/* Concentric pentagon reference rings (25%, 50%, 75%, 100%) */}
            {[25, 50, 75, 100].map((level) => (
              <polygon
                key={level}
                points={buildPolygonPoints(cx, cy, maxR, [
                  level,
                  level,
                  level,
                  level,
                  level,
                ])}
                fill="none"
                className="stroke-slate-200/90 dark:stroke-white/[0.09]"
                strokeWidth={level === 100 ? 1 : 0.75}
              />
            ))}

            {/* Axis spokes */}
            {resultado.detalhePorArea.map((row, idx) => {
              const end = polarToCartesian(cx, cy, maxR, idx, 5);
              return (
                <line
                  key={row.area}
                  x1={cx}
                  y1={cy}
                  x2={end.x}
                  y2={end.y}
                  className="stroke-slate-200/90 dark:stroke-white/[0.09]"
                  strokeWidth={0.75}
                />
              );
            })}

            {/* Cutoff Reference Pentagon (dashed emerald) */}
            <polygon
              points={cutoffPolygon}
              fill="none"
              className="stroke-emerald-600/80 dark:stroke-emerald-400/80"
              strokeWidth={1.2}
              strokeDasharray="3 2.5"
            />

            {/* Student Performance Pentagon */}
            <polygon
              points={studentPolygon}
              className="fill-[#1A56DB]/20 stroke-[#1A56DB] dark:fill-sky-400/20 dark:stroke-sky-400"
              strokeWidth={1.75}
              strokeLinejoin="round"
            />

            {/* Vertex Dots + Clickable Axis Labels with live % */}
            {resultado.detalhePorArea.map((row, idx) => {
              const dotPos = polarToCartesian(
                cx,
                cy,
                (Math.max(0, Math.min(100, row.percentual)) / 100) * maxR,
                idx,
                5
              );
              const labelPos = polarToCartesian(cx, cy, maxR + 17, idx, 5);
              const isWeakest = gargalo?.area === row.area;
              const textAnchor =
                idx === 0
                  ? 'middle'
                  : idx === 1 || idx === 2
                  ? 'start'
                  : 'end';
              const labelDx =
                idx === 0 ? 0 : idx === 1 || idx === 2 ? -2 : 2;
              const labelDy = idx === 0 ? -3 : idx === 2 || idx === 3 ? 6 : 2;

              return (
                <g
                  key={row.area}
                  onClick={() => onPracticeArea(row.area)}
                  className="cursor-pointer"
                >
                  <title>{`${AREA_META_MAP.get(row.area)?.name ?? row.area}: ${row.percentual.toFixed(1)}% (${row.acertos}/${row.total}) · Clique para praticar`}</title>
                  <circle
                    cx={dotPos.x}
                    cy={dotPos.y}
                    r={isWeakest ? 3.2 : 2.4}
                    className={cn(
                      isWeakest
                        ? 'fill-red-500 dark:fill-red-400'
                        : 'fill-[#1A56DB] dark:fill-sky-400'
                    )}
                  />
                  <text
                    x={labelPos.x + labelDx}
                    y={labelPos.y + labelDy}
                    textAnchor={textAnchor}
                    className={cn(
                      'text-[9.5px] font-semibold',
                      isWeakest
                        ? 'fill-red-700 dark:fill-red-400'
                        : 'fill-slate-600 dark:fill-slate-300'
                    )}
                  >
                    {SHORT_AXIS_LABELS[row.area]}{' '}
                    <tspan className="font-mono font-bold">
                      {Math.round(row.percentual)}%
                    </tspan>
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Compact Legend & Priority Bottleneck Quick Action */}
          <div className="mt-0.5 flex items-center justify-between gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <span className="truncate">
              Azul: você · Tracejado: corte {estimatorConfig.notaCorteMedia.toFixed(0)}%
            </span>
          </div>
        </div>
      )}

      {/* Priority Bottleneck Footer */}
      {gargalo && gargaloMeta && (
        <button
          type="button"
          onClick={() => onPracticeArea(gargalo.area)}
          className="mt-2 flex w-full items-center justify-between gap-2 rounded-lg border border-slate-200/75 bg-white/80 px-2.5 py-1.5 text-left text-[11px] hover:border-[#1A56DB]/35 hover:bg-white dark:border-white/[0.07] dark:bg-white/[0.03] dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
        >
          <span className="truncate text-slate-600 dark:text-slate-300">
            Gargalo:{' '}
            <strong className="font-semibold text-slate-900 dark:text-white">
              {gargaloMeta.shortName}
            </strong>{' '}
            <span className="font-mono tabular-nums text-red-600 dark:text-red-400">
              {gargalo.percentualAtual.toFixed(0)}%
            </span>
          </span>
          <span className="font-mono text-[10px] font-semibold tabular-nums text-emerald-700 dark:text-emerald-400 shrink-0">
            +5% → {gargalo.novaProbabilidadeAprovacao.toFixed(0)}%
          </span>
        </button>
      )}
    </section>
  );
}
