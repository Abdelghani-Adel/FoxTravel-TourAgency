import HotelCard from "@/app/_components/cards/HotelCard";
import hotels from "@/public/data/Cards_Hotels.json";
import { v4 } from "uuid";

const FlightSearchResult = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">{/* <Filter /> */}</div>

        <div className="col-12 col-lg-9">
          <div className="row g-3">
            {hotels.map((hotel) => (
              <div className="col-12 col-md-4" key={v4()}>
                <HotelCard key={hotel.id} data={hotel} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchResult;
