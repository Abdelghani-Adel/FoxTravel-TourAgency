import { searchActions } from "@/src/redux/slices/searchSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/store";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

const categoriesWith2Dates: ISearchCategory[] = ["Hotel", "Car Rental", "Flights"];

const DateEndInput = () => {
  const dispatch = useAppDispatch();
  const searchState = useAppSelector((state) => state.search);
  const [endDateLabel, setEndDateLabel] = useState("Check out");

  const updateDate = (newDate: Date | null) => {
    dispatch(searchActions.updateEndDate(newDate));
  };

  useEffect(() => {
    switch (searchState.category) {
      case "Hotel":
        setEndDateLabel("Check out");
        break;
      case "Car Rental":
        setEndDateLabel("End Date");
        break;
      case "Flights":
        setEndDateLabel("Return Date");
        break;
      default:
        setEndDateLabel("End Date");
    }
  }, [searchState.category]);

  if (!categoriesWith2Dates.includes(searchState.category)) {
    return null;
  }

  return (
    <div className="guestInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">{endDateLabel}</h5>
      <DatePicker
        onChange={(date) => updateDate(date)}
        selected={searchState.endDate}
        dateFormat="dd - MM - yy"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default DateEndInput;
