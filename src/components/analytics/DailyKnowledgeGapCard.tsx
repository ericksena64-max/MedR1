import React, { useMemo } from 'react';
import {
  AlertCircle,
  ArrowRight,
  Layers,
  Plus,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import type {
  Flashcard,
  GrandeAreaId,
  MedicalQuestion,
  UserAnswerRecord,
} from '../../types/medical';
import type { PerformanceRow } from './PerformanceDashboard';
import {
  getCardCurrentRetrievabilityPct,
  isCardDueToday,
} from '../../lib/srs';
import { normalizeMedicalText } from '../../lib/examWeights';
import { ClinicalMarkdown } from '../ui/ClinicalMarkdown';
import { cn } from '../../lib/utils';

interface DailyKnowledgeGapCardProps {
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  flashcards: Flashcard[];
  topicRows: PerformanceRow[];
  onFilterFlashcardsByTopic: (payload: {
    topicLabel: string;
    matchedTema?: string;
    grandeAreaId?: GrandeAreaId;
  }) => void;
  onCreateFlashcardFromQuestion: (question: MedicalQuestion) => void;
  onOpenQuestion: (questionId: string) => void;
  onGoToFlashcards: () => void;
}

interface PrioritySuggestion {
  key: string;
  kind: 'flashcard' | 'generate_from_error';
  grandeAreaId: GrandeAreaId;
  grandeArea: string;
  tema: string;
  title: string;
  reason: string;
  urgency: 'high' | 'medium';
  retrievabilityPct: number | null;
  dueToday: boolean;
  flashcard?: Flashcard;
  question?: MedicalQuestion;
}

function getLocalDateKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function isSameLocalDay(isoString: string, todayKey: string): boolean {
  const parsed = new Date(isoString);
  if (Number.isNaN(parsed.getTime())) return false;
  return getLocalDateKey(parsed) === todayKey;
}

export function DailyKnowledgeGapCard({
  questions,
  answers,
  flashcards,
  topicRows,
  onFilterFlashcardsByTopic,
  onCreateFlashcardFromQuestion,
  onOpenQuestion,
  onGoToFlashcards,
}: DailyKnowledgeGapCardProps) {
  const gapAnalysis = useMemo(() => {
    const todayKey = getLocalDateKey();
    const questionById = new Map(questions.map((q) => [q.id, q]));

    // All wrong answers sorted from most recent to oldest
    const recentWrongEntries = Object.values(answers)
      .filter((rec) => !rec.isCorrect && questionById.has(rec.questionId))
      .sort(
        (a, b) =>
          new Date(b.answeredAt).getTime() - new Date(a.answeredAt).getTime()
      )
      .map((rec) => ({
        record: rec,
        question: questionById.get(rec.questionId)!,
        isToday: isSameLocalDay(rec.answeredAt, todayKey),
      }));

    const todayWrong = recentWrongEntries.filter((e) => e.isToday);
    const activeWrongPool =
      todayWrong.length > 0 ? todayWrong : recentWrongEntries.slice(0, 8);

    // Count wrong topics to find primary gap
    const topicCounts = new Map<
      string,
      { tema: string; grandeArea: string; grandeAreaId: GrandeAreaId; count: number; latestTs: number }
    >();
    for (const item of activeWrongPool) {
      const key = normalizeMedicalText(item.question.tema);
      const ts = new Date(item.record.answeredAt).getTime() || 0;
      const prev = topicCounts.get(key);
      if (prev) {
        prev.count += 1;
        prev.latestTs = Math.max(prev.latestTs, ts);
      } else {
        topicCounts.set(key, {
          tema: item.question.tema,
          grandeArea: item.question.grandeArea,
          grandeAreaId: item.question.grandeAreaId,
          count: 1,
          latestTs: ts,
        });
      }
    }

    const sortedGapTopics = Array.from(topicCounts.values()).sort(
      (a, b) => b.count - a.count || b.latestTs - a.latestTs
    );

    const primaryGapTopic =
      sortedGapTopics[0]?.tema ??
      [...topicRows].sort((a, b) => a.delta - b.delta)[0]?.label ??
      null;

    // Build up to 3 priority flashcard suggestions
    const suggestions: PrioritySuggestion[] = [];
    const usedFlashcardIds = new Set<string>();
    const usedQuestionIds = new Set<string>();

    const cardByQuestionId = new Map<string, Flashcard>();
    for (const fc of flashcards) {
      if (fc.questionId && !cardByQuestionId.has(fc.questionId)) {
        cardByQuestionId.set(fc.questionId, fc);
      }
    }

    // Tier 1: Flashcards directly linked to the most recently missed questions
    for (const entry of activeWrongPool) {
      if (suggestions.length >= 3) break;
      const linkedCard = cardByQuestionId.get(entry.question.id);
      if (linkedCard && !usedFlashcardIds.has(linkedCard.id)) {
        usedFlashcardIds.add(linkedCard.id);
        usedQuestionIds.add(entry.question.id);
        suggestions.push({
          key: `fc-${linkedCard.id}`,
          kind: 'flashcard',
          grandeAreaId: linkedCard.grandeAreaId,
          grandeArea: linkedCard.grandeArea,
          tema: linkedCard.tema,
          title: linkedCard.front,
          reason: entry.isToday ? 'Erro de hoje' : 'Erro recente',
          urgency: 'high',
          retrievabilityPct: getCardCurrentRetrievabilityPct(linkedCard),
          dueToday: isCardDueToday(linkedCard),
          flashcard: linkedCard,
          question: entry.question,
        });
      }
    }

    // Tier 2: Existing flashcards matching the same tema / grandeArea of recent misses
    if (suggestions.length < 3 && activeWrongPool.length > 0) {
      const missedTemaSet = new Set(
        activeWrongPool.map((e) => normalizeMedicalText(e.question.tema))
      );
      const missedAreaSet = new Set(
        activeWrongPool.map((e) => e.question.grandeAreaId)
      );

      const relatedCards = flashcards
        .filter((fc) => !usedFlashcardIds.has(fc.id))
        .map((fc) => {
          const sameTema = missedTemaSet.has(normalizeMedicalText(fc.tema));
          const sameArea = missedAreaSet.has(fc.grandeAreaId);
          if (!sameTema && !sameArea) return null;
          const due = isCardDueToday(fc);
          const rPct = getCardCurrentRetrievabilityPct(fc) ?? 100;
          const score =
            (sameTema ? 100 : 40) +
            (due ? 35 : 0) +
            Math.min(25, fc.lapses * 5) +
            (100 - rPct) * 0.25;
          return { fc, sameTema, due, rPct, score };
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)
        .sort((a, b) => b.score - a.score);

      for (const item of relatedCards) {
        if (suggestions.length >= 3) break;
        usedFlashcardIds.add(item.fc.id);
        suggestions.push({
          key: `fc-${item.fc.id}`,
          kind: 'flashcard',
          grandeAreaId: item.fc.grandeAreaId,
          grandeArea: item.fc.grandeArea,
          tema: item.fc.tema,
          title: item.fc.front,
          reason: item.sameTema ? 'Mesmo tema do erro' : 'Mesma grande área',
          urgency: item.sameTema ? 'high' : 'medium',
          retrievabilityPct: getCardCurrentRetrievabilityPct(item.fc),
          dueToday: item.due,
          flashcard: item.fc,
        });
      }
    }

    // Tier 3: Recently missed questions that don't have a flashcard yet (1-click creation)
    if (suggestions.length < 3) {
      for (const entry of activeWrongPool) {
        if (suggestions.length >= 3) break;
        if (
          usedQuestionIds.has(entry.question.id) ||
          cardByQuestionId.has(entry.question.id)
        ) {
          continue;
        }
        usedQuestionIds.add(entry.question.id);
        suggestions.push({
          key: `gen-${entry.question.id}`,
          kind: 'generate_from_error',
          grandeAreaId: entry.question.grandeAreaId,
          grandeArea: entry.question.grandeArea,
          tema: entry.question.tema,
          title: entry.question.subtema
            ? `${entry.question.subtema}: ${entry.question.enunciado}`
            : entry.question.enunciado,
          reason: entry.isToday
            ? 'Erro de hoje · criar card'
            : 'Erro recente · criar card',
          urgency: 'high',
          retrievabilityPct: null,
          dueToday: true,
          question: entry.question,
        });
      }
    }

    // Tier 4: Fallback to top urgent FSRS flashcards (due today / Ponto de Atenção / lowest retrievability)
    if (suggestions.length < 3) {
      const attentionTemas = new Set(
        topicRows
          .filter((r) => r.status === 'Ponto de Atenção')
          .map((r) => normalizeMedicalText(r.label))
      );

      const fallbackCards = flashcards
        .filter((fc) => !usedFlashcardIds.has(fc.id))
        .map((fc) => {
          const due = isCardDueToday(fc);
          const inAttention = attentionTemas.has(normalizeMedicalText(fc.tema));
          const rPct = getCardCurrentRetrievabilityPct(fc) ?? 100;
          const score =
            (due ? 80 : 0) +
            (inAttention ? 50 : 0) +
            Math.min(30, fc.lapses * 6) +
            (100 - rPct) * 0.4;
          return { fc, due, inAttention, score };
        })
        .sort((a, b) => b.score - a.score);

      for (const item of fallbackCards) {
        if (suggestions.length >= 3) break;
        usedFlashcardIds.add(item.fc.id);
        suggestions.push({
          key: `fc-${item.fc.id}`,
          kind: 'flashcard',
          grandeAreaId: item.fc.grandeAreaId,
          grandeArea: item.fc.grandeArea,
          tema: item.fc.tema,
          title: item.fc.front,
          reason: item.inAttention
            ? 'Ponto de atenção'
            : item.due
            ? 'Vencido para hoje'
            : 'Reforço preventivo',
          urgency: item.inAttention || item.due ? 'medium' : 'medium',
          retrievabilityPct: getCardCurrentRetrievabilityPct(item.fc),
          dueToday: item.due,
          flashcard: item.fc,
        });
      }
    }

    return {
      todayErrorCount: todayWrong.length,
      totalRecentErrors: recentWrongEntries.length,
      primaryGapTopic,
      gapTopics: sortedGapTopics.slice(0, 3),
      suggestions,
    };
  }, [questions, answers, flashcards, topicRows]);

  const handleOpenSuggestion = (item: PrioritySuggestion) => {
    if (item.kind === 'generate_from_error' && item.question) {
      onCreateFlashcardFromQuestion(item.question);
    }
    onFilterFlashcardsByTopic({
      topicLabel: item.tema,
      matchedTema: item.tema,
      grandeAreaId: item.grandeAreaId,
    });
  };

  return (
    <section
      aria-label="Resumo da Lacuna de Conhecimento do dia e flashcards prioritários"
      className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 space-y-4"
    >
      {/* Compact Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div
            className={cn(
              'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
              gapAnalysis.todayErrorCount > 0
                ? 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-400'
                : 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400'
            )}
          >
            {gapAnalysis.todayErrorCount > 0 ? (
              <AlertCircle className="h-4 w-4" />
            ) : (
              <CheckCircle2 className="h-4 w-4" />
            )}
          </div>

          <div className="min-w-0 space-y-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <h2 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Lacuna de Conhecimento do Dia
              </h2>
              {gapAnalysis.todayErrorCount > 0 ? (
                <span className="font-mono text-xs font-semibold tabular-nums text-amber-700 dark:text-amber-400">
                  {gapAnalysis.todayErrorCount}{' '}
                  {gapAnalysis.todayErrorCount === 1
                    ? 'erro hoje'
                    : 'erros hoje'}
                </span>
              ) : gapAnalysis.totalRecentErrors > 0 ? (
                <span className="font-mono text-xs font-medium tabular-nums text-slate-500 dark:text-slate-400">
                  0 erros hoje · {gapAnalysis.totalRecentErrors} recentes no histórico
                </span>
              ) : (
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Sem erros recentes
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {gapAnalysis.gapTopics.length > 0 ? (
                <>
                  Maior concentração de falhas em{' '}
                  <strong className="font-semibold text-slate-800 dark:text-slate-200">
                    {gapAnalysis.gapTopics.map((t) => t.tema).join(', ')}
                  </strong>
                  . Priorize estes 3 flashcards para fechar a lacuna antes da próxima sessão:
                </>
              ) : gapAnalysis.primaryGapTopic ? (
                <>
                  Nenhum erro registrado hoje. Foco sugerido em{' '}
                  <strong className="font-semibold text-slate-800 dark:text-slate-200">
                    {gapAnalysis.primaryGapTopic}
                  </strong>{' '}
                  com base no seu desempenho frente à mediana:
                </>
              ) : (
                <>
                  Responda questões no banco para detectar lacunas automaticamente ou revise estes 3 flashcards prioritários:
                </>
              )}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onGoToFlashcards}
          className="inline-flex items-center gap-1.5 self-start sm:self-center text-xs font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300 transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <Layers className="h-3.5 w-3.5" />
          <span>Ver baralho completo</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* 3 Priority Flashcard Suggestions */}
      {gapAnalysis.suggestions.length === 0 ? (
        <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50/70 px-4 py-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
          Nenhum flashcard disponível ainda. Crie flashcards a partir das questões erradas para receber sugestões diárias aqui.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {gapAnalysis.suggestions.map((item, idx) => (
            <div
              key={item.key}
              className="flex flex-col justify-between gap-3 rounded-lg border border-slate-200/90 bg-slate-50/60 p-3.5 dark:border-slate-800 dark:bg-slate-950/50 hover:border-sky-300/80 dark:hover:border-sky-800/80 transition-colors"
            >
              <div className="space-y-1.5 min-w-0">
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="font-mono font-bold tabular-nums text-sky-700 dark:text-sky-400">
                      0{idx + 1}
                    </span>
                    <span className="truncate font-semibold text-slate-800 dark:text-slate-200">
                      {item.tema}
                    </span>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 font-medium whitespace-nowrap',
                      item.urgency === 'high'
                        ? 'text-amber-700 dark:text-amber-400'
                        : 'text-slate-500 dark:text-slate-400'
                    )}
                  >
                    {item.reason}
                  </span>
                </div>

                <div className="text-xs text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  <ClinicalMarkdown
                    content={item.title}
                    inline
                    className="text-slate-700 dark:text-slate-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200/70 dark:border-slate-800/80 text-[11px]">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-mono tabular-nums min-w-0">
                  {item.dueToday ? (
                    <span className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-sans font-medium">
                      <Clock className="h-3 w-3 shrink-0" />
                      <span>Vencido</span>
                    </span>
                  ) : item.retrievabilityPct !== null ? (
                    <span>R {item.retrievabilityPct}%</span>
                  ) : (
                    <span className="font-sans">Novo</span>
                  )}
                  {item.question && (
                    <button
                      type="button"
                      onClick={() => onOpenQuestion(item.question!.id)}
                      className="font-sans text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 underline underline-offset-2 cursor-pointer truncate"
                    >
                      Ver questão
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenSuggestion(item)}
                  className="inline-flex items-center gap-1 font-semibold text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-200 transition-colors cursor-pointer shrink-0"
                >
                  {item.kind === 'generate_from_error' ? (
                    <>
                      <Plus className="h-3 w-3" />
                      <span>Criar e revisar</span>
                    </>
                  ) : (
                    <>
                      <span>Revisar</span>
                      <ArrowRight className="h-3 w-3" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
