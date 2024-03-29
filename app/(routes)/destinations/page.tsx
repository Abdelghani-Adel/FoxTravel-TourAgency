"use client";

import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import destinationList from "@/public/data/Cards_Destinations.json";
import { v4 } from "uuid";
import DestinationCard from "@/app/_components/cards/DestinationCard";
import Filter from "@/app/_components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Next Destination</h1>
      </div>
      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row g-3">
              {destinationList.map((dest) => (
                <div key={v4()} className="col-12 col-md-4">
                  <DestinationCard
                    key={dest.id}
                    id={dest.id}
                    title={dest.title}
                    img={dest.img}
                    hotels={dest.hotels}
                    cars={dest.cars}
                    trips={dest.trips}
                    activities={dest.activities}
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
