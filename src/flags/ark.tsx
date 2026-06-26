import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ark";

export const regionCode = "ARK" as const;
export { src };

const ArkhangelskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Архангельская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ArkhangelskOblastFlag;
