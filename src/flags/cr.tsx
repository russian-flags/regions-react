import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/cr";

export const regionCode = "CR" as const;
export { src };

const RepublicOfCrimeaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Крым",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfCrimeaFlag;
