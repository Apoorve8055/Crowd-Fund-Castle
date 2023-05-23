import { createAsyncThunk } from "@reduxjs/toolkit";
const LOCATION_ORIGIN = window.location.origin;
const PROPERTIES_API_ENDPOINT = LOCATION_ORIGIN + "/src/properties.json";
export const fetchAllPropertiesList = createAsyncThunk(
  "properties/fetchAllPropertiesList",
  async () => {
    try {
      const response = await fetch(PROPERTIES_API_ENDPOINT);
      const data = await response.json();
      return data?.properties;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);
