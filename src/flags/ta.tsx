import React from "react";
import type { RegionFlagProps } from "../types.js";
import src from "@russian-flags/regions/svg/ta";

export const regionCode = "TA" as const;
export { src };

const RepublicOfTatarstanFlag:React.FC<RegionFlagProps> = ({
  alt = "Флаг Республика Татарстан",
  decoding = "async",
  loading = "lazy",
  ...props
} ) => {
  return <img src={src} alt={alt} decoding={decoding} loading={loading} {...props} />;
};

export default RepublicOfTatarstanFlag;
