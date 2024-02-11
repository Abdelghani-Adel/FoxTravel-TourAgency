import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type props = {
  adults: number;
  incrementAdults: () => void;
  decrementAdults: () => void;
};

const minAdults = 1;
const maxAdults = 8;

const HotelGuestsAdults = (props: props) => {
  const { adults, incrementAdults, decrementAdults } = props;

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="mb-0">Adults: </h5>

      <div className="numberInput">
        <button
          type="button"
          className="minus"
          disabled={adults == minAdults}
          onClick={decrementAdults}
        >
          <LuMinus />
        </button>
        <span className="number">{adults}</span>
        <button
          type="button"
          className="minus"
          disabled={adults == maxAdults}
          onClick={incrementAdults}
        >
          <LuPlus />
        </button>
      </div>
    </div>
  );
};

export default HotelGuestsAdults;
