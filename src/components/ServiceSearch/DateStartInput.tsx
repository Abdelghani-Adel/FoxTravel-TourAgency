import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

type props = {
  requestBody: IServiceSearchReqBody;
  updateRequestBody: IServiceSearchUpdateReqBody;
};

const DateStartInput = (props: props) => {
  const { requestBody, updateRequestBody } = props;
  const [startDateLabel, setStartDateLabel] = useState("Check in");

  useEffect(() => {
    switch (requestBody.category) {
      case "Hotel":
        setStartDateLabel("Check in");
        break;
      case "Car Rental":
        setStartDateLabel("Start Date");
        break;
      case "Flights":
        setStartDateLabel("Departure Date");
        break;
      default:
        setStartDateLabel("Date");
    }
  }, [requestBody.category]);

  return (
    <div className="guestInput serviceSearch_inputController">
      <h5 className="searchService_inputTitle">{startDateLabel}</h5>
      <DatePicker
        onChange={(date) => updateRequestBody("startDate", date)}
        selected={requestBody.startDate}
        dateFormat="dd - MM - yy"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default DateStartInput;
