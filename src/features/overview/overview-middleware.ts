import { createListenerMiddleware } from "@reduxjs/toolkit";

import { scaleDomElement } from "../../utils/scale-dom-element";
import { Zoom } from "./overview";
import { setZoom } from "./overview-slice";

export const overviewListenerMiddleware = createListenerMiddleware();

overviewListenerMiddleware.startListening({
  actionCreator: setZoom,
  effect: async ({ payload }) => {
    changeStageScale(payload);
  },
});

export const changeStageScale = (zoom: Zoom) => {
  scaleDomElement({
    element: document.getElementById("stage")!,
    scale: Number(zoom) / 100,
  });
};
