/**
 * Lightweight IndexedDB Key-Value store for large MedR1 user datasets
 * (`answers`, `flashcards`, `fsrs_revlogs`, `simulado_history`).
 *
 * Avoids the ~5 MB synchronous `localStorage` quota ceiling and main-thread
 * serialization stalls as a student scales past thousands of questions/reviews.
 * Transparently migrates legacy `localStorage` payloads on first read and falls
 * back safely when IndexedDB is unavailable (SSR / Vitest / restricted contexts).
 */

const DB_NAME = 'medr1_user_state_db';
const DB_VERSION = 1;
const STORE_NAME = 'kv_state';

const memoryFallback = new Map<string, unknown>();

function hasIndexedDb(): boolean {
  return typeof window !== 'undefined' && typeof window.indexedDB !== 'undefined';
}

function openUserStateDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!hasIndexedDb()) {
      reject(new Error('IndexedDB indisponível'));
      return;
    }
    const req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('Falha ao abrir IndexedDB'));
  });
}

export async function idbGet<T>(key: string): Promise<T | null> {
  if (!hasIndexedDb()) {
    return memoryFallback.has(key) ? (memoryFallback.get(key) as T) : null;
  }
  try {
    const db = await openUserStateDb();
    return await new Promise<T | null>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(key);
      req.onsuccess = () => {
        resolve(req.result === undefined ? null : (req.result as T));
      };
      req.onerror = () => reject(req.error);
    });
  } catch {
    return memoryFallback.has(key) ? (memoryFallback.get(key) as T) : null;
  }
}

export async function idbSet<T>(key: string, value: T): Promise<void> {
  memoryFallback.set(key, value);
  if (!hasIndexedDb()) {
    return;
  }
  try {
    const db = await openUserStateDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // Keep in-memory fallback if IndexedDB quota or private-mode restriction triggers
  }
}

export async function idbDelete(key: string): Promise<void> {
  memoryFallback.delete(key);
  if (!hasIndexedDb()) {
    return;
  }
  try {
    const db = await openUserStateDb();
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch {
    // Ignore cleanup errors
  }
}

/**
 * Loads a heavy state key from IndexedDB. If not yet stored in IndexedDB,
 * transparently migrates any existing legacy `localStorage` entry into IndexedDB
 * and removes the legacy key to reclaim `localStorage` quota.
 */
export async function loadOrMigrateHeavyState<T>(
  key: string,
  fallback: T
): Promise<{ value: T; source: 'idb' | 'migrated_localStorage' | 'fallback' }> {
  const fromIdb = await idbGet<T>(key);
  if (fromIdb !== null) {
    return { value: fromIdb, source: 'idb' };
  }

  if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        const parsed = JSON.parse(raw) as T;
        await idbSet(key, parsed);
        if (hasIndexedDb()) {
          try {
            window.localStorage.removeItem(key);
          } catch {
            // ignore removal errors
          }
        }
        return { value: parsed, source: 'migrated_localStorage' };
      }
    } catch {
      // ignore corrupted legacy localStorage payload
    }
  }

  return { value: fallback, source: 'fallback' };
}

export function clearMemoryFallbackForTests(): void {
  memoryFallback.clear();
}
