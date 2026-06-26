import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/nvs";

export const regionCode = "NVS" as const;
export { src };

const NovosibirskOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Новосибирская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default NovosibirskOblastFlag;
