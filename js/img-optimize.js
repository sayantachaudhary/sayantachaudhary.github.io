import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

const images = await glob(`${publicDir}/**/*.{jpg,jpeg,png}`, {
  ignore: [`${publicDir}/favicon/**`],
});

for (const img of images) {
  try {
    const ext = path.extname(img);
    const avif = img.replace(ext, ".avif");

    if (fs.existsSync(avif)) {
      console.log(`Skipped: ${avif} already exists`);
      continue;
    }

    await sharp(img).avif({ quality: 75 }).toFile(avif);
    const original = fs.statSync(img).size;
    const optimized = fs.statSync(avif).size;
    const saved = (((original - optimized) / original) * 100).toFixed(1);
    console.log(`✔️ ${img} ➡️ ${avif} (${saved}% smaller)`);
  } catch (err) {
    console.error(`❌ Failed: ${img}`, err.message);
  }
}

console.log("Done!");
