import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ty";

export const regionCode = "TY" as const;
export { src };

const TyvaRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Тыва",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TyvaRepublicFlag;
