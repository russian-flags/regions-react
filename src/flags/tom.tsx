import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/tom";

export const regionCode = "TOM" as const;
export { src };

const TomskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Томская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TomskOblastFlag;
