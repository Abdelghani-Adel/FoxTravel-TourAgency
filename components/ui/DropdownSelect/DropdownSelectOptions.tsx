import React from "react";
import { v4 } from "uuid";

type option = {
  value: string;
  label: string;
};

type Props = {
  className?: string;
  options: option[];
  onOptionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const DropdownSelectOptions = (props: Props) => {
  const { className, options, onOptionClick } = props;

  return (
    <ul className={`dropdown-menu ${className}`}>
      {options.map((option) => (
        <li key={v4()}>
          <button
            className="dropdown-item fw-light"
            value={option.value}
            type="button"
            onClick={onOptionClick}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownSelectOptions;
