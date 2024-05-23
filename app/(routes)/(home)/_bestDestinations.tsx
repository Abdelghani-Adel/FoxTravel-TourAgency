import DestinationCard from "@/app/_components/cards/DestinationCard";
import SectionHeaderWithBtn from "@/app/_components/ui/SectionHeaderWithBtn";
import { getBestDestinations } from "@/app/_services/destinationServices";
import SwiperScroll from "../../_components/ui/SwiperScroll";

const BestDestinations = async () => {
  const { data, error } = await getBestDestinations();
  const destinations: IDestination[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="popularDestinations section mb-5">
      <SectionHeaderWithBtn
        title="Popular Destinations"
        desc="These popular destinations have a lot to offer"
        target="/destinations"
        btnTitle="View all Destinations"
      />

      <SwiperScroll>
        {destinations.map((card) => (
          <DestinationCard key={card.id} data={card} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default BestDestinations;
