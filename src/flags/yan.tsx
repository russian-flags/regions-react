import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/yan";

export const regionCode = "YAN" as const;
export { src };

const YamaloNenetsAutonomousOkrugFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ямало-Ненецкий автономный округ",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default YamaloNenetsAutonomousOkrugFlag;
