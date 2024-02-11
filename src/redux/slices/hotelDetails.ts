import { createSlice } from "@reduxjs/toolkit";

const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: {} as IHotelDetails,
  reducers: {
    setHotelDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const hotelDetailsActions = hotelDetailsSlice.actions;

export default hotelDetailsSlice;
