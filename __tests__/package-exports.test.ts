import { readFile } from "node:fs/promises";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("package exports", () => {
  it("exposes SVG assets with and without the .svg extension", async () => {
    const packageJson = JSON.parse(
      await readFile(path.join(process.cwd(), "package.json"), "utf8"),
    ) as {
      exports: Record<string, unknown>;
    };

    expect(packageJson.exports["./svg/*"]).toEqual({
      types: "./dist/svg/*.svg.d.ts",
      import: "./dist/svg/*.svg.js",
    });
    expect(packageJson.exports["./svg/*.svg"]).toEqual({
      types: "./dist/svg/*.svg.d.ts",
      import: "./dist/svg/*.svg.js",
    });
  });
});
