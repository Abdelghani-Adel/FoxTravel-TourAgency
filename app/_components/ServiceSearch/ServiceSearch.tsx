"use client";
import React from "react";
import SearchTypeSelectors from "./SearchTypeSelectors";
import { useAppSelector } from "@/app/_redux/store";
import HotelSearch from "./HotelSearch/HotelSearch";
import FlightSearch from "./FlightSearch/FlightSearch";
import TransportSearch from "./TransportSearch/TransportSearch";

const ServiceSearch = () => {
  const searchType = useAppSelector((state) => state.searchConfig.searchType);

  return (
    <div className="serviceSearch">
      <SearchTypeSelectors />

      {searchType === "Hotel" && <HotelSearch />}
      {searchType === "Flight" && <FlightSearch />}
      {searchType === "Transport" && <TransportSearch />}
    </div>
  );
};

export default ServiceSearch;
