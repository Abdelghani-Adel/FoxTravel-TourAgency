import React, { ChangeEvent } from "react";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";
import SubmitButton from "../common/SubmitButton";

const RoundTransfer = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.transportSearch.round);

  const onPickupLocationChange = (location: ILocation) => {
    dispatch(transportSearchActions.setRoundPickupLocation(location));
  };

  const onDropoffLocationChange = (location: ILocation) => {
    dispatch(transportSearchActions.setRoundDropoffLocation(location));
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
      />

      <DateInput
        title="Return Date"
        placeholder="Enter return date"
        value={formData.returnDate}
        onChange={onReturnDateChange}
      />

      <TransportPassengers passengers={formData.passengers} onChange={onPassengersChange} />
      <SubmitButton link="/search/transport" />
    </div>
  );
};

export default RoundTransfer;
