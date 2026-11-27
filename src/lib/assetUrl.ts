/**
 * Resolves clinical exam media URLs so images can be seamlessly offloaded
 * from `public/assets/exams/` to an external Object Storage / CDN (e.g. Cloudflare R2,
 * S3, Supabase Storage) and optionally served as WebP without editing exam datasets.
 *
 * Configure via Vite env vars:
 * - `VITE_ASSET_CDN_BASE_URL` (e.g. `https://cdn.medr1.com.br`)
 * - `VITE_ASSET_PREFER_WEBP=true` (rewrites `.png`/`.jpg` exam assets to `.webp`)
 */
export function resolveClinicalAssetUrl(
  rawUrl: string,
  options?: {
    cdnBaseUrl?: string;
    preferWebp?: boolean;
  }
): string {
  const trimmed = rawUrl.trim();
  if (!trimmed) return trimmed;

  // Leave data URIs, blob URLs, and already-absolute external URLs untouched
  if (/^(?:https?:|data:|blob:)/i.test(trimmed)) {
    return trimmed;
  }

  const env = (import.meta as { env?: Record<string, string | undefined> }).env ?? {};
  const cdnBase = (options?.cdnBaseUrl ?? env.VITE_ASSET_CDN_BASE_URL ?? '')
    .trim()
    .replace(/\/+$/, '');
  const preferWebp =
    options?.preferWebp ?? String(env.VITE_ASSET_PREFER_WEBP || '').toLowerCase() === 'true';

  let normalizedPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;

  if (preferWebp && normalizedPath.startsWith('/assets/exams/')) {
    normalizedPath = normalizedPath.replace(/\.(?:png|jpe?g)$/i, '.webp');
  }

  if (!cdnBase) {
    return normalizedPath;
  }

  return `${cdnBase}${normalizedPath}`;
}
