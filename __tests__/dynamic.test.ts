import { describe, expect, it } from "vitest";
import { getRegionFlagLoader, loadRegionFlag, preloadRegionFlag } from "../src/dynamic.js";
import { flagLoaders } from "../src/flagLoaders.js";
import { regionCodes } from "../src/meta.js";

describe("dynamic flag loading", () => {
  it("returns a loader for supported region input", () => {
    expect(getRegionFlagLoader("TA")).toBeTypeOf("function");
    expect(getRegionFlagLoader("RU-TA")).toBeTypeOf("function");
    expect(getRegionFlagLoader(16)).toBeTypeOf("function");
    expect(getRegionFlagLoader("tatarstan")).toBeTypeOf("function");
  });

  it("returns undefined for unknown input", () => {
    expect(getRegionFlagLoader("unknown")).toBeUndefined();
  });

  it("returns the same loader instance as the generated loader table", () => {
    for (const code of regionCodes) {
      expect(getRegionFlagLoader(code)).toBe(flagLoaders[code]);
    }
  });

  it("loads a concrete flag module", async () => {
    const mod = await loadRegionFlag("TA");

    expect(mod.regionCode).toBe("TA");
    expect(mod.default).toBeTypeOf("function");
    expect(mod.src).toMatch(/(?:\.svg|data:image\/svg\+xml)/);
  });

  it("loads by numeric code and alias", async () => {
    await expect(loadRegionFlag(16)).resolves.toMatchObject({ regionCode: "TA" });
    await expect(loadRegionFlag("spb")).resolves.toMatchObject({ regionCode: "SPE" });
  });

  it("uses the module cache for repeated loads of the same region", async () => {
    const first = await loadRegionFlag("TA");
    const second = await loadRegionFlag("RU-TA");

    expect(second).toBe(first);
  });

  it("rejects unknown input with a useful error", async () => {
    await expect(loadRegionFlag("unknown")).rejects.toThrow("Unknown Russian region flag code: unknown");
  });

  it("preloads known regions and ignores unknown regions", () => {
    expect(() => preloadRegionFlag("TA")).not.toThrow();
    expect(() => preloadRegionFlag("unknown")).not.toThrow();
  });
});
