import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { v4 } from "uuid";
import { IoMdPerson } from "react-icons/io";

type IProps = {
  passengers: string;
  onChange: (passengers: string) => void;
};

const TransportPassengers = (props: IProps) => {
  return (
    <div className="ss_formInput">
      <h6 className="ss_formInputTitle">Passengers</h6>
      <div className="d-flex align-items-center gap-2">
        <IoMdPerson />

        <input
          type="text"
          className="ss_formInputField"
          placeholder={"Enter PAX"}
          value={props.passengers}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TransportPassengers;
