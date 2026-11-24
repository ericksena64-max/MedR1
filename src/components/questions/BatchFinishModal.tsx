import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertTriangle, BarChart3, X } from 'lucide-react';

export interface BatchFinishSummary {
  answeredCount: number;
  totalCount: number;
  unansweredCount: number;
  isIncomplete: boolean;
  mode: 'estudo' | 'simulado';
}

export function buildBatchFinishSummary(
  answeredCount: number,
  totalCount: number,
  mode: 'estudo' | 'simulado'
): BatchFinishSummary {
  const safeTotal = Math.max(0, Math.round(totalCount));
  const safeAnswered = Math.max(0, Math.min(safeTotal, Math.round(answeredCount)));
  const unansweredCount = Math.max(0, safeTotal - safeAnswered);
  return {
    answeredCount: safeAnswered,
    totalCount: safeTotal,
    unansweredCount,
    isIncomplete: unansweredCount > 0,
    mode,
  };
}

interface BatchFinishModalProps {
  summary: BatchFinishSummary | null;
  onClose: () => void;
  onGoToHome: () => void;
}

export function BatchFinishModal({
  summary,
  onClose,
  onGoToHome,
}: BatchFinishModalProps) {
  useEffect(() => {
    if (!summary) return;
    document.body.dataset.medr1ModalOpen = 'true';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      delete document.body.dataset.medr1ModalOpen;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [summary, onClose]);

  return (
    <AnimatePresence>
      {summary && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Lote finalizado"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-6 shadow-xl dark:border-white/[0.08] dark:bg-[#1B1F27] space-y-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12 text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 size={20} strokeWidth={1.5} />
                </span>
                <div>
                  <h2 className="text-base font-semibold text-[#1D1D1F] dark:text-white">
                    {summary.mode === 'simulado' ? 'Simulado finalizado' : 'Lote finalizado'}
                  </h2>
                  <p className="mt-0.5 font-mono text-xs tabular-nums text-[#86868B] dark:text-slate-400">
                    {summary.answeredCount}/{summary.totalCount} respondidas
                    {summary.unansweredCount > 0
                      ? ` · ${summary.unansweredCount} ${
                          summary.unansweredCount === 1 ? 'pendente' : 'pendentes'
                        }`
                      : ' · Lote completo'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar aviso"
                className="rounded-lg p-1.5 text-[#86868B] hover:bg-black/5 hover:text-[#1D1D1F] dark:hover:bg-white/10 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Main Confirmation Message */}
            <p className="text-sm leading-relaxed text-[#1D1D1F] dark:text-slate-200">
              Desempenho carregado na estatística — a partir de agora sabemos mais sobre você e recomendaremos aquilo que mais faz subir sua nota.
            </p>

            {/* Conditional Incomplete Batch Warning */}
            {summary.isIncomplete && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl bg-[#FF3B30]/10 px-4 py-3 text-xs font-medium text-[#D70015] dark:bg-red-500/15 dark:text-red-300"
              >
                <AlertTriangle size={16} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p>As questões não respondidas não entraram na estatística :(</p>
                  <p className="font-mono text-[11px] font-normal tabular-nums opacity-90">
                    {summary.answeredCount} de {summary.totalCount} contabilizadas ({summary.unansweredCount}{' '}
                    {summary.unansweredCount === 1 ? 'não respondida' : 'não respondidas'}).
                  </p>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#1D1D1F] hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={onGoToHome}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#007AFF] px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-[#0066D6] transition-colors cursor-pointer"
              >
                <BarChart3 size={15} strokeWidth={1.5} />
                <span>Ir para Home · Desempenho</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
