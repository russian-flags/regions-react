# @russian-flags/regions-react

[Russian version](./README.md)

React wrapper around `@russian-flags/regions`. The package can be used in React projects as ready-made Russian region flag components, a lazy component by region code, and thin entry points over the SVG assets from the base package.

The package includes 89 regions: republics, krais, oblasts, federal cities, the autonomous oblast, and autonomous okrugs.

## Preview

| Region | Code | ISO code | Vehicle code | Flag |
| --- | --- | --- | --- | --- |
| Saint Petersburg | `SPE` | `RU-SPE` | `78` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/spe/index.svg" width="160" alt="Flag of Saint Petersburg"> |
| Moscow | `MOW` | `RU-MOW` | `77` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/mow/index.svg" width="160" alt="Flag of Moscow"> |
| Sevastopol | `SEV` | `RU-SEV` | `92`, `93` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/sev/index.svg" width="160" alt="Flag of Sevastopol"> |
| Novosibirsk Oblast | `NVS` | `RU-NVS` | `54` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/nvs/index.svg" width="160" alt="Flag of Novosibirsk Oblast"> |

## Features

- React components for direct imports of every flag.
- Lazy `RegionFlag` component for rendering a flag by code, ISO code, vehicle registration code, name, or alias.
- ESM build with TypeScript declarations.
- Metadata and region lookup helpers re-exported from `@russian-flags/regions`.
- SVG files are not duplicated in this React package: components use assets from the base package.
- Compatibility SVG URL entry points through `svg/<CODE>.svg`.

## Installation

```bash
npm install @russian-flags/regions-react react
```

For local checks from the project directory:

```bash
npm install .
```

## Quick Start

```tsx
import { RegionFlag, regions } from "@russian-flags/regions-react";

export function App() {
  console.log(regions[0]);
  // {
  //   code: "AD",
  //   isoCode: "RU-AD",
  //   nameRu: "Республика Адыгея",
  //   nameEn: "Republic of Adygea",
  //   numericCodes: [1],
  //   aliases: ["ADYGEA", "АДЫГЕЯ"]
  // }

  return (
    <RegionFlag
      code="TA"
      width={96}
      alt="Flag of the Republic of Tatarstan"
      loadingFallback={null}
    />
  );
}
```

`RegionFlag` normalizes the input through the `@russian-flags/regions` directory, lazy-imports the requested React component, and uses `loading="lazy"` plus `decoding="async"` on the image by default.

## Direct Component Imports

If the region is known at development time, import the component directly. Component entry points use lowercase codes:

```tsx
import TatarstanFlag from "@russian-flags/regions-react/flags/ta";

export function Example() {
  return <TatarstanFlag width={48} />;
}
```

This adds only the small JS module for that React component and the SVG from `@russian-flags/regions` to your application. Other flag components are not imported.

Each flag module also exports `regionCode` and `src`:

```tsx
import TatarstanFlag, { regionCode, src } from "@russian-flags/regions-react/flags/ta";

console.log(regionCode); // "TA"
console.log(src); // SVG asset URL
```

## Direct SVG Imports

If you only need the SVG URL, prefer importing the asset from the base package:

```tsx
import tatarstanSvg from "@russian-flags/regions/svg/ta.svg";

export function Example() {
  return <img src={tatarstanSvg} width={48} alt="Flag of the Republic of Tatarstan" />;
}
```

This React package also keeps compatibility entry points for imports with uppercase codes:

```tsx
import tatarstanSvg from "@russian-flags/regions-react/svg/TA.svg";
```

These entry points do not contain local SVG files. They re-export URLs from `@russian-flags/regions`.

## Region Lookup

`RegionFlag`, `loadRegionFlag`, `preloadRegionFlag`, and metadata helpers accept the same input forms as the base package:

- short code: `"TA"`;
- ISO code: `"RU-TA"`;
- vehicle registration code: `16`, `"16"`, or `"016"`;
- Russian or English name;
- metadata alias, for example `"TATARSTAN"`.

```tsx
import {
  getRegionMeta,
  regionCodes,
  regions,
  resolveRegionCode,
} from "@russian-flags/regions-react";

console.log(regions.length); // 89
console.log(regionCodes.includes("TA")); // true

console.log(resolveRegionCode("RU-TA")); // "TA"
console.log(resolveRegionCode(16)); // "TA"
console.log(resolveRegionCode("tatarstan")); // "TA"
console.log(resolveRegionCode("Республика Татарстан")); // "TA"
console.log(resolveRegionCode("unknown")); // undefined

console.log(getRegionMeta("RU-TA")?.nameEn); // "Republic of Tatarstan"
```

Input is normalized by the base package by trimming whitespace, removing the `RU-` prefix, ignoring case, and converting spaces or dashes to `_`.

