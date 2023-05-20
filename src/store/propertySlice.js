import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPropertiesList } from "./thunk";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertiesList: [],
    PropertyDetails: {},
    portfolio: {
      totalProperty: 0,
      portfolio_value: 0,
      cash_balance: 0,
      rental_income: 0,
      appreciation: 0,
      total_return: 0,
      next_payout: 0,
      my_investment: [
        {
          id: 3,
          property_name: "Mountain Retreat",
          location: {
            place: "Aspen, Colorado",
          },
          property_type: "House",
          invested_amount: "$100",
        },
      ],
    },
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
