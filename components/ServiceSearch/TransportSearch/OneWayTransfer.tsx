import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";
import SubmitButton from "../common/SubmitButton";

const OneWayTransfer = ({ startDate }: { startDate: Date | null }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.oneWay);

  const onPickupLocationChange = (location: ILocation) => {
    dispatch(transportSearchActions.setOneWayPickupLocation(location));
  };

  const onDropoffLocationChange = (location: ILocation) => {
    dispatch(transportSearchActions.setOneWayDropoffLocation(location));
  };

  const onPickupDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setOneWayPickupDate(date));
  };

  const onPassengersChange = (passengers: string) => {
    dispatch(transportSearchActions.setOneWayPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="Pickup"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onSelect={onPickupLocationChange}
      />

      <LocationInput
        title="Dropoff"
        placeholder="Dropoff Location"
        value={formData.dropoffLocation}
        onSelect={onDropoffLocationChange}
      />

      <DateInput
        title="Pickup Date"
        placeholder="Enter pickup date"
        value={formData.pickupDate}
        onChange={onPickupDateChange}
        minDate={startDate}
      />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />

      <SubmitButton link="/search/transport" />
    </div>
  );
};

export default OneWayTransfer;
