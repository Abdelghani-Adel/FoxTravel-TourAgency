import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ISearchFormState = {
  category: "Hotel",
  hotel: {
    city: "",
    startDate: null,
    endDate: null,
    adults: 0,
    childs: [],
    rooms: 0,
  },
  flight: {
    flightType: "oneway",
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
    multiple: [
      {
        from: {
          location: "",
          locationType: "hotel",
        },
        to: {
          location: "",
          locationType: "hotel",
        },
        departureDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      },
    ],
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  transport: {
    transferType: "oneway",
    passengers: 0,
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
      returnDate: null,
    },
    multiple: [
      {
        pickupLocation: {
          location: "",
          locationType: "hotel",
        },
        dropoffLocation: {
          location: "",
          locationType: "hotel",
        },
        pickupDate: null,
        passengers: 0,
      },
    ],
    excursion: {
      pickupLocation: {
        location: "",
        locationType: "hotel",
      },
      pickupDate: null,
      excursionType: "",
    },
  },
  carRental: {},
  package: {},
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
