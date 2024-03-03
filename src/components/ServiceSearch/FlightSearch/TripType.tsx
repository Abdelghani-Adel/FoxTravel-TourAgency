import React, { ChangeEvent, useState } from "react";

type props = {
  onChange: (tripType: string) => void;
};

const TripType = (props: props) => {
  const onSearchTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="d-flex gap-4 mb-2 fw-normal">
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="round"
          name="searchType"
          id="round"
          defaultChecked
          onChange={onSearchTypeChange}
        />
        <label htmlFor="round" className="form-check-label text-white">
          Round Trip
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="oneway"
          name="searchType"
          id="oneway"
          onChange={onSearchTypeChange}
        />
        <label htmlFor="oneway" className="form-check-label text-white">
          One Way
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          className="form-check-input"
          value="multiple"
          name="searchType"
          id="multi"
          onChange={onSearchTypeChange}
        />
        <label htmlFor="multi" className="form-check-label text-white">
          Multiple Destinations
        </label>
      </div>
    </div>
  );
};

export default TripType;
