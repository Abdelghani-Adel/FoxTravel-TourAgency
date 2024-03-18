import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";

const OneWayTransfer = () => {
  return (
    <form className="serviceSearchForm">
      <Location title="Pickup Location" placeholder="Airport, city, hotel..." onChange={() => {}} />
      <Location
        title="Drop off location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <CarPassengersDropdown />
      <SubmitBtn />
    </form>
  );
};

export default OneWayTransfer;
