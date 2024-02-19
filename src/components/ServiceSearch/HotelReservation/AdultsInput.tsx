import React from "react";
import NumberInput from "./NumberInput";

type props = {
  onAdultsChange: (newAdults: number) => void;
};

const AdultsInput = (props: props) => {
  return (
    <div className="d-flex gap-5 justify-content-between align-items-center">
      <p>Adults</p>
      <NumberInput initValue={1} min={1} max={5} onChange={props.onAdultsChange} />
    </div>
  );
};

export default AdultsInput;
