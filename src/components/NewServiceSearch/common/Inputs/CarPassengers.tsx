import React from "react";
import InputWrapper from "../InputWrapper";
import Image from "next/image";
import PersonIcon from "../icons/PersonIcon";
import ArrowIcon from "../icons/ArrowIcon";
import DropdownSelectWrapper from "@/src/components/ui/DropdownSelect/DropdownSelectWrapper";
import DropdownSelectToggler from "@/src/components/ui/DropdownSelect/DropdownSelectToggler";
import DropdownSelectOptions from "@/src/components/ui/DropdownSelect/DropdownSelectOptions";

const options = [
  {
    value: "1 Passenger",
    label: "1 Passenger",
  },
  {
    value: "2 Passengers",
    label: "2 Passengers",
  },
  {
    value: "3 Passengers",
    label: "3 Passengers",
  },
  {
    value: "4 Passengers",
    label: "4 Passengers",
  },
  {
    value: "5 Passengers",
    label: "5 Passengers",
  },
];

const CarPassengersDropdown = () => {
  const [passengers, setPassengers] = React.useState<string>("1 Passenger");

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setPassengers(value);
  };

  return (
    <InputWrapper title="Passengers">
      <PersonIcon />

      <DropdownSelectWrapper>
        <DropdownSelectToggler className="ss_optionsListBtn">
          <span className="me-4">{passengers}</span> <ArrowIcon />
        </DropdownSelectToggler>

        <DropdownSelectOptions onOptionClick={clickHandler} options={options} />
      </DropdownSelectWrapper>
    </InputWrapper>
  );
};

export default CarPassengersDropdown;
