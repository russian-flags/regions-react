import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/tam";

export const regionCode = "TAM" as const;
export { src };

const TambovOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Тамбовская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TambovOblastFlag;
