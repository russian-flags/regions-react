import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sar";

export const regionCode = "SAR" as const;
export { src };

const SaratovOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Саратовская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SaratovOblastFlag;
