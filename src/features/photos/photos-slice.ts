import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { PhotoType } from "./photos";

export interface PhotoState {
  photos: PhotoType[];
}

const initialState: PhotoState = {
  photos: [],
};

export const photoSlice = createAppSlice({
  name: "photo",
  initialState,
  reducers: (create) => ({
    addPhoto: create.reducer((state, { payload }: PayloadAction<PhotoType>) => {
      state.photos = [...state.photos, payload];
    }),
    deletePhoto: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.photos = state.photos.filter((photo) => photo.id !== payload);
    }),
  }),
  selectors: {
    selectPhotos: ({ photos }) => photos,
    hasPhotos: ({ photos }) => photos.length > 0,
  },
});

export const { addPhoto, deletePhoto } = photoSlice.actions;

export const { selectPhotos, hasPhotos } = photoSlice.selectors;
