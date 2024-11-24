import { createListenerMiddleware } from "@reduxjs/toolkit";

import { deleteImage } from "../gallery";
import { deleteLine } from "../line";
import { deleteText } from "../text";
import { deleteLayer } from "./layers-slice";

export const layersListenerMiddleware = createListenerMiddleware();

layersListenerMiddleware.startListening({
  actionCreator: deleteLayer,
  effect: async ({ payload }, listenerApi) => {
    switch (payload.type) {
      case "image":
        listenerApi.dispatch(deleteImage(payload.id));
        break;

      case "line":
        listenerApi.dispatch(deleteLine(payload.id));
        break;

      case "text":
        listenerApi.dispatch(deleteText(payload.id));
        break;
    }
  },
});
