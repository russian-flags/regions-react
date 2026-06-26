import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kha";

export const regionCode = "KHA" as const;
export { src };

const KhabarovskKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Хабаровский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KhabarovskKraiFlag;
