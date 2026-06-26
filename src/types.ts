import type { ComponentType, ImgHTMLAttributes, ReactNode } from "react";
import type {
  IRegionMeta,
  RegionCode,
  RegionInput,
  RegionMeta,
} from "@russian-flags/regions";

export type { IRegionMeta, RegionCode, RegionInput, RegionMeta };

export type RegionFlagProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src">;

export type RegionFlagComponent = ComponentType<RegionFlagProps>;

export interface IRegionFlagModule {
  readonly default: RegionFlagComponent;
  readonly regionCode: RegionCode;
  readonly src: string;
}

export interface IDynamicRegionFlagProps extends RegionFlagProps {
  readonly code: RegionInput;
  readonly fallback?: ReactNode;
  readonly loadingFallback?: ReactNode;
}
