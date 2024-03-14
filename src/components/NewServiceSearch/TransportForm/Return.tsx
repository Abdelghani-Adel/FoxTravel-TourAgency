import React from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/DateInput";
import DateTimeInput from "../common/DateTimeInput";
import CarPassengerInput from "./CarPassengerInput";

const Return = () => {
  return (
    <form className="serviceSearchForm">
      <LocationInput
        title="Pickup Location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <LocationInput
        title="Drop off location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <DateTimeInput title="Return Date" placeholder="Enter return date" />
      <CarPassengerInput />
      <SubmitBtn />
    </form>
  );
};

export default Return;
