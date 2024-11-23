import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_ZOOM, Zoom } from "./overview";

export interface OverviewState {
  zoom: Zoom;
}

const initialState: OverviewState = {
  zoom: DEFAULT_ZOOM,
};

export const overviewSlice = createAppSlice({
  name: "overview",
  initialState,
  reducers: (create) => ({
    setZoom: create.reducer((state, { payload }: PayloadAction<Zoom>) => {
      state.zoom = payload;
    }),
  }),
  selectors: {
    selectZoom: ({ zoom }) => zoom,
  },
});

export const { setZoom } = overviewSlice.actions;

export const { selectZoom } = overviewSlice.selectors;
