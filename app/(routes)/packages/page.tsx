"use client";

import PackageCard from "@/app/_components/cards/PackageCard";
import Filter from "@/app/_components/Filter/Filter";
import PageStripe from "@/app/_components/ui/PageStripe";
import packageList from "@/public/data/Cards_Packages.json";
import { v4 } from "uuid";

const Page = () => {
  return (
    <>
      <PageStripe title="Find Your Next Adventure" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {packageList.map((pkg) => (
                <div key={v4()} className="col">
                  <PackageCard key={pkg.id} data={pkg} />
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
