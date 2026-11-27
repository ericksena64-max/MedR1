import React, { useEffect, useRef, useState } from 'react';
import {
  ZoomIn,
  ZoomOut,
  X,
  Contrast,
  RotateCcw,
  ImageOff,
  SunMoon,
  Move,
} from 'lucide-react';
import {
  TransformWrapper,
  TransformComponent,
  MiniMap,
  type ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch';
import 'react-zoom-pan-pinch/dist/styles.css';
import type { ClinicalImage } from '../../types/medical';
import { resolveClinicalAssetUrl } from '../../lib/assetUrl';
import { cn } from '../../lib/utils';

interface ClinicalImageViewerProps {
  image: ClinicalImage;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_PRESETS = [1, 2, 3, 5] as const;

export function ClinicalImageViewer({ image }: ClinicalImageViewerProps) {
  const resolvedImageUrl = resolveClinicalAssetUrl(image.url);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [invertColors, setInvertColors] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const transformRef = useRef<ReactZoomPanPinchRef | null>(null);
  const scaleLabelRef = useRef<HTMLSpanElement | null>(null);
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const currentScaleRef = useRef<number>(1);

  const syncScaleDom = (nextScale: number) => {
    currentScaleRef.current = nextScale;
    const pct = Math.round(nextScale * 100);
    if (scaleLabelRef.current) {
      scaleLabelRef.current.textContent = `${pct}%`;
    }
    if (sliderRef.current) {
      sliderRef.current.value = nextScale.toFixed(2);
    }
    const zoomedNow = nextScale > 1.05;
    setIsZoomed((prev) => (prev === zoomedNow ? prev : zoomedNow));
  };

  const handleOpen = () => {
    currentScaleRef.current = 1;
    setIsZoomed(false);
    setHighContrast(false);
    setInvertColors(false);
    setLightboxOpen(true);
  };

  const handleFullReset = () => {
    transformRef.current?.resetTransform(240, 'easeOutCubic');
    syncScaleDom(1);
    setHighContrast(false);
    setInvertColors(false);
  };

  // Lock page scroll & handle lightbox keyboard shortcuts without leaking to QuestionCard
  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.dataset.medr1ModalOpen = 'true';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setLightboxOpen(false);
        return;
      }

      if (e.key === '0') {
        e.preventDefault();
        e.stopPropagation();
        transformRef.current?.resetTransform(240, 'easeOutCubic');
        syncScaleDom(1);
        setHighContrast(false);
        setInvertColors(false);
        return;
      }

      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        e.stopPropagation();
        transformRef.current?.zoomIn(0.45, 220, 'easeOutCubic');
        return;
      }

      if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        e.stopPropagation();
        transformRef.current?.zoomOut(0.45, 220, 'easeOutCubic');
        return;
      }

      // Pan image with arrow keys instead of navigating to prev/next question
      if (
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowRight' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowDown'
      ) {
        e.preventDefault();
        e.stopPropagation();
        const step = 80;
        if (e.key === 'ArrowLeft') transformRef.current?.panBy(step, 0, 180, 'easeOutCubic');
        if (e.key === 'ArrowRight') transformRef.current?.panBy(-step, 0, 180, 'easeOutCubic');
        if (e.key === 'ArrowUp') transformRef.current?.panBy(0, step, 180, 'easeOutCubic');
        if (e.key === 'ArrowDown') transformRef.current?.panBy(0, -step, 180, 'easeOutCubic');
        return;
      }

      // Block A-E, Enter, Space and other shortcuts from leaking to QuestionCard underneath
      if (!e.metaKey && !e.ctrlKey && !e.altKey) {
        e.stopPropagation();
        if (e.key === 'Enter' || e.key === ' ' || /^[a-eA-E]$/.test(e.key)) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, [lightboxOpen]);

  if (loadError) {
    return (
      <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center dark:border-slate-800 dark:bg-slate-900">
        <ImageOff className="mx-auto mb-2 h-6 w-6 text-slate-400" />
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
          {image.modality}
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {image.caption}
        </p>
      </div>
    );
  }

  const imageFilter = [
    highContrast ? 'contrast(1.35) brightness(1.06)' : '',
    invertColors ? 'invert(1)' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <figure className="my-6 overflow-hidden rounded-xl border border-black/10 bg-slate-950 dark:border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-300">
          <span className="font-medium">{image.modality}</span>
          <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-sky-300 transition-colors hover:bg-slate-800 hover:text-sky-200 cursor-pointer"
          >
            <ZoomIn size={15} strokeWidth={1.5} />
            <span>Ampliar exame</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleOpen}
          className="group relative block w-full overflow-hidden bg-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] cursor-zoom-in"
          aria-label={`Ampliar ${image.modality}`}
        >
          <img
            src={resolvedImageUrl}
            alt={image.caption}
            referrerPolicy="no-referrer"
            onError={() => setLoadError(true)}
            className={cn(
              'mx-auto w-full object-contain',
              image.aspectRatio === '1:1' ? 'max-h-[360px]' : 'max-h-[380px]'
            )}
          />
        </button>

        <figcaption className="border-t border-black/5 bg-[#F5F5F7] px-4 py-3 text-xs leading-relaxed text-[#86868B] dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-400">
          {image.caption}
        </figcaption>
      </figure>

      {/* Fullscreen PACS-style Silky Zoom/Pan/Pinch Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-slate-950/96 text-slate-100 select-none"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualizador ampliado: ${image.modality}`}
        >
          <TransformWrapper
            ref={transformRef}
            initialScale={1}
            minScale={MIN_SCALE}
            maxScale={MAX_SCALE}
            centerOnInit
            centerZoomedOut
            limitToBounds
            smooth
            wheel={{ step: 0.14 }}
            pinch={{ step: 5, allowPanning: true }}
            doubleClick={{
              mode: 'toggle',
              step: 1.8,
              animationTime: 260,
              animationType: 'easeOutCubic',
            }}
            zoomAnimation={{
              animationTime: 220,
              animationType: 'easeOutCubic',
            }}
            autoAlignment={{
              animationTime: 240,
              velocityAlignmentTime: 320,
              animationType: 'easeOutCubic',
            }}
            panning={{
              velocityDisabled: false,
              allowLeftClickPan: true,
              allowMiddleClickPan: true,
            }}
            velocityAnimation={{
              disabled: false,
              sensitivityMouse: 1,
              sensitivityTouch: 1,
              inertia: 0.92,
              animationTime: 380,
              maxAnimationTime: 520,
              animationType: 'easeOutQuart',
            }}
            onTransform={(_ref, state) => {
              syncScaleDom(state.scale);
            }}
          >
            {({ zoomIn, zoomOut, centerView }) => (
              <>
                {/* Top PACS Control Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/90 px-4 sm:px-6 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white truncate">
                      {image.modality}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {image.caption}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
                    {/* Zoom Out / Continuous Slider / Readout / Zoom In */}
                    <div className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => zoomOut(0.45, 220, 'easeOutCubic')}
                        aria-label="Reduzir zoom"
                        title="Reduzir zoom (-)"
                        className="rounded-md p-1 text-slate-200 hover:bg-slate-800 cursor-pointer"
                      >
                        <ZoomOut className="h-4 w-4" />
                      </button>

                      <input
                        ref={sliderRef}
                        type="range"
                        min={MIN_SCALE}
                        max={MAX_SCALE}
                        step={0.05}
                        defaultValue={1}
                        aria-label="Nível de zoom do exame"
                        onChange={(e) => {
                          const next = Number(e.target.value);
                          if (Number.isFinite(next)) {
                            centerView(next, 0);
                            syncScaleDom(next);
                          }
                        }}
                        className="hidden sm:block w-24 accent-sky-400 cursor-pointer"
                      />

                      <span
                        ref={scaleLabelRef}
                        className="min-w-[44px] text-center font-mono text-xs font-semibold tabular-nums text-slate-100"
                      >
                        100%
                      </span>

                      <button
                        type="button"
                        onClick={() => zoomIn(0.45, 220, 'easeOutCubic')}
                        aria-label="Aumentar zoom"
                        title="Aumentar zoom (+)"
                        className="rounded-md p-1 text-slate-200 hover:bg-slate-800 cursor-pointer"
                      >
                        <ZoomIn className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Quick Zoom Presets */}
                    <div className="hidden lg:inline-flex items-center rounded-lg border border-slate-800 bg-slate-900/90 p-0.5">
                      {ZOOM_PRESETS.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            centerView(preset, 240, 'easeOutCubic');
                            syncScaleDom(preset);
                          }}
                          className="rounded-md px-2 py-1 font-mono text-[11px] font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer tabular-nums"
                        >
                          {preset}x
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setHighContrast((c) => !c)}
                      aria-pressed={highContrast}
                      title="Ajustar contraste radiológico"
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium cursor-pointer transition-colors',
                        highContrast
                          ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                          : 'border-slate-700 text-slate-200 hover:bg-slate-800'
                      )}
                    >
                      <Contrast size={16} strokeWidth={1.5} />
                      <span className="hidden sm:inline">Contraste</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInvertColors((inv) => !inv)}
                      aria-pressed={invertColors}
                      title="Inverter tons (modo negativo para radiografia / TC)"
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium cursor-pointer transition-colors',
                        invertColors
                          ? 'border-sky-500 bg-sky-500/20 text-sky-300'
                          : 'border-slate-700 text-slate-200 hover:bg-slate-800'
                      )}
                    >
                      <SunMoon size={16} strokeWidth={1.5} />
                      <span className="hidden md:inline">Inverter</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleFullReset}
                      aria-label="Resetar visualização"
                      title="Resetar zoom e filtros (0)"
                      className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <RotateCcw size={16} strokeWidth={1.5} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setLightboxOpen(false)}
                      aria-label="Fechar visualizador"
                      title="Fechar (Esc)"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-2 text-xs font-medium text-white hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <X size={16} strokeWidth={1.5} />
                      <span className="hidden sm:inline">Fechar</span>
                    </button>
                  </div>
                </div>

                {/* Main Smooth Interactive Canvas */}
                <div
                  className={cn(
                    'relative flex-1 overflow-hidden touch-none',
                    isZoomed
                      ? 'cursor-grab active:cursor-grabbing'
                      : 'cursor-zoom-in'
                  )}
                >
                  <TransformComponent
                    wrapperStyle={{
                      width: '100%',
                      height: '100%',
                    }}
                    contentStyle={{
                      willChange: 'transform',
                    }}
                  >
                    <img
                      src={resolvedImageUrl}
                      alt={image.caption}
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onLoad={() => {
                        transformRef.current?.centerView(1, 0);
                      }}
                      style={{
                        filter: imageFilter || undefined,
                      }}
                      className="block max-h-[82vh] max-w-[92vw] rounded-lg object-contain select-none"
                    />
                  </TransformComponent>

                  {/* Interactive MiniMap Navigator (appears smoothly when zoomed in) */}
                  {isZoomed && (
                    <div className="hidden sm:block absolute bottom-4 right-4 z-20 overflow-hidden rounded-lg border border-slate-700/90 bg-slate-950/90 p-1 shadow-xl">
                      <MiniMap
                        width={148}
                        height={96}
                        borderColor="#38BDF8"
                        maskColor="rgba(2, 6, 23, 0.55)"
                        panning
                        zoomable
                      >
                        <img
                          src={resolvedImageUrl}
                          alt=""
                          aria-hidden="true"
                          referrerPolicy="no-referrer"
                          style={{
                            filter: imageFilter || undefined,
                          }}
                          className="h-full w-full object-contain"
                        />
                      </MiniMap>
                    </div>
                  )}
                </div>

                {/* Footer Shortcut Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800/80 bg-slate-950 px-4 sm:px-6 py-2.5 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Move size={15} strokeWidth={1.5} className="text-slate-500" />
                    <span>
                      Scroll ou pinça para zoom · Arraste para mover · Duplo clique alterna zoom
                    </span>
                  </span>
                  <div className="inline-flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <kbd className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-slate-200">+</kbd>
                      <kbd className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-slate-200">-</kbd>
                      <span>zoom</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <kbd className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-slate-200">0</kbd>
                      <span>reset</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <kbd className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 text-slate-200">Esc</kbd>
                      <span>fechar</span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      )}
    </>
  );
}
