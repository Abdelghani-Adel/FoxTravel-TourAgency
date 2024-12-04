import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { v4 } from "uuid";

type Props = {
  value: number;
  id: number;
  onChange?: (num: number, id: number) => void;
};

const ChildAgeInput = (props: Props) => {
  const { value, id, onChange } = props;
  return (
    <div className="dropdown">
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
        className="flex items-center space-x-2 border border-gray-700 w-max p-2"
      >
        <span>{formatOption(value)}</span> <IoIosArrowDown />
      </button>

      <div className={`dropdown-menu`}>
        {options.map((option) => (
          <li key={v4()}>
            <button
              className="dropdown-item fw-light"
              value={option.value}
              type="button"
              onClick={() => {
                onChange && onChange(option.value, id);
              }}
            >
              {option.label}
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

const formatOption = (value: number) => {
  if (value == 1) {
    return `${value} year old`;
  } else {
    return `${value} years old`;
  }
};

const options = [
  {
    value: 1,
    label: "1 year old",
  },
  {
    value: 2,
    label: "2 years old",
  },
  {
    value: 3,
    label: "3 years old",
  },
  {
    value: 4,
    label: "4 years old",
  },
  {
    value: 5,
    label: "5 years old",
  },
  {
    value: 6,
    label: "6 years old",
  },
  {
    value: 7,
    label: "7 years old",
  },
  {
    value: 8,
    label: "8 years old",
  },
  {
    value: 9,
    label: "9 years old",
  },
  {
    value: 10,
    label: "10 years old",
  },
];

export default ChildAgeInput;
