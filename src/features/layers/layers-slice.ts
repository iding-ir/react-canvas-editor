import { PayloadAction } from "@reduxjs/toolkit";

import { createAppSlice } from "../createAppSlice";
import { LayerType } from "./layers";

export interface LayersState {
  layers: LayerType[];
}

const initialState: LayersState = {
  layers: [],
};

export const layersSlice = createAppSlice({
  name: "layers",
  initialState,
  reducers: (create) => ({
    setLayers: create.reducer(
      (state, { payload }: PayloadAction<LayerType[]>) => {
        state.layers = payload;
      },
    ),
    addLayer: create.reducer((state, { payload }: PayloadAction<LayerType>) => {
      state.layers = [...state.layers, payload];
    }),
    deleteLayer: create.reducer(
      (state, { payload }: PayloadAction<LayerType>) => {
        state.layers = state.layers.filter((layer) => layer.id !== payload.id);
      },
    ),
    updateLayer: create.reducer(
      (state, { payload }: PayloadAction<LayerType>) => {
        state.layers = state.layers.map((layer) => {
          return layer.id === payload.id ? payload : layer;
        });
      },
    ),
  }),
  selectors: {
    selectLayers: ({ layers }) => layers,
    selectLayer:
      ({ layers }) =>
      (id: string) =>
        layers.find((layer) => layer.id === id),
  },
});

export const { setLayers, addLayer, deleteLayer, updateLayer } =
  layersSlice.actions;

export const { selectLayers, selectLayer } = layersSlice.selectors;
