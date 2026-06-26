import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/dnr";

export const regionCode = "DNR" as const;
export { src };

const DonetskPeoplesRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Донецкая Народная Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default DonetskPeoplesRepublicFlag;
