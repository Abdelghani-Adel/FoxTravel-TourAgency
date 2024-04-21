import { useState } from "react";
import ExcursionTransfer from "./ExcursionTransfer";
import OneWayTransfer from "./OneWayTransfer";
import ReturnTransfer from "./ReturnTransfer";
import TransportTypeSelectors from "./TransportTypeSelectors";

const TransportForm = () => {
  const [flightType, setFlightType] = useState("oneway");

  const onFlightTypeChange = (flightType: string) => {
    setFlightType(flightType);
  };

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
