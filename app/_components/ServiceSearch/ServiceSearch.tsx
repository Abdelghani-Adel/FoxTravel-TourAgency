"use client";
import React from "react";
import CategorySelectors from "./CategorySelectors/CategorySelectors";
import HotelFormWrapper from "./HotelForm/HotelFormWrapper";
import FlightFormWrapper from "./FlightForm/FlightFormWrapper";
import TransportFormWrapper from "./TransportForm/TransportFormWrapper";

const ServiceSearch = () => {
  return (
    <>
      <CategorySelectors />
      <HotelFormWrapper />
      <FlightFormWrapper />
      <TransportFormWrapper />
    </>
  );
};

export default ServiceSearch;
