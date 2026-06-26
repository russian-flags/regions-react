import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sta";

export const regionCode = "STA" as const;
export { src };

const StavropolKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ставропольский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default StavropolKraiFlag;
