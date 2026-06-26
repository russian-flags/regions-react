import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kgd";

export const regionCode = "KGD" as const;
export { src };

const KaliningradOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Калининградская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KaliningradOblastFlag;
