import { createListenerMiddleware } from "@reduxjs/toolkit";

import { addLayer } from "../layers";
import { addImage } from "./image-slice";

export const imageListenerMiddleware = createListenerMiddleware();

imageListenerMiddleware.startListening({
  actionCreator: addImage,
  effect: async ({ payload }, listenerApi) => {
    listenerApi.dispatch(
      addLayer({
        id: payload.id,
        type: "image",
      }),
    );
  },
});
