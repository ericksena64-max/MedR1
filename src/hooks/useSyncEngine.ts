import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type {
  SyncBootstrapRequest,
  SyncOutboxEvent,
  SyncPullResponse,
} from '../types/sync';
import {
  HybridPostgresSyncAdapter,
  type StorageAdapter,
} from '../lib/storageAdapter';
import { getLastPullTimestamp, getOrCreateSyncStudentId } from '../lib/syncOutbox';
import { getStoredAuthToken } from '../lib/authClient';

export type SyncStatus =
  | 'idle'
  | 'syncing'
  | 'offline'
  | 'local-fallback';

export interface UseSyncEngineOptions {
  adapter?: StorageAdapter;
  studentId?: string;
  debounceMs?: number;
  enabled?: boolean;
}

export function useSyncEngine(options: UseSyncEngineOptions = {}) {
  const adapter = useMemo(
    () =>
      options.adapter ??
      new HybridPostgresSyncAdapter({ getAuthToken: getStoredAuthToken }),
    [options.adapter]
  );
  const studentId = useMemo(
    () => options.studentId ?? getOrCreateSyncStudentId(),
    [options.studentId]
  );
  const debounceMs = options.debounceMs ?? 2500;
  const enabled = options.enabled ?? true;

  const [syncStatus, setSyncStatus] = useState<SyncStatus>(
    adapter.mode === 'local' ? 'local-fallback' : 'idle'
  );
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);

  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFlushingRef = useRef(false);

  const refreshPendingCount = useCallback(async () => {
    const count = await adapter.getPendingCount();
    setPendingCount(count);
  }, [adapter]);

  const flushNow = useCallback(async () => {
    if (!enabled || adapter.mode === 'local' || isFlushingRef.current) {
      return;
    }

    isFlushingRef.current = true;
    setSyncStatus('syncing');
    try {
      const result = await adapter.flush(studentId);
      if (result.status === 'synced') {
        setLastSyncedAt(result.serverTimestamp);
        setSyncStatus('idle');
      } else if (result.status === 'local-fallback') {
        setSyncStatus('local-fallback');
      } else if (result.status === 'offline') {
        setSyncStatus('offline');
      } else {
        setSyncStatus('idle');
      }
      await refreshPendingCount();
    } finally {
      isFlushingRef.current = false;
    }
  }, [adapter, enabled, refreshPendingCount, studentId]);

  const enqueueEvents = useCallback(
    async (events: SyncOutboxEvent[]) => {
      if (!enabled || events.length === 0) return;

      await adapter.enqueue(events);
      await refreshPendingCount();

      if (adapter.mode === 'local') {
        return;
      }

      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        void flushNow();
      }, debounceMs);
    },
    [adapter, debounceMs, enabled, flushNow, refreshPendingCount]
  );

  useEffect(() => {
    if (!enabled) return;
    void refreshPendingCount();

    if (typeof window === 'undefined' || adapter.mode === 'local') {
      return;
    }

    const handleOnline = () => {
      void flushNow();
    };
    const handleVisibilityChange = () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
        void flushNow();
      }
    };

    window.addEventListener('online', handleOnline);
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', handleVisibilityChange);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      if (typeof document !== 'undefined') {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
    };
  }, [adapter.mode, enabled, flushNow, refreshPendingCount]);

  const bootstrapSync = useCallback(
    async (payload: SyncBootstrapRequest): Promise<SyncPullResponse | null> => {
      if (!enabled || adapter.mode === 'local') {
        return null;
      }
      setSyncStatus('syncing');
      try {
        const result = await adapter.bootstrap(payload);
        if (result && result.mode === 'postgres') {
          setLastSyncedAt(result.serverTimestamp);
          setSyncStatus('idle');
          return result;
        }
        setSyncStatus(result?.mode === 'local-fallback' ? 'local-fallback' : 'offline');
        return result;
      } catch {
        setSyncStatus('offline');
        return null;
      }
    },
    [adapter, enabled]
  );

  const pullSync = useCallback(
    async (sinceIso?: string): Promise<SyncPullResponse | null> => {
      if (!enabled || adapter.mode === 'local') {
        return null;
      }
      setSyncStatus('syncing');
      try {
        const result = await adapter.pull(studentId, sinceIso ?? getLastPullTimestamp());
        if (result && result.mode === 'postgres') {
          setLastSyncedAt(result.serverTimestamp);
          setSyncStatus('idle');
          return result;
        }
        setSyncStatus(result?.mode === 'local-fallback' ? 'local-fallback' : 'offline');
        return result;
      } catch {
        setSyncStatus('offline');
        return null;
      }
    },
    [adapter, enabled, studentId]
  );

  return {
    studentId,
    syncStatus,
    pendingCount,
    lastSyncedAt,
    enqueueEvents,
    flushNow,
    bootstrapSync,
    pullSync,
    refreshPendingCount,
  };
}
