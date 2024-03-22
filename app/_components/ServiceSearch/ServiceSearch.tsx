import React from "react";
import CategorySelectors from "./CategorySelectors/CategorySelectors";
import HotelFormWrapper from "./HotelForm/HotelFormWrapper";
import FlightFormWrapper from "./FlightForm/FlightFormWrapper";
import TransportFormWrapper from "./TransportForm/TransportFormWrapper";

const ServiceSearch = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CategorySelectors />
      <HotelFormWrapper />
      <FlightFormWrapper />
      <TransportFormWrapper />
    </div>
  );
};

export default ServiceSearch;
