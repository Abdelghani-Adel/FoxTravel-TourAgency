import DestinationCard from "@/app/_components/cards/DestinationCard";
import Filter from "@/app/_components/Filter/Filter";
import PageStripe from "@/app/_components/ui/PageStripe";
import { getDestinations } from "@/app/_services/destinationServices";
import { v4 } from "uuid";

const Page = async () => {
  const { data, error } = await getDestinations();
  const destinations: IDestination[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <>
      <PageStripe title="Find Your Next Destination" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {destinations.map((dest) => (
                <div key={v4()} className="col">
                  <DestinationCard key={dest.id} data={dest} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
