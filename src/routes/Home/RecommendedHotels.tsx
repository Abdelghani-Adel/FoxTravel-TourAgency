"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import hotels from "@/public/data/RecommendedHotelsCards.json";
import SwiperScroll from "../../components/ui/SwiperScroll";
import HotelCard from "../../components/Cards/HotelCard";

const RecommendedHotels = () => {
  return (
    <div className="recommendedHotels section mb-5">
      <div className="recommendedHotels_header">
        <div>
          <h3 className="fw-bold">Recommended Hotels</h3>
          <p className="mb-0">These hotels have a lot to offer</p>
        </div>

        <div>
          <button className="foxBtn secondBtn">
            View All Hotels <GoArrowUpRight className="fs-3" />
          </button>
        </div>
      </div>

      <SwiperScroll>
        {hotels.map((hotel) => (
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
        ))}
      </SwiperScroll>
    </div>
  );
};

export default RecommendedHotels;
