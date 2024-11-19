import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_SIZE } from "./text";

export type Text = {
  text: string;
  size: number;
  color: string;
};

export interface TextState {
  size: number;
  color: string;
  texts: Text[];
}

const initialState: TextState = {
  size: DEFAULT_TEXT_SIZE,
  color: DEFAULT_TEXT_COLOR,
  texts: [],
};

export const textSlice = createAppSlice({
  name: "text",
  initialState,
  reducers: (create) => ({
    addText: create.reducer((state, { payload }: PayloadAction<Text>) => {
      state.texts = [...state.texts, payload];
    }),
    changeTextSize: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size = payload;
      }
    ),
    setTextColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.color = payload;
      }
    ),
  }),
  selectors: {
    selectTexts: ({ texts }) => texts,
    selectTextSize: ({ size }) => size,
    selectTextColor: ({ color }) => color,
  },
});

export const { addText, changeTextSize, setTextColor } = textSlice.actions;

export const { selectTexts, selectTextSize, selectTextColor } =
  textSlice.selectors;
