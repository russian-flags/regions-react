import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/khm";

export const regionCode = "KHM" as const;
export { src };

const KhantyMansiAutonomousOkrugYugraFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ханты-Мансийский автономный округ — Югра",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default KhantyMansiAutonomousOkrugYugraFlag;
