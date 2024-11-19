import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_BRUSH_SIZE } from "./brush";

export type Image = string;

export interface BrushState {
  size: number;
  backgroundColor: string;
}

const initialState: BrushState = {
  size: DEFAULT_BRUSH_SIZE,
  backgroundColor: "#ffffff",
};

export const brushSlice = createAppSlice({
  name: "brush",
  initialState,
  reducers: (create) => ({
    changeBrushSize: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size = payload;
      }
    ),
    setBrushColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.backgroundColor = payload;
      }
    ),
  }),
  selectors: {
    selectBrushSize: ({ size }) => size,
    selectBrushColor: ({ backgroundColor }) => backgroundColor,
  },
});

export const { changeBrushSize, setBrushColor } = brushSlice.actions;

export const { selectBrushSize, selectBrushColor } = brushSlice.selectors;
