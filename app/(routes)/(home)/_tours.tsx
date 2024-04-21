"use client";
import TourCard from "@/app/_components/cards/TourCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import SwiperScroll from "@/app/_components/ui/SwiperScroll";
import toursList from "@/public/data/Cards_Tours.json";

const Tours = () => {
  return (
    <div className="section">
      <SectionHeaderWithBtn
        title="Our Tours"
        desc="Find your next tour"
        target="/tours"
        btnTitle="View all tours"
      />

      <SwiperScroll>
        {toursList.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            image={tour.image}
            rating={tour.rating}
            reviews={tour.reviews}
            price={tour.price}
            currency={tour.currency}
            badges={tour.badges}
            title={tour.title}
            address={tour.address}
            duration={tour.duration}
          />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Tours;
