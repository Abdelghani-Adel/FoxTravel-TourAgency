import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { flightSearchActions } from "@/app/_redux/slices/flightSearchSlice";
import FlightPassengers from "./FlightPassengers";

const RoundFlight = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.flightSearch.round);

  const onLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(flightSearchActions.setRoundDepartureLocation(e.target.value));
  };

  const onDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(flightSearchActions.setRoundToLocation(e.target.value));
  };

  const onDepartureDateChange = (date: Date | null) => {
    dispatch(flightSearchActions.setRoundDepartureDate(date));
  };

  const onReturnDateChange = (date: Date | null) => {
    dispatch(flightSearchActions.setRoundReturnDate(date));
  };

  const onPassengersChange = (passengers: IPassengers) => {
    dispatch(flightSearchActions.setRoundPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="From"
        placeholder="Departure Location"
        value={formData.departureLocation}
        onChange={onLocationChange}
      />

      <LocationInput
        title="To"
        placeholder="Destination Location"
        value={formData.toLocation}
        onChange={onDestinationChange}
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
