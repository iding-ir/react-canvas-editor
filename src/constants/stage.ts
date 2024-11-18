export type Size = {
  width: number;
  height: number;
};

export type Sizes = {
  [key: string]: Size;
};

export const sizes: Sizes = {
  sm: { width: 320, height: 240 },
  md: { width: 640, height: 480 },
  lg: { width: 800, height: 600 },
};
