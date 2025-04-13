import { flightSearchActions } from "@/redux/slices/flightSearchSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { ChangeEvent } from "react";
import { v4 } from "uuid";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import FlightPassengers from "./FlightPassengers";

const MultipleFlights = () => {
  const dispatch = useAppDispatch();
  const multipleFlights = useAppSelector((state) => state.flightSearch.multiple);

  const addFlight = () => dispatch(flightSearchActions.addFlight());
  const removeFlight = (index: number) => dispatch(flightSearchActions.removeFlight(index));

  return (
    <div className="ss_multipleListModal">
      {multipleFlights.map((flight, i) => (
        <div className="ss_inputGroup" key={v4()}>
          <MultipleFlightSingle flight={flight} index={i} />
          <button className="foxBtn mainBtn" onClick={() => removeFlight(i)}>
            X
          </button>
        </div>
      ))}

      <div>
        <button className="foxBtn mainBtn" onClick={addFlight}>
          Add Flight
        </button>
      </div>
    </div>
  );
};

const MultipleFlightSingle = (props: ISingleProps) => {
  const { flight, index } = props;
  const dispatch = useAppDispatch();

  const onLocationChange = (location: ILocation) => {
    const data = {
      index,
      location: location,
    };
    dispatch(flightSearchActions.setMultipleDepartureLocation(data));
  };

  const onDestinationChange = (location: ILocation) => {
    const data = {
      index,
      location: location,
    };
    dispatch(flightSearchActions.setMultipleToLocation(data));
  };

  const onDepartureDateChange = (date: Date | null) => {
    const data = {
      index,
      date,
    };
    dispatch(flightSearchActions.setMultipleDepartureDate(data));
  };

  const onPassengersChange = (passengers: IFlightPassengers) => {
    const data = {
      index,
      passengers,
    };
    dispatch(flightSearchActions.setMultiplePassengers(data));
  };

  return (
    <>
      <LocationInput
        title="From"
        placeholder="Departure Location"
        value={flight.departureLocation}
        onSelect={onLocationChange}
      />

      <LocationInput
        title="To"
        placeholder="Destination Location"
        value={flight.toLocation}
        onSelect={onDestinationChange}
      />

      <DateInput
        title="Departure Date"
        placeholder="Enter departure date"
        value={flight.departureDate}
        onChange={onDepartureDateChange}
      />

      <FlightPassengers passengers={flight.passengers} onChange={onPassengersChange} />
    </>
  );
};

type ISingleProps = {
  flight: {
    departureLocation: ILocation;
    toLocation: ILocation;
    departureDate: Date | null;
    passengers: IFlightPassengers;
  };
  index: number;
};

export default MultipleFlights;
