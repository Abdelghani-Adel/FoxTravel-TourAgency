import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISearchState = {
  category: "Hotel",
  startDate: new Date(),
  endDate: new Date(),
  hotelGuests: {
    adults: 0,
    childs: [],
    rooms: 0,
  },
  city: "Hurghada",
  carRiders: 4,
  carModel: "Cherry Arizo",
  activityType: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<ISearchCategory>) => {
      return { ...state, category: action.payload };
    },
    updateStartDate: (state, action: PayloadAction<Date | null>) => {
      return { ...state, startDate: action.payload };
    },
    updateEndDate: (state, action: PayloadAction<Date | null>) => {
      return { ...state, endDate: action.payload };
    },
    updateHotelGuests: (state, action: PayloadAction<ISearchHotelGuests>) => {
      return { ...state, hotelGuests: action.payload };
    },
    updateCity: (state, action: PayloadAction<string>) => {
      return { ...state, city: action.payload };
    },
    updateCarRiders: (state, action: PayloadAction<number>) => {
      return { ...state, carRiders: action.payload };
    },
    updateCarModel: (state, action: PayloadAction<string>) => {
      return { ...state, carModel: action.payload };
    },
    updateActivityType: (state, action: PayloadAction<string>) => {
      return { ...state, activityType: action.payload };
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
