import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const DateStartInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const [startDateLabel, setStartDateLabel] = useState("Check in");

  const updateDate = (newDate: Date | null) => {
    dispatch(searchActions.updateStartDate(newDate));
  };

  useEffect(() => {
    switch (searchState.category) {
      case "Hotel":
        setStartDateLabel("Check in");
        break;
      case "Car Rental":
        setStartDateLabel("Start Date");
        break;
      case "Flights":
        setStartDateLabel("Departure Date");
        break;
      default:
        setStartDateLabel("Date");
    }
  }, [searchState.category]);

  return (
    <div className="guestInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">{startDateLabel}</h5>
      <DatePicker
        onChange={(date) => updateDate(date)}
        selected={searchState.startDate}
        dateFormat="dd - MM - yy"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default DateStartInput;
