import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/chu";

export const regionCode = "CHU" as const;
export { src };

const ChukotkaAutonomousOkrugFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Чукотский автономный округ",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ChukotkaAutonomousOkrugFlag;
