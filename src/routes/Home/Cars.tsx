"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import carList from "@/public/data/Cards_Cars.json";
import SwiperScroll from "@/src/components/ui/SwiperScroll";
import CarCard from "@/src/components/Cards/CarCard";

const Cars = () => {
  return (
    <div className="section mb-5">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold">Our Cars</h3>
          <p className="mb-0 txtGray">Enjoy transportation with our cars</p>
        </div>

        <div>
          <button className="foxBtn secondBtn">
            View All Cars <GoArrowUpRight className="fs-3" />
          </button>
        </div>
      </div>

      <SwiperScroll>
        {carList.map((car) => (
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
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Cars;
