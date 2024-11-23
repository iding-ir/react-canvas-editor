export enum SIZES {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export const DEFAULT_SIZE = SIZES.md;
export const FALLBACK_SIZE = SIZES.md;

export type Size = keyof typeof SIZES;
