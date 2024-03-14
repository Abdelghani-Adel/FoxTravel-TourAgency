import React, { useState } from "react";
import LocationInput from "../common/LocationInput";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/DateInput";
import FlightPassengersInput from "./FlightPassengersInput";
import { v4 } from "uuid";

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
      <h1 className="text-center mb-2 fw-normal">Multiple Destinations</h1>
      <div className="d-flex flex-column gap-3">
        <div className="d-flex gap-2">
          <LocationInput title="From" placeholder="Departure Location" onChange={() => {}} />
          <LocationInput title="To" placeholder="Destination Location" onChange={() => {}} />
          <DateInput title="Departure" placeholder="Enter departure date" />
          <FlightPassengersInput />
        </div>

        {divsArray.map((_, index) => (
          <div className="d-flex gap-2 align-items-center" key={v4()}>
            <LocationInput title="From" placeholder="Departure Location" onChange={() => {}} />
            <LocationInput title="To" placeholder="Destination Location" onChange={() => {}} />
            <DateInput title="Departure" placeholder="Enter departure date" />
            <FlightPassengersInput />
            <button type="button" onClick={cancelDest} className="btn btn-danger text-white">
              X
            </button>
          </div>
        ))}

        <div className="d-flex gap-2 justify-content-center">
          <button type="button" className="btn btn-success" onClick={addNewDest}>
            Add Destination
          </button>
          <SubmitBtn />
        </div>
      </div>
    </form>
  );
};

export default Multiple;
