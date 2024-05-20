import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { transportSearchActions } from "@/app/_redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";

const RoundTransfer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.round);

  const onPickupLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(transportSearchActions.setRoundPickupLocation(e.target.value));
  };

  const onDropoffLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(transportSearchActions.setRoundDropoffLocation(e.target.value));
  };

  const onPickupDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setRoundPickupDate(date));
  };

  const onReturnDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setRoundReturnDate(date));
  };

  const onPassengersChange = (passengers: number) => {
    dispatch(transportSearchActions.setRoundPassengers(passengers));
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

      <DateInput
        title="Return Date"
        placeholder="Enter return date"
        value={formData.returnDate}
        onChange={onReturnDateChange}
      />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />
    </div>
  );
};

export default RoundTransfer;
