# @russian-flags/regions-react

[English version](./README.en.md)

React-обертка над `@russian-flags/regions`. Пакет можно использовать в React-проектах как набор готовых компонентов флагов регионов России, lazy-компонент по коду региона и тонкие entry-point'ы поверх SVG-ассетов базового пакета.

Пакет содержит 89 регионов: республики, края, области, города федерального значения, автономную область и автономные округа.

## Превью

| Регион | Код | ISO-код | Автокод | Флаг |
| --- | --- | --- | --- | --- |
| Санкт-Петербург | `SPE` | `RU-SPE` | `78` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/spe/index.svg" width="160" alt="Флаг Санкт-Петербурга"> |
| Москва | `MOW` | `RU-MOW` | `77` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/mow/index.svg" width="160" alt="Флаг Москвы"> |
| Севастополь | `SEV` | `RU-SEV` | `92`, `93` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/sev/index.svg" width="160" alt="Флаг Севастополя"> |
| Новосибирская область | `NVS` | `RU-NVS` | `54` | <img src="https://raw.githubusercontent.com/russian-flags/regions/main/assets/nvs/index.svg" width="160" alt="Флаг Новосибирской области"> |

## Возможности

- React-компоненты для прямого импорта каждого флага.
- Lazy-компонент `RegionFlag` для отображения флага по коду, ISO-коду, автокоду, названию или алиасу.
- ESM-сборка с TypeScript-типами.
- Метаданные и поиск регионов реэкспортируются из `@russian-flags/regions`.
- SVG не дублируются в React-пакете: компоненты используют ассеты базового пакета.
- Compatibility entry-point'ы для SVG URL через `svg/<CODE>.svg`.

## Установка

```bash
npm install @russian-flags/regions-react react
```

Для локальной проверки из папки проекта:

```bash
npm install .
```

## Быстрый старт

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
      alt="Флаг Республики Татарстан"
      loadingFallback={null}
    />
  );
}
```

`RegionFlag` нормализует входное значение через справочник `@russian-flags/regions`, лениво импортирует нужный React-компонент и по умолчанию ставит для изображения `loading="lazy"` и `decoding="async"`.

## Подключение компонента напрямую

Если регион известен на этапе разработки, импортируйте компонент напрямую. Entry-point'ы компонентов сделаны в нижнем регистре:

```tsx
import TatarstanFlag from "@russian-flags/regions-react/flags/ta";

export function Example() {
  return <TatarstanFlag width={48} />;
}
```

Так в приложение попадает только маленький JS-модуль конкретного React-компонента и SVG из `@russian-flags/regions`. Остальные компоненты флагов не импортируются.

Каждый модуль флага также экспортирует `regionCode` и `src`:

```tsx
import TatarstanFlag, { regionCode, src } from "@russian-flags/regions-react/flags/ta";

console.log(regionCode); // "TA"
console.log(src); // URL SVG-ассета
```

## Подключение SVG напрямую

Если нужен только URL SVG, лучше импортировать ассет из базового пакета:

```tsx
import tatarstanSvg from "@russian-flags/regions/svg/ta.svg";

export function Example() {
  return <img src={tatarstanSvg} width={48} alt="Флаг Республики Татарстан" />;
}
```

React-пакет также оставляет compatibility entry-point'ы для импортов с кодом в верхнем регистре:

```tsx
import tatarstanSvg from "@russian-flags/regions-react/svg/TA.svg";
```

Эти entry-point'ы не содержат локальных SVG-файлов и реэкспортируют URL из `@russian-flags/regions`.

## Поиск региона

`RegionFlag`, `loadRegionFlag`, `preloadRegionFlag` и метаданные принимают те же значения, что и базовый пакет:

- короткий код: `"TA"`;
- ISO-код: `"RU-TA"`;
- автомобильный код: `16`, `"16"` или `"016"`;
- русское или английское название;
- алиас из справочника, например `"TATARSTAN"`.

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

console.log(getRegionMeta("RU-TA")?.nameRu); // "Республика Татарстан"
```

Ввод нормализуется базовым пакетом: пробелы по краям удаляются, префикс `RU-` отбрасывается, регистр не важен, пробелы и дефисы приводятся к `_`.

## Ленивое отображение списка

```tsx
import { RegionFlag, regions } from "@russian-flags/regions-react";

export function RegionList() {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.code}>
          <RegionFlag code={region.code} width={32} loadingFallback={null} />
          <span>{region.nameRu}</span>
        </li>
      ))}
    </ul>
  );
}
```

`RegionFlag` использует `React.lazy` и `Suspense`, поэтому каждый флаг загружается через динамический импорт своего компонента.

