import { flagLoaders } from "./flagLoaders.js";
import { resolveRegionCode } from "./meta.js";
import type { IRegionFlagModule, RegionInput } from "./types.js";

/**
 * Возвращает lazy-loader React-компонента флага для переданного региона.
 *
 * Функция принимает те же варианты ввода, что и остальные публичные API:
 * короткий код региона (`"TA"`), ISO-код с префиксом (`"RU-TA"`),
 * числовой автомобильный код (`16`) или поддерживаемый алиас
 * (`"TATARSTAN"`). Перед поиском значение нормализуется через
 * `resolveRegionCode`, поэтому потребителю не нужно вручную приводить строку
 * к верхнему регистру или убирать префикс `RU-`.
 *
 * В отличие от `loadRegionFlag`, эта функция не загружает модуль сразу и не
 * выбрасывает ошибку для неизвестного региона. Она возвращает функцию загрузки,
 * которую можно передать в `React.lazy`, вызвать позже по пользовательскому
 * действию или использовать для собственной стратегии кеширования.
 *
 * @example
 * ```ts
 * import { getRegionFlagLoader } from "@russian-flags/regions-react/dynamic";
 *
 * const loader = getRegionFlagLoader("RU-TA");
 *
 * if (loader) {
 *   const { default: TatarstanFlag } = await loader();
 * }
 * ```
 *
 * @param input - Код, ISO-код, числовой код или алиас региона.
 * @returns Функция динамического импорта модуля флага или `undefined`, если регион не найден.
 */
export function getRegionFlagLoader(input: RegionInput) {
  const code = resolveRegionCode(input);
  return code ? flagLoaders[code] : undefined;
}

/**
 * Загружает модуль флага региона через динамический импорт.
 *
 * Это удобная обертка над `getRegionFlagLoader` для сценариев, где модуль нужен
 * прямо сейчас: например, чтобы получить React-компонент флага, `src` SVG или
 * код региона после нормализации. Функция загружает только один файл флага, а
 * не весь набор из 89 регионов, поэтому подходит для пользовательского выбора,
 * таблиц, карточек и других runtime-сценариев.
 *
 * Если регион не удается распознать, функция выбрасывает ошибку. Для мягкого
 * поведения без исключений используйте `getRegionFlagLoader` и проверяйте
 * результат на `undefined`.
 *
 * @example
 * ```tsx
 * import { loadRegionFlag } from "@russian-flags/regions-react/dynamic";
 *
 * const { default: Flag, src, regionCode } = await loadRegionFlag(16);
 *
 * console.log(regionCode); // "TA"
 * console.log(src); // URL SVG-файла после сборки
 * ```
 *
 * @param input - Код, ISO-код, числовой код или алиас региона.
 * @returns Promise с модулем флага: React-компонентом по умолчанию, `regionCode` и `src`.
 * @throws Error если регион неизвестен или не поддерживается пакетом.
 */
export async function loadRegionFlag(input: RegionInput): Promise<IRegionFlagModule> {
  const loader = getRegionFlagLoader(input);

  if (!loader) {
    throw new Error(`Unknown Russian region flag code: ${String(input)}`);
  }

  return loader();
}

/**
 * Запускает фоновую загрузку модуля флага без ожидания результата.
 *
 * Функция полезна для прогрева чанка перед ожидаемым отображением флага:
 * например, при наведении на строку, открытии селекта, переходе между шагами
 * формы или перед показом карточки региона. Повторные вызовы обычно
 * обслуживаются кешем модульной системы бандлера/браузера.
 *
 * Если регион неизвестен, функция ничего не делает и не выбрасывает ошибку.
 * Это делает ее безопасной для speculative preload, когда входные данные могут
 * приходить от пользователя или внешнего API.
 *
 * @example
 * ```tsx
 * import { preloadRegionFlag } from "@russian-flags/regions-react/dynamic";
 *
 * button.addEventListener("mouseenter", () => {
 *   preloadRegionFlag("TATARSTAN");
 * });
 * ```
 *
 * @param input - Код, ISO-код, числовой код или алиас региона.
 */
export function preloadRegionFlag(input: RegionInput): void {
  void getRegionFlagLoader(input)?.();
}
