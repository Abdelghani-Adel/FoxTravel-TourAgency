import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import React, { useState } from "react";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";
import FlightTypeSelectors from "./FlightTypeSelectors";

const FlightForm = () => {
  const reduxState = useAppSelector((state) => state.serviceSearch.flight);
  const flightType = reduxState.flightType;

  return (
    <div>
      <FlightTypeSelectors />
      {flightType === "oneway" && <OneWayFlight />}
      {flightType === "round" && <RoundFlight />}
    </div>
  );
};

export default FlightForm;
