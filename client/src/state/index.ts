import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  uniqueMakes: [],
  sellCarCount: 0,
  filteredSellCars: [],
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
    }
  },
});

export const { setUniqueMakes, setSellCarCount, setFilteredSellCars } = globalSlice.actions;

export default globalSlice.reducer;
