import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  uniqueMakes: [],
  sellCarCount: 0,
  filteredSellCars: [],
  isFiltering: false,
  isMapLayout: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUniqueMakes: (state, action) => {
      state.uniqueMakes = action.payload;
    },
    setSellCarCount: (state, action) => {
      state.sellCarCount = action.payload;
    },
    setFilteredSellCars: (state, action) => {
      state.filteredSellCars = action.payload;
    },
    setIsFiltering: (state, action) => {
      state.isFiltering = action.payload;
    },
    setIsMapLayout: (state, action) => {
      state.isMapLayout = action.payload;
    },
  },
});

export const { setUniqueMakes, setSellCarCount, setFilteredSellCars, setIsFiltering, setIsMapLayout } = globalSlice.actions;

export default globalSlice.reducer;
