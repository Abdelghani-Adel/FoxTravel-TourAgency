import { useState } from "react";
import DatePicker from "react-datepicker";
import InputWrapper from "../InputWrapper";
import CalenderIcon from "../icons/CalenderIcon";

const DateInput = (props: Props) => {
  const { placeholder, title, defaultValue, onChange } = props;

  return (
    <InputWrapper title={title}>
      <CalenderIcon />
      <div>
        <DatePicker
          selected={defaultValue}
          onChange={onChange}
          startDate={defaultValue}
          selectsStart
          placeholderText={placeholder}
          className="ss_inputField"
        />
      </div>
    </InputWrapper>
  );
};

export default DateInput;

type Props = {
  title: string;
  placeholder: string;
  onChange: (date: Date | null) => void;
  defaultValue: Date | null;
};
