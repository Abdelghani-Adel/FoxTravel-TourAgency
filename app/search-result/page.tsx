"use client";
import useSearchData from "@/src/components/ServiceSearch/useSearchData";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { useAppSelector } from "@/src/redux/store";
import FlightSearchResult from "@/src/routes/search/FlightSearchResult";
import HotelSearchResult from "@/src/routes/search/HotelSearchResult";
import TransportSearchResult from "@/src/routes/search/TransportSearchResult";

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
