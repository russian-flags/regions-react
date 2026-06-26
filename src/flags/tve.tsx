import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/tve";

export const regionCode = "TVE" as const;
export { src };

const TverOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Тверская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default TverOblastFlag;
