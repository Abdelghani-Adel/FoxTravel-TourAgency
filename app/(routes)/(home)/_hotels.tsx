"use client";

import HotelCard from "@/app/_components/cards/HotelCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import hotels from "@/public/data/Cards_Hotels.json";
import SwiperScroll from "../../_components/ui/SwiperScroll";

const Hotels = () => {
  return (
    <div className="recommendedHotels section">
      <SectionHeaderWithBtn
        title="Recommended Hotels"
        desc="These hotels have a lot to offer"
        target="/hotels"
        btnTitle="View all hotels"
      />

      <SwiperScroll>
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
            title={hotel.title}
            image={hotel.image}
            address={hotel.address}
            rating={hotel.rating}
            reviewers={hotel.reviews}
            price={hotel.price}
            currency={hotel.currency}
            badges={hotel.badges}
          />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Hotels;
