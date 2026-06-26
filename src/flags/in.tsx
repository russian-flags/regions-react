import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/in";

export const regionCode = "IN" as const;
export { src };

const RepublicOfIngushetiaFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Ингушетия",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfIngushetiaFlag;
