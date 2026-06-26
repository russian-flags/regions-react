import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/lip";

export const regionCode = "LIP" as const;
export { src };

const LipetskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Липецкая область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default LipetskOblastFlag;
