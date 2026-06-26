import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/bu";

export const regionCode = "BU" as const;
export { src };

const RepublicOfBuryatiaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Бурятия",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfBuryatiaFlag;