## Lazy List Rendering

```tsx
import { RegionFlag, regions } from "@russian-flags/regions-react";

export function RegionList() {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.code}>
          <RegionFlag code={region.code} width={32} loadingFallback={null} />
          <span>{region.nameEn}</span>
        </li>
      ))}
    </ul>
  );
}
```

`RegionFlag` uses `React.lazy` and `Suspense`, so every flag is loaded through a dynamic import of its own component.

## Preload

`preloadRegionFlag` starts loading a flag module without waiting for the result. This is useful on `hover`, `focus`, or shortly before a row enters the viewport.

```tsx
import { preloadRegionFlag } from "@russian-flags/regions-react";

button.addEventListener("pointerenter", () => {
  preloadRegionFlag("TA");
});
```

Unknown values are ignored and do not throw.

## API

| Export | Description |
| --- | --- |
| `RegionFlag` | Lazy React component for rendering a flag by region code. |
| `flagLoaders` | Table of lazy React component loaders by short region code. |
| `getRegionFlagLoader(input)` | Returns a lazy React flag component loader or `undefined`. |
| `loadRegionFlag(input)` | Lazy-imports a React flag module. Throws for unknown values. |
| `preloadRegionFlag(input)` | Starts loading a React module without awaiting it. |
| `regions` | Metadata array `{ code, isoCode, nameRu, nameEn, numericCodes, aliases }`. |
| `regionCodes` | Array of all supported short region codes. |
| `normalizeRegionCode(input)` | Normalizes user input before lookup. |
| `resolveRegionCode(input)` | Returns a short region code from a code, ISO code, number, name, or alias. |
| `isRegionCode(input)` | Type guard for canonical `RegionCode`. |
| `getRegionMeta(input)` | Returns region metadata or `undefined`. |

## Entry Points

| Entry point | Purpose |
| --- | --- |
| `@russian-flags/regions-react` | Main API: React component, loaders, metadata, and types. |
| `@russian-flags/regions-react/dynamic` | Dynamic React component loaders only. |
| `@russian-flags/regions-react/meta` | Metadata and lookup helpers re-exported from `@russian-flags/regions`. |
| `@russian-flags/regions-react/regions` | The `regions` array only. |
| `@russian-flags/regions-react/region-flag` | The `RegionFlag` component only. |
| `@russian-flags/regions-react/flags/<code>` | Direct import for a flag React component. |
| `@russian-flags/regions-react/svg/<CODE>.svg` | Compatibility import for an SVG URL from the base package. |

## Types

The package ships `.d.ts` files and exports the main types:

```ts
import type {
  IDynamicRegionFlagProps,
  IRegionFlagModule,
  IRegionMeta,
  RegionCode,
  RegionFlagComponent,
  RegionFlagProps,
  RegionInput,
  RegionMeta,
} from "@russian-flags/regions-react";
```

`RegionFlagProps` is based on `ImgHTMLAttributes<HTMLImageElement>` but omits `src`: the component chooses the SVG source itself.

`IDynamicRegionFlagProps` adds:

| Field | Purpose |
| --- | --- |
| `code` | Region code, ISO code, vehicle code, name, or alias. |
| `fallback` | React node for an unknown value. |
| `loadingFallback` | React node shown while the lazy component is loading. |

## Compatibility

The package targets React 18+, modern ESM projects, and bundlers that support package exports and SVG imports as URLs.

React components are meant for React environments. Metadata exports (`regions`, `regionCodes`, `resolveRegionCode`, `getRegionMeta`) can be used separately for lookup, autocomplete, or generating lists of available flags.

## Demo

```bash
cd examples/vite-react
npm install
npm run dev
```

Vite opens the example page in the browser. The example installs the React package from the repository root through `file:../..` and uses SVG assets from `@russian-flags/regions`.

## Development

```bash
npm install
npm run build
npm test
npm run typecheck
npm pack --dry-run
```

Build steps:

1. `scripts/build.mjs` builds TypeScript and TSX with `esbuild`.
2. `tsc --emitDeclarationOnly` emits `.d.ts` files into `dist`.
3. `src/svg/*.svg.ts` builds into tiny JS modules that re-export SVG URLs from `@russian-flags/regions`.

To update the region set, update the base `@russian-flags/regions` package first, then sync the React components and wrapper entry points with its `regionCodes`.

## Repository

- GitHub: <https://github.com/russian-flags/regions-react>
- Issues: <https://github.com/russian-flags/regions-react/issues>
- Base package: <https://github.com/russian-flags/regions>

## License

Package code is distributed under the MIT license. SVG flags are provided by the base `@russian-flags/regions` package and keep their original licenses.
