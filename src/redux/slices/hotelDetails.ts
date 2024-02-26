import { createSlice } from "@reduxjs/toolkit";
import hotelDetailsData from "@/public/data/hotelDetails.json";

const hotelDetailsSlice = createSlice({
  name: "hotelDetails",
  initialState: hotelDetailsData,
  reducers: {
    setHotelDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const hotelDetailsActions = hotelDetailsSlice.actions;

export default hotelDetailsSlice;
