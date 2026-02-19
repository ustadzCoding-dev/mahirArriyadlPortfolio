import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.cwd());
const assetsDir = path.join(root, "src", "assets");

const MAX_WIDTH = 1920;
const QUALITY = 72;

const isWebp = (p) => p.toLowerCase().endsWith(".webp");

const optimizeOne = async (filePath) => {
  const input = await fs.readFile(filePath);
  const image = sharp(input, { failOnError: false });
  const meta = await image.metadata();

  const width = meta.width ?? 0;
  const resize = width > MAX_WIDTH ? { width: MAX_WIDTH, withoutEnlargement: true } : null;

  const out = await image
    .rotate()
    .resize(resize ?? undefined)
    .webp({ quality: QUALITY, effort: 6 })
    .toBuffer();

  const before = input.byteLength;
  const after = out.byteLength;

  if (after < before) {
    await fs.writeFile(filePath, out);
    return { changed: true, before, after, width };
  }

  return { changed: false, before, after, width };
};

const main = async () => {
  const files = (await fs.readdir(assetsDir))
    .filter(isWebp)
    .map((f) => path.join(assetsDir, f));

  if (files.length === 0) {
    console.log("No .webp files found in", assetsDir);
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const name = path.basename(file);
    const res = await optimizeOne(file);
    totalBefore += res.before;
    totalAfter += res.after;
    const status = res.changed ? "optimized" : "kept";
    console.log(`${status}: ${name} (${(res.before / 1024).toFixed(0)}KB -> ${(res.after / 1024).toFixed(0)}KB)`);
  }

  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB -> ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
};

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
