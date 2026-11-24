import React, { useMemo, useRef, useState } from 'react';
import {
  Upload,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Download,
  Trash2,
  ChevronDown,
  ChevronUp,
  BookOpen,
  BarChart3,
  Database,
  FileSpreadsheet,
  Loader2,
  X,
} from 'lucide-react';
import type {
  AlternativeLetter,
  ExamType,
  GrandeAreaId,
  MedicalQuestion,
} from '../../types/medical';
import { GRANDES_AREAS, REGIOES_BRASIL } from '../../data/taxonomy';
import {
  convertRawToMedR1Question,
  downloadImportTemplate,
  exportQuestionsAsJsonl,
  parseStructuredImportFile,
  type RawStructuredQuestion,
} from '../../lib/questionBankStore';
import { PARETO_MIN_QUESTIONS } from '../../lib/paretoCalculator';
import { Button } from '../ui/Button';
import { Select } from '../ui/Select';
import { Switch } from '../ui/Switch';
import { ClinicalMarkdown } from '../ui/ClinicalMarkdown';
import { VirtualList } from '../ui/VirtualList';
import { cn } from '../../lib/utils';

interface QuestionImporterViewProps {
  allQuestions: MedicalQuestion[];
  importedQuestions: MedicalQuestion[];
  onSaveImportedQuestions: (items: MedicalQuestion[]) => Promise<number>;
  onDeleteBatch: (batchKey: string) => Promise<void>;
  onClearAllImported: () => Promise<void>;
  onOpenExamInBank: (instituicao: string, ano: number) => void;
  onGoToPerformance: () => void;
}

type ImporterSubTab = 'pdf_ia' | 'lote_estruturado' | 'gerenciar';

const UEPA_YEARS = [2025, 2024, 2023, 2022, 2021, 2020];

const RANGE_PRESETS: Array<{ label: string; from: number; to: number }> = [
  { label: '1–15', from: 1, to: 15 },
  { label: '16–30', from: 16, to: 30 },
  { label: '31–45', from: 31, to: 45 },
  { label: '46–60', from: 46, to: 60 },
  { label: '61–75', from: 61, to: 75 },
  { label: '76–90', from: 76, to: 90 },
  { label: '91–100', from: 91, to: 100 },
];

const EXAM_TYPE_OPTIONS: Array<{ value: ExamType; label: string }> = [
  { value: 'Acesso Direto', label: 'Acesso Direto' },
  { value: 'R+', label: 'R+ (Especialidades)' },
  { value: 'Revalida', label: 'Revalida' },
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      const commaIdx = result.indexOf(',');
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = () => reject(new Error('Falha ao ler o arquivo selecionado.'));
    reader.readAsDataURL(file);
  });
}

function fileToText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(new Error('Falha ao ler texto do arquivo.'));
    reader.readAsText(file, 'utf-8');
  });
}

