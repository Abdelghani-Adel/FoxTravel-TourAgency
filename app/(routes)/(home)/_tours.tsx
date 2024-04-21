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
          <TourCard key={tour.id} data={tour} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default Tours;
