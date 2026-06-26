import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/psk";

export const regionCode = "PSK" as const;
export { src };

const PskovOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Псковская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default PskovOblastFlag;
