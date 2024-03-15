import React from "react";
import CategorySelectors from "./CategorySelectors/CategorySelectors";
import HotelForm from "./HotelForm/HotelForm";
import FlightForm from "./FlightForm/FlightForm";
import TransportForm from "./TransportForm/TransportForm";

const ServiceSearchForm = () => {
  return (
    <div className="d-flex flex-column gap-3">
      <CategorySelectors />
      <HotelForm />
      <FlightForm />
      <TransportForm />
    </div>
  );
};

export default ServiceSearchForm;
