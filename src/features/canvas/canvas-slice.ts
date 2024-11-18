import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { Size } from "../../types";
import { DEFAULT_CANVAS_SIZE } from "./canvas";

export type Image = string;

export interface CanvasState {
  size: Size;
}

const initialState: CanvasState = {
  size: DEFAULT_CANVAS_SIZE,
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
  }),
  selectors: {
    selectCanvasSize: ({ size }) => size,
  },
});

export const { changeCanvasSize } = canvasSlice.actions;

export const { selectCanvasSize } = canvasSlice.selectors;
