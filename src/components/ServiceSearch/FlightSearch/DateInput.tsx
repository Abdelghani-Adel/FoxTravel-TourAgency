import React from "react";
import ReactDatePicker from "react-datepicker";

type props = {
  title: string;
  shown: boolean;
};

const DateInput = (props: props) => {
  if (!props.shown) return null;
  return (
    <div className="flightSearch_controller">
      <h6 className="flightSearch_controllerTitle">{props.title}</h6>
      <ReactDatePicker selected={new Date()} onChange={(date) => {}} />
    </div>
  );
};

export default DateInput;
