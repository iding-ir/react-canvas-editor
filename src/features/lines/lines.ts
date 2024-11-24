export type LineType = {
  id: string;
  size: number;
  color: string;
  tool: string | null;
  points: number[];
};

export const MIN_LINE_SIZE = 4;
export const MAX_LINE_SIZE = 64;

export const DEFAULT_LINE_SIZE = 12;
export const DEFAULT_LINE_COLOR = "#000000";
