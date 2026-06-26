import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ud";

export const regionCode = "UD" as const;
export { src };

const UdmurtRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Удмуртская Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default UdmurtRepublicFlag;
