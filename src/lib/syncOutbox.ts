import type { SyncOutboxEvent } from '../types/sync';

const SYNC_DB_NAME = 'medr1_sync_db';
const SYNC_DB_VERSION = 1;
const OUTBOX_STORE = 'sync_outbox';
const STORAGE_KEY_STUDENT_ID = 'medr1_sync_student_id_v1';
const STORAGE_KEY_LAST_PULL = 'medr1_sync_last_pull_v1';

interface StoredOutboxRecord {
  eventId: string;
  event: SyncOutboxEvent;
  createdAt: number;
}

// In-memory fallback for environments without IndexedDB (SSR / Node tests)
const memoryOutbox = new Map<string, StoredOutboxRecord>();

function hasIndexedDb(): boolean {
  return typeof indexedDB !== 'undefined';
}

export function generateClientUuid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  // RFC 4122 v4 fallback
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function getOrCreateSyncStudentId(): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existing = window.localStorage.getItem(STORAGE_KEY_STUDENT_ID);
      if (existing && /^[0-9a-f-]{36}$/i.test(existing)) {
        return existing;
      }
      const created = generateClientUuid();
      window.localStorage.setItem(STORAGE_KEY_STUDENT_ID, created);
      return created;
    }
  } catch {
    // Ignore storage errors
  }
  return generateClientUuid();
}

export function getLastPullTimestamp(): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (
        window.localStorage.getItem(STORAGE_KEY_LAST_PULL) ||
        '1970-01-01T00:00:00.000Z'
      );
    }
  } catch {
    // Ignore
  }
  return '1970-01-01T00:00:00.000Z';
}

export function setLastPullTimestamp(iso: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY_LAST_PULL, iso);
    }
  } catch {
    // Ignore
  }
}

function openSyncDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(SYNC_DB_NAME, SYNC_DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(OUTBOX_STORE)) {
        const store = db.createObjectStore(OUTBOX_STORE, { keyPath: 'eventId' });
        store.createIndex('by_created_at', 'createdAt', { unique: false });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(request.error ?? new Error('Failed to open medr1_sync_db'));
  });
}

export async function enqueueOutboxEvents(events: SyncOutboxEvent[]): Promise<void> {
  if (events.length === 0) return;

  const baseTime = Date.now();
  const records: StoredOutboxRecord[] = events.map((event, idx) => ({
    eventId: event.eventId,
    event,
    createdAt: baseTime + idx,
  }));

  if (!hasIndexedDb()) {
    for (const rec of records) {
      memoryOutbox.set(rec.eventId, rec);
    }
    return;
  }

  try {
    const db = await openSyncDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(OUTBOX_STORE, 'readwrite');
      const store = tx.objectStore(OUTBOX_STORE);
      for (const rec of records) {
        store.put(rec);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error('Outbox enqueue failed'));
    });
    db.close();
  } catch {
    for (const rec of records) {
      memoryOutbox.set(rec.eventId, rec);
    }
  }
}

export async function listOutboxEvents(): Promise<SyncOutboxEvent[]> {
  if (!hasIndexedDb()) {
    return Array.from(memoryOutbox.values())
      .sort((a, b) => a.createdAt - b.createdAt)
      .map((r) => r.event);
  }

  try {
    const db = await openSyncDb();
    const records = await new Promise<StoredOutboxRecord[]>((resolve, reject) => {
      const tx = db.transaction(OUTBOX_STORE, 'readonly');
      const store = tx.objectStore(OUTBOX_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve((req.result as StoredOutboxRecord[]) ?? []);
      req.onerror = () => reject(req.error ?? new Error('Outbox read failed'));
    });
    db.close();
    return records.sort((a, b) => a.createdAt - b.createdAt).map((r) => r.event);
  } catch {
    return Array.from(memoryOutbox.values())
      .sort((a, b) => a.createdAt - b.createdAt)
      .map((r) => r.event);
  }
}

export async function removeOutboxEvents(eventIds: string[]): Promise<void> {
  if (eventIds.length === 0) return;

  for (const id of eventIds) {
    memoryOutbox.delete(id);
  }

  if (!hasIndexedDb()) return;

  try {
    const db = await openSyncDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(OUTBOX_STORE, 'readwrite');
      const store = tx.objectStore(OUTBOX_STORE);
      for (const id of eventIds) {
        store.delete(id);
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error('Outbox delete failed'));
    });
    db.close();
  } catch {
    // Ignore cleanup errors
  }
}

export async function getOutboxCount(): Promise<number> {
  const events = await listOutboxEvents();
  return events.length;
}

export async function clearOutbox(): Promise<void> {
  memoryOutbox.clear();
  if (!hasIndexedDb()) return;

  try {
    const db = await openSyncDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(OUTBOX_STORE, 'readwrite');
      tx.objectStore(OUTBOX_STORE).clear();
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error ?? new Error('Outbox clear failed'));
    });
    db.close();
  } catch {
    // Ignore
  }
}
