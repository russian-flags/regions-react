import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/spe";

export const regionCode = "SPE" as const;
export { src };

const SaintPetersburgFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Санкт-Петербург",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SaintPetersburgFlag;
