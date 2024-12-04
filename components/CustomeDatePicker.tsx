import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles

type IProps = {
  onChange: (newDate: string) => void;
  datepickerProps?: Omit<React.ComponentProps<typeof DatePicker>, "onChange">;
};

const CustomeDatePicker = ({ onChange, datepickerProps }: IProps) => {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (selectedDate: Date | null) => {
    setDate(selectedDate);
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);
      onChange(formattedDate);
    }
  };

  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="relative">
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        customInput={<CustomInput value={date ? formatDate(date) : ""} />}
        {...datepickerProps} // Spread additional props
      />
    </div>
  );
};

const CustomInput = React.forwardRef<
  HTMLButtonElement,
  React.HTMLProps<HTMLButtonElement> & { value: string }
>(({ value, onClick }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    className="w-full text-left border p-2 rounded-md flex flex-col"
  >
    <span className="text-sm font-medium">Date</span>
    <span className="font-light">{value || "Select a date"}</span>
  </button>
));

// Required to avoid warning with React.forwardRef
CustomInput.displayName = "CustomInput";

export default CustomeDatePicker;
