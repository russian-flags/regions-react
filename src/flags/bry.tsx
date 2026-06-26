import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/bry";

export const regionCode = "BRY" as const;
export { src };

const BryanskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Брянская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default BryanskOblastFlag;
