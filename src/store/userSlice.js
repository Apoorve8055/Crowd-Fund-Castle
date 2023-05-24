import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userDetails: {
      name: "Apoorve Verma",
      email: "apoorve.verma@cfc.com",
    },
    isUserLoggedIn: false,
  },
  reducers: {
    userLogIn: (state, action) => {
      state.isUserLoggedIn = true;
    },
    userLogOut: (state, action) => {
      state.isUserLoggedIn = false;
    },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
