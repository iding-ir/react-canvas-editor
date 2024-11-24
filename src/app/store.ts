import {
  Action,
  ThunkAction,
  combineSlices,
  configureStore,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { canvasSlice } from "../features/canvas";
import { gallerySlice } from "../features/gallery";
import { galleryListenerMiddleware } from "../features/gallery/gallery-middleware";
import { languageSlice } from "../features/language";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { layersSlice } from "../features/layers";
import { lineSlice } from "../features/line";
import { lineListenerMiddleware } from "../features/line/line-middleware";
import { navigationSlice } from "../features/navigation";
import { navigationListenerMiddleware } from "../features/navigation/navigation-middleware";
import { overviewSlice } from "../features/overview";
import { overviewListenerMiddleware } from "../features/overview/overview-middleware";
import { sizeSlice } from "../features/size";
import { sizeListenerMiddleware } from "../features/size/size-middleware";
import { textSlice } from "../features/text";
import { textListenerMiddleware } from "../features/text/text-middleware";
import { themeSlice } from "../features/theme";
import { themeListenerMiddleware } from "../features/theme/theme-middleware";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [navigationSlice.name],
};

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
  layersSlice,
);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(galleryListenerMiddleware.middleware)
      .prepend(lineListenerMiddleware.middleware)
      .prepend(textListenerMiddleware.middleware)
      .prepend(languageListenerMiddleware.middleware)
      .prepend(themeListenerMiddleware.middleware)
      .prepend(sizeListenerMiddleware.middleware)
      .prepend(overviewListenerMiddleware.middleware)
      .prepend(navigationListenerMiddleware.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
