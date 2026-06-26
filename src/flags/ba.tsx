import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ba";

export const regionCode = "BA" as const;
export { src };

const RepublicOfBashkortostanFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Башкортостан",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfBashkortostanFlag;
