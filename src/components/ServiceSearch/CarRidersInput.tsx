"use client";
import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useState } from "react";

const CarRidersInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const riders = searchState.carRiders;

  const updateRiders = (newRiders: number) => {
    dispatch(searchActions.updateCarRiders(newRiders));
  };

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
              onClick={() => updateRiders(1)}
            >
              1
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 2 ? "active" : ""}`}
              onClick={() => updateRiders(2)}
            >
              2
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 3 ? "active" : ""}`}
              onClick={() => updateRiders(3)}
            >
              3
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 4 ? "active" : ""}`}
              onClick={() => updateRiders(4)}
            >
              4
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 5 ? "active" : ""}`}
              onClick={() => updateRiders(5)}
            >
              5
            </button>
            <button
              type="button"
              className={`serviceSearch_carRidersInput ${riders == 6 ? "active" : ""}`}
              onClick={() => updateRiders(6)}
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
