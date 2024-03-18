"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import hotelList from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/app/_components/cards/HotelCard";
import { v4 } from "uuid";
import Filter from "@/app/_components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Dream Luxury Hotel</h1>
      </div>
      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
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
