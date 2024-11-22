import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setTool } from "../line";
import { setNavigation } from "./navigation-slice";

export const navigationListenerMiddleware = createListenerMiddleware();

navigationListenerMiddleware.startListening({
  actionCreator: setNavigation,
  effect: async ({ payload }, listenerApi) => {
    switch (payload) {
      case "line":
        listenerApi.dispatch(setTool("pen"));
        break;

      default:
        listenerApi.dispatch(setTool(null));
        break;
    }
  },
});
