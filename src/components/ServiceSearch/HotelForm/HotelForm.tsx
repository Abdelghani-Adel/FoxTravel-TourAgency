import React from "react";
import { useAppSelector } from "@/src/redux/store";
import SubmitBtn from "../common/SubmitBtn";
import Location from "../common/Inputs/Location";
import DateInput from "../common/Inputs/DateInput";
import HotelGuests from "../common/Inputs/HotelGuests";

const HotelForm = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;

  if (activeCategory !== "Hotel") return null;

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
