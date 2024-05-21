"use client";

import DestinationCard from "@/app/_components/cards/DestinationCard";
import Filter from "@/app/_components/Filter/Filter";
import PageStripe from "@/app/_components/ui/PageStripe";
import destinationList from "@/public/data/Cards_Destinations.json";
import { v4 } from "uuid";

const Page = () => {
  return (
    <>
      <PageStripe title="Find Your Next Destination" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {destinationList.map((dest) => (
                <div key={v4()} className="col">
                  <DestinationCard key={dest.id} data={dest} />
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
