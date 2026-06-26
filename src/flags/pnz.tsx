import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/pnz";

export const regionCode = "PNZ" as const;
export { src };

const PenzaOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Пензенская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default PenzaOblastFlag;
