import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/mow";

export const regionCode = "MOW" as const;
export { src };

const MoscowFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Москва",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default MoscowFlag;
