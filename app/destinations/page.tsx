"use client";

import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import destinationList from "@/public/data/Cards_Destinations.json";
import { v4 } from "uuid";
import DestinationCard from "@/src/components/Cards/DestinationCard";
import Filter from "@/src/components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-3 mb-3">
      <h1 className="text-center txtSecondary fw-bolder mt-5 mb-5">Find Your Next Destination</h1>
      <div className="row g-3">
        <div className="col-3">
          <Filter />
        </div>

        <div className="col-9">
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
  );
};

export default Page;
