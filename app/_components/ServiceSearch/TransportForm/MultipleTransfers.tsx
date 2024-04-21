import React, { useState } from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import { v4 } from "uuid";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";
import FormWrapper from "../common/FormWrapper";

const MultipleTransfers = () => {
  const [destCount, setDestCount] = useState<number>(3);
  const divsArray = Array.from({ length: destCount - 1 });

  const addNewDest = () => {
    setDestCount((prev) => prev + 1);
  };

  const cancelDest = () => {
    setDestCount((prev) => {
      return prev - 1;
    });
  };

  return (
    <form className="ss_multiple_wrapper">
      <h1 className="ss_multiple_title">Multiple Transfers</h1>

      <div className="ss_multiple_input">
        <Location
          title="Pickup Location"
          placeholder="Airport, city, hotel..."
          onChange={() => {}}
        />
        <Location
          title="Drop off location"
          placeholder="Airport, city, hotel..."
          onChange={() => {}}
        />
        <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
        <CarPassengersDropdown />
      </div>

      {divsArray.map((_, index) => (
        <div className="ss_multiple_input" key={v4()}>
          <Location
            title="Pickup Location"
            placeholder="Airport, city, hotel..."
            onChange={() => {}}
          />
          <Location
            title="Drop off location"
            placeholder="Airport, city, hotel..."
            onChange={() => {}}
          />
          <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
          <CarPassengersDropdown />

          <button type="button" onClick={cancelDest} className="foxBtn secondBtn smBtn">
            X
          </button>
        </div>
      ))}

      <div className="ss_multiple_actions">
        <button type="button" className="foxBtn thirdBtn" onClick={addNewDest}>
          Add Transfer
        </button>
        <SubmitBtn />
      </div>
    </form>
  );
};

export default MultipleTransfers;
