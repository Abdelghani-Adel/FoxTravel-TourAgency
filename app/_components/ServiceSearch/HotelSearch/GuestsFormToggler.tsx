import { useAppSelector } from "@/app/_redux/store";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

const GuestsFormToggler = () => {
  const hotelSearch = useAppSelector((state) => state.hotelSearch);

  return (
    <button
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
      className="ss_dropdownToggler"
    >
      <IoPerson />

      <div>
        <span>{hotelSearch.rooms} Rooms - </span>
        <span>{hotelSearch.adults} Adults - </span>
        <span>{hotelSearch.childs.length} Childs</span>
      </div>

      <IoIosArrowDown />
    </button>
  );
};

export default GuestsFormToggler;
