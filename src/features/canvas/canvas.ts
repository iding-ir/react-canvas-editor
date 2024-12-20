export const MIN_CANVAS_WIDTH = 100;
export const MIN_CANVAS_HEIGHT = 100;
export const MAX_CANVAS_WIDTH = 2000;
export const MAX_CANVAS_HEIGHT = 2000;

export const DEFAULT_CANVAS_WIDTH = 480;
export const DEFAULT_CANVAS_HEIGHT = 320;
export const DEFAULT_CANVAS_BACKGROUND_COLOR = "#ffffff";
export const DEFAULT_CANVAS_NAME = "Untitled";

export enum TOOLS {
  pen = "pen",
  eraser = "eraser",
}

export const DEFAULT_TOOL = TOOLS.pen;

export type Tool = keyof typeof TOOLS;
