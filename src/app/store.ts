import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";

import { languageSlice } from "../features/language";
import { gallerySlice } from "../features/gallery";
import { canvasSlice } from "../features/canvas";
import { navigationSlice } from "../features/navigation";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { navigationListenerMiddleware } from "../features/navigation/navigation-middleware";
import { brushSlice } from "../features/brush";

const rootReducer = combineSlices(
  languageSlice,
  gallerySlice,
  canvasSlice,
  brushSlice,
  navigationSlice
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
