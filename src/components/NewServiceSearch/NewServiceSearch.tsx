import React from "react";
import CategorySelectors from "./CategorySelectors/CategorySelectors";
import HotelForm from "./HotelForm/HotelForm";
import FlightForm from "./FlightForm/FlightForm";
import TransportForm from "./TransportForm/TransportForm";

const NewServiceSearch = () => {
  return (
    <div className="serviceSearch">
      <CategorySelectors />
      <HotelForm />
      <FlightForm />
      <TransportForm />
    </div>
  );
};

export default NewServiceSearch;
