import React, { useState } from "react";
import AirportInput from "./AirportInput";
import DateInput from "./DateInput";
import { v4 } from "uuid";

const MultiDestinations = () => {
  const [destCount, setDestCount] = useState<number>(1);
  const divsArray = Array.from({ length: destCount - 1 });

  const addNewDest = () => {
    setDestCount((prev) => {
      if (prev === 4) {
        return prev;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex flex-column gap-2">
        {divsArray.map((_, index) => (
          <div className="d-flex align-items-center gap-2" key={v4()}>
            <AirportInput title="From" />
            <AirportInput title="To" />
            <DateInput shown title="Departure" />
          </div>
        ))}
        <div className="d-flex align-items-center gap-2">
          <AirportInput title="From" />
          <AirportInput title="To" />
          <DateInput shown title="Departure" />
        </div>
      </div>

      <div className="d-flex gap-2">
        <button type="button" className="foxBtn thirdBtn w-100" onClick={addNewDest}>
          Add Destination
        </button>
        <button className="foxBtn thirdBtn w-100">Search</button>
      </div>
    </div>
  );
};

export default MultiDestinations;
