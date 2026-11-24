import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '../../lib/utils';

interface VirtualListProps<T> {
  items: T[];
  getItemKey: (item: T, index: number) => string | number;
  renderItem: (item: T, index: number) => React.ReactNode;
  estimateSize?: number;
  overscan?: number;
  className?: string;
  itemClassName?: string;
  ariaLabel?: string;
}

/**
 * Dynamic-height virtualized list powered by @tanstack/react-virtual.
 * Automatically measures variable and expandable row heights via ResizeObserver,
 * sustaining 60fps even with thousands of questions, flashcards, or imported items.
 */
export function VirtualList<T>({
  items,
  getItemKey,
  renderItem,
  estimateSize = 112,
  overscan = 6,
  className,
  itemClassName,
  ariaLabel,
}: VirtualListProps<T>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => estimateSize,
    getItemKey: (index) => {
      const item = items[index];
      return item !== undefined ? getItemKey(item, index) : index;
    },
    overscan,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <div
      ref={scrollContainerRef}
      role="list"
      aria-label={ariaLabel}
      className={cn(
        'max-h-[72vh] overflow-y-auto overscroll-contain',
        className
      )}
    >
      <div
        className="relative w-full"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualItems.map((virtualRow) => {
          const item = items[virtualRow.index];
          if (item === undefined) return null;
          const isLast = virtualRow.index === items.length - 1;

          return (
            <div
              key={virtualRow.key}
              role="listitem"
              data-index={virtualRow.index}
              ref={virtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
              }}
              className={cn(
                !isLast && 'border-b border-slate-200 dark:border-slate-800',
                itemClassName
              )}
            >
              {renderItem(item, virtualRow.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
