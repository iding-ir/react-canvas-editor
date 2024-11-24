import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { ImageType } from "./images";

export interface ImageState {
  images: ImageType[];
}

const initialState: ImageState = {
  images: [],
};

export const imageSlice = createAppSlice({
  name: "images",
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

export const { addImage, deleteImage } = imageSlice.actions;

export const { selectImages, hasImages } = imageSlice.selectors;
