import React, { useState } from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/DateInput";
import { v4 } from "uuid";
import DateTimeInput from "../common/DateTimeInput";
import CarPassengerInput from "./CarPassengerInput";

const Multiple = () => {
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
    <form className="serviceSearchForm flex-column">
      <h1 className="text-center mb-2 fw-normal">Multiple Transfers</h1>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2">
          <LocationInput
            title="Pickup Location"
            placeholder="Airport, city, hotel..."
            onChange={() => {}}
          />
          <LocationInput
            title="Drop off location"
            placeholder="Airport, city, hotel..."
            onChange={() => {}}
          />
          <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
          <CarPassengerInput />
        </div>

        {divsArray.map((_, index) => (
          <div className="d-flex gap-2 align-items-center" key={v4()}>
            <LocationInput
              title="Pickup Location"
              placeholder="Airport, city, hotel..."
              onChange={() => {}}
            />
            <LocationInput
              title="Drop off location"
              placeholder="Airport, city, hotel..."
              onChange={() => {}}
            />
            <DateTimeInput title="Pickup Date" placeholder="Enter pickup date" />
            <CarPassengerInput />

            <button type="button" onClick={cancelDest} className="btn btn-danger text-white">
              X
            </button>
          </div>
        ))}

        <div className="d-flex gap-2 justify-content-center">
          <button type="button" className="btn btn-success" onClick={addNewDest}>
            Add Transfer
          </button>
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default Multiple;
