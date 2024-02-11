"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import DestinationCard from "../../common/Cards/DestinationCard";
import CardsData from "@/public/data/DetinationsCards.json";
import SwiperScroll from "../../ui/SwiperScroll";

const PopularDestinations = () => {
  return (
    <div className="popularDestinations section mb-5">
      <div className="sectionHeader">
        <div>
          <h3 className="sectionHeader_title">Popular Destinations</h3>
          <p className="sectionHeader_caption">These popular destinations have a lot to offer</p>
        </div>

        <div>
          <button className="foxBtn secondBtn">
            View All Destinations <GoArrowUpRight className="fs-3" />
          </button>
        </div>
      </div>

      <SwiperScroll>
        {CardsData.map((card) => (
          <DestinationCard
            key={card.id}
            id={card.id}
            title={card.title}
            img={card.img}
            hotels={card.hotels}
            cars={card.cars}
            trips={card.trips}
            activities={card.activities}
          />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default PopularDestinations;
