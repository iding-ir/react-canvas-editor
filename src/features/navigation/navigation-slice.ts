import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_NAVIGATION, NavigationItem } from "./navigation";

export interface NavigationState {
  current: NavigationItem;
}

const initialState: NavigationState = {
  current: DEFAULT_NAVIGATION,
};

export const navigationSlice = createAppSlice({
  name: "navigation",
  initialState,
  reducers: (create) => ({
    setNavigation: create.reducer(
      (state, { payload }: PayloadAction<NavigationItem>) => {
        state.current = payload;
      }
    ),
  }),
  selectors: {
    selectCurrentNavigation: ({ current }) => current,
  },
});

export const { setNavigation } = navigationSlice.actions;

export const { selectCurrentNavigation } = navigationSlice.selectors;
