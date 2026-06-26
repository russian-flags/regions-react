import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ad";

export const regionCode = "AD" as const;
export { src };

const RepublicOfAdygeaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Адыгея",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfAdygeaFlag;
