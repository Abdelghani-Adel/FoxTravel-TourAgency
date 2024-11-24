import React from "react";
import FlightTypeSelector from "./FlightTypeSelector";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";
import MultipleFlights from "./MultipleFlights";
import MyModal from "@/components/ui/MyModal";
import { flightSearchActions } from "@/redux/slices/flightSearchSlice";

const FlightSearch = () => {
  const dispatch = useAppDispatch();
  const flightType = useAppSelector((state) => state.flightSearch.type);

  const onCloseModal = () => {
    dispatch(flightSearchActions.setFlightType("oneway"));
  };

  return (
    <>
      <FlightTypeSelector />

      {flightType === "oneway" && <OneWayFlight />}
      {flightType === "round" && <RoundFlight />}

      <MyModal show={flightType === "multiple"} onClose={onCloseModal}>
        <MultipleFlights />
      </MyModal>
    </>
  );
};

export default FlightSearch;
