import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const srcDir = path.join(root, "src");
const distDir = path.join(root, "dist");

async function listEntries(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listEntries(fullPath);
      }
      return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
    }),
  );

  return files.flat();
}

await mkdir(distDir, { recursive: true });

await esbuild.build({
  entryPoints: await listEntries(srcDir),
  outbase: srcDir,
  outdir: distDir,
  bundle: false,
  format: "esm",
  platform: "neutral",
  target: "es2020",
  jsx: "automatic",
  sourcemap: false,
  logLevel: "info",
});
