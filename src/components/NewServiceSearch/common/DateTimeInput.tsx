import React, { useEffect, useState } from "react";
import Image from "next/image";
import calender from "./icons/calendar.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ServiceSearchController from "./ServiceSearchController";

const DateTimeInput = (props: Props) => {
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
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          selectsStart
          placeholderText={placeholder}
          className="serviceSearch_dateInput"
        />
      </div>
    </ServiceSearchController>
  );
};

export default DateTimeInput;

type Props = {
  title: string;
  placeholder: string;
};
