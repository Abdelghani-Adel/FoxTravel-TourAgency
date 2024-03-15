import React, { useEffect, useState } from "react";
import Image from "next/image";
import calender from "../icons/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputWrapper from "../InputWrapper";
import CalenderIcon from "../icons/CalenderIcon";

const DateTimeInput = (props: Props) => {
  const { placeholder, title } = props;
  const [startDate, setStartDate] = useState<Date | null>();

  const onChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <InputWrapper title={title}>
      <CalenderIcon />
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          selectsStart
          placeholderText={placeholder}
          className="serviceSearch_dateInput"
        />
      </div>
    </InputWrapper>
  );
};

export default DateTimeInput;

type Props = {
  title: string;
  placeholder: string;
};
