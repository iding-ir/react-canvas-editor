import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setNavigation } from "./navigation-slice";
import { setTool } from "../canvas";

export const navigationListenerMiddleware = createListenerMiddleware();

navigationListenerMiddleware.startListening({
  actionCreator: setNavigation,
  effect: async ({ payload }, listenerApi) => {
    switch (payload) {
      case "brush":
        listenerApi.dispatch(setTool("pen"));
        break;

      case "eraser":
        listenerApi.dispatch(setTool("eraser"));
        break;

      default:
        listenerApi.dispatch(setTool(null));
        break;
    }
  },
});
