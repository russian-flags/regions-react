import { useMemo, useState } from "react";
import { RegionFlag, type IRegionMeta, type RegionCode } from "@russian-flags/regions-react";
import { getRegionMeta, regions } from "@russian-flags/regions-react/meta";
import tatarstanSvgMarkup from "@russian-flags/regions/svg/ta.svg?raw";

const featuredCodes: RegionCode[] = ["MOW", "MOS", "KDA", "SPE", "ARK", "TOM", "IVA", "SAR"];

export function App() {
  const [selectedCode, setSelectedCode] = useState<RegionCode>("TA");
  const selectedRegion = getRegionMeta(selectedCode);

  const featuredRegions = useMemo(
    () =>
      featuredCodes
        .map((code) => getRegionMeta(code))
        .filter((region): region is IRegionMeta => region !== undefined),
    [],
  );

  return (
    <main className="page">
      <section className="intro">
        <div>
          <p className="eyebrow">@russian-flags/regions-react</p>
          <h1>Флаги регионов России для React</h1>
          <p className="lead">
            Прямые импорты, lazy-загрузка и метаданные для 89 субъектов.
          </p>
        </div>

        <div className="quickPreview">
          <RegionFlag code="TA" width={112} loadingFallback={null} />
          <span>Lazy-загрузка: code="TA"</span>
          <div
            className="inlineFlag"
            role="img"
            aria-label="Флаг Республики Татарстан"
            dangerouslySetInnerHTML={{ __html: tatarstanSvgMarkup }}
          />
          <span>Inline SVG: @russian-flags/regions/svg/ta.svg?raw</span>
        </div>
      </section>

      <section className="picker">
        <label htmlFor="region">Регион</label>
        <select
          id="region"
          value={selectedCode}
          onChange={(event) => setSelectedCode(event.target.value as RegionCode)}
        >
          {regions.map((region) => (
            <option key={region.code} value={region.code}>
              {region.nameRu}
            </option>
          ))}
        </select>

        <div className="selectedRegion">
          <RegionFlag code={selectedCode} width={144} loadingFallback={null} />
          <div>
            <strong>{selectedRegion?.nameRu}</strong>
            <span>{selectedRegion?.isoCode}</span>
          </div>
        </div>
      </section>

      <section className="gallery" aria-label="Примеры флагов">
        {featuredRegions.map((region) => (
          <article key={region.code} className="flagItem">
            <RegionFlag code={region.code} width={96} loadingFallback={null} />
            <div>
              <strong>{region.code}</strong>
              <span>{region.nameRu}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
