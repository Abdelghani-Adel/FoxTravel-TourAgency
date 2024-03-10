import React from "react";
import NumberInput from "./NumberInput";

type props = {
  onChildsChange: (newAdults: number) => void;
};

const ChildsInput = (props: props) => {
  return (
    <div className="d-flex gap-5 justify-content-between align-items-center">
      <p>Childs</p>
      <NumberInput initValue={1} min={1} max={5} onChange={props.onChildsChange} />
    </div>
  );
};

export default ChildsInput;
