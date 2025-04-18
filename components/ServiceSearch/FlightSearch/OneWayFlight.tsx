import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { flightSearchActions } from "@/redux/slices/flightSearchSlice";
import FlightPassengers from "./FlightPassengers";

const OneWayFlight = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.flightSearch.oneWay);

  const onLocationChange = (location: ILocation) => {
    dispatch(flightSearchActions.setOneWayDepartureLocation(location));
  };

  const onDestinationChange = (location: ILocation) => {
    dispatch(flightSearchActions.setOneWayToLocation(location));
  };

  const onDepartureDateChange = (date: Date | null) => {
    dispatch(flightSearchActions.setOneWayDepartureDate(date));
  };

  const onPassengersChange = (passengers: IFlightPassengers) => {
    dispatch(flightSearchActions.setOneWayPassengers(passengers));
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
        title="Departure Date"
        placeholder="Enter departure date"
        value={formData.departureDate}
        onChange={onDepartureDateChange}
      />

      <FlightPassengers passengers={formData.passengers} onChange={onPassengersChange} />
    </div>
  );
};

export default OneWayFlight;
