import React from "react";
import Filter from "@/app/_components/Filter/Filter";
import hotels from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/app/_components/cards/HotelCard";
import { v4 } from "uuid";
import HotelForm from "@/app/_components/ServiceSearch/HotelForm/HotelForm";

const HotelSearchResult = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <div className="bgThird py-4 px-3 rounded-4">
            <HotelForm />
          </div>
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          <div className="row g-3">
            {hotels.map((hotel) => (
              <div className="col-12 col-md-4" key={v4()}>
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

export default HotelSearchResult;
