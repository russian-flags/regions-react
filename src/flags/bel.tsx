import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/bel";

export const regionCode = "BEL" as const;
export { src };

const BelgorodOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Белгородская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default BelgorodOblastFlag;
