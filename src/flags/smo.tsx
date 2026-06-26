import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/smo";

export const regionCode = "SMO" as const;
export { src };

const SmolenskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Смоленская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SmolenskOblastFlag;
