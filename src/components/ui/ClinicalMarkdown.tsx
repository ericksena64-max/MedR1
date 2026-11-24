import React from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { cn } from '../../lib/utils';

interface ClinicalMarkdownProps {
  content: string;
  className?: string;
  compact?: boolean;
  readingComfort?: boolean;
  /**
   * When true, collapses block margins for single-line / line-clamped previews
   * (e.g. Flashcards deck table rows) while preserving bold/italic/KaTeX rendering.
   */
  inline?: boolean;
}

const REMARK_PLUGINS = [remarkGfm, remarkMath];
const REHYPE_PLUGINS = [rehypeKatex];

/**
 * Safe clinical commentary & flashcard Markdown renderer with GFM tables and KaTeX math.
 * Raw HTML is intentionally NOT enabled (no rehype-raw) to prevent XSS.
 */
export function ClinicalMarkdown({
  content,
  className,
  compact = false,
  readingComfort = false,
  inline = false,
}: ClinicalMarkdownProps) {
  if (!content) return null;

  const components: Components = inline
    ? {
        p: ({ children }) => <span className="inline">{children} </span>,
        strong: ({ children }) => (
          <strong className="font-semibold text-slate-900 dark:text-slate-100">
            {children}
          </strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        ul: ({ children }) => <span className="inline">{children}</span>,
        ol: ({ children }) => <span className="inline">{children}</span>,
        li: ({ children }) => <span className="inline">· {children} </span>,
        code: ({ children }) => (
          <code className="rounded bg-slate-200/60 px-1 py-0.5 font-mono text-[0.9em] text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            {children}
          </code>
        ),
        table: () => null,
        blockquote: ({ children }) => <span className="inline">{children}</span>,
        br: () => <span> </span>,
      }
    : {
        h3: ({ children }) => (
          <h3 className="mt-4 mb-1.5 first:mt-0 font-display text-sm sm:text-[15px] font-bold text-slate-900 dark:text-white">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="mt-3 mb-1 first:mt-0 font-display text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
            {children}
          </h4>
        ),
        p: ({ children }) => (
          <p
            className={cn(
              'first:mt-0 last:mb-0',
              compact ? 'my-1.5' : 'my-2.5'
            )}
          >
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-slate-900 dark:text-white">
            {children}
          </strong>
        ),
        em: ({ children }) => <em className="italic">{children}</em>,
        ul: ({ children }) => (
          <ul
            className={cn(
              'list-disc pl-5 first:mt-0 last:mb-0',
              compact ? 'my-1.5 space-y-1' : 'my-2.5 space-y-1.5'
            )}
          >
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol
            className={cn(
              'list-decimal pl-5 first:mt-0 last:mb-0',
              compact ? 'my-1.5 space-y-1' : 'my-2.5 space-y-1.5'
            )}
          >
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="marker:text-slate-400 dark:marker:text-slate-500 [&>p]:my-0.5">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-3 rounded-r-lg border-l-2 border-sky-500/80 bg-sky-50/55 px-3.5 py-2.5 text-slate-700 dark:border-sky-400/70 dark:bg-sky-950/30 dark:text-slate-200">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="my-3 overflow-x-auto rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/90">
            <table className="w-full border-collapse text-left text-xs sm:text-[13px]">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {children}
          </tbody>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
            {children}
          </tr>
        ),
        th: ({ children }) => (
          <th className="px-3 py-2 font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-3 py-2 text-slate-700 dark:text-slate-300 tabular-nums align-top">
            {children}
          </td>
        ),
        code: ({ children, className: codeClassName }) => {
          const isBlock = Boolean(codeClassName && codeClassName.includes('language-'));
          if (isBlock) {
            return (
              <code
                className={cn(
                  'block font-mono text-xs leading-relaxed text-slate-800 dark:text-slate-200',
                  codeClassName
                )}
              >
                {children}
              </code>
            );
          }
          return (
            <code className="rounded bg-slate-200/70 px-1.5 py-0.5 font-mono text-[0.88em] tabular-nums text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="my-2.5 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/80">
            {children}
          </pre>
        ),
        hr: () => (
          <hr className="my-3.5 border-slate-200 dark:border-slate-800" />
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
          >
            {children}
          </a>
        ),
      };

  const Wrapper = inline ? 'span' : 'div';

  return (
    <Wrapper
      className={cn(
        'clinical-markdown text-slate-700 dark:text-slate-300',
        !inline &&
          (readingComfort
            ? 'text-[15.5px] leading-[1.8]'
            : compact
            ? 'text-sm leading-relaxed'
            : 'text-sm leading-[1.7]'),
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={REMARK_PLUGINS}
        rehypePlugins={REHYPE_PLUGINS}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </Wrapper>
  );
}
