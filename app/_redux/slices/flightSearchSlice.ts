import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FlightSearchState = {
  type: "oneway",
  oneWay: {
    departureLocation: "",
    toLocation: "",
    departureDate: null,
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  round: {
    departureLocation: "",
    toLocation: "",
    departureDate: null,
    returnDate: null,
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  multiple: [
    {
      departureLocation: "",
      toLocation: "",
      departureDate: null,
      passengers: {
        adults: 0,
        children: 0,
        infants: 0,
      },
    },
  ],
};

const flightsSearchSlice = createSlice({
  name: "flightsSearch",
  initialState,
  reducers: {
    setFlightType(state, action: PayloadAction<ISSFlightType>) {
      state.type = action.payload;
    },
    // OneWay actions
    setOneWayDepartureLocation(state, action: PayloadAction<string>) {
      state.oneWay.departureLocation = action.payload;
    },
    setOneWayToLocation(state, action: PayloadAction<string>) {
      state.oneWay.toLocation = action.payload;
    },
    setOneWayDepartureDate(state, action: PayloadAction<Date | null>) {
      state.oneWay.departureDate = action.payload;
    },
    setOneWayPassengers(state, action: PayloadAction<IPassengers>) {
      state.oneWay.passengers = action.payload;
    },
    // Round actions
    setRoundDepartureLocation(state, action: PayloadAction<string>) {
      state.round.departureLocation = action.payload;
    },
    setRoundToLocation(state, action: PayloadAction<string>) {
      state.round.toLocation = action.payload;
    },
    setRoundDepartureDate(state, action: PayloadAction<Date | null>) {
      state.round.departureDate = action.payload;
    },
    setRoundReturnDate(state, action: PayloadAction<Date | null>) {
      state.round.returnDate = action.payload;
    },
    setRoundPassengers(state, action: PayloadAction<IPassengers>) {
      state.round.passengers = action.payload;
    },
    // Multiple actions
    addFlight(state) {
      state.multiple.push({
        departureLocation: "",
        toLocation: "",
        departureDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      });
    },
    removeFlight(state, action: PayloadAction<number>) {
      state.multiple.splice(action.payload, 1);
    },
    setMultipleDepartureLocation(
      state,
      action: PayloadAction<{ index: number; location: string }>
    ) {
      state.multiple[action.payload.index].departureLocation = action.payload.location;
    },
    setMultipleToLocation(state, action: PayloadAction<{ index: number; location: string }>) {
      state.multiple[action.payload.index].toLocation = action.payload.location;
    },
    setMultipleDepartureDate(state, action: PayloadAction<{ index: number; date: Date | null }>) {
      state.multiple[action.payload.index].departureDate = action.payload.date;
    },
    setMultiplePassengers(
      state,
      action: PayloadAction<{ index: number; passengers: IPassengers }>
    ) {
      state.multiple[action.payload.index].passengers = action.payload.passengers;
    },
    resetSearch(state) {
      state.type = "oneway";
      state.oneWay = {
        departureLocation: "",
        toLocation: "",
        departureDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      };
      state.round = {
        departureLocation: "",
        toLocation: "",
        departureDate: null,
        returnDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      };
      state.multiple = [
        {
          departureLocation: "",
          toLocation: "",
          departureDate: null,
          passengers: {
            adults: 0,
            children: 0,
            infants: 0,
          },
        },
      ];
    },
  },
});

export const flightSearchActions = flightsSearchSlice.actions;

export default flightsSearchSlice.reducer;
