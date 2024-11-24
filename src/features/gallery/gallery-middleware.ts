import { createListenerMiddleware } from "@reduxjs/toolkit";

import { addLayer } from "../layers";
import { addImage } from "./gallery-slice";

export const galleryListenerMiddleware = createListenerMiddleware();

galleryListenerMiddleware.startListening({
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
