"use client";
import TourCard from "@/app/_components/cards/TourCard";
import Filter from "@/app/_components/Filter/Filter";
import PageStripe from "@/app/_components/ui/PageStripe";
import tourList from "@/public/data/Cards_Tours.json";
import { v4 } from "uuid";

const Page = () => {
  return (
    <>
      <PageStripe title="Find Your Dream Tour" />

      <div className="container mt-3 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {tourList.map((tour) => (
                <div key={v4()} className="col">
                  <TourCard key={tour.id} data={tour} />
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
