import React, { ChangeEvent, FormEvent } from "react";
import LocationInput from "../common/LocationInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { hotelSearchActions } from "@/app/_redux/slices/hotelSearchSlice";
import DateInput from "../common/DateInput";
import HotelGuests from "./HotelGuests";
import SubmitButton from "../common/SubmitButton";
import { useRouter } from "next/navigation";

const HotelSearch = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const hotelSearch = useAppSelector((state) => state.hotelSearch);

  const onDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(hotelSearchActions.setCity(e.target.value));
  };

  const onCheckinChange = (date: Date | null) => {
    dispatch(hotelSearchActions.setStartDate(date));
  };

  const onCheckoutChange = (date: Date | null) => {
    dispatch(hotelSearchActions.setEndDate(date));
  };

  return (
    <form className="ss_inputGroup">
      <LocationInput
        title="Destination"
        placeholder="Where are you going?"
        value={hotelSearch.city}
        onChange={onDestinationChange}
      />

      <DateInput
        title="Check-In"
        placeholder="Enter checkin date"
        value={hotelSearch.startDate}
        onChange={onCheckinChange}
      />

      <DateInput
        title="Check-Out"
        placeholder="Enter checkout date"
        value={hotelSearch.endDate}
        onChange={onCheckoutChange}
      />

      <HotelGuests />

      <SubmitButton link="/search/hotels" />
    </form>
  );
};

export default HotelSearch;
