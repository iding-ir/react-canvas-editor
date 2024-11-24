import { createListenerMiddleware } from "@reduxjs/toolkit";

import { addLayer } from "../layers";
import { addLine } from "./lines-slice";

export const lineListenerMiddleware = createListenerMiddleware();

lineListenerMiddleware.startListening({
  actionCreator: addLine,
  effect: async ({ payload }, listenerApi) => {
    listenerApi.dispatch(
      addLayer({
        id: payload.id,
        type: "line",
      }),
    );
  },
});
