import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setDataAttribute } from "../../utils/set-data-attribute";
import { Theme } from "./theme";
import { setTheme } from "./theme-slice";

export const themeListenerMiddleware = createListenerMiddleware();

themeListenerMiddleware.startListening({
  actionCreator: setTheme,
  effect: async ({ payload }) => {
    changeTheme(payload);
  },
});

export const changeTheme = (theme: Theme) => {
  setDataAttribute({
    attr: "data-theme",
    value: theme,
    element: document.getElementsByTagName("html")[0],
  });
};
