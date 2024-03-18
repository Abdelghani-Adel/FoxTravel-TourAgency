"use client";
import useSearchData from "@/app/_components/ServiceSearch/useSearchData";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import { useAppSelector } from "@/app/_redux/store";
import FlightSearchResult from "./_flightSearchResult";
import HotelSearchResult from "./_hotelSearchResult";
import TransportSearchResult from "./_transportSearchResult";

const Page = () => {
  const searchState = useAppSelector((state) => state.serviceSearch);
  const searchData = useSearchData();
  useHideLoadingLayer();

  return (
    <>
      {searchState.category === "Hotel" && <HotelSearchResult />}
      {searchState.category === "Flight" && <FlightSearchResult />}
      {searchState.category === "Transport" && <TransportSearchResult />}
    </>
  );
};

export default Page;
