import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { v4 } from "uuid";
import { IoMdPerson } from "react-icons/io";

const options = [
  {
    value: "1 Passenger",
    label: "1 Passenger",
  },
  {
    value: "2 Passengers",
    label: "2 Passengers",
  },
  {
    value: "3 Passengers",
    label: "3 Passengers",
  },
  {
    value: "4 Passengers",
    label: "4 Passengers",
  },
  {
    value: "5 Passengers",
    label: "5 Passengers",
  },
];

type IProps = {
  passengers: number;
  onChange: (passengers: number) => void;
};

const TransportPassengers = (props: IProps) => {
  const onPassengerChange = (passengers: number) => {
    props.onChange(passengers);
  };

  return (
    <div className="dropdown ss_formInput">
      <h6 className="ss_formInputTitle">Passengers</h6>
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
        className="ss_dropdownToggler"
      >
        <IoMdPerson />

        <div>{props.passengers} Passenger</div>

        <IoIosArrowDown />
      </button>

      <ul className={`dropdown-menu`}>
        {options.map((option, i) => (
          <li key={v4()}>
            <button
              className="dropdown-item fw-light"
              value={option.value}
              type="button"
              onClick={() => onPassengerChange(i + 1)}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportPassengers;
