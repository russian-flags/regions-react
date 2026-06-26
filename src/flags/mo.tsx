import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/mo";

export const regionCode = "MO" as const;
export { src };

const RepublicOfMordoviaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Мордовия",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfMordoviaFlag;
