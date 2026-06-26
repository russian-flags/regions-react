import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/zab";

export const regionCode = "ZAB" as const;
export { src };

const ZabaykalskyKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Забайкальский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ZabaykalskyKraiFlag;
