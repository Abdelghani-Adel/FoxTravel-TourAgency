import React, { useEffect, useState } from "react";
import SubmitBtn from "../common/SubmitBtn";
import Location from "../common/Inputs/Location";
import DateInput from "../common/Inputs/DateInput";
import HotelGuests from "../common/Inputs/HotelGuests";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";

const HotelForm = () => {
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((state) => state.serviceSearch);
  const [localState, setLocalState] = useState<ISearchHotelState>(reduxState.hotel);

  const onLocationChangeHandler = (city: string) => {
    setLocalState((prev) => ({ ...prev, city: city }));
  };

  const onCheckInChangeHandler = (date: Date | null) => {
    setLocalState({ ...localState, startDate: date });
  };

  const onCheckoutChangeHandler = (date: Date | null) => {
    setLocalState({ ...localState, endDate: date });
  };

  useEffect(() => {
    dispatch(serviceSearchActions.updateHotelForm(localState));
  }, [localState]);

  return (
    <form className="serviceSearchForm">
      <Location
        title="Destination"
        placeholder="Where are you going?"
        onChange={onLocationChangeHandler}
      />

      <DateInput
        title="Check-In"
        placeholder="Enter checkin date"
        onChange={onCheckInChangeHandler}
        defaultValue={localState.startDate}
      />

      <DateInput
        title="Check-Out"
        placeholder="Enter checkout date"
        onChange={onCheckoutChangeHandler}
        defaultValue={localState.endDate}
      />

      <HotelGuests />
      <SubmitBtn />
    </form>
  );
};

export default HotelForm;
