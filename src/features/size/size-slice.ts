import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_SIZE, Size } from "./size";

export interface SizeState {
  current: Size;
}

const initialState: SizeState = {
  current: DEFAULT_SIZE,
};

export const sizeSlice = createAppSlice({
  name: "size",
  initialState,
  reducers: (create) => ({
    setSize: create.reducer((state, { payload }: PayloadAction<Size>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectSize: ({ current }) => current,
  },
});

export const { setSize } = sizeSlice.actions;

export const { selectSize } = sizeSlice.selectors;
