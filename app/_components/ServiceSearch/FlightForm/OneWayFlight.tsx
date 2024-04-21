import React from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import FlightPassengers from "../common/Inputs/FlightPassengers";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";
import FormWrapper from "../common/FormWrapper";

const OneWayFlight = () => {
  const dispatch = useAppDispatch();
  const reduxState = useAppSelector((state) => state.serviceSearch.flight);

  const onCheckInChangeHandler = (date: Date | null) => {
    const oneWayForm = { ...reduxState.oneway, departureDate: date };
    dispatch(serviceSearchActions.updateFlightForm({ ...reduxState, oneway: oneWayForm }));
  };

  return (
    <FormWrapper onSubmit={() => {}}>
      <Location title="From" placeholder="Departure Location" onChange={() => {}} />
      <Location title="To" placeholder="Destination Location" onChange={() => {}} />
      <DateInput
        onChange={onCheckInChangeHandler}
        defaultValue={reduxState.oneway.departureDate}
        title="Departure"
        placeholder="Enter departure date"
      />
      <FlightPassengers />
      <SubmitBtn />
    </FormWrapper>
  );
};

export default OneWayFlight;
