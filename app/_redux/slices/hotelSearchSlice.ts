import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HotelSearchState {
  config: {
    minAdults: number;
    maxAdults: number;
    minRooms: number;
    maxRooms: number;
    minChilds: number;
    maxChilds: number;
  };
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  adults: number;
  childs: number[];
  rooms: number;
}

const initialState: HotelSearchState = {
  city: "",
  startDate: null,
  endDate: null,
  rooms: 1,
  adults: 1,
  childs: [],
  config: {
    minAdults: 1,
    maxAdults: 10,
    minRooms: 1,
    maxRooms: 3,
    minChilds: 0,
    maxChilds: 10,
  },
};

const hotelSearchSlice = createSlice({
  name: "hotelSearch",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setStartDate(state, action: PayloadAction<Date | null>) {
      state.startDate = action.payload;
    },
    setEndDate(state, action: PayloadAction<Date | null>) {
      state.endDate = action.payload;
    },
    incrementAdults(state) {
      state.adults++;
    },
    decrementAdults(state) {
      state.adults--;
    },
    incrementChildren(state) {
      state.childs.push(1);
    },
    decrementChildren(state) {
      state.childs = state.childs.slice(0, state.childs.length - 1);
    },
    incrementRooms(state) {
      state.rooms++;
    },
    decrementRooms(state) {
      state.rooms--;
    },
    resetSearch(state) {
      state.city = "";
      state.startDate = null;
      state.endDate = null;
      state.adults = 0;
      state.childs = [];
      state.rooms = 0;
    },
  },
});

export const hotelSearchActions = hotelSearchSlice.actions;

export default hotelSearchSlice.reducer;
