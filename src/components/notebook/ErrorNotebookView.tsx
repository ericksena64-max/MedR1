import React, { useMemo, useState } from 'react';
import {
  Bookmark,
  XCircle,
  ArrowRight,
  CheckCircle2,
  BookOpenCheck,
  Layers,
  Check,
  Search,
} from 'lucide-react';
import type { MedicalQuestion, UserAnswerRecord } from '../../types/medical';
import { Button } from '../ui/Button';
import { Switch } from '../ui/Switch';
import { VirtualList } from '../ui/VirtualList';
import { cn } from '../../lib/utils';

interface ErrorNotebookViewProps {
  questions: MedicalQuestion[];
  answers: Record<string, UserAnswerRecord>;
  bookmarks: string[];
  flashcardQuestionIds: Set<string>;
  autoCreateFlashcardsOnError: boolean;
  onToggleAutoCreate: (enabled: boolean) => void;
  onGenerateFlashcards: (questions: MedicalQuestion[]) => number;
  onCreateSingleFlashcard: (question: MedicalQuestion) => void;
  onToggleBookmark: (id: string) => void;
  onOpenQuestion: (questionId: string) => void;
  onLaunchErrorReview: () => void;
  onGoToFlashcards: () => void;
}

export function ErrorNotebookView({
  questions,
  answers,
  bookmarks,
  flashcardQuestionIds,
  autoCreateFlashcardsOnError,
  onToggleAutoCreate,
  onGenerateFlashcards,
  onCreateSingleFlashcard,
  onToggleBookmark,
  onOpenQuestion,
  onLaunchErrorReview,
  onGoToFlashcards,
}: ErrorNotebookViewProps) {
  const [generatedFeedback, setGeneratedFeedback] = useState<number | null>(null);
  const [notebookFilter, setNotebookFilter] = useState<'todos' | 'erradas' | 'favoritadas'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = useMemo(() => {
    const qNorm = searchQuery.trim().toLowerCase();
    return questions.filter((q) => {
      const ans = answers[q.id];
      const isBookmarked = bookmarks.includes(q.id);
      const wasMissed = Boolean(ans && !ans.isCorrect);

      if (notebookFilter === 'erradas' && !wasMissed) return false;
      if (notebookFilter === 'favoritadas' && !isBookmarked) return false;

      if (qNorm) {
        const hay = `${q.instituicao} ${q.ano} ${q.grandeArea} ${q.tema} ${q.enunciado}`.toLowerCase();
        if (!hay.includes(qNorm)) return false;
      }
      return true;
    });
  }, [questions, answers, bookmarks, notebookFilter, searchQuery]);

  const pendingForFlashcards = questions.filter(
    (q) => !flashcardQuestionIds.has(q.id)
  );

  const handleBulkGenerate = () => {
    const count = onGenerateFlashcards(pendingForFlashcards);
    if (count > 0) {
      setGeneratedFeedback(count);
      window.setTimeout(() => setGeneratedFeedback(null), 4000);
    }
  };

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Caderno de Erros e Questões Favoritadas
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Todas as questões que você errou ou salvou ficam reunidas aqui e podem virar flashcards SRS em um clique.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Button
              variant="outline"
              size="md"
              disabled={pendingForFlashcards.length === 0}
              onClick={handleBulkGenerate}
            >
              <Layers className="h-4 w-4" />
              <span>
                {pendingForFlashcards.length > 0
                  ? `Gerar Flashcards (${pendingForFlashcards.length})`
                  : 'Todos já são Flashcards'}
              </span>
            </Button>

            <Button
              variant="primary"
              size="md"
              disabled={questions.length === 0}
              onClick={onLaunchErrorReview}
            >
              <BookOpenCheck className="h-4 w-4" />
              <span>Revisar lista ({questions.length})</span>
            </Button>
          </div>
        </div>

        {/* Automation setting + feedback */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <Switch
              id="auto-srs-on-error"
              checked={autoCreateFlashcardsOnError}
              onCheckedChange={onToggleAutoCreate}
              label="Gerar flashcard automaticamente sempre que eu errar uma questão"
            />
          </div>

          {generatedFeedback !== null && (
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircle2 className="h-4 w-4" />
              <span>
                {generatedFeedback}{' '}
                {generatedFeedback === 1
                  ? 'flashcard criado'
                  : 'flashcards criados'}{' '}
                para revisão hoje.
              </span>
              <button
                type="button"
                onClick={onGoToFlashcards}
                className="underline hover:text-emerald-800 dark:hover:text-emerald-300 cursor-pointer"
              >
                Abrir Flashcards
              </button>
            </div>
          )}
        </div>
        {/* Search + Segmented Control (Todos | Erradas | Favoritadas) */}
        {questions.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="inline-flex rounded-lg bg-[#E5E5EA]/70 p-1 dark:bg-slate-800 self-start">
              {(
                [
                  { id: 'todos', label: `Todos (${questions.length})` },
                  { id: 'erradas', label: 'Erradas' },
                  { id: 'favoritadas', label: 'Favoritadas' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setNotebookFilter(tab.id)}
                  className={cn(
                    'rounded-md px-3 py-1 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap tabular-nums',
                    notebookFilter === tab.id
                      ? 'bg-white text-[#1D1D1F] shadow-xs dark:bg-slate-950 dark:text-white'
                      : 'text-[#86868B] hover:text-[#1D1D1F] dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar no caderno (tema, banca, texto)..."
                aria-label="Buscar no caderno de erros"
                className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-8 pr-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#007AFF] focus:outline-none dark:border-white/10 dark:bg-[#0B0F17] dark:text-slate-100"
              />
            </div>
          </div>
        )}
      </div>

      {questions.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="font-display text-base font-semibold text-slate-900 dark:text-white">
            Seu Caderno de Erros está limpo
          </p>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Salve questões difíceis durante o estudo ou responda questões no banco para montar automaticamente sua fila de revisão e flashcards SRS.
          </p>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Nenhuma questão encontrada para este filtro.
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
          <VirtualList
            items={filteredQuestions}
            getItemKey={(q) => q.id}
            estimateSize={108}
            ariaLabel="Lista de questões do Caderno de Erros"
            renderItem={(q) => {
              const ans = answers[q.id];
              const isBookmarked = bookmarks.includes(q.id);
              const wasMissed = ans && !ans.isCorrect;
              const hasCard = flashcardQuestionIds.has(q.id);

              return (
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="min-w-0 space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">
                        {q.instituicao} {q.ano}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{q.grandeArea}</span>
                      <span aria-hidden="true">/</span>
                      <span>{q.tema}</span>
                      <span aria-hidden="true">·</span>
                      {wasMissed ? (
                        <span className="inline-flex items-center gap-1 font-medium text-red-700 dark:text-red-400">
                          <XCircle className="h-3.5 w-3.5" />
                          <span>Errada (marcou {ans.selectedLetter})</span>
                        </span>
                      ) : ans?.isCorrect ? (
                        <span className="inline-flex items-center gap-1 font-medium text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          <span>Acertada · Favoritada</span>
                        </span>
                      ) : (
                        <span className="font-medium text-sky-700 dark:text-sky-400">
                          Salva para revisão
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2 max-w-[75ch]">
                      {q.enunciado}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {hasCard ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={onGoToFlashcards}
                        className="text-emerald-700 dark:text-emerald-400"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>No baralho SRS</span>
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => onCreateSingleFlashcard(q)}
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>Criar Flashcard</span>
                      </Button>
                    )}

                    {isBookmarked && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onToggleBookmark(q.id)}
                        title="Remover dos favoritos"
                      >
                        <Bookmark className="h-4 w-4 fill-sky-600 text-sky-600 dark:fill-sky-400 dark:text-sky-400" />
                      </Button>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenQuestion(q.id)}
                    >
                      <span>Abrir questão</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
