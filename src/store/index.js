import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./propertySlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    propertySlice,
    userSlice,
  },
});

export default store;
