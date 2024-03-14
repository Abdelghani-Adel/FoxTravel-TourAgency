import React from "react";
import { useAppSelector } from "@/src/redux/store";
import SubmitBtn from "../common/SubmitBtn";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import HotelGuestsInput from "./HotelGuestsInput";

const HotelForm = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;

  if (activeCategory !== "Hotel") return null;

  return (
    <form className="serviceSearchForm">
      <LocationInput title="Destination" placeholder="Where are you going?" onChange={() => {}} />
      <DateInput title="Check-In" placeholder="Enter checkin date" />
      <DateInput title="Check-Out" placeholder="Enter checkout date" />
      <HotelGuestsInput />
      <SubmitBtn />
    </form>
  );
};

export default HotelForm;
