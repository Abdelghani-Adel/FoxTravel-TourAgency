import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";
import ExcursionType from "./ExcursionsType";
import SubmitButton from "../common/SubmitButton";

const ExcursionTransfer = ({ startDate }: { startDate: Date | null }) => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.excursions);

  const onPickupLocationChange = (location: ILocation) => {
    dispatch(transportSearchActions.setExcursionsPickupLocation(location));
  };

  const onPickupDateChange = (date: Date | null) => {
    dispatch(transportSearchActions.setExcursionsPickupDate(date));
  };

  const onPassengersChange = (passengers: string) => {
    dispatch(transportSearchActions.setExcursionsPassengers(passengers));
  };

  return (
    <div className="ss_inputGroup">
      <LocationInput
        title="Pickup"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onSelect={onPickupLocationChange}
      />

      <DateInput
        title="Pickup Date"
        placeholder="Enter pickup date"
        value={formData.pickupDate}
        onChange={onPickupDateChange}
        minDate={startDate}
      />

      <ExcursionType />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />

      <SubmitButton link="/search/transport" />
    </div>
  );
};

export default ExcursionTransfer;
