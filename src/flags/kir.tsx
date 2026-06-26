import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kir";

export const regionCode = "KIR" as const;
export { src };

const KirovOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Кировская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KirovOblastFlag;
