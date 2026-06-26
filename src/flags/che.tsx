import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/che";

export const regionCode = "CHE" as const;
export { src };

const ChelyabinskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Челябинская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ChelyabinskOblastFlag;
