"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import DestinationCard from "@/app/_components/cards/DestinationCard";
import CardsData from "@/public/data/Cards_Destinations.json";
import SwiperScroll from "../../_components/ui/SwiperScroll";
import Link from "next/link";
import { useAppDispatch } from "@/app/_redux/store";
import { loaderActions } from "@/app/_redux/slices/loaderSlice";

const Destinations = () => {
  const dispatch = useAppDispatch();
  const showLoadingLayer = () => dispatch(loaderActions.showLoadingOverlay());

  return (
    <div className="popularDestinations section mb-5">
      <div className="sectionHeader">
        <div>
          <h3 className="sectionHeader_title">Popular Destinations</h3>
          <p className="sectionHeader_caption">These popular destinations have a lot to offer</p>
        </div>

        <div>
          <button className="foxBtn secondBtn" onClick={showLoadingLayer}>
            <Link href="/destinations">
              View All Destinations <GoArrowUpRight className="fs-3" />
            </Link>
          </button>
        </div>
      </div>

      <SwiperScroll>
        {CardsData.map((card) => (
          <DestinationCard key={card.id} data={card} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Destinations;
