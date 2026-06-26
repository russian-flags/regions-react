import {lazy, Suspense, useMemo, type LazyExoticComponent, type FC} from "react";
import {flagLoaders} from "../flagLoaders.js";
import {getRegionMeta, resolveRegionCode} from "../meta.js";
import type {IDynamicRegionFlagProps, RegionCode, RegionFlagComponent} from "../types.js";

const DEFAULT_REGION_FLAG_FALLBACK = null;
const DEFAULT_REGION_FLAG_LOADING_FALLBACK = null;

const lazyRegionFlagCache = new Map<RegionCode, LazyExoticComponent<RegionFlagComponent>>();

const getLazyRegionFlag = (code: RegionCode): LazyExoticComponent<RegionFlagComponent> => {
  const cached = lazyRegionFlagCache.get(code);
  if (cached) return cached;

  const LazyFlag = lazy(flagLoaders[code]);
  lazyRegionFlagCache.set(code, LazyFlag);

  return LazyFlag;
};

/**
 * Ленивый React-компонент для отображения флага региона России по коду.
 *
 * Компонент принимает буквенные коды ISO 3166-2 без префикса `RU-`, коды с
 * префиксом `RU-`, числовые автомобильные коды региона и поддерживаемые
 * алиасы. Перед рендером значение нормализуется через `resolveRegionCode`,
 * после чего загружается только нужный модуль флага через `React.lazy`.
 *
 * Это основной удобный API для случаев, когда код региона известен только во
 * время выполнения: пришёл из API, формы, URL, пользовательских настроек или
 * таблицы данных. Если регион известен на этапе сборки, прямой импорт вида
 * `@russian-flags/regions-react/flags/ta` будет ещё легче.
 *
 * При неизвестном коде компонент не выбрасывает ошибку, а возвращает `fallback`.
 * Во время загрузки lazy-компонента внутри `Suspense` отображается
 * `loadingFallback`.
 *
 * Все остальные props пробрасываются в итоговый `<img>`, кроме `src`: источник
 * SVG определяется самим компонентом флага.
 *
 * @example
 * ```tsx
 * import { RegionFlag } from "@russian-flags/regions-react";
 *
 * export const RegionCell = () => (
 *   <RegionFlag code="TA" width={32} height={20} />
 * );
 * ```
 *
 * @example
 * ```tsx
 * <RegionFlag code="RU-TA" />
 * <RegionFlag code={16} />
 * <RegionFlag code="TATARSTAN" loadingFallback="Загрузка..." />
 * ```
 *
 * @param code - Код региона: например `TA`, `RU-TA`, `16` или поддерживаемый алиас.
 * @param fallback - React-узел для неизвестного или неподдерживаемого кода региона.
 * @param loadingFallback - React-узел, который показывается во время lazy-загрузки.
 * @param alt - Альтернативный текст изображения. Если не передан, строится из метаданных региона.
 */
export const RegionFlag:FC<IDynamicRegionFlagProps> = ({code, fallback = DEFAULT_REGION_FLAG_FALLBACK, loadingFallback = DEFAULT_REGION_FLAG_LOADING_FALLBACK,  alt, ...props}) => {

  const resolvedCode = resolveRegionCode(code);
  const LazyFlag = useMemo(
    () => (resolvedCode ? getLazyRegionFlag(resolvedCode) : null),
    [resolvedCode],
  );

  if (!resolvedCode || !LazyFlag) return <>{fallback}</>;


  const meta = getRegionMeta(resolvedCode);

  return (
    <Suspense fallback={loadingFallback}>
      <LazyFlag alt={alt ?? `Флаг: ${meta?.nameRu ?? resolvedCode}`} {...props} />
    </Suspense>
  );
};
