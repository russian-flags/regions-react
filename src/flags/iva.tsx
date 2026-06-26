import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/iva";

export const regionCode = "IVA" as const;
export { src };

const IvanovoOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ивановская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default IvanovoOblastFlag;
