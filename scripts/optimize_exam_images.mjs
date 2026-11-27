import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const EXAMS_DIR = path.join(ROOT_DIR, 'public', 'assets', 'exams');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const deleteOriginals = args.includes('--delete-originals');
const qualityArg = args.find((a) => a.startsWith('--quality='));
const quality = Math.max(
  40,
  Math.min(100, Number.parseInt(qualityArg?.split('=')[1] ?? '82', 10) || 82)
);

function walkImages(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkImages(full));
    } else if (/\.(?:png|jpe?g)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function commandExists(cmd) {
  try {
    execFileSync('which', [cmd], { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function detectEncoder() {
  if (commandExists('cwebp')) return 'cwebp';
  if (commandExists('ffmpeg')) return 'ffmpeg';
  if (commandExists('magick')) return 'magick';
  try {
    const mod = await import('sharp');
    if (mod?.default) return 'sharp';
  } catch {
    // sharp not installed
  }
  return null;
}

async function convertFile(encoder, inputPath, outputPath) {
  if (encoder === 'cwebp') {
    execFileSync('cwebp', ['-q', String(quality), '-quiet', inputPath, '-o', outputPath]);
    return;
  }
  if (encoder === 'ffmpeg') {
    execFileSync(
      'ffmpeg',
      ['-y', '-loglevel', 'error', '-i', inputPath, '-quality', String(quality), outputPath]
    );
    return;
  }
  if (encoder === 'magick') {
    execFileSync('magick', [inputPath, '-quality', String(quality), outputPath]);
    return;
  }
  if (encoder === 'sharp') {
    const { default: sharp } = await import('sharp');
    await sharp(inputPath).webp({ quality }).toFile(outputPath);
  }
}

async function main() {
  const images = walkImages(EXAMS_DIR);
  const totalInputBytes = images.reduce((sum, file) => sum + fs.statSync(file).size, 0);

  console.log(
    `[MedR1 Assets] Encontradas ${images.length} imagens PNG/JPG em public/assets/exams (${formatMb(totalInputBytes)}).`
  );

  if (dryRun) {
    console.log(
      `[MedR1 Assets] --dry-run ativo (quality=${quality}, deleteOriginals=${deleteOriginals}). Economia típica esperada com WebP: 65%–80% (~${formatMb(totalInputBytes * 0.25)} final).`
    );
    return;
  }

  const encoder = await detectEncoder();
  if (!encoder) {
    console.error(
      '[MedR1 Assets] Nenhum encoder WebP encontrado (cwebp, ffmpeg, magick ou sharp).'
    );
    console.error(
      '[MedR1 Assets] Instale um deles e rode novamente: `brew install webp` ou `npm i -D sharp`'
    );
    process.exitCode = 1;
    return;
  }

  console.log(`[MedR1 Assets] Convertendo com encoder "${encoder}" (quality=${quality})...`);
  let totalOutputBytes = 0;
  let converted = 0;

  for (const inputPath of images) {
    const outputPath = inputPath.replace(/\.(?:png|jpe?g)$/i, '.webp');
    await convertFile(encoder, inputPath, outputPath);
    totalOutputBytes += fs.statSync(outputPath).size;
    converted += 1;

    if (deleteOriginals) {
      fs.unlinkSync(inputPath);
    }
  }

  const savedBytes = Math.max(0, totalInputBytes - totalOutputBytes);
  const savedPct = totalInputBytes > 0 ? ((savedBytes / totalInputBytes) * 100).toFixed(1) : '0.0';
  console.log(
    `[MedR1 Assets] Concluído: ${converted} imagens convertidas. ${formatMb(totalInputBytes)} -> ${formatMb(totalOutputBytes)} (economia de ${formatMb(savedBytes)} / ${savedPct}%).`
  );
  console.log(
    '[MedR1 Assets] Para servir WebP no frontend, defina VITE_ASSET_PREFER_WEBP=true (e opcionalmente VITE_ASSET_CDN_BASE_URL=https://seu-cdn).'
  );
}

void main();
