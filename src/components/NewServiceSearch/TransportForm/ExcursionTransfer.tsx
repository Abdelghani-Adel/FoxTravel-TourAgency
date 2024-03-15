import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import ExcursionType from "../common/Inputs/ExcursionType";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";

const ExcursionTransfer = () => {
  return (
    <form className="serviceSearchForm">
      <Location title="Pickup Location" placeholder="Airport, city, hotel..." onChange={() => {}} />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <ExcursionType />
      <CarPassengersDropdown />
      <SubmitBtn />
    </form>
  );
};

export default ExcursionTransfer;
