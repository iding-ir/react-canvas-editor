import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { DEFAULT_TOOL, Tool } from "./tool";

export interface ToolState {
  current: Tool;
}

const initialState: ToolState = {
  current: DEFAULT_TOOL,
};

export const toolSlice = createAppSlice({
  name: "tool",
  initialState,
  reducers: (create) => ({
    setTool: create.reducer((state, { payload }: PayloadAction<Tool>) => {
      state.current = payload;
    }),
  }),
  selectors: {
    selectTool: ({ current }) => current,
  },
});

export const { setTool } = toolSlice.actions;

export const { selectTool } = toolSlice.selectors;
