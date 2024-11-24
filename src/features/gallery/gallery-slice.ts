import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { ImageType } from "./gallery";

export interface GalleryState {
  images: ImageType[];
}

const initialState: GalleryState = {
  images: [],
};

export const gallerySlice = createAppSlice({
  name: "gallery",
  initialState,
  reducers: (create) => ({
    addImage: create.reducer((state, { payload }: PayloadAction<ImageType>) => {
      state.images = [...state.images, payload];
    }),
    deleteImage: create.reducer((state, { payload }: PayloadAction<string>) => {
      state.images = state.images.filter((image) => image.id !== payload);
    }),
  }),
  selectors: {
    selectImages: ({ images }) => images,
    hasImages: ({ images }) => images.length > 0,
  },
});

export const { addImage, deleteImage } = gallerySlice.actions;

export const { selectImages, hasImages } = gallerySlice.selectors;
