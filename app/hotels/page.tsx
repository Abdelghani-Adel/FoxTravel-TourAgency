"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import hotelList from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/src/components/Cards/HotelCard";
import { v4 } from "uuid";
import Filter from "@/src/components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-3 mb-3">
      <h1 className="text-center txtSecondary fw-bolder mt-5 mb-5">Find Your Dream Luxury Hotel</h1>
      <div className="row g-3">
        <div className="col-3">
          <Filter />
        </div>

        <div className="col-9">
          <div className="row g-3">
            {hotelList.map((hotel) => (
              <div key={v4()} className="col-12 col-md-4">
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
