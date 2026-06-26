import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/vla";

export const regionCode = "VLA" as const;
export { src };

const VladimirOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Владимирская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default VladimirOblastFlag;
