import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";
import FormWrapper from "../common/FormWrapper";

const OneWayTransfer = () => {
  return (
    <FormWrapper onSubmit={() => {}}>
      <Location title="Pickup Location" placeholder="Airport, city, hotel..." onChange={() => {}} />
      <Location
        title="Drop off location"
        placeholder="Airport, city, hotel..."
        onChange={() => {}}
      />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <CarPassengersDropdown />
      <SubmitBtn />
    </FormWrapper>
  );
};

export default OneWayTransfer;
