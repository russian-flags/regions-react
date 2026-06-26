import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ore";

export const regionCode = "ORE" as const;
export { src };

const OrenburgOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Оренбургская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default OrenburgOblastFlag;
