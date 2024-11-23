import { createListenerMiddleware } from "@reduxjs/toolkit";

import { setDataAttribute } from "../../utils/set-data-attribute";
import { Size } from "./size";
import { setSize } from "./size-slice";

export const sizeListenerMiddleware = createListenerMiddleware();

sizeListenerMiddleware.startListening({
  actionCreator: setSize,
  effect: async ({ payload }) => {
    changeSize(payload);
  },
});

export const changeSize = (size: Size) => {
  setDataAttribute({
    attr: "data-size",
    value: size,
    element: document.getElementsByTagName("html")[0],
  });
};
