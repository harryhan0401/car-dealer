import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  favourites: []
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.favourites = action.payload; // Replace the entire favourites list
    },
  },
});

export const { setFavourites } = globalSlice.actions;

export default globalSlice.reducer;