export function QuestionImporterView({
  allQuestions,
  importedQuestions,
  onSaveImportedQuestions,
  onDeleteBatch,
  onClearAllImported,
  onOpenExamInBank,
  onGoToPerformance,
}: QuestionImporterViewProps) {
  const [subTab, setSubTab] = useState<ImporterSubTab>('pdf_ia');

  // Exam metadata (pre-configured for UEPA, editable for any Brazilian residency exam)
  const [instituicao, setInstituicao] = useState('UEPA');
  const [banca, setBanca] = useState('UEPA');
  const [estado, setEstado] = useState('PA');
  const [regiao, setRegiao] = useState('Norte');
  const [ano, setAno] = useState<number>(2025);
  const [tipoProva, setTipoProva] = useState<ExamType>('Acesso Direto');

  // Mode 1: PDF / Text + Answer Key
  const [examPdfFile, setExamPdfFile] = useState<File | null>(null);
  const [answerKeyFile, setAnswerKeyFile] = useState<File | null>(null);
  const [examText, setExamText] = useState('');
  const [answerKeyText, setAnswerKeyText] = useState('');
  const [rangeFrom, setRangeFrom] = useState(1);
  const [rangeTo, setRangeTo] = useState(15);
  const [generateComments, setGenerateComments] = useState(true);

  // Mode 2: Bulk JSON/JSONL/CSV
  const [structuredFileName, setStructuredFileName] = useState('');
  const [parsedStructured, setParsedStructured] = useState<RawStructuredQuestion[]>([]);
  const [structuredErrors, setStructuredErrors] = useState<string[]>([]);
  const [batchProgress, setBatchProgress] = useState<{
    current: number;
    total: number;
  } | null>(null);
  const cancelBatchRef = useRef(false);

  // Shared Processing & Staging Queue
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [stagedQuestions, setStagedQuestions] = useState<MedicalQuestion[]>([]);
  const [expandedStagedIds, setExpandedStagedIds] = useState<Set<string>>(new Set());
  const [saveSuccess, setSaveSuccess] = useState<{
    count: number;
    instituicao: string;
    ano: number;
  } | null>(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);

  const uepaCount = useMemo(
    () =>
      allQuestions.filter(
        (q) =>
          q.instituicao.toUpperCase().includes('UEPA') ||
          q.banca.toUpperCase().includes('UEPA')
      ).length,
    [allQuestions]
  );

  const importedBatches = useMemo(() => {
    const map = new Map<
      string,
      {
        key: string;
        instituicao: string;
        banca: string;
        ano: number;
        tipoProva: ExamType;
        questions: MedicalQuestion[];
        byArea: Record<string, number>;
      }
    >();

    for (const q of importedQuestions) {
      const key = q.sourceBatch || `${q.instituicao} ${q.ano}`;
      const existing = map.get(key);
      if (existing) {
        existing.questions.push(q);
        existing.byArea[q.grandeArea] = (existing.byArea[q.grandeArea] ?? 0) + 1;
      } else {
        map.set(key, {
          key,
          instituicao: q.instituicao,
          banca: q.banca,
          ano: q.ano,
          tipoProva: q.tipoProva,
          questions: [q],
          byArea: { [q.grandeArea]: 1 },
        });
      }
    }

    return Array.from(map.values()).sort((a, b) => {
      if (b.ano !== a.ano) return b.ano - a.ano;
      return a.instituicao.localeCompare(b.instituicao, 'pt-BR');
    });
  }, [importedQuestions]);

  const applyUepaPreset = (targetYear: number) => {
    setInstituicao('UEPA');
    setBanca('UEPA');
    setEstado('PA');
    setRegiao('Norte');
    setAno(targetYear);
    setTipoProva('Acesso Direto');
  };

  const handleExtractFromPdfOrText = async () => {
    setErrorMessage(null);
    setWarnings([]);
    setSaveSuccess(null);

    if (!examPdfFile && !examText.trim()) {
      setErrorMessage(
        'Selecione o PDF da prova (ex.: UEPA 2025) ou cole o texto das questões antes de processar.'
      );
      return;
    }

    if (examPdfFile && examPdfFile.size > 18 * 1024 * 1024) {
      setErrorMessage('O PDF da prova ultrapassa 18 MB. Comprima o arquivo ou divida por caderno.');
      return;
    }

    setIsProcessing(true);
    try {
      const payload: Record<string, unknown> = {
        instituicao: instituicao.trim() || 'UEPA',
        banca: banca.trim() || instituicao.trim() || 'UEPA',
        estado: estado.trim() || 'PA',
        regiao,
        ano,
        tipoProva,
        questionRange: {
          from: Math.max(1, rangeFrom),
          to: Math.max(rangeFrom, rangeTo),
        },
        generateComments,
      };

      if (examPdfFile) {
        payload.examPdfBase64 = await fileToBase64(examPdfFile);
        payload.examPdfMimeType = 'application/pdf';
      }
      if (examText.trim()) {
        payload.examText = examText.trim();
      }

      if (answerKeyFile) {
        if (answerKeyFile.type === 'application/pdf' || answerKeyFile.name.toLowerCase().endsWith('.pdf')) {
          payload.answerKeyPdfBase64 = await fileToBase64(answerKeyFile);
        } else {
          const fileTxt = await fileToText(answerKeyFile);
          payload.answerKeyText = [answerKeyText.trim(), fileTxt.trim()]
            .filter(Boolean)
            .join('\n');
        }
      } else if (answerKeyText.trim()) {
        payload.answerKeyText = answerKeyText.trim();
      }

      const res = await fetch('/api/import/extract-exam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as {
        questions?: MedicalQuestion[];
        warnings?: string[];
        error?: string;
      };

      if (!res.ok) {
        throw new Error(data.error || `Falha no servidor (HTTP ${res.status}).`);
      }

      const extracted = Array.isArray(data.questions) ? data.questions : [];
      if (extracted.length === 0) {
        setErrorMessage(
          'Nenhuma questão foi identificada nesse intervalo. Verifique se os números (De/Até) correspondem ao PDF enviado.'
        );
      } else {
        setStagedQuestions((prev) => [...extracted, ...prev]);
        setExpandedStagedIds(new Set([extracted[0].id]));
      }

      if (Array.isArray(data.warnings) && data.warnings.length > 0) {
        setWarnings(data.warnings);
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Erro inesperado ao processar o arquivo.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStructuredFileChange = async (file: File | null) => {
    setErrorMessage(null);
    setStructuredErrors([]);
    setParsedStructured([]);
    setStructuredFileName('');
    if (!file) return;

    try {
      const content = await fileToText(file);
      const result = parseStructuredImportFile(file.name, content);
      setStructuredFileName(file.name);
      setParsedStructured(result.items);
      setStructuredErrors(result.errors);
      if (result.items.length === 0 && result.errors.length === 0) {
        setStructuredErrors(['Nenhuma questão válida encontrada neste arquivo.']);
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Não foi possível ler o arquivo estruturado.'
      );
    }
  };

  const handleEnrichStructuredWithAi = async () => {
    if (parsedStructured.length === 0) return;
    setErrorMessage(null);
    setWarnings([]);
    setSaveSuccess(null);
    setIsProcessing(true);
    cancelBatchRef.current = false;

    const BATCH_SIZE = 5;
    const total = parsedStructured.length;
    const enrichedAll: MedicalQuestion[] = [];
    const collectedWarnings: string[] = [];

    try {
      for (let offset = 0; offset < total; offset += BATCH_SIZE) {
        if (cancelBatchRef.current) break;
        const slice = parsedStructured.slice(offset, offset + BATCH_SIZE);
        setBatchProgress({
          current: Math.min(offset + slice.length, total),
          total,
        });

        const res = await fetch('/api/import/enrich-batch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questions: slice,
            instituicao: slice[0]?.instituicao || instituicao,
            banca: slice[0]?.banca || banca,
            estado: slice[0]?.estado || estado,
            regiao: slice[0]?.regiao || regiao,
            ano: slice[0]?.ano || ano,
            tipoProva: slice[0]?.tipoProva || tipoProva,
          }),
        });

        const data = (await res.json().catch(() => ({}))) as {
          questions?: MedicalQuestion[];
          warnings?: string[];
          error?: string;
        };

        if (!res.ok) {
          throw new Error(
            data.error || `Erro ao processar lote ${offset + 1}–${offset + slice.length}.`
          );
        }

        if (Array.isArray(data.questions)) {
          enrichedAll.push(...data.questions);
        }
        if (Array.isArray(data.warnings)) {
          collectedWarnings.push(...data.warnings);
        }
      }

      if (enrichedAll.length > 0) {
        setStagedQuestions((prev) => [...enrichedAll, ...prev]);
        setExpandedStagedIds(new Set([enrichedAll[0].id]));
      }
      if (collectedWarnings.length > 0) {
        setWarnings(collectedWarnings);
      }
    } catch (err) {
      if (enrichedAll.length > 0) {
        setStagedQuestions((prev) => [...enrichedAll, ...prev]);
      }
      setErrorMessage(
        err instanceof Error
          ? `${err.message}${enrichedAll.length > 0 ? ` (${enrichedAll.length} questões anteriores já estão na fila de revisão abaixo.)` : ''}`
          : 'Erro ao enriquecer o lote com IA.'
      );
    } finally {
      setIsProcessing(false);
      setBatchProgress(null);
    }
  };

  const handleStageStructuredWithoutAi = () => {
    if (parsedStructured.length === 0) return;
    const converted = parsedStructured.map((raw) =>
      convertRawToMedR1Question(raw, {
        instituicao: instituicao.trim() || 'UEPA',
        banca: banca.trim() || instituicao.trim() || 'UEPA',
        estado: estado.trim() || 'PA',
        regiao,
        ano,
        tipoProva,
      })
    );
    setStagedQuestions((prev) => [...converted, ...prev]);
    if (converted[0]) {
      setExpandedStagedIds(new Set([converted[0].id]));
    }
  };

  const updateStagedField = <K extends keyof MedicalQuestion>(
    id: string,
    field: K,
    value: MedicalQuestion[K]
  ) => {
    setStagedQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        if (field === 'grandeAreaId') {
          const areaObj = GRANDES_AREAS.find((a) => a.id === value);
          return {
            ...q,
            grandeAreaId: value as GrandeAreaId,
            grandeArea: areaObj?.name ?? q.grandeArea,
          };
        }
        return { ...q, [field]: value };
      })
    );
  };

  const removeStagedQuestion = (id: string) => {
    setStagedQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const toggleExpandStaged = (id: string) => {
    setExpandedStagedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleCommitStagedToBank = async () => {
    if (stagedQuestions.length === 0) return;
    const first = stagedQuestions[0];
    const savedCount = await onSaveImportedQuestions(stagedQuestions);
    setSaveSuccess({
      count: savedCount,
      instituicao: first.instituicao,
      ano: first.ano,
    });
    setStagedQuestions([]);
    setExpandedStagedIds(new Set());
  };

  return (
    <div className="space-y-6">
      {/* KPI Overview Strip */}
      <section
        aria-label="Resumo do banco de questões e cobertura UEPA"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Total no Banco MedR1
          </p>
          <p className="mt-1.5 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
            {allQuestions.length}
          </p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Ativas nos filtros, Pareto e FSRS
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Questões Importadas (IndexedDB)
          </p>
          <p className="mt-1.5 font-mono text-2xl font-bold tabular-nums text-sky-600 dark:text-sky-400">
            {importedQuestions.length}
          </p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Armazenamento local escalável + JSONL
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Cobertura UEPA (Pareto 80/20)
          </p>
          <p
            className={cn(
              'mt-1.5 font-mono text-2xl font-bold tabular-nums',
              uepaCount >= PARETO_MIN_QUESTIONS
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-amber-600 dark:text-amber-400'
            )}
          >
            {uepaCount} questões
          </p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            {uepaCount >= PARETO_MIN_QUESTIONS
              ? 'Pareto UEPA calculado em dados reais'
              : `Faltam ${PARETO_MIN_QUESTIONS - uepaCount}q para ativar Pareto real UEPA`}
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Provas Importadas
          </p>
          <p className="mt-1.5 font-mono text-2xl font-bold tabular-nums text-slate-900 dark:text-white">
            {importedBatches.length}
          </p>
          <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
            Prontas para estudo e exportação SQL
          </p>
        </div>
      </section>

      {/* Main Importer Workspace Card */}
      <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
        {/* Sub-tab Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <div>
            <h2 className="font-display text-base font-bold text-slate-900 dark:text-white">
              Importador &amp; Classificador IA de Provas
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Extraia questões de PDFs da UEPA (ou lotes JSONL/CSV), classifique em Grande Área/Tema/Subtema e gere comentários completos no padrão MedR1.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Modos de importação"
            className="inline-flex rounded-lg bg-slate-100 p-0.5 dark:bg-slate-800 self-start shrink-0"
          >
            {(
              [
                { id: 'pdf_ia', label: 'PDF / Texto + Gabarito', icon: FileText },
                { id: 'lote_estruturado', label: 'Lote JSON / CSV', icon: FileSpreadsheet },
                {
                  id: 'gerenciar',
                  label: `Banco Importado (${importedQuestions.length})`,
                  icon: Database,
                },
              ] as const
            ).map((tab) => {
              const Icon = tab.icon;
              const active = subTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSubTab(tab.id)}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap',
                    active
                      ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Shared Exam Metadata Header (for PDF & Structured tabs) */}
        {subTab !== 'gerenciar' && (
          <div className="border-b border-slate-100 bg-slate-50/60 px-5 py-4 dark:border-slate-800/80 dark:bg-slate-950/40 space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                Metadados da Prova (atalho UEPA últimos 6 anos):
              </span>
              <div className="flex flex-wrap items-center gap-1.5">
                {UEPA_YEARS.map((yr) => {
                  const isSelectedPreset = instituicao === 'UEPA' && ano === yr;
                  return (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => applyUepaPreset(yr)}
                      className={cn(
                        'rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-colors cursor-pointer tabular-nums',
                        isSelectedPreset
                          ? 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950'
                          : 'bg-white border border-slate-200 text-slate-600 hover:border-sky-400 hover:text-sky-700 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                      )}
                    >
                      UEPA {yr}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="imp-instituicao"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Instituição
                </label>
                <input
                  id="imp-instituicao"
                  type="text"
                  value={instituicao}
                  onChange={(e) => setInstituicao(e.target.value)}
                  placeholder="Ex.: UEPA"
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="imp-banca"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Banca
                </label>
                <input
                  id="imp-banca"
                  type="text"
                  value={banca}
                  onChange={(e) => setBanca(e.target.value)}
                  placeholder="Ex.: UEPA"
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="imp-ano"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  Ano
                </label>
                <input
                  id="imp-ano"
                  type="number"
                  min={1995}
                  max={2035}
                  value={ano}
                  onChange={(e) => setAno(Number(e.target.value) || 2025)}
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 font-mono text-xs tabular-nums text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="imp-estado"
                  className="text-xs font-medium text-slate-600 dark:text-slate-400"
                >
                  UF
                </label>
                <input
                  id="imp-estado"
                  type="text"
                  maxLength={4}
                  value={estado}
                  onChange={(e) => setEstado(e.target.value.toUpperCase())}
                  placeholder="PA"
                  className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 font-mono text-xs text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <Select
                id="imp-regiao"
                label="Região"
                value={regiao}
                options={REGIOES_BRASIL.map((r) => ({ value: r, label: r }))}
                onChange={setRegiao}
              />

              <Select
                id="imp-tipo"
                label="Tipo de Prova"
                value={tipoProva}
                options={EXAM_TYPE_OPTIONS}
                onChange={(v) => setTipoProva(v as ExamType)}
              />
            </div>
          </div>
        )}

        {/* SUB-TAB 1: PDF / TEXT + ANSWER KEY */}
        {subTab === 'pdf_ia' && (
          <div className="p-5 sm:p-6 space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Upload Exam PDF */}
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-700 dark:bg-slate-950/40 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      1. PDF da Prova ({instituicao} {ano})
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Envie o caderno oficial em PDF (até 18 MB). A IA lê o PDF nativamente.
                    </p>
                  </div>
                  <Upload className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                    <FileText className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400" />
                    <span>{examPdfFile ? 'Trocar PDF da Prova' : 'Selecionar PDF da Prova'}</span>
                    <input
                      type="file"
                      accept="application/pdf,.pdf"
                      className="sr-only"
                      onChange={(e) => setExamPdfFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {examPdfFile && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      <span className="truncate max-w-[200px]">{examPdfFile.name}</span>
                      <span className="font-mono text-[11px] text-slate-400">
                        ({(examPdfFile.size / (1024 * 1024)).toFixed(1)} MB)
                      </span>
                      <button
                        type="button"
                        onClick={() => setExamPdfFile(null)}
                        aria-label="Remover PDF da prova"
                        className="text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="imp-exam-text"
                    className="text-[11px] font-medium text-slate-500 dark:text-slate-400"
                  >
                    Ou cole o texto das questões (opcional se enviou PDF):
                  </label>
                  <textarea
                    id="imp-exam-text"
                    rows={4}
                    value={examText}
                    onChange={(e) => setExamText(e.target.value)}
                    placeholder="Cole aqui enunciados e alternativas A–E caso prefira importar sem PDF..."
                    className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Upload Answer Key PDF / Text */}
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/50 p-4 dark:border-slate-700 dark:bg-slate-950/40 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      2. Gabarito Oficial (PDF, TXT ou colado)
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      A IA cruza cada número de questão com o gabarito definitivo e marca anuladas.
                    </p>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                    <Upload className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>
                      {answerKeyFile ? 'Trocar arquivo do Gabarito' : 'Anexar Gabarito (PDF/TXT)'}
                    </span>
                    <input
                      type="file"
                      accept="application/pdf,.pdf,.txt,.csv"
                      className="sr-only"
                      onChange={(e) => setAnswerKeyFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                  {answerKeyFile && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                      <span className="truncate max-w-[200px]">{answerKeyFile.name}</span>
                      <button
                        type="button"
                        onClick={() => setAnswerKeyFile(null)}
                        aria-label="Remover arquivo de gabarito"
                        className="text-slate-400 hover:text-red-500 cursor-pointer"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="imp-answer-text"
                    className="text-[11px] font-medium text-slate-500 dark:text-slate-400"
                  >
                    Ou cole o gabarito aqui (ex.: 1-A, 2-C, 3-ANULADA, 4-E...):
                  </label>
                  <textarea
                    id="imp-answer-text"
                    rows={4}
                    value={answerKeyText}
                    onChange={(e) => setAnswerKeyText(e.target.value)}
                    placeholder="Ex.: 01-A  02-D  03-B  04-C  05-E  06-ANULADA..."
                    className="w-full rounded-lg border border-slate-200 bg-white p-2.5 font-mono text-xs text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Range Selector (Crucial for 100-question residency exams) + Action Bar */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/50 space-y-3">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    Bloco de Questões por Chamada (recomendado: 10 a 15 questões por bloco para comentários profundos)
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {RANGE_PRESETS.map((preset) => {
                      const active = rangeFrom === preset.from && rangeTo === preset.to;
                      return (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => {
                            setRangeFrom(preset.from);
                            setRangeTo(preset.to);
                          }}
                          className={cn(
                            'rounded-md px-2 py-1 font-mono text-[11px] font-semibold transition-colors cursor-pointer tabular-nums',
                            active
                              ? 'bg-slate-900 text-white dark:bg-sky-500 dark:text-slate-950'
                              : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300'
                          )}
                        >
                          Q{preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <label className="text-xs text-slate-500 dark:text-slate-400" htmlFor="imp-range-from">
                    De
                  </label>
                  <input
                    id="imp-range-from"
                    type="number"
                    min={1}
                    max={200}
                    value={rangeFrom}
                    onChange={(e) => setRangeFrom(Math.max(1, Number(e.target.value) || 1))}
                    className="h-8 w-16 rounded-lg border border-slate-200 bg-white px-2 text-center font-mono text-xs tabular-nums dark:border-slate-700 dark:bg-slate-900"
                  />
                  <label className="text-xs text-slate-500 dark:text-slate-400" htmlFor="imp-range-to">
                    até
                  </label>
                  <input
                    id="imp-range-to"
                    type="number"
                    min={1}
                    max={200}
                    value={rangeTo}
                    onChange={(e) =>
                      setRangeTo(Math.max(rangeFrom, Math.min(rangeFrom + 29, Number(e.target.value) || rangeFrom)))
                    }
                    className="h-8 w-16 rounded-lg border border-slate-200 bg-white px-2 text-center font-mono text-xs tabular-nums dark:border-slate-700 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-200/80 dark:border-slate-800">
                <Switch
                  id="toggle-ai-comments"
                  checked={generateComments}
                  onCheckedChange={setGenerateComments}
                  label="Gerar comentário completo + alternativa por alternativa + referências com IA"
                />

                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  disabled={isProcessing}
                  onClick={handleExtractFromPdfOrText}
                  className="shrink-0"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Extraindo Q{rangeFrom}–Q{rangeTo} com IA...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Extrair, Classificar e Comentar (Q{rangeFrom}–Q{rangeTo})</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: STRUCTURED BULK JSON / JSONL / CSV */}
        {subTab === 'lote_estruturado' && (
          <div className="p-5 sm:p-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Formato Recomendado para Escala Comercial (80k–100k questões): JSONL / JSON / CSV
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Baixe o modelo pronto no padrão UEPA, preencha enunciados + alternativas + gabarito e deixe a IA classificar Grande Área, Tema, Subtema e redigir os comentários automaticamente.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => downloadImportTemplate('json')}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Modelo JSON (UEPA)</span>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => downloadImportTemplate('csv')}
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Modelo CSV (Planilha)</span>
                </Button>
              </div>
            </div>

            {/* File Picker */}
            <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700 space-y-3">
              <FileSpreadsheet className="mx-auto h-7 w-7 text-sky-600 dark:text-sky-400" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {structuredFileName
                    ? `Arquivo carregado: ${structuredFileName}`
                    : 'Selecione um arquivo .json, .jsonl ou .csv'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Aceita questões cruas (somente enunciado + alternativas + gabarito) ou já comentadas.
                </p>
              </div>

              <label className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 cursor-pointer dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
                <Upload className="h-3.5 w-3.5" />
                <span>Escolher arquivo JSON / JSONL / CSV</span>
                <input
                  type="file"
                  accept=".json,.jsonl,.ndjson,.csv,application/json,text/csv"
                  className="sr-only"
                  onChange={(e) => handleStructuredFileChange(e.target.files?.[0] ?? null)}
                />
              </label>
            </div>

            {structuredErrors.length > 0 && (
              <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-300 space-y-1">
                <p className="font-semibold">Avisos de leitura do arquivo:</p>
                <ul className="list-disc pl-4 space-y-0.5">
                  {structuredErrors.slice(0, 6).map((err, i) => (
                    <li key={i}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {parsedStructured.length > 0 && (
              <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-800 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs space-y-0.5">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      <span className="font-mono tabular-nums">{parsedStructured.length}</span>{' '}
                      {parsedStructured.length === 1 ? 'questão lida' : 'questões lidas'} do arquivo
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                      <span className="font-mono tabular-nums">
                        {parsedStructured.filter((i) => i.needsAiEnrichment).length}
                      </span>{' '}
                      precisam de classificação e/ou comentário completo da IA.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={isProcessing}
                      onClick={handleStageStructuredWithoutAi}
                    >
                      <span>Revisar sem chamar IA</span>
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      disabled={isProcessing}
                      onClick={handleEnrichStructuredWithAi}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>
                            Processando {batchProgress?.current ?? 0}/{batchProgress?.total ?? parsedStructured.length}...
                          </span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Classificar e Comentar Lote com IA</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {batchProgress && (
                  <div className="space-y-1.5 pt-1">
                    <div className="flex items-center justify-between text-[11px] font-mono tabular-nums text-slate-500 dark:text-slate-400">
                      <span>
                        Enriquecendo lote com IA ({batchProgress.current} de {batchProgress.total})
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          cancelBatchRef.current = true;
                        }}
                        className="font-sans text-red-600 hover:underline cursor-pointer"
                      >
                        Interromper após este lote
                      </button>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-sky-600 dark:bg-sky-400 transition-all duration-300"
                        style={{
                          width: `${Math.round((batchProgress.current / batchProgress.total) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 3: MANAGE IMPORTED BANK & EXPORT */}
        {subTab === 'gerenciar' && (
          <div className="p-5 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Todas as provas abaixo estão salvas localmente em IndexedDB e já alimentam o Banco de Questões, Filtros, Pareto 80/20, Mapa de Calor e FSRS.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={importedQuestions.length === 0}
                  onClick={() =>
                    exportQuestionsAsJsonl(
                      importedQuestions,
                      `medr1_importadas_${new Date().toISOString().slice(0, 10)}.jsonl`
                    )
                  }
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Exportar tudo (.jsonl)</span>
                </Button>

                {importedQuestions.length > 0 &&
                  (confirmClearAll ? (
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1 dark:border-red-900 dark:bg-red-950/40">
                      <span className="text-xs font-medium text-red-700 dark:text-red-300">
                        Apagar todas?
                      </span>
                      <button
                        type="button"
                        onClick={async () => {
                          await onClearAllImported();
                          setConfirmClearAll(false);
                        }}
                        className="rounded bg-red-600 px-2 py-0.5 text-[11px] font-semibold text-white hover:bg-red-700 cursor-pointer"
                      >
                        Confirmar
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmClearAll(false)}
                        className="text-[11px] text-slate-600 hover:underline dark:text-slate-300 cursor-pointer"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setConfirmClearAll(true)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Limpar importações</span>
                    </Button>
                  ))}
              </div>
            </div>

            {importedBatches.length === 0 ? (
              <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-10 text-center dark:border-slate-800 dark:bg-slate-950/30 space-y-2">
                <Database className="mx-auto h-7 w-7 text-slate-400" />
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Nenhuma prova importada ainda
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Comece enviando o PDF de uma prova da UEPA (2020–2025) na aba &ldquo;PDF / Texto + Gabarito&rdquo; ou importe um arquivo estruturado em JSON/CSV.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
                {importedBatches.map((batch) => (
                  <div
                    key={batch.key}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                          {batch.key}
                        </h3>
                        <span className="font-mono text-xs font-semibold tabular-nums text-sky-700 dark:text-sky-400">
                          {batch.questions.length}{' '}
                          {batch.questions.length === 1 ? 'questão' : 'questões'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {Object.entries(batch.byArea)
                          .map(([area, count]) => `${area}: ${count}`)
                          .join(' · ')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <Button
                        type="button"
                        variant="primary"
                        size="sm"
                        onClick={() => onOpenExamInBank(batch.instituicao, batch.ano)}
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        <span>Estudar Prova</span>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          exportQuestionsAsJsonl(
                            batch.questions,
                            `${batch.instituicao.toLowerCase()}_${batch.ano}.jsonl`
                          )
                        }
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>JSONL</span>
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => onDeleteBatch(batch.key)}
                        aria-label={`Remover lote ${batch.key}`}
                        className="text-red-600 hover:text-red-700 dark:text-red-400"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Error / Warning / Save Success Banners */}
      {errorMessage && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50/80 p-4 text-xs text-red-800 dark:border-red-900/70 dark:bg-red-950/30 dark:text-red-300"
        >
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{errorMessage}</p>
        </div>
      )}

      {warnings.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/25 dark:text-amber-300 space-y-1">
          <p className="font-semibold">Observações da extração IA:</p>
          <ul className="list-disc pl-4 space-y-0.5">
            {warnings.map((w, idx) => (
              <li key={idx}>{w}</li>
            ))}
          </ul>
        </div>
      )}

      {saveSuccess && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900/70 dark:bg-emerald-950/30">
          <div className="flex items-start gap-2.5 text-xs text-emerald-900 dark:text-emerald-200">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <p className="font-semibold">
                {saveSuccess.count}{' '}
                {saveSuccess.count === 1 ? 'questão salva' : 'questões salvas'} no Banco MedR1 ({saveSuccess.instituicao}{' '}
                {saveSuccess.ano})!
              </p>
              <p className="text-emerald-800/80 dark:text-emerald-300/80 mt-0.5">
                Os filtros da barra lateral, o Gráfico de Pareto 80/20, o Mapa de Calor e a calibração FSRS já foram recalculados automaticamente.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={() => onOpenExamInBank(saveSuccess.instituicao, saveSuccess.ano)}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Estudar agora</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onGoToPerformance}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Ver Pareto</span>
            </Button>
          </div>
        </div>
      )}

      {/* PRE-IMPORT REVIEW & EDITING QUEUE */}
      {stagedQuestions.length > 0 && (
        <section
          aria-label="Fila de revisão de questões processadas pela IA"
          className="rounded-xl border border-sky-200 bg-white dark:border-sky-900/60 dark:bg-slate-900 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 bg-sky-50/50 px-5 py-4 dark:border-slate-800 dark:bg-sky-950/25">
            <div>
              <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                Revisão Pré-Importação ({stagedQuestions.length}{' '}
                {stagedQuestions.length === 1 ? 'questão pronta' : 'questões prontas'})
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Confira ou ajuste Grande Área, Tema, Subtema e Gabarito antes de salvar no banco principal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  exportQuestionsAsJsonl(
                    stagedQuestions,
                    `revisao_${instituicao.toLowerCase()}_${ano}.jsonl`
                  )
                }
              >
                <Download className="h-3.5 w-3.5" />
                <span>Baixar JSONL</span>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setStagedQuestions([])}
                className="text-red-600 dark:text-red-400"
              >
                <span>Descartar fila</span>
              </Button>
              <Button
                type="button"
                variant="primary"
                size="sm"
                onClick={handleCommitStagedToBank}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>Salvar {stagedQuestions.length} no Banco MedR1</span>
              </Button>
            </div>
          </div>

          <VirtualList
            items={stagedQuestions}
            getItemKey={(q) => q.id}
            estimateSize={96}
            className="max-h-[76vh]"
            ariaLabel="Fila de revisão das questões importadas"
            renderItem={(q) => {
              const isOpen = expandedStagedIds.has(q.id);
              return (
                <article className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => toggleExpandStaged(q.id)}
                      className="flex-1 text-left space-y-1 cursor-pointer min-w-0"
                    >
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs">
                        <span className="font-mono font-bold text-slate-900 dark:text-white">
                          {q.code}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="font-semibold text-sky-700 dark:text-sky-400">
                          {q.grandeArea}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {q.tema}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">›</span>
                        <span className="text-slate-500 dark:text-slate-400">{q.subtema}</span>
                        <span className="text-slate-300 dark:text-slate-700">·</span>
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">
                          Gab: {q.gabaritoOficial}
                        </span>
                        {q.anulada && (
                          <span className="font-mono font-bold text-red-600 dark:text-red-400">
                            [ANULADA]
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                        {q.enunciado}
                      </p>
                    </button>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => toggleExpandStaged(q.id)}
                        aria-label={isOpen ? 'Recolher revisão' : 'Expandir revisão'}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                      >
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => removeStagedQuestion(q.id)}
                        aria-label="Remover questão da fila"
                        className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/40 cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-4">
                      {/* Quick Taxonomy & Answer Key Editors */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <Select
                          id={`edit-area-${q.id}`}
                          label="Grande Área"
                          value={q.grandeAreaId}
                          options={GRANDES_AREAS.map((a) => ({ value: a.id, label: a.name }))}
                          onChange={(val) =>
                            updateStagedField(q.id, 'grandeAreaId', val as GrandeAreaId)
                          }
                        />
                        <div className="space-y-1">
                          <label
                            htmlFor={`edit-tema-${q.id}`}
                            className="text-xs font-medium text-slate-600 dark:text-slate-400"
                          >
                            Tema (Pareto / Heatmap)
                          </label>
                          <input
                            id={`edit-tema-${q.id}`}
                            type="text"
                            value={q.tema}
                            onChange={(e) => updateStagedField(q.id, 'tema', e.target.value)}
                            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                          />
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor={`edit-subtema-${q.id}`}
                            className="text-xs font-medium text-slate-600 dark:text-slate-400"
                          >
                            Subtema
                          </label>
                          <input
                            id={`edit-subtema-${q.id}`}
                            type="text"
                            value={q.subtema}
                            onChange={(e) => updateStagedField(q.id, 'subtema', e.target.value)}
                            className="h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                          />
                        </div>
                        <Select
                          id={`edit-gab-${q.id}`}
                          label="Gabarito Oficial"
                          value={q.gabaritoOficial}
                          options={q.alternativas.map((a) => ({
                            value: a.letter,
                            label: `Alternativa ${a.letter}`,
                          }))}
                          onChange={(val) =>
                            updateStagedField(q.id, 'gabaritoOficial', val as AlternativeLetter)
                          }
                        />
                      </div>

                      {/* Full Stem */}
                      <div className="space-y-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Enunciado
                        </p>
                        <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                          {q.enunciado}
                        </p>
                      </div>

                      {/* Alternatives + AI Commentaries */}
                      <div className="space-y-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Alternativas e Comentários Individuais
                        </p>
                        {q.alternativas.map((alt) => {
                          const isCorrect = alt.letter === q.gabaritoOficial;
                          return (
                            <div
                              key={alt.letter}
                              className={cn(
                                'rounded-lg border p-3 text-xs space-y-1',
                                isCorrect
                                  ? 'border-emerald-200 bg-emerald-50/40 dark:border-emerald-900/60 dark:bg-emerald-950/20'
                                  : 'border-slate-200 bg-slate-50/40 dark:border-slate-800 dark:bg-slate-950/30'
                              )}
                            >
                              <p className="font-medium text-slate-900 dark:text-slate-100">
                                <span className="font-mono font-bold mr-1.5">
                                  ({alt.letter})
                                </span>
                                {alt.text}
                              </p>
                              <ClinicalMarkdown
                                content={alt.explanation}
                                compact
                                className="text-xs text-slate-600 dark:text-slate-400"
                              />
                            </div>
                          );
                        })}
                      </div>

                      {/* Editable Comentário Geral (Markdown + KaTeX) */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor={`edit-comentario-${q.id}`}
                          className="text-[11px] font-semibold uppercase tracking-wide text-slate-400"
                        >
                          Comentário Geral (editável · suporta Markdown e LaTeX $...$)
                        </label>
                        <textarea
                          id={`edit-comentario-${q.id}`}
                          rows={3}
                          value={q.comentarioGeral}
                          onChange={(e) =>
                            updateStagedField(q.id, 'comentarioGeral', e.target.value)
                          }
                          className="w-full rounded-lg border border-slate-200 bg-white p-2.5 text-xs leading-relaxed text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                        />
                        {q.comentarioGeral.trim() && (
                          <div className="rounded-lg border border-slate-200/80 bg-slate-50/70 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/50">
                            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                              Pré-visualização renderizada
                            </p>
                            <ClinicalMarkdown
                              content={q.comentarioGeral}
                              compact
                              className="text-xs"
                            />
                          </div>
                        )}
                      </div>

                      {/* References */}
                      {q.referencias.length > 0 && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          <span className="font-semibold">Referências: </span>
                          {q.referencias.join(' · ')}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            }}
          />
        </section>
      )}
    </div>
  );
}
