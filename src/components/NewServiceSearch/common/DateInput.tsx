import React, { useEffect, useState } from "react";
import Image from "next/image";
import calender from "./icons/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ServiceSearchController from "./ServiceSearchController";

const DateInput = (props: Props) => {
  const { placeholder, title } = props;
  const [startDate, setStartDate] = useState<Date | null>();

  const onChange = (date: Date | null) => {
    setStartDate(date);
  };

  return (
    <ServiceSearchController title={title}>
      <Image src={calender} height={15} width={15} alt="calender" />
      <div>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          selectsStart
          placeholderText={placeholder}
          className="serviceSearch_dateInput"
        />
      </div>
    </ServiceSearchController>
  );
};

export default DateInput;

type Props = {
  title: string;
  placeholder: string;
};
