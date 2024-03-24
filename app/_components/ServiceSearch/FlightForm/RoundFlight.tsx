import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import FlightPassengers from "../common/Inputs/FlightPassengers";
import { useAppSelector } from "@/app/_redux/store";

const RoundFlight = () => {
  const reduxState = useAppSelector((state) => state.serviceSearch.hotel);

  return (
    <form className="serviceSearchForm">
      <Location title="From" placeholder="Departure Location" onChange={() => {}} />
      <Location title="To" placeholder="Destination Location" onChange={() => {}} />
      <DateInput
        title="Departure"
        placeholder="Enter departure date"
        onChange={() => {}}
        defaultValue={reduxState.startDate}
      />
      <DateInput
        title="Return"
        placeholder="Enter return date"
        onChange={() => {}}
        defaultValue={reduxState.startDate}
      />
      <FlightPassengers />
      <SubmitBtn />
    </form>
  );
};

export default RoundFlight;
