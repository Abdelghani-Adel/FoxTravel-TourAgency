"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import SwiperScroll from "../../_components/ui/SwiperScroll";
import packages from "@/public/data/Cards_Packages.json";
import PackageCard from "@/app/_components/cards/PackageCard";
import Link from "next/link";
import { useAppDispatch } from "@/app/_redux/store";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";

const Packages = () => {
  const dispatch = useAppDispatch();
  const showLoadingLayer = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-3">
        <div>
          <h3 className="fw-bold">Our Packages</h3>
          <p className="mb-0 txtGray">Find your next package</p>
        </div>

        <div>
          <button className="foxBtn secondBtn" onClick={showLoadingLayer}>
            <Link href="/packages">
              View All Packages <GoArrowUpRight className="fs-3" />
            </Link>
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

export default Packages;
