"use client";
import { ChangeEvent, useState } from "react";
import MyModal from "../../../../app/_components/ui/MyModal";
import MultipleTransfers from "./MultipleTransfers";
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
    value: "return",
    label: "Return",
  },
  {
    value: "excursion",
    label: "Excursion",
  },
];

const TransportTypeSelectors = (props: props) => {
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
        Multiple
      </button>

      <MyModal show={isShown} onClose={() => setIsShown(false)}>
        <MultipleTransfers />
      </MyModal>
    </div>
  );
};

export default TransportTypeSelectors;
