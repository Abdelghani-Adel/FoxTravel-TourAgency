import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FlightSearchState = {
  type: "oneway",
  oneWay: {
    departureLocation: { lat: "", lon: "", name: "" },
    toLocation: { lat: "", lon: "", name: "" },
    departureDate: null,
    passengers: {
      adults: 0,
      children: 0,
      infants: 0,
    },
  },
  round: {
    departureLocation: { lat: "", lon: "", name: "" },
    toLocation: { lat: "", lon: "", name: "" },
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
      departureLocation: { lat: "", lon: "", name: "" },
      toLocation: { lat: "", lon: "", name: "" },
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
    setFlightType(state, action: PayloadAction<IFlightType>) {
      state.type = action.payload;
    },
    // OneWay actions
    setOneWayDepartureLocation(state, action: PayloadAction<ILocation>) {
      state.oneWay.departureLocation = action.payload;
    },
    setOneWayToLocation(state, action: PayloadAction<ILocation>) {
      state.oneWay.toLocation = action.payload;
    },
    setOneWayDepartureDate(state, action: PayloadAction<Date | null>) {
      state.oneWay.departureDate = action.payload;
    },
    setOneWayPassengers(state, action: PayloadAction<IFlightPassengers>) {
      state.oneWay.passengers = action.payload;
    },
    // Round actions
    setRoundDepartureLocation(state, action: PayloadAction<ILocation>) {
      state.round.departureLocation = action.payload;
    },
    setRoundToLocation(state, action: PayloadAction<ILocation>) {
      state.round.toLocation = action.payload;
    },
    setRoundDepartureDate(state, action: PayloadAction<Date | null>) {
      state.round.departureDate = action.payload;
    },
    setRoundReturnDate(state, action: PayloadAction<Date | null>) {
      state.round.returnDate = action.payload;
    },
    setRoundPassengers(state, action: PayloadAction<IFlightPassengers>) {
      state.round.passengers = action.payload;
    },
    // Multiple actions
    addFlight(state) {
      state.multiple.push({
        departureLocation: { lat: "", lon: "", name: "" },
        toLocation: { lat: "", lon: "", name: "" },
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
    setMultipleDepartureLocation(state, action: PayloadAction<{ index: number; location: ILocation }>) {
      state.multiple[action.payload.index].departureLocation = action.payload.location;
    },
    setMultipleToLocation(state, action: PayloadAction<{ index: number; location: ILocation }>) {
      state.multiple[action.payload.index].toLocation = action.payload.location;
    },
    setMultipleDepartureDate(state, action: PayloadAction<{ index: number; date: Date | null }>) {
      state.multiple[action.payload.index].departureDate = action.payload.date;
    },
    setMultiplePassengers(state, action: PayloadAction<{ index: number; passengers: IFlightPassengers }>) {
      state.multiple[action.payload.index].passengers = action.payload.passengers;
    },
    resetSearch(state) {
      state.type = "oneway";
      state.oneWay = {
        departureLocation: { lat: "", lon: "", name: "" },
        toLocation: { lat: "", lon: "", name: "" },
        departureDate: null,
        passengers: {
          adults: 0,
          children: 0,
          infants: 0,
        },
      };
      state.round = {
        departureLocation: { lat: "", lon: "", name: "" },
        toLocation: { lat: "", lon: "", name: "" },
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
          departureLocation: { lat: "", lon: "", name: "" },
          toLocation: { lat: "", lon: "", name: "" },
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
