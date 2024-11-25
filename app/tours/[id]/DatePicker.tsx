import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addMonths } from "date-fns";

const Datee: React.FC = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  // Custom input component to match the image style
  const CustomInput = React.forwardRef<
    HTMLButtonElement,
    React.HTMLProps<HTMLButtonElement>
  >(({ value, onClick }, ref) => (
    <button
      onClick={onClick}
      ref={ref}
      className="w-full text-left border p-2 rounded-md flex flex-col"
    >
      <span className="text-sm font-medium">Date</span>
      <span className="font-light">{value || "Select a date range"}</span>
    </button>
  ));

  // Required to avoid warning with React.forwardRef
  CustomInput.displayName = "CustomInput";

  return (
    <div className="relative">
      <DatePicker
        selected={startDate}
        onChange={(update) => {
          setDateRange(update as [Date | null, Date | null]);
        }}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true}
        isClearable={true}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 5)}
        customInput={<CustomInput />}
      />
    </div>
  );
};

export default Datee;