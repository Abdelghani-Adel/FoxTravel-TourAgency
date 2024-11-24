import React from "react";
import { FaCity } from "react-icons/fa";

const LocationInput = (props: Iprops) => {
  const { title, placeholder, value, onChange } = props;

  return (
    <div className="ss_formInput">
      <h6 className="ss_formInputTitle">{title}</h6>

      <div className="d-flex align-items-center gap-2">
        <FaCity />
        <input
          className="ss_formInputField"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default LocationInput;

type Iprops = {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
