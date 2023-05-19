import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPropertiesList } from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertiesList: [],
    PropertyDetails: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPropertiesList.fulfilled, (state, action) => {
      state.propertiesList = action.payload;
    });
  },
});
export const { findPropertyById } = propertySlice.actions;
export default propertySlice.reducer;
