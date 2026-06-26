import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/alt";

export const regionCode = "ALT" as const;
export { src };

const AltaiKraiFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Алтайский край",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default AltaiKraiFlag;
