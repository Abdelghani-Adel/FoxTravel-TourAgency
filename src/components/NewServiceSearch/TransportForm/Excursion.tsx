import React from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateTimeInput from "../common/DateTimeInput";
import ExcursionTypeInput from "./ExcursionTypeInput";
import CarPassengerInput from "./CarPassengerInput";

const Excursion = () => {
  return (
    <form className="serviceSearchForm">
      <LocationInput
        title="Pickup Location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <ExcursionTypeInput />
      <CarPassengerInput />
      <SubmitBtn />
    </form>
  );
};

export default Excursion;
