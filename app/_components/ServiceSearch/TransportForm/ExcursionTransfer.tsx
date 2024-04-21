import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import ExcursionType from "../common/Inputs/ExcursionType";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";
import FormWrapper from "../common/FormWrapper";

const ExcursionTransfer = () => {
  return (
    <FormWrapper onSubmit={() => {}}>
      <Location title="Pickup Location" placeholder="Airport, city, hotel..." onChange={() => {}} />
      <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
      <ExcursionType />
      <CarPassengersDropdown />
      <SubmitBtn />
    </FormWrapper>
  );
};

export default ExcursionTransfer;
