import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { Size } from "../../types";
import { DEFAULT_CANVAS_SIZE, Tool } from "./canvas";

export type Image = string;

export interface CanvasState {
  size: Size;
  tool: Tool | null;
}

const initialState: CanvasState = {
  size: DEFAULT_CANVAS_SIZE,
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
    setTool: create.reducer((state, { payload }: PayloadAction<Tool>) => {
      state.tool = payload;
    }),
  }),
  selectors: {
    selectCanvasSize: ({ size }) => size,
    selectTool: ({ tool }) => tool,
  },
});

export const { changeCanvasSize, setTool } = canvasSlice.actions;

export const { selectCanvasSize, selectTool } = canvasSlice.selectors;
