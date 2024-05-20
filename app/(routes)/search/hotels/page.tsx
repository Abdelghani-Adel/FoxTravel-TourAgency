"use client";
import React, { useEffect, useState } from "react";
import Filter from "@/app/_components/Filter/Filter";
import hotels from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/app/_components/cards/HotelCard";
import { v4 } from "uuid";
import HotelSearch from "@/app/_components/ServiceSearch/HotelSearch/HotelSearch";
import { useAppSelector } from "@/app/_redux/store";

const Page = () => {
  const hotelSearchState = useAppSelector((state) => state.hotelSearch);
  const [searchResult, setSearchResult] = useState();

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
      const response = await fetch("/api/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqBody),
      });

      // Handle the response;
      if (response.ok) {
        const data = await response.json();
        setSearchResult(data);
      } else {
        const error = await response.json();
        console.log(error);
      }
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
            {hotels.map((hotel) => (
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
