import PackageCard from "@/app/_components/cards/PackageCard";
import Filter from "@/app/_components/Filter/Filter";
import PageStripe from "@/app/_components/ui/PageStripe";
import { getPackages } from "@/app/_services/packageServices";
import { v4 } from "uuid";

const Page = async () => {
  const { data, error } = await getPackages();
  const packages: IPackage[] = data;

  if (error) {
    return <h3 className="text-center text-danger">{`${error}`}</h3>;
  }

  return (
    <>
      <PageStripe title="Find Your Next Adventure" />

      <div className="container mt-4 mb-3">
        <div className="row g-3">
          <div className="col-3 d-none d-lg-block">
            <Filter />
          </div>

          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
              {packages.map((pkg) => (
                <div key={v4()} className="col">
                  <PackageCard key={pkg.id} data={pkg} />
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
