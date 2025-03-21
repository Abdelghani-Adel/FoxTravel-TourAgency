import HotelCard from "@/components/cards/HotelCard";
import SectionHeaderWithBtn from "@/components/ui/SectionHeaderWithBtn";
import { getBestHotels } from "@/services/hotelServices";
import { v4 } from "uuid";
import SwiperScroll from "@/components/ui/SwiperScroll";

const BestHotels = async () => {
  const { data, error } = await getBestHotels();
  const hotelList: IHotel[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="recommendedHotels section">
      <SectionHeaderWithBtn
        title="Recommended Hotels"
        desc="These hotels have a lot to offer"
        target="/hotels"
        btnTitle="View all hotels"
      />

      <SwiperScroll>
        {hotelList.map((hotel: any) => (
          <HotelCard key={v4()} data={hotel} />
        ))}
      </SwiperScroll>
    </div>
  );
};

export default BestHotels;
