import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kem";

export const regionCode = "KEM" as const;
export { src };

const KemerovoOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Кемеровская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KemerovoOblastFlag;
