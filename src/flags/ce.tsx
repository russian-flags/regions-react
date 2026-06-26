import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ce";

export const regionCode = "CE" as const;
export { src };

const ChechenRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Чеченская Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ChechenRepublicFlag;
