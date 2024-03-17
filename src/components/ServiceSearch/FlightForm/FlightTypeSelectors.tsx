"use client";
import { ChangeEvent, useState } from "react";
import MultipleFlights from "./MultipleFlights";
import MyModal from "../../ui/MyModal";
import RadioOptions from "../common/Inputs/RadioOptions";

type props = {
  selectedType: string;
  onChange: (tripType: string) => void;
};

const optionsList = [
  {
    value: "oneway",
    label: "One Way",
  },
  {
    value: "round",
    label: "Round",
  },
];

const FlightTypeSelectors = (props: props) => {
  const [isShown, setIsShown] = useState(false);
  const { onChange } = props;

  return (
    <div className="d-flex gap-4 mb-2 justify-content-center align-items-center fw-normal">
      <RadioOptions
        selectedType={props.selectedType}
        fieldName="searchType"
        options={optionsList}
        onChange={onChange}
      />

      <button className="foxBtn secondBtn smBtn" onClick={() => setIsShown(true)}>
        Multiple Destinations
      </button>

      <MyModal show={isShown} onClose={() => setIsShown(false)}>
        <MultipleFlights />
      </MyModal>
    </div>
  );
};

export default FlightTypeSelectors;
