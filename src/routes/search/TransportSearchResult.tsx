import cars from "@/public/data/Cards_Cars.json";
import CarCard from "@/src/components/Cards/CarCard";
import TransferCard from "@/src/components/Cards/TransferCard";
import Filter from "@/src/components/Filter/Filter";
import MultiSteps from "@/src/components/ui/MultiSteps/MultiSteps";
import { v4 } from "uuid";

const steps = ["Select Transfer", "Extras", "Order Details", "Order Summary", "Purchase"];

const TransportSearchResult = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">
        <div className="col-3 d-none d-lg-block">
          <Filter />
        </div>

        <div className="col-12 col-lg-9">
          {/* <MultiSteps currentStep={3} steps={steps} /> */}
          <div className="d-flex flex-column gap-3">
            <TransferCard />
            <TransferCard />
            <TransferCard />
            <TransferCard />
            <TransferCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportSearchResult;
