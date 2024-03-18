"use client";
import React from "react";
import toursList from "@/public/data/Cards_Tours.json";
import TourCard from "@/app/_components/cards/TourCard";
import { GoArrowUpRight } from "react-icons/go";
import SwiperScroll from "@/app/_components/ui/SwiperScroll";
import Link from "next/link";
import { useAppDispatch } from "@/app/_redux/store";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";

const Tours = () => {
  const dispatch = useAppDispatch();
  const showLoadingLayer = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <div className="section">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div>
          <h3 className="fw-bold">Our Tours</h3>
          <p className="mb-0 txtGray">Find your next tour</p>
        </div>

        <div>
          <button className="foxBtn secondBtn" onClick={showLoadingLayer}>
            <Link href="/tours">
              View All Tours <GoArrowUpRight className="fs-3" />
            </Link>
          </button>
        </div>
      </div>

      <SwiperScroll>
        {toursList.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            image={tour.image}
            rating={tour.rating}
            reviews={tour.reviews}
            price={tour.price}
            currency={tour.currency}
            badges={tour.badges}
            title={tour.title}
            address={tour.address}
            duration={tour.duration}
          />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Tours;
