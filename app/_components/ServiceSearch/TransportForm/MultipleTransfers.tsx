import React, { useState } from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import { v4 } from "uuid";
import DateTimeInput from "../common/Inputs/DateTimeInput";
import CarPassengersDropdown from "../common/Inputs/CarPassengers";

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
    <form className="serviceSearchForm flex-column text-white bgMain p-3 rounded-3">
      <h1 className="text-center mb-2 fw-normal">Multiple Transfers</h1>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2">
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
          <div className="d-flex gap-2 align-items-center" key={v4()}>
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

        <div className="d-flex gap-2 justify-content-center">
          <button type="button" className="foxBtn thirdBtn" onClick={addNewDest}>
            Add Transfer
          </button>
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default MultipleTransfers;
