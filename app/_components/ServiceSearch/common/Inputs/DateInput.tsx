import { useState } from "react";
import DatePicker from "react-datepicker";
import InputWrapper from "../InputWrapper";
import CalenderIcon from "../icons/CalenderIcon";

const DateInput = (props: Props) => {
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
};
