import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { flightSearchActions } from "@/redux/slices/flightSearchSlice";
import FlightPassengers from "./FlightPassengers";

const RoundFlight = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.flightSearch.round);

  const onLocationChange = (location: ILocation) => {
    dispatch(flightSearchActions.setRoundDepartureLocation(location));
  };

  const onDestinationChange = (location: ILocation) => {
    dispatch(flightSearchActions.setRoundToLocation(location));
  };

  const onDepartureDateChange = (date: Date | null) => {
    dispatch(flightSearchActions.setRoundDepartureDate(date));
  };

  const onReturnDateChange = (date: Date | null) => {
    dispatch(flightSearchActions.setRoundReturnDate(date));
  };

  const onPassengersChange = (passengers: IFlightPassengers) => {
    dispatch(flightSearchActions.setRoundPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="From"
        placeholder="Departure Location"
        value={formData.departureLocation}
        onSelect={onLocationChange}
      />

      <LocationInput
        title="To"
        placeholder="Destination Location"
        value={formData.toLocation}
        onSelect={onDestinationChange}
      />

      <DateInput
        title="Departure"
        placeholder="Enter Departure date"
        value={formData.departureDate}
        onChange={onDepartureDateChange}
      />

      <DateInput
        title="Return"
        placeholder="Enter Return date"
        value={formData.returnDate}
        onChange={onReturnDateChange}
      />

      <FlightPassengers passengers={formData.passengers} onChange={onPassengersChange} />
    </div>
  );
};

export default RoundFlight;
