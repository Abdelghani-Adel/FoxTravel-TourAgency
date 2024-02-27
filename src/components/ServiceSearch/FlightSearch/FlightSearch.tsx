import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const FlightSearch = () => {
  const [searchType, setSearchType] = useState<IFlightSearchType>("round");

  return (
    <form className="flightSearch">
      <div className="d-flex gap-4 mb-2 fw-normal">
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="searchType"
            id="round"
            defaultChecked
          />
          <label htmlFor="round" className="form-check-label">
            Round Trip
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="searchType" id="oneway" />
          <label htmlFor="oneway" className="form-check-label">
            One Way
          </label>
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="searchType" id="multi" />
          <label htmlFor="multi" className="form-check-label">
            Multiple Destinations
          </label>
        </div>
      </div>

      <div className="d-flex gap-2">
        <div className="flightSearch_controllerList">
          <div className="flightSearch_controller">
            <h6 className="flightSearch_controllerTitle">From</h6>
            <input
              type="text"
              className="flightSearch_input"
              placeholder="Country, city or airport"
            />
          </div>

          <div className="flightSearch_controller">
            <h6 className="flightSearch_controllerTitle">To</h6>
            <input
              type="text"
              className="flightSearch_input"
              placeholder="Country, city or airport"
            />
          </div>

          <div className="flightSearch_controller">
            <h6 className="flightSearch_controllerTitle">Departure</h6>
            <ReactDatePicker selected={new Date()} onChange={(date) => {}} />
          </div>

          <div className="flightSearch_controller">
            <h6 className="flightSearch_controllerTitle">Return</h6>
            <ReactDatePicker selected={new Date()} onChange={(date) => {}} />
          </div>

          <div className="flightSearch_controller">
            <h6 className="flightSearch_controllerTitle">Travellers & class</h6>
          </div>
        </div>

        <button type="submit" className="flightSearch_submitBtn">
          Search
        </button>
      </div>
    </form>
  );
};

export default FlightSearch;
