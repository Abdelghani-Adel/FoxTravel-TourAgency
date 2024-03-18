import { createSlice } from "@reduxjs/toolkit";
import details from "@/public/data/destinationDetails.json";

const destinationDetailsSlice = createSlice({
  name: "destinationDetails",
  initialState: details,
  reducers: {
    setDetails: (state, action) => {
      return action.payload;
    },
  },
});

export const destinationActions = destinationDetailsSlice.actions;

export default destinationDetailsSlice;
