import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const categoriesWith2Dates: IServiceSearchCategory[] = ["Hotel", "Car Rental", "Flights"];

const DateEndInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;
  const [endDateLabel, setEndDateLabel] = useState("Check out");

  useEffect(() => {
    switch (requestBody.category) {
      case "Hotel":
        setEndDateLabel("Check out");
        break;
      case "Car Rental":
        setEndDateLabel("End Date");
        break;
      case "Flights":
        setEndDateLabel("Return Date");
        break;
      default:
        setEndDateLabel("End Date");
    }
  }, [requestBody.category]);

  if (!categoriesWith2Dates.includes(requestBody.category)) {
    return null;
  }

  return (
    <div className="guestInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">{endDateLabel}</h5>
      <DatePicker
        onChange={(date) => updateRequestBody("endDate", date)}
        selected={requestBody.endDate}
        dateFormat="dd - MM - yy"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default DateEndInput;
