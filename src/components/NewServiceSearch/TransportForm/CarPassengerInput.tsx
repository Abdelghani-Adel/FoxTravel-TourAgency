import React from "react";
import ServiceSearchController from "../common/ServiceSearchController";
import Image from "next/image";
import PersonIcon from "../common/PersonIcon";
import ArrowIcon from "../common/ArrowIcon";

const CarPassengerInput = () => {
  const [passengers, setPassengers] = React.useState<string>("1 Passenger");

  const clickHandler = (value: string) => {
    setPassengers(value);
  };

  return (
    <ServiceSearchController title="Passengers">
      <PersonIcon />

      <div className="dropdown">
        <button
          className="serviceSearch_optionsListBtn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-4">{passengers}</span> <ArrowIcon />
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("1 Passenger")}
            >
              1 Passenger
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("2 Passengers")}
            >
              2 Passengers
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("3 Passengers")}
            >
              3 Passengers
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("4 Passengers")}
            >
              4 Passengers
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("5 Passengers")}
            >
              5 Passengers
            </button>
          </li>
        </ul>
      </div>
    </ServiceSearchController>
  );
};

export default CarPassengerInput;
