import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/lnr";

export const regionCode = "LNR" as const;
export { src };

const LuhanskPeoplesRepublicFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Луганская Народная Республика",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default LuhanskPeoplesRepublicFlag;
