import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/len";

export const regionCode = "LEN" as const;
export { src };

const LeningradOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ленинградская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default LeningradOblastFlag;
