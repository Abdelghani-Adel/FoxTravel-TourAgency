import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { ChangeEvent } from "react";
import { v4 } from "uuid";
import LocationInput from "../common/LocationInput";
import DateInput from "../common/DateInput";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";
import TransportPassengers from "./TransportPassengers";

const MultipleTransfer = () => {
  const dispatch = useAppDispatch();
  const multipleTransfers = useAppSelector(
    (state) => state.transportSearch.multiple
  );

  const addTransfer = () => dispatch(transportSearchActions.addTransport());
  const removeTransfer = (index: number) =>
    dispatch(transportSearchActions.removeTransport(index));

  return (
    <div className="ss_multipleListModal">
      {multipleTransfers.map((flight, i) => (
        <div className="ss_inputGroup" key={v4()}>
          <MultipleTransferSingle transfer={flight} index={i} />
          <button className="foxBtn mainBtn" onClick={() => removeTransfer(i)}>
            X
          </button>
        </div>
      ))}

      <div>
        <button className="foxBtn mainBtn" onClick={addTransfer}>
          Add Transfer
        </button>
      </div>
    </div>
  );
};

const MultipleTransferSingle = (props: ISingleProps) => {
  const { transfer, index } = props;
  const dispatch = useAppDispatch();

  const onLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      index,
      location: e.target.value,
    };
    dispatch(transportSearchActions.setMultiplePickupLocation(data));
  };

  const onDestinationChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = {
      index,
      location: e.target.value,
    };
    dispatch(transportSearchActions.setMultipleDropoffLocation(data));
  };

  const onDepartureDateChange = (date: Date | null) => {
    const data = {
      index,
      date,
    };
    dispatch(transportSearchActions.setMultiplePickupDate(data));
  };

  const onPassengersChange = (passengers: number) => {
    const data = {
      index,
      passengers,
    };
    dispatch(transportSearchActions.setMultiplePassengers(data));
  };

  return (
    <>
      <LocationInput
        title="From"
        placeholder="Departure Location"
        value={transfer.pickupLocation}
        onChange={onLocationChange}
      />

      <LocationInput
        title="To"
        placeholder="Destination Location"
        value={transfer.dropoffLocation}
        onChange={onDestinationChange}
      />

      <DateInput
        title="Departure Date"
        placeholder="Enter departure date"
        value={transfer.pickupDate}
        onChange={onDepartureDateChange}
      />

      <TransportPassengers
        passengers={transfer.passengers}
        onChange={onPassengersChange}
      />
    </>
  );
};

type ISingleProps = {
  transfer: {
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: Date | null;
    passengers: number;
  };
  index: number;
};

export default MultipleTransfer;
