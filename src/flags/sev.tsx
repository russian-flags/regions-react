import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sev";

export const regionCode = "SEV" as const;
export { src };

const SevastopolFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Севастополь",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SevastopolFlag;
