import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ros";

export const regionCode = "ROS" as const;
export { src };

const RostovOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Ростовская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RostovOblastFlag;
