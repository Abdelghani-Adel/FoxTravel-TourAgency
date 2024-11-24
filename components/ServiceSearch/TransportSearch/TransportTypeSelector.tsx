import { useAppDispatch, useAppSelector } from "@/redux/store";
import React from "react";
import RadioOptions from "../common/RadioOptions";
import { transportSearchActions } from "@/redux/slices/transportSearchSlice";

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
    value: "excursion",
    label: "Excurions",
  },
  {
    value: "multiple",
    label: "Multiple",
  },
];

const TransportTypeSelector = () => {
  const dispatch = useAppDispatch();
  const transportType = useAppSelector((state) => state.transportSearch.type);

  const onTransportTypeChange = (flightType: ITransportType) => {
    dispatch(transportSearchActions.setTransportType(flightType));
  };

  return (
    <div className="text-center">
      <RadioOptions
        selectedType={transportType}
        fieldName="searchType"
        options={optionsList}
        onChange={onTransportTypeChange}
      />
    </div>
  );
};

export default TransportTypeSelector;
