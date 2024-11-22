import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import {
  DEFAULT_CANVAS_BACKGROUND_COLOR,
  DEFAULT_CANVAS_HEIGHT,
  DEFAULT_CANVAS_WIDTH,
} from "./canvas";

export interface CanvasState {
  width: number;
  height: number;
  backgroundColor: string;
  selectedItem: string | null;
}

const initialState: CanvasState = {
  width: DEFAULT_CANVAS_WIDTH,
  height: DEFAULT_CANVAS_HEIGHT,
  backgroundColor: DEFAULT_CANVAS_BACKGROUND_COLOR,
  selectedItem: null,
};

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: (create) => ({
    changeCanvasWidth: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.width = payload;
      },
    ),
    changeCanvasHeight: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.height = payload;
      },
    ),
    setCanvasBackgroundColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.backgroundColor = payload;
      },
    ),
    setCanvasSelectedItem: create.reducer(
      (state, { payload }: PayloadAction<string | null>) => {
        state.selectedItem = payload;
      },
    ),
  }),
  selectors: {
    selectCanvasWidth: ({ width }) => width,
    selectCanvasHeight: ({ height }) => height,
    selectCanvasBackgroundColor: ({ backgroundColor }) => backgroundColor,
    selectCanvasSelectedItem: ({ selectedItem }) => selectedItem,
  },
});

export const {
  changeCanvasWidth,
  changeCanvasHeight,
  setCanvasBackgroundColor,
  setCanvasSelectedItem,
} = canvasSlice.actions;

export const {
  selectCanvasWidth,
  selectCanvasHeight,
  selectCanvasBackgroundColor,
  selectCanvasSelectedItem,
} = canvasSlice.selectors;
