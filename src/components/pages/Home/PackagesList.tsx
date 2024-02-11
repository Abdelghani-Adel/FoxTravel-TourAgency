"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import SwiperScroll from "../../ui/SwiperScroll";
import packages from "@/public/data/packageCards.json";
import PackageCard from "../../Cards/PackageCard";

const PackagesList = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div>
          <h3 className="fw-bold">Our Packages</h3>
          <p className="mb-0 txtGray">Find your next package</p>
        </div>

        <div>
          <button className="foxBtn secondBtn">
            View All Packages <GoArrowUpRight className="fs-3" />
          </button>
        </div>
      </div>

      <SwiperScroll>
        {packages.map((pkg) => (
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
        ))}
      </SwiperScroll>
    </div>
  );
};

export default PackagesList;
