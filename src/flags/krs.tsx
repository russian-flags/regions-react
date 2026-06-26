import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/krs";

export const regionCode = "KRS" as const;
export { src };

const KurskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Курская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KurskOblastFlag;
