import React, { useEffect, useState } from "react";
import NumberInput from "../common/NumberInput";
import { IoPerson } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

type IProps = {
  passengers: IFlightPassengers;
  onChange: (passengers: IFlightPassengers) => void;
};

const FlightPassengers = (props: IProps) => {
  const [passengers, setPassengers] = useState(props.passengers);

  useEffect(() => {
    props.onChange(passengers);
  }, [passengers]);

  const incrementAdults = () => {
    setPassengers({ ...passengers, adults: passengers.adults + 1 });
  };

  const incrementChildren = () => {
    setPassengers({ ...passengers, children: passengers.children + 1 });
  };

  const incrementInfants = () => {
    setPassengers({ ...passengers, infants: passengers.infants + 1 });
  };

  const decrementAdults = () => {
    setPassengers({ ...passengers, adults: passengers.adults - 1 });
  };

  const decrementChildren = () => {
    setPassengers({ ...passengers, children: passengers.children - 1 });
  };

  const decrementInfants = () => {
    setPassengers({ ...passengers, infants: passengers.infants - 1 });
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
        <IoPerson />

        <div>
          <span>{passengers.adults} Adults - </span>
          <span>{passengers.children} Children - </span>
          <span>{passengers.infants} Infants</span>
        </div>

        <IoIosArrowDown />
      </button>

      <div className="dropdown-menu p-3">
        <div className="d-flex flex-column gap-2">
          <div className="d-flex justify-content-between align-items-center gap-5">
            <h6>Adults</h6>
            <NumberInput
              min={1}
              max={5}
              value={passengers.adults}
              onIncrement={incrementAdults}
              onDecrement={decrementAdults}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center gap-5">
            <h6>Children</h6>
            <NumberInput
              min={1}
              max={5}
              value={passengers.children}
              onIncrement={incrementChildren}
              onDecrement={decrementChildren}
            />
          </div>

          <div className="d-flex justify-content-between align-items-center gap-5">
            <h6>Infants</h6>
            <NumberInput
              min={1}
              max={5}
              value={passengers.infants}
              onIncrement={incrementInfants}
              onDecrement={decrementInfants}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPassengers;
