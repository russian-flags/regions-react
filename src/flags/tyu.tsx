import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/tyu";

export const regionCode = "TYU" as const;
export { src };

const TyumenOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Тюменская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TyumenOblastFlag;
