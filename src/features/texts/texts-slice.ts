import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_TEXT_COLOR, DEFAULT_TEXT_SIZE, TextType } from "./texts";

export interface TextState {
  size: number;
  color: string;
  texts: TextType[];
}

const initialState: TextState = {
  size: DEFAULT_TEXT_SIZE,
  color: DEFAULT_TEXT_COLOR,
  texts: [],
};

export const textSlice = createAppSlice({
  name: "texts",
  initialState,
  reducers: (create) => ({
    addText: create.reducer((state, { payload }: PayloadAction<TextType>) => {
      state.texts = [...state.texts, payload];
    }),
    deleteText: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.texts = state.texts.filter((text) => text.id !== payload);
    }),
    changeTextSize: create.reducer(
      (state, { payload }: PayloadAction<number>) => {
        state.size = payload;
      },
    ),
    setTextColor: create.reducer(
      (state, { payload }: PayloadAction<string>) => {
        state.color = payload;
      },
    ),
  }),
  selectors: {
    selectTexts: ({ texts }) => texts,
    selectTextSize: ({ size }) => size,
    selectTextColor: ({ color }) => color,
  },
});

export const { addText, deleteText, changeTextSize, setTextColor } =
  textSlice.actions;

export const { selectTexts, selectTextSize, selectTextColor } =
  textSlice.selectors;
