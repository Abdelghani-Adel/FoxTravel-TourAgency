"use client";
import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const locations = [
  {
    id: 1,
    name: "Hurghada",
    address: "Red Sea, Egypt",
  },
  {
    id: 2,
    name: "Marsa Alam",
    address: "Red Sea, Egypt",
  },
  {
    id: 3,
    name: "Cairo",
    address: "Cairo, Egypt",
  },
  {
    id: 4,
    name: "Dahab",
    address: "Sharm, Egypt",
  },
  {
    id: 5,
    name: "Elsokhna",
    address: "Red Sea, Egypt",
  },
];

const CityInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);

  const changeCity = (newCity: string) => {
    dispatch(searchActions.updateCity(newCity));
  };

  return (
    <div className="cityInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">City</h5>
      <div className="dropdown">
        <button
          type="button"
          className="dropdownToggler"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {searchState.city}
        </button>
        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="cityLocations_optionsList">
            {locations.map((location) => (
              <li
                key={location.id}
                className={`cityLocation ${searchState.city === location.name ? "active" : ""}`}
                onClick={() => changeCity(location.name)}
              >
                <FaLocationDot className="icon" />
                <div className="d-flex flex-column">
                  <span className="locationName">{location.name}</span>
                  <span className="locationAddress">{location.address}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CityInput;
