"use client";
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

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const CityInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;

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
          {requestBody.city}
        </button>
        <div className="dropdown-menu serviceSearch_inputDropdown">
          <ul className="cityLocations_optionsList">
            {locations.map((location) => (
              <li
                key={location.id}
                className={`cityLocation ${requestBody.city === location.name ? "active" : ""}`}
                onClick={() => updateRequestBody("city", location.name)}
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
