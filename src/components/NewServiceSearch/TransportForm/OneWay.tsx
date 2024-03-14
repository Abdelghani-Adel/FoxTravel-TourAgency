import React from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/DateInput";
import DateTimeInput from "../common/DateTimeInput";
import CarPassengerInput from "./CarPassengerInput";

const OneWay = () => {
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
      <CarPassengerInput />
      <SubmitBtn />
    </form>
  );
};

export default OneWay;
