import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { transportSearchActions } from "@/app/_redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";
import SubmitButton from "../common/SubmitButton";

const OneWayTransfer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.oneWay);

  const onPickupLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(transportSearchActions.setOneWayPickupLocation(e.target.value));
  };

  const onDropoffLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(transportSearchActions.setOneWayDropoffLocation(e.target.value));
  };

  const onPickupDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setOneWayPickupDate(date));
  };

  const onPassengersChange = (passengers: number) => {
    dispatch(transportSearchActions.setOneWayPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="Pickup"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onChange={onPickupLocationChange}
      />

      <LocationInput
        title="Dropoff"
        placeholder="Dropoff Location"
        value={formData.dropoffLocation}
        onChange={onDropoffLocationChange}
      />

      <DateInput
        title="Pickup Date"
        placeholder="Enter pickup date"
        value={formData.pickupDate}
        onChange={onPickupDateChange}
      />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />

      <SubmitButton link="/search/transport" />
    </div>
  );
};

export default OneWayTransfer;
