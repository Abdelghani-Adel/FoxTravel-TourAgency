"use client";
import React from "react";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import tourList from "@/public/data/Cards_Tours.json";
import TourCard from "@/app/_components/cards/TourCard";
import { v4 } from "uuid";
import Filter from "@/app/_components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Dream Tour</h1>
      </div>
      <div className="container mt-3 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row g-3">
              {tourList.map((tour) => (
                <div key={v4()} className="col-12 col-md-4">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
