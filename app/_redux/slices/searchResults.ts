import { createSlice } from "@reduxjs/toolkit";

type IInitialState = {
  hotels: IHotelCard[];
  flights: any;
  transfers: any;
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {},
  reducers: {},
});

export const searchResultsActions = searchResultsSlice.actions;

export default searchResultsSlice;
