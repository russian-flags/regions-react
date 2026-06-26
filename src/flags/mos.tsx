import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/mos";

export const regionCode = "MOS" as const;
export { src };

const MoscowOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Московская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default MoscowOblastFlag;
