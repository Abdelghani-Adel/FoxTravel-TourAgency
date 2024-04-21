"use client";
import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import hotelList from "@/public/data/Cards_Hotels.json";
import HotelCard from "@/app/_components/cards/HotelCard";
import { v4 } from "uuid";
import Filter from "@/app/_components/Filter/Filter";
import HotelForm from "@/app/_components/ServiceSearch/HotelForm/HotelForm";
import PageStripe from "@/app/_components/ui/PageStripe";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <PageStripe title="Find your dream luxury hotel" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-lg-4 col-xxl-3 d-none d-lg-block">
            <div className="bg-warning py-4 px-3 rounded-4">
              <HotelForm />
            </div>
            <Filter />
          </div>

          <div className="col-12 col-lg-8 col-xxl-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {hotelList.map((hotel) => (
                <div key={v4()} className="col">
                  <HotelCard key={hotel.id} data={hotel} />
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
