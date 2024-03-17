import cars from "@/public/data/Cards_Cars.json";
import CarCard from "@/src/components/Cards/CarCard";
import TransferCard from "@/src/components/Cards/TransferCard";
import Filter from "@/src/components/Filter/Filter";
import { v4 } from "uuid";

const TransportSearchResult = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          <div className="d-flex flex-column gap-3">
            <TransferCard />
            <TransferCard />
            <TransferCard />
            <TransferCard />
            <TransferCard />
          </div>

          {/* <div className="row g-3 mt-2">
            {cars.map((car) => (
              <div className="col-12 col-md-4" key={v4()}>
                <CarCard
                  key={car.id}
                  id={car.id}
                  img={car.img}
                  model={car.model}
                  rating={car.rating}
                  reviews={car.reviews}
                  price={car.price}
                  currency={car.currency}
                  badges={car.badges}
                  passengers={car.passengers}
                  bags={car.bags}
                  transmission={car.transmission}
                  duration={car.duration}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TransportSearchResult;
