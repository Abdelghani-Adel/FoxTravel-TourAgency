"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import { useAppSelector } from "@/app/_redux/store";
import FlightSearchResult from "./_flightSearchResult";
import HotelSearchResult from "./_hotelSearchResult";
import TransportSearchResult from "./_transportSearchResult";

const Page = () => {
  const category = useAppSelector((state) => state.searchConfig.searchType);
  useHideLoadingLayer();

  return (
    <>
      {category === "Hotel" && <HotelSearchResult />}
      {category === "Flight" && <FlightSearchResult />}
      {category === "Transport" && <TransportSearchResult />}
    </>
  );
};

export default Page;
