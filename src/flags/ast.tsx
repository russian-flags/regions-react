import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ast";

export const regionCode = "AST" as const;
export { src };

const AstrakhanOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Астраханская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default AstrakhanOblastFlag;
