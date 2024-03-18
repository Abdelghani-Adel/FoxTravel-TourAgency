"use client";

import useHideLoadingLayer from "@/app/_hooks/loadingLayer";
import packageList from "@/public/data/Cards_Packages.json";
import PackageCard from "@/app/_components/cards/PackageCard";
import { v4 } from "uuid";
import Filter from "@/app/_components/Filter/Filter";

const Page = () => {
  useHideLoadingLayer();

  return (
    <>
      <div className="bg-light py-5">
        <h1 className="text-center txtSecondary fw-bolder">Find Your Next Adventure</h1>
      </div>
      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row g-3">
              {packageList.map((pkg) => (
                <div key={v4()} className="col-12 col-md-4">
                  <PackageCard
                    key={pkg.id}
                    id={pkg.id}
                    img={pkg.image}
                    title={pkg.title}
                    rating={pkg.rating}
                    reviews={pkg.reviews}
                    price={pkg.price}
                    desc={pkg.desc}
                    currency={pkg.currency}
                    startDate={pkg.startDate}
                    endDate={pkg.endDate}
                    activitiesCount={pkg.activitiesCount}
                    startingPoints={pkg.startingPoints}
                    duration={pkg.duration}
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
