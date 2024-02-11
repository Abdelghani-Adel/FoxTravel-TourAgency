import React from "react";

type props = {
  rooms: number;
  adults: number;
  childs: number;
};

const HotelGuestsSummary = (props: props) => {
  const { rooms, adults, childs } = props;

  return (
    <button
      type="button"
      className="dropdownToggler"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      <span>{rooms > 1 ? `${rooms} Rooms` : `${rooms} Room`}</span>

      <span>{adults > 1 ? ` - ${adults} Adults ` : ` - ${adults} Adult `}</span>

      <span>
        {childs > 0 && `- ${childs} `}
        {childs > 0 && (childs > 1 ? "Childs" : "Child")}
      </span>
    </button>
  );
};

export default HotelGuestsSummary;
