import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/sa";

export const regionCode = "SA" as const;
export { src };

const SakhaRepublicYakutiaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Саха (Якутия)",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default SakhaRepublicYakutiaFlag;
