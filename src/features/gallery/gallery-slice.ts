import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";

export type ImageType = {
  id: string;
  src: string;
};

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
  }),
  selectors: {
    selectImages: ({ images }) => images,
    hasImages: ({ images }) => images.length > 0,
  },
});

export const { addImage } = gallerySlice.actions;

export const { selectImages, hasImages } = gallerySlice.selectors;
