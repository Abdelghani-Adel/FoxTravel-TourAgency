"use client";
import React, { useEffect, useState } from "react";
import Filter from "@/app/_components/Filter/Filter";
import HotelCard from "@/app/_components/cards/HotelCard";
import { v4 } from "uuid";
import HotelSearch from "@/app/_components/ServiceSearch/HotelSearch/HotelSearch";
import { useAppSelector } from "@/app/_redux/store";
import { searchHotels } from "@/app/_services/searchServices";

const Page = () => {
  const hotelSearchState = useAppSelector((state) => state.hotelSearch);
  const [searchResult, setSearchResult] = useState<any[]>();

  useEffect(() => {
    const fetchData = async () => {
      // Prepare the request body;
      const reqBody = {
        city: hotelSearchState.city,
        startDate: hotelSearchState.startDate,
        endDate: hotelSearchState.endDate,
        adults: hotelSearchState.adults,
        children: hotelSearchState.childs,
      };

      // Send the request to the server;
      const { data, error } = await searchHotels();

      setSearchResult(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <div className="bgThird p-3 rounded-4 column">
            <HotelSearch />
          </div>
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          <div className="row g-3">
            {searchResult?.map((hotel) => (
              <div className="col-12 col-md-4" key={v4()}>
                <HotelCard key={hotel.id} data={hotel} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
