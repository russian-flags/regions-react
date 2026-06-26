import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/cu";

export const regionCode = "CU" as const;
export { src };

const ChuvashRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Чувашская Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default ChuvashRepublicFlag;
