import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { Size } from "../../types";
import { DEFAULT_CANVAS_WIDTH, DEFAULT_CANVAS_HEIGHT, Tool } from "./canvas";

export type Image = string;

export interface CanvasState {
  size: Size;
  backgroundColor: string;
  tool: Tool | null;
}

const initialState: CanvasState = {
  size: { width: DEFAULT_CANVAS_WIDTH, height: DEFAULT_CANVAS_HEIGHT },
  backgroundColor: "#ffffff",
  tool: null,
};

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: (create) => ({
    changeCanvasWidth: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size.width = payload;
      }
    ),
    changeCanvasHeight: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size.height = payload;
      }
    ),
    setCanvasBackgroundColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.backgroundColor = payload;
      }
    ),
    setTool: create.reducer(
      (state, { payload }: PayloadAction<Tool | null>) => {
        state.tool = payload;
      }
    ),
  }),
  selectors: {
    selectCanvasSize: ({ size }) => size,
    selectCanvasBackgroundColor: ({ backgroundColor }) => backgroundColor,
    selectTool: ({ tool }) => tool,
  },
});

export const {
  changeCanvasWidth,
  changeCanvasHeight,
  setCanvasBackgroundColor,
  setTool,
} = canvasSlice.actions;

export const { selectCanvasSize, selectCanvasBackgroundColor, selectTool } =
  canvasSlice.selectors;
