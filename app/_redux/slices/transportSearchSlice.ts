import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TransportationSearchState = {
  type: "oneway",
  oneWay: {
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    passengers: 0,
  },
  round: {
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: null,
    returnDate: null,
    passengers: 0,
  },
  excursions: {
    pickupLocation: "",
    pickupDate: null,
    passengers: 0,
    excursionType: "12 hours",
  },
  multiple: [
    {
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: null,
      passengers: 0,
    },
  ],
};

const transportationSearchSlice = createSlice({
  name: "transportationSearch",
  initialState,
  reducers: {
    setTransportType(state, action: PayloadAction<ITransportType>) {
      state.type = action.payload;
    },
    // OneWay actions
    setOneWayPickupLocation(state, action: PayloadAction<string>) {
      state.oneWay.pickupLocation = action.payload;
    },
    setOneWayDropoffLocation(state, action: PayloadAction<string>) {
      state.oneWay.dropoffLocation = action.payload;
    },
    setOneWayPickupDate(state, action: PayloadAction<Date | null>) {
      state.oneWay.pickupDate = action.payload;
    },
    setOneWayPassengers(state, action: PayloadAction<number>) {
      state.oneWay.passengers = action.payload;
    },
    // Round actions
    setRoundPickupLocation(state, action: PayloadAction<string>) {
      state.round.pickupLocation = action.payload;
    },
    setRoundDropoffLocation(state, action: PayloadAction<string>) {
      state.round.dropoffLocation = action.payload;
    },
    setRoundPickupDate(state, action: PayloadAction<Date | null>) {
      state.round.pickupDate = action.payload;
    },
    setRoundReturnDate(state, action: PayloadAction<Date | null>) {
      state.round.returnDate = action.payload;
    },
    setRoundPassengers(state, action: PayloadAction<number>) {
      state.round.passengers = action.payload;
    },
    // Excursions actions
    setExcursionsPickupLocation(state, action: PayloadAction<string>) {
      state.excursions.pickupLocation = action.payload;
    },
    setExcursionsPickupDate(state, action: PayloadAction<Date | null>) {
      state.excursions.pickupDate = action.payload;
    },
    setExcursionsPassengers(state, action: PayloadAction<number>) {
      state.excursions.passengers = action.payload;
    },
    setExcursionsType(state, action: PayloadAction<string>) {
      state.excursions.excursionType = action.payload;
    },
    // Multiple actions
    addTransport(state) {
      state.multiple.push({
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: null,
        passengers: 0,
      });
    },
    removeTransport(state, action: PayloadAction<number>) {
      state.multiple.splice(action.payload, 1);
    },
    setMultiplePickupLocation(state, action: PayloadAction<{ index: number; location: string }>) {
      state.multiple[action.payload.index].pickupLocation = action.payload.location;
    },
    setMultipleDropoffLocation(state, action: PayloadAction<{ index: number; location: string }>) {
      state.multiple[action.payload.index].dropoffLocation = action.payload.location;
    },
    setMultiplePickupDate(state, action: PayloadAction<{ index: number; date: Date | null }>) {
      state.multiple[action.payload.index].pickupDate = action.payload.date;
    },
    setMultiplePassengers(state, action: PayloadAction<{ index: number; passengers: number }>) {
      state.multiple[action.payload.index].passengers = action.payload.passengers;
    },
    resetSearch(state) {
      state.type = "oneway";
      state.oneWay = {
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: null,
        passengers: 0,
      };
      state.round = {
        pickupLocation: "",
        dropoffLocation: "",
        pickupDate: null,
        returnDate: null,
        passengers: 0,
      };
      state.excursions = {
        pickupLocation: "",
        pickupDate: null,
        passengers: 0,
        excursionType: "12 hours",
      };
      state.multiple = [
        {
          pickupLocation: "",
          dropoffLocation: "",
          pickupDate: null,
          passengers: 0,
        },
      ];
    },
  },
});

export const transportSearchActions = transportationSearchSlice.actions;

export default transportationSearchSlice.reducer;
