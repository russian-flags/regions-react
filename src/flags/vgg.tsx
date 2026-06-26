import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/vgg";

export const regionCode = "VGG" as const;
export { src };

const VolgogradOblastFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Волгоградская область",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default VolgogradOblastFlag;
