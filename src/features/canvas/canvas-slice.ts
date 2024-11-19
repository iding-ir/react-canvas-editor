import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { Size } from "../../types";
import { DEFAULT_CANVAS_SIZE, Tool } from "./canvas";

export type Image = string;

export interface CanvasState {
  size: Size;
  backgroundColor: string;
  tool: Tool | null;
}

const initialState: CanvasState = {
  size: DEFAULT_CANVAS_SIZE,
  backgroundColor: "#ffffff",
  tool: null,
};

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: (create) => ({
    changeCanvasSize: create.reducer(
      (state, { payload }: PayloadAction<Size>) => {
        state.size = payload;
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

export const { changeCanvasSize, setCanvasBackgroundColor, setTool } =
  canvasSlice.actions;

export const { selectCanvasSize, selectCanvasBackgroundColor, selectTool } =
  canvasSlice.selectors;
