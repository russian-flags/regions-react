import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sam";

export const regionCode = "SAM" as const;
export { src };

const SamaraOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Самарская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SamaraOblastFlag;
