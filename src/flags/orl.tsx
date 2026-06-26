import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/orl";

export const regionCode = "ORL" as const;
export { src };

const OryolOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Орловская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default OryolOblastFlag;
