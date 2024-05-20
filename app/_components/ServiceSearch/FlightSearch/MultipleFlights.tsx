import { flightSearchActions } from "@/app/_redux/slices/flightSearchSlice";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
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

  const onLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      index,
      location: e.target.value,
    };
    dispatch(flightSearchActions.setMultipleDepartureLocation(data));
  };

  const onDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      index,
      location: e.target.value,
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

  const onPassengersChange = (passengers: IPassengers) => {
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
        onChange={onLocationChange}
      />

      <LocationInput
        title="To"
        placeholder="Destination Location"
        value={flight.toLocation}
        onChange={onDestinationChange}
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
    departureLocation: string;
    toLocation: string;
    departureDate: Date | null;
    passengers: IPassengers;
  };
  index: number;
};

export default MultipleFlights;
