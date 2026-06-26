import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/irk";

export const regionCode = "IRK" as const;
export { src };

const IrkutskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Иркутская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default IrkutskOblastFlag;
