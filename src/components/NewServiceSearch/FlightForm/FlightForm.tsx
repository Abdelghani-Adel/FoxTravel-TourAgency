import { useAppSelector } from "@/src/redux/store";
import React, { useState } from "react";
import OneWayFlight from "./OneWayFlight";
import RoundFlight from "./RoundFlight";
import FlightTypeSelectors from "./FlightTypeSelectors";

const FlightForm = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;
  const [flightType, setFlightType] = useState("oneway");

  const onFlightTypeChange = (flightType: string) => {
    setFlightType(flightType);
  };

  if (activeCategory !== "Flight") return null;

  return (
    <div>
      <FlightTypeSelectors selectedType={flightType} onChange={onFlightTypeChange} />
      {flightType === "oneway" && <OneWayFlight />}
      {flightType === "round" && <RoundFlight />}
    </div>
  );
};

export default FlightForm;
