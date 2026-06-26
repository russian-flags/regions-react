import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sak";

export const regionCode = "SAK" as const;
export { src };

const SakhalinOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Сахалинская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SakhalinOblastFlag;
