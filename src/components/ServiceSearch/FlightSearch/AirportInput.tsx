import React from "react";

type props = {
  title: string;
};

const AirportInput = (props: props) => {
  return (
    <div className="flightSearch_controller">
      <h6 className="flightSearch_controllerTitle">{props.title}</h6>
      <input type="text" className="flightSearch_input" placeholder="Country, city or airport" />
    </div>
  );
};

export default AirportInput;
