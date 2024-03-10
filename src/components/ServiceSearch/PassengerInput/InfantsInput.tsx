import React from "react";
import NumberInput from "./NumberInput";

type props = {
  onInfantChange: (newAdults: number) => void;
};

const InfantsInput = (props: props) => {
  return (
    <div className="d-flex gap-5 justify-content-between align-items-center">
      <p>Infants</p>
      <NumberInput initValue={1} min={1} max={5} onChange={props.onInfantChange} />
    </div>
  );
};

export default InfantsInput;
