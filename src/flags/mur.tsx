import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/mur";

export const regionCode = "MUR" as const;
export { src };

const MurmanskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Мурманская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default MurmanskOblastFlag;
