"use client";
import TourCard from "@/components/cards/TourCard";
import Filter from "@/components/Filter/Filter";
import PageStripe from "@/components/ui/PageStripe";
import { getCardsList } from "@/services/tourServices";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const Page = () => {
  const [tourList, setTourList] = useState<any[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      const { data, error } = await getCardsList();
      setTourList(data);
    };

    fetchTours();
  }, []);

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
              {tourList?.map((tour) => (
                <div key={v4()} className="col">
                  <TourCard key={tour.serviceId} data={tour} />
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
