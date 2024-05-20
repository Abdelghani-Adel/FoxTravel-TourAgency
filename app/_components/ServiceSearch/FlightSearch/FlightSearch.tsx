import React from "react";
import FlightTypeSelector from "./FlightTypeSelector";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";
import MultipleFlights from "./MultipleFlights";
import MyModal from "../../../../app/_components/ui/MyModal";
import { flightSearchActions } from "@/app/_redux/slices/flightSearchSlice";

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
