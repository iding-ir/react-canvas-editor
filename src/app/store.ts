import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";

import { canvasSlice } from "../features/canvas";
import { gallerySlice } from "../features/gallery";
import { languageSlice } from "../features/language";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { lineSlice } from "../features/line";
import { navigationSlice } from "../features/navigation";
import { navigationListenerMiddleware } from "../features/navigation/navigation-middleware";
import { overviewSlice } from "../features/overview";
import { overviewListenerMiddleware } from "../features/overview/overview-middleware";
import { sizeSlice } from "../features/size";
import { sizeListenerMiddleware } from "../features/size/size-middleware";
import { textSlice } from "../features/text";
import { themeSlice } from "../features/theme";
import { themeListenerMiddleware } from "../features/theme/theme-middleware";

const rootReducer = combineSlices(
  navigationSlice,
  languageSlice,
  themeSlice,
  sizeSlice,
  gallerySlice,
  canvasSlice,
  lineSlice,
  textSlice,
  overviewSlice,
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(languageListenerMiddleware.middleware)
      .prepend(themeListenerMiddleware.middleware)
      .prepend(sizeListenerMiddleware.middleware)
      .prepend(overviewListenerMiddleware.middleware)
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
