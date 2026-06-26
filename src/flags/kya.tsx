import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kya";

export const regionCode = "KYA" as const;
export { src };

const KrasnoyarskKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Красноярский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KrasnoyarskKraiFlag;
