import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/al";

export const regionCode = "AL" as const;
export { src };

const AltaiRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Алтай",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default AltaiRepublicFlag;
