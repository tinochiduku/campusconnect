import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';

// Keep this in sync with next.config.js deviceSizes + imageSizes
const WIDTHS = [16, 32, 48, 64, 96, 128, 256, 384, 640, 768, 1024, 1280, 1536, 1920];
const SOURCE_DIR = 'public/images';
const OUTPUT_DIR = 'public/optimized';

async function run() {
  const files = await glob(`${SOURCE_DIR}/**/*.{jpg,jpeg,png,webp}`);

  for (const file of files) {
    const relPath = path.relative(SOURCE_DIR, file);
    const ext = path.extname(relPath);
    const base = relPath.slice(0, -ext.length);
    const outDir = path.join(OUTPUT_DIR, path.dirname(base));
    await fs.mkdir(outDir, { recursive: true });

    const meta = await sharp(file).metadata();
    const widths = WIDTHS.filter((w) => w <= (meta.width ?? Infinity));
    if (widths.length === 0) widths.push(meta.width ?? WIDTHS[0]);

    for (const width of widths) {
      const outPath = path.join(OUTPUT_DIR, `${base}-${width}${ext}`);
      await sharp(file).resize({ width }).toFile(outPath);
    }
    console.log(`Optimised ${relPath} → ${widths.length} sizes`);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});