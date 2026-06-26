import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/pri";

export const regionCode = "PRI" as const;
export { src };

const PrimorskyKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Приморский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default PrimorskyKraiFlag;
