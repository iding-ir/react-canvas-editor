import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_BRUSH_COLOR, DEFAULT_BRUSH_SIZE } from "./brush";

export type Line = {
  size: number;
  color: string;
  tool: string | null;
  points: number[];
};

export interface BrushState {
  size: number;
  color: string;
  tool: string | null;
  lines: Line[];
}

const initialState: BrushState = {
  size: DEFAULT_BRUSH_SIZE,
  color: DEFAULT_BRUSH_COLOR,
  tool: null,
  lines: [],
};

export const brushSlice = createAppSlice({
  name: "brush",
  initialState,
  reducers: (create) => ({
    addLine: create.reducer((state, { payload }: PayloadAction<Line>) => {
      state.lines = [...state.lines, payload];
    }),
    addPoint: create.reducer((state, { payload }: PayloadAction<number[]>) => {
      state.lines[state.lines.length - 1].points = [
        ...state.lines[state.lines.length - 1].points,
        ...payload,
      ];
    }),
    changeBrushSize: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size = payload;
      }
    ),
    setBrushColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.color = payload;
      }
    ),
  }),
  selectors: {
    selectLines: ({ lines }) => lines,
    selectBrushSize: ({ size }) => size,
    selectBrushColor: ({ color }) => color,
  },
});

export const { addLine, addPoint, changeBrushSize, setBrushColor } =
  brushSlice.actions;

export const { selectLines, selectBrushSize, selectBrushColor } =
  brushSlice.selectors;
