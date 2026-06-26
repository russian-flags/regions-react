import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/oms";

export const regionCode = "OMS" as const;
export { src };

const OmskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Омская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default OmskOblastFlag;
