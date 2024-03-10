import React from "react";
import CityInput from "./CityInput/CityInput";
import DateDoublePicker from "./DateDoublePicker/DateDoublePicker";
import HotelReservation from "./HotelReservation/HotelReservation";
import { FaSearch } from "react-icons/fa";

const HotelSearchForm = () => {
  return (
    <div className="serviceSearch_form">
      <CityInput />
      <DateDoublePicker />
      <HotelReservation />
      <button className="serviceSearch_submitBtn">
        <FaSearch /> Search
      </button>
    </div>
  );
};

export default HotelSearchForm;
