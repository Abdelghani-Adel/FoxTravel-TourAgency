"use client";
import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import hotelList from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/src/components/Cards/HotelCard";
import { v4 } from "uuid";
import Filter from "@/src/components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Dream Luxury Hotel</h1>
      </div>
      <div className="container mt-4 mb-3">
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
    </>
  );
};

export default Page;
