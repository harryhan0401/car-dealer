import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favourites: [],
  uniqueMakes: [],
  saleCarCount: 0
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favourites = action.payload; // Replace the entire favourites list
    },
    setUniqueMakes: (state, action) => {
      state.uniqueMakes = action.payload; // Replace the entire favourites list
    },
    setSaleCarCount: (state, action) => {
      state.saleCarCount = action.payload;
    }
  },
});

export const { setFavourites, setUniqueMakes, setSaleCarCount } = globalSlice.actions;

export default globalSlice.reducer;
