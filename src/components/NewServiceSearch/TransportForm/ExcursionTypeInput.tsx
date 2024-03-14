import React from "react";
import ServiceSearchController from "../common/ServiceSearchController";
import { GiCheckeredFlag, GiDetour } from "react-icons/gi";
import ArrowIcon from "../common/ArrowIcon";

const ExcursionTypeInput = () => {
  const [excursionType, setExcursionType] = React.useState<string>("12 Hours");

  const clickHandler = (value: string) => {
    setExcursionType(value);
  };

  return (
    <ServiceSearchController title="Excursion Type">
      <GiCheckeredFlag />

      <div className="dropdown">
        <button
          className="serviceSearch_optionsListBtn"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-4">{excursionType}</span> <ArrowIcon />
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("12 Hours")}
            >
              12 Hours
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("6 Hours")}
            >
              6 Hours
            </button>
          </li>
          <li>
            <button
              className="dropdown-item fw-light"
              type="button"
              onClick={() => clickHandler("4 Hours")}
            >
              4 Hours
            </button>
          </li>
        </ul>
      </div>
    </ServiceSearchController>
  );
};

export default ExcursionTypeInput;
