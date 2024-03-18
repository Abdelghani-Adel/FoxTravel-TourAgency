"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import hotels from "@/public/data/Cards_Hotels.json";
import SwiperScroll from "../../_components/ui/SwiperScroll";
import HotelCard from "@/app/_components/cards/HotelCard";
import Link from "next/link";
import { useAppDispatch } from "@/app/_redux/store";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";

const Hotels = () => {
  const dispatch = useAppDispatch();
  const showLoadingLayer = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <div className="recommendedHotels section mb-5">
      <div className="recommendedHotels_header">
        <div>
          <h3 className="fw-bold">Recommended Hotels</h3>
          <p className="mb-0">These hotels have a lot to offer</p>
        </div>

        <div>
          <button className="foxBtn secondBtn" onClick={showLoadingLayer}>
            <Link href="/hotels">
              View All Hotels <GoArrowUpRight className="fs-3" />
            </Link>
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

export default Hotels;
