import type {
  SyncBootstrapRequest,
  SyncOutboxEvent,
  SyncPullResponse,
  SyncPushResponse,
} from '../types/sync';
import {
  enqueueOutboxEvents,
  getOutboxCount,
  listOutboxEvents,
  removeOutboxEvents,
  setLastPullTimestamp,
} from './syncOutbox';

export type SyncFlushResult =
  | { status: 'empty' }
  | { status: 'synced'; acknowledgedIds: string[]; serverTimestamp: string }
  | { status: 'local-fallback' }
  | { status: 'offline' };

export interface StorageAdapter {
  readonly mode: 'local' | 'hybrid';
  enqueue(events: SyncOutboxEvent[]): Promise<void>;
  flush(studentId: string): Promise<SyncFlushResult>;
  pull(studentId: string, sinceIso: string): Promise<SyncPullResponse | null>;
  bootstrap(payload: SyncBootstrapRequest): Promise<SyncPullResponse | null>;
  getPendingCount(): Promise<number>;
}

/**
 * Local-only adapter used in unit tests and offline/guest-only mode.
 * Never performs network requests.
 */
export class LocalOnlyAdapter implements StorageAdapter {
  readonly mode = 'local' as const;

  async enqueue(_events: SyncOutboxEvent[]): Promise<void> {
    // No-op in local-only mode; primary state is already saved in localStorage/IndexedDB.
  }

  async flush(_studentId: string): Promise<SyncFlushResult> {
    return { status: 'local-fallback' };
  }

  async pull(_studentId: string, _sinceIso: string): Promise<SyncPullResponse | null> {
    return null;
  }

  async bootstrap(_payload: SyncBootstrapRequest): Promise<SyncPullResponse | null> {
    return null;
  }

  async getPendingCount(): Promise<number> {
    return 0;
  }
}

export interface HybridSyncAdapterOptions {
  baseUrl?: string;
  fetchImpl?: typeof fetch;
  getAuthToken?: () => string | null;
}

/**
 * Local-First hybrid adapter: writes mutations to the IndexedDB `sync_outbox`
 * and asynchronously converges with PostgreSQL via `/api/sync/*`.
 */
export class HybridPostgresSyncAdapter implements StorageAdapter {
  readonly mode = 'hybrid' as const;
  private readonly baseUrl: string;
  private readonly fetchFn: typeof fetch;
  private readonly getAuthToken?: () => string | null;

  constructor(options: HybridSyncAdapterOptions = {}) {
    this.baseUrl = options.baseUrl ?? '';
    this.fetchFn = options.fetchImpl ?? globalThis.fetch.bind(globalThis);
    this.getAuthToken = options.getAuthToken;
  }

  private buildHeaders(includeJsonContentType = false): Record<string, string> {
    const headers: Record<string, string> = {};
    if (includeJsonContentType) {
      headers['content-type'] = 'application/json';
    }
    const token = this.getAuthToken?.()?.trim();
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }
    return headers;
  }

  async enqueue(events: SyncOutboxEvent[]): Promise<void> {
    await enqueueOutboxEvents(events);
  }

  async getPendingCount(): Promise<number> {
    return getOutboxCount();
  }

  async flush(studentId: string): Promise<SyncFlushResult> {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return { status: 'offline' };
    }

    const pending = await listOutboxEvents();
    if (pending.length === 0) {
      return { status: 'empty' };
    }

    try {
      const res = await this.fetchFn(`${this.baseUrl}/api/sync/push`, {
        method: 'POST',
        headers: this.buildHeaders(true),
        body: JSON.stringify({ studentId, events: pending }),
      });

      if (res.status === 503) {
        return { status: 'local-fallback' };
      }

      if (!res.ok) {
        return { status: 'offline' };
      }

      const data = (await res.json()) as SyncPushResponse;
      const ackIds = Array.isArray(data.acknowledgedEventIds)
        ? data.acknowledgedEventIds
        : [];
      await removeOutboxEvents(ackIds);

      return {
        status: 'synced',
        acknowledgedIds: ackIds,
        serverTimestamp: data.serverTimestamp,
      };
    } catch {
      return { status: 'offline' };
    }
  }

  async pull(studentId: string, sinceIso: string): Promise<SyncPullResponse | null> {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return null;
    }

    try {
      const params = new URLSearchParams({ studentId, since: sinceIso });
      const headers = this.buildHeaders(false);
      const res = await this.fetchFn(
        `${this.baseUrl}/api/sync/pull?${params.toString()}`,
        Object.keys(headers).length > 0 ? { headers } : undefined
      );
      if (!res.ok) return null;

      const data = (await res.json()) as SyncPullResponse;
      if (data.serverTimestamp) {
        setLastPullTimestamp(data.serverTimestamp);
      }
      return data;
    } catch {
      return null;
    }
  }

  async bootstrap(payload: SyncBootstrapRequest): Promise<SyncPullResponse | null> {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
      return null;
    }

    try {
      const res = await this.fetchFn(`${this.baseUrl}/api/sync/bootstrap`, {
        method: 'POST',
        headers: this.buildHeaders(true),
        body: JSON.stringify(payload),
      });
      if (!res.ok) return null;

      const data = (await res.json()) as SyncPullResponse;
      if (data.serverTimestamp) {
        setLastPullTimestamp(data.serverTimestamp);
      }
      return data;
    } catch {
      return null;
    }
  }
}
