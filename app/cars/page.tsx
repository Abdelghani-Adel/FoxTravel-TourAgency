"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import React from "react";
import carsList from "@/public/data/Cards_Cars.json";
import CarCard from "@/src/components/Cards/CarCard";
import { v4 as uuidv4 } from "uuid";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-3 mb-3">
      <div className="row g-3">
        {carsList.map((car) => (
          <div key={uuidv4()} className="col-12 col-md-3">
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
  );
};

export default Page;
