import HotelCard from "@/app/_components/cards/HotelCard";
import { getHotels } from "@/app/_services/hotelServices";
import React from "react";
import { v4 } from "uuid";

const HotelList = async () => {
  const { data, error } = await getHotels();
  const hotels: IHotel[] = data;

  if (error != null) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
      {hotels.map((hotel: any) => (
        <div key={v4()} className="col">
          <HotelCard key={hotel.id} data={hotel} />
        </div>
      ))}
    </div>
  );
};

export default HotelList;
