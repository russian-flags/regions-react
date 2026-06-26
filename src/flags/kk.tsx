import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kk";

export const regionCode = "KK" as const;
export { src };

const RepublicOfKhakassiaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Хакасия",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfKhakassiaFlag;
