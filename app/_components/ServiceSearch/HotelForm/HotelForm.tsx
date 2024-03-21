import React from "react";
import SubmitBtn from "../common/SubmitBtn";
import Location from "../common/Inputs/Location";
import DateInput from "../common/Inputs/DateInput";
import HotelGuests from "../common/Inputs/HotelGuests";

const HotelForm = () => {
  return (
    <form className="serviceSearchForm">
      <Location title="Destination" placeholder="Where are you going?" onChange={() => {}} />
      <DateInput title="Check-In" placeholder="Enter checkin date" />
      <DateInput title="Check-Out" placeholder="Enter checkout date" />
      <HotelGuests />
      <SubmitBtn />
    </form>
  );
};

export default HotelForm;
