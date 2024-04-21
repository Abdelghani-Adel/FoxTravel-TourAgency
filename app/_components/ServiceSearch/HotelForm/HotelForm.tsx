import React, { useEffect, useState } from "react";
import SubmitBtn from "../common/SubmitBtn";
import Location from "../common/Inputs/Location";
import DateInput from "../common/Inputs/DateInput";
import HotelGuests from "../common/Inputs/HotelGuests";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";
import FormWrapper from "../common/FormWrapper";

const HotelForm = () => {
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((state) => state.serviceSearch.hotel);

  const onLocationChangeHandler = (city: string) => {
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, city: city }));
  };

  const onCheckInChangeHandler = (date: Date | null) => {
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, startDate: date }));
  };

  const onCheckoutChangeHandler = (date: Date | null) => {
    dispatch(serviceSearchActions.updateHotelForm({ ...reduxState, endDate: date }));
  };

  return (
    <FormWrapper onSubmit={() => {}}>
      <Location
        title="Destination"
        placeholder="Where are you going?"
        onChange={onLocationChangeHandler}
      />

      <DateInput
        title="Check-In"
        placeholder="Enter checkin date"
        onChange={onCheckInChangeHandler}
        defaultValue={reduxState.startDate}
      />

      <DateInput
        title="Check-Out"
        placeholder="Enter checkout date"
        onChange={onCheckoutChangeHandler}
        defaultValue={reduxState.endDate}
      />

      <HotelGuests />
      <SubmitBtn />
    </FormWrapper>
  );
};

export default HotelForm;
