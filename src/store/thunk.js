import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllPropertiesList = createAsyncThunk(
  "properties/fetchAllPropertiesList",
  async () => {
    try {
      const response = await fetch("src/properties.json");
      const data = await response.json();
      return data?.properties;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
