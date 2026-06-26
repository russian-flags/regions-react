import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kc";

export const regionCode = "KC" as const;
export { src };

const KarachayCherkessRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Карачаево-Черкесская Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KarachayCherkessRepublicFlag;
