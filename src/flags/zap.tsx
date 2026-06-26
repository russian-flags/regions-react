import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/zap";

export const regionCode = "ZAP" as const;
export { src };

const ZaporizhzhiaOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Запорожская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ZaporizhzhiaOblastFlag;
