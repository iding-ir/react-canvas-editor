import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_THEME, Theme } from "./theme";

export interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: DEFAULT_THEME,
};

export const themeSlice = createAppSlice({
  name: "theme",
  initialState,
  reducers: (create) => ({
    setTheme: create.reducer((state, { payload }: PayloadAction<Theme>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectTheme: ({ current }) => current,
  },
});

export const { setTheme } = themeSlice.actions;

export const { selectTheme } = themeSlice.selectors;
