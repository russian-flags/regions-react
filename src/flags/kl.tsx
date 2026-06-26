import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kl";

export const regionCode = "KL" as const;
export { src };

const RepublicOfKalmykiaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Калмыкия",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfKalmykiaFlag;
