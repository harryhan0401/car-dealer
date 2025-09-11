import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  uniqueMakes: [],
  carListingCount: 0,
  filteredCarListings: [],
  isFiltersOpen: false,
  isMapLayout: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUniqueMakes: (state, action) => {
      state.uniqueMakes = action.payload;
    },
    setCarListingCount: (state, action) => {
      state.carListingCount = action.payload;
    },
    setFilteredCarListings: (state, action) => {
      state.filteredCarListings = action.payload;
    },
    setIsFiltersOpen: (state, action) => {
      state.isFiltersOpen = action.payload;
    },
    setIsMapLayout: (state, action) => {
      state.isMapLayout = action.payload;
    },
  },
});

export const { setUniqueMakes, setCarListingCount, setFilteredCarListings, setIsFiltersOpen, setIsMapLayout } = globalSlice.actions;

export default globalSlice.reducer;
