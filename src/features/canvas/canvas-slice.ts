import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import {
  DEFAULT_CANVAS_WIDTH,
  DEFAULT_CANVAS_HEIGHT,
  DEFAULT_CANVAS_BACKGROUND_COLOR,
} from "./canvas";

export interface CanvasState {
  width: number;
  height: number;
  backgroundColor: string;
}

const initialState: CanvasState = {
  width: DEFAULT_CANVAS_WIDTH,
  height: DEFAULT_CANVAS_HEIGHT,
  backgroundColor: DEFAULT_CANVAS_BACKGROUND_COLOR,
};

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: (create) => ({
    changeCanvasWidth: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.width = payload;
      }
    ),
    changeCanvasHeight: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.height = payload;
      }
    ),
    setCanvasBackgroundColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.backgroundColor = payload;
      }
    ),
  }),
  selectors: {
    selectCanvasWidth: ({ width }) => width,
    selectCanvasHeight: ({ height }) => height,
    selectCanvasBackgroundColor: ({ backgroundColor }) => backgroundColor,
  },
});

export const {
  changeCanvasWidth,
  changeCanvasHeight,
  setCanvasBackgroundColor,
} = canvasSlice.actions;

export const {
  selectCanvasWidth,
  selectCanvasHeight,
  selectCanvasBackgroundColor,
} = canvasSlice.selectors;
