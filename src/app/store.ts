import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";

import { brushSlice } from "../features/brush";
import { canvasSlice } from "../features/canvas";
import { gallerySlice } from "../features/gallery";
import { languageSlice } from "../features/language";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { navigationSlice } from "../features/navigation";
import { navigationListenerMiddleware } from "../features/navigation/navigation-middleware";
import { textSlice } from "../features/text";

const rootReducer = combineSlices(
  navigationSlice,
  languageSlice,
  gallerySlice,
  canvasSlice,
  brushSlice,
  textSlice,
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(languageListenerMiddleware.middleware)
      .prepend(navigationListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
