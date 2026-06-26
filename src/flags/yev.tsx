import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/yev";

export const regionCode = "YEV" as const;
export { src };

const JewishAutonomousOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Еврейская автономная область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default JewishAutonomousOblastFlag;
