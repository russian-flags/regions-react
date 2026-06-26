import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { regionCodes } from "../src/meta.js";

const svgDir = path.join(process.cwd(), "src", "svg");

describe("SVG wrappers", () => {
  it("has one SVG wrapper module for every region code", async () => {
    const files = (await readdir(svgDir)).filter((file) => file.endsWith(".svg.ts")).sort();

    expect(files).toEqual(regionCodes.map((code) => `${code}.svg.ts`).sort());
  });

  it("does not keep local SVG asset copies", async () => {
    const files = await readdir(svgDir);

    expect(files.some((file) => file.endsWith(".svg"))).toBe(false);
  });

  it("points each wrapper to the base @russian-flags/regions package", async () => {
    for (const code of regionCodes) {
      const module = await readFile(path.join(svgDir, `${code}.svg.ts`), "utf8");

      expect(module.trim()).toBe(
        `export { default } from "@russian-flags/regions/svg/${code.toLowerCase()}";`,
      );
    }
  });
});
