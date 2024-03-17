import React, { useState } from "react";
import Image from "next/image";
import DropdownSelectWrapper from "@/src/components/ui/DropdownSelect/DropdownSelectWrapper";
import DropdownSelectToggler from "@/src/components/ui/DropdownSelect/DropdownSelectToggler";
import DropdownSelectOptions from "@/src/components/ui/DropdownSelect/DropdownSelectOptions";
import ArrowIcon from "../icons/ArrowIcon";

type props = {
  value: number;
  id: number;
  onChange: (newAge: number, index: number) => void;
};

const options = [
  {
    value: "1",
    label: "1 year old",
  },
  {
    value: "2",
    label: "2 years old",
  },
  {
    value: "3",
    label: "3 years old",
  },
  {
    value: "4",
    label: "4 years old",
  },
  {
    value: "5",
    label: "5 years old",
  },
  {
    value: "6",
    label: "6 years old",
  },
  {
    value: "7",
    label: "7 years old",
  },
  {
    value: "8",
    label: "8 years old",
  },
  {
    value: "9",
    label: "9 years old",
  },
  {
    value: "10",
    label: "10 years old",
  },
];

const ChildAge = (props: props) => {
  const { value, onChange, id } = props;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    const valueINT: number = parseInt(value);
    onChange(valueINT, id);
  };

  const format = () => {
    if (value == 1) {
      return `${value} year old`;
    } else {
      return `${value} years old`;
    }
  };

  return (
    <DropdownSelectWrapper>
      <DropdownSelectToggler className="ss_childAgeInput">
        <span>{format()}</span> <ArrowIcon />
      </DropdownSelectToggler>

      <DropdownSelectOptions onOptionClick={clickHandler} options={options} />
    </DropdownSelectWrapper>
  );
};

export default ChildAge;
