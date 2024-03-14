import React from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/DateInput";
import FlightPassengersInput from "./FlightPassengersInput";

const OneWay = () => {
  return (
    <form className="serviceSearchForm">
      <LocationInput title="From" placeholder="Departure Location" onChange={() => {}} />
      <LocationInput title="To" placeholder="Destination Location" onChange={() => {}} />
      <DateInput title="Departure" placeholder="Enter departure date" />
      <FlightPassengersInput />
      <SubmitBtn />
    </form>
  );
};

export default OneWay;
