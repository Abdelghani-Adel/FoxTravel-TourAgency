import { useAppSelector } from "@/app/_redux/store";
import React, { useState } from "react";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";
import FlightTypeSelectors from "./FlightTypeSelectors";

const FlightForm = () => {
  const [flightType, setFlightType] = useState("oneway");

  const onFlightTypeChange = (flightType: string) => {
    setFlightType(flightType);
  };

  return (
    <div>
      <FlightTypeSelectors selectedType={flightType} onChange={onFlightTypeChange} />
      {flightType === "oneway" && <OneWayFlight />}
      {flightType === "round" && <RoundFlight />}
    </div>
  );
};

export default FlightForm;
