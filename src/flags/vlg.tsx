import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/vlg";

export const regionCode = "VLG" as const;
export { src };

const VologdaOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Вологодская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default VologdaOblastFlag;
