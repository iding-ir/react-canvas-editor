import { Sizes } from "../../types";

export const canvasSizes: Sizes = {
  sm: { width: 320, height: 240 },
  md: { width: 640, height: 480 },
  lg: { width: 800, height: 600 },
};

export const DEFAULT_CANVAS_SIZE = canvasSizes.md;

export enum TOOLS {
  pen = "pen",
  eraser = "eraser",
}

export const DEFAULT_TOOL = TOOLS.pen;

export type Tool = keyof typeof TOOLS;
