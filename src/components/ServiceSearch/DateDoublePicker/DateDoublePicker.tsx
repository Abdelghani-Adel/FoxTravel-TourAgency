import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DoublePicer.module.css";
import Image from "next/image";
import calender from "./calendar.png";

const DateDoublePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [displayedString, setDisplayedString] = useState("Check in Date - Check out Date");

  const onChange = (dates: [Date, null] | [Date, Date] | [null, Date] | [null, null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (startDate && !endDate) {
      setDisplayedString(`${startDate.toLocaleDateString()} - Check out Date`);
    } else if (startDate && endDate) {
      setDisplayedString(`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`);
    } else {
      setDisplayedString("Check in Date - Check out Date");
    }
  }, [startDate, endDate]);

  return (
    <div className={`${styles.datePicker} flex-grow-1`}>
      <Image src={calender} height={20} width={20} alt="calender" />
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        selectsStart
        selectsRange
        className={styles.datePicker_input}
        value={displayedString}
      />
    </div>
  );
};

export default DateDoublePicker;
