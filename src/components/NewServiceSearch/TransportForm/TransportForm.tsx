import React, { useState } from "react";
import { useAppSelector } from "@/src/redux/store";
import TypeSelectors from "./TypeSelectors";
import OneWay from "./OneWay";
import Return from "./Return";
import Excursion from "./Excursion";
import Multiple from "./Multiple";

const TransportForm = () => {
  const reduxFormState = useAppSelector((state) => state.serviceSearch);
  const activeCategory = reduxFormState.category;
  const [flightType, setFlightType] = useState("oneway");

  const onFlightTypeChange = (flightType: string) => {
    setFlightType(flightType);
  };

  if (activeCategory !== "Transport") return null;

  return (
    <div>
      <TypeSelectors onChange={onFlightTypeChange} />
      {flightType === "oneway" && <OneWay />}
      {flightType === "return" && <Return />}
      {flightType === "excursion" && <Excursion />}
    </div>
  );
};

export default TransportForm;
