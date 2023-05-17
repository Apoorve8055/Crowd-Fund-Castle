import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";

const store = configureStore({
  reducer: propertySlice,
});

export default store;
