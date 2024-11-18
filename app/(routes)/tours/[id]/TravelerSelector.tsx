import React from "react";

interface TravelerSelectorProps {
  adults: number;
  setAdults: (value: number) => void;
  children: number;
  setChildren: (value: number) => void;
  rooms: number;
  setRooms: (value: number) => void;
}

export const TravelerSelector: React.FC<TravelerSelectorProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
}) => {
  return (
    <div>
      <div className="border p-2 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span>Adults</span>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border"
              onClick={() => setAdults(Math.max(1, adults - 1))}
            >
              -
            </button>
            <span>{adults}</span>
            <button
              className="px-3 py-1 border"
              onClick={() => setAdults(adults + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span>Children</span>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border"
              onClick={() => setChildren(Math.max(0, children - 1))}
            >
              -
            </button>
            <span>{children}</span>
            <button
              className="px-3 py-1 border"
              onClick={() => setChildren(children + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span>Rooms</span>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 border"
              onClick={() => setRooms(Math.max(1, rooms - 1))}
            >
              -
            </button>
            <span>{rooms}</span>
            <button
              className="px-3 py-1 border"
              onClick={() => setRooms(rooms + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
