"use client";

import useHideLoadingLayer from "@/src/hooks/loadingLayer";
import destinationList from "@/public/data/Cards_Destinations.json";
import { v4 } from "uuid";
import DestinationCard from "@/src/components/Cards/DestinationCard";

const Page = () => {
  useHideLoadingLayer();

  return (
    <div className="container mt-3 mb-3">
      <div className="row g-3">
        {destinationList.map((dest) => (
          <div key={v4()} className="col-12 col-md-3">
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
  );
};

export default Page;
