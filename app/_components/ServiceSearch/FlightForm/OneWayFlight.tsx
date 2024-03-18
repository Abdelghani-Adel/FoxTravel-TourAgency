import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import FlightPassengers from "../common/Inputs/FlightPassengers";

const OneWayFlight = () => {
  return (
    <form className="serviceSearchForm">
      <Location title="From" placeholder="Departure Location" onChange={() => {}} />
      <Location title="To" placeholder="Destination Location" onChange={() => {}} />
      <DateInput title="Departure" placeholder="Enter departure date" />
      <FlightPassengers />
      <SubmitBtn />
    </form>
  );
};

export default OneWayFlight;
