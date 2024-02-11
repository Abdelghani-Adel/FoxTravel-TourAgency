import React, { useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

type props = {
  rooms: number;
  incrementRooms: () => void;
  decrementRooms: () => void;
};

const minRooms = 1;
const maxRooms = 3;

const HotelGuestsRooms = (props: props) => {
  const { rooms, incrementRooms, decrementRooms } = props;

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="mb-0">Rooms: </h5>

      <div className="numberInput">
        <button
          type="button"
          className="minus"
          disabled={rooms == minRooms}
          onClick={decrementRooms}
        >
          <LuMinus />
        </button>
        <span className="number">{rooms}</span>

        <button
          type="button"
          className="minus"
          disabled={rooms == maxRooms}
          onClick={incrementRooms}
        >
          <LuPlus />
        </button>
      </div>
    </div>
  );
};

export default HotelGuestsRooms;
