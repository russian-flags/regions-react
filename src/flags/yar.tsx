import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/yar";

export const regionCode = "YAR" as const;
export { src };

const YaroslavlOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ярославская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default YaroslavlOblastFlag;
