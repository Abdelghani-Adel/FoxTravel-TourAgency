import React from "react";
import CategorySelectors from "./CategorySelectors/CategorySelectors";
import HotelFormWrapper from "./HotelForm/HotelFormWrapper";
import FlightForm from "./FlightForm/FlightForm";
import TransportFormWrapper from "./TransportForm/TransportFormWrapper";

const ServiceSearch = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CategorySelectors />
      <HotelFormWrapper />
      <FlightForm />
      <TransportFormWrapper />
    </div>
  );
};

export default ServiceSearch;