## Preload

`preloadRegionFlag` запускает загрузку модуля флага без ожидания результата. Это удобно на `hover`, `focus` или перед появлением строки во viewport.

```tsx
import { preloadRegionFlag } from "@russian-flags/regions-react";

button.addEventListener("pointerenter", () => {
  preloadRegionFlag("TA");
});
```

Неизвестные значения игнорируются и не выбрасывают ошибку.

## API

| Экспорт | Описание |
| --- | --- |
| `RegionFlag` | Lazy React-компонент для отображения флага по коду региона. |
| `flagLoaders` | Таблица ленивых загрузчиков React-компонентов по короткому коду региона. |
| `getRegionFlagLoader(input)` | Возвращает lazy-loader React-компонента флага или `undefined`. |
| `loadRegionFlag(input)` | Лениво импортирует React-модуль флага. Бросает ошибку для неизвестного значения. |
| `preloadRegionFlag(input)` | Запускает загрузку React-модуля без ожидания результата. |
| `regions` | Массив метаданных `{ code, isoCode, nameRu, nameEn, numericCodes, aliases }`. |
| `regionCodes` | Массив всех доступных коротких кодов регионов. |
| `normalizeRegionCode(input)` | Нормализует пользовательский ввод перед поиском. |
| `resolveRegionCode(input)` | Возвращает короткий код региона по коду, ISO-коду, номеру, названию или алиасу. |
| `isRegionCode(input)` | Type guard для канонического `RegionCode`. |
| `getRegionMeta(input)` | Возвращает метаданные региона или `undefined`. |

## Entry-point'ы

| Entry-point | Назначение |
| --- | --- |
| `@russian-flags/regions-react` | Основной API: React-компонент, загрузчики, метаданные и типы. |
| `@russian-flags/regions-react/dynamic` | Только динамические загрузчики React-компонентов. |
| `@russian-flags/regions-react/meta` | Метаданные и функции поиска, реэкспортированные из `@russian-flags/regions`. |
| `@russian-flags/regions-react/regions` | Только массив `regions`. |
| `@russian-flags/regions-react/region-flag` | Только компонент `RegionFlag`. |
| `@russian-flags/regions-react/flags/<code>` | Прямой импорт React-компонента флага. |
| `@russian-flags/regions-react/svg/<CODE>.svg` | Compatibility импорт URL SVG из базового пакета. |

## Типы

Пакет поставляет `.d.ts` файлы и экспортирует основные типы:

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

`RegionFlagProps` основан на `ImgHTMLAttributes<HTMLImageElement>`, но исключает `src`: источник SVG выбирает сам компонент.

`IDynamicRegionFlagProps` добавляет поля:

| Поле | Назначение |
| --- | --- |
| `code` | Код, ISO-код, автокод, название или алиас региона. |
| `fallback` | React-узел для неизвестного значения. |
| `loadingFallback` | React-узел, который отображается во время lazy-загрузки. |

## Совместимость

Пакет рассчитан на React 18+, современные ESM-проекты и сборщики, которые поддерживают package exports и импорт SVG как URL.

React-компоненты можно использовать только в React-окружении. Метаданные (`regions`, `regionCodes`, `resolveRegionCode`, `getRegionMeta`) можно использовать отдельно, например для поиска, автокомплита или генерации списка доступных флагов.

## Демо

```bash
cd examples/vite-react
npm install
npm run dev
```

Vite откроет страницу примера в браузере. Пример устанавливает React-пакет из корня репозитория через `file:../..` и использует SVG-ассеты из `@russian-flags/regions`.

## Разработка

```bash
npm install
npm run build
npm test
npm run typecheck
npm pack --dry-run
```

Сборка устроена так:

1. `scripts/build.mjs` собирает TypeScript и TSX через `esbuild`.
2. `tsc --emitDeclarationOnly` генерирует `.d.ts` файлы в `dist`.
3. `src/svg/*.svg.ts` собираются в маленькие JS-модули, которые реэкспортят SVG URL из `@russian-flags/regions`.

Чтобы обновить набор регионов, сначала обновите базовый пакет `@russian-flags/regions`, затем синхронизируйте React-компоненты и wrapper entry-point'ы с его `regionCodes`.

## Репозиторий

- GitHub: <https://github.com/russian-flags/regions-react>
- Issues: <https://github.com/russian-flags/regions-react/issues>
- Базовый пакет: <https://github.com/russian-flags/regions>

## Лицензия

Код пакета распространяется по лицензии MIT. SVG-флаги поставляются базовым пакетом `@russian-flags/regions` и сохраняют свои исходные лицензии.
