"use client";
import TransferCard from "@/components/cards/TransferCard";
import Filter from "@/components/Filter/Filter";
import TransportSearch from "@/components/ServiceSearch/TransportSearch/TransportSearch";

const Page = () => {
  return (
    <div className="container mt-4 mb-5">
      <div className="m-auto mb-4 bgSecondary p-3 rounded-3">
        <TransportSearch />
      </div>

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
        </div>
      </div>
    </div>
  );
};

export default Page;
