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
import { imageSlice } from "../features/images";
import { imageListenerMiddleware } from "../features/images/images-middleware";
import { languageSlice } from "../features/language";
import { languageListenerMiddleware } from "../features/language/language-middleware";
import { layersSlice } from "../features/layers";
import { layersListenerMiddleware } from "../features/layers/layers-middleware";
import { lineListenerMiddleware } from "../features/lines/lines-middleware";
import { lineSlice } from "../features/lines/lines-slice";
import { navigationSlice } from "../features/navigation";
import { navigationListenerMiddleware } from "../features/navigation/navigation-middleware";
import { overviewSlice } from "../features/overview";
import { overviewListenerMiddleware } from "../features/overview/overview-middleware";
import { photoSlice } from "../features/photos";
import { sizeSlice } from "../features/size";
import { sizeListenerMiddleware } from "../features/size/size-middleware";
import { textListenerMiddleware } from "../features/texts/texts-middleware";
import { textSlice } from "../features/texts/texts-slice";
import { themeSlice } from "../features/theme";
import { themeListenerMiddleware } from "../features/theme/theme-middleware";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [
    navigationSlice.name,
    canvasSlice.name,
    photoSlice.name,
    imageSlice.name,
    lineSlice.name,
    textSlice.name,
    overviewSlice.name,
    layersSlice.name,
  ],
};

const rootReducer = combineSlices(
  navigationSlice,
  canvasSlice,
  languageSlice,
  themeSlice,
  sizeSlice,
  photoSlice,
  imageSlice,
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
      .prepend(imageListenerMiddleware.middleware)
      .prepend(lineListenerMiddleware.middleware)
      .prepend(textListenerMiddleware.middleware)
      .prepend(languageListenerMiddleware.middleware)
      .prepend(themeListenerMiddleware.middleware)
      .prepend(sizeListenerMiddleware.middleware)
      .prepend(overviewListenerMiddleware.middleware)
      .prepend(navigationListenerMiddleware.middleware)
      .prepend(layersListenerMiddleware.middleware),
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
