import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/tul";

export const regionCode = "TUL" as const;
export { src };

const TulaOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Тульская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TulaOblastFlag;
