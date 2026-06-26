import { describe, expect, it } from "vitest";
import {
  getRegionMeta,
  isRegionCode,
  normalizeRegionCode,
  regionCodes,
  regions,
  resolveRegionCode,
} from "../src/meta.js";

describe("meta", () => {
  it("exports metadata for all 89 regions", () => {
    expect(regions).toHaveLength(89);
    expect(regionCodes).toHaveLength(89);
    expect(regionCodes).toEqual(regions.map((region) => region.code));
    expect(new Set(regionCodes).size).toBe(89);
  });

  it("keeps region metadata internally consistent", () => {
    for (const region of regions) {
      expect(region.isoCode).toBe(`RU-${region.code}`);
      expect(region.nameRu.length).toBeGreaterThan(0);
      expect(region.nameEn.length).toBeGreaterThan(0);
      expect(region.aliases.length).toBeGreaterThan(0);
    }
  });

  it("does not have duplicate aliases or numeric codes pointing to different regions", () => {
    const seen = new Map<string, string>();

    for (const region of regions) {
      const searchableValues = [
        region.code,
        region.isoCode,
        region.isoCode.replace(/^RU-/, ""),
        ...region.numericCodes.map(String),
        ...region.numericCodes.map((code) => String(code).padStart(2, "0")),
        ...region.aliases,
      ];

      for (const value of searchableValues) {
        const normalized = normalizeRegionCode(value);
        const previousCode = seen.get(normalized);

        expect(
          previousCode === undefined || previousCode === region.code,
          `${normalized} is used by both ${previousCode} and ${region.code}`,
        ).toBe(true);

        seen.set(normalized, region.code);
      }
    }
  });

  it("normalizes common input forms", () => {
    expect(normalizeRegionCode(" ru-ta ")).toBe("TA");
    expect(normalizeRegionCode("saint petersburg")).toBe("SAINT_PETERSBURG");
    expect(normalizeRegionCode("yamalo nenets autonomous okrug")).toBe("YAMALO_NENETS_AUTONOMOUS_OKRUG");
    expect(normalizeRegionCode(16)).toBe("16");
  });

  it("resolves canonical codes, ISO codes, numeric codes and aliases", () => {
    expect(resolveRegionCode("TA")).toBe("TA");
    expect(resolveRegionCode("ru-ta")).toBe("TA");
    expect(resolveRegionCode(16)).toBe("TA");
    expect(resolveRegionCode("16")).toBe("TA");
    expect(resolveRegionCode("tatarstan")).toBe("TA");
    expect(resolveRegionCode("saint petersburg")).toBe("SPE");
    expect(resolveRegionCode("spb")).toBe("SPE");
    expect(resolveRegionCode("msk")).toBe("MOW");
    expect(resolveRegionCode("yug")).toBe("KHM");
  });

  it("resolves every declared alias and numeric code back to its own region", () => {
    for (const region of regions) {
      expect(resolveRegionCode(region.code), region.code).toBe(region.code);
      expect(resolveRegionCode(region.isoCode), region.isoCode).toBe(region.code);

      for (const numericCode of region.numericCodes) {
        expect(resolveRegionCode(numericCode), `${region.code} numeric ${numericCode}`).toBe(region.code);
        expect(resolveRegionCode(String(numericCode)), `${region.code} numeric string ${numericCode}`).toBe(region.code);
        expect(resolveRegionCode(String(numericCode).padStart(2, "0")), `${region.code} padded numeric ${numericCode}`).toBe(region.code);
      }

      for (const alias of region.aliases) {
        expect(resolveRegionCode(alias), `${region.code} alias ${alias}`).toBe(region.code);
        expect(resolveRegionCode(alias.toLowerCase()), `${region.code} lowercase alias ${alias}`).toBe(region.code);
      }
    }
  });

  it("resolves Cyrillic aliases case-insensitively", () => {
    expect(resolveRegionCode("татарстан")).toBe("TA");
    expect(resolveRegionCode("санкт-петербург")).toBe("SPE");
    expect(resolveRegionCode("хмао")).toBe("KHM");
    expect(resolveRegionCode("янао")).toBe("YAN");
  });

  it("returns undefined for unknown region input", () => {
    expect(resolveRegionCode("unknown")).toBeUndefined();
    expect(getRegionMeta("unknown")).toBeUndefined();
  });

  it("returns metadata by any supported input", () => {
    expect(getRegionMeta("TA")).toMatchObject({
      code: "TA",
      isoCode: "RU-TA",
      nameRu: "Республика Татарстан",
      nameEn: "Republic of Tatarstan",
    });

    expect(getRegionMeta(77)).toMatchObject({
      code: "MOW",
      nameRu: "Москва",
    });
  });

  it("returns the canonical metadata object for all supported lookup values", () => {
    for (const region of regions) {
      expect(getRegionMeta(region.code)).toBe(region);
      expect(getRegionMeta(region.isoCode)).toBe(region);

      for (const alias of region.aliases) {
        expect(getRegionMeta(alias), `${region.code} alias ${alias}`).toBe(region);
      }
    }
  });

  it("checks only canonical region codes with isRegionCode", () => {
    expect(isRegionCode("TA")).toBe(true);
    expect(isRegionCode("MOW")).toBe(true);
    expect(isRegionCode("ru-ta")).toBe(false);
    expect(isRegionCode("RU-TA")).toBe(false);
    expect(isRegionCode("tatarstan")).toBe(false);
    expect(isRegionCode(16)).toBe(false);
    expect(isRegionCode("unknown")).toBe(false);
  });
});
