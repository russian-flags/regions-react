import { describe, expect, it } from "vitest";
import { flagLoaders } from "../src/flagLoaders.js";
import { getRegionMeta, regionCodes } from "../src/meta.js";

describe("flagLoaders", () => {
  it("has exactly one loader for each region code", () => {
    expect(Object.keys(flagLoaders).sort()).toEqual([...regionCodes].sort());
  });

  it("loads every flag module with matching metadata", async () => {
    for (const code of regionCodes) {
      const mod = await flagLoaders[code]();

      expect(mod.regionCode).toBe(code);
      expect(mod.default).toBeTypeOf("function");
      expect(mod.src).toMatch(/(?:\.svg|data:image\/svg\+xml)/);
    }
  });

  it("uses the same default alt text as the region metadata", async () => {
    for (const code of regionCodes) {
      const mod = await flagLoaders[code]();
      const Flag = mod.default;
      const element = Flag({});
      const meta = getRegionMeta(code);

      expect(element).toMatchObject({
        type: "img",
        props: {
          src: mod.src,
          alt: `Флаг ${meta?.nameRu}`,
          decoding: "async",
          loading: "lazy",
        },
      });
    }
  });
});
