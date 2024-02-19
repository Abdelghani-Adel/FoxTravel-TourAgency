import React from "react";
import NumberInput from "./NumberInput";

type props = {
  onRoomsChange: (newRooms: number) => void;
};

const RoomsInput = (props: props) => {
  return (
    <div className="d-flex gap-5 justify-content-between align-items-center">
      <p>Rooms</p>
      <NumberInput initValue={1} min={1} max={3} onChange={props.onRoomsChange} />
    </div>
  );
};

export default RoomsInput;
