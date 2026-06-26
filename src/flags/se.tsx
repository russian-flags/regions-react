import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/se";

export const regionCode = "SE" as const;
export { src };

const RepublicOfNorthOssetiaAlaniaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Северная Осетия — Алания",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfNorthOssetiaAlaniaFlag;
