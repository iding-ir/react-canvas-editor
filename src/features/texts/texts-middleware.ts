import { createListenerMiddleware } from "@reduxjs/toolkit";

import { addLayer } from "../layers";
import { addText } from "./texts-slice";

export const textListenerMiddleware = createListenerMiddleware();

textListenerMiddleware.startListening({
  actionCreator: addText,
  effect: async ({ payload }, listenerApi) => {
    listenerApi.dispatch(
      addLayer({
        id: payload.id,
        type: "text",
      }),
    );
  },
});
