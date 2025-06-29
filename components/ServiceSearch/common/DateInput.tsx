import React from "react";
import ReactDatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";

const DateInput = (props: IProps) => {
  const { placeholder, title, value, onChange, minDate } = props;

  console.log(minDate);

  return (
    <div className="ss_formInput">
      <h6 className="ss_formInputTitle">{title}</h6>

      <div className="d-flex align-items-center gap-2">
        <SlCalender />
        <ReactDatePicker
          selected={value}
          onChange={onChange}
          startDate={value}
          selectsStart
          className="ss_formInputField"
          placeholderText={placeholder}
          minDate={minDate}
        />
      </div>
    </div>
  );
};

export default DateInput;

type IProps = {
  title: string;
  placeholder: string;
  value: Date | null;
  onChange: (newDate: Date | null) => void;
  minDate?: Date | null;
};
