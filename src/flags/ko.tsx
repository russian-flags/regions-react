import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ko";

export const regionCode = "KO" as const;
export { src };

const KomiRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Коми",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KomiRepublicFlag;
