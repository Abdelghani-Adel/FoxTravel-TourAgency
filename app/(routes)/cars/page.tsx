"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import React from "react";
import carsList from "@/public/data/Cards_Cars.json";
import CarCard from "@/app/_components/cards/CarCard";
import { v4 as uuidv4 } from "uuid";
import Filter from "@/app/_components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Dream Luxury Car</h1>
      </div>
      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row g-3">
              {carsList.map((car) => (
                <div key={uuidv4()} className="col-12 col-md-4">
                  <CarCard
                    key={car.id}
                    id={car.id}
                    img={car.img}
                    model={car.model}
                    rating={car.rating}
                    reviews={car.reviews}
                    price={car.price}
                    currency={car.currency}
                    badges={car.badges}
                    passengers={car.passengers}
                    bags={car.bags}
                    transmission={car.transmission}
                    duration={car.duration}
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
