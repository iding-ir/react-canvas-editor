import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import {
  DEFAULT_CANVAS_BACKGROUND_COLOR,
  DEFAULT_CANVAS_HEIGHT,
  DEFAULT_CANVAS_NAME,
  DEFAULT_CANVAS_WIDTH,
} from "./canvas";

export interface CanvasState {
  name: string;
  width: number;
  height: number;
  backgroundColor: string;
  selectedItem: string | null;
}

const initialState: CanvasState = {
  name: DEFAULT_CANVAS_NAME,
  width: DEFAULT_CANVAS_WIDTH,
  height: DEFAULT_CANVAS_HEIGHT,
  backgroundColor: DEFAULT_CANVAS_BACKGROUND_COLOR,
  selectedItem: null,
};

export const canvasSlice = createAppSlice({
  name: "canvas",
  initialState,
  reducers: (create) => ({
    setCanvasName: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.name = payload;
      },
    ),
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
    selectCanvasName: ({ name }) => name,
    selectCanvasWidth: ({ width }) => width,
    selectCanvasHeight: ({ height }) => height,
    selectCanvasBackgroundColor: ({ backgroundColor }) => backgroundColor,
    selectCanvasSelectedItem: ({ selectedItem }) => selectedItem,
  },
});

export const {
  setCanvasName,
  changeCanvasWidth,
  changeCanvasHeight,
  setCanvasBackgroundColor,
  setCanvasSelectedItem,
} = canvasSlice.actions;

export const {
  selectCanvasName,
  selectCanvasWidth,
  selectCanvasHeight,
  selectCanvasBackgroundColor,
  selectCanvasSelectedItem,
} = canvasSlice.selectors;
