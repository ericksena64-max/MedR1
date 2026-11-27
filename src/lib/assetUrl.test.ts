import { describe, expect, it, vi } from 'vitest';
import { resolveClinicalAssetUrl } from './assetUrl';
import { fetchRemoteQuestionsPage } from './remoteQuestionClient';

describe('P2 Escala — assetUrl (CDN + WebP) e remoteQuestionClient', () => {
  it('resolveClinicalAssetUrl preserva URLs locais por padrão e aplica CDN/WebP quando configurado', () => {
    expect(
      resolveClinicalAssetUrl('/assets/exams/usp-sp-2023/q001.png', {
        cdnBaseUrl: '',
        preferWebp: false,
      })
    ).toBe('/assets/exams/usp-sp-2023/q001.png');

    expect(
      resolveClinicalAssetUrl('/assets/exams/usp-sp-2023/q001.png', {
        cdnBaseUrl: 'https://cdn.medr1.com.br/',
        preferWebp: true,
      })
    ).toBe('https://cdn.medr1.com.br/assets/exams/usp-sp-2023/q001.webp');

    // External URLs and data URIs stay untouched
    expect(
      resolveClinicalAssetUrl('https://other.cdn/img.png', {
        cdnBaseUrl: 'https://cdn.medr1.com.br',
        preferWebp: true,
      })
    ).toBe('https://other.cdn/img.png');
    expect(
      resolveClinicalAssetUrl('data:image/png;base64,abc', {
        cdnBaseUrl: 'https://cdn.medr1.com.br',
        preferWebp: true,
      })
    ).toBe('data:image/png;base64,abc');
  });

  it('fetchRemoteQuestionsPage retorna null em 503 local-fallback e envia filtros corretos', async () => {
    const fetch503 = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ mode: 'local-fallback' }), { status: 503 })
    );

    const res = await fetchRemoteQuestionsPage(
      { search: 'sepse', grandeAreaId: 'clinica_medica', comImagens: true },
      { limit: 20 },
      { fetchImpl: fetch503 }
    );

    expect(res).toBeNull();
    const [calledUrl] = fetch503.mock.calls[0] as [string];
    expect(calledUrl).toContain('/api/questions?');
    expect(calledUrl).toContain('q=sepse');
    expect(calledUrl).toContain('grandeAreaId=clinica_medica');
    expect(calledUrl).toContain('comImagens=true');
    expect(calledUrl).toContain('limit=20');
  });
});
