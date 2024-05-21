"use client";
import { useAppSelector } from "@/app/_redux/store";
import FlightSearchResult from "./_flightSearchResult";
import HotelSearchResult from "./_hotelSearchResult";
import TransportSearchResult from "./_transportSearchResult";

const Page = () => {
  const category = useAppSelector((state) => state.searchConfig.searchType);

  return (
    <>
      {category === "Hotel" && <HotelSearchResult />}
      {category === "Flight" && <FlightSearchResult />}
      {category === "Transport" && <TransportSearchResult />}
    </>
  );
};

export default Page;
