import React, { useState } from "react";
import styles from "./HotelReservation.module.css";
import { ArrowIcon } from "./TogglerButton";

type props = {
  value: number;
  id: number;
  onChange: (newAge: number, index: number) => void;
};

const ChildAgeInput = (props: props) => {
  const { value, onChange, id } = props;

  const clickHandler = (value: number) => {
    onChange(value, id);
  };

  const format = () => {
    if (value == 1) {
      return `${value} year old`;
    } else {
      return `${value} years old`;
    }
  };

  return (
    <div className="dropdown">
      <button
        className={styles.childAgeInput}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{format()}</span> <ArrowIcon />
      </button>
      <ul className="dropdown-menu ">
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(1)}>
            1 year old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(2)}>
            2 years old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(3)}>
            3 years old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(4)}>
            4 years old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(5)}>
            5 years old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(6)}>
            6 years old
          </button>
        </li>
        <li>
          <button className="dropdown-item fw-light" type="button" onClick={() => clickHandler(7)}>
            7 years old
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ChildAgeInput;
