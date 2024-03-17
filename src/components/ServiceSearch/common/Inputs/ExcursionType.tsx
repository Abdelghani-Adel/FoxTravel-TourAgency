import React from "react";
import InputWrapper from "../InputWrapper";
import { GiCheckeredFlag, GiDetour } from "react-icons/gi";
import ArrowIcon from "../icons/ArrowIcon";
import DropdownSelectWrapper from "@/src/components/ui/DropdownSelect/DropdownSelectWrapper";
import DropdownSelectToggler from "@/src/components/ui/DropdownSelect/DropdownSelectToggler";
import DropdownSelectOptions from "@/src/components/ui/DropdownSelect/DropdownSelectOptions";

const options = [
  {
    value: "12 Hours",
    label: "12 Hours",
  },
  {
    value: "6 Hours",
    label: "6 Hours",
  },
  {
    value: "4 Hours",
    label: "4 Hours",
  },
];

const ExcursionType = () => {
  const [excursionType, setExcursionType] = React.useState<string>("12 Hours");

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setExcursionType(value);
  };

  return (
    <InputWrapper title="Excursion Type">
      <GiCheckeredFlag />

      <DropdownSelectWrapper>
        <DropdownSelectToggler className="ss_optionsListBtn">
          <span className="me-4">{excursionType}</span> <ArrowIcon />
        </DropdownSelectToggler>

        <DropdownSelectOptions options={options} onOptionClick={clickHandler} />
      </DropdownSelectWrapper>
    </InputWrapper>
  );
};

export default ExcursionType;
