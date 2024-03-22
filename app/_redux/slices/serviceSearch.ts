import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import defaultServiceSearchState from "../defaultState/defaultServiceSearchState";

const serviceSearch = createSlice({
  name: "serviceSearch",
  initialState: defaultServiceSearchState,
  reducers: {
    updateCategory: (state, action: PayloadAction<IServiceSearchCategory>) => {
      return { ...state, category: action.payload };
    },
    updateHotelForm: (state, action: PayloadAction<ISearchHotelState>) => {
      return { ...state, hotel: action.payload };
    },
    updateFlightForm: (state, action: PayloadAction<ISearchFlightState>) => {
      return { ...state, flight: action.payload };
    },
    updateTransportForm: (state, action: PayloadAction<ISearchTransportState>) => {
      return { ...state, transport: action.payload };
    },
  },
});

export const serviceSearchActions = serviceSearch.actions;

export default serviceSearch;
