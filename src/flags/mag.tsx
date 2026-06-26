import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/mag";

export const regionCode = "MAG" as const;
export { src };

const MagadanOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Магаданская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default MagadanOblastFlag;
