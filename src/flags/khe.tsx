import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/khe";

export const regionCode = "KHE" as const;
export { src };

const KhersonOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Херсонская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KhersonOblastFlag;
