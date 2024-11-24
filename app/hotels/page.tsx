import Filter from "@/components/Filter/Filter";
import HotelSearch from "@/components/ServiceSearch/HotelSearch/HotelSearch";
import PageStripe from "@/components/ui/PageStripe";
import HotelList from "./_hotelList";

const Page = async () => {
  return (
    <>
      <PageStripe title="Find your dream luxury hotel" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-lg-4 col-xxl-3 d-none d-lg-block">
            <div className="bg-warning p-2 rounded-4 column">
              <HotelSearch />
            </div>
            <Filter />
          </div>

          <div className="col-12 col-lg-8 col-xxl-9">
            <HotelList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
