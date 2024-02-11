export default function cleanRequestBody(reqBody: IServiceSearchReqBody) {
  switch (reqBody.category) {
    case "Hotel":
      return getHotelRequestBody(reqBody);
    case "Car Hire":
      return getCarHireRequestBody(reqBody);
    case "Car Rental":
      return getCarRentalRequestBody(reqBody);
    case "Activity":
      return getActivityRequestBody(reqBody);
    case "Flights":
      return getFlightsRequestBody(reqBody);
    default:
      throw new Error("Invalid category");
  }
}

function getHotelRequestBody(reqBody: IServiceSearchReqBody) {
  const requestBody: IServiceSearchHotelReqBody = {
    category: "Hotel",
    city: reqBody.city,
    checkIn: reqBody.checkIn,
    checkOut: reqBody.checkOut,
    guests: reqBody.guests,
  };

  return requestBody;
}

function getCarHireRequestBody(reqBody: IServiceSearchReqBody) {
  const requestBody: IServiceSearchCarHireReqBody = {
    city: reqBody.city,
    date: reqBody.startDate,
    riders: reqBody.carRiders,
  };

  return requestBody;
}

function getCarRentalRequestBody(reqBody: IServiceSearchReqBody) {
  const requestBody: IServiceSearchCarRentalReqBody = {
    city: reqBody.city,
    startDate: reqBody.startDate,
    endDate: reqBody.endDate,
    carModel: reqBody.carModel,
  };

  return requestBody;
}

function getActivityRequestBody(reqBody: IServiceSearchReqBody) {
  const requestBody: IServiceSearchActivityReqBody = {
    city: reqBody.city,
    date: reqBody.startDate,
    activity: reqBody.activityType,
  };

  return requestBody;
}

function getFlightsRequestBody(reqBody: IServiceSearchReqBody) {
  const requestBody: IServiceSearchFlightReqBody = {
    departureCity: reqBody.city,
    destinationCity: "",
    departureDate: reqBody.startDate,
    returnDate: reqBody.endDate,
  };

  return requestBody;
}
