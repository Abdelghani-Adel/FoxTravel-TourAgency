import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISearchFormState = {
  hotel: {
    city: "",
    startDate: null,
    endDate: null,
    adults: 0,
    childs: [],
    rooms: 0,
  },
  flight: {
    oneway: {
      from: {
        location: "",
        locationType: "hotel",
      },
      to: {
        location: "",
        locationType: "hotel",
      },
      departureDate: null,
    },
    round: {
      from: {
        location: "",
        locationType: "hotel",
      },
      to: {
        location: "",
        locationType: "hotel",
      },
      departureDate: null,
      returnDate: null,
    },
    multiple: [],
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  transport: {
    oneway: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      dropoffLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      pickupTime: null,
      passengers: 0,
    },
    round: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      dropoffLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      pickupTime: null,
      returnDate: null,
      returnTime: null,
      passengers: 0,
    },
    multiple: [],
    excursion: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      pickupTime: null,
      passengers: 0,
      excursionType: "",
    },
  },
  carRental: {},
  package: {},
  category: "Hotel",
};

const serviceSearch = createSlice({
  name: "serviceSearch",
  initialState,
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
