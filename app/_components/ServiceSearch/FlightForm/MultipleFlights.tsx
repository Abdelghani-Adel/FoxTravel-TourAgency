import React, { useState } from "react";
import Location from "../common/Inputs/Location";
import SubmitBtn from "../common/SubmitBtn";
import DateInput from "../common/Inputs/DateInput";
import FlightPassengers from "../common/Inputs/FlightPassengers";
import { v4 } from "uuid";
import { useAppSelector } from "@/app/_redux/store";

const MultipleFlights = () => {
  const reduxState = useAppSelector((state) => state.serviceSearch.hotel);
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
      <h1 className="ss_multiple_title">Multiple Destinations</h1>
      <div className="ss_multiple_input">
        <Location title="From" placeholder="Departure Location" onChange={() => {}} />
        <Location title="To" placeholder="Destination Location" onChange={() => {}} />
        <DateInput
          title="Departure"
          placeholder="Enter departure date"
          defaultValue={reduxState.startDate}
          onChange={() => {}}
        />
        <FlightPassengers />
      </div>

      {divsArray.map((_, index) => (
        <div className="ss_multiple_input" key={v4()}>
          <Location title="From" placeholder="Departure Location" onChange={() => {}} />
          <Location title="To" placeholder="Destination Location" onChange={() => {}} />
          <DateInput
            title="Departure"
            placeholder="Enter departure date"
            defaultValue={reduxState.startDate}
            onChange={() => {}}
          />
          <FlightPassengers />
          <button type="button" onClick={cancelDest} className="foxBtn smBtn secondBtn">
            X
          </button>
        </div>
      ))}

      <div className="ss_multiple_actions">
        <button type="button" className="foxBtn thirdBtn" onClick={addNewDest}>
          Add Destination
        </button>
        <SubmitBtn />
      </div>
    </form>
  );
};

export default MultipleFlights;
