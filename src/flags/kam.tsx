import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kam";

export const regionCode = "KAM" as const;
export { src };

const KamchatkaKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Камчатский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KamchatkaKraiFlag;
