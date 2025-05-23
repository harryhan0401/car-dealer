import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favourites: [],
  uniqueMakes: [],
  sellCarCount: 0
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
    setSellCarCount: (state, action) => {
      state.sellCarCount = action.payload;
    }
  },
});

export const { setFavourites, setUniqueMakes, setSellCarCount } = globalSlice.actions;

export default globalSlice.reducer;
