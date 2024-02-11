"use client";
import React, { useState } from "react";

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const CarRidersInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;
  const riders = requestBody.carRiders;

  return (
    <div className="ridersInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">Riders</h5>
      <div className="dropdown">
        <button
          type="button"
          className="dropdownToggler"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {riders} {riders > 1 ? "Persons" : "Person"}
        </button>
        <div className="dropdown-menu serviceSearch_inputDropdown">
          <h6>How many persons will be in the car?</h6>

          <div className="d-flex gap-3">
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 1 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 1)}
            >
              1
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 2 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 2)}
            >
              2
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 3 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 3)}
            >
              3
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 4 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 4)}
            >
              4
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 5 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 5)}
            >
              5
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 6 ? "active" : ""}`}
              onClick={() => updateRequestBody("carRiders", 6)}
            >
              6
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRidersInput;
