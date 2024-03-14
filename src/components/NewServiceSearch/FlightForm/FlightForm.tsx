import { useAppSelector } from "@/src/redux/store";
import React, { useState } from "react";
import OneWay from "./OneWay";
import Round from "./Round";
import TypeSelectors from "./TypeSelectors";

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
      <TypeSelectors onChange={onFlightTypeChange} />
      {flightType === "oneway" && <OneWay />}
      {flightType === "round" && <Round />}
    </div>
  );
};

export default FlightForm;
