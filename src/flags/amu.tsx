import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/amu";

export const regionCode = "AMU" as const;
export { src };

const AmurOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Амурская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default AmurOblastFlag;
