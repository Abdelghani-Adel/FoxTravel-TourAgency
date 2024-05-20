import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { transportSearchActions } from "@/app/_redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";
import ExcursionType from "./ExcursionsType";

const ExcursionTransfer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.excursions);

  const onPickupLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(transportSearchActions.setExcursionsPickupLocation(e.target.value));
  };

  const onPickupDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setExcursionsPickupDate(date));
  };

  const onPassengersChange = (passengers: number) => {
    dispatch(transportSearchActions.setExcursionsPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="Pickup"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onChange={onPickupLocationChange}
      />

      <DateInput
        title="Pickup Date"
        placeholder="Enter pickup date"
        value={formData.pickupDate}
        onChange={onPickupDateChange}
      />

      <ExcursionType />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />
    </div>
  );
};

export default ExcursionTransfer;
