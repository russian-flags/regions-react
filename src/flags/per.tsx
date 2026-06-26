import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/per";

export const regionCode = "PER" as const;
export { src };

const PermKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Пермский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default PermKraiFlag;
