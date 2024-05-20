import TransferCard from "@/app/_components/cards/TransferCard";
import Filter from "@/app/_components/Filter/Filter";
import TransportSearch from "@/app/_components/ServiceSearch/TransportSearch/TransportSearch";

const TransportSearchResult = () => {
  return (
    <div className="container mt-4 mb-5">
      <div className="m-auto mb-4">
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

export default TransportSearchResult;
