import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/kgn";

export const regionCode = "KGN" as const;
export { src };

const KurganOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Курганская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KurganOblastFlag;
