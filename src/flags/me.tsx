import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/me";

export const regionCode = "ME" as const;
export { src };

const MariElRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Марий Эл",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default MariElRepublicFlag;
