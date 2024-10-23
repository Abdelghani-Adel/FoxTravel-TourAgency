import TourCard from "@/app/_components/cards/TourCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import SwiperScroll from "@/app/_components/ui/SwiperScroll";
import { getCardsList } from "@/app/_services/tourServices";

const BestTours = async () => {
  const { data, error } = await getCardsList();
  const toursList: ITour[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

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
          <TourCard key={tour.serviceId} data={tour} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default BestTours;
