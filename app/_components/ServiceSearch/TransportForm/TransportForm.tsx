import React, { useState } from "react";
import { useAppSelector } from "@/app/_redux/store";
import TransportTypeSelectors from "./TransportTypeSelectors";
import OneWayTransfer from "./OneWayTransfer";
import ReturnTransfer from "./ReturnTransfer";
import ExcursionTransfer from "./ExcursionTransfer";
import MultipleTransfers from "./MultipleTransfers";

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
      <TransportTypeSelectors selectedType={flightType} onChange={onFlightTypeChange} />
      {flightType === "oneway" && <OneWayTransfer />}
      {flightType === "return" && <ReturnTransfer />}
      {flightType === "excursion" && <ExcursionTransfer />}
    </div>
  );
};

export default TransportForm;
