import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/nen";

export const regionCode = "NEN" as const;
export { src };

const NenetsAutonomousOkrugFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ненецкий автономный округ",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default NenetsAutonomousOkrugFlag;
