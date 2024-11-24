import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { flightSearchActions } from "@/redux/slices/flightSearchSlice";
import RadioOptions from "../common/RadioOptions";

const optionsList = [
  {
    value: "oneway",
    label: "One way",
  },
  {
    value: "round",
    label: "Round",
  },
  {
    value: "multiple",
    label: "Multiple",
  },
];

const FlightTypeSelector = () => {
  const dispatch = useAppDispatch();
  const flightType = useAppSelector((state) => state.flightSearch.type);

  const onFlightTypeChange = (flightType: IFlightType) => {
    dispatch(flightSearchActions.setFlightType(flightType));
  };

  return (
    <div>
      <RadioOptions
        selectedType={flightType}
        fieldName="searchType"
        options={optionsList}
        onChange={onFlightTypeChange}
      />
    </div>
  );
};

export default FlightTypeSelector;
