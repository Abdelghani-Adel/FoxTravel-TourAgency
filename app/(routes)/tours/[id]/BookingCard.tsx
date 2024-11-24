"use client";
import React, { useState, useRef, useEffect } from "react";
import { TravelerSelector } from "./TravelerSelector";
import { Recommendation } from "./Recommendation";
import Datee from "./DatePicker";

const BookingCard = ({ tourDetails }: { tourDetails: ITourDetails }) => {
  const [dateRange, setDateRange] = useState<string>(
    "November 05 ~ December 14"
  );
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  const [rooms, setRooms] = useState<number>(1);
  const [isTravelerSelectorVisible, setIsTravelerSelectorVisible] =
    useState<boolean>(false);

  // Create a reference for the traveler selector container
  const travelerSelectorRef = useRef<HTMLDivElement>(null);

  const toggleTravelerSelector = () => {
    setIsTravelerSelectorVisible(!isTravelerSelectorVisible);
  };

  // Close the traveler selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        travelerSelectorRef.current &&
        !travelerSelectorRef.current.contains(event.target as Node)
      ) {
        setIsTravelerSelectorVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border p-4 rounded-lg shadow-lg max-w-md">
      <h2 className="text-lg font-semibold">
        From <span className="text-xl font-bold">{tourDetails.price}</span>
      </h2>
      <div className="my-4">
        <Datee />
      </div>

      <div className="my-4 relative" ref={travelerSelectorRef}>
        <button
          onClick={toggleTravelerSelector}
          className="w-full text-left border p-2 rounded-md flex flex-col"
        >
          <span>Number of travelers:</span>
          <span className="font-light">
            {adults} adults - {children} children
          </span>
        </button>
        {isTravelerSelectorVisible && (
          <div className="absolute p-2 bg-white w-full shadow-md rounded-md">
            <TravelerSelector
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
              rooms={rooms}
              setRooms={setRooms}
            />
          </div>
        )}
      </div>
      <button className="bg-blue-600 text-white w-full py-2 rounded-md mt-4">
        Book Now
      </button>

      {tourDetails.recommendation && (
        <div className="flex items-center mt-4">
          <span className="text-green-600">&#10084;</span>
          <p className="ml-2 text-sm">{tourDetails.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
