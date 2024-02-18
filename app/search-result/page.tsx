"use client";
import Filter from "@/src/components/Filter/Filter";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import { useAppSelector } from "@/src/redux/store";
import hotels from "@/public/data/Cards_Hotels.json";
import React from "react";
import HotelCard from "@/src/components/Cards/HotelCard";
import { v4 } from "uuid";

const Page = () => {
  useHideLoadingLayer();
  const searchState = useAppSelector((state) => state.search);

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          <div className="row gx-3">
            {hotels.map((hotel) => (
              <div className="col-4" key={v4()}>
                <HotelCard
                  key={hotel.id}
                  id={hotel.id}
                  title={hotel.title}
                  image={hotel.image}
                  address={hotel.address}
                  rating={hotel.rating}
                  reviewers={hotel.reviews}
                  price={hotel.price}
                  currency={hotel.currency}
                  badges={hotel.badges}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
