"use client";
import { ChangeEvent, useState } from "react";
import MultipleFlights from "./MultipleFlights";
import MyModal from "../../../../app/_components/ui/MyModal";
import RadioOptions from "../common/Inputs/RadioOptions";
import { useAppDispatch, useAppSelector } from "@/app/_redux/store";
import { serviceSearchActions } from "@/app/_redux/slices/serviceSearch";

const optionsList = [
  {
    value: "oneway",
    label: "Oneway",
  },
  {
    value: "round",
    label: "Round",
  },
];

const FlightTypeSelectors = () => {
  const dispatch = useAppDispatch();
  const [isMultipleFormShown, setIsMultipleFormShown] = useState(false);
  const reduxState = useAppSelector((state) => state.serviceSearch.flight);
  const flightType = reduxState.flightType;

  const onFlightTypeChange = (flightType: string) => {
    if (flightType === "oneway" || flightType === "round" || flightType === "multiple") {
      dispatch(serviceSearchActions.updateFlightForm({ ...reduxState, flightType: flightType }));
    }
  };

  const showMultipleForm = () => {
    dispatch(serviceSearchActions.updateFlightForm({ ...reduxState, flightType: "multiple" }));
    setIsMultipleFormShown(true);
  };

  const hideMultipleForm = () => {
    dispatch(serviceSearchActions.updateFlightForm({ ...reduxState, flightType: "oneway" }));
    setIsMultipleFormShown(false);
  };

  return (
    <div className="d-flex gap-4 mb-2 justify-content-center align-items-center fw-normal">
      <RadioOptions
        selectedType={flightType}
        fieldName="searchType"
        options={optionsList}
        onChange={onFlightTypeChange}
      />

      <button className="foxBtn secondBtn smBtn" onClick={showMultipleForm}>
        Multiple
      </button>

      <MyModal show={isMultipleFormShown} onClose={hideMultipleForm}>
        <MultipleFlights />
      </MyModal>
    </div>
  );
};

export default FlightTypeSelectors;
