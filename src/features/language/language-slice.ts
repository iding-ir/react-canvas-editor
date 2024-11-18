import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_LANGUAGE, Language } from "./language";

export interface LanguageState {
  current: Language;
}

const initialState: LanguageState = {
  current: DEFAULT_LANGUAGE,
};

export const languageSlice = createAppSlice({
  name: "language",
  initialState,
  reducers: (create) => ({
    setLanguage: create.reducer(
      (state, { payload }: PayloadAction<Language>) => {
        state.current = payload;
      },
    ),
  }),
  selectors: {
    selectLanguage: ({ current }) => current,
  },
});

export const { setLanguage } = languageSlice.actions;

export const { selectLanguage } = languageSlice.selectors;
