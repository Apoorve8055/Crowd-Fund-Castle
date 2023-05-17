import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPropertiesList } from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertiesList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPropertiesList.fulfilled, (state, action) => {
      state.propertiesList = action.payload;
    });
  },
});

export default propertySlice.reducer;
