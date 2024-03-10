import React, { ChangeEvent, useState } from "react";
import ReactDatePicker from "react-datepicker";
import TripType from "./TripType";
import AirportInput from "./AirportInput";
import DateInput from "./DateInput";
import MultiDestinations from "./MultiDestinations";
import PassengerInput from "../PassengerInput/PassengerInput";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("");
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>();
  const [multiDestinations, setMultiDestinations] = useState();

  const onTripTypeChange = (tripType: string) => setTripType(tripType);

  return (
    <div className="flightSearch">
      <TripType onChange={onTripTypeChange} />

      {tripType === "multiple" && <MultiDestinations />}

      {tripType !== "multiple" && (
        <div className="d-flex gap-2">
          <div className="flightSearch_controllerList">
            <AirportInput title="From" />
            <AirportInput title="To" />
            <DateInput shown title="Departure" />
            <DateInput shown={tripType === "round"} title="Return" />

            <div className="flightSearch_controller">
              <h6 className="flightSearch_controllerTitle">Passengers</h6>
              <PassengerInput />
            </div>
          </div>

          <button type="submit" className="flightSearch_submitBtn">
            Search
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
