import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_LINE_COLOR, DEFAULT_LINE_SIZE } from "./line";

export type LineType = {
  id: string;
  size: number;
  color: string;
  tool: string | null;
  points: number[];
};

export interface LineState {
  size: number;
  color: string;
  tool: string | null;
  lines: LineType[];
}

const initialState: LineState = {
  size: DEFAULT_LINE_SIZE,
  color: DEFAULT_LINE_COLOR,
  tool: null,
  lines: [],
};

export const lineSlice = createAppSlice({
  name: "line",
  initialState,
  reducers: (create) => ({
    addLine: create.reducer((state, { payload }: PayloadAction<LineType>) => {
      state.lines = [...state.lines, payload];
    }),
    deleteLine: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.lines = state.lines.filter((line) => line.id !== payload);
    }),
    addPoint: create.reducer((state, { payload }: PayloadAction<number[]>) => {
      state.lines[state.lines.length - 1].points = [
        ...state.lines[state.lines.length - 1].points,
        ...payload,
      ];
    }),
    changeLineSize: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size = payload;
      },
    ),
    setLineColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.color = payload;
      },
    ),
    setTool: create.reducer(
      (state, { payload }: PayloadAction<string | null>) => {
        state.tool = payload;
      },
    ),
  }),
  selectors: {
    selectLines: ({ lines }) => lines,
    selectLineSize: ({ size }) => size,
    selectLineColor: ({ color }) => color,
    selectTool: ({ tool }) => tool,
  },
});

export const {
  addLine,
  deleteLine,
  addPoint,
  changeLineSize,
  setLineColor,
  setTool,
} = lineSlice.actions;

export const { selectLines, selectLineSize, selectLineColor, selectTool } =
  lineSlice.selectors;
